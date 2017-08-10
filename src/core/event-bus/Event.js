/* Import other event classes */
import EventType from './EventType';
import EventBus from './EventBus';
import EventBusException from './EventBusException';
import { ModuleLogger } from '../logger';

const log = new ModuleLogger( 'Event' );

class Event {
  constructor( opts = {} ) {
    /* Define the default options for an event */
    const defaultOpts = {
      name: '',
      data: {},
      type: EventType.REQ,
      maxResponses: -1,
      globalResponse: false,
    }

    /* Merge the opts with the default options */
    opts = {
      ...defaultOpts,
      ...opts
    };

    /* Set the options and other initial values */
    this.options = opts;
    this.responsesReceived = 0;
    this.published = false;
    this.responseHandler = null;

    return this;
  }

  /* Returns the event name */
  getName() {
    return this.options.name;
  }

  /* Returns the event data */
  getData() {
    return this.options.data;
  }

  /* Returns the event type */
  getType() {
    return this.options.type;
  }

  /* Publishes the event on the event bus */
  publish() {
    this.responsesReceived = 0;
    EventBus.publish( this );
  }

  /* Sets the response handler for the event */
  setResponseHandler( handler, filter ) {
    /* Log a warning if we are setting a handler on a non REQRES event */
    if ( this.options.type != EventType.REQRES ) {
      log.warning( 'A response handler has been set on a non REQRES event' );
    }

    /* Check that the handler provided is non null and a function */
    if ( !handler || !( handler instanceof Function )) {
      throw new EventBusException( 'A valid response handler must be provided' );
    }

    /* Check to see if a filter was defined */
    if ( filter ) {
      this.responseHandler = data => {
        if ( filter.process( data )) {
          handler( data );
        }
      };
    } else {
      /* Set the response handler */
      this.responseHandler = handler;
    }
  }

  /* Creates a response for the event */
  respond( data ) {
    const { published, options, responseHandler, responsesReceived } = this;
    const { name, type, maxResponses, globalResponse } = options;

    /* Check that this event has been published */
    if ( !published ) {
      throw new EventBusException( 'You cannot respond to an event that has not been published' );
    }

    /* Check that responses are allowed to this type of event */
    if ( type != EventType.REQRES ) {
      throw new EventBusException( 'You cannot respond to an event that is not a REQRES event' );
    }

    /* Drop the response if we have exceeded the maximum number of responses */
    if ( maxResponses != -1 && responsesReceived >= maxResponses ) {
      return;
    }

    /* Check whether this is a global response */
    if ( globalResponse ) {
      /* Define the response event */
      EventBus.defineEvent( `${name}_RESPONSE` );

      /* Create a new event */
      const responseEvent = new Event({
        name: `${name}_RESPONSE`,
        data
      });

      /* Publish the event */
      responseEvent.publish();
    } else {
      /* Check that a response handler is in place */
      if ( !responseHandler ) {
        throw new EventBusException( 'Cannot respond to an event that does not have a response handler' );
      }

      /* Call the response handler with the provided data */
      responseHandler( data );
    }

    /* Increment responses received */
    this.responsesReceived++;
  }
}

export default Event;

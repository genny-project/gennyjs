/* Import dependencies */
import EventEmitter from 'wolfy87-eventemitter';
import { ModuleLogger } from '../logger';
import EventBusException from './EventBusException';
import Event from './Event';

/**
 * The EventBus class handles the lifecycle of all events that passthrough
 * the system. It is responsible to providing access to all of these events
 * as well the management of them.
 */
class EventBus {
  /**
   * When the EventBus is created create a new EventEmitter and define
   * a list of events. Also create an internal logger.
   */
  constructor() {
    this.ee = new EventEmitter();
    this.events = [];
    this.logger = new ModuleLogger( 'EventBus' );
    this.logger.info( 'Created' );
  }

  /* Returns a list of acceptable events */
  getEvents() {
    return this.events;
  }

  /**
   * The defineEvent function defines events that will be created by components
   * of the system. You can pass in a single string representing an event name
   * or an array of strings to define multiple events at once. The passed in
   * event names are then both added to our internal list of event names and
   * added to the EventEmitter
   */
  defineEvent( event ) {
    /* Throw an exception if no event was supplied */
    if ( !event ) {
      throw new EventBusException( 'An event must be supplied' );
    }

    /* Check whether we were passed in an array */
    if ( !( event instanceof Array )) {
      event = [event];
    }

    /* Store a list of defined events */
    const defined = [];

    /* Loop through the passed in event names */
    event.forEach( e => {
      /* Make sure we haven't already defined this event */
      if ( this.events.indexOf( e ) < 0 ) {
        this.events.push( e );
        defined.push( e );
        this.ee.defineEvent( e );
      }
    });

    /* Log that the events have been created */
    if ( defined.length ) {
      this.logger.debug( `Defined events: ${event.join( ', ' )}` );
    }
  }

  /* The publish function publishes the supplied event on the EventBus */
  publish( event ) {
    /* Check that an event was provided and that is of the correct type */
    if ( !event || !( event instanceof Event )) {
      throw new EventBusException( 'An event must be supplied' );
    }

    /* Check that the event is a defined event */
    if ( this.events.indexOf( event.getName()) === -1 ) {
      this.logger.warning( `Event with name ${event.getName()} has not be defined, not publishing` );
      return;
    }

    /* Log that the event has been published */
    this.logger.debug( event.getName(), event );

    /* Mark the event as published and publish */
    event.published = true;
    this.ee.emit( event.getName(), event );
  }

  /* The subscribe function allows for subscription to events on the EventBus */
  subscribe( eventName, callback ) {
    this.ee.addListener( eventName, callback );
  }

  /* The unsubscribe function allows for subscriptions to be removed from the EventBus */
  unsubscribe( eventName, subscription ) {
    this.ee.removeListener( eventName, subscription );
  }
}

/* Export this class as a singleton so that only one instance can ever exist */
export default new EventBus();

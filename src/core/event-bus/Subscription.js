/* Import other event classes */
import EventBus from './EventBus';
import EventBusException from './EventBusException';
import { Filter } from '../';

class Subscription {
  constructor( name, options, handler ) {
    /* Check that name was provided */
    if ( !name ) {
      throw new EventBusException( 'A event name must be provided when creating a subscription' );
    }

    /* Check that the options were provided */
    if ( !options ) {
      throw new EventBusException( 'Options must be provided when creating a subscription' );
    }

    /* Check that a handler was provided */
    if ( !handler || !( handler instanceof Function )) {
      throw new EventBusException( 'A valid handler must be provided when creating a subscription' );
    }

    /* Define the default options */
    const defaultOptions = {
      maxEvents: -1,
      filter: {},
    };

    /* Merge the options with the default options */
    const mergedOptions = {
      ...defaultOptions,
      ...options,
    };

    /* Store the options as well as define initial values */
    this.options = mergedOptions;
    this.name = name;
    this.handler = handler;
    this.eventsReceived = 0;

    /* Create a filter */
    this.filter = new Filter( this.options.filter );

    /* Listen on the event bus for events */
    EventBus.subscribe( this.name, event => this.onEvent( event ));
  }

  onEvent( event ) {
    if ( !this.filter.process( event.getData())) {
      return false;
    }

    /* Send the event to the handler */
    this.handler( event );

    /**
     * Increment the events received and check if we have received the
     * desired amount */
    this.eventsReceived = this.eventsReceived + 1;

    /* Destroy the subscription if required */
    return this.options.maxEvents !== -1 && this.eventsReceived >= this.options.maxEvents;
  }
}

export default Subscription;

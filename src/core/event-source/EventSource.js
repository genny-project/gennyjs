/* Import the other event classes */
import { EventBus, Subscription } from '../';
import EventSourceException from './EventSourceException';
import EventSourceAdapterLoader from './EventSourceAdapterLoader';

class EventSource {
  constructor( config ) {
    /* Check that some config was passed in */
    if ( !config || !config.adapter || !config.subscribe || !config.publish || !config.config ) {
      throw new EventSourceException( 'Invalid config when creating new event source' );
    }

    /* Store the config */
    this.config = config;

    /* Attempt to load the adpater */
    this.adapter = EventSourceAdapterLoader.get( this.config.adapter );

    /* Create an instance of the adapter */
    this.adapterInstance = new this.adapter( config );

    /* Once the adapter is loaded define the events */
    this.config.subscribe.forEach(( e ) => {
      EventBus.defineEvent( e.name );
    });

    this.config.publish.forEach(( e ) => {
      EventBus.defineEvent( e.name );
    });

    /* Define a list of subscriptions */
    this.subscriptions = [];

    /* Now that the events have been defined let's subscribe to them */
    this.config.subscribe.forEach(( e ) => {
      const subscription = new Subscription( e.name, e.options, ( event ) => {
        /* Pass the event through to the adapter */
        this.adapterInstance.onEvent( e.mapTo ? e.mapTo : event.getName(), event );
      });

      /* Add the subscription to the list of subscriptions */
      this.subscriptions.push( subscription );
    });
  }
}

export default EventSource;

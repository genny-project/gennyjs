import { EventBusException } from '../';

class EventSourceAdapter {
  constructor( config ) {
    this.config = config;

    /* Validate the config */
    if ( !this.config ) {
      throw new EventBusException( 'Config must be provided to a EventSourceAdapter' );
    }
  }

  onEvent() {}
}

export default EventSourceAdapter;

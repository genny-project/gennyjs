import EventSourceException from './EventSourceException';
import { ModuleLogger } from '../';

/* The EventSourceAdapterLoader class registers and loads event source adapters */
class EventSourceAdapterLoader {
  constructor() {
    this.adapters = {};
    this.log = new ModuleLogger( 'EventSourceAdapterLoader' );
  }

  /* Returns the adapter with the provided name */
  get( name ) {
    /* Check that the adapter exists */
    if ( !this.adapters[name] ) {
      throw new EventSourceException( `Couldn't get adapter with name ${name}` );
    }

    /* Return the adapter with the provided name */
    return this.adapters[name];
  }

  /* Registers a new adapter with the provided name and adapter class */
  register( name, adapter ) {
    /* Check that name and adapter class were provided */
    if ( !name || name.trim() === '' ) {
      throw new EventSourceException( 'A valid name must be provided when registering an adapter' );
    }

    if ( !adapter ) {
      throw new EventSourceException( 'A valid event source adapter class must be provided' );
    }

    /* Register the adapter under the provided name */
    this.adapters[name] = adapter;

    /* Log that we have registered the adapter */
    this.log.debug( `Registered ${adapter.constructor.name} as ${name}` );
  }
}

/* Export this class as a singleton so only one can exist */
export default new EventSourceAdapterLoader();

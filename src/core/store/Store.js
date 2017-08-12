/* Import other event classes */
import { EventBus, Event, EventType, ModuleLogger, Subscription } from '../';

class Store {
  constructor( name, options ) {
    /* Standardize the name */
    this.name = name.toUpperCase();

    /* Create an internal logger */
    this.log = new ModuleLogger( `STORE_${this.name}` );

    /* Define the default options */
    const defaultOptions = {
      initialState: {},
      persistent: false,
      autoSave: false,
      autoSaveTime: 15000,
    };

    /* Combine the default options with the options passed in */
    this.options = {
      ...defaultOptions,
      ...options,
    };

    /* Create the data store with the specified name, loading from local storage if needed */
    this.db = ( localStorage.getItem( `STORE_${this.name}` )) ? JSON.parse( localStorage.getItem( `STORE_${this.name}` )) : this.options.initialState;

    /* Define internal events */
    EventBus.defineEvent( [
      `STORE_CREATE_${this.name}`,
      `STORE_INSERT_${this.name}`,
      `STORE_SAVE_${this.name}`,
      `STORE_SAVED_${this.name}`,
    ] );

    /* Create an event */
    const creationEvent = new Event({
      name: `STORE_CREATE_${this.name}`,
      type: EventType.REQ,
    });

    /* Publish the event */
    creationEvent.publish();

    /* Check whether autosave is enabled */
    if ( this.options.autoSave && this.options.persistent ) {
      /* Create an autosave timer */
      setInterval(() => {
        this.log.info( 'Autosaving' );
        this.save();
      }, this.options.autoSaveTime );
    }

    /* Create a new subscription to any save events for this store */
    this.subscription = new Subscription( `STORE_SAVE_${this.name}`, {}, () => {
      /* Save the store */
      this.save();
    });
  }

  set( data ) {
    /* Update the store */
    this.db = {
      ...this.db,
      ...data,
    };

    /* Create an insert event */
    const insertEvent = new Event({
      name: `STORE_INSERT_${this.name}`,
      type: EventType.REQ,
      data,
    });

    /* Publish the event */
    insertEvent.publish();
  }

  get( key ) {
    return this.db[key];
  }

  getAll() {
    return this.db;
  }

  /* Persists the store to local storage */
  save() {
    /* Check if this store is a persistent one */
    if ( this.options.persistent ) {
      this.log.info( 'Saving to localStorage' );
      localStorage.setItem( `STORE_${this.name}`, JSON.stringify( this.db ));

      /* Create an event */
      const savedEvent = new Event({
        name: `STORE_SAVED_${this.name}`,
        type: EventType.REQ,
      });

      /* Publish the event */
      savedEvent.publish();
    }
  }
}

export default Store;

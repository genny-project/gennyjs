import axios from 'axios';
import LZString from 'lz-string';
import GennyJS, { Store, Reducer, EventSource, EventBus, Workflow } from '../../';

class ConfigLoader {
  load( url, callback ) {
    this.fetchConfig( url, ( data ) => {
      /* Firstly decompress the data */
      const decompressed = LZString.decompressFromEncodedURIComponent( data.value );
      /* Eval the decompressed data to get the loaded config */
      const config = ( eval( `(${decompressed})` ));
      /* Load the config */
      this.loadConfig( config, callback );
    });
  }

  fetchConfig( url, callback ) {
    axios({
      url,
    }).then(({ data }) => {
      callback( data );
    });
  }

  loadConfig( config, callback ) {
    const { stores, reducers, eventSources, events, workflows } = config;
    /* Create and register the stores */
    stores.forEach(( s ) => {
      const store = new Store( s );
      GennyJS.registerStore( store );
    });

    /* Now load up the reducers, injecting the loaded stores and registering them */
    reducers.forEach(( r ) => {
      const reducer = new Reducer({
        ...r,
        store: GennyJS.stores[r.store.toUpperCase()],
        handler: eval( r.handler ),
      });

      GennyJS.registerReducer( reducer );
    });

    /* Now load up the event sources */
    eventSources.forEach(( e ) => {
      const source = new EventSource( e );
      GennyJS.registerEventSource( source );
    });

    /* Now load the custom events */
    EventBus.defineEvent( events );

    /* Finally load the workflows */
    workflows.forEach(( w ) => {
      const workflow = new Workflow( w );
      GennyJS.registerWorkflow( workflow );
    });

    callback();
  }
}

export default new ConfigLoader();

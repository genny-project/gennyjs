import {
  AppAdapter, AlertAdapter, HttpAdapter, TimerAdapter, LogAdapter,
  AppEventSource, TimerEventSource, AlertEventSource, LogEventSource,
} from './bundled';
import { EventSourceAdapterLoader, EventSource, ModuleLogger } from './core';

class GennyJS {
  constructor() {
    this.version = 0.01;
    this.eventSources = [];
    this.log = new ModuleLogger( 'GennyJS' );
    this.stores = {};
  }

  /* Returns the current version of the GennyJS library */
  getVersion() {
    return this.version;
  }

  init() {
    /* Log that we are starting */
    this.log.info( 'GennyJS initialising' );

    /* Load the bundled adapters */
    EventSourceAdapterLoader.register( 'timer', TimerAdapter );
    EventSourceAdapterLoader.register( 'http', HttpAdapter );
    EventSourceAdapterLoader.register( 'alert', AlertAdapter );
    EventSourceAdapterLoader.register( 'log', LogAdapter );
    EventSourceAdapterLoader.register( 'app', AppAdapter );
  }

  registerStore( store ) {
    this.stores[store.name] = store;
  }

  start() {
    /* Load the bundled event sources */
    this.eventSources.push( new EventSource( AlertEventSource ));
    this.eventSources.push( new EventSource( TimerEventSource ));
    this.eventSources.push( new EventSource( LogEventSource ));

    /* Always make sure app event source is last */
    this.eventSources.push( new EventSource( AppEventSource ));

    this.log.info( 'GennyJS started' );
  }
}

export default new GennyJS();

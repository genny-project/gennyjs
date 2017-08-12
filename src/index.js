import {
  AppAdapter, AlertAdapter, HttpAdapter, TimerAdapter,
  AppEventSource, TimerEventSource, AlertEventSource,
} from './bundled';
import { EventSourceAdapterLoader, EventSource, ModuleLogger } from './core';

/* Export all the modules */
export * from './bundled';
export * from './core';

class GennyJS {
  constructor() {
    this.version = 0.01;
    this.eventSources = [];
    this.log = new ModuleLogger( 'GennyJS' );
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
    EventSourceAdapterLoader.register( 'app', AppAdapter );

    /* Load the bundled event sources */
    this.eventSources.push( new EventSource( AlertEventSource ));
    this.eventSources.push( new EventSource( TimerEventSource ));
    this.eventSources.push( new EventSource( AppEventSource ));
  }
}

export default new GennyJS();

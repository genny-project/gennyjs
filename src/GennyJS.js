import {
  AppAdapter, AlertAdapter, HttpAdapter, TimerAdapter, LogAdapter, KeycloakAdapter,
  AppEventSource, TimerEventSource, AlertEventSource, LogEventSource, KeycloakEventSource,
} from './bundled';
import { EventSourceAdapterLoader, EventSource, ModuleLogger } from './core';

class GennyJS {
  constructor() {
    this.version = 0.01;
    this.eventSources = [];
    this.log = new ModuleLogger( 'GennyJS' );
    this.stores = {};
    this.reducers = [];
    this.workflows = {};
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
    EventSourceAdapterLoader.register( 'keycloak', KeycloakAdapter );
    EventSourceAdapterLoader.register( 'app', AppAdapter );
  }

  registerStore( store ) {
    this.stores[store.name] = store;
  }

  registerReducer( reducer ) {
    this.reducers.push( reducer );
  }

  registerEventSource( source ) {
    this.eventSources.push( source );
  }

  registerWorkflow( workflow ) {
    this.workflows[workflow.id] = workflow;
  }

  start() {
    /* Load the bundled event sources */
    this.eventSources.push( new EventSource( AlertEventSource ));
    this.eventSources.push( new EventSource( TimerEventSource ));
    this.eventSources.push( new EventSource( LogEventSource ));
    this.eventSources.push( new EventSource( KeycloakEventSource ));

    /* Always make sure app event source is last */
    this.eventSources.push( new EventSource( AppEventSource ));

    this.log.info( 'GennyJS started' );
  }
}

export default new GennyJS();

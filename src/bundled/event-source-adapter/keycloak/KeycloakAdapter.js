import { EventBus, EventSourceAdapter, Event, EventType } from '../../../core';
import KeycloakAuth from './KeycloakAuth';

class KeycloakAdapter extends EventSourceAdapter {
  constructor( config ) {
    super( config );
    /* Define the events */
    EventBus.defineEvent( ['KEYCLOAK_AUTH_COMPLETE', 'KEYCLOAK_NOT_LOGGED_IN'] );
  }

  onEvent( name, event ) {
    switch ( name ) {
      case 'KEYCLOAK_LOAD':
        return this.onLoad( event );
      case 'KEYCLOAK_INIT':
        return this.onInit( event );
      case 'KEYCLOAK_LOGIN':
        return this.onLogin( event );
      case 'KEYCLOAK_LOGOUT':
        return this.onLogout( event );
      case 'KEYCLOAK_REGISTER':
        return this.onRegister( event );
      default:
        return null;
    }
  }

  onLoad( event ) {
    const config = event.getData();
    KeycloakAuth.load( config );
  }

  onInit() {
    KeycloakAuth.init(( result ) => {
      if ( result ) {
        const authEvent = new Event({
          name: 'KEYCLOAK_AUTH_COMPLETE',
          type: EventType.REQ,
          data: KeycloakAuth.get(),
        });

        /* Trigger the auth event */
        authEvent.publish();
      } else {
        const authEvent = new Event({
          name: 'KEYCLOAK_NOT_LOGGED_IN',
          type: EventType.REQ,
          data: {},
        });

        /* Trigger the auth event */
        authEvent.publish();
      }
    });
  }

  onLogin( event ) {
    KeycloakAuth.login( event.getData());
  }

  onLogout( event ) {
    KeycloakAuth.logout( event.getData());
  }

  onRegister( event ) {
    KeycloakAuth.register( event.getData());
  }
}

export default KeycloakAdapter;

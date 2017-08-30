import keycloak from 'keycloak-js';

/**
 * This class links the offical Keycloak javascript connector with React / Redux
 * and provides methods to protect routes from being viewed unless the user is
 * authenticated.
 */
class KeycloakAuth {
  /** Creates a new instance of Keycloak and sets up the event handlers */
  load( config ) {
    /** Stores and instance of the Keycloak library instance */
    this.config = config;
    this.keycloak = keycloak( config );
  }

  login( opts ) {
    const options = { ...opts };
    this.keycloak.login( options );
  }

  logout( opts ) {
    const options = { ...opts };
    this.keycloak.logout( options );
  }

  register( options ) {
    let url = this.keycloak.createRegisterUrl({ ...options });
    if ( options && options.params != null ) {
      options.params.forEach(( param ) => {
        url = `${url}&${encodeURI( param.key )}=${encodeURI( param.value )}`;
      });
    }

    window.location.replace( url );
  }

  init( callback ) {
    this.keycloak.init({ onLoad: 'check-sso' }).success( callback );
  }

  get() {
    return this.keycloak;
  }
}

/** Exports a new instance of the Keycloak auth library */
export default ( new KeycloakAuth());

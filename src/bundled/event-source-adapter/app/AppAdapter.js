import GennyJS from '../../../';
import { Event, EventType, EventBus, EventSourceAdapter } from '../../../core';

class AppAdapter extends EventSourceAdapter {
  constructor( config ) {
    super( config );
    /* Define events */
    EventBus.defineEvent( 'APP_INIT' );

    /* Publish the init event */
    this.createAppInit();
  }

  createAppInit() {
    const initEvent = new Event({
      name: 'APP_INIT',
      type: EventType.REQ,
      data: this.getInitData(),
    });

    /* Trigger the app init event */
    initEvent.publish();
  }

  getInitData() {
    return {
      genny: {
        version: GennyJS.getVersion(),
      },
      referrer: document.referrer,
      location: {
        host: window.location.host,
        hostname: window.location.hostname,
        hash: window.location.hash,
        href: window.location.href,
        origin: window.location.origin,
        pathname: window.location.pathname,
        port: window.location.port,
        protocol: window.location.protocol,
      },
      userAgent: navigator.userAgent,
      cookies: document.cookie.split( '; ' ).map(( c ) => { const s = c.split( '=' ); return { key: s[0], value: s[1] }; }).reduce(( a, b ) => Object.assign({ [b.key]: b.value }, a ), {}),
    };
  }
}

export default AppAdapter;

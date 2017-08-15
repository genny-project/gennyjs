import axios from 'axios';
import { EventSourceAdapter, EventType, Event } from '../../../core';

class HttpAdapter extends EventSourceAdapter {
  onEvent( name, event ) {
    switch ( name ) {
      case 'HTTP_REQUEST':
        return this.onRequest( event );
      default:
        return null;
    }
  }

  onRequest( event ) {
    const { path, method, data } = event.getData();
    axios({
      method,
      data,
      baseURL: this.config.config.baseURL,
      url: path,
    }).then(( response ) => {
      if ( event.getType() === EventType.REQRES ) {
        event.respond( response );
      }

      if ( event.getType() === EventType.REQ ) {
        new Event({
          name: this.config.config.responseEvent || 'HTTP_RESPONSE',
          data: response,
        }).publish();
      }
    }).catch(( response ) => {
      if ( event.getType() === EventType.REQRES ) {
        event.respond( response );
      }

      if ( event.getType() === EventType.REQ ) {
        new Event({
          name: this.config.config.errorEvent || 'HTTP_ERROR',
          data: response,
        }).publish();
      }
    });
  }
}

export default HttpAdapter;

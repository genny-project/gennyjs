import axios from 'axios';
import { EventSourceAdapter } from '../../core';

class HttpAdapter extends EventSourceAdapter {
  constructor( config ) {
    super( config );
  }

  onEvent( name, event ) {
    switch( name ) {
      case 'HTTP_REQUEST':
        return this.onRequest( event );
      default:
        return;
    }
  }

  onRequest( event ) {
    const { path, method } = event.getData();
    axios({
      method,
      baseURL: this.config.config.baseURL,
      url: path,
    }).then( response => {
      event.respond( response );
    }).catch( response => {
      event.respond( response );
    });
  }
}

export default HttpAdapter;

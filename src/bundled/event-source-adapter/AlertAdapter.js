import axios from 'axios';
import { EventSourceAdapter } from '../../core';

class AlertAdapter extends EventSourceAdapter {
  constructor( config ) {
    super( config );
  }

  onEvent( name, event ) {
    switch( name ) {
      case 'ALERT':
        return this.onAlert( event );
      default:
        return;
    }
  }

  onAlert( event ) {
    const { message } = event.getData();
    alert( message );
  }
}

export default AlertAdapter;

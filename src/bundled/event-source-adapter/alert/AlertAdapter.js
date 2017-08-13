import { EventSourceAdapter } from '../../../core';

class AlertAdapter extends EventSourceAdapter {
  onEvent( name, event ) {
    switch ( name ) {
      case 'ALERT':
        return this.onAlert( event );
      default:
        return null;
    }
  }

  onAlert( event ) {
    const { message } = event.getData();
    // eslint-disable-next-line no-undef, no-alert
    alert( message );
  }
}

export default AlertAdapter;

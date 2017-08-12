import { EventSourceAdapter } from '../../core';

class LogAdapter extends EventSourceAdapter {
  onEvent( name, event ) {
    switch ( name ) {
      case 'LOG':
        return this.onLog( event );
      default:
        return null;
    }
  }

  onLog( event ) {
    const { message } = event.getData();
    // eslint-disable-next-line no-undef, no-console
    console.log( message );
  }
}

export default LogAdapter;

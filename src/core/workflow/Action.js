import { Event } from '../';

class Action {
  constructor( options ) {
    this.options = options;
  }

  getType() {
    return this.options.type;
  }

  run() {
    if ( this.getType() === 'event' ) {
      const event = new Event( this.options.event );
      if ( this.options.response ) {
        if ( this.options.response.length ) {
          event.setResponseHandler(() => {
            this.options.response.forEach(( r ) => {
              new Action( r ).run();
            });
          });
        } else {
          event.setResponseHandler(() => {
            new Action( this.options.response ).run();
          });
        }
      }

      event.publish();
    }
  }
}

export default Action;

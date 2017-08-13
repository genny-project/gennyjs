import Mustache from 'mustache';
import { Event } from '../';

class Action {
  constructor( options, context ) {
    this.options = options;
    this.context = context;
  }

  getType() {
    return this.options.type;
  }

  run() {
    if ( this.getType() === 'event' ) {
      /* Inject the context and the store */
      const contextedEvent = JSON.parse( Mustache.render( JSON.stringify( this.options.event ), {
        ...this.context,
        store: this.context.store && this.context.store.getAll ? this.context.store.getAll() : {},
      }));
      const event = new Event( contextedEvent );

      if ( this.options.response ) {
        if ( this.options.response.length ) {
          event.setResponseHandler(( data ) => {
            this.options.response.forEach(( r ) => {
              new Action( r, {
                ...this.context,
                store: this.context.store,
                event: data,
              }).run();
            });
          });
        } else {
          event.setResponseHandler(( data ) => {
            new Action( this.options.response, {
              ...this.context,
              store: this.context.store,
              event: data,
            }).run();
          });
        }
      }

      event.publish();
    }
  }
}

export default Action;

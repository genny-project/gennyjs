import { Subscription } from '../';

class Reducer {
  constructor( options ) {
    /* Define the default options */
    const defaultOptions = {
      handler: () => {},
      store: null,
      subscribe: [],
    };

    /* Merge the default options with the passed in options */
    this.options = {
      ...defaultOptions,
      ...options,
    };

    /* Create subscriptions from the passed in subscriptions */
    this.subscriptions = [];

    this.options.subscribe.forEach(( e ) => {
      const subscription = new Subscription( e.name, e.options, event => this.reduce( event ));

      /* Add the subscription to the list of subscriptions */
      this.subscriptions.push( subscription );
    });
  }

  reduce( event ) {
    /* Create a full copy of the store data */
    const currentStore = JSON.parse( JSON.stringify( this.getStore().getAll()));
    /* Do some reductions, passing in the event and the current store value */
    this.getStore().set( this.options.handler( event, currentStore ));
  }

  /* Gets the store */
  getStore() {
    return this.options.store;
  }

  /* Updates the store used */
  setStore( store ) {
    this.options.store = store;
  }
}

export default Reducer;

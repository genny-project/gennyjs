/* Import other classes */
import Mustache from 'mustache';
import WorkflowException from './WorkflowException';
import GennyJS from '../../GennyJS';
import { Subscription } from '../event-bus';
import { ModuleLogger } from '../logger';
import Action from './Action';

class Workflow {
  constructor( config ) {
    /* Check that config was provided */
    if ( !config ) {
      throw new WorkflowException( 'Config must be provided when creating a workflow' );
    }

    /* Check that required config options were provided */
    if ( !config.trigger ) {
      throw new WorkflowException( 'A valid trigger must be provided when creating a workflow' );
    }

    if ( !config.actions ) {
      throw new WorkflowException( 'A valid list of actions must be provided when creating a workflow' );
    }

    /* Define the default config */
    const defaultConfig = {
      active: true,
      trigger: {},
      actions: [],
      store: null,
    };

    /* Combine the provided config with the default config and store it */
    this.config = {
      ...defaultConfig,
      ...config,
    };

    /* Inject the store if needed */
    if ( this.config.store ) {
      this.config.store = GennyJS.stores[this.config.store.toUpperCase()];
    }

    const { id, active, trigger } = this.config;

    /* Firstly make sure workflow is active */
    if ( !active ) {
      return;
    }

    /* Check that the trigger is valid */
    if ( !trigger.name ) {
      throw new WorkflowException( 'A valid event name must be provided for a workflow trigger' );
    }

    /* Create a subscription based on the trigger */
    this.triggerSubscription = new Subscription( trigger.name, trigger, ( event ) => {
      this.runActions( event );
    });

    /* Create a logger */
    this.log = new ModuleLogger( `Workflow ${id}` );

    /* Log that the workflow has been loaded */
    this.log.debug( 'Loaded workflow' );
  }

  runActions( event ) {
    const { actions } = this.config;
    this.log.debug( 'Running workflow' );

    /* Run all the actions */
    actions.forEach(( action ) => {
      this.runAction( action, event );
    });
  }

  runAction( action, event ) {
    /* Inject the context */
    const context = {
      event: event.getData(),
      store: this.config.store ? this.config.store.getAll() : [],
    };

    /* We don't want to add handlebars to the response so store the response beforehand */
    const originalResponse = action.response;

    const contextedAction = JSON.parse( Mustache.render( JSON.stringify( action ), context ));

    /* Add the original response back in */
    contextedAction.response = originalResponse;

    /* Run the action */
    new Action( contextedAction, {
      originalEvent: context.event,
      store: context.store,
    }).run();
  }
}

export default Workflow;

/* Import other classes */
import WorkflowException from './WorkflowException';
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
    };

    /* Combine the provided config with the default config and store it */
    this.config = {
      ...defaultConfig,
      ...config,
    };

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
    this.triggerSubscription = new Subscription( trigger.name, trigger, () => {
      this.runActions();
    });

    /* Create a logger */
    this.log = new ModuleLogger( `Workflow ${id}` );

    /* Log that the workflow has been loaded */
    this.log.debug( 'Loaded workflow' );
  }

  runActions() {
    const { actions } = this.config;
    this.log.debug( 'Running workflow' );

    /* Run all the actions */
    actions.forEach(( action ) => {
      this.runAction( action );
    });
  }

  runAction( action ) {
    new Action( action ).run();
  }
}

export default Workflow;

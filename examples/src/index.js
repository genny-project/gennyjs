import GennyJS, { Logger, LogLevel, Workflow } from '../../dist/';
import testWorkflow from './test.workflow';

/* Set log level */
Logger.setLevel( LogLevel.DEBUG );

/* Load workflows */
new Workflow( testWorkflow );

/* Init */
GennyJS.init();

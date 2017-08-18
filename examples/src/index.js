import GennyJS, { Logger, LogLevel, ConfigLoader } from '../../dist/';

/* Set log level */
Logger.setLevel( LogLevel.DEBUG );

/* Init */
GennyJS.init();

/* Load the config from the gennyjs config server */
ConfigLoader.load( 'http://localhost:43669/configuration/alyson', () => {
  GennyJS.start();
});

window.GennyJS = GennyJS;

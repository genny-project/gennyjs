import GennyJS, { Logger, LogLevel, ConfigLoader } from '../../dist/';

/* Set log level */
Logger.setLevel( LogLevel.INFO );

/* Init */
GennyJS.init();

/* Load the config from the gennyjs config server */
ConfigLoader.load( 'http://localhost:43669/configuration/weather-example', () => {
  GennyJS.start();
});

window.GennyJS = GennyJS;

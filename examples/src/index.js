import GennyJS, { Logger, LogLevel, ConfigLoader } from '../../dist/';

/* Set log level */
Logger.setLevel( LogLevel.DEBUG );

/* Init */
GennyJS.init();

/* Load the config from the gennyjs config server */
<<<<<<< HEAD
ConfigLoader.load( 'http://localhost:43669/configuration/alyson', () => {
=======
ConfigLoader.load( 'http://localhost:43669/configuration/auth-example', () => {
>>>>>>> df7777b4b5e64e1dc34ffae0f2cc5bdfdaba2126
  GennyJS.start();
});

window.GennyJS = GennyJS;

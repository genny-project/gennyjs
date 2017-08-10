/* Import other logging classes */
import Logger from './Logger';
import LoggerException from './LoggerException';

/**
 * The ModuleLogger class allows for a Logger to be created for a particular
 * module. It then will prepend all log messages with the modules name
 */
class ModuleLogger {
  constructor( moduleName ) {
    /* If a module name isn't provided throw an exception */
    if ( !moduleName ) {
      throw new LoggerException( 'A module name must be provided when using ModuleLogger' );
    }

    /* Set the module name */
    this.moduleName = moduleName;
  }

  /* Log a DEBUG level message */
  debug( message, object ) {
    Logger.debug( `[${this.moduleName}] ${message}`, object );
  }

  /* Log a INFO level message */
  info( message, object ) {
    Logger.info( `[${this.moduleName}] ${message}`, object );
  }

  /* Log a WARNING level message */
  warning( message, object ) {
    Logger.warning( `[${this.moduleName}] ${message}`, object );
  }

  /* Log a ERROR level message */
  error( message, object ) {
    Logger.error( `[${this.moduleName}] ${message}`, object );
  }
}

export default ModuleLogger;

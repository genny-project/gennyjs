/* Import other logging classes */
import LogLevel from './LogLevel';
import LoggerException from './LoggerException';
import ModuleLogger from './ModuleLogger';

class Logger {
  constructor() {
    /* Set the default log level */
    this.level = LogLevel.INFO;

    /* Create an internal ModuleLogger for internal logs */
    this.log = new ModuleLogger( 'Logger' );
  }

  /* Returns the current logging level */
  getLevel() {
    return this.level;
  }

  /**
   * Sets a new logging level. Will throw a LoggerException if logging level
   * is invalid.
   */
  setLevel( newLevel ) {
    /* Checks that the new level provided isn't invalid */
    if ( newLevel > LogLevel.MAX || newLevel < LogLevel.MIN ) {
      /* New logging level doesn't exist, throw an exception */
      throw new LoggerException( `${newLevel} is not a valid logging level` );
    }

    /* Set the new logging level and log it internally */
    this.level = newLevel;
    this.log.debug( `Log level set to ${LogLevel.getDisplayName( this.level )}` );
  }

  /* Logs a DEBUG level message */
  debug( message, object ) {
    if ( this.level >= LogLevel.DEBUG ) {
      object ? console.debug( message, object ) : console.debug( message );
    }
  }

  /* Logs a INFO level message */
  info( message, object ) {
    if ( this.level >= LogLevel.INFO ) {
      object ? console.info( message, object ) : console.info( message );
    }
  }

  /* Logs a WARNING level message */
  warning( message, object ) {
    if ( this.level >= LogLevel.WARNING ) {
      object ? console.warn( message, object ) : console.warn( message );
    }
  }

  /* Logs a ERROR level message */
  error( message, object ) {
    if ( this.level >= LogLevel.ERROR ) {
      object ? console.error( message, object ) : console.error( message );
    }
  }
}

/* Export the logger class as a singleton so that only one will exist */
export default new Logger();

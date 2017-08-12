/* Import other logging classes */
import LoggerException from './LoggerException';

/**
 * Define the logging levels, the min and max logging level as well as a
 * function to return a display name for a log level.
 */
export default {
  NONE: 0,
  ERROR: 1,
  WARNING: 2,
  INFO: 3,
  DEBUG: 4,
  MIN: 0,
  MAX: 4,
  getDisplayName: ( level ) => {
    /**
     * Takes a logging level and returns the associated display name, otherwise
     * throws an exception.
     */
    switch ( level ) {
      case 0: return 'NONE';
      case 1: return 'ERROR';
      case 2: return 'WARNING';
      case 3: return 'INFO';
      case 4: return 'DEBUG';
      default: throw new LoggerException( `${level} is an invalid logging level` );
    }
  },
};

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _LoggerException = require('./LoggerException');

var _LoggerException2 = _interopRequireDefault(_LoggerException);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Define the logging levels, the min and max logging level as well as a
 * function to return a display name for a log level.
 */
exports.default = {
  NONE: 0,
  ERROR: 1,
  WARNING: 2,
  INFO: 3,
  DEBUG: 4,
  MIN: 0,
  MAX: 4,
  getDisplayName: function getDisplayName(level) {
    /**
     * Takes a logging level and returns the associated display name, otherwise
     * throws an exception.
     */
    switch (level) {
      case 0:
        return 'NONE';
      case 1:
        return 'ERROR';
      case 2:
        return 'WARNING';
      case 3:
        return 'INFO';
      case 4:
        return 'DEBUG';
      default:
        throw new _LoggerException2.default(level + ' is an invalid logging level');
    }
  }
}; /* Import other logging classes */
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb3JlL2xvZ2dlci9Mb2dMZXZlbC5qcyJdLCJuYW1lcyI6WyJOT05FIiwiRVJST1IiLCJXQVJOSU5HIiwiSU5GTyIsIkRFQlVHIiwiTUlOIiwiTUFYIiwiZ2V0RGlzcGxheU5hbWUiLCJsZXZlbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0E7Ozs7OztBQUVBOzs7O2tCQUllO0FBQ2JBLFFBQU0sQ0FETztBQUViQyxTQUFPLENBRk07QUFHYkMsV0FBUyxDQUhJO0FBSWJDLFFBQU0sQ0FKTztBQUtiQyxTQUFPLENBTE07QUFNYkMsT0FBSyxDQU5RO0FBT2JDLE9BQUssQ0FQUTtBQVFiQyxrQkFBZ0Isd0JBQUVDLEtBQUYsRUFBYTtBQUMzQjs7OztBQUlBLFlBQVNBLEtBQVQ7QUFDRSxXQUFLLENBQUw7QUFBUSxlQUFPLE1BQVA7QUFDUixXQUFLLENBQUw7QUFBUSxlQUFPLE9BQVA7QUFDUixXQUFLLENBQUw7QUFBUSxlQUFPLFNBQVA7QUFDUixXQUFLLENBQUw7QUFBUSxlQUFPLE1BQVA7QUFDUixXQUFLLENBQUw7QUFBUSxlQUFPLE9BQVA7QUFDUjtBQUFTLGNBQU0sOEJBQXdCQSxLQUF4QixrQ0FBTjtBQU5YO0FBUUQ7QUFyQlksQyxFQVBmIiwiZmlsZSI6IkxvZ0xldmVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogSW1wb3J0IG90aGVyIGxvZ2dpbmcgY2xhc3NlcyAqL1xuaW1wb3J0IExvZ2dlckV4Y2VwdGlvbiBmcm9tICcuL0xvZ2dlckV4Y2VwdGlvbic7XG5cbi8qKlxuICogRGVmaW5lIHRoZSBsb2dnaW5nIGxldmVscywgdGhlIG1pbiBhbmQgbWF4IGxvZ2dpbmcgbGV2ZWwgYXMgd2VsbCBhcyBhXG4gKiBmdW5jdGlvbiB0byByZXR1cm4gYSBkaXNwbGF5IG5hbWUgZm9yIGEgbG9nIGxldmVsLlxuICovXG5leHBvcnQgZGVmYXVsdCB7XG4gIE5PTkU6IDAsXG4gIEVSUk9SOiAxLFxuICBXQVJOSU5HOiAyLFxuICBJTkZPOiAzLFxuICBERUJVRzogNCxcbiAgTUlOOiAwLFxuICBNQVg6IDQsXG4gIGdldERpc3BsYXlOYW1lOiAoIGxldmVsICkgPT4ge1xuICAgIC8qKlxuICAgICAqIFRha2VzIGEgbG9nZ2luZyBsZXZlbCBhbmQgcmV0dXJucyB0aGUgYXNzb2NpYXRlZCBkaXNwbGF5IG5hbWUsIG90aGVyd2lzZVxuICAgICAqIHRocm93cyBhbiBleGNlcHRpb24uXG4gICAgICovXG4gICAgc3dpdGNoICggbGV2ZWwgKSB7XG4gICAgICBjYXNlIDA6IHJldHVybiAnTk9ORSc7XG4gICAgICBjYXNlIDE6IHJldHVybiAnRVJST1InO1xuICAgICAgY2FzZSAyOiByZXR1cm4gJ1dBUk5JTkcnO1xuICAgICAgY2FzZSAzOiByZXR1cm4gJ0lORk8nO1xuICAgICAgY2FzZSA0OiByZXR1cm4gJ0RFQlVHJztcbiAgICAgIGRlZmF1bHQ6IHRocm93IG5ldyBMb2dnZXJFeGNlcHRpb24oIGAke2xldmVsfSBpcyBhbiBpbnZhbGlkIGxvZ2dpbmcgbGV2ZWxgICk7XG4gICAgfVxuICB9LFxufTtcbiJdfQ==
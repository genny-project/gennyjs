'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* Import other logging classes */


var _LogLevel = require('./LogLevel');

var _LogLevel2 = _interopRequireDefault(_LogLevel);

var _LoggerException = require('./LoggerException');

var _LoggerException2 = _interopRequireDefault(_LoggerException);

var _ModuleLogger = require('./ModuleLogger');

var _ModuleLogger2 = _interopRequireDefault(_ModuleLogger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Logger = function () {
  function Logger() {
    _classCallCheck(this, Logger);

    /* Set the default log level */
    this.level = _LogLevel2.default.INFO;

    /* Create an internal ModuleLogger for internal logs */
    this.log = new _ModuleLogger2.default('Logger');
  }

  /* Returns the current logging level */


  _createClass(Logger, [{
    key: 'getLevel',
    value: function getLevel() {
      return this.level;
    }

    /**
     * Sets a new logging level. Will throw a LoggerException if logging level
     * is invalid.
     */

  }, {
    key: 'setLevel',
    value: function setLevel(newLevel) {
      /* Checks that the new level provided isn't invalid */
      if (newLevel > _LogLevel2.default.MAX || newLevel < _LogLevel2.default.MIN) {
        /* New logging level doesn't exist, throw an exception */
        throw new _LoggerException2.default(newLevel + ' is not a valid logging level');
      }

      /* Set the new logging level and log it internally */
      this.level = newLevel;
      this.log.debug('Log level set to ' + _LogLevel2.default.getDisplayName(this.level));
    }

    /* Logs a DEBUG level message */

  }, {
    key: 'debug',
    value: function debug(message, object) {
      if (this.level >= _LogLevel2.default.DEBUG) {
        // eslint-disable-next-line
        object ? console.debug(message, object) : console.debug(message);
      }
    }

    /* Logs a INFO level message */

  }, {
    key: 'info',
    value: function info(message, object) {
      if (this.level >= _LogLevel2.default.INFO) {
        // eslint-disable-next-line
        object ? console.info(message, object) : console.info(message);
      }
    }

    /* Logs a WARNING level message */

  }, {
    key: 'warning',
    value: function warning(message, object) {
      if (this.level >= _LogLevel2.default.WARNING) {
        // eslint-disable-next-line
        object ? console.warn(message, object) : console.warn(message);
      }
    }

    /* Logs a ERROR level message */

  }, {
    key: 'error',
    value: function error(message, object) {
      if (this.level >= _LogLevel2.default.ERROR) {
        // eslint-disable-next-line
        object ? console.error(message, object) : console.error(message);
      }
    }
  }]);

  return Logger;
}();

/* Export the logger class as a singleton so that only one will exist */


exports.default = new Logger();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb3JlL2xvZ2dlci9Mb2dnZXIuanMiXSwibmFtZXMiOlsiTG9nZ2VyIiwibGV2ZWwiLCJJTkZPIiwibG9nIiwibmV3TGV2ZWwiLCJNQVgiLCJNSU4iLCJkZWJ1ZyIsImdldERpc3BsYXlOYW1lIiwibWVzc2FnZSIsIm9iamVjdCIsIkRFQlVHIiwiY29uc29sZSIsImluZm8iLCJXQVJOSU5HIiwid2FybiIsIkVSUk9SIiwiZXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7OztxakJBQUE7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7SUFFTUEsTTtBQUNKLG9CQUFjO0FBQUE7O0FBQ1o7QUFDQSxTQUFLQyxLQUFMLEdBQWEsbUJBQVNDLElBQXRCOztBQUVBO0FBQ0EsU0FBS0MsR0FBTCxHQUFXLDJCQUFrQixRQUFsQixDQUFYO0FBQ0Q7O0FBRUQ7Ozs7OytCQUNXO0FBQ1QsYUFBTyxLQUFLRixLQUFaO0FBQ0Q7O0FBRUQ7Ozs7Ozs7NkJBSVVHLFEsRUFBVztBQUNuQjtBQUNBLFVBQUtBLFdBQVcsbUJBQVNDLEdBQXBCLElBQTJCRCxXQUFXLG1CQUFTRSxHQUFwRCxFQUEwRDtBQUN4RDtBQUNBLGNBQU0sOEJBQXdCRixRQUF4QixtQ0FBTjtBQUNEOztBQUVEO0FBQ0EsV0FBS0gsS0FBTCxHQUFhRyxRQUFiO0FBQ0EsV0FBS0QsR0FBTCxDQUFTSSxLQUFULHVCQUFvQyxtQkFBU0MsY0FBVCxDQUF5QixLQUFLUCxLQUE5QixDQUFwQztBQUNEOztBQUVEOzs7OzBCQUNPUSxPLEVBQVNDLE0sRUFBUztBQUN2QixVQUFLLEtBQUtULEtBQUwsSUFBYyxtQkFBU1UsS0FBNUIsRUFBb0M7QUFDbEM7QUFDQUQsaUJBQVNFLFFBQVFMLEtBQVIsQ0FBY0UsT0FBZCxFQUF1QkMsTUFBdkIsQ0FBVCxHQUEwQ0UsUUFBUUwsS0FBUixDQUFjRSxPQUFkLENBQTFDO0FBQ0Q7QUFDRjs7QUFFRDs7Ozt5QkFDTUEsTyxFQUFTQyxNLEVBQVM7QUFDdEIsVUFBSyxLQUFLVCxLQUFMLElBQWMsbUJBQVNDLElBQTVCLEVBQW1DO0FBQ2pDO0FBQ0FRLGlCQUFTRSxRQUFRQyxJQUFSLENBQWFKLE9BQWIsRUFBc0JDLE1BQXRCLENBQVQsR0FBeUNFLFFBQVFDLElBQVIsQ0FBYUosT0FBYixDQUF6QztBQUNEO0FBQ0Y7O0FBRUQ7Ozs7NEJBQ1NBLE8sRUFBU0MsTSxFQUFTO0FBQ3pCLFVBQUssS0FBS1QsS0FBTCxJQUFjLG1CQUFTYSxPQUE1QixFQUFzQztBQUNwQztBQUNBSixpQkFBU0UsUUFBUUcsSUFBUixDQUFhTixPQUFiLEVBQXNCQyxNQUF0QixDQUFULEdBQXlDRSxRQUFRRyxJQUFSLENBQWFOLE9BQWIsQ0FBekM7QUFDRDtBQUNGOztBQUVEOzs7OzBCQUNPQSxPLEVBQVNDLE0sRUFBUztBQUN2QixVQUFLLEtBQUtULEtBQUwsSUFBYyxtQkFBU2UsS0FBNUIsRUFBb0M7QUFDbEM7QUFDQU4saUJBQVNFLFFBQVFLLEtBQVIsQ0FBY1IsT0FBZCxFQUF1QkMsTUFBdkIsQ0FBVCxHQUEwQ0UsUUFBUUssS0FBUixDQUFjUixPQUFkLENBQTFDO0FBQ0Q7QUFDRjs7Ozs7O0FBR0g7OztrQkFDZSxJQUFJVCxNQUFKLEUiLCJmaWxlIjoiTG9nZ2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogSW1wb3J0IG90aGVyIGxvZ2dpbmcgY2xhc3NlcyAqL1xuaW1wb3J0IExvZ0xldmVsIGZyb20gJy4vTG9nTGV2ZWwnO1xuaW1wb3J0IExvZ2dlckV4Y2VwdGlvbiBmcm9tICcuL0xvZ2dlckV4Y2VwdGlvbic7XG5pbXBvcnQgTW9kdWxlTG9nZ2VyIGZyb20gJy4vTW9kdWxlTG9nZ2VyJztcblxuY2xhc3MgTG9nZ2VyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLyogU2V0IHRoZSBkZWZhdWx0IGxvZyBsZXZlbCAqL1xuICAgIHRoaXMubGV2ZWwgPSBMb2dMZXZlbC5JTkZPO1xuXG4gICAgLyogQ3JlYXRlIGFuIGludGVybmFsIE1vZHVsZUxvZ2dlciBmb3IgaW50ZXJuYWwgbG9ncyAqL1xuICAgIHRoaXMubG9nID0gbmV3IE1vZHVsZUxvZ2dlciggJ0xvZ2dlcicgKTtcbiAgfVxuXG4gIC8qIFJldHVybnMgdGhlIGN1cnJlbnQgbG9nZ2luZyBsZXZlbCAqL1xuICBnZXRMZXZlbCgpIHtcbiAgICByZXR1cm4gdGhpcy5sZXZlbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIGEgbmV3IGxvZ2dpbmcgbGV2ZWwuIFdpbGwgdGhyb3cgYSBMb2dnZXJFeGNlcHRpb24gaWYgbG9nZ2luZyBsZXZlbFxuICAgKiBpcyBpbnZhbGlkLlxuICAgKi9cbiAgc2V0TGV2ZWwoIG5ld0xldmVsICkge1xuICAgIC8qIENoZWNrcyB0aGF0IHRoZSBuZXcgbGV2ZWwgcHJvdmlkZWQgaXNuJ3QgaW52YWxpZCAqL1xuICAgIGlmICggbmV3TGV2ZWwgPiBMb2dMZXZlbC5NQVggfHwgbmV3TGV2ZWwgPCBMb2dMZXZlbC5NSU4gKSB7XG4gICAgICAvKiBOZXcgbG9nZ2luZyBsZXZlbCBkb2Vzbid0IGV4aXN0LCB0aHJvdyBhbiBleGNlcHRpb24gKi9cbiAgICAgIHRocm93IG5ldyBMb2dnZXJFeGNlcHRpb24oIGAke25ld0xldmVsfSBpcyBub3QgYSB2YWxpZCBsb2dnaW5nIGxldmVsYCApO1xuICAgIH1cblxuICAgIC8qIFNldCB0aGUgbmV3IGxvZ2dpbmcgbGV2ZWwgYW5kIGxvZyBpdCBpbnRlcm5hbGx5ICovXG4gICAgdGhpcy5sZXZlbCA9IG5ld0xldmVsO1xuICAgIHRoaXMubG9nLmRlYnVnKCBgTG9nIGxldmVsIHNldCB0byAke0xvZ0xldmVsLmdldERpc3BsYXlOYW1lKCB0aGlzLmxldmVsICl9YCApO1xuICB9XG5cbiAgLyogTG9ncyBhIERFQlVHIGxldmVsIG1lc3NhZ2UgKi9cbiAgZGVidWcoIG1lc3NhZ2UsIG9iamVjdCApIHtcbiAgICBpZiAoIHRoaXMubGV2ZWwgPj0gTG9nTGV2ZWwuREVCVUcgKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgIG9iamVjdCA/IGNvbnNvbGUuZGVidWcobWVzc2FnZSwgb2JqZWN0KSA6IGNvbnNvbGUuZGVidWcobWVzc2FnZSk7XG4gICAgfVxuICB9XG5cbiAgLyogTG9ncyBhIElORk8gbGV2ZWwgbWVzc2FnZSAqL1xuICBpbmZvKCBtZXNzYWdlLCBvYmplY3QgKSB7XG4gICAgaWYgKCB0aGlzLmxldmVsID49IExvZ0xldmVsLklORk8gKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgIG9iamVjdCA/IGNvbnNvbGUuaW5mbyhtZXNzYWdlLCBvYmplY3QpIDogY29uc29sZS5pbmZvKG1lc3NhZ2UpO1xuICAgIH1cbiAgfVxuXG4gIC8qIExvZ3MgYSBXQVJOSU5HIGxldmVsIG1lc3NhZ2UgKi9cbiAgd2FybmluZyggbWVzc2FnZSwgb2JqZWN0ICkge1xuICAgIGlmICggdGhpcy5sZXZlbCA+PSBMb2dMZXZlbC5XQVJOSU5HICkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgICBvYmplY3QgPyBjb25zb2xlLndhcm4obWVzc2FnZSwgb2JqZWN0KSA6IGNvbnNvbGUud2FybihtZXNzYWdlKTtcbiAgICB9XG4gIH1cblxuICAvKiBMb2dzIGEgRVJST1IgbGV2ZWwgbWVzc2FnZSAqL1xuICBlcnJvciggbWVzc2FnZSwgb2JqZWN0ICkge1xuICAgIGlmICggdGhpcy5sZXZlbCA+PSBMb2dMZXZlbC5FUlJPUiApIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgICAgb2JqZWN0ID8gY29uc29sZS5lcnJvcihtZXNzYWdlLCBvYmplY3QpIDogY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgICB9XG4gIH1cbn1cblxuLyogRXhwb3J0IHRoZSBsb2dnZXIgY2xhc3MgYXMgYSBzaW5nbGV0b24gc28gdGhhdCBvbmx5IG9uZSB3aWxsIGV4aXN0ICovXG5leHBvcnQgZGVmYXVsdCBuZXcgTG9nZ2VyKCk7XG4iXX0=
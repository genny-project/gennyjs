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
        object ? console.debug(message, object) : console.debug(message);
      }
    }

    /* Logs a INFO level message */

  }, {
    key: 'info',
    value: function info(message, object) {
      if (this.level >= _LogLevel2.default.INFO) {
        object ? console.info(message, object) : console.info(message);
      }
    }

    /* Logs a WARNING level message */

  }, {
    key: 'warning',
    value: function warning(message, object) {
      if (this.level >= _LogLevel2.default.WARNING) {
        object ? console.warn(message, object) : console.warn(message);
      }
    }

    /* Logs a ERROR level message */

  }, {
    key: 'error',
    value: function error(message, object) {
      if (this.level >= _LogLevel2.default.ERROR) {
        object ? console.error(message, object) : console.error(message);
      }
    }
  }]);

  return Logger;
}();

/* Export the logger class as a singleton so that only one will exist */


exports.default = new Logger();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb3JlL2xvZ2dlci9Mb2dnZXIuanMiXSwibmFtZXMiOlsiTG9nZ2VyIiwibGV2ZWwiLCJJTkZPIiwibG9nIiwibmV3TGV2ZWwiLCJNQVgiLCJNSU4iLCJkZWJ1ZyIsImdldERpc3BsYXlOYW1lIiwibWVzc2FnZSIsIm9iamVjdCIsIkRFQlVHIiwiY29uc29sZSIsImluZm8iLCJXQVJOSU5HIiwid2FybiIsIkVSUk9SIiwiZXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7OztxakJBQUE7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7SUFFTUEsTTtBQUNKLG9CQUFjO0FBQUE7O0FBQ1o7QUFDQSxTQUFLQyxLQUFMLEdBQWEsbUJBQVNDLElBQXRCOztBQUVBO0FBQ0EsU0FBS0MsR0FBTCxHQUFXLDJCQUFrQixRQUFsQixDQUFYO0FBQ0Q7O0FBRUQ7Ozs7OytCQUNXO0FBQ1QsYUFBTyxLQUFLRixLQUFaO0FBQ0Q7O0FBRUQ7Ozs7Ozs7NkJBSVVHLFEsRUFBVztBQUNuQjtBQUNBLFVBQUtBLFdBQVcsbUJBQVNDLEdBQXBCLElBQTJCRCxXQUFXLG1CQUFTRSxHQUFwRCxFQUEwRDtBQUN4RDtBQUNBLGNBQU0sOEJBQXdCRixRQUF4QixtQ0FBTjtBQUNEOztBQUVEO0FBQ0EsV0FBS0gsS0FBTCxHQUFhRyxRQUFiO0FBQ0EsV0FBS0QsR0FBTCxDQUFTSSxLQUFULHVCQUFvQyxtQkFBU0MsY0FBVCxDQUF5QixLQUFLUCxLQUE5QixDQUFwQztBQUNEOztBQUVEOzs7OzBCQUNPUSxPLEVBQVNDLE0sRUFBUztBQUN2QixVQUFLLEtBQUtULEtBQUwsSUFBYyxtQkFBU1UsS0FBNUIsRUFBb0M7QUFDbENELGlCQUFTRSxRQUFRTCxLQUFSLENBQWVFLE9BQWYsRUFBd0JDLE1BQXhCLENBQVQsR0FBNENFLFFBQVFMLEtBQVIsQ0FBZUUsT0FBZixDQUE1QztBQUNEO0FBQ0Y7O0FBRUQ7Ozs7eUJBQ01BLE8sRUFBU0MsTSxFQUFTO0FBQ3RCLFVBQUssS0FBS1QsS0FBTCxJQUFjLG1CQUFTQyxJQUE1QixFQUFtQztBQUNqQ1EsaUJBQVNFLFFBQVFDLElBQVIsQ0FBY0osT0FBZCxFQUF1QkMsTUFBdkIsQ0FBVCxHQUEyQ0UsUUFBUUMsSUFBUixDQUFjSixPQUFkLENBQTNDO0FBQ0Q7QUFDRjs7QUFFRDs7Ozs0QkFDU0EsTyxFQUFTQyxNLEVBQVM7QUFDekIsVUFBSyxLQUFLVCxLQUFMLElBQWMsbUJBQVNhLE9BQTVCLEVBQXNDO0FBQ3BDSixpQkFBU0UsUUFBUUcsSUFBUixDQUFjTixPQUFkLEVBQXVCQyxNQUF2QixDQUFULEdBQTJDRSxRQUFRRyxJQUFSLENBQWNOLE9BQWQsQ0FBM0M7QUFDRDtBQUNGOztBQUVEOzs7OzBCQUNPQSxPLEVBQVNDLE0sRUFBUztBQUN2QixVQUFLLEtBQUtULEtBQUwsSUFBYyxtQkFBU2UsS0FBNUIsRUFBb0M7QUFDbENOLGlCQUFTRSxRQUFRSyxLQUFSLENBQWVSLE9BQWYsRUFBd0JDLE1BQXhCLENBQVQsR0FBNENFLFFBQVFLLEtBQVIsQ0FBZVIsT0FBZixDQUE1QztBQUNEO0FBQ0Y7Ozs7OztBQUdIOzs7a0JBQ2UsSUFBSVQsTUFBSixFIiwiZmlsZSI6IkxvZ2dlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEltcG9ydCBvdGhlciBsb2dnaW5nIGNsYXNzZXMgKi9cbmltcG9ydCBMb2dMZXZlbCBmcm9tICcuL0xvZ0xldmVsJztcbmltcG9ydCBMb2dnZXJFeGNlcHRpb24gZnJvbSAnLi9Mb2dnZXJFeGNlcHRpb24nO1xuaW1wb3J0IE1vZHVsZUxvZ2dlciBmcm9tICcuL01vZHVsZUxvZ2dlcic7XG5cbmNsYXNzIExvZ2dlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8qIFNldCB0aGUgZGVmYXVsdCBsb2cgbGV2ZWwgKi9cbiAgICB0aGlzLmxldmVsID0gTG9nTGV2ZWwuSU5GTztcblxuICAgIC8qIENyZWF0ZSBhbiBpbnRlcm5hbCBNb2R1bGVMb2dnZXIgZm9yIGludGVybmFsIGxvZ3MgKi9cbiAgICB0aGlzLmxvZyA9IG5ldyBNb2R1bGVMb2dnZXIoICdMb2dnZXInICk7XG4gIH1cblxuICAvKiBSZXR1cm5zIHRoZSBjdXJyZW50IGxvZ2dpbmcgbGV2ZWwgKi9cbiAgZ2V0TGV2ZWwoKSB7XG4gICAgcmV0dXJuIHRoaXMubGV2ZWw7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyBhIG5ldyBsb2dnaW5nIGxldmVsLiBXaWxsIHRocm93IGEgTG9nZ2VyRXhjZXB0aW9uIGlmIGxvZ2dpbmcgbGV2ZWxcbiAgICogaXMgaW52YWxpZC5cbiAgICovXG4gIHNldExldmVsKCBuZXdMZXZlbCApIHtcbiAgICAvKiBDaGVja3MgdGhhdCB0aGUgbmV3IGxldmVsIHByb3ZpZGVkIGlzbid0IGludmFsaWQgKi9cbiAgICBpZiAoIG5ld0xldmVsID4gTG9nTGV2ZWwuTUFYIHx8IG5ld0xldmVsIDwgTG9nTGV2ZWwuTUlOICkge1xuICAgICAgLyogTmV3IGxvZ2dpbmcgbGV2ZWwgZG9lc24ndCBleGlzdCwgdGhyb3cgYW4gZXhjZXB0aW9uICovXG4gICAgICB0aHJvdyBuZXcgTG9nZ2VyRXhjZXB0aW9uKCBgJHtuZXdMZXZlbH0gaXMgbm90IGEgdmFsaWQgbG9nZ2luZyBsZXZlbGAgKTtcbiAgICB9XG5cbiAgICAvKiBTZXQgdGhlIG5ldyBsb2dnaW5nIGxldmVsIGFuZCBsb2cgaXQgaW50ZXJuYWxseSAqL1xuICAgIHRoaXMubGV2ZWwgPSBuZXdMZXZlbDtcbiAgICB0aGlzLmxvZy5kZWJ1ZyggYExvZyBsZXZlbCBzZXQgdG8gJHtMb2dMZXZlbC5nZXREaXNwbGF5TmFtZSggdGhpcy5sZXZlbCApfWAgKTtcbiAgfVxuXG4gIC8qIExvZ3MgYSBERUJVRyBsZXZlbCBtZXNzYWdlICovXG4gIGRlYnVnKCBtZXNzYWdlLCBvYmplY3QgKSB7XG4gICAgaWYgKCB0aGlzLmxldmVsID49IExvZ0xldmVsLkRFQlVHICkge1xuICAgICAgb2JqZWN0ID8gY29uc29sZS5kZWJ1ZyggbWVzc2FnZSwgb2JqZWN0ICkgOiBjb25zb2xlLmRlYnVnKCBtZXNzYWdlICk7XG4gICAgfVxuICB9XG5cbiAgLyogTG9ncyBhIElORk8gbGV2ZWwgbWVzc2FnZSAqL1xuICBpbmZvKCBtZXNzYWdlLCBvYmplY3QgKSB7XG4gICAgaWYgKCB0aGlzLmxldmVsID49IExvZ0xldmVsLklORk8gKSB7XG4gICAgICBvYmplY3QgPyBjb25zb2xlLmluZm8oIG1lc3NhZ2UsIG9iamVjdCApIDogY29uc29sZS5pbmZvKCBtZXNzYWdlICk7XG4gICAgfVxuICB9XG5cbiAgLyogTG9ncyBhIFdBUk5JTkcgbGV2ZWwgbWVzc2FnZSAqL1xuICB3YXJuaW5nKCBtZXNzYWdlLCBvYmplY3QgKSB7XG4gICAgaWYgKCB0aGlzLmxldmVsID49IExvZ0xldmVsLldBUk5JTkcgKSB7XG4gICAgICBvYmplY3QgPyBjb25zb2xlLndhcm4oIG1lc3NhZ2UsIG9iamVjdCApIDogY29uc29sZS53YXJuKCBtZXNzYWdlICk7XG4gICAgfVxuICB9XG5cbiAgLyogTG9ncyBhIEVSUk9SIGxldmVsIG1lc3NhZ2UgKi9cbiAgZXJyb3IoIG1lc3NhZ2UsIG9iamVjdCApIHtcbiAgICBpZiAoIHRoaXMubGV2ZWwgPj0gTG9nTGV2ZWwuRVJST1IgKSB7XG4gICAgICBvYmplY3QgPyBjb25zb2xlLmVycm9yKCBtZXNzYWdlLCBvYmplY3QgKSA6IGNvbnNvbGUuZXJyb3IoIG1lc3NhZ2UgKTtcbiAgICB9XG4gIH1cbn1cblxuLyogRXhwb3J0IHRoZSBsb2dnZXIgY2xhc3MgYXMgYSBzaW5nbGV0b24gc28gdGhhdCBvbmx5IG9uZSB3aWxsIGV4aXN0ICovXG5leHBvcnQgZGVmYXVsdCBuZXcgTG9nZ2VyKCk7XG4iXX0=
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* Import other logging classes */


var _Logger = require('./Logger');

var _Logger2 = _interopRequireDefault(_Logger);

var _LoggerException = require('./LoggerException');

var _LoggerException2 = _interopRequireDefault(_LoggerException);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The ModuleLogger class allows for a Logger to be created for a particular
 * module. It then will prepend all log messages with the modules name
 */
var ModuleLogger = function () {
  function ModuleLogger(moduleName) {
    _classCallCheck(this, ModuleLogger);

    /* If a module name isn't provided throw an exception */
    if (!moduleName) {
      throw new _LoggerException2.default('A module name must be provided when using ModuleLogger');
    }

    /* Set the module name */
    this.moduleName = moduleName;
  }

  /* Log a DEBUG level message */


  _createClass(ModuleLogger, [{
    key: 'debug',
    value: function debug(message, object) {
      _Logger2.default.debug('[' + this.moduleName + '] ' + message, object);
    }

    /* Log a INFO level message */

  }, {
    key: 'info',
    value: function info(message, object) {
      _Logger2.default.info('[' + this.moduleName + '] ' + message, object);
    }

    /* Log a WARNING level message */

  }, {
    key: 'warning',
    value: function warning(message, object) {
      _Logger2.default.warning('[' + this.moduleName + '] ' + message, object);
    }

    /* Log a ERROR level message */

  }, {
    key: 'error',
    value: function error(message, object) {
      _Logger2.default.error('[' + this.moduleName + '] ' + message, object);
    }
  }]);

  return ModuleLogger;
}();

exports.default = ModuleLogger;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb3JlL2xvZ2dlci9Nb2R1bGVMb2dnZXIuanMiXSwibmFtZXMiOlsiTW9kdWxlTG9nZ2VyIiwibW9kdWxlTmFtZSIsIm1lc3NhZ2UiLCJvYmplY3QiLCJkZWJ1ZyIsImluZm8iLCJ3YXJuaW5nIiwiZXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7OztxakJBQUE7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0FBRUE7Ozs7SUFJTUEsWTtBQUNKLHdCQUFhQyxVQUFiLEVBQTBCO0FBQUE7O0FBQ3hCO0FBQ0EsUUFBSyxDQUFDQSxVQUFOLEVBQW1CO0FBQ2pCLFlBQU0sOEJBQXFCLHdEQUFyQixDQUFOO0FBQ0Q7O0FBRUQ7QUFDQSxTQUFLQSxVQUFMLEdBQWtCQSxVQUFsQjtBQUNEOztBQUVEOzs7OzswQkFDT0MsTyxFQUFTQyxNLEVBQVM7QUFDdkIsdUJBQU9DLEtBQVAsT0FBa0IsS0FBS0gsVUFBdkIsVUFBc0NDLE9BQXRDLEVBQWlEQyxNQUFqRDtBQUNEOztBQUVEOzs7O3lCQUNNRCxPLEVBQVNDLE0sRUFBUztBQUN0Qix1QkFBT0UsSUFBUCxPQUFpQixLQUFLSixVQUF0QixVQUFxQ0MsT0FBckMsRUFBZ0RDLE1BQWhEO0FBQ0Q7O0FBRUQ7Ozs7NEJBQ1NELE8sRUFBU0MsTSxFQUFTO0FBQ3pCLHVCQUFPRyxPQUFQLE9BQW9CLEtBQUtMLFVBQXpCLFVBQXdDQyxPQUF4QyxFQUFtREMsTUFBbkQ7QUFDRDs7QUFFRDs7OzswQkFDT0QsTyxFQUFTQyxNLEVBQVM7QUFDdkIsdUJBQU9JLEtBQVAsT0FBa0IsS0FBS04sVUFBdkIsVUFBc0NDLE9BQXRDLEVBQWlEQyxNQUFqRDtBQUNEOzs7Ozs7a0JBR1lILFkiLCJmaWxlIjoiTW9kdWxlTG9nZ2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogSW1wb3J0IG90aGVyIGxvZ2dpbmcgY2xhc3NlcyAqL1xuaW1wb3J0IExvZ2dlciBmcm9tICcuL0xvZ2dlcic7XG5pbXBvcnQgTG9nZ2VyRXhjZXB0aW9uIGZyb20gJy4vTG9nZ2VyRXhjZXB0aW9uJztcblxuLyoqXG4gKiBUaGUgTW9kdWxlTG9nZ2VyIGNsYXNzIGFsbG93cyBmb3IgYSBMb2dnZXIgdG8gYmUgY3JlYXRlZCBmb3IgYSBwYXJ0aWN1bGFyXG4gKiBtb2R1bGUuIEl0IHRoZW4gd2lsbCBwcmVwZW5kIGFsbCBsb2cgbWVzc2FnZXMgd2l0aCB0aGUgbW9kdWxlcyBuYW1lXG4gKi9cbmNsYXNzIE1vZHVsZUxvZ2dlciB7XG4gIGNvbnN0cnVjdG9yKCBtb2R1bGVOYW1lICkge1xuICAgIC8qIElmIGEgbW9kdWxlIG5hbWUgaXNuJ3QgcHJvdmlkZWQgdGhyb3cgYW4gZXhjZXB0aW9uICovXG4gICAgaWYgKCAhbW9kdWxlTmFtZSApIHtcbiAgICAgIHRocm93IG5ldyBMb2dnZXJFeGNlcHRpb24oICdBIG1vZHVsZSBuYW1lIG11c3QgYmUgcHJvdmlkZWQgd2hlbiB1c2luZyBNb2R1bGVMb2dnZXInICk7XG4gICAgfVxuXG4gICAgLyogU2V0IHRoZSBtb2R1bGUgbmFtZSAqL1xuICAgIHRoaXMubW9kdWxlTmFtZSA9IG1vZHVsZU5hbWU7XG4gIH1cblxuICAvKiBMb2cgYSBERUJVRyBsZXZlbCBtZXNzYWdlICovXG4gIGRlYnVnKCBtZXNzYWdlLCBvYmplY3QgKSB7XG4gICAgTG9nZ2VyLmRlYnVnKCBgWyR7dGhpcy5tb2R1bGVOYW1lfV0gJHttZXNzYWdlfWAsIG9iamVjdCApO1xuICB9XG5cbiAgLyogTG9nIGEgSU5GTyBsZXZlbCBtZXNzYWdlICovXG4gIGluZm8oIG1lc3NhZ2UsIG9iamVjdCApIHtcbiAgICBMb2dnZXIuaW5mbyggYFske3RoaXMubW9kdWxlTmFtZX1dICR7bWVzc2FnZX1gLCBvYmplY3QgKTtcbiAgfVxuXG4gIC8qIExvZyBhIFdBUk5JTkcgbGV2ZWwgbWVzc2FnZSAqL1xuICB3YXJuaW5nKCBtZXNzYWdlLCBvYmplY3QgKSB7XG4gICAgTG9nZ2VyLndhcm5pbmcoIGBbJHt0aGlzLm1vZHVsZU5hbWV9XSAke21lc3NhZ2V9YCwgb2JqZWN0ICk7XG4gIH1cblxuICAvKiBMb2cgYSBFUlJPUiBsZXZlbCBtZXNzYWdlICovXG4gIGVycm9yKCBtZXNzYWdlLCBvYmplY3QgKSB7XG4gICAgTG9nZ2VyLmVycm9yKCBgWyR7dGhpcy5tb2R1bGVOYW1lfV0gJHttZXNzYWdlfWAsIG9iamVjdCApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vZHVsZUxvZ2dlcjtcbiJdfQ==
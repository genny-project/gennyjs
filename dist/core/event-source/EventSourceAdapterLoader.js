'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _EventSourceException = require('./EventSourceException');

var _EventSourceException2 = _interopRequireDefault(_EventSourceException);

var _ = require('../');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* The EventSourceAdapterLoader class registers and loads event source adapters */
var EventSourceAdapterLoader = function () {
  function EventSourceAdapterLoader() {
    _classCallCheck(this, EventSourceAdapterLoader);

    this.adapters = {};
    this.log = new _.ModuleLogger('EventSourceAdapterLoader');
  }

  /* Returns the adapter with the provided name */


  _createClass(EventSourceAdapterLoader, [{
    key: 'get',
    value: function get(name) {
      /* Check that the adapter exists */
      if (!this.adapters[name]) {
        throw new _EventSourceException2.default('Couldn\'t get adapter with name ' + name);
      }

      /* Return the adapter with the provided name */
      return this.adapters[name];
    }

    /* Registers a new adapter with the provided name and adapter class */

  }, {
    key: 'register',
    value: function register(name, adapter) {
      /* Check that name and adapter class were provided */
      if (!name || name.trim() === '') {
        throw new _EventSourceException2.default('A valid name must be provided when registering an adapter');
      }

      if (!adapter) {
        throw new _EventSourceException2.default('A valid event source adapter class must be provided');
      }

      /* Register the adapter under the provided name */
      this.adapters[name] = adapter;

      /* Log that we have registered the adapter */
      this.log.debug('Registered ' + adapter.constructor.name + ' as ' + name);
    }
  }]);

  return EventSourceAdapterLoader;
}();

/* Export this class as a singleton so only one can exist */


exports.default = new EventSourceAdapterLoader();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb3JlL2V2ZW50LXNvdXJjZS9FdmVudFNvdXJjZUFkYXB0ZXJMb2FkZXIuanMiXSwibmFtZXMiOlsiRXZlbnRTb3VyY2VBZGFwdGVyTG9hZGVyIiwiYWRhcHRlcnMiLCJsb2ciLCJuYW1lIiwiYWRhcHRlciIsInRyaW0iLCJkZWJ1ZyIsImNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7OztBQUVBO0lBQ01BLHdCO0FBQ0osc0NBQWM7QUFBQTs7QUFDWixTQUFLQyxRQUFMLEdBQWdCLEVBQWhCO0FBQ0EsU0FBS0MsR0FBTCxHQUFXLG1CQUFrQiwwQkFBbEIsQ0FBWDtBQUNEOztBQUVEOzs7Ozt3QkFDS0MsSSxFQUFPO0FBQ1Y7QUFDQSxVQUFLLENBQUMsS0FBS0YsUUFBTCxDQUFjRSxJQUFkLENBQU4sRUFBNEI7QUFDMUIsY0FBTSx3RUFBNERBLElBQTVELENBQU47QUFDRDs7QUFFRDtBQUNBLGFBQU8sS0FBS0YsUUFBTCxDQUFjRSxJQUFkLENBQVA7QUFDRDs7QUFFRDs7Ozs2QkFDVUEsSSxFQUFNQyxPLEVBQVU7QUFDeEI7QUFDQSxVQUFLLENBQUNELElBQUQsSUFBU0EsS0FBS0UsSUFBTCxPQUFnQixFQUE5QixFQUFtQztBQUNqQyxjQUFNLG1DQUEwQiwyREFBMUIsQ0FBTjtBQUNEOztBQUVELFVBQUssQ0FBQ0QsT0FBTixFQUFnQjtBQUNkLGNBQU0sbUNBQTBCLHFEQUExQixDQUFOO0FBQ0Q7O0FBRUQ7QUFDQSxXQUFLSCxRQUFMLENBQWNFLElBQWQsSUFBc0JDLE9BQXRCOztBQUVBO0FBQ0EsV0FBS0YsR0FBTCxDQUFTSSxLQUFULGlCQUE4QkYsUUFBUUcsV0FBUixDQUFvQkosSUFBbEQsWUFBNkRBLElBQTdEO0FBQ0Q7Ozs7OztBQUdIOzs7a0JBQ2UsSUFBSUgsd0JBQUosRSIsImZpbGUiOiJFdmVudFNvdXJjZUFkYXB0ZXJMb2FkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRXZlbnRTb3VyY2VFeGNlcHRpb24gZnJvbSAnLi9FdmVudFNvdXJjZUV4Y2VwdGlvbic7XG5pbXBvcnQgeyBNb2R1bGVMb2dnZXIgfSBmcm9tICcuLi8nO1xuXG4vKiBUaGUgRXZlbnRTb3VyY2VBZGFwdGVyTG9hZGVyIGNsYXNzIHJlZ2lzdGVycyBhbmQgbG9hZHMgZXZlbnQgc291cmNlIGFkYXB0ZXJzICovXG5jbGFzcyBFdmVudFNvdXJjZUFkYXB0ZXJMb2FkZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmFkYXB0ZXJzID0ge307XG4gICAgdGhpcy5sb2cgPSBuZXcgTW9kdWxlTG9nZ2VyKCAnRXZlbnRTb3VyY2VBZGFwdGVyTG9hZGVyJyApO1xuICB9XG5cbiAgLyogUmV0dXJucyB0aGUgYWRhcHRlciB3aXRoIHRoZSBwcm92aWRlZCBuYW1lICovXG4gIGdldCggbmFtZSApIHtcbiAgICAvKiBDaGVjayB0aGF0IHRoZSBhZGFwdGVyIGV4aXN0cyAqL1xuICAgIGlmICggIXRoaXMuYWRhcHRlcnNbbmFtZV0gKSB7XG4gICAgICB0aHJvdyBuZXcgRXZlbnRTb3VyY2VFeGNlcHRpb24oIGBDb3VsZG4ndCBnZXQgYWRhcHRlciB3aXRoIG5hbWUgJHtuYW1lfWAgKTtcbiAgICB9XG5cbiAgICAvKiBSZXR1cm4gdGhlIGFkYXB0ZXIgd2l0aCB0aGUgcHJvdmlkZWQgbmFtZSAqL1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXJzW25hbWVdO1xuICB9XG5cbiAgLyogUmVnaXN0ZXJzIGEgbmV3IGFkYXB0ZXIgd2l0aCB0aGUgcHJvdmlkZWQgbmFtZSBhbmQgYWRhcHRlciBjbGFzcyAqL1xuICByZWdpc3RlciggbmFtZSwgYWRhcHRlciApIHtcbiAgICAvKiBDaGVjayB0aGF0IG5hbWUgYW5kIGFkYXB0ZXIgY2xhc3Mgd2VyZSBwcm92aWRlZCAqL1xuICAgIGlmICggIW5hbWUgfHwgbmFtZS50cmltKCkgPT09ICcnICkge1xuICAgICAgdGhyb3cgbmV3IEV2ZW50U291cmNlRXhjZXB0aW9uKCAnQSB2YWxpZCBuYW1lIG11c3QgYmUgcHJvdmlkZWQgd2hlbiByZWdpc3RlcmluZyBhbiBhZGFwdGVyJyApO1xuICAgIH1cblxuICAgIGlmICggIWFkYXB0ZXIgKSB7XG4gICAgICB0aHJvdyBuZXcgRXZlbnRTb3VyY2VFeGNlcHRpb24oICdBIHZhbGlkIGV2ZW50IHNvdXJjZSBhZGFwdGVyIGNsYXNzIG11c3QgYmUgcHJvdmlkZWQnICk7XG4gICAgfVxuXG4gICAgLyogUmVnaXN0ZXIgdGhlIGFkYXB0ZXIgdW5kZXIgdGhlIHByb3ZpZGVkIG5hbWUgKi9cbiAgICB0aGlzLmFkYXB0ZXJzW25hbWVdID0gYWRhcHRlcjtcblxuICAgIC8qIExvZyB0aGF0IHdlIGhhdmUgcmVnaXN0ZXJlZCB0aGUgYWRhcHRlciAqL1xuICAgIHRoaXMubG9nLmRlYnVnKCBgUmVnaXN0ZXJlZCAke2FkYXB0ZXIuY29uc3RydWN0b3IubmFtZX0gYXMgJHtuYW1lfWAgKTtcbiAgfVxufVxuXG4vKiBFeHBvcnQgdGhpcyBjbGFzcyBhcyBhIHNpbmdsZXRvbiBzbyBvbmx5IG9uZSBjYW4gZXhpc3QgKi9cbmV4cG9ydCBkZWZhdWx0IG5ldyBFdmVudFNvdXJjZUFkYXB0ZXJMb2FkZXIoKTtcbiJdfQ==
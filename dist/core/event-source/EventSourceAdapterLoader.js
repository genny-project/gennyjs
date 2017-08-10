'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _EventSourceException = require('./EventSourceException');

var _EventSourceException2 = _interopRequireDefault(_EventSourceException);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* The EventSourceAdapterLoader class registers and loads event source adapters */
var EventSourceAdapterLoader = function () {
  function EventSourceAdapterLoader() {
    _classCallCheck(this, EventSourceAdapterLoader);

    this.adapters = {};
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
    }
  }]);

  return EventSourceAdapterLoader;
}();

/* Export this class as a singleton so only one can exist */


exports.default = new EventSourceAdapterLoader();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb3JlL2V2ZW50LXNvdXJjZS9FdmVudFNvdXJjZUFkYXB0ZXJMb2FkZXIuanMiXSwibmFtZXMiOlsiRXZlbnRTb3VyY2VBZGFwdGVyTG9hZGVyIiwiYWRhcHRlcnMiLCJuYW1lIiwiYWRhcHRlciIsInRyaW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7O0FBRUE7SUFDTUEsd0I7QUFDSixzQ0FBYztBQUFBOztBQUNaLFNBQUtDLFFBQUwsR0FBZ0IsRUFBaEI7QUFDRDs7QUFFRDs7Ozs7d0JBQ0tDLEksRUFBTztBQUNWO0FBQ0EsVUFBSyxDQUFDLEtBQUtELFFBQUwsQ0FBY0MsSUFBZCxDQUFOLEVBQTRCO0FBQzFCLGNBQU0sd0VBQTREQSxJQUE1RCxDQUFOO0FBQ0Q7O0FBRUQ7QUFDQSxhQUFPLEtBQUtELFFBQUwsQ0FBY0MsSUFBZCxDQUFQO0FBQ0Q7O0FBRUQ7Ozs7NkJBQ1VBLEksRUFBTUMsTyxFQUFVO0FBQ3hCO0FBQ0EsVUFBSyxDQUFDRCxJQUFELElBQVNBLEtBQUtFLElBQUwsT0FBZ0IsRUFBOUIsRUFBbUM7QUFDakMsY0FBTSxtQ0FBMEIsMkRBQTFCLENBQU47QUFDRDs7QUFFRCxVQUFLLENBQUNELE9BQU4sRUFBZ0I7QUFDZCxjQUFNLG1DQUEwQixxREFBMUIsQ0FBTjtBQUNEOztBQUVEO0FBQ0EsV0FBS0YsUUFBTCxDQUFjQyxJQUFkLElBQXNCQyxPQUF0QjtBQUNEOzs7Ozs7QUFHSDs7O2tCQUNlLElBQUlILHdCQUFKLEUiLCJmaWxlIjoiRXZlbnRTb3VyY2VBZGFwdGVyTG9hZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEV2ZW50U291cmNlRXhjZXB0aW9uIGZyb20gJy4vRXZlbnRTb3VyY2VFeGNlcHRpb24nO1xuXG4vKiBUaGUgRXZlbnRTb3VyY2VBZGFwdGVyTG9hZGVyIGNsYXNzIHJlZ2lzdGVycyBhbmQgbG9hZHMgZXZlbnQgc291cmNlIGFkYXB0ZXJzICovXG5jbGFzcyBFdmVudFNvdXJjZUFkYXB0ZXJMb2FkZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmFkYXB0ZXJzID0ge307XG4gIH1cblxuICAvKiBSZXR1cm5zIHRoZSBhZGFwdGVyIHdpdGggdGhlIHByb3ZpZGVkIG5hbWUgKi9cbiAgZ2V0KCBuYW1lICkge1xuICAgIC8qIENoZWNrIHRoYXQgdGhlIGFkYXB0ZXIgZXhpc3RzICovXG4gICAgaWYgKCAhdGhpcy5hZGFwdGVyc1tuYW1lXSApIHtcbiAgICAgIHRocm93IG5ldyBFdmVudFNvdXJjZUV4Y2VwdGlvbiggYENvdWxkbid0IGdldCBhZGFwdGVyIHdpdGggbmFtZSAke25hbWV9YCApO1xuICAgIH1cblxuICAgIC8qIFJldHVybiB0aGUgYWRhcHRlciB3aXRoIHRoZSBwcm92aWRlZCBuYW1lICovXG4gICAgcmV0dXJuIHRoaXMuYWRhcHRlcnNbbmFtZV07XG4gIH1cblxuICAvKiBSZWdpc3RlcnMgYSBuZXcgYWRhcHRlciB3aXRoIHRoZSBwcm92aWRlZCBuYW1lIGFuZCBhZGFwdGVyIGNsYXNzICovXG4gIHJlZ2lzdGVyKCBuYW1lLCBhZGFwdGVyICkge1xuICAgIC8qIENoZWNrIHRoYXQgbmFtZSBhbmQgYWRhcHRlciBjbGFzcyB3ZXJlIHByb3ZpZGVkICovXG4gICAgaWYgKCAhbmFtZSB8fCBuYW1lLnRyaW0oKSA9PT0gJycgKSB7XG4gICAgICB0aHJvdyBuZXcgRXZlbnRTb3VyY2VFeGNlcHRpb24oICdBIHZhbGlkIG5hbWUgbXVzdCBiZSBwcm92aWRlZCB3aGVuIHJlZ2lzdGVyaW5nIGFuIGFkYXB0ZXInICk7XG4gICAgfVxuXG4gICAgaWYgKCAhYWRhcHRlciApIHtcbiAgICAgIHRocm93IG5ldyBFdmVudFNvdXJjZUV4Y2VwdGlvbiggJ0EgdmFsaWQgZXZlbnQgc291cmNlIGFkYXB0ZXIgY2xhc3MgbXVzdCBiZSBwcm92aWRlZCcgKTtcbiAgICB9XG5cbiAgICAvKiBSZWdpc3RlciB0aGUgYWRhcHRlciB1bmRlciB0aGUgcHJvdmlkZWQgbmFtZSAqL1xuICAgIHRoaXMuYWRhcHRlcnNbbmFtZV0gPSBhZGFwdGVyO1xuICB9XG59XG5cbi8qIEV4cG9ydCB0aGlzIGNsYXNzIGFzIGEgc2luZ2xldG9uIHNvIG9ubHkgb25lIGNhbiBleGlzdCAqL1xuZXhwb3J0IGRlZmF1bHQgbmV3IEV2ZW50U291cmNlQWRhcHRlckxvYWRlcigpO1xuIl19
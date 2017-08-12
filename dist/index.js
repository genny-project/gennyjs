'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

/* Export all the modules */


var _bundled = require('./bundled');

Object.keys(_bundled).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _bundled[key];
    }
  });
});

var _core = require('./core');

Object.keys(_core).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _core[key];
    }
  });
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GennyJS = function () {
  function GennyJS() {
    _classCallCheck(this, GennyJS);

    this.version = 0.01;
    this.eventSources = [];
    this.log = new _core.ModuleLogger('GennyJS');
  }

  /* Returns the current version of the GennyJS library */


  _createClass(GennyJS, [{
    key: 'getVersion',
    value: function getVersion() {
      return this.version;
    }
  }, {
    key: 'init',
    value: function init() {
      /* Log that we are starting */
      this.log.info('GennyJS initialising');

      /* Load the bundled adapters */
      _core.EventSourceAdapterLoader.register('timer', _bundled.TimerAdapter);
      _core.EventSourceAdapterLoader.register('http', _bundled.HttpAdapter);
      _core.EventSourceAdapterLoader.register('alert', _bundled.AlertAdapter);
      _core.EventSourceAdapterLoader.register('app', _bundled.AppAdapter);

      /* Load the bundled event sources */
      this.eventSources.push(new _core.EventSource(_bundled.AlertEventSource));
      this.eventSources.push(new _core.EventSource(_bundled.TimerEventSource));
      this.eventSources.push(new _core.EventSource(_bundled.AppEventSource));
    }
  }]);

  return GennyJS;
}();

exports.default = new GennyJS();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJHZW5ueUpTIiwidmVyc2lvbiIsImV2ZW50U291cmNlcyIsImxvZyIsImluZm8iLCJyZWdpc3RlciIsInB1c2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBTUE7OztBQU5BOztBQU9BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFIQTs7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7SUFFTUEsTztBQUNKLHFCQUFjO0FBQUE7O0FBQ1osU0FBS0MsT0FBTCxHQUFlLElBQWY7QUFDQSxTQUFLQyxZQUFMLEdBQW9CLEVBQXBCO0FBQ0EsU0FBS0MsR0FBTCxHQUFXLHVCQUFrQixTQUFsQixDQUFYO0FBQ0Q7O0FBRUQ7Ozs7O2lDQUNhO0FBQ1gsYUFBTyxLQUFLRixPQUFaO0FBQ0Q7OzsyQkFFTTtBQUNMO0FBQ0EsV0FBS0UsR0FBTCxDQUFTQyxJQUFULENBQWUsc0JBQWY7O0FBRUE7QUFDQSxxQ0FBeUJDLFFBQXpCLENBQW1DLE9BQW5DO0FBQ0EscUNBQXlCQSxRQUF6QixDQUFtQyxNQUFuQztBQUNBLHFDQUF5QkEsUUFBekIsQ0FBbUMsT0FBbkM7QUFDQSxxQ0FBeUJBLFFBQXpCLENBQW1DLEtBQW5DOztBQUVBO0FBQ0EsV0FBS0gsWUFBTCxDQUFrQkksSUFBbEIsQ0FBd0IsZ0RBQXhCO0FBQ0EsV0FBS0osWUFBTCxDQUFrQkksSUFBbEIsQ0FBd0IsZ0RBQXhCO0FBQ0EsV0FBS0osWUFBTCxDQUFrQkksSUFBbEIsQ0FBd0IsOENBQXhCO0FBQ0Q7Ozs7OztrQkFHWSxJQUFJTixPQUFKLEUiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBcHBBZGFwdGVyLCBBbGVydEFkYXB0ZXIsIEh0dHBBZGFwdGVyLCBUaW1lckFkYXB0ZXIsXG4gIEFwcEV2ZW50U291cmNlLCBUaW1lckV2ZW50U291cmNlLCBBbGVydEV2ZW50U291cmNlLFxufSBmcm9tICcuL2J1bmRsZWQnO1xuaW1wb3J0IHsgRXZlbnRTb3VyY2VBZGFwdGVyTG9hZGVyLCBFdmVudFNvdXJjZSwgTW9kdWxlTG9nZ2VyIH0gZnJvbSAnLi9jb3JlJztcblxuLyogRXhwb3J0IGFsbCB0aGUgbW9kdWxlcyAqL1xuZXhwb3J0ICogZnJvbSAnLi9idW5kbGVkJztcbmV4cG9ydCAqIGZyb20gJy4vY29yZSc7XG5cbmNsYXNzIEdlbm55SlMge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnZlcnNpb24gPSAwLjAxO1xuICAgIHRoaXMuZXZlbnRTb3VyY2VzID0gW107XG4gICAgdGhpcy5sb2cgPSBuZXcgTW9kdWxlTG9nZ2VyKCAnR2VubnlKUycgKTtcbiAgfVxuXG4gIC8qIFJldHVybnMgdGhlIGN1cnJlbnQgdmVyc2lvbiBvZiB0aGUgR2VubnlKUyBsaWJyYXJ5ICovXG4gIGdldFZlcnNpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMudmVyc2lvbjtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgLyogTG9nIHRoYXQgd2UgYXJlIHN0YXJ0aW5nICovXG4gICAgdGhpcy5sb2cuaW5mbyggJ0dlbm55SlMgaW5pdGlhbGlzaW5nJyApO1xuXG4gICAgLyogTG9hZCB0aGUgYnVuZGxlZCBhZGFwdGVycyAqL1xuICAgIEV2ZW50U291cmNlQWRhcHRlckxvYWRlci5yZWdpc3RlciggJ3RpbWVyJywgVGltZXJBZGFwdGVyICk7XG4gICAgRXZlbnRTb3VyY2VBZGFwdGVyTG9hZGVyLnJlZ2lzdGVyKCAnaHR0cCcsIEh0dHBBZGFwdGVyICk7XG4gICAgRXZlbnRTb3VyY2VBZGFwdGVyTG9hZGVyLnJlZ2lzdGVyKCAnYWxlcnQnLCBBbGVydEFkYXB0ZXIgKTtcbiAgICBFdmVudFNvdXJjZUFkYXB0ZXJMb2FkZXIucmVnaXN0ZXIoICdhcHAnLCBBcHBBZGFwdGVyICk7XG5cbiAgICAvKiBMb2FkIHRoZSBidW5kbGVkIGV2ZW50IHNvdXJjZXMgKi9cbiAgICB0aGlzLmV2ZW50U291cmNlcy5wdXNoKCBuZXcgRXZlbnRTb3VyY2UoIEFsZXJ0RXZlbnRTb3VyY2UgKSk7XG4gICAgdGhpcy5ldmVudFNvdXJjZXMucHVzaCggbmV3IEV2ZW50U291cmNlKCBUaW1lckV2ZW50U291cmNlICkpO1xuICAgIHRoaXMuZXZlbnRTb3VyY2VzLnB1c2goIG5ldyBFdmVudFNvdXJjZSggQXBwRXZlbnRTb3VyY2UgKSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IEdlbm55SlMoKTtcbiJdfQ==
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
      _core.EventSourceAdapterLoader.register('log', _bundled.LogAdapter);
      _core.EventSourceAdapterLoader.register('app', _bundled.AppAdapter);

      /* Load the bundled event sources */
      this.eventSources.push(new _core.EventSource(_bundled.AlertEventSource));
      this.eventSources.push(new _core.EventSource(_bundled.TimerEventSource));
      this.eventSources.push(new _core.EventSource(_bundled.AppEventSource));
      this.eventSources.push(new _core.EventSource(_bundled.LogEventSource));
    }
  }]);

  return GennyJS;
}();

exports.default = new GennyJS();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJHZW5ueUpTIiwidmVyc2lvbiIsImV2ZW50U291cmNlcyIsImxvZyIsImluZm8iLCJyZWdpc3RlciIsInB1c2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBTUE7OztBQU5BOztBQU9BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFIQTs7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7SUFFTUEsTztBQUNKLHFCQUFjO0FBQUE7O0FBQ1osU0FBS0MsT0FBTCxHQUFlLElBQWY7QUFDQSxTQUFLQyxZQUFMLEdBQW9CLEVBQXBCO0FBQ0EsU0FBS0MsR0FBTCxHQUFXLHVCQUFrQixTQUFsQixDQUFYO0FBQ0Q7O0FBRUQ7Ozs7O2lDQUNhO0FBQ1gsYUFBTyxLQUFLRixPQUFaO0FBQ0Q7OzsyQkFFTTtBQUNMO0FBQ0EsV0FBS0UsR0FBTCxDQUFTQyxJQUFULENBQWUsc0JBQWY7O0FBRUE7QUFDQSxxQ0FBeUJDLFFBQXpCLENBQW1DLE9BQW5DO0FBQ0EscUNBQXlCQSxRQUF6QixDQUFtQyxNQUFuQztBQUNBLHFDQUF5QkEsUUFBekIsQ0FBbUMsT0FBbkM7QUFDQSxxQ0FBeUJBLFFBQXpCLENBQW1DLEtBQW5DO0FBQ0EscUNBQXlCQSxRQUF6QixDQUFtQyxLQUFuQzs7QUFFQTtBQUNBLFdBQUtILFlBQUwsQ0FBa0JJLElBQWxCLENBQXdCLGdEQUF4QjtBQUNBLFdBQUtKLFlBQUwsQ0FBa0JJLElBQWxCLENBQXdCLGdEQUF4QjtBQUNBLFdBQUtKLFlBQUwsQ0FBa0JJLElBQWxCLENBQXdCLDhDQUF4QjtBQUNBLFdBQUtKLFlBQUwsQ0FBa0JJLElBQWxCLENBQXdCLDhDQUF4QjtBQUNEOzs7Ozs7a0JBR1ksSUFBSU4sT0FBSixFIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQXBwQWRhcHRlciwgQWxlcnRBZGFwdGVyLCBIdHRwQWRhcHRlciwgVGltZXJBZGFwdGVyLCBMb2dBZGFwdGVyLFxuICBBcHBFdmVudFNvdXJjZSwgVGltZXJFdmVudFNvdXJjZSwgQWxlcnRFdmVudFNvdXJjZSwgTG9nRXZlbnRTb3VyY2UsXG59IGZyb20gJy4vYnVuZGxlZCc7XG5pbXBvcnQgeyBFdmVudFNvdXJjZUFkYXB0ZXJMb2FkZXIsIEV2ZW50U291cmNlLCBNb2R1bGVMb2dnZXIgfSBmcm9tICcuL2NvcmUnO1xuXG4vKiBFeHBvcnQgYWxsIHRoZSBtb2R1bGVzICovXG5leHBvcnQgKiBmcm9tICcuL2J1bmRsZWQnO1xuZXhwb3J0ICogZnJvbSAnLi9jb3JlJztcblxuY2xhc3MgR2VubnlKUyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMudmVyc2lvbiA9IDAuMDE7XG4gICAgdGhpcy5ldmVudFNvdXJjZXMgPSBbXTtcbiAgICB0aGlzLmxvZyA9IG5ldyBNb2R1bGVMb2dnZXIoICdHZW5ueUpTJyApO1xuICB9XG5cbiAgLyogUmV0dXJucyB0aGUgY3VycmVudCB2ZXJzaW9uIG9mIHRoZSBHZW5ueUpTIGxpYnJhcnkgKi9cbiAgZ2V0VmVyc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJzaW9uO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICAvKiBMb2cgdGhhdCB3ZSBhcmUgc3RhcnRpbmcgKi9cbiAgICB0aGlzLmxvZy5pbmZvKCAnR2VubnlKUyBpbml0aWFsaXNpbmcnICk7XG5cbiAgICAvKiBMb2FkIHRoZSBidW5kbGVkIGFkYXB0ZXJzICovXG4gICAgRXZlbnRTb3VyY2VBZGFwdGVyTG9hZGVyLnJlZ2lzdGVyKCAndGltZXInLCBUaW1lckFkYXB0ZXIgKTtcbiAgICBFdmVudFNvdXJjZUFkYXB0ZXJMb2FkZXIucmVnaXN0ZXIoICdodHRwJywgSHR0cEFkYXB0ZXIgKTtcbiAgICBFdmVudFNvdXJjZUFkYXB0ZXJMb2FkZXIucmVnaXN0ZXIoICdhbGVydCcsIEFsZXJ0QWRhcHRlciApO1xuICAgIEV2ZW50U291cmNlQWRhcHRlckxvYWRlci5yZWdpc3RlciggJ2xvZycsIExvZ0FkYXB0ZXIgKTtcbiAgICBFdmVudFNvdXJjZUFkYXB0ZXJMb2FkZXIucmVnaXN0ZXIoICdhcHAnLCBBcHBBZGFwdGVyICk7XG5cbiAgICAvKiBMb2FkIHRoZSBidW5kbGVkIGV2ZW50IHNvdXJjZXMgKi9cbiAgICB0aGlzLmV2ZW50U291cmNlcy5wdXNoKCBuZXcgRXZlbnRTb3VyY2UoIEFsZXJ0RXZlbnRTb3VyY2UgKSk7XG4gICAgdGhpcy5ldmVudFNvdXJjZXMucHVzaCggbmV3IEV2ZW50U291cmNlKCBUaW1lckV2ZW50U291cmNlICkpO1xuICAgIHRoaXMuZXZlbnRTb3VyY2VzLnB1c2goIG5ldyBFdmVudFNvdXJjZSggQXBwRXZlbnRTb3VyY2UgKSk7XG4gICAgdGhpcy5ldmVudFNvdXJjZXMucHVzaCggbmV3IEV2ZW50U291cmNlKCBMb2dFdmVudFNvdXJjZSApKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBuZXcgR2VubnlKUygpO1xuIl19
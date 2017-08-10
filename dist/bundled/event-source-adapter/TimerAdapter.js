'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _core = require('../../core');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TimerAdapter = function (_EventSourceAdapter) {
  _inherits(TimerAdapter, _EventSourceAdapter);

  function TimerAdapter(config) {
    _classCallCheck(this, TimerAdapter);

    return _possibleConstructorReturn(this, (TimerAdapter.__proto__ || Object.getPrototypeOf(TimerAdapter)).call(this, config));
  }

  _createClass(TimerAdapter, [{
    key: 'onEvent',
    value: function onEvent(name, event) {
      switch (name) {
        case 'TIMER_SCHEDULE':
          return this.onTimerScheduleEvent(event);
        default:
          return;
      }
    }
  }, {
    key: 'onTimerScheduleEvent',
    value: function onTimerScheduleEvent(event) {
      var _this2 = this;

      var _event$getData = event.getData(),
          delay = _event$getData.delay,
          repeat = _event$getData.repeat;

      if (delay) {
        if (repeat) {
          setInterval(function () {
            _this2.onTriggered(event);
          }, delay);
        } else {
          setTimeout(function () {
            _this2.onTriggered(event);
          }, delay);
        }
      }
    }
  }, {
    key: 'onTriggered',
    value: function onTriggered(event) {
      var type = event.getType();
      if (type === _core.EventType.REQ) {
        var key = event.getData().key ? event.getData().key : '';
        _core.EventBus.defineEvent('TIMER_' + key + '_TRIGGERED');

        /* Create a response event */
        var e = new _core.Event({
          name: 'TIMER_' + key + '_TRIGGERED',
          type: _core.EventType.REQ
        });

        /* Trigger the event */
        e.publish();
      }

      if (type === _core.EventType.REQRES) {
        event.respond();
      }
    }
  }]);

  return TimerAdapter;
}(_core.EventSourceAdapter);

exports.default = TimerAdapter;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9idW5kbGVkL2V2ZW50LXNvdXJjZS1hZGFwdGVyL1RpbWVyQWRhcHRlci5qcyJdLCJuYW1lcyI6WyJUaW1lckFkYXB0ZXIiLCJjb25maWciLCJuYW1lIiwiZXZlbnQiLCJvblRpbWVyU2NoZWR1bGVFdmVudCIsImdldERhdGEiLCJkZWxheSIsInJlcGVhdCIsInNldEludGVydmFsIiwib25UcmlnZ2VyZWQiLCJzZXRUaW1lb3V0IiwidHlwZSIsImdldFR5cGUiLCJSRVEiLCJrZXkiLCJkZWZpbmVFdmVudCIsImUiLCJwdWJsaXNoIiwiUkVRUkVTIiwicmVzcG9uZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7SUFFTUEsWTs7O0FBQ0osd0JBQWFDLE1BQWIsRUFBc0I7QUFBQTs7QUFBQSx1SEFDYkEsTUFEYTtBQUVyQjs7Ozs0QkFFUUMsSSxFQUFNQyxLLEVBQVE7QUFDckIsY0FBUUQsSUFBUjtBQUNFLGFBQUssZ0JBQUw7QUFDRSxpQkFBTyxLQUFLRSxvQkFBTCxDQUEyQkQsS0FBM0IsQ0FBUDtBQUNGO0FBQ0U7QUFKSjtBQU1EOzs7eUNBRXFCQSxLLEVBQVE7QUFBQTs7QUFBQSwyQkFDRkEsTUFBTUUsT0FBTixFQURFO0FBQUEsVUFDcEJDLEtBRG9CLGtCQUNwQkEsS0FEb0I7QUFBQSxVQUNiQyxNQURhLGtCQUNiQSxNQURhOztBQUU1QixVQUFLRCxLQUFMLEVBQWE7QUFDWCxZQUFLQyxNQUFMLEVBQWM7QUFDWkMsc0JBQVksWUFBTTtBQUNoQixtQkFBS0MsV0FBTCxDQUFrQk4sS0FBbEI7QUFDRCxXQUZELEVBRUdHLEtBRkg7QUFHRCxTQUpELE1BSU87QUFDTEkscUJBQVcsWUFBTTtBQUNmLG1CQUFLRCxXQUFMLENBQWtCTixLQUFsQjtBQUNELFdBRkQsRUFFR0csS0FGSDtBQUdEO0FBQ0Y7QUFDRjs7O2dDQUVZSCxLLEVBQVE7QUFDbkIsVUFBTVEsT0FBT1IsTUFBTVMsT0FBTixFQUFiO0FBQ0EsVUFBS0QsU0FBUyxnQkFBVUUsR0FBeEIsRUFBOEI7QUFDNUIsWUFBTUMsTUFBTVgsTUFBTUUsT0FBTixHQUFnQlMsR0FBaEIsR0FBc0JYLE1BQU1FLE9BQU4sR0FBZ0JTLEdBQXRDLEdBQTRDLEVBQXhEO0FBQ0EsdUJBQVNDLFdBQVQsWUFBK0JELEdBQS9COztBQUVBO0FBQ0EsWUFBTUUsSUFBSSxnQkFBVTtBQUNsQmQsMkJBQWVZLEdBQWYsZUFEa0I7QUFFbEJILGdCQUFNLGdCQUFVRTtBQUZFLFNBQVYsQ0FBVjs7QUFLQTtBQUNBRyxVQUFFQyxPQUFGO0FBQ0Q7O0FBRUQsVUFBS04sU0FBUyxnQkFBVU8sTUFBeEIsRUFBaUM7QUFDL0JmLGNBQU1nQixPQUFOO0FBQ0Q7QUFDRjs7Ozs7O2tCQUdZbkIsWSIsImZpbGUiOiJUaW1lckFkYXB0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudFNvdXJjZUFkYXB0ZXIsIEV2ZW50QnVzLCBFdmVudCwgRXZlbnRUeXBlIH0gZnJvbSAnLi4vLi4vY29yZSc7XG5cbmNsYXNzIFRpbWVyQWRhcHRlciBleHRlbmRzIEV2ZW50U291cmNlQWRhcHRlciB7XG4gIGNvbnN0cnVjdG9yKCBjb25maWcgKSB7XG4gICAgc3VwZXIoIGNvbmZpZyApO1xuICB9XG5cbiAgb25FdmVudCggbmFtZSwgZXZlbnQgKSB7XG4gICAgc3dpdGNoKCBuYW1lICkge1xuICAgICAgY2FzZSAnVElNRVJfU0NIRURVTEUnOlxuICAgICAgICByZXR1cm4gdGhpcy5vblRpbWVyU2NoZWR1bGVFdmVudCggZXZlbnQgKTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cblxuICBvblRpbWVyU2NoZWR1bGVFdmVudCggZXZlbnQgKSB7XG4gICAgY29uc3QgeyBkZWxheSwgcmVwZWF0IH0gPSBldmVudC5nZXREYXRhKCk7XG4gICAgaWYgKCBkZWxheSApIHtcbiAgICAgIGlmICggcmVwZWF0ICkge1xuICAgICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5vblRyaWdnZXJlZCggZXZlbnQgKTtcbiAgICAgICAgfSwgZGVsYXkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5vblRyaWdnZXJlZCggZXZlbnQgKTtcbiAgICAgICAgfSwgZGVsYXkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uVHJpZ2dlcmVkKCBldmVudCApIHtcbiAgICBjb25zdCB0eXBlID0gZXZlbnQuZ2V0VHlwZSgpO1xuICAgIGlmICggdHlwZSA9PT0gRXZlbnRUeXBlLlJFUSApIHtcbiAgICAgIGNvbnN0IGtleSA9IGV2ZW50LmdldERhdGEoKS5rZXkgPyBldmVudC5nZXREYXRhKCkua2V5IDogJyc7XG4gICAgICBFdmVudEJ1cy5kZWZpbmVFdmVudCggYFRJTUVSXyR7a2V5fV9UUklHR0VSRURgICk7XG5cbiAgICAgIC8qIENyZWF0ZSBhIHJlc3BvbnNlIGV2ZW50ICovXG4gICAgICBjb25zdCBlID0gbmV3IEV2ZW50KHtcbiAgICAgICAgbmFtZTogYFRJTUVSXyR7a2V5fV9UUklHR0VSRURgLFxuICAgICAgICB0eXBlOiBFdmVudFR5cGUuUkVRLFxuICAgICAgfSk7XG5cbiAgICAgIC8qIFRyaWdnZXIgdGhlIGV2ZW50ICovXG4gICAgICBlLnB1Ymxpc2goKTtcbiAgICB9XG5cbiAgICBpZiAoIHR5cGUgPT09IEV2ZW50VHlwZS5SRVFSRVMgKSB7XG4gICAgICBldmVudC5yZXNwb25kKCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRpbWVyQWRhcHRlcjtcbiJdfQ==
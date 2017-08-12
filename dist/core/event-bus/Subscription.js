'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* Import other event classes */


var _EventBus = require('./EventBus');

var _EventBus2 = _interopRequireDefault(_EventBus);

var _EventBusException = require('./EventBusException');

var _EventBusException2 = _interopRequireDefault(_EventBusException);

var _ = require('../');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Subscription = function () {
  function Subscription(name, options, handler) {
    var _this = this;

    _classCallCheck(this, Subscription);

    /* Check that name was provided */
    if (!name) {
      throw new _EventBusException2.default('A event name must be provided when creating a subscription');
    }

    /* Check that the options were provided */
    if (!options) {
      throw new _EventBusException2.default('Options must be provided when creating a subscription');
    }

    /* Check that a handler was provided */
    if (!handler || !(handler instanceof Function)) {
      throw new _EventBusException2.default('A valid handler must be provided when creating a subscription');
    }

    /* Define the default options */
    var defaultOptions = {
      maxEvents: -1,
      filter: {}
    };

    /* Merge the options with the default options */
    var mergedOptions = _extends({}, defaultOptions, options);

    /* Store the options as well as define initial values */
    this.options = mergedOptions;
    this.name = name;
    this.handler = handler;
    this.eventsReceived = 0;

    /* Create a filter */
    this.filter = new _.Filter(this.options.filter);

    /* Listen on the event bus for events */
    _EventBus2.default.subscribe(this.name, function (event) {
      return _this.onEvent(event);
    });
  }

  _createClass(Subscription, [{
    key: 'onEvent',
    value: function onEvent(event) {
      if (!this.filter.process(event.getData())) {
        return false;
      }

      /* Send the event to the handler */
      this.handler(event);

      /**
       * Increment the events received and check if we have received the
       * desired amount */
      this.eventsReceived = this.eventsReceived + 1;

      /* Destroy the subscription if required */
      return this.options.maxEvents !== -1 && this.eventsReceived >= this.options.maxEvents;
    }
  }]);

  return Subscription;
}();

exports.default = Subscription;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb3JlL2V2ZW50LWJ1cy9TdWJzY3JpcHRpb24uanMiXSwibmFtZXMiOlsiU3Vic2NyaXB0aW9uIiwibmFtZSIsIm9wdGlvbnMiLCJoYW5kbGVyIiwiRnVuY3Rpb24iLCJkZWZhdWx0T3B0aW9ucyIsIm1heEV2ZW50cyIsImZpbHRlciIsIm1lcmdlZE9wdGlvbnMiLCJldmVudHNSZWNlaXZlZCIsInN1YnNjcmliZSIsIm9uRXZlbnQiLCJldmVudCIsInByb2Nlc3MiLCJnZXREYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztxakJBQUE7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0lBRU1BLFk7QUFDSix3QkFBYUMsSUFBYixFQUFtQkMsT0FBbkIsRUFBNEJDLE9BQTVCLEVBQXNDO0FBQUE7O0FBQUE7O0FBQ3BDO0FBQ0EsUUFBSyxDQUFDRixJQUFOLEVBQWE7QUFDWCxZQUFNLGdDQUF1Qiw0REFBdkIsQ0FBTjtBQUNEOztBQUVEO0FBQ0EsUUFBSyxDQUFDQyxPQUFOLEVBQWdCO0FBQ2QsWUFBTSxnQ0FBdUIsdURBQXZCLENBQU47QUFDRDs7QUFFRDtBQUNBLFFBQUssQ0FBQ0MsT0FBRCxJQUFZLEVBQUdBLG1CQUFtQkMsUUFBdEIsQ0FBakIsRUFBbUQ7QUFDakQsWUFBTSxnQ0FBdUIsK0RBQXZCLENBQU47QUFDRDs7QUFFRDtBQUNBLFFBQU1DLGlCQUFpQjtBQUNyQkMsaUJBQVcsQ0FBQyxDQURTO0FBRXJCQyxjQUFRO0FBRmEsS0FBdkI7O0FBS0E7QUFDQSxRQUFNQyw2QkFDREgsY0FEQyxFQUVESCxPQUZDLENBQU47O0FBS0E7QUFDQSxTQUFLQSxPQUFMLEdBQWVNLGFBQWY7QUFDQSxTQUFLUCxJQUFMLEdBQVlBLElBQVo7QUFDQSxTQUFLRSxPQUFMLEdBQWVBLE9BQWY7QUFDQSxTQUFLTSxjQUFMLEdBQXNCLENBQXRCOztBQUVBO0FBQ0EsU0FBS0YsTUFBTCxHQUFjLGFBQVksS0FBS0wsT0FBTCxDQUFhSyxNQUF6QixDQUFkOztBQUVBO0FBQ0EsdUJBQVNHLFNBQVQsQ0FBb0IsS0FBS1QsSUFBekIsRUFBK0I7QUFBQSxhQUFTLE1BQUtVLE9BQUwsQ0FBY0MsS0FBZCxDQUFUO0FBQUEsS0FBL0I7QUFDRDs7Ozs0QkFFUUEsSyxFQUFRO0FBQ2YsVUFBSyxDQUFDLEtBQUtMLE1BQUwsQ0FBWU0sT0FBWixDQUFxQkQsTUFBTUUsT0FBTixFQUFyQixDQUFOLEVBQTZDO0FBQzNDLGVBQU8sS0FBUDtBQUNEOztBQUVEO0FBQ0EsV0FBS1gsT0FBTCxDQUFjUyxLQUFkOztBQUVBOzs7QUFHQSxXQUFLSCxjQUFMLEdBQXNCLEtBQUtBLGNBQUwsR0FBc0IsQ0FBNUM7O0FBRUE7QUFDQSxhQUFPLEtBQUtQLE9BQUwsQ0FBYUksU0FBYixLQUEyQixDQUFDLENBQTVCLElBQWlDLEtBQUtHLGNBQUwsSUFBdUIsS0FBS1AsT0FBTCxDQUFhSSxTQUE1RTtBQUNEOzs7Ozs7a0JBR1lOLFkiLCJmaWxlIjoiU3Vic2NyaXB0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogSW1wb3J0IG90aGVyIGV2ZW50IGNsYXNzZXMgKi9cbmltcG9ydCBFdmVudEJ1cyBmcm9tICcuL0V2ZW50QnVzJztcbmltcG9ydCBFdmVudEJ1c0V4Y2VwdGlvbiBmcm9tICcuL0V2ZW50QnVzRXhjZXB0aW9uJztcbmltcG9ydCB7IEZpbHRlciB9IGZyb20gJy4uLyc7XG5cbmNsYXNzIFN1YnNjcmlwdGlvbiB7XG4gIGNvbnN0cnVjdG9yKCBuYW1lLCBvcHRpb25zLCBoYW5kbGVyICkge1xuICAgIC8qIENoZWNrIHRoYXQgbmFtZSB3YXMgcHJvdmlkZWQgKi9cbiAgICBpZiAoICFuYW1lICkge1xuICAgICAgdGhyb3cgbmV3IEV2ZW50QnVzRXhjZXB0aW9uKCAnQSBldmVudCBuYW1lIG11c3QgYmUgcHJvdmlkZWQgd2hlbiBjcmVhdGluZyBhIHN1YnNjcmlwdGlvbicgKTtcbiAgICB9XG5cbiAgICAvKiBDaGVjayB0aGF0IHRoZSBvcHRpb25zIHdlcmUgcHJvdmlkZWQgKi9cbiAgICBpZiAoICFvcHRpb25zICkge1xuICAgICAgdGhyb3cgbmV3IEV2ZW50QnVzRXhjZXB0aW9uKCAnT3B0aW9ucyBtdXN0IGJlIHByb3ZpZGVkIHdoZW4gY3JlYXRpbmcgYSBzdWJzY3JpcHRpb24nICk7XG4gICAgfVxuXG4gICAgLyogQ2hlY2sgdGhhdCBhIGhhbmRsZXIgd2FzIHByb3ZpZGVkICovXG4gICAgaWYgKCAhaGFuZGxlciB8fCAhKCBoYW5kbGVyIGluc3RhbmNlb2YgRnVuY3Rpb24gKSkge1xuICAgICAgdGhyb3cgbmV3IEV2ZW50QnVzRXhjZXB0aW9uKCAnQSB2YWxpZCBoYW5kbGVyIG11c3QgYmUgcHJvdmlkZWQgd2hlbiBjcmVhdGluZyBhIHN1YnNjcmlwdGlvbicgKTtcbiAgICB9XG5cbiAgICAvKiBEZWZpbmUgdGhlIGRlZmF1bHQgb3B0aW9ucyAqL1xuICAgIGNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xuICAgICAgbWF4RXZlbnRzOiAtMSxcbiAgICAgIGZpbHRlcjoge30sXG4gICAgfTtcblxuICAgIC8qIE1lcmdlIHRoZSBvcHRpb25zIHdpdGggdGhlIGRlZmF1bHQgb3B0aW9ucyAqL1xuICAgIGNvbnN0IG1lcmdlZE9wdGlvbnMgPSB7XG4gICAgICAuLi5kZWZhdWx0T3B0aW9ucyxcbiAgICAgIC4uLm9wdGlvbnMsXG4gICAgfTtcblxuICAgIC8qIFN0b3JlIHRoZSBvcHRpb25zIGFzIHdlbGwgYXMgZGVmaW5lIGluaXRpYWwgdmFsdWVzICovXG4gICAgdGhpcy5vcHRpb25zID0gbWVyZ2VkT3B0aW9ucztcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuaGFuZGxlciA9IGhhbmRsZXI7XG4gICAgdGhpcy5ldmVudHNSZWNlaXZlZCA9IDA7XG5cbiAgICAvKiBDcmVhdGUgYSBmaWx0ZXIgKi9cbiAgICB0aGlzLmZpbHRlciA9IG5ldyBGaWx0ZXIoIHRoaXMub3B0aW9ucy5maWx0ZXIgKTtcblxuICAgIC8qIExpc3RlbiBvbiB0aGUgZXZlbnQgYnVzIGZvciBldmVudHMgKi9cbiAgICBFdmVudEJ1cy5zdWJzY3JpYmUoIHRoaXMubmFtZSwgZXZlbnQgPT4gdGhpcy5vbkV2ZW50KCBldmVudCApKTtcbiAgfVxuXG4gIG9uRXZlbnQoIGV2ZW50ICkge1xuICAgIGlmICggIXRoaXMuZmlsdGVyLnByb2Nlc3MoIGV2ZW50LmdldERhdGEoKSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKiBTZW5kIHRoZSBldmVudCB0byB0aGUgaGFuZGxlciAqL1xuICAgIHRoaXMuaGFuZGxlciggZXZlbnQgKTtcblxuICAgIC8qKlxuICAgICAqIEluY3JlbWVudCB0aGUgZXZlbnRzIHJlY2VpdmVkIGFuZCBjaGVjayBpZiB3ZSBoYXZlIHJlY2VpdmVkIHRoZVxuICAgICAqIGRlc2lyZWQgYW1vdW50ICovXG4gICAgdGhpcy5ldmVudHNSZWNlaXZlZCA9IHRoaXMuZXZlbnRzUmVjZWl2ZWQgKyAxO1xuXG4gICAgLyogRGVzdHJveSB0aGUgc3Vic2NyaXB0aW9uIGlmIHJlcXVpcmVkICovXG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5tYXhFdmVudHMgIT09IC0xICYmIHRoaXMuZXZlbnRzUmVjZWl2ZWQgPj0gdGhpcy5vcHRpb25zLm1heEV2ZW50cztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdWJzY3JpcHRpb247XG4iXX0=
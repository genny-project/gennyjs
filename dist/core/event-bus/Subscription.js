'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* Import other event classes */


var _EventBus = require('./EventBus');

var _EventBus2 = _interopRequireDefault(_EventBus);

var _ = require('../');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Subscription = function () {
  function Subscription(name, options, handler) {
    var _this = this;

    _classCallCheck(this, Subscription);

    /* Check that name was provided */
    if (!name) {
      throw new EventBusException('A event name must be provided when creating a subscription');
    }

    /* Check that the options were provided */
    if (!options) {
      throw new EventBusException('Options must be provided when creating a subscription');
    }

    /* Check that a handler was provided */
    if (!handler || !(handler instanceof Function)) {
      throw new EventBusException('A valid handler must be provided when creating a subscription');
    }

    /* Define the default options */
    var defaultOptions = {
      maxEvents: -1,
      filter: {}
    };

    /* Merge the options with the default options */
    options = _extends({}, defaultOptions, options);

    /* Store the options as well as define initial values */
    this.options = options;
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
        return;
      }

      /* Send the event to the handler */
      this.handler(event);

      /**
       * Increment the events received and check if we have received the
       * desired amount */
      this.eventsReceived++;

      if (this.options.maxEvents != -1 && this.eventsReceived >= this.options.maxEvents) {
        /* Destroy the subscription */
        return true;
      }
    }
  }]);

  return Subscription;
}();

exports.default = Subscription;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb3JlL2V2ZW50LWJ1cy9TdWJzY3JpcHRpb24uanMiXSwibmFtZXMiOlsiU3Vic2NyaXB0aW9uIiwibmFtZSIsIm9wdGlvbnMiLCJoYW5kbGVyIiwiRXZlbnRCdXNFeGNlcHRpb24iLCJGdW5jdGlvbiIsImRlZmF1bHRPcHRpb25zIiwibWF4RXZlbnRzIiwiZmlsdGVyIiwiZXZlbnRzUmVjZWl2ZWQiLCJzdWJzY3JpYmUiLCJvbkV2ZW50IiwiZXZlbnQiLCJwcm9jZXNzIiwiZ2V0RGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7cWpCQUFBOzs7QUFDQTs7OztBQUNBOzs7Ozs7SUFFTUEsWTtBQUNKLHdCQUFhQyxJQUFiLEVBQW1CQyxPQUFuQixFQUE0QkMsT0FBNUIsRUFBc0M7QUFBQTs7QUFBQTs7QUFDcEM7QUFDQSxRQUFLLENBQUNGLElBQU4sRUFBYTtBQUNYLFlBQU0sSUFBSUcsaUJBQUosQ0FBdUIsNERBQXZCLENBQU47QUFDRDs7QUFFRDtBQUNBLFFBQUssQ0FBQ0YsT0FBTixFQUFnQjtBQUNkLFlBQU0sSUFBSUUsaUJBQUosQ0FBdUIsdURBQXZCLENBQU47QUFDRDs7QUFFRDtBQUNBLFFBQUssQ0FBQ0QsT0FBRCxJQUFZLEVBQUdBLG1CQUFtQkUsUUFBdEIsQ0FBakIsRUFBbUQ7QUFDakQsWUFBTSxJQUFJRCxpQkFBSixDQUF1QiwrREFBdkIsQ0FBTjtBQUNEOztBQUVEO0FBQ0EsUUFBTUUsaUJBQWlCO0FBQ3JCQyxpQkFBVyxDQUFDLENBRFM7QUFFckJDLGNBQVE7QUFGYSxLQUF2Qjs7QUFLQTtBQUNBTiwyQkFDS0ksY0FETCxFQUVLSixPQUZMOztBQUtBO0FBQ0EsU0FBS0EsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsU0FBS0QsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBS0UsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsU0FBS00sY0FBTCxHQUFzQixDQUF0Qjs7QUFFQTtBQUNBLFNBQUtELE1BQUwsR0FBYyxhQUFZLEtBQUtOLE9BQUwsQ0FBYU0sTUFBekIsQ0FBZDs7QUFFQTtBQUNBLHVCQUFTRSxTQUFULENBQW9CLEtBQUtULElBQXpCLEVBQStCO0FBQUEsYUFBUyxNQUFLVSxPQUFMLENBQWNDLEtBQWQsQ0FBVDtBQUFBLEtBQS9CO0FBQ0Q7Ozs7NEJBRVFBLEssRUFBUTtBQUNmLFVBQUssQ0FBQyxLQUFLSixNQUFMLENBQVlLLE9BQVosQ0FBcUJELE1BQU1FLE9BQU4sRUFBckIsQ0FBTixFQUE2QztBQUMzQztBQUNEOztBQUVEO0FBQ0EsV0FBS1gsT0FBTCxDQUFjUyxLQUFkOztBQUVBOzs7QUFHQSxXQUFLSCxjQUFMOztBQUVBLFVBQUssS0FBS1AsT0FBTCxDQUFhSyxTQUFiLElBQTBCLENBQUMsQ0FBM0IsSUFBZ0MsS0FBS0UsY0FBTCxJQUF1QixLQUFLUCxPQUFMLENBQWFLLFNBQXpFLEVBQXFGO0FBQ25GO0FBQ0EsZUFBTyxJQUFQO0FBQ0Q7QUFDRjs7Ozs7O2tCQUdZUCxZIiwiZmlsZSI6IlN1YnNjcmlwdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEltcG9ydCBvdGhlciBldmVudCBjbGFzc2VzICovXG5pbXBvcnQgRXZlbnRCdXMgZnJvbSAnLi9FdmVudEJ1cyc7XG5pbXBvcnQgeyBGaWx0ZXIgfSBmcm9tICcuLi8nO1xuXG5jbGFzcyBTdWJzY3JpcHRpb24ge1xuICBjb25zdHJ1Y3RvciggbmFtZSwgb3B0aW9ucywgaGFuZGxlciApIHtcbiAgICAvKiBDaGVjayB0aGF0IG5hbWUgd2FzIHByb3ZpZGVkICovXG4gICAgaWYgKCAhbmFtZSApIHtcbiAgICAgIHRocm93IG5ldyBFdmVudEJ1c0V4Y2VwdGlvbiggJ0EgZXZlbnQgbmFtZSBtdXN0IGJlIHByb3ZpZGVkIHdoZW4gY3JlYXRpbmcgYSBzdWJzY3JpcHRpb24nICk7XG4gICAgfVxuXG4gICAgLyogQ2hlY2sgdGhhdCB0aGUgb3B0aW9ucyB3ZXJlIHByb3ZpZGVkICovXG4gICAgaWYgKCAhb3B0aW9ucyApIHtcbiAgICAgIHRocm93IG5ldyBFdmVudEJ1c0V4Y2VwdGlvbiggJ09wdGlvbnMgbXVzdCBiZSBwcm92aWRlZCB3aGVuIGNyZWF0aW5nIGEgc3Vic2NyaXB0aW9uJyApO1xuICAgIH1cblxuICAgIC8qIENoZWNrIHRoYXQgYSBoYW5kbGVyIHdhcyBwcm92aWRlZCAqL1xuICAgIGlmICggIWhhbmRsZXIgfHwgISggaGFuZGxlciBpbnN0YW5jZW9mIEZ1bmN0aW9uICkpIHtcbiAgICAgIHRocm93IG5ldyBFdmVudEJ1c0V4Y2VwdGlvbiggJ0EgdmFsaWQgaGFuZGxlciBtdXN0IGJlIHByb3ZpZGVkIHdoZW4gY3JlYXRpbmcgYSBzdWJzY3JpcHRpb24nICk7XG4gICAgfVxuXG4gICAgLyogRGVmaW5lIHRoZSBkZWZhdWx0IG9wdGlvbnMgKi9cbiAgICBjb25zdCBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICAgIG1heEV2ZW50czogLTEsXG4gICAgICBmaWx0ZXI6IHt9LFxuICAgIH07XG5cbiAgICAvKiBNZXJnZSB0aGUgb3B0aW9ucyB3aXRoIHRoZSBkZWZhdWx0IG9wdGlvbnMgKi9cbiAgICBvcHRpb25zID0ge1xuICAgICAgLi4uZGVmYXVsdE9wdGlvbnMsXG4gICAgICAuLi5vcHRpb25zLFxuICAgIH07XG5cbiAgICAvKiBTdG9yZSB0aGUgb3B0aW9ucyBhcyB3ZWxsIGFzIGRlZmluZSBpbml0aWFsIHZhbHVlcyAqL1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmhhbmRsZXIgPSBoYW5kbGVyO1xuICAgIHRoaXMuZXZlbnRzUmVjZWl2ZWQgPSAwO1xuXG4gICAgLyogQ3JlYXRlIGEgZmlsdGVyICovXG4gICAgdGhpcy5maWx0ZXIgPSBuZXcgRmlsdGVyKCB0aGlzLm9wdGlvbnMuZmlsdGVyICk7XG5cbiAgICAvKiBMaXN0ZW4gb24gdGhlIGV2ZW50IGJ1cyBmb3IgZXZlbnRzICovXG4gICAgRXZlbnRCdXMuc3Vic2NyaWJlKCB0aGlzLm5hbWUsIGV2ZW50ID0+IHRoaXMub25FdmVudCggZXZlbnQgKSk7XG4gIH1cblxuICBvbkV2ZW50KCBldmVudCApIHtcbiAgICBpZiAoICF0aGlzLmZpbHRlci5wcm9jZXNzKCBldmVudC5nZXREYXRhKCkpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLyogU2VuZCB0aGUgZXZlbnQgdG8gdGhlIGhhbmRsZXIgKi9cbiAgICB0aGlzLmhhbmRsZXIoIGV2ZW50ICk7XG5cbiAgICAvKipcbiAgICAgKiBJbmNyZW1lbnQgdGhlIGV2ZW50cyByZWNlaXZlZCBhbmQgY2hlY2sgaWYgd2UgaGF2ZSByZWNlaXZlZCB0aGVcbiAgICAgKiBkZXNpcmVkIGFtb3VudCAqL1xuICAgIHRoaXMuZXZlbnRzUmVjZWl2ZWQrKztcblxuICAgIGlmICggdGhpcy5vcHRpb25zLm1heEV2ZW50cyAhPSAtMSAmJiB0aGlzLmV2ZW50c1JlY2VpdmVkID49IHRoaXMub3B0aW9ucy5tYXhFdmVudHMgKSB7XG4gICAgICAvKiBEZXN0cm95IHRoZSBzdWJzY3JpcHRpb24gKi9cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdWJzY3JpcHRpb247XG4iXX0=
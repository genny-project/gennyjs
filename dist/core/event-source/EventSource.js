'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ = require('../');

var _EventSourceException = require('./EventSourceException');

var _EventSourceException2 = _interopRequireDefault(_EventSourceException);

var _EventSourceAdapterLoader = require('./EventSourceAdapterLoader');

var _EventSourceAdapterLoader2 = _interopRequireDefault(_EventSourceAdapterLoader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /* Import the other event classes */


var EventSource = function EventSource(config) {
  var _this = this;

  _classCallCheck(this, EventSource);

  /* Check that some config was passed in */
  if (!config || !config.adapter || !config.subscribe || !config.publish || !config.config) {
    throw new _EventSourceException2.default('Invalid config when creating new event source');
  }

  /* Store the config */
  this.config = config;

  /* Attempt to load the adpater */
  this.adapter = _EventSourceAdapterLoader2.default.get(this.config.adapter);

  /* Create an instance of the adapter */
  this.adapterInstance = new this.adapter(config);

  /* Once the adapter is loaded define the events */
  this.config.subscribe.forEach(function (e) {
    _.EventBus.defineEvent(e.name);
  });

  this.config.publish.forEach(function (e) {
    _.EventBus.defineEvent(e.name);
  });

  /* Define a list of subscriptions */
  this.subscriptions = [];

  /* Now that the events have been defined let's subscribe to them */
  this.config.subscribe.forEach(function (e) {
    var subscription = new _.Subscription(e.name, e.options, function (event) {
      /* Pass the event through to the adapter */
      _this.adapterInstance.onEvent(e.mapTo ? e.mapTo : event.getName(), event);
    });

    /* Add the subscription to the list of subscriptions */
    _this.subscriptions.push(subscription);
  });
};

exports.default = EventSource;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb3JlL2V2ZW50LXNvdXJjZS9FdmVudFNvdXJjZS5qcyJdLCJuYW1lcyI6WyJFdmVudFNvdXJjZSIsImNvbmZpZyIsImFkYXB0ZXIiLCJzdWJzY3JpYmUiLCJwdWJsaXNoIiwiZ2V0IiwiYWRhcHRlckluc3RhbmNlIiwiZm9yRWFjaCIsImRlZmluZUV2ZW50IiwiZSIsIm5hbWUiLCJzdWJzY3JpcHRpb25zIiwic3Vic2NyaXB0aW9uIiwib3B0aW9ucyIsIm9uRXZlbnQiLCJtYXBUbyIsImV2ZW50IiwiZ2V0TmFtZSIsInB1c2giXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7OzswSkFIQTs7O0lBS01BLFcsR0FDSixxQkFBYUMsTUFBYixFQUFzQjtBQUFBOztBQUFBOztBQUNwQjtBQUNBLE1BQUssQ0FBQ0EsTUFBRCxJQUFXLENBQUNBLE9BQU9DLE9BQW5CLElBQThCLENBQUNELE9BQU9FLFNBQXRDLElBQW1ELENBQUNGLE9BQU9HLE9BQTNELElBQXNFLENBQUNILE9BQU9BLE1BQW5GLEVBQTRGO0FBQzFGLFVBQU0sbUNBQTBCLCtDQUExQixDQUFOO0FBQ0Q7O0FBRUQ7QUFDQSxPQUFLQSxNQUFMLEdBQWNBLE1BQWQ7O0FBRUE7QUFDQSxPQUFLQyxPQUFMLEdBQWUsbUNBQXlCRyxHQUF6QixDQUE4QixLQUFLSixNQUFMLENBQVlDLE9BQTFDLENBQWY7O0FBRUE7QUFDQSxPQUFLSSxlQUFMLEdBQXVCLElBQUksS0FBS0osT0FBVCxDQUFrQkQsTUFBbEIsQ0FBdkI7O0FBRUE7QUFDQSxPQUFLQSxNQUFMLENBQVlFLFNBQVosQ0FBc0JJLE9BQXRCLENBQStCLGFBQUs7QUFDbEMsZUFBU0MsV0FBVCxDQUFzQkMsRUFBRUMsSUFBeEI7QUFDRCxHQUZEOztBQUlBLE9BQUtULE1BQUwsQ0FBWUcsT0FBWixDQUFvQkcsT0FBcEIsQ0FBNkIsYUFBSztBQUNoQyxlQUFTQyxXQUFULENBQXNCQyxFQUFFQyxJQUF4QjtBQUNELEdBRkQ7O0FBSUE7QUFDQSxPQUFLQyxhQUFMLEdBQXFCLEVBQXJCOztBQUVBO0FBQ0EsT0FBS1YsTUFBTCxDQUFZRSxTQUFaLENBQXNCSSxPQUF0QixDQUErQixhQUFLO0FBQ2xDLFFBQU1LLGVBQWUsbUJBQWlCSCxFQUFFQyxJQUFuQixFQUF5QkQsRUFBRUksT0FBM0IsRUFBb0MsaUJBQVM7QUFDaEU7QUFDQSxZQUFLUCxlQUFMLENBQXFCUSxPQUFyQixDQUE4QkwsRUFBRU0sS0FBRixHQUFVTixFQUFFTSxLQUFaLEdBQW9CQyxNQUFNQyxPQUFOLEVBQWxELEVBQW1FRCxLQUFuRTtBQUNELEtBSG9CLENBQXJCOztBQUtBO0FBQ0EsVUFBS0wsYUFBTCxDQUFtQk8sSUFBbkIsQ0FBeUJOLFlBQXpCO0FBQ0QsR0FSRDtBQVNELEM7O2tCQUdZWixXIiwiZmlsZSI6IkV2ZW50U291cmNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogSW1wb3J0IHRoZSBvdGhlciBldmVudCBjbGFzc2VzICovXG5pbXBvcnQgeyBFdmVudEJ1cywgU3Vic2NyaXB0aW9uIH0gZnJvbSAnLi4vJztcbmltcG9ydCBFdmVudFNvdXJjZUV4Y2VwdGlvbiBmcm9tICcuL0V2ZW50U291cmNlRXhjZXB0aW9uJztcbmltcG9ydCBFdmVudFNvdXJjZUFkYXB0ZXJMb2FkZXIgZnJvbSAnLi9FdmVudFNvdXJjZUFkYXB0ZXJMb2FkZXInO1xuXG5jbGFzcyBFdmVudFNvdXJjZSB7XG4gIGNvbnN0cnVjdG9yKCBjb25maWcgKSB7XG4gICAgLyogQ2hlY2sgdGhhdCBzb21lIGNvbmZpZyB3YXMgcGFzc2VkIGluICovXG4gICAgaWYgKCAhY29uZmlnIHx8ICFjb25maWcuYWRhcHRlciB8fCAhY29uZmlnLnN1YnNjcmliZSB8fCAhY29uZmlnLnB1Ymxpc2ggfHwgIWNvbmZpZy5jb25maWcgKSB7XG4gICAgICB0aHJvdyBuZXcgRXZlbnRTb3VyY2VFeGNlcHRpb24oICdJbnZhbGlkIGNvbmZpZyB3aGVuIGNyZWF0aW5nIG5ldyBldmVudCBzb3VyY2UnICk7XG4gICAgfVxuXG4gICAgLyogU3RvcmUgdGhlIGNvbmZpZyAqL1xuICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xuXG4gICAgLyogQXR0ZW1wdCB0byBsb2FkIHRoZSBhZHBhdGVyICovXG4gICAgdGhpcy5hZGFwdGVyID0gRXZlbnRTb3VyY2VBZGFwdGVyTG9hZGVyLmdldCggdGhpcy5jb25maWcuYWRhcHRlciApO1xuXG4gICAgLyogQ3JlYXRlIGFuIGluc3RhbmNlIG9mIHRoZSBhZGFwdGVyICovXG4gICAgdGhpcy5hZGFwdGVySW5zdGFuY2UgPSBuZXcgdGhpcy5hZGFwdGVyKCBjb25maWcgKTtcblxuICAgIC8qIE9uY2UgdGhlIGFkYXB0ZXIgaXMgbG9hZGVkIGRlZmluZSB0aGUgZXZlbnRzICovXG4gICAgdGhpcy5jb25maWcuc3Vic2NyaWJlLmZvckVhY2goIGUgPT4ge1xuICAgICAgRXZlbnRCdXMuZGVmaW5lRXZlbnQoIGUubmFtZSApO1xuICAgIH0pO1xuXG4gICAgdGhpcy5jb25maWcucHVibGlzaC5mb3JFYWNoKCBlID0+IHtcbiAgICAgIEV2ZW50QnVzLmRlZmluZUV2ZW50KCBlLm5hbWUgKTtcbiAgICB9KTtcblxuICAgIC8qIERlZmluZSBhIGxpc3Qgb2Ygc3Vic2NyaXB0aW9ucyAqL1xuICAgIHRoaXMuc3Vic2NyaXB0aW9ucyA9IFtdO1xuXG4gICAgLyogTm93IHRoYXQgdGhlIGV2ZW50cyBoYXZlIGJlZW4gZGVmaW5lZCBsZXQncyBzdWJzY3JpYmUgdG8gdGhlbSAqL1xuICAgIHRoaXMuY29uZmlnLnN1YnNjcmliZS5mb3JFYWNoKCBlID0+IHtcbiAgICAgIGNvbnN0IHN1YnNjcmlwdGlvbiA9IG5ldyBTdWJzY3JpcHRpb24oZS5uYW1lLCBlLm9wdGlvbnMsIGV2ZW50ID0+IHtcbiAgICAgICAgLyogUGFzcyB0aGUgZXZlbnQgdGhyb3VnaCB0byB0aGUgYWRhcHRlciAqL1xuICAgICAgICB0aGlzLmFkYXB0ZXJJbnN0YW5jZS5vbkV2ZW50KCBlLm1hcFRvID8gZS5tYXBUbyA6IGV2ZW50LmdldE5hbWUoKSwgZXZlbnQgKVxuICAgICAgfSk7XG5cbiAgICAgIC8qIEFkZCB0aGUgc3Vic2NyaXB0aW9uIHRvIHRoZSBsaXN0IG9mIHN1YnNjcmlwdGlvbnMgKi9cbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKCBzdWJzY3JpcHRpb24gKTtcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFdmVudFNvdXJjZTtcbiJdfQ==
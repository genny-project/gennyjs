'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* Import dependencies */


var _wolfy87Eventemitter = require('wolfy87-eventemitter');

var _wolfy87Eventemitter2 = _interopRequireDefault(_wolfy87Eventemitter);

var _logger = require('../logger');

var _EventBusException = require('./EventBusException');

var _EventBusException2 = _interopRequireDefault(_EventBusException);

var _Event = require('./Event');

var _Event2 = _interopRequireDefault(_Event);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The EventBus class handles the lifecycle of all events that passthrough
 * the system. It is responsible to providing access to all of these events
 * as well the management of them.
 */
var EventBus = function () {
  /**
   * When the EventBus is created create a new EventEmitter and define
   * a list of events. Also create an internal logger.
   */
  function EventBus() {
    _classCallCheck(this, EventBus);

    this.ee = new _wolfy87Eventemitter2.default();
    this.events = [];
    this.logger = new _logger.ModuleLogger('EventBus');
    this.logger.info('Created');
  }

  /* Returns a list of acceptable events */


  _createClass(EventBus, [{
    key: 'getEvents',
    value: function getEvents() {
      return this.events;
    }

    /**
     * The defineEvent function defines events that will be created by components
     * of the system. You can pass in a single string representing an event name
     * or an array of strings to define multiple events at once. The passed in
     * event names are then both added to our internal list of event names and
     * added to the EventEmitter
     */

  }, {
    key: 'defineEvent',
    value: function defineEvent(ev) {
      var _this = this;

      var event = ev;
      /* Throw an exception if no event was supplied */
      if (!event) {
        throw new _EventBusException2.default('An event must be supplied');
      }

      /* Check whether we were passed in an array */
      if (!(event instanceof Array)) {
        event = [event];
      }

      /* Store a list of defined events */
      var defined = [];

      /* Loop through the passed in event names */
      event.forEach(function (e) {
        /* Make sure we haven't already defined this event */
        if (_this.events.indexOf(e) < 0) {
          _this.events.push(e);
          defined.push(e);
          _this.ee.defineEvent(e);
        }
      });

      /* Log that the events have been created */
      if (defined.length) {
        this.logger.debug('Defined events: ' + event.join(', '));
      }
    }

    /* The publish function publishes the supplied event on the EventBus */

  }, {
    key: 'publish',
    value: function publish(ev) {
      var event = ev;
      /* Check that an event was provided and that is of the correct type */
      if (!event || !(event instanceof _Event2.default)) {
        throw new _EventBusException2.default('An event must be supplied');
      }

      /* Check that the event is a defined event */
      if (this.events.indexOf(event.getName()) === -1) {
        this.logger.warning('Event with name ' + event.getName() + ' has not be defined, not publishing');
        return;
      }

      /* Log that the event has been published */
      this.logger.debug(event.getName(), event);

      /* Mark the event as published and publish */
      event.published = true;
      this.ee.emit(event.getName(), event);
    }

    /* The subscribe function allows for subscription to events on the EventBus */

  }, {
    key: 'subscribe',
    value: function subscribe(eventName, callback) {
      this.ee.addListener(eventName, callback);
    }

    /* The unsubscribe function allows for subscriptions to be removed from the EventBus */

  }, {
    key: 'unsubscribe',
    value: function unsubscribe(eventName, subscription) {
      this.ee.removeListener(eventName, subscription);
    }
  }]);

  return EventBus;
}();

/* Export this class as a singleton so that only one instance can ever exist */


exports.default = new EventBus();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb3JlL2V2ZW50LWJ1cy9FdmVudEJ1cy5qcyJdLCJuYW1lcyI6WyJFdmVudEJ1cyIsImVlIiwiZXZlbnRzIiwibG9nZ2VyIiwiaW5mbyIsImV2IiwiZXZlbnQiLCJBcnJheSIsImRlZmluZWQiLCJmb3JFYWNoIiwiZSIsImluZGV4T2YiLCJwdXNoIiwiZGVmaW5lRXZlbnQiLCJsZW5ndGgiLCJkZWJ1ZyIsImpvaW4iLCJnZXROYW1lIiwid2FybmluZyIsInB1Ymxpc2hlZCIsImVtaXQiLCJldmVudE5hbWUiLCJjYWxsYmFjayIsImFkZExpc3RlbmVyIiwic3Vic2NyaXB0aW9uIiwicmVtb3ZlTGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7Ozs7OztxakJBQUE7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7QUFFQTs7Ozs7SUFLTUEsUTtBQUNKOzs7O0FBSUEsc0JBQWM7QUFBQTs7QUFDWixTQUFLQyxFQUFMLEdBQVUsbUNBQVY7QUFDQSxTQUFLQyxNQUFMLEdBQWMsRUFBZDtBQUNBLFNBQUtDLE1BQUwsR0FBYyx5QkFBa0IsVUFBbEIsQ0FBZDtBQUNBLFNBQUtBLE1BQUwsQ0FBWUMsSUFBWixDQUFrQixTQUFsQjtBQUNEOztBQUVEOzs7OztnQ0FDWTtBQUNWLGFBQU8sS0FBS0YsTUFBWjtBQUNEOztBQUVEOzs7Ozs7Ozs7O2dDQU9hRyxFLEVBQUs7QUFBQTs7QUFDaEIsVUFBSUMsUUFBUUQsRUFBWjtBQUNBO0FBQ0EsVUFBSyxDQUFDQyxLQUFOLEVBQWM7QUFDWixjQUFNLGdDQUF1QiwyQkFBdkIsQ0FBTjtBQUNEOztBQUVEO0FBQ0EsVUFBSyxFQUFHQSxpQkFBaUJDLEtBQXBCLENBQUwsRUFBa0M7QUFDaENELGdCQUFRLENBQUNBLEtBQUQsQ0FBUjtBQUNEOztBQUVEO0FBQ0EsVUFBTUUsVUFBVSxFQUFoQjs7QUFFQTtBQUNBRixZQUFNRyxPQUFOLENBQWMsVUFBRUMsQ0FBRixFQUFTO0FBQ3JCO0FBQ0EsWUFBSyxNQUFLUixNQUFMLENBQVlTLE9BQVosQ0FBcUJELENBQXJCLElBQTJCLENBQWhDLEVBQW9DO0FBQ2xDLGdCQUFLUixNQUFMLENBQVlVLElBQVosQ0FBa0JGLENBQWxCO0FBQ0FGLGtCQUFRSSxJQUFSLENBQWNGLENBQWQ7QUFDQSxnQkFBS1QsRUFBTCxDQUFRWSxXQUFSLENBQXFCSCxDQUFyQjtBQUNEO0FBQ0YsT0FQRDs7QUFTQTtBQUNBLFVBQUtGLFFBQVFNLE1BQWIsRUFBc0I7QUFDcEIsYUFBS1gsTUFBTCxDQUFZWSxLQUFaLHNCQUFzQ1QsTUFBTVUsSUFBTixDQUFZLElBQVosQ0FBdEM7QUFDRDtBQUNGOztBQUVEOzs7OzRCQUNTWCxFLEVBQUs7QUFDWixVQUFNQyxRQUFRRCxFQUFkO0FBQ0E7QUFDQSxVQUFLLENBQUNDLEtBQUQsSUFBVSxFQUFHQSxnQ0FBSCxDQUFmLEVBQTRDO0FBQzFDLGNBQU0sZ0NBQXVCLDJCQUF2QixDQUFOO0FBQ0Q7O0FBRUQ7QUFDQSxVQUFLLEtBQUtKLE1BQUwsQ0FBWVMsT0FBWixDQUFxQkwsTUFBTVcsT0FBTixFQUFyQixNQUEwQyxDQUFDLENBQWhELEVBQW9EO0FBQ2xELGFBQUtkLE1BQUwsQ0FBWWUsT0FBWixzQkFBd0NaLE1BQU1XLE9BQU4sRUFBeEM7QUFDQTtBQUNEOztBQUVEO0FBQ0EsV0FBS2QsTUFBTCxDQUFZWSxLQUFaLENBQW1CVCxNQUFNVyxPQUFOLEVBQW5CLEVBQW9DWCxLQUFwQzs7QUFFQTtBQUNBQSxZQUFNYSxTQUFOLEdBQWtCLElBQWxCO0FBQ0EsV0FBS2xCLEVBQUwsQ0FBUW1CLElBQVIsQ0FBY2QsTUFBTVcsT0FBTixFQUFkLEVBQStCWCxLQUEvQjtBQUNEOztBQUVEOzs7OzhCQUNXZSxTLEVBQVdDLFEsRUFBVztBQUMvQixXQUFLckIsRUFBTCxDQUFRc0IsV0FBUixDQUFxQkYsU0FBckIsRUFBZ0NDLFFBQWhDO0FBQ0Q7O0FBRUQ7Ozs7Z0NBQ2FELFMsRUFBV0csWSxFQUFlO0FBQ3JDLFdBQUt2QixFQUFMLENBQVF3QixjQUFSLENBQXdCSixTQUF4QixFQUFtQ0csWUFBbkM7QUFDRDs7Ozs7O0FBR0g7OztrQkFDZSxJQUFJeEIsUUFBSixFIiwiZmlsZSI6IkV2ZW50QnVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogSW1wb3J0IGRlcGVuZGVuY2llcyAqL1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICd3b2xmeTg3LWV2ZW50ZW1pdHRlcic7XG5pbXBvcnQgeyBNb2R1bGVMb2dnZXIgfSBmcm9tICcuLi9sb2dnZXInO1xuaW1wb3J0IEV2ZW50QnVzRXhjZXB0aW9uIGZyb20gJy4vRXZlbnRCdXNFeGNlcHRpb24nO1xuaW1wb3J0IEV2ZW50IGZyb20gJy4vRXZlbnQnO1xuXG4vKipcbiAqIFRoZSBFdmVudEJ1cyBjbGFzcyBoYW5kbGVzIHRoZSBsaWZlY3ljbGUgb2YgYWxsIGV2ZW50cyB0aGF0IHBhc3N0aHJvdWdoXG4gKiB0aGUgc3lzdGVtLiBJdCBpcyByZXNwb25zaWJsZSB0byBwcm92aWRpbmcgYWNjZXNzIHRvIGFsbCBvZiB0aGVzZSBldmVudHNcbiAqIGFzIHdlbGwgdGhlIG1hbmFnZW1lbnQgb2YgdGhlbS5cbiAqL1xuY2xhc3MgRXZlbnRCdXMge1xuICAvKipcbiAgICogV2hlbiB0aGUgRXZlbnRCdXMgaXMgY3JlYXRlZCBjcmVhdGUgYSBuZXcgRXZlbnRFbWl0dGVyIGFuZCBkZWZpbmVcbiAgICogYSBsaXN0IG9mIGV2ZW50cy4gQWxzbyBjcmVhdGUgYW4gaW50ZXJuYWwgbG9nZ2VyLlxuICAgKi9cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5lZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICB0aGlzLmV2ZW50cyA9IFtdO1xuICAgIHRoaXMubG9nZ2VyID0gbmV3IE1vZHVsZUxvZ2dlciggJ0V2ZW50QnVzJyApO1xuICAgIHRoaXMubG9nZ2VyLmluZm8oICdDcmVhdGVkJyApO1xuICB9XG5cbiAgLyogUmV0dXJucyBhIGxpc3Qgb2YgYWNjZXB0YWJsZSBldmVudHMgKi9cbiAgZ2V0RXZlbnRzKCkge1xuICAgIHJldHVybiB0aGlzLmV2ZW50cztcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgZGVmaW5lRXZlbnQgZnVuY3Rpb24gZGVmaW5lcyBldmVudHMgdGhhdCB3aWxsIGJlIGNyZWF0ZWQgYnkgY29tcG9uZW50c1xuICAgKiBvZiB0aGUgc3lzdGVtLiBZb3UgY2FuIHBhc3MgaW4gYSBzaW5nbGUgc3RyaW5nIHJlcHJlc2VudGluZyBhbiBldmVudCBuYW1lXG4gICAqIG9yIGFuIGFycmF5IG9mIHN0cmluZ3MgdG8gZGVmaW5lIG11bHRpcGxlIGV2ZW50cyBhdCBvbmNlLiBUaGUgcGFzc2VkIGluXG4gICAqIGV2ZW50IG5hbWVzIGFyZSB0aGVuIGJvdGggYWRkZWQgdG8gb3VyIGludGVybmFsIGxpc3Qgb2YgZXZlbnQgbmFtZXMgYW5kXG4gICAqIGFkZGVkIHRvIHRoZSBFdmVudEVtaXR0ZXJcbiAgICovXG4gIGRlZmluZUV2ZW50KCBldiApIHtcbiAgICBsZXQgZXZlbnQgPSBldjtcbiAgICAvKiBUaHJvdyBhbiBleGNlcHRpb24gaWYgbm8gZXZlbnQgd2FzIHN1cHBsaWVkICovXG4gICAgaWYgKCAhZXZlbnQgKSB7XG4gICAgICB0aHJvdyBuZXcgRXZlbnRCdXNFeGNlcHRpb24oICdBbiBldmVudCBtdXN0IGJlIHN1cHBsaWVkJyApO1xuICAgIH1cblxuICAgIC8qIENoZWNrIHdoZXRoZXIgd2Ugd2VyZSBwYXNzZWQgaW4gYW4gYXJyYXkgKi9cbiAgICBpZiAoICEoIGV2ZW50IGluc3RhbmNlb2YgQXJyYXkgKSkge1xuICAgICAgZXZlbnQgPSBbZXZlbnRdO1xuICAgIH1cblxuICAgIC8qIFN0b3JlIGEgbGlzdCBvZiBkZWZpbmVkIGV2ZW50cyAqL1xuICAgIGNvbnN0IGRlZmluZWQgPSBbXTtcblxuICAgIC8qIExvb3AgdGhyb3VnaCB0aGUgcGFzc2VkIGluIGV2ZW50IG5hbWVzICovXG4gICAgZXZlbnQuZm9yRWFjaCgoIGUgKSA9PiB7XG4gICAgICAvKiBNYWtlIHN1cmUgd2UgaGF2ZW4ndCBhbHJlYWR5IGRlZmluZWQgdGhpcyBldmVudCAqL1xuICAgICAgaWYgKCB0aGlzLmV2ZW50cy5pbmRleE9mKCBlICkgPCAwICkge1xuICAgICAgICB0aGlzLmV2ZW50cy5wdXNoKCBlICk7XG4gICAgICAgIGRlZmluZWQucHVzaCggZSApO1xuICAgICAgICB0aGlzLmVlLmRlZmluZUV2ZW50KCBlICk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvKiBMb2cgdGhhdCB0aGUgZXZlbnRzIGhhdmUgYmVlbiBjcmVhdGVkICovXG4gICAgaWYgKCBkZWZpbmVkLmxlbmd0aCApIHtcbiAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKCBgRGVmaW5lZCBldmVudHM6ICR7ZXZlbnQuam9pbiggJywgJyApfWAgKTtcbiAgICB9XG4gIH1cblxuICAvKiBUaGUgcHVibGlzaCBmdW5jdGlvbiBwdWJsaXNoZXMgdGhlIHN1cHBsaWVkIGV2ZW50IG9uIHRoZSBFdmVudEJ1cyAqL1xuICBwdWJsaXNoKCBldiApIHtcbiAgICBjb25zdCBldmVudCA9IGV2O1xuICAgIC8qIENoZWNrIHRoYXQgYW4gZXZlbnQgd2FzIHByb3ZpZGVkIGFuZCB0aGF0IGlzIG9mIHRoZSBjb3JyZWN0IHR5cGUgKi9cbiAgICBpZiAoICFldmVudCB8fCAhKCBldmVudCBpbnN0YW5jZW9mIEV2ZW50ICkpIHtcbiAgICAgIHRocm93IG5ldyBFdmVudEJ1c0V4Y2VwdGlvbiggJ0FuIGV2ZW50IG11c3QgYmUgc3VwcGxpZWQnICk7XG4gICAgfVxuXG4gICAgLyogQ2hlY2sgdGhhdCB0aGUgZXZlbnQgaXMgYSBkZWZpbmVkIGV2ZW50ICovXG4gICAgaWYgKCB0aGlzLmV2ZW50cy5pbmRleE9mKCBldmVudC5nZXROYW1lKCkpID09PSAtMSApIHtcbiAgICAgIHRoaXMubG9nZ2VyLndhcm5pbmcoIGBFdmVudCB3aXRoIG5hbWUgJHtldmVudC5nZXROYW1lKCl9IGhhcyBub3QgYmUgZGVmaW5lZCwgbm90IHB1Ymxpc2hpbmdgICk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLyogTG9nIHRoYXQgdGhlIGV2ZW50IGhhcyBiZWVuIHB1Ymxpc2hlZCAqL1xuICAgIHRoaXMubG9nZ2VyLmRlYnVnKCBldmVudC5nZXROYW1lKCksIGV2ZW50ICk7XG5cbiAgICAvKiBNYXJrIHRoZSBldmVudCBhcyBwdWJsaXNoZWQgYW5kIHB1Ymxpc2ggKi9cbiAgICBldmVudC5wdWJsaXNoZWQgPSB0cnVlO1xuICAgIHRoaXMuZWUuZW1pdCggZXZlbnQuZ2V0TmFtZSgpLCBldmVudCApO1xuICB9XG5cbiAgLyogVGhlIHN1YnNjcmliZSBmdW5jdGlvbiBhbGxvd3MgZm9yIHN1YnNjcmlwdGlvbiB0byBldmVudHMgb24gdGhlIEV2ZW50QnVzICovXG4gIHN1YnNjcmliZSggZXZlbnROYW1lLCBjYWxsYmFjayApIHtcbiAgICB0aGlzLmVlLmFkZExpc3RlbmVyKCBldmVudE5hbWUsIGNhbGxiYWNrICk7XG4gIH1cblxuICAvKiBUaGUgdW5zdWJzY3JpYmUgZnVuY3Rpb24gYWxsb3dzIGZvciBzdWJzY3JpcHRpb25zIHRvIGJlIHJlbW92ZWQgZnJvbSB0aGUgRXZlbnRCdXMgKi9cbiAgdW5zdWJzY3JpYmUoIGV2ZW50TmFtZSwgc3Vic2NyaXB0aW9uICkge1xuICAgIHRoaXMuZWUucmVtb3ZlTGlzdGVuZXIoIGV2ZW50TmFtZSwgc3Vic2NyaXB0aW9uICk7XG4gIH1cbn1cblxuLyogRXhwb3J0IHRoaXMgY2xhc3MgYXMgYSBzaW5nbGV0b24gc28gdGhhdCBvbmx5IG9uZSBpbnN0YW5jZSBjYW4gZXZlciBleGlzdCAqL1xuZXhwb3J0IGRlZmF1bHQgbmV3IEV2ZW50QnVzKCk7XG4iXX0=
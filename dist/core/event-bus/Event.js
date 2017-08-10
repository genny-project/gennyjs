'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* Import other event classes */


var _EventType = require('./EventType');

var _EventType2 = _interopRequireDefault(_EventType);

var _EventBus = require('./EventBus');

var _EventBus2 = _interopRequireDefault(_EventBus);

var _EventBusException = require('./EventBusException');

var _EventBusException2 = _interopRequireDefault(_EventBusException);

var _logger = require('../logger');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var log = new _logger.ModuleLogger('Event');

var Event = function () {
  function Event() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Event);

    /* Define the default options for an event */
    var defaultOpts = {
      name: '',
      data: {},
      type: _EventType2.default.REQ,
      maxResponses: -1,
      globalResponse: false

      /* Merge the opts with the default options */
    };opts = _extends({}, defaultOpts, opts);

    /* Set the options and other initial values */
    this.options = opts;
    this.responsesReceived = 0;
    this.published = false;
    this.responseHandler = null;

    return this;
  }

  /* Returns the event name */


  _createClass(Event, [{
    key: 'getName',
    value: function getName() {
      return this.options.name;
    }

    /* Returns the event data */

  }, {
    key: 'getData',
    value: function getData() {
      return this.options.data;
    }

    /* Returns the event type */

  }, {
    key: 'getType',
    value: function getType() {
      return this.options.type;
    }

    /* Publishes the event on the event bus */

  }, {
    key: 'publish',
    value: function publish() {
      this.responsesReceived = 0;
      _EventBus2.default.publish(this);
    }

    /* Sets the response handler for the event */

  }, {
    key: 'setResponseHandler',
    value: function setResponseHandler(handler, filter) {
      /* Log a warning if we are setting a handler on a non REQRES event */
      if (this.options.type != _EventType2.default.REQRES) {
        log.warning('A response handler has been set on a non REQRES event');
      }

      /* Check that the handler provided is non null and a function */
      if (!handler || !(handler instanceof Function)) {
        throw new _EventBusException2.default('A valid response handler must be provided');
      }

      /* Check to see if a filter was defined */
      if (filter) {
        this.responseHandler = function (data) {
          if (filter.process(data)) {
            handler(data);
          }
        };
      } else {
        /* Set the response handler */
        this.responseHandler = handler;
      }
    }

    /* Creates a response for the event */

  }, {
    key: 'respond',
    value: function respond(data) {
      var published = this.published,
          options = this.options,
          responseHandler = this.responseHandler,
          responsesReceived = this.responsesReceived;
      var name = options.name,
          type = options.type,
          maxResponses = options.maxResponses,
          globalResponse = options.globalResponse;

      /* Check that this event has been published */

      if (!published) {
        throw new _EventBusException2.default('You cannot respond to an event that has not been published');
      }

      /* Check that responses are allowed to this type of event */
      if (type != _EventType2.default.REQRES) {
        throw new _EventBusException2.default('You cannot respond to an event that is not a REQRES event');
      }

      /* Drop the response if we have exceeded the maximum number of responses */
      if (maxResponses != -1 && responsesReceived >= maxResponses) {
        return;
      }

      /* Check whether this is a global response */
      if (globalResponse) {
        /* Define the response event */
        _EventBus2.default.defineEvent(name + '_RESPONSE');

        /* Create a new event */
        var responseEvent = new Event({
          name: name + '_RESPONSE',
          data: data
        });

        /* Publish the event */
        responseEvent.publish();
      } else {
        /* Check that a response handler is in place */
        if (!responseHandler) {
          throw new _EventBusException2.default('Cannot respond to an event that does not have a response handler');
        }

        /* Call the response handler with the provided data */
        responseHandler(data);
      }

      /* Increment responses received */
      this.responsesReceived++;
    }
  }]);

  return Event;
}();

exports.default = Event;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb3JlL2V2ZW50LWJ1cy9FdmVudC5qcyJdLCJuYW1lcyI6WyJsb2ciLCJFdmVudCIsIm9wdHMiLCJkZWZhdWx0T3B0cyIsIm5hbWUiLCJkYXRhIiwidHlwZSIsIlJFUSIsIm1heFJlc3BvbnNlcyIsImdsb2JhbFJlc3BvbnNlIiwib3B0aW9ucyIsInJlc3BvbnNlc1JlY2VpdmVkIiwicHVibGlzaGVkIiwicmVzcG9uc2VIYW5kbGVyIiwicHVibGlzaCIsImhhbmRsZXIiLCJmaWx0ZXIiLCJSRVFSRVMiLCJ3YXJuaW5nIiwiRnVuY3Rpb24iLCJwcm9jZXNzIiwiZGVmaW5lRXZlbnQiLCJyZXNwb25zZUV2ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztxakJBQUE7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxNQUFNLHlCQUFrQixPQUFsQixDQUFaOztJQUVNQyxLO0FBQ0osbUJBQXlCO0FBQUEsUUFBWkMsSUFBWSx1RUFBTCxFQUFLOztBQUFBOztBQUN2QjtBQUNBLFFBQU1DLGNBQWM7QUFDbEJDLFlBQU0sRUFEWTtBQUVsQkMsWUFBTSxFQUZZO0FBR2xCQyxZQUFNLG9CQUFVQyxHQUhFO0FBSWxCQyxvQkFBYyxDQUFDLENBSkc7QUFLbEJDLHNCQUFnQjs7QUFHbEI7QUFSb0IsS0FBcEIsQ0FTQVAsb0JBQ0tDLFdBREwsRUFFS0QsSUFGTDs7QUFLQTtBQUNBLFNBQUtRLE9BQUwsR0FBZVIsSUFBZjtBQUNBLFNBQUtTLGlCQUFMLEdBQXlCLENBQXpCO0FBQ0EsU0FBS0MsU0FBTCxHQUFpQixLQUFqQjtBQUNBLFNBQUtDLGVBQUwsR0FBdUIsSUFBdkI7O0FBRUEsV0FBTyxJQUFQO0FBQ0Q7O0FBRUQ7Ozs7OzhCQUNVO0FBQ1IsYUFBTyxLQUFLSCxPQUFMLENBQWFOLElBQXBCO0FBQ0Q7O0FBRUQ7Ozs7OEJBQ1U7QUFDUixhQUFPLEtBQUtNLE9BQUwsQ0FBYUwsSUFBcEI7QUFDRDs7QUFFRDs7Ozs4QkFDVTtBQUNSLGFBQU8sS0FBS0ssT0FBTCxDQUFhSixJQUFwQjtBQUNEOztBQUVEOzs7OzhCQUNVO0FBQ1IsV0FBS0ssaUJBQUwsR0FBeUIsQ0FBekI7QUFDQSx5QkFBU0csT0FBVCxDQUFrQixJQUFsQjtBQUNEOztBQUVEOzs7O3VDQUNvQkMsTyxFQUFTQyxNLEVBQVM7QUFDcEM7QUFDQSxVQUFLLEtBQUtOLE9BQUwsQ0FBYUosSUFBYixJQUFxQixvQkFBVVcsTUFBcEMsRUFBNkM7QUFDM0NqQixZQUFJa0IsT0FBSixDQUFhLHVEQUFiO0FBQ0Q7O0FBRUQ7QUFDQSxVQUFLLENBQUNILE9BQUQsSUFBWSxFQUFHQSxtQkFBbUJJLFFBQXRCLENBQWpCLEVBQW1EO0FBQ2pELGNBQU0sZ0NBQXVCLDJDQUF2QixDQUFOO0FBQ0Q7O0FBRUQ7QUFDQSxVQUFLSCxNQUFMLEVBQWM7QUFDWixhQUFLSCxlQUFMLEdBQXVCLGdCQUFRO0FBQzdCLGNBQUtHLE9BQU9JLE9BQVAsQ0FBZ0JmLElBQWhCLENBQUwsRUFBNkI7QUFDM0JVLG9CQUFTVixJQUFUO0FBQ0Q7QUFDRixTQUpEO0FBS0QsT0FORCxNQU1PO0FBQ0w7QUFDQSxhQUFLUSxlQUFMLEdBQXVCRSxPQUF2QjtBQUNEO0FBQ0Y7O0FBRUQ7Ozs7NEJBQ1NWLEksRUFBTztBQUFBLFVBQ05PLFNBRE0sR0FDcUQsSUFEckQsQ0FDTkEsU0FETTtBQUFBLFVBQ0tGLE9BREwsR0FDcUQsSUFEckQsQ0FDS0EsT0FETDtBQUFBLFVBQ2NHLGVBRGQsR0FDcUQsSUFEckQsQ0FDY0EsZUFEZDtBQUFBLFVBQytCRixpQkFEL0IsR0FDcUQsSUFEckQsQ0FDK0JBLGlCQUQvQjtBQUFBLFVBRU5QLElBRk0sR0FFdUNNLE9BRnZDLENBRU5OLElBRk07QUFBQSxVQUVBRSxJQUZBLEdBRXVDSSxPQUZ2QyxDQUVBSixJQUZBO0FBQUEsVUFFTUUsWUFGTixHQUV1Q0UsT0FGdkMsQ0FFTUYsWUFGTjtBQUFBLFVBRW9CQyxjQUZwQixHQUV1Q0MsT0FGdkMsQ0FFb0JELGNBRnBCOztBQUlkOztBQUNBLFVBQUssQ0FBQ0csU0FBTixFQUFrQjtBQUNoQixjQUFNLGdDQUF1Qiw0REFBdkIsQ0FBTjtBQUNEOztBQUVEO0FBQ0EsVUFBS04sUUFBUSxvQkFBVVcsTUFBdkIsRUFBZ0M7QUFDOUIsY0FBTSxnQ0FBdUIsMkRBQXZCLENBQU47QUFDRDs7QUFFRDtBQUNBLFVBQUtULGdCQUFnQixDQUFDLENBQWpCLElBQXNCRyxxQkFBcUJILFlBQWhELEVBQStEO0FBQzdEO0FBQ0Q7O0FBRUQ7QUFDQSxVQUFLQyxjQUFMLEVBQXNCO0FBQ3BCO0FBQ0EsMkJBQVNZLFdBQVQsQ0FBeUJqQixJQUF6Qjs7QUFFQTtBQUNBLFlBQU1rQixnQkFBZ0IsSUFBSXJCLEtBQUosQ0FBVTtBQUM5QkcsZ0JBQVNBLElBQVQsY0FEOEI7QUFFOUJDO0FBRjhCLFNBQVYsQ0FBdEI7O0FBS0E7QUFDQWlCLHNCQUFjUixPQUFkO0FBQ0QsT0FaRCxNQVlPO0FBQ0w7QUFDQSxZQUFLLENBQUNELGVBQU4sRUFBd0I7QUFDdEIsZ0JBQU0sZ0NBQXVCLGtFQUF2QixDQUFOO0FBQ0Q7O0FBRUQ7QUFDQUEsd0JBQWlCUixJQUFqQjtBQUNEOztBQUVEO0FBQ0EsV0FBS00saUJBQUw7QUFDRDs7Ozs7O2tCQUdZVixLIiwiZmlsZSI6IkV2ZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogSW1wb3J0IG90aGVyIGV2ZW50IGNsYXNzZXMgKi9cbmltcG9ydCBFdmVudFR5cGUgZnJvbSAnLi9FdmVudFR5cGUnO1xuaW1wb3J0IEV2ZW50QnVzIGZyb20gJy4vRXZlbnRCdXMnO1xuaW1wb3J0IEV2ZW50QnVzRXhjZXB0aW9uIGZyb20gJy4vRXZlbnRCdXNFeGNlcHRpb24nO1xuaW1wb3J0IHsgTW9kdWxlTG9nZ2VyIH0gZnJvbSAnLi4vbG9nZ2VyJztcblxuY29uc3QgbG9nID0gbmV3IE1vZHVsZUxvZ2dlciggJ0V2ZW50JyApO1xuXG5jbGFzcyBFdmVudCB7XG4gIGNvbnN0cnVjdG9yKCBvcHRzID0ge30gKSB7XG4gICAgLyogRGVmaW5lIHRoZSBkZWZhdWx0IG9wdGlvbnMgZm9yIGFuIGV2ZW50ICovXG4gICAgY29uc3QgZGVmYXVsdE9wdHMgPSB7XG4gICAgICBuYW1lOiAnJyxcbiAgICAgIGRhdGE6IHt9LFxuICAgICAgdHlwZTogRXZlbnRUeXBlLlJFUSxcbiAgICAgIG1heFJlc3BvbnNlczogLTEsXG4gICAgICBnbG9iYWxSZXNwb25zZTogZmFsc2UsXG4gICAgfVxuXG4gICAgLyogTWVyZ2UgdGhlIG9wdHMgd2l0aCB0aGUgZGVmYXVsdCBvcHRpb25zICovXG4gICAgb3B0cyA9IHtcbiAgICAgIC4uLmRlZmF1bHRPcHRzLFxuICAgICAgLi4ub3B0c1xuICAgIH07XG5cbiAgICAvKiBTZXQgdGhlIG9wdGlvbnMgYW5kIG90aGVyIGluaXRpYWwgdmFsdWVzICovXG4gICAgdGhpcy5vcHRpb25zID0gb3B0cztcbiAgICB0aGlzLnJlc3BvbnNlc1JlY2VpdmVkID0gMDtcbiAgICB0aGlzLnB1Ymxpc2hlZCA9IGZhbHNlO1xuICAgIHRoaXMucmVzcG9uc2VIYW5kbGVyID0gbnVsbDtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyogUmV0dXJucyB0aGUgZXZlbnQgbmFtZSAqL1xuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMubmFtZTtcbiAgfVxuXG4gIC8qIFJldHVybnMgdGhlIGV2ZW50IGRhdGEgKi9cbiAgZ2V0RGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmRhdGE7XG4gIH1cblxuICAvKiBSZXR1cm5zIHRoZSBldmVudCB0eXBlICovXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy50eXBlO1xuICB9XG5cbiAgLyogUHVibGlzaGVzIHRoZSBldmVudCBvbiB0aGUgZXZlbnQgYnVzICovXG4gIHB1Ymxpc2goKSB7XG4gICAgdGhpcy5yZXNwb25zZXNSZWNlaXZlZCA9IDA7XG4gICAgRXZlbnRCdXMucHVibGlzaCggdGhpcyApO1xuICB9XG5cbiAgLyogU2V0cyB0aGUgcmVzcG9uc2UgaGFuZGxlciBmb3IgdGhlIGV2ZW50ICovXG4gIHNldFJlc3BvbnNlSGFuZGxlciggaGFuZGxlciwgZmlsdGVyICkge1xuICAgIC8qIExvZyBhIHdhcm5pbmcgaWYgd2UgYXJlIHNldHRpbmcgYSBoYW5kbGVyIG9uIGEgbm9uIFJFUVJFUyBldmVudCAqL1xuICAgIGlmICggdGhpcy5vcHRpb25zLnR5cGUgIT0gRXZlbnRUeXBlLlJFUVJFUyApIHtcbiAgICAgIGxvZy53YXJuaW5nKCAnQSByZXNwb25zZSBoYW5kbGVyIGhhcyBiZWVuIHNldCBvbiBhIG5vbiBSRVFSRVMgZXZlbnQnICk7XG4gICAgfVxuXG4gICAgLyogQ2hlY2sgdGhhdCB0aGUgaGFuZGxlciBwcm92aWRlZCBpcyBub24gbnVsbCBhbmQgYSBmdW5jdGlvbiAqL1xuICAgIGlmICggIWhhbmRsZXIgfHwgISggaGFuZGxlciBpbnN0YW5jZW9mIEZ1bmN0aW9uICkpIHtcbiAgICAgIHRocm93IG5ldyBFdmVudEJ1c0V4Y2VwdGlvbiggJ0EgdmFsaWQgcmVzcG9uc2UgaGFuZGxlciBtdXN0IGJlIHByb3ZpZGVkJyApO1xuICAgIH1cblxuICAgIC8qIENoZWNrIHRvIHNlZSBpZiBhIGZpbHRlciB3YXMgZGVmaW5lZCAqL1xuICAgIGlmICggZmlsdGVyICkge1xuICAgICAgdGhpcy5yZXNwb25zZUhhbmRsZXIgPSBkYXRhID0+IHtcbiAgICAgICAgaWYgKCBmaWx0ZXIucHJvY2VzcyggZGF0YSApKSB7XG4gICAgICAgICAgaGFuZGxlciggZGF0YSApO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICAvKiBTZXQgdGhlIHJlc3BvbnNlIGhhbmRsZXIgKi9cbiAgICAgIHRoaXMucmVzcG9uc2VIYW5kbGVyID0gaGFuZGxlcjtcbiAgICB9XG4gIH1cblxuICAvKiBDcmVhdGVzIGEgcmVzcG9uc2UgZm9yIHRoZSBldmVudCAqL1xuICByZXNwb25kKCBkYXRhICkge1xuICAgIGNvbnN0IHsgcHVibGlzaGVkLCBvcHRpb25zLCByZXNwb25zZUhhbmRsZXIsIHJlc3BvbnNlc1JlY2VpdmVkIH0gPSB0aGlzO1xuICAgIGNvbnN0IHsgbmFtZSwgdHlwZSwgbWF4UmVzcG9uc2VzLCBnbG9iYWxSZXNwb25zZSB9ID0gb3B0aW9ucztcblxuICAgIC8qIENoZWNrIHRoYXQgdGhpcyBldmVudCBoYXMgYmVlbiBwdWJsaXNoZWQgKi9cbiAgICBpZiAoICFwdWJsaXNoZWQgKSB7XG4gICAgICB0aHJvdyBuZXcgRXZlbnRCdXNFeGNlcHRpb24oICdZb3UgY2Fubm90IHJlc3BvbmQgdG8gYW4gZXZlbnQgdGhhdCBoYXMgbm90IGJlZW4gcHVibGlzaGVkJyApO1xuICAgIH1cblxuICAgIC8qIENoZWNrIHRoYXQgcmVzcG9uc2VzIGFyZSBhbGxvd2VkIHRvIHRoaXMgdHlwZSBvZiBldmVudCAqL1xuICAgIGlmICggdHlwZSAhPSBFdmVudFR5cGUuUkVRUkVTICkge1xuICAgICAgdGhyb3cgbmV3IEV2ZW50QnVzRXhjZXB0aW9uKCAnWW91IGNhbm5vdCByZXNwb25kIHRvIGFuIGV2ZW50IHRoYXQgaXMgbm90IGEgUkVRUkVTIGV2ZW50JyApO1xuICAgIH1cblxuICAgIC8qIERyb3AgdGhlIHJlc3BvbnNlIGlmIHdlIGhhdmUgZXhjZWVkZWQgdGhlIG1heGltdW0gbnVtYmVyIG9mIHJlc3BvbnNlcyAqL1xuICAgIGlmICggbWF4UmVzcG9uc2VzICE9IC0xICYmIHJlc3BvbnNlc1JlY2VpdmVkID49IG1heFJlc3BvbnNlcyApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvKiBDaGVjayB3aGV0aGVyIHRoaXMgaXMgYSBnbG9iYWwgcmVzcG9uc2UgKi9cbiAgICBpZiAoIGdsb2JhbFJlc3BvbnNlICkge1xuICAgICAgLyogRGVmaW5lIHRoZSByZXNwb25zZSBldmVudCAqL1xuICAgICAgRXZlbnRCdXMuZGVmaW5lRXZlbnQoIGAke25hbWV9X1JFU1BPTlNFYCApO1xuXG4gICAgICAvKiBDcmVhdGUgYSBuZXcgZXZlbnQgKi9cbiAgICAgIGNvbnN0IHJlc3BvbnNlRXZlbnQgPSBuZXcgRXZlbnQoe1xuICAgICAgICBuYW1lOiBgJHtuYW1lfV9SRVNQT05TRWAsXG4gICAgICAgIGRhdGFcbiAgICAgIH0pO1xuXG4gICAgICAvKiBQdWJsaXNoIHRoZSBldmVudCAqL1xuICAgICAgcmVzcG9uc2VFdmVudC5wdWJsaXNoKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8qIENoZWNrIHRoYXQgYSByZXNwb25zZSBoYW5kbGVyIGlzIGluIHBsYWNlICovXG4gICAgICBpZiAoICFyZXNwb25zZUhhbmRsZXIgKSB7XG4gICAgICAgIHRocm93IG5ldyBFdmVudEJ1c0V4Y2VwdGlvbiggJ0Nhbm5vdCByZXNwb25kIHRvIGFuIGV2ZW50IHRoYXQgZG9lcyBub3QgaGF2ZSBhIHJlc3BvbnNlIGhhbmRsZXInICk7XG4gICAgICB9XG5cbiAgICAgIC8qIENhbGwgdGhlIHJlc3BvbnNlIGhhbmRsZXIgd2l0aCB0aGUgcHJvdmlkZWQgZGF0YSAqL1xuICAgICAgcmVzcG9uc2VIYW5kbGVyKCBkYXRhICk7XG4gICAgfVxuXG4gICAgLyogSW5jcmVtZW50IHJlc3BvbnNlcyByZWNlaXZlZCAqL1xuICAgIHRoaXMucmVzcG9uc2VzUmVjZWl2ZWQrKztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFdmVudDtcbiJdfQ==
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
    };

    /* Merge the opts with the default options */
    var mergedOpts = _extends({}, defaultOpts, opts);

    /* Set the options and other initial values */
    this.options = mergedOpts;
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
      if (this.options.type !== _EventType2.default.REQRES) {
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
      if (type !== _EventType2.default.REQRES) {
        throw new _EventBusException2.default('You cannot respond to an event that is not a REQRES event');
      }

      /* Drop the response if we have exceeded the maximum number of responses */
      if (maxResponses !== -1 && responsesReceived >= maxResponses) {
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
      this.responsesReceived = this.responsesReceived + 1;
    }
  }]);

  return Event;
}();

exports.default = Event;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb3JlL2V2ZW50LWJ1cy9FdmVudC5qcyJdLCJuYW1lcyI6WyJsb2ciLCJFdmVudCIsIm9wdHMiLCJkZWZhdWx0T3B0cyIsIm5hbWUiLCJkYXRhIiwidHlwZSIsIlJFUSIsIm1heFJlc3BvbnNlcyIsImdsb2JhbFJlc3BvbnNlIiwibWVyZ2VkT3B0cyIsIm9wdGlvbnMiLCJyZXNwb25zZXNSZWNlaXZlZCIsInB1Ymxpc2hlZCIsInJlc3BvbnNlSGFuZGxlciIsInB1Ymxpc2giLCJoYW5kbGVyIiwiZmlsdGVyIiwiUkVRUkVTIiwid2FybmluZyIsIkZ1bmN0aW9uIiwicHJvY2VzcyIsImRlZmluZUV2ZW50IiwicmVzcG9uc2VFdmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7cWpCQUFBOzs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsTUFBTSx5QkFBa0IsT0FBbEIsQ0FBWjs7SUFFTUMsSztBQUNKLG1CQUF3QjtBQUFBLFFBQVhDLElBQVcsdUVBQUosRUFBSTs7QUFBQTs7QUFDdEI7QUFDQSxRQUFNQyxjQUFjO0FBQ2xCQyxZQUFNLEVBRFk7QUFFbEJDLFlBQU0sRUFGWTtBQUdsQkMsWUFBTSxvQkFBVUMsR0FIRTtBQUlsQkMsb0JBQWMsQ0FBQyxDQUpHO0FBS2xCQyxzQkFBZ0I7QUFMRSxLQUFwQjs7QUFRQTtBQUNBLFFBQU1DLDBCQUNEUCxXQURDLEVBRURELElBRkMsQ0FBTjs7QUFLQTtBQUNBLFNBQUtTLE9BQUwsR0FBZUQsVUFBZjtBQUNBLFNBQUtFLGlCQUFMLEdBQXlCLENBQXpCO0FBQ0EsU0FBS0MsU0FBTCxHQUFpQixLQUFqQjtBQUNBLFNBQUtDLGVBQUwsR0FBdUIsSUFBdkI7O0FBRUEsV0FBTyxJQUFQO0FBQ0Q7O0FBRUQ7Ozs7OzhCQUNVO0FBQ1IsYUFBTyxLQUFLSCxPQUFMLENBQWFQLElBQXBCO0FBQ0Q7O0FBRUQ7Ozs7OEJBQ1U7QUFDUixhQUFPLEtBQUtPLE9BQUwsQ0FBYU4sSUFBcEI7QUFDRDs7QUFFRDs7Ozs4QkFDVTtBQUNSLGFBQU8sS0FBS00sT0FBTCxDQUFhTCxJQUFwQjtBQUNEOztBQUVEOzs7OzhCQUNVO0FBQ1IsV0FBS00saUJBQUwsR0FBeUIsQ0FBekI7QUFDQSx5QkFBU0csT0FBVCxDQUFrQixJQUFsQjtBQUNEOztBQUVEOzs7O3VDQUNvQkMsTyxFQUFTQyxNLEVBQVM7QUFDcEM7QUFDQSxVQUFLLEtBQUtOLE9BQUwsQ0FBYUwsSUFBYixLQUFzQixvQkFBVVksTUFBckMsRUFBOEM7QUFDNUNsQixZQUFJbUIsT0FBSixDQUFhLHVEQUFiO0FBQ0Q7O0FBRUQ7QUFDQSxVQUFLLENBQUNILE9BQUQsSUFBWSxFQUFHQSxtQkFBbUJJLFFBQXRCLENBQWpCLEVBQW1EO0FBQ2pELGNBQU0sZ0NBQXVCLDJDQUF2QixDQUFOO0FBQ0Q7O0FBRUQ7QUFDQSxVQUFLSCxNQUFMLEVBQWM7QUFDWixhQUFLSCxlQUFMLEdBQXVCLFVBQUVULElBQUYsRUFBWTtBQUNqQyxjQUFLWSxPQUFPSSxPQUFQLENBQWdCaEIsSUFBaEIsQ0FBTCxFQUE2QjtBQUMzQlcsb0JBQVNYLElBQVQ7QUFDRDtBQUNGLFNBSkQ7QUFLRCxPQU5ELE1BTU87QUFDTDtBQUNBLGFBQUtTLGVBQUwsR0FBdUJFLE9BQXZCO0FBQ0Q7QUFDRjs7QUFFRDs7Ozs0QkFDU1gsSSxFQUFPO0FBQUEsVUFDTlEsU0FETSxHQUNxRCxJQURyRCxDQUNOQSxTQURNO0FBQUEsVUFDS0YsT0FETCxHQUNxRCxJQURyRCxDQUNLQSxPQURMO0FBQUEsVUFDY0csZUFEZCxHQUNxRCxJQURyRCxDQUNjQSxlQURkO0FBQUEsVUFDK0JGLGlCQUQvQixHQUNxRCxJQURyRCxDQUMrQkEsaUJBRC9CO0FBQUEsVUFFTlIsSUFGTSxHQUV1Q08sT0FGdkMsQ0FFTlAsSUFGTTtBQUFBLFVBRUFFLElBRkEsR0FFdUNLLE9BRnZDLENBRUFMLElBRkE7QUFBQSxVQUVNRSxZQUZOLEdBRXVDRyxPQUZ2QyxDQUVNSCxZQUZOO0FBQUEsVUFFb0JDLGNBRnBCLEdBRXVDRSxPQUZ2QyxDQUVvQkYsY0FGcEI7O0FBSWQ7O0FBQ0EsVUFBSyxDQUFDSSxTQUFOLEVBQWtCO0FBQ2hCLGNBQU0sZ0NBQXVCLDREQUF2QixDQUFOO0FBQ0Q7O0FBRUQ7QUFDQSxVQUFLUCxTQUFTLG9CQUFVWSxNQUF4QixFQUFpQztBQUMvQixjQUFNLGdDQUF1QiwyREFBdkIsQ0FBTjtBQUNEOztBQUVEO0FBQ0EsVUFBS1YsaUJBQWlCLENBQUMsQ0FBbEIsSUFBdUJJLHFCQUFxQkosWUFBakQsRUFBZ0U7QUFDOUQ7QUFDRDs7QUFFRDtBQUNBLFVBQUtDLGNBQUwsRUFBc0I7QUFDcEI7QUFDQSwyQkFBU2EsV0FBVCxDQUF5QmxCLElBQXpCOztBQUVBO0FBQ0EsWUFBTW1CLGdCQUFnQixJQUFJdEIsS0FBSixDQUFVO0FBQzlCRyxnQkFBU0EsSUFBVCxjQUQ4QjtBQUU5QkM7QUFGOEIsU0FBVixDQUF0Qjs7QUFLQTtBQUNBa0Isc0JBQWNSLE9BQWQ7QUFDRCxPQVpELE1BWU87QUFDTDtBQUNBLFlBQUssQ0FBQ0QsZUFBTixFQUF3QjtBQUN0QixnQkFBTSxnQ0FBdUIsa0VBQXZCLENBQU47QUFDRDs7QUFFRDtBQUNBQSx3QkFBaUJULElBQWpCO0FBQ0Q7O0FBRUQ7QUFDQSxXQUFLTyxpQkFBTCxHQUF5QixLQUFLQSxpQkFBTCxHQUF5QixDQUFsRDtBQUNEOzs7Ozs7a0JBR1lYLEsiLCJmaWxlIjoiRXZlbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBJbXBvcnQgb3RoZXIgZXZlbnQgY2xhc3NlcyAqL1xuaW1wb3J0IEV2ZW50VHlwZSBmcm9tICcuL0V2ZW50VHlwZSc7XG5pbXBvcnQgRXZlbnRCdXMgZnJvbSAnLi9FdmVudEJ1cyc7XG5pbXBvcnQgRXZlbnRCdXNFeGNlcHRpb24gZnJvbSAnLi9FdmVudEJ1c0V4Y2VwdGlvbic7XG5pbXBvcnQgeyBNb2R1bGVMb2dnZXIgfSBmcm9tICcuLi9sb2dnZXInO1xuXG5jb25zdCBsb2cgPSBuZXcgTW9kdWxlTG9nZ2VyKCAnRXZlbnQnICk7XG5cbmNsYXNzIEV2ZW50IHtcbiAgY29uc3RydWN0b3IoIG9wdHMgPSB7fSkge1xuICAgIC8qIERlZmluZSB0aGUgZGVmYXVsdCBvcHRpb25zIGZvciBhbiBldmVudCAqL1xuICAgIGNvbnN0IGRlZmF1bHRPcHRzID0ge1xuICAgICAgbmFtZTogJycsXG4gICAgICBkYXRhOiB7fSxcbiAgICAgIHR5cGU6IEV2ZW50VHlwZS5SRVEsXG4gICAgICBtYXhSZXNwb25zZXM6IC0xLFxuICAgICAgZ2xvYmFsUmVzcG9uc2U6IGZhbHNlLFxuICAgIH07XG5cbiAgICAvKiBNZXJnZSB0aGUgb3B0cyB3aXRoIHRoZSBkZWZhdWx0IG9wdGlvbnMgKi9cbiAgICBjb25zdCBtZXJnZWRPcHRzID0ge1xuICAgICAgLi4uZGVmYXVsdE9wdHMsXG4gICAgICAuLi5vcHRzLFxuICAgIH07XG5cbiAgICAvKiBTZXQgdGhlIG9wdGlvbnMgYW5kIG90aGVyIGluaXRpYWwgdmFsdWVzICovXG4gICAgdGhpcy5vcHRpb25zID0gbWVyZ2VkT3B0cztcbiAgICB0aGlzLnJlc3BvbnNlc1JlY2VpdmVkID0gMDtcbiAgICB0aGlzLnB1Ymxpc2hlZCA9IGZhbHNlO1xuICAgIHRoaXMucmVzcG9uc2VIYW5kbGVyID0gbnVsbDtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyogUmV0dXJucyB0aGUgZXZlbnQgbmFtZSAqL1xuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbnMubmFtZTtcbiAgfVxuXG4gIC8qIFJldHVybnMgdGhlIGV2ZW50IGRhdGEgKi9cbiAgZ2V0RGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmRhdGE7XG4gIH1cblxuICAvKiBSZXR1cm5zIHRoZSBldmVudCB0eXBlICovXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy50eXBlO1xuICB9XG5cbiAgLyogUHVibGlzaGVzIHRoZSBldmVudCBvbiB0aGUgZXZlbnQgYnVzICovXG4gIHB1Ymxpc2goKSB7XG4gICAgdGhpcy5yZXNwb25zZXNSZWNlaXZlZCA9IDA7XG4gICAgRXZlbnRCdXMucHVibGlzaCggdGhpcyApO1xuICB9XG5cbiAgLyogU2V0cyB0aGUgcmVzcG9uc2UgaGFuZGxlciBmb3IgdGhlIGV2ZW50ICovXG4gIHNldFJlc3BvbnNlSGFuZGxlciggaGFuZGxlciwgZmlsdGVyICkge1xuICAgIC8qIExvZyBhIHdhcm5pbmcgaWYgd2UgYXJlIHNldHRpbmcgYSBoYW5kbGVyIG9uIGEgbm9uIFJFUVJFUyBldmVudCAqL1xuICAgIGlmICggdGhpcy5vcHRpb25zLnR5cGUgIT09IEV2ZW50VHlwZS5SRVFSRVMgKSB7XG4gICAgICBsb2cud2FybmluZyggJ0EgcmVzcG9uc2UgaGFuZGxlciBoYXMgYmVlbiBzZXQgb24gYSBub24gUkVRUkVTIGV2ZW50JyApO1xuICAgIH1cblxuICAgIC8qIENoZWNrIHRoYXQgdGhlIGhhbmRsZXIgcHJvdmlkZWQgaXMgbm9uIG51bGwgYW5kIGEgZnVuY3Rpb24gKi9cbiAgICBpZiAoICFoYW5kbGVyIHx8ICEoIGhhbmRsZXIgaW5zdGFuY2VvZiBGdW5jdGlvbiApKSB7XG4gICAgICB0aHJvdyBuZXcgRXZlbnRCdXNFeGNlcHRpb24oICdBIHZhbGlkIHJlc3BvbnNlIGhhbmRsZXIgbXVzdCBiZSBwcm92aWRlZCcgKTtcbiAgICB9XG5cbiAgICAvKiBDaGVjayB0byBzZWUgaWYgYSBmaWx0ZXIgd2FzIGRlZmluZWQgKi9cbiAgICBpZiAoIGZpbHRlciApIHtcbiAgICAgIHRoaXMucmVzcG9uc2VIYW5kbGVyID0gKCBkYXRhICkgPT4ge1xuICAgICAgICBpZiAoIGZpbHRlci5wcm9jZXNzKCBkYXRhICkpIHtcbiAgICAgICAgICBoYW5kbGVyKCBkYXRhICk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIC8qIFNldCB0aGUgcmVzcG9uc2UgaGFuZGxlciAqL1xuICAgICAgdGhpcy5yZXNwb25zZUhhbmRsZXIgPSBoYW5kbGVyO1xuICAgIH1cbiAgfVxuXG4gIC8qIENyZWF0ZXMgYSByZXNwb25zZSBmb3IgdGhlIGV2ZW50ICovXG4gIHJlc3BvbmQoIGRhdGEgKSB7XG4gICAgY29uc3QgeyBwdWJsaXNoZWQsIG9wdGlvbnMsIHJlc3BvbnNlSGFuZGxlciwgcmVzcG9uc2VzUmVjZWl2ZWQgfSA9IHRoaXM7XG4gICAgY29uc3QgeyBuYW1lLCB0eXBlLCBtYXhSZXNwb25zZXMsIGdsb2JhbFJlc3BvbnNlIH0gPSBvcHRpb25zO1xuXG4gICAgLyogQ2hlY2sgdGhhdCB0aGlzIGV2ZW50IGhhcyBiZWVuIHB1Ymxpc2hlZCAqL1xuICAgIGlmICggIXB1Ymxpc2hlZCApIHtcbiAgICAgIHRocm93IG5ldyBFdmVudEJ1c0V4Y2VwdGlvbiggJ1lvdSBjYW5ub3QgcmVzcG9uZCB0byBhbiBldmVudCB0aGF0IGhhcyBub3QgYmVlbiBwdWJsaXNoZWQnICk7XG4gICAgfVxuXG4gICAgLyogQ2hlY2sgdGhhdCByZXNwb25zZXMgYXJlIGFsbG93ZWQgdG8gdGhpcyB0eXBlIG9mIGV2ZW50ICovXG4gICAgaWYgKCB0eXBlICE9PSBFdmVudFR5cGUuUkVRUkVTICkge1xuICAgICAgdGhyb3cgbmV3IEV2ZW50QnVzRXhjZXB0aW9uKCAnWW91IGNhbm5vdCByZXNwb25kIHRvIGFuIGV2ZW50IHRoYXQgaXMgbm90IGEgUkVRUkVTIGV2ZW50JyApO1xuICAgIH1cblxuICAgIC8qIERyb3AgdGhlIHJlc3BvbnNlIGlmIHdlIGhhdmUgZXhjZWVkZWQgdGhlIG1heGltdW0gbnVtYmVyIG9mIHJlc3BvbnNlcyAqL1xuICAgIGlmICggbWF4UmVzcG9uc2VzICE9PSAtMSAmJiByZXNwb25zZXNSZWNlaXZlZCA+PSBtYXhSZXNwb25zZXMgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLyogQ2hlY2sgd2hldGhlciB0aGlzIGlzIGEgZ2xvYmFsIHJlc3BvbnNlICovXG4gICAgaWYgKCBnbG9iYWxSZXNwb25zZSApIHtcbiAgICAgIC8qIERlZmluZSB0aGUgcmVzcG9uc2UgZXZlbnQgKi9cbiAgICAgIEV2ZW50QnVzLmRlZmluZUV2ZW50KCBgJHtuYW1lfV9SRVNQT05TRWAgKTtcblxuICAgICAgLyogQ3JlYXRlIGEgbmV3IGV2ZW50ICovXG4gICAgICBjb25zdCByZXNwb25zZUV2ZW50ID0gbmV3IEV2ZW50KHtcbiAgICAgICAgbmFtZTogYCR7bmFtZX1fUkVTUE9OU0VgLFxuICAgICAgICBkYXRhLFxuICAgICAgfSk7XG5cbiAgICAgIC8qIFB1Ymxpc2ggdGhlIGV2ZW50ICovXG4gICAgICByZXNwb25zZUV2ZW50LnB1Ymxpc2goKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLyogQ2hlY2sgdGhhdCBhIHJlc3BvbnNlIGhhbmRsZXIgaXMgaW4gcGxhY2UgKi9cbiAgICAgIGlmICggIXJlc3BvbnNlSGFuZGxlciApIHtcbiAgICAgICAgdGhyb3cgbmV3IEV2ZW50QnVzRXhjZXB0aW9uKCAnQ2Fubm90IHJlc3BvbmQgdG8gYW4gZXZlbnQgdGhhdCBkb2VzIG5vdCBoYXZlIGEgcmVzcG9uc2UgaGFuZGxlcicgKTtcbiAgICAgIH1cblxuICAgICAgLyogQ2FsbCB0aGUgcmVzcG9uc2UgaGFuZGxlciB3aXRoIHRoZSBwcm92aWRlZCBkYXRhICovXG4gICAgICByZXNwb25zZUhhbmRsZXIoIGRhdGEgKTtcbiAgICB9XG5cbiAgICAvKiBJbmNyZW1lbnQgcmVzcG9uc2VzIHJlY2VpdmVkICovXG4gICAgdGhpcy5yZXNwb25zZXNSZWNlaXZlZCA9IHRoaXMucmVzcG9uc2VzUmVjZWl2ZWQgKyAxO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50O1xuIl19
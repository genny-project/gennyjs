'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* Import other classes */


var _WorkflowException = require('./WorkflowException');

var _WorkflowException2 = _interopRequireDefault(_WorkflowException);

var _eventBus = require('../event-bus');

var _logger = require('../logger');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Workflow = function () {
  function Workflow(config) {
    var _this = this;

    _classCallCheck(this, Workflow);

    /* Check that config was provided */
    if (!config) {
      throw new _WorkflowException2.default('Config must be provided when creating a workflow');
    }

    /* Check that required config options were provided */
    if (!config.trigger) {
      throw new _WorkflowException2.default('A valid trigger must be provided when creating a workflow');
    }

    if (!config.actions) {
      throw new _WorkflowException2.default('A valid list of actions must be provided when creating a workflow');
    }

    /* Define the default config */
    var defaultConfig = {
      active: true,
      trigger: {},
      actions: []

      /* Combine the provided config with the default config and store it */
    };this.config = _extends({}, defaultConfig, config);

    var _config = this.config,
        id = _config.id,
        active = _config.active,
        trigger = _config.trigger;

    /* Firstly make sure workflow is active */

    if (!active) {
      return;
    }

    /* Check that the trigger is valid */
    if (!trigger.name) {
      throw new _WorkflowException2.default('A valid event name must be provided for a workflow trigger');
    }

    /* Create a subscription based on the trigger */
    this.triggerSubscription = new _eventBus.Subscription(trigger.name, trigger, function (event) {
      _this.runActions();
    });

    /* Create a logger */
    this.log = new _logger.ModuleLogger('Workflow ' + id);

    /* Log that the workflow has been loaded */
    this.log.debug('Loaded workflow');
  }

  _createClass(Workflow, [{
    key: 'runActions',
    value: function runActions() {
      var _this2 = this;

      var actions = this.config.actions;

      this.log.debug('Running workflow');

      /* Run all the actions */
      actions.forEach(function (action) {
        _this2.runAction(action);
      });
    }
  }, {
    key: 'runAction',
    value: function runAction(action) {
      var _this3 = this;

      var event = new _eventBus.Event(action.event);
      if (action.response) {
        event.setResponseHandler(function (data) {
          _this3.runAction(action.response);
        });
      }

      event.publish();
    }
  }]);

  return Workflow;
}();

exports.default = Workflow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb3JlL3dvcmtmbG93L1dvcmtmbG93LmpzIl0sIm5hbWVzIjpbIldvcmtmbG93IiwiY29uZmlnIiwidHJpZ2dlciIsImFjdGlvbnMiLCJkZWZhdWx0Q29uZmlnIiwiYWN0aXZlIiwiaWQiLCJuYW1lIiwidHJpZ2dlclN1YnNjcmlwdGlvbiIsInJ1bkFjdGlvbnMiLCJsb2ciLCJkZWJ1ZyIsImZvckVhY2giLCJydW5BY3Rpb24iLCJhY3Rpb24iLCJldmVudCIsInJlc3BvbnNlIiwic2V0UmVzcG9uc2VIYW5kbGVyIiwicHVibGlzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7cWpCQUFBOzs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7SUFFTUEsUTtBQUNKLG9CQUFhQyxNQUFiLEVBQXNCO0FBQUE7O0FBQUE7O0FBQ3BCO0FBQ0EsUUFBSyxDQUFDQSxNQUFOLEVBQWU7QUFDYixZQUFNLGdDQUF1QixrREFBdkIsQ0FBTjtBQUNEOztBQUVEO0FBQ0EsUUFBSyxDQUFDQSxPQUFPQyxPQUFiLEVBQXVCO0FBQ3JCLFlBQU0sZ0NBQXVCLDJEQUF2QixDQUFOO0FBQ0Q7O0FBRUQsUUFBSyxDQUFDRCxPQUFPRSxPQUFiLEVBQXVCO0FBQ3JCLFlBQU0sZ0NBQXVCLG1FQUF2QixDQUFOO0FBQ0Q7O0FBRUQ7QUFDQSxRQUFNQyxnQkFBZ0I7QUFDcEJDLGNBQVEsSUFEWTtBQUVwQkgsZUFBUyxFQUZXO0FBR3BCQyxlQUFTOztBQUdYO0FBTnNCLEtBQXRCLENBT0EsS0FBS0YsTUFBTCxnQkFDS0csYUFETCxFQUVLSCxNQUZMOztBQXZCb0Isa0JBNEJZLEtBQUtBLE1BNUJqQjtBQUFBLFFBNEJaSyxFQTVCWSxXQTRCWkEsRUE1Qlk7QUFBQSxRQTRCUkQsTUE1QlEsV0E0QlJBLE1BNUJRO0FBQUEsUUE0QkFILE9BNUJBLFdBNEJBQSxPQTVCQTs7QUE4QnBCOztBQUNBLFFBQUssQ0FBQ0csTUFBTixFQUFlO0FBQ2I7QUFDRDs7QUFFRDtBQUNBLFFBQUssQ0FBQ0gsUUFBUUssSUFBZCxFQUFxQjtBQUNuQixZQUFNLGdDQUF1Qiw0REFBdkIsQ0FBTjtBQUNEOztBQUVEO0FBQ0EsU0FBS0MsbUJBQUwsR0FBMkIsMkJBQWtCTixRQUFRSyxJQUExQixFQUFnQ0wsT0FBaEMsRUFBeUMsaUJBQVM7QUFDM0UsWUFBS08sVUFBTDtBQUNELEtBRjBCLENBQTNCOztBQUlBO0FBQ0EsU0FBS0MsR0FBTCxHQUFXLHVDQUE4QkosRUFBOUIsQ0FBWDs7QUFFQTtBQUNBLFNBQUtJLEdBQUwsQ0FBU0MsS0FBVCxDQUFnQixpQkFBaEI7QUFDRDs7OztpQ0FFWTtBQUFBOztBQUFBLFVBQ0hSLE9BREcsR0FDUyxLQUFLRixNQURkLENBQ0hFLE9BREc7O0FBRVgsV0FBS08sR0FBTCxDQUFTQyxLQUFULENBQWdCLGtCQUFoQjs7QUFFQTtBQUNBUixjQUFRUyxPQUFSLENBQWdCLGtCQUFVO0FBQ3hCLGVBQUtDLFNBQUwsQ0FBZ0JDLE1BQWhCO0FBQ0QsT0FGRDtBQUdEOzs7OEJBRVVBLE0sRUFBUztBQUFBOztBQUNsQixVQUFNQyxRQUFRLG9CQUFVRCxPQUFPQyxLQUFqQixDQUFkO0FBQ0EsVUFBS0QsT0FBT0UsUUFBWixFQUF1QjtBQUNyQkQsY0FBTUUsa0JBQU4sQ0FBMEIsZ0JBQVE7QUFDaEMsaUJBQUtKLFNBQUwsQ0FBZ0JDLE9BQU9FLFFBQXZCO0FBQ0QsU0FGRDtBQUdEOztBQUVERCxZQUFNRyxPQUFOO0FBQ0Q7Ozs7OztrQkFHWWxCLFEiLCJmaWxlIjoiV29ya2Zsb3cuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBJbXBvcnQgb3RoZXIgY2xhc3NlcyAqL1xuaW1wb3J0IFdvcmtmbG93RXhjZXB0aW9uIGZyb20gJy4vV29ya2Zsb3dFeGNlcHRpb24nO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uLCBFdmVudCB9IGZyb20gJy4uL2V2ZW50LWJ1cyc7XG5pbXBvcnQgeyBNb2R1bGVMb2dnZXIgfSBmcm9tICcuLi9sb2dnZXInO1xuXG5jbGFzcyBXb3JrZmxvdyB7XG4gIGNvbnN0cnVjdG9yKCBjb25maWcgKSB7XG4gICAgLyogQ2hlY2sgdGhhdCBjb25maWcgd2FzIHByb3ZpZGVkICovXG4gICAgaWYgKCAhY29uZmlnICkge1xuICAgICAgdGhyb3cgbmV3IFdvcmtmbG93RXhjZXB0aW9uKCAnQ29uZmlnIG11c3QgYmUgcHJvdmlkZWQgd2hlbiBjcmVhdGluZyBhIHdvcmtmbG93JyApO1xuICAgIH1cblxuICAgIC8qIENoZWNrIHRoYXQgcmVxdWlyZWQgY29uZmlnIG9wdGlvbnMgd2VyZSBwcm92aWRlZCAqL1xuICAgIGlmICggIWNvbmZpZy50cmlnZ2VyICkge1xuICAgICAgdGhyb3cgbmV3IFdvcmtmbG93RXhjZXB0aW9uKCAnQSB2YWxpZCB0cmlnZ2VyIG11c3QgYmUgcHJvdmlkZWQgd2hlbiBjcmVhdGluZyBhIHdvcmtmbG93JyApO1xuICAgIH1cblxuICAgIGlmICggIWNvbmZpZy5hY3Rpb25zICkge1xuICAgICAgdGhyb3cgbmV3IFdvcmtmbG93RXhjZXB0aW9uKCAnQSB2YWxpZCBsaXN0IG9mIGFjdGlvbnMgbXVzdCBiZSBwcm92aWRlZCB3aGVuIGNyZWF0aW5nIGEgd29ya2Zsb3cnICk7XG4gICAgfVxuXG4gICAgLyogRGVmaW5lIHRoZSBkZWZhdWx0IGNvbmZpZyAqL1xuICAgIGNvbnN0IGRlZmF1bHRDb25maWcgPSB7XG4gICAgICBhY3RpdmU6IHRydWUsXG4gICAgICB0cmlnZ2VyOiB7fSxcbiAgICAgIGFjdGlvbnM6IFtdXG4gICAgfVxuXG4gICAgLyogQ29tYmluZSB0aGUgcHJvdmlkZWQgY29uZmlnIHdpdGggdGhlIGRlZmF1bHQgY29uZmlnIGFuZCBzdG9yZSBpdCAqL1xuICAgIHRoaXMuY29uZmlnID0ge1xuICAgICAgLi4uZGVmYXVsdENvbmZpZyxcbiAgICAgIC4uLmNvbmZpZyxcbiAgICB9O1xuXG4gICAgY29uc3QgeyBpZCwgYWN0aXZlLCB0cmlnZ2VyIH0gPSB0aGlzLmNvbmZpZztcblxuICAgIC8qIEZpcnN0bHkgbWFrZSBzdXJlIHdvcmtmbG93IGlzIGFjdGl2ZSAqL1xuICAgIGlmICggIWFjdGl2ZSApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvKiBDaGVjayB0aGF0IHRoZSB0cmlnZ2VyIGlzIHZhbGlkICovXG4gICAgaWYgKCAhdHJpZ2dlci5uYW1lICkge1xuICAgICAgdGhyb3cgbmV3IFdvcmtmbG93RXhjZXB0aW9uKCAnQSB2YWxpZCBldmVudCBuYW1lIG11c3QgYmUgcHJvdmlkZWQgZm9yIGEgd29ya2Zsb3cgdHJpZ2dlcicgKTtcbiAgICB9XG5cbiAgICAvKiBDcmVhdGUgYSBzdWJzY3JpcHRpb24gYmFzZWQgb24gdGhlIHRyaWdnZXIgKi9cbiAgICB0aGlzLnRyaWdnZXJTdWJzY3JpcHRpb24gPSBuZXcgU3Vic2NyaXB0aW9uKCB0cmlnZ2VyLm5hbWUsIHRyaWdnZXIsIGV2ZW50ID0+IHtcbiAgICAgIHRoaXMucnVuQWN0aW9ucygpO1xuICAgIH0pO1xuXG4gICAgLyogQ3JlYXRlIGEgbG9nZ2VyICovXG4gICAgdGhpcy5sb2cgPSBuZXcgTW9kdWxlTG9nZ2VyKCBgV29ya2Zsb3cgJHtpZH1gICk7XG5cbiAgICAvKiBMb2cgdGhhdCB0aGUgd29ya2Zsb3cgaGFzIGJlZW4gbG9hZGVkICovXG4gICAgdGhpcy5sb2cuZGVidWcoICdMb2FkZWQgd29ya2Zsb3cnICk7XG4gIH1cblxuICBydW5BY3Rpb25zKCkge1xuICAgIGNvbnN0IHsgYWN0aW9ucyB9ID0gdGhpcy5jb25maWc7XG4gICAgdGhpcy5sb2cuZGVidWcoICdSdW5uaW5nIHdvcmtmbG93JyApO1xuXG4gICAgLyogUnVuIGFsbCB0aGUgYWN0aW9ucyAqL1xuICAgIGFjdGlvbnMuZm9yRWFjaChhY3Rpb24gPT4ge1xuICAgICAgdGhpcy5ydW5BY3Rpb24oIGFjdGlvbiApO1xuICAgIH0pO1xuICB9XG5cbiAgcnVuQWN0aW9uKCBhY3Rpb24gKSB7XG4gICAgY29uc3QgZXZlbnQgPSBuZXcgRXZlbnQoYWN0aW9uLmV2ZW50KTtcbiAgICBpZiAoIGFjdGlvbi5yZXNwb25zZSApIHtcbiAgICAgIGV2ZW50LnNldFJlc3BvbnNlSGFuZGxlciggZGF0YSA9PiB7XG4gICAgICAgIHRoaXMucnVuQWN0aW9uKCBhY3Rpb24ucmVzcG9uc2UgKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGV2ZW50LnB1Ymxpc2goKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBXb3JrZmxvdztcbiJdfQ==
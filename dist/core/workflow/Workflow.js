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

var _Action = require('./Action');

var _Action2 = _interopRequireDefault(_Action);

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
    };

    /* Combine the provided config with the default config and store it */
    this.config = _extends({}, defaultConfig, config);

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
    this.triggerSubscription = new _eventBus.Subscription(trigger.name, trigger, function () {
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
      new _Action2.default(action).run();
    }
  }]);

  return Workflow;
}();

exports.default = Workflow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb3JlL3dvcmtmbG93L1dvcmtmbG93LmpzIl0sIm5hbWVzIjpbIldvcmtmbG93IiwiY29uZmlnIiwidHJpZ2dlciIsImFjdGlvbnMiLCJkZWZhdWx0Q29uZmlnIiwiYWN0aXZlIiwiaWQiLCJuYW1lIiwidHJpZ2dlclN1YnNjcmlwdGlvbiIsInJ1bkFjdGlvbnMiLCJsb2ciLCJkZWJ1ZyIsImZvckVhY2giLCJhY3Rpb24iLCJydW5BY3Rpb24iLCJydW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O3FqQkFBQTs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7SUFFTUEsUTtBQUNKLG9CQUFhQyxNQUFiLEVBQXNCO0FBQUE7O0FBQUE7O0FBQ3BCO0FBQ0EsUUFBSyxDQUFDQSxNQUFOLEVBQWU7QUFDYixZQUFNLGdDQUF1QixrREFBdkIsQ0FBTjtBQUNEOztBQUVEO0FBQ0EsUUFBSyxDQUFDQSxPQUFPQyxPQUFiLEVBQXVCO0FBQ3JCLFlBQU0sZ0NBQXVCLDJEQUF2QixDQUFOO0FBQ0Q7O0FBRUQsUUFBSyxDQUFDRCxPQUFPRSxPQUFiLEVBQXVCO0FBQ3JCLFlBQU0sZ0NBQXVCLG1FQUF2QixDQUFOO0FBQ0Q7O0FBRUQ7QUFDQSxRQUFNQyxnQkFBZ0I7QUFDcEJDLGNBQVEsSUFEWTtBQUVwQkgsZUFBUyxFQUZXO0FBR3BCQyxlQUFTO0FBSFcsS0FBdEI7O0FBTUE7QUFDQSxTQUFLRixNQUFMLGdCQUNLRyxhQURMLEVBRUtILE1BRkw7O0FBdkJvQixrQkE0QlksS0FBS0EsTUE1QmpCO0FBQUEsUUE0QlpLLEVBNUJZLFdBNEJaQSxFQTVCWTtBQUFBLFFBNEJSRCxNQTVCUSxXQTRCUkEsTUE1QlE7QUFBQSxRQTRCQUgsT0E1QkEsV0E0QkFBLE9BNUJBOztBQThCcEI7O0FBQ0EsUUFBSyxDQUFDRyxNQUFOLEVBQWU7QUFDYjtBQUNEOztBQUVEO0FBQ0EsUUFBSyxDQUFDSCxRQUFRSyxJQUFkLEVBQXFCO0FBQ25CLFlBQU0sZ0NBQXVCLDREQUF2QixDQUFOO0FBQ0Q7O0FBRUQ7QUFDQSxTQUFLQyxtQkFBTCxHQUEyQiwyQkFBa0JOLFFBQVFLLElBQTFCLEVBQWdDTCxPQUFoQyxFQUF5QyxZQUFNO0FBQ3hFLFlBQUtPLFVBQUw7QUFDRCxLQUYwQixDQUEzQjs7QUFJQTtBQUNBLFNBQUtDLEdBQUwsR0FBVyx1Q0FBOEJKLEVBQTlCLENBQVg7O0FBRUE7QUFDQSxTQUFLSSxHQUFMLENBQVNDLEtBQVQsQ0FBZ0IsaUJBQWhCO0FBQ0Q7Ozs7aUNBRVk7QUFBQTs7QUFBQSxVQUNIUixPQURHLEdBQ1MsS0FBS0YsTUFEZCxDQUNIRSxPQURHOztBQUVYLFdBQUtPLEdBQUwsQ0FBU0MsS0FBVCxDQUFnQixrQkFBaEI7O0FBRUE7QUFDQVIsY0FBUVMsT0FBUixDQUFnQixVQUFFQyxNQUFGLEVBQWM7QUFDNUIsZUFBS0MsU0FBTCxDQUFnQkQsTUFBaEI7QUFDRCxPQUZEO0FBR0Q7Ozs4QkFFVUEsTSxFQUFTO0FBQ2xCLDJCQUFZQSxNQUFaLEVBQXFCRSxHQUFyQjtBQUNEOzs7Ozs7a0JBR1lmLFEiLCJmaWxlIjoiV29ya2Zsb3cuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBJbXBvcnQgb3RoZXIgY2xhc3NlcyAqL1xuaW1wb3J0IFdvcmtmbG93RXhjZXB0aW9uIGZyb20gJy4vV29ya2Zsb3dFeGNlcHRpb24nO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAnLi4vZXZlbnQtYnVzJztcbmltcG9ydCB7IE1vZHVsZUxvZ2dlciB9IGZyb20gJy4uL2xvZ2dlcic7XG5pbXBvcnQgQWN0aW9uIGZyb20gJy4vQWN0aW9uJztcblxuY2xhc3MgV29ya2Zsb3cge1xuICBjb25zdHJ1Y3RvciggY29uZmlnICkge1xuICAgIC8qIENoZWNrIHRoYXQgY29uZmlnIHdhcyBwcm92aWRlZCAqL1xuICAgIGlmICggIWNvbmZpZyApIHtcbiAgICAgIHRocm93IG5ldyBXb3JrZmxvd0V4Y2VwdGlvbiggJ0NvbmZpZyBtdXN0IGJlIHByb3ZpZGVkIHdoZW4gY3JlYXRpbmcgYSB3b3JrZmxvdycgKTtcbiAgICB9XG5cbiAgICAvKiBDaGVjayB0aGF0IHJlcXVpcmVkIGNvbmZpZyBvcHRpb25zIHdlcmUgcHJvdmlkZWQgKi9cbiAgICBpZiAoICFjb25maWcudHJpZ2dlciApIHtcbiAgICAgIHRocm93IG5ldyBXb3JrZmxvd0V4Y2VwdGlvbiggJ0EgdmFsaWQgdHJpZ2dlciBtdXN0IGJlIHByb3ZpZGVkIHdoZW4gY3JlYXRpbmcgYSB3b3JrZmxvdycgKTtcbiAgICB9XG5cbiAgICBpZiAoICFjb25maWcuYWN0aW9ucyApIHtcbiAgICAgIHRocm93IG5ldyBXb3JrZmxvd0V4Y2VwdGlvbiggJ0EgdmFsaWQgbGlzdCBvZiBhY3Rpb25zIG11c3QgYmUgcHJvdmlkZWQgd2hlbiBjcmVhdGluZyBhIHdvcmtmbG93JyApO1xuICAgIH1cblxuICAgIC8qIERlZmluZSB0aGUgZGVmYXVsdCBjb25maWcgKi9cbiAgICBjb25zdCBkZWZhdWx0Q29uZmlnID0ge1xuICAgICAgYWN0aXZlOiB0cnVlLFxuICAgICAgdHJpZ2dlcjoge30sXG4gICAgICBhY3Rpb25zOiBbXSxcbiAgICB9O1xuXG4gICAgLyogQ29tYmluZSB0aGUgcHJvdmlkZWQgY29uZmlnIHdpdGggdGhlIGRlZmF1bHQgY29uZmlnIGFuZCBzdG9yZSBpdCAqL1xuICAgIHRoaXMuY29uZmlnID0ge1xuICAgICAgLi4uZGVmYXVsdENvbmZpZyxcbiAgICAgIC4uLmNvbmZpZyxcbiAgICB9O1xuXG4gICAgY29uc3QgeyBpZCwgYWN0aXZlLCB0cmlnZ2VyIH0gPSB0aGlzLmNvbmZpZztcblxuICAgIC8qIEZpcnN0bHkgbWFrZSBzdXJlIHdvcmtmbG93IGlzIGFjdGl2ZSAqL1xuICAgIGlmICggIWFjdGl2ZSApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvKiBDaGVjayB0aGF0IHRoZSB0cmlnZ2VyIGlzIHZhbGlkICovXG4gICAgaWYgKCAhdHJpZ2dlci5uYW1lICkge1xuICAgICAgdGhyb3cgbmV3IFdvcmtmbG93RXhjZXB0aW9uKCAnQSB2YWxpZCBldmVudCBuYW1lIG11c3QgYmUgcHJvdmlkZWQgZm9yIGEgd29ya2Zsb3cgdHJpZ2dlcicgKTtcbiAgICB9XG5cbiAgICAvKiBDcmVhdGUgYSBzdWJzY3JpcHRpb24gYmFzZWQgb24gdGhlIHRyaWdnZXIgKi9cbiAgICB0aGlzLnRyaWdnZXJTdWJzY3JpcHRpb24gPSBuZXcgU3Vic2NyaXB0aW9uKCB0cmlnZ2VyLm5hbWUsIHRyaWdnZXIsICgpID0+IHtcbiAgICAgIHRoaXMucnVuQWN0aW9ucygpO1xuICAgIH0pO1xuXG4gICAgLyogQ3JlYXRlIGEgbG9nZ2VyICovXG4gICAgdGhpcy5sb2cgPSBuZXcgTW9kdWxlTG9nZ2VyKCBgV29ya2Zsb3cgJHtpZH1gICk7XG5cbiAgICAvKiBMb2cgdGhhdCB0aGUgd29ya2Zsb3cgaGFzIGJlZW4gbG9hZGVkICovXG4gICAgdGhpcy5sb2cuZGVidWcoICdMb2FkZWQgd29ya2Zsb3cnICk7XG4gIH1cblxuICBydW5BY3Rpb25zKCkge1xuICAgIGNvbnN0IHsgYWN0aW9ucyB9ID0gdGhpcy5jb25maWc7XG4gICAgdGhpcy5sb2cuZGVidWcoICdSdW5uaW5nIHdvcmtmbG93JyApO1xuXG4gICAgLyogUnVuIGFsbCB0aGUgYWN0aW9ucyAqL1xuICAgIGFjdGlvbnMuZm9yRWFjaCgoIGFjdGlvbiApID0+IHtcbiAgICAgIHRoaXMucnVuQWN0aW9uKCBhY3Rpb24gKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJ1bkFjdGlvbiggYWN0aW9uICkge1xuICAgIG5ldyBBY3Rpb24oIGFjdGlvbiApLnJ1bigpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFdvcmtmbG93O1xuIl19
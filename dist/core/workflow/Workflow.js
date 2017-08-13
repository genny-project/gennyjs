'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* Import other classes */


var _mustache = require('mustache');

var _mustache2 = _interopRequireDefault(_mustache);

var _WorkflowException = require('./WorkflowException');

var _WorkflowException2 = _interopRequireDefault(_WorkflowException);

var _GennyJS = require('../../GennyJS');

var _GennyJS2 = _interopRequireDefault(_GennyJS);

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
      actions: [],
      store: null
    };

    /* Combine the provided config with the default config and store it */
    this.config = _extends({}, defaultConfig, config);

    /* Inject the store if needed */
    if (this.config.store) {
      this.config.store = _GennyJS2.default.stores[this.config.store.toUpperCase()];
    }

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
      _this.runActions(event);
    });

    /* Create a logger */
    this.log = new _logger.ModuleLogger('Workflow ' + id);

    /* Log that the workflow has been loaded */
    this.log.debug('Loaded workflow');
  }

  _createClass(Workflow, [{
    key: 'runActions',
    value: function runActions(event) {
      var _this2 = this;

      var actions = this.config.actions;

      this.log.debug('Running workflow');

      /* Run all the actions */
      actions.forEach(function (action) {
        _this2.runAction(action, event);
      });
    }
  }, {
    key: 'runAction',
    value: function runAction(action, event) {
      /* Inject the context */
      var context = {
        event: event.getData(),
        store: this.config.store ? this.config.store.getAll() : []
      };

      /* We don't want to add handlebars to the response so store the response beforehand */
      var originalResponse = action.response;

      var contextedAction = JSON.parse(_mustache2.default.render(JSON.stringify(action), context));

      /* Add the original response back in */
      contextedAction.response = originalResponse;

      /* Run the action */
      new _Action2.default(contextedAction, {
        originalEvent: context.event,
        store: this.config.store
      }).run();
    }
  }]);

  return Workflow;
}();

exports.default = Workflow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb3JlL3dvcmtmbG93L1dvcmtmbG93LmpzIl0sIm5hbWVzIjpbIldvcmtmbG93IiwiY29uZmlnIiwidHJpZ2dlciIsImFjdGlvbnMiLCJkZWZhdWx0Q29uZmlnIiwiYWN0aXZlIiwic3RvcmUiLCJzdG9yZXMiLCJ0b1VwcGVyQ2FzZSIsImlkIiwibmFtZSIsInRyaWdnZXJTdWJzY3JpcHRpb24iLCJldmVudCIsInJ1bkFjdGlvbnMiLCJsb2ciLCJkZWJ1ZyIsImZvckVhY2giLCJhY3Rpb24iLCJydW5BY3Rpb24iLCJjb250ZXh0IiwiZ2V0RGF0YSIsImdldEFsbCIsIm9yaWdpbmFsUmVzcG9uc2UiLCJyZXNwb25zZSIsImNvbnRleHRlZEFjdGlvbiIsIkpTT04iLCJwYXJzZSIsInJlbmRlciIsInN0cmluZ2lmeSIsIm9yaWdpbmFsRXZlbnQiLCJydW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O3FqQkFBQTs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7O0lBRU1BLFE7QUFDSixvQkFBYUMsTUFBYixFQUFzQjtBQUFBOztBQUFBOztBQUNwQjtBQUNBLFFBQUssQ0FBQ0EsTUFBTixFQUFlO0FBQ2IsWUFBTSxnQ0FBdUIsa0RBQXZCLENBQU47QUFDRDs7QUFFRDtBQUNBLFFBQUssQ0FBQ0EsT0FBT0MsT0FBYixFQUF1QjtBQUNyQixZQUFNLGdDQUF1QiwyREFBdkIsQ0FBTjtBQUNEOztBQUVELFFBQUssQ0FBQ0QsT0FBT0UsT0FBYixFQUF1QjtBQUNyQixZQUFNLGdDQUF1QixtRUFBdkIsQ0FBTjtBQUNEOztBQUVEO0FBQ0EsUUFBTUMsZ0JBQWdCO0FBQ3BCQyxjQUFRLElBRFk7QUFFcEJILGVBQVMsRUFGVztBQUdwQkMsZUFBUyxFQUhXO0FBSXBCRyxhQUFPO0FBSmEsS0FBdEI7O0FBT0E7QUFDQSxTQUFLTCxNQUFMLGdCQUNLRyxhQURMLEVBRUtILE1BRkw7O0FBS0E7QUFDQSxRQUFLLEtBQUtBLE1BQUwsQ0FBWUssS0FBakIsRUFBeUI7QUFDdkIsV0FBS0wsTUFBTCxDQUFZSyxLQUFaLEdBQW9CLGtCQUFRQyxNQUFSLENBQWUsS0FBS04sTUFBTCxDQUFZSyxLQUFaLENBQWtCRSxXQUFsQixFQUFmLENBQXBCO0FBQ0Q7O0FBaENtQixrQkFrQ1ksS0FBS1AsTUFsQ2pCO0FBQUEsUUFrQ1pRLEVBbENZLFdBa0NaQSxFQWxDWTtBQUFBLFFBa0NSSixNQWxDUSxXQWtDUkEsTUFsQ1E7QUFBQSxRQWtDQUgsT0FsQ0EsV0FrQ0FBLE9BbENBOztBQW9DcEI7O0FBQ0EsUUFBSyxDQUFDRyxNQUFOLEVBQWU7QUFDYjtBQUNEOztBQUVEO0FBQ0EsUUFBSyxDQUFDSCxRQUFRUSxJQUFkLEVBQXFCO0FBQ25CLFlBQU0sZ0NBQXVCLDREQUF2QixDQUFOO0FBQ0Q7O0FBRUQ7QUFDQSxTQUFLQyxtQkFBTCxHQUEyQiwyQkFBa0JULFFBQVFRLElBQTFCLEVBQWdDUixPQUFoQyxFQUF5QyxVQUFFVSxLQUFGLEVBQWE7QUFDL0UsWUFBS0MsVUFBTCxDQUFpQkQsS0FBakI7QUFDRCxLQUYwQixDQUEzQjs7QUFJQTtBQUNBLFNBQUtFLEdBQUwsR0FBVyx1Q0FBOEJMLEVBQTlCLENBQVg7O0FBRUE7QUFDQSxTQUFLSyxHQUFMLENBQVNDLEtBQVQsQ0FBZ0IsaUJBQWhCO0FBQ0Q7Ozs7K0JBRVdILEssRUFBUTtBQUFBOztBQUFBLFVBQ1ZULE9BRFUsR0FDRSxLQUFLRixNQURQLENBQ1ZFLE9BRFU7O0FBRWxCLFdBQUtXLEdBQUwsQ0FBU0MsS0FBVCxDQUFnQixrQkFBaEI7O0FBRUE7QUFDQVosY0FBUWEsT0FBUixDQUFnQixVQUFFQyxNQUFGLEVBQWM7QUFDNUIsZUFBS0MsU0FBTCxDQUFnQkQsTUFBaEIsRUFBd0JMLEtBQXhCO0FBQ0QsT0FGRDtBQUdEOzs7OEJBRVVLLE0sRUFBUUwsSyxFQUFRO0FBQ3pCO0FBQ0EsVUFBTU8sVUFBVTtBQUNkUCxlQUFPQSxNQUFNUSxPQUFOLEVBRE87QUFFZGQsZUFBTyxLQUFLTCxNQUFMLENBQVlLLEtBQVosR0FBb0IsS0FBS0wsTUFBTCxDQUFZSyxLQUFaLENBQWtCZSxNQUFsQixFQUFwQixHQUFpRDtBQUYxQyxPQUFoQjs7QUFLQTtBQUNBLFVBQU1DLG1CQUFtQkwsT0FBT00sUUFBaEM7O0FBRUEsVUFBTUMsa0JBQWtCQyxLQUFLQyxLQUFMLENBQVksbUJBQVNDLE1BQVQsQ0FBaUJGLEtBQUtHLFNBQUwsQ0FBZ0JYLE1BQWhCLENBQWpCLEVBQTJDRSxPQUEzQyxDQUFaLENBQXhCOztBQUVBO0FBQ0FLLHNCQUFnQkQsUUFBaEIsR0FBMkJELGdCQUEzQjs7QUFFQTtBQUNBLDJCQUFZRSxlQUFaLEVBQTZCO0FBQzNCSyx1QkFBZVYsUUFBUVAsS0FESTtBQUUzQk4sZUFBTyxLQUFLTCxNQUFMLENBQVlLO0FBRlEsT0FBN0IsRUFHR3dCLEdBSEg7QUFJRDs7Ozs7O2tCQUdZOUIsUSIsImZpbGUiOiJXb3JrZmxvdy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEltcG9ydCBvdGhlciBjbGFzc2VzICovXG5pbXBvcnQgTXVzdGFjaGUgZnJvbSAnbXVzdGFjaGUnO1xuaW1wb3J0IFdvcmtmbG93RXhjZXB0aW9uIGZyb20gJy4vV29ya2Zsb3dFeGNlcHRpb24nO1xuaW1wb3J0IEdlbm55SlMgZnJvbSAnLi4vLi4vR2VubnlKUyc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICcuLi9ldmVudC1idXMnO1xuaW1wb3J0IHsgTW9kdWxlTG9nZ2VyIH0gZnJvbSAnLi4vbG9nZ2VyJztcbmltcG9ydCBBY3Rpb24gZnJvbSAnLi9BY3Rpb24nO1xuXG5jbGFzcyBXb3JrZmxvdyB7XG4gIGNvbnN0cnVjdG9yKCBjb25maWcgKSB7XG4gICAgLyogQ2hlY2sgdGhhdCBjb25maWcgd2FzIHByb3ZpZGVkICovXG4gICAgaWYgKCAhY29uZmlnICkge1xuICAgICAgdGhyb3cgbmV3IFdvcmtmbG93RXhjZXB0aW9uKCAnQ29uZmlnIG11c3QgYmUgcHJvdmlkZWQgd2hlbiBjcmVhdGluZyBhIHdvcmtmbG93JyApO1xuICAgIH1cblxuICAgIC8qIENoZWNrIHRoYXQgcmVxdWlyZWQgY29uZmlnIG9wdGlvbnMgd2VyZSBwcm92aWRlZCAqL1xuICAgIGlmICggIWNvbmZpZy50cmlnZ2VyICkge1xuICAgICAgdGhyb3cgbmV3IFdvcmtmbG93RXhjZXB0aW9uKCAnQSB2YWxpZCB0cmlnZ2VyIG11c3QgYmUgcHJvdmlkZWQgd2hlbiBjcmVhdGluZyBhIHdvcmtmbG93JyApO1xuICAgIH1cblxuICAgIGlmICggIWNvbmZpZy5hY3Rpb25zICkge1xuICAgICAgdGhyb3cgbmV3IFdvcmtmbG93RXhjZXB0aW9uKCAnQSB2YWxpZCBsaXN0IG9mIGFjdGlvbnMgbXVzdCBiZSBwcm92aWRlZCB3aGVuIGNyZWF0aW5nIGEgd29ya2Zsb3cnICk7XG4gICAgfVxuXG4gICAgLyogRGVmaW5lIHRoZSBkZWZhdWx0IGNvbmZpZyAqL1xuICAgIGNvbnN0IGRlZmF1bHRDb25maWcgPSB7XG4gICAgICBhY3RpdmU6IHRydWUsXG4gICAgICB0cmlnZ2VyOiB7fSxcbiAgICAgIGFjdGlvbnM6IFtdLFxuICAgICAgc3RvcmU6IG51bGwsXG4gICAgfTtcblxuICAgIC8qIENvbWJpbmUgdGhlIHByb3ZpZGVkIGNvbmZpZyB3aXRoIHRoZSBkZWZhdWx0IGNvbmZpZyBhbmQgc3RvcmUgaXQgKi9cbiAgICB0aGlzLmNvbmZpZyA9IHtcbiAgICAgIC4uLmRlZmF1bHRDb25maWcsXG4gICAgICAuLi5jb25maWcsXG4gICAgfTtcblxuICAgIC8qIEluamVjdCB0aGUgc3RvcmUgaWYgbmVlZGVkICovXG4gICAgaWYgKCB0aGlzLmNvbmZpZy5zdG9yZSApIHtcbiAgICAgIHRoaXMuY29uZmlnLnN0b3JlID0gR2VubnlKUy5zdG9yZXNbdGhpcy5jb25maWcuc3RvcmUudG9VcHBlckNhc2UoKV07XG4gICAgfVxuXG4gICAgY29uc3QgeyBpZCwgYWN0aXZlLCB0cmlnZ2VyIH0gPSB0aGlzLmNvbmZpZztcblxuICAgIC8qIEZpcnN0bHkgbWFrZSBzdXJlIHdvcmtmbG93IGlzIGFjdGl2ZSAqL1xuICAgIGlmICggIWFjdGl2ZSApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvKiBDaGVjayB0aGF0IHRoZSB0cmlnZ2VyIGlzIHZhbGlkICovXG4gICAgaWYgKCAhdHJpZ2dlci5uYW1lICkge1xuICAgICAgdGhyb3cgbmV3IFdvcmtmbG93RXhjZXB0aW9uKCAnQSB2YWxpZCBldmVudCBuYW1lIG11c3QgYmUgcHJvdmlkZWQgZm9yIGEgd29ya2Zsb3cgdHJpZ2dlcicgKTtcbiAgICB9XG5cbiAgICAvKiBDcmVhdGUgYSBzdWJzY3JpcHRpb24gYmFzZWQgb24gdGhlIHRyaWdnZXIgKi9cbiAgICB0aGlzLnRyaWdnZXJTdWJzY3JpcHRpb24gPSBuZXcgU3Vic2NyaXB0aW9uKCB0cmlnZ2VyLm5hbWUsIHRyaWdnZXIsICggZXZlbnQgKSA9PiB7XG4gICAgICB0aGlzLnJ1bkFjdGlvbnMoIGV2ZW50ICk7XG4gICAgfSk7XG5cbiAgICAvKiBDcmVhdGUgYSBsb2dnZXIgKi9cbiAgICB0aGlzLmxvZyA9IG5ldyBNb2R1bGVMb2dnZXIoIGBXb3JrZmxvdyAke2lkfWAgKTtcblxuICAgIC8qIExvZyB0aGF0IHRoZSB3b3JrZmxvdyBoYXMgYmVlbiBsb2FkZWQgKi9cbiAgICB0aGlzLmxvZy5kZWJ1ZyggJ0xvYWRlZCB3b3JrZmxvdycgKTtcbiAgfVxuXG4gIHJ1bkFjdGlvbnMoIGV2ZW50ICkge1xuICAgIGNvbnN0IHsgYWN0aW9ucyB9ID0gdGhpcy5jb25maWc7XG4gICAgdGhpcy5sb2cuZGVidWcoICdSdW5uaW5nIHdvcmtmbG93JyApO1xuXG4gICAgLyogUnVuIGFsbCB0aGUgYWN0aW9ucyAqL1xuICAgIGFjdGlvbnMuZm9yRWFjaCgoIGFjdGlvbiApID0+IHtcbiAgICAgIHRoaXMucnVuQWN0aW9uKCBhY3Rpb24sIGV2ZW50ICk7XG4gICAgfSk7XG4gIH1cblxuICBydW5BY3Rpb24oIGFjdGlvbiwgZXZlbnQgKSB7XG4gICAgLyogSW5qZWN0IHRoZSBjb250ZXh0ICovXG4gICAgY29uc3QgY29udGV4dCA9IHtcbiAgICAgIGV2ZW50OiBldmVudC5nZXREYXRhKCksXG4gICAgICBzdG9yZTogdGhpcy5jb25maWcuc3RvcmUgPyB0aGlzLmNvbmZpZy5zdG9yZS5nZXRBbGwoKSA6IFtdLFxuICAgIH07XG5cbiAgICAvKiBXZSBkb24ndCB3YW50IHRvIGFkZCBoYW5kbGViYXJzIHRvIHRoZSByZXNwb25zZSBzbyBzdG9yZSB0aGUgcmVzcG9uc2UgYmVmb3JlaGFuZCAqL1xuICAgIGNvbnN0IG9yaWdpbmFsUmVzcG9uc2UgPSBhY3Rpb24ucmVzcG9uc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ZWRBY3Rpb24gPSBKU09OLnBhcnNlKCBNdXN0YWNoZS5yZW5kZXIoIEpTT04uc3RyaW5naWZ5KCBhY3Rpb24gKSwgY29udGV4dCApKTtcblxuICAgIC8qIEFkZCB0aGUgb3JpZ2luYWwgcmVzcG9uc2UgYmFjayBpbiAqL1xuICAgIGNvbnRleHRlZEFjdGlvbi5yZXNwb25zZSA9IG9yaWdpbmFsUmVzcG9uc2U7XG5cbiAgICAvKiBSdW4gdGhlIGFjdGlvbiAqL1xuICAgIG5ldyBBY3Rpb24oIGNvbnRleHRlZEFjdGlvbiwge1xuICAgICAgb3JpZ2luYWxFdmVudDogY29udGV4dC5ldmVudCxcbiAgICAgIHN0b3JlOiB0aGlzLmNvbmZpZy5zdG9yZSxcbiAgICB9KS5ydW4oKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBXb3JrZmxvdztcbiJdfQ==
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
        store: this.config.store ? this.config.store : []
      };

      /* We don't want to add handlebars to the response so store the response beforehand */
      var originalResponse = action.response;

      var contextedAction = JSON.parse(_mustache2.default.render(JSON.stringify(action), context));

      /* Add the original response back in */
      contextedAction.response = originalResponse;

      /* Run the action */
      new _Action2.default(contextedAction, {
        originalEvent: context.event,
        store: context.store
      }).run();
    }
  }]);

  return Workflow;
}();

exports.default = Workflow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb3JlL3dvcmtmbG93L1dvcmtmbG93LmpzIl0sIm5hbWVzIjpbIldvcmtmbG93IiwiY29uZmlnIiwidHJpZ2dlciIsImFjdGlvbnMiLCJkZWZhdWx0Q29uZmlnIiwiYWN0aXZlIiwic3RvcmUiLCJzdG9yZXMiLCJ0b1VwcGVyQ2FzZSIsImlkIiwibmFtZSIsInRyaWdnZXJTdWJzY3JpcHRpb24iLCJldmVudCIsInJ1bkFjdGlvbnMiLCJsb2ciLCJkZWJ1ZyIsImZvckVhY2giLCJhY3Rpb24iLCJydW5BY3Rpb24iLCJjb250ZXh0IiwiZ2V0RGF0YSIsIm9yaWdpbmFsUmVzcG9uc2UiLCJyZXNwb25zZSIsImNvbnRleHRlZEFjdGlvbiIsIkpTT04iLCJwYXJzZSIsInJlbmRlciIsInN0cmluZ2lmeSIsIm9yaWdpbmFsRXZlbnQiLCJydW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O3FqQkFBQTs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7O0lBRU1BLFE7QUFDSixvQkFBYUMsTUFBYixFQUFzQjtBQUFBOztBQUFBOztBQUNwQjtBQUNBLFFBQUssQ0FBQ0EsTUFBTixFQUFlO0FBQ2IsWUFBTSxnQ0FBdUIsa0RBQXZCLENBQU47QUFDRDs7QUFFRDtBQUNBLFFBQUssQ0FBQ0EsT0FBT0MsT0FBYixFQUF1QjtBQUNyQixZQUFNLGdDQUF1QiwyREFBdkIsQ0FBTjtBQUNEOztBQUVELFFBQUssQ0FBQ0QsT0FBT0UsT0FBYixFQUF1QjtBQUNyQixZQUFNLGdDQUF1QixtRUFBdkIsQ0FBTjtBQUNEOztBQUVEO0FBQ0EsUUFBTUMsZ0JBQWdCO0FBQ3BCQyxjQUFRLElBRFk7QUFFcEJILGVBQVMsRUFGVztBQUdwQkMsZUFBUyxFQUhXO0FBSXBCRyxhQUFPO0FBSmEsS0FBdEI7O0FBT0E7QUFDQSxTQUFLTCxNQUFMLGdCQUNLRyxhQURMLEVBRUtILE1BRkw7O0FBS0E7QUFDQSxRQUFLLEtBQUtBLE1BQUwsQ0FBWUssS0FBakIsRUFBeUI7QUFDdkIsV0FBS0wsTUFBTCxDQUFZSyxLQUFaLEdBQW9CLGtCQUFRQyxNQUFSLENBQWUsS0FBS04sTUFBTCxDQUFZSyxLQUFaLENBQWtCRSxXQUFsQixFQUFmLENBQXBCO0FBQ0Q7O0FBaENtQixrQkFrQ1ksS0FBS1AsTUFsQ2pCO0FBQUEsUUFrQ1pRLEVBbENZLFdBa0NaQSxFQWxDWTtBQUFBLFFBa0NSSixNQWxDUSxXQWtDUkEsTUFsQ1E7QUFBQSxRQWtDQUgsT0FsQ0EsV0FrQ0FBLE9BbENBOztBQW9DcEI7O0FBQ0EsUUFBSyxDQUFDRyxNQUFOLEVBQWU7QUFDYjtBQUNEOztBQUVEO0FBQ0EsUUFBSyxDQUFDSCxRQUFRUSxJQUFkLEVBQXFCO0FBQ25CLFlBQU0sZ0NBQXVCLDREQUF2QixDQUFOO0FBQ0Q7O0FBRUQ7QUFDQSxTQUFLQyxtQkFBTCxHQUEyQiwyQkFBa0JULFFBQVFRLElBQTFCLEVBQWdDUixPQUFoQyxFQUF5QyxVQUFFVSxLQUFGLEVBQWE7QUFDL0UsWUFBS0MsVUFBTCxDQUFpQkQsS0FBakI7QUFDRCxLQUYwQixDQUEzQjs7QUFJQTtBQUNBLFNBQUtFLEdBQUwsR0FBVyx1Q0FBOEJMLEVBQTlCLENBQVg7O0FBRUE7QUFDQSxTQUFLSyxHQUFMLENBQVNDLEtBQVQsQ0FBZ0IsaUJBQWhCO0FBQ0Q7Ozs7K0JBRVdILEssRUFBUTtBQUFBOztBQUFBLFVBQ1ZULE9BRFUsR0FDRSxLQUFLRixNQURQLENBQ1ZFLE9BRFU7O0FBRWxCLFdBQUtXLEdBQUwsQ0FBU0MsS0FBVCxDQUFnQixrQkFBaEI7O0FBRUE7QUFDQVosY0FBUWEsT0FBUixDQUFnQixVQUFFQyxNQUFGLEVBQWM7QUFDNUIsZUFBS0MsU0FBTCxDQUFnQkQsTUFBaEIsRUFBd0JMLEtBQXhCO0FBQ0QsT0FGRDtBQUdEOzs7OEJBRVVLLE0sRUFBUUwsSyxFQUFRO0FBQ3pCO0FBQ0EsVUFBTU8sVUFBVTtBQUNkUCxlQUFPQSxNQUFNUSxPQUFOLEVBRE87QUFFZGQsZUFBTyxLQUFLTCxNQUFMLENBQVlLLEtBQVosR0FBb0IsS0FBS0wsTUFBTCxDQUFZSyxLQUFoQyxHQUF3QztBQUZqQyxPQUFoQjs7QUFLQTtBQUNBLFVBQU1lLG1CQUFtQkosT0FBT0ssUUFBaEM7O0FBRUEsVUFBTUMsa0JBQWtCQyxLQUFLQyxLQUFMLENBQVksbUJBQVNDLE1BQVQsQ0FBaUJGLEtBQUtHLFNBQUwsQ0FBZ0JWLE1BQWhCLENBQWpCLEVBQTJDRSxPQUEzQyxDQUFaLENBQXhCOztBQUVBO0FBQ0FJLHNCQUFnQkQsUUFBaEIsR0FBMkJELGdCQUEzQjs7QUFFQTtBQUNBLDJCQUFZRSxlQUFaLEVBQTZCO0FBQzNCSyx1QkFBZVQsUUFBUVAsS0FESTtBQUUzQk4sZUFBT2EsUUFBUWI7QUFGWSxPQUE3QixFQUdHdUIsR0FISDtBQUlEOzs7Ozs7a0JBR1k3QixRIiwiZmlsZSI6IldvcmtmbG93LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogSW1wb3J0IG90aGVyIGNsYXNzZXMgKi9cbmltcG9ydCBNdXN0YWNoZSBmcm9tICdtdXN0YWNoZSc7XG5pbXBvcnQgV29ya2Zsb3dFeGNlcHRpb24gZnJvbSAnLi9Xb3JrZmxvd0V4Y2VwdGlvbic7XG5pbXBvcnQgR2VubnlKUyBmcm9tICcuLi8uLi9HZW5ueUpTJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJy4uL2V2ZW50LWJ1cyc7XG5pbXBvcnQgeyBNb2R1bGVMb2dnZXIgfSBmcm9tICcuLi9sb2dnZXInO1xuaW1wb3J0IEFjdGlvbiBmcm9tICcuL0FjdGlvbic7XG5cbmNsYXNzIFdvcmtmbG93IHtcbiAgY29uc3RydWN0b3IoIGNvbmZpZyApIHtcbiAgICAvKiBDaGVjayB0aGF0IGNvbmZpZyB3YXMgcHJvdmlkZWQgKi9cbiAgICBpZiAoICFjb25maWcgKSB7XG4gICAgICB0aHJvdyBuZXcgV29ya2Zsb3dFeGNlcHRpb24oICdDb25maWcgbXVzdCBiZSBwcm92aWRlZCB3aGVuIGNyZWF0aW5nIGEgd29ya2Zsb3cnICk7XG4gICAgfVxuXG4gICAgLyogQ2hlY2sgdGhhdCByZXF1aXJlZCBjb25maWcgb3B0aW9ucyB3ZXJlIHByb3ZpZGVkICovXG4gICAgaWYgKCAhY29uZmlnLnRyaWdnZXIgKSB7XG4gICAgICB0aHJvdyBuZXcgV29ya2Zsb3dFeGNlcHRpb24oICdBIHZhbGlkIHRyaWdnZXIgbXVzdCBiZSBwcm92aWRlZCB3aGVuIGNyZWF0aW5nIGEgd29ya2Zsb3cnICk7XG4gICAgfVxuXG4gICAgaWYgKCAhY29uZmlnLmFjdGlvbnMgKSB7XG4gICAgICB0aHJvdyBuZXcgV29ya2Zsb3dFeGNlcHRpb24oICdBIHZhbGlkIGxpc3Qgb2YgYWN0aW9ucyBtdXN0IGJlIHByb3ZpZGVkIHdoZW4gY3JlYXRpbmcgYSB3b3JrZmxvdycgKTtcbiAgICB9XG5cbiAgICAvKiBEZWZpbmUgdGhlIGRlZmF1bHQgY29uZmlnICovXG4gICAgY29uc3QgZGVmYXVsdENvbmZpZyA9IHtcbiAgICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICAgIHRyaWdnZXI6IHt9LFxuICAgICAgYWN0aW9uczogW10sXG4gICAgICBzdG9yZTogbnVsbCxcbiAgICB9O1xuXG4gICAgLyogQ29tYmluZSB0aGUgcHJvdmlkZWQgY29uZmlnIHdpdGggdGhlIGRlZmF1bHQgY29uZmlnIGFuZCBzdG9yZSBpdCAqL1xuICAgIHRoaXMuY29uZmlnID0ge1xuICAgICAgLi4uZGVmYXVsdENvbmZpZyxcbiAgICAgIC4uLmNvbmZpZyxcbiAgICB9O1xuXG4gICAgLyogSW5qZWN0IHRoZSBzdG9yZSBpZiBuZWVkZWQgKi9cbiAgICBpZiAoIHRoaXMuY29uZmlnLnN0b3JlICkge1xuICAgICAgdGhpcy5jb25maWcuc3RvcmUgPSBHZW5ueUpTLnN0b3Jlc1t0aGlzLmNvbmZpZy5zdG9yZS50b1VwcGVyQ2FzZSgpXTtcbiAgICB9XG5cbiAgICBjb25zdCB7IGlkLCBhY3RpdmUsIHRyaWdnZXIgfSA9IHRoaXMuY29uZmlnO1xuXG4gICAgLyogRmlyc3RseSBtYWtlIHN1cmUgd29ya2Zsb3cgaXMgYWN0aXZlICovXG4gICAgaWYgKCAhYWN0aXZlICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8qIENoZWNrIHRoYXQgdGhlIHRyaWdnZXIgaXMgdmFsaWQgKi9cbiAgICBpZiAoICF0cmlnZ2VyLm5hbWUgKSB7XG4gICAgICB0aHJvdyBuZXcgV29ya2Zsb3dFeGNlcHRpb24oICdBIHZhbGlkIGV2ZW50IG5hbWUgbXVzdCBiZSBwcm92aWRlZCBmb3IgYSB3b3JrZmxvdyB0cmlnZ2VyJyApO1xuICAgIH1cblxuICAgIC8qIENyZWF0ZSBhIHN1YnNjcmlwdGlvbiBiYXNlZCBvbiB0aGUgdHJpZ2dlciAqL1xuICAgIHRoaXMudHJpZ2dlclN1YnNjcmlwdGlvbiA9IG5ldyBTdWJzY3JpcHRpb24oIHRyaWdnZXIubmFtZSwgdHJpZ2dlciwgKCBldmVudCApID0+IHtcbiAgICAgIHRoaXMucnVuQWN0aW9ucyggZXZlbnQgKTtcbiAgICB9KTtcblxuICAgIC8qIENyZWF0ZSBhIGxvZ2dlciAqL1xuICAgIHRoaXMubG9nID0gbmV3IE1vZHVsZUxvZ2dlciggYFdvcmtmbG93ICR7aWR9YCApO1xuXG4gICAgLyogTG9nIHRoYXQgdGhlIHdvcmtmbG93IGhhcyBiZWVuIGxvYWRlZCAqL1xuICAgIHRoaXMubG9nLmRlYnVnKCAnTG9hZGVkIHdvcmtmbG93JyApO1xuICB9XG5cbiAgcnVuQWN0aW9ucyggZXZlbnQgKSB7XG4gICAgY29uc3QgeyBhY3Rpb25zIH0gPSB0aGlzLmNvbmZpZztcbiAgICB0aGlzLmxvZy5kZWJ1ZyggJ1J1bm5pbmcgd29ya2Zsb3cnICk7XG5cbiAgICAvKiBSdW4gYWxsIHRoZSBhY3Rpb25zICovXG4gICAgYWN0aW9ucy5mb3JFYWNoKCggYWN0aW9uICkgPT4ge1xuICAgICAgdGhpcy5ydW5BY3Rpb24oIGFjdGlvbiwgZXZlbnQgKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJ1bkFjdGlvbiggYWN0aW9uLCBldmVudCApIHtcbiAgICAvKiBJbmplY3QgdGhlIGNvbnRleHQgKi9cbiAgICBjb25zdCBjb250ZXh0ID0ge1xuICAgICAgZXZlbnQ6IGV2ZW50LmdldERhdGEoKSxcbiAgICAgIHN0b3JlOiB0aGlzLmNvbmZpZy5zdG9yZSA/IHRoaXMuY29uZmlnLnN0b3JlIDogW10sXG4gICAgfTtcblxuICAgIC8qIFdlIGRvbid0IHdhbnQgdG8gYWRkIGhhbmRsZWJhcnMgdG8gdGhlIHJlc3BvbnNlIHNvIHN0b3JlIHRoZSByZXNwb25zZSBiZWZvcmVoYW5kICovXG4gICAgY29uc3Qgb3JpZ2luYWxSZXNwb25zZSA9IGFjdGlvbi5yZXNwb25zZTtcblxuICAgIGNvbnN0IGNvbnRleHRlZEFjdGlvbiA9IEpTT04ucGFyc2UoIE11c3RhY2hlLnJlbmRlciggSlNPTi5zdHJpbmdpZnkoIGFjdGlvbiApLCBjb250ZXh0ICkpO1xuXG4gICAgLyogQWRkIHRoZSBvcmlnaW5hbCByZXNwb25zZSBiYWNrIGluICovXG4gICAgY29udGV4dGVkQWN0aW9uLnJlc3BvbnNlID0gb3JpZ2luYWxSZXNwb25zZTtcblxuICAgIC8qIFJ1biB0aGUgYWN0aW9uICovXG4gICAgbmV3IEFjdGlvbiggY29udGV4dGVkQWN0aW9uLCB7XG4gICAgICBvcmlnaW5hbEV2ZW50OiBjb250ZXh0LmV2ZW50LFxuICAgICAgc3RvcmU6IGNvbnRleHQuc3RvcmUsXG4gICAgfSkucnVuKCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgV29ya2Zsb3c7XG4iXX0=
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* Import other event classes */


var _ = require('../');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Store = function () {
  function Store(name, options) {
    var _this = this;

    _classCallCheck(this, Store);

    /* Standardize the name */
    this.name = name.toUpperCase();

    /* Create an internal logger */
    this.log = new _.ModuleLogger('STORE_' + this.name);

    /* Define the default options */
    var defaultOptions = {
      initialState: {},
      persistent: false,
      autoSave: false,
      autoSaveTime: 15000

      /* Combine the default options with the options passed in */
    };this.options = _extends({}, defaultOptions, options);

    /* Create the data store with the specified name, loading from local storage if needed */
    this.db = localStorage.getItem('STORE_' + this.name) ? JSON.parse(localStorage.getItem('STORE_' + this.name)) : this.options.initialState;

    /* Define internal events */
    _.EventBus.defineEvent(['STORE_CREATE_' + this.name, 'STORE_INSERT_' + this.name, 'STORE_SAVE_' + this.name, 'STORE_SAVED_' + this.name]);

    /* Create an event */
    var creationEvent = new _.Event({
      name: 'STORE_CREATE_' + this.name,
      type: _.EventType.REQ
    });

    /* Publish the event */
    creationEvent.publish();

    /* Check whether autosave is enabled */
    if (this.options.autoSave && this.options.persistent) {
      /* Create an autosave timer */
      setInterval(function () {
        _this.log.info('Autosaving');
        _this.save();
      }, this.options.autoSaveTime);
    }

    /* Create a new subscription to any save events for this store */
    new _.Subscription('STORE_SAVE_' + this.name, {}, function () {
      /* Save the store */
      _this.save();
    });
  }

  _createClass(Store, [{
    key: 'set',
    value: function set(data) {
      /* Update the store */
      this.db = _extends({}, this.db, data);

      /* Create an insert event */
      var insertEvent = new _.Event({
        name: 'STORE_INSERT_' + this.name,
        type: _.EventType.REQ,
        data: data
      });

      /* Publish the event */
      insertEvent.publish();
    }
  }, {
    key: 'get',
    value: function get(key, value) {
      return this.db[key];
    }
  }, {
    key: 'getAll',
    value: function getAll() {
      return this.db;
    }

    /* Persists the store to local storage */

  }, {
    key: 'save',
    value: function save() {
      /* Check if this store is a persistent one */
      if (this.options.persistent) {
        this.log.info('Saving to localStorage');
        localStorage.setItem('STORE_' + this.name, JSON.stringify(this.db));

        /* Create an event */
        var savedEvent = new _.Event({
          name: 'STORE_SAVED_' + this.name,
          type: _.EventType.REQ
        });

        /* Publish the event */
        savedEvent.publish();
      }
    }
  }]);

  return Store;
}();

exports.default = Store;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb3JlL3N0b3JlL1N0b3JlLmpzIl0sIm5hbWVzIjpbIlN0b3JlIiwibmFtZSIsIm9wdGlvbnMiLCJ0b1VwcGVyQ2FzZSIsImxvZyIsImRlZmF1bHRPcHRpb25zIiwiaW5pdGlhbFN0YXRlIiwicGVyc2lzdGVudCIsImF1dG9TYXZlIiwiYXV0b1NhdmVUaW1lIiwiZGIiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwiZGVmaW5lRXZlbnQiLCJjcmVhdGlvbkV2ZW50IiwidHlwZSIsIlJFUSIsInB1Ymxpc2giLCJzZXRJbnRlcnZhbCIsImluZm8iLCJzYXZlIiwiZGF0YSIsImluc2VydEV2ZW50Iiwia2V5IiwidmFsdWUiLCJzZXRJdGVtIiwic3RyaW5naWZ5Iiwic2F2ZWRFdmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7cWpCQUFBOzs7QUFDQTs7OztJQUVNQSxLO0FBQ0osaUJBQWFDLElBQWIsRUFBbUJDLE9BQW5CLEVBQTZCO0FBQUE7O0FBQUE7O0FBQzNCO0FBQ0EsU0FBS0QsSUFBTCxHQUFZQSxLQUFLRSxXQUFMLEVBQVo7O0FBRUE7QUFDQSxTQUFLQyxHQUFMLEdBQVcsOEJBQTJCLEtBQUtILElBQWhDLENBQVg7O0FBRUE7QUFDQSxRQUFNSSxpQkFBaUI7QUFDckJDLG9CQUFjLEVBRE87QUFFckJDLGtCQUFZLEtBRlM7QUFHckJDLGdCQUFVLEtBSFc7QUFJckJDLG9CQUFjOztBQUdoQjtBQVB1QixLQUF2QixDQVFBLEtBQUtQLE9BQUwsZ0JBQ0tHLGNBREwsRUFFS0gsT0FGTDs7QUFLQTtBQUNBLFNBQUtRLEVBQUwsR0FBWUMsYUFBYUMsT0FBYixZQUErQixLQUFLWCxJQUFwQyxDQUFGLEdBQWtEWSxLQUFLQyxLQUFMLENBQVlILGFBQWFDLE9BQWIsWUFBK0IsS0FBS1gsSUFBcEMsQ0FBWixDQUFsRCxHQUE4RyxLQUFLQyxPQUFMLENBQWFJLFlBQXJJOztBQUVBO0FBQ0EsZUFBU1MsV0FBVCxDQUFxQixtQkFDSCxLQUFLZCxJQURGLG9CQUVILEtBQUtBLElBRkYsa0JBR0wsS0FBS0EsSUFIQSxtQkFJSixLQUFLQSxJQUpELENBQXJCOztBQU9BO0FBQ0EsUUFBTWUsZ0JBQWdCLFlBQVU7QUFDOUJmLDhCQUFzQixLQUFLQSxJQURHO0FBRTlCZ0IsWUFBTSxZQUFVQztBQUZjLEtBQVYsQ0FBdEI7O0FBS0E7QUFDQUYsa0JBQWNHLE9BQWQ7O0FBRUE7QUFDQSxRQUFLLEtBQUtqQixPQUFMLENBQWFNLFFBQWIsSUFBeUIsS0FBS04sT0FBTCxDQUFhSyxVQUEzQyxFQUF3RDtBQUN0RDtBQUNBYSxrQkFBYSxZQUFNO0FBQ2pCLGNBQUtoQixHQUFMLENBQVNpQixJQUFULENBQWUsWUFBZjtBQUNBLGNBQUtDLElBQUw7QUFDRCxPQUhELEVBR0csS0FBS3BCLE9BQUwsQ0FBYU8sWUFIaEI7QUFJRDs7QUFFRDtBQUNBLHVDQUFnQyxLQUFLUixJQUFyQyxFQUE2QyxFQUE3QyxFQUFpRCxZQUFNO0FBQ3JEO0FBQ0EsWUFBS3FCLElBQUw7QUFDRCxLQUhEO0FBSUQ7Ozs7d0JBRUlDLEksRUFBTztBQUNWO0FBQ0EsV0FBS2IsRUFBTCxnQkFDSyxLQUFLQSxFQURWLEVBRUthLElBRkw7O0FBS0E7QUFDQSxVQUFNQyxjQUFjLFlBQVU7QUFDNUJ2QixnQ0FBc0IsS0FBS0EsSUFEQztBQUU1QmdCLGNBQU0sWUFBVUMsR0FGWTtBQUc1Qks7QUFINEIsT0FBVixDQUFwQjs7QUFNQTtBQUNBQyxrQkFBWUwsT0FBWjtBQUNEOzs7d0JBRUlNLEcsRUFBS0MsSyxFQUFRO0FBQ2hCLGFBQU8sS0FBS2hCLEVBQUwsQ0FBUWUsR0FBUixDQUFQO0FBQ0Q7Ozs2QkFFUTtBQUNQLGFBQU8sS0FBS2YsRUFBWjtBQUNEOztBQUVEOzs7OzJCQUNPO0FBQ0w7QUFDQSxVQUFLLEtBQUtSLE9BQUwsQ0FBYUssVUFBbEIsRUFBK0I7QUFDN0IsYUFBS0gsR0FBTCxDQUFTaUIsSUFBVCxDQUFlLHdCQUFmO0FBQ0FWLHFCQUFhZ0IsT0FBYixZQUErQixLQUFLMUIsSUFBcEMsRUFBNENZLEtBQUtlLFNBQUwsQ0FBZ0IsS0FBS2xCLEVBQXJCLENBQTVDOztBQUVBO0FBQ0EsWUFBTW1CLGFBQWEsWUFBVTtBQUMzQjVCLGlDQUFxQixLQUFLQSxJQURDO0FBRTNCZ0IsZ0JBQU0sWUFBVUM7QUFGVyxTQUFWLENBQW5COztBQUtBO0FBQ0FXLG1CQUFXVixPQUFYO0FBQ0Q7QUFDRjs7Ozs7O2tCQUdZbkIsSyIsImZpbGUiOiJTdG9yZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEltcG9ydCBvdGhlciBldmVudCBjbGFzc2VzICovXG5pbXBvcnQgeyBFdmVudEJ1cywgRXZlbnQsIEV2ZW50VHlwZSwgTW9kdWxlTG9nZ2VyLCBTdWJzY3JpcHRpb24gfSBmcm9tICcuLi8nO1xuXG5jbGFzcyBTdG9yZSB7XG4gIGNvbnN0cnVjdG9yKCBuYW1lLCBvcHRpb25zICkge1xuICAgIC8qIFN0YW5kYXJkaXplIHRoZSBuYW1lICovXG4gICAgdGhpcy5uYW1lID0gbmFtZS50b1VwcGVyQ2FzZSgpO1xuXG4gICAgLyogQ3JlYXRlIGFuIGludGVybmFsIGxvZ2dlciAqL1xuICAgIHRoaXMubG9nID0gbmV3IE1vZHVsZUxvZ2dlciggYFNUT1JFXyR7dGhpcy5uYW1lfWAgKTtcblxuICAgIC8qIERlZmluZSB0aGUgZGVmYXVsdCBvcHRpb25zICovXG4gICAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgICBpbml0aWFsU3RhdGU6IHt9LFxuICAgICAgcGVyc2lzdGVudDogZmFsc2UsXG4gICAgICBhdXRvU2F2ZTogZmFsc2UsXG4gICAgICBhdXRvU2F2ZVRpbWU6IDE1MDAwLFxuICAgIH1cblxuICAgIC8qIENvbWJpbmUgdGhlIGRlZmF1bHQgb3B0aW9ucyB3aXRoIHRoZSBvcHRpb25zIHBhc3NlZCBpbiAqL1xuICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgIC4uLmRlZmF1bHRPcHRpb25zLFxuICAgICAgLi4ub3B0aW9uc1xuICAgIH07XG5cbiAgICAvKiBDcmVhdGUgdGhlIGRhdGEgc3RvcmUgd2l0aCB0aGUgc3BlY2lmaWVkIG5hbWUsIGxvYWRpbmcgZnJvbSBsb2NhbCBzdG9yYWdlIGlmIG5lZWRlZCAqL1xuICAgIHRoaXMuZGIgPSAoIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCBgU1RPUkVfJHt0aGlzLm5hbWV9YCApKSA/IEpTT04ucGFyc2UoIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCBgU1RPUkVfJHt0aGlzLm5hbWV9YCApKSA6IHRoaXMub3B0aW9ucy5pbml0aWFsU3RhdGU7XG5cbiAgICAvKiBEZWZpbmUgaW50ZXJuYWwgZXZlbnRzICovXG4gICAgRXZlbnRCdXMuZGVmaW5lRXZlbnQoW1xuICAgICAgYFNUT1JFX0NSRUFURV8ke3RoaXMubmFtZX1gLFxuICAgICAgYFNUT1JFX0lOU0VSVF8ke3RoaXMubmFtZX1gLFxuICAgICAgYFNUT1JFX1NBVkVfJHt0aGlzLm5hbWV9YCxcbiAgICAgIGBTVE9SRV9TQVZFRF8ke3RoaXMubmFtZX1gXG4gICAgXSk7XG5cbiAgICAvKiBDcmVhdGUgYW4gZXZlbnQgKi9cbiAgICBjb25zdCBjcmVhdGlvbkV2ZW50ID0gbmV3IEV2ZW50KHtcbiAgICAgIG5hbWU6IGBTVE9SRV9DUkVBVEVfJHt0aGlzLm5hbWV9YCxcbiAgICAgIHR5cGU6IEV2ZW50VHlwZS5SRVEsXG4gICAgfSk7XG5cbiAgICAvKiBQdWJsaXNoIHRoZSBldmVudCAqL1xuICAgIGNyZWF0aW9uRXZlbnQucHVibGlzaCgpO1xuXG4gICAgLyogQ2hlY2sgd2hldGhlciBhdXRvc2F2ZSBpcyBlbmFibGVkICovXG4gICAgaWYgKCB0aGlzLm9wdGlvbnMuYXV0b1NhdmUgJiYgdGhpcy5vcHRpb25zLnBlcnNpc3RlbnQgKSB7XG4gICAgICAvKiBDcmVhdGUgYW4gYXV0b3NhdmUgdGltZXIgKi9cbiAgICAgIHNldEludGVydmFsKCAoKSA9PiB7XG4gICAgICAgIHRoaXMubG9nLmluZm8oICdBdXRvc2F2aW5nJyApO1xuICAgICAgICB0aGlzLnNhdmUoKTtcbiAgICAgIH0sIHRoaXMub3B0aW9ucy5hdXRvU2F2ZVRpbWUgKTtcbiAgICB9XG5cbiAgICAvKiBDcmVhdGUgYSBuZXcgc3Vic2NyaXB0aW9uIHRvIGFueSBzYXZlIGV2ZW50cyBmb3IgdGhpcyBzdG9yZSAqL1xuICAgIG5ldyBTdWJzY3JpcHRpb24oIGBTVE9SRV9TQVZFXyR7dGhpcy5uYW1lfWAsIHt9LCAoKSA9PiB7XG4gICAgICAvKiBTYXZlIHRoZSBzdG9yZSAqL1xuICAgICAgdGhpcy5zYXZlKCk7XG4gICAgfSk7XG4gIH1cblxuICBzZXQoIGRhdGEgKSB7XG4gICAgLyogVXBkYXRlIHRoZSBzdG9yZSAqL1xuICAgIHRoaXMuZGIgPSB7XG4gICAgICAuLi50aGlzLmRiLFxuICAgICAgLi4uZGF0YVxuICAgIH07XG5cbiAgICAvKiBDcmVhdGUgYW4gaW5zZXJ0IGV2ZW50ICovXG4gICAgY29uc3QgaW5zZXJ0RXZlbnQgPSBuZXcgRXZlbnQoe1xuICAgICAgbmFtZTogYFNUT1JFX0lOU0VSVF8ke3RoaXMubmFtZX1gLFxuICAgICAgdHlwZTogRXZlbnRUeXBlLlJFUSxcbiAgICAgIGRhdGEsXG4gICAgfSk7XG5cbiAgICAvKiBQdWJsaXNoIHRoZSBldmVudCAqL1xuICAgIGluc2VydEV2ZW50LnB1Ymxpc2goKTtcbiAgfVxuXG4gIGdldCgga2V5LCB2YWx1ZSApIHtcbiAgICByZXR1cm4gdGhpcy5kYltrZXldO1xuICB9XG5cbiAgZ2V0QWxsKCkge1xuICAgIHJldHVybiB0aGlzLmRiO1xuICB9XG5cbiAgLyogUGVyc2lzdHMgdGhlIHN0b3JlIHRvIGxvY2FsIHN0b3JhZ2UgKi9cbiAgc2F2ZSgpIHtcbiAgICAvKiBDaGVjayBpZiB0aGlzIHN0b3JlIGlzIGEgcGVyc2lzdGVudCBvbmUgKi9cbiAgICBpZiAoIHRoaXMub3B0aW9ucy5wZXJzaXN0ZW50ICkge1xuICAgICAgdGhpcy5sb2cuaW5mbyggJ1NhdmluZyB0byBsb2NhbFN0b3JhZ2UnICk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSggYFNUT1JFXyR7dGhpcy5uYW1lfWAsIEpTT04uc3RyaW5naWZ5KCB0aGlzLmRiICkpO1xuXG4gICAgICAvKiBDcmVhdGUgYW4gZXZlbnQgKi9cbiAgICAgIGNvbnN0IHNhdmVkRXZlbnQgPSBuZXcgRXZlbnQoe1xuICAgICAgICBuYW1lOiBgU1RPUkVfU0FWRURfJHt0aGlzLm5hbWV9YCxcbiAgICAgICAgdHlwZTogRXZlbnRUeXBlLlJFUSxcbiAgICAgIH0pO1xuXG4gICAgICAvKiBQdWJsaXNoIHRoZSBldmVudCAqL1xuICAgICAgc2F2ZWRFdmVudC5wdWJsaXNoKCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0b3JlO1xuIl19
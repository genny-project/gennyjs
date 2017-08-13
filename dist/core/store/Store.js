'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* Import other event classes */


var _ = require('../');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Store = function () {
  function Store(options) {
    var _this = this;

    _classCallCheck(this, Store);

    /* Standardize the name */
    this.name = options.name.toUpperCase();

    /* Create an internal logger */
    this.log = new _.ModuleLogger('STORE_' + this.name);

    /* Define the default options */
    var defaultOptions = {
      initialState: {},
      persistent: false,
      autoSave: false,
      autoSaveTime: 15000
    };

    /* Combine the default options with the options passed in */
    this.options = _extends({}, defaultOptions, options);

    /* Create the data store with the specified name, loading from local storage if needed */
    this.db = localStorage.getItem('STORE_' + this.name) ? JSON.parse(localStorage.getItem('STORE_' + this.name)) : this.options.initialState;

    /* Define internal events */
    _.EventBus.defineEvent(['STORE_CREATE_' + this.name, 'STORE_UPDATE_' + this.name, 'STORE_SAVE_' + this.name, 'STORE_SAVED_' + this.name]);

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
    this.subscription = new _.Subscription('STORE_SAVE_' + this.name, {}, function () {
      /* Save the store */
      _this.save();
    });
  }

  _createClass(Store, [{
    key: 'set',
    value: function set(data) {
      /* Update the store */
      this.db = data;

      /* Create an update event */
      var insertEvent = new _.Event({
        name: 'STORE_UPDATE_' + this.name,
        type: _.EventType.REQ,
        data: data
      });

      /* Publish the event */
      insertEvent.publish();
    }
  }, {
    key: 'get',
    value: function get(key) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb3JlL3N0b3JlL1N0b3JlLmpzIl0sIm5hbWVzIjpbIlN0b3JlIiwib3B0aW9ucyIsIm5hbWUiLCJ0b1VwcGVyQ2FzZSIsImxvZyIsImRlZmF1bHRPcHRpb25zIiwiaW5pdGlhbFN0YXRlIiwicGVyc2lzdGVudCIsImF1dG9TYXZlIiwiYXV0b1NhdmVUaW1lIiwiZGIiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwiZGVmaW5lRXZlbnQiLCJjcmVhdGlvbkV2ZW50IiwidHlwZSIsIlJFUSIsInB1Ymxpc2giLCJzZXRJbnRlcnZhbCIsImluZm8iLCJzYXZlIiwic3Vic2NyaXB0aW9uIiwiZGF0YSIsImluc2VydEV2ZW50Iiwia2V5Iiwic2V0SXRlbSIsInN0cmluZ2lmeSIsInNhdmVkRXZlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O3FqQkFBQTs7O0FBQ0E7Ozs7SUFFTUEsSztBQUNKLGlCQUFhQyxPQUFiLEVBQXVCO0FBQUE7O0FBQUE7O0FBQ3JCO0FBQ0EsU0FBS0MsSUFBTCxHQUFZRCxRQUFRQyxJQUFSLENBQWFDLFdBQWIsRUFBWjs7QUFFQTtBQUNBLFNBQUtDLEdBQUwsR0FBVyw4QkFBMkIsS0FBS0YsSUFBaEMsQ0FBWDs7QUFFQTtBQUNBLFFBQU1HLGlCQUFpQjtBQUNyQkMsb0JBQWMsRUFETztBQUVyQkMsa0JBQVksS0FGUztBQUdyQkMsZ0JBQVUsS0FIVztBQUlyQkMsb0JBQWM7QUFKTyxLQUF2Qjs7QUFPQTtBQUNBLFNBQUtSLE9BQUwsZ0JBQ0tJLGNBREwsRUFFS0osT0FGTDs7QUFLQTtBQUNBLFNBQUtTLEVBQUwsR0FBWUMsYUFBYUMsT0FBYixZQUErQixLQUFLVixJQUFwQyxDQUFGLEdBQWtEVyxLQUFLQyxLQUFMLENBQVlILGFBQWFDLE9BQWIsWUFBK0IsS0FBS1YsSUFBcEMsQ0FBWixDQUFsRCxHQUE4RyxLQUFLRCxPQUFMLENBQWFLLFlBQXJJOztBQUVBO0FBQ0EsZUFBU1MsV0FBVCxDQUFzQixtQkFDSixLQUFLYixJQURELG9CQUVKLEtBQUtBLElBRkQsa0JBR04sS0FBS0EsSUFIQyxtQkFJTCxLQUFLQSxJQUpBLENBQXRCOztBQU9BO0FBQ0EsUUFBTWMsZ0JBQWdCLFlBQVU7QUFDOUJkLDhCQUFzQixLQUFLQSxJQURHO0FBRTlCZSxZQUFNLFlBQVVDO0FBRmMsS0FBVixDQUF0Qjs7QUFLQTtBQUNBRixrQkFBY0csT0FBZDs7QUFFQTtBQUNBLFFBQUssS0FBS2xCLE9BQUwsQ0FBYU8sUUFBYixJQUF5QixLQUFLUCxPQUFMLENBQWFNLFVBQTNDLEVBQXdEO0FBQ3REO0FBQ0FhLGtCQUFZLFlBQU07QUFDaEIsY0FBS2hCLEdBQUwsQ0FBU2lCLElBQVQsQ0FBZSxZQUFmO0FBQ0EsY0FBS0MsSUFBTDtBQUNELE9BSEQsRUFHRyxLQUFLckIsT0FBTCxDQUFhUSxZQUhoQjtBQUlEOztBQUVEO0FBQ0EsU0FBS2MsWUFBTCxHQUFvQixtQ0FBZ0MsS0FBS3JCLElBQXJDLEVBQTZDLEVBQTdDLEVBQWlELFlBQU07QUFDekU7QUFDQSxZQUFLb0IsSUFBTDtBQUNELEtBSG1CLENBQXBCO0FBSUQ7Ozs7d0JBRUlFLEksRUFBTztBQUNWO0FBQ0EsV0FBS2QsRUFBTCxHQUFVYyxJQUFWOztBQUVBO0FBQ0EsVUFBTUMsY0FBYyxZQUFVO0FBQzVCdkIsZ0NBQXNCLEtBQUtBLElBREM7QUFFNUJlLGNBQU0sWUFBVUMsR0FGWTtBQUc1Qk07QUFINEIsT0FBVixDQUFwQjs7QUFNQTtBQUNBQyxrQkFBWU4sT0FBWjtBQUNEOzs7d0JBRUlPLEcsRUFBTTtBQUNULGFBQU8sS0FBS2hCLEVBQUwsQ0FBUWdCLEdBQVIsQ0FBUDtBQUNEOzs7NkJBRVE7QUFDUCxhQUFPLEtBQUtoQixFQUFaO0FBQ0Q7O0FBRUQ7Ozs7MkJBQ087QUFDTDtBQUNBLFVBQUssS0FBS1QsT0FBTCxDQUFhTSxVQUFsQixFQUErQjtBQUM3QixhQUFLSCxHQUFMLENBQVNpQixJQUFULENBQWUsd0JBQWY7QUFDQVYscUJBQWFnQixPQUFiLFlBQStCLEtBQUt6QixJQUFwQyxFQUE0Q1csS0FBS2UsU0FBTCxDQUFnQixLQUFLbEIsRUFBckIsQ0FBNUM7O0FBRUE7QUFDQSxZQUFNbUIsYUFBYSxZQUFVO0FBQzNCM0IsaUNBQXFCLEtBQUtBLElBREM7QUFFM0JlLGdCQUFNLFlBQVVDO0FBRlcsU0FBVixDQUFuQjs7QUFLQTtBQUNBVyxtQkFBV1YsT0FBWDtBQUNEO0FBQ0Y7Ozs7OztrQkFHWW5CLEsiLCJmaWxlIjoiU3RvcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBJbXBvcnQgb3RoZXIgZXZlbnQgY2xhc3NlcyAqL1xuaW1wb3J0IHsgRXZlbnRCdXMsIEV2ZW50LCBFdmVudFR5cGUsIE1vZHVsZUxvZ2dlciwgU3Vic2NyaXB0aW9uIH0gZnJvbSAnLi4vJztcblxuY2xhc3MgU3RvcmUge1xuICBjb25zdHJ1Y3Rvciggb3B0aW9ucyApIHtcbiAgICAvKiBTdGFuZGFyZGl6ZSB0aGUgbmFtZSAqL1xuICAgIHRoaXMubmFtZSA9IG9wdGlvbnMubmFtZS50b1VwcGVyQ2FzZSgpO1xuXG4gICAgLyogQ3JlYXRlIGFuIGludGVybmFsIGxvZ2dlciAqL1xuICAgIHRoaXMubG9nID0gbmV3IE1vZHVsZUxvZ2dlciggYFNUT1JFXyR7dGhpcy5uYW1lfWAgKTtcblxuICAgIC8qIERlZmluZSB0aGUgZGVmYXVsdCBvcHRpb25zICovXG4gICAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgICBpbml0aWFsU3RhdGU6IHt9LFxuICAgICAgcGVyc2lzdGVudDogZmFsc2UsXG4gICAgICBhdXRvU2F2ZTogZmFsc2UsXG4gICAgICBhdXRvU2F2ZVRpbWU6IDE1MDAwLFxuICAgIH07XG5cbiAgICAvKiBDb21iaW5lIHRoZSBkZWZhdWx0IG9wdGlvbnMgd2l0aCB0aGUgb3B0aW9ucyBwYXNzZWQgaW4gKi9cbiAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICAuLi5kZWZhdWx0T3B0aW9ucyxcbiAgICAgIC4uLm9wdGlvbnMsXG4gICAgfTtcblxuICAgIC8qIENyZWF0ZSB0aGUgZGF0YSBzdG9yZSB3aXRoIHRoZSBzcGVjaWZpZWQgbmFtZSwgbG9hZGluZyBmcm9tIGxvY2FsIHN0b3JhZ2UgaWYgbmVlZGVkICovXG4gICAgdGhpcy5kYiA9ICggbG9jYWxTdG9yYWdlLmdldEl0ZW0oIGBTVE9SRV8ke3RoaXMubmFtZX1gICkpID8gSlNPTi5wYXJzZSggbG9jYWxTdG9yYWdlLmdldEl0ZW0oIGBTVE9SRV8ke3RoaXMubmFtZX1gICkpIDogdGhpcy5vcHRpb25zLmluaXRpYWxTdGF0ZTtcblxuICAgIC8qIERlZmluZSBpbnRlcm5hbCBldmVudHMgKi9cbiAgICBFdmVudEJ1cy5kZWZpbmVFdmVudCggW1xuICAgICAgYFNUT1JFX0NSRUFURV8ke3RoaXMubmFtZX1gLFxuICAgICAgYFNUT1JFX1VQREFURV8ke3RoaXMubmFtZX1gLFxuICAgICAgYFNUT1JFX1NBVkVfJHt0aGlzLm5hbWV9YCxcbiAgICAgIGBTVE9SRV9TQVZFRF8ke3RoaXMubmFtZX1gLFxuICAgIF0gKTtcblxuICAgIC8qIENyZWF0ZSBhbiBldmVudCAqL1xuICAgIGNvbnN0IGNyZWF0aW9uRXZlbnQgPSBuZXcgRXZlbnQoe1xuICAgICAgbmFtZTogYFNUT1JFX0NSRUFURV8ke3RoaXMubmFtZX1gLFxuICAgICAgdHlwZTogRXZlbnRUeXBlLlJFUSxcbiAgICB9KTtcblxuICAgIC8qIFB1Ymxpc2ggdGhlIGV2ZW50ICovXG4gICAgY3JlYXRpb25FdmVudC5wdWJsaXNoKCk7XG5cbiAgICAvKiBDaGVjayB3aGV0aGVyIGF1dG9zYXZlIGlzIGVuYWJsZWQgKi9cbiAgICBpZiAoIHRoaXMub3B0aW9ucy5hdXRvU2F2ZSAmJiB0aGlzLm9wdGlvbnMucGVyc2lzdGVudCApIHtcbiAgICAgIC8qIENyZWF0ZSBhbiBhdXRvc2F2ZSB0aW1lciAqL1xuICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICB0aGlzLmxvZy5pbmZvKCAnQXV0b3NhdmluZycgKTtcbiAgICAgICAgdGhpcy5zYXZlKCk7XG4gICAgICB9LCB0aGlzLm9wdGlvbnMuYXV0b1NhdmVUaW1lICk7XG4gICAgfVxuXG4gICAgLyogQ3JlYXRlIGEgbmV3IHN1YnNjcmlwdGlvbiB0byBhbnkgc2F2ZSBldmVudHMgZm9yIHRoaXMgc3RvcmUgKi9cbiAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IG5ldyBTdWJzY3JpcHRpb24oIGBTVE9SRV9TQVZFXyR7dGhpcy5uYW1lfWAsIHt9LCAoKSA9PiB7XG4gICAgICAvKiBTYXZlIHRoZSBzdG9yZSAqL1xuICAgICAgdGhpcy5zYXZlKCk7XG4gICAgfSk7XG4gIH1cblxuICBzZXQoIGRhdGEgKSB7XG4gICAgLyogVXBkYXRlIHRoZSBzdG9yZSAqL1xuICAgIHRoaXMuZGIgPSBkYXRhO1xuXG4gICAgLyogQ3JlYXRlIGFuIHVwZGF0ZSBldmVudCAqL1xuICAgIGNvbnN0IGluc2VydEV2ZW50ID0gbmV3IEV2ZW50KHtcbiAgICAgIG5hbWU6IGBTVE9SRV9VUERBVEVfJHt0aGlzLm5hbWV9YCxcbiAgICAgIHR5cGU6IEV2ZW50VHlwZS5SRVEsXG4gICAgICBkYXRhLFxuICAgIH0pO1xuXG4gICAgLyogUHVibGlzaCB0aGUgZXZlbnQgKi9cbiAgICBpbnNlcnRFdmVudC5wdWJsaXNoKCk7XG4gIH1cblxuICBnZXQoIGtleSApIHtcbiAgICByZXR1cm4gdGhpcy5kYltrZXldO1xuICB9XG5cbiAgZ2V0QWxsKCkge1xuICAgIHJldHVybiB0aGlzLmRiO1xuICB9XG5cbiAgLyogUGVyc2lzdHMgdGhlIHN0b3JlIHRvIGxvY2FsIHN0b3JhZ2UgKi9cbiAgc2F2ZSgpIHtcbiAgICAvKiBDaGVjayBpZiB0aGlzIHN0b3JlIGlzIGEgcGVyc2lzdGVudCBvbmUgKi9cbiAgICBpZiAoIHRoaXMub3B0aW9ucy5wZXJzaXN0ZW50ICkge1xuICAgICAgdGhpcy5sb2cuaW5mbyggJ1NhdmluZyB0byBsb2NhbFN0b3JhZ2UnICk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSggYFNUT1JFXyR7dGhpcy5uYW1lfWAsIEpTT04uc3RyaW5naWZ5KCB0aGlzLmRiICkpO1xuXG4gICAgICAvKiBDcmVhdGUgYW4gZXZlbnQgKi9cbiAgICAgIGNvbnN0IHNhdmVkRXZlbnQgPSBuZXcgRXZlbnQoe1xuICAgICAgICBuYW1lOiBgU1RPUkVfU0FWRURfJHt0aGlzLm5hbWV9YCxcbiAgICAgICAgdHlwZTogRXZlbnRUeXBlLlJFUSxcbiAgICAgIH0pO1xuXG4gICAgICAvKiBQdWJsaXNoIHRoZSBldmVudCAqL1xuICAgICAgc2F2ZWRFdmVudC5wdWJsaXNoKCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0b3JlO1xuIl19
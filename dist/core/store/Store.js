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
    };

    /* Combine the default options with the options passed in */
    this.options = _extends({}, defaultOptions, options);

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
    this.subscription = new _.Subscription('STORE_SAVE_' + this.name, {}, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb3JlL3N0b3JlL1N0b3JlLmpzIl0sIm5hbWVzIjpbIlN0b3JlIiwibmFtZSIsIm9wdGlvbnMiLCJ0b1VwcGVyQ2FzZSIsImxvZyIsImRlZmF1bHRPcHRpb25zIiwiaW5pdGlhbFN0YXRlIiwicGVyc2lzdGVudCIsImF1dG9TYXZlIiwiYXV0b1NhdmVUaW1lIiwiZGIiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwiZGVmaW5lRXZlbnQiLCJjcmVhdGlvbkV2ZW50IiwidHlwZSIsIlJFUSIsInB1Ymxpc2giLCJzZXRJbnRlcnZhbCIsImluZm8iLCJzYXZlIiwic3Vic2NyaXB0aW9uIiwiZGF0YSIsImluc2VydEV2ZW50Iiwia2V5Iiwic2V0SXRlbSIsInN0cmluZ2lmeSIsInNhdmVkRXZlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O3FqQkFBQTs7O0FBQ0E7Ozs7SUFFTUEsSztBQUNKLGlCQUFhQyxJQUFiLEVBQW1CQyxPQUFuQixFQUE2QjtBQUFBOztBQUFBOztBQUMzQjtBQUNBLFNBQUtELElBQUwsR0FBWUEsS0FBS0UsV0FBTCxFQUFaOztBQUVBO0FBQ0EsU0FBS0MsR0FBTCxHQUFXLDhCQUEyQixLQUFLSCxJQUFoQyxDQUFYOztBQUVBO0FBQ0EsUUFBTUksaUJBQWlCO0FBQ3JCQyxvQkFBYyxFQURPO0FBRXJCQyxrQkFBWSxLQUZTO0FBR3JCQyxnQkFBVSxLQUhXO0FBSXJCQyxvQkFBYztBQUpPLEtBQXZCOztBQU9BO0FBQ0EsU0FBS1AsT0FBTCxnQkFDS0csY0FETCxFQUVLSCxPQUZMOztBQUtBO0FBQ0EsU0FBS1EsRUFBTCxHQUFZQyxhQUFhQyxPQUFiLFlBQStCLEtBQUtYLElBQXBDLENBQUYsR0FBa0RZLEtBQUtDLEtBQUwsQ0FBWUgsYUFBYUMsT0FBYixZQUErQixLQUFLWCxJQUFwQyxDQUFaLENBQWxELEdBQThHLEtBQUtDLE9BQUwsQ0FBYUksWUFBckk7O0FBRUE7QUFDQSxlQUFTUyxXQUFULENBQXNCLG1CQUNKLEtBQUtkLElBREQsb0JBRUosS0FBS0EsSUFGRCxrQkFHTixLQUFLQSxJQUhDLG1CQUlMLEtBQUtBLElBSkEsQ0FBdEI7O0FBT0E7QUFDQSxRQUFNZSxnQkFBZ0IsWUFBVTtBQUM5QmYsOEJBQXNCLEtBQUtBLElBREc7QUFFOUJnQixZQUFNLFlBQVVDO0FBRmMsS0FBVixDQUF0Qjs7QUFLQTtBQUNBRixrQkFBY0csT0FBZDs7QUFFQTtBQUNBLFFBQUssS0FBS2pCLE9BQUwsQ0FBYU0sUUFBYixJQUF5QixLQUFLTixPQUFMLENBQWFLLFVBQTNDLEVBQXdEO0FBQ3REO0FBQ0FhLGtCQUFZLFlBQU07QUFDaEIsY0FBS2hCLEdBQUwsQ0FBU2lCLElBQVQsQ0FBZSxZQUFmO0FBQ0EsY0FBS0MsSUFBTDtBQUNELE9BSEQsRUFHRyxLQUFLcEIsT0FBTCxDQUFhTyxZQUhoQjtBQUlEOztBQUVEO0FBQ0EsU0FBS2MsWUFBTCxHQUFvQixtQ0FBZ0MsS0FBS3RCLElBQXJDLEVBQTZDLEVBQTdDLEVBQWlELFlBQU07QUFDekU7QUFDQSxZQUFLcUIsSUFBTDtBQUNELEtBSG1CLENBQXBCO0FBSUQ7Ozs7d0JBRUlFLEksRUFBTztBQUNWO0FBQ0EsV0FBS2QsRUFBTCxnQkFDSyxLQUFLQSxFQURWLEVBRUtjLElBRkw7O0FBS0E7QUFDQSxVQUFNQyxjQUFjLFlBQVU7QUFDNUJ4QixnQ0FBc0IsS0FBS0EsSUFEQztBQUU1QmdCLGNBQU0sWUFBVUMsR0FGWTtBQUc1Qk07QUFINEIsT0FBVixDQUFwQjs7QUFNQTtBQUNBQyxrQkFBWU4sT0FBWjtBQUNEOzs7d0JBRUlPLEcsRUFBTTtBQUNULGFBQU8sS0FBS2hCLEVBQUwsQ0FBUWdCLEdBQVIsQ0FBUDtBQUNEOzs7NkJBRVE7QUFDUCxhQUFPLEtBQUtoQixFQUFaO0FBQ0Q7O0FBRUQ7Ozs7MkJBQ087QUFDTDtBQUNBLFVBQUssS0FBS1IsT0FBTCxDQUFhSyxVQUFsQixFQUErQjtBQUM3QixhQUFLSCxHQUFMLENBQVNpQixJQUFULENBQWUsd0JBQWY7QUFDQVYscUJBQWFnQixPQUFiLFlBQStCLEtBQUsxQixJQUFwQyxFQUE0Q1ksS0FBS2UsU0FBTCxDQUFnQixLQUFLbEIsRUFBckIsQ0FBNUM7O0FBRUE7QUFDQSxZQUFNbUIsYUFBYSxZQUFVO0FBQzNCNUIsaUNBQXFCLEtBQUtBLElBREM7QUFFM0JnQixnQkFBTSxZQUFVQztBQUZXLFNBQVYsQ0FBbkI7O0FBS0E7QUFDQVcsbUJBQVdWLE9BQVg7QUFDRDtBQUNGOzs7Ozs7a0JBR1luQixLIiwiZmlsZSI6IlN0b3JlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogSW1wb3J0IG90aGVyIGV2ZW50IGNsYXNzZXMgKi9cbmltcG9ydCB7IEV2ZW50QnVzLCBFdmVudCwgRXZlbnRUeXBlLCBNb2R1bGVMb2dnZXIsIFN1YnNjcmlwdGlvbiB9IGZyb20gJy4uLyc7XG5cbmNsYXNzIFN0b3JlIHtcbiAgY29uc3RydWN0b3IoIG5hbWUsIG9wdGlvbnMgKSB7XG4gICAgLyogU3RhbmRhcmRpemUgdGhlIG5hbWUgKi9cbiAgICB0aGlzLm5hbWUgPSBuYW1lLnRvVXBwZXJDYXNlKCk7XG5cbiAgICAvKiBDcmVhdGUgYW4gaW50ZXJuYWwgbG9nZ2VyICovXG4gICAgdGhpcy5sb2cgPSBuZXcgTW9kdWxlTG9nZ2VyKCBgU1RPUkVfJHt0aGlzLm5hbWV9YCApO1xuXG4gICAgLyogRGVmaW5lIHRoZSBkZWZhdWx0IG9wdGlvbnMgKi9cbiAgICBjb25zdCBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICAgIGluaXRpYWxTdGF0ZToge30sXG4gICAgICBwZXJzaXN0ZW50OiBmYWxzZSxcbiAgICAgIGF1dG9TYXZlOiBmYWxzZSxcbiAgICAgIGF1dG9TYXZlVGltZTogMTUwMDAsXG4gICAgfTtcblxuICAgIC8qIENvbWJpbmUgdGhlIGRlZmF1bHQgb3B0aW9ucyB3aXRoIHRoZSBvcHRpb25zIHBhc3NlZCBpbiAqL1xuICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgIC4uLmRlZmF1bHRPcHRpb25zLFxuICAgICAgLi4ub3B0aW9ucyxcbiAgICB9O1xuXG4gICAgLyogQ3JlYXRlIHRoZSBkYXRhIHN0b3JlIHdpdGggdGhlIHNwZWNpZmllZCBuYW1lLCBsb2FkaW5nIGZyb20gbG9jYWwgc3RvcmFnZSBpZiBuZWVkZWQgKi9cbiAgICB0aGlzLmRiID0gKCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSggYFNUT1JFXyR7dGhpcy5uYW1lfWAgKSkgPyBKU09OLnBhcnNlKCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSggYFNUT1JFXyR7dGhpcy5uYW1lfWAgKSkgOiB0aGlzLm9wdGlvbnMuaW5pdGlhbFN0YXRlO1xuXG4gICAgLyogRGVmaW5lIGludGVybmFsIGV2ZW50cyAqL1xuICAgIEV2ZW50QnVzLmRlZmluZUV2ZW50KCBbXG4gICAgICBgU1RPUkVfQ1JFQVRFXyR7dGhpcy5uYW1lfWAsXG4gICAgICBgU1RPUkVfSU5TRVJUXyR7dGhpcy5uYW1lfWAsXG4gICAgICBgU1RPUkVfU0FWRV8ke3RoaXMubmFtZX1gLFxuICAgICAgYFNUT1JFX1NBVkVEXyR7dGhpcy5uYW1lfWAsXG4gICAgXSApO1xuXG4gICAgLyogQ3JlYXRlIGFuIGV2ZW50ICovXG4gICAgY29uc3QgY3JlYXRpb25FdmVudCA9IG5ldyBFdmVudCh7XG4gICAgICBuYW1lOiBgU1RPUkVfQ1JFQVRFXyR7dGhpcy5uYW1lfWAsXG4gICAgICB0eXBlOiBFdmVudFR5cGUuUkVRLFxuICAgIH0pO1xuXG4gICAgLyogUHVibGlzaCB0aGUgZXZlbnQgKi9cbiAgICBjcmVhdGlvbkV2ZW50LnB1Ymxpc2goKTtcblxuICAgIC8qIENoZWNrIHdoZXRoZXIgYXV0b3NhdmUgaXMgZW5hYmxlZCAqL1xuICAgIGlmICggdGhpcy5vcHRpb25zLmF1dG9TYXZlICYmIHRoaXMub3B0aW9ucy5wZXJzaXN0ZW50ICkge1xuICAgICAgLyogQ3JlYXRlIGFuIGF1dG9zYXZlIHRpbWVyICovXG4gICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIHRoaXMubG9nLmluZm8oICdBdXRvc2F2aW5nJyApO1xuICAgICAgICB0aGlzLnNhdmUoKTtcbiAgICAgIH0sIHRoaXMub3B0aW9ucy5hdXRvU2F2ZVRpbWUgKTtcbiAgICB9XG5cbiAgICAvKiBDcmVhdGUgYSBuZXcgc3Vic2NyaXB0aW9uIHRvIGFueSBzYXZlIGV2ZW50cyBmb3IgdGhpcyBzdG9yZSAqL1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbiggYFNUT1JFX1NBVkVfJHt0aGlzLm5hbWV9YCwge30sICgpID0+IHtcbiAgICAgIC8qIFNhdmUgdGhlIHN0b3JlICovXG4gICAgICB0aGlzLnNhdmUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHNldCggZGF0YSApIHtcbiAgICAvKiBVcGRhdGUgdGhlIHN0b3JlICovXG4gICAgdGhpcy5kYiA9IHtcbiAgICAgIC4uLnRoaXMuZGIsXG4gICAgICAuLi5kYXRhLFxuICAgIH07XG5cbiAgICAvKiBDcmVhdGUgYW4gaW5zZXJ0IGV2ZW50ICovXG4gICAgY29uc3QgaW5zZXJ0RXZlbnQgPSBuZXcgRXZlbnQoe1xuICAgICAgbmFtZTogYFNUT1JFX0lOU0VSVF8ke3RoaXMubmFtZX1gLFxuICAgICAgdHlwZTogRXZlbnRUeXBlLlJFUSxcbiAgICAgIGRhdGEsXG4gICAgfSk7XG5cbiAgICAvKiBQdWJsaXNoIHRoZSBldmVudCAqL1xuICAgIGluc2VydEV2ZW50LnB1Ymxpc2goKTtcbiAgfVxuXG4gIGdldCgga2V5ICkge1xuICAgIHJldHVybiB0aGlzLmRiW2tleV07XG4gIH1cblxuICBnZXRBbGwoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGI7XG4gIH1cblxuICAvKiBQZXJzaXN0cyB0aGUgc3RvcmUgdG8gbG9jYWwgc3RvcmFnZSAqL1xuICBzYXZlKCkge1xuICAgIC8qIENoZWNrIGlmIHRoaXMgc3RvcmUgaXMgYSBwZXJzaXN0ZW50IG9uZSAqL1xuICAgIGlmICggdGhpcy5vcHRpb25zLnBlcnNpc3RlbnQgKSB7XG4gICAgICB0aGlzLmxvZy5pbmZvKCAnU2F2aW5nIHRvIGxvY2FsU3RvcmFnZScgKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCBgU1RPUkVfJHt0aGlzLm5hbWV9YCwgSlNPTi5zdHJpbmdpZnkoIHRoaXMuZGIgKSk7XG5cbiAgICAgIC8qIENyZWF0ZSBhbiBldmVudCAqL1xuICAgICAgY29uc3Qgc2F2ZWRFdmVudCA9IG5ldyBFdmVudCh7XG4gICAgICAgIG5hbWU6IGBTVE9SRV9TQVZFRF8ke3RoaXMubmFtZX1gLFxuICAgICAgICB0eXBlOiBFdmVudFR5cGUuUkVRLFxuICAgICAgfSk7XG5cbiAgICAgIC8qIFB1Ymxpc2ggdGhlIGV2ZW50ICovXG4gICAgICBzYXZlZEV2ZW50LnB1Ymxpc2goKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RvcmU7XG4iXX0=
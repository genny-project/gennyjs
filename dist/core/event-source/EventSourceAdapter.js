'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ = require('../');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EventSourceAdapter = function () {
  function EventSourceAdapter(config) {
    _classCallCheck(this, EventSourceAdapter);

    this.config = config;

    /* Validate the config */
    if (!this.config) {
      throw new _.EventBusException('Config must be provided to a EventSourceAdapter');
    }
  }

  _createClass(EventSourceAdapter, [{
    key: 'onEvent',
    value: function onEvent(event) {}
  }]);

  return EventSourceAdapter;
}();

exports.default = EventSourceAdapter;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb3JlL2V2ZW50LXNvdXJjZS9FdmVudFNvdXJjZUFkYXB0ZXIuanMiXSwibmFtZXMiOlsiRXZlbnRTb3VyY2VBZGFwdGVyIiwiY29uZmlnIiwiZXZlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7SUFFTUEsa0I7QUFDSiw4QkFBYUMsTUFBYixFQUFzQjtBQUFBOztBQUNwQixTQUFLQSxNQUFMLEdBQWNBLE1BQWQ7O0FBRUE7QUFDQSxRQUFLLENBQUMsS0FBS0EsTUFBWCxFQUFvQjtBQUNsQixZQUFNLHdCQUF1QixpREFBdkIsQ0FBTjtBQUNEO0FBQ0Y7Ozs7NEJBRVFDLEssRUFBUSxDQUFFOzs7Ozs7a0JBR05GLGtCIiwiZmlsZSI6IkV2ZW50U291cmNlQWRhcHRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50QnVzRXhjZXB0aW9uIH0gZnJvbSAnLi4vJztcblxuY2xhc3MgRXZlbnRTb3VyY2VBZGFwdGVyIHtcbiAgY29uc3RydWN0b3IoIGNvbmZpZyApIHtcbiAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcblxuICAgIC8qIFZhbGlkYXRlIHRoZSBjb25maWcgKi9cbiAgICBpZiAoICF0aGlzLmNvbmZpZyApIHtcbiAgICAgIHRocm93IG5ldyBFdmVudEJ1c0V4Y2VwdGlvbiggJ0NvbmZpZyBtdXN0IGJlIHByb3ZpZGVkIHRvIGEgRXZlbnRTb3VyY2VBZGFwdGVyJyApO1xuICAgIH1cbiAgfVxuXG4gIG9uRXZlbnQoIGV2ZW50ICkge31cbn1cblxuZXhwb3J0IGRlZmF1bHQgRXZlbnRTb3VyY2VBZGFwdGVyO1xuIl19
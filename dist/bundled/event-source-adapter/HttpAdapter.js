'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _core = require('../../core');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HttpAdapter = function (_EventSourceAdapter) {
  _inherits(HttpAdapter, _EventSourceAdapter);

  function HttpAdapter() {
    _classCallCheck(this, HttpAdapter);

    return _possibleConstructorReturn(this, (HttpAdapter.__proto__ || Object.getPrototypeOf(HttpAdapter)).apply(this, arguments));
  }

  _createClass(HttpAdapter, [{
    key: 'onEvent',
    value: function onEvent(name, event) {
      switch (name) {
        case 'HTTP_REQUEST':
          return this.onRequest(event);
        default:
          return null;
      }
    }
  }, {
    key: 'onRequest',
    value: function onRequest(event) {
      var _this2 = this;

      var _event$getData = event.getData(),
          path = _event$getData.path,
          method = _event$getData.method;

      (0, _axios2.default)({
        method: method,
        baseURL: this.config.config.baseURL,
        url: path
      }).then(function (response) {
        if (event.getType() === _core.EventType.REQRES) {
          event.respond(response);
        }

        if (event.getType() === _core.EventType.REQ) {
          new _core.Event({
            name: _this2.config.config.responseEvent || 'HTTP_RESPONSE',
            data: response
          }).publish();
        }
      }).catch(function (response) {
        if (event.getType() === _core.EventType.REQRES) {
          event.respond(response);
        }

        if (event.getType() === _core.EventType.REQ) {
          new _core.Event({
            name: _this2.config.config.errorEvent || 'HTTP_ERROR',
            data: response
          }).publish();
        }
      });
    }
  }]);

  return HttpAdapter;
}(_core.EventSourceAdapter);

exports.default = HttpAdapter;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9idW5kbGVkL2V2ZW50LXNvdXJjZS1hZGFwdGVyL0h0dHBBZGFwdGVyLmpzIl0sIm5hbWVzIjpbIkh0dHBBZGFwdGVyIiwibmFtZSIsImV2ZW50Iiwib25SZXF1ZXN0IiwiZ2V0RGF0YSIsInBhdGgiLCJtZXRob2QiLCJiYXNlVVJMIiwiY29uZmlnIiwidXJsIiwidGhlbiIsInJlc3BvbnNlIiwiZ2V0VHlwZSIsIlJFUVJFUyIsInJlc3BvbmQiLCJSRVEiLCJyZXNwb25zZUV2ZW50IiwiZGF0YSIsInB1Ymxpc2giLCJjYXRjaCIsImVycm9yRXZlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7OztJQUVNQSxXOzs7Ozs7Ozs7Ozs0QkFDS0MsSSxFQUFNQyxLLEVBQVE7QUFDckIsY0FBU0QsSUFBVDtBQUNFLGFBQUssY0FBTDtBQUNFLGlCQUFPLEtBQUtFLFNBQUwsQ0FBZ0JELEtBQWhCLENBQVA7QUFDRjtBQUNFLGlCQUFPLElBQVA7QUFKSjtBQU1EOzs7OEJBRVVBLEssRUFBUTtBQUFBOztBQUFBLDJCQUNRQSxNQUFNRSxPQUFOLEVBRFI7QUFBQSxVQUNUQyxJQURTLGtCQUNUQSxJQURTO0FBQUEsVUFDSEMsTUFERyxrQkFDSEEsTUFERzs7QUFFakIsMkJBQU07QUFDSkEsc0JBREk7QUFFSkMsaUJBQVMsS0FBS0MsTUFBTCxDQUFZQSxNQUFaLENBQW1CRCxPQUZ4QjtBQUdKRSxhQUFLSjtBQUhELE9BQU4sRUFJR0ssSUFKSCxDQUlRLFVBQUVDLFFBQUYsRUFBZ0I7QUFDdEIsWUFBS1QsTUFBTVUsT0FBTixPQUFvQixnQkFBVUMsTUFBbkMsRUFBNEM7QUFDMUNYLGdCQUFNWSxPQUFOLENBQWVILFFBQWY7QUFDRDs7QUFFRCxZQUFLVCxNQUFNVSxPQUFOLE9BQW9CLGdCQUFVRyxHQUFuQyxFQUF5QztBQUN2QywwQkFBVTtBQUNSZCxrQkFBTSxPQUFLTyxNQUFMLENBQVlBLE1BQVosQ0FBbUJRLGFBQW5CLElBQW9DLGVBRGxDO0FBRVJDLGtCQUFNTjtBQUZFLFdBQVYsRUFHR08sT0FISDtBQUlEO0FBQ0YsT0FmRCxFQWVHQyxLQWZILENBZVMsVUFBRVIsUUFBRixFQUFnQjtBQUN2QixZQUFLVCxNQUFNVSxPQUFOLE9BQW9CLGdCQUFVQyxNQUFuQyxFQUE0QztBQUMxQ1gsZ0JBQU1ZLE9BQU4sQ0FBZUgsUUFBZjtBQUNEOztBQUVELFlBQUtULE1BQU1VLE9BQU4sT0FBb0IsZ0JBQVVHLEdBQW5DLEVBQXlDO0FBQ3ZDLDBCQUFVO0FBQ1JkLGtCQUFNLE9BQUtPLE1BQUwsQ0FBWUEsTUFBWixDQUFtQlksVUFBbkIsSUFBaUMsWUFEL0I7QUFFUkgsa0JBQU1OO0FBRkUsV0FBVixFQUdHTyxPQUhIO0FBSUQ7QUFDRixPQTFCRDtBQTJCRDs7Ozs7O2tCQUdZbEIsVyIsImZpbGUiOiJIdHRwQWRhcHRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyBFdmVudFNvdXJjZUFkYXB0ZXIsIEV2ZW50VHlwZSwgRXZlbnQgfSBmcm9tICcuLi8uLi9jb3JlJztcblxuY2xhc3MgSHR0cEFkYXB0ZXIgZXh0ZW5kcyBFdmVudFNvdXJjZUFkYXB0ZXIge1xuICBvbkV2ZW50KCBuYW1lLCBldmVudCApIHtcbiAgICBzd2l0Y2ggKCBuYW1lICkge1xuICAgICAgY2FzZSAnSFRUUF9SRVFVRVNUJzpcbiAgICAgICAgcmV0dXJuIHRoaXMub25SZXF1ZXN0KCBldmVudCApO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgb25SZXF1ZXN0KCBldmVudCApIHtcbiAgICBjb25zdCB7IHBhdGgsIG1ldGhvZCB9ID0gZXZlbnQuZ2V0RGF0YSgpO1xuICAgIGF4aW9zKHtcbiAgICAgIG1ldGhvZCxcbiAgICAgIGJhc2VVUkw6IHRoaXMuY29uZmlnLmNvbmZpZy5iYXNlVVJMLFxuICAgICAgdXJsOiBwYXRoLFxuICAgIH0pLnRoZW4oKCByZXNwb25zZSApID0+IHtcbiAgICAgIGlmICggZXZlbnQuZ2V0VHlwZSgpID09PSBFdmVudFR5cGUuUkVRUkVTICkge1xuICAgICAgICBldmVudC5yZXNwb25kKCByZXNwb25zZSApO1xuICAgICAgfVxuXG4gICAgICBpZiAoIGV2ZW50LmdldFR5cGUoKSA9PT0gRXZlbnRUeXBlLlJFUSApIHtcbiAgICAgICAgbmV3IEV2ZW50KHtcbiAgICAgICAgICBuYW1lOiB0aGlzLmNvbmZpZy5jb25maWcucmVzcG9uc2VFdmVudCB8fCAnSFRUUF9SRVNQT05TRScsXG4gICAgICAgICAgZGF0YTogcmVzcG9uc2UsXG4gICAgICAgIH0pLnB1Ymxpc2goKTtcbiAgICAgIH1cbiAgICB9KS5jYXRjaCgoIHJlc3BvbnNlICkgPT4ge1xuICAgICAgaWYgKCBldmVudC5nZXRUeXBlKCkgPT09IEV2ZW50VHlwZS5SRVFSRVMgKSB7XG4gICAgICAgIGV2ZW50LnJlc3BvbmQoIHJlc3BvbnNlICk7XG4gICAgICB9XG5cbiAgICAgIGlmICggZXZlbnQuZ2V0VHlwZSgpID09PSBFdmVudFR5cGUuUkVRICkge1xuICAgICAgICBuZXcgRXZlbnQoe1xuICAgICAgICAgIG5hbWU6IHRoaXMuY29uZmlnLmNvbmZpZy5lcnJvckV2ZW50IHx8ICdIVFRQX0VSUk9SJyxcbiAgICAgICAgICBkYXRhOiByZXNwb25zZSxcbiAgICAgICAgfSkucHVibGlzaCgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEh0dHBBZGFwdGVyO1xuIl19
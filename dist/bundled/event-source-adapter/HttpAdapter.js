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
      var _event$getData = event.getData(),
          path = _event$getData.path,
          method = _event$getData.method;

      (0, _axios2.default)({
        method: method,
        baseURL: this.config.config.baseURL,
        url: path
      }).then(function (response) {
        event.respond(response);
      }).catch(function (response) {
        event.respond(response);
      });
    }
  }]);

  return HttpAdapter;
}(_core.EventSourceAdapter);

exports.default = HttpAdapter;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9idW5kbGVkL2V2ZW50LXNvdXJjZS1hZGFwdGVyL0h0dHBBZGFwdGVyLmpzIl0sIm5hbWVzIjpbIkh0dHBBZGFwdGVyIiwibmFtZSIsImV2ZW50Iiwib25SZXF1ZXN0IiwiZ2V0RGF0YSIsInBhdGgiLCJtZXRob2QiLCJiYXNlVVJMIiwiY29uZmlnIiwidXJsIiwidGhlbiIsInJlc3BvbnNlIiwicmVzcG9uZCIsImNhdGNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7SUFFTUEsVzs7Ozs7Ozs7Ozs7NEJBQ0tDLEksRUFBTUMsSyxFQUFRO0FBQ3JCLGNBQVNELElBQVQ7QUFDRSxhQUFLLGNBQUw7QUFDRSxpQkFBTyxLQUFLRSxTQUFMLENBQWdCRCxLQUFoQixDQUFQO0FBQ0Y7QUFDRSxpQkFBTyxJQUFQO0FBSko7QUFNRDs7OzhCQUVVQSxLLEVBQVE7QUFBQSwyQkFDUUEsTUFBTUUsT0FBTixFQURSO0FBQUEsVUFDVEMsSUFEUyxrQkFDVEEsSUFEUztBQUFBLFVBQ0hDLE1BREcsa0JBQ0hBLE1BREc7O0FBRWpCLDJCQUFNO0FBQ0pBLHNCQURJO0FBRUpDLGlCQUFTLEtBQUtDLE1BQUwsQ0FBWUEsTUFBWixDQUFtQkQsT0FGeEI7QUFHSkUsYUFBS0o7QUFIRCxPQUFOLEVBSUdLLElBSkgsQ0FJUSxVQUFFQyxRQUFGLEVBQWdCO0FBQ3RCVCxjQUFNVSxPQUFOLENBQWVELFFBQWY7QUFDRCxPQU5ELEVBTUdFLEtBTkgsQ0FNUyxVQUFFRixRQUFGLEVBQWdCO0FBQ3ZCVCxjQUFNVSxPQUFOLENBQWVELFFBQWY7QUFDRCxPQVJEO0FBU0Q7Ozs7OztrQkFHWVgsVyIsImZpbGUiOiJIdHRwQWRhcHRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyBFdmVudFNvdXJjZUFkYXB0ZXIgfSBmcm9tICcuLi8uLi9jb3JlJztcblxuY2xhc3MgSHR0cEFkYXB0ZXIgZXh0ZW5kcyBFdmVudFNvdXJjZUFkYXB0ZXIge1xuICBvbkV2ZW50KCBuYW1lLCBldmVudCApIHtcbiAgICBzd2l0Y2ggKCBuYW1lICkge1xuICAgICAgY2FzZSAnSFRUUF9SRVFVRVNUJzpcbiAgICAgICAgcmV0dXJuIHRoaXMub25SZXF1ZXN0KCBldmVudCApO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgb25SZXF1ZXN0KCBldmVudCApIHtcbiAgICBjb25zdCB7IHBhdGgsIG1ldGhvZCB9ID0gZXZlbnQuZ2V0RGF0YSgpO1xuICAgIGF4aW9zKHtcbiAgICAgIG1ldGhvZCxcbiAgICAgIGJhc2VVUkw6IHRoaXMuY29uZmlnLmNvbmZpZy5iYXNlVVJMLFxuICAgICAgdXJsOiBwYXRoLFxuICAgIH0pLnRoZW4oKCByZXNwb25zZSApID0+IHtcbiAgICAgIGV2ZW50LnJlc3BvbmQoIHJlc3BvbnNlICk7XG4gICAgfSkuY2F0Y2goKCByZXNwb25zZSApID0+IHtcbiAgICAgIGV2ZW50LnJlc3BvbmQoIHJlc3BvbnNlICk7XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSHR0cEFkYXB0ZXI7XG4iXX0=
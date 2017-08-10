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

  function HttpAdapter(config) {
    _classCallCheck(this, HttpAdapter);

    return _possibleConstructorReturn(this, (HttpAdapter.__proto__ || Object.getPrototypeOf(HttpAdapter)).call(this, config));
  }

  _createClass(HttpAdapter, [{
    key: 'onEvent',
    value: function onEvent(name, event) {
      switch (name) {
        case 'HTTP_REQUEST':
          return this.onRequest(event);
        default:
          return;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9idW5kbGVkL2V2ZW50LXNvdXJjZS1hZGFwdGVyL0h0dHBBZGFwdGVyLmpzIl0sIm5hbWVzIjpbIkh0dHBBZGFwdGVyIiwiY29uZmlnIiwibmFtZSIsImV2ZW50Iiwib25SZXF1ZXN0IiwiZ2V0RGF0YSIsInBhdGgiLCJtZXRob2QiLCJiYXNlVVJMIiwidXJsIiwidGhlbiIsInJlc3BvbmQiLCJyZXNwb25zZSIsImNhdGNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7SUFFTUEsVzs7O0FBQ0osdUJBQWFDLE1BQWIsRUFBc0I7QUFBQTs7QUFBQSxxSEFDYkEsTUFEYTtBQUVyQjs7Ozs0QkFFUUMsSSxFQUFNQyxLLEVBQVE7QUFDckIsY0FBUUQsSUFBUjtBQUNFLGFBQUssY0FBTDtBQUNFLGlCQUFPLEtBQUtFLFNBQUwsQ0FBZ0JELEtBQWhCLENBQVA7QUFDRjtBQUNFO0FBSko7QUFNRDs7OzhCQUVVQSxLLEVBQVE7QUFBQSwyQkFDUUEsTUFBTUUsT0FBTixFQURSO0FBQUEsVUFDVEMsSUFEUyxrQkFDVEEsSUFEUztBQUFBLFVBQ0hDLE1BREcsa0JBQ0hBLE1BREc7O0FBRWpCLDJCQUFNO0FBQ0pBLHNCQURJO0FBRUpDLGlCQUFTLEtBQUtQLE1BQUwsQ0FBWUEsTUFBWixDQUFtQk8sT0FGeEI7QUFHSkMsYUFBS0g7QUFIRCxPQUFOLEVBSUdJLElBSkgsQ0FJUyxvQkFBWTtBQUNuQlAsY0FBTVEsT0FBTixDQUFlQyxRQUFmO0FBQ0QsT0FORCxFQU1HQyxLQU5ILENBTVUsb0JBQVk7QUFDcEJWLGNBQU1RLE9BQU4sQ0FBZUMsUUFBZjtBQUNELE9BUkQ7QUFTRDs7Ozs7O2tCQUdZWixXIiwiZmlsZSI6Ikh0dHBBZGFwdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IEV2ZW50U291cmNlQWRhcHRlciB9IGZyb20gJy4uLy4uL2NvcmUnO1xuXG5jbGFzcyBIdHRwQWRhcHRlciBleHRlbmRzIEV2ZW50U291cmNlQWRhcHRlciB7XG4gIGNvbnN0cnVjdG9yKCBjb25maWcgKSB7XG4gICAgc3VwZXIoIGNvbmZpZyApO1xuICB9XG5cbiAgb25FdmVudCggbmFtZSwgZXZlbnQgKSB7XG4gICAgc3dpdGNoKCBuYW1lICkge1xuICAgICAgY2FzZSAnSFRUUF9SRVFVRVNUJzpcbiAgICAgICAgcmV0dXJuIHRoaXMub25SZXF1ZXN0KCBldmVudCApO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuXG4gIG9uUmVxdWVzdCggZXZlbnQgKSB7XG4gICAgY29uc3QgeyBwYXRoLCBtZXRob2QgfSA9IGV2ZW50LmdldERhdGEoKTtcbiAgICBheGlvcyh7XG4gICAgICBtZXRob2QsXG4gICAgICBiYXNlVVJMOiB0aGlzLmNvbmZpZy5jb25maWcuYmFzZVVSTCxcbiAgICAgIHVybDogcGF0aCxcbiAgICB9KS50aGVuKCByZXNwb25zZSA9PiB7XG4gICAgICBldmVudC5yZXNwb25kKCByZXNwb25zZSApO1xuICAgIH0pLmNhdGNoKCByZXNwb25zZSA9PiB7XG4gICAgICBldmVudC5yZXNwb25kKCByZXNwb25zZSApO1xuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEh0dHBBZGFwdGVyO1xuIl19
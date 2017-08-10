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

var AlertAdapter = function (_EventSourceAdapter) {
  _inherits(AlertAdapter, _EventSourceAdapter);

  function AlertAdapter(config) {
    _classCallCheck(this, AlertAdapter);

    return _possibleConstructorReturn(this, (AlertAdapter.__proto__ || Object.getPrototypeOf(AlertAdapter)).call(this, config));
  }

  _createClass(AlertAdapter, [{
    key: 'onEvent',
    value: function onEvent(name, event) {
      switch (name) {
        case 'ALERT':
          return this.onAlert(event);
        default:
          return;
      }
    }
  }, {
    key: 'onAlert',
    value: function onAlert(event) {
      var _event$getData = event.getData(),
          message = _event$getData.message;

      alert(message);
    }
  }]);

  return AlertAdapter;
}(_core.EventSourceAdapter);

exports.default = AlertAdapter;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9idW5kbGVkL2V2ZW50LXNvdXJjZS1hZGFwdGVyL0FsZXJ0QWRhcHRlci5qcyJdLCJuYW1lcyI6WyJBbGVydEFkYXB0ZXIiLCJjb25maWciLCJuYW1lIiwiZXZlbnQiLCJvbkFsZXJ0IiwiZ2V0RGF0YSIsIm1lc3NhZ2UiLCJhbGVydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7O0lBRU1BLFk7OztBQUNKLHdCQUFhQyxNQUFiLEVBQXNCO0FBQUE7O0FBQUEsdUhBQ2JBLE1BRGE7QUFFckI7Ozs7NEJBRVFDLEksRUFBTUMsSyxFQUFRO0FBQ3JCLGNBQVFELElBQVI7QUFDRSxhQUFLLE9BQUw7QUFDRSxpQkFBTyxLQUFLRSxPQUFMLENBQWNELEtBQWQsQ0FBUDtBQUNGO0FBQ0U7QUFKSjtBQU1EOzs7NEJBRVFBLEssRUFBUTtBQUFBLDJCQUNLQSxNQUFNRSxPQUFOLEVBREw7QUFBQSxVQUNQQyxPQURPLGtCQUNQQSxPQURPOztBQUVmQyxZQUFPRCxPQUFQO0FBQ0Q7Ozs7OztrQkFHWU4sWSIsImZpbGUiOiJBbGVydEFkYXB0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgRXZlbnRTb3VyY2VBZGFwdGVyIH0gZnJvbSAnLi4vLi4vY29yZSc7XG5cbmNsYXNzIEFsZXJ0QWRhcHRlciBleHRlbmRzIEV2ZW50U291cmNlQWRhcHRlciB7XG4gIGNvbnN0cnVjdG9yKCBjb25maWcgKSB7XG4gICAgc3VwZXIoIGNvbmZpZyApO1xuICB9XG5cbiAgb25FdmVudCggbmFtZSwgZXZlbnQgKSB7XG4gICAgc3dpdGNoKCBuYW1lICkge1xuICAgICAgY2FzZSAnQUxFUlQnOlxuICAgICAgICByZXR1cm4gdGhpcy5vbkFsZXJ0KCBldmVudCApO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuXG4gIG9uQWxlcnQoIGV2ZW50ICkge1xuICAgIGNvbnN0IHsgbWVzc2FnZSB9ID0gZXZlbnQuZ2V0RGF0YSgpO1xuICAgIGFsZXJ0KCBtZXNzYWdlICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQWxlcnRBZGFwdGVyO1xuIl19
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _core = require('../../core');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AlertAdapter = function (_EventSourceAdapter) {
  _inherits(AlertAdapter, _EventSourceAdapter);

  function AlertAdapter() {
    _classCallCheck(this, AlertAdapter);

    return _possibleConstructorReturn(this, (AlertAdapter.__proto__ || Object.getPrototypeOf(AlertAdapter)).apply(this, arguments));
  }

  _createClass(AlertAdapter, [{
    key: 'onEvent',
    value: function onEvent(name, event) {
      switch (name) {
        case 'ALERT':
          return this.onAlert(event);
        default:
          return null;
      }
    }
  }, {
    key: 'onAlert',
    value: function onAlert(event) {
      var _event$getData = event.getData(),
          message = _event$getData.message;
      // eslint-disable-next-line no-undef, no-alert


      alert(message);
    }
  }]);

  return AlertAdapter;
}(_core.EventSourceAdapter);

exports.default = AlertAdapter;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9idW5kbGVkL2V2ZW50LXNvdXJjZS1hZGFwdGVyL0FsZXJ0QWRhcHRlci5qcyJdLCJuYW1lcyI6WyJBbGVydEFkYXB0ZXIiLCJuYW1lIiwiZXZlbnQiLCJvbkFsZXJ0IiwiZ2V0RGF0YSIsIm1lc3NhZ2UiLCJhbGVydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7SUFFTUEsWTs7Ozs7Ozs7Ozs7NEJBQ0tDLEksRUFBTUMsSyxFQUFRO0FBQ3JCLGNBQVNELElBQVQ7QUFDRSxhQUFLLE9BQUw7QUFDRSxpQkFBTyxLQUFLRSxPQUFMLENBQWNELEtBQWQsQ0FBUDtBQUNGO0FBQ0UsaUJBQU8sSUFBUDtBQUpKO0FBTUQ7Ozs0QkFFUUEsSyxFQUFRO0FBQUEsMkJBQ0tBLE1BQU1FLE9BQU4sRUFETDtBQUFBLFVBQ1BDLE9BRE8sa0JBQ1BBLE9BRE87QUFFZjs7O0FBQ0FDLFlBQU9ELE9BQVA7QUFDRDs7Ozs7O2tCQUdZTCxZIiwiZmlsZSI6IkFsZXJ0QWRhcHRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50U291cmNlQWRhcHRlciB9IGZyb20gJy4uLy4uL2NvcmUnO1xuXG5jbGFzcyBBbGVydEFkYXB0ZXIgZXh0ZW5kcyBFdmVudFNvdXJjZUFkYXB0ZXIge1xuICBvbkV2ZW50KCBuYW1lLCBldmVudCApIHtcbiAgICBzd2l0Y2ggKCBuYW1lICkge1xuICAgICAgY2FzZSAnQUxFUlQnOlxuICAgICAgICByZXR1cm4gdGhpcy5vbkFsZXJ0KCBldmVudCApO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgb25BbGVydCggZXZlbnQgKSB7XG4gICAgY29uc3QgeyBtZXNzYWdlIH0gPSBldmVudC5nZXREYXRhKCk7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmLCBuby1hbGVydFxuICAgIGFsZXJ0KCBtZXNzYWdlICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQWxlcnRBZGFwdGVyO1xuIl19
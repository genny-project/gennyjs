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
    value: function onEvent() {}
  }]);

  return EventSourceAdapter;
}();

exports.default = EventSourceAdapter;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb3JlL2V2ZW50LXNvdXJjZS9FdmVudFNvdXJjZUFkYXB0ZXIuanMiXSwibmFtZXMiOlsiRXZlbnRTb3VyY2VBZGFwdGVyIiwiY29uZmlnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0lBRU1BLGtCO0FBQ0osOEJBQWFDLE1BQWIsRUFBc0I7QUFBQTs7QUFDcEIsU0FBS0EsTUFBTCxHQUFjQSxNQUFkOztBQUVBO0FBQ0EsUUFBSyxDQUFDLEtBQUtBLE1BQVgsRUFBb0I7QUFDbEIsWUFBTSx3QkFBdUIsaURBQXZCLENBQU47QUFDRDtBQUNGOzs7OzhCQUVTLENBQUU7Ozs7OztrQkFHQ0Qsa0IiLCJmaWxlIjoiRXZlbnRTb3VyY2VBZGFwdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRCdXNFeGNlcHRpb24gfSBmcm9tICcuLi8nO1xuXG5jbGFzcyBFdmVudFNvdXJjZUFkYXB0ZXIge1xuICBjb25zdHJ1Y3RvciggY29uZmlnICkge1xuICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xuXG4gICAgLyogVmFsaWRhdGUgdGhlIGNvbmZpZyAqL1xuICAgIGlmICggIXRoaXMuY29uZmlnICkge1xuICAgICAgdGhyb3cgbmV3IEV2ZW50QnVzRXhjZXB0aW9uKCAnQ29uZmlnIG11c3QgYmUgcHJvdmlkZWQgdG8gYSBFdmVudFNvdXJjZUFkYXB0ZXInICk7XG4gICAgfVxuICB9XG5cbiAgb25FdmVudCgpIHt9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50U291cmNlQWRhcHRlcjtcbiJdfQ==
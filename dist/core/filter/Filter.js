"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Filter = function () {
  function Filter(filter) {
    _classCallCheck(this, Filter);

    this.filter = filter;
  }

  _createClass(Filter, [{
    key: "process",
    value: function process(data) {
      var filter = this.filter;
      var passedFilter = true;

      /* Check if the event passes the filter, first grab the keys of the event and filter */
      var eventKeys = Object.keys(data);
      var filterKeys = Object.keys(filter);

      /* Loop through all the keys in the filter if see if any match the event */
      filterKeys.forEach(function (k) {
        /* Now loop through all the event keys and see if we can match them */
        eventKeys.forEach(function (e) {
          /* Create a regex expression to test against */
          var keyFilter = new RegExp("^" + k + "$");

          /* Check to see if the event key matches the filter */
          if (keyFilter.test(e)) {
            /* Now check if the values match */
            var eventValue = data[e];
            var filterValue = filter[k];

            /* Create a regex expression from the filter value to test against */
            var valueFilter = new RegExp("^" + filterValue + "$");

            if (!valueFilter.test(eventValue)) {
              passedFilter = false;
            }
          }
        });
      });

      /* If we didn't pass the filter return null, otherwise return the data */
      if (!passedFilter) {
        return null;
      }

      return data;
    }
  }]);

  return Filter;
}();

exports.default = Filter;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb3JlL2ZpbHRlci9GaWx0ZXIuanMiXSwibmFtZXMiOlsiRmlsdGVyIiwiZmlsdGVyIiwiZGF0YSIsInBhc3NlZEZpbHRlciIsImV2ZW50S2V5cyIsIk9iamVjdCIsImtleXMiLCJmaWx0ZXJLZXlzIiwiZm9yRWFjaCIsImtleUZpbHRlciIsIlJlZ0V4cCIsImsiLCJ0ZXN0IiwiZSIsImV2ZW50VmFsdWUiLCJmaWx0ZXJWYWx1ZSIsInZhbHVlRmlsdGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLE07QUFDSixrQkFBYUMsTUFBYixFQUFzQjtBQUFBOztBQUNwQixTQUFLQSxNQUFMLEdBQWNBLE1BQWQ7QUFDRDs7Ozs0QkFFUUMsSSxFQUFPO0FBQ2QsVUFBTUQsU0FBUyxLQUFLQSxNQUFwQjtBQUNBLFVBQUlFLGVBQWUsSUFBbkI7O0FBRUE7QUFDQSxVQUFNQyxZQUFZQyxPQUFPQyxJQUFQLENBQWFKLElBQWIsQ0FBbEI7QUFDQSxVQUFNSyxhQUFhRixPQUFPQyxJQUFQLENBQWFMLE1BQWIsQ0FBbkI7O0FBRUE7QUFDQU0saUJBQVdDLE9BQVgsQ0FBb0IsYUFBSztBQUN2QjtBQUNBSixrQkFBVUksT0FBVixDQUFtQixhQUFLO0FBQ3RCO0FBQ0EsY0FBTUMsWUFBWSxJQUFJQyxNQUFKLE9BQWdCQyxDQUFoQixPQUFsQjs7QUFFQTtBQUNBLGNBQUtGLFVBQVVHLElBQVYsQ0FBZ0JDLENBQWhCLENBQUwsRUFBMEI7QUFDeEI7QUFDQSxnQkFBTUMsYUFBYVosS0FBS1csQ0FBTCxDQUFuQjtBQUNBLGdCQUFNRSxjQUFjZCxPQUFPVSxDQUFQLENBQXBCOztBQUVBO0FBQ0EsZ0JBQU1LLGNBQWMsSUFBSU4sTUFBSixPQUFnQkssV0FBaEIsT0FBcEI7O0FBRUEsZ0JBQUssQ0FBQ0MsWUFBWUosSUFBWixDQUFrQkUsVUFBbEIsQ0FBTixFQUFzQztBQUNwQ1gsNkJBQWUsS0FBZjtBQUNEO0FBQ0Y7QUFDRixTQWpCRDtBQWtCRCxPQXBCRDs7QUFzQkE7QUFDQSxVQUFLLENBQUNBLFlBQU4sRUFBcUI7QUFDbkIsZUFBTyxJQUFQO0FBQ0Q7O0FBRUQsYUFBT0QsSUFBUDtBQUNEOzs7Ozs7a0JBR1lGLE0iLCJmaWxlIjoiRmlsdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgRmlsdGVyIHtcbiAgY29uc3RydWN0b3IoIGZpbHRlciApIHtcbiAgICB0aGlzLmZpbHRlciA9IGZpbHRlcjtcbiAgfVxuXG4gIHByb2Nlc3MoIGRhdGEgKSB7XG4gICAgY29uc3QgZmlsdGVyID0gdGhpcy5maWx0ZXI7XG4gICAgbGV0IHBhc3NlZEZpbHRlciA9IHRydWU7XG5cbiAgICAvKiBDaGVjayBpZiB0aGUgZXZlbnQgcGFzc2VzIHRoZSBmaWx0ZXIsIGZpcnN0IGdyYWIgdGhlIGtleXMgb2YgdGhlIGV2ZW50IGFuZCBmaWx0ZXIgKi9cbiAgICBjb25zdCBldmVudEtleXMgPSBPYmplY3Qua2V5cyggZGF0YSApO1xuICAgIGNvbnN0IGZpbHRlcktleXMgPSBPYmplY3Qua2V5cyggZmlsdGVyICk7XG5cbiAgICAvKiBMb29wIHRocm91Z2ggYWxsIHRoZSBrZXlzIGluIHRoZSBmaWx0ZXIgaWYgc2VlIGlmIGFueSBtYXRjaCB0aGUgZXZlbnQgKi9cbiAgICBmaWx0ZXJLZXlzLmZvckVhY2goIGsgPT4ge1xuICAgICAgLyogTm93IGxvb3AgdGhyb3VnaCBhbGwgdGhlIGV2ZW50IGtleXMgYW5kIHNlZSBpZiB3ZSBjYW4gbWF0Y2ggdGhlbSAqL1xuICAgICAgZXZlbnRLZXlzLmZvckVhY2goIGUgPT4ge1xuICAgICAgICAvKiBDcmVhdGUgYSByZWdleCBleHByZXNzaW9uIHRvIHRlc3QgYWdhaW5zdCAqL1xuICAgICAgICBjb25zdCBrZXlGaWx0ZXIgPSBuZXcgUmVnRXhwKCBgXiR7a30kYCApO1xuXG4gICAgICAgIC8qIENoZWNrIHRvIHNlZSBpZiB0aGUgZXZlbnQga2V5IG1hdGNoZXMgdGhlIGZpbHRlciAqL1xuICAgICAgICBpZiAoIGtleUZpbHRlci50ZXN0KCBlICkpIHtcbiAgICAgICAgICAvKiBOb3cgY2hlY2sgaWYgdGhlIHZhbHVlcyBtYXRjaCAqL1xuICAgICAgICAgIGNvbnN0IGV2ZW50VmFsdWUgPSBkYXRhW2VdO1xuICAgICAgICAgIGNvbnN0IGZpbHRlclZhbHVlID0gZmlsdGVyW2tdO1xuXG4gICAgICAgICAgLyogQ3JlYXRlIGEgcmVnZXggZXhwcmVzc2lvbiBmcm9tIHRoZSBmaWx0ZXIgdmFsdWUgdG8gdGVzdCBhZ2FpbnN0ICovXG4gICAgICAgICAgY29uc3QgdmFsdWVGaWx0ZXIgPSBuZXcgUmVnRXhwKCBgXiR7ZmlsdGVyVmFsdWV9JGAgKTtcblxuICAgICAgICAgIGlmICggIXZhbHVlRmlsdGVyLnRlc3QoIGV2ZW50VmFsdWUgKSkge1xuICAgICAgICAgICAgcGFzc2VkRmlsdGVyID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIC8qIElmIHdlIGRpZG4ndCBwYXNzIHRoZSBmaWx0ZXIgcmV0dXJuIG51bGwsIG90aGVyd2lzZSByZXR1cm4gdGhlIGRhdGEgKi9cbiAgICBpZiAoICFwYXNzZWRGaWx0ZXIgKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gZGF0YTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXI7XG4iXX0=
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb3JlL2ZpbHRlci9GaWx0ZXIuanMiXSwibmFtZXMiOlsiRmlsdGVyIiwiZmlsdGVyIiwiZGF0YSIsInBhc3NlZEZpbHRlciIsImV2ZW50S2V5cyIsIk9iamVjdCIsImtleXMiLCJmaWx0ZXJLZXlzIiwiZm9yRWFjaCIsImsiLCJlIiwia2V5RmlsdGVyIiwiUmVnRXhwIiwidGVzdCIsImV2ZW50VmFsdWUiLCJmaWx0ZXJWYWx1ZSIsInZhbHVlRmlsdGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLE07QUFDSixrQkFBYUMsTUFBYixFQUFzQjtBQUFBOztBQUNwQixTQUFLQSxNQUFMLEdBQWNBLE1BQWQ7QUFDRDs7Ozs0QkFFUUMsSSxFQUFPO0FBQ2QsVUFBTUQsU0FBUyxLQUFLQSxNQUFwQjtBQUNBLFVBQUlFLGVBQWUsSUFBbkI7O0FBRUE7QUFDQSxVQUFNQyxZQUFZQyxPQUFPQyxJQUFQLENBQWFKLElBQWIsQ0FBbEI7QUFDQSxVQUFNSyxhQUFhRixPQUFPQyxJQUFQLENBQWFMLE1BQWIsQ0FBbkI7O0FBRUE7QUFDQU0saUJBQVdDLE9BQVgsQ0FBbUIsVUFBRUMsQ0FBRixFQUFTO0FBQzFCO0FBQ0FMLGtCQUFVSSxPQUFWLENBQWtCLFVBQUVFLENBQUYsRUFBUztBQUN6QjtBQUNBLGNBQU1DLFlBQVksSUFBSUMsTUFBSixPQUFnQkgsQ0FBaEIsT0FBbEI7O0FBRUE7QUFDQSxjQUFLRSxVQUFVRSxJQUFWLENBQWdCSCxDQUFoQixDQUFMLEVBQTBCO0FBQ3hCO0FBQ0EsZ0JBQU1JLGFBQWFaLEtBQUtRLENBQUwsQ0FBbkI7QUFDQSxnQkFBTUssY0FBY2QsT0FBT1EsQ0FBUCxDQUFwQjs7QUFFQTtBQUNBLGdCQUFNTyxjQUFjLElBQUlKLE1BQUosT0FBZ0JHLFdBQWhCLE9BQXBCOztBQUVBLGdCQUFLLENBQUNDLFlBQVlILElBQVosQ0FBa0JDLFVBQWxCLENBQU4sRUFBc0M7QUFDcENYLDZCQUFlLEtBQWY7QUFDRDtBQUNGO0FBQ0YsU0FqQkQ7QUFrQkQsT0FwQkQ7O0FBc0JBO0FBQ0EsVUFBSyxDQUFDQSxZQUFOLEVBQXFCO0FBQ25CLGVBQU8sSUFBUDtBQUNEOztBQUVELGFBQU9ELElBQVA7QUFDRDs7Ozs7O2tCQUdZRixNIiwiZmlsZSI6IkZpbHRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEZpbHRlciB7XG4gIGNvbnN0cnVjdG9yKCBmaWx0ZXIgKSB7XG4gICAgdGhpcy5maWx0ZXIgPSBmaWx0ZXI7XG4gIH1cblxuICBwcm9jZXNzKCBkYXRhICkge1xuICAgIGNvbnN0IGZpbHRlciA9IHRoaXMuZmlsdGVyO1xuICAgIGxldCBwYXNzZWRGaWx0ZXIgPSB0cnVlO1xuXG4gICAgLyogQ2hlY2sgaWYgdGhlIGV2ZW50IHBhc3NlcyB0aGUgZmlsdGVyLCBmaXJzdCBncmFiIHRoZSBrZXlzIG9mIHRoZSBldmVudCBhbmQgZmlsdGVyICovXG4gICAgY29uc3QgZXZlbnRLZXlzID0gT2JqZWN0LmtleXMoIGRhdGEgKTtcbiAgICBjb25zdCBmaWx0ZXJLZXlzID0gT2JqZWN0LmtleXMoIGZpbHRlciApO1xuXG4gICAgLyogTG9vcCB0aHJvdWdoIGFsbCB0aGUga2V5cyBpbiB0aGUgZmlsdGVyIGlmIHNlZSBpZiBhbnkgbWF0Y2ggdGhlIGV2ZW50ICovXG4gICAgZmlsdGVyS2V5cy5mb3JFYWNoKCggayApID0+IHtcbiAgICAgIC8qIE5vdyBsb29wIHRocm91Z2ggYWxsIHRoZSBldmVudCBrZXlzIGFuZCBzZWUgaWYgd2UgY2FuIG1hdGNoIHRoZW0gKi9cbiAgICAgIGV2ZW50S2V5cy5mb3JFYWNoKCggZSApID0+IHtcbiAgICAgICAgLyogQ3JlYXRlIGEgcmVnZXggZXhwcmVzc2lvbiB0byB0ZXN0IGFnYWluc3QgKi9cbiAgICAgICAgY29uc3Qga2V5RmlsdGVyID0gbmV3IFJlZ0V4cCggYF4ke2t9JGAgKTtcblxuICAgICAgICAvKiBDaGVjayB0byBzZWUgaWYgdGhlIGV2ZW50IGtleSBtYXRjaGVzIHRoZSBmaWx0ZXIgKi9cbiAgICAgICAgaWYgKCBrZXlGaWx0ZXIudGVzdCggZSApKSB7XG4gICAgICAgICAgLyogTm93IGNoZWNrIGlmIHRoZSB2YWx1ZXMgbWF0Y2ggKi9cbiAgICAgICAgICBjb25zdCBldmVudFZhbHVlID0gZGF0YVtlXTtcbiAgICAgICAgICBjb25zdCBmaWx0ZXJWYWx1ZSA9IGZpbHRlcltrXTtcblxuICAgICAgICAgIC8qIENyZWF0ZSBhIHJlZ2V4IGV4cHJlc3Npb24gZnJvbSB0aGUgZmlsdGVyIHZhbHVlIHRvIHRlc3QgYWdhaW5zdCAqL1xuICAgICAgICAgIGNvbnN0IHZhbHVlRmlsdGVyID0gbmV3IFJlZ0V4cCggYF4ke2ZpbHRlclZhbHVlfSRgICk7XG5cbiAgICAgICAgICBpZiAoICF2YWx1ZUZpbHRlci50ZXN0KCBldmVudFZhbHVlICkpIHtcbiAgICAgICAgICAgIHBhc3NlZEZpbHRlciA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAvKiBJZiB3ZSBkaWRuJ3QgcGFzcyB0aGUgZmlsdGVyIHJldHVybiBudWxsLCBvdGhlcndpc2UgcmV0dXJuIHRoZSBkYXRhICovXG4gICAgaWYgKCAhcGFzc2VkRmlsdGVyICkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRmlsdGVyO1xuIl19
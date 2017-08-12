'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* Source: https://gist.github.com/jasonrhodes/2321581 */
var getDescendantValue = function getDescendantValue(obj, path) {
  return path.split('.').reduce(function (acc, part) {
    return acc && acc[part];
  }, obj);
};

var Filter = function () {
  function Filter(filter) {
    _classCallCheck(this, Filter);

    this.filter = filter;
  }

  _createClass(Filter, [{
    key: 'process',
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
          /* Check to see if the event key matches the filter */
          if (k === e) {
            /* Now check if the values match */
            var eventValue = getDescendantValue(data, k);
            var filterValue = filter[k];

            /* Create a regex expression from the filter value to test against */
            var valueFilter = new RegExp('^' + filterValue + '$');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb3JlL2ZpbHRlci9GaWx0ZXIuanMiXSwibmFtZXMiOlsiZ2V0RGVzY2VuZGFudFZhbHVlIiwib2JqIiwicGF0aCIsInNwbGl0IiwicmVkdWNlIiwiYWNjIiwicGFydCIsIkZpbHRlciIsImZpbHRlciIsImRhdGEiLCJwYXNzZWRGaWx0ZXIiLCJldmVudEtleXMiLCJPYmplY3QiLCJrZXlzIiwiZmlsdGVyS2V5cyIsImZvckVhY2giLCJrIiwiZSIsImV2ZW50VmFsdWUiLCJmaWx0ZXJWYWx1ZSIsInZhbHVlRmlsdGVyIiwiUmVnRXhwIiwidGVzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0EsSUFBTUEscUJBQXFCLFNBQXJCQSxrQkFBcUIsQ0FBRUMsR0FBRixFQUFPQyxJQUFQO0FBQUEsU0FDekJBLEtBQUtDLEtBQUwsQ0FBWSxHQUFaLEVBQWtCQyxNQUFsQixDQUF5QixVQUFFQyxHQUFGLEVBQU9DLElBQVA7QUFBQSxXQUFpQkQsT0FBT0EsSUFBSUMsSUFBSixDQUF4QjtBQUFBLEdBQXpCLEVBQTRETCxHQUE1RCxDQUR5QjtBQUFBLENBQTNCOztJQUlNTSxNO0FBQ0osa0JBQWFDLE1BQWIsRUFBc0I7QUFBQTs7QUFDcEIsU0FBS0EsTUFBTCxHQUFjQSxNQUFkO0FBQ0Q7Ozs7NEJBRVFDLEksRUFBTztBQUNkLFVBQU1ELFNBQVMsS0FBS0EsTUFBcEI7QUFDQSxVQUFJRSxlQUFlLElBQW5COztBQUVBO0FBQ0EsVUFBTUMsWUFBWUMsT0FBT0MsSUFBUCxDQUFhSixJQUFiLENBQWxCO0FBQ0EsVUFBTUssYUFBYUYsT0FBT0MsSUFBUCxDQUFhTCxNQUFiLENBQW5COztBQUVBO0FBQ0FNLGlCQUFXQyxPQUFYLENBQW1CLFVBQUVDLENBQUYsRUFBUztBQUMxQjtBQUNBTCxrQkFBVUksT0FBVixDQUFrQixVQUFFRSxDQUFGLEVBQVM7QUFDekI7QUFDQSxjQUFLRCxNQUFNQyxDQUFYLEVBQWU7QUFDYjtBQUNBLGdCQUFNQyxhQUFhbEIsbUJBQW9CUyxJQUFwQixFQUEwQk8sQ0FBMUIsQ0FBbkI7QUFDQSxnQkFBTUcsY0FBY1gsT0FBT1EsQ0FBUCxDQUFwQjs7QUFFQTtBQUNBLGdCQUFNSSxjQUFjLElBQUlDLE1BQUosT0FBZ0JGLFdBQWhCLE9BQXBCOztBQUVBLGdCQUFLLENBQUNDLFlBQVlFLElBQVosQ0FBa0JKLFVBQWxCLENBQU4sRUFBc0M7QUFDcENSLDZCQUFlLEtBQWY7QUFDRDtBQUNGO0FBQ0YsU0FkRDtBQWVELE9BakJEOztBQW1CQTtBQUNBLFVBQUssQ0FBQ0EsWUFBTixFQUFxQjtBQUNuQixlQUFPLElBQVA7QUFDRDs7QUFFRCxhQUFPRCxJQUFQO0FBQ0Q7Ozs7OztrQkFHWUYsTSIsImZpbGUiOiJGaWx0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBTb3VyY2U6IGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL2phc29ucmhvZGVzLzIzMjE1ODEgKi9cbmNvbnN0IGdldERlc2NlbmRhbnRWYWx1ZSA9ICggb2JqLCBwYXRoICkgPT4gKFxuICBwYXRoLnNwbGl0KCAnLicgKS5yZWR1Y2UoKCBhY2MsIHBhcnQgKSA9PiBhY2MgJiYgYWNjW3BhcnRdLCBvYmogKVxuKTtcblxuY2xhc3MgRmlsdGVyIHtcbiAgY29uc3RydWN0b3IoIGZpbHRlciApIHtcbiAgICB0aGlzLmZpbHRlciA9IGZpbHRlcjtcbiAgfVxuXG4gIHByb2Nlc3MoIGRhdGEgKSB7XG4gICAgY29uc3QgZmlsdGVyID0gdGhpcy5maWx0ZXI7XG4gICAgbGV0IHBhc3NlZEZpbHRlciA9IHRydWU7XG5cbiAgICAvKiBDaGVjayBpZiB0aGUgZXZlbnQgcGFzc2VzIHRoZSBmaWx0ZXIsIGZpcnN0IGdyYWIgdGhlIGtleXMgb2YgdGhlIGV2ZW50IGFuZCBmaWx0ZXIgKi9cbiAgICBjb25zdCBldmVudEtleXMgPSBPYmplY3Qua2V5cyggZGF0YSApO1xuICAgIGNvbnN0IGZpbHRlcktleXMgPSBPYmplY3Qua2V5cyggZmlsdGVyICk7XG5cbiAgICAvKiBMb29wIHRocm91Z2ggYWxsIHRoZSBrZXlzIGluIHRoZSBmaWx0ZXIgaWYgc2VlIGlmIGFueSBtYXRjaCB0aGUgZXZlbnQgKi9cbiAgICBmaWx0ZXJLZXlzLmZvckVhY2goKCBrICkgPT4ge1xuICAgICAgLyogTm93IGxvb3AgdGhyb3VnaCBhbGwgdGhlIGV2ZW50IGtleXMgYW5kIHNlZSBpZiB3ZSBjYW4gbWF0Y2ggdGhlbSAqL1xuICAgICAgZXZlbnRLZXlzLmZvckVhY2goKCBlICkgPT4ge1xuICAgICAgICAvKiBDaGVjayB0byBzZWUgaWYgdGhlIGV2ZW50IGtleSBtYXRjaGVzIHRoZSBmaWx0ZXIgKi9cbiAgICAgICAgaWYgKCBrID09PSBlICkge1xuICAgICAgICAgIC8qIE5vdyBjaGVjayBpZiB0aGUgdmFsdWVzIG1hdGNoICovXG4gICAgICAgICAgY29uc3QgZXZlbnRWYWx1ZSA9IGdldERlc2NlbmRhbnRWYWx1ZSggZGF0YSwgayApO1xuICAgICAgICAgIGNvbnN0IGZpbHRlclZhbHVlID0gZmlsdGVyW2tdO1xuXG4gICAgICAgICAgLyogQ3JlYXRlIGEgcmVnZXggZXhwcmVzc2lvbiBmcm9tIHRoZSBmaWx0ZXIgdmFsdWUgdG8gdGVzdCBhZ2FpbnN0ICovXG4gICAgICAgICAgY29uc3QgdmFsdWVGaWx0ZXIgPSBuZXcgUmVnRXhwKCBgXiR7ZmlsdGVyVmFsdWV9JGAgKTtcblxuICAgICAgICAgIGlmICggIXZhbHVlRmlsdGVyLnRlc3QoIGV2ZW50VmFsdWUgKSkge1xuICAgICAgICAgICAgcGFzc2VkRmlsdGVyID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIC8qIElmIHdlIGRpZG4ndCBwYXNzIHRoZSBmaWx0ZXIgcmV0dXJuIG51bGwsIG90aGVyd2lzZSByZXR1cm4gdGhlIGRhdGEgKi9cbiAgICBpZiAoICFwYXNzZWRGaWx0ZXIgKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gZGF0YTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXI7XG4iXX0=
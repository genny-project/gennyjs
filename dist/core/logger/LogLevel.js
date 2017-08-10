"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

require("./LoggerException");

/**
 * Define the logging levels, the min and max logging level as well as a
 * function to return a display name for a log level.
 */
exports.default = {
  NONE: 0,
  ERROR: 1,
  WARNING: 2,
  INFO: 3,
  DEBUG: 4,
  MIN: 0,
  MAX: 4,
  getDisplayName: getDisplayName
};

/**
 * Takes a logging level and returns the associated display name, otherwise
 * throws an exception.
 */
/* Import other logging classes */

function getDisplayName(level) {
  switch (level) {
    case 0:
      return "NONE";
    case 1:
      return "ERROR";
    case 2:
      return "WARNING";
    case 3:
      return "INFO";
    case 4:
      return "DEBUG";
    default:
      throw new LoggerException(level + " is an invalid logging level");
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb3JlL2xvZ2dlci9Mb2dMZXZlbC5qcyJdLCJuYW1lcyI6WyJOT05FIiwiRVJST1IiLCJXQVJOSU5HIiwiSU5GTyIsIkRFQlVHIiwiTUlOIiwiTUFYIiwiZ2V0RGlzcGxheU5hbWUiLCJsZXZlbCIsIkxvZ2dlckV4Y2VwdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0E7O0FBRUE7Ozs7a0JBSWU7QUFDYkEsUUFBTSxDQURPO0FBRWJDLFNBQU8sQ0FGTTtBQUdiQyxXQUFTLENBSEk7QUFJYkMsUUFBTSxDQUpPO0FBS2JDLFNBQU8sQ0FMTTtBQU1iQyxPQUFLLENBTlE7QUFPYkMsT0FBSyxDQVBRO0FBUWJDO0FBUmEsQzs7QUFXZjs7OztBQWxCQTs7QUFzQkEsU0FBU0EsY0FBVCxDQUF5QkMsS0FBekIsRUFBaUM7QUFDL0IsVUFBUUEsS0FBUjtBQUNFLFNBQUssQ0FBTDtBQUFRLGFBQU8sTUFBUDtBQUNSLFNBQUssQ0FBTDtBQUFRLGFBQU8sT0FBUDtBQUNSLFNBQUssQ0FBTDtBQUFRLGFBQU8sU0FBUDtBQUNSLFNBQUssQ0FBTDtBQUFRLGFBQU8sTUFBUDtBQUNSLFNBQUssQ0FBTDtBQUFRLGFBQU8sT0FBUDtBQUNSO0FBQVMsWUFBTSxJQUFJQyxlQUFKLENBQXdCRCxLQUF4QixrQ0FBTjtBQU5YO0FBUUQiLCJmaWxlIjoiTG9nTGV2ZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBJbXBvcnQgb3RoZXIgbG9nZ2luZyBjbGFzc2VzICovXG5pbXBvcnQgJy4vTG9nZ2VyRXhjZXB0aW9uJztcblxuLyoqXG4gKiBEZWZpbmUgdGhlIGxvZ2dpbmcgbGV2ZWxzLCB0aGUgbWluIGFuZCBtYXggbG9nZ2luZyBsZXZlbCBhcyB3ZWxsIGFzIGFcbiAqIGZ1bmN0aW9uIHRvIHJldHVybiBhIGRpc3BsYXkgbmFtZSBmb3IgYSBsb2cgbGV2ZWwuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IHtcbiAgTk9ORTogMCxcbiAgRVJST1I6IDEsXG4gIFdBUk5JTkc6IDIsXG4gIElORk86IDMsXG4gIERFQlVHOiA0LFxuICBNSU46IDAsXG4gIE1BWDogNCxcbiAgZ2V0RGlzcGxheU5hbWUsXG59O1xuXG4vKipcbiAqIFRha2VzIGEgbG9nZ2luZyBsZXZlbCBhbmQgcmV0dXJucyB0aGUgYXNzb2NpYXRlZCBkaXNwbGF5IG5hbWUsIG90aGVyd2lzZVxuICogdGhyb3dzIGFuIGV4Y2VwdGlvbi5cbiAqL1xuZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWUoIGxldmVsICkge1xuICBzd2l0Y2goIGxldmVsICkge1xuICAgIGNhc2UgMDogcmV0dXJuIFwiTk9ORVwiXG4gICAgY2FzZSAxOiByZXR1cm4gXCJFUlJPUlwiXG4gICAgY2FzZSAyOiByZXR1cm4gXCJXQVJOSU5HXCJcbiAgICBjYXNlIDM6IHJldHVybiBcIklORk9cIlxuICAgIGNhc2UgNDogcmV0dXJuIFwiREVCVUdcIlxuICAgIGRlZmF1bHQ6IHRocm93IG5ldyBMb2dnZXJFeGNlcHRpb24oIGAke2xldmVsfSBpcyBhbiBpbnZhbGlkIGxvZ2dpbmcgbGV2ZWxgICk7XG4gIH1cbn1cbiJdfQ==
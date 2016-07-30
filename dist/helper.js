"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.diff = undefined;

var _reduceObject = require("reduce-object");

var _reduceObject2 = _interopRequireDefault(_reduceObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function find(obj, predicate) {
  var res = void 0;
  for (var key in obj) {
    if (predicate(obj[key], key)) {
      res = obj[key];
      break;
    }
  }

  return res;
}

var diff = exports.diff = function diff(obj1, obj2) {
  return (0, _reduceObject2.default)(obj2, function (res, value, key) {
    if (find(obj1, function (v, k) {
      return key === k && value !== v;
    })) {
      res[key] = value;
    }
    return res;
  }, {});
};
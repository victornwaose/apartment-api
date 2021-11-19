"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var NotFound = function NotFound(req, res) {
  res.status(404).send("Route does not exist");
};

var _default = NotFound;
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _firebaseAdmin = _interopRequireDefault(require("firebase-admin"));

var _serviceAccount = require("./serviceAccount.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_firebaseAdmin["default"].initializeApp({
  credential: _firebaseAdmin["default"].credential.cert(_serviceAccount.serviceAccount)
});

var _default = _firebaseAdmin["default"];
exports["default"] = _default;
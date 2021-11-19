"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.router = void 0;

var _express = _interopRequireDefault(require("express"));

var _FileUpload = require("../controllers/FileUpload.js");

var _FileHelper = require("../helper/FileHelper.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

exports.router = router;
router.post("/", _FileHelper.upload.single("file"), _FileUpload.singleFileUpload);
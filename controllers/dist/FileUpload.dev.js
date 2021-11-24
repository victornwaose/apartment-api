"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.singleFileUpload = void 0;

var _SingleFile = _interopRequireDefault(require("../modules/SingleFile.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var singleFileUpload = function singleFileUpload(req, res, next) {
  var file;
  return regeneratorRuntime.async(function singleFileUpload$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          file = new _SingleFile["default"]({
            fileName: req.file.originalname,
            filePath: req.file.path,
            fileSize: req.file.size,
            fileType: fileSizeFormatter(req.file.size, 2)
          });
          _context.next = 4;
          return regeneratorRuntime.awrap(file.save());

        case 4:
          console.log(file, "file");
          res.status(201).send();
          _context.next = 12;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0, "error was created at controller");
          res.status(500).send({
            data: _context.t0,
            status: 500,
            message: "error on loading images"
          });

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 8]]);
};

exports.singleFileUpload = singleFileUpload;

var fileSizeFormatter = function fileSizeFormatter(bytes, decimal) {
  if (bytes === 0) return "0 Bytes";
  var dm = decimal || 2;
  var sizes = ["bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  var index = Math.floor(Math.log(bytes) / Math.log(1000));
  return parseFloat((bytes / Math.pow(1000, index)).toFixed(dm)) + " " + sizes[index];
};
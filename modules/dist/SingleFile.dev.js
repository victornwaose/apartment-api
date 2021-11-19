"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true,
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var Schema = _mongoose["default"].Schema;
var singleFileSchema = new Schema(
    {
        fileName: {
            type: String,
            required: true,
        },
        filePath: {
            type: String,
            required: true,
        },
        fileType: {
            type: String,
            required: true,
        },
        fileSize: {
            type: String,
            required: true,
        },
    },
    {
        timeStamps: true,
    }
);

var SingleFile = _mongoose["default"].model("SingleFile", singleFileSchema);

var _default = SingleFile;
exports["default"] = _default;

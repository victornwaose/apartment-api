"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var CarouselSchema = new _mongoose["default"].Schema({
  name: {
    type: String,
    required: [true, "name must provided"],
    trim: true
  },
  price: {
    type: Number,
    required: [true, "type must be provided"]
  },
  type: {
    type: String,
    required: [true, "type must be provided"],
    trim: true
  },
  bedrooms: {
    type: Number,
    required: [true, "type must be provided"]
  },
  bathrooms: {
    type: Number,
    required: [true, "type must be provided"]
  },
  garage: {
    type: Number,
    required: [true, "type must be provided"]
  },
  location: {
    type: String,
    required: [true, "name must provided"],
    trim: true
  },
  address: {
    type: String,
    required: [true, "type must be provided"]
  },
  description: {
    type: String,
    required: [true, "name must provided"],
    trim: true
  },
  img: {
    data: Buffer,
    contentType: String
  }
});

var Carousel = _mongoose["default"].model("Carousel", CarouselSchema);

var _default = Carousel;
exports["default"] = _default;
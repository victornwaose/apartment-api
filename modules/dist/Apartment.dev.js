"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ApartmentSchema = new _mongoose["default"].Schema({
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
    required: [true, "bedrooms must be provided"]
  },
  bathrooms: {
    type: Number,
    required: [true, "bathrooms must be provided"]
  },
  garage: {
    type: Number,
    required: [true, "garage must be provided"]
  },
  location: {
    type: String,
    required: [true, "location must provided"],
    trim: true
  },
  address: {
    type: String,
    required: [true, "location must be provided"],
    trim: true
  },
  description: {
    type: String,
    required: [true, "description must provided"],
    trim: true
  },
  images: {
    type: String
  },
  createdAt: {
    type: Date,
    "default": Date.now()
  }
});

var Apartment = _mongoose["default"].model("Apartment", ApartmentSchema);

var _default = Apartment;
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _Apartment = require("../controllers/Apartment.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var apartment = _express["default"].Router();

apartment.route("/").get(_Apartment.getAllApartment);
apartment.route("/").post(_Apartment.createApartment);
apartment.route("/:id").get(_Apartment.getApartment);
apartment.route("/:id")["delete"](_Apartment.deleteApartment);
apartment.route("/:id").patch(_Apartment.updateApartment);
var _default = apartment;
exports["default"] = _default;
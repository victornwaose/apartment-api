"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateApartment = exports.deleteApartment = exports.getApartment = exports.createApartment = exports.getAllApartment = void 0;

var _Apartment = _interopRequireDefault(require("../modules/Apartment.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getAllApartment = function getAllApartment(req, res) {
  var query, getApartments;
  return regeneratorRuntime.async(function getAllApartment$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          query = req.query;
          _context.prev = 1;

          if (!query) {
            _context.next = 8;
            break;
          }

          _context.next = 5;
          return regeneratorRuntime.awrap(_Apartment["default"].find(query));

        case 5:
          getApartments = _context.sent;
          _context.next = 11;
          break;

        case 8:
          _context.next = 10;
          return regeneratorRuntime.awrap(_Apartment["default"].find({}));

        case 10:
          getApartments = _context.sent;

        case 11:
          res.status(200).json(getApartments);
          _context.next = 18;
          break;

        case 14:
          _context.prev = 14;
          _context.t0 = _context["catch"](1);
          console.log(_context.t0);
          res.status(500).json({
            msg: _context.t0
          });

        case 18:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 14]]);
};

exports.getAllApartment = getAllApartment;

var createApartment = function createApartment(req, res) {
  var apartment;
  return regeneratorRuntime.async(function createApartment$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(_Apartment["default"].create(req.body));

        case 3:
          apartment = _context2.sent;
          res.status(201).json({
            apartment: apartment
          });
          _context2.next = 11;
          break;

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          console.log(_context2.t0);
          res.status(500).json({
            msg: _context2.t0
          });

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

exports.createApartment = createApartment;

var getApartment = function getApartment(req, res) {
  var ApartmentId, apartment;
  return regeneratorRuntime.async(function getApartment$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          ApartmentId = req.params.id;
          _context3.next = 4;
          return regeneratorRuntime.awrap(_Apartment["default"].findOne({
            _id: ApartmentId
          }));

        case 4:
          apartment = _context3.sent;
          res.status(201).json({
            apartment: apartment
          });

          if (apartment) {
            _context3.next = 8;
            break;
          }

          return _context3.abrupt("return", res.status(404).json({
            msg: error
          }));

        case 8:
          _context3.next = 13;
          break;

        case 10:
          _context3.prev = 10;
          _context3.t0 = _context3["catch"](0);
          res.status(402).json({
            msg: _context3.t0
          });

        case 13:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 10]]);
};

exports.getApartment = getApartment;

var deleteApartment = function deleteApartment(req, res) {
  var ApartmentId, apartment;
  return regeneratorRuntime.async(function deleteApartment$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          ApartmentId = req.params.id;
          _context4.next = 4;
          return regeneratorRuntime.awrap(_Apartment["default"].findOneAndDelete({
            _id: ApartmentId
          }));

        case 4:
          apartment = _context4.sent;

          if (apartment) {
            _context4.next = 7;
            break;
          }

          return _context4.abrupt("return", res.status(404).json({
            msg: error
          }));

        case 7:
          res.status(201).json({
            apartment: apartment
          });
          _context4.next = 13;
          break;

        case 10:
          _context4.prev = 10;
          _context4.t0 = _context4["catch"](0);
          res.status(402).json({
            msg: _context4.t0
          });

        case 13:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 10]]);
};

exports.deleteApartment = deleteApartment;

var updateApartment = function updateApartment(req, res) {
  var ApartmentID, apartment;
  return regeneratorRuntime.async(function updateApartment$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          ApartmentID = req.params.id;
          _context5.next = 4;
          return regeneratorRuntime.awrap(_Apartment["default"].findOneAndUpdate({
            _id: ApartmentID
          }, req.body, {
            "new": true,
            runValidators: true
          }));

        case 4:
          apartment = _context5.sent;

          if (_Apartment["default"]) {
            _context5.next = 7;
            break;
          }

          return _context5.abrupt("return", res.status(404).json({
            msg: "No Apartment with id: ".concat(ApartmentID)
          }));

        case 7:
          _context5.next = 12;
          break;

        case 9:
          _context5.prev = 9;
          _context5.t0 = _context5["catch"](0);
          res.status(500).json({
            msg: error
          });

        case 12:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[0, 9]]);
};

exports.updateApartment = updateApartment;
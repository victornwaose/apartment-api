"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateTask = exports.deleteCarousel = exports.getCarousel = exports.createCarousel = exports.getAllCarousel = void 0;

var _Carousel = _interopRequireDefault(require("../modules/Carousel.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getAllCarousel = function getAllCarousel(req, res) {
  var _getCarousel;

  return regeneratorRuntime.async(function getAllCarousel$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(_Carousel["default"].find({}));

        case 3:
          _getCarousel = _context.sent;
          res.status(201).json({
            getCarousel: _getCarousel
          });
          _context.next = 10;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          res.status(500).json({
            msg: _context.t0
          });

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

exports.getAllCarousel = getAllCarousel;

var createCarousel = function createCarousel(req, res) {
  var carousel;
  return regeneratorRuntime.async(function createCarousel$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(_Carousel["default"].create(req.body));

        case 3:
          carousel = _context2.sent;
          res.status(201).json({
            carousel: carousel
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

exports.createCarousel = createCarousel;

var getCarousel = function getCarousel(req, res) {
  var carouselId, carousel;
  return regeneratorRuntime.async(function getCarousel$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          carouselId = req.params.id;
          _context3.next = 4;
          return regeneratorRuntime.awrap(_Carousel["default"].findOne({
            _id: carouselId
          }));

        case 4:
          carousel = _context3.sent;
          res.status(201).json({
            carousel: carousel
          });

          if (carousel) {
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

exports.getCarousel = getCarousel;

var deleteCarousel = function deleteCarousel(req, res) {
  var carouselId, carousel;
  return regeneratorRuntime.async(function deleteCarousel$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          carouselId = req.params.id;
          _context4.next = 4;
          return regeneratorRuntime.awrap(_Carousel["default"].findOneAndDelete({
            _id: carouselId
          }));

        case 4:
          carousel = _context4.sent;

          if (carousel) {
            _context4.next = 7;
            break;
          }

          return _context4.abrupt("return", res.status(404).json({
            msg: error
          }));

        case 7:
          res.status(201).json({
            carousel: carousel
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

exports.deleteCarousel = deleteCarousel;

var updateTask = function updateTask(req, res) {
  var carouselID, carousel;
  return regeneratorRuntime.async(function updateTask$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          carouselID = req.params.id;
          _context5.next = 4;
          return regeneratorRuntime.awrap(_Carousel["default"].findOneAndUpdate({
            _id: carouselID
          }, req.body, {
            "new": true,
            runValidators: true
          }));

        case 4:
          carousel = _context5.sent;

          if (carousel) {
            _context5.next = 7;
            break;
          }

          return _context5.abrupt("return", res.status(404).json({
            msg: "NO carousel with id: ".concat(taskID)
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

exports.updateTask = updateTask;
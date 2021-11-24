"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _firebaseConfig = _interopRequireDefault(require("../firebaseConfig/firebaseConfig.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Firebase = function Firebase(req, res, next) {
  var token, verified;
  return regeneratorRuntime.async(function Firebase$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(req.headers.authorization.split(" ")[1]);

        case 2:
          token = _context.sent;
          console.log(token);
          _context.prev = 4;
          _context.next = 7;
          return regeneratorRuntime.awrap(_firebaseConfig["default"].auth().verifyIdToken(token));

        case 7:
          verified = _context.sent;

          if (!verified) {
            _context.next = 11;
            break;
          }

          req.user = verified;
          return _context.abrupt("return", next());

        case 11:
          res.status(401).json("user  not authorized ");
          _context.next = 17;
          break;

        case 14:
          _context.prev = 14;
          _context.t0 = _context["catch"](4);
          res.status(401).send({
            data: _context.t0,
            status: 402,
            message: "error on auth"
          });

        case 17:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[4, 14]]);
};

var _default = Firebase;
exports["default"] = _default;
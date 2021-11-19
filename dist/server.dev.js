"use strict";

var _express = _interopRequireDefault(require("express"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _path = _interopRequireDefault(require("path"));

var _cors = _interopRequireDefault(require("cors"));

var _Config = _interopRequireDefault(require("./Config.js"));

var _Apartment = _interopRequireDefault(require("./routes/Apartment.js"));

var _NotFound = _interopRequireDefault(require("./middleware/NotFound.js"));

var _FileUpload = require("./routes/FileUpload.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])(); //configuration of Mongoosse

_dotenv["default"].config();

var mongodbUrl = _Config["default"].MONGODB_URL;

_mongoose["default"].connect(mongodbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(function () {
  return console.log("connected to the DB");
})["catch"](function (error) {
  return console.log(error);
});

app.use((0, _cors["default"])());
app.use(_express["default"].json());
app.use("/upload", _express["default"]["static"](_path["default"].join(__dirname, "upload")));
console.log(__dirname); //middleware

app.use("/api/v1/apartment", _Apartment["default"]);
app.use("/api/apartment/:id", _Apartment["default"]);
app.use("/api/v1/singleFile", _FileUpload.router);
app.use(_NotFound["default"]);
var Port = 5000;
app.listen(Port, function () {
  console.log("port is working at ".concat(Port));
});
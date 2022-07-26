"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var service = _axios["default"].create({
  baseURL: "http://localhost:3000/",
  timeout: 3000
});

var _default = service;
exports["default"] = _default;
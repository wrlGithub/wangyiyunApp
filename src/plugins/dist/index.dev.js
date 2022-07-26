"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getVant;

var _vant = require("vant");

var plugins = [_vant.Button, _vant.Swipe, _vant.SwipeItem, _vant.Popup];

function getVant(app) {
  plugins.forEach(function (item) {
    return app.use(item);
  });
}
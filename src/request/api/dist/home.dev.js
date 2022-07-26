"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBanner = getBanner;
exports.getMusicList = getMusicList;

var _ = _interopRequireDefault(require(".."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// 获取首页轮播图的数据
function getBanner() {
  return (0, _["default"])({
    method: "GET",
    url: "/banner?type=2"
  });
} // 获取发现好歌单


function getMusicList() {
  return (0, _["default"])({
    method: "GET",
    url: "/personalized?limit=10"
  });
}
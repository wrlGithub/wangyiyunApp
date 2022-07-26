"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMusicList = getMusicList;
exports.getItemList = getItemList;
exports.getMusicLyric = getMusicLyric;

var _ = _interopRequireDefault(require(".."));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// 获取歌单详细页的数据
function getMusicList(data) {
  return (0, _["default"])({
    method: "GET",
    url: "/playlist/detail?id=".concat(data)
  });
} // 获取歌曲列表


function getItemList(data) {
  return (0, _["default"])({
    method: "GET",
    url: "/playlist/track/all?id=".concat(data, "&limit=10&offset=0")
  });
} // 获取歌曲的歌词


function getMusicLyric(data) {
  return (0, _["default"])({
    method: "GET",
    url: "/lyric?id=".concat(data)
  });
}
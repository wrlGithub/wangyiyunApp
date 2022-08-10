"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBanner = getBanner;
exports.getMusicList = getMusicList;
exports.getSearchMusic = getSearchMusic;
exports.getPhoneLogin = getPhoneLogin;
exports.getLoginUser = getLoginUser;

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
} // 搜索


function getSearchMusic(data) {
  return (0, _["default"])({
    method: "GET",
    url: "/search?keywords=".concat(data)
  });
} // 电话登录


function getPhoneLogin(data) {
  return (0, _["default"])({
    method: "GET",
    url: "/login/cellphone?phone=".concat(data.phone, "&password=").concat(data.password)
  });
} // 获取用户详情 /user/detail?uid=32953014


function getLoginUser(data) {
  return (0, _["default"])({
    method: "GET",
    url: "/user/detail?uid=".concat(data)
  });
}
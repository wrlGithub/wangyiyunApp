"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _home = require("@/request/api/home");

var _item = require("@/request/api/item");

var _vuex = require("vuex");

var _default = (0, _vuex.createStore)({
  state: {
    playList: [{
      al: {
        id: 16953,
        name: "自定义",
        pic: 109951166118671650,
        picUrl: "https://p2.music.126.net/KyBR4ZDYFlzQJE_uyvfjpA==/109951166118671647.jpg",
        pic_str: "109951166118671647"
      },
      id: 167876,
      name: '有何不可',
      ar: [{
        name: '许嵩'
      }]
    }],
    playListIndex: 0,
    // 默认下标为0
    isbtnShow: true,
    // 暂停按钮的显示
    detailShow: false,
    // 详情页的展示
    lyricList: {},
    //歌词
    currentTime: 0,
    //当前时间
    duration: 0 //歌曲总时长

  },
  getters: {},
  mutations: {
    updateIsbtnShow: function updateIsbtnShow(state, value) {
      state.isbtnShow = value; // console.log(state.playList);
    },
    updatePlayList: function updatePlayList(state, value) {
      state.playList = value;
      console.log(state.playList);
    },
    updatePlayListIndex: function updatePlayListIndex(state, value) {
      state.playListIndex = value;
    },
    updateDetailShow: function updateDetailShow(state) {
      state.detailShow = !state.detailShow;
    },
    updateLyricList: function updateLyricList(state, value) {
      state.lyricList = value;
    },
    // 改变当前时间
    updateCurrentTime: function updateCurrentTime(state, value) {
      // console.log(state.currentTime);
      state.currentTime = value;
    },
    // 更新歌曲总时长
    updateDuration: function updateDuration(state, value) {
      state.duration = value;
    }
  },
  actions: {
    // 获取歌词
    getLyric: function getLyric(context, value) {
      var res;
      return regeneratorRuntime.async(function getLyric$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return regeneratorRuntime.awrap((0, _item.getMusicLyric)(value));

            case 2:
              res = _context.sent;
              // console.log('获取歌词');
              // console.log('打印歌词',res.data.lrc);
              context.commit('updateLyricList', res.data.lrc);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      });
    }
  },
  modules: {}
});

exports["default"] = _default;
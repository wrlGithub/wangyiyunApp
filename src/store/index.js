import { getMusicList } from '@/request/api/home';
import { getMusicLyric } from '@/request/api/item';
import { createStore } from 'vuex'
export default createStore({
  state: {
    playList: [{
      al:{
        id: 16953,
        name: "自定义",
        pic: 109951166118671650,
        picUrl: "https://p2.music.126.net/KyBR4ZDYFlzQJE_uyvfjpA==/109951166118671647.jpg",
        pic_str: "109951166118671647"
      },
      id: 167876,
      name: '有何不可',
      ar:[{
        name:'许嵩'
      }]
    }],
    playListIndex:0,// 默认下标为0
    isbtnShow:true,// 暂停按钮的显示
    detailShow:false,// 详情页的展示
    lyricList:{},//歌词
    currentTime:0,//当前时间
    duration:0,//歌曲总时长
  },
  getters: {
  },
  mutations: {
    updateIsbtnShow:function(state,value) {
      state.isbtnShow = value  
      // console.log(state.playList);
    },
    updatePlayList: function (state, value) {
      state.playList = value
      console.log(state.playList);
    },
    updatePlayListIndex: function (state, value) {
      state.playListIndex = value
    },
    updateDetailShow: function (state) {
      state.detailShow = !state.detailShow
    },
    updateLyricList:function(state,value){
      state.lyricList=value
    },
    // 改变当前时间
    updateCurrentTime:function(state, value) {
      // console.log(state.currentTime);
      state.currentTime = value
    },
    // 更新歌曲总时长
    updateDuration:function(state, value) {
      state.duration = value
    }
  },
  actions: {
    // 获取歌词
    getLyric:async function(context, value) {
      let res = await getMusicLyric(value);
      // console.log('获取歌词');
      // console.log('打印歌词',res.data.lrc);
      context.commit('updateLyricList',res.data.lrc)
    }
  },
  modules: {
  }
})

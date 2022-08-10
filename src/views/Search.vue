<template>
<!-- 搜索框的div -->
    <div class="searchTop">
        <svg class="icon" aria-hidden="true" @click="$router.go(-1)">
            <use xlink:href="#icon-zuojiantou"></use>
        </svg>
        <input type="text" placeholder="陈奕迅" v-model="searchKey" @keydown.enter="enterKey" >
    </div>
<!-- 历史记录的div -->
    <div class="searchHistory">
        <span class = "searchSpan">历史</span>
        <span class="spanKey" v-for="item in keyWordList " :key="item" @click="searchHistory(item)">
        {{item}}
        </span>
        <svg class="icon" aria-hidden="true" @click="delHistory">
            <use xlink:href="#icon-shanchu"></use>
        </svg>
    </div>
<!-- 搜索的歌曲列表展示 -->
    <div class="itemList">
      <div class="item" v-for="(item, i) in searchList" :key="i">
        <div class="itemLeft" @click="updataIndex(item)">
          <span class="leftSpan">{{ i + 1 }}</span>
          <div>
            <p>{{ item.name }}</p>
            <span v-for="(item1, index) in item.artists" :key="index">{{
              item1.name
            }}</span>
          </div>
        </div>
        <div class="itemRight">
          <svg class="icon bofang" aria-hidden="true" v-if='item.mv !=0'>
            <use xlink:href="#icon-shipin"></use>
          </svg>
          <svg class="icon liebiao" aria-hidden="true">
            <use xlink:href="#icon-31liebiao"></use>
          </svg>
        </div>
      </div>
    </div>
</template>
<script>
import {getSearchMusic} from '@/request/api/home.js';
export default {
    data() {
        return{
            keyWordList:[],//保存历史记录
            searchKey:'',//当前的搜索值
            searchList: [],//保存歌曲
        }
    },
    mounted() {
        this.keyWordList = JSON.parse(localStorage.getItem("keyWordList")) || []
    },
    methods: {
        enterKey:async function() {
            if (this.searchKey !== "") {
                this.keyWordList.unshift(this.searchKey);
                // 去重
                this.keyWordList = [...new Set(this.keyWordList)];
                // 固定长度
                if(this.keyWordList.length > 10) {
                    this.keyWordList.splice(this.keyWordList.length - 1, 1)
                }
                localStorage.setItem("keyWordList",JSON.stringify(this.keyWordList));
                let res = await getSearchMusic(this.searchKey);
                this.searchList = res.data.result.songs;
                this.searchKey = '';
            }
        },
        delHistory:function(){
            localStorage.removeItem("keyWordList")
            this.keyWordList = []
        },
        searchHistory:async function(item) {
            let res = await getSearchMusic(item)
            this.searchList = res.data.result.songs;
            console.log(res);
        },
        // 点击播放列表音乐
        updataIndex:function(item) {
            // console.log(item);
            item.al = item.alias
            item.al.picUrl = item.album.artist.img1v1Url
            item.al.name = item.name
            item.ar = []
            item.ar.push(item.artists[0])
            // item.ar[0].name = item.artists[0].name
            this.$store.commit("pushPlayList",item)
            this.$store.commit("updatePlayListIndex",this.$store.state.playList.length-1)
        }
    }
}
</script>
<style lang="less" scoped>
    .searchTop{
        width: 100%;
        height: 1rem;
        padding: 0 .2rem;
        display: flex;
        align-items: center;
        input{
            margin-left: .2rem;
            border: none;
            border-bottom: 1px solid #999;
            width: 90%;
            padding: .1rem;
        }
    }
    .searchHistory{
        width: 100%;
        padding: .2rem;
        .searchSpan{
            font-weight:1000
        }
        .spanKey{
            padding: .1rem .2rem;
            background-color: rgb(185, 169, 169);
            border-radius: .4rem;
            margin: .1rem .2rem;
            display: inline-block;
        }
        .icon{
            width: .3rem;
            height: .3rem;
            position: absolute;
            right: 0.2rem
        }
    }
    .itemList {
        width: 100%;
        padding: .2rem;
        .item {
        width: 100%;
        height: 1.4rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .itemLeft {
            width: 85%;
            height: 100%;
            display: flex;
            align-items: center;
            .leftSpan {
            display: inline-block;
            width: 0.2rem;
            text-align: center;
            }
            div {
            p {
                width: 4.54rem;
                height: .4rem;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                font-weight: 700;
            }
            span{
                font-weight: 400;
                font-size: .24rem;
                color: #999;
            }
            margin-left: 0.3rem;
            }
        }
        .itemRight{
            width: 20%;
            height: 100%;
            display: flex;
            // justify-content: space-between;
            align-items: center;
            position: relative;
            .icon{
            fill: #999;
            }
            .bofang{
                position: absolute;
                left: 0;
            }
            .liebiao{
                position: absolute;
                right: 0;
            }
        }
    }
    }
</style>
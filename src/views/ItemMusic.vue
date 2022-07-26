<template>
    <ItemMusicTop :playlist="state.playlist"/>
    <ItemMusicList :itemList="state.itemList" :subscribedCount="state.playlist.subscribedCount"/>
</template>

<script>
import { useRoute } from 'vue-router'
import { onMounted,reactive } from '@vue/runtime-core'
import { getMusicList,getItemList } from '@/request/api/item.js'
import ItemMusicTop from "@/components/item/ItemMusicTop.vue";
import ItemMusicList from "@/components/item/ItemMusicList.vue"
export default {
    setup() {
        const state = reactive({
            playlist:{},
            itemList:[]
        })
        onMounted(async () => {
            let id = useRoute().query.id
            // 获取歌单详情
            let res = await getMusicList(id)
            console.log(res);
            state.playlist = res.data.playlist
            // 获取歌单歌曲
            let result = await getItemList(id)
            console.log(result);
            state.itemList = result.data.songs


            //  防止页面刷新，数据丢失，将数据保存到sessionStorage中
            sessionStorage.setItem("itemDetail", JSON.stringify(state));
            console.log(res);
        })
        return { state }
    },
    components: {
        ItemMusicTop
    }
}
</script>

<style>

</style>
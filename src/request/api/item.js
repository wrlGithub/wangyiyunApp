import service from "..";
// 获取歌单详细页的数据
export function getMusicList(data) {
    return service({
        method:"GET",
        url:`/playlist/detail?id=${data}`
    })
}

// 获取歌曲列表
export function  getItemList(data) {
    return service({
        method:"GET",
        url:`/playlist/track/all?id=${data}&limit=10&offset=0`
    })
}

// 获取歌曲的歌词
export function  getMusicLyric(data) {
    return service({
        method:"GET",
        url:`/lyric?id=${data}`
    })
}

import { getSongUrl } from "../../api/login"


const state = () => {
    return {
        songId:"",
        url:"",
        songInfo :{},
        playStatus:false,//歌曲播放状态
        playTimeOut:0,//歌曲剩余波峰时间
    }
}

const getters = {
    getSongurl: (state:any) => state.url,
    getSongInfo:(state:any) => state.songInfo,
    getPlayTimeOut:(state:any) => state.playTimeOut,
    getPlayStatus:(state:any) => state.playStatus,
    getSongId:(state:any) => state.songId
}

const actions = {
    // getSongUrl:(state,id) => {
    //     getSongUrl(`/song/url?id=${id}`,{}).then(res =>{
    //         console.log(res)
    //         if(res.data.code == 200) {
    //             state.commit('setSongUrl',res.data.data[0].url)
    //         }
    //     })
    // }
}

const mutations = {
    setSongInfo : (state:any,info:any) =>{
        state.songInfo = info
    },
    setSongId :(state:any,songid:string) => {
        state.songId = songid
    },
    setSongUrl :(state:any,url:string) =>{
        state.url = url
    },
    setPlayTimeOut:(state:any,time:any) =>{
        state.playTimeOut = time
    },
    setPlayStatus: (state:any,status:any)=>{
        state.playStatus = status
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
  }
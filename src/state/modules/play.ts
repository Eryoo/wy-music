
import { getSongUrl } from "../../api/login"


const state = () => {
    return {
        songId:"",
        url:"",
        songInfo :{}
    }
}

const getters = {
    getSongurl: (state:any) => state.url,
    getSongInfo:(state:any) => state.songInfo
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
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
  }
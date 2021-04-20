import { POST,GET } from "../axios/index"


export const login = (url:string,params?:object) =>{
    return GET(url , params)
}
// 首页推荐歌单
 export const personalized = (url:string,parmas?:object) =>{
     return GET(url,parmas)
 }
 
//  首页banner
export const banner = (url:string,params?:object) =>{
    return GET(url,params)
}

export const homepage = (url:string,params:object) =>{
    return GET(url,params)
}

// 获取歌单详情
export const playlistDetail = (url:string,params:object) =>{
    return GET(url,params)
}

export const videoTimelineRecommend = (url:string,params:object) => {
    return GET(url,params)
}

export const getSongDetail = (url:string,params:object) =>{
    return GET(url,params)
}

export const getSongUrl = (url:string,params:object) => {
    return GET(url,params)
}
// 首页发现
export const homepageBlockPage = (url:string,params:object) =>{
    return GET(url,params)
}
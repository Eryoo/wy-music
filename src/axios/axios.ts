import axios from "axios"

const instance = axios.create({
    baseURL:"/api",
    timeout:10000,
})

// 请求拦截器

instance.interceptors.request.use(function(config){
    return config
},function(error){
    return Promise.reject(error)
})


// 相应拦截
instance.interceptors.response.use(function(response) {
    return response
},function(error){
    return Promise.reject(error)
})



export default instance
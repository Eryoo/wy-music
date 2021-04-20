import instance from "./axios"


const POST = function(url:string,params:object = {}) : any{
   return instance.request({
        method:"POST",
        url:url,
        data:params
    })
}

const GET =function( url:string,params:object = {}): any{
    return instance.request({
        method:"GET",
        url:url,
        params:params
    })
}

export {
    POST,
    GET    
}
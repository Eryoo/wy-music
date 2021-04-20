export default {
    state : () => {
        return {
            // 底部到行隐藏控制器
            navIsShow : true, 
        }
    },
    getters: {

    },
    actions:{
        
    },
    mutations:{
        setNavIsShow : (state:any,show:any) => {
            state.navIsShow = show
        }
    }
}
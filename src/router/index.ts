
import { createRouter ,createWebHistory} from "vue-router"
import router from "./router"
import store from "../state/index"


 const Router = createRouter({
    history:createWebHistory(),
    routes:router
})

Router.beforeEach((to,from,next) =>{

    if(!to.meta.nav){
        store.commit("setNavIsShow",false)
    }else{
        store.commit("setNavIsShow",true)
    }
    next()
})

export default Router



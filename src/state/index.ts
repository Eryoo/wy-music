import {createStore} from "vuex"

import play from "./modules/play"
import user from "./modules/user"
export default createStore({
    modules:{play,user}
})
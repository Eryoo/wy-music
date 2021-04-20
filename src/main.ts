import { createApp } from 'vue'
import App from './App.vue'
import Router from "./router/index"
import "./utils/rem"
import ant from "vant"
import 'vant/lib/index.css'
import store from "./state/index"
// import vConsole from "vconsole"
// new vConsole();
createApp(App).use(Router).use(store).use(ant).mount('#app')

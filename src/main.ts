import { createApp } from 'vue'
import App from './App.vue'
import router from './routers'
import $axios from './request'
import store from "./store";
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
createApp(App)
.use($axios)
.use(router)
.use(store)
.use(ElementPlus)
.mount('#app')
 
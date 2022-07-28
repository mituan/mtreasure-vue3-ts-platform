import { createApp } from 'vue'
import pinia from "./store/index";
import App from './App.vue'
import router from './router'
import store from './store'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/theme/index.scss'

const  app = createApp(App);

app.use(pinia).use(store).use(router).use(ElementPlus).mount('#app')

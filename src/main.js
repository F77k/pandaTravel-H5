import { createApp } from 'vue'
import App from './App.vue'
import 'normalize.css'
import pinia from './store/index.js'
import router from './router/index.js'
import Vant from 'vant';
import 'vant/lib/index.css';

const app = createApp(App)
app.use(pinia)
app.use(router)
app.use(Vant)
app.mount('#app')

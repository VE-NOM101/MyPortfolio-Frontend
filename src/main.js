import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueSmoothScroll from 'vue3-smooth-scroll'
import { MotionPlugin } from '@vueuse/motion'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueSmoothScroll)
app.use(MotionPlugin)

app.mount('#app')

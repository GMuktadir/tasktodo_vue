import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia }   from 'pinia'
import {toast} from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
import 'bootstrap/dist/css/bootstrap.min.css'


const app = createApp(App)

app.use(toast, {
    autoClose: 3000,
    position: "top-right"
})
app.use(createPinia())
app.use(router)
app.mount('#app')


// createApp(App).mount('#app')

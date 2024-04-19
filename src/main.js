import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/js/bootstrap.js'
// import 'bootstrap-vue/dist/bootstrap-vue.js'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

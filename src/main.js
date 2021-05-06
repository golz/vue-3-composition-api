import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import '@/assets/scss/main.scss'

// require alternative
import('@api-mock')
createApp(App)
  .use(store)
  .use(router)
  .mount('#app')

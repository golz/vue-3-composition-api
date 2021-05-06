import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/scss/main.scss'

import('@api-mock')

createApp(App)
  .use(store)
  .use(router)
  .mount('#app')

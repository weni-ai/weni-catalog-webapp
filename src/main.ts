import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import { UnnnicSystem } from './plugins/UnnnicSystem';
import { i18n } from './locales'


const pinia = createPinia();
const app = createApp(App);

app.use(pinia)
app.use(router)
app.use(i18n)
app.use(UnnnicSystem)

app.mount('#app')

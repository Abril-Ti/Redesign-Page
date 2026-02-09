import { createApp } from 'vue'
import { createPinia } from 'pinia'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Animaciones
import AOS from 'aos'
import 'aos/dist/aos.css'

// App
import App from './App.vue'
import router from './router'

// Estilos globales
import './assets/main.css'

// i18n
import i18n from './components/i18n'

// Crear instancia de Vue
const app = createApp(App)

// Vuetify
const vuetify = createVuetify({
  components,
  directives,
})

// Idioma
app.config.globalProperties.$setLang = (lang) => {
  i18n.global.locale.value = lang
}

// Plugins
app
  .use(createPinia())
  .use(router)
  .use(vuetify)
  .use(i18n)
  .mount('#app')

// Animaciones
AOS.init({
  duration: 1000,
  once: true,
})
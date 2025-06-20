//import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import AOS from 'aos';
import 'aos/dist/aos.css';

import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

const vuetify = createVuetify({
    components,
    directives,
});


app.use(createPinia())
app.use(router)
app.use(vuetify)

app.mount('#app');

AOS.init({
  duration: 1000, // duración de la animación
  once: true,     // solo animar una vez
});

import './assets/main.css'
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import Services from './components/Services.vue'
import About from './components/About.vue'
import Projects from './components/Projects.vue'
import Footer from './components/Footer.vue'

import { createApp, ref } from 'vue'
import App from './App.vue'
import axios from 'axios'

const app = createApp(App)

app.config.globalProperties.$axios = axios


app.component('Header', Header)
app.component('Hero', Hero)
app.component('Services', Services)
app.component('About', About)
app.component('Projects', Projects)
app.component('Footer', Footer)

app.mount('#app')

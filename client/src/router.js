import VueRouter from 'vue-router'
import Home from './pages/Home'
import AboutMe from './pages/AboutMe'

const routes = [
  { path: '/', component: Home, name: 'Home' },
  { path: '/aboutme', component: AboutMe, name: 'AboutMe' }
]

export default new VueRouter({ routes, mode: 'history' })

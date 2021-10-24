import VueRouter from 'vue-router'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'

const routes = [
  { path: '/', component: Home, name: 'Home' },
  { path: '/aboutus', component: AboutUs, name: 'AboutUs' }
]

export default new VueRouter({ routes, mode: 'history' })

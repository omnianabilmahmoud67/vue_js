import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Contactus from '../views/Contactus.vue'
import services from '../views/services.vue'
// new
import OurCustomer from '..//views/OurCustomer.vue'
// end new
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  
 {
   path: '/Contactus',
    name: 'Contactus',
    component: Contactus
  },
  {
    path: '/services',
     name: 'services',
     component: services
   },
   {
    path: '/ourcustomer',
     name: 'ourcustomer',
     component: OurCustomer
   }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

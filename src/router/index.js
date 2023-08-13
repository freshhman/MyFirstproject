import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/MyHome.vue'
import About from '@/views/MyAbout.vue'
import Picbox from '@/views/MyPicbox.vue'
import Time from '@/views/MyTimescroll.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home },
    { path: '/about', component: About },
    { path: '/time', component: Time },
    { path: '/picbox', component: Picbox }
  ]
})

export default router

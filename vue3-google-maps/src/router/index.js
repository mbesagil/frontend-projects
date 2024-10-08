import Vue from 'vue'
import Router from 'vue-router'
import Usermaps from '@/maps/Usermaps'
import CloseBuy from '@/maps/CloseBuy'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Usermaps
    },
    {
      path: '/close-buy',
      component: CloseBuy
    }
  ]
})

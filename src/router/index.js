import Vue from 'vue'
import Router from 'vue-router'
import Goods from '@/components/goods/Goods'
import Ratings from '@/components/ratings/Ratings'
import Seller from '@/components/seller/Seller'
import '../common/stylus/index.styl'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/goods',
      name: 'Goods',
      component: Goods
    }, {
      path: '/ratings',
      name: 'Ratings',
      component: Ratings
    }, {
      path: '/seller',
      name: 'Seller',
      component: Seller
    }
  ]
})

// $router.push('/goods')

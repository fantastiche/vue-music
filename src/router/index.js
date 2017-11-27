import Vue from 'vue'
import Router from 'vue-router'
import Rank from '../view/rank/rank.vue'
import Recommend from '../view/recommend/recommend.vue'
import Search from '../view/search/search.vue'
import Singer from '../view/singer/singer.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      component: Recommend
    },
    {
      path: '/rank',
      component: Rank
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/singer',
      component: Singer
    }
  ]
})

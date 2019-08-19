import Vue from 'vue'
import Router from 'vue-router'
import Manage from './views/manage.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Manage,
      children: [
        {
          path: 'inware',
          name: 'InWare',
          component: () => import(/* webpackChunkName: "InWare" */ './views/inWare/inWare.vue')
        }, {
          path: 'outware',
          name: 'OutWare',
          component: () => import(/* webpackChunkName: "OutWare" */ './views/outWare/outWare.vue')
        }, {
          path: 'inquery',
          name: 'InQuery',
          component: () => import(/* webpackChunkName: "InQuery" */ './views/inQuery/inQuery.vue')
        }, {
          path: 'outquery',
          name: 'OutQuery',
          component: () => import(/* webpackChunkName: "OutQuery" */ './views/outQuery/outQuery.vue')
        }
      ]
    }
  ]
})

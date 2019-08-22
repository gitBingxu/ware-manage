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
      name: 'manage',
      component: Manage,
      children: [{
        path: 'inware',
        name: 'InWare',
        component: () => import(/* webpackChunkName: "InWare" */ './views/inOutWare/inWare.vue')
      }, {
        path: '',
        name: 'OutWare',
        component: () => import(/* webpackChunkName: "OutWare" */ './views/inOutWare/outWare.vue')
      }, {
        path: 'inquery',
        name: 'InQuery',
        component: () => import(/* webpackChunkName: "InQuery" */ './views/query/inQuery.vue')
      }, {
        path: 'outquery',
        name: 'OutQuery',
        component: () => import(/* webpackChunkName: "OutQuery" */ './views/query/outQuery.vue')
      }]
    }, {
      path: '/login',
      name: 'LogORreg',
      component: () => import(/* webpackChunkName: "LogORreg" */ './views/logORreg/logORreg.vue'),
      children: [{
        path: '',
        name: 'Login',
        component: () => import(/* webpackChunkName: "Login" */ './views/logORreg/components/login.vue')
      }, {
        path: 'reg',
        name: 'Reg',
        component: () => import(/* webpackChunkName: "Reg" */ './views/logORreg/components/reg.vue')
      }, {
        path: 'find',
        name: 'FindPass',
        component: () => import(/* webpackChunkName: "FindPass" */ './views/logORreg/components/findPass.vue')
      }]
    }
  ]
})

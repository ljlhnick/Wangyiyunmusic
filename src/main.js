// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import axios from 'axios'
Vue.prototype.$http = axios

import Layout from './components/layout'
import MyMusic from './components/mymusic'
import Station from './components/station'
import Musicer from './components/musicer'

import SongFirst from './components/songSheet/songFirst'
import MyFirst from './components/songSheet/myFirst'
import PlayDetail from './components/songSheet/playDetail'
import SongerFirst from './components/songSheet/songerFirst'
import StationFirst from './components/songSheet/stationFirst'
Vue.config.productionTip = false

const router=new VueRouter({
  routes:[
    {
  	  path:'/',
  	  component:Layout,
    },
    {
      path:'/mymusic',
      component:MyMusic
    },
    {
      path:'/station',
      component:Station
    },
    {
      path:'/musicer',
      component:Musicer
    },
    {
      path:'/songFirst',
      component:SongFirst
    },
    {
      path:'/playDetail',
      component:PlayDetail
    },
    {
      path:'/myFirst',
      component:MyFirst
    },
    {
      path:'/songerFirst',
      component:SongerFirst
    },
    {
      path:'/staionFirst',
      component:StationFirst
    }
  ]
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    sections:[
      {id:0, title:'Home',      path:"/"},
      {id:1, title:'Products',  path:"/products"},
      {id:2, title:'Hiring',    path:"/hiring"},
      {id:3, title:'About',     path:"/about"},
      {id:4, title:'Contact',   path:"/contact"},
      {id:5, title:'Register',   path:"/register"}
    ],
    size: true
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})

import Vue from 'vue'
import Router from 'vue-router'

import Root from '@/components/Root'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Songs from '@/components/Songs'
import CreateSong from '@/components/CreateSong'
import ViewSong from '@/components/ViewSong/Index'
import EditSong from '@/components/EditSong'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Root',
      component: Root
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/songs',
      name: 'Songs',
      component: Songs
    },
    {
      path: '/songs/create',
      name: 'CreateSong',
      component: CreateSong
    },
    {
      path: '/songs/:songId',
      name: 'ViewSong',
      component: ViewSong
    },
    {
      path: '/songs/:songId/edit',
      name: 'EditSong',
      component: EditSong
    }
  ]
})

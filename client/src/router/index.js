import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Lobby from '../views/Lobby.vue'
import GameBoard from '../views/GameBoard.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/lobby',
    name: 'Lobby',
    component: Lobby,
    // path: '/testplayer',
    // name: 'test',
    // component: TestPlayer
  },
  {
    path: '/gameboard',
    name: 'GameBoard',
    component: GameBoard
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
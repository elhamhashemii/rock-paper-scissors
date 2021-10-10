import { createRouter, createWebHistory } from 'vue-router'
import StarterCard from '../views/StarterCard.vue'
// import Game from '../views/Game.vue'
import GameStarter from '../views/GameStarter.vue'
// import randomRes from '../views/randomRes.vue'
import Test from '../views/Test.vue'
import Result from '../views/Result.vue'

const routes = [
    {
        path: '/',
        name: 'starter-card',
        component: StarterCard
    },
  {
    path: '/game',
    name: 'GameStarter',
    component: GameStarter
  },
  {
    path: '/game/result',
    name: 'result',
    component: Result
  },
  {
    path: '/test',
    name: 'test',
    component: Test
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import help from '../views/help.vue';
import about from '../views/about.vue';
import blog from '../views/blog.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
  component: about
  },
  {
    path:'/help',
    name:'help',
    component:help
  },
  {
    path:'/blog',
    name:'blog',
    component:blog
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

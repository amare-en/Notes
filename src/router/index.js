import { createRouter, createWebHistory } from 'vue-router'
import Notes from '../views/Notes.vue'
//import posts from '../vi/posts.vue'
//import SignUp from "../views/SignUp.vue"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
        path: '/notes',
        name: 'notes',
        component: Notes
      }]
    })
    export default router
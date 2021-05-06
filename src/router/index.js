import { createRouter, createWebHistory } from 'vue-router'

const MyTask = () => import(
  /* webpackChunkName: "p-my-task" */ '@/pages/MyTask.vue')

export const routes = [
  { path: '/', component: MyTask }
]

export default createRouter({
  history: createWebHistory(),
  routes
})

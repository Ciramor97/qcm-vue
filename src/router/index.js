import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import InitialProblem from '../pages/InitialProblem.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/init/:id?',
      name: 'initial',
      component: InitialProblem,
    },
  ],
});

export default router;

import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import QuizPage from '../pages/QuizPage.vue';
import Summary from '../pages/Summary.vue';
import UserInfos from '../pages/UserInfos.vue';
import CraftsmanPage from '../pages/CraftsmanPage.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/quiz/:id?',
      name: 'quiz',
      component: QuizPage,
    },
    {
      path: '/summary',
      name: 'summary',
      component: Summary,
    },
    {
      path: '/user-infos',
      name: 'userInfos',
      component: UserInfos,
    },
    {
      path: '/craftsman',
      name: 'craftsman',
      component: CraftsmanPage,
    },
  ],
});

export default router;

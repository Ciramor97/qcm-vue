import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import QuizPage from '../pages/QuizPage.vue';
import Summary from '../pages/Summary.vue';
import UserInfos from '../pages/UserInfos.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
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
  ],
});

export default router;

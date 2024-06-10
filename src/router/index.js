import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import QuizPage from '../pages/QuizPage.vue';
import SummaryPage from '../pages/SummaryPage.vue';
import AddUserInfosPage from '../pages/AddUserInfosPage.vue';
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
      path: '/quiz/:id',
      name: 'quiz',
      component: QuizPage,
    },
    {
      path: '/summary',
      name: 'summary',
      component: SummaryPage,
    },
    {
      path: '/add-user',
      name: 'user-infos.add',
      component: AddUserInfosPage,
    },
    {
      path: '/craftsman',
      name: 'craftsman',
      component: CraftsmanPage,
    },
  ],
});

export default router;

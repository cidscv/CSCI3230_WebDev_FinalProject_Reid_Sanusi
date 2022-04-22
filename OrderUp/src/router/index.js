import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AppHeader from "../components/AppHeader.vue";
import LoginView from '../views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: { header: true },
    },{
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: { header: false },
    },
  ],
});


export default router;
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import ContactUsView from '../views/ContactUsView.vue'
import AccountView from '../views/AccountView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: { header: true },
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
      meta: { header: false },
    },
    {
      path: "/register",
      name: "register",
      component: RegisterView,
      meta: { header: false },
    },{
      path: '/contact',
      name: 'contact',
      component: ContactUsView,
      meta: { header: false },
    },{
      path: '/account',
      name: 'account',
      component: AccountView,
      meta: { header: true },
    }
  ],
});

export default router;

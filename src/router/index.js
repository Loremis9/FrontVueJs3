import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Tables from "../views/Tables.vue";
import Billing from "../views/Billing.vue";
import RTL from "../views/Rtl.vue";
import Notifications from "../views/Notifications.vue";
import Profile from "../views/Profile.vue";
import Connexion from "../views/Connexion.vue";
import Password from "../views/Password.vue";
import Main from "../views/Administration/Main.vue";
// import {getCurrentInstance} from "vue";
const routes = [
  {
    path: '/connexion',
    name: 'connexion',
    component: Connexion,

  },{
    path: "/password",
    component: Password,
  },
  {
    path:'/index',
    name:'index',
    component: Main,
  },
  {
    path: "/",
    name: "/",
    redirect: "/index",
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    meta: { requiresAuth: true }
  },
  {
    path: "/tables",
    name: "Tables",
    component: Tables,
    meta: { requiresAuth: true }
  },
  {
    path: "/billing",
    name: "Billing",
    component: Billing,
    meta: { requiresAuth: true }
  },
  {
    path: "/rtl-page",
    name: "RTL",
    component: RTL,
    meta: { requiresAuth: true }
  },
  {
    path: "/notifications",
    name: "Notifications",
    component: Notifications,
    meta: { requiresAuth: true }
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    meta: { requiresAuth: true }
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
});

router.beforeEach((to, from, next) => {
  // const isAuthenticated = getCurrentInstance().appContext.config.globalProperties.$pinia.state.auth.isLoggedIn;
  const authenticate = true
  if (to.meta.requiresAuth && !authenticate ) {
    // Rediriger vers la page de connexion si l'utilisateur n'est pas authentifié
    next({ path: '/connexion', query: { redirect: to.fullPath } });
  } else {
    // Autoriser l'accès à la route demandée
    next();
  }
});
export default router;

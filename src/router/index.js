import { createRouter, createWebHistory } from "vue-router";
import Notifications from "../views/Notifications.vue";
import Profile from "../views/Profile.vue";
import {useAuthStore} from "@/store/auth";
import SignIn from "@/views/SignIn.vue";
import Match from "@/views/components/Public/Match.vue";
import Main from "@/views/components/Public/Main.vue";
import MatchRevision from "@/views/Administration/MatchRevision.vue";
import Tournoi from "@/views/Administration/Tournoi.vue";
import AjouterMatch from "@/views/Administration/AjouterMatch.vue";

const routes = [
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
    path:'/signIn',
    name:'signIn',
    component: SignIn,
  },
  {
    path: "/match",
    name: "Match",
    component: AjouterMatch,
    meta: { requiresAuth: true }
  },{
    path: "/matchRevision",
    name: "matchRevision",
    component: MatchRevision,
    meta: { requiresAuth: true }
  },
  {
    path: "/tournoi",
    name: "Tournoi",
    component: Tournoi,
    meta: { requiresAuth: true }
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('isLoggedIn') ?? false

  if(to.path === "/signIn" && isAuthenticated){
    next({ path: '/match', query: { redirect: to.fullPath } });
  }
  if (to.meta.requiresAuth && isAuthenticated.isLoggedIn ) {
    // Rediriger vers la page de connexion si l'utilisateur n'est pas authentifié
    next({ path: '/signIn', query: { redirect: to.fullPath } });
  } else {
    // Autoriser l'accès à la route demandée
    next();
  }
});
export default router;

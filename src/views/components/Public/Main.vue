<script setup>
import {onBeforeMount, onBeforeUnmount, onMounted, ref} from "vue";
import {useDataStore} from "@/store/publicMatchStore";
import { useStore} from "vuex";
import Match from "@/views/components/Public/Match.vue";
import router from "@/router";
import {useAuthStore} from "../../../store/auth";

const terminate = ref(true)
let obj = ref(null)
let allMatch = ref(null)
const store = useStore()
const terminateMatch= ref(null)
const liveMatch = ref(null)
const disconnectWithError = ref('')
onMounted(async ()=> {

  await publicStore.handleTerminateMatch()
  await publicStore.handleLiveMatch()

  allMatch.value = publicStore.handleAllMatch;
  terminateMatch.value = publicStore.handleTerminate;
  liveMatch.value = publicStore.handleLive;
  disconnectWithError.value = authStore.disconnect;
})
const handleTerminate =()=>{
  terminate.value = !terminate.value
}
const goToMatch = ()=>{
  router.push("/match")
}
const connect = ()=>{
  router.push("/signIn")
}
const isAuthenticated = ref(localStorage.getItem('isLoggedIn') ?? false)

onBeforeMount(()=>{
    store.commit('toggleEveryDisplay')
    store.commit('toggleHideConfig')
  publicStore.connect()
})
onBeforeUnmount(()=>{
  store.commit('toggleEveryDisplay')
  store.commit('toggleHideConfig')
})

const publicStore = useDataStore()
const authStore = useAuthStore()
publicStore.$subscribe((mutation, state)  => {
  terminateMatch.value = state.liveMatch;
  liveMatch.value = state.terminateMatch;
});
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark navbar-custom">
    <div class="container-fluid">
      <div v-if="disconnectedWitherror">
      <material-alert class="font-weight-light" color="primary" dismissible>
              <span class="text-sm"
              >A simple primary alert with
                <a href="javascript:;" class="alert-link text-white"
                >{{disconnectWithError.value ?? ''}}</a
                >. Give it a click if you like.</span
              >
      </material-alert>
      </div>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#" @click="connect" v-if="!isAuthenticated">Login</a>
            <a class="nav-link" href="#" @click="goToMatch" v-if="isAuthenticated">Go to Match</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <!-- Bouton de commutation de thème -->
  <button id="theme-switch" v-if="terminate" class="btn btn-primary position-fixed top-0 end-0 m-4" @click="handleTerminate">Match Terminer </button>
  <button id="theme-switch" v-if="!terminate" class="btn btn-primary position-fixed top-0 end-0 m-4" @click="handleTerminate">Match Live </button>
  <!-- Contenu principal -->
  <div class="container">
    <div v-if="terminate && terminateMatch !== []">
      <Match v-for="(item, index) in terminateMatch"
                   :item="item"
                   :index="index"
                   :key="item.id" :Equipe1="item.equipe1" :Equipe2="item.equipe2"
             :dateDebut="item.date_debut"  :Score="item.score" :Tournoi="item.tournoi" :Picture="item.photo"></Match>

    </div>
    <div v-if="!terminate && liveMatch !== []">
      <Match v-for="(item, index) in liveMatch"
                   :item="item"
                   :index="index"
                   :key="item.id" id="item.id" :Equipe1="item.equipe1" :Equipe2="item.equipe2"
             :dateDebut="item.date_debut"  :Score="item.score" :Tournoi="item.tournoi" :Picture="item.photo"></Match>
    </div>
  </div>
</template>

<style scoped>

/* Styles généraux */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f8f9fa;
  color: #333;
}

/* Barre de navigation */
nav {
  background-color: #343a40;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
}

nav h1 {
  margin: 0;
  font-size: 24px;
}

nav ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
}

nav ul li {
  margin-right: 20px;
}

nav ul li a {
  text-decoration: none;
  color: #fff;
  font-weight: bold;
}

/* Bouton de commutation */
#theme-switch {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 8px 12px;
  border-radius: 5px;
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
}

/* Contenu principal */
.container {
  max-width: 1200px;
  margin: 20px auto;
  padding: 0 20px;
}

/* Exemple de styles pour le contenu */
.article {
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  margin-bottom: 20px;
}
</style>
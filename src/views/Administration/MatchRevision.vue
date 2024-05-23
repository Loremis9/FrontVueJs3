<script setup>

import {onMounted, ref} from "vue";
import {useDataStore} from "@/store/publicMatchStore";
import LiveMatch from "@/views/Administration/LiveMatch.vue";
const liveMatchs = ref(null)

onMounted(async ()=>{
  await publicStore.handleLiveMatch()
  liveMatchs.value = publicStore.handleLive ?? []
  console.log(liveMatchs.value)
})

const publicStore = useDataStore()
publicStore.$subscribe((mutation, state)  => {
  liveMatchs.value = state.liveMatch;
});
</script>

<template>
<div v-if="liveMatchs !== []">
  <LiveMatch v-for="(item, index) in liveMatchs"
         :item="item"
         :index="index"
         :key="item.id" :id="item.id" :Equipe1="item.equipe1" :Equipe2="item.equipe2"
         :DateDebut="item.date_debut"  :Score="item.score" :Tournoi="item.tournoi" :Picture="item.photo"></LiveMatch>
</div>
</template>

<style scoped>

</style>
<script setup>
import {publicMatch} from "@/callAPI/publicMatch";
import {onMounted, ref} from "vue";
import {useDataStore} from "@/store/publicMatchStore";
import {useAuthStore} from "@/store/auth";
import {useAgentStore} from "@/store/agentStore";
import Match from "@/views/components/Public/Match.vue";
import MatchDetails from "@/views/components/Public/MatchDetails.vue";
import AjouterMatch from "@/views/Administration/AjouterMatch.vue";
let matche = {

  "score": "1-1",
  "termine": true,
  "isRevision" : true,
  "dateRevision": "2024-05-09T09:20:34.212Z"
}

let obj = ref(null)
let allMatch = ref(null)
onMounted(async ()=>{
  // let l = publicMatch.prototype.getMatchTerminate()
  //  id.value = await l.then(data =>{
  //   return data
  // })
  // id.value.map(data => console.log(data.id))


  await publicStore.handleTerminateMatch()
  await publicStore.handleLiveMatch()
  await agent.getDivisions()
  await agent.createRevesionMatches("e114f383-d801-4f73-bc01-426b10d6ba95",matche)
  await userStore.authenticate("john.doe@example.com","password123")
  console.log("appel")
  console.log(publicStore.terminateMatch ?? '')
  console.log(publicStore.handleAllMatch)
  obj.value = publicStore.terminateMatch ?? ''
  allMatch.value  = publicStore.handleAllMatch
  console.log(agent.division)

  console.log(userStore.showtoken)
})
const userStore = useAuthStore()
const publicStore = useDataStore()
const agent = useAgentStore()
</script>

<template>
<div>
  <p>main</p>
  <ul>
    <li v-for="(item, index) in obj" :key="index">
      <p>Index: {{ index }}</p>
      <p>id: {{ item.id }}</p>
      <p>score: {{ item.score }}</p>
      <p>photo: {{ item.picture ?? 'aucune photo'}}</p>
    </li>
  </ul>
  <Match />
  <MatchDetails/>
  <AjouterMatch/>
</div>

</template>

<style scoped>

</style>
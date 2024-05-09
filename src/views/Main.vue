<script setup>




import {publicMatch} from "@/callAPI/publicMatch";
import {onMounted, ref} from "vue";
import data from "bootstrap/js/src/dom/data";



let id = ref(null)
onMounted(async ()=>{
  let l = publicMatch.prototype.getMatchTerminate()
   id.value = await l.then(data =>{
    return data
  })

  console.log("appel")
  id.value.map(data => console.log(data.id))
})





</script>

<template>
<div>
  <p>main</p>
  <ul>
    <li v-for="(item, index) in id" :key="index">
      <p>Index: {{ index }}</p>
      <p>id: {{ item.id }}</p>
      <p>score: {{ item.score }}</p>
      <p>photo: {{ item.picture ?? 'aucune photo'}}</p>
    </li>
  </ul>
</div>

</template>

<style scoped>

</style>
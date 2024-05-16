<script setup>

import Match from "@/views/components/Public/Match.vue";
import {ref} from "vue";

const terminateMatch = ref('')
const liveMatch = ref('')
const terminate = ref(false)
</script>

<template >
<div v-if="terminate">

    <Match v-for="(item, index) in terminateMatch"
           :item="item"
           :index="index"
           :key="item.id" />


</div>
<div v-if="!terminate">
  <Match v-for="(item, index) in liveMatch"
         :item="item"
         :index="index"
         :key="item.id" />
</div>

  <button type="button" :terminate> Live </button>
</template>

<style scoped>

</style>
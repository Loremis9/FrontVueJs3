<script setup>

// Variables réactives pour stocker les données du formulaire
import {onMounted, ref} from "vue";
import {useAgentStore} from "@/store/agentStore";

const equipe1 = ref('');
const equipe2 = ref('');
const date = ref('');
const adresse = ref('');
const tournoi = ref("");
let photo = ref("");
const message = ref(null)
// Fonction pour ajouter le match
const ajouterMatch = async () => {

  const nouveauMatch = {
    equipe1: equipe1.value,
    equipe2: equipe2.value,
    dateDebut: date.value,
    adresse: adresse.value,
    tournoi: tournoi.value,
    photo : photo.value
  };
   await agent.createMatches(nouveauMatch)

  // Réinitialiser les champs après l'ajout du match
  equipe1.value = '';
  equipe2.value = '';
  date.value = '';
  adresse.value = '';
  photo.value = null;
};
const agent = useAgentStore()
</script>

<template>
  <div class="container mt-5">
    <h2 class="mb-4">Ajouter un Match de Football</h2>
<!--    <div v-if="this.message" class="alert alert-danger" role="alert">-->
<!--      {{ this.message }}-->
<!--    </div>-->
    <!-- Formulaire d'ajout de match -->
    <form @submit.prevent="ajouterMatch">
      <div class="form-group">
        <label for="equipe1">Équipe 1:</label>
        <input type="text" class="form-control" id="equipe1" required placeholder="Entrez le nom de l'équipe 1" v-model="equipe1">
      </div>
      <div class="form-group">
        <label for="equipe2">Équipe 2:</label>
        <input type="text" class="form-control" id="equipe2" required placeholder="Entrez le nom de l'équipe 2" v-model="equipe2">
      </div>
      <div class="form-group">
        <label for="date">Date et Heure:</label>
        <input type="datetime-local" class="form-control" id="date" v-model="date" required>
      </div>
      <div class="form-group">
        <label for="adresse">Adresse:</label>
        <textarea class="form-control" id="adresse" rows="3" required placeholder="Entrez l'adresse du match" v-model="adresse"></textarea>
      </div>
      <div class="form-group">
        <label for="tournoi">Tournoi:</label>
        <input type="text" class="form-control" id="tournoi"  placeholder="Entrez le nom du tournoi" v-model="tournoi">
      </div>
      <div class="form-group" v-if="photo !== null">
        <label for="photo">Photo:</label>
        <input type="text" class="form-control" id="photo" v-model="photo">
      </div>

      <button type="submit" class="btn btn-primary">Ajouter le Match</button>
    </form>
  </div>

</template>

<style scoped>

</style>
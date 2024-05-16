<script setup>

// Variables réactives pour stocker les données du formulaire
import {ref} from "vue";

const equipe1 = ref('');
const equipe2 = ref('');
const date = ref('');
const adresse = ref('');
const tournoi = ref("");
let photo = null;

// Fonction pour ajouter le match
const ajouterMatch = () => {
  // Construire l'objet match avec les données du formulaire
  const nouveauMatch = {
    equipe1: equipe1.value,
    equipe2: equipe2.value,
    date: date.value,
    adresse: adresse.value,
    photo: photo,
    tournoi: tournoi.value
  };

  // Ici, vous pouvez envoyer les données du match à votre backend ou effectuer d'autres traitements
  console.log('Nouveau match:', nouveauMatch);

  // Réinitialiser les champs après l'ajout du match
  equipe1.value = '';
  equipe2.value = '';
  date.value = '';
  adresse.value = '';
  photo = null;
};




</script>

<template>
  <div class="container">
    <h2 class="mb-4">Ajouter un Match de Football</h2>

    <!-- Formulaire d'ajout de match -->
    <form @submit.prevent="ajouterMatch">
      <div class="form-group">
        <label for="equipe1">Équipe 1:</label>
        <input v-model="equipe1" type="text" class="form-control" id="equipe1" required>
      </div>
      <div class="form-group">
        <label for="equipe2">Équipe 2:</label>
        <input v-model="equipe2" type="text" class="form-control" id="equipe2" required>
      </div>
      <div class="form-group">
        <label for="date">Date et Heure:</label>
        <input v-model="date" type="datetime-local" class="form-control" id="date" required>
      </div>
      <div class="form-group">
        <label for="adresse">Adresse:</label>
        <textarea v-model="adresse" class="form-control" id="adresse" rows="3" required></textarea>
      </div>
      <div class="form-group">
        <label for="tournoi">Tournoi:</label>
        <textarea v-model="tournoi" class="form-control" id="tournoi" rows="3" required></textarea>
      </div>

      <div class="form-group">
        <label for="photo">Photo:</label>
        <input type="file" class="form-control-file" id="photo" @change="handlePhotoChange">
      </div>

      <button type="submit" class="btn btn-primary">Ajouter le Match</button>
    </form>
  </div>
</template>

<style scoped>

</style>
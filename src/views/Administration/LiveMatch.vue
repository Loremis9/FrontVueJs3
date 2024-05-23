<template>
  <br>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="match-card">
          <h1 class="text-center">Match de Football</h1>
          <div class="product-image">
            <div v-if="Picture === 'null' || Picture === '' ">
              <img src="https://cdn.pixabay.com/photo/2016/07/09/17/51/lille-1506570_640.jpg" alt="Image du match" id="imageFoot" />
            </div>
            <div v-else>
              <img :src="Picture" alt="Image du match" id="imageFoot"/>
            </div>
          </div>
          <hr>
          <div class="row">
            <div class="col-md-6">
              <p><strong>Équipe à domicile:</strong>  <input type="text" v-model="Equipe" ></p>
              <p><strong>Date:</strong> {{ matchDate }}</p>
            </div>
            <div class="col-md-6">


              <p><strong>Équipe visiteuse:</strong>  <input type="text" v-model="EquipeAdverse" ></p>
              <p><strong>Heure:</strong> {{ matchHour }}</p>
            </div>
          </div>
          <hr>
          <!-- Affichage du score en gros -->
          <div class="score" style="cursor: pointer">{{ score }}</div>
          <!-- Formulaire pour changer le score et marquer le match comme terminé -->
          <form @submit.prevent="createRevision">
            <div class="form-group">
              <label for="nouveauScore">Nouveau Score:</label>
              <input type="text" class="form-control" id="nouveauScore" v-model="nouveauScore" required>
            </div>
            <!-- Case à cocher pour marquer le match comme terminé -->
            <div class="form-check">
              <input type="checkbox" class="form-check-input" id="matchTermine" v-model="matchTermine">
              <label class="form-check-label" for="matchTermine">Match Terminé</label>
              <input type="checkbox" class="form-check-input" id="isRevision" v-model="isRevision">
              <label class="form-check-label" for="isRevision">isRevision</label>
            </div>
            <button type="submit" class="btn btn-primary">Envoyer</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps } from 'vue';
import { useAgentStore } from "../../store/agentStore";

const props = defineProps({
  id: String,
  Equipe1: String,
  Equipe2: String,
  DateDebut: Number,
  Division: String,
  Score: String,
  Picture: String
});

const matchDate = new Date(props.DateDebut).toLocaleDateString();
const matchHour = new Date(props.DateDebut).getHours() + ':' + new Date(props.DateDebut).getMinutes();


const Equipe = ref(props.Equipe1)
const EquipeAdverse= ref(props.Equipe2)
const nouveauScore = ref(props.Score);
const matchTermine = ref(false);
const score = ref(props.Score);
const isRevision = ref(false);

const agent = useAgentStore();

const createRevision = async () => {
  const revision = {
    score: nouveauScore.value,
    termine: matchTermine.value,
    isRevision: isRevision.value,
    dateRevision: Date.now()
  };
  await agent.createRevesionMatches(props.id, revision);
};
</script>

<style scoped>
/* Styles supplémentaires */
body {
  background-color: #343a40; /* Couleur de fond sombre */
  color: #ffffff; /* Couleur de texte blanche */
  padding: 20px;
}

.match-card {
  background-color: #212529; /* Couleur de fond plus foncée pour la carte */
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.3); /* Légère ombre plus prononcée */
}

h1 {
  color: #17a2b8; /* Couleur bleue cyan pour le titre */
}

p {
  font-size: 18px;
}

.score {
  font-size: 72px; /* Taille de police plus grande pour le score */
  font-weight: bold;
  text-align: center;
  margin-top: 20px;
  color: #dc3545; /* Couleur rouge pour le score */
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5); /* Ombre portée pour le score */
}

#imageFoot {
  width: 100%;
  height: 80%;
}
</style>

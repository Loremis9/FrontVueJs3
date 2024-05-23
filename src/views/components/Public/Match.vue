<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="match-card">
          <h1 class="text-center">Match de Football</h1>
          <div class="product-image">
            <div v-if="Picture === 'null' || Picture === ''" id="imageFoot">
              <img src="https://cdn.pixabay.com/photo/2016/07/09/17/51/lille-1506570_640.jpg" alt="Image du match" />
            </div>
            <div v-else id="imageFoot">
              <img src="{{Picture}}" alt="Image du match" />
            </div>
          </div>
          <hr>
          <div class="row">
            <div class="col-md-6">
              <p><strong>Équipe à domicile:</strong> {{ Equipe1 }}</p>

            </div>
            <div class="col-md-6">
              <p><strong>Équipe visiteuse:</strong> {{ Equipe2 }}</p>
              <p><strong>Date:</strong> {{ matchDate }}</p>
              <p><strong>Heure:</strong> {{ matchHour }}</p>
            </div>
          </div>
          <hr>
          <!-- Affichage du score en gros -->
          <div class="score"  style="cursor: pointer">{{ Score }}</div>

        </div>
      </div>
    </div>
  </div>
</template>
<script setup>



const props = defineProps({
  Equipe1:String,
  Equipe2:String,
  // eslint-disable-next-line no-undef
  dateDebut: Number,
  Division:String,
  Score: String,
  Picture: String
})
const matchDate = new Date(props.dateDebut).toLocaleDateString()
const matchHour = new Date(props.dateDebut).getHours() + ':' + new Date(props.dateDebut).getMinutes()
</script>
<style>
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
#imageFoot{
  width: 100%;
  height: 80%;
}
</style>
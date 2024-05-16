<script setup>


defineProps({
  title: String,
  likes: Number
})

</script>

<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="match-card">
          <h1 class="text-center">Match de Football</h1>
          <hr>
          <div class="row">
            <div class="col-md-6">
              <p><strong>Équipe à domicile:</strong>item  </p>
              <p><strong>Stade:</strong> Santiago Bernabéu</p>
              <p><strong>Date:</strong> 25 Mai 2024</p>
            </div>
            <div class="col-md-6">
              <p><strong>Équipe visiteuse:</strong> FC Barcelone</p>
              <p><strong>Heure:</strong> 20h00</p>
              <p><strong>Compétition:</strong> La Liga</p>
            </div>
          </div>
          <hr>
          <p class="text-center">Ne manquez pas ce match épique entre deux rivaux historiques du football!</p>
          <!-- Affichage du score en gros -->
          <div class="score">2 - 1</div>
        </div>
      </div>
    </div>
  </div>
</template>

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
</style>
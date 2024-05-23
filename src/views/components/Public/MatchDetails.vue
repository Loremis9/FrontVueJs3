<script setup>
let matche = {
  "score": "1-1",
  "termine": true,
  "isRevision" : true,
  "dateRevision": "2024-05-09T09:20:34.212Z"
}
</script>

<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="action-card">
          <h1 class="text-center">Action du Match</h1>
          <hr>
          <!-- Affichage du score en gros -->
          <div class="score">2 - 1</div>
          <!-- Affichage de l'action et du commentaire -->
          <div class="action-comment">
            <p><strong>But de Cristiano Ronaldo !</strong></p>
            <p>Ronaldo marque un but à la 75e minute.</p>
          </div>
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
.action-card {
  background-color: #212529; /* Couleur de fond plus foncée pour la carte */
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.3); /* Légère ombre plus prononcée */
  width: 840px; /* Largeur de la carte */
  margin: 0 auto; /* Centrer la carte horizontalement */
}
h1 {
  color: #17a2b8; /* Couleur bleue cyan pour le titre */
}
.score {
  font-size: 72px; /* Taille de police plus grande pour le score */
  font-weight: bold;
  text-align: center;
  color: #dc3545; /* Couleur rouge pour le score */
  margin-bottom: 20px;
}
.action-comment {
  font-size: 20px; /* Taille de police réduite pour le commentaire */
  text-align: center;
  margin-top: 10px;
}
</style>
<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      error: ''
    };
  },
  methods: {
    async passwords() {
         try {
           if (this.password === 'password123!') {
             // Simuler une connexion réussie
             this.$router.push('/connexion'); // Rediriger vers le tableau de bord après connexion
           } else {
             this.error = 'mot de passe incorrect.';
           }
         } catch (error) {
           console.error('Erreur lors de la connexion :', error);
           this.error = 'Une erreur s\'est produite lors de la connexion.';
         }

    }
  }
};
</script>

<template>
  <div class="login-container">
    <h2>Connexion</h2>
    <form @submit.prevent="passwords">

      <div class="form-group">
        <label for="password">Mot de passe :</label>
        <input type="password" id="password" v-model="password" required>
      </div>
      <button type="submit">Se connecter</button>
    </form>
    <p v-if="error" class="error-message">{{ error }}</p>
  </div>
</template>


<style scoped>
.form-group {
  margin-bottom: 15px;
}

.error-message {
  color: red;
  font-size: 14px;
  margin-top: 10px;
}


</style>

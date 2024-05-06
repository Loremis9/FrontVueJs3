
import { defineStore } from 'pinia';
import {Exception} from "sass";


export const useAuthStore  = defineStore({
  id: 'userStore', // Identifiant unique pour le store utilisateur
  state: () => ({
    credential: {
      user: null,
      password: null,
    },
    token: null,
    isLoggedIn: true
  }),
  actions: {
    setUser(user, password) {
      this.credential.user = user;
      this.credential.password = password
      this.isLoggedIn = !!user;
    },
    logout() {
      this.user = null;
      this.isLoggedIn = false;
    },
    handleToken(){
       fetch("http://localhost:8080/api/v1/authentification")
        .then(response => {
          if(response.ok){
            this.token = response.formData()
            this.isLoggedIn = true
          }else{
            throw Exception("mot de passe ou email incorrect")
          }
        })
    }
  },
});


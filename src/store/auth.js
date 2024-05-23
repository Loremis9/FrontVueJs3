
import { defineStore } from 'pinia';

import {user} from "@/callAPI/user";
import router from "@/router";

export const useAuthStore  = defineStore('userStore',{
  state: () => ({
    credential: {
      email: null,
      password: null,
    },
    token: null,
    isLoggedIn: false,
    error: null,
    disconnectedWitherror: false

  }),
  actions: {
    setUser(user, password) {
      this.credential.email = user;
      this.credential.password = password
    },
    logout() {
      localStorage.removeItem("isLoggedIn")
      localStorage.removeItem("token")
      this.isLoggedIn = false;
      this.token = null;
      this.disconnectedWitherror= 'vous avez été déconnectés'
      router.push("/index")
     
    },
    async authenticate(){
      let authenticator =  user.prototype.authenticatifications(this.credential.email,this.credential.password)
       await authenticator.then(response =>{
         if(response.status === 403){
           this.error = 'mauvais credential'
         }
         if (response.error && !response.status){
           console.log(response)
           this.error = response.error
         }
         if(response){
           this.token = response
            console.log("token = "+ response)
           console.log("token +" + this.token)
           this.isLoggedIn = true
           localStorage.setItem("isLoggedIn", this.isLoggedIn)
           localStorage.setItem("token", this.token)
           user.prototype.setBerear()
           router.push('/match')
         }
      })
    },
  },
  getters : {
    showtoken: state => state.token,
    disconnect: state => state.disconnectedWitherror
  }
});


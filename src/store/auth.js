
import { defineStore } from 'pinia';
import { instanceApi} from "@/callAPI/apiInstance";
import {user} from "@/callAPI/user";
import {jwt} from "@/callAPI/jwt";

const  api = instanceApi
export const useAuthStore  = defineStore('userStore',{
  state: () => ({
    credential: {
      email: null,
      password: null,
    },
    token: null,
    isLoggedIn: true
  }),
  actions: {
    setUser(user, password) {
      this.credential.email = user;
      this.credential.password = password
    },
    logout() {
      this.email = null;
      this.isLoggedIn = false;
    },
    async authenticate(email, password){
      let authenticator =  user.prototype.authenticatifications(email,password)
      this.token = await authenticator.then(response => response)
      if(this.token != null){
        this.isLoggedIn = true
      }
      console.log("token" + this.token)
    },
  },
  getters : {
    showtoken: state => state.token
  }
});


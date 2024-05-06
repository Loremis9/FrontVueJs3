<template>
  <div>
    <input type="text" v-model="username" placeholder="Username">
    <input type="password" v-model="password" placeholder="Password">
    <button @click="login">Login</button>
  </div>
</template>

<script>
import { useAuthStore } from '@/store/auth';
import { useRouter } from 'vue-router';
import {ref} from "vue";

export default {
  setup() {
    const authStore = useAuthStore();
    const router = useRouter();

    const username = ref('');
    const password = ref('');

    const login = () => {
      // Effectuer la logique d'authentification
      authStore.credential.user = username.value
      authStore.credential.password = password.value
      authStore.handleToken()
      if(authStore.token != null){
        router.push('/');
      }
    };

    return { username, password, login };
  }
};
</script>

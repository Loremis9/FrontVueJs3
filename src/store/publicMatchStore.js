import { createPinia } from 'pinia';
import { defineStore } from 'pinia';

const pinia = createPinia();

export const useDataStore = defineStore({
  id: 'MatchStore',
  state: () => ({
    apiData: null,
    websocketData: null,
    terminateMatch: null,
    liveMatch: null,
  }),
  actions: {
    async fetchDataFromAPI() {
      try {
        // Effectuer une requête API
        const response = await fetch('https://example.com/api/data');
        const data = await response.json();
        this.apiData = data;
      } catch (error) {
        console.error('Erreur lors de la récupération des données de l\'API', error);
      }
    },
    handleWebSocketData(data) {
      // Gérer les données provenant d'une connexion WebSocket
      this.websocketData = data;
    },
    handleTerminateMatch(data){
      this.termianteMatch = data;
    },
    handleLiveMatch(data){
      this.liveMatch = data;
    },

  },
});

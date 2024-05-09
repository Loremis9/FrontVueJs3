
import { defineStore } from 'pinia';


export const useDataStore = defineStore({
  id: 'AgentStore',
  state: () => ({
    poste: [{
      id: "",
      nom: "",
      description: ""
    }],
    division: [{
      id: "",
      nom: "",
      description: ""
    }],
    equipe: null,
    match: null,
    joueur: null,
    tournoi: null,
    joueurAdverse: null,
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

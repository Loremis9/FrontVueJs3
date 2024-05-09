
import { defineStore } from 'pinia';
import {joueur} from "@/callAPI/joueur";
import {publicMatch} from "@/callAPI/publicMatch";


export const useDataStore = defineStore({
  id: 'MatchStore',
  state: () => ({
    apiData: null,
    websocketData: [],
    terminateMatch: [],
    liveMatch: [],
  }),
  actions: {
    async fetchDataFromAPI() {
      try {
        const data = joueur.prototype.createPlayer().data()
        this.apiData = data;
      } catch (error) {
        console.error('Erreur lors de la récupération des données de l\'API', error);
      }
    },
    handleWebSocketData() {
      // Gérer les données provenant d'une connexion WebSocket
      this.websocketData = data;
    },
    handleTerminateMatch(){
      publicMatch.prototype.getMatchTerminate()
      this.termianteMatch = data;
    },
    handleLiveMatch(){
      this.liveMatch = data;
    },
    handleAllMatch(){

    }

  },
});


import { defineStore } from 'pinia';
import {publicMatch} from "@/callAPI/publicMatch";
import {match} from "@/callAPI/crudMatch";
import {poste} from "@/callAPI/poste";
import {division} from "@/callAPI/division";
import {equipe} from "@/callAPI/equipe";
import {joueur} from "@/callAPI/joueur";


export const useAgentStore = defineStore({
  id: 'AgentStore',
  state: () => ({
    poste: [],
    division: [],
    joueur: null,
    joueurAdverse: null,
    responseCreateMatch : null,
    responseCreateMatchRevision: null,
    matchById: null,
    modifyMatch: null
  }),
  actions: {
    async createMatches(createdMatch){
      let lMatch = match.prototype.createMatch(createdMatch)
      this.responseCreateMatch = await lMatch.then(response =>{
        return response
      })
    },

    async createRevesionMatches(id, matchesUpdateDto){
      let lMatch = match.prototype.revisioneMatch(id, matchesUpdateDto)
      this.responseCreateMatchRevision = await lMatch.then(data =>{
        return data
      })
    },

    async getMatchesById(id){
      let lMatch = match.prototype.getMatchById(id)
      this.matchById = await lMatch.then(data =>{
        return data
      })
    },

    async modifyMatches(id){
      let lMatch = match.prototype.updateMatchinformations(id)
      this.modifyMatch = await lMatch.then(data =>{
        return data
      })
    },

    async getPosts(){
      let lMatch = poste.prototype.getAllPoste()
      this.poste = await lMatch.then(data =>{
        return data
      })
    },
    async getDivisions(){
      let lMatch = division.prototype.getAllDivisions()
      this.division = await lMatch.then(data =>{
        return data
      })
    },

    async GetPlayers(){
      let lMatch = joueur.prototype.getAllPlayer()
      this.joueur = await lMatch.then(data =>{
        return data
      })
    },
  },
  getters: {

  }
});

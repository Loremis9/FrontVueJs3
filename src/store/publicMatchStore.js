
import { defineStore } from 'pinia';
import {publicMatch} from "@/callAPI/publicMatch";


export const useDataStore = defineStore('MatchStore',{
  state: () => {
    return {
      apiData: [],
      websocketData: [],
      terminateMatch: [],
      liveMatch: [],
  }
  },
  actions: {
    async handleWebSocketData() {
      this.websocketData = new WebSocket("ws://localhost:8080")
      this.websocketData.onmessage = event=>{
        console.log(event)
        this.apiData.set(event)
      }
    },
    async handleTerminateMatch(){
      let tMatch = publicMatch.prototype.getMatchTerminate()
      this.terminateMatch = await tMatch.then(data =>{
        return data
      })
    },
    async handleLiveMatch(){
      let lMatch = publicMatch.prototype.getMatchlive()
      this.liveMatch = await lMatch.then(data =>{
        return data
      })
    },

  },
  getters: {
    handleAllMatch: (state)=> [...state.terminateMatch , ...state.liveMatch]

  }
});

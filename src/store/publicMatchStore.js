
import { defineStore } from 'pinia';
import {joueur} from "@/callAPI/joueur";
import {publicMatch} from "@/callAPI/publicMatch";
import {getState} from "core-js/modules/web.url-search-params.constructor";

export const useDataStore = defineStore({
  id: 'MatchStore',
  state: () => ({
    apiData: [{}],
    websocketData: [],
    terminateMatch: [],
    liveMatch: [],
  }),
  actions: {
    async handleWebSocketData() {
      this.websocketData = new WebSocket("ws://localhost:8080" )
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
    handleAllMatch(){
        return [...this.terminateMatch , ...this.liveMatch]
    }
  },
});

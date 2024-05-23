
import { defineStore } from 'pinia';
import {publicMatch} from "@/callAPI/publicMatch";
import SockJS from "sockjs-client";
import Stomp from "webstomp-client";
import {store} from "core-js/internals/reflect-metadata";
export const useDataStore = defineStore('MatchStore',{
    state: () => {
        return {
            apiData: [],
            websocketData: [],
            terminateMatch: [],
            liveMatch: [],
            connected: false,
            liveMatchError: null,
            terminateMatchError:null,
            newmatch: null
        }
    },
    actions: {
        connect (){
            // const socket = new WebSocket("ws://localhost:8080/ws/chat-app/");
            // socket.onmessage = function(event) {
            //     console.log('Message reçu du serveur:', event.data);
            // };
            this.socket = new SockJS("http://localhost:8080/api/v3/ws/");
            this.stompClient = Stomp.over(this.socket);
            this.stompClient.connect(
                {},
                frame => {
                    this.connected = true;
                    console.log(frame);
                    this.stompClient.subscribe("/ws/myChanel", tick => {
                        this.newmatch = JSON.parse(tick.body)
                        this.swipMatch()
                    });
                },
                error => {
                    console.log(error);
                    this.connected = false;
                }
            );
        },
        async handleTerminateMatch(){
            this.terminateMatch = null
            let tMatch = publicMatch.prototype.getMatchTerminate()
            await tMatch.then(data =>{
                if(data.error){
                    this.terminateMatchError = data.error
                }
                this.terminateMatch = data
            })
        },
        async handleLiveMatch(){
            this.liveMatch = null
            let lMatch = publicMatch.prototype.getMatchlive()
            await lMatch.then(data =>{
                if(data.error ){
                    this.liveMatchError = data.error
                }
                this.liveMatch = data
            })
        },
        swipMatch(){
            const taille =this.newmatch.length -1
            const webSocketMatch = this.newmatch[taille]
            const id = webSocketMatch.id
            const existingMatch = this.liveMatch.find( it => it.id === id)
            if(existingMatch){
                const actualMatch = this.liveMatch.filter(elem => elem.id !== id)
                actualMatch.push(webSocketMatch)
                this.$patch({ liveMatch: actualMatch})
                console.log(this.liveMatch)
            }else{
                const actualMatch =  [...this.liveMatch, this.newmatch]
                this.$patch({ liveMatch: actualMatch})
            }

        },
    },
    getters: {
        handleAllMatch: (state)=> [...state.terminateMatch , ...state.liveMatch],
        handleTerminate: (state)=> [...state.terminateMatch],
        handleLive: (state)=> [...state.liveMatch]
    }
});

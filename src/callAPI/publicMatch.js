import {PublicMatchApi} from "../../Dto/jsapiclient/src";
import {ApiClient} from "../../Dto/jsapiclient/src";
import apiClient from "../../Dto/jsapiclient/src/ApiClient";
import { instanceApi} from "@/callAPI/test";

const  api = instanceApi

export class publicMatch {

    opts = {
        'password': new instanceApi.Password() // {Password} user password
    };
    getMatchTerminate (){
        const apis = async() =>{
            const response =  await api.getMatchTerminate().then(response => response).catch(error => console.log("error " + error))
            return Promise.resolve(response)
        }
            return apis()
    }

    getMatchlive(){
        const apis = async() =>{
            const response =  await api.getMatchlive().then(response => response).catch(error => console.log("error " + error))
            return Promise.resolve(response)
        }
        return apis()
    }
    getAllMatches(){
        const apis = async() =>{
            const response =  await api.getAllMatches().then(response => response).catch(error => console.log("error " + error))
            return Promise.resolve(response)
        }
        return apis()
    }

}

import { instanceApi} from "@/callAPI/apiInstance";

const  api = instanceApi

export class publicMatch {

    getMatchTerminate (){
        const apis = async() =>{
            const response =  await api.getMatchTerminate().then(response => response).catch(error =>  error)
            return Promise.resolve(response)
        }
            return apis()
    }

    getMatchlive(){
        const apis = async() =>{
            const response =  await api.getMatchlive().then(response => response).catch(error =>  error)
            return Promise.resolve(response)
        }
        return apis()
    }
    getAllMatches(){
        const apis = async() =>{
            const response =  await api.getAllMatches().then(response => response).catch(error =>  error)
            return Promise.resolve(response)
        }
        return apis()
    }

}
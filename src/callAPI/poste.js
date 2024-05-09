import {PosteApi} from "@/Dto/jsapipublicclient/src";
import { instanceApi} from "@/callAPI/test";

const  api = instanceApi

export class poste {



    getPosteById(id){
        const apis = async() =>{
            const response =  await api.getPosteById(id).then(response => response).catch(error => console.log("error " + error))
            return Promise.resolve(response)
        }
        return apis()
    }

    getAllPoste(){
        const apis = async() =>{
            const response =  await api.getAllPoste().then(response => response).catch(error => console.log("error " + error))
            return Promise.resolve(response)
        }
        return apis()

    }

}
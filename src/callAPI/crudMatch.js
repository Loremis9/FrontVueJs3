import { instanceApi} from "@/callAPI/apiInstance";

const  api = instanceApi

export class match{

     createMatch(createMatchesDto, callback) {
         const apis = async() =>{
             const response =  await api.createMatch(createMatchesDto).then(response => response).catch(error => console.log("error " + error))
             return Promise.resolve(response)
         }
         return apis()
     }


    getAllMatches() {
        const apis = async() =>{
            const response =  await api.getAllMatches().then(response => response).catch(error => console.log("error " + error))
            return Promise.resolve(response)
        }
        return apis()
    }

    getMatchById(id, callback) {
        const apis = async() =>{
            const response =  await api.getMatchById().then(response => response).catch(error => console.log("error " + error))
            return Promise.resolve(response)
        }
        return apis()
    }

    revisioneMatch(id, matchesUpdateDto) {
        const apis = async() =>{
            const response =  await api.revisioneMatch(id, matchesUpdateDto).then(response => response).catch(error => console.log("error " + error))
            return Promise.resolve(response)
        }
        return apis()
    }

    updateMatchinformations(id, createMatchesDto) {
        const apis = async() =>{
            const response =  await api.updateMatchinformations(id, createMatchesDto).then(response => response).catch(error => console.log("error " + error))
            return Promise.resolve(response)
        }
        return apis()
    }
}
import { instanceApi} from "@/callAPI/apiInstance";

const  api = instanceApi
export class equipe {
    createTeam(createEquipeDto) {
        const apis = async() =>{
            const response =  await api.createTeam(createEquipeDto).then(response => response).catch(error => console.log("error " + error))
            return Promise.resolve(response)
        }
        return apis()
    }

    deleteTeam(id) {
        const apis = async() =>{
            const response =  await api.deleteTeam(id).then(response => response).catch(error => console.log("error " + error))
            return Promise.resolve(response)
        }
        return apis()
    }

    getTeamById(id) {
        const apis = async() =>{
            const response =  await api.getTeamById(id).then(response => response).catch(error => console.log("error " + error))
            return Promise.resolve(response)
        }
        return apis()

    }

    getTeamByName(name) {
        const apis = async() =>{
            const response =  await api.getTeamByName(name).then(response => response).catch(error => console.log("error " + error))
            return Promise.resolve(response)
        }
        return apis()
    }

    updateTeamA(id, updateEquipeDto) {
        const apis = async() =>{
            const response =  await api.updateTeamA(id, updateEquipeDto).then(response => response).catch(error => console.log("error " + error))
            return Promise.resolve(response)
        }
        return apis()
    }

}
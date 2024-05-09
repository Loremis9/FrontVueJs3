import { instanceApi} from "@/callAPI/apiInstance";

const  api = instanceApi
export class equipeAdverse {
    createTeam(createEquipeAdverseDto) {
        const apis = async() =>{
            const response =  await api.createTeamAdverse(createEquipeAdverseDto).then(response => response).catch(error => console.log("error " + error))
            return Promise.resolve(response)
        }
        return apis()
    }

    deleteTeam(id) {
        const apis = async() =>{
            const response =  await api.deleteTeamAdverse(id).then(response => response).catch(error => console.log("error " + error))
            return Promise.resolve(response)
        }
        return apis()
    }

    getTeamById(id) {
        const apis = async() =>{
            const response =  await api.getTeamAdverseById(id).then(response => response).catch(error => console.log("error " + error))
            return Promise.resolve(response)
        }
        return apis()

    }

    getTeamByName(name) {
        const apis = async() =>{
            const response =  await api.getTeamAdverseByName(name).then(response => response).catch(error => console.log("error " + error))
            return Promise.resolve(response)
        }
        return apis()
    }

    updateTeamA(id, updateEquipeAdverseDto) {
        const apis = async() =>{
            const response =  await api.updateTeamAdverse(id, updateEquipeAdverseDto).then(response => response).catch(error => console.log("error " + error))
            return Promise.resolve(response)
        }
        return apis()
    }

}
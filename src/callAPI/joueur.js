import { instanceApi} from "@/callAPI/apiInstance";
const  api = instanceApi

export class joueur{
    createPlayer(createJoueurDto) {
        const apis = async() =>{
            const response =  await api.createPlayer(createJoueurDto).then(response => response).catch(error => console.log("error " + error))
            return Promise.resolve(response)
        }
        return apis()
    }

    deletePlayerById(id) {
        const apis = async() =>{
            const response =  await api.deletePlayerById(id).then(response => response).catch(error => console.log("error " + error))
            return Promise.resolve(response)
        }
        return apis()
    }

    getAllPlayer() {
        const apis = async() =>{
            const response =  await api.getAllPlayer().then(response => response).catch(error => console.log("error " + error))
            return Promise.resolve(response)
        }
        return apis()
    }

    getPlayerByName(name) {
        const apis = async() =>{
            const response =  await api.getPlayerByName(name).then(response => response).catch(error => console.log("error " + error))
            return Promise.resolve(response)
        }
        return apis()
    }

    getPlayerbyId(id) {
        const apis = async() =>{
            const response =  await api.getPlayerbyId(id).then(response => response).catch(error => console.log("error " + error))
            return Promise.resolve(response)
        }
        return apis()
    }

    updatePlayer(id, joueurDto) {
        const apis = async() =>{
            const response =  await api.updatePlayer(id, joueurDto).then(response => response).catch(error => console.log("error " + error))
            return Promise.resolve(response)
        }
        return apis()
    }

}
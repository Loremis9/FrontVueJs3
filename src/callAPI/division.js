import { instanceApi} from "@/callAPI/apiInstance";

const  api = instanceApi


export class division {

    getAllDivision(callback) {
        const apis = async() =>{
            const response =  await api.getDivision().then(response => response).catch(error => console.log("error " + error))
            return Promise.resolve(response)
        }
        return apis()
    }

    getDivisionById(id) {
        const apis = async() =>{
            const response =  await api.getDivisionById(id).then(response => response).catch(error => console.log("error " + error))
            return Promise.resolve(response)
        }
        return apis()
    }

    getDivisionByName(name){
    const apis = async() =>{
        const response =  await api.getDivisionByName(name).then(response => response).catch(error => console.log("error " + error))
        return Promise.resolve(response)
    }
    return apis()
}
}



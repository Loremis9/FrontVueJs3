var SwaggerSportApplicatiohOpenApi30= require('swagger_sport_applicatioh_open_api_3_0');


var api = new SwaggerSportApplicatiohOpenApi30.DivisionApi()


export class division {

    getAllDivisions(callback) {
        const apis = async() =>{
            const response =  await api.getAllDivision().then(response => response).catch(error => console.log("error " + error))
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



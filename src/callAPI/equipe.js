import {CreateEquipeDto, UpdateEquipeDto} from "swagger_sport_applicatioh_open_api_3_0";

var SwaggerSportApplicatiohOpenApi30= require('swagger_sport_applicatioh_open_api_3_0');

const instanceApiUser  = new SwaggerSportApplicatiohOpenApi30.EquipeApi
const  api = instanceApiUser
export class equipe {
    createTeam(createEquipeDto) {
        const apis = async() =>{
            const team = CreateEquipeDto.constructFromObject(createEquipeDto)
            const response =  await api.createTeam(team).then(response => response).catch(error => console.log("error " + error))
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
            const team = UpdateEquipeDto.constructFromObject(updateEquipeDto)
            const response =  await api.updateTeamA(id, team).then(response => response).catch(error => console.log("error " + error))
            return Promise.resolve(response)
        }
        return apis()
    }

}
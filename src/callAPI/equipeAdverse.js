import {CreateEquipeAdverseDto, UpdateEquipeAdverseDto} from "swagger_sport_applicatioh_open_api_3_0";

var SwaggerSportApplicatiohOpenApi30= require('swagger_sport_applicatioh_open_api_3_0');

const api  = new SwaggerSportApplicatiohOpenApi30.EquipeAdverseApi

export class equipeAdverse {
    createTeam(createEquipeAdverseDto) {
        const apis = async() =>{
            const team = CreateEquipeAdverseDto.constructFromObject(createEquipeAdverseDto)
            const response =  await api.createTeamAdverse(team).then(response => response).catch(error => console.log("error " + error))
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
            const team = UpdateEquipeAdverseDto.constructFromObject(updateEquipeAdverseDto)
            const response =  await api.updateTeamAdverse(id, team).then(response => response).catch(error => console.log("error " + error))
            return Promise.resolve(response)
        }
        return apis()
    }

}
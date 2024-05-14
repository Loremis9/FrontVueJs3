var SwaggerSportApplicatiohOpenApi30= require('swagger_sport_applicatioh_open_api_3_0');
import {CreateJoueurDto, JoueurDto} from "swagger_sport_applicatioh_open_api_3_0";
const api  = new SwaggerSportApplicatiohOpenApi30.JoueurApi


export class joueur{
    createPlayer(createJoueurDto) {
        const apis = async() =>{
            const player = CreateJoueurDto.constructFromObject(createJoueurDto)
            const response =  await api.createPlayer(player).then(response => response).catch(error => console.log("error " + error))
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
            const player = JoueurDto.constructFromObject(joueurDto)
            const response =  await api.updatePlayer(id, player).then(response => response).catch(error => console.log("error " + error))
            return Promise.resolve(response)
        }
        return apis()
    }

}
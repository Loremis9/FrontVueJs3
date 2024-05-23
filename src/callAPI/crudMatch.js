var SwaggerSportApplicatiohOpenApi30= require('swagger_sport_applicatioh_open_api_3_0');
import {CreateMatchesDto,MatchesUpdateDto} from "swagger_sport_applicatioh_open_api_3_0";
const api  = new SwaggerSportApplicatiohOpenApi30.MatchApi

export class match{

     createMatch(createMatchesDto) {
         const apis = async() =>{

             const data = {
                 equipe1: createMatchesDto.equipe1,
                 equipe2: createMatchesDto.equipe2,
                 date_debut: new Date(createMatchesDto.dateDebut).getTime(),
                 adresse: createMatchesDto.adresse,
                 photo: createMatchesDto.photo
             }
             console.log(typeof createMatchesDto.adresse)
             const response =  await api.createMatch(data).then(response => response).catch(error => error)
             return Promise.resolve(response)
         }
         return apis()
     }


    getAllMatches() {
        const apis = async() =>{
            const response =  await api.getAllMatches().then(response => response).catch(error =>  error)
            return Promise.resolve(response)
        }
        return apis()
    }

    getMatchById(id) {
        const apis = async() =>{
            const response =  await api.getMatchById(id).then(response => response).catch(error =>  + error)
            return Promise.resolve(response)
        }
        return apis()
    }

    revisioneMatch(id, matchesUpdateDto) {
        const apis = async() =>{
            const data = {
                score : matchesUpdateDto.score,
                termine: matchesUpdateDto.termine,
                isRevision : matchesUpdateDto.isRevision,
                dateRevision : matchesUpdateDto.dateRevision,
                photo : matchesUpdateDto.photo
            }
            const response =  await api.revisioneMatch(id, data).then(response => response).catch(error =>  error)
            return Promise.resolve(response)
        }
        return apis()
    }

    updateMatchinformations(id, createMatchesDto) {
        const apis = async() =>{
            const match = CreateMatchesDto.constructFromObject(createMatchesDto)
            const response =  await api.updateMatchinformations(id, match).then(response => response).catch(error =>  error)
            return Promise.resolve(response)
        }
        return apis()
    }
}
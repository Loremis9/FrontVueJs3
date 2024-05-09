import {EquipeApi} from "@/Dto/jsapipublicclient/src";


export class equipe extends EquipeApi{
    createTeam(createEquipeDto, callback) {
        return super.createTeam(createEquipeDto, callback);
    }

    deleteTeam(id, callback) {
        return super.deleteTeam(id, callback);
    }

    getTeamById(id, callback) {
        return super.getTeamById(id, callback);
    }

    getTeamByName(name, callback) {
        return super.getTeamByName(name, callback);
    }

    updateTeamA(id, updateEquipeDto, callback) {
        return super.updateTeamA(id, updateEquipeDto, callback);
    }

}
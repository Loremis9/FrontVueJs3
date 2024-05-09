import {JoueurApi} from "@/Dto/jsapipublicclient/src";


export class joueur extends JoueurApi{
    createPlayer(createJoueurDto, callback) {
        return super.createPlayer(createJoueurDto, callback);
    }

    deletePlayerById(id, callback) {
        return super.deletePlayerById(id, callback);
    }

    getAllPlayer(callback) {
        return super.getAllPlayer(callback);
    }

    getPlayerByName(name, callback) {
        return super.getPlayerByName(name, callback);
    }

    getPlayerbyId(id, callback) {
        return super.getPlayerbyId(id, callback);
    }

    updatePlayer(id, joueurDto, callback) {
        return super.updatePlayer(id, joueurDto, callback);
    }

}
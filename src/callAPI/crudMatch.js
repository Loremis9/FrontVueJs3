import {MatchApi} from "@/Dto/jsapipublicclient/src";

export class match extends MatchApi{
    constructor() {
        super();
    }
     createMatch(createMatchesDto, callback) {
        return super.createMatch(createMatchesDto, callback);
    }

    getAllMatches(callback) {
        return super.getAllMatches(callback);
    }

    getMatchById(id, callback) {
        return super.getMatchById(id, callback);
    }

    revisioneMatch(id, matchesUpdateDto, callback) {
        return super.revisioneMatch(id, matchesUpdateDto, callback);
    }

    updateMatchinformations(id, createMatchesDto, callback) {
        return super.updateMatchinformations(id, createMatchesDto, callback);
    }




}
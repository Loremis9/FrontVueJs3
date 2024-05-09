import { instanceApi} from "@/callAPI/test";

const  api = instanceApi


export class division {



    getAllDivision(callback) {
        try {
            return super.getAllDivision(callback);
        } catch (error) {
            console.log("error" + error)
        }
        api.getDivision()
    }


    getDivisionById(id, callback) {
        return super.getDivisionById(id, callback);
        // eslint-disable-next-line no-unreachable
        api.getDivisionid()
    }

    // getDivisionByName(name, callback) {
    //     return super.getDivisionByName(name, callback);
    // }

}



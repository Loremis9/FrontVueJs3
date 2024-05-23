import {UserDtoRequest} from "swagger_sport_applicatioh_open_api_3_0";

var SwaggerSportApplicatiohOpenApi30 = require('swagger_sport_applicatioh_open_api_3_0');
const api  = new SwaggerSportApplicatiohOpenApi30.UserApi



export class user {
    authenticatifications(email, password) {
            const apis = async () => {
                const userData = {
                    email: email,
                    password: password
                }
                const user = UserDtoRequest.constructFromObject(userData)
               const response=  api.loginUser(user).then(response => {
                  return response["token"]}).catch(error =>  error)

                return Promise.resolve(response)
            }
            return apis()
        }
         setBerear(){
             var defaultClient = SwaggerSportApplicatiohOpenApi30.ApiClient.instance;
             var bearerAuth = defaultClient.authentications['bearerAuth'];
             bearerAuth.accessToken = localStorage.getItem("token")
    }
}


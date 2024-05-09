/**
 * Swagger SportApplicatioh - OpenAPI 3.0
 * This is a sample Pet Store Server based on the OpenAPI 3.0 specification. You can find out more about Swagger at [https://swagger.io](https://swagger.io). In the third iteration of the pet store, we've switched to the design first approach! You can now help us improve the API whether it's by making changes to the definition itself or to the code. That way, with time, we can improve the API in general, and expose some of the new features in OAS3.  _If you're looking for the Swagger 2.0/OAS 2.0 version of Petstore, then click [here](https://editor.swagger.io/?url=https://petstore.swagger.io/v2/swagger.yaml). Alternatively, you can load via the `Edit > Load Petstore OAS 2.0` menu option!_  Some useful links: - [The Pet Store repository](https://github.com/swagger-api/swagger-petstore) - [The source API definition for the Pet Store](https://github.com/swagger-api/swagger-petstore/blob/master/src/main/resources/openapi.yaml)
 *
 * The version of the OpenAPI document: 1.0.11
 * Contact: apiteam@swagger.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import PosteDto from '../model/PosteDto';

/**
* Poste service.
* @module api/PosteApi
* @version 1.0.11
*/
export default class PosteApi {

    /**
    * Constructs a new PosteApi. 
    * @alias module:api/PosteApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * récupérer tous les postes
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/PosteDto>} and HTTP response
     */
    getAllPosteWithHttpInfo() {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['sport_auth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [PosteDto];
      return this.apiClient.callApi(
        '/Poste', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * récupérer tous les postes
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/PosteDto>}
     */
    getAllPoste() {
      return this.getAllPosteWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * récupérer un poste par son id
     * @param {Number} id The id of the poste to retrieve
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PosteDto} and HTTP response
     */
    getPosteByIdWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getPosteById");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['sport_auth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = PosteDto;
      return this.apiClient.callApi(
        '/Poste/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * récupérer un poste par son id
     * @param {Number} id The id of the poste to retrieve
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PosteDto}
     */
    getPosteById(id) {
      return this.getPosteByIdWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * récupérer un poste par son nom
     * @param {String} name The name of the poste to retrieve
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PosteDto} and HTTP response
     */
    getPosteByNameWithHttpInfo(name) {
      let postBody = null;
      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling getPosteByName");
      }

      let pathParams = {
        'name': name
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['sport_auth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = PosteDto;
      return this.apiClient.callApi(
        '/Poste/name/{name}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * récupérer un poste par son nom
     * @param {String} name The name of the poste to retrieve
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PosteDto}
     */
    getPosteByName(name) {
      return this.getPosteByNameWithHttpInfo(name)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}

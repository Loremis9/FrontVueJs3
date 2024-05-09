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

import ApiClient from '../ApiClient';

/**
 * The CreateMatchesDto model module.
 * @module model/CreateMatchesDto
 * @version 1.0.11
 */
class CreateMatchesDto {
    /**
     * Constructs a new <code>CreateMatchesDto</code>.
     * @alias module:model/CreateMatchesDto
     * @param equipe1 {Number} 
     * @param equipe2 {Number} 
     * @param dateDebut {Date} Date de début du match
     * @param adresse {String} Lieu où se déroule le match
     */
    constructor(equipe1, equipe2, dateDebut, adresse) { 
        
        CreateMatchesDto.initialize(this, equipe1, equipe2, dateDebut, adresse);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, equipe1, equipe2, dateDebut, adresse) { 
        obj['equipe1'] = equipe1;
        obj['equipe2'] = equipe2;
        obj['date_debut'] = dateDebut;
        obj['adresse'] = adresse;
    }

    /**
     * Constructs a <code>CreateMatchesDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateMatchesDto} obj Optional instance to populate.
     * @return {module:model/CreateMatchesDto} The populated <code>CreateMatchesDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateMatchesDto();

            if (data.hasOwnProperty('equipe1')) {
                obj['equipe1'] = ApiClient.convertToType(data['equipe1'], 'Number');
            }
            if (data.hasOwnProperty('equipe2')) {
                obj['equipe2'] = ApiClient.convertToType(data['equipe2'], 'Number');
            }
            if (data.hasOwnProperty('date_debut')) {
                obj['date_debut'] = ApiClient.convertToType(data['date_debut'], 'Date');
            }
            if (data.hasOwnProperty('photo')) {
                obj['photo'] = ApiClient.convertToType(data['photo'], 'String');
            }
            if (data.hasOwnProperty('adresse')) {
                obj['adresse'] = ApiClient.convertToType(data['adresse'], 'String');
            }
            if (data.hasOwnProperty('arbitre')) {
                obj['arbitre'] = ApiClient.convertToType(data['arbitre'], 'String');
            }
            if (data.hasOwnProperty('tournoi')) {
                obj['tournoi'] = ApiClient.convertToType(data['tournoi'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateMatchesDto</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateMatchesDto</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CreateMatchesDto.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['photo'] && !(typeof data['photo'] === 'string' || data['photo'] instanceof String)) {
            throw new Error("Expected the field `photo` to be a primitive type in the JSON string but got " + data['photo']);
        }
        // ensure the json data is a string
        if (data['adresse'] && !(typeof data['adresse'] === 'string' || data['adresse'] instanceof String)) {
            throw new Error("Expected the field `adresse` to be a primitive type in the JSON string but got " + data['adresse']);
        }
        // ensure the json data is a string
        if (data['arbitre'] && !(typeof data['arbitre'] === 'string' || data['arbitre'] instanceof String)) {
            throw new Error("Expected the field `arbitre` to be a primitive type in the JSON string but got " + data['arbitre']);
        }

        return true;
    }

/**
     * @return {Number}
     */
    getEquipe1() {
        return this.equipe1;
    }

    /**
     * @param {Number} equipe1
     */
    setEquipe1(equipe1) {
        this['equipe1'] = equipe1;
    }
/**
     * @return {Number}
     */
    getEquipe2() {
        return this.equipe2;
    }

    /**
     * @param {Number} equipe2
     */
    setEquipe2(equipe2) {
        this['equipe2'] = equipe2;
    }
/**
     * Returns Date de début du match
     * @return {Date}
     */
    getDateDebut() {
        return this.date_debut;
    }

    /**
     * Sets Date de début du match
     * @param {Date} dateDebut Date de début du match
     */
    setDateDebut(dateDebut) {
        this['date_debut'] = dateDebut;
    }
/**
     * Returns URL de la photo du match
     * @return {String}
     */
    getPhoto() {
        return this.photo;
    }

    /**
     * Sets URL de la photo du match
     * @param {String} photo URL de la photo du match
     */
    setPhoto(photo) {
        this['photo'] = photo;
    }
/**
     * Returns Lieu où se déroule le match
     * @return {String}
     */
    getAdresse() {
        return this.adresse;
    }

    /**
     * Sets Lieu où se déroule le match
     * @param {String} adresse Lieu où se déroule le match
     */
    setAdresse(adresse) {
        this['adresse'] = adresse;
    }
/**
     * Returns Nom de l'arbitre du match
     * @return {String}
     */
    getArbitre() {
        return this.arbitre;
    }

    /**
     * Sets Nom de l'arbitre du match
     * @param {String} arbitre Nom de l'arbitre du match
     */
    setArbitre(arbitre) {
        this['arbitre'] = arbitre;
    }
/**
     * @return {Number}
     */
    getTournoi() {
        return this.tournoi;
    }

    /**
     * @param {Number} tournoi
     */
    setTournoi(tournoi) {
        this['tournoi'] = tournoi;
    }

}

CreateMatchesDto.RequiredProperties = ["equipe1", "equipe2", "date_debut", "adresse"];

/**
 * @member {Number} equipe1
 */
CreateMatchesDto.prototype['equipe1'] = undefined;

/**
 * @member {Number} equipe2
 */
CreateMatchesDto.prototype['equipe2'] = undefined;

/**
 * Date de début du match
 * @member {Date} date_debut
 */
CreateMatchesDto.prototype['date_debut'] = undefined;

/**
 * URL de la photo du match
 * @member {String} photo
 */
CreateMatchesDto.prototype['photo'] = undefined;

/**
 * Lieu où se déroule le match
 * @member {String} adresse
 */
CreateMatchesDto.prototype['adresse'] = undefined;

/**
 * Nom de l'arbitre du match
 * @member {String} arbitre
 */
CreateMatchesDto.prototype['arbitre'] = undefined;

/**
 * @member {Number} tournoi
 */
CreateMatchesDto.prototype['tournoi'] = undefined;






export default CreateMatchesDto;


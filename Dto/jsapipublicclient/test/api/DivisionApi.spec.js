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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd() + '/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SwaggerSportApplicatiohOpenApi30);
  }
}(this, function(expect, SwaggerSportApplicatiohOpenApi30) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SwaggerSportApplicatiohOpenApi30.DivisionApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('DivisionApi', function() {
    describe('getAllDivision', function() {
      it('should call getAllDivision successfully', function(done) {
        //uncomment below and update the code to test getAllDivision
        //instance.getAllDivision(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDivisionById', function() {
      it('should call getDivisionById successfully', function(done) {
        //uncomment below and update the code to test getDivisionById
        //instance.getDivisionById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDivisionByName', function() {
      it('should call getDivisionByName successfully', function(done) {
        //uncomment below and update the code to test getDivisionByName
        //instance.getDivisionByName(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));

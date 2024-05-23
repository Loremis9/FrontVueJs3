# SwaggerSportApplicatiohOpenApi30.EquipeApi

All URIs are relative to *http://localhost:8080/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createTeam**](EquipeApi.md#createTeam) | **POST** /Equipe | crée une nouvelle équipe
[**deleteTeam**](EquipeApi.md#deleteTeam) | **DELETE** /Equipe/{id} | Supprimer une équipe avec son id
[**getTeamById**](EquipeApi.md#getTeamById) | **GET** /Equipe/{id} | Récupérer une équipe par son id
[**getTeamByName**](EquipeApi.md#getTeamByName) | **GET** /Equipe/name/{name} | Récupérer toutes les équipes
[**updateTeamA**](EquipeApi.md#updateTeamA) | **PATCH** /Equipe/{id} | update une équipe existante



## createTeam

> EquipeDto createTeam(createEquipeDto)

crée une nouvelle équipe

crée une nouvelle équipe

### Example

```javascript
import SwaggerSportApplicatiohOpenApi30 from 'swagger_sport_applicatioh_open_api_3_0';
let defaultClient = SwaggerSportApplicatiohOpenApi30.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SwaggerSportApplicatiohOpenApi30.EquipeApi();
let createEquipeDto = new SwaggerSportApplicatiohOpenApi30.CreateEquipeDto(); // CreateEquipeDto | Create an new Team
apiInstance.createTeam(createEquipeDto).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createEquipeDto** | [**CreateEquipeDto**](CreateEquipeDto.md)| Create an new Team | 

### Return type

[**EquipeDto**](EquipeDto.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteTeam

> deleteTeam(id)

Supprimer une équipe avec son id

### Example

```javascript
import SwaggerSportApplicatiohOpenApi30 from 'swagger_sport_applicatioh_open_api_3_0';
let defaultClient = SwaggerSportApplicatiohOpenApi30.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SwaggerSportApplicatiohOpenApi30.EquipeApi();
let id = 56; // Number | The id that needs to be deleted
apiInstance.deleteTeam(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The id that needs to be deleted | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getTeamById

> EquipeDto getTeamById(id)

Récupérer une équipe par son id

### Example

```javascript
import SwaggerSportApplicatiohOpenApi30 from 'swagger_sport_applicatioh_open_api_3_0';
let defaultClient = SwaggerSportApplicatiohOpenApi30.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SwaggerSportApplicatiohOpenApi30.EquipeApi();
let id = 56; // Number | The id that needs to be deleted
apiInstance.getTeamById(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The id that needs to be deleted | 

### Return type

[**EquipeDto**](EquipeDto.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTeamByName

> EquipeDto getTeamByName(name)

Récupérer toutes les équipes

### Example

```javascript
import SwaggerSportApplicatiohOpenApi30 from 'swagger_sport_applicatioh_open_api_3_0';
let defaultClient = SwaggerSportApplicatiohOpenApi30.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SwaggerSportApplicatiohOpenApi30.EquipeApi();
let name = "name_example"; // String | The id that needs to be deleted
apiInstance.getTeamByName(name).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| The id that needs to be deleted | 

### Return type

[**EquipeDto**](EquipeDto.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateTeamA

> EquipeDto updateTeamA(id, updateEquipeDto)

update une équipe existante

update une équipe existante

### Example

```javascript
import SwaggerSportApplicatiohOpenApi30 from 'swagger_sport_applicatioh_open_api_3_0';
let defaultClient = SwaggerSportApplicatiohOpenApi30.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SwaggerSportApplicatiohOpenApi30.EquipeApi();
let id = 56; // Number | The id that needs to be deleted
let updateEquipeDto = new SwaggerSportApplicatiohOpenApi30.UpdateEquipeDto(); // UpdateEquipeDto | update an new Team
apiInstance.updateTeamA(id, updateEquipeDto).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The id that needs to be deleted | 
 **updateEquipeDto** | [**UpdateEquipeDto**](UpdateEquipeDto.md)| update an new Team | 

### Return type

[**EquipeDto**](EquipeDto.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


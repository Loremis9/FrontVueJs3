# SwaggerSportApplicatiohOpenApi30.JoueurApi

All URIs are relative to *http://localhost:8080/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createPlayer**](JoueurApi.md#createPlayer) | **POST** /Joueur | crée un joueur
[**deletePlayerById**](JoueurApi.md#deletePlayerById) | **DELETE** /Joueur/{id} | supprimer un joueur par son id
[**getAllPlayer**](JoueurApi.md#getAllPlayer) | **GET** /Joueur | Récupérer tous les joueurs sans équipe
[**getPlayerByName**](JoueurApi.md#getPlayerByName) | **GET** /Joueur/name/{name} | Récupérer un joueur par son nom
[**getPlayerbyId**](JoueurApi.md#getPlayerbyId) | **GET** /Joueur/{id} | Récupérer un joueur par son id
[**updatePlayer**](JoueurApi.md#updatePlayer) | **PATCH** /Joueur/{id} | update un Joueur existant



## createPlayer

> JoueurDto createPlayer(createJoueurDto)

crée un joueur

Crée un joueur

### Example

```javascript
import SwaggerSportApplicatiohOpenApi30 from 'swagger_sport_applicatioh_open_api_3_0';
let defaultClient = SwaggerSportApplicatiohOpenApi30.ApiClient.instance;
// Configure OAuth2 access token for authorization: sport_auth
let sport_auth = defaultClient.authentications['sport_auth'];
sport_auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SwaggerSportApplicatiohOpenApi30.JoueurApi();
let createJoueurDto = new SwaggerSportApplicatiohOpenApi30.CreateJoueurDto(); // CreateJoueurDto | Crée un nouveau joueur
apiInstance.createPlayer(createJoueurDto).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createJoueurDto** | [**CreateJoueurDto**](CreateJoueurDto.md)| Crée un nouveau joueur | 

### Return type

[**JoueurDto**](JoueurDto.md)

### Authorization

[sport_auth](../README.md#sport_auth)

### HTTP request headers

- **Content-Type**: application/json, application/x-www-form-urlencoded
- **Accept**: application/json


## deletePlayerById

> JoueurDto deletePlayerById(id)

supprimer un joueur par son id



### Example

```javascript
import SwaggerSportApplicatiohOpenApi30 from 'swagger_sport_applicatioh_open_api_3_0';
let defaultClient = SwaggerSportApplicatiohOpenApi30.ApiClient.instance;
// Configure OAuth2 access token for authorization: sport_auth
let sport_auth = defaultClient.authentications['sport_auth'];
sport_auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SwaggerSportApplicatiohOpenApi30.JoueurApi();
let id = 56; // Number | id of player
apiInstance.deletePlayerById(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| id of player | 

### Return type

[**JoueurDto**](JoueurDto.md)

### Authorization

[sport_auth](../README.md#sport_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAllPlayer

> [JoueurDto] getAllPlayer()

Récupérer tous les joueurs sans équipe

récupère tous les joueurs sans équipe

### Example

```javascript
import SwaggerSportApplicatiohOpenApi30 from 'swagger_sport_applicatioh_open_api_3_0';
let defaultClient = SwaggerSportApplicatiohOpenApi30.ApiClient.instance;
// Configure OAuth2 access token for authorization: sport_auth
let sport_auth = defaultClient.authentications['sport_auth'];
sport_auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SwaggerSportApplicatiohOpenApi30.JoueurApi();
apiInstance.getAllPlayer().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[JoueurDto]**](JoueurDto.md)

### Authorization

[sport_auth](../README.md#sport_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPlayerByName

> JoueurDto getPlayerByName(name)

Récupérer un joueur par son nom

### Example

```javascript
import SwaggerSportApplicatiohOpenApi30 from 'swagger_sport_applicatioh_open_api_3_0';
let defaultClient = SwaggerSportApplicatiohOpenApi30.ApiClient.instance;
// Configure OAuth2 access token for authorization: sport_auth
let sport_auth = defaultClient.authentications['sport_auth'];
sport_auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SwaggerSportApplicatiohOpenApi30.JoueurApi();
let name = "name_example"; // String | The name of the player to retrieve
apiInstance.getPlayerByName(name).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| The name of the player to retrieve | 

### Return type

[**JoueurDto**](JoueurDto.md)

### Authorization

[sport_auth](../README.md#sport_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPlayerbyId

> JoueurDto getPlayerbyId(id)

Récupérer un joueur par son id



### Example

```javascript
import SwaggerSportApplicatiohOpenApi30 from 'swagger_sport_applicatioh_open_api_3_0';
let defaultClient = SwaggerSportApplicatiohOpenApi30.ApiClient.instance;
// Configure OAuth2 access token for authorization: sport_auth
let sport_auth = defaultClient.authentications['sport_auth'];
sport_auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SwaggerSportApplicatiohOpenApi30.JoueurApi();
let id = 56; // Number | id of player
apiInstance.getPlayerbyId(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| id of player | 

### Return type

[**JoueurDto**](JoueurDto.md)

### Authorization

[sport_auth](../README.md#sport_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/xml


## updatePlayer

> JoueurDto updatePlayer(id, joueurDto)

update un Joueur existant

update une Joueur existant

### Example

```javascript
import SwaggerSportApplicatiohOpenApi30 from 'swagger_sport_applicatioh_open_api_3_0';
let defaultClient = SwaggerSportApplicatiohOpenApi30.ApiClient.instance;
// Configure OAuth2 access token for authorization: sport_auth
let sport_auth = defaultClient.authentications['sport_auth'];
sport_auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SwaggerSportApplicatiohOpenApi30.JoueurApi();
let id = 56; // Number | The id that needs to be deleted
let joueurDto = new SwaggerSportApplicatiohOpenApi30.JoueurDto(); // JoueurDto | update a player
apiInstance.updatePlayer(id, joueurDto).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The id that needs to be deleted | 
 **joueurDto** | [**JoueurDto**](JoueurDto.md)| update a player | 

### Return type

[**JoueurDto**](JoueurDto.md)

### Authorization

[sport_auth](../README.md#sport_auth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


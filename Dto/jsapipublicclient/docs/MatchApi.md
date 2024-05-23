# SwaggerSportApplicatiohOpenApi30.MatchApi

All URIs are relative to *http://localhost:8080/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createMatch**](MatchApi.md#createMatch) | **POST** /matches | Créer un nouveau match
[**getAllMatches**](MatchApi.md#getAllMatches) | **GET** /matches | Récupérer tous les matchs
[**getMatchById**](MatchApi.md#getMatchById) | **GET** /matches/{id} | Récupérer un match par ID
[**revisioneMatch**](MatchApi.md#revisioneMatch) | **POST** /matches/{id} | rajouter des informations lié au match
[**updateMatchinformations**](MatchApi.md#updateMatchinformations) | **PATCH** /matches/{id} | modifier les information un  match



## createMatch

> MatchesDto createMatch(createMatchesDto)

Créer un nouveau match

Permet de créer un nouveau match avec les détails fournis.

### Example

```javascript
import SwaggerSportApplicatiohOpenApi30 from 'swagger_sport_applicatioh_open_api_3_0';
let defaultClient = SwaggerSportApplicatiohOpenApi30.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SwaggerSportApplicatiohOpenApi30.MatchApi();
let createMatchesDto = new SwaggerSportApplicatiohOpenApi30.CreateMatchesDto(); // CreateMatchesDto | 
apiInstance.createMatch(createMatchesDto).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createMatchesDto** | [**CreateMatchesDto**](CreateMatchesDto.md)|  | 

### Return type

[**MatchesDto**](MatchesDto.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getAllMatches

> [MatchesDto] getAllMatches()

Récupérer tous les matchs

Permet de récupérer tous les matchs disponibles.

### Example

```javascript
import SwaggerSportApplicatiohOpenApi30 from 'swagger_sport_applicatioh_open_api_3_0';
let defaultClient = SwaggerSportApplicatiohOpenApi30.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SwaggerSportApplicatiohOpenApi30.MatchApi();
apiInstance.getAllMatches().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[MatchesDto]**](MatchesDto.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getMatchById

> MatchesDto getMatchById(id)

Récupérer un match par ID

Permet de récupérer les détails d&#39;un match spécifique en fonction de son ID.

### Example

```javascript
import SwaggerSportApplicatiohOpenApi30 from 'swagger_sport_applicatioh_open_api_3_0';
let defaultClient = SwaggerSportApplicatiohOpenApi30.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SwaggerSportApplicatiohOpenApi30.MatchApi();
let id = "id_example"; // String | ID du match à récupérer
apiInstance.getMatchById(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID du match à récupérer | 

### Return type

[**MatchesDto**](MatchesDto.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## revisioneMatch

> revisioneMatch(id, matchesUpdateDto)

rajouter des informations lié au match

Permet de créer une update du match avec les détails fournis.

### Example

```javascript
import SwaggerSportApplicatiohOpenApi30 from 'swagger_sport_applicatioh_open_api_3_0';
let defaultClient = SwaggerSportApplicatiohOpenApi30.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SwaggerSportApplicatiohOpenApi30.MatchApi();
let id = "id_example"; // String | ID du match à récupérer
let matchesUpdateDto = new SwaggerSportApplicatiohOpenApi30.MatchesUpdateDto(); // MatchesUpdateDto | 
apiInstance.revisioneMatch(id, matchesUpdateDto).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID du match à récupérer | 
 **matchesUpdateDto** | [**MatchesUpdateDto**](MatchesUpdateDto.md)|  | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## updateMatchinformations

> MatchesDto updateMatchinformations(id, createMatchesDto)

modifier les information un  match

modifier les information un  match

### Example

```javascript
import SwaggerSportApplicatiohOpenApi30 from 'swagger_sport_applicatioh_open_api_3_0';
let defaultClient = SwaggerSportApplicatiohOpenApi30.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SwaggerSportApplicatiohOpenApi30.MatchApi();
let id = "id_example"; // String | ID du match à récupérer
let createMatchesDto = new SwaggerSportApplicatiohOpenApi30.CreateMatchesDto(); // CreateMatchesDto | 
apiInstance.updateMatchinformations(id, createMatchesDto).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID du match à récupérer | 
 **createMatchesDto** | [**CreateMatchesDto**](CreateMatchesDto.md)|  | 

### Return type

[**MatchesDto**](MatchesDto.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


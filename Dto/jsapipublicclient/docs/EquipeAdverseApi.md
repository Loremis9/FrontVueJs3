# SwaggerSportApplicatiohOpenApi30.EquipeAdverseApi

All URIs are relative to *http://localhost:8080/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createTeamAdverse**](EquipeAdverseApi.md#createTeamAdverse) | **POST** /EquipeAdverse | crée une nouvelle équipe
[**deleteTeamAdverse**](EquipeAdverseApi.md#deleteTeamAdverse) | **DELETE** /EquipeAdverse/{id} | Supprimer une équipe avec son id
[**getTeamAdverseById**](EquipeAdverseApi.md#getTeamAdverseById) | **GET** /EquipeAdverse/{id} | Récupérer une équipe par son id
[**getTeamAdverseByName**](EquipeAdverseApi.md#getTeamAdverseByName) | **GET** /EquipeAdverse/name/{name} | Récupérer une equipe adverse par son nom
[**updateTeamAdverse**](EquipeAdverseApi.md#updateTeamAdverse) | **PATCH** /EquipeAdverse/{id} | update une équipe existante



## createTeamAdverse

> EquipeAdverseDto createTeamAdverse(createEquipeAdverseDto)

crée une nouvelle équipe

crée une nouvelle équipe

### Example

```javascript
import SwaggerSportApplicatiohOpenApi30 from 'swagger_sport_applicatioh_open_api_3_0';

let apiInstance = new SwaggerSportApplicatiohOpenApi30.EquipeAdverseApi();
let createEquipeAdverseDto = new SwaggerSportApplicatiohOpenApi30.CreateEquipeAdverseDto(); // CreateEquipeAdverseDto | Create an new Team
apiInstance.createTeamAdverse(createEquipeAdverseDto).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createEquipeAdverseDto** | [**CreateEquipeAdverseDto**](CreateEquipeAdverseDto.md)| Create an new Team | 

### Return type

[**EquipeAdverseDto**](EquipeAdverseDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteTeamAdverse

> deleteTeamAdverse(id)

Supprimer une équipe avec son id

### Example

```javascript
import SwaggerSportApplicatiohOpenApi30 from 'swagger_sport_applicatioh_open_api_3_0';

let apiInstance = new SwaggerSportApplicatiohOpenApi30.EquipeAdverseApi();
let id = 56; // Number | The id that needs to be deleted
apiInstance.deleteTeamAdverse(id).then(() => {
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

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getTeamAdverseById

> EquipeAdverseDto getTeamAdverseById(id)

Récupérer une équipe par son id

### Example

```javascript
import SwaggerSportApplicatiohOpenApi30 from 'swagger_sport_applicatioh_open_api_3_0';

let apiInstance = new SwaggerSportApplicatiohOpenApi30.EquipeAdverseApi();
let id = 56; // Number | The id that needs to be deleted
apiInstance.getTeamAdverseById(id).then((data) => {
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

[**EquipeAdverseDto**](EquipeAdverseDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTeamAdverseByName

> EquipeAdverseDto getTeamAdverseByName(name)

Récupérer une equipe adverse par son nom

### Example

```javascript
import SwaggerSportApplicatiohOpenApi30 from 'swagger_sport_applicatioh_open_api_3_0';

let apiInstance = new SwaggerSportApplicatiohOpenApi30.EquipeAdverseApi();
let name = "name_example"; // String | The name that needs to be get
apiInstance.getTeamAdverseByName(name).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| The name that needs to be get | 

### Return type

[**EquipeAdverseDto**](EquipeAdverseDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateTeamAdverse

> EquipeAdverseDto updateTeamAdverse(id, updateEquipeAdverseDto)

update une équipe existante

update une équipe existante

### Example

```javascript
import SwaggerSportApplicatiohOpenApi30 from 'swagger_sport_applicatioh_open_api_3_0';

let apiInstance = new SwaggerSportApplicatiohOpenApi30.EquipeAdverseApi();
let id = 56; // Number | The id that needs to be deleted
let updateEquipeAdverseDto = new SwaggerSportApplicatiohOpenApi30.UpdateEquipeAdverseDto(); // UpdateEquipeAdverseDto | Create an new Team
apiInstance.updateTeamAdverse(id, updateEquipeAdverseDto).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The id that needs to be deleted | 
 **updateEquipeAdverseDto** | [**UpdateEquipeAdverseDto**](UpdateEquipeAdverseDto.md)| Create an new Team | 

### Return type

[**EquipeAdverseDto**](EquipeAdverseDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


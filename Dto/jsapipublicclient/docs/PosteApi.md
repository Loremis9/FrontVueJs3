# SwaggerSportApplicatiohOpenApi30.PosteApi

All URIs are relative to *http://localhost:8080/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAllPoste**](PosteApi.md#getAllPoste) | **GET** /Poste | récupérer tous les postes
[**getPosteById**](PosteApi.md#getPosteById) | **GET** /Poste/{id} | récupérer un poste par son id
[**getPosteByName**](PosteApi.md#getPosteByName) | **GET** /Poste/name/{name} | récupérer un poste par son nom



## getAllPoste

> [PosteDto] getAllPoste()

récupérer tous les postes

### Example

```javascript
import SwaggerSportApplicatiohOpenApi30 from 'swagger_sport_applicatioh_open_api_3_0';
let defaultClient = SwaggerSportApplicatiohOpenApi30.ApiClient.instance;
// Configure OAuth2 access token for authorization: sport_auth
let sport_auth = defaultClient.authentications['sport_auth'];
sport_auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SwaggerSportApplicatiohOpenApi30.PosteApi();
apiInstance.getAllPoste().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[PosteDto]**](PosteDto.md)

### Authorization

[sport_auth](../README.md#sport_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPosteById

> PosteDto getPosteById(id)

récupérer un poste par son id

### Example

```javascript
import SwaggerSportApplicatiohOpenApi30 from 'swagger_sport_applicatioh_open_api_3_0';
let defaultClient = SwaggerSportApplicatiohOpenApi30.ApiClient.instance;
// Configure OAuth2 access token for authorization: sport_auth
let sport_auth = defaultClient.authentications['sport_auth'];
sport_auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SwaggerSportApplicatiohOpenApi30.PosteApi();
let id = 56; // Number | The id of the poste to retrieve
apiInstance.getPosteById(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The id of the poste to retrieve | 

### Return type

[**PosteDto**](PosteDto.md)

### Authorization

[sport_auth](../README.md#sport_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPosteByName

> PosteDto getPosteByName(name)

récupérer un poste par son nom

### Example

```javascript
import SwaggerSportApplicatiohOpenApi30 from 'swagger_sport_applicatioh_open_api_3_0';
let defaultClient = SwaggerSportApplicatiohOpenApi30.ApiClient.instance;
// Configure OAuth2 access token for authorization: sport_auth
let sport_auth = defaultClient.authentications['sport_auth'];
sport_auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SwaggerSportApplicatiohOpenApi30.PosteApi();
let name = "name_example"; // String | The name of the poste to retrieve
apiInstance.getPosteByName(name).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| The name of the poste to retrieve | 

### Return type

[**PosteDto**](PosteDto.md)

### Authorization

[sport_auth](../README.md#sport_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


# SwaggerSportApplicatiohOpenApi30.DivisionApi

All URIs are relative to *http://localhost:8080/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAllDivision**](DivisionApi.md#getAllDivision) | **GET** /Division | Récupérer toutes les divisions
[**getDivisionById**](DivisionApi.md#getDivisionById) | **GET** /Division/{id} | récupérer une division par son id
[**getDivisionByName**](DivisionApi.md#getDivisionByName) | **GET** /Division/name/{name} | récupérer toutes les division par nom



## getAllDivision

> [DivisionDto] getAllDivision()

Récupérer toutes les divisions

### Example

```javascript
import SwaggerSportApplicatiohOpenApi30 from 'swagger_sport_applicatioh_open_api_3_0';
let defaultClient = SwaggerSportApplicatiohOpenApi30.ApiClient.instance;
// Configure OAuth2 access token for authorization: sport_auth
let sport_auth = defaultClient.authentications['sport_auth'];
sport_auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SwaggerSportApplicatiohOpenApi30.DivisionApi();
apiInstance.getAllDivision().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[DivisionDto]**](DivisionDto.md)

### Authorization

[sport_auth](../README.md#sport_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getDivisionById

> DivisionDto getDivisionById(id)

récupérer une division par son id

### Example

```javascript
import SwaggerSportApplicatiohOpenApi30 from 'swagger_sport_applicatioh_open_api_3_0';
let defaultClient = SwaggerSportApplicatiohOpenApi30.ApiClient.instance;
// Configure OAuth2 access token for authorization: sport_auth
let sport_auth = defaultClient.authentications['sport_auth'];
sport_auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SwaggerSportApplicatiohOpenApi30.DivisionApi();
let id = 56; // Number | The id of the Division to retrieve
apiInstance.getDivisionById(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The id of the Division to retrieve | 

### Return type

[**DivisionDto**](DivisionDto.md)

### Authorization

[sport_auth](../README.md#sport_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getDivisionByName

> DivisionDto getDivisionByName(name)

récupérer toutes les division par nom

### Example

```javascript
import SwaggerSportApplicatiohOpenApi30 from 'swagger_sport_applicatioh_open_api_3_0';
let defaultClient = SwaggerSportApplicatiohOpenApi30.ApiClient.instance;
// Configure OAuth2 access token for authorization: sport_auth
let sport_auth = defaultClient.authentications['sport_auth'];
sport_auth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new SwaggerSportApplicatiohOpenApi30.DivisionApi();
let name = "name_example"; // String | The name of the Division to retrieve
apiInstance.getDivisionByName(name).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| The name of the Division to retrieve | 

### Return type

[**DivisionDto**](DivisionDto.md)

### Authorization

[sport_auth](../README.md#sport_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


# SwaggerSportApplicatiohOpenApi30.StatMatchApi

All URIs are relative to *http://localhost:8080/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createStatMatch**](StatMatchApi.md#createStatMatch) | **POST** /StatMatch | crée un nouveau StatMatch
[**getStatMatchByMatchId**](StatMatchApi.md#getStatMatchByMatchId) | **GET** /StatMatch/{MatchId} | récupérer tous les StatMatch par matchId



## createStatMatch

> StatistiqueMatchDto createStatMatch(createStatistiqueMatchDto)

crée un nouveau StatMatch

crée un nouveau StatMatch

### Example

```javascript
import SwaggerSportApplicatiohOpenApi30 from 'swagger_sport_applicatioh_open_api_3_0';
let defaultClient = SwaggerSportApplicatiohOpenApi30.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SwaggerSportApplicatiohOpenApi30.StatMatchApi();
let createStatistiqueMatchDto = new SwaggerSportApplicatiohOpenApi30.CreateStatistiqueMatchDto(); // CreateStatistiqueMatchDto | Create an new StatMatch
apiInstance.createStatMatch(createStatistiqueMatchDto).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createStatistiqueMatchDto** | [**CreateStatistiqueMatchDto**](CreateStatistiqueMatchDto.md)| Create an new StatMatch | 

### Return type

[**StatistiqueMatchDto**](StatistiqueMatchDto.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getStatMatchByMatchId

> [StatistiqueMatchDto] getStatMatchByMatchId(matchId)

récupérer tous les StatMatch par matchId

### Example

```javascript
import SwaggerSportApplicatiohOpenApi30 from 'swagger_sport_applicatioh_open_api_3_0';
let defaultClient = SwaggerSportApplicatiohOpenApi30.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SwaggerSportApplicatiohOpenApi30.StatMatchApi();
let matchId = "matchId_example"; // String | The MacthId of the StatMatch to retrieve
apiInstance.getStatMatchByMatchId(matchId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **matchId** | **String**| The MacthId of the StatMatch to retrieve | 

### Return type

[**[StatistiqueMatchDto]**](StatistiqueMatchDto.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


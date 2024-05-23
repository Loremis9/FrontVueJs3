# SwaggerPetstoreOpenApi30.PublicMatchApi

All URIs are relative to *http://localhost:8080/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAllMatches**](PublicMatchApi.md#getAllMatches) | **POST** /publicmatches/getAllMatch | Récupérer tous les matchs des 7 derniers jours
[**getMatchTerminate**](PublicMatchApi.md#getMatchTerminate) | **GET** /publicmatches/terminer | Récupérer un match terminer
[**getMatchlive**](PublicMatchApi.md#getMatchlive) | **GET** /publicmatches/live | récupère tous les matchs en cours



## getAllMatches

> [PublicMatchesDto] getAllMatches(opts)

Récupérer tous les matchs des 7 derniers jours

Permet de récupérer tous les matchs disponibles.

### Example

```javascript
import SwaggerPetstoreOpenApi30 from 'swagger_petstore_open_api_3_0';
let defaultClient = SwaggerPetstoreOpenApi30.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SwaggerPetstoreOpenApi30.PublicMatchApi();
let opts = {
  'password': new SwaggerPetstoreOpenApi30.Password() // Password | user password
};
apiInstance.getAllMatches(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **password** | [**Password**](Password.md)| user password | [optional] 

### Return type

[**[PublicMatchesDto]**](PublicMatchesDto.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getMatchTerminate

> [PublicMatchesDto] getMatchTerminate()

Récupérer un match terminer

Permet de récupérer les détails des matchs terminer

### Example

```javascript
import SwaggerPetstoreOpenApi30 from 'swagger_petstore_open_api_3_0';

let apiInstance = new SwaggerPetstoreOpenApi30.PublicMatchApi();
apiInstance.getMatchTerminate().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[PublicMatchesDto]**](PublicMatchesDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getMatchlive

> [PublicMatchesDto] getMatchlive()

récupère tous les matchs en cours

Permet de récupérer tous les matchs en cours

### Example

```javascript
import SwaggerPetstoreOpenApi30 from 'swagger_petstore_open_api_3_0';

let apiInstance = new SwaggerPetstoreOpenApi30.PublicMatchApi();
apiInstance.getMatchlive().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[PublicMatchesDto]**](PublicMatchesDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


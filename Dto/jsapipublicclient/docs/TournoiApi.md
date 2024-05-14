# SwaggerSportApplicatiohOpenApi30.TournoiApi

All URIs are relative to *http://localhost:8080/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createTournoi**](TournoiApi.md#createTournoi) | **POST** /Tournoi | crée un nouveau tournoi
[**getAllTournois**](TournoiApi.md#getAllTournois) | **GET** /Tournoi | Récupérer toutes les tournois
[**getTournoiById**](TournoiApi.md#getTournoiById) | **GET** /Tournoi/{id} | récupérer un tournoi par son id
[**getTournoiByName**](TournoiApi.md#getTournoiByName) | **GET** /Tournoi/name/{name} | récupérer toutes les tournois par nom



## createTournoi

> TournoiDto createTournoi(createTournoiDto)

crée un nouveau tournoi

crée un nouveau tournoi

### Example

```javascript
import SwaggerSportApplicatiohOpenApi30 from 'swagger_sport_applicatioh_open_api_3_0';

let apiInstance = new SwaggerSportApplicatiohOpenApi30.TournoiApi();
let createTournoiDto = new SwaggerSportApplicatiohOpenApi30.CreateTournoiDto(); // CreateTournoiDto | Create an new Tournament
apiInstance.createTournoi(createTournoiDto).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createTournoiDto** | [**CreateTournoiDto**](CreateTournoiDto.md)| Create an new Tournament | 

### Return type

[**TournoiDto**](TournoiDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getAllTournois

> [TournoiDto] getAllTournois()

Récupérer toutes les tournois

### Example

```javascript
import SwaggerSportApplicatiohOpenApi30 from 'swagger_sport_applicatioh_open_api_3_0';

let apiInstance = new SwaggerSportApplicatiohOpenApi30.TournoiApi();
apiInstance.getAllTournois().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[TournoiDto]**](TournoiDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTournoiById

> TournoiDto getTournoiById(id)

récupérer un tournoi par son id

### Example

```javascript
import SwaggerSportApplicatiohOpenApi30 from 'swagger_sport_applicatioh_open_api_3_0';

let apiInstance = new SwaggerSportApplicatiohOpenApi30.TournoiApi();
let id = 56; // Number | The id of the Tournoi to retrieve
apiInstance.getTournoiById(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The id of the Tournoi to retrieve | 

### Return type

[**TournoiDto**](TournoiDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTournoiByName

> TournoiDto getTournoiByName(name)

récupérer toutes les tournois par nom

### Example

```javascript
import SwaggerSportApplicatiohOpenApi30 from 'swagger_sport_applicatioh_open_api_3_0';

let apiInstance = new SwaggerSportApplicatiohOpenApi30.TournoiApi();
let name = "name_example"; // String | The name of the Tournoi to retrieve
apiInstance.getTournoiByName(name).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| The name of the Tournoi to retrieve | 

### Return type

[**TournoiDto**](TournoiDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


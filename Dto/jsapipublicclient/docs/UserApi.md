# SwaggerSportApplicatiohOpenApi30.UserApi

All URIs are relative to *http://localhost:8080/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createUser**](UserApi.md#createUser) | **POST** /user/create | create user
[**loginUser**](UserApi.md#loginUser) | **POST** /user/authenticate | Logs user into the system
[**updateUser**](UserApi.md#updateUser) | **PUT** /user/{id} | Update user



## createUser

> UserDto createUser(createUserDto)

create user

### Example

```javascript
import SwaggerSportApplicatiohOpenApi30 from 'swagger_sport_applicatioh_open_api_3_0';
let defaultClient = SwaggerSportApplicatiohOpenApi30.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SwaggerSportApplicatiohOpenApi30.UserApi();
let createUserDto = new SwaggerSportApplicatiohOpenApi30.CreateUserDto(); // CreateUserDto | 
apiInstance.createUser(createUserDto).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createUserDto** | [**CreateUserDto**](CreateUserDto.md)|  | 

### Return type

[**UserDto**](UserDto.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## loginUser

> UserDtoResponse loginUser(userDtoRequest)

Logs user into the system

### Example

```javascript
import SwaggerSportApplicatiohOpenApi30 from 'swagger_sport_applicatioh_open_api_3_0';

let apiInstance = new SwaggerSportApplicatiohOpenApi30.UserApi();
let userDtoRequest = new SwaggerSportApplicatiohOpenApi30.UserDtoRequest(); // UserDtoRequest | 
apiInstance.loginUser(userDtoRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userDtoRequest** | [**UserDtoRequest**](UserDtoRequest.md)|  | 

### Return type

[**UserDtoResponse**](UserDtoResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateUser

> UserDto updateUser(id, userDto)

Update user

This can only be done by the logged in user.

### Example

```javascript
import SwaggerSportApplicatiohOpenApi30 from 'swagger_sport_applicatioh_open_api_3_0';
let defaultClient = SwaggerSportApplicatiohOpenApi30.ApiClient.instance;
// Configure Bearer (JWT) access token for authorization: bearerAuth
let bearerAuth = defaultClient.authentications['bearerAuth'];
bearerAuth.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new SwaggerSportApplicatiohOpenApi30.UserApi();
let id = 56; // Number | ID du match à récupérer
let userDto = new SwaggerSportApplicatiohOpenApi30.UserDto(); // UserDto | 
apiInstance.updateUser(id, userDto).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID du match à récupérer | 
 **userDto** | [**UserDto**](UserDto.md)|  | 

### Return type

[**UserDto**](UserDto.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


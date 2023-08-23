# \HotelConfigApi

All URIs are relative to */crm/config/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ChangeCommunicationType**](HotelConfigApi.md#ChangeCommunicationType) | **Put** /communicationTypes/{communicationTypeCode} | Change a  communication type
[**GetCommunicationTypes**](HotelConfigApi.md#GetCommunicationTypes) | **Get** /communicationTypes | Get communication types
[**PostCommunicationType**](HotelConfigApi.md#PostCommunicationType) | **Post** /communicationTypes | Create a  communication type
[**RemoveCommunicationType**](HotelConfigApi.md#RemoveCommunicationType) | **Delete** /communicationTypes/{communicationTypeCode} | Delete a communication type



## ChangeCommunicationType

> Status ChangeCommunicationType(ctx, communicationTypeCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CommunicationTypeToBeChanged(communicationTypeToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change a  communication type



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    communicationTypeCode := "communicationTypeCode_example" // string | Unique Code of communication Types.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    communicationTypeToBeChanged := *openapiclient.NewChangeCommunicationTypeRequest() // ChangeCommunicationTypeRequest | Request object for changing an existing Communication Type.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.ChangeCommunicationType(context.Background(), communicationTypeCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CommunicationTypeToBeChanged(communicationTypeToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.ChangeCommunicationType``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ChangeCommunicationType`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.ChangeCommunicationType`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**communicationTypeCode** | **string** | Unique Code of communication Types. | 

### Other Parameters

Other parameters are passed through a pointer to a apiChangeCommunicationTypeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **communicationTypeToBeChanged** | [**ChangeCommunicationTypeRequest**](ChangeCommunicationTypeRequest.md) | Request object for changing an existing Communication Type. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetCommunicationTypes

> CommunicationTypesDetails GetCommunicationTypes(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Codes(codes).Roles(roles).Description(description).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get communication types



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    codes := []string{"Inner_example"} // []string |  (optional)
    roles := []string{"Roles_example"} // []string | Phone Number Communication Role. (optional)
    description := "description_example" // string | Description of the Communication Types to be searched. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.GetCommunicationTypes(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Codes(codes).Roles(roles).Description(description).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.GetCommunicationTypes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetCommunicationTypes`: CommunicationTypesDetails
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.GetCommunicationTypes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetCommunicationTypesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **codes** | **[]string** |  | 
 **roles** | **[]string** | Phone Number Communication Role. | 
 **description** | **string** | Description of the Communication Types to be searched. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**CommunicationTypesDetails**](CommunicationTypesDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostCommunicationType

> Status PostCommunicationType(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CommunicationTypeCriteria(communicationTypeCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create a  communication type



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    communicationTypeCriteria := *openapiclient.NewPostCommunicationTypeRequest() // PostCommunicationTypeRequest | Request object for creating a new Communication Type.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.PostCommunicationType(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CommunicationTypeCriteria(communicationTypeCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.PostCommunicationType``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostCommunicationType`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.PostCommunicationType`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostCommunicationTypeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **communicationTypeCriteria** | [**PostCommunicationTypeRequest**](PostCommunicationTypeRequest.md) | Request object for creating a new Communication Type. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## RemoveCommunicationType

> Status RemoveCommunicationType(ctx, communicationTypeCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete a communication type



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    communicationTypeCode := "communicationTypeCode_example" // string | Unique Code of communication Types.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.RemoveCommunicationType(context.Background(), communicationTypeCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.RemoveCommunicationType``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `RemoveCommunicationType`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.RemoveCommunicationType`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**communicationTypeCode** | **string** | Unique Code of communication Types. | 

### Other Parameters

Other parameters are passed through a pointer to a apiRemoveCommunicationTypeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


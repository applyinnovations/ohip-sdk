# \ChainConfigApi

All URIs are relative to */rm/config/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**DeleteRoomPotentials**](ChainConfigApi.md#DeleteRoomPotentials) | **Delete** /roomPotentials/{roomPotentialsId} | Delete Room Potentials
[**GetBedTypes**](ChainConfigApi.md#GetBedTypes) | **Get** /bedTypes | Get bed types
[**GetRoomPotentials**](ChainConfigApi.md#GetRoomPotentials) | **Get** /roomPotentials | Get Room Potentials
[**PostRoomPotentials**](ChainConfigApi.md#PostRoomPotentials) | **Post** /roomPotentials | Create Room Potentials
[**PutRoomPotentials**](ChainConfigApi.md#PutRoomPotentials) | **Put** /roomPotentials/{roomPotentialsId} | Change Room Potentials



## DeleteRoomPotentials

> Status DeleteRoomPotentials(ctx, roomPotentialsId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoomPotentialsCodes(roomPotentialsCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete Room Potentials



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
    roomPotentialsId := "roomPotentialsId_example" // string | Unique ID of Room Potentials.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    roomPotentialsCodes := []string{"Inner_example"} // []string |  (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChainConfigApi.DeleteRoomPotentials(context.Background(), roomPotentialsId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoomPotentialsCodes(roomPotentialsCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChainConfigApi.DeleteRoomPotentials``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteRoomPotentials`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChainConfigApi.DeleteRoomPotentials`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**roomPotentialsId** | **string** | Unique ID of Room Potentials. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteRoomPotentialsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **roomPotentialsCodes** | **[]string** |  | 
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


## GetBedTypes

> BedTypesDetails GetBedTypes(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FetchInactive(fetchInactive).Codes(codes).WildCard(wildCard).Description(description).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get bed types



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
    fetchInactive := true // bool | Determines wether to fetch inactive records or not. (optional)
    codes := []string{"Inner_example"} // []string | Codes to be searched. (optional)
    wildCard := "wildCard_example" // string | Wildcard search on the code. (optional)
    description := "description_example" // string | Description of the code. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChainConfigApi.GetBedTypes(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FetchInactive(fetchInactive).Codes(codes).WildCard(wildCard).Description(description).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChainConfigApi.GetBedTypes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetBedTypes`: BedTypesDetails
    fmt.Fprintf(os.Stdout, "Response from `ChainConfigApi.GetBedTypes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetBedTypesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **fetchInactive** | **bool** | Determines wether to fetch inactive records or not. | 
 **codes** | **[]string** | Codes to be searched. | 
 **wildCard** | **string** | Wildcard search on the code. | 
 **description** | **string** | Description of the code. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**BedTypesDetails**](BedTypesDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetRoomPotentials

> RoomPotentialsDetails GetRoomPotentials(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FetchInactive(fetchInactive).Codes(codes).WildCard(wildCard).Description(description).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Room Potentials



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
    fetchInactive := true // bool | Determines wether to fetch inactive records or not. (optional)
    codes := []string{"Inner_example"} // []string | Codes to be searched. (optional)
    wildCard := "wildCard_example" // string | Wildcard search on the code. (optional)
    description := "description_example" // string | Description of the code. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChainConfigApi.GetRoomPotentials(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FetchInactive(fetchInactive).Codes(codes).WildCard(wildCard).Description(description).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChainConfigApi.GetRoomPotentials``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetRoomPotentials`: RoomPotentialsDetails
    fmt.Fprintf(os.Stdout, "Response from `ChainConfigApi.GetRoomPotentials`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetRoomPotentialsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **fetchInactive** | **bool** | Determines wether to fetch inactive records or not. | 
 **codes** | **[]string** | Codes to be searched. | 
 **wildCard** | **string** | Wildcard search on the code. | 
 **description** | **string** | Description of the code. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**RoomPotentialsDetails**](RoomPotentialsDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostRoomPotentials

> Status PostRoomPotentials(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoomPotentialsCriteria(roomPotentialsCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create Room Potentials



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
    roomPotentialsCriteria := *openapiclient.NewPostRoomPotentialsRequest() // PostRoomPotentialsRequest | Request object for creating Room Potentials.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChainConfigApi.PostRoomPotentials(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoomPotentialsCriteria(roomPotentialsCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChainConfigApi.PostRoomPotentials``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostRoomPotentials`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChainConfigApi.PostRoomPotentials`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostRoomPotentialsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **roomPotentialsCriteria** | [**PostRoomPotentialsRequest**](PostRoomPotentialsRequest.md) | Request object for creating Room Potentials. | 
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


## PutRoomPotentials

> Status PutRoomPotentials(ctx, roomPotentialsId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoomPotentialsToBeChanged(roomPotentialsToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change Room Potentials



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
    roomPotentialsId := "roomPotentialsId_example" // string | Unique ID of Room Potentials.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    roomPotentialsToBeChanged := *openapiclient.NewPutRoomPotentialsRequest() // PutRoomPotentialsRequest | Request object for changing Room Potentials.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChainConfigApi.PutRoomPotentials(context.Background(), roomPotentialsId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoomPotentialsToBeChanged(roomPotentialsToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChainConfigApi.PutRoomPotentials``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutRoomPotentials`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChainConfigApi.PutRoomPotentials`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**roomPotentialsId** | **string** | Unique ID of Room Potentials. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutRoomPotentialsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **roomPotentialsToBeChanged** | [**PutRoomPotentialsRequest**](PutRoomPotentialsRequest.md) | Request object for changing Room Potentials. | 
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


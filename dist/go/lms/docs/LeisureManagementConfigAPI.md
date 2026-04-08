# \LeisureManagementConfigAPI

All URIs are relative to */lms/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CopyActivityLocations**](LeisureManagementConfigAPI.md#CopyActivityLocations) | **Put** /activityLocations/{activityLocationsId}/copy | Copy Activity Locations
[**CopyActivityTypes**](LeisureManagementConfigAPI.md#CopyActivityTypes) | **Put** /activityTypes/{activityTypesId}/copy | Copy Activity Types
[**DeleteActivityLocations**](LeisureManagementConfigAPI.md#DeleteActivityLocations) | **Delete** /activityLocations/{activityLocationsId} | Remove Activity Locations
[**DeleteActivityStatusCodes**](LeisureManagementConfigAPI.md#DeleteActivityStatusCodes) | **Delete** /activityStatusCodes/{activityStatusCodesId} | Remove Activity Status Code
[**DeleteActivityTypes**](LeisureManagementConfigAPI.md#DeleteActivityTypes) | **Delete** /activityTypes/{activityTypesId} | Remove Activity Types
[**GetActivityLocations**](LeisureManagementConfigAPI.md#GetActivityLocations) | **Get** /activityLocations | Look up of Activity Locations
[**GetActivityStatusCodes**](LeisureManagementConfigAPI.md#GetActivityStatusCodes) | **Get** /activityStatusCodes | Get Activity Status Codes
[**GetActivityTypes**](LeisureManagementConfigAPI.md#GetActivityTypes) | **Get** /activityTypes | Fetch Activity Types
[**PostActivityLocations**](LeisureManagementConfigAPI.md#PostActivityLocations) | **Post** /activityLocations | Create an Activity Locations
[**PostActivityStatusCodes**](LeisureManagementConfigAPI.md#PostActivityStatusCodes) | **Post** /activityStatusCodes | Create Activity Status Code
[**PostActivityTypes**](LeisureManagementConfigAPI.md#PostActivityTypes) | **Post** /activityTypes | Create Activity Types
[**PutActivityLocations**](LeisureManagementConfigAPI.md#PutActivityLocations) | **Put** /activityLocations/{activityLocationsId} | Change in Activity Locations
[**PutActivityStatusCodes**](LeisureManagementConfigAPI.md#PutActivityStatusCodes) | **Put** /activityStatusCodes/{activityStatusCodesId} | Change Activity Status Code
[**PutActivityTypes**](LeisureManagementConfigAPI.md#PutActivityTypes) | **Put** /activityTypes/{activityTypesId} | Change Activity Types



## CopyActivityLocations

> CopyActivityLocationsRS CopyActivityLocations(ctx, activityLocationsId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CopyActivityLocations(copyActivityLocations).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Copy Activity Locations



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/lms"
)

func main() {
    activityLocationsId := "activityLocationsId_example" // string | OPERA Source Activity locations id
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    copyActivityLocations := *openapiclient.NewCopyActivityLocations() // CopyActivityLocations | Request object for copying Activity Locations to hotel(s).
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.LeisureManagementConfigAPI.CopyActivityLocations(context.Background(), activityLocationsId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CopyActivityLocations(copyActivityLocations).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `LeisureManagementConfigAPI.CopyActivityLocations``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CopyActivityLocations`: CopyActivityLocationsRS
    fmt.Fprintf(os.Stdout, "Response from `LeisureManagementConfigAPI.CopyActivityLocations`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**activityLocationsId** | **string** | OPERA Source Activity locations id | 

### Other Parameters

Other parameters are passed through a pointer to a apiCopyActivityLocationsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **copyActivityLocations** | [**CopyActivityLocations**](CopyActivityLocations.md) | Request object for copying Activity Locations to hotel(s). | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**CopyActivityLocationsRS**](CopyActivityLocationsRS.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## CopyActivityTypes

> CopyActivityTypesRS CopyActivityTypes(ctx, activityTypesId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CopyActivityTypes(copyActivityTypes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Copy Activity Types



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/lms"
)

func main() {
    activityTypesId := "activityTypesId_example" // string | OPERA Activity types id
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    copyActivityTypes := *openapiclient.NewCopyActivityTypes() // CopyActivityTypes | Request object for copying Activity Types to hotel(s).
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.LeisureManagementConfigAPI.CopyActivityTypes(context.Background(), activityTypesId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CopyActivityTypes(copyActivityTypes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `LeisureManagementConfigAPI.CopyActivityTypes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CopyActivityTypes`: CopyActivityTypesRS
    fmt.Fprintf(os.Stdout, "Response from `LeisureManagementConfigAPI.CopyActivityTypes`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**activityTypesId** | **string** | OPERA Activity types id | 

### Other Parameters

Other parameters are passed through a pointer to a apiCopyActivityTypesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **copyActivityTypes** | [**CopyActivityTypes**](CopyActivityTypes.md) | Request object for copying Activity Types to hotel(s). | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**CopyActivityTypesRS**](CopyActivityTypesRS.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteActivityLocations

> Status DeleteActivityLocations(ctx, activityLocationsId).HotelIds(hotelIds).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Remove Activity Locations



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/lms"
)

func main() {
    activityLocationsId := "activityLocationsId_example" // string | OPERA Activity locations id
    hotelIds := "hotelIds_example" // string | Hotel where the code is configured.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.LeisureManagementConfigAPI.DeleteActivityLocations(context.Background(), activityLocationsId).HotelIds(hotelIds).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `LeisureManagementConfigAPI.DeleteActivityLocations``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteActivityLocations`: Status
    fmt.Fprintf(os.Stdout, "Response from `LeisureManagementConfigAPI.DeleteActivityLocations`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**activityLocationsId** | **string** | OPERA Activity locations id | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteActivityLocationsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **hotelIds** | **string** | Hotel where the code is configured. | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
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


## DeleteActivityStatusCodes

> Status DeleteActivityStatusCodes(ctx, activityStatusCodesId).HotelIds(hotelIds).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Remove Activity Status Code



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/lms"
)

func main() {
    activityStatusCodesId := "activityStatusCodesId_example" // string | OPERA Activity status codes
    hotelIds := "hotelIds_example" // string | Hotel where the code is configured.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.LeisureManagementConfigAPI.DeleteActivityStatusCodes(context.Background(), activityStatusCodesId).HotelIds(hotelIds).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `LeisureManagementConfigAPI.DeleteActivityStatusCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteActivityStatusCodes`: Status
    fmt.Fprintf(os.Stdout, "Response from `LeisureManagementConfigAPI.DeleteActivityStatusCodes`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**activityStatusCodesId** | **string** | OPERA Activity status codes | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteActivityStatusCodesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **hotelIds** | **string** | Hotel where the code is configured. | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
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


## DeleteActivityTypes

> Status DeleteActivityTypes(ctx, activityTypesId).HotelIds(hotelIds).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Remove Activity Types



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/lms"
)

func main() {
    activityTypesId := "activityTypesId_example" // string | OPERA Activity types id
    hotelIds := "hotelIds_example" // string | Hotel where the code is configured.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.LeisureManagementConfigAPI.DeleteActivityTypes(context.Background(), activityTypesId).HotelIds(hotelIds).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `LeisureManagementConfigAPI.DeleteActivityTypes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteActivityTypes`: Status
    fmt.Fprintf(os.Stdout, "Response from `LeisureManagementConfigAPI.DeleteActivityTypes`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**activityTypesId** | **string** | OPERA Activity types id | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteActivityTypesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **hotelIds** | **string** | Hotel where the code is configured. | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
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


## GetActivityLocations

> FetchActivityLocations GetActivityLocations(ctx).HotelIds(hotelIds).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CriteriaCodes(criteriaCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Look up of Activity Locations



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/lms"
)

func main() {
    hotelIds := []string{"Inner_example"} // []string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    criteriaCodes := []string{"Inner_example"} // []string |  (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.LeisureManagementConfigAPI.GetActivityLocations(context.Background()).HotelIds(hotelIds).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CriteriaCodes(criteriaCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `LeisureManagementConfigAPI.GetActivityLocations``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetActivityLocations`: FetchActivityLocations
    fmt.Fprintf(os.Stdout, "Response from `LeisureManagementConfigAPI.GetActivityLocations`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetActivityLocationsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hotelIds** | **[]string** |  | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **criteriaCodes** | **[]string** |  | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**FetchActivityLocations**](FetchActivityLocations.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetActivityStatusCodes

> FetchActivityStatusCodes GetActivityStatusCodes(ctx).HotelIds(hotelIds).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CriteriaCodes(criteriaCodes).ApplicationCodes(applicationCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Activity Status Codes



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/lms"
)

func main() {
    hotelIds := []string{"Inner_example"} // []string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    criteriaCodes := []string{"Inner_example"} // []string |  (optional)
    applicationCodes := []string{"Inner_example"} // []string |  (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.LeisureManagementConfigAPI.GetActivityStatusCodes(context.Background()).HotelIds(hotelIds).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CriteriaCodes(criteriaCodes).ApplicationCodes(applicationCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `LeisureManagementConfigAPI.GetActivityStatusCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetActivityStatusCodes`: FetchActivityStatusCodes
    fmt.Fprintf(os.Stdout, "Response from `LeisureManagementConfigAPI.GetActivityStatusCodes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetActivityStatusCodesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hotelIds** | **[]string** |  | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **criteriaCodes** | **[]string** |  | 
 **applicationCodes** | **[]string** |  | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**FetchActivityStatusCodes**](FetchActivityStatusCodes.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetActivityTypes

> FetchActivityTypes GetActivityTypes(ctx).HotelIds(hotelIds).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TypeCodes(typeCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Fetch Activity Types



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/lms"
)

func main() {
    hotelIds := []string{"Inner_example"} // []string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    typeCodes := []string{"Inner_example"} // []string |  (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.LeisureManagementConfigAPI.GetActivityTypes(context.Background()).HotelIds(hotelIds).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TypeCodes(typeCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `LeisureManagementConfigAPI.GetActivityTypes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetActivityTypes`: FetchActivityTypes
    fmt.Fprintf(os.Stdout, "Response from `LeisureManagementConfigAPI.GetActivityTypes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetActivityTypesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hotelIds** | **[]string** |  | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **typeCodes** | **[]string** |  | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**FetchActivityTypes**](FetchActivityTypes.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostActivityLocations

> Status PostActivityLocations(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CreateActivityLocations(createActivityLocations).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create an Activity Locations



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/lms"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    createActivityLocations := *openapiclient.NewCreateActivityLocations() // CreateActivityLocations | Request object for creating Activity Locations.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.LeisureManagementConfigAPI.PostActivityLocations(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CreateActivityLocations(createActivityLocations).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `LeisureManagementConfigAPI.PostActivityLocations``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostActivityLocations`: Status
    fmt.Fprintf(os.Stdout, "Response from `LeisureManagementConfigAPI.PostActivityLocations`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostActivityLocationsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **createActivityLocations** | [**CreateActivityLocations**](CreateActivityLocations.md) | Request object for creating Activity Locations. | 
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


## PostActivityStatusCodes

> Status PostActivityStatusCodes(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CreateActivityStatusCodes(createActivityStatusCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create Activity Status Code



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/lms"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    createActivityStatusCodes := *openapiclient.NewCreateActivityStatusCodes() // CreateActivityStatusCodes | Request object for creating Activity Status Codes.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.LeisureManagementConfigAPI.PostActivityStatusCodes(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CreateActivityStatusCodes(createActivityStatusCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `LeisureManagementConfigAPI.PostActivityStatusCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostActivityStatusCodes`: Status
    fmt.Fprintf(os.Stdout, "Response from `LeisureManagementConfigAPI.PostActivityStatusCodes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostActivityStatusCodesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **createActivityStatusCodes** | [**CreateActivityStatusCodes**](CreateActivityStatusCodes.md) | Request object for creating Activity Status Codes. | 
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


## PostActivityTypes

> Status PostActivityTypes(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CreateActivityTypes(createActivityTypes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create Activity Types



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/lms"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    createActivityTypes := *openapiclient.NewCreateActivityTypes() // CreateActivityTypes | Request object for creating Activity Types.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.LeisureManagementConfigAPI.PostActivityTypes(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CreateActivityTypes(createActivityTypes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `LeisureManagementConfigAPI.PostActivityTypes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostActivityTypes`: Status
    fmt.Fprintf(os.Stdout, "Response from `LeisureManagementConfigAPI.PostActivityTypes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostActivityTypesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **createActivityTypes** | [**CreateActivityTypes**](CreateActivityTypes.md) | Request object for creating Activity Types. | 
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


## PutActivityLocations

> ChangeActivityLocationsRS PutActivityLocations(ctx, activityLocationsId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChangeActivityLocations(changeActivityLocations).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change in Activity Locations



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/lms"
)

func main() {
    activityLocationsId := "activityLocationsId_example" // string | OPERA Activity locations id
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    changeActivityLocations := *openapiclient.NewChangeActivityLocations() // ChangeActivityLocations | Request object for changing Activity Locations.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.LeisureManagementConfigAPI.PutActivityLocations(context.Background(), activityLocationsId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChangeActivityLocations(changeActivityLocations).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `LeisureManagementConfigAPI.PutActivityLocations``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutActivityLocations`: ChangeActivityLocationsRS
    fmt.Fprintf(os.Stdout, "Response from `LeisureManagementConfigAPI.PutActivityLocations`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**activityLocationsId** | **string** | OPERA Activity locations id | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutActivityLocationsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **changeActivityLocations** | [**ChangeActivityLocations**](ChangeActivityLocations.md) | Request object for changing Activity Locations. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ChangeActivityLocationsRS**](ChangeActivityLocationsRS.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutActivityStatusCodes

> ChangeActivityStatusCodesRS PutActivityStatusCodes(ctx, activityStatusCodesId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChangeActivityStatusCodes(changeActivityStatusCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change Activity Status Code



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/lms"
)

func main() {
    activityStatusCodesId := "activityStatusCodesId_example" // string | OPERA Activity status codes
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    changeActivityStatusCodes := *openapiclient.NewChangeActivityStatusCodes() // ChangeActivityStatusCodes | Request object for changing Activity Status Codes.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.LeisureManagementConfigAPI.PutActivityStatusCodes(context.Background(), activityStatusCodesId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChangeActivityStatusCodes(changeActivityStatusCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `LeisureManagementConfigAPI.PutActivityStatusCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutActivityStatusCodes`: ChangeActivityStatusCodesRS
    fmt.Fprintf(os.Stdout, "Response from `LeisureManagementConfigAPI.PutActivityStatusCodes`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**activityStatusCodesId** | **string** | OPERA Activity status codes | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutActivityStatusCodesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **changeActivityStatusCodes** | [**ChangeActivityStatusCodes**](ChangeActivityStatusCodes.md) | Request object for changing Activity Status Codes. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ChangeActivityStatusCodesRS**](ChangeActivityStatusCodesRS.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutActivityTypes

> ChangeActivityTypesRS PutActivityTypes(ctx, activityTypesId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChangeActivityTypes(changeActivityTypes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change Activity Types



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/lms"
)

func main() {
    activityTypesId := "activityTypesId_example" // string | OPERA Activity types id
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    changeActivityTypes := *openapiclient.NewChangeActivityTypes() // ChangeActivityTypes | Request object for changing Activity Types.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.LeisureManagementConfigAPI.PutActivityTypes(context.Background(), activityTypesId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChangeActivityTypes(changeActivityTypes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `LeisureManagementConfigAPI.PutActivityTypes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutActivityTypes`: ChangeActivityTypesRS
    fmt.Fprintf(os.Stdout, "Response from `LeisureManagementConfigAPI.PutActivityTypes`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**activityTypesId** | **string** | OPERA Activity types id | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutActivityTypesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **changeActivityTypes** | [**ChangeActivityTypes**](ChangeActivityTypes.md) | Request object for changing Activity Types. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ChangeActivityTypesRS**](ChangeActivityTypesRS.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


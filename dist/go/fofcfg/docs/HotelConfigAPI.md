# \HotelConfigAPI

All URIs are relative to */fof/config/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ChangeTrackItActions**](HotelConfigAPI.md#ChangeTrackItActions) | **Put** /hotels/{hotelId}/trackItActions/{actionCode} | Change Track it Actions
[**ChangeTrackItLocations**](HotelConfigAPI.md#ChangeTrackItLocations) | **Put** /hotels/{hotelId}/trackItLocations/{locationCode} | Change Track it Locations
[**ChangeTrackItTypes**](HotelConfigAPI.md#ChangeTrackItTypes) | **Put** /hotels/{hotelId}/trackItTypes/{typeCode} | Change Track it Types
[**CopyTrackItActions**](HotelConfigAPI.md#CopyTrackItActions) | **Put** /hotels/{sourceHotelId}/trackItActions/copy |  Copy Track it Actions
[**CopyTrackItLocations**](HotelConfigAPI.md#CopyTrackItLocations) | **Put** /hotels/{sourceHotelId}/trackItLocations/copy |  Copy Track it Locations
[**CopyTrackItTypes**](HotelConfigAPI.md#CopyTrackItTypes) | **Put** /hotels/{sourceHotelId}/trackItTypes/copy |  Copy Track it Types
[**GetTrackItActions**](HotelConfigAPI.md#GetTrackItActions) | **Get** /hotels/{hotelId}/trackItActions | Get Track it Actions
[**GetTrackItLocations**](HotelConfigAPI.md#GetTrackItLocations) | **Get** /hotels/{hotelId}/trackItLocations | Get Track it Locations
[**GetTrackItTypes**](HotelConfigAPI.md#GetTrackItTypes) | **Get** /hotels/{hotelId}/trackItTypes | Get Track it Types
[**PostTrackItActions**](HotelConfigAPI.md#PostTrackItActions) | **Post** /hotels/{hotelId}/trackItActions | Create Track it Actions
[**PostTrackItLocations**](HotelConfigAPI.md#PostTrackItLocations) | **Post** /hotels/{hotelId}/trackItLocations | Create Track it Locations
[**PostTrackItTypes**](HotelConfigAPI.md#PostTrackItTypes) | **Post** /hotels/{hotelId}/trackItTypes | Create Track it Types
[**RemoveTrackItActions**](HotelConfigAPI.md#RemoveTrackItActions) | **Delete** /hotels/{hotelId}/trackItActions/{actionCode} | Delete Track it Actions
[**RemoveTrackItLocations**](HotelConfigAPI.md#RemoveTrackItLocations) | **Delete** /hotels/{hotelId}/trackItLocations/{locationCode} | Delete Track it Locations
[**RemoveTrackItTypes**](HotelConfigAPI.md#RemoveTrackItTypes) | **Delete** /hotels/{hotelId}/trackItTypes/{typeCode} | Delete Track it Types



## ChangeTrackItActions

> Status ChangeTrackItActions(ctx, actionCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TrackItActionsToBeChanged(trackItActionsToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change Track it Actions



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    actionCode := "actionCode_example" // string | Unique Code of action.
    hotelId := "hotelId_example" // string | Unique ID of hotel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    trackItActionsToBeChanged := *openapiclient.NewTrackItActionsToBeChanged() // TrackItActionsToBeChanged | Request object for changing existing Track it Actions.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigAPI.ChangeTrackItActions(context.Background(), actionCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TrackItActionsToBeChanged(trackItActionsToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigAPI.ChangeTrackItActions``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ChangeTrackItActions`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigAPI.ChangeTrackItActions`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**actionCode** | **string** | Unique Code of action. | 
**hotelId** | **string** | Unique ID of hotel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiChangeTrackItActionsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **trackItActionsToBeChanged** | [**TrackItActionsToBeChanged**](TrackItActionsToBeChanged.md) | Request object for changing existing Track it Actions. | 
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


## ChangeTrackItLocations

> Status ChangeTrackItLocations(ctx, locationCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TrackItLocationsToBeChanged(trackItLocationsToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change Track it Locations



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    locationCode := "locationCode_example" // string | Unique Code of location.
    hotelId := "hotelId_example" // string | Unique ID of hotel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    trackItLocationsToBeChanged := *openapiclient.NewTrackItLocationsToBeChanged() // TrackItLocationsToBeChanged | Request object for changing existing Track it Locations.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigAPI.ChangeTrackItLocations(context.Background(), locationCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TrackItLocationsToBeChanged(trackItLocationsToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigAPI.ChangeTrackItLocations``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ChangeTrackItLocations`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigAPI.ChangeTrackItLocations`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**locationCode** | **string** | Unique Code of location. | 
**hotelId** | **string** | Unique ID of hotel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiChangeTrackItLocationsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **trackItLocationsToBeChanged** | [**TrackItLocationsToBeChanged**](TrackItLocationsToBeChanged.md) | Request object for changing existing Track it Locations. | 
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


## ChangeTrackItTypes

> Status ChangeTrackItTypes(ctx, typeCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TrackItTypesToBeChanged(trackItTypesToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change Track it Types



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    typeCode := "typeCode_example" // string | Unique Code of track it type.
    hotelId := "hotelId_example" // string | Unique ID of hotel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    trackItTypesToBeChanged := *openapiclient.NewTrackItTypesToBeChanged() // TrackItTypesToBeChanged | Request object for changing existing Track it Types.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigAPI.ChangeTrackItTypes(context.Background(), typeCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TrackItTypesToBeChanged(trackItTypesToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigAPI.ChangeTrackItTypes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ChangeTrackItTypes`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigAPI.ChangeTrackItTypes`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**typeCode** | **string** | Unique Code of track it type. | 
**hotelId** | **string** | Unique ID of hotel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiChangeTrackItTypesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **trackItTypesToBeChanged** | [**TrackItTypesToBeChanged**](TrackItTypesToBeChanged.md) | Request object for changing existing Track it Types. | 
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


## CopyTrackItActions

> Status CopyTrackItActions(ctx, sourceHotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CopyTrackItActions(copyTrackItActions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

 Copy Track it Actions



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    sourceHotelId := "sourceHotelId_example" // string | Unique ID of source hotel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    copyTrackItActions := *openapiclient.NewCopyTrackItActions() // CopyTrackItActions | List of Track it Actions to be copied.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigAPI.CopyTrackItActions(context.Background(), sourceHotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CopyTrackItActions(copyTrackItActions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigAPI.CopyTrackItActions``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CopyTrackItActions`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigAPI.CopyTrackItActions`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceHotelId** | **string** | Unique ID of source hotel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiCopyTrackItActionsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **copyTrackItActions** | [**CopyTrackItActions**](CopyTrackItActions.md) | List of Track it Actions to be copied. | 
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


## CopyTrackItLocations

> Status CopyTrackItLocations(ctx, sourceHotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CopyTrackItLocations(copyTrackItLocations).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

 Copy Track it Locations



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    sourceHotelId := "sourceHotelId_example" // string | Unique ID of source hotel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    copyTrackItLocations := *openapiclient.NewCopyTrackItLocations() // CopyTrackItLocations | List of Track it Locations to be copied.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigAPI.CopyTrackItLocations(context.Background(), sourceHotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CopyTrackItLocations(copyTrackItLocations).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigAPI.CopyTrackItLocations``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CopyTrackItLocations`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigAPI.CopyTrackItLocations`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceHotelId** | **string** | Unique ID of source hotel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiCopyTrackItLocationsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **copyTrackItLocations** | [**CopyTrackItLocations**](CopyTrackItLocations.md) | List of Track it Locations to be copied. | 
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


## CopyTrackItTypes

> Status CopyTrackItTypes(ctx, sourceHotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CopyTrackItTypes(copyTrackItTypes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

 Copy Track it Types



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    sourceHotelId := "sourceHotelId_example" // string | Unique ID of source hotel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    copyTrackItTypes := *openapiclient.NewCopyTrackItTypes() // CopyTrackItTypes | List of Track it Types to be copied.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigAPI.CopyTrackItTypes(context.Background(), sourceHotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CopyTrackItTypes(copyTrackItTypes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigAPI.CopyTrackItTypes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CopyTrackItTypes`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigAPI.CopyTrackItTypes`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceHotelId** | **string** | Unique ID of source hotel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiCopyTrackItTypesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **copyTrackItTypes** | [**CopyTrackItTypes**](CopyTrackItTypes.md) | List of Track it Types to be copied. | 
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


## GetTrackItActions

> TrackItActionsDetails GetTrackItActions(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelIds(hotelIds).Codes(codes).WildCard(wildCard).ShowInactive(showInactive).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Track it Actions



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of hotel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    hotelIds := []string{"Inner_example"} // []string | Hotel code. (optional)
    codes := []string{"Inner_example"} // []string | Codes to be searched. (optional)
    wildCard := "wildCard_example" // string | Wildcard search on the code. (optional)
    showInactive := true // bool | If true this boolean will set the criteria to only return Inactive records. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigAPI.GetTrackItActions(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelIds(hotelIds).Codes(codes).WildCard(wildCard).ShowInactive(showInactive).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigAPI.GetTrackItActions``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetTrackItActions`: TrackItActionsDetails
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigAPI.GetTrackItActions`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of hotel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetTrackItActionsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **hotelIds** | **[]string** | Hotel code. | 
 **codes** | **[]string** | Codes to be searched. | 
 **wildCard** | **string** | Wildcard search on the code. | 
 **showInactive** | **bool** | If true this boolean will set the criteria to only return Inactive records. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**TrackItActionsDetails**](TrackItActionsDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetTrackItLocations

> TrackItLocationsDetails GetTrackItLocations(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelIds(hotelIds).Codes(codes).WildCard(wildCard).ShowInactive(showInactive).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Track it Locations



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of hotel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    hotelIds := []string{"Inner_example"} // []string | Hotel code. (optional)
    codes := []string{"Inner_example"} // []string | Codes to be searched. (optional)
    wildCard := "wildCard_example" // string | Wildcard search on the code. (optional)
    showInactive := true // bool | If true this boolean will set the criteria to only return Inactive records. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigAPI.GetTrackItLocations(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelIds(hotelIds).Codes(codes).WildCard(wildCard).ShowInactive(showInactive).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigAPI.GetTrackItLocations``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetTrackItLocations`: TrackItLocationsDetails
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigAPI.GetTrackItLocations`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of hotel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetTrackItLocationsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **hotelIds** | **[]string** | Hotel code. | 
 **codes** | **[]string** | Codes to be searched. | 
 **wildCard** | **string** | Wildcard search on the code. | 
 **showInactive** | **bool** | If true this boolean will set the criteria to only return Inactive records. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**TrackItLocationsDetails**](TrackItLocationsDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetTrackItTypes

> TrackItTypesDetails GetTrackItTypes(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelIds(hotelIds).Codes(codes).WildCard(wildCard).ShowInactive(showInactive).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Track it Types



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of hotel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    hotelIds := []string{"Inner_example"} // []string | Hotel code. (optional)
    codes := []string{"Inner_example"} // []string | Codes to be searched. (optional)
    wildCard := "wildCard_example" // string | Wildcard search on the code. (optional)
    showInactive := true // bool | If true this boolean will set the criteria to only return Inactive records. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigAPI.GetTrackItTypes(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelIds(hotelIds).Codes(codes).WildCard(wildCard).ShowInactive(showInactive).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigAPI.GetTrackItTypes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetTrackItTypes`: TrackItTypesDetails
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigAPI.GetTrackItTypes`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of hotel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetTrackItTypesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **hotelIds** | **[]string** | Hotel code. | 
 **codes** | **[]string** | Codes to be searched. | 
 **wildCard** | **string** | Wildcard search on the code. | 
 **showInactive** | **bool** | If true this boolean will set the criteria to only return Inactive records. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**TrackItTypesDetails**](TrackItTypesDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostTrackItActions

> Status PostTrackItActions(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TrackItActionsCriteria(trackItActionsCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create Track it Actions



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of hotel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    trackItActionsCriteria := *openapiclient.NewTrackItActionsCriteria() // TrackItActionsCriteria | Request object for creating new Track it Actions.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigAPI.PostTrackItActions(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TrackItActionsCriteria(trackItActionsCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigAPI.PostTrackItActions``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostTrackItActions`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigAPI.PostTrackItActions`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of hotel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostTrackItActionsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **trackItActionsCriteria** | [**TrackItActionsCriteria**](TrackItActionsCriteria.md) | Request object for creating new Track it Actions. | 
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


## PostTrackItLocations

> Status PostTrackItLocations(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TrackItLocationsCriteria(trackItLocationsCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create Track it Locations



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of hotel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    trackItLocationsCriteria := *openapiclient.NewTrackItLocationsCriteria() // TrackItLocationsCriteria | Request object for creating new Track it Locations.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigAPI.PostTrackItLocations(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TrackItLocationsCriteria(trackItLocationsCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigAPI.PostTrackItLocations``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostTrackItLocations`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigAPI.PostTrackItLocations`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of hotel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostTrackItLocationsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **trackItLocationsCriteria** | [**TrackItLocationsCriteria**](TrackItLocationsCriteria.md) | Request object for creating new Track it Locations. | 
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


## PostTrackItTypes

> Status PostTrackItTypes(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TrackItTypesCriteria(trackItTypesCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create Track it Types



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of hotel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    trackItTypesCriteria := *openapiclient.NewTrackItTypesCriteria() // TrackItTypesCriteria | Request object for creating new Track it Types.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigAPI.PostTrackItTypes(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TrackItTypesCriteria(trackItTypesCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigAPI.PostTrackItTypes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostTrackItTypes`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigAPI.PostTrackItTypes`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of hotel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostTrackItTypesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **trackItTypesCriteria** | [**TrackItTypesCriteria**](TrackItTypesCriteria.md) | Request object for creating new Track it Types. | 
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


## RemoveTrackItActions

> Status RemoveTrackItActions(ctx, actionCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete Track it Actions



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    actionCode := "actionCode_example" // string | Unique Code of action.
    hotelId := "hotelId_example" // string | Unique ID of hotel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigAPI.RemoveTrackItActions(context.Background(), actionCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigAPI.RemoveTrackItActions``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `RemoveTrackItActions`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigAPI.RemoveTrackItActions`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**actionCode** | **string** | Unique Code of action. | 
**hotelId** | **string** | Unique ID of hotel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiRemoveTrackItActionsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


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


## RemoveTrackItLocations

> Status RemoveTrackItLocations(ctx, locationCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete Track it Locations



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    locationCode := "locationCode_example" // string | Unique Code of location.
    hotelId := "hotelId_example" // string | Unique ID of hotel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigAPI.RemoveTrackItLocations(context.Background(), locationCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigAPI.RemoveTrackItLocations``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `RemoveTrackItLocations`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigAPI.RemoveTrackItLocations`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**locationCode** | **string** | Unique Code of location. | 
**hotelId** | **string** | Unique ID of hotel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiRemoveTrackItLocationsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


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


## RemoveTrackItTypes

> Status RemoveTrackItTypes(ctx, typeCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete Track it Types



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    typeCode := "typeCode_example" // string | Unique Code of track it type.
    hotelId := "hotelId_example" // string | Unique ID of hotel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigAPI.RemoveTrackItTypes(context.Background(), typeCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigAPI.RemoveTrackItTypes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `RemoveTrackItTypes`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigAPI.RemoveTrackItTypes`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**typeCode** | **string** | Unique Code of track it type. | 
**hotelId** | **string** | Unique ID of hotel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiRemoveTrackItTypesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


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


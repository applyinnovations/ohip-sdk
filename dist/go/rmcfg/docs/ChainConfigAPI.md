# \ChainConfigAPI

All URIs are relative to */rm/config/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ChangeRoomMoveReasons**](ChainConfigAPI.md#ChangeRoomMoveReasons) | **Put** /roomMoveReasons/{reasonCode} | Change Room Move Reasons
[**DeleteBedTypeRequests**](ChainConfigAPI.md#DeleteBedTypeRequests) | **Delete** /bedTypeRequests/{bedTypeRequestsId} | Delete Bed Type Requests
[**DeleteBedTypes**](ChainConfigAPI.md#DeleteBedTypes) | **Delete** /bedTypes/{bedTypesId} | Delete an existing Bed type
[**DeleteFloorTypes**](ChainConfigAPI.md#DeleteFloorTypes) | **Delete** /floorTypes/{floorTypesId} | Delete Floor Types
[**DeleteRoomPotentials**](ChainConfigAPI.md#DeleteRoomPotentials) | **Delete** /roomPotentials/{roomPotentialsId} | Delete Room Potentials
[**DeleteRoomPreferencePriorities**](ChainConfigAPI.md#DeleteRoomPreferencePriorities) | **Delete** /roomPreferencePriorities/{roomPreferencePrioritiesId} | Delete Room Preference Priorities
[**DeleteSmokingTypes**](ChainConfigAPI.md#DeleteSmokingTypes) | **Delete** /smokingTypes/{smokingTypesId} | Delete Smoking Types
[**GetBedTypeRequests**](ChainConfigAPI.md#GetBedTypeRequests) | **Get** /bedTypeRequests | Get Bed Type Requests
[**GetBedTypes**](ChainConfigAPI.md#GetBedTypes) | **Get** /bedTypes | Get bed types
[**GetFloorTypes**](ChainConfigAPI.md#GetFloorTypes) | **Get** /floorTypes | Get Floor Types
[**GetRoomMoveReasons**](ChainConfigAPI.md#GetRoomMoveReasons) | **Get** /roomMoveReasons | Get Room Move Reasons
[**GetRoomPotentials**](ChainConfigAPI.md#GetRoomPotentials) | **Get** /roomPotentials | Get Room Potentials
[**GetRoomPreferencePriorities**](ChainConfigAPI.md#GetRoomPreferencePriorities) | **Get** /roomPreferencePriorities | Get Room Preference Priorities
[**GetSmokingTypes**](ChainConfigAPI.md#GetSmokingTypes) | **Get** /smokingTypes | Get Smoking Types
[**PostBedTypeRequests**](ChainConfigAPI.md#PostBedTypeRequests) | **Post** /bedTypeRequests | Create Bed Type Requests
[**PostBedTypes**](ChainConfigAPI.md#PostBedTypes) | **Post** /bedTypes | Create a new Bed type
[**PostFloorTypes**](ChainConfigAPI.md#PostFloorTypes) | **Post** /floorTypes | Create Floor Types
[**PostRoomMoveReasons**](ChainConfigAPI.md#PostRoomMoveReasons) | **Post** /roomMoveReasons | Create Room Move Reasons
[**PostRoomPotentials**](ChainConfigAPI.md#PostRoomPotentials) | **Post** /roomPotentials | Create Room Potentials
[**PostRoomPreferencePriorities**](ChainConfigAPI.md#PostRoomPreferencePriorities) | **Post** /roomPreferencePriorities | Create Room Preference Priorities
[**PostSmokingTypes**](ChainConfigAPI.md#PostSmokingTypes) | **Post** /smokingTypes | Create Smoking Types
[**PutBedTypeRequests**](ChainConfigAPI.md#PutBedTypeRequests) | **Put** /bedTypeRequests/{bedTypeRequestsId} | Change Bed Type Requests
[**PutBedTypes**](ChainConfigAPI.md#PutBedTypes) | **Put** /bedTypes/{bedTypesId} | Change an existing Bed type
[**PutFloorTypes**](ChainConfigAPI.md#PutFloorTypes) | **Put** /floorTypes/{floorTypesId} | Change Floor Types
[**PutRoomPotentials**](ChainConfigAPI.md#PutRoomPotentials) | **Put** /roomPotentials/{roomPotentialsId} | Change Room Potentials
[**PutRoomPreferencePriorities**](ChainConfigAPI.md#PutRoomPreferencePriorities) | **Put** /roomPreferencePriorities/{roomPreferencePrioritiesId} | Change Room Preference Priorities
[**PutSmokingTypes**](ChainConfigAPI.md#PutSmokingTypes) | **Put** /smokingTypes/{smokingTypesId} | Change Smoking Types
[**RemoveRoomMoveReasons**](ChainConfigAPI.md#RemoveRoomMoveReasons) | **Delete** /roomMoveReasons/{reasonCode} | Delete Room Move Reasons



## ChangeRoomMoveReasons

> Status ChangeRoomMoveReasons(ctx, reasonCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoomMoveReasonsToBeChanged(roomMoveReasonsToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change Room Move Reasons



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rmcfg"
)

func main() {
    reasonCode := "reasonCode_example" // string | Unique Code of Reasons.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    roomMoveReasonsToBeChanged := *openapiclient.NewRoomMoveReasonsToBeChanged() // RoomMoveReasonsToBeChanged | Request object for changing Room Move Reasons.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChainConfigAPI.ChangeRoomMoveReasons(context.Background(), reasonCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoomMoveReasonsToBeChanged(roomMoveReasonsToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChainConfigAPI.ChangeRoomMoveReasons``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ChangeRoomMoveReasons`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChainConfigAPI.ChangeRoomMoveReasons`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reasonCode** | **string** | Unique Code of Reasons. | 

### Other Parameters

Other parameters are passed through a pointer to a apiChangeRoomMoveReasonsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **roomMoveReasonsToBeChanged** | [**RoomMoveReasonsToBeChanged**](RoomMoveReasonsToBeChanged.md) | Request object for changing Room Move Reasons. | 
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


## DeleteBedTypeRequests

> Status DeleteBedTypeRequests(ctx, bedTypeRequestsId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BedTypeRequestsCodes(bedTypeRequestsCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete Bed Type Requests



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rmcfg"
)

func main() {
    bedTypeRequestsId := "bedTypeRequestsId_example" // string | Unique ID of Bed Type Requests.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    bedTypeRequestsCodes := []string{"Inner_example"} // []string |  (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChainConfigAPI.DeleteBedTypeRequests(context.Background(), bedTypeRequestsId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BedTypeRequestsCodes(bedTypeRequestsCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChainConfigAPI.DeleteBedTypeRequests``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteBedTypeRequests`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChainConfigAPI.DeleteBedTypeRequests`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**bedTypeRequestsId** | **string** | Unique ID of Bed Type Requests. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteBedTypeRequestsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **bedTypeRequestsCodes** | **[]string** |  | 
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


## DeleteBedTypes

> Status DeleteBedTypes(ctx, bedTypesId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BedTypeCodes(bedTypeCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete an existing Bed type



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rmcfg"
)

func main() {
    bedTypesId := "bedTypesId_example" // string | Unique ID of bed type
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    bedTypeCodes := []string{"Inner_example"} // []string |  (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChainConfigAPI.DeleteBedTypes(context.Background(), bedTypesId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BedTypeCodes(bedTypeCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChainConfigAPI.DeleteBedTypes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteBedTypes`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChainConfigAPI.DeleteBedTypes`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**bedTypesId** | **string** | Unique ID of bed type | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteBedTypesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **bedTypeCodes** | **[]string** |  | 
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


## DeleteFloorTypes

> Status DeleteFloorTypes(ctx, floorTypesId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FloorTypesCodes(floorTypesCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete Floor Types



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rmcfg"
)

func main() {
    floorTypesId := "floorTypesId_example" // string | Unique ID of Floor Types.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    floorTypesCodes := []string{"Inner_example"} // []string |  (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChainConfigAPI.DeleteFloorTypes(context.Background(), floorTypesId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FloorTypesCodes(floorTypesCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChainConfigAPI.DeleteFloorTypes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteFloorTypes`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChainConfigAPI.DeleteFloorTypes`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**floorTypesId** | **string** | Unique ID of Floor Types. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteFloorTypesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **floorTypesCodes** | **[]string** |  | 
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
    openapiclient "github.com/applyinnovations/ohip-sdk/rmcfg"
)

func main() {
    roomPotentialsId := "roomPotentialsId_example" // string | Unique ID of Room Potentials.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    roomPotentialsCodes := []string{"Inner_example"} // []string |  (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChainConfigAPI.DeleteRoomPotentials(context.Background(), roomPotentialsId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoomPotentialsCodes(roomPotentialsCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChainConfigAPI.DeleteRoomPotentials``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteRoomPotentials`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChainConfigAPI.DeleteRoomPotentials`: %v\n", resp)
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
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
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


## DeleteRoomPreferencePriorities

> Status DeleteRoomPreferencePriorities(ctx, roomPreferencePrioritiesId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoomPreferencePrioritiesCodes(roomPreferencePrioritiesCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete Room Preference Priorities



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rmcfg"
)

func main() {
    roomPreferencePrioritiesId := "roomPreferencePrioritiesId_example" // string | Unique ID of Room Preference Priorities.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    roomPreferencePrioritiesCodes := []string{"Inner_example"} // []string |  (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChainConfigAPI.DeleteRoomPreferencePriorities(context.Background(), roomPreferencePrioritiesId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoomPreferencePrioritiesCodes(roomPreferencePrioritiesCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChainConfigAPI.DeleteRoomPreferencePriorities``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteRoomPreferencePriorities`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChainConfigAPI.DeleteRoomPreferencePriorities`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**roomPreferencePrioritiesId** | **string** | Unique ID of Room Preference Priorities. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteRoomPreferencePrioritiesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **roomPreferencePrioritiesCodes** | **[]string** |  | 
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


## DeleteSmokingTypes

> Status DeleteSmokingTypes(ctx, smokingTypesId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).SmokingTypesCodes(smokingTypesCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete Smoking Types



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rmcfg"
)

func main() {
    smokingTypesId := "smokingTypesId_example" // string | Unique ID of Smoking Types.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    smokingTypesCodes := []string{"Inner_example"} // []string |  (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChainConfigAPI.DeleteSmokingTypes(context.Background(), smokingTypesId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).SmokingTypesCodes(smokingTypesCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChainConfigAPI.DeleteSmokingTypes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteSmokingTypes`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChainConfigAPI.DeleteSmokingTypes`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**smokingTypesId** | **string** | Unique ID of Smoking Types. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteSmokingTypesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **smokingTypesCodes** | **[]string** |  | 
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


## GetBedTypeRequests

> BedTypeRequestsDetails GetBedTypeRequests(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FetchInactive(fetchInactive).Codes(codes).WildCard(wildCard).Description(description).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Bed Type Requests



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rmcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    fetchInactive := true // bool | Determines wether to fetch inactive records or not. (optional)
    codes := []string{"Inner_example"} // []string | Codes to be searched. (optional)
    wildCard := "wildCard_example" // string | Wildcard search on the code. (optional)
    description := "description_example" // string | Description of the code. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChainConfigAPI.GetBedTypeRequests(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FetchInactive(fetchInactive).Codes(codes).WildCard(wildCard).Description(description).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChainConfigAPI.GetBedTypeRequests``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetBedTypeRequests`: BedTypeRequestsDetails
    fmt.Fprintf(os.Stdout, "Response from `ChainConfigAPI.GetBedTypeRequests`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetBedTypeRequestsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **fetchInactive** | **bool** | Determines wether to fetch inactive records or not. | 
 **codes** | **[]string** | Codes to be searched. | 
 **wildCard** | **string** | Wildcard search on the code. | 
 **description** | **string** | Description of the code. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**BedTypeRequestsDetails**](BedTypeRequestsDetails.md)

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
    openapiclient "github.com/applyinnovations/ohip-sdk/rmcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    fetchInactive := true // bool | Determines wether to fetch inactive records or not. (optional)
    codes := []string{"Inner_example"} // []string | Codes to be searched. (optional)
    wildCard := "wildCard_example" // string | Wildcard search on the code. (optional)
    description := "description_example" // string | Description of the code. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChainConfigAPI.GetBedTypes(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FetchInactive(fetchInactive).Codes(codes).WildCard(wildCard).Description(description).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChainConfigAPI.GetBedTypes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetBedTypes`: BedTypesDetails
    fmt.Fprintf(os.Stdout, "Response from `ChainConfigAPI.GetBedTypes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetBedTypesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
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


## GetFloorTypes

> FloorTypesDetails GetFloorTypes(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FetchInactive(fetchInactive).Codes(codes).WildCard(wildCard).Description(description).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Floor Types



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rmcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    fetchInactive := true // bool | Determines wether to fetch inactive records or not. (optional)
    codes := []string{"Inner_example"} // []string | Codes to be searched. (optional)
    wildCard := "wildCard_example" // string | Wildcard search on the code. (optional)
    description := "description_example" // string | Description of the code. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChainConfigAPI.GetFloorTypes(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FetchInactive(fetchInactive).Codes(codes).WildCard(wildCard).Description(description).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChainConfigAPI.GetFloorTypes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetFloorTypes`: FloorTypesDetails
    fmt.Fprintf(os.Stdout, "Response from `ChainConfigAPI.GetFloorTypes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetFloorTypesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **fetchInactive** | **bool** | Determines wether to fetch inactive records or not. | 
 **codes** | **[]string** | Codes to be searched. | 
 **wildCard** | **string** | Wildcard search on the code. | 
 **description** | **string** | Description of the code. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**FloorTypesDetails**](FloorTypesDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetRoomMoveReasons

> RoomMoveReasonsDetails GetRoomMoveReasons(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FetchInactive(fetchInactive).Codes(codes).WildCard(wildCard).Description(description).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Room Move Reasons



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rmcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    fetchInactive := true // bool | Determines wether to fetch inactive records or not. (optional)
    codes := []string{"Inner_example"} // []string | Codes to be searched. (optional)
    wildCard := "wildCard_example" // string | Wildcard search on the code. (optional)
    description := "description_example" // string | Description of the code. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChainConfigAPI.GetRoomMoveReasons(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FetchInactive(fetchInactive).Codes(codes).WildCard(wildCard).Description(description).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChainConfigAPI.GetRoomMoveReasons``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetRoomMoveReasons`: RoomMoveReasonsDetails
    fmt.Fprintf(os.Stdout, "Response from `ChainConfigAPI.GetRoomMoveReasons`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetRoomMoveReasonsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **fetchInactive** | **bool** | Determines wether to fetch inactive records or not. | 
 **codes** | **[]string** | Codes to be searched. | 
 **wildCard** | **string** | Wildcard search on the code. | 
 **description** | **string** | Description of the code. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**RoomMoveReasonsDetails**](RoomMoveReasonsDetails.md)

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
    openapiclient "github.com/applyinnovations/ohip-sdk/rmcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    fetchInactive := true // bool | Determines wether to fetch inactive records or not. (optional)
    codes := []string{"Inner_example"} // []string | Codes to be searched. (optional)
    wildCard := "wildCard_example" // string | Wildcard search on the code. (optional)
    description := "description_example" // string | Description of the code. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChainConfigAPI.GetRoomPotentials(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FetchInactive(fetchInactive).Codes(codes).WildCard(wildCard).Description(description).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChainConfigAPI.GetRoomPotentials``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetRoomPotentials`: RoomPotentialsDetails
    fmt.Fprintf(os.Stdout, "Response from `ChainConfigAPI.GetRoomPotentials`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetRoomPotentialsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
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


## GetRoomPreferencePriorities

> RoomPreferencePrioritiesDetails GetRoomPreferencePriorities(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FetchInactive(fetchInactive).Codes(codes).WildCard(wildCard).Description(description).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Room Preference Priorities



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rmcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    fetchInactive := true // bool | Determines wether to fetch inactive records or not. (optional)
    codes := []string{"Inner_example"} // []string | Codes to be searched. (optional)
    wildCard := "wildCard_example" // string | Wildcard search on the code. (optional)
    description := "description_example" // string | Description of the code. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChainConfigAPI.GetRoomPreferencePriorities(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FetchInactive(fetchInactive).Codes(codes).WildCard(wildCard).Description(description).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChainConfigAPI.GetRoomPreferencePriorities``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetRoomPreferencePriorities`: RoomPreferencePrioritiesDetails
    fmt.Fprintf(os.Stdout, "Response from `ChainConfigAPI.GetRoomPreferencePriorities`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetRoomPreferencePrioritiesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **fetchInactive** | **bool** | Determines wether to fetch inactive records or not. | 
 **codes** | **[]string** | Codes to be searched. | 
 **wildCard** | **string** | Wildcard search on the code. | 
 **description** | **string** | Description of the code. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**RoomPreferencePrioritiesDetails**](RoomPreferencePrioritiesDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetSmokingTypes

> SmokingTypesDetails GetSmokingTypes(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FetchInactive(fetchInactive).Codes(codes).WildCard(wildCard).Description(description).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Smoking Types



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rmcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    fetchInactive := true // bool | Determines wether to fetch inactive records or not. (optional)
    codes := []string{"Inner_example"} // []string | Codes to be searched. (optional)
    wildCard := "wildCard_example" // string | Wildcard search on the code. (optional)
    description := "description_example" // string | Description of the code. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChainConfigAPI.GetSmokingTypes(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FetchInactive(fetchInactive).Codes(codes).WildCard(wildCard).Description(description).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChainConfigAPI.GetSmokingTypes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetSmokingTypes`: SmokingTypesDetails
    fmt.Fprintf(os.Stdout, "Response from `ChainConfigAPI.GetSmokingTypes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetSmokingTypesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **fetchInactive** | **bool** | Determines wether to fetch inactive records or not. | 
 **codes** | **[]string** | Codes to be searched. | 
 **wildCard** | **string** | Wildcard search on the code. | 
 **description** | **string** | Description of the code. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**SmokingTypesDetails**](SmokingTypesDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostBedTypeRequests

> Status PostBedTypeRequests(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BedTypeRequestsCriteria(bedTypeRequestsCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create Bed Type Requests



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rmcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    bedTypeRequestsCriteria := *openapiclient.NewBedTypeRequestsCriteria() // BedTypeRequestsCriteria | Request object for creating Bed Type Requests.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChainConfigAPI.PostBedTypeRequests(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BedTypeRequestsCriteria(bedTypeRequestsCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChainConfigAPI.PostBedTypeRequests``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostBedTypeRequests`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChainConfigAPI.PostBedTypeRequests`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostBedTypeRequestsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **bedTypeRequestsCriteria** | [**BedTypeRequestsCriteria**](BedTypeRequestsCriteria.md) | Request object for creating Bed Type Requests. | 
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


## PostBedTypes

> Status PostBedTypes(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BedTypesCriteria(bedTypesCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create a new Bed type



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rmcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    bedTypesCriteria := *openapiclient.NewBedTypesCriteria() // BedTypesCriteria | Request object for creating a new Bed Type.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChainConfigAPI.PostBedTypes(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BedTypesCriteria(bedTypesCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChainConfigAPI.PostBedTypes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostBedTypes`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChainConfigAPI.PostBedTypes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostBedTypesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **bedTypesCriteria** | [**BedTypesCriteria**](BedTypesCriteria.md) | Request object for creating a new Bed Type. | 
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


## PostFloorTypes

> Status PostFloorTypes(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FloorTypesCriteria(floorTypesCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create Floor Types



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rmcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    floorTypesCriteria := *openapiclient.NewFloorTypesCriteria() // FloorTypesCriteria | Request object for creating Floor Types.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChainConfigAPI.PostFloorTypes(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FloorTypesCriteria(floorTypesCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChainConfigAPI.PostFloorTypes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostFloorTypes`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChainConfigAPI.PostFloorTypes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostFloorTypesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **floorTypesCriteria** | [**FloorTypesCriteria**](FloorTypesCriteria.md) | Request object for creating Floor Types. | 
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


## PostRoomMoveReasons

> Status PostRoomMoveReasons(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoomMoveReasonsCriteria(roomMoveReasonsCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create Room Move Reasons



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rmcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    roomMoveReasonsCriteria := *openapiclient.NewRoomMoveReasonsCriteria() // RoomMoveReasonsCriteria | Request object for creating Room Move Reasons.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChainConfigAPI.PostRoomMoveReasons(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoomMoveReasonsCriteria(roomMoveReasonsCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChainConfigAPI.PostRoomMoveReasons``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostRoomMoveReasons`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChainConfigAPI.PostRoomMoveReasons`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostRoomMoveReasonsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **roomMoveReasonsCriteria** | [**RoomMoveReasonsCriteria**](RoomMoveReasonsCriteria.md) | Request object for creating Room Move Reasons. | 
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
    openapiclient "github.com/applyinnovations/ohip-sdk/rmcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    roomPotentialsCriteria := *openapiclient.NewRoomPotentialsCriteria() // RoomPotentialsCriteria | Request object for creating Room Potentials.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChainConfigAPI.PostRoomPotentials(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoomPotentialsCriteria(roomPotentialsCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChainConfigAPI.PostRoomPotentials``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostRoomPotentials`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChainConfigAPI.PostRoomPotentials`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostRoomPotentialsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **roomPotentialsCriteria** | [**RoomPotentialsCriteria**](RoomPotentialsCriteria.md) | Request object for creating Room Potentials. | 
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


## PostRoomPreferencePriorities

> Status PostRoomPreferencePriorities(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoomPreferencePrioritiesCriteria(roomPreferencePrioritiesCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create Room Preference Priorities



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rmcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    roomPreferencePrioritiesCriteria := *openapiclient.NewRoomPreferencePrioritiesCriteria() // RoomPreferencePrioritiesCriteria | Request object for creating Room Preference Priorities.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChainConfigAPI.PostRoomPreferencePriorities(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoomPreferencePrioritiesCriteria(roomPreferencePrioritiesCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChainConfigAPI.PostRoomPreferencePriorities``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostRoomPreferencePriorities`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChainConfigAPI.PostRoomPreferencePriorities`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostRoomPreferencePrioritiesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **roomPreferencePrioritiesCriteria** | [**RoomPreferencePrioritiesCriteria**](RoomPreferencePrioritiesCriteria.md) | Request object for creating Room Preference Priorities. | 
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


## PostSmokingTypes

> Status PostSmokingTypes(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).SmokingTypesCriteria(smokingTypesCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create Smoking Types



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rmcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    smokingTypesCriteria := *openapiclient.NewSmokingTypesCriteria() // SmokingTypesCriteria | Request object for creating Smoking Types.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChainConfigAPI.PostSmokingTypes(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).SmokingTypesCriteria(smokingTypesCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChainConfigAPI.PostSmokingTypes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostSmokingTypes`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChainConfigAPI.PostSmokingTypes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostSmokingTypesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **smokingTypesCriteria** | [**SmokingTypesCriteria**](SmokingTypesCriteria.md) | Request object for creating Smoking Types. | 
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


## PutBedTypeRequests

> Status PutBedTypeRequests(ctx, bedTypeRequestsId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BedTypeRequestsToBeChanged(bedTypeRequestsToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change Bed Type Requests



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rmcfg"
)

func main() {
    bedTypeRequestsId := "bedTypeRequestsId_example" // string | Unique ID of Bed Type Requests.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    bedTypeRequestsToBeChanged := *openapiclient.NewBedTypeRequestsToBeChanged() // BedTypeRequestsToBeChanged | Request object for changing Bed Type Requests.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChainConfigAPI.PutBedTypeRequests(context.Background(), bedTypeRequestsId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BedTypeRequestsToBeChanged(bedTypeRequestsToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChainConfigAPI.PutBedTypeRequests``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutBedTypeRequests`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChainConfigAPI.PutBedTypeRequests`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**bedTypeRequestsId** | **string** | Unique ID of Bed Type Requests. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutBedTypeRequestsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **bedTypeRequestsToBeChanged** | [**BedTypeRequestsToBeChanged**](BedTypeRequestsToBeChanged.md) | Request object for changing Bed Type Requests. | 
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


## PutBedTypes

> Status PutBedTypes(ctx, bedTypesId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BedTypesToBeChanged(bedTypesToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change an existing Bed type



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rmcfg"
)

func main() {
    bedTypesId := "bedTypesId_example" // string | Unique ID of bed type
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    bedTypesToBeChanged := *openapiclient.NewBedTypesToBeChanged() // BedTypesToBeChanged | Request object for changing an existing Bed Type.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChainConfigAPI.PutBedTypes(context.Background(), bedTypesId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BedTypesToBeChanged(bedTypesToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChainConfigAPI.PutBedTypes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutBedTypes`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChainConfigAPI.PutBedTypes`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**bedTypesId** | **string** | Unique ID of bed type | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutBedTypesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **bedTypesToBeChanged** | [**BedTypesToBeChanged**](BedTypesToBeChanged.md) | Request object for changing an existing Bed Type. | 
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


## PutFloorTypes

> Status PutFloorTypes(ctx, floorTypesId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FloorTypesToBeChanged(floorTypesToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change Floor Types



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rmcfg"
)

func main() {
    floorTypesId := "floorTypesId_example" // string | Unique ID of Floor Types.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    floorTypesToBeChanged := *openapiclient.NewFloorTypesToBeChanged() // FloorTypesToBeChanged | Request object for changing Floor Types.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChainConfigAPI.PutFloorTypes(context.Background(), floorTypesId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FloorTypesToBeChanged(floorTypesToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChainConfigAPI.PutFloorTypes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutFloorTypes`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChainConfigAPI.PutFloorTypes`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**floorTypesId** | **string** | Unique ID of Floor Types. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutFloorTypesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **floorTypesToBeChanged** | [**FloorTypesToBeChanged**](FloorTypesToBeChanged.md) | Request object for changing Floor Types. | 
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
    openapiclient "github.com/applyinnovations/ohip-sdk/rmcfg"
)

func main() {
    roomPotentialsId := "roomPotentialsId_example" // string | Unique ID of Room Potentials.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    roomPotentialsToBeChanged := *openapiclient.NewRoomPotentialsToBeChanged() // RoomPotentialsToBeChanged | Request object for changing Room Potentials.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChainConfigAPI.PutRoomPotentials(context.Background(), roomPotentialsId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoomPotentialsToBeChanged(roomPotentialsToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChainConfigAPI.PutRoomPotentials``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutRoomPotentials`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChainConfigAPI.PutRoomPotentials`: %v\n", resp)
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
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **roomPotentialsToBeChanged** | [**RoomPotentialsToBeChanged**](RoomPotentialsToBeChanged.md) | Request object for changing Room Potentials. | 
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


## PutRoomPreferencePriorities

> Status PutRoomPreferencePriorities(ctx, roomPreferencePrioritiesId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoomPreferencePrioritiesToBeChanged(roomPreferencePrioritiesToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change Room Preference Priorities



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rmcfg"
)

func main() {
    roomPreferencePrioritiesId := "roomPreferencePrioritiesId_example" // string | Unique ID of Room Preference Priorities.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    roomPreferencePrioritiesToBeChanged := *openapiclient.NewRoomPreferencePrioritiesToBeChanged() // RoomPreferencePrioritiesToBeChanged | Request object for changing Room Preference Priorities.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChainConfigAPI.PutRoomPreferencePriorities(context.Background(), roomPreferencePrioritiesId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoomPreferencePrioritiesToBeChanged(roomPreferencePrioritiesToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChainConfigAPI.PutRoomPreferencePriorities``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutRoomPreferencePriorities`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChainConfigAPI.PutRoomPreferencePriorities`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**roomPreferencePrioritiesId** | **string** | Unique ID of Room Preference Priorities. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutRoomPreferencePrioritiesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **roomPreferencePrioritiesToBeChanged** | [**RoomPreferencePrioritiesToBeChanged**](RoomPreferencePrioritiesToBeChanged.md) | Request object for changing Room Preference Priorities. | 
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


## PutSmokingTypes

> Status PutSmokingTypes(ctx, smokingTypesId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).SmokingTypesToBeChanged(smokingTypesToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change Smoking Types



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rmcfg"
)

func main() {
    smokingTypesId := "smokingTypesId_example" // string | Unique ID of Smoking Types.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    smokingTypesToBeChanged := *openapiclient.NewSmokingTypesToBeChanged() // SmokingTypesToBeChanged | Request object for changing Smoking Types.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChainConfigAPI.PutSmokingTypes(context.Background(), smokingTypesId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).SmokingTypesToBeChanged(smokingTypesToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChainConfigAPI.PutSmokingTypes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutSmokingTypes`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChainConfigAPI.PutSmokingTypes`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**smokingTypesId** | **string** | Unique ID of Smoking Types. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutSmokingTypesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **smokingTypesToBeChanged** | [**SmokingTypesToBeChanged**](SmokingTypesToBeChanged.md) | Request object for changing Smoking Types. | 
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


## RemoveRoomMoveReasons

> Status RemoveRoomMoveReasons(ctx, reasonCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoomMoveReasonsCodes(roomMoveReasonsCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete Room Move Reasons



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rmcfg"
)

func main() {
    reasonCode := "reasonCode_example" // string | Unique Code of Reasons.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    roomMoveReasonsCodes := []string{"Inner_example"} // []string |  (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChainConfigAPI.RemoveRoomMoveReasons(context.Background(), reasonCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoomMoveReasonsCodes(roomMoveReasonsCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChainConfigAPI.RemoveRoomMoveReasons``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `RemoveRoomMoveReasons`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChainConfigAPI.RemoveRoomMoveReasons`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reasonCode** | **string** | Unique Code of Reasons. | 

### Other Parameters

Other parameters are passed through a pointer to a apiRemoveRoomMoveReasonsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **roomMoveReasonsCodes** | **[]string** |  | 
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


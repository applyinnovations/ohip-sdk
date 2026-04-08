# \HotelConfigAPI

All URIs are relative to */evm/config/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ChangeCateringRentalCodes**](HotelConfigAPI.md#ChangeCateringRentalCodes) | **Put** /functionSpaceRentalCodes/{cateringRentalId} | Change Catering s Rental Codes
[**ChangeEventCodes**](HotelConfigAPI.md#ChangeEventCodes) | **Put** /hotels/{hotelId}/eventCodes | Change Hotel Event Codes
[**ChangeFunctionSpaceLocations**](HotelConfigAPI.md#ChangeFunctionSpaceLocations) | **Put** /functionspaceLocations/{functionspaceLocationCode} | Change function space locations
[**ChangeFunctionSpaceSetupStyles**](HotelConfigAPI.md#ChangeFunctionSpaceSetupStyles) | **Put** /functionspaceSetupStyles/{functionSpaceSetupStyleId} | Change function space setup styles
[**ChangeFunctionSpaces**](HotelConfigAPI.md#ChangeFunctionSpaces) | **Put** /hotels/{hotelId}/functionSpaces/{functionSpaceCode} | Change Function Spaces
[**ChangeRoomTypePool**](HotelConfigAPI.md#ChangeRoomTypePool) | **Put** /hotels/{hotelId}/roomPools/{roomPoolCode} | Change Room Type Pool 
[**ChangeTemplateEventCodes**](HotelConfigAPI.md#ChangeTemplateEventCodes) | **Put** /eventCodes | Change Template Event Codes
[**CopyFunctionSpaceLocations**](HotelConfigAPI.md#CopyFunctionSpaceLocations) | **Put** /hotels/{sourceHotelId}/functionspaceLocations/copy | Copy function space locations
[**CopyFunctionSpaces**](HotelConfigAPI.md#CopyFunctionSpaces) | **Put** /hotels/{sourceHotelId}/functionSpaces/copy | Copy Function Spaces
[**GetCateringRentalCodes**](HotelConfigAPI.md#GetCateringRentalCodes) | **Get** /functionSpaceRentalCodes | Get Catering s Rental Codes
[**GetEventCodes**](HotelConfigAPI.md#GetEventCodes) | **Get** /hotels/{hotelId}/eventCodes | Get Hotel Event Codes
[**GetFunctionSpace**](HotelConfigAPI.md#GetFunctionSpace) | **Get** /functionspaces/{functionSpaceCode} | Get Function space 
[**GetFunctionSpaceConfig**](HotelConfigAPI.md#GetFunctionSpaceConfig) | **Get** /hotels/{hotelId}/functionSpaces/{functionSpaceCode}/configurations | Get Function Space Configuration
[**GetFunctionSpaceLocations**](HotelConfigAPI.md#GetFunctionSpaceLocations) | **Get** /functionspaceLocations | Get Function space locations
[**GetFunctionSpaceSetupStyles**](HotelConfigAPI.md#GetFunctionSpaceSetupStyles) | **Get** /functionspaceSetupStyles | Get Function space setup styles
[**GetFunctionSpaces**](HotelConfigAPI.md#GetFunctionSpaces) | **Get** /hotels/{hotelId}/functionSpaces | Get Function Spaces
[**GetRoomTypePool**](HotelConfigAPI.md#GetRoomTypePool) | **Get** /hotels/{hotelId}/roomPools | Fetch Room Type Pool
[**GetTemplateEventCodes**](HotelConfigAPI.md#GetTemplateEventCodes) | **Get** /eventCodes | Get Template Event Codes
[**PostCateringRentalCodes**](HotelConfigAPI.md#PostCateringRentalCodes) | **Post** /functionSpaceRentalCodes | Create Catering s Rental Codes
[**PostEventCodes**](HotelConfigAPI.md#PostEventCodes) | **Post** /hotels/{hotelId}/eventCodes | Create Hotel Event Codes
[**PostFunctionSpaceLocations**](HotelConfigAPI.md#PostFunctionSpaceLocations) | **Post** /functionspaceLocations/{functionspaceLocationCode} | Create function space locations
[**PostFunctionSpaceSetupStyles**](HotelConfigAPI.md#PostFunctionSpaceSetupStyles) | **Post** /functionspaceSetupStyles | Create function space setup styles
[**PostFunctionSpaces**](HotelConfigAPI.md#PostFunctionSpaces) | **Post** /hotels/{hotelId}/functionSpaces | Create Function Spaces
[**PostRoomTypePool**](HotelConfigAPI.md#PostRoomTypePool) | **Post** /hotels/{hotelId}/roomPools | Create Room Type Pools
[**PostTemplateEventCodes**](HotelConfigAPI.md#PostTemplateEventCodes) | **Post** /eventCodes | Create Template Event Codes
[**RemoveCateringRentalCodes**](HotelConfigAPI.md#RemoveCateringRentalCodes) | **Delete** /functionSpaceRentalCodes/{cateringRentalId} | Delete Catering s Rental Codes
[**RemoveEventCodes**](HotelConfigAPI.md#RemoveEventCodes) | **Delete** /hotels/{hotelId}/eventCodes | Delete Hotel Event Codes
[**RemoveFunctionSpaceLocations**](HotelConfigAPI.md#RemoveFunctionSpaceLocations) | **Delete** /functionspaceLocations/{functionspaceLocationCode} | Delete function space locations
[**RemoveFunctionSpaceSetupStyles**](HotelConfigAPI.md#RemoveFunctionSpaceSetupStyles) | **Delete** /functionspaceSetupStyles/{functionSpaceSetupStyleId} | Delete function space setup styles
[**RemoveFunctionSpaces**](HotelConfigAPI.md#RemoveFunctionSpaces) | **Delete** /hotels/{hotelId}/functionSpaces/{functionSpaceCode} | Delete Function Spaces
[**RemoveRoomTypePool**](HotelConfigAPI.md#RemoveRoomTypePool) | **Delete** /hotels/{hotelId}/roomPools/{roomPoolCode} | Delete  Room Type Pool and Mappings
[**RemoveTemplateEventCodes**](HotelConfigAPI.md#RemoveTemplateEventCodes) | **Delete** /eventCodes | Delete Template Event Codes



## ChangeCateringRentalCodes

> Status ChangeCateringRentalCodes(ctx, cateringRentalId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CateringRentalCodesToBeChanged(cateringRentalCodesToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change Catering s Rental Codes



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/evmcfg"
)

func main() {
    cateringRentalId := "cateringRentalId_example" // string | Unique CateringRentalCode for functionSpace.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    cateringRentalCodesToBeChanged := *openapiclient.NewCateringRentalCodesToBeChanged() // CateringRentalCodesToBeChanged | Request object which holds modified Catering Rental Codes.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigAPI.ChangeCateringRentalCodes(context.Background(), cateringRentalId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CateringRentalCodesToBeChanged(cateringRentalCodesToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigAPI.ChangeCateringRentalCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ChangeCateringRentalCodes`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigAPI.ChangeCateringRentalCodes`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**cateringRentalId** | **string** | Unique CateringRentalCode for functionSpace. | 

### Other Parameters

Other parameters are passed through a pointer to a apiChangeCateringRentalCodesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **cateringRentalCodesToBeChanged** | [**CateringRentalCodesToBeChanged**](CateringRentalCodesToBeChanged.md) | Request object which holds modified Catering Rental Codes. | 
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


## ChangeEventCodes

> Status ChangeEventCodes(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).EventCodesToBeChanged(eventCodesToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change Hotel Event Codes



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/evmcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of hotel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    eventCodesToBeChanged := *openapiclient.NewEventCodesToBeChanged() // EventCodesToBeChanged | Request object for modifying Event Codes for a hotel.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigAPI.ChangeEventCodes(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).EventCodesToBeChanged(eventCodesToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigAPI.ChangeEventCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ChangeEventCodes`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigAPI.ChangeEventCodes`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of hotel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiChangeEventCodesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **eventCodesToBeChanged** | [**EventCodesToBeChanged**](EventCodesToBeChanged.md) | Request object for modifying Event Codes for a hotel. | 
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


## ChangeFunctionSpaceLocations

> Status ChangeFunctionSpaceLocations(ctx, functionspaceLocationCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FunctionSpaceLocationsToBeChanged(functionSpaceLocationsToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change function space locations



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/evmcfg"
)

func main() {
    functionspaceLocationCode := "functionspaceLocationCode_example" // string | Unique Code of function space locations.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    functionSpaceLocationsToBeChanged := *openapiclient.NewFunctionSpaceLocationsToBeChanged() // FunctionSpaceLocationsToBeChanged | Request object for modifying function space location(s) for resort.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigAPI.ChangeFunctionSpaceLocations(context.Background(), functionspaceLocationCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FunctionSpaceLocationsToBeChanged(functionSpaceLocationsToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigAPI.ChangeFunctionSpaceLocations``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ChangeFunctionSpaceLocations`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigAPI.ChangeFunctionSpaceLocations`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**functionspaceLocationCode** | **string** | Unique Code of function space locations. | 

### Other Parameters

Other parameters are passed through a pointer to a apiChangeFunctionSpaceLocationsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **functionSpaceLocationsToBeChanged** | [**FunctionSpaceLocationsToBeChanged**](FunctionSpaceLocationsToBeChanged.md) | Request object for modifying function space location(s) for resort. | 
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


## ChangeFunctionSpaceSetupStyles

> Status ChangeFunctionSpaceSetupStyles(ctx, functionSpaceSetupStyleId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FunctionSpaceSetupStylesToBeChanged(functionSpaceSetupStylesToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change function space setup styles



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/evmcfg"
)

func main() {
    functionSpaceSetupStyleId := "functionSpaceSetupStyleId_example" // string | Unique ID of function space setup styles.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    functionSpaceSetupStylesToBeChanged := *openapiclient.NewFunctionSpaceSetupStylesToBeChanged() // FunctionSpaceSetupStylesToBeChanged | Request object for modifying function space setup style(s)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigAPI.ChangeFunctionSpaceSetupStyles(context.Background(), functionSpaceSetupStyleId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FunctionSpaceSetupStylesToBeChanged(functionSpaceSetupStylesToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigAPI.ChangeFunctionSpaceSetupStyles``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ChangeFunctionSpaceSetupStyles`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigAPI.ChangeFunctionSpaceSetupStyles`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**functionSpaceSetupStyleId** | **string** | Unique ID of function space setup styles. | 

### Other Parameters

Other parameters are passed through a pointer to a apiChangeFunctionSpaceSetupStylesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **functionSpaceSetupStylesToBeChanged** | [**FunctionSpaceSetupStylesToBeChanged**](FunctionSpaceSetupStylesToBeChanged.md) | Request object for modifying function space setup style(s) | 
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


## ChangeFunctionSpaces

> Status ChangeFunctionSpaces(ctx, functionSpaceCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FunctionSpacesToBeChanged(functionSpacesToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change Function Spaces



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/evmcfg"
)

func main() {
    functionSpaceCode := "functionSpaceCode_example" // string | Unique Code of functionSpace.
    hotelId := "hotelId_example" // string | Unique ID of hotel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    functionSpacesToBeChanged := *openapiclient.NewFunctionSpacesToBeChanged() // FunctionSpacesToBeChanged | Request object for changing function spaces.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigAPI.ChangeFunctionSpaces(context.Background(), functionSpaceCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FunctionSpacesToBeChanged(functionSpacesToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigAPI.ChangeFunctionSpaces``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ChangeFunctionSpaces`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigAPI.ChangeFunctionSpaces`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**functionSpaceCode** | **string** | Unique Code of functionSpace. | 
**hotelId** | **string** | Unique ID of hotel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiChangeFunctionSpacesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **functionSpacesToBeChanged** | [**FunctionSpacesToBeChanged**](FunctionSpacesToBeChanged.md) | Request object for changing function spaces. | 
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


## ChangeRoomTypePool

> Status ChangeRoomTypePool(ctx, roomPoolCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoomTypePoolToBeChanged(roomTypePoolToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change Room Type Pool 



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/evmcfg"
)

func main() {
    roomPoolCode := "roomPoolCode_example" // string | Unique Code of room type pool.
    hotelId := "hotelId_example" // string | Unique ID of hotel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    roomTypePoolToBeChanged := *openapiclient.NewRoomTypePoolToBeChanged() // RoomTypePoolToBeChanged | Request object for changing existing room pool.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigAPI.ChangeRoomTypePool(context.Background(), roomPoolCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoomTypePoolToBeChanged(roomTypePoolToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigAPI.ChangeRoomTypePool``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ChangeRoomTypePool`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigAPI.ChangeRoomTypePool`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**roomPoolCode** | **string** | Unique Code of room type pool. | 
**hotelId** | **string** | Unique ID of hotel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiChangeRoomTypePoolRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **roomTypePoolToBeChanged** | [**RoomTypePoolToBeChanged**](RoomTypePoolToBeChanged.md) | Request object for changing existing room pool. | 
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


## ChangeTemplateEventCodes

> Status ChangeTemplateEventCodes(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TemplateEventCodesToBeChanged(templateEventCodesToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change Template Event Codes



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/evmcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    templateEventCodesToBeChanged := *openapiclient.NewTemplateEventCodesToBeChanged() // TemplateEventCodesToBeChanged | Request object for modifying template Event Codes.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigAPI.ChangeTemplateEventCodes(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TemplateEventCodesToBeChanged(templateEventCodesToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigAPI.ChangeTemplateEventCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ChangeTemplateEventCodes`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigAPI.ChangeTemplateEventCodes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiChangeTemplateEventCodesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **templateEventCodesToBeChanged** | [**TemplateEventCodesToBeChanged**](TemplateEventCodesToBeChanged.md) | Request object for modifying template Event Codes. | 
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


## CopyFunctionSpaceLocations

> Status CopyFunctionSpaceLocations(ctx, sourceHotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CopyFunctionSpaceLocations(copyFunctionSpaceLocations).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Copy function space locations



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/evmcfg"
)

func main() {
    sourceHotelId := "sourceHotelId_example" // string | Unique ID of source hotel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    copyFunctionSpaceLocations := *openapiclient.NewCopyFunctionSpaceLocations() // CopyFunctionSpaceLocations | List of function space location(s) to be copied.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigAPI.CopyFunctionSpaceLocations(context.Background(), sourceHotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CopyFunctionSpaceLocations(copyFunctionSpaceLocations).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigAPI.CopyFunctionSpaceLocations``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CopyFunctionSpaceLocations`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigAPI.CopyFunctionSpaceLocations`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceHotelId** | **string** | Unique ID of source hotel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiCopyFunctionSpaceLocationsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **copyFunctionSpaceLocations** | [**CopyFunctionSpaceLocations**](CopyFunctionSpaceLocations.md) | List of function space location(s) to be copied. | 
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


## CopyFunctionSpaces

> Status CopyFunctionSpaces(ctx, sourceHotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CopyFunctionSpaces(copyFunctionSpaces).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Copy Function Spaces



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/evmcfg"
)

func main() {
    sourceHotelId := "sourceHotelId_example" // string | Unique ID of source hotel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    copyFunctionSpaces := *openapiclient.NewCopyFunctionSpaces() // CopyFunctionSpaces | Request object for creating multiple function spaces based on an existing function space. New function space may have different name, display name on function dairy, order of display and combo elements. The rest of the details will be copied from the source function space.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigAPI.CopyFunctionSpaces(context.Background(), sourceHotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CopyFunctionSpaces(copyFunctionSpaces).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigAPI.CopyFunctionSpaces``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CopyFunctionSpaces`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigAPI.CopyFunctionSpaces`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceHotelId** | **string** | Unique ID of source hotel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiCopyFunctionSpacesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **copyFunctionSpaces** | [**CopyFunctionSpaces**](CopyFunctionSpaces.md) | Request object for creating multiple function spaces based on an existing function space. New function space may have different name, display name on function dairy, order of display and combo elements. The rest of the details will be copied from the source function space. | 
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


## GetCateringRentalCodes

> CateringRentalCodesDetails GetCateringRentalCodes(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FetchInactive(fetchInactive).Codes(codes).WildCard(wildCard).Description(description).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Catering s Rental Codes



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/evmcfg"
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
    resp, r, err := apiClient.HotelConfigAPI.GetCateringRentalCodes(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FetchInactive(fetchInactive).Codes(codes).WildCard(wildCard).Description(description).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigAPI.GetCateringRentalCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetCateringRentalCodes`: CateringRentalCodesDetails
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigAPI.GetCateringRentalCodes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetCateringRentalCodesRequest struct via the builder pattern


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

[**CateringRentalCodesDetails**](CateringRentalCodesDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetEventCodes

> EventCodesDetails GetEventCodes(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelIds(hotelIds).EventsCodes(eventsCodes).WildCard(wildCard).IncludeInactive(includeInactive).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Hotel Event Codes



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/evmcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of hotel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    hotelIds := []string{"Inner_example"} // []string | Hotel code. (optional)
    eventsCodes := []string{"Inner_example"} // []string | Codes to be searched. (optional)
    wildCard := "wildCard_example" // string | Wildcard search on the code. (optional)
    includeInactive := true // bool | If true, this flag will set the criteria to return only Inactive records. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigAPI.GetEventCodes(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelIds(hotelIds).EventsCodes(eventsCodes).WildCard(wildCard).IncludeInactive(includeInactive).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigAPI.GetEventCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetEventCodes`: EventCodesDetails
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigAPI.GetEventCodes`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of hotel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetEventCodesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **hotelIds** | **[]string** | Hotel code. | 
 **eventsCodes** | **[]string** | Codes to be searched. | 
 **wildCard** | **string** | Wildcard search on the code. | 
 **includeInactive** | **bool** | If true, this flag will set the criteria to return only Inactive records. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**EventCodesDetails**](EventCodesDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetFunctionSpace

> FunctionSpaceDetails GetFunctionSpace(ctx, functionSpaceCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).PageNumber(pageNumber).Physical(physical).Pseudo(pseudo).HotelId(hotelId).RoomClassCodes(roomClassCodes).RoomTypeCodes(roomTypeCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Function space 



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/evmcfg"
)

func main() {
    functionSpaceCode := "functionSpaceCode_example" // string | Unique code of  function Space .
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    pageNumber := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional)
    physical := true // bool | Is it a physical room type. (optional)
    pseudo := true // bool | Is it a pseudo room type. (optional)
    hotelId := "hotelId_example" // string | Hotel code of room to be searched. (optional)
    roomClassCodes := []string{"Inner_example"} // []string |  (optional)
    roomTypeCodes := []string{"Inner_example"} // []string |  (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigAPI.GetFunctionSpace(context.Background(), functionSpaceCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).PageNumber(pageNumber).Physical(physical).Pseudo(pseudo).HotelId(hotelId).RoomClassCodes(roomClassCodes).RoomTypeCodes(roomTypeCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigAPI.GetFunctionSpace``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetFunctionSpace`: FunctionSpaceDetails
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigAPI.GetFunctionSpace`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**functionSpaceCode** | **string** | Unique code of  function Space . | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetFunctionSpaceRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **pageNumber** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | 
 **physical** | **bool** | Is it a physical room type. | 
 **pseudo** | **bool** | Is it a pseudo room type. | 
 **hotelId** | **string** | Hotel code of room to be searched. | 
 **roomClassCodes** | **[]string** |  | 
 **roomTypeCodes** | **[]string** |  | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**FunctionSpaceDetails**](FunctionSpaceDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetFunctionSpaceConfig

> FunctionSpaceConfigDetails GetFunctionSpaceConfig(ctx, functionSpaceCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Function Space Configuration



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/evmcfg"
)

func main() {
    functionSpaceCode := "functionSpaceCode_example" // string | Unique Code of function space.
    hotelId := "hotelId_example" // string | Unique ID of hotel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigAPI.GetFunctionSpaceConfig(context.Background(), functionSpaceCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigAPI.GetFunctionSpaceConfig``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetFunctionSpaceConfig`: FunctionSpaceConfigDetails
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigAPI.GetFunctionSpaceConfig`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**functionSpaceCode** | **string** | Unique Code of function space. | 
**hotelId** | **string** | Unique ID of hotel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetFunctionSpaceConfigRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**FunctionSpaceConfigDetails**](FunctionSpaceConfigDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetFunctionSpaceLocations

> FunctionSpaceLocationsDetails GetFunctionSpaceLocations(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelIds(hotelIds).Codes(codes).WildCard(wildCard).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Function space locations



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/evmcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    hotelIds := []string{"Inner_example"} // []string |  (optional)
    codes := []string{"Inner_example"} // []string | Codes to be searched. (optional)
    wildCard := "wildCard_example" // string | Wildcard search on the code. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigAPI.GetFunctionSpaceLocations(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelIds(hotelIds).Codes(codes).WildCard(wildCard).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigAPI.GetFunctionSpaceLocations``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetFunctionSpaceLocations`: FunctionSpaceLocationsDetails
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigAPI.GetFunctionSpaceLocations`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetFunctionSpaceLocationsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **hotelIds** | **[]string** |  | 
 **codes** | **[]string** | Codes to be searched. | 
 **wildCard** | **string** | Wildcard search on the code. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**FunctionSpaceLocationsDetails**](FunctionSpaceLocationsDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetFunctionSpaceSetupStyles

> FunctionSpaceSetupStylesDetails GetFunctionSpaceSetupStyles(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FetchInactive(fetchInactive).Codes(codes).WildCard(wildCard).Description(description).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Function space setup styles



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/evmcfg"
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
    resp, r, err := apiClient.HotelConfigAPI.GetFunctionSpaceSetupStyles(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FetchInactive(fetchInactive).Codes(codes).WildCard(wildCard).Description(description).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigAPI.GetFunctionSpaceSetupStyles``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetFunctionSpaceSetupStyles`: FunctionSpaceSetupStylesDetails
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigAPI.GetFunctionSpaceSetupStyles`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetFunctionSpaceSetupStylesRequest struct via the builder pattern


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

[**FunctionSpaceSetupStylesDetails**](FunctionSpaceSetupStylesDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetFunctionSpaces

> FunctionSpacesDetails GetFunctionSpaces(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).PageNumber(pageNumber).SortingBy(sortingBy).RoomCodes(roomCodes).RoomType(roomType).SpaceType(spaceType).FunctionSpaceWildcard(functionSpaceWildcard).WebBookable(webBookable).FloorCodes(floorCodes).LocationCodes(locationCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Function Spaces



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/evmcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of hotel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    pageNumber := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional)
    sortingBy := "sortingBy_example" // string | A collection of supported sorting for Event Calendar Function Space. (optional)
    roomCodes := []string{"Inner_example"} // []string |  (optional)
    roomType := "roomType_example" // string | Room Type where function space belongs to (optional)
    spaceType := "spaceType_example" // string | Space Type where function space belongs to (optional)
    functionSpaceWildcard := "functionSpaceWildcard_example" // string | Wild search on Room Code and Function Name. (optional)
    webBookable := true // bool | If true, will set the criteria to return Function Spaces configured as web bookable only. (optional)
    floorCodes := []string{"Inner_example"} // []string |  (optional)
    locationCodes := []string{"Inner_example"} // []string |  (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigAPI.GetFunctionSpaces(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).PageNumber(pageNumber).SortingBy(sortingBy).RoomCodes(roomCodes).RoomType(roomType).SpaceType(spaceType).FunctionSpaceWildcard(functionSpaceWildcard).WebBookable(webBookable).FloorCodes(floorCodes).LocationCodes(locationCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigAPI.GetFunctionSpaces``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetFunctionSpaces`: FunctionSpacesDetails
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigAPI.GetFunctionSpaces`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of hotel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetFunctionSpacesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **pageNumber** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | 
 **sortingBy** | **string** | A collection of supported sorting for Event Calendar Function Space. | 
 **roomCodes** | **[]string** |  | 
 **roomType** | **string** | Room Type where function space belongs to | 
 **spaceType** | **string** | Space Type where function space belongs to | 
 **functionSpaceWildcard** | **string** | Wild search on Room Code and Function Name. | 
 **webBookable** | **bool** | If true, will set the criteria to return Function Spaces configured as web bookable only. | 
 **floorCodes** | **[]string** |  | 
 **locationCodes** | **[]string** |  | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**FunctionSpacesDetails**](FunctionSpacesDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetRoomTypePool

> RoomTypePoolDetails GetRoomTypePool(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).IncludeInactive(includeInactive).Limit(limit).PageNumber(pageNumber).Physical(physical).Pseudo(pseudo).SummaryInfo(summaryInfo).RoomTypeCodes(roomTypeCodes).RoomClassCodes(roomClassCodes).RoomTypePoolCodes(roomTypePoolCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Fetch Room Type Pool



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/evmcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of hotel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    includeInactive := true // bool | Flag to indicate if inactive room types should be included. (optional)
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    pageNumber := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional)
    physical := true // bool | Is it a physical sleep room type. (optional)
    pseudo := true // bool | Is it a pseudo room type. (optional)
    summaryInfo := true // bool | Flag to indicate if summary or detailed information should be fetched. (optional)
    roomTypeCodes := []string{"Inner_example"} // []string |  (optional)
    roomClassCodes := []string{"Inner_example"} // []string |  (optional)
    roomTypePoolCodes := []string{"Inner_example"} // []string |  (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigAPI.GetRoomTypePool(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).IncludeInactive(includeInactive).Limit(limit).PageNumber(pageNumber).Physical(physical).Pseudo(pseudo).SummaryInfo(summaryInfo).RoomTypeCodes(roomTypeCodes).RoomClassCodes(roomClassCodes).RoomTypePoolCodes(roomTypePoolCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigAPI.GetRoomTypePool``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetRoomTypePool`: RoomTypePoolDetails
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigAPI.GetRoomTypePool`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of hotel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetRoomTypePoolRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **includeInactive** | **bool** | Flag to indicate if inactive room types should be included. | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **pageNumber** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | 
 **physical** | **bool** | Is it a physical sleep room type. | 
 **pseudo** | **bool** | Is it a pseudo room type. | 
 **summaryInfo** | **bool** | Flag to indicate if summary or detailed information should be fetched. | 
 **roomTypeCodes** | **[]string** |  | 
 **roomClassCodes** | **[]string** |  | 
 **roomTypePoolCodes** | **[]string** |  | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**RoomTypePoolDetails**](RoomTypePoolDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetTemplateEventCodes

> TemplateEventCodesDetails GetTemplateEventCodes(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).EventsCodes(eventsCodes).WildCard(wildCard).IncludeInactive(includeInactive).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Template Event Codes



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/evmcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    eventsCodes := []string{"Inner_example"} // []string | Codes to be searched. (optional)
    wildCard := "wildCard_example" // string | Wildcard search on the code. (optional)
    includeInactive := true // bool | If true, this flag will set the criteria to return only Inactive records. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigAPI.GetTemplateEventCodes(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).EventsCodes(eventsCodes).WildCard(wildCard).IncludeInactive(includeInactive).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigAPI.GetTemplateEventCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetTemplateEventCodes`: TemplateEventCodesDetails
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigAPI.GetTemplateEventCodes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetTemplateEventCodesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **eventsCodes** | **[]string** | Codes to be searched. | 
 **wildCard** | **string** | Wildcard search on the code. | 
 **includeInactive** | **bool** | If true, this flag will set the criteria to return only Inactive records. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**TemplateEventCodesDetails**](TemplateEventCodesDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostCateringRentalCodes

> Status PostCateringRentalCodes(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CateringRentalCodesCriteria(cateringRentalCodesCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create Catering s Rental Codes



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/evmcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    cateringRentalCodesCriteria := *openapiclient.NewCateringRentalCodesCriteria() // CateringRentalCodesCriteria | Request object which holds new Catering Rental Code Details.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigAPI.PostCateringRentalCodes(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CateringRentalCodesCriteria(cateringRentalCodesCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigAPI.PostCateringRentalCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostCateringRentalCodes`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigAPI.PostCateringRentalCodes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostCateringRentalCodesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **cateringRentalCodesCriteria** | [**CateringRentalCodesCriteria**](CateringRentalCodesCriteria.md) | Request object which holds new Catering Rental Code Details. | 
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


## PostEventCodes

> Status PostEventCodes(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).EventCodesCriteria(eventCodesCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create Hotel Event Codes



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/evmcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of hotel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    eventCodesCriteria := *openapiclient.NewEventCodesCriteria() // EventCodesCriteria | Request object for creating new Event Codes for a hotel.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigAPI.PostEventCodes(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).EventCodesCriteria(eventCodesCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigAPI.PostEventCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostEventCodes`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigAPI.PostEventCodes`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of hotel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostEventCodesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **eventCodesCriteria** | [**EventCodesCriteria**](EventCodesCriteria.md) | Request object for creating new Event Codes for a hotel. | 
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


## PostFunctionSpaceLocations

> Status PostFunctionSpaceLocations(ctx, functionspaceLocationCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FunctionSpaceLocationsCriteria(functionSpaceLocationsCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create function space locations



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/evmcfg"
)

func main() {
    functionspaceLocationCode := "functionspaceLocationCode_example" // string | Unique Code of function space locations.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    functionSpaceLocationsCriteria := *openapiclient.NewFunctionSpaceLocationsCriteria() // FunctionSpaceLocationsCriteria | Request object for adding function space location configurations to resort.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigAPI.PostFunctionSpaceLocations(context.Background(), functionspaceLocationCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FunctionSpaceLocationsCriteria(functionSpaceLocationsCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigAPI.PostFunctionSpaceLocations``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostFunctionSpaceLocations`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigAPI.PostFunctionSpaceLocations`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**functionspaceLocationCode** | **string** | Unique Code of function space locations. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostFunctionSpaceLocationsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **functionSpaceLocationsCriteria** | [**FunctionSpaceLocationsCriteria**](FunctionSpaceLocationsCriteria.md) | Request object for adding function space location configurations to resort. | 
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


## PostFunctionSpaceSetupStyles

> Status PostFunctionSpaceSetupStyles(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FunctionSpaceSetupStylesCriteria(functionSpaceSetupStylesCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create function space setup styles



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/evmcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    functionSpaceSetupStylesCriteria := *openapiclient.NewFunctionSpaceSetupStylesCriteria() // FunctionSpaceSetupStylesCriteria | Request object for adding function space setup styles.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigAPI.PostFunctionSpaceSetupStyles(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FunctionSpaceSetupStylesCriteria(functionSpaceSetupStylesCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigAPI.PostFunctionSpaceSetupStyles``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostFunctionSpaceSetupStyles`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigAPI.PostFunctionSpaceSetupStyles`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostFunctionSpaceSetupStylesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **functionSpaceSetupStylesCriteria** | [**FunctionSpaceSetupStylesCriteria**](FunctionSpaceSetupStylesCriteria.md) | Request object for adding function space setup styles. | 
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


## PostFunctionSpaces

> Status PostFunctionSpaces(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FunctionSpacesCriteria(functionSpacesCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create Function Spaces



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/evmcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of hotel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    functionSpacesCriteria := *openapiclient.NewFunctionSpacesCriteria() // FunctionSpacesCriteria | Request object for creating function spaces.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigAPI.PostFunctionSpaces(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FunctionSpacesCriteria(functionSpacesCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigAPI.PostFunctionSpaces``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostFunctionSpaces`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigAPI.PostFunctionSpaces`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of hotel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostFunctionSpacesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **functionSpacesCriteria** | [**FunctionSpacesCriteria**](FunctionSpacesCriteria.md) | Request object for creating function spaces. | 
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


## PostRoomTypePool

> Status PostRoomTypePool(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoomTypePoolCriteria(roomTypePoolCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create Room Type Pools



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/evmcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of hotel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    roomTypePoolCriteria := *openapiclient.NewRoomTypePoolCriteria() // RoomTypePoolCriteria | Request object for creating new room pool.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigAPI.PostRoomTypePool(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoomTypePoolCriteria(roomTypePoolCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigAPI.PostRoomTypePool``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostRoomTypePool`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigAPI.PostRoomTypePool`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of hotel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostRoomTypePoolRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **roomTypePoolCriteria** | [**RoomTypePoolCriteria**](RoomTypePoolCriteria.md) | Request object for creating new room pool. | 
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


## PostTemplateEventCodes

> Status PostTemplateEventCodes(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TemplateEventCodesCriteria(templateEventCodesCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create Template Event Codes



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/evmcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    templateEventCodesCriteria := *openapiclient.NewTemplateEventCodesCriteria() // TemplateEventCodesCriteria | Request object for creating new template Event Codes.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigAPI.PostTemplateEventCodes(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TemplateEventCodesCriteria(templateEventCodesCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigAPI.PostTemplateEventCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostTemplateEventCodes`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigAPI.PostTemplateEventCodes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostTemplateEventCodesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **templateEventCodesCriteria** | [**TemplateEventCodesCriteria**](TemplateEventCodesCriteria.md) | Request object for creating new template Event Codes. | 
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


## RemoveCateringRentalCodes

> Status RemoveCateringRentalCodes(ctx, cateringRentalId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete Catering s Rental Codes



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/evmcfg"
)

func main() {
    cateringRentalId := "cateringRentalId_example" // string | Unique CateringRentalCode for functionSpace.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigAPI.RemoveCateringRentalCodes(context.Background(), cateringRentalId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigAPI.RemoveCateringRentalCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `RemoveCateringRentalCodes`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigAPI.RemoveCateringRentalCodes`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**cateringRentalId** | **string** | Unique CateringRentalCode for functionSpace. | 

### Other Parameters

Other parameters are passed through a pointer to a apiRemoveCateringRentalCodesRequest struct via the builder pattern


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


## RemoveEventCodes

> Status RemoveEventCodes(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).EventCode(eventCode).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete Hotel Event Codes



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/evmcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of hotel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    eventCode := []string{"Inner_example"} // []string | Configuration code. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigAPI.RemoveEventCodes(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).EventCode(eventCode).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigAPI.RemoveEventCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `RemoveEventCodes`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigAPI.RemoveEventCodes`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of hotel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiRemoveEventCodesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **eventCode** | **[]string** | Configuration code. | 
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


## RemoveFunctionSpaceLocations

> Status RemoveFunctionSpaceLocations(ctx, functionspaceLocationCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete function space locations



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/evmcfg"
)

func main() {
    functionspaceLocationCode := "functionspaceLocationCode_example" // string | Unique Code of function space locations.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    hotelId := []string{"Inner_example"} // []string | Hotel where the code is configured. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigAPI.RemoveFunctionSpaceLocations(context.Background(), functionspaceLocationCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigAPI.RemoveFunctionSpaceLocations``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `RemoveFunctionSpaceLocations`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigAPI.RemoveFunctionSpaceLocations`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**functionspaceLocationCode** | **string** | Unique Code of function space locations. | 

### Other Parameters

Other parameters are passed through a pointer to a apiRemoveFunctionSpaceLocationsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **hotelId** | **[]string** | Hotel where the code is configured. | 
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


## RemoveFunctionSpaceSetupStyles

> Status RemoveFunctionSpaceSetupStyles(ctx, functionSpaceSetupStyleId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete function space setup styles



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/evmcfg"
)

func main() {
    functionSpaceSetupStyleId := "functionSpaceSetupStyleId_example" // string | Unique ID of function space setup styles.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigAPI.RemoveFunctionSpaceSetupStyles(context.Background(), functionSpaceSetupStyleId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigAPI.RemoveFunctionSpaceSetupStyles``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `RemoveFunctionSpaceSetupStyles`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigAPI.RemoveFunctionSpaceSetupStyles`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**functionSpaceSetupStyleId** | **string** | Unique ID of function space setup styles. | 

### Other Parameters

Other parameters are passed through a pointer to a apiRemoveFunctionSpaceSetupStylesRequest struct via the builder pattern


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


## RemoveFunctionSpaces

> Status RemoveFunctionSpaces(ctx, functionSpaceCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete Function Spaces



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/evmcfg"
)

func main() {
    functionSpaceCode := "functionSpaceCode_example" // string | Unique Code of functionSpace.
    hotelId := "hotelId_example" // string | Unique ID of hotel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigAPI.RemoveFunctionSpaces(context.Background(), functionSpaceCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigAPI.RemoveFunctionSpaces``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `RemoveFunctionSpaces`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigAPI.RemoveFunctionSpaces`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**functionSpaceCode** | **string** | Unique Code of functionSpace. | 
**hotelId** | **string** | Unique ID of hotel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiRemoveFunctionSpacesRequest struct via the builder pattern


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


## RemoveRoomTypePool

> Status RemoveRoomTypePool(ctx, roomPoolCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Description(description).DefaultText(defaultText).Lang(lang).Sequence(sequence).Inactive(inactive).NumberOfRooms(numberOfRooms).RoomType(roomType).RoomClass(roomClass).ShortDescription(shortDescription).ActiveDate(activeDate).Pseudo(pseudo).Accessible(accessible).SendToInterface(sendToInterface).SellSequence(sellSequence).Suite(suite).MeetingRoom(meetingRoom).Restricted(restricted).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete  Room Type Pool and Mappings



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/evmcfg"
)

func main() {
    roomPoolCode := "roomPoolCode_example" // string | Unique Code of room type pool.
    hotelId := "hotelId_example" // string | Unique ID of hotel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    description := []string{"Inner_example"} // []string | The description of room pool type. (optional)
    defaultText := "defaultText_example" // string | Default text with Character length from 0 to 1000. (optional)
    lang := []string{"Inner_example"} // []string | Language code for the translation. (optional)
    sequence := []int32{int32(123)} // []int32 | Sequence for representing room type pool record. (optional)
    inactive := []bool{false} // []bool | Indicates the room type is inactive or not. (optional)
    numberOfRooms := []int32{int32(123)} // []int32 | Number of rooms for this room type. (optional)
    roomType := []string{"Inner_example"} // []string |  (optional)
    roomClass := []string{"Inner_example"} // []string | Room class for the room type code. (optional)
    shortDescription := []string{"Inner_example"} // []string | Short Description of room type. (optional)
    activeDate := []string{time.Now()} // []string | Active date of the room type. (optional)
    pseudo := []bool{false} // []bool | Indicates if room type is pseudo. (optional)
    accessible := []bool{false} // []bool | Indicates if room type is accessible. (optional)
    sendToInterface := []bool{false} // []bool | Indicates if room type is sent to interface. (optional)
    sellSequence := []float32{float32(123)} // []float32 | Indicates room types sell sequence. (optional)
    suite := []bool{false} // []bool | Indicates room type is a suite. (optional)
    meetingRoom := []bool{false} // []bool | Indicates room type is meeting room. This Can be Meeting room flag cannot be unmarked at the property level. Can only be marked for non pseudo room types. (optional)
    restricted := []bool{false} // []bool | Indicates that the room pool cannot be used to allocate inventory to this room type. Inventory must be allocated directly to the room type itself. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigAPI.RemoveRoomTypePool(context.Background(), roomPoolCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Description(description).DefaultText(defaultText).Lang(lang).Sequence(sequence).Inactive(inactive).NumberOfRooms(numberOfRooms).RoomType(roomType).RoomClass(roomClass).ShortDescription(shortDescription).ActiveDate(activeDate).Pseudo(pseudo).Accessible(accessible).SendToInterface(sendToInterface).SellSequence(sellSequence).Suite(suite).MeetingRoom(meetingRoom).Restricted(restricted).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigAPI.RemoveRoomTypePool``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `RemoveRoomTypePool`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigAPI.RemoveRoomTypePool`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**roomPoolCode** | **string** | Unique Code of room type pool. | 
**hotelId** | **string** | Unique ID of hotel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiRemoveRoomTypePoolRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **description** | **[]string** | The description of room pool type. | 
 **defaultText** | **string** | Default text with Character length from 0 to 1000. | 
 **lang** | **[]string** | Language code for the translation. | 
 **sequence** | **[]int32** | Sequence for representing room type pool record. | 
 **inactive** | **[]bool** | Indicates the room type is inactive or not. | 
 **numberOfRooms** | **[]int32** | Number of rooms for this room type. | 
 **roomType** | **[]string** |  | 
 **roomClass** | **[]string** | Room class for the room type code. | 
 **shortDescription** | **[]string** | Short Description of room type. | 
 **activeDate** | **[]string** | Active date of the room type. | 
 **pseudo** | **[]bool** | Indicates if room type is pseudo. | 
 **accessible** | **[]bool** | Indicates if room type is accessible. | 
 **sendToInterface** | **[]bool** | Indicates if room type is sent to interface. | 
 **sellSequence** | **[]float32** | Indicates room types sell sequence. | 
 **suite** | **[]bool** | Indicates room type is a suite. | 
 **meetingRoom** | **[]bool** | Indicates room type is meeting room. This Can be Meeting room flag cannot be unmarked at the property level. Can only be marked for non pseudo room types. | 
 **restricted** | **[]bool** | Indicates that the room pool cannot be used to allocate inventory to this room type. Inventory must be allocated directly to the room type itself. | 
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


## RemoveTemplateEventCodes

> Status RemoveTemplateEventCodes(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TemplateEventCodes(templateEventCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete Template Event Codes



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/evmcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    templateEventCodes := []string{"Inner_example"} // []string |  (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigAPI.RemoveTemplateEventCodes(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TemplateEventCodes(templateEventCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigAPI.RemoveTemplateEventCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `RemoveTemplateEventCodes`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigAPI.RemoveTemplateEventCodes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiRemoveTemplateEventCodesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **templateEventCodes** | **[]string** |  | 
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


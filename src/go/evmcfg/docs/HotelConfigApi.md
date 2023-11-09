# \HotelConfigApi

All URIs are relative to */evm/config/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ChangeCateringRentalCodes**](HotelConfigApi.md#ChangeCateringRentalCodes) | **Put** /functionSpaceRentalCodes/{cateringRentalId} | Change Catering s Rental Codes
[**ChangeEventCodes**](HotelConfigApi.md#ChangeEventCodes) | **Put** /hotels/{hotelId}/eventCodes | Change Hotel Event Codes
[**ChangeFunctionSpaceLocations**](HotelConfigApi.md#ChangeFunctionSpaceLocations) | **Put** /functionspaceLocations/{functionspaceLocationCode} | Change function space locations
[**ChangeFunctionSpaceSetupStyles**](HotelConfigApi.md#ChangeFunctionSpaceSetupStyles) | **Put** /functionspaceSetupStyles/{functionSpaceSetupStyleId} | Change function space setup styles
[**ChangeFunctionSpaces**](HotelConfigApi.md#ChangeFunctionSpaces) | **Put** /hotels/{hotelId}/functionSpaces/{functionSpaceCode} | Change Function Spaces
[**ChangeRoomTypePool**](HotelConfigApi.md#ChangeRoomTypePool) | **Put** /hotels/{hotelId}/roomPools/{roomPoolCode} | Change Room Type Pool 
[**ChangeTemplateEventCodes**](HotelConfigApi.md#ChangeTemplateEventCodes) | **Put** /eventCodes | Change Template Event Codes
[**CopyFunctionSpaceLocations**](HotelConfigApi.md#CopyFunctionSpaceLocations) | **Put** /hotels/{sourceHotelId}/functionspaceLocations/copy | Copy function space locations
[**CopyFunctionSpaces**](HotelConfigApi.md#CopyFunctionSpaces) | **Put** /hotels/{sourceHotelId}/functionSpaces/copy | Copy Function Spaces
[**GetCateringRentalCodes**](HotelConfigApi.md#GetCateringRentalCodes) | **Get** /functionSpaceRentalCodes | Get Catering s Rental Codes
[**GetEventCodes**](HotelConfigApi.md#GetEventCodes) | **Get** /hotels/{hotelId}/eventCodes | Get Hotel Event Codes
[**GetFunctionSpace**](HotelConfigApi.md#GetFunctionSpace) | **Get** /functionspaces/{functionSpaceCode} | Get Function space 
[**GetFunctionSpaceConfig**](HotelConfigApi.md#GetFunctionSpaceConfig) | **Get** /hotels/{hotelId}/functionSpaces/{functionSpaceCode}/configurations | Get Function Space Configuration
[**GetFunctionSpaceLocations**](HotelConfigApi.md#GetFunctionSpaceLocations) | **Get** /functionspaceLocations | Get Function space locations
[**GetFunctionSpaceSetupStyles**](HotelConfigApi.md#GetFunctionSpaceSetupStyles) | **Get** /functionspaceSetupStyles | Get Function space setup styles
[**GetFunctionSpaces**](HotelConfigApi.md#GetFunctionSpaces) | **Get** /hotels/{hotelId}/functionSpaces | Get Function Spaces
[**GetRoomTypePool**](HotelConfigApi.md#GetRoomTypePool) | **Get** /hotels/{hotelId}/roomPools | Fetch Room Type Pool
[**GetTemplateEventCodes**](HotelConfigApi.md#GetTemplateEventCodes) | **Get** /eventCodes | Get Template Event Codes
[**PostCateringRentalCodes**](HotelConfigApi.md#PostCateringRentalCodes) | **Post** /functionSpaceRentalCodes | Create Catering s Rental Codes
[**PostEventCodes**](HotelConfigApi.md#PostEventCodes) | **Post** /hotels/{hotelId}/eventCodes | Create Hotel Event Codes
[**PostFunctionSpaceLocations**](HotelConfigApi.md#PostFunctionSpaceLocations) | **Post** /functionspaceLocations/{functionspaceLocationCode} | Create function space locations
[**PostFunctionSpaceSetupStyles**](HotelConfigApi.md#PostFunctionSpaceSetupStyles) | **Post** /functionspaceSetupStyles | Create function space setup styles
[**PostFunctionSpaces**](HotelConfigApi.md#PostFunctionSpaces) | **Post** /hotels/{hotelId}/functionSpaces | Create Function Spaces
[**PostRoomTypePool**](HotelConfigApi.md#PostRoomTypePool) | **Post** /hotels/{hotelId}/roomPools | Create Room Type Pools
[**PostTemplateEventCodes**](HotelConfigApi.md#PostTemplateEventCodes) | **Post** /eventCodes | Create Template Event Codes
[**RemoveCateringRentalCodes**](HotelConfigApi.md#RemoveCateringRentalCodes) | **Delete** /functionSpaceRentalCodes/{cateringRentalId} | Delete Catering s Rental Codes
[**RemoveEventCodes**](HotelConfigApi.md#RemoveEventCodes) | **Delete** /hotels/{hotelId}/eventCodes | Delete Hotel Event Codes
[**RemoveFunctionSpaceLocations**](HotelConfigApi.md#RemoveFunctionSpaceLocations) | **Delete** /functionspaceLocations/{functionspaceLocationCode} | Delete function space locations
[**RemoveFunctionSpaceSetupStyles**](HotelConfigApi.md#RemoveFunctionSpaceSetupStyles) | **Delete** /functionspaceSetupStyles/{functionSpaceSetupStyleId} | Delete function space setup styles
[**RemoveFunctionSpaces**](HotelConfigApi.md#RemoveFunctionSpaces) | **Delete** /hotels/{hotelId}/functionSpaces/{functionSpaceCode} | Delete Function Spaces
[**RemoveRoomTypePool**](HotelConfigApi.md#RemoveRoomTypePool) | **Delete** /hotels/{hotelId}/roomPools/{roomPoolCode} | Delete  Room Type Pool and Mappings
[**RemoveTemplateEventCodes**](HotelConfigApi.md#RemoveTemplateEventCodes) | **Delete** /eventCodes | Delete Template Event Codes



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
    cateringRentalCodesToBeChanged := *openapiclient.NewChangeCateringRentalCodesRequest() // ChangeCateringRentalCodesRequest | Request object which holds modified Catering Rental Codes.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.ChangeCateringRentalCodes(context.Background(), cateringRentalId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CateringRentalCodesToBeChanged(cateringRentalCodesToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.ChangeCateringRentalCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ChangeCateringRentalCodes`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.ChangeCateringRentalCodes`: %v\n", resp)
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
 **cateringRentalCodesToBeChanged** | [**ChangeCateringRentalCodesRequest**](ChangeCateringRentalCodesRequest.md) | Request object which holds modified Catering Rental Codes. | 
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
    eventCodesToBeChanged := *openapiclient.NewChangeEventCodesRequest() // ChangeEventCodesRequest | Request object for modifying Event Codes for a hotel.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.ChangeEventCodes(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).EventCodesToBeChanged(eventCodesToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.ChangeEventCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ChangeEventCodes`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.ChangeEventCodes`: %v\n", resp)
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
 **eventCodesToBeChanged** | [**ChangeEventCodesRequest**](ChangeEventCodesRequest.md) | Request object for modifying Event Codes for a hotel. | 
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
    functionSpaceLocationsToBeChanged := *openapiclient.NewChangeFunctionSpaceLocationsRequest() // ChangeFunctionSpaceLocationsRequest | Request object for modifying function space location(s) for resort.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.ChangeFunctionSpaceLocations(context.Background(), functionspaceLocationCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FunctionSpaceLocationsToBeChanged(functionSpaceLocationsToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.ChangeFunctionSpaceLocations``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ChangeFunctionSpaceLocations`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.ChangeFunctionSpaceLocations`: %v\n", resp)
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
 **functionSpaceLocationsToBeChanged** | [**ChangeFunctionSpaceLocationsRequest**](ChangeFunctionSpaceLocationsRequest.md) | Request object for modifying function space location(s) for resort. | 
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
    functionSpaceSetupStylesToBeChanged := *openapiclient.NewChangeFunctionSpaceSetupStylesRequest() // ChangeFunctionSpaceSetupStylesRequest | Request object for modifying function space setup style(s)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.ChangeFunctionSpaceSetupStyles(context.Background(), functionSpaceSetupStyleId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FunctionSpaceSetupStylesToBeChanged(functionSpaceSetupStylesToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.ChangeFunctionSpaceSetupStyles``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ChangeFunctionSpaceSetupStyles`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.ChangeFunctionSpaceSetupStyles`: %v\n", resp)
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
 **functionSpaceSetupStylesToBeChanged** | [**ChangeFunctionSpaceSetupStylesRequest**](ChangeFunctionSpaceSetupStylesRequest.md) | Request object for modifying function space setup style(s) | 
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
    functionSpacesToBeChanged := *openapiclient.NewChangeFunctionSpacesRequest() // ChangeFunctionSpacesRequest | Request object for changing function spaces.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.ChangeFunctionSpaces(context.Background(), functionSpaceCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FunctionSpacesToBeChanged(functionSpacesToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.ChangeFunctionSpaces``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ChangeFunctionSpaces`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.ChangeFunctionSpaces`: %v\n", resp)
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
 **functionSpacesToBeChanged** | [**ChangeFunctionSpacesRequest**](ChangeFunctionSpacesRequest.md) | Request object for changing function spaces. | 
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
    roomTypePoolToBeChanged := *openapiclient.NewChangeRoomTypePoolRequest() // ChangeRoomTypePoolRequest | Request object for changing existing room pool.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.ChangeRoomTypePool(context.Background(), roomPoolCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoomTypePoolToBeChanged(roomTypePoolToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.ChangeRoomTypePool``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ChangeRoomTypePool`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.ChangeRoomTypePool`: %v\n", resp)
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
 **roomTypePoolToBeChanged** | [**ChangeRoomTypePoolRequest**](ChangeRoomTypePoolRequest.md) | Request object for changing existing room pool. | 
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
    templateEventCodesToBeChanged := *openapiclient.NewChangeTemplateEventCodesRequest() // ChangeTemplateEventCodesRequest | Request object for modifying template Event Codes.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.ChangeTemplateEventCodes(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TemplateEventCodesToBeChanged(templateEventCodesToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.ChangeTemplateEventCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ChangeTemplateEventCodes`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.ChangeTemplateEventCodes`: %v\n", resp)
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
 **templateEventCodesToBeChanged** | [**ChangeTemplateEventCodesRequest**](ChangeTemplateEventCodesRequest.md) | Request object for modifying template Event Codes. | 
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
    copyFunctionSpaceLocations := *openapiclient.NewCopyFunctionSpaceLocationsRequest() // CopyFunctionSpaceLocationsRequest | List of function space location(s) to be copied.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.CopyFunctionSpaceLocations(context.Background(), sourceHotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CopyFunctionSpaceLocations(copyFunctionSpaceLocations).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.CopyFunctionSpaceLocations``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CopyFunctionSpaceLocations`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.CopyFunctionSpaceLocations`: %v\n", resp)
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
 **copyFunctionSpaceLocations** | [**CopyFunctionSpaceLocationsRequest**](CopyFunctionSpaceLocationsRequest.md) | List of function space location(s) to be copied. | 
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
    copyFunctionSpaces := *openapiclient.NewCopyFunctionSpacesRequest() // CopyFunctionSpacesRequest | Request object for creating multiple function spaces based on an existing function space. New function space may have different name, display name on function dairy, order of display and combo elements. The rest of the details will be copied from the source function space.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.CopyFunctionSpaces(context.Background(), sourceHotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CopyFunctionSpaces(copyFunctionSpaces).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.CopyFunctionSpaces``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CopyFunctionSpaces`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.CopyFunctionSpaces`: %v\n", resp)
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
 **copyFunctionSpaces** | [**CopyFunctionSpacesRequest**](CopyFunctionSpacesRequest.md) | Request object for creating multiple function spaces based on an existing function space. New function space may have different name, display name on function dairy, order of display and combo elements. The rest of the details will be copied from the source function space. | 
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
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.GetCateringRentalCodes(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FetchInactive(fetchInactive).Codes(codes).WildCard(wildCard).Description(description).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.GetCateringRentalCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetCateringRentalCodes`: CateringRentalCodesDetails
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.GetCateringRentalCodes`: %v\n", resp)
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
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.GetEventCodes(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelIds(hotelIds).EventsCodes(eventsCodes).WildCard(wildCard).IncludeInactive(includeInactive).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.GetEventCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetEventCodes`: EventCodesDetails
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.GetEventCodes`: %v\n", resp)
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
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.GetFunctionSpace(context.Background(), functionSpaceCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).PageNumber(pageNumber).Physical(physical).Pseudo(pseudo).HotelId(hotelId).RoomClassCodes(roomClassCodes).RoomTypeCodes(roomTypeCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.GetFunctionSpace``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetFunctionSpace`: FunctionSpaceDetails
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.GetFunctionSpace`: %v\n", resp)
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
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.GetFunctionSpaceConfig(context.Background(), functionSpaceCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.GetFunctionSpaceConfig``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetFunctionSpaceConfig`: FunctionSpaceConfigDetails
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.GetFunctionSpaceConfig`: %v\n", resp)
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
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.GetFunctionSpaceLocations(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelIds(hotelIds).Codes(codes).WildCard(wildCard).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.GetFunctionSpaceLocations``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetFunctionSpaceLocations`: FunctionSpaceLocationsDetails
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.GetFunctionSpaceLocations`: %v\n", resp)
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
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.GetFunctionSpaceSetupStyles(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FetchInactive(fetchInactive).Codes(codes).WildCard(wildCard).Description(description).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.GetFunctionSpaceSetupStyles``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetFunctionSpaceSetupStyles`: FunctionSpaceSetupStylesDetails
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.GetFunctionSpaceSetupStyles`: %v\n", resp)
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
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.GetFunctionSpaces(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).PageNumber(pageNumber).SortingBy(sortingBy).RoomCodes(roomCodes).RoomType(roomType).SpaceType(spaceType).FunctionSpaceWildcard(functionSpaceWildcard).WebBookable(webBookable).FloorCodes(floorCodes).LocationCodes(locationCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.GetFunctionSpaces``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetFunctionSpaces`: FunctionSpacesDetails
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.GetFunctionSpaces`: %v\n", resp)
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
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.GetRoomTypePool(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).IncludeInactive(includeInactive).Limit(limit).PageNumber(pageNumber).Physical(physical).Pseudo(pseudo).SummaryInfo(summaryInfo).RoomTypeCodes(roomTypeCodes).RoomClassCodes(roomClassCodes).RoomTypePoolCodes(roomTypePoolCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.GetRoomTypePool``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetRoomTypePool`: RoomTypePoolDetails
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.GetRoomTypePool`: %v\n", resp)
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
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.GetTemplateEventCodes(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).EventsCodes(eventsCodes).WildCard(wildCard).IncludeInactive(includeInactive).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.GetTemplateEventCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetTemplateEventCodes`: TemplateEventCodesDetails
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.GetTemplateEventCodes`: %v\n", resp)
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
    cateringRentalCodesCriteria := *openapiclient.NewPostCateringRentalCodesRequest() // PostCateringRentalCodesRequest | Request object which holds new Catering Rental Code Details.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.PostCateringRentalCodes(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CateringRentalCodesCriteria(cateringRentalCodesCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.PostCateringRentalCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostCateringRentalCodes`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.PostCateringRentalCodes`: %v\n", resp)
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
 **cateringRentalCodesCriteria** | [**PostCateringRentalCodesRequest**](PostCateringRentalCodesRequest.md) | Request object which holds new Catering Rental Code Details. | 
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
    eventCodesCriteria := *openapiclient.NewPostEventCodesRequest() // PostEventCodesRequest | Request object for creating new Event Codes for a hotel.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.PostEventCodes(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).EventCodesCriteria(eventCodesCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.PostEventCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostEventCodes`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.PostEventCodes`: %v\n", resp)
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
 **eventCodesCriteria** | [**PostEventCodesRequest**](PostEventCodesRequest.md) | Request object for creating new Event Codes for a hotel. | 
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
    functionSpaceLocationsCriteria := *openapiclient.NewPostFunctionSpaceLocationsRequest() // PostFunctionSpaceLocationsRequest | Request object for adding function space location configurations to resort.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.PostFunctionSpaceLocations(context.Background(), functionspaceLocationCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FunctionSpaceLocationsCriteria(functionSpaceLocationsCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.PostFunctionSpaceLocations``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostFunctionSpaceLocations`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.PostFunctionSpaceLocations`: %v\n", resp)
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
 **functionSpaceLocationsCriteria** | [**PostFunctionSpaceLocationsRequest**](PostFunctionSpaceLocationsRequest.md) | Request object for adding function space location configurations to resort. | 
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
    functionSpaceSetupStylesCriteria := *openapiclient.NewPostFunctionSpaceSetupStylesRequest() // PostFunctionSpaceSetupStylesRequest | Request object for adding function space setup styles.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.PostFunctionSpaceSetupStyles(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FunctionSpaceSetupStylesCriteria(functionSpaceSetupStylesCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.PostFunctionSpaceSetupStyles``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostFunctionSpaceSetupStyles`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.PostFunctionSpaceSetupStyles`: %v\n", resp)
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
 **functionSpaceSetupStylesCriteria** | [**PostFunctionSpaceSetupStylesRequest**](PostFunctionSpaceSetupStylesRequest.md) | Request object for adding function space setup styles. | 
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
    functionSpacesCriteria := *openapiclient.NewPostFunctionSpacesRequest() // PostFunctionSpacesRequest | Request object for creating function spaces.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.PostFunctionSpaces(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FunctionSpacesCriteria(functionSpacesCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.PostFunctionSpaces``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostFunctionSpaces`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.PostFunctionSpaces`: %v\n", resp)
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
 **functionSpacesCriteria** | [**PostFunctionSpacesRequest**](PostFunctionSpacesRequest.md) | Request object for creating function spaces. | 
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
    roomTypePoolCriteria := *openapiclient.NewPostRoomTypePoolRequest() // PostRoomTypePoolRequest | Request object for creating new room pool.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.PostRoomTypePool(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoomTypePoolCriteria(roomTypePoolCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.PostRoomTypePool``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostRoomTypePool`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.PostRoomTypePool`: %v\n", resp)
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
 **roomTypePoolCriteria** | [**PostRoomTypePoolRequest**](PostRoomTypePoolRequest.md) | Request object for creating new room pool. | 
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
    templateEventCodesCriteria := *openapiclient.NewPostTemplateEventCodesRequest() // PostTemplateEventCodesRequest | Request object for creating new template Event Codes.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.PostTemplateEventCodes(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TemplateEventCodesCriteria(templateEventCodesCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.PostTemplateEventCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostTemplateEventCodes`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.PostTemplateEventCodes`: %v\n", resp)
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
 **templateEventCodesCriteria** | [**PostTemplateEventCodesRequest**](PostTemplateEventCodesRequest.md) | Request object for creating new template Event Codes. | 
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
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.RemoveCateringRentalCodes(context.Background(), cateringRentalId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.RemoveCateringRentalCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `RemoveCateringRentalCodes`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.RemoveCateringRentalCodes`: %v\n", resp)
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
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.RemoveEventCodes(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).EventCode(eventCode).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.RemoveEventCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `RemoveEventCodes`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.RemoveEventCodes`: %v\n", resp)
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
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.RemoveFunctionSpaceLocations(context.Background(), functionspaceLocationCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.RemoveFunctionSpaceLocations``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `RemoveFunctionSpaceLocations`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.RemoveFunctionSpaceLocations`: %v\n", resp)
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
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.RemoveFunctionSpaceSetupStyles(context.Background(), functionSpaceSetupStyleId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.RemoveFunctionSpaceSetupStyles``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `RemoveFunctionSpaceSetupStyles`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.RemoveFunctionSpaceSetupStyles`: %v\n", resp)
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
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.RemoveFunctionSpaces(context.Background(), functionSpaceCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.RemoveFunctionSpaces``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `RemoveFunctionSpaces`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.RemoveFunctionSpaces`: %v\n", resp)
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
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.RemoveRoomTypePool(context.Background(), roomPoolCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Description(description).DefaultText(defaultText).Lang(lang).Sequence(sequence).Inactive(inactive).NumberOfRooms(numberOfRooms).RoomType(roomType).RoomClass(roomClass).ShortDescription(shortDescription).ActiveDate(activeDate).Pseudo(pseudo).Accessible(accessible).SendToInterface(sendToInterface).SellSequence(sellSequence).Suite(suite).MeetingRoom(meetingRoom).Restricted(restricted).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.RemoveRoomTypePool``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `RemoveRoomTypePool`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.RemoveRoomTypePool`: %v\n", resp)
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
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.RemoveTemplateEventCodes(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TemplateEventCodes(templateEventCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.RemoveTemplateEventCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `RemoveTemplateEventCodes`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.RemoveTemplateEventCodes`: %v\n", resp)
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


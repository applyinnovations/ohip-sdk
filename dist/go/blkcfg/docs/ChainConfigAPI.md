# \ChainConfigAPI

All URIs are relative to */blk/config/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**DeleteBlockCancellationReasons**](ChainConfigAPI.md#DeleteBlockCancellationReasons) | **Delete** /blockCancellationReasons/{blockCancellationReasonsId} | Delete Block Cancellation Reason
[**DeleteBlockLostBookingCodes**](ChainConfigAPI.md#DeleteBlockLostBookingCodes) | **Delete** /blockLostBookingCodes/{blockLostBookingCodesId} | Delete Block Lost Booking Code
[**DeleteBlockRateOverrideReasons**](ChainConfigAPI.md#DeleteBlockRateOverrideReasons) | **Delete** /blockRateOverrideReasons/{blockRateOverrideReasonsId} | Delete Block Rate Override Reason
[**DeleteBlockRefusedReasons**](ChainConfigAPI.md#DeleteBlockRefusedReasons) | **Delete** /blockRefusedReasons/{blockRefusedReasonsId} | Delete Block Refused Reason
[**DeleteDestinationCodes**](ChainConfigAPI.md#DeleteDestinationCodes) | **Delete** /destinationCodes/{destinationCodesId} | Delete Destination Codes
[**DeleteReservationMethods**](ChainConfigAPI.md#DeleteReservationMethods) | **Delete** /reservationMethods/{reservationMethodsId} | Delete Reservation Methods
[**GetBlockCancellationReasons**](ChainConfigAPI.md#GetBlockCancellationReasons) | **Get** /blockCancellationReasons | Get Block Cancellation Reasons
[**GetBlockLostBookingCodes**](ChainConfigAPI.md#GetBlockLostBookingCodes) | **Get** /blockLostBookingCodes | Get Block Lost Booking Codes
[**GetBlockRateOverrideReasons**](ChainConfigAPI.md#GetBlockRateOverrideReasons) | **Get** /blockRateOverrideReasons | Get Block Rate Override Reasons
[**GetBlockRefusedReasons**](ChainConfigAPI.md#GetBlockRefusedReasons) | **Get** /blockRefusedReasons | Get Block Refused Reasons
[**GetDestinationCodes**](ChainConfigAPI.md#GetDestinationCodes) | **Get** /destinationCodes | Get Destination Codes
[**GetReservationMethods**](ChainConfigAPI.md#GetReservationMethods) | **Get** /reservationMethods | Get Reservation Methods
[**PostBlockCancellationReasons**](ChainConfigAPI.md#PostBlockCancellationReasons) | **Post** /blockCancellationReasons | Create Block Cancellation Reasons
[**PostBlockLostBookingCodes**](ChainConfigAPI.md#PostBlockLostBookingCodes) | **Post** /blockLostBookingCodes | Create Block Lost Booking Codes
[**PostBlockRateOverrideReasons**](ChainConfigAPI.md#PostBlockRateOverrideReasons) | **Post** /blockRateOverrideReasons | Create Block Rate Override Reasons
[**PostBlockRefusedReasonspostBlo**](ChainConfigAPI.md#PostBlockRefusedReasonspostBlo) | **Post** /blockRefusedReasons | Create Block Refused Reasons
[**PostDestinationCodes**](ChainConfigAPI.md#PostDestinationCodes) | **Post** /destinationCodes | Create Destination Codes
[**PostReservationMethods**](ChainConfigAPI.md#PostReservationMethods) | **Post** /reservationMethods | Create Reservation Methods
[**PutBlockCancellationReasons**](ChainConfigAPI.md#PutBlockCancellationReasons) | **Put** /blockCancellationReasons/{blockCancellationReasonsId} | Change Block Cancellation Reason
[**PutBlockLostBookingCodes**](ChainConfigAPI.md#PutBlockLostBookingCodes) | **Put** /blockLostBookingCodes/{blockLostBookingCodesId} | Change Block Lost Booking Code
[**PutBlockRateOverrideReasons**](ChainConfigAPI.md#PutBlockRateOverrideReasons) | **Put** /blockRateOverrideReasons/{blockRateOverrideReasonsId} | Change Block Rate Override Reason
[**PutBlockRefusedReasons**](ChainConfigAPI.md#PutBlockRefusedReasons) | **Put** /blockRefusedReasons/{blockRefusedReasonsId} | Change Block Refused Reason
[**PutDestinationCodes**](ChainConfigAPI.md#PutDestinationCodes) | **Put** /destinationCodes/{destinationCodesId} | Change Destination Codes
[**PutReservationMethods**](ChainConfigAPI.md#PutReservationMethods) | **Put** /reservationMethods/{reservationMethodsId} | Change Reservation Methods



## DeleteBlockCancellationReasons

> Status DeleteBlockCancellationReasons(ctx, blockCancellationReasonsId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BlockCancellationReasonsCodes(blockCancellationReasonsCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete Block Cancellation Reason



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/blkcfg"
)

func main() {
    blockCancellationReasonsId := "blockCancellationReasonsId_example" // string | Unique ID of Block Cancellation Reasons.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    blockCancellationReasonsCodes := []string{"Inner_example"} // []string |  (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChainConfigAPI.DeleteBlockCancellationReasons(context.Background(), blockCancellationReasonsId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BlockCancellationReasonsCodes(blockCancellationReasonsCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChainConfigAPI.DeleteBlockCancellationReasons``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteBlockCancellationReasons`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChainConfigAPI.DeleteBlockCancellationReasons`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**blockCancellationReasonsId** | **string** | Unique ID of Block Cancellation Reasons. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteBlockCancellationReasonsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **blockCancellationReasonsCodes** | **[]string** |  | 
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


## DeleteBlockLostBookingCodes

> Status DeleteBlockLostBookingCodes(ctx, blockLostBookingCodesId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BlockLostBookingCodes(blockLostBookingCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete Block Lost Booking Code



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/blkcfg"
)

func main() {
    blockLostBookingCodesId := "blockLostBookingCodesId_example" // string | Unique ID of Block Lost Booking Codes.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    blockLostBookingCodes := []string{"Inner_example"} // []string |  (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChainConfigAPI.DeleteBlockLostBookingCodes(context.Background(), blockLostBookingCodesId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BlockLostBookingCodes(blockLostBookingCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChainConfigAPI.DeleteBlockLostBookingCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteBlockLostBookingCodes`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChainConfigAPI.DeleteBlockLostBookingCodes`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**blockLostBookingCodesId** | **string** | Unique ID of Block Lost Booking Codes. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteBlockLostBookingCodesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **blockLostBookingCodes** | **[]string** |  | 
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


## DeleteBlockRateOverrideReasons

> Status DeleteBlockRateOverrideReasons(ctx, blockRateOverrideReasonsId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BlockRateOverrideReasonsCodes(blockRateOverrideReasonsCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete Block Rate Override Reason



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/blkcfg"
)

func main() {
    blockRateOverrideReasonsId := "blockRateOverrideReasonsId_example" // string | Unique ID of Block Rate Override Reasons.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    blockRateOverrideReasonsCodes := []string{"Inner_example"} // []string |  (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChainConfigAPI.DeleteBlockRateOverrideReasons(context.Background(), blockRateOverrideReasonsId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BlockRateOverrideReasonsCodes(blockRateOverrideReasonsCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChainConfigAPI.DeleteBlockRateOverrideReasons``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteBlockRateOverrideReasons`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChainConfigAPI.DeleteBlockRateOverrideReasons`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**blockRateOverrideReasonsId** | **string** | Unique ID of Block Rate Override Reasons. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteBlockRateOverrideReasonsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **blockRateOverrideReasonsCodes** | **[]string** |  | 
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


## DeleteBlockRefusedReasons

> Status DeleteBlockRefusedReasons(ctx, blockRefusedReasonsId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BlockRefusedReasonsCodes(blockRefusedReasonsCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete Block Refused Reason



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/blkcfg"
)

func main() {
    blockRefusedReasonsId := "blockRefusedReasonsId_example" // string | Unique ID of Block Refused Reasons.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    blockRefusedReasonsCodes := []string{"Inner_example"} // []string |  (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChainConfigAPI.DeleteBlockRefusedReasons(context.Background(), blockRefusedReasonsId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BlockRefusedReasonsCodes(blockRefusedReasonsCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChainConfigAPI.DeleteBlockRefusedReasons``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteBlockRefusedReasons`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChainConfigAPI.DeleteBlockRefusedReasons`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**blockRefusedReasonsId** | **string** | Unique ID of Block Refused Reasons. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteBlockRefusedReasonsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **blockRefusedReasonsCodes** | **[]string** |  | 
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


## DeleteDestinationCodes

> Status DeleteDestinationCodes(ctx, destinationCodesId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).DestinationCodes(destinationCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete Destination Codes



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/blkcfg"
)

func main() {
    destinationCodesId := "destinationCodesId_example" // string | Unique ID of Destination Codes.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    destinationCodes := []string{"Inner_example"} // []string |  (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChainConfigAPI.DeleteDestinationCodes(context.Background(), destinationCodesId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).DestinationCodes(destinationCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChainConfigAPI.DeleteDestinationCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteDestinationCodes`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChainConfigAPI.DeleteDestinationCodes`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**destinationCodesId** | **string** | Unique ID of Destination Codes. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteDestinationCodesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **destinationCodes** | **[]string** |  | 
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


## DeleteReservationMethods

> Status DeleteReservationMethods(ctx, reservationMethodsId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ReservationMethodsCodes(reservationMethodsCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete Reservation Methods



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/blkcfg"
)

func main() {
    reservationMethodsId := "reservationMethodsId_example" // string | Unique ID of Reservation Methods.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    reservationMethodsCodes := []string{"Inner_example"} // []string |  (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChainConfigAPI.DeleteReservationMethods(context.Background(), reservationMethodsId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ReservationMethodsCodes(reservationMethodsCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChainConfigAPI.DeleteReservationMethods``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteReservationMethods`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChainConfigAPI.DeleteReservationMethods`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationMethodsId** | **string** | Unique ID of Reservation Methods. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteReservationMethodsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **reservationMethodsCodes** | **[]string** |  | 
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


## GetBlockCancellationReasons

> BlockCancellationReasonsDetails GetBlockCancellationReasons(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FetchInactive(fetchInactive).Codes(codes).WildCard(wildCard).Description(description).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Block Cancellation Reasons



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/blkcfg"
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
    resp, r, err := apiClient.ChainConfigAPI.GetBlockCancellationReasons(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FetchInactive(fetchInactive).Codes(codes).WildCard(wildCard).Description(description).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChainConfigAPI.GetBlockCancellationReasons``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetBlockCancellationReasons`: BlockCancellationReasonsDetails
    fmt.Fprintf(os.Stdout, "Response from `ChainConfigAPI.GetBlockCancellationReasons`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetBlockCancellationReasonsRequest struct via the builder pattern


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

[**BlockCancellationReasonsDetails**](BlockCancellationReasonsDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetBlockLostBookingCodes

> BlockLostBookingCodesDetails GetBlockLostBookingCodes(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FetchInactive(fetchInactive).Codes(codes).WildCard(wildCard).Description(description).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Block Lost Booking Codes



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/blkcfg"
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
    resp, r, err := apiClient.ChainConfigAPI.GetBlockLostBookingCodes(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FetchInactive(fetchInactive).Codes(codes).WildCard(wildCard).Description(description).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChainConfigAPI.GetBlockLostBookingCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetBlockLostBookingCodes`: BlockLostBookingCodesDetails
    fmt.Fprintf(os.Stdout, "Response from `ChainConfigAPI.GetBlockLostBookingCodes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetBlockLostBookingCodesRequest struct via the builder pattern


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

[**BlockLostBookingCodesDetails**](BlockLostBookingCodesDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetBlockRateOverrideReasons

> BlockRateOverrideReasonsDetails GetBlockRateOverrideReasons(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FetchInactive(fetchInactive).Codes(codes).WildCard(wildCard).Description(description).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Block Rate Override Reasons



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/blkcfg"
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
    resp, r, err := apiClient.ChainConfigAPI.GetBlockRateOverrideReasons(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FetchInactive(fetchInactive).Codes(codes).WildCard(wildCard).Description(description).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChainConfigAPI.GetBlockRateOverrideReasons``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetBlockRateOverrideReasons`: BlockRateOverrideReasonsDetails
    fmt.Fprintf(os.Stdout, "Response from `ChainConfigAPI.GetBlockRateOverrideReasons`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetBlockRateOverrideReasonsRequest struct via the builder pattern


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

[**BlockRateOverrideReasonsDetails**](BlockRateOverrideReasonsDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetBlockRefusedReasons

> BlockRefusedReasonsDetails GetBlockRefusedReasons(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FetchInactive(fetchInactive).Codes(codes).WildCard(wildCard).Description(description).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Block Refused Reasons



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/blkcfg"
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
    resp, r, err := apiClient.ChainConfigAPI.GetBlockRefusedReasons(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FetchInactive(fetchInactive).Codes(codes).WildCard(wildCard).Description(description).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChainConfigAPI.GetBlockRefusedReasons``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetBlockRefusedReasons`: BlockRefusedReasonsDetails
    fmt.Fprintf(os.Stdout, "Response from `ChainConfigAPI.GetBlockRefusedReasons`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetBlockRefusedReasonsRequest struct via the builder pattern


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

[**BlockRefusedReasonsDetails**](BlockRefusedReasonsDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetDestinationCodes

> DestinationCodesDetails GetDestinationCodes(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FetchInactive(fetchInactive).Codes(codes).WildCard(wildCard).Description(description).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Destination Codes



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/blkcfg"
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
    resp, r, err := apiClient.ChainConfigAPI.GetDestinationCodes(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FetchInactive(fetchInactive).Codes(codes).WildCard(wildCard).Description(description).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChainConfigAPI.GetDestinationCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetDestinationCodes`: DestinationCodesDetails
    fmt.Fprintf(os.Stdout, "Response from `ChainConfigAPI.GetDestinationCodes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetDestinationCodesRequest struct via the builder pattern


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

[**DestinationCodesDetails**](DestinationCodesDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetReservationMethods

> ReservationMethodsDetails GetReservationMethods(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FetchInactive(fetchInactive).Codes(codes).WildCard(wildCard).Description(description).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Reservation Methods



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/blkcfg"
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
    resp, r, err := apiClient.ChainConfigAPI.GetReservationMethods(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FetchInactive(fetchInactive).Codes(codes).WildCard(wildCard).Description(description).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChainConfigAPI.GetReservationMethods``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetReservationMethods`: ReservationMethodsDetails
    fmt.Fprintf(os.Stdout, "Response from `ChainConfigAPI.GetReservationMethods`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetReservationMethodsRequest struct via the builder pattern


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

[**ReservationMethodsDetails**](ReservationMethodsDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostBlockCancellationReasons

> Status PostBlockCancellationReasons(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BlockCancellationReasonsCriteria(blockCancellationReasonsCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create Block Cancellation Reasons



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/blkcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    blockCancellationReasonsCriteria := *openapiclient.NewBlockCancellationReasonsCriteria() // BlockCancellationReasonsCriteria | Request object for creating Block Cancellation Reasons.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChainConfigAPI.PostBlockCancellationReasons(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BlockCancellationReasonsCriteria(blockCancellationReasonsCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChainConfigAPI.PostBlockCancellationReasons``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostBlockCancellationReasons`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChainConfigAPI.PostBlockCancellationReasons`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostBlockCancellationReasonsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **blockCancellationReasonsCriteria** | [**BlockCancellationReasonsCriteria**](BlockCancellationReasonsCriteria.md) | Request object for creating Block Cancellation Reasons. | 
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


## PostBlockLostBookingCodes

> Status PostBlockLostBookingCodes(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BlockLostBookingCodesCriteria(blockLostBookingCodesCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create Block Lost Booking Codes



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/blkcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    blockLostBookingCodesCriteria := *openapiclient.NewBlockLostBookingCodesCriteria() // BlockLostBookingCodesCriteria | Request object for creating Block Lost Booking Codes.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChainConfigAPI.PostBlockLostBookingCodes(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BlockLostBookingCodesCriteria(blockLostBookingCodesCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChainConfigAPI.PostBlockLostBookingCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostBlockLostBookingCodes`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChainConfigAPI.PostBlockLostBookingCodes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostBlockLostBookingCodesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **blockLostBookingCodesCriteria** | [**BlockLostBookingCodesCriteria**](BlockLostBookingCodesCriteria.md) | Request object for creating Block Lost Booking Codes. | 
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


## PostBlockRateOverrideReasons

> Status PostBlockRateOverrideReasons(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BlockRateOverrideReasonsCriteria(blockRateOverrideReasonsCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create Block Rate Override Reasons



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/blkcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    blockRateOverrideReasonsCriteria := *openapiclient.NewBlockRateOverrideReasonsCriteria() // BlockRateOverrideReasonsCriteria | Request object for creating Block Rate Override Reasons.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChainConfigAPI.PostBlockRateOverrideReasons(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BlockRateOverrideReasonsCriteria(blockRateOverrideReasonsCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChainConfigAPI.PostBlockRateOverrideReasons``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostBlockRateOverrideReasons`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChainConfigAPI.PostBlockRateOverrideReasons`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostBlockRateOverrideReasonsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **blockRateOverrideReasonsCriteria** | [**BlockRateOverrideReasonsCriteria**](BlockRateOverrideReasonsCriteria.md) | Request object for creating Block Rate Override Reasons. | 
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


## PostBlockRefusedReasonspostBlo

> Status PostBlockRefusedReasonspostBlo(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BlockRefusedReasonsCriteria(blockRefusedReasonsCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create Block Refused Reasons



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/blkcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    blockRefusedReasonsCriteria := *openapiclient.NewBlockRefusedReasonsCriteria() // BlockRefusedReasonsCriteria | Request object for creating Block Refused Reasons.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChainConfigAPI.PostBlockRefusedReasonspostBlo(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BlockRefusedReasonsCriteria(blockRefusedReasonsCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChainConfigAPI.PostBlockRefusedReasonspostBlo``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostBlockRefusedReasonspostBlo`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChainConfigAPI.PostBlockRefusedReasonspostBlo`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostBlockRefusedReasonspostBloRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **blockRefusedReasonsCriteria** | [**BlockRefusedReasonsCriteria**](BlockRefusedReasonsCriteria.md) | Request object for creating Block Refused Reasons. | 
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


## PostDestinationCodes

> Status PostDestinationCodes(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).DestinationCodesCriteria(destinationCodesCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create Destination Codes



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/blkcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    destinationCodesCriteria := *openapiclient.NewDestinationCodesCriteria() // DestinationCodesCriteria | Request object for creating Destination Codes.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChainConfigAPI.PostDestinationCodes(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).DestinationCodesCriteria(destinationCodesCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChainConfigAPI.PostDestinationCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostDestinationCodes`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChainConfigAPI.PostDestinationCodes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostDestinationCodesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **destinationCodesCriteria** | [**DestinationCodesCriteria**](DestinationCodesCriteria.md) | Request object for creating Destination Codes. | 
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


## PostReservationMethods

> Status PostReservationMethods(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ReservationMethodsCriteria(reservationMethodsCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create Reservation Methods



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/blkcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    reservationMethodsCriteria := *openapiclient.NewReservationMethodsCriteria() // ReservationMethodsCriteria | Request object for creating Reservation Methods.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChainConfigAPI.PostReservationMethods(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ReservationMethodsCriteria(reservationMethodsCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChainConfigAPI.PostReservationMethods``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostReservationMethods`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChainConfigAPI.PostReservationMethods`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostReservationMethodsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **reservationMethodsCriteria** | [**ReservationMethodsCriteria**](ReservationMethodsCriteria.md) | Request object for creating Reservation Methods. | 
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


## PutBlockCancellationReasons

> Status PutBlockCancellationReasons(ctx, blockCancellationReasonsId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BlockCancellationReasonsToBeChanged(blockCancellationReasonsToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change Block Cancellation Reason



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/blkcfg"
)

func main() {
    blockCancellationReasonsId := "blockCancellationReasonsId_example" // string | Unique ID of Block Cancellation Reasons.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    blockCancellationReasonsToBeChanged := *openapiclient.NewBlockCancellationReasonsToBeChanged() // BlockCancellationReasonsToBeChanged | Request object for changing Block Cancellation Reasons.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChainConfigAPI.PutBlockCancellationReasons(context.Background(), blockCancellationReasonsId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BlockCancellationReasonsToBeChanged(blockCancellationReasonsToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChainConfigAPI.PutBlockCancellationReasons``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutBlockCancellationReasons`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChainConfigAPI.PutBlockCancellationReasons`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**blockCancellationReasonsId** | **string** | Unique ID of Block Cancellation Reasons. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutBlockCancellationReasonsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **blockCancellationReasonsToBeChanged** | [**BlockCancellationReasonsToBeChanged**](BlockCancellationReasonsToBeChanged.md) | Request object for changing Block Cancellation Reasons. | 
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


## PutBlockLostBookingCodes

> Status PutBlockLostBookingCodes(ctx, blockLostBookingCodesId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BlockLostBookingCodesToBeChanged(blockLostBookingCodesToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change Block Lost Booking Code



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/blkcfg"
)

func main() {
    blockLostBookingCodesId := "blockLostBookingCodesId_example" // string | Unique ID of Block Lost Booking Codes.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    blockLostBookingCodesToBeChanged := *openapiclient.NewBlockLostBookingCodesToBeChanged() // BlockLostBookingCodesToBeChanged | Request object for changing Block Lost Booking Codes.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChainConfigAPI.PutBlockLostBookingCodes(context.Background(), blockLostBookingCodesId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BlockLostBookingCodesToBeChanged(blockLostBookingCodesToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChainConfigAPI.PutBlockLostBookingCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutBlockLostBookingCodes`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChainConfigAPI.PutBlockLostBookingCodes`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**blockLostBookingCodesId** | **string** | Unique ID of Block Lost Booking Codes. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutBlockLostBookingCodesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **blockLostBookingCodesToBeChanged** | [**BlockLostBookingCodesToBeChanged**](BlockLostBookingCodesToBeChanged.md) | Request object for changing Block Lost Booking Codes. | 
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


## PutBlockRateOverrideReasons

> Status PutBlockRateOverrideReasons(ctx, blockRateOverrideReasonsId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BlockRateOverrideReasonsToBeChanged(blockRateOverrideReasonsToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change Block Rate Override Reason



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/blkcfg"
)

func main() {
    blockRateOverrideReasonsId := "blockRateOverrideReasonsId_example" // string | Unique ID of Block Rate Override Reasons.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    blockRateOverrideReasonsToBeChanged := *openapiclient.NewBlockRateOverrideReasonsToBeChanged() // BlockRateOverrideReasonsToBeChanged | Request object for changing Block Rate Override Reasons.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChainConfigAPI.PutBlockRateOverrideReasons(context.Background(), blockRateOverrideReasonsId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BlockRateOverrideReasonsToBeChanged(blockRateOverrideReasonsToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChainConfigAPI.PutBlockRateOverrideReasons``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutBlockRateOverrideReasons`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChainConfigAPI.PutBlockRateOverrideReasons`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**blockRateOverrideReasonsId** | **string** | Unique ID of Block Rate Override Reasons. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutBlockRateOverrideReasonsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **blockRateOverrideReasonsToBeChanged** | [**BlockRateOverrideReasonsToBeChanged**](BlockRateOverrideReasonsToBeChanged.md) | Request object for changing Block Rate Override Reasons. | 
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


## PutBlockRefusedReasons

> Status PutBlockRefusedReasons(ctx, blockRefusedReasonsId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BlockRefusedReasonsToBeChanged(blockRefusedReasonsToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change Block Refused Reason



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/blkcfg"
)

func main() {
    blockRefusedReasonsId := "blockRefusedReasonsId_example" // string | Unique ID of Block Refused Reasons.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    blockRefusedReasonsToBeChanged := *openapiclient.NewBlockRefusedReasonsToBeChanged() // BlockRefusedReasonsToBeChanged | Request object for changing Block Refused Reasons.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChainConfigAPI.PutBlockRefusedReasons(context.Background(), blockRefusedReasonsId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BlockRefusedReasonsToBeChanged(blockRefusedReasonsToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChainConfigAPI.PutBlockRefusedReasons``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutBlockRefusedReasons`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChainConfigAPI.PutBlockRefusedReasons`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**blockRefusedReasonsId** | **string** | Unique ID of Block Refused Reasons. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutBlockRefusedReasonsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **blockRefusedReasonsToBeChanged** | [**BlockRefusedReasonsToBeChanged**](BlockRefusedReasonsToBeChanged.md) | Request object for changing Block Refused Reasons. | 
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


## PutDestinationCodes

> Status PutDestinationCodes(ctx, destinationCodesId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).DestinationCodesToBeChanged(destinationCodesToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change Destination Codes



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/blkcfg"
)

func main() {
    destinationCodesId := "destinationCodesId_example" // string | Unique ID of Destination Codes.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    destinationCodesToBeChanged := *openapiclient.NewDestinationCodesToBeChanged() // DestinationCodesToBeChanged | Request object for changing Destination Codes.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChainConfigAPI.PutDestinationCodes(context.Background(), destinationCodesId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).DestinationCodesToBeChanged(destinationCodesToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChainConfigAPI.PutDestinationCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutDestinationCodes`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChainConfigAPI.PutDestinationCodes`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**destinationCodesId** | **string** | Unique ID of Destination Codes. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutDestinationCodesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **destinationCodesToBeChanged** | [**DestinationCodesToBeChanged**](DestinationCodesToBeChanged.md) | Request object for changing Destination Codes. | 
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


## PutReservationMethods

> Status PutReservationMethods(ctx, reservationMethodsId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ReservationMethodsToBeChanged(reservationMethodsToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change Reservation Methods



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/blkcfg"
)

func main() {
    reservationMethodsId := "reservationMethodsId_example" // string | Unique ID of Reservation Methods.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    reservationMethodsToBeChanged := *openapiclient.NewReservationMethodsToBeChanged() // ReservationMethodsToBeChanged | Request object for changing Reservation Methods.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChainConfigAPI.PutReservationMethods(context.Background(), reservationMethodsId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ReservationMethodsToBeChanged(reservationMethodsToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChainConfigAPI.PutReservationMethods``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutReservationMethods`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChainConfigAPI.PutReservationMethods`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationMethodsId** | **string** | Unique ID of Reservation Methods. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutReservationMethodsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **reservationMethodsToBeChanged** | [**ReservationMethodsToBeChanged**](ReservationMethodsToBeChanged.md) | Request object for changing Reservation Methods. | 
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


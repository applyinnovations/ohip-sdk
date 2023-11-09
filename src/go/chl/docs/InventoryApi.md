# \InventoryApi

All URIs are relative to */chl/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ChangeChannelSellLimitsByDate**](InventoryApi.md#ChangeChannelSellLimitsByDate) | **Put** /hotels/{hotelId}/channelSellLimits | Updates channel sell limits by date
[**ChangeChannelSellLimitsByDateRange**](InventoryApi.md#ChangeChannelSellLimitsByDateRange) | **Put** /hotels/{hotelId}/channels/{channelId}/channelSellLimitsByDateRange | Updates channel sell limits by daterange
[**DeleteChannelSellLimits**](InventoryApi.md#DeleteChannelSellLimits) | **Delete** /hotels/{hotelId}/channelSellLimits/{Id} | Deletes channel sell limits
[**GetChannelSellLimits**](InventoryApi.md#GetChannelSellLimits) | **Get** /hotels/{hotelId}/channel/sellLimits | Gets sell limit detail for a given channel hotel combination



## ChangeChannelSellLimitsByDate

> Status ChangeChannelSellLimitsByDate(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChannelSellLimitsByDate(channelSellLimitsByDate).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Updates channel sell limits by date



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/chl"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of the hotel where channel sell limits are updated by date.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    channelSellLimitsByDate := *openapiclient.NewChangeChannelSellLimitsByDateRequest() // ChangeChannelSellLimitsByDateRequest | Request object to create or update sell limits for the channel or channel room type by day. Advanced logic is implemented to combine consecutive blocks of sell limits into a single schedule which have the same limits configured. Existing schedules can also be split as needed to account for overlapping schedules.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.InventoryApi.ChangeChannelSellLimitsByDate(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChannelSellLimitsByDate(channelSellLimitsByDate).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `InventoryApi.ChangeChannelSellLimitsByDate``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ChangeChannelSellLimitsByDate`: Status
    fmt.Fprintf(os.Stdout, "Response from `InventoryApi.ChangeChannelSellLimitsByDate`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel where channel sell limits are updated by date. | 

### Other Parameters

Other parameters are passed through a pointer to a apiChangeChannelSellLimitsByDateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **channelSellLimitsByDate** | [**ChangeChannelSellLimitsByDateRequest**](ChangeChannelSellLimitsByDateRequest.md) | Request object to create or update sell limits for the channel or channel room type by day. Advanced logic is implemented to combine consecutive blocks of sell limits into a single schedule which have the same limits configured. Existing schedules can also be split as needed to account for overlapping schedules. | 
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


## ChangeChannelSellLimitsByDateRange

> Status ChangeChannelSellLimitsByDateRange(ctx, channelId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChannelSellLimitsByDateRange(channelSellLimitsByDateRange).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Updates channel sell limits by daterange



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/chl"
)

func main() {
    channelId := "channelId_example" // string | Unique ID of the channel for which sell limits are updated by date range.
    hotelId := "hotelId_example" // string | Unique ID of the hotel where channel sell limits are updated by date range.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    channelSellLimitsByDateRange := *openapiclient.NewChangeChannelSellLimitsByDateRangeRequest() // ChangeChannelSellLimitsByDateRangeRequest | Request object to create or update sell limit schedules for the channel or channel room type within a date range. Existing schedules can be split as needed to account for overlapping schedules.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.InventoryApi.ChangeChannelSellLimitsByDateRange(context.Background(), channelId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChannelSellLimitsByDateRange(channelSellLimitsByDateRange).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `InventoryApi.ChangeChannelSellLimitsByDateRange``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ChangeChannelSellLimitsByDateRange`: Status
    fmt.Fprintf(os.Stdout, "Response from `InventoryApi.ChangeChannelSellLimitsByDateRange`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**channelId** | **string** | Unique ID of the channel for which sell limits are updated by date range. | 
**hotelId** | **string** | Unique ID of the hotel where channel sell limits are updated by date range. | 

### Other Parameters

Other parameters are passed through a pointer to a apiChangeChannelSellLimitsByDateRangeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **channelSellLimitsByDateRange** | [**ChangeChannelSellLimitsByDateRangeRequest**](ChangeChannelSellLimitsByDateRangeRequest.md) | Request object to create or update sell limit schedules for the channel or channel room type within a date range. Existing schedules can be split as needed to account for overlapping schedules. | 
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


## DeleteChannelSellLimits

> Status DeleteChannelSellLimits(ctx, id, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Deletes channel sell limits



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/chl"
)

func main() {
    id := "id_example" // string | Unique ID of the channel sell limit to be deleted.
    hotelId := "hotelId_example" // string | Unique ID of the hotel where channel sell limits is deleted.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.InventoryApi.DeleteChannelSellLimits(context.Background(), id, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `InventoryApi.DeleteChannelSellLimits``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteChannelSellLimits`: Status
    fmt.Fprintf(os.Stdout, "Response from `InventoryApi.DeleteChannelSellLimits`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Unique ID of the channel sell limit to be deleted. | 
**hotelId** | **string** | Unique ID of the hotel where channel sell limits is deleted. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteChannelSellLimitsRequest struct via the builder pattern


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


## GetChannelSellLimits

> ChannelSellLimits GetChannelSellLimits(ctx, hotelId).FromDate(fromDate).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BookingChannelCode(bookingChannelCode).ChannelRoomType(channelRoomType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Gets sell limit detail for a given channel hotel combination



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/chl"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of the hotel where channel sell limits is searched.
    fromDate := time.Now() // string | Sell limits which exist at or beyond this date will be fetched.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    bookingChannelCode := "bookingChannelCode_example" // string | Channel for which the sell limits are to be fetched. (optional)
    channelRoomType := "channelRoomType_example" // string | Channel room type for which the sell limits are to be fetched. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.InventoryApi.GetChannelSellLimits(context.Background(), hotelId).FromDate(fromDate).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BookingChannelCode(bookingChannelCode).ChannelRoomType(channelRoomType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `InventoryApi.GetChannelSellLimits``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetChannelSellLimits`: ChannelSellLimits
    fmt.Fprintf(os.Stdout, "Response from `InventoryApi.GetChannelSellLimits`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel where channel sell limits is searched. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetChannelSellLimitsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **fromDate** | **string** | Sell limits which exist at or beyond this date will be fetched. | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **bookingChannelCode** | **string** | Channel for which the sell limits are to be fetched. | 
 **channelRoomType** | **string** | Channel room type for which the sell limits are to be fetched. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ChannelSellLimits**](ChannelSellLimits.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


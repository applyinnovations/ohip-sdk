# \ChannelApi

All URIs are relative to */chl/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetChannelRoomMapping**](ChannelApi.md#GetChannelRoomMapping) | **Get** /hotels/{hotelId}/rooms/mapping | Gets channel property room mapping



## GetChannelRoomMapping

> ChannelRoomMappingsSummary GetChannelRoomMapping(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).BookingChannelCodes(bookingChannelCodes).RoomTypes(roomTypes).ChannelRoomTypes(channelRoomTypes).IncludeInactiveMappings(includeInactiveMappings).IncludeUnmappedRoomTypes(includeUnmappedRoomTypes).OnlyUnmappedRoomTypes(onlyUnmappedRoomTypes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Gets channel property room mapping



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
    hotelId := "hotelId_example" // string | Unique ID that identifies a single hotel property.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    offset := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional) (default to 0)
    bookingChannelCodes := []string{"Inner_example"} // []string |  (optional)
    roomTypes := []string{"Inner_example"} // []string |  (optional)
    channelRoomTypes := []string{"Inner_example"} // []string |  (optional)
    includeInactiveMappings := true // bool | Flag whether to include inactive mappings or not. (optional)
    includeUnmappedRoomTypes := true // bool | Flag whether to include unmapped room types or not. (optional)
    onlyUnmappedRoomTypes := true // bool | Flag whether to include mapped room types only. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelApi.GetChannelRoomMapping(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).BookingChannelCodes(bookingChannelCodes).RoomTypes(roomTypes).ChannelRoomTypes(channelRoomTypes).IncludeInactiveMappings(includeInactiveMappings).IncludeUnmappedRoomTypes(includeUnmappedRoomTypes).OnlyUnmappedRoomTypes(onlyUnmappedRoomTypes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelApi.GetChannelRoomMapping``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetChannelRoomMapping`: ChannelRoomMappingsSummary
    fmt.Fprintf(os.Stdout, "Response from `ChannelApi.GetChannelRoomMapping`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetChannelRoomMappingRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **offset** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [default to 0]
 **bookingChannelCodes** | **[]string** |  | 
 **roomTypes** | **[]string** |  | 
 **channelRoomTypes** | **[]string** |  | 
 **includeInactiveMappings** | **bool** | Flag whether to include inactive mappings or not. | 
 **includeUnmappedRoomTypes** | **bool** | Flag whether to include unmapped room types or not. | 
 **onlyUnmappedRoomTypes** | **bool** | Flag whether to include mapped room types only. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ChannelRoomMappingsSummary**](ChannelRoomMappingsSummary.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


# \AvailabilityApi

All URIs are relative to */chl/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetChannelInventorySnapshot**](AvailabilityApi.md#GetChannelInventorySnapshot) | **Get** /hotels/{hotelId}/inventorySnapshot | Gets hotel&#39;s rooms and restrictions channel availability
[**GetChannelInventorySnapshotByRoomType**](AvailabilityApi.md#GetChannelInventorySnapshotByRoomType) | **Get** /hotels/{hotelId}/channels/{channelCode}/rooms/{roomTypeCode}/inventorySnapshot | Gets hotel room&#39;s restrictions and channel availability
[**GetGeneralAvailabilitySimulator**](AvailabilityApi.md#GetGeneralAvailabilitySimulator) | **Get** /hotels/{hotelId}/generalAvailabilitySimulator | Gets the General Availability
[**GetRateParity**](AvailabilityApi.md#GetRateParity) | **Get** /hotels/{hotelId}/rateParity | Gets channel&#39;s rate configuration
[**GetRegionalRateParity**](AvailabilityApi.md#GetRegionalRateParity) | **Get** /availability/summary | Gets the regional rate parity



## GetChannelInventorySnapshot

> ChannelInventorySnapshot GetChannelInventorySnapshot(ctx, hotelId).FromDate(fromDate).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Friday(friday).Monday(monday).Saturday(saturday).Sunday(sunday).Thursday(thursday).Tuesday(tuesday).Wednesday(wednesday).EndDate(endDate).Duration(duration).BookingChannelCodes(bookingChannelCodes).ChannelRoomTypes(channelRoomTypes).SnapshotLevel(snapshotLevel).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Gets hotel's rooms and restrictions channel availability



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
    hotelId := "hotelId_example" // string | Unique ID that identifies a single hotel property.
    fromDate := time.Now() // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    friday := true // bool |  (optional) (default to false)
    monday := true // bool |  (optional) (default to false)
    saturday := true // bool |  (optional) (default to false)
    sunday := true // bool |  (optional) (default to false)
    thursday := true // bool |  (optional) (default to false)
    tuesday := true // bool |  (optional) (default to false)
    wednesday := true // bool |  (optional) (default to false)
    endDate := time.Now() // string |  (optional)
    duration := "duration_example" // string |  (optional)
    bookingChannelCodes := []string{"Inner_example"} // []string |  (optional)
    channelRoomTypes := []string{"Inner_example"} // []string |  (optional)
    snapshotLevel := "snapshotLevel_example" // string | Indicates to evaluate statistics for house, channel, and room type level. Must include the specific booking channel in the search criteria. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.AvailabilityApi.GetChannelInventorySnapshot(context.Background(), hotelId).FromDate(fromDate).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Friday(friday).Monday(monday).Saturday(saturday).Sunday(sunday).Thursday(thursday).Tuesday(tuesday).Wednesday(wednesday).EndDate(endDate).Duration(duration).BookingChannelCodes(bookingChannelCodes).ChannelRoomTypes(channelRoomTypes).SnapshotLevel(snapshotLevel).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AvailabilityApi.GetChannelInventorySnapshot``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetChannelInventorySnapshot`: ChannelInventorySnapshot
    fmt.Fprintf(os.Stdout, "Response from `AvailabilityApi.GetChannelInventorySnapshot`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetChannelInventorySnapshotRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **fromDate** | **string** |  | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **friday** | **bool** |  | [default to false]
 **monday** | **bool** |  | [default to false]
 **saturday** | **bool** |  | [default to false]
 **sunday** | **bool** |  | [default to false]
 **thursday** | **bool** |  | [default to false]
 **tuesday** | **bool** |  | [default to false]
 **wednesday** | **bool** |  | [default to false]
 **endDate** | **string** |  | 
 **duration** | **string** |  | 
 **bookingChannelCodes** | **[]string** |  | 
 **channelRoomTypes** | **[]string** |  | 
 **snapshotLevel** | **string** | Indicates to evaluate statistics for house, channel, and room type level. Must include the specific booking channel in the search criteria. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ChannelInventorySnapshot**](ChannelInventorySnapshot.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetChannelInventorySnapshotByRoomType

> ChannelInventorySnapshot GetChannelInventorySnapshotByRoomType(ctx, roomTypeCode, channelCode, hotelId).FromDate(fromDate).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Friday(friday).Monday(monday).Saturday(saturday).Sunday(sunday).Thursday(thursday).Tuesday(tuesday).Wednesday(wednesday).EndDate(endDate).Duration(duration).SnapshotLevel(snapshotLevel).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Gets hotel room's restrictions and channel availability



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
    roomTypeCode := "roomTypeCode_example" // string | Room Type Code.
    channelCode := "channelCode_example" // string | Channel Code.
    hotelId := "hotelId_example" // string | Unique ID that identifies a single hotel property.
    fromDate := time.Now() // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    friday := true // bool |  (optional) (default to false)
    monday := true // bool |  (optional) (default to false)
    saturday := true // bool |  (optional) (default to false)
    sunday := true // bool |  (optional) (default to false)
    thursday := true // bool |  (optional) (default to false)
    tuesday := true // bool |  (optional) (default to false)
    wednesday := true // bool |  (optional) (default to false)
    endDate := time.Now() // string |  (optional)
    duration := "duration_example" // string |  (optional)
    snapshotLevel := "snapshotLevel_example" // string | Indicates to evaluate statistics for house, channel, and room type level. Must include the specific booking channel in the search criteria. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.AvailabilityApi.GetChannelInventorySnapshotByRoomType(context.Background(), roomTypeCode, channelCode, hotelId).FromDate(fromDate).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Friday(friday).Monday(monday).Saturday(saturday).Sunday(sunday).Thursday(thursday).Tuesday(tuesday).Wednesday(wednesday).EndDate(endDate).Duration(duration).SnapshotLevel(snapshotLevel).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AvailabilityApi.GetChannelInventorySnapshotByRoomType``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetChannelInventorySnapshotByRoomType`: ChannelInventorySnapshot
    fmt.Fprintf(os.Stdout, "Response from `AvailabilityApi.GetChannelInventorySnapshotByRoomType`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**roomTypeCode** | **string** | Room Type Code. | 
**channelCode** | **string** | Channel Code. | 
**hotelId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetChannelInventorySnapshotByRoomTypeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **fromDate** | **string** |  | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **friday** | **bool** |  | [default to false]
 **monday** | **bool** |  | [default to false]
 **saturday** | **bool** |  | [default to false]
 **sunday** | **bool** |  | [default to false]
 **thursday** | **bool** |  | [default to false]
 **tuesday** | **bool** |  | [default to false]
 **wednesday** | **bool** |  | [default to false]
 **endDate** | **string** |  | 
 **duration** | **string** |  | 
 **snapshotLevel** | **string** | Indicates to evaluate statistics for house, channel, and room type level. Must include the specific booking channel in the search criteria. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ChannelInventorySnapshot**](ChannelInventorySnapshot.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetGeneralAvailabilitySimulator

> GeneralAvailabilitySimulator GetGeneralAvailabilitySimulator(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).BookingChannelCode(bookingChannelCode).Arrival(arrival).Adults(adults).Nights(nights).Children(children).NoOfRooms(noOfRooms).ChannelRatePlanCode(channelRatePlanCode).RateAccessCode(rateAccessCode).CorpIdIATA(corpIdIATA).InventoryBlockCode(inventoryBlockCode).PromotionCode(promotionCode).CurrencyCode(currencyCode).Language(language).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Gets the General Availability



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
    hotelId := "hotelId_example" // string | Unique ID that identifies a single hotel property.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    bookingChannelCode := "bookingChannelCode_example" // string |  (optional)
    arrival := time.Now() // string |  (optional)
    adults := int32(56) // int32 |  (optional)
    nights := int32(56) // int32 |  (optional)
    children := int32(56) // int32 |  (optional)
    noOfRooms := int32(56) // int32 |  (optional)
    channelRatePlanCode := []string{"Inner_example"} // []string |  (optional)
    rateAccessCode := "rateAccessCode_example" // string |  (optional)
    corpIdIATA := "corpIdIATA_example" // string |  (optional)
    inventoryBlockCode := "inventoryBlockCode_example" // string |  (optional)
    promotionCode := "promotionCode_example" // string |  (optional)
    currencyCode := "currencyCode_example" // string |  (optional)
    language := "language_example" // string |  (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.AvailabilityApi.GetGeneralAvailabilitySimulator(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).BookingChannelCode(bookingChannelCode).Arrival(arrival).Adults(adults).Nights(nights).Children(children).NoOfRooms(noOfRooms).ChannelRatePlanCode(channelRatePlanCode).RateAccessCode(rateAccessCode).CorpIdIATA(corpIdIATA).InventoryBlockCode(inventoryBlockCode).PromotionCode(promotionCode).CurrencyCode(currencyCode).Language(language).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AvailabilityApi.GetGeneralAvailabilitySimulator``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetGeneralAvailabilitySimulator`: GeneralAvailabilitySimulator
    fmt.Fprintf(os.Stdout, "Response from `AvailabilityApi.GetGeneralAvailabilitySimulator`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetGeneralAvailabilitySimulatorRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **bookingChannelCode** | **string** |  | 
 **arrival** | **string** |  | 
 **adults** | **int32** |  | 
 **nights** | **int32** |  | 
 **children** | **int32** |  | 
 **noOfRooms** | **int32** |  | 
 **channelRatePlanCode** | **[]string** |  | 
 **rateAccessCode** | **string** |  | 
 **corpIdIATA** | **string** |  | 
 **inventoryBlockCode** | **string** |  | 
 **promotionCode** | **string** |  | 
 **currencyCode** | **string** |  | 
 **language** | **string** |  | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**GeneralAvailabilitySimulator**](GeneralAvailabilitySimulator.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetRateParity

> RateParity GetRateParity(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ComparisonType(comparisonType).Language(language).Limit(limit).NumberOfDays(numberOfDays).ChannelCode(channelCode).RoomType(roomType).RatePlanCode(ratePlanCode).ChannelRoomType(channelRoomType).ChannelRatePlanCode(channelRatePlanCode).ChainCode(chainCode).RateAccessCode(rateAccessCode).InventoryBlockCode(inventoryBlockCode).PromotionCode(promotionCode).QualifyingProfileCategory(qualifyingProfileCategory).QualifyingProfileId(qualifyingProfileId).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Gets channel's rate configuration



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
    comparisonType := "comparisonType_example" // string | An enumerated type defining the Parity Comparison type. Values: FIRST_RATES, CHANNEL_RATES. CHANNEL_RATES requires HotelCode and BookingChannelCode as part of request. (optional)
    language := "language_example" // string | Language identification. (optional)
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    numberOfDays := int32(56) // int32 |  (optional)
    channelCode := []string{"Inner_example"} // []string |  (optional)
    roomType := []string{"Inner_example"} // []string |  (optional)
    ratePlanCode := []string{"Inner_example"} // []string |  (optional)
    channelRoomType := []string{"Inner_example"} // []string |  (optional)
    channelRatePlanCode := []string{"Inner_example"} // []string |  (optional)
    chainCode := []string{"Inner_example"} // []string |  (optional)
    rateAccessCode := "rateAccessCode_example" // string |  (optional)
    inventoryBlockCode := "inventoryBlockCode_example" // string |  (optional)
    promotionCode := "promotionCode_example" // string |  (optional)
    qualifyingProfileCategory := "qualifyingProfileCategory_example" // string |  (optional)
    qualifyingProfileId := "qualifyingProfileId_example" // string |  (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.AvailabilityApi.GetRateParity(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ComparisonType(comparisonType).Language(language).Limit(limit).NumberOfDays(numberOfDays).ChannelCode(channelCode).RoomType(roomType).RatePlanCode(ratePlanCode).ChannelRoomType(channelRoomType).ChannelRatePlanCode(channelRatePlanCode).ChainCode(chainCode).RateAccessCode(rateAccessCode).InventoryBlockCode(inventoryBlockCode).PromotionCode(promotionCode).QualifyingProfileCategory(qualifyingProfileCategory).QualifyingProfileId(qualifyingProfileId).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AvailabilityApi.GetRateParity``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetRateParity`: RateParity
    fmt.Fprintf(os.Stdout, "Response from `AvailabilityApi.GetRateParity`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetRateParityRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **comparisonType** | **string** | An enumerated type defining the Parity Comparison type. Values: FIRST_RATES, CHANNEL_RATES. CHANNEL_RATES requires HotelCode and BookingChannelCode as part of request. | 
 **language** | **string** | Language identification. | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **numberOfDays** | **int32** |  | 
 **channelCode** | **[]string** |  | 
 **roomType** | **[]string** |  | 
 **ratePlanCode** | **[]string** |  | 
 **channelRoomType** | **[]string** |  | 
 **channelRatePlanCode** | **[]string** |  | 
 **chainCode** | **[]string** |  | 
 **rateAccessCode** | **string** |  | 
 **inventoryBlockCode** | **string** |  | 
 **promotionCode** | **string** |  | 
 **qualifyingProfileCategory** | **string** |  | 
 **qualifyingProfileId** | **string** |  | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**RateParity**](RateParity.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetRegionalRateParity

> RegionalRateParity GetRegionalRateParity(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Language(language).Limit(limit).NumberOfDays(numberOfDays).HotelIds(hotelIds).ChannelCode(channelCode).RatePlanCode(ratePlanCode).ChannelRatePlanCode(channelRatePlanCode).ChainCode(chainCode).RateAccessCode(rateAccessCode).QualifyingProfileCategory(qualifyingProfileCategory).QualifyingProfileId(qualifyingProfileId).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Gets the regional rate parity



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
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    language := "language_example" // string | Language identification. (optional)
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    numberOfDays := int32(56) // int32 |  (optional)
    hotelIds := []string{"Inner_example"} // []string |  (optional)
    channelCode := []string{"Inner_example"} // []string |  (optional)
    ratePlanCode := []string{"Inner_example"} // []string |  (optional)
    channelRatePlanCode := []string{"Inner_example"} // []string |  (optional)
    chainCode := "chainCode_example" // string |  (optional)
    rateAccessCode := "rateAccessCode_example" // string |  (optional)
    qualifyingProfileCategory := "qualifyingProfileCategory_example" // string |  (optional)
    qualifyingProfileId := "qualifyingProfileId_example" // string |  (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.AvailabilityApi.GetRegionalRateParity(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Language(language).Limit(limit).NumberOfDays(numberOfDays).HotelIds(hotelIds).ChannelCode(channelCode).RatePlanCode(ratePlanCode).ChannelRatePlanCode(channelRatePlanCode).ChainCode(chainCode).RateAccessCode(rateAccessCode).QualifyingProfileCategory(qualifyingProfileCategory).QualifyingProfileId(qualifyingProfileId).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AvailabilityApi.GetRegionalRateParity``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetRegionalRateParity`: RegionalRateParity
    fmt.Fprintf(os.Stdout, "Response from `AvailabilityApi.GetRegionalRateParity`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetRegionalRateParityRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **language** | **string** | Language identification. | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **numberOfDays** | **int32** |  | 
 **hotelIds** | **[]string** |  | 
 **channelCode** | **[]string** |  | 
 **ratePlanCode** | **[]string** |  | 
 **channelRatePlanCode** | **[]string** |  | 
 **chainCode** | **string** |  | 
 **rateAccessCode** | **string** |  | 
 **qualifyingProfileCategory** | **string** |  | 
 **qualifyingProfileId** | **string** |  | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**RegionalRateParity**](RegionalRateParity.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


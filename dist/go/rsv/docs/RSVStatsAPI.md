# \RSVStatsAPI

All URIs are relative to */rsv/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetBlockReservationStatisticsByDateAndRoomPool**](RSVStatsAPI.md#GetBlockReservationStatisticsByDateAndRoomPool) | **Get** /blockReservationStatisticsByDateAndRoomPool | Get block Reservation Statistics
[**GetReservationPace**](RSVStatsAPI.md#GetReservationPace) | **Get** /reservations/pace | Get Reservation pace
[**GetReservationStatistics**](RSVStatsAPI.md#GetReservationStatistics) | **Get** /reservations/statistics | Get reservation statistics



## GetBlockReservationStatisticsByDateAndRoomPool

> BlockReservationStatistics GetBlockReservationStatisticsByDateAndRoomPool(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ExcludeBlocksWithoutQuoteID(excludeBlocksWithoutQuoteID).StartDate(startDate).EndDate(endDate).Duration(duration).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get block Reservation Statistics



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    excludeBlocksWithoutQuoteID := true // bool | Whether to exclude blocks without quote IDs from the statistics gathering. (optional)
    startDate := time.Now() // string |  (optional)
    endDate := time.Now() // string |  (optional)
    duration := "duration_example" // string |  (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RSVStatsAPI.GetBlockReservationStatisticsByDateAndRoomPool(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ExcludeBlocksWithoutQuoteID(excludeBlocksWithoutQuoteID).StartDate(startDate).EndDate(endDate).Duration(duration).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RSVStatsAPI.GetBlockReservationStatisticsByDateAndRoomPool``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetBlockReservationStatisticsByDateAndRoomPool`: BlockReservationStatistics
    fmt.Fprintf(os.Stdout, "Response from `RSVStatsAPI.GetBlockReservationStatisticsByDateAndRoomPool`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetBlockReservationStatisticsByDateAndRoomPoolRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **excludeBlocksWithoutQuoteID** | **bool** | Whether to exclude blocks without quote IDs from the statistics gathering. | 
 **startDate** | **string** |  | 
 **endDate** | **string** |  | 
 **duration** | **string** |  | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**BlockReservationStatistics**](BlockReservationStatistics.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetReservationPace

> ReservationPace GetReservationPace(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).StayDate(stayDate).LeadDays(leadDays).Channels(channels).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Reservation pace



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    hotelId := "hotelId_example" // string | Hotel code from which the reservations will be fetched. (optional)
    stayDate := time.Now() // string | Target stay date for report (optional)
    leadDays := int32(56) // int32 | Number of lead days from stay date (optional)
    channels := "channels_example" // string | List of Channels for which pace to be computed (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RSVStatsAPI.GetReservationPace(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).StayDate(stayDate).LeadDays(leadDays).Channels(channels).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RSVStatsAPI.GetReservationPace``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetReservationPace`: ReservationPace
    fmt.Fprintf(os.Stdout, "Response from `RSVStatsAPI.GetReservationPace`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetReservationPaceRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **hotelId** | **string** | Hotel code from which the reservations will be fetched. | 
 **stayDate** | **string** | Target stay date for report | 
 **leadDays** | **int32** | Number of lead days from stay date | 
 **channels** | **string** | List of Channels for which pace to be computed | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ReservationPace**](ReservationPace.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetReservationStatistics

> ReservationStatistics GetReservationStatistics(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChainName(chainName).HotelCityCode(hotelCityCode).HotelId(hotelId).HotelCodeContext(hotelCodeContext).HotelName(hotelName).RequestedReportsTypeEndDate(requestedReportsTypeEndDate).FiscalDate(fiscalDate).ReportCode(reportCode).RequestedReportsTypeStartDate(requestedReportsTypeStartDate).RequestedReportsTypeParameterName(requestedReportsTypeParameterName).RequestedReportsTypeParameterValue(requestedReportsTypeParameterValue).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get reservation statistics



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    chainName := []string{"Inner_example"} // []string | The name of the hotel chain (e.g., Hilton, Marriott, Hyatt). (optional)
    hotelCityCode := []string{"Inner_example"} // []string | The IATA city code; for example DCA, ORD. (optional)
    hotelId := []string{"Inner_example"} // []string | The code that uniquely identifies a single hotel property. The hotel code is decided between vendors. (optional)
    hotelCodeContext := []string{"Inner_example"} // []string | A text field used to communicate the context (or source of - ex Sabre, Galileo, Worldspan, Amadeus) the HotelReferenceGroup codes. (optional)
    hotelName := []string{"Inner_example"} // []string | A text field used to communicate the proper name of the hotel. (optional)
    requestedReportsTypeEndDate := []string{time.Now()} // []string | The ending value of the date range. (optional)
    fiscalDate := []string{time.Now()} // []string | Hotel fiscal date for statistics. (optional)
    reportCode := []string{"ReportCode_example"} // []string | Identifies the type of statistics collected. Each ReportCode corresponds to a set of category summaries based upon a predetermined agreement. (optional)
    requestedReportsTypeStartDate := []string{time.Now()} // []string | The starting value of the date range. (optional)
    requestedReportsTypeParameterName := []string{"Inner_example"} // []string | Name of the parameter. (optional)
    requestedReportsTypeParameterValue := []string{"Inner_example"} // []string | Value of the parameter. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RSVStatsAPI.GetReservationStatistics(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChainName(chainName).HotelCityCode(hotelCityCode).HotelId(hotelId).HotelCodeContext(hotelCodeContext).HotelName(hotelName).RequestedReportsTypeEndDate(requestedReportsTypeEndDate).FiscalDate(fiscalDate).ReportCode(reportCode).RequestedReportsTypeStartDate(requestedReportsTypeStartDate).RequestedReportsTypeParameterName(requestedReportsTypeParameterName).RequestedReportsTypeParameterValue(requestedReportsTypeParameterValue).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RSVStatsAPI.GetReservationStatistics``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetReservationStatistics`: ReservationStatistics
    fmt.Fprintf(os.Stdout, "Response from `RSVStatsAPI.GetReservationStatistics`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetReservationStatisticsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **chainName** | **[]string** | The name of the hotel chain (e.g., Hilton, Marriott, Hyatt). | 
 **hotelCityCode** | **[]string** | The IATA city code; for example DCA, ORD. | 
 **hotelId** | **[]string** | The code that uniquely identifies a single hotel property. The hotel code is decided between vendors. | 
 **hotelCodeContext** | **[]string** | A text field used to communicate the context (or source of - ex Sabre, Galileo, Worldspan, Amadeus) the HotelReferenceGroup codes. | 
 **hotelName** | **[]string** | A text field used to communicate the proper name of the hotel. | 
 **requestedReportsTypeEndDate** | **[]string** | The ending value of the date range. | 
 **fiscalDate** | **[]string** | Hotel fiscal date for statistics. | 
 **reportCode** | **[]string** | Identifies the type of statistics collected. Each ReportCode corresponds to a set of category summaries based upon a predetermined agreement. | 
 **requestedReportsTypeStartDate** | **[]string** | The starting value of the date range. | 
 **requestedReportsTypeParameterName** | **[]string** | Name of the parameter. | 
 **requestedReportsTypeParameterValue** | **[]string** | Value of the parameter. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ReservationStatistics**](ReservationStatistics.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


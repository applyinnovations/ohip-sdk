# \RoomRotationApi

All URIs are relative to */rmr/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetReservationRotationPoints**](RoomRotationApi.md#GetReservationRotationPoints) | **Get** /hotels/{hotelId}/departureStartDate/{departureStartDate}/departureEndDate/{departureEndDate}/reservationRotationPoints | Get list of reservations and the associated rotations points
[**GetReservationRotationPointsDetails**](RoomRotationApi.md#GetReservationRotationPointsDetails) | **Get** /hotels/{hotelId}/reservations/{reservationId}/rooms/{roomId}/reservationRotationPointsDetails | Get list of rotation points details associated with a reservation with adjustment log.
[**GetRoomOwners**](RoomRotationApi.md#GetRoomOwners) | **Get** /roomOwners | Get Room Owners Details
[**GetRoomOwnerships**](RoomRotationApi.md#GetRoomOwnerships) | **Get** /profiles/{profileId}/roomOwnerships | Get Profile Room Owners Details
[**GetRoomRotationPoints**](RoomRotationApi.md#GetRoomRotationPoints) | **Get** /hotels/{hotelId}/roomRotationPoints | Get Room Rotation Points
[**PutReservationRotationPointsDetails**](RoomRotationApi.md#PutReservationRotationPointsDetails) | **Put** /hotels/{hotelId}/reservations/{reservationId}/rooms/{roomId}/reservationRotationPointsDetails | Update Rotation Points Details associated with a reservation.
[**PutRoomRotationPoints**](RoomRotationApi.md#PutRoomRotationPoints) | **Put** /hotels/{hotelId}/roomRotationPoints | Update Rotation Points by Room Numbers



## GetReservationRotationPoints

> GetReservationRotationPoints GetReservationRotationPoints(ctx, hotelId, departureStartDate, departureEndDate).RoomIds(roomIds).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ConfirmationNumber(confirmationNumber).Surname(surname).GivenName(givenName).Limit(limit).Offset(offset).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get list of reservations and the associated rotations points



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/rmr"
)

func main() {
    hotelId := "hotelId_example" // string | Unique Id for the Hotel
    departureStartDate := time.Now() // string | Departure Start Date of the reservation to be searched.
    departureEndDate := time.Now() // string | Departure End Date of the reservation to be searched.
    roomIds := []string{"Inner_example"} // []string | List of Room Ids for which to return Reservation Rotation Points.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    confirmationNumber := "confirmationNumber_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    surname := "surname_example" // string | Family name, last name. (optional)
    givenName := "givenName_example" // string | Given name, first name or names (optional)
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional) (default to 25)
    offset := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional) (default to 0)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RoomRotationApi.GetReservationRotationPoints(context.Background(), hotelId, departureStartDate, departureEndDate).RoomIds(roomIds).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ConfirmationNumber(confirmationNumber).Surname(surname).GivenName(givenName).Limit(limit).Offset(offset).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RoomRotationApi.GetReservationRotationPoints``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetReservationRotationPoints`: GetReservationRotationPoints
    fmt.Fprintf(os.Stdout, "Response from `RoomRotationApi.GetReservationRotationPoints`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique Id for the Hotel | 
**departureStartDate** | **string** | Departure Start Date of the reservation to be searched. | 
**departureEndDate** | **string** | Departure End Date of the reservation to be searched. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetReservationRotationPointsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **roomIds** | **[]string** | List of Room Ids for which to return Reservation Rotation Points. | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **confirmationNumber** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **surname** | **string** | Family name, last name. | 
 **givenName** | **string** | Given name, first name or names | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | [default to 25]
 **offset** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [default to 0]
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**GetReservationRotationPoints**](GetReservationRotationPoints.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetReservationRotationPointsDetails

> GetReservationRotationPointsDetails GetReservationRotationPointsDetails(ctx, hotelId, reservationId, roomId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).IncludeAdjustmentLog(includeAdjustmentLog).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get list of rotation points details associated with a reservation with adjustment log.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rmr"
)

func main() {
    hotelId := "hotelId_example" // string | Unique Id of the Hotel for the reservation.
    reservationId := "reservationId_example" // string | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA.
    roomId := "roomId_example" // string | Room number of the reservation.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    includeAdjustmentLog := true // bool | Include adjustment log details in the response. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RoomRotationApi.GetReservationRotationPointsDetails(context.Background(), hotelId, reservationId, roomId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).IncludeAdjustmentLog(includeAdjustmentLog).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RoomRotationApi.GetReservationRotationPointsDetails``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetReservationRotationPointsDetails`: GetReservationRotationPointsDetails
    fmt.Fprintf(os.Stdout, "Response from `RoomRotationApi.GetReservationRotationPointsDetails`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique Id of the Hotel for the reservation. | 
**reservationId** | **string** | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA. | 
**roomId** | **string** | Room number of the reservation. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetReservationRotationPointsDetailsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **includeAdjustmentLog** | **bool** | Include adjustment log details in the response. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**GetReservationRotationPointsDetails**](GetReservationRotationPointsDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetRoomOwners

> RoomOwnersListDetails GetRoomOwners(ctx).HotelIds(hotelIds).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Surname(surname).GivenName(givenName).StartDateFrom(startDateFrom).StartDateTo(startDateTo).EndDateFrom(endDateFrom).EndDateTo(endDateTo).RoomClasses(roomClasses).RoomTypes(roomTypes).RoomIds(roomIds).ContractNumber(contractNumber).IncludeInactive(includeInactive).Limit(limit).Offset(offset).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Room Owners Details



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/rmr"
)

func main() {
    hotelIds := []string{"Inner_example"} // []string | Unique Id(s) for the Hotel(s) queried.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    surname := "surname_example" // string | Family name, last name. (optional)
    givenName := "givenName_example" // string | Given name, first name or names (optional)
    startDateFrom := time.Now() // string | The starting value of the start date range. (optional)
    startDateTo := time.Now() // string | The ending value of the start date range. (optional)
    endDateFrom := time.Now() // string | The starting value of the end date range. (optional)
    endDateTo := time.Now() // string | The ending value of the end date range. (optional)
    roomClasses := []string{"Inner_example"} // []string | List of Room Classes for which to return Room Owners. Multiple values can be entered by adding multiple query parameters. (optional)
    roomTypes := []string{"Inner_example"} // []string | List of Room Types for which to return Room Owners. Multiple values can be entered by adding multiple query parameters. (optional)
    roomIds := []string{"Inner_example"} // []string | List of Room Ids for which to return Room Owners. Multiple values can be entered by adding multiple query parameters. (optional)
    contractNumber := "contractNumber_example" // string | Contract Number of the Ownership Record. (optional)
    includeInactive := true // bool | Indicates whether to return inactive records. Records are considered inactive when the end date of the ownership record is prior to the currrent property business date. (optional)
    limit := int32(56) // int32 | Indicates maximum number of records the API should return. (optional) (default to 25)
    offset := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional) (default to 0)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RoomRotationApi.GetRoomOwners(context.Background()).HotelIds(hotelIds).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Surname(surname).GivenName(givenName).StartDateFrom(startDateFrom).StartDateTo(startDateTo).EndDateFrom(endDateFrom).EndDateTo(endDateTo).RoomClasses(roomClasses).RoomTypes(roomTypes).RoomIds(roomIds).ContractNumber(contractNumber).IncludeInactive(includeInactive).Limit(limit).Offset(offset).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RoomRotationApi.GetRoomOwners``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetRoomOwners`: RoomOwnersListDetails
    fmt.Fprintf(os.Stdout, "Response from `RoomRotationApi.GetRoomOwners`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetRoomOwnersRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hotelIds** | **[]string** | Unique Id(s) for the Hotel(s) queried. | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **surname** | **string** | Family name, last name. | 
 **givenName** | **string** | Given name, first name or names | 
 **startDateFrom** | **string** | The starting value of the start date range. | 
 **startDateTo** | **string** | The ending value of the start date range. | 
 **endDateFrom** | **string** | The starting value of the end date range. | 
 **endDateTo** | **string** | The ending value of the end date range. | 
 **roomClasses** | **[]string** | List of Room Classes for which to return Room Owners. Multiple values can be entered by adding multiple query parameters. | 
 **roomTypes** | **[]string** | List of Room Types for which to return Room Owners. Multiple values can be entered by adding multiple query parameters. | 
 **roomIds** | **[]string** | List of Room Ids for which to return Room Owners. Multiple values can be entered by adding multiple query parameters. | 
 **contractNumber** | **string** | Contract Number of the Ownership Record. | 
 **includeInactive** | **bool** | Indicates whether to return inactive records. Records are considered inactive when the end date of the ownership record is prior to the currrent property business date. | 
 **limit** | **int32** | Indicates maximum number of records the API should return. | [default to 25]
 **offset** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [default to 0]
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**RoomOwnersListDetails**](RoomOwnersListDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetRoomOwnerships

> AssociatedRoomOwnershipListDetails GetRoomOwnerships(ctx, profileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelIds(hotelIds).StartDate(startDate).EndDate(endDate).IncludeReferral(includeReferral).IncludeAvailableRoomsOnly(includeAvailableRoomsOnly).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Profile Room Owners Details



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/rmr"
)

func main() {
    profileId := "profileId_example" // string | Unique ID of profile.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    hotelIds := []string{"Inner_example"} // []string | Unique Id(s) for the Hotel(s). Multiple Hotels can be entered by adding multiple query parameters. (optional)
    startDate := time.Now() // string | The starting value of the date range. (optional)
    endDate := time.Now() // string | The ending value of the date range. (optional)
    includeReferral := true // bool | Include Owner Referral in response flag. (optional) (default to true)
    includeAvailableRoomsOnly := true // bool | Flag indicating if only rooms available for booking during the date range specified should be included in response. (optional) (default to false)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RoomRotationApi.GetRoomOwnerships(context.Background(), profileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelIds(hotelIds).StartDate(startDate).EndDate(endDate).IncludeReferral(includeReferral).IncludeAvailableRoomsOnly(includeAvailableRoomsOnly).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RoomRotationApi.GetRoomOwnerships``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetRoomOwnerships`: AssociatedRoomOwnershipListDetails
    fmt.Fprintf(os.Stdout, "Response from `RoomRotationApi.GetRoomOwnerships`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**profileId** | **string** | Unique ID of profile. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetRoomOwnershipsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **hotelIds** | **[]string** | Unique Id(s) for the Hotel(s). Multiple Hotels can be entered by adding multiple query parameters. | 
 **startDate** | **string** | The starting value of the date range. | 
 **endDate** | **string** | The ending value of the date range. | 
 **includeReferral** | **bool** | Include Owner Referral in response flag. | [default to true]
 **includeAvailableRoomsOnly** | **bool** | Flag indicating if only rooms available for booking during the date range specified should be included in response. | [default to false]
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**AssociatedRoomOwnershipListDetails**](AssociatedRoomOwnershipListDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetRoomRotationPoints

> GetRoomRotationPoints GetRoomRotationPoints(ctx, hotelId).RoomRotationPointsDate(roomRotationPointsDate).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).RoomClasses(roomClasses).RoomTypes(roomTypes).RoomIds(roomIds).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Room Rotation Points



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/rmr"
)

func main() {
    hotelId := "hotelId_example" // string | Unique Id for the Hotel
    roomRotationPointsDate := time.Now() // string | The date for which the Room Rotation Points are being requested
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    limit := int32(56) // int32 | Indicates maximum number of records the API should return. (optional) (default to 25)
    offset := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional) (default to 0)
    roomClasses := []string{"Inner_example"} // []string | List of Room Classes for which to return Room Rotation Points. Multiple values can be entered by adding multiple query parameters. (optional)
    roomTypes := []string{"Inner_example"} // []string | List of Room Types for which to return Room Rotation Points. Multiple values can be entered by adding multiple query parameters. (optional)
    roomIds := []string{"Inner_example"} // []string | List of Room Ids for which to return Room Rotation Points. Multiple values can be entered by adding multiple query parameters. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RoomRotationApi.GetRoomRotationPoints(context.Background(), hotelId).RoomRotationPointsDate(roomRotationPointsDate).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).RoomClasses(roomClasses).RoomTypes(roomTypes).RoomIds(roomIds).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RoomRotationApi.GetRoomRotationPoints``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetRoomRotationPoints`: GetRoomRotationPoints
    fmt.Fprintf(os.Stdout, "Response from `RoomRotationApi.GetRoomRotationPoints`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique Id for the Hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetRoomRotationPointsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **roomRotationPointsDate** | **string** | The date for which the Room Rotation Points are being requested | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **limit** | **int32** | Indicates maximum number of records the API should return. | [default to 25]
 **offset** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [default to 0]
 **roomClasses** | **[]string** | List of Room Classes for which to return Room Rotation Points. Multiple values can be entered by adding multiple query parameters. | 
 **roomTypes** | **[]string** | List of Room Types for which to return Room Rotation Points. Multiple values can be entered by adding multiple query parameters. | 
 **roomIds** | **[]string** | List of Room Ids for which to return Room Rotation Points. Multiple values can be entered by adding multiple query parameters. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**GetRoomRotationPoints**](GetRoomRotationPoints.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutReservationRotationPointsDetails

> Status PutReservationRotationPointsDetails(ctx, hotelId, reservationId, roomId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ReservationRotationPoints(reservationRotationPoints).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Update Rotation Points Details associated with a reservation.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rmr"
)

func main() {
    hotelId := "hotelId_example" // string | Unique Id of the Hotel for the reservation.
    reservationId := "reservationId_example" // string | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA.
    roomId := "roomId_example" // string | Room number of the reservation.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    reservationRotationPoints := *openapiclient.NewPutReservationRotationPointsDetails() // PutReservationRotationPointsDetails | Collection of Reservation Rotation Points Details
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RoomRotationApi.PutReservationRotationPointsDetails(context.Background(), hotelId, reservationId, roomId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ReservationRotationPoints(reservationRotationPoints).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RoomRotationApi.PutReservationRotationPointsDetails``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutReservationRotationPointsDetails`: Status
    fmt.Fprintf(os.Stdout, "Response from `RoomRotationApi.PutReservationRotationPointsDetails`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique Id of the Hotel for the reservation. | 
**reservationId** | **string** | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA. | 
**roomId** | **string** | Room number of the reservation. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutReservationRotationPointsDetailsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **reservationRotationPoints** | [**PutReservationRotationPointsDetails**](PutReservationRotationPointsDetails.md) | Collection of Reservation Rotation Points Details | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutRoomRotationPoints

> Status PutRoomRotationPoints(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoomRotationPointsAdjustment(roomRotationPointsAdjustment).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Update Rotation Points by Room Numbers



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rmr"
)

func main() {
    hotelId := "hotelId_example" // string | Unique Id for the Hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    roomRotationPointsAdjustment := *openapiclient.NewRoomRotationPointsAdjustment() // RoomRotationPointsAdjustment | Request details containing room, balance forward and adjusted points to update.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RoomRotationApi.PutRoomRotationPoints(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoomRotationPointsAdjustment(roomRotationPointsAdjustment).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RoomRotationApi.PutRoomRotationPoints``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutRoomRotationPoints`: Status
    fmt.Fprintf(os.Stdout, "Response from `RoomRotationApi.PutRoomRotationPoints`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique Id for the Hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutRoomRotationPointsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **roomRotationPointsAdjustment** | [**RoomRotationPointsAdjustment**](RoomRotationPointsAdjustment.md) | Request details containing room, balance forward and adjusted points to update. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


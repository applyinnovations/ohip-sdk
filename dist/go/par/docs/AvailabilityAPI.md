# \AvailabilityAPI

All URIs are relative to */par/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**AnalyzeRateAvailability**](AvailabilityAPI.md#AnalyzeRateAvailability) | **Get** /hotels/{hotelId}/analyzeRateAvailability | Analyze Rate Availability 
[**ClearAllRestrictions**](AvailabilityAPI.md#ClearAllRestrictions) | **Put** /hotels/{hotelId}/restrictions | Clear all restrictions
[**DeleteHurdleRates**](AvailabilityAPI.md#DeleteHurdleRates) | **Delete** /hotels/{hotelId}/hurdles | Delete Hurdle Rates
[**DeleteRestriction**](AvailabilityAPI.md#DeleteRestriction) | **Delete** /hotels/{hotelId}/restrictions/{restrictionId} | Delete a Restriction 
[**GetAlternateAvailability**](AvailabilityAPI.md#GetAlternateAvailability) | **Get** /hotels/{hotelId}/availability/alternate | Get alternate availability
[**GetAvailabilityRatePlanInfo**](AvailabilityAPI.md#GetAvailabilityRatePlanInfo) | **Get** /hotels/{hotelId}/rates/{ratePlanCode} | Get Rate Plan Information 
[**GetAvailabilityRatePlanInfoByMultipleRatePlans**](AvailabilityAPI.md#GetAvailabilityRatePlanInfoByMultipleRatePlans) | **Get** /hotels/{hotelId}/rates | Use this API to get Rate Plan information such as commission codes, market codes, and rate category. 
[**GetAvailableUpsells**](AvailabilityAPI.md#GetAvailableUpsells) | **Get** /hotels/{hotelId}/availableUpsells | Get for Available Up-sells
[**GetGuaranteeablePreferences**](AvailabilityAPI.md#GetGuaranteeablePreferences) | **Get** /hotels/{hotelId}/guaranteeablePreferences | Get Guarantee-able Preference Codes
[**GetHotelAvailability**](AvailabilityAPI.md#GetHotelAvailability) | **Get** /hotels/{hotelId}/availability | Get hotel availability
[**GetHotelAvailabilityCRO**](AvailabilityAPI.md#GetHotelAvailabilityCRO) | **Get** /availability | Get Hotel Availability
[**GetHotels**](AvailabilityAPI.md#GetHotels) | **Get** /hotels | Search hotels for the sales process
[**GetHurdleRates**](AvailabilityAPI.md#GetHurdleRates) | **Get** /hotels/{hotelId}/hurdles | Get Hurdle Rates
[**GetReservationGuarantees**](AvailabilityAPI.md#GetReservationGuarantees) | **Get** /hotels/{hotelId}/guarantees | Get reservation guarantees
[**GetRestrictionsByDateRange**](AvailabilityAPI.md#GetRestrictionsByDateRange) | **Get** /hotels/{hotelId}/restrictions | Get hotel restrictions
[**GetRestrictionsHistory**](AvailabilityAPI.md#GetRestrictionsHistory) | **Get** /hotels/{hotelId}/restrictionsHistory | Get the Restriction history 
[**PostHurdleRates**](AvailabilityAPI.md#PostHurdleRates) | **Post** /hotels/{hotelId}/hurdles | Create Hurdle Rates
[**PostRestriction**](AvailabilityAPI.md#PostRestriction) | **Post** /hotels/{hotelId}/restrictions | Create a restriction
[**PutHurdleRates**](AvailabilityAPI.md#PutHurdleRates) | **Put** /hotels/{hotelId}/hurdles | Change Hurdle Rates
[**ValidateReservationGuarantees**](AvailabilityAPI.md#ValidateReservationGuarantees) | **Put** /hotels/{hotelId}/validateGuarantees | Get Reservation Guarantee 



## AnalyzeRateAvailability

> RateAnalysisDetails AnalyzeRateAvailability(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RatePlanCode(ratePlanCode).RoomType(roomType).StartDate(startDate).EndDate(endDate).Duration(duration).NumberOfRooms(numberOfRooms).Adults(adults).Children(children).ChildAge(childAge).Bucket1Count(bucket1Count).Bucket2Count(bucket2Count).Bucket3Count(bucket3Count).Bucket4Count(bucket4Count).Bucket5Count(bucket5Count).BlockId(blockId).BlockIdType(blockIdType).ReservationId(reservationId).ReservationIdType(reservationIdType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Analyze Rate Availability 



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/par"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID that identifies a single hotel property.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    ratePlanCode := "ratePlanCode_example" // string | The Rate Code for which the Analysis is requested. (optional)
    roomType := "roomType_example" // string | The Room Type for which the Analysis is requested. Analysis is done to determine whether the Rate Code is available for this Room Type. (optional)
    startDate := time.Now() // string |  (optional)
    endDate := time.Now() // string |  (optional)
    duration := "duration_example" // string |  (optional)
    numberOfRooms := int32(56) // int32 | The number of rooms requested. The Analysis to check if this Rate Code is available for this number of rooms. (optional)
    adults := int32(56) // int32 | Defines the number of Adults. (optional)
    children := int32(56) // int32 | Defines the number of Children. (optional)
    childAge := []int32{int32(123)} // []int32 | Age of a child in years. (optional)
    bucket1Count := int32(56) // int32 | Number of children classified under the first Age Qualifying Group(Child Bucket#1). (optional)
    bucket2Count := int32(56) // int32 | Number of children classified under the second Age Qualifying Group(Child Bucket#2). (optional)
    bucket3Count := int32(56) // int32 | Number of children classified under the third Age Qualifying Group(Child Bucket#3). (optional)
    bucket4Count := int32(56) // int32 | Number of children classified under the fourth Age Qualifying Group(Child Bucket#4). (optional)
    bucket5Count := int32(56) // int32 | Number of children classified under the fifth Age Qualifying Group(Child Bucket#5). (optional)
    blockId := "blockId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    blockIdType := "blockIdType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    reservationId := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    reservationIdType := []string{"Inner_example"} // []string | A reference to the type of object defined by the UniqueID element. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.AvailabilityAPI.AnalyzeRateAvailability(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RatePlanCode(ratePlanCode).RoomType(roomType).StartDate(startDate).EndDate(endDate).Duration(duration).NumberOfRooms(numberOfRooms).Adults(adults).Children(children).ChildAge(childAge).Bucket1Count(bucket1Count).Bucket2Count(bucket2Count).Bucket3Count(bucket3Count).Bucket4Count(bucket4Count).Bucket5Count(bucket5Count).BlockId(blockId).BlockIdType(blockIdType).ReservationId(reservationId).ReservationIdType(reservationIdType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AvailabilityAPI.AnalyzeRateAvailability``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `AnalyzeRateAvailability`: RateAnalysisDetails
    fmt.Fprintf(os.Stdout, "Response from `AvailabilityAPI.AnalyzeRateAvailability`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiAnalyzeRateAvailabilityRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **ratePlanCode** | **string** | The Rate Code for which the Analysis is requested. | 
 **roomType** | **string** | The Room Type for which the Analysis is requested. Analysis is done to determine whether the Rate Code is available for this Room Type. | 
 **startDate** | **string** |  | 
 **endDate** | **string** |  | 
 **duration** | **string** |  | 
 **numberOfRooms** | **int32** | The number of rooms requested. The Analysis to check if this Rate Code is available for this number of rooms. | 
 **adults** | **int32** | Defines the number of Adults. | 
 **children** | **int32** | Defines the number of Children. | 
 **childAge** | **[]int32** | Age of a child in years. | 
 **bucket1Count** | **int32** | Number of children classified under the first Age Qualifying Group(Child Bucket#1). | 
 **bucket2Count** | **int32** | Number of children classified under the second Age Qualifying Group(Child Bucket#2). | 
 **bucket3Count** | **int32** | Number of children classified under the third Age Qualifying Group(Child Bucket#3). | 
 **bucket4Count** | **int32** | Number of children classified under the fourth Age Qualifying Group(Child Bucket#4). | 
 **bucket5Count** | **int32** | Number of children classified under the fifth Age Qualifying Group(Child Bucket#5). | 
 **blockId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **blockIdType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **reservationId** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **reservationIdType** | **[]string** | A reference to the type of object defined by the UniqueID element. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**RateAnalysisDetails**](RateAnalysisDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ClearAllRestrictions

> ClearAllRestrictions ClearAllRestrictions(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ClearAllRestrictions(clearAllRestrictions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Clear all restrictions



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/par"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID that identifies a single hotel property.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    clearAllRestrictions := *openapiclient.NewClearAllRestrictions() // ClearAllRestrictions | Request object for clearing all restrictions based on date.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.AvailabilityAPI.ClearAllRestrictions(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ClearAllRestrictions(clearAllRestrictions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AvailabilityAPI.ClearAllRestrictions``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ClearAllRestrictions`: ClearAllRestrictions
    fmt.Fprintf(os.Stdout, "Response from `AvailabilityAPI.ClearAllRestrictions`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiClearAllRestrictionsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **clearAllRestrictions** | [**ClearAllRestrictions**](ClearAllRestrictions.md) | Request object for clearing all restrictions based on date. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ClearAllRestrictions**](ClearAllRestrictions.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteHurdleRates

> Status DeleteHurdleRates(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HurdleDate(hurdleDate).RoomType(roomType).RoomCategory(roomCategory).YieldCategory(yieldCategory).LengthOfStay(lengthOfStay).YieldMarketCode(yieldMarketCode).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete Hurdle Rates



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/par"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID that identifies a single hotel property.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    hurdleDate := []string{time.Now()} // []string | Hurdle date for which the hurdle rate is scheduled. (optional)
    roomType := []string{"Inner_example"} // []string | Room type for which the hurdle rate applies to. (optional)
    roomCategory := []string{"Inner_example"} // []string | Internal room category of the room type for which the hurdle rate applies to. (optional)
    yieldCategory := []string{"Inner_example"} // []string | Yield category for which the hurdle rate applies to. (optional)
    lengthOfStay := []float32{float32(123)} // []float32 | Length of stay for which the hurdle rate applies to. (optional)
    yieldMarketCode := []string{"Inner_example"} // []string | Yield market code for which the hurdle rate applies to. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.AvailabilityAPI.DeleteHurdleRates(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HurdleDate(hurdleDate).RoomType(roomType).RoomCategory(roomCategory).YieldCategory(yieldCategory).LengthOfStay(lengthOfStay).YieldMarketCode(yieldMarketCode).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AvailabilityAPI.DeleteHurdleRates``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteHurdleRates`: Status
    fmt.Fprintf(os.Stdout, "Response from `AvailabilityAPI.DeleteHurdleRates`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteHurdleRatesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **hurdleDate** | **[]string** | Hurdle date for which the hurdle rate is scheduled. | 
 **roomType** | **[]string** | Room type for which the hurdle rate applies to. | 
 **roomCategory** | **[]string** | Internal room category of the room type for which the hurdle rate applies to. | 
 **yieldCategory** | **[]string** | Yield category for which the hurdle rate applies to. | 
 **lengthOfStay** | **[]float32** | Length of stay for which the hurdle rate applies to. | 
 **yieldMarketCode** | **[]string** | Yield market code for which the hurdle rate applies to. | 
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


## DeleteRestriction

> Status DeleteRestriction(ctx, restrictionId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RestrictionEndDate(restrictionEndDate).RestrictionStartDate(restrictionStartDate).BookingChannelCode(bookingChannelCode).RatePlanCategory(ratePlanCategory).RatePlanCode(ratePlanCode).RoomClass(roomClass).RoomType(roomType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete a Restriction 



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/par"
)

func main() {
    restrictionId := "restrictionId_example" // string | Indicates the Restriction Type of the restriction and mandatory to delete the restriction.
    hotelId := "hotelId_example" // string | Indicates restriction is applicable to specified property and mandatory to delete the restriction.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    restrictionEndDate := time.Now() // string | Indicates the End date of the restriction and mandatory to delete the restriction. (optional)
    restrictionStartDate := time.Now() // string | Indicates the start date of the restriction and mandatory to delete the restriction. (optional)
    bookingChannelCode := "bookingChannelCode_example" // string | Indicates restriction is applicable to specified Booking Channel Code in conjunction with other codes, if specified. (optional)
    ratePlanCategory := "ratePlanCategory_example" // string | Indicates restriction is applicable to specified Rate Plan Category in conjunction with other codes, if specified. (optional)
    ratePlanCode := "ratePlanCode_example" // string | Indicates restriction is applicable to specified Rate Plan Code in conjunction with other codes, if specified. (optional)
    roomClass := "roomClass_example" // string | Indicates restriction is applicable to specified Room Category in conjunction with other codes, if specified. (optional)
    roomType := "roomType_example" // string | Indicates restriction is applicable to specified Room Type in conjunction with other codes, if specified. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.AvailabilityAPI.DeleteRestriction(context.Background(), restrictionId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RestrictionEndDate(restrictionEndDate).RestrictionStartDate(restrictionStartDate).BookingChannelCode(bookingChannelCode).RatePlanCategory(ratePlanCategory).RatePlanCode(ratePlanCode).RoomClass(roomClass).RoomType(roomType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AvailabilityAPI.DeleteRestriction``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteRestriction`: Status
    fmt.Fprintf(os.Stdout, "Response from `AvailabilityAPI.DeleteRestriction`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**restrictionId** | **string** | Indicates the Restriction Type of the restriction and mandatory to delete the restriction. | 
**hotelId** | **string** | Indicates restriction is applicable to specified property and mandatory to delete the restriction. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteRestrictionRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **restrictionEndDate** | **string** | Indicates the End date of the restriction and mandatory to delete the restriction. | 
 **restrictionStartDate** | **string** | Indicates the start date of the restriction and mandatory to delete the restriction. | 
 **bookingChannelCode** | **string** | Indicates restriction is applicable to specified Booking Channel Code in conjunction with other codes, if specified. | 
 **ratePlanCategory** | **string** | Indicates restriction is applicable to specified Rate Plan Category in conjunction with other codes, if specified. | 
 **ratePlanCode** | **string** | Indicates restriction is applicable to specified Rate Plan Code in conjunction with other codes, if specified. | 
 **roomClass** | **string** | Indicates restriction is applicable to specified Room Category in conjunction with other codes, if specified. | 
 **roomType** | **string** | Indicates restriction is applicable to specified Room Type in conjunction with other codes, if specified. | 
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


## GetAlternateAvailability

> AlternateAvailability GetAlternateAvailability(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RatePlanCode(ratePlanCode).Redemption(redemption).RoomType(roomType).RoomNumber(roomNumber).StartDate(startDate).EndDate(endDate).Duration(duration).Quantity(quantity).Adults(adults).Children(children).ChildAge(childAge).Bucket1Count(bucket1Count).Bucket2Count(bucket2Count).Bucket3Count(bucket3Count).Bucket4Count(bucket4Count).Bucket5Count(bucket5Count).ReservationGuestId(reservationGuestId).ReservationGuestIdType(reservationGuestIdType).ReservationProfileType(reservationProfileType).BlockCode(blockCode).BlockName(blockName).BlockId(blockId).BlockIdType(blockIdType).MembershipLevel(membershipLevel).MembershipType(membershipType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get alternate availability



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/par"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID that identifies a single hotel property.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    ratePlanCode := "ratePlanCode_example" // string | Requested Rate code (optional)
    redemption := true // bool | Used to indicate if award redemption flag is to be set. (optional)
    roomType := "roomType_example" // string | Requested Room type. (optional)
    roomNumber := "roomNumber_example" // string | Requested Room Number. (optional)
    startDate := time.Now() // string |  (optional)
    endDate := time.Now() // string |  (optional)
    duration := "duration_example" // string |  (optional)
    quantity := int32(56) // int32 |  (optional)
    adults := int32(56) // int32 | Defines the number of Adults. (optional)
    children := int32(56) // int32 | Defines the number of Children. (optional)
    childAge := []int32{int32(123)} // []int32 | Age of a child in years. (optional)
    bucket1Count := int32(56) // int32 | Number of children classified under the first Age Qualifying Group(Child Bucket#1). (optional)
    bucket2Count := int32(56) // int32 | Number of children classified under the second Age Qualifying Group(Child Bucket#2). (optional)
    bucket3Count := int32(56) // int32 | Number of children classified under the third Age Qualifying Group(Child Bucket#3). (optional)
    bucket4Count := int32(56) // int32 | Number of children classified under the fourth Age Qualifying Group(Child Bucket#4). (optional)
    bucket5Count := int32(56) // int32 | Number of children classified under the fifth Age Qualifying Group(Child Bucket#5). (optional)
    reservationGuestId := "reservationGuestId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    reservationGuestIdType := "reservationGuestIdType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    reservationProfileType := []string{"ReservationProfileType_example"} // []string |  (optional)
    blockCode := "blockCode_example" // string |  (optional)
    blockName := "blockName_example" // string |  (optional)
    blockId := "blockId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    blockIdType := "blockIdType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    membershipLevel := "membershipLevel_example" // string | Membership id Number of the guest. (optional)
    membershipType := "membershipType_example" // string | Membership id Number of the guest. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.AvailabilityAPI.GetAlternateAvailability(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RatePlanCode(ratePlanCode).Redemption(redemption).RoomType(roomType).RoomNumber(roomNumber).StartDate(startDate).EndDate(endDate).Duration(duration).Quantity(quantity).Adults(adults).Children(children).ChildAge(childAge).Bucket1Count(bucket1Count).Bucket2Count(bucket2Count).Bucket3Count(bucket3Count).Bucket4Count(bucket4Count).Bucket5Count(bucket5Count).ReservationGuestId(reservationGuestId).ReservationGuestIdType(reservationGuestIdType).ReservationProfileType(reservationProfileType).BlockCode(blockCode).BlockName(blockName).BlockId(blockId).BlockIdType(blockIdType).MembershipLevel(membershipLevel).MembershipType(membershipType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AvailabilityAPI.GetAlternateAvailability``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetAlternateAvailability`: AlternateAvailability
    fmt.Fprintf(os.Stdout, "Response from `AvailabilityAPI.GetAlternateAvailability`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetAlternateAvailabilityRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **ratePlanCode** | **string** | Requested Rate code | 
 **redemption** | **bool** | Used to indicate if award redemption flag is to be set. | 
 **roomType** | **string** | Requested Room type. | 
 **roomNumber** | **string** | Requested Room Number. | 
 **startDate** | **string** |  | 
 **endDate** | **string** |  | 
 **duration** | **string** |  | 
 **quantity** | **int32** |  | 
 **adults** | **int32** | Defines the number of Adults. | 
 **children** | **int32** | Defines the number of Children. | 
 **childAge** | **[]int32** | Age of a child in years. | 
 **bucket1Count** | **int32** | Number of children classified under the first Age Qualifying Group(Child Bucket#1). | 
 **bucket2Count** | **int32** | Number of children classified under the second Age Qualifying Group(Child Bucket#2). | 
 **bucket3Count** | **int32** | Number of children classified under the third Age Qualifying Group(Child Bucket#3). | 
 **bucket4Count** | **int32** | Number of children classified under the fourth Age Qualifying Group(Child Bucket#4). | 
 **bucket5Count** | **int32** | Number of children classified under the fifth Age Qualifying Group(Child Bucket#5). | 
 **reservationGuestId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **reservationGuestIdType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **reservationProfileType** | **[]string** |  | 
 **blockCode** | **string** |  | 
 **blockName** | **string** |  | 
 **blockId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **blockIdType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **membershipLevel** | **string** | Membership id Number of the guest. | 
 **membershipType** | **string** | Membership id Number of the guest. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**AlternateAvailability**](AlternateAvailability.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetAvailabilityRatePlanInfo

> AvailabilityRatePlanInfo GetAvailabilityRatePlanInfo(ctx, ratePlanCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RatePlanCodeList(ratePlanCodeList).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Rate Plan Information 



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/par"
)

func main() {
    ratePlanCode := "ratePlanCode_example" // string | Rate Plan Code.
    hotelId := "hotelId_example" // string | Unique ID that identifies a single hotel property.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    ratePlanCodeList := []string{"Inner_example"} // []string | Rate Plan code. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.AvailabilityAPI.GetAvailabilityRatePlanInfo(context.Background(), ratePlanCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RatePlanCodeList(ratePlanCodeList).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AvailabilityAPI.GetAvailabilityRatePlanInfo``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetAvailabilityRatePlanInfo`: AvailabilityRatePlanInfo
    fmt.Fprintf(os.Stdout, "Response from `AvailabilityAPI.GetAvailabilityRatePlanInfo`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**ratePlanCode** | **string** | Rate Plan Code. | 
**hotelId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetAvailabilityRatePlanInfoRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **ratePlanCodeList** | **[]string** | Rate Plan code. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**AvailabilityRatePlanInfo**](AvailabilityRatePlanInfo.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetAvailabilityRatePlanInfoByMultipleRatePlans

> AvailabilityRatePlanInfo GetAvailabilityRatePlanInfoByMultipleRatePlans(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RatePlanCodeList(ratePlanCodeList).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Use this API to get Rate Plan information such as commission codes, market codes, and rate category. 



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/par"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID that identifies a single hotel property.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    ratePlanCodeList := []string{"Inner_example"} // []string | Rate Plan code. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.AvailabilityAPI.GetAvailabilityRatePlanInfoByMultipleRatePlans(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RatePlanCodeList(ratePlanCodeList).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AvailabilityAPI.GetAvailabilityRatePlanInfoByMultipleRatePlans``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetAvailabilityRatePlanInfoByMultipleRatePlans`: AvailabilityRatePlanInfo
    fmt.Fprintf(os.Stdout, "Response from `AvailabilityAPI.GetAvailabilityRatePlanInfoByMultipleRatePlans`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetAvailabilityRatePlanInfoByMultipleRatePlansRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **ratePlanCodeList** | **[]string** | Rate Plan code. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**AvailabilityRatePlanInfo**](AvailabilityRatePlanInfo.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetAvailableUpsells

> AvailableUpsells GetAvailableUpsells(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ReservationId(reservationId).ProfileId(profileId).ReservationStatus(reservationStatus).StartDate(startDate).EndDate(endDate).RatePlanCode(ratePlanCode).RoomType(roomType).Adults(adults).Children(children).RateAmount(rateAmount).GuaranteeCode(guaranteeCode).MarketCode(marketCode).FixedRate(fixedRate).RateDate(rateDate).RequiredAmount(requiredAmount).NumberOfRooms(numberOfRooms).Bucket1Count(bucket1Count).Bucket2Count(bucket2Count).Bucket3Count(bucket3Count).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get for Available Up-sells



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/par"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID that identifies a single hotel property.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    reservationId := "reservationId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    profileId := "profileId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    reservationStatus := "reservationStatus_example" // string | This reservation is in checked in status and the business date is past departure date. This could occur when ORS and PMS are in same environment. (optional)
    startDate := time.Now() // string |  (optional)
    endDate := time.Now() // string |  (optional)
    ratePlanCode := "ratePlanCode_example" // string | Rate plan code (optional)
    roomType := "roomType_example" // string | Room type (optional)
    adults := int32(56) // int32 | Defines the number of Adults. (optional)
    children := int32(56) // int32 | Defines the number of Children. (optional)
    rateAmount := float32(8.14) // float32 | A monetary amount. (optional)
    guaranteeCode := "guaranteeCode_example" // string | Guarantee code (optional)
    marketCode := "marketCode_example" // string | Market code (optional)
    fixedRate := true // bool | Fixed Rate flag (optional)
    rateDate := []string{time.Now()} // []string | Reservation date (optional)
    requiredAmount := []float32{float32(123)} // []float32 | A monetary amount. (optional)
    numberOfRooms := int32(56) // int32 | Number of Rooms (optional)
    bucket1Count := int32(56) // int32 | Number of children classified under the first Age Qualifying Group(Child Bucket#1). (optional)
    bucket2Count := int32(56) // int32 | Number of children classified under the second Age Qualifying Group(Child Bucket#2). (optional)
    bucket3Count := int32(56) // int32 | Number of children classified under the third Age Qualifying Group(Child Bucket#3). (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.AvailabilityAPI.GetAvailableUpsells(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ReservationId(reservationId).ProfileId(profileId).ReservationStatus(reservationStatus).StartDate(startDate).EndDate(endDate).RatePlanCode(ratePlanCode).RoomType(roomType).Adults(adults).Children(children).RateAmount(rateAmount).GuaranteeCode(guaranteeCode).MarketCode(marketCode).FixedRate(fixedRate).RateDate(rateDate).RequiredAmount(requiredAmount).NumberOfRooms(numberOfRooms).Bucket1Count(bucket1Count).Bucket2Count(bucket2Count).Bucket3Count(bucket3Count).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AvailabilityAPI.GetAvailableUpsells``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetAvailableUpsells`: AvailableUpsells
    fmt.Fprintf(os.Stdout, "Response from `AvailabilityAPI.GetAvailableUpsells`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetAvailableUpsellsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **reservationId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **profileId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **reservationStatus** | **string** | This reservation is in checked in status and the business date is past departure date. This could occur when ORS and PMS are in same environment. | 
 **startDate** | **string** |  | 
 **endDate** | **string** |  | 
 **ratePlanCode** | **string** | Rate plan code | 
 **roomType** | **string** | Room type | 
 **adults** | **int32** | Defines the number of Adults. | 
 **children** | **int32** | Defines the number of Children. | 
 **rateAmount** | **float32** | A monetary amount. | 
 **guaranteeCode** | **string** | Guarantee code | 
 **marketCode** | **string** | Market code | 
 **fixedRate** | **bool** | Fixed Rate flag | 
 **rateDate** | **[]string** | Reservation date | 
 **requiredAmount** | **[]float32** | A monetary amount. | 
 **numberOfRooms** | **int32** | Number of Rooms | 
 **bucket1Count** | **int32** | Number of children classified under the first Age Qualifying Group(Child Bucket#1). | 
 **bucket2Count** | **int32** | Number of children classified under the second Age Qualifying Group(Child Bucket#2). | 
 **bucket3Count** | **int32** | Number of children classified under the third Age Qualifying Group(Child Bucket#3). | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**AvailableUpsells**](AvailableUpsells.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetGuaranteeablePreferences

> GuaranteeablePreferences GetGuaranteeablePreferences(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).StartDate(startDate).EndDate(endDate).RoomType(roomType).AvailableCode(availableCode).RequestedCode(requestedCode).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Guarantee-able Preference Codes



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/par"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID that identifies a single hotel property.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    startDate := time.Now() // string |  (optional)
    endDate := time.Now() // string |  (optional)
    roomType := "roomType_example" // string | Room Type for which the Guaranteeable Preference Code Mapping is requested. (optional)
    availableCode := []string{"Inner_example"} // []string |  (optional)
    requestedCode := []string{"Inner_example"} // []string |  (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.AvailabilityAPI.GetGuaranteeablePreferences(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).StartDate(startDate).EndDate(endDate).RoomType(roomType).AvailableCode(availableCode).RequestedCode(requestedCode).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AvailabilityAPI.GetGuaranteeablePreferences``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetGuaranteeablePreferences`: GuaranteeablePreferences
    fmt.Fprintf(os.Stdout, "Response from `AvailabilityAPI.GetGuaranteeablePreferences`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetGuaranteeablePreferencesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **startDate** | **string** |  | 
 **endDate** | **string** |  | 
 **roomType** | **string** | Room Type for which the Guaranteeable Preference Code Mapping is requested. | 
 **availableCode** | **[]string** |  | 
 **requestedCode** | **[]string** |  | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**GuaranteeablePreferences**](GuaranteeablePreferences.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetHotelAvailability

> HotelAvailability GetHotelAvailability(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Cro(cro).IncludeClosedRates(includeClosedRates).IncludeDefaultRatePlanSet(includeDefaultRatePlanSet).InitialRatePlanSet(initialRatePlanSet).Limit(limit).PagePointerKey(pagePointerKey).RatePlanSet(ratePlanSet).RedeemAwards(redeemAwards).RoomStayStartDate(roomStayStartDate).RoomStayEndDate(roomStayEndDate).RoomStayQuantity(roomStayQuantity).Adults(adults).Children(children).ChildAge(childAge).Bucket1Count(bucket1Count).Bucket2Count(bucket2Count).Bucket3Count(bucket3Count).Bucket4Count(bucket4Count).Bucket5Count(bucket5Count).FullStayTimeSpanStartDate(fullStayTimeSpanStartDate).FullStayTimeSpanEndDate(fullStayTimeSpanEndDate).PrevailingRate(prevailingRate).RateCategory(rateCategory).RateClass(rateClass).RateGroup(rateGroup).RatePlanCode(ratePlanCode).PromotionCode(promotionCode).RoomType(roomType).Feature(feature).ReservationGuestId(reservationGuestId).ReservationGuestIdType(reservationGuestIdType).ReservationProfileType(reservationProfileType).AttachedProfileId(attachedProfileId).HotelReservationId(hotelReservationId).HotelReservationIdType(hotelReservationIdType).RatePlanInfo(ratePlanInfo).ReturnOnlyAvailableRateCodes(returnOnlyAvailableRateCodes).ResGuaranteeInfo(resGuaranteeInfo).RoomTypeInfo(roomTypeInfo).MembershipIdNumber(membershipIdNumber).MembershipLevel(membershipLevel).MembershipType(membershipType).PointsAvailable(pointsAvailable).SmokingPreference(smokingPreference).HotelPackage(hotelPackage).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get hotel availability



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/par"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID that identifies a single hotel property.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    cro := []string{"Inner_example"} // []string | Central reservation office Code who is requesting Rate Availability. (optional)
    includeClosedRates := []bool{false} // []bool | Used to indicate if closed rates are to be included in the Rate Plan set. (optional)
    includeDefaultRatePlanSet := []bool{false} // []bool | Used to indicate if the configured default rate plan set will be included. (optional)
    initialRatePlanSet := []bool{false} // []bool | If InitialRatePlanSet is set to true response will return most relevant Rate Plan Set(e.g. NEGOTIATED if profiles has Negotiated Rates) depending on the request. if request does not requires special Rate Plan Set, it will return default Rate Plan Set if RatePlanSet value is not set. (optional)
    limit := []int32{int32(123)} // []int32 | Indicates maximum number of records a Web Service should return. (optional)
    pagePointerKey := []string{"Inner_example"} // []string | Specifies fetched record's key as pointer to fetch additional records from. If key is composite use comma separated string. (optional)
    ratePlanSet := []string{"Inner_example"} // []string | Rate Plan Set code to filter Rate Plans based on the predefined set. if not specified it will not filter any Rate Plans by Rate Plan Set. When InitialRatePlanSet is true response may not always return Rate Plans for the supplied Rate Plan Set(See InitialRatePlanSet documentation). (optional)
    redeemAwards := []bool{false} // []bool | Used to indicate if the awards are to be redeemed. (optional)
    roomStayStartDate := time.Now() // string |  (optional)
    roomStayEndDate := time.Now() // string |  (optional)
    roomStayQuantity := int32(56) // int32 |  (optional)
    adults := int32(56) // int32 | Defines the number of Adults. (optional)
    children := int32(56) // int32 | Defines the number of Children. (optional)
    childAge := []int32{int32(123)} // []int32 | Age of a child in years. (optional)
    bucket1Count := int32(56) // int32 | Number of children classified under the first Age Qualifying Group(Child Bucket#1). (optional)
    bucket2Count := int32(56) // int32 | Number of children classified under the second Age Qualifying Group(Child Bucket#2). (optional)
    bucket3Count := int32(56) // int32 | Number of children classified under the third Age Qualifying Group(Child Bucket#3). (optional)
    bucket4Count := int32(56) // int32 | Number of children classified under the fourth Age Qualifying Group(Child Bucket#4). (optional)
    bucket5Count := int32(56) // int32 | Number of children classified under the fifth Age Qualifying Group(Child Bucket#5). (optional)
    fullStayTimeSpanStartDate := time.Now() // string |  (optional)
    fullStayTimeSpanEndDate := time.Now() // string |  (optional)
    prevailingRate := true // bool |  (optional)
    rateCategory := "rateCategory_example" // string |  (optional)
    rateClass := "rateClass_example" // string |  (optional)
    rateGroup := "rateGroup_example" // string |  (optional)
    ratePlanCode := []string{"Inner_example"} // []string |  (optional)
    promotionCode := []string{"Inner_example"} // []string | Promotion code associated with the rate plan. (optional)
    roomType := []string{"Inner_example"} // []string |  (optional)
    feature := []string{"Inner_example"} // []string |  (optional)
    reservationGuestId := "reservationGuestId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    reservationGuestIdType := "reservationGuestIdType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    reservationProfileType := []string{"ReservationProfileType_example"} // []string |  (optional)
    attachedProfileId := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    hotelReservationId := "hotelReservationId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    hotelReservationIdType := "hotelReservationIdType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    ratePlanInfo := true // bool | If true Rate Plan Code Master information will be included in the response. (optional)
    returnOnlyAvailableRateCodes := true // bool | If true Only availability check will be done and it will return available rate codes. (optional)
    resGuaranteeInfo := true // bool | If true Guarantee Code information will be fetched with Rate Code Information. This attribute is only effective when RatePlanInfo is true. (optional)
    roomTypeInfo := true // bool | If true Room Type Master information will be included in the response. (optional)
    membershipIdNumber := []int32{int32(123)} // []int32 | Membership id Number of the guest. (optional)
    membershipLevel := []string{"Inner_example"} // []string | Membership id Number of the guest. (optional)
    membershipType := []string{"Inner_example"} // []string | Membership id Number of the guest. (optional)
    pointsAvailable := []int32{int32(123)} // []int32 | Used to indicate Points Available for Profile Primary Membership Type. (optional)
    smokingPreference := []string{"Inner_example"} // []string | Smoking preference to search a reservation. This is compared to the preference on the guest profile of the reservation. (optional)
    hotelPackage := []string{"Inner_example"} // []string | Hotel Package Code to filter the search result. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.AvailabilityAPI.GetHotelAvailability(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Cro(cro).IncludeClosedRates(includeClosedRates).IncludeDefaultRatePlanSet(includeDefaultRatePlanSet).InitialRatePlanSet(initialRatePlanSet).Limit(limit).PagePointerKey(pagePointerKey).RatePlanSet(ratePlanSet).RedeemAwards(redeemAwards).RoomStayStartDate(roomStayStartDate).RoomStayEndDate(roomStayEndDate).RoomStayQuantity(roomStayQuantity).Adults(adults).Children(children).ChildAge(childAge).Bucket1Count(bucket1Count).Bucket2Count(bucket2Count).Bucket3Count(bucket3Count).Bucket4Count(bucket4Count).Bucket5Count(bucket5Count).FullStayTimeSpanStartDate(fullStayTimeSpanStartDate).FullStayTimeSpanEndDate(fullStayTimeSpanEndDate).PrevailingRate(prevailingRate).RateCategory(rateCategory).RateClass(rateClass).RateGroup(rateGroup).RatePlanCode(ratePlanCode).PromotionCode(promotionCode).RoomType(roomType).Feature(feature).ReservationGuestId(reservationGuestId).ReservationGuestIdType(reservationGuestIdType).ReservationProfileType(reservationProfileType).AttachedProfileId(attachedProfileId).HotelReservationId(hotelReservationId).HotelReservationIdType(hotelReservationIdType).RatePlanInfo(ratePlanInfo).ReturnOnlyAvailableRateCodes(returnOnlyAvailableRateCodes).ResGuaranteeInfo(resGuaranteeInfo).RoomTypeInfo(roomTypeInfo).MembershipIdNumber(membershipIdNumber).MembershipLevel(membershipLevel).MembershipType(membershipType).PointsAvailable(pointsAvailable).SmokingPreference(smokingPreference).HotelPackage(hotelPackage).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AvailabilityAPI.GetHotelAvailability``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetHotelAvailability`: HotelAvailability
    fmt.Fprintf(os.Stdout, "Response from `AvailabilityAPI.GetHotelAvailability`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetHotelAvailabilityRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **cro** | **[]string** | Central reservation office Code who is requesting Rate Availability. | 
 **includeClosedRates** | **[]bool** | Used to indicate if closed rates are to be included in the Rate Plan set. | 
 **includeDefaultRatePlanSet** | **[]bool** | Used to indicate if the configured default rate plan set will be included. | 
 **initialRatePlanSet** | **[]bool** | If InitialRatePlanSet is set to true response will return most relevant Rate Plan Set(e.g. NEGOTIATED if profiles has Negotiated Rates) depending on the request. if request does not requires special Rate Plan Set, it will return default Rate Plan Set if RatePlanSet value is not set. | 
 **limit** | **[]int32** | Indicates maximum number of records a Web Service should return. | 
 **pagePointerKey** | **[]string** | Specifies fetched record&#39;s key as pointer to fetch additional records from. If key is composite use comma separated string. | 
 **ratePlanSet** | **[]string** | Rate Plan Set code to filter Rate Plans based on the predefined set. if not specified it will not filter any Rate Plans by Rate Plan Set. When InitialRatePlanSet is true response may not always return Rate Plans for the supplied Rate Plan Set(See InitialRatePlanSet documentation). | 
 **redeemAwards** | **[]bool** | Used to indicate if the awards are to be redeemed. | 
 **roomStayStartDate** | **string** |  | 
 **roomStayEndDate** | **string** |  | 
 **roomStayQuantity** | **int32** |  | 
 **adults** | **int32** | Defines the number of Adults. | 
 **children** | **int32** | Defines the number of Children. | 
 **childAge** | **[]int32** | Age of a child in years. | 
 **bucket1Count** | **int32** | Number of children classified under the first Age Qualifying Group(Child Bucket#1). | 
 **bucket2Count** | **int32** | Number of children classified under the second Age Qualifying Group(Child Bucket#2). | 
 **bucket3Count** | **int32** | Number of children classified under the third Age Qualifying Group(Child Bucket#3). | 
 **bucket4Count** | **int32** | Number of children classified under the fourth Age Qualifying Group(Child Bucket#4). | 
 **bucket5Count** | **int32** | Number of children classified under the fifth Age Qualifying Group(Child Bucket#5). | 
 **fullStayTimeSpanStartDate** | **string** |  | 
 **fullStayTimeSpanEndDate** | **string** |  | 
 **prevailingRate** | **bool** |  | 
 **rateCategory** | **string** |  | 
 **rateClass** | **string** |  | 
 **rateGroup** | **string** |  | 
 **ratePlanCode** | **[]string** |  | 
 **promotionCode** | **[]string** | Promotion code associated with the rate plan. | 
 **roomType** | **[]string** |  | 
 **feature** | **[]string** |  | 
 **reservationGuestId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **reservationGuestIdType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **reservationProfileType** | **[]string** |  | 
 **attachedProfileId** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **hotelReservationId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **hotelReservationIdType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **ratePlanInfo** | **bool** | If true Rate Plan Code Master information will be included in the response. | 
 **returnOnlyAvailableRateCodes** | **bool** | If true Only availability check will be done and it will return available rate codes. | 
 **resGuaranteeInfo** | **bool** | If true Guarantee Code information will be fetched with Rate Code Information. This attribute is only effective when RatePlanInfo is true. | 
 **roomTypeInfo** | **bool** | If true Room Type Master information will be included in the response. | 
 **membershipIdNumber** | **[]int32** | Membership id Number of the guest. | 
 **membershipLevel** | **[]string** | Membership id Number of the guest. | 
 **membershipType** | **[]string** | Membership id Number of the guest. | 
 **pointsAvailable** | **[]int32** | Used to indicate Points Available for Profile Primary Membership Type. | 
 **smokingPreference** | **[]string** | Smoking preference to search a reservation. This is compared to the preference on the guest profile of the reservation. | 
 **hotelPackage** | **[]string** | Hotel Package Code to filter the search result. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**HotelAvailability**](HotelAvailability.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetHotelAvailabilityCRO

> HotelAvailability GetHotelAvailabilityCRO(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Cro(cro).HotelIds(hotelIds).IncludeClosedRates(includeClosedRates).IncludeDefaultRatePlanSet(includeDefaultRatePlanSet).InitialRatePlanSet(initialRatePlanSet).Limit(limit).PagePointerKey(pagePointerKey).RatePlanSet(ratePlanSet).RedeemAwards(redeemAwards).RoomStayStartDate(roomStayStartDate).RoomStayEndDate(roomStayEndDate).RoomStayQuantity(roomStayQuantity).Adults(adults).Children(children).ChildAge(childAge).Bucket1Count(bucket1Count).Bucket2Count(bucket2Count).Bucket3Count(bucket3Count).Bucket4Count(bucket4Count).Bucket5Count(bucket5Count).FullStayTimeSpanStartDate(fullStayTimeSpanStartDate).FullStayTimeSpanEndDate(fullStayTimeSpanEndDate).PrevailingRate(prevailingRate).RateCategory(rateCategory).RateClass(rateClass).RateGroup(rateGroup).RatePlanCode(ratePlanCode).PromotionCode(promotionCode).RoomType(roomType).RoomClass(roomClass).Feature(feature).ReservationGuestId(reservationGuestId).ReservationGuestIdType(reservationGuestIdType).ReservationProfileType(reservationProfileType).AttachedProfileId(attachedProfileId).HotelReservationId(hotelReservationId).HotelReservationIdType(hotelReservationIdType).RatePlanInfo(ratePlanInfo).ReturnOnlyAvailableRateCodes(returnOnlyAvailableRateCodes).ResGuaranteeInfo(resGuaranteeInfo).RoomTypeInfo(roomTypeInfo).MembershipIdNumber(membershipIdNumber).MembershipLevel(membershipLevel).MembershipType(membershipType).PointsAvailable(pointsAvailable).SmokingPreference(smokingPreference).HotelPackage(hotelPackage).YieldMarketCode(yieldMarketCode).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Hotel Availability



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/par"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    cro := []string{"Inner_example"} // []string | Central reservation office Code who is requesting Rate Availability. (optional)
    hotelIds := []string{"Inner_example"} // []string | Hotel code of the Hotel whose Rate Availability is requested. (optional)
    includeClosedRates := []bool{false} // []bool | Used to indicate if closed rates are to be included in the Rate Plan set. (optional)
    includeDefaultRatePlanSet := []bool{false} // []bool | Used to indicate if the configured default rate plan set will be included. (optional)
    initialRatePlanSet := []bool{false} // []bool | If InitialRatePlanSet is set to true response will return most relevant Rate Plan Set(e.g. NEGOTIATED if profiles has Negotiated Rates) depending on the request. if request does not requires special Rate Plan Set, it will return default Rate Plan Set if RatePlanSet value is not set. (optional)
    limit := []int32{int32(123)} // []int32 | Indicates maximum number of records a Web Service should return. (optional)
    pagePointerKey := []string{"Inner_example"} // []string | Specifies fetched record's key as pointer to fetch additional records from. If key is composite use comma separated string. (optional)
    ratePlanSet := []string{"Inner_example"} // []string | Rate Plan Set code to filter Rate Plans based on the predefined set. if not specified it will not filter any Rate Plans by Rate Plan Set. When InitialRatePlanSet is true response may not always return Rate Plans for the supplied Rate Plan Set(See InitialRatePlanSet documentation). (optional)
    redeemAwards := []bool{false} // []bool | Used to indicate if the awards are to be redeemed. (optional)
    roomStayStartDate := time.Now() // string |  (optional)
    roomStayEndDate := time.Now() // string |  (optional)
    roomStayQuantity := int32(56) // int32 |  (optional)
    adults := int32(56) // int32 | Defines the number of Adults. (optional)
    children := int32(56) // int32 | Defines the number of Children. (optional)
    childAge := []int32{int32(123)} // []int32 | Age of a child in years. (optional)
    bucket1Count := int32(56) // int32 | Number of children classified under the first Age Qualifying Group(Child Bucket#1). (optional)
    bucket2Count := int32(56) // int32 | Number of children classified under the second Age Qualifying Group(Child Bucket#2). (optional)
    bucket3Count := int32(56) // int32 | Number of children classified under the third Age Qualifying Group(Child Bucket#3). (optional)
    bucket4Count := int32(56) // int32 | Number of children classified under the fourth Age Qualifying Group(Child Bucket#4). (optional)
    bucket5Count := int32(56) // int32 | Number of children classified under the fifth Age Qualifying Group(Child Bucket#5). (optional)
    fullStayTimeSpanStartDate := time.Now() // string |  (optional)
    fullStayTimeSpanEndDate := time.Now() // string |  (optional)
    prevailingRate := true // bool |  (optional)
    rateCategory := "rateCategory_example" // string |  (optional)
    rateClass := "rateClass_example" // string |  (optional)
    rateGroup := "rateGroup_example" // string |  (optional)
    ratePlanCode := []string{"Inner_example"} // []string |  (optional)
    promotionCode := []string{"Inner_example"} // []string | Promotion code associated with the rate plan. (optional)
    roomType := []string{"Inner_example"} // []string |  (optional)
    roomClass := []string{"Inner_example"} // []string |  (optional)
    feature := []string{"Inner_example"} // []string |  (optional)
    reservationGuestId := "reservationGuestId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    reservationGuestIdType := "reservationGuestIdType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    reservationProfileType := []string{"ReservationProfileType_example"} // []string |  (optional)
    attachedProfileId := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    hotelReservationId := "hotelReservationId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    hotelReservationIdType := "hotelReservationIdType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    ratePlanInfo := true // bool | If true Rate Plan Code Master information will be included in the response. (optional)
    returnOnlyAvailableRateCodes := true // bool | If true Only availability check will be done and it will return available rate codes. (optional)
    resGuaranteeInfo := true // bool | If true Guarantee Code information will be fetched with Rate Code Information. This attribute is only effective when RatePlanInfo is true. (optional)
    roomTypeInfo := true // bool | If true Room Type Master information will be included in the response. (optional)
    membershipIdNumber := []int32{int32(123)} // []int32 | Membership id Number of the guest. (optional)
    membershipLevel := []string{"Inner_example"} // []string | Membership id Number of the guest. (optional)
    membershipType := []string{"Inner_example"} // []string | Membership id Number of the guest. (optional)
    pointsAvailable := []int32{int32(123)} // []int32 | Used to indicate Points Available for Profile Primary Membership Type. (optional)
    smokingPreference := []string{"Inner_example"} // []string | Smoking preference to search a reservation. This is compared to the preference on the guest profile of the reservation. (optional)
    hotelPackage := []string{"Inner_example"} // []string | Hotel Package Code to filter the search result. (optional)
    yieldMarketCode := "yieldMarketCode_example" // string |  (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.AvailabilityAPI.GetHotelAvailabilityCRO(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Cro(cro).HotelIds(hotelIds).IncludeClosedRates(includeClosedRates).IncludeDefaultRatePlanSet(includeDefaultRatePlanSet).InitialRatePlanSet(initialRatePlanSet).Limit(limit).PagePointerKey(pagePointerKey).RatePlanSet(ratePlanSet).RedeemAwards(redeemAwards).RoomStayStartDate(roomStayStartDate).RoomStayEndDate(roomStayEndDate).RoomStayQuantity(roomStayQuantity).Adults(adults).Children(children).ChildAge(childAge).Bucket1Count(bucket1Count).Bucket2Count(bucket2Count).Bucket3Count(bucket3Count).Bucket4Count(bucket4Count).Bucket5Count(bucket5Count).FullStayTimeSpanStartDate(fullStayTimeSpanStartDate).FullStayTimeSpanEndDate(fullStayTimeSpanEndDate).PrevailingRate(prevailingRate).RateCategory(rateCategory).RateClass(rateClass).RateGroup(rateGroup).RatePlanCode(ratePlanCode).PromotionCode(promotionCode).RoomType(roomType).RoomClass(roomClass).Feature(feature).ReservationGuestId(reservationGuestId).ReservationGuestIdType(reservationGuestIdType).ReservationProfileType(reservationProfileType).AttachedProfileId(attachedProfileId).HotelReservationId(hotelReservationId).HotelReservationIdType(hotelReservationIdType).RatePlanInfo(ratePlanInfo).ReturnOnlyAvailableRateCodes(returnOnlyAvailableRateCodes).ResGuaranteeInfo(resGuaranteeInfo).RoomTypeInfo(roomTypeInfo).MembershipIdNumber(membershipIdNumber).MembershipLevel(membershipLevel).MembershipType(membershipType).PointsAvailable(pointsAvailable).SmokingPreference(smokingPreference).HotelPackage(hotelPackage).YieldMarketCode(yieldMarketCode).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AvailabilityAPI.GetHotelAvailabilityCRO``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetHotelAvailabilityCRO`: HotelAvailability
    fmt.Fprintf(os.Stdout, "Response from `AvailabilityAPI.GetHotelAvailabilityCRO`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetHotelAvailabilityCRORequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **cro** | **[]string** | Central reservation office Code who is requesting Rate Availability. | 
 **hotelIds** | **[]string** | Hotel code of the Hotel whose Rate Availability is requested. | 
 **includeClosedRates** | **[]bool** | Used to indicate if closed rates are to be included in the Rate Plan set. | 
 **includeDefaultRatePlanSet** | **[]bool** | Used to indicate if the configured default rate plan set will be included. | 
 **initialRatePlanSet** | **[]bool** | If InitialRatePlanSet is set to true response will return most relevant Rate Plan Set(e.g. NEGOTIATED if profiles has Negotiated Rates) depending on the request. if request does not requires special Rate Plan Set, it will return default Rate Plan Set if RatePlanSet value is not set. | 
 **limit** | **[]int32** | Indicates maximum number of records a Web Service should return. | 
 **pagePointerKey** | **[]string** | Specifies fetched record&#39;s key as pointer to fetch additional records from. If key is composite use comma separated string. | 
 **ratePlanSet** | **[]string** | Rate Plan Set code to filter Rate Plans based on the predefined set. if not specified it will not filter any Rate Plans by Rate Plan Set. When InitialRatePlanSet is true response may not always return Rate Plans for the supplied Rate Plan Set(See InitialRatePlanSet documentation). | 
 **redeemAwards** | **[]bool** | Used to indicate if the awards are to be redeemed. | 
 **roomStayStartDate** | **string** |  | 
 **roomStayEndDate** | **string** |  | 
 **roomStayQuantity** | **int32** |  | 
 **adults** | **int32** | Defines the number of Adults. | 
 **children** | **int32** | Defines the number of Children. | 
 **childAge** | **[]int32** | Age of a child in years. | 
 **bucket1Count** | **int32** | Number of children classified under the first Age Qualifying Group(Child Bucket#1). | 
 **bucket2Count** | **int32** | Number of children classified under the second Age Qualifying Group(Child Bucket#2). | 
 **bucket3Count** | **int32** | Number of children classified under the third Age Qualifying Group(Child Bucket#3). | 
 **bucket4Count** | **int32** | Number of children classified under the fourth Age Qualifying Group(Child Bucket#4). | 
 **bucket5Count** | **int32** | Number of children classified under the fifth Age Qualifying Group(Child Bucket#5). | 
 **fullStayTimeSpanStartDate** | **string** |  | 
 **fullStayTimeSpanEndDate** | **string** |  | 
 **prevailingRate** | **bool** |  | 
 **rateCategory** | **string** |  | 
 **rateClass** | **string** |  | 
 **rateGroup** | **string** |  | 
 **ratePlanCode** | **[]string** |  | 
 **promotionCode** | **[]string** | Promotion code associated with the rate plan. | 
 **roomType** | **[]string** |  | 
 **roomClass** | **[]string** |  | 
 **feature** | **[]string** |  | 
 **reservationGuestId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **reservationGuestIdType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **reservationProfileType** | **[]string** |  | 
 **attachedProfileId** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **hotelReservationId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **hotelReservationIdType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **ratePlanInfo** | **bool** | If true Rate Plan Code Master information will be included in the response. | 
 **returnOnlyAvailableRateCodes** | **bool** | If true Only availability check will be done and it will return available rate codes. | 
 **resGuaranteeInfo** | **bool** | If true Guarantee Code information will be fetched with Rate Code Information. This attribute is only effective when RatePlanInfo is true. | 
 **roomTypeInfo** | **bool** | If true Room Type Master information will be included in the response. | 
 **membershipIdNumber** | **[]int32** | Membership id Number of the guest. | 
 **membershipLevel** | **[]string** | Membership id Number of the guest. | 
 **membershipType** | **[]string** | Membership id Number of the guest. | 
 **pointsAvailable** | **[]int32** | Used to indicate Points Available for Profile Primary Membership Type. | 
 **smokingPreference** | **[]string** | Smoking preference to search a reservation. This is compared to the preference on the guest profile of the reservation. | 
 **hotelPackage** | **[]string** | Hotel Package Code to filter the search result. | 
 **yieldMarketCode** | **string** |  | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**HotelAvailability**](HotelAvailability.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetHotels

> SearchHotelsDetails GetHotels(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Cro(cro).Limit(limit).StartDate(startDate).EndDate(endDate).Quantity(quantity).Adults(adults).Children(children).AlternateHotels(alternateHotels).HotelId(hotelId).RegionCode(regionCode).City(city).HotelType(hotelType).HotelAmenity(hotelAmenity).Attraction(attraction).HotelPackage(hotelPackage).PrevailingRate(prevailingRate).RateCategory(rateCategory).RateClass(rateClass).RateGroup(rateGroup).RatePlanCode(ratePlanCode).RatePlanId(ratePlanId).PromotionCode(promotionCode).RoomType(roomType).RoomClass(roomClass).BedType(bedType).Feature(feature).ReservationGuestId(reservationGuestId).ReservationGuestIdType(reservationGuestIdType).ReservationProfileType(reservationProfileType).Id(id).CurrencyExchangeRates(currencyExchangeRates).RatePlanInfo(ratePlanInfo).ResGuaranteeInfo(resGuaranteeInfo).ReturnAllRates(returnAllRates).RoomTypeInfo(roomTypeInfo).SellMessages(sellMessages).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Search hotels for the sales process



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/par"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    cro := "cro_example" // string | Central Reservation Office Code who is conducting the search. This will search only hotels handled by the CRO. (optional)
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    startDate := time.Now() // string |  (optional)
    endDate := time.Now() // string |  (optional)
    quantity := int32(56) // int32 |  (optional)
    adults := int32(56) // int32 | Defines the number of Adults. (optional)
    children := int32(56) // int32 | Defines the number of Children. (optional)
    alternateHotels := true // bool | If true or not specified Alternate Hotels will be returned in the result. To search specific hotels send it false. (optional)
    hotelId := []string{"Inner_example"} // []string | Hotel Code to be searched. (optional)
    regionCode := "regionCode_example" // string | Region Code where the given cities are located. (optional)
    city := []string{"Inner_example"} // []string | City Code to filter the search result. (optional)
    hotelType := []string{"Inner_example"} // []string | Hotel Type to filter the search result. (optional)
    hotelAmenity := []string{"Inner_example"} // []string | Hotel Amenity Code to filter the search result. (optional)
    attraction := []string{"Inner_example"} // []string | Attaction Code to filter the search result. (optional)
    hotelPackage := []string{"Inner_example"} // []string | Hotel Package Code to filter the search result. (optional)
    prevailingRate := true // bool |  (optional)
    rateCategory := "rateCategory_example" // string |  (optional)
    rateClass := "rateClass_example" // string |  (optional)
    rateGroup := "rateGroup_example" // string |  (optional)
    ratePlanCode := []string{"Inner_example"} // []string |  (optional)
    ratePlanId := []string{"Inner_example"} // []string |  (optional)
    promotionCode := []string{"Inner_example"} // []string | Promotion code associated with the rate plan. (optional)
    roomType := []string{"Inner_example"} // []string |  (optional)
    roomClass := []string{"Inner_example"} // []string |  (optional)
    bedType := []string{"Inner_example"} // []string |  (optional)
    feature := []string{"Inner_example"} // []string |  (optional)
    reservationGuestId := "reservationGuestId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    reservationGuestIdType := "reservationGuestIdType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    reservationProfileType := []string{"ReservationProfileType_example"} // []string |  (optional)
    id := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    currencyExchangeRates := true // bool | If true Currency Exchange Rates information will be included in the response. (optional)
    ratePlanInfo := true // bool | If true Rate Plan Code Master information will be included in the response. (optional)
    resGuaranteeInfo := true // bool | If true Guarantee Code information will be fetched with Rate Code Information. This attribute is only effective when RatePlanInfo is true. (optional)
    returnAllRates := true // bool | Indicates whether to return only 'Requested' rate codes or 'All' rate codes. The default value is true which means all available ratecodes will be returned. (optional)
    roomTypeInfo := true // bool | If true Room Type Master information will be included in the response. (optional)
    sellMessages := true // bool | If true Sell Messages information will be included in the response. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.AvailabilityAPI.GetHotels(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Cro(cro).Limit(limit).StartDate(startDate).EndDate(endDate).Quantity(quantity).Adults(adults).Children(children).AlternateHotels(alternateHotels).HotelId(hotelId).RegionCode(regionCode).City(city).HotelType(hotelType).HotelAmenity(hotelAmenity).Attraction(attraction).HotelPackage(hotelPackage).PrevailingRate(prevailingRate).RateCategory(rateCategory).RateClass(rateClass).RateGroup(rateGroup).RatePlanCode(ratePlanCode).RatePlanId(ratePlanId).PromotionCode(promotionCode).RoomType(roomType).RoomClass(roomClass).BedType(bedType).Feature(feature).ReservationGuestId(reservationGuestId).ReservationGuestIdType(reservationGuestIdType).ReservationProfileType(reservationProfileType).Id(id).CurrencyExchangeRates(currencyExchangeRates).RatePlanInfo(ratePlanInfo).ResGuaranteeInfo(resGuaranteeInfo).ReturnAllRates(returnAllRates).RoomTypeInfo(roomTypeInfo).SellMessages(sellMessages).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AvailabilityAPI.GetHotels``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetHotels`: SearchHotelsDetails
    fmt.Fprintf(os.Stdout, "Response from `AvailabilityAPI.GetHotels`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetHotelsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **cro** | **string** | Central Reservation Office Code who is conducting the search. This will search only hotels handled by the CRO. | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **startDate** | **string** |  | 
 **endDate** | **string** |  | 
 **quantity** | **int32** |  | 
 **adults** | **int32** | Defines the number of Adults. | 
 **children** | **int32** | Defines the number of Children. | 
 **alternateHotels** | **bool** | If true or not specified Alternate Hotels will be returned in the result. To search specific hotels send it false. | 
 **hotelId** | **[]string** | Hotel Code to be searched. | 
 **regionCode** | **string** | Region Code where the given cities are located. | 
 **city** | **[]string** | City Code to filter the search result. | 
 **hotelType** | **[]string** | Hotel Type to filter the search result. | 
 **hotelAmenity** | **[]string** | Hotel Amenity Code to filter the search result. | 
 **attraction** | **[]string** | Attaction Code to filter the search result. | 
 **hotelPackage** | **[]string** | Hotel Package Code to filter the search result. | 
 **prevailingRate** | **bool** |  | 
 **rateCategory** | **string** |  | 
 **rateClass** | **string** |  | 
 **rateGroup** | **string** |  | 
 **ratePlanCode** | **[]string** |  | 
 **ratePlanId** | **[]string** |  | 
 **promotionCode** | **[]string** | Promotion code associated with the rate plan. | 
 **roomType** | **[]string** |  | 
 **roomClass** | **[]string** |  | 
 **bedType** | **[]string** |  | 
 **feature** | **[]string** |  | 
 **reservationGuestId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **reservationGuestIdType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **reservationProfileType** | **[]string** |  | 
 **id** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **currencyExchangeRates** | **bool** | If true Currency Exchange Rates information will be included in the response. | 
 **ratePlanInfo** | **bool** | If true Rate Plan Code Master information will be included in the response. | 
 **resGuaranteeInfo** | **bool** | If true Guarantee Code information will be fetched with Rate Code Information. This attribute is only effective when RatePlanInfo is true. | 
 **returnAllRates** | **bool** | Indicates whether to return only &#39;Requested&#39; rate codes or &#39;All&#39; rate codes. The default value is true which means all available ratecodes will be returned. | 
 **roomTypeInfo** | **bool** | If true Room Type Master information will be included in the response. | 
 **sellMessages** | **bool** | If true Sell Messages information will be included in the response. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**SearchHotelsDetails**](SearchHotelsDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetHurdleRates

> HurdleRates GetHurdleRates(ctx, hotelId).HurdleDate(hurdleDate).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelIds(hotelIds).Limit(limit).RoomTypesCode(roomTypesCode).WildCard(wildCard).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Hurdle Rates



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/par"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID that identifies a single hotel property.
    hurdleDate := time.Now() // string | Date criteria for which the hurdle rate is scheduled.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    hotelIds := []string{"Inner_example"} // []string | Hotel code. (optional)
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    roomTypesCode := []string{"Inner_example"} // []string | Codes to be searched. (optional)
    wildCard := "wildCard_example" // string | Wildcard search on the code. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.AvailabilityAPI.GetHurdleRates(context.Background(), hotelId).HurdleDate(hurdleDate).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelIds(hotelIds).Limit(limit).RoomTypesCode(roomTypesCode).WildCard(wildCard).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AvailabilityAPI.GetHurdleRates``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetHurdleRates`: HurdleRates
    fmt.Fprintf(os.Stdout, "Response from `AvailabilityAPI.GetHurdleRates`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetHurdleRatesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **hurdleDate** | **string** | Date criteria for which the hurdle rate is scheduled. | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **hotelIds** | **[]string** | Hotel code. | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **roomTypesCode** | **[]string** | Codes to be searched. | 
 **wildCard** | **string** | Wildcard search on the code. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**HurdleRates**](HurdleRates.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetReservationGuarantees

> ReservationGuaranteesPolicies GetReservationGuarantees(ctx, hotelId).ArrivalDate(arrivalDate).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RatePlanCode(ratePlanCode).BlockId(blockId).ReservationGuestId(reservationGuestId).CompanyId(companyId).TravelAgentId(travelAgentId).SourceId(sourceId).GroupId(groupId).GuaranteeCode(guaranteeCode).CalculateEstimateAmount(calculateEstimateAmount).StartDate(startDate).EndDate(endDate).NumberOfRooms(numberOfRooms).NumberOfAdults(numberOfAdults).NumberOfChildren(numberOfChildren).RoomType(roomType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get reservation guarantees



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/par"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID that identifies a single hotel property.
    arrivalDate := time.Now() // string | Arrival Date of the guest.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    ratePlanCode := "ratePlanCode_example" // string | Rate Plan Code to find associated Guarantee Codes. (optional)
    blockId := "blockId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    reservationGuestId := "reservationGuestId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    companyId := "companyId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    travelAgentId := "travelAgentId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    sourceId := "sourceId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    groupId := "groupId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    guaranteeCode := "guaranteeCode_example" // string | Guarantee Code should be supplied only for the code verification purpose, if the supplied code is valid for the rest of the criteria it will return the response with the Guarantee Code information. (optional)
    calculateEstimateAmount := true // bool | Determines whether estimated amount to be calculated or not (optional)
    startDate := time.Now() // string |  (optional)
    endDate := time.Now() // string |  (optional)
    numberOfRooms := int32(56) // int32 |  (optional)
    numberOfAdults := int32(56) // int32 | Defines the number of Adults. (optional)
    numberOfChildren := int32(56) // int32 | Defines the number of Children. (optional)
    roomType := "roomType_example" // string | Room Type for the reservation (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.AvailabilityAPI.GetReservationGuarantees(context.Background(), hotelId).ArrivalDate(arrivalDate).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RatePlanCode(ratePlanCode).BlockId(blockId).ReservationGuestId(reservationGuestId).CompanyId(companyId).TravelAgentId(travelAgentId).SourceId(sourceId).GroupId(groupId).GuaranteeCode(guaranteeCode).CalculateEstimateAmount(calculateEstimateAmount).StartDate(startDate).EndDate(endDate).NumberOfRooms(numberOfRooms).NumberOfAdults(numberOfAdults).NumberOfChildren(numberOfChildren).RoomType(roomType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AvailabilityAPI.GetReservationGuarantees``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetReservationGuarantees`: ReservationGuaranteesPolicies
    fmt.Fprintf(os.Stdout, "Response from `AvailabilityAPI.GetReservationGuarantees`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetReservationGuaranteesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **arrivalDate** | **string** | Arrival Date of the guest. | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **ratePlanCode** | **string** | Rate Plan Code to find associated Guarantee Codes. | 
 **blockId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **reservationGuestId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **companyId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **travelAgentId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **sourceId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **groupId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **guaranteeCode** | **string** | Guarantee Code should be supplied only for the code verification purpose, if the supplied code is valid for the rest of the criteria it will return the response with the Guarantee Code information. | 
 **calculateEstimateAmount** | **bool** | Determines whether estimated amount to be calculated or not | 
 **startDate** | **string** |  | 
 **endDate** | **string** |  | 
 **numberOfRooms** | **int32** |  | 
 **numberOfAdults** | **int32** | Defines the number of Adults. | 
 **numberOfChildren** | **int32** | Defines the number of Children. | 
 **roomType** | **string** | Room Type for the reservation | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ReservationGuaranteesPolicies**](ReservationGuaranteesPolicies.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetRestrictionsByDateRange

> RestrictionsByDateRange GetRestrictionsByDateRange(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChainName(chainName).End(end).FetchSizeByDay(fetchSizeByDay).Limit(limit).RestrictionInfo(restrictionInfo).RestrictionSearchCriteriaStartDate(restrictionSearchCriteriaStartDate).BookingChannelCode(bookingChannelCode).RatePlanCategory(ratePlanCategory).RatePlanCode(ratePlanCode).RoomClass(roomClass).RoomType(roomType).FilterCodeCategory(filterCodeCategory).FilterCode(filterCode).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get hotel restrictions



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/par"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID that identifies a single hotel property.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    chainName := "chainName_example" // string | The name of the hotel chain (e.g., Hilton, Marriott, Hyatt). (optional)
    end := time.Now() // string | The ending value of the date range. (optional)
    fetchSizeByDay := int32(56) // int32 | Defines the maximum amount of restrictions by day. (optional)
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    restrictionInfo := "restrictionInfo_example" // string |  (optional)
    restrictionSearchCriteriaStartDate := time.Now() // string | The starting value of the date range. (optional)
    bookingChannelCode := "bookingChannelCode_example" // string | Indicates restriction is applicable to specified Booking Channel Code in conjunction with other codes, if specified. (optional)
    ratePlanCategory := "ratePlanCategory_example" // string | Indicates restriction is applicable to specified Rate Plan Category in conjunction with other codes, if specified. (optional)
    ratePlanCode := "ratePlanCode_example" // string | Indicates restriction is applicable to specified Rate Plan Code in conjunction with other codes, if specified. (optional)
    roomClass := "roomClass_example" // string | Indicates restriction is applicable to specified Room Category in conjunction with other codes, if specified. (optional)
    roomType := "roomType_example" // string | Indicates restriction is applicable to specified Room Type in conjunction with other codes, if specified. (optional)
    filterCodeCategory := "filterCodeCategory_example" // string | An enumerated type defining the Filter Code Categort or Type. Values: BookingChannelCode, RoomClass, RoomType, RatePlanCategory, RatePlanCode. (optional)
    filterCode := []string{"Inner_example"} // []string | Defines BookingChannelCode, RoomClass, RoomType, RatePlanCategory or RatePlanCode to filter the Restriction. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.AvailabilityAPI.GetRestrictionsByDateRange(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChainName(chainName).End(end).FetchSizeByDay(fetchSizeByDay).Limit(limit).RestrictionInfo(restrictionInfo).RestrictionSearchCriteriaStartDate(restrictionSearchCriteriaStartDate).BookingChannelCode(bookingChannelCode).RatePlanCategory(ratePlanCategory).RatePlanCode(ratePlanCode).RoomClass(roomClass).RoomType(roomType).FilterCodeCategory(filterCodeCategory).FilterCode(filterCode).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AvailabilityAPI.GetRestrictionsByDateRange``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetRestrictionsByDateRange`: RestrictionsByDateRange
    fmt.Fprintf(os.Stdout, "Response from `AvailabilityAPI.GetRestrictionsByDateRange`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetRestrictionsByDateRangeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **chainName** | **string** | The name of the hotel chain (e.g., Hilton, Marriott, Hyatt). | 
 **end** | **string** | The ending value of the date range. | 
 **fetchSizeByDay** | **int32** | Defines the maximum amount of restrictions by day. | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **restrictionInfo** | **string** |  | 
 **restrictionSearchCriteriaStartDate** | **string** | The starting value of the date range. | 
 **bookingChannelCode** | **string** | Indicates restriction is applicable to specified Booking Channel Code in conjunction with other codes, if specified. | 
 **ratePlanCategory** | **string** | Indicates restriction is applicable to specified Rate Plan Category in conjunction with other codes, if specified. | 
 **ratePlanCode** | **string** | Indicates restriction is applicable to specified Rate Plan Code in conjunction with other codes, if specified. | 
 **roomClass** | **string** | Indicates restriction is applicable to specified Room Category in conjunction with other codes, if specified. | 
 **roomType** | **string** | Indicates restriction is applicable to specified Room Type in conjunction with other codes, if specified. | 
 **filterCodeCategory** | **string** | An enumerated type defining the Filter Code Categort or Type. Values: BookingChannelCode, RoomClass, RoomType, RatePlanCategory, RatePlanCode. | 
 **filterCode** | **[]string** | Defines BookingChannelCode, RoomClass, RoomType, RatePlanCategory or RatePlanCode to filter the Restriction. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**RestrictionsByDateRange**](RestrictionsByDateRange.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetRestrictionsHistory

> RestrictionsHistory GetRestrictionsHistory(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChainName(chainName).Date(date).BookingChannelCode(bookingChannelCode).RatePlanCategory(ratePlanCategory).RatePlanCode(ratePlanCode).RoomClass(roomClass).RoomType(roomType).FilterCodeCategory(filterCodeCategory).FilterCode(filterCode).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get the Restriction history 



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/par"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID that identifies a single hotel property.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    chainName := "chainName_example" // string | The name of the hotel chain (e.g., Hilton, Marriott, Hyatt). (optional)
    date := time.Now() // string |  (optional)
    bookingChannelCode := "bookingChannelCode_example" // string | Indicates restriction is applicable to specified Booking Channel Code in conjunction with other codes, if specified. (optional)
    ratePlanCategory := "ratePlanCategory_example" // string | Indicates restriction is applicable to specified Rate Plan Category in conjunction with other codes, if specified. (optional)
    ratePlanCode := "ratePlanCode_example" // string | Indicates restriction is applicable to specified Rate Plan Code in conjunction with other codes, if specified. (optional)
    roomClass := "roomClass_example" // string | Indicates restriction is applicable to specified Room Category in conjunction with other codes, if specified. (optional)
    roomType := "roomType_example" // string | Indicates restriction is applicable to specified Room Type in conjunction with other codes, if specified. (optional)
    filterCodeCategory := "filterCodeCategory_example" // string | An enumerated type defining the Filter Code Categort or Type. Values: BookingChannelCode, RoomClass, RoomType, RatePlanCategory, RatePlanCode. (optional)
    filterCode := []string{"Inner_example"} // []string | Defines BookingChannelCode, RoomClass, RoomType, RatePlanCategory or RatePlanCode to filter the Restriction. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.AvailabilityAPI.GetRestrictionsHistory(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChainName(chainName).Date(date).BookingChannelCode(bookingChannelCode).RatePlanCategory(ratePlanCategory).RatePlanCode(ratePlanCode).RoomClass(roomClass).RoomType(roomType).FilterCodeCategory(filterCodeCategory).FilterCode(filterCode).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AvailabilityAPI.GetRestrictionsHistory``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetRestrictionsHistory`: RestrictionsHistory
    fmt.Fprintf(os.Stdout, "Response from `AvailabilityAPI.GetRestrictionsHistory`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetRestrictionsHistoryRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **chainName** | **string** | The name of the hotel chain (e.g., Hilton, Marriott, Hyatt). | 
 **date** | **string** |  | 
 **bookingChannelCode** | **string** | Indicates restriction is applicable to specified Booking Channel Code in conjunction with other codes, if specified. | 
 **ratePlanCategory** | **string** | Indicates restriction is applicable to specified Rate Plan Category in conjunction with other codes, if specified. | 
 **ratePlanCode** | **string** | Indicates restriction is applicable to specified Rate Plan Code in conjunction with other codes, if specified. | 
 **roomClass** | **string** | Indicates restriction is applicable to specified Room Category in conjunction with other codes, if specified. | 
 **roomType** | **string** | Indicates restriction is applicable to specified Room Type in conjunction with other codes, if specified. | 
 **filterCodeCategory** | **string** | An enumerated type defining the Filter Code Categort or Type. Values: BookingChannelCode, RoomClass, RoomType, RatePlanCategory, RatePlanCode. | 
 **filterCode** | **[]string** | Defines BookingChannelCode, RoomClass, RoomType, RatePlanCategory or RatePlanCode to filter the Restriction. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**RestrictionsHistory**](RestrictionsHistory.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostHurdleRates

> Status PostHurdleRates(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CreateHurdleRates(createHurdleRates).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create Hurdle Rates



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/par"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID that identifies a single hotel property.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    createHurdleRates := *openapiclient.NewCreateHurdleRates() // CreateHurdleRates | Request object for creating new Hurdle Rates.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.AvailabilityAPI.PostHurdleRates(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CreateHurdleRates(createHurdleRates).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AvailabilityAPI.PostHurdleRates``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostHurdleRates`: Status
    fmt.Fprintf(os.Stdout, "Response from `AvailabilityAPI.PostHurdleRates`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostHurdleRatesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **createHurdleRates** | [**CreateHurdleRates**](CreateHurdleRates.md) | Request object for creating new Hurdle Rates. | 
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


## PostRestriction

> Status PostRestriction(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CreateRestriction(createRestriction).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create a restriction



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/par"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID that identifies a single hotel property.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    createRestriction := *openapiclient.NewCreateRestriction() // CreateRestriction | Request object for creating a new restriction.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.AvailabilityAPI.PostRestriction(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CreateRestriction(createRestriction).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AvailabilityAPI.PostRestriction``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostRestriction`: Status
    fmt.Fprintf(os.Stdout, "Response from `AvailabilityAPI.PostRestriction`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostRestrictionRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **createRestriction** | [**CreateRestriction**](CreateRestriction.md) | Request object for creating a new restriction. | 
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


## PutHurdleRates

> ChangeHurdleRatesDetails PutHurdleRates(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChangeHurdleRates(changeHurdleRates).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change Hurdle Rates



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/par"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID that identifies a single hotel property.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    changeHurdleRates := *openapiclient.NewChangeHurdleRates() // ChangeHurdleRates | Request object for changing existing Hurdle Rates.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.AvailabilityAPI.PutHurdleRates(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChangeHurdleRates(changeHurdleRates).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AvailabilityAPI.PutHurdleRates``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutHurdleRates`: ChangeHurdleRatesDetails
    fmt.Fprintf(os.Stdout, "Response from `AvailabilityAPI.PutHurdleRates`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutHurdleRatesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **changeHurdleRates** | [**ChangeHurdleRates**](ChangeHurdleRates.md) | Request object for changing existing Hurdle Rates. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ChangeHurdleRatesDetails**](ChangeHurdleRatesDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ValidateReservationGuarantees

> ReservationGuaranteesPolicies ValidateReservationGuarantees(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ValidateReservationGuarantees(validateReservationGuarantees).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Reservation Guarantee 



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/par"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID that identifies a single hotel property.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    validateReservationGuarantees := *openapiclient.NewValidateReservationGuarantees() // ValidateReservationGuarantees | Request object to fetch reservation guarantees.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.AvailabilityAPI.ValidateReservationGuarantees(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ValidateReservationGuarantees(validateReservationGuarantees).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AvailabilityAPI.ValidateReservationGuarantees``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ValidateReservationGuarantees`: ReservationGuaranteesPolicies
    fmt.Fprintf(os.Stdout, "Response from `AvailabilityAPI.ValidateReservationGuarantees`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiValidateReservationGuaranteesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **validateReservationGuarantees** | [**ValidateReservationGuarantees**](ValidateReservationGuarantees.md) | Request object to fetch reservation guarantees. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ReservationGuaranteesPolicies**](ReservationGuaranteesPolicies.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


# \RatePlanApi

All URIs are relative to */rtp/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**DeleteBestAvailableRates**](RatePlanApi.md#DeleteBestAvailableRates) | **Delete** /hotels/{hotelId}/bestavailablerates | Delete Best Available Rates
[**DeleteRatePlanSchedules**](RatePlanApi.md#DeleteRatePlanSchedules) | **Delete** /hotels/{hotelId}/ratePlans/{ratePlanCode}/schedules | Delete rate plan schedule
[**GetBestAvailableRates**](RatePlanApi.md#GetBestAvailableRates) | **Get** /hotels/{hotelId}/bestavailablerates | Fetch Best Available Rates
[**GetNegotiatedRates**](RatePlanApi.md#GetNegotiatedRates) | **Get** /hotels/{hotelId}/negotiatedRates | Get negotiated rates and profiles 
[**GetNegotiatedRatesForGivenHotelAndRate**](RatePlanApi.md#GetNegotiatedRatesForGivenHotelAndRate) | **Get** /hotels/{hotelId}/negotiatedRates/{rateCode}/profiles | Fetch Negotiated Rates
[**GetNegotiatedRatesForGivenProfile**](RatePlanApi.md#GetNegotiatedRatesForGivenProfile) | **Get** /profiles/{profileId}/negotiatedRates | Get negotiated rate details for given profile
[**GetPackages**](RatePlanApi.md#GetPackages) | **Get** /packages | Get Packages
[**GetRatePlan**](RatePlanApi.md#GetRatePlan) | **Get** /hotels/{hotelId}/ratePlans | Get rate plan
[**GetRatePlanSchedules**](RatePlanApi.md#GetRatePlanSchedules) | **Get** /hotels/{hotelId}/ratePlans/{ratePlanCode}/schedules | Get rate plan schedules
[**GetRatePlans**](RatePlanApi.md#GetRatePlans) | **Get** /ratePlans | Get rate plans
[**PostBestAvailableRates**](RatePlanApi.md#PostBestAvailableRates) | **Post** /hotels/{hotelId}/bestavailablerates | Create a Best Available Rates
[**PostNegotiatedRates**](RatePlanApi.md#PostNegotiatedRates) | **Post** /hotels/{hotelId}/negotiatedRates | Create negotiated rates 
[**PutNegotiatedRates**](RatePlanApi.md#PutNegotiatedRates) | **Put** /hotels/{hotelId}/negotiatedRates/{rateCode} | Change negotiated rates 



## DeleteBestAvailableRates

> Status DeleteBestAvailableRates(ctx, hotelId).Code(code).End(end).Start(start).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Friday(friday).Monday(monday).Saturday(saturday).Sunday(sunday).Thursday(thursday).Tuesday(tuesday).Wednesday(wednesday).LOS1(lOS1).LOS2(lOS2).LOS3(lOS3).LOS4(lOS4).LOS5(lOS5).LOS6(lOS6).LOS7(lOS7).LOS8(lOS8).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete Best Available Rates



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/rtp"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID that identifies a single hotel property.
    code := []string{"Inner_example"} // []string | 
    end := time.Now() // string | The ending value of the date range.
    start := time.Now() // string | The starting value of the date range.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    friday := true // bool |  (optional)
    monday := true // bool |  (optional)
    saturday := true // bool |  (optional)
    sunday := true // bool |  (optional)
    thursday := true // bool |  (optional)
    tuesday := true // bool |  (optional)
    wednesday := true // bool |  (optional)
    lOS1 := true // bool | Indicates Length of Stay 1 configuration. (optional)
    lOS2 := true // bool | Indicates Length of Stay 2 configuration. (optional)
    lOS3 := true // bool | Indicates Length of Stay 3 configuration. (optional)
    lOS4 := true // bool | Indicates Length of Stay 4 configuration. (optional)
    lOS5 := true // bool | Indicates Length of Stay 5 configuration. (optional)
    lOS6 := true // bool | Indicates Length of Stay 6 configuration. (optional)
    lOS7 := true // bool | Indicates Length of Stay 7 configuration. (optional)
    lOS8 := true // bool | Indicates Length of Stay 8 configuration. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RatePlanApi.DeleteBestAvailableRates(context.Background(), hotelId).Code(code).End(end).Start(start).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Friday(friday).Monday(monday).Saturday(saturday).Sunday(sunday).Thursday(thursday).Tuesday(tuesday).Wednesday(wednesday).LOS1(lOS1).LOS2(lOS2).LOS3(lOS3).LOS4(lOS4).LOS5(lOS5).LOS6(lOS6).LOS7(lOS7).LOS8(lOS8).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RatePlanApi.DeleteBestAvailableRates``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteBestAvailableRates`: Status
    fmt.Fprintf(os.Stdout, "Response from `RatePlanApi.DeleteBestAvailableRates`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteBestAvailableRatesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **code** | **[]string** |  | 
 **end** | **string** | The ending value of the date range. | 
 **start** | **string** | The starting value of the date range. | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **friday** | **bool** |  | 
 **monday** | **bool** |  | 
 **saturday** | **bool** |  | 
 **sunday** | **bool** |  | 
 **thursday** | **bool** |  | 
 **tuesday** | **bool** |  | 
 **wednesday** | **bool** |  | 
 **lOS1** | **bool** | Indicates Length of Stay 1 configuration. | 
 **lOS2** | **bool** | Indicates Length of Stay 2 configuration. | 
 **lOS3** | **bool** | Indicates Length of Stay 3 configuration. | 
 **lOS4** | **bool** | Indicates Length of Stay 4 configuration. | 
 **lOS5** | **bool** | Indicates Length of Stay 5 configuration. | 
 **lOS6** | **bool** | Indicates Length of Stay 6 configuration. | 
 **lOS7** | **bool** | Indicates Length of Stay 7 configuration. | 
 **lOS8** | **bool** | Indicates Length of Stay 8 configuration. | 
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


## DeleteRatePlanSchedules

> Status DeleteRatePlanSchedules(ctx, ratePlanCode, hotelId).RatePlanScheduleIds(ratePlanScheduleIds).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete rate plan schedule



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rtp"
)

func main() {
    ratePlanCode := "ratePlanCode_example" // string | Rate Plan Code.
    hotelId := "hotelId_example" // string | Unique ID that identifies a single hotel property.
    ratePlanScheduleIds := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RatePlanApi.DeleteRatePlanSchedules(context.Background(), ratePlanCode, hotelId).RatePlanScheduleIds(ratePlanScheduleIds).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RatePlanApi.DeleteRatePlanSchedules``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteRatePlanSchedules`: Status
    fmt.Fprintf(os.Stdout, "Response from `RatePlanApi.DeleteRatePlanSchedules`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**ratePlanCode** | **string** | Rate Plan Code. | 
**hotelId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteRatePlanSchedulesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **ratePlanScheduleIds** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
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


## GetBestAvailableRates

> GetBestAvailableRatesDetails GetBestAvailableRates(ctx, hotelId).StartDay(startDay).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).RateCode(rateCode).EndDay(endDay).DaysOfWeek(daysOfWeek).LengthOfStay(lengthOfStay).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Fetch Best Available Rates



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/rtp"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID that identifies a single hotel property.
    startDay := time.Now() // string | The starting value of the date range.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    offset := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional) (default to 0)
    rateCode := []string{"Inner_example"} // []string |  (optional)
    endDay := time.Now() // string | The ending value of the date range. (optional)
    daysOfWeek := []string{"DaysOfWeek_example"} // []string | Allowed values for the days of week type. (optional)
    lengthOfStay := []string{"LengthOfStay_example"} // []string | Allowed values for length stay type. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RatePlanApi.GetBestAvailableRates(context.Background(), hotelId).StartDay(startDay).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).RateCode(rateCode).EndDay(endDay).DaysOfWeek(daysOfWeek).LengthOfStay(lengthOfStay).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RatePlanApi.GetBestAvailableRates``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetBestAvailableRates`: GetBestAvailableRatesDetails
    fmt.Fprintf(os.Stdout, "Response from `RatePlanApi.GetBestAvailableRates`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetBestAvailableRatesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **startDay** | **string** | The starting value of the date range. | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **offset** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [default to 0]
 **rateCode** | **[]string** |  | 
 **endDay** | **string** | The ending value of the date range. | 
 **daysOfWeek** | **[]string** | Allowed values for the days of week type. | 
 **lengthOfStay** | **[]string** | Allowed values for length stay type. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**GetBestAvailableRatesDetails**](GetBestAvailableRatesDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetNegotiatedRates

> NegotiatedRates GetNegotiatedRates(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).StartDate(startDate).EndDate(endDate).IncludeInactiveNegotiatedRates(includeInactiveNegotiatedRates).FetchInstructionsLimit(fetchInstructionsLimit).FetchInstructions(fetchInstructions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get negotiated rates and profiles 



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/rtp"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID that identifies a single hotel property.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    startDate := time.Now() // string | Start Date. (optional)
    endDate := time.Now() // string | End Date. (optional)
    includeInactiveNegotiatedRates := true // bool | Inactive negotiated rates. (optional)
    fetchInstructionsLimit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    fetchInstructions := []string{"FetchInstructions_example"} // []string | Simple type for negotiated rates instructions that can be used in requests for partial operations. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RatePlanApi.GetNegotiatedRates(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).StartDate(startDate).EndDate(endDate).IncludeInactiveNegotiatedRates(includeInactiveNegotiatedRates).FetchInstructionsLimit(fetchInstructionsLimit).FetchInstructions(fetchInstructions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RatePlanApi.GetNegotiatedRates``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetNegotiatedRates`: NegotiatedRates
    fmt.Fprintf(os.Stdout, "Response from `RatePlanApi.GetNegotiatedRates`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetNegotiatedRatesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **startDate** | **string** | Start Date. | 
 **endDate** | **string** | End Date. | 
 **includeInactiveNegotiatedRates** | **bool** | Inactive negotiated rates. | 
 **fetchInstructionsLimit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **fetchInstructions** | **[]string** | Simple type for negotiated rates instructions that can be used in requests for partial operations. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**NegotiatedRates**](NegotiatedRates.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetNegotiatedRatesForGivenHotelAndRate

> NegotiatedRates GetNegotiatedRatesForGivenHotelAndRate(ctx, rateCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).StartDate(startDate).EndDate(endDate).IncludeInactiveNegotiatedRates(includeInactiveNegotiatedRates).FetchInstructionsLimit(fetchInstructionsLimit).FetchInstructions(fetchInstructions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Fetch Negotiated Rates



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/rtp"
)

func main() {
    rateCode := "rateCode_example" // string | Rate Plan Code.
    hotelId := "hotelId_example" // string | Unique ID that identifies a single hotel property.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    startDate := time.Now() // string | Start Date. (optional)
    endDate := time.Now() // string | End Date. (optional)
    includeInactiveNegotiatedRates := true // bool | Inactive negotiated rates. (optional)
    fetchInstructionsLimit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    fetchInstructions := []string{"FetchInstructions_example"} // []string | Simple type for negotiated rates instructions that can be used in requests for partial operations. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RatePlanApi.GetNegotiatedRatesForGivenHotelAndRate(context.Background(), rateCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).StartDate(startDate).EndDate(endDate).IncludeInactiveNegotiatedRates(includeInactiveNegotiatedRates).FetchInstructionsLimit(fetchInstructionsLimit).FetchInstructions(fetchInstructions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RatePlanApi.GetNegotiatedRatesForGivenHotelAndRate``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetNegotiatedRatesForGivenHotelAndRate`: NegotiatedRates
    fmt.Fprintf(os.Stdout, "Response from `RatePlanApi.GetNegotiatedRatesForGivenHotelAndRate`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**rateCode** | **string** | Rate Plan Code. | 
**hotelId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetNegotiatedRatesForGivenHotelAndRateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **startDate** | **string** | Start Date. | 
 **endDate** | **string** | End Date. | 
 **includeInactiveNegotiatedRates** | **bool** | Inactive negotiated rates. | 
 **fetchInstructionsLimit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **fetchInstructions** | **[]string** | Simple type for negotiated rates instructions that can be used in requests for partial operations. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**NegotiatedRates**](NegotiatedRates.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetNegotiatedRatesForGivenProfile

> NegotiatedRates GetNegotiatedRatesForGivenProfile(ctx, profileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).StartDate(startDate).EndDate(endDate).IncludeInactiveNegotiatedRates(includeInactiveNegotiatedRates).FetchInstructionsLimit(fetchInstructionsLimit).FetchInstructions(fetchInstructions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get negotiated rate details for given profile



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/rtp"
)

func main() {
    profileId := "profileId_example" // string | Unique ID that identifies a single hotel property.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    startDate := time.Now() // string | Start Date. (optional)
    endDate := time.Now() // string | End Date. (optional)
    includeInactiveNegotiatedRates := true // bool | Inactive negotiated rates. (optional)
    fetchInstructionsLimit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    fetchInstructions := []string{"FetchInstructions_example"} // []string | Simple type for negotiated rates instructions that can be used in requests for partial operations. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RatePlanApi.GetNegotiatedRatesForGivenProfile(context.Background(), profileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).StartDate(startDate).EndDate(endDate).IncludeInactiveNegotiatedRates(includeInactiveNegotiatedRates).FetchInstructionsLimit(fetchInstructionsLimit).FetchInstructions(fetchInstructions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RatePlanApi.GetNegotiatedRatesForGivenProfile``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetNegotiatedRatesForGivenProfile`: NegotiatedRates
    fmt.Fprintf(os.Stdout, "Response from `RatePlanApi.GetNegotiatedRatesForGivenProfile`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**profileId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetNegotiatedRatesForGivenProfileRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **startDate** | **string** | Start Date. | 
 **endDate** | **string** | End Date. | 
 **includeInactiveNegotiatedRates** | **bool** | Inactive negotiated rates. | 
 **fetchInstructionsLimit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **fetchInstructions** | **[]string** | Simple type for negotiated rates instructions that can be used in requests for partial operations. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**NegotiatedRates**](NegotiatedRates.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetPackages

> PackagesInfo GetPackages(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).HotelId(hotelId).PackageCode(packageCode).DescriptionWildCard(descriptionWildCard).StartDate(startDate).EndDate(endDate).Adults(adults).Children(children).IncludeGroup(includeGroup).SellSeparate(sellSeparate).TicketPostingRhythm(ticketPostingRhythm).FetchInstructions(fetchInstructions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Packages



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/rtp"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    hotelId := []string{"Inner_example"} // []string | Hotel code. (optional)
    packageCode := []string{"Inner_example"} // []string |  (optional)
    descriptionWildCard := "descriptionWildCard_example" // string | The description or a part of the description based on which results should be filtered. (optional)
    startDate := time.Now() // string | Start Date for pricing schedule. (optional)
    endDate := time.Now() // string | End Date for pricing schedule. (optional)
    adults := int32(56) // int32 | Number of adults for pricing schedule calculation. (optional)
    children := int32(56) // int32 | Number of children for pricing schedule calculation. (optional)
    includeGroup := true // bool | Indicates if Group Packages will be fetched. (optional)
    sellSeparate := true // bool | Indicates if Only Sell Separate Packages will be fetched, if not specified, it will ignore the criteria. (optional)
    ticketPostingRhythm := true // bool | Indicates if Only Ticket Posting Rhythm will be fetched, if not specified, it will ignore the criteria. (optional)
    fetchInstructions := []string{"FetchInstructions_example"} // []string | Simple type for package instructions that can be used in requests for partial operations. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RatePlanApi.GetPackages(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).HotelId(hotelId).PackageCode(packageCode).DescriptionWildCard(descriptionWildCard).StartDate(startDate).EndDate(endDate).Adults(adults).Children(children).IncludeGroup(includeGroup).SellSeparate(sellSeparate).TicketPostingRhythm(ticketPostingRhythm).FetchInstructions(fetchInstructions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RatePlanApi.GetPackages``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetPackages`: PackagesInfo
    fmt.Fprintf(os.Stdout, "Response from `RatePlanApi.GetPackages`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetPackagesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **hotelId** | **[]string** | Hotel code. | 
 **packageCode** | **[]string** |  | 
 **descriptionWildCard** | **string** | The description or a part of the description based on which results should be filtered. | 
 **startDate** | **string** | Start Date for pricing schedule. | 
 **endDate** | **string** | End Date for pricing schedule. | 
 **adults** | **int32** | Number of adults for pricing schedule calculation. | 
 **children** | **int32** | Number of children for pricing schedule calculation. | 
 **includeGroup** | **bool** | Indicates if Group Packages will be fetched. | 
 **sellSeparate** | **bool** | Indicates if Only Sell Separate Packages will be fetched, if not specified, it will ignore the criteria. | 
 **ticketPostingRhythm** | **bool** | Indicates if Only Ticket Posting Rhythm will be fetched, if not specified, it will ignore the criteria. | 
 **fetchInstructions** | **[]string** | Simple type for package instructions that can be used in requests for partial operations. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**PackagesInfo**](PackagesInfo.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetRatePlan

> RatePlanInfo GetRatePlan(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RatePlanCode(ratePlanCode).FetchInstructions(fetchInstructions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get rate plan



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rtp"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID that identifies a single hotel property.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    ratePlanCode := "ratePlanCode_example" // string | Rate plan code. (optional)
    fetchInstructions := []string{"FetchInstructions_example"} // []string | Simple type for Rate plan codes instructions that can be used in requests for partial operations. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RatePlanApi.GetRatePlan(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RatePlanCode(ratePlanCode).FetchInstructions(fetchInstructions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RatePlanApi.GetRatePlan``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetRatePlan`: RatePlanInfo
    fmt.Fprintf(os.Stdout, "Response from `RatePlanApi.GetRatePlan`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetRatePlanRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **ratePlanCode** | **string** | Rate plan code. | 
 **fetchInstructions** | **[]string** | Simple type for Rate plan codes instructions that can be used in requests for partial operations. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**RatePlanInfo**](RatePlanInfo.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetRatePlanSchedules

> RatePlanSchedulesInfo GetRatePlanSchedules(ctx, ratePlanCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ExcludeRatePlanPackage(excludeRatePlanPackage).Limit(limit).TierId(tierId).RatePlanScheduleId(ratePlanScheduleId).RatePlanScheduleIdType(ratePlanScheduleIdType).StartDate(startDate).EndDate(endDate).Duration(duration).RoomType(roomType).RoomClass(roomClass).IncludeInactive(includeInactive).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get rate plan schedules



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/rtp"
)

func main() {
    ratePlanCode := "ratePlanCode_example" // string | Rate Plan Code.
    hotelId := "hotelId_example" // string | Unique ID that identifies a single hotel property.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    excludeRatePlanPackage := true // bool | Exclude the List of Pricing Schedule Packages from the response. (optional)
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    tierId := int32(56) // int32 |  (optional)
    ratePlanScheduleId := "ratePlanScheduleId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    ratePlanScheduleIdType := "ratePlanScheduleIdType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    startDate := time.Now() // string |  (optional)
    endDate := time.Now() // string |  (optional)
    duration := "duration_example" // string |  (optional)
    roomType := []string{"Inner_example"} // []string | Room Type. (optional)
    roomClass := []string{"Inner_example"} // []string | Room Class. (optional)
    includeInactive := true // bool | Include inactive rate schedules in the fetch result. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RatePlanApi.GetRatePlanSchedules(context.Background(), ratePlanCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ExcludeRatePlanPackage(excludeRatePlanPackage).Limit(limit).TierId(tierId).RatePlanScheduleId(ratePlanScheduleId).RatePlanScheduleIdType(ratePlanScheduleIdType).StartDate(startDate).EndDate(endDate).Duration(duration).RoomType(roomType).RoomClass(roomClass).IncludeInactive(includeInactive).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RatePlanApi.GetRatePlanSchedules``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetRatePlanSchedules`: RatePlanSchedulesInfo
    fmt.Fprintf(os.Stdout, "Response from `RatePlanApi.GetRatePlanSchedules`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**ratePlanCode** | **string** | Rate Plan Code. | 
**hotelId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetRatePlanSchedulesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **excludeRatePlanPackage** | **bool** | Exclude the List of Pricing Schedule Packages from the response. | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **tierId** | **int32** |  | 
 **ratePlanScheduleId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **ratePlanScheduleIdType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **startDate** | **string** |  | 
 **endDate** | **string** |  | 
 **duration** | **string** |  | 
 **roomType** | **[]string** | Room Type. | 
 **roomClass** | **[]string** | Room Class. | 
 **includeInactive** | **bool** | Include inactive rate schedules in the fetch result. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**RatePlanSchedulesInfo**](RatePlanSchedulesInfo.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetRatePlans

> RatePlansSummary GetRatePlans(ctx).HotelId(hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).IncludeRateInformation(includeRateInformation).Limit(limit).Offset(offset).RatePlanCode(ratePlanCode).RateCategory(rateCategory).SellDate(sellDate).DisplaySet(displaySet).Id(id).IdExtension(idExtension).IdContext(idContext).Type_(type_).AttributeName(attributeName).OrderType(orderType).IncludeInactive(includeInactive).DayUseOnly(dayUseOnly).ApprovalStatus(approvalStatus).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get rate plans



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/rtp"
)

func main() {
    hotelId := []string{"Inner_example"} // []string | Hotel code.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    includeRateInformation := true // bool | Indicates whether rate plan short and long information should be included in the fetched results. (optional)
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    offset := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional) (default to 0)
    ratePlanCode := []string{"Inner_example"} // []string | Rate Plan code. (optional)
    rateCategory := []string{"Inner_example"} // []string | Rate category of the rate plan. (optional)
    sellDate := time.Now() // string | Sell date of the rate plan. (optional)
    displaySet := "displaySet_example" // string | Display set for the rate plan. (optional)
    id := "id_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    idExtension := int32(56) // int32 | Additional identifying value assigned by the creating system. (optional)
    idContext := "idContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    type_ := "type__example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    attributeName := []string{"Inner_example"} // []string |  (optional)
    orderType := []string{"OrderType_example"} // []string |  (optional)
    includeInactive := true // bool | Include or not include inactive rate codes. (optional)
    dayUseOnly := true // bool | Indicates to only fetch rate plans flagged as Day Use. (optional)
    approvalStatus := "approvalStatus_example" // string | Indicates that the Rate Plan is approved for selling. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RatePlanApi.GetRatePlans(context.Background()).HotelId(hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).IncludeRateInformation(includeRateInformation).Limit(limit).Offset(offset).RatePlanCode(ratePlanCode).RateCategory(rateCategory).SellDate(sellDate).DisplaySet(displaySet).Id(id).IdExtension(idExtension).IdContext(idContext).Type_(type_).AttributeName(attributeName).OrderType(orderType).IncludeInactive(includeInactive).DayUseOnly(dayUseOnly).ApprovalStatus(approvalStatus).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RatePlanApi.GetRatePlans``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetRatePlans`: RatePlansSummary
    fmt.Fprintf(os.Stdout, "Response from `RatePlanApi.GetRatePlans`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetRatePlansRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hotelId** | **[]string** | Hotel code. | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **includeRateInformation** | **bool** | Indicates whether rate plan short and long information should be included in the fetched results. | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **offset** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [default to 0]
 **ratePlanCode** | **[]string** | Rate Plan code. | 
 **rateCategory** | **[]string** | Rate category of the rate plan. | 
 **sellDate** | **string** | Sell date of the rate plan. | 
 **displaySet** | **string** | Display set for the rate plan. | 
 **id** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **idExtension** | **int32** | Additional identifying value assigned by the creating system. | 
 **idContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **type_** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **attributeName** | **[]string** |  | 
 **orderType** | **[]string** |  | 
 **includeInactive** | **bool** | Include or not include inactive rate codes. | 
 **dayUseOnly** | **bool** | Indicates to only fetch rate plans flagged as Day Use. | 
 **approvalStatus** | **string** | Indicates that the Rate Plan is approved for selling. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**RatePlansSummary**](RatePlansSummary.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostBestAvailableRates

> Status PostBestAvailableRates(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CreateBestAvailableRates(createBestAvailableRates).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create a Best Available Rates



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rtp"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID that identifies a single hotel property.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    createBestAvailableRates := *openapiclient.NewPostBestAvailableRatesRequest() // PostBestAvailableRatesRequest | Request to create best available rates for rate code(s)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RatePlanApi.PostBestAvailableRates(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CreateBestAvailableRates(createBestAvailableRates).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RatePlanApi.PostBestAvailableRates``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostBestAvailableRates`: Status
    fmt.Fprintf(os.Stdout, "Response from `RatePlanApi.PostBestAvailableRates`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostBestAvailableRatesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **createBestAvailableRates** | [**PostBestAvailableRatesRequest**](PostBestAvailableRatesRequest.md) | Request to create best available rates for rate code(s) | 
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


## PostNegotiatedRates

> Status PostNegotiatedRates(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).NegotiatedRates(negotiatedRates).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create negotiated rates 



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rtp"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID that identifies a single hotel property.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    negotiatedRates := *openapiclient.NewPostNegotiatedRatesRequest() // PostNegotiatedRatesRequest | Request object for creating negotiated rates. Also this object creates new profile discounts for given negotiated rates.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RatePlanApi.PostNegotiatedRates(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).NegotiatedRates(negotiatedRates).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RatePlanApi.PostNegotiatedRates``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostNegotiatedRates`: Status
    fmt.Fprintf(os.Stdout, "Response from `RatePlanApi.PostNegotiatedRates`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostNegotiatedRatesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **negotiatedRates** | [**PostNegotiatedRatesRequest**](PostNegotiatedRatesRequest.md) | Request object for creating negotiated rates. Also this object creates new profile discounts for given negotiated rates. | 
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


## PutNegotiatedRates

> NegotiatedRatesDetails PutNegotiatedRates(ctx, rateCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).NegotiatedRates(negotiatedRates).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change negotiated rates 



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rtp"
)

func main() {
    rateCode := "rateCode_example" // string | Rate Plan Code.
    hotelId := "hotelId_example" // string | Unique ID that identifies a single hotel property.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    negotiatedRates := *openapiclient.NewPostNegotiatedRatesRequest() // PostNegotiatedRatesRequest | Request object for changing negotiated rates. This object can be used to manage the negotiated rates and profile discounts. Profile discounts can be created/updated/deleted.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RatePlanApi.PutNegotiatedRates(context.Background(), rateCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).NegotiatedRates(negotiatedRates).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RatePlanApi.PutNegotiatedRates``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutNegotiatedRates`: NegotiatedRatesDetails
    fmt.Fprintf(os.Stdout, "Response from `RatePlanApi.PutNegotiatedRates`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**rateCode** | **string** | Rate Plan Code. | 
**hotelId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutNegotiatedRatesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **negotiatedRates** | [**PostNegotiatedRatesRequest**](PostNegotiatedRatesRequest.md) | Request object for changing negotiated rates. This object can be used to manage the negotiated rates and profile discounts. Profile discounts can be created/updated/deleted. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**NegotiatedRatesDetails**](NegotiatedRatesDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


# \RatePlanAsyncAPI

All URIs are relative to */rtp/async/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetBestAvailableRatePlans**](RatePlanAsyncAPI.md#GetBestAvailableRatePlans) | **Get** /externalSystems/{extSystemCode}/hotels/{hotelId}/ratePlans/bestAvailableLOS/{requestId} | Get results of a daily rate plan schedule process
[**GetBestAvailableRatePlansProcessStatus**](RatePlanAsyncAPI.md#GetBestAvailableRatePlansProcessStatus) | **Head** /externalSystems/{extSystemCode}/hotels/{hotelId}/ratePlans/bestAvailableLOS/{requestId} | Check status of setting best available rate plans process
[**GetDailyRatePlanSchedules**](RatePlanAsyncAPI.md#GetDailyRatePlanSchedules) | **Get** /externalSystems/{extSystemCode}/hotels/{hotelId}/ratePlans/dailySchedules/{requestId} | Get results of a daily rate plan schedule process
[**GetDailyRatePlanSchedulesProcessStatus**](RatePlanAsyncAPI.md#GetDailyRatePlanSchedulesProcessStatus) | **Head** /externalSystems/{extSystemCode}/hotels/{hotelId}/ratePlans/dailySchedules/{requestId} | Check status of setting daily rate plan schedule process
[**GetHurdleRates**](RatePlanAsyncAPI.md#GetHurdleRates) | **Get** /externalSystems/{extSystemCode}/hotels/{hotelId}/rates/hurdles/{requestId} | This API facilitates fetching of status for configured hurdle rates.
[**GetHurdleRatesProcessStatus**](RatePlanAsyncAPI.md#GetHurdleRatesProcessStatus) | **Head** /externalSystems/{extSystemCode}/hotels/{hotelId}/rates/hurdles/{requestId} | This API returns the status of asynchronous process scheduled for given id.
[**GetRatePlansHeaders**](RatePlanAsyncAPI.md#GetRatePlansHeaders) | **Get** /externalSystems/{extSystemCode}/hotels/{hotelId}/ratePlans/headers/{requestId} | This API facilitates fetching of status for configured rate plans.
[**GetRatePlansHeadersProcessStatus**](RatePlanAsyncAPI.md#GetRatePlansHeadersProcessStatus) | **Head** /externalSystems/{extSystemCode}/hotels/{hotelId}/ratePlans/headers/{requestId} | This API returns the status of asynchronous process scheduled for given id.
[**StartHurdleRatesProcess**](RatePlanAsyncAPI.md#StartHurdleRatesProcess) | **Post** /externalSystems/{extSystemCode}/hotels/{hotelId}/rates/hurdles | Operation to configure hurdle rates.
[**StartSetBestAvailableRatePlansProcess**](RatePlanAsyncAPI.md#StartSetBestAvailableRatePlansProcess) | **Post** /externalSystems/{extSystemCode}/hotels/{hotelId}/ratePlans/bestAvailableLOS | API to initiate setting best available rate plans process.
[**StartSetDailyRatePlanSchedulesProcess**](RatePlanAsyncAPI.md#StartSetDailyRatePlanSchedulesProcess) | **Post** /externalSystems/{extSystemCode}/hotels/{hotelId}/ratePlans/dailySchedules | API to initiate rate plans&amp;apos; price update process
[**StartSetRatePlansHeadersProcess**](RatePlanAsyncAPI.md#StartSetRatePlansHeadersProcess) | **Post** /externalSystems/{extSystemCode}/hotels/{hotelId}/ratePlans/headers | Operation to start the update of rate header flags. Recommendation is not to exceed 250 rate codes in one request.



## GetBestAvailableRatePlans

> BestAvailableRatePlansStatus GetBestAvailableRatePlans(ctx, requestId, hotelId, extSystemCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AcceptLanguage(acceptLanguage).Execute()

Get results of a daily rate plan schedule process



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rtpasync"
)

func main() {
    requestId := "requestId_example" // string | 
    hotelId := "hotelId_example" // string | 
    extSystemCode := "extSystemCode_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RatePlanAsyncAPI.GetBestAvailableRatePlans(context.Background(), requestId, hotelId, extSystemCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RatePlanAsyncAPI.GetBestAvailableRatePlans``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetBestAvailableRatePlans`: BestAvailableRatePlansStatus
    fmt.Fprintf(os.Stdout, "Response from `RatePlanAsyncAPI.GetBestAvailableRatePlans`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**requestId** | **string** |  | 
**hotelId** | **string** |  | 
**extSystemCode** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetBestAvailableRatePlansRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**BestAvailableRatePlansStatus**](BestAvailableRatePlansStatus.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetBestAvailableRatePlansProcessStatus

> GetBestAvailableRatePlansProcessStatus(ctx, requestId, extSystemCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AcceptLanguage(acceptLanguage).Execute()

Check status of setting best available rate plans process



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rtpasync"
)

func main() {
    requestId := "requestId_example" // string | 
    extSystemCode := "extSystemCode_example" // string | 
    hotelId := "hotelId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    r, err := apiClient.RatePlanAsyncAPI.GetBestAvailableRatePlansProcessStatus(context.Background(), requestId, extSystemCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RatePlanAsyncAPI.GetBestAvailableRatePlansProcessStatus``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**requestId** | **string** |  | 
**extSystemCode** | **string** |  | 
**hotelId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetBestAvailableRatePlansProcessStatusRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **acceptLanguage** | **string** | Language code | 

### Return type

 (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetDailyRatePlanSchedules

> DailyRatePlanSchedulesStatus GetDailyRatePlanSchedules(ctx, requestId, hotelId, extSystemCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AcceptLanguage(acceptLanguage).Execute()

Get results of a daily rate plan schedule process



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rtpasync"
)

func main() {
    requestId := "requestId_example" // string | 
    hotelId := "hotelId_example" // string | 
    extSystemCode := "extSystemCode_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RatePlanAsyncAPI.GetDailyRatePlanSchedules(context.Background(), requestId, hotelId, extSystemCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RatePlanAsyncAPI.GetDailyRatePlanSchedules``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetDailyRatePlanSchedules`: DailyRatePlanSchedulesStatus
    fmt.Fprintf(os.Stdout, "Response from `RatePlanAsyncAPI.GetDailyRatePlanSchedules`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**requestId** | **string** |  | 
**hotelId** | **string** |  | 
**extSystemCode** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetDailyRatePlanSchedulesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**DailyRatePlanSchedulesStatus**](DailyRatePlanSchedulesStatus.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetDailyRatePlanSchedulesProcessStatus

> GetDailyRatePlanSchedulesProcessStatus(ctx, requestId, extSystemCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AcceptLanguage(acceptLanguage).Execute()

Check status of setting daily rate plan schedule process



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rtpasync"
)

func main() {
    requestId := "requestId_example" // string | 
    extSystemCode := "extSystemCode_example" // string | 
    hotelId := "hotelId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    r, err := apiClient.RatePlanAsyncAPI.GetDailyRatePlanSchedulesProcessStatus(context.Background(), requestId, extSystemCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RatePlanAsyncAPI.GetDailyRatePlanSchedulesProcessStatus``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**requestId** | **string** |  | 
**extSystemCode** | **string** |  | 
**hotelId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetDailyRatePlanSchedulesProcessStatusRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **acceptLanguage** | **string** | Language code | 

### Return type

 (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetHurdleRates

> HurdleRatesStatus GetHurdleRates(ctx, hotelId, extSystemCode, requestId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AcceptLanguage(acceptLanguage).Execute()

This API facilitates fetching of status for configured hurdle rates.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rtpasync"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of Hotel in OPERA.
    extSystemCode := "extSystemCode_example" // string | Unique code of the external system.
    requestId := "requestId_example" // string | Unique ID to fetch status of configured hurdle rates.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RatePlanAsyncAPI.GetHurdleRates(context.Background(), hotelId, extSystemCode, requestId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RatePlanAsyncAPI.GetHurdleRates``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetHurdleRates`: HurdleRatesStatus
    fmt.Fprintf(os.Stdout, "Response from `RatePlanAsyncAPI.GetHurdleRates`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of Hotel in OPERA. | 
**extSystemCode** | **string** | Unique code of the external system. | 
**requestId** | **string** | Unique ID to fetch status of configured hurdle rates. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetHurdleRatesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**HurdleRatesStatus**](HurdleRatesStatus.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetHurdleRatesProcessStatus

> GetHurdleRatesProcessStatus(ctx, requestId, extSystemCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AcceptLanguage(acceptLanguage).Execute()

This API returns the status of asynchronous process scheduled for given id.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rtpasync"
)

func main() {
    requestId := "requestId_example" // string | Unique ID to fetch status of configured hurdle rates.
    extSystemCode := "extSystemCode_example" // string | Unique code of the external system.
    hotelId := "hotelId_example" // string | Unique ID of Hotel in OPERA.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    r, err := apiClient.RatePlanAsyncAPI.GetHurdleRatesProcessStatus(context.Background(), requestId, extSystemCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RatePlanAsyncAPI.GetHurdleRatesProcessStatus``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**requestId** | **string** | Unique ID to fetch status of configured hurdle rates. | 
**extSystemCode** | **string** | Unique code of the external system. | 
**hotelId** | **string** | Unique ID of Hotel in OPERA. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetHurdleRatesProcessStatusRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **acceptLanguage** | **string** | Language code | 

### Return type

 (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetRatePlansHeaders

> HurdleRatesStatus GetRatePlansHeaders(ctx, hotelId, extSystemCode, requestId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AcceptLanguage(acceptLanguage).Execute()

This API facilitates fetching of status for configured rate plans.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rtpasync"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of Hotel in OPERA.
    extSystemCode := "extSystemCode_example" // string | Unique code of the external system.
    requestId := "requestId_example" // string | Unique ID to fetch status of configured rate plans.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RatePlanAsyncAPI.GetRatePlansHeaders(context.Background(), hotelId, extSystemCode, requestId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RatePlanAsyncAPI.GetRatePlansHeaders``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetRatePlansHeaders`: HurdleRatesStatus
    fmt.Fprintf(os.Stdout, "Response from `RatePlanAsyncAPI.GetRatePlansHeaders`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of Hotel in OPERA. | 
**extSystemCode** | **string** | Unique code of the external system. | 
**requestId** | **string** | Unique ID to fetch status of configured rate plans. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetRatePlansHeadersRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**HurdleRatesStatus**](HurdleRatesStatus.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetRatePlansHeadersProcessStatus

> GetRatePlansHeadersProcessStatus(ctx, requestId, extSystemCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AcceptLanguage(acceptLanguage).Execute()

This API returns the status of asynchronous process scheduled for given id.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rtpasync"
)

func main() {
    requestId := "requestId_example" // string | Unique ID to fetch status of configured rate plans.
    extSystemCode := "extSystemCode_example" // string | Unique code of the external system.
    hotelId := "hotelId_example" // string | Unique ID of Hotel in OPERA.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    r, err := apiClient.RatePlanAsyncAPI.GetRatePlansHeadersProcessStatus(context.Background(), requestId, extSystemCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RatePlanAsyncAPI.GetRatePlansHeadersProcessStatus``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**requestId** | **string** | Unique ID to fetch status of configured rate plans. | 
**extSystemCode** | **string** | Unique code of the external system. | 
**hotelId** | **string** | Unique ID of Hotel in OPERA. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetRatePlansHeadersProcessStatusRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **acceptLanguage** | **string** | Language code | 

### Return type

 (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## StartHurdleRatesProcess

> StartHurdleRatesProcess(ctx, hotelId, extSystemCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HurdleRates(hurdleRates).AcceptLanguage(acceptLanguage).Execute()

Operation to configure hurdle rates.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rtpasync"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of the hotel in OPERA
    extSystemCode := "extSystemCode_example" // string | Unique code of the external system
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    hurdleRates := []openapiclient.HurdleRateType{*openapiclient.NewHurdleRateType()} // []HurdleRateType | Request for configuring hurdle rates.
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    r, err := apiClient.RatePlanAsyncAPI.StartHurdleRatesProcess(context.Background(), hotelId, extSystemCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HurdleRates(hurdleRates).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RatePlanAsyncAPI.StartHurdleRatesProcess``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel in OPERA | 
**extSystemCode** | **string** | Unique code of the external system | 

### Other Parameters

Other parameters are passed through a pointer to a apiStartHurdleRatesProcessRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **hurdleRates** | [**[]HurdleRateType**](HurdleRateType.md) | Request for configuring hurdle rates. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

 (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## StartSetBestAvailableRatePlansProcess

> StartSetBestAvailableRatePlansProcess(ctx, hotelId, extSystemCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BestAvailableRatePlans(bestAvailableRatePlans).AcceptLanguage(acceptLanguage).Execute()

API to initiate setting best available rate plans process.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rtpasync"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of the hotel in OPERA
    extSystemCode := "extSystemCode_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    bestAvailableRatePlans := *openapiclient.NewBestAvailableRatePlans() // BestAvailableRatePlans | Request for configuring best available rate plans.
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    r, err := apiClient.RatePlanAsyncAPI.StartSetBestAvailableRatePlansProcess(context.Background(), hotelId, extSystemCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BestAvailableRatePlans(bestAvailableRatePlans).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RatePlanAsyncAPI.StartSetBestAvailableRatePlansProcess``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel in OPERA | 
**extSystemCode** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiStartSetBestAvailableRatePlansProcessRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **bestAvailableRatePlans** | [**BestAvailableRatePlans**](BestAvailableRatePlans.md) | Request for configuring best available rate plans. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

 (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## StartSetDailyRatePlanSchedulesProcess

> StartSetDailyRatePlanSchedulesProcess(ctx, hotelId, extSystemCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).DailyRatePlanSchedules(dailyRatePlanSchedules).AcceptLanguage(acceptLanguage).Execute()

API to initiate rate plans&apos; price update process



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rtpasync"
)

func main() {
    hotelId := "hotelId_example" // string | 
    extSystemCode := "extSystemCode_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    dailyRatePlanSchedules := *openapiclient.NewDailyRatePlanSchedules() // DailyRatePlanSchedules | Request for configuring daily rate plan schedules.
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    r, err := apiClient.RatePlanAsyncAPI.StartSetDailyRatePlanSchedulesProcess(context.Background(), hotelId, extSystemCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).DailyRatePlanSchedules(dailyRatePlanSchedules).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RatePlanAsyncAPI.StartSetDailyRatePlanSchedulesProcess``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** |  | 
**extSystemCode** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiStartSetDailyRatePlanSchedulesProcessRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **dailyRatePlanSchedules** | [**DailyRatePlanSchedules**](DailyRatePlanSchedules.md) | Request for configuring daily rate plan schedules. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

 (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## StartSetRatePlansHeadersProcess

> StartSetRatePlansHeadersProcess(ctx, hotelId, extSystemCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RatePlan(ratePlan).AcceptLanguage(acceptLanguage).Execute()

Operation to start the update of rate header flags. Recommendation is not to exceed 250 rate codes in one request.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rtpasync"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of the hotel in OPERA
    extSystemCode := "extSystemCode_example" // string | Unique code of the external system
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    ratePlan := *openapiclient.NewRatePlans() // RatePlans | Request object to change rate plan.
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    r, err := apiClient.RatePlanAsyncAPI.StartSetRatePlansHeadersProcess(context.Background(), hotelId, extSystemCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RatePlan(ratePlan).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RatePlanAsyncAPI.StartSetRatePlansHeadersProcess``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel in OPERA | 
**extSystemCode** | **string** | Unique code of the external system | 

### Other Parameters

Other parameters are passed through a pointer to a apiStartSetRatePlansHeadersProcessRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **ratePlan** | [**RatePlans**](RatePlans.md) | Request object to change rate plan. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

 (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


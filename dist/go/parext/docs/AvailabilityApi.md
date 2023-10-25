# \AvailabilityApi

All URIs are relative to */parext/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**PostMinimumRateAvailability**](AvailabilityApi.md#PostMinimumRateAvailability) | **Post** /hotels/minimumRateAvailability | Advanced Property Search with minimum rates.
[**PostMultiRoomRateAvailability**](AvailabilityApi.md#PostMultiRoomRateAvailability) | **Post** /hotels/multiRoomRateAvailability | Advanced multi property search with multiple room and rates.



## PostMinimumRateAvailability

> SearchPropertyResponseType PostMinimumRateAvailability(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Body(body).Execute()

Advanced Property Search with minimum rates.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/parext"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)
    body := *openapiclient.NewSearchPropertyRequestType(time.Now(), time.Now()) // SearchPropertyRequestType |  (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.AvailabilityApi.PostMinimumRateAvailability(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Body(body).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AvailabilityApi.PostMinimumRateAvailability``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostMinimumRateAvailability`: SearchPropertyResponseType
    fmt.Fprintf(os.Stdout, "Response from `AvailabilityApi.PostMinimumRateAvailability`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostMinimumRateAvailabilityRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 
 **body** | [**SearchPropertyRequestType**](SearchPropertyRequestType.md) |  | 

### Return type

[**SearchPropertyResponseType**](SearchPropertyResponseType.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json; charset=utf-8
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostMultiRoomRateAvailability

> MultiRoomRateAvailabilityResponseType PostMultiRoomRateAvailability(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Request(request).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Advanced multi property search with multiple room and rates.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/parext"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    request := *openapiclient.NewPostMultiRoomRateAvailabilityRequest(time.Now(), time.Now(), []string{"HotelIds_example"}, *openapiclient.NewRatesSearchType(), []openapiclient.RoomsSearchType{*openapiclient.NewRoomsSearchType()}) // PostMultiRoomRateAvailabilityRequest | Request for multi room rate availability.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.AvailabilityApi.PostMultiRoomRateAvailability(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Request(request).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AvailabilityApi.PostMultiRoomRateAvailability``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostMultiRoomRateAvailability`: MultiRoomRateAvailabilityResponseType
    fmt.Fprintf(os.Stdout, "Response from `AvailabilityApi.PostMultiRoomRateAvailability`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostMultiRoomRateAvailabilityRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **request** | [**PostMultiRoomRateAvailabilityRequest**](PostMultiRoomRateAvailabilityRequest.md) | Request for multi room rate availability. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**MultiRoomRateAvailabilityResponseType**](MultiRoomRateAvailabilityResponseType.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


# \AvailabilityExternalApi

All URIs are relative to */par/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetExternalYieldMarketType**](AvailabilityExternalApi.md#GetExternalYieldMarketType) | **Get** /hotels/{hotelId}/yieldMarketType | Yield Market Type LookUp.



## GetExternalYieldMarketType

> YieldMarketTypeDetails GetExternalYieldMarketType(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).MembershipId(membershipId).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Yield Market Type LookUp.



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
    hotelId := "hotelId_example" // string | The Code That Uniquely Identifies A Single Hotel Property.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    membershipId := "membershipId_example" // string | Membership Card Number. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.AvailabilityExternalApi.GetExternalYieldMarketType(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).MembershipId(membershipId).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AvailabilityExternalApi.GetExternalYieldMarketType``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetExternalYieldMarketType`: YieldMarketTypeDetails
    fmt.Fprintf(os.Stdout, "Response from `AvailabilityExternalApi.GetExternalYieldMarketType`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | The Code That Uniquely Identifies A Single Hotel Property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetExternalYieldMarketTypeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **membershipId** | **string** | Membership Card Number. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**YieldMarketTypeDetails**](YieldMarketTypeDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


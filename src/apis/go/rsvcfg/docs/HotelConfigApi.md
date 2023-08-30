# \HotelConfigApi

All URIs are relative to */rsv/config/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetGuaranteeCodes**](HotelConfigApi.md#GetGuaranteeCodes) | **Get** /guaranteeCodes | Get guarantee codes



## GetGuaranteeCodes

> GuaranteeCodesDetails GetGuaranteeCodes(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).PageNumber(pageNumber).HotelIds(hotelIds).GuaranteeCodes(guaranteeCodes).Inactive(inactive).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get guarantee codes



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    pageNumber := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional)
    hotelIds := []string{"Inner_example"} // []string |  (optional)
    guaranteeCodes := []string{"Inner_example"} // []string |  (optional)
    inactive := true // bool | Is Guarantee Code Inactive? (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.GetGuaranteeCodes(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).PageNumber(pageNumber).HotelIds(hotelIds).GuaranteeCodes(guaranteeCodes).Inactive(inactive).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.GetGuaranteeCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetGuaranteeCodes`: GuaranteeCodesDetails
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.GetGuaranteeCodes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetGuaranteeCodesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **pageNumber** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | 
 **hotelIds** | **[]string** |  | 
 **guaranteeCodes** | **[]string** |  | 
 **inactive** | **bool** | Is Guarantee Code Inactive? | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**GuaranteeCodesDetails**](GuaranteeCodesDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


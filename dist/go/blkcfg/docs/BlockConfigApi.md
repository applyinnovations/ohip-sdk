# \BlockConfigApi

All URIs are relative to */blk/config/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetBlockStatusCodes**](BlockConfigApi.md#GetBlockStatusCodes) | **Get** /blockStatusCodes | Get block status codes
[**PostBlockStatusCode**](BlockConfigApi.md#PostBlockStatusCode) | **Post** /blockStatusCodes | Create a block status code



## GetBlockStatusCodes

> StatusCodeDetails GetBlockStatusCodes(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BlockStatusCodes(blockStatusCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get block status codes



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/blkcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    blockStatusCodes := []string{"Inner_example"} // []string |  (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockConfigApi.GetBlockStatusCodes(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BlockStatusCodes(blockStatusCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockConfigApi.GetBlockStatusCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetBlockStatusCodes`: StatusCodeDetails
    fmt.Fprintf(os.Stdout, "Response from `BlockConfigApi.GetBlockStatusCodes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetBlockStatusCodesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **blockStatusCodes** | **[]string** |  | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**StatusCodeDetails**](StatusCodeDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostBlockStatusCode

> Status PostBlockStatusCode(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BlockStatusCodeDetails(blockStatusCodeDetails).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create a block status code



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/blkcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    blockStatusCodeDetails := *openapiclient.NewPostBlockStatusCodeRequest() // PostBlockStatusCodeRequest | Request object for creating a block status code.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.BlockConfigApi.PostBlockStatusCode(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BlockStatusCodeDetails(blockStatusCodeDetails).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `BlockConfigApi.PostBlockStatusCode``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostBlockStatusCode`: Status
    fmt.Fprintf(os.Stdout, "Response from `BlockConfigApi.PostBlockStatusCode`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostBlockStatusCodeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **blockStatusCodeDetails** | [**PostBlockStatusCodeRequest**](PostBlockStatusCodeRequest.md) | Request object for creating a block status code. | 
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


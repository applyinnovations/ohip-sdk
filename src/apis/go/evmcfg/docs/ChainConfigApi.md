# \ChainConfigApi

All URIs are relative to */evm/config/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetFunctionSpaceEventTypes**](ChainConfigApi.md#GetFunctionSpaceEventTypes) | **Get** /cateringEventTypes | Get Function Space Event Types



## GetFunctionSpaceEventTypes

> FunctionSpaceEventTypesDetails GetFunctionSpaceEventTypes(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Codes(codes).Description(description).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Function Space Event Types



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    codes := []string{"Inner_example"} // []string |  (optional)
    description := "description_example" // string | Specifies the Event field value description to search. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChainConfigApi.GetFunctionSpaceEventTypes(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Codes(codes).Description(description).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChainConfigApi.GetFunctionSpaceEventTypes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetFunctionSpaceEventTypes`: FunctionSpaceEventTypesDetails
    fmt.Fprintf(os.Stdout, "Response from `ChainConfigApi.GetFunctionSpaceEventTypes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetFunctionSpaceEventTypesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **codes** | **[]string** |  | 
 **description** | **string** | Specifies the Event field value description to search. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**FunctionSpaceEventTypesDetails**](FunctionSpaceEventTypesDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


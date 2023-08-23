# \ProfileLOVApi

All URIs are relative to */crm/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetAvailablePreferences**](ProfileLOVApi.md#GetAvailablePreferences) | **Get** /profileListOfValues/availablePreferences | Get available preferences



## GetAvailablePreferences

> AvailablePreferences GetAvailablePreferences(ctx).Id(id).HotelId(hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).MaxFetchSize(maxFetchSize).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get available preferences



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
    id := "id_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation.
    hotelId := "hotelId_example" // string | Property for which preferences are to be fetched.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    maxFetchSize := int32(56) // int32 | Maximum records to be fetched. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileLOVApi.GetAvailablePreferences(context.Background()).Id(id).HotelId(hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).MaxFetchSize(maxFetchSize).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileLOVApi.GetAvailablePreferences``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetAvailablePreferences`: AvailablePreferences
    fmt.Fprintf(os.Stdout, "Response from `ProfileLOVApi.GetAvailablePreferences`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetAvailablePreferencesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **hotelId** | **string** | Property for which preferences are to be fetched. | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **maxFetchSize** | **int32** | Maximum records to be fetched. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**AvailablePreferences**](AvailablePreferences.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


# \ProfileLOVAPI

All URIs are relative to */crm/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetAvailableARAddresses**](ProfileLOVAPI.md#GetAvailableARAddresses) | **Get** /profileListOfValues/availableARAddresses | Get available AR Addresses 
[**GetAvailablePreferences**](ProfileLOVAPI.md#GetAvailablePreferences) | **Get** /profileListOfValues/availablePreferences | Get available preferences



## GetAvailableARAddresses

> AvailableARAddresses GetAvailableARAddresses(ctx).ProfileId(profileId).HotelId(hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AccountId(accountId).AccountIdContext(accountIdContext).AccountType(accountType).AccountNo(accountNo).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get available AR Addresses 



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/crm"
)

func main() {
    profileId := "profileId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation.
    hotelId := "hotelId_example" // string | The property where the AR Account exists or is being created.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    accountId := "accountId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    accountIdContext := "accountIdContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    accountType := "accountType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    accountNo := "accountNo_example" // string | The Account Number of the AR Account of the Profile. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileLOVAPI.GetAvailableARAddresses(context.Background()).ProfileId(profileId).HotelId(hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AccountId(accountId).AccountIdContext(accountIdContext).AccountType(accountType).AccountNo(accountNo).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileLOVAPI.GetAvailableARAddresses``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetAvailableARAddresses`: AvailableARAddresses
    fmt.Fprintf(os.Stdout, "Response from `ProfileLOVAPI.GetAvailableARAddresses`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetAvailableARAddressesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **profileId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **hotelId** | **string** | The property where the AR Account exists or is being created. | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **accountId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **accountIdContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **accountType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **accountNo** | **string** | The Account Number of the AR Account of the Profile. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**AvailableARAddresses**](AvailableARAddresses.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetAvailablePreferences

> AvailablePreferences GetAvailablePreferences(ctx).Id(id).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).MaxFetchSize(maxFetchSize).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get available preferences



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/crm"
)

func main() {
    id := "id_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    hotelId := "hotelId_example" // string | Property for which preferences are to be fetched. (optional)
    maxFetchSize := int32(56) // int32 | Maximum records to be fetched. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileLOVAPI.GetAvailablePreferences(context.Background()).Id(id).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).MaxFetchSize(maxFetchSize).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileLOVAPI.GetAvailablePreferences``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetAvailablePreferences`: AvailablePreferences
    fmt.Fprintf(os.Stdout, "Response from `ProfileLOVAPI.GetAvailablePreferences`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetAvailablePreferencesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **hotelId** | **string** | Property for which preferences are to be fetched. | 
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


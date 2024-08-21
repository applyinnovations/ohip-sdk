# \DataValueMappingAPI

All URIs are relative to */dvm/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetConvertedValues**](DataValueMappingAPI.md#GetConvertedValues) | **Get** /externalSystems/{extSystemCode}/hotels/{operaHotelId}/convertedValues | Fetch Converted Values
[**GetDefaultValues**](DataValueMappingAPI.md#GetDefaultValues) | **Get** /externalSystems/{extSystemCode}/hotels/{operaHotelId}/defaultValues | Fetch Default values
[**GetOperaHotelCode**](DataValueMappingAPI.md#GetOperaHotelCode) | **Get** /externalSystems/{extSystemCode}/hotels/{externalHotelId}/conversions | Fetch Converted Hotel Code



## GetConvertedValues

> ConvertedValues GetConvertedValues(ctx, operaHotelId, extSystemCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ExternalHotelId(externalHotelId).ConversionCode(conversionCode).ValueToBeConverted(valueToBeConverted).MasterValue(masterValue).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Fetch Converted Values



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/dvm"
)

func main() {
    operaHotelId := "operaHotelId_example" // string | 
    extSystemCode := "extSystemCode_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    externalHotelId := "externalHotelId_example" // string | External value of resort for which conversion is needed. (optional)
    conversionCode := []string{"ConversionCode_example"} // []string | Enumeration of the different conversion codes needed for data value mapping. (optional)
    valueToBeConverted := []string{"Inner_example"} // []string | Value to be converted. It can be opera or external value. (optional)
    masterValue := []string{"Inner_example"} // []string | Master value is supposed to be Opera value. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.DataValueMappingAPI.GetConvertedValues(context.Background(), operaHotelId, extSystemCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ExternalHotelId(externalHotelId).ConversionCode(conversionCode).ValueToBeConverted(valueToBeConverted).MasterValue(masterValue).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `DataValueMappingAPI.GetConvertedValues``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetConvertedValues`: ConvertedValues
    fmt.Fprintf(os.Stdout, "Response from `DataValueMappingAPI.GetConvertedValues`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**operaHotelId** | **string** |  | 
**extSystemCode** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetConvertedValuesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **externalHotelId** | **string** | External value of resort for which conversion is needed. | 
 **conversionCode** | **[]string** | Enumeration of the different conversion codes needed for data value mapping. | 
 **valueToBeConverted** | **[]string** | Value to be converted. It can be opera or external value. | 
 **masterValue** | **[]string** | Master value is supposed to be Opera value. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ConvertedValues**](ConvertedValues.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetDefaultValues

> DefaultValues GetDefaultValues(ctx, operaHotelId, extSystemCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Fetch Default values



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/dvm"
)

func main() {
    operaHotelId := "operaHotelId_example" // string | 
    extSystemCode := "extSystemCode_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.DataValueMappingAPI.GetDefaultValues(context.Background(), operaHotelId, extSystemCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `DataValueMappingAPI.GetDefaultValues``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetDefaultValues`: DefaultValues
    fmt.Fprintf(os.Stdout, "Response from `DataValueMappingAPI.GetDefaultValues`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**operaHotelId** | **string** |  | 
**extSystemCode** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetDefaultValuesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**DefaultValues**](DefaultValues.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetOperaHotelCode

> ConvertedHotelCode GetOperaHotelCode(ctx, externalHotelId, extSystemCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).OperaHotelCode(operaHotelCode).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Fetch Converted Hotel Code



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/dvm"
)

func main() {
    externalHotelId := "externalHotelId_example" // string | 
    extSystemCode := "extSystemCode_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    operaHotelCode := "operaHotelCode_example" // string | Opera Resort for which conversion is needed. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.DataValueMappingAPI.GetOperaHotelCode(context.Background(), externalHotelId, extSystemCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).OperaHotelCode(operaHotelCode).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `DataValueMappingAPI.GetOperaHotelCode``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetOperaHotelCode`: ConvertedHotelCode
    fmt.Fprintf(os.Stdout, "Response from `DataValueMappingAPI.GetOperaHotelCode`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**externalHotelId** | **string** |  | 
**extSystemCode** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetOperaHotelCodeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **operaHotelCode** | **string** | Opera Resort for which conversion is needed. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ConvertedHotelCode**](ConvertedHotelCode.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


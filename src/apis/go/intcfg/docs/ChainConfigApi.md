# \ChainConfigApi

All URIs are relative to */int/config/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ChangeTemplateDeviceLocations**](ChainConfigApi.md#ChangeTemplateDeviceLocations) | **Put** /deviceLocations/{deviceLocationId} | Change the template device locations
[**GetTemplateDeviceLocations**](ChainConfigApi.md#GetTemplateDeviceLocations) | **Get** /deviceLocations | Get the template device locations
[**PostTemplateDeviceLocations**](ChainConfigApi.md#PostTemplateDeviceLocations) | **Post** /deviceLocations | Create the template device locations
[**RemoveTemplateDeviceLocations**](ChainConfigApi.md#RemoveTemplateDeviceLocations) | **Delete** /deviceLocations/{deviceLocationId} | Delete the template device locations



## ChangeTemplateDeviceLocations

> Status ChangeTemplateDeviceLocations(ctx, deviceLocationId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TemplateDeviceLocationsToBeChanged(templateDeviceLocationsToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change the template device locations



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/intcfg"
)

func main() {
    deviceLocationId := "deviceLocationId_example" // string | Unique ID of device location.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    templateDeviceLocationsToBeChanged := *openapiclient.NewChangeTemplateDeviceLocationsRequest() // ChangeTemplateDeviceLocationsRequest | Request object for changing template Device locations.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChainConfigApi.ChangeTemplateDeviceLocations(context.Background(), deviceLocationId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TemplateDeviceLocationsToBeChanged(templateDeviceLocationsToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChainConfigApi.ChangeTemplateDeviceLocations``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ChangeTemplateDeviceLocations`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChainConfigApi.ChangeTemplateDeviceLocations`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**deviceLocationId** | **string** | Unique ID of device location. | 

### Other Parameters

Other parameters are passed through a pointer to a apiChangeTemplateDeviceLocationsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **templateDeviceLocationsToBeChanged** | [**ChangeTemplateDeviceLocationsRequest**](ChangeTemplateDeviceLocationsRequest.md) | Request object for changing template Device locations. | 
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


## GetTemplateDeviceLocations

> TemplateDeviceLocationsDetails GetTemplateDeviceLocations(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FetchInactive(fetchInactive).Codes(codes).WildCard(wildCard).Description(description).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get the template device locations



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/intcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    fetchInactive := true // bool | Determines wether to fetch inactive records or not. (optional) (default to false)
    codes := []string{"Inner_example"} // []string | Codes to be searched. (optional)
    wildCard := "wildCard_example" // string | Wildcard search on the code. (optional)
    description := "description_example" // string | Description of the code. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChainConfigApi.GetTemplateDeviceLocations(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FetchInactive(fetchInactive).Codes(codes).WildCard(wildCard).Description(description).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChainConfigApi.GetTemplateDeviceLocations``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetTemplateDeviceLocations`: TemplateDeviceLocationsDetails
    fmt.Fprintf(os.Stdout, "Response from `ChainConfigApi.GetTemplateDeviceLocations`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetTemplateDeviceLocationsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **fetchInactive** | **bool** | Determines wether to fetch inactive records or not. | [default to false]
 **codes** | **[]string** | Codes to be searched. | 
 **wildCard** | **string** | Wildcard search on the code. | 
 **description** | **string** | Description of the code. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**TemplateDeviceLocationsDetails**](TemplateDeviceLocationsDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostTemplateDeviceLocations

> Status PostTemplateDeviceLocations(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TemplateDeviceLocationsCriteria(templateDeviceLocationsCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create the template device locations



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/intcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    templateDeviceLocationsCriteria := *openapiclient.NewPostTemplateDeviceLocationsRequest() // PostTemplateDeviceLocationsRequest | Request object for creating template Device locations.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChainConfigApi.PostTemplateDeviceLocations(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TemplateDeviceLocationsCriteria(templateDeviceLocationsCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChainConfigApi.PostTemplateDeviceLocations``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostTemplateDeviceLocations`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChainConfigApi.PostTemplateDeviceLocations`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostTemplateDeviceLocationsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **templateDeviceLocationsCriteria** | [**PostTemplateDeviceLocationsRequest**](PostTemplateDeviceLocationsRequest.md) | Request object for creating template Device locations. | 
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


## RemoveTemplateDeviceLocations

> Status RemoveTemplateDeviceLocations(ctx, deviceLocationId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete the template device locations



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/intcfg"
)

func main() {
    deviceLocationId := "deviceLocationId_example" // string | Unique ID of device location.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChainConfigApi.RemoveTemplateDeviceLocations(context.Background(), deviceLocationId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChainConfigApi.RemoveTemplateDeviceLocations``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `RemoveTemplateDeviceLocations`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChainConfigApi.RemoveTemplateDeviceLocations`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**deviceLocationId** | **string** | Unique ID of device location. | 

### Other Parameters

Other parameters are passed through a pointer to a apiRemoveTemplateDeviceLocationsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

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


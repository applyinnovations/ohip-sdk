# \OperaExchangeInterfaceConfigApi

All URIs are relative to */oxi/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**DeleteAutomaticTransmissionSchedules**](OperaExchangeInterfaceConfigApi.md#DeleteAutomaticTransmissionSchedules) | **Delete** /messages/{messageId}/automaticTransmissionSchedules | Remove Automatic Transmission Schedules
[**DeleteConversionCodeMappings**](OperaExchangeInterfaceConfigApi.md#DeleteConversionCodeMappings) | **Delete** /conversionCodeMappingID/{id}/conversionCodeMapping | Remove Conversion Codes Mappings
[**DeleteExternalInterfaceSetups**](OperaExchangeInterfaceConfigApi.md#DeleteExternalInterfaceSetups) | **Delete** /hotels/{hotelId}/interfaces/{interfaceId}/externalInterfaceSetups | Delete external Interface Setup details
[**DeleteProfileMatchRules**](OperaExchangeInterfaceConfigApi.md#DeleteProfileMatchRules) | **Delete** /hotels/{hotelId}/interfaces/{interfaceId}/profiles/{profileType}/profileMatchRules | Delete profile match rules
[**DeleteUDFMappings**](OperaExchangeInterfaceConfigApi.md#DeleteUDFMappings) | **Delete** /hotels/{hotelId}/interfaces/{interfaceId}/conversionCode/{conversionCode}/operaValue/{operaValue}/udfMapping | Remove UDF Mappings
[**GetAccumulatedBusinessEvents**](OperaExchangeInterfaceConfigApi.md#GetAccumulatedBusinessEvents) | **Get** /hotels/{hotelId}/interfaces/{interfaceId}/accumulatedBusinessEvents | Fetch accumulated business events
[**GetAutomaticTransmissionSchedules**](OperaExchangeInterfaceConfigApi.md#GetAutomaticTransmissionSchedules) | **Get** /hotels/{hotelId}/automaticTransmissionSchedules | Fetch Automatic Transmission Schedules
[**GetCommunicationMethods**](OperaExchangeInterfaceConfigApi.md#GetCommunicationMethods) | **Get** /intefaces/{interfaceId}/communicationMethods | Fetch Communication Methods
[**GetConversionCodeMappings**](OperaExchangeInterfaceConfigApi.md#GetConversionCodeMappings) | **Get** /hotels/{hotelId}/interfaces/{interfaceId}/conversions/{conversionCode}/conversionCodeMapping | Fetch Conversion Code Mappings
[**GetConversionCodes**](OperaExchangeInterfaceConfigApi.md#GetConversionCodes) | **Get** /hotels/{hotelId}/intefaces/{interfaceId}/conversionCodes | Fetch Conversion Codes
[**GetExternalInterfaceSetups**](OperaExchangeInterfaceConfigApi.md#GetExternalInterfaceSetups) | **Get** /interfaceSetups | fetch external Interface Setup details
[**GetIntegrationInboundMessages**](OperaExchangeInterfaceConfigApi.md#GetIntegrationInboundMessages) | **Get** /hotels/{externalHotelCode}/interfaces/{interfaceId}/integrationSystems/{integrationSystem}/integrationInboundMessages | Fetch integration inbound messages 
[**GetIntegrationOutboundMessages**](OperaExchangeInterfaceConfigApi.md#GetIntegrationOutboundMessages) | **Get** /hotels/{hotelId}/interfaces/{interfaceId}/integrationSystems/{integrationSystem}/integrationOutboundMessages | fetch integration outbound messages
[**GetInterfaceControls**](OperaExchangeInterfaceConfigApi.md#GetInterfaceControls) | **Get** /hotels/{hotelId}/interfaces/{interfaceId}/interfaceControls | Retrieve OXI Parameters and Defaults
[**GetLegacyInterfaceStatus**](OperaExchangeInterfaceConfigApi.md#GetLegacyInterfaceStatus) | **Get** /interfaces/{interfaceId}/legacyInterfaceStatus | Fetch legacy interface status
[**GetOXIListOfValues**](OperaExchangeInterfaceConfigApi.md#GetOXIListOfValues) | **Get** /lovCode/{lovCode}/listOfValuesOXI | Fetch list of values details for OXI
[**GetProfileMatchRules**](OperaExchangeInterfaceConfigApi.md#GetProfileMatchRules) | **Get** /interfaces/{interfaceId}/profileMatchRules | Fetch profile match rules
[**PostAutomaticTransmissionSchedules**](OperaExchangeInterfaceConfigApi.md#PostAutomaticTransmissionSchedules) | **Post** /automaticTransmissionSchedules | Create Automatic Transmission Schedules
[**PostConversionCodeMappings**](OperaExchangeInterfaceConfigApi.md#PostConversionCodeMappings) | **Post** /hotels/{hotelId}/interfaces/{interfaceId}/conversionCode/{conversionCode}/operaValue/{operaValue}/externalValue/{externalValue}/conversionCodeMapping | Create Conversion Codes Mappings
[**PostExternalInterfaceSetups**](OperaExchangeInterfaceConfigApi.md#PostExternalInterfaceSetups) | **Post** /externalInterfaceSetups | Create Interface Setup details
[**PostProfileMatchRules**](OperaExchangeInterfaceConfigApi.md#PostProfileMatchRules) | **Post** /profileMatchRules | Create profile match rules
[**PutAutomaticTransmissionSchedules**](OperaExchangeInterfaceConfigApi.md#PutAutomaticTransmissionSchedules) | **Put** /hotels/{hotelId}/automaticTransmissionSchedules | Change Automatic Transmission Schedules
[**PutCommunicationMethods**](OperaExchangeInterfaceConfigApi.md#PutCommunicationMethods) | **Put** /communicationMethods | Modify Communication Methods 
[**PutConversionCodeMappings**](OperaExchangeInterfaceConfigApi.md#PutConversionCodeMappings) | **Put** /hotels/{hotelId}/interfaces/{interfaceId}/conversionCode/{conversionCode}/ID/{id}/operaValue/{operaValue}/externalValue/{externalValue}/conversionCodeMapping | Change Conversion Codes Mappings
[**PutConversionCodesStatus**](OperaExchangeInterfaceConfigApi.md#PutConversionCodesStatus) | **Put** /conversionCodesStatus | Change Conversion codes Status
[**PutExternalInterfaceSetups**](OperaExchangeInterfaceConfigApi.md#PutExternalInterfaceSetups) | **Put** /interfaceSetups | Modify external Interface Setup details
[**PutInterfaceControls**](OperaExchangeInterfaceConfigApi.md#PutInterfaceControls) | **Put** /interfaces/{interfaceId}/interfaceControls | Change OXI Parameters and Defaults
[**PutProfileMatchRules**](OperaExchangeInterfaceConfigApi.md#PutProfileMatchRules) | **Put** /profileMatchRules | Change profile match rules 



## DeleteAutomaticTransmissionSchedules

> Status DeleteAutomaticTransmissionSchedules(ctx, messageId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Remove Automatic Transmission Schedules



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/oxi"
)

func main() {
    messageId := "messageId_example" // string | Unique OPERA internal ID used to identify a hotel in OPERA.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.OperaExchangeInterfaceConfigApi.DeleteAutomaticTransmissionSchedules(context.Background(), messageId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `OperaExchangeInterfaceConfigApi.DeleteAutomaticTransmissionSchedules``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteAutomaticTransmissionSchedules`: Status
    fmt.Fprintf(os.Stdout, "Response from `OperaExchangeInterfaceConfigApi.DeleteAutomaticTransmissionSchedules`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**messageId** | **string** | Unique OPERA internal ID used to identify a hotel in OPERA. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteAutomaticTransmissionSchedulesRequest struct via the builder pattern


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


## DeleteConversionCodeMappings

> Status DeleteConversionCodeMappings(ctx, id).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Remove Conversion Codes Mappings



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/oxi"
)

func main() {
    id := "id_example" // string | Unique OPERA internal ID used to identify a Conversion Code Mapping in OPERA.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.OperaExchangeInterfaceConfigApi.DeleteConversionCodeMappings(context.Background(), id).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `OperaExchangeInterfaceConfigApi.DeleteConversionCodeMappings``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteConversionCodeMappings`: Status
    fmt.Fprintf(os.Stdout, "Response from `OperaExchangeInterfaceConfigApi.DeleteConversionCodeMappings`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Unique OPERA internal ID used to identify a Conversion Code Mapping in OPERA. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteConversionCodeMappingsRequest struct via the builder pattern


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


## DeleteExternalInterfaceSetups

> Status DeleteExternalInterfaceSetups(ctx, interfaceId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete external Interface Setup details



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/oxi"
)

func main() {
    interfaceId := "interfaceId_example" // string | Unique OPERA internal ID used to find interface in OPERA.
    hotelId := "hotelId_example" // string | Unique OPERA internal ID used to find hotel in OPERA.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.OperaExchangeInterfaceConfigApi.DeleteExternalInterfaceSetups(context.Background(), interfaceId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `OperaExchangeInterfaceConfigApi.DeleteExternalInterfaceSetups``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteExternalInterfaceSetups`: Status
    fmt.Fprintf(os.Stdout, "Response from `OperaExchangeInterfaceConfigApi.DeleteExternalInterfaceSetups`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**interfaceId** | **string** | Unique OPERA internal ID used to find interface in OPERA. | 
**hotelId** | **string** | Unique OPERA internal ID used to find hotel in OPERA. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteExternalInterfaceSetupsRequest struct via the builder pattern


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


## DeleteProfileMatchRules

> Status DeleteProfileMatchRules(ctx, profileType, interfaceId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete profile match rules



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/oxi"
)

func main() {
    profileType := "profileType_example" // string | Unique OPERA internal ID used to identify an Profile in OPERA.
    interfaceId := "interfaceId_example" // string | Unique OPERA internal ID used to identify an Interface in OPERA.
    hotelId := "hotelId_example" // string | Unique OPERA internal ID used to identify an hotel in OPERA.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.OperaExchangeInterfaceConfigApi.DeleteProfileMatchRules(context.Background(), profileType, interfaceId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `OperaExchangeInterfaceConfigApi.DeleteProfileMatchRules``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteProfileMatchRules`: Status
    fmt.Fprintf(os.Stdout, "Response from `OperaExchangeInterfaceConfigApi.DeleteProfileMatchRules`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**profileType** | **string** | Unique OPERA internal ID used to identify an Profile in OPERA. | 
**interfaceId** | **string** | Unique OPERA internal ID used to identify an Interface in OPERA. | 
**hotelId** | **string** | Unique OPERA internal ID used to identify an hotel in OPERA. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteProfileMatchRulesRequest struct via the builder pattern


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


## DeleteUDFMappings

> Status DeleteUDFMappings(ctx, operaValue, conversionCode, interfaceId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ProfileType(profileType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Remove UDF Mappings



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/oxi"
)

func main() {
    operaValue := "operaValue_example" // string | PMS Conversion Code value.
    conversionCode := "conversionCode_example" // string | Conversion Code in OPERA.
    interfaceId := "interfaceId_example" // string | Unique OPERA internal ID used to identify an Interface in OPERA.
    hotelId := "hotelId_example" // string | Unique OPERA internal ID used to identify a Hotel in OPERA.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    profileType := "profileType_example" // string | Profile type of the user-defined function (UDF) definition. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.OperaExchangeInterfaceConfigApi.DeleteUDFMappings(context.Background(), operaValue, conversionCode, interfaceId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ProfileType(profileType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `OperaExchangeInterfaceConfigApi.DeleteUDFMappings``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteUDFMappings`: Status
    fmt.Fprintf(os.Stdout, "Response from `OperaExchangeInterfaceConfigApi.DeleteUDFMappings`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**operaValue** | **string** | PMS Conversion Code value. | 
**conversionCode** | **string** | Conversion Code in OPERA. | 
**interfaceId** | **string** | Unique OPERA internal ID used to identify an Interface in OPERA. | 
**hotelId** | **string** | Unique OPERA internal ID used to identify a Hotel in OPERA. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteUDFMappingsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------




 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **profileType** | **string** | Profile type of the user-defined function (UDF) definition. | 
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


## GetAccumulatedBusinessEvents

> FetchAccumulatedBusinessEvents GetAccumulatedBusinessEvents(ctx, interfaceId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).Modules(modules).EndDate(endDate).StartDate(startDate).PrimaryKey(primaryKey).Status(status).HotelIds(hotelIds).IntegrationSystem(integrationSystem).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Fetch accumulated business events



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/oxi"
)

func main() {
    interfaceId := "interfaceId_example" // string | Unique OPERA internal ID used to identify an Interface in OPERA.
    hotelId := "hotelId_example" // string | Unique OPERA internal ID used to identify a Hotel in OPERA.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    offset := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional) (default to 0)
    modules := []string{"Modules_example"} // []string | Accumulated Business Event Module (optional)
    endDate := time.Now() // string | The ending value of the date range. (optional)
    startDate := time.Now() // string | The starting value of the date range. (optional)
    primaryKey := "primaryKey_example" // string | Specify primary key identifier to search for (optional)
    status := "status_example" // string | State of Accumulated Business Event (optional)
    hotelIds := []string{"Inner_example"} // []string |  (optional)
    integrationSystem := "integrationSystem_example" // string | Represents both OXI and OXI HUB are installed. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.OperaExchangeInterfaceConfigApi.GetAccumulatedBusinessEvents(context.Background(), interfaceId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).Modules(modules).EndDate(endDate).StartDate(startDate).PrimaryKey(primaryKey).Status(status).HotelIds(hotelIds).IntegrationSystem(integrationSystem).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `OperaExchangeInterfaceConfigApi.GetAccumulatedBusinessEvents``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetAccumulatedBusinessEvents`: FetchAccumulatedBusinessEvents
    fmt.Fprintf(os.Stdout, "Response from `OperaExchangeInterfaceConfigApi.GetAccumulatedBusinessEvents`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**interfaceId** | **string** | Unique OPERA internal ID used to identify an Interface in OPERA. | 
**hotelId** | **string** | Unique OPERA internal ID used to identify a Hotel in OPERA. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetAccumulatedBusinessEventsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **offset** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [default to 0]
 **modules** | **[]string** | Accumulated Business Event Module | 
 **endDate** | **string** | The ending value of the date range. | 
 **startDate** | **string** | The starting value of the date range. | 
 **primaryKey** | **string** | Specify primary key identifier to search for | 
 **status** | **string** | State of Accumulated Business Event | 
 **hotelIds** | **[]string** |  | 
 **integrationSystem** | **string** | Represents both OXI and OXI HUB are installed. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**FetchAccumulatedBusinessEvents**](FetchAccumulatedBusinessEvents.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetAutomaticTransmissionSchedules

> FetchAutomaticTransmissionSchedules GetAutomaticTransmissionSchedules(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelIds(hotelIds).InterfaceList(interfaceList).IncludeInactive(includeInactive).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Fetch Automatic Transmission Schedules



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/oxi"
)

func main() {
    hotelId := "hotelId_example" // string | Unique OPERA internal ID used to identify a hotel in OPERA.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    hotelIds := []string{"Inner_example"} // []string |  (optional)
    interfaceList := []string{"Inner_example"} // []string | Interfaces configured for automatic transmission schedules (optional)
    includeInactive := true // bool | If true, this flag will set the criteria to return Inactive records along with active records. (optional) (default to false)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.OperaExchangeInterfaceConfigApi.GetAutomaticTransmissionSchedules(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelIds(hotelIds).InterfaceList(interfaceList).IncludeInactive(includeInactive).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `OperaExchangeInterfaceConfigApi.GetAutomaticTransmissionSchedules``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetAutomaticTransmissionSchedules`: FetchAutomaticTransmissionSchedules
    fmt.Fprintf(os.Stdout, "Response from `OperaExchangeInterfaceConfigApi.GetAutomaticTransmissionSchedules`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique OPERA internal ID used to identify a hotel in OPERA. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetAutomaticTransmissionSchedulesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **hotelIds** | **[]string** |  | 
 **interfaceList** | **[]string** | Interfaces configured for automatic transmission schedules | 
 **includeInactive** | **bool** | If true, this flag will set the criteria to return Inactive records along with active records. | [default to false]
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**FetchAutomaticTransmissionSchedules**](FetchAutomaticTransmissionSchedules.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetCommunicationMethods

> FetchCommunicationMethods GetCommunicationMethods(ctx, interfaceId).IsGlobal(isGlobal).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).InterfaceIds(interfaceIds).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Fetch Communication Methods



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/oxi"
)

func main() {
    interfaceId := "interfaceId_example" // string | Unique OPERA internal ID used to find interface in OPERA.
    isGlobal := true // bool | SID Resort
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    hotelId := []string{"Inner_example"} // []string |  (optional)
    interfaceIds := []string{"Inner_example"} // []string | InterfaceID (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.OperaExchangeInterfaceConfigApi.GetCommunicationMethods(context.Background(), interfaceId).IsGlobal(isGlobal).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).InterfaceIds(interfaceIds).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `OperaExchangeInterfaceConfigApi.GetCommunicationMethods``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetCommunicationMethods`: FetchCommunicationMethods
    fmt.Fprintf(os.Stdout, "Response from `OperaExchangeInterfaceConfigApi.GetCommunicationMethods`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**interfaceId** | **string** | Unique OPERA internal ID used to find interface in OPERA. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetCommunicationMethodsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **isGlobal** | **bool** | SID Resort | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **hotelId** | **[]string** |  | 
 **interfaceIds** | **[]string** | InterfaceID | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**FetchCommunicationMethods**](FetchCommunicationMethods.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetConversionCodeMappings

> FetchConversionCodeMappings GetConversionCodeMappings(ctx, conversionCode, interfaceId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).IntegrationSystem(integrationSystem).UdfCode(udfCode).MappingValue(mappingValue).SearchBy(searchBy).IncludeGlobal(includeGlobal).ProfileType(profileType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Fetch Conversion Code Mappings



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/oxi"
)

func main() {
    conversionCode := "conversionCode_example" // string | Conversion Code in OPERA.
    interfaceId := "interfaceId_example" // string | Unique OPERA internal ID used to identify an Interface in OPERA.
    hotelId := "hotelId_example" // string | Unique OPERA internal ID used to identify a Hotel in OPERA.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    integrationSystem := "Central, Property, Both" // string | Represents both OXI and OXI HUB are installed. (optional)
    udfCode := false // bool | A flag that is true if the conversion code is an user-defined function (UDF) module code. (optional) (default to false)
    mappingValue := "mappingValue_example" // string | This value is used for wild card search on OPERA Code/External code. (optional)
    searchBy := "OperaValue, ExternalValue, Both" // string | Search for both OPERA and External mapping value. (optional)
    includeGlobal := false // bool | A flag to indicate whether to include Global Mappings or not. (optional) (default to true)
    profileType := "profileType_example" // string | Profile type by which the user-defined function (UDF) mappings should be filtered. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.OperaExchangeInterfaceConfigApi.GetConversionCodeMappings(context.Background(), conversionCode, interfaceId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).IntegrationSystem(integrationSystem).UdfCode(udfCode).MappingValue(mappingValue).SearchBy(searchBy).IncludeGlobal(includeGlobal).ProfileType(profileType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `OperaExchangeInterfaceConfigApi.GetConversionCodeMappings``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetConversionCodeMappings`: FetchConversionCodeMappings
    fmt.Fprintf(os.Stdout, "Response from `OperaExchangeInterfaceConfigApi.GetConversionCodeMappings`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**conversionCode** | **string** | Conversion Code in OPERA. | 
**interfaceId** | **string** | Unique OPERA internal ID used to identify an Interface in OPERA. | 
**hotelId** | **string** | Unique OPERA internal ID used to identify a Hotel in OPERA. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetConversionCodeMappingsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **integrationSystem** | **string** | Represents both OXI and OXI HUB are installed. | 
 **udfCode** | **bool** | A flag that is true if the conversion code is an user-defined function (UDF) module code. | [default to false]
 **mappingValue** | **string** | This value is used for wild card search on OPERA Code/External code. | 
 **searchBy** | **string** | Search for both OPERA and External mapping value. | 
 **includeGlobal** | **bool** | A flag to indicate whether to include Global Mappings or not. | [default to true]
 **profileType** | **string** | Profile type by which the user-defined function (UDF) mappings should be filtered. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**FetchConversionCodeMappings**](FetchConversionCodeMappings.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetConversionCodes

> FetchConversionCodes GetConversionCodes(ctx, interfaceId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).IntegrationSystem(integrationSystem).ConversionCode(conversionCode).UdfCode(udfCode).IncludeInactive(includeInactive).Group(group).IncludeUDFCodes(includeUDFCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Fetch Conversion Codes



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/oxi"
)

func main() {
    interfaceId := "interfaceId_example" // string | Unique OPERA internal ID used to find interface in OPERA.
    hotelId := "hotelId_example" // string | Unique OPERA internal ID used to identify a Hotel in OPERA.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    integrationSystem := "Central, Property, Both" // string | Represents both OXI and OXI HUB are installed. (optional)
    conversionCode := "conversionCode_example" // string | Type of Conversion Code or user-defined function (UDF) module name configured in the system. (optional)
    udfCode := true // bool | A flag that is true if the conversion code is an user-defined function (UDF) module code. (optional)
    includeInactive := true // bool | A flag to indicate whether to include inactive Conversion Codes. (optional)
    group := "group_example" // string | XML Type by which the Conversion Codes should be filtered. (optional)
    includeUDFCodes := true // bool | A flag to indicate whether user-defined function (UDF) module names should be included in the results or not. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.OperaExchangeInterfaceConfigApi.GetConversionCodes(context.Background(), interfaceId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).IntegrationSystem(integrationSystem).ConversionCode(conversionCode).UdfCode(udfCode).IncludeInactive(includeInactive).Group(group).IncludeUDFCodes(includeUDFCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `OperaExchangeInterfaceConfigApi.GetConversionCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetConversionCodes`: FetchConversionCodes
    fmt.Fprintf(os.Stdout, "Response from `OperaExchangeInterfaceConfigApi.GetConversionCodes`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**interfaceId** | **string** | Unique OPERA internal ID used to find interface in OPERA. | 
**hotelId** | **string** | Unique OPERA internal ID used to identify a Hotel in OPERA. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetConversionCodesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **integrationSystem** | **string** | Represents both OXI and OXI HUB are installed. | 
 **conversionCode** | **string** | Type of Conversion Code or user-defined function (UDF) module name configured in the system. | 
 **udfCode** | **bool** | A flag that is true if the conversion code is an user-defined function (UDF) module code. | 
 **includeInactive** | **bool** | A flag to indicate whether to include inactive Conversion Codes. | 
 **group** | **string** | XML Type by which the Conversion Codes should be filtered. | 
 **includeUDFCodes** | **bool** | A flag to indicate whether user-defined function (UDF) module names should be included in the results or not. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**FetchConversionCodes**](FetchConversionCodes.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetExternalInterfaceSetups

> FetchExternalInterfaceSetups GetExternalInterfaceSetups(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).InterfaceIds(interfaceIds).HotelIds(hotelIds).IncludeXmlVersion(includeXmlVersion).SystemType(systemType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

fetch external Interface Setup details



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/oxi"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    interfaceIds := []string{"Inner_example"} // []string | InterfaceID (optional)
    hotelIds := []string{"Inner_example"} // []string |  (optional)
    includeXmlVersion := true // bool | Attribute that decides whether the search results include the XML Schema version details (optional) (default to false)
    systemType := "systemType_example" // string | Represents both OXI and OXI HUB are installed. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.OperaExchangeInterfaceConfigApi.GetExternalInterfaceSetups(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).InterfaceIds(interfaceIds).HotelIds(hotelIds).IncludeXmlVersion(includeXmlVersion).SystemType(systemType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `OperaExchangeInterfaceConfigApi.GetExternalInterfaceSetups``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetExternalInterfaceSetups`: FetchExternalInterfaceSetups
    fmt.Fprintf(os.Stdout, "Response from `OperaExchangeInterfaceConfigApi.GetExternalInterfaceSetups`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetExternalInterfaceSetupsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **interfaceIds** | **[]string** | InterfaceID | 
 **hotelIds** | **[]string** |  | 
 **includeXmlVersion** | **bool** | Attribute that decides whether the search results include the XML Schema version details | [default to false]
 **systemType** | **string** | Represents both OXI and OXI HUB are installed. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**FetchExternalInterfaceSetups**](FetchExternalInterfaceSetups.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetIntegrationInboundMessages

> FetchIntegrationInboundMessages GetIntegrationInboundMessages(ctx, integrationSystem, interfaceId, externalHotelCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ExternalHotelCodes(externalHotelCodes).MessageTypes(messageTypes).EndDate(endDate).StartDate(startDate).IncludeReviewed(includeReviewed).FromMessageID(fromMessageID).ToMessageID(toMessageID).MessageStatus(messageStatus).MessageReference(messageReference).ErrorMessageWildCard(errorMessageWildCard).ErrorMessageType(errorMessageType).MsgContains(msgContains).AnyOneOfTheMsg(anyOneOfTheMsg).ValuesOnly(valuesOnly).Limit(limit).Offset(offset).IncludeErrors(includeErrors).ActionId(actionId).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Fetch integration inbound messages 



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/oxi"
)

func main() {
    integrationSystem := "integrationSystem_example" // string | Unique OPERA IntegrationSystem used to identify a IntegrationSystem in OPERA.
    interfaceId := "interfaceId_example" // string | Unique OPERA internal ID used to identify an Interface in OPERA.
    externalHotelCode := "externalHotelCode_example" // string | Unique External hotel ID used to identify a external Hotel in OPERA.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    externalHotelCodes := []string{"Inner_example"} // []string | Unique External hotel IDs used to identify external Hotel in OPERA (optional)
    messageTypes := []string{"Inner_example"} // []string | Sepcify Message type to restrict results (optional)
    endDate := time.Now() // string | The ending value of the date range. (optional)
    startDate := time.Now() // string | The starting value of the date range. (optional)
    includeReviewed := true // bool | If true, messages that are marked as reviewed will also be fetched (optional)
    fromMessageID := "fromMessageID_example" // string | The starting value of the range (optional)
    toMessageID := "toMessageID_example" // string | The ending value of the range (optional)
    messageStatus := []string{"Inner_example"} // []string | Specify Integration message reference value to restrict results (optional)
    messageReference := "messageReference_example" // string | Specify Integration message reference value to restrict results (optional)
    errorMessageWildCard := "errorMessageWildCard_example" // string | Specify partial or complete error message to restrict results (optional)
    errorMessageType := "errorMessageType_example" // string | This value is only applicable for outbound messages (optional)
    msgContains := "msgContains_example" // string | String to search inside a message. User can specify multiple strings separated by comma (optional)
    anyOneOfTheMsg := true // bool | If true then results with message that has at least one of the string specified for message contains will be returned. (optional) (default to false)
    valuesOnly := true // bool | If true then passed string will be matched against the node values of the XML message (optional) (default to false)
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    offset := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional) (default to 0)
    includeErrors := true // bool | If true then errors and warnings will be fetched for action id and other criteria mentioned (optional) (default to false)
    actionId := "actionId_example" // string | Action ID for which errors and warnings should be fetched (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.OperaExchangeInterfaceConfigApi.GetIntegrationInboundMessages(context.Background(), integrationSystem, interfaceId, externalHotelCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ExternalHotelCodes(externalHotelCodes).MessageTypes(messageTypes).EndDate(endDate).StartDate(startDate).IncludeReviewed(includeReviewed).FromMessageID(fromMessageID).ToMessageID(toMessageID).MessageStatus(messageStatus).MessageReference(messageReference).ErrorMessageWildCard(errorMessageWildCard).ErrorMessageType(errorMessageType).MsgContains(msgContains).AnyOneOfTheMsg(anyOneOfTheMsg).ValuesOnly(valuesOnly).Limit(limit).Offset(offset).IncludeErrors(includeErrors).ActionId(actionId).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `OperaExchangeInterfaceConfigApi.GetIntegrationInboundMessages``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetIntegrationInboundMessages`: FetchIntegrationInboundMessages
    fmt.Fprintf(os.Stdout, "Response from `OperaExchangeInterfaceConfigApi.GetIntegrationInboundMessages`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**integrationSystem** | **string** | Unique OPERA IntegrationSystem used to identify a IntegrationSystem in OPERA. | 
**interfaceId** | **string** | Unique OPERA internal ID used to identify an Interface in OPERA. | 
**externalHotelCode** | **string** | Unique External hotel ID used to identify a external Hotel in OPERA. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetIntegrationInboundMessagesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **externalHotelCodes** | **[]string** | Unique External hotel IDs used to identify external Hotel in OPERA | 
 **messageTypes** | **[]string** | Sepcify Message type to restrict results | 
 **endDate** | **string** | The ending value of the date range. | 
 **startDate** | **string** | The starting value of the date range. | 
 **includeReviewed** | **bool** | If true, messages that are marked as reviewed will also be fetched | 
 **fromMessageID** | **string** | The starting value of the range | 
 **toMessageID** | **string** | The ending value of the range | 
 **messageStatus** | **[]string** | Specify Integration message reference value to restrict results | 
 **messageReference** | **string** | Specify Integration message reference value to restrict results | 
 **errorMessageWildCard** | **string** | Specify partial or complete error message to restrict results | 
 **errorMessageType** | **string** | This value is only applicable for outbound messages | 
 **msgContains** | **string** | String to search inside a message. User can specify multiple strings separated by comma | 
 **anyOneOfTheMsg** | **bool** | If true then results with message that has at least one of the string specified for message contains will be returned. | [default to false]
 **valuesOnly** | **bool** | If true then passed string will be matched against the node values of the XML message | [default to false]
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **offset** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [default to 0]
 **includeErrors** | **bool** | If true then errors and warnings will be fetched for action id and other criteria mentioned | [default to false]
 **actionId** | **string** | Action ID for which errors and warnings should be fetched | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**FetchIntegrationInboundMessages**](FetchIntegrationInboundMessages.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetIntegrationOutboundMessages

> FetchIntegrationOutboundMessages GetIntegrationOutboundMessages(ctx, integrationSystem, interfaceId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelIds(hotelIds).ActionType(actionType).ErrorMessageWildCard(errorMessageWildCard).ErrorMessageType(errorMessageType).EndDate(endDate).StartDate(startDate).IncludeReviewed(includeReviewed).FromMessageID(fromMessageID).ToMessageID(toMessageID).MessageStatus(messageStatus).MsgContains(msgContains).AnyOneOfTheMsg(anyOneOfTheMsg).ValuesOnly(valuesOnly).MessageReference(messageReference).MessageTypes(messageTypes).Limit(limit).Offset(offset).IncludeErrors(includeErrors).ActionId(actionId).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

fetch integration outbound messages



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/oxi"
)

func main() {
    integrationSystem := "integrationSystem_example" // string | Unique OPERA IntegrationSystem used to identify a IntegrationSystem in OPERA.
    interfaceId := "interfaceId_example" // string | Unique OPERA internal ID used to identify an Interface in OPERA.
    hotelId := "hotelId_example" // string | Unique OPERA internal ID used to identify a Hotel in OPERA.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    hotelIds := []string{"Inner_example"} // []string |  (optional)
    actionType := "actionType_example" // string | Specify action(that has triggered the creation of message) to restrict results (optional)
    errorMessageWildCard := "errorMessageWildCard_example" // string | Specify partial or complete error message to restrict results (optional)
    errorMessageType := "errorMessageType_example" // string | This value is only applicable for outbound messages (optional)
    endDate := time.Now() // string | The ending value of the date range. (optional)
    startDate := time.Now() // string | The starting value of the date range. (optional)
    includeReviewed := true // bool | If true, messages that are marked as reviewed will also be fetched (optional) (default to false)
    fromMessageID := "fromMessageID_example" // string | The starting value of the range (optional)
    toMessageID := "toMessageID_example" // string | The ending value of the range (optional)
    messageStatus := []string{"Inner_example"} // []string | Specify Integration message reference value to restrict results (optional)
    msgContains := "msgContains_example" // string | String to search inside a message. User can specify multiple strings separated by comma (optional)
    anyOneOfTheMsg := true // bool | If true then results with message that has at least one of the string specified for message contains will be returned. (optional) (default to false)
    valuesOnly := true // bool | If true then passed string will be matched against the node values of the XML message (optional) (default to false)
    messageReference := "messageReference_example" // string | Specify Integration message reference value to restrict results (optional)
    messageTypes := []string{"Inner_example"} // []string | Sepcify Message type to restrict results (optional)
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    offset := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional) (default to 0)
    includeErrors := true // bool | If true then errors and warnings will be fetched for action id and other criteria mentioned (optional) (default to false)
    actionId := "actionId_example" // string | Action ID for which errors and warnings should be fetched (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.OperaExchangeInterfaceConfigApi.GetIntegrationOutboundMessages(context.Background(), integrationSystem, interfaceId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelIds(hotelIds).ActionType(actionType).ErrorMessageWildCard(errorMessageWildCard).ErrorMessageType(errorMessageType).EndDate(endDate).StartDate(startDate).IncludeReviewed(includeReviewed).FromMessageID(fromMessageID).ToMessageID(toMessageID).MessageStatus(messageStatus).MsgContains(msgContains).AnyOneOfTheMsg(anyOneOfTheMsg).ValuesOnly(valuesOnly).MessageReference(messageReference).MessageTypes(messageTypes).Limit(limit).Offset(offset).IncludeErrors(includeErrors).ActionId(actionId).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `OperaExchangeInterfaceConfigApi.GetIntegrationOutboundMessages``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetIntegrationOutboundMessages`: FetchIntegrationOutboundMessages
    fmt.Fprintf(os.Stdout, "Response from `OperaExchangeInterfaceConfigApi.GetIntegrationOutboundMessages`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**integrationSystem** | **string** | Unique OPERA IntegrationSystem used to identify a IntegrationSystem in OPERA. | 
**interfaceId** | **string** | Unique OPERA internal ID used to identify an Interface in OPERA. | 
**hotelId** | **string** | Unique OPERA internal ID used to identify a Hotel in OPERA. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetIntegrationOutboundMessagesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **hotelIds** | **[]string** |  | 
 **actionType** | **string** | Specify action(that has triggered the creation of message) to restrict results | 
 **errorMessageWildCard** | **string** | Specify partial or complete error message to restrict results | 
 **errorMessageType** | **string** | This value is only applicable for outbound messages | 
 **endDate** | **string** | The ending value of the date range. | 
 **startDate** | **string** | The starting value of the date range. | 
 **includeReviewed** | **bool** | If true, messages that are marked as reviewed will also be fetched | [default to false]
 **fromMessageID** | **string** | The starting value of the range | 
 **toMessageID** | **string** | The ending value of the range | 
 **messageStatus** | **[]string** | Specify Integration message reference value to restrict results | 
 **msgContains** | **string** | String to search inside a message. User can specify multiple strings separated by comma | 
 **anyOneOfTheMsg** | **bool** | If true then results with message that has at least one of the string specified for message contains will be returned. | [default to false]
 **valuesOnly** | **bool** | If true then passed string will be matched against the node values of the XML message | [default to false]
 **messageReference** | **string** | Specify Integration message reference value to restrict results | 
 **messageTypes** | **[]string** | Sepcify Message type to restrict results | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **offset** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [default to 0]
 **includeErrors** | **bool** | If true then errors and warnings will be fetched for action id and other criteria mentioned | [default to false]
 **actionId** | **string** | Action ID for which errors and warnings should be fetched | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**FetchIntegrationOutboundMessages**](FetchIntegrationOutboundMessages.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetInterfaceControls

> FetchInterfaceControls GetInterfaceControls(ctx, interfaceId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).IntegrationSystem(integrationSystem).CroCode(croCode).ParameterNameWildCard(parameterNameWildCard).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Retrieve OXI Parameters and Defaults



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/oxi"
)

func main() {
    interfaceId := "interfaceId_example" // string | Unique OPERA internal ID used to identify an Interface in OPERA.
    hotelId := "hotelId_example" // string | Unique OPERA internal ID used to identify a Hotel in OPERA.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    integrationSystem := "Central, Property, Both" // string | Represents both OXI and OXI HUB are installed. (optional)
    croCode := "croCode_example" // string |  (optional)
    parameterNameWildCard := "HANDLE_PSEUDO_ROOMTYPES" // string |  (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.OperaExchangeInterfaceConfigApi.GetInterfaceControls(context.Background(), interfaceId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).IntegrationSystem(integrationSystem).CroCode(croCode).ParameterNameWildCard(parameterNameWildCard).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `OperaExchangeInterfaceConfigApi.GetInterfaceControls``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetInterfaceControls`: FetchInterfaceControls
    fmt.Fprintf(os.Stdout, "Response from `OperaExchangeInterfaceConfigApi.GetInterfaceControls`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**interfaceId** | **string** | Unique OPERA internal ID used to identify an Interface in OPERA. | 
**hotelId** | **string** | Unique OPERA internal ID used to identify a Hotel in OPERA. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetInterfaceControlsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **integrationSystem** | **string** | Represents both OXI and OXI HUB are installed. | 
 **croCode** | **string** |  | 
 **parameterNameWildCard** | **string** |  | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**FetchInterfaceControls**](FetchInterfaceControls.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetLegacyInterfaceStatus

> LegacyInterfaceStatusDetails GetLegacyInterfaceStatus(ctx, interfaceId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Fetch legacy interface status



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/oxi"
)

func main() {
    interfaceId := "interfaceId_example" // string | Unique OPERA internal ID used to find interface in OPERA.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.OperaExchangeInterfaceConfigApi.GetLegacyInterfaceStatus(context.Background(), interfaceId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `OperaExchangeInterfaceConfigApi.GetLegacyInterfaceStatus``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetLegacyInterfaceStatus`: LegacyInterfaceStatusDetails
    fmt.Fprintf(os.Stdout, "Response from `OperaExchangeInterfaceConfigApi.GetLegacyInterfaceStatus`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**interfaceId** | **string** | Unique OPERA internal ID used to find interface in OPERA. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetLegacyInterfaceStatusRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**LegacyInterfaceStatusDetails**](LegacyInterfaceStatusDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetOXIListOfValues

> FetchOXIListOfValues GetOXIListOfValues(ctx, lovCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).IntegrationSystem(integrationSystem).IncludeInActive(includeInActive).ParameterNames(parameterNames).ParameterValues(parameterValues).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Fetch list of values details for OXI



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/oxi"
)

func main() {
    lovCode := "lovCode_example" // string | OXI LOVName in OPERA.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    integrationSystem := "Central, Property, Both" // string | Represents both OXI and OXI HUB are installed. (optional)
    includeInActive := false // bool | Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. (optional) (default to false)
    parameterNames := []string{"Inner_example"} // []string | Name of the parameter. (optional)
    parameterValues := []string{"Inner_example"} // []string | Value of the parameter. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.OperaExchangeInterfaceConfigApi.GetOXIListOfValues(context.Background(), lovCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).IntegrationSystem(integrationSystem).IncludeInActive(includeInActive).ParameterNames(parameterNames).ParameterValues(parameterValues).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `OperaExchangeInterfaceConfigApi.GetOXIListOfValues``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetOXIListOfValues`: FetchOXIListOfValues
    fmt.Fprintf(os.Stdout, "Response from `OperaExchangeInterfaceConfigApi.GetOXIListOfValues`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**lovCode** | **string** | OXI LOVName in OPERA. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetOXIListOfValuesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **integrationSystem** | **string** | Represents both OXI and OXI HUB are installed. | 
 **includeInActive** | **bool** | Only useful for LOVs that support toggle of inactive records inclusion. When set to true, inactive records will be included. | [default to false]
 **parameterNames** | **[]string** | Name of the parameter. | 
 **parameterValues** | **[]string** | Value of the parameter. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**FetchOXIListOfValues**](FetchOXIListOfValues.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetProfileMatchRules

> FetchProfileMatchRules GetProfileMatchRules(ctx, interfaceId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).IncludeXmlVersions(includeXmlVersions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Fetch profile match rules



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/oxi"
)

func main() {
    interfaceId := "interfaceId_example" // string | Unique OPERA internal ID used to identify an Interface in OPERA.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    hotelId := []string{"Inner_example"} // []string |  (optional)
    includeXmlVersions := true // bool | Attribute that decides whether the search results include the XML Schema version details (optional) (default to false)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.OperaExchangeInterfaceConfigApi.GetProfileMatchRules(context.Background(), interfaceId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).IncludeXmlVersions(includeXmlVersions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `OperaExchangeInterfaceConfigApi.GetProfileMatchRules``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetProfileMatchRules`: FetchProfileMatchRules
    fmt.Fprintf(os.Stdout, "Response from `OperaExchangeInterfaceConfigApi.GetProfileMatchRules`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**interfaceId** | **string** | Unique OPERA internal ID used to identify an Interface in OPERA. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetProfileMatchRulesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **hotelId** | **[]string** |  | 
 **includeXmlVersions** | **bool** | Attribute that decides whether the search results include the XML Schema version details | [default to false]
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**FetchProfileMatchRules**](FetchProfileMatchRules.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostAutomaticTransmissionSchedules

> Status PostAutomaticTransmissionSchedules(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AutomaticTransmissionSchedulesToBeCreated(automaticTransmissionSchedulesToBeCreated).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create Automatic Transmission Schedules



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/oxi"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    automaticTransmissionSchedulesToBeCreated := *openapiclient.NewPostAutomaticTransmissionSchedulesRequest() // PostAutomaticTransmissionSchedulesRequest | Request object to create automatic transmission schedules
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.OperaExchangeInterfaceConfigApi.PostAutomaticTransmissionSchedules(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AutomaticTransmissionSchedulesToBeCreated(automaticTransmissionSchedulesToBeCreated).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `OperaExchangeInterfaceConfigApi.PostAutomaticTransmissionSchedules``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostAutomaticTransmissionSchedules`: Status
    fmt.Fprintf(os.Stdout, "Response from `OperaExchangeInterfaceConfigApi.PostAutomaticTransmissionSchedules`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostAutomaticTransmissionSchedulesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **automaticTransmissionSchedulesToBeCreated** | [**PostAutomaticTransmissionSchedulesRequest**](PostAutomaticTransmissionSchedulesRequest.md) | Request object to create automatic transmission schedules | 
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


## PostConversionCodeMappings

> CreatedConversionCodeMappings PostConversionCodeMappings(ctx, externalValue, operaValue, conversionCode, interfaceId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ConversionCodeMappingsToBeCreated(conversionCodeMappingsToBeCreated).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create Conversion Codes Mappings



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/oxi"
)

func main() {
    externalValue := "externalValue_example" // string | EXTERNAL Conversion Code value.
    operaValue := "operaValue_example" // string | PMS Conversion Code value.
    conversionCode := "conversionCode_example" // string | Conversion Code in OPERA.
    interfaceId := "interfaceId_example" // string | Unique OPERA internal ID used to identify an Interface in OPERA.
    hotelId := "hotelId_example" // string | Unique OPERA internal ID used to identify a Hotel in OPERA.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    conversionCodeMappingsToBeCreated := *openapiclient.NewPostConversionCodeMappingsRequest() // PostConversionCodeMappingsRequest | Request to create Conversion Code Mappings.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.OperaExchangeInterfaceConfigApi.PostConversionCodeMappings(context.Background(), externalValue, operaValue, conversionCode, interfaceId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ConversionCodeMappingsToBeCreated(conversionCodeMappingsToBeCreated).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `OperaExchangeInterfaceConfigApi.PostConversionCodeMappings``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostConversionCodeMappings`: CreatedConversionCodeMappings
    fmt.Fprintf(os.Stdout, "Response from `OperaExchangeInterfaceConfigApi.PostConversionCodeMappings`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**externalValue** | **string** | EXTERNAL Conversion Code value. | 
**operaValue** | **string** | PMS Conversion Code value. | 
**conversionCode** | **string** | Conversion Code in OPERA. | 
**interfaceId** | **string** | Unique OPERA internal ID used to identify an Interface in OPERA. | 
**hotelId** | **string** | Unique OPERA internal ID used to identify a Hotel in OPERA. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostConversionCodeMappingsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------





 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **conversionCodeMappingsToBeCreated** | [**PostConversionCodeMappingsRequest**](PostConversionCodeMappingsRequest.md) | Request to create Conversion Code Mappings. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**CreatedConversionCodeMappings**](CreatedConversionCodeMappings.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostExternalInterfaceSetups

> Status PostExternalInterfaceSetups(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ExternalInterfaceSetupsToBeCreated(externalInterfaceSetupsToBeCreated).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create Interface Setup details



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/oxi"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    externalInterfaceSetupsToBeCreated := *openapiclient.NewPostExternalInterfaceSetupsRequest() // PostExternalInterfaceSetupsRequest | Request to create External Interface Setups
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.OperaExchangeInterfaceConfigApi.PostExternalInterfaceSetups(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ExternalInterfaceSetupsToBeCreated(externalInterfaceSetupsToBeCreated).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `OperaExchangeInterfaceConfigApi.PostExternalInterfaceSetups``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostExternalInterfaceSetups`: Status
    fmt.Fprintf(os.Stdout, "Response from `OperaExchangeInterfaceConfigApi.PostExternalInterfaceSetups`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostExternalInterfaceSetupsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **externalInterfaceSetupsToBeCreated** | [**PostExternalInterfaceSetupsRequest**](PostExternalInterfaceSetupsRequest.md) | Request to create External Interface Setups | 
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


## PostProfileMatchRules

> Status PostProfileMatchRules(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ProfileMatchRulesToBeCreated(profileMatchRulesToBeCreated).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create profile match rules



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/oxi"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    profileMatchRulesToBeCreated := *openapiclient.NewPostProfileMatchRulesRequest() // PostProfileMatchRulesRequest | Request object for creating Profile Match Rules Configuration..
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.OperaExchangeInterfaceConfigApi.PostProfileMatchRules(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ProfileMatchRulesToBeCreated(profileMatchRulesToBeCreated).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `OperaExchangeInterfaceConfigApi.PostProfileMatchRules``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostProfileMatchRules`: Status
    fmt.Fprintf(os.Stdout, "Response from `OperaExchangeInterfaceConfigApi.PostProfileMatchRules`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostProfileMatchRulesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **profileMatchRulesToBeCreated** | [**PostProfileMatchRulesRequest**](PostProfileMatchRulesRequest.md) | Request object for creating Profile Match Rules Configuration.. | 
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


## PutAutomaticTransmissionSchedules

> ChangedAutomaticTransmissionSchedules PutAutomaticTransmissionSchedules(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AutomaticTransmissionSchedulesToBeChanged(automaticTransmissionSchedulesToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change Automatic Transmission Schedules



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/oxi"
)

func main() {
    hotelId := "hotelId_example" // string | Unique OPERA internal ID used to identify a hotel in OPERA.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    automaticTransmissionSchedulesToBeChanged := *openapiclient.NewPutAutomaticTransmissionSchedulesRequest() // PutAutomaticTransmissionSchedulesRequest | Request object to change automatic transmission schedules
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.OperaExchangeInterfaceConfigApi.PutAutomaticTransmissionSchedules(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AutomaticTransmissionSchedulesToBeChanged(automaticTransmissionSchedulesToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `OperaExchangeInterfaceConfigApi.PutAutomaticTransmissionSchedules``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutAutomaticTransmissionSchedules`: ChangedAutomaticTransmissionSchedules
    fmt.Fprintf(os.Stdout, "Response from `OperaExchangeInterfaceConfigApi.PutAutomaticTransmissionSchedules`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique OPERA internal ID used to identify a hotel in OPERA. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutAutomaticTransmissionSchedulesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **automaticTransmissionSchedulesToBeChanged** | [**PutAutomaticTransmissionSchedulesRequest**](PutAutomaticTransmissionSchedulesRequest.md) | Request object to change automatic transmission schedules | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ChangedAutomaticTransmissionSchedules**](ChangedAutomaticTransmissionSchedules.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutCommunicationMethods

> ChangedCommunicationMethods PutCommunicationMethods(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CommunicationMethodsToBeChanged(communicationMethodsToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Modify Communication Methods 



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/oxi"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    communicationMethodsToBeChanged := *openapiclient.NewPutCommunicationMethodsRequest() // PutCommunicationMethodsRequest | Request object for modifying Communication Methods.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.OperaExchangeInterfaceConfigApi.PutCommunicationMethods(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CommunicationMethodsToBeChanged(communicationMethodsToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `OperaExchangeInterfaceConfigApi.PutCommunicationMethods``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutCommunicationMethods`: ChangedCommunicationMethods
    fmt.Fprintf(os.Stdout, "Response from `OperaExchangeInterfaceConfigApi.PutCommunicationMethods`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPutCommunicationMethodsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **communicationMethodsToBeChanged** | [**PutCommunicationMethodsRequest**](PutCommunicationMethodsRequest.md) | Request object for modifying Communication Methods. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ChangedCommunicationMethods**](ChangedCommunicationMethods.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutConversionCodeMappings

> ChangedConversionCodeMappings PutConversionCodeMappings(ctx, externalValue, operaValue, id, conversionCode, interfaceId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ConversionCodeMappingsToBeChanged(conversionCodeMappingsToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change Conversion Codes Mappings



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/oxi"
)

func main() {
    externalValue := "externalValue_example" // string | EXTERNAL Conversion Code value.
    operaValue := "operaValue_example" // string | PMS Conversion Code value.
    id := "id_example" // string | Unique OPERA internal ID used to identify a Conversion Code Mapping in OPERA.
    conversionCode := "conversionCode_example" // string | Conversion Code in OPERA.
    interfaceId := "interfaceId_example" // string | Unique OPERA internal ID used to identify an Interface in OPERA.
    hotelId := "hotelId_example" // string | Unique OPERA internal ID used to identify a Hotel in OPERA.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    conversionCodeMappingsToBeChanged := *openapiclient.NewPutConversionCodeMappingsRequest() // PutConversionCodeMappingsRequest | Request to update existing Conversion Code Mappings.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.OperaExchangeInterfaceConfigApi.PutConversionCodeMappings(context.Background(), externalValue, operaValue, id, conversionCode, interfaceId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ConversionCodeMappingsToBeChanged(conversionCodeMappingsToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `OperaExchangeInterfaceConfigApi.PutConversionCodeMappings``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutConversionCodeMappings`: ChangedConversionCodeMappings
    fmt.Fprintf(os.Stdout, "Response from `OperaExchangeInterfaceConfigApi.PutConversionCodeMappings`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**externalValue** | **string** | EXTERNAL Conversion Code value. | 
**operaValue** | **string** | PMS Conversion Code value. | 
**id** | **string** | Unique OPERA internal ID used to identify a Conversion Code Mapping in OPERA. | 
**conversionCode** | **string** | Conversion Code in OPERA. | 
**interfaceId** | **string** | Unique OPERA internal ID used to identify an Interface in OPERA. | 
**hotelId** | **string** | Unique OPERA internal ID used to identify a Hotel in OPERA. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutConversionCodeMappingsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------






 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **conversionCodeMappingsToBeChanged** | [**PutConversionCodeMappingsRequest**](PutConversionCodeMappingsRequest.md) | Request to update existing Conversion Code Mappings. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ChangedConversionCodeMappings**](ChangedConversionCodeMappings.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutConversionCodesStatus

> ChangedConversionCodesStatus PutConversionCodesStatus(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ConversionCodesStatusToBeChanged(conversionCodesStatusToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change Conversion codes Status



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/oxi"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    conversionCodesStatusToBeChanged := *openapiclient.NewPutConversionCodesStatusRequest() // PutConversionCodesStatusRequest | Request to change the status of given Conversion Codes.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.OperaExchangeInterfaceConfigApi.PutConversionCodesStatus(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ConversionCodesStatusToBeChanged(conversionCodesStatusToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `OperaExchangeInterfaceConfigApi.PutConversionCodesStatus``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutConversionCodesStatus`: ChangedConversionCodesStatus
    fmt.Fprintf(os.Stdout, "Response from `OperaExchangeInterfaceConfigApi.PutConversionCodesStatus`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPutConversionCodesStatusRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **conversionCodesStatusToBeChanged** | [**PutConversionCodesStatusRequest**](PutConversionCodesStatusRequest.md) | Request to change the status of given Conversion Codes. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ChangedConversionCodesStatus**](ChangedConversionCodesStatus.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutExternalInterfaceSetups

> ChangedExternalInterfaceSetups PutExternalInterfaceSetups(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ExternalInterfaceSetupsToBeChanged(externalInterfaceSetupsToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Modify external Interface Setup details



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/oxi"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    externalInterfaceSetupsToBeChanged := *openapiclient.NewPutExternalInterfaceSetupsRequest() // PutExternalInterfaceSetupsRequest | Request to change External Interface Setups
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.OperaExchangeInterfaceConfigApi.PutExternalInterfaceSetups(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ExternalInterfaceSetupsToBeChanged(externalInterfaceSetupsToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `OperaExchangeInterfaceConfigApi.PutExternalInterfaceSetups``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutExternalInterfaceSetups`: ChangedExternalInterfaceSetups
    fmt.Fprintf(os.Stdout, "Response from `OperaExchangeInterfaceConfigApi.PutExternalInterfaceSetups`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPutExternalInterfaceSetupsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **externalInterfaceSetupsToBeChanged** | [**PutExternalInterfaceSetupsRequest**](PutExternalInterfaceSetupsRequest.md) | Request to change External Interface Setups | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ChangedExternalInterfaceSetups**](ChangedExternalInterfaceSetups.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutInterfaceControls

> ChangedInterfaceControls PutInterfaceControls(ctx, interfaceId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).InterfaceControlsToBeChanged(interfaceControlsToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change OXI Parameters and Defaults



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/oxi"
)

func main() {
    interfaceId := "interfaceId_example" // string | Unique OPERA internal ID used to identify an Interface in OPERA.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    interfaceControlsToBeChanged := *openapiclient.NewPutInterfaceControlsRequest() // PutInterfaceControlsRequest | Request object for changing one or more OXI Parameters/Settings.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.OperaExchangeInterfaceConfigApi.PutInterfaceControls(context.Background(), interfaceId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).InterfaceControlsToBeChanged(interfaceControlsToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `OperaExchangeInterfaceConfigApi.PutInterfaceControls``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutInterfaceControls`: ChangedInterfaceControls
    fmt.Fprintf(os.Stdout, "Response from `OperaExchangeInterfaceConfigApi.PutInterfaceControls`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**interfaceId** | **string** | Unique OPERA internal ID used to identify an Interface in OPERA. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutInterfaceControlsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **interfaceControlsToBeChanged** | [**PutInterfaceControlsRequest**](PutInterfaceControlsRequest.md) | Request object for changing one or more OXI Parameters/Settings. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ChangedInterfaceControls**](ChangedInterfaceControls.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutProfileMatchRules

> ChangedProfileMatchRules PutProfileMatchRules(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ProfileMatchRulesToBeChanged(profileMatchRulesToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change profile match rules 



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/oxi"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    profileMatchRulesToBeChanged := *openapiclient.NewPutProfileMatchRulesRequest() // PutProfileMatchRulesRequest | Request object for changing Profile Match Rules Configuration.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.OperaExchangeInterfaceConfigApi.PutProfileMatchRules(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ProfileMatchRulesToBeChanged(profileMatchRulesToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `OperaExchangeInterfaceConfigApi.PutProfileMatchRules``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutProfileMatchRules`: ChangedProfileMatchRules
    fmt.Fprintf(os.Stdout, "Response from `OperaExchangeInterfaceConfigApi.PutProfileMatchRules`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPutProfileMatchRulesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **profileMatchRulesToBeChanged** | [**PutProfileMatchRulesRequest**](PutProfileMatchRulesRequest.md) | Request object for changing Profile Match Rules Configuration. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ChangedProfileMatchRules**](ChangedProfileMatchRules.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


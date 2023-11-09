# \ExportApi

All URIs are relative to */exp/config/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ChangeExportSchedules**](ExportApi.md#ChangeExportSchedules) | **Put** /hotels/{hotelId}/exportSchedules/{exportFileId} | Operation to change export schedules.
[**ChangeExportSchedulesByChain**](ExportApi.md#ChangeExportSchedulesByChain) | **Put** /exportSchedules/{exportFileId} | Operation to change export schedules.
[**DeleteExistingExportMappings**](ExportApi.md#DeleteExistingExportMappings) | **Delete** /hotels/{hotelId}/exportMappingId/{exportMappingId}/exportMappings | Operation to remove export mappings.
[**DeleteExportMappingCodes**](ExportApi.md#DeleteExportMappingCodes) | **Delete** /hotels/{hotelId}/exportMappings/{exportMappingId}/mappingTypes/{mappingTypeCode}/exportMappingCodes | Operation to remove export mapping codes.
[**GetExportActivityLog**](ExportApi.md#GetExportActivityLog) | **Get** /hotels/{hotelId}/exportActivityLog | Operation to fetch activity logs for Export Data.
[**GetExportColumnsAndFunctions**](ExportApi.md#GetExportColumnsAndFunctions) | **Get** /columnsAndFunctions | Operation to fetch export columns and functions.
[**GetExportMappingCodes**](ExportApi.md#GetExportMappingCodes) | **Get** /hotels/{hotelId}/exportMappingTypes/{exportMappingTypeId}/exportMappingCodes | Operation to fetch export mapping codes.
[**GetExportMappingCodesToLink**](ExportApi.md#GetExportMappingCodesToLink) | **Get** /hotels/{hotelId}/configTypes/{configType}/exportMappingCodesToLink | Operation to fetch export mapping codes to link.
[**GetExportMappingLinkedCodes**](ExportApi.md#GetExportMappingLinkedCodes) | **Get** /hotels/{hotelId}/exportMappings/linkedCodes | Operation to fetch export mapping linked codes.
[**GetExportMappings**](ExportApi.md#GetExportMappings) | **Get** /hotels/{hotelId}/exportMappings | Operation to fetch export mappings.
[**GetExportMappingsByChain**](ExportApi.md#GetExportMappingsByChain) | **Get** /exportMappings | Operation to fetch export mappings by chain.
[**GetExportSchedules**](ExportApi.md#GetExportSchedules) | **Get** /hotels/{hotelId}/exportSchedules | Operation to fetch export schedules.
[**GetExportsAvailable**](ExportApi.md#GetExportsAvailable) | **Get** /availableExports | Return available exports
[**GetExportsGenerated**](ExportApi.md#GetExportsGenerated) | **Get** /{exportFileId}/generatedExports | Operation to fetch exports generated.
[**PostExportMappingCodes**](ExportApi.md#PostExportMappingCodes) | **Post** /exportMappingCodes | Operation to create export mapping codes.
[**PostExportMappings**](ExportApi.md#PostExportMappings) | **Post** /hotels/{hotelId}/exportMappings | Operation to create export mappings.
[**PostExportSchedules**](ExportApi.md#PostExportSchedules) | **Post** /exportSchedules | Operation to create export schedules.
[**PutExportMappingCodes**](ExportApi.md#PutExportMappingCodes) | **Put** /exportMappingCodes | Operation to update export mapping codes.
[**PutExportMappingLinkedTypes**](ExportApi.md#PutExportMappingLinkedTypes) | **Put** /exportMappingLinkedTypes | Operation to update export mapping linked types.
[**PutExportMappings**](ExportApi.md#PutExportMappings) | **Put** /hotels/{hotelId}/exportMappings | Operation to update export mappings.
[**RemoveExportSchedules**](ExportApi.md#RemoveExportSchedules) | **Delete** /exportSchedules | Operation to remove export schedules.



## ChangeExportSchedules

> ExportSchedulesStatus ChangeExportSchedules(ctx, hotelId, exportFileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ExportSchedulesToBeChanged(exportSchedulesToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to change export schedules.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/expcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID that identifies a single hotel property.
    exportFileId := "exportFileId_example" // string | Unique ID of export file.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    exportSchedulesToBeChanged := *openapiclient.NewChangeExportSchedulesByChainRequest() // ChangeExportSchedulesByChainRequest | Request object for changing export schedules
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ExportApi.ChangeExportSchedules(context.Background(), hotelId, exportFileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ExportSchedulesToBeChanged(exportSchedulesToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ExportApi.ChangeExportSchedules``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ChangeExportSchedules`: ExportSchedulesStatus
    fmt.Fprintf(os.Stdout, "Response from `ExportApi.ChangeExportSchedules`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID that identifies a single hotel property. | 
**exportFileId** | **string** | Unique ID of export file. | 

### Other Parameters

Other parameters are passed through a pointer to a apiChangeExportSchedulesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **exportSchedulesToBeChanged** | [**ChangeExportSchedulesByChainRequest**](ChangeExportSchedulesByChainRequest.md) | Request object for changing export schedules | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ExportSchedulesStatus**](ExportSchedulesStatus.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ChangeExportSchedulesByChain

> ExportSchedulesStatus ChangeExportSchedulesByChain(ctx, exportFileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ExportSchedulesToBeChanged(exportSchedulesToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to change export schedules.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/expcfg"
)

func main() {
    exportFileId := "exportFileId_example" // string | Unique ID of export file.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    exportSchedulesToBeChanged := *openapiclient.NewChangeExportSchedulesByChainRequest() // ChangeExportSchedulesByChainRequest | Request object for changing export schedules
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ExportApi.ChangeExportSchedulesByChain(context.Background(), exportFileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ExportSchedulesToBeChanged(exportSchedulesToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ExportApi.ChangeExportSchedulesByChain``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ChangeExportSchedulesByChain`: ExportSchedulesStatus
    fmt.Fprintf(os.Stdout, "Response from `ExportApi.ChangeExportSchedulesByChain`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**exportFileId** | **string** | Unique ID of export file. | 

### Other Parameters

Other parameters are passed through a pointer to a apiChangeExportSchedulesByChainRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **exportSchedulesToBeChanged** | [**ChangeExportSchedulesByChainRequest**](ChangeExportSchedulesByChainRequest.md) | Request object for changing export schedules | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ExportSchedulesStatus**](ExportSchedulesStatus.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteExistingExportMappings

> Status DeleteExistingExportMappings(ctx, exportMappingId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to remove export mappings.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/expcfg"
)

func main() {
    exportMappingId := "exportMappingId_example" // string | Export Mapping Id.
    hotelId := "hotelId_example" // string | Unique ID that identifies a single hotel property.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ExportApi.DeleteExistingExportMappings(context.Background(), exportMappingId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ExportApi.DeleteExistingExportMappings``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteExistingExportMappings`: Status
    fmt.Fprintf(os.Stdout, "Response from `ExportApi.DeleteExistingExportMappings`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**exportMappingId** | **string** | Export Mapping Id. | 
**hotelId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteExistingExportMappingsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
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


## DeleteExportMappingCodes

> Status DeleteExportMappingCodes(ctx, mappingTypeCode, exportMappingId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to remove export mapping codes.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/expcfg"
)

func main() {
    mappingTypeCode := "mappingTypeCode_example" // string | Mapping Type Code.
    exportMappingId := "exportMappingId_example" // string | Export Mapping Id.
    hotelId := "hotelId_example" // string | Unique ID that identifies a single hotel property.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ExportApi.DeleteExportMappingCodes(context.Background(), mappingTypeCode, exportMappingId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ExportApi.DeleteExportMappingCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteExportMappingCodes`: Status
    fmt.Fprintf(os.Stdout, "Response from `ExportApi.DeleteExportMappingCodes`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**mappingTypeCode** | **string** | Mapping Type Code. | 
**exportMappingId** | **string** | Export Mapping Id. | 
**hotelId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteExportMappingCodesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
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


## GetExportActivityLog

> ExportActivityLog GetExportActivityLog(ctx, hotelId).ActivityType(activityType).FromDate(fromDate).ToDate(toDate).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).Module(module).ParameterName(parameterName).ParameterValue(parameterValue).ActivityGroup(activityGroup).SearchText(searchText).UserByIds(userByIds).UserForIds(userForIds).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to fetch activity logs for Export Data.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/expcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID that identifies a single hotel property.
    activityType := "activityType_example" // string | 
    fromDate := time.Now() // string | Search from date for the user activity log.
    toDate := time.Now() // string | Search to date for the user activity log.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    offset := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional) (default to 0)
    module := "module_example" // string | Activity module. (optional)
    parameterName := []string{"Inner_example"} // []string | Name of the parameter. (optional)
    parameterValue := []string{"Inner_example"} // []string | Value of the parameter. (optional)
    activityGroup := "activityGroup_example" // string |  (optional)
    searchText := "searchText_example" // string | Search text for the user activity log. (optional)
    userByIds := []int32{int32(123)} // []int32 |  (optional)
    userForIds := []int32{int32(123)} // []int32 |  (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ExportApi.GetExportActivityLog(context.Background(), hotelId).ActivityType(activityType).FromDate(fromDate).ToDate(toDate).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).Module(module).ParameterName(parameterName).ParameterValue(parameterValue).ActivityGroup(activityGroup).SearchText(searchText).UserByIds(userByIds).UserForIds(userForIds).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ExportApi.GetExportActivityLog``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetExportActivityLog`: ExportActivityLog
    fmt.Fprintf(os.Stdout, "Response from `ExportApi.GetExportActivityLog`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetExportActivityLogRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **activityType** | **string** |  | 
 **fromDate** | **string** | Search from date for the user activity log. | 
 **toDate** | **string** | Search to date for the user activity log. | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **offset** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [default to 0]
 **module** | **string** | Activity module. | 
 **parameterName** | **[]string** | Name of the parameter. | 
 **parameterValue** | **[]string** | Value of the parameter. | 
 **activityGroup** | **string** |  | 
 **searchText** | **string** | Search text for the user activity log. | 
 **userByIds** | **[]int32** |  | 
 **userForIds** | **[]int32** |  | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ExportActivityLog**](ExportActivityLog.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetExportColumnsAndFunctions

> ExportColumnsAndFunctionsDetails GetExportColumnsAndFunctions(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FetchDbColumns(fetchDbColumns).FetchOperaApis(fetchOperaApis).FetchPrePostProcedures(fetchPrePostProcedures).DataSource(dataSource).ExportFileId(exportFileId).Category(category).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to fetch export columns and functions.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/expcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    fetchDbColumns := true // bool |  (optional)
    fetchOperaApis := true // bool |  (optional)
    fetchPrePostProcedures := true // bool |  (optional)
    dataSource := "dataSource_example" // string | Data source for which we are supposed to get columns and pre post procedures (optional)
    exportFileId := "exportFileId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    category := "category_example" // string | Enumeration of API Categories. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ExportApi.GetExportColumnsAndFunctions(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FetchDbColumns(fetchDbColumns).FetchOperaApis(fetchOperaApis).FetchPrePostProcedures(fetchPrePostProcedures).DataSource(dataSource).ExportFileId(exportFileId).Category(category).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ExportApi.GetExportColumnsAndFunctions``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetExportColumnsAndFunctions`: ExportColumnsAndFunctionsDetails
    fmt.Fprintf(os.Stdout, "Response from `ExportApi.GetExportColumnsAndFunctions`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetExportColumnsAndFunctionsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **fetchDbColumns** | **bool** |  | 
 **fetchOperaApis** | **bool** |  | 
 **fetchPrePostProcedures** | **bool** |  | 
 **dataSource** | **string** | Data source for which we are supposed to get columns and pre post procedures | 
 **exportFileId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **category** | **string** | Enumeration of API Categories. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ExportColumnsAndFunctionsDetails**](ExportColumnsAndFunctionsDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetExportMappingCodes

> FetchExportMappingCodes GetExportMappingCodes(ctx, exportMappingTypeId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to fetch export mapping codes.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/expcfg"
)

func main() {
    exportMappingTypeId := "exportMappingTypeId_example" // string | Export Mapping Type Id.
    hotelId := "hotelId_example" // string | Unique ID that identifies a single hotel property.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ExportApi.GetExportMappingCodes(context.Background(), exportMappingTypeId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ExportApi.GetExportMappingCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetExportMappingCodes`: FetchExportMappingCodes
    fmt.Fprintf(os.Stdout, "Response from `ExportApi.GetExportMappingCodes`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**exportMappingTypeId** | **string** | Export Mapping Type Id. | 
**hotelId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetExportMappingCodesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**FetchExportMappingCodes**](FetchExportMappingCodes.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetExportMappingCodesToLink

> ExportMappingCodesToLink GetExportMappingCodesToLink(ctx, configType, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Code(code).Description(description).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to fetch export mapping codes to link.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/expcfg"
)

func main() {
    configType := "configType_example" // string | Configuration Type.
    hotelId := "hotelId_example" // string | Unique ID that identifies a single hotel property.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    code := "code_example" // string | The hotel code for the codes to fetch for linking. (optional)
    description := "description_example" // string | The hotel code for the codes to fetch for linking. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ExportApi.GetExportMappingCodesToLink(context.Background(), configType, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Code(code).Description(description).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ExportApi.GetExportMappingCodesToLink``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetExportMappingCodesToLink`: ExportMappingCodesToLink
    fmt.Fprintf(os.Stdout, "Response from `ExportApi.GetExportMappingCodesToLink`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**configType** | **string** | Configuration Type. | 
**hotelId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetExportMappingCodesToLinkRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **code** | **string** | The hotel code for the codes to fetch for linking. | 
 **description** | **string** | The hotel code for the codes to fetch for linking. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ExportMappingCodesToLink**](ExportMappingCodesToLink.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetExportMappingLinkedCodes

> ExportMappingLinkedCodes GetExportMappingLinkedCodes(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Id(id).IdExtension(idExtension).IdContext(idContext).Type_(type_).CodeToLink(codeToLink).ConfigType(configType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to fetch export mapping linked codes.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/expcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID that identifies a single hotel property.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    id := "id_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    idExtension := int32(56) // int32 | Additional identifying value assigned by the creating system. (optional)
    idContext := "idContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    type_ := "type__example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    codeToLink := "codeToLink_example" // string | Linked code. (optional)
    configType := "configType_example" // string | Enumeration  of Types allowed for Export Mapping (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ExportApi.GetExportMappingLinkedCodes(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Id(id).IdExtension(idExtension).IdContext(idContext).Type_(type_).CodeToLink(codeToLink).ConfigType(configType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ExportApi.GetExportMappingLinkedCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetExportMappingLinkedCodes`: ExportMappingLinkedCodes
    fmt.Fprintf(os.Stdout, "Response from `ExportApi.GetExportMappingLinkedCodes`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetExportMappingLinkedCodesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **id** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **idExtension** | **int32** | Additional identifying value assigned by the creating system. | 
 **idContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **type_** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **codeToLink** | **string** | Linked code. | 
 **configType** | **string** | Enumeration  of Types allowed for Export Mapping | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ExportMappingLinkedCodes**](ExportMappingLinkedCodes.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetExportMappings

> FetchExportMappings GetExportMappings(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ExportMappingConfigs(exportMappingConfigs).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to fetch export mappings.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/expcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID that identifies a single hotel property.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    exportMappingConfigs := []string{"ExportMappingConfigs_example"} // []string | Enumeration  of Types allowed for Export Mapping (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ExportApi.GetExportMappings(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ExportMappingConfigs(exportMappingConfigs).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ExportApi.GetExportMappings``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetExportMappings`: FetchExportMappings
    fmt.Fprintf(os.Stdout, "Response from `ExportApi.GetExportMappings`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetExportMappingsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **exportMappingConfigs** | **[]string** | Enumeration  of Types allowed for Export Mapping | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**FetchExportMappings**](FetchExportMappings.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetExportMappingsByChain

> FetchExportMappings GetExportMappingsByChain(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).ExportMappingConfigs(exportMappingConfigs).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to fetch export mappings by chain.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/expcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    hotelId := "hotelId_example" // string | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. (optional)
    exportMappingConfigs := []string{"ExportMappingConfigs_example"} // []string | Enumeration  of Types allowed for Export Mapping (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ExportApi.GetExportMappingsByChain(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).ExportMappingConfigs(exportMappingConfigs).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ExportApi.GetExportMappingsByChain``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetExportMappingsByChain`: FetchExportMappings
    fmt.Fprintf(os.Stdout, "Response from `ExportApi.GetExportMappingsByChain`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetExportMappingsByChainRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **hotelId** | **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | 
 **exportMappingConfigs** | **[]string** | Enumeration  of Types allowed for Export Mapping | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**FetchExportMappings**](FetchExportMappings.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetExportSchedules

> ExportSchedulesDetails GetExportSchedules(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TimeZone(timeZone).ExportFileId(exportFileId).IdExtension(idExtension).IdContext(idContext).Type_(type_).ExportGroup(exportGroup).ExportName(exportName).StartDate(startDate).EndDate(endDate).Frequency(frequency).IncludeInactive(includeInactive).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to fetch export schedules.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/expcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID that identifies a single hotel property.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    timeZone := "timeZone_example" // string | Time zone hour and minute specified in the format TZH:TZM example:-05:00 (optional)
    exportFileId := "exportFileId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    idExtension := int32(56) // int32 | Additional identifying value assigned by the creating system. (optional)
    idContext := "idContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    type_ := "type__example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    exportGroup := "exportGroup_example" // string | Enumeration of export file groups. (optional)
    exportName := "exportName_example" // string | Export name to restrict export schedules (optional)
    startDate := time.Now() // string | Start Date to restrict export schedules (optional)
    endDate := time.Now() // string | End Date to restrict export schedules (optional)
    frequency := "frequency_example" // string | Frequency for which export schedules needs to be returned (optional)
    includeInactive := true // bool | Indicates whether inactive schedules needs to be returned or not (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ExportApi.GetExportSchedules(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TimeZone(timeZone).ExportFileId(exportFileId).IdExtension(idExtension).IdContext(idContext).Type_(type_).ExportGroup(exportGroup).ExportName(exportName).StartDate(startDate).EndDate(endDate).Frequency(frequency).IncludeInactive(includeInactive).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ExportApi.GetExportSchedules``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetExportSchedules`: ExportSchedulesDetails
    fmt.Fprintf(os.Stdout, "Response from `ExportApi.GetExportSchedules`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetExportSchedulesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **timeZone** | **string** | Time zone hour and minute specified in the format TZH:TZM example:-05:00 | 
 **exportFileId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **idExtension** | **int32** | Additional identifying value assigned by the creating system. | 
 **idContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **type_** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **exportGroup** | **string** | Enumeration of export file groups. | 
 **exportName** | **string** | Export name to restrict export schedules | 
 **startDate** | **string** | Start Date to restrict export schedules | 
 **endDate** | **string** | End Date to restrict export schedules | 
 **frequency** | **string** | Frequency for which export schedules needs to be returned | 
 **includeInactive** | **bool** | Indicates whether inactive schedules needs to be returned or not | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ExportSchedulesDetails**](ExportSchedulesDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetExportsAvailable

> ExportsAvailable GetExportsAvailable(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FetchColumns(fetchColumns).FetchDataSetup(fetchDataSetup).FetchDestinationSetup(fetchDestinationSetup).FetchGenerateConfiguration(fetchGenerateConfiguration).Limit(limit).ExportFileId(exportFileId).IdExtension(idExtension).IdContext(idContext).Type_(type_).HotelIds(hotelIds).FileGroup(fileGroup).IncludeInactive(includeInactive).Match(match).IncludeComponents(includeComponents).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Return available exports



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/expcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    fetchColumns := true // bool |  (optional)
    fetchDataSetup := true // bool |  (optional)
    fetchDestinationSetup := true // bool |  (optional)
    fetchGenerateConfiguration := true // bool |  (optional)
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    exportFileId := "exportFileId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    idExtension := int32(56) // int32 | Additional identifying value assigned by the creating system. (optional)
    idContext := "idContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    type_ := "type__example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    hotelIds := []string{"Inner_example"} // []string | Hotel code. (optional)
    fileGroup := "fileGroup_example" // string | Enumeration of export file groups. (optional)
    includeInactive := true // bool | Indicates whether inactive records should be returned. (optional)
    match := "match_example" // string |  (optional)
    includeComponents := true // bool | Indicate whether component exports should be included in the request. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ExportApi.GetExportsAvailable(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FetchColumns(fetchColumns).FetchDataSetup(fetchDataSetup).FetchDestinationSetup(fetchDestinationSetup).FetchGenerateConfiguration(fetchGenerateConfiguration).Limit(limit).ExportFileId(exportFileId).IdExtension(idExtension).IdContext(idContext).Type_(type_).HotelIds(hotelIds).FileGroup(fileGroup).IncludeInactive(includeInactive).Match(match).IncludeComponents(includeComponents).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ExportApi.GetExportsAvailable``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetExportsAvailable`: ExportsAvailable
    fmt.Fprintf(os.Stdout, "Response from `ExportApi.GetExportsAvailable`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetExportsAvailableRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **fetchColumns** | **bool** |  | 
 **fetchDataSetup** | **bool** |  | 
 **fetchDestinationSetup** | **bool** |  | 
 **fetchGenerateConfiguration** | **bool** |  | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **exportFileId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **idExtension** | **int32** | Additional identifying value assigned by the creating system. | 
 **idContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **type_** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **hotelIds** | **[]string** | Hotel code. | 
 **fileGroup** | **string** | Enumeration of export file groups. | 
 **includeInactive** | **bool** | Indicates whether inactive records should be returned. | 
 **match** | **string** |  | 
 **includeComponents** | **bool** | Indicate whether component exports should be included in the request. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ExportsAvailable**](ExportsAvailable.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetExportsGenerated

> GeneratedExports GetExportsGenerated(ctx, exportFileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ExportDataId(exportDataId).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to fetch exports generated.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/expcfg"
)

func main() {
    exportFileId := "exportFileId_example" // string | Unique ID of export file.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    exportDataId := "exportDataId_example" // string | Unique ID of export data. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ExportApi.GetExportsGenerated(context.Background(), exportFileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ExportDataId(exportDataId).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ExportApi.GetExportsGenerated``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetExportsGenerated`: GeneratedExports
    fmt.Fprintf(os.Stdout, "Response from `ExportApi.GetExportsGenerated`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**exportFileId** | **string** | Unique ID of export file. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetExportsGeneratedRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **exportDataId** | **string** | Unique ID of export data. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**GeneratedExports**](GeneratedExports.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostExportMappingCodes

> Status PostExportMappingCodes(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ExportMappingCodes(exportMappingCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to create export mapping codes.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/expcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    exportMappingCodes := *openapiclient.NewPutExportMappingCodesRequest() // PutExportMappingCodesRequest | Request to create export mapping code for a given export.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ExportApi.PostExportMappingCodes(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ExportMappingCodes(exportMappingCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ExportApi.PostExportMappingCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostExportMappingCodes`: Status
    fmt.Fprintf(os.Stdout, "Response from `ExportApi.PostExportMappingCodes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostExportMappingCodesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **exportMappingCodes** | [**PutExportMappingCodesRequest**](PutExportMappingCodesRequest.md) | Request to create export mapping code for a given export. | 
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


## PostExportMappings

> Status PostExportMappings(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ExportMappings(exportMappings).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to create export mappings.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/expcfg"
)

func main() {
    hotelId := "hotelId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    exportMappings := *openapiclient.NewPutExportMappingsRequest() // PutExportMappingsRequest | Request to create export definitions for a given export.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ExportApi.PostExportMappings(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ExportMappings(exportMappings).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ExportApi.PostExportMappings``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostExportMappings`: Status
    fmt.Fprintf(os.Stdout, "Response from `ExportApi.PostExportMappings`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostExportMappingsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **exportMappings** | [**PutExportMappingsRequest**](PutExportMappingsRequest.md) | Request to create export definitions for a given export. | 
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


## PostExportSchedules

> Status PostExportSchedules(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ExportSchedulesCriteria(exportSchedulesCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to create export schedules.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/expcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    exportSchedulesCriteria := *openapiclient.NewPostExportSchedulesRequest() // PostExportSchedulesRequest | Request to create export schedules
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ExportApi.PostExportSchedules(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ExportSchedulesCriteria(exportSchedulesCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ExportApi.PostExportSchedules``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostExportSchedules`: Status
    fmt.Fprintf(os.Stdout, "Response from `ExportApi.PostExportSchedules`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostExportSchedulesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **exportSchedulesCriteria** | [**PostExportSchedulesRequest**](PostExportSchedulesRequest.md) | Request to create export schedules | 
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


## PutExportMappingCodes

> ExportMappingCodesDetails PutExportMappingCodes(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ExportMappingCodes(exportMappingCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to update export mapping codes.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/expcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    exportMappingCodes := *openapiclient.NewPutExportMappingCodesRequest() // PutExportMappingCodesRequest | Request to create export mapping code for a given export.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ExportApi.PutExportMappingCodes(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ExportMappingCodes(exportMappingCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ExportApi.PutExportMappingCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutExportMappingCodes`: ExportMappingCodesDetails
    fmt.Fprintf(os.Stdout, "Response from `ExportApi.PutExportMappingCodes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPutExportMappingCodesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **exportMappingCodes** | [**PutExportMappingCodesRequest**](PutExportMappingCodesRequest.md) | Request to create export mapping code for a given export. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ExportMappingCodesDetails**](ExportMappingCodesDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutExportMappingLinkedTypes

> ExportMappingLinkedTypesDetails PutExportMappingLinkedTypes(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ExportMappingLinkedTypes(exportMappingLinkedTypes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to update export mapping linked types.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/expcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    exportMappingLinkedTypes := *openapiclient.NewPutExportMappingLinkedTypesRequest() // PutExportMappingLinkedTypesRequest | Request to fetch codes linked to export mapping codes.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ExportApi.PutExportMappingLinkedTypes(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ExportMappingLinkedTypes(exportMappingLinkedTypes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ExportApi.PutExportMappingLinkedTypes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutExportMappingLinkedTypes`: ExportMappingLinkedTypesDetails
    fmt.Fprintf(os.Stdout, "Response from `ExportApi.PutExportMappingLinkedTypes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPutExportMappingLinkedTypesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **exportMappingLinkedTypes** | [**PutExportMappingLinkedTypesRequest**](PutExportMappingLinkedTypesRequest.md) | Request to fetch codes linked to export mapping codes. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ExportMappingLinkedTypesDetails**](ExportMappingLinkedTypesDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutExportMappings

> ExportMappingsDetails PutExportMappings(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ExportMappings(exportMappings).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to update export mappings.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/expcfg"
)

func main() {
    hotelId := "hotelId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    exportMappings := *openapiclient.NewPutExportMappingsRequest() // PutExportMappingsRequest | Request to create export definitions for a given export.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ExportApi.PutExportMappings(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ExportMappings(exportMappings).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ExportApi.PutExportMappings``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutExportMappings`: ExportMappingsDetails
    fmt.Fprintf(os.Stdout, "Response from `ExportApi.PutExportMappings`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutExportMappingsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **exportMappings** | [**PutExportMappingsRequest**](PutExportMappingsRequest.md) | Request to create export definitions for a given export. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ExportMappingsDetails**](ExportMappingsDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## RemoveExportSchedules

> Status RemoveExportSchedules(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).JobNames(jobNames).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to remove export schedules.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/expcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    jobNames := []string{"Inner_example"} // []string | Unique name that identifies export schedule (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ExportApi.RemoveExportSchedules(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).JobNames(jobNames).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ExportApi.RemoveExportSchedules``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `RemoveExportSchedules`: Status
    fmt.Fprintf(os.Stdout, "Response from `ExportApi.RemoveExportSchedules`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiRemoveExportSchedulesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **jobNames** | **[]string** | Unique name that identifies export schedule | 
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


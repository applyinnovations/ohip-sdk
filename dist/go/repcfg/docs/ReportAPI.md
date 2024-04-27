# \ReportAPI

All URIs are relative to */rep/config/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ChangeGenericReports**](ReportAPI.md#ChangeGenericReports) | **Put** /genericReports | Update generic reports.
[**CopyReportTextConfiguration**](ReportAPI.md#CopyReportTextConfiguration) | **Put** /reportTextConfiguration/copy | Operation to copy report text configuration.
[**DeleteGenericReports**](ReportAPI.md#DeleteGenericReports) | **Delete** /genericReports | Delete generic reports.
[**GetReportParameters**](ReportAPI.md#GetReportParameters) | **Get** /reportParameters | Return report parameters.
[**GetReports**](ReportAPI.md#GetReports) | **Get** /reports | Return reports.
[**PostGenericReports**](ReportAPI.md#PostGenericReports) | **Post** /genericReports | Create generic reports.



## ChangeGenericReports

> GenericReports ChangeGenericReports(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).GenericReports(genericReports).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Update generic reports.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/repcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    genericReports := *openapiclient.NewGenericReports() // GenericReports | This request provides generic reports to be updated.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReportAPI.ChangeGenericReports(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).GenericReports(genericReports).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReportAPI.ChangeGenericReports``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ChangeGenericReports`: GenericReports
    fmt.Fprintf(os.Stdout, "Response from `ReportAPI.ChangeGenericReports`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiChangeGenericReportsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **genericReports** | [**GenericReports**](GenericReports.md) | This request provides generic reports to be updated. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**GenericReports**](GenericReports.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## CopyReportTextConfiguration

> Status CopyReportTextConfiguration(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ReportTextConfigurationsCopy(reportTextConfigurationsCopy).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to copy report text configuration.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/repcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    reportTextConfigurationsCopy := *openapiclient.NewReportTextConfigurationsCopy() // ReportTextConfigurationsCopy | Request object to copy the Report Text Configuration from Source Property to Destination Properties.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReportAPI.CopyReportTextConfiguration(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ReportTextConfigurationsCopy(reportTextConfigurationsCopy).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReportAPI.CopyReportTextConfiguration``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CopyReportTextConfiguration`: Status
    fmt.Fprintf(os.Stdout, "Response from `ReportAPI.CopyReportTextConfiguration`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCopyReportTextConfigurationRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **reportTextConfigurationsCopy** | [**ReportTextConfigurationsCopy**](ReportTextConfigurationsCopy.md) | Request object to copy the Report Text Configuration from Source Property to Destination Properties. | 
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


## DeleteGenericReports

> Status DeleteGenericReports(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).Id(id).IdContext(idContext).Type_(type_).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete generic reports.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/repcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    hotelId := "hotelId_example" // string | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. (optional)
    id := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    idContext := []string{"Inner_example"} // []string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    type_ := []string{"Inner_example"} // []string | A reference to the type of object defined by the UniqueID element. Refer to OpenTravel Code List Unique ID Type (UIT). (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReportAPI.DeleteGenericReports(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).Id(id).IdContext(idContext).Type_(type_).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReportAPI.DeleteGenericReports``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteGenericReports`: Status
    fmt.Fprintf(os.Stdout, "Response from `ReportAPI.DeleteGenericReports`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDeleteGenericReportsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **hotelId** | **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | 
 **id** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **idContext** | **[]string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **type_** | **[]string** | A reference to the type of object defined by the UniqueID element. Refer to OpenTravel Code List Unique ID Type (UIT). | 
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


## GetReportParameters

> ReportParameters GetReportParameters(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Id(id).IdContext(idContext).Type_(type_).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Return report parameters.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/repcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    id := "id_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    idContext := "idContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    type_ := "type__example" // string | A reference to the type of object defined by the UniqueID element. Refer to OpenTravel Code List Unique ID Type (UIT). (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReportAPI.GetReportParameters(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Id(id).IdContext(idContext).Type_(type_).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReportAPI.GetReportParameters``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetReportParameters`: ReportParameters
    fmt.Fprintf(os.Stdout, "Response from `ReportAPI.GetReportParameters`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetReportParametersRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **id** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **idContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **type_** | **string** | A reference to the type of object defined by the UniqueID element. Refer to OpenTravel Code List Unique ID Type (UIT). | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ReportParameters**](ReportParameters.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetReports

> Reports GetReports(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ExcludeGroup(excludeGroup).IncludeInternalReports(includeInternalReports).IncludeUnpublished(includeUnpublished).IncludeWatermarkDetails(includeWatermarkDetails).Limit(limit).MultiPropertyOnly(multiPropertyOnly).ProtectedReportParam(protectedReportParam).Scheduled(scheduled).Name(name).Group(group).Hotel(hotel).Id(id).IdContext(idContext).Type_(type_).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Return reports.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/repcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    excludeGroup := "excludeGroup_example" // string | Indicates whether a report group should be excluded (optional)
    includeInternalReports := true // bool | Indicates whether sample internal reports are to be included (optional)
    includeUnpublished := true // bool | Indicates whether protected reports should be included (optional)
    includeWatermarkDetails := true // bool | Indicates whether the watermark details is to be populated. This is needed only for the configuration and not for the actual execution. (optional)
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    multiPropertyOnly := true // bool | Indicates whether the result set should only include multi-property reports. (optional)
    protectedReportParam := true // bool | Indicates whether protected reports should be included (optional)
    scheduled := true // bool | Indicates that only reports that can be scheduled are included (optional)
    name := "name_example" // string | Partial report name or description to search. (optional)
    group := "group_example" // string | Report group to limit search. (optional)
    hotel := "hotel_example" // string | Hotel code to search reports for. (optional)
    id := "id_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    idContext := "idContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    type_ := "type__example" // string | A reference to the type of object defined by the UniqueID element. Refer to OpenTravel Code List Unique ID Type (UIT). (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReportAPI.GetReports(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ExcludeGroup(excludeGroup).IncludeInternalReports(includeInternalReports).IncludeUnpublished(includeUnpublished).IncludeWatermarkDetails(includeWatermarkDetails).Limit(limit).MultiPropertyOnly(multiPropertyOnly).ProtectedReportParam(protectedReportParam).Scheduled(scheduled).Name(name).Group(group).Hotel(hotel).Id(id).IdContext(idContext).Type_(type_).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReportAPI.GetReports``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetReports`: Reports
    fmt.Fprintf(os.Stdout, "Response from `ReportAPI.GetReports`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetReportsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **excludeGroup** | **string** | Indicates whether a report group should be excluded | 
 **includeInternalReports** | **bool** | Indicates whether sample internal reports are to be included | 
 **includeUnpublished** | **bool** | Indicates whether protected reports should be included | 
 **includeWatermarkDetails** | **bool** | Indicates whether the watermark details is to be populated. This is needed only for the configuration and not for the actual execution. | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **multiPropertyOnly** | **bool** | Indicates whether the result set should only include multi-property reports. | 
 **protectedReportParam** | **bool** | Indicates whether protected reports should be included | 
 **scheduled** | **bool** | Indicates that only reports that can be scheduled are included | 
 **name** | **string** | Partial report name or description to search. | 
 **group** | **string** | Report group to limit search. | 
 **hotel** | **string** | Hotel code to search reports for. | 
 **id** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **idContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **type_** | **string** | A reference to the type of object defined by the UniqueID element. Refer to OpenTravel Code List Unique ID Type (UIT). | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Reports**](Reports.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostGenericReports

> Status PostGenericReports(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).GenericReports(genericReports).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create generic reports.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/repcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    genericReports := *openapiclient.NewGenericReports() // GenericReports | This request provides End of Day reports to be created.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReportAPI.PostGenericReports(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).GenericReports(genericReports).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReportAPI.PostGenericReports``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostGenericReports`: Status
    fmt.Fprintf(os.Stdout, "Response from `ReportAPI.PostGenericReports`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostGenericReportsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **genericReports** | [**GenericReports**](GenericReports.md) | This request provides End of Day reports to be created. | 
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


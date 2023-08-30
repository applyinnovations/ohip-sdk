# \ActivityManagementApi

All URIs are relative to */act/config/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CopyActivityTypesConfig**](ActivityManagementApi.md#CopyActivityTypesConfig) | **Post** /copyActivityTypes/sourceHotel/{hotelId} | Copy Activity Types configuration codes
[**CopyAutoTraceDefinitions**](ActivityManagementApi.md#CopyAutoTraceDefinitions) | **Post** /copyAutoTraceDefinitions/sourceHotel/{hotelId} | Copy an Auto Trace definition Code
[**DeleteActivityManagementServicesCache**](ActivityManagementApi.md#DeleteActivityManagementServicesCache) | **Delete** /services/activityManagement/cache | Operation to clear cache.
[**DeleteActivityResultsConfig**](ActivityManagementApi.md#DeleteActivityResultsConfig) | **Delete** /activityResults/{activityResultCode} | Delete an Activity results code
[**DeleteActivityTypes**](ActivityManagementApi.md#DeleteActivityTypes) | **Delete** /hotels/{hotelId}/activityTypes/{activityTypeCode} | Delete an Activity Type Code
[**DeleteAutoTraceCodes**](ActivityManagementApi.md#DeleteAutoTraceCodes) | **Delete** /autoTraceCodes/{autoTraceCode} | Delete an Auto Trace code
[**DeleteAutoTraceDefinitions**](ActivityManagementApi.md#DeleteAutoTraceDefinitions) | **Delete** /autoTraceDefinitions/{autoTraceDefinitionId} | Delete an Auto Trace definitions Code
[**DeleteAutoTraceOwnerAssignments**](ActivityManagementApi.md#DeleteAutoTraceOwnerAssignments) | **Delete** /autoTraceOwnerAssignments/{autoTraceOwnerAssignmentID} | Delete an Auto Trace owner assignment 
[**GetActivityResultsConfig**](ActivityManagementApi.md#GetActivityResultsConfig) | **Get** /activityResults | Get all Configured Activity Result Codes 
[**GetActivityTypes**](ActivityManagementApi.md#GetActivityTypes) | **Get** /hotels/{hotelId}/activityTypes | Get all Activity Type Codes
[**GetAutoTraceCodes**](ActivityManagementApi.md#GetAutoTraceCodes) | **Get** /autoTraceCodes | Get Auto Trace codes
[**GetAutoTraceDefinitions**](ActivityManagementApi.md#GetAutoTraceDefinitions) | **Get** /hotels/{hotelId}/autoTraceDefinitions | Get a list of Auto Trace definition Codes
[**GetAutoTraceOwnerAssignments**](ActivityManagementApi.md#GetAutoTraceOwnerAssignments) | **Get** /hotels/{hotelId}/autoTraceOwnerAssignments | Get an Auto Trace owner mappings
[**PingActivityManagementServices**](ActivityManagementApi.md#PingActivityManagementServices) | **Get** /services/activityManagement/status | Operation to ping.
[**PostActivityResultsConfig**](ActivityManagementApi.md#PostActivityResultsConfig) | **Post** /activityResults | Create an Activity results code
[**PostActivityTypes**](ActivityManagementApi.md#PostActivityTypes) | **Post** /hotels/{hotelId}/activityTypes | Create a new Activity type in configuration
[**PostAutoTraceCodes**](ActivityManagementApi.md#PostAutoTraceCodes) | **Post** /autoTraceCodes | Create an Auto Trace code
[**PostAutoTraceDefinitions**](ActivityManagementApi.md#PostAutoTraceDefinitions) | **Post** /hotels/{hotelId}/autoTraceDefinitions | Create an Auto Trace Definition Code
[**PostAutoTraceOwnerAssignments**](ActivityManagementApi.md#PostAutoTraceOwnerAssignments) | **Post** /hotels/{hotelId}/autoTraceOwnerAssignments | Create an Auto Trace owner assignment
[**PutActivityResultsConfig**](ActivityManagementApi.md#PutActivityResultsConfig) | **Put** /activityResults/{activityResultCode} | Change an Activity Result Code
[**PutActivityTypes**](ActivityManagementApi.md#PutActivityTypes) | **Put** /hotels/{hotelId}/activityTypes/{activityTypeCode} | Update Activity Types
[**PutAutoTraceCodes**](ActivityManagementApi.md#PutAutoTraceCodes) | **Put** /autoTraceCodes/{autoTraceCode} | Change an Auto Trace code
[**PutAutoTraceDefinitions**](ActivityManagementApi.md#PutAutoTraceDefinitions) | **Put** /hotels/{hotelId}/autoTraceDefinitions/{autoTraceDefinitionId} | Change an Auto Trace definition Code
[**PutAutoTraceOwnerAssignments**](ActivityManagementApi.md#PutAutoTraceOwnerAssignments) | **Put** /hotels/{hotelId}/autoTraceOwnerAssignments/{autoTraceOwnerAssignmentID} | Change Trace owner assignments



## CopyActivityTypesConfig

> Status CopyActivityTypesConfig(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ActivityTypesConfigCopy(activityTypesConfigCopy).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Copy Activity Types configuration codes



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/actcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of the source hotel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    activityTypesConfigCopy := *openapiclient.NewCopyActivityTypesConfigRequest() // CopyActivityTypesConfigRequest | 
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ActivityManagementApi.CopyActivityTypesConfig(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ActivityTypesConfigCopy(activityTypesConfigCopy).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ActivityManagementApi.CopyActivityTypesConfig``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CopyActivityTypesConfig`: Status
    fmt.Fprintf(os.Stdout, "Response from `ActivityManagementApi.CopyActivityTypesConfig`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the source hotel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiCopyActivityTypesConfigRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **activityTypesConfigCopy** | [**CopyActivityTypesConfigRequest**](CopyActivityTypesConfigRequest.md) |  | 
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


## CopyAutoTraceDefinitions

> Status CopyAutoTraceDefinitions(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AutoTraceDefinitionCopy(autoTraceDefinitionCopy).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Copy an Auto Trace definition Code



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/actcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of hotel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    autoTraceDefinitionCopy := *openapiclient.NewCopyAutoTraceDefinitionsRequest() // CopyAutoTraceDefinitionsRequest | Request object for copying trace definition.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ActivityManagementApi.CopyAutoTraceDefinitions(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AutoTraceDefinitionCopy(autoTraceDefinitionCopy).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ActivityManagementApi.CopyAutoTraceDefinitions``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CopyAutoTraceDefinitions`: Status
    fmt.Fprintf(os.Stdout, "Response from `ActivityManagementApi.CopyAutoTraceDefinitions`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of hotel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiCopyAutoTraceDefinitionsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **autoTraceDefinitionCopy** | [**CopyAutoTraceDefinitionsRequest**](CopyAutoTraceDefinitionsRequest.md) | Request object for copying trace definition. | 
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


## DeleteActivityManagementServicesCache

> Status DeleteActivityManagementServicesCache(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to clear cache.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/actcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ActivityManagementApi.DeleteActivityManagementServicesCache(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ActivityManagementApi.DeleteActivityManagementServicesCache``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteActivityManagementServicesCache`: Status
    fmt.Fprintf(os.Stdout, "Response from `ActivityManagementApi.DeleteActivityManagementServicesCache`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDeleteActivityManagementServicesCacheRequest struct via the builder pattern


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


## DeleteActivityResultsConfig

> Status DeleteActivityResultsConfig(ctx, activityResultCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete an Activity results code



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/actcfg"
)

func main() {
    activityResultCode := "activityResultCode_example" // string | Activity Result Code.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ActivityManagementApi.DeleteActivityResultsConfig(context.Background(), activityResultCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ActivityManagementApi.DeleteActivityResultsConfig``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteActivityResultsConfig`: Status
    fmt.Fprintf(os.Stdout, "Response from `ActivityManagementApi.DeleteActivityResultsConfig`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**activityResultCode** | **string** | Activity Result Code. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteActivityResultsConfigRequest struct via the builder pattern


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


## DeleteActivityTypes

> Status DeleteActivityTypes(ctx, activityTypeCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete an Activity Type Code



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/actcfg"
)

func main() {
    activityTypeCode := "activityTypeCode_example" // string | Activity Type Code.
    hotelId := "hotelId_example" // string | Unique ID of hotel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ActivityManagementApi.DeleteActivityTypes(context.Background(), activityTypeCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ActivityManagementApi.DeleteActivityTypes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteActivityTypes`: Status
    fmt.Fprintf(os.Stdout, "Response from `ActivityManagementApi.DeleteActivityTypes`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**activityTypeCode** | **string** | Activity Type Code. | 
**hotelId** | **string** | Unique ID of hotel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteActivityTypesRequest struct via the builder pattern


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


## DeleteAutoTraceCodes

> Status DeleteAutoTraceCodes(ctx, autoTraceCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete an Auto Trace code



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/actcfg"
)

func main() {
    autoTraceCode := "autoTraceCode_example" // string | Unique code of trace.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ActivityManagementApi.DeleteAutoTraceCodes(context.Background(), autoTraceCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ActivityManagementApi.DeleteAutoTraceCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteAutoTraceCodes`: Status
    fmt.Fprintf(os.Stdout, "Response from `ActivityManagementApi.DeleteAutoTraceCodes`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**autoTraceCode** | **string** | Unique code of trace. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteAutoTraceCodesRequest struct via the builder pattern


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


## DeleteAutoTraceDefinitions

> Status DeleteAutoTraceDefinitions(ctx, autoTraceDefinitionId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete an Auto Trace definitions Code



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/actcfg"
)

func main() {
    autoTraceDefinitionId := "autoTraceDefinitionId_example" // string | Unique ID of trace.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ActivityManagementApi.DeleteAutoTraceDefinitions(context.Background(), autoTraceDefinitionId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ActivityManagementApi.DeleteAutoTraceDefinitions``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteAutoTraceDefinitions`: Status
    fmt.Fprintf(os.Stdout, "Response from `ActivityManagementApi.DeleteAutoTraceDefinitions`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**autoTraceDefinitionId** | **string** | Unique ID of trace. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteAutoTraceDefinitionsRequest struct via the builder pattern


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


## DeleteAutoTraceOwnerAssignments

> Status DeleteAutoTraceOwnerAssignments(ctx, autoTraceOwnerAssignmentID).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete an Auto Trace owner assignment 



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/actcfg"
)

func main() {
    autoTraceOwnerAssignmentID := "autoTraceOwnerAssignmentID_example" // string | Unique ID of trace owner.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ActivityManagementApi.DeleteAutoTraceOwnerAssignments(context.Background(), autoTraceOwnerAssignmentID).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ActivityManagementApi.DeleteAutoTraceOwnerAssignments``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteAutoTraceOwnerAssignments`: Status
    fmt.Fprintf(os.Stdout, "Response from `ActivityManagementApi.DeleteAutoTraceOwnerAssignments`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**autoTraceOwnerAssignmentID** | **string** | Unique ID of trace owner. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteAutoTraceOwnerAssignmentsRequest struct via the builder pattern


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


## GetActivityResultsConfig

> ActivityResultsConfigDetails GetActivityResultsConfig(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).FetchInactive(fetchInactive).Codes(codes).WildCard(wildCard).Description(description).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get all Configured Activity Result Codes 



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/actcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    offset := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional) (default to 0)
    fetchInactive := true // bool | Determines wether to fetch inactive records or not. (optional)
    codes := []string{"Inner_example"} // []string | Codes to be searched. (optional)
    wildCard := "wildCard_example" // string | Wildcard search on the code. (optional)
    description := "description_example" // string | Description of the code. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ActivityManagementApi.GetActivityResultsConfig(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).FetchInactive(fetchInactive).Codes(codes).WildCard(wildCard).Description(description).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ActivityManagementApi.GetActivityResultsConfig``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetActivityResultsConfig`: ActivityResultsConfigDetails
    fmt.Fprintf(os.Stdout, "Response from `ActivityManagementApi.GetActivityResultsConfig`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetActivityResultsConfigRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **offset** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [default to 0]
 **fetchInactive** | **bool** | Determines wether to fetch inactive records or not. | 
 **codes** | **[]string** | Codes to be searched. | 
 **wildCard** | **string** | Wildcard search on the code. | 
 **description** | **string** | Description of the code. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ActivityResultsConfigDetails**](ActivityResultsConfigDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetActivityTypes

> ActivityTypesConfigDetails GetActivityTypes(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).ActivityType(activityType).Description(description).Inactive(inactive).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get all Activity Type Codes



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/actcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of hotel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    offset := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional) (default to 0)
    activityType := []string{"Inner_example"} // []string |  (optional)
    description := "description_example" // string | Description for the activity type is to be searched for. (optional)
    inactive := true // bool | Determines whether to fetch inactive records or not. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ActivityManagementApi.GetActivityTypes(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).ActivityType(activityType).Description(description).Inactive(inactive).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ActivityManagementApi.GetActivityTypes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetActivityTypes`: ActivityTypesConfigDetails
    fmt.Fprintf(os.Stdout, "Response from `ActivityManagementApi.GetActivityTypes`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of hotel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetActivityTypesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **offset** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [default to 0]
 **activityType** | **[]string** |  | 
 **description** | **string** | Description for the activity type is to be searched for. | 
 **inactive** | **bool** | Determines whether to fetch inactive records or not. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ActivityTypesConfigDetails**](ActivityTypesConfigDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetAutoTraceCodes

> AutoTraceCodesDetails GetAutoTraceCodes(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).Codes(codes).AutoTraceGroups(autoTraceGroups).Description(description).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Auto Trace codes



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/actcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    offset := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional) (default to 0)
    codes := []string{"Inner_example"} // []string |  (optional)
    autoTraceGroups := []string{"AutoTraceGroups_example"} // []string | A collection of supported list of Auto Trace Groups. (optional)
    description := "description_example" // string | Description for the Trace Code to be searched for. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ActivityManagementApi.GetAutoTraceCodes(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).Codes(codes).AutoTraceGroups(autoTraceGroups).Description(description).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ActivityManagementApi.GetAutoTraceCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetAutoTraceCodes`: AutoTraceCodesDetails
    fmt.Fprintf(os.Stdout, "Response from `ActivityManagementApi.GetAutoTraceCodes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetAutoTraceCodesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **offset** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [default to 0]
 **codes** | **[]string** |  | 
 **autoTraceGroups** | **[]string** | A collection of supported list of Auto Trace Groups. | 
 **description** | **string** | Description for the Trace Code to be searched for. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**AutoTraceCodesDetails**](AutoTraceCodesDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetAutoTraceDefinitions

> AutoTraceDefinitionsDetails GetAutoTraceDefinitions(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).Codes(codes).AutoTraceGroups(autoTraceGroups).Inactive(inactive).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get a list of Auto Trace definition Codes



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/actcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of hotel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    offset := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional) (default to 0)
    codes := []string{"Inner_example"} // []string |  (optional)
    autoTraceGroups := []string{"AutoTraceGroups_example"} // []string | A collection of supported list of Auto Trace Groups. (optional)
    inactive := true // bool | Determines whether to fetch inactive records or not. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ActivityManagementApi.GetAutoTraceDefinitions(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).Codes(codes).AutoTraceGroups(autoTraceGroups).Inactive(inactive).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ActivityManagementApi.GetAutoTraceDefinitions``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetAutoTraceDefinitions`: AutoTraceDefinitionsDetails
    fmt.Fprintf(os.Stdout, "Response from `ActivityManagementApi.GetAutoTraceDefinitions`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of hotel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetAutoTraceDefinitionsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **offset** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [default to 0]
 **codes** | **[]string** |  | 
 **autoTraceGroups** | **[]string** | A collection of supported list of Auto Trace Groups. | 
 **inactive** | **bool** | Determines whether to fetch inactive records or not. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**AutoTraceDefinitionsDetails**](AutoTraceDefinitionsDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetAutoTraceOwnerAssignments

> AutoTraceOwnerAssignmentsDetails GetAutoTraceOwnerAssignments(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).Codes(codes).TraceOwnerCodes(traceOwnerCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get an Auto Trace owner mappings



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/actcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of hotel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    offset := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional) (default to 0)
    codes := []string{"Inner_example"} // []string |  (optional)
    traceOwnerCodes := []string{"Inner_example"} // []string |  (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ActivityManagementApi.GetAutoTraceOwnerAssignments(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).Codes(codes).TraceOwnerCodes(traceOwnerCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ActivityManagementApi.GetAutoTraceOwnerAssignments``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetAutoTraceOwnerAssignments`: AutoTraceOwnerAssignmentsDetails
    fmt.Fprintf(os.Stdout, "Response from `ActivityManagementApi.GetAutoTraceOwnerAssignments`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of hotel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetAutoTraceOwnerAssignmentsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **offset** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [default to 0]
 **codes** | **[]string** |  | 
 **traceOwnerCodes** | **[]string** |  | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**AutoTraceOwnerAssignmentsDetails**](AutoTraceOwnerAssignmentsDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PingActivityManagementServices

> OperaVersion PingActivityManagementServices(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to ping.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/actcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ActivityManagementApi.PingActivityManagementServices(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ActivityManagementApi.PingActivityManagementServices``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PingActivityManagementServices`: OperaVersion
    fmt.Fprintf(os.Stdout, "Response from `ActivityManagementApi.PingActivityManagementServices`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPingActivityManagementServicesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**OperaVersion**](OperaVersion.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostActivityResultsConfig

> Status PostActivityResultsConfig(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ActivityResultsConfigInfo(activityResultsConfigInfo).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create an Activity results code



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/actcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    activityResultsConfigInfo := *openapiclient.NewPostActivityResultsConfigRequest() // PostActivityResultsConfigRequest | Request object for creating Activity Results Configuration.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ActivityManagementApi.PostActivityResultsConfig(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ActivityResultsConfigInfo(activityResultsConfigInfo).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ActivityManagementApi.PostActivityResultsConfig``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostActivityResultsConfig`: Status
    fmt.Fprintf(os.Stdout, "Response from `ActivityManagementApi.PostActivityResultsConfig`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostActivityResultsConfigRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **activityResultsConfigInfo** | [**PostActivityResultsConfigRequest**](PostActivityResultsConfigRequest.md) | Request object for creating Activity Results Configuration. | 
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


## PostActivityTypes

> Status PostActivityTypes(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ActivityTypesConfigInfo(activityTypesConfigInfo).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create a new Activity type in configuration



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/actcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of hotel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    activityTypesConfigInfo := *openapiclient.NewPostActivityTypesRequest() // PostActivityTypesRequest | Request object for creating activity types.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ActivityManagementApi.PostActivityTypes(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ActivityTypesConfigInfo(activityTypesConfigInfo).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ActivityManagementApi.PostActivityTypes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostActivityTypes`: Status
    fmt.Fprintf(os.Stdout, "Response from `ActivityManagementApi.PostActivityTypes`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of hotel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostActivityTypesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **activityTypesConfigInfo** | [**PostActivityTypesRequest**](PostActivityTypesRequest.md) | Request object for creating activity types. | 
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


## PostAutoTraceCodes

> Status PostAutoTraceCodes(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AutoTraceCodesInfo(autoTraceCodesInfo).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create an Auto Trace code



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/actcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    autoTraceCodesInfo := *openapiclient.NewPostAutoTraceCodesRequest() // PostAutoTraceCodesRequest | Request object for creating Auto Trace Codes.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ActivityManagementApi.PostAutoTraceCodes(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AutoTraceCodesInfo(autoTraceCodesInfo).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ActivityManagementApi.PostAutoTraceCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostAutoTraceCodes`: Status
    fmt.Fprintf(os.Stdout, "Response from `ActivityManagementApi.PostAutoTraceCodes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostAutoTraceCodesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **autoTraceCodesInfo** | [**PostAutoTraceCodesRequest**](PostAutoTraceCodesRequest.md) | Request object for creating Auto Trace Codes. | 
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


## PostAutoTraceDefinitions

> Status PostAutoTraceDefinitions(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AutoTraceDefinitionsInfo(autoTraceDefinitionsInfo).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create an Auto Trace Definition Code



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/actcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of hotel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    autoTraceDefinitionsInfo := *openapiclient.NewPostAutoTraceDefinitionsRequest() // PostAutoTraceDefinitionsRequest | Request object for creating Auto Trace Definitions.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ActivityManagementApi.PostAutoTraceDefinitions(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AutoTraceDefinitionsInfo(autoTraceDefinitionsInfo).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ActivityManagementApi.PostAutoTraceDefinitions``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostAutoTraceDefinitions`: Status
    fmt.Fprintf(os.Stdout, "Response from `ActivityManagementApi.PostAutoTraceDefinitions`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of hotel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostAutoTraceDefinitionsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **autoTraceDefinitionsInfo** | [**PostAutoTraceDefinitionsRequest**](PostAutoTraceDefinitionsRequest.md) | Request object for creating Auto Trace Definitions. | 
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


## PostAutoTraceOwnerAssignments

> Status PostAutoTraceOwnerAssignments(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AutoTraceOwnerAssignmentsInfo(autoTraceOwnerAssignmentsInfo).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create an Auto Trace owner assignment



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/actcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of hotel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    autoTraceOwnerAssignmentsInfo := *openapiclient.NewPostAutoTraceOwnerAssignmentsRequest() // PostAutoTraceOwnerAssignmentsRequest | Request object for creating trace owner assignments.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ActivityManagementApi.PostAutoTraceOwnerAssignments(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AutoTraceOwnerAssignmentsInfo(autoTraceOwnerAssignmentsInfo).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ActivityManagementApi.PostAutoTraceOwnerAssignments``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostAutoTraceOwnerAssignments`: Status
    fmt.Fprintf(os.Stdout, "Response from `ActivityManagementApi.PostAutoTraceOwnerAssignments`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of hotel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostAutoTraceOwnerAssignmentsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **autoTraceOwnerAssignmentsInfo** | [**PostAutoTraceOwnerAssignmentsRequest**](PostAutoTraceOwnerAssignmentsRequest.md) | Request object for creating trace owner assignments. | 
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


## PutActivityResultsConfig

> Status PutActivityResultsConfig(ctx, activityResultCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ActivityResultsConfigInfo(activityResultsConfigInfo).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change an Activity Result Code



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/actcfg"
)

func main() {
    activityResultCode := "activityResultCode_example" // string | Activity Result Code.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    activityResultsConfigInfo := *openapiclient.NewPostActivityResultsConfigRequest() // PostActivityResultsConfigRequest | Request object for changing Activity Results Configuration.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ActivityManagementApi.PutActivityResultsConfig(context.Background(), activityResultCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ActivityResultsConfigInfo(activityResultsConfigInfo).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ActivityManagementApi.PutActivityResultsConfig``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutActivityResultsConfig`: Status
    fmt.Fprintf(os.Stdout, "Response from `ActivityManagementApi.PutActivityResultsConfig`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**activityResultCode** | **string** | Activity Result Code. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutActivityResultsConfigRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **activityResultsConfigInfo** | [**PostActivityResultsConfigRequest**](PostActivityResultsConfigRequest.md) | Request object for changing Activity Results Configuration. | 
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


## PutActivityTypes

> Status PutActivityTypes(ctx, activityTypeCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ActivityTypesConfigInfo(activityTypesConfigInfo).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Update Activity Types



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/actcfg"
)

func main() {
    activityTypeCode := "activityTypeCode_example" // string | Activity Type Code.
    hotelId := "hotelId_example" // string | Unique ID of hotel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    activityTypesConfigInfo := *openapiclient.NewPostActivityTypesRequest() // PostActivityTypesRequest | Request object for changing activity types.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ActivityManagementApi.PutActivityTypes(context.Background(), activityTypeCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ActivityTypesConfigInfo(activityTypesConfigInfo).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ActivityManagementApi.PutActivityTypes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutActivityTypes`: Status
    fmt.Fprintf(os.Stdout, "Response from `ActivityManagementApi.PutActivityTypes`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**activityTypeCode** | **string** | Activity Type Code. | 
**hotelId** | **string** | Unique ID of hotel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutActivityTypesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **activityTypesConfigInfo** | [**PostActivityTypesRequest**](PostActivityTypesRequest.md) | Request object for changing activity types. | 
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


## PutAutoTraceCodes

> Status PutAutoTraceCodes(ctx, autoTraceCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AutoTraceCodesInfo(autoTraceCodesInfo).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change an Auto Trace code



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/actcfg"
)

func main() {
    autoTraceCode := "autoTraceCode_example" // string | Unique code of trace.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    autoTraceCodesInfo := *openapiclient.NewPostAutoTraceCodesRequest() // PostAutoTraceCodesRequest | Request object for changing Auto Trace Codes.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ActivityManagementApi.PutAutoTraceCodes(context.Background(), autoTraceCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AutoTraceCodesInfo(autoTraceCodesInfo).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ActivityManagementApi.PutAutoTraceCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutAutoTraceCodes`: Status
    fmt.Fprintf(os.Stdout, "Response from `ActivityManagementApi.PutAutoTraceCodes`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**autoTraceCode** | **string** | Unique code of trace. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutAutoTraceCodesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **autoTraceCodesInfo** | [**PostAutoTraceCodesRequest**](PostAutoTraceCodesRequest.md) | Request object for changing Auto Trace Codes. | 
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


## PutAutoTraceDefinitions

> AutoTraceDefinitionsStatus PutAutoTraceDefinitions(ctx, autoTraceDefinitionId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AutoTraceDefinitionsInfo(autoTraceDefinitionsInfo).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change an Auto Trace definition Code



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/actcfg"
)

func main() {
    autoTraceDefinitionId := "autoTraceDefinitionId_example" // string | Unique ID of trace.
    hotelId := "hotelId_example" // string | Unique ID of hotel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    autoTraceDefinitionsInfo := *openapiclient.NewPostAutoTraceDefinitionsRequest() // PostAutoTraceDefinitionsRequest | Request object for changing Auto Trace Definitions.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ActivityManagementApi.PutAutoTraceDefinitions(context.Background(), autoTraceDefinitionId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AutoTraceDefinitionsInfo(autoTraceDefinitionsInfo).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ActivityManagementApi.PutAutoTraceDefinitions``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutAutoTraceDefinitions`: AutoTraceDefinitionsStatus
    fmt.Fprintf(os.Stdout, "Response from `ActivityManagementApi.PutAutoTraceDefinitions`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**autoTraceDefinitionId** | **string** | Unique ID of trace. | 
**hotelId** | **string** | Unique ID of hotel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutAutoTraceDefinitionsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **autoTraceDefinitionsInfo** | [**PostAutoTraceDefinitionsRequest**](PostAutoTraceDefinitionsRequest.md) | Request object for changing Auto Trace Definitions. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**AutoTraceDefinitionsStatus**](AutoTraceDefinitionsStatus.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutAutoTraceOwnerAssignments

> AutoTraceOwnerAssignmentsStatus PutAutoTraceOwnerAssignments(ctx, autoTraceOwnerAssignmentID, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AutoTraceOwnerAssignmentsInfo(autoTraceOwnerAssignmentsInfo).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change Trace owner assignments



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/actcfg"
)

func main() {
    autoTraceOwnerAssignmentID := "autoTraceOwnerAssignmentID_example" // string | Unique ID of trace owner.
    hotelId := "hotelId_example" // string | Unique ID of hotel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    autoTraceOwnerAssignmentsInfo := *openapiclient.NewPostAutoTraceOwnerAssignmentsRequest() // PostAutoTraceOwnerAssignmentsRequest | Request object for changing trace owner assignments.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ActivityManagementApi.PutAutoTraceOwnerAssignments(context.Background(), autoTraceOwnerAssignmentID, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AutoTraceOwnerAssignmentsInfo(autoTraceOwnerAssignmentsInfo).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ActivityManagementApi.PutAutoTraceOwnerAssignments``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutAutoTraceOwnerAssignments`: AutoTraceOwnerAssignmentsStatus
    fmt.Fprintf(os.Stdout, "Response from `ActivityManagementApi.PutAutoTraceOwnerAssignments`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**autoTraceOwnerAssignmentID** | **string** | Unique ID of trace owner. | 
**hotelId** | **string** | Unique ID of hotel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutAutoTraceOwnerAssignmentsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **autoTraceOwnerAssignmentsInfo** | [**PostAutoTraceOwnerAssignmentsRequest**](PostAutoTraceOwnerAssignmentsRequest.md) | Request object for changing trace owner assignments. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**AutoTraceOwnerAssignmentsStatus**](AutoTraceOwnerAssignmentsStatus.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


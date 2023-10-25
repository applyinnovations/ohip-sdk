# \AccountsReceivablesConfigApi

All URIs are relative to */fof/config/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**DeleteARAccountTypes**](AccountsReceivablesConfigApi.md#DeleteARAccountTypes) | **Delete** /accountTypes | Operation to remove AR Account types.
[**DeleteARFlaggedReasons**](AccountsReceivablesConfigApi.md#DeleteARFlaggedReasons) | **Delete** /flaggedReasons | Operation to remove AR flagged reasons.
[**GetARAccountTypes**](AccountsReceivablesConfigApi.md#GetARAccountTypes) | **Get** /hotels/{hotelId}/ARAccountTypes | Operation to fetch AR account types.
[**GetARFlaggedReasons**](AccountsReceivablesConfigApi.md#GetARFlaggedReasons) | **Get** /flaggedReasons | Operation to fetch AR flagged reasons.
[**PostARAccountTypes**](AccountsReceivablesConfigApi.md#PostARAccountTypes) | **Post** /accountTypes | Operation to create AR Account Types.
[**PostARFlaggedReasons**](AccountsReceivablesConfigApi.md#PostARFlaggedReasons) | **Post** /flaggedReasons | Operation to create AR flagged reasons.
[**PutARAccountTypes**](AccountsReceivablesConfigApi.md#PutARAccountTypes) | **Put** /accountTypes | Operation to modify AR Account Types.
[**PutARFlaggedReasons**](AccountsReceivablesConfigApi.md#PutARFlaggedReasons) | **Put** /flaggedReasons | Operation to change AR flagged reasons.



## DeleteARAccountTypes

> Status DeleteARAccountTypes(ctx).HotelId(hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AccountTypes(accountTypes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to remove AR Account types.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    hotelId := []string{"Inner_example"} // []string | Property associated with account type
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    accountTypes := []string{"Inner_example"} // []string | Account receivable account type (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.AccountsReceivablesConfigApi.DeleteARAccountTypes(context.Background()).HotelId(hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AccountTypes(accountTypes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AccountsReceivablesConfigApi.DeleteARAccountTypes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteARAccountTypes`: Status
    fmt.Fprintf(os.Stdout, "Response from `AccountsReceivablesConfigApi.DeleteARAccountTypes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDeleteARAccountTypesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hotelId** | **[]string** | Property associated with account type | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **accountTypes** | **[]string** | Account receivable account type | 
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


## DeleteARFlaggedReasons

> Status DeleteARFlaggedReasons(ctx).HotelIds(hotelIds).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Codes(codes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to remove AR flagged reasons.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    hotelIds := []string{"Inner_example"} // []string | Hotel where the code is configured.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    codes := []string{"Inner_example"} // []string | Configuration code. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.AccountsReceivablesConfigApi.DeleteARFlaggedReasons(context.Background()).HotelIds(hotelIds).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Codes(codes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AccountsReceivablesConfigApi.DeleteARFlaggedReasons``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteARFlaggedReasons`: Status
    fmt.Fprintf(os.Stdout, "Response from `AccountsReceivablesConfigApi.DeleteARFlaggedReasons`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDeleteARFlaggedReasonsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hotelIds** | **[]string** | Hotel where the code is configured. | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **codes** | **[]string** | Configuration code. | 
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


## GetARAccountTypes

> ArAccountTypes GetARAccountTypes(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AccountType(accountType).Description(description).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to fetch AR account types.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of the hotel in OPERA
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    accountType := "accountType_example" // string | Account receivable account type (optional)
    description := "description_example" // string | Full description of account type (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.AccountsReceivablesConfigApi.GetARAccountTypes(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AccountType(accountType).Description(description).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AccountsReceivablesConfigApi.GetARAccountTypes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetARAccountTypes`: ArAccountTypes
    fmt.Fprintf(os.Stdout, "Response from `AccountsReceivablesConfigApi.GetARAccountTypes`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel in OPERA | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetARAccountTypesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **accountType** | **string** | Account receivable account type | 
 **description** | **string** | Full description of account type | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ArAccountTypes**](ArAccountTypes.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetARFlaggedReasons

> ArFlaggedReasons GetARFlaggedReasons(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ReasonCodes(reasonCodes).ReasonWildCard(reasonWildCard).Description(description).PropertyCodes(propertyCodes).PropertyWildCard(propertyWildCard).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to fetch AR flagged reasons.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    reasonCodes := []string{"Inner_example"} // []string | Codes to be searched. (optional)
    reasonWildCard := "reasonWildCard_example" // string | Wildcard search on the code. (optional)
    description := "description_example" // string | Description text set to the search criteria (optional)
    propertyCodes := []string{"Inner_example"} // []string | Codes to be searched. (optional)
    propertyWildCard := "propertyWildCard_example" // string | Wildcard search on the code. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.AccountsReceivablesConfigApi.GetARFlaggedReasons(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ReasonCodes(reasonCodes).ReasonWildCard(reasonWildCard).Description(description).PropertyCodes(propertyCodes).PropertyWildCard(propertyWildCard).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AccountsReceivablesConfigApi.GetARFlaggedReasons``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetARFlaggedReasons`: ArFlaggedReasons
    fmt.Fprintf(os.Stdout, "Response from `AccountsReceivablesConfigApi.GetARFlaggedReasons`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetARFlaggedReasonsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **reasonCodes** | **[]string** | Codes to be searched. | 
 **reasonWildCard** | **string** | Wildcard search on the code. | 
 **description** | **string** | Description text set to the search criteria | 
 **propertyCodes** | **[]string** | Codes to be searched. | 
 **propertyWildCard** | **string** | Wildcard search on the code. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ArFlaggedReasons**](ArFlaggedReasons.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostARAccountTypes

> Status PostARAccountTypes(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ArAccountTypes(arAccountTypes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to create AR Account Types.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    arAccountTypes := *openapiclient.NewPutARAccountTypesRequest() // PutARAccountTypesRequest | Request object to create account receivables account types
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.AccountsReceivablesConfigApi.PostARAccountTypes(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ArAccountTypes(arAccountTypes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AccountsReceivablesConfigApi.PostARAccountTypes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostARAccountTypes`: Status
    fmt.Fprintf(os.Stdout, "Response from `AccountsReceivablesConfigApi.PostARAccountTypes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostARAccountTypesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **arAccountTypes** | [**PutARAccountTypesRequest**](PutARAccountTypesRequest.md) | Request object to create account receivables account types | 
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


## PostARFlaggedReasons

> Status PostARFlaggedReasons(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ArFlaggedReasons(arFlaggedReasons).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to create AR flagged reasons.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    arFlaggedReasons := *openapiclient.NewPutARFlaggedReasonsRequest() // PutARFlaggedReasonsRequest | Request object to create Flagged Reason
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.AccountsReceivablesConfigApi.PostARFlaggedReasons(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ArFlaggedReasons(arFlaggedReasons).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AccountsReceivablesConfigApi.PostARFlaggedReasons``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostARFlaggedReasons`: Status
    fmt.Fprintf(os.Stdout, "Response from `AccountsReceivablesConfigApi.PostARFlaggedReasons`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostARFlaggedReasonsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **arFlaggedReasons** | [**PutARFlaggedReasonsRequest**](PutARFlaggedReasonsRequest.md) | Request object to create Flagged Reason | 
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


## PutARAccountTypes

> Status PutARAccountTypes(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ArAccountTypes(arAccountTypes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to modify AR Account Types.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    arAccountTypes := *openapiclient.NewPutARAccountTypesRequest() // PutARAccountTypesRequest | Request object for changing account types.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.AccountsReceivablesConfigApi.PutARAccountTypes(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ArAccountTypes(arAccountTypes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AccountsReceivablesConfigApi.PutARAccountTypes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutARAccountTypes`: Status
    fmt.Fprintf(os.Stdout, "Response from `AccountsReceivablesConfigApi.PutARAccountTypes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPutARAccountTypesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **arAccountTypes** | [**PutARAccountTypesRequest**](PutARAccountTypesRequest.md) | Request object for changing account types. | 
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


## PutARFlaggedReasons

> Status PutARFlaggedReasons(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ArFlaggedReasons(arFlaggedReasons).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to change AR flagged reasons.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    arFlaggedReasons := *openapiclient.NewPutARFlaggedReasonsRequest() // PutARFlaggedReasonsRequest | Request object to edit Flagged Reasons.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.AccountsReceivablesConfigApi.PutARFlaggedReasons(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ArFlaggedReasons(arFlaggedReasons).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AccountsReceivablesConfigApi.PutARFlaggedReasons``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutARFlaggedReasons`: Status
    fmt.Fprintf(os.Stdout, "Response from `AccountsReceivablesConfigApi.PutARFlaggedReasons`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPutARFlaggedReasonsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **arFlaggedReasons** | [**PutARFlaggedReasonsRequest**](PutARFlaggedReasonsRequest.md) | Request object to edit Flagged Reasons. | 
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


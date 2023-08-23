# \ChainConfigApi

All URIs are relative to */fof/config/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ChangeCustomTaxTypes**](ChainConfigApi.md#ChangeCustomTaxTypes) | **Put** /customTaxTypes/{taxTypeCode} | Change Custom Tax Types
[**DeleteAutoFolioSettlementTypes**](ChainConfigApi.md#DeleteAutoFolioSettlementTypes) | **Delete** /autoFolioSettlementTypes/{code} | Delete Auto Folio Settlement Types
[**GetAutoFolioSettlementTypes**](ChainConfigApi.md#GetAutoFolioSettlementTypes) | **Get** /autoFolioSettlementTypes | Get Auto Folio Settlement Types
[**GetCustomTaxTypes**](ChainConfigApi.md#GetCustomTaxTypes) | **Get** /customTaxTypes | Get Custom Tax Types
[**PostAutoFolioSettlementTypes**](ChainConfigApi.md#PostAutoFolioSettlementTypes) | **Post** /autoFolioSettlementTypes | Create Auto Folio Settlement Types
[**PostCustomTaxTypes**](ChainConfigApi.md#PostCustomTaxTypes) | **Post** /customTaxTypes | Create Custom Tax Types
[**PutAutoFolioSettlementTypes**](ChainConfigApi.md#PutAutoFolioSettlementTypes) | **Put** /autoFolioSettlementTypes/{code} | Change Auto Folio Settlement Types
[**RemoveCustomTaxTypes**](ChainConfigApi.md#RemoveCustomTaxTypes) | **Delete** /customTaxTypes/{taxTypeCode} | Delete Custom Tax Types



## ChangeCustomTaxTypes

> Status ChangeCustomTaxTypes(ctx, taxTypeCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CustomTaxTypesToBeChanged(customTaxTypesToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change Custom Tax Types



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
    taxTypeCode := "taxTypeCode_example" // string | Unique Code of Tax Types.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    customTaxTypesToBeChanged := *openapiclient.NewChangeCustomTaxTypesRequest() // ChangeCustomTaxTypesRequest | Request object for changing Custom Tax Types.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChainConfigApi.ChangeCustomTaxTypes(context.Background(), taxTypeCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CustomTaxTypesToBeChanged(customTaxTypesToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChainConfigApi.ChangeCustomTaxTypes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ChangeCustomTaxTypes`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChainConfigApi.ChangeCustomTaxTypes`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**taxTypeCode** | **string** | Unique Code of Tax Types. | 

### Other Parameters

Other parameters are passed through a pointer to a apiChangeCustomTaxTypesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **customTaxTypesToBeChanged** | [**ChangeCustomTaxTypesRequest**](ChangeCustomTaxTypesRequest.md) | Request object for changing Custom Tax Types. | 
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


## DeleteAutoFolioSettlementTypes

> Status DeleteAutoFolioSettlementTypes(ctx, code).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete Auto Folio Settlement Types



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
    code := "code_example" // string | Unique ID of Auto Folio Settlement Types.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChainConfigApi.DeleteAutoFolioSettlementTypes(context.Background(), code).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChainConfigApi.DeleteAutoFolioSettlementTypes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteAutoFolioSettlementTypes`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChainConfigApi.DeleteAutoFolioSettlementTypes`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**code** | **string** | Unique ID of Auto Folio Settlement Types. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteAutoFolioSettlementTypesRequest struct via the builder pattern


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


## GetAutoFolioSettlementTypes

> AutoFolioSettlementTypesDetails GetAutoFolioSettlementTypes(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FetchInactive(fetchInactive).Codes(codes).WildCard(wildCard).Description(description).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Auto Folio Settlement Types



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
    fetchInactive := true // bool | Determines wether to fetch inactive records or not. (optional)
    codes := []string{"Inner_example"} // []string | Codes to be searched. (optional)
    wildCard := "wildCard_example" // string | Wildcard search on the code. (optional)
    description := "description_example" // string | Description of the code. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChainConfigApi.GetAutoFolioSettlementTypes(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FetchInactive(fetchInactive).Codes(codes).WildCard(wildCard).Description(description).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChainConfigApi.GetAutoFolioSettlementTypes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetAutoFolioSettlementTypes`: AutoFolioSettlementTypesDetails
    fmt.Fprintf(os.Stdout, "Response from `ChainConfigApi.GetAutoFolioSettlementTypes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetAutoFolioSettlementTypesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **fetchInactive** | **bool** | Determines wether to fetch inactive records or not. | 
 **codes** | **[]string** | Codes to be searched. | 
 **wildCard** | **string** | Wildcard search on the code. | 
 **description** | **string** | Description of the code. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**AutoFolioSettlementTypesDetails**](AutoFolioSettlementTypesDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetCustomTaxTypes

> CustomTaxTypesDetails GetCustomTaxTypes(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FetchInactive(fetchInactive).Codes(codes).WildCard(wildCard).Description(description).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Custom Tax Types



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
    fetchInactive := true // bool | Determines wether to fetch inactive records or not. (optional)
    codes := []string{"Inner_example"} // []string | Codes to be searched. (optional)
    wildCard := "wildCard_example" // string | Wildcard search on the code. (optional)
    description := "description_example" // string | Description of the code. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChainConfigApi.GetCustomTaxTypes(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FetchInactive(fetchInactive).Codes(codes).WildCard(wildCard).Description(description).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChainConfigApi.GetCustomTaxTypes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetCustomTaxTypes`: CustomTaxTypesDetails
    fmt.Fprintf(os.Stdout, "Response from `ChainConfigApi.GetCustomTaxTypes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetCustomTaxTypesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **fetchInactive** | **bool** | Determines wether to fetch inactive records or not. | 
 **codes** | **[]string** | Codes to be searched. | 
 **wildCard** | **string** | Wildcard search on the code. | 
 **description** | **string** | Description of the code. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**CustomTaxTypesDetails**](CustomTaxTypesDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostAutoFolioSettlementTypes

> Status PostAutoFolioSettlementTypes(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AutoFolioSettlementTypesCriteria(autoFolioSettlementTypesCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create Auto Folio Settlement Types



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
    autoFolioSettlementTypesCriteria := *openapiclient.NewPostAutoFolioSettlementTypesRequest() // PostAutoFolioSettlementTypesRequest | Request object for creating Auto Folio Settlement Types.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChainConfigApi.PostAutoFolioSettlementTypes(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AutoFolioSettlementTypesCriteria(autoFolioSettlementTypesCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChainConfigApi.PostAutoFolioSettlementTypes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostAutoFolioSettlementTypes`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChainConfigApi.PostAutoFolioSettlementTypes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostAutoFolioSettlementTypesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **autoFolioSettlementTypesCriteria** | [**PostAutoFolioSettlementTypesRequest**](PostAutoFolioSettlementTypesRequest.md) | Request object for creating Auto Folio Settlement Types. | 
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


## PostCustomTaxTypes

> Status PostCustomTaxTypes(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CustomTaxTypesCriteria(customTaxTypesCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create Custom Tax Types



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
    customTaxTypesCriteria := *openapiclient.NewPostCustomTaxTypesRequest() // PostCustomTaxTypesRequest | Request object for creating Custom Tax Types.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChainConfigApi.PostCustomTaxTypes(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CustomTaxTypesCriteria(customTaxTypesCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChainConfigApi.PostCustomTaxTypes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostCustomTaxTypes`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChainConfigApi.PostCustomTaxTypes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostCustomTaxTypesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **customTaxTypesCriteria** | [**PostCustomTaxTypesRequest**](PostCustomTaxTypesRequest.md) | Request object for creating Custom Tax Types. | 
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


## PutAutoFolioSettlementTypes

> Status PutAutoFolioSettlementTypes(ctx, code).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AutoFolioSettlementTypesToBeChanged(autoFolioSettlementTypesToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change Auto Folio Settlement Types



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
    code := "code_example" // string | Unique ID of Auto Folio Settlement Types.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    autoFolioSettlementTypesToBeChanged := *openapiclient.NewPutAutoFolioSettlementTypesRequest() // PutAutoFolioSettlementTypesRequest | Request object for changing Auto Folio Settlement Types.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChainConfigApi.PutAutoFolioSettlementTypes(context.Background(), code).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AutoFolioSettlementTypesToBeChanged(autoFolioSettlementTypesToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChainConfigApi.PutAutoFolioSettlementTypes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutAutoFolioSettlementTypes`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChainConfigApi.PutAutoFolioSettlementTypes`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**code** | **string** | Unique ID of Auto Folio Settlement Types. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutAutoFolioSettlementTypesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **autoFolioSettlementTypesToBeChanged** | [**PutAutoFolioSettlementTypesRequest**](PutAutoFolioSettlementTypesRequest.md) | Request object for changing Auto Folio Settlement Types. | 
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


## RemoveCustomTaxTypes

> Status RemoveCustomTaxTypes(ctx, taxTypeCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete Custom Tax Types



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
    taxTypeCode := "taxTypeCode_example" // string | Unique Code of Tax Types.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChainConfigApi.RemoveCustomTaxTypes(context.Background(), taxTypeCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChainConfigApi.RemoveCustomTaxTypes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `RemoveCustomTaxTypes`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChainConfigApi.RemoveCustomTaxTypes`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**taxTypeCode** | **string** | Unique Code of Tax Types. | 

### Other Parameters

Other parameters are passed through a pointer to a apiRemoveCustomTaxTypesRequest struct via the builder pattern


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


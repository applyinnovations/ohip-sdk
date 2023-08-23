# \OperaExchangeContentApi

All URIs are relative to */oxi/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetIntegrationMessageAttachments**](OperaExchangeContentApi.md#GetIntegrationMessageAttachments) | **Get** /messages/{messageId}/integrationMessageAttachments | Fetch integration message attachments



## GetIntegrationMessageAttachments

> FetchIntegrationMessageAttachments GetIntegrationMessageAttachments(ctx, messageId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).IntegrationMessageType(integrationMessageType).IntegrationSystem(integrationSystem).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Fetch integration message attachments



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
    messageId := "23681" // string | Unique OPERA internal ID used to find inbound/outbound Message in OPERA.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    integrationMessageType := "Inbound, Outbound" // string | Determines whether message is an inbound message or a outbound message (optional)
    integrationSystem := "Central, Property, Both" // string | Represents both OXI and OXI HUB are installed. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.OperaExchangeContentApi.GetIntegrationMessageAttachments(context.Background(), messageId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).IntegrationMessageType(integrationMessageType).IntegrationSystem(integrationSystem).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `OperaExchangeContentApi.GetIntegrationMessageAttachments``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetIntegrationMessageAttachments`: FetchIntegrationMessageAttachments
    fmt.Fprintf(os.Stdout, "Response from `OperaExchangeContentApi.GetIntegrationMessageAttachments`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**messageId** | **string** | Unique OPERA internal ID used to find inbound/outbound Message in OPERA. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetIntegrationMessageAttachmentsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **integrationMessageType** | **string** | Determines whether message is an inbound message or a outbound message | 
 **integrationSystem** | **string** | Represents both OXI and OXI HUB are installed. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**FetchIntegrationMessageAttachments**](FetchIntegrationMessageAttachments.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


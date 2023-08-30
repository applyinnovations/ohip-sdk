# \ProfileApi

All URIs are relative to */crm/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**PostMembershipNumber**](ProfileApi.md#PostMembershipNumber) | **Post** /externalSystems/{extSystemCode}/memberships/{membershipType}/membershipIDs | Generate membership number



## PostMembershipNumber

> Status PostMembershipNumber(ctx, extSystemCode, membershipType).Authorization(authorization).XAppKey(xAppKey).MembershipNumber(membershipNumber).XTransactionId(xTransactionId).AcceptLanguage(acceptLanguage).Execute()

Generate membership number



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/crmoutbound"
)

func main() {
    extSystemCode := "extSystemCode_example" // string | Profile will be downloaded from this External System.
    membershipType := "membershipType_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    membershipNumber := *openapiclient.NewPostMembershipNumberRequest() // PostMembershipNumberRequest | Request object for generating membership number.
    xTransactionId := "xTransactionId_example" // string | Transaction Id (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileApi.PostMembershipNumber(context.Background(), extSystemCode, membershipType).Authorization(authorization).XAppKey(xAppKey).MembershipNumber(membershipNumber).XTransactionId(xTransactionId).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileApi.PostMembershipNumber``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostMembershipNumber`: Status
    fmt.Fprintf(os.Stdout, "Response from `ProfileApi.PostMembershipNumber`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**extSystemCode** | **string** | Profile will be downloaded from this External System. | 
**membershipType** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostMembershipNumberRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **membershipNumber** | [**PostMembershipNumberRequest**](PostMembershipNumberRequest.md) | Request object for generating membership number. | 
 **xTransactionId** | **string** | Transaction Id | 
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


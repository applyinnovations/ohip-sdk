# \CashieringApi

All URIs are relative to */csh/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ApproveCompPostings**](CashieringApi.md#ApproveCompPostings) | **Put** /hotels/{hotelId}/compPostingsApproval | Operation to request for comp postings approval.
[**AuthorizeCompRedemptions**](CashieringApi.md#AuthorizeCompRedemptions) | **Put** /hotels/{hotelId}/memberships/{membershipId}/compRedemptionAuthorizations | Operation to authorize complimentary redemptions for a guest having PTS Membership Type
[**GetCompRedemptions**](CashieringApi.md#GetCompRedemptions) | **Get** /hotels/{hotelId}/memberships/{membershipId}/compRedemptions | Operation to get complimentary redemptions for a guest having PTS Membership Type
[**PostCompRedemptions**](CashieringApi.md#PostCompRedemptions) | **Post** /hotels/{hotelId}/memberships/{membershipId}/compRedemptionPostings | Operation to post complimentary redemptions for a guest having PTS Membership Type
[**ReverseCompPostings**](CashieringApi.md#ReverseCompPostings) | **Put** /hotels/{hotelId}/compPostingsReversal | Operation to request for comp postings reversal.
[**ReverseCompRedemptions**](CashieringApi.md#ReverseCompRedemptions) | **Post** /hotels/{hotelId}/memberships/{membershipId}/compRedemptionReversals | Operation to reverse complimentary redemptions for a guest having PTS Membership Type



## ApproveCompPostings

> SendCompTransactionsStatus ApproveCompPostings(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).Postings(postings).AcceptLanguage(acceptLanguage).Execute()

Operation to request for comp postings approval.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/cshoutbound"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner??????s Application Key
    postings := *openapiclient.NewApproveCompPostingsRequest() // ApproveCompPostingsRequest | Request object to submit comp transactions request to gaming system
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.ApproveCompPostings(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).Postings(postings).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.ApproveCompPostings``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApproveCompPostings`: SendCompTransactionsStatus
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.ApproveCompPostings`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiApproveCompPostingsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner??????s Application Key | 
 **postings** | [**ApproveCompPostingsRequest**](ApproveCompPostingsRequest.md) | Request object to submit comp transactions request to gaming system | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**SendCompTransactionsStatus**](SendCompTransactionsStatus.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## AuthorizeCompRedemptions

> AuthorizeCompRedemptionsRS AuthorizeCompRedemptions(ctx, membershipId, hotelId).Authorization(authorization).XAppKey(xAppKey).AuthorizeCompRedemptions(authorizeCompRedemptions).AcceptLanguage(acceptLanguage).Execute()

Operation to authorize complimentary redemptions for a guest having PTS Membership Type



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/cshoutbound"
)

func main() {
    membershipId := "membershipId_example" // string | Membership number of the guest in the reservation
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner??????s Application Key
    authorizeCompRedemptions := *openapiclient.NewAuthorizeCompRedemptionsRequest() // AuthorizeCompRedemptionsRequest | Request type for Complimentary Redemptions authorization.
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.AuthorizeCompRedemptions(context.Background(), membershipId, hotelId).Authorization(authorization).XAppKey(xAppKey).AuthorizeCompRedemptions(authorizeCompRedemptions).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.AuthorizeCompRedemptions``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `AuthorizeCompRedemptions`: AuthorizeCompRedemptionsRS
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.AuthorizeCompRedemptions`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**membershipId** | **string** | Membership number of the guest in the reservation | 
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiAuthorizeCompRedemptionsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner??????s Application Key | 
 **authorizeCompRedemptions** | [**AuthorizeCompRedemptionsRequest**](AuthorizeCompRedemptionsRequest.md) | Request type for Complimentary Redemptions authorization. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**AuthorizeCompRedemptionsRS**](AuthorizeCompRedemptionsRS.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetCompRedemptions

> FetchCompRedemptionsRS GetCompRedemptions(ctx, membershipId, hotelId).Authorization(authorization).XAppKey(xAppKey).AcceptLanguage(acceptLanguage).Execute()

Operation to get complimentary redemptions for a guest having PTS Membership Type



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/cshoutbound"
)

func main() {
    membershipId := "membershipId_example" // string | Membership number of the guest in the reservation
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner??????s Application Key
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.GetCompRedemptions(context.Background(), membershipId, hotelId).Authorization(authorization).XAppKey(xAppKey).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.GetCompRedemptions``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetCompRedemptions`: FetchCompRedemptionsRS
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.GetCompRedemptions`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**membershipId** | **string** | Membership number of the guest in the reservation | 
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetCompRedemptionsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner??????s Application Key | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**FetchCompRedemptionsRS**](FetchCompRedemptionsRS.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostCompRedemptions

> PostCompRedemptionsRS PostCompRedemptions(ctx, membershipId, hotelId).Authorization(authorization).XAppKey(xAppKey).PostCompRedemptions(postCompRedemptions).AcceptLanguage(acceptLanguage).Execute()

Operation to post complimentary redemptions for a guest having PTS Membership Type



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/cshoutbound"
)

func main() {
    membershipId := "membershipId_example" // string | Membership number of the guest in the reservation
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner??????s Application Key
    postCompRedemptions := *openapiclient.NewPostCompRedemptionsRequest() // PostCompRedemptionsRequest | Request type of Complimentary Redemptions posting.
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.PostCompRedemptions(context.Background(), membershipId, hotelId).Authorization(authorization).XAppKey(xAppKey).PostCompRedemptions(postCompRedemptions).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.PostCompRedemptions``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostCompRedemptions`: PostCompRedemptionsRS
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.PostCompRedemptions`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**membershipId** | **string** | Membership number of the guest in the reservation | 
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostCompRedemptionsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner??????s Application Key | 
 **postCompRedemptions** | [**PostCompRedemptionsRequest**](PostCompRedemptionsRequest.md) | Request type of Complimentary Redemptions posting. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**PostCompRedemptionsRS**](PostCompRedemptionsRS.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ReverseCompPostings

> Status ReverseCompPostings(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).Postings(postings).AcceptLanguage(acceptLanguage).Execute()

Operation to request for comp postings reversal.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/cshoutbound"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner??????s Application Key
    postings := *openapiclient.NewApproveCompPostingsRequest() // ApproveCompPostingsRequest | Request object for comp postings reversal to be sent to the gaming system.
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.ReverseCompPostings(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).Postings(postings).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.ReverseCompPostings``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ReverseCompPostings`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.ReverseCompPostings`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiReverseCompPostingsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner??????s Application Key | 
 **postings** | [**ApproveCompPostingsRequest**](ApproveCompPostingsRequest.md) | Request object for comp postings reversal to be sent to the gaming system. | 
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


## ReverseCompRedemptions

> Status ReverseCompRedemptions(ctx, membershipId, hotelId).Authorization(authorization).XAppKey(xAppKey).ReverseCompRedemptions(reverseCompRedemptions).AcceptLanguage(acceptLanguage).Execute()

Operation to reverse complimentary redemptions for a guest having PTS Membership Type



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/cshoutbound"
)

func main() {
    membershipId := "membershipId_example" // string | Membership number of the guest in the reservation
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner??????s Application Key
    reverseCompRedemptions := *openapiclient.NewReverseCompRedemptionsRequest() // ReverseCompRedemptionsRequest | Request type of Complimentary Redemptions reversal.
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringApi.ReverseCompRedemptions(context.Background(), membershipId, hotelId).Authorization(authorization).XAppKey(xAppKey).ReverseCompRedemptions(reverseCompRedemptions).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringApi.ReverseCompRedemptions``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ReverseCompRedemptions`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringApi.ReverseCompRedemptions`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**membershipId** | **string** | Membership number of the guest in the reservation | 
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiReverseCompRedemptionsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner??????s Application Key | 
 **reverseCompRedemptions** | [**ReverseCompRedemptionsRequest**](ReverseCompRedemptionsRequest.md) | Request type of Complimentary Redemptions reversal. | 
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


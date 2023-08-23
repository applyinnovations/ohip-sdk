# \ProfileMembershipApi

All URIs are relative to */crm/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetMembershipDetails**](ProfileMembershipApi.md#GetMembershipDetails) | **Get** /externalSystems/{extSystemCode}/profiles/{externalProfileId}/memberships | Get membership information on a profile
[**PostEnrollment**](ProfileMembershipApi.md#PostEnrollment) | **Post** /externalSystems/{extSystemCode}/chains/{chainCode}/enrollments | Create an Enrollment
[**RedeemAward**](ProfileMembershipApi.md#RedeemAward) | **Put** /externalSystems/{extSystemCode}/profiles/{externalProfileId}/profileAwards | Redeem an award



## GetMembershipDetails

> MemberInformation GetMembershipDetails(ctx, extSystemCode, externalProfileId).Authorization(authorization).XAppKey(xAppKey).OperaProfileId(operaProfileId).MembershipType(membershipType).MembershipId(membershipId).HotelId(hotelId).StartDate(startDate).EndDate(endDate).Mode(mode).XTransactionId(xTransactionId).AcceptLanguage(acceptLanguage).Execute()

Get membership information on a profile



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    extSystemCode := "extSystemCode_example" // string | Profile will be downloaded from this External System.
    externalProfileId := "externalProfileId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    operaProfileId := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    membershipType := "membershipType_example" // string | The type of the membership. (optional)
    membershipId := "membershipId_example" // string | The card number associated with this membership. (optional)
    hotelId := "hotelId_example" // string | Property from which the membership stay information was received. (optional)
    startDate := time.Now() // string |  (optional)
    endDate := time.Now() // string |  (optional)
    mode := "mode_example" // string | Whether member info search will pertain to transaction dates/ stay dates/ points credit dates. (optional)
    xTransactionId := "xTransactionId_example" // string | Transaction Id (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileMembershipApi.GetMembershipDetails(context.Background(), extSystemCode, externalProfileId).Authorization(authorization).XAppKey(xAppKey).OperaProfileId(operaProfileId).MembershipType(membershipType).MembershipId(membershipId).HotelId(hotelId).StartDate(startDate).EndDate(endDate).Mode(mode).XTransactionId(xTransactionId).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileMembershipApi.GetMembershipDetails``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetMembershipDetails`: MemberInformation
    fmt.Fprintf(os.Stdout, "Response from `ProfileMembershipApi.GetMembershipDetails`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**extSystemCode** | **string** | Profile will be downloaded from this External System. | 
**externalProfileId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetMembershipDetailsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **operaProfileId** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **membershipType** | **string** | The type of the membership. | 
 **membershipId** | **string** | The card number associated with this membership. | 
 **hotelId** | **string** | Property from which the membership stay information was received. | 
 **startDate** | **string** |  | 
 **endDate** | **string** |  | 
 **mode** | **string** | Whether member info search will pertain to transaction dates/ stay dates/ points credit dates. | 
 **xTransactionId** | **string** | Transaction Id | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**MemberInformation**](MemberInformation.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostEnrollment

> Enrollment PostEnrollment(ctx, extSystemCode, chainCode).Authorization(authorization).XAppKey(xAppKey).Enrollment(enrollment).XTransactionId(xTransactionId).AcceptLanguage(acceptLanguage).Execute()

Create an Enrollment



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
    extSystemCode := "extSystemCode_example" // string | Profile will be downloaded from this External System.
    chainCode := "chainCode_example" // string | Chain code from which the External Profiles will be downloaded.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    enrollment := *openapiclient.NewPostEnrollmentRequest() // PostEnrollmentRequest | Request object to create profile enrollment.
    xTransactionId := "xTransactionId_example" // string | Transaction Id (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileMembershipApi.PostEnrollment(context.Background(), extSystemCode, chainCode).Authorization(authorization).XAppKey(xAppKey).Enrollment(enrollment).XTransactionId(xTransactionId).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileMembershipApi.PostEnrollment``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostEnrollment`: Enrollment
    fmt.Fprintf(os.Stdout, "Response from `ProfileMembershipApi.PostEnrollment`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**extSystemCode** | **string** | Profile will be downloaded from this External System. | 
**chainCode** | **string** | Chain code from which the External Profiles will be downloaded. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostEnrollmentRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **enrollment** | [**PostEnrollmentRequest**](PostEnrollmentRequest.md) | Request object to create profile enrollment. | 
 **xTransactionId** | **string** | Transaction Id | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Enrollment**](Enrollment.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## RedeemAward

> Award RedeemAward(ctx, extSystemCode, externalProfileId).Authorization(authorization).XAppKey(xAppKey).Award(award).XTransactionId(xTransactionId).AcceptLanguage(acceptLanguage).Execute()

Redeem an award



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
    extSystemCode := "extSystemCode_example" // string | Profile will be downloaded from this External System.
    externalProfileId := "externalProfileId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    award := *openapiclient.NewRedeemAwardRequest() // RedeemAwardRequest | Request object to redeem award.
    xTransactionId := "xTransactionId_example" // string | Transaction Id (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileMembershipApi.RedeemAward(context.Background(), extSystemCode, externalProfileId).Authorization(authorization).XAppKey(xAppKey).Award(award).XTransactionId(xTransactionId).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileMembershipApi.RedeemAward``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `RedeemAward`: Award
    fmt.Fprintf(os.Stdout, "Response from `ProfileMembershipApi.RedeemAward`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**extSystemCode** | **string** | Profile will be downloaded from this External System. | 
**externalProfileId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiRedeemAwardRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **award** | [**RedeemAwardRequest**](RedeemAwardRequest.md) | Request object to redeem award. | 
 **xTransactionId** | **string** | Transaction Id | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Award**](Award.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


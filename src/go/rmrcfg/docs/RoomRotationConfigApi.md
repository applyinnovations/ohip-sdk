# \RoomRotationConfigApi

All URIs are relative to */rmr/config/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**DeleteAdjustmentReasons**](RoomRotationConfigApi.md#DeleteAdjustmentReasons) | **Delete** /adjustmentReasons/{adjustmentReasonsId} | Delete Room Rotation Adjustment Reasons
[**DeleteOverrideReasons**](RoomRotationConfigApi.md#DeleteOverrideReasons) | **Delete** /overrideReasons/{overrideReasonsId} | Delete an existing Room Rotation Override Reason
[**DeleteRoomOwner**](RoomRotationConfigApi.md#DeleteRoomOwner) | **Delete** /roomOwners/{roomOwnershipId} | Delete Room Ownership Record
[**DeleteRoomOwnerReferral**](RoomRotationConfigApi.md#DeleteRoomOwnerReferral) | **Delete** /profiles/{profileId}/roomOwnerReferrals/{roomOwnerReferralId} | Delete Room Owner Referral Record
[**DeleteRotationRules**](RoomRotationConfigApi.md#DeleteRotationRules) | **Delete** /hotels/{hotelId}/rules/{ruleId} | Delete an existing Room Rotation Rule
[**DeleteUnitGrades**](RoomRotationConfigApi.md#DeleteUnitGrades) | **Delete** /hotels/{hotelId}/unitGrades/{unitGradeCode} | Delete an existing Room Rotation Owner Room Unit Grade
[**GetAdjustmentReasons**](RoomRotationConfigApi.md#GetAdjustmentReasons) | **Get** /adjustmentReasons | Get Room Rotation Adjustment Reasons
[**GetOverrideReasons**](RoomRotationConfigApi.md#GetOverrideReasons) | **Get** /overrideReasons | Get Room Rotation Override Reasons
[**GetProfileRoomOwners**](RoomRotationConfigApi.md#GetProfileRoomOwners) | **Get** /profiles/{profileId}/roomOwners | Get Profile Room Ownership Records
[**GetRevenueTransactionCodes**](RoomRotationConfigApi.md#GetRevenueTransactionCodes) | **Get** /hotels/{hotelId}/revenueTransactionCodes | Retrieve all Room Rotation Revenue Transaction Codes
[**GetRoomOwnerReferrals**](RoomRotationConfigApi.md#GetRoomOwnerReferrals) | **Get** /profiles/{profileId}/roomOwnerReferrals | Get Profile Owner Referral Records.
[**GetRotationPeriod**](RoomRotationConfigApi.md#GetRotationPeriod) | **Get** /hotels/{hotelId}/rotationPeriod | Fetch Room Rotation Period
[**GetRotationRules**](RoomRotationConfigApi.md#GetRotationRules) | **Get** /hotels/{hotelId}/rules | Retrieve all Room Rotation Setup Rules
[**GetUnitGrades**](RoomRotationConfigApi.md#GetUnitGrades) | **Get** /hotels/{hotelId}/unitGrades | Get Room Rotation Owner Room Grades
[**PostAdjustmentReasons**](RoomRotationConfigApi.md#PostAdjustmentReasons) | **Post** /adjustmentReasons | Post Room Rotation Adjustment Reasons
[**PostOverrideReasons**](RoomRotationConfigApi.md#PostOverrideReasons) | **Post** /overrideReasons | Create a new Room Rotation Override Reason
[**PostRoomOwner**](RoomRotationConfigApi.md#PostRoomOwner) | **Post** /roomOwners | Create Room Ownership Record
[**PostRoomOwnerReferrals**](RoomRotationConfigApi.md#PostRoomOwnerReferrals) | **Post** /profiles/{profileId}/roomOwnerReferrals | Create Room Owner Referrals
[**PostRoomRotationRules**](RoomRotationConfigApi.md#PostRoomRotationRules) | **Post** /hotels/{hotelId}/rotationRules | Save changes to Rotation Setup Rules and recalculate Rotation Points
[**PostRotationRules**](RoomRotationConfigApi.md#PostRotationRules) | **Post** /hotels/{hotelId}/rules | Create Room Rotation Rules
[**PostUnitGrades**](RoomRotationConfigApi.md#PostUnitGrades) | **Post** /hotels/{hotelId}/unitGrades | Create a new Room Rotation Owner Room Grade Code
[**PutAdjustmentReasons**](RoomRotationConfigApi.md#PutAdjustmentReasons) | **Put** /adjustmentReasons/{adjustmentReasonsId} | Update Room Rotation Adjustment Reasons
[**PutOverrideReasons**](RoomRotationConfigApi.md#PutOverrideReasons) | **Put** /overrideReasons/{overrideReasonsId} | Change an existing Room Rotation Override Reason
[**PutRevenueTransactionCodes**](RoomRotationConfigApi.md#PutRevenueTransactionCodes) | **Put** /hotels/{hotelId}/revenueTransactionCodes | Update the room rotation revenue status of a set of transaction codes
[**PutRoomOwner**](RoomRotationConfigApi.md#PutRoomOwner) | **Put** /roomOwners | Change Room Ownership Records
[**PutRoomOwnerReferral**](RoomRotationConfigApi.md#PutRoomOwnerReferral) | **Put** /profiles/{profileId}/roomOwnerReferrals/{roomOwnerReferralId} | Change Room Owner Referral Record
[**PutRotationPeriod**](RoomRotationConfigApi.md#PutRotationPeriod) | **Put** /hotels/{hotelId}/rotationPeriod | Change Room Rotation Period
[**PutRotationRules**](RoomRotationConfigApi.md#PutRotationRules) | **Put** /hotels/{hotelId}/rules/{ruleId} | Change Room Rotation Rules
[**PutUnitGrades**](RoomRotationConfigApi.md#PutUnitGrades) | **Put** /hotels/{hotelId}/unitGrades/{unitGradeCode} | Change an existing Room Rotation Owner Room Unit Grade



## DeleteAdjustmentReasons

> Status DeleteAdjustmentReasons(ctx, adjustmentReasonsId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Code(code).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete Room Rotation Adjustment Reasons



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rmrcfg"
)

func main() {
    adjustmentReasonsId := "adjustmentReasonsId_example" // string | Unique ID of Room Rotation Adjustment Reason.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    code := []string{"Inner_example"} // []string | Code of the Room Rotation Adjustment Reason.  Multiple values can be entered by adding multiple query parameters. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RoomRotationConfigApi.DeleteAdjustmentReasons(context.Background(), adjustmentReasonsId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Code(code).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RoomRotationConfigApi.DeleteAdjustmentReasons``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteAdjustmentReasons`: Status
    fmt.Fprintf(os.Stdout, "Response from `RoomRotationConfigApi.DeleteAdjustmentReasons`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**adjustmentReasonsId** | **string** | Unique ID of Room Rotation Adjustment Reason. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteAdjustmentReasonsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **code** | **[]string** | Code of the Room Rotation Adjustment Reason.  Multiple values can be entered by adding multiple query parameters. | 
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


## DeleteOverrideReasons

> Status DeleteOverrideReasons(ctx, overrideReasonsId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Code(code).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete an existing Room Rotation Override Reason



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rmrcfg"
)

func main() {
    overrideReasonsId := "overrideReasonsId_example" // string | Unique ID of Room Rotation Override Reason
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    code := []string{"Inner_example"} // []string | Code of the Room Rotation Override Reason.  Multiple values can be entered by adding multiple query parameters. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RoomRotationConfigApi.DeleteOverrideReasons(context.Background(), overrideReasonsId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Code(code).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RoomRotationConfigApi.DeleteOverrideReasons``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteOverrideReasons`: Status
    fmt.Fprintf(os.Stdout, "Response from `RoomRotationConfigApi.DeleteOverrideReasons`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**overrideReasonsId** | **string** | Unique ID of Room Rotation Override Reason | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteOverrideReasonsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **code** | **[]string** | Code of the Room Rotation Override Reason.  Multiple values can be entered by adding multiple query parameters. | 
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


## DeleteRoomOwner

> Status DeleteRoomOwner(ctx, roomOwnershipId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).OverrideReferralCheck(overrideReferralCheck).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete Room Ownership Record



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rmrcfg"
)

func main() {
    roomOwnershipId := "roomOwnershipId_example" // string | Unique Id for Room Ownership Record.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    overrideReferralCheck := true // bool | Indicate to Override the Referral record Check if applicable. (optional) (default to false)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RoomRotationConfigApi.DeleteRoomOwner(context.Background(), roomOwnershipId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).OverrideReferralCheck(overrideReferralCheck).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RoomRotationConfigApi.DeleteRoomOwner``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteRoomOwner`: Status
    fmt.Fprintf(os.Stdout, "Response from `RoomRotationConfigApi.DeleteRoomOwner`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**roomOwnershipId** | **string** | Unique Id for Room Ownership Record. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteRoomOwnerRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **overrideReferralCheck** | **bool** | Indicate to Override the Referral record Check if applicable. | [default to false]
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


## DeleteRoomOwnerReferral

> Status DeleteRoomOwnerReferral(ctx, profileId, roomOwnerReferralId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete Room Owner Referral Record



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rmrcfg"
)

func main() {
    profileId := "profileId_example" // string | Unique ID of profile.
    roomOwnerReferralId := "roomOwnerReferralId_example" // string | Unique Room Owner Referral Record.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RoomRotationConfigApi.DeleteRoomOwnerReferral(context.Background(), profileId, roomOwnerReferralId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RoomRotationConfigApi.DeleteRoomOwnerReferral``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteRoomOwnerReferral`: Status
    fmt.Fprintf(os.Stdout, "Response from `RoomRotationConfigApi.DeleteRoomOwnerReferral`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**profileId** | **string** | Unique ID of profile. | 
**roomOwnerReferralId** | **string** | Unique Room Owner Referral Record. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteRoomOwnerReferralRequest struct via the builder pattern


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


## DeleteRotationRules

> Status DeleteRotationRules(ctx, ruleId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete an existing Room Rotation Rule



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rmrcfg"
)

func main() {
    ruleId := "ruleId_example" // string | Unique ID of Rotation Rule.
    hotelId := "hotelId_example" // string | Unique ID of hotel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RoomRotationConfigApi.DeleteRotationRules(context.Background(), ruleId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RoomRotationConfigApi.DeleteRotationRules``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteRotationRules`: Status
    fmt.Fprintf(os.Stdout, "Response from `RoomRotationConfigApi.DeleteRotationRules`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**ruleId** | **string** | Unique ID of Rotation Rule. | 
**hotelId** | **string** | Unique ID of hotel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteRotationRulesRequest struct via the builder pattern


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


## DeleteUnitGrades

> Status DeleteUnitGrades(ctx, unitGradeCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Code(code).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete an existing Room Rotation Owner Room Unit Grade



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rmrcfg"
)

func main() {
    unitGradeCode := "unitGradeCode_example" // string | Unique Code of Owner Room Unit Grade.
    hotelId := "hotelId_example" // string | Unique ID of hotel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    code := []string{"Inner_example"} // []string | Owner Room Unit Grade Code.  Multiple values can be entered by adding multiple query parameters. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RoomRotationConfigApi.DeleteUnitGrades(context.Background(), unitGradeCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Code(code).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RoomRotationConfigApi.DeleteUnitGrades``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteUnitGrades`: Status
    fmt.Fprintf(os.Stdout, "Response from `RoomRotationConfigApi.DeleteUnitGrades`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**unitGradeCode** | **string** | Unique Code of Owner Room Unit Grade. | 
**hotelId** | **string** | Unique ID of hotel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteUnitGradesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **code** | **[]string** | Owner Room Unit Grade Code.  Multiple values can be entered by adding multiple query parameters. | 
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


## GetAdjustmentReasons

> FetchAdjustmentReasonsDetails GetAdjustmentReasons(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FetchInactive(fetchInactive).Code(code).WildCard(wildCard).Description(description).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Room Rotation Adjustment Reasons



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rmrcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    fetchInactive := true // bool | Determines wether to fetch inactive records or not. (optional) (default to false)
    code := []string{"Inner_example"} // []string | Rotation Adjustment Reason Codes to be searched.  Multiple values can be entered by adding multiple query parameters. (optional)
    wildCard := "wildCard_example" // string | Wildcard search on the code. (optional)
    description := "description_example" // string | Description of the code. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RoomRotationConfigApi.GetAdjustmentReasons(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FetchInactive(fetchInactive).Code(code).WildCard(wildCard).Description(description).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RoomRotationConfigApi.GetAdjustmentReasons``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetAdjustmentReasons`: FetchAdjustmentReasonsDetails
    fmt.Fprintf(os.Stdout, "Response from `RoomRotationConfigApi.GetAdjustmentReasons`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetAdjustmentReasonsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **fetchInactive** | **bool** | Determines wether to fetch inactive records or not. | [default to false]
 **code** | **[]string** | Rotation Adjustment Reason Codes to be searched.  Multiple values can be entered by adding multiple query parameters. | 
 **wildCard** | **string** | Wildcard search on the code. | 
 **description** | **string** | Description of the code. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**FetchAdjustmentReasonsDetails**](FetchAdjustmentReasonsDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetOverrideReasons

> OverrideReasonsDetails GetOverrideReasons(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FetchInactive(fetchInactive).Code(code).WildCard(wildCard).Description(description).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Room Rotation Override Reasons



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rmrcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    fetchInactive := true // bool | Determines wether to fetch inactive records or not. (optional) (default to false)
    code := []string{"Inner_example"} // []string | Room Rotation Override Reason Codes to be searched.  Multiple values can be entered by adding multiple query parameters. (optional)
    wildCard := "wildCard_example" // string | Wildcard search on the Room Rotation Override Reason code. (optional)
    description := "description_example" // string | Description of the configured Room Rotation Override Reason. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RoomRotationConfigApi.GetOverrideReasons(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FetchInactive(fetchInactive).Code(code).WildCard(wildCard).Description(description).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RoomRotationConfigApi.GetOverrideReasons``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetOverrideReasons`: OverrideReasonsDetails
    fmt.Fprintf(os.Stdout, "Response from `RoomRotationConfigApi.GetOverrideReasons`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetOverrideReasonsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **fetchInactive** | **bool** | Determines wether to fetch inactive records or not. | [default to false]
 **code** | **[]string** | Room Rotation Override Reason Codes to be searched.  Multiple values can be entered by adding multiple query parameters. | 
 **wildCard** | **string** | Wildcard search on the Room Rotation Override Reason code. | 
 **description** | **string** | Description of the configured Room Rotation Override Reason. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**OverrideReasonsDetails**](OverrideReasonsDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetProfileRoomOwners

> RoomOwnershipDetails GetProfileRoomOwners(ctx, profileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ShowInactiveRoomOwners(showInactiveRoomOwners).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Profile Room Ownership Records



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rmrcfg"
)

func main() {
    profileId := "profileId_example" // string | Unique ID of profile.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    showInactiveRoomOwners := true // bool | If set to True, Inactive Room Ownership Records will also be retrieved. Otherwise, only Active Room Ownership Records will be retrieved. (optional) (default to false)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RoomRotationConfigApi.GetProfileRoomOwners(context.Background(), profileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ShowInactiveRoomOwners(showInactiveRoomOwners).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RoomRotationConfigApi.GetProfileRoomOwners``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetProfileRoomOwners`: RoomOwnershipDetails
    fmt.Fprintf(os.Stdout, "Response from `RoomRotationConfigApi.GetProfileRoomOwners`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**profileId** | **string** | Unique ID of profile. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetProfileRoomOwnersRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **showInactiveRoomOwners** | **bool** | If set to True, Inactive Room Ownership Records will also be retrieved. Otherwise, only Active Room Ownership Records will be retrieved. | [default to false]
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**RoomOwnershipDetails**](RoomOwnershipDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetRevenueTransactionCodes

> FetchRevenueTransactionCodesDetails GetRevenueTransactionCodes(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RotationRevenue(rotationRevenue).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Retrieve all Room Rotation Revenue Transaction Codes



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rmrcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of hotel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    rotationRevenue := true // bool | Indicate to retrieve transaction codes that are marked as Rotation Revenue transaction codes. If this value is omitted, all transaction codes will be returned for the given property. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RoomRotationConfigApi.GetRevenueTransactionCodes(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RotationRevenue(rotationRevenue).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RoomRotationConfigApi.GetRevenueTransactionCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetRevenueTransactionCodes`: FetchRevenueTransactionCodesDetails
    fmt.Fprintf(os.Stdout, "Response from `RoomRotationConfigApi.GetRevenueTransactionCodes`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of hotel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetRevenueTransactionCodesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **rotationRevenue** | **bool** | Indicate to retrieve transaction codes that are marked as Rotation Revenue transaction codes. If this value is omitted, all transaction codes will be returned for the given property. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**FetchRevenueTransactionCodesDetails**](FetchRevenueTransactionCodesDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetRoomOwnerReferrals

> RoomOwnerReferralDetails GetRoomOwnerReferrals(ctx, profileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).IncludeInactive(includeInactive).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Profile Owner Referral Records.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rmrcfg"
)

func main() {
    profileId := "profileId_example" // string | Unique ID of profile.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    includeInactive := true // bool | If set to True, Inactive Room Owner Referrals will also be retrieved. Otherwise, only Active Room Owner Referrals details will be retrieved. (optional) (default to false)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RoomRotationConfigApi.GetRoomOwnerReferrals(context.Background(), profileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).IncludeInactive(includeInactive).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RoomRotationConfigApi.GetRoomOwnerReferrals``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetRoomOwnerReferrals`: RoomOwnerReferralDetails
    fmt.Fprintf(os.Stdout, "Response from `RoomRotationConfigApi.GetRoomOwnerReferrals`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**profileId** | **string** | Unique ID of profile. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetRoomOwnerReferralsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **includeInactive** | **bool** | If set to True, Inactive Room Owner Referrals will also be retrieved. Otherwise, only Active Room Owner Referrals details will be retrieved. | [default to false]
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**RoomOwnerReferralDetails**](RoomOwnerReferralDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetRotationPeriod

> FetchRotationPeriod GetRotationPeriod(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Fetch Room Rotation Period



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rmrcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of hotel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RoomRotationConfigApi.GetRotationPeriod(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RoomRotationConfigApi.GetRotationPeriod``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetRotationPeriod`: FetchRotationPeriod
    fmt.Fprintf(os.Stdout, "Response from `RoomRotationConfigApi.GetRotationPeriod`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of hotel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetRotationPeriodRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**FetchRotationPeriod**](FetchRotationPeriod.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetRotationRules

> FetchRotationRules GetRotationRules(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).SetupType(setupType).InactiveRules(inactiveRules).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Retrieve all Room Rotation Setup Rules



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rmrcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of hotel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional) (default to 25)
    offset := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional) (default to 0)
    setupType := "setupType_example" // string | Simple type for Rotation Setup Rule(s). (optional)
    inactiveRules := true // bool | If set to True, only Inactive Rotation Setup Rules will be retrieved. Otherwise, only Active Rotation Setup Rules will be retrieved. (optional) (default to false)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RoomRotationConfigApi.GetRotationRules(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).SetupType(setupType).InactiveRules(inactiveRules).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RoomRotationConfigApi.GetRotationRules``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetRotationRules`: FetchRotationRules
    fmt.Fprintf(os.Stdout, "Response from `RoomRotationConfigApi.GetRotationRules`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of hotel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetRotationRulesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | [default to 25]
 **offset** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [default to 0]
 **setupType** | **string** | Simple type for Rotation Setup Rule(s). | 
 **inactiveRules** | **bool** | If set to True, only Inactive Rotation Setup Rules will be retrieved. Otherwise, only Active Rotation Setup Rules will be retrieved. | [default to false]
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**FetchRotationRules**](FetchRotationRules.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetUnitGrades

> FetchUnitGradesDetails GetUnitGrades(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelIds(hotelIds).FetchInactive(fetchInactive).Code(code).WildCard(wildCard).Description(description).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Room Rotation Owner Room Grades



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rmrcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of hotel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    hotelIds := []string{"Inner_example"} // []string | Unique ID(s) of hotel(s). (optional)
    fetchInactive := true // bool | Determines wether to fetch inactive records or not. (optional) (default to false)
    code := []string{"Inner_example"} // []string | Configured Owner Room Grade Codes to be searched.  Multiple values can be entered by adding multiple query parameters. (optional)
    wildCard := "wildCard_example" // string | Wildcard search on Owner Room Grade Codes. (optional)
    description := "description_example" // string | Description of Owner Room Grade Codes. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RoomRotationConfigApi.GetUnitGrades(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelIds(hotelIds).FetchInactive(fetchInactive).Code(code).WildCard(wildCard).Description(description).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RoomRotationConfigApi.GetUnitGrades``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetUnitGrades`: FetchUnitGradesDetails
    fmt.Fprintf(os.Stdout, "Response from `RoomRotationConfigApi.GetUnitGrades`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of hotel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetUnitGradesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **hotelIds** | **[]string** | Unique ID(s) of hotel(s). | 
 **fetchInactive** | **bool** | Determines wether to fetch inactive records or not. | [default to false]
 **code** | **[]string** | Configured Owner Room Grade Codes to be searched.  Multiple values can be entered by adding multiple query parameters. | 
 **wildCard** | **string** | Wildcard search on Owner Room Grade Codes. | 
 **description** | **string** | Description of Owner Room Grade Codes. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**FetchUnitGradesDetails**](FetchUnitGradesDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostAdjustmentReasons

> Status PostAdjustmentReasons(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CreateAdjustmentReasonsDetails(createAdjustmentReasonsDetails).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Post Room Rotation Adjustment Reasons



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rmrcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    createAdjustmentReasonsDetails := *openapiclient.NewPostAdjustmentReasonsRequest() // PostAdjustmentReasonsRequest | Request object for creating a new Room Rotation Adjustment Reason.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RoomRotationConfigApi.PostAdjustmentReasons(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CreateAdjustmentReasonsDetails(createAdjustmentReasonsDetails).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RoomRotationConfigApi.PostAdjustmentReasons``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostAdjustmentReasons`: Status
    fmt.Fprintf(os.Stdout, "Response from `RoomRotationConfigApi.PostAdjustmentReasons`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostAdjustmentReasonsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **createAdjustmentReasonsDetails** | [**PostAdjustmentReasonsRequest**](PostAdjustmentReasonsRequest.md) | Request object for creating a new Room Rotation Adjustment Reason. | 
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


## PostOverrideReasons

> Status PostOverrideReasons(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).OverrideReasonsCriteria(overrideReasonsCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create a new Room Rotation Override Reason



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rmrcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    overrideReasonsCriteria := *openapiclient.NewPostOverrideReasonsRequest() // PostOverrideReasonsRequest | Request object for creating a new Room Rotation Override Reason.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RoomRotationConfigApi.PostOverrideReasons(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).OverrideReasonsCriteria(overrideReasonsCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RoomRotationConfigApi.PostOverrideReasons``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostOverrideReasons`: Status
    fmt.Fprintf(os.Stdout, "Response from `RoomRotationConfigApi.PostOverrideReasons`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostOverrideReasonsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **overrideReasonsCriteria** | [**PostOverrideReasonsRequest**](PostOverrideReasonsRequest.md) | Request object for creating a new Room Rotation Override Reason. | 
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


## PostRoomOwner

> RoomOwnershipDetails PostRoomOwner(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CreateRoomOwnerDetails(createRoomOwnerDetails).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create Room Ownership Record



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rmrcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    createRoomOwnerDetails := *openapiclient.NewPostRoomOwnerRequest() // PostRoomOwnerRequest | Request object for creating room ownership record..
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RoomRotationConfigApi.PostRoomOwner(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CreateRoomOwnerDetails(createRoomOwnerDetails).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RoomRotationConfigApi.PostRoomOwner``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostRoomOwner`: RoomOwnershipDetails
    fmt.Fprintf(os.Stdout, "Response from `RoomRotationConfigApi.PostRoomOwner`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostRoomOwnerRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **createRoomOwnerDetails** | [**PostRoomOwnerRequest**](PostRoomOwnerRequest.md) | Request object for creating room ownership record.. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**RoomOwnershipDetails**](RoomOwnershipDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostRoomOwnerReferrals

> Status PostRoomOwnerReferrals(ctx, profileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CreateRoomOwnerReferralDetails(createRoomOwnerReferralDetails).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create Room Owner Referrals



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rmrcfg"
)

func main() {
    profileId := "profileId_example" // string | Unique ID of profile.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    createRoomOwnerReferralDetails := *openapiclient.NewPostRoomOwnerReferralsRequest() // PostRoomOwnerReferralsRequest | Request object for creating room owner referrals.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RoomRotationConfigApi.PostRoomOwnerReferrals(context.Background(), profileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CreateRoomOwnerReferralDetails(createRoomOwnerReferralDetails).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RoomRotationConfigApi.PostRoomOwnerReferrals``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostRoomOwnerReferrals`: Status
    fmt.Fprintf(os.Stdout, "Response from `RoomRotationConfigApi.PostRoomOwnerReferrals`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**profileId** | **string** | Unique ID of profile. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostRoomOwnerReferralsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **createRoomOwnerReferralDetails** | [**PostRoomOwnerReferralsRequest**](PostRoomOwnerReferralsRequest.md) | Request object for creating room owner referrals. | 
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


## PostRoomRotationRules

> Status PostRoomRotationRules(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RotationRules(rotationRules).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Save changes to Rotation Setup Rules and recalculate Rotation Points



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rmrcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of hotel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    rotationRules := *openapiclient.NewPostRoomRotationRulesRequest() // PostRoomRotationRulesRequest | Request object for saving changes to room rotation setup rules.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RoomRotationConfigApi.PostRoomRotationRules(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RotationRules(rotationRules).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RoomRotationConfigApi.PostRoomRotationRules``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostRoomRotationRules`: Status
    fmt.Fprintf(os.Stdout, "Response from `RoomRotationConfigApi.PostRoomRotationRules`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of hotel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostRoomRotationRulesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **rotationRules** | [**PostRoomRotationRulesRequest**](PostRoomRotationRulesRequest.md) | Request object for saving changes to room rotation setup rules. | 
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


## PostRotationRules

> Status PostRotationRules(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RotationRules(rotationRules).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create Room Rotation Rules



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rmrcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of hotel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    rotationRules := *openapiclient.NewPostRotationRulesRequest() // PostRotationRulesRequest | Request object for creating Rotation Rules for a given property
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RoomRotationConfigApi.PostRotationRules(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RotationRules(rotationRules).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RoomRotationConfigApi.PostRotationRules``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostRotationRules`: Status
    fmt.Fprintf(os.Stdout, "Response from `RoomRotationConfigApi.PostRotationRules`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of hotel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostRotationRulesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **rotationRules** | [**PostRotationRulesRequest**](PostRotationRulesRequest.md) | Request object for creating Rotation Rules for a given property | 
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


## PostUnitGrades

> Status PostUnitGrades(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CreateUnitGradesDetails(createUnitGradesDetails).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create a new Room Rotation Owner Room Grade Code



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rmrcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of hotel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    createUnitGradesDetails := *openapiclient.NewPostUnitGradesRequest() // PostUnitGradesRequest | Request object for creating a new Room Rotation Owner Room Unit Grade.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RoomRotationConfigApi.PostUnitGrades(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CreateUnitGradesDetails(createUnitGradesDetails).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RoomRotationConfigApi.PostUnitGrades``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostUnitGrades`: Status
    fmt.Fprintf(os.Stdout, "Response from `RoomRotationConfigApi.PostUnitGrades`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of hotel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostUnitGradesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **createUnitGradesDetails** | [**PostUnitGradesRequest**](PostUnitGradesRequest.md) | Request object for creating a new Room Rotation Owner Room Unit Grade. | 
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


## PutAdjustmentReasons

> AdjustmentReasonsDetailsUpdated PutAdjustmentReasons(ctx, adjustmentReasonsId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChangeAdjustmentReasonsDetails(changeAdjustmentReasonsDetails).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Update Room Rotation Adjustment Reasons



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rmrcfg"
)

func main() {
    adjustmentReasonsId := "adjustmentReasonsId_example" // string | Unique ID of Room Rotation Adjustment Reason
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    changeAdjustmentReasonsDetails := *openapiclient.NewPutAdjustmentReasonsRequest() // PutAdjustmentReasonsRequest | Request object for changing an existing Room Rotation Adjustment Reasons.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RoomRotationConfigApi.PutAdjustmentReasons(context.Background(), adjustmentReasonsId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChangeAdjustmentReasonsDetails(changeAdjustmentReasonsDetails).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RoomRotationConfigApi.PutAdjustmentReasons``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutAdjustmentReasons`: AdjustmentReasonsDetailsUpdated
    fmt.Fprintf(os.Stdout, "Response from `RoomRotationConfigApi.PutAdjustmentReasons`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**adjustmentReasonsId** | **string** | Unique ID of Room Rotation Adjustment Reason | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutAdjustmentReasonsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **changeAdjustmentReasonsDetails** | [**PutAdjustmentReasonsRequest**](PutAdjustmentReasonsRequest.md) | Request object for changing an existing Room Rotation Adjustment Reasons. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**AdjustmentReasonsDetailsUpdated**](AdjustmentReasonsDetailsUpdated.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutOverrideReasons

> Status PutOverrideReasons(ctx, overrideReasonsId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).OverrideReasonsToBeChanged(overrideReasonsToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change an existing Room Rotation Override Reason



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rmrcfg"
)

func main() {
    overrideReasonsId := "overrideReasonsId_example" // string | Unique ID of Room Rotation Override Reason
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    overrideReasonsToBeChanged := *openapiclient.NewPutOverrideReasonsRequest() // PutOverrideReasonsRequest | Request object for changing an existing Room Rotation Override Reason.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RoomRotationConfigApi.PutOverrideReasons(context.Background(), overrideReasonsId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).OverrideReasonsToBeChanged(overrideReasonsToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RoomRotationConfigApi.PutOverrideReasons``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutOverrideReasons`: Status
    fmt.Fprintf(os.Stdout, "Response from `RoomRotationConfigApi.PutOverrideReasons`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**overrideReasonsId** | **string** | Unique ID of Room Rotation Override Reason | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutOverrideReasonsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **overrideReasonsToBeChanged** | [**PutOverrideReasonsRequest**](PutOverrideReasonsRequest.md) | Request object for changing an existing Room Rotation Override Reason. | 
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


## PutRevenueTransactionCodes

> ChangeRevenueTransactionCodesDetails PutRevenueTransactionCodes(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChangeRevenueTransactionCodesCriteria(changeRevenueTransactionCodesCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Update the room rotation revenue status of a set of transaction codes



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rmrcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of hotel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    changeRevenueTransactionCodesCriteria := *openapiclient.NewPutRevenueTransactionCodesRequest() // PutRevenueTransactionCodesRequest | Request object for updating the rotation revenue status of a transaction code for a given property.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RoomRotationConfigApi.PutRevenueTransactionCodes(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChangeRevenueTransactionCodesCriteria(changeRevenueTransactionCodesCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RoomRotationConfigApi.PutRevenueTransactionCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutRevenueTransactionCodes`: ChangeRevenueTransactionCodesDetails
    fmt.Fprintf(os.Stdout, "Response from `RoomRotationConfigApi.PutRevenueTransactionCodes`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of hotel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutRevenueTransactionCodesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **changeRevenueTransactionCodesCriteria** | [**PutRevenueTransactionCodesRequest**](PutRevenueTransactionCodesRequest.md) | Request object for updating the rotation revenue status of a transaction code for a given property. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ChangeRevenueTransactionCodesDetails**](ChangeRevenueTransactionCodesDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutRoomOwner

> RoomOwnershipDetails PutRoomOwner(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChangeRoomOwnerDetails(changeRoomOwnerDetails).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change Room Ownership Records



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rmrcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    changeRoomOwnerDetails := *openapiclient.NewPutRoomOwnerRequest() // PutRoomOwnerRequest | Request object for changing room ownership record.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RoomRotationConfigApi.PutRoomOwner(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChangeRoomOwnerDetails(changeRoomOwnerDetails).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RoomRotationConfigApi.PutRoomOwner``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutRoomOwner`: RoomOwnershipDetails
    fmt.Fprintf(os.Stdout, "Response from `RoomRotationConfigApi.PutRoomOwner`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPutRoomOwnerRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **changeRoomOwnerDetails** | [**PutRoomOwnerRequest**](PutRoomOwnerRequest.md) | Request object for changing room ownership record. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**RoomOwnershipDetails**](RoomOwnershipDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutRoomOwnerReferral

> Status PutRoomOwnerReferral(ctx, profileId, roomOwnerReferralId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChangeRoomOwnerReferralDetails(changeRoomOwnerReferralDetails).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change Room Owner Referral Record



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rmrcfg"
)

func main() {
    profileId := "profileId_example" // string | Unique ID of profile.
    roomOwnerReferralId := "roomOwnerReferralId_example" // string | Unique Room Owner Referral Record.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    changeRoomOwnerReferralDetails := *openapiclient.NewPutRoomOwnerReferralRequest() // PutRoomOwnerReferralRequest | Request object for changing room owner referral record.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RoomRotationConfigApi.PutRoomOwnerReferral(context.Background(), profileId, roomOwnerReferralId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChangeRoomOwnerReferralDetails(changeRoomOwnerReferralDetails).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RoomRotationConfigApi.PutRoomOwnerReferral``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutRoomOwnerReferral`: Status
    fmt.Fprintf(os.Stdout, "Response from `RoomRotationConfigApi.PutRoomOwnerReferral`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**profileId** | **string** | Unique ID of profile. | 
**roomOwnerReferralId** | **string** | Unique Room Owner Referral Record. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutRoomOwnerReferralRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **changeRoomOwnerReferralDetails** | [**PutRoomOwnerReferralRequest**](PutRoomOwnerReferralRequest.md) | Request object for changing room owner referral record. | 
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


## PutRotationPeriod

> ChangeRotationPeriodDetails PutRotationPeriod(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RotationPeriod(rotationPeriod).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change Room Rotation Period



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rmrcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of hotel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    rotationPeriod := *openapiclient.NewPutRotationPeriodRequest() // PutRotationPeriodRequest | Request Object for changing Rotation Period
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RoomRotationConfigApi.PutRotationPeriod(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RotationPeriod(rotationPeriod).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RoomRotationConfigApi.PutRotationPeriod``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutRotationPeriod`: ChangeRotationPeriodDetails
    fmt.Fprintf(os.Stdout, "Response from `RoomRotationConfigApi.PutRotationPeriod`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of hotel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutRotationPeriodRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **rotationPeriod** | [**PutRotationPeriodRequest**](PutRotationPeriodRequest.md) | Request Object for changing Rotation Period | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ChangeRotationPeriodDetails**](ChangeRotationPeriodDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutRotationRules

> Status PutRotationRules(ctx, ruleId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RotationRules(rotationRules).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change Room Rotation Rules



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rmrcfg"
)

func main() {
    ruleId := "ruleId_example" // string | Unique Rotation Group Code.
    hotelId := "hotelId_example" // string | Unique ID of hotel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    rotationRules := *openapiclient.NewPostRotationRulesRequest() // PostRotationRulesRequest | Request object for changing room rotation rules.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RoomRotationConfigApi.PutRotationRules(context.Background(), ruleId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RotationRules(rotationRules).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RoomRotationConfigApi.PutRotationRules``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutRotationRules`: Status
    fmt.Fprintf(os.Stdout, "Response from `RoomRotationConfigApi.PutRotationRules`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**ruleId** | **string** | Unique Rotation Group Code. | 
**hotelId** | **string** | Unique ID of hotel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutRotationRulesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **rotationRules** | [**PostRotationRulesRequest**](PostRotationRulesRequest.md) | Request object for changing room rotation rules. | 
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


## PutUnitGrades

> UnitGradesDetailsUpdated PutUnitGrades(ctx, unitGradeCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChangeUnitGradesDetails(changeUnitGradesDetails).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change an existing Room Rotation Owner Room Unit Grade



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rmrcfg"
)

func main() {
    unitGradeCode := "unitGradeCode_example" // string | Unique Code of Owner Room Unit Grade.
    hotelId := "hotelId_example" // string | Unique ID of hotel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    changeUnitGradesDetails := *openapiclient.NewPutUnitGradesRequest() // PutUnitGradesRequest | Request object for changing an existing Room Rotation Owner Room Unit Grades.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RoomRotationConfigApi.PutUnitGrades(context.Background(), unitGradeCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChangeUnitGradesDetails(changeUnitGradesDetails).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RoomRotationConfigApi.PutUnitGrades``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutUnitGrades`: UnitGradesDetailsUpdated
    fmt.Fprintf(os.Stdout, "Response from `RoomRotationConfigApi.PutUnitGrades`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**unitGradeCode** | **string** | Unique Code of Owner Room Unit Grade. | 
**hotelId** | **string** | Unique ID of hotel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutUnitGradesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **changeUnitGradesDetails** | [**PutUnitGradesRequest**](PutUnitGradesRequest.md) | Request object for changing an existing Room Rotation Owner Room Unit Grades. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**UnitGradesDetailsUpdated**](UnitGradesDetailsUpdated.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


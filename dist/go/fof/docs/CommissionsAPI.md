# \CommissionsAPI

All URIs are relative to */fof/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**AssociateCommissionAgentToReservations**](CommissionsAPI.md#AssociateCommissionAgentToReservations) | **Put** /hotels/{hotelId}/commissionAgent/{commissionAgentId}/commissions | Operation to associate commission agent to reservations.
[**CalculateCommissions**](CommissionsAPI.md#CalculateCommissions) | **Put** /hotels/{hotelId}/commissions | Operation to calculate commissions.
[**ChangeCommission**](CommissionsAPI.md#ChangeCommission) | **Put** /hotels/{hotelId}/commissions/{commissionId} | Operation to change commission.
[**ChangeCommissionCheck**](CommissionsAPI.md#ChangeCommissionCheck) | **Put** /hotels/{hotelId}/bankAccounts/{bankAccountId}/commissionChecks | Operation to change commission check.
[**ChangeCommissionPaymentActivityByRange**](CommissionsAPI.md#ChangeCommissionPaymentActivityByRange) | **Put** /hotels/{hotelId}/bankAccounts/{bankAccountId}/commissionPayments | Operation to change commission payment activity by range.
[**DiscardCommissionChecks**](CommissionsAPI.md#DiscardCommissionChecks) | **Delete** /hotels/{hotelId}/commissionChecks | Operation to discard commission checks.
[**GetBankAccounts**](CommissionsAPI.md#GetBankAccounts) | **Get** /hotels/{hotelId}/bankAccounts | Operation to fetch bank accounts.
[**GetCommission**](CommissionsAPI.md#GetCommission) | **Get** /hotels/{hotelId}/commissions/{commissionId} | Operation to fetch commission.
[**GetCommissionNotes**](CommissionsAPI.md#GetCommissionNotes) | **Get** /hotels/{hotelId}/reservations/{reservationId}/commissionNotes | Operation to fetch commission notes.
[**GetCommissionPaymentDetails**](CommissionsAPI.md#GetCommissionPaymentDetails) | **Get** /hotels/{hotelId}/reservations/{reservationId}/commissionPaymentDetails | Fetch Commission Payment Details
[**GetCommissionPaymentsActivity**](CommissionsAPI.md#GetCommissionPaymentsActivity) | **Get** /hotels/{hotelId}/bankAccounts/{bankAccountId}/commissionPayments | Operation to fetch commission payments activity.
[**GetCommissions**](CommissionsAPI.md#GetCommissions) | **Get** /hotels/{hotelId}/commissions | Operation to fetch commissions.
[**GetReservationsForCommissions**](CommissionsAPI.md#GetReservationsForCommissions) | **Get** /hotels/{hotelId}/bankAccounts/{bankAccountId}/agents/{agentId}/reservationsForCommissions | Operation to fetch Reservations for Commissions associated to a Travel Agent
[**GetTravelAgentsForCommissions**](CommissionsAPI.md#GetTravelAgentsForCommissions) | **Get** /hotels/{hotelId}/bankAccounts/{bankAccountId}/travelAgentsForCommissions | Operation to fetch Travel Agents associated with commissions for the given bank Account.
[**ProcessCommissionPayments**](CommissionsAPI.md#ProcessCommissionPayments) | **Put** /hotels/{hotelId}/commissionPayments | Operation to process commission payments.
[**RecalculateCommissionOnCodeChange**](CommissionsAPI.md#RecalculateCommissionOnCodeChange) | **Put** /hotels/{hotelId}/commissions/{commissionId}/commissionCodes/{commissionCode}/recalculate | Operation to recalculate commission on code change.
[**RemoveCommission**](CommissionsAPI.md#RemoveCommission) | **Delete** /hotels/{hotelId}/commissions/{commissionId} | Operation to remove commission.
[**RemoveCommissionAgentFromReservations**](CommissionsAPI.md#RemoveCommissionAgentFromReservations) | **Delete** /hotels/{hotelId}/commissionAgent/{commissionAgentId}/commissions | Operation to remove commission agent from reservations.
[**ReprintCommissionCheckByRange**](CommissionsAPI.md#ReprintCommissionCheckByRange) | **Put** /hotels/{hotelId}/bankAccounts/{bankAccountId}/reprintCommission | Operation to reprint commission check by range.
[**SetProcessingInstructions**](CommissionsAPI.md#SetProcessingInstructions) | **Post** /hotels/{hotelId}/commissions/instructions | Operation to set processing instructions.



## AssociateCommissionAgentToReservations

> AssociateCommissionAgentToReservationsStatus AssociateCommissionAgentToReservations(ctx, commissionAgentId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AssociateCommissionAgentToReservations(associateCommissionAgentToReservations).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to associate commission agent to reservations.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fof"
)

func main() {
    commissionAgentId := "commissionAgentId_example" // string | Unique Id of the Commission Agent.
    hotelId := "hotelId_example" // string | All reservation ids in the list must belong to this property.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    associateCommissionAgentToReservations := *openapiclient.NewAssociateCommissionAgentToReservations() // AssociateCommissionAgentToReservations | Request type for associating reservations to Travel Agent or Source Profile.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CommissionsAPI.AssociateCommissionAgentToReservations(context.Background(), commissionAgentId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AssociateCommissionAgentToReservations(associateCommissionAgentToReservations).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CommissionsAPI.AssociateCommissionAgentToReservations``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `AssociateCommissionAgentToReservations`: AssociateCommissionAgentToReservationsStatus
    fmt.Fprintf(os.Stdout, "Response from `CommissionsAPI.AssociateCommissionAgentToReservations`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**commissionAgentId** | **string** | Unique Id of the Commission Agent. | 
**hotelId** | **string** | All reservation ids in the list must belong to this property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiAssociateCommissionAgentToReservationsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **associateCommissionAgentToReservations** | [**AssociateCommissionAgentToReservations**](AssociateCommissionAgentToReservations.md) | Request type for associating reservations to Travel Agent or Source Profile. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**AssociateCommissionAgentToReservationsStatus**](AssociateCommissionAgentToReservationsStatus.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## CalculateCommissions

> CalculateCommissionsStatus CalculateCommissions(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CalculateCommissions(calculateCommissions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to calculate commissions.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fof"
)

func main() {
    hotelId := "hotelId_example" // string | Property of the commissions to be calculated.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    calculateCommissions := *openapiclient.NewCalculateCommissions() // CalculateCommissions | Request type for calculation of commission for all Travel Agent and/or Source.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CommissionsAPI.CalculateCommissions(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CalculateCommissions(calculateCommissions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CommissionsAPI.CalculateCommissions``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CalculateCommissions`: CalculateCommissionsStatus
    fmt.Fprintf(os.Stdout, "Response from `CommissionsAPI.CalculateCommissions`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Property of the commissions to be calculated. | 

### Other Parameters

Other parameters are passed through a pointer to a apiCalculateCommissionsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **calculateCommissions** | [**CalculateCommissions**](CalculateCommissions.md) | Request type for calculation of commission for all Travel Agent and/or Source. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**CalculateCommissionsStatus**](CalculateCommissionsStatus.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ChangeCommission

> CommissionStatus ChangeCommission(ctx, commissionId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CommissionToBeChanged(commissionToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to change commission.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fof"
)

func main() {
    commissionId := "commissionId_example" // string | Unique id of the commission.
    hotelId := "hotelId_example" // string | Property of the commission record.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    commissionToBeChanged := *openapiclient.NewCommissionToBeChanged() // CommissionToBeChanged | Request type for update of commission detail.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CommissionsAPI.ChangeCommission(context.Background(), commissionId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CommissionToBeChanged(commissionToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CommissionsAPI.ChangeCommission``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ChangeCommission`: CommissionStatus
    fmt.Fprintf(os.Stdout, "Response from `CommissionsAPI.ChangeCommission`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**commissionId** | **string** | Unique id of the commission. | 
**hotelId** | **string** | Property of the commission record. | 

### Other Parameters

Other parameters are passed through a pointer to a apiChangeCommissionRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **commissionToBeChanged** | [**CommissionToBeChanged**](CommissionToBeChanged.md) | Request type for update of commission detail. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**CommissionStatus**](CommissionStatus.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ChangeCommissionCheck

> CommissionCheckStatus ChangeCommissionCheck(ctx, bankAccountId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CommissionCheckToBeChanged(commissionCheckToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to change commission check.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fof"
)

func main() {
    bankAccountId := "bankAccountId_example" // string | Unique id of bank account.
    hotelId := "hotelId_example" // string | Property of the commission record.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    commissionCheckToBeChanged := *openapiclient.NewCommissionCheckToBeChanged() // CommissionCheckToBeChanged | Request type for updating commission check.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CommissionsAPI.ChangeCommissionCheck(context.Background(), bankAccountId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CommissionCheckToBeChanged(commissionCheckToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CommissionsAPI.ChangeCommissionCheck``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ChangeCommissionCheck`: CommissionCheckStatus
    fmt.Fprintf(os.Stdout, "Response from `CommissionsAPI.ChangeCommissionCheck`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**bankAccountId** | **string** | Unique id of bank account. | 
**hotelId** | **string** | Property of the commission record. | 

### Other Parameters

Other parameters are passed through a pointer to a apiChangeCommissionCheckRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **commissionCheckToBeChanged** | [**CommissionCheckToBeChanged**](CommissionCheckToBeChanged.md) | Request type for updating commission check. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**CommissionCheckStatus**](CommissionCheckStatus.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ChangeCommissionPaymentActivityByRange

> CommissionPaymentActivityByRangeStatus ChangeCommissionPaymentActivityByRange(ctx, bankAccountId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CommissionPaymentActivityByRangeToBeChanged(commissionPaymentActivityByRangeToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to change commission payment activity by range.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fof"
)

func main() {
    bankAccountId := "bankAccountId_example" // string | Unique id of bank account.
    hotelId := "hotelId_example" // string | Property of the commission record.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    commissionPaymentActivityByRangeToBeChanged := *openapiclient.NewCommissionPaymentActivityByRangeToBeChanged() // CommissionPaymentActivityByRangeToBeChanged | Request type for updating a range of payments activity.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CommissionsAPI.ChangeCommissionPaymentActivityByRange(context.Background(), bankAccountId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CommissionPaymentActivityByRangeToBeChanged(commissionPaymentActivityByRangeToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CommissionsAPI.ChangeCommissionPaymentActivityByRange``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ChangeCommissionPaymentActivityByRange`: CommissionPaymentActivityByRangeStatus
    fmt.Fprintf(os.Stdout, "Response from `CommissionsAPI.ChangeCommissionPaymentActivityByRange`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**bankAccountId** | **string** | Unique id of bank account. | 
**hotelId** | **string** | Property of the commission record. | 

### Other Parameters

Other parameters are passed through a pointer to a apiChangeCommissionPaymentActivityByRangeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **commissionPaymentActivityByRangeToBeChanged** | [**CommissionPaymentActivityByRangeToBeChanged**](CommissionPaymentActivityByRangeToBeChanged.md) | Request type for updating a range of payments activity. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**CommissionPaymentActivityByRangeStatus**](CommissionPaymentActivityByRangeStatus.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DiscardCommissionChecks

> Status DiscardCommissionChecks(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BankAccountId(bankAccountId).IdExtension(idExtension).IdContext(idContext).Type_(type_).BatchId(batchId).BatchIdIdExtension(batchIdIdExtension).BatchIdIdContext(batchIdIdContext).BatchIdType(batchIdType).FromCheck(fromCheck).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to discard commission checks.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fof"
)

func main() {
    hotelId := "hotelId_example" // string | Property of the commission record.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    bankAccountId := "bankAccountId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    idExtension := int32(56) // int32 | Additional identifying value assigned by the creating system. (optional)
    idContext := "idContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    type_ := "type__example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    batchId := "batchId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    batchIdIdExtension := int32(56) // int32 | Additional identifying value assigned by the creating system. (optional)
    batchIdIdContext := "batchIdIdContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    batchIdType := "batchIdType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    fromCheck := float32(8.14) // float32 | The range start value of checks to be discarded. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CommissionsAPI.DiscardCommissionChecks(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BankAccountId(bankAccountId).IdExtension(idExtension).IdContext(idContext).Type_(type_).BatchId(batchId).BatchIdIdExtension(batchIdIdExtension).BatchIdIdContext(batchIdIdContext).BatchIdType(batchIdType).FromCheck(fromCheck).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CommissionsAPI.DiscardCommissionChecks``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DiscardCommissionChecks`: Status
    fmt.Fprintf(os.Stdout, "Response from `CommissionsAPI.DiscardCommissionChecks`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Property of the commission record. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDiscardCommissionChecksRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **bankAccountId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **idExtension** | **int32** | Additional identifying value assigned by the creating system. | 
 **idContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **type_** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **batchId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **batchIdIdExtension** | **int32** | Additional identifying value assigned by the creating system. | 
 **batchIdIdContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **batchIdType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **fromCheck** | **float32** | The range start value of checks to be discarded. | 
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


## GetBankAccounts

> BankAccountsDetails GetBankAccounts(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BankName(bankName).BankAccountNo(bankAccountNo).Currency(currency).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to fetch bank accounts.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fof"
)

func main() {
    hotelId := "hotelId_example" // string | Property of the bank accounts.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    bankName := "bankName_example" // string | Either full or first part of the bank name. (optional)
    bankAccountNo := "bankAccountNo_example" // string | Either full or first part of the bank account number. (optional)
    currency := "currency_example" // string | Currency used by the bank account. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CommissionsAPI.GetBankAccounts(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BankName(bankName).BankAccountNo(bankAccountNo).Currency(currency).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CommissionsAPI.GetBankAccounts``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetBankAccounts`: BankAccountsDetails
    fmt.Fprintf(os.Stdout, "Response from `CommissionsAPI.GetBankAccounts`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Property of the bank accounts. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetBankAccountsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **bankName** | **string** | Either full or first part of the bank name. | 
 **bankAccountNo** | **string** | Either full or first part of the bank account number. | 
 **currency** | **string** | Currency used by the bank account. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**BankAccountsDetails**](BankAccountsDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetCommission

> CommissionDetails GetCommission(ctx, commissionId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).IdExtension(idExtension).IdContext(idContext).Type_(type_).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to fetch commission.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fof"
)

func main() {
    commissionId := "commissionId_example" // string | Unique id of the commission.
    hotelId := "hotelId_example" // string | Property of the commission record.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    idExtension := int32(56) // int32 | Additional identifying value assigned by the creating system. (optional)
    idContext := "idContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    type_ := "type__example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CommissionsAPI.GetCommission(context.Background(), commissionId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).IdExtension(idExtension).IdContext(idContext).Type_(type_).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CommissionsAPI.GetCommission``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetCommission`: CommissionDetails
    fmt.Fprintf(os.Stdout, "Response from `CommissionsAPI.GetCommission`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**commissionId** | **string** | Unique id of the commission. | 
**hotelId** | **string** | Property of the commission record. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetCommissionRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **idExtension** | **int32** | Additional identifying value assigned by the creating system. | 
 **idContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **type_** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**CommissionDetails**](CommissionDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetCommissionNotes

> CommissionNotesDetails GetCommissionNotes(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).IdExtension(idExtension).IdContext(idContext).Type_(type_).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to fetch commission notes.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fof"
)

func main() {
    reservationId := "reservationId_example" // string | Reservation Id for which the commission notes are to be fetched.
    hotelId := "hotelId_example" // string | Property code against which commissions notes are to be fetched.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    idExtension := int32(56) // int32 | Additional identifying value assigned by the creating system. (optional)
    idContext := "idContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    type_ := "type__example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CommissionsAPI.GetCommissionNotes(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).IdExtension(idExtension).IdContext(idContext).Type_(type_).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CommissionsAPI.GetCommissionNotes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetCommissionNotes`: CommissionNotesDetails
    fmt.Fprintf(os.Stdout, "Response from `CommissionsAPI.GetCommissionNotes`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Reservation Id for which the commission notes are to be fetched. | 
**hotelId** | **string** | Property code against which commissions notes are to be fetched. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetCommissionNotesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **idExtension** | **int32** | Additional identifying value assigned by the creating system. | 
 **idContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **type_** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**CommissionNotesDetails**](CommissionNotesDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetCommissionPaymentDetails

> CommissionPaymentDetails GetCommissionPaymentDetails(ctx, hotelId, reservationId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Fetch Commission Payment Details



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fof"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    reservationId := "reservationId_example" // string | Unique ID of the reservation
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CommissionsAPI.GetCommissionPaymentDetails(context.Background(), hotelId, reservationId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CommissionsAPI.GetCommissionPaymentDetails``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetCommissionPaymentDetails`: CommissionPaymentDetails
    fmt.Fprintf(os.Stdout, "Response from `CommissionsAPI.GetCommissionPaymentDetails`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel | 
**reservationId** | **string** | Unique ID of the reservation | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetCommissionPaymentDetailsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**CommissionPaymentDetails**](CommissionPaymentDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetCommissionPaymentsActivity

> CommissionPaymentsActivityDetails GetCommissionPaymentsActivity(ctx, bankAccountId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).IdExtension(idExtension).IdContext(idContext).Type_(type_).BatchId(batchId).BatchIdIdExtension(batchIdIdExtension).BatchIdIdContext(batchIdIdContext).BatchIdType(batchIdType).FileName(fileName).Payee(payee).CheckNo(checkNo).Status(status).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to fetch commission payments activity.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fof"
)

func main() {
    bankAccountId := "bankAccountId_example" // string | Unique id of bank account.
    hotelId := "hotelId_example" // string | Property of the commission record.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    idExtension := int32(56) // int32 | Additional identifying value assigned by the creating system. (optional)
    idContext := "idContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    type_ := "type__example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    batchId := "batchId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    batchIdIdExtension := int32(56) // int32 | Additional identifying value assigned by the creating system. (optional)
    batchIdIdContext := "batchIdIdContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    batchIdType := "batchIdType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    fileName := "fileName_example" // string | File name if payment method is EFT. (optional)
    payee := "payee_example" // string | File name if payment method is EFT. (optional)
    checkNo := float32(8.14) // float32 | Check no of payment. (optional)
    status := []string{"Status_example"} // []string | Simple type for payment activity status type. Valid values are Outstanding, Reconciled, Unpresented and Void. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CommissionsAPI.GetCommissionPaymentsActivity(context.Background(), bankAccountId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).IdExtension(idExtension).IdContext(idContext).Type_(type_).BatchId(batchId).BatchIdIdExtension(batchIdIdExtension).BatchIdIdContext(batchIdIdContext).BatchIdType(batchIdType).FileName(fileName).Payee(payee).CheckNo(checkNo).Status(status).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CommissionsAPI.GetCommissionPaymentsActivity``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetCommissionPaymentsActivity`: CommissionPaymentsActivityDetails
    fmt.Fprintf(os.Stdout, "Response from `CommissionsAPI.GetCommissionPaymentsActivity`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**bankAccountId** | **string** | Unique id of bank account. | 
**hotelId** | **string** | Property of the commission record. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetCommissionPaymentsActivityRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **idExtension** | **int32** | Additional identifying value assigned by the creating system. | 
 **idContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **type_** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **batchId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **batchIdIdExtension** | **int32** | Additional identifying value assigned by the creating system. | 
 **batchIdIdContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **batchIdType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **fileName** | **string** | File name if payment method is EFT. | 
 **payee** | **string** | File name if payment method is EFT. | 
 **checkNo** | **float32** | Check no of payment. | 
 **status** | **[]string** | Simple type for payment activity status type. Valid values are Outstanding, Reconciled, Unpresented and Void. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**CommissionPaymentsActivityDetails**](CommissionPaymentsActivityDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetCommissions

> CommissionsDetails GetCommissions(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BankAccountId(bankAccountId).IdExtension(idExtension).IdContext(idContext).Type_(type_).AgentId(agentId).AgentIdIdExtension(agentIdIdExtension).AgentIdIdContext(agentIdIdContext).AgentIdType(agentIdType).ResvNameId(resvNameId).ResvNameIdIdExtension(resvNameIdIdExtension).ResvNameIdIdContext(resvNameIdIdContext).ResvNameIdType(resvNameIdType).CommissionId(commissionId).CommissionIdIdExtension(commissionIdIdExtension).CommissionIdIdContext(commissionIdIdContext).CommissionIdType(commissionIdType).BatchId(batchId).BatchIdIdExtension(batchIdIdExtension).BatchIdIdContext(batchIdIdContext).BatchIdType(batchIdType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to fetch commissions.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fof"
)

func main() {
    hotelId := "hotelId_example" // string | Property of the commission record.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    bankAccountId := "bankAccountId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    idExtension := int32(56) // int32 | Additional identifying value assigned by the creating system. (optional)
    idContext := "idContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    type_ := "type__example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    agentId := "agentId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    agentIdIdExtension := int32(56) // int32 | Additional identifying value assigned by the creating system. (optional)
    agentIdIdContext := "agentIdIdContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    agentIdType := "agentIdType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    resvNameId := "resvNameId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    resvNameIdIdExtension := int32(56) // int32 | Additional identifying value assigned by the creating system. (optional)
    resvNameIdIdContext := "resvNameIdIdContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    resvNameIdType := "resvNameIdType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    commissionId := "commissionId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    commissionIdIdExtension := int32(56) // int32 | Additional identifying value assigned by the creating system. (optional)
    commissionIdIdContext := "commissionIdIdContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    commissionIdType := "commissionIdType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    batchId := "batchId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    batchIdIdExtension := int32(56) // int32 | Additional identifying value assigned by the creating system. (optional)
    batchIdIdContext := "batchIdIdContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    batchIdType := "batchIdType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CommissionsAPI.GetCommissions(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BankAccountId(bankAccountId).IdExtension(idExtension).IdContext(idContext).Type_(type_).AgentId(agentId).AgentIdIdExtension(agentIdIdExtension).AgentIdIdContext(agentIdIdContext).AgentIdType(agentIdType).ResvNameId(resvNameId).ResvNameIdIdExtension(resvNameIdIdExtension).ResvNameIdIdContext(resvNameIdIdContext).ResvNameIdType(resvNameIdType).CommissionId(commissionId).CommissionIdIdExtension(commissionIdIdExtension).CommissionIdIdContext(commissionIdIdContext).CommissionIdType(commissionIdType).BatchId(batchId).BatchIdIdExtension(batchIdIdExtension).BatchIdIdContext(batchIdIdContext).BatchIdType(batchIdType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CommissionsAPI.GetCommissions``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetCommissions`: CommissionsDetails
    fmt.Fprintf(os.Stdout, "Response from `CommissionsAPI.GetCommissions`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Property of the commission record. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetCommissionsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **bankAccountId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **idExtension** | **int32** | Additional identifying value assigned by the creating system. | 
 **idContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **type_** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **agentId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **agentIdIdExtension** | **int32** | Additional identifying value assigned by the creating system. | 
 **agentIdIdContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **agentIdType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **resvNameId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **resvNameIdIdExtension** | **int32** | Additional identifying value assigned by the creating system. | 
 **resvNameIdIdContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **resvNameIdType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **commissionId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **commissionIdIdExtension** | **int32** | Additional identifying value assigned by the creating system. | 
 **commissionIdIdContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **commissionIdType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **batchId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **batchIdIdExtension** | **int32** | Additional identifying value assigned by the creating system. | 
 **batchIdIdContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **batchIdType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**CommissionsDetails**](CommissionsDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetReservationsForCommissions

> CommissionsDetails GetReservationsForCommissions(ctx, hotelId, bankAccountId, agentId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).GuestName(guestName).ConfirmationNo(confirmationNo).ReservationStatus(reservationStatus).AccountReceivableOffset(accountReceivableOffset).OnHold(onHold).CommissionPaid(commissionPaid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to fetch Reservations for Commissions associated to a Travel Agent



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fof"
)

func main() {
    hotelId := "hotelId_example" // string | Reservations for commissions.
    bankAccountId := "bankAccountId_example" // string | A unique identifying value(ID) to represent the Bank.
    agentId := "agentId_example" // string | A unique identifying value(ID) to represent the Travel Agent associated with the commission.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    offset := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional) (default to 0)
    guestName := "guestName_example" // string | Indicates the guest name of the reservation that is to be returned  (optional)
    confirmationNo := "confirmationNo_example" // string | Indicates the confirmation number of the reservation that is to be returned  (optional)
    reservationStatus := []string{"ReservationStatus_example"} // []string | Indicates the status of the reservations that is to be returned  (optional)
    accountReceivableOffset := true // bool | When set to true only reservations flagged for account receivables are returned (optional) (default to false)
    onHold := true // bool | When set to true only reservations having a commission hold code are returned (optional) (default to false)
    commissionPaid := true // bool | When set to true only reservations having paid the commissions are returned (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CommissionsAPI.GetReservationsForCommissions(context.Background(), hotelId, bankAccountId, agentId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).GuestName(guestName).ConfirmationNo(confirmationNo).ReservationStatus(reservationStatus).AccountReceivableOffset(accountReceivableOffset).OnHold(onHold).CommissionPaid(commissionPaid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CommissionsAPI.GetReservationsForCommissions``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetReservationsForCommissions`: CommissionsDetails
    fmt.Fprintf(os.Stdout, "Response from `CommissionsAPI.GetReservationsForCommissions`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Reservations for commissions. | 
**bankAccountId** | **string** | A unique identifying value(ID) to represent the Bank. | 
**agentId** | **string** | A unique identifying value(ID) to represent the Travel Agent associated with the commission. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetReservationsForCommissionsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **offset** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [default to 0]
 **guestName** | **string** | Indicates the guest name of the reservation that is to be returned  | 
 **confirmationNo** | **string** | Indicates the confirmation number of the reservation that is to be returned  | 
 **reservationStatus** | **[]string** | Indicates the status of the reservations that is to be returned  | 
 **accountReceivableOffset** | **bool** | When set to true only reservations flagged for account receivables are returned | [default to false]
 **onHold** | **bool** | When set to true only reservations having a commission hold code are returned | [default to false]
 **commissionPaid** | **bool** | When set to true only reservations having paid the commissions are returned | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**CommissionsDetails**](CommissionsDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetTravelAgentsForCommissions

> CommissionsDetails GetTravelAgentsForCommissions(ctx, hotelId, bankAccountId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to fetch Travel Agents associated with commissions for the given bank Account.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fof"
)

func main() {
    hotelId := "hotelId_example" // string | Property of the Travel Agent records.
    bankAccountId := "bankAccountId_example" // string | A unique identifying value(ID) to represent the Bank
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CommissionsAPI.GetTravelAgentsForCommissions(context.Background(), hotelId, bankAccountId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CommissionsAPI.GetTravelAgentsForCommissions``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetTravelAgentsForCommissions`: CommissionsDetails
    fmt.Fprintf(os.Stdout, "Response from `CommissionsAPI.GetTravelAgentsForCommissions`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Property of the Travel Agent records. | 
**bankAccountId** | **string** | A unique identifying value(ID) to represent the Bank | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetTravelAgentsForCommissionsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**CommissionsDetails**](CommissionsDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ProcessCommissionPayments

> ProcessCommissionPaymentsStatus ProcessCommissionPayments(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ProcessCommissionPayments(processCommissionPayments).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to process commission payments.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fof"
)

func main() {
    hotelId := "hotelId_example" // string | Property of the commission record.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    processCommissionPayments := *openapiclient.NewProcessCommissionPayments() // ProcessCommissionPayments | Request type for processing commission payments.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CommissionsAPI.ProcessCommissionPayments(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ProcessCommissionPayments(processCommissionPayments).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CommissionsAPI.ProcessCommissionPayments``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ProcessCommissionPayments`: ProcessCommissionPaymentsStatus
    fmt.Fprintf(os.Stdout, "Response from `CommissionsAPI.ProcessCommissionPayments`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Property of the commission record. | 

### Other Parameters

Other parameters are passed through a pointer to a apiProcessCommissionPaymentsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **processCommissionPayments** | [**ProcessCommissionPayments**](ProcessCommissionPayments.md) | Request type for processing commission payments. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ProcessCommissionPaymentsStatus**](ProcessCommissionPaymentsStatus.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## RecalculateCommissionOnCodeChange

> RecalculateCommissionOnCodeChangeStatus RecalculateCommissionOnCodeChange(ctx, commissionCode, commissionId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RecalculateCommissionOnCodeChange(recalculateCommissionOnCodeChange).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to recalculate commission on code change.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fof"
)

func main() {
    commissionCode := "commissionCode_example" // string | New commission code.
    commissionId := "commissionId_example" // string | Unique id of the commission.
    hotelId := "hotelId_example" // string | Property of the commission record.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    recalculateCommissionOnCodeChange := *openapiclient.NewRecalculateCommissionOnCodeChange() // RecalculateCommissionOnCodeChange | Request type for recalculating commission amount when commission code of unpaid commission is changed.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CommissionsAPI.RecalculateCommissionOnCodeChange(context.Background(), commissionCode, commissionId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RecalculateCommissionOnCodeChange(recalculateCommissionOnCodeChange).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CommissionsAPI.RecalculateCommissionOnCodeChange``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `RecalculateCommissionOnCodeChange`: RecalculateCommissionOnCodeChangeStatus
    fmt.Fprintf(os.Stdout, "Response from `CommissionsAPI.RecalculateCommissionOnCodeChange`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**commissionCode** | **string** | New commission code. | 
**commissionId** | **string** | Unique id of the commission. | 
**hotelId** | **string** | Property of the commission record. | 

### Other Parameters

Other parameters are passed through a pointer to a apiRecalculateCommissionOnCodeChangeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **recalculateCommissionOnCodeChange** | [**RecalculateCommissionOnCodeChange**](RecalculateCommissionOnCodeChange.md) | Request type for recalculating commission amount when commission code of unpaid commission is changed. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**RecalculateCommissionOnCodeChangeStatus**](RecalculateCommissionOnCodeChangeStatus.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## RemoveCommission

> Status RemoveCommission(ctx, commissionId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).IdExtension(idExtension).IdContext(idContext).Type_(type_).DetachDescription(detachDescription).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to remove commission.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fof"
)

func main() {
    commissionId := "commissionId_example" // string | Unique id of the commission.
    hotelId := "hotelId_example" // string | Property of the commission record.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    idExtension := int32(56) // int32 | Additional identifying value assigned by the creating system. (optional)
    idContext := "idContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    type_ := "type__example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    detachDescription := "detachDescription_example" // string | Used for Character Strings, length 0 to 2000. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CommissionsAPI.RemoveCommission(context.Background(), commissionId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).IdExtension(idExtension).IdContext(idContext).Type_(type_).DetachDescription(detachDescription).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CommissionsAPI.RemoveCommission``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `RemoveCommission`: Status
    fmt.Fprintf(os.Stdout, "Response from `CommissionsAPI.RemoveCommission`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**commissionId** | **string** | Unique id of the commission. | 
**hotelId** | **string** | Property of the commission record. | 

### Other Parameters

Other parameters are passed through a pointer to a apiRemoveCommissionRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **idExtension** | **int32** | Additional identifying value assigned by the creating system. | 
 **idContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **type_** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **detachDescription** | **string** | Used for Character Strings, length 0 to 2000. | 
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


## RemoveCommissionAgentFromReservations

> Status RemoveCommissionAgentFromReservations(ctx, commissionAgentId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CommissionAgentType(commissionAgentType).IdExtension(idExtension).IdContext(idContext).Type_(type_).ReservationId(reservationId).ReservationIdIdExtension(reservationIdIdExtension).ReservationIdIdContext(reservationIdIdContext).ReservationIdType(reservationIdType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to remove commission agent from reservations.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fof"
)

func main() {
    commissionAgentId := "commissionAgentId_example" // string | Unique Id of the Commission Agent.
    hotelId := "hotelId_example" // string | All reservation ids in the list must belong to this property.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    commissionAgentType := "commissionAgentType_example" // string | Simple type for commission agent type. Valid values are Agent and Source. (optional)
    idExtension := int32(56) // int32 | Additional identifying value assigned by the creating system. (optional)
    idContext := "idContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    type_ := "type__example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    reservationId := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    reservationIdIdExtension := []int32{int32(123)} // []int32 | Additional identifying value assigned by the creating system. (optional)
    reservationIdIdContext := []string{"Inner_example"} // []string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    reservationIdType := []string{"Inner_example"} // []string | A reference to the type of object defined by the UniqueID element. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CommissionsAPI.RemoveCommissionAgentFromReservations(context.Background(), commissionAgentId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CommissionAgentType(commissionAgentType).IdExtension(idExtension).IdContext(idContext).Type_(type_).ReservationId(reservationId).ReservationIdIdExtension(reservationIdIdExtension).ReservationIdIdContext(reservationIdIdContext).ReservationIdType(reservationIdType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CommissionsAPI.RemoveCommissionAgentFromReservations``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `RemoveCommissionAgentFromReservations`: Status
    fmt.Fprintf(os.Stdout, "Response from `CommissionsAPI.RemoveCommissionAgentFromReservations`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**commissionAgentId** | **string** | Unique Id of the Commission Agent. | 
**hotelId** | **string** | All reservation ids in the list must belong to this property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiRemoveCommissionAgentFromReservationsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **commissionAgentType** | **string** | Simple type for commission agent type. Valid values are Agent and Source. | 
 **idExtension** | **int32** | Additional identifying value assigned by the creating system. | 
 **idContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **type_** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **reservationId** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **reservationIdIdExtension** | **[]int32** | Additional identifying value assigned by the creating system. | 
 **reservationIdIdContext** | **[]string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **reservationIdType** | **[]string** | A reference to the type of object defined by the UniqueID element. | 
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


## ReprintCommissionCheckByRange

> ReprintCommissionCheckByRangeStatus ReprintCommissionCheckByRange(ctx, bankAccountId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ReprintCommissionCheckByRange(reprintCommissionCheckByRange).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to reprint commission check by range.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fof"
)

func main() {
    bankAccountId := "bankAccountId_example" // string | Unique id of bank account
    hotelId := "hotelId_example" // string | Property of the commission record.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    reprintCommissionCheckByRange := *openapiclient.NewReprintCommissionCheckByRange() // ReprintCommissionCheckByRange | Request type for reprinting a range of check payments.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CommissionsAPI.ReprintCommissionCheckByRange(context.Background(), bankAccountId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ReprintCommissionCheckByRange(reprintCommissionCheckByRange).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CommissionsAPI.ReprintCommissionCheckByRange``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ReprintCommissionCheckByRange`: ReprintCommissionCheckByRangeStatus
    fmt.Fprintf(os.Stdout, "Response from `CommissionsAPI.ReprintCommissionCheckByRange`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**bankAccountId** | **string** | Unique id of bank account | 
**hotelId** | **string** | Property of the commission record. | 

### Other Parameters

Other parameters are passed through a pointer to a apiReprintCommissionCheckByRangeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **reprintCommissionCheckByRange** | [**ReprintCommissionCheckByRange**](ReprintCommissionCheckByRange.md) | Request type for reprinting a range of check payments. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ReprintCommissionCheckByRangeStatus**](ReprintCommissionCheckByRangeStatus.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## SetProcessingInstructions

> Status SetProcessingInstructions(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).SetProcessingInstructions(setProcessingInstructions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to set processing instructions.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fof"
)

func main() {
    hotelId := "hotelId_example" // string | Property from which the agent will be on hold for commission.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    setProcessingInstructions := *openapiclient.NewSetProcessingInstructions() // SetProcessingInstructions | Request Type for setting instructions for commission processing on Agent or Reservation level.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CommissionsAPI.SetProcessingInstructions(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).SetProcessingInstructions(setProcessingInstructions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CommissionsAPI.SetProcessingInstructions``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `SetProcessingInstructions`: Status
    fmt.Fprintf(os.Stdout, "Response from `CommissionsAPI.SetProcessingInstructions`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Property from which the agent will be on hold for commission. | 

### Other Parameters

Other parameters are passed through a pointer to a apiSetProcessingInstructionsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **setProcessingInstructions** | [**SetProcessingInstructions**](SetProcessingInstructions.md) | Request Type for setting instructions for commission processing on Agent or Reservation level. | 
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


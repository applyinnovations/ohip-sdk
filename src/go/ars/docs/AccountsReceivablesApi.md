# \AccountsReceivablesApi

All URIs are relative to */ars/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CompressARInvoices**](AccountsReceivablesApi.md#CompressARInvoices) | **Put** /hotels/{hotelId}/accounts/{accountId}/compressInvoices | Combines Account receivable invoices
[**CopyARAccount**](AccountsReceivablesApi.md#CopyARAccount) | **Post** /hotels/{hotelId}/accounts/{accountId}/copyAccount | Copy account receivable account 
[**DeleteAccount**](AccountsReceivablesApi.md#DeleteAccount) | **Delete** /hotels/{hotelId}/accounts/{accountId} | Delete Account 
[**DeleteAccountComment**](AccountsReceivablesApi.md#DeleteAccountComment) | **Delete** /hotels/{hotelId}/accounts/{accountId}/comments | Delete Account Comment
[**DeleteAccountFixedCharge**](AccountsReceivablesApi.md#DeleteAccountFixedCharge) | **Delete** /hotels/{hotelId}/accounts/{accountId}/fixedCharges/{fixedChargeId} | Delete fixed charges 
[**DeleteAccountTrace**](AccountsReceivablesApi.md#DeleteAccountTrace) | **Delete** /hotels/{hotelId}/accounts/{accountId}/traces | This API facilitates deletion of account traces.
[**DeletePaymentsFromInvoice**](AccountsReceivablesApi.md#DeletePaymentsFromInvoice) | **Delete** /hotels/{hotelId}/invoices/{invoiceId}/transactions/{transactionId}/paymentsFromInvoice | Delete payments from invoice
[**GetARAgingCycles**](AccountsReceivablesApi.md#GetARAgingCycles) | **Get** /hotels/{hotelId}/agingCycles | Get given AR account&#39;s aging detail
[**GetARCreditCardPayments**](AccountsReceivablesApi.md#GetARCreditCardPayments) | **Get** /hotels/{hotelId}/transactions/{transactionId}/creditcard/payments | Get account receivable folios which are paid using credit cards
[**GetARFolioPrinters**](AccountsReceivablesApi.md#GetARFolioPrinters) | **Get** /hotels/{hotelId}/accounts/{accountId}/folioPrinters | Get list of account receivable folio printers
[**GetARStatements**](AccountsReceivablesApi.md#GetARStatements) | **Get** /statements | Get given profile&#39;s account receivable statements
[**GetARTransactions**](AccountsReceivablesApi.md#GetARTransactions) | **Get** /arTransactions | Get AR transactions.
[**GetAccount**](AccountsReceivablesApi.md#GetAccount) | **Get** /hotels/{hotelId}/accounts/{accountId} | Get account
[**GetAccounts**](AccountsReceivablesApi.md#GetAccounts) | **Get** /accounts | Get given profile&#39;s account receivable detail
[**GetAppliedInvoicePayments**](AccountsReceivablesApi.md#GetAppliedInvoicePayments) | **Get** /hotels/{hotelId}/transactions/{transactionId}/accounts/{accountId}/invoiceAppliedPayments | Get account receivable invoice&#39;s payment history
[**GetInvoiceAppliedPayments**](AccountsReceivablesApi.md#GetInvoiceAppliedPayments) | **Get** /hotels/{hotelId}/invoices/{invoiceId}/transactions/{transactionId}/accounts/{accountId}/invoiceAppliedPayments | Get account receivable invoice&#39;s payment history
[**GetInvoicePaymentDetail**](AccountsReceivablesApi.md#GetInvoicePaymentDetail) | **Get** /hotels/{hotelId}/accounts/{accountId}/transactions/{transactionId}/invoicePaymentDetails | Get account receivable invoice and payment details
[**GetInvoicePostings**](AccountsReceivablesApi.md#GetInvoicePostings) | **Get** /invoicePostings | Get account receivable invoice postings
[**GetInvoicesOnHold**](AccountsReceivablesApi.md#GetInvoicesOnHold) | **Get** /hotels/{hotelId}/accounts/invoicesOnHold | Get list of hold invoices for account receivable
[**GetInvoicesPayments**](AccountsReceivablesApi.md#GetInvoicesPayments) | **Get** /invoicePayments/accounts/{accountId} | Get payment detail for account&#39;s invoices
[**GetProfileAging**](AccountsReceivablesApi.md#GetProfileAging) | **Get** /profiles/{profileId}/aging | Get given profile&#39;s aging detail
[**GetProfileYearView**](AccountsReceivablesApi.md#GetProfileYearView) | **Get** /profiles/{profileId}/yearViews | Get given profile&#39;s yearly account receivable detail
[**GetReminders**](AccountsReceivablesApi.md#GetReminders) | **Get** /accountReminders | Get account receivable&#39;s reminder statements
[**GetRemindersHistory**](AccountsReceivablesApi.md#GetRemindersHistory) | **Get** /accounts/{accountId}/remindersHistory | Get history of reminder letters for a given account receivable
[**GetStatements**](AccountsReceivablesApi.md#GetStatements) | **Get** /accounts/{accountId}/statements | Get given profile&#39;s account receivable statements
[**GetStatementsHistory**](AccountsReceivablesApi.md#GetStatementsHistory) | **Get** /hotels/{hotelId}/profiles/{profileId}/accounts/{accountId}/statementsHistory | Get given profile&#39;s account receivable statements history
[**PostARCharges**](AccountsReceivablesApi.md#PostARCharges) | **Post** /hotels/{hotelId}/profiles/{profileId}/accounts/{accountId}/charges | Add charges to account receivable
[**PostAROldBalances**](AccountsReceivablesApi.md#PostAROldBalances) | **Post** /oldBalances | Add old balances from external accounting systems
[**PostARPayments**](AccountsReceivablesApi.md#PostARPayments) | **Post** /hotels/{hotelId}/profiles/{profileId}/accounts/{accountId}/payments | Add payment to an account receivable account for a list of reservations
[**PostAccount**](AccountsReceivablesApi.md#PostAccount) | **Post** /hotels/{hotelId}/accounts | Create an account receivable account
[**PostAccountComment**](AccountsReceivablesApi.md#PostAccountComment) | **Post** /hotels/{hotelId}/accounts/{accountId}/comments | Create Account Comment
[**PostAccountFixedCharge**](AccountsReceivablesApi.md#PostAccountFixedCharge) | **Post** /hotels/{hotelId}/accounts/{accountId}/fixedCharges | Create fixed charges 
[**PostAccountTrace**](AccountsReceivablesApi.md#PostAccountTrace) | **Post** /hotels/{hotelId}/accounts/{accountId}/traces | Add a trace to an account receivable account
[**PostBatchCharges**](AccountsReceivablesApi.md#PostBatchCharges) | **Post** /hotels/{hotelId}/batchCharges | Create process to charge on multiple account receivables
[**PostChargesToAR**](AccountsReceivablesApi.md#PostChargesToAR) | **Post** /hotels/{hotelId}/accounts/{accountId}/charges | Add charges to account receivable
[**PostCreditToInvoices**](AccountsReceivablesApi.md#PostCreditToInvoices) | **Post** /hotels/{hotelId}/accounts/{accountId}/applyCreditToInvoices | Add credits to AR invoices
[**PostInvoice**](AccountsReceivablesApi.md#PostInvoice) | **Post** /hotels/{hotelId}/accounts/{accountId}/invoices | Create account receivable invoices
[**PostReminders**](AccountsReceivablesApi.md#PostReminders) | **Post** /accountReminders | Generate reminders
[**PostReversePayment**](AccountsReceivablesApi.md#PostReversePayment) | **Post** /hotels/{hotelId}/profiles/{profileId}/accounts/{accountId}/transactions/{transactionId}/reversePayment | Reverse Payment
[**PostStatements**](AccountsReceivablesApi.md#PostStatements) | **Post** /hotels/{hotelId}/accounts/{accountId}/statements | Generate a statement for a given account receivable
[**PutARInvoicesAccount**](AccountsReceivablesApi.md#PutARInvoicesAccount) | **Put** /invoicesAccount | Change Account receivable invoice for an AR account
[**PutAccount**](AccountsReceivablesApi.md#PutAccount) | **Put** /hotels/{hotelId}/accounts/{accountId} | Update a account receivable account
[**PutAccountComment**](AccountsReceivablesApi.md#PutAccountComment) | **Put** /hotels/{hotelId}/accounts/{accountId}/comments | Change Account Comment
[**PutAccountFixedCharge**](AccountsReceivablesApi.md#PutAccountFixedCharge) | **Put** /hotels/{hotelId}/accounts/{accountId}/fixedCharges/{fixedChargeId} | Update fixed charge detail 
[**PutAccountTrace**](AccountsReceivablesApi.md#PutAccountTrace) | **Put** /hotels/{hotelId}/accounts/{accountId}/traces | This API facilitates modification of account traces.
[**PutInvoice**](AccountsReceivablesApi.md#PutInvoice) | **Put** /hotels/{hotelId}/invoices/{invoiceId} | Update invoice detail.
[**PutInvoiceDetails**](AccountsReceivablesApi.md#PutInvoiceDetails) | **Put** /hotels/{hotelId}/invoices | Update invoice detail.
[**PutInvoices**](AccountsReceivablesApi.md#PutInvoices) | **Put** /invoices/close | Close account receivable invoices
[**RemovePaymentsFromInvoice**](AccountsReceivablesApi.md#RemovePaymentsFromInvoice) | **Delete** /hotels/{hotelId}/transactions/{transactionId}/paymentsFromInvoice | Delete payments from invoice
[**ReopenInvoices**](AccountsReceivablesApi.md#ReopenInvoices) | **Put** /reopenInvoices | Reopen account receivable closed invoice
[**TransferARCreditCardPayments**](AccountsReceivablesApi.md#TransferARCreditCardPayments) | **Post** /hotels/{hotelId}/accounts/{accountId}/arCreditCard/transfer | Move credit card payment to account receivable
[**TransferDirectBillsToAr**](AccountsReceivablesApi.md#TransferDirectBillsToAr) | **Put** /hotels/{hotelId}/directBillsToAR | Move direct bills to account receivable
[**TransferInvoicesAndPayments**](AccountsReceivablesApi.md#TransferInvoicesAndPayments) | **Put** /transferInvoicesAndPayments | Move an invoice or a payment to another AR account
[**TransferPostings**](AccountsReceivablesApi.md#TransferPostings) | **Put** /transferPostings | Transfer postings
[**UncompressARInvoices**](AccountsReceivablesApi.md#UncompressARInvoices) | **Post** /hotels/{hotelId}/accounts/{accountId}/uncompressInvoices | Reverse the compressing invoice process
[**UnlinkInvoiceFromStatement**](AccountsReceivablesApi.md#UnlinkInvoiceFromStatement) | **Put** /hotels/{hotelId}/unlink/invoiceFromStatement | Unlink invoices from a statement



## CompressARInvoices

> CompressedARInvoices CompressARInvoices(ctx, accountId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ArCompressInvoices(arCompressInvoices).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Combines Account receivable invoices



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/ars"
)

func main() {
    accountId := "accountId_example" // string | Unique ID of the account
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    arCompressInvoices := *openapiclient.NewCompressARInvoicesRequest() // CompressARInvoicesRequest | Request to compress two or more invoices for an Account
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.AccountsReceivablesApi.CompressARInvoices(context.Background(), accountId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ArCompressInvoices(arCompressInvoices).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AccountsReceivablesApi.CompressARInvoices``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CompressARInvoices`: CompressedARInvoices
    fmt.Fprintf(os.Stdout, "Response from `AccountsReceivablesApi.CompressARInvoices`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**accountId** | **string** | Unique ID of the account | 
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiCompressARInvoicesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **arCompressInvoices** | [**CompressARInvoicesRequest**](CompressARInvoicesRequest.md) | Request to compress two or more invoices for an Account | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**CompressedARInvoices**](CompressedARInvoices.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## CopyARAccount

> Status CopyARAccount(ctx, accountId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ArAccountCopy(arAccountCopy).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Copy account receivable account 



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/ars"
)

func main() {
    accountId := "accountId_example" // string | Unique ID of the account
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    arAccountCopy := *openapiclient.NewCopyARAccountRequest() // CopyARAccountRequest | Request to copy AR Account
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.AccountsReceivablesApi.CopyARAccount(context.Background(), accountId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ArAccountCopy(arAccountCopy).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AccountsReceivablesApi.CopyARAccount``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CopyARAccount`: Status
    fmt.Fprintf(os.Stdout, "Response from `AccountsReceivablesApi.CopyARAccount`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**accountId** | **string** | Unique ID of the account | 
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiCopyARAccountRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **arAccountCopy** | [**CopyARAccountRequest**](CopyARAccountRequest.md) | Request to copy AR Account | 
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


## DeleteAccount

> Status DeleteAccount(ctx, accountId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete Account 



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/ars"
)

func main() {
    accountId := "accountId_example" // string | Unique ID of the account
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.AccountsReceivablesApi.DeleteAccount(context.Background(), accountId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AccountsReceivablesApi.DeleteAccount``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteAccount`: Status
    fmt.Fprintf(os.Stdout, "Response from `AccountsReceivablesApi.DeleteAccount`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**accountId** | **string** | Unique ID of the account | 
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteAccountRequest struct via the builder pattern


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


## DeleteAccountComment

> Status DeleteAccountComment(ctx, accountId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Id(id).Value(value).Hotel(hotel).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete Account Comment



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/ars"
)

func main() {
    accountId := "accountId_example" // string | Unique ID of the account
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    id := "id_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    value := "value_example" // string | Property Value (optional)
    hotel := "hotel_example" // string | If specified comment belongs to the Hotel, otherwise it is a global comment. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.AccountsReceivablesApi.DeleteAccountComment(context.Background(), accountId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Id(id).Value(value).Hotel(hotel).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AccountsReceivablesApi.DeleteAccountComment``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteAccountComment`: Status
    fmt.Fprintf(os.Stdout, "Response from `AccountsReceivablesApi.DeleteAccountComment`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**accountId** | **string** | Unique ID of the account | 
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteAccountCommentRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **id** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **value** | **string** | Property Value | 
 **hotel** | **string** | If specified comment belongs to the Hotel, otherwise it is a global comment. | 
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


## DeleteAccountFixedCharge

> Status DeleteAccountFixedCharge(ctx, fixedChargeId, accountId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete fixed charges 



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/ars"
)

func main() {
    fixedChargeId := "fixedChargeId_example" // string | ID of the fixed charge
    accountId := "accountId_example" // string | Unique ID of the account
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.AccountsReceivablesApi.DeleteAccountFixedCharge(context.Background(), fixedChargeId, accountId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AccountsReceivablesApi.DeleteAccountFixedCharge``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteAccountFixedCharge`: Status
    fmt.Fprintf(os.Stdout, "Response from `AccountsReceivablesApi.DeleteAccountFixedCharge`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**fixedChargeId** | **string** | ID of the fixed charge | 
**accountId** | **string** | Unique ID of the account | 
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteAccountFixedChargeRequest struct via the builder pattern


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


## DeleteAccountTrace

> Status DeleteAccountTrace(ctx, accountId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TraceID(traceID).TraceOn(traceOn).TraceText(traceText).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

This API facilitates deletion of account traces.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/ars"
)

func main() {
    accountId := "accountId_example" // string | Unique ID of the account
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    traceID := "traceID_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    traceOn := "traceOn_example" // string | Date of the trace. (optional)
    traceText := "traceText_example" // string | The information this trace contains. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.AccountsReceivablesApi.DeleteAccountTrace(context.Background(), accountId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TraceID(traceID).TraceOn(traceOn).TraceText(traceText).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AccountsReceivablesApi.DeleteAccountTrace``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteAccountTrace`: Status
    fmt.Fprintf(os.Stdout, "Response from `AccountsReceivablesApi.DeleteAccountTrace`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**accountId** | **string** | Unique ID of the account | 
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteAccountTraceRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **traceID** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **traceOn** | **string** | Date of the trace. | 
 **traceText** | **string** | The information this trace contains. | 
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


## DeletePaymentsFromInvoice

> Status DeletePaymentsFromInvoice(ctx, transactionId, invoiceId, hotelId).TrxNo(trxNo).AccountId(accountId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CashierID(cashierID).InvoiceNo(invoiceNo).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete payments from invoice



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/ars"
)

func main() {
    transactionId := "transactionId_example" // string | Unique ID of the transaction
    invoiceId := "invoiceId_example" // string | Unique ID of the invoice
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    trxNo := []float32{float32(123)} // []float32 | Unique Transaction Identifier of the Payment.
    accountId := "accountId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    cashierID := float32(8.14) // float32 | The Cashier ID of the Cashier who is currently processing the transaction(s). (optional)
    invoiceNo := float32(8.14) // float32 | Invoice No after the folio is generated. Same invoice number may be referred in multiple folios (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.AccountsReceivablesApi.DeletePaymentsFromInvoice(context.Background(), transactionId, invoiceId, hotelId).TrxNo(trxNo).AccountId(accountId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CashierID(cashierID).InvoiceNo(invoiceNo).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AccountsReceivablesApi.DeletePaymentsFromInvoice``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeletePaymentsFromInvoice`: Status
    fmt.Fprintf(os.Stdout, "Response from `AccountsReceivablesApi.DeletePaymentsFromInvoice`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**transactionId** | **string** | Unique ID of the transaction | 
**invoiceId** | **string** | Unique ID of the invoice | 
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeletePaymentsFromInvoiceRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **trxNo** | **[]float32** | Unique Transaction Identifier of the Payment. | 
 **accountId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **cashierID** | **float32** | The Cashier ID of the Cashier who is currently processing the transaction(s). | 
 **invoiceNo** | **float32** | Invoice No after the folio is generated. Same invoice number may be referred in multiple folios | 
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


## GetARAgingCycles

> ArAgingCycles GetARAgingCycles(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get given AR account's aging detail



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/ars"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.AccountsReceivablesApi.GetARAgingCycles(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AccountsReceivablesApi.GetARAgingCycles``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetARAgingCycles`: ArAgingCycles
    fmt.Fprintf(os.Stdout, "Response from `AccountsReceivablesApi.GetARAgingCycles`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetARAgingCyclesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ArAgingCycles**](ArAgingCycles.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetARCreditCardPayments

> ArCreditCardPayments GetARCreditCardPayments(ctx, transactionId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).EndDate(endDate).StartDate(startDate).Limit(limit).Offset(offset).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get account receivable folios which are paid using credit cards



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/ars"
)

func main() {
    transactionId := "transactionId_example" // string | Unique ID of the transaction
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    endDate := time.Now() // string | The ending value of the date range. (optional)
    startDate := time.Now() // string | The starting value of the date range. (optional)
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    offset := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional) (default to 0)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.AccountsReceivablesApi.GetARCreditCardPayments(context.Background(), transactionId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).EndDate(endDate).StartDate(startDate).Limit(limit).Offset(offset).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AccountsReceivablesApi.GetARCreditCardPayments``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetARCreditCardPayments`: ArCreditCardPayments
    fmt.Fprintf(os.Stdout, "Response from `AccountsReceivablesApi.GetARCreditCardPayments`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**transactionId** | **string** | Unique ID of the transaction | 
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetARCreditCardPaymentsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **endDate** | **string** | The ending value of the date range. | 
 **startDate** | **string** | The starting value of the date range. | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **offset** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [default to 0]
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ArCreditCardPayments**](ArCreditCardPayments.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetARFolioPrinters

> ArFolioPrinters GetARFolioPrinters(ctx, accountId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Balance(balance).OverrideCreditHoldCheck(overrideCreditHoldCheck).CashierId(cashierId).ProfileId(profileId).AccountNo(accountNo).AccountName(accountName).GuestProfileId(guestProfileId).GuestProfileIdContext(guestProfileIdContext).GuestProfileType(guestProfileType).FolioWindowNo(folioWindowNo).ChargeCashierId(chargeCashierId).ChargeTransactionCode(chargeTransactionCode).ArticleCode(articleCode).Amount(amount).CurrencyCode(currencyCode).PostingQuantity(postingQuantity).PostingReference(postingReference).PostingRemark(postingRemark).CheckNumber(checkNumber).ArrangementCode(arrangementCode).ApplyRoutingInstructions(applyRoutingInstructions).UsePackageAllowance(usePackageAllowance).AutoPosting(autoPosting).FinancialTransactionId(financialTransactionId).FinancialTransactionIdContext(financialTransactionIdContext).FinancialTransactionType(financialTransactionType).Reference(reference).Remark(remark).FolioType(folioType).GenerateFiscalFolio(generateFiscalFolio).QueueName(queueName).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get list of account receivable folio printers



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/ars"
)

func main() {
    accountId := "accountId_example" // string | Unique ID of the account
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    balance := float32(8.14) // float32 |  (optional)
    overrideCreditHoldCheck := true // bool |  (optional)
    cashierId := float32(8.14) // float32 | The Cashier ID of the Cashier who is currently processing the transaction(s). (optional)
    profileId := "profileId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    accountNo := "accountNo_example" // string | Account Number for the AR Account. (optional)
    accountName := "accountName_example" // string | Account Name for the AR Account. (optional)
    guestProfileId := "guestProfileId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    guestProfileIdContext := "guestProfileIdContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    guestProfileType := "guestProfileType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    folioWindowNo := []int32{int32(123)} // []int32 |  (optional)
    chargeCashierId := []float32{float32(123)} // []float32 | The Cashier ID of the Cashier who is currently processing the transaction(s). (optional)
    chargeTransactionCode := []string{"Inner_example"} // []string | Transaction Code to post. (optional)
    articleCode := []string{"Inner_example"} // []string | Article ID. (optional)
    amount := float32(8.14) // float32 | A monetary amount. (optional)
    currencyCode := "currencyCode_example" // string | Provides a currency code to reflect the currency in which an amount may be expressed. (optional)
    postingQuantity := []int32{int32(123)} // []int32 | Quantity to post to the folio. (optional)
    postingReference := []string{"Inner_example"} // []string | User-defined posting reference. (optional)
    postingRemark := []string{"Inner_example"} // []string | User-defined posting remark. (optional)
    checkNumber := []string{"Inner_example"} // []string | Indicates the Cheque number. (optional)
    arrangementCode := []string{"Inner_example"} // []string | Corrected arrangement code from the package associated to this transaction. (optional)
    applyRoutingInstructions := []bool{false} // []bool | Apply room routing when making this posting. (optional)
    usePackageAllowance := []bool{false} // []bool | Use the applicable package allowance when making this posting. (optional)
    autoPosting := []bool{false} // []bool | True indicates the Transaction Code is allowed to be posted automatically. (optional)
    financialTransactionId := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    financialTransactionIdContext := []string{"Inner_example"} // []string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    financialTransactionType := []string{"Inner_example"} // []string | A reference to the type of object defined by the UniqueID element. (optional)
    reference := "reference_example" // string | User-defined invoice reference. (optional)
    remark := "remark_example" // string | User-defined invoice remark. (optional)
    folioType := "folioType_example" // string | Folio Type to be assigned to generated folio. This is a country requirement. (optional)
    generateFiscalFolio := true // bool | Fiscal folio flag to call fiscal folio web service after folio generation. (optional)
    queueName := "queueName_example" // string | Folio Queue name. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.AccountsReceivablesApi.GetARFolioPrinters(context.Background(), accountId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Balance(balance).OverrideCreditHoldCheck(overrideCreditHoldCheck).CashierId(cashierId).ProfileId(profileId).AccountNo(accountNo).AccountName(accountName).GuestProfileId(guestProfileId).GuestProfileIdContext(guestProfileIdContext).GuestProfileType(guestProfileType).FolioWindowNo(folioWindowNo).ChargeCashierId(chargeCashierId).ChargeTransactionCode(chargeTransactionCode).ArticleCode(articleCode).Amount(amount).CurrencyCode(currencyCode).PostingQuantity(postingQuantity).PostingReference(postingReference).PostingRemark(postingRemark).CheckNumber(checkNumber).ArrangementCode(arrangementCode).ApplyRoutingInstructions(applyRoutingInstructions).UsePackageAllowance(usePackageAllowance).AutoPosting(autoPosting).FinancialTransactionId(financialTransactionId).FinancialTransactionIdContext(financialTransactionIdContext).FinancialTransactionType(financialTransactionType).Reference(reference).Remark(remark).FolioType(folioType).GenerateFiscalFolio(generateFiscalFolio).QueueName(queueName).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AccountsReceivablesApi.GetARFolioPrinters``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetARFolioPrinters`: ArFolioPrinters
    fmt.Fprintf(os.Stdout, "Response from `AccountsReceivablesApi.GetARFolioPrinters`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**accountId** | **string** | Unique ID of the account | 
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetARFolioPrintersRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **balance** | **float32** |  | 
 **overrideCreditHoldCheck** | **bool** |  | 
 **cashierId** | **float32** | The Cashier ID of the Cashier who is currently processing the transaction(s). | 
 **profileId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **accountNo** | **string** | Account Number for the AR Account. | 
 **accountName** | **string** | Account Name for the AR Account. | 
 **guestProfileId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **guestProfileIdContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **guestProfileType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **folioWindowNo** | **[]int32** |  | 
 **chargeCashierId** | **[]float32** | The Cashier ID of the Cashier who is currently processing the transaction(s). | 
 **chargeTransactionCode** | **[]string** | Transaction Code to post. | 
 **articleCode** | **[]string** | Article ID. | 
 **amount** | **float32** | A monetary amount. | 
 **currencyCode** | **string** | Provides a currency code to reflect the currency in which an amount may be expressed. | 
 **postingQuantity** | **[]int32** | Quantity to post to the folio. | 
 **postingReference** | **[]string** | User-defined posting reference. | 
 **postingRemark** | **[]string** | User-defined posting remark. | 
 **checkNumber** | **[]string** | Indicates the Cheque number. | 
 **arrangementCode** | **[]string** | Corrected arrangement code from the package associated to this transaction. | 
 **applyRoutingInstructions** | **[]bool** | Apply room routing when making this posting. | 
 **usePackageAllowance** | **[]bool** | Use the applicable package allowance when making this posting. | 
 **autoPosting** | **[]bool** | True indicates the Transaction Code is allowed to be posted automatically. | 
 **financialTransactionId** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **financialTransactionIdContext** | **[]string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **financialTransactionType** | **[]string** | A reference to the type of object defined by the UniqueID element. | 
 **reference** | **string** | User-defined invoice reference. | 
 **remark** | **string** | User-defined invoice remark. | 
 **folioType** | **string** | Folio Type to be assigned to generated folio. This is a country requirement. | 
 **generateFiscalFolio** | **bool** | Fiscal folio flag to call fiscal folio web service after folio generation. | 
 **queueName** | **string** | Folio Queue name. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ArFolioPrinters**](ArFolioPrinters.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetARStatements

> Statements GetARStatements(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).ProfileId(profileId).ProfileIdContext(profileIdContext).ProfileType(profileType).AccountID(accountID).AccountNo(accountNo).AccountName(accountName).CanBeModified(canBeModified).CloseDate(closeDate).FiscalBillNo(fiscalBillNo).FolioDate(folioDate).FolioNo(folioNo).FolioStatus(folioStatus).FolioTypeName(folioTypeName).InternalFolioWindowID(internalFolioWindowID).InvoiceNo(invoiceNo).InvoiceType(invoiceType).PostingDate(postingDate).RevenueDate(revenueDate).StatementNo(statementNo).Status(status).TransferDate(transferDate).InvoiceTransactionCode(invoiceTransactionCode).TransactionDate(transactionDate).TransactionNo(transactionNo).InvoiceHotelIds(invoiceHotelIds).ReservationId(reservationId).ReservationIdContext(reservationIdContext).ReservationType(reservationType).GuestProfileId(guestProfileId).GuestProfileIdContext(guestProfileIdContext).GuestProfileType(guestProfileType).Age(age).GuestName(guestName).OriginalAmount(originalAmount).OriginalAmountCurrencyCode(originalAmountCurrencyCode).Amount(amount).CurrencyCode(currencyCode).PaymentsAmount(paymentsAmount).PaymentsCurrencyCode(paymentsCurrencyCode).BalanceAmount(balanceAmount).BalanceCurrencyCode(balanceCurrencyCode).Reference(reference).Remark(remark).Adjusted(adjusted).ParentInvoiceNo(parentInvoiceNo).Compressed(compressed).CompressedDate(compressedDate).TransferredOut(transferredOut).TransferredIn(transferredIn).MarketDescription(marketDescription).MarketHotelId(marketHotelId).MarketCode(marketCode).MarketGroup(marketGroup).RoomClassDescription(roomClassDescription).RoomClassHotelId(roomClassHotelId).RoomClassCode(roomClassCode).SourceDescription(sourceDescription).SourceHotelId(sourceHotelId).SourceCode(sourceCode).SourceGroup(sourceGroup).CashierId(cashierId).CashierName(cashierName).TransactionHotelId(transactionHotelId).PrintTrxReceipt(printTrxReceipt).AccountInvoiceTransactionCode(accountInvoiceTransactionCode).TransactionDescription(transactionDescription).TransactionGroup(transactionGroup).TransactionSubGroup(transactionSubGroup).UniversalProductCode(universalProductCode).RoutingInstructionsId(routingInstructionsId).ArticleCode(articleCode).ArticleHotelIds(articleHotelIds).Inactive(inactive).OrderSequence(orderSequence).ArticleDescription(articleDescription).TransactionCode(transactionCode).ArticleAmount(articleAmount).ArticleCurrencyCode(articleCurrencyCode).AvailableForPostIt(availableForPostIt).Color(color).ArticleUniversalProductCode(articleUniversalProductCode).AttachCreditCardToProfile(attachCreditCardToProfile).CardHolderName(cardHolderName).CardNumber(cardNumber).CardNumberLast4Digits(cardNumberLast4Digits).CardNumberMasked(cardNumberMasked).CardOrToken(cardOrToken).CardType(cardType).ExpirationDate(expirationDate).ExpirationDateExpired(expirationDateExpired).ExpirationDateMasked(expirationDateMasked).Processing(processing).Swiped(swiped).UserDefinedCardType(userDefinedCardType).InvoicePaymentCardId(invoicePaymentCardId).InvoicePaymentCardIdContext(invoicePaymentCardIdContext).InvoicePaymentCardIdType(invoicePaymentCardIdType).CurrentAuthorizedAmount(currentAuthorizedAmount).CurrentAuthorizedAmountCurrencyCode(currentAuthorizedAmountCurrencyCode).ApprovalAmount(approvalAmount).ApprovalAmountCurrencyCode(approvalAmountCurrencyCode).Type_(type_).AddresseeProfileId(addresseeProfileId).AddresseeProfileIdContext(addresseeProfileIdContext).AddresseeProfileType(addresseeProfileType).Name(name).City(city).Phone(phone).AllowPartialTransferYn(allowPartialTransferYn).Printed(printed).PrintedDate(printedDate).StoredFolioId(storedFolioId).StoredFolioIdContext(storedFolioIdContext).StoredFolioType(storedFolioType).StoredFolioName(storedFolioName).StoredDebitFolioId(storedDebitFolioId).StoredDebitFolioIdContext(storedDebitFolioIdContext).StoredDebitFolioType(storedDebitFolioType).StoredDebitFolioName(storedDebitFolioName).BalanceForwardDate(balanceForwardDate).InclFolios(inclFolios).InclPrinted(inclPrinted).InclZero(inclZero).FilterEndDate(filterEndDate).FilterStartDate(filterStartDate).StatementText(statementText).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get given profile's account receivable statements



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/ars"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    hotelId := []string{"Inner_example"} // []string | Property where the AR Account exists. This is required. (optional)
    profileId := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    profileIdContext := "profileIdContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    profileType := "profileType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    accountID := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    accountNo := []string{"Inner_example"} // []string | Account Number for the AR Account. (optional)
    accountName := []string{"Inner_example"} // []string | Account Name for the AR Account. (optional)
    canBeModified := []bool{false} // []bool | Flag to indicate if postings or adjustments can be made to the invoice. (optional)
    closeDate := []string{time.Now()} // []string | Close date of the invoice. (optional)
    fiscalBillNo := []string{"Inner_example"} // []string | The Fiscal Bill number of this posting (optional)
    folioDate := []string{time.Now()} // []string | Date of Folio Generation. (optional)
    folioNo := []float32{float32(123)} // []float32 | Folio Number. (optional)
    folioStatus := []string{"FolioStatus_example"} // []string | The Folio Status Example: DEPOSIT folio, VOID folio or the default OK folio status. (optional)
    folioTypeName := []string{"Inner_example"} // []string | The name of the Folio Type used for the Folio Number sequence. (optional)
    internalFolioWindowID := []string{"Inner_example"} // []string | Internal window ID which is unique to the reservation. This ID can only be used for reference. (optional)
    invoiceNo := []float32{float32(123)} // []float32 | Invoice No after the folio is generated. Same invoice number may be referred in multiple folios (optional)
    invoiceType := []string{"InvoiceType_example"} // []string |  (optional)
    postingDate := []string{time.Now()} // []string | Posting date of the invoice. (optional)
    revenueDate := []string{time.Now()} // []string | Revenue date ID of the invoice. (optional)
    statementNo := []int32{int32(123)} // []int32 | Statementno of the invoice. (optional)
    status := []string{"Inner_example"} // []string | Status of the invoice. (optional)
    transferDate := []string{time.Now()} // []string | Transfer date of the invoice. (optional)
    invoiceTransactionCode := []string{"Inner_example"} // []string | Transaction code of the invoice. (optional)
    transactionDate := []string{time.Now()} // []string | Transaction Date of the invoice. (optional)
    transactionNo := []float32{float32(123)} // []float32 | Unique Transaction Identifier of the Invoice. (optional)
    invoiceHotelIds := []string{"Inner_example"} // []string | Property where the AR Account exists. This is required. (optional)
    reservationId := "reservationId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    reservationIdContext := "reservationIdContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    reservationType := "reservationType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    guestProfileId := "guestProfileId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    guestProfileIdContext := "guestProfileIdContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    guestProfileType := "guestProfileType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    age := []int32{int32(123)} // []int32 | The Aging age of the invoice (optional)
    guestName := []string{"Inner_example"} // []string | Name of the Guest who consumed these transactions. (optional)
    originalAmount := float32(8.14) // float32 | A monetary amount. (optional)
    originalAmountCurrencyCode := "originalAmountCurrencyCode_example" // string | Provides a currency code to reflect the currency in which an amount may be expressed. (optional)
    amount := float32(8.14) // float32 | A monetary amount. (optional)
    currencyCode := "currencyCode_example" // string | Provides a currency code to reflect the currency in which an amount may be expressed. (optional)
    paymentsAmount := float32(8.14) // float32 | A monetary amount. (optional)
    paymentsCurrencyCode := "paymentsCurrencyCode_example" // string | Provides a currency code to reflect the currency in which an amount may be expressed. (optional)
    balanceAmount := float32(8.14) // float32 | A monetary amount. (optional)
    balanceCurrencyCode := "balanceCurrencyCode_example" // string | Provides a currency code to reflect the currency in which an amount may be expressed. (optional)
    reference := []string{"Inner_example"} // []string | User-defined posting reference. (optional)
    remark := []string{"Inner_example"} // []string | User-defined posting remark. (optional)
    adjusted := []bool{false} // []bool |  (optional)
    parentInvoiceNo := []float32{float32(123)} // []float32 |  (optional)
    compressed := []bool{false} // []bool |  (optional)
    compressedDate := []string{time.Now()} // []string |  (optional)
    transferredOut := []bool{false} // []bool |  (optional)
    transferredIn := []bool{false} // []bool |  (optional)
    marketDescription := "marketDescription_example" // string |  (optional)
    marketHotelId := "marketHotelId_example" // string | Property where the AR Account exists. This is required. (optional)
    marketCode := "marketCode_example" // string |  (optional)
    marketGroup := "marketGroup_example" // string |  (optional)
    roomClassDescription := "roomClassDescription_example" // string |  (optional)
    roomClassHotelId := "roomClassHotelId_example" // string | Property where the AR Account exists. This is required. (optional)
    roomClassCode := "roomClassCode_example" // string |  (optional)
    sourceDescription := "sourceDescription_example" // string |  (optional)
    sourceHotelId := "sourceHotelId_example" // string | Property where the AR Account exists. This is required. (optional)
    sourceCode := "sourceCode_example" // string |  (optional)
    sourceGroup := "sourceGroup_example" // string |  (optional)
    cashierId := float32(8.14) // float32 | Cashier Id of the Cashier. (optional)
    cashierName := "cashierName_example" // string | Cashier Name. (optional)
    transactionHotelId := "transactionHotelId_example" // string | Property where the AR Account exists. This is required. (optional)
    printTrxReceipt := true // bool | Print receipt flag that tells whether the transaction receipt is to be printed or not. This is based on the transaction code. (optional)
    accountInvoiceTransactionCode := "accountInvoiceTransactionCode_example" // string | Unique identifier for the Transaction code. (optional)
    transactionDescription := "transactionDescription_example" // string | Transaction codes info. (optional)
    transactionGroup := "transactionGroup_example" // string | Category of the transaction code. (optional)
    transactionSubGroup := "transactionSubGroup_example" // string | Sub category of the transaction code. (optional)
    universalProductCode := "universalProductCode_example" // string | Unique Universal product code of the transaction code. (optional)
    routingInstructionsId := float32(8.14) // float32 | This is the Routing Instruction Id attached with Reservation. It is only used for internal purpose. It should not be used by external vendor or consumer. (optional)
    articleCode := []string{"Inner_example"} // []string | Unique code of the article. (optional)
    articleHotelIds := []string{"Inner_example"} // []string | Property where the AR Account exists. This is required. (optional)
    inactive := []bool{false} // []bool | Indicates whether the article is inactive or not. (optional)
    orderSequence := []float32{float32(123)} // []float32 | Display Order sequence. (optional)
    articleDescription := []string{"Inner_example"} // []string | Description of the article. (optional)
    transactionCode := []string{"Inner_example"} // []string | Transaction code to which the article belongs. (optional)
    articleAmount := float32(8.14) // float32 | A monetary amount. (optional)
    articleCurrencyCode := "articleCurrencyCode_example" // string | Provides a currency code to reflect the currency in which an amount may be expressed. (optional)
    availableForPostIt := true // bool | Indicates whether the article is available for post it. (optional)
    color := "color_example" // string | Color configuration type. This color configuration provides a visual category of entities. (optional)
    articleUniversalProductCode := []string{"Inner_example"} // []string | Unique Universal product code of the article. (optional)
    attachCreditCardToProfile := true // bool | Attach the credit card to profile. (optional)
    cardHolderName := "cardHolderName_example" // string |  (optional)
    cardNumber := "cardNumber_example" // string |  (optional)
    cardNumberLast4Digits := "cardNumberLast4Digits_example" // string |  (optional)
    cardNumberMasked := "cardNumberMasked_example" // string |  (optional)
    cardOrToken := "cardOrToken_example" // string | Simple type for indicating if credit card number is tokenized. (optional)
    cardType := "cardType_example" // string | This is required for Credit Card Payment Methods. This indicates the type of Credit Card associated with this payment method. (optional)
    expirationDate := time.Now() // string | Expiration date of the credit card (optional)
    expirationDateExpired := true // bool |  (optional)
    expirationDateMasked := "expirationDateMasked_example" // string | Masked Expiration date of the credit card (optional)
    processing := "processing_example" // string |  (optional)
    swiped := true // bool |  (optional)
    userDefinedCardType := "userDefinedCardType_example" // string | Indicates the user defined credit card type if credit card type from a defined list is not provided (optional)
    invoicePaymentCardId := "invoicePaymentCardId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    invoicePaymentCardIdContext := "invoicePaymentCardIdContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    invoicePaymentCardIdType := "invoicePaymentCardIdType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    currentAuthorizedAmount := float32(8.14) // float32 | A monetary amount. (optional)
    currentAuthorizedAmountCurrencyCode := "currentAuthorizedAmountCurrencyCode_example" // string | Provides a currency code to reflect the currency in which an amount may be expressed. (optional)
    approvalAmount := float32(8.14) // float32 | A monetary amount. (optional)
    approvalAmountCurrencyCode := "approvalAmountCurrencyCode_example" // string | Provides a currency code to reflect the currency in which an amount may be expressed. (optional)
    type_ := "type__example" // string | Defines the type of Linked profiles for a block. (optional)
    addresseeProfileId := "addresseeProfileId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    addresseeProfileIdContext := "addresseeProfileIdContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    addresseeProfileType := "addresseeProfileType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    name := "name_example" // string | Name for the profile attached to the block. (optional)
    city := "city_example" // string | City for the profile attached to the block. (optional)
    phone := "phone_example" // string | Phone for the profile attached to the block. (optional)
    allowPartialTransferYn := []bool{false} // []bool | Flag to check Partail Transfer Allowed. (optional)
    printed := []bool{false} // []bool | Flag to check Invoice Statement is Printed. (optional)
    printedDate := []string{time.Now()} // []string | Invoice Statement Printed Date. (optional)
    storedFolioId := "storedFolioId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    storedFolioIdContext := "storedFolioIdContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    storedFolioType := "storedFolioType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    storedFolioName := []string{"Inner_example"} // []string | Name of the Stored Folio. (optional)
    storedDebitFolioId := "storedDebitFolioId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    storedDebitFolioIdContext := "storedDebitFolioIdContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    storedDebitFolioType := "storedDebitFolioType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    storedDebitFolioName := []string{"Inner_example"} // []string | Name of the Stored Debit Folio. (optional)
    balanceForwardDate := time.Now() // string | The date specified in this field determines the balance forward date and balance forward total that is printed on the statement. (A balance forward shows the net amount for all invoices and payments (debits and credits) prior to the balance forward date as a single total, rather than itemizing them individually on the statement.) (optional)
    inclFolios := true // bool | Flag to indicate if the associated Folios for the Invoices are to be included along with the the Statement. (optional) (default to false)
    inclPrinted := true // bool | Flag to indicate if Previousely Printed Invoices are to be included in the Statement. This is based on the Functionality for AR PRINTED INVOICES. (optional) (default to false)
    inclZero := true // bool | Flag to indicate if Zero Balances Invoices are to be included in the Statement. (optional) (default to false)
    filterEndDate := time.Now() // string | The ending value of the date range. (optional)
    filterStartDate := time.Now() // string | The starting value of the date range. (optional)
    statementText := "statementText_example" // string | Text which will be printed on the Invoice. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.AccountsReceivablesApi.GetARStatements(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).ProfileId(profileId).ProfileIdContext(profileIdContext).ProfileType(profileType).AccountID(accountID).AccountNo(accountNo).AccountName(accountName).CanBeModified(canBeModified).CloseDate(closeDate).FiscalBillNo(fiscalBillNo).FolioDate(folioDate).FolioNo(folioNo).FolioStatus(folioStatus).FolioTypeName(folioTypeName).InternalFolioWindowID(internalFolioWindowID).InvoiceNo(invoiceNo).InvoiceType(invoiceType).PostingDate(postingDate).RevenueDate(revenueDate).StatementNo(statementNo).Status(status).TransferDate(transferDate).InvoiceTransactionCode(invoiceTransactionCode).TransactionDate(transactionDate).TransactionNo(transactionNo).InvoiceHotelIds(invoiceHotelIds).ReservationId(reservationId).ReservationIdContext(reservationIdContext).ReservationType(reservationType).GuestProfileId(guestProfileId).GuestProfileIdContext(guestProfileIdContext).GuestProfileType(guestProfileType).Age(age).GuestName(guestName).OriginalAmount(originalAmount).OriginalAmountCurrencyCode(originalAmountCurrencyCode).Amount(amount).CurrencyCode(currencyCode).PaymentsAmount(paymentsAmount).PaymentsCurrencyCode(paymentsCurrencyCode).BalanceAmount(balanceAmount).BalanceCurrencyCode(balanceCurrencyCode).Reference(reference).Remark(remark).Adjusted(adjusted).ParentInvoiceNo(parentInvoiceNo).Compressed(compressed).CompressedDate(compressedDate).TransferredOut(transferredOut).TransferredIn(transferredIn).MarketDescription(marketDescription).MarketHotelId(marketHotelId).MarketCode(marketCode).MarketGroup(marketGroup).RoomClassDescription(roomClassDescription).RoomClassHotelId(roomClassHotelId).RoomClassCode(roomClassCode).SourceDescription(sourceDescription).SourceHotelId(sourceHotelId).SourceCode(sourceCode).SourceGroup(sourceGroup).CashierId(cashierId).CashierName(cashierName).TransactionHotelId(transactionHotelId).PrintTrxReceipt(printTrxReceipt).AccountInvoiceTransactionCode(accountInvoiceTransactionCode).TransactionDescription(transactionDescription).TransactionGroup(transactionGroup).TransactionSubGroup(transactionSubGroup).UniversalProductCode(universalProductCode).RoutingInstructionsId(routingInstructionsId).ArticleCode(articleCode).ArticleHotelIds(articleHotelIds).Inactive(inactive).OrderSequence(orderSequence).ArticleDescription(articleDescription).TransactionCode(transactionCode).ArticleAmount(articleAmount).ArticleCurrencyCode(articleCurrencyCode).AvailableForPostIt(availableForPostIt).Color(color).ArticleUniversalProductCode(articleUniversalProductCode).AttachCreditCardToProfile(attachCreditCardToProfile).CardHolderName(cardHolderName).CardNumber(cardNumber).CardNumberLast4Digits(cardNumberLast4Digits).CardNumberMasked(cardNumberMasked).CardOrToken(cardOrToken).CardType(cardType).ExpirationDate(expirationDate).ExpirationDateExpired(expirationDateExpired).ExpirationDateMasked(expirationDateMasked).Processing(processing).Swiped(swiped).UserDefinedCardType(userDefinedCardType).InvoicePaymentCardId(invoicePaymentCardId).InvoicePaymentCardIdContext(invoicePaymentCardIdContext).InvoicePaymentCardIdType(invoicePaymentCardIdType).CurrentAuthorizedAmount(currentAuthorizedAmount).CurrentAuthorizedAmountCurrencyCode(currentAuthorizedAmountCurrencyCode).ApprovalAmount(approvalAmount).ApprovalAmountCurrencyCode(approvalAmountCurrencyCode).Type_(type_).AddresseeProfileId(addresseeProfileId).AddresseeProfileIdContext(addresseeProfileIdContext).AddresseeProfileType(addresseeProfileType).Name(name).City(city).Phone(phone).AllowPartialTransferYn(allowPartialTransferYn).Printed(printed).PrintedDate(printedDate).StoredFolioId(storedFolioId).StoredFolioIdContext(storedFolioIdContext).StoredFolioType(storedFolioType).StoredFolioName(storedFolioName).StoredDebitFolioId(storedDebitFolioId).StoredDebitFolioIdContext(storedDebitFolioIdContext).StoredDebitFolioType(storedDebitFolioType).StoredDebitFolioName(storedDebitFolioName).BalanceForwardDate(balanceForwardDate).InclFolios(inclFolios).InclPrinted(inclPrinted).InclZero(inclZero).FilterEndDate(filterEndDate).FilterStartDate(filterStartDate).StatementText(statementText).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AccountsReceivablesApi.GetARStatements``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetARStatements`: Statements
    fmt.Fprintf(os.Stdout, "Response from `AccountsReceivablesApi.GetARStatements`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetARStatementsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **hotelId** | **[]string** | Property where the AR Account exists. This is required. | 
 **profileId** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **profileIdContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **profileType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **accountID** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **accountNo** | **[]string** | Account Number for the AR Account. | 
 **accountName** | **[]string** | Account Name for the AR Account. | 
 **canBeModified** | **[]bool** | Flag to indicate if postings or adjustments can be made to the invoice. | 
 **closeDate** | **[]string** | Close date of the invoice. | 
 **fiscalBillNo** | **[]string** | The Fiscal Bill number of this posting | 
 **folioDate** | **[]string** | Date of Folio Generation. | 
 **folioNo** | **[]float32** | Folio Number. | 
 **folioStatus** | **[]string** | The Folio Status Example: DEPOSIT folio, VOID folio or the default OK folio status. | 
 **folioTypeName** | **[]string** | The name of the Folio Type used for the Folio Number sequence. | 
 **internalFolioWindowID** | **[]string** | Internal window ID which is unique to the reservation. This ID can only be used for reference. | 
 **invoiceNo** | **[]float32** | Invoice No after the folio is generated. Same invoice number may be referred in multiple folios | 
 **invoiceType** | **[]string** |  | 
 **postingDate** | **[]string** | Posting date of the invoice. | 
 **revenueDate** | **[]string** | Revenue date ID of the invoice. | 
 **statementNo** | **[]int32** | Statementno of the invoice. | 
 **status** | **[]string** | Status of the invoice. | 
 **transferDate** | **[]string** | Transfer date of the invoice. | 
 **invoiceTransactionCode** | **[]string** | Transaction code of the invoice. | 
 **transactionDate** | **[]string** | Transaction Date of the invoice. | 
 **transactionNo** | **[]float32** | Unique Transaction Identifier of the Invoice. | 
 **invoiceHotelIds** | **[]string** | Property where the AR Account exists. This is required. | 
 **reservationId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **reservationIdContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **reservationType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **guestProfileId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **guestProfileIdContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **guestProfileType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **age** | **[]int32** | The Aging age of the invoice | 
 **guestName** | **[]string** | Name of the Guest who consumed these transactions. | 
 **originalAmount** | **float32** | A monetary amount. | 
 **originalAmountCurrencyCode** | **string** | Provides a currency code to reflect the currency in which an amount may be expressed. | 
 **amount** | **float32** | A monetary amount. | 
 **currencyCode** | **string** | Provides a currency code to reflect the currency in which an amount may be expressed. | 
 **paymentsAmount** | **float32** | A monetary amount. | 
 **paymentsCurrencyCode** | **string** | Provides a currency code to reflect the currency in which an amount may be expressed. | 
 **balanceAmount** | **float32** | A monetary amount. | 
 **balanceCurrencyCode** | **string** | Provides a currency code to reflect the currency in which an amount may be expressed. | 
 **reference** | **[]string** | User-defined posting reference. | 
 **remark** | **[]string** | User-defined posting remark. | 
 **adjusted** | **[]bool** |  | 
 **parentInvoiceNo** | **[]float32** |  | 
 **compressed** | **[]bool** |  | 
 **compressedDate** | **[]string** |  | 
 **transferredOut** | **[]bool** |  | 
 **transferredIn** | **[]bool** |  | 
 **marketDescription** | **string** |  | 
 **marketHotelId** | **string** | Property where the AR Account exists. This is required. | 
 **marketCode** | **string** |  | 
 **marketGroup** | **string** |  | 
 **roomClassDescription** | **string** |  | 
 **roomClassHotelId** | **string** | Property where the AR Account exists. This is required. | 
 **roomClassCode** | **string** |  | 
 **sourceDescription** | **string** |  | 
 **sourceHotelId** | **string** | Property where the AR Account exists. This is required. | 
 **sourceCode** | **string** |  | 
 **sourceGroup** | **string** |  | 
 **cashierId** | **float32** | Cashier Id of the Cashier. | 
 **cashierName** | **string** | Cashier Name. | 
 **transactionHotelId** | **string** | Property where the AR Account exists. This is required. | 
 **printTrxReceipt** | **bool** | Print receipt flag that tells whether the transaction receipt is to be printed or not. This is based on the transaction code. | 
 **accountInvoiceTransactionCode** | **string** | Unique identifier for the Transaction code. | 
 **transactionDescription** | **string** | Transaction codes info. | 
 **transactionGroup** | **string** | Category of the transaction code. | 
 **transactionSubGroup** | **string** | Sub category of the transaction code. | 
 **universalProductCode** | **string** | Unique Universal product code of the transaction code. | 
 **routingInstructionsId** | **float32** | This is the Routing Instruction Id attached with Reservation. It is only used for internal purpose. It should not be used by external vendor or consumer. | 
 **articleCode** | **[]string** | Unique code of the article. | 
 **articleHotelIds** | **[]string** | Property where the AR Account exists. This is required. | 
 **inactive** | **[]bool** | Indicates whether the article is inactive or not. | 
 **orderSequence** | **[]float32** | Display Order sequence. | 
 **articleDescription** | **[]string** | Description of the article. | 
 **transactionCode** | **[]string** | Transaction code to which the article belongs. | 
 **articleAmount** | **float32** | A monetary amount. | 
 **articleCurrencyCode** | **string** | Provides a currency code to reflect the currency in which an amount may be expressed. | 
 **availableForPostIt** | **bool** | Indicates whether the article is available for post it. | 
 **color** | **string** | Color configuration type. This color configuration provides a visual category of entities. | 
 **articleUniversalProductCode** | **[]string** | Unique Universal product code of the article. | 
 **attachCreditCardToProfile** | **bool** | Attach the credit card to profile. | 
 **cardHolderName** | **string** |  | 
 **cardNumber** | **string** |  | 
 **cardNumberLast4Digits** | **string** |  | 
 **cardNumberMasked** | **string** |  | 
 **cardOrToken** | **string** | Simple type for indicating if credit card number is tokenized. | 
 **cardType** | **string** | This is required for Credit Card Payment Methods. This indicates the type of Credit Card associated with this payment method. | 
 **expirationDate** | **string** | Expiration date of the credit card | 
 **expirationDateExpired** | **bool** |  | 
 **expirationDateMasked** | **string** | Masked Expiration date of the credit card | 
 **processing** | **string** |  | 
 **swiped** | **bool** |  | 
 **userDefinedCardType** | **string** | Indicates the user defined credit card type if credit card type from a defined list is not provided | 
 **invoicePaymentCardId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **invoicePaymentCardIdContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **invoicePaymentCardIdType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **currentAuthorizedAmount** | **float32** | A monetary amount. | 
 **currentAuthorizedAmountCurrencyCode** | **string** | Provides a currency code to reflect the currency in which an amount may be expressed. | 
 **approvalAmount** | **float32** | A monetary amount. | 
 **approvalAmountCurrencyCode** | **string** | Provides a currency code to reflect the currency in which an amount may be expressed. | 
 **type_** | **string** | Defines the type of Linked profiles for a block. | 
 **addresseeProfileId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **addresseeProfileIdContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **addresseeProfileType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **name** | **string** | Name for the profile attached to the block. | 
 **city** | **string** | City for the profile attached to the block. | 
 **phone** | **string** | Phone for the profile attached to the block. | 
 **allowPartialTransferYn** | **[]bool** | Flag to check Partail Transfer Allowed. | 
 **printed** | **[]bool** | Flag to check Invoice Statement is Printed. | 
 **printedDate** | **[]string** | Invoice Statement Printed Date. | 
 **storedFolioId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **storedFolioIdContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **storedFolioType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **storedFolioName** | **[]string** | Name of the Stored Folio. | 
 **storedDebitFolioId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **storedDebitFolioIdContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **storedDebitFolioType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **storedDebitFolioName** | **[]string** | Name of the Stored Debit Folio. | 
 **balanceForwardDate** | **string** | The date specified in this field determines the balance forward date and balance forward total that is printed on the statement. (A balance forward shows the net amount for all invoices and payments (debits and credits) prior to the balance forward date as a single total, rather than itemizing them individually on the statement.) | 
 **inclFolios** | **bool** | Flag to indicate if the associated Folios for the Invoices are to be included along with the the Statement. | [default to false]
 **inclPrinted** | **bool** | Flag to indicate if Previousely Printed Invoices are to be included in the Statement. This is based on the Functionality for AR PRINTED INVOICES. | [default to false]
 **inclZero** | **bool** | Flag to indicate if Zero Balances Invoices are to be included in the Statement. | [default to false]
 **filterEndDate** | **string** | The ending value of the date range. | 
 **filterStartDate** | **string** | The starting value of the date range. | 
 **statementText** | **string** | Text which will be printed on the Invoice. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Statements**](Statements.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetARTransactions

> ArTransactions GetARTransactions(ctx).HotelIds(hotelIds).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Accounts(accounts).EndDate(endDate).StartDate(startDate).FromAmount(fromAmount).FromCurrencyCode(fromCurrencyCode).ToAmount(toAmount).ToCurrencyCode(toCurrencyCode).GuestName(guestName).Invoices(invoices).Folios(folios).FiscalBillNo(fiscalBillNo).AccountName(accountName).AddresseName(addresseName).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get AR transactions.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/ars"
)

func main() {
    hotelIds := []string{"Inner_example"} // []string | Property where the Accounts exist.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    accounts := "accounts_example" // string | Account number of this transaction. (optional)
    endDate := time.Now() // string | The ending value of the date range. (optional)
    startDate := time.Now() // string | The starting value of the date range. (optional)
    fromAmount := float32(8.14) // float32 | A monetary amount. (optional)
    fromCurrencyCode := "fromCurrencyCode_example" // string | Provides a currency code to reflect the currency in which an amount may be expressed. (optional)
    toAmount := float32(8.14) // float32 | A monetary amount. (optional)
    toCurrencyCode := "toCurrencyCode_example" // string | Provides a currency code to reflect the currency in which an amount may be expressed. (optional)
    guestName := "guestName_example" // string | Display Name for the guest. (optional)
    invoices := []float32{float32(123)} // []float32 | invoice Number . (optional)
    folios := []string{"Inner_example"} // []string | folio Number . (optional)
    fiscalBillNo := "fiscalBillNo_example" // string | Fiscal bill number of this transaction. (optional)
    accountName := "accountName_example" // string | Account number of this transaction. (optional)
    addresseName := "addresseName_example" // string | Addressee Name filter. Works with the Addressee Functionality. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.AccountsReceivablesApi.GetARTransactions(context.Background()).HotelIds(hotelIds).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Accounts(accounts).EndDate(endDate).StartDate(startDate).FromAmount(fromAmount).FromCurrencyCode(fromCurrencyCode).ToAmount(toAmount).ToCurrencyCode(toCurrencyCode).GuestName(guestName).Invoices(invoices).Folios(folios).FiscalBillNo(fiscalBillNo).AccountName(accountName).AddresseName(addresseName).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AccountsReceivablesApi.GetARTransactions``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetARTransactions`: ArTransactions
    fmt.Fprintf(os.Stdout, "Response from `AccountsReceivablesApi.GetARTransactions`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetARTransactionsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hotelIds** | **[]string** | Property where the Accounts exist. | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **accounts** | **string** | Account number of this transaction. | 
 **endDate** | **string** | The ending value of the date range. | 
 **startDate** | **string** | The starting value of the date range. | 
 **fromAmount** | **float32** | A monetary amount. | 
 **fromCurrencyCode** | **string** | Provides a currency code to reflect the currency in which an amount may be expressed. | 
 **toAmount** | **float32** | A monetary amount. | 
 **toCurrencyCode** | **string** | Provides a currency code to reflect the currency in which an amount may be expressed. | 
 **guestName** | **string** | Display Name for the guest. | 
 **invoices** | **[]float32** | invoice Number . | 
 **folios** | **[]string** | folio Number . | 
 **fiscalBillNo** | **string** | Fiscal bill number of this transaction. | 
 **accountName** | **string** | Account number of this transaction. | 
 **addresseName** | **string** | Addressee Name filter. Works with the Addressee Functionality. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ArTransactions**](ArTransactions.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetAccount

> Account GetAccount(ctx, accountId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AccountNo(accountNo).ProfileId(profileId).ProfileIdContext(profileIdContext).ProfileType(profileType).FetchInstructions(fetchInstructions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get account



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/ars"
)

func main() {
    accountId := "accountId_example" // string | Unique ID of the account
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    accountNo := "accountNo_example" // string | Account Number for the Account. (optional)
    profileId := "profileId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    profileIdContext := "profileIdContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    profileType := "profileType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    fetchInstructions := []string{"FetchInstructions_example"} // []string | Instructions to fetch AR Account details. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.AccountsReceivablesApi.GetAccount(context.Background(), accountId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AccountNo(accountNo).ProfileId(profileId).ProfileIdContext(profileIdContext).ProfileType(profileType).FetchInstructions(fetchInstructions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AccountsReceivablesApi.GetAccount``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetAccount`: Account
    fmt.Fprintf(os.Stdout, "Response from `AccountsReceivablesApi.GetAccount`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**accountId** | **string** | Unique ID of the account | 
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetAccountRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **accountNo** | **string** | Account Number for the Account. | 
 **profileId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **profileIdContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **profileType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **fetchInstructions** | **[]string** | Instructions to fetch AR Account details. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Account**](Account.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetAccounts

> AccountsInfo GetAccounts(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Balance(balance).BatchStatement(batchStatement).Limit(limit).Offset(offset).HotelIds(hotelIds).ProfileId(profileId).ProfileIdContext(profileIdContext).ProfileType(profileType).Type_(type_).AccountNo(accountNo).AccountName(accountName).AccountId(accountId).AccountIdContext(accountIdContext).AccountType(accountType).IncludeStatementHistoryIndicator(includeStatementHistoryIndicator).IncludeReminderHistoryIndicator(includeReminderHistoryIndicator).SuperSearch(superSearch).SearchHotelIds(searchHotelIds).AttributeName(attributeName).OrderType(orderType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get given profile's account receivable detail



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/ars"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    balance := "balance_example" // string | Search By Balance. Search will be done for 'All', 'Open Balance' or 'Zero Balance' Accounts. (optional)
    batchStatement := true // bool | Search criteria for batch processing (optional)
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    offset := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional) (default to 0)
    hotelIds := []string{"Inner_example"} // []string | Property where the Accounts exist. (optional)
    profileId := "profileId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    profileIdContext := "profileIdContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    profileType := "profileType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    type_ := "type__example" // string | Search by Account Type. (optional)
    accountNo := []string{"Inner_example"} // []string | Account Number . (optional)
    accountName := "accountName_example" // string | Wild Card Search by Account Name. Search will be done for any Accounts whose name starts with this value. (optional)
    accountId := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    accountIdContext := []string{"Inner_example"} // []string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    accountType := []string{"Inner_example"} // []string | A reference to the type of object defined by the UniqueID element. (optional)
    includeStatementHistoryIndicator := true // bool | Return statement history indicator in result. This flag included for performance reason to populate history flag only for Statements Mode. (optional)
    includeReminderHistoryIndicator := true // bool | Return reminder history indicator in result. This flag included for performance reason to populate history flag only for Statements Mode. (optional)
    superSearch := "superSearch_example" // string | Free form text field for searching all reservation fields (optional)
    searchHotelIds := []string{"Inner_example"} // []string | Hotel code. (optional)
    attributeName := []string{"Inner_example"} // []string |  (optional)
    orderType := []string{"OrderType_example"} // []string |  (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.AccountsReceivablesApi.GetAccounts(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Balance(balance).BatchStatement(batchStatement).Limit(limit).Offset(offset).HotelIds(hotelIds).ProfileId(profileId).ProfileIdContext(profileIdContext).ProfileType(profileType).Type_(type_).AccountNo(accountNo).AccountName(accountName).AccountId(accountId).AccountIdContext(accountIdContext).AccountType(accountType).IncludeStatementHistoryIndicator(includeStatementHistoryIndicator).IncludeReminderHistoryIndicator(includeReminderHistoryIndicator).SuperSearch(superSearch).SearchHotelIds(searchHotelIds).AttributeName(attributeName).OrderType(orderType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AccountsReceivablesApi.GetAccounts``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetAccounts`: AccountsInfo
    fmt.Fprintf(os.Stdout, "Response from `AccountsReceivablesApi.GetAccounts`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetAccountsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **balance** | **string** | Search By Balance. Search will be done for &#39;All&#39;, &#39;Open Balance&#39; or &#39;Zero Balance&#39; Accounts. | 
 **batchStatement** | **bool** | Search criteria for batch processing | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **offset** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [default to 0]
 **hotelIds** | **[]string** | Property where the Accounts exist. | 
 **profileId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **profileIdContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **profileType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **type_** | **string** | Search by Account Type. | 
 **accountNo** | **[]string** | Account Number . | 
 **accountName** | **string** | Wild Card Search by Account Name. Search will be done for any Accounts whose name starts with this value. | 
 **accountId** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **accountIdContext** | **[]string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **accountType** | **[]string** | A reference to the type of object defined by the UniqueID element. | 
 **includeStatementHistoryIndicator** | **bool** | Return statement history indicator in result. This flag included for performance reason to populate history flag only for Statements Mode. | 
 **includeReminderHistoryIndicator** | **bool** | Return reminder history indicator in result. This flag included for performance reason to populate history flag only for Statements Mode. | 
 **superSearch** | **string** | Free form text field for searching all reservation fields | 
 **searchHotelIds** | **[]string** | Hotel code. | 
 **attributeName** | **[]string** |  | 
 **orderType** | **[]string** |  | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**AccountsInfo**](AccountsInfo.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetAppliedInvoicePayments

> InvoiceAppliedPayments GetAppliedInvoicePayments(ctx, accountId, transactionId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).InvoiceNo(invoiceNo).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get account receivable invoice's payment history



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/ars"
)

func main() {
    accountId := "accountId_example" // string | Unique ID of the account
    transactionId := "transactionId_example" // string | Unique ID of the transaction
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    invoiceNo := float32(8.14) // float32 | Invoice No after the folio is generated. Same invoice number may be referred in multiple folios (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.AccountsReceivablesApi.GetAppliedInvoicePayments(context.Background(), accountId, transactionId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).InvoiceNo(invoiceNo).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AccountsReceivablesApi.GetAppliedInvoicePayments``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetAppliedInvoicePayments`: InvoiceAppliedPayments
    fmt.Fprintf(os.Stdout, "Response from `AccountsReceivablesApi.GetAppliedInvoicePayments`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**accountId** | **string** | Unique ID of the account | 
**transactionId** | **string** | Unique ID of the transaction | 
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetAppliedInvoicePaymentsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **invoiceNo** | **float32** | Invoice No after the folio is generated. Same invoice number may be referred in multiple folios | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**InvoiceAppliedPayments**](InvoiceAppliedPayments.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetInvoiceAppliedPayments

> InvoiceAppliedPayments GetInvoiceAppliedPayments(ctx, accountId, transactionId, invoiceId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).InvoiceNo(invoiceNo).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get account receivable invoice's payment history



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/ars"
)

func main() {
    accountId := "accountId_example" // string | Unique ID of the account
    transactionId := "transactionId_example" // string | Unique ID of the transaction
    invoiceId := "invoiceId_example" // string | Unique ID of the invoice
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    invoiceNo := float32(8.14) // float32 | Invoice No after the folio is generated. Same invoice number may be referred in multiple folios (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.AccountsReceivablesApi.GetInvoiceAppliedPayments(context.Background(), accountId, transactionId, invoiceId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).InvoiceNo(invoiceNo).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AccountsReceivablesApi.GetInvoiceAppliedPayments``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetInvoiceAppliedPayments`: InvoiceAppliedPayments
    fmt.Fprintf(os.Stdout, "Response from `AccountsReceivablesApi.GetInvoiceAppliedPayments`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**accountId** | **string** | Unique ID of the account | 
**transactionId** | **string** | Unique ID of the transaction | 
**invoiceId** | **string** | Unique ID of the invoice | 
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetInvoiceAppliedPaymentsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------




 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **invoiceNo** | **float32** | Invoice No after the folio is generated. Same invoice number may be referred in multiple folios | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**InvoiceAppliedPayments**](InvoiceAppliedPayments.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetInvoicePaymentDetail

> InvoicePayment GetInvoicePaymentDetail(ctx, transactionId, accountId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ProfileId(profileId).ProfileIdContext(profileIdContext).ProfileType(profileType).AccountNo(accountNo).AccountName(accountName).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get account receivable invoice and payment details



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/ars"
)

func main() {
    transactionId := "transactionId_example" // string | Unique ID of the transaction
    accountId := "accountId_example" // string | Unique ID of the account
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    profileId := "profileId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    profileIdContext := "profileIdContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    profileType := "profileType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    accountNo := "accountNo_example" // string | Account Number for the AR Account. (optional)
    accountName := "accountName_example" // string | Account Name for the AR Account. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.AccountsReceivablesApi.GetInvoicePaymentDetail(context.Background(), transactionId, accountId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ProfileId(profileId).ProfileIdContext(profileIdContext).ProfileType(profileType).AccountNo(accountNo).AccountName(accountName).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AccountsReceivablesApi.GetInvoicePaymentDetail``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetInvoicePaymentDetail`: InvoicePayment
    fmt.Fprintf(os.Stdout, "Response from `AccountsReceivablesApi.GetInvoicePaymentDetail`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**transactionId** | **string** | Unique ID of the transaction | 
**accountId** | **string** | Unique ID of the account | 
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetInvoicePaymentDetailRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **profileId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **profileIdContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **profileType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **accountNo** | **string** | Account Number for the AR Account. | 
 **accountName** | **string** | Account Name for the AR Account. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**InvoicePayment**](InvoicePayment.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetInvoicePostings

> InvoicePostings GetInvoicePostings(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CanBeModified(canBeModified).CloseDate(closeDate).FiscalBillNo(fiscalBillNo).FolioDate(folioDate).FolioNo(folioNo).FolioStatus(folioStatus).FolioTypeName(folioTypeName).InternalFolioWindowID(internalFolioWindowID).InvoiceNo(invoiceNo).InvoiceType(invoiceType).PostingDate(postingDate).RevenueDate(revenueDate).StatementNo(statementNo).Status(status).TransferDate(transferDate).PostingTransactionCode(postingTransactionCode).TransactionDate(transactionDate).TransactionNo(transactionNo).CashierId(cashierId).HotelId(hotelId).ReservationId(reservationId).ReservationIdContext(reservationIdContext).ReservationType(reservationType).GuestProfileId(guestProfileId).GuestProfileIdContext(guestProfileIdContext).GuestProfileType(guestProfileType).Age(age).GuestName(guestName).OriginalAmount(originalAmount).OriginalAmountCurrencyCode(originalAmountCurrencyCode).Amount(amount).CurrencyCode(currencyCode).PaymentsAmount(paymentsAmount).PaymentsCurrencyCode(paymentsCurrencyCode).BalanceAmount(balanceAmount).BalanceCurrencyCode(balanceCurrencyCode).Reference(reference).Remark(remark).Adjusted(adjusted).ParentInvoiceNo(parentInvoiceNo).Compressed(compressed).CompressedDate(compressedDate).TransferredOut(transferredOut).TransferredIn(transferredIn).MarketDescription(marketDescription).MarketHotelId(marketHotelId).MarketCode(marketCode).MarketGroup(marketGroup).RoomClassDescription(roomClassDescription).RoomClassHotelId(roomClassHotelId).RoomClassCode(roomClassCode).SourceDescription(sourceDescription).SourceHotelId(sourceHotelId).SourceCode(sourceCode).SourceGroup(sourceGroup).CashierInfoCashierId(cashierInfoCashierId).CashierName(cashierName).TransactionHotelId(transactionHotelId).PrintTrxReceipt(printTrxReceipt).InvoicePostingsTransactionCode(invoicePostingsTransactionCode).TransactionDescription(transactionDescription).TransactionGroup(transactionGroup).TransactionSubGroup(transactionSubGroup).UniversalProductCode(universalProductCode).RoutingInstructionsId(routingInstructionsId).ArticleCode(articleCode).ArticleHotelIds(articleHotelIds).Inactive(inactive).OrderSequence(orderSequence).ArticleDescription(articleDescription).TransactionCode(transactionCode).ArticleAmount(articleAmount).ArticleCurrencyCode(articleCurrencyCode).AvailableForPostIt(availableForPostIt).Color(color).ArticleUniversalProductCode(articleUniversalProductCode).AttachCreditCardToProfile(attachCreditCardToProfile).CardHolderName(cardHolderName).CardNumber(cardNumber).CardNumberLast4Digits(cardNumberLast4Digits).CardNumberMasked(cardNumberMasked).CardOrToken(cardOrToken).CardType(cardType).ExpirationDate(expirationDate).ExpirationDateExpired(expirationDateExpired).ExpirationDateMasked(expirationDateMasked).Processing(processing).Swiped(swiped).UserDefinedCardType(userDefinedCardType).CardId(cardId).PaymentCardIdContext(paymentCardIdContext).PaymentCardIdType(paymentCardIdType).CurrentAuthorizedAmount(currentAuthorizedAmount).CurrentAuthorizedAmountCurrencyCode(currentAuthorizedAmountCurrencyCode).ApprovalAmount(approvalAmount).ApprovalAmountCurrencyCode(approvalAmountCurrencyCode).AddresseeType(addresseeType).AddressProfileId(addressProfileId).AddressProfileIdContext(addressProfileIdContext).AddressProfileIdType(addressProfileIdType).Name(name).City(city).Phone(phone).AllowPartialTransferYn(allowPartialTransferYn).Printed(printed).PrintedDate(printedDate).StoredFolioId(storedFolioId).StoredFolioIdContext(storedFolioIdContext).StoredFolioType(storedFolioType).StoredFolioName(storedFolioName).StoredDebitFolioId(storedDebitFolioId).StoredDebitFolioIdContext(storedDebitFolioIdContext).StoredDebitFolioType(storedDebitFolioType).StoredDebitFolioName(storedDebitFolioName).AccountId(accountId).AccountIdContext(accountIdContext).AccountType(accountType).AccountNo(accountNo).ProfileId(profileId).ProfileIdContext(profileIdContext).ProfileIdType(profileIdType).AdditionalFilterCashierId(additionalFilterCashierId).AdditionalFilterTransactionCode(additionalFilterTransactionCode).AdditionalFilterTransactionSubGroupCode(additionalFilterTransactionSubGroupCode).End(end).Start(start).ReferenceWildCard(referenceWildCard).SupplementWildCard(supplementWildCard).CheckNumberWildCard(checkNumberWildCard).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get account receivable invoice postings



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/ars"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    canBeModified := true // bool | Flag to indicate if postings or adjustments can be made to the invoice. (optional)
    closeDate := time.Now() // string | Close date of the invoice. (optional)
    fiscalBillNo := "fiscalBillNo_example" // string | The Fiscal Bill number of this posting (optional)
    folioDate := time.Now() // string | Date of Folio Generation. (optional)
    folioNo := float32(8.14) // float32 | Folio Number. (optional)
    folioStatus := "folioStatus_example" // string | The Folio Status Example: DEPOSIT folio, VOID folio or the default OK folio status. (optional)
    folioTypeName := "folioTypeName_example" // string | The name of the Folio Type used for the Folio Number sequence. (optional)
    internalFolioWindowID := "internalFolioWindowID_example" // string | Internal window ID which is unique to the reservation. This ID can only be used for reference. (optional)
    invoiceNo := float32(8.14) // float32 | Invoice No after the folio is generated. Same invoice number may be referred in multiple folios (optional)
    invoiceType := "invoiceType_example" // string |  (optional)
    postingDate := time.Now() // string | Posting date of the invoice. (optional)
    revenueDate := time.Now() // string | Revenue date ID of the invoice. (optional)
    statementNo := int32(56) // int32 | Statementno of the invoice. (optional)
    status := "status_example" // string | Status of the invoice. (optional)
    transferDate := time.Now() // string | Transfer date of the invoice. (optional)
    postingTransactionCode := "postingTransactionCode_example" // string | Transaction code of the invoice. (optional)
    transactionDate := time.Now() // string | Transaction Date of the invoice. (optional)
    transactionNo := float32(8.14) // float32 | Unique Transaction Identifier of the Invoice. (optional)
    cashierId := float32(8.14) // float32 | The Cashier ID of the Cashier who is currently processing the transaction(s). (optional)
    hotelId := "hotelId_example" // string | Property where the invoice exists. (optional)
    reservationId := "reservationId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    reservationIdContext := "reservationIdContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    reservationType := "reservationType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    guestProfileId := "guestProfileId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    guestProfileIdContext := "guestProfileIdContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    guestProfileType := "guestProfileType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    age := int32(56) // int32 | The Aging age of the invoice (optional)
    guestName := "guestName_example" // string | Name of the Guest who consumed these transactions. (optional)
    originalAmount := float32(8.14) // float32 | A monetary amount. (optional)
    originalAmountCurrencyCode := "originalAmountCurrencyCode_example" // string | Provides a currency code to reflect the currency in which an amount may be expressed. (optional)
    amount := float32(8.14) // float32 | A monetary amount. (optional)
    currencyCode := "currencyCode_example" // string | Provides a currency code to reflect the currency in which an amount may be expressed. (optional)
    paymentsAmount := float32(8.14) // float32 | A monetary amount. (optional)
    paymentsCurrencyCode := "paymentsCurrencyCode_example" // string | Provides a currency code to reflect the currency in which an amount may be expressed. (optional)
    balanceAmount := float32(8.14) // float32 | A monetary amount. (optional)
    balanceCurrencyCode := "balanceCurrencyCode_example" // string | Provides a currency code to reflect the currency in which an amount may be expressed. (optional)
    reference := "reference_example" // string | User-defined posting reference. (optional)
    remark := "remark_example" // string | User-defined posting remark. (optional)
    adjusted := true // bool |  (optional)
    parentInvoiceNo := float32(8.14) // float32 |  (optional)
    compressed := true // bool |  (optional)
    compressedDate := time.Now() // string |  (optional)
    transferredOut := true // bool |  (optional)
    transferredIn := true // bool |  (optional)
    marketDescription := "marketDescription_example" // string |  (optional)
    marketHotelId := "marketHotelId_example" // string |  (optional)
    marketCode := "marketCode_example" // string |  (optional)
    marketGroup := "marketGroup_example" // string |  (optional)
    roomClassDescription := "roomClassDescription_example" // string |  (optional)
    roomClassHotelId := "roomClassHotelId_example" // string |  (optional)
    roomClassCode := "roomClassCode_example" // string |  (optional)
    sourceDescription := "sourceDescription_example" // string |  (optional)
    sourceHotelId := "sourceHotelId_example" // string |  (optional)
    sourceCode := "sourceCode_example" // string |  (optional)
    sourceGroup := "sourceGroup_example" // string |  (optional)
    cashierInfoCashierId := float32(8.14) // float32 | Cashier Id of the Cashier. (optional)
    cashierName := "cashierName_example" // string | Cashier Name. (optional)
    transactionHotelId := "transactionHotelId_example" // string | Hotel context of the Transaction code. (optional)
    printTrxReceipt := true // bool | Print receipt flag that tells whether the transaction receipt is to be printed or not. This is based on the transaction code. (optional)
    invoicePostingsTransactionCode := "invoicePostingsTransactionCode_example" // string | Unique identifier for the Transaction code. (optional)
    transactionDescription := "transactionDescription_example" // string | Transaction codes info. (optional)
    transactionGroup := "transactionGroup_example" // string | Category of the transaction code. (optional)
    transactionSubGroup := "transactionSubGroup_example" // string | Sub category of the transaction code. (optional)
    universalProductCode := "universalProductCode_example" // string | Unique Universal product code of the transaction code. (optional)
    routingInstructionsId := float32(8.14) // float32 | This is the Routing Instruction Id attached with Reservation. It is only used for internal purpose. It should not be used by external vendor or consumer. (optional)
    articleCode := []string{"Inner_example"} // []string | Unique code of the article. (optional)
    articleHotelIds := []string{"Inner_example"} // []string | Hotel code to which the article belongs. (optional)
    inactive := []bool{false} // []bool | Indicates whether the article is inactive or not. (optional)
    orderSequence := []float32{float32(123)} // []float32 | Display Order sequence. (optional)
    articleDescription := []string{"Inner_example"} // []string | Description of the article. (optional)
    transactionCode := []string{"Inner_example"} // []string | Transaction code to which the article belongs. (optional)
    articleAmount := float32(8.14) // float32 | A monetary amount. (optional)
    articleCurrencyCode := "articleCurrencyCode_example" // string | Provides a currency code to reflect the currency in which an amount may be expressed. (optional)
    availableForPostIt := true // bool | Indicates whether the article is available for post it. (optional)
    color := "color_example" // string | Color configuration type. This color configuration provides a visual category of entities. (optional)
    articleUniversalProductCode := []string{"Inner_example"} // []string | Unique Universal product code of the article. (optional)
    attachCreditCardToProfile := true // bool | Attach the credit card to profile. (optional)
    cardHolderName := "cardHolderName_example" // string |  (optional)
    cardNumber := "cardNumber_example" // string |  (optional)
    cardNumberLast4Digits := "cardNumberLast4Digits_example" // string |  (optional)
    cardNumberMasked := "cardNumberMasked_example" // string |  (optional)
    cardOrToken := "cardOrToken_example" // string | Simple type for indicating if credit card number is tokenized. (optional)
    cardType := "cardType_example" // string | This is required for Credit Card Payment Methods. This indicates the type of Credit Card associated with this payment method. (optional)
    expirationDate := time.Now() // string | Expiration date of the credit card (optional)
    expirationDateExpired := true // bool |  (optional)
    expirationDateMasked := "expirationDateMasked_example" // string | Masked Expiration date of the credit card (optional)
    processing := "processing_example" // string |  (optional)
    swiped := true // bool |  (optional)
    userDefinedCardType := "userDefinedCardType_example" // string | Indicates the user defined credit card type if credit card type from a defined list is not provided (optional)
    cardId := "cardId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    paymentCardIdContext := "paymentCardIdContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    paymentCardIdType := "paymentCardIdType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    currentAuthorizedAmount := float32(8.14) // float32 | A monetary amount. (optional)
    currentAuthorizedAmountCurrencyCode := "currentAuthorizedAmountCurrencyCode_example" // string | Provides a currency code to reflect the currency in which an amount may be expressed. (optional)
    approvalAmount := float32(8.14) // float32 | A monetary amount. (optional)
    approvalAmountCurrencyCode := "approvalAmountCurrencyCode_example" // string | Provides a currency code to reflect the currency in which an amount may be expressed. (optional)
    addresseeType := "addresseeType_example" // string | Defines the type of Linked profiles for a block. (optional)
    addressProfileId := "addressProfileId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    addressProfileIdContext := "addressProfileIdContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    addressProfileIdType := "addressProfileIdType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    name := "name_example" // string | Name for the profile attached to the block. (optional)
    city := "city_example" // string | City for the profile attached to the block. (optional)
    phone := "phone_example" // string | Phone for the profile attached to the block. (optional)
    allowPartialTransferYn := true // bool | Flag to check Partail Transfer Allowed. (optional)
    printed := true // bool | Flag to check Invoice Statement is Printed. (optional)
    printedDate := time.Now() // string | Invoice Statement Printed Date. (optional)
    storedFolioId := "storedFolioId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    storedFolioIdContext := "storedFolioIdContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    storedFolioType := "storedFolioType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    storedFolioName := "storedFolioName_example" // string | Name of the Stored Folio. (optional)
    storedDebitFolioId := "storedDebitFolioId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    storedDebitFolioIdContext := "storedDebitFolioIdContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    storedDebitFolioType := "storedDebitFolioType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    storedDebitFolioName := "storedDebitFolioName_example" // string | Name of the Stored Debit Folio. (optional)
    accountId := "accountId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    accountIdContext := "accountIdContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    accountType := "accountType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    accountNo := "accountNo_example" // string | The Account Number for the Account. (optional)
    profileId := "profileId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    profileIdContext := "profileIdContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    profileIdType := "profileIdType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    additionalFilterCashierId := float32(8.14) // float32 | Cashier Id of the Cashier. (optional)
    additionalFilterTransactionCode := []string{"Inner_example"} // []string |  (optional)
    additionalFilterTransactionSubGroupCode := []string{"Inner_example"} // []string |  (optional)
    end := time.Now() // string | The ending value of the date range. (optional)
    start := time.Now() // string | The starting value of the date range. (optional)
    referenceWildCard := "referenceWildCard_example" // string | Filters the results for reference. (optional)
    supplementWildCard := "supplementWildCard_example" // string | Filter the results for supplement. (optional)
    checkNumberWildCard := "checkNumberWildCard_example" // string | Lookup string which will try to match an existing Cheque number's. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.AccountsReceivablesApi.GetInvoicePostings(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CanBeModified(canBeModified).CloseDate(closeDate).FiscalBillNo(fiscalBillNo).FolioDate(folioDate).FolioNo(folioNo).FolioStatus(folioStatus).FolioTypeName(folioTypeName).InternalFolioWindowID(internalFolioWindowID).InvoiceNo(invoiceNo).InvoiceType(invoiceType).PostingDate(postingDate).RevenueDate(revenueDate).StatementNo(statementNo).Status(status).TransferDate(transferDate).PostingTransactionCode(postingTransactionCode).TransactionDate(transactionDate).TransactionNo(transactionNo).CashierId(cashierId).HotelId(hotelId).ReservationId(reservationId).ReservationIdContext(reservationIdContext).ReservationType(reservationType).GuestProfileId(guestProfileId).GuestProfileIdContext(guestProfileIdContext).GuestProfileType(guestProfileType).Age(age).GuestName(guestName).OriginalAmount(originalAmount).OriginalAmountCurrencyCode(originalAmountCurrencyCode).Amount(amount).CurrencyCode(currencyCode).PaymentsAmount(paymentsAmount).PaymentsCurrencyCode(paymentsCurrencyCode).BalanceAmount(balanceAmount).BalanceCurrencyCode(balanceCurrencyCode).Reference(reference).Remark(remark).Adjusted(adjusted).ParentInvoiceNo(parentInvoiceNo).Compressed(compressed).CompressedDate(compressedDate).TransferredOut(transferredOut).TransferredIn(transferredIn).MarketDescription(marketDescription).MarketHotelId(marketHotelId).MarketCode(marketCode).MarketGroup(marketGroup).RoomClassDescription(roomClassDescription).RoomClassHotelId(roomClassHotelId).RoomClassCode(roomClassCode).SourceDescription(sourceDescription).SourceHotelId(sourceHotelId).SourceCode(sourceCode).SourceGroup(sourceGroup).CashierInfoCashierId(cashierInfoCashierId).CashierName(cashierName).TransactionHotelId(transactionHotelId).PrintTrxReceipt(printTrxReceipt).InvoicePostingsTransactionCode(invoicePostingsTransactionCode).TransactionDescription(transactionDescription).TransactionGroup(transactionGroup).TransactionSubGroup(transactionSubGroup).UniversalProductCode(universalProductCode).RoutingInstructionsId(routingInstructionsId).ArticleCode(articleCode).ArticleHotelIds(articleHotelIds).Inactive(inactive).OrderSequence(orderSequence).ArticleDescription(articleDescription).TransactionCode(transactionCode).ArticleAmount(articleAmount).ArticleCurrencyCode(articleCurrencyCode).AvailableForPostIt(availableForPostIt).Color(color).ArticleUniversalProductCode(articleUniversalProductCode).AttachCreditCardToProfile(attachCreditCardToProfile).CardHolderName(cardHolderName).CardNumber(cardNumber).CardNumberLast4Digits(cardNumberLast4Digits).CardNumberMasked(cardNumberMasked).CardOrToken(cardOrToken).CardType(cardType).ExpirationDate(expirationDate).ExpirationDateExpired(expirationDateExpired).ExpirationDateMasked(expirationDateMasked).Processing(processing).Swiped(swiped).UserDefinedCardType(userDefinedCardType).CardId(cardId).PaymentCardIdContext(paymentCardIdContext).PaymentCardIdType(paymentCardIdType).CurrentAuthorizedAmount(currentAuthorizedAmount).CurrentAuthorizedAmountCurrencyCode(currentAuthorizedAmountCurrencyCode).ApprovalAmount(approvalAmount).ApprovalAmountCurrencyCode(approvalAmountCurrencyCode).AddresseeType(addresseeType).AddressProfileId(addressProfileId).AddressProfileIdContext(addressProfileIdContext).AddressProfileIdType(addressProfileIdType).Name(name).City(city).Phone(phone).AllowPartialTransferYn(allowPartialTransferYn).Printed(printed).PrintedDate(printedDate).StoredFolioId(storedFolioId).StoredFolioIdContext(storedFolioIdContext).StoredFolioType(storedFolioType).StoredFolioName(storedFolioName).StoredDebitFolioId(storedDebitFolioId).StoredDebitFolioIdContext(storedDebitFolioIdContext).StoredDebitFolioType(storedDebitFolioType).StoredDebitFolioName(storedDebitFolioName).AccountId(accountId).AccountIdContext(accountIdContext).AccountType(accountType).AccountNo(accountNo).ProfileId(profileId).ProfileIdContext(profileIdContext).ProfileIdType(profileIdType).AdditionalFilterCashierId(additionalFilterCashierId).AdditionalFilterTransactionCode(additionalFilterTransactionCode).AdditionalFilterTransactionSubGroupCode(additionalFilterTransactionSubGroupCode).End(end).Start(start).ReferenceWildCard(referenceWildCard).SupplementWildCard(supplementWildCard).CheckNumberWildCard(checkNumberWildCard).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AccountsReceivablesApi.GetInvoicePostings``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetInvoicePostings`: InvoicePostings
    fmt.Fprintf(os.Stdout, "Response from `AccountsReceivablesApi.GetInvoicePostings`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetInvoicePostingsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **canBeModified** | **bool** | Flag to indicate if postings or adjustments can be made to the invoice. | 
 **closeDate** | **string** | Close date of the invoice. | 
 **fiscalBillNo** | **string** | The Fiscal Bill number of this posting | 
 **folioDate** | **string** | Date of Folio Generation. | 
 **folioNo** | **float32** | Folio Number. | 
 **folioStatus** | **string** | The Folio Status Example: DEPOSIT folio, VOID folio or the default OK folio status. | 
 **folioTypeName** | **string** | The name of the Folio Type used for the Folio Number sequence. | 
 **internalFolioWindowID** | **string** | Internal window ID which is unique to the reservation. This ID can only be used for reference. | 
 **invoiceNo** | **float32** | Invoice No after the folio is generated. Same invoice number may be referred in multiple folios | 
 **invoiceType** | **string** |  | 
 **postingDate** | **string** | Posting date of the invoice. | 
 **revenueDate** | **string** | Revenue date ID of the invoice. | 
 **statementNo** | **int32** | Statementno of the invoice. | 
 **status** | **string** | Status of the invoice. | 
 **transferDate** | **string** | Transfer date of the invoice. | 
 **postingTransactionCode** | **string** | Transaction code of the invoice. | 
 **transactionDate** | **string** | Transaction Date of the invoice. | 
 **transactionNo** | **float32** | Unique Transaction Identifier of the Invoice. | 
 **cashierId** | **float32** | The Cashier ID of the Cashier who is currently processing the transaction(s). | 
 **hotelId** | **string** | Property where the invoice exists. | 
 **reservationId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **reservationIdContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **reservationType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **guestProfileId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **guestProfileIdContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **guestProfileType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **age** | **int32** | The Aging age of the invoice | 
 **guestName** | **string** | Name of the Guest who consumed these transactions. | 
 **originalAmount** | **float32** | A monetary amount. | 
 **originalAmountCurrencyCode** | **string** | Provides a currency code to reflect the currency in which an amount may be expressed. | 
 **amount** | **float32** | A monetary amount. | 
 **currencyCode** | **string** | Provides a currency code to reflect the currency in which an amount may be expressed. | 
 **paymentsAmount** | **float32** | A monetary amount. | 
 **paymentsCurrencyCode** | **string** | Provides a currency code to reflect the currency in which an amount may be expressed. | 
 **balanceAmount** | **float32** | A monetary amount. | 
 **balanceCurrencyCode** | **string** | Provides a currency code to reflect the currency in which an amount may be expressed. | 
 **reference** | **string** | User-defined posting reference. | 
 **remark** | **string** | User-defined posting remark. | 
 **adjusted** | **bool** |  | 
 **parentInvoiceNo** | **float32** |  | 
 **compressed** | **bool** |  | 
 **compressedDate** | **string** |  | 
 **transferredOut** | **bool** |  | 
 **transferredIn** | **bool** |  | 
 **marketDescription** | **string** |  | 
 **marketHotelId** | **string** |  | 
 **marketCode** | **string** |  | 
 **marketGroup** | **string** |  | 
 **roomClassDescription** | **string** |  | 
 **roomClassHotelId** | **string** |  | 
 **roomClassCode** | **string** |  | 
 **sourceDescription** | **string** |  | 
 **sourceHotelId** | **string** |  | 
 **sourceCode** | **string** |  | 
 **sourceGroup** | **string** |  | 
 **cashierInfoCashierId** | **float32** | Cashier Id of the Cashier. | 
 **cashierName** | **string** | Cashier Name. | 
 **transactionHotelId** | **string** | Hotel context of the Transaction code. | 
 **printTrxReceipt** | **bool** | Print receipt flag that tells whether the transaction receipt is to be printed or not. This is based on the transaction code. | 
 **invoicePostingsTransactionCode** | **string** | Unique identifier for the Transaction code. | 
 **transactionDescription** | **string** | Transaction codes info. | 
 **transactionGroup** | **string** | Category of the transaction code. | 
 **transactionSubGroup** | **string** | Sub category of the transaction code. | 
 **universalProductCode** | **string** | Unique Universal product code of the transaction code. | 
 **routingInstructionsId** | **float32** | This is the Routing Instruction Id attached with Reservation. It is only used for internal purpose. It should not be used by external vendor or consumer. | 
 **articleCode** | **[]string** | Unique code of the article. | 
 **articleHotelIds** | **[]string** | Hotel code to which the article belongs. | 
 **inactive** | **[]bool** | Indicates whether the article is inactive or not. | 
 **orderSequence** | **[]float32** | Display Order sequence. | 
 **articleDescription** | **[]string** | Description of the article. | 
 **transactionCode** | **[]string** | Transaction code to which the article belongs. | 
 **articleAmount** | **float32** | A monetary amount. | 
 **articleCurrencyCode** | **string** | Provides a currency code to reflect the currency in which an amount may be expressed. | 
 **availableForPostIt** | **bool** | Indicates whether the article is available for post it. | 
 **color** | **string** | Color configuration type. This color configuration provides a visual category of entities. | 
 **articleUniversalProductCode** | **[]string** | Unique Universal product code of the article. | 
 **attachCreditCardToProfile** | **bool** | Attach the credit card to profile. | 
 **cardHolderName** | **string** |  | 
 **cardNumber** | **string** |  | 
 **cardNumberLast4Digits** | **string** |  | 
 **cardNumberMasked** | **string** |  | 
 **cardOrToken** | **string** | Simple type for indicating if credit card number is tokenized. | 
 **cardType** | **string** | This is required for Credit Card Payment Methods. This indicates the type of Credit Card associated with this payment method. | 
 **expirationDate** | **string** | Expiration date of the credit card | 
 **expirationDateExpired** | **bool** |  | 
 **expirationDateMasked** | **string** | Masked Expiration date of the credit card | 
 **processing** | **string** |  | 
 **swiped** | **bool** |  | 
 **userDefinedCardType** | **string** | Indicates the user defined credit card type if credit card type from a defined list is not provided | 
 **cardId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **paymentCardIdContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **paymentCardIdType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **currentAuthorizedAmount** | **float32** | A monetary amount. | 
 **currentAuthorizedAmountCurrencyCode** | **string** | Provides a currency code to reflect the currency in which an amount may be expressed. | 
 **approvalAmount** | **float32** | A monetary amount. | 
 **approvalAmountCurrencyCode** | **string** | Provides a currency code to reflect the currency in which an amount may be expressed. | 
 **addresseeType** | **string** | Defines the type of Linked profiles for a block. | 
 **addressProfileId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **addressProfileIdContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **addressProfileIdType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **name** | **string** | Name for the profile attached to the block. | 
 **city** | **string** | City for the profile attached to the block. | 
 **phone** | **string** | Phone for the profile attached to the block. | 
 **allowPartialTransferYn** | **bool** | Flag to check Partail Transfer Allowed. | 
 **printed** | **bool** | Flag to check Invoice Statement is Printed. | 
 **printedDate** | **string** | Invoice Statement Printed Date. | 
 **storedFolioId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **storedFolioIdContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **storedFolioType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **storedFolioName** | **string** | Name of the Stored Folio. | 
 **storedDebitFolioId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **storedDebitFolioIdContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **storedDebitFolioType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **storedDebitFolioName** | **string** | Name of the Stored Debit Folio. | 
 **accountId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **accountIdContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **accountType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **accountNo** | **string** | The Account Number for the Account. | 
 **profileId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **profileIdContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **profileIdType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **additionalFilterCashierId** | **float32** | Cashier Id of the Cashier. | 
 **additionalFilterTransactionCode** | **[]string** |  | 
 **additionalFilterTransactionSubGroupCode** | **[]string** |  | 
 **end** | **string** | The ending value of the date range. | 
 **start** | **string** | The starting value of the date range. | 
 **referenceWildCard** | **string** | Filters the results for reference. | 
 **supplementWildCard** | **string** | Filter the results for supplement. | 
 **checkNumberWildCard** | **string** | Lookup string which will try to match an existing Cheque number&#39;s. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**InvoicePostings**](InvoicePostings.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetInvoicesOnHold

> InvoicesOnHold GetInvoicesOnHold(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ProfileId(profileId).ProfileIdContext(profileIdContext).ProfileType(profileType).Id(id).AccountIdContext(accountIdContext).AccountType(accountType).AccountNo(accountNo).AccountName(accountName).EndDate(endDate).StartDate(startDate).Folios(folios).Invoices(invoices).FiscalBillNo(fiscalBillNo).GuestName(guestName).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get list of hold invoices for account receivable



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/ars"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    profileId := "profileId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    profileIdContext := "profileIdContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    profileType := "profileType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    id := "id_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    accountIdContext := "accountIdContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    accountType := "accountType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    accountNo := "accountNo_example" // string | Account Number for the AR Account. (optional)
    accountName := "accountName_example" // string | Account Name for the AR Account. (optional)
    endDate := time.Now() // string | The ending value of the date range. (optional)
    startDate := time.Now() // string | The starting value of the date range. (optional)
    folios := "folios_example" // string | Folio Number for the invoice. (optional)
    invoices := float32(8.14) // float32 | Invoice number for the invoice. (optional)
    fiscalBillNo := "fiscalBillNo_example" // string | Fiscal Bill number for the invoice. (optional)
    guestName := "guestName_example" // string | Guest Name set for the invoice. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.AccountsReceivablesApi.GetInvoicesOnHold(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ProfileId(profileId).ProfileIdContext(profileIdContext).ProfileType(profileType).Id(id).AccountIdContext(accountIdContext).AccountType(accountType).AccountNo(accountNo).AccountName(accountName).EndDate(endDate).StartDate(startDate).Folios(folios).Invoices(invoices).FiscalBillNo(fiscalBillNo).GuestName(guestName).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AccountsReceivablesApi.GetInvoicesOnHold``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetInvoicesOnHold`: InvoicesOnHold
    fmt.Fprintf(os.Stdout, "Response from `AccountsReceivablesApi.GetInvoicesOnHold`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetInvoicesOnHoldRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **profileId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **profileIdContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **profileType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **id** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **accountIdContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **accountType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **accountNo** | **string** | Account Number for the AR Account. | 
 **accountName** | **string** | Account Name for the AR Account. | 
 **endDate** | **string** | The ending value of the date range. | 
 **startDate** | **string** | The starting value of the date range. | 
 **folios** | **string** | Folio Number for the invoice. | 
 **invoices** | **float32** | Invoice number for the invoice. | 
 **fiscalBillNo** | **string** | Fiscal Bill number for the invoice. | 
 **guestName** | **string** | Guest Name set for the invoice. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**InvoicesOnHold**](InvoicesOnHold.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetInvoicesPayments

> InvoicesPayments GetInvoicesPayments(ctx, accountId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).InclDetails(inclDetails).InclZeroBalance(inclZeroBalance).Limit(limit).Offset(offset).HotelIds(hotelIds).End(end).Start(start).GuestDisplayName(guestDisplayName).Remark(remark).Reference(reference).InvoiceNo(invoiceNo).AddresseeName(addresseeName).ReservationId(reservationId).ReservationIdContext(reservationIdContext).ReservationType(reservationType).Printed(printed).UnBilled(unBilled).FolioNo(folioNo).FiscalBillNo(fiscalBillNo).StatementNo(statementNo).FetchInstructions(fetchInstructions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get payment detail for account's invoices



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/ars"
)

func main() {
    accountId := "accountId_example" // string | Unique ID of the account
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    inclDetails := true // bool | Flag to indicate if Invoice Details are required. (optional) (default to true)
    inclZeroBalance := true // bool | Flag to indicate if Zero Balance Invoices are to be included. (optional) (default to true)
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    offset := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional) (default to 0)
    hotelIds := []string{"Inner_example"} // []string | Property where the Accounts exist. (optional)
    end := time.Now() // string | The ending value of the date range. (optional)
    start := time.Now() // string | The starting value of the date range. (optional)
    guestDisplayName := "guestDisplayName_example" // string | Display Name for the guest. (optional)
    remark := "remark_example" // string | Filter for User-defined Invoice Supplement. The search is case-insensitive and supports % as wildcard character with right-side wildcard search by default. Examples: ABC or ABC% finds records that start with ABC, such as ABC, ABCDEF, and ABC123. %ABC or %ABC% finds records that contain ABC, such as ABC, ABC123, MYABC, and MYABC123. (optional)
    reference := "reference_example" // string | Filter for User-defined Invoice Reference. The search is case-insensitive and supports % as wildcard character with right-side wildcard search by default. Examples: ABC or ABC% finds records that start with ABC, such as ABC, ABCDEF, and ABC123. %ABC or %ABC% finds records that contain ABC, such as ABC, ABC123, MYABC, and MYABC123. (optional)
    invoiceNo := []float32{float32(123)} // []float32 | invoice Number . (optional)
    addresseeName := "addresseeName_example" // string | Addressee Name filter. Works with the Addressee Functionality. (optional)
    reservationId := "reservationId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    reservationIdContext := "reservationIdContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    reservationType := "reservationType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    printed := true // bool | Flag to check Invoice Statement is Printed. (optional) (default to true)
    unBilled := true // bool | Flag to check Invoice is billed (optional) (default to false)
    folioNo := []string{"Inner_example"} // []string | folio Number . (optional)
    fiscalBillNo := "fiscalBillNo_example" // string | Fiscal bill number of this transaction. (optional)
    statementNo := float32(8.14) // float32 | The Statement number of this invoice. (optional)
    fetchInstructions := []string{"FetchInstructions_example"} // []string | Type of AR Invoice information to fetch the invoices or payments data. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.AccountsReceivablesApi.GetInvoicesPayments(context.Background(), accountId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).InclDetails(inclDetails).InclZeroBalance(inclZeroBalance).Limit(limit).Offset(offset).HotelIds(hotelIds).End(end).Start(start).GuestDisplayName(guestDisplayName).Remark(remark).Reference(reference).InvoiceNo(invoiceNo).AddresseeName(addresseeName).ReservationId(reservationId).ReservationIdContext(reservationIdContext).ReservationType(reservationType).Printed(printed).UnBilled(unBilled).FolioNo(folioNo).FiscalBillNo(fiscalBillNo).StatementNo(statementNo).FetchInstructions(fetchInstructions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AccountsReceivablesApi.GetInvoicesPayments``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetInvoicesPayments`: InvoicesPayments
    fmt.Fprintf(os.Stdout, "Response from `AccountsReceivablesApi.GetInvoicesPayments`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**accountId** | **string** | Unique ID of the account | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetInvoicesPaymentsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **inclDetails** | **bool** | Flag to indicate if Invoice Details are required. | [default to true]
 **inclZeroBalance** | **bool** | Flag to indicate if Zero Balance Invoices are to be included. | [default to true]
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **offset** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [default to 0]
 **hotelIds** | **[]string** | Property where the Accounts exist. | 
 **end** | **string** | The ending value of the date range. | 
 **start** | **string** | The starting value of the date range. | 
 **guestDisplayName** | **string** | Display Name for the guest. | 
 **remark** | **string** | Filter for User-defined Invoice Supplement. The search is case-insensitive and supports % as wildcard character with right-side wildcard search by default. Examples: ABC or ABC% finds records that start with ABC, such as ABC, ABCDEF, and ABC123. %ABC or %ABC% finds records that contain ABC, such as ABC, ABC123, MYABC, and MYABC123. | 
 **reference** | **string** | Filter for User-defined Invoice Reference. The search is case-insensitive and supports % as wildcard character with right-side wildcard search by default. Examples: ABC or ABC% finds records that start with ABC, such as ABC, ABCDEF, and ABC123. %ABC or %ABC% finds records that contain ABC, such as ABC, ABC123, MYABC, and MYABC123. | 
 **invoiceNo** | **[]float32** | invoice Number . | 
 **addresseeName** | **string** | Addressee Name filter. Works with the Addressee Functionality. | 
 **reservationId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **reservationIdContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **reservationType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **printed** | **bool** | Flag to check Invoice Statement is Printed. | [default to true]
 **unBilled** | **bool** | Flag to check Invoice is billed | [default to false]
 **folioNo** | **[]string** | folio Number . | 
 **fiscalBillNo** | **string** | Fiscal bill number of this transaction. | 
 **statementNo** | **float32** | The Statement number of this invoice. | 
 **fetchInstructions** | **[]string** | Type of AR Invoice information to fetch the invoices or payments data. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**InvoicesPayments**](InvoicesPayments.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetProfileAging

> ProfileAging GetProfileAging(ctx, profileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Currency(currency).HotelIds(hotelIds).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get given profile's aging detail



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/ars"
)

func main() {
    profileId := "profileId_example" // string | Unique ID of the profile
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    currency := "currency_example" // string | Currency of the aging amounts. (optional)
    hotelIds := []string{"Inner_example"} // []string |  (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.AccountsReceivablesApi.GetProfileAging(context.Background(), profileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Currency(currency).HotelIds(hotelIds).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AccountsReceivablesApi.GetProfileAging``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetProfileAging`: ProfileAging
    fmt.Fprintf(os.Stdout, "Response from `AccountsReceivablesApi.GetProfileAging`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**profileId** | **string** | Unique ID of the profile | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetProfileAgingRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **currency** | **string** | Currency of the aging amounts. | 
 **hotelIds** | **[]string** |  | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ProfileAging**](ProfileAging.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetProfileYearView

> ProfileYearView GetProfileYearView(ctx, profileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Currency(currency).HotelIds(hotelIds).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get given profile's yearly account receivable detail



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/ars"
)

func main() {
    profileId := "profileId_example" // string | Unique ID of the profile
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    currency := "currency_example" // string | Currency of the Year View amounts. (optional)
    hotelIds := []string{"Inner_example"} // []string |  (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.AccountsReceivablesApi.GetProfileYearView(context.Background(), profileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Currency(currency).HotelIds(hotelIds).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AccountsReceivablesApi.GetProfileYearView``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetProfileYearView`: ProfileYearView
    fmt.Fprintf(os.Stdout, "Response from `AccountsReceivablesApi.GetProfileYearView`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**profileId** | **string** | Unique ID of the profile | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetProfileYearViewRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **currency** | **string** | Currency of the Year View amounts. | 
 **hotelIds** | **[]string** |  | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ProfileYearView**](ProfileYearView.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetReminders

> Reminders GetReminders(ctx).Accounts(accounts).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelIds(hotelIds).Profiles(profiles).AccountNo(accountNo).AccountName(accountName).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get account receivable's reminder statements



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/ars"
)

func main() {
    accounts := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    hotelIds := []string{"Inner_example"} // []string | Property where the AR Account exists. This is required. (optional)
    profiles := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    accountNo := []string{"Inner_example"} // []string | Account Number for the AR Account. (optional)
    accountName := []string{"Inner_example"} // []string | Account Name for the AR Account. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.AccountsReceivablesApi.GetReminders(context.Background()).Accounts(accounts).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelIds(hotelIds).Profiles(profiles).AccountNo(accountNo).AccountName(accountName).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AccountsReceivablesApi.GetReminders``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetReminders`: Reminders
    fmt.Fprintf(os.Stdout, "Response from `AccountsReceivablesApi.GetReminders`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetRemindersRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accounts** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **hotelIds** | **[]string** | Property where the AR Account exists. This is required. | 
 **profiles** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **accountNo** | **[]string** | Account Number for the AR Account. | 
 **accountName** | **[]string** | Account Name for the AR Account. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Reminders**](Reminders.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetRemindersHistory

> RemindersHistory GetRemindersHistory(ctx, accountId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).ProfileId(profileId).AccountIdContext(accountIdContext).AccountType(accountType).AccountNo(accountNo).AccountName(accountName).DateSent(dateSent).ReportFileNameWildCard(reportFileNameWildCard).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get history of reminder letters for a given account receivable



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/ars"
)

func main() {
    accountId := "accountId_example" // string | Unique ID of the account
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    hotelId := "hotelId_example" // string | Property where the AR Account exists. This is required. (optional)
    profileId := "profileId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    accountIdContext := "accountIdContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    accountType := "accountType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    accountNo := "accountNo_example" // string | Account Number for the AR Account. (optional)
    accountName := "accountName_example" // string | Account Name for the AR Account. (optional)
    dateSent := time.Now() // string | History Date filter. (optional)
    reportFileNameWildCard := "reportFileNameWildCard_example" // string | Report Name wild card. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.AccountsReceivablesApi.GetRemindersHistory(context.Background(), accountId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).ProfileId(profileId).AccountIdContext(accountIdContext).AccountType(accountType).AccountNo(accountNo).AccountName(accountName).DateSent(dateSent).ReportFileNameWildCard(reportFileNameWildCard).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AccountsReceivablesApi.GetRemindersHistory``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetRemindersHistory`: RemindersHistory
    fmt.Fprintf(os.Stdout, "Response from `AccountsReceivablesApi.GetRemindersHistory`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**accountId** | **string** | Unique ID of the account | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetRemindersHistoryRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **hotelId** | **string** | Property where the AR Account exists. This is required. | 
 **profileId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **accountIdContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **accountType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **accountNo** | **string** | Account Number for the AR Account. | 
 **accountName** | **string** | Account Name for the AR Account. | 
 **dateSent** | **string** | History Date filter. | 
 **reportFileNameWildCard** | **string** | Report Name wild card. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**RemindersHistory**](RemindersHistory.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetStatements

> Statements GetStatements(ctx, accountId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).ProfileId(profileId).ProfileIdContext(profileIdContext).ProfileType(profileType).AccountNo(accountNo).AccountName(accountName).CanBeModified(canBeModified).CloseDate(closeDate).FiscalBillNo(fiscalBillNo).FolioDate(folioDate).FolioNo(folioNo).FolioStatus(folioStatus).FolioTypeName(folioTypeName).InternalFolioWindowID(internalFolioWindowID).InvoiceNo(invoiceNo).InvoiceType(invoiceType).PostingDate(postingDate).RevenueDate(revenueDate).StatementNo(statementNo).Status(status).TransferDate(transferDate).InvoiceTransactionCode(invoiceTransactionCode).TransactionDate(transactionDate).TransactionNo(transactionNo).InvoiceHotelIds(invoiceHotelIds).ReservationId(reservationId).ReservationIdContext(reservationIdContext).ReservationType(reservationType).GuestProfileId(guestProfileId).GuestProfileIdContext(guestProfileIdContext).GuestProfileType(guestProfileType).Age(age).GuestName(guestName).OriginalAmount(originalAmount).OriginalAmountCurrencyCode(originalAmountCurrencyCode).Amount(amount).CurrencyCode(currencyCode).PaymentsAmount(paymentsAmount).PaymentsCurrencyCode(paymentsCurrencyCode).BalanceAmount(balanceAmount).BalanceCurrencyCode(balanceCurrencyCode).Reference(reference).Remark(remark).Adjusted(adjusted).ParentInvoiceNo(parentInvoiceNo).Compressed(compressed).CompressedDate(compressedDate).TransferredOut(transferredOut).TransferredIn(transferredIn).MarketDescription(marketDescription).MarketHotelId(marketHotelId).MarketCode(marketCode).MarketGroup(marketGroup).RoomClassDescription(roomClassDescription).RoomClassHotelId(roomClassHotelId).RoomClassCode(roomClassCode).SourceDescription(sourceDescription).SourceHotelId(sourceHotelId).SourceCode(sourceCode).SourceGroup(sourceGroup).CashierId(cashierId).CashierName(cashierName).TransactionHotelId(transactionHotelId).PrintTrxReceipt(printTrxReceipt).AccountInvoiceTransactionCode(accountInvoiceTransactionCode).TransactionDescription(transactionDescription).TransactionGroup(transactionGroup).TransactionSubGroup(transactionSubGroup).UniversalProductCode(universalProductCode).RoutingInstructionsId(routingInstructionsId).ArticleCode(articleCode).ArticleHotelIds(articleHotelIds).Inactive(inactive).OrderSequence(orderSequence).ArticleDescription(articleDescription).TransactionCode(transactionCode).ArticleAmount(articleAmount).ArticleCurrencyCode(articleCurrencyCode).AvailableForPostIt(availableForPostIt).Color(color).ArticleUniversalProductCode(articleUniversalProductCode).AttachCreditCardToProfile(attachCreditCardToProfile).CardHolderName(cardHolderName).CardNumber(cardNumber).CardNumberLast4Digits(cardNumberLast4Digits).CardNumberMasked(cardNumberMasked).CardOrToken(cardOrToken).CardType(cardType).ExpirationDate(expirationDate).ExpirationDateExpired(expirationDateExpired).ExpirationDateMasked(expirationDateMasked).Processing(processing).Swiped(swiped).UserDefinedCardType(userDefinedCardType).InvoicePaymentCardId(invoicePaymentCardId).InvoicePaymentCardIdContext(invoicePaymentCardIdContext).InvoicePaymentCardIdType(invoicePaymentCardIdType).CurrentAuthorizedAmount(currentAuthorizedAmount).CurrentAuthorizedAmountCurrencyCode(currentAuthorizedAmountCurrencyCode).ApprovalAmount(approvalAmount).ApprovalAmountCurrencyCode(approvalAmountCurrencyCode).Type_(type_).AddresseeProfileId(addresseeProfileId).AddresseeProfileIdContext(addresseeProfileIdContext).AddresseeProfileType(addresseeProfileType).Name(name).City(city).Phone(phone).AllowPartialTransferYn(allowPartialTransferYn).Printed(printed).PrintedDate(printedDate).StoredFolioId(storedFolioId).StoredFolioIdContext(storedFolioIdContext).StoredFolioType(storedFolioType).StoredFolioName(storedFolioName).StoredDebitFolioId(storedDebitFolioId).StoredDebitFolioIdContext(storedDebitFolioIdContext).StoredDebitFolioType(storedDebitFolioType).StoredDebitFolioName(storedDebitFolioName).BalanceForwardDate(balanceForwardDate).InclFolios(inclFolios).InclPrinted(inclPrinted).InclZero(inclZero).FilterEndDate(filterEndDate).FilterStartDate(filterStartDate).StatementText(statementText).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get given profile's account receivable statements



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/ars"
)

func main() {
    accountId := "accountId_example" // string | Unique ID of the account
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    hotelId := []string{"Inner_example"} // []string | Property where the AR Account exists. This is required. (optional)
    profileId := "profileId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    profileIdContext := "profileIdContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    profileType := "profileType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    accountNo := []string{"Inner_example"} // []string | Account Number for the AR Account. (optional)
    accountName := []string{"Inner_example"} // []string | Account Name for the AR Account. (optional)
    canBeModified := []bool{false} // []bool | Flag to indicate if postings or adjustments can be made to the invoice. (optional)
    closeDate := []string{time.Now()} // []string | Close date of the invoice. (optional)
    fiscalBillNo := []string{"Inner_example"} // []string | The Fiscal Bill number of this posting (optional)
    folioDate := []string{time.Now()} // []string | Date of Folio Generation. (optional)
    folioNo := []float32{float32(123)} // []float32 | Folio Number. (optional)
    folioStatus := []string{"FolioStatus_example"} // []string | The Folio Status Example: DEPOSIT folio, VOID folio or the default OK folio status. (optional)
    folioTypeName := []string{"Inner_example"} // []string | The name of the Folio Type used for the Folio Number sequence. (optional)
    internalFolioWindowID := []string{"Inner_example"} // []string | Internal window ID which is unique to the reservation. This ID can only be used for reference. (optional)
    invoiceNo := []float32{float32(123)} // []float32 | Invoice No after the folio is generated. Same invoice number may be referred in multiple folios (optional)
    invoiceType := []string{"InvoiceType_example"} // []string |  (optional)
    postingDate := []string{time.Now()} // []string | Posting date of the invoice. (optional)
    revenueDate := []string{time.Now()} // []string | Revenue date ID of the invoice. (optional)
    statementNo := []int32{int32(123)} // []int32 | Statementno of the invoice. (optional)
    status := []string{"Inner_example"} // []string | Status of the invoice. (optional)
    transferDate := []string{time.Now()} // []string | Transfer date of the invoice. (optional)
    invoiceTransactionCode := []string{"Inner_example"} // []string | Transaction code of the invoice. (optional)
    transactionDate := []string{time.Now()} // []string | Transaction Date of the invoice. (optional)
    transactionNo := []float32{float32(123)} // []float32 | Unique Transaction Identifier of the Invoice. (optional)
    invoiceHotelIds := []string{"Inner_example"} // []string | Property where the AR Account exists. This is required. (optional)
    reservationId := "reservationId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    reservationIdContext := "reservationIdContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    reservationType := "reservationType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    guestProfileId := "guestProfileId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    guestProfileIdContext := "guestProfileIdContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    guestProfileType := "guestProfileType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    age := []int32{int32(123)} // []int32 | The Aging age of the invoice (optional)
    guestName := []string{"Inner_example"} // []string | Name of the Guest who consumed these transactions. (optional)
    originalAmount := float32(8.14) // float32 | A monetary amount. (optional)
    originalAmountCurrencyCode := "originalAmountCurrencyCode_example" // string | Provides a currency code to reflect the currency in which an amount may be expressed. (optional)
    amount := float32(8.14) // float32 | A monetary amount. (optional)
    currencyCode := "currencyCode_example" // string | Provides a currency code to reflect the currency in which an amount may be expressed. (optional)
    paymentsAmount := float32(8.14) // float32 | A monetary amount. (optional)
    paymentsCurrencyCode := "paymentsCurrencyCode_example" // string | Provides a currency code to reflect the currency in which an amount may be expressed. (optional)
    balanceAmount := float32(8.14) // float32 | A monetary amount. (optional)
    balanceCurrencyCode := "balanceCurrencyCode_example" // string | Provides a currency code to reflect the currency in which an amount may be expressed. (optional)
    reference := []string{"Inner_example"} // []string | User-defined posting reference. (optional)
    remark := []string{"Inner_example"} // []string | User-defined posting remark. (optional)
    adjusted := []bool{false} // []bool |  (optional)
    parentInvoiceNo := []float32{float32(123)} // []float32 |  (optional)
    compressed := []bool{false} // []bool |  (optional)
    compressedDate := []string{time.Now()} // []string |  (optional)
    transferredOut := []bool{false} // []bool |  (optional)
    transferredIn := []bool{false} // []bool |  (optional)
    marketDescription := "marketDescription_example" // string |  (optional)
    marketHotelId := "marketHotelId_example" // string | Property where the AR Account exists. This is required. (optional)
    marketCode := "marketCode_example" // string |  (optional)
    marketGroup := "marketGroup_example" // string |  (optional)
    roomClassDescription := "roomClassDescription_example" // string |  (optional)
    roomClassHotelId := "roomClassHotelId_example" // string | Property where the AR Account exists. This is required. (optional)
    roomClassCode := "roomClassCode_example" // string |  (optional)
    sourceDescription := "sourceDescription_example" // string |  (optional)
    sourceHotelId := "sourceHotelId_example" // string | Property where the AR Account exists. This is required. (optional)
    sourceCode := "sourceCode_example" // string |  (optional)
    sourceGroup := "sourceGroup_example" // string |  (optional)
    cashierId := float32(8.14) // float32 | Cashier Id of the Cashier. (optional)
    cashierName := "cashierName_example" // string | Cashier Name. (optional)
    transactionHotelId := "transactionHotelId_example" // string | Property where the AR Account exists. This is required. (optional)
    printTrxReceipt := true // bool | Print receipt flag that tells whether the transaction receipt is to be printed or not. This is based on the transaction code. (optional)
    accountInvoiceTransactionCode := "accountInvoiceTransactionCode_example" // string | Unique identifier for the Transaction code. (optional)
    transactionDescription := "transactionDescription_example" // string | Transaction codes info. (optional)
    transactionGroup := "transactionGroup_example" // string | Category of the transaction code. (optional)
    transactionSubGroup := "transactionSubGroup_example" // string | Sub category of the transaction code. (optional)
    universalProductCode := "universalProductCode_example" // string | Unique Universal product code of the transaction code. (optional)
    routingInstructionsId := float32(8.14) // float32 | This is the Routing Instruction Id attached with Reservation. It is only used for internal purpose. It should not be used by external vendor or consumer. (optional)
    articleCode := []string{"Inner_example"} // []string | Unique code of the article. (optional)
    articleHotelIds := []string{"Inner_example"} // []string | Property where the AR Account exists. This is required. (optional)
    inactive := []bool{false} // []bool | Indicates whether the article is inactive or not. (optional)
    orderSequence := []float32{float32(123)} // []float32 | Display Order sequence. (optional)
    articleDescription := []string{"Inner_example"} // []string | Description of the article. (optional)
    transactionCode := []string{"Inner_example"} // []string | Transaction code to which the article belongs. (optional)
    articleAmount := float32(8.14) // float32 | A monetary amount. (optional)
    articleCurrencyCode := "articleCurrencyCode_example" // string | Provides a currency code to reflect the currency in which an amount may be expressed. (optional)
    availableForPostIt := true // bool | Indicates whether the article is available for post it. (optional)
    color := "color_example" // string | Color configuration type. This color configuration provides a visual category of entities. (optional)
    articleUniversalProductCode := []string{"Inner_example"} // []string | Unique Universal product code of the article. (optional)
    attachCreditCardToProfile := true // bool | Attach the credit card to profile. (optional)
    cardHolderName := "cardHolderName_example" // string |  (optional)
    cardNumber := "cardNumber_example" // string |  (optional)
    cardNumberLast4Digits := "cardNumberLast4Digits_example" // string |  (optional)
    cardNumberMasked := "cardNumberMasked_example" // string |  (optional)
    cardOrToken := "cardOrToken_example" // string | Simple type for indicating if credit card number is tokenized. (optional)
    cardType := "cardType_example" // string | This is required for Credit Card Payment Methods. This indicates the type of Credit Card associated with this payment method. (optional)
    expirationDate := time.Now() // string | Expiration date of the credit card (optional)
    expirationDateExpired := true // bool |  (optional)
    expirationDateMasked := "expirationDateMasked_example" // string | Masked Expiration date of the credit card (optional)
    processing := "processing_example" // string |  (optional)
    swiped := true // bool |  (optional)
    userDefinedCardType := "userDefinedCardType_example" // string | Indicates the user defined credit card type if credit card type from a defined list is not provided (optional)
    invoicePaymentCardId := "invoicePaymentCardId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    invoicePaymentCardIdContext := "invoicePaymentCardIdContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    invoicePaymentCardIdType := "invoicePaymentCardIdType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    currentAuthorizedAmount := float32(8.14) // float32 | A monetary amount. (optional)
    currentAuthorizedAmountCurrencyCode := "currentAuthorizedAmountCurrencyCode_example" // string | Provides a currency code to reflect the currency in which an amount may be expressed. (optional)
    approvalAmount := float32(8.14) // float32 | A monetary amount. (optional)
    approvalAmountCurrencyCode := "approvalAmountCurrencyCode_example" // string | Provides a currency code to reflect the currency in which an amount may be expressed. (optional)
    type_ := "type__example" // string | Defines the type of Linked profiles for a block. (optional)
    addresseeProfileId := "addresseeProfileId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    addresseeProfileIdContext := "addresseeProfileIdContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    addresseeProfileType := "addresseeProfileType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    name := "name_example" // string | Name for the profile attached to the block. (optional)
    city := "city_example" // string | City for the profile attached to the block. (optional)
    phone := "phone_example" // string | Phone for the profile attached to the block. (optional)
    allowPartialTransferYn := []bool{false} // []bool | Flag to check Partail Transfer Allowed. (optional)
    printed := []bool{false} // []bool | Flag to check Invoice Statement is Printed. (optional)
    printedDate := []string{time.Now()} // []string | Invoice Statement Printed Date. (optional)
    storedFolioId := "storedFolioId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    storedFolioIdContext := "storedFolioIdContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    storedFolioType := "storedFolioType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    storedFolioName := []string{"Inner_example"} // []string | Name of the Stored Folio. (optional)
    storedDebitFolioId := "storedDebitFolioId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    storedDebitFolioIdContext := "storedDebitFolioIdContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    storedDebitFolioType := "storedDebitFolioType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    storedDebitFolioName := []string{"Inner_example"} // []string | Name of the Stored Debit Folio. (optional)
    balanceForwardDate := time.Now() // string | The date specified in this field determines the balance forward date and balance forward total that is printed on the statement. (A balance forward shows the net amount for all invoices and payments (debits and credits) prior to the balance forward date as a single total, rather than itemizing them individually on the statement.) (optional)
    inclFolios := true // bool | Flag to indicate if the associated Folios for the Invoices are to be included along with the the Statement. (optional) (default to false)
    inclPrinted := true // bool | Flag to indicate if Previousely Printed Invoices are to be included in the Statement. This is based on the Functionality for AR PRINTED INVOICES. (optional) (default to false)
    inclZero := true // bool | Flag to indicate if Zero Balances Invoices are to be included in the Statement. (optional) (default to false)
    filterEndDate := time.Now() // string | The ending value of the date range. (optional)
    filterStartDate := time.Now() // string | The starting value of the date range. (optional)
    statementText := "statementText_example" // string | Text which will be printed on the Invoice. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.AccountsReceivablesApi.GetStatements(context.Background(), accountId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).ProfileId(profileId).ProfileIdContext(profileIdContext).ProfileType(profileType).AccountNo(accountNo).AccountName(accountName).CanBeModified(canBeModified).CloseDate(closeDate).FiscalBillNo(fiscalBillNo).FolioDate(folioDate).FolioNo(folioNo).FolioStatus(folioStatus).FolioTypeName(folioTypeName).InternalFolioWindowID(internalFolioWindowID).InvoiceNo(invoiceNo).InvoiceType(invoiceType).PostingDate(postingDate).RevenueDate(revenueDate).StatementNo(statementNo).Status(status).TransferDate(transferDate).InvoiceTransactionCode(invoiceTransactionCode).TransactionDate(transactionDate).TransactionNo(transactionNo).InvoiceHotelIds(invoiceHotelIds).ReservationId(reservationId).ReservationIdContext(reservationIdContext).ReservationType(reservationType).GuestProfileId(guestProfileId).GuestProfileIdContext(guestProfileIdContext).GuestProfileType(guestProfileType).Age(age).GuestName(guestName).OriginalAmount(originalAmount).OriginalAmountCurrencyCode(originalAmountCurrencyCode).Amount(amount).CurrencyCode(currencyCode).PaymentsAmount(paymentsAmount).PaymentsCurrencyCode(paymentsCurrencyCode).BalanceAmount(balanceAmount).BalanceCurrencyCode(balanceCurrencyCode).Reference(reference).Remark(remark).Adjusted(adjusted).ParentInvoiceNo(parentInvoiceNo).Compressed(compressed).CompressedDate(compressedDate).TransferredOut(transferredOut).TransferredIn(transferredIn).MarketDescription(marketDescription).MarketHotelId(marketHotelId).MarketCode(marketCode).MarketGroup(marketGroup).RoomClassDescription(roomClassDescription).RoomClassHotelId(roomClassHotelId).RoomClassCode(roomClassCode).SourceDescription(sourceDescription).SourceHotelId(sourceHotelId).SourceCode(sourceCode).SourceGroup(sourceGroup).CashierId(cashierId).CashierName(cashierName).TransactionHotelId(transactionHotelId).PrintTrxReceipt(printTrxReceipt).AccountInvoiceTransactionCode(accountInvoiceTransactionCode).TransactionDescription(transactionDescription).TransactionGroup(transactionGroup).TransactionSubGroup(transactionSubGroup).UniversalProductCode(universalProductCode).RoutingInstructionsId(routingInstructionsId).ArticleCode(articleCode).ArticleHotelIds(articleHotelIds).Inactive(inactive).OrderSequence(orderSequence).ArticleDescription(articleDescription).TransactionCode(transactionCode).ArticleAmount(articleAmount).ArticleCurrencyCode(articleCurrencyCode).AvailableForPostIt(availableForPostIt).Color(color).ArticleUniversalProductCode(articleUniversalProductCode).AttachCreditCardToProfile(attachCreditCardToProfile).CardHolderName(cardHolderName).CardNumber(cardNumber).CardNumberLast4Digits(cardNumberLast4Digits).CardNumberMasked(cardNumberMasked).CardOrToken(cardOrToken).CardType(cardType).ExpirationDate(expirationDate).ExpirationDateExpired(expirationDateExpired).ExpirationDateMasked(expirationDateMasked).Processing(processing).Swiped(swiped).UserDefinedCardType(userDefinedCardType).InvoicePaymentCardId(invoicePaymentCardId).InvoicePaymentCardIdContext(invoicePaymentCardIdContext).InvoicePaymentCardIdType(invoicePaymentCardIdType).CurrentAuthorizedAmount(currentAuthorizedAmount).CurrentAuthorizedAmountCurrencyCode(currentAuthorizedAmountCurrencyCode).ApprovalAmount(approvalAmount).ApprovalAmountCurrencyCode(approvalAmountCurrencyCode).Type_(type_).AddresseeProfileId(addresseeProfileId).AddresseeProfileIdContext(addresseeProfileIdContext).AddresseeProfileType(addresseeProfileType).Name(name).City(city).Phone(phone).AllowPartialTransferYn(allowPartialTransferYn).Printed(printed).PrintedDate(printedDate).StoredFolioId(storedFolioId).StoredFolioIdContext(storedFolioIdContext).StoredFolioType(storedFolioType).StoredFolioName(storedFolioName).StoredDebitFolioId(storedDebitFolioId).StoredDebitFolioIdContext(storedDebitFolioIdContext).StoredDebitFolioType(storedDebitFolioType).StoredDebitFolioName(storedDebitFolioName).BalanceForwardDate(balanceForwardDate).InclFolios(inclFolios).InclPrinted(inclPrinted).InclZero(inclZero).FilterEndDate(filterEndDate).FilterStartDate(filterStartDate).StatementText(statementText).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AccountsReceivablesApi.GetStatements``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetStatements`: Statements
    fmt.Fprintf(os.Stdout, "Response from `AccountsReceivablesApi.GetStatements`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**accountId** | **string** | Unique ID of the account | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetStatementsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **hotelId** | **[]string** | Property where the AR Account exists. This is required. | 
 **profileId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **profileIdContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **profileType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **accountNo** | **[]string** | Account Number for the AR Account. | 
 **accountName** | **[]string** | Account Name for the AR Account. | 
 **canBeModified** | **[]bool** | Flag to indicate if postings or adjustments can be made to the invoice. | 
 **closeDate** | **[]string** | Close date of the invoice. | 
 **fiscalBillNo** | **[]string** | The Fiscal Bill number of this posting | 
 **folioDate** | **[]string** | Date of Folio Generation. | 
 **folioNo** | **[]float32** | Folio Number. | 
 **folioStatus** | **[]string** | The Folio Status Example: DEPOSIT folio, VOID folio or the default OK folio status. | 
 **folioTypeName** | **[]string** | The name of the Folio Type used for the Folio Number sequence. | 
 **internalFolioWindowID** | **[]string** | Internal window ID which is unique to the reservation. This ID can only be used for reference. | 
 **invoiceNo** | **[]float32** | Invoice No after the folio is generated. Same invoice number may be referred in multiple folios | 
 **invoiceType** | **[]string** |  | 
 **postingDate** | **[]string** | Posting date of the invoice. | 
 **revenueDate** | **[]string** | Revenue date ID of the invoice. | 
 **statementNo** | **[]int32** | Statementno of the invoice. | 
 **status** | **[]string** | Status of the invoice. | 
 **transferDate** | **[]string** | Transfer date of the invoice. | 
 **invoiceTransactionCode** | **[]string** | Transaction code of the invoice. | 
 **transactionDate** | **[]string** | Transaction Date of the invoice. | 
 **transactionNo** | **[]float32** | Unique Transaction Identifier of the Invoice. | 
 **invoiceHotelIds** | **[]string** | Property where the AR Account exists. This is required. | 
 **reservationId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **reservationIdContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **reservationType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **guestProfileId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **guestProfileIdContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **guestProfileType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **age** | **[]int32** | The Aging age of the invoice | 
 **guestName** | **[]string** | Name of the Guest who consumed these transactions. | 
 **originalAmount** | **float32** | A monetary amount. | 
 **originalAmountCurrencyCode** | **string** | Provides a currency code to reflect the currency in which an amount may be expressed. | 
 **amount** | **float32** | A monetary amount. | 
 **currencyCode** | **string** | Provides a currency code to reflect the currency in which an amount may be expressed. | 
 **paymentsAmount** | **float32** | A monetary amount. | 
 **paymentsCurrencyCode** | **string** | Provides a currency code to reflect the currency in which an amount may be expressed. | 
 **balanceAmount** | **float32** | A monetary amount. | 
 **balanceCurrencyCode** | **string** | Provides a currency code to reflect the currency in which an amount may be expressed. | 
 **reference** | **[]string** | User-defined posting reference. | 
 **remark** | **[]string** | User-defined posting remark. | 
 **adjusted** | **[]bool** |  | 
 **parentInvoiceNo** | **[]float32** |  | 
 **compressed** | **[]bool** |  | 
 **compressedDate** | **[]string** |  | 
 **transferredOut** | **[]bool** |  | 
 **transferredIn** | **[]bool** |  | 
 **marketDescription** | **string** |  | 
 **marketHotelId** | **string** | Property where the AR Account exists. This is required. | 
 **marketCode** | **string** |  | 
 **marketGroup** | **string** |  | 
 **roomClassDescription** | **string** |  | 
 **roomClassHotelId** | **string** | Property where the AR Account exists. This is required. | 
 **roomClassCode** | **string** |  | 
 **sourceDescription** | **string** |  | 
 **sourceHotelId** | **string** | Property where the AR Account exists. This is required. | 
 **sourceCode** | **string** |  | 
 **sourceGroup** | **string** |  | 
 **cashierId** | **float32** | Cashier Id of the Cashier. | 
 **cashierName** | **string** | Cashier Name. | 
 **transactionHotelId** | **string** | Property where the AR Account exists. This is required. | 
 **printTrxReceipt** | **bool** | Print receipt flag that tells whether the transaction receipt is to be printed or not. This is based on the transaction code. | 
 **accountInvoiceTransactionCode** | **string** | Unique identifier for the Transaction code. | 
 **transactionDescription** | **string** | Transaction codes info. | 
 **transactionGroup** | **string** | Category of the transaction code. | 
 **transactionSubGroup** | **string** | Sub category of the transaction code. | 
 **universalProductCode** | **string** | Unique Universal product code of the transaction code. | 
 **routingInstructionsId** | **float32** | This is the Routing Instruction Id attached with Reservation. It is only used for internal purpose. It should not be used by external vendor or consumer. | 
 **articleCode** | **[]string** | Unique code of the article. | 
 **articleHotelIds** | **[]string** | Property where the AR Account exists. This is required. | 
 **inactive** | **[]bool** | Indicates whether the article is inactive or not. | 
 **orderSequence** | **[]float32** | Display Order sequence. | 
 **articleDescription** | **[]string** | Description of the article. | 
 **transactionCode** | **[]string** | Transaction code to which the article belongs. | 
 **articleAmount** | **float32** | A monetary amount. | 
 **articleCurrencyCode** | **string** | Provides a currency code to reflect the currency in which an amount may be expressed. | 
 **availableForPostIt** | **bool** | Indicates whether the article is available for post it. | 
 **color** | **string** | Color configuration type. This color configuration provides a visual category of entities. | 
 **articleUniversalProductCode** | **[]string** | Unique Universal product code of the article. | 
 **attachCreditCardToProfile** | **bool** | Attach the credit card to profile. | 
 **cardHolderName** | **string** |  | 
 **cardNumber** | **string** |  | 
 **cardNumberLast4Digits** | **string** |  | 
 **cardNumberMasked** | **string** |  | 
 **cardOrToken** | **string** | Simple type for indicating if credit card number is tokenized. | 
 **cardType** | **string** | This is required for Credit Card Payment Methods. This indicates the type of Credit Card associated with this payment method. | 
 **expirationDate** | **string** | Expiration date of the credit card | 
 **expirationDateExpired** | **bool** |  | 
 **expirationDateMasked** | **string** | Masked Expiration date of the credit card | 
 **processing** | **string** |  | 
 **swiped** | **bool** |  | 
 **userDefinedCardType** | **string** | Indicates the user defined credit card type if credit card type from a defined list is not provided | 
 **invoicePaymentCardId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **invoicePaymentCardIdContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **invoicePaymentCardIdType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **currentAuthorizedAmount** | **float32** | A monetary amount. | 
 **currentAuthorizedAmountCurrencyCode** | **string** | Provides a currency code to reflect the currency in which an amount may be expressed. | 
 **approvalAmount** | **float32** | A monetary amount. | 
 **approvalAmountCurrencyCode** | **string** | Provides a currency code to reflect the currency in which an amount may be expressed. | 
 **type_** | **string** | Defines the type of Linked profiles for a block. | 
 **addresseeProfileId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **addresseeProfileIdContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **addresseeProfileType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **name** | **string** | Name for the profile attached to the block. | 
 **city** | **string** | City for the profile attached to the block. | 
 **phone** | **string** | Phone for the profile attached to the block. | 
 **allowPartialTransferYn** | **[]bool** | Flag to check Partail Transfer Allowed. | 
 **printed** | **[]bool** | Flag to check Invoice Statement is Printed. | 
 **printedDate** | **[]string** | Invoice Statement Printed Date. | 
 **storedFolioId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **storedFolioIdContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **storedFolioType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **storedFolioName** | **[]string** | Name of the Stored Folio. | 
 **storedDebitFolioId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **storedDebitFolioIdContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **storedDebitFolioType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **storedDebitFolioName** | **[]string** | Name of the Stored Debit Folio. | 
 **balanceForwardDate** | **string** | The date specified in this field determines the balance forward date and balance forward total that is printed on the statement. (A balance forward shows the net amount for all invoices and payments (debits and credits) prior to the balance forward date as a single total, rather than itemizing them individually on the statement.) | 
 **inclFolios** | **bool** | Flag to indicate if the associated Folios for the Invoices are to be included along with the the Statement. | [default to false]
 **inclPrinted** | **bool** | Flag to indicate if Previousely Printed Invoices are to be included in the Statement. This is based on the Functionality for AR PRINTED INVOICES. | [default to false]
 **inclZero** | **bool** | Flag to indicate if Zero Balances Invoices are to be included in the Statement. | [default to false]
 **filterEndDate** | **string** | The ending value of the date range. | 
 **filterStartDate** | **string** | The starting value of the date range. | 
 **statementText** | **string** | Text which will be printed on the Invoice. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Statements**](Statements.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetStatementsHistory

> StatementHistory GetStatementsHistory(ctx, accountId, profileId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AccountNo(accountNo).AccountName(accountName).DateSent(dateSent).ReportFileNameWildCard(reportFileNameWildCard).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get given profile's account receivable statements history



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/ars"
)

func main() {
    accountId := "accountId_example" // string | Unique ID of the account
    profileId := "profileId_example" // string | Unique ID of the profile
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    accountNo := "accountNo_example" // string | Account Number for the AR Account. (optional)
    accountName := "accountName_example" // string | Account Name for the AR Account. (optional)
    dateSent := time.Now() // string | History Date filter. (optional)
    reportFileNameWildCard := "reportFileNameWildCard_example" // string | Report Name wild card. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.AccountsReceivablesApi.GetStatementsHistory(context.Background(), accountId, profileId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AccountNo(accountNo).AccountName(accountName).DateSent(dateSent).ReportFileNameWildCard(reportFileNameWildCard).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AccountsReceivablesApi.GetStatementsHistory``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetStatementsHistory`: StatementHistory
    fmt.Fprintf(os.Stdout, "Response from `AccountsReceivablesApi.GetStatementsHistory`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**accountId** | **string** | Unique ID of the account | 
**profileId** | **string** | Unique ID of the profile | 
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetStatementsHistoryRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **accountNo** | **string** | Account Number for the AR Account. | 
 **accountName** | **string** | Account Name for the AR Account. | 
 **dateSent** | **string** | History Date filter. | 
 **reportFileNameWildCard** | **string** | Report Name wild card. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**StatementHistory**](StatementHistory.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostARCharges

> Status PostARCharges(ctx, accountId, profileId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ArChargesPostingCriteria(arChargesPostingCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Add charges to account receivable



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/ars"
)

func main() {
    accountId := "accountId_example" // string | Unique ID of the account
    profileId := "profileId_example" // string | Unique ID of the profile
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    arChargesPostingCriteria := *openapiclient.NewPostChargesToARRequest() // PostChargesToARRequest | Request to post charges to an existing invoice, when the functionality is available. If the invoice should not be modified or if the folio should not be modified,based on other functionalities, then the charges cannot be posted to the invoice.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.AccountsReceivablesApi.PostARCharges(context.Background(), accountId, profileId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ArChargesPostingCriteria(arChargesPostingCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AccountsReceivablesApi.PostARCharges``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostARCharges`: Status
    fmt.Fprintf(os.Stdout, "Response from `AccountsReceivablesApi.PostARCharges`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**accountId** | **string** | Unique ID of the account | 
**profileId** | **string** | Unique ID of the profile | 
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostARChargesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **arChargesPostingCriteria** | [**PostChargesToARRequest**](PostChargesToARRequest.md) | Request to post charges to an existing invoice, when the functionality is available. If the invoice should not be modified or if the folio should not be modified,based on other functionalities, then the charges cannot be posted to the invoice. | 
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


## PostAROldBalances

> Status PostAROldBalances(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ArOldBalances(arOldBalances).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Add old balances from external accounting systems



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/ars"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    arOldBalances := *openapiclient.NewPostAROldBalancesRequest() // PostAROldBalancesRequest | Request to Post AR Old Balances
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.AccountsReceivablesApi.PostAROldBalances(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ArOldBalances(arOldBalances).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AccountsReceivablesApi.PostAROldBalances``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostAROldBalances`: Status
    fmt.Fprintf(os.Stdout, "Response from `AccountsReceivablesApi.PostAROldBalances`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostAROldBalancesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **arOldBalances** | [**PostAROldBalancesRequest**](PostAROldBalancesRequest.md) | Request to Post AR Old Balances | 
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


## PostARPayments

> ArPayments PostARPayments(ctx, accountId, profileId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ArPaymentsToBeCreated(arPaymentsToBeCreated).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Add payment to an account receivable account for a list of reservations



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/ars"
)

func main() {
    accountId := "accountId_example" // string | Unique ID of the account
    profileId := "profileId_example" // string | Unique ID of the profile
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    arPaymentsToBeCreated := *openapiclient.NewPostARPaymentsRequest() // PostARPaymentsRequest | Request to post a payment to an AR Account and apply the payment to Invoices..
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.AccountsReceivablesApi.PostARPayments(context.Background(), accountId, profileId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ArPaymentsToBeCreated(arPaymentsToBeCreated).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AccountsReceivablesApi.PostARPayments``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostARPayments`: ArPayments
    fmt.Fprintf(os.Stdout, "Response from `AccountsReceivablesApi.PostARPayments`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**accountId** | **string** | Unique ID of the account | 
**profileId** | **string** | Unique ID of the profile | 
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostARPaymentsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **arPaymentsToBeCreated** | [**PostARPaymentsRequest**](PostARPaymentsRequest.md) | Request to post a payment to an AR Account and apply the payment to Invoices.. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ArPayments**](ArPayments.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostAccount

> Status PostAccount(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AccountCriteria(accountCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create an account receivable account



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/ars"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    accountCriteria := *openapiclient.NewPostAccountRequest() // PostAccountRequest | Request to create a new AR Account
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.AccountsReceivablesApi.PostAccount(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AccountCriteria(accountCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AccountsReceivablesApi.PostAccount``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostAccount`: Status
    fmt.Fprintf(os.Stdout, "Response from `AccountsReceivablesApi.PostAccount`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostAccountRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **accountCriteria** | [**PostAccountRequest**](PostAccountRequest.md) | Request to create a new AR Account | 
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


## PostAccountComment

> Status PostAccountComment(ctx, accountId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AccountComment(accountComment).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create Account Comment



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/ars"
)

func main() {
    accountId := "accountId_example" // string | Unique ID of the account
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    accountComment := *openapiclient.NewPutAccountCommentRequest() // PutAccountCommentRequest | Request to create a Comment for an Account.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.AccountsReceivablesApi.PostAccountComment(context.Background(), accountId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AccountComment(accountComment).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AccountsReceivablesApi.PostAccountComment``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostAccountComment`: Status
    fmt.Fprintf(os.Stdout, "Response from `AccountsReceivablesApi.PostAccountComment`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**accountId** | **string** | Unique ID of the account | 
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostAccountCommentRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **accountComment** | [**PutAccountCommentRequest**](PutAccountCommentRequest.md) | Request to create a Comment for an Account. | 
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


## PostAccountFixedCharge

> Status PostAccountFixedCharge(ctx, accountId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AccountFixedCharge(accountFixedCharge).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create fixed charges 



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/ars"
)

func main() {
    accountId := "accountId_example" // string | Unique ID of the account
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    accountFixedCharge := *openapiclient.NewPostAccountFixedChargeRequest() // PostAccountFixedChargeRequest | Request to create a Fixed Charge for an Account.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.AccountsReceivablesApi.PostAccountFixedCharge(context.Background(), accountId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AccountFixedCharge(accountFixedCharge).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AccountsReceivablesApi.PostAccountFixedCharge``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostAccountFixedCharge`: Status
    fmt.Fprintf(os.Stdout, "Response from `AccountsReceivablesApi.PostAccountFixedCharge`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**accountId** | **string** | Unique ID of the account | 
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostAccountFixedChargeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **accountFixedCharge** | [**PostAccountFixedChargeRequest**](PostAccountFixedChargeRequest.md) | Request to create a Fixed Charge for an Account. | 
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


## PostAccountTrace

> Status PostAccountTrace(ctx, accountId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AccountTrace(accountTrace).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Add a trace to an account receivable account



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/ars"
)

func main() {
    accountId := "accountId_example" // string | Unique ID of the account
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    accountTrace := *openapiclient.NewPutAccountTraceRequest() // PutAccountTraceRequest | Request to create a Trace for an Account.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.AccountsReceivablesApi.PostAccountTrace(context.Background(), accountId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AccountTrace(accountTrace).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AccountsReceivablesApi.PostAccountTrace``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostAccountTrace`: Status
    fmt.Fprintf(os.Stdout, "Response from `AccountsReceivablesApi.PostAccountTrace`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**accountId** | **string** | Unique ID of the account | 
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostAccountTraceRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **accountTrace** | [**PutAccountTraceRequest**](PutAccountTraceRequest.md) | Request to create a Trace for an Account. | 
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


## PostBatchCharges

> Status PostBatchCharges(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BatchChargesToPost(batchChargesToPost).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create process to charge on multiple account receivables



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/ars"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    batchChargesToPost := *openapiclient.NewPostBatchChargesRequest() // PostBatchChargesRequest | Request for posting a charge in a batch to list of accounts.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.AccountsReceivablesApi.PostBatchCharges(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BatchChargesToPost(batchChargesToPost).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AccountsReceivablesApi.PostBatchCharges``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostBatchCharges`: Status
    fmt.Fprintf(os.Stdout, "Response from `AccountsReceivablesApi.PostBatchCharges`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostBatchChargesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **batchChargesToPost** | [**PostBatchChargesRequest**](PostBatchChargesRequest.md) | Request for posting a charge in a batch to list of accounts. | 
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


## PostChargesToAR

> Status PostChargesToAR(ctx, accountId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ArChargesPostingCriteria(arChargesPostingCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Add charges to account receivable



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/ars"
)

func main() {
    accountId := "accountId_example" // string | Unique ID of the account
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    arChargesPostingCriteria := *openapiclient.NewPostChargesToARRequest() // PostChargesToARRequest | Request to post charges to an existing invoice, when the functionality is available. If the invoice should not be modified or if the folio should not be modified,based on other functionalities, then the charges cannot be posted to the invoice.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.AccountsReceivablesApi.PostChargesToAR(context.Background(), accountId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ArChargesPostingCriteria(arChargesPostingCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AccountsReceivablesApi.PostChargesToAR``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostChargesToAR`: Status
    fmt.Fprintf(os.Stdout, "Response from `AccountsReceivablesApi.PostChargesToAR`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**accountId** | **string** | Unique ID of the account | 
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostChargesToARRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **arChargesPostingCriteria** | [**PostChargesToARRequest**](PostChargesToARRequest.md) | Request to post charges to an existing invoice, when the functionality is available. If the invoice should not be modified or if the folio should not be modified,based on other functionalities, then the charges cannot be posted to the invoice. | 
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


## PostCreditToInvoices

> Status PostCreditToInvoices(ctx, accountId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CreditToInvoices(creditToInvoices).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Add credits to AR invoices



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/ars"
)

func main() {
    accountId := "accountId_example" // string | Unique ID of the account
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    creditToInvoices := *openapiclient.NewPostCreditToInvoicesRequest() // PostCreditToInvoicesRequest | 
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.AccountsReceivablesApi.PostCreditToInvoices(context.Background(), accountId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CreditToInvoices(creditToInvoices).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AccountsReceivablesApi.PostCreditToInvoices``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostCreditToInvoices`: Status
    fmt.Fprintf(os.Stdout, "Response from `AccountsReceivablesApi.PostCreditToInvoices`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**accountId** | **string** | Unique ID of the account | 
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostCreditToInvoicesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **creditToInvoices** | [**PostCreditToInvoicesRequest**](PostCreditToInvoicesRequest.md) |  | 
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


## PostInvoice

> ArInvoiceDetails PostInvoice(ctx, accountId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ArInvoice(arInvoice).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create account receivable invoices



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/ars"
)

func main() {
    accountId := "accountId_example" // string | Unique ID of the account
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    arInvoice := *openapiclient.NewPostInvoiceRequest() // PostInvoiceRequest | Request to create a new Invoice for an Account.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.AccountsReceivablesApi.PostInvoice(context.Background(), accountId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ArInvoice(arInvoice).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AccountsReceivablesApi.PostInvoice``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostInvoice`: ArInvoiceDetails
    fmt.Fprintf(os.Stdout, "Response from `AccountsReceivablesApi.PostInvoice`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**accountId** | **string** | Unique ID of the account | 
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostInvoiceRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **arInvoice** | [**PostInvoiceRequest**](PostInvoiceRequest.md) | Request to create a new Invoice for an Account. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ArInvoiceDetails**](ArInvoiceDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostReminders

> Status PostReminders(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Reminders(reminders).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Generate reminders



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/ars"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    reminders := *openapiclient.NewPostRemindersRequest() // PostRemindersRequest | Request to update the reminder information on an Account. After the letter has been generated and sent, the account and the invoices will be updated with the Reminder Cycle information. This is done so that the next cycle of Reminder Letters c can be generated correctly.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.AccountsReceivablesApi.PostReminders(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Reminders(reminders).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AccountsReceivablesApi.PostReminders``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostReminders`: Status
    fmt.Fprintf(os.Stdout, "Response from `AccountsReceivablesApi.PostReminders`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostRemindersRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **reminders** | [**PostRemindersRequest**](PostRemindersRequest.md) | Request to update the reminder information on an Account. After the letter has been generated and sent, the account and the invoices will be updated with the Reminder Cycle information. This is done so that the next cycle of Reminder Letters c can be generated correctly. | 
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


## PostReversePayment

> Status PostReversePayment(ctx, transactionId, accountId, profileId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ReversePayment(reversePayment).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Reverse Payment



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/ars"
)

func main() {
    transactionId := "transactionId_example" // string | Unique ID of the transaction
    accountId := "accountId_example" // string | Unique ID of the account
    profileId := "profileId_example" // string | Unique ID of the profile
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    reversePayment := *openapiclient.NewPostReversePaymentRequest() // PostReversePaymentRequest | Request for reverse AR payment
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.AccountsReceivablesApi.PostReversePayment(context.Background(), transactionId, accountId, profileId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ReversePayment(reversePayment).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AccountsReceivablesApi.PostReversePayment``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostReversePayment`: Status
    fmt.Fprintf(os.Stdout, "Response from `AccountsReceivablesApi.PostReversePayment`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**transactionId** | **string** | Unique ID of the transaction | 
**accountId** | **string** | Unique ID of the account | 
**profileId** | **string** | Unique ID of the profile | 
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostReversePaymentRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------




 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **reversePayment** | [**PostReversePaymentRequest**](PostReversePaymentRequest.md) | Request for reverse AR payment | 
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


## PostStatements

> Status PostStatements(ctx, accountId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).StatementsToBeGenerated(statementsToBeGenerated).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Generate a statement for a given account receivable



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/ars"
)

func main() {
    accountId := "accountId_example" // string | Unique ID of the account
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    statementsToBeGenerated := *openapiclient.NewPostStatementsRequest() // PostStatementsRequest | Operation to generate AR Statements. This will validate and check if there exists any invoices to be included in the Statement based on the criteria used. If Statement Numbering is used, this will return a statement number to use in report as well as report sequence id to identify statement's invoices.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.AccountsReceivablesApi.PostStatements(context.Background(), accountId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).StatementsToBeGenerated(statementsToBeGenerated).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AccountsReceivablesApi.PostStatements``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostStatements`: Status
    fmt.Fprintf(os.Stdout, "Response from `AccountsReceivablesApi.PostStatements`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**accountId** | **string** | Unique ID of the account | 
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostStatementsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **statementsToBeGenerated** | [**PostStatementsRequest**](PostStatementsRequest.md) | Operation to generate AR Statements. This will validate and check if there exists any invoices to be included in the Statement based on the criteria used. If Statement Numbering is used, this will return a statement number to use in report as well as report sequence id to identify statement&#39;s invoices. | 
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


## PutARInvoicesAccount

> Status PutARInvoicesAccount(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ArInvoicesAccount(arInvoicesAccount).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change Account receivable invoice for an AR account



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/ars"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    arInvoicesAccount := *openapiclient.NewPutARInvoicesAccountRequest() // PutARInvoicesAccountRequest | Request to change AR invoice(s) account in AR.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.AccountsReceivablesApi.PutARInvoicesAccount(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ArInvoicesAccount(arInvoicesAccount).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AccountsReceivablesApi.PutARInvoicesAccount``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutARInvoicesAccount`: Status
    fmt.Fprintf(os.Stdout, "Response from `AccountsReceivablesApi.PutARInvoicesAccount`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPutARInvoicesAccountRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **arInvoicesAccount** | [**PutARInvoicesAccountRequest**](PutARInvoicesAccountRequest.md) | Request to change AR invoice(s) account in AR. | 
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


## PutAccount

> Status PutAccount(ctx, accountId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Account(account).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Update a account receivable account



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/ars"
)

func main() {
    accountId := "accountId_example" // string | Unique ID of the account
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    account := *openapiclient.NewPutAccountRequest() // PutAccountRequest | Request to change and existing AR Account. The Account No, Credit Limit, Address, Email, Telephone information, Permanent Flag, Primary Account Flag, Contact Name are the details that can be changed on an existing account.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.AccountsReceivablesApi.PutAccount(context.Background(), accountId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Account(account).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AccountsReceivablesApi.PutAccount``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutAccount`: Status
    fmt.Fprintf(os.Stdout, "Response from `AccountsReceivablesApi.PutAccount`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**accountId** | **string** | Unique ID of the account | 
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutAccountRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **account** | [**PutAccountRequest**](PutAccountRequest.md) | Request to change and existing AR Account. The Account No, Credit Limit, Address, Email, Telephone information, Permanent Flag, Primary Account Flag, Contact Name are the details that can be changed on an existing account. | 
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


## PutAccountComment

> Status PutAccountComment(ctx, accountId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AccountComment(accountComment).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change Account Comment



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/ars"
)

func main() {
    accountId := "accountId_example" // string | Unique ID of the account
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    accountComment := *openapiclient.NewPutAccountCommentRequest() // PutAccountCommentRequest | Request to Change the Comment on an Account.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.AccountsReceivablesApi.PutAccountComment(context.Background(), accountId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AccountComment(accountComment).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AccountsReceivablesApi.PutAccountComment``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutAccountComment`: Status
    fmt.Fprintf(os.Stdout, "Response from `AccountsReceivablesApi.PutAccountComment`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**accountId** | **string** | Unique ID of the account | 
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutAccountCommentRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **accountComment** | [**PutAccountCommentRequest**](PutAccountCommentRequest.md) | Request to Change the Comment on an Account. | 
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


## PutAccountFixedCharge

> Status PutAccountFixedCharge(ctx, fixedChargeId, accountId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AccountFixedCharge(accountFixedCharge).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Update fixed charge detail 



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/ars"
)

func main() {
    fixedChargeId := "fixedChargeId_example" // string | ID of the fixed charge
    accountId := "accountId_example" // string | Unique ID of the account
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    accountFixedCharge := *openapiclient.NewPostAccountFixedChargeRequest() // PostAccountFixedChargeRequest | Request to Change the Fixed Charge on an Account.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.AccountsReceivablesApi.PutAccountFixedCharge(context.Background(), fixedChargeId, accountId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AccountFixedCharge(accountFixedCharge).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AccountsReceivablesApi.PutAccountFixedCharge``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutAccountFixedCharge`: Status
    fmt.Fprintf(os.Stdout, "Response from `AccountsReceivablesApi.PutAccountFixedCharge`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**fixedChargeId** | **string** | ID of the fixed charge | 
**accountId** | **string** | Unique ID of the account | 
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutAccountFixedChargeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **accountFixedCharge** | [**PostAccountFixedChargeRequest**](PostAccountFixedChargeRequest.md) | Request to Change the Fixed Charge on an Account. | 
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


## PutAccountTrace

> Status PutAccountTrace(ctx, accountId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AccountTrace(accountTrace).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

This API facilitates modification of account traces.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/ars"
)

func main() {
    accountId := "accountId_example" // string | Unique ID of the account
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    accountTrace := *openapiclient.NewPutAccountTraceRequest() // PutAccountTraceRequest | Request to Change the Trace on an Account.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.AccountsReceivablesApi.PutAccountTrace(context.Background(), accountId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AccountTrace(accountTrace).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AccountsReceivablesApi.PutAccountTrace``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutAccountTrace`: Status
    fmt.Fprintf(os.Stdout, "Response from `AccountsReceivablesApi.PutAccountTrace`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**accountId** | **string** | Unique ID of the account | 
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutAccountTraceRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **accountTrace** | [**PutAccountTraceRequest**](PutAccountTraceRequest.md) | Request to Change the Trace on an Account. | 
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


## PutInvoice

> Status PutInvoice(ctx, invoiceId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Invoice(invoice).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Update invoice detail.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/ars"
)

func main() {
    invoiceId := "invoiceId_example" // string | Unique ID of the invoice
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    invoice := *openapiclient.NewUncompressARInvoicesRequest() // UncompressARInvoicesRequest | Response to the request to change invoice
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.AccountsReceivablesApi.PutInvoice(context.Background(), invoiceId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Invoice(invoice).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AccountsReceivablesApi.PutInvoice``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutInvoice`: Status
    fmt.Fprintf(os.Stdout, "Response from `AccountsReceivablesApi.PutInvoice`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**invoiceId** | **string** | Unique ID of the invoice | 
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutInvoiceRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **invoice** | [**UncompressARInvoicesRequest**](UncompressARInvoicesRequest.md) | Response to the request to change invoice | 
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


## PutInvoiceDetails

> Status PutInvoiceDetails(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Invoice(invoice).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Update invoice detail.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/ars"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    invoice := *openapiclient.NewUncompressARInvoicesRequest() // UncompressARInvoicesRequest | Response to the request to change invoice
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.AccountsReceivablesApi.PutInvoiceDetails(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Invoice(invoice).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AccountsReceivablesApi.PutInvoiceDetails``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutInvoiceDetails`: Status
    fmt.Fprintf(os.Stdout, "Response from `AccountsReceivablesApi.PutInvoiceDetails`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutInvoiceDetailsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **invoice** | [**UncompressARInvoicesRequest**](UncompressARInvoicesRequest.md) | Response to the request to change invoice | 
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


## PutInvoices

> Status PutInvoices(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Invoices(invoices).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Close account receivable invoices



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/ars"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    invoices := *openapiclient.NewPutInvoicesRequest() // PutInvoicesRequest | Request to close invoice(s)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.AccountsReceivablesApi.PutInvoices(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Invoices(invoices).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AccountsReceivablesApi.PutInvoices``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutInvoices`: Status
    fmt.Fprintf(os.Stdout, "Response from `AccountsReceivablesApi.PutInvoices`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPutInvoicesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **invoices** | [**PutInvoicesRequest**](PutInvoicesRequest.md) | Request to close invoice(s) | 
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


## RemovePaymentsFromInvoice

> Status RemovePaymentsFromInvoice(ctx, transactionId, hotelId).TrxNo(trxNo).AccountId(accountId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CashierID(cashierID).InvoiceNo(invoiceNo).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete payments from invoice



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/ars"
)

func main() {
    transactionId := "transactionId_example" // string | Unique ID of the transaction
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    trxNo := []float32{float32(123)} // []float32 | Unique Transaction Identifier of the Payment.
    accountId := "accountId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    cashierID := float32(8.14) // float32 | The Cashier ID of the Cashier who is currently processing the transaction(s). (optional)
    invoiceNo := float32(8.14) // float32 | Invoice No after the folio is generated. Same invoice number may be referred in multiple folios (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.AccountsReceivablesApi.RemovePaymentsFromInvoice(context.Background(), transactionId, hotelId).TrxNo(trxNo).AccountId(accountId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CashierID(cashierID).InvoiceNo(invoiceNo).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AccountsReceivablesApi.RemovePaymentsFromInvoice``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `RemovePaymentsFromInvoice`: Status
    fmt.Fprintf(os.Stdout, "Response from `AccountsReceivablesApi.RemovePaymentsFromInvoice`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**transactionId** | **string** | Unique ID of the transaction | 
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiRemovePaymentsFromInvoiceRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **trxNo** | **[]float32** | Unique Transaction Identifier of the Payment. | 
 **accountId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **cashierID** | **float32** | The Cashier ID of the Cashier who is currently processing the transaction(s). | 
 **invoiceNo** | **float32** | Invoice No after the folio is generated. Same invoice number may be referred in multiple folios | 
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


## ReopenInvoices

> Status ReopenInvoices(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Invoices(invoices).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Reopen account receivable closed invoice



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/ars"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    invoices := *openapiclient.NewPutInvoicesRequest() // PutInvoicesRequest | Request to re-open closed invoice(s)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.AccountsReceivablesApi.ReopenInvoices(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Invoices(invoices).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AccountsReceivablesApi.ReopenInvoices``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ReopenInvoices`: Status
    fmt.Fprintf(os.Stdout, "Response from `AccountsReceivablesApi.ReopenInvoices`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiReopenInvoicesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **invoices** | [**PutInvoicesRequest**](PutInvoicesRequest.md) | Request to re-open closed invoice(s) | 
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


## TransferARCreditCardPayments

> Status TransferARCreditCardPayments(ctx, accountId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ArCreditCardPaymentsToTransfer(arCreditCardPaymentsToTransfer).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Move credit card payment to account receivable



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/ars"
)

func main() {
    accountId := "accountId_example" // string | Unique ID of the account
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    arCreditCardPaymentsToTransfer := *openapiclient.NewTransferARCreditCardPaymentsRequest() // TransferARCreditCardPaymentsRequest | Request to transfer AR Credit Card payments.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.AccountsReceivablesApi.TransferARCreditCardPayments(context.Background(), accountId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ArCreditCardPaymentsToTransfer(arCreditCardPaymentsToTransfer).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AccountsReceivablesApi.TransferARCreditCardPayments``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `TransferARCreditCardPayments`: Status
    fmt.Fprintf(os.Stdout, "Response from `AccountsReceivablesApi.TransferARCreditCardPayments`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**accountId** | **string** | Unique ID of the account | 
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiTransferARCreditCardPaymentsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **arCreditCardPaymentsToTransfer** | [**TransferARCreditCardPaymentsRequest**](TransferARCreditCardPaymentsRequest.md) | Request to transfer AR Credit Card payments. | 
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


## TransferDirectBillsToAr

> Status TransferDirectBillsToAr(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TransferDirectBillsToAr(transferDirectBillsToAr).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Move direct bills to account receivable



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/ars"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    transferDirectBillsToAr := *openapiclient.NewTransferDirectBillsToArRequest() // TransferDirectBillsToArRequest | Request for Transfer Directs bill to AR.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.AccountsReceivablesApi.TransferDirectBillsToAr(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TransferDirectBillsToAr(transferDirectBillsToAr).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AccountsReceivablesApi.TransferDirectBillsToAr``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `TransferDirectBillsToAr`: Status
    fmt.Fprintf(os.Stdout, "Response from `AccountsReceivablesApi.TransferDirectBillsToAr`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiTransferDirectBillsToArRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **transferDirectBillsToAr** | [**TransferDirectBillsToArRequest**](TransferDirectBillsToArRequest.md) | Request for Transfer Directs bill to AR. | 
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


## TransferInvoicesAndPayments

> Status TransferInvoicesAndPayments(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).InvoicesAndPaymentsToTransfer(invoicesAndPaymentsToTransfer).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Move an invoice or a payment to another AR account



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/ars"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    invoicesAndPaymentsToTransfer := *openapiclient.NewTransferInvoicesAndPaymentsRequest() // TransferInvoicesAndPaymentsRequest | Request for transferring invoice(s) in AR.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.AccountsReceivablesApi.TransferInvoicesAndPayments(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).InvoicesAndPaymentsToTransfer(invoicesAndPaymentsToTransfer).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AccountsReceivablesApi.TransferInvoicesAndPayments``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `TransferInvoicesAndPayments`: Status
    fmt.Fprintf(os.Stdout, "Response from `AccountsReceivablesApi.TransferInvoicesAndPayments`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiTransferInvoicesAndPaymentsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **invoicesAndPaymentsToTransfer** | [**TransferInvoicesAndPaymentsRequest**](TransferInvoicesAndPaymentsRequest.md) | Request for transferring invoice(s) in AR. | 
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


## TransferPostings

> Status TransferPostings(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TransferPostings(transferPostings).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Transfer postings



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/ars"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    transferPostings := *openapiclient.NewTransferPostingsRequest() // TransferPostingsRequest | Request for transferring invoice posting(s)in AR.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.AccountsReceivablesApi.TransferPostings(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TransferPostings(transferPostings).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AccountsReceivablesApi.TransferPostings``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `TransferPostings`: Status
    fmt.Fprintf(os.Stdout, "Response from `AccountsReceivablesApi.TransferPostings`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiTransferPostingsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **transferPostings** | [**TransferPostingsRequest**](TransferPostingsRequest.md) | Request for transferring invoice posting(s)in AR. | 
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


## UncompressARInvoices

> Status UncompressARInvoices(ctx, accountId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Invoice(invoice).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Reverse the compressing invoice process



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/ars"
)

func main() {
    accountId := "accountId_example" // string | Unique ID of the account
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    invoice := *openapiclient.NewUncompressARInvoicesRequest() // UncompressARInvoicesRequest | Request to uncompress a compressed(Parent) Invoice
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.AccountsReceivablesApi.UncompressARInvoices(context.Background(), accountId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Invoice(invoice).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AccountsReceivablesApi.UncompressARInvoices``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UncompressARInvoices`: Status
    fmt.Fprintf(os.Stdout, "Response from `AccountsReceivablesApi.UncompressARInvoices`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**accountId** | **string** | Unique ID of the account | 
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiUncompressARInvoicesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **invoice** | [**UncompressARInvoicesRequest**](UncompressARInvoicesRequest.md) | Request to uncompress a compressed(Parent) Invoice | 
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


## UnlinkInvoiceFromStatement

> Status UnlinkInvoiceFromStatement(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).UnlinkInvoiceFromStatement(unlinkInvoiceFromStatement).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Unlink invoices from a statement



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/ars"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    unlinkInvoiceFromStatement := *openapiclient.NewUnlinkInvoiceFromStatementRequest() // UnlinkInvoiceFromStatementRequest | Request to unlink invoice from statement
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.AccountsReceivablesApi.UnlinkInvoiceFromStatement(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).UnlinkInvoiceFromStatement(unlinkInvoiceFromStatement).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AccountsReceivablesApi.UnlinkInvoiceFromStatement``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UnlinkInvoiceFromStatement`: Status
    fmt.Fprintf(os.Stdout, "Response from `AccountsReceivablesApi.UnlinkInvoiceFromStatement`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiUnlinkInvoiceFromStatementRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **unlinkInvoiceFromStatement** | [**UnlinkInvoiceFromStatementRequest**](UnlinkInvoiceFromStatementRequest.md) | Request to unlink invoice from statement | 
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


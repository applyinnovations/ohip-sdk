# \AccountsReceivablesApi

All URIs are relative to */ars/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CopyARAccount**](AccountsReceivablesApi.md#CopyARAccount) | **Post** /hotels/{hotelId}/accounts/{accountId}/copyAccount | Copy account receivable account 
[**GetARTransactions**](AccountsReceivablesApi.md#GetARTransactions) | **Get** /arTransactions | Get AR transactions.
[**GetAccounts**](AccountsReceivablesApi.md#GetAccounts) | **Get** /accounts | Get given profile&#39;s account receivable detail
[**GetInvoicesPayments**](AccountsReceivablesApi.md#GetInvoicesPayments) | **Get** /invoicePayments/accounts/{accountId} | Get payment detail for account&#39;s invoices
[**PostAccount**](AccountsReceivablesApi.md#PostAccount) | **Post** /hotels/{hotelId}/accounts | Create an account receivable account
[**PutAccount**](AccountsReceivablesApi.md#PutAccount) | **Put** /hotels/{hotelId}/accounts/{accountId} | Update a account receivable account



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
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    arAccountCopy := *openapiclient.NewCopyARAccountRequest() // CopyARAccountRequest | Request to copy AR Account
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
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
 **xAppKey** | **string** | Client or Partner’s Application Key | 
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
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
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
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
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
 **xAppKey** | **string** | Client or Partner’s Application Key | 
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
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
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
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
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
 **xAppKey** | **string** | Client or Partner’s Application Key | 
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
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
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
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
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
 **xAppKey** | **string** | Client or Partner’s Application Key | 
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
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    accountCriteria := *openapiclient.NewPostAccountRequest() // PostAccountRequest | Request to create a new AR Account
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
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
 **xAppKey** | **string** | Client or Partner’s Application Key | 
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
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    account := *openapiclient.NewPutAccountRequest() // PutAccountRequest | Request to change and existing AR Account. The Account No, Credit Limit, Address, Email, Telephone information, Permanent Flag, Primary Account Flag, Contact Name are the details that can be changed on an existing account.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
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
 **xAppKey** | **string** | Client or Partner’s Application Key | 
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


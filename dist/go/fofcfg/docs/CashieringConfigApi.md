# \CashieringConfigApi

All URIs are relative to */fof/config/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CalculatePosting**](CashieringConfigApi.md#CalculatePosting) | **Get** /hotels/{hotelId}/transactionCodes/{transactionCode}/chargeSimulations | Operation to CalculatePosting.
[**ChangeCompTypes**](CashieringConfigApi.md#ChangeCompTypes) | **Put** /compTypes | Operation to Change Comp Types.
[**ChangeFolioTypeLegendMappingConfig**](CashieringConfigApi.md#ChangeFolioTypeLegendMappingConfig) | **Put** /folioTypeLegendMappings | Operation to change folio type legend mappings config.
[**DeleteAdjustmentCodes**](CashieringConfigApi.md#DeleteAdjustmentCodes) | **Delete** /hotelAdjustmentCodes | Operation to delete AdjustmentCodes.
[**DeleteArticles**](CashieringConfigApi.md#DeleteArticles) | **Delete** /articles | Operation to delete Articles.
[**DeleteAuthorizationConfigRule**](CashieringConfigApi.md#DeleteAuthorizationConfigRule) | **Delete** /authorizationConfigRule | Operation to delete AuthorizationConfigRule.
[**DeleteAuthorizerGroups**](CashieringConfigApi.md#DeleteAuthorizerGroups) | **Delete** /authorizerGroups | Operation to delete AuthorizerGroups.
[**DeleteCurrencyExchangeServiceTaxes**](CashieringConfigApi.md#DeleteCurrencyExchangeServiceTaxes) | **Delete** /currencyExchangeServiceTaxes | Operation to delete CurrencyExchangeServiceTaxes.
[**DeleteExpenseArrangementCodes**](CashieringConfigApi.md#DeleteExpenseArrangementCodes) | **Delete** /expenseArrangementCodes | Operation to delete ExpenseArrangementCodes.
[**DeleteFiscalFolioParameters**](CashieringConfigApi.md#DeleteFiscalFolioParameters) | **Delete** /fiscalFolioParameters | Operation to delete FiscalFolioParameters.
[**GetAdjustmentCodes**](CashieringConfigApi.md#GetAdjustmentCodes) | **Get** /hotelAdjustmentCodes | Operation to fetch AdjustmentCodes.
[**GetArticles**](CashieringConfigApi.md#GetArticles) | **Get** /articles | Get articles
[**GetAuthorizerGroups**](CashieringConfigApi.md#GetAuthorizerGroups) | **Get** /authorizerGroups | Operation to fetch AuthorizerGroups.
[**GetAvailableCashierNumber**](CashieringConfigApi.md#GetAvailableCashierNumber) | **Get** /cashiers/nextAvailable | Operation to fetch AvailableCashierNumber.
[**GetCashiers**](CashieringConfigApi.md#GetCashiers) | **Get** /cashierDetails/cashiers | Get cashiers
[**GetCompTypes**](CashieringConfigApi.md#GetCompTypes) | **Get** /hotels/{hotelId}/compTypes | Operation to Fetch Comp Types.
[**GetCurrencyExchangeServiceTaxes**](CashieringConfigApi.md#GetCurrencyExchangeServiceTaxes) | **Get** /currencyExchangeServiceTaxes | Operation to fetch CurrencyExchangeServiceTaxes.
[**GetDailyPlanCodes**](CashieringConfigApi.md#GetDailyPlanCodes) | **Get** /dailyPlanCodes | Operation to fetch DailyPlanCodes.
[**GetExpenseArrangementCodes**](CashieringConfigApi.md#GetExpenseArrangementCodes) | **Get** /expenseArrangementCodes | Operation to fetch ExpenseArrangementCodes.
[**GetFiscalFolioParameters**](CashieringConfigApi.md#GetFiscalFolioParameters) | **Get** /fiscalFolioParameters | Operation to fetch FiscalFolioParameters.
[**GetFolioTypeLegendMappingsConfig**](CashieringConfigApi.md#GetFolioTypeLegendMappingsConfig) | **Get** /folioTypeLegendMappings | Operation to fetch folio type legend mappings config.
[**GetFuturePastExchangeRates**](CashieringConfigApi.md#GetFuturePastExchangeRates) | **Get** /hotels/{hotelId}/exchangeRates/{currencyCode} | Operation to fetch FuturePastExchangeRates.
[**GetOperaControlSequences**](CashieringConfigApi.md#GetOperaControlSequences) | **Get** /operaControlSequences | Operation to fetch OperaControlSequences.
[**GetPaymentMethods**](CashieringConfigApi.md#GetPaymentMethods) | **Get** /hotelPaymentMethods | Operation to fetch PaymentMethods.
[**GetRevenueBucketCodes**](CashieringConfigApi.md#GetRevenueBucketCodes) | **Get** /revenueBucketCodes | Operation to fetch RevenueBucketCodes.
[**GetRoutingInstructions**](CashieringConfigApi.md#GetRoutingInstructions) | **Get** /routingInstructions | Get routing instructions
[**GetTaxTypes**](CashieringConfigApi.md#GetTaxTypes) | **Get** /hotelTaxTypes | Operation to fetch TaxTypes.
[**GetTemplateTransactionCodes**](CashieringConfigApi.md#GetTemplateTransactionCodes) | **Get** /templateTransactionCodes | Get template transaction codes
[**GetTemplateTransactionGroups**](CashieringConfigApi.md#GetTemplateTransactionGroups) | **Get** /templateTransactionGroups | Operation to fetch TemplateTransactionGroups.
[**GetTemplateTransactionSubgroups**](CashieringConfigApi.md#GetTemplateTransactionSubgroups) | **Get** /templateTransactionSubGroups | Operation to fetch TemplateTransactionSubgroups.
[**GetTransactionCode**](CashieringConfigApi.md#GetTransactionCode) | **Get** /hotels/{hotelId}/transactionCodes/{transactionCode}/hotelTransactionCode | Get transaction codes
[**GetTransactionCodes**](CashieringConfigApi.md#GetTransactionCodes) | **Get** /transactionCodes | Operation to fetch TransactionCodes.
[**GetTransactionGroups**](CashieringConfigApi.md#GetTransactionGroups) | **Get** /transactionGroups | Operation to fetch TransactionGroups.
[**GetTransactionSubgroups**](CashieringConfigApi.md#GetTransactionSubgroups) | **Get** /transactionSubGroups | Operation to fetch TransactionSubgroups.
[**PostAdjustmentCodes**](CashieringConfigApi.md#PostAdjustmentCodes) | **Post** /hotelAdjustmentCodes | Operation to create AdjustmentCodes.
[**PostArticles**](CashieringConfigApi.md#PostArticles) | **Post** /articles | Operation to create Articles.
[**PostAuthorizationConfigRule**](CashieringConfigApi.md#PostAuthorizationConfigRule) | **Post** /authorizationConfigRule | Operation to create AuthorizationConfigRule.
[**PostAuthorizerGroups**](CashieringConfigApi.md#PostAuthorizerGroups) | **Post** /authorizerGroups | Operation to create AuthorizerGroups.
[**PostCashiers**](CashieringConfigApi.md#PostCashiers) | **Post** /cashiers | Operation to create Cashiers.
[**PostCompTypes**](CashieringConfigApi.md#PostCompTypes) | **Post** /compTypes | Operation to Create Comp Types
[**PostCurrencyExchangeServiceTaxes**](CashieringConfigApi.md#PostCurrencyExchangeServiceTaxes) | **Post** /currencyExchangeServiceTaxes | Operation to create CurrencyExchangeServiceTaxes.
[**PostExpenseArrangementCodes**](CashieringConfigApi.md#PostExpenseArrangementCodes) | **Post** /expenseArrangementCodes | Operation to create ExpenseArrangementCodes.
[**PostFolioTypeLegendMappingConfig**](CashieringConfigApi.md#PostFolioTypeLegendMappingConfig) | **Post** /folioTypeLegendMappings | Operation to create folio type legend mappings config.
[**PostTemplateTransactionCodes**](CashieringConfigApi.md#PostTemplateTransactionCodes) | **Post** /templateTransactionCodes | Post template transaction codes
[**PostTemplateTransactionSubgroups**](CashieringConfigApi.md#PostTemplateTransactionSubgroups) | **Post** /templateTransactionSubGroups | Operation to create TemplateTransactionSubgroups.
[**PostTransactionCodes**](CashieringConfigApi.md#PostTransactionCodes) | **Post** /transactionCodes | Post transaction codes
[**PostTransactionGenerates**](CashieringConfigApi.md#PostTransactionGenerates) | **Post** /generates | Post transaction generates
[**PostTransactionGroups**](CashieringConfigApi.md#PostTransactionGroups) | **Post** /transactionGroups | Operation to create TransactionGroups.
[**PutAdjustmentCodes**](CashieringConfigApi.md#PutAdjustmentCodes) | **Put** /hotelAdjustmentCodes | Operation to change AdjustmentCodes.
[**PutArticles**](CashieringConfigApi.md#PutArticles) | **Put** /articles | Operation to change Articles.
[**PutAuthorizationConfigRule**](CashieringConfigApi.md#PutAuthorizationConfigRule) | **Put** /authorizationConfigRule | Operation to change AuthorizationConfigRule.
[**PutAuthorizerGroups**](CashieringConfigApi.md#PutAuthorizerGroups) | **Put** /authorizerGroups | Operation to change AuthorizerGroups.
[**PutCashiers**](CashieringConfigApi.md#PutCashiers) | **Put** /cashiers | Operation to change CashiersDetails.
[**PutCurrencyExchangeServiceTaxes**](CashieringConfigApi.md#PutCurrencyExchangeServiceTaxes) | **Put** /currencyExchangeServiceTaxes | Operation to change ExchangeServiceTaxes.
[**PutDailyPlanCodes**](CashieringConfigApi.md#PutDailyPlanCodes) | **Put** /dailyPlanCodes | Operation to change DailyPlanCodes.
[**PutExpenseArrangementCodes**](CashieringConfigApi.md#PutExpenseArrangementCodes) | **Put** /expenseArrangementCodes | Operation to change ExpenseArrangementCodes.
[**PutFiscalFolioParameters**](CashieringConfigApi.md#PutFiscalFolioParameters) | **Put** /fiscalFolioParameters | Operation to change FiscalFolioParameters.
[**PutTemplateTransactionCodes**](CashieringConfigApi.md#PutTemplateTransactionCodes) | **Put** /templateTransactionCodes | Operation to change TemplateTransactionCodes.
[**PutTransactionCodes**](CashieringConfigApi.md#PutTransactionCodes) | **Put** /transactionCodes | Put transaction codes
[**RemoveCompTypes**](CashieringConfigApi.md#RemoveCompTypes) | **Delete** /compTypes/codes/{compTypesCode} | Operation to Remove Comp Types.
[**RemoveFolioTypeLegendMappingConfig**](CashieringConfigApi.md#RemoveFolioTypeLegendMappingConfig) | **Delete** /hotels/{hotelId}/folios/{folioType}/legends/{legendCode} | Operation to remove folio type legend mappings config.



## CalculatePosting

> CalculatedPosting CalculatePosting(ctx, transactionCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).PostingAmount(postingAmount).TaxType(taxType).GuestBalance(guestBalance).RoomType(roomType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to CalculatePosting.



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
    transactionCode := "transactionCode_example" // string | Transaction Code in OPERA
    hotelId := "hotelId_example" // string | Unique ID of the hotel in OPERA
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    postingAmount := float32(299) // float32 | Base amount to test for posting. (optional)
    taxType := "taxType_example" // string | Specify this criteria if calculation is based on the tax type. (optional)
    guestBalance := float32(299) // float32 | Specify this criteria if calculation is based on the guest balance. (optional)
    roomType := "STD" // string | Specify this criteria if calculation is based on room type. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.CalculatePosting(context.Background(), transactionCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).PostingAmount(postingAmount).TaxType(taxType).GuestBalance(guestBalance).RoomType(roomType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.CalculatePosting``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CalculatePosting`: CalculatedPosting
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.CalculatePosting`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**transactionCode** | **string** | Transaction Code in OPERA | 
**hotelId** | **string** | Unique ID of the hotel in OPERA | 

### Other Parameters

Other parameters are passed through a pointer to a apiCalculatePostingRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **postingAmount** | **float32** | Base amount to test for posting. | 
 **taxType** | **string** | Specify this criteria if calculation is based on the tax type. | 
 **guestBalance** | **float32** | Specify this criteria if calculation is based on the guest balance. | 
 **roomType** | **string** | Specify this criteria if calculation is based on room type. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**CalculatedPosting**](CalculatedPosting.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ChangeCompTypes

> CompTypesStatus ChangeCompTypes(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CompTypesToBeChanged(compTypesToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to Change Comp Types.



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
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    compTypesToBeChanged := *openapiclient.NewChangeCompTypesRequest() // ChangeCompTypesRequest | Request object for changing Comp Types.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.ChangeCompTypes(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CompTypesToBeChanged(compTypesToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.ChangeCompTypes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ChangeCompTypes`: CompTypesStatus
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.ChangeCompTypes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiChangeCompTypesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **compTypesToBeChanged** | [**ChangeCompTypesRequest**](ChangeCompTypesRequest.md) | Request object for changing Comp Types. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**CompTypesStatus**](CompTypesStatus.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ChangeFolioTypeLegendMappingConfig

> FolioTypeLegendMappingConfigStatus ChangeFolioTypeLegendMappingConfig(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FolioTypeLegendMappingConfigToBeChanged(folioTypeLegendMappingConfigToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to change folio type legend mappings config.



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
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    folioTypeLegendMappingConfigToBeChanged := *openapiclient.NewChangeFolioTypeLegendMappingConfigRequest() // ChangeFolioTypeLegendMappingConfigRequest | Request object to edit folio type legend mapping information.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.ChangeFolioTypeLegendMappingConfig(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FolioTypeLegendMappingConfigToBeChanged(folioTypeLegendMappingConfigToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.ChangeFolioTypeLegendMappingConfig``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ChangeFolioTypeLegendMappingConfig`: FolioTypeLegendMappingConfigStatus
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.ChangeFolioTypeLegendMappingConfig`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiChangeFolioTypeLegendMappingConfigRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **folioTypeLegendMappingConfigToBeChanged** | [**ChangeFolioTypeLegendMappingConfigRequest**](ChangeFolioTypeLegendMappingConfigRequest.md) | Request object to edit folio type legend mapping information. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**FolioTypeLegendMappingConfigStatus**](FolioTypeLegendMappingConfigStatus.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteAdjustmentCodes

> Status DeleteAdjustmentCodes(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AdjustmentCode(adjustmentCode).HotelId(hotelId).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to delete AdjustmentCodes.



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
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    adjustmentCode := "adjustmentCode_example" // string | Configuration code. (optional)
    hotelId := "hotelId_example" // string | Hotel where the code is configured. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.DeleteAdjustmentCodes(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AdjustmentCode(adjustmentCode).HotelId(hotelId).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.DeleteAdjustmentCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteAdjustmentCodes`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.DeleteAdjustmentCodes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDeleteAdjustmentCodesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **adjustmentCode** | **string** | Configuration code. | 
 **hotelId** | **string** | Hotel where the code is configured. | 
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


## DeleteArticles

> Status DeleteArticles(ctx).HotelId(hotelId).ArticleCodes(articleCodes).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ArticleHotelId(articleHotelId).Inactive(inactive).OrderSequence(orderSequence).Description(description).TransactionCode(transactionCode).Amount(amount).CurrencyCode(currencyCode).AvailableForPostIt(availableForPostIt).Color(color).UniversalProductCode(universalProductCode).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to delete Articles.



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
    hotelId := "hotelId_example" // string | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X.
    articleCodes := []string{"Inner_example"} // []string | Unique code of the article.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    articleHotelId := []string{"Inner_example"} // []string | Hotel code to which the article belongs. (optional)
    inactive := []bool{false} // []bool | Indicates whether the article is inactive or not. (optional)
    orderSequence := []float32{float32(123)} // []float32 | Display Order sequence. (optional)
    description := []string{"Inner_example"} // []string | Description of the article. (optional)
    transactionCode := []string{"Inner_example"} // []string | Transaction code to which the article belongs. (optional)
    amount := float32(8.14) // float32 | A monetary amount. (optional)
    currencyCode := "currencyCode_example" // string | Provides a currency code to reflect the currency in which an amount may be expressed. (optional)
    availableForPostIt := true // bool | Indicates whether the article is available for post it. (optional)
    color := "color_example" // string | Color configuration type. This color configuration provides a visual category of entities. (optional)
    universalProductCode := []string{"Inner_example"} // []string | Unique Universal product code of the article. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.DeleteArticles(context.Background()).HotelId(hotelId).ArticleCodes(articleCodes).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ArticleHotelId(articleHotelId).Inactive(inactive).OrderSequence(orderSequence).Description(description).TransactionCode(transactionCode).Amount(amount).CurrencyCode(currencyCode).AvailableForPostIt(availableForPostIt).Color(color).UniversalProductCode(universalProductCode).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.DeleteArticles``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteArticles`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.DeleteArticles`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDeleteArticlesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hotelId** | **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | 
 **articleCodes** | **[]string** | Unique code of the article. | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **articleHotelId** | **[]string** | Hotel code to which the article belongs. | 
 **inactive** | **[]bool** | Indicates whether the article is inactive or not. | 
 **orderSequence** | **[]float32** | Display Order sequence. | 
 **description** | **[]string** | Description of the article. | 
 **transactionCode** | **[]string** | Transaction code to which the article belongs. | 
 **amount** | **float32** | A monetary amount. | 
 **currencyCode** | **string** | Provides a currency code to reflect the currency in which an amount may be expressed. | 
 **availableForPostIt** | **bool** | Indicates whether the article is available for post it. | 
 **color** | **string** | Color configuration type. This color configuration provides a visual category of entities. | 
 **universalProductCode** | **[]string** | Unique Universal product code of the article. | 
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


## DeleteAuthorizationConfigRule

> Status DeleteAuthorizationConfigRule(ctx).HotelId(hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoomType(roomType).RoomClassHotelId(roomClassHotelId).RoomClassCode(roomClassCode).SourceCodeHotelId(sourceCodeHotelId).SourceCode(sourceCode).RateCategory(rateCategory).RateCode(rateCode).GuaranteeCode(guaranteeCode).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to delete AuthorizationConfigRule.



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
    hotelId := []string{"Inner_example"} // []string | Property associated with authorization rule
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    roomType := []string{"Inner_example"} // []string | Authorization rule Room type. (optional)
    roomClassHotelId := "roomClassHotelId_example" // string |  (optional)
    roomClassCode := "roomClassCode_example" // string |  (optional)
    sourceCodeHotelId := "sourceCodeHotelId_example" // string |  (optional)
    sourceCode := "sourceCode_example" // string |  (optional)
    rateCategory := "rateCategory_example" // string | Rate category Code. (optional)
    rateCode := []string{"Inner_example"} // []string | Rate code associated to this rule. (optional)
    guaranteeCode := []string{"Inner_example"} // []string | Guarantee code associated to this rule. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.DeleteAuthorizationConfigRule(context.Background()).HotelId(hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoomType(roomType).RoomClassHotelId(roomClassHotelId).RoomClassCode(roomClassCode).SourceCodeHotelId(sourceCodeHotelId).SourceCode(sourceCode).RateCategory(rateCategory).RateCode(rateCode).GuaranteeCode(guaranteeCode).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.DeleteAuthorizationConfigRule``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteAuthorizationConfigRule`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.DeleteAuthorizationConfigRule`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDeleteAuthorizationConfigRuleRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hotelId** | **[]string** | Property associated with authorization rule | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **roomType** | **[]string** | Authorization rule Room type. | 
 **roomClassHotelId** | **string** |  | 
 **roomClassCode** | **string** |  | 
 **sourceCodeHotelId** | **string** |  | 
 **sourceCode** | **string** |  | 
 **rateCategory** | **string** | Rate category Code. | 
 **rateCode** | **[]string** | Rate code associated to this rule. | 
 **guaranteeCode** | **[]string** | Guarantee code associated to this rule. | 
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


## DeleteAuthorizerGroups

> Status DeleteAuthorizerGroups(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AuthorizerGroup(authorizerGroup).HotelId(hotelId).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to delete AuthorizerGroups.



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
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    authorizerGroup := "authorizerGroup_example" // string | Configuration code. (optional)
    hotelId := "hotelId_example" // string | Hotel where the code is configured. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.DeleteAuthorizerGroups(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AuthorizerGroup(authorizerGroup).HotelId(hotelId).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.DeleteAuthorizerGroups``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteAuthorizerGroups`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.DeleteAuthorizerGroups`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDeleteAuthorizerGroupsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **authorizerGroup** | **string** | Configuration code. | 
 **hotelId** | **string** | Hotel where the code is configured. | 
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


## DeleteCurrencyExchangeServiceTaxes

> Status DeleteCurrencyExchangeServiceTaxes(ctx).HotelId(hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CurrencyExchangeServiceTaxCode(currencyExchangeServiceTaxCode).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to delete CurrencyExchangeServiceTaxes.



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
    hotelId := []string{"Inner_example"} // []string | Property associated with currency exchange service tax
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    currencyExchangeServiceTaxCode := []string{"Inner_example"} // []string | Currency exchange service tax code (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.DeleteCurrencyExchangeServiceTaxes(context.Background()).HotelId(hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CurrencyExchangeServiceTaxCode(currencyExchangeServiceTaxCode).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.DeleteCurrencyExchangeServiceTaxes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteCurrencyExchangeServiceTaxes`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.DeleteCurrencyExchangeServiceTaxes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDeleteCurrencyExchangeServiceTaxesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hotelId** | **[]string** | Property associated with currency exchange service tax | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **currencyExchangeServiceTaxCode** | **[]string** | Currency exchange service tax code | 
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


## DeleteExpenseArrangementCodes

> Status DeleteExpenseArrangementCodes(ctx).HotelId(hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Code(code).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to delete ExpenseArrangementCodes.



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
    hotelId := []string{"Inner_example"} // []string | Hotel where the code is configured.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    code := []string{"Inner_example"} // []string | Configuration code. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.DeleteExpenseArrangementCodes(context.Background()).HotelId(hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Code(code).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.DeleteExpenseArrangementCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteExpenseArrangementCodes`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.DeleteExpenseArrangementCodes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDeleteExpenseArrangementCodesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hotelId** | **[]string** | Hotel where the code is configured. | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **code** | **[]string** | Configuration code. | 
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


## DeleteFiscalFolioParameters

> Status DeleteFiscalFolioParameters(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).Partner(partner).Code(code).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to delete FiscalFolioParameters.



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
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    hotelId := []string{"Inner_example"} // []string | Code of the Hotel. (optional)
    partner := []string{"Inner_example"} // []string | Fiscal folio parameter associated with Partner. (optional)
    code := []string{"Inner_example"} // []string | Code of the Fiscal Folio Parameter. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.DeleteFiscalFolioParameters(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).Partner(partner).Code(code).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.DeleteFiscalFolioParameters``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteFiscalFolioParameters`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.DeleteFiscalFolioParameters`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDeleteFiscalFolioParametersRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **hotelId** | **[]string** | Code of the Hotel. | 
 **partner** | **[]string** | Fiscal folio parameter associated with Partner. | 
 **code** | **[]string** | Code of the Fiscal Folio Parameter. | 
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


## GetAdjustmentCodes

> AdjustmentCodes GetAdjustmentCodes(ctx).HotelIds(hotelIds).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AdjustmentCodes(adjustmentCodes).WildCard(wildCard).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to fetch AdjustmentCodes.



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
    hotelIds := []string{"Inner_example"} // []string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    adjustmentCodes := []string{"Inner_example"} // []string | Codes to be searched. (optional)
    wildCard := "wildCard_example" // string | Wildcard search on the code. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.GetAdjustmentCodes(context.Background()).HotelIds(hotelIds).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AdjustmentCodes(adjustmentCodes).WildCard(wildCard).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.GetAdjustmentCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetAdjustmentCodes`: AdjustmentCodes
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.GetAdjustmentCodes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetAdjustmentCodesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hotelIds** | **[]string** |  | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **adjustmentCodes** | **[]string** | Codes to be searched. | 
 **wildCard** | **string** | Wildcard search on the code. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**AdjustmentCodes**](AdjustmentCodes.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetArticles

> ArticlesInfo GetArticles(ctx).HotelIds(hotelIds).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TransactionCodes(transactionCodes).ArticleCodes(articleCodes).UniversalProductCode(universalProductCode).IncludeInactive(includeInactive).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get articles



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
    hotelIds := []string{"Inner_example"} // []string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    transactionCodes := []string{"Inner_example"} // []string |  (optional)
    articleCodes := []string{"Inner_example"} // []string |  (optional)
    universalProductCode := "universalProductCode_example" // string | Unique Universal product code search criteria. (optional)
    includeInactive := false // bool | Indicator that tells whether to include inactive articles in search results. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.GetArticles(context.Background()).HotelIds(hotelIds).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TransactionCodes(transactionCodes).ArticleCodes(articleCodes).UniversalProductCode(universalProductCode).IncludeInactive(includeInactive).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.GetArticles``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetArticles`: ArticlesInfo
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.GetArticles`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetArticlesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hotelIds** | **[]string** |  | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **transactionCodes** | **[]string** |  | 
 **articleCodes** | **[]string** |  | 
 **universalProductCode** | **string** | Unique Universal product code search criteria. | 
 **includeInactive** | **bool** | Indicator that tells whether to include inactive articles in search results. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ArticlesInfo**](ArticlesInfo.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetAuthorizerGroups

> AuthorizerGroups GetAuthorizerGroups(ctx).HotelIds(hotelIds).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AuthorizerGroupsCodes(authorizerGroupsCodes).WildCard(wildCard).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to fetch AuthorizerGroups.



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
    hotelIds := []string{"Inner_example"} // []string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    authorizerGroupsCodes := []string{"Inner_example"} // []string | Codes to be searched. (optional)
    wildCard := "wildCard_example" // string | Wildcard search on the code. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.GetAuthorizerGroups(context.Background()).HotelIds(hotelIds).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AuthorizerGroupsCodes(authorizerGroupsCodes).WildCard(wildCard).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.GetAuthorizerGroups``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetAuthorizerGroups`: AuthorizerGroups
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.GetAuthorizerGroups`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetAuthorizerGroupsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hotelIds** | **[]string** |  | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **authorizerGroupsCodes** | **[]string** | Codes to be searched. | 
 **wildCard** | **string** | Wildcard search on the code. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**AuthorizerGroups**](AuthorizerGroups.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetAvailableCashierNumber

> CashierNumber GetAvailableCashierNumber(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to fetch AvailableCashierNumber.



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
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.GetAvailableCashierNumber(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.GetAvailableCashierNumber``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetAvailableCashierNumber`: CashierNumber
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.GetAvailableCashierNumber`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetAvailableCashierNumberRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**CashierNumber**](CashierNumber.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetCashiers

> CashiersDetails GetCashiers(ctx).CashierIDs(cashierIDs).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).Name(name).IncludeInactive(includeInactive).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get cashiers



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
    cashierIDs := []float32{float32(123)} // []float32 | Numberic code for cashier ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    offset := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional) (default to 0)
    name := "name_example" // string | Partial name of a cashier. (optional)
    includeInactive := false // bool | Indicator that tells whether to include inactive cashiers in search results. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.GetCashiers(context.Background()).CashierIDs(cashierIDs).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).Name(name).IncludeInactive(includeInactive).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.GetCashiers``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetCashiers`: CashiersDetails
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.GetCashiers`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetCashiersRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cashierIDs** | **[]float32** | Numberic code for cashier ID. | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **offset** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [default to 0]
 **name** | **string** | Partial name of a cashier. | 
 **includeInactive** | **bool** | Indicator that tells whether to include inactive cashiers in search results. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**CashiersDetails**](CashiersDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetCompTypes

> CompTypesDetails GetCompTypes(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CompTypeCode(compTypeCode).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to Fetch Comp Types.



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
    hotelId := "hotelId_example" // string | Unique ID of the source hotel in OPERA
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    compTypeCode := "compTypeCode_example" // string | Code is used to identify the CompType. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.GetCompTypes(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CompTypeCode(compTypeCode).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.GetCompTypes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetCompTypes`: CompTypesDetails
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.GetCompTypes`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the source hotel in OPERA | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetCompTypesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **compTypeCode** | **string** | Code is used to identify the CompType. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**CompTypesDetails**](CompTypesDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetCurrencyExchangeServiceTaxes

> CurrencyExchangeServiceTaxes GetCurrencyExchangeServiceTaxes(ctx).HotelIds(hotelIds).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Codes(codes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to fetch CurrencyExchangeServiceTaxes.



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
    hotelIds := []string{"Inner_example"} // []string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    codes := []string{"Inner_example"} // []string |  (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.GetCurrencyExchangeServiceTaxes(context.Background()).HotelIds(hotelIds).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Codes(codes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.GetCurrencyExchangeServiceTaxes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetCurrencyExchangeServiceTaxes`: CurrencyExchangeServiceTaxes
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.GetCurrencyExchangeServiceTaxes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetCurrencyExchangeServiceTaxesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hotelIds** | **[]string** |  | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **codes** | **[]string** |  | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**CurrencyExchangeServiceTaxes**](CurrencyExchangeServiceTaxes.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetDailyPlanCodes

> DailyPlanCodes GetDailyPlanCodes(ctx).HotelIds(hotelIds).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).IncludeTransactionCodes(includeTransactionCodes).ArrangementCodes(arrangementCodes).WildCard(wildCard).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to fetch DailyPlanCodes.



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
    hotelIds := []string{"Inner_example"} // []string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    includeTransactionCodes := false // bool | A flag that determines whether or not to fetch associated transaction codes. Fetches only the arrangement codes when this flag is true. (optional)
    arrangementCodes := []string{"Inner_example"} // []string | Codes to be searched. (optional)
    wildCard := "wildCard_example" // string | Wildcard search on the code. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.GetDailyPlanCodes(context.Background()).HotelIds(hotelIds).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).IncludeTransactionCodes(includeTransactionCodes).ArrangementCodes(arrangementCodes).WildCard(wildCard).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.GetDailyPlanCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetDailyPlanCodes`: DailyPlanCodes
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.GetDailyPlanCodes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetDailyPlanCodesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hotelIds** | **[]string** |  | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **includeTransactionCodes** | **bool** | A flag that determines whether or not to fetch associated transaction codes. Fetches only the arrangement codes when this flag is true. | 
 **arrangementCodes** | **[]string** | Codes to be searched. | 
 **wildCard** | **string** | Wildcard search on the code. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**DailyPlanCodes**](DailyPlanCodes.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetExpenseArrangementCodes

> ExpenseArrangementCodes GetExpenseArrangementCodes(ctx).HotelIds(hotelIds).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).IncludeTransactionCodes(includeTransactionCodes).ArrangementCodes(arrangementCodes).WildCard(wildCard).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to fetch ExpenseArrangementCodes.



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
    hotelIds := []string{"Inner_example"} // []string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    includeTransactionCodes := false // bool | A flag that determines whether or not to fetch associated transaction codes. Fetches only the arrangement codes when this flag is true. (optional)
    arrangementCodes := []string{"Inner_example"} // []string | Codes to be searched. (optional)
    wildCard := "wildCard_example" // string | Wildcard search on the code. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.GetExpenseArrangementCodes(context.Background()).HotelIds(hotelIds).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).IncludeTransactionCodes(includeTransactionCodes).ArrangementCodes(arrangementCodes).WildCard(wildCard).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.GetExpenseArrangementCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetExpenseArrangementCodes`: ExpenseArrangementCodes
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.GetExpenseArrangementCodes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetExpenseArrangementCodesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hotelIds** | **[]string** |  | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **includeTransactionCodes** | **bool** | A flag that determines whether or not to fetch associated transaction codes. Fetches only the arrangement codes when this flag is true. | 
 **arrangementCodes** | **[]string** | Codes to be searched. | 
 **wildCard** | **string** | Wildcard search on the code. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ExpenseArrangementCodes**](ExpenseArrangementCodes.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetFiscalFolioParameters

> FiscalFolioParameters GetFiscalFolioParameters(ctx).HotelIds(hotelIds).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Code(code).Codes(codes).WildCard(wildCard).Internal(internal).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to fetch FiscalFolioParameters.



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
    hotelIds := []string{"Inner_example"} // []string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    code := []string{"Inner_example"} // []string |  (optional)
    codes := []string{"Inner_example"} // []string | Codes to be searched. (optional)
    wildCard := "wildCard_example" // string | Wildcard search on the code. (optional)
    internal := false // bool | Indicates whether the Fiscal Folio Parameter is user created or from seed data. Set this true to see the standard Fiscal Folio Parameters that are seeded along with the manually created Fiscal Folio Parameters. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.GetFiscalFolioParameters(context.Background()).HotelIds(hotelIds).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Code(code).Codes(codes).WildCard(wildCard).Internal(internal).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.GetFiscalFolioParameters``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetFiscalFolioParameters`: FiscalFolioParameters
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.GetFiscalFolioParameters`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetFiscalFolioParametersRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hotelIds** | **[]string** |  | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **code** | **[]string** |  | 
 **codes** | **[]string** | Codes to be searched. | 
 **wildCard** | **string** | Wildcard search on the code. | 
 **internal** | **bool** | Indicates whether the Fiscal Folio Parameter is user created or from seed data. Set this true to see the standard Fiscal Folio Parameters that are seeded along with the manually created Fiscal Folio Parameters. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**FiscalFolioParameters**](FiscalFolioParameters.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetFolioTypeLegendMappingsConfig

> FolioTypeLegendMappingsConfigDetails GetFolioTypeLegendMappingsConfig(ctx).HotelId(hotelId).LegendCode(legendCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FolioType(folioType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to fetch folio type legend mappings config.



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
    hotelId := "hotelId_example" // string | Property associated with folio type legend mapping
    legendCode := "legendCode_example" // string | Legend code to which folio types attached.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    folioType := "folioType_example" // string | Folio type to be searched. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.GetFolioTypeLegendMappingsConfig(context.Background()).HotelId(hotelId).LegendCode(legendCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FolioType(folioType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.GetFolioTypeLegendMappingsConfig``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetFolioTypeLegendMappingsConfig`: FolioTypeLegendMappingsConfigDetails
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.GetFolioTypeLegendMappingsConfig`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetFolioTypeLegendMappingsConfigRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hotelId** | **string** | Property associated with folio type legend mapping | 
 **legendCode** | **string** | Legend code to which folio types attached. | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **folioType** | **string** | Folio type to be searched. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**FolioTypeLegendMappingsConfigDetails**](FolioTypeLegendMappingsConfigDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetFuturePastExchangeRates

> []ExchangeRateType GetFuturePastExchangeRates(ctx, currencyCode, hotelId).ExchangeTypes(exchangeTypes).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).DateRangeStart(dateRangeStart).DateRangeEnd(dateRangeEnd).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to fetch FuturePastExchangeRates.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    currencyCode := "currencyCode_example" // string | Currency Code in OPERA
    hotelId := "hotelId_example" // string | Unique ID of the hotel in OPERA
    exchangeTypes := "Cash" // string | E-certificate conversion.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    dateRangeStart := time.Now() // string |  (optional)
    dateRangeEnd := time.Now() // string |  (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.GetFuturePastExchangeRates(context.Background(), currencyCode, hotelId).ExchangeTypes(exchangeTypes).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).DateRangeStart(dateRangeStart).DateRangeEnd(dateRangeEnd).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.GetFuturePastExchangeRates``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetFuturePastExchangeRates`: []ExchangeRateType
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.GetFuturePastExchangeRates`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**currencyCode** | **string** | Currency Code in OPERA | 
**hotelId** | **string** | Unique ID of the hotel in OPERA | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetFuturePastExchangeRatesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **exchangeTypes** | **string** | E-certificate conversion. | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **dateRangeStart** | **string** |  | 
 **dateRangeEnd** | **string** |  | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**[]ExchangeRateType**](ExchangeRateType.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetOperaControlSequences

> OperaControlSequences GetOperaControlSequences(ctx).HotelId(hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CountryCode(countryCode).Code(code).HotelCode(hotelCode).FetchInstruction(fetchInstruction).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to fetch OperaControlSequences.



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
    hotelId := "hotelId_example" // string | Hotel code of fetch criteria
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    countryCode := "countryCode_example" // string | Country Code of fetch criteria (optional)
    code := []string{"Inner_example"} // []string | Configuration code. (optional)
    hotelCode := []string{"Inner_example"} // []string | Hotel where the code is configured. (optional)
    fetchInstruction := []string{"FetchInstruction_example"} // []string | Simple type for opera sequence instructions that can be used for partial operations. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.GetOperaControlSequences(context.Background()).HotelId(hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CountryCode(countryCode).Code(code).HotelCode(hotelCode).FetchInstruction(fetchInstruction).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.GetOperaControlSequences``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetOperaControlSequences`: OperaControlSequences
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.GetOperaControlSequences`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetOperaControlSequencesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hotelId** | **string** | Hotel code of fetch criteria | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **countryCode** | **string** | Country Code of fetch criteria | 
 **code** | **[]string** | Configuration code. | 
 **hotelCode** | **[]string** | Hotel where the code is configured. | 
 **fetchInstruction** | **[]string** | Simple type for opera sequence instructions that can be used for partial operations. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**OperaControlSequences**](OperaControlSequences.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetPaymentMethods

> PaymentMethodsInfo GetPaymentMethods(ctx).HotelIds(hotelIds).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).TransactionCodes(transactionCodes).PaymentMethods(paymentMethods).FetchInstructions(fetchInstructions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to fetch PaymentMethods.



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
    hotelIds := []string{"Inner_example"} // []string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    offset := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional) (default to 0)
    transactionCodes := []string{"Inner_example"} // []string |  (optional)
    paymentMethods := []string{"Inner_example"} // []string |  (optional)
    fetchInstructions := []string{"FetchInstructions_example"} // []string | Simple Type for payment method fetch instruction. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.GetPaymentMethods(context.Background()).HotelIds(hotelIds).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).TransactionCodes(transactionCodes).PaymentMethods(paymentMethods).FetchInstructions(fetchInstructions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.GetPaymentMethods``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetPaymentMethods`: PaymentMethodsInfo
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.GetPaymentMethods`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetPaymentMethodsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hotelIds** | **[]string** |  | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **offset** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [default to 0]
 **transactionCodes** | **[]string** |  | 
 **paymentMethods** | **[]string** |  | 
 **fetchInstructions** | **[]string** | Simple Type for payment method fetch instruction. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**PaymentMethodsInfo**](PaymentMethodsInfo.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetRevenueBucketCodes

> RevenueBucketCodes GetRevenueBucketCodes(ctx).HotelIds(hotelIds).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TrxCodeArrangementCodes(trxCodeArrangementCodes).WildCard(wildCard).TrxCodeArrangementType(trxCodeArrangementType).Code(code).RevenueBucketTypesWildCard(revenueBucketTypesWildCard).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to fetch RevenueBucketCodes.



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
    hotelIds := []string{"Inner_example"} // []string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    trxCodeArrangementCodes := []string{"Inner_example"} // []string | Codes to be searched. (optional)
    wildCard := "wildCard_example" // string | Wildcard search on the code. (optional)
    trxCodeArrangementType := "trxCodeArrangementType_example" // string | Fiscal Bucket Type. (optional)
    code := []string{"Inner_example"} // []string | Codes to be searched. (optional)
    revenueBucketTypesWildCard := "revenueBucketTypesWildCard_example" // string | Wildcard search on the code. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.GetRevenueBucketCodes(context.Background()).HotelIds(hotelIds).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TrxCodeArrangementCodes(trxCodeArrangementCodes).WildCard(wildCard).TrxCodeArrangementType(trxCodeArrangementType).Code(code).RevenueBucketTypesWildCard(revenueBucketTypesWildCard).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.GetRevenueBucketCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetRevenueBucketCodes`: RevenueBucketCodes
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.GetRevenueBucketCodes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetRevenueBucketCodesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hotelIds** | **[]string** |  | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **trxCodeArrangementCodes** | **[]string** | Codes to be searched. | 
 **wildCard** | **string** | Wildcard search on the code. | 
 **trxCodeArrangementType** | **string** | Fiscal Bucket Type. | 
 **code** | **[]string** | Codes to be searched. | 
 **revenueBucketTypesWildCard** | **string** | Wildcard search on the code. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**RevenueBucketCodes**](RevenueBucketCodes.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetRoutingInstructions

> RoutingInstructions GetRoutingInstructions(ctx).HotelId(hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TrxCodeArrangementCode(trxCodeArrangementCode).WildCard(wildCard).CompAccounting(compAccounting).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get routing instructions



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
    hotelId := []string{"Inner_example"} // []string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    trxCodeArrangementCode := []string{"Inner_example"} // []string | Codes to be searched. (optional)
    wildCard := "wildCard_example" // string | Wildcard search on the code. (optional)
    compAccounting := true // bool | Determines if this is a comp routing code or a routing code. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.GetRoutingInstructions(context.Background()).HotelId(hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TrxCodeArrangementCode(trxCodeArrangementCode).WildCard(wildCard).CompAccounting(compAccounting).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.GetRoutingInstructions``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetRoutingInstructions`: RoutingInstructions
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.GetRoutingInstructions`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetRoutingInstructionsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hotelId** | **[]string** |  | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **trxCodeArrangementCode** | **[]string** | Codes to be searched. | 
 **wildCard** | **string** | Wildcard search on the code. | 
 **compAccounting** | **bool** | Determines if this is a comp routing code or a routing code. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**RoutingInstructions**](RoutingInstructions.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetTaxTypes

> TaxTypes GetTaxTypes(ctx).HotelIds(hotelIds).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TaxTypeCodes(taxTypeCodes).WildCard(wildCard).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to fetch TaxTypes.



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
    hotelIds := []string{"Inner_example"} // []string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    taxTypeCodes := []string{"Inner_example"} // []string | Codes to be searched. (optional)
    wildCard := "wildCard_example" // string | Wildcard search on the code. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.GetTaxTypes(context.Background()).HotelIds(hotelIds).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TaxTypeCodes(taxTypeCodes).WildCard(wildCard).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.GetTaxTypes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetTaxTypes`: TaxTypes
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.GetTaxTypes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetTaxTypesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hotelIds** | **[]string** |  | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **taxTypeCodes** | **[]string** | Codes to be searched. | 
 **wildCard** | **string** | Wildcard search on the code. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**TaxTypes**](TaxTypes.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetTemplateTransactionCodes

> TemplateTransactionCodes GetTemplateTransactionCodes(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CompTransactionCodes(compTransactionCodes).IncludeInactive(includeInactive).TransactionGroupCodes(transactionGroupCodes).TransactionSubgroupsCodes(transactionSubgroupsCodes).TransactionCodes(transactionCodes).WildCard(wildCard).Description(description).BrandCode(brandCode).UniversalProductCode(universalProductCode).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get template transaction codes



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
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    compTransactionCodes := false // bool | Flag to indicate whether comp accounting transaction codes are being requested. If true, only comp accounting transaction codes will be returned. If false, only standard transaction codes will be returned. (optional)
    includeInactive := false // bool | Inactive flag used to include/exclude inactive transaction codes from the search result (optional)
    transactionGroupCodes := []string{"Inner_example"} // []string |  (optional)
    transactionSubgroupsCodes := []string{"Inner_example"} // []string |  (optional)
    transactionCodes := []string{"Inner_example"} // []string | Codes to be searched. (optional)
    wildCard := "wildCard_example" // string | Wildcard search on the code. (optional)
    description := "description_example" // string | Description of the Transaction code. (optional)
    brandCode := "brandCode_example" // string | Property associated with the corporate information brand code in the search criteria (optional)
    universalProductCode := "universalProductCode_example" // string | Unique Universal product code search criteria. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.GetTemplateTransactionCodes(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CompTransactionCodes(compTransactionCodes).IncludeInactive(includeInactive).TransactionGroupCodes(transactionGroupCodes).TransactionSubgroupsCodes(transactionSubgroupsCodes).TransactionCodes(transactionCodes).WildCard(wildCard).Description(description).BrandCode(brandCode).UniversalProductCode(universalProductCode).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.GetTemplateTransactionCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetTemplateTransactionCodes`: TemplateTransactionCodes
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.GetTemplateTransactionCodes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetTemplateTransactionCodesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **compTransactionCodes** | **bool** | Flag to indicate whether comp accounting transaction codes are being requested. If true, only comp accounting transaction codes will be returned. If false, only standard transaction codes will be returned. | 
 **includeInactive** | **bool** | Inactive flag used to include/exclude inactive transaction codes from the search result | 
 **transactionGroupCodes** | **[]string** |  | 
 **transactionSubgroupsCodes** | **[]string** |  | 
 **transactionCodes** | **[]string** | Codes to be searched. | 
 **wildCard** | **string** | Wildcard search on the code. | 
 **description** | **string** | Description of the Transaction code. | 
 **brandCode** | **string** | Property associated with the corporate information brand code in the search criteria | 
 **universalProductCode** | **string** | Unique Universal product code search criteria. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**TemplateTransactionCodes**](TemplateTransactionCodes.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetTemplateTransactionGroups

> TemplateTransactionGroups GetTemplateTransactionGroups(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TransactionGroupCodes(transactionGroupCodes).WildCard(wildCard).TransactionGroupType(transactionGroupType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to fetch TemplateTransactionGroups.



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
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    transactionGroupCodes := []string{"Inner_example"} // []string | Codes to be searched. (optional)
    wildCard := "wildCard_example" // string | Wildcard search on the code. (optional)
    transactionGroupType := "transactionGroupType_example" // string | Wrapper Transaction Type. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.GetTemplateTransactionGroups(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TransactionGroupCodes(transactionGroupCodes).WildCard(wildCard).TransactionGroupType(transactionGroupType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.GetTemplateTransactionGroups``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetTemplateTransactionGroups`: TemplateTransactionGroups
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.GetTemplateTransactionGroups`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetTemplateTransactionGroupsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **transactionGroupCodes** | **[]string** | Codes to be searched. | 
 **wildCard** | **string** | Wildcard search on the code. | 
 **transactionGroupType** | **string** | Wrapper Transaction Type. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**TemplateTransactionGroups**](TemplateTransactionGroups.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetTemplateTransactionSubgroups

> TemplateTransactionSubgroups GetTemplateTransactionSubgroups(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TransactionGroupCodes(transactionGroupCodes).TransactionSubgroupsCodes(transactionSubgroupsCodes).WildCard(wildCard).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to fetch TemplateTransactionSubgroups.



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
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    transactionGroupCodes := []string{"Inner_example"} // []string |  (optional)
    transactionSubgroupsCodes := []string{"Inner_example"} // []string | Codes to be searched. (optional)
    wildCard := "wildCard_example" // string | Wildcard search on the code. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.GetTemplateTransactionSubgroups(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TransactionGroupCodes(transactionGroupCodes).TransactionSubgroupsCodes(transactionSubgroupsCodes).WildCard(wildCard).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.GetTemplateTransactionSubgroups``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetTemplateTransactionSubgroups`: TemplateTransactionSubgroups
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.GetTemplateTransactionSubgroups`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetTemplateTransactionSubgroupsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **transactionGroupCodes** | **[]string** |  | 
 **transactionSubgroupsCodes** | **[]string** | Codes to be searched. | 
 **wildCard** | **string** | Wildcard search on the code. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**TemplateTransactionSubgroups**](TemplateTransactionSubgroups.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetTransactionCode

> HotelTransactionCode GetTransactionCode(ctx, transactionCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FetchInstructions(fetchInstructions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get transaction codes



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
    transactionCode := "transactionCode_example" // string | Transaction Code in OPERA
    hotelId := "hotelId_example" // string | Unique ID of the hotel in OPERA
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    fetchInstructions := []string{"FetchInstructions_example"} // []string | Simple type for transaction code instructions that can be used for partial operations. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.GetTransactionCode(context.Background(), transactionCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FetchInstructions(fetchInstructions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.GetTransactionCode``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetTransactionCode`: HotelTransactionCode
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.GetTransactionCode`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**transactionCode** | **string** | Transaction Code in OPERA | 
**hotelId** | **string** | Unique ID of the hotel in OPERA | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetTransactionCodeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **fetchInstructions** | **[]string** | Simple type for transaction code instructions that can be used for partial operations. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**HotelTransactionCode**](HotelTransactionCode.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetTransactionCodes

> HotelTransactionCodes GetTransactionCodes(ctx).HotelIds(hotelIds).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CompTransactionCodes(compTransactionCodes).IncludeInactive(includeInactive).TransactionGroupCodes(transactionGroupCodes).TransactionSubgroupsCodes(transactionSubgroupsCodes).TransactionCodes(transactionCodes).WildCard(wildCard).Description(description).BrandCode(brandCode).UniversalProductCode(universalProductCode).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to fetch TransactionCodes.



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
    hotelIds := []string{"Inner_example"} // []string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    compTransactionCodes := false // bool | Flag to indicate whether comp accounting transaction codes are being requested. If true, only comp accounting transaction codes will be returned. If false, only standard transaction codes will be returned. (optional)
    includeInactive := false // bool | Inactive flag used to include/exclude inactive transaction codes from the search result (optional)
    transactionGroupCodes := []string{"Inner_example"} // []string |  (optional)
    transactionSubgroupsCodes := []string{"Inner_example"} // []string |  (optional)
    transactionCodes := []string{"Inner_example"} // []string | Codes to be searched. (optional)
    wildCard := "wildCard_example" // string | Wildcard search on the code. (optional)
    description := "description_example" // string | Description of the Transaction code. (optional)
    brandCode := "brandCode_example" // string | Property associated with the corporate information brand code in the search criteria (optional)
    universalProductCode := "universalProductCode_example" // string | Unique Universal product code search criteria. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.GetTransactionCodes(context.Background()).HotelIds(hotelIds).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CompTransactionCodes(compTransactionCodes).IncludeInactive(includeInactive).TransactionGroupCodes(transactionGroupCodes).TransactionSubgroupsCodes(transactionSubgroupsCodes).TransactionCodes(transactionCodes).WildCard(wildCard).Description(description).BrandCode(brandCode).UniversalProductCode(universalProductCode).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.GetTransactionCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetTransactionCodes`: HotelTransactionCodes
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.GetTransactionCodes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetTransactionCodesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hotelIds** | **[]string** |  | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **compTransactionCodes** | **bool** | Flag to indicate whether comp accounting transaction codes are being requested. If true, only comp accounting transaction codes will be returned. If false, only standard transaction codes will be returned. | 
 **includeInactive** | **bool** | Inactive flag used to include/exclude inactive transaction codes from the search result | 
 **transactionGroupCodes** | **[]string** |  | 
 **transactionSubgroupsCodes** | **[]string** |  | 
 **transactionCodes** | **[]string** | Codes to be searched. | 
 **wildCard** | **string** | Wildcard search on the code. | 
 **description** | **string** | Description of the Transaction code. | 
 **brandCode** | **string** | Property associated with the corporate information brand code in the search criteria | 
 **universalProductCode** | **string** | Unique Universal product code search criteria. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**HotelTransactionCodes**](HotelTransactionCodes.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetTransactionGroups

> TransactionGroups GetTransactionGroups(ctx).HotelIds(hotelIds).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TransactionGroupCodes(transactionGroupCodes).WildCard(wildCard).TransactionGroupType(transactionGroupType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to fetch TransactionGroups.



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
    hotelIds := []string{"Inner_example"} // []string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    transactionGroupCodes := []string{"Inner_example"} // []string | Codes to be searched. (optional)
    wildCard := "wildCard_example" // string | Wildcard search on the code. (optional)
    transactionGroupType := "transactionGroupType_example" // string | Wrapper Transaction Type. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.GetTransactionGroups(context.Background()).HotelIds(hotelIds).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TransactionGroupCodes(transactionGroupCodes).WildCard(wildCard).TransactionGroupType(transactionGroupType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.GetTransactionGroups``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetTransactionGroups`: TransactionGroups
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.GetTransactionGroups`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetTransactionGroupsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hotelIds** | **[]string** |  | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **transactionGroupCodes** | **[]string** | Codes to be searched. | 
 **wildCard** | **string** | Wildcard search on the code. | 
 **transactionGroupType** | **string** | Wrapper Transaction Type. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**TransactionGroups**](TransactionGroups.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetTransactionSubgroups

> HotelTransactionSubgroups GetTransactionSubgroups(ctx).HotelIds(hotelIds).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TransactionGroupCodes(transactionGroupCodes).TransactionSubgroupsCodes(transactionSubgroupsCodes).WildCard(wildCard).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to fetch TransactionSubgroups.



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
    hotelIds := []string{"Inner_example"} // []string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    transactionGroupCodes := []string{"Inner_example"} // []string |  (optional)
    transactionSubgroupsCodes := []string{"Inner_example"} // []string | Codes to be searched. (optional)
    wildCard := "wildCard_example" // string | Wildcard search on the code. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.GetTransactionSubgroups(context.Background()).HotelIds(hotelIds).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TransactionGroupCodes(transactionGroupCodes).TransactionSubgroupsCodes(transactionSubgroupsCodes).WildCard(wildCard).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.GetTransactionSubgroups``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetTransactionSubgroups`: HotelTransactionSubgroups
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.GetTransactionSubgroups`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetTransactionSubgroupsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hotelIds** | **[]string** |  | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **transactionGroupCodes** | **[]string** |  | 
 **transactionSubgroupsCodes** | **[]string** | Codes to be searched. | 
 **wildCard** | **string** | Wildcard search on the code. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**HotelTransactionSubgroups**](HotelTransactionSubgroups.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostAdjustmentCodes

> Status PostAdjustmentCodes(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AdjustmentCodes(adjustmentCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to create AdjustmentCodes.



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
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    adjustmentCodes := *openapiclient.NewPutAdjustmentCodesRequest() // PutAdjustmentCodesRequest | Request object for creating new Adjustment Code Configurations.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.PostAdjustmentCodes(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AdjustmentCodes(adjustmentCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.PostAdjustmentCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostAdjustmentCodes`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.PostAdjustmentCodes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostAdjustmentCodesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **adjustmentCodes** | [**PutAdjustmentCodesRequest**](PutAdjustmentCodesRequest.md) | Request object for creating new Adjustment Code Configurations. | 
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


## PostArticles

> Status PostArticles(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Articles(articles).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to create Articles.



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
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    articles := *openapiclient.NewPutArticlesRequest() // PutArticlesRequest | Request to create articles.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.PostArticles(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Articles(articles).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.PostArticles``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostArticles`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.PostArticles`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostArticlesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **articles** | [**PutArticlesRequest**](PutArticlesRequest.md) | Request to create articles. | 
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


## PostAuthorizationConfigRule

> Status PostAuthorizationConfigRule(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AuthorizationConfigRules(authorizationConfigRules).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to create AuthorizationConfigRule.



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
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    authorizationConfigRules := *openapiclient.NewPutAuthorizationConfigRuleRequest() // PutAuthorizationConfigRuleRequest | Request object to create new authorization rule for given hotel code.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.PostAuthorizationConfigRule(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AuthorizationConfigRules(authorizationConfigRules).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.PostAuthorizationConfigRule``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostAuthorizationConfigRule`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.PostAuthorizationConfigRule`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostAuthorizationConfigRuleRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **authorizationConfigRules** | [**PutAuthorizationConfigRuleRequest**](PutAuthorizationConfigRuleRequest.md) | Request object to create new authorization rule for given hotel code. | 
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


## PostAuthorizerGroups

> Status PostAuthorizerGroups(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AuthorizerGroups(authorizerGroups).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to create AuthorizerGroups.



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
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    authorizerGroups := *openapiclient.NewPostAuthorizerGroupsRequest() // PostAuthorizerGroupsRequest | Request object for creating new Authorizer Group Configuration.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.PostAuthorizerGroups(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AuthorizerGroups(authorizerGroups).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.PostAuthorizerGroups``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostAuthorizerGroups`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.PostAuthorizerGroups`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostAuthorizerGroupsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **authorizerGroups** | [**PostAuthorizerGroupsRequest**](PostAuthorizerGroupsRequest.md) | Request object for creating new Authorizer Group Configuration. | 
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


## PostCashiers

> Status PostCashiers(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Cashiers(cashiers).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to create Cashiers.



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
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    cashiers := *openapiclient.NewPutCashiersRequest() // PutCashiersRequest | Request object for creating cashiers.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.PostCashiers(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Cashiers(cashiers).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.PostCashiers``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostCashiers`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.PostCashiers`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostCashiersRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **cashiers** | [**PutCashiersRequest**](PutCashiersRequest.md) | Request object for creating cashiers. | 
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


## PostCompTypes

> Status PostCompTypes(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CompTypesCriteria(compTypesCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to Create Comp Types



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
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    compTypesCriteria := *openapiclient.NewPostCompTypesRequest() // PostCompTypesRequest | Request object for creating CompTypes.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.PostCompTypes(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CompTypesCriteria(compTypesCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.PostCompTypes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostCompTypes`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.PostCompTypes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostCompTypesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **compTypesCriteria** | [**PostCompTypesRequest**](PostCompTypesRequest.md) | Request object for creating CompTypes. | 
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


## PostCurrencyExchangeServiceTaxes

> Status PostCurrencyExchangeServiceTaxes(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CurrencyExchangeServiceTaxes(currencyExchangeServiceTaxes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to create CurrencyExchangeServiceTaxes.



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
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    currencyExchangeServiceTaxes := *openapiclient.NewPutCurrencyExchangeServiceTaxesRequest() // PutCurrencyExchangeServiceTaxesRequest | Request object for creating new currency exchange service taxes
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.PostCurrencyExchangeServiceTaxes(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CurrencyExchangeServiceTaxes(currencyExchangeServiceTaxes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.PostCurrencyExchangeServiceTaxes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostCurrencyExchangeServiceTaxes`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.PostCurrencyExchangeServiceTaxes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostCurrencyExchangeServiceTaxesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **currencyExchangeServiceTaxes** | [**PutCurrencyExchangeServiceTaxesRequest**](PutCurrencyExchangeServiceTaxesRequest.md) | Request object for creating new currency exchange service taxes | 
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


## PostExpenseArrangementCodes

> Status PostExpenseArrangementCodes(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ExpenseArrangementCodes(expenseArrangementCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to create ExpenseArrangementCodes.



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
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    expenseArrangementCodes := *openapiclient.NewPutExpenseArrangementCodesRequest() // PutExpenseArrangementCodesRequest | Request object for creating new expense arrangement codes.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.PostExpenseArrangementCodes(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ExpenseArrangementCodes(expenseArrangementCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.PostExpenseArrangementCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostExpenseArrangementCodes`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.PostExpenseArrangementCodes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostExpenseArrangementCodesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **expenseArrangementCodes** | [**PutExpenseArrangementCodesRequest**](PutExpenseArrangementCodesRequest.md) | Request object for creating new expense arrangement codes. | 
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


## PostFolioTypeLegendMappingConfig

> Status PostFolioTypeLegendMappingConfig(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FolioTypeLegendMappingConfigCriteria(folioTypeLegendMappingConfigCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to create folio type legend mappings config.



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
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    folioTypeLegendMappingConfigCriteria := *openapiclient.NewPostFolioTypeLegendMappingConfigRequest() // PostFolioTypeLegendMappingConfigRequest | Request object to create folio type legend mapping information.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.PostFolioTypeLegendMappingConfig(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FolioTypeLegendMappingConfigCriteria(folioTypeLegendMappingConfigCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.PostFolioTypeLegendMappingConfig``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostFolioTypeLegendMappingConfig`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.PostFolioTypeLegendMappingConfig`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostFolioTypeLegendMappingConfigRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **folioTypeLegendMappingConfigCriteria** | [**PostFolioTypeLegendMappingConfigRequest**](PostFolioTypeLegendMappingConfigRequest.md) | Request object to create folio type legend mapping information. | 
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


## PostTemplateTransactionCodes

> Status PostTemplateTransactionCodes(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TemplateTransactionCodes(templateTransactionCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Post template transaction codes



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
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    templateTransactionCodes := *openapiclient.NewPutTemplateTransactionCodesRequest() // PutTemplateTransactionCodesRequest | Request object for creating new template transaction codes configuration.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.PostTemplateTransactionCodes(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TemplateTransactionCodes(templateTransactionCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.PostTemplateTransactionCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostTemplateTransactionCodes`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.PostTemplateTransactionCodes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostTemplateTransactionCodesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **templateTransactionCodes** | [**PutTemplateTransactionCodesRequest**](PutTemplateTransactionCodesRequest.md) | Request object for creating new template transaction codes configuration. | 
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


## PostTemplateTransactionSubgroups

> Status PostTemplateTransactionSubgroups(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TemplateTransactionSubgroups(templateTransactionSubgroups).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to create TemplateTransactionSubgroups.



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
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    templateTransactionSubgroups := *openapiclient.NewPostTemplateTransactionSubgroupsRequest() // PostTemplateTransactionSubgroupsRequest | Request object for creating new template transaction subgroups configuration.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.PostTemplateTransactionSubgroups(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TemplateTransactionSubgroups(templateTransactionSubgroups).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.PostTemplateTransactionSubgroups``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostTemplateTransactionSubgroups`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.PostTemplateTransactionSubgroups`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostTemplateTransactionSubgroupsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **templateTransactionSubgroups** | [**PostTemplateTransactionSubgroupsRequest**](PostTemplateTransactionSubgroupsRequest.md) | Request object for creating new template transaction subgroups configuration. | 
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


## PostTransactionCodes

> Status PostTransactionCodes(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelTransactionCodes(hotelTransactionCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Post transaction codes



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
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    hotelTransactionCodes := *openapiclient.NewPutTransactionCodesRequest() // PutTransactionCodesRequest | Request object for creating new Transaction Codes Configuration.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.PostTransactionCodes(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelTransactionCodes(hotelTransactionCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.PostTransactionCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostTransactionCodes`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.PostTransactionCodes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostTransactionCodesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **hotelTransactionCodes** | [**PutTransactionCodesRequest**](PutTransactionCodesRequest.md) | Request object for creating new Transaction Codes Configuration. | 
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


## PostTransactionGenerates

> Status PostTransactionGenerates(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelTransactionGenerates(hotelTransactionGenerates).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Post transaction generates



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
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    hotelTransactionGenerates := *openapiclient.NewPostTransactionGeneratesRequest() // PostTransactionGeneratesRequest | Request to create transaction generates.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.PostTransactionGenerates(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelTransactionGenerates(hotelTransactionGenerates).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.PostTransactionGenerates``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostTransactionGenerates`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.PostTransactionGenerates`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostTransactionGeneratesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **hotelTransactionGenerates** | [**PostTransactionGeneratesRequest**](PostTransactionGeneratesRequest.md) | Request to create transaction generates. | 
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


## PostTransactionGroups

> Status PostTransactionGroups(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TransactionGroups(transactionGroups).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to create TransactionGroups.



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
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    transactionGroups := *openapiclient.NewPostTransactionGroupsRequest() // PostTransactionGroupsRequest | Request object for creating new Transaction Groups Configuration.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.PostTransactionGroups(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TransactionGroups(transactionGroups).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.PostTransactionGroups``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostTransactionGroups`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.PostTransactionGroups`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostTransactionGroupsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **transactionGroups** | [**PostTransactionGroupsRequest**](PostTransactionGroupsRequest.md) | Request object for creating new Transaction Groups Configuration. | 
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


## PutAdjustmentCodes

> Status PutAdjustmentCodes(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AdjustmentCodes(adjustmentCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to change AdjustmentCodes.



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
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    adjustmentCodes := *openapiclient.NewPutAdjustmentCodesRequest() // PutAdjustmentCodesRequest | Request object for changing existing Adjustment Code Configurations.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.PutAdjustmentCodes(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AdjustmentCodes(adjustmentCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.PutAdjustmentCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutAdjustmentCodes`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.PutAdjustmentCodes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPutAdjustmentCodesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **adjustmentCodes** | [**PutAdjustmentCodesRequest**](PutAdjustmentCodesRequest.md) | Request object for changing existing Adjustment Code Configurations. | 
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


## PutArticles

> Status PutArticles(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Articles(articles).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to change Articles.



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
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    articles := *openapiclient.NewPutArticlesRequest() // PutArticlesRequest | Request to change articles.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.PutArticles(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Articles(articles).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.PutArticles``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutArticles`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.PutArticles`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPutArticlesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **articles** | [**PutArticlesRequest**](PutArticlesRequest.md) | Request to change articles. | 
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


## PutAuthorizationConfigRule

> Status PutAuthorizationConfigRule(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AuthorizationConfigRules(authorizationConfigRules).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to change AuthorizationConfigRule.



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
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    authorizationConfigRules := *openapiclient.NewPutAuthorizationConfigRuleRequest() // PutAuthorizationConfigRuleRequest | Request object to change authorization rule.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.PutAuthorizationConfigRule(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AuthorizationConfigRules(authorizationConfigRules).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.PutAuthorizationConfigRule``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutAuthorizationConfigRule`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.PutAuthorizationConfigRule`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPutAuthorizationConfigRuleRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **authorizationConfigRules** | [**PutAuthorizationConfigRuleRequest**](PutAuthorizationConfigRuleRequest.md) | Request object to change authorization rule. | 
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


## PutAuthorizerGroups

> Status PutAuthorizerGroups(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AuthorizerGroupsToChange(authorizerGroupsToChange).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to change AuthorizerGroups.



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
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    authorizerGroupsToChange := *openapiclient.NewPutAuthorizerGroupsRequest() // PutAuthorizerGroupsRequest | Request object for changing existing Authorizer Group Configuration.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.PutAuthorizerGroups(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AuthorizerGroupsToChange(authorizerGroupsToChange).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.PutAuthorizerGroups``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutAuthorizerGroups`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.PutAuthorizerGroups`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPutAuthorizerGroupsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **authorizerGroupsToChange** | [**PutAuthorizerGroupsRequest**](PutAuthorizerGroupsRequest.md) | Request object for changing existing Authorizer Group Configuration. | 
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


## PutCashiers

> Status PutCashiers(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Cashiers(cashiers).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to change CashiersDetails.



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
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    cashiers := *openapiclient.NewPutCashiersRequest() // PutCashiersRequest | Request objects for modifying cashiers
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.PutCashiers(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Cashiers(cashiers).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.PutCashiers``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutCashiers`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.PutCashiers`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPutCashiersRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **cashiers** | [**PutCashiersRequest**](PutCashiersRequest.md) | Request objects for modifying cashiers | 
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


## PutCurrencyExchangeServiceTaxes

> Status PutCurrencyExchangeServiceTaxes(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CurrencyExchangeServiceTaxes(currencyExchangeServiceTaxes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to change ExchangeServiceTaxes.



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
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    currencyExchangeServiceTaxes := *openapiclient.NewPutCurrencyExchangeServiceTaxesRequest() // PutCurrencyExchangeServiceTaxesRequest | Request object for changing currency exchange service taxes
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.PutCurrencyExchangeServiceTaxes(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CurrencyExchangeServiceTaxes(currencyExchangeServiceTaxes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.PutCurrencyExchangeServiceTaxes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutCurrencyExchangeServiceTaxes`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.PutCurrencyExchangeServiceTaxes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPutCurrencyExchangeServiceTaxesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **currencyExchangeServiceTaxes** | [**PutCurrencyExchangeServiceTaxesRequest**](PutCurrencyExchangeServiceTaxesRequest.md) | Request object for changing currency exchange service taxes | 
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


## PutDailyPlanCodes

> Status PutDailyPlanCodes(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).DailyPlanCodes(dailyPlanCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to change DailyPlanCodes.



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
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    dailyPlanCodes := *openapiclient.NewPutDailyPlanCodesRequest() // PutDailyPlanCodesRequest | Request object for changing daily plan codes.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.PutDailyPlanCodes(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).DailyPlanCodes(dailyPlanCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.PutDailyPlanCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutDailyPlanCodes`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.PutDailyPlanCodes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPutDailyPlanCodesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **dailyPlanCodes** | [**PutDailyPlanCodesRequest**](PutDailyPlanCodesRequest.md) | Request object for changing daily plan codes. | 
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


## PutExpenseArrangementCodes

> Status PutExpenseArrangementCodes(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ExpenseArrangementCodes(expenseArrangementCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to change ExpenseArrangementCodes.



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
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    expenseArrangementCodes := *openapiclient.NewPutExpenseArrangementCodesRequest() // PutExpenseArrangementCodesRequest | Request object for changing expense arrangement codes.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.PutExpenseArrangementCodes(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ExpenseArrangementCodes(expenseArrangementCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.PutExpenseArrangementCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutExpenseArrangementCodes`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.PutExpenseArrangementCodes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPutExpenseArrangementCodesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **expenseArrangementCodes** | [**PutExpenseArrangementCodesRequest**](PutExpenseArrangementCodesRequest.md) | Request object for changing expense arrangement codes. | 
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


## PutFiscalFolioParameters

> Status PutFiscalFolioParameters(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FiscalFolioParameters(fiscalFolioParameters).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to change FiscalFolioParameters.



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
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    fiscalFolioParameters := *openapiclient.NewPutFiscalFolioParametersRequest() // PutFiscalFolioParametersRequest | Request object for changing existing Fiscal Folio Parameter Configurations.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.PutFiscalFolioParameters(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FiscalFolioParameters(fiscalFolioParameters).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.PutFiscalFolioParameters``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutFiscalFolioParameters`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.PutFiscalFolioParameters`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPutFiscalFolioParametersRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **fiscalFolioParameters** | [**PutFiscalFolioParametersRequest**](PutFiscalFolioParametersRequest.md) | Request object for changing existing Fiscal Folio Parameter Configurations. | 
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


## PutTemplateTransactionCodes

> Status PutTemplateTransactionCodes(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TemplateTransactionCodes(templateTransactionCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to change TemplateTransactionCodes.



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
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    templateTransactionCodes := *openapiclient.NewPutTemplateTransactionCodesRequest() // PutTemplateTransactionCodesRequest | Request object for changing existing template transaction codes configuration.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.PutTemplateTransactionCodes(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TemplateTransactionCodes(templateTransactionCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.PutTemplateTransactionCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutTemplateTransactionCodes`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.PutTemplateTransactionCodes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPutTemplateTransactionCodesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **templateTransactionCodes** | [**PutTemplateTransactionCodesRequest**](PutTemplateTransactionCodesRequest.md) | Request object for changing existing template transaction codes configuration. | 
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


## PutTransactionCodes

> TransactionCodes PutTransactionCodes(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelTransactionCodes(hotelTransactionCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Put transaction codes



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
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    hotelTransactionCodes := *openapiclient.NewPutTransactionCodesRequest() // PutTransactionCodesRequest | Request object for changing existing Transaction Codes Configuration.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.PutTransactionCodes(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelTransactionCodes(hotelTransactionCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.PutTransactionCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutTransactionCodes`: TransactionCodes
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.PutTransactionCodes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPutTransactionCodesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **hotelTransactionCodes** | [**PutTransactionCodesRequest**](PutTransactionCodesRequest.md) | Request object for changing existing Transaction Codes Configuration. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**TransactionCodes**](TransactionCodes.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## RemoveCompTypes

> Status RemoveCompTypes(ctx, compTypesCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to Remove Comp Types.



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
    compTypesCode := "compTypesCode_example" // string | Comp Types Code to be deleted.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.RemoveCompTypes(context.Background(), compTypesCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.RemoveCompTypes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `RemoveCompTypes`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.RemoveCompTypes`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**compTypesCode** | **string** | Comp Types Code to be deleted. | 

### Other Parameters

Other parameters are passed through a pointer to a apiRemoveCompTypesRequest struct via the builder pattern


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


## RemoveFolioTypeLegendMappingConfig

> Status RemoveFolioTypeLegendMappingConfig(ctx, legendCode, folioType, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to remove folio type legend mappings config.



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
    legendCode := "legendCode_example" // string | Legend Code
    folioType := "folioType_example" // string | Folio Type
    hotelId := "hotelId_example" // string | Unique ID of the source hotel in OPERA
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CashieringConfigApi.RemoveFolioTypeLegendMappingConfig(context.Background(), legendCode, folioType, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CashieringConfigApi.RemoveFolioTypeLegendMappingConfig``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `RemoveFolioTypeLegendMappingConfig`: Status
    fmt.Fprintf(os.Stdout, "Response from `CashieringConfigApi.RemoveFolioTypeLegendMappingConfig`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**legendCode** | **string** | Legend Code | 
**folioType** | **string** | Folio Type | 
**hotelId** | **string** | Unique ID of the source hotel in OPERA | 

### Other Parameters

Other parameters are passed through a pointer to a apiRemoveFolioTypeLegendMappingConfigRequest struct via the builder pattern


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


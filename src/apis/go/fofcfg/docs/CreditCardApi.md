# \CreditCardApi

All URIs are relative to */fof/config/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetCreditCardInfo**](CreditCardApi.md#GetCreditCardInfo) | **Get** /creditCardInfo | Get credit card token information



## GetCreditCardInfo

> CreditCardInfo GetCreditCardInfo(ctx).HotelId(hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ReservationId(reservationId).IdExtension(idExtension).IdContext(idContext).Type_(type_).CardId(cardId).CardIdExtension(cardIdExtension).CardIdContext(cardIdContext).CardIdType(cardIdType).AccessTransactionType(accessTransactionType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get credit card token information



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
    hotelId := "hotelId_example" // string | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    reservationId := "reservationId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    idExtension := int32(56) // int32 | Additional identifying value assigned by the creating system. (optional)
    idContext := "idContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    type_ := "type__example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    cardId := "cardId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    cardIdExtension := int32(56) // int32 | Additional identifying value assigned by the creating system. (optional)
    cardIdContext := "cardIdContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    cardIdType := "cardIdType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    accessTransactionType := "accessTransactionType_example" // string | Currently supported transaction type categories used for credit card authorization. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CreditCardApi.GetCreditCardInfo(context.Background()).HotelId(hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ReservationId(reservationId).IdExtension(idExtension).IdContext(idContext).Type_(type_).CardId(cardId).CardIdExtension(cardIdExtension).CardIdContext(cardIdContext).CardIdType(cardIdType).AccessTransactionType(accessTransactionType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CreditCardApi.GetCreditCardInfo``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetCreditCardInfo`: CreditCardInfo
    fmt.Fprintf(os.Stdout, "Response from `CreditCardApi.GetCreditCardInfo`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetCreditCardInfoRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hotelId** | **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **reservationId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **idExtension** | **int32** | Additional identifying value assigned by the creating system. | 
 **idContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **type_** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **cardId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **cardIdExtension** | **int32** | Additional identifying value assigned by the creating system. | 
 **cardIdContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **cardIdType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **accessTransactionType** | **string** | Currently supported transaction type categories used for credit card authorization. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**CreditCardInfo**](CreditCardInfo.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


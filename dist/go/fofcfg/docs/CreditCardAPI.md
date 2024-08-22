# \CreditCardAPI

All URIs are relative to */fof/config/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**DecodeCard**](CreditCardAPI.md#DecodeCard) | **Get** /creditCards/decode | Operation to Decode Card.
[**GetAuthorizationRule**](CreditCardAPI.md#GetAuthorizationRule) | **Get** /authorizationRule | Operation to fetch AuthorizationRule.
[**GetCardReaderDelimiters**](CreditCardAPI.md#GetCardReaderDelimiters) | **Get** /cardReaderDelimiters | Operation to fetch CardReaderDelimiters.
[**GetCreditCardInfo**](CreditCardAPI.md#GetCreditCardInfo) | **Get** /creditCardInfo | Get credit card token information
[**GetCreditCardReaderDevices**](CreditCardAPI.md#GetCreditCardReaderDevices) | **Get** /creditCards/readerDevices | Operation to fetch CreditCardReaderDevices.
[**GetCreditCardUniqueId**](CreditCardAPI.md#GetCreditCardUniqueId) | **Post** /creditCards/vaultedId | Operation to fetch CreditCardUniqueId.
[**GetHotelInterfaceCustomData**](CreditCardAPI.md#GetHotelInterfaceCustomData) | **Get** /hotels/{hotelId}/interfaces/{interfaceLogoId}/customData | Operation to fetch hotel interface custom data.
[**GetPrepaidCard**](CreditCardAPI.md#GetPrepaidCard) | **Get** /prepaidCard | Operation to fetch Prepaid Card.
[**GetPrepaidCardBalance**](CreditCardAPI.md#GetPrepaidCardBalance) | **Get** /prepaidCardBalance | Operation to fetch prepaid card balance.
[**GetPrepaidCards**](CreditCardAPI.md#GetPrepaidCards) | **Get** /prepaidCards | Operation to fetch PrepaidCards.
[**PutSecureApplicationSettings**](CreditCardAPI.md#PutSecureApplicationSettings) | **Put** /secureApplicationSettings | Operation to change AR SecureApplicationSettings.
[**UpdateInterfaceCustomData**](CreditCardAPI.md#UpdateInterfaceCustomData) | **Put** /hotels/{hotelId}/interfaces/{interfaceLogoId}/customData | Operation to update hotel interface custom data.
[**ValidateCreditCardType**](CreditCardAPI.md#ValidateCreditCardType) | **Get** /creditCardTypes/validate | Operation to validate CreditCardType.



## DecodeCard

> DecodedCard DecodeCard(ctx).HotelId(hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TrackData(trackData).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to Decode Card.



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
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    trackData := "trackData_example" // string | Used for Character Strings, length 0 to 200. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CreditCardAPI.DecodeCard(context.Background()).HotelId(hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TrackData(trackData).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CreditCardAPI.DecodeCard``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DecodeCard`: DecodedCard
    fmt.Fprintf(os.Stdout, "Response from `CreditCardAPI.DecodeCard`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDecodeCardRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hotelId** | **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **trackData** | **string** | Used for Character Strings, length 0 to 200. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**DecodedCard**](DecodedCard.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetAuthorizationRule

> AuthorizationRule GetAuthorizationRule(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).ReservationId(reservationId).IdExtension(idExtension).IdContext(idContext).Type_(type_).GuaranteeCode(guaranteeCode).RateCode(rateCode).RoomType(roomType).SourceCode(sourceCode).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to fetch AuthorizationRule.



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
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    hotelId := "hotelId_example" // string | The hotel code to retrieve authorization rules for. (optional)
    reservationId := "reservationId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    idExtension := int32(56) // int32 | Additional identifying value assigned by the creating system. (optional)
    idContext := "idContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    type_ := "type__example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    guaranteeCode := "guaranteeCode_example" // string | The guarantee code to retrieve authorization rules for. (optional)
    rateCode := "rateCode_example" // string | The rate code to retrieve authorization rules for. (optional)
    roomType := "roomType_example" // string | The room type to retrieve authorization rules for. (optional)
    sourceCode := "sourceCode_example" // string | The source code to retrieve authorization rules for. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CreditCardAPI.GetAuthorizationRule(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).ReservationId(reservationId).IdExtension(idExtension).IdContext(idContext).Type_(type_).GuaranteeCode(guaranteeCode).RateCode(rateCode).RoomType(roomType).SourceCode(sourceCode).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CreditCardAPI.GetAuthorizationRule``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetAuthorizationRule`: AuthorizationRule
    fmt.Fprintf(os.Stdout, "Response from `CreditCardAPI.GetAuthorizationRule`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetAuthorizationRuleRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **hotelId** | **string** | The hotel code to retrieve authorization rules for. | 
 **reservationId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **idExtension** | **int32** | Additional identifying value assigned by the creating system. | 
 **idContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **type_** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **guaranteeCode** | **string** | The guarantee code to retrieve authorization rules for. | 
 **rateCode** | **string** | The rate code to retrieve authorization rules for. | 
 **roomType** | **string** | The room type to retrieve authorization rules for. | 
 **sourceCode** | **string** | The source code to retrieve authorization rules for. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**AuthorizationRule**](AuthorizationRule.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetCardReaderDelimiters

> CardReaderDelimiters GetCardReaderDelimiters(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).DeviceID(deviceID).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to fetch CardReaderDelimiters.



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
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    deviceID := int32(120) // int32 |  (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CreditCardAPI.GetCardReaderDelimiters(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).DeviceID(deviceID).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CreditCardAPI.GetCardReaderDelimiters``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetCardReaderDelimiters`: CardReaderDelimiters
    fmt.Fprintf(os.Stdout, "Response from `CreditCardAPI.GetCardReaderDelimiters`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetCardReaderDelimitersRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **deviceID** | **int32** |  | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**CardReaderDelimiters**](CardReaderDelimiters.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


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
    openapiclient "github.com/applyinnovations/ohip-sdk/fofcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
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
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CreditCardAPI.GetCreditCardInfo(context.Background()).HotelId(hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ReservationId(reservationId).IdExtension(idExtension).IdContext(idContext).Type_(type_).CardId(cardId).CardIdExtension(cardIdExtension).CardIdContext(cardIdContext).CardIdType(cardIdType).AccessTransactionType(accessTransactionType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CreditCardAPI.GetCreditCardInfo``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetCreditCardInfo`: CreditCardInfo
    fmt.Fprintf(os.Stdout, "Response from `CreditCardAPI.GetCreditCardInfo`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetCreditCardInfoRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hotelId** | **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
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


## GetCreditCardReaderDevices

> CreditCardReaderDevices GetCreditCardReaderDevices(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to fetch CreditCardReaderDevices.



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
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CreditCardAPI.GetCreditCardReaderDevices(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CreditCardAPI.GetCreditCardReaderDevices``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetCreditCardReaderDevices`: CreditCardReaderDevices
    fmt.Fprintf(os.Stdout, "Response from `CreditCardAPI.GetCreditCardReaderDevices`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetCreditCardReaderDevicesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**CreditCardReaderDevices**](CreditCardReaderDevices.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetCreditCardUniqueId

> CreditCardUniqueId GetCreditCardUniqueId(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CreditCardUniqueIdRQ(creditCardUniqueIdRQ).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to fetch CreditCardUniqueId.



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
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    creditCardUniqueIdRQ := *openapiclient.NewCreditCardUniqueIdRQ() // CreditCardUniqueIdRQ | Request for fetching credit card unique id.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CreditCardAPI.GetCreditCardUniqueId(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CreditCardUniqueIdRQ(creditCardUniqueIdRQ).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CreditCardAPI.GetCreditCardUniqueId``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetCreditCardUniqueId`: CreditCardUniqueId
    fmt.Fprintf(os.Stdout, "Response from `CreditCardAPI.GetCreditCardUniqueId`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetCreditCardUniqueIdRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **creditCardUniqueIdRQ** | [**CreditCardUniqueIdRQ**](CreditCardUniqueIdRQ.md) | Request for fetching credit card unique id. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**CreditCardUniqueId**](CreditCardUniqueId.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetHotelInterfaceCustomData

> HotelInterfaceDetail GetHotelInterfaceCustomData(ctx, interfaceLogoId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FetchInstructions(fetchInstructions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to fetch hotel interface custom data.



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
    interfaceLogoId := "interfaceLogoId_example" // string | Unique ID of the hotel interface logo
    hotelId := "hotelId_example" // string | Unique ID of the hotel in OPERA
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    fetchInstructions := "fetchInstructions_example" // string | Transaction codes of a Hotel Interface. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CreditCardAPI.GetHotelInterfaceCustomData(context.Background(), interfaceLogoId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FetchInstructions(fetchInstructions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CreditCardAPI.GetHotelInterfaceCustomData``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetHotelInterfaceCustomData`: HotelInterfaceDetail
    fmt.Fprintf(os.Stdout, "Response from `CreditCardAPI.GetHotelInterfaceCustomData`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**interfaceLogoId** | **string** | Unique ID of the hotel interface logo | 
**hotelId** | **string** | Unique ID of the hotel in OPERA | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetHotelInterfaceCustomDataRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **fetchInstructions** | **string** | Transaction codes of a Hotel Interface. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**HotelInterfaceDetail**](HotelInterfaceDetail.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetPrepaidCard

> PrepaidCardDetails GetPrepaidCard(ctx).HotelId(hotelId).CardNumber(cardNumber).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).InterfaceId(interfaceId).InterfaceIdType(interfaceIdType).ReservationId(reservationId).ReservationIdType(reservationIdType).Pin(pin).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to fetch Prepaid Card.



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
    hotelId := "hotelId_example" // string | Hotel code.
    cardNumber := "cardNumber_example" // string | Prepaid card number.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    interfaceId := "interfaceId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    interfaceIdType := "interfaceIdType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    reservationId := "reservationId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    reservationIdType := "reservationIdType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    pin := "pin_example" // string | PIN code associated for the prepaid card. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CreditCardAPI.GetPrepaidCard(context.Background()).HotelId(hotelId).CardNumber(cardNumber).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).InterfaceId(interfaceId).InterfaceIdType(interfaceIdType).ReservationId(reservationId).ReservationIdType(reservationIdType).Pin(pin).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CreditCardAPI.GetPrepaidCard``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetPrepaidCard`: PrepaidCardDetails
    fmt.Fprintf(os.Stdout, "Response from `CreditCardAPI.GetPrepaidCard`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetPrepaidCardRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hotelId** | **string** | Hotel code. | 
 **cardNumber** | **string** | Prepaid card number. | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **interfaceId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **interfaceIdType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **reservationId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **reservationIdType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **pin** | **string** | PIN code associated for the prepaid card. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**PrepaidCardDetails**](PrepaidCardDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetPrepaidCardBalance

> PrepaidCardBalanceDetails GetPrepaidCardBalance(ctx).HotelId(hotelId).CardNumber(cardNumber).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).InterfaceId(interfaceId).InterfaceIdType(interfaceIdType).ReservationId(reservationId).ReservationIdType(reservationIdType).Pin(pin).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to fetch prepaid card balance.



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
    hotelId := "hotelId_example" // string | Hotel code.
    cardNumber := "cardNumber_example" // string | Prepaid card number.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    interfaceId := "interfaceId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    interfaceIdType := "interfaceIdType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    reservationId := "reservationId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    reservationIdType := "reservationIdType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    pin := "pin_example" // string | PIN code associated for the prepaid card. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CreditCardAPI.GetPrepaidCardBalance(context.Background()).HotelId(hotelId).CardNumber(cardNumber).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).InterfaceId(interfaceId).InterfaceIdType(interfaceIdType).ReservationId(reservationId).ReservationIdType(reservationIdType).Pin(pin).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CreditCardAPI.GetPrepaidCardBalance``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetPrepaidCardBalance`: PrepaidCardBalanceDetails
    fmt.Fprintf(os.Stdout, "Response from `CreditCardAPI.GetPrepaidCardBalance`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetPrepaidCardBalanceRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hotelId** | **string** | Hotel code. | 
 **cardNumber** | **string** | Prepaid card number. | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **interfaceId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **interfaceIdType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **reservationId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **reservationIdType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **pin** | **string** | PIN code associated for the prepaid card. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**PrepaidCardBalanceDetails**](PrepaidCardBalanceDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetPrepaidCards

> PrepaidCards GetPrepaidCards(ctx).HotelId(hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).IncludeCardDetails(includeCardDetails).ReservationId(reservationId).IdExtension(idExtension).IdContext(idContext).Type_(type_).CardNo(cardNo).RoomNo(roomNo).NameWildCard(nameWildCard).FirstNameWildCard(firstNameWildCard).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to fetch PrepaidCards.



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
    hotelId := "hotelId_example" // string | Hotel code.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    includeCardDetails := false // bool | Configuring this flag to be TRUE will fetch and return card details from vendor interface. (optional)
    reservationId := "reservationId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    idExtension := int32(56) // int32 | Additional identifying value assigned by the creating system. (optional)
    idContext := "idContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    type_ := "type__example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    cardNo := "cardNo_example" // string | Prepaid card number. (optional)
    roomNo := "roomNo_example" // string | Room No search criteria. (optional)
    nameWildCard := "nameWildCard_example" // string | Last name search criteria. (optional)
    firstNameWildCard := "firstNameWildCard_example" // string | First name search criteria. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CreditCardAPI.GetPrepaidCards(context.Background()).HotelId(hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).IncludeCardDetails(includeCardDetails).ReservationId(reservationId).IdExtension(idExtension).IdContext(idContext).Type_(type_).CardNo(cardNo).RoomNo(roomNo).NameWildCard(nameWildCard).FirstNameWildCard(firstNameWildCard).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CreditCardAPI.GetPrepaidCards``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetPrepaidCards`: PrepaidCards
    fmt.Fprintf(os.Stdout, "Response from `CreditCardAPI.GetPrepaidCards`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetPrepaidCardsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hotelId** | **string** | Hotel code. | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **includeCardDetails** | **bool** | Configuring this flag to be TRUE will fetch and return card details from vendor interface. | 
 **reservationId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **idExtension** | **int32** | Additional identifying value assigned by the creating system. | 
 **idContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **type_** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **cardNo** | **string** | Prepaid card number. | 
 **roomNo** | **string** | Room No search criteria. | 
 **nameWildCard** | **string** | Last name search criteria. | 
 **firstNameWildCard** | **string** | First name search criteria. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**PrepaidCards**](PrepaidCards.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutSecureApplicationSettings

> Status PutSecureApplicationSettings(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ApplicationSecureSetting(applicationSecureSetting).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to change AR SecureApplicationSettings.



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
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    applicationSecureSetting := *openapiclient.NewApplicationSecureSetting() // ApplicationSecureSetting | Request for reading the configured device delimiters.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CreditCardAPI.PutSecureApplicationSettings(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ApplicationSecureSetting(applicationSecureSetting).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CreditCardAPI.PutSecureApplicationSettings``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutSecureApplicationSettings`: Status
    fmt.Fprintf(os.Stdout, "Response from `CreditCardAPI.PutSecureApplicationSettings`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPutSecureApplicationSettingsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **applicationSecureSetting** | [**ApplicationSecureSetting**](ApplicationSecureSetting.md) | Request for reading the configured device delimiters. | 
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


## UpdateInterfaceCustomData

> Status UpdateInterfaceCustomData(ctx, interfaceLogoId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelInterfaceDetail(hotelInterfaceDetail).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to update hotel interface custom data.



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
    interfaceLogoId := "interfaceLogoId_example" // string | Unique ID of the hotel interface logo
    hotelId := "hotelId_example" // string | Unique ID of the hotel in OPERA
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    hotelInterfaceDetail := *openapiclient.NewHotelInterfaceDetail() // HotelInterfaceDetail | Request object for updating a Hotel Interface.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CreditCardAPI.UpdateInterfaceCustomData(context.Background(), interfaceLogoId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelInterfaceDetail(hotelInterfaceDetail).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CreditCardAPI.UpdateInterfaceCustomData``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdateInterfaceCustomData`: Status
    fmt.Fprintf(os.Stdout, "Response from `CreditCardAPI.UpdateInterfaceCustomData`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**interfaceLogoId** | **string** | Unique ID of the hotel interface logo | 
**hotelId** | **string** | Unique ID of the hotel in OPERA | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateInterfaceCustomDataRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **hotelInterfaceDetail** | [**HotelInterfaceDetail**](HotelInterfaceDetail.md) | Request object for updating a Hotel Interface. | 
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


## ValidateCreditCardType

> CreditCardTypeValidationStatus ValidateCreditCardType(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ReservationID(reservationID).ReservationIDIdExtension(reservationIDIdExtension).ReservationIDIdContext(reservationIDIdContext).ReservationIDType(reservationIDType).PaymentMethodDescription(paymentMethodDescription).PaymentMethodFolioView(paymentMethodFolioView).PaymentMethod(paymentMethod).AttachCreditCardToProfile(attachCreditCardToProfile).CardHolderName(cardHolderName).CardNumber(cardNumber).CardNumberLast4Digits(cardNumberLast4Digits).CardNumberMasked(cardNumberMasked).CardNumberType(cardNumberType).CardType(cardType).ExpirationDate(expirationDate).ExpirationDateExpired(expirationDateExpired).ExpirationDateMasked(expirationDateMasked).Processing(processing).Swiped(swiped).UserDefinedCardType(userDefinedCardType).CardId(cardId).CardIdExtension(cardIdExtension).CardIdContext(cardIdContext).CardIdType(cardIdType).CurrentAuthorizedAmount(currentAuthorizedAmount).CurrentAuthorizedAmountCurrencyCode(currentAuthorizedAmountCurrencyCode).ApprovalAmountNeeded(approvalAmountNeeded).ApprovalAmountNeededCurrencyCode(approvalAmountNeededCurrencyCode).BalanceAmount(balanceAmount).BalanceCurrencyCode(balanceCurrencyCode).AuthorizationRuleCode(authorizationRuleCode).AuthorizationRuleAmount(authorizationRuleAmount).AuthorizationRuleCurrencyCode(authorizationRuleCurrencyCode).AuthorizationRulePercent(authorizationRulePercent).EmailFolio(emailFolio).EmailFolioInfoId(emailFolioInfoId).EmailFolioInfoIDExtension(emailFolioInfoIDExtension).EmailFolioInfoIDContext(emailFolioInfoIDContext).EmailFolioInfoType(emailFolioInfoType).EmailFolioInfoCreateDateTime(emailFolioInfoCreateDateTime).EmailFolioInfoCreatorID(emailFolioInfoCreatorID).EmailFolioInfoEmailAddress(emailFolioInfoEmailAddress).EmailFolioInfoEmailFormat(emailFolioInfoEmailFormat).EmailFolioInfoLastModifierID(emailFolioInfoLastModifierID).EmailFolioInfoLastModifyDateTime(emailFolioInfoLastModifyDateTime).EmailFolioInfoOrderSequence(emailFolioInfoOrderSequence).EmailFolioInfoPrimaryInd(emailFolioInfoPrimaryInd).EmailFolioInfoPurgeDate(emailFolioInfoPurgeDate).EmailEmailFolioInfoType(emailEmailFolioInfoType).EmailFolioInfoTypeDescription(emailFolioInfoTypeDescription).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to validate CreditCardType.



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
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    reservationID := "reservationID_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    reservationIDIdExtension := int32(56) // int32 | Additional identifying value assigned by the creating system. (optional)
    reservationIDIdContext := "reservationIDIdContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    reservationIDType := "reservationIDType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    paymentMethodDescription := "paymentMethodDescription_example" // string |  (optional)
    paymentMethodFolioView := int32(56) // int32 |  (optional)
    paymentMethod := "paymentMethod_example" // string |  (optional)
    attachCreditCardToProfile := true // bool | Attach the credit card to profile. (optional)
    cardHolderName := "cardHolderName_example" // string |  (optional)
    cardNumber := "cardNumber_example" // string |  (optional)
    cardNumberLast4Digits := "cardNumberLast4Digits_example" // string |  (optional)
    cardNumberMasked := "cardNumberMasked_example" // string |  (optional)
    cardNumberType := "cardNumberType_example" // string | Simple type for indicating if credit card number is tokenized. (optional)
    cardType := "cardType_example" // string | This is required for Credit Card Payment Methods. This indicates the type of Credit Card associated with this payment method. (optional)
    expirationDate := time.Now() // string | Expiration date of the credit card (optional)
    expirationDateExpired := true // bool |  (optional)
    expirationDateMasked := "expirationDateMasked_example" // string | Masked Expiration date of the credit card (optional)
    processing := "processing_example" // string |  (optional)
    swiped := true // bool |  (optional)
    userDefinedCardType := "userDefinedCardType_example" // string | Indicates the user defined credit card type if credit card type from a defined list is not provided (optional)
    cardId := "cardId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    cardIdExtension := int32(56) // int32 | Additional identifying value assigned by the creating system. (optional)
    cardIdContext := "cardIdContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    cardIdType := "cardIdType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    currentAuthorizedAmount := float32(8.14) // float32 | A monetary amount. (optional)
    currentAuthorizedAmountCurrencyCode := "currentAuthorizedAmountCurrencyCode_example" // string | Provides a currency code to reflect the currency in which an amount may be expressed. (optional)
    approvalAmountNeeded := float32(8.14) // float32 | A monetary amount. (optional)
    approvalAmountNeededCurrencyCode := "approvalAmountNeededCurrencyCode_example" // string | Provides a currency code to reflect the currency in which an amount may be expressed. (optional)
    balanceAmount := float32(8.14) // float32 | A monetary amount. (optional)
    balanceCurrencyCode := "balanceCurrencyCode_example" // string | Provides a currency code to reflect the currency in which an amount may be expressed. (optional)
    authorizationRuleCode := int32(56) // int32 | The authorization rule code. (optional)
    authorizationRuleAmount := float32(8.14) // float32 | A monetary amount. (optional)
    authorizationRuleCurrencyCode := "authorizationRuleCurrencyCode_example" // string | Provides a currency code to reflect the currency in which an amount may be expressed. (optional)
    authorizationRulePercent := float32(8.14) // float32 | A percentage value if the authorization rule is percentage based. (optional)
    emailFolio := true // bool |  (optional)
    emailFolioInfoId := "emailFolioInfoId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    emailFolioInfoIDExtension := int32(56) // int32 | Additional identifying value assigned by the creating system. (optional)
    emailFolioInfoIDContext := "emailFolioInfoIDContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    emailFolioInfoType := "emailFolioInfoType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    emailFolioInfoCreateDateTime := time.Now() // string | Time stamp of the creation. (optional)
    emailFolioInfoCreatorID := "emailFolioInfoCreatorID_example" // string | ID of creator. The creator could be a software system identifier or an identifier of an employee resposible for the creation. (optional)
    emailFolioInfoEmailAddress := "emailFolioInfoEmailAddress_example" // string | Defines the e-mail address. (optional)
    emailFolioInfoEmailFormat := "emailFolioInfoEmailFormat_example" // string | Supported Email format. (optional)
    emailFolioInfoLastModifierID := "emailFolioInfoLastModifierID_example" // string | Identifies the last software system or person to modify a record. (optional)
    emailFolioInfoLastModifyDateTime := time.Now() // string | Time stamp of last modification. (optional)
    emailFolioInfoOrderSequence := float32(8.14) // float32 | Display Order sequence. (optional)
    emailFolioInfoPrimaryInd := true // bool | When true, indicates a primary information. (optional)
    emailFolioInfoPurgeDate := time.Now() // string | Date an item will be purged from a database (e.g., from a live database to an archive). (optional)
    emailEmailFolioInfoType := "emailEmailFolioInfoType_example" // string | Defines the purpose of the e-mail address (e.g. personal, business, listserve). (optional)
    emailFolioInfoTypeDescription := "emailFolioInfoTypeDescription_example" // string | Describes the Type code (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CreditCardAPI.ValidateCreditCardType(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ReservationID(reservationID).ReservationIDIdExtension(reservationIDIdExtension).ReservationIDIdContext(reservationIDIdContext).ReservationIDType(reservationIDType).PaymentMethodDescription(paymentMethodDescription).PaymentMethodFolioView(paymentMethodFolioView).PaymentMethod(paymentMethod).AttachCreditCardToProfile(attachCreditCardToProfile).CardHolderName(cardHolderName).CardNumber(cardNumber).CardNumberLast4Digits(cardNumberLast4Digits).CardNumberMasked(cardNumberMasked).CardNumberType(cardNumberType).CardType(cardType).ExpirationDate(expirationDate).ExpirationDateExpired(expirationDateExpired).ExpirationDateMasked(expirationDateMasked).Processing(processing).Swiped(swiped).UserDefinedCardType(userDefinedCardType).CardId(cardId).CardIdExtension(cardIdExtension).CardIdContext(cardIdContext).CardIdType(cardIdType).CurrentAuthorizedAmount(currentAuthorizedAmount).CurrentAuthorizedAmountCurrencyCode(currentAuthorizedAmountCurrencyCode).ApprovalAmountNeeded(approvalAmountNeeded).ApprovalAmountNeededCurrencyCode(approvalAmountNeededCurrencyCode).BalanceAmount(balanceAmount).BalanceCurrencyCode(balanceCurrencyCode).AuthorizationRuleCode(authorizationRuleCode).AuthorizationRuleAmount(authorizationRuleAmount).AuthorizationRuleCurrencyCode(authorizationRuleCurrencyCode).AuthorizationRulePercent(authorizationRulePercent).EmailFolio(emailFolio).EmailFolioInfoId(emailFolioInfoId).EmailFolioInfoIDExtension(emailFolioInfoIDExtension).EmailFolioInfoIDContext(emailFolioInfoIDContext).EmailFolioInfoType(emailFolioInfoType).EmailFolioInfoCreateDateTime(emailFolioInfoCreateDateTime).EmailFolioInfoCreatorID(emailFolioInfoCreatorID).EmailFolioInfoEmailAddress(emailFolioInfoEmailAddress).EmailFolioInfoEmailFormat(emailFolioInfoEmailFormat).EmailFolioInfoLastModifierID(emailFolioInfoLastModifierID).EmailFolioInfoLastModifyDateTime(emailFolioInfoLastModifyDateTime).EmailFolioInfoOrderSequence(emailFolioInfoOrderSequence).EmailFolioInfoPrimaryInd(emailFolioInfoPrimaryInd).EmailFolioInfoPurgeDate(emailFolioInfoPurgeDate).EmailEmailFolioInfoType(emailEmailFolioInfoType).EmailFolioInfoTypeDescription(emailFolioInfoTypeDescription).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CreditCardAPI.ValidateCreditCardType``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ValidateCreditCardType`: CreditCardTypeValidationStatus
    fmt.Fprintf(os.Stdout, "Response from `CreditCardAPI.ValidateCreditCardType`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiValidateCreditCardTypeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **reservationID** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **reservationIDIdExtension** | **int32** | Additional identifying value assigned by the creating system. | 
 **reservationIDIdContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **reservationIDType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **paymentMethodDescription** | **string** |  | 
 **paymentMethodFolioView** | **int32** |  | 
 **paymentMethod** | **string** |  | 
 **attachCreditCardToProfile** | **bool** | Attach the credit card to profile. | 
 **cardHolderName** | **string** |  | 
 **cardNumber** | **string** |  | 
 **cardNumberLast4Digits** | **string** |  | 
 **cardNumberMasked** | **string** |  | 
 **cardNumberType** | **string** | Simple type for indicating if credit card number is tokenized. | 
 **cardType** | **string** | This is required for Credit Card Payment Methods. This indicates the type of Credit Card associated with this payment method. | 
 **expirationDate** | **string** | Expiration date of the credit card | 
 **expirationDateExpired** | **bool** |  | 
 **expirationDateMasked** | **string** | Masked Expiration date of the credit card | 
 **processing** | **string** |  | 
 **swiped** | **bool** |  | 
 **userDefinedCardType** | **string** | Indicates the user defined credit card type if credit card type from a defined list is not provided | 
 **cardId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **cardIdExtension** | **int32** | Additional identifying value assigned by the creating system. | 
 **cardIdContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **cardIdType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **currentAuthorizedAmount** | **float32** | A monetary amount. | 
 **currentAuthorizedAmountCurrencyCode** | **string** | Provides a currency code to reflect the currency in which an amount may be expressed. | 
 **approvalAmountNeeded** | **float32** | A monetary amount. | 
 **approvalAmountNeededCurrencyCode** | **string** | Provides a currency code to reflect the currency in which an amount may be expressed. | 
 **balanceAmount** | **float32** | A monetary amount. | 
 **balanceCurrencyCode** | **string** | Provides a currency code to reflect the currency in which an amount may be expressed. | 
 **authorizationRuleCode** | **int32** | The authorization rule code. | 
 **authorizationRuleAmount** | **float32** | A monetary amount. | 
 **authorizationRuleCurrencyCode** | **string** | Provides a currency code to reflect the currency in which an amount may be expressed. | 
 **authorizationRulePercent** | **float32** | A percentage value if the authorization rule is percentage based. | 
 **emailFolio** | **bool** |  | 
 **emailFolioInfoId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **emailFolioInfoIDExtension** | **int32** | Additional identifying value assigned by the creating system. | 
 **emailFolioInfoIDContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **emailFolioInfoType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **emailFolioInfoCreateDateTime** | **string** | Time stamp of the creation. | 
 **emailFolioInfoCreatorID** | **string** | ID of creator. The creator could be a software system identifier or an identifier of an employee resposible for the creation. | 
 **emailFolioInfoEmailAddress** | **string** | Defines the e-mail address. | 
 **emailFolioInfoEmailFormat** | **string** | Supported Email format. | 
 **emailFolioInfoLastModifierID** | **string** | Identifies the last software system or person to modify a record. | 
 **emailFolioInfoLastModifyDateTime** | **string** | Time stamp of last modification. | 
 **emailFolioInfoOrderSequence** | **float32** | Display Order sequence. | 
 **emailFolioInfoPrimaryInd** | **bool** | When true, indicates a primary information. | 
 **emailFolioInfoPurgeDate** | **string** | Date an item will be purged from a database (e.g., from a live database to an archive). | 
 **emailEmailFolioInfoType** | **string** | Defines the purpose of the e-mail address (e.g. personal, business, listserve). | 
 **emailFolioInfoTypeDescription** | **string** | Describes the Type code | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**CreditCardTypeValidationStatus**](CreditCardTypeValidationStatus.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


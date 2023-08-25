# \ReservationApi

All URIs are relative to */rsv/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**DeletePreCheckInReservation**](ReservationApi.md#DeletePreCheckInReservation) | **Delete** /hotels/{hotelId}/reservations/{reservationId}/preCheckIn | Revert a PreCheckIn Reservation
[**DeleteReservationLinks**](ReservationApi.md#DeleteReservationLinks) | **Delete** /hotels/{hotelId}/reservations/linkedReservations/{reservationId} | Remove Reservation Links
[**GetExternalSystemReservations**](ReservationApi.md#GetExternalSystemReservations) | **Get** /externalSystems/{extSystemCode}/reservations | Get Reservations for a hotel
[**GetHotelReservations**](ReservationApi.md#GetHotelReservations) | **Get** /hotels/{hotelId}/reservations | Get and search for reservations in a hotel
[**GetRateInfo**](ReservationApi.md#GetRateInfo) | **Get** /hotels/{hotelId}/reservations/rateInfo | Get rate information
[**GetReservation**](ReservationApi.md#GetReservation) | **Get** /hotels/{hotelId}/reservations/{reservationId} | Get reservation by ID
[**GetReservationActivityLog**](ReservationApi.md#GetReservationActivityLog) | **Get** /hotels/{hotelId}/reservations/activityLog | Fetch reservation activity log
[**GetReservationUpsellInfo**](ReservationApi.md#GetReservationUpsellInfo) | **Get** /hotels/{hotelId}/reservations/{reservationId}/upsell | Get available Upsell offers
[**GetReservations**](ReservationApi.md#GetReservations) | **Get** /reservations | Get Reservations for a hotel
[**PostCall**](ReservationApi.md#PostCall) | **Post** /calls | Register calls
[**PostCancelReservation**](ReservationApi.md#PostCancelReservation) | **Post** /hotels/{hotelId}/reservations/{reservationId}/cancellations | Cancel Reservation by ID
[**PostCombineShareReservations**](ReservationApi.md#PostCombineShareReservations) | **Post** /hotels/{hotelId}/reservations/{reservationId}/shares | Combine Share Reservations
[**PostCombineShareReservationsByExtId**](ReservationApi.md#PostCombineShareReservationsByExtId) | **Post** /hotels/{hotelId}/externalSystems/{externalSystemCode}/reservations/{reservationExternalId}/shares | Combine Share Reservations
[**PostPreCheckInReservation**](ReservationApi.md#PostPreCheckInReservation) | **Post** /hotels/{hotelId}/reservations/{reservationId}/preCheckIn | Pre-Checkin a Reservation
[**PostReservation**](ReservationApi.md#PostReservation) | **Post** /hotels/{hotelId}/reservations | Create Reservation
[**PostReservationByBlock**](ReservationApi.md#PostReservationByBlock) | **Post** /hotels/{hotelId}/blocks/{blockId}/reservations | Create Reservation for a Block
[**PostReservationLinks**](ReservationApi.md#PostReservationLinks) | **Post** /hotels/{hotelId}/reservations/linkedReservations/{reservationId} | Link Reservations
[**PostReservationLinksByChain**](ReservationApi.md#PostReservationLinksByChain) | **Post** /reservations/linkedReservations/{reservationId} | Link Reservations By Chain
[**PostUpsellReservation**](ReservationApi.md#PostUpsellReservation) | **Post** /hotels/{hotelId}/reservations/{reservationId}/upsell | Upsell a Reservation
[**PutReinstateReservation**](ReservationApi.md#PutReinstateReservation) | **Put** /hotels/{hotelId}/reservations/{reservationId}/cancellations | Reinstate a Reservation
[**PutReservation**](ReservationApi.md#PutReservation) | **Put** /hotels/{hotelId}/reservations/{reservationId} | Update Reservation by ID
[**PutValidateReservationChanges**](ReservationApi.md#PutValidateReservationChanges) | **Put** /hotels/{hotelId}/reservations/validations | Validate Reservation Change



## DeletePreCheckInReservation

> Status DeletePreCheckInReservation(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ResvIDExtension(resvIDExtension).ArrivalTime(arrivalTime).RoomNumber(roomNumber).GuestPreferredCurrency(guestPreferredCurrency).AllowMobileViewFolio(allowMobileViewFolio).PaymentMethodDescription(paymentMethodDescription).PaymentMethodFolioView(paymentMethodFolioView).PaymentMethod(paymentMethod).AttachCreditCardToProfile(attachCreditCardToProfile).CardHolderName(cardHolderName).CardNumber(cardNumber).CardNumberLast4Digits(cardNumberLast4Digits).CardNumberMasked(cardNumberMasked).CardOrToken(cardOrToken).CardType(cardType).ExpirationDate(expirationDate).ExpirationDateExpired(expirationDateExpired).ExpirationDateMasked(expirationDateMasked).Processing(processing).Swiped(swiped).UserDefinedCardType(userDefinedCardType).CardId(cardId).CardIdIDExtension(cardIdIDExtension).CardIdIDContext(cardIdIDContext).CardIdType(cardIdType).CurrentAuthorizedAmount(currentAuthorizedAmount).AuthorizedAmountCurrencyCode(authorizedAmountCurrencyCode).ApprovalAmountNeeded(approvalAmountNeeded).ApprovalAmountCurrencyCode(approvalAmountCurrencyCode).BalanceAmount(balanceAmount).BalanceCurrencyCode(balanceCurrencyCode).AuthorizationRuleCode(authorizationRuleCode).AuthorizationRuleAmount(authorizationRuleAmount).AuthorizationRuleCurrencyCode(authorizationRuleCurrencyCode).AuthorizationRulePercent(authorizationRulePercent).EmailFolio(emailFolio).EmailFolioID(emailFolioID).EmailFolioIDExtension(emailFolioIDExtension).EmailFolioIDContext(emailFolioIDContext).EmailFolioIDType(emailFolioIDType).EmailFolioCreateDateTime(emailFolioCreateDateTime).EmailFolioCreatorID(emailFolioCreatorID).EmailFolioEmailAddress(emailFolioEmailAddress).EmailFolioEmailFormat(emailFolioEmailFormat).EmailFolioLastModifierID(emailFolioLastModifierID).EmailFolioLastModifyDateTime(emailFolioLastModifyDateTime).EmailFolioOrderSequence(emailFolioOrderSequence).EmailFolioPrimaryInd(emailFolioPrimaryInd).EmailFolioPurgeDate(emailFolioPurgeDate).EmailFolioType(emailFolioType).EmailFolioTypeDescription(emailFolioTypeDescription).ArrivalCarrierCode(arrivalCarrierCode).ArrivalDateTime(arrivalDateTime).ArrivalStationCode(arrivalStationCode).ArrivalTransportCode(arrivalTransportCode).ArrivalTransportationReqd(arrivalTransportationReqd).ArrivalType(arrivalType).ArrivalComments(arrivalComments).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Revert a PreCheckIn Reservation



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    reservationId := "reservationId_example" // string | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA.
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    resvIDExtension := int32(56) // int32 | Additional identifying value assigned by the creating system. (optional)
    arrivalTime := time.Now() // time.Time | The time at which the guest arrives at the hotel. (optional)
    roomNumber := "roomNumber_example" // string | Room Number to be assigned to the reservation. (optional)
    guestPreferredCurrency := "guestPreferredCurrency_example" // string | Currency code preferred by guest. (optional)
    allowMobileViewFolio := true // bool | Attribute AllowMobileViewFolio is set to true when the reservation is eligible for viewing folio using mobile device. (optional)
    paymentMethodDescription := []string{"Inner_example"} // []string |  (optional)
    paymentMethodFolioView := []int32{int32(123)} // []int32 |  (optional)
    paymentMethod := []string{"Inner_example"} // []string |  (optional)
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
    cardIdIDExtension := int32(56) // int32 | Additional identifying value assigned by the creating system. (optional)
    cardIdIDContext := "cardIdIDContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    cardIdType := "cardIdType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    currentAuthorizedAmount := float32(8.14) // float32 | A monetary amount. (optional)
    authorizedAmountCurrencyCode := "authorizedAmountCurrencyCode_example" // string | Provides a currency code to reflect the currency in which an amount may be expressed. (optional)
    approvalAmountNeeded := float32(8.14) // float32 | A monetary amount. (optional)
    approvalAmountCurrencyCode := "approvalAmountCurrencyCode_example" // string | Provides a currency code to reflect the currency in which an amount may be expressed. (optional)
    balanceAmount := float32(8.14) // float32 | A monetary amount. (optional)
    balanceCurrencyCode := "balanceCurrencyCode_example" // string | Provides a currency code to reflect the currency in which an amount may be expressed. (optional)
    authorizationRuleCode := int32(56) // int32 | The authorization rule code. (optional)
    authorizationRuleAmount := float32(8.14) // float32 | A monetary amount. (optional)
    authorizationRuleCurrencyCode := "authorizationRuleCurrencyCode_example" // string | Provides a currency code to reflect the currency in which an amount may be expressed. (optional)
    authorizationRulePercent := float32(8.14) // float32 | A percentage value if the authorization rule is percentage based. (optional)
    emailFolio := true // bool |  (optional)
    emailFolioID := "emailFolioID_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    emailFolioIDExtension := int32(56) // int32 | Additional identifying value assigned by the creating system. (optional)
    emailFolioIDContext := "emailFolioIDContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    emailFolioIDType := "emailFolioIDType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    emailFolioCreateDateTime := time.Now() // time.Time | Time stamp of the creation. (optional)
    emailFolioCreatorID := "emailFolioCreatorID_example" // string | ID of creator. The creator could be a software system identifier or an identifier of an employee resposible for the creation. (optional)
    emailFolioEmailAddress := "emailFolioEmailAddress_example" // string | Defines the e-mail address. (optional)
    emailFolioEmailFormat := "emailFolioEmailFormat_example" // string | Supported Email format. (optional)
    emailFolioLastModifierID := "emailFolioLastModifierID_example" // string | Identifies the last software system or person to modify a record. (optional)
    emailFolioLastModifyDateTime := time.Now() // time.Time | Time stamp of last modification. (optional)
    emailFolioOrderSequence := float32(8.14) // float32 | Display Order sequence. (optional)
    emailFolioPrimaryInd := true // bool | When true, indicates a primary information. (optional)
    emailFolioPurgeDate := time.Now() // string | Date an item will be purged from a database (e.g., from a live database to an archive). (optional)
    emailFolioType := "emailFolioType_example" // string | Defines the purpose of the e-mail address (e.g. personal, business, listserve). (optional)
    emailFolioTypeDescription := "emailFolioTypeDescription_example" // string | Describes the Type code (optional)
    arrivalCarrierCode := "arrivalCarrierCode_example" // string |  (optional)
    arrivalDateTime := time.Now() // time.Time |  (optional)
    arrivalStationCode := "arrivalStationCode_example" // string |  (optional)
    arrivalTransportCode := "arrivalTransportCode_example" // string |  (optional)
    arrivalTransportationReqd := true // bool |  (optional)
    arrivalType := "arrivalType_example" // string |  (optional)
    arrivalComments := "arrivalComments_example" // string |  (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationApi.DeletePreCheckInReservation(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ResvIDExtension(resvIDExtension).ArrivalTime(arrivalTime).RoomNumber(roomNumber).GuestPreferredCurrency(guestPreferredCurrency).AllowMobileViewFolio(allowMobileViewFolio).PaymentMethodDescription(paymentMethodDescription).PaymentMethodFolioView(paymentMethodFolioView).PaymentMethod(paymentMethod).AttachCreditCardToProfile(attachCreditCardToProfile).CardHolderName(cardHolderName).CardNumber(cardNumber).CardNumberLast4Digits(cardNumberLast4Digits).CardNumberMasked(cardNumberMasked).CardOrToken(cardOrToken).CardType(cardType).ExpirationDate(expirationDate).ExpirationDateExpired(expirationDateExpired).ExpirationDateMasked(expirationDateMasked).Processing(processing).Swiped(swiped).UserDefinedCardType(userDefinedCardType).CardId(cardId).CardIdIDExtension(cardIdIDExtension).CardIdIDContext(cardIdIDContext).CardIdType(cardIdType).CurrentAuthorizedAmount(currentAuthorizedAmount).AuthorizedAmountCurrencyCode(authorizedAmountCurrencyCode).ApprovalAmountNeeded(approvalAmountNeeded).ApprovalAmountCurrencyCode(approvalAmountCurrencyCode).BalanceAmount(balanceAmount).BalanceCurrencyCode(balanceCurrencyCode).AuthorizationRuleCode(authorizationRuleCode).AuthorizationRuleAmount(authorizationRuleAmount).AuthorizationRuleCurrencyCode(authorizationRuleCurrencyCode).AuthorizationRulePercent(authorizationRulePercent).EmailFolio(emailFolio).EmailFolioID(emailFolioID).EmailFolioIDExtension(emailFolioIDExtension).EmailFolioIDContext(emailFolioIDContext).EmailFolioIDType(emailFolioIDType).EmailFolioCreateDateTime(emailFolioCreateDateTime).EmailFolioCreatorID(emailFolioCreatorID).EmailFolioEmailAddress(emailFolioEmailAddress).EmailFolioEmailFormat(emailFolioEmailFormat).EmailFolioLastModifierID(emailFolioLastModifierID).EmailFolioLastModifyDateTime(emailFolioLastModifyDateTime).EmailFolioOrderSequence(emailFolioOrderSequence).EmailFolioPrimaryInd(emailFolioPrimaryInd).EmailFolioPurgeDate(emailFolioPurgeDate).EmailFolioType(emailFolioType).EmailFolioTypeDescription(emailFolioTypeDescription).ArrivalCarrierCode(arrivalCarrierCode).ArrivalDateTime(arrivalDateTime).ArrivalStationCode(arrivalStationCode).ArrivalTransportCode(arrivalTransportCode).ArrivalTransportationReqd(arrivalTransportationReqd).ArrivalType(arrivalType).ArrivalComments(arrivalComments).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationApi.DeletePreCheckInReservation``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeletePreCheckInReservation`: Status
    fmt.Fprintf(os.Stdout, "Response from `ReservationApi.DeletePreCheckInReservation`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA. | 
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeletePreCheckInReservationRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **resvIDExtension** | **int32** | Additional identifying value assigned by the creating system. | 
 **arrivalTime** | **time.Time** | The time at which the guest arrives at the hotel. | 
 **roomNumber** | **string** | Room Number to be assigned to the reservation. | 
 **guestPreferredCurrency** | **string** | Currency code preferred by guest. | 
 **allowMobileViewFolio** | **bool** | Attribute AllowMobileViewFolio is set to true when the reservation is eligible for viewing folio using mobile device. | 
 **paymentMethodDescription** | **[]string** |  | 
 **paymentMethodFolioView** | **[]int32** |  | 
 **paymentMethod** | **[]string** |  | 
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
 **cardIdIDExtension** | **int32** | Additional identifying value assigned by the creating system. | 
 **cardIdIDContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **cardIdType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **currentAuthorizedAmount** | **float32** | A monetary amount. | 
 **authorizedAmountCurrencyCode** | **string** | Provides a currency code to reflect the currency in which an amount may be expressed. | 
 **approvalAmountNeeded** | **float32** | A monetary amount. | 
 **approvalAmountCurrencyCode** | **string** | Provides a currency code to reflect the currency in which an amount may be expressed. | 
 **balanceAmount** | **float32** | A monetary amount. | 
 **balanceCurrencyCode** | **string** | Provides a currency code to reflect the currency in which an amount may be expressed. | 
 **authorizationRuleCode** | **int32** | The authorization rule code. | 
 **authorizationRuleAmount** | **float32** | A monetary amount. | 
 **authorizationRuleCurrencyCode** | **string** | Provides a currency code to reflect the currency in which an amount may be expressed. | 
 **authorizationRulePercent** | **float32** | A percentage value if the authorization rule is percentage based. | 
 **emailFolio** | **bool** |  | 
 **emailFolioID** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **emailFolioIDExtension** | **int32** | Additional identifying value assigned by the creating system. | 
 **emailFolioIDContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **emailFolioIDType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **emailFolioCreateDateTime** | **time.Time** | Time stamp of the creation. | 
 **emailFolioCreatorID** | **string** | ID of creator. The creator could be a software system identifier or an identifier of an employee resposible for the creation. | 
 **emailFolioEmailAddress** | **string** | Defines the e-mail address. | 
 **emailFolioEmailFormat** | **string** | Supported Email format. | 
 **emailFolioLastModifierID** | **string** | Identifies the last software system or person to modify a record. | 
 **emailFolioLastModifyDateTime** | **time.Time** | Time stamp of last modification. | 
 **emailFolioOrderSequence** | **float32** | Display Order sequence. | 
 **emailFolioPrimaryInd** | **bool** | When true, indicates a primary information. | 
 **emailFolioPurgeDate** | **string** | Date an item will be purged from a database (e.g., from a live database to an archive). | 
 **emailFolioType** | **string** | Defines the purpose of the e-mail address (e.g. personal, business, listserve). | 
 **emailFolioTypeDescription** | **string** | Describes the Type code | 
 **arrivalCarrierCode** | **string** |  | 
 **arrivalDateTime** | **time.Time** |  | 
 **arrivalStationCode** | **string** |  | 
 **arrivalTransportCode** | **string** |  | 
 **arrivalTransportationReqd** | **bool** |  | 
 **arrivalType** | **string** |  | 
 **arrivalComments** | **string** |  | 
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


## DeleteReservationLinks

> Status DeleteReservationLinks(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Remove Reservation Links



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    reservationId := "reservationId_example" // string | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA.
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationApi.DeleteReservationLinks(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationApi.DeleteReservationLinks``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteReservationLinks`: Status
    fmt.Fprintf(os.Stdout, "Response from `ReservationApi.DeleteReservationLinks`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA. | 
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteReservationLinksRequest struct via the builder pattern


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


## GetExternalSystemReservations

> ReservationsDetails GetExternalSystemReservations(ctx, extSystemCode).ExternalReferenceList(externalReferenceList).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RecentlyAccessed(recentlyAccessed).Limit(limit).Offset(offset).SearchType(searchType).HotelIds(hotelIds).Text(text).ArrivalEndDate(arrivalEndDate).ArrivalStartDate(arrivalStartDate).DepartureEndDate(departureEndDate).DepartureStartDate(departureStartDate).ExpectedArrivalStartTime(expectedArrivalStartTime).ExpectedArrivalEndTime(expectedArrivalEndTime).ExpectedReturnEndTime(expectedReturnEndTime).ExpectedReturnStartTime(expectedReturnStartTime).CompanyNames(companyNames).TravelAgentIds(travelAgentIds).CompanyIds(companyIds).SourceIds(sourceIds).ContactIds(contactIds).GroupIds(groupIds).BillingContactIds(billingContactIds).ProfileIds(profileIds).MembershipCardNumber(membershipCardNumber).MembershipLevels(membershipLevels).MembershipTypes(membershipTypes).Surname(surname).GivenName(givenName).AnyVIPStatus(anyVIPStatus).VipCodes(vipCodes).GuaranteeCode(guaranteeCode).PaymentMethod(paymentMethod).DiscountApplied(discountApplied).User(user).CreatedBy(createdBy).CancelledByList(cancelledByList).CancelledOn(cancelledOn).RatePlanCodes(ratePlanCodes).SourceCodes(sourceCodes).MarketCodes(marketCodes).ExcludeBlockReservations(excludeBlockReservations).BlockName(blockName).BlockIds(blockIds).BlockCodes(blockCodes).CustomReference(customReference).RecordLocator(recordLocator).OrderBy(orderBy).SortOrder(sortOrder).RoomAssignedOnly(roomAssignedOnly).RoomUnassignedOnly(roomUnassignedOnly).RoomId(roomId).RoomType(roomType).RoomFeatures(roomFeatures).RoomSpecials(roomSpecials).RoomSmokingPreference(roomSmokingPreference).RoomFloorPreferences(roomFloorPreferences).HousekeepingRoomStatuses(housekeepingRoomStatuses).RoomClasses(roomClasses).RoomRangeFrom(roomRangeFrom).RoomRangeTo(roomRangeTo).Communication(communication).FetchInstructions(fetchInstructions).AllowPreRegistration(allowPreRegistration).HasDepositBalance(hasDepositBalance).HasOpenBalance(hasOpenBalance).HasOpenFolio(hasOpenFolio).IncludeScheduledCheckOut(includeScheduledCheckOut).LinkedOnly(linkedOnly).UnlinkedOnly(unlinkedOnly).ActualArrivals(actualArrivals).ActualDepartures(actualDepartures).ComplimentaryReservations(complimentaryReservations).DayOfArrivalCancels(dayOfArrivalCancels).DayUse(dayUse).EarlyDepartures(earlyDepartures).ExpectedArrivals(expectedArrivals).ExpectedDepartures(expectedDepartures).ExtendedStays(extendedStays).HouseUseReservations(houseUseReservations).Stayovers(stayovers).StayDate(stayDate).RoomRoutingId(roomRoutingId).ExcludePseudoRoomReservations(excludePseudoRoomReservations).ExcludeReservationIds(excludeReservationIds).ExcludeVIPStatusCodes(excludeVIPStatusCodes).ExcludeSpecials(excludeSpecials).ExcludeFloorPreferences(excludeFloorPreferences).ExcludeAdvanceCheckedIn(excludeAdvanceCheckedIn).PlayerId(playerId).GamingBalanceFrom(gamingBalanceFrom).GamingBalanceTo(gamingBalanceTo).CompAccountingBalanceFrom(compAccountingBalanceFrom).CompAccountingBalanceTo(compAccountingBalanceTo).SearchTypes(searchTypes).ReservationStatuses(reservationStatuses).TransportationCodes(transportationCodes).RoomReadyStatuses(roomReadyStatuses).CheckoutMessageReceived(checkoutMessageReceived).OptedForCommunication(optedForCommunication).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Reservations for a hotel



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    extSystemCode := "extSystemCode_example" // string | Code to identify the external system from which the request is coming. This is the ExternalSystem ID used to exchange information between OPERA and the external system.
    externalReferenceList := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    recentlyAccessed := true // bool | Mark this reservation as recently accessed. (optional)
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    offset := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional) (default to 0)
    searchType := "searchType_example" // string | Represents Reservation search type Player Snapshot. (optional)
    hotelIds := []string{"Inner_example"} // []string | List of Hotels to support searches with multiple resorts for which traces are to be fetched. (optional)
    text := "text_example" // string | Free form text field for searching all reservation fields (optional)
    arrivalEndDate := time.Now() // string | The ending value of the date range. (optional)
    arrivalStartDate := time.Now() // string | The starting value of the date range. (optional)
    departureEndDate := time.Now() // string | The ending value of the date range. (optional)
    departureStartDate := time.Now() // string | The starting value of the date range. (optional)
    expectedArrivalStartTime := time.Now() // time.Time | The ending value of the time span. (optional)
    expectedArrivalEndTime := time.Now() // time.Time | The starting value of the time span. (optional)
    expectedReturnEndTime := time.Now() // time.Time | The ending value of the time span. (optional)
    expectedReturnStartTime := time.Now() // time.Time | The starting value of the time span. (optional)
    companyNames := []string{"Inner_example"} // []string | Attached profile name (optional)
    travelAgentIds := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    companyIds := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    sourceIds := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    contactIds := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    groupIds := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    billingContactIds := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    profileIds := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    membershipCardNumber := "membershipCardNumber_example" // string | Membership ID criteria. (optional)
    membershipLevels := []string{"Inner_example"} // []string |  (optional)
    membershipTypes := []string{"Inner_example"} // []string |  (optional)
    surname := "surname_example" // string | Family name, last name. (optional)
    givenName := "givenName_example" // string | Given name, first name or names (optional)
    anyVIPStatus := true // bool | VIP status of the customer. (optional)
    vipCodes := []string{"Inner_example"} // []string | VIP status of the customer. (optional)
    guaranteeCode := "guaranteeCode_example" // string | Fetches the reservation having Guarantee Code(Reservation Type) supplied here. (optional)
    paymentMethod := "paymentMethod_example" // string | Fetches the reservation having method of payment supplied here. (optional)
    discountApplied := true // bool | Fetches the reservation for which discount is applied (optional) (default to false)
    user := []string{"Inner_example"} // []string |  (optional)
    createdBy := "createdBy_example" // string | Fetches reservation created by specified user. If both CreatedByUsers and CreatedBy is specified, CreatedByUsers will take precedence. (optional)
    cancelledByList := []string{"Inner_example"} // []string | Fetches reservations cancelled by list of users. (optional)
    cancelledOn := time.Now() // string | Fetches the reservations which are cancelled on a specific date. (optional)
    ratePlanCodes := []string{"Inner_example"} // []string |  (optional)
    sourceCodes := []string{"Inner_example"} // []string |  (optional)
    marketCodes := []string{"Inner_example"} // []string |  (optional)
    excludeBlockReservations := true // bool | If true the search result will exclude the blocks reservations. (optional)
    blockName := "blockName_example" // string | The Name of the block that is attached to the reservation. (optional)
    blockIds := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    blockCodes := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    customReference := "customReference_example" // string | Custom reference (optional)
    recordLocator := "recordLocator_example" // string | GDS Record Locator for reservation. (optional)
    orderBy := []string{"OrderBy_example"} // []string |  (optional)
    sortOrder := []string{"SortOrder_example"} // []string |  (optional) (default to ["Asc"])
    roomAssignedOnly := true // bool | Indicator to query reservations which have a room number assigned. (optional)
    roomUnassignedOnly := true // bool | Indicator to query reservations which does not have a room number assigned. (optional)
    roomId := "roomId_example" // string | Room number of the reservation to search by. (optional)
    roomType := []string{"Inner_example"} // []string | Room Type. (optional)
    roomFeatures := []string{"Inner_example"} // []string | A code representing a room feature. (optional)
    roomSpecials := []string{"Inner_example"} // []string | Preference value for display purposes. (optional)
    roomSmokingPreference := "roomSmokingPreference_example" // string | Preference value for display purposes. (optional)
    roomFloorPreferences := []string{"Inner_example"} // []string | Preference value for display purposes. (optional)
    housekeepingRoomStatuses := []string{"HousekeepingRoomStatuses_example"} // []string | Simple type for room status instructions to be used in requests for fetching housekeeping rooms. Valid status values are Clean, Dirty, Pickup, Inspected, OutOfOrder, OutOfService. (optional)
    roomClasses := []string{"Inner_example"} // []string |  (optional)
    roomRangeFrom := "roomRangeFrom_example" // string |  (optional)
    roomRangeTo := "roomRangeTo_example" // string |  (optional)
    communication := "communication_example" // string | Filter by the last digits of a reservation's phone number. (optional)
    fetchInstructions := []string{"FetchInstructions_example"} // []string | Instruction to fetch whether the room was assigned/upgraded by AI. This will also include Reservation instruction. (optional)
    allowPreRegistration := true // bool | Flag containing true or false value for reservation to be eligible for prior check in by guest using mobile device. Pass the ‘true’ or ‘false’ values when creating / modifying reservation to indicate whether a reservation is eligible for mobile check in yes / no. Upon fetch, the current state of the flag will show true or false. (optional)
    hasDepositBalance := true // bool | Indicates that only reservations with deposit balance should be expected from the result. (optional)
    hasOpenBalance := true // bool | Indicates that only reservations with open balance should be expected from the result. (optional)
    hasOpenFolio := true // bool | Indicates that only reservations with open folio should be expected from the result. (optional)
    includeScheduledCheckOut := true // bool | Criteria that indicates whether to scheduled checkouts or not. (optional)
    linkedOnly := true // bool | Indicates that only linked reservations should be expected from the result. (optional)
    unlinkedOnly := true // bool | Indicates that only unlinked reservations should be expected from the result. (optional)
    actualArrivals := true // bool | Indicates if reservations which have already arrived on the Search Date is required. (optional)
    actualDepartures := true // bool | Indicates if reservations which were expected to depart on the Search Date and have already checked, is required. (optional)
    complimentaryReservations := true // bool | Indicates if reservations where rate codes are marked as Complimentary Rates , is required. This flag should be used in conjunction with the Arrivals, Departures or StayOvers criteria. (optional)
    dayOfArrivalCancels := true // bool | Indicates if reservations which have cancelled on the Search Date which is also the day of arrival is required. (optional)
    dayUse := true // bool | Indicates if reservations which are day use reservation on the Search Date, is required. (optional)
    earlyDepartures := true // bool | Indicates if reservations which checked out early on the Search Date, is required. (optional)
    expectedArrivals := true // bool | Indicates if reservations which are expected arrivals for the Search Date and who have not yet arrived, is required. (optional)
    expectedDepartures := true // bool | Indicates if reservations which are expected departures for the Search Date and who have not yet departed, is required. (optional)
    extendedStays := true // bool | Indicates if reservations which have extended their stays on the Search Date, is required. (optional)
    houseUseReservations := true // bool | Indicates if reservations where rate codes are marked as House Use Rates , is required. This flag should be used in conjunction with the Arrivals, Departures or StayOvers criteria. (optional)
    stayovers := true // bool | Indicates if reservations which are StayOvers on the Search Date, is required. (optional)
    stayDate := time.Now() // string | Date for searching the reservations. This is the date for which the search types are applicable. If date is not available, the business date will be used by default. (optional)
    roomRoutingId := "roomRoutingId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    excludePseudoRoomReservations := true // bool | Indicates to exclude Pseudo room reservations. (optional)
    excludeReservationIds := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    excludeVIPStatusCodes := []string{"Inner_example"} // []string | VIP status of the customer. (optional)
    excludeSpecials := []string{"Inner_example"} // []string | Preference value for display purposes. (optional)
    excludeFloorPreferences := []string{"Inner_example"} // []string | Preference value for display purposes. (optional)
    excludeAdvanceCheckedIn := true // bool | Indicates to exclude Advance Checked In Reservations from search result. (optional)
    playerId := "playerId_example" // string | Player ID associated to the reservation. (optional)
    gamingBalanceFrom := float32(8.14) // float32 | Balance from. (optional)
    gamingBalanceTo := float32(8.14) // float32 | Balance to. (optional)
    compAccountingBalanceFrom := float32(8.14) // float32 | Comp Balance From (optional)
    compAccountingBalanceTo := float32(8.14) // float32 | Comp Balance To (optional)
    searchTypes := []string{"SearchTypes_example"} // []string | Represents Reservation search type Player Snapshot. (optional)
    reservationStatuses := []string{"ReservationStatuses_example"} // []string | Reservation status type for reservations search. (optional)
    transportationCodes := []string{"Inner_example"} // []string | Codes to be searched. (optional)
    roomReadyStatuses := []string{"RoomReadyStatuses_example"} // []string | Enum to denote the Status of Readiness messages sent to Guest Devices. (optional)
    checkoutMessageReceived := true // bool | Fetches the reservations for which Checkout Message is received. (optional)
    optedForCommunication := true // bool | Fetches the reservations for which reservation communication has been opted. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationApi.GetExternalSystemReservations(context.Background(), extSystemCode).ExternalReferenceList(externalReferenceList).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RecentlyAccessed(recentlyAccessed).Limit(limit).Offset(offset).SearchType(searchType).HotelIds(hotelIds).Text(text).ArrivalEndDate(arrivalEndDate).ArrivalStartDate(arrivalStartDate).DepartureEndDate(departureEndDate).DepartureStartDate(departureStartDate).ExpectedArrivalStartTime(expectedArrivalStartTime).ExpectedArrivalEndTime(expectedArrivalEndTime).ExpectedReturnEndTime(expectedReturnEndTime).ExpectedReturnStartTime(expectedReturnStartTime).CompanyNames(companyNames).TravelAgentIds(travelAgentIds).CompanyIds(companyIds).SourceIds(sourceIds).ContactIds(contactIds).GroupIds(groupIds).BillingContactIds(billingContactIds).ProfileIds(profileIds).MembershipCardNumber(membershipCardNumber).MembershipLevels(membershipLevels).MembershipTypes(membershipTypes).Surname(surname).GivenName(givenName).AnyVIPStatus(anyVIPStatus).VipCodes(vipCodes).GuaranteeCode(guaranteeCode).PaymentMethod(paymentMethod).DiscountApplied(discountApplied).User(user).CreatedBy(createdBy).CancelledByList(cancelledByList).CancelledOn(cancelledOn).RatePlanCodes(ratePlanCodes).SourceCodes(sourceCodes).MarketCodes(marketCodes).ExcludeBlockReservations(excludeBlockReservations).BlockName(blockName).BlockIds(blockIds).BlockCodes(blockCodes).CustomReference(customReference).RecordLocator(recordLocator).OrderBy(orderBy).SortOrder(sortOrder).RoomAssignedOnly(roomAssignedOnly).RoomUnassignedOnly(roomUnassignedOnly).RoomId(roomId).RoomType(roomType).RoomFeatures(roomFeatures).RoomSpecials(roomSpecials).RoomSmokingPreference(roomSmokingPreference).RoomFloorPreferences(roomFloorPreferences).HousekeepingRoomStatuses(housekeepingRoomStatuses).RoomClasses(roomClasses).RoomRangeFrom(roomRangeFrom).RoomRangeTo(roomRangeTo).Communication(communication).FetchInstructions(fetchInstructions).AllowPreRegistration(allowPreRegistration).HasDepositBalance(hasDepositBalance).HasOpenBalance(hasOpenBalance).HasOpenFolio(hasOpenFolio).IncludeScheduledCheckOut(includeScheduledCheckOut).LinkedOnly(linkedOnly).UnlinkedOnly(unlinkedOnly).ActualArrivals(actualArrivals).ActualDepartures(actualDepartures).ComplimentaryReservations(complimentaryReservations).DayOfArrivalCancels(dayOfArrivalCancels).DayUse(dayUse).EarlyDepartures(earlyDepartures).ExpectedArrivals(expectedArrivals).ExpectedDepartures(expectedDepartures).ExtendedStays(extendedStays).HouseUseReservations(houseUseReservations).Stayovers(stayovers).StayDate(stayDate).RoomRoutingId(roomRoutingId).ExcludePseudoRoomReservations(excludePseudoRoomReservations).ExcludeReservationIds(excludeReservationIds).ExcludeVIPStatusCodes(excludeVIPStatusCodes).ExcludeSpecials(excludeSpecials).ExcludeFloorPreferences(excludeFloorPreferences).ExcludeAdvanceCheckedIn(excludeAdvanceCheckedIn).PlayerId(playerId).GamingBalanceFrom(gamingBalanceFrom).GamingBalanceTo(gamingBalanceTo).CompAccountingBalanceFrom(compAccountingBalanceFrom).CompAccountingBalanceTo(compAccountingBalanceTo).SearchTypes(searchTypes).ReservationStatuses(reservationStatuses).TransportationCodes(transportationCodes).RoomReadyStatuses(roomReadyStatuses).CheckoutMessageReceived(checkoutMessageReceived).OptedForCommunication(optedForCommunication).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationApi.GetExternalSystemReservations``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetExternalSystemReservations`: ReservationsDetails
    fmt.Fprintf(os.Stdout, "Response from `ReservationApi.GetExternalSystemReservations`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**extSystemCode** | **string** | Code to identify the external system from which the request is coming. This is the ExternalSystem ID used to exchange information between OPERA and the external system. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetExternalSystemReservationsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **externalReferenceList** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **recentlyAccessed** | **bool** | Mark this reservation as recently accessed. | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **offset** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [default to 0]
 **searchType** | **string** | Represents Reservation search type Player Snapshot. | 
 **hotelIds** | **[]string** | List of Hotels to support searches with multiple resorts for which traces are to be fetched. | 
 **text** | **string** | Free form text field for searching all reservation fields | 
 **arrivalEndDate** | **string** | The ending value of the date range. | 
 **arrivalStartDate** | **string** | The starting value of the date range. | 
 **departureEndDate** | **string** | The ending value of the date range. | 
 **departureStartDate** | **string** | The starting value of the date range. | 
 **expectedArrivalStartTime** | **time.Time** | The ending value of the time span. | 
 **expectedArrivalEndTime** | **time.Time** | The starting value of the time span. | 
 **expectedReturnEndTime** | **time.Time** | The ending value of the time span. | 
 **expectedReturnStartTime** | **time.Time** | The starting value of the time span. | 
 **companyNames** | **[]string** | Attached profile name | 
 **travelAgentIds** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **companyIds** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **sourceIds** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **contactIds** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **groupIds** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **billingContactIds** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **profileIds** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **membershipCardNumber** | **string** | Membership ID criteria. | 
 **membershipLevels** | **[]string** |  | 
 **membershipTypes** | **[]string** |  | 
 **surname** | **string** | Family name, last name. | 
 **givenName** | **string** | Given name, first name or names | 
 **anyVIPStatus** | **bool** | VIP status of the customer. | 
 **vipCodes** | **[]string** | VIP status of the customer. | 
 **guaranteeCode** | **string** | Fetches the reservation having Guarantee Code(Reservation Type) supplied here. | 
 **paymentMethod** | **string** | Fetches the reservation having method of payment supplied here. | 
 **discountApplied** | **bool** | Fetches the reservation for which discount is applied | [default to false]
 **user** | **[]string** |  | 
 **createdBy** | **string** | Fetches reservation created by specified user. If both CreatedByUsers and CreatedBy is specified, CreatedByUsers will take precedence. | 
 **cancelledByList** | **[]string** | Fetches reservations cancelled by list of users. | 
 **cancelledOn** | **string** | Fetches the reservations which are cancelled on a specific date. | 
 **ratePlanCodes** | **[]string** |  | 
 **sourceCodes** | **[]string** |  | 
 **marketCodes** | **[]string** |  | 
 **excludeBlockReservations** | **bool** | If true the search result will exclude the blocks reservations. | 
 **blockName** | **string** | The Name of the block that is attached to the reservation. | 
 **blockIds** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **blockCodes** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **customReference** | **string** | Custom reference | 
 **recordLocator** | **string** | GDS Record Locator for reservation. | 
 **orderBy** | **[]string** |  | 
 **sortOrder** | **[]string** |  | [default to [&quot;Asc&quot;]]
 **roomAssignedOnly** | **bool** | Indicator to query reservations which have a room number assigned. | 
 **roomUnassignedOnly** | **bool** | Indicator to query reservations which does not have a room number assigned. | 
 **roomId** | **string** | Room number of the reservation to search by. | 
 **roomType** | **[]string** | Room Type. | 
 **roomFeatures** | **[]string** | A code representing a room feature. | 
 **roomSpecials** | **[]string** | Preference value for display purposes. | 
 **roomSmokingPreference** | **string** | Preference value for display purposes. | 
 **roomFloorPreferences** | **[]string** | Preference value for display purposes. | 
 **housekeepingRoomStatuses** | **[]string** | Simple type for room status instructions to be used in requests for fetching housekeeping rooms. Valid status values are Clean, Dirty, Pickup, Inspected, OutOfOrder, OutOfService. | 
 **roomClasses** | **[]string** |  | 
 **roomRangeFrom** | **string** |  | 
 **roomRangeTo** | **string** |  | 
 **communication** | **string** | Filter by the last digits of a reservation&#39;s phone number. | 
 **fetchInstructions** | **[]string** | Instruction to fetch whether the room was assigned/upgraded by AI. This will also include Reservation instruction. | 
 **allowPreRegistration** | **bool** | Flag containing true or false value for reservation to be eligible for prior check in by guest using mobile device. Pass the ‘true’ or ‘false’ values when creating / modifying reservation to indicate whether a reservation is eligible for mobile check in yes / no. Upon fetch, the current state of the flag will show true or false. | 
 **hasDepositBalance** | **bool** | Indicates that only reservations with deposit balance should be expected from the result. | 
 **hasOpenBalance** | **bool** | Indicates that only reservations with open balance should be expected from the result. | 
 **hasOpenFolio** | **bool** | Indicates that only reservations with open folio should be expected from the result. | 
 **includeScheduledCheckOut** | **bool** | Criteria that indicates whether to scheduled checkouts or not. | 
 **linkedOnly** | **bool** | Indicates that only linked reservations should be expected from the result. | 
 **unlinkedOnly** | **bool** | Indicates that only unlinked reservations should be expected from the result. | 
 **actualArrivals** | **bool** | Indicates if reservations which have already arrived on the Search Date is required. | 
 **actualDepartures** | **bool** | Indicates if reservations which were expected to depart on the Search Date and have already checked, is required. | 
 **complimentaryReservations** | **bool** | Indicates if reservations where rate codes are marked as Complimentary Rates , is required. This flag should be used in conjunction with the Arrivals, Departures or StayOvers criteria. | 
 **dayOfArrivalCancels** | **bool** | Indicates if reservations which have cancelled on the Search Date which is also the day of arrival is required. | 
 **dayUse** | **bool** | Indicates if reservations which are day use reservation on the Search Date, is required. | 
 **earlyDepartures** | **bool** | Indicates if reservations which checked out early on the Search Date, is required. | 
 **expectedArrivals** | **bool** | Indicates if reservations which are expected arrivals for the Search Date and who have not yet arrived, is required. | 
 **expectedDepartures** | **bool** | Indicates if reservations which are expected departures for the Search Date and who have not yet departed, is required. | 
 **extendedStays** | **bool** | Indicates if reservations which have extended their stays on the Search Date, is required. | 
 **houseUseReservations** | **bool** | Indicates if reservations where rate codes are marked as House Use Rates , is required. This flag should be used in conjunction with the Arrivals, Departures or StayOvers criteria. | 
 **stayovers** | **bool** | Indicates if reservations which are StayOvers on the Search Date, is required. | 
 **stayDate** | **string** | Date for searching the reservations. This is the date for which the search types are applicable. If date is not available, the business date will be used by default. | 
 **roomRoutingId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **excludePseudoRoomReservations** | **bool** | Indicates to exclude Pseudo room reservations. | 
 **excludeReservationIds** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **excludeVIPStatusCodes** | **[]string** | VIP status of the customer. | 
 **excludeSpecials** | **[]string** | Preference value for display purposes. | 
 **excludeFloorPreferences** | **[]string** | Preference value for display purposes. | 
 **excludeAdvanceCheckedIn** | **bool** | Indicates to exclude Advance Checked In Reservations from search result. | 
 **playerId** | **string** | Player ID associated to the reservation. | 
 **gamingBalanceFrom** | **float32** | Balance from. | 
 **gamingBalanceTo** | **float32** | Balance to. | 
 **compAccountingBalanceFrom** | **float32** | Comp Balance From | 
 **compAccountingBalanceTo** | **float32** | Comp Balance To | 
 **searchTypes** | **[]string** | Represents Reservation search type Player Snapshot. | 
 **reservationStatuses** | **[]string** | Reservation status type for reservations search. | 
 **transportationCodes** | **[]string** | Codes to be searched. | 
 **roomReadyStatuses** | **[]string** | Enum to denote the Status of Readiness messages sent to Guest Devices. | 
 **checkoutMessageReceived** | **bool** | Fetches the reservations for which Checkout Message is received. | 
 **optedForCommunication** | **bool** | Fetches the reservations for which reservation communication has been opted. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ReservationsDetails**](ReservationsDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetHotelReservations

> ReservationsDetails GetHotelReservations(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RecentlyAccessed(recentlyAccessed).Limit(limit).Offset(offset).SearchType(searchType).Text(text).ReservationIdList(reservationIdList).ConfirmationNumberList(confirmationNumberList).CancellationNumberList(cancellationNumberList).ExternalReferenceIds(externalReferenceIds).ExternalSystemCodes(externalSystemCodes).ArrivalEndDate(arrivalEndDate).ArrivalStartDate(arrivalStartDate).DepartureEndDate(departureEndDate).DepartureStartDate(departureStartDate).StayOnStartDate(stayOnStartDate).CreatedOnStartDate(createdOnStartDate).ExpectedArrivalEndTime(expectedArrivalEndTime).ExpectedArrivalStartTime(expectedArrivalStartTime).ExpectedReturnEndTime(expectedReturnEndTime).ExpectedReturnStartTime(expectedReturnStartTime).CompanyNames(companyNames).SourceNames(sourceNames).TravelAgentNames(travelAgentNames).GroupNames(groupNames).TravelAgentIds(travelAgentIds).CompanyIds(companyIds).SourceIds(sourceIds).ContactIds(contactIds).GroupIds(groupIds).BillingContactIds(billingContactIds).ProfileId(profileId).MembershipCardNumber(membershipCardNumber).MembershipLevels(membershipLevels).MembershipTypes(membershipTypes).Surname(surname).GivenName(givenName).AnyVIPStatus(anyVIPStatus).VipCodes(vipCodes).GuaranteeCode(guaranteeCode).PaymentMethod(paymentMethod).DiscountApplied(discountApplied).User(user).CreatedBy(createdBy).CancelledByList(cancelledByList).CancelledOn(cancelledOn).RatePlanCodes(ratePlanCodes).SourceCodes(sourceCodes).MarketCodes(marketCodes).ExcludeBlockReservations(excludeBlockReservations).BlockCriteriaHotelCode(blockCriteriaHotelCode).BlockName(blockName).BlockIds(blockIds).BlockCodes(blockCodes).CustomReference(customReference).RecordLocator(recordLocator).OrderBy(orderBy).SortOrder(sortOrder).RoomAssignedOnly(roomAssignedOnly).RoomUnassignedOnly(roomUnassignedOnly).RoomId(roomId).RoomType(roomType).RoomFeatures(roomFeatures).RoomSpecials(roomSpecials).RoomSmokingPreference(roomSmokingPreference).RoomFloorPreferences(roomFloorPreferences).HousekeepingRoomStatuses(housekeepingRoomStatuses).RoomClasses(roomClasses).RoomRangeFrom(roomRangeFrom).RoomRangeTo(roomRangeTo).Communication(communication).FetchInstructions(fetchInstructions).AllowedReservationActions(allowedReservationActions).AllowPreRegistration(allowPreRegistration).ExcludeNoPost(excludeNoPost).ExcludePMRooms(excludePMRooms).HasDepositBalance(hasDepositBalance).HasOpenBalance(hasOpenBalance).HasOpenFolio(hasOpenFolio).IncludeScheduledCheckOut(includeScheduledCheckOut).LinkedOnly(linkedOnly).UnlinkedOnly(unlinkedOnly).ActualArrivals(actualArrivals).ActualDepartures(actualDepartures).ComplimentaryReservations(complimentaryReservations).DayOfArrivalCancels(dayOfArrivalCancels).DayUse(dayUse).EarlyDepartures(earlyDepartures).ExpectedArrivals(expectedArrivals).ExpectedDepartures(expectedDepartures).ExtendedStays(extendedStays).HouseUseReservations(houseUseReservations).Stayovers(stayovers).StayDate(stayDate).RoomRoutingId(roomRoutingId).PeriodicFolio(periodicFolio).FolioSettlementTypes(folioSettlementTypes).DefaultDays(defaultDays).ExcludePseudoRoomReservations(excludePseudoRoomReservations).ExcludeReservationIds(excludeReservationIds).ExcludeVIPStatusCodes(excludeVIPStatusCodes).ExcludeSpecials(excludeSpecials).ExcludeFloorPreferences(excludeFloorPreferences).ExcludeAdvanceCheckedIn(excludeAdvanceCheckedIn).PlayerId(playerId).GamingBalanceFrom(gamingBalanceFrom).GamingBalanceTo(gamingBalanceTo).CompAccountingBalanceFrom(compAccountingBalanceFrom).CompAccountingBalanceTo(compAccountingBalanceTo).SearchTypes(searchTypes).ReservationStatuses(reservationStatuses).TransportationCodes(transportationCodes).RoomReadyStatuses(roomReadyStatuses).CheckoutMessageReceived(checkoutMessageReceived).OptedForCommunication(optedForCommunication).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get and search for reservations in a hotel



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    recentlyAccessed := true // bool | Mark this reservation as recently accessed. (optional)
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    offset := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional) (default to 0)
    searchType := "searchType_example" // string | Represents Reservation search type Player Snapshot. (optional)
    text := "text_example" // string | Free form text field for searching all reservation fields (optional)
    reservationIdList := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    confirmationNumberList := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    cancellationNumberList := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    externalReferenceIds := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    externalSystemCodes := []string{"Inner_example"} // []string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional) (default to ["External"])
    arrivalEndDate := time.Now() // string | The ending value of the date range. (optional)
    arrivalStartDate := time.Now() // string | The starting value of the date range. (optional)
    departureEndDate := time.Now() // string | The ending value of the date range. (optional)
    departureStartDate := time.Now() // string | The starting value of the date range. (optional)
    stayOnStartDate := time.Now() // string | The starting value of the date range. (optional)
    createdOnStartDate := time.Now() // string | The starting value of the date range. (optional)
    expectedArrivalEndTime := time.Now() // time.Time | The ending value of the time span. (optional)
    expectedArrivalStartTime := time.Now() // time.Time | The starting value of the time span. (optional)
    expectedReturnEndTime := time.Now() // time.Time | The ending value of the time span. (optional)
    expectedReturnStartTime := time.Now() // time.Time | The starting value of the time span. (optional)
    companyNames := []string{"Inner_example"} // []string | Attached profile name (optional)
    sourceNames := []string{"Inner_example"} // []string | Attached profile name (optional)
    travelAgentNames := []string{"Inner_example"} // []string | Attached profile name (optional)
    groupNames := []string{"Inner_example"} // []string | Attached profile name (optional)
    travelAgentIds := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. API expects CompanyName Query parameter along with the ID to obtain correct results. (optional)
    companyIds := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. API expects CompanyName Query parameter along with the ID to obtain correct results. (optional)
    sourceIds := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. API expects CompanyName Query parameter along with the ID to obtain correct results. (optional)
    contactIds := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. API expects CompanyName Query parameter along with the ID to obtain correct results. (optional)
    groupIds := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. API expects CompanyName Query parameter along with the ID to obtain correct results. (optional)
    billingContactIds := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. API expects CompanyName Query parameter along with the ID to obtain correct results. (optional)
    profileId := "profileId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    membershipCardNumber := "membershipCardNumber_example" // string | Membership ID criteria. (optional)
    membershipLevels := []string{"Inner_example"} // []string |  (optional)
    membershipTypes := []string{"Inner_example"} // []string |  (optional)
    surname := "surname_example" // string | Family name, last name. (optional)
    givenName := "givenName_example" // string | Given name, first name or names (optional)
    anyVIPStatus := true // bool | VIP status of the customer. (optional)
    vipCodes := []string{"Inner_example"} // []string | VIP status of the customer. (optional)
    guaranteeCode := "guaranteeCode_example" // string | Fetches the reservation having Guarantee Code(Reservation Type) supplied here. (optional)
    paymentMethod := "paymentMethod_example" // string | Fetches the reservation having method of payment supplied here. (optional)
    discountApplied := true // bool | Fetches the reservation for which discount is applied (optional) (default to false)
    user := []string{"Inner_example"} // []string |  (optional)
    createdBy := "createdBy_example" // string | Fetches reservation created by specified user. If both CreatedByUsers and CreatedBy is specified, CreatedByUsers will take precedence. (optional)
    cancelledByList := []string{"Inner_example"} // []string | Fetches reservations cancelled by list of users. (optional)
    cancelledOn := time.Now() // string | Fetches the reservations which are cancelled on a specific date. (optional)
    ratePlanCodes := []string{"Inner_example"} // []string |  (optional)
    sourceCodes := []string{"Inner_example"} // []string |  (optional)
    marketCodes := []string{"Inner_example"} // []string |  (optional)
    excludeBlockReservations := true // bool | If true the search result will exclude the blocks reservations. (optional)
    blockCriteriaHotelCode := "blockCriteriaHotelCode_example" // string | The Hotel Code of the Block. (optional)
    blockName := "blockName_example" // string | The Name of the block that is attached to the reservation. (optional)
    blockIds := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    blockCodes := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    customReference := "customReference_example" // string | Custom reference (optional)
    recordLocator := "recordLocator_example" // string | GDS Record Locator for reservation. (optional)
    orderBy := []string{"OrderBy_example"} // []string |  (optional)
    sortOrder := []string{"SortOrder_example"} // []string |  (optional) (default to ["Asc"])
    roomAssignedOnly := true // bool | Indicator to query reservations which have a room number assigned. (optional)
    roomUnassignedOnly := true // bool | Indicator to query reservations which does not have a room number assigned. (optional)
    roomId := "roomId_example" // string | Room number of the reservation to search by. (optional)
    roomType := []string{"Inner_example"} // []string | Room Type. (optional)
    roomFeatures := []string{"Inner_example"} // []string | A code representing a room feature. (optional)
    roomSpecials := []string{"Inner_example"} // []string | Preference value for display purposes. (optional)
    roomSmokingPreference := "roomSmokingPreference_example" // string | Preference value for display purposes. (optional)
    roomFloorPreferences := []string{"Inner_example"} // []string | Preference value for display purposes. (optional)
    housekeepingRoomStatuses := []string{"HousekeepingRoomStatuses_example"} // []string | Simple type for room status instructions to be used in requests for fetching housekeeping rooms. Valid status values are Clean, Dirty, Pickup, Inspected, OutOfOrder, OutOfService. (optional)
    roomClasses := []string{"Inner_example"} // []string |  (optional)
    roomRangeFrom := "roomRangeFrom_example" // string |  (optional)
    roomRangeTo := "roomRangeTo_example" // string |  (optional)
    communication := "communication_example" // string | Filter by the last digits of a reservation's phone number. (optional)
    fetchInstructions := []string{"FetchInstructions_example"} // []string | Instruction to fetch whether the room was assigned/upgraded by AI. This will also include Reservation instruction. (optional)
    allowedReservationActions := []string{"AllowedReservationActions_example"} // []string | Flag indicating whether the Enrollment is in progress or not for the Profile associated with this Reservation. (optional)
    allowPreRegistration := true // bool | Flag containing true or false value for reservation to be eligible for prior check in by guest using mobile device. Pass the ‘true’ or ‘false’ values when creating / modifying reservation to indicate whether a reservation is eligible for mobile check in yes / no. Upon fetch, the current state of the flag will show true or false. (optional)
    excludeNoPost := true // bool | Indicates that reservations with No Post flag should not be expected from the result. (optional)
    excludePMRooms := true // bool | Indicates that reservations with PM room type should not be expected from the result. (optional)
    hasDepositBalance := true // bool | Indicates that only reservations with deposit balance should be expected from the result. (optional)
    hasOpenBalance := true // bool | Indicates that only reservations with open balance should be expected from the result. (optional)
    hasOpenFolio := true // bool | Indicates that only reservations with open folio should be expected from the result. (optional)
    includeScheduledCheckOut := true // bool | Criteria that indicates whether to scheduled checkouts or not. (optional)
    linkedOnly := true // bool | Indicates that only linked reservations should be expected from the result. (optional)
    unlinkedOnly := true // bool | Indicates that only unlinked reservations should be expected from the result. (optional)
    actualArrivals := true // bool | Indicates if reservations which have already arrived on the Search Date is required. (optional)
    actualDepartures := true // bool | Indicates if reservations which were expected to depart on the Search Date and have already checked, is required. (optional)
    complimentaryReservations := true // bool | Indicates if reservations where rate codes are marked as Complimentary Rates , is required. This flag should be used in conjunction with the Arrivals, Departures or StayOvers criteria. (optional)
    dayOfArrivalCancels := true // bool | Indicates if reservations which have cancelled on the Search Date which is also the day of arrival is required. (optional)
    dayUse := true // bool | Indicates if reservations which are day use reservation on the Search Date, is required. (optional)
    earlyDepartures := true // bool | Indicates if reservations which checked out early on the Search Date, is required. (optional)
    expectedArrivals := true // bool | Indicates if reservations which are expected arrivals for the Search Date and who have not yet arrived, is required. (optional)
    expectedDepartures := true // bool | Indicates if reservations which are expected departures for the Search Date and who have not yet departed, is required. (optional)
    extendedStays := true // bool | Indicates if reservations which have extended their stays on the Search Date, is required. (optional)
    houseUseReservations := true // bool | Indicates if reservations where rate codes are marked as House Use Rates , is required. This flag should be used in conjunction with the Arrivals, Departures or StayOvers criteria. (optional)
    stayovers := true // bool | Indicates if reservations which are StayOvers on the Search Date, is required. (optional)
    stayDate := time.Now() // string | Date for searching the reservations. This is the date for which the search types are applicable. If date is not available, the business date will be used by default. (optional)
    roomRoutingId := "roomRoutingId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    periodicFolio := "periodicFolio_example" // string | Periodic folio type. (optional)
    folioSettlementTypes := "folioSettlementTypes_example" // string | Comma-delimited list of Folio Settlement Type codes. (optional)
    defaultDays := true // bool | Use the Number of Days For Settlement, defined for the Reservation. (optional)
    excludePseudoRoomReservations := true // bool | Indicates to exclude Pseudo room reservations. (optional)
    excludeReservationIds := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    excludeVIPStatusCodes := []string{"Inner_example"} // []string | VIP status of the customer. (optional)
    excludeSpecials := []string{"Inner_example"} // []string | Preference value for display purposes. (optional)
    excludeFloorPreferences := []string{"Inner_example"} // []string | Preference value for display purposes. (optional)
    excludeAdvanceCheckedIn := true // bool | Indicates to exclude Advance Checked In Reservations from search result. (optional)
    playerId := "playerId_example" // string | Player ID associated to the reservation. (optional)
    gamingBalanceFrom := float32(8.14) // float32 | Balance from. (optional)
    gamingBalanceTo := float32(8.14) // float32 | Balance to. (optional)
    compAccountingBalanceFrom := float32(8.14) // float32 | Comp Balance From (optional)
    compAccountingBalanceTo := float32(8.14) // float32 | Comp Balance To (optional)
    searchTypes := []string{"SearchTypes_example"} // []string | Represents Reservation search type Player Snapshot. (optional)
    reservationStatuses := []string{"ReservationStatuses_example"} // []string | Reservation status type for reservations search. (optional)
    transportationCodes := []string{"Inner_example"} // []string | Codes to be searched. (optional)
    roomReadyStatuses := []string{"RoomReadyStatuses_example"} // []string | Enum to denote the Status of Readiness messages sent to Guest Devices. (optional)
    checkoutMessageReceived := true // bool | Fetches the reservations for which Checkout Message is received. (optional)
    optedForCommunication := true // bool | Fetches the reservations for which reservation communication has been opted. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationApi.GetHotelReservations(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RecentlyAccessed(recentlyAccessed).Limit(limit).Offset(offset).SearchType(searchType).Text(text).ReservationIdList(reservationIdList).ConfirmationNumberList(confirmationNumberList).CancellationNumberList(cancellationNumberList).ExternalReferenceIds(externalReferenceIds).ExternalSystemCodes(externalSystemCodes).ArrivalEndDate(arrivalEndDate).ArrivalStartDate(arrivalStartDate).DepartureEndDate(departureEndDate).DepartureStartDate(departureStartDate).StayOnStartDate(stayOnStartDate).CreatedOnStartDate(createdOnStartDate).ExpectedArrivalEndTime(expectedArrivalEndTime).ExpectedArrivalStartTime(expectedArrivalStartTime).ExpectedReturnEndTime(expectedReturnEndTime).ExpectedReturnStartTime(expectedReturnStartTime).CompanyNames(companyNames).SourceNames(sourceNames).TravelAgentNames(travelAgentNames).GroupNames(groupNames).TravelAgentIds(travelAgentIds).CompanyIds(companyIds).SourceIds(sourceIds).ContactIds(contactIds).GroupIds(groupIds).BillingContactIds(billingContactIds).ProfileId(profileId).MembershipCardNumber(membershipCardNumber).MembershipLevels(membershipLevels).MembershipTypes(membershipTypes).Surname(surname).GivenName(givenName).AnyVIPStatus(anyVIPStatus).VipCodes(vipCodes).GuaranteeCode(guaranteeCode).PaymentMethod(paymentMethod).DiscountApplied(discountApplied).User(user).CreatedBy(createdBy).CancelledByList(cancelledByList).CancelledOn(cancelledOn).RatePlanCodes(ratePlanCodes).SourceCodes(sourceCodes).MarketCodes(marketCodes).ExcludeBlockReservations(excludeBlockReservations).BlockCriteriaHotelCode(blockCriteriaHotelCode).BlockName(blockName).BlockIds(blockIds).BlockCodes(blockCodes).CustomReference(customReference).RecordLocator(recordLocator).OrderBy(orderBy).SortOrder(sortOrder).RoomAssignedOnly(roomAssignedOnly).RoomUnassignedOnly(roomUnassignedOnly).RoomId(roomId).RoomType(roomType).RoomFeatures(roomFeatures).RoomSpecials(roomSpecials).RoomSmokingPreference(roomSmokingPreference).RoomFloorPreferences(roomFloorPreferences).HousekeepingRoomStatuses(housekeepingRoomStatuses).RoomClasses(roomClasses).RoomRangeFrom(roomRangeFrom).RoomRangeTo(roomRangeTo).Communication(communication).FetchInstructions(fetchInstructions).AllowedReservationActions(allowedReservationActions).AllowPreRegistration(allowPreRegistration).ExcludeNoPost(excludeNoPost).ExcludePMRooms(excludePMRooms).HasDepositBalance(hasDepositBalance).HasOpenBalance(hasOpenBalance).HasOpenFolio(hasOpenFolio).IncludeScheduledCheckOut(includeScheduledCheckOut).LinkedOnly(linkedOnly).UnlinkedOnly(unlinkedOnly).ActualArrivals(actualArrivals).ActualDepartures(actualDepartures).ComplimentaryReservations(complimentaryReservations).DayOfArrivalCancels(dayOfArrivalCancels).DayUse(dayUse).EarlyDepartures(earlyDepartures).ExpectedArrivals(expectedArrivals).ExpectedDepartures(expectedDepartures).ExtendedStays(extendedStays).HouseUseReservations(houseUseReservations).Stayovers(stayovers).StayDate(stayDate).RoomRoutingId(roomRoutingId).PeriodicFolio(periodicFolio).FolioSettlementTypes(folioSettlementTypes).DefaultDays(defaultDays).ExcludePseudoRoomReservations(excludePseudoRoomReservations).ExcludeReservationIds(excludeReservationIds).ExcludeVIPStatusCodes(excludeVIPStatusCodes).ExcludeSpecials(excludeSpecials).ExcludeFloorPreferences(excludeFloorPreferences).ExcludeAdvanceCheckedIn(excludeAdvanceCheckedIn).PlayerId(playerId).GamingBalanceFrom(gamingBalanceFrom).GamingBalanceTo(gamingBalanceTo).CompAccountingBalanceFrom(compAccountingBalanceFrom).CompAccountingBalanceTo(compAccountingBalanceTo).SearchTypes(searchTypes).ReservationStatuses(reservationStatuses).TransportationCodes(transportationCodes).RoomReadyStatuses(roomReadyStatuses).CheckoutMessageReceived(checkoutMessageReceived).OptedForCommunication(optedForCommunication).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationApi.GetHotelReservations``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetHotelReservations`: ReservationsDetails
    fmt.Fprintf(os.Stdout, "Response from `ReservationApi.GetHotelReservations`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetHotelReservationsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **recentlyAccessed** | **bool** | Mark this reservation as recently accessed. | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **offset** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [default to 0]
 **searchType** | **string** | Represents Reservation search type Player Snapshot. | 
 **text** | **string** | Free form text field for searching all reservation fields | 
 **reservationIdList** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **confirmationNumberList** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **cancellationNumberList** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **externalReferenceIds** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **externalSystemCodes** | **[]string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | [default to [&quot;External&quot;]]
 **arrivalEndDate** | **string** | The ending value of the date range. | 
 **arrivalStartDate** | **string** | The starting value of the date range. | 
 **departureEndDate** | **string** | The ending value of the date range. | 
 **departureStartDate** | **string** | The starting value of the date range. | 
 **stayOnStartDate** | **string** | The starting value of the date range. | 
 **createdOnStartDate** | **string** | The starting value of the date range. | 
 **expectedArrivalEndTime** | **time.Time** | The ending value of the time span. | 
 **expectedArrivalStartTime** | **time.Time** | The starting value of the time span. | 
 **expectedReturnEndTime** | **time.Time** | The ending value of the time span. | 
 **expectedReturnStartTime** | **time.Time** | The starting value of the time span. | 
 **companyNames** | **[]string** | Attached profile name | 
 **sourceNames** | **[]string** | Attached profile name | 
 **travelAgentNames** | **[]string** | Attached profile name | 
 **groupNames** | **[]string** | Attached profile name | 
 **travelAgentIds** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. API expects CompanyName Query parameter along with the ID to obtain correct results. | 
 **companyIds** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. API expects CompanyName Query parameter along with the ID to obtain correct results. | 
 **sourceIds** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. API expects CompanyName Query parameter along with the ID to obtain correct results. | 
 **contactIds** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. API expects CompanyName Query parameter along with the ID to obtain correct results. | 
 **groupIds** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. API expects CompanyName Query parameter along with the ID to obtain correct results. | 
 **billingContactIds** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. API expects CompanyName Query parameter along with the ID to obtain correct results. | 
 **profileId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **membershipCardNumber** | **string** | Membership ID criteria. | 
 **membershipLevels** | **[]string** |  | 
 **membershipTypes** | **[]string** |  | 
 **surname** | **string** | Family name, last name. | 
 **givenName** | **string** | Given name, first name or names | 
 **anyVIPStatus** | **bool** | VIP status of the customer. | 
 **vipCodes** | **[]string** | VIP status of the customer. | 
 **guaranteeCode** | **string** | Fetches the reservation having Guarantee Code(Reservation Type) supplied here. | 
 **paymentMethod** | **string** | Fetches the reservation having method of payment supplied here. | 
 **discountApplied** | **bool** | Fetches the reservation for which discount is applied | [default to false]
 **user** | **[]string** |  | 
 **createdBy** | **string** | Fetches reservation created by specified user. If both CreatedByUsers and CreatedBy is specified, CreatedByUsers will take precedence. | 
 **cancelledByList** | **[]string** | Fetches reservations cancelled by list of users. | 
 **cancelledOn** | **string** | Fetches the reservations which are cancelled on a specific date. | 
 **ratePlanCodes** | **[]string** |  | 
 **sourceCodes** | **[]string** |  | 
 **marketCodes** | **[]string** |  | 
 **excludeBlockReservations** | **bool** | If true the search result will exclude the blocks reservations. | 
 **blockCriteriaHotelCode** | **string** | The Hotel Code of the Block. | 
 **blockName** | **string** | The Name of the block that is attached to the reservation. | 
 **blockIds** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **blockCodes** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **customReference** | **string** | Custom reference | 
 **recordLocator** | **string** | GDS Record Locator for reservation. | 
 **orderBy** | **[]string** |  | 
 **sortOrder** | **[]string** |  | [default to [&quot;Asc&quot;]]
 **roomAssignedOnly** | **bool** | Indicator to query reservations which have a room number assigned. | 
 **roomUnassignedOnly** | **bool** | Indicator to query reservations which does not have a room number assigned. | 
 **roomId** | **string** | Room number of the reservation to search by. | 
 **roomType** | **[]string** | Room Type. | 
 **roomFeatures** | **[]string** | A code representing a room feature. | 
 **roomSpecials** | **[]string** | Preference value for display purposes. | 
 **roomSmokingPreference** | **string** | Preference value for display purposes. | 
 **roomFloorPreferences** | **[]string** | Preference value for display purposes. | 
 **housekeepingRoomStatuses** | **[]string** | Simple type for room status instructions to be used in requests for fetching housekeeping rooms. Valid status values are Clean, Dirty, Pickup, Inspected, OutOfOrder, OutOfService. | 
 **roomClasses** | **[]string** |  | 
 **roomRangeFrom** | **string** |  | 
 **roomRangeTo** | **string** |  | 
 **communication** | **string** | Filter by the last digits of a reservation&#39;s phone number. | 
 **fetchInstructions** | **[]string** | Instruction to fetch whether the room was assigned/upgraded by AI. This will also include Reservation instruction. | 
 **allowedReservationActions** | **[]string** | Flag indicating whether the Enrollment is in progress or not for the Profile associated with this Reservation. | 
 **allowPreRegistration** | **bool** | Flag containing true or false value for reservation to be eligible for prior check in by guest using mobile device. Pass the ‘true’ or ‘false’ values when creating / modifying reservation to indicate whether a reservation is eligible for mobile check in yes / no. Upon fetch, the current state of the flag will show true or false. | 
 **excludeNoPost** | **bool** | Indicates that reservations with No Post flag should not be expected from the result. | 
 **excludePMRooms** | **bool** | Indicates that reservations with PM room type should not be expected from the result. | 
 **hasDepositBalance** | **bool** | Indicates that only reservations with deposit balance should be expected from the result. | 
 **hasOpenBalance** | **bool** | Indicates that only reservations with open balance should be expected from the result. | 
 **hasOpenFolio** | **bool** | Indicates that only reservations with open folio should be expected from the result. | 
 **includeScheduledCheckOut** | **bool** | Criteria that indicates whether to scheduled checkouts or not. | 
 **linkedOnly** | **bool** | Indicates that only linked reservations should be expected from the result. | 
 **unlinkedOnly** | **bool** | Indicates that only unlinked reservations should be expected from the result. | 
 **actualArrivals** | **bool** | Indicates if reservations which have already arrived on the Search Date is required. | 
 **actualDepartures** | **bool** | Indicates if reservations which were expected to depart on the Search Date and have already checked, is required. | 
 **complimentaryReservations** | **bool** | Indicates if reservations where rate codes are marked as Complimentary Rates , is required. This flag should be used in conjunction with the Arrivals, Departures or StayOvers criteria. | 
 **dayOfArrivalCancels** | **bool** | Indicates if reservations which have cancelled on the Search Date which is also the day of arrival is required. | 
 **dayUse** | **bool** | Indicates if reservations which are day use reservation on the Search Date, is required. | 
 **earlyDepartures** | **bool** | Indicates if reservations which checked out early on the Search Date, is required. | 
 **expectedArrivals** | **bool** | Indicates if reservations which are expected arrivals for the Search Date and who have not yet arrived, is required. | 
 **expectedDepartures** | **bool** | Indicates if reservations which are expected departures for the Search Date and who have not yet departed, is required. | 
 **extendedStays** | **bool** | Indicates if reservations which have extended their stays on the Search Date, is required. | 
 **houseUseReservations** | **bool** | Indicates if reservations where rate codes are marked as House Use Rates , is required. This flag should be used in conjunction with the Arrivals, Departures or StayOvers criteria. | 
 **stayovers** | **bool** | Indicates if reservations which are StayOvers on the Search Date, is required. | 
 **stayDate** | **string** | Date for searching the reservations. This is the date for which the search types are applicable. If date is not available, the business date will be used by default. | 
 **roomRoutingId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **periodicFolio** | **string** | Periodic folio type. | 
 **folioSettlementTypes** | **string** | Comma-delimited list of Folio Settlement Type codes. | 
 **defaultDays** | **bool** | Use the Number of Days For Settlement, defined for the Reservation. | 
 **excludePseudoRoomReservations** | **bool** | Indicates to exclude Pseudo room reservations. | 
 **excludeReservationIds** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **excludeVIPStatusCodes** | **[]string** | VIP status of the customer. | 
 **excludeSpecials** | **[]string** | Preference value for display purposes. | 
 **excludeFloorPreferences** | **[]string** | Preference value for display purposes. | 
 **excludeAdvanceCheckedIn** | **bool** | Indicates to exclude Advance Checked In Reservations from search result. | 
 **playerId** | **string** | Player ID associated to the reservation. | 
 **gamingBalanceFrom** | **float32** | Balance from. | 
 **gamingBalanceTo** | **float32** | Balance to. | 
 **compAccountingBalanceFrom** | **float32** | Comp Balance From | 
 **compAccountingBalanceTo** | **float32** | Comp Balance To | 
 **searchTypes** | **[]string** | Represents Reservation search type Player Snapshot. | 
 **reservationStatuses** | **[]string** | Reservation status type for reservations search. | 
 **transportationCodes** | **[]string** | Codes to be searched. | 
 **roomReadyStatuses** | **[]string** | Enum to denote the Status of Readiness messages sent to Guest Devices. | 
 **checkoutMessageReceived** | **bool** | Fetches the reservations for which Checkout Message is received. | 
 **optedForCommunication** | **bool** | Fetches the reservations for which reservation communication has been opted. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ReservationsDetails**](ReservationsDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetRateInfo

> RateInfo GetRateInfo(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CurrencyCode(currencyCode).SummaryInfo(summaryInfo).CriteriaStartDate(criteriaStartDate).CriteriaEndDate(criteriaEndDate).Adults(adults).Children(children).ChildAge(childAge).Bucket1Count(bucket1Count).Bucket2Count(bucket2Count).Bucket3Count(bucket3Count).Bucket4Count(bucket4Count).Bucket5Count(bucket5Count).DetailDate(detailDate).BlockId(blockId).BlockIdType(blockIdType).Id(id).IdExtension(idExtension).IdContext(idContext).Type_(type_).RatePlanCode(ratePlanCode).EffectiveRateEnd(effectiveRateEnd).EffectiveRateStart(effectiveRateStart).RoomType(roomType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get rate information



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    currencyCode := "currencyCode_example" // string | The code specifying a monetary unit. Use ISO 4217, three alpha code. (optional)
    summaryInfo := true // bool | Flag to indicate if summary information is required. (optional)
    criteriaStartDate := time.Now() // string |  (optional)
    criteriaEndDate := time.Now() // string |  (optional)
    adults := int32(56) // int32 | Defines the number of Adults. (optional)
    children := int32(56) // int32 | Defines the number of Children. (optional)
    childAge := []int32{int32(123)} // []int32 | Age of a child in years. (optional)
    bucket1Count := int32(56) // int32 | Number of children classified under the first Age Qualifying Group(Child Bucket#1). (optional)
    bucket2Count := int32(56) // int32 | Number of children classified under the second Age Qualifying Group(Child Bucket#2). (optional)
    bucket3Count := int32(56) // int32 | Number of children classified under the third Age Qualifying Group(Child Bucket#3). (optional)
    bucket4Count := int32(56) // int32 | Number of children classified under the fourth Age Qualifying Group(Child Bucket#4). (optional)
    bucket5Count := int32(56) // int32 | Number of children classified under the fifth Age Qualifying Group(Child Bucket#5). (optional)
    detailDate := time.Now() // string | This field is only required when the criteria is meant for a detailed results. The date for the rate detail is needed. (optional)
    blockId := "blockId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    blockIdType := "blockIdType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    id := "id_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    idExtension := int32(56) // int32 | Additional identifying value assigned by the creating system. (optional)
    idContext := "idContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    type_ := "type__example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    ratePlanCode := "ratePlanCode_example" // string | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. (optional)
    effectiveRateEnd := []string{time.Now()} // []string | The ending value of the date range. (optional)
    effectiveRateStart := []string{time.Now()} // []string | The starting value of the date range. (optional)
    roomType := "roomType_example" // string | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationApi.GetRateInfo(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CurrencyCode(currencyCode).SummaryInfo(summaryInfo).CriteriaStartDate(criteriaStartDate).CriteriaEndDate(criteriaEndDate).Adults(adults).Children(children).ChildAge(childAge).Bucket1Count(bucket1Count).Bucket2Count(bucket2Count).Bucket3Count(bucket3Count).Bucket4Count(bucket4Count).Bucket5Count(bucket5Count).DetailDate(detailDate).BlockId(blockId).BlockIdType(blockIdType).Id(id).IdExtension(idExtension).IdContext(idContext).Type_(type_).RatePlanCode(ratePlanCode).EffectiveRateEnd(effectiveRateEnd).EffectiveRateStart(effectiveRateStart).RoomType(roomType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationApi.GetRateInfo``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetRateInfo`: RateInfo
    fmt.Fprintf(os.Stdout, "Response from `ReservationApi.GetRateInfo`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetRateInfoRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **currencyCode** | **string** | The code specifying a monetary unit. Use ISO 4217, three alpha code. | 
 **summaryInfo** | **bool** | Flag to indicate if summary information is required. | 
 **criteriaStartDate** | **string** |  | 
 **criteriaEndDate** | **string** |  | 
 **adults** | **int32** | Defines the number of Adults. | 
 **children** | **int32** | Defines the number of Children. | 
 **childAge** | **[]int32** | Age of a child in years. | 
 **bucket1Count** | **int32** | Number of children classified under the first Age Qualifying Group(Child Bucket#1). | 
 **bucket2Count** | **int32** | Number of children classified under the second Age Qualifying Group(Child Bucket#2). | 
 **bucket3Count** | **int32** | Number of children classified under the third Age Qualifying Group(Child Bucket#3). | 
 **bucket4Count** | **int32** | Number of children classified under the fourth Age Qualifying Group(Child Bucket#4). | 
 **bucket5Count** | **int32** | Number of children classified under the fifth Age Qualifying Group(Child Bucket#5). | 
 **detailDate** | **string** | This field is only required when the criteria is meant for a detailed results. The date for the rate detail is needed. | 
 **blockId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **blockIdType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **id** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **idExtension** | **int32** | Additional identifying value assigned by the creating system. | 
 **idContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **type_** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **ratePlanCode** | **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | 
 **effectiveRateEnd** | **[]string** | The ending value of the date range. | 
 **effectiveRateStart** | **[]string** | The starting value of the date range. | 
 **roomType** | **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**RateInfo**](RateInfo.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetReservation

> Reservation GetReservation(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FetchInstructions(fetchInstructions).AllowedActions(allowedActions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get reservation by ID



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    reservationId := "reservationId_example" // string | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA.
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    fetchInstructions := []string{"FetchInstructions_example"} // []string | Instruction to fetch whether the room was assigned/upgraded by AI. This will also include Reservation instruction. (optional)
    allowedActions := []string{"AllowedActions_example"} // []string | Flag indicating whether the Enrollment is in progress or not for the Profile associated with this Reservation. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationApi.GetReservation(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FetchInstructions(fetchInstructions).AllowedActions(allowedActions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationApi.GetReservation``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetReservation`: Reservation
    fmt.Fprintf(os.Stdout, "Response from `ReservationApi.GetReservation`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA. | 
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetReservationRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **fetchInstructions** | **[]string** | Instruction to fetch whether the room was assigned/upgraded by AI. This will also include Reservation instruction. | 
 **allowedActions** | **[]string** | Flag indicating whether the Enrollment is in progress or not for the Profile associated with this Reservation. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Reservation**](Reservation.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetReservationActivityLog

> ActivityLog GetReservationActivityLog(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).ParameterName(parameterName).ParameterValue(parameterValue).ActivityGroup(activityGroup).ActivityType(activityType).SearchText(searchText).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Fetch reservation activity log



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    parameterName := []string{"Inner_example"} // []string | Name of the parameter. (optional)
    parameterValue := []string{"Inner_example"} // []string | Value of the parameter. (optional)
    activityGroup := "activityGroup_example" // string |  (optional)
    activityType := "activityType_example" // string |  (optional)
    searchText := "searchText_example" // string | Search text for the user activity log. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationApi.GetReservationActivityLog(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).ParameterName(parameterName).ParameterValue(parameterValue).ActivityGroup(activityGroup).ActivityType(activityType).SearchText(searchText).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationApi.GetReservationActivityLog``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetReservationActivityLog`: ActivityLog
    fmt.Fprintf(os.Stdout, "Response from `ReservationApi.GetReservationActivityLog`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetReservationActivityLogRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **parameterName** | **[]string** | Name of the parameter. | 
 **parameterValue** | **[]string** | Value of the parameter. | 
 **activityGroup** | **string** |  | 
 **activityType** | **string** |  | 
 **searchText** | **string** | Search text for the user activity log. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ActivityLog**](ActivityLog.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetReservationUpsellInfo

> ReservationUpsellInfo GetReservationUpsellInfo(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get available Upsell offers



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    reservationId := "reservationId_example" // string | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA.
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationApi.GetReservationUpsellInfo(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationApi.GetReservationUpsellInfo``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetReservationUpsellInfo`: ReservationUpsellInfo
    fmt.Fprintf(os.Stdout, "Response from `ReservationApi.GetReservationUpsellInfo`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA. | 
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetReservationUpsellInfoRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ReservationUpsellInfo**](ReservationUpsellInfo.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetReservations

> ReservationsDetails GetReservations(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RecentlyAccessed(recentlyAccessed).Limit(limit).Offset(offset).SearchType(searchType).HotelIds(hotelIds).Text(text).ReservationIdList(reservationIdList).ConfirmationNumberList(confirmationNumberList).CancellationNumberList(cancellationNumberList).ExternalReferenceIds(externalReferenceIds).ExternalSystemCodes(externalSystemCodes).ArrivalEndDate(arrivalEndDate).ArrivalStartDate(arrivalStartDate).DepartureEndDate(departureEndDate).DepartureStartDate(departureStartDate).ExpectedArrivalStartTime(expectedArrivalStartTime).ExpectedArrivalEndTime(expectedArrivalEndTime).ExpectedReturnEndTime(expectedReturnEndTime).ExpectedReturnStartTime(expectedReturnStartTime).CompanyNames(companyNames).TravelAgentIds(travelAgentIds).CompanyIds(companyIds).SourceIds(sourceIds).ContactIds(contactIds).GroupIds(groupIds).BillingContactIds(billingContactIds).ProfileIds(profileIds).MembershipCardNumber(membershipCardNumber).MembershipLevels(membershipLevels).MembershipTypes(membershipTypes).Surname(surname).GivenName(givenName).AnyVIPStatus(anyVIPStatus).VipCodes(vipCodes).GuaranteeCode(guaranteeCode).PaymentMethod(paymentMethod).DiscountApplied(discountApplied).User(user).CreatedBy(createdBy).CancelledByList(cancelledByList).CancelledOn(cancelledOn).RatePlanCodes(ratePlanCodes).SourceCodes(sourceCodes).MarketCodes(marketCodes).ExcludeBlockReservations(excludeBlockReservations).BlockName(blockName).BlockIds(blockIds).BlockCodes(blockCodes).CustomReference(customReference).RecordLocator(recordLocator).OrderBy(orderBy).SortOrder(sortOrder).RoomAssignedOnly(roomAssignedOnly).RoomUnassignedOnly(roomUnassignedOnly).RoomId(roomId).RoomType(roomType).RoomFeatures(roomFeatures).RoomSpecials(roomSpecials).RoomSmokingPreference(roomSmokingPreference).RoomFloorPreferences(roomFloorPreferences).HousekeepingRoomStatuses(housekeepingRoomStatuses).RoomClasses(roomClasses).RoomRangeFrom(roomRangeFrom).RoomRangeTo(roomRangeTo).Communication(communication).FetchInstructions(fetchInstructions).AllowPreRegistration(allowPreRegistration).HasDepositBalance(hasDepositBalance).HasOpenBalance(hasOpenBalance).HasOpenFolio(hasOpenFolio).IncludeScheduledCheckOut(includeScheduledCheckOut).LinkedOnly(linkedOnly).UnlinkedOnly(unlinkedOnly).ActualArrivals(actualArrivals).ActualDepartures(actualDepartures).ComplimentaryReservations(complimentaryReservations).DayOfArrivalCancels(dayOfArrivalCancels).DayUse(dayUse).EarlyDepartures(earlyDepartures).ExpectedArrivals(expectedArrivals).ExpectedDepartures(expectedDepartures).ExtendedStays(extendedStays).HouseUseReservations(houseUseReservations).Stayovers(stayovers).StayDate(stayDate).RoomRoutingId(roomRoutingId).ExcludePseudoRoomReservations(excludePseudoRoomReservations).ExcludeReservationIds(excludeReservationIds).ExcludeVIPStatusCodes(excludeVIPStatusCodes).ExcludeSpecials(excludeSpecials).ExcludeFloorPreferences(excludeFloorPreferences).ExcludeAdvanceCheckedIn(excludeAdvanceCheckedIn).PlayerId(playerId).GamingBalanceFrom(gamingBalanceFrom).GamingBalanceTo(gamingBalanceTo).CompAccountingBalanceFrom(compAccountingBalanceFrom).CompAccountingBalanceTo(compAccountingBalanceTo).SearchTypes(searchTypes).ReservationStatuses(reservationStatuses).TransportationCodes(transportationCodes).RoomReadyStatuses(roomReadyStatuses).CheckoutMessageReceived(checkoutMessageReceived).OptedForCommunication(optedForCommunication).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Reservations for a hotel



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    recentlyAccessed := true // bool | Mark this reservation as recently accessed. (optional)
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    offset := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional) (default to 0)
    searchType := "searchType_example" // string | Represents Reservation search type Player Snapshot. (optional)
    hotelIds := []string{"Inner_example"} // []string | List of Hotels to support searches with multiple resorts for which traces are to be fetched. (optional)
    text := "text_example" // string | Free form text field for searching all reservation fields (optional)
    reservationIdList := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    confirmationNumberList := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    cancellationNumberList := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    externalReferenceIds := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    externalSystemCodes := []string{"Inner_example"} // []string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional) (default to ["External"])
    arrivalEndDate := time.Now() // string | The ending value of the date range. (optional)
    arrivalStartDate := time.Now() // string | The starting value of the date range. (optional)
    departureEndDate := time.Now() // string | The ending value of the date range. (optional)
    departureStartDate := time.Now() // string | The starting value of the date range. (optional)
    expectedArrivalStartTime := time.Now() // time.Time | The ending value of the time span. (optional)
    expectedArrivalEndTime := time.Now() // time.Time | The starting value of the time span. (optional)
    expectedReturnEndTime := time.Now() // time.Time | The ending value of the time span. (optional)
    expectedReturnStartTime := time.Now() // time.Time | The starting value of the time span. (optional)
    companyNames := []string{"Inner_example"} // []string | Attached profile name (optional)
    travelAgentIds := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    companyIds := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    sourceIds := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    contactIds := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    groupIds := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    billingContactIds := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    profileIds := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    membershipCardNumber := "membershipCardNumber_example" // string | Membership ID criteria. (optional)
    membershipLevels := []string{"Inner_example"} // []string |  (optional)
    membershipTypes := []string{"Inner_example"} // []string |  (optional)
    surname := "surname_example" // string | Family name, last name. (optional)
    givenName := "givenName_example" // string | Given name, first name or names (optional)
    anyVIPStatus := true // bool | VIP status of the customer. (optional)
    vipCodes := []string{"Inner_example"} // []string | VIP status of the customer. (optional)
    guaranteeCode := "guaranteeCode_example" // string | Fetches the reservation having Guarantee Code(Reservation Type) supplied here. (optional)
    paymentMethod := "paymentMethod_example" // string | Fetches the reservation having method of payment supplied here. (optional)
    discountApplied := true // bool | Fetches the reservation for which discount is applied (optional) (default to false)
    user := []string{"Inner_example"} // []string |  (optional)
    createdBy := "createdBy_example" // string | Fetches reservation created by specified user. If both CreatedByUsers and CreatedBy is specified, CreatedByUsers will take precedence. (optional)
    cancelledByList := []string{"Inner_example"} // []string | Fetches reservations cancelled by list of users. (optional)
    cancelledOn := time.Now() // string | Fetches the reservations which are cancelled on a specific date. (optional)
    ratePlanCodes := []string{"Inner_example"} // []string |  (optional)
    sourceCodes := []string{"Inner_example"} // []string |  (optional)
    marketCodes := []string{"Inner_example"} // []string |  (optional)
    excludeBlockReservations := true // bool | If true the search result will exclude the blocks reservations. (optional)
    blockName := "blockName_example" // string | The Name of the block that is attached to the reservation. (optional)
    blockIds := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    blockCodes := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    customReference := "customReference_example" // string | Custom reference (optional)
    recordLocator := "recordLocator_example" // string | GDS Record Locator for reservation. (optional)
    orderBy := []string{"OrderBy_example"} // []string |  (optional)
    sortOrder := []string{"SortOrder_example"} // []string |  (optional) (default to ["Asc"])
    roomAssignedOnly := true // bool | Indicator to query reservations which have a room number assigned. (optional)
    roomUnassignedOnly := true // bool | Indicator to query reservations which does not have a room number assigned. (optional)
    roomId := "roomId_example" // string | Room number of the reservation to search by. (optional)
    roomType := []string{"Inner_example"} // []string | Room Type. (optional)
    roomFeatures := []string{"Inner_example"} // []string | A code representing a room feature. (optional)
    roomSpecials := []string{"Inner_example"} // []string | Preference value for display purposes. (optional)
    roomSmokingPreference := "roomSmokingPreference_example" // string | Preference value for display purposes. (optional)
    roomFloorPreferences := []string{"Inner_example"} // []string | Preference value for display purposes. (optional)
    housekeepingRoomStatuses := []string{"HousekeepingRoomStatuses_example"} // []string | Simple type for room status instructions to be used in requests for fetching housekeeping rooms. Valid status values are Clean, Dirty, Pickup, Inspected, OutOfOrder, OutOfService. (optional)
    roomClasses := []string{"Inner_example"} // []string |  (optional)
    roomRangeFrom := "roomRangeFrom_example" // string |  (optional)
    roomRangeTo := "roomRangeTo_example" // string |  (optional)
    communication := "communication_example" // string | Filter by the last digits of a reservation's phone number. (optional)
    fetchInstructions := []string{"FetchInstructions_example"} // []string | Instruction to fetch whether the room was assigned/upgraded by AI. This will also include Reservation instruction. (optional)
    allowPreRegistration := true // bool | Flag containing true or false value for reservation to be eligible for prior check in by guest using mobile device. Pass the ‘true’ or ‘false’ values when creating / modifying reservation to indicate whether a reservation is eligible for mobile check in yes / no. Upon fetch, the current state of the flag will show true or false. (optional)
    hasDepositBalance := true // bool | Indicates that only reservations with deposit balance should be expected from the result. (optional)
    hasOpenBalance := true // bool | Indicates that only reservations with open balance should be expected from the result. (optional)
    hasOpenFolio := true // bool | Indicates that only reservations with open folio should be expected from the result. (optional)
    includeScheduledCheckOut := true // bool | Criteria that indicates whether to scheduled checkouts or not. (optional)
    linkedOnly := true // bool | Indicates that only linked reservations should be expected from the result. (optional)
    unlinkedOnly := true // bool | Indicates that only unlinked reservations should be expected from the result. (optional)
    actualArrivals := true // bool | Indicates if reservations which have already arrived on the Search Date is required. (optional)
    actualDepartures := true // bool | Indicates if reservations which were expected to depart on the Search Date and have already checked, is required. (optional)
    complimentaryReservations := true // bool | Indicates if reservations where rate codes are marked as Complimentary Rates , is required. This flag should be used in conjunction with the Arrivals, Departures or StayOvers criteria. (optional)
    dayOfArrivalCancels := true // bool | Indicates if reservations which have cancelled on the Search Date which is also the day of arrival is required. (optional)
    dayUse := true // bool | Indicates if reservations which are day use reservation on the Search Date, is required. (optional)
    earlyDepartures := true // bool | Indicates if reservations which checked out early on the Search Date, is required. (optional)
    expectedArrivals := true // bool | Indicates if reservations which are expected arrivals for the Search Date and who have not yet arrived, is required. (optional)
    expectedDepartures := true // bool | Indicates if reservations which are expected departures for the Search Date and who have not yet departed, is required. (optional)
    extendedStays := true // bool | Indicates if reservations which have extended their stays on the Search Date, is required. (optional)
    houseUseReservations := true // bool | Indicates if reservations where rate codes are marked as House Use Rates , is required. This flag should be used in conjunction with the Arrivals, Departures or StayOvers criteria. (optional)
    stayovers := true // bool | Indicates if reservations which are StayOvers on the Search Date, is required. (optional)
    stayDate := time.Now() // string | Date for searching the reservations. This is the date for which the search types are applicable. If date is not available, the business date will be used by default. (optional)
    roomRoutingId := "roomRoutingId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    excludePseudoRoomReservations := true // bool | Indicates to exclude Pseudo room reservations. (optional)
    excludeReservationIds := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    excludeVIPStatusCodes := []string{"Inner_example"} // []string | VIP status of the customer. (optional)
    excludeSpecials := []string{"Inner_example"} // []string | Preference value for display purposes. (optional)
    excludeFloorPreferences := []string{"Inner_example"} // []string | Preference value for display purposes. (optional)
    excludeAdvanceCheckedIn := true // bool | Indicates to exclude Advance Checked In Reservations from search result. (optional)
    playerId := "playerId_example" // string | Player ID associated to the reservation. (optional)
    gamingBalanceFrom := float32(8.14) // float32 | Balance from. (optional)
    gamingBalanceTo := float32(8.14) // float32 | Balance to. (optional)
    compAccountingBalanceFrom := float32(8.14) // float32 | Comp Balance From (optional)
    compAccountingBalanceTo := float32(8.14) // float32 | Comp Balance To (optional)
    searchTypes := []string{"SearchTypes_example"} // []string | Represents Reservation search type Player Snapshot. (optional)
    reservationStatuses := []string{"ReservationStatuses_example"} // []string | Reservation status type for reservations search. (optional)
    transportationCodes := []string{"Inner_example"} // []string | Codes to be searched. (optional)
    roomReadyStatuses := []string{"RoomReadyStatuses_example"} // []string | Enum to denote the Status of Readiness messages sent to Guest Devices. (optional)
    checkoutMessageReceived := true // bool | Fetches the reservations for which Checkout Message is received. (optional)
    optedForCommunication := true // bool | Fetches the reservations for which reservation communication has been opted. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationApi.GetReservations(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RecentlyAccessed(recentlyAccessed).Limit(limit).Offset(offset).SearchType(searchType).HotelIds(hotelIds).Text(text).ReservationIdList(reservationIdList).ConfirmationNumberList(confirmationNumberList).CancellationNumberList(cancellationNumberList).ExternalReferenceIds(externalReferenceIds).ExternalSystemCodes(externalSystemCodes).ArrivalEndDate(arrivalEndDate).ArrivalStartDate(arrivalStartDate).DepartureEndDate(departureEndDate).DepartureStartDate(departureStartDate).ExpectedArrivalStartTime(expectedArrivalStartTime).ExpectedArrivalEndTime(expectedArrivalEndTime).ExpectedReturnEndTime(expectedReturnEndTime).ExpectedReturnStartTime(expectedReturnStartTime).CompanyNames(companyNames).TravelAgentIds(travelAgentIds).CompanyIds(companyIds).SourceIds(sourceIds).ContactIds(contactIds).GroupIds(groupIds).BillingContactIds(billingContactIds).ProfileIds(profileIds).MembershipCardNumber(membershipCardNumber).MembershipLevels(membershipLevels).MembershipTypes(membershipTypes).Surname(surname).GivenName(givenName).AnyVIPStatus(anyVIPStatus).VipCodes(vipCodes).GuaranteeCode(guaranteeCode).PaymentMethod(paymentMethod).DiscountApplied(discountApplied).User(user).CreatedBy(createdBy).CancelledByList(cancelledByList).CancelledOn(cancelledOn).RatePlanCodes(ratePlanCodes).SourceCodes(sourceCodes).MarketCodes(marketCodes).ExcludeBlockReservations(excludeBlockReservations).BlockName(blockName).BlockIds(blockIds).BlockCodes(blockCodes).CustomReference(customReference).RecordLocator(recordLocator).OrderBy(orderBy).SortOrder(sortOrder).RoomAssignedOnly(roomAssignedOnly).RoomUnassignedOnly(roomUnassignedOnly).RoomId(roomId).RoomType(roomType).RoomFeatures(roomFeatures).RoomSpecials(roomSpecials).RoomSmokingPreference(roomSmokingPreference).RoomFloorPreferences(roomFloorPreferences).HousekeepingRoomStatuses(housekeepingRoomStatuses).RoomClasses(roomClasses).RoomRangeFrom(roomRangeFrom).RoomRangeTo(roomRangeTo).Communication(communication).FetchInstructions(fetchInstructions).AllowPreRegistration(allowPreRegistration).HasDepositBalance(hasDepositBalance).HasOpenBalance(hasOpenBalance).HasOpenFolio(hasOpenFolio).IncludeScheduledCheckOut(includeScheduledCheckOut).LinkedOnly(linkedOnly).UnlinkedOnly(unlinkedOnly).ActualArrivals(actualArrivals).ActualDepartures(actualDepartures).ComplimentaryReservations(complimentaryReservations).DayOfArrivalCancels(dayOfArrivalCancels).DayUse(dayUse).EarlyDepartures(earlyDepartures).ExpectedArrivals(expectedArrivals).ExpectedDepartures(expectedDepartures).ExtendedStays(extendedStays).HouseUseReservations(houseUseReservations).Stayovers(stayovers).StayDate(stayDate).RoomRoutingId(roomRoutingId).ExcludePseudoRoomReservations(excludePseudoRoomReservations).ExcludeReservationIds(excludeReservationIds).ExcludeVIPStatusCodes(excludeVIPStatusCodes).ExcludeSpecials(excludeSpecials).ExcludeFloorPreferences(excludeFloorPreferences).ExcludeAdvanceCheckedIn(excludeAdvanceCheckedIn).PlayerId(playerId).GamingBalanceFrom(gamingBalanceFrom).GamingBalanceTo(gamingBalanceTo).CompAccountingBalanceFrom(compAccountingBalanceFrom).CompAccountingBalanceTo(compAccountingBalanceTo).SearchTypes(searchTypes).ReservationStatuses(reservationStatuses).TransportationCodes(transportationCodes).RoomReadyStatuses(roomReadyStatuses).CheckoutMessageReceived(checkoutMessageReceived).OptedForCommunication(optedForCommunication).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationApi.GetReservations``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetReservations`: ReservationsDetails
    fmt.Fprintf(os.Stdout, "Response from `ReservationApi.GetReservations`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetReservationsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **recentlyAccessed** | **bool** | Mark this reservation as recently accessed. | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **offset** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [default to 0]
 **searchType** | **string** | Represents Reservation search type Player Snapshot. | 
 **hotelIds** | **[]string** | List of Hotels to support searches with multiple resorts for which traces are to be fetched. | 
 **text** | **string** | Free form text field for searching all reservation fields | 
 **reservationIdList** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **confirmationNumberList** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **cancellationNumberList** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **externalReferenceIds** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **externalSystemCodes** | **[]string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | [default to [&quot;External&quot;]]
 **arrivalEndDate** | **string** | The ending value of the date range. | 
 **arrivalStartDate** | **string** | The starting value of the date range. | 
 **departureEndDate** | **string** | The ending value of the date range. | 
 **departureStartDate** | **string** | The starting value of the date range. | 
 **expectedArrivalStartTime** | **time.Time** | The ending value of the time span. | 
 **expectedArrivalEndTime** | **time.Time** | The starting value of the time span. | 
 **expectedReturnEndTime** | **time.Time** | The ending value of the time span. | 
 **expectedReturnStartTime** | **time.Time** | The starting value of the time span. | 
 **companyNames** | **[]string** | Attached profile name | 
 **travelAgentIds** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **companyIds** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **sourceIds** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **contactIds** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **groupIds** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **billingContactIds** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **profileIds** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **membershipCardNumber** | **string** | Membership ID criteria. | 
 **membershipLevels** | **[]string** |  | 
 **membershipTypes** | **[]string** |  | 
 **surname** | **string** | Family name, last name. | 
 **givenName** | **string** | Given name, first name or names | 
 **anyVIPStatus** | **bool** | VIP status of the customer. | 
 **vipCodes** | **[]string** | VIP status of the customer. | 
 **guaranteeCode** | **string** | Fetches the reservation having Guarantee Code(Reservation Type) supplied here. | 
 **paymentMethod** | **string** | Fetches the reservation having method of payment supplied here. | 
 **discountApplied** | **bool** | Fetches the reservation for which discount is applied | [default to false]
 **user** | **[]string** |  | 
 **createdBy** | **string** | Fetches reservation created by specified user. If both CreatedByUsers and CreatedBy is specified, CreatedByUsers will take precedence. | 
 **cancelledByList** | **[]string** | Fetches reservations cancelled by list of users. | 
 **cancelledOn** | **string** | Fetches the reservations which are cancelled on a specific date. | 
 **ratePlanCodes** | **[]string** |  | 
 **sourceCodes** | **[]string** |  | 
 **marketCodes** | **[]string** |  | 
 **excludeBlockReservations** | **bool** | If true the search result will exclude the blocks reservations. | 
 **blockName** | **string** | The Name of the block that is attached to the reservation. | 
 **blockIds** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **blockCodes** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **customReference** | **string** | Custom reference | 
 **recordLocator** | **string** | GDS Record Locator for reservation. | 
 **orderBy** | **[]string** |  | 
 **sortOrder** | **[]string** |  | [default to [&quot;Asc&quot;]]
 **roomAssignedOnly** | **bool** | Indicator to query reservations which have a room number assigned. | 
 **roomUnassignedOnly** | **bool** | Indicator to query reservations which does not have a room number assigned. | 
 **roomId** | **string** | Room number of the reservation to search by. | 
 **roomType** | **[]string** | Room Type. | 
 **roomFeatures** | **[]string** | A code representing a room feature. | 
 **roomSpecials** | **[]string** | Preference value for display purposes. | 
 **roomSmokingPreference** | **string** | Preference value for display purposes. | 
 **roomFloorPreferences** | **[]string** | Preference value for display purposes. | 
 **housekeepingRoomStatuses** | **[]string** | Simple type for room status instructions to be used in requests for fetching housekeeping rooms. Valid status values are Clean, Dirty, Pickup, Inspected, OutOfOrder, OutOfService. | 
 **roomClasses** | **[]string** |  | 
 **roomRangeFrom** | **string** |  | 
 **roomRangeTo** | **string** |  | 
 **communication** | **string** | Filter by the last digits of a reservation&#39;s phone number. | 
 **fetchInstructions** | **[]string** | Instruction to fetch whether the room was assigned/upgraded by AI. This will also include Reservation instruction. | 
 **allowPreRegistration** | **bool** | Flag containing true or false value for reservation to be eligible for prior check in by guest using mobile device. Pass the ‘true’ or ‘false’ values when creating / modifying reservation to indicate whether a reservation is eligible for mobile check in yes / no. Upon fetch, the current state of the flag will show true or false. | 
 **hasDepositBalance** | **bool** | Indicates that only reservations with deposit balance should be expected from the result. | 
 **hasOpenBalance** | **bool** | Indicates that only reservations with open balance should be expected from the result. | 
 **hasOpenFolio** | **bool** | Indicates that only reservations with open folio should be expected from the result. | 
 **includeScheduledCheckOut** | **bool** | Criteria that indicates whether to scheduled checkouts or not. | 
 **linkedOnly** | **bool** | Indicates that only linked reservations should be expected from the result. | 
 **unlinkedOnly** | **bool** | Indicates that only unlinked reservations should be expected from the result. | 
 **actualArrivals** | **bool** | Indicates if reservations which have already arrived on the Search Date is required. | 
 **actualDepartures** | **bool** | Indicates if reservations which were expected to depart on the Search Date and have already checked, is required. | 
 **complimentaryReservations** | **bool** | Indicates if reservations where rate codes are marked as Complimentary Rates , is required. This flag should be used in conjunction with the Arrivals, Departures or StayOvers criteria. | 
 **dayOfArrivalCancels** | **bool** | Indicates if reservations which have cancelled on the Search Date which is also the day of arrival is required. | 
 **dayUse** | **bool** | Indicates if reservations which are day use reservation on the Search Date, is required. | 
 **earlyDepartures** | **bool** | Indicates if reservations which checked out early on the Search Date, is required. | 
 **expectedArrivals** | **bool** | Indicates if reservations which are expected arrivals for the Search Date and who have not yet arrived, is required. | 
 **expectedDepartures** | **bool** | Indicates if reservations which are expected departures for the Search Date and who have not yet departed, is required. | 
 **extendedStays** | **bool** | Indicates if reservations which have extended their stays on the Search Date, is required. | 
 **houseUseReservations** | **bool** | Indicates if reservations where rate codes are marked as House Use Rates , is required. This flag should be used in conjunction with the Arrivals, Departures or StayOvers criteria. | 
 **stayovers** | **bool** | Indicates if reservations which are StayOvers on the Search Date, is required. | 
 **stayDate** | **string** | Date for searching the reservations. This is the date for which the search types are applicable. If date is not available, the business date will be used by default. | 
 **roomRoutingId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **excludePseudoRoomReservations** | **bool** | Indicates to exclude Pseudo room reservations. | 
 **excludeReservationIds** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **excludeVIPStatusCodes** | **[]string** | VIP status of the customer. | 
 **excludeSpecials** | **[]string** | Preference value for display purposes. | 
 **excludeFloorPreferences** | **[]string** | Preference value for display purposes. | 
 **excludeAdvanceCheckedIn** | **bool** | Indicates to exclude Advance Checked In Reservations from search result. | 
 **playerId** | **string** | Player ID associated to the reservation. | 
 **gamingBalanceFrom** | **float32** | Balance from. | 
 **gamingBalanceTo** | **float32** | Balance to. | 
 **compAccountingBalanceFrom** | **float32** | Comp Balance From | 
 **compAccountingBalanceTo** | **float32** | Comp Balance To | 
 **searchTypes** | **[]string** | Represents Reservation search type Player Snapshot. | 
 **reservationStatuses** | **[]string** | Reservation status type for reservations search. | 
 **transportationCodes** | **[]string** | Codes to be searched. | 
 **roomReadyStatuses** | **[]string** | Enum to denote the Status of Readiness messages sent to Guest Devices. | 
 **checkoutMessageReceived** | **bool** | Fetches the reservations for which Checkout Message is received. | 
 **optedForCommunication** | **bool** | Fetches the reservations for which reservation communication has been opted. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ReservationsDetails**](ReservationsDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostCall

> RegisterCall PostCall(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RegisterCall(registerCall).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Register calls



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    registerCall := *openapiclient.NewPostCallRequest() // PostCallRequest | Request to register call. Either creates a new call or updates an existing call.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationApi.PostCall(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RegisterCall(registerCall).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationApi.PostCall``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostCall`: RegisterCall
    fmt.Fprintf(os.Stdout, "Response from `ReservationApi.PostCall`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostCallRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **registerCall** | [**PostCallRequest**](PostCallRequest.md) | Request to register call. Either creates a new call or updates an existing call. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**RegisterCall**](RegisterCall.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostCancelReservation

> CancelReservationDetails PostCancelReservation(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CancelReservation(cancelReservation).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Cancel Reservation by ID



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    reservationId := "reservationId_example" // string | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA.
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    cancelReservation := *openapiclient.NewPostCancelReservationRequest() // PostCancelReservationRequest | Request object for canceling reservations.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationApi.PostCancelReservation(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CancelReservation(cancelReservation).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationApi.PostCancelReservation``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostCancelReservation`: CancelReservationDetails
    fmt.Fprintf(os.Stdout, "Response from `ReservationApi.PostCancelReservation`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA. | 
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostCancelReservationRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **cancelReservation** | [**PostCancelReservationRequest**](PostCancelReservationRequest.md) | Request object for canceling reservations. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**CancelReservationDetails**](CancelReservationDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostCombineShareReservations

> CombineShareReservationsDetails PostCombineShareReservations(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CombineShareReservations(combineShareReservations).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Combine Share Reservations



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    reservationId := "reservationId_example" // string | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA.
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    combineShareReservations := *openapiclient.NewPostCombineShareReservationsByExtIdRequest() // PostCombineShareReservationsByExtIdRequest | Request to combine sharer reservations. This request requires a Reservation Name Id(Joining to) and a Joining Reservation Id
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationApi.PostCombineShareReservations(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CombineShareReservations(combineShareReservations).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationApi.PostCombineShareReservations``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostCombineShareReservations`: CombineShareReservationsDetails
    fmt.Fprintf(os.Stdout, "Response from `ReservationApi.PostCombineShareReservations`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA. | 
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostCombineShareReservationsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **combineShareReservations** | [**PostCombineShareReservationsByExtIdRequest**](PostCombineShareReservationsByExtIdRequest.md) | Request to combine sharer reservations. This request requires a Reservation Name Id(Joining to) and a Joining Reservation Id | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**CombineShareReservationsDetails**](CombineShareReservationsDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostCombineShareReservationsByExtId

> CombineShareReservationsDetails PostCombineShareReservationsByExtId(ctx, reservationExternalId, externalSystemCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CombineShareReservations(combineShareReservations).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Combine Share Reservations



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    reservationExternalId := "reservationExternalId_example" // string | External reservation ID.
    externalSystemCode := "externalSystemCode_example" // string | Code to identify the external system from which the request is coming. This is the ExternalSystem ID used to exchange information between OPERA and the external system.
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    combineShareReservations := *openapiclient.NewPostCombineShareReservationsByExtIdRequest() // PostCombineShareReservationsByExtIdRequest | Request to combine sharer reservations. This request requires a Reservation Name Id(Joining to) and a Joining Reservation Id
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationApi.PostCombineShareReservationsByExtId(context.Background(), reservationExternalId, externalSystemCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CombineShareReservations(combineShareReservations).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationApi.PostCombineShareReservationsByExtId``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostCombineShareReservationsByExtId`: CombineShareReservationsDetails
    fmt.Fprintf(os.Stdout, "Response from `ReservationApi.PostCombineShareReservationsByExtId`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationExternalId** | **string** | External reservation ID. | 
**externalSystemCode** | **string** | Code to identify the external system from which the request is coming. This is the ExternalSystem ID used to exchange information between OPERA and the external system. | 
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostCombineShareReservationsByExtIdRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **combineShareReservations** | [**PostCombineShareReservationsByExtIdRequest**](PostCombineShareReservationsByExtIdRequest.md) | Request to combine sharer reservations. This request requires a Reservation Name Id(Joining to) and a Joining Reservation Id | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**CombineShareReservationsDetails**](CombineShareReservationsDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostPreCheckInReservation

> Status PostPreCheckInReservation(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).PreCheckInReservation(preCheckInReservation).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Pre-Checkin a Reservation



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    reservationId := "reservationId_example" // string | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA.
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    preCheckInReservation := *openapiclient.NewPostPreCheckInReservationRequest() // PostPreCheckInReservationRequest | Request to pre-register a reservation eligible for pre-registration and change arrival details.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationApi.PostPreCheckInReservation(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).PreCheckInReservation(preCheckInReservation).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationApi.PostPreCheckInReservation``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostPreCheckInReservation`: Status
    fmt.Fprintf(os.Stdout, "Response from `ReservationApi.PostPreCheckInReservation`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA. | 
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostPreCheckInReservationRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **preCheckInReservation** | [**PostPreCheckInReservationRequest**](PostPreCheckInReservationRequest.md) | Request to pre-register a reservation eligible for pre-registration and change arrival details. | 
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


## PostReservation

> Status PostReservation(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CreateReservation(createReservation).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create Reservation



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    createReservation := *openapiclient.NewPostReservationRequest() // PostReservationRequest | Request object to create reservations. Includes instructions for information which needs to be returned.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationApi.PostReservation(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CreateReservation(createReservation).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationApi.PostReservation``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostReservation`: Status
    fmt.Fprintf(os.Stdout, "Response from `ReservationApi.PostReservation`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostReservationRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **createReservation** | [**PostReservationRequest**](PostReservationRequest.md) | Request object to create reservations. Includes instructions for information which needs to be returned. | 
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


## PostReservationByBlock

> Status PostReservationByBlock(ctx, blockId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CreateReservation(createReservation).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create Reservation for a Block



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    blockId := "blockId_example" // string | Unique OPERA internal ID for the block.
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is created.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    createReservation := *openapiclient.NewPostReservationByBlockRequest() // PostReservationByBlockRequest | Request object to create reservations. Includes instructions for information which needs to be returned.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationApi.PostReservationByBlock(context.Background(), blockId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CreateReservation(createReservation).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationApi.PostReservationByBlock``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostReservationByBlock`: Status
    fmt.Fprintf(os.Stdout, "Response from `ReservationApi.PostReservationByBlock`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**blockId** | **string** | Unique OPERA internal ID for the block. | 
**hotelId** | **string** | Unique ID of the hotel where reservation is created. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostReservationByBlockRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **createReservation** | [**PostReservationByBlockRequest**](PostReservationByBlockRequest.md) | Request object to create reservations. Includes instructions for information which needs to be returned. | 
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


## PostReservationLinks

> Status PostReservationLinks(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).LinkReservationsCriteria(linkReservationsCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Link Reservations



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    reservationId := "reservationId_example" // string | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA.
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    linkReservationsCriteria := *openapiclient.NewPostReservationLinksRequest() // PostReservationLinksRequest | Request to link a list of reservations with another existing reservation.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationApi.PostReservationLinks(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).LinkReservationsCriteria(linkReservationsCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationApi.PostReservationLinks``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostReservationLinks`: Status
    fmt.Fprintf(os.Stdout, "Response from `ReservationApi.PostReservationLinks`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA. | 
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostReservationLinksRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **linkReservationsCriteria** | [**PostReservationLinksRequest**](PostReservationLinksRequest.md) | Request to link a list of reservations with another existing reservation. | 
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


## PostReservationLinksByChain

> Status PostReservationLinksByChain(ctx, reservationId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).LinkReservationsCriteria(linkReservationsCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Link Reservations By Chain



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    reservationId := "reservationId_example" // string | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    linkReservationsCriteria := *openapiclient.NewPostReservationLinksByChainRequest() // PostReservationLinksByChainRequest | Request to link a list of reservations with another existing reservation.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationApi.PostReservationLinksByChain(context.Background(), reservationId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).LinkReservationsCriteria(linkReservationsCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationApi.PostReservationLinksByChain``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostReservationLinksByChain`: Status
    fmt.Fprintf(os.Stdout, "Response from `ReservationApi.PostReservationLinksByChain`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostReservationLinksByChainRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **linkReservationsCriteria** | [**PostReservationLinksByChainRequest**](PostReservationLinksByChainRequest.md) | Request to link a list of reservations with another existing reservation. | 
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


## PostUpsellReservation

> Status PostUpsellReservation(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).UpsellReservation(upsellReservation).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Upsell a Reservation



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    reservationId := "reservationId_example" // string | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA.
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    upsellReservation := *openapiclient.NewPostUpsellReservationRequest() // PostUpsellReservationRequest | Request to upsell a reservation.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationApi.PostUpsellReservation(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).UpsellReservation(upsellReservation).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationApi.PostUpsellReservation``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostUpsellReservation`: Status
    fmt.Fprintf(os.Stdout, "Response from `ReservationApi.PostUpsellReservation`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA. | 
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostUpsellReservationRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **upsellReservation** | [**PostUpsellReservationRequest**](PostUpsellReservationRequest.md) | Request to upsell a reservation. | 
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


## PutReinstateReservation

> ReinstateReservationDetails PutReinstateReservation(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ReinstateReservation(reinstateReservation).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Reinstate a Reservation



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    reservationId := "reservationId_example" // string | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA.
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    reinstateReservation := *openapiclient.NewPutReinstateReservationRequest() // PutReinstateReservationRequest | Overriding the validation check will log the supposed errors in the warnings log if they would fail.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationApi.PutReinstateReservation(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ReinstateReservation(reinstateReservation).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationApi.PutReinstateReservation``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutReinstateReservation`: ReinstateReservationDetails
    fmt.Fprintf(os.Stdout, "Response from `ReservationApi.PutReinstateReservation`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA. | 
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutReinstateReservationRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **reinstateReservation** | [**PutReinstateReservationRequest**](PutReinstateReservationRequest.md) | Overriding the validation check will log the supposed errors in the warnings log if they would fail. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ReinstateReservationDetails**](ReinstateReservationDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutReservation

> ChangeReservationDetails PutReservation(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChangeReservation(changeReservation).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Update Reservation by ID



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    reservationId := "reservationId_example" // string | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA.
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    changeReservation := *openapiclient.NewPutReservationRequest() // PutReservationRequest | Request method to change a reservations information.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationApi.PutReservation(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChangeReservation(changeReservation).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationApi.PutReservation``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutReservation`: ChangeReservationDetails
    fmt.Fprintf(os.Stdout, "Response from `ReservationApi.PutReservation`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA. | 
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutReservationRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **changeReservation** | [**PutReservationRequest**](PutReservationRequest.md) | Request method to change a reservations information. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ChangeReservationDetails**](ChangeReservationDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutValidateReservationChanges

> ValidateReservationChangesDetails PutValidateReservationChanges(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ValidateReservationChanges(validateReservationChanges).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Validate Reservation Change



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    validateReservationChanges := *openapiclient.NewPutValidateReservationChangesRequest() // PutValidateReservationChangesRequest | Request to validate reservation changes.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationApi.PutValidateReservationChanges(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ValidateReservationChanges(validateReservationChanges).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationApi.PutValidateReservationChanges``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutValidateReservationChanges`: ValidateReservationChangesDetails
    fmt.Fprintf(os.Stdout, "Response from `ReservationApi.PutValidateReservationChanges`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutValidateReservationChangesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **validateReservationChanges** | [**PutValidateReservationChangesRequest**](PutValidateReservationChangesRequest.md) | Request to validate reservation changes. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ValidateReservationChangesDetails**](ValidateReservationChangesDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


# \ChannelAPI

All URIs are relative to */chl/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CopyChannelAccountContracts**](ChannelAPI.md#CopyChannelAccountContracts) | **Put** /channels/account/contracts/copy | Creates copy of channel account contracts
[**CopyChannelMarketingText**](ChannelAPI.md#CopyChannelMarketingText) | **Post** /channels/marketingText/copy | Allows to copy marketing message to another channel and hotel
[**CopyTotalPricingElements**](ChannelAPI.md#CopyTotalPricingElements) | **Put** /hotels/totalPricing/copy | Allows to copy total pricing tax and fees to another hotel id
[**DeleteAmenitiesMapping**](ChannelAPI.md#DeleteAmenitiesMapping) | **Delete** /channels/amenities | Deletes channel amenities configuration
[**DeleteChannelAccountContracts**](ChannelAPI.md#DeleteChannelAccountContracts) | **Delete** /channels/account/contracts | Deletes channel account contracts.
[**DeleteChannelBillingStatements**](ChannelAPI.md#DeleteChannelBillingStatements) | **Delete** /channels/billingStatements | Deletes channel billing statements.
[**DeleteChannelCardTypeMapping**](ChannelAPI.md#DeleteChannelCardTypeMapping) | **Delete** /hotels/{hotelId}/channels/{channelCode}/cardType/{cardTypeCode} | Deletes channel credit card mapping for a hotel
[**DeleteChannelCarriers**](ChannelAPI.md#DeleteChannelCarriers) | **Delete** /channels/subChannels | Deletes sub channel configuration
[**DeleteChannelErrors**](ChannelAPI.md#DeleteChannelErrors) | **Delete** /channels/errorCodes | Deletes channel error codes
[**DeleteChannelGuaranteeCodeMapping**](ChannelAPI.md#DeleteChannelGuaranteeCodeMapping) | **Delete** /hotels/{hotelId}/channels/{channelCode}/guarantees/{guaranteeCode} | Deletes channel guarantee code mapping for a hotel
[**DeleteChannelHotelLetters**](ChannelAPI.md#DeleteChannelHotelLetters) | **Delete** /channels/confirmationLetters | Deletes channel property confirmation letter mapping
[**DeleteChannelMarketingText**](ChannelAPI.md#DeleteChannelMarketingText) | **Delete** /channels/marketingText | Deletes channel marketing messages
[**DeleteChannelNegotiatedRate**](ChannelAPI.md#DeleteChannelNegotiatedRate) | **Delete** /channels/negotiatedRates | Deletes channel negotiate rate
[**DeleteChannelOrgMapping**](ChannelAPI.md#DeleteChannelOrgMapping) | **Delete** /channels/{channelCode}/tenants/{tenantCode} | Deletes channel tenants mapping.
[**DeleteChannelRateCategories**](ChannelAPI.md#DeleteChannelRateCategories) | **Delete** /channels/rateCategories | Deletes given channel&#39;s rate categories
[**DeleteChannelRateLevels**](ChannelAPI.md#DeleteChannelRateLevels) | **Delete** /channels/rateLevels | Deletes channel rate level
[**DeleteChannelRateMapping**](ChannelAPI.md#DeleteChannelRateMapping) | **Delete** /channels/rates | Deletes channel property rate mapping
[**DeleteChannelRatesGlobalDescriptions**](ChannelAPI.md#DeleteChannelRatesGlobalDescriptions) | **Delete** /channels/rates/globalDescriptions | Deletes global rate descriptions
[**DeleteChannelRoomMapping**](ChannelAPI.md#DeleteChannelRoomMapping) | **Delete** /hotels/{hotelId}/channels/{channelCode}/rooms/{roomTypeCode} | Deletes channel property room mapping
[**DeleteChannelRoomTypes**](ChannelAPI.md#DeleteChannelRoomTypes) | **Delete** /channels/roomTypes | Delete channel configuration
[**DeleteChannelRoomsGlobalDescriptions**](ChannelAPI.md#DeleteChannelRoomsGlobalDescriptions) | **Delete** /channels/rooms/globalDescriptions | Deletes global room descriptions
[**DeleteCreditCardsMapping**](ChannelAPI.md#DeleteCreditCardsMapping) | **Delete** /channels/cardTypes | Deletes channel credit card mapping
[**DeleteCurrenciesMapping**](ChannelAPI.md#DeleteCurrenciesMapping) | **Delete** /channels/currencies | Deletes channel currency code mapping
[**DeleteDistributionTemplates**](ChannelAPI.md#DeleteDistributionTemplates) | **Delete** /channels/distributionTemplates | Deletes rate templates configurations
[**DeleteGuaranteesMapping**](ChannelAPI.md#DeleteGuaranteesMapping) | **Delete** /channels/guarantees | Deletes channel guarantee code mapping
[**DeleteHotelsMapping**](ChannelAPI.md#DeleteHotelsMapping) | **Delete** /channels/hotels | Deletes channel hotel mapping
[**DeleteProfileNegRateAccessCodes**](ChannelAPI.md#DeleteProfileNegRateAccessCodes) | **Post** /clusters/{clusterId}/channels/profileRatesAccessDeletes | Delete Channel Rates Access for cluster level
[**DeleteTotalPricingElements**](ChannelAPI.md#DeleteTotalPricingElements) | **Delete** /hotels/totalPricing | Deletes total pricing tax and fee types
[**GenerateChannelBillingStatements**](ChannelAPI.md#GenerateChannelBillingStatements) | **Post** /channels/billingStatements/generate | This API generates channel billing statements.
[**GetAmenitiesMapping**](ChannelAPI.md#GetAmenitiesMapping) | **Get** /channels/amenities/mapping | Gets channel amenities configuration
[**GetChannel**](ChannelAPI.md#GetChannel) | **Get** /channels/{channelCode} | Gets channel detail
[**GetChannelAccount**](ChannelAPI.md#GetChannelAccount) | **Get** /channels/accounts/{accountProfileId} | Gets channel accounts
[**GetChannelAccountContractElements**](ChannelAPI.md#GetChannelAccountContractElements) | **Get** /channels/accounts/{accountProfileId}/contracts/{contractId} | Gets channel account contracts for given profile Id.
[**GetChannelAccounts**](ChannelAPI.md#GetChannelAccounts) | **Get** /channels/accounts | This API retrieves channel accounts.
[**GetChannelBillingStatement**](ChannelAPI.md#GetChannelBillingStatement) | **Get** /channels/billingStatements/{statementId} | Retrieves channel billing statement for a given statement Id
[**GetChannelBillingStatementDetails**](ChannelAPI.md#GetChannelBillingStatementDetails) | **Get** /channels/billingStatements/{statementId}/details | Retrieves channel billing statement details for a given statement Id
[**GetChannelBillingStatements**](ChannelAPI.md#GetChannelBillingStatements) | **Get** /channels/billingStatements | Retrieves channel billing statements.
[**GetChannelCardTypeMappings**](ChannelAPI.md#GetChannelCardTypeMappings) | **Get** /channels/cardType/mappings | Gets channel credit card mapping for a hotel
[**GetChannelGuaranteeCodeMappings**](ChannelAPI.md#GetChannelGuaranteeCodeMappings) | **Get** /hotels/{hotelId}/channels/guarantees | Gets channel guarantee code mappings
[**GetChannelHotelCodeMapping**](ChannelAPI.md#GetChannelHotelCodeMapping) | **Get** /channels/{channelCode}/hotels | Get channel hotel mappings
[**GetChannelHotelLetters**](ChannelAPI.md#GetChannelHotelLetters) | **Get** /channels/confirmationLetters | Gets channel property confirmation letter mapping
[**GetChannelMarketingText**](ChannelAPI.md#GetChannelMarketingText) | **Get** /channels/marketingText | Gets channel marketing messages
[**GetChannelNegotiatedRate**](ChannelAPI.md#GetChannelNegotiatedRate) | **Get** /channels/negotiatedRates | Gets channel negotiate rate
[**GetChannelNegotiatedRates**](ChannelAPI.md#GetChannelNegotiatedRates) | **Get** /clusters/{clusterId}/channels/negotiatedRates | Gets channel negotiate rate
[**GetChannelOrgMapping**](ChannelAPI.md#GetChannelOrgMapping) | **Get** /channels/{channelCode}/tenants/{tenantCode} | Retrieves channel tenants mapping.
[**GetChannelParameters**](ChannelAPI.md#GetChannelParameters) | **Get** /hotels/{hotelId}/channels/{channelCode}/parameters | Retrieves channel parameters.
[**GetChannelPolicies**](ChannelAPI.md#GetChannelPolicies) | **Get** /hotels/{hotelId}/channels/{channelCode}/policies | Retrieves the channel policies
[**GetChannelRateCodeGlobalDesc**](ChannelAPI.md#GetChannelRateCodeGlobalDesc) | **Get** /hotels/{hotelId}/rates/{ratePlanCode}/globalDescription | Gets global rate descriptions
[**GetChannelRateMapping**](ChannelAPI.md#GetChannelRateMapping) | **Get** /channels/rates | Gets channel property rate mapping
[**GetChannelRateRoomSeq**](ChannelAPI.md#GetChannelRateRoomSeq) | **Get** /channels/{channelCode}/rateRoomSequences | Gets channel property rateroom sequence
[**GetChannelRatesGlobalDescriptions**](ChannelAPI.md#GetChannelRatesGlobalDescriptions) | **Get** /channels/rates/globalDescriptions | Gets global rate descriptions
[**GetChannelRoomMapping**](ChannelAPI.md#GetChannelRoomMapping) | **Get** /hotels/{hotelId}/rooms/mapping | Gets channel property room mapping
[**GetChannelRoomMappingById**](ChannelAPI.md#GetChannelRoomMappingById) | **Get** /hotels/{hotelId}/channels/{channelCode}/rooms/{roomTypeCode} | Gets channel room mapping by room type
[**GetChannelRoomTypeGlobalDesc**](ChannelAPI.md#GetChannelRoomTypeGlobalDesc) | **Get** /hotels/{hotelId}/rooms/{roomType}/globalDescription | Gets global room descriptions
[**GetChannelRoomsGlobalDescriptions**](ChannelAPI.md#GetChannelRoomsGlobalDescriptions) | **Get** /channels/rooms/globalDescriptions | Gets global room descriptions
[**GetChannels**](ChannelAPI.md#GetChannels) | **Get** /channels | Gets list of channels
[**GetCreditCardsMapping**](ChannelAPI.md#GetCreditCardsMapping) | **Get** /channels/cardTypes/mapping | Gets channel credit card mapping
[**GetCurrenciesMapping**](ChannelAPI.md#GetCurrenciesMapping) | **Get** /channels/currencies/mapping | Gets channel currency code mapping
[**GetDistributionTemplates**](ChannelAPI.md#GetDistributionTemplates) | **Get** /channels/distributionTemplates | Retrieves distribution templates
[**GetGuaranteesMapping**](ChannelAPI.md#GetGuaranteesMapping) | **Get** /channels/guarantees/mapping | Gets channel guarantee code mapping for a hotel
[**GetHotelsMapping**](ChannelAPI.md#GetHotelsMapping) | **Get** /channels/hotels/mapping | Gets channel hotel mapping
[**GetStatementDetailsStatistics**](ChannelAPI.md#GetStatementDetailsStatistics) | **Get** /channels/billingStatements/{statementId}/statistics | Retrieves billing statement details statistics.
[**GetTotalPricingElements**](ChannelAPI.md#GetTotalPricingElements) | **Get** /hotels/{hotelId}/channels/totalPricing | Gets total pricing tax and fee types
[**ManageChannelRoomMapping**](ChannelAPI.md#ManageChannelRoomMapping) | **Put** /channels/rooms | Updates channel room configuration
[**PostAmenitiesMapping**](ChannelAPI.md#PostAmenitiesMapping) | **Post** /channels/amenities | Adds channel amenities configuration
[**PostChannelAccountContracts**](ChannelAPI.md#PostChannelAccountContracts) | **Post** /channels/accounts/{accountProfileId}/contracts | Adds channel account contracts for given profile Id.
[**PostChannelAccounts**](ChannelAPI.md#PostChannelAccounts) | **Post** /channels/accounts | Adds channel accounts.
[**PostChannelBillingStatements**](ChannelAPI.md#PostChannelBillingStatements) | **Post** /channels/billingStatements | Adds channel billing statements.
[**PostChannelCardTypeMapping**](ChannelAPI.md#PostChannelCardTypeMapping) | **Post** /hotels/{hotelId}/channels/{channelCode}/cardType/{cardTypeCode} | Adds channel credit card mapping for a hotel
[**PostChannelCarriers**](ChannelAPI.md#PostChannelCarriers) | **Post** /channels/{channelCode}/subChannels | Adds sub channel configuration
[**PostChannelErrors**](ChannelAPI.md#PostChannelErrors) | **Post** /channels/{channelCode}/errorCodes | Adds channel error codes
[**PostChannelGuaranteeCodeMapping**](ChannelAPI.md#PostChannelGuaranteeCodeMapping) | **Post** /hotels/{hotelId}/channels/{channelCode}/guarantees/{guaranteeCode} | Adds channel guarantee code mapping for a hotel
[**PostChannelHotelLetters**](ChannelAPI.md#PostChannelHotelLetters) | **Post** /channels/confirmationLetters | Adds channel property confirmation letter mapping
[**PostChannelMarketingText**](ChannelAPI.md#PostChannelMarketingText) | **Post** /channels/marketingText | Adds channel marketing messages
[**PostChannelNegotiatedRate**](ChannelAPI.md#PostChannelNegotiatedRate) | **Post** /channels/negotiatedRates | Adds channel negotiate rate
[**PostChannelOrgMapping**](ChannelAPI.md#PostChannelOrgMapping) | **Post** /channels/{channelCode}/tenants | Adds channel tenants.
[**PostChannelRateCategories**](ChannelAPI.md#PostChannelRateCategories) | **Post** /channels/{channelCode}/rateCategories | Adds given channel&#39;s rate categories
[**PostChannelRateLevels**](ChannelAPI.md#PostChannelRateLevels) | **Post** /channels/{channelCode}/rateLevels | Adds channel rate level
[**PostChannelRateMapping**](ChannelAPI.md#PostChannelRateMapping) | **Post** /channels/rates | Adds channel property rate mapping
[**PostChannelRates**](ChannelAPI.md#PostChannelRates) | **Post** /hotels/{hotelId}/channels/rates | Distributes channel rate mappings to channel room types
[**PostChannelRatesGlobalDescriptions**](ChannelAPI.md#PostChannelRatesGlobalDescriptions) | **Post** /channels/rates/globalDescriptions | Adds global room descriptions
[**PostChannelRoomMapping**](ChannelAPI.md#PostChannelRoomMapping) | **Post** /channels/rooms | Adds channel property room mapping
[**PostChannelRoomTypeRate**](ChannelAPI.md#PostChannelRoomTypeRate) | **Post** /hotels/{hotelId}/channels/{channelCode}/rooms/{channelRoomType}/rates | Distributes channel room rate mappings.
[**PostChannelRoomTypes**](ChannelAPI.md#PostChannelRoomTypes) | **Post** /channels/{channelCode}/roomTypes | Adds channel room
[**PostChannelRoomsGlobalDescriptions**](ChannelAPI.md#PostChannelRoomsGlobalDescriptions) | **Post** /channels/rooms/globalDescriptions | Adds global rate descriptions
[**PostChannels**](ChannelAPI.md#PostChannels) | **Post** /channels | Adds new channel
[**PostCreditCardsMapping**](ChannelAPI.md#PostCreditCardsMapping) | **Post** /channels/cardTypes | Adds channel credit card mapping
[**PostCurrenciesMapping**](ChannelAPI.md#PostCurrenciesMapping) | **Post** /channels/currencies | Adds channel currency code mapping
[**PostDistributionTemplates**](ChannelAPI.md#PostDistributionTemplates) | **Post** /channels/distributionTemplates | Adds rate templates configurations
[**PostGuaranteesMapping**](ChannelAPI.md#PostGuaranteesMapping) | **Post** /channels/guarantees | Adds channel guarantee code mapping
[**PostHotelsMapping**](ChannelAPI.md#PostHotelsMapping) | **Post** /channels/hotels | Adds channel hotel mapping
[**PostTotalPricingElements**](ChannelAPI.md#PostTotalPricingElements) | **Post** /hotels/totalPricing | Adds total pricing tax and fee types
[**PublishChannelAvailability**](ChannelAPI.md#PublishChannelAvailability) | **Put** /channels/availability/publish | Publishes channel availability.
[**PublishChannelRatePlans**](ChannelAPI.md#PublishChannelRatePlans) | **Put** /channels/{channelCode}/ratePlans | Publishes channel rate plan codes
[**PublishChannelRestrictions**](ChannelAPI.md#PublishChannelRestrictions) | **Put** /channels/restrictions/publish | Publishes channel restrictions
[**PublishHotelChannelRatePlans**](ChannelAPI.md#PublishHotelChannelRatePlans) | **Put** /hotels/{hotelId}/channels/ratePlans | Publishes channel hotel rate plan codes
[**PutAmenitiesMapping**](ChannelAPI.md#PutAmenitiesMapping) | **Put** /channels/amenities | Updates channel amenities configuration
[**PutChannelAccountContracts**](ChannelAPI.md#PutChannelAccountContracts) | **Put** /channels/accounts/{accountProfileId}/contracts | Updates channel account contracts for given profile Id.
[**PutChannelAccounts**](ChannelAPI.md#PutChannelAccounts) | **Put** /channels/accounts | Updates channel accounts
[**PutChannelBillingStatements**](ChannelAPI.md#PutChannelBillingStatements) | **Put** /channels/billingStatements | Updates channel billing statement details
[**PutChannelCardTypeMapping**](ChannelAPI.md#PutChannelCardTypeMapping) | **Put** /hotels/{hotelId}/channels/{channelCode}/cardType/{cardTypeCode} | Updates channel credit card mapping for a hotel
[**PutChannelCarriers**](ChannelAPI.md#PutChannelCarriers) | **Put** /channels/{channelCode}/subChannels | Updates sub channel configuration
[**PutChannelErrors**](ChannelAPI.md#PutChannelErrors) | **Put** /channels/{channelCode}/errorCodes | Updates channel error codes
[**PutChannelGuaranteeCodeMapping**](ChannelAPI.md#PutChannelGuaranteeCodeMapping) | **Put** /hotels/{hotelId}/channels/{channelCode}/guarantees/{guaranteeCode} | Updates channel guarantee code mapping for a hotel
[**PutChannelHotelLetters**](ChannelAPI.md#PutChannelHotelLetters) | **Put** /channels/confirmationLetters | Updates channel property confirmation letter mapping
[**PutChannelMarketingText**](ChannelAPI.md#PutChannelMarketingText) | **Put** /channels/marketingText | Updates channel marketing messages
[**PutChannelNegotiatedRate**](ChannelAPI.md#PutChannelNegotiatedRate) | **Put** /channels/negotiatedRates | Updates channel negotiate rate
[**PutChannelOrgMapping**](ChannelAPI.md#PutChannelOrgMapping) | **Put** /channels/{channelCode}/tenants/{tenantCode} | Updates channel tenants mapping.
[**PutChannelParameters**](ChannelAPI.md#PutChannelParameters) | **Put** /channels/{channelCode}/parameters | Updates channel control settings
[**PutChannelRateCategories**](ChannelAPI.md#PutChannelRateCategories) | **Put** /channels/{channelCode}/rateCategories | Updates given channel&#39;s rate categories
[**PutChannelRateLevels**](ChannelAPI.md#PutChannelRateLevels) | **Put** /channels/{channelCode}/rateLevels | Updates channel rate level
[**PutChannelRateMapping**](ChannelAPI.md#PutChannelRateMapping) | **Put** /channels/rates | Updates channel property rate mapping
[**PutChannelRateRoomSeq**](ChannelAPI.md#PutChannelRateRoomSeq) | **Put** /channels/rates/roomSequence | Updates channel property rateroom sequence
[**PutChannelRatesGlobalDescriptions**](ChannelAPI.md#PutChannelRatesGlobalDescriptions) | **Put** /channels/rates/globalDescriptions | Updates global rate descriptions
[**PutChannelRoomMapping**](ChannelAPI.md#PutChannelRoomMapping) | **Put** /hotels/{hotelId}/channels/{channelCode}/rooms/{roomTypeCode} | Updates channel property room mapping
[**PutChannelRoomTypes**](ChannelAPI.md#PutChannelRoomTypes) | **Put** /channels/{channelCode}/roomTypes | Updates channel room
[**PutChannelRoomsGlobalDescriptions**](ChannelAPI.md#PutChannelRoomsGlobalDescriptions) | **Put** /channels/rooms/globalDescriptions | Updates global room descriptions
[**PutChannels**](ChannelAPI.md#PutChannels) | **Put** /channels | Update channel configuration
[**PutCreditCardsMapping**](ChannelAPI.md#PutCreditCardsMapping) | **Put** /channels/cardTypes | Updates channel credit card mapping
[**PutCurrenciesMapping**](ChannelAPI.md#PutCurrenciesMapping) | **Put** /channels/currencies | Updates channel currency code mapping
[**PutDistributionTemplates**](ChannelAPI.md#PutDistributionTemplates) | **Put** /channels/distributionTemplates | Updates rate templates configurations
[**PutGuaranteesMapping**](ChannelAPI.md#PutGuaranteesMapping) | **Put** /channels/guarantees | Updates channel guarantee code mapping
[**PutHotelsMapping**](ChannelAPI.md#PutHotelsMapping) | **Put** /channels/hotels | Updates channel hotel mapping
[**PutProfileNegRateAccessCodes**](ChannelAPI.md#PutProfileNegRateAccessCodes) | **Put** /clusters/{clusterId}/channels/profileRatesAccess | Initiate profile rate access codes
[**PutRateGlobalDescription**](ChannelAPI.md#PutRateGlobalDescription) | **Put** /channels/{channelCode}/rates/{channelRateCode}/globalDescription | Updates global descriptions for a rate
[**PutRoomDescription**](ChannelAPI.md#PutRoomDescription) | **Put** /channels/rooms/globalDescription | Update global descriptions for a room
[**PutTotalPricingElements**](ChannelAPI.md#PutTotalPricingElements) | **Put** /hotels/totalPricing | Updates total pricing tax and fee types
[**SyncProfileNegRateAccessCodes**](ChannelAPI.md#SyncProfileNegRateAccessCodes) | **Put** /clusters/{clusterId}/channels/syncProfileRatesAccess | Sync profile rate access codes



## CopyChannelAccountContracts

> ChannelAccountContractsDetailsCopy CopyChannelAccountContracts(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChannelAccountContractsCopy(channelAccountContractsCopy).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Creates copy of channel account contracts



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/chl"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    channelAccountContractsCopy := *openapiclient.NewChannelAccountContractsCopy() // ChannelAccountContractsCopy | Request object to copy the channel account contract and create a new contract.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelAPI.CopyChannelAccountContracts(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChannelAccountContractsCopy(channelAccountContractsCopy).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelAPI.CopyChannelAccountContracts``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CopyChannelAccountContracts`: ChannelAccountContractsDetailsCopy
    fmt.Fprintf(os.Stdout, "Response from `ChannelAPI.CopyChannelAccountContracts`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCopyChannelAccountContractsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **channelAccountContractsCopy** | [**ChannelAccountContractsCopy**](ChannelAccountContractsCopy.md) | Request object to copy the channel account contract and create a new contract. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ChannelAccountContractsDetailsCopy**](ChannelAccountContractsDetailsCopy.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## CopyChannelMarketingText

> Status CopyChannelMarketingText(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChannelMarketingTextCopy(channelMarketingTextCopy).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Allows to copy marketing message to another channel and hotel



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/chl"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    channelMarketingTextCopy := *openapiclient.NewChannelMarketingTextCopy() // ChannelMarketingTextCopy | Request object to copy channel marketing texts.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelAPI.CopyChannelMarketingText(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChannelMarketingTextCopy(channelMarketingTextCopy).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelAPI.CopyChannelMarketingText``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CopyChannelMarketingText`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChannelAPI.CopyChannelMarketingText`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCopyChannelMarketingTextRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **channelMarketingTextCopy** | [**ChannelMarketingTextCopy**](ChannelMarketingTextCopy.md) | Request object to copy channel marketing texts. | 
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


## CopyTotalPricingElements

> Status CopyTotalPricingElements(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TotalPricingElementsCopy(totalPricingElementsCopy).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Allows to copy total pricing tax and fees to another hotel id



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/chl"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    totalPricingElementsCopy := *openapiclient.NewTotalPricingElementsCopy() // TotalPricingElementsCopy | Request object to copy the total pricing elements into the target properties.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelAPI.CopyTotalPricingElements(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TotalPricingElementsCopy(totalPricingElementsCopy).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelAPI.CopyTotalPricingElements``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CopyTotalPricingElements`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChannelAPI.CopyTotalPricingElements`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCopyTotalPricingElementsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **totalPricingElementsCopy** | [**TotalPricingElementsCopy**](TotalPricingElementsCopy.md) | Request object to copy the total pricing elements into the target properties. | 
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


## DeleteAmenitiesMapping

> Status DeleteAmenitiesMapping(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Inactive(inactive).SystemCode(systemCode).SystemSubType(systemSubType).SystemType(systemType).SystemName(systemName).WebsiteURL(websiteURL).IconURL(iconURL).LocalSystemCode(localSystemCode).ExternalSystemCode(externalSystemCode).Description(description).StartDate(startDate).EndDate(endDate).Duration(duration).AmenityGroup(amenityGroup).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Deletes channel amenities configuration



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/chl"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    inactive := true // bool | Indicates whether code is inactive or not. (optional)
    systemCode := "systemCode_example" // string | External system code such as TRAVELOCITY, EXPEDIA, etc. (optional)
    systemSubType := "systemSubType_example" // string | External system subtype such as GDS, WEB, etc. (optional)
    systemType := "systemType_example" // string | External system type such as CHANNEL, OXI, etc. (optional)
    systemName := "systemName_example" // string | External system name. (optional)
    websiteURL := "websiteURL_example" // string | Cannel Website URL (optional)
    iconURL := "iconURL_example" // string | Channel Icon URL (optional)
    localSystemCode := []string{"Inner_example"} // []string | Code used inside the OPERA System (optional)
    externalSystemCode := []string{"Inner_example"} // []string | Code used in the External System (optional)
    description := []string{"Inner_example"} // []string | Detailed Description of the given entity. (optional)
    startDate := time.Now() // string |  (optional)
    endDate := time.Now() // string |  (optional)
    duration := "duration_example" // string |  (optional)
    amenityGroup := []string{"AmenityGroup_example"} // []string | User defined logical group name for the amenities. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelAPI.DeleteAmenitiesMapping(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Inactive(inactive).SystemCode(systemCode).SystemSubType(systemSubType).SystemType(systemType).SystemName(systemName).WebsiteURL(websiteURL).IconURL(iconURL).LocalSystemCode(localSystemCode).ExternalSystemCode(externalSystemCode).Description(description).StartDate(startDate).EndDate(endDate).Duration(duration).AmenityGroup(amenityGroup).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelAPI.DeleteAmenitiesMapping``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteAmenitiesMapping`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChannelAPI.DeleteAmenitiesMapping`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDeleteAmenitiesMappingRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **inactive** | **bool** | Indicates whether code is inactive or not. | 
 **systemCode** | **string** | External system code such as TRAVELOCITY, EXPEDIA, etc. | 
 **systemSubType** | **string** | External system subtype such as GDS, WEB, etc. | 
 **systemType** | **string** | External system type such as CHANNEL, OXI, etc. | 
 **systemName** | **string** | External system name. | 
 **websiteURL** | **string** | Cannel Website URL | 
 **iconURL** | **string** | Channel Icon URL | 
 **localSystemCode** | **[]string** | Code used inside the OPERA System | 
 **externalSystemCode** | **[]string** | Code used in the External System | 
 **description** | **[]string** | Detailed Description of the given entity. | 
 **startDate** | **string** |  | 
 **endDate** | **string** |  | 
 **duration** | **string** |  | 
 **amenityGroup** | **[]string** | User defined logical group name for the amenities. | 
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


## DeleteChannelAccountContracts

> Status DeleteChannelAccountContracts(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Id(id).IdExtension(idExtension).IdContext(idContext).Type_(type_).Id1(id1).IdExtension1(idExtension1).IdContext1(idContext1).Type1(type1).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Deletes channel account contracts.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/chl"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    id := "id_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    idExtension := int32(56) // int32 | Additional identifying value assigned by the creating system. (optional)
    idContext := "idContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    type_ := "type__example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    id1 := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    idExtension1 := []int32{int32(123)} // []int32 | Additional identifying value assigned by the creating system. (optional)
    idContext1 := []string{"Inner_example"} // []string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    type1 := []string{"Inner_example"} // []string | A reference to the type of object defined by the UniqueID element. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelAPI.DeleteChannelAccountContracts(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Id(id).IdExtension(idExtension).IdContext(idContext).Type_(type_).Id1(id1).IdExtension1(idExtension1).IdContext1(idContext1).Type1(type1).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelAPI.DeleteChannelAccountContracts``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteChannelAccountContracts`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChannelAPI.DeleteChannelAccountContracts`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDeleteChannelAccountContractsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **id** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **idExtension** | **int32** | Additional identifying value assigned by the creating system. | 
 **idContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **type_** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **id1** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **idExtension1** | **[]int32** | Additional identifying value assigned by the creating system. | 
 **idContext1** | **[]string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **type1** | **[]string** | A reference to the type of object defined by the UniqueID element. | 
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


## DeleteChannelBillingStatements

> Status DeleteChannelBillingStatements(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Id(id).IdExtension(idExtension).IdContext(idContext).Type_(type_).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Deletes channel billing statements.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/chl"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    id := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    idExtension := []int32{int32(123)} // []int32 | Additional identifying value assigned by the creating system. (optional)
    idContext := []string{"Inner_example"} // []string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    type_ := []string{"Inner_example"} // []string | A reference to the type of object defined by the UniqueID element. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelAPI.DeleteChannelBillingStatements(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Id(id).IdExtension(idExtension).IdContext(idContext).Type_(type_).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelAPI.DeleteChannelBillingStatements``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteChannelBillingStatements`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChannelAPI.DeleteChannelBillingStatements`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDeleteChannelBillingStatementsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **id** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **idExtension** | **[]int32** | Additional identifying value assigned by the creating system. | 
 **idContext** | **[]string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **type_** | **[]string** | A reference to the type of object defined by the UniqueID element. | 
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


## DeleteChannelCardTypeMapping

> Status DeleteChannelCardTypeMapping(ctx, cardTypeCode, channelCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChannelCardType(channelCardType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Deletes channel credit card mapping for a hotel



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/chl"
)

func main() {
    cardTypeCode := "cardTypeCode_example" // string | Unique ID that identifies a channel.
    channelCode := "channelCode_example" // string | Unique ID that identifies a channel.
    hotelId := "hotelId_example" // string | Unique ID that identifies a single hotel property.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    channelCardType := "channelCardType_example" // string | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelAPI.DeleteChannelCardTypeMapping(context.Background(), cardTypeCode, channelCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChannelCardType(channelCardType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelAPI.DeleteChannelCardTypeMapping``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteChannelCardTypeMapping`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChannelAPI.DeleteChannelCardTypeMapping`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**cardTypeCode** | **string** | Unique ID that identifies a channel. | 
**channelCode** | **string** | Unique ID that identifies a channel. | 
**hotelId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteChannelCardTypeMappingRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **channelCardType** | **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | 
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


## DeleteChannelCarriers

> Status DeleteChannelCarriers(ctx).BookingChannelCodes(bookingChannelCodes).Carriers(carriers).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Deletes sub channel configuration



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/chl"
)

func main() {
    bookingChannelCodes := []string{"Inner_example"} // []string | Booking channel code of carrier.
    carriers := []string{"Inner_example"} // []string | Code of carrier.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelAPI.DeleteChannelCarriers(context.Background()).BookingChannelCodes(bookingChannelCodes).Carriers(carriers).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelAPI.DeleteChannelCarriers``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteChannelCarriers`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChannelAPI.DeleteChannelCarriers`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDeleteChannelCarriersRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bookingChannelCodes** | **[]string** | Booking channel code of carrier. | 
 **carriers** | **[]string** | Code of carrier. | 
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


## DeleteChannelErrors

> Status DeleteChannelErrors(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BookingChannelCode(bookingChannelCode).Error_(error_).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Deletes channel error codes



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/chl"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    bookingChannelCode := []string{"Inner_example"} // []string | Booking channel code of error. (optional)
    error_ := []string{"Inner_example"} // []string | Code of error. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelAPI.DeleteChannelErrors(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BookingChannelCode(bookingChannelCode).Error_(error_).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelAPI.DeleteChannelErrors``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteChannelErrors`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChannelAPI.DeleteChannelErrors`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDeleteChannelErrorsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **bookingChannelCode** | **[]string** | Booking channel code of error. | 
 **error_** | **[]string** | Code of error. | 
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


## DeleteChannelGuaranteeCodeMapping

> Status DeleteChannelGuaranteeCodeMapping(ctx, guaranteeCode, channelCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Deletes channel guarantee code mapping for a hotel



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/chl"
)

func main() {
    guaranteeCode := "guaranteeCode_example" // string | Guarantee Code.
    channelCode := "channelCode_example" // string | Unique ID that identifies a channel.
    hotelId := "hotelId_example" // string | Unique ID that identifies a single hotel property.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelAPI.DeleteChannelGuaranteeCodeMapping(context.Background(), guaranteeCode, channelCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelAPI.DeleteChannelGuaranteeCodeMapping``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteChannelGuaranteeCodeMapping`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChannelAPI.DeleteChannelGuaranteeCodeMapping`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**guaranteeCode** | **string** | Guarantee Code. | 
**channelCode** | **string** | Unique ID that identifies a channel. | 
**hotelId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteChannelGuaranteeCodeMappingRequest struct via the builder pattern


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


## DeleteChannelHotelLetters

> Status DeleteChannelHotelLetters(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Code(code).Description(description).HotelId(hotelId).Code1(code1).Description1(description1).LetterType(letterType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Deletes channel property confirmation letter mapping



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/chl"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    code := "code_example" // string | Code. (optional)
    description := "description_example" // string | description. (optional)
    hotelId := []string{"Inner_example"} // []string | Hotel code which the hotel letters belong to. (optional)
    code1 := "code1_example" // string | Code. (optional)
    description1 := "description1_example" // string | description. (optional)
    letterType := []string{"LetterType_example"} // []string | Represents Inquiry Letter Type. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelAPI.DeleteChannelHotelLetters(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Code(code).Description(description).HotelId(hotelId).Code1(code1).Description1(description1).LetterType(letterType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelAPI.DeleteChannelHotelLetters``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteChannelHotelLetters`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChannelAPI.DeleteChannelHotelLetters`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDeleteChannelHotelLettersRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **code** | **string** | Code. | 
 **description** | **string** | description. | 
 **hotelId** | **[]string** | Hotel code which the hotel letters belong to. | 
 **code1** | **string** | Code. | 
 **description1** | **string** | description. | 
 **letterType** | **[]string** | Represents Inquiry Letter Type. | 
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


## DeleteChannelMarketingText

> Status DeleteChannelMarketingText(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BeginDate(beginDate).BookingChannelCode(bookingChannelCode).EndDate(endDate).GlobalTextYN(globalTextYN).HotelId(hotelId).MarketingText(marketingText).PolicyDetail(policyDetail).PolicyType(policyType).TransactionType(transactionType).NewHotelId(newHotelId).NewTransactionType(newTransactionType).NewPolicyType(newPolicyType).NewPolicyDetail(newPolicyDetail).NewBeginDate(newBeginDate).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Deletes channel marketing messages



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/chl"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    beginDate := []string{time.Now()} // []string |  (optional)
    bookingChannelCode := []string{"Inner_example"} // []string | The code that identifies a Booking Channel. (optional)
    endDate := []string{time.Now()} // []string |  (optional)
    globalTextYN := []bool{false} // []bool |  (optional)
    hotelId := []string{"Inner_example"} // []string | The code that identifies a Hotel. (optional)
    marketingText := []string{"Inner_example"} // []string |  (optional)
    policyDetail := []string{"Inner_example"} // []string |  (optional)
    policyType := []string{"Inner_example"} // []string |  (optional)
    transactionType := []string{"Inner_example"} // []string |  (optional)
    newHotelId := []string{"Inner_example"} // []string |  (optional)
    newTransactionType := []string{"Inner_example"} // []string |  (optional)
    newPolicyType := []string{"Inner_example"} // []string |  (optional)
    newPolicyDetail := []string{"Inner_example"} // []string |  (optional)
    newBeginDate := []string{time.Now()} // []string |  (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelAPI.DeleteChannelMarketingText(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BeginDate(beginDate).BookingChannelCode(bookingChannelCode).EndDate(endDate).GlobalTextYN(globalTextYN).HotelId(hotelId).MarketingText(marketingText).PolicyDetail(policyDetail).PolicyType(policyType).TransactionType(transactionType).NewHotelId(newHotelId).NewTransactionType(newTransactionType).NewPolicyType(newPolicyType).NewPolicyDetail(newPolicyDetail).NewBeginDate(newBeginDate).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelAPI.DeleteChannelMarketingText``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteChannelMarketingText`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChannelAPI.DeleteChannelMarketingText`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDeleteChannelMarketingTextRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **beginDate** | **[]string** |  | 
 **bookingChannelCode** | **[]string** | The code that identifies a Booking Channel. | 
 **endDate** | **[]string** |  | 
 **globalTextYN** | **[]bool** |  | 
 **hotelId** | **[]string** | The code that identifies a Hotel. | 
 **marketingText** | **[]string** |  | 
 **policyDetail** | **[]string** |  | 
 **policyType** | **[]string** |  | 
 **transactionType** | **[]string** |  | 
 **newHotelId** | **[]string** |  | 
 **newTransactionType** | **[]string** |  | 
 **newPolicyType** | **[]string** |  | 
 **newPolicyDetail** | **[]string** |  | 
 **newBeginDate** | **[]string** |  | 
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


## DeleteChannelNegotiatedRate

> Status DeleteChannelNegotiatedRate(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BookingChannelCode(bookingChannelCode).ChannelRatePlanCode(channelRatePlanCode).HotelId(hotelId).Id(id).IdContext(idContext).Type_(type_).ExternalSystem(externalSystem).Language(language).NameType(nameType).NamePrefix(namePrefix).GivenName(givenName).MiddleName(middleName).Surname(surname).NameSuffix(nameSuffix).NameTitle(nameTitle).NameTitleSuffix(nameTitleSuffix).EnvelopeGreeting(envelopeGreeting).Salutation(salutation).AccessCode(accessCode).End(end).Start(start).NewAccessCode(newAccessCode).ChannelRatePlanCodeOrder(channelRatePlanCodeOrder).StartDate(startDate).EndDate(endDate).Duration(duration).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Deletes channel negotiate rate



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/chl"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    bookingChannelCode := "bookingChannelCode_example" // string | Booking Channel Code. (optional)
    channelRatePlanCode := "channelRatePlanCode_example" // string | Channel Room Type. (optional)
    hotelId := "hotelId_example" // string | Hotel Code. (optional)
    id := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    idContext := []string{"Inner_example"} // []string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    type_ := []string{"Inner_example"} // []string | A reference to the type of object defined by the UniqueID element. (optional)
    externalSystem := "externalSystem_example" // string | When name type is external, indicates the external system the name belongs to. (optional)
    language := "language_example" // string | Language code associated with an alternate name. (optional)
    nameType := "nameType_example" // string | Person's name in an external system. (optional)
    namePrefix := "namePrefix_example" // string | Salutation of honorific (e.g. Mr., Mrs., Ms., Miss, Dr.) (optional)
    givenName := "givenName_example" // string | Given name, first name or names. (optional)
    middleName := "middleName_example" // string | The middle name of the person name. (optional)
    surname := "surname_example" // string | Family name, last name. May also be used for full name if the sending system does not have the ability to separate a full name into its parts, e.g. the surname element may be used to pass the full name. (optional)
    nameSuffix := "nameSuffix_example" // string | Hold various name suffixes and letters (e.g. Jr., Sr., III, Ret., Esq.) (optional)
    nameTitle := "nameTitle_example" // string | Degree or honors (e.g., Ph.D., M.D.) (optional)
    nameTitleSuffix := int32(56) // int32 | Title Suffix. Must be populated if ADVANCED_TITLE is on. (optional)
    envelopeGreeting := "envelopeGreeting_example" // string | Envelope Greeting of the profile (optional)
    salutation := "salutation_example" // string | Salutation of the profile (optional)
    accessCode := []string{"Inner_example"} // []string |  (optional)
    end := []string{time.Now()} // []string | The ending value of the date range. (optional)
    start := []string{time.Now()} // []string | The starting value of the date range. (optional)
    newAccessCode := "newAccessCode_example" // string |  (optional)
    channelRatePlanCodeOrder := int32(56) // int32 |  (optional)
    startDate := time.Now() // string |  (optional)
    endDate := time.Now() // string |  (optional)
    duration := "duration_example" // string |  (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelAPI.DeleteChannelNegotiatedRate(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BookingChannelCode(bookingChannelCode).ChannelRatePlanCode(channelRatePlanCode).HotelId(hotelId).Id(id).IdContext(idContext).Type_(type_).ExternalSystem(externalSystem).Language(language).NameType(nameType).NamePrefix(namePrefix).GivenName(givenName).MiddleName(middleName).Surname(surname).NameSuffix(nameSuffix).NameTitle(nameTitle).NameTitleSuffix(nameTitleSuffix).EnvelopeGreeting(envelopeGreeting).Salutation(salutation).AccessCode(accessCode).End(end).Start(start).NewAccessCode(newAccessCode).ChannelRatePlanCodeOrder(channelRatePlanCodeOrder).StartDate(startDate).EndDate(endDate).Duration(duration).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelAPI.DeleteChannelNegotiatedRate``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteChannelNegotiatedRate`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChannelAPI.DeleteChannelNegotiatedRate`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDeleteChannelNegotiatedRateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **bookingChannelCode** | **string** | Booking Channel Code. | 
 **channelRatePlanCode** | **string** | Channel Room Type. | 
 **hotelId** | **string** | Hotel Code. | 
 **id** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **idContext** | **[]string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **type_** | **[]string** | A reference to the type of object defined by the UniqueID element. | 
 **externalSystem** | **string** | When name type is external, indicates the external system the name belongs to. | 
 **language** | **string** | Language code associated with an alternate name. | 
 **nameType** | **string** | Person&#39;s name in an external system. | 
 **namePrefix** | **string** | Salutation of honorific (e.g. Mr., Mrs., Ms., Miss, Dr.) | 
 **givenName** | **string** | Given name, first name or names. | 
 **middleName** | **string** | The middle name of the person name. | 
 **surname** | **string** | Family name, last name. May also be used for full name if the sending system does not have the ability to separate a full name into its parts, e.g. the surname element may be used to pass the full name. | 
 **nameSuffix** | **string** | Hold various name suffixes and letters (e.g. Jr., Sr., III, Ret., Esq.) | 
 **nameTitle** | **string** | Degree or honors (e.g., Ph.D., M.D.) | 
 **nameTitleSuffix** | **int32** | Title Suffix. Must be populated if ADVANCED_TITLE is on. | 
 **envelopeGreeting** | **string** | Envelope Greeting of the profile | 
 **salutation** | **string** | Salutation of the profile | 
 **accessCode** | **[]string** |  | 
 **end** | **[]string** | The ending value of the date range. | 
 **start** | **[]string** | The starting value of the date range. | 
 **newAccessCode** | **string** |  | 
 **channelRatePlanCodeOrder** | **int32** |  | 
 **startDate** | **string** |  | 
 **endDate** | **string** |  | 
 **duration** | **string** |  | 
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


## DeleteChannelOrgMapping

> Status DeleteChannelOrgMapping(ctx, tenantCode, channelCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChainCode(chainCode).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Deletes channel tenants mapping.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/chl"
)

func main() {
    tenantCode := "tenantCode_example" // string | Tenant Code.
    channelCode := "channelCode_example" // string | Unique ID that identifies a channel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    chainCode := "chainCode_example" // string | Chain code for which channel code and org code are mapped. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelAPI.DeleteChannelOrgMapping(context.Background(), tenantCode, channelCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChainCode(chainCode).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelAPI.DeleteChannelOrgMapping``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteChannelOrgMapping`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChannelAPI.DeleteChannelOrgMapping`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**tenantCode** | **string** | Tenant Code. | 
**channelCode** | **string** | Unique ID that identifies a channel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteChannelOrgMappingRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **chainCode** | **string** | Chain code for which channel code and org code are mapped. | 
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


## DeleteChannelRateCategories

> Status DeleteChannelRateCategories(ctx).BookingChannelCodes(bookingChannelCodes).RateCategories(rateCategories).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Deletes given channel's rate categories



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/chl"
)

func main() {
    bookingChannelCodes := []string{"Inner_example"} // []string | Booking channel code of rate category.
    rateCategories := []string{"Inner_example"} // []string | Code of rate category.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelAPI.DeleteChannelRateCategories(context.Background()).BookingChannelCodes(bookingChannelCodes).RateCategories(rateCategories).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelAPI.DeleteChannelRateCategories``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteChannelRateCategories`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChannelAPI.DeleteChannelRateCategories`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDeleteChannelRateCategoriesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bookingChannelCodes** | **[]string** | Booking channel code of rate category. | 
 **rateCategories** | **[]string** | Code of rate category. | 
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


## DeleteChannelRateLevels

> Status DeleteChannelRateLevels(ctx).BookingChannelCodes(bookingChannelCodes).RateLevels(rateLevels).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Deletes channel rate level



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/chl"
)

func main() {
    bookingChannelCodes := []string{"Inner_example"} // []string | Booking channel code of rate level.
    rateLevels := []string{"Inner_example"} // []string | Code of rate level.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelAPI.DeleteChannelRateLevels(context.Background()).BookingChannelCodes(bookingChannelCodes).RateLevels(rateLevels).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelAPI.DeleteChannelRateLevels``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteChannelRateLevels`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChannelAPI.DeleteChannelRateLevels`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDeleteChannelRateLevelsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bookingChannelCodes** | **[]string** | Booking channel code of rate level. | 
 **rateLevels** | **[]string** | Code of rate level. | 
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


## DeleteChannelRateMapping

> Status DeleteChannelRateMapping(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BookingChannelCode(bookingChannelCode).ChannelRatePlanCode(channelRatePlanCode).HasChannelNegotiatedRates(hasChannelNegotiatedRates).HasNegotiatedRates(hasNegotiatedRates).HotelId(hotelId).RatePlanCode(ratePlanCode).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Deletes channel property rate mapping



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/chl"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    bookingChannelCode := []string{"Inner_example"} // []string | Booking Channel Code. (optional)
    channelRatePlanCode := []string{"Inner_example"} // []string | Channel Room Type. (optional)
    hasChannelNegotiatedRates := []bool{false} // []bool | True if the mapping has channel negotiated rates, otherwise false. (optional)
    hasNegotiatedRates := []bool{false} // []bool | True if this channel rate plan code has negotiated rates, otherwise false (optional)
    hotelId := []string{"Inner_example"} // []string | Hotel Code. (optional)
    ratePlanCode := []string{"Inner_example"} // []string | Room Type. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelAPI.DeleteChannelRateMapping(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BookingChannelCode(bookingChannelCode).ChannelRatePlanCode(channelRatePlanCode).HasChannelNegotiatedRates(hasChannelNegotiatedRates).HasNegotiatedRates(hasNegotiatedRates).HotelId(hotelId).RatePlanCode(ratePlanCode).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelAPI.DeleteChannelRateMapping``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteChannelRateMapping`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChannelAPI.DeleteChannelRateMapping`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDeleteChannelRateMappingRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **bookingChannelCode** | **[]string** | Booking Channel Code. | 
 **channelRatePlanCode** | **[]string** | Channel Room Type. | 
 **hasChannelNegotiatedRates** | **[]bool** | True if the mapping has channel negotiated rates, otherwise false. | 
 **hasNegotiatedRates** | **[]bool** | True if this channel rate plan code has negotiated rates, otherwise false | 
 **hotelId** | **[]string** | Hotel Code. | 
 **ratePlanCode** | **[]string** | Room Type. | 
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


## DeleteChannelRatesGlobalDescriptions

> Status DeleteChannelRatesGlobalDescriptions(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).Code(code).Description(description).Code1(code1).Description1(description1).GlobalDescType(globalDescType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Deletes global rate descriptions



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/chl"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    hotelId := []string{"Inner_example"} // []string | Property mapping with Rate plan code or Room type (optional)
    code := "code_example" // string | Code. (optional)
    description := "description_example" // string | description. (optional)
    code1 := "code1_example" // string | Code. (optional)
    description1 := "description1_example" // string | description. (optional)
    globalDescType := []string{"GlobalDescType_example"} // []string | Either Room Type or Rate Plan Code (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelAPI.DeleteChannelRatesGlobalDescriptions(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).Code(code).Description(description).Code1(code1).Description1(description1).GlobalDescType(globalDescType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelAPI.DeleteChannelRatesGlobalDescriptions``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteChannelRatesGlobalDescriptions`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChannelAPI.DeleteChannelRatesGlobalDescriptions`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDeleteChannelRatesGlobalDescriptionsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **hotelId** | **[]string** | Property mapping with Rate plan code or Room type | 
 **code** | **string** | Code. | 
 **description** | **string** | description. | 
 **code1** | **string** | Code. | 
 **description1** | **string** | description. | 
 **globalDescType** | **[]string** | Either Room Type or Rate Plan Code | 
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


## DeleteChannelRoomMapping

> Status DeleteChannelRoomMapping(ctx, roomTypeCode, channelCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BeginDate(beginDate).ChannelRoomType(channelRoomType).EndDate(endDate).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Deletes channel property room mapping



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/chl"
)

func main() {
    roomTypeCode := "roomTypeCode_example" // string | Room Type Code.
    channelCode := "channelCode_example" // string | Unique ID that identifies a channel.
    hotelId := "hotelId_example" // string | Unique ID that identifies a single hotel property.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    beginDate := time.Now() // string | Begin Date. (optional)
    channelRoomType := "channelRoomType_example" // string | Channel Room Type. (optional)
    endDate := time.Now() // string | End date of the hotel-channel room type mapping. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelAPI.DeleteChannelRoomMapping(context.Background(), roomTypeCode, channelCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BeginDate(beginDate).ChannelRoomType(channelRoomType).EndDate(endDate).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelAPI.DeleteChannelRoomMapping``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteChannelRoomMapping`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChannelAPI.DeleteChannelRoomMapping`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**roomTypeCode** | **string** | Room Type Code. | 
**channelCode** | **string** | Unique ID that identifies a channel. | 
**hotelId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteChannelRoomMappingRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **beginDate** | **string** | Begin Date. | 
 **channelRoomType** | **string** | Channel Room Type. | 
 **endDate** | **string** | End date of the hotel-channel room type mapping. | 
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


## DeleteChannelRoomTypes

> Status DeleteChannelRoomTypes(ctx).BookingChannelCodes(bookingChannelCodes).RoomTypes(roomTypes).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete channel configuration



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/chl"
)

func main() {
    bookingChannelCodes := []string{"Inner_example"} // []string | Booking channel code of room type.
    roomTypes := []string{"Inner_example"} // []string | Code of room type.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelAPI.DeleteChannelRoomTypes(context.Background()).BookingChannelCodes(bookingChannelCodes).RoomTypes(roomTypes).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelAPI.DeleteChannelRoomTypes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteChannelRoomTypes`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChannelAPI.DeleteChannelRoomTypes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDeleteChannelRoomTypesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bookingChannelCodes** | **[]string** | Booking channel code of room type. | 
 **roomTypes** | **[]string** | Code of room type. | 
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


## DeleteChannelRoomsGlobalDescriptions

> Status DeleteChannelRoomsGlobalDescriptions(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).Code(code).Description(description).Code1(code1).Description1(description1).GlobalDescType(globalDescType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Deletes global room descriptions



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/chl"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    hotelId := []string{"Inner_example"} // []string | Property mapping with Rate plan code or Room type (optional)
    code := "code_example" // string | Code. (optional)
    description := "description_example" // string | description. (optional)
    code1 := "code1_example" // string | Code. (optional)
    description1 := "description1_example" // string | description. (optional)
    globalDescType := []string{"GlobalDescType_example"} // []string | Either Room Type or Rate Plan Code (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelAPI.DeleteChannelRoomsGlobalDescriptions(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).Code(code).Description(description).Code1(code1).Description1(description1).GlobalDescType(globalDescType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelAPI.DeleteChannelRoomsGlobalDescriptions``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteChannelRoomsGlobalDescriptions`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChannelAPI.DeleteChannelRoomsGlobalDescriptions`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDeleteChannelRoomsGlobalDescriptionsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **hotelId** | **[]string** | Property mapping with Rate plan code or Room type | 
 **code** | **string** | Code. | 
 **description** | **string** | description. | 
 **code1** | **string** | Code. | 
 **description1** | **string** | description. | 
 **globalDescType** | **[]string** | Either Room Type or Rate Plan Code | 
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


## DeleteCreditCardsMapping

> Status DeleteCreditCardsMapping(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Inactive(inactive).SystemCode(systemCode).SystemSubType(systemSubType).SystemType(systemType).SystemName(systemName).WebsiteURL(websiteURL).IconURL(iconURL).LocalSystemCode(localSystemCode).ExternalSystemCode(externalSystemCode).Description(description).StartDate(startDate).EndDate(endDate).Duration(duration).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Deletes channel credit card mapping



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/chl"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    inactive := true // bool | Indicates whether code is inactive or not. (optional)
    systemCode := "systemCode_example" // string | External system code such as TRAVELOCITY, EXPEDIA, etc. (optional)
    systemSubType := "systemSubType_example" // string | External system subtype such as GDS, WEB, etc. (optional)
    systemType := "systemType_example" // string | External system type such as CHANNEL, OXI, etc. (optional)
    systemName := "systemName_example" // string | External system name. (optional)
    websiteURL := "websiteURL_example" // string | Cannel Website URL (optional)
    iconURL := "iconURL_example" // string | Channel Icon URL (optional)
    localSystemCode := []string{"Inner_example"} // []string | Code used inside the OPERA System (optional)
    externalSystemCode := []string{"Inner_example"} // []string | Code used in the External System (optional)
    description := []string{"Inner_example"} // []string | Detailed Description of the given entity. (optional)
    startDate := time.Now() // string |  (optional)
    endDate := time.Now() // string |  (optional)
    duration := "duration_example" // string |  (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelAPI.DeleteCreditCardsMapping(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Inactive(inactive).SystemCode(systemCode).SystemSubType(systemSubType).SystemType(systemType).SystemName(systemName).WebsiteURL(websiteURL).IconURL(iconURL).LocalSystemCode(localSystemCode).ExternalSystemCode(externalSystemCode).Description(description).StartDate(startDate).EndDate(endDate).Duration(duration).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelAPI.DeleteCreditCardsMapping``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteCreditCardsMapping`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChannelAPI.DeleteCreditCardsMapping`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDeleteCreditCardsMappingRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **inactive** | **bool** | Indicates whether code is inactive or not. | 
 **systemCode** | **string** | External system code such as TRAVELOCITY, EXPEDIA, etc. | 
 **systemSubType** | **string** | External system subtype such as GDS, WEB, etc. | 
 **systemType** | **string** | External system type such as CHANNEL, OXI, etc. | 
 **systemName** | **string** | External system name. | 
 **websiteURL** | **string** | Cannel Website URL | 
 **iconURL** | **string** | Channel Icon URL | 
 **localSystemCode** | **[]string** | Code used inside the OPERA System | 
 **externalSystemCode** | **[]string** | Code used in the External System | 
 **description** | **[]string** | Detailed Description of the given entity. | 
 **startDate** | **string** |  | 
 **endDate** | **string** |  | 
 **duration** | **string** |  | 
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


## DeleteCurrenciesMapping

> Status DeleteCurrenciesMapping(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Inactive(inactive).SystemCode(systemCode).SystemSubType(systemSubType).SystemType(systemType).SystemName(systemName).WebsiteURL(websiteURL).IconURL(iconURL).LocalSystemCode(localSystemCode).ExternalSystemCode(externalSystemCode).Description(description).StartDate(startDate).EndDate(endDate).Duration(duration).LanyonDecimalPosition(lanyonDecimalPosition).ChannelDecimalPosition(channelDecimalPosition).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Deletes channel currency code mapping



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/chl"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    inactive := true // bool | Indicates whether code is inactive or not. (optional)
    systemCode := "systemCode_example" // string | External system code such as TRAVELOCITY, EXPEDIA, etc. (optional)
    systemSubType := "systemSubType_example" // string | External system subtype such as GDS, WEB, etc. (optional)
    systemType := "systemType_example" // string | External system type such as CHANNEL, OXI, etc. (optional)
    systemName := "systemName_example" // string | External system name. (optional)
    websiteURL := "websiteURL_example" // string | Cannel Website URL (optional)
    iconURL := "iconURL_example" // string | Channel Icon URL (optional)
    localSystemCode := []string{"Inner_example"} // []string | Code used inside the OPERA System (optional)
    externalSystemCode := []string{"Inner_example"} // []string | Code used in the External System (optional)
    description := []string{"Inner_example"} // []string | Detailed Description of the given entity. (optional)
    startDate := time.Now() // string |  (optional)
    endDate := time.Now() // string |  (optional)
    duration := "duration_example" // string |  (optional)
    lanyonDecimalPosition := []int32{int32(123)} // []int32 | Number of decimal positions used by the currency. (optional)
    channelDecimalPosition := []int32{int32(123)} // []int32 | Number of decimal positions used by the currency as per the channel. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelAPI.DeleteCurrenciesMapping(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Inactive(inactive).SystemCode(systemCode).SystemSubType(systemSubType).SystemType(systemType).SystemName(systemName).WebsiteURL(websiteURL).IconURL(iconURL).LocalSystemCode(localSystemCode).ExternalSystemCode(externalSystemCode).Description(description).StartDate(startDate).EndDate(endDate).Duration(duration).LanyonDecimalPosition(lanyonDecimalPosition).ChannelDecimalPosition(channelDecimalPosition).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelAPI.DeleteCurrenciesMapping``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteCurrenciesMapping`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChannelAPI.DeleteCurrenciesMapping`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDeleteCurrenciesMappingRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **inactive** | **bool** | Indicates whether code is inactive or not. | 
 **systemCode** | **string** | External system code such as TRAVELOCITY, EXPEDIA, etc. | 
 **systemSubType** | **string** | External system subtype such as GDS, WEB, etc. | 
 **systemType** | **string** | External system type such as CHANNEL, OXI, etc. | 
 **systemName** | **string** | External system name. | 
 **websiteURL** | **string** | Cannel Website URL | 
 **iconURL** | **string** | Channel Icon URL | 
 **localSystemCode** | **[]string** | Code used inside the OPERA System | 
 **externalSystemCode** | **[]string** | Code used in the External System | 
 **description** | **[]string** | Detailed Description of the given entity. | 
 **startDate** | **string** |  | 
 **endDate** | **string** |  | 
 **duration** | **string** |  | 
 **lanyonDecimalPosition** | **[]int32** | Number of decimal positions used by the currency. | 
 **channelDecimalPosition** | **[]int32** | Number of decimal positions used by the currency as per the channel. | 
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


## DeleteDistributionTemplates

> Status DeleteDistributionTemplates(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Codes(codes).Code(code).HotelId(hotelId).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Deletes rate templates configurations



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/chl"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    codes := []string{"Inner_example"} // []string |  (optional)
    code := []string{"Inner_example"} // []string | Configuration code. (optional)
    hotelId := []string{"Inner_example"} // []string | Hotel where the code is configured. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelAPI.DeleteDistributionTemplates(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Codes(codes).Code(code).HotelId(hotelId).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelAPI.DeleteDistributionTemplates``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteDistributionTemplates`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChannelAPI.DeleteDistributionTemplates`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDeleteDistributionTemplatesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **codes** | **[]string** |  | 
 **code** | **[]string** | Configuration code. | 
 **hotelId** | **[]string** | Hotel where the code is configured. | 
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


## DeleteGuaranteesMapping

> Status DeleteGuaranteesMapping(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Inactive(inactive).SystemCode(systemCode).SystemSubType(systemSubType).SystemType(systemType).SystemName(systemName).WebsiteURL(websiteURL).IconURL(iconURL).LocalSystemCode(localSystemCode).ExternalSystemCode(externalSystemCode).Description(description).StartDate(startDate).EndDate(endDate).Duration(duration).RequirementCode(requirementCode).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Deletes channel guarantee code mapping



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/chl"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    inactive := true // bool | Indicates whether code is inactive or not. (optional)
    systemCode := "systemCode_example" // string | External system code such as TRAVELOCITY, EXPEDIA, etc. (optional)
    systemSubType := "systemSubType_example" // string | External system subtype such as GDS, WEB, etc. (optional)
    systemType := "systemType_example" // string | External system type such as CHANNEL, OXI, etc. (optional)
    systemName := "systemName_example" // string | External system name. (optional)
    websiteURL := "websiteURL_example" // string | Cannel Website URL (optional)
    iconURL := "iconURL_example" // string | Channel Icon URL (optional)
    localSystemCode := []string{"Inner_example"} // []string | Code used inside the OPERA System (optional)
    externalSystemCode := []string{"Inner_example"} // []string | Code used in the External System (optional)
    description := []string{"Inner_example"} // []string | Detailed Description of the given entity. (optional)
    startDate := time.Now() // string |  (optional)
    endDate := time.Now() // string |  (optional)
    duration := "duration_example" // string |  (optional)
    requirementCode := []string{"Inner_example"} // []string | Requirement code of guarantee. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelAPI.DeleteGuaranteesMapping(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Inactive(inactive).SystemCode(systemCode).SystemSubType(systemSubType).SystemType(systemType).SystemName(systemName).WebsiteURL(websiteURL).IconURL(iconURL).LocalSystemCode(localSystemCode).ExternalSystemCode(externalSystemCode).Description(description).StartDate(startDate).EndDate(endDate).Duration(duration).RequirementCode(requirementCode).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelAPI.DeleteGuaranteesMapping``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteGuaranteesMapping`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChannelAPI.DeleteGuaranteesMapping`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDeleteGuaranteesMappingRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **inactive** | **bool** | Indicates whether code is inactive or not. | 
 **systemCode** | **string** | External system code such as TRAVELOCITY, EXPEDIA, etc. | 
 **systemSubType** | **string** | External system subtype such as GDS, WEB, etc. | 
 **systemType** | **string** | External system type such as CHANNEL, OXI, etc. | 
 **systemName** | **string** | External system name. | 
 **websiteURL** | **string** | Cannel Website URL | 
 **iconURL** | **string** | Channel Icon URL | 
 **localSystemCode** | **[]string** | Code used inside the OPERA System | 
 **externalSystemCode** | **[]string** | Code used in the External System | 
 **description** | **[]string** | Detailed Description of the given entity. | 
 **startDate** | **string** |  | 
 **endDate** | **string** |  | 
 **duration** | **string** |  | 
 **requirementCode** | **[]string** | Requirement code of guarantee. | 
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


## DeleteHotelsMapping

> Status DeleteHotelsMapping(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Inactive(inactive).SystemCode(systemCode).SystemSubType(systemSubType).SystemType(systemType).SystemName(systemName).WebsiteURL(websiteURL).IconURL(iconURL).LocalSystemCode(localSystemCode).ExternalSystemCode(externalSystemCode).Description(description).StartDate(startDate).EndDate(endDate).Duration(duration).City(city).RoomLimit(roomLimit).BookingLimit(bookingLimit).HotelChainId(hotelChainId).ChainCode(chainCode).PrevailingRates(prevailingRates).ARIEnabled(aRIEnabled).AddOnLicense(addOnLicense).Available(available).DefaultRateCode(defaultRateCode).DefaultRateCode1(defaultRateCode1).LowRevenueThreshold(lowRevenueThreshold).HighRevenueThreshold(highRevenueThreshold).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Deletes channel hotel mapping



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/chl"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    inactive := true // bool | Indicates whether code is inactive or not. (optional)
    systemCode := "systemCode_example" // string | External system code such as TRAVELOCITY, EXPEDIA, etc. (optional)
    systemSubType := "systemSubType_example" // string | External system subtype such as GDS, WEB, etc. (optional)
    systemType := "systemType_example" // string | External system type such as CHANNEL, OXI, etc. (optional)
    systemName := "systemName_example" // string | External system name. (optional)
    websiteURL := "websiteURL_example" // string | Cannel Website URL (optional)
    iconURL := "iconURL_example" // string | Channel Icon URL (optional)
    localSystemCode := []string{"Inner_example"} // []string | Code used inside the OPERA System (optional)
    externalSystemCode := []string{"Inner_example"} // []string | Code used in the External System (optional)
    description := []string{"Inner_example"} // []string | Detailed Description of the given entity. (optional)
    startDate := time.Now() // string |  (optional)
    endDate := time.Now() // string |  (optional)
    duration := "duration_example" // string |  (optional)
    city := []string{"Inner_example"} // []string | City code of the channel hotel. (optional)
    roomLimit := []int32{int32(123)} // []int32 | Maximum room limit for the channel hotel reservation. (optional)
    bookingLimit := []int32{int32(123)} // []int32 | Booking limit used by ADS interface for booking limit upload. Available if channel type is ADS and ADS ARI is enabled. (optional)
    hotelChainId := []string{"Inner_example"} // []string | Hotel chain ID of channel-hotel mapping. Only available for UA channel. It may not be modified if in myfidelio environment, and user is for a specific hotel. (optional)
    chainCode := []string{"Inner_example"} // []string | Chain code for the channel-hotel mapping. (optional)
    prevailingRates := []bool{false} // []bool | Prevailing rates flag of channel-hotel mapping. Available if PREVAILING_RATE_BY_LOS parameter is on. (optional)
    aRIEnabled := []bool{false} // []bool | ADS ARI enabled flag of channel-hotel mapping. Available only if channel type is ADS. (optional)
    addOnLicense := []string{"Inner_example"} // []string | External system Add-on license. This is mandatory when Channel Type is ADS. (optional)
    available := true // bool | Flag indicating if channel resort mapping is available. (optional)
    defaultRateCode := "defaultRateCode_example" // string | Default rate code to be used to calculate the total revenue. (optional)
    defaultRateCode1 := []string{"Inner_example"} // []string | Default rate code of channel hotel. (optional)
    lowRevenueThreshold := []int32{int32(123)} // []int32 | Low revenue threshold. (optional)
    highRevenueThreshold := []int32{int32(123)} // []int32 | High revenue threshold. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelAPI.DeleteHotelsMapping(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Inactive(inactive).SystemCode(systemCode).SystemSubType(systemSubType).SystemType(systemType).SystemName(systemName).WebsiteURL(websiteURL).IconURL(iconURL).LocalSystemCode(localSystemCode).ExternalSystemCode(externalSystemCode).Description(description).StartDate(startDate).EndDate(endDate).Duration(duration).City(city).RoomLimit(roomLimit).BookingLimit(bookingLimit).HotelChainId(hotelChainId).ChainCode(chainCode).PrevailingRates(prevailingRates).ARIEnabled(aRIEnabled).AddOnLicense(addOnLicense).Available(available).DefaultRateCode(defaultRateCode).DefaultRateCode1(defaultRateCode1).LowRevenueThreshold(lowRevenueThreshold).HighRevenueThreshold(highRevenueThreshold).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelAPI.DeleteHotelsMapping``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteHotelsMapping`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChannelAPI.DeleteHotelsMapping`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDeleteHotelsMappingRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **inactive** | **bool** | Indicates whether code is inactive or not. | 
 **systemCode** | **string** | External system code such as TRAVELOCITY, EXPEDIA, etc. | 
 **systemSubType** | **string** | External system subtype such as GDS, WEB, etc. | 
 **systemType** | **string** | External system type such as CHANNEL, OXI, etc. | 
 **systemName** | **string** | External system name. | 
 **websiteURL** | **string** | Cannel Website URL | 
 **iconURL** | **string** | Channel Icon URL | 
 **localSystemCode** | **[]string** | Code used inside the OPERA System | 
 **externalSystemCode** | **[]string** | Code used in the External System | 
 **description** | **[]string** | Detailed Description of the given entity. | 
 **startDate** | **string** |  | 
 **endDate** | **string** |  | 
 **duration** | **string** |  | 
 **city** | **[]string** | City code of the channel hotel. | 
 **roomLimit** | **[]int32** | Maximum room limit for the channel hotel reservation. | 
 **bookingLimit** | **[]int32** | Booking limit used by ADS interface for booking limit upload. Available if channel type is ADS and ADS ARI is enabled. | 
 **hotelChainId** | **[]string** | Hotel chain ID of channel-hotel mapping. Only available for UA channel. It may not be modified if in myfidelio environment, and user is for a specific hotel. | 
 **chainCode** | **[]string** | Chain code for the channel-hotel mapping. | 
 **prevailingRates** | **[]bool** | Prevailing rates flag of channel-hotel mapping. Available if PREVAILING_RATE_BY_LOS parameter is on. | 
 **aRIEnabled** | **[]bool** | ADS ARI enabled flag of channel-hotel mapping. Available only if channel type is ADS. | 
 **addOnLicense** | **[]string** | External system Add-on license. This is mandatory when Channel Type is ADS. | 
 **available** | **bool** | Flag indicating if channel resort mapping is available. | 
 **defaultRateCode** | **string** | Default rate code to be used to calculate the total revenue. | 
 **defaultRateCode1** | **[]string** | Default rate code of channel hotel. | 
 **lowRevenueThreshold** | **[]int32** | Low revenue threshold. | 
 **highRevenueThreshold** | **[]int32** | High revenue threshold. | 
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


## DeleteProfileNegRateAccessCodes

> Status DeleteProfileNegRateAccessCodes(ctx, clusterId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).DeleteNegotiatedRates(deleteNegotiatedRates).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete Channel Rates Access for cluster level



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/chl"
)

func main() {
    clusterId := "clusterId_example" // string | ClusterId in URI path.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    deleteNegotiatedRates := *openapiclient.NewDeleteNegotiatedRates() // DeleteNegotiatedRates | Request body
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelAPI.DeleteProfileNegRateAccessCodes(context.Background(), clusterId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).DeleteNegotiatedRates(deleteNegotiatedRates).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelAPI.DeleteProfileNegRateAccessCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteProfileNegRateAccessCodes`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChannelAPI.DeleteProfileNegRateAccessCodes`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**clusterId** | **string** | ClusterId in URI path. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteProfileNegRateAccessCodesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **deleteNegotiatedRates** | [**DeleteNegotiatedRates**](DeleteNegotiatedRates.md) | Request body | 
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


## DeleteTotalPricingElements

> Status DeleteTotalPricingElements(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).Code(code).Description(description).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Deletes total pricing tax and fee types



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/chl"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    hotelId := []string{"Inner_example"} // []string | Hotel Code that associated with Transaction Code and Total Pricing Element (optional)
    code := "code_example" // string | Code. (optional)
    description := "description_example" // string | description. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelAPI.DeleteTotalPricingElements(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).Code(code).Description(description).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelAPI.DeleteTotalPricingElements``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteTotalPricingElements`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChannelAPI.DeleteTotalPricingElements`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDeleteTotalPricingElementsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **hotelId** | **[]string** | Hotel Code that associated with Transaction Code and Total Pricing Element | 
 **code** | **string** | Code. | 
 **description** | **string** | description. | 
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


## GenerateChannelBillingStatements

> Status GenerateChannelBillingStatements(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChannelBillingStatements(channelBillingStatements).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

This API generates channel billing statements.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/chl"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    channelBillingStatements := *openapiclient.NewChannelBillingStatements() // ChannelBillingStatements | Request object to Generate channel billing statements.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelAPI.GenerateChannelBillingStatements(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChannelBillingStatements(channelBillingStatements).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelAPI.GenerateChannelBillingStatements``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GenerateChannelBillingStatements`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChannelAPI.GenerateChannelBillingStatements`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGenerateChannelBillingStatementsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **channelBillingStatements** | [**ChannelBillingStatements**](ChannelBillingStatements.md) | Request object to Generate channel billing statements. | 
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


## GetAmenitiesMapping

> AmenitiesMapping GetAmenitiesMapping(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Inactive(inactive).Limit(limit).Offset(offset).SystemCode(systemCode).SystemType(systemType).SystemSubType(systemSubType).SystemRateType(systemRateType).LocalSystemCodes(localSystemCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Gets channel amenities configuration



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/chl"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    inactive := true // bool | Indicates whether searching for active or inactive codes. (optional)
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    offset := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional) (default to 0)
    systemCode := "systemCode_example" // string | External system code to be searched. This is also known as Booking Channel Code for CHANNEL external system type. (optional)
    systemType := "systemType_example" // string | External system type to be searched. Possible values are CHANNEL, OXI, etc. (optional)
    systemSubType := "systemSubType_example" // string | External system sub type to be searched. Possible values are GDS, WEB, etc. (optional)
    systemRateType := "systemRateType_example" // string | External system rate type to be searched. Possible values are DAILY, MAX_WEEKLY, etc. (optional)
    localSystemCodes := []string{"Inner_example"} // []string |  (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelAPI.GetAmenitiesMapping(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Inactive(inactive).Limit(limit).Offset(offset).SystemCode(systemCode).SystemType(systemType).SystemSubType(systemSubType).SystemRateType(systemRateType).LocalSystemCodes(localSystemCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelAPI.GetAmenitiesMapping``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetAmenitiesMapping`: AmenitiesMapping
    fmt.Fprintf(os.Stdout, "Response from `ChannelAPI.GetAmenitiesMapping`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetAmenitiesMappingRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **inactive** | **bool** | Indicates whether searching for active or inactive codes. | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **offset** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [default to 0]
 **systemCode** | **string** | External system code to be searched. This is also known as Booking Channel Code for CHANNEL external system type. | 
 **systemType** | **string** | External system type to be searched. Possible values are CHANNEL, OXI, etc. | 
 **systemSubType** | **string** | External system sub type to be searched. Possible values are GDS, WEB, etc. | 
 **systemRateType** | **string** | External system rate type to be searched. Possible values are DAILY, MAX_WEEKLY, etc. | 
 **localSystemCodes** | **[]string** |  | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**AmenitiesMapping**](AmenitiesMapping.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetChannel

> Channel GetChannel(ctx, channelCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).IncludeInactive(includeInactive).FetchInstructions(fetchInstructions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Gets channel detail



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/chl"
)

func main() {
    channelCode := "channelCode_example" // string | Unique ID that identifies a channel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    includeInactive := []bool{false} // []bool | Indicates whether fetch should include inactive codes or not. (optional)
    fetchInstructions := []string{"FetchInstructions_example"} // []string | Simple type for external system instructions that can be used in requests for partial operations. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelAPI.GetChannel(context.Background(), channelCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).IncludeInactive(includeInactive).FetchInstructions(fetchInstructions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelAPI.GetChannel``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetChannel`: Channel
    fmt.Fprintf(os.Stdout, "Response from `ChannelAPI.GetChannel`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**channelCode** | **string** | Unique ID that identifies a channel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetChannelRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **includeInactive** | **[]bool** | Indicates whether fetch should include inactive codes or not. | 
 **fetchInstructions** | **[]string** | Simple type for external system instructions that can be used in requests for partial operations. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Channel**](Channel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetChannelAccount

> ChannelAccount GetChannelAccount(ctx, accountProfileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).MarkAsRecentlyAccessed(markAsRecentlyAccessed).FetchInstructions(fetchInstructions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Gets channel accounts



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/chl"
)

func main() {
    accountProfileId := "accountProfileId_example" // string | Unique ID that identifies an account profile.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    markAsRecentlyAccessed := true // bool | Providing this flag marks the billing account as recently accessed. (optional)
    fetchInstructions := []string{"FetchInstructions_example"} // []string | Channel account indicators information. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelAPI.GetChannelAccount(context.Background(), accountProfileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).MarkAsRecentlyAccessed(markAsRecentlyAccessed).FetchInstructions(fetchInstructions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelAPI.GetChannelAccount``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetChannelAccount`: ChannelAccount
    fmt.Fprintf(os.Stdout, "Response from `ChannelAPI.GetChannelAccount`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**accountProfileId** | **string** | Unique ID that identifies an account profile. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetChannelAccountRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **markAsRecentlyAccessed** | **bool** | Providing this flag marks the billing account as recently accessed. | 
 **fetchInstructions** | **[]string** | Channel account indicators information. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ChannelAccount**](ChannelAccount.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetChannelAccountContractElements

> ChannelAccountContractElements GetChannelAccountContractElements(ctx, contractId, accountProfileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).AttributeName(attributeName).OrderType(orderType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Gets channel account contracts for given profile Id.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/chl"
)

func main() {
    contractId := "contractId_example" // string | Contract Id.
    accountProfileId := "accountProfileId_example" // string | Unique ID that identifies an account profile.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    offset := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional) (default to 0)
    attributeName := []string{"Inner_example"} // []string |  (optional)
    orderType := []string{"OrderType_example"} // []string |  (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelAPI.GetChannelAccountContractElements(context.Background(), contractId, accountProfileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).AttributeName(attributeName).OrderType(orderType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelAPI.GetChannelAccountContractElements``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetChannelAccountContractElements`: ChannelAccountContractElements
    fmt.Fprintf(os.Stdout, "Response from `ChannelAPI.GetChannelAccountContractElements`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**contractId** | **string** | Contract Id. | 
**accountProfileId** | **string** | Unique ID that identifies an account profile. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetChannelAccountContractElementsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **offset** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [default to 0]
 **attributeName** | **[]string** |  | 
 **orderType** | **[]string** |  | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ChannelAccountContractElements**](ChannelAccountContractElements.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetChannelAccounts

> ChannelAccountsSummary GetChannelAccounts(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ExcludeInactive(excludeInactive).Limit(limit).Offset(offset).HotelId(hotelId).AccountType(accountType).AccountName(accountName).AccountCode(accountCode).ContractExpInDays(contractExpInDays).AttributeName(attributeName).OrderType(orderType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

This API retrieves channel accounts.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/chl"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    excludeInactive := true // bool | Indicator that tells whether to include inactive channel accounts or not. (optional)
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    offset := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional) (default to 0)
    hotelId := []string{"Inner_example"} // []string |  (optional)
    accountType := "accountType_example" // string | Represents channel account TEMPLATE type. (optional)
    accountName := "accountName_example" // string | Account Name for which details need to be fetched. (optional)
    accountCode := "accountCode_example" // string | Account Code/No for which details need to be fetched. (optional)
    contractExpInDays := int32(56) // int32 | To fetch channel accounts which expires in no., of days. (optional)
    attributeName := []string{"Inner_example"} // []string |  (optional)
    orderType := []string{"OrderType_example"} // []string |  (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelAPI.GetChannelAccounts(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ExcludeInactive(excludeInactive).Limit(limit).Offset(offset).HotelId(hotelId).AccountType(accountType).AccountName(accountName).AccountCode(accountCode).ContractExpInDays(contractExpInDays).AttributeName(attributeName).OrderType(orderType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelAPI.GetChannelAccounts``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetChannelAccounts`: ChannelAccountsSummary
    fmt.Fprintf(os.Stdout, "Response from `ChannelAPI.GetChannelAccounts`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetChannelAccountsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **excludeInactive** | **bool** | Indicator that tells whether to include inactive channel accounts or not. | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **offset** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [default to 0]
 **hotelId** | **[]string** |  | 
 **accountType** | **string** | Represents channel account TEMPLATE type. | 
 **accountName** | **string** | Account Name for which details need to be fetched. | 
 **accountCode** | **string** | Account Code/No for which details need to be fetched. | 
 **contractExpInDays** | **int32** | To fetch channel accounts which expires in no., of days. | 
 **attributeName** | **[]string** |  | 
 **orderType** | **[]string** |  | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ChannelAccountsSummary**](ChannelAccountsSummary.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetChannelBillingStatement

> ChannelBillingStatement GetChannelBillingStatement(ctx, statementId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).IdContext(idContext).IdType(idType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Retrieves channel billing statement for a given statement Id



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/chl"
)

func main() {
    statementId := "statementId_example" // string | Statement Id.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    idContext := "idContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional) (default to "OPERA")
    idType := "idType_example" // string | A reference to the type of object defined by the UniqueID element. (optional) (default to "Statement")
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelAPI.GetChannelBillingStatement(context.Background(), statementId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).IdContext(idContext).IdType(idType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelAPI.GetChannelBillingStatement``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetChannelBillingStatement`: ChannelBillingStatement
    fmt.Fprintf(os.Stdout, "Response from `ChannelAPI.GetChannelBillingStatement`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**statementId** | **string** | Statement Id. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetChannelBillingStatementRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **idContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | [default to &quot;OPERA&quot;]
 **idType** | **string** | A reference to the type of object defined by the UniqueID element. | [default to &quot;Statement&quot;]
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ChannelBillingStatement**](ChannelBillingStatement.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetChannelBillingStatementDetails

> ChannelBillingStatementDetails GetChannelBillingStatementDetails(ctx, statementId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).ContractId(contractId).ContractIdType(contractIdType).AttributeName(attributeName).OrderType(orderType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Retrieves channel billing statement details for a given statement Id



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/chl"
)

func main() {
    statementId := "statementId_example" // string | Statement Id.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    offset := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional) (default to 0)
    contractId := "contractId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    contractIdType := "contractIdType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    attributeName := []string{"Inner_example"} // []string |  (optional)
    orderType := []string{"OrderType_example"} // []string |  (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelAPI.GetChannelBillingStatementDetails(context.Background(), statementId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).ContractId(contractId).ContractIdType(contractIdType).AttributeName(attributeName).OrderType(orderType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelAPI.GetChannelBillingStatementDetails``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetChannelBillingStatementDetails`: ChannelBillingStatementDetails
    fmt.Fprintf(os.Stdout, "Response from `ChannelAPI.GetChannelBillingStatementDetails`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**statementId** | **string** | Statement Id. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetChannelBillingStatementDetailsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **offset** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [default to 0]
 **contractId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **contractIdType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **attributeName** | **[]string** |  | 
 **orderType** | **[]string** |  | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ChannelBillingStatementDetails**](ChannelBillingStatementDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetChannelBillingStatements

> ChannelBillingStatementSummaries GetChannelBillingStatements(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).IncludeLocked(includeLocked).Limit(limit).Offset(offset).StatementId(statementId).StatementIdType(statementIdType).BeginDate(beginDate).EndDate(endDate).ProfileId(profileId).ProfileIdType(profileIdType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Retrieves channel billing statements.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/chl"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    includeLocked := true // bool | Indicates whether search results should include locked statements or not. By default, locked statements will be included. (optional)
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    offset := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional) (default to 0)
    statementId := "statementId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    statementIdType := "statementIdType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    beginDate := time.Now() // string | Begin date of the statement. (optional)
    endDate := time.Now() // string | End date of the statement. (optional)
    profileId := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    profileIdType := []string{"Inner_example"} // []string | A reference to the type of object defined by the UniqueID element. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelAPI.GetChannelBillingStatements(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).IncludeLocked(includeLocked).Limit(limit).Offset(offset).StatementId(statementId).StatementIdType(statementIdType).BeginDate(beginDate).EndDate(endDate).ProfileId(profileId).ProfileIdType(profileIdType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelAPI.GetChannelBillingStatements``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetChannelBillingStatements`: ChannelBillingStatementSummaries
    fmt.Fprintf(os.Stdout, "Response from `ChannelAPI.GetChannelBillingStatements`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetChannelBillingStatementsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **includeLocked** | **bool** | Indicates whether search results should include locked statements or not. By default, locked statements will be included. | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **offset** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [default to 0]
 **statementId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **statementIdType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **beginDate** | **string** | Begin date of the statement. | 
 **endDate** | **string** | End date of the statement. | 
 **profileId** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **profileIdType** | **[]string** | A reference to the type of object defined by the UniqueID element. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ChannelBillingStatementSummaries**](ChannelBillingStatementSummaries.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetChannelCardTypeMappings

> ChannelCardTypeMappingDetails GetChannelCardTypeMappings(ctx).HotelIds(hotelIds).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).BookingChannelCodes(bookingChannelCodes).CardTypes(cardTypes).ChannelCardTypes(channelCardTypes).IncludeInactive(includeInactive).FetchUnmapped(fetchUnmapped).FetchMapped(fetchMapped).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Gets channel credit card mapping for a hotel



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/chl"
)

func main() {
    hotelIds := []string{"Inner_example"} // []string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    offset := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional) (default to 0)
    bookingChannelCodes := []string{"Inner_example"} // []string |  (optional)
    cardTypes := []string{"Inner_example"} // []string |  (optional)
    channelCardTypes := []string{"Inner_example"} // []string |  (optional)
    includeInactive := true // bool | Indicates whether search includes inactive mapping. (optional)
    fetchUnmapped := true // bool | Indicates whether unmapped channel-hotel card types should be fetched. (optional)
    fetchMapped := true // bool | Indicates whether mapped channel-hotel card types should be fetched. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelAPI.GetChannelCardTypeMappings(context.Background()).HotelIds(hotelIds).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).BookingChannelCodes(bookingChannelCodes).CardTypes(cardTypes).ChannelCardTypes(channelCardTypes).IncludeInactive(includeInactive).FetchUnmapped(fetchUnmapped).FetchMapped(fetchMapped).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelAPI.GetChannelCardTypeMappings``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetChannelCardTypeMappings`: ChannelCardTypeMappingDetails
    fmt.Fprintf(os.Stdout, "Response from `ChannelAPI.GetChannelCardTypeMappings`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetChannelCardTypeMappingsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hotelIds** | **[]string** |  | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **offset** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [default to 0]
 **bookingChannelCodes** | **[]string** |  | 
 **cardTypes** | **[]string** |  | 
 **channelCardTypes** | **[]string** |  | 
 **includeInactive** | **bool** | Indicates whether search includes inactive mapping. | 
 **fetchUnmapped** | **bool** | Indicates whether unmapped channel-hotel card types should be fetched. | 
 **fetchMapped** | **bool** | Indicates whether mapped channel-hotel card types should be fetched. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ChannelCardTypeMappingDetails**](ChannelCardTypeMappingDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetChannelGuaranteeCodeMappings

> ChannelGuaranteeCodeMappingDetails GetChannelGuaranteeCodeMappings(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelIds(hotelIds).Limit(limit).Offset(offset).BookingChannelCodes(bookingChannelCodes).GuaranteeCode(guaranteeCode).ChannelGuaranteeCode(channelGuaranteeCode).IncludeInactive(includeInactive).FetchUnmapped(fetchUnmapped).FetchMapped(fetchMapped).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Gets channel guarantee code mappings



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/chl"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID that identifies a single hotel property.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    hotelIds := []string{"Inner_example"} // []string | Hotel code. (optional)
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    offset := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional) (default to 0)
    bookingChannelCodes := []string{"Inner_example"} // []string |  (optional)
    guaranteeCode := []string{"Inner_example"} // []string |  (optional)
    channelGuaranteeCode := []string{"Inner_example"} // []string |  (optional)
    includeInactive := true // bool | Indicates whether search includes inactive mapping. (optional)
    fetchUnmapped := true // bool | Indicates whether unmapped channel-hotel guarantee code should be fetched. (optional)
    fetchMapped := true // bool | Indicates whether mapped channel-hotel guarantee code should be fetched. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelAPI.GetChannelGuaranteeCodeMappings(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelIds(hotelIds).Limit(limit).Offset(offset).BookingChannelCodes(bookingChannelCodes).GuaranteeCode(guaranteeCode).ChannelGuaranteeCode(channelGuaranteeCode).IncludeInactive(includeInactive).FetchUnmapped(fetchUnmapped).FetchMapped(fetchMapped).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelAPI.GetChannelGuaranteeCodeMappings``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetChannelGuaranteeCodeMappings`: ChannelGuaranteeCodeMappingDetails
    fmt.Fprintf(os.Stdout, "Response from `ChannelAPI.GetChannelGuaranteeCodeMappings`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetChannelGuaranteeCodeMappingsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **hotelIds** | **[]string** | Hotel code. | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **offset** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [default to 0]
 **bookingChannelCodes** | **[]string** |  | 
 **guaranteeCode** | **[]string** |  | 
 **channelGuaranteeCode** | **[]string** |  | 
 **includeInactive** | **bool** | Indicates whether search includes inactive mapping. | 
 **fetchUnmapped** | **bool** | Indicates whether unmapped channel-hotel guarantee code should be fetched. | 
 **fetchMapped** | **bool** | Indicates whether mapped channel-hotel guarantee code should be fetched. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ChannelGuaranteeCodeMappingDetails**](ChannelGuaranteeCodeMappingDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetChannelHotelCodeMapping

> ChannelHotelCodeMapping GetChannelHotelCodeMapping(ctx, channelCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).ChannelHotelCode(channelHotelCode).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get channel hotel mappings



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/chl"
)

func main() {
    channelCode := "channelCode_example" // string | Unique ID that identifies a channel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    hotelId := "hotelId_example" // string | OPERA hotel code for which mapped channel hotel code should be fetched. (optional)
    channelHotelCode := "channelHotelCode_example" // string | Channel hotel code for which mapped OPERA hotel code should be fetched. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelAPI.GetChannelHotelCodeMapping(context.Background(), channelCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).ChannelHotelCode(channelHotelCode).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelAPI.GetChannelHotelCodeMapping``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetChannelHotelCodeMapping`: ChannelHotelCodeMapping
    fmt.Fprintf(os.Stdout, "Response from `ChannelAPI.GetChannelHotelCodeMapping`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**channelCode** | **string** | Unique ID that identifies a channel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetChannelHotelCodeMappingRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **hotelId** | **string** | OPERA hotel code for which mapped channel hotel code should be fetched. | 
 **channelHotelCode** | **string** | Channel hotel code for which mapped OPERA hotel code should be fetched. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ChannelHotelCodeMapping**](ChannelHotelCodeMapping.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetChannelHotelLetters

> FetchedChannelHotelLetters GetChannelHotelLetters(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChannelCode(channelCode).HotelIds(hotelIds).Language(language).LetterType(letterType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Gets channel property confirmation letter mapping



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/chl"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    channelCode := []string{"Inner_example"} // []string |  (optional)
    hotelIds := []string{"Inner_example"} // []string |  (optional)
    language := "language_example" // string | Language code associated with the hotel letters. (optional)
    letterType := "letterType_example" // string | Represents Inquiry Letter Type. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelAPI.GetChannelHotelLetters(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChannelCode(channelCode).HotelIds(hotelIds).Language(language).LetterType(letterType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelAPI.GetChannelHotelLetters``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetChannelHotelLetters`: FetchedChannelHotelLetters
    fmt.Fprintf(os.Stdout, "Response from `ChannelAPI.GetChannelHotelLetters`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetChannelHotelLettersRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **channelCode** | **[]string** |  | 
 **hotelIds** | **[]string** |  | 
 **language** | **string** | Language code associated with the hotel letters. | 
 **letterType** | **string** | Represents Inquiry Letter Type. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**FetchedChannelHotelLetters**](FetchedChannelHotelLetters.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetChannelMarketingText

> ChannelMarketingTextsInfo GetChannelMarketingText(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TransactionType(transactionType).PolicyType(policyType).PolicyDetail(policyDetail).BeginDate(beginDate).FilterHotelIds(filterHotelIds).BookingChannelCode(bookingChannelCode).TransactionTypes(transactionTypes).PolicyTypesPolicyType(policyTypesPolicyType).PolicyDetailPolicyDetail(policyDetailPolicyDetail).ShowGlobal(showGlobal).IncludeInactive(includeInactive).FetchInstructions(fetchInstructions).HotelIds(hotelIds).ChannelCode(channelCode).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Gets channel marketing messages



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/chl"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    transactionType := "transactionType_example" // string |  (optional)
    policyType := "policyType_example" // string |  (optional)
    policyDetail := "policyDetail_example" // string |  (optional)
    beginDate := time.Now() // string |  (optional)
    filterHotelIds := []string{"Inner_example"} // []string |  (optional)
    bookingChannelCode := []string{"Inner_example"} // []string |  (optional)
    transactionTypes := []string{"Inner_example"} // []string |  (optional)
    policyTypesPolicyType := []string{"Inner_example"} // []string |  (optional)
    policyDetailPolicyDetail := []string{"Inner_example"} // []string |  (optional)
    showGlobal := true // bool |  (optional)
    includeInactive := true // bool | Include or not include inactive channel marketing text. (optional)
    fetchInstructions := []string{"FetchInstructions_example"} // []string | Simple type for channel fetch instruction. (optional)
    hotelIds := []string{"Inner_example"} // []string | Hotel code. (optional)
    channelCode := []string{"Inner_example"} // []string |  (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelAPI.GetChannelMarketingText(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TransactionType(transactionType).PolicyType(policyType).PolicyDetail(policyDetail).BeginDate(beginDate).FilterHotelIds(filterHotelIds).BookingChannelCode(bookingChannelCode).TransactionTypes(transactionTypes).PolicyTypesPolicyType(policyTypesPolicyType).PolicyDetailPolicyDetail(policyDetailPolicyDetail).ShowGlobal(showGlobal).IncludeInactive(includeInactive).FetchInstructions(fetchInstructions).HotelIds(hotelIds).ChannelCode(channelCode).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelAPI.GetChannelMarketingText``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetChannelMarketingText`: ChannelMarketingTextsInfo
    fmt.Fprintf(os.Stdout, "Response from `ChannelAPI.GetChannelMarketingText`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetChannelMarketingTextRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **transactionType** | **string** |  | 
 **policyType** | **string** |  | 
 **policyDetail** | **string** |  | 
 **beginDate** | **string** |  | 
 **filterHotelIds** | **[]string** |  | 
 **bookingChannelCode** | **[]string** |  | 
 **transactionTypes** | **[]string** |  | 
 **policyTypesPolicyType** | **[]string** |  | 
 **policyDetailPolicyDetail** | **[]string** |  | 
 **showGlobal** | **bool** |  | 
 **includeInactive** | **bool** | Include or not include inactive channel marketing text. | 
 **fetchInstructions** | **[]string** | Simple type for channel fetch instruction. | 
 **hotelIds** | **[]string** | Hotel code. | 
 **channelCode** | **[]string** |  | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ChannelMarketingTextsInfo**](ChannelMarketingTextsInfo.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetChannelNegotiatedRate

> ChannelNegotiatedRateDetails GetChannelNegotiatedRate(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).HotelId(hotelId).BookingChannelCode(bookingChannelCode).ChannelRatePlanCode(channelRatePlanCode).AccessCode(accessCode).UniqueId(uniqueId).UniqueIdType(uniqueIdType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Gets channel negotiate rate



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/chl"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    hotelId := "hotelId_example" // string |  (optional)
    bookingChannelCode := "bookingChannelCode_example" // string |  (optional)
    channelRatePlanCode := "channelRatePlanCode_example" // string |  (optional)
    accessCode := "accessCode_example" // string |  (optional)
    uniqueId := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    uniqueIdType := []string{"Inner_example"} // []string |  (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelAPI.GetChannelNegotiatedRate(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).HotelId(hotelId).BookingChannelCode(bookingChannelCode).ChannelRatePlanCode(channelRatePlanCode).AccessCode(accessCode).UniqueId(uniqueId).UniqueIdType(uniqueIdType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelAPI.GetChannelNegotiatedRate``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetChannelNegotiatedRate`: ChannelNegotiatedRateDetails
    fmt.Fprintf(os.Stdout, "Response from `ChannelAPI.GetChannelNegotiatedRate`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetChannelNegotiatedRateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **hotelId** | **string** |  | 
 **bookingChannelCode** | **string** |  | 
 **channelRatePlanCode** | **string** |  | 
 **accessCode** | **string** |  | 
 **uniqueId** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **uniqueIdType** | **[]string** |  | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ChannelNegotiatedRateDetails**](ChannelNegotiatedRateDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetChannelNegotiatedRates

> ProfileNegotiatedRateDetails GetChannelNegotiatedRates(ctx, clusterId).HotelIds(hotelIds).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).ChannelCode(channelCode).ChannelRateCode(channelRateCode).RatePlanCode(ratePlanCode).AccessCode(accessCode).IncludeInactive(includeInactive).InternalChannelsOnly(internalChannelsOnly).UniqueId(uniqueId).UniqueIdType(uniqueIdType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Gets channel negotiate rate



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/chl"
)

func main() {
    clusterId := "clusterId_example" // string | ClusterId in URI path
    hotelIds := []string{"Inner_example"} // []string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    channelCode := "channelCode_example" // string |  (optional)
    channelRateCode := "channelRateCode_example" // string |  (optional)
    ratePlanCode := "ratePlanCode_example" // string |  (optional)
    accessCode := "accessCode_example" // string |  (optional)
    includeInactive := true // bool |  (optional) (default to false)
    internalChannelsOnly := true // bool | If true then it would fetch only the internal channels. If false then it expects channelCode as well to establish if its an inernal or external channel. (optional) (default to false)
    uniqueId := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    uniqueIdType := []string{"Inner_example"} // []string |  (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelAPI.GetChannelNegotiatedRates(context.Background(), clusterId).HotelIds(hotelIds).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).ChannelCode(channelCode).ChannelRateCode(channelRateCode).RatePlanCode(ratePlanCode).AccessCode(accessCode).IncludeInactive(includeInactive).InternalChannelsOnly(internalChannelsOnly).UniqueId(uniqueId).UniqueIdType(uniqueIdType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelAPI.GetChannelNegotiatedRates``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetChannelNegotiatedRates`: ProfileNegotiatedRateDetails
    fmt.Fprintf(os.Stdout, "Response from `ChannelAPI.GetChannelNegotiatedRates`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**clusterId** | **string** | ClusterId in URI path | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetChannelNegotiatedRatesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **hotelIds** | **[]string** |  | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **channelCode** | **string** |  | 
 **channelRateCode** | **string** |  | 
 **ratePlanCode** | **string** |  | 
 **accessCode** | **string** |  | 
 **includeInactive** | **bool** |  | [default to false]
 **internalChannelsOnly** | **bool** | If true then it would fetch only the internal channels. If false then it expects channelCode as well to establish if its an inernal or external channel. | [default to false]
 **uniqueId** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **uniqueIdType** | **[]string** |  | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ProfileNegotiatedRateDetails**](ProfileNegotiatedRateDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetChannelOrgMapping

> ChannelOrgMappingsDetails GetChannelOrgMapping(ctx, tenantCode, channelCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChainCode(chainCode).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Retrieves channel tenants mapping.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/chl"
)

func main() {
    tenantCode := "tenantCode_example" // string | Tenant Code.
    channelCode := "channelCode_example" // string | Unique ID that identifies a channel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    chainCode := "chainCode_example" // string | Chain code for which channel code and org code are mapped. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelAPI.GetChannelOrgMapping(context.Background(), tenantCode, channelCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChainCode(chainCode).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelAPI.GetChannelOrgMapping``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetChannelOrgMapping`: ChannelOrgMappingsDetails
    fmt.Fprintf(os.Stdout, "Response from `ChannelAPI.GetChannelOrgMapping`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**tenantCode** | **string** | Tenant Code. | 
**channelCode** | **string** | Unique ID that identifies a channel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetChannelOrgMappingRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **chainCode** | **string** | Chain code for which channel code and org code are mapped. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ChannelOrgMappingsDetails**](ChannelOrgMappingsDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetChannelParameters

> ChannelParameterMapping GetChannelParameters(ctx, channelCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ParameterNameWildCard(parameterNameWildCard).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Retrieves channel parameters.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/chl"
)

func main() {
    channelCode := "channelCode_example" // string | Unique ID that identifies a channel.
    hotelId := "hotelId_example" // string | Unique ID that identifies a single hotel property.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    parameterNameWildCard := "parameterNameWildCard_example" // string | Parameter for wild card search on channel parameters. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelAPI.GetChannelParameters(context.Background(), channelCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ParameterNameWildCard(parameterNameWildCard).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelAPI.GetChannelParameters``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetChannelParameters`: ChannelParameterMapping
    fmt.Fprintf(os.Stdout, "Response from `ChannelAPI.GetChannelParameters`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**channelCode** | **string** | Unique ID that identifies a channel. | 
**hotelId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetChannelParametersRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **parameterNameWildCard** | **string** | Parameter for wild card search on channel parameters. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ChannelParameterMapping**](ChannelParameterMapping.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetChannelPolicies

> ChannelPolicies GetChannelPolicies(ctx, channelCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RequestType(requestType).StartDate(startDate).EndDate(endDate).Duration(duration).ChannelRatePlanCode(channelRatePlanCode).ChannelRoomTypeCode(channelRoomTypeCode).RatePlanCode(ratePlanCode).RoomTypeCode(roomTypeCode).CorporateId(corporateId).CorporateIdType(corporateIdType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Retrieves the channel policies



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/chl"
)

func main() {
    channelCode := "channelCode_example" // string | Unique ID that identifies a channel.
    hotelId := "hotelId_example" // string | Unique ID that identifies a single hotel property.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    requestType := "requestType_example" // string |  (optional)
    startDate := time.Now() // string |  (optional)
    endDate := time.Now() // string |  (optional)
    duration := "duration_example" // string |  (optional)
    channelRatePlanCode := []string{"Inner_example"} // []string |  (optional)
    channelRoomTypeCode := []string{"Inner_example"} // []string |  (optional)
    ratePlanCode := []string{"Inner_example"} // []string |  (optional)
    roomTypeCode := []string{"Inner_example"} // []string |  (optional)
    corporateId := "corporateId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    corporateIdType := "corporateIdType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelAPI.GetChannelPolicies(context.Background(), channelCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RequestType(requestType).StartDate(startDate).EndDate(endDate).Duration(duration).ChannelRatePlanCode(channelRatePlanCode).ChannelRoomTypeCode(channelRoomTypeCode).RatePlanCode(ratePlanCode).RoomTypeCode(roomTypeCode).CorporateId(corporateId).CorporateIdType(corporateIdType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelAPI.GetChannelPolicies``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetChannelPolicies`: ChannelPolicies
    fmt.Fprintf(os.Stdout, "Response from `ChannelAPI.GetChannelPolicies`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**channelCode** | **string** | Unique ID that identifies a channel. | 
**hotelId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetChannelPoliciesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **requestType** | **string** |  | 
 **startDate** | **string** |  | 
 **endDate** | **string** |  | 
 **duration** | **string** |  | 
 **channelRatePlanCode** | **[]string** |  | 
 **channelRoomTypeCode** | **[]string** |  | 
 **ratePlanCode** | **[]string** |  | 
 **roomTypeCode** | **[]string** |  | 
 **corporateId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **corporateIdType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ChannelPolicies**](ChannelPolicies.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetChannelRateCodeGlobalDesc

> ChannelEnhancedGlobalDescription GetChannelRateCodeGlobalDesc(ctx, ratePlanCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Gets global rate descriptions



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/chl"
)

func main() {
    ratePlanCode := "ratePlanCode_example" // string | Rate Plan Code.
    hotelId := "hotelId_example" // string | Unique ID that identifies a single hotel property.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelAPI.GetChannelRateCodeGlobalDesc(context.Background(), ratePlanCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelAPI.GetChannelRateCodeGlobalDesc``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetChannelRateCodeGlobalDesc`: ChannelEnhancedGlobalDescription
    fmt.Fprintf(os.Stdout, "Response from `ChannelAPI.GetChannelRateCodeGlobalDesc`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**ratePlanCode** | **string** | Rate Plan Code. | 
**hotelId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetChannelRateCodeGlobalDescRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ChannelEnhancedGlobalDescription**](ChannelEnhancedGlobalDescription.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetChannelRateMapping

> ChannelRateMappings GetChannelRateMapping(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).HotelId(hotelId).ChannelCode(channelCode).RatePlanCodes(ratePlanCodes).ChannelRatePlanCodes(channelRatePlanCodes).RatePlanCategories(ratePlanCategories).ChannelRatePlanCategories(channelRatePlanCategories).IncludeUnmappedRatePlans(includeUnmappedRatePlans).OnlyUnmappedRatePlans(onlyUnmappedRatePlans).IncludeInactiveMappings(includeInactiveMappings).OnlyNegotiatedRates(onlyNegotiatedRates).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Gets channel property rate mapping



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/chl"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    offset := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional) (default to 0)
    hotelId := []string{"Inner_example"} // []string |  (optional)
    channelCode := []string{"Inner_example"} // []string |  (optional)
    ratePlanCodes := []string{"Inner_example"} // []string |  (optional)
    channelRatePlanCodes := []string{"Inner_example"} // []string |  (optional)
    ratePlanCategories := []string{"Inner_example"} // []string |  (optional)
    channelRatePlanCategories := []string{"Inner_example"} // []string |  (optional)
    includeUnmappedRatePlans := true // bool | Flag whether to include unmapped rate codes. (optional)
    onlyUnmappedRatePlans := true // bool | Flag whether to include unmapped rate codes only. (optional)
    includeInactiveMappings := true // bool | Flag whether to include inactive mappings. (optional)
    onlyNegotiatedRates := true // bool | Flag whether to include negotiated rate mappings only. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelAPI.GetChannelRateMapping(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).HotelId(hotelId).ChannelCode(channelCode).RatePlanCodes(ratePlanCodes).ChannelRatePlanCodes(channelRatePlanCodes).RatePlanCategories(ratePlanCategories).ChannelRatePlanCategories(channelRatePlanCategories).IncludeUnmappedRatePlans(includeUnmappedRatePlans).OnlyUnmappedRatePlans(onlyUnmappedRatePlans).IncludeInactiveMappings(includeInactiveMappings).OnlyNegotiatedRates(onlyNegotiatedRates).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelAPI.GetChannelRateMapping``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetChannelRateMapping`: ChannelRateMappings
    fmt.Fprintf(os.Stdout, "Response from `ChannelAPI.GetChannelRateMapping`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetChannelRateMappingRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **offset** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [default to 0]
 **hotelId** | **[]string** |  | 
 **channelCode** | **[]string** |  | 
 **ratePlanCodes** | **[]string** |  | 
 **channelRatePlanCodes** | **[]string** |  | 
 **ratePlanCategories** | **[]string** |  | 
 **channelRatePlanCategories** | **[]string** |  | 
 **includeUnmappedRatePlans** | **bool** | Flag whether to include unmapped rate codes. | 
 **onlyUnmappedRatePlans** | **bool** | Flag whether to include unmapped rate codes only. | 
 **includeInactiveMappings** | **bool** | Flag whether to include inactive mappings. | 
 **onlyNegotiatedRates** | **bool** | Flag whether to include negotiated rate mappings only. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ChannelRateMappings**](ChannelRateMappings.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetChannelRateRoomSeq

> ChannelRateRoomSequenceDetails GetChannelRateRoomSeq(ctx, channelCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).RatePlanCode(ratePlanCode).RoomType(roomType).ChannelRatePlanCode(channelRatePlanCode).ChannelRoomType(channelRoomType).ChannelRateRoomParameterName(channelRateRoomParameterName).ChannelRateRoomParameterValue(channelRateRoomParameterValue).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Gets channel property rateroom sequence



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/chl"
)

func main() {
    channelCode := "channelCode_example" // string | Unique ID that identifies a channel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    ratePlanCode := "ratePlanCode_example" // string | Hotel Rate Plan Code. (optional)
    roomType := "roomType_example" // string | Hotel Room Type. (optional)
    channelRatePlanCode := "channelRatePlanCode_example" // string | Channel Rate Plan Code. (optional)
    channelRoomType := "channelRoomType_example" // string | Channel Room Type. (optional)
    channelRateRoomParameterName := []string{"ChannelRateRoomParameterName_example"} // []string | Enumaration of the different parameters Channel Rate Room accepts. (optional)
    channelRateRoomParameterValue := []string{"Inner_example"} // []string |  (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelAPI.GetChannelRateRoomSeq(context.Background(), channelCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).RatePlanCode(ratePlanCode).RoomType(roomType).ChannelRatePlanCode(channelRatePlanCode).ChannelRoomType(channelRoomType).ChannelRateRoomParameterName(channelRateRoomParameterName).ChannelRateRoomParameterValue(channelRateRoomParameterValue).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelAPI.GetChannelRateRoomSeq``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetChannelRateRoomSeq`: ChannelRateRoomSequenceDetails
    fmt.Fprintf(os.Stdout, "Response from `ChannelAPI.GetChannelRateRoomSeq`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**channelCode** | **string** | Unique ID that identifies a channel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetChannelRateRoomSeqRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **ratePlanCode** | **string** | Hotel Rate Plan Code. | 
 **roomType** | **string** | Hotel Room Type. | 
 **channelRatePlanCode** | **string** | Channel Rate Plan Code. | 
 **channelRoomType** | **string** | Channel Room Type. | 
 **channelRateRoomParameterName** | **[]string** | Enumaration of the different parameters Channel Rate Room accepts. | 
 **channelRateRoomParameterValue** | **[]string** |  | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ChannelRateRoomSequenceDetails**](ChannelRateRoomSequenceDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetChannelRatesGlobalDescriptions

> ChannelGlobalDescriptions GetChannelRatesGlobalDescriptions(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelIds(hotelIds).RatePlanCodes(ratePlanCodes).RoomTypes(roomTypes).GlobalDescriptionType(globalDescriptionType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Gets global rate descriptions



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/chl"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    hotelIds := []string{"Inner_example"} // []string |  (optional)
    ratePlanCodes := []string{"Inner_example"} // []string |  (optional)
    roomTypes := []string{"Inner_example"} // []string |  (optional)
    globalDescriptionType := "globalDescriptionType_example" // string | Either Room Type or Rate Plan Code (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelAPI.GetChannelRatesGlobalDescriptions(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelIds(hotelIds).RatePlanCodes(ratePlanCodes).RoomTypes(roomTypes).GlobalDescriptionType(globalDescriptionType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelAPI.GetChannelRatesGlobalDescriptions``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetChannelRatesGlobalDescriptions`: ChannelGlobalDescriptions
    fmt.Fprintf(os.Stdout, "Response from `ChannelAPI.GetChannelRatesGlobalDescriptions`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetChannelRatesGlobalDescriptionsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **hotelIds** | **[]string** |  | 
 **ratePlanCodes** | **[]string** |  | 
 **roomTypes** | **[]string** |  | 
 **globalDescriptionType** | **string** | Either Room Type or Rate Plan Code | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ChannelGlobalDescriptions**](ChannelGlobalDescriptions.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetChannelRoomMapping

> ChannelRoomMappingsSummary GetChannelRoomMapping(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelIds(hotelIds).Limit(limit).Offset(offset).BookingChannelCodes(bookingChannelCodes).RoomTypes(roomTypes).ChannelRoomTypes(channelRoomTypes).IncludeInactiveMappings(includeInactiveMappings).IncludeUnmappedRoomTypes(includeUnmappedRoomTypes).OnlyUnmappedRoomTypes(onlyUnmappedRoomTypes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Gets channel property room mapping



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/chl"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID that identifies a single hotel property.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    hotelIds := []string{"Inner_example"} // []string | Hotel code. (optional)
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    offset := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional) (default to 0)
    bookingChannelCodes := []string{"Inner_example"} // []string |  (optional)
    roomTypes := []string{"Inner_example"} // []string |  (optional)
    channelRoomTypes := []string{"Inner_example"} // []string |  (optional)
    includeInactiveMappings := true // bool | Flag whether to include inactive mappings or not. (optional)
    includeUnmappedRoomTypes := true // bool | Flag whether to include unmapped room types or not. (optional)
    onlyUnmappedRoomTypes := true // bool | Flag whether to include mapped room types only. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelAPI.GetChannelRoomMapping(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelIds(hotelIds).Limit(limit).Offset(offset).BookingChannelCodes(bookingChannelCodes).RoomTypes(roomTypes).ChannelRoomTypes(channelRoomTypes).IncludeInactiveMappings(includeInactiveMappings).IncludeUnmappedRoomTypes(includeUnmappedRoomTypes).OnlyUnmappedRoomTypes(onlyUnmappedRoomTypes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelAPI.GetChannelRoomMapping``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetChannelRoomMapping`: ChannelRoomMappingsSummary
    fmt.Fprintf(os.Stdout, "Response from `ChannelAPI.GetChannelRoomMapping`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetChannelRoomMappingRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **hotelIds** | **[]string** | Hotel code. | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **offset** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [default to 0]
 **bookingChannelCodes** | **[]string** |  | 
 **roomTypes** | **[]string** |  | 
 **channelRoomTypes** | **[]string** |  | 
 **includeInactiveMappings** | **bool** | Flag whether to include inactive mappings or not. | 
 **includeUnmappedRoomTypes** | **bool** | Flag whether to include unmapped room types or not. | 
 **onlyUnmappedRoomTypes** | **bool** | Flag whether to include mapped room types only. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ChannelRoomMappingsSummary**](ChannelRoomMappingsSummary.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetChannelRoomMappingById

> ChannelRoomMapping GetChannelRoomMappingById(ctx, roomTypeCode, channelCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BeginDate(beginDate).ChannelRoomType(channelRoomType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Gets channel room mapping by room type



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/chl"
)

func main() {
    roomTypeCode := "roomTypeCode_example" // string | Room Type Code.
    channelCode := "channelCode_example" // string | Unique ID that identifies a channel.
    hotelId := "hotelId_example" // string | Unique ID that identifies a single hotel property.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    beginDate := time.Now() // string | Begin Date. (optional)
    channelRoomType := "channelRoomType_example" // string | Channel Room Type. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelAPI.GetChannelRoomMappingById(context.Background(), roomTypeCode, channelCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BeginDate(beginDate).ChannelRoomType(channelRoomType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelAPI.GetChannelRoomMappingById``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetChannelRoomMappingById`: ChannelRoomMapping
    fmt.Fprintf(os.Stdout, "Response from `ChannelAPI.GetChannelRoomMappingById`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**roomTypeCode** | **string** | Room Type Code. | 
**channelCode** | **string** | Unique ID that identifies a channel. | 
**hotelId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetChannelRoomMappingByIdRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **beginDate** | **string** | Begin Date. | 
 **channelRoomType** | **string** | Channel Room Type. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ChannelRoomMapping**](ChannelRoomMapping.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetChannelRoomTypeGlobalDesc

> ChannelEnhancedGlobalDescription GetChannelRoomTypeGlobalDesc(ctx, roomType, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Gets global room descriptions



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/chl"
)

func main() {
    roomType := "roomType_example" // string | Room type.
    hotelId := "hotelId_example" // string | Unique ID that identifies a single hotel property.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelAPI.GetChannelRoomTypeGlobalDesc(context.Background(), roomType, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelAPI.GetChannelRoomTypeGlobalDesc``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetChannelRoomTypeGlobalDesc`: ChannelEnhancedGlobalDescription
    fmt.Fprintf(os.Stdout, "Response from `ChannelAPI.GetChannelRoomTypeGlobalDesc`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**roomType** | **string** | Room type. | 
**hotelId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetChannelRoomTypeGlobalDescRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ChannelEnhancedGlobalDescription**](ChannelEnhancedGlobalDescription.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetChannelRoomsGlobalDescriptions

> ChannelGlobalDescriptions GetChannelRoomsGlobalDescriptions(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelIds(hotelIds).RatePlanCodes(ratePlanCodes).RoomTypes(roomTypes).GlobalDescriptionType(globalDescriptionType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Gets global room descriptions



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/chl"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    hotelIds := []string{"Inner_example"} // []string |  (optional)
    ratePlanCodes := []string{"Inner_example"} // []string |  (optional)
    roomTypes := []string{"Inner_example"} // []string |  (optional)
    globalDescriptionType := "globalDescriptionType_example" // string | Either Room Type or Rate Plan Code (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelAPI.GetChannelRoomsGlobalDescriptions(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelIds(hotelIds).RatePlanCodes(ratePlanCodes).RoomTypes(roomTypes).GlobalDescriptionType(globalDescriptionType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelAPI.GetChannelRoomsGlobalDescriptions``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetChannelRoomsGlobalDescriptions`: ChannelGlobalDescriptions
    fmt.Fprintf(os.Stdout, "Response from `ChannelAPI.GetChannelRoomsGlobalDescriptions`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetChannelRoomsGlobalDescriptionsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **hotelIds** | **[]string** |  | 
 **ratePlanCodes** | **[]string** |  | 
 **roomTypes** | **[]string** |  | 
 **globalDescriptionType** | **string** | Either Room Type or Rate Plan Code | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ChannelGlobalDescriptions**](ChannelGlobalDescriptions.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetChannels

> Channels GetChannels(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Inactive(inactive).Limit(limit).Offset(offset).ChannelCode(channelCode).SystemType(systemType).SystemSubType(systemSubType).SystemRateType(systemRateType).IncludeInactive(includeInactive).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Gets list of channels



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/chl"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    inactive := true // bool | Indicates whether searching for active or inactive codes. (optional)
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    offset := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional) (default to 0)
    channelCode := "channelCode_example" // string | External system code to be searched. This is also known as Booking Channel Code for CHANNEL external system type. (optional)
    systemType := "systemType_example" // string | External system type to be searched. Possible values are CHANNEL, OXI, etc. (optional)
    systemSubType := "systemSubType_example" // string | External system sub type to be searched. Possible values are GDS, WEB, etc. (optional)
    systemRateType := "systemRateType_example" // string | External system rate type to be searched. Possible values are DAILY, MAX_WEEKLY, etc. (optional)
    includeInactive := true // bool | Flag whether to include inactive channel or not. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelAPI.GetChannels(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Inactive(inactive).Limit(limit).Offset(offset).ChannelCode(channelCode).SystemType(systemType).SystemSubType(systemSubType).SystemRateType(systemRateType).IncludeInactive(includeInactive).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelAPI.GetChannels``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetChannels`: Channels
    fmt.Fprintf(os.Stdout, "Response from `ChannelAPI.GetChannels`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetChannelsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **inactive** | **bool** | Indicates whether searching for active or inactive codes. | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **offset** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [default to 0]
 **channelCode** | **string** | External system code to be searched. This is also known as Booking Channel Code for CHANNEL external system type. | 
 **systemType** | **string** | External system type to be searched. Possible values are CHANNEL, OXI, etc. | 
 **systemSubType** | **string** | External system sub type to be searched. Possible values are GDS, WEB, etc. | 
 **systemRateType** | **string** | External system rate type to be searched. Possible values are DAILY, MAX_WEEKLY, etc. | 
 **includeInactive** | **bool** | Flag whether to include inactive channel or not. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Channels**](Channels.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetCreditCardsMapping

> CreditCardsMapping GetCreditCardsMapping(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Inactive(inactive).Limit(limit).Offset(offset).SystemCode(systemCode).SystemType(systemType).SystemSubType(systemSubType).SystemRateType(systemRateType).LocalSystemCodes(localSystemCodes).IncludeInactive(includeInactive).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Gets channel credit card mapping



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/chl"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    inactive := true // bool | Indicates whether searching for active or inactive codes. (optional)
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    offset := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional) (default to 0)
    systemCode := "systemCode_example" // string | External system code to be searched. This is also known as Booking Channel Code for CHANNEL external system type. (optional)
    systemType := "systemType_example" // string | External system type to be searched. Possible values are CHANNEL, OXI, etc. (optional)
    systemSubType := "systemSubType_example" // string | External system sub type to be searched. Possible values are GDS, WEB, etc. (optional)
    systemRateType := "systemRateType_example" // string | External system rate type to be searched. Possible values are DAILY, MAX_WEEKLY, etc. (optional)
    localSystemCodes := []string{"Inner_example"} // []string |  (optional)
    includeInactive := true // bool | Indicates whether to include inactive guarantees or not. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelAPI.GetCreditCardsMapping(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Inactive(inactive).Limit(limit).Offset(offset).SystemCode(systemCode).SystemType(systemType).SystemSubType(systemSubType).SystemRateType(systemRateType).LocalSystemCodes(localSystemCodes).IncludeInactive(includeInactive).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelAPI.GetCreditCardsMapping``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetCreditCardsMapping`: CreditCardsMapping
    fmt.Fprintf(os.Stdout, "Response from `ChannelAPI.GetCreditCardsMapping`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetCreditCardsMappingRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **inactive** | **bool** | Indicates whether searching for active or inactive codes. | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **offset** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [default to 0]
 **systemCode** | **string** | External system code to be searched. This is also known as Booking Channel Code for CHANNEL external system type. | 
 **systemType** | **string** | External system type to be searched. Possible values are CHANNEL, OXI, etc. | 
 **systemSubType** | **string** | External system sub type to be searched. Possible values are GDS, WEB, etc. | 
 **systemRateType** | **string** | External system rate type to be searched. Possible values are DAILY, MAX_WEEKLY, etc. | 
 **localSystemCodes** | **[]string** |  | 
 **includeInactive** | **bool** | Indicates whether to include inactive guarantees or not. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**CreditCardsMapping**](CreditCardsMapping.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetCurrenciesMapping

> CurrenciesMapping GetCurrenciesMapping(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Inactive(inactive).Limit(limit).Offset(offset).SystemCode(systemCode).SystemType(systemType).SystemSubType(systemSubType).SystemRateType(systemRateType).LocalSystemCodes(localSystemCodes).IncludeInactive(includeInactive).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Gets channel currency code mapping



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/chl"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    inactive := true // bool | Indicates whether searching for active or inactive codes. (optional)
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    offset := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional) (default to 0)
    systemCode := "systemCode_example" // string | External system code to be searched. This is also known as Booking Channel Code for CHANNEL external system type. (optional)
    systemType := "systemType_example" // string | External system type to be searched. Possible values are CHANNEL, OXI, etc. (optional)
    systemSubType := "systemSubType_example" // string | External system sub type to be searched. Possible values are GDS, WEB, etc. (optional)
    systemRateType := "systemRateType_example" // string | External system rate type to be searched. Possible values are DAILY, MAX_WEEKLY, etc. (optional)
    localSystemCodes := []string{"Inner_example"} // []string |  (optional)
    includeInactive := true // bool | Indicates whether to include inactive guarantees or not. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelAPI.GetCurrenciesMapping(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Inactive(inactive).Limit(limit).Offset(offset).SystemCode(systemCode).SystemType(systemType).SystemSubType(systemSubType).SystemRateType(systemRateType).LocalSystemCodes(localSystemCodes).IncludeInactive(includeInactive).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelAPI.GetCurrenciesMapping``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetCurrenciesMapping`: CurrenciesMapping
    fmt.Fprintf(os.Stdout, "Response from `ChannelAPI.GetCurrenciesMapping`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetCurrenciesMappingRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **inactive** | **bool** | Indicates whether searching for active or inactive codes. | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **offset** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [default to 0]
 **systemCode** | **string** | External system code to be searched. This is also known as Booking Channel Code for CHANNEL external system type. | 
 **systemType** | **string** | External system type to be searched. Possible values are CHANNEL, OXI, etc. | 
 **systemSubType** | **string** | External system sub type to be searched. Possible values are GDS, WEB, etc. | 
 **systemRateType** | **string** | External system rate type to be searched. Possible values are DAILY, MAX_WEEKLY, etc. | 
 **localSystemCodes** | **[]string** |  | 
 **includeInactive** | **bool** | Indicates whether to include inactive guarantees or not. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**CurrenciesMapping**](CurrenciesMapping.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetDistributionTemplates

> DistributionTemplates GetDistributionTemplates(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).IsChain(isChain).HotelIds(hotelIds).Codes(codes).Types(types).IncludeInactive(includeInactive).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Retrieves distribution templates



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/chl"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    isChain := true // bool | Filter chain level distribution templates by chain. (optional) (default to false)
    hotelIds := []string{"Inner_example"} // []string |  (optional)
    codes := []string{"Inner_example"} // []string |  (optional)
    types := []string{"Inner_example"} // []string |  (optional)
    includeInactive := true // bool | Indicates whether search includes inactive distribution templates. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelAPI.GetDistributionTemplates(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).IsChain(isChain).HotelIds(hotelIds).Codes(codes).Types(types).IncludeInactive(includeInactive).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelAPI.GetDistributionTemplates``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetDistributionTemplates`: DistributionTemplates
    fmt.Fprintf(os.Stdout, "Response from `ChannelAPI.GetDistributionTemplates`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetDistributionTemplatesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **isChain** | **bool** | Filter chain level distribution templates by chain. | [default to false]
 **hotelIds** | **[]string** |  | 
 **codes** | **[]string** |  | 
 **types** | **[]string** |  | 
 **includeInactive** | **bool** | Indicates whether search includes inactive distribution templates. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**DistributionTemplates**](DistributionTemplates.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetGuaranteesMapping

> GuaranteesMapping GetGuaranteesMapping(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Inactive(inactive).Limit(limit).Offset(offset).SystemCode(systemCode).SystemType(systemType).SystemSubType(systemSubType).SystemRateType(systemRateType).LocalSystemCodes(localSystemCodes).IncludeInactive(includeInactive).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Gets channel guarantee code mapping for a hotel



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/chl"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    inactive := true // bool | Indicates whether searching for active or inactive codes. (optional)
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    offset := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional) (default to 0)
    systemCode := "systemCode_example" // string | External system code to be searched. This is also known as Booking Channel Code for CHANNEL external system type. (optional)
    systemType := "systemType_example" // string | External system type to be searched. Possible values are CHANNEL, OXI, etc. (optional)
    systemSubType := "systemSubType_example" // string | External system sub type to be searched. Possible values are GDS, WEB, etc. (optional)
    systemRateType := "systemRateType_example" // string | External system rate type to be searched. Possible values are DAILY, MAX_WEEKLY, etc. (optional)
    localSystemCodes := []string{"Inner_example"} // []string |  (optional)
    includeInactive := true // bool | Indicates whether to include inactive guarantees or not. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelAPI.GetGuaranteesMapping(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Inactive(inactive).Limit(limit).Offset(offset).SystemCode(systemCode).SystemType(systemType).SystemSubType(systemSubType).SystemRateType(systemRateType).LocalSystemCodes(localSystemCodes).IncludeInactive(includeInactive).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelAPI.GetGuaranteesMapping``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetGuaranteesMapping`: GuaranteesMapping
    fmt.Fprintf(os.Stdout, "Response from `ChannelAPI.GetGuaranteesMapping`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetGuaranteesMappingRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **inactive** | **bool** | Indicates whether searching for active or inactive codes. | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **offset** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [default to 0]
 **systemCode** | **string** | External system code to be searched. This is also known as Booking Channel Code for CHANNEL external system type. | 
 **systemType** | **string** | External system type to be searched. Possible values are CHANNEL, OXI, etc. | 
 **systemSubType** | **string** | External system sub type to be searched. Possible values are GDS, WEB, etc. | 
 **systemRateType** | **string** | External system rate type to be searched. Possible values are DAILY, MAX_WEEKLY, etc. | 
 **localSystemCodes** | **[]string** |  | 
 **includeInactive** | **bool** | Indicates whether to include inactive guarantees or not. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**GuaranteesMapping**](GuaranteesMapping.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetHotelsMapping

> PropertiesMapping GetHotelsMapping(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Inactive(inactive).Limit(limit).Offset(offset).SystemCode(systemCode).SystemType(systemType).SystemSubType(systemSubType).SystemRateType(systemRateType).LocalSystemCodes(localSystemCodes).IncludeInactive(includeInactive).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Gets channel hotel mapping



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/chl"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    inactive := true // bool | Indicates whether searching for active or inactive codes. (optional)
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    offset := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional) (default to 0)
    systemCode := "systemCode_example" // string | External system code to be searched. This is also known as Booking Channel Code for CHANNEL external system type. (optional)
    systemType := "systemType_example" // string | External system type to be searched. Possible values are CHANNEL, OXI, etc. (optional)
    systemSubType := "systemSubType_example" // string | External system sub type to be searched. Possible values are GDS, WEB, etc. (optional)
    systemRateType := "systemRateType_example" // string | External system rate type to be searched. Possible values are DAILY, MAX_WEEKLY, etc. (optional)
    localSystemCodes := []string{"Inner_example"} // []string |  (optional)
    includeInactive := true // bool | Indicates whether to include inactive guarantees or not. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelAPI.GetHotelsMapping(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Inactive(inactive).Limit(limit).Offset(offset).SystemCode(systemCode).SystemType(systemType).SystemSubType(systemSubType).SystemRateType(systemRateType).LocalSystemCodes(localSystemCodes).IncludeInactive(includeInactive).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelAPI.GetHotelsMapping``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetHotelsMapping`: PropertiesMapping
    fmt.Fprintf(os.Stdout, "Response from `ChannelAPI.GetHotelsMapping`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetHotelsMappingRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **inactive** | **bool** | Indicates whether searching for active or inactive codes. | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **offset** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [default to 0]
 **systemCode** | **string** | External system code to be searched. This is also known as Booking Channel Code for CHANNEL external system type. | 
 **systemType** | **string** | External system type to be searched. Possible values are CHANNEL, OXI, etc. | 
 **systemSubType** | **string** | External system sub type to be searched. Possible values are GDS, WEB, etc. | 
 **systemRateType** | **string** | External system rate type to be searched. Possible values are DAILY, MAX_WEEKLY, etc. | 
 **localSystemCodes** | **[]string** |  | 
 **includeInactive** | **bool** | Indicates whether to include inactive guarantees or not. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**PropertiesMapping**](PropertiesMapping.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetStatementDetailsStatistics

> StatementDetailsStatistics GetStatementDetailsStatistics(ctx, statementId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ContractId(contractId).ContractIdType(contractIdType).FetchInstructions(fetchInstructions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Retrieves billing statement details statistics.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/chl"
)

func main() {
    statementId := "statementId_example" // string | Statement Id.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    contractId := "contractId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    contractIdType := "contractIdType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    fetchInstructions := []string{"FetchInstructions_example"} // []string | Type for statement details statistics instructions that can be used in requests for partial operations. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelAPI.GetStatementDetailsStatistics(context.Background(), statementId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ContractId(contractId).ContractIdType(contractIdType).FetchInstructions(fetchInstructions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelAPI.GetStatementDetailsStatistics``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetStatementDetailsStatistics`: StatementDetailsStatistics
    fmt.Fprintf(os.Stdout, "Response from `ChannelAPI.GetStatementDetailsStatistics`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**statementId** | **string** | Statement Id. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetStatementDetailsStatisticsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **contractId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **contractIdType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **fetchInstructions** | **[]string** | Type for statement details statistics instructions that can be used in requests for partial operations. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**StatementDetailsStatistics**](StatementDetailsStatistics.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetTotalPricingElements

> TotalPricingElements GetTotalPricingElements(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelIds(hotelIds).Limit(limit).Offset(offset).ElementCodes(elementCodes).TransactionCodes(transactionCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Gets total pricing tax and fee types



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/chl"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID that identifies a single hotel property.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    hotelIds := []string{"Inner_example"} // []string | Hotel code. (optional)
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    offset := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional) (default to 0)
    elementCodes := []string{"Inner_example"} // []string |  (optional)
    transactionCodes := []string{"Inner_example"} // []string |  (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelAPI.GetTotalPricingElements(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelIds(hotelIds).Limit(limit).Offset(offset).ElementCodes(elementCodes).TransactionCodes(transactionCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelAPI.GetTotalPricingElements``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetTotalPricingElements`: TotalPricingElements
    fmt.Fprintf(os.Stdout, "Response from `ChannelAPI.GetTotalPricingElements`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetTotalPricingElementsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **hotelIds** | **[]string** | Hotel code. | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **offset** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [default to 0]
 **elementCodes** | **[]string** |  | 
 **transactionCodes** | **[]string** |  | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**TotalPricingElements**](TotalPricingElements.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ManageChannelRoomMapping

> Status ManageChannelRoomMapping(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChannelRoomMappings(channelRoomMappings).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Updates channel room configuration



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/chl"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    channelRoomMappings := *openapiclient.NewChannelRoomMappings() // ChannelRoomMappings | Request object to create, edit or delete channel room type mapping.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelAPI.ManageChannelRoomMapping(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChannelRoomMappings(channelRoomMappings).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelAPI.ManageChannelRoomMapping``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ManageChannelRoomMapping`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChannelAPI.ManageChannelRoomMapping`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiManageChannelRoomMappingRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **channelRoomMappings** | [**ChannelRoomMappings**](ChannelRoomMappings.md) | Request object to create, edit or delete channel room type mapping. | 
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


## PostAmenitiesMapping

> Status PostAmenitiesMapping(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Amenities(amenities).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Adds channel amenities configuration



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/chl"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    amenities := *openapiclient.NewAmenities() // Amenities | Request object for creating new external system amenities.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelAPI.PostAmenitiesMapping(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Amenities(amenities).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelAPI.PostAmenitiesMapping``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostAmenitiesMapping`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChannelAPI.PostAmenitiesMapping`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostAmenitiesMappingRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **amenities** | [**Amenities**](Amenities.md) | Request object for creating new external system amenities. | 
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


## PostChannelAccountContracts

> Status PostChannelAccountContracts(ctx, accountProfileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChannelAccountContracts(channelAccountContracts).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Adds channel account contracts for given profile Id.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/chl"
)

func main() {
    accountProfileId := "accountProfileId_example" // string | Unique ID that identifies an account profile.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    channelAccountContracts := *openapiclient.NewChannelAccountContracts() // ChannelAccountContracts | Request object to create the channel account contracts.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelAPI.PostChannelAccountContracts(context.Background(), accountProfileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChannelAccountContracts(channelAccountContracts).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelAPI.PostChannelAccountContracts``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostChannelAccountContracts`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChannelAPI.PostChannelAccountContracts`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**accountProfileId** | **string** | Unique ID that identifies an account profile. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostChannelAccountContractsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **channelAccountContracts** | [**ChannelAccountContracts**](ChannelAccountContracts.md) | Request object to create the channel account contracts. | 
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


## PostChannelAccounts

> Status PostChannelAccounts(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChannelAccounts(channelAccounts).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Adds channel accounts.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/chl"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    channelAccounts := *openapiclient.NewChannelAccounts() // ChannelAccounts | Request object to create the channel accounts.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelAPI.PostChannelAccounts(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChannelAccounts(channelAccounts).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelAPI.PostChannelAccounts``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostChannelAccounts`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChannelAPI.PostChannelAccounts`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostChannelAccountsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **channelAccounts** | [**ChannelAccounts**](ChannelAccounts.md) | Request object to create the channel accounts. | 
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


## PostChannelBillingStatements

> Status PostChannelBillingStatements(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChannelBillingStatements(channelBillingStatements).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Adds channel billing statements.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/chl"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    channelBillingStatements := *openapiclient.NewChannelBillingStatements() // ChannelBillingStatements | Request object to create channel billing statements.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelAPI.PostChannelBillingStatements(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChannelBillingStatements(channelBillingStatements).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelAPI.PostChannelBillingStatements``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostChannelBillingStatements`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChannelAPI.PostChannelBillingStatements`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostChannelBillingStatementsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **channelBillingStatements** | [**ChannelBillingStatements**](ChannelBillingStatements.md) | Request object to create channel billing statements. | 
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


## PostChannelCardTypeMapping

> Status PostChannelCardTypeMapping(ctx, cardTypeCode, channelCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChannelCardTypeMappings(channelCardTypeMappings).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Adds channel credit card mapping for a hotel



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/chl"
)

func main() {
    cardTypeCode := "cardTypeCode_example" // string | Unique ID that identifies a channel.
    channelCode := "channelCode_example" // string | Unique ID that identifies a channel.
    hotelId := "hotelId_example" // string | Unique ID that identifies a single hotel property.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    channelCardTypeMappings := *openapiclient.NewChannelCardTypeMappings() // ChannelCardTypeMappings | Request object for creating a new channel-hotel card type mapping.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelAPI.PostChannelCardTypeMapping(context.Background(), cardTypeCode, channelCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChannelCardTypeMappings(channelCardTypeMappings).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelAPI.PostChannelCardTypeMapping``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostChannelCardTypeMapping`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChannelAPI.PostChannelCardTypeMapping`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**cardTypeCode** | **string** | Unique ID that identifies a channel. | 
**channelCode** | **string** | Unique ID that identifies a channel. | 
**hotelId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostChannelCardTypeMappingRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **channelCardTypeMappings** | [**ChannelCardTypeMappings**](ChannelCardTypeMappings.md) | Request object for creating a new channel-hotel card type mapping. | 
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


## PostChannelCarriers

> Status PostChannelCarriers(ctx, channelCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChannelCarriers(channelCarriers).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Adds sub channel configuration



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/chl"
)

func main() {
    channelCode := "channelCode_example" // string | Unique ID that identifies a channel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    channelCarriers := *openapiclient.NewChannelCarriers() // ChannelCarriers | Request object for creating channel carriers.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelAPI.PostChannelCarriers(context.Background(), channelCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChannelCarriers(channelCarriers).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelAPI.PostChannelCarriers``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostChannelCarriers`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChannelAPI.PostChannelCarriers`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**channelCode** | **string** | Unique ID that identifies a channel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostChannelCarriersRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **channelCarriers** | [**ChannelCarriers**](ChannelCarriers.md) | Request object for creating channel carriers. | 
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


## PostChannelErrors

> Status PostChannelErrors(ctx, channelCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChannelErrors(channelErrors).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Adds channel error codes



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/chl"
)

func main() {
    channelCode := "channelCode_example" // string | Unique ID that identifies a channel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    channelErrors := *openapiclient.NewChannelErrors() // ChannelErrors | Request object for creating channel errors.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelAPI.PostChannelErrors(context.Background(), channelCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChannelErrors(channelErrors).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelAPI.PostChannelErrors``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostChannelErrors`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChannelAPI.PostChannelErrors`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**channelCode** | **string** | Unique ID that identifies a channel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostChannelErrorsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **channelErrors** | [**ChannelErrors**](ChannelErrors.md) | Request object for creating channel errors. | 
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


## PostChannelGuaranteeCodeMapping

> Status PostChannelGuaranteeCodeMapping(ctx, guaranteeCode, channelCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChannelGuaranteeCodeMappings(channelGuaranteeCodeMappings).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Adds channel guarantee code mapping for a hotel



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/chl"
)

func main() {
    guaranteeCode := "guaranteeCode_example" // string | Guarantee Code.
    channelCode := "channelCode_example" // string | Unique ID that identifies a channel.
    hotelId := "hotelId_example" // string | Unique ID that identifies a single hotel property.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    channelGuaranteeCodeMappings := *openapiclient.NewChannelGuaranteeCodeMappings() // ChannelGuaranteeCodeMappings | Request object for creating a new channel-hotel guarantee code mapping.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelAPI.PostChannelGuaranteeCodeMapping(context.Background(), guaranteeCode, channelCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChannelGuaranteeCodeMappings(channelGuaranteeCodeMappings).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelAPI.PostChannelGuaranteeCodeMapping``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostChannelGuaranteeCodeMapping`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChannelAPI.PostChannelGuaranteeCodeMapping`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**guaranteeCode** | **string** | Guarantee Code. | 
**channelCode** | **string** | Unique ID that identifies a channel. | 
**hotelId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostChannelGuaranteeCodeMappingRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **channelGuaranteeCodeMappings** | [**ChannelGuaranteeCodeMappings**](ChannelGuaranteeCodeMappings.md) | Request object for creating a new channel-hotel guarantee code mapping. | 
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


## PostChannelHotelLetters

> Status PostChannelHotelLetters(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChannelHotelLettersToBeCreated(channelHotelLettersToBeCreated).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Adds channel property confirmation letter mapping



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/chl"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    channelHotelLettersToBeCreated := *openapiclient.NewChannelHotelLettersToBeCreated() // ChannelHotelLettersToBeCreated | Request object to create new Hotel Letters associated with the Channels
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelAPI.PostChannelHotelLetters(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChannelHotelLettersToBeCreated(channelHotelLettersToBeCreated).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelAPI.PostChannelHotelLetters``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostChannelHotelLetters`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChannelAPI.PostChannelHotelLetters`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostChannelHotelLettersRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **channelHotelLettersToBeCreated** | [**ChannelHotelLettersToBeCreated**](ChannelHotelLettersToBeCreated.md) | Request object to create new Hotel Letters associated with the Channels | 
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


## PostChannelMarketingText

> Status PostChannelMarketingText(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChannelMarketingText(channelMarketingText).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Adds channel marketing messages



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/chl"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    channelMarketingText := *openapiclient.NewChannelMarketingText() // ChannelMarketingText | Request object for creating channel marketing texts.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelAPI.PostChannelMarketingText(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChannelMarketingText(channelMarketingText).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelAPI.PostChannelMarketingText``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostChannelMarketingText`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChannelAPI.PostChannelMarketingText`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostChannelMarketingTextRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **channelMarketingText** | [**ChannelMarketingText**](ChannelMarketingText.md) | Request object for creating channel marketing texts. | 
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


## PostChannelNegotiatedRate

> Status PostChannelNegotiatedRate(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChannelNegotiatedRates(channelNegotiatedRates).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Adds channel negotiate rate



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/chl"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    channelNegotiatedRates := *openapiclient.NewChannelNegotiatedRates() // ChannelNegotiatedRates | Request object for creating Negotiated channel rates.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelAPI.PostChannelNegotiatedRate(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChannelNegotiatedRates(channelNegotiatedRates).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelAPI.PostChannelNegotiatedRate``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostChannelNegotiatedRate`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChannelAPI.PostChannelNegotiatedRate`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostChannelNegotiatedRateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **channelNegotiatedRates** | [**ChannelNegotiatedRates**](ChannelNegotiatedRates.md) | Request object for creating Negotiated channel rates. | 
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


## PostChannelOrgMapping

> Status PostChannelOrgMapping(ctx, channelCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChannelOrgMapping(channelOrgMapping).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Adds channel tenants.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/chl"
)

func main() {
    channelCode := "channelCode_example" // string | Unique ID that identifies a channel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    channelOrgMapping := *openapiclient.NewChannelOrgMapping() // ChannelOrgMapping | Request object for Create Channel to ORG and CRO Mapping.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelAPI.PostChannelOrgMapping(context.Background(), channelCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChannelOrgMapping(channelOrgMapping).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelAPI.PostChannelOrgMapping``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostChannelOrgMapping`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChannelAPI.PostChannelOrgMapping`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**channelCode** | **string** | Unique ID that identifies a channel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostChannelOrgMappingRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **channelOrgMapping** | [**ChannelOrgMapping**](ChannelOrgMapping.md) | Request object for Create Channel to ORG and CRO Mapping. | 
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


## PostChannelRateCategories

> Status PostChannelRateCategories(ctx, channelCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChannelRateCategories(channelRateCategories).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Adds given channel's rate categories



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/chl"
)

func main() {
    channelCode := "channelCode_example" // string | Unique ID that identifies a channel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    channelRateCategories := *openapiclient.NewChannelRateCategories() // ChannelRateCategories | Request object for creating channel rate categories.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelAPI.PostChannelRateCategories(context.Background(), channelCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChannelRateCategories(channelRateCategories).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelAPI.PostChannelRateCategories``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostChannelRateCategories`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChannelAPI.PostChannelRateCategories`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**channelCode** | **string** | Unique ID that identifies a channel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostChannelRateCategoriesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **channelRateCategories** | [**ChannelRateCategories**](ChannelRateCategories.md) | Request object for creating channel rate categories. | 
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


## PostChannelRateLevels

> Status PostChannelRateLevels(ctx, channelCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChannelRateLevels(channelRateLevels).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Adds channel rate level



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/chl"
)

func main() {
    channelCode := "channelCode_example" // string | Unique ID that identifies a channel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    channelRateLevels := *openapiclient.NewChannelRateLevels() // ChannelRateLevels | Request object for creating channel rate levels.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelAPI.PostChannelRateLevels(context.Background(), channelCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChannelRateLevels(channelRateLevels).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelAPI.PostChannelRateLevels``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostChannelRateLevels`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChannelAPI.PostChannelRateLevels`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**channelCode** | **string** | Unique ID that identifies a channel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostChannelRateLevelsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **channelRateLevels** | [**ChannelRateLevels**](ChannelRateLevels.md) | Request object for creating channel rate levels. | 
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


## PostChannelRateMapping

> Status PostChannelRateMapping(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChannelRateMapping(channelRateMapping).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Adds channel property rate mapping



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/chl"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    channelRateMapping := *openapiclient.NewChannelRateMapping() // ChannelRateMapping | Request object for creating channel rate mappings.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelAPI.PostChannelRateMapping(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChannelRateMapping(channelRateMapping).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelAPI.PostChannelRateMapping``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostChannelRateMapping`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChannelAPI.PostChannelRateMapping`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostChannelRateMappingRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **channelRateMapping** | [**ChannelRateMapping**](ChannelRateMapping.md) | Request object for creating channel rate mappings. | 
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


## PostChannelRates

> Status PostChannelRates(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChannelRates(channelRates).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Distributes channel rate mappings to channel room types



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/chl"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID that identifies a single hotel property.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    channelRates := *openapiclient.NewChannelRates() // ChannelRates | Request object for distributing channel rates.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelAPI.PostChannelRates(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChannelRates(channelRates).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelAPI.PostChannelRates``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostChannelRates`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChannelAPI.PostChannelRates`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostChannelRatesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **channelRates** | [**ChannelRates**](ChannelRates.md) | Request object for distributing channel rates. | 
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


## PostChannelRatesGlobalDescriptions

> Status PostChannelRatesGlobalDescriptions(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChannelGlobalDescriptions(channelGlobalDescriptions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Adds global room descriptions



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/chl"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    channelGlobalDescriptions := *openapiclient.NewChannelGlobalDescriptions() // ChannelGlobalDescriptions | Request object to create new Global Descriptions of the GDS Channels
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelAPI.PostChannelRatesGlobalDescriptions(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChannelGlobalDescriptions(channelGlobalDescriptions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelAPI.PostChannelRatesGlobalDescriptions``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostChannelRatesGlobalDescriptions`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChannelAPI.PostChannelRatesGlobalDescriptions`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostChannelRatesGlobalDescriptionsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **channelGlobalDescriptions** | [**ChannelGlobalDescriptions**](ChannelGlobalDescriptions.md) | Request object to create new Global Descriptions of the GDS Channels | 
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


## PostChannelRoomMapping

> Status PostChannelRoomMapping(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChannelRoomMappings(channelRoomMappings).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Adds channel property room mapping



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/chl"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    channelRoomMappings := *openapiclient.NewChannelRoomMappings() // ChannelRoomMappings | Request object for Channel Room Mapping creation.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelAPI.PostChannelRoomMapping(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChannelRoomMappings(channelRoomMappings).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelAPI.PostChannelRoomMapping``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostChannelRoomMapping`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChannelAPI.PostChannelRoomMapping`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostChannelRoomMappingRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **channelRoomMappings** | [**ChannelRoomMappings**](ChannelRoomMappings.md) | Request object for Channel Room Mapping creation. | 
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


## PostChannelRoomTypeRate

> Status PostChannelRoomTypeRate(ctx, channelRoomType, channelCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChannelRates(channelRates).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Distributes channel room rate mappings.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/chl"
)

func main() {
    channelRoomType := "channelRoomType_example" // string | Channel Room Type.
    channelCode := "channelCode_example" // string | Unique ID that identifies a channel.
    hotelId := "hotelId_example" // string | Unique ID that identifies a single hotel property.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    channelRates := *openapiclient.NewChannelRates() // ChannelRates | Request object for distributing channel rates.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelAPI.PostChannelRoomTypeRate(context.Background(), channelRoomType, channelCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChannelRates(channelRates).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelAPI.PostChannelRoomTypeRate``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostChannelRoomTypeRate`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChannelAPI.PostChannelRoomTypeRate`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**channelRoomType** | **string** | Channel Room Type. | 
**channelCode** | **string** | Unique ID that identifies a channel. | 
**hotelId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostChannelRoomTypeRateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **channelRates** | [**ChannelRates**](ChannelRates.md) | Request object for distributing channel rates. | 
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


## PostChannelRoomTypes

> Status PostChannelRoomTypes(ctx, channelCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChannelRoomTypes(channelRoomTypes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Adds channel room



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/chl"
)

func main() {
    channelCode := "channelCode_example" // string | Unique ID that identifies a channel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    channelRoomTypes := *openapiclient.NewChannelRoomTypes() // ChannelRoomTypes | Request object for creating channel room types.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelAPI.PostChannelRoomTypes(context.Background(), channelCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChannelRoomTypes(channelRoomTypes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelAPI.PostChannelRoomTypes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostChannelRoomTypes`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChannelAPI.PostChannelRoomTypes`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**channelCode** | **string** | Unique ID that identifies a channel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostChannelRoomTypesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **channelRoomTypes** | [**ChannelRoomTypes**](ChannelRoomTypes.md) | Request object for creating channel room types. | 
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


## PostChannelRoomsGlobalDescriptions

> Status PostChannelRoomsGlobalDescriptions(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChannelGlobalDescriptions(channelGlobalDescriptions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Adds global rate descriptions



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/chl"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    channelGlobalDescriptions := *openapiclient.NewChannelGlobalDescriptions() // ChannelGlobalDescriptions | Request object to create new Global Descriptions of the GDS Channels
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelAPI.PostChannelRoomsGlobalDescriptions(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChannelGlobalDescriptions(channelGlobalDescriptions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelAPI.PostChannelRoomsGlobalDescriptions``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostChannelRoomsGlobalDescriptions`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChannelAPI.PostChannelRoomsGlobalDescriptions`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostChannelRoomsGlobalDescriptionsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **channelGlobalDescriptions** | [**ChannelGlobalDescriptions**](ChannelGlobalDescriptions.md) | Request object to create new Global Descriptions of the GDS Channels | 
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


## PostChannels

> Status PostChannels(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Channels(channels).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Adds new channel



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/chl"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    channels := *openapiclient.NewChannels() // Channels | Request object for creating channels.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelAPI.PostChannels(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Channels(channels).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelAPI.PostChannels``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostChannels`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChannelAPI.PostChannels`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostChannelsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **channels** | [**Channels**](Channels.md) | Request object for creating channels. | 
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


## PostCreditCardsMapping

> Status PostCreditCardsMapping(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CreditCards(creditCards).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Adds channel credit card mapping



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/chl"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    creditCards := *openapiclient.NewCreditCards() // CreditCards | Request object for creating external system credit cards.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelAPI.PostCreditCardsMapping(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CreditCards(creditCards).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelAPI.PostCreditCardsMapping``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostCreditCardsMapping`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChannelAPI.PostCreditCardsMapping`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostCreditCardsMappingRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **creditCards** | [**CreditCards**](CreditCards.md) | Request object for creating external system credit cards. | 
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


## PostCurrenciesMapping

> Status PostCurrenciesMapping(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Currencies(currencies).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Adds channel currency code mapping



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/chl"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    currencies := *openapiclient.NewCurrencies() // Currencies | Request object for creating external system currencies.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelAPI.PostCurrenciesMapping(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Currencies(currencies).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelAPI.PostCurrenciesMapping``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostCurrenciesMapping`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChannelAPI.PostCurrenciesMapping`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostCurrenciesMappingRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **currencies** | [**Currencies**](Currencies.md) | Request object for creating external system currencies. | 
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


## PostDistributionTemplates

> Status PostDistributionTemplates(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).DistributionTemplates(distributionTemplates).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Adds rate templates configurations



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/chl"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    distributionTemplates := *openapiclient.NewDistributionTemplates() // DistributionTemplates | Request object for creating chain or property level distribution templates.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelAPI.PostDistributionTemplates(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).DistributionTemplates(distributionTemplates).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelAPI.PostDistributionTemplates``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostDistributionTemplates`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChannelAPI.PostDistributionTemplates`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostDistributionTemplatesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **distributionTemplates** | [**DistributionTemplates**](DistributionTemplates.md) | Request object for creating chain or property level distribution templates. | 
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


## PostGuaranteesMapping

> Status PostGuaranteesMapping(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Guarantees(guarantees).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Adds channel guarantee code mapping



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/chl"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    guarantees := *openapiclient.NewGuarantees() // Guarantees | Request object for creating new external system guarantees.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelAPI.PostGuaranteesMapping(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Guarantees(guarantees).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelAPI.PostGuaranteesMapping``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostGuaranteesMapping`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChannelAPI.PostGuaranteesMapping`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostGuaranteesMappingRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **guarantees** | [**Guarantees**](Guarantees.md) | Request object for creating new external system guarantees. | 
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


## PostHotelsMapping

> Status PostHotelsMapping(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Properties(properties).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Adds channel hotel mapping



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/chl"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    properties := *openapiclient.NewProperties() // Properties | Request object for creating external system properties.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelAPI.PostHotelsMapping(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Properties(properties).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelAPI.PostHotelsMapping``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostHotelsMapping`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChannelAPI.PostHotelsMapping`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostHotelsMappingRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **properties** | [**Properties**](Properties.md) | Request object for creating external system properties. | 
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


## PostTotalPricingElements

> Status PostTotalPricingElements(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TotalPricingElements(totalPricingElements).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Adds total pricing tax and fee types



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/chl"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    totalPricingElements := *openapiclient.NewTotalPricingElements() // TotalPricingElements | Request object to create the total pricing elements of GDS channel.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelAPI.PostTotalPricingElements(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TotalPricingElements(totalPricingElements).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelAPI.PostTotalPricingElements``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostTotalPricingElements`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChannelAPI.PostTotalPricingElements`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostTotalPricingElementsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **totalPricingElements** | [**TotalPricingElements**](TotalPricingElements.md) | Request object to create the total pricing elements of GDS channel. | 
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


## PublishChannelAvailability

> Status PublishChannelAvailability(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChannelAvailability(channelAvailability).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Publishes channel availability.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/chl"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    channelAvailability := *openapiclient.NewChannelAvailability() // ChannelAvailability | Request object for publishing rate availability to channels.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelAPI.PublishChannelAvailability(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChannelAvailability(channelAvailability).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelAPI.PublishChannelAvailability``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PublishChannelAvailability`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChannelAPI.PublishChannelAvailability`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPublishChannelAvailabilityRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **channelAvailability** | [**ChannelAvailability**](ChannelAvailability.md) | Request object for publishing rate availability to channels. | 
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


## PublishChannelRatePlans

> Status PublishChannelRatePlans(ctx, channelCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChannelRatePlans(channelRatePlans).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Publishes channel rate plan codes



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/chl"
)

func main() {
    channelCode := "channelCode_example" // string | Unique ID that identifies a channel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    channelRatePlans := *openapiclient.NewChannelRatePlans() // ChannelRatePlans | Request object for publishing rate codes to GDS.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelAPI.PublishChannelRatePlans(context.Background(), channelCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChannelRatePlans(channelRatePlans).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelAPI.PublishChannelRatePlans``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PublishChannelRatePlans`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChannelAPI.PublishChannelRatePlans`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**channelCode** | **string** | Unique ID that identifies a channel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPublishChannelRatePlansRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **channelRatePlans** | [**ChannelRatePlans**](ChannelRatePlans.md) | Request object for publishing rate codes to GDS. | 
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


## PublishChannelRestrictions

> Status PublishChannelRestrictions(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChannelRestrictions(channelRestrictions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Publishes channel restrictions



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/chl"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    channelRestrictions := *openapiclient.NewChannelRestrictions() // ChannelRestrictions | Request object for publishing rate restrictions to channels.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelAPI.PublishChannelRestrictions(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChannelRestrictions(channelRestrictions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelAPI.PublishChannelRestrictions``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PublishChannelRestrictions`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChannelAPI.PublishChannelRestrictions`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPublishChannelRestrictionsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **channelRestrictions** | [**ChannelRestrictions**](ChannelRestrictions.md) | Request object for publishing rate restrictions to channels. | 
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


## PublishHotelChannelRatePlans

> Status PublishHotelChannelRatePlans(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChannelRatePlans(channelRatePlans).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Publishes channel hotel rate plan codes



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/chl"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID that identifies a single hotel property.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    channelRatePlans := *openapiclient.NewChannelRatePlans() // ChannelRatePlans | Request object for publishing rate codes to GDS.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelAPI.PublishHotelChannelRatePlans(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChannelRatePlans(channelRatePlans).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelAPI.PublishHotelChannelRatePlans``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PublishHotelChannelRatePlans`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChannelAPI.PublishHotelChannelRatePlans`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPublishHotelChannelRatePlansRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **channelRatePlans** | [**ChannelRatePlans**](ChannelRatePlans.md) | Request object for publishing rate codes to GDS. | 
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


## PutAmenitiesMapping

> Status PutAmenitiesMapping(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Amenities(amenities).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Updates channel amenities configuration



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/chl"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    amenities := *openapiclient.NewAmenities() // Amenities | Request object for changing external system amenities.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelAPI.PutAmenitiesMapping(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Amenities(amenities).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelAPI.PutAmenitiesMapping``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutAmenitiesMapping`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChannelAPI.PutAmenitiesMapping`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPutAmenitiesMappingRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **amenities** | [**Amenities**](Amenities.md) | Request object for changing external system amenities. | 
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


## PutChannelAccountContracts

> Status PutChannelAccountContracts(ctx, accountProfileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChannelAccountContracts(channelAccountContracts).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Updates channel account contracts for given profile Id.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/chl"
)

func main() {
    accountProfileId := "accountProfileId_example" // string | Unique ID that identifies an account profile.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    channelAccountContracts := *openapiclient.NewChannelAccountContracts() // ChannelAccountContracts | Request object to change the channel account contracts.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelAPI.PutChannelAccountContracts(context.Background(), accountProfileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChannelAccountContracts(channelAccountContracts).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelAPI.PutChannelAccountContracts``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutChannelAccountContracts`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChannelAPI.PutChannelAccountContracts`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**accountProfileId** | **string** | Unique ID that identifies an account profile. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutChannelAccountContractsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **channelAccountContracts** | [**ChannelAccountContracts**](ChannelAccountContracts.md) | Request object to change the channel account contracts. | 
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


## PutChannelAccounts

> Status PutChannelAccounts(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChannelAccountsToChange(channelAccountsToChange).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Updates channel accounts



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/chl"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    channelAccountsToChange := []openapiclient.ChannelAccountType{*openapiclient.NewChannelAccountType()} // []ChannelAccountType | Channel account information to create a new channel account.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelAPI.PutChannelAccounts(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChannelAccountsToChange(channelAccountsToChange).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelAPI.PutChannelAccounts``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutChannelAccounts`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChannelAPI.PutChannelAccounts`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPutChannelAccountsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **channelAccountsToChange** | [**[]ChannelAccountType**](ChannelAccountType.md) | Channel account information to create a new channel account. | 
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


## PutChannelBillingStatements

> Status PutChannelBillingStatements(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChannelBillingStatements(channelBillingStatements).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Updates channel billing statement details



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/chl"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    channelBillingStatements := *openapiclient.NewChannelBillingStatements() // ChannelBillingStatements | Request object to Change channel billing statements.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelAPI.PutChannelBillingStatements(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChannelBillingStatements(channelBillingStatements).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelAPI.PutChannelBillingStatements``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutChannelBillingStatements`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChannelAPI.PutChannelBillingStatements`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPutChannelBillingStatementsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **channelBillingStatements** | [**ChannelBillingStatements**](ChannelBillingStatements.md) | Request object to Change channel billing statements. | 
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


## PutChannelCardTypeMapping

> Status PutChannelCardTypeMapping(ctx, cardTypeCode, channelCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChannelCardTypeMappings(channelCardTypeMappings).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Updates channel credit card mapping for a hotel



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/chl"
)

func main() {
    cardTypeCode := "cardTypeCode_example" // string | Unique ID that identifies a channel.
    channelCode := "channelCode_example" // string | Unique ID that identifies a channel.
    hotelId := "hotelId_example" // string | Unique ID that identifies a single hotel property.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    channelCardTypeMappings := *openapiclient.NewChannelCardTypeMappings() // ChannelCardTypeMappings | Request object for changing information of an existing channel-hotel card type mapping.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelAPI.PutChannelCardTypeMapping(context.Background(), cardTypeCode, channelCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChannelCardTypeMappings(channelCardTypeMappings).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelAPI.PutChannelCardTypeMapping``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutChannelCardTypeMapping`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChannelAPI.PutChannelCardTypeMapping`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**cardTypeCode** | **string** | Unique ID that identifies a channel. | 
**channelCode** | **string** | Unique ID that identifies a channel. | 
**hotelId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutChannelCardTypeMappingRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **channelCardTypeMappings** | [**ChannelCardTypeMappings**](ChannelCardTypeMappings.md) | Request object for changing information of an existing channel-hotel card type mapping. | 
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


## PutChannelCarriers

> Status PutChannelCarriers(ctx, channelCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChannelCarriers(channelCarriers).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Updates sub channel configuration



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/chl"
)

func main() {
    channelCode := "channelCode_example" // string | Unique ID that identifies a channel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    channelCarriers := *openapiclient.NewChannelCarriers() // ChannelCarriers | Request object for changing details of channel carriers.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelAPI.PutChannelCarriers(context.Background(), channelCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChannelCarriers(channelCarriers).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelAPI.PutChannelCarriers``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutChannelCarriers`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChannelAPI.PutChannelCarriers`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**channelCode** | **string** | Unique ID that identifies a channel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutChannelCarriersRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **channelCarriers** | [**ChannelCarriers**](ChannelCarriers.md) | Request object for changing details of channel carriers. | 
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


## PutChannelErrors

> Status PutChannelErrors(ctx, channelCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChannelErrors(channelErrors).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Updates channel error codes



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/chl"
)

func main() {
    channelCode := "channelCode_example" // string | Unique ID that identifies a channel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    channelErrors := *openapiclient.NewChannelErrors() // ChannelErrors | Request object for changing details of channel errors.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelAPI.PutChannelErrors(context.Background(), channelCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChannelErrors(channelErrors).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelAPI.PutChannelErrors``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutChannelErrors`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChannelAPI.PutChannelErrors`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**channelCode** | **string** | Unique ID that identifies a channel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutChannelErrorsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **channelErrors** | [**ChannelErrors**](ChannelErrors.md) | Request object for changing details of channel errors. | 
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


## PutChannelGuaranteeCodeMapping

> Status PutChannelGuaranteeCodeMapping(ctx, guaranteeCode, channelCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChannelGuaranteeCodeMappings(channelGuaranteeCodeMappings).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Updates channel guarantee code mapping for a hotel



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/chl"
)

func main() {
    guaranteeCode := "guaranteeCode_example" // string | Guarantee Code.
    channelCode := "channelCode_example" // string | Unique ID that identifies a channel.
    hotelId := "hotelId_example" // string | Unique ID that identifies a single hotel property.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    channelGuaranteeCodeMappings := *openapiclient.NewChannelGuaranteeCodeMappings() // ChannelGuaranteeCodeMappings | Request object for changing information of an existing channel-hotel guarantee code mapping.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelAPI.PutChannelGuaranteeCodeMapping(context.Background(), guaranteeCode, channelCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChannelGuaranteeCodeMappings(channelGuaranteeCodeMappings).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelAPI.PutChannelGuaranteeCodeMapping``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutChannelGuaranteeCodeMapping`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChannelAPI.PutChannelGuaranteeCodeMapping`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**guaranteeCode** | **string** | Guarantee Code. | 
**channelCode** | **string** | Unique ID that identifies a channel. | 
**hotelId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutChannelGuaranteeCodeMappingRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **channelGuaranteeCodeMappings** | [**ChannelGuaranteeCodeMappings**](ChannelGuaranteeCodeMappings.md) | Request object for changing information of an existing channel-hotel guarantee code mapping. | 
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


## PutChannelHotelLetters

> Status PutChannelHotelLetters(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChannelHotelLettersToBeChanged(channelHotelLettersToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Updates channel property confirmation letter mapping



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/chl"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    channelHotelLettersToBeChanged := *openapiclient.NewChannelHotelLettersToBeChanged() // ChannelHotelLettersToBeChanged | Request object to update existing Hotel Letters associated with the Booking Channels
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelAPI.PutChannelHotelLetters(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChannelHotelLettersToBeChanged(channelHotelLettersToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelAPI.PutChannelHotelLetters``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutChannelHotelLetters`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChannelAPI.PutChannelHotelLetters`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPutChannelHotelLettersRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **channelHotelLettersToBeChanged** | [**ChannelHotelLettersToBeChanged**](ChannelHotelLettersToBeChanged.md) | Request object to update existing Hotel Letters associated with the Booking Channels | 
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


## PutChannelMarketingText

> Status PutChannelMarketingText(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChannelMarketingTextToChange(channelMarketingTextToChange).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Updates channel marketing messages



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/chl"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    channelMarketingTextToChange := *openapiclient.NewChannelMarketingTextToChange() // ChannelMarketingTextToChange | Request object for changing channel marketing texts.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelAPI.PutChannelMarketingText(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChannelMarketingTextToChange(channelMarketingTextToChange).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelAPI.PutChannelMarketingText``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutChannelMarketingText`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChannelAPI.PutChannelMarketingText`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPutChannelMarketingTextRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **channelMarketingTextToChange** | [**ChannelMarketingTextToChange**](ChannelMarketingTextToChange.md) | Request object for changing channel marketing texts. | 
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


## PutChannelNegotiatedRate

> Status PutChannelNegotiatedRate(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChannelNegotiatedRates(channelNegotiatedRates).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Updates channel negotiate rate



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/chl"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    channelNegotiatedRates := *openapiclient.NewChannelNegotiatedRates() // ChannelNegotiatedRates | Request object for changing Negotiated channel rates.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelAPI.PutChannelNegotiatedRate(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChannelNegotiatedRates(channelNegotiatedRates).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelAPI.PutChannelNegotiatedRate``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutChannelNegotiatedRate`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChannelAPI.PutChannelNegotiatedRate`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPutChannelNegotiatedRateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **channelNegotiatedRates** | [**ChannelNegotiatedRates**](ChannelNegotiatedRates.md) | Request object for changing Negotiated channel rates. | 
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


## PutChannelOrgMapping

> Status PutChannelOrgMapping(ctx, tenantCode, channelCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChannelOrgMapping(channelOrgMapping).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Updates channel tenants mapping.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/chl"
)

func main() {
    tenantCode := "tenantCode_example" // string | Tenant Code.
    channelCode := "channelCode_example" // string | Unique ID that identifies a channel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    channelOrgMapping := *openapiclient.NewChannelOrgMapping() // ChannelOrgMapping | Request object for Change Channel to ORG and CRO Mapping.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelAPI.PutChannelOrgMapping(context.Background(), tenantCode, channelCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChannelOrgMapping(channelOrgMapping).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelAPI.PutChannelOrgMapping``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutChannelOrgMapping`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChannelAPI.PutChannelOrgMapping`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**tenantCode** | **string** | Tenant Code. | 
**channelCode** | **string** | Unique ID that identifies a channel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutChannelOrgMappingRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **channelOrgMapping** | [**ChannelOrgMapping**](ChannelOrgMapping.md) | Request object for Change Channel to ORG and CRO Mapping. | 
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


## PutChannelParameters

> Status PutChannelParameters(ctx, channelCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChangeChannelParameters(changeChannelParameters).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Updates channel control settings



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/chl"
)

func main() {
    channelCode := "channelCode_example" // string | Unique ID that identifies a channel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    changeChannelParameters := *openapiclient.NewChangeChannelParameters() // ChangeChannelParameters | Request object for modifying channel parameter(s).
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelAPI.PutChannelParameters(context.Background(), channelCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChangeChannelParameters(changeChannelParameters).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelAPI.PutChannelParameters``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutChannelParameters`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChannelAPI.PutChannelParameters`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**channelCode** | **string** | Unique ID that identifies a channel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutChannelParametersRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **changeChannelParameters** | [**ChangeChannelParameters**](ChangeChannelParameters.md) | Request object for modifying channel parameter(s). | 
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


## PutChannelRateCategories

> Status PutChannelRateCategories(ctx, channelCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChannelRateCategories(channelRateCategories).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Updates given channel's rate categories



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/chl"
)

func main() {
    channelCode := "channelCode_example" // string | Unique ID that identifies a channel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    channelRateCategories := *openapiclient.NewChannelRateCategories() // ChannelRateCategories | Request object for changing details of channel rate categories.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelAPI.PutChannelRateCategories(context.Background(), channelCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChannelRateCategories(channelRateCategories).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelAPI.PutChannelRateCategories``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutChannelRateCategories`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChannelAPI.PutChannelRateCategories`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**channelCode** | **string** | Unique ID that identifies a channel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutChannelRateCategoriesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **channelRateCategories** | [**ChannelRateCategories**](ChannelRateCategories.md) | Request object for changing details of channel rate categories. | 
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


## PutChannelRateLevels

> Status PutChannelRateLevels(ctx, channelCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChannelRateLevels(channelRateLevels).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Updates channel rate level



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/chl"
)

func main() {
    channelCode := "channelCode_example" // string | Unique ID that identifies a channel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    channelRateLevels := *openapiclient.NewChannelRateLevels() // ChannelRateLevels | Request object for changing details of channel rate levels.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelAPI.PutChannelRateLevels(context.Background(), channelCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChannelRateLevels(channelRateLevels).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelAPI.PutChannelRateLevels``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutChannelRateLevels`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChannelAPI.PutChannelRateLevels`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**channelCode** | **string** | Unique ID that identifies a channel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutChannelRateLevelsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **channelRateLevels** | [**ChannelRateLevels**](ChannelRateLevels.md) | Request object for changing details of channel rate levels. | 
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


## PutChannelRateMapping

> Status PutChannelRateMapping(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChannelRateMapping(channelRateMapping).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Updates channel property rate mapping



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/chl"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    channelRateMapping := *openapiclient.NewChannelRateMapping() // ChannelRateMapping | Request object for changing channel rate mappings.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelAPI.PutChannelRateMapping(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChannelRateMapping(channelRateMapping).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelAPI.PutChannelRateMapping``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutChannelRateMapping`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChannelAPI.PutChannelRateMapping`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPutChannelRateMappingRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **channelRateMapping** | [**ChannelRateMapping**](ChannelRateMapping.md) | Request object for changing channel rate mappings. | 
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


## PutChannelRateRoomSeq

> Status PutChannelRateRoomSeq(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChannelRateRoomSequence(channelRateRoomSequence).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Updates channel property rateroom sequence



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/chl"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    channelRateRoomSequence := *openapiclient.NewChannelRateRoomSequence() // ChannelRateRoomSequence | Request object for changing sequence for channel rate rooms.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelAPI.PutChannelRateRoomSeq(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChannelRateRoomSequence(channelRateRoomSequence).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelAPI.PutChannelRateRoomSeq``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutChannelRateRoomSeq`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChannelAPI.PutChannelRateRoomSeq`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPutChannelRateRoomSeqRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **channelRateRoomSequence** | [**ChannelRateRoomSequence**](ChannelRateRoomSequence.md) | Request object for changing sequence for channel rate rooms. | 
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


## PutChannelRatesGlobalDescriptions

> Status PutChannelRatesGlobalDescriptions(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChannelGlobalDescriptions(channelGlobalDescriptions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Updates global rate descriptions



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/chl"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    channelGlobalDescriptions := *openapiclient.NewChannelGlobalDescriptions() // ChannelGlobalDescriptions | Request object to update existing Global Descriptions of the GDS Channels
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelAPI.PutChannelRatesGlobalDescriptions(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChannelGlobalDescriptions(channelGlobalDescriptions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelAPI.PutChannelRatesGlobalDescriptions``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutChannelRatesGlobalDescriptions`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChannelAPI.PutChannelRatesGlobalDescriptions`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPutChannelRatesGlobalDescriptionsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **channelGlobalDescriptions** | [**ChannelGlobalDescriptions**](ChannelGlobalDescriptions.md) | Request object to update existing Global Descriptions of the GDS Channels | 
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


## PutChannelRoomMapping

> Status PutChannelRoomMapping(ctx, roomTypeCode, channelCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChannelRoomMapping(channelRoomMapping).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Updates channel property room mapping



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/chl"
)

func main() {
    roomTypeCode := "roomTypeCode_example" // string | Room Type Code.
    channelCode := "channelCode_example" // string | Unique ID that identifies a channel.
    hotelId := "hotelId_example" // string | Unique ID that identifies a single hotel property.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    channelRoomMapping := *openapiclient.NewChannelRoomMapping() // ChannelRoomMapping | Request object for changing Channel Room Mapping.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelAPI.PutChannelRoomMapping(context.Background(), roomTypeCode, channelCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChannelRoomMapping(channelRoomMapping).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelAPI.PutChannelRoomMapping``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutChannelRoomMapping`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChannelAPI.PutChannelRoomMapping`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**roomTypeCode** | **string** | Room Type Code. | 
**channelCode** | **string** | Unique ID that identifies a channel. | 
**hotelId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutChannelRoomMappingRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **channelRoomMapping** | [**ChannelRoomMapping**](ChannelRoomMapping.md) | Request object for changing Channel Room Mapping. | 
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


## PutChannelRoomTypes

> Status PutChannelRoomTypes(ctx, channelCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChannelRoomTypes(channelRoomTypes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Updates channel room



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/chl"
)

func main() {
    channelCode := "channelCode_example" // string | Unique ID that identifies a channel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    channelRoomTypes := *openapiclient.NewChannelRoomTypes() // ChannelRoomTypes | Request object for changing details of channel room types.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelAPI.PutChannelRoomTypes(context.Background(), channelCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChannelRoomTypes(channelRoomTypes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelAPI.PutChannelRoomTypes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutChannelRoomTypes`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChannelAPI.PutChannelRoomTypes`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**channelCode** | **string** | Unique ID that identifies a channel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutChannelRoomTypesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **channelRoomTypes** | [**ChannelRoomTypes**](ChannelRoomTypes.md) | Request object for changing details of channel room types. | 
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


## PutChannelRoomsGlobalDescriptions

> Status PutChannelRoomsGlobalDescriptions(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChannelGlobalDescriptions(channelGlobalDescriptions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Updates global room descriptions



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/chl"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    channelGlobalDescriptions := *openapiclient.NewChannelGlobalDescriptions() // ChannelGlobalDescriptions | Request object to update existing Global Descriptions of the GDS Channels
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelAPI.PutChannelRoomsGlobalDescriptions(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChannelGlobalDescriptions(channelGlobalDescriptions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelAPI.PutChannelRoomsGlobalDescriptions``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutChannelRoomsGlobalDescriptions`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChannelAPI.PutChannelRoomsGlobalDescriptions`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPutChannelRoomsGlobalDescriptionsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **channelGlobalDescriptions** | [**ChannelGlobalDescriptions**](ChannelGlobalDescriptions.md) | Request object to update existing Global Descriptions of the GDS Channels | 
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


## PutChannels

> Status PutChannels(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Channels(channels).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Update channel configuration



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/chl"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    channels := *openapiclient.NewChannels() // Channels | Request object for changing details of channels.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelAPI.PutChannels(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Channels(channels).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelAPI.PutChannels``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutChannels`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChannelAPI.PutChannels`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPutChannelsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **channels** | [**Channels**](Channels.md) | Request object for changing details of channels. | 
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


## PutCreditCardsMapping

> Status PutCreditCardsMapping(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CreditCards(creditCards).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Updates channel credit card mapping



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/chl"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    creditCards := *openapiclient.NewCreditCards() // CreditCards | Request object for changing existing external system credit cards.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelAPI.PutCreditCardsMapping(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CreditCards(creditCards).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelAPI.PutCreditCardsMapping``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutCreditCardsMapping`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChannelAPI.PutCreditCardsMapping`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPutCreditCardsMappingRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **creditCards** | [**CreditCards**](CreditCards.md) | Request object for changing existing external system credit cards. | 
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


## PutCurrenciesMapping

> Status PutCurrenciesMapping(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Currencies(currencies).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Updates channel currency code mapping



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/chl"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    currencies := *openapiclient.NewCurrencies() // Currencies | Request object for changing existing external system currencies.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelAPI.PutCurrenciesMapping(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Currencies(currencies).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelAPI.PutCurrenciesMapping``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutCurrenciesMapping`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChannelAPI.PutCurrenciesMapping`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPutCurrenciesMappingRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **currencies** | [**Currencies**](Currencies.md) | Request object for changing existing external system currencies. | 
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


## PutDistributionTemplates

> Status PutDistributionTemplates(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).DistributionTemplates(distributionTemplates).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Updates rate templates configurations



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/chl"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    distributionTemplates := *openapiclient.NewDistributionTemplates() // DistributionTemplates | Request object for modifying chain or property level distribution templates.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelAPI.PutDistributionTemplates(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).DistributionTemplates(distributionTemplates).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelAPI.PutDistributionTemplates``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutDistributionTemplates`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChannelAPI.PutDistributionTemplates`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPutDistributionTemplatesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **distributionTemplates** | [**DistributionTemplates**](DistributionTemplates.md) | Request object for modifying chain or property level distribution templates. | 
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


## PutGuaranteesMapping

> Status PutGuaranteesMapping(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Guarantees(guarantees).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Updates channel guarantee code mapping



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/chl"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    guarantees := *openapiclient.NewGuarantees() // Guarantees | Request object for changing external system guarantees.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelAPI.PutGuaranteesMapping(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Guarantees(guarantees).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelAPI.PutGuaranteesMapping``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutGuaranteesMapping`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChannelAPI.PutGuaranteesMapping`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPutGuaranteesMappingRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **guarantees** | [**Guarantees**](Guarantees.md) | Request object for changing external system guarantees. | 
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


## PutHotelsMapping

> Status PutHotelsMapping(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Properties(properties).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Updates channel hotel mapping



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/chl"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    properties := *openapiclient.NewProperties() // Properties | Request object for changing existing external system properties.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelAPI.PutHotelsMapping(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Properties(properties).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelAPI.PutHotelsMapping``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutHotelsMapping`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChannelAPI.PutHotelsMapping`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPutHotelsMappingRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **properties** | [**Properties**](Properties.md) | Request object for changing existing external system properties. | 
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


## PutProfileNegRateAccessCodes

> Status PutProfileNegRateAccessCodes(ctx, clusterId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Items(items).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Initiate profile rate access codes



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/chl"
)

func main() {
    clusterId := "clusterId_example" // string | ClusterId in URI path.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    items := *openapiclient.NewProfileRateAccessCodes() // ProfileRateAccessCodes | Request for configuring profile rate access codes.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelAPI.PutProfileNegRateAccessCodes(context.Background(), clusterId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Items(items).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelAPI.PutProfileNegRateAccessCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutProfileNegRateAccessCodes`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChannelAPI.PutProfileNegRateAccessCodes`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**clusterId** | **string** | ClusterId in URI path. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutProfileNegRateAccessCodesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **items** | [**ProfileRateAccessCodes**](ProfileRateAccessCodes.md) | Request for configuring profile rate access codes. | 
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


## PutRateGlobalDescription

> Status PutRateGlobalDescription(ctx, channelRateCode, channelCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChannelGlobalDescription(channelGlobalDescription).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Updates global descriptions for a rate



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/chl"
)

func main() {
    channelRateCode := "channelRateCode_example" // string | Channel Rate Code.
    channelCode := "channelCode_example" // string | Unique ID that identifies a channel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    channelGlobalDescription := *openapiclient.NewChannelGlobalDescription() // ChannelGlobalDescription | Request object for changing channel rate codes global description.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelAPI.PutRateGlobalDescription(context.Background(), channelRateCode, channelCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChannelGlobalDescription(channelGlobalDescription).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelAPI.PutRateGlobalDescription``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutRateGlobalDescription`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChannelAPI.PutRateGlobalDescription`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**channelRateCode** | **string** | Channel Rate Code. | 
**channelCode** | **string** | Unique ID that identifies a channel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutRateGlobalDescriptionRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **channelGlobalDescription** | [**ChannelGlobalDescription**](ChannelGlobalDescription.md) | Request object for changing channel rate codes global description. | 
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


## PutRoomDescription

> Status PutRoomDescription(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChannelGlobalDescription(channelGlobalDescription).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Update global descriptions for a room



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/chl"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    channelGlobalDescription := *openapiclient.NewChannelGlobalDescription() // ChannelGlobalDescription | Request object for changing Room Mapping description.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelAPI.PutRoomDescription(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChannelGlobalDescription(channelGlobalDescription).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelAPI.PutRoomDescription``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutRoomDescription`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChannelAPI.PutRoomDescription`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPutRoomDescriptionRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **channelGlobalDescription** | [**ChannelGlobalDescription**](ChannelGlobalDescription.md) | Request object for changing Room Mapping description. | 
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


## PutTotalPricingElements

> Status PutTotalPricingElements(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TotalPricingElements(totalPricingElements).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Updates total pricing tax and fee types



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/chl"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    totalPricingElements := *openapiclient.NewTotalPricingElements() // TotalPricingElements | Request object to change the total pricing elements of GDS channel.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelAPI.PutTotalPricingElements(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TotalPricingElements(totalPricingElements).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelAPI.PutTotalPricingElements``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutTotalPricingElements`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChannelAPI.PutTotalPricingElements`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPutTotalPricingElementsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **totalPricingElements** | [**TotalPricingElements**](TotalPricingElements.md) | Request object to change the total pricing elements of GDS channel. | 
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


## SyncProfileNegRateAccessCodes

> Status SyncProfileNegRateAccessCodes(ctx, clusterId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Items(items).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Sync profile rate access codes



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/chl"
)

func main() {
    clusterId := "clusterId_example" // string | ClusterId in URI path.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    items := *openapiclient.NewSyncProfileRatesAccessCodes() // SyncProfileRatesAccessCodes | Request for configuring profile rate access codes.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelAPI.SyncProfileNegRateAccessCodes(context.Background(), clusterId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Items(items).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelAPI.SyncProfileNegRateAccessCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `SyncProfileNegRateAccessCodes`: Status
    fmt.Fprintf(os.Stdout, "Response from `ChannelAPI.SyncProfileNegRateAccessCodes`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**clusterId** | **string** | ClusterId in URI path. | 

### Other Parameters

Other parameters are passed through a pointer to a apiSyncProfileNegRateAccessCodesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **items** | [**SyncProfileRatesAccessCodes**](SyncProfileRatesAccessCodes.md) | Request for configuring profile rate access codes. | 
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


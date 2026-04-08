# \RatePlanAPI

All URIs are relative to */rtp/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CopyPackages**](RatePlanAPI.md#CopyPackages) | **Put** /packages/copy | Copy package code(s) 
[**CopyPromotionGroups**](RatePlanAPI.md#CopyPromotionGroups) | **Put** /hotels/{hotelId}/promotionGroups/copy | Copy promotion groups
[**CopyRatePlans**](RatePlanAPI.md#CopyRatePlans) | **Put** /hotels/{hotelId}/ratePlans/{ratePlanCode}/copy | Copy rate plans
[**CopyTieredRateSchedules**](RatePlanAPI.md#CopyTieredRateSchedules) | **Put** /hotels/{hotelId}/ratePlans/{ratePlanCode}/sourceTiers/{sourceTierId}/destinationTiers/{destinationTierId}/schedules/copy | Copy tiered rate schedules
[**DeleteBestAvailableRates**](RatePlanAPI.md#DeleteBestAvailableRates) | **Delete** /hotels/{hotelId}/bestavailablerates | Delete Best Available Rates
[**DeleteDailyRatePlanScheduleRange**](RatePlanAPI.md#DeleteDailyRatePlanScheduleRange) | **Delete** /hotels/{hotelId}/ratePlans/{ratePlanCode}/dailySchedules | Delete daily rate plan schedule range
[**DeleteHotelPackageForecastGroups**](RatePlanAPI.md#DeleteHotelPackageForecastGroups) | **Delete** /hotels/{hotelId}/packageForecastGroups | Delete Hotel Package Forecast Groups
[**DeleteMassRateChangeLog**](RatePlanAPI.md#DeleteMassRateChangeLog) | **Delete** /hotels/{hotelId}/massRateChangeLog | Delete mass rate change log
[**DeleteNegotiatedRates**](RatePlanAPI.md#DeleteNegotiatedRates) | **Delete** /hotels/{hotelId}/profiles/{profileId}/startDate/{startDate}/negotiatedRates/{ratePlanId} | Delete negotiated rates
[**DeletePackage**](RatePlanAPI.md#DeletePackage) | **Delete** /hotels/{hotelId}/packages/{packageCode} | Delete the package
[**DeletePackageFormulaRanges**](RatePlanAPI.md#DeletePackageFormulaRanges) | **Delete** /hotels/{hotelId}/packageFormulaRanges/{packageFormulaRangeId} | Delete package formula ranges
[**DeletePackageGroups**](RatePlanAPI.md#DeletePackageGroups) | **Delete** /hotels/{hotelId}/packageGroups/{packageCode} | Delete package group
[**DeletePromotionGroup**](RatePlanAPI.md#DeletePromotionGroup) | **Delete** /hotels/{hotelId}/promotionGroups/{groupCode} | Delete promotion groups
[**DeleteRateAccessExclusions**](RatePlanAPI.md#DeleteRateAccessExclusions) | **Delete** /hotels/{hotelId}/rateAccessExclusions | Delete rate access exclusions
[**DeleteRateGroups**](RatePlanAPI.md#DeleteRateGroups) | **Delete** /hotels/{hotelId}/rateGroups | Delete rate groups
[**DeleteRatePlan**](RatePlanAPI.md#DeleteRatePlan) | **Delete** /hotels/{hotelId}/ratePlans/{ratePlanCode} | Delete rate plan 
[**DeleteRatePlanPackages**](RatePlanAPI.md#DeleteRatePlanPackages) | **Delete** /hotels/{hotelId}/ratePlans/{ratePlanCode}/packages | Delete rate plan packages
[**DeleteRatePlanPostingRhythms**](RatePlanAPI.md#DeleteRatePlanPostingRhythms) | **Delete** /hotels/{hotelId}/ratePlans/{ratePlanCode}/postingRhythms | Delete rate plan posting rhythms
[**DeleteRatePlanSchedules**](RatePlanAPI.md#DeleteRatePlanSchedules) | **Delete** /hotels/{hotelId}/ratePlans/{ratePlanCode}/schedules | Delete rate plan schedule
[**DeleteRateStrategy**](RatePlanAPI.md#DeleteRateStrategy) | **Delete** /hotels/{hotelId}/rateStrategies/{rateStrategyId} | Delete rate strategies
[**DeleteTemplatePackageForecastGroups**](RatePlanAPI.md#DeleteTemplatePackageForecastGroups) | **Delete** /packageForecastGroups/{packageForecastGroupCode} | Delete Template Package Forecast Groups
[**DistributeNegotiatedRates**](RatePlanAPI.md#DistributeNegotiatedRates) | **Put** /hotels/{hotelId}/negotiatedRates/distributions | Distribute negotiated rates
[**DownloadExternalRatePlan**](RatePlanAPI.md#DownloadExternalRatePlan) | **Get** /hotels/{hotelId}/externalRatePlans/{ratePlanCode} | Get external rate plan
[**GetBestAvailableRates**](RatePlanAPI.md#GetBestAvailableRates) | **Get** /hotels/{hotelId}/bestavailablerates | Fetch Best Available Rates
[**GetHotelPackageForecastGroups**](RatePlanAPI.md#GetHotelPackageForecastGroups) | **Get** /hotels/{hotelId}/packageForecastGroups | Get Hotel Package Forecast Groups
[**GetMassRateChangeStatus**](RatePlanAPI.md#GetMassRateChangeStatus) | **Get** /hotels/{hotelId}/massRateChangeStatus | Get mass rate change status
[**GetNegotiatedRates**](RatePlanAPI.md#GetNegotiatedRates) | **Get** /hotels/{hotelId}/negotiatedRates | Get negotiated rates and profiles 
[**GetNegotiatedRatesForGivenHotelAndRate**](RatePlanAPI.md#GetNegotiatedRatesForGivenHotelAndRate) | **Get** /hotels/{hotelId}/negotiatedRates/{rateCode}/profiles | Fetch Negotiated Rates
[**GetNegotiatedRatesForGivenProfile**](RatePlanAPI.md#GetNegotiatedRatesForGivenProfile) | **Get** /profiles/{profileId}/negotiatedRates | Get negotiated rate details for given profile
[**GetPackage**](RatePlanAPI.md#GetPackage) | **Get** /hotels/{hotelId}/packages/{packageCode} | Get package for given package
[**GetPackageFormulaRanges**](RatePlanAPI.md#GetPackageFormulaRanges) | **Get** /hotels/{hotelId}/packageFormulaRanges | Get package formula ranges
[**GetPackageGroups**](RatePlanAPI.md#GetPackageGroups) | **Get** /hotels/{hotelId}/packageGroups | Get package groups
[**GetPackageRates**](RatePlanAPI.md#GetPackageRates) | **Get** /hotels/{hotelId}/packages/{packageCode}/rates | Get package rates
[**GetPackages**](RatePlanAPI.md#GetPackages) | **Get** /packages | Get Packages
[**GetPromotionCodes**](RatePlanAPI.md#GetPromotionCodes) | **Get** /hotels/{hotelId}/promotionCodes | Get promotion codes
[**GetPromotionGroups**](RatePlanAPI.md#GetPromotionGroups) | **Get** /hotels/{hotelId}/promotionGroups | Get promotion groups
[**GetRateActivityLog**](RatePlanAPI.md#GetRateActivityLog) | **Get** /hotels/{hotelId}/rates/activityLog | Get rate activity log
[**GetRateGroups**](RatePlanAPI.md#GetRateGroups) | **Get** /hotels/{hotelId}/rateGroups | Get rate groups
[**GetRatePlan**](RatePlanAPI.md#GetRatePlan) | **Get** /hotels/{hotelId}/ratePlans/{ratePlanCode} | Get rate plan
[**GetRatePlanScheduleYieldAdjustments**](RatePlanAPI.md#GetRatePlanScheduleYieldAdjustments) | **Get** /hotels/{hotelId}/ratePlan/schedule/yieldAdjustment | Get rate plan schedule yield adjustments
[**GetRatePlanSchedules**](RatePlanAPI.md#GetRatePlanSchedules) | **Get** /hotels/{hotelId}/ratePlans/{ratePlanCode}/schedules | Get rate plan schedules
[**GetRatePlans**](RatePlanAPI.md#GetRatePlans) | **Get** /ratePlans | Get rate plans
[**GetRatePlansByHotel**](RatePlanAPI.md#GetRatePlansByHotel) | **Get** /hotels/{hotelId}/ratePlans | Get rate plans by Hotel Code
[**GetRatePlansForBlock**](RatePlanAPI.md#GetRatePlansForBlock) | **Get** /hotels/{hotelId}/blocks/ratePlans | Get rate plans for a given block
[**GetRateStrategies**](RatePlanAPI.md#GetRateStrategies) | **Get** /hotels/{hotelId}/rateStrategies | Get rate strategies
[**GetTemplatePackageForecastGroups**](RatePlanAPI.md#GetTemplatePackageForecastGroups) | **Get** /packageForecastGroups | Get Template Package Forecast Groups
[**GetTemplatePromotionCodes**](RatePlanAPI.md#GetTemplatePromotionCodes) | **Get** /promotionCodes | Get Template Promotion Codes
[**GetYieldAdjustments**](RatePlanAPI.md#GetYieldAdjustments) | **Get** /hotels/{hotelId}/yieldAdjustments | Get yield adjustments
[**ManageRatePlansSchedules**](RatePlanAPI.md#ManageRatePlansSchedules) | **Put** /ratePlanSchedules | Manages rate plan schedules
[**PostBestAvailableRates**](RatePlanAPI.md#PostBestAvailableRates) | **Post** /hotels/{hotelId}/bestavailablerates | Create a Best Available Rates
[**PostHotelPackageForecastGroups**](RatePlanAPI.md#PostHotelPackageForecastGroups) | **Post** /hotels/{hotelId}/packageForecastGroups | Create Hotel Package Forecast Groups
[**PostNegotiatedRates**](RatePlanAPI.md#PostNegotiatedRates) | **Post** /hotels/{hotelId}/negotiatedRates | Create negotiated rates 
[**PostPackage**](RatePlanAPI.md#PostPackage) | **Post** /hotels/{hotelId}/packages/{packageCode} | Create package
[**PostPackageFormulaRanges**](RatePlanAPI.md#PostPackageFormulaRanges) | **Post** /hotels/{hotelId}/packageFormulaRanges | Create package formula ranges
[**PostPackageGroup**](RatePlanAPI.md#PostPackageGroup) | **Post** /hotels/{hotelId}/packageGroups | Create package group
[**PostPromotionCode**](RatePlanAPI.md#PostPromotionCode) | **Post** /hotels/{hotelId}/promotionCodes/{promotionCode} | Create promotion codes
[**PostPromotionGroup**](RatePlanAPI.md#PostPromotionGroup) | **Post** /hotels/{hotelId}/promotionGroups/{groupCode} | Create promotion groups
[**PostRateGroups**](RatePlanAPI.md#PostRateGroups) | **Post** /hotels/{hotelId}/rateGroups | Create rate groups
[**PostRatePlan**](RatePlanAPI.md#PostRatePlan) | **Post** /hotels/{hotelId}/ratePlans | Create rate plans
[**PostRatePlanPackages**](RatePlanAPI.md#PostRatePlanPackages) | **Post** /hotels/{hotelId}/ratePlans/{ratePlanCode}/packages | Create rate plan package
[**PostRatePlanPostingRhythms**](RatePlanAPI.md#PostRatePlanPostingRhythms) | **Post** /hotels/{hotelId}/ratePlans/{ratePlanCode}/postingRhythms | Create rate plan posting rhythms
[**PostRatePlanSchedules**](RatePlanAPI.md#PostRatePlanSchedules) | **Post** /hotels/{hotelId}/ratePlans/{ratePlanCode}/schedules | Create rate plan schedules
[**PostRateStrategy**](RatePlanAPI.md#PostRateStrategy) | **Post** /hotels/{hotelId}/rateStrategies | Create rate strategies
[**PostTemplatePackageForecastGroups**](RatePlanAPI.md#PostTemplatePackageForecastGroups) | **Post** /packageForecastGroups | Create Template Package Forecast Groups
[**PostTemplatePromotionCode**](RatePlanAPI.md#PostTemplatePromotionCode) | **Post** /promotionCodes/{promotionCode} | Create Template Promotion Code
[**PutHotelPackageForecastGroups**](RatePlanAPI.md#PutHotelPackageForecastGroups) | **Put** /hotels/{hotelId}/packageForecastGroups | Change Hotel Package Forecast Groups
[**PutNegotiatedRates**](RatePlanAPI.md#PutNegotiatedRates) | **Put** /hotels/{hotelId}/negotiatedRates/{rateCode} | Change negotiated rates 
[**PutPackage**](RatePlanAPI.md#PutPackage) | **Put** /hotels/{hotelId}/packages/{packageCode} | Change the package
[**PutPackageFormulaRanges**](RatePlanAPI.md#PutPackageFormulaRanges) | **Put** /hotels/{hotelId}/packageFormulaRanges/{packageFormulaRangeId} | Change package formula ranges
[**PutPackageGroup**](RatePlanAPI.md#PutPackageGroup) | **Put** /hotels/{hotelId}/packageGroups | Change package group
[**PutPromotionCode**](RatePlanAPI.md#PutPromotionCode) | **Put** /hotels/{hotelId}/promotionCodes/{promotionCode} | Change promotion codes
[**PutPromotionGroup**](RatePlanAPI.md#PutPromotionGroup) | **Put** /hotels/{hotelId}/promotionGroups/{groupCode} | Change promotion groups
[**PutRateGroups**](RatePlanAPI.md#PutRateGroups) | **Put** /hotels/{hotelId}/rateGroups | Change rate groups
[**PutRatePlan**](RatePlanAPI.md#PutRatePlan) | **Put** /hotels/{hotelId}/ratePlans/{ratePlanCode} | Change rate plan
[**PutRatePlanPackages**](RatePlanAPI.md#PutRatePlanPackages) | **Put** /hotels/{hotelId}/ratePlans/{ratePlanCode}/packages | Change rate plan package
[**PutRatePlanPostingRhythms**](RatePlanAPI.md#PutRatePlanPostingRhythms) | **Put** /hotels/{hotelId}/ratePlans/{ratePlanCode}/postingRhythms | Change rate plan posting rhythms
[**PutRatePlanSchedules**](RatePlanAPI.md#PutRatePlanSchedules) | **Put** /hotels/{hotelId}/ratePlans/{ratePlanCode}/schedules | Change rate plan schedules
[**PutRateStrategy**](RatePlanAPI.md#PutRateStrategy) | **Put** /hotels/{hotelId}/rateStrategies/{rateStrategyId} | Change rate strategies
[**PutTemplatePackageForecastGroups**](RatePlanAPI.md#PutTemplatePackageForecastGroups) | **Put** /packageForecastGroups | Change Template Package Forecast Groups
[**PutTemplatePromotionCode**](RatePlanAPI.md#PutTemplatePromotionCode) | **Put** /promotionCodes/{promotionCode} | Change Template Promotion Code
[**SetDailyRatePlanScheduleRange**](RatePlanAPI.md#SetDailyRatePlanScheduleRange) | **Put** /hotels/{hotelId}/ratePlans/{ratePlanCode}/dailySchedules | Set daily rate plan schedule range
[**SetMassRatePlanSchedules**](RatePlanAPI.md#SetMassRatePlanSchedules) | **Put** /hotels/{hotelId}/massRatePlanSchedules | Set mass rate plan schedules
[**SetRateAccessExclusions**](RatePlanAPI.md#SetRateAccessExclusions) | **Put** /hotels/{hotelId}/rateAccessExclusions | Set rate access exclusions
[**SetRatePlanSchedules**](RatePlanAPI.md#SetRatePlanSchedules) | **Put** /hotels/{hotelId}/ratePlans/{ratePlanCode}/schedules/set | Set rate plan schedules
[**SetRateStrategies**](RatePlanAPI.md#SetRateStrategies) | **Post** /rateStrategies | Set rate strategies
[**SplitRatePlanSchedule**](RatePlanAPI.md#SplitRatePlanSchedule) | **Post** /hotels/{hotelId}/ratePlanSchedules/{scheduleId}/split | Split rate plan schedule
[**SyncRatePlans**](RatePlanAPI.md#SyncRatePlans) | **Put** /hotels/{hotelId}/ratePlans/sync | Synchronizes Rate Plan information including Rate Header and Packages across target properties.



## CopyPackages

> Status CopyPackages(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).PackagesCopy(packagesCopy).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Copy package code(s) 



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rtp"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    packagesCopy := []openapiclient.CopyPackageCodesType{*openapiclient.NewCopyPackageCodesType()} // []CopyPackageCodesType | List of the package codes to be copied to other hotel code(s).
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RatePlanAPI.CopyPackages(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).PackagesCopy(packagesCopy).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RatePlanAPI.CopyPackages``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CopyPackages`: Status
    fmt.Fprintf(os.Stdout, "Response from `RatePlanAPI.CopyPackages`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCopyPackagesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **packagesCopy** | [**[]CopyPackageCodesType**](CopyPackageCodesType.md) | List of the package codes to be copied to other hotel code(s). | 
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


## CopyPromotionGroups

> Status CopyPromotionGroups(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).PromotionGroupsCopy(promotionGroupsCopy).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Copy promotion groups



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rtp"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID that identifies a single hotel property.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    promotionGroupsCopy := *openapiclient.NewPromotionGroupsCopy() // PromotionGroupsCopy | 
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RatePlanAPI.CopyPromotionGroups(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).PromotionGroupsCopy(promotionGroupsCopy).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RatePlanAPI.CopyPromotionGroups``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CopyPromotionGroups`: Status
    fmt.Fprintf(os.Stdout, "Response from `RatePlanAPI.CopyPromotionGroups`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiCopyPromotionGroupsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **promotionGroupsCopy** | [**PromotionGroupsCopy**](PromotionGroupsCopy.md) |  | 
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


## CopyRatePlans

> RatePlansCopyDetails CopyRatePlans(ctx, ratePlanCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RatePlansCopy(ratePlansCopy).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Copy rate plans



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rtp"
)

func main() {
    ratePlanCode := "ratePlanCode_example" // string | Rate Plan Code.
    hotelId := "hotelId_example" // string | Unique ID that identifies a single hotel property.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    ratePlansCopy := *openapiclient.NewRatePlansCopy() // RatePlansCopy | Request object for Copying rate plans to multiple hotels.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RatePlanAPI.CopyRatePlans(context.Background(), ratePlanCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RatePlansCopy(ratePlansCopy).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RatePlanAPI.CopyRatePlans``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CopyRatePlans`: RatePlansCopyDetails
    fmt.Fprintf(os.Stdout, "Response from `RatePlanAPI.CopyRatePlans`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**ratePlanCode** | **string** | Rate Plan Code. | 
**hotelId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiCopyRatePlansRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **ratePlansCopy** | [**RatePlansCopy**](RatePlansCopy.md) | Request object for Copying rate plans to multiple hotels. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**RatePlansCopyDetails**](RatePlansCopyDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## CopyTieredRateSchedules

> Status CopyTieredRateSchedules(ctx, destinationTierId, sourceTierId, ratePlanCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TieredRateSchedulesCopy(tieredRateSchedulesCopy).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Copy tiered rate schedules



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rtp"
)

func main() {
    destinationTierId := "destinationTierId_example" // string | Destination Tier Id.
    sourceTierId := "sourceTierId_example" // string | Source Tier Id.
    ratePlanCode := "ratePlanCode_example" // string | Rate Plan Code.
    hotelId := "hotelId_example" // string | Unique ID that identifies a single hotel property.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    tieredRateSchedulesCopy := *openapiclient.NewTieredRateSchedulesCopy() // TieredRateSchedulesCopy | Request object to copy the specified tier 1 rate schedules into the specified tiers.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RatePlanAPI.CopyTieredRateSchedules(context.Background(), destinationTierId, sourceTierId, ratePlanCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TieredRateSchedulesCopy(tieredRateSchedulesCopy).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RatePlanAPI.CopyTieredRateSchedules``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CopyTieredRateSchedules`: Status
    fmt.Fprintf(os.Stdout, "Response from `RatePlanAPI.CopyTieredRateSchedules`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**destinationTierId** | **string** | Destination Tier Id. | 
**sourceTierId** | **string** | Source Tier Id. | 
**ratePlanCode** | **string** | Rate Plan Code. | 
**hotelId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiCopyTieredRateSchedulesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------




 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **tieredRateSchedulesCopy** | [**TieredRateSchedulesCopy**](TieredRateSchedulesCopy.md) | Request object to copy the specified tier 1 rate schedules into the specified tiers. | 
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


## DeleteBestAvailableRates

> Status DeleteBestAvailableRates(ctx, hotelId).Code(code).End(end).Start(start).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Friday(friday).Monday(monday).Saturday(saturday).Sunday(sunday).Thursday(thursday).Tuesday(tuesday).Wednesday(wednesday).LOS1(lOS1).LOS2(lOS2).LOS3(lOS3).LOS4(lOS4).LOS5(lOS5).LOS6(lOS6).LOS7(lOS7).LOS8(lOS8).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete Best Available Rates



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/rtp"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID that identifies a single hotel property.
    code := []string{"Inner_example"} // []string | 
    end := time.Now() // string | The ending value of the date range.
    start := time.Now() // string | The starting value of the date range.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    friday := true // bool |  (optional)
    monday := true // bool |  (optional)
    saturday := true // bool |  (optional)
    sunday := true // bool |  (optional)
    thursday := true // bool |  (optional)
    tuesday := true // bool |  (optional)
    wednesday := true // bool |  (optional)
    lOS1 := true // bool | Indicates Length of Stay 1 configuration. (optional)
    lOS2 := true // bool | Indicates Length of Stay 2 configuration. (optional)
    lOS3 := true // bool | Indicates Length of Stay 3 configuration. (optional)
    lOS4 := true // bool | Indicates Length of Stay 4 configuration. (optional)
    lOS5 := true // bool | Indicates Length of Stay 5 configuration. (optional)
    lOS6 := true // bool | Indicates Length of Stay 6 configuration. (optional)
    lOS7 := true // bool | Indicates Length of Stay 7 configuration. (optional)
    lOS8 := true // bool | Indicates Length of Stay 8 configuration. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RatePlanAPI.DeleteBestAvailableRates(context.Background(), hotelId).Code(code).End(end).Start(start).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Friday(friday).Monday(monday).Saturday(saturday).Sunday(sunday).Thursday(thursday).Tuesday(tuesday).Wednesday(wednesday).LOS1(lOS1).LOS2(lOS2).LOS3(lOS3).LOS4(lOS4).LOS5(lOS5).LOS6(lOS6).LOS7(lOS7).LOS8(lOS8).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RatePlanAPI.DeleteBestAvailableRates``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteBestAvailableRates`: Status
    fmt.Fprintf(os.Stdout, "Response from `RatePlanAPI.DeleteBestAvailableRates`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteBestAvailableRatesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **code** | **[]string** |  | 
 **end** | **string** | The ending value of the date range. | 
 **start** | **string** | The starting value of the date range. | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **friday** | **bool** |  | 
 **monday** | **bool** |  | 
 **saturday** | **bool** |  | 
 **sunday** | **bool** |  | 
 **thursday** | **bool** |  | 
 **tuesday** | **bool** |  | 
 **wednesday** | **bool** |  | 
 **lOS1** | **bool** | Indicates Length of Stay 1 configuration. | 
 **lOS2** | **bool** | Indicates Length of Stay 2 configuration. | 
 **lOS3** | **bool** | Indicates Length of Stay 3 configuration. | 
 **lOS4** | **bool** | Indicates Length of Stay 4 configuration. | 
 **lOS5** | **bool** | Indicates Length of Stay 5 configuration. | 
 **lOS6** | **bool** | Indicates Length of Stay 6 configuration. | 
 **lOS7** | **bool** | Indicates Length of Stay 7 configuration. | 
 **lOS8** | **bool** | Indicates Length of Stay 8 configuration. | 
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


## DeleteDailyRatePlanScheduleRange

> Status DeleteDailyRatePlanScheduleRange(ctx, ratePlanCode, hotelId).StartDate(startDate).EndDate(endDate).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoomType(roomType).RoomClass(roomClass).Friday(friday).Monday(monday).Saturday(saturday).Sunday(sunday).Thursday(thursday).Tuesday(tuesday).Wednesday(wednesday).Duration(duration).AdvancedDailyBaseRatePlanCode(advancedDailyBaseRatePlanCode).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete daily rate plan schedule range



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/rtp"
)

func main() {
    ratePlanCode := "ratePlanCode_example" // string | Rate Plan Code.
    hotelId := "hotelId_example" // string | Unique ID that identifies a single hotel property.
    startDate := time.Now() // string | 
    endDate := time.Now() // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    roomType := []string{"Inner_example"} // []string | Room Type. (optional)
    roomClass := []string{"Inner_example"} // []string | Room Class. (optional)
    friday := true // bool |  (optional)
    monday := true // bool |  (optional)
    saturday := true // bool |  (optional)
    sunday := true // bool |  (optional)
    thursday := true // bool |  (optional)
    tuesday := true // bool |  (optional)
    wednesday := true // bool |  (optional)
    duration := "duration_example" // string |  (optional)
    advancedDailyBaseRatePlanCode := "advancedDailyBaseRatePlanCode_example" // string | The Base Rate Plan Code which will be used to look up for and configure the Pricing Schedule for the main Rate Plan Code (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RatePlanAPI.DeleteDailyRatePlanScheduleRange(context.Background(), ratePlanCode, hotelId).StartDate(startDate).EndDate(endDate).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoomType(roomType).RoomClass(roomClass).Friday(friday).Monday(monday).Saturday(saturday).Sunday(sunday).Thursday(thursday).Tuesday(tuesday).Wednesday(wednesday).Duration(duration).AdvancedDailyBaseRatePlanCode(advancedDailyBaseRatePlanCode).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RatePlanAPI.DeleteDailyRatePlanScheduleRange``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteDailyRatePlanScheduleRange`: Status
    fmt.Fprintf(os.Stdout, "Response from `RatePlanAPI.DeleteDailyRatePlanScheduleRange`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**ratePlanCode** | **string** | Rate Plan Code. | 
**hotelId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteDailyRatePlanScheduleRangeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **startDate** | **string** |  | 
 **endDate** | **string** |  | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **roomType** | **[]string** | Room Type. | 
 **roomClass** | **[]string** | Room Class. | 
 **friday** | **bool** |  | 
 **monday** | **bool** |  | 
 **saturday** | **bool** |  | 
 **sunday** | **bool** |  | 
 **thursday** | **bool** |  | 
 **tuesday** | **bool** |  | 
 **wednesday** | **bool** |  | 
 **duration** | **string** |  | 
 **advancedDailyBaseRatePlanCode** | **string** | The Base Rate Plan Code which will be used to look up for and configure the Pricing Schedule for the main Rate Plan Code | 
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


## DeleteHotelPackageForecastGroups

> Status DeleteHotelPackageForecastGroups(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Code(code).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete Hotel Package Forecast Groups



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rtp"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID that identifies a single hotel property.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    code := []string{"Inner_example"} // []string | Configuration code. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RatePlanAPI.DeleteHotelPackageForecastGroups(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Code(code).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RatePlanAPI.DeleteHotelPackageForecastGroups``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteHotelPackageForecastGroups`: Status
    fmt.Fprintf(os.Stdout, "Response from `RatePlanAPI.DeleteHotelPackageForecastGroups`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteHotelPackageForecastGroupsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
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


## DeleteMassRateChangeLog

> Status DeleteMassRateChangeLog(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete mass rate change log



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rtp"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID that identifies a single hotel property.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RatePlanAPI.DeleteMassRateChangeLog(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RatePlanAPI.DeleteMassRateChangeLog``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteMassRateChangeLog`: Status
    fmt.Fprintf(os.Stdout, "Response from `RatePlanAPI.DeleteMassRateChangeLog`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteMassRateChangeLogRequest struct via the builder pattern


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


## DeleteNegotiatedRates

> Status DeleteNegotiatedRates(ctx, ratePlanId, startDate, profileId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete negotiated rates



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rtp"
)

func main() {
    ratePlanId := "ratePlanId_example" // string | Rate Plan ID.
    startDate := "startDate_example" // string | Start Date.
    profileId := "profileId_example" // string | Unique ID that identifies a profile.
    hotelId := "hotelId_example" // string | Unique ID that identifies a single hotel property.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RatePlanAPI.DeleteNegotiatedRates(context.Background(), ratePlanId, startDate, profileId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RatePlanAPI.DeleteNegotiatedRates``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteNegotiatedRates`: Status
    fmt.Fprintf(os.Stdout, "Response from `RatePlanAPI.DeleteNegotiatedRates`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**ratePlanId** | **string** | Rate Plan ID. | 
**startDate** | **string** | Start Date. | 
**profileId** | **string** | Unique ID that identifies a profile. | 
**hotelId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteNegotiatedRatesRequest struct via the builder pattern


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


## DeletePackage

> Status DeletePackage(ctx, packageCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete the package



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rtp"
)

func main() {
    packageCode := "packageCode_example" // string | Package Code.
    hotelId := "hotelId_example" // string | Unique ID that identifies a single hotel property.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RatePlanAPI.DeletePackage(context.Background(), packageCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RatePlanAPI.DeletePackage``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeletePackage`: Status
    fmt.Fprintf(os.Stdout, "Response from `RatePlanAPI.DeletePackage`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**packageCode** | **string** | Package Code. | 
**hotelId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeletePackageRequest struct via the builder pattern


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


## DeletePackageFormulaRanges

> Status DeletePackageFormulaRanges(ctx, packageFormulaRangeId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Amount(amount).CurrencyCode(currencyCode).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete package formula ranges



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rtp"
)

func main() {
    packageFormulaRangeId := "packageFormulaRangeId_example" // string | Package Formula Range Id.
    hotelId := "hotelId_example" // string | Unique ID that identifies a single hotel property.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    amount := float32(8.14) // float32 | A monetary amount. (optional)
    currencyCode := "currencyCode_example" // string | Provides a currency code to reflect the currency in which an amount may be expressed. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RatePlanAPI.DeletePackageFormulaRanges(context.Background(), packageFormulaRangeId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Amount(amount).CurrencyCode(currencyCode).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RatePlanAPI.DeletePackageFormulaRanges``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeletePackageFormulaRanges`: Status
    fmt.Fprintf(os.Stdout, "Response from `RatePlanAPI.DeletePackageFormulaRanges`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**packageFormulaRangeId** | **string** | Package Formula Range Id. | 
**hotelId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeletePackageFormulaRangesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **amount** | **float32** | A monetary amount. | 
 **currencyCode** | **string** | Provides a currency code to reflect the currency in which an amount may be expressed. | 
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


## DeletePackageGroups

> Status DeletePackageGroups(ctx, packageCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete package group



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rtp"
)

func main() {
    packageCode := "packageCode_example" // string | Package Code.
    hotelId := "hotelId_example" // string | Unique ID that identifies a single hotel property.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RatePlanAPI.DeletePackageGroups(context.Background(), packageCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RatePlanAPI.DeletePackageGroups``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeletePackageGroups`: Status
    fmt.Fprintf(os.Stdout, "Response from `RatePlanAPI.DeletePackageGroups`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**packageCode** | **string** | Package Code. | 
**hotelId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeletePackageGroupsRequest struct via the builder pattern


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


## DeletePromotionGroup

> Status DeletePromotionGroup(ctx, groupCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete promotion groups



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rtp"
)

func main() {
    groupCode := "groupCode_example" // string | Promotion Group Code.
    hotelId := "hotelId_example" // string | Unique ID that identifies a single hotel property.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RatePlanAPI.DeletePromotionGroup(context.Background(), groupCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RatePlanAPI.DeletePromotionGroup``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeletePromotionGroup`: Status
    fmt.Fprintf(os.Stdout, "Response from `RatePlanAPI.DeletePromotionGroup`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**groupCode** | **string** | Promotion Group Code. | 
**hotelId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeletePromotionGroupRequest struct via the builder pattern


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


## DeleteRateAccessExclusions

> Status DeleteRateAccessExclusions(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RateCode(rateCode).AllowCancelReservation(allowCancelReservation).AllowCreateReservation(allowCreateReservation).AllowModifyReservation(allowModifyReservation).ExcludeFromAvailability(excludeFromAvailability).Inactive(inactive).SourceType(sourceType).SourceValue(sourceValue).End(end).Start(start).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete rate access exclusions



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/rtp"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID that identifies a single hotel property.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    rateCode := "rateCode_example" // string | Rate code (optional)
    allowCancelReservation := []bool{false} // []bool | Allow to cancel a reservation under this access exclusion. (optional)
    allowCreateReservation := []bool{false} // []bool | Allow to create a reservation under this access exclusion. (optional)
    allowModifyReservation := []bool{false} // []bool | Allow to modify a reservation under this access exclusion. (optional)
    excludeFromAvailability := []bool{false} // []bool | Exclude a specific rate from availability (optional)
    inactive := []bool{false} // []bool | The rate access exclusion is inactive (optional)
    sourceType := []string{"Inner_example"} // []string | The type of source (CRO or Hotel code) for which the rate access exclusion is set. (optional)
    sourceValue := []string{"Inner_example"} // []string | CRO or Hotel code value. (optional)
    end := time.Now() // string | The ending value of the date range. (optional)
    start := time.Now() // string | The starting value of the date range. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RatePlanAPI.DeleteRateAccessExclusions(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RateCode(rateCode).AllowCancelReservation(allowCancelReservation).AllowCreateReservation(allowCreateReservation).AllowModifyReservation(allowModifyReservation).ExcludeFromAvailability(excludeFromAvailability).Inactive(inactive).SourceType(sourceType).SourceValue(sourceValue).End(end).Start(start).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RatePlanAPI.DeleteRateAccessExclusions``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteRateAccessExclusions`: Status
    fmt.Fprintf(os.Stdout, "Response from `RatePlanAPI.DeleteRateAccessExclusions`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteRateAccessExclusionsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **rateCode** | **string** | Rate code | 
 **allowCancelReservation** | **[]bool** | Allow to cancel a reservation under this access exclusion. | 
 **allowCreateReservation** | **[]bool** | Allow to create a reservation under this access exclusion. | 
 **allowModifyReservation** | **[]bool** | Allow to modify a reservation under this access exclusion. | 
 **excludeFromAvailability** | **[]bool** | Exclude a specific rate from availability | 
 **inactive** | **[]bool** | The rate access exclusion is inactive | 
 **sourceType** | **[]string** | The type of source (CRO or Hotel code) for which the rate access exclusion is set. | 
 **sourceValue** | **[]string** | CRO or Hotel code value. | 
 **end** | **string** | The ending value of the date range. | 
 **start** | **string** | The starting value of the date range. | 
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


## DeleteRateGroups

> Status DeleteRateGroups(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete rate groups



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rtp"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID that identifies a single hotel property.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RatePlanAPI.DeleteRateGroups(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RatePlanAPI.DeleteRateGroups``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteRateGroups`: Status
    fmt.Fprintf(os.Stdout, "Response from `RatePlanAPI.DeleteRateGroups`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteRateGroupsRequest struct via the builder pattern


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


## DeleteRatePlan

> Status DeleteRatePlan(ctx, ratePlanCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete rate plan 



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rtp"
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
    resp, r, err := apiClient.RatePlanAPI.DeleteRatePlan(context.Background(), ratePlanCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RatePlanAPI.DeleteRatePlan``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteRatePlan`: Status
    fmt.Fprintf(os.Stdout, "Response from `RatePlanAPI.DeleteRatePlan`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**ratePlanCode** | **string** | Rate Plan Code. | 
**hotelId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteRatePlanRequest struct via the builder pattern


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


## DeleteRatePlanPackages

> Status DeleteRatePlanPackages(ctx, ratePlanCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).PackageCode(packageCode).PackageGroup(packageGroup).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete rate plan packages



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rtp"
)

func main() {
    ratePlanCode := "ratePlanCode_example" // string | Rate Plan Code.
    hotelId := "hotelId_example" // string | Unique ID that identifies a single hotel property.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    packageCode := []string{"Inner_example"} // []string | Configuration code. (optional)
    packageGroup := []string{"Inner_example"} // []string | Configuration code. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RatePlanAPI.DeleteRatePlanPackages(context.Background(), ratePlanCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).PackageCode(packageCode).PackageGroup(packageGroup).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RatePlanAPI.DeleteRatePlanPackages``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteRatePlanPackages`: Status
    fmt.Fprintf(os.Stdout, "Response from `RatePlanAPI.DeleteRatePlanPackages`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**ratePlanCode** | **string** | Rate Plan Code. | 
**hotelId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteRatePlanPackagesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **packageCode** | **[]string** | Configuration code. | 
 **packageGroup** | **[]string** | Configuration code. | 
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


## DeleteRatePlanPostingRhythms

> Status DeleteRatePlanPostingRhythms(ctx, ratePlanCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Code(code).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete rate plan posting rhythms



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rtp"
)

func main() {
    ratePlanCode := "ratePlanCode_example" // string | Rate Plan Code.
    hotelId := "hotelId_example" // string | Unique ID that identifies a single hotel property.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    code := []string{"Inner_example"} // []string |  (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RatePlanAPI.DeleteRatePlanPostingRhythms(context.Background(), ratePlanCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Code(code).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RatePlanAPI.DeleteRatePlanPostingRhythms``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteRatePlanPostingRhythms`: Status
    fmt.Fprintf(os.Stdout, "Response from `RatePlanAPI.DeleteRatePlanPostingRhythms`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**ratePlanCode** | **string** | Rate Plan Code. | 
**hotelId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteRatePlanPostingRhythmsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **code** | **[]string** |  | 
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


## DeleteRatePlanSchedules

> Status DeleteRatePlanSchedules(ctx, ratePlanCode, hotelId).RatePlanScheduleIds(ratePlanScheduleIds).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TierID(tierID).SeasonCode(seasonCode).Start(start).End(end).RoomType(roomType).Sunday(sunday).Monday(monday).Tuesday(tuesday).Wednesday(wednesday).Thursday(thursday).Friday(friday).Saturday(saturday).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete rate plan schedule



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/rtp"
)

func main() {
    ratePlanCode := "ratePlanCode_example" // string | Rate Plan Code.
    hotelId := "hotelId_example" // string | Unique ID that identifies a single hotel property.
    ratePlanScheduleIds := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    tierID := int32(56) // int32 | Tier that the rate plan schedule belongs to. (optional)
    seasonCode := "seasonCode_example" // string | Season code attached to the rate plan schedule that defines the start and end dates. When creating a rate plan schedule, if a season code is provided the start and end dates will be ignored. These values will be pulled from the season code record. (optional)
    start := time.Now() // string | The starting value of the date range. (optional)
    end := time.Now() // string | The ending value of the date range. (optional)
    roomType := []string{"Inner_example"} // []string | List of room types that are for the rate plan schedule. (optional)
    sunday := true // bool | Day Of The Week Schedule Should Be Applicable. (optional)
    monday := true // bool | Day Of The Week Schedule Should Be Applicable. (optional)
    tuesday := true // bool | Day Of The Week Schedule Should Be Applicable. (optional)
    wednesday := true // bool | Day Of The Week Schedule Should Be Applicable. (optional)
    thursday := true // bool | Day Of The Week Schedule Should Be Applicable. (optional)
    friday := true // bool | Day Of The Week Schedule Should Be Applicable. (optional)
    saturday := true // bool | Day Of The Week Schedule Should Be Applicable. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RatePlanAPI.DeleteRatePlanSchedules(context.Background(), ratePlanCode, hotelId).RatePlanScheduleIds(ratePlanScheduleIds).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TierID(tierID).SeasonCode(seasonCode).Start(start).End(end).RoomType(roomType).Sunday(sunday).Monday(monday).Tuesday(tuesday).Wednesday(wednesday).Thursday(thursday).Friday(friday).Saturday(saturday).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RatePlanAPI.DeleteRatePlanSchedules``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteRatePlanSchedules`: Status
    fmt.Fprintf(os.Stdout, "Response from `RatePlanAPI.DeleteRatePlanSchedules`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**ratePlanCode** | **string** | Rate Plan Code. | 
**hotelId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteRatePlanSchedulesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **ratePlanScheduleIds** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **tierID** | **int32** | Tier that the rate plan schedule belongs to. | 
 **seasonCode** | **string** | Season code attached to the rate plan schedule that defines the start and end dates. When creating a rate plan schedule, if a season code is provided the start and end dates will be ignored. These values will be pulled from the season code record. | 
 **start** | **string** | The starting value of the date range. | 
 **end** | **string** | The ending value of the date range. | 
 **roomType** | **[]string** | List of room types that are for the rate plan schedule. | 
 **sunday** | **bool** | Day Of The Week Schedule Should Be Applicable. | 
 **monday** | **bool** | Day Of The Week Schedule Should Be Applicable. | 
 **tuesday** | **bool** | Day Of The Week Schedule Should Be Applicable. | 
 **wednesday** | **bool** | Day Of The Week Schedule Should Be Applicable. | 
 **thursday** | **bool** | Day Of The Week Schedule Should Be Applicable. | 
 **friday** | **bool** | Day Of The Week Schedule Should Be Applicable. | 
 **saturday** | **bool** | Day Of The Week Schedule Should Be Applicable. | 
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


## DeleteRateStrategy

> Status DeleteRateStrategy(ctx, rateStrategyId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete rate strategies



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rtp"
)

func main() {
    rateStrategyId := "rateStrategyId_example" // string | Strategy Id
    hotelId := "hotelId_example" // string | Unique ID that identifies a single hotel property.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RatePlanAPI.DeleteRateStrategy(context.Background(), rateStrategyId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RatePlanAPI.DeleteRateStrategy``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteRateStrategy`: Status
    fmt.Fprintf(os.Stdout, "Response from `RatePlanAPI.DeleteRateStrategy`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**rateStrategyId** | **string** | Strategy Id | 
**hotelId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteRateStrategyRequest struct via the builder pattern


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


## DeleteTemplatePackageForecastGroups

> Status DeleteTemplatePackageForecastGroups(ctx, packageForecastGroupCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete Template Package Forecast Groups



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rtp"
)

func main() {
    packageForecastGroupCode := "packageForecastGroupCode_example" // string | Code.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RatePlanAPI.DeleteTemplatePackageForecastGroups(context.Background(), packageForecastGroupCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RatePlanAPI.DeleteTemplatePackageForecastGroups``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteTemplatePackageForecastGroups`: Status
    fmt.Fprintf(os.Stdout, "Response from `RatePlanAPI.DeleteTemplatePackageForecastGroups`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**packageForecastGroupCode** | **string** | Code. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteTemplatePackageForecastGroupsRequest struct via the builder pattern


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


## DistributeNegotiatedRates

> Status DistributeNegotiatedRates(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).DistributedNegotiatedRates(distributedNegotiatedRates).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Distribute negotiated rates



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rtp"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID that identifies a single hotel property.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    distributedNegotiatedRates := *openapiclient.NewDistributedNegotiatedRates() // DistributedNegotiatedRates | Request object for distribute negotiated rates. This object contains a list of negotiated rates that are to be distributed and a list of properties to which to distribute to.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RatePlanAPI.DistributeNegotiatedRates(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).DistributedNegotiatedRates(distributedNegotiatedRates).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RatePlanAPI.DistributeNegotiatedRates``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DistributeNegotiatedRates`: Status
    fmt.Fprintf(os.Stdout, "Response from `RatePlanAPI.DistributeNegotiatedRates`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDistributeNegotiatedRatesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **distributedNegotiatedRates** | [**DistributedNegotiatedRates**](DistributedNegotiatedRates.md) | Request object for distribute negotiated rates. This object contains a list of negotiated rates that are to be distributed and a list of properties to which to distribute to. | 
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


## DownloadExternalRatePlan

> Status DownloadExternalRatePlan(ctx, ratePlanCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get external rate plan



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rtp"
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
    resp, r, err := apiClient.RatePlanAPI.DownloadExternalRatePlan(context.Background(), ratePlanCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RatePlanAPI.DownloadExternalRatePlan``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DownloadExternalRatePlan`: Status
    fmt.Fprintf(os.Stdout, "Response from `RatePlanAPI.DownloadExternalRatePlan`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**ratePlanCode** | **string** | Rate Plan Code. | 
**hotelId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDownloadExternalRatePlanRequest struct via the builder pattern


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


## GetBestAvailableRates

> GetBestAvailableRatesDetails GetBestAvailableRates(ctx, hotelId).StartDay(startDay).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).RateCode(rateCode).EndDay(endDay).DaysOfWeek(daysOfWeek).LengthOfStay(lengthOfStay).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Fetch Best Available Rates



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/rtp"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID that identifies a single hotel property.
    startDay := time.Now() // string | The starting value of the date range.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    offset := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional) (default to 0)
    rateCode := []string{"Inner_example"} // []string |  (optional)
    endDay := time.Now() // string | The ending value of the date range. (optional)
    daysOfWeek := []string{"DaysOfWeek_example"} // []string | Allowed values for the days of week type. (optional)
    lengthOfStay := []string{"LengthOfStay_example"} // []string | Allowed values for length stay type. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RatePlanAPI.GetBestAvailableRates(context.Background(), hotelId).StartDay(startDay).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).RateCode(rateCode).EndDay(endDay).DaysOfWeek(daysOfWeek).LengthOfStay(lengthOfStay).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RatePlanAPI.GetBestAvailableRates``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetBestAvailableRates`: GetBestAvailableRatesDetails
    fmt.Fprintf(os.Stdout, "Response from `RatePlanAPI.GetBestAvailableRates`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetBestAvailableRatesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **startDay** | **string** | The starting value of the date range. | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **offset** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [default to 0]
 **rateCode** | **[]string** |  | 
 **endDay** | **string** | The ending value of the date range. | 
 **daysOfWeek** | **[]string** | Allowed values for the days of week type. | 
 **lengthOfStay** | **[]string** | Allowed values for length stay type. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**GetBestAvailableRatesDetails**](GetBestAvailableRatesDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetHotelPackageForecastGroups

> HotelPackageForecastGroups GetHotelPackageForecastGroups(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelIds(hotelIds).Limit(limit).Offset(offset).PackageForecastGroupCodes(packageForecastGroupCodes).WildCard(wildCard).IncludeInactive(includeInactive).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Hotel Package Forecast Groups



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rtp"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID that identifies a single hotel property.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    hotelIds := []string{"Inner_example"} // []string | Hotel code. (optional)
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    offset := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional) (default to 0)
    packageForecastGroupCodes := []string{"Inner_example"} // []string | Codes to be searched. (optional)
    wildCard := "wildCard_example" // string | Wildcard search on the code. (optional)
    includeInactive := true // bool | Inactive flag - whether or not to display inactive records (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RatePlanAPI.GetHotelPackageForecastGroups(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelIds(hotelIds).Limit(limit).Offset(offset).PackageForecastGroupCodes(packageForecastGroupCodes).WildCard(wildCard).IncludeInactive(includeInactive).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RatePlanAPI.GetHotelPackageForecastGroups``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetHotelPackageForecastGroups`: HotelPackageForecastGroups
    fmt.Fprintf(os.Stdout, "Response from `RatePlanAPI.GetHotelPackageForecastGroups`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetHotelPackageForecastGroupsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **hotelIds** | **[]string** | Hotel code. | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **offset** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [default to 0]
 **packageForecastGroupCodes** | **[]string** | Codes to be searched. | 
 **wildCard** | **string** | Wildcard search on the code. | 
 **includeInactive** | **bool** | Inactive flag - whether or not to display inactive records | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**HotelPackageForecastGroups**](HotelPackageForecastGroups.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetMassRateChangeStatus

> MassRateChangeStatus GetMassRateChangeStatus(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).DetailStatus(detailStatus).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get mass rate change status



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rtp"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID that identifies a single hotel property.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    detailStatus := true // bool | Flag to indicate to include the update process details or not. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RatePlanAPI.GetMassRateChangeStatus(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).DetailStatus(detailStatus).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RatePlanAPI.GetMassRateChangeStatus``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetMassRateChangeStatus`: MassRateChangeStatus
    fmt.Fprintf(os.Stdout, "Response from `RatePlanAPI.GetMassRateChangeStatus`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetMassRateChangeStatusRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **detailStatus** | **bool** | Flag to indicate to include the update process details or not. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**MassRateChangeStatus**](MassRateChangeStatus.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetNegotiatedRates

> NegotiatedRates GetNegotiatedRates(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).StartDate(startDate).EndDate(endDate).IncludeInactiveNegotiatedRates(includeInactiveNegotiatedRates).FetchInstructionsLimit(fetchInstructionsLimit).FetchInstructions(fetchInstructions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get negotiated rates and profiles 



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/rtp"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID that identifies a single hotel property.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    startDate := time.Now() // string | Start Date. (optional)
    endDate := time.Now() // string | End Date. (optional)
    includeInactiveNegotiatedRates := true // bool | Inactive negotiated rates. (optional)
    fetchInstructionsLimit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    fetchInstructions := []string{"FetchInstructions_example"} // []string | Simple type for negotiated rates instructions that can be used in requests for partial operations. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RatePlanAPI.GetNegotiatedRates(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).StartDate(startDate).EndDate(endDate).IncludeInactiveNegotiatedRates(includeInactiveNegotiatedRates).FetchInstructionsLimit(fetchInstructionsLimit).FetchInstructions(fetchInstructions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RatePlanAPI.GetNegotiatedRates``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetNegotiatedRates`: NegotiatedRates
    fmt.Fprintf(os.Stdout, "Response from `RatePlanAPI.GetNegotiatedRates`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetNegotiatedRatesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **startDate** | **string** | Start Date. | 
 **endDate** | **string** | End Date. | 
 **includeInactiveNegotiatedRates** | **bool** | Inactive negotiated rates. | 
 **fetchInstructionsLimit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **fetchInstructions** | **[]string** | Simple type for negotiated rates instructions that can be used in requests for partial operations. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**NegotiatedRates**](NegotiatedRates.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetNegotiatedRatesForGivenHotelAndRate

> NegotiatedRates GetNegotiatedRatesForGivenHotelAndRate(ctx, rateCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).StartDate(startDate).EndDate(endDate).IncludeInactiveNegotiatedRates(includeInactiveNegotiatedRates).FetchInstructionsLimit(fetchInstructionsLimit).FetchInstructions(fetchInstructions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Fetch Negotiated Rates



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/rtp"
)

func main() {
    rateCode := "rateCode_example" // string | Rate Plan Code.
    hotelId := "hotelId_example" // string | Unique ID that identifies a single hotel property.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    startDate := time.Now() // string | Start Date. (optional)
    endDate := time.Now() // string | End Date. (optional)
    includeInactiveNegotiatedRates := true // bool | Inactive negotiated rates. (optional)
    fetchInstructionsLimit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    fetchInstructions := []string{"FetchInstructions_example"} // []string | Simple type for negotiated rates instructions that can be used in requests for partial operations. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RatePlanAPI.GetNegotiatedRatesForGivenHotelAndRate(context.Background(), rateCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).StartDate(startDate).EndDate(endDate).IncludeInactiveNegotiatedRates(includeInactiveNegotiatedRates).FetchInstructionsLimit(fetchInstructionsLimit).FetchInstructions(fetchInstructions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RatePlanAPI.GetNegotiatedRatesForGivenHotelAndRate``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetNegotiatedRatesForGivenHotelAndRate`: NegotiatedRates
    fmt.Fprintf(os.Stdout, "Response from `RatePlanAPI.GetNegotiatedRatesForGivenHotelAndRate`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**rateCode** | **string** | Rate Plan Code. | 
**hotelId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetNegotiatedRatesForGivenHotelAndRateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **startDate** | **string** | Start Date. | 
 **endDate** | **string** | End Date. | 
 **includeInactiveNegotiatedRates** | **bool** | Inactive negotiated rates. | 
 **fetchInstructionsLimit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **fetchInstructions** | **[]string** | Simple type for negotiated rates instructions that can be used in requests for partial operations. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**NegotiatedRates**](NegotiatedRates.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetNegotiatedRatesForGivenProfile

> NegotiatedRates GetNegotiatedRatesForGivenProfile(ctx, profileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).StartDate(startDate).EndDate(endDate).HotelCode(hotelCode).HotelCodes(hotelCodes).RatePlanCode(ratePlanCode).IncludeInactiveNegotiatedRates(includeInactiveNegotiatedRates).FetchInstructionsLimit(fetchInstructionsLimit).FetchInstructions(fetchInstructions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get negotiated rate details for given profile



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/rtp"
)

func main() {
    profileId := "profileId_example" // string | Unique ID that identifies a single hotel property.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    startDate := time.Now() // string | Start Date. (optional)
    endDate := time.Now() // string | End Date. (optional)
    hotelCode := "hotelCode_example" // string | Hotel code associated to the hotel (optional)
    hotelCodes := []string{"Inner_example"} // []string | Hotel code of negotiated rates to be searched. (optional)
    ratePlanCode := "ratePlanCode_example" // string | Rate Plan Code associated with the rate (optional)
    includeInactiveNegotiatedRates := true // bool | Inactive negotiated rates. (optional)
    fetchInstructionsLimit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    fetchInstructions := []string{"FetchInstructions_example"} // []string | Simple type for negotiated rates instructions that can be used in requests for partial operations. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RatePlanAPI.GetNegotiatedRatesForGivenProfile(context.Background(), profileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).StartDate(startDate).EndDate(endDate).HotelCode(hotelCode).HotelCodes(hotelCodes).RatePlanCode(ratePlanCode).IncludeInactiveNegotiatedRates(includeInactiveNegotiatedRates).FetchInstructionsLimit(fetchInstructionsLimit).FetchInstructions(fetchInstructions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RatePlanAPI.GetNegotiatedRatesForGivenProfile``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetNegotiatedRatesForGivenProfile`: NegotiatedRates
    fmt.Fprintf(os.Stdout, "Response from `RatePlanAPI.GetNegotiatedRatesForGivenProfile`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**profileId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetNegotiatedRatesForGivenProfileRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **startDate** | **string** | Start Date. | 
 **endDate** | **string** | End Date. | 
 **hotelCode** | **string** | Hotel code associated to the hotel | 
 **hotelCodes** | **[]string** | Hotel code of negotiated rates to be searched. | 
 **ratePlanCode** | **string** | Rate Plan Code associated with the rate | 
 **includeInactiveNegotiatedRates** | **bool** | Inactive negotiated rates. | 
 **fetchInstructionsLimit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **fetchInstructions** | **[]string** | Simple type for negotiated rates instructions that can be used in requests for partial operations. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**NegotiatedRates**](NegotiatedRates.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetPackage

> PackageInfo GetPackage(ctx, packageCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FetchInstructions(fetchInstructions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get package for given package



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rtp"
)

func main() {
    packageCode := "packageCode_example" // string | Package Code.
    hotelId := "hotelId_example" // string | Unique ID that identifies a single hotel property.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    fetchInstructions := []string{"FetchInstructions_example"} // []string | Simple type for package instructions that can be used in requests for partial operations. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RatePlanAPI.GetPackage(context.Background(), packageCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FetchInstructions(fetchInstructions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RatePlanAPI.GetPackage``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetPackage`: PackageInfo
    fmt.Fprintf(os.Stdout, "Response from `RatePlanAPI.GetPackage`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**packageCode** | **string** | Package Code. | 
**hotelId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetPackageRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **fetchInstructions** | **[]string** | Simple type for package instructions that can be used in requests for partial operations. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**PackageInfo**](PackageInfo.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetPackageFormulaRanges

> PackageFormulaRanges GetPackageFormulaRanges(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TaxRangeType(taxRangeType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get package formula ranges



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rtp"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID that identifies a single hotel property.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    taxRangeType := "taxRangeType_example" // string | Tax Range Type. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RatePlanAPI.GetPackageFormulaRanges(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TaxRangeType(taxRangeType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RatePlanAPI.GetPackageFormulaRanges``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetPackageFormulaRanges`: PackageFormulaRanges
    fmt.Fprintf(os.Stdout, "Response from `RatePlanAPI.GetPackageFormulaRanges`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetPackageFormulaRangesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **taxRangeType** | **string** | Tax Range Type. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**PackageFormulaRanges**](PackageFormulaRanges.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetPackageGroups

> PackageGroupsInfo GetPackageGroups(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelIds(hotelIds).Limit(limit).Code(code).DescriptionWildCard(descriptionWildCard).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get package groups



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rtp"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID that identifies a single hotel property.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    hotelIds := []string{"Inner_example"} // []string | Hotel code. (optional)
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    code := "code_example" // string | Package code or group to be searched. (optional)
    descriptionWildCard := "descriptionWildCard_example" // string | The description or a part of the description based on which results should be filtered. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RatePlanAPI.GetPackageGroups(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelIds(hotelIds).Limit(limit).Code(code).DescriptionWildCard(descriptionWildCard).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RatePlanAPI.GetPackageGroups``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetPackageGroups`: PackageGroupsInfo
    fmt.Fprintf(os.Stdout, "Response from `RatePlanAPI.GetPackageGroups`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetPackageGroupsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **hotelIds** | **[]string** | Hotel code. | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **code** | **string** | Package code or group to be searched. | 
 **descriptionWildCard** | **string** | The description or a part of the description based on which results should be filtered. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**PackageGroupsInfo**](PackageGroupsInfo.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetPackageRates

> PackageRates GetPackageRates(ctx, packageCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get package rates



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rtp"
)

func main() {
    packageCode := "packageCode_example" // string | Package Code.
    hotelId := "hotelId_example" // string | Unique ID that identifies a single hotel property.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RatePlanAPI.GetPackageRates(context.Background(), packageCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RatePlanAPI.GetPackageRates``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetPackageRates`: PackageRates
    fmt.Fprintf(os.Stdout, "Response from `RatePlanAPI.GetPackageRates`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**packageCode** | **string** | Package Code. | 
**hotelId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetPackageRatesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**PackageRates**](PackageRates.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetPackages

> PackagesInfo GetPackages(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).HotelId(hotelId).PackageCode(packageCode).DescriptionWildCard(descriptionWildCard).StartDate(startDate).EndDate(endDate).Adults(adults).Children(children).Bucket1Count(bucket1Count).Bucket2Count(bucket2Count).Bucket3Count(bucket3Count).Bucket4Count(bucket4Count).Bucket5Count(bucket5Count).IncludeGroup(includeGroup).SellSeparate(sellSeparate).TicketPostingRhythm(ticketPostingRhythm).ExcludeRedemptionPackages(excludeRedemptionPackages).FetchInstructions(fetchInstructions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Packages



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/rtp"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    hotelId := []string{"Inner_example"} // []string | Hotel code. (optional)
    packageCode := []string{"Inner_example"} // []string |  (optional)
    descriptionWildCard := "descriptionWildCard_example" // string | The description or a part of the description based on which results should be filtered. (optional)
    startDate := time.Now() // string | Start Date for pricing schedule. (optional)
    endDate := time.Now() // string | End Date for pricing schedule. (optional)
    adults := int32(56) // int32 | Number of adults for pricing schedule calculation. (optional)
    children := int32(56) // int32 | Number of children for pricing schedule calculation. (optional)
    bucket1Count := int32(56) // int32 | Number of children classified under the first Age Qualifying Group(Child Bucket#1). (optional)
    bucket2Count := int32(56) // int32 | Number of children classified under the second Age Qualifying Group(Child Bucket#2). (optional)
    bucket3Count := int32(56) // int32 | Number of children classified under the third Age Qualifying Group(Child Bucket#3). (optional)
    bucket4Count := int32(56) // int32 | Number of children classified under the fourth Age Qualifying Group(Child Bucket#4). (optional)
    bucket5Count := int32(56) // int32 | Number of children classified under the fifth Age Qualifying Group(Child Bucket#5). (optional)
    includeGroup := true // bool | Indicates if Group Packages will be fetched. (optional)
    sellSeparate := true // bool | Indicates if Only Sell Separate Packages will be fetched, if not specified, it will ignore the criteria. (optional)
    ticketPostingRhythm := true // bool | Indicates if Only Ticket Posting Rhythm will be fetched, if not specified, it will ignore the criteria. (optional)
    excludeRedemptionPackages := true // bool | Indicates if redemption packages must be excluded from the list. (optional)
    fetchInstructions := []string{"FetchInstructions_example"} // []string | Simple type for package instructions that can be used in requests for partial operations. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RatePlanAPI.GetPackages(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).HotelId(hotelId).PackageCode(packageCode).DescriptionWildCard(descriptionWildCard).StartDate(startDate).EndDate(endDate).Adults(adults).Children(children).Bucket1Count(bucket1Count).Bucket2Count(bucket2Count).Bucket3Count(bucket3Count).Bucket4Count(bucket4Count).Bucket5Count(bucket5Count).IncludeGroup(includeGroup).SellSeparate(sellSeparate).TicketPostingRhythm(ticketPostingRhythm).ExcludeRedemptionPackages(excludeRedemptionPackages).FetchInstructions(fetchInstructions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RatePlanAPI.GetPackages``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetPackages`: PackagesInfo
    fmt.Fprintf(os.Stdout, "Response from `RatePlanAPI.GetPackages`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetPackagesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **hotelId** | **[]string** | Hotel code. | 
 **packageCode** | **[]string** |  | 
 **descriptionWildCard** | **string** | The description or a part of the description based on which results should be filtered. | 
 **startDate** | **string** | Start Date for pricing schedule. | 
 **endDate** | **string** | End Date for pricing schedule. | 
 **adults** | **int32** | Number of adults for pricing schedule calculation. | 
 **children** | **int32** | Number of children for pricing schedule calculation. | 
 **bucket1Count** | **int32** | Number of children classified under the first Age Qualifying Group(Child Bucket#1). | 
 **bucket2Count** | **int32** | Number of children classified under the second Age Qualifying Group(Child Bucket#2). | 
 **bucket3Count** | **int32** | Number of children classified under the third Age Qualifying Group(Child Bucket#3). | 
 **bucket4Count** | **int32** | Number of children classified under the fourth Age Qualifying Group(Child Bucket#4). | 
 **bucket5Count** | **int32** | Number of children classified under the fifth Age Qualifying Group(Child Bucket#5). | 
 **includeGroup** | **bool** | Indicates if Group Packages will be fetched. | 
 **sellSeparate** | **bool** | Indicates if Only Sell Separate Packages will be fetched, if not specified, it will ignore the criteria. | 
 **ticketPostingRhythm** | **bool** | Indicates if Only Ticket Posting Rhythm will be fetched, if not specified, it will ignore the criteria. | 
 **excludeRedemptionPackages** | **bool** | Indicates if redemption packages must be excluded from the list. | 
 **fetchInstructions** | **[]string** | Simple type for package instructions that can be used in requests for partial operations. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**PackagesInfo**](PackagesInfo.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetPromotionCodes

> PropertyPromotionCodes GetPromotionCodes(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).PromotionCode(promotionCode).PromotionGroup(promotionGroup).RateCodes(rateCodes).Description(description).IncludeInactive(includeInactive).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get promotion codes



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rtp"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID that identifies a single hotel property.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    offset := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional) (default to 0)
    promotionCode := []string{"Inner_example"} // []string |  (optional)
    promotionGroup := []string{"Inner_example"} // []string |  (optional)
    rateCodes := "rateCodes_example" // string | Comma separated list of rates codes. This is used to filter the response and return only those promotion codes that are tied to any of these rate codes. (optional)
    description := "description_example" // string | Category Description of the promotion. (optional)
    includeInactive := true // bool | Indicates whether to include inactive promotions. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RatePlanAPI.GetPromotionCodes(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).PromotionCode(promotionCode).PromotionGroup(promotionGroup).RateCodes(rateCodes).Description(description).IncludeInactive(includeInactive).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RatePlanAPI.GetPromotionCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetPromotionCodes`: PropertyPromotionCodes
    fmt.Fprintf(os.Stdout, "Response from `RatePlanAPI.GetPromotionCodes`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetPromotionCodesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **offset** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [default to 0]
 **promotionCode** | **[]string** |  | 
 **promotionGroup** | **[]string** |  | 
 **rateCodes** | **string** | Comma separated list of rates codes. This is used to filter the response and return only those promotion codes that are tied to any of these rate codes. | 
 **description** | **string** | Category Description of the promotion. | 
 **includeInactive** | **bool** | Indicates whether to include inactive promotions. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**PropertyPromotionCodes**](PropertyPromotionCodes.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetPromotionGroups

> PromotionGroups GetPromotionGroups(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).Code(code).PromotionGroupListCode(promotionGroupListCode).RateCodes(rateCodes).Description(description).IncludeInactive(includeInactive).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get promotion groups



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rtp"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID that identifies a single hotel property.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    offset := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional) (default to 0)
    code := []string{"Inner_example"} // []string |  (optional)
    promotionGroupListCode := []string{"Inner_example"} // []string |  (optional)
    rateCodes := "rateCodes_example" // string | Comma separated list of rates codes. This is used to filter the response and return only those promotion codes that are tied to any of these rate codes. (optional)
    description := "description_example" // string | Category Description of the promotion. (optional)
    includeInactive := true // bool | Indicates whether to include inactive promotions. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RatePlanAPI.GetPromotionGroups(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).Code(code).PromotionGroupListCode(promotionGroupListCode).RateCodes(rateCodes).Description(description).IncludeInactive(includeInactive).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RatePlanAPI.GetPromotionGroups``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetPromotionGroups`: PromotionGroups
    fmt.Fprintf(os.Stdout, "Response from `RatePlanAPI.GetPromotionGroups`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetPromotionGroupsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **offset** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [default to 0]
 **code** | **[]string** |  | 
 **promotionGroupListCode** | **[]string** |  | 
 **rateCodes** | **string** | Comma separated list of rates codes. This is used to filter the response and return only those promotion codes that are tied to any of these rate codes. | 
 **description** | **string** | Category Description of the promotion. | 
 **includeInactive** | **bool** | Indicates whether to include inactive promotions. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**PromotionGroups**](PromotionGroups.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetRateActivityLog

> RateActivityLog GetRateActivityLog(ctx, hotelId).Module(module).ParameterName(parameterName).ParameterValue(parameterValue).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).ActivityGroup(activityGroup).ActivityType(activityType).FromDate(fromDate).ToDate(toDate).SearchText(searchText).UserId(userId).UserForIdsUserId(userForIdsUserId).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get rate activity log



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/rtp"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID that identifies a single hotel property.
    module := "module_example" // string | Activity module. (default to "RateCode")
    parameterName := []string{"Inner_example"} // []string | Name of the parameter.
    parameterValue := []string{"Inner_example"} // []string | Value of the parameter.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    offset := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional) (default to 0)
    activityGroup := "activityGroup_example" // string |  (optional)
    activityType := "activityType_example" // string |  (optional)
    fromDate := time.Now() // string | Search from date for the user activity log. (optional)
    toDate := time.Now() // string | Search to date for the user activity log. (optional)
    searchText := "searchText_example" // string | Search text for the user activity log. (optional)
    userId := []int32{int32(123)} // []int32 |  (optional)
    userForIdsUserId := []int32{int32(123)} // []int32 |  (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RatePlanAPI.GetRateActivityLog(context.Background(), hotelId).Module(module).ParameterName(parameterName).ParameterValue(parameterValue).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).ActivityGroup(activityGroup).ActivityType(activityType).FromDate(fromDate).ToDate(toDate).SearchText(searchText).UserId(userId).UserForIdsUserId(userForIdsUserId).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RatePlanAPI.GetRateActivityLog``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetRateActivityLog`: RateActivityLog
    fmt.Fprintf(os.Stdout, "Response from `RatePlanAPI.GetRateActivityLog`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetRateActivityLogRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **module** | **string** | Activity module. | [default to &quot;RateCode&quot;]
 **parameterName** | **[]string** | Name of the parameter. | 
 **parameterValue** | **[]string** | Value of the parameter. | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **offset** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [default to 0]
 **activityGroup** | **string** |  | 
 **activityType** | **string** |  | 
 **fromDate** | **string** | Search from date for the user activity log. | 
 **toDate** | **string** | Search to date for the user activity log. | 
 **searchText** | **string** | Search text for the user activity log. | 
 **userId** | **[]int32** |  | 
 **userForIdsUserId** | **[]int32** |  | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**RateActivityLog**](RateActivityLog.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetRateGroups

> RateGroupsInfo GetRateGroups(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).Code(code).WildCard(wildCard).Description(description).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get rate groups



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rtp"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID that identifies a single hotel property.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    offset := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional) (default to 0)
    code := []string{"Inner_example"} // []string | Codes to be searched. (optional)
    wildCard := "wildCard_example" // string | Wildcard search on the code. (optional)
    description := "description_example" // string | Rate Group Description. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RatePlanAPI.GetRateGroups(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).Code(code).WildCard(wildCard).Description(description).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RatePlanAPI.GetRateGroups``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetRateGroups`: RateGroupsInfo
    fmt.Fprintf(os.Stdout, "Response from `RatePlanAPI.GetRateGroups`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetRateGroupsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **offset** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [default to 0]
 **code** | **[]string** | Codes to be searched. | 
 **wildCard** | **string** | Wildcard search on the code. | 
 **description** | **string** | Rate Group Description. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**RateGroupsInfo**](RateGroupsInfo.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetRatePlan

> RatePlanInfo GetRatePlan(ctx, ratePlanCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FetchInstructions(fetchInstructions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get rate plan



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rtp"
)

func main() {
    ratePlanCode := "ratePlanCode_example" // string | Rate Plan Code.
    hotelId := "hotelId_example" // string | Unique ID that identifies a single hotel property.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    fetchInstructions := []string{"FetchInstructions_example"} // []string | Simple type for Rate plan codes instructions that can be used in requests for partial operations. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RatePlanAPI.GetRatePlan(context.Background(), ratePlanCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FetchInstructions(fetchInstructions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RatePlanAPI.GetRatePlan``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetRatePlan`: RatePlanInfo
    fmt.Fprintf(os.Stdout, "Response from `RatePlanAPI.GetRatePlan`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**ratePlanCode** | **string** | Rate Plan Code. | 
**hotelId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetRatePlanRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **fetchInstructions** | **[]string** | Simple type for Rate plan codes instructions that can be used in requests for partial operations. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**RatePlanInfo**](RatePlanInfo.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetRatePlanScheduleYieldAdjustments

> RatePlanScheduleYieldAdjustments GetRatePlanScheduleYieldAdjustments(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).SummaryInfo(summaryInfo).Id(id).RatePlanCode(ratePlanCode).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get rate plan schedule yield adjustments



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rtp"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID that identifies a single hotel property.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    summaryInfo := true // bool | When true response will return summary information otherwise detailed information. (optional)
    id := "id_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    ratePlanCode := "ratePlanCode_example" // string | Rate plan code. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RatePlanAPI.GetRatePlanScheduleYieldAdjustments(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).SummaryInfo(summaryInfo).Id(id).RatePlanCode(ratePlanCode).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RatePlanAPI.GetRatePlanScheduleYieldAdjustments``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetRatePlanScheduleYieldAdjustments`: RatePlanScheduleYieldAdjustments
    fmt.Fprintf(os.Stdout, "Response from `RatePlanAPI.GetRatePlanScheduleYieldAdjustments`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetRatePlanScheduleYieldAdjustmentsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **summaryInfo** | **bool** | When true response will return summary information otherwise detailed information. | 
 **id** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **ratePlanCode** | **string** | Rate plan code. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**RatePlanScheduleYieldAdjustments**](RatePlanScheduleYieldAdjustments.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetRatePlanSchedules

> RatePlanSchedulesInfo GetRatePlanSchedules(ctx, ratePlanCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ExcludeRatePlanPackage(excludeRatePlanPackage).Limit(limit).TierId(tierId).RatePlanScheduleId(ratePlanScheduleId).RatePlanScheduleIdType(ratePlanScheduleIdType).StartDate(startDate).EndDate(endDate).Duration(duration).RoomType(roomType).RoomClass(roomClass).IncludeInactive(includeInactive).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get rate plan schedules



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/rtp"
)

func main() {
    ratePlanCode := "ratePlanCode_example" // string | Rate Plan Code.
    hotelId := "hotelId_example" // string | Unique ID that identifies a single hotel property.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    excludeRatePlanPackage := true // bool | Exclude the List of Pricing Schedule Packages from the response. (optional)
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    tierId := int32(56) // int32 |  (optional)
    ratePlanScheduleId := "ratePlanScheduleId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    ratePlanScheduleIdType := "ratePlanScheduleIdType_example" // string | A reference to the type of object defined by the UniqueID element. Refer to OpenTravel Code List Unique ID Type (UIT). (optional)
    startDate := time.Now() // string |  (optional)
    endDate := time.Now() // string |  (optional)
    duration := "duration_example" // string |  (optional)
    roomType := []string{"Inner_example"} // []string | Room Type. (optional)
    roomClass := []string{"Inner_example"} // []string | Room Class. (optional)
    includeInactive := true // bool | Include inactive rate schedules in the fetch result. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RatePlanAPI.GetRatePlanSchedules(context.Background(), ratePlanCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ExcludeRatePlanPackage(excludeRatePlanPackage).Limit(limit).TierId(tierId).RatePlanScheduleId(ratePlanScheduleId).RatePlanScheduleIdType(ratePlanScheduleIdType).StartDate(startDate).EndDate(endDate).Duration(duration).RoomType(roomType).RoomClass(roomClass).IncludeInactive(includeInactive).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RatePlanAPI.GetRatePlanSchedules``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetRatePlanSchedules`: RatePlanSchedulesInfo
    fmt.Fprintf(os.Stdout, "Response from `RatePlanAPI.GetRatePlanSchedules`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**ratePlanCode** | **string** | Rate Plan Code. | 
**hotelId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetRatePlanSchedulesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **excludeRatePlanPackage** | **bool** | Exclude the List of Pricing Schedule Packages from the response. | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **tierId** | **int32** |  | 
 **ratePlanScheduleId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **ratePlanScheduleIdType** | **string** | A reference to the type of object defined by the UniqueID element. Refer to OpenTravel Code List Unique ID Type (UIT). | 
 **startDate** | **string** |  | 
 **endDate** | **string** |  | 
 **duration** | **string** |  | 
 **roomType** | **[]string** | Room Type. | 
 **roomClass** | **[]string** | Room Class. | 
 **includeInactive** | **bool** | Include inactive rate schedules in the fetch result. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**RatePlanSchedulesInfo**](RatePlanSchedulesInfo.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetRatePlans

> RatePlansSummary GetRatePlans(ctx).HotelId(hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).IncludeRateInformation(includeRateInformation).Limit(limit).Offset(offset).RatePlanCode(ratePlanCode).RateCategory(rateCategory).SellDate(sellDate).DisplaySet(displaySet).Id(id).IdExtension(idExtension).IdContext(idContext).Type_(type_).AttributeName(attributeName).OrderType(orderType).IncludeInactive(includeInactive).DayUseOnly(dayUseOnly).ApprovalStatus(approvalStatus).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get rate plans



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/rtp"
)

func main() {
    hotelId := []string{"Inner_example"} // []string | Hotel code.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    includeRateInformation := true // bool | Indicates whether rate plan short and long information should be included in the fetched results. (optional)
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    offset := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional) (default to 0)
    ratePlanCode := []string{"Inner_example"} // []string | Rate Plan code. (optional)
    rateCategory := []string{"Inner_example"} // []string | Rate category of the rate plan. (optional)
    sellDate := time.Now() // string | Sell date of the rate plan. (optional)
    displaySet := "displaySet_example" // string | Display set for the rate plan. (optional)
    id := "id_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    idExtension := int32(56) // int32 | Additional identifying value assigned by the creating system. (optional)
    idContext := "idContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    type_ := "type__example" // string | A reference to the type of object defined by the UniqueID element. Refer to OpenTravel Code List Unique ID Type (UIT). (optional)
    attributeName := []string{"Inner_example"} // []string |  (optional)
    orderType := []string{"OrderType_example"} // []string |  (optional)
    includeInactive := true // bool | Include or not include inactive rate codes. (optional)
    dayUseOnly := true // bool | Indicates to only fetch rate plans flagged as Day Use. (optional)
    approvalStatus := "approvalStatus_example" // string | Indicates that the Rate Plan is approved for selling. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RatePlanAPI.GetRatePlans(context.Background()).HotelId(hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).IncludeRateInformation(includeRateInformation).Limit(limit).Offset(offset).RatePlanCode(ratePlanCode).RateCategory(rateCategory).SellDate(sellDate).DisplaySet(displaySet).Id(id).IdExtension(idExtension).IdContext(idContext).Type_(type_).AttributeName(attributeName).OrderType(orderType).IncludeInactive(includeInactive).DayUseOnly(dayUseOnly).ApprovalStatus(approvalStatus).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RatePlanAPI.GetRatePlans``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetRatePlans`: RatePlansSummary
    fmt.Fprintf(os.Stdout, "Response from `RatePlanAPI.GetRatePlans`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetRatePlansRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hotelId** | **[]string** | Hotel code. | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **includeRateInformation** | **bool** | Indicates whether rate plan short and long information should be included in the fetched results. | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **offset** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [default to 0]
 **ratePlanCode** | **[]string** | Rate Plan code. | 
 **rateCategory** | **[]string** | Rate category of the rate plan. | 
 **sellDate** | **string** | Sell date of the rate plan. | 
 **displaySet** | **string** | Display set for the rate plan. | 
 **id** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **idExtension** | **int32** | Additional identifying value assigned by the creating system. | 
 **idContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **type_** | **string** | A reference to the type of object defined by the UniqueID element. Refer to OpenTravel Code List Unique ID Type (UIT). | 
 **attributeName** | **[]string** |  | 
 **orderType** | **[]string** |  | 
 **includeInactive** | **bool** | Include or not include inactive rate codes. | 
 **dayUseOnly** | **bool** | Indicates to only fetch rate plans flagged as Day Use. | 
 **approvalStatus** | **string** | Indicates that the Rate Plan is approved for selling. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**RatePlansSummary**](RatePlansSummary.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetRatePlansByHotel

> RatePlanInfo GetRatePlansByHotel(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RatePlanCode(ratePlanCode).FetchInstructions(fetchInstructions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get rate plans by Hotel Code



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rtp"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID that identifies a single hotel property.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    ratePlanCode := "ratePlanCode_example" // string | Rate plan code. (optional)
    fetchInstructions := []string{"FetchInstructions_example"} // []string | Simple type for Rate plan codes instructions that can be used in requests for partial operations. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RatePlanAPI.GetRatePlansByHotel(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RatePlanCode(ratePlanCode).FetchInstructions(fetchInstructions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RatePlanAPI.GetRatePlansByHotel``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetRatePlansByHotel`: RatePlanInfo
    fmt.Fprintf(os.Stdout, "Response from `RatePlanAPI.GetRatePlansByHotel`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetRatePlansByHotelRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **ratePlanCode** | **string** | Rate plan code. | 
 **fetchInstructions** | **[]string** | Simple type for Rate plan codes instructions that can be used in requests for partial operations. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**RatePlanInfo**](RatePlanInfo.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetRatePlansForBlock

> BlockRatePlans GetRatePlansForBlock(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RatePlanCode(ratePlanCode).BeginDate(beginDate).EndDate(endDate).CompanyId(companyId).CompanyIdType(companyIdType).SourceId(sourceId).SourceIdType(sourceIdType).AgentId(agentId).AgentIdType(agentIdType).NegotiatedOnly(negotiatedOnly).CurrencyCode(currencyCode).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get rate plans for a given block



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/rtp"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID that identifies a single hotel property.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    ratePlanCode := []string{"Inner_example"} // []string | Rate Plan code. (optional)
    beginDate := time.Now() // string | Start sell date of the rate code. (optional)
    endDate := time.Now() // string | End sell date of the rate code. (optional)
    companyId := "companyId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    companyIdType := "companyIdType_example" // string | A reference to the type of object defined by the UniqueID element. Refer to OpenTravel Code List Unique ID Type (UIT). (optional)
    sourceId := "sourceId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    sourceIdType := "sourceIdType_example" // string | A reference to the type of object defined by the UniqueID element. Refer to OpenTravel Code List Unique ID Type (UIT). (optional)
    agentId := "agentId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    agentIdType := "agentIdType_example" // string | A reference to the type of object defined by the UniqueID element. Refer to OpenTravel Code List Unique ID Type (UIT). (optional)
    negotiatedOnly := true // bool | Flag to indicate if negotiated rate codes to be fetched. (optional)
    currencyCode := "currencyCode_example" // string | Currency for the rate code to be fetched. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RatePlanAPI.GetRatePlansForBlock(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RatePlanCode(ratePlanCode).BeginDate(beginDate).EndDate(endDate).CompanyId(companyId).CompanyIdType(companyIdType).SourceId(sourceId).SourceIdType(sourceIdType).AgentId(agentId).AgentIdType(agentIdType).NegotiatedOnly(negotiatedOnly).CurrencyCode(currencyCode).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RatePlanAPI.GetRatePlansForBlock``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetRatePlansForBlock`: BlockRatePlans
    fmt.Fprintf(os.Stdout, "Response from `RatePlanAPI.GetRatePlansForBlock`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetRatePlansForBlockRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **ratePlanCode** | **[]string** | Rate Plan code. | 
 **beginDate** | **string** | Start sell date of the rate code. | 
 **endDate** | **string** | End sell date of the rate code. | 
 **companyId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **companyIdType** | **string** | A reference to the type of object defined by the UniqueID element. Refer to OpenTravel Code List Unique ID Type (UIT). | 
 **sourceId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **sourceIdType** | **string** | A reference to the type of object defined by the UniqueID element. Refer to OpenTravel Code List Unique ID Type (UIT). | 
 **agentId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **agentIdType** | **string** | A reference to the type of object defined by the UniqueID element. Refer to OpenTravel Code List Unique ID Type (UIT). | 
 **negotiatedOnly** | **bool** | Flag to indicate if negotiated rate codes to be fetched. | 
 **currencyCode** | **string** | Currency for the rate code to be fetched. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**BlockRatePlans**](BlockRatePlans.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetRateStrategies

> RateStrategies GetRateStrategies(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).RestrictionDate(restrictionDate).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get rate strategies



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/rtp"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID that identifies a single hotel property.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    offset := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional) (default to 0)
    restrictionDate := time.Now() // string | search Rate Strategies with this restriction date. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RatePlanAPI.GetRateStrategies(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).RestrictionDate(restrictionDate).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RatePlanAPI.GetRateStrategies``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetRateStrategies`: RateStrategies
    fmt.Fprintf(os.Stdout, "Response from `RatePlanAPI.GetRateStrategies`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetRateStrategiesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **offset** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [default to 0]
 **restrictionDate** | **string** | search Rate Strategies with this restriction date. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**RateStrategies**](RateStrategies.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetTemplatePackageForecastGroups

> TemplatePackageForecastGroups GetTemplatePackageForecastGroups(ctx).IncludeInactive(includeInactive).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).PackageForecastGroupCode(packageForecastGroupCode).WildCard(wildCard).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Template Package Forecast Groups



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rtp"
)

func main() {
    includeInactive := true // bool | Inactive flag - whether or not to display inactive records (default to false)
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    packageForecastGroupCode := []string{"Inner_example"} // []string | Codes to be searched. (optional)
    wildCard := "wildCard_example" // string | Wildcard search on the code. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RatePlanAPI.GetTemplatePackageForecastGroups(context.Background()).IncludeInactive(includeInactive).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).PackageForecastGroupCode(packageForecastGroupCode).WildCard(wildCard).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RatePlanAPI.GetTemplatePackageForecastGroups``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetTemplatePackageForecastGroups`: TemplatePackageForecastGroups
    fmt.Fprintf(os.Stdout, "Response from `RatePlanAPI.GetTemplatePackageForecastGroups`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetTemplatePackageForecastGroupsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **includeInactive** | **bool** | Inactive flag - whether or not to display inactive records | [default to false]
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **packageForecastGroupCode** | **[]string** | Codes to be searched. | 
 **wildCard** | **string** | Wildcard search on the code. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**TemplatePackageForecastGroups**](TemplatePackageForecastGroups.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetTemplatePromotionCodes

> TemplatePromotionCodes GetTemplatePromotionCodes(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).HotelId(hotelId).PromotionCode(promotionCode).PromotionGroup(promotionGroup).RateCodes(rateCodes).Description(description).IncludeInactive(includeInactive).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Template Promotion Codes



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rtp"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    offset := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional) (default to 0)
    hotelId := []string{"Inner_example"} // []string | Hotel code. (optional)
    promotionCode := []string{"Inner_example"} // []string |  (optional)
    promotionGroup := []string{"Inner_example"} // []string |  (optional)
    rateCodes := "rateCodes_example" // string | Comma separated list of rates codes. This is used to filter the response and return only those promotion codes that are tied to any of these rate codes. (optional)
    description := "description_example" // string | Category Description of the promotion. (optional)
    includeInactive := true // bool | Indicates whether to include inactive promotions. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RatePlanAPI.GetTemplatePromotionCodes(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).HotelId(hotelId).PromotionCode(promotionCode).PromotionGroup(promotionGroup).RateCodes(rateCodes).Description(description).IncludeInactive(includeInactive).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RatePlanAPI.GetTemplatePromotionCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetTemplatePromotionCodes`: TemplatePromotionCodes
    fmt.Fprintf(os.Stdout, "Response from `RatePlanAPI.GetTemplatePromotionCodes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetTemplatePromotionCodesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **offset** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [default to 0]
 **hotelId** | **[]string** | Hotel code. | 
 **promotionCode** | **[]string** |  | 
 **promotionGroup** | **[]string** |  | 
 **rateCodes** | **string** | Comma separated list of rates codes. This is used to filter the response and return only those promotion codes that are tied to any of these rate codes. | 
 **description** | **string** | Category Description of the promotion. | 
 **includeInactive** | **bool** | Indicates whether to include inactive promotions. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**TemplatePromotionCodes**](TemplatePromotionCodes.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetYieldAdjustments

> YieldAdjustments GetYieldAdjustments(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).CurrencyCode(currencyCode).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get yield adjustments



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rtp"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID that identifies a single hotel property.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    currencyCode := "currencyCode_example" // string | fetch adjustment codes attached to this Currency code. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RatePlanAPI.GetYieldAdjustments(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).CurrencyCode(currencyCode).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RatePlanAPI.GetYieldAdjustments``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetYieldAdjustments`: YieldAdjustments
    fmt.Fprintf(os.Stdout, "Response from `RatePlanAPI.GetYieldAdjustments`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetYieldAdjustmentsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **currencyCode** | **string** | fetch adjustment codes attached to this Currency code. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**YieldAdjustments**](YieldAdjustments.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ManageRatePlansSchedules

> Status ManageRatePlansSchedules(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RatePlansSchedulesToManage(ratePlansSchedulesToManage).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Manages rate plan schedules



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rtp"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    ratePlansSchedulesToManage := *openapiclient.NewRatePlansSchedulesToManage() // RatePlansSchedulesToManage | Request object to create/change/delete rate plans schedules.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RatePlanAPI.ManageRatePlansSchedules(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RatePlansSchedulesToManage(ratePlansSchedulesToManage).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RatePlanAPI.ManageRatePlansSchedules``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ManageRatePlansSchedules`: Status
    fmt.Fprintf(os.Stdout, "Response from `RatePlanAPI.ManageRatePlansSchedules`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiManageRatePlansSchedulesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **ratePlansSchedulesToManage** | [**RatePlansSchedulesToManage**](RatePlansSchedulesToManage.md) | Request object to create/change/delete rate plans schedules. | 
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


## PostBestAvailableRates

> Status PostBestAvailableRates(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CreateBestAvailableRates(createBestAvailableRates).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create a Best Available Rates



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rtp"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID that identifies a single hotel property.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    createBestAvailableRates := *openapiclient.NewCreateBestAvailableRates() // CreateBestAvailableRates | Request to create best available rates for rate code(s)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RatePlanAPI.PostBestAvailableRates(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CreateBestAvailableRates(createBestAvailableRates).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RatePlanAPI.PostBestAvailableRates``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostBestAvailableRates`: Status
    fmt.Fprintf(os.Stdout, "Response from `RatePlanAPI.PostBestAvailableRates`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostBestAvailableRatesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **createBestAvailableRates** | [**CreateBestAvailableRates**](CreateBestAvailableRates.md) | Request to create best available rates for rate code(s) | 
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


## PostHotelPackageForecastGroups

> Status PostHotelPackageForecastGroups(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelPackageForecastGroupsToCreate(hotelPackageForecastGroupsToCreate).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create Hotel Package Forecast Groups



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rtp"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID that identifies a single hotel property.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    hotelPackageForecastGroupsToCreate := *openapiclient.NewHotelPackageForecastGroupsToCreate() // HotelPackageForecastGroupsToCreate | Request object for creating new package forecast groups for a hotel.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RatePlanAPI.PostHotelPackageForecastGroups(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelPackageForecastGroupsToCreate(hotelPackageForecastGroupsToCreate).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RatePlanAPI.PostHotelPackageForecastGroups``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostHotelPackageForecastGroups`: Status
    fmt.Fprintf(os.Stdout, "Response from `RatePlanAPI.PostHotelPackageForecastGroups`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostHotelPackageForecastGroupsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **hotelPackageForecastGroupsToCreate** | [**HotelPackageForecastGroupsToCreate**](HotelPackageForecastGroupsToCreate.md) | Request object for creating new package forecast groups for a hotel. | 
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


## PostNegotiatedRates

> Status PostNegotiatedRates(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).NegotiatedRates(negotiatedRates).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create negotiated rates 



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rtp"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID that identifies a single hotel property.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    negotiatedRates := *openapiclient.NewNegotiatedRates() // NegotiatedRates | Request object for creating negotiated rates. Also this object creates new profile discounts for given negotiated rates.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RatePlanAPI.PostNegotiatedRates(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).NegotiatedRates(negotiatedRates).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RatePlanAPI.PostNegotiatedRates``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostNegotiatedRates`: Status
    fmt.Fprintf(os.Stdout, "Response from `RatePlanAPI.PostNegotiatedRates`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostNegotiatedRatesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **negotiatedRates** | [**NegotiatedRates**](NegotiatedRates.md) | Request object for creating negotiated rates. Also this object creates new profile discounts for given negotiated rates. | 
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


## PostPackage

> Status PostPackage(ctx, packageCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).PackageInfo(packageInfo).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create package



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rtp"
)

func main() {
    packageCode := "packageCode_example" // string | Package Code.
    hotelId := "hotelId_example" // string | Unique ID that identifies a single hotel property.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    packageInfo := *openapiclient.NewPackageInfo() // PackageInfo | Request object to create a package.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RatePlanAPI.PostPackage(context.Background(), packageCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).PackageInfo(packageInfo).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RatePlanAPI.PostPackage``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostPackage`: Status
    fmt.Fprintf(os.Stdout, "Response from `RatePlanAPI.PostPackage`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**packageCode** | **string** | Package Code. | 
**hotelId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostPackageRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **packageInfo** | [**PackageInfo**](PackageInfo.md) | Request object to create a package. | 
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


## PostPackageFormulaRanges

> Status PostPackageFormulaRanges(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).PackageFormulaRanges(packageFormulaRanges).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create package formula ranges



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rtp"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID that identifies a single hotel property.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    packageFormulaRanges := *openapiclient.NewPackageFormulaRanges() // PackageFormulaRanges | Request to create a new package formula range
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RatePlanAPI.PostPackageFormulaRanges(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).PackageFormulaRanges(packageFormulaRanges).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RatePlanAPI.PostPackageFormulaRanges``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostPackageFormulaRanges`: Status
    fmt.Fprintf(os.Stdout, "Response from `RatePlanAPI.PostPackageFormulaRanges`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostPackageFormulaRangesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **packageFormulaRanges** | [**PackageFormulaRanges**](PackageFormulaRanges.md) | Request to create a new package formula range | 
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


## PostPackageGroup

> Status PostPackageGroup(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).PackageGroup(packageGroup).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create package group



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rtp"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID that identifies a single hotel property.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    packageGroup := *openapiclient.NewPackageGroup() // PackageGroup | 
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RatePlanAPI.PostPackageGroup(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).PackageGroup(packageGroup).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RatePlanAPI.PostPackageGroup``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostPackageGroup`: Status
    fmt.Fprintf(os.Stdout, "Response from `RatePlanAPI.PostPackageGroup`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostPackageGroupRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **packageGroup** | [**PackageGroup**](PackageGroup.md) |  | 
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


## PostPromotionCode

> Status PostPromotionCode(ctx, promotionCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).PropertyPromotionCode(propertyPromotionCode).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create promotion codes



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rtp"
)

func main() {
    promotionCode := "promotionCode_example" // string | Promotion Code.
    hotelId := "hotelId_example" // string | Unique ID that identifies a single hotel property.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    propertyPromotionCode := *openapiclient.NewPropertyPromotionCode() // PropertyPromotionCode | 
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RatePlanAPI.PostPromotionCode(context.Background(), promotionCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).PropertyPromotionCode(propertyPromotionCode).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RatePlanAPI.PostPromotionCode``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostPromotionCode`: Status
    fmt.Fprintf(os.Stdout, "Response from `RatePlanAPI.PostPromotionCode`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**promotionCode** | **string** | Promotion Code. | 
**hotelId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostPromotionCodeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **propertyPromotionCode** | [**PropertyPromotionCode**](PropertyPromotionCode.md) |  | 
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


## PostPromotionGroup

> Status PostPromotionGroup(ctx, groupCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).PromotionGroup(promotionGroup).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create promotion groups



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rtp"
)

func main() {
    groupCode := "groupCode_example" // string | Promotion Group Code.
    hotelId := "hotelId_example" // string | Unique ID that identifies a single hotel property.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    promotionGroup := *openapiclient.NewPromotionGroup() // PromotionGroup | 
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RatePlanAPI.PostPromotionGroup(context.Background(), groupCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).PromotionGroup(promotionGroup).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RatePlanAPI.PostPromotionGroup``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostPromotionGroup`: Status
    fmt.Fprintf(os.Stdout, "Response from `RatePlanAPI.PostPromotionGroup`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**groupCode** | **string** | Promotion Group Code. | 
**hotelId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostPromotionGroupRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **promotionGroup** | [**PromotionGroup**](PromotionGroup.md) |  | 
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


## PostRateGroups

> Status PostRateGroups(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RateGroups(rateGroups).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create rate groups



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rtp"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID that identifies a single hotel property.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    rateGroups := *openapiclient.NewRateGroups() // RateGroups | 
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RatePlanAPI.PostRateGroups(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RateGroups(rateGroups).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RatePlanAPI.PostRateGroups``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostRateGroups`: Status
    fmt.Fprintf(os.Stdout, "Response from `RatePlanAPI.PostRateGroups`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostRateGroupsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **rateGroups** | [**RateGroups**](RateGroups.md) |  | 
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


## PostRatePlan

> Status PostRatePlan(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RatePlan(ratePlan).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create rate plans



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rtp"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID that identifies a single hotel property.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    ratePlan := *openapiclient.NewRatePlan() // RatePlan | Request object to create rate plan.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RatePlanAPI.PostRatePlan(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RatePlan(ratePlan).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RatePlanAPI.PostRatePlan``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostRatePlan`: Status
    fmt.Fprintf(os.Stdout, "Response from `RatePlanAPI.PostRatePlan`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostRatePlanRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **ratePlan** | [**RatePlan**](RatePlan.md) | Request object to create rate plan. | 
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


## PostRatePlanPackages

> Status PostRatePlanPackages(ctx, ratePlanCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RatePlanPackages(ratePlanPackages).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create rate plan package



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rtp"
)

func main() {
    ratePlanCode := "ratePlanCode_example" // string | Rate Plan Code.
    hotelId := "hotelId_example" // string | Unique ID that identifies a single hotel property.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    ratePlanPackages := *openapiclient.NewRatePlanPackages() // RatePlanPackages | Request object to attach package codes and package groups to a rate plan.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RatePlanAPI.PostRatePlanPackages(context.Background(), ratePlanCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RatePlanPackages(ratePlanPackages).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RatePlanAPI.PostRatePlanPackages``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostRatePlanPackages`: Status
    fmt.Fprintf(os.Stdout, "Response from `RatePlanAPI.PostRatePlanPackages`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**ratePlanCode** | **string** | Rate Plan Code. | 
**hotelId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostRatePlanPackagesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **ratePlanPackages** | [**RatePlanPackages**](RatePlanPackages.md) | Request object to attach package codes and package groups to a rate plan. | 
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


## PostRatePlanPostingRhythms

> Status PostRatePlanPostingRhythms(ctx, ratePlanCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RatePlanPostingRhythms(ratePlanPostingRhythms).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create rate plan posting rhythms



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rtp"
)

func main() {
    ratePlanCode := "ratePlanCode_example" // string | Rate Plan Code.
    hotelId := "hotelId_example" // string | Unique ID that identifies a single hotel property.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    ratePlanPostingRhythms := *openapiclient.NewRatePlanPostingRhythms() // RatePlanPostingRhythms | Request object for creating new rate plan advanced posting rhythms.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RatePlanAPI.PostRatePlanPostingRhythms(context.Background(), ratePlanCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RatePlanPostingRhythms(ratePlanPostingRhythms).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RatePlanAPI.PostRatePlanPostingRhythms``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostRatePlanPostingRhythms`: Status
    fmt.Fprintf(os.Stdout, "Response from `RatePlanAPI.PostRatePlanPostingRhythms`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**ratePlanCode** | **string** | Rate Plan Code. | 
**hotelId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostRatePlanPostingRhythmsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **ratePlanPostingRhythms** | [**RatePlanPostingRhythms**](RatePlanPostingRhythms.md) | Request object for creating new rate plan advanced posting rhythms. | 
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


## PostRatePlanSchedules

> Status PostRatePlanSchedules(ctx, ratePlanCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RatePlanSchedulesToCreate(ratePlanSchedulesToCreate).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create rate plan schedules



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rtp"
)

func main() {
    ratePlanCode := "ratePlanCode_example" // string | Rate Plan Code.
    hotelId := "hotelId_example" // string | Unique ID that identifies a single hotel property.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    ratePlanSchedulesToCreate := *openapiclient.NewRatePlanSchedulesToCreate() // RatePlanSchedulesToCreate | Request object to create rate plan schedules.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RatePlanAPI.PostRatePlanSchedules(context.Background(), ratePlanCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RatePlanSchedulesToCreate(ratePlanSchedulesToCreate).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RatePlanAPI.PostRatePlanSchedules``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostRatePlanSchedules`: Status
    fmt.Fprintf(os.Stdout, "Response from `RatePlanAPI.PostRatePlanSchedules`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**ratePlanCode** | **string** | Rate Plan Code. | 
**hotelId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostRatePlanSchedulesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **ratePlanSchedulesToCreate** | [**RatePlanSchedulesToCreate**](RatePlanSchedulesToCreate.md) | Request object to create rate plan schedules. | 
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


## PostRateStrategy

> Status PostRateStrategy(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RateStrategy(rateStrategy).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create rate strategies



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rtp"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID that identifies a single hotel property.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    rateStrategy := *openapiclient.NewRateStrategy() // RateStrategy | Request object for Creating a new Rate Strategy.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RatePlanAPI.PostRateStrategy(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RateStrategy(rateStrategy).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RatePlanAPI.PostRateStrategy``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostRateStrategy`: Status
    fmt.Fprintf(os.Stdout, "Response from `RatePlanAPI.PostRateStrategy`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostRateStrategyRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **rateStrategy** | [**RateStrategy**](RateStrategy.md) | Request object for Creating a new Rate Strategy. | 
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


## PostTemplatePackageForecastGroups

> Status PostTemplatePackageForecastGroups(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TemplatePackageForecastGroups(templatePackageForecastGroups).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create Template Package Forecast Groups



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rtp"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    templatePackageForecastGroups := *openapiclient.NewTemplatePackageForecastGroups() // TemplatePackageForecastGroups | Request object for creating new template package forecast groups.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RatePlanAPI.PostTemplatePackageForecastGroups(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TemplatePackageForecastGroups(templatePackageForecastGroups).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RatePlanAPI.PostTemplatePackageForecastGroups``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostTemplatePackageForecastGroups`: Status
    fmt.Fprintf(os.Stdout, "Response from `RatePlanAPI.PostTemplatePackageForecastGroups`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostTemplatePackageForecastGroupsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **templatePackageForecastGroups** | [**TemplatePackageForecastGroups**](TemplatePackageForecastGroups.md) | Request object for creating new template package forecast groups. | 
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


## PostTemplatePromotionCode

> Status PostTemplatePromotionCode(ctx, promotionCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TemplatePromotionCode(templatePromotionCode).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create Template Promotion Code



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rtp"
)

func main() {
    promotionCode := "promotionCode_example" // string | Promotion Code.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    templatePromotionCode := *openapiclient.NewTemplatePromotionCode() // TemplatePromotionCode | 
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RatePlanAPI.PostTemplatePromotionCode(context.Background(), promotionCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TemplatePromotionCode(templatePromotionCode).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RatePlanAPI.PostTemplatePromotionCode``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostTemplatePromotionCode`: Status
    fmt.Fprintf(os.Stdout, "Response from `RatePlanAPI.PostTemplatePromotionCode`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**promotionCode** | **string** | Promotion Code. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostTemplatePromotionCodeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **templatePromotionCode** | [**TemplatePromotionCode**](TemplatePromotionCode.md) |  | 
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


## PutHotelPackageForecastGroups

> Status PutHotelPackageForecastGroups(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelPackageForecastGroupsToChange(hotelPackageForecastGroupsToChange).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change Hotel Package Forecast Groups



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rtp"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID that identifies a single hotel property.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    hotelPackageForecastGroupsToChange := *openapiclient.NewHotelPackageForecastGroupsToChange() // HotelPackageForecastGroupsToChange | Request object for modifying package forecast groups for a hotel.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RatePlanAPI.PutHotelPackageForecastGroups(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelPackageForecastGroupsToChange(hotelPackageForecastGroupsToChange).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RatePlanAPI.PutHotelPackageForecastGroups``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutHotelPackageForecastGroups`: Status
    fmt.Fprintf(os.Stdout, "Response from `RatePlanAPI.PutHotelPackageForecastGroups`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutHotelPackageForecastGroupsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **hotelPackageForecastGroupsToChange** | [**HotelPackageForecastGroupsToChange**](HotelPackageForecastGroupsToChange.md) | Request object for modifying package forecast groups for a hotel. | 
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


## PutNegotiatedRates

> NegotiatedRatesDetails PutNegotiatedRates(ctx, rateCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).NegotiatedRates(negotiatedRates).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change negotiated rates 



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rtp"
)

func main() {
    rateCode := "rateCode_example" // string | Rate Plan Code.
    hotelId := "hotelId_example" // string | Unique ID that identifies a single hotel property.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    negotiatedRates := *openapiclient.NewNegotiatedRates() // NegotiatedRates | Request object for changing negotiated rates. This object can be used to manage the negotiated rates and profile discounts. Profile discounts can be created/updated/deleted.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RatePlanAPI.PutNegotiatedRates(context.Background(), rateCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).NegotiatedRates(negotiatedRates).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RatePlanAPI.PutNegotiatedRates``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutNegotiatedRates`: NegotiatedRatesDetails
    fmt.Fprintf(os.Stdout, "Response from `RatePlanAPI.PutNegotiatedRates`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**rateCode** | **string** | Rate Plan Code. | 
**hotelId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutNegotiatedRatesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **negotiatedRates** | [**NegotiatedRates**](NegotiatedRates.md) | Request object for changing negotiated rates. This object can be used to manage the negotiated rates and profile discounts. Profile discounts can be created/updated/deleted. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**NegotiatedRatesDetails**](NegotiatedRatesDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutPackage

> Status PutPackage(ctx, packageCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).PackageInfo(packageInfo).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change the package



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rtp"
)

func main() {
    packageCode := "packageCode_example" // string | Package Code.
    hotelId := "hotelId_example" // string | Unique ID that identifies a single hotel property.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    packageInfo := *openapiclient.NewPackageInfo() // PackageInfo | Request object to change a package details.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RatePlanAPI.PutPackage(context.Background(), packageCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).PackageInfo(packageInfo).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RatePlanAPI.PutPackage``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutPackage`: Status
    fmt.Fprintf(os.Stdout, "Response from `RatePlanAPI.PutPackage`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**packageCode** | **string** | Package Code. | 
**hotelId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutPackageRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **packageInfo** | [**PackageInfo**](PackageInfo.md) | Request object to change a package details. | 
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


## PutPackageFormulaRanges

> Status PutPackageFormulaRanges(ctx, packageFormulaRangeId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).PackageFormulaRanges(packageFormulaRanges).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change package formula ranges



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rtp"
)

func main() {
    packageFormulaRangeId := "packageFormulaRangeId_example" // string | Package Formula Range Id.
    hotelId := "hotelId_example" // string | Unique ID that identifies a single hotel property.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    packageFormulaRanges := *openapiclient.NewPackageFormulaRanges() // PackageFormulaRanges | Request to change and existing package formula ranges. The Property, Amount From, Amount To, Tax Amount, Interval Amount are the details that can be changed on an existing pacakage formula range.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RatePlanAPI.PutPackageFormulaRanges(context.Background(), packageFormulaRangeId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).PackageFormulaRanges(packageFormulaRanges).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RatePlanAPI.PutPackageFormulaRanges``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutPackageFormulaRanges`: Status
    fmt.Fprintf(os.Stdout, "Response from `RatePlanAPI.PutPackageFormulaRanges`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**packageFormulaRangeId** | **string** | Package Formula Range Id. | 
**hotelId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutPackageFormulaRangesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **packageFormulaRanges** | [**PackageFormulaRanges**](PackageFormulaRanges.md) | Request to change and existing package formula ranges. The Property, Amount From, Amount To, Tax Amount, Interval Amount are the details that can be changed on an existing pacakage formula range. | 
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


## PutPackageGroup

> Status PutPackageGroup(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).PackageGroup(packageGroup).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change package group



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rtp"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID that identifies a single hotel property.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    packageGroup := *openapiclient.NewPackageGroup() // PackageGroup | 
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RatePlanAPI.PutPackageGroup(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).PackageGroup(packageGroup).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RatePlanAPI.PutPackageGroup``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutPackageGroup`: Status
    fmt.Fprintf(os.Stdout, "Response from `RatePlanAPI.PutPackageGroup`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutPackageGroupRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **packageGroup** | [**PackageGroup**](PackageGroup.md) |  | 
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


## PutPromotionCode

> Status PutPromotionCode(ctx, promotionCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).PropertyPromotionCode(propertyPromotionCode).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change promotion codes



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rtp"
)

func main() {
    promotionCode := "promotionCode_example" // string | Promotion Code.
    hotelId := "hotelId_example" // string | Unique ID that identifies a single hotel property.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    propertyPromotionCode := *openapiclient.NewPropertyPromotionCode() // PropertyPromotionCode | 
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RatePlanAPI.PutPromotionCode(context.Background(), promotionCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).PropertyPromotionCode(propertyPromotionCode).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RatePlanAPI.PutPromotionCode``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutPromotionCode`: Status
    fmt.Fprintf(os.Stdout, "Response from `RatePlanAPI.PutPromotionCode`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**promotionCode** | **string** | Promotion Code. | 
**hotelId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutPromotionCodeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **propertyPromotionCode** | [**PropertyPromotionCode**](PropertyPromotionCode.md) |  | 
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


## PutPromotionGroup

> Status PutPromotionGroup(ctx, groupCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).PromotionGroup(promotionGroup).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change promotion groups



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rtp"
)

func main() {
    groupCode := "groupCode_example" // string | Promotion Group Code.
    hotelId := "hotelId_example" // string | Unique ID that identifies a single hotel property.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    promotionGroup := *openapiclient.NewPromotionGroup() // PromotionGroup | 
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RatePlanAPI.PutPromotionGroup(context.Background(), groupCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).PromotionGroup(promotionGroup).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RatePlanAPI.PutPromotionGroup``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutPromotionGroup`: Status
    fmt.Fprintf(os.Stdout, "Response from `RatePlanAPI.PutPromotionGroup`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**groupCode** | **string** | Promotion Group Code. | 
**hotelId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutPromotionGroupRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **promotionGroup** | [**PromotionGroup**](PromotionGroup.md) |  | 
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


## PutRateGroups

> Status PutRateGroups(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RateGroups(rateGroups).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change rate groups



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rtp"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID that identifies a single hotel property.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    rateGroups := *openapiclient.NewRateGroups() // RateGroups | 
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RatePlanAPI.PutRateGroups(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RateGroups(rateGroups).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RatePlanAPI.PutRateGroups``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutRateGroups`: Status
    fmt.Fprintf(os.Stdout, "Response from `RatePlanAPI.PutRateGroups`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutRateGroupsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **rateGroups** | [**RateGroups**](RateGroups.md) |  | 
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


## PutRatePlan

> Status PutRatePlan(ctx, ratePlanCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RatePlan(ratePlan).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change rate plan



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rtp"
)

func main() {
    ratePlanCode := "ratePlanCode_example" // string | Rate Plan Code.
    hotelId := "hotelId_example" // string | Unique ID that identifies a single hotel property.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    ratePlan := *openapiclient.NewRatePlan() // RatePlan | Request object to change rate plan.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RatePlanAPI.PutRatePlan(context.Background(), ratePlanCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RatePlan(ratePlan).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RatePlanAPI.PutRatePlan``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutRatePlan`: Status
    fmt.Fprintf(os.Stdout, "Response from `RatePlanAPI.PutRatePlan`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**ratePlanCode** | **string** | Rate Plan Code. | 
**hotelId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutRatePlanRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **ratePlan** | [**RatePlan**](RatePlan.md) | Request object to change rate plan. | 
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


## PutRatePlanPackages

> Status PutRatePlanPackages(ctx, ratePlanCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RatePlanPackages(ratePlanPackages).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change rate plan package



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rtp"
)

func main() {
    ratePlanCode := "ratePlanCode_example" // string | Rate Plan Code.
    hotelId := "hotelId_example" // string | Unique ID that identifies a single hotel property.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    ratePlanPackages := *openapiclient.NewRatePlanPackages() // RatePlanPackages | Request object to change package code and package group details when attached to a rate plan.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RatePlanAPI.PutRatePlanPackages(context.Background(), ratePlanCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RatePlanPackages(ratePlanPackages).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RatePlanAPI.PutRatePlanPackages``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutRatePlanPackages`: Status
    fmt.Fprintf(os.Stdout, "Response from `RatePlanAPI.PutRatePlanPackages`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**ratePlanCode** | **string** | Rate Plan Code. | 
**hotelId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutRatePlanPackagesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **ratePlanPackages** | [**RatePlanPackages**](RatePlanPackages.md) | Request object to change package code and package group details when attached to a rate plan. | 
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


## PutRatePlanPostingRhythms

> Status PutRatePlanPostingRhythms(ctx, ratePlanCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RatePlanPostingRhythms(ratePlanPostingRhythms).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change rate plan posting rhythms



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rtp"
)

func main() {
    ratePlanCode := "ratePlanCode_example" // string | Rate Plan Code.
    hotelId := "hotelId_example" // string | Unique ID that identifies a single hotel property.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    ratePlanPostingRhythms := *openapiclient.NewRatePlanPostingRhythms() // RatePlanPostingRhythms | Request object for changing existing rate plan advanced posting rhythms.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RatePlanAPI.PutRatePlanPostingRhythms(context.Background(), ratePlanCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RatePlanPostingRhythms(ratePlanPostingRhythms).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RatePlanAPI.PutRatePlanPostingRhythms``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutRatePlanPostingRhythms`: Status
    fmt.Fprintf(os.Stdout, "Response from `RatePlanAPI.PutRatePlanPostingRhythms`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**ratePlanCode** | **string** | Rate Plan Code. | 
**hotelId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutRatePlanPostingRhythmsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **ratePlanPostingRhythms** | [**RatePlanPostingRhythms**](RatePlanPostingRhythms.md) | Request object for changing existing rate plan advanced posting rhythms. | 
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


## PutRatePlanSchedules

> Status PutRatePlanSchedules(ctx, ratePlanCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RatePlanSchedules(ratePlanSchedules).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change rate plan schedules



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rtp"
)

func main() {
    ratePlanCode := "ratePlanCode_example" // string | Rate Plan Code.
    hotelId := "hotelId_example" // string | Unique ID that identifies a single hotel property.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    ratePlanSchedules := *openapiclient.NewRatePlanSchedules() // RatePlanSchedules | Request object to change rate plan schedules.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RatePlanAPI.PutRatePlanSchedules(context.Background(), ratePlanCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RatePlanSchedules(ratePlanSchedules).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RatePlanAPI.PutRatePlanSchedules``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutRatePlanSchedules`: Status
    fmt.Fprintf(os.Stdout, "Response from `RatePlanAPI.PutRatePlanSchedules`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**ratePlanCode** | **string** | Rate Plan Code. | 
**hotelId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutRatePlanSchedulesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **ratePlanSchedules** | [**RatePlanSchedules**](RatePlanSchedules.md) | Request object to change rate plan schedules. | 
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


## PutRateStrategy

> Status PutRateStrategy(ctx, rateStrategyId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RateStrategy(rateStrategy).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change rate strategies



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rtp"
)

func main() {
    rateStrategyId := "rateStrategyId_example" // string | Strategy Id
    hotelId := "hotelId_example" // string | Unique ID that identifies a single hotel property.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    rateStrategy := *openapiclient.NewRateStrategy() // RateStrategy | Request object for Modifying Rate Strategy.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RatePlanAPI.PutRateStrategy(context.Background(), rateStrategyId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RateStrategy(rateStrategy).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RatePlanAPI.PutRateStrategy``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutRateStrategy`: Status
    fmt.Fprintf(os.Stdout, "Response from `RatePlanAPI.PutRateStrategy`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**rateStrategyId** | **string** | Strategy Id | 
**hotelId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutRateStrategyRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **rateStrategy** | [**RateStrategy**](RateStrategy.md) | Request object for Modifying Rate Strategy. | 
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


## PutTemplatePackageForecastGroups

> Status PutTemplatePackageForecastGroups(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TemplatePackageForecastGroups(templatePackageForecastGroups).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change Template Package Forecast Groups



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rtp"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    templatePackageForecastGroups := *openapiclient.NewTemplatePackageForecastGroups() // TemplatePackageForecastGroups | Request object for modifying template package forecast groups.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RatePlanAPI.PutTemplatePackageForecastGroups(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TemplatePackageForecastGroups(templatePackageForecastGroups).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RatePlanAPI.PutTemplatePackageForecastGroups``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutTemplatePackageForecastGroups`: Status
    fmt.Fprintf(os.Stdout, "Response from `RatePlanAPI.PutTemplatePackageForecastGroups`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPutTemplatePackageForecastGroupsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **templatePackageForecastGroups** | [**TemplatePackageForecastGroups**](TemplatePackageForecastGroups.md) | Request object for modifying template package forecast groups. | 
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


## PutTemplatePromotionCode

> Status PutTemplatePromotionCode(ctx, promotionCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TemplatePromotionCode(templatePromotionCode).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change Template Promotion Code



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rtp"
)

func main() {
    promotionCode := "promotionCode_example" // string | Promotion Code.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    templatePromotionCode := *openapiclient.NewTemplatePromotionCode() // TemplatePromotionCode | 
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RatePlanAPI.PutTemplatePromotionCode(context.Background(), promotionCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TemplatePromotionCode(templatePromotionCode).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RatePlanAPI.PutTemplatePromotionCode``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutTemplatePromotionCode`: Status
    fmt.Fprintf(os.Stdout, "Response from `RatePlanAPI.PutTemplatePromotionCode`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**promotionCode** | **string** | Promotion Code. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutTemplatePromotionCodeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **templatePromotionCode** | [**TemplatePromotionCode**](TemplatePromotionCode.md) |  | 
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


## SetDailyRatePlanScheduleRange

> Status SetDailyRatePlanScheduleRange(ctx, ratePlanCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).DailyRatePlanScheduleRange(dailyRatePlanScheduleRange).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Set daily rate plan schedule range



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rtp"
)

func main() {
    ratePlanCode := "ratePlanCode_example" // string | Rate Plan Code.
    hotelId := "hotelId_example" // string | Unique ID that identifies a single hotel property.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    dailyRatePlanScheduleRange := *openapiclient.NewDailyRatePlanScheduleRange() // DailyRatePlanScheduleRange | A Request message that sets the rate plan schedules for daily rates as a range.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RatePlanAPI.SetDailyRatePlanScheduleRange(context.Background(), ratePlanCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).DailyRatePlanScheduleRange(dailyRatePlanScheduleRange).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RatePlanAPI.SetDailyRatePlanScheduleRange``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `SetDailyRatePlanScheduleRange`: Status
    fmt.Fprintf(os.Stdout, "Response from `RatePlanAPI.SetDailyRatePlanScheduleRange`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**ratePlanCode** | **string** | Rate Plan Code. | 
**hotelId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiSetDailyRatePlanScheduleRangeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **dailyRatePlanScheduleRange** | [**DailyRatePlanScheduleRange**](DailyRatePlanScheduleRange.md) | A Request message that sets the rate plan schedules for daily rates as a range. | 
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


## SetMassRatePlanSchedules

> Status SetMassRatePlanSchedules(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).MassRatePlanSchedules(massRatePlanSchedules).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Set mass rate plan schedules



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rtp"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID that identifies a single hotel property.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    massRatePlanSchedules := *openapiclient.NewMassRatePlanSchedules() // MassRatePlanSchedules | A Request message to update the rate codes schedule.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RatePlanAPI.SetMassRatePlanSchedules(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).MassRatePlanSchedules(massRatePlanSchedules).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RatePlanAPI.SetMassRatePlanSchedules``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `SetMassRatePlanSchedules`: Status
    fmt.Fprintf(os.Stdout, "Response from `RatePlanAPI.SetMassRatePlanSchedules`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiSetMassRatePlanSchedulesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **massRatePlanSchedules** | [**MassRatePlanSchedules**](MassRatePlanSchedules.md) | A Request message to update the rate codes schedule. | 
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


## SetRateAccessExclusions

> Status SetRateAccessExclusions(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RateAccessExclusions(rateAccessExclusions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Set rate access exclusions



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rtp"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID that identifies a single hotel property.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    rateAccessExclusions := *openapiclient.NewRateAccessExclusions() // RateAccessExclusions | 
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RatePlanAPI.SetRateAccessExclusions(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RateAccessExclusions(rateAccessExclusions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RatePlanAPI.SetRateAccessExclusions``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `SetRateAccessExclusions`: Status
    fmt.Fprintf(os.Stdout, "Response from `RatePlanAPI.SetRateAccessExclusions`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiSetRateAccessExclusionsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **rateAccessExclusions** | [**RateAccessExclusions**](RateAccessExclusions.md) |  | 
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


## SetRatePlanSchedules

> Status SetRatePlanSchedules(ctx, ratePlanCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RatePlanSchedules(ratePlanSchedules).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Set rate plan schedules



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rtp"
)

func main() {
    ratePlanCode := "ratePlanCode_example" // string | Rate Plan Code.
    hotelId := "hotelId_example" // string | Unique ID that identifies a single hotel property.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    ratePlanSchedules := *openapiclient.NewRatePlanSchedulesToSet() // RatePlanSchedulesToSet | Request object to set rate plan schedules.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RatePlanAPI.SetRatePlanSchedules(context.Background(), ratePlanCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RatePlanSchedules(ratePlanSchedules).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RatePlanAPI.SetRatePlanSchedules``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `SetRatePlanSchedules`: Status
    fmt.Fprintf(os.Stdout, "Response from `RatePlanAPI.SetRatePlanSchedules`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**ratePlanCode** | **string** | Rate Plan Code. | 
**hotelId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiSetRatePlanSchedulesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **ratePlanSchedules** | [**RatePlanSchedulesToSet**](RatePlanSchedulesToSet.md) | Request object to set rate plan schedules. | 
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


## SetRateStrategies

> Status SetRateStrategies(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RateStrategiesToSet(rateStrategiesToSet).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Set rate strategies



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rtp"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    rateStrategiesToSet := *openapiclient.NewRateStrategiesToSet() // RateStrategiesToSet | Request object for setting rate strategies. This operation will change details of rate strategy if rate strategy with the given Hotel Code, Restriction Dates, Rate Code, Rate Category, Room Type, Condition Type and Restriction Type already exists. Otherwise, it will create new rate strategy.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RatePlanAPI.SetRateStrategies(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RateStrategiesToSet(rateStrategiesToSet).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RatePlanAPI.SetRateStrategies``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `SetRateStrategies`: Status
    fmt.Fprintf(os.Stdout, "Response from `RatePlanAPI.SetRateStrategies`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiSetRateStrategiesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **rateStrategiesToSet** | [**RateStrategiesToSet**](RateStrategiesToSet.md) | Request object for setting rate strategies. This operation will change details of rate strategy if rate strategy with the given Hotel Code, Restriction Dates, Rate Code, Rate Category, Room Type, Condition Type and Restriction Type already exists. Otherwise, it will create new rate strategy. | 
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


## SplitRatePlanSchedule

> Status SplitRatePlanSchedule(ctx, scheduleId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RatePlanScheduleToSplit(ratePlanScheduleToSplit).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Split rate plan schedule



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rtp"
)

func main() {
    scheduleId := "scheduleId_example" // string | Schedule Id.
    hotelId := "hotelId_example" // string | Unique ID that identifies a single hotel property.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    ratePlanScheduleToSplit := *openapiclient.NewRatePlanScheduleToSplit() // RatePlanScheduleToSplit | Request object to split rate plan schedule.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RatePlanAPI.SplitRatePlanSchedule(context.Background(), scheduleId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RatePlanScheduleToSplit(ratePlanScheduleToSplit).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RatePlanAPI.SplitRatePlanSchedule``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `SplitRatePlanSchedule`: Status
    fmt.Fprintf(os.Stdout, "Response from `RatePlanAPI.SplitRatePlanSchedule`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**scheduleId** | **string** | Schedule Id. | 
**hotelId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiSplitRatePlanScheduleRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **ratePlanScheduleToSplit** | [**RatePlanScheduleToSplit**](RatePlanScheduleToSplit.md) | Request object to split rate plan schedule. | 
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


## SyncRatePlans

> Status SyncRatePlans(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RatePlansSync(ratePlansSync).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Synchronizes Rate Plan information including Rate Header and Packages across target properties.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rtp"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID that identifies a single hotel property.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    ratePlansSync := *openapiclient.NewRatePlansSync([]string{"RatePlanCodes_example"}, *openapiclient.NewRatePlansSyncTargetType([]string{"HotelIds_example"})) // RatePlansSync | Request object to synchronize rate codes.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.RatePlanAPI.SyncRatePlans(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RatePlansSync(ratePlansSync).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `RatePlanAPI.SyncRatePlans``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `SyncRatePlans`: Status
    fmt.Fprintf(os.Stdout, "Response from `RatePlanAPI.SyncRatePlans`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiSyncRatePlansRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **ratePlansSync** | [**RatePlansSync**](RatePlansSync.md) | Request object to synchronize rate codes. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


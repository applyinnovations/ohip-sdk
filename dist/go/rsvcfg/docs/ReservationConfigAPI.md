# \ReservationConfigAPI

All URIs are relative to */rsv/config/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CopyAutoAttachElements**](ReservationConfigAPI.md#CopyAutoAttachElements) | **Put** /hotels/{hotelId}/autoAttachElements/copy | Copy Auto Attach Elements
[**CopyECouponCodes**](ReservationConfigAPI.md#CopyECouponCodes) | **Put** /hotels/{hotelId}/ecoupons/copy | Copy eCoupon Codes
[**CopyGlobalAlerts**](ReservationConfigAPI.md#CopyGlobalAlerts) | **Put** /globalAlerts/copy | Copy Global Alerts
[**CopyTraceTexts**](ReservationConfigAPI.md#CopyTraceTexts) | **Put** /hotels/{hotelId}/traceTexts/copy | Copy trace text 
[**CopyUpsellRules**](ReservationConfigAPI.md#CopyUpsellRules) | **Put** /hotels/{hotelId}/upsellRules/copy | Copy upsell rules
[**DeleteAlertCodeTemplates**](ReservationConfigAPI.md#DeleteAlertCodeTemplates) | **Delete** /alertCodes | Delete Alert Code Template
[**DeleteAlertCodes**](ReservationConfigAPI.md#DeleteAlertCodes) | **Delete** /hotels/{hotelId}/alertCodes | Delete an Alert Code
[**DeleteAutoAttachElements**](ReservationConfigAPI.md#DeleteAutoAttachElements) | **Put** /autoAttachElements | Delete Auto Attach Elements
[**DeleteECouponCodes**](ReservationConfigAPI.md#DeleteECouponCodes) | **Delete** /hotels/{hotelId}/ecouponCodes/{ecouponCode} | Delete an eCoupon Code
[**DeleteGlobalAlerts**](ReservationConfigAPI.md#DeleteGlobalAlerts) | **Put** /globalAlerts | Delete a Global Alert Code
[**DeleteGuestMessageTemplates**](ReservationConfigAPI.md#DeleteGuestMessageTemplates) | **Delete** /guestMessages | Delete an existing guest message template
[**DeleteGuestMessages**](ReservationConfigAPI.md#DeleteGuestMessages) | **Delete** /hotels/{hotelId}/guestMessages/{messageCode} | Delete a Guest messages
[**DeleteHotelTurnAwayCodes**](ReservationConfigAPI.md#DeleteHotelTurnAwayCodes) | **Delete** /hotels/{hotelId}/turnawayCodes/{code} | Delete an existing turnaway code
[**DeleteLocatorCodes**](ReservationConfigAPI.md#DeleteLocatorCodes) | **Delete** /hotels/{hotelId}/locatorCodes/{locatorCode} | Delete a Locator Code
[**DeleteLocatorCodesTemplate**](ReservationConfigAPI.md#DeleteLocatorCodesTemplate) | **Delete** /templates/locatorCodes | Delete a Locator Code
[**DeleteTemplateTurnAwayCodes**](ReservationConfigAPI.md#DeleteTemplateTurnAwayCodes) | **Delete** /turnawayCodes/{turnawayCode} | Delete a Turnaway code template
[**DeleteTraceTexts**](ReservationConfigAPI.md#DeleteTraceTexts) | **Delete** /traceTexts | Delete trace text 
[**DeleteUpsellRules**](ReservationConfigAPI.md#DeleteUpsellRules) | **Delete** /hotels/{hotelId}/upsellRules/{ruleCode} | Delete an Upsell Rule
[**GetAlertCodeTemplates**](ReservationConfigAPI.md#GetAlertCodeTemplates) | **Get** /alertCodes | Get Alert Code Templates
[**GetAlertCodes**](ReservationConfigAPI.md#GetAlertCodes) | **Get** /hotels/{hotelId}/alertCodes | Get Alert Codes
[**GetAutoAttachElements**](ReservationConfigAPI.md#GetAutoAttachElements) | **Get** /hotels/{hotelId}/autoAttachElements | Get Auto Attach Elements
[**GetECouponCodes**](ReservationConfigAPI.md#GetECouponCodes) | **Get** /ecoupons | Get eCoupon Codes
[**GetGlobalAlerts**](ReservationConfigAPI.md#GetGlobalAlerts) | **Get** /globalAlerts | Get Global Alerts
[**GetGuestMessageTemplates**](ReservationConfigAPI.md#GetGuestMessageTemplates) | **Get** /guestMessages | Get Guest Message Templates
[**GetGuestMessages**](ReservationConfigAPI.md#GetGuestMessages) | **Get** /hotels/{hotelId}/guestMessages | Get Guest Messages
[**GetHotelTurnAwayCodes**](ReservationConfigAPI.md#GetHotelTurnAwayCodes) | **Get** /hotels/{hotelId}/turnawayCodes | Get Turnaway codes
[**GetLocatorCodes**](ReservationConfigAPI.md#GetLocatorCodes) | **Get** /hotels/{hotelId}/locatorCodes | Get existing property Locator Codes
[**GetLocatorCodesTemplate**](ReservationConfigAPI.md#GetLocatorCodesTemplate) | **Get** /templates/locatorCodes | Get template Locator Codes
[**GetMembershipLevelRatings**](ReservationConfigAPI.md#GetMembershipLevelRatings) | **Get** /hotels/{hotelId}/membershipLevels/ratings | Get Membership Level Ratings
[**GetRatePlanRatings**](ReservationConfigAPI.md#GetRatePlanRatings) | **Get** /hotels/{hotelId}/ratePlans/ratings | Get Rate Plan Ratings
[**GetReservationColors**](ReservationConfigAPI.md#GetReservationColors) | **Get** /hotels/{hotelId}/colors | Get Reservation Colors
[**GetRoomFeatureRatings**](ReservationConfigAPI.md#GetRoomFeatureRatings) | **Get** /hotels/{hotelId}/roomFeatures/ratings | Get Room Feature Ratings
[**GetRoomRatings**](ReservationConfigAPI.md#GetRoomRatings) | **Get** /hotels/{hotelId}/rooms/ratings | Get Room Ratings
[**GetRoomSpecialRatings**](ReservationConfigAPI.md#GetRoomSpecialRatings) | **Get** /hotels/{hotelId}/roomSpecials/ratings | Get Room Special Ratings
[**GetTemplateTurnAwayCodes**](ReservationConfigAPI.md#GetTemplateTurnAwayCodes) | **Get** /turnawayCodes | Get Template TurnAway Codes
[**GetTraceTexts**](ReservationConfigAPI.md#GetTraceTexts) | **Get** /traceTexts | Get trace texts 
[**GetUpsellRules**](ReservationConfigAPI.md#GetUpsellRules) | **Get** /hotels/{hotelId}/upsellRules | Get upsell rules
[**PostAlertCodeTemplates**](ReservationConfigAPI.md#PostAlertCodeTemplates) | **Post** /alertCodes | Create Alert Code Template
[**PostAlertCodes**](ReservationConfigAPI.md#PostAlertCodes) | **Post** /hotels/{hotelId}/alertCodes | Create a new alert code
[**PostAutoAttachElements**](ReservationConfigAPI.md#PostAutoAttachElements) | **Post** /hotels/{hotelId}/autoAttachElements | Create Auto Attach Elements
[**PostECouponCodes**](ReservationConfigAPI.md#PostECouponCodes) | **Post** /hotels/{hotelId}/ecoupons | Create an eCoupon Code
[**PostGlobalAlerts**](ReservationConfigAPI.md#PostGlobalAlerts) | **Post** /hotels/{hotelId}/globalAlerts | Create Global Alerts
[**PostGuestMessageTemplates**](ReservationConfigAPI.md#PostGuestMessageTemplates) | **Post** /guestMessages | Create a new guest message template
[**PostGuestMessages**](ReservationConfigAPI.md#PostGuestMessages) | **Post** /hotels/{hotelId}/guestMessages | Create Guest Messages
[**PostHotelTurnAwayCodes**](ReservationConfigAPI.md#PostHotelTurnAwayCodes) | **Post** /hotels/{hotelId}/turnawayCodes | Create Turn Away Codes
[**PostLocatorCodes**](ReservationConfigAPI.md#PostLocatorCodes) | **Post** /hotels/{hotelId}/locatorCodes | Create a new Locator Code
[**PostLocatorCodesTemplate**](ReservationConfigAPI.md#PostLocatorCodesTemplate) | **Post** /templates/locatorCodes | Create a template Locator Code
[**PostTemplateTurnAwayCodes**](ReservationConfigAPI.md#PostTemplateTurnAwayCodes) | **Post** /turnawayCodes | Create Template TurnAway Codes
[**PostTraceTexts**](ReservationConfigAPI.md#PostTraceTexts) | **Post** /traceTexts | Create new trace texts
[**PostUpsellRules**](ReservationConfigAPI.md#PostUpsellRules) | **Post** /hotels/{hotelId}/upsellRules | Create Upsell Rules
[**PutAlertCodeTemplates**](ReservationConfigAPI.md#PutAlertCodeTemplates) | **Put** /alertCodes | Change Alert Code Template
[**PutAlertCodes**](ReservationConfigAPI.md#PutAlertCodes) | **Put** /hotels/{hotelId}/alertCodes | Change Alert Codes
[**PutAutoAttachElements**](ReservationConfigAPI.md#PutAutoAttachElements) | **Put** /hotels/{hotelId}/autoAttachElements | Update Auto Attach Elements
[**PutECouponCodes**](ReservationConfigAPI.md#PutECouponCodes) | **Put** /hotels/{hotelId}/ecoupons | Change an eCoupon Code
[**PutGlobalAlerts**](ReservationConfigAPI.md#PutGlobalAlerts) | **Put** /hotels/{hotelId}/globalAlerts | Change Global Alerts
[**PutGuestMessageTemplates**](ReservationConfigAPI.md#PutGuestMessageTemplates) | **Put** /guestMessages | Change Guest Message Templates
[**PutGuestMessages**](ReservationConfigAPI.md#PutGuestMessages) | **Put** /hotels/{hotelId}/guestMessages | Change a Guest messages
[**PutHotelTurnAwayCodes**](ReservationConfigAPI.md#PutHotelTurnAwayCodes) | **Put** /hotels/{hotelId}/turnawayCodes | Change TurnAway Codes
[**PutLocatorCodes**](ReservationConfigAPI.md#PutLocatorCodes) | **Put** /hotels/{hotelId}/locatorCodes | Change the existing Locator Code
[**PutLocatorCodesTemplate**](ReservationConfigAPI.md#PutLocatorCodesTemplate) | **Put** /templates/locatorCodes | Change a Locator Code
[**PutMembershipLevelRatings**](ReservationConfigAPI.md#PutMembershipLevelRatings) | **Put** /hotels/{hotelId}/membershipTypes/{membershipType}/membershipLevels/{membershipLevel}/ratings | Change Membership Level Ratings
[**PutRatePlanRatings**](ReservationConfigAPI.md#PutRatePlanRatings) | **Put** /hotels/{hotelId}/ratePlans/ratings | Change Rate Plan Ratings
[**PutReservationColors**](ReservationConfigAPI.md#PutReservationColors) | **Put** /hotels/{hotelId}/colors/{code} | Change Reservation Colors
[**PutRoomFeatureRatings**](ReservationConfigAPI.md#PutRoomFeatureRatings) | **Put** /hotels/{hotelId}/roomFeatures/ratings | Change Room Feature Ratings
[**PutRoomRatings**](ReservationConfigAPI.md#PutRoomRatings) | **Put** /hotels/{hotelId}/rooms/{roomId}/ratings | Change Room Ratings
[**PutRoomSpecialRatings**](ReservationConfigAPI.md#PutRoomSpecialRatings) | **Put** /hotels/{hotelId}/roomSpecials/ratings | Change Room Special Ratings
[**PutTemplateTurnAwayCodes**](ReservationConfigAPI.md#PutTemplateTurnAwayCodes) | **Put** /turnawayCodes | Change a Turnaway code template
[**PutTraceTexts**](ReservationConfigAPI.md#PutTraceTexts) | **Put** /traceTexts | Change trace text 
[**PutUpsellRules**](ReservationConfigAPI.md#PutUpsellRules) | **Put** /hotels/{hotelId}/upsellRules | Modify Upsell Rule
[**TestUpsellRules**](ReservationConfigAPI.md#TestUpsellRules) | **Put** /hotels/{hotelId}/upsellRules/action/validate | Test upsell rules



## CopyAutoAttachElements

> Status CopyAutoAttachElements(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AutoAttachElementsCopy(autoAttachElementsCopy).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Copy Auto Attach Elements



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Unique OPERA Source Hotel code
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    autoAttachElementsCopy := *openapiclient.NewAutoAttachElementsCopy() // AutoAttachElementsCopy | List of the auto attach configuration rule(s) to be copied.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationConfigAPI.CopyAutoAttachElements(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AutoAttachElementsCopy(autoAttachElementsCopy).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationConfigAPI.CopyAutoAttachElements``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CopyAutoAttachElements`: Status
    fmt.Fprintf(os.Stdout, "Response from `ReservationConfigAPI.CopyAutoAttachElements`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique OPERA Source Hotel code | 

### Other Parameters

Other parameters are passed through a pointer to a apiCopyAutoAttachElementsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **autoAttachElementsCopy** | [**AutoAttachElementsCopy**](AutoAttachElementsCopy.md) | List of the auto attach configuration rule(s) to be copied. | 
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


## CopyECouponCodes

> Status CopyECouponCodes(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ECouponCodesCopy(eCouponCodesCopy).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Copy eCoupon Codes



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Unique OPERA Hotel code
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    eCouponCodesCopy := *openapiclient.NewECouponCodesCopy() // ECouponCodesCopy | Request object to copy the existing eCoupon codes from source property to the selected target properties.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationConfigAPI.CopyECouponCodes(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ECouponCodesCopy(eCouponCodesCopy).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationConfigAPI.CopyECouponCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CopyECouponCodes`: Status
    fmt.Fprintf(os.Stdout, "Response from `ReservationConfigAPI.CopyECouponCodes`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique OPERA Hotel code | 

### Other Parameters

Other parameters are passed through a pointer to a apiCopyECouponCodesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **eCouponCodesCopy** | [**ECouponCodesCopy**](ECouponCodesCopy.md) | Request object to copy the existing eCoupon codes from source property to the selected target properties. | 
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


## CopyGlobalAlerts

> Status CopyGlobalAlerts(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).GlobalAlertsCopy(globalAlertsCopy).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Copy Global Alerts



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    globalAlertsCopy := *openapiclient.NewGlobalAlertsCopy() // GlobalAlertsCopy | Request object for copying Global Alerts.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationConfigAPI.CopyGlobalAlerts(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).GlobalAlertsCopy(globalAlertsCopy).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationConfigAPI.CopyGlobalAlerts``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CopyGlobalAlerts`: Status
    fmt.Fprintf(os.Stdout, "Response from `ReservationConfigAPI.CopyGlobalAlerts`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCopyGlobalAlertsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **globalAlertsCopy** | [**GlobalAlertsCopy**](GlobalAlertsCopy.md) | Request object for copying Global Alerts. | 
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


## CopyTraceTexts

> Status CopyTraceTexts(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TraceTextsCopy(traceTextsCopy).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Copy trace text 



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Unique OPERA Source Hotel code
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    traceTextsCopy := *openapiclient.NewTraceTextsCopy() // TraceTextsCopy | Request object for copying trace texts.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationConfigAPI.CopyTraceTexts(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TraceTextsCopy(traceTextsCopy).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationConfigAPI.CopyTraceTexts``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CopyTraceTexts`: Status
    fmt.Fprintf(os.Stdout, "Response from `ReservationConfigAPI.CopyTraceTexts`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique OPERA Source Hotel code | 

### Other Parameters

Other parameters are passed through a pointer to a apiCopyTraceTextsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **traceTextsCopy** | [**TraceTextsCopy**](TraceTextsCopy.md) | Request object for copying trace texts. | 
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


## CopyUpsellRules

> Status CopyUpsellRules(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).UpsellRulesCopy(upsellRulesCopy).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Copy upsell rules



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Unique OPERA Source Hotel code
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    upsellRulesCopy := *openapiclient.NewUpsellRulesCopy() // UpsellRulesCopy | List of the upsell rules to be copied to hotel code(s).
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationConfigAPI.CopyUpsellRules(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).UpsellRulesCopy(upsellRulesCopy).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationConfigAPI.CopyUpsellRules``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CopyUpsellRules`: Status
    fmt.Fprintf(os.Stdout, "Response from `ReservationConfigAPI.CopyUpsellRules`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique OPERA Source Hotel code | 

### Other Parameters

Other parameters are passed through a pointer to a apiCopyUpsellRulesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **upsellRulesCopy** | [**UpsellRulesCopy**](UpsellRulesCopy.md) | List of the upsell rules to be copied to hotel code(s). | 
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


## DeleteAlertCodeTemplates

> Status DeleteAlertCodeTemplates(ctx).AlertCodeTemplateCodes(alertCodeTemplateCodes).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete Alert Code Template



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    alertCodeTemplateCodes := []string{"Inner_example"} // []string | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationConfigAPI.DeleteAlertCodeTemplates(context.Background()).AlertCodeTemplateCodes(alertCodeTemplateCodes).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationConfigAPI.DeleteAlertCodeTemplates``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteAlertCodeTemplates`: Status
    fmt.Fprintf(os.Stdout, "Response from `ReservationConfigAPI.DeleteAlertCodeTemplates`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDeleteAlertCodeTemplatesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **alertCodeTemplateCodes** | **[]string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | 
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


## DeleteAlertCodes

> Status DeleteAlertCodes(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Codes(codes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete an Alert Code



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Unique OPERA Hotel code
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    codes := []string{"Inner_example"} // []string | Configuration code. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationConfigAPI.DeleteAlertCodes(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Codes(codes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationConfigAPI.DeleteAlertCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteAlertCodes`: Status
    fmt.Fprintf(os.Stdout, "Response from `ReservationConfigAPI.DeleteAlertCodes`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique OPERA Hotel code | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteAlertCodesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **codes** | **[]string** | Configuration code. | 
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


## DeleteAutoAttachElements

> Status DeleteAutoAttachElements(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AutoAttachElements(autoAttachElements).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete Auto Attach Elements



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    autoAttachElements := *openapiclient.NewAutoAttachElements() // AutoAttachElements | Delete auto attach configuration rule(s) for resort.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationConfigAPI.DeleteAutoAttachElements(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AutoAttachElements(autoAttachElements).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationConfigAPI.DeleteAutoAttachElements``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteAutoAttachElements`: Status
    fmt.Fprintf(os.Stdout, "Response from `ReservationConfigAPI.DeleteAutoAttachElements`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDeleteAutoAttachElementsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **autoAttachElements** | [**AutoAttachElements**](AutoAttachElements.md) | Delete auto attach configuration rule(s) for resort. | 
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


## DeleteECouponCodes

> Status DeleteECouponCodes(ctx, ecouponCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete an eCoupon Code



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    ecouponCode := "ecouponCode_example" // string | 
    hotelId := "hotelId_example" // string | Unique OPERA Hotel code
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationConfigAPI.DeleteECouponCodes(context.Background(), ecouponCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationConfigAPI.DeleteECouponCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteECouponCodes`: Status
    fmt.Fprintf(os.Stdout, "Response from `ReservationConfigAPI.DeleteECouponCodes`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**ecouponCode** | **string** |  | 
**hotelId** | **string** | Unique OPERA Hotel code | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteECouponCodesRequest struct via the builder pattern


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


## DeleteGlobalAlerts

> Status DeleteGlobalAlerts(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).GlobalAlerts(globalAlerts).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete a Global Alert Code



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    globalAlerts := *openapiclient.NewGlobalAlerts() // GlobalAlerts | Request object for removing the existing Global Alerts.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationConfigAPI.DeleteGlobalAlerts(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).GlobalAlerts(globalAlerts).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationConfigAPI.DeleteGlobalAlerts``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteGlobalAlerts`: Status
    fmt.Fprintf(os.Stdout, "Response from `ReservationConfigAPI.DeleteGlobalAlerts`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDeleteGlobalAlertsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **globalAlerts** | [**GlobalAlerts**](GlobalAlerts.md) | Request object for removing the existing Global Alerts. | 
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


## DeleteGuestMessageTemplates

> Status DeleteGuestMessageTemplates(ctx).GuestMessageTemplateCodes(guestMessageTemplateCodes).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete an existing guest message template



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    guestMessageTemplateCodes := []string{"Inner_example"} // []string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationConfigAPI.DeleteGuestMessageTemplates(context.Background()).GuestMessageTemplateCodes(guestMessageTemplateCodes).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationConfigAPI.DeleteGuestMessageTemplates``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteGuestMessageTemplates`: Status
    fmt.Fprintf(os.Stdout, "Response from `ReservationConfigAPI.DeleteGuestMessageTemplates`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDeleteGuestMessageTemplatesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **guestMessageTemplateCodes** | **[]string** |  | 
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


## DeleteGuestMessages

> Status DeleteGuestMessages(ctx, messageCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete a Guest messages



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    messageCode := "messageCode_example" // string | 
    hotelId := "hotelId_example" // string | Unique OPERA Hotel code
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationConfigAPI.DeleteGuestMessages(context.Background(), messageCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationConfigAPI.DeleteGuestMessages``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteGuestMessages`: Status
    fmt.Fprintf(os.Stdout, "Response from `ReservationConfigAPI.DeleteGuestMessages`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**messageCode** | **string** |  | 
**hotelId** | **string** | Unique OPERA Hotel code | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteGuestMessagesRequest struct via the builder pattern


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


## DeleteHotelTurnAwayCodes

> Status DeleteHotelTurnAwayCodes(ctx, code, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete an existing turnaway code



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    code := "code_example" // string | 
    hotelId := "hotelId_example" // string | Unique OPERA Hotel code
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationConfigAPI.DeleteHotelTurnAwayCodes(context.Background(), code, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationConfigAPI.DeleteHotelTurnAwayCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteHotelTurnAwayCodes`: Status
    fmt.Fprintf(os.Stdout, "Response from `ReservationConfigAPI.DeleteHotelTurnAwayCodes`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**code** | **string** |  | 
**hotelId** | **string** | Unique OPERA Hotel code | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteHotelTurnAwayCodesRequest struct via the builder pattern


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


## DeleteLocatorCodes

> Status DeleteLocatorCodes(ctx, locatorCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete a Locator Code



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    locatorCode := "locatorCode_example" // string | 
    hotelId := "hotelId_example" // string | Unique OPERA Hotel code
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationConfigAPI.DeleteLocatorCodes(context.Background(), locatorCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationConfigAPI.DeleteLocatorCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteLocatorCodes`: Status
    fmt.Fprintf(os.Stdout, "Response from `ReservationConfigAPI.DeleteLocatorCodes`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**locatorCode** | **string** |  | 
**hotelId** | **string** | Unique OPERA Hotel code | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteLocatorCodesRequest struct via the builder pattern


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


## DeleteLocatorCodesTemplate

> Status DeleteLocatorCodesTemplate(ctx).LocatorCodes(locatorCodes).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete a Locator Code



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    locatorCodes := []string{"Inner_example"} // []string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationConfigAPI.DeleteLocatorCodesTemplate(context.Background()).LocatorCodes(locatorCodes).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationConfigAPI.DeleteLocatorCodesTemplate``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteLocatorCodesTemplate`: Status
    fmt.Fprintf(os.Stdout, "Response from `ReservationConfigAPI.DeleteLocatorCodesTemplate`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDeleteLocatorCodesTemplateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locatorCodes** | **[]string** |  | 
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


## DeleteTemplateTurnAwayCodes

> Status DeleteTemplateTurnAwayCodes(ctx, turnawayCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete a Turnaway code template



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    turnawayCode := "turnawayCode_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationConfigAPI.DeleteTemplateTurnAwayCodes(context.Background(), turnawayCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationConfigAPI.DeleteTemplateTurnAwayCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteTemplateTurnAwayCodes`: Status
    fmt.Fprintf(os.Stdout, "Response from `ReservationConfigAPI.DeleteTemplateTurnAwayCodes`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**turnawayCode** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteTemplateTurnAwayCodesRequest struct via the builder pattern


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


## DeleteTraceTexts

> Status DeleteTraceTexts(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).DepartmentCode(departmentCode).TraceText(traceText).CanDelete(canDelete).DisplaySequence(displaySequence).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete trace text 



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    hotelId := []string{"Inner_example"} // []string | Property Code where the trace text belongs to. (optional)
    departmentCode := []string{"Inner_example"} // []string | Department Code where the trace text belongs to. (optional)
    traceText := []string{"Inner_example"} // []string | Trace text value. (optional)
    canDelete := []bool{false} // []bool | Determines whether this trace text can be deleted. (optional)
    displaySequence := []float32{float32(123)} // []float32 | Display Sequence for the trace text. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationConfigAPI.DeleteTraceTexts(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).DepartmentCode(departmentCode).TraceText(traceText).CanDelete(canDelete).DisplaySequence(displaySequence).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationConfigAPI.DeleteTraceTexts``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteTraceTexts`: Status
    fmt.Fprintf(os.Stdout, "Response from `ReservationConfigAPI.DeleteTraceTexts`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDeleteTraceTextsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **hotelId** | **[]string** | Property Code where the trace text belongs to. | 
 **departmentCode** | **[]string** | Department Code where the trace text belongs to. | 
 **traceText** | **[]string** | Trace text value. | 
 **canDelete** | **[]bool** | Determines whether this trace text can be deleted. | 
 **displaySequence** | **[]float32** | Display Sequence for the trace text. | 
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


## DeleteUpsellRules

> Status DeleteUpsellRules(ctx, ruleCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete an Upsell Rule



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    ruleCode := "ruleCode_example" // string | 
    hotelId := "hotelId_example" // string | Unique OPERA Hotel code
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationConfigAPI.DeleteUpsellRules(context.Background(), ruleCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationConfigAPI.DeleteUpsellRules``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteUpsellRules`: Status
    fmt.Fprintf(os.Stdout, "Response from `ReservationConfigAPI.DeleteUpsellRules`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**ruleCode** | **string** |  | 
**hotelId** | **string** | Unique OPERA Hotel code | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteUpsellRulesRequest struct via the builder pattern


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


## GetAlertCodeTemplates

> AlertCodeTemplates GetAlertCodeTemplates(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AlertCodes(alertCodes).WildCard(wildCard).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Alert Code Templates



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    alertCodes := []string{"Inner_example"} // []string | Codes to be searched. (optional)
    wildCard := "wildCard_example" // string | Wildcard search on the code. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationConfigAPI.GetAlertCodeTemplates(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AlertCodes(alertCodes).WildCard(wildCard).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationConfigAPI.GetAlertCodeTemplates``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetAlertCodeTemplates`: AlertCodeTemplates
    fmt.Fprintf(os.Stdout, "Response from `ReservationConfigAPI.GetAlertCodeTemplates`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetAlertCodeTemplatesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **alertCodes** | **[]string** | Codes to be searched. | 
 **wildCard** | **string** | Wildcard search on the code. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**AlertCodeTemplates**](AlertCodeTemplates.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetAlertCodes

> AlertCodes GetAlertCodes(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Code(code).AlertCodes(alertCodes).WildCard(wildCard).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Alert Codes



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Unique OPERA Hotel code
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    code := []string{"Inner_example"} // []string |  (optional)
    alertCodes := []string{"Inner_example"} // []string | Codes to be searched. (optional)
    wildCard := "wildCard_example" // string | Wildcard search on the code. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationConfigAPI.GetAlertCodes(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Code(code).AlertCodes(alertCodes).WildCard(wildCard).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationConfigAPI.GetAlertCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetAlertCodes`: AlertCodes
    fmt.Fprintf(os.Stdout, "Response from `ReservationConfigAPI.GetAlertCodes`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique OPERA Hotel code | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetAlertCodesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **code** | **[]string** |  | 
 **alertCodes** | **[]string** | Codes to be searched. | 
 **wildCard** | **string** | Wildcard search on the code. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**AlertCodes**](AlertCodes.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetAutoAttachElements

> AutoAttachElementsConfig GetAutoAttachElements(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelIds(hotelIds).Code(code).CriteriaCode(criteriaCode).Type_(type_).BasedOn(basedOn).IncludeInactive(includeInactive).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Auto Attach Elements



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Unique OPERA Hotel code
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    hotelIds := []string{"Inner_example"} // []string | List of Hotels. (optional)
    code := []string{"Inner_example"} // []string |  (optional)
    criteriaCode := "criteriaCode_example" // string | The name of the rule. (optional)
    type_ := "type__example" // string | Available only when Reservation Discounts and Advanced Discounts are active (optional)
    basedOn := "basedOn_example" // string | Available only when Keyword Functionality is active. (optional)
    includeInactive := true // bool | Indicator that tells whether to include inactive rules in search results. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationConfigAPI.GetAutoAttachElements(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelIds(hotelIds).Code(code).CriteriaCode(criteriaCode).Type_(type_).BasedOn(basedOn).IncludeInactive(includeInactive).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationConfigAPI.GetAutoAttachElements``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetAutoAttachElements`: AutoAttachElementsConfig
    fmt.Fprintf(os.Stdout, "Response from `ReservationConfigAPI.GetAutoAttachElements`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique OPERA Hotel code | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetAutoAttachElementsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **hotelIds** | **[]string** | List of Hotels. | 
 **code** | **[]string** |  | 
 **criteriaCode** | **string** | The name of the rule. | 
 **type_** | **string** | Available only when Reservation Discounts and Advanced Discounts are active | 
 **basedOn** | **string** | Available only when Keyword Functionality is active. | 
 **includeInactive** | **bool** | Indicator that tells whether to include inactive rules in search results. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**AutoAttachElementsConfig**](AutoAttachElementsConfig.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetECouponCodes

> ECouponCodes GetECouponCodes(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).HotelIds(hotelIds).ECouponCodes(eCouponCodes).WildCardECouponCodes(wildCardECouponCodes).RatePlansCodes(ratePlansCodes).WildCardRatePlans(wildCardRatePlans).IncludeInactive(includeInactive).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get eCoupon Codes



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    offset := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional) (default to 0)
    hotelIds := []string{"Inner_example"} // []string |  (optional)
    eCouponCodes := []string{"Inner_example"} // []string | Codes to be searched. (optional)
    wildCardECouponCodes := "wildCardECouponCodes_example" // string | Wildcard search on the code. (optional)
    ratePlansCodes := []string{"Inner_example"} // []string | Codes to be searched. (optional)
    wildCardRatePlans := "wildCardRatePlans_example" // string | Wildcard search on the code. (optional)
    includeInactive := true // bool | Indicator that tells whether to include inactive rules in search results . (optional) (default to false)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationConfigAPI.GetECouponCodes(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).HotelIds(hotelIds).ECouponCodes(eCouponCodes).WildCardECouponCodes(wildCardECouponCodes).RatePlansCodes(ratePlansCodes).WildCardRatePlans(wildCardRatePlans).IncludeInactive(includeInactive).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationConfigAPI.GetECouponCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetECouponCodes`: ECouponCodes
    fmt.Fprintf(os.Stdout, "Response from `ReservationConfigAPI.GetECouponCodes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetECouponCodesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **offset** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [default to 0]
 **hotelIds** | **[]string** |  | 
 **eCouponCodes** | **[]string** | Codes to be searched. | 
 **wildCardECouponCodes** | **string** | Wildcard search on the code. | 
 **ratePlansCodes** | **[]string** | Codes to be searched. | 
 **wildCardRatePlans** | **string** | Wildcard search on the code. | 
 **includeInactive** | **bool** | Indicator that tells whether to include inactive rules in search results . | [default to false]
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ECouponCodes**](ECouponCodes.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetGlobalAlerts

> GlobalAlertsInfo GetGlobalAlerts(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelIds(hotelIds).AlertCodes(alertCodes).WildCard(wildCard).WelcomeOffer(welcomeOffer).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Global Alerts



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    hotelIds := []string{"Inner_example"} // []string |  (optional)
    alertCodes := []string{"Inner_example"} // []string | Codes to be searched. (optional)
    wildCard := "wildCard_example" // string | Wildcard search on the code. (optional)
    welcomeOffer := true // bool |  (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationConfigAPI.GetGlobalAlerts(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelIds(hotelIds).AlertCodes(alertCodes).WildCard(wildCard).WelcomeOffer(welcomeOffer).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationConfigAPI.GetGlobalAlerts``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetGlobalAlerts`: GlobalAlertsInfo
    fmt.Fprintf(os.Stdout, "Response from `ReservationConfigAPI.GetGlobalAlerts`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetGlobalAlertsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **hotelIds** | **[]string** |  | 
 **alertCodes** | **[]string** | Codes to be searched. | 
 **wildCard** | **string** | Wildcard search on the code. | 
 **welcomeOffer** | **bool** |  | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**GlobalAlertsInfo**](GlobalAlertsInfo.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetGuestMessageTemplates

> GuestMessageTemplates GetGuestMessageTemplates(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).GuestMessageCodes(guestMessageCodes).WildCard(wildCard).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Guest Message Templates



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    guestMessageCodes := []string{"Inner_example"} // []string | Codes to be searched. (optional)
    wildCard := "wildCard_example" // string | Wildcard search on the code. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationConfigAPI.GetGuestMessageTemplates(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).GuestMessageCodes(guestMessageCodes).WildCard(wildCard).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationConfigAPI.GetGuestMessageTemplates``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetGuestMessageTemplates`: GuestMessageTemplates
    fmt.Fprintf(os.Stdout, "Response from `ReservationConfigAPI.GetGuestMessageTemplates`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetGuestMessageTemplatesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **guestMessageCodes** | **[]string** | Codes to be searched. | 
 **wildCard** | **string** | Wildcard search on the code. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**GuestMessageTemplates**](GuestMessageTemplates.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetGuestMessages

> RetrievedGuestMessages GetGuestMessages(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelIds(hotelIds).Limit(limit).Offset(offset).GuestMessageCodes(guestMessageCodes).WildCard(wildCard).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Guest Messages



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Unique OPERA Hotel code
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    hotelIds := []string{"Inner_example"} // []string | List of Hotels. (optional)
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    offset := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional) (default to 0)
    guestMessageCodes := []string{"Inner_example"} // []string | Codes to be searched. (optional)
    wildCard := "wildCard_example" // string | Wildcard search on the code. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationConfigAPI.GetGuestMessages(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelIds(hotelIds).Limit(limit).Offset(offset).GuestMessageCodes(guestMessageCodes).WildCard(wildCard).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationConfigAPI.GetGuestMessages``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetGuestMessages`: RetrievedGuestMessages
    fmt.Fprintf(os.Stdout, "Response from `ReservationConfigAPI.GetGuestMessages`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique OPERA Hotel code | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetGuestMessagesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **hotelIds** | **[]string** | List of Hotels. | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **offset** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [default to 0]
 **guestMessageCodes** | **[]string** | Codes to be searched. | 
 **wildCard** | **string** | Wildcard search on the code. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**RetrievedGuestMessages**](RetrievedGuestMessages.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetHotelTurnAwayCodes

> HotelTurnAwayCodes GetHotelTurnAwayCodes(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).Code(code).TurnAwayCodes(turnAwayCodes).WildCard(wildCard).IncludeInactive(includeInactive).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Turnaway codes



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Unique OPERA Hotel code
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    offset := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional) (default to 0)
    code := []string{"Inner_example"} // []string |  (optional)
    turnAwayCodes := []string{"Inner_example"} // []string | Codes to be searched. (optional)
    wildCard := "wildCard_example" // string | Wildcard search on the code. (optional)
    includeInactive := true // bool | Inactive flag - whether or not to display inactive records (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationConfigAPI.GetHotelTurnAwayCodes(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).Code(code).TurnAwayCodes(turnAwayCodes).WildCard(wildCard).IncludeInactive(includeInactive).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationConfigAPI.GetHotelTurnAwayCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetHotelTurnAwayCodes`: HotelTurnAwayCodes
    fmt.Fprintf(os.Stdout, "Response from `ReservationConfigAPI.GetHotelTurnAwayCodes`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique OPERA Hotel code | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetHotelTurnAwayCodesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **offset** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [default to 0]
 **code** | **[]string** |  | 
 **turnAwayCodes** | **[]string** | Codes to be searched. | 
 **wildCard** | **string** | Wildcard search on the code. | 
 **includeInactive** | **bool** | Inactive flag - whether or not to display inactive records | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**HotelTurnAwayCodes**](HotelTurnAwayCodes.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetLocatorCodes

> LocatorCodesInfo GetLocatorCodes(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelIds(hotelIds).Limit(limit).Offset(offset).LocatorCodes(locatorCodes).WildCard(wildCard).IncludeInactive(includeInactive).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get existing property Locator Codes



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Unique OPERA Hotel code
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    hotelIds := []string{"Inner_example"} // []string | List of Hotels. (optional)
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    offset := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional) (default to 0)
    locatorCodes := []string{"Inner_example"} // []string | Codes to be searched. (optional)
    wildCard := "wildCard_example" // string | Wildcard search on the code. (optional)
    includeInactive := true // bool | Indicator that tells whether to include inactive rules in search results. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationConfigAPI.GetLocatorCodes(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelIds(hotelIds).Limit(limit).Offset(offset).LocatorCodes(locatorCodes).WildCard(wildCard).IncludeInactive(includeInactive).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationConfigAPI.GetLocatorCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetLocatorCodes`: LocatorCodesInfo
    fmt.Fprintf(os.Stdout, "Response from `ReservationConfigAPI.GetLocatorCodes`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique OPERA Hotel code | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetLocatorCodesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **hotelIds** | **[]string** | List of Hotels. | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **offset** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [default to 0]
 **locatorCodes** | **[]string** | Codes to be searched. | 
 **wildCard** | **string** | Wildcard search on the code. | 
 **includeInactive** | **bool** | Indicator that tells whether to include inactive rules in search results. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**LocatorCodesInfo**](LocatorCodesInfo.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetLocatorCodesTemplate

> LocatorCodesTemplateInfo GetLocatorCodesTemplate(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).LocatorCodes(locatorCodes).WildCard(wildCard).IncludeInactive(includeInactive).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get template Locator Codes



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    locatorCodes := []string{"Inner_example"} // []string | Codes to be searched. (optional)
    wildCard := "wildCard_example" // string | Wildcard search on the code. (optional)
    includeInactive := true // bool | Indicator that tells whether to include inactive rules in search results. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationConfigAPI.GetLocatorCodesTemplate(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).LocatorCodes(locatorCodes).WildCard(wildCard).IncludeInactive(includeInactive).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationConfigAPI.GetLocatorCodesTemplate``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetLocatorCodesTemplate`: LocatorCodesTemplateInfo
    fmt.Fprintf(os.Stdout, "Response from `ReservationConfigAPI.GetLocatorCodesTemplate`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetLocatorCodesTemplateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **locatorCodes** | **[]string** | Codes to be searched. | 
 **wildCard** | **string** | Wildcard search on the code. | 
 **includeInactive** | **bool** | Indicator that tells whether to include inactive rules in search results. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**LocatorCodesTemplateInfo**](LocatorCodesTemplateInfo.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetMembershipLevelRatings

> MembershipLevelRatingsInfo GetMembershipLevelRatings(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).MembershipTypeCodes(membershipTypeCodes).WildCardMembershipTypes(wildCardMembershipTypes).MembershipLevelCodes(membershipLevelCodes).WildCardMembershipLevels(wildCardMembershipLevels).DescriptionWildCard(descriptionWildCard).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Membership Level Ratings



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Unique OPERA Hotel code
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    offset := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional) (default to 0)
    membershipTypeCodes := []string{"Inner_example"} // []string | Codes to be searched. (optional)
    wildCardMembershipTypes := "wildCardMembershipTypes_example" // string | Wildcard search on the code. (optional)
    membershipLevelCodes := []string{"Inner_example"} // []string | Codes to be searched. (optional)
    wildCardMembershipLevels := "wildCardMembershipLevels_example" // string | Wildcard search on the code. (optional)
    descriptionWildCard := "descriptionWildCard_example" // string | Criteria to specify which membership levels description would be included in the results. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationConfigAPI.GetMembershipLevelRatings(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).MembershipTypeCodes(membershipTypeCodes).WildCardMembershipTypes(wildCardMembershipTypes).MembershipLevelCodes(membershipLevelCodes).WildCardMembershipLevels(wildCardMembershipLevels).DescriptionWildCard(descriptionWildCard).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationConfigAPI.GetMembershipLevelRatings``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetMembershipLevelRatings`: MembershipLevelRatingsInfo
    fmt.Fprintf(os.Stdout, "Response from `ReservationConfigAPI.GetMembershipLevelRatings`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique OPERA Hotel code | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetMembershipLevelRatingsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **offset** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [default to 0]
 **membershipTypeCodes** | **[]string** | Codes to be searched. | 
 **wildCardMembershipTypes** | **string** | Wildcard search on the code. | 
 **membershipLevelCodes** | **[]string** | Codes to be searched. | 
 **wildCardMembershipLevels** | **string** | Wildcard search on the code. | 
 **descriptionWildCard** | **string** | Criteria to specify which membership levels description would be included in the results. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**MembershipLevelRatingsInfo**](MembershipLevelRatingsInfo.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetRatePlanRatings

> RatePlanRatings GetRatePlanRatings(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).RatePlanCodes(ratePlanCodes).RateCategoryCodes(rateCategoryCodes).Ratings(ratings).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Rate Plan Ratings



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Unique OPERA Hotel code
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    offset := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional) (default to 0)
    ratePlanCodes := []string{"Inner_example"} // []string |  (optional)
    rateCategoryCodes := []string{"Inner_example"} // []string |  (optional)
    ratings := []string{"Ratings_example"} // []string | Possible Rate plan rating values. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationConfigAPI.GetRatePlanRatings(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).RatePlanCodes(ratePlanCodes).RateCategoryCodes(rateCategoryCodes).Ratings(ratings).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationConfigAPI.GetRatePlanRatings``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetRatePlanRatings`: RatePlanRatings
    fmt.Fprintf(os.Stdout, "Response from `ReservationConfigAPI.GetRatePlanRatings`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique OPERA Hotel code | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetRatePlanRatingsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **offset** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [default to 0]
 **ratePlanCodes** | **[]string** |  | 
 **rateCategoryCodes** | **[]string** |  | 
 **ratings** | **[]string** | Possible Rate plan rating values. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**RatePlanRatings**](RatePlanRatings.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetReservationColors

> ReservationColorsResponse GetReservationColors(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Description(description).IncludeInactive(includeInactive).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Reservation Colors



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of hotel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    description := "description_example" // string | Description to filter result. (optional)
    includeInactive := true // bool | Indicates whether to include inactive reservation colors or not. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationConfigAPI.GetReservationColors(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Description(description).IncludeInactive(includeInactive).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationConfigAPI.GetReservationColors``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetReservationColors`: ReservationColorsResponse
    fmt.Fprintf(os.Stdout, "Response from `ReservationConfigAPI.GetReservationColors`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of hotel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetReservationColorsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **description** | **string** | Description to filter result. | 
 **includeInactive** | **bool** | Indicates whether to include inactive reservation colors or not. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ReservationColorsResponse**](ReservationColorsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetRoomFeatureRatings

> RoomFeatureRatingsInfo GetRoomFeatureRatings(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).FeatureCodes(featureCodes).WildCardRoomFeatures(wildCardRoomFeatures).DescriptionWildCard(descriptionWildCard).Ratings(ratings).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Room Feature Ratings



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Unique OPERA Hotel code
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    offset := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional) (default to 0)
    featureCodes := []string{"Inner_example"} // []string | Codes to be searched. (optional)
    wildCardRoomFeatures := "wildCardRoomFeatures_example" // string | Wildcard search on the code. (optional)
    descriptionWildCard := "descriptionWildCard_example" // string | Criteria to specify which rooms features description would be included in the results. (optional)
    ratings := []string{"Ratings_example"} // []string | Possible Room Feature rating values. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationConfigAPI.GetRoomFeatureRatings(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).FeatureCodes(featureCodes).WildCardRoomFeatures(wildCardRoomFeatures).DescriptionWildCard(descriptionWildCard).Ratings(ratings).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationConfigAPI.GetRoomFeatureRatings``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetRoomFeatureRatings`: RoomFeatureRatingsInfo
    fmt.Fprintf(os.Stdout, "Response from `ReservationConfigAPI.GetRoomFeatureRatings`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique OPERA Hotel code | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetRoomFeatureRatingsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **offset** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [default to 0]
 **featureCodes** | **[]string** | Codes to be searched. | 
 **wildCardRoomFeatures** | **string** | Wildcard search on the code. | 
 **descriptionWildCard** | **string** | Criteria to specify which rooms features description would be included in the results. | 
 **ratings** | **[]string** | Possible Room Feature rating values. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**RoomFeatureRatingsInfo**](RoomFeatureRatingsInfo.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetRoomRatings

> RoomRatings GetRoomRatings(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).RoomNumberCodes(roomNumberCodes).RoomTypeCodes(roomTypeCodes).RoomClassCodes(roomClassCodes).Ratings(ratings).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Room Ratings



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Unique OPERA Hotel code
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    offset := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional) (default to 0)
    roomNumberCodes := []string{"Inner_example"} // []string |  (optional)
    roomTypeCodes := []string{"Inner_example"} // []string |  (optional)
    roomClassCodes := []string{"Inner_example"} // []string |  (optional)
    ratings := []string{"Ratings_example"} // []string | Possible room rating values. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationConfigAPI.GetRoomRatings(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).RoomNumberCodes(roomNumberCodes).RoomTypeCodes(roomTypeCodes).RoomClassCodes(roomClassCodes).Ratings(ratings).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationConfigAPI.GetRoomRatings``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetRoomRatings`: RoomRatings
    fmt.Fprintf(os.Stdout, "Response from `ReservationConfigAPI.GetRoomRatings`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique OPERA Hotel code | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetRoomRatingsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **offset** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [default to 0]
 **roomNumberCodes** | **[]string** |  | 
 **roomTypeCodes** | **[]string** |  | 
 **roomClassCodes** | **[]string** |  | 
 **ratings** | **[]string** | Possible room rating values. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**RoomRatings**](RoomRatings.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetRoomSpecialRatings

> RoomSpecialRatingsInfo GetRoomSpecialRatings(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).SpecialCodes(specialCodes).WildCardRoomSpecials(wildCardRoomSpecials).DescriptionWildCard(descriptionWildCard).Ratings(ratings).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Room Special Ratings



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Unique OPERA Hotel code
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    offset := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional) (default to 0)
    specialCodes := []string{"Inner_example"} // []string | Codes to be searched. (optional)
    wildCardRoomSpecials := "wildCardRoomSpecials_example" // string | Wildcard search on the code. (optional)
    descriptionWildCard := "descriptionWildCard_example" // string | Criteria to specify which rooms specials description would be included in the results. (optional)
    ratings := []string{"Ratings_example"} // []string | Possible Room special rating values. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationConfigAPI.GetRoomSpecialRatings(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).SpecialCodes(specialCodes).WildCardRoomSpecials(wildCardRoomSpecials).DescriptionWildCard(descriptionWildCard).Ratings(ratings).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationConfigAPI.GetRoomSpecialRatings``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetRoomSpecialRatings`: RoomSpecialRatingsInfo
    fmt.Fprintf(os.Stdout, "Response from `ReservationConfigAPI.GetRoomSpecialRatings`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique OPERA Hotel code | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetRoomSpecialRatingsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **offset** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [default to 0]
 **specialCodes** | **[]string** | Codes to be searched. | 
 **wildCardRoomSpecials** | **string** | Wildcard search on the code. | 
 **descriptionWildCard** | **string** | Criteria to specify which rooms specials description would be included in the results. | 
 **ratings** | **[]string** | Possible Room special rating values. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**RoomSpecialRatingsInfo**](RoomSpecialRatingsInfo.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetTemplateTurnAwayCodes

> TemplateTurnAwayCodes GetTemplateTurnAwayCodes(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Codes(codes).WildCard(wildCard).IncludeInactive(includeInactive).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Template TurnAway Codes



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    codes := []string{"Inner_example"} // []string | Codes to be searched. (optional)
    wildCard := "wildCard_example" // string | Wildcard search on the code. (optional)
    includeInactive := true // bool | Inactive flag - whether or not to display inactive records. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationConfigAPI.GetTemplateTurnAwayCodes(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Codes(codes).WildCard(wildCard).IncludeInactive(includeInactive).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationConfigAPI.GetTemplateTurnAwayCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetTemplateTurnAwayCodes`: TemplateTurnAwayCodes
    fmt.Fprintf(os.Stdout, "Response from `ReservationConfigAPI.GetTemplateTurnAwayCodes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetTemplateTurnAwayCodesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **codes** | **[]string** | Codes to be searched. | 
 **wildCard** | **string** | Wildcard search on the code. | 
 **includeInactive** | **bool** | Inactive flag - whether or not to display inactive records. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**TemplateTurnAwayCodes**](TemplateTurnAwayCodes.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetTraceTexts

> TraceTextsToBeFetched GetTraceTexts(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ExcludeGlobal(excludeGlobal).DepartmentCodes(departmentCodes).HotelIds(hotelIds).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get trace texts 



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    excludeGlobal := true // bool | Flag to tell whether to exclude global traces or not. (optional) (default to false)
    departmentCodes := []string{"Inner_example"} // []string |  (optional)
    hotelIds := []string{"Inner_example"} // []string |  (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationConfigAPI.GetTraceTexts(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ExcludeGlobal(excludeGlobal).DepartmentCodes(departmentCodes).HotelIds(hotelIds).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationConfigAPI.GetTraceTexts``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetTraceTexts`: TraceTextsToBeFetched
    fmt.Fprintf(os.Stdout, "Response from `ReservationConfigAPI.GetTraceTexts`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetTraceTextsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **excludeGlobal** | **bool** | Flag to tell whether to exclude global traces or not. | [default to false]
 **departmentCodes** | **[]string** |  | 
 **hotelIds** | **[]string** |  | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**TraceTextsToBeFetched**](TraceTextsToBeFetched.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetUpsellRules

> UpsellRules GetUpsellRules(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).StayDate(stayDate).Rule(rule).SearchByRoomType(searchByRoomType).FromCodes(fromCodes).ToCodes(toCodes).RateCode(rateCode).MembershipType(membershipType).Channel(channel).ReservationTypeCodes(reservationTypeCodes).MarketCodes(marketCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get upsell rules



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Unique OPERA Hotel code
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    stayDate := time.Now() // string | The stay date to be searched. (optional)
    rule := "rule_example" // string | Wildcard search for the upsell rule code or description. (optional)
    searchByRoomType := true // bool | Signifies whether upsell rules are to be searched based on Room Type or Room Class. (optional)
    fromCodes := []string{"Inner_example"} // []string |  (optional)
    toCodes := []string{"Inner_example"} // []string |  (optional)
    rateCode := "rateCode_example" // string | Rate code to be searched. (optional)
    membershipType := "membershipType_example" // string | Membership type to be searched. (optional)
    channel := "channel_example" // string | Channel to be searched. (optional)
    reservationTypeCodes := []string{"Inner_example"} // []string |  (optional)
    marketCodes := []string{"Inner_example"} // []string |  (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationConfigAPI.GetUpsellRules(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).StayDate(stayDate).Rule(rule).SearchByRoomType(searchByRoomType).FromCodes(fromCodes).ToCodes(toCodes).RateCode(rateCode).MembershipType(membershipType).Channel(channel).ReservationTypeCodes(reservationTypeCodes).MarketCodes(marketCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationConfigAPI.GetUpsellRules``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetUpsellRules`: UpsellRules
    fmt.Fprintf(os.Stdout, "Response from `ReservationConfigAPI.GetUpsellRules`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique OPERA Hotel code | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetUpsellRulesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **stayDate** | **string** | The stay date to be searched. | 
 **rule** | **string** | Wildcard search for the upsell rule code or description. | 
 **searchByRoomType** | **bool** | Signifies whether upsell rules are to be searched based on Room Type or Room Class. | 
 **fromCodes** | **[]string** |  | 
 **toCodes** | **[]string** |  | 
 **rateCode** | **string** | Rate code to be searched. | 
 **membershipType** | **string** | Membership type to be searched. | 
 **channel** | **string** | Channel to be searched. | 
 **reservationTypeCodes** | **[]string** |  | 
 **marketCodes** | **[]string** |  | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**UpsellRules**](UpsellRules.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostAlertCodeTemplates

> Status PostAlertCodeTemplates(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AlertTemplates(alertTemplates).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create Alert Code Template



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    alertTemplates := *openapiclient.NewAlertTemplates() // AlertTemplates | Request object for creating a new alert code template.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationConfigAPI.PostAlertCodeTemplates(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AlertTemplates(alertTemplates).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationConfigAPI.PostAlertCodeTemplates``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostAlertCodeTemplates`: Status
    fmt.Fprintf(os.Stdout, "Response from `ReservationConfigAPI.PostAlertCodeTemplates`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostAlertCodeTemplatesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **alertTemplates** | [**AlertTemplates**](AlertTemplates.md) | Request object for creating a new alert code template. | 
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


## PostAlertCodes

> Status PostAlertCodes(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AlertCodes(alertCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create a new alert code



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Unique OPERA Hotel code
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    alertCodes := *openapiclient.NewAlertCodes() // AlertCodes | Request object for creating a new group of alerts.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationConfigAPI.PostAlertCodes(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AlertCodes(alertCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationConfigAPI.PostAlertCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostAlertCodes`: Status
    fmt.Fprintf(os.Stdout, "Response from `ReservationConfigAPI.PostAlertCodes`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique OPERA Hotel code | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostAlertCodesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **alertCodes** | [**AlertCodes**](AlertCodes.md) | Request object for creating a new group of alerts. | 
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


## PostAutoAttachElements

> Status PostAutoAttachElements(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AutoAttachElements(autoAttachElements).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create Auto Attach Elements



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Unique OPERA Hotel code
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    autoAttachElements := *openapiclient.NewAutoAttachElements() // AutoAttachElements | Add configuration rule(s) that specify the elements to be automatically attached to the reservation.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationConfigAPI.PostAutoAttachElements(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AutoAttachElements(autoAttachElements).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationConfigAPI.PostAutoAttachElements``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostAutoAttachElements`: Status
    fmt.Fprintf(os.Stdout, "Response from `ReservationConfigAPI.PostAutoAttachElements`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique OPERA Hotel code | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostAutoAttachElementsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **autoAttachElements** | [**AutoAttachElements**](AutoAttachElements.md) | Add configuration rule(s) that specify the elements to be automatically attached to the reservation. | 
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


## PostECouponCodes

> Status PostECouponCodes(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ECouponCodes(eCouponCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create an eCoupon Code



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Unique OPERA Hotel code
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    eCouponCodes := *openapiclient.NewECouponCodes() // ECouponCodes | Request object to create new eCoupon codes.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationConfigAPI.PostECouponCodes(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ECouponCodes(eCouponCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationConfigAPI.PostECouponCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostECouponCodes`: Status
    fmt.Fprintf(os.Stdout, "Response from `ReservationConfigAPI.PostECouponCodes`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique OPERA Hotel code | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostECouponCodesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **eCouponCodes** | [**ECouponCodes**](ECouponCodes.md) | Request object to create new eCoupon codes. | 
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


## PostGlobalAlerts

> Status PostGlobalAlerts(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).GlobalAlerts(globalAlerts).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create Global Alerts



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Unique OPERA Hotel code
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    globalAlerts := *openapiclient.NewGlobalAlerts() // GlobalAlerts | Request object for creating a new Global Alert.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationConfigAPI.PostGlobalAlerts(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).GlobalAlerts(globalAlerts).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationConfigAPI.PostGlobalAlerts``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostGlobalAlerts`: Status
    fmt.Fprintf(os.Stdout, "Response from `ReservationConfigAPI.PostGlobalAlerts`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique OPERA Hotel code | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostGlobalAlertsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **globalAlerts** | [**GlobalAlerts**](GlobalAlerts.md) | Request object for creating a new Global Alert. | 
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


## PostGuestMessageTemplates

> Status PostGuestMessageTemplates(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).GuestMessageTemplates(guestMessageTemplates).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create a new guest message template



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    guestMessageTemplates := *openapiclient.NewGuestMessageTemplates() // GuestMessageTemplates | Request object for creating a new guest message template.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationConfigAPI.PostGuestMessageTemplates(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).GuestMessageTemplates(guestMessageTemplates).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationConfigAPI.PostGuestMessageTemplates``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostGuestMessageTemplates`: Status
    fmt.Fprintf(os.Stdout, "Response from `ReservationConfigAPI.PostGuestMessageTemplates`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostGuestMessageTemplatesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **guestMessageTemplates** | [**GuestMessageTemplates**](GuestMessageTemplates.md) | Request object for creating a new guest message template. | 
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


## PostGuestMessages

> Status PostGuestMessages(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).GuestMessages(guestMessages).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create Guest Messages



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Unique OPERA Hotel code
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    guestMessages := *openapiclient.NewGuestMessages() // GuestMessages | Request object for creating a new guest message.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationConfigAPI.PostGuestMessages(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).GuestMessages(guestMessages).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationConfigAPI.PostGuestMessages``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostGuestMessages`: Status
    fmt.Fprintf(os.Stdout, "Response from `ReservationConfigAPI.PostGuestMessages`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique OPERA Hotel code | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostGuestMessagesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **guestMessages** | [**GuestMessages**](GuestMessages.md) | Request object for creating a new guest message. | 
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


## PostHotelTurnAwayCodes

> Status PostHotelTurnAwayCodes(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelTurnAwayCodes(hotelTurnAwayCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create Turn Away Codes



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Unique OPERA Hotel code
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    hotelTurnAwayCodes := *openapiclient.NewHotelTurnAwayCodes() // HotelTurnAwayCodes | Request object for creating new hotel turnaway code.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationConfigAPI.PostHotelTurnAwayCodes(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelTurnAwayCodes(hotelTurnAwayCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationConfigAPI.PostHotelTurnAwayCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostHotelTurnAwayCodes`: Status
    fmt.Fprintf(os.Stdout, "Response from `ReservationConfigAPI.PostHotelTurnAwayCodes`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique OPERA Hotel code | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostHotelTurnAwayCodesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **hotelTurnAwayCodes** | [**HotelTurnAwayCodes**](HotelTurnAwayCodes.md) | Request object for creating new hotel turnaway code. | 
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


## PostLocatorCodes

> Status PostLocatorCodes(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).LocatorCodes(locatorCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create a new Locator Code



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Unique OPERA Hotel code
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    locatorCodes := *openapiclient.NewLocatorCodes() // LocatorCodes | Request object for creating a new locator code.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationConfigAPI.PostLocatorCodes(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).LocatorCodes(locatorCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationConfigAPI.PostLocatorCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostLocatorCodes`: Status
    fmt.Fprintf(os.Stdout, "Response from `ReservationConfigAPI.PostLocatorCodes`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique OPERA Hotel code | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostLocatorCodesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **locatorCodes** | [**LocatorCodes**](LocatorCodes.md) | Request object for creating a new locator code. | 
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


## PostLocatorCodesTemplate

> Status PostLocatorCodesTemplate(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).LocatorCodesTemplate(locatorCodesTemplate).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create a template Locator Code



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    locatorCodesTemplate := *openapiclient.NewLocatorCodesTemplate() // LocatorCodesTemplate | Request object for creating locator code template.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationConfigAPI.PostLocatorCodesTemplate(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).LocatorCodesTemplate(locatorCodesTemplate).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationConfigAPI.PostLocatorCodesTemplate``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostLocatorCodesTemplate`: Status
    fmt.Fprintf(os.Stdout, "Response from `ReservationConfigAPI.PostLocatorCodesTemplate`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostLocatorCodesTemplateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **locatorCodesTemplate** | [**LocatorCodesTemplate**](LocatorCodesTemplate.md) | Request object for creating locator code template. | 
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


## PostTemplateTurnAwayCodes

> Status PostTemplateTurnAwayCodes(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TemplateTurnAwayCodes(templateTurnAwayCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create Template TurnAway Codes



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    templateTurnAwayCodes := *openapiclient.NewTemplateTurnAwayCodes() // TemplateTurnAwayCodes | Request object for creating new template turnaway code.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationConfigAPI.PostTemplateTurnAwayCodes(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TemplateTurnAwayCodes(templateTurnAwayCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationConfigAPI.PostTemplateTurnAwayCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostTemplateTurnAwayCodes`: Status
    fmt.Fprintf(os.Stdout, "Response from `ReservationConfigAPI.PostTemplateTurnAwayCodes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostTemplateTurnAwayCodesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **templateTurnAwayCodes** | [**TemplateTurnAwayCodes**](TemplateTurnAwayCodes.md) | Request object for creating new template turnaway code. | 
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


## PostTraceTexts

> Status PostTraceTexts(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TraceTextsToBeCreated(traceTextsToBeCreated).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create new trace texts



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    traceTextsToBeCreated := *openapiclient.NewTraceTextsToBeCreated() // TraceTextsToBeCreated | Request object for creating new trace texts.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationConfigAPI.PostTraceTexts(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TraceTextsToBeCreated(traceTextsToBeCreated).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationConfigAPI.PostTraceTexts``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostTraceTexts`: Status
    fmt.Fprintf(os.Stdout, "Response from `ReservationConfigAPI.PostTraceTexts`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostTraceTextsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **traceTextsToBeCreated** | [**TraceTextsToBeCreated**](TraceTextsToBeCreated.md) | Request object for creating new trace texts. | 
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


## PostUpsellRules

> Status PostUpsellRules(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).UpsellRules(upsellRules).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create Upsell Rules



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Unique OPERA Hotel code
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    upsellRules := *openapiclient.NewUpsellRules() // UpsellRules | Request object for creating new upsell rules.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationConfigAPI.PostUpsellRules(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).UpsellRules(upsellRules).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationConfigAPI.PostUpsellRules``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostUpsellRules`: Status
    fmt.Fprintf(os.Stdout, "Response from `ReservationConfigAPI.PostUpsellRules`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique OPERA Hotel code | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostUpsellRulesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **upsellRules** | [**UpsellRules**](UpsellRules.md) | Request object for creating new upsell rules. | 
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


## PutAlertCodeTemplates

> Status PutAlertCodeTemplates(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AlertTemplates(alertTemplates).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change Alert Code Template



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    alertTemplates := *openapiclient.NewAlertTemplates() // AlertTemplates | Request object for modifying the existing alert code templates.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationConfigAPI.PutAlertCodeTemplates(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AlertTemplates(alertTemplates).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationConfigAPI.PutAlertCodeTemplates``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutAlertCodeTemplates`: Status
    fmt.Fprintf(os.Stdout, "Response from `ReservationConfigAPI.PutAlertCodeTemplates`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPutAlertCodeTemplatesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **alertTemplates** | [**AlertTemplates**](AlertTemplates.md) | Request object for modifying the existing alert code templates. | 
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


## PutAlertCodes

> Status PutAlertCodes(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AlertCodes(alertCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change Alert Codes



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Unique OPERA Hotel code
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    alertCodes := *openapiclient.NewAlertCodes() // AlertCodes | Request object for modifying an existing alert.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationConfigAPI.PutAlertCodes(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AlertCodes(alertCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationConfigAPI.PutAlertCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutAlertCodes`: Status
    fmt.Fprintf(os.Stdout, "Response from `ReservationConfigAPI.PutAlertCodes`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique OPERA Hotel code | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutAlertCodesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **alertCodes** | [**AlertCodes**](AlertCodes.md) | Request object for modifying an existing alert. | 
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


## PutAutoAttachElements

> Status PutAutoAttachElements(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AutoAttachElements(autoAttachElements).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Update Auto Attach Elements



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Unique OPERA Hotel code
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    autoAttachElements := *openapiclient.NewAutoAttachElements() // AutoAttachElements | Modify auto attach configuration rule(s).
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationConfigAPI.PutAutoAttachElements(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AutoAttachElements(autoAttachElements).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationConfigAPI.PutAutoAttachElements``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutAutoAttachElements`: Status
    fmt.Fprintf(os.Stdout, "Response from `ReservationConfigAPI.PutAutoAttachElements`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique OPERA Hotel code | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutAutoAttachElementsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **autoAttachElements** | [**AutoAttachElements**](AutoAttachElements.md) | Modify auto attach configuration rule(s). | 
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


## PutECouponCodes

> Status PutECouponCodes(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ECouponCodes(eCouponCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change an eCoupon Code



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Unique OPERA Hotel code
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    eCouponCodes := *openapiclient.NewECouponCodes() // ECouponCodes | Request object for changing the existing eCoupon codes.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationConfigAPI.PutECouponCodes(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ECouponCodes(eCouponCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationConfigAPI.PutECouponCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutECouponCodes`: Status
    fmt.Fprintf(os.Stdout, "Response from `ReservationConfigAPI.PutECouponCodes`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique OPERA Hotel code | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutECouponCodesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **eCouponCodes** | [**ECouponCodes**](ECouponCodes.md) | Request object for changing the existing eCoupon codes. | 
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


## PutGlobalAlerts

> Status PutGlobalAlerts(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).GlobalAlerts(globalAlerts).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change Global Alerts



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Unique OPERA Hotel code
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    globalAlerts := *openapiclient.NewGlobalAlerts() // GlobalAlerts | Request object for modifying an existing Global Alert.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationConfigAPI.PutGlobalAlerts(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).GlobalAlerts(globalAlerts).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationConfigAPI.PutGlobalAlerts``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutGlobalAlerts`: Status
    fmt.Fprintf(os.Stdout, "Response from `ReservationConfigAPI.PutGlobalAlerts`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique OPERA Hotel code | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutGlobalAlertsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **globalAlerts** | [**GlobalAlerts**](GlobalAlerts.md) | Request object for modifying an existing Global Alert. | 
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


## PutGuestMessageTemplates

> Status PutGuestMessageTemplates(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).GuestMessageTemplates(guestMessageTemplates).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change Guest Message Templates



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    guestMessageTemplates := *openapiclient.NewGuestMessageTemplates() // GuestMessageTemplates | Request object for modifying an existing guest message template.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationConfigAPI.PutGuestMessageTemplates(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).GuestMessageTemplates(guestMessageTemplates).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationConfigAPI.PutGuestMessageTemplates``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutGuestMessageTemplates`: Status
    fmt.Fprintf(os.Stdout, "Response from `ReservationConfigAPI.PutGuestMessageTemplates`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPutGuestMessageTemplatesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **guestMessageTemplates** | [**GuestMessageTemplates**](GuestMessageTemplates.md) | Request object for modifying an existing guest message template. | 
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


## PutGuestMessages

> Status PutGuestMessages(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).GuestMessages(guestMessages).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change a Guest messages



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Unique OPERA Hotel code
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    guestMessages := *openapiclient.NewGuestMessages() // GuestMessages | Request object for modifying an existing guest message.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationConfigAPI.PutGuestMessages(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).GuestMessages(guestMessages).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationConfigAPI.PutGuestMessages``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutGuestMessages`: Status
    fmt.Fprintf(os.Stdout, "Response from `ReservationConfigAPI.PutGuestMessages`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique OPERA Hotel code | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutGuestMessagesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **guestMessages** | [**GuestMessages**](GuestMessages.md) | Request object for modifying an existing guest message. | 
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


## PutHotelTurnAwayCodes

> Status PutHotelTurnAwayCodes(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelTurnAwayCodes(hotelTurnAwayCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change TurnAway Codes



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Unique OPERA Hotel code
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    hotelTurnAwayCodes := *openapiclient.NewHotelTurnAwayCodes() // HotelTurnAwayCodes | Request object for modifying hotel turnaway codes.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationConfigAPI.PutHotelTurnAwayCodes(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelTurnAwayCodes(hotelTurnAwayCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationConfigAPI.PutHotelTurnAwayCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutHotelTurnAwayCodes`: Status
    fmt.Fprintf(os.Stdout, "Response from `ReservationConfigAPI.PutHotelTurnAwayCodes`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique OPERA Hotel code | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutHotelTurnAwayCodesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **hotelTurnAwayCodes** | [**HotelTurnAwayCodes**](HotelTurnAwayCodes.md) | Request object for modifying hotel turnaway codes. | 
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


## PutLocatorCodes

> Status PutLocatorCodes(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).LocatorCodes(locatorCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change the existing Locator Code



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Unique OPERA Hotel code
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    locatorCodes := *openapiclient.NewLocatorCodes() // LocatorCodes | Request object for modifying an existing locator code.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationConfigAPI.PutLocatorCodes(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).LocatorCodes(locatorCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationConfigAPI.PutLocatorCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutLocatorCodes`: Status
    fmt.Fprintf(os.Stdout, "Response from `ReservationConfigAPI.PutLocatorCodes`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique OPERA Hotel code | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutLocatorCodesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **locatorCodes** | [**LocatorCodes**](LocatorCodes.md) | Request object for modifying an existing locator code. | 
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


## PutLocatorCodesTemplate

> Status PutLocatorCodesTemplate(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).LocatorCodesTemplate(locatorCodesTemplate).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change a Locator Code



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    locatorCodesTemplate := *openapiclient.NewLocatorCodesTemplate() // LocatorCodesTemplate | Request object for modifying an existing locator code template.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationConfigAPI.PutLocatorCodesTemplate(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).LocatorCodesTemplate(locatorCodesTemplate).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationConfigAPI.PutLocatorCodesTemplate``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutLocatorCodesTemplate`: Status
    fmt.Fprintf(os.Stdout, "Response from `ReservationConfigAPI.PutLocatorCodesTemplate`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPutLocatorCodesTemplateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **locatorCodesTemplate** | [**LocatorCodesTemplate**](LocatorCodesTemplate.md) | Request object for modifying an existing locator code template. | 
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


## PutMembershipLevelRatings

> Status PutMembershipLevelRatings(ctx, membershipLevel, membershipType, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).MembershipLevelRatings(membershipLevelRatings).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change Membership Level Ratings



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    membershipLevel := "membershipLevel_example" // string | OPERA Membership level
    membershipType := "membershipType_example" // string | OPERA Membership type
    hotelId := "hotelId_example" // string | Unique OPERA Hotel code
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    membershipLevelRatings := *openapiclient.NewMembershipLevelRatings() // MembershipLevelRatings | Request object for modifying membership levels rating details.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationConfigAPI.PutMembershipLevelRatings(context.Background(), membershipLevel, membershipType, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).MembershipLevelRatings(membershipLevelRatings).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationConfigAPI.PutMembershipLevelRatings``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutMembershipLevelRatings`: Status
    fmt.Fprintf(os.Stdout, "Response from `ReservationConfigAPI.PutMembershipLevelRatings`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**membershipLevel** | **string** | OPERA Membership level | 
**membershipType** | **string** | OPERA Membership type | 
**hotelId** | **string** | Unique OPERA Hotel code | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutMembershipLevelRatingsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **membershipLevelRatings** | [**MembershipLevelRatings**](MembershipLevelRatings.md) | Request object for modifying membership levels rating details. | 
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


## PutRatePlanRatings

> Status PutRatePlanRatings(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RatePlanRatingsInfo(ratePlanRatingsInfo).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change Rate Plan Ratings



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Unique OPERA Hotel code
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    ratePlanRatingsInfo := *openapiclient.NewRatePlanRatingsInfo() // RatePlanRatingsInfo | Request object for modifying rate plan codes and their rating details.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationConfigAPI.PutRatePlanRatings(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RatePlanRatingsInfo(ratePlanRatingsInfo).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationConfigAPI.PutRatePlanRatings``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutRatePlanRatings`: Status
    fmt.Fprintf(os.Stdout, "Response from `ReservationConfigAPI.PutRatePlanRatings`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique OPERA Hotel code | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutRatePlanRatingsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **ratePlanRatingsInfo** | [**RatePlanRatingsInfo**](RatePlanRatingsInfo.md) | Request object for modifying rate plan codes and their rating details. | 
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


## PutReservationColors

> Status PutReservationColors(ctx, code, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ReservationColorsToChange(reservationColorsToChange).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change Reservation Colors



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    code := "code_example" // string | 
    hotelId := "hotelId_example" // string | Unique ID of hotel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    reservationColorsToChange := *openapiclient.NewReservationColorsToChange() // ReservationColorsToChange | Request object to change reservation colors.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationConfigAPI.PutReservationColors(context.Background(), code, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ReservationColorsToChange(reservationColorsToChange).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationConfigAPI.PutReservationColors``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutReservationColors`: Status
    fmt.Fprintf(os.Stdout, "Response from `ReservationConfigAPI.PutReservationColors`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**code** | **string** |  | 
**hotelId** | **string** | Unique ID of hotel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutReservationColorsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **reservationColorsToChange** | [**ReservationColorsToChange**](ReservationColorsToChange.md) | Request object to change reservation colors. | 
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


## PutRoomFeatureRatings

> Status PutRoomFeatureRatings(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoomFeatureRatings(roomFeatureRatings).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change Room Feature Ratings



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Unique OPERA Hotel code
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    roomFeatureRatings := *openapiclient.NewRoomFeatureRatings() // RoomFeatureRatings | Request object for modifying room features rating details.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationConfigAPI.PutRoomFeatureRatings(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoomFeatureRatings(roomFeatureRatings).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationConfigAPI.PutRoomFeatureRatings``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutRoomFeatureRatings`: Status
    fmt.Fprintf(os.Stdout, "Response from `ReservationConfigAPI.PutRoomFeatureRatings`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique OPERA Hotel code | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutRoomFeatureRatingsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **roomFeatureRatings** | [**RoomFeatureRatings**](RoomFeatureRatings.md) | Request object for modifying room features rating details. | 
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


## PutRoomRatings

> Status PutRoomRatings(ctx, roomId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoomRatingsInfo(roomRatingsInfo).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change Room Ratings



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    roomId := "roomId_example" // string | OPERA Room id
    hotelId := "hotelId_example" // string | Unique OPERA Hotel code
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    roomRatingsInfo := *openapiclient.NewRoomRatingsInfo() // RoomRatingsInfo | Request object for modifying room rating details.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationConfigAPI.PutRoomRatings(context.Background(), roomId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoomRatingsInfo(roomRatingsInfo).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationConfigAPI.PutRoomRatings``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutRoomRatings`: Status
    fmt.Fprintf(os.Stdout, "Response from `ReservationConfigAPI.PutRoomRatings`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**roomId** | **string** | OPERA Room id | 
**hotelId** | **string** | Unique OPERA Hotel code | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutRoomRatingsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **roomRatingsInfo** | [**RoomRatingsInfo**](RoomRatingsInfo.md) | Request object for modifying room rating details. | 
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


## PutRoomSpecialRatings

> Status PutRoomSpecialRatings(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoomSpecialRatings(roomSpecialRatings).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change Room Special Ratings



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Unique OPERA Hotel code
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    roomSpecialRatings := *openapiclient.NewRoomSpecialRatings() // RoomSpecialRatings | Request object for modifying room specials rating details.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationConfigAPI.PutRoomSpecialRatings(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoomSpecialRatings(roomSpecialRatings).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationConfigAPI.PutRoomSpecialRatings``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutRoomSpecialRatings`: Status
    fmt.Fprintf(os.Stdout, "Response from `ReservationConfigAPI.PutRoomSpecialRatings`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique OPERA Hotel code | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutRoomSpecialRatingsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **roomSpecialRatings** | [**RoomSpecialRatings**](RoomSpecialRatings.md) | Request object for modifying room specials rating details. | 
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


## PutTemplateTurnAwayCodes

> Status PutTemplateTurnAwayCodes(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TemplateTurnAwayCodes(templateTurnAwayCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change a Turnaway code template



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    templateTurnAwayCodes := *openapiclient.NewTemplateTurnAwayCodes() // TemplateTurnAwayCodes | Request object for modifying template turnaway codes.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationConfigAPI.PutTemplateTurnAwayCodes(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TemplateTurnAwayCodes(templateTurnAwayCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationConfigAPI.PutTemplateTurnAwayCodes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutTemplateTurnAwayCodes`: Status
    fmt.Fprintf(os.Stdout, "Response from `ReservationConfigAPI.PutTemplateTurnAwayCodes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPutTemplateTurnAwayCodesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **templateTurnAwayCodes** | [**TemplateTurnAwayCodes**](TemplateTurnAwayCodes.md) | Request object for modifying template turnaway codes. | 
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


## PutTraceTexts

> Status PutTraceTexts(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TraceTextChanges(traceTextChanges).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change trace text 



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    traceTextChanges := *openapiclient.NewTraceTextChanges() // TraceTextChanges | Request object for changing trace texts.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationConfigAPI.PutTraceTexts(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TraceTextChanges(traceTextChanges).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationConfigAPI.PutTraceTexts``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutTraceTexts`: Status
    fmt.Fprintf(os.Stdout, "Response from `ReservationConfigAPI.PutTraceTexts`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPutTraceTextsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **traceTextChanges** | [**TraceTextChanges**](TraceTextChanges.md) | Request object for changing trace texts. | 
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


## PutUpsellRules

> Status PutUpsellRules(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).UpsellRules(upsellRules).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Modify Upsell Rule



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Unique OPERA Hotel code
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    upsellRules := *openapiclient.NewUpsellRules() // UpsellRules | Request object for changing existing upsell rules.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationConfigAPI.PutUpsellRules(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).UpsellRules(upsellRules).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationConfigAPI.PutUpsellRules``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutUpsellRules`: Status
    fmt.Fprintf(os.Stdout, "Response from `ReservationConfigAPI.PutUpsellRules`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique OPERA Hotel code | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutUpsellRulesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **upsellRules** | [**UpsellRules**](UpsellRules.md) | Request object for changing existing upsell rules. | 
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


## TestUpsellRules

> UpsellRulesToTestDetails TestUpsellRules(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).UpsellRulesToTest(upsellRulesToTest).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Test upsell rules



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsvcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Unique OPERA Hotel code
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    upsellRulesToTest := *openapiclient.NewUpsellRulesToTest() // UpsellRulesToTest | Request object for testing upsell rules.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationConfigAPI.TestUpsellRules(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).UpsellRulesToTest(upsellRulesToTest).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationConfigAPI.TestUpsellRules``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `TestUpsellRules`: UpsellRulesToTestDetails
    fmt.Fprintf(os.Stdout, "Response from `ReservationConfigAPI.TestUpsellRules`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique OPERA Hotel code | 

### Other Parameters

Other parameters are passed through a pointer to a apiTestUpsellRulesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **upsellRulesToTest** | [**UpsellRulesToTest**](UpsellRulesToTest.md) | Request object for testing upsell rules. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**UpsellRulesToTestDetails**](UpsellRulesToTestDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


# \EventManagementAPI

All URIs are relative to */evm/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CateringEventsBulkUpdate**](EventManagementAPI.md#CateringEventsBulkUpdate) | **Put** /cateringEvents | Update multiple catering events
[**ChangeCateringPackageRevenue**](EventManagementAPI.md#ChangeCateringPackageRevenue) | **Put** /cateringPackagesRevenue | Update Catering package revenue
[**ChangeCateringPackages**](EventManagementAPI.md#ChangeCateringPackages) | **Put** /blocks/{blockId}/cateringPackages | Update a Catering packages
[**ChangeEventResourceByMenu**](EventManagementAPI.md#ChangeEventResourceByMenu) | **Put** /eventResource | Update Event Resource 
[**ChangeEvents**](EventManagementAPI.md#ChangeEvents) | **Put** /hotels/{hotelId}/events/{eventId} | Update an Event
[**ChangeEventsResources**](EventManagementAPI.md#ChangeEventsResources) | **Put** /hotels/{hotelId}/eventsResources | Update Events Resources
[**ChangeEventsResourcesByChain**](EventManagementAPI.md#ChangeEventsResourcesByChain) | **Put** /eventsResources | Update Events Resources by chain
[**CopyCateringEvents**](EventManagementAPI.md#CopyCateringEvents) | **Put** /hotels/{hotelId}/blocks/{blockId}/cateringEvents/copy | Copy Catering Event
[**CopyCateringPackage**](EventManagementAPI.md#CopyCateringPackage) | **Put** /blocks/{blockId}/cateringPackages/{cateringpackageId}/copy | Copy a Catering package
[**CopyEventResources**](EventManagementAPI.md#CopyEventResources) | **Put** /blocks/{blockId}/events/{eventId}/resources/copy | Copy event resources
[**DeleteCateringPackage**](EventManagementAPI.md#DeleteCateringPackage) | **Delete** /hotels/{hotelId}/blocks/{blockId}/cateringPackages/{cateringPackageId} | Delete Catering package
[**DeleteCateringPackageRevenue**](EventManagementAPI.md#DeleteCateringPackageRevenue) | **Delete** /cateringPackagesRevenue | Delete Catering package revenue
[**DeleteCateringPackages**](EventManagementAPI.md#DeleteCateringPackages) | **Delete** /hotels/{hotelId}/blocks/{blockId}/cateringPackages | Delete one or more catering package(s)
[**DeleteEvents**](EventManagementAPI.md#DeleteEvents) | **Delete** /hotels/{hotelId}/events/{eventId} | Delete an Event
[**GetBlockPostingAccountReservations**](EventManagementAPI.md#GetBlockPostingAccountReservations) | **Get** /hotels/{hotelId}/fetchBlockPostingAccountReservations | Get Catering Event postings
[**GetCateringEventChanges**](EventManagementAPI.md#GetCateringEventChanges) | **Get** /hotels/{hotelId}/cateringEventChanges | Get Catering Event changes
[**GetCateringEventPostings**](EventManagementAPI.md#GetCateringEventPostings) | **Get** /hotels/{hotelId}/events/{eventId}/cateringEventPostings | Get Catering Event postings
[**GetCateringPackageRevenue**](EventManagementAPI.md#GetCateringPackageRevenue) | **Get** /blocks/{blockId}/cateringPackages/{cateringpackageId}/revenue | Get Catering package revenue
[**GetCateringPackages**](EventManagementAPI.md#GetCateringPackages) | **Get** /blocks/{blockId}/cateringPackages | Get Catering packages 
[**GetEvent**](EventManagementAPI.md#GetEvent) | **Get** /hotels/{hotelId}/events/{eventId} | Get an Event
[**GetEventCalendar**](EventManagementAPI.md#GetEventCalendar) | **Get** /hotels/{hotelId}/eventcalendar | Get the event calendar
[**GetEventCalendarMultipleHotelIds**](EventManagementAPI.md#GetEventCalendarMultipleHotelIds) | **Get** /eventcalendar | Get the event calendar for Multiple Properties
[**GetEventItemSplitQuantity**](EventManagementAPI.md#GetEventItemSplitQuantity) | **Get** /events/{eventId}/splitQuantity | Get Event item split quantity
[**GetEventResourceByMenu**](EventManagementAPI.md#GetEventResourceByMenu) | **Get** /blocks/{blockId}/events/{eventId}/resources/{resourceId} | Get Resources for an Event
[**GetEventsMultipleHotels**](EventManagementAPI.md#GetEventsMultipleHotels) | **Get** /events | Get Events 
[**GetEventsOneHotel**](EventManagementAPI.md#GetEventsOneHotel) | **Get** /hotels/{hotelId}/events | Get Events 
[**GetEventsResources**](EventManagementAPI.md#GetEventsResources) | **Get** /hotels/{hotelId}/eventsResources | Get Event Resources
[**GetFunctionSpaceAvailability**](EventManagementAPI.md#GetFunctionSpaceAvailability) | **Get** /hotels/{hotelId}/functionalSpace | Get hotel&#39;s function space availability
[**GetSharedFunctionSpaceEvents**](EventManagementAPI.md#GetSharedFunctionSpaceEvents) | **Get** /hotels/{hotelId}/functionalSpaceEvents | Get shared function space events
[**GetWaitlistedEvents**](EventManagementAPI.md#GetWaitlistedEvents) | **Get** /hotels/{hotelId}/waitListedEvents | Retreve Waitlisted Events 
[**ManageAlternateEvents**](EventManagementAPI.md#ManageAlternateEvents) | **Put** /alternateEvents | Manage alternate events.
[**ManageCateringEventPostings**](EventManagementAPI.md#ManageCateringEventPostings) | **Put** /hotels/{hotelId}/events/{eventId}/cateringEventPostings | Manage Catering Event postings
[**ManageWaitlistedEvents**](EventManagementAPI.md#ManageWaitlistedEvents) | **Put** /hotels/{hotelId}/waitListedEvents | Manage Waitlisted Events
[**MoveEventResources**](EventManagementAPI.md#MoveEventResources) | **Put** /blocks/{blockId}/events/{eventId}/resources/move | Move event resources
[**PostCateringPackage**](EventManagementAPI.md#PostCateringPackage) | **Post** /blocks/{blockId}/cateringPackages | Add catering packages to a block
[**PostCateringPackageRevenue**](EventManagementAPI.md#PostCateringPackageRevenue) | **Post** /blocks/{blockId}/cateringPackages/{cateringpackageId}/revenue | Add catering package revenue to a block
[**PostEvents**](EventManagementAPI.md#PostEvents) | **Post** /events | Create an Event
[**PostOpportunityEvents**](EventManagementAPI.md#PostOpportunityEvents) | **Post** /opportunityEvents | Create Events for Opportunity Block
[**PostQuickInsertResources**](EventManagementAPI.md#PostQuickInsertResources) | **Post** /hotels/{hotelId}/events/{eventId}/eventResources/{quickInsertId} | Add Resource to an Event in a hotel by ID



## CateringEventsBulkUpdate

> []CateringEventsProcessedInfoType CateringEventsBulkUpdate(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CateringEventsBulkUpdate(cateringEventsBulkUpdate).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Update multiple catering events



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/evm"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the eventEndDate user is logged in
    cateringEventsBulkUpdate := *openapiclient.NewCateringEventsBulkUpdate() // CateringEventsBulkUpdate | Request object that will Change a list of events.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.EventManagementAPI.CateringEventsBulkUpdate(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CateringEventsBulkUpdate(cateringEventsBulkUpdate).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `EventManagementAPI.CateringEventsBulkUpdate``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CateringEventsBulkUpdate`: []CateringEventsProcessedInfoType
    fmt.Fprintf(os.Stdout, "Response from `EventManagementAPI.CateringEventsBulkUpdate`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCateringEventsBulkUpdateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the eventEndDate user is logged in | 
 **cateringEventsBulkUpdate** | [**CateringEventsBulkUpdate**](CateringEventsBulkUpdate.md) | Request object that will Change a list of events. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**[]CateringEventsProcessedInfoType**](CateringEventsProcessedInfoType.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ChangeCateringPackageRevenue

> CateringPackageRevenue ChangeCateringPackageRevenue(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CateringPackageRevenue(cateringPackageRevenue).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Update Catering package revenue



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/evm"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the eventEndDate user is logged in
    cateringPackageRevenue := *openapiclient.NewChangeCateringPackageRevenueRequest() // ChangeCateringPackageRevenueRequest | Request object for changing revenue details of the associated catering package.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.EventManagementAPI.ChangeCateringPackageRevenue(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CateringPackageRevenue(cateringPackageRevenue).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `EventManagementAPI.ChangeCateringPackageRevenue``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ChangeCateringPackageRevenue`: CateringPackageRevenue
    fmt.Fprintf(os.Stdout, "Response from `EventManagementAPI.ChangeCateringPackageRevenue`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiChangeCateringPackageRevenueRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the eventEndDate user is logged in | 
 **cateringPackageRevenue** | [**ChangeCateringPackageRevenueRequest**](ChangeCateringPackageRevenueRequest.md) | Request object for changing revenue details of the associated catering package. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**CateringPackageRevenue**](CateringPackageRevenue.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ChangeCateringPackages

> CateringPackages ChangeCateringPackages(ctx, blockId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CateringPackages(cateringPackages).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Update a Catering packages



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/evm"
)

func main() {
    blockId := "blockId_example" // string | Unique ID of the block
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the eventEndDate user is logged in
    cateringPackages := *openapiclient.NewCateringPackages() // CateringPackages | Request object for modifying details of associated catering packages.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.EventManagementAPI.ChangeCateringPackages(context.Background(), blockId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CateringPackages(cateringPackages).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `EventManagementAPI.ChangeCateringPackages``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ChangeCateringPackages`: CateringPackages
    fmt.Fprintf(os.Stdout, "Response from `EventManagementAPI.ChangeCateringPackages`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**blockId** | **string** | Unique ID of the block | 

### Other Parameters

Other parameters are passed through a pointer to a apiChangeCateringPackagesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the eventEndDate user is logged in | 
 **cateringPackages** | [**CateringPackages**](CateringPackages.md) | Request object for modifying details of associated catering packages. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**CateringPackages**](CateringPackages.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ChangeEventResourceByMenu

> EventResource ChangeEventResourceByMenu(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).EventResource(eventResource).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Update Event Resource 



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/evm"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the eventEndDate user is logged in
    eventResource := *openapiclient.NewChangeEventResourceByMenuRequest() // ChangeEventResourceByMenuRequest | Request object for modifying event resource details.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.EventManagementAPI.ChangeEventResourceByMenu(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).EventResource(eventResource).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `EventManagementAPI.ChangeEventResourceByMenu``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ChangeEventResourceByMenu`: EventResource
    fmt.Fprintf(os.Stdout, "Response from `EventManagementAPI.ChangeEventResourceByMenu`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiChangeEventResourceByMenuRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the eventEndDate user is logged in | 
 **eventResource** | [**ChangeEventResourceByMenuRequest**](ChangeEventResourceByMenuRequest.md) | Request object for modifying event resource details. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**EventResource**](EventResource.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ChangeEvents

> Event ChangeEvents(ctx, eventId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Event(event).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Update an Event



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/evm"
)

func main() {
    eventId := "eventId_example" // string | Unique ID of the event
    hotelId := "BHOTEL" // string | Unique ID of a hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the eventEndDate user is logged in
    event := *openapiclient.NewChangeEventsRequest() // ChangeEventsRequest | Request object for changing event.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.EventManagementAPI.ChangeEvents(context.Background(), eventId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Event(event).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `EventManagementAPI.ChangeEvents``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ChangeEvents`: Event
    fmt.Fprintf(os.Stdout, "Response from `EventManagementAPI.ChangeEvents`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**eventId** | **string** | Unique ID of the event | 
**hotelId** | **string** | Unique ID of a hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiChangeEventsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the eventEndDate user is logged in | 
 **event** | [**ChangeEventsRequest**](ChangeEventsRequest.md) | Request object for changing event. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Event**](Event.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ChangeEventsResources

> ManageEventsResources ChangeEventsResources(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ManageEventsResources(manageEventsResources).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Update Events Resources



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/evm"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the eventEndDate user is logged in
    manageEventsResources := *openapiclient.NewChangeEventsResourcesRequest() // ChangeEventsResourcesRequest | Request object for managing events resources.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.EventManagementAPI.ChangeEventsResources(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ManageEventsResources(manageEventsResources).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `EventManagementAPI.ChangeEventsResources``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ChangeEventsResources`: ManageEventsResources
    fmt.Fprintf(os.Stdout, "Response from `EventManagementAPI.ChangeEventsResources`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiChangeEventsResourcesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the eventEndDate user is logged in | 
 **manageEventsResources** | [**ChangeEventsResourcesRequest**](ChangeEventsResourcesRequest.md) | Request object for managing events resources. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ManageEventsResources**](ManageEventsResources.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ChangeEventsResourcesByChain

> ManageEventsResources ChangeEventsResourcesByChain(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ManageEventsResources(manageEventsResources).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Update Events Resources by chain



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/evm"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the eventEndDate user is logged in
    manageEventsResources := *openapiclient.NewManageEventsResources() // ManageEventsResources | Request object for managing events resources.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.EventManagementAPI.ChangeEventsResourcesByChain(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ManageEventsResources(manageEventsResources).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `EventManagementAPI.ChangeEventsResourcesByChain``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ChangeEventsResourcesByChain`: ManageEventsResources
    fmt.Fprintf(os.Stdout, "Response from `EventManagementAPI.ChangeEventsResourcesByChain`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiChangeEventsResourcesByChainRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the eventEndDate user is logged in | 
 **manageEventsResources** | [**ManageEventsResources**](ManageEventsResources.md) | Request object for managing events resources. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ManageEventsResources**](ManageEventsResources.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## CopyCateringEvents

> CopyCateringEventsResponse CopyCateringEvents(ctx, blockId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CopyCateringEvents(copyCateringEvents).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Copy Catering Event



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/evm"
)

func main() {
    blockId := "blockId_example" // string | Unique ID of the block
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the eventEndDate user is logged in
    copyCateringEvents := *openapiclient.NewCopyCateringEvents() // CopyCateringEvents | Request object for copying events.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.EventManagementAPI.CopyCateringEvents(context.Background(), blockId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CopyCateringEvents(copyCateringEvents).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `EventManagementAPI.CopyCateringEvents``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CopyCateringEvents`: CopyCateringEventsResponse
    fmt.Fprintf(os.Stdout, "Response from `EventManagementAPI.CopyCateringEvents`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**blockId** | **string** | Unique ID of the block | 
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiCopyCateringEventsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the eventEndDate user is logged in | 
 **copyCateringEvents** | [**CopyCateringEvents**](CopyCateringEvents.md) | Request object for copying events. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**CopyCateringEventsResponse**](CopyCateringEventsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## CopyCateringPackage

> CopyCateringPackageResponse CopyCateringPackage(ctx, cateringpackageId, blockId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CopyCateringPackage(copyCateringPackage).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Copy a Catering package



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/evm"
)

func main() {
    cateringpackageId := "cateringpackageId_example" // string | Unique ID of the catering package
    blockId := "blockId_example" // string | Unique ID of the block
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the eventEndDate user is logged in
    copyCateringPackage := *openapiclient.NewCopyCateringPackage() // CopyCateringPackage | Request object for Copying Catering Package/Template to another block.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.EventManagementAPI.CopyCateringPackage(context.Background(), cateringpackageId, blockId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CopyCateringPackage(copyCateringPackage).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `EventManagementAPI.CopyCateringPackage``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CopyCateringPackage`: CopyCateringPackageResponse
    fmt.Fprintf(os.Stdout, "Response from `EventManagementAPI.CopyCateringPackage`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**cateringpackageId** | **string** | Unique ID of the catering package | 
**blockId** | **string** | Unique ID of the block | 

### Other Parameters

Other parameters are passed through a pointer to a apiCopyCateringPackageRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the eventEndDate user is logged in | 
 **copyCateringPackage** | [**CopyCateringPackage**](CopyCateringPackage.md) | Request object for Copying Catering Package/Template to another block. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**CopyCateringPackageResponse**](CopyCateringPackageResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## CopyEventResources

> EventResourcesResponse CopyEventResources(ctx, eventId, blockId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).EventResources(eventResources).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Copy event resources



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/evm"
)

func main() {
    eventId := "eventId_example" // string | Unique ID of the event
    blockId := "blockId_example" // string | Unique ID of the block
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the eventEndDate user is logged in
    eventResources := *openapiclient.NewCopyEventResourcesRequest() // CopyEventResourcesRequest | Request object for copying event resources.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.EventManagementAPI.CopyEventResources(context.Background(), eventId, blockId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).EventResources(eventResources).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `EventManagementAPI.CopyEventResources``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CopyEventResources`: EventResourcesResponse
    fmt.Fprintf(os.Stdout, "Response from `EventManagementAPI.CopyEventResources`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**eventId** | **string** | Unique ID of the event | 
**blockId** | **string** | Unique ID of the block | 

### Other Parameters

Other parameters are passed through a pointer to a apiCopyEventResourcesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the eventEndDate user is logged in | 
 **eventResources** | [**CopyEventResourcesRequest**](CopyEventResourcesRequest.md) | Request object for copying event resources. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**EventResourcesResponse**](EventResourcesResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteCateringPackage

> Status DeleteCateringPackage(ctx, cateringPackageId, blockId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete Catering package



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/evm"
)

func main() {
    cateringPackageId := "cateringPackageId_example" // string | Unique ID of the Catering Package
    blockId := "blockId_example" // string | Unique ID of the block
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the eventEndDate user is logged in
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.EventManagementAPI.DeleteCateringPackage(context.Background(), cateringPackageId, blockId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `EventManagementAPI.DeleteCateringPackage``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteCateringPackage`: Status
    fmt.Fprintf(os.Stdout, "Response from `EventManagementAPI.DeleteCateringPackage`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**cateringPackageId** | **string** | Unique ID of the Catering Package | 
**blockId** | **string** | Unique ID of the block | 
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteCateringPackageRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the eventEndDate user is logged in | 
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


## DeleteCateringPackageRevenue

> Status DeleteCateringPackageRevenue(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).CateringPackageEventId(cateringPackageEventId).CateringPackageRevenueType(cateringPackageRevenueType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete Catering package revenue



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/evm"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the eventEndDate user is logged in
    hotelId := "hotelId_example" // string |  (optional)
    cateringPackageEventId := "cateringPackageEventId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    cateringPackageRevenueType := "cateringPackageRevenueType_example" // string | Revenue Type associated with the Catering Package Price Code. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.EventManagementAPI.DeleteCateringPackageRevenue(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).CateringPackageEventId(cateringPackageEventId).CateringPackageRevenueType(cateringPackageRevenueType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `EventManagementAPI.DeleteCateringPackageRevenue``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteCateringPackageRevenue`: Status
    fmt.Fprintf(os.Stdout, "Response from `EventManagementAPI.DeleteCateringPackageRevenue`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDeleteCateringPackageRevenueRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the eventEndDate user is logged in | 
 **hotelId** | **string** |  | 
 **cateringPackageEventId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **cateringPackageRevenueType** | **string** | Revenue Type associated with the Catering Package Price Code. | 
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


## DeleteCateringPackages

> Status DeleteCateringPackages(ctx, blockId, hotelId).CateringPackageId(cateringPackageId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete one or more catering package(s)



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/evm"
)

func main() {
    blockId := "blockId_example" // string | Unique ID of the block
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    cateringPackageId := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the eventEndDate user is logged in
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.EventManagementAPI.DeleteCateringPackages(context.Background(), blockId, hotelId).CateringPackageId(cateringPackageId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `EventManagementAPI.DeleteCateringPackages``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteCateringPackages`: Status
    fmt.Fprintf(os.Stdout, "Response from `EventManagementAPI.DeleteCateringPackages`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**blockId** | **string** | Unique ID of the block | 
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteCateringPackagesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **cateringPackageId** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the eventEndDate user is logged in | 
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


## DeleteEvents

> Status DeleteEvents(ctx, eventId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).IncludeSubEvents(includeSubEvents).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete an Event



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/evm"
)

func main() {
    eventId := "eventId_example" // string | Unique ID of the event
    hotelId := "BHOTEL" // string | Unique ID of a hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the eventEndDate user is logged in
    includeSubEvents := true // bool | Indicates whether to delete/inactive the sub event(s) of the master event. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.EventManagementAPI.DeleteEvents(context.Background(), eventId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).IncludeSubEvents(includeSubEvents).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `EventManagementAPI.DeleteEvents``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteEvents`: Status
    fmt.Fprintf(os.Stdout, "Response from `EventManagementAPI.DeleteEvents`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**eventId** | **string** | Unique ID of the event | 
**hotelId** | **string** | Unique ID of a hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteEventsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the eventEndDate user is logged in | 
 **includeSubEvents** | **bool** | Indicates whether to delete/inactive the sub event(s) of the master event. | 
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


## GetBlockPostingAccountReservations

> BlockPostingAccountReservationsInfo GetBlockPostingAccountReservations(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BlockId(blockId).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Catering Event postings



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/evm"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the eventEndDate user is logged in
    blockId := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.EventManagementAPI.GetBlockPostingAccountReservations(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BlockId(blockId).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `EventManagementAPI.GetBlockPostingAccountReservations``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetBlockPostingAccountReservations`: BlockPostingAccountReservationsInfo
    fmt.Fprintf(os.Stdout, "Response from `EventManagementAPI.GetBlockPostingAccountReservations`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetBlockPostingAccountReservationsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the eventEndDate user is logged in | 
 **blockId** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**BlockPostingAccountReservationsInfo**](BlockPostingAccountReservationsInfo.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetCateringEventChanges

> CateringEventChanges GetCateringEventChanges(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).FetchInstructions(fetchInstructions).EventId(eventId).EventIdContext(eventIdContext).EventIdType(eventIdType).BlockId(blockId).BlockIdContext(blockIdContext).BlockIdType(blockIdType).ChangeSource(changeSource).Action(action).ResourceDescription(resourceDescription).FieldNameListCode(fieldNameListCode).UserListCode(userListCode).EventDate(eventDate).EventEndDate(eventEndDate).EventStartDate(eventStartDate).PriorStatus(priorStatus).CurrentStatus(currentStatus).RevenueTypeListCode(revenueTypeListCode).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Catering Event changes



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/evm"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the eventEndDate user is logged in
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    offset := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional) (default to 0)
    fetchInstructions := "fetchInstructions_example" // string | A collection of supported list of actions. (optional)
    eventId := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    eventIdContext := []string{"Inner_example"} // []string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    eventIdType := []string{"Inner_example"} // []string | A reference to the type of object defined by the UniqueID elementSpace. Refer to OpenTravel Code List Unique ID Type (UIT). (optional)
    blockId := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    blockIdContext := []string{"Inner_example"} // []string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    blockIdType := []string{"Inner_example"} // []string | A reference to the type of object defined by the UniqueID elementSpace. Refer to OpenTravel Code List Unique ID Type (UIT). (optional)
    changeSource := []string{"ChangeSource_example"} // []string | List of sources that can cause the event change (optional)
    action := []string{"Action_example"} // []string | A collection of supported list of actions. (optional)
    resourceDescription := "resourceDescription_example" // string | Description of the Resource (optional)
    fieldNameListCode := []string{"Inner_example"} // []string |  (optional)
    userListCode := []string{"Inner_example"} // []string |  (optional)
    eventDate := time.Now() // string | Date of the Events whose details are fetched (optional)
    eventEndDate := time.Now() // string | The ending value of the date range. (optional)
    eventStartDate := time.Now() // string | The starting value of the date range. (optional)
    priorStatus := "priorStatus_example" // string | Prior Status of the events whose details are fetched (optional)
    currentStatus := "currentStatus_example" // string | Current Status of the events whose details are fetched (optional)
    revenueTypeListCode := []string{"Inner_example"} // []string |  (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.EventManagementAPI.GetCateringEventChanges(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).FetchInstructions(fetchInstructions).EventId(eventId).EventIdContext(eventIdContext).EventIdType(eventIdType).BlockId(blockId).BlockIdContext(blockIdContext).BlockIdType(blockIdType).ChangeSource(changeSource).Action(action).ResourceDescription(resourceDescription).FieldNameListCode(fieldNameListCode).UserListCode(userListCode).EventDate(eventDate).EventEndDate(eventEndDate).EventStartDate(eventStartDate).PriorStatus(priorStatus).CurrentStatus(currentStatus).RevenueTypeListCode(revenueTypeListCode).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `EventManagementAPI.GetCateringEventChanges``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetCateringEventChanges`: CateringEventChanges
    fmt.Fprintf(os.Stdout, "Response from `EventManagementAPI.GetCateringEventChanges`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetCateringEventChangesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the eventEndDate user is logged in | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **offset** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [default to 0]
 **fetchInstructions** | **string** | A collection of supported list of actions. | 
 **eventId** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **eventIdContext** | **[]string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **eventIdType** | **[]string** | A reference to the type of object defined by the UniqueID elementSpace. Refer to OpenTravel Code List Unique ID Type (UIT). | 
 **blockId** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **blockIdContext** | **[]string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **blockIdType** | **[]string** | A reference to the type of object defined by the UniqueID elementSpace. Refer to OpenTravel Code List Unique ID Type (UIT). | 
 **changeSource** | **[]string** | List of sources that can cause the event change | 
 **action** | **[]string** | A collection of supported list of actions. | 
 **resourceDescription** | **string** | Description of the Resource | 
 **fieldNameListCode** | **[]string** |  | 
 **userListCode** | **[]string** |  | 
 **eventDate** | **string** | Date of the Events whose details are fetched | 
 **eventEndDate** | **string** | The ending value of the date range. | 
 **eventStartDate** | **string** | The starting value of the date range. | 
 **priorStatus** | **string** | Prior Status of the events whose details are fetched | 
 **currentStatus** | **string** | Current Status of the events whose details are fetched | 
 **revenueTypeListCode** | **[]string** |  | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**CateringEventChanges**](CateringEventChanges.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetCateringEventPostings

> CateringEventPostingsDetail GetCateringEventPostings(ctx, eventId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).IncludeSubEvents(includeSubEvents).BlockId(blockId).BlockIdContext(blockIdContext).BlockIdType(blockIdType).FetchInstructions(fetchInstructions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Catering Event postings



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/evm"
)

func main() {
    eventId := "eventId_example" // string | 
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the eventEndDate user is logged in
    includeSubEvents := true // bool | Indicates whether to delete/inactive the sub event(s) of the master event. (optional)
    blockId := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    blockIdContext := []string{"Inner_example"} // []string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    blockIdType := []string{"Inner_example"} // []string | A reference to the type of object defined by the UniqueID elementSpace. Refer to OpenTravel Code List Unique ID Type (UIT). (optional)
    fetchInstructions := []string{"FetchInstructions_example"} // []string | Instruction to fetch all eligible master events for the selected event (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.EventManagementAPI.GetCateringEventPostings(context.Background(), eventId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).IncludeSubEvents(includeSubEvents).BlockId(blockId).BlockIdContext(blockIdContext).BlockIdType(blockIdType).FetchInstructions(fetchInstructions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `EventManagementAPI.GetCateringEventPostings``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetCateringEventPostings`: CateringEventPostingsDetail
    fmt.Fprintf(os.Stdout, "Response from `EventManagementAPI.GetCateringEventPostings`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**eventId** | **string** |  | 
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetCateringEventPostingsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the eventEndDate user is logged in | 
 **includeSubEvents** | **bool** | Indicates whether to delete/inactive the sub event(s) of the master event. | 
 **blockId** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **blockIdContext** | **[]string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **blockIdType** | **[]string** | A reference to the type of object defined by the UniqueID elementSpace. Refer to OpenTravel Code List Unique ID Type (UIT). | 
 **fetchInstructions** | **[]string** | Instruction to fetch all eligible master events for the selected event | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**CateringEventPostingsDetail**](CateringEventPostingsDetail.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetCateringPackageRevenue

> CateringPackageRevenue GetCateringPackageRevenue(ctx, cateringpackageId, blockId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).IdExtension(idExtension).BlockIdContext(blockIdContext).BlockIdType(blockIdType).PackageIdContext(packageIdContext).PackageIdType(packageIdType).FetchInstructions(fetchInstructions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Catering package revenue



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/evm"
)

func main() {
    cateringpackageId := "cateringpackageId_example" // string | Unique ID of the catering package
    blockId := "blockId_example" // string | Unique ID of the block
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the eventEndDate user is logged in
    hotelId := "hotelId_example" // string | Block hotel code. (optional)
    idExtension := int32(56) // int32 | Additional identifying value assigned by the creating system. (optional)
    blockIdContext := "blockIdContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    blockIdType := "blockIdType_example" // string | A reference to the type of object defined by the UniqueID elementSpace. Refer to OpenTravel Code List Unique ID Type (UIT). (optional)
    packageIdContext := "packageIdContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    packageIdType := "packageIdType_example" // string | A reference to the type of object defined by the UniqueID elementSpace. Refer to OpenTravel Code List Unique ID Type (UIT). (optional)
    fetchInstructions := []string{"FetchInstructions_example"} // []string | Fetch instructions that can be used in caterig Package Revenue maintenance. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.EventManagementAPI.GetCateringPackageRevenue(context.Background(), cateringpackageId, blockId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).IdExtension(idExtension).BlockIdContext(blockIdContext).BlockIdType(blockIdType).PackageIdContext(packageIdContext).PackageIdType(packageIdType).FetchInstructions(fetchInstructions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `EventManagementAPI.GetCateringPackageRevenue``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetCateringPackageRevenue`: CateringPackageRevenue
    fmt.Fprintf(os.Stdout, "Response from `EventManagementAPI.GetCateringPackageRevenue`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**cateringpackageId** | **string** | Unique ID of the catering package | 
**blockId** | **string** | Unique ID of the block | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetCateringPackageRevenueRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the eventEndDate user is logged in | 
 **hotelId** | **string** | Block hotel code. | 
 **idExtension** | **int32** | Additional identifying value assigned by the creating system. | 
 **blockIdContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **blockIdType** | **string** | A reference to the type of object defined by the UniqueID elementSpace. Refer to OpenTravel Code List Unique ID Type (UIT). | 
 **packageIdContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **packageIdType** | **string** | A reference to the type of object defined by the UniqueID elementSpace. Refer to OpenTravel Code List Unique ID Type (UIT). | 
 **fetchInstructions** | **[]string** | Fetch instructions that can be used in caterig Package Revenue maintenance. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**CateringPackageRevenue**](CateringPackageRevenue.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetCateringPackages

> CateringPackages GetCateringPackages(ctx, blockId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).BlockIdContext(blockIdContext).BlockIdType(blockIdType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Catering packages 



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/evm"
)

func main() {
    blockId := "blockId_example" // string | Unique ID of the block
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the eventEndDate user is logged in
    hotelId := "hotelId_example" // string | Block hotel code. (optional)
    blockIdContext := "blockIdContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    blockIdType := "blockIdType_example" // string | A reference to the type of object defined by the UniqueID elementSpace. Refer to OpenTravel Code List Unique ID Type (UIT). (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.EventManagementAPI.GetCateringPackages(context.Background(), blockId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).BlockIdContext(blockIdContext).BlockIdType(blockIdType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `EventManagementAPI.GetCateringPackages``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetCateringPackages`: CateringPackages
    fmt.Fprintf(os.Stdout, "Response from `EventManagementAPI.GetCateringPackages`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**blockId** | **string** | Unique ID of the block | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetCateringPackagesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the eventEndDate user is logged in | 
 **hotelId** | **string** | Block hotel code. | 
 **blockIdContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **blockIdType** | **string** | A reference to the type of object defined by the UniqueID elementSpace. Refer to OpenTravel Code List Unique ID Type (UIT). | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**CateringPackages**](CateringPackages.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetEvent

> Event GetEvent(ctx, eventId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FetchInstructions(fetchInstructions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get an Event



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/evm"
)

func main() {
    eventId := "3700516" // string | Unique ID of the event
    hotelId := "BHOTEL" // string | Unique ID of a hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the eventEndDate user is logged in
    fetchInstructions := []string{"FetchInstructions_example"} // []string | Instruction to fetch all eligible master events for the selected event (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.EventManagementAPI.GetEvent(context.Background(), eventId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FetchInstructions(fetchInstructions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `EventManagementAPI.GetEvent``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetEvent`: Event
    fmt.Fprintf(os.Stdout, "Response from `EventManagementAPI.GetEvent`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**eventId** | **string** | Unique ID of the event | 
**hotelId** | **string** | Unique ID of a hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetEventRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the eventEndDate user is logged in | 
 **fetchInstructions** | **[]string** | Instruction to fetch all eligible master events for the selected event | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Event**](Event.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetEventCalendar

> EventCalendar GetEventCalendar(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).EventEndDate(eventEndDate).IncludeHidden(includeHidden).IncludeOpportunities(includeOpportunities).ShowAvailableRooms(showAvailableRooms).ShowReservations(showReservations).IsHotelSort(isHotelSort).IsSortDescending(isSortDescending).PageIndex(pageIndex).RecordsPerPage(recordsPerPage).SortingBy(sortingBy).EventStartDate(eventStartDate).FunctionSpaceDetails(functionSpaceDetails).Status(status).SetupStyle(setupStyle).Location(location).EventLabel(eventLabel).SpaceType(spaceType).AreaMeasurement(areaMeasurement).MinimumArea(minimumArea).Display(display).From(from).To(to).Friday(friday).Monday(monday).Saturday(saturday).Sunday(sunday).Thursday(thursday).Tuesday(tuesday).Wednesday(wednesday).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get the event calendar



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/evm"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the eventEndDate user is logged in
    eventEndDate := time.Now() // string | The ending value of the date range. (optional)
    includeHidden := true // bool |  (optional)
    includeOpportunities := true // bool | If set to true, the results will include opportunities. If this flag is not provided it will be considered false and exclude opportunities. (optional)
    showAvailableRooms := true // bool | Determines whether to fetch only available rooms(Spaces with NON-DEDUCT events) or not. (optional)
    showReservations := true // bool | Determines whether to fetch guest reservations or not. (optional)
    isHotelSort := true // bool |  (optional)
    isSortDescending := true // bool |  (optional)
    pageIndex := int32(56) // int32 | Page index to be retrieved. (optional)
    recordsPerPage := int32(56) // int32 |  (optional)
    sortingBy := "sortingBy_example" // string | A collection of supported sorting for Event Calendar Function Space. (optional)
    eventStartDate := time.Now() // string | The starting value of the date range. (optional)
    functionSpaceDetails := []string{"Inner_example"} // []string | Room filter for the events returned. (optional)
    status := []string{"Inner_example"} // []string | Status filter for the events returned. (optional)
    setupStyle := "setupStyle_example" // string | Setup Style filter for the events returned. (optional)
    location := "location_example" // string | Function space location filter for the events returned. (optional)
    eventLabel := "eventLabel_example" // string | Event Bar Label filter for the events returned. (optional)
    spaceType := "spaceType_example" // string | Room type filter for the events returned. (optional)
    areaMeasurement := "areaMeasurement_example" // string | Determines the measuring unit. (optional)
    minimumArea := float32(8.14) // float32 |  (optional)
    display := "display_example" // string | Type of function space filter for the events returned. Possible values include Individual, Combo and All. (optional)
    from := int32(56) // int32 |  (optional)
    to := int32(56) // int32 |  (optional)
    friday := true // bool |  (optional)
    monday := true // bool |  (optional)
    saturday := true // bool |  (optional)
    sunday := true // bool |  (optional)
    thursday := true // bool |  (optional)
    tuesday := true // bool |  (optional)
    wednesday := true // bool |  (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.EventManagementAPI.GetEventCalendar(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).EventEndDate(eventEndDate).IncludeHidden(includeHidden).IncludeOpportunities(includeOpportunities).ShowAvailableRooms(showAvailableRooms).ShowReservations(showReservations).IsHotelSort(isHotelSort).IsSortDescending(isSortDescending).PageIndex(pageIndex).RecordsPerPage(recordsPerPage).SortingBy(sortingBy).EventStartDate(eventStartDate).FunctionSpaceDetails(functionSpaceDetails).Status(status).SetupStyle(setupStyle).Location(location).EventLabel(eventLabel).SpaceType(spaceType).AreaMeasurement(areaMeasurement).MinimumArea(minimumArea).Display(display).From(from).To(to).Friday(friday).Monday(monday).Saturday(saturday).Sunday(sunday).Thursday(thursday).Tuesday(tuesday).Wednesday(wednesday).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `EventManagementAPI.GetEventCalendar``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetEventCalendar`: EventCalendar
    fmt.Fprintf(os.Stdout, "Response from `EventManagementAPI.GetEventCalendar`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetEventCalendarRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the eventEndDate user is logged in | 
 **eventEndDate** | **string** | The ending value of the date range. | 
 **includeHidden** | **bool** |  | 
 **includeOpportunities** | **bool** | If set to true, the results will include opportunities. If this flag is not provided it will be considered false and exclude opportunities. | 
 **showAvailableRooms** | **bool** | Determines whether to fetch only available rooms(Spaces with NON-DEDUCT events) or not. | 
 **showReservations** | **bool** | Determines whether to fetch guest reservations or not. | 
 **isHotelSort** | **bool** |  | 
 **isSortDescending** | **bool** |  | 
 **pageIndex** | **int32** | Page index to be retrieved. | 
 **recordsPerPage** | **int32** |  | 
 **sortingBy** | **string** | A collection of supported sorting for Event Calendar Function Space. | 
 **eventStartDate** | **string** | The starting value of the date range. | 
 **functionSpaceDetails** | **[]string** | Room filter for the events returned. | 
 **status** | **[]string** | Status filter for the events returned. | 
 **setupStyle** | **string** | Setup Style filter for the events returned. | 
 **location** | **string** | Function space location filter for the events returned. | 
 **eventLabel** | **string** | Event Bar Label filter for the events returned. | 
 **spaceType** | **string** | Room type filter for the events returned. | 
 **areaMeasurement** | **string** | Determines the measuring unit. | 
 **minimumArea** | **float32** |  | 
 **display** | **string** | Type of function space filter for the events returned. Possible values include Individual, Combo and All. | 
 **from** | **int32** |  | 
 **to** | **int32** |  | 
 **friday** | **bool** |  | 
 **monday** | **bool** |  | 
 **saturday** | **bool** |  | 
 **sunday** | **bool** |  | 
 **thursday** | **bool** |  | 
 **tuesday** | **bool** |  | 
 **wednesday** | **bool** |  | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**EventCalendar**](EventCalendar.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetEventCalendarMultipleHotelIds

> EventCalendar GetEventCalendarMultipleHotelIds(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).EventEndDate(eventEndDate).IncludeHidden(includeHidden).IncludeOpportunities(includeOpportunities).ShowAvailableRooms(showAvailableRooms).ShowReservations(showReservations).IsHotelSort(isHotelSort).IsSortDescending(isSortDescending).PageIndex(pageIndex).RecordsPerPage(recordsPerPage).SortingBy(sortingBy).EventStartDate(eventStartDate).FunctionSpaceDetails(functionSpaceDetails).Status(status).SetupStyle(setupStyle).Location(location).EventLabel(eventLabel).SpaceType(spaceType).AreaMeasurement(areaMeasurement).MinimumArea(minimumArea).Display(display).From(from).To(to).Friday(friday).Monday(monday).Saturday(saturday).Sunday(sunday).Thursday(thursday).Tuesday(tuesday).Wednesday(wednesday).HotelIds(hotelIds).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get the event calendar for Multiple Properties



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/evm"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the eventEndDate user is logged in
    eventEndDate := time.Now() // string | The ending value of the date range. (optional)
    includeHidden := true // bool |  (optional)
    includeOpportunities := true // bool | If set to true, the results will include opportunities. If this flag is not provided it will be considered false and exclude opportunities. (optional)
    showAvailableRooms := true // bool | Determines whether to fetch only available rooms(Spaces with NON-DEDUCT events) or not. (optional)
    showReservations := true // bool | Determines whether to fetch guest reservations or not. (optional)
    isHotelSort := true // bool |  (optional)
    isSortDescending := true // bool |  (optional)
    pageIndex := int32(56) // int32 | Page index to be retrieved. (optional)
    recordsPerPage := int32(56) // int32 |  (optional)
    sortingBy := "sortingBy_example" // string | A collection of supported sorting for Event Calendar Function Space. (optional)
    eventStartDate := time.Now() // string | The starting value of the date range. (optional)
    functionSpaceDetails := []string{"Inner_example"} // []string | Room filter for the events returned. (optional)
    status := []string{"Inner_example"} // []string | Status filter for the events returned. (optional)
    setupStyle := "setupStyle_example" // string | Setup Style filter for the events returned. (optional)
    location := "location_example" // string | Function space location filter for the events returned. (optional)
    eventLabel := "eventLabel_example" // string | Event Bar Label filter for the events returned. (optional)
    spaceType := "spaceType_example" // string | Room type filter for the events returned. (optional)
    areaMeasurement := "areaMeasurement_example" // string | Determines the measuring unit. (optional)
    minimumArea := float32(8.14) // float32 |  (optional)
    display := "display_example" // string | Type of function space filter for the events returned. Possible values include Individual, Combo and All. (optional)
    from := int32(56) // int32 |  (optional)
    to := int32(56) // int32 |  (optional)
    friday := true // bool |  (optional)
    monday := true // bool |  (optional)
    saturday := true // bool |  (optional)
    sunday := true // bool |  (optional)
    thursday := true // bool |  (optional)
    tuesday := true // bool |  (optional)
    wednesday := true // bool |  (optional)
    hotelIds := []string{"Inner_example"} // []string | Hotel code. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.EventManagementAPI.GetEventCalendarMultipleHotelIds(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).EventEndDate(eventEndDate).IncludeHidden(includeHidden).IncludeOpportunities(includeOpportunities).ShowAvailableRooms(showAvailableRooms).ShowReservations(showReservations).IsHotelSort(isHotelSort).IsSortDescending(isSortDescending).PageIndex(pageIndex).RecordsPerPage(recordsPerPage).SortingBy(sortingBy).EventStartDate(eventStartDate).FunctionSpaceDetails(functionSpaceDetails).Status(status).SetupStyle(setupStyle).Location(location).EventLabel(eventLabel).SpaceType(spaceType).AreaMeasurement(areaMeasurement).MinimumArea(minimumArea).Display(display).From(from).To(to).Friday(friday).Monday(monday).Saturday(saturday).Sunday(sunday).Thursday(thursday).Tuesday(tuesday).Wednesday(wednesday).HotelIds(hotelIds).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `EventManagementAPI.GetEventCalendarMultipleHotelIds``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetEventCalendarMultipleHotelIds`: EventCalendar
    fmt.Fprintf(os.Stdout, "Response from `EventManagementAPI.GetEventCalendarMultipleHotelIds`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetEventCalendarMultipleHotelIdsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the eventEndDate user is logged in | 
 **eventEndDate** | **string** | The ending value of the date range. | 
 **includeHidden** | **bool** |  | 
 **includeOpportunities** | **bool** | If set to true, the results will include opportunities. If this flag is not provided it will be considered false and exclude opportunities. | 
 **showAvailableRooms** | **bool** | Determines whether to fetch only available rooms(Spaces with NON-DEDUCT events) or not. | 
 **showReservations** | **bool** | Determines whether to fetch guest reservations or not. | 
 **isHotelSort** | **bool** |  | 
 **isSortDescending** | **bool** |  | 
 **pageIndex** | **int32** | Page index to be retrieved. | 
 **recordsPerPage** | **int32** |  | 
 **sortingBy** | **string** | A collection of supported sorting for Event Calendar Function Space. | 
 **eventStartDate** | **string** | The starting value of the date range. | 
 **functionSpaceDetails** | **[]string** | Room filter for the events returned. | 
 **status** | **[]string** | Status filter for the events returned. | 
 **setupStyle** | **string** | Setup Style filter for the events returned. | 
 **location** | **string** | Function space location filter for the events returned. | 
 **eventLabel** | **string** | Event Bar Label filter for the events returned. | 
 **spaceType** | **string** | Room type filter for the events returned. | 
 **areaMeasurement** | **string** | Determines the measuring unit. | 
 **minimumArea** | **float32** |  | 
 **display** | **string** | Type of function space filter for the events returned. Possible values include Individual, Combo and All. | 
 **from** | **int32** |  | 
 **to** | **int32** |  | 
 **friday** | **bool** |  | 
 **monday** | **bool** |  | 
 **saturday** | **bool** |  | 
 **sunday** | **bool** |  | 
 **thursday** | **bool** |  | 
 **tuesday** | **bool** |  | 
 **wednesday** | **bool** |  | 
 **hotelIds** | **[]string** | Hotel code. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**EventCalendar**](EventCalendar.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetEventItemSplitQuantity

> EventResource GetEventItemSplitQuantity(ctx, eventId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).EventPrimaryHotelId(eventPrimaryHotelId).EventItemId(eventItemId).EventEndDate(eventEndDate).EventStartDate(eventStartDate).ItemId(itemId).Quantity(quantity).IsExcludeNonDeduct(isExcludeNonDeduct).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Event item split quantity



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/evm"
)

func main() {
    eventId := "eventId_example" // string | Unique ID of the event
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the eventEndDate user is logged in
    eventPrimaryHotelId := "eventPrimaryHotelId_example" // string | Hotel code where event will be organized. (optional)
    eventItemId := "eventItemId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    eventEndDate := time.Now() // string | The ending value of the time span. (optional)
    eventStartDate := time.Now() // string | The starting value of the time span. (optional)
    itemId := "itemId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    quantity := float32(8.14) // float32 | The quantity of this item required by the event. (optional)
    isExcludeNonDeduct := true // bool | Flag to check if the Event Item is ExcludeNonDeduct (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.EventManagementAPI.GetEventItemSplitQuantity(context.Background(), eventId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).EventPrimaryHotelId(eventPrimaryHotelId).EventItemId(eventItemId).EventEndDate(eventEndDate).EventStartDate(eventStartDate).ItemId(itemId).Quantity(quantity).IsExcludeNonDeduct(isExcludeNonDeduct).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `EventManagementAPI.GetEventItemSplitQuantity``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetEventItemSplitQuantity`: EventResource
    fmt.Fprintf(os.Stdout, "Response from `EventManagementAPI.GetEventItemSplitQuantity`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**eventId** | **string** | Unique ID of the event | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetEventItemSplitQuantityRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the eventEndDate user is logged in | 
 **eventPrimaryHotelId** | **string** | Hotel code where event will be organized. | 
 **eventItemId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **eventEndDate** | **string** | The ending value of the time span. | 
 **eventStartDate** | **string** | The starting value of the time span. | 
 **itemId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **quantity** | **float32** | The quantity of this item required by the event. | 
 **isExcludeNonDeduct** | **bool** | Flag to check if the Event Item is ExcludeNonDeduct | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**EventResource**](EventResource.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetEventResourceByMenu

> EventResource GetEventResourceByMenu(ctx, resourceId, eventId, blockId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).BlockIdContext(blockIdContext).BlockIdType(blockIdType).EventIdContext(eventIdContext).EventIdType(eventIdType).ResourceIdContext(resourceIdContext).ResourceIdType(resourceIdType).FetchInstructions(fetchInstructions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Resources for an Event



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/evm"
)

func main() {
    resourceId := "resourceId_example" // string | Unique ID of the resource
    eventId := "eventId_example" // string | Unique ID of the event
    blockId := "blockId_example" // string | Unique ID of the block
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the eventEndDate user is logged in
    hotelId := "hotelId_example" // string | Hotel code of the Resource. (optional)
    blockIdContext := "blockIdContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    blockIdType := "blockIdType_example" // string | A reference to the type of object defined by the UniqueID elementSpace. Refer to OpenTravel Code List Unique ID Type (UIT). (optional)
    eventIdContext := "eventIdContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    eventIdType := "eventIdType_example" // string | A reference to the type of object defined by the UniqueID elementSpace. Refer to OpenTravel Code List Unique ID Type (UIT). (optional)
    resourceIdContext := "resourceIdContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    resourceIdType := "resourceIdType_example" // string | A reference to the type of object defined by the UniqueID elementSpace. Refer to OpenTravel Code List Unique ID Type (UIT). (optional)
    fetchInstructions := []string{"FetchInstructions_example"} // []string | Fetch instructions that can be used in Event Resource maintenance. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.EventManagementAPI.GetEventResourceByMenu(context.Background(), resourceId, eventId, blockId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).BlockIdContext(blockIdContext).BlockIdType(blockIdType).EventIdContext(eventIdContext).EventIdType(eventIdType).ResourceIdContext(resourceIdContext).ResourceIdType(resourceIdType).FetchInstructions(fetchInstructions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `EventManagementAPI.GetEventResourceByMenu``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetEventResourceByMenu`: EventResource
    fmt.Fprintf(os.Stdout, "Response from `EventManagementAPI.GetEventResourceByMenu`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**resourceId** | **string** | Unique ID of the resource | 
**eventId** | **string** | Unique ID of the event | 
**blockId** | **string** | Unique ID of the block | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetEventResourceByMenuRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the eventEndDate user is logged in | 
 **hotelId** | **string** | Hotel code of the Resource. | 
 **blockIdContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **blockIdType** | **string** | A reference to the type of object defined by the UniqueID elementSpace. Refer to OpenTravel Code List Unique ID Type (UIT). | 
 **eventIdContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **eventIdType** | **string** | A reference to the type of object defined by the UniqueID elementSpace. Refer to OpenTravel Code List Unique ID Type (UIT). | 
 **resourceIdContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **resourceIdType** | **string** | A reference to the type of object defined by the UniqueID elementSpace. Refer to OpenTravel Code List Unique ID Type (UIT). | 
 **fetchInstructions** | **[]string** | Fetch instructions that can be used in Event Resource maintenance. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**EventResource**](EventResource.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetEventsMultipleHotels

> Events GetEventsMultipleHotels(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelIds(hotelIds).EventStartDate(eventStartDate).EventEndDate(eventEndDate).BlockId(blockId).EventId(eventId).Category(category).Name(name).AttachedProfileId(attachedProfileId).BlockName(blockName).EventStatusCodes(eventStatusCodes).EventTypeCodes(eventTypeCodes).FunctionSpaceCodes(functionSpaceCodes).IncludeInactive(includeInactive).IncludeAlternateEvents(includeAlternateEvents).IncludeOpportunities(includeOpportunities).IncludeSubEvents(includeSubEvents).CateringEventOrderBy(cateringEventOrderBy).FetchInstructions(fetchInstructions).Limit(limit).Offset(offset).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Events 



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/evm"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the eventEndDate user is logged in
    hotelIds := []string{"Inner_example"} // []string | This is the Hotel Code of the Event (optional)
    eventStartDate := time.Now() // string | The starting value of the date range. (optional)
    eventEndDate := time.Now() // string | The ending value of the date range. (optional)
    blockId := []string{"Inner_example"} // []string | Block ID linked to the Catering Event (optional)
    eventId := []string{"Inner_example"} // []string | Unique ID for the catering event (optional)
    category := []string{"Category_example"} // []string | Simple type for block instructions to be used in requests for fetching blocks. Valid status values are Group, Source, TravelAgent, Contact, Company. (optional)
    name := []string{"Inner_example"} // []string | Attached profile name (optional)
    attachedProfileId := []string{"Inner_example"} // []string | A unique identifying numeric value assigned to a profile utilized to fetch events associated to blocks linked to the profile. (optional)
    blockName := "blockName_example" // string | Block Name. (optional)
    eventStatusCodes := []string{"Inner_example"} // []string | Status Codes associated with the events to be fetched. (optional)
    eventTypeCodes := []string{"Inner_example"} // []string | Event Type Codes associated with the events to be fetched. (optional)
    functionSpaceCodes := []string{"Inner_example"} // []string |  (optional)
    includeInactive := false // bool | Indicates whether to include inactive events in search result. (optional) (default to false)
    includeAlternateEvents := false // bool | Indicates whether to include the alternate events in the search result. (optional) (default to false)
    includeOpportunities := false // bool | If set to true, the results will include opportunities. If this flag is not provided it will be considered false and exclude opportunities. (optional) (default to false)
    includeSubEvents := false // bool | Indicates whether to include the sub events in the search result. (optional) (default to false)
    cateringEventOrderBy := "StartDateTimeAsc" // string | A collection of supported list of order by for search catering events. (optional) (default to "StartDateTimeAsc")
    fetchInstructions := []string{"FetchInstructions_example"} // []string | Instructions to fetch details information about the selected event. The BlocksInfo fetch instructions will retain a limited amount of data for the associated block.  The Indicators instruction will provide a count. (optional)
    limit := int32(200) // int32 | Indicates maximum number of records a Web Service should return. (optional) (default to 200)
    offset := int32(0) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional) (default to 0)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.EventManagementAPI.GetEventsMultipleHotels(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelIds(hotelIds).EventStartDate(eventStartDate).EventEndDate(eventEndDate).BlockId(blockId).EventId(eventId).Category(category).Name(name).AttachedProfileId(attachedProfileId).BlockName(blockName).EventStatusCodes(eventStatusCodes).EventTypeCodes(eventTypeCodes).FunctionSpaceCodes(functionSpaceCodes).IncludeInactive(includeInactive).IncludeAlternateEvents(includeAlternateEvents).IncludeOpportunities(includeOpportunities).IncludeSubEvents(includeSubEvents).CateringEventOrderBy(cateringEventOrderBy).FetchInstructions(fetchInstructions).Limit(limit).Offset(offset).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `EventManagementAPI.GetEventsMultipleHotels``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetEventsMultipleHotels`: Events
    fmt.Fprintf(os.Stdout, "Response from `EventManagementAPI.GetEventsMultipleHotels`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetEventsMultipleHotelsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the eventEndDate user is logged in | 
 **hotelIds** | **[]string** | This is the Hotel Code of the Event | 
 **eventStartDate** | **string** | The starting value of the date range. | 
 **eventEndDate** | **string** | The ending value of the date range. | 
 **blockId** | **[]string** | Block ID linked to the Catering Event | 
 **eventId** | **[]string** | Unique ID for the catering event | 
 **category** | **[]string** | Simple type for block instructions to be used in requests for fetching blocks. Valid status values are Group, Source, TravelAgent, Contact, Company. | 
 **name** | **[]string** | Attached profile name | 
 **attachedProfileId** | **[]string** | A unique identifying numeric value assigned to a profile utilized to fetch events associated to blocks linked to the profile. | 
 **blockName** | **string** | Block Name. | 
 **eventStatusCodes** | **[]string** | Status Codes associated with the events to be fetched. | 
 **eventTypeCodes** | **[]string** | Event Type Codes associated with the events to be fetched. | 
 **functionSpaceCodes** | **[]string** |  | 
 **includeInactive** | **bool** | Indicates whether to include inactive events in search result. | [default to false]
 **includeAlternateEvents** | **bool** | Indicates whether to include the alternate events in the search result. | [default to false]
 **includeOpportunities** | **bool** | If set to true, the results will include opportunities. If this flag is not provided it will be considered false and exclude opportunities. | [default to false]
 **includeSubEvents** | **bool** | Indicates whether to include the sub events in the search result. | [default to false]
 **cateringEventOrderBy** | **string** | A collection of supported list of order by for search catering events. | [default to &quot;StartDateTimeAsc&quot;]
 **fetchInstructions** | **[]string** | Instructions to fetch details information about the selected event. The BlocksInfo fetch instructions will retain a limited amount of data for the associated block.  The Indicators instruction will provide a count. | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | [default to 200]
 **offset** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [default to 0]
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Events**](Events.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetEventsOneHotel

> Events GetEventsOneHotel(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).EventStartDate(eventStartDate).EventEndDate(eventEndDate).BlockId(blockId).EventId(eventId).AttachedProfileId(attachedProfileId).BlockName(blockName).EventStatusCodes(eventStatusCodes).EventTypeCodes(eventTypeCodes).FunctionSpaceCodes(functionSpaceCodes).IncludeInactive(includeInactive).IncludeAlternateEvents(includeAlternateEvents).IncludeOpportunities(includeOpportunities).IncludeSubEvents(includeSubEvents).CateringEventOrderBy(cateringEventOrderBy).FetchInstructions(fetchInstructions).Limit(limit).Offset(offset).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Events 



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/evm"
)

func main() {
    hotelId := "BHOTEL" // string | Unique ID of a hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the eventEndDate user is logged in
    eventStartDate := time.Now() // string | The starting value of the date range. (optional)
    eventEndDate := time.Now() // string | The ending value of the date range. (optional)
    blockId := []string{"Inner_example"} // []string | Block ID linked to the Catering Event (optional)
    eventId := []string{"Inner_example"} // []string | Unique ID for the catering event (optional)
    attachedProfileId := "323816531" // string | A unique identifying numeric value assigned to a profile utilized to fetch events associated to blocks linked to the profile. (optional)
    blockName := "blockName_example" // string | Block Name. (optional)
    eventStatusCodes := []string{"Inner_example"} // []string | Status Codes associated with the events to be fetched. (optional)
    eventTypeCodes := []string{"Inner_example"} // []string | Event Type Codes associated with the events to be fetched. (optional)
    functionSpaceCodes := []string{"Inner_example"} // []string |  (optional)
    includeInactive := false // bool | Indicates whether to include inactive events in search result. (optional) (default to false)
    includeAlternateEvents := false // bool | Indicates whether to include the alternate events in the search result. (optional) (default to false)
    includeOpportunities := false // bool | If set to true, the results will include opportunities. If this flag is not provided it will be considered false and exclude opportunities. (optional) (default to false)
    includeSubEvents := false // bool | Indicates whether to include the sub events in the search result. (optional) (default to false)
    cateringEventOrderBy := "StartDateTimeAsc" // string | A collection of supported list of order by for search catering events. (optional) (default to "StartDateTimeAsc")
    fetchInstructions := []string{"FetchInstructions_example"} // []string | Instruction to fetch all eligible master events for the selected event (optional)
    limit := int32(200) // int32 | Indicates maximum number of records a Web Service should return. (optional) (default to 200)
    offset := int32(0) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional) (default to 0)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.EventManagementAPI.GetEventsOneHotel(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).EventStartDate(eventStartDate).EventEndDate(eventEndDate).BlockId(blockId).EventId(eventId).AttachedProfileId(attachedProfileId).BlockName(blockName).EventStatusCodes(eventStatusCodes).EventTypeCodes(eventTypeCodes).FunctionSpaceCodes(functionSpaceCodes).IncludeInactive(includeInactive).IncludeAlternateEvents(includeAlternateEvents).IncludeOpportunities(includeOpportunities).IncludeSubEvents(includeSubEvents).CateringEventOrderBy(cateringEventOrderBy).FetchInstructions(fetchInstructions).Limit(limit).Offset(offset).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `EventManagementAPI.GetEventsOneHotel``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetEventsOneHotel`: Events
    fmt.Fprintf(os.Stdout, "Response from `EventManagementAPI.GetEventsOneHotel`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of a hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetEventsOneHotelRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the eventEndDate user is logged in | 
 **eventStartDate** | **string** | The starting value of the date range. | 
 **eventEndDate** | **string** | The ending value of the date range. | 
 **blockId** | **[]string** | Block ID linked to the Catering Event | 
 **eventId** | **[]string** | Unique ID for the catering event | 
 **attachedProfileId** | **string** | A unique identifying numeric value assigned to a profile utilized to fetch events associated to blocks linked to the profile. | 
 **blockName** | **string** | Block Name. | 
 **eventStatusCodes** | **[]string** | Status Codes associated with the events to be fetched. | 
 **eventTypeCodes** | **[]string** | Event Type Codes associated with the events to be fetched. | 
 **functionSpaceCodes** | **[]string** |  | 
 **includeInactive** | **bool** | Indicates whether to include inactive events in search result. | [default to false]
 **includeAlternateEvents** | **bool** | Indicates whether to include the alternate events in the search result. | [default to false]
 **includeOpportunities** | **bool** | If set to true, the results will include opportunities. If this flag is not provided it will be considered false and exclude opportunities. | [default to false]
 **includeSubEvents** | **bool** | Indicates whether to include the sub events in the search result. | [default to false]
 **cateringEventOrderBy** | **string** | A collection of supported list of order by for search catering events. | [default to &quot;StartDateTimeAsc&quot;]
 **fetchInstructions** | **[]string** | Instruction to fetch all eligible master events for the selected event | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | [default to 200]
 **offset** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [default to 0]
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Events**](Events.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetEventsResources

> EventsResources GetEventsResources(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BlockId(blockId).EventIds(eventIds).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Event Resources



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/evm"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the eventEndDate user is logged in
    blockId := "blockId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    eventIds := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.EventManagementAPI.GetEventsResources(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BlockId(blockId).EventIds(eventIds).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `EventManagementAPI.GetEventsResources``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetEventsResources`: EventsResources
    fmt.Fprintf(os.Stdout, "Response from `EventManagementAPI.GetEventsResources`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetEventsResourcesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the eventEndDate user is logged in | 
 **blockId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **eventIds** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**EventsResources**](EventsResources.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetFunctionSpaceAvailability

> FunctionSpaceAvailabilityDetails GetFunctionSpaceAvailability(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CheckInventory(checkInventory).EventEndDate(eventEndDate).Limit(limit).Offset(offset).PhysicalRoom(physicalRoom).ShowForceAlternate(showForceAlternate).EventStartDate(eventStartDate).RoomCodes(roomCodes).RoomType(roomType).SpaceType(spaceType).FunctionSpaceWildcard(functionSpaceWildcard).FloorCodes(floorCodes).LocationCodes(locationCodes).FetchInstructions(fetchInstructions).FunctionSpaceSearchMode(functionSpaceSearchMode).FunctionSpaceAdditionalSearchMode(functionSpaceAdditionalSearchMode).AttendeesFrom(attendeesFrom).AttendeesTo(attendeesTo).AreaFrom(areaFrom).AreaTo(areaTo).SetupCodes(setupCodes).MasterRateCode(masterRateCode).Amount(amount).CurrencyCode(currencyCode).MasterSetupCode(masterSetupCode).SetupTime(setupTime).SetdownTime(setdownTime).ResvNameId(resvNameId).EventTypeCodes(eventTypeCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get hotel's function space availability



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/evm"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the eventEndDate user is logged in
    checkInventory := true // bool | Flag that indicates if when quering for availability inventory should be checked or not. (optional)
    eventEndDate := time.Now() // string | The ending value of the time span. (optional)
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    offset := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional) (default to 0)
    physicalRoom := true // bool | Determines whether to fetch only physical meeting rooms or not. (optional)
    showForceAlternate := true // bool | Flag that indicates if the result includes force alternate function spaces. (optional)
    eventStartDate := time.Now() // string | The starting value of the time span. (optional)
    roomCodes := []string{"Inner_example"} // []string |  (optional)
    roomType := "roomType_example" // string | Room Type where function space belongs to (optional)
    spaceType := "spaceType_example" // string | Space Type where function space belongs to (optional)
    functionSpaceWildcard := "functionSpaceWildcard_example" // string | Wild search on Room Code and Function Name. (optional)
    floorCodes := []string{"Inner_example"} // []string |  (optional)
    locationCodes := []string{"Inner_example"} // []string |  (optional)
    fetchInstructions := []string{"FetchInstructions_example"} // []string | Instruction to fetch only function space count. (optional)
    functionSpaceSearchMode := "functionSpaceSearchMode_example" // string | A collection of prime search modes for fetching Function Space availability (optional)
    functionSpaceAdditionalSearchMode := "functionSpaceAdditionalSearchMode_example" // string | A collection of additional search modes for fetching Function Space availability. (optional)
    attendeesFrom := int32(56) // int32 |  (optional)
    attendeesTo := int32(56) // int32 |  (optional)
    areaFrom := float32(8.14) // float32 |  (optional)
    areaTo := float32(8.14) // float32 |  (optional)
    setupCodes := []string{"Inner_example"} // []string |  (optional)
    masterRateCode := "masterRateCode_example" // string | Rate Code used by master function space. (optional)
    amount := float32(8.14) // float32 | A monetary amount. (optional)
    currencyCode := "currencyCode_example" // string | Provides a currency code to reflect the currency in which an amount may be expressed. (optional)
    masterSetupCode := "masterSetupCode_example" // string | Setup Code used by master function space. (optional)
    setupTime := int32(56) // int32 | Setup time in minutes. (optional)
    setdownTime := int32(56) // int32 | Setdown time in minutes. (optional)
    resvNameId := float32(8.14) // float32 | Internal ID of reservation, which currently holds the Function Space and which needs to be excluded while checking the Function Space availability (optional)
    eventTypeCodes := []string{"Inner_example"} // []string |  (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.EventManagementAPI.GetFunctionSpaceAvailability(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CheckInventory(checkInventory).EventEndDate(eventEndDate).Limit(limit).Offset(offset).PhysicalRoom(physicalRoom).ShowForceAlternate(showForceAlternate).EventStartDate(eventStartDate).RoomCodes(roomCodes).RoomType(roomType).SpaceType(spaceType).FunctionSpaceWildcard(functionSpaceWildcard).FloorCodes(floorCodes).LocationCodes(locationCodes).FetchInstructions(fetchInstructions).FunctionSpaceSearchMode(functionSpaceSearchMode).FunctionSpaceAdditionalSearchMode(functionSpaceAdditionalSearchMode).AttendeesFrom(attendeesFrom).AttendeesTo(attendeesTo).AreaFrom(areaFrom).AreaTo(areaTo).SetupCodes(setupCodes).MasterRateCode(masterRateCode).Amount(amount).CurrencyCode(currencyCode).MasterSetupCode(masterSetupCode).SetupTime(setupTime).SetdownTime(setdownTime).ResvNameId(resvNameId).EventTypeCodes(eventTypeCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `EventManagementAPI.GetFunctionSpaceAvailability``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetFunctionSpaceAvailability`: FunctionSpaceAvailabilityDetails
    fmt.Fprintf(os.Stdout, "Response from `EventManagementAPI.GetFunctionSpaceAvailability`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetFunctionSpaceAvailabilityRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the eventEndDate user is logged in | 
 **checkInventory** | **bool** | Flag that indicates if when quering for availability inventory should be checked or not. | 
 **eventEndDate** | **string** | The ending value of the time span. | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **offset** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [default to 0]
 **physicalRoom** | **bool** | Determines whether to fetch only physical meeting rooms or not. | 
 **showForceAlternate** | **bool** | Flag that indicates if the result includes force alternate function spaces. | 
 **eventStartDate** | **string** | The starting value of the time span. | 
 **roomCodes** | **[]string** |  | 
 **roomType** | **string** | Room Type where function space belongs to | 
 **spaceType** | **string** | Space Type where function space belongs to | 
 **functionSpaceWildcard** | **string** | Wild search on Room Code and Function Name. | 
 **floorCodes** | **[]string** |  | 
 **locationCodes** | **[]string** |  | 
 **fetchInstructions** | **[]string** | Instruction to fetch only function space count. | 
 **functionSpaceSearchMode** | **string** | A collection of prime search modes for fetching Function Space availability | 
 **functionSpaceAdditionalSearchMode** | **string** | A collection of additional search modes for fetching Function Space availability. | 
 **attendeesFrom** | **int32** |  | 
 **attendeesTo** | **int32** |  | 
 **areaFrom** | **float32** |  | 
 **areaTo** | **float32** |  | 
 **setupCodes** | **[]string** |  | 
 **masterRateCode** | **string** | Rate Code used by master function space. | 
 **amount** | **float32** | A monetary amount. | 
 **currencyCode** | **string** | Provides a currency code to reflect the currency in which an amount may be expressed. | 
 **masterSetupCode** | **string** | Setup Code used by master function space. | 
 **setupTime** | **int32** | Setup time in minutes. | 
 **setdownTime** | **int32** | Setdown time in minutes. | 
 **resvNameId** | **float32** | Internal ID of reservation, which currently holds the Function Space and which needs to be excluded while checking the Function Space availability | 
 **eventTypeCodes** | **[]string** |  | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**FunctionSpaceAvailabilityDetails**](FunctionSpaceAvailabilityDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetSharedFunctionSpaceEvents

> FunctionSpaceEvents GetSharedFunctionSpaceEvents(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FunctionSpaceCode(functionSpaceCode).StartDateTime(startDateTime).EndDateTime(endDateTime).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get shared function space events



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/evm"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the eventEndDate user is logged in
    functionSpaceCode := "functionSpaceCode_example" // string | Function space from which shared events will be fetched. (optional)
    startDateTime := time.Now() // string |  (optional)
    endDateTime := time.Now() // string |  (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.EventManagementAPI.GetSharedFunctionSpaceEvents(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FunctionSpaceCode(functionSpaceCode).StartDateTime(startDateTime).EndDateTime(endDateTime).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `EventManagementAPI.GetSharedFunctionSpaceEvents``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetSharedFunctionSpaceEvents`: FunctionSpaceEvents
    fmt.Fprintf(os.Stdout, "Response from `EventManagementAPI.GetSharedFunctionSpaceEvents`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetSharedFunctionSpaceEventsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the eventEndDate user is logged in | 
 **functionSpaceCode** | **string** | Function space from which shared events will be fetched. | 
 **startDateTime** | **string** |  | 
 **endDateTime** | **string** |  | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**FunctionSpaceEvents**](FunctionSpaceEvents.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetWaitlistedEvents

> WaitlistedEvents GetWaitlistedEvents(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FunctionSpaceCode(functionSpaceCode).AccountName(accountName).BlockName(blockName).BlockId(blockId).BlockIdContext(blockIdContext).BlockIdType(blockIdType).StartDateTime(startDateTime).EndDateTime(endDateTime).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Retreve Waitlisted Events 



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/evm"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the eventEndDate user is logged in
    functionSpaceCode := []string{"Inner_example"} // []string |  (optional)
    accountName := "accountName_example" // string | Search a specific account's waitlisted events. (optional)
    blockName := "blockName_example" // string | Search a specific block's waitlisted events. (optional)
    blockId := "blockId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    blockIdContext := "blockIdContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    blockIdType := "blockIdType_example" // string | A reference to the type of object defined by the UniqueID elementSpace. Refer to OpenTravel Code List Unique ID Type (UIT). (optional)
    startDateTime := time.Now() // string |  (optional)
    endDateTime := time.Now() // string |  (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.EventManagementAPI.GetWaitlistedEvents(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FunctionSpaceCode(functionSpaceCode).AccountName(accountName).BlockName(blockName).BlockId(blockId).BlockIdContext(blockIdContext).BlockIdType(blockIdType).StartDateTime(startDateTime).EndDateTime(endDateTime).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `EventManagementAPI.GetWaitlistedEvents``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetWaitlistedEvents`: WaitlistedEvents
    fmt.Fprintf(os.Stdout, "Response from `EventManagementAPI.GetWaitlistedEvents`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetWaitlistedEventsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the eventEndDate user is logged in | 
 **functionSpaceCode** | **[]string** |  | 
 **accountName** | **string** | Search a specific account&#39;s waitlisted events. | 
 **blockName** | **string** | Search a specific block&#39;s waitlisted events. | 
 **blockId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **blockIdContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **blockIdType** | **string** | A reference to the type of object defined by the UniqueID elementSpace. Refer to OpenTravel Code List Unique ID Type (UIT). | 
 **startDateTime** | **string** |  | 
 **endDateTime** | **string** |  | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**WaitlistedEvents**](WaitlistedEvents.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ManageAlternateEvents

> ManageAlternateEventsStatus ManageAlternateEvents(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ManageAlternateEvents(manageAlternateEvents).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Manage alternate events.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/evm"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the eventEndDate user is logged in
    manageAlternateEvents := *openapiclient.NewManageAlternateEventsRequest() // ManageAlternateEventsRequest | Request object for managing catering events those are alternate to other catering events.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.EventManagementAPI.ManageAlternateEvents(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ManageAlternateEvents(manageAlternateEvents).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `EventManagementAPI.ManageAlternateEvents``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ManageAlternateEvents`: ManageAlternateEventsStatus
    fmt.Fprintf(os.Stdout, "Response from `EventManagementAPI.ManageAlternateEvents`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiManageAlternateEventsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the eventEndDate user is logged in | 
 **manageAlternateEvents** | [**ManageAlternateEventsRequest**](ManageAlternateEventsRequest.md) | Request object for managing catering events those are alternate to other catering events. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ManageAlternateEventsStatus**](ManageAlternateEventsStatus.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ManageCateringEventPostings

> CateringEventPostings ManageCateringEventPostings(ctx, eventId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CateringEventPostings(cateringEventPostings).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Manage Catering Event postings



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/evm"
)

func main() {
    eventId := "eventId_example" // string | 
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the eventEndDate user is logged in
    cateringEventPostings := *openapiclient.NewManageCateringEventPostingsRequest() // ManageCateringEventPostingsRequest | Request object for retrieving catering events postings.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.EventManagementAPI.ManageCateringEventPostings(context.Background(), eventId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CateringEventPostings(cateringEventPostings).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `EventManagementAPI.ManageCateringEventPostings``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ManageCateringEventPostings`: CateringEventPostings
    fmt.Fprintf(os.Stdout, "Response from `EventManagementAPI.ManageCateringEventPostings`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**eventId** | **string** |  | 
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiManageCateringEventPostingsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the eventEndDate user is logged in | 
 **cateringEventPostings** | [**ManageCateringEventPostingsRequest**](ManageCateringEventPostingsRequest.md) | Request object for retrieving catering events postings. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**CateringEventPostings**](CateringEventPostings.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ManageWaitlistedEvents

> WaitlistedEvents ManageWaitlistedEvents(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ManageWaitlistedEvents(manageWaitlistedEvents).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Manage Waitlisted Events



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/evm"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the eventEndDate user is logged in
    manageWaitlistedEvents := *openapiclient.NewManageWaitlistedEventsRequest() // ManageWaitlistedEventsRequest | Request object for managing waitlisted catering events.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.EventManagementAPI.ManageWaitlistedEvents(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ManageWaitlistedEvents(manageWaitlistedEvents).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `EventManagementAPI.ManageWaitlistedEvents``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ManageWaitlistedEvents`: WaitlistedEvents
    fmt.Fprintf(os.Stdout, "Response from `EventManagementAPI.ManageWaitlistedEvents`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiManageWaitlistedEventsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the eventEndDate user is logged in | 
 **manageWaitlistedEvents** | [**ManageWaitlistedEventsRequest**](ManageWaitlistedEventsRequest.md) | Request object for managing waitlisted catering events. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**WaitlistedEvents**](WaitlistedEvents.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## MoveEventResources

> EventResourcesResponse MoveEventResources(ctx, eventId, blockId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).EventResources(eventResources).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Move event resources



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/evm"
)

func main() {
    eventId := "eventId_example" // string | Unique ID of the event
    blockId := "blockId_example" // string | Unique ID of the block
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the eventEndDate user is logged in
    eventResources := *openapiclient.NewCopyEventResourcesRequest() // CopyEventResourcesRequest | Request object for moving event resources.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.EventManagementAPI.MoveEventResources(context.Background(), eventId, blockId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).EventResources(eventResources).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `EventManagementAPI.MoveEventResources``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `MoveEventResources`: EventResourcesResponse
    fmt.Fprintf(os.Stdout, "Response from `EventManagementAPI.MoveEventResources`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**eventId** | **string** | Unique ID of the event | 
**blockId** | **string** | Unique ID of the block | 

### Other Parameters

Other parameters are passed through a pointer to a apiMoveEventResourcesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the eventEndDate user is logged in | 
 **eventResources** | [**CopyEventResourcesRequest**](CopyEventResourcesRequest.md) | Request object for moving event resources. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**EventResourcesResponse**](EventResourcesResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostCateringPackage

> BlockCateringPackageDetails PostCateringPackage(ctx, blockId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BlockCateringPackage(blockCateringPackage).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Add catering packages to a block



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/evm"
)

func main() {
    blockId := "blockId_example" // string | Unique ID of the block
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the eventEndDate user is logged in
    blockCateringPackage := *openapiclient.NewBlockCateringPackage() // BlockCateringPackage | Request object for adding Catering Package/Template Events to block .
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.EventManagementAPI.PostCateringPackage(context.Background(), blockId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BlockCateringPackage(blockCateringPackage).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `EventManagementAPI.PostCateringPackage``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostCateringPackage`: BlockCateringPackageDetails
    fmt.Fprintf(os.Stdout, "Response from `EventManagementAPI.PostCateringPackage`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**blockId** | **string** | Unique ID of the block | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostCateringPackageRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the eventEndDate user is logged in | 
 **blockCateringPackage** | [**BlockCateringPackage**](BlockCateringPackage.md) | Request object for adding Catering Package/Template Events to block . | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**BlockCateringPackageDetails**](BlockCateringPackageDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostCateringPackageRevenue

> Status PostCateringPackageRevenue(ctx, cateringpackageId, blockId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CateringPackageRevenue(cateringPackageRevenue).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Add catering package revenue to a block



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/evm"
)

func main() {
    cateringpackageId := "cateringpackageId_example" // string | Unique ID of the catering package
    blockId := "blockId_example" // string | Unique ID of the block
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the eventEndDate user is logged in
    cateringPackageRevenue := *openapiclient.NewCateringPackageRevenue() // CateringPackageRevenue | Request object for creating revenue details of the associated catering package.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.EventManagementAPI.PostCateringPackageRevenue(context.Background(), cateringpackageId, blockId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CateringPackageRevenue(cateringPackageRevenue).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `EventManagementAPI.PostCateringPackageRevenue``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostCateringPackageRevenue`: Status
    fmt.Fprintf(os.Stdout, "Response from `EventManagementAPI.PostCateringPackageRevenue`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**cateringpackageId** | **string** | Unique ID of the catering package | 
**blockId** | **string** | Unique ID of the block | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostCateringPackageRevenueRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the eventEndDate user is logged in | 
 **cateringPackageRevenue** | [**CateringPackageRevenue**](CateringPackageRevenue.md) | Request object for creating revenue details of the associated catering package. | 
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


## PostEvents

> Event PostEvents(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Event(event).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create an Event



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/evm"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the eventEndDate user is logged in
    event := *openapiclient.NewPostEventsRequest() // PostEventsRequest | Request object for creating new event.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.EventManagementAPI.PostEvents(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Event(event).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `EventManagementAPI.PostEvents``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostEvents`: Event
    fmt.Fprintf(os.Stdout, "Response from `EventManagementAPI.PostEvents`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostEventsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the eventEndDate user is logged in | 
 **event** | [**PostEventsRequest**](PostEventsRequest.md) | Request object for creating new event. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Event**](Event.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostOpportunityEvents

> Status PostOpportunityEvents(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).OpportunityEvents(opportunityEvents).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create Events for Opportunity Block



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/evm"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the eventEndDate user is logged in
    opportunityEvents := *openapiclient.NewOpportunityEvents() // OpportunityEvents | Request object for adding Events for an Opportunity Block.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.EventManagementAPI.PostOpportunityEvents(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).OpportunityEvents(opportunityEvents).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `EventManagementAPI.PostOpportunityEvents``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostOpportunityEvents`: Status
    fmt.Fprintf(os.Stdout, "Response from `EventManagementAPI.PostOpportunityEvents`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostOpportunityEventsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the eventEndDate user is logged in | 
 **opportunityEvents** | [**OpportunityEvents**](OpportunityEvents.md) | Request object for adding Events for an Opportunity Block. | 
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


## PostQuickInsertResources

> QuickInsertResourceStatus PostQuickInsertResources(ctx, quickInsertId, eventId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).QuickInsertResources(quickInsertResources).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Add Resource to an Event in a hotel by ID



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/evm"
)

func main() {
    quickInsertId := "quickInsertId_example" // string | Menu/Item quick insert ID or Item Template name
    eventId := "eventId_example" // string | Unique ID of the event
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the eventEndDate user is logged in
    quickInsertResources := *openapiclient.NewQuickInsertResources() // QuickInsertResources | Request object for quick insert of menu(s),item(s) or item template(s).
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.EventManagementAPI.PostQuickInsertResources(context.Background(), quickInsertId, eventId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).QuickInsertResources(quickInsertResources).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `EventManagementAPI.PostQuickInsertResources``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostQuickInsertResources`: QuickInsertResourceStatus
    fmt.Fprintf(os.Stdout, "Response from `EventManagementAPI.PostQuickInsertResources`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**quickInsertId** | **string** | Menu/Item quick insert ID or Item Template name | 
**eventId** | **string** | Unique ID of the event | 
**hotelId** | **string** | Unique ID of the hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostQuickInsertResourcesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the eventEndDate user is logged in | 
 **quickInsertResources** | [**QuickInsertResources**](QuickInsertResources.md) | Request object for quick insert of menu(s),item(s) or item template(s). | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**QuickInsertResourceStatus**](QuickInsertResourceStatus.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


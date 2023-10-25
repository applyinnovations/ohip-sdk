# \ResourceConfigApi

All URIs are relative to */evm/config/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CheckDiscountAvailable**](ResourceConfigApi.md#CheckDiscountAvailable) | **Get** /hotels/{hotelId}/discountAvailable/check | Check if discount is available
[**CopyCateringMenuItemClasses**](ResourceConfigApi.md#CopyCateringMenuItemClasses) | **Put** /cateringMenuItemClasses/{cateringMenuItemClassesCode}/copy | Copy menu item classes
[**CopyCateringMenuItems**](ResourceConfigApi.md#CopyCateringMenuItems) | **Post** /hotels/{hotelId}/cateringMenuItems/copy | Operation to copy catering menu items.
[**CopyCateringMenus**](ResourceConfigApi.md#CopyCateringMenus) | **Post** /hotels/{hotelId}/cateringMenus/{cateringMenuId}/copy | Copy a menu
[**CopyEventForecasts**](ResourceConfigApi.md#CopyEventForecasts) | **Put** /EventForecasts/copy | Copy event forecasts
[**CopyInventoryItems**](ResourceConfigApi.md#CopyInventoryItems) | **Put** /hotels/{sourceHotelId}/inventoryItems/copy | Copy Item Inventories
[**CopyItemClasses**](ResourceConfigApi.md#CopyItemClasses) | **Put** /itemClasses/copy | Copy item classes
[**DeleteCateringContainers**](ResourceConfigApi.md#DeleteCateringContainers) | **Delete** /cateringContainers/{cateringContainersCode} | Delete Catering container
[**DeleteCateringItemRates**](ResourceConfigApi.md#DeleteCateringItemRates) | **Delete** /cateringItemRates/{cateringItemRatesCode} | Remove catering item rates
[**DeleteCateringMenuClasses**](ResourceConfigApi.md#DeleteCateringMenuClasses) | **Delete** /menuClasses/{menuClassesId}/cateringMenuClasses | Delete menu classes
[**DeleteCateringMenuItemClasses**](ResourceConfigApi.md#DeleteCateringMenuItemClasses) | **Delete** /cateringMenuItemClasses/{cateringMenuItemClassesCode} | Delete menu item classes
[**DeleteCateringMenuItems**](ResourceConfigApi.md#DeleteCateringMenuItems) | **Delete** /hotels/{hotelId}/cateringMenuItems/{cateringMenuItemId} | Operation to remove catering menu items.
[**DeleteCateringMenuItemsByChain**](ResourceConfigApi.md#DeleteCateringMenuItemsByChain) | **Delete** /cateringMenuItems/{cateringMenuItemId} | Operation to remove catering menu items by chain.
[**DeleteCateringMenuMultiCourses**](ResourceConfigApi.md#DeleteCateringMenuMultiCourses) | **Delete** /hotels/{hotelId}/courses/{coursesId}/menuMultiCourses | Remove menu multi courses
[**DeleteCateringMenus**](ResourceConfigApi.md#DeleteCateringMenus) | **Delete** /hotels/{hotelId}/cateringMenus/{cateringMenuId} | Delete a menu
[**DeleteCateringPackageEventNotes**](ResourceConfigApi.md#DeleteCateringPackageEventNotes) | **Delete** /hotels/{hotelId}/packages/{eventId}/notes/{notedId}/cateringPackageEventNotes | Delete catering package event notes
[**DeleteCateringPackageEvents**](ResourceConfigApi.md#DeleteCateringPackageEvents) | **Delete** /hotels/{hotelId}/packageEvents/{packageEventsId}/cateringPackageEvents | Delete catering package events
[**DeleteCateringPackagePrices**](ResourceConfigApi.md#DeleteCateringPackagePrices) | **Delete** /hotels/{hotelId}/packagePrices/{pricesId}/cateringPackagePrices | Delete Catering package prices
[**DeleteCateringPackageResourceNotes**](ResourceConfigApi.md#DeleteCateringPackageResourceNotes) | **Delete** /hotels/{hotelId}/notes/{notesId}/cateringPackageResourceNotes | Delete catering package resource notes
[**DeleteCateringPackageResources**](ResourceConfigApi.md#DeleteCateringPackageResources) | **Delete** /cateringPackageResources | Delete catering package resources
[**DeleteCateringPackageRevenues**](ResourceConfigApi.md#DeleteCateringPackageRevenues) | **Delete** /hotels/{hotelId}/events/{eventsId}/revenues/{revenueType}/packages/{priceId}/cateringPackageRevenues | Delete catering package revenues
[**DeleteCateringPackages**](ResourceConfigApi.md#DeleteCateringPackages) | **Delete** /hotels/{hotelId}/cateringPackages/{cateringPackageId} | Delete catering packages
[**DeleteEventForecasts**](ResourceConfigApi.md#DeleteEventForecasts) | **Delete** /eventForecasts/{forecastsId}/eventTypes/{eventTypesCode}/eventForecasts | Delete event forecasts
[**DeleteInventoryItemTemplates**](ResourceConfigApi.md#DeleteInventoryItemTemplates) | **Delete** /inventoryItems/{inventoryItemId} | Delete Item Inventory templates
[**DeleteInventoryItems**](ResourceConfigApi.md#DeleteInventoryItems) | **Delete** /hotels/{hotelId}/inventoryItems/{inventoryItemId} | Delete Item Inventory
[**DeleteItemClasses**](ResourceConfigApi.md#DeleteItemClasses) | **Delete** /itemClasses/{itemClassesCode} | Delete Item classes
[**DeleteItemPools**](ResourceConfigApi.md#DeleteItemPools) | **Delete** /hotels/{hotelId}/itemPools/{itemPoolsCode}/itemPools | Delete Item Pools
[**DeleteRevenueGroups**](ResourceConfigApi.md#DeleteRevenueGroups) | **Delete** /revenueGroups/{revenueGroupsCode} | Delete Catering Revenue Groups
[**GetCateringContainers**](ResourceConfigApi.md#GetCateringContainers) | **Get** /cateringContainers | Get catering containers
[**GetCateringItemRates**](ResourceConfigApi.md#GetCateringItemRates) | **Get** /cateringItemRates | Get catering item rates
[**GetCateringMenu**](ResourceConfigApi.md#GetCateringMenu) | **Get** /hotels/{hotelId}/cateringMenus/{cateringMenuId} | Get menu
[**GetCateringMenuClasses**](ResourceConfigApi.md#GetCateringMenuClasses) | **Get** /hotels/{hotelId}/cateringMenuClasses | Get menu classes
[**GetCateringMenuItemClasses**](ResourceConfigApi.md#GetCateringMenuItemClasses) | **Get** /hotels/{hotelId}/cateringMenuItemClasses | Get menu item classes
[**GetCateringMenuItems**](ResourceConfigApi.md#GetCateringMenuItems) | **Get** /hotels/{hotelId}/cateringMenuItems | Get Menu items
[**GetCateringMenus**](ResourceConfigApi.md#GetCateringMenus) | **Get** /hotels/{hotelId}/cateringMenus | Get menus
[**GetCateringPackage**](ResourceConfigApi.md#GetCateringPackage) | **Get** /hotels/{hotelId}/cateringPackages/{cateringPackageId} | Get catering package
[**GetCateringPackageByChain**](ResourceConfigApi.md#GetCateringPackageByChain) | **Get** /cateringPackages/{cateringPackageId} | Get catering package by chain
[**GetCateringPackages**](ResourceConfigApi.md#GetCateringPackages) | **Get** /hotels/{hotelId}/cateringPackages | Fetch catering packages for a property.
[**GetCateringPackagesMultiProperties**](ResourceConfigApi.md#GetCateringPackagesMultiProperties) | **Get** /cateringPackages | Fetch catering packages
[**GetCateringServings**](ResourceConfigApi.md#GetCateringServings) | **Get** /cateringServings | Get catering servings
[**GetDailyInventoryItems**](ResourceConfigApi.md#GetDailyInventoryItems) | **Get** /hotels/{hotelId}/dailyInventoryItems | Get Daily Item Inventory
[**GetEventForecasts**](ResourceConfigApi.md#GetEventForecasts) | **Get** /hotels/{hotelId}/eventForecasts | Get Event Forecasts
[**GetInventoryItemTemplates**](ResourceConfigApi.md#GetInventoryItemTemplates) | **Get** /inventoryItems | Get Item Inventory templates
[**GetInventoryItems**](ResourceConfigApi.md#GetInventoryItems) | **Get** /hotels/{hotelId}/inventoryItems | Get Item Inventory
[**GetItemClasses**](ResourceConfigApi.md#GetItemClasses) | **Get** /itemClasses | Get item classes
[**GetItemPools**](ResourceConfigApi.md#GetItemPools) | **Get** /hotels/{hotelId}/itemPools | Get Item Pools
[**GetRevenueGroups**](ResourceConfigApi.md#GetRevenueGroups) | **Get** /revenueGroups | Get Catering Revenue Groups
[**GetRevenueTypes**](ResourceConfigApi.md#GetRevenueTypes) | **Get** /revenueTypes | Get Catering Revenue Types
[**PostCateringContainers**](ResourceConfigApi.md#PostCateringContainers) | **Post** /cateringContainers | Create catering containers
[**PostCateringItemRates**](ResourceConfigApi.md#PostCateringItemRates) | **Post** /cateringItemRates | Create Catering Item rates
[**PostCateringMenuClasses**](ResourceConfigApi.md#PostCateringMenuClasses) | **Post** /cateringMenuClasses | Create menu classes
[**PostCateringMenuItemClasses**](ResourceConfigApi.md#PostCateringMenuItemClasses) | **Post** /cateringMenuItemClasses | Create menu item classes
[**PostCateringMenuItems**](ResourceConfigApi.md#PostCateringMenuItems) | **Post** /hotels/{hotelId}/cateringMenuItems | Create menu items
[**PostCateringMenus**](ResourceConfigApi.md#PostCateringMenus) | **Post** /hotels/{hotelId}/cateringMenus | Create menus
[**PostCateringPackages**](ResourceConfigApi.md#PostCateringPackages) | **Post** /hotels/{hotelId}/cateringPackages | Create catering packages
[**PostEventForecasts**](ResourceConfigApi.md#PostEventForecasts) | **Post** /eventForecasts | Create event forecasts
[**PostInventoryItemTemplates**](ResourceConfigApi.md#PostInventoryItemTemplates) | **Post** /inventoryItems | Create Item Inventory template
[**PostInventoryItems**](ResourceConfigApi.md#PostInventoryItems) | **Post** /hotels/{hotelId}/inventoryItems | Create an Item Inventory
[**PostItemClasses**](ResourceConfigApi.md#PostItemClasses) | **Post** /itemClasses | Create item classes
[**PostItemPools**](ResourceConfigApi.md#PostItemPools) | **Post** /itemPools | Create Item Pools
[**PostRevenueGroups**](ResourceConfigApi.md#PostRevenueGroups) | **Post** /revenueGroups | Create Catering Revenue Groups
[**PostRevenueTypes**](ResourceConfigApi.md#PostRevenueTypes) | **Post** /revenueTypes | Create Catering Revenue Types
[**PutCateringContainers**](ResourceConfigApi.md#PutCateringContainers) | **Put** /cateringContainers/{cateringContainersCode} | Change catering containers
[**PutCateringItemRates**](ResourceConfigApi.md#PutCateringItemRates) | **Put** /cateringItemRates/{cateringItemRatesCode} | Change catering item rates
[**PutCateringMenuClasses**](ResourceConfigApi.md#PutCateringMenuClasses) | **Put** /cateringMenuClasses | Update catering menu classes
[**PutCateringMenuItemClasses**](ResourceConfigApi.md#PutCateringMenuItemClasses) | **Put** /cateringMenuItemClasses/{cateringMenuItemClassesCode} | Update menu item classes
[**PutCateringMenuItems**](ResourceConfigApi.md#PutCateringMenuItems) | **Put** /hotels/{hotelId}/cateringMenuItems/{cateringMenuItemId} | Update menu items
[**PutCateringMenus**](ResourceConfigApi.md#PutCateringMenus) | **Put** /hotels/{hotelId}/cateringMenus/{cateringMenuId} | Operation to change catering menus.
[**PutCateringPackages**](ResourceConfigApi.md#PutCateringPackages) | **Put** /hotels/{hotelId}/cateringPackages/{cateringPackageId} | Update Catering packages
[**PutCateringServings**](ResourceConfigApi.md#PutCateringServings) | **Put** /cateringServings/{cateringServingsCode} | Update catering servings
[**PutEventForecasts**](ResourceConfigApi.md#PutEventForecasts) | **Put** /eventForecasts | Update Event forecasts
[**PutInventoryItemTemplates**](ResourceConfigApi.md#PutInventoryItemTemplates) | **Put** /inventoryItems/{inventoryItemId} | Change Item Inventory templates
[**PutInventoryItems**](ResourceConfigApi.md#PutInventoryItems) | **Put** /hotels/{hotelId}/inventoryItems/{inventoryItemId} | Update Item Inventory
[**PutItemClasses**](ResourceConfigApi.md#PutItemClasses) | **Put** /itemClasses/{itemClassesCode} | Update item classes
[**PutItemPools**](ResourceConfigApi.md#PutItemPools) | **Post** /itemPools/{itemPoolsCode} | Change Item Pools
[**PutRevenueGroups**](ResourceConfigApi.md#PutRevenueGroups) | **Put** /revenueGroups/{revenueGroupsCode} | Update Catering Revenue Groups
[**PutRevenueTypes**](ResourceConfigApi.md#PutRevenueTypes) | **Put** /revenueTypes/{revenueTypesId} | Update Catering Revenue Types



## CheckDiscountAvailable

> CheckedDiscountAvailable CheckDiscountAvailable(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Check if discount is available



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/evmcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Unique OPERA Hotel Id
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ResourceConfigApi.CheckDiscountAvailable(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigApi.CheckDiscountAvailable``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CheckDiscountAvailable`: CheckedDiscountAvailable
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigApi.CheckDiscountAvailable`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique OPERA Hotel Id | 

### Other Parameters

Other parameters are passed through a pointer to a apiCheckDiscountAvailableRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**CheckedDiscountAvailable**](CheckedDiscountAvailable.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## CopyCateringMenuItemClasses

> Status CopyCateringMenuItemClasses(ctx, cateringMenuItemClassesCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CateringMenuItemClassesCopy(cateringMenuItemClassesCopy).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Copy menu item classes



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/evmcfg"
)

func main() {
    cateringMenuItemClassesCode := "cateringMenuItemClassesCode_example" // string | Unique Menu Item Class Id
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    cateringMenuItemClassesCopy := *openapiclient.NewCopyCateringMenuItemClassesRequest() // CopyCateringMenuItemClassesRequest | Request object for Copying Menu Item Classes.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ResourceConfigApi.CopyCateringMenuItemClasses(context.Background(), cateringMenuItemClassesCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CateringMenuItemClassesCopy(cateringMenuItemClassesCopy).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigApi.CopyCateringMenuItemClasses``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CopyCateringMenuItemClasses`: Status
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigApi.CopyCateringMenuItemClasses`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**cateringMenuItemClassesCode** | **string** | Unique Menu Item Class Id | 

### Other Parameters

Other parameters are passed through a pointer to a apiCopyCateringMenuItemClassesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **cateringMenuItemClassesCopy** | [**CopyCateringMenuItemClassesRequest**](CopyCateringMenuItemClassesRequest.md) | Request object for Copying Menu Item Classes. | 
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


## CopyCateringMenuItems

> Status CopyCateringMenuItems(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CateringMenuItemsCopy(cateringMenuItemsCopy).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to copy catering menu items.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/evmcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Unique OPERA Hotel Id
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    cateringMenuItemsCopy := *openapiclient.NewCopyCateringMenuItemsRequest() // CopyCateringMenuItemsRequest | Request object for Copying Menu Items.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ResourceConfigApi.CopyCateringMenuItems(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CateringMenuItemsCopy(cateringMenuItemsCopy).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigApi.CopyCateringMenuItems``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CopyCateringMenuItems`: Status
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigApi.CopyCateringMenuItems`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique OPERA Hotel Id | 

### Other Parameters

Other parameters are passed through a pointer to a apiCopyCateringMenuItemsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **cateringMenuItemsCopy** | [**CopyCateringMenuItemsRequest**](CopyCateringMenuItemsRequest.md) | Request object for Copying Menu Items. | 
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


## CopyCateringMenus

> Status CopyCateringMenus(ctx, cateringMenuId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CateringMenusCopy(cateringMenusCopy).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Copy a menu



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/evmcfg"
)

func main() {
    cateringMenuId := "cateringMenuId_example" // string | Unique ID of Catering Menu
    hotelId := "hotelId_example" // string | Unique OPERA Hotel Id
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    cateringMenusCopy := *openapiclient.NewCopyCateringMenusRequest() // CopyCateringMenusRequest | Request object for copying a Menu.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ResourceConfigApi.CopyCateringMenus(context.Background(), cateringMenuId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CateringMenusCopy(cateringMenusCopy).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigApi.CopyCateringMenus``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CopyCateringMenus`: Status
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigApi.CopyCateringMenus`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**cateringMenuId** | **string** | Unique ID of Catering Menu | 
**hotelId** | **string** | Unique OPERA Hotel Id | 

### Other Parameters

Other parameters are passed through a pointer to a apiCopyCateringMenusRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **cateringMenusCopy** | [**CopyCateringMenusRequest**](CopyCateringMenusRequest.md) | Request object for copying a Menu. | 
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


## CopyEventForecasts

> Status CopyEventForecasts(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).EventForecastsCopy(eventForecastsCopy).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Copy event forecasts



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/evmcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    eventForecastsCopy := *openapiclient.NewCopyEventForecastsRequest() // CopyEventForecastsRequest | Request object for Copying Event Forecasts to multiple hotels.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ResourceConfigApi.CopyEventForecasts(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).EventForecastsCopy(eventForecastsCopy).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigApi.CopyEventForecasts``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CopyEventForecasts`: Status
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigApi.CopyEventForecasts`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCopyEventForecastsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **eventForecastsCopy** | [**CopyEventForecastsRequest**](CopyEventForecastsRequest.md) | Request object for Copying Event Forecasts to multiple hotels. | 
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


## CopyInventoryItems

> Status CopyInventoryItems(ctx, sourceHotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).InventoryItemsCopy(inventoryItemsCopy).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Copy Item Inventories



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/evmcfg"
)

func main() {
    sourceHotelId := "sourceHotelId_example" // string | Unique ID of source hotel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    inventoryItemsCopy := *openapiclient.NewCopyInventoryItemsRequest() // CopyInventoryItemsRequest | Request object for copying Inventory Items Setup configuration
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ResourceConfigApi.CopyInventoryItems(context.Background(), sourceHotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).InventoryItemsCopy(inventoryItemsCopy).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigApi.CopyInventoryItems``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CopyInventoryItems`: Status
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigApi.CopyInventoryItems`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceHotelId** | **string** | Unique ID of source hotel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiCopyInventoryItemsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **inventoryItemsCopy** | [**CopyInventoryItemsRequest**](CopyInventoryItemsRequest.md) | Request object for copying Inventory Items Setup configuration | 
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


## CopyItemClasses

> Status CopyItemClasses(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ItemClassesCopy(itemClassesCopy).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Copy item classes



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/evmcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    itemClassesCopy := TODO // UNKNOWN_BASE_TYPE | List of the Item Class to be copied.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ResourceConfigApi.CopyItemClasses(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ItemClassesCopy(itemClassesCopy).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigApi.CopyItemClasses``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CopyItemClasses`: Status
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigApi.CopyItemClasses`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCopyItemClassesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **itemClassesCopy** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md) | List of the Item Class to be copied. | 
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


## DeleteCateringContainers

> Status DeleteCateringContainers(ctx, cateringContainersCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete Catering container



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/evmcfg"
)

func main() {
    cateringContainersCode := "cateringContainersCode_example" // string | Unique Catering Container Code
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ResourceConfigApi.DeleteCateringContainers(context.Background(), cateringContainersCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigApi.DeleteCateringContainers``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteCateringContainers`: Status
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigApi.DeleteCateringContainers`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**cateringContainersCode** | **string** | Unique Catering Container Code | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteCateringContainersRequest struct via the builder pattern


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


## DeleteCateringItemRates

> Status DeleteCateringItemRates(ctx, cateringItemRatesCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Remove catering item rates



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/evmcfg"
)

func main() {
    cateringItemRatesCode := "cateringItemRatesCode_example" // string | Unique Catering Item Rates Codes
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ResourceConfigApi.DeleteCateringItemRates(context.Background(), cateringItemRatesCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigApi.DeleteCateringItemRates``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteCateringItemRates`: Status
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigApi.DeleteCateringItemRates`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**cateringItemRatesCode** | **string** | Unique Catering Item Rates Codes | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteCateringItemRatesRequest struct via the builder pattern


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


## DeleteCateringMenuClasses

> Status DeleteCateringMenuClasses(ctx, menuClassesId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).MenuClassListIDExtension(menuClassListIDExtension).MenuClassListIdContext(menuClassListIdContext).MenuClassListUniqueIdType(menuClassListUniqueIdType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete menu classes



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/evmcfg"
)

func main() {
    menuClassesId := "menuClassesId_example" // string | Unique Catering Menu Class ID
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    menuClassListIDExtension := []int32{int32(123)} // []int32 | Additional identifying value assigned by the creating system. (optional)
    menuClassListIdContext := []string{"Inner_example"} // []string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    menuClassListUniqueIdType := []string{"Inner_example"} // []string | A reference to the type of object defined by the UniqueID element. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ResourceConfigApi.DeleteCateringMenuClasses(context.Background(), menuClassesId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).MenuClassListIDExtension(menuClassListIDExtension).MenuClassListIdContext(menuClassListIdContext).MenuClassListUniqueIdType(menuClassListUniqueIdType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigApi.DeleteCateringMenuClasses``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteCateringMenuClasses`: Status
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigApi.DeleteCateringMenuClasses`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**menuClassesId** | **string** | Unique Catering Menu Class ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteCateringMenuClassesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **menuClassListIDExtension** | **[]int32** | Additional identifying value assigned by the creating system. | 
 **menuClassListIdContext** | **[]string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **menuClassListUniqueIdType** | **[]string** | A reference to the type of object defined by the UniqueID element. | 
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


## DeleteCateringMenuItemClasses

> Status DeleteCateringMenuItemClasses(ctx, cateringMenuItemClassesCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).MenuItemClassesIdExtension(menuItemClassesIdExtension).MenuItemClassesIdContext(menuItemClassesIdContext).MenuItemClassesUniqueIdType(menuItemClassesUniqueIdType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete menu item classes



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/evmcfg"
)

func main() {
    cateringMenuItemClassesCode := "cateringMenuItemClassesCode_example" // string | Unique Menu Item Class ID
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    menuItemClassesIdExtension := []int32{int32(123)} // []int32 | Additional identifying value assigned by the creating system. (optional)
    menuItemClassesIdContext := []string{"Inner_example"} // []string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    menuItemClassesUniqueIdType := []string{"Inner_example"} // []string | A reference to the type of object defined by the UniqueID element. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ResourceConfigApi.DeleteCateringMenuItemClasses(context.Background(), cateringMenuItemClassesCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).MenuItemClassesIdExtension(menuItemClassesIdExtension).MenuItemClassesIdContext(menuItemClassesIdContext).MenuItemClassesUniqueIdType(menuItemClassesUniqueIdType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigApi.DeleteCateringMenuItemClasses``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteCateringMenuItemClasses`: Status
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigApi.DeleteCateringMenuItemClasses`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**cateringMenuItemClassesCode** | **string** | Unique Menu Item Class ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteCateringMenuItemClassesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **menuItemClassesIdExtension** | **[]int32** | Additional identifying value assigned by the creating system. | 
 **menuItemClassesIdContext** | **[]string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **menuItemClassesUniqueIdType** | **[]string** | A reference to the type of object defined by the UniqueID element. | 
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


## DeleteCateringMenuItems

> Status DeleteCateringMenuItems(ctx, cateringMenuItemId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to remove catering menu items.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/evmcfg"
)

func main() {
    cateringMenuItemId := "cateringMenuItemId_example" // string | Unique Catering Menu Item Id
    hotelId := "hotelId_example" // string | Unique OPERA Hotel Id
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ResourceConfigApi.DeleteCateringMenuItems(context.Background(), cateringMenuItemId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigApi.DeleteCateringMenuItems``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteCateringMenuItems`: Status
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigApi.DeleteCateringMenuItems`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**cateringMenuItemId** | **string** | Unique Catering Menu Item Id | 
**hotelId** | **string** | Unique OPERA Hotel Id | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteCateringMenuItemsRequest struct via the builder pattern


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


## DeleteCateringMenuItemsByChain

> Status DeleteCateringMenuItemsByChain(ctx, cateringMenuItemId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to remove catering menu items by chain.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/evmcfg"
)

func main() {
    cateringMenuItemId := "cateringMenuItemId_example" // string | Unique Catering Menu Item Id
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    hotelId := "hotelId_example" // string | The Hotel code which the Catering Menu Items belongs to. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ResourceConfigApi.DeleteCateringMenuItemsByChain(context.Background(), cateringMenuItemId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigApi.DeleteCateringMenuItemsByChain``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteCateringMenuItemsByChain`: Status
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigApi.DeleteCateringMenuItemsByChain`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**cateringMenuItemId** | **string** | Unique Catering Menu Item Id | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteCateringMenuItemsByChainRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **hotelId** | **string** | The Hotel code which the Catering Menu Items belongs to. | 
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


## DeleteCateringMenuMultiCourses

> Status DeleteCateringMenuMultiCourses(ctx, coursesId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CourseIdListUniqueIdExtension(courseIdListUniqueIdExtension).CourseIdListUniqueIdContext(courseIdListUniqueIdContext).CourseIdListUniqueIdType(courseIdListUniqueIdType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Remove menu multi courses



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/evmcfg"
)

func main() {
    coursesId := "coursesId_example" // string | Unique Menu Multi Course ID
    hotelId := "hotelId_example" // string | Unique OPERA Hotel ID
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    courseIdListUniqueIdExtension := []int32{int32(123)} // []int32 | Additional identifying value assigned by the creating system. (optional)
    courseIdListUniqueIdContext := []string{"Inner_example"} // []string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    courseIdListUniqueIdType := []string{"Inner_example"} // []string | A reference to the type of object defined by the UniqueID element. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ResourceConfigApi.DeleteCateringMenuMultiCourses(context.Background(), coursesId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CourseIdListUniqueIdExtension(courseIdListUniqueIdExtension).CourseIdListUniqueIdContext(courseIdListUniqueIdContext).CourseIdListUniqueIdType(courseIdListUniqueIdType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigApi.DeleteCateringMenuMultiCourses``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteCateringMenuMultiCourses`: Status
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigApi.DeleteCateringMenuMultiCourses`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**coursesId** | **string** | Unique Menu Multi Course ID | 
**hotelId** | **string** | Unique OPERA Hotel ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteCateringMenuMultiCoursesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **courseIdListUniqueIdExtension** | **[]int32** | Additional identifying value assigned by the creating system. | 
 **courseIdListUniqueIdContext** | **[]string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **courseIdListUniqueIdType** | **[]string** | A reference to the type of object defined by the UniqueID element. | 
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


## DeleteCateringMenus

> Status DeleteCateringMenus(ctx, cateringMenuId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete a menu



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/evmcfg"
)

func main() {
    cateringMenuId := "cateringMenuId_example" // string | Unique ID of Catering Menu
    hotelId := "hotelId_example" // string | Unique OPERA Hotel ID
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ResourceConfigApi.DeleteCateringMenus(context.Background(), cateringMenuId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigApi.DeleteCateringMenus``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteCateringMenus`: Status
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigApi.DeleteCateringMenus`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**cateringMenuId** | **string** | Unique ID of Catering Menu | 
**hotelId** | **string** | Unique OPERA Hotel ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteCateringMenusRequest struct via the builder pattern


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


## DeleteCateringPackageEventNotes

> Status DeleteCateringPackageEventNotes(ctx, notedId, eventId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).PkgEventIdExtension(pkgEventIdExtension).PkgEventIdContext(pkgEventIdContext).PkgEventIdType(pkgEventIdType).NoteIdExtension(noteIdExtension).NoteIdContext(noteIdContext).NoteIdType(noteIdType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete catering package event notes



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/evmcfg"
)

func main() {
    notedId := "notedId_example" // string | Unique Catering Package Event Notes ID
    eventId := "eventId_example" // string | Unique Catering Package Event ID
    hotelId := "hotelId_example" // string | Unique OPERA Hotel ID
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    pkgEventIdExtension := int32(56) // int32 | Additional identifying value assigned by the creating system. (optional)
    pkgEventIdContext := "pkgEventIdContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    pkgEventIdType := "pkgEventIdType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    noteIdExtension := int32(56) // int32 | Additional identifying value assigned by the creating system. (optional)
    noteIdContext := "noteIdContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    noteIdType := "noteIdType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ResourceConfigApi.DeleteCateringPackageEventNotes(context.Background(), notedId, eventId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).PkgEventIdExtension(pkgEventIdExtension).PkgEventIdContext(pkgEventIdContext).PkgEventIdType(pkgEventIdType).NoteIdExtension(noteIdExtension).NoteIdContext(noteIdContext).NoteIdType(noteIdType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigApi.DeleteCateringPackageEventNotes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteCateringPackageEventNotes`: Status
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigApi.DeleteCateringPackageEventNotes`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**notedId** | **string** | Unique Catering Package Event Notes ID | 
**eventId** | **string** | Unique Catering Package Event ID | 
**hotelId** | **string** | Unique OPERA Hotel ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteCateringPackageEventNotesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **pkgEventIdExtension** | **int32** | Additional identifying value assigned by the creating system. | 
 **pkgEventIdContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **pkgEventIdType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **noteIdExtension** | **int32** | Additional identifying value assigned by the creating system. | 
 **noteIdContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **noteIdType** | **string** | A reference to the type of object defined by the UniqueID element. | 
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


## DeleteCateringPackageEvents

> Status DeleteCateringPackageEvents(ctx, packageEventsId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).PkgEventIdExtension(pkgEventIdExtension).PkgEventIdContext(pkgEventIdContext).PkgEventIdType(pkgEventIdType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete catering package events



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/evmcfg"
)

func main() {
    packageEventsId := "packageEventsId_example" // string | Unique Package Events ID
    hotelId := "hotelId_example" // string | Unique OPERA Hotel ID
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    pkgEventIdExtension := int32(56) // int32 | Additional identifying value assigned by the creating system. (optional)
    pkgEventIdContext := "pkgEventIdContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    pkgEventIdType := "pkgEventIdType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ResourceConfigApi.DeleteCateringPackageEvents(context.Background(), packageEventsId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).PkgEventIdExtension(pkgEventIdExtension).PkgEventIdContext(pkgEventIdContext).PkgEventIdType(pkgEventIdType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigApi.DeleteCateringPackageEvents``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteCateringPackageEvents`: Status
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigApi.DeleteCateringPackageEvents`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**packageEventsId** | **string** | Unique Package Events ID | 
**hotelId** | **string** | Unique OPERA Hotel ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteCateringPackageEventsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **pkgEventIdExtension** | **int32** | Additional identifying value assigned by the creating system. | 
 **pkgEventIdContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **pkgEventIdType** | **string** | A reference to the type of object defined by the UniqueID element. | 
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


## DeleteCateringPackagePrices

> Status DeleteCateringPackagePrices(ctx, pricesId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).PackagPriceIdExtension(packagPriceIdExtension).PackagPriceIdContext(packagPriceIdContext).PackagPriceIdType(packagPriceIdType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete Catering package prices



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/evmcfg"
)

func main() {
    pricesId := "pricesId_example" // string | Unique Catering Package Prices ID
    hotelId := "hotelId_example" // string | Unique OPERA Hotel ID
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    packagPriceIdExtension := int32(56) // int32 | Additional identifying value assigned by the creating system. (optional)
    packagPriceIdContext := "packagPriceIdContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    packagPriceIdType := "packagPriceIdType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ResourceConfigApi.DeleteCateringPackagePrices(context.Background(), pricesId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).PackagPriceIdExtension(packagPriceIdExtension).PackagPriceIdContext(packagPriceIdContext).PackagPriceIdType(packagPriceIdType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigApi.DeleteCateringPackagePrices``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteCateringPackagePrices`: Status
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigApi.DeleteCateringPackagePrices`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**pricesId** | **string** | Unique Catering Package Prices ID | 
**hotelId** | **string** | Unique OPERA Hotel ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteCateringPackagePricesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **packagPriceIdExtension** | **int32** | Additional identifying value assigned by the creating system. | 
 **packagPriceIdContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **packagPriceIdType** | **string** | A reference to the type of object defined by the UniqueID element. | 
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


## DeleteCateringPackageResourceNotes

> Status DeleteCateringPackageResourceNotes(ctx, notesId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete catering package resource notes



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/evmcfg"
)

func main() {
    notesId := "notesId_example" // string | Unique Catering Package Resource Notes ID
    hotelId := "hotelId_example" // string | Unique OPERA Hotel ID
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ResourceConfigApi.DeleteCateringPackageResourceNotes(context.Background(), notesId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigApi.DeleteCateringPackageResourceNotes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteCateringPackageResourceNotes`: Status
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigApi.DeleteCateringPackageResourceNotes`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**notesId** | **string** | Unique Catering Package Resource Notes ID | 
**hotelId** | **string** | Unique OPERA Hotel ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteCateringPackageResourceNotesRequest struct via the builder pattern


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


## DeleteCateringPackageResources

> Status DeleteCateringPackageResources(ctx).HotelId(hotelId).PkgEventId(pkgEventId).PkgEventIdType(pkgEventIdType).ResourceId(resourceId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).PkgEventIdExtension(pkgEventIdExtension).PkgEventIdContext(pkgEventIdContext).PkgEventType(pkgEventType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete catering package resources



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/evmcfg"
)

func main() {
    hotelId := []string{"Inner_example"} // []string | The Hotel code which the Catering Package Event belongs to.
    pkgEventId := []string{"Inner_example"} // []string | Unique Packages Event ID
    pkgEventIdType := []string{"Inner_example"} // []string | Unique Packages Event Type
    resourceId := []string{"Inner_example"} // []string | Unique Resources ID
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    pkgEventIdExtension := int32(56) // int32 | Additional identifying value assigned by the creating system. (optional)
    pkgEventIdContext := "pkgEventIdContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    pkgEventType := []string{"Inner_example"} // []string | A reference to the type of object defined by the UniqueID element. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ResourceConfigApi.DeleteCateringPackageResources(context.Background()).HotelId(hotelId).PkgEventId(pkgEventId).PkgEventIdType(pkgEventIdType).ResourceId(resourceId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).PkgEventIdExtension(pkgEventIdExtension).PkgEventIdContext(pkgEventIdContext).PkgEventType(pkgEventType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigApi.DeleteCateringPackageResources``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteCateringPackageResources`: Status
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigApi.DeleteCateringPackageResources`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDeleteCateringPackageResourcesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hotelId** | **[]string** | The Hotel code which the Catering Package Event belongs to. | 
 **pkgEventId** | **[]string** | Unique Packages Event ID | 
 **pkgEventIdType** | **[]string** | Unique Packages Event Type | 
 **resourceId** | **[]string** | Unique Resources ID | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **pkgEventIdExtension** | **int32** | Additional identifying value assigned by the creating system. | 
 **pkgEventIdContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **pkgEventType** | **[]string** | A reference to the type of object defined by the UniqueID element. | 
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


## DeleteCateringPackageRevenues

> Status DeleteCateringPackageRevenues(ctx, priceId, revenueType, eventsId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).PackagePriceIdExtension(packagePriceIdExtension).PackagePriceIdContext(packagePriceIdContext).PackagePriceIdType(packagePriceIdType).EventIdExtension(eventIdExtension).EventIdContext(eventIdContext).EventIdType(eventIdType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete catering package revenues



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/evmcfg"
)

func main() {
    priceId := "priceId_example" // string | Unique Catering Packages Revenue Price ID
    revenueType := "revenueType_example" // string | Unique Catering Packages Revenue Type
    eventsId := "eventsId_example" // string | Unique Catering Packages Revenue Event ID
    hotelId := "hotelId_example" // string | Unique OPERA Hotel ID
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    packagePriceIdExtension := int32(56) // int32 | Additional identifying value assigned by the creating system. (optional)
    packagePriceIdContext := "packagePriceIdContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    packagePriceIdType := "packagePriceIdType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    eventIdExtension := int32(56) // int32 | Additional identifying value assigned by the creating system. (optional)
    eventIdContext := "eventIdContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    eventIdType := "eventIdType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ResourceConfigApi.DeleteCateringPackageRevenues(context.Background(), priceId, revenueType, eventsId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).PackagePriceIdExtension(packagePriceIdExtension).PackagePriceIdContext(packagePriceIdContext).PackagePriceIdType(packagePriceIdType).EventIdExtension(eventIdExtension).EventIdContext(eventIdContext).EventIdType(eventIdType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigApi.DeleteCateringPackageRevenues``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteCateringPackageRevenues`: Status
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigApi.DeleteCateringPackageRevenues`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**priceId** | **string** | Unique Catering Packages Revenue Price ID | 
**revenueType** | **string** | Unique Catering Packages Revenue Type | 
**eventsId** | **string** | Unique Catering Packages Revenue Event ID | 
**hotelId** | **string** | Unique OPERA Hotel ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteCateringPackageRevenuesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------




 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **packagePriceIdExtension** | **int32** | Additional identifying value assigned by the creating system. | 
 **packagePriceIdContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **packagePriceIdType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **eventIdExtension** | **int32** | Additional identifying value assigned by the creating system. | 
 **eventIdContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **eventIdType** | **string** | A reference to the type of object defined by the UniqueID element. | 
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

> Status DeleteCateringPackages(ctx, cateringPackageId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete catering packages



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/evmcfg"
)

func main() {
    cateringPackageId := "cateringPackageId_example" // string | Unique Package Id
    hotelId := "hotelId_example" // string | Unique Hotel Code
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ResourceConfigApi.DeleteCateringPackages(context.Background(), cateringPackageId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigApi.DeleteCateringPackages``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteCateringPackages`: Status
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigApi.DeleteCateringPackages`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**cateringPackageId** | **string** | Unique Package Id | 
**hotelId** | **string** | Unique Hotel Code | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteCateringPackagesRequest struct via the builder pattern


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


## DeleteEventForecasts

> Status DeleteEventForecasts(ctx, eventTypesCode, forecastsId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ForecastIdExtension(forecastIdExtension).ForecastIdContext(forecastIdContext).ForecastIdType(forecastIdType).HotelId(hotelId).RevenueTypeCode(revenueTypeCode).RevenueTypeDescription(revenueTypeDescription).Amount(amount).CurrencyCode(currencyCode).AmountType(amountType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete event forecasts



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/evmcfg"
)

func main() {
    eventTypesCode := "eventTypesCode_example" // string | Unique Event Type Code
    forecastsId := "forecastsId_example" // string | Unique Forecast Id
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    forecastIdExtension := int32(56) // int32 | Additional identifying value assigned by the creating system. (optional)
    forecastIdContext := "forecastIdContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    forecastIdType := "forecastIdType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    hotelId := []string{"Inner_example"} // []string | Hotel Code to which the Event Forecast belongs to. (optional)
    revenueTypeCode := "revenueTypeCode_example" // string | Code. (optional)
    revenueTypeDescription := "revenueTypeDescription_example" // string | description. (optional)
    amount := float32(8.14) // float32 | A monetary amount. (optional)
    currencyCode := "currencyCode_example" // string | Provides a currency code to reflect the currency in which an amount may be expressed. (optional)
    amountType := []string{"AmountType_example"} // []string | Defines values for Amount Type of an event forecast revenue. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ResourceConfigApi.DeleteEventForecasts(context.Background(), eventTypesCode, forecastsId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ForecastIdExtension(forecastIdExtension).ForecastIdContext(forecastIdContext).ForecastIdType(forecastIdType).HotelId(hotelId).RevenueTypeCode(revenueTypeCode).RevenueTypeDescription(revenueTypeDescription).Amount(amount).CurrencyCode(currencyCode).AmountType(amountType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigApi.DeleteEventForecasts``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteEventForecasts`: Status
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigApi.DeleteEventForecasts`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**eventTypesCode** | **string** | Unique Event Type Code | 
**forecastsId** | **string** | Unique Forecast Id | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteEventForecastsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **forecastIdExtension** | **int32** | Additional identifying value assigned by the creating system. | 
 **forecastIdContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **forecastIdType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **hotelId** | **[]string** | Hotel Code to which the Event Forecast belongs to. | 
 **revenueTypeCode** | **string** | Code. | 
 **revenueTypeDescription** | **string** | description. | 
 **amount** | **float32** | A monetary amount. | 
 **currencyCode** | **string** | Provides a currency code to reflect the currency in which an amount may be expressed. | 
 **amountType** | **[]string** | Defines values for Amount Type of an event forecast revenue. | 
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


## DeleteInventoryItemTemplates

> Status DeleteInventoryItemTemplates(ctx, inventoryItemId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).InventoryItemTemplatesIdExtension(inventoryItemTemplatesIdExtension).InventoryItemTemplatesContext(inventoryItemTemplatesContext).InventoryItemTemplatesType(inventoryItemTemplatesType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete Item Inventory templates



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/evmcfg"
)

func main() {
    inventoryItemId := "inventoryItemId_example" // string | Unique Inventory Item Template code
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    inventoryItemTemplatesIdExtension := []int32{int32(123)} // []int32 | Additional identifying value assigned by the creating system. (optional)
    inventoryItemTemplatesContext := []string{"Inner_example"} // []string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    inventoryItemTemplatesType := []string{"Inner_example"} // []string | A reference to the type of object defined by the UniqueID element. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ResourceConfigApi.DeleteInventoryItemTemplates(context.Background(), inventoryItemId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).InventoryItemTemplatesIdExtension(inventoryItemTemplatesIdExtension).InventoryItemTemplatesContext(inventoryItemTemplatesContext).InventoryItemTemplatesType(inventoryItemTemplatesType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigApi.DeleteInventoryItemTemplates``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteInventoryItemTemplates`: Status
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigApi.DeleteInventoryItemTemplates`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**inventoryItemId** | **string** | Unique Inventory Item Template code | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteInventoryItemTemplatesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **inventoryItemTemplatesIdExtension** | **[]int32** | Additional identifying value assigned by the creating system. | 
 **inventoryItemTemplatesContext** | **[]string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **inventoryItemTemplatesType** | **[]string** | A reference to the type of object defined by the UniqueID element. | 
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


## DeleteInventoryItems

> Status DeleteInventoryItems(ctx, inventoryItemId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ItemIDExtension(itemIDExtension).IdContext(idContext).ItemIDType(itemIDType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete Item Inventory



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/evmcfg"
)

func main() {
    inventoryItemId := "inventoryItemId_example" // string | Unique Inventory Item Id
    hotelId := "hotelId_example" // string | Unique OPERA Hotel code
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    itemIDExtension := int32(56) // int32 | Additional identifying value assigned by the creating system. (optional)
    idContext := "idContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    itemIDType := "itemIDType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ResourceConfigApi.DeleteInventoryItems(context.Background(), inventoryItemId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ItemIDExtension(itemIDExtension).IdContext(idContext).ItemIDType(itemIDType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigApi.DeleteInventoryItems``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteInventoryItems`: Status
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigApi.DeleteInventoryItems`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**inventoryItemId** | **string** | Unique Inventory Item Id | 
**hotelId** | **string** | Unique OPERA Hotel code | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteInventoryItemsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **itemIDExtension** | **int32** | Additional identifying value assigned by the creating system. | 
 **idContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **itemIDType** | **string** | A reference to the type of object defined by the UniqueID element. | 
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


## DeleteItemClasses

> Status DeleteItemClasses(ctx, itemClassesCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete Item classes



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/evmcfg"
)

func main() {
    itemClassesCode := "itemClassesCode_example" // string | Unique Item Class Code
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ResourceConfigApi.DeleteItemClasses(context.Background(), itemClassesCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigApi.DeleteItemClasses``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteItemClasses`: Status
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigApi.DeleteItemClasses`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**itemClassesCode** | **string** | Unique Item Class Code | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteItemClassesRequest struct via the builder pattern


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


## DeleteItemPools

> Status DeleteItemPools(ctx, itemPoolsCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete Item Pools



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/evmcfg"
)

func main() {
    itemPoolsCode := "itemPoolsCode_example" // string | Unique Item Pool code
    hotelId := "hotelId_example" // string | Unique OPERA Hotel code
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ResourceConfigApi.DeleteItemPools(context.Background(), itemPoolsCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigApi.DeleteItemPools``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteItemPools`: Status
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigApi.DeleteItemPools`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**itemPoolsCode** | **string** | Unique Item Pool code | 
**hotelId** | **string** | Unique OPERA Hotel code | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteItemPoolsRequest struct via the builder pattern


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


## DeleteRevenueGroups

> Status DeleteRevenueGroups(ctx, revenueGroupsCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete Catering Revenue Groups



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/evmcfg"
)

func main() {
    revenueGroupsCode := "revenueGroupsCode_example" // string | Unique Revenue Group Code
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ResourceConfigApi.DeleteRevenueGroups(context.Background(), revenueGroupsCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigApi.DeleteRevenueGroups``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteRevenueGroups`: Status
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigApi.DeleteRevenueGroups`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**revenueGroupsCode** | **string** | Unique Revenue Group Code | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteRevenueGroupsRequest struct via the builder pattern


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


## GetCateringContainers

> CateringContainersInfo GetCateringContainers(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FetchInactive(fetchInactive).Codes(codes).WildCard(wildCard).Description(description).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get catering containers



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/evmcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    fetchInactive := true // bool | Determines wether to fetch inactive records or not. (optional)
    codes := []string{"Inner_example"} // []string | Codes to be searched. (optional)
    wildCard := "wildCard_example" // string | Wildcard search on the code. (optional)
    description := "description_example" // string | Description of the code. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ResourceConfigApi.GetCateringContainers(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FetchInactive(fetchInactive).Codes(codes).WildCard(wildCard).Description(description).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigApi.GetCateringContainers``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetCateringContainers`: CateringContainersInfo
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigApi.GetCateringContainers`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetCateringContainersRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **fetchInactive** | **bool** | Determines wether to fetch inactive records or not. | 
 **codes** | **[]string** | Codes to be searched. | 
 **wildCard** | **string** | Wildcard search on the code. | 
 **description** | **string** | Description of the code. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**CateringContainersInfo**](CateringContainersInfo.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetCateringItemRates

> CateringItemRatesInfo GetCateringItemRates(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FetchInactive(fetchInactive).Codes(codes).WildCard(wildCard).Description(description).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get catering item rates



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/evmcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    fetchInactive := true // bool | Determines wether to fetch inactive records or not. (optional)
    codes := []string{"Inner_example"} // []string | Codes to be searched. (optional)
    wildCard := "wildCard_example" // string | Wildcard search on the code. (optional)
    description := "description_example" // string | Description of the code. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ResourceConfigApi.GetCateringItemRates(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FetchInactive(fetchInactive).Codes(codes).WildCard(wildCard).Description(description).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigApi.GetCateringItemRates``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetCateringItemRates`: CateringItemRatesInfo
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigApi.GetCateringItemRates`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetCateringItemRatesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **fetchInactive** | **bool** | Determines wether to fetch inactive records or not. | 
 **codes** | **[]string** | Codes to be searched. | 
 **wildCard** | **string** | Wildcard search on the code. | 
 **description** | **string** | Description of the code. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**CateringItemRatesInfo**](CateringItemRatesInfo.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetCateringMenu

> CateringMenusInfo GetCateringMenu(ctx, cateringMenuId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Inactive(inactive).FetchInstructions(fetchInstructions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get menu



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/evmcfg"
)

func main() {
    cateringMenuId := "cateringMenuId_example" // string | Unique ID of Catering Menu
    hotelId := "hotelId_example" // string | Unique OPERA Hotel ID
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    inactive := true // bool | If true, only Composed Menu's marked as Inactive in Menu Configuration will be returned. (optional)
    fetchInstructions := []string{"FetchInstructions_example"} // []string | Fetch instructions that can be used in Catering Menus maintenance. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ResourceConfigApi.GetCateringMenu(context.Background(), cateringMenuId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Inactive(inactive).FetchInstructions(fetchInstructions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigApi.GetCateringMenu``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetCateringMenu`: CateringMenusInfo
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigApi.GetCateringMenu`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**cateringMenuId** | **string** | Unique ID of Catering Menu | 
**hotelId** | **string** | Unique OPERA Hotel ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetCateringMenuRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **inactive** | **bool** | If true, only Composed Menu&#39;s marked as Inactive in Menu Configuration will be returned. | 
 **fetchInstructions** | **[]string** | Fetch instructions that can be used in Catering Menus maintenance. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**CateringMenusInfo**](CateringMenusInfo.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetCateringMenuClasses

> CateringMenuClassesInfo GetCateringMenuClasses(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).ClassName(className).WebBookable(webBookable).IncludeMenus(includeMenus).Inactive(inactive).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get menu classes



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/evmcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Unique OPERA Hotel ID
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    offset := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional) (default to 0)
    className := "className_example" // string | The name of Menu Class. (optional)
    webBookable := true // bool | If true this boolean will set the criteria to only return Menu Classes configured as Web Bookable. (optional)
    includeMenus := true // bool | If true this boolean will set the criteria to fetch associated menu for the menu classes. (optional)
    inactive := true // bool | If true this boolean will set the criteria to only return Menu Classes configured as Inactive. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ResourceConfigApi.GetCateringMenuClasses(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).ClassName(className).WebBookable(webBookable).IncludeMenus(includeMenus).Inactive(inactive).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigApi.GetCateringMenuClasses``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetCateringMenuClasses`: CateringMenuClassesInfo
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigApi.GetCateringMenuClasses`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique OPERA Hotel ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetCateringMenuClassesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **offset** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [default to 0]
 **className** | **string** | The name of Menu Class. | 
 **webBookable** | **bool** | If true this boolean will set the criteria to only return Menu Classes configured as Web Bookable. | 
 **includeMenus** | **bool** | If true this boolean will set the criteria to fetch associated menu for the menu classes. | 
 **inactive** | **bool** | If true this boolean will set the criteria to only return Menu Classes configured as Inactive. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**CateringMenuClassesInfo**](CateringMenuClassesInfo.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetCateringMenuItemClasses

> CateringMenuItemClassesInfo GetCateringMenuItemClasses(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).ClassName(className).MenuTypes(menuTypes).WebBookable(webBookable).IncludeMenuItems(includeMenuItems).Inactive(inactive).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get menu item classes



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/evmcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Unique OPERA Hotel Id
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    offset := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional) (default to 0)
    className := "className_example" // string | Menu Item class name search filter. (optional)
    menuTypes := []string{"MenuTypes_example"} // []string | Defines values for Menu Type (optional)
    webBookable := true // bool | Indicates if web bookable. (optional)
    includeMenuItems := true // bool | MenuItemClassInfo MenuItemInfo values can be passed as per requirement (optional) (default to true)
    inactive := true // bool | If true this boolean will set the criteria to only return Menu Item Classes configured as Inactive. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ResourceConfigApi.GetCateringMenuItemClasses(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).ClassName(className).MenuTypes(menuTypes).WebBookable(webBookable).IncludeMenuItems(includeMenuItems).Inactive(inactive).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigApi.GetCateringMenuItemClasses``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetCateringMenuItemClasses`: CateringMenuItemClassesInfo
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigApi.GetCateringMenuItemClasses`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique OPERA Hotel Id | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetCateringMenuItemClassesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **offset** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [default to 0]
 **className** | **string** | Menu Item class name search filter. | 
 **menuTypes** | **[]string** | Defines values for Menu Type | 
 **webBookable** | **bool** | Indicates if web bookable. | 
 **includeMenuItems** | **bool** | MenuItemClassInfo MenuItemInfo values can be passed as per requirement | [default to true]
 **inactive** | **bool** | If true this boolean will set the criteria to only return Menu Item Classes configured as Inactive. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**CateringMenuItemClassesInfo**](CateringMenuItemClassesInfo.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetCateringMenuItems

> CateringMenuItemsInfo GetCateringMenuItems(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).Name(name).Codes(codes).QuickInsertCode(quickInsertCode).ListTypeCodes(listTypeCodes).Inactive(inactive).EventTypesCodes(eventTypesCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Menu items



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/evmcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Unique OPERA Hotel Id
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    offset := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional) (default to 0)
    name := "name_example" // string | Menu item name of string lentgth 30 (optional)
    codes := []string{"Inner_example"} // []string |  (optional)
    quickInsertCode := "quickInsertCode_example" // string | Article number of Menu Item in Caps (optional)
    listTypeCodes := []string{"Inner_example"} // []string |  (optional)
    inactive := true // bool | If true this boolean will set the criteria to only return Menu Items configured as Inactive. (optional)
    eventTypesCodes := []string{"Inner_example"} // []string |  (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ResourceConfigApi.GetCateringMenuItems(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).Name(name).Codes(codes).QuickInsertCode(quickInsertCode).ListTypeCodes(listTypeCodes).Inactive(inactive).EventTypesCodes(eventTypesCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigApi.GetCateringMenuItems``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetCateringMenuItems`: CateringMenuItemsInfo
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigApi.GetCateringMenuItems`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique OPERA Hotel Id | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetCateringMenuItemsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **offset** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [default to 0]
 **name** | **string** | Menu item name of string lentgth 30 | 
 **codes** | **[]string** |  | 
 **quickInsertCode** | **string** | Article number of Menu Item in Caps | 
 **listTypeCodes** | **[]string** |  | 
 **inactive** | **bool** | If true this boolean will set the criteria to only return Menu Items configured as Inactive. | 
 **eventTypesCodes** | **[]string** |  | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**CateringMenuItemsInfo**](CateringMenuItemsInfo.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetCateringMenus

> CateringMenusInfo GetCateringMenus(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).MenuId(menuId).IDExtension(iDExtension).IdContext(idContext).MenuIDType(menuIDType).Name(name).ClassNameListCodes(classNameListCodes).EventTypesCodes(eventTypesCodes).MenuTypes(menuTypes).DietaryListCodes(dietaryListCodes).Inactive(inactive).MultiChoice(multiChoice).WebBookable(webBookable).End(end).Start(start).FetchInstructions(fetchInstructions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get menus



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/evmcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Unique OPERA Hotel ID
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    offset := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional) (default to 0)
    menuId := "menuId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    iDExtension := int32(56) // int32 | Additional identifying value assigned by the creating system. (optional)
    idContext := "idContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    menuIDType := "menuIDType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    name := "name_example" // string | This type holds name of Menu Class. (optional)
    classNameListCodes := []string{"Inner_example"} // []string |  (optional)
    eventTypesCodes := []string{"Inner_example"} // []string |  (optional)
    menuTypes := []string{"MenuTypes_example"} // []string | Defines values for Menu Type (optional)
    dietaryListCodes := []string{"Inner_example"} // []string |  (optional)
    inactive := true // bool | If true, only Composed Menu's marked as Inactive in Menu Configuration will be returned. (optional)
    multiChoice := true // bool | When selected Only Composed Menu's noted as Multi Choice in Menu Configuration will be returned. (optional)
    webBookable := true // bool | Check of Menu if it is web bookable (optional)
    end := time.Now() // string | The ending value of the date range. (optional)
    start := time.Now() // string | The starting value of the date range. (optional)
    fetchInstructions := []string{"FetchInstructions_example"} // []string | Fetch instructions that can be used in Catering Menus maintenance. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ResourceConfigApi.GetCateringMenus(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).MenuId(menuId).IDExtension(iDExtension).IdContext(idContext).MenuIDType(menuIDType).Name(name).ClassNameListCodes(classNameListCodes).EventTypesCodes(eventTypesCodes).MenuTypes(menuTypes).DietaryListCodes(dietaryListCodes).Inactive(inactive).MultiChoice(multiChoice).WebBookable(webBookable).End(end).Start(start).FetchInstructions(fetchInstructions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigApi.GetCateringMenus``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetCateringMenus`: CateringMenusInfo
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigApi.GetCateringMenus`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique OPERA Hotel ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetCateringMenusRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **offset** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [default to 0]
 **menuId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **iDExtension** | **int32** | Additional identifying value assigned by the creating system. | 
 **idContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **menuIDType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **name** | **string** | This type holds name of Menu Class. | 
 **classNameListCodes** | **[]string** |  | 
 **eventTypesCodes** | **[]string** |  | 
 **menuTypes** | **[]string** | Defines values for Menu Type | 
 **dietaryListCodes** | **[]string** |  | 
 **inactive** | **bool** | If true, only Composed Menu&#39;s marked as Inactive in Menu Configuration will be returned. | 
 **multiChoice** | **bool** | When selected Only Composed Menu&#39;s noted as Multi Choice in Menu Configuration will be returned. | 
 **webBookable** | **bool** | Check of Menu if it is web bookable | 
 **end** | **string** | The ending value of the date range. | 
 **start** | **string** | The starting value of the date range. | 
 **fetchInstructions** | **[]string** | Fetch instructions that can be used in Catering Menus maintenance. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**CateringMenusInfo**](CateringMenusInfo.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetCateringPackage

> CateringPackage GetCateringPackage(ctx, cateringPackageId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).IdExtension(idExtension).IdContext(idContext).PkgIDType(pkgIDType).FetchInstructions(fetchInstructions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get catering package



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/evmcfg"
)

func main() {
    cateringPackageId := "cateringPackageId_example" // string | Unique Catering Package ID
    hotelId := "hotelId_example" // string | Unique OPERA Hotel ID
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    idExtension := int32(56) // int32 | Additional identifying value assigned by the creating system. (optional)
    idContext := "idContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    pkgIDType := "pkgIDType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    fetchInstructions := []string{"FetchInstructions_example"} // []string | Fetch instructions that can be used in Catering Packages maintenance. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ResourceConfigApi.GetCateringPackage(context.Background(), cateringPackageId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).IdExtension(idExtension).IdContext(idContext).PkgIDType(pkgIDType).FetchInstructions(fetchInstructions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigApi.GetCateringPackage``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetCateringPackage`: CateringPackage
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigApi.GetCateringPackage`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**cateringPackageId** | **string** | Unique Catering Package ID | 
**hotelId** | **string** | Unique OPERA Hotel ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetCateringPackageRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **idExtension** | **int32** | Additional identifying value assigned by the creating system. | 
 **idContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **pkgIDType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **fetchInstructions** | **[]string** | Fetch instructions that can be used in Catering Packages maintenance. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**CateringPackage**](CateringPackage.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetCateringPackageByChain

> CateringPackage GetCateringPackageByChain(ctx, cateringPackageId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).IdExtension(idExtension).IdContext(idContext).PkgIDType(pkgIDType).FetchInstructions(fetchInstructions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get catering package by chain



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/evmcfg"
)

func main() {
    cateringPackageId := "cateringPackageId_example" // string | Unique Catering Package ID
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    hotelId := "hotelId_example" // string | Hotel code of Catering Package to be fetched. (optional)
    idExtension := int32(56) // int32 | Additional identifying value assigned by the creating system. (optional)
    idContext := "idContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    pkgIDType := "pkgIDType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    fetchInstructions := []string{"FetchInstructions_example"} // []string | Fetch instructions that can be used in Catering Packages maintenance. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ResourceConfigApi.GetCateringPackageByChain(context.Background(), cateringPackageId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).IdExtension(idExtension).IdContext(idContext).PkgIDType(pkgIDType).FetchInstructions(fetchInstructions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigApi.GetCateringPackageByChain``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetCateringPackageByChain`: CateringPackage
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigApi.GetCateringPackageByChain`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**cateringPackageId** | **string** | Unique Catering Package ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetCateringPackageByChainRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **hotelId** | **string** | Hotel code of Catering Package to be fetched. | 
 **idExtension** | **int32** | Additional identifying value assigned by the creating system. | 
 **idContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **pkgIDType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **fetchInstructions** | **[]string** | Fetch instructions that can be used in Catering Packages maintenance. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**CateringPackage**](CateringPackage.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetCateringPackages

> CateringPackagesInfo GetCateringPackages(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).PackageCode(packageCode).Description(description).Duration(duration).WebBookable(webBookable).PkgTmpltType(pkgTmpltType).MarketCode(marketCode).PriceCode(priceCode).MinAttendees(minAttendees).MaxAttendees(maxAttendees).SellDate(sellDate).StartDateTime(startDateTime).EndDateTime(endDateTime).BookingType(bookingType).FetchInstructions(fetchInstructions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Fetch catering packages for a property.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/evmcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Unique OPERA Hotel ID
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    offset := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional) (default to 0)
    packageCode := []string{"Inner_example"} // []string |  (optional)
    description := "description_example" // string | Revenue Types for which details are to be fetched. (optional)
    duration := int32(56) // int32 | Duration for which the event is scheduled. (optional)
    webBookable := true // bool | Defines if web booking is allowed. (optional)
    pkgTmpltType := "pkgTmpltType_example" // string | It represents Catering Packages and Templates both. (optional)
    marketCode := "marketCode_example" // string | Market Code associated with the price details of the Package. (optional)
    priceCode := "priceCode_example" // string | Price Code for which details are to be fetched. (optional)
    minAttendees := int32(56) // int32 | Minimum Attendees. (optional)
    maxAttendees := int32(56) // int32 | Maximum Attendees. (optional)
    sellDate := time.Now() // string | Selling Date associated with the Price Details. (optional)
    startDateTime := "startDateTime_example" // string |  (optional)
    endDateTime := "endDateTime_example" // string |  (optional)
    bookingType := "bookingType_example" // string | Collection of configured Booking Types for the package property. (optional)
    fetchInstructions := []string{"FetchInstructions_example"} // []string | Fetch instructions that can be used in Catering Packages maintenance. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ResourceConfigApi.GetCateringPackages(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).PackageCode(packageCode).Description(description).Duration(duration).WebBookable(webBookable).PkgTmpltType(pkgTmpltType).MarketCode(marketCode).PriceCode(priceCode).MinAttendees(minAttendees).MaxAttendees(maxAttendees).SellDate(sellDate).StartDateTime(startDateTime).EndDateTime(endDateTime).BookingType(bookingType).FetchInstructions(fetchInstructions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigApi.GetCateringPackages``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetCateringPackages`: CateringPackagesInfo
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigApi.GetCateringPackages`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique OPERA Hotel ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetCateringPackagesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **offset** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [default to 0]
 **packageCode** | **[]string** |  | 
 **description** | **string** | Revenue Types for which details are to be fetched. | 
 **duration** | **int32** | Duration for which the event is scheduled. | 
 **webBookable** | **bool** | Defines if web booking is allowed. | 
 **pkgTmpltType** | **string** | It represents Catering Packages and Templates both. | 
 **marketCode** | **string** | Market Code associated with the price details of the Package. | 
 **priceCode** | **string** | Price Code for which details are to be fetched. | 
 **minAttendees** | **int32** | Minimum Attendees. | 
 **maxAttendees** | **int32** | Maximum Attendees. | 
 **sellDate** | **string** | Selling Date associated with the Price Details. | 
 **startDateTime** | **string** |  | 
 **endDateTime** | **string** |  | 
 **bookingType** | **string** | Collection of configured Booking Types for the package property. | 
 **fetchInstructions** | **[]string** | Fetch instructions that can be used in Catering Packages maintenance. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**CateringPackagesInfo**](CateringPackagesInfo.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetCateringPackagesMultiProperties

> CateringPackagesInfo GetCateringPackagesMultiProperties(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).HotelIds(hotelIds).PackageCode(packageCode).Description(description).Duration(duration).WebBookable(webBookable).PkgTmpltType(pkgTmpltType).MarketCode(marketCode).PriceCode(priceCode).MinAttendees(minAttendees).MaxAttendees(maxAttendees).SellDate(sellDate).StartDateTime(startDateTime).EndDateTime(endDateTime).BookingType(bookingType).FetchInstructions(fetchInstructions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Fetch catering packages



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/evmcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    offset := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional) (default to 0)
    hotelIds := []string{"Inner_example"} // []string |  (optional)
    packageCode := []string{"Inner_example"} // []string |  (optional)
    description := "description_example" // string | Revenue Types for which details are to be fetched. (optional)
    duration := int32(56) // int32 | Duration for which the event is scheduled. (optional)
    webBookable := true // bool | Defines if web booking is allowed. (optional)
    pkgTmpltType := "pkgTmpltType_example" // string | It represents Catering Packages and Templates both. (optional)
    marketCode := "marketCode_example" // string | Market Code associated with the price details of the Package. (optional)
    priceCode := "priceCode_example" // string | Price Code for which details are to be fetched. (optional)
    minAttendees := int32(56) // int32 | Minimum Attendees. (optional)
    maxAttendees := int32(56) // int32 | Maximum Attendees. (optional)
    sellDate := time.Now() // string | Selling Date associated with the Price Details. (optional)
    startDateTime := "startDateTime_example" // string |  (optional)
    endDateTime := "endDateTime_example" // string |  (optional)
    bookingType := "bookingType_example" // string | Collection of configured Booking Types for the package property. (optional)
    fetchInstructions := []string{"FetchInstructions_example"} // []string | Fetch instructions that can be used in Catering Packages maintenance. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ResourceConfigApi.GetCateringPackagesMultiProperties(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).HotelIds(hotelIds).PackageCode(packageCode).Description(description).Duration(duration).WebBookable(webBookable).PkgTmpltType(pkgTmpltType).MarketCode(marketCode).PriceCode(priceCode).MinAttendees(minAttendees).MaxAttendees(maxAttendees).SellDate(sellDate).StartDateTime(startDateTime).EndDateTime(endDateTime).BookingType(bookingType).FetchInstructions(fetchInstructions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigApi.GetCateringPackagesMultiProperties``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetCateringPackagesMultiProperties`: CateringPackagesInfo
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigApi.GetCateringPackagesMultiProperties`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetCateringPackagesMultiPropertiesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **offset** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [default to 0]
 **hotelIds** | **[]string** |  | 
 **packageCode** | **[]string** |  | 
 **description** | **string** | Revenue Types for which details are to be fetched. | 
 **duration** | **int32** | Duration for which the event is scheduled. | 
 **webBookable** | **bool** | Defines if web booking is allowed. | 
 **pkgTmpltType** | **string** | It represents Catering Packages and Templates both. | 
 **marketCode** | **string** | Market Code associated with the price details of the Package. | 
 **priceCode** | **string** | Price Code for which details are to be fetched. | 
 **minAttendees** | **int32** | Minimum Attendees. | 
 **maxAttendees** | **int32** | Maximum Attendees. | 
 **sellDate** | **string** | Selling Date associated with the Price Details. | 
 **startDateTime** | **string** |  | 
 **endDateTime** | **string** |  | 
 **bookingType** | **string** | Collection of configured Booking Types for the package property. | 
 **fetchInstructions** | **[]string** | Fetch instructions that can be used in Catering Packages maintenance. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**CateringPackagesInfo**](CateringPackagesInfo.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetCateringServings

> CateringServingsInfo GetCateringServings(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FetchInactive(fetchInactive).ServingCodes(servingCodes).WildCard(wildCard).Description(description).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get catering servings



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/evmcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    fetchInactive := true // bool | Determines wether to fetch inactive records or not. (optional)
    servingCodes := []string{"Inner_example"} // []string | Codes to be searched. (optional)
    wildCard := "wildCard_example" // string | Wildcard search on the code. (optional)
    description := "description_example" // string | Description of the code. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ResourceConfigApi.GetCateringServings(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FetchInactive(fetchInactive).ServingCodes(servingCodes).WildCard(wildCard).Description(description).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigApi.GetCateringServings``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetCateringServings`: CateringServingsInfo
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigApi.GetCateringServings`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetCateringServingsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **fetchInactive** | **bool** | Determines wether to fetch inactive records or not. | 
 **servingCodes** | **[]string** | Codes to be searched. | 
 **wildCard** | **string** | Wildcard search on the code. | 
 **description** | **string** | Description of the code. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**CateringServingsInfo**](CateringServingsInfo.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetDailyInventoryItems

> DailyInventoryItems GetDailyInventoryItems(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ItemClassCode(itemClassCode).ItemName(itemName).Friday(friday).Monday(monday).Saturday(saturday).Sunday(sunday).Thursday(thursday).Tuesday(tuesday).Wednesday(wednesday).StartDate(startDate).EndDate(endDate).Duration(duration).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Daily Item Inventory



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/evmcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Unique OPERA Hotel code
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    itemClassCode := "itemClassCode_example" // string | Item Class ID which daily item belongs to. (optional)
    itemName := "itemName_example" // string | Item name which daily item belongs to. (optional)
    friday := true // bool |  (optional)
    monday := true // bool |  (optional)
    saturday := true // bool |  (optional)
    sunday := true // bool |  (optional)
    thursday := true // bool |  (optional)
    tuesday := true // bool |  (optional)
    wednesday := true // bool |  (optional)
    startDate := time.Now() // string |  (optional)
    endDate := time.Now() // string |  (optional)
    duration := "duration_example" // string |  (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ResourceConfigApi.GetDailyInventoryItems(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ItemClassCode(itemClassCode).ItemName(itemName).Friday(friday).Monday(monday).Saturday(saturday).Sunday(sunday).Thursday(thursday).Tuesday(tuesday).Wednesday(wednesday).StartDate(startDate).EndDate(endDate).Duration(duration).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigApi.GetDailyInventoryItems``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetDailyInventoryItems`: DailyInventoryItems
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigApi.GetDailyInventoryItems`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique OPERA Hotel code | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetDailyInventoryItemsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **itemClassCode** | **string** | Item Class ID which daily item belongs to. | 
 **itemName** | **string** | Item name which daily item belongs to. | 
 **friday** | **bool** |  | 
 **monday** | **bool** |  | 
 **saturday** | **bool** |  | 
 **sunday** | **bool** |  | 
 **thursday** | **bool** |  | 
 **tuesday** | **bool** |  | 
 **wednesday** | **bool** |  | 
 **startDate** | **string** |  | 
 **endDate** | **string** |  | 
 **duration** | **string** |  | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**DailyInventoryItems**](DailyInventoryItems.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetEventForecasts

> EventForecastsInfo GetEventForecasts(ctx, hotelId).FetchInstructions(fetchInstructions).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).EventTypeCodes(eventTypeCodes).EventTypeWildCard(eventTypeWildCard).RevenueTypeCodes(revenueTypeCodes).RevenueTypeWildCard(revenueTypeWildCard).EventDate(eventDate).BlockTypeCodes(blockTypeCodes).MarketCodes(marketCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Event Forecasts



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/evmcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Unique OPERA Hotel ID
    fetchInstructions := []string{"FetchInstructions_example"} // []string | Fetch instructions that can be used in event forecast maintenance.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    offset := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional) (default to 0)
    eventTypeCodes := []string{"Inner_example"} // []string | Codes to be searched. (optional)
    eventTypeWildCard := "eventTypeWildCard_example" // string | Wildcard search on the code. (optional)
    revenueTypeCodes := []string{"Inner_example"} // []string | Codes to be searched. (optional)
    revenueTypeWildCard := "revenueTypeWildCard_example" // string | Wildcard search on the code. (optional)
    eventDate := time.Now() // string | Date for which the event is scheduled. (optional)
    blockTypeCodes := []string{"Inner_example"} // []string |  (optional)
    marketCodes := []string{"Inner_example"} // []string |  (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ResourceConfigApi.GetEventForecasts(context.Background(), hotelId).FetchInstructions(fetchInstructions).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).EventTypeCodes(eventTypeCodes).EventTypeWildCard(eventTypeWildCard).RevenueTypeCodes(revenueTypeCodes).RevenueTypeWildCard(revenueTypeWildCard).EventDate(eventDate).BlockTypeCodes(blockTypeCodes).MarketCodes(marketCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigApi.GetEventForecasts``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetEventForecasts`: EventForecastsInfo
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigApi.GetEventForecasts`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique OPERA Hotel ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetEventForecastsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **fetchInstructions** | **[]string** | Fetch instructions that can be used in event forecast maintenance. | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **offset** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [default to 0]
 **eventTypeCodes** | **[]string** | Codes to be searched. | 
 **eventTypeWildCard** | **string** | Wildcard search on the code. | 
 **revenueTypeCodes** | **[]string** | Codes to be searched. | 
 **revenueTypeWildCard** | **string** | Wildcard search on the code. | 
 **eventDate** | **string** | Date for which the event is scheduled. | 
 **blockTypeCodes** | **[]string** |  | 
 **marketCodes** | **[]string** |  | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**EventForecastsInfo**](EventForecastsInfo.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetInventoryItemTemplates

> InventoryItemTemplates GetInventoryItemTemplates(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).InventoryItemTemplateName(inventoryItemTemplateName).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Item Inventory templates



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/evmcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    hotelId := "hotelId_example" // string | Specifies the hotel code to be searched. (optional)
    inventoryItemTemplateName := "inventoryItemTemplateName_example" // string | Wildcard search for the inventory item template. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ResourceConfigApi.GetInventoryItemTemplates(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).InventoryItemTemplateName(inventoryItemTemplateName).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigApi.GetInventoryItemTemplates``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetInventoryItemTemplates`: InventoryItemTemplates
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigApi.GetInventoryItemTemplates`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetInventoryItemTemplatesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **hotelId** | **string** | Specifies the hotel code to be searched. | 
 **inventoryItemTemplateName** | **string** | Wildcard search for the inventory item template. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**InventoryItemTemplates**](InventoryItemTemplates.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetInventoryItems

> InventoryItems GetInventoryItems(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ItemClassCode(itemClassCode).ItemName(itemName).ItemCode(itemCode).EventTypecodes(eventTypecodes).UsedForEvents(usedForEvents).IncludeItemsFromTemplates(includeItemsFromTemplates).StartDateTime(startDateTime).EndDateTime(endDateTime).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Item Inventory



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/evmcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Unique OPERA Hotel code
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    itemClassCode := "itemClassCode_example" // string | The Item Class ID which the item belongs to. (optional)
    itemName := "itemName_example" // string | The name of Inventory Item. (optional)
    itemCode := "itemCode_example" // string | The code of Inventory Item, also known as Quick Insert. (optional)
    eventTypecodes := []string{"Inner_example"} // []string |  (optional)
    usedForEvents := true // bool | Flag to indicate whether the item is used for events. (optional)
    includeItemsFromTemplates := true // bool | Indicates whether to include Items from Templates or not. (optional)
    startDateTime := "startDateTime_example" // string |  (optional)
    endDateTime := "endDateTime_example" // string |  (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ResourceConfigApi.GetInventoryItems(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ItemClassCode(itemClassCode).ItemName(itemName).ItemCode(itemCode).EventTypecodes(eventTypecodes).UsedForEvents(usedForEvents).IncludeItemsFromTemplates(includeItemsFromTemplates).StartDateTime(startDateTime).EndDateTime(endDateTime).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigApi.GetInventoryItems``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetInventoryItems`: InventoryItems
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigApi.GetInventoryItems`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique OPERA Hotel code | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetInventoryItemsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **itemClassCode** | **string** | The Item Class ID which the item belongs to. | 
 **itemName** | **string** | The name of Inventory Item. | 
 **itemCode** | **string** | The code of Inventory Item, also known as Quick Insert. | 
 **eventTypecodes** | **[]string** |  | 
 **usedForEvents** | **bool** | Flag to indicate whether the item is used for events. | 
 **includeItemsFromTemplates** | **bool** | Indicates whether to include Items from Templates or not. | 
 **startDateTime** | **string** |  | 
 **endDateTime** | **string** |  | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**InventoryItems**](InventoryItems.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetItemClasses

> ItemClassesInfo GetItemClasses(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).ItemClassesCode(itemClassesCode).WildCard(wildCard).Criteria(criteria).ClassId(classId).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get item classes



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/evmcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    hotelId := []string{"Inner_example"} // []string |  (optional)
    itemClassesCode := []string{"Inner_example"} // []string | Codes to be searched. (optional)
    wildCard := "wildCard_example" // string | Wildcard search on the code. (optional)
    criteria := "reservation" // string | Defines values for Item Class Type. (optional)
    classId := float32(8.14) // float32 |  (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ResourceConfigApi.GetItemClasses(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).ItemClassesCode(itemClassesCode).WildCard(wildCard).Criteria(criteria).ClassId(classId).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigApi.GetItemClasses``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetItemClasses`: ItemClassesInfo
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigApi.GetItemClasses`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetItemClassesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **hotelId** | **[]string** |  | 
 **itemClassesCode** | **[]string** | Codes to be searched. | 
 **wildCard** | **string** | Wildcard search on the code. | 
 **criteria** | **string** | Defines values for Item Class Type. | 
 **classId** | **float32** |  | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ItemClassesInfo**](ItemClassesInfo.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetItemPools

> ItemPoolsInfo GetItemPools(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelIds(hotelIds).ItemClasseCodes(itemClasseCodes).WildCard(wildCard).ItemPoolCodes(itemPoolCodes).ItemPoolsWildCard(itemPoolsWildCard).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Item Pools



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/evmcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Unique OPERA Hotel code
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    hotelIds := []string{"Inner_example"} // []string | Hotel code. (optional)
    itemClasseCodes := []string{"Inner_example"} // []string | Codes to be searched. (optional)
    wildCard := "wildCard_example" // string | Wildcard search on the code. (optional)
    itemPoolCodes := []string{"Inner_example"} // []string | Codes to be searched. (optional)
    itemPoolsWildCard := "itemPoolsWildCard_example" // string | Wildcard search on the code. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ResourceConfigApi.GetItemPools(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelIds(hotelIds).ItemClasseCodes(itemClasseCodes).WildCard(wildCard).ItemPoolCodes(itemPoolCodes).ItemPoolsWildCard(itemPoolsWildCard).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigApi.GetItemPools``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetItemPools`: ItemPoolsInfo
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigApi.GetItemPools`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique OPERA Hotel code | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetItemPoolsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **hotelIds** | **[]string** | Hotel code. | 
 **itemClasseCodes** | **[]string** | Codes to be searched. | 
 **wildCard** | **string** | Wildcard search on the code. | 
 **itemPoolCodes** | **[]string** | Codes to be searched. | 
 **itemPoolsWildCard** | **string** | Wildcard search on the code. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ItemPoolsInfo**](ItemPoolsInfo.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetRevenueGroups

> RevenueGroupsInfo GetRevenueGroups(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FetchInactive(fetchInactive).RevenueGroupCodes(revenueGroupCodes).WildCard(wildCard).Description(description).IncludeRevenueType(includeRevenueType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Catering Revenue Groups



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/evmcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    fetchInactive := true // bool | Determines wether to fetch inactive records or not. (optional)
    revenueGroupCodes := []string{"Inner_example"} // []string | Codes to be searched. (optional)
    wildCard := "wildCard_example" // string | Wildcard search on the code. (optional)
    description := "description_example" // string | Description of the code. (optional)
    includeRevenueType := true // bool | Boolean flag to fetch revenue groups with/without revenue types. 'True' indicates including revenue types information for corresponding revenue groups. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ResourceConfigApi.GetRevenueGroups(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FetchInactive(fetchInactive).RevenueGroupCodes(revenueGroupCodes).WildCard(wildCard).Description(description).IncludeRevenueType(includeRevenueType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigApi.GetRevenueGroups``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetRevenueGroups`: RevenueGroupsInfo
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigApi.GetRevenueGroups`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetRevenueGroupsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **fetchInactive** | **bool** | Determines wether to fetch inactive records or not. | 
 **revenueGroupCodes** | **[]string** | Codes to be searched. | 
 **wildCard** | **string** | Wildcard search on the code. | 
 **description** | **string** | Description of the code. | 
 **includeRevenueType** | **bool** | Boolean flag to fetch revenue groups with/without revenue types. &#39;True&#39; indicates including revenue types information for corresponding revenue groups. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**RevenueGroupsInfo**](RevenueGroupsInfo.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetRevenueTypes

> RevenueTypesInfo GetRevenueTypes(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RevenueGroupCodes(revenueGroupCodes).RevenueGroupWildCard(revenueGroupWildCard).RevenueTypeCodes(revenueTypeCodes).RevenueTypeWildCard(revenueTypeWildCard).IncludeInactive(includeInactive).IncludeRevenueTypeDetail(includeRevenueTypeDetail).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Catering Revenue Types



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/evmcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    revenueGroupCodes := []string{"Inner_example"} // []string | Codes to be searched. (optional)
    revenueGroupWildCard := "revenueGroupWildCard_example" // string | Wildcard search on the code. (optional)
    revenueTypeCodes := []string{"Inner_example"} // []string | Codes to be searched. (optional)
    revenueTypeWildCard := "revenueTypeWildCard_example" // string | Wildcard search on the code. (optional)
    includeInactive := true // bool | If true this boolean will set the criteria to only return Inactive records. (optional)
    includeRevenueTypeDetail := true // bool | Boolean flag to fetch revenue groups/types with/without associated revenue types/revenue type details. 'True' indicates including revenue types/revenue type details information for corresponding revenue groups/revenue types. (Revenue Type is assoicated to Revenue groups and Revenue Type details are assoicated to Revenue Types) (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ResourceConfigApi.GetRevenueTypes(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RevenueGroupCodes(revenueGroupCodes).RevenueGroupWildCard(revenueGroupWildCard).RevenueTypeCodes(revenueTypeCodes).RevenueTypeWildCard(revenueTypeWildCard).IncludeInactive(includeInactive).IncludeRevenueTypeDetail(includeRevenueTypeDetail).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigApi.GetRevenueTypes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetRevenueTypes`: RevenueTypesInfo
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigApi.GetRevenueTypes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetRevenueTypesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **revenueGroupCodes** | **[]string** | Codes to be searched. | 
 **revenueGroupWildCard** | **string** | Wildcard search on the code. | 
 **revenueTypeCodes** | **[]string** | Codes to be searched. | 
 **revenueTypeWildCard** | **string** | Wildcard search on the code. | 
 **includeInactive** | **bool** | If true this boolean will set the criteria to only return Inactive records. | 
 **includeRevenueTypeDetail** | **bool** | Boolean flag to fetch revenue groups/types with/without associated revenue types/revenue type details. &#39;True&#39; indicates including revenue types/revenue type details information for corresponding revenue groups/revenue types. (Revenue Type is assoicated to Revenue groups and Revenue Type details are assoicated to Revenue Types) | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**RevenueTypesInfo**](RevenueTypesInfo.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostCateringContainers

> Status PostCateringContainers(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CateringContainers(cateringContainers).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create catering containers



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/evmcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    cateringContainers := *openapiclient.NewPostCateringContainersRequest() // PostCateringContainersRequest | Request object which holds new Catering Code Containers.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ResourceConfigApi.PostCateringContainers(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CateringContainers(cateringContainers).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigApi.PostCateringContainers``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostCateringContainers`: Status
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigApi.PostCateringContainers`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostCateringContainersRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **cateringContainers** | [**PostCateringContainersRequest**](PostCateringContainersRequest.md) | Request object which holds new Catering Code Containers. | 
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


## PostCateringItemRates

> Status PostCateringItemRates(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CateringItemRates(cateringItemRates).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create Catering Item rates



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/evmcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    cateringItemRates := *openapiclient.NewPostCateringItemRatesRequest() // PostCateringItemRatesRequest | Request object which holds new Catering Code's Item Rates.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ResourceConfigApi.PostCateringItemRates(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CateringItemRates(cateringItemRates).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigApi.PostCateringItemRates``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostCateringItemRates`: Status
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigApi.PostCateringItemRates`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostCateringItemRatesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **cateringItemRates** | [**PostCateringItemRatesRequest**](PostCateringItemRatesRequest.md) | Request object which holds new Catering Code&#39;s Item Rates. | 
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


## PostCateringMenuClasses

> Status PostCateringMenuClasses(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CateringMenuClasses(cateringMenuClasses).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create menu classes



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/evmcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    cateringMenuClasses := *openapiclient.NewPutCateringMenuClassesRequest() // PutCateringMenuClassesRequest | Requestion object for creating new Menu Classes.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ResourceConfigApi.PostCateringMenuClasses(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CateringMenuClasses(cateringMenuClasses).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigApi.PostCateringMenuClasses``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostCateringMenuClasses`: Status
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigApi.PostCateringMenuClasses`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostCateringMenuClassesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **cateringMenuClasses** | [**PutCateringMenuClassesRequest**](PutCateringMenuClassesRequest.md) | Requestion object for creating new Menu Classes. | 
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


## PostCateringMenuItemClasses

> Status PostCateringMenuItemClasses(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CateringMenuItemClasses(cateringMenuItemClasses).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create menu item classes



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/evmcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    cateringMenuItemClasses := *openapiclient.NewPostCateringMenuItemClassesRequest() // PostCateringMenuItemClassesRequest | Request object for Creating Menu Item Classes.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ResourceConfigApi.PostCateringMenuItemClasses(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CateringMenuItemClasses(cateringMenuItemClasses).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigApi.PostCateringMenuItemClasses``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostCateringMenuItemClasses`: Status
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigApi.PostCateringMenuItemClasses`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostCateringMenuItemClassesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **cateringMenuItemClasses** | [**PostCateringMenuItemClassesRequest**](PostCateringMenuItemClassesRequest.md) | Request object for Creating Menu Item Classes. | 
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


## PostCateringMenuItems

> Status PostCateringMenuItems(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CateringMenuItems(cateringMenuItems).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create menu items



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/evmcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Unique OPERA Hotel Id
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    cateringMenuItems := *openapiclient.NewPostCateringMenuItemsRequest() // PostCateringMenuItemsRequest | Request object for creating Menu Items.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ResourceConfigApi.PostCateringMenuItems(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CateringMenuItems(cateringMenuItems).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigApi.PostCateringMenuItems``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostCateringMenuItems`: Status
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigApi.PostCateringMenuItems`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique OPERA Hotel Id | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostCateringMenuItemsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **cateringMenuItems** | [**PostCateringMenuItemsRequest**](PostCateringMenuItemsRequest.md) | Request object for creating Menu Items. | 
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


## PostCateringMenus

> Status PostCateringMenus(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CateringMenus(cateringMenus).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create menus



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/evmcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Unique OPERA Hotel ID
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    cateringMenus := *openapiclient.NewPostCateringMenusRequest() // PostCateringMenusRequest | Request object for creating new Menu .
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ResourceConfigApi.PostCateringMenus(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CateringMenus(cateringMenus).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigApi.PostCateringMenus``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostCateringMenus`: Status
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigApi.PostCateringMenus`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique OPERA Hotel ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostCateringMenusRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **cateringMenus** | [**PostCateringMenusRequest**](PostCateringMenusRequest.md) | Request object for creating new Menu . | 
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


## PostCateringPackages

> Status PostCateringPackages(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CateringPackages(cateringPackages).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create catering packages



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/evmcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Unique OPERA Hotel ID
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    cateringPackages := *openapiclient.NewPostCateringPackagesRequest() // PostCateringPackagesRequest | Request object for creating new Catering Packages.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ResourceConfigApi.PostCateringPackages(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CateringPackages(cateringPackages).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigApi.PostCateringPackages``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostCateringPackages`: Status
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigApi.PostCateringPackages`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique OPERA Hotel ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostCateringPackagesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **cateringPackages** | [**PostCateringPackagesRequest**](PostCateringPackagesRequest.md) | Request object for creating new Catering Packages. | 
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


## PostEventForecasts

> Status PostEventForecasts(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).EventForecasts(eventForecasts).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create event forecasts



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/evmcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    eventForecasts := *openapiclient.NewPutEventForecastsRequest() // PutEventForecastsRequest | 
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ResourceConfigApi.PostEventForecasts(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).EventForecasts(eventForecasts).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigApi.PostEventForecasts``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostEventForecasts`: Status
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigApi.PostEventForecasts`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostEventForecastsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **eventForecasts** | [**PutEventForecastsRequest**](PutEventForecastsRequest.md) |  | 
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


## PostInventoryItemTemplates

> Status PostInventoryItemTemplates(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).InventoryItemTemplates(inventoryItemTemplates).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create Item Inventory template



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/evmcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    inventoryItemTemplates := *openapiclient.NewPostInventoryItemTemplatesRequest() // PostInventoryItemTemplatesRequest | Request object for creating new inventory item templates.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ResourceConfigApi.PostInventoryItemTemplates(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).InventoryItemTemplates(inventoryItemTemplates).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigApi.PostInventoryItemTemplates``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostInventoryItemTemplates`: Status
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigApi.PostInventoryItemTemplates`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostInventoryItemTemplatesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **inventoryItemTemplates** | [**PostInventoryItemTemplatesRequest**](PostInventoryItemTemplatesRequest.md) | Request object for creating new inventory item templates. | 
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


## PostInventoryItems

> InventoryItemsCreated PostInventoryItems(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).InventoryItems(inventoryItems).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create an Item Inventory



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/evmcfg"
)

func main() {
    hotelId := "hotelId_example" // string | Unique OPERA Hotel code
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    inventoryItems := *openapiclient.NewPostInventoryItemsRequest() // PostInventoryItemsRequest | Requestion object for creating new Inventory Items Setup configurations
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ResourceConfigApi.PostInventoryItems(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).InventoryItems(inventoryItems).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigApi.PostInventoryItems``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostInventoryItems`: InventoryItemsCreated
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigApi.PostInventoryItems`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique OPERA Hotel code | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostInventoryItemsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **inventoryItems** | [**PostInventoryItemsRequest**](PostInventoryItemsRequest.md) | Requestion object for creating new Inventory Items Setup configurations | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**InventoryItemsCreated**](InventoryItemsCreated.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostItemClasses

> Status PostItemClasses(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ItemClasses(itemClasses).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create item classes



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/evmcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    itemClasses := *openapiclient.NewPostItemClassesRequest() // PostItemClassesRequest | Request object for creating new item class.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ResourceConfigApi.PostItemClasses(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ItemClasses(itemClasses).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigApi.PostItemClasses``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostItemClasses`: Status
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigApi.PostItemClasses`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostItemClassesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **itemClasses** | [**PostItemClassesRequest**](PostItemClassesRequest.md) | Request object for creating new item class. | 
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


## PostItemPools

> Status PostItemPools(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ItemPools(itemPools).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create Item Pools



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/evmcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    itemPools := *openapiclient.NewPostItemPoolsRequest() // PostItemPoolsRequest | Request object which holds new Item Pools.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ResourceConfigApi.PostItemPools(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ItemPools(itemPools).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigApi.PostItemPools``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostItemPools`: Status
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigApi.PostItemPools`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostItemPoolsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **itemPools** | [**PostItemPoolsRequest**](PostItemPoolsRequest.md) | Request object which holds new Item Pools. | 
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


## PostRevenueGroups

> Status PostRevenueGroups(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RevenueGroups(revenueGroups).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create Catering Revenue Groups



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/evmcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    revenueGroups := *openapiclient.NewPostRevenueGroupsRequest() // PostRevenueGroupsRequest | Request object for creating new Catering Revenue Groups Configurations.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ResourceConfigApi.PostRevenueGroups(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RevenueGroups(revenueGroups).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigApi.PostRevenueGroups``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostRevenueGroups`: Status
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigApi.PostRevenueGroups`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostRevenueGroupsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **revenueGroups** | [**PostRevenueGroupsRequest**](PostRevenueGroupsRequest.md) | Request object for creating new Catering Revenue Groups Configurations. | 
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


## PostRevenueTypes

> Status PostRevenueTypes(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RevenueTypes(revenueTypes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create Catering Revenue Types



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/evmcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    revenueTypes := *openapiclient.NewPostRevenueTypesRequest() // PostRevenueTypesRequest | Request object for creating new Revenue Types Setup Configurations.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ResourceConfigApi.PostRevenueTypes(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RevenueTypes(revenueTypes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigApi.PostRevenueTypes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostRevenueTypes`: Status
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigApi.PostRevenueTypes`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostRevenueTypesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **revenueTypes** | [**PostRevenueTypesRequest**](PostRevenueTypesRequest.md) | Request object for creating new Revenue Types Setup Configurations. | 
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


## PutCateringContainers

> Status PutCateringContainers(ctx, cateringContainersCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CateringContainers(cateringContainers).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change catering containers



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/evmcfg"
)

func main() {
    cateringContainersCode := "cateringContainersCode_example" // string | Unique Catering Container Code
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    cateringContainers := *openapiclient.NewPostCateringContainersRequest() // PostCateringContainersRequest | Request object which holds modified Catering Code Containers.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ResourceConfigApi.PutCateringContainers(context.Background(), cateringContainersCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CateringContainers(cateringContainers).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigApi.PutCateringContainers``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutCateringContainers`: Status
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigApi.PutCateringContainers`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**cateringContainersCode** | **string** | Unique Catering Container Code | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutCateringContainersRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **cateringContainers** | [**PostCateringContainersRequest**](PostCateringContainersRequest.md) | Request object which holds modified Catering Code Containers. | 
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


## PutCateringItemRates

> Status PutCateringItemRates(ctx, cateringItemRatesCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CateringItemRates(cateringItemRates).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change catering item rates



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/evmcfg"
)

func main() {
    cateringItemRatesCode := "cateringItemRatesCode_example" // string | Unique Catering Item Rates Codes
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    cateringItemRates := *openapiclient.NewPostCateringItemRatesRequest() // PostCateringItemRatesRequest | Request object which holds modified Catering Code's Item Rate.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ResourceConfigApi.PutCateringItemRates(context.Background(), cateringItemRatesCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CateringItemRates(cateringItemRates).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigApi.PutCateringItemRates``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutCateringItemRates`: Status
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigApi.PutCateringItemRates`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**cateringItemRatesCode** | **string** | Unique Catering Item Rates Codes | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutCateringItemRatesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **cateringItemRates** | [**PostCateringItemRatesRequest**](PostCateringItemRatesRequest.md) | Request object which holds modified Catering Code&#39;s Item Rate. | 
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


## PutCateringMenuClasses

> Status PutCateringMenuClasses(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CateringMenuClasses(cateringMenuClasses).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Update catering menu classes



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/evmcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    cateringMenuClasses := *openapiclient.NewPutCateringMenuClassesRequest() // PutCateringMenuClassesRequest | Request object for changing Menu Classes.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ResourceConfigApi.PutCateringMenuClasses(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CateringMenuClasses(cateringMenuClasses).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigApi.PutCateringMenuClasses``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutCateringMenuClasses`: Status
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigApi.PutCateringMenuClasses`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPutCateringMenuClassesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **cateringMenuClasses** | [**PutCateringMenuClassesRequest**](PutCateringMenuClassesRequest.md) | Request object for changing Menu Classes. | 
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


## PutCateringMenuItemClasses

> Status PutCateringMenuItemClasses(ctx, cateringMenuItemClassesCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CateringMenuItemClasses(cateringMenuItemClasses).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Update menu item classes



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/evmcfg"
)

func main() {
    cateringMenuItemClassesCode := "cateringMenuItemClassesCode_example" // string | Unique Menu Item Class Id
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    cateringMenuItemClasses := *openapiclient.NewPostCateringMenuItemClassesRequest() // PostCateringMenuItemClassesRequest | Request object for updating Menu Item Classes.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ResourceConfigApi.PutCateringMenuItemClasses(context.Background(), cateringMenuItemClassesCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CateringMenuItemClasses(cateringMenuItemClasses).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigApi.PutCateringMenuItemClasses``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutCateringMenuItemClasses`: Status
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigApi.PutCateringMenuItemClasses`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**cateringMenuItemClassesCode** | **string** | Unique Menu Item Class Id | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutCateringMenuItemClassesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **cateringMenuItemClasses** | [**PostCateringMenuItemClassesRequest**](PostCateringMenuItemClassesRequest.md) | Request object for updating Menu Item Classes. | 
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


## PutCateringMenuItems

> Status PutCateringMenuItems(ctx, cateringMenuItemId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CateringMenuItems(cateringMenuItems).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Update menu items



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/evmcfg"
)

func main() {
    cateringMenuItemId := "cateringMenuItemId_example" // string | Unique Catering Menu Item Id
    hotelId := "hotelId_example" // string | Unique OPERA Hotel Id
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    cateringMenuItems := *openapiclient.NewPostCateringMenuItemsRequest() // PostCateringMenuItemsRequest | Request object for changing Menu Items.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ResourceConfigApi.PutCateringMenuItems(context.Background(), cateringMenuItemId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CateringMenuItems(cateringMenuItems).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigApi.PutCateringMenuItems``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutCateringMenuItems`: Status
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigApi.PutCateringMenuItems`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**cateringMenuItemId** | **string** | Unique Catering Menu Item Id | 
**hotelId** | **string** | Unique OPERA Hotel Id | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutCateringMenuItemsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **cateringMenuItems** | [**PostCateringMenuItemsRequest**](PostCateringMenuItemsRequest.md) | Request object for changing Menu Items. | 
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


## PutCateringMenus

> Status PutCateringMenus(ctx, cateringMenuId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CateringMenus(cateringMenus).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to change catering menus.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/evmcfg"
)

func main() {
    cateringMenuId := "cateringMenuId_example" // string | Unique ID of Catering Menu
    hotelId := "hotelId_example" // string | Unique OPERA Hotel ID
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    cateringMenus := *openapiclient.NewPostCateringMenusRequest() // PostCateringMenusRequest | Request object for changing Menu .
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ResourceConfigApi.PutCateringMenus(context.Background(), cateringMenuId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CateringMenus(cateringMenus).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigApi.PutCateringMenus``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutCateringMenus`: Status
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigApi.PutCateringMenus`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**cateringMenuId** | **string** | Unique ID of Catering Menu | 
**hotelId** | **string** | Unique OPERA Hotel ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutCateringMenusRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **cateringMenus** | [**PostCateringMenusRequest**](PostCateringMenusRequest.md) | Request object for changing Menu . | 
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


## PutCateringPackages

> Status PutCateringPackages(ctx, cateringPackageId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CateringPackages(cateringPackages).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Update Catering packages



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/evmcfg"
)

func main() {
    cateringPackageId := "cateringPackageId_example" // string | Unique Catering Package ID
    hotelId := "hotelId_example" // string | Unique OPERA Hotel ID
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    cateringPackages := *openapiclient.NewPostCateringPackagesRequest() // PostCateringPackagesRequest | Request object for changing Catering Packages.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ResourceConfigApi.PutCateringPackages(context.Background(), cateringPackageId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CateringPackages(cateringPackages).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigApi.PutCateringPackages``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutCateringPackages`: Status
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigApi.PutCateringPackages`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**cateringPackageId** | **string** | Unique Catering Package ID | 
**hotelId** | **string** | Unique OPERA Hotel ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutCateringPackagesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **cateringPackages** | [**PostCateringPackagesRequest**](PostCateringPackagesRequest.md) | Request object for changing Catering Packages. | 
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


## PutCateringServings

> Status PutCateringServings(ctx, cateringServingsCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CateringServings(cateringServings).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Update catering servings



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/evmcfg"
)

func main() {
    cateringServingsCode := "cateringServingsCode_example" // string | Unique Catering Sevrings Code
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    cateringServings := *openapiclient.NewPutCateringServingsRequest() // PutCateringServingsRequest | Request object which holds modified Catering Code's Serving.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ResourceConfigApi.PutCateringServings(context.Background(), cateringServingsCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CateringServings(cateringServings).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigApi.PutCateringServings``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutCateringServings`: Status
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigApi.PutCateringServings`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**cateringServingsCode** | **string** | Unique Catering Sevrings Code | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutCateringServingsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **cateringServings** | [**PutCateringServingsRequest**](PutCateringServingsRequest.md) | Request object which holds modified Catering Code&#39;s Serving. | 
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


## PutEventForecasts

> Status PutEventForecasts(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).EventForecasts(eventForecasts).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Update Event forecasts



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/evmcfg"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    eventForecasts := *openapiclient.NewPutEventForecastsRequest() // PutEventForecastsRequest | 
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ResourceConfigApi.PutEventForecasts(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).EventForecasts(eventForecasts).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigApi.PutEventForecasts``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutEventForecasts`: Status
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigApi.PutEventForecasts`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPutEventForecastsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **eventForecasts** | [**PutEventForecastsRequest**](PutEventForecastsRequest.md) |  | 
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


## PutInventoryItemTemplates

> Status PutInventoryItemTemplates(ctx, inventoryItemId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).InventoryItemTemplates(inventoryItemTemplates).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change Item Inventory templates



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/evmcfg"
)

func main() {
    inventoryItemId := "inventoryItemId_example" // string | Unique Inventory Item Template code
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    inventoryItemTemplates := *openapiclient.NewPostInventoryItemTemplatesRequest() // PostInventoryItemTemplatesRequest | Request object for changing existing inventory item templates.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ResourceConfigApi.PutInventoryItemTemplates(context.Background(), inventoryItemId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).InventoryItemTemplates(inventoryItemTemplates).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigApi.PutInventoryItemTemplates``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutInventoryItemTemplates`: Status
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigApi.PutInventoryItemTemplates`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**inventoryItemId** | **string** | Unique Inventory Item Template code | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutInventoryItemTemplatesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **inventoryItemTemplates** | [**PostInventoryItemTemplatesRequest**](PostInventoryItemTemplatesRequest.md) | Request object for changing existing inventory item templates. | 
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


## PutInventoryItems

> Status PutInventoryItems(ctx, inventoryItemId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).InventoryItems(inventoryItems).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Update Item Inventory



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/evmcfg"
)

func main() {
    inventoryItemId := "inventoryItemId_example" // string | Unique Inventory Item id
    hotelId := "hotelId_example" // string | Unique OPERA Hotel code
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    inventoryItems := *openapiclient.NewPostInventoryItemsRequest() // PostInventoryItemsRequest | Request object for changing Inventory Items Setup configuration
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ResourceConfigApi.PutInventoryItems(context.Background(), inventoryItemId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).InventoryItems(inventoryItems).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigApi.PutInventoryItems``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutInventoryItems`: Status
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigApi.PutInventoryItems`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**inventoryItemId** | **string** | Unique Inventory Item id | 
**hotelId** | **string** | Unique OPERA Hotel code | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutInventoryItemsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **inventoryItems** | [**PostInventoryItemsRequest**](PostInventoryItemsRequest.md) | Request object for changing Inventory Items Setup configuration | 
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


## PutItemClasses

> Status PutItemClasses(ctx, itemClassesCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ItemClasses(itemClasses).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Update item classes



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/evmcfg"
)

func main() {
    itemClassesCode := "itemClassesCode_example" // string | Unique Item Class Code
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    itemClasses := *openapiclient.NewPostItemClassesRequest() // PostItemClassesRequest | Request object for modifying item class.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ResourceConfigApi.PutItemClasses(context.Background(), itemClassesCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ItemClasses(itemClasses).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigApi.PutItemClasses``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutItemClasses`: Status
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigApi.PutItemClasses`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**itemClassesCode** | **string** | Unique Item Class Code | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutItemClassesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **itemClasses** | [**PostItemClassesRequest**](PostItemClassesRequest.md) | Request object for modifying item class. | 
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


## PutItemPools

> Status PutItemPools(ctx, itemPoolsCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ItemPools(itemPools).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change Item Pools



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/evmcfg"
)

func main() {
    itemPoolsCode := "itemPoolsCode_example" // string | Unique Item Pool code
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    itemPools := *openapiclient.NewPostItemPoolsRequest() // PostItemPoolsRequest | Request object which holds modified Item Pools.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ResourceConfigApi.PutItemPools(context.Background(), itemPoolsCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ItemPools(itemPools).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigApi.PutItemPools``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutItemPools`: Status
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigApi.PutItemPools`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**itemPoolsCode** | **string** | Unique Item Pool code | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutItemPoolsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **itemPools** | [**PostItemPoolsRequest**](PostItemPoolsRequest.md) | Request object which holds modified Item Pools. | 
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


## PutRevenueGroups

> Status PutRevenueGroups(ctx, revenueGroupsCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RevenueGroups(revenueGroups).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Update Catering Revenue Groups



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/evmcfg"
)

func main() {
    revenueGroupsCode := "revenueGroupsCode_example" // string | Unique Revenue Group Code
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    revenueGroups := *openapiclient.NewPostRevenueGroupsRequest() // PostRevenueGroupsRequest | Request object for changing existing Catering Revenue Groups Configurations.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ResourceConfigApi.PutRevenueGroups(context.Background(), revenueGroupsCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RevenueGroups(revenueGroups).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigApi.PutRevenueGroups``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutRevenueGroups`: Status
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigApi.PutRevenueGroups`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**revenueGroupsCode** | **string** | Unique Revenue Group Code | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutRevenueGroupsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **revenueGroups** | [**PostRevenueGroupsRequest**](PostRevenueGroupsRequest.md) | Request object for changing existing Catering Revenue Groups Configurations. | 
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


## PutRevenueTypes

> Status PutRevenueTypes(ctx, revenueTypesId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RevenueTypes(revenueTypes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Update Catering Revenue Types



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/evmcfg"
)

func main() {
    revenueTypesId := "revenueTypesId_example" // string | Unique code for  Revenue Type
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    revenueTypes := *openapiclient.NewPostRevenueTypesRequest() // PostRevenueTypesRequest | Request object for changing existing Revenue Types Setup Configurations.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ResourceConfigApi.PutRevenueTypes(context.Background(), revenueTypesId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RevenueTypes(revenueTypes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigApi.PutRevenueTypes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutRevenueTypes`: Status
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigApi.PutRevenueTypes`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**revenueTypesId** | **string** | Unique code for  Revenue Type | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutRevenueTypesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **revenueTypes** | [**PostRevenueTypesRequest**](PostRevenueTypesRequest.md) | Request object for changing existing Revenue Types Setup Configurations. | 
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


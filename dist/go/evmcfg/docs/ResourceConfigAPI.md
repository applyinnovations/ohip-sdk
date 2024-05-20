# \ResourceConfigAPI

All URIs are relative to */evm/config/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CheckDiscountAvailable**](ResourceConfigAPI.md#CheckDiscountAvailable) | **Get** /hotels/{hotelId}/discountAvailable/check | Check if discount is available
[**CopyCateringMenuItemClasses**](ResourceConfigAPI.md#CopyCateringMenuItemClasses) | **Put** /cateringMenuItemClasses/{cateringMenuItemClassesCode}/copy | Copy menu item classes
[**CopyCateringMenuItems**](ResourceConfigAPI.md#CopyCateringMenuItems) | **Post** /hotels/{hotelId}/cateringMenuItems/copy | Operation to copy catering menu items.
[**CopyCateringMenus**](ResourceConfigAPI.md#CopyCateringMenus) | **Post** /hotels/{hotelId}/cateringMenus/{cateringMenuId}/copy | Copy a menu
[**CopyEventForecasts**](ResourceConfigAPI.md#CopyEventForecasts) | **Put** /EventForecasts/copy | Copy event forecasts
[**CopyInventoryItems**](ResourceConfigAPI.md#CopyInventoryItems) | **Put** /hotels/{sourceHotelId}/inventoryItems/copy | Copy Item Inventories
[**CopyItemClasses**](ResourceConfigAPI.md#CopyItemClasses) | **Put** /itemClasses/copy | Copy item classes
[**DeleteCateringContainers**](ResourceConfigAPI.md#DeleteCateringContainers) | **Delete** /cateringContainers/{cateringContainersCode} | Delete Catering container
[**DeleteCateringItemRates**](ResourceConfigAPI.md#DeleteCateringItemRates) | **Delete** /cateringItemRates/{cateringItemRatesCode} | Remove catering item rates
[**DeleteCateringMenuClasses**](ResourceConfigAPI.md#DeleteCateringMenuClasses) | **Delete** /menuClasses/{menuClassesId}/cateringMenuClasses | Delete menu classes
[**DeleteCateringMenuItemClasses**](ResourceConfigAPI.md#DeleteCateringMenuItemClasses) | **Delete** /cateringMenuItemClasses/{cateringMenuItemClassesCode} | Delete menu item classes
[**DeleteCateringMenuItems**](ResourceConfigAPI.md#DeleteCateringMenuItems) | **Delete** /hotels/{hotelId}/cateringMenuItems/{cateringMenuItemId} | Operation to remove catering menu items.
[**DeleteCateringMenuItemsByChain**](ResourceConfigAPI.md#DeleteCateringMenuItemsByChain) | **Delete** /cateringMenuItems/{cateringMenuItemId} | Operation to remove catering menu items by chain.
[**DeleteCateringMenuMultiCourses**](ResourceConfigAPI.md#DeleteCateringMenuMultiCourses) | **Delete** /hotels/{hotelId}/courses/{coursesId}/menuMultiCourses | Remove menu multi courses
[**DeleteCateringMenus**](ResourceConfigAPI.md#DeleteCateringMenus) | **Delete** /hotels/{hotelId}/cateringMenus/{cateringMenuId} | Delete a menu
[**DeleteCateringPackageEventNotes**](ResourceConfigAPI.md#DeleteCateringPackageEventNotes) | **Delete** /hotels/{hotelId}/packages/{eventId}/notes/{notedId}/cateringPackageEventNotes | Delete catering package event notes
[**DeleteCateringPackageEvents**](ResourceConfigAPI.md#DeleteCateringPackageEvents) | **Delete** /hotels/{hotelId}/packageEvents/{packageEventsId}/cateringPackageEvents | Delete catering package events
[**DeleteCateringPackagePrices**](ResourceConfigAPI.md#DeleteCateringPackagePrices) | **Delete** /hotels/{hotelId}/packagePrices/{pricesId}/cateringPackagePrices | Delete Catering package prices
[**DeleteCateringPackageResourceNotes**](ResourceConfigAPI.md#DeleteCateringPackageResourceNotes) | **Delete** /hotels/{hotelId}/notes/{notesId}/cateringPackageResourceNotes | Delete catering package resource notes
[**DeleteCateringPackageResources**](ResourceConfigAPI.md#DeleteCateringPackageResources) | **Delete** /cateringPackageResources | Delete catering package resources
[**DeleteCateringPackageRevenues**](ResourceConfigAPI.md#DeleteCateringPackageRevenues) | **Delete** /hotels/{hotelId}/events/{eventsId}/revenues/{revenueType}/packages/{priceId}/cateringPackageRevenues | Delete catering package revenues
[**DeleteCateringPackages**](ResourceConfigAPI.md#DeleteCateringPackages) | **Delete** /hotels/{hotelId}/cateringPackages/{cateringPackageId} | Delete catering packages
[**DeleteEventForecasts**](ResourceConfigAPI.md#DeleteEventForecasts) | **Delete** /eventForecasts/{forecastsId}/eventTypes/{eventTypesCode}/eventForecasts | Delete event forecasts
[**DeleteInventoryItemTemplates**](ResourceConfigAPI.md#DeleteInventoryItemTemplates) | **Delete** /inventoryItems/{inventoryItemId} | Delete Item Inventory templates
[**DeleteInventoryItems**](ResourceConfigAPI.md#DeleteInventoryItems) | **Delete** /hotels/{hotelId}/inventoryItems/{inventoryItemId} | Delete Item Inventory
[**DeleteItemClasses**](ResourceConfigAPI.md#DeleteItemClasses) | **Delete** /itemClasses/{itemClassesCode} | Delete Item classes
[**DeleteItemPools**](ResourceConfigAPI.md#DeleteItemPools) | **Delete** /hotels/{hotelId}/itemPools/{itemPoolsCode}/itemPools | Delete Item Pools
[**DeleteRevenueGroups**](ResourceConfigAPI.md#DeleteRevenueGroups) | **Delete** /revenueGroups/{revenueGroupsCode} | Delete Catering Revenue Groups
[**GetCateringContainers**](ResourceConfigAPI.md#GetCateringContainers) | **Get** /cateringContainers | Get catering containers
[**GetCateringItemRates**](ResourceConfigAPI.md#GetCateringItemRates) | **Get** /cateringItemRates | Get catering item rates
[**GetCateringMenu**](ResourceConfigAPI.md#GetCateringMenu) | **Get** /hotels/{hotelId}/cateringMenus/{cateringMenuId} | Get menu
[**GetCateringMenuClasses**](ResourceConfigAPI.md#GetCateringMenuClasses) | **Get** /hotels/{hotelId}/cateringMenuClasses | Get menu classes
[**GetCateringMenuItemClasses**](ResourceConfigAPI.md#GetCateringMenuItemClasses) | **Get** /hotels/{hotelId}/cateringMenuItemClasses | Get menu item classes
[**GetCateringMenuItems**](ResourceConfigAPI.md#GetCateringMenuItems) | **Get** /hotels/{hotelId}/cateringMenuItems | Get Menu items
[**GetCateringMenus**](ResourceConfigAPI.md#GetCateringMenus) | **Get** /hotels/{hotelId}/cateringMenus | Get menus
[**GetCateringPackage**](ResourceConfigAPI.md#GetCateringPackage) | **Get** /hotels/{hotelId}/cateringPackages/{cateringPackageId} | Get catering package
[**GetCateringPackageByChain**](ResourceConfigAPI.md#GetCateringPackageByChain) | **Get** /cateringPackages/{cateringPackageId} | Get catering package by chain
[**GetCateringPackages**](ResourceConfigAPI.md#GetCateringPackages) | **Get** /hotels/{hotelId}/cateringPackages | Fetch catering packages for a property.
[**GetCateringPackagesMultiProperties**](ResourceConfigAPI.md#GetCateringPackagesMultiProperties) | **Get** /cateringPackages | Fetch catering packages
[**GetCateringServings**](ResourceConfigAPI.md#GetCateringServings) | **Get** /cateringServings | Get catering servings
[**GetDailyInventoryItems**](ResourceConfigAPI.md#GetDailyInventoryItems) | **Get** /hotels/{hotelId}/dailyInventoryItems | Get Daily Item Inventory
[**GetEventForecasts**](ResourceConfigAPI.md#GetEventForecasts) | **Get** /hotels/{hotelId}/eventForecasts | Get Event Forecasts
[**GetInventoryItemTemplates**](ResourceConfigAPI.md#GetInventoryItemTemplates) | **Get** /inventoryItems | Get Item Inventory templates
[**GetInventoryItems**](ResourceConfigAPI.md#GetInventoryItems) | **Get** /hotels/{hotelId}/inventoryItems | Get Item Inventory
[**GetItemClasses**](ResourceConfigAPI.md#GetItemClasses) | **Get** /itemClasses | Get item classes
[**GetItemPools**](ResourceConfigAPI.md#GetItemPools) | **Get** /hotels/{hotelId}/itemPools | Get Item Pools
[**GetRevenueGroups**](ResourceConfigAPI.md#GetRevenueGroups) | **Get** /revenueGroups | Get Catering Revenue Groups
[**GetRevenueTypes**](ResourceConfigAPI.md#GetRevenueTypes) | **Get** /revenueTypes | Get Catering Revenue Types
[**PostCateringContainers**](ResourceConfigAPI.md#PostCateringContainers) | **Post** /cateringContainers | Create catering containers
[**PostCateringItemRates**](ResourceConfigAPI.md#PostCateringItemRates) | **Post** /cateringItemRates | Create Catering Item rates
[**PostCateringMenuClasses**](ResourceConfigAPI.md#PostCateringMenuClasses) | **Post** /cateringMenuClasses | Create menu classes
[**PostCateringMenuItemClasses**](ResourceConfigAPI.md#PostCateringMenuItemClasses) | **Post** /cateringMenuItemClasses | Create menu item classes
[**PostCateringMenuItems**](ResourceConfigAPI.md#PostCateringMenuItems) | **Post** /hotels/{hotelId}/cateringMenuItems | Create menu items
[**PostCateringMenus**](ResourceConfigAPI.md#PostCateringMenus) | **Post** /hotels/{hotelId}/cateringMenus | Create menus
[**PostCateringPackages**](ResourceConfigAPI.md#PostCateringPackages) | **Post** /hotels/{hotelId}/cateringPackages | Create catering packages
[**PostEventForecasts**](ResourceConfigAPI.md#PostEventForecasts) | **Post** /eventForecasts | Create event forecasts
[**PostInventoryItemTemplates**](ResourceConfigAPI.md#PostInventoryItemTemplates) | **Post** /inventoryItems | Create Item Inventory template
[**PostInventoryItems**](ResourceConfigAPI.md#PostInventoryItems) | **Post** /hotels/{hotelId}/inventoryItems | Create an Item Inventory
[**PostItemClasses**](ResourceConfigAPI.md#PostItemClasses) | **Post** /itemClasses | Create item classes
[**PostItemPools**](ResourceConfigAPI.md#PostItemPools) | **Post** /itemPools | Create Item Pools
[**PostRevenueGroups**](ResourceConfigAPI.md#PostRevenueGroups) | **Post** /revenueGroups | Create Catering Revenue Groups
[**PostRevenueTypes**](ResourceConfigAPI.md#PostRevenueTypes) | **Post** /revenueTypes | Create Catering Revenue Types
[**PutCateringContainers**](ResourceConfigAPI.md#PutCateringContainers) | **Put** /cateringContainers/{cateringContainersCode} | Change catering containers
[**PutCateringItemRates**](ResourceConfigAPI.md#PutCateringItemRates) | **Put** /cateringItemRates/{cateringItemRatesCode} | Change catering item rates
[**PutCateringMenuClasses**](ResourceConfigAPI.md#PutCateringMenuClasses) | **Put** /cateringMenuClasses | Update catering menu classes
[**PutCateringMenuItemClasses**](ResourceConfigAPI.md#PutCateringMenuItemClasses) | **Put** /cateringMenuItemClasses/{cateringMenuItemClassesCode} | Update menu item classes
[**PutCateringMenuItems**](ResourceConfigAPI.md#PutCateringMenuItems) | **Put** /hotels/{hotelId}/cateringMenuItems/{cateringMenuItemId} | Update menu items
[**PutCateringMenus**](ResourceConfigAPI.md#PutCateringMenus) | **Put** /hotels/{hotelId}/cateringMenus/{cateringMenuId} | Operation to change catering menus.
[**PutCateringPackages**](ResourceConfigAPI.md#PutCateringPackages) | **Put** /hotels/{hotelId}/cateringPackages/{cateringPackageId} | Update Catering packages
[**PutCateringServings**](ResourceConfigAPI.md#PutCateringServings) | **Put** /cateringServings/{cateringServingsCode} | Update catering servings
[**PutEventForecasts**](ResourceConfigAPI.md#PutEventForecasts) | **Put** /eventForecasts | Update Event forecasts
[**PutInventoryItemTemplates**](ResourceConfigAPI.md#PutInventoryItemTemplates) | **Put** /inventoryItems/{inventoryItemId} | Change Item Inventory templates
[**PutInventoryItems**](ResourceConfigAPI.md#PutInventoryItems) | **Put** /hotels/{hotelId}/inventoryItems/{inventoryItemId} | Update Item Inventory
[**PutItemClasses**](ResourceConfigAPI.md#PutItemClasses) | **Put** /itemClasses/{itemClassesCode} | Update item classes
[**PutItemPools**](ResourceConfigAPI.md#PutItemPools) | **Post** /itemPools/{itemPoolsCode} | Change Item Pools
[**PutRevenueGroups**](ResourceConfigAPI.md#PutRevenueGroups) | **Put** /revenueGroups/{revenueGroupsCode} | Update Catering Revenue Groups
[**PutRevenueTypes**](ResourceConfigAPI.md#PutRevenueTypes) | **Put** /revenueTypes/{revenueTypesId} | Update Catering Revenue Types



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
    resp, r, err := apiClient.ResourceConfigAPI.CheckDiscountAvailable(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigAPI.CheckDiscountAvailable``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CheckDiscountAvailable`: CheckedDiscountAvailable
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigAPI.CheckDiscountAvailable`: %v\n", resp)
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
    cateringMenuItemClassesCopy := *openapiclient.NewCateringMenuItemClassesCopy() // CateringMenuItemClassesCopy | Request object for Copying Menu Item Classes.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ResourceConfigAPI.CopyCateringMenuItemClasses(context.Background(), cateringMenuItemClassesCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CateringMenuItemClassesCopy(cateringMenuItemClassesCopy).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigAPI.CopyCateringMenuItemClasses``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CopyCateringMenuItemClasses`: Status
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigAPI.CopyCateringMenuItemClasses`: %v\n", resp)
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
 **cateringMenuItemClassesCopy** | [**CateringMenuItemClassesCopy**](CateringMenuItemClassesCopy.md) | Request object for Copying Menu Item Classes. | 
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
    cateringMenuItemsCopy := *openapiclient.NewCateringMenuItemsCopy() // CateringMenuItemsCopy | Request object for Copying Menu Items.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ResourceConfigAPI.CopyCateringMenuItems(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CateringMenuItemsCopy(cateringMenuItemsCopy).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigAPI.CopyCateringMenuItems``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CopyCateringMenuItems`: Status
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigAPI.CopyCateringMenuItems`: %v\n", resp)
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
 **cateringMenuItemsCopy** | [**CateringMenuItemsCopy**](CateringMenuItemsCopy.md) | Request object for Copying Menu Items. | 
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
    cateringMenusCopy := *openapiclient.NewCateringMenusCopy() // CateringMenusCopy | Request object for copying a Menu.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ResourceConfigAPI.CopyCateringMenus(context.Background(), cateringMenuId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CateringMenusCopy(cateringMenusCopy).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigAPI.CopyCateringMenus``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CopyCateringMenus`: Status
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigAPI.CopyCateringMenus`: %v\n", resp)
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
 **cateringMenusCopy** | [**CateringMenusCopy**](CateringMenusCopy.md) | Request object for copying a Menu. | 
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
    eventForecastsCopy := *openapiclient.NewEventForecastsCopy() // EventForecastsCopy | Request object for Copying Event Forecasts to multiple hotels.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ResourceConfigAPI.CopyEventForecasts(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).EventForecastsCopy(eventForecastsCopy).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigAPI.CopyEventForecasts``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CopyEventForecasts`: Status
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigAPI.CopyEventForecasts`: %v\n", resp)
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
 **eventForecastsCopy** | [**EventForecastsCopy**](EventForecastsCopy.md) | Request object for Copying Event Forecasts to multiple hotels. | 
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
    inventoryItemsCopy := *openapiclient.NewInventoryItemsCopy() // InventoryItemsCopy | Request object for copying Inventory Items Setup configuration
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ResourceConfigAPI.CopyInventoryItems(context.Background(), sourceHotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).InventoryItemsCopy(inventoryItemsCopy).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigAPI.CopyInventoryItems``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CopyInventoryItems`: Status
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigAPI.CopyInventoryItems`: %v\n", resp)
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
 **inventoryItemsCopy** | [**InventoryItemsCopy**](InventoryItemsCopy.md) | Request object for copying Inventory Items Setup configuration | 
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
    itemClassesCopy := []openapiclient.CopyConfigurationCodeType{*openapiclient.NewCopyConfigurationCodeType()} // []CopyConfigurationCodeType | List of the Item Class to be copied.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ResourceConfigAPI.CopyItemClasses(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ItemClassesCopy(itemClassesCopy).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigAPI.CopyItemClasses``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CopyItemClasses`: Status
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigAPI.CopyItemClasses`: %v\n", resp)
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
 **itemClassesCopy** | [**[]CopyConfigurationCodeType**](CopyConfigurationCodeType.md) | List of the Item Class to be copied. | 
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
    resp, r, err := apiClient.ResourceConfigAPI.DeleteCateringContainers(context.Background(), cateringContainersCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigAPI.DeleteCateringContainers``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteCateringContainers`: Status
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigAPI.DeleteCateringContainers`: %v\n", resp)
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
    resp, r, err := apiClient.ResourceConfigAPI.DeleteCateringItemRates(context.Background(), cateringItemRatesCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigAPI.DeleteCateringItemRates``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteCateringItemRates`: Status
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigAPI.DeleteCateringItemRates`: %v\n", resp)
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
    resp, r, err := apiClient.ResourceConfigAPI.DeleteCateringMenuClasses(context.Background(), menuClassesId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).MenuClassListIDExtension(menuClassListIDExtension).MenuClassListIdContext(menuClassListIdContext).MenuClassListUniqueIdType(menuClassListUniqueIdType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigAPI.DeleteCateringMenuClasses``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteCateringMenuClasses`: Status
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigAPI.DeleteCateringMenuClasses`: %v\n", resp)
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
    resp, r, err := apiClient.ResourceConfigAPI.DeleteCateringMenuItemClasses(context.Background(), cateringMenuItemClassesCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).MenuItemClassesIdExtension(menuItemClassesIdExtension).MenuItemClassesIdContext(menuItemClassesIdContext).MenuItemClassesUniqueIdType(menuItemClassesUniqueIdType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigAPI.DeleteCateringMenuItemClasses``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteCateringMenuItemClasses`: Status
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigAPI.DeleteCateringMenuItemClasses`: %v\n", resp)
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
    resp, r, err := apiClient.ResourceConfigAPI.DeleteCateringMenuItems(context.Background(), cateringMenuItemId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigAPI.DeleteCateringMenuItems``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteCateringMenuItems`: Status
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigAPI.DeleteCateringMenuItems`: %v\n", resp)
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
    resp, r, err := apiClient.ResourceConfigAPI.DeleteCateringMenuItemsByChain(context.Background(), cateringMenuItemId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigAPI.DeleteCateringMenuItemsByChain``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteCateringMenuItemsByChain`: Status
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigAPI.DeleteCateringMenuItemsByChain`: %v\n", resp)
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
    resp, r, err := apiClient.ResourceConfigAPI.DeleteCateringMenuMultiCourses(context.Background(), coursesId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CourseIdListUniqueIdExtension(courseIdListUniqueIdExtension).CourseIdListUniqueIdContext(courseIdListUniqueIdContext).CourseIdListUniqueIdType(courseIdListUniqueIdType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigAPI.DeleteCateringMenuMultiCourses``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteCateringMenuMultiCourses`: Status
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigAPI.DeleteCateringMenuMultiCourses`: %v\n", resp)
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
    resp, r, err := apiClient.ResourceConfigAPI.DeleteCateringMenus(context.Background(), cateringMenuId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigAPI.DeleteCateringMenus``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteCateringMenus`: Status
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigAPI.DeleteCateringMenus`: %v\n", resp)
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
    resp, r, err := apiClient.ResourceConfigAPI.DeleteCateringPackageEventNotes(context.Background(), notedId, eventId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).PkgEventIdExtension(pkgEventIdExtension).PkgEventIdContext(pkgEventIdContext).PkgEventIdType(pkgEventIdType).NoteIdExtension(noteIdExtension).NoteIdContext(noteIdContext).NoteIdType(noteIdType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigAPI.DeleteCateringPackageEventNotes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteCateringPackageEventNotes`: Status
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigAPI.DeleteCateringPackageEventNotes`: %v\n", resp)
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
    resp, r, err := apiClient.ResourceConfigAPI.DeleteCateringPackageEvents(context.Background(), packageEventsId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).PkgEventIdExtension(pkgEventIdExtension).PkgEventIdContext(pkgEventIdContext).PkgEventIdType(pkgEventIdType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigAPI.DeleteCateringPackageEvents``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteCateringPackageEvents`: Status
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigAPI.DeleteCateringPackageEvents`: %v\n", resp)
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
    resp, r, err := apiClient.ResourceConfigAPI.DeleteCateringPackagePrices(context.Background(), pricesId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).PackagPriceIdExtension(packagPriceIdExtension).PackagPriceIdContext(packagPriceIdContext).PackagPriceIdType(packagPriceIdType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigAPI.DeleteCateringPackagePrices``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteCateringPackagePrices`: Status
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigAPI.DeleteCateringPackagePrices`: %v\n", resp)
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
    resp, r, err := apiClient.ResourceConfigAPI.DeleteCateringPackageResourceNotes(context.Background(), notesId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigAPI.DeleteCateringPackageResourceNotes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteCateringPackageResourceNotes`: Status
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigAPI.DeleteCateringPackageResourceNotes`: %v\n", resp)
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
    resp, r, err := apiClient.ResourceConfigAPI.DeleteCateringPackageResources(context.Background()).HotelId(hotelId).PkgEventId(pkgEventId).PkgEventIdType(pkgEventIdType).ResourceId(resourceId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).PkgEventIdExtension(pkgEventIdExtension).PkgEventIdContext(pkgEventIdContext).PkgEventType(pkgEventType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigAPI.DeleteCateringPackageResources``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteCateringPackageResources`: Status
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigAPI.DeleteCateringPackageResources`: %v\n", resp)
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
    resp, r, err := apiClient.ResourceConfigAPI.DeleteCateringPackageRevenues(context.Background(), priceId, revenueType, eventsId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).PackagePriceIdExtension(packagePriceIdExtension).PackagePriceIdContext(packagePriceIdContext).PackagePriceIdType(packagePriceIdType).EventIdExtension(eventIdExtension).EventIdContext(eventIdContext).EventIdType(eventIdType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigAPI.DeleteCateringPackageRevenues``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteCateringPackageRevenues`: Status
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigAPI.DeleteCateringPackageRevenues`: %v\n", resp)
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
    resp, r, err := apiClient.ResourceConfigAPI.DeleteCateringPackages(context.Background(), cateringPackageId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigAPI.DeleteCateringPackages``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteCateringPackages`: Status
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigAPI.DeleteCateringPackages`: %v\n", resp)
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
    resp, r, err := apiClient.ResourceConfigAPI.DeleteEventForecasts(context.Background(), eventTypesCode, forecastsId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ForecastIdExtension(forecastIdExtension).ForecastIdContext(forecastIdContext).ForecastIdType(forecastIdType).HotelId(hotelId).RevenueTypeCode(revenueTypeCode).RevenueTypeDescription(revenueTypeDescription).Amount(amount).CurrencyCode(currencyCode).AmountType(amountType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigAPI.DeleteEventForecasts``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteEventForecasts`: Status
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigAPI.DeleteEventForecasts`: %v\n", resp)
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
    resp, r, err := apiClient.ResourceConfigAPI.DeleteInventoryItemTemplates(context.Background(), inventoryItemId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).InventoryItemTemplatesIdExtension(inventoryItemTemplatesIdExtension).InventoryItemTemplatesContext(inventoryItemTemplatesContext).InventoryItemTemplatesType(inventoryItemTemplatesType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigAPI.DeleteInventoryItemTemplates``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteInventoryItemTemplates`: Status
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigAPI.DeleteInventoryItemTemplates`: %v\n", resp)
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
    resp, r, err := apiClient.ResourceConfigAPI.DeleteInventoryItems(context.Background(), inventoryItemId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ItemIDExtension(itemIDExtension).IdContext(idContext).ItemIDType(itemIDType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigAPI.DeleteInventoryItems``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteInventoryItems`: Status
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigAPI.DeleteInventoryItems`: %v\n", resp)
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
    resp, r, err := apiClient.ResourceConfigAPI.DeleteItemClasses(context.Background(), itemClassesCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigAPI.DeleteItemClasses``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteItemClasses`: Status
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigAPI.DeleteItemClasses`: %v\n", resp)
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
    resp, r, err := apiClient.ResourceConfigAPI.DeleteItemPools(context.Background(), itemPoolsCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigAPI.DeleteItemPools``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteItemPools`: Status
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigAPI.DeleteItemPools`: %v\n", resp)
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
    resp, r, err := apiClient.ResourceConfigAPI.DeleteRevenueGroups(context.Background(), revenueGroupsCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigAPI.DeleteRevenueGroups``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteRevenueGroups`: Status
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigAPI.DeleteRevenueGroups`: %v\n", resp)
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
    resp, r, err := apiClient.ResourceConfigAPI.GetCateringContainers(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FetchInactive(fetchInactive).Codes(codes).WildCard(wildCard).Description(description).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigAPI.GetCateringContainers``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetCateringContainers`: CateringContainersInfo
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigAPI.GetCateringContainers`: %v\n", resp)
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
    resp, r, err := apiClient.ResourceConfigAPI.GetCateringItemRates(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FetchInactive(fetchInactive).Codes(codes).WildCard(wildCard).Description(description).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigAPI.GetCateringItemRates``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetCateringItemRates`: CateringItemRatesInfo
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigAPI.GetCateringItemRates`: %v\n", resp)
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
    resp, r, err := apiClient.ResourceConfigAPI.GetCateringMenu(context.Background(), cateringMenuId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Inactive(inactive).FetchInstructions(fetchInstructions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigAPI.GetCateringMenu``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetCateringMenu`: CateringMenusInfo
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigAPI.GetCateringMenu`: %v\n", resp)
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
    resp, r, err := apiClient.ResourceConfigAPI.GetCateringMenuClasses(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).ClassName(className).WebBookable(webBookable).IncludeMenus(includeMenus).Inactive(inactive).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigAPI.GetCateringMenuClasses``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetCateringMenuClasses`: CateringMenuClassesInfo
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigAPI.GetCateringMenuClasses`: %v\n", resp)
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
    resp, r, err := apiClient.ResourceConfigAPI.GetCateringMenuItemClasses(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).ClassName(className).MenuTypes(menuTypes).WebBookable(webBookable).IncludeMenuItems(includeMenuItems).Inactive(inactive).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigAPI.GetCateringMenuItemClasses``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetCateringMenuItemClasses`: CateringMenuItemClassesInfo
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigAPI.GetCateringMenuItemClasses`: %v\n", resp)
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
    resp, r, err := apiClient.ResourceConfigAPI.GetCateringMenuItems(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).Name(name).Codes(codes).QuickInsertCode(quickInsertCode).ListTypeCodes(listTypeCodes).Inactive(inactive).EventTypesCodes(eventTypesCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigAPI.GetCateringMenuItems``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetCateringMenuItems`: CateringMenuItemsInfo
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigAPI.GetCateringMenuItems`: %v\n", resp)
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
    resp, r, err := apiClient.ResourceConfigAPI.GetCateringMenus(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).MenuId(menuId).IDExtension(iDExtension).IdContext(idContext).MenuIDType(menuIDType).Name(name).ClassNameListCodes(classNameListCodes).EventTypesCodes(eventTypesCodes).MenuTypes(menuTypes).DietaryListCodes(dietaryListCodes).Inactive(inactive).MultiChoice(multiChoice).WebBookable(webBookable).End(end).Start(start).FetchInstructions(fetchInstructions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigAPI.GetCateringMenus``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetCateringMenus`: CateringMenusInfo
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigAPI.GetCateringMenus`: %v\n", resp)
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
    resp, r, err := apiClient.ResourceConfigAPI.GetCateringPackage(context.Background(), cateringPackageId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).IdExtension(idExtension).IdContext(idContext).PkgIDType(pkgIDType).FetchInstructions(fetchInstructions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigAPI.GetCateringPackage``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetCateringPackage`: CateringPackage
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigAPI.GetCateringPackage`: %v\n", resp)
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
    resp, r, err := apiClient.ResourceConfigAPI.GetCateringPackageByChain(context.Background(), cateringPackageId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).IdExtension(idExtension).IdContext(idContext).PkgIDType(pkgIDType).FetchInstructions(fetchInstructions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigAPI.GetCateringPackageByChain``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetCateringPackageByChain`: CateringPackage
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigAPI.GetCateringPackageByChain`: %v\n", resp)
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
    startDateTime := time.Now() // string |  (optional)
    endDateTime := time.Now() // string |  (optional)
    bookingType := "bookingType_example" // string | Collection of configured Booking Types for the package property. (optional)
    fetchInstructions := []string{"FetchInstructions_example"} // []string | Fetch instructions that can be used in Catering Packages maintenance. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ResourceConfigAPI.GetCateringPackages(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).PackageCode(packageCode).Description(description).Duration(duration).WebBookable(webBookable).PkgTmpltType(pkgTmpltType).MarketCode(marketCode).PriceCode(priceCode).MinAttendees(minAttendees).MaxAttendees(maxAttendees).SellDate(sellDate).StartDateTime(startDateTime).EndDateTime(endDateTime).BookingType(bookingType).FetchInstructions(fetchInstructions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigAPI.GetCateringPackages``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetCateringPackages`: CateringPackagesInfo
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigAPI.GetCateringPackages`: %v\n", resp)
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
    startDateTime := time.Now() // string |  (optional)
    endDateTime := time.Now() // string |  (optional)
    bookingType := "bookingType_example" // string | Collection of configured Booking Types for the package property. (optional)
    fetchInstructions := []string{"FetchInstructions_example"} // []string | Fetch instructions that can be used in Catering Packages maintenance. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ResourceConfigAPI.GetCateringPackagesMultiProperties(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).HotelIds(hotelIds).PackageCode(packageCode).Description(description).Duration(duration).WebBookable(webBookable).PkgTmpltType(pkgTmpltType).MarketCode(marketCode).PriceCode(priceCode).MinAttendees(minAttendees).MaxAttendees(maxAttendees).SellDate(sellDate).StartDateTime(startDateTime).EndDateTime(endDateTime).BookingType(bookingType).FetchInstructions(fetchInstructions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigAPI.GetCateringPackagesMultiProperties``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetCateringPackagesMultiProperties`: CateringPackagesInfo
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigAPI.GetCateringPackagesMultiProperties`: %v\n", resp)
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
    resp, r, err := apiClient.ResourceConfigAPI.GetCateringServings(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FetchInactive(fetchInactive).ServingCodes(servingCodes).WildCard(wildCard).Description(description).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigAPI.GetCateringServings``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetCateringServings`: CateringServingsInfo
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigAPI.GetCateringServings`: %v\n", resp)
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
    resp, r, err := apiClient.ResourceConfigAPI.GetDailyInventoryItems(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ItemClassCode(itemClassCode).ItemName(itemName).Friday(friday).Monday(monday).Saturday(saturday).Sunday(sunday).Thursday(thursday).Tuesday(tuesday).Wednesday(wednesday).StartDate(startDate).EndDate(endDate).Duration(duration).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigAPI.GetDailyInventoryItems``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetDailyInventoryItems`: DailyInventoryItems
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigAPI.GetDailyInventoryItems`: %v\n", resp)
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
    resp, r, err := apiClient.ResourceConfigAPI.GetEventForecasts(context.Background(), hotelId).FetchInstructions(fetchInstructions).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).EventTypeCodes(eventTypeCodes).EventTypeWildCard(eventTypeWildCard).RevenueTypeCodes(revenueTypeCodes).RevenueTypeWildCard(revenueTypeWildCard).EventDate(eventDate).BlockTypeCodes(blockTypeCodes).MarketCodes(marketCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigAPI.GetEventForecasts``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetEventForecasts`: EventForecastsInfo
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigAPI.GetEventForecasts`: %v\n", resp)
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
    resp, r, err := apiClient.ResourceConfigAPI.GetInventoryItemTemplates(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).InventoryItemTemplateName(inventoryItemTemplateName).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigAPI.GetInventoryItemTemplates``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetInventoryItemTemplates`: InventoryItemTemplates
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigAPI.GetInventoryItemTemplates`: %v\n", resp)
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
    "time"
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
    startDateTime := time.Now() // string |  (optional)
    endDateTime := time.Now() // string |  (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ResourceConfigAPI.GetInventoryItems(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ItemClassCode(itemClassCode).ItemName(itemName).ItemCode(itemCode).EventTypecodes(eventTypecodes).UsedForEvents(usedForEvents).IncludeItemsFromTemplates(includeItemsFromTemplates).StartDateTime(startDateTime).EndDateTime(endDateTime).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigAPI.GetInventoryItems``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetInventoryItems`: InventoryItems
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigAPI.GetInventoryItems`: %v\n", resp)
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
    resp, r, err := apiClient.ResourceConfigAPI.GetItemClasses(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).ItemClassesCode(itemClassesCode).WildCard(wildCard).Criteria(criteria).ClassId(classId).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigAPI.GetItemClasses``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetItemClasses`: ItemClassesInfo
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigAPI.GetItemClasses`: %v\n", resp)
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
    resp, r, err := apiClient.ResourceConfigAPI.GetItemPools(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelIds(hotelIds).ItemClasseCodes(itemClasseCodes).WildCard(wildCard).ItemPoolCodes(itemPoolCodes).ItemPoolsWildCard(itemPoolsWildCard).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigAPI.GetItemPools``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetItemPools`: ItemPoolsInfo
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigAPI.GetItemPools`: %v\n", resp)
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
    resp, r, err := apiClient.ResourceConfigAPI.GetRevenueGroups(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FetchInactive(fetchInactive).RevenueGroupCodes(revenueGroupCodes).WildCard(wildCard).Description(description).IncludeRevenueType(includeRevenueType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigAPI.GetRevenueGroups``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetRevenueGroups`: RevenueGroupsInfo
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigAPI.GetRevenueGroups`: %v\n", resp)
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
    resp, r, err := apiClient.ResourceConfigAPI.GetRevenueTypes(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RevenueGroupCodes(revenueGroupCodes).RevenueGroupWildCard(revenueGroupWildCard).RevenueTypeCodes(revenueTypeCodes).RevenueTypeWildCard(revenueTypeWildCard).IncludeInactive(includeInactive).IncludeRevenueTypeDetail(includeRevenueTypeDetail).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigAPI.GetRevenueTypes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetRevenueTypes`: RevenueTypesInfo
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigAPI.GetRevenueTypes`: %v\n", resp)
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
    cateringContainers := *openapiclient.NewCateringContainers() // CateringContainers | Request object which holds new Catering Code Containers.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ResourceConfigAPI.PostCateringContainers(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CateringContainers(cateringContainers).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigAPI.PostCateringContainers``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostCateringContainers`: Status
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigAPI.PostCateringContainers`: %v\n", resp)
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
 **cateringContainers** | [**CateringContainers**](CateringContainers.md) | Request object which holds new Catering Code Containers. | 
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
    cateringItemRates := *openapiclient.NewCateringItemRates() // CateringItemRates | Request object which holds new Catering Code's Item Rates.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ResourceConfigAPI.PostCateringItemRates(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CateringItemRates(cateringItemRates).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigAPI.PostCateringItemRates``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostCateringItemRates`: Status
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigAPI.PostCateringItemRates`: %v\n", resp)
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
 **cateringItemRates** | [**CateringItemRates**](CateringItemRates.md) | Request object which holds new Catering Code&#39;s Item Rates. | 
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
    cateringMenuClasses := *openapiclient.NewCateringMenuClasses() // CateringMenuClasses | Requestion object for creating new Menu Classes.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ResourceConfigAPI.PostCateringMenuClasses(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CateringMenuClasses(cateringMenuClasses).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigAPI.PostCateringMenuClasses``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostCateringMenuClasses`: Status
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigAPI.PostCateringMenuClasses`: %v\n", resp)
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
 **cateringMenuClasses** | [**CateringMenuClasses**](CateringMenuClasses.md) | Requestion object for creating new Menu Classes. | 
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
    cateringMenuItemClasses := *openapiclient.NewCateringMenuItemClasses() // CateringMenuItemClasses | Request object for Creating Menu Item Classes.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ResourceConfigAPI.PostCateringMenuItemClasses(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CateringMenuItemClasses(cateringMenuItemClasses).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigAPI.PostCateringMenuItemClasses``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostCateringMenuItemClasses`: Status
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigAPI.PostCateringMenuItemClasses`: %v\n", resp)
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
 **cateringMenuItemClasses** | [**CateringMenuItemClasses**](CateringMenuItemClasses.md) | Request object for Creating Menu Item Classes. | 
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
    cateringMenuItems := *openapiclient.NewCateringMenuItems() // CateringMenuItems | Request object for creating Menu Items.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ResourceConfigAPI.PostCateringMenuItems(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CateringMenuItems(cateringMenuItems).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigAPI.PostCateringMenuItems``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostCateringMenuItems`: Status
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigAPI.PostCateringMenuItems`: %v\n", resp)
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
 **cateringMenuItems** | [**CateringMenuItems**](CateringMenuItems.md) | Request object for creating Menu Items. | 
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
    cateringMenus := *openapiclient.NewCateringMenus() // CateringMenus | Request object for creating new Menu .
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ResourceConfigAPI.PostCateringMenus(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CateringMenus(cateringMenus).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigAPI.PostCateringMenus``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostCateringMenus`: Status
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigAPI.PostCateringMenus`: %v\n", resp)
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
 **cateringMenus** | [**CateringMenus**](CateringMenus.md) | Request object for creating new Menu . | 
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
    cateringPackages := *openapiclient.NewCateringPackages() // CateringPackages | Request object for creating new Catering Packages.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ResourceConfigAPI.PostCateringPackages(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CateringPackages(cateringPackages).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigAPI.PostCateringPackages``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostCateringPackages`: Status
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigAPI.PostCateringPackages`: %v\n", resp)
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
 **cateringPackages** | [**CateringPackages**](CateringPackages.md) | Request object for creating new Catering Packages. | 
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
    eventForecasts := *openapiclient.NewEventForecasts() // EventForecasts | 
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ResourceConfigAPI.PostEventForecasts(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).EventForecasts(eventForecasts).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigAPI.PostEventForecasts``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostEventForecasts`: Status
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigAPI.PostEventForecasts`: %v\n", resp)
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
 **eventForecasts** | [**EventForecasts**](EventForecasts.md) |  | 
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
    inventoryItemTemplates := *openapiclient.NewInventoryItemTemplates() // InventoryItemTemplates | Request object for creating new inventory item templates.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ResourceConfigAPI.PostInventoryItemTemplates(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).InventoryItemTemplates(inventoryItemTemplates).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigAPI.PostInventoryItemTemplates``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostInventoryItemTemplates`: Status
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigAPI.PostInventoryItemTemplates`: %v\n", resp)
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
 **inventoryItemTemplates** | [**InventoryItemTemplates**](InventoryItemTemplates.md) | Request object for creating new inventory item templates. | 
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
    inventoryItems := *openapiclient.NewInventoryItems() // InventoryItems | Requestion object for creating new Inventory Items Setup configurations
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ResourceConfigAPI.PostInventoryItems(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).InventoryItems(inventoryItems).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigAPI.PostInventoryItems``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostInventoryItems`: InventoryItemsCreated
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigAPI.PostInventoryItems`: %v\n", resp)
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
 **inventoryItems** | [**InventoryItems**](InventoryItems.md) | Requestion object for creating new Inventory Items Setup configurations | 
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
    itemClasses := *openapiclient.NewItemClasses() // ItemClasses | Request object for creating new item class.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ResourceConfigAPI.PostItemClasses(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ItemClasses(itemClasses).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigAPI.PostItemClasses``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostItemClasses`: Status
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigAPI.PostItemClasses`: %v\n", resp)
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
 **itemClasses** | [**ItemClasses**](ItemClasses.md) | Request object for creating new item class. | 
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
    itemPools := *openapiclient.NewItemPools() // ItemPools | Request object which holds new Item Pools.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ResourceConfigAPI.PostItemPools(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ItemPools(itemPools).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigAPI.PostItemPools``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostItemPools`: Status
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigAPI.PostItemPools`: %v\n", resp)
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
 **itemPools** | [**ItemPools**](ItemPools.md) | Request object which holds new Item Pools. | 
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
    revenueGroups := *openapiclient.NewRevenueGroups() // RevenueGroups | Request object for creating new Catering Revenue Groups Configurations.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ResourceConfigAPI.PostRevenueGroups(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RevenueGroups(revenueGroups).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigAPI.PostRevenueGroups``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostRevenueGroups`: Status
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigAPI.PostRevenueGroups`: %v\n", resp)
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
 **revenueGroups** | [**RevenueGroups**](RevenueGroups.md) | Request object for creating new Catering Revenue Groups Configurations. | 
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
    revenueTypes := *openapiclient.NewRevenueTypes() // RevenueTypes | Request object for creating new Revenue Types Setup Configurations.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ResourceConfigAPI.PostRevenueTypes(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RevenueTypes(revenueTypes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigAPI.PostRevenueTypes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostRevenueTypes`: Status
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigAPI.PostRevenueTypes`: %v\n", resp)
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
 **revenueTypes** | [**RevenueTypes**](RevenueTypes.md) | Request object for creating new Revenue Types Setup Configurations. | 
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
    cateringContainers := *openapiclient.NewCateringContainers() // CateringContainers | Request object which holds modified Catering Code Containers.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ResourceConfigAPI.PutCateringContainers(context.Background(), cateringContainersCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CateringContainers(cateringContainers).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigAPI.PutCateringContainers``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutCateringContainers`: Status
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigAPI.PutCateringContainers`: %v\n", resp)
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
 **cateringContainers** | [**CateringContainers**](CateringContainers.md) | Request object which holds modified Catering Code Containers. | 
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
    cateringItemRates := *openapiclient.NewCateringItemRates() // CateringItemRates | Request object which holds modified Catering Code's Item Rate.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ResourceConfigAPI.PutCateringItemRates(context.Background(), cateringItemRatesCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CateringItemRates(cateringItemRates).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigAPI.PutCateringItemRates``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutCateringItemRates`: Status
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigAPI.PutCateringItemRates`: %v\n", resp)
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
 **cateringItemRates** | [**CateringItemRates**](CateringItemRates.md) | Request object which holds modified Catering Code&#39;s Item Rate. | 
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
    cateringMenuClasses := *openapiclient.NewCateringMenuClasses() // CateringMenuClasses | Request object for changing Menu Classes.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ResourceConfigAPI.PutCateringMenuClasses(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CateringMenuClasses(cateringMenuClasses).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigAPI.PutCateringMenuClasses``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutCateringMenuClasses`: Status
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigAPI.PutCateringMenuClasses`: %v\n", resp)
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
 **cateringMenuClasses** | [**CateringMenuClasses**](CateringMenuClasses.md) | Request object for changing Menu Classes. | 
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
    cateringMenuItemClasses := *openapiclient.NewCateringMenuItemClasses() // CateringMenuItemClasses | Request object for updating Menu Item Classes.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ResourceConfigAPI.PutCateringMenuItemClasses(context.Background(), cateringMenuItemClassesCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CateringMenuItemClasses(cateringMenuItemClasses).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigAPI.PutCateringMenuItemClasses``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutCateringMenuItemClasses`: Status
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigAPI.PutCateringMenuItemClasses`: %v\n", resp)
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
 **cateringMenuItemClasses** | [**CateringMenuItemClasses**](CateringMenuItemClasses.md) | Request object for updating Menu Item Classes. | 
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
    cateringMenuItems := *openapiclient.NewCateringMenuItems() // CateringMenuItems | Request object for changing Menu Items.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ResourceConfigAPI.PutCateringMenuItems(context.Background(), cateringMenuItemId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CateringMenuItems(cateringMenuItems).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigAPI.PutCateringMenuItems``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutCateringMenuItems`: Status
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigAPI.PutCateringMenuItems`: %v\n", resp)
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
 **cateringMenuItems** | [**CateringMenuItems**](CateringMenuItems.md) | Request object for changing Menu Items. | 
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
    cateringMenus := *openapiclient.NewCateringMenus() // CateringMenus | Request object for changing Menu .
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ResourceConfigAPI.PutCateringMenus(context.Background(), cateringMenuId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CateringMenus(cateringMenus).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigAPI.PutCateringMenus``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutCateringMenus`: Status
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigAPI.PutCateringMenus`: %v\n", resp)
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
 **cateringMenus** | [**CateringMenus**](CateringMenus.md) | Request object for changing Menu . | 
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
    cateringPackages := *openapiclient.NewCateringPackages() // CateringPackages | Request object for changing Catering Packages.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ResourceConfigAPI.PutCateringPackages(context.Background(), cateringPackageId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CateringPackages(cateringPackages).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigAPI.PutCateringPackages``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutCateringPackages`: Status
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigAPI.PutCateringPackages`: %v\n", resp)
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
 **cateringPackages** | [**CateringPackages**](CateringPackages.md) | Request object for changing Catering Packages. | 
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
    cateringServings := *openapiclient.NewCateringServings() // CateringServings | Request object which holds modified Catering Code's Serving.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ResourceConfigAPI.PutCateringServings(context.Background(), cateringServingsCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CateringServings(cateringServings).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigAPI.PutCateringServings``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutCateringServings`: Status
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigAPI.PutCateringServings`: %v\n", resp)
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
 **cateringServings** | [**CateringServings**](CateringServings.md) | Request object which holds modified Catering Code&#39;s Serving. | 
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
    eventForecasts := *openapiclient.NewEventForecasts() // EventForecasts | 
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ResourceConfigAPI.PutEventForecasts(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).EventForecasts(eventForecasts).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigAPI.PutEventForecasts``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutEventForecasts`: Status
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigAPI.PutEventForecasts`: %v\n", resp)
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
 **eventForecasts** | [**EventForecasts**](EventForecasts.md) |  | 
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
    inventoryItemTemplates := *openapiclient.NewInventoryItemTemplates() // InventoryItemTemplates | Request object for changing existing inventory item templates.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ResourceConfigAPI.PutInventoryItemTemplates(context.Background(), inventoryItemId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).InventoryItemTemplates(inventoryItemTemplates).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigAPI.PutInventoryItemTemplates``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutInventoryItemTemplates`: Status
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigAPI.PutInventoryItemTemplates`: %v\n", resp)
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
 **inventoryItemTemplates** | [**InventoryItemTemplates**](InventoryItemTemplates.md) | Request object for changing existing inventory item templates. | 
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
    inventoryItems := *openapiclient.NewInventoryItems() // InventoryItems | Request object for changing Inventory Items Setup configuration
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ResourceConfigAPI.PutInventoryItems(context.Background(), inventoryItemId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).InventoryItems(inventoryItems).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigAPI.PutInventoryItems``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutInventoryItems`: Status
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigAPI.PutInventoryItems`: %v\n", resp)
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
 **inventoryItems** | [**InventoryItems**](InventoryItems.md) | Request object for changing Inventory Items Setup configuration | 
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
    itemClasses := *openapiclient.NewItemClasses() // ItemClasses | Request object for modifying item class.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ResourceConfigAPI.PutItemClasses(context.Background(), itemClassesCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ItemClasses(itemClasses).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigAPI.PutItemClasses``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutItemClasses`: Status
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigAPI.PutItemClasses`: %v\n", resp)
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
 **itemClasses** | [**ItemClasses**](ItemClasses.md) | Request object for modifying item class. | 
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
    itemPools := *openapiclient.NewItemPools() // ItemPools | Request object which holds modified Item Pools.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ResourceConfigAPI.PutItemPools(context.Background(), itemPoolsCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ItemPools(itemPools).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigAPI.PutItemPools``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutItemPools`: Status
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigAPI.PutItemPools`: %v\n", resp)
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
 **itemPools** | [**ItemPools**](ItemPools.md) | Request object which holds modified Item Pools. | 
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
    revenueGroups := *openapiclient.NewRevenueGroups() // RevenueGroups | Request object for changing existing Catering Revenue Groups Configurations.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ResourceConfigAPI.PutRevenueGroups(context.Background(), revenueGroupsCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RevenueGroups(revenueGroups).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigAPI.PutRevenueGroups``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutRevenueGroups`: Status
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigAPI.PutRevenueGroups`: %v\n", resp)
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
 **revenueGroups** | [**RevenueGroups**](RevenueGroups.md) | Request object for changing existing Catering Revenue Groups Configurations. | 
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
    revenueTypes := *openapiclient.NewRevenueTypes() // RevenueTypes | Request object for changing existing Revenue Types Setup Configurations.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ResourceConfigAPI.PutRevenueTypes(context.Background(), revenueTypesId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RevenueTypes(revenueTypes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ResourceConfigAPI.PutRevenueTypes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutRevenueTypes`: Status
    fmt.Fprintf(os.Stdout, "Response from `ResourceConfigAPI.PutRevenueTypes`: %v\n", resp)
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
 **revenueTypes** | [**RevenueTypes**](RevenueTypes.md) | Request object for changing existing Revenue Types Setup Configurations. | 
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


# \ResourceConfigApi

All URIs are relative to */evm/config/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetCateringMenuItems**](ResourceConfigApi.md#GetCateringMenuItems) | **Get** /hotels/{hotelId}/cateringMenuItems | Get Menu items
[**GetCateringMenus**](ResourceConfigApi.md#GetCateringMenus) | **Get** /hotels/{hotelId}/cateringMenus | Get menus



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
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    offset := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional) (default to 0)
    name := "name_example" // string | Menu item name of string lentgth 30 (optional)
    codes := []string{"Inner_example"} // []string |  (optional)
    quickInsertCode := "quickInsertCode_example" // string | Article number of Menu Item in Caps (optional)
    listTypeCodes := []string{"Inner_example"} // []string |  (optional)
    inactive := true // bool | If true this boolean will set the criteria to only return Menu Items configured as Inactive. (optional)
    eventTypesCodes := []string{"Inner_example"} // []string |  (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
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
 **xAppKey** | **string** | Client or Partner’s Application Key | 
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
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
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
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
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
 **xAppKey** | **string** | Client or Partner’s Application Key | 
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


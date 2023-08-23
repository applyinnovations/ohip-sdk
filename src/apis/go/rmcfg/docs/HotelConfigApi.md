# \HotelConfigApi

All URIs are relative to */rm/config/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ChangeHotelRoomMaintenanceReasons**](HotelConfigApi.md#ChangeHotelRoomMaintenanceReasons) | **Put** /hotels/{hotelId}/roomMaintenanceReasons/{reasonCode} | Change Hotel Room Maintenance Reasons
[**ChangeHousekeepingRoomSchedules**](HotelConfigApi.md#ChangeHousekeepingRoomSchedules) | **Put** /hotels/{hotelId}/housekeepingRoomSchedules/{roomScheduleId} | Change housekeeping room schedules
[**ChangeHousekeepingSections**](HotelConfigApi.md#ChangeHousekeepingSections) | **Put** /hotels/{hotelId}/housekeepingSections/{code} | Change Housekeeping Sections
[**ChangeTemplateFloors**](HotelConfigApi.md#ChangeTemplateFloors) | **Put** /templateFloors/{templateFloorsId} | Change template floors
[**DeleteRoomTypeTemplates**](HotelConfigApi.md#DeleteRoomTypeTemplates) | **Delete** /roomTypes/{roomTypeTemplatesId} | Delete new Room Type templates 
[**DeleteRoomTypes**](HotelConfigApi.md#DeleteRoomTypes) | **Delete** /hotels/{hotelId}/roomTypes/{roomTypeId} | Delete Room Types
[**GetHotelRoomMaintenanceReasons**](HotelConfigApi.md#GetHotelRoomMaintenanceReasons) | **Get** /hotels/{hotelId}/roomMaintenanceReasons | Get Hotel Room Maintenance Reasons
[**GetHousekeepingRoomSchedules**](HotelConfigApi.md#GetHousekeepingRoomSchedules) | **Get** /hotels/{hotelId}/housekeepingRoomSchedules | Get housekeeping room schedules
[**GetHousekeepingSections**](HotelConfigApi.md#GetHousekeepingSections) | **Get** /hotels/{hotelId}/housekeepingSections | Get Housekeeping Sections
[**GetRoomTypeTemplates**](HotelConfigApi.md#GetRoomTypeTemplates) | **Get** /roomTypes | Get Room Type Templates
[**GetRoomTypes**](HotelConfigApi.md#GetRoomTypes) | **Get** /hotels/{hotelId}/roomTypes | Get hotel room types
[**GetRooms**](HotelConfigApi.md#GetRooms) | **Get** /hotels/{hotelId}/rooms | Get hotel rooms
[**GetTemplateFloors**](HotelConfigApi.md#GetTemplateFloors) | **Get** /templateFloors | Get template floors
[**PostHotelRoomMaintenanceReasons**](HotelConfigApi.md#PostHotelRoomMaintenanceReasons) | **Post** /hotels/{hotelId}/roomMaintenanceReasons | Create Hotel Room Maintenance Reasons
[**PostHousekeepingRoomSchedules**](HotelConfigApi.md#PostHousekeepingRoomSchedules) | **Post** /hotels/{hotelId}/housekeepingRoomSchedules | Create housekeeping room schedules
[**PostHousekeepingSections**](HotelConfigApi.md#PostHousekeepingSections) | **Post** /hotels/{hotelId}/housekeepingSections | Create Housekeeping Sections
[**PostRoomTypeTemplates**](HotelConfigApi.md#PostRoomTypeTemplates) | **Post** /roomTypes | Create Room Type Templates
[**PostRoomTypes**](HotelConfigApi.md#PostRoomTypes) | **Post** /hotels/{hotelId}/roomTypes | Create a new room type
[**PostTemplateFloors**](HotelConfigApi.md#PostTemplateFloors) | **Post** /templateFloors | Create template floors
[**PutRoomTypeTemplates**](HotelConfigApi.md#PutRoomTypeTemplates) | **Put** /roomTypes/{roomTypeTemplatesId} | Change Room Type Templates
[**PutRoomTypes**](HotelConfigApi.md#PutRoomTypes) | **Put** /hotels/{hotelId}/roomTypes/{roomTypeId} | Update a Room Type
[**RemoveHotelRoomMaintenanceReasons**](HotelConfigApi.md#RemoveHotelRoomMaintenanceReasons) | **Delete** /hotels/{hotelId}/roomMaintenanceReasons/{reasonCode} | Delete Hotel Room Maintenance Reasons
[**RemoveHousekeepingRoomSchedules**](HotelConfigApi.md#RemoveHousekeepingRoomSchedules) | **Delete** /hotels/{hotelId}/roomTypeCodes/{roomTypeCode}/housekeepingRoomSchedules/{roomScheduleId} | Delete housekeeping room schedules
[**RemoveHousekeepingSections**](HotelConfigApi.md#RemoveHousekeepingSections) | **Delete** /hotels/{hotelId}/housekeepingSections/{code} | Delete Housekeeping Sections
[**RemoveTemplateFloors**](HotelConfigApi.md#RemoveTemplateFloors) | **Delete** /templateFloors/{templateFloorsId} | Delete template floors



## ChangeHotelRoomMaintenanceReasons

> Status ChangeHotelRoomMaintenanceReasons(ctx, reasonCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelRoomMaintenanceReasonsToBeChanged(hotelRoomMaintenanceReasonsToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change Hotel Room Maintenance Reasons



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
    reasonCode := "reasonCode_example" // string | Unique Code of reason.
    hotelId := "hotelId_example" // string | Unique ID of hotel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    hotelRoomMaintenanceReasonsToBeChanged := *openapiclient.NewChangeHotelRoomMaintenanceReasonsRequest() // ChangeHotelRoomMaintenanceReasonsRequest | Request object for modifying room maintenance reasons for a hotel.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.ChangeHotelRoomMaintenanceReasons(context.Background(), reasonCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelRoomMaintenanceReasonsToBeChanged(hotelRoomMaintenanceReasonsToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.ChangeHotelRoomMaintenanceReasons``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ChangeHotelRoomMaintenanceReasons`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.ChangeHotelRoomMaintenanceReasons`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reasonCode** | **string** | Unique Code of reason. | 
**hotelId** | **string** | Unique ID of hotel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiChangeHotelRoomMaintenanceReasonsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **hotelRoomMaintenanceReasonsToBeChanged** | [**ChangeHotelRoomMaintenanceReasonsRequest**](ChangeHotelRoomMaintenanceReasonsRequest.md) | Request object for modifying room maintenance reasons for a hotel. | 
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


## ChangeHousekeepingRoomSchedules

> Status ChangeHousekeepingRoomSchedules(ctx, roomScheduleId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HousekeepingRoomSchedulesToBeChanged(housekeepingRoomSchedulesToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change housekeeping room schedules



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
    roomScheduleId := "roomScheduleId_example" // string | Unique ID of room scheduled.
    hotelId := "hotelId_example" // string | Unique ID of hotel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    housekeepingRoomSchedulesToBeChanged := *openapiclient.NewChangeHousekeepingRoomSchedulesRequest() // ChangeHousekeepingRoomSchedulesRequest | Request object for changing housekeeping tasks and housekeeping codes associated to a room type.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.ChangeHousekeepingRoomSchedules(context.Background(), roomScheduleId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HousekeepingRoomSchedulesToBeChanged(housekeepingRoomSchedulesToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.ChangeHousekeepingRoomSchedules``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ChangeHousekeepingRoomSchedules`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.ChangeHousekeepingRoomSchedules`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**roomScheduleId** | **string** | Unique ID of room scheduled. | 
**hotelId** | **string** | Unique ID of hotel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiChangeHousekeepingRoomSchedulesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **housekeepingRoomSchedulesToBeChanged** | [**ChangeHousekeepingRoomSchedulesRequest**](ChangeHousekeepingRoomSchedulesRequest.md) | Request object for changing housekeeping tasks and housekeeping codes associated to a room type. | 
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


## ChangeHousekeepingSections

> Status ChangeHousekeepingSections(ctx, code, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HousekeepingSectionsToBeChanged(housekeepingSectionsToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change Housekeeping Sections



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
    code := "code_example" // string | Unique Code of house keeping sections.
    hotelId := "hotelId_example" // string | Unique ID of hotel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    housekeepingSectionsToBeChanged := *openapiclient.NewChangeHousekeepingSectionsRequest() // ChangeHousekeepingSectionsRequest | Modify housekeeping section codes in resort configurations.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.ChangeHousekeepingSections(context.Background(), code, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HousekeepingSectionsToBeChanged(housekeepingSectionsToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.ChangeHousekeepingSections``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ChangeHousekeepingSections`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.ChangeHousekeepingSections`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**code** | **string** | Unique Code of house keeping sections. | 
**hotelId** | **string** | Unique ID of hotel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiChangeHousekeepingSectionsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **housekeepingSectionsToBeChanged** | [**ChangeHousekeepingSectionsRequest**](ChangeHousekeepingSectionsRequest.md) | Modify housekeeping section codes in resort configurations. | 
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


## ChangeTemplateFloors

> Status ChangeTemplateFloors(ctx, templateFloorsId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TemplateFloorsToBeChanged(templateFloorsToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change template floors



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
    templateFloorsId := "templateFloorsId_example" // string | Unique ID of template floors.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    templateFloorsToBeChanged := *openapiclient.NewChangeTemplateFloorsRequest() // ChangeTemplateFloorsRequest | Request object for changing floors at the template level.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.ChangeTemplateFloors(context.Background(), templateFloorsId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TemplateFloorsToBeChanged(templateFloorsToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.ChangeTemplateFloors``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ChangeTemplateFloors`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.ChangeTemplateFloors`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**templateFloorsId** | **string** | Unique ID of template floors. | 

### Other Parameters

Other parameters are passed through a pointer to a apiChangeTemplateFloorsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **templateFloorsToBeChanged** | [**ChangeTemplateFloorsRequest**](ChangeTemplateFloorsRequest.md) | Request object for changing floors at the template level. | 
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


## DeleteRoomTypeTemplates

> Status DeleteRoomTypeTemplates(ctx, roomTypeTemplatesId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoomType(roomType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete new Room Type templates 



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
    roomTypeTemplatesId := "roomTypeTemplatesId_example" // string | Unique ID of room type.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    roomType := "roomType_example" // string | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.DeleteRoomTypeTemplates(context.Background(), roomTypeTemplatesId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoomType(roomType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.DeleteRoomTypeTemplates``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteRoomTypeTemplates`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.DeleteRoomTypeTemplates`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**roomTypeTemplatesId** | **string** | Unique ID of room type. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteRoomTypeTemplatesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **roomType** | **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | 
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


## DeleteRoomTypes

> Status DeleteRoomTypes(ctx, roomTypeId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoomType(roomType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete Room Types



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
    roomTypeId := "roomTypeId_example" // string | Unique ID of room types.
    hotelId := "hotelId_example" // string | Unique ID of hotel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    roomType := "roomType_example" // string | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.DeleteRoomTypes(context.Background(), roomTypeId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoomType(roomType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.DeleteRoomTypes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteRoomTypes`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.DeleteRoomTypes`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**roomTypeId** | **string** | Unique ID of room types. | 
**hotelId** | **string** | Unique ID of hotel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteRoomTypesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **roomType** | **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | 
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


## GetHotelRoomMaintenanceReasons

> HotelRoomMaintenanceReasonsDetails GetHotelRoomMaintenanceReasons(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).RoomMaintenanceReasonCodes(roomMaintenanceReasonCodes).WildCard(wildCard).IncludeInactive(includeInactive).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Hotel Room Maintenance Reasons



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
    hotelId := "hotelId_example" // string | Unique ID of hotel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    offset := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional) (default to 0)
    roomMaintenanceReasonCodes := []string{"Inner_example"} // []string | Codes to be searched. (optional)
    wildCard := "wildCard_example" // string | Wildcard search on the code. (optional)
    includeInactive := true // bool | Inactive flag - whether or not to display inactive records (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.GetHotelRoomMaintenanceReasons(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).RoomMaintenanceReasonCodes(roomMaintenanceReasonCodes).WildCard(wildCard).IncludeInactive(includeInactive).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.GetHotelRoomMaintenanceReasons``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetHotelRoomMaintenanceReasons`: HotelRoomMaintenanceReasonsDetails
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.GetHotelRoomMaintenanceReasons`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of hotel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetHotelRoomMaintenanceReasonsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **offset** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [default to 0]
 **roomMaintenanceReasonCodes** | **[]string** | Codes to be searched. | 
 **wildCard** | **string** | Wildcard search on the code. | 
 **includeInactive** | **bool** | Inactive flag - whether or not to display inactive records | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**HotelRoomMaintenanceReasonsDetails**](HotelRoomMaintenanceReasonsDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetHousekeepingRoomSchedules

> HousekeepingRoomSchedulesDetails GetHousekeepingRoomSchedules(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoomTypeCodes(roomTypeCodes).HousekeepingRoomScheduleCodes(housekeepingRoomScheduleCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get housekeeping room schedules



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
    hotelId := "hotelId_example" // string | Unique ID of hotel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    roomTypeCodes := []string{"Inner_example"} // []string |  (optional)
    housekeepingRoomScheduleCodes := []string{"Inner_example"} // []string |  (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.GetHousekeepingRoomSchedules(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoomTypeCodes(roomTypeCodes).HousekeepingRoomScheduleCodes(housekeepingRoomScheduleCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.GetHousekeepingRoomSchedules``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetHousekeepingRoomSchedules`: HousekeepingRoomSchedulesDetails
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.GetHousekeepingRoomSchedules`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of hotel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetHousekeepingRoomSchedulesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **roomTypeCodes** | **[]string** |  | 
 **housekeepingRoomScheduleCodes** | **[]string** |  | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**HousekeepingRoomSchedulesDetails**](HousekeepingRoomSchedulesDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetHousekeepingSections

> HousekeepingSectionsDetails GetHousekeepingSections(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).IncludeInactive(includeInactive).HousekeepingSectionsCodes(housekeepingSectionsCodes).Description(description).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Housekeeping Sections



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
    hotelId := "hotelId_example" // string | Unique ID of hotel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    includeInactive := true // bool | Indicates if the Section Code is active. (optional)
    housekeepingSectionsCodes := []string{"Inner_example"} // []string |  (optional)
    description := "description_example" // string | Description of the Section. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.GetHousekeepingSections(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).IncludeInactive(includeInactive).HousekeepingSectionsCodes(housekeepingSectionsCodes).Description(description).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.GetHousekeepingSections``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetHousekeepingSections`: HousekeepingSectionsDetails
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.GetHousekeepingSections`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of hotel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetHousekeepingSectionsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **includeInactive** | **bool** | Indicates if the Section Code is active. | 
 **housekeepingSectionsCodes** | **[]string** |  | 
 **description** | **string** | Description of the Section. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**HousekeepingSectionsDetails**](HousekeepingSectionsDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetRoomTypeTemplates

> RoomTypeTemplatesDetails GetRoomTypeTemplates(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).IncludeInactive(includeInactive).Physical(physical).Pseudo(pseudo).SummaryInfo(summaryInfo).RoomTypeCodes(roomTypeCodes).RoomClassCodes(roomClassCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Room Type Templates



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
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    includeInactive := true // bool | Include inactive Room type in search result? (optional)
    physical := true // bool | Is it a physical sleep room type. (optional) (default to false)
    pseudo := true // bool | Is it a pseudo room type. (optional) (default to false)
    summaryInfo := true // bool |  (optional)
    roomTypeCodes := []string{"Inner_example"} // []string |  (optional)
    roomClassCodes := []string{"Inner_example"} // []string |  (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.GetRoomTypeTemplates(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).IncludeInactive(includeInactive).Physical(physical).Pseudo(pseudo).SummaryInfo(summaryInfo).RoomTypeCodes(roomTypeCodes).RoomClassCodes(roomClassCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.GetRoomTypeTemplates``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetRoomTypeTemplates`: RoomTypeTemplatesDetails
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.GetRoomTypeTemplates`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetRoomTypeTemplatesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **includeInactive** | **bool** | Include inactive Room type in search result? | 
 **physical** | **bool** | Is it a physical sleep room type. | [default to false]
 **pseudo** | **bool** | Is it a pseudo room type. | [default to false]
 **summaryInfo** | **bool** |  | 
 **roomTypeCodes** | **[]string** |  | 
 **roomClassCodes** | **[]string** |  | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**RoomTypeTemplatesDetails**](RoomTypeTemplatesDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetRoomTypes

> RoomTypesDetails GetRoomTypes(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Accessible(accessible).IncludeInactive(includeInactive).Limit(limit).Offset(offset).Physical(physical).Pseudo(pseudo).SummaryInfo(summaryInfo).RoomTypeCodes(roomTypeCodes).RoomClassCodes(roomClassCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get hotel room types



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
    hotelId := "hotelId_example" // string | Unique ID of hotel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    accessible := true // bool | Flag to indicate if accessible room type should be fetched. (optional)
    includeInactive := true // bool | Flag to indicate if inactive room types should be included. (optional)
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    offset := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional) (default to 0)
    physical := true // bool | Is it a physical sleep room type. (optional)
    pseudo := true // bool | Is it a pseudo room type. (optional)
    summaryInfo := true // bool | Flag to indicate if summary or detailed information should be fetched. (optional)
    roomTypeCodes := []string{"Inner_example"} // []string |  (optional)
    roomClassCodes := []string{"Inner_example"} // []string |  (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.GetRoomTypes(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Accessible(accessible).IncludeInactive(includeInactive).Limit(limit).Offset(offset).Physical(physical).Pseudo(pseudo).SummaryInfo(summaryInfo).RoomTypeCodes(roomTypeCodes).RoomClassCodes(roomClassCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.GetRoomTypes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetRoomTypes`: RoomTypesDetails
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.GetRoomTypes`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of hotel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetRoomTypesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **accessible** | **bool** | Flag to indicate if accessible room type should be fetched. | 
 **includeInactive** | **bool** | Flag to indicate if inactive room types should be included. | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **offset** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [default to 0]
 **physical** | **bool** | Is it a physical sleep room type. | 
 **pseudo** | **bool** | Is it a pseudo room type. | 
 **summaryInfo** | **bool** | Flag to indicate if summary or detailed information should be fetched. | 
 **roomTypeCodes** | **[]string** |  | 
 **roomClassCodes** | **[]string** |  | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**RoomTypesDetails**](RoomTypesDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetRooms

> RoomsDetails GetRooms(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).Physical(physical).Pseudo(pseudo).RoomClassCodes(roomClassCodes).RoomTypeCodes(roomTypeCodes).Room(room).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get hotel rooms



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
    hotelId := "hotelId_example" // string | Unique ID of hotel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    offset := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional) (default to 0)
    physical := true // bool | Is it a physical room type. (optional)
    pseudo := true // bool | Is it a pseudo room type. (optional)
    roomClassCodes := []string{"Inner_example"} // []string |  (optional)
    roomTypeCodes := []string{"Inner_example"} // []string |  (optional)
    room := "room_example" // string | Room to be searched. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.GetRooms(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).Physical(physical).Pseudo(pseudo).RoomClassCodes(roomClassCodes).RoomTypeCodes(roomTypeCodes).Room(room).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.GetRooms``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetRooms`: RoomsDetails
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.GetRooms`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of hotel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetRoomsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **offset** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [default to 0]
 **physical** | **bool** | Is it a physical room type. | 
 **pseudo** | **bool** | Is it a pseudo room type. | 
 **roomClassCodes** | **[]string** |  | 
 **roomTypeCodes** | **[]string** |  | 
 **room** | **string** | Room to be searched. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**RoomsDetails**](RoomsDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetTemplateFloors

> TemplateFloorsDetails GetTemplateFloors(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Floors(floors).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get template floors



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
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    floors := []string{"Inner_example"} // []string |  (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.GetTemplateFloors(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Floors(floors).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.GetTemplateFloors``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetTemplateFloors`: TemplateFloorsDetails
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.GetTemplateFloors`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetTemplateFloorsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **floors** | **[]string** |  | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**TemplateFloorsDetails**](TemplateFloorsDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostHotelRoomMaintenanceReasons

> Status PostHotelRoomMaintenanceReasons(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelRoomMaintenanceReasonsCriteria(hotelRoomMaintenanceReasonsCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create Hotel Room Maintenance Reasons



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
    hotelId := "hotelId_example" // string | Unique ID of hotel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    hotelRoomMaintenanceReasonsCriteria := *openapiclient.NewPostHotelRoomMaintenanceReasonsRequest() // PostHotelRoomMaintenanceReasonsRequest | Request object for creating new room maintenance reasons for a hotel.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.PostHotelRoomMaintenanceReasons(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelRoomMaintenanceReasonsCriteria(hotelRoomMaintenanceReasonsCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.PostHotelRoomMaintenanceReasons``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostHotelRoomMaintenanceReasons`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.PostHotelRoomMaintenanceReasons`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of hotel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostHotelRoomMaintenanceReasonsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **hotelRoomMaintenanceReasonsCriteria** | [**PostHotelRoomMaintenanceReasonsRequest**](PostHotelRoomMaintenanceReasonsRequest.md) | Request object for creating new room maintenance reasons for a hotel. | 
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


## PostHousekeepingRoomSchedules

> Status PostHousekeepingRoomSchedules(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HousekeepingRoomSchedulesCriteria(housekeepingRoomSchedulesCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create housekeeping room schedules



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
    hotelId := "hotelId_example" // string | Unique ID of hotel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    housekeepingRoomSchedulesCriteria := *openapiclient.NewPostHousekeepingRoomSchedulesRequest() // PostHousekeepingRoomSchedulesRequest | Request object for associating housekeeping tasks and housekeeping codes to a room type.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.PostHousekeepingRoomSchedules(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HousekeepingRoomSchedulesCriteria(housekeepingRoomSchedulesCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.PostHousekeepingRoomSchedules``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostHousekeepingRoomSchedules`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.PostHousekeepingRoomSchedules`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of hotel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostHousekeepingRoomSchedulesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **housekeepingRoomSchedulesCriteria** | [**PostHousekeepingRoomSchedulesRequest**](PostHousekeepingRoomSchedulesRequest.md) | Request object for associating housekeeping tasks and housekeeping codes to a room type. | 
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


## PostHousekeepingSections

> Status PostHousekeepingSections(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HousekeepingSectionsCriteria(housekeepingSectionsCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create Housekeeping Sections



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
    hotelId := "hotelId_example" // string | Unique ID of hotel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    housekeepingSectionsCriteria := *openapiclient.NewPostHousekeepingSectionsRequest() // PostHousekeepingSectionsRequest | Add housekeeping section codes configurations for resort.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.PostHousekeepingSections(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HousekeepingSectionsCriteria(housekeepingSectionsCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.PostHousekeepingSections``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostHousekeepingSections`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.PostHousekeepingSections`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of hotel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostHousekeepingSectionsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **housekeepingSectionsCriteria** | [**PostHousekeepingSectionsRequest**](PostHousekeepingSectionsRequest.md) | Add housekeeping section codes configurations for resort. | 
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


## PostRoomTypeTemplates

> Status PostRoomTypeTemplates(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoomTypeTemplatesCriteria(roomTypeTemplatesCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create Room Type Templates



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
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    roomTypeTemplatesCriteria := *openapiclient.NewPostRoomTypeTemplatesRequest() // PostRoomTypeTemplatesRequest | Request object for creating a new Room Type Template.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.PostRoomTypeTemplates(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoomTypeTemplatesCriteria(roomTypeTemplatesCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.PostRoomTypeTemplates``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostRoomTypeTemplates`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.PostRoomTypeTemplates`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostRoomTypeTemplatesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **roomTypeTemplatesCriteria** | [**PostRoomTypeTemplatesRequest**](PostRoomTypeTemplatesRequest.md) | Request object for creating a new Room Type Template. | 
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


## PostRoomTypes

> Status PostRoomTypes(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoomTypesCriteria(roomTypesCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create a new room type



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
    hotelId := "hotelId_example" // string | Unique ID of hotel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    roomTypesCriteria := *openapiclient.NewPostRoomTypesRequest() // PostRoomTypesRequest | Request object for Creating a new Room Type.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.PostRoomTypes(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoomTypesCriteria(roomTypesCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.PostRoomTypes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostRoomTypes`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.PostRoomTypes`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of hotel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostRoomTypesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **roomTypesCriteria** | [**PostRoomTypesRequest**](PostRoomTypesRequest.md) | Request object for Creating a new Room Type. | 
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


## PostTemplateFloors

> Status PostTemplateFloors(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TemplateFloorsCriteria(templateFloorsCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create template floors



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
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    templateFloorsCriteria := *openapiclient.NewPostTemplateFloorsRequest() // PostTemplateFloorsRequest | Request object for creating floors at the template level.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.PostTemplateFloors(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TemplateFloorsCriteria(templateFloorsCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.PostTemplateFloors``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostTemplateFloors`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.PostTemplateFloors`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostTemplateFloorsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **templateFloorsCriteria** | [**PostTemplateFloorsRequest**](PostTemplateFloorsRequest.md) | Request object for creating floors at the template level. | 
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


## PutRoomTypeTemplates

> Status PutRoomTypeTemplates(ctx, roomTypeTemplatesId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoomTypeTemplatesToBeChanged(roomTypeTemplatesToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change Room Type Templates



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
    roomTypeTemplatesId := "roomTypeTemplatesId_example" // string | Unique ID of room type.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    roomTypeTemplatesToBeChanged := *openapiclient.NewPutRoomTypeTemplatesRequest() // PutRoomTypeTemplatesRequest | Request object for Modifying existing Room Type Templates.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.PutRoomTypeTemplates(context.Background(), roomTypeTemplatesId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoomTypeTemplatesToBeChanged(roomTypeTemplatesToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.PutRoomTypeTemplates``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutRoomTypeTemplates`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.PutRoomTypeTemplates`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**roomTypeTemplatesId** | **string** | Unique ID of room type. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutRoomTypeTemplatesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **roomTypeTemplatesToBeChanged** | [**PutRoomTypeTemplatesRequest**](PutRoomTypeTemplatesRequest.md) | Request object for Modifying existing Room Type Templates. | 
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


## PutRoomTypes

> Status PutRoomTypes(ctx, roomTypeId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoomTypesToBeChanged(roomTypesToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Update a Room Type



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
    roomTypeId := "roomTypeId_example" // string | Unique ID of room types.
    hotelId := "hotelId_example" // string | Unique ID of hotel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    roomTypesToBeChanged := *openapiclient.NewPutRoomTypesRequest() // PutRoomTypesRequest | Request object for Modifying Room Type.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.PutRoomTypes(context.Background(), roomTypeId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoomTypesToBeChanged(roomTypesToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.PutRoomTypes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutRoomTypes`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.PutRoomTypes`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**roomTypeId** | **string** | Unique ID of room types. | 
**hotelId** | **string** | Unique ID of hotel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutRoomTypesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **roomTypesToBeChanged** | [**PutRoomTypesRequest**](PutRoomTypesRequest.md) | Request object for Modifying Room Type. | 
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


## RemoveHotelRoomMaintenanceReasons

> Status RemoveHotelRoomMaintenanceReasons(ctx, reasonCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete Hotel Room Maintenance Reasons



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
    reasonCode := "reasonCode_example" // string | Unique Code of reason.
    hotelId := "hotelId_example" // string | Unique ID of hotel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.RemoveHotelRoomMaintenanceReasons(context.Background(), reasonCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.RemoveHotelRoomMaintenanceReasons``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `RemoveHotelRoomMaintenanceReasons`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.RemoveHotelRoomMaintenanceReasons`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reasonCode** | **string** | Unique Code of reason. | 
**hotelId** | **string** | Unique ID of hotel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiRemoveHotelRoomMaintenanceReasonsRequest struct via the builder pattern


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


## RemoveHousekeepingRoomSchedules

> Status RemoveHousekeepingRoomSchedules(ctx, roomScheduleId, roomTypeCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete housekeeping room schedules



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
    roomScheduleId := "roomScheduleId_example" // string | Unique ID of room scheduled.
    roomTypeCode := "roomTypeCode_example" // string | Unique ID of room Type Code.
    hotelId := "hotelId_example" // string | Unique ID of hotel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.RemoveHousekeepingRoomSchedules(context.Background(), roomScheduleId, roomTypeCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.RemoveHousekeepingRoomSchedules``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `RemoveHousekeepingRoomSchedules`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.RemoveHousekeepingRoomSchedules`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**roomScheduleId** | **string** | Unique ID of room scheduled. | 
**roomTypeCode** | **string** | Unique ID of room Type Code. | 
**hotelId** | **string** | Unique ID of hotel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiRemoveHousekeepingRoomSchedulesRequest struct via the builder pattern


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


## RemoveHousekeepingSections

> Status RemoveHousekeepingSections(ctx, code, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete Housekeeping Sections



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
    code := "code_example" // string | Unique Code of house keeping sections.
    hotelId := "hotelId_example" // string | Unique ID of hotel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.RemoveHousekeepingSections(context.Background(), code, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.RemoveHousekeepingSections``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `RemoveHousekeepingSections`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.RemoveHousekeepingSections`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**code** | **string** | Unique Code of house keeping sections. | 
**hotelId** | **string** | Unique ID of hotel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiRemoveHousekeepingSectionsRequest struct via the builder pattern


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


## RemoveTemplateFloors

> Status RemoveTemplateFloors(ctx, templateFloorsId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete template floors



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
    templateFloorsId := "templateFloorsId_example" // string | Unique ID of template floors.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.RemoveTemplateFloors(context.Background(), templateFloorsId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.RemoveTemplateFloors``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `RemoveTemplateFloors`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.RemoveTemplateFloors`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**templateFloorsId** | **string** | Unique ID of template floors. | 

### Other Parameters

Other parameters are passed through a pointer to a apiRemoveTemplateFloorsRequest struct via the builder pattern


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


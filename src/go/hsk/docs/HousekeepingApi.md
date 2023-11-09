# \HousekeepingApi

All URIs are relative to */hsk/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**AutoGenerateTaskSheets**](HousekeepingApi.md#AutoGenerateTaskSheets) | **Post** /hotels/{hotelId}/autoTaskSheets | Auto generate the task sheets
[**CancelServicingTaskRoom**](HousekeepingApi.md#CancelServicingTaskRoom) | **Put** /hotels/{hotelId}/rooms/{roomId}/sheets/{sheetNumber} | Cancel servicing task room
[**CompleteOutOfOrderRooms**](HousekeepingApi.md#CompleteOutOfOrderRooms) | **Put** /hotels/{hotelId}/rooms/outOfOrderRooms | Complete rooms Out Of Order
[**CompleteOutOfServiceRooms**](HousekeepingApi.md#CompleteOutOfServiceRooms) | **Put** /hotels/{hotelId}/rooms/outOfServiceRooms | Complete Rooms Out of Service
[**CompleteServicingTaskRoom**](HousekeepingApi.md#CompleteServicingTaskRoom) | **Put** /hotels/{hotelId}/rooms/{roomId}/sheets/{sheetNumber}/complete | Complete servicing task room
[**DeleteHouseKeepingTaskSheets**](HousekeepingApi.md#DeleteHouseKeepingTaskSheets) | **Delete** /hotels/{hotelId}/houseKeepingTasks/{taskCodesBreakOutId} | Delete all the hotel task sheets for an existing Task Sheet Set.
[**DeleteHousekeepingAttendantSchedule**](HousekeepingApi.md#DeleteHousekeepingAttendantSchedule) | **Delete** /hotels/{hotelId}/attendants/houseKeepingTasks | Delete housekeeping attendant schedule
[**DeleteReservationHousekeepingTasks**](HousekeepingApi.md#DeleteReservationHousekeepingTasks) | **Delete** /hotels/{hotelId}/reservations/{reservationId}/houseKeepingTaskSchedules | Delete reservation housekeeping task
[**DeleteRoomMaintenance**](HousekeepingApi.md#DeleteRoomMaintenance) | **Delete** /hotels/{hotelId}/maintenances/{mainteananceId} | Delete the maintenances for rooms
[**DeleteTaskSheet**](HousekeepingApi.md#DeleteTaskSheet) | **Delete** /hotels/{hotelId}/taskSheets | Delete the task sheet
[**DeleteTaskSheetRooms**](HousekeepingApi.md#DeleteTaskSheetRooms) | **Delete** /hotels/{hotelId}/taskSheets/rooms | Delete task sheet rooms
[**DeleteTaskSheetTemplate**](HousekeepingApi.md#DeleteTaskSheetTemplate) | **Delete** /hotels/{hotelId}/taskSheetTemplates/{taskSheetTemplateCode} | Delete task sheet templates
[**EditReservationHousekeepingTasks**](HousekeepingApi.md#EditReservationHousekeepingTasks) | **Put** /hotels/{hotelId}/reservations/{reservationId}/houseKeepingTaskSchedules | Update reservation housekeeping tasks
[**EndServiceBreak**](HousekeepingApi.md#EndServiceBreak) | **Put** /hotels/{hotelId}/taskSheets/{taskSheetNumber}/end | End the service break
[**GetFacilityForecast**](HousekeepingApi.md#GetFacilityForecast) | **Get** /hotels/{hotelId}/forecastTaskSchedules | Get facility forecast
[**GetGuestHousekeepingNotes**](HousekeepingApi.md#GetGuestHousekeepingNotes) | **Get** /hotels/{hotelId}/reservations/{reservationId}/houseKeepingNotes | Get the guest housekeeping instructions
[**GetHouseKeepingTasks**](HousekeepingApi.md#GetHouseKeepingTasks) | **Get** /hotels/{hotelId}/houseKeepingtasks | Get the existing task sheets
[**GetHousekeepingAttendantsSchedule**](HousekeepingApi.md#GetHousekeepingAttendantsSchedule) | **Get** /hotels/{hotelId}/attendants/houseKeepingTasks | Get the housekeeping attendants schedule
[**GetHousekeepingDiscrepancies**](HousekeepingApi.md#GetHousekeepingDiscrepancies) | **Get** /hotels/{hotelId}/housekeepingDiscrepancies | Get hotel housekeeping discrepant rooms
[**GetHousekeepingOverview**](HousekeepingApi.md#GetHousekeepingOverview) | **Get** /hotels/{hotelId}/housekeepingOverview | Get housekeeping rooms overview
[**GetOutOfOrderRooms**](HousekeepingApi.md#GetOutOfOrderRooms) | **Get** /hotels/{hotelId}/rooms/outOfOrderRooms | Get Out of Order Rooms
[**GetOutOfServiceRooms**](HousekeepingApi.md#GetOutOfServiceRooms) | **Get** /hotels/{hotelId}/rooms/outOfServiceRooms | Get Out of Service Rooms
[**GetReservationHousekeepingSchedule**](HousekeepingApi.md#GetReservationHousekeepingSchedule) | **Get** /hotels/{hotelId}/reservations/{reservationId}/houseKeepingTaskSchedules | Get reservation housekeeping schedule
[**GetRoomConditions**](HousekeepingApi.md#GetRoomConditions) | **Get** /hotels/{hotelId}/conditions | Get rooms condition
[**GetRoomMaintenance**](HousekeepingApi.md#GetRoomMaintenance) | **Get** /hotels/{hotelId}/rooms/maintenances | Get the maintenance rooms
[**GetTaskCompanion**](HousekeepingApi.md#GetTaskCompanion) | **Get** /hotels/{hotelId}/sheets/{sheetNumber} | Get task companion
[**GetTaskSheetTemplate**](HousekeepingApi.md#GetTaskSheetTemplate) | **Get** /hotels/{hotelId}/taskSheetTemplates | Get the task sheet templates
[**LockTaskSheet**](HousekeepingApi.md#LockTaskSheet) | **Put** /hotels/{hotelId}/taskSheets/{sheetNumber}/lock | Lock the task sheet
[**MergeTaskSheet**](HousekeepingApi.md#MergeTaskSheet) | **Post** /hotels/{hotelId}/taskSheets/{toTaskSequenceNo}/merge | Merge task sheet
[**MoveTaskRooms**](HousekeepingApi.md#MoveTaskRooms) | **Put** /hotels/{hotelId}/moveTaskRooms | Move the task rooms
[**PostHousekeepingAttendantSchedule**](HousekeepingApi.md#PostHousekeepingAttendantSchedule) | **Post** /hotels/{hotelId}/schedules/houseKeepingTasks | Create housekeeping attendant schedule
[**PostOutOfOrderRooms**](HousekeepingApi.md#PostOutOfOrderRooms) | **Post** /hotels/{hotelId}/rooms/outOfOrderRooms | Set multiple rooms to Out Of Order
[**PostOutOfServiceRooms**](HousekeepingApi.md#PostOutOfServiceRooms) | **Post** /hotels/{hotelId}/rooms/outOfServiceRooms | Set multiple rooms to Out Of Service
[**PostReservationHousekeepingTasks**](HousekeepingApi.md#PostReservationHousekeepingTasks) | **Post** /hotels/{hotelId}/reservations/{reservationId}/houseKeepingTaskSchedules | Create reservation housekeeping tasks
[**PostRoomMaintenance**](HousekeepingApi.md#PostRoomMaintenance) | **Post** /hotels/{hotelId}/rooms/maintenanceCodes/{maintenanceCode} | Create maintenances for rooms
[**PostTaskSheet**](HousekeepingApi.md#PostTaskSheet) | **Post** /hotels/{hotelId}/taskSheets | Create the task sheet
[**PostTaskSheetRooms**](HousekeepingApi.md#PostTaskSheetRooms) | **Post** /hotels/{hotelId}/taskSheets/rooms | Create the task sheet rooms
[**PutRoomCleaningPriority**](HousekeepingApi.md#PutRoomCleaningPriority) | **Delete** /hotels/{hotelId}/rooms/cleaningPriority | Delete room cleaning priority
[**PutRoomMaintenance**](HousekeepingApi.md#PutRoomMaintenance) | **Put** /hotels/{hotelId}/rooms/{roomId}/maintenances/{maintenanceId} | Change maintenances for rooms
[**PutRoomRelatedStatus**](HousekeepingApi.md#PutRoomRelatedStatus) | **Put** /hotels/{hotelId}/rooms/status | Update Housekeeping Room Status
[**PutTaskSheet**](HousekeepingApi.md#PutTaskSheet) | **Put** /hotels/{hotelId}/taskSheets | Change the task sheet
[**PutTaskSheetRooms**](HousekeepingApi.md#PutTaskSheetRooms) | **Put** /hotels/{hotelId}/taskSheets/rooms | Change the task sheet rooms
[**PutTaskSheetTemplate**](HousekeepingApi.md#PutTaskSheetTemplate) | **Put** /hotels/{hotelId}/taskSheetTemplates/{taskSheetTemplateCode} | Change the task sheet templates
[**ResetReservationHousekeepingSchedule**](HousekeepingApi.md#ResetReservationHousekeepingSchedule) | **Put** /hotels/{hotelId}/reservations/{reservationId}/houseKeepingTaskSchedules/reset | Reset reservation housekeeping schedule
[**ResolveRoomMaintenance**](HousekeepingApi.md#ResolveRoomMaintenance) | **Put** /hotels/{hotelId}/maintenances/{mainteananceId}/resolve | Resolve maintenances for rooms
[**SetGuestHousekeepingNotes**](HousekeepingApi.md#SetGuestHousekeepingNotes) | **Put** /hotels/{hotelId}/reservations/{reservationId}/houseKeepingNotes | Set guest housekeeping instructions
[**SetGuestHousekeepingServiceRequest**](HousekeepingApi.md#SetGuestHousekeepingServiceRequest) | **Put** /hotels/{hotelId}/serviceRequests | Set the Guest housekeeping service requests
[**SetRoomCleaningPriority**](HousekeepingApi.md#SetRoomCleaningPriority) | **Put** /hotels/{hotelId}/rooms/{roomId}/cleaningPriority | Set the room cleaning priority
[**SetRoomCondition**](HousekeepingApi.md#SetRoomCondition) | **Put** /hotels/{hotelId}/conditions | Set rooms condition
[**ShiftReservationHousekeepingSchedule**](HousekeepingApi.md#ShiftReservationHousekeepingSchedule) | **Put** /hotels/{hotelId}/reservations/{reservationId}/houseKeepingTaskSchedules/shift | Shift reservation housekeeping schedule
[**SkipServicingTaskRoom**](HousekeepingApi.md#SkipServicingTaskRoom) | **Put** /hotels/{hotelId}/rooms/{roomId}/sheets/{sheetNumber}/skip | Skip servicing task room
[**StartServiceBreak**](HousekeepingApi.md#StartServiceBreak) | **Put** /hotels/{hotelId}/taskSheets/{taskSheetNumber}/start | Start the service break
[**StartServicingTaskRoom**](HousekeepingApi.md#StartServicingTaskRoom) | **Put** /hotels/{hotelId}/rooms/{roomId}/sheets/{sheetNumber}/start | Start servicing task room
[**UnResolveRoomMaintenance**](HousekeepingApi.md#UnResolveRoomMaintenance) | **Put** /hotels/{hotelId}/maintenances/{mainteananceId}/unResolve | unResolve the maintenances for rooms
[**UnlockTaskSheet**](HousekeepingApi.md#UnlockTaskSheet) | **Put** /hotels/{hotelId}/taskSheets/{sheetNumber}/unlock | Unlock the task sheet



## AutoGenerateTaskSheets

> Status AutoGenerateTaskSheets(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TaskSheets(taskSheets).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Auto generate the task sheets



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/hsk"
)

func main() {
    hotelId := "hotelId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    taskSheets := *openapiclient.NewAutoGenerateTaskSheetsRequest() // AutoGenerateTaskSheetsRequest | Request for generating housekeeping Task Sheets automatically. To generate task sheets automatically the minimum required criteria is the Task Date, Task Code, Number of Attendants/Tasksheets required and the Room Statuses. Based on the criteria defined, task sheets will be created and the rooms will be assigned to the Tasksheets. Example: if the criteria defines that Dirty room status to be used to generate 5 sheets, then only those rooms which have the status = Dirty will be used and will be assigned to the 5 sheets.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HousekeepingApi.AutoGenerateTaskSheets(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TaskSheets(taskSheets).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HousekeepingApi.AutoGenerateTaskSheets``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `AutoGenerateTaskSheets`: Status
    fmt.Fprintf(os.Stdout, "Response from `HousekeepingApi.AutoGenerateTaskSheets`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiAutoGenerateTaskSheetsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **taskSheets** | [**AutoGenerateTaskSheetsRequest**](AutoGenerateTaskSheetsRequest.md) | Request for generating housekeeping Task Sheets automatically. To generate task sheets automatically the minimum required criteria is the Task Date, Task Code, Number of Attendants/Tasksheets required and the Room Statuses. Based on the criteria defined, task sheets will be created and the rooms will be assigned to the Tasksheets. Example: if the criteria defines that Dirty room status to be used to generate 5 sheets, then only those rooms which have the status &#x3D; Dirty will be used and will be assigned to the 5 sheets. | 
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


## CancelServicingTaskRoom

> CanceledServicingTaskRoom CancelServicingTaskRoom(ctx, sheetNumber, roomId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TaskRoom(taskRoom).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Cancel servicing task room



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/hsk"
)

func main() {
    sheetNumber := "sheetNumber_example" // string | 
    roomId := "roomId_example" // string | 
    hotelId := "hotelId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    taskRoom := *openapiclient.NewCancelServicingTaskRoomRequest() // CancelServicingTaskRoomRequest | Request to cancel the servicing of a task room.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HousekeepingApi.CancelServicingTaskRoom(context.Background(), sheetNumber, roomId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TaskRoom(taskRoom).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HousekeepingApi.CancelServicingTaskRoom``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CancelServicingTaskRoom`: CanceledServicingTaskRoom
    fmt.Fprintf(os.Stdout, "Response from `HousekeepingApi.CancelServicingTaskRoom`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sheetNumber** | **string** |  | 
**roomId** | **string** |  | 
**hotelId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiCancelServicingTaskRoomRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **taskRoom** | [**CancelServicingTaskRoomRequest**](CancelServicingTaskRoomRequest.md) | Request to cancel the servicing of a task room. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**CanceledServicingTaskRoom**](CanceledServicingTaskRoom.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## CompleteOutOfOrderRooms

> CompleteRoomRepairStatus CompleteOutOfOrderRooms(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CompleteRoomRepair(completeRoomRepair).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Complete rooms Out Of Order



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/hsk"
)

func main() {
    hotelId := "hotelId_example" // string | Hotel Code for which Out Of Order rooms needs to be returned to Clean, Inspected, Dirty or Pickup status.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    completeRoomRepair := *openapiclient.NewCompleteOutOfOrderRoomsRequest() // CompleteOutOfOrderRoomsRequest | 
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HousekeepingApi.CompleteOutOfOrderRooms(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CompleteRoomRepair(completeRoomRepair).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HousekeepingApi.CompleteOutOfOrderRooms``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CompleteOutOfOrderRooms`: CompleteRoomRepairStatus
    fmt.Fprintf(os.Stdout, "Response from `HousekeepingApi.CompleteOutOfOrderRooms`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Hotel Code for which Out Of Order rooms needs to be returned to Clean, Inspected, Dirty or Pickup status. | 

### Other Parameters

Other parameters are passed through a pointer to a apiCompleteOutOfOrderRoomsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **completeRoomRepair** | [**CompleteOutOfOrderRoomsRequest**](CompleteOutOfOrderRoomsRequest.md) |  | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**CompleteRoomRepairStatus**](CompleteRoomRepairStatus.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## CompleteOutOfServiceRooms

> CompleteRoomRepairStatus CompleteOutOfServiceRooms(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CompleteRoomRepair(completeRoomRepair).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Complete Rooms Out of Service



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/hsk"
)

func main() {
    hotelId := "hotelId_example" // string | Hotel Code for which Out Of Service rooms needs to be returned to Clean, Inspected, Dirty or Pickup status.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    completeRoomRepair := *openapiclient.NewCompleteOutOfServiceRoomsRequest() // CompleteOutOfServiceRoomsRequest | 
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HousekeepingApi.CompleteOutOfServiceRooms(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CompleteRoomRepair(completeRoomRepair).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HousekeepingApi.CompleteOutOfServiceRooms``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CompleteOutOfServiceRooms`: CompleteRoomRepairStatus
    fmt.Fprintf(os.Stdout, "Response from `HousekeepingApi.CompleteOutOfServiceRooms`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Hotel Code for which Out Of Service rooms needs to be returned to Clean, Inspected, Dirty or Pickup status. | 

### Other Parameters

Other parameters are passed through a pointer to a apiCompleteOutOfServiceRoomsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **completeRoomRepair** | [**CompleteOutOfServiceRoomsRequest**](CompleteOutOfServiceRoomsRequest.md) |  | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**CompleteRoomRepairStatus**](CompleteRoomRepairStatus.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## CompleteServicingTaskRoom

> CompletedServicingTaskRoom CompleteServicingTaskRoom(ctx, sheetNumber, roomId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TaskRoom(taskRoom).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Complete servicing task room



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/hsk"
)

func main() {
    sheetNumber := "sheetNumber_example" // string | 
    roomId := "roomId_example" // string | 
    hotelId := "hotelId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    taskRoom := *openapiclient.NewCancelServicingTaskRoomRequest() // CancelServicingTaskRoomRequest | Request to complete servicing of a task room. This will complete the servicing and set the end time and status to COMPLETED.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HousekeepingApi.CompleteServicingTaskRoom(context.Background(), sheetNumber, roomId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TaskRoom(taskRoom).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HousekeepingApi.CompleteServicingTaskRoom``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CompleteServicingTaskRoom`: CompletedServicingTaskRoom
    fmt.Fprintf(os.Stdout, "Response from `HousekeepingApi.CompleteServicingTaskRoom`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sheetNumber** | **string** |  | 
**roomId** | **string** |  | 
**hotelId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiCompleteServicingTaskRoomRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **taskRoom** | [**CancelServicingTaskRoomRequest**](CancelServicingTaskRoomRequest.md) | Request to complete servicing of a task room. This will complete the servicing and set the end time and status to COMPLETED. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**CompletedServicingTaskRoom**](CompletedServicingTaskRoom.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteHouseKeepingTaskSheets

> Status DeleteHouseKeepingTaskSheets(ctx, hotelId, taskCodesBreakOutId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete all the hotel task sheets for an existing Task Sheet Set.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/hsk"
)

func main() {
    hotelId := "hotelId_example" // string | Indicates Unique Hotel Code for which the task sheets will be deleted.
    taskCodesBreakOutId := "taskCodesBreakOutId_example" // string | Indicates Unique breakout ID for which the task sheets will be deleted.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HousekeepingApi.DeleteHouseKeepingTaskSheets(context.Background(), hotelId, taskCodesBreakOutId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HousekeepingApi.DeleteHouseKeepingTaskSheets``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteHouseKeepingTaskSheets`: Status
    fmt.Fprintf(os.Stdout, "Response from `HousekeepingApi.DeleteHouseKeepingTaskSheets`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Indicates Unique Hotel Code for which the task sheets will be deleted. | 
**taskCodesBreakOutId** | **string** | Indicates Unique breakout ID for which the task sheets will be deleted. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteHouseKeepingTaskSheetsRequest struct via the builder pattern


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


## DeleteHousekeepingAttendantSchedule

> Status DeleteHousekeepingAttendantSchedule(ctx, hotelId).ScheduleDate(scheduleDate).AttendantId(attendantId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete housekeeping attendant schedule



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/hsk"
)

func main() {
    hotelId := "hotelId_example" // string | 
    scheduleDate := time.Now() // string | Schedule date of attendants' assignment. Used when attendants to scheduled are of the same date.
    attendantId := []string{"Inner_example"} // []string | ID of the attendant.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HousekeepingApi.DeleteHousekeepingAttendantSchedule(context.Background(), hotelId).ScheduleDate(scheduleDate).AttendantId(attendantId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HousekeepingApi.DeleteHousekeepingAttendantSchedule``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteHousekeepingAttendantSchedule`: Status
    fmt.Fprintf(os.Stdout, "Response from `HousekeepingApi.DeleteHousekeepingAttendantSchedule`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteHousekeepingAttendantScheduleRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **scheduleDate** | **string** | Schedule date of attendants&#39; assignment. Used when attendants to scheduled are of the same date. | 
 **attendantId** | **[]string** | ID of the attendant. | 
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


## DeleteReservationHousekeepingTasks

> Status DeleteReservationHousekeepingTasks(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Customized(customized).CycleStartDay(cycleStartDay).EndDate(endDate).StartDate(startDate).FacilityTaskCode(facilityTaskCode).FacilityTaskDescription(facilityTaskDescription).FacilityTaskPriority(facilityTaskPriority).TaskDate(taskDate).TaskStartDate(taskStartDate).TaskEndDate(taskEndDate).StayPeriod(stayPeriod).Frequency(frequency).TaskCycleStartDay(taskCycleStartDay).RoomType(roomType).RoomId(roomId).FacilityCodes(facilityCodes).FacilityCodesDescription(facilityCodesDescription).FacilityCodesQuantity(facilityCodesQuantity).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete reservation housekeeping task



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/hsk"
)

func main() {
    reservationId := "reservationId_example" // string | 
    hotelId := "hotelId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    customized := true // bool | Signifies whether task has been customized or not. (optional)
    cycleStartDay := int32(56) // int32 | Signifies the shift of the housekeeping schedule. (optional)
    endDate := time.Now() // string | Date at which facility tasks stopped being retrieved. (optional)
    startDate := time.Now() // string | Date at which facility tasks started being retrieved. (optional)
    facilityTaskCode := "facilityTaskCode_example" // string | Code of the housekeeping task. (optional)
    facilityTaskDescription := "facilityTaskDescription_example" // string | Facility task description. (optional)
    facilityTaskPriority := int32(56) // int32 | Signifies the priority of the task. (optional)
    taskDate := []string{time.Now()} // []string | A reservation date on which task must occur. (optional)
    taskStartDate := []string{time.Now()} // []string | Date on which the task needs to start being performed. (optional)
    taskEndDate := []string{time.Now()} // []string | Date on which task will stop being performed. (optional)
    stayPeriod := []string{"StayPeriod_example"} // []string | Simple type for controlling the fetch operations of the housekeeping schedule request. (optional)
    frequency := []int32{int32(123)} // []int32 | Signifies frequency(i.e. every 2 days) with which task is to be performed. (optional)
    taskCycleStartDay := []int32{int32(123)} // []int32 | Signifies offset(in days) i.e. start on 3rd day from arrival. (optional)
    roomType := []string{"Inner_example"} // []string | Signifies the room type for which task is being performed . (optional)
    roomId := []string{"Inner_example"} // []string | Room number at which task is to be performed. (optional)
    facilityCodes := []string{"Inner_example"} // []string | Facility code value. (optional)
    facilityCodesDescription := []string{"Inner_example"} // []string | Facility Code. (optional)
    facilityCodesQuantity := []int32{int32(123)} // []int32 | Signifies the quantity. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HousekeepingApi.DeleteReservationHousekeepingTasks(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Customized(customized).CycleStartDay(cycleStartDay).EndDate(endDate).StartDate(startDate).FacilityTaskCode(facilityTaskCode).FacilityTaskDescription(facilityTaskDescription).FacilityTaskPriority(facilityTaskPriority).TaskDate(taskDate).TaskStartDate(taskStartDate).TaskEndDate(taskEndDate).StayPeriod(stayPeriod).Frequency(frequency).TaskCycleStartDay(taskCycleStartDay).RoomType(roomType).RoomId(roomId).FacilityCodes(facilityCodes).FacilityCodesDescription(facilityCodesDescription).FacilityCodesQuantity(facilityCodesQuantity).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HousekeepingApi.DeleteReservationHousekeepingTasks``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteReservationHousekeepingTasks`: Status
    fmt.Fprintf(os.Stdout, "Response from `HousekeepingApi.DeleteReservationHousekeepingTasks`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** |  | 
**hotelId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteReservationHousekeepingTasksRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **customized** | **bool** | Signifies whether task has been customized or not. | 
 **cycleStartDay** | **int32** | Signifies the shift of the housekeeping schedule. | 
 **endDate** | **string** | Date at which facility tasks stopped being retrieved. | 
 **startDate** | **string** | Date at which facility tasks started being retrieved. | 
 **facilityTaskCode** | **string** | Code of the housekeeping task. | 
 **facilityTaskDescription** | **string** | Facility task description. | 
 **facilityTaskPriority** | **int32** | Signifies the priority of the task. | 
 **taskDate** | **[]string** | A reservation date on which task must occur. | 
 **taskStartDate** | **[]string** | Date on which the task needs to start being performed. | 
 **taskEndDate** | **[]string** | Date on which task will stop being performed. | 
 **stayPeriod** | **[]string** | Simple type for controlling the fetch operations of the housekeeping schedule request. | 
 **frequency** | **[]int32** | Signifies frequency(i.e. every 2 days) with which task is to be performed. | 
 **taskCycleStartDay** | **[]int32** | Signifies offset(in days) i.e. start on 3rd day from arrival. | 
 **roomType** | **[]string** | Signifies the room type for which task is being performed . | 
 **roomId** | **[]string** | Room number at which task is to be performed. | 
 **facilityCodes** | **[]string** | Facility code value. | 
 **facilityCodesDescription** | **[]string** | Facility Code. | 
 **facilityCodesQuantity** | **[]int32** | Signifies the quantity. | 
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


## DeleteRoomMaintenance

> Status DeleteRoomMaintenance(ctx, mainteananceId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete the maintenances for rooms



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/hsk"
)

func main() {
    mainteananceId := "mainteananceId_example" // string | 
    hotelId := "hotelId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HousekeepingApi.DeleteRoomMaintenance(context.Background(), mainteananceId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HousekeepingApi.DeleteRoomMaintenance``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteRoomMaintenance`: Status
    fmt.Fprintf(os.Stdout, "Response from `HousekeepingApi.DeleteRoomMaintenance`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**mainteananceId** | **string** |  | 
**hotelId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteRoomMaintenanceRequest struct via the builder pattern


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


## DeleteTaskSheet

> Status DeleteTaskSheet(ctx, hotelId).SheetNumber(sheetNumber).TaskCodes(taskCodes).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Date(date).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete the task sheet



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/hsk"
)

func main() {
    hotelId := "hotelId_example" // string | 
    sheetNumber := int32(56) // int32 | The Task Sheet number. This will be a sequential number for the task sheets generated for a particular Task Code.
    taskCodes := []string{"Inner_example"} // []string | The Code for the task.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    date := time.Now() // string | The date for which the task sheet applies. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HousekeepingApi.DeleteTaskSheet(context.Background(), hotelId).SheetNumber(sheetNumber).TaskCodes(taskCodes).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Date(date).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HousekeepingApi.DeleteTaskSheet``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteTaskSheet`: Status
    fmt.Fprintf(os.Stdout, "Response from `HousekeepingApi.DeleteTaskSheet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteTaskSheetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **sheetNumber** | **int32** | The Task Sheet number. This will be a sequential number for the task sheets generated for a particular Task Code. | 
 **taskCodes** | **[]string** | The Code for the task. | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **date** | **string** | The date for which the task sheet applies. | 
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


## DeleteTaskSheetRooms

> Status DeleteTaskSheetRooms(ctx, hotelId).SheetNumber(sheetNumber).TaskCodes(taskCodes).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Date(date).RoomId(roomId).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete task sheet rooms



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/hsk"
)

func main() {
    hotelId := "hotelId_example" // string | 
    sheetNumber := int32(56) // int32 | The Task Sheet number. This will be a sequential number for the task sheets generated for a particular Task Code.
    taskCodes := []string{"Inner_example"} // []string | The Code for the task.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    date := time.Now() // string | The date for which the task sheet applies. (optional)
    roomId := []string{"Inner_example"} // []string | Code of the room. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HousekeepingApi.DeleteTaskSheetRooms(context.Background(), hotelId).SheetNumber(sheetNumber).TaskCodes(taskCodes).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Date(date).RoomId(roomId).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HousekeepingApi.DeleteTaskSheetRooms``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteTaskSheetRooms`: Status
    fmt.Fprintf(os.Stdout, "Response from `HousekeepingApi.DeleteTaskSheetRooms`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteTaskSheetRoomsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **sheetNumber** | **int32** | The Task Sheet number. This will be a sequential number for the task sheets generated for a particular Task Code. | 
 **taskCodes** | **[]string** | The Code for the task. | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **date** | **string** | The date for which the task sheet applies. | 
 **roomId** | **[]string** | Code of the room. | 
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


## DeleteTaskSheetTemplate

> Status DeleteTaskSheetTemplate(ctx, taskSheetTemplateCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete task sheet templates



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/hsk"
)

func main() {
    taskSheetTemplateCode := "taskSheetTemplateCode_example" // string | 
    hotelId := "hotelId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HousekeepingApi.DeleteTaskSheetTemplate(context.Background(), taskSheetTemplateCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HousekeepingApi.DeleteTaskSheetTemplate``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteTaskSheetTemplate`: Status
    fmt.Fprintf(os.Stdout, "Response from `HousekeepingApi.DeleteTaskSheetTemplate`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**taskSheetTemplateCode** | **string** |  | 
**hotelId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteTaskSheetTemplateRequest struct via the builder pattern


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


## EditReservationHousekeepingTasks

> Schedule EditReservationHousekeepingTasks(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Schedule(schedule).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Update reservation housekeeping tasks



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/hsk"
)

func main() {
    reservationId := "reservationId_example" // string | 
    hotelId := "hotelId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    schedule := *openapiclient.NewEditReservationHousekeepingTasksRequest() // EditReservationHousekeepingTasksRequest | A schedule with task(s) to be edited for the given reservation.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HousekeepingApi.EditReservationHousekeepingTasks(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Schedule(schedule).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HousekeepingApi.EditReservationHousekeepingTasks``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `EditReservationHousekeepingTasks`: Schedule
    fmt.Fprintf(os.Stdout, "Response from `HousekeepingApi.EditReservationHousekeepingTasks`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** |  | 
**hotelId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiEditReservationHousekeepingTasksRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **schedule** | [**EditReservationHousekeepingTasksRequest**](EditReservationHousekeepingTasksRequest.md) | A schedule with task(s) to be edited for the given reservation. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Schedule**](Schedule.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## EndServiceBreak

> EndedServiceBreak EndServiceBreak(ctx, taskSheetNumber, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TaskRoom(taskRoom).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

End the service break



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/hsk"
)

func main() {
    taskSheetNumber := "taskSheetNumber_example" // string | 
    hotelId := "hotelId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    taskRoom := *openapiclient.NewCancelServicingTaskRoomRequest() // CancelServicingTaskRoomRequest | Request to end service break.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HousekeepingApi.EndServiceBreak(context.Background(), taskSheetNumber, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TaskRoom(taskRoom).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HousekeepingApi.EndServiceBreak``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `EndServiceBreak`: EndedServiceBreak
    fmt.Fprintf(os.Stdout, "Response from `HousekeepingApi.EndServiceBreak`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**taskSheetNumber** | **string** |  | 
**hotelId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiEndServiceBreakRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **taskRoom** | [**CancelServicingTaskRoomRequest**](CancelServicingTaskRoomRequest.md) | Request to end service break. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**EndedServiceBreak**](EndedServiceBreak.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetFacilityForecast

> FacilityForecast GetFacilityForecast(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).StartDate(startDate).EndDate(endDate).Duration(duration).Codes(codes).UsePriority(usePriority).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get facility forecast



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/hsk"
)

func main() {
    hotelId := "hotelId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    startDate := time.Now() // string |  (optional)
    endDate := time.Now() // string |  (optional)
    duration := "duration_example" // string |  (optional)
    codes := []string{"Inner_example"} // []string |  (optional)
    usePriority := true // bool | . (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HousekeepingApi.GetFacilityForecast(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).StartDate(startDate).EndDate(endDate).Duration(duration).Codes(codes).UsePriority(usePriority).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HousekeepingApi.GetFacilityForecast``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetFacilityForecast`: FacilityForecast
    fmt.Fprintf(os.Stdout, "Response from `HousekeepingApi.GetFacilityForecast`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetFacilityForecastRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **startDate** | **string** |  | 
 **endDate** | **string** |  | 
 **duration** | **string** |  | 
 **codes** | **[]string** |  | 
 **usePriority** | **bool** | . | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**FacilityForecast**](FacilityForecast.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetGuestHousekeepingNotes

> GuestHousekeepingInstructions GetGuestHousekeepingNotes(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ReservationIdContext(reservationIdContext).ReservationIdType(reservationIdType).Room(room).HousekeepingInstruction(housekeepingInstruction).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get the guest housekeeping instructions



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/hsk"
)

func main() {
    reservationId := "reservationId_example" // string | 
    hotelId := "hotelId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    reservationIdContext := "reservationIdContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    reservationIdType := "reservationIdType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    room := "room_example" // string | Room to which housekeeping record belongs. (optional)
    housekeepingInstruction := []string{"HousekeepingInstruction_example"} // []string | Simple type for housekeeping instructions that can be used in requests for partial operations. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HousekeepingApi.GetGuestHousekeepingNotes(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ReservationIdContext(reservationIdContext).ReservationIdType(reservationIdType).Room(room).HousekeepingInstruction(housekeepingInstruction).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HousekeepingApi.GetGuestHousekeepingNotes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetGuestHousekeepingNotes`: GuestHousekeepingInstructions
    fmt.Fprintf(os.Stdout, "Response from `HousekeepingApi.GetGuestHousekeepingNotes`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** |  | 
**hotelId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetGuestHousekeepingNotesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **reservationIdContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **reservationIdType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **room** | **string** | Room to which housekeeping record belongs. | 
 **housekeepingInstruction** | **[]string** | Simple type for housekeeping instructions that can be used in requests for partial operations. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**GuestHousekeepingInstructions**](GuestHousekeepingInstructions.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetHouseKeepingTasks

> TaskAssignment GetHouseKeepingTasks(ctx, hotelId).TaskDate(taskDate).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AttendantInRoomOnly(attendantInRoomOnly).GenerateCleaningSequence(generateCleaningSequence).IncludeReservationInfo(includeReservationInfo).IncludeTaskSheetDetails(includeTaskSheetDetails).IncludeTaskSheetsSummary(includeTaskSheetsSummary).SortByCleaningSequence(sortByCleaningSequence).TaskCodes(taskCodes).TaskHotelCodes(taskHotelCodes).TaskSequences(taskSequences).TaskDescriptions(taskDescriptions).TaskInstructions(taskInstructions).FacilityDepartureTask(facilityDepartureTask).LinenChange(linenChange).TaskCodesBreakOutId(taskCodesBreakOutId).TaskCodesBreakOutIdContext(taskCodesBreakOutIdContext).TaskCodesBreakOutIdType(taskCodesBreakOutIdType).AttendantId(attendantId).TaskSheetNumber(taskSheetNumber).HousekeepingRoomStatus(housekeepingRoomStatus).GuestService(guestService).RoomStatusToChange(roomStatusToChange).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get the existing task sheets



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/hsk"
)

func main() {
    hotelId := "hotelId_example" // string | 
    taskDate := time.Now() // string | Date for which the Task Assignment information is required.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    attendantInRoomOnly := true // bool | Query only rooms with attendant working in them. (optional)
    generateCleaningSequence := true // bool | Setting this to true will generate a sequence based on the current condition of the room for cleaning. This sequence would be the same sequence with which the Task Companion works. (optional)
    includeReservationInfo := true // bool | Setting this to true will include reservation information associated to the room. (optional)
    includeTaskSheetDetails := true // bool | This will include room details for the Task Sheets. If summary information is only required, then this could be set to false. If a Task Sheet Number is included in the Search and this flag is set to true, then the details for that particular Task Sheet will be returned. For all other task sheets, the IncludeTaskSheetsSummary will determine if Summary details are required or not. (optional)
    includeTaskSheetsSummary := true // bool | Setting this to true, will return Summary information for the task sheets required. If a Task Sheet Number is included in the Search and IncludeTaskSheetDetails is set to false and IncludeTaskSheetsSummary is false, then only the Summary information for that particular task sheet will be returned. IncludeTaskSheetDetails = True, IncludeTaskSheetsSummary = True : includes all task sheets details and summary IncludeTaskSheetDetails = false, IncludeTaskSheetsSummary = True : includes only summary IncludeTaskSheetDetails = false, IncludeTaskSheetsSummary = false, Task Sheet No =null : no task sheet detail or summary for any of the tasksheets. Returns the Task Assignnment header. IncludeTaskSheetDetails = True, IncludeTaskSheetsSummary = True, Task Sheet No = XX : includes task sheets detail for XX and summary for others. IncludeTaskSheetDetails = false, IncludeTaskSheetsSummary = True, Task Sheet No = XX : includes summary for all including XX. IncludeTaskSheetDetails = false, IncludeTaskSheetsSummary = false, Task Sheet No = XX : includes summary for XX. No information for others. (optional)
    sortByCleaningSequence := true // bool | The rooms in the task sheet would be sorted with the cleaning sequence. The normal sort would be done based on the Default Sequence. (optional)
    taskCodes := []string{"Inner_example"} // []string | The Code for the task. (optional)
    taskHotelCodes := []string{"Inner_example"} // []string | Property for which the Task Assignment information is required. (optional)
    taskSequences := []int32{int32(123)} // []int32 | Ordering sequence for display. (optional)
    taskDescriptions := []string{"Inner_example"} // []string | Description of the Task Code. (optional)
    taskInstructions := []string{"Inner_example"} // []string | Instructions for this Task Code. (optional)
    facilityDepartureTask := []bool{false} // []bool | Indicates if this task code is the default departure task for Facility Tasks. This requires (optional)
    linenChange := []bool{false} // []bool | Indicates if a linen change is necessary. (optional)
    taskCodesBreakOutId := "taskCodesBreakOutId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    taskCodesBreakOutIdContext := "taskCodesBreakOutIdContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    taskCodesBreakOutIdType := "taskCodesBreakOutIdType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    attendantId := "attendantId_example" // string | Attendant ID for which the Task Sheets are assigned. (optional)
    taskSheetNumber := []int32{int32(123)} // []int32 | Specific Task Sheet number for which the information is required. (optional)
    housekeepingRoomStatus := []string{"HousekeepingRoomStatus_example"} // []string | Simple type for room status instructions to be used in requests for fetching housekeeping rooms. Valid status values are Clean, Dirty, Pickup, Inspected, OutOfOrder, OutOfService. (optional)
    guestService := []string{"GuestService_example"} // []string | Possible values for the Guest Service Status. (optional)
    roomStatusToChange := []string{"RoomStatusToChange_example"} // []string | Simple type for room status instructions to be used in requests for fetching housekeeping rooms. Valid status values are Clean, Dirty, Pickup, Inspected, OutOfOrder, OutOfService. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HousekeepingApi.GetHouseKeepingTasks(context.Background(), hotelId).TaskDate(taskDate).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AttendantInRoomOnly(attendantInRoomOnly).GenerateCleaningSequence(generateCleaningSequence).IncludeReservationInfo(includeReservationInfo).IncludeTaskSheetDetails(includeTaskSheetDetails).IncludeTaskSheetsSummary(includeTaskSheetsSummary).SortByCleaningSequence(sortByCleaningSequence).TaskCodes(taskCodes).TaskHotelCodes(taskHotelCodes).TaskSequences(taskSequences).TaskDescriptions(taskDescriptions).TaskInstructions(taskInstructions).FacilityDepartureTask(facilityDepartureTask).LinenChange(linenChange).TaskCodesBreakOutId(taskCodesBreakOutId).TaskCodesBreakOutIdContext(taskCodesBreakOutIdContext).TaskCodesBreakOutIdType(taskCodesBreakOutIdType).AttendantId(attendantId).TaskSheetNumber(taskSheetNumber).HousekeepingRoomStatus(housekeepingRoomStatus).GuestService(guestService).RoomStatusToChange(roomStatusToChange).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HousekeepingApi.GetHouseKeepingTasks``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetHouseKeepingTasks`: TaskAssignment
    fmt.Fprintf(os.Stdout, "Response from `HousekeepingApi.GetHouseKeepingTasks`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetHouseKeepingTasksRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **taskDate** | **string** | Date for which the Task Assignment information is required. | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **attendantInRoomOnly** | **bool** | Query only rooms with attendant working in them. | 
 **generateCleaningSequence** | **bool** | Setting this to true will generate a sequence based on the current condition of the room for cleaning. This sequence would be the same sequence with which the Task Companion works. | 
 **includeReservationInfo** | **bool** | Setting this to true will include reservation information associated to the room. | 
 **includeTaskSheetDetails** | **bool** | This will include room details for the Task Sheets. If summary information is only required, then this could be set to false. If a Task Sheet Number is included in the Search and this flag is set to true, then the details for that particular Task Sheet will be returned. For all other task sheets, the IncludeTaskSheetsSummary will determine if Summary details are required or not. | 
 **includeTaskSheetsSummary** | **bool** | Setting this to true, will return Summary information for the task sheets required. If a Task Sheet Number is included in the Search and IncludeTaskSheetDetails is set to false and IncludeTaskSheetsSummary is false, then only the Summary information for that particular task sheet will be returned. IncludeTaskSheetDetails &#x3D; True, IncludeTaskSheetsSummary &#x3D; True : includes all task sheets details and summary IncludeTaskSheetDetails &#x3D; false, IncludeTaskSheetsSummary &#x3D; True : includes only summary IncludeTaskSheetDetails &#x3D; false, IncludeTaskSheetsSummary &#x3D; false, Task Sheet No &#x3D;null : no task sheet detail or summary for any of the tasksheets. Returns the Task Assignnment header. IncludeTaskSheetDetails &#x3D; True, IncludeTaskSheetsSummary &#x3D; True, Task Sheet No &#x3D; XX : includes task sheets detail for XX and summary for others. IncludeTaskSheetDetails &#x3D; false, IncludeTaskSheetsSummary &#x3D; True, Task Sheet No &#x3D; XX : includes summary for all including XX. IncludeTaskSheetDetails &#x3D; false, IncludeTaskSheetsSummary &#x3D; false, Task Sheet No &#x3D; XX : includes summary for XX. No information for others. | 
 **sortByCleaningSequence** | **bool** | The rooms in the task sheet would be sorted with the cleaning sequence. The normal sort would be done based on the Default Sequence. | 
 **taskCodes** | **[]string** | The Code for the task. | 
 **taskHotelCodes** | **[]string** | Property for which the Task Assignment information is required. | 
 **taskSequences** | **[]int32** | Ordering sequence for display. | 
 **taskDescriptions** | **[]string** | Description of the Task Code. | 
 **taskInstructions** | **[]string** | Instructions for this Task Code. | 
 **facilityDepartureTask** | **[]bool** | Indicates if this task code is the default departure task for Facility Tasks. This requires | 
 **linenChange** | **[]bool** | Indicates if a linen change is necessary. | 
 **taskCodesBreakOutId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **taskCodesBreakOutIdContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **taskCodesBreakOutIdType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **attendantId** | **string** | Attendant ID for which the Task Sheets are assigned. | 
 **taskSheetNumber** | **[]int32** | Specific Task Sheet number for which the information is required. | 
 **housekeepingRoomStatus** | **[]string** | Simple type for room status instructions to be used in requests for fetching housekeeping rooms. Valid status values are Clean, Dirty, Pickup, Inspected, OutOfOrder, OutOfService. | 
 **guestService** | **[]string** | Possible values for the Guest Service Status. | 
 **roomStatusToChange** | **[]string** | Simple type for room status instructions to be used in requests for fetching housekeeping rooms. Valid status values are Clean, Dirty, Pickup, Inspected, OutOfOrder, OutOfService. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**TaskAssignment**](TaskAssignment.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetHousekeepingAttendantsSchedule

> AttendantSchedule GetHousekeepingAttendantsSchedule(ctx, hotelId).ScheduleStartDate(scheduleStartDate).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ScheduleEndDate(scheduleEndDate).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get the housekeeping attendants schedule



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/hsk"
)

func main() {
    hotelId := "hotelId_example" // string | 
    scheduleStartDate := time.Now() // string | The starting value of the date range.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    scheduleEndDate := time.Now() // string | The ending value of the date range. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HousekeepingApi.GetHousekeepingAttendantsSchedule(context.Background(), hotelId).ScheduleStartDate(scheduleStartDate).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ScheduleEndDate(scheduleEndDate).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HousekeepingApi.GetHousekeepingAttendantsSchedule``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetHousekeepingAttendantsSchedule`: AttendantSchedule
    fmt.Fprintf(os.Stdout, "Response from `HousekeepingApi.GetHousekeepingAttendantsSchedule`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetHousekeepingAttendantsScheduleRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **scheduleStartDate** | **string** | The starting value of the date range. | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **scheduleEndDate** | **string** | The ending value of the date range. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**AttendantSchedule**](AttendantSchedule.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetHousekeepingDiscrepancies

> Rooms GetHousekeepingDiscrepancies(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoomDiscrepancyStatus(roomDiscrepancyStatus).FromRoomNumber(fromRoomNumber).ToRoomNumber(toRoomNumber).RoomClass(roomClass).HousekeepingEndDate(housekeepingEndDate).HousekeepingStartDate(housekeepingStartDate).Floor(floor).DueOut(dueOut).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get hotel housekeeping discrepant rooms



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/hsk"
)

func main() {
    hotelId := "hotelId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    roomDiscrepancyStatus := []string{"RoomDiscrepancyStatus_example"} // []string | Simple type for discrepant room status instructions to be used in requests for fetching housekeeping and front office room discrepancy. Valid values are Sleep, Skip, Person Discrepancy, Due Out Only. (optional)
    fromRoomNumber := "fromRoomNumber_example" // string |  (optional)
    toRoomNumber := "toRoomNumber_example" // string |  (optional)
    roomClass := []string{"Inner_example"} // []string | Room Class of the Room. (optional)
    housekeepingEndDate := time.Now() // string | The ending value of the date range. (optional)
    housekeepingStartDate := time.Now() // string | The starting value of the date range. (optional)
    floor := []string{"Inner_example"} // []string | The floor of room to be fetched. (optional)
    dueOut := true // bool | List the rooms based on the flag DUE OUT for departure only. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HousekeepingApi.GetHousekeepingDiscrepancies(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoomDiscrepancyStatus(roomDiscrepancyStatus).FromRoomNumber(fromRoomNumber).ToRoomNumber(toRoomNumber).RoomClass(roomClass).HousekeepingEndDate(housekeepingEndDate).HousekeepingStartDate(housekeepingStartDate).Floor(floor).DueOut(dueOut).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HousekeepingApi.GetHousekeepingDiscrepancies``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetHousekeepingDiscrepancies`: Rooms
    fmt.Fprintf(os.Stdout, "Response from `HousekeepingApi.GetHousekeepingDiscrepancies`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetHousekeepingDiscrepanciesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **roomDiscrepancyStatus** | **[]string** | Simple type for discrepant room status instructions to be used in requests for fetching housekeeping and front office room discrepancy. Valid values are Sleep, Skip, Person Discrepancy, Due Out Only. | 
 **fromRoomNumber** | **string** |  | 
 **toRoomNumber** | **string** |  | 
 **roomClass** | **[]string** | Room Class of the Room. | 
 **housekeepingEndDate** | **string** | The ending value of the date range. | 
 **housekeepingStartDate** | **string** | The starting value of the date range. | 
 **floor** | **[]string** | The floor of room to be fetched. | 
 **dueOut** | **bool** | List the rooms based on the flag DUE OUT for departure only. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Rooms**](Rooms.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetHousekeepingOverview

> HousekeepingBoard GetHousekeepingOverview(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).HousekeepingRoomStatus(housekeepingRoomStatus).FrontOfficeRoomStatus(frontOfficeRoomStatus).TurndownStatus(turndownStatus).RoomParityStatus(roomParityStatus).ServiceRequestStatus(serviceRequestStatus).RoomAssignmentStatus(roomAssignmentStatus).FetchInstructions(fetchInstructions).FromRoomNumber(fromRoomNumber).ToRoomNumber(toRoomNumber).Floor(floor).RoomType(roomType).RoomClass(roomClass).Building(building).RoomFeatures(roomFeatures).DaySection(daySection).EveningSection(eveningSection).ReservationStatus(reservationStatus).GuestServiceRequest(guestServiceRequest).RoomIdText(roomIdText).ExcludeCombo(excludeCombo).CleaningPriorityOnly(cleaningPriorityOnly).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get housekeeping rooms overview



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/hsk"
)

func main() {
    hotelId := "hotelId_example" // string | Hotel Code for which Housekeeping overview needs to be fetched
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    offset := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional) (default to 0)
    housekeepingRoomStatus := []string{"HousekeepingRoomStatus_example"} // []string | Simple type for room status instructions to be used in requests for fetching housekeeping rooms. Valid status values are Clean, Dirty, Pickup, Inspected, OutOfOrder, OutOfService. (optional)
    frontOfficeRoomStatus := []string{"FrontOfficeRoomStatus_example"} // []string | Simple type for front office room status instructions to be used in requests for fetching housekeeping rooms. Valid values are Vacant and Occupied. (optional)
    turndownStatus := []string{"TurndownStatus_example"} // []string | Simple type for turndown status instructions to be used in requests for fetching housekeeping rooms. Valid status values are Required, Not Required and Completed. (optional)
    roomParityStatus := []string{"RoomParityStatus_example"} // []string | Simple type for room parity instructions to be used in requests for fetching housekeeping rooms. Valid status values are Odd and Even. (optional)
    serviceRequestStatus := []string{"ServiceRequestStatus_example"} // []string |  (optional)
    roomAssignmentStatus := []string{"RoomAssignmentStatus_example"} // []string |  (optional)
    fetchInstructions := []string{"FetchInstructions_example"} // []string | Simple type for housekeeping instructions that can be used in requests for partial operations. (optional)
    fromRoomNumber := "fromRoomNumber_example" // string |  (optional)
    toRoomNumber := "toRoomNumber_example" // string |  (optional)
    floor := []string{"Inner_example"} // []string | The floor of room to be fetched. (optional)
    roomType := []string{"Inner_example"} // []string | Room Type of the Room. (optional)
    roomClass := []string{"Inner_example"} // []string | Room Class of the Room. (optional)
    building := []string{"Inner_example"} // []string | Building of the Room. (optional)
    roomFeatures := []string{"Inner_example"} // []string | Features of the Room. (optional)
    daySection := []string{"Inner_example"} // []string | AM Sections of the Room. (optional)
    eveningSection := []string{"Inner_example"} // []string | PM Sections of the Room. (optional)
    reservationStatus := []string{"Inner_example"} // []string | The status of the reservation to which this Room is assigned. (optional)
    guestServiceRequest := "guestServiceRequest_example" // string | Possible values for the Guest Service Status. (optional)
    roomIdText := "roomIdText_example" // string | Wild Card entry for Room numbers to be Fetched. (optional)
    excludeCombo := true // bool | Indicates we need to exclude the combo rooms while fetching the housekeeping details. (optional)
    cleaningPriorityOnly := true // bool | Determines whether fetching cleaning priority rooms only. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HousekeepingApi.GetHousekeepingOverview(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).HousekeepingRoomStatus(housekeepingRoomStatus).FrontOfficeRoomStatus(frontOfficeRoomStatus).TurndownStatus(turndownStatus).RoomParityStatus(roomParityStatus).ServiceRequestStatus(serviceRequestStatus).RoomAssignmentStatus(roomAssignmentStatus).FetchInstructions(fetchInstructions).FromRoomNumber(fromRoomNumber).ToRoomNumber(toRoomNumber).Floor(floor).RoomType(roomType).RoomClass(roomClass).Building(building).RoomFeatures(roomFeatures).DaySection(daySection).EveningSection(eveningSection).ReservationStatus(reservationStatus).GuestServiceRequest(guestServiceRequest).RoomIdText(roomIdText).ExcludeCombo(excludeCombo).CleaningPriorityOnly(cleaningPriorityOnly).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HousekeepingApi.GetHousekeepingOverview``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetHousekeepingOverview`: HousekeepingBoard
    fmt.Fprintf(os.Stdout, "Response from `HousekeepingApi.GetHousekeepingOverview`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Hotel Code for which Housekeeping overview needs to be fetched | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetHousekeepingOverviewRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **offset** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [default to 0]
 **housekeepingRoomStatus** | **[]string** | Simple type for room status instructions to be used in requests for fetching housekeeping rooms. Valid status values are Clean, Dirty, Pickup, Inspected, OutOfOrder, OutOfService. | 
 **frontOfficeRoomStatus** | **[]string** | Simple type for front office room status instructions to be used in requests for fetching housekeeping rooms. Valid values are Vacant and Occupied. | 
 **turndownStatus** | **[]string** | Simple type for turndown status instructions to be used in requests for fetching housekeeping rooms. Valid status values are Required, Not Required and Completed. | 
 **roomParityStatus** | **[]string** | Simple type for room parity instructions to be used in requests for fetching housekeeping rooms. Valid status values are Odd and Even. | 
 **serviceRequestStatus** | **[]string** |  | 
 **roomAssignmentStatus** | **[]string** |  | 
 **fetchInstructions** | **[]string** | Simple type for housekeeping instructions that can be used in requests for partial operations. | 
 **fromRoomNumber** | **string** |  | 
 **toRoomNumber** | **string** |  | 
 **floor** | **[]string** | The floor of room to be fetched. | 
 **roomType** | **[]string** | Room Type of the Room. | 
 **roomClass** | **[]string** | Room Class of the Room. | 
 **building** | **[]string** | Building of the Room. | 
 **roomFeatures** | **[]string** | Features of the Room. | 
 **daySection** | **[]string** | AM Sections of the Room. | 
 **eveningSection** | **[]string** | PM Sections of the Room. | 
 **reservationStatus** | **[]string** | The status of the reservation to which this Room is assigned. | 
 **guestServiceRequest** | **string** | Possible values for the Guest Service Status. | 
 **roomIdText** | **string** | Wild Card entry for Room numbers to be Fetched. | 
 **excludeCombo** | **bool** | Indicates we need to exclude the combo rooms while fetching the housekeeping details. | 
 **cleaningPriorityOnly** | **bool** | Determines whether fetching cleaning priority rooms only. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**HousekeepingBoard**](HousekeepingBoard.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetOutOfOrderRooms

> Rooms GetOutOfOrderRooms(ctx, hotelId).StartDate(startDate).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoomId(roomId).EndDate(endDate).RoomTypes(roomTypes).RoomClasses(roomClasses).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Out of Order Rooms



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/hsk"
)

func main() {
    hotelId := "hotelId_example" // string | Hotel Code for which Out Of Order rooms needs to be fetched.
    startDate := time.Now() // string | The start date for which the out of order / out of service rooms are to be fetched.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    roomId := "roomId_example" // string | From this Room number onwards to be Fetched. (optional)
    endDate := time.Now() // string | The end date for which the out of order / out of service rooms are to be fetched. (optional)
    roomTypes := []string{"Inner_example"} // []string | The room type of out of order / out of service rooms to be fetched. (optional)
    roomClasses := []string{"Inner_example"} // []string | The room class of out of order / out of service rooms to be fetched. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HousekeepingApi.GetOutOfOrderRooms(context.Background(), hotelId).StartDate(startDate).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoomId(roomId).EndDate(endDate).RoomTypes(roomTypes).RoomClasses(roomClasses).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HousekeepingApi.GetOutOfOrderRooms``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetOutOfOrderRooms`: Rooms
    fmt.Fprintf(os.Stdout, "Response from `HousekeepingApi.GetOutOfOrderRooms`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Hotel Code for which Out Of Order rooms needs to be fetched. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetOutOfOrderRoomsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **startDate** | **string** | The start date for which the out of order / out of service rooms are to be fetched. | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **roomId** | **string** | From this Room number onwards to be Fetched. | 
 **endDate** | **string** | The end date for which the out of order / out of service rooms are to be fetched. | 
 **roomTypes** | **[]string** | The room type of out of order / out of service rooms to be fetched. | 
 **roomClasses** | **[]string** | The room class of out of order / out of service rooms to be fetched. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Rooms**](Rooms.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetOutOfServiceRooms

> Rooms GetOutOfServiceRooms(ctx, hotelId).StartDate(startDate).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoomId(roomId).EndDate(endDate).RoomTypes(roomTypes).RoomClasses(roomClasses).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Out of Service Rooms



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/hsk"
)

func main() {
    hotelId := "hotelId_example" // string | Hotel Code for which Out Of Service rooms needs to be fetched.
    startDate := time.Now() // string | The start date for which the out of order / out of service rooms are to be fetched.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    roomId := "roomId_example" // string | From this Room number onwards to be Fetched. (optional)
    endDate := time.Now() // string | The end date for which the out of order / out of service rooms are to be fetched. (optional)
    roomTypes := []string{"Inner_example"} // []string | The room type of out of order / out of service rooms to be fetched. (optional)
    roomClasses := []string{"Inner_example"} // []string | The room class of out of order / out of service rooms to be fetched. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HousekeepingApi.GetOutOfServiceRooms(context.Background(), hotelId).StartDate(startDate).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoomId(roomId).EndDate(endDate).RoomTypes(roomTypes).RoomClasses(roomClasses).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HousekeepingApi.GetOutOfServiceRooms``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetOutOfServiceRooms`: Rooms
    fmt.Fprintf(os.Stdout, "Response from `HousekeepingApi.GetOutOfServiceRooms`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Hotel Code for which Out Of Service rooms needs to be fetched. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetOutOfServiceRoomsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **startDate** | **string** | The start date for which the out of order / out of service rooms are to be fetched. | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **roomId** | **string** | From this Room number onwards to be Fetched. | 
 **endDate** | **string** | The end date for which the out of order / out of service rooms are to be fetched. | 
 **roomTypes** | **[]string** | The room type of out of order / out of service rooms to be fetched. | 
 **roomClasses** | **[]string** | The room class of out of order / out of service rooms to be fetched. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Rooms**](Rooms.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetReservationHousekeepingSchedule

> Schedule GetReservationHousekeepingSchedule(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ReservationIdContext(reservationIdContext).ReservationIdType(reservationIdType).BeginDate(beginDate).EndDate(endDate).FetchInstructions(fetchInstructions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get reservation housekeeping schedule



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/hsk"
)

func main() {
    reservationId := "reservationId_example" // string | 
    hotelId := "hotelId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    reservationIdContext := "reservationIdContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    reservationIdType := "reservationIdType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    beginDate := time.Now() // string | Begin date from which to start fetching facility tasks. (optional)
    endDate := time.Now() // string | End date for facility task schedule request. (optional)
    fetchInstructions := []string{"FetchInstructions_example"} // []string | Simple type for controlling the fetch operations of the housekeeping schedule request. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HousekeepingApi.GetReservationHousekeepingSchedule(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ReservationIdContext(reservationIdContext).ReservationIdType(reservationIdType).BeginDate(beginDate).EndDate(endDate).FetchInstructions(fetchInstructions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HousekeepingApi.GetReservationHousekeepingSchedule``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetReservationHousekeepingSchedule`: Schedule
    fmt.Fprintf(os.Stdout, "Response from `HousekeepingApi.GetReservationHousekeepingSchedule`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** |  | 
**hotelId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetReservationHousekeepingScheduleRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **reservationIdContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **reservationIdType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **beginDate** | **string** | Begin date from which to start fetching facility tasks. | 
 **endDate** | **string** | End date for facility task schedule request. | 
 **fetchInstructions** | **[]string** | Simple type for controlling the fetch operations of the housekeeping schedule request. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Schedule**](Schedule.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetRoomConditions

> Rooms GetRoomConditions(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoomConditionsOnly(roomConditionsOnly).RoomWithoutConditionsOnly(roomWithoutConditionsOnly).Room(room).FromRoomNumber(fromRoomNumber).ToRoomNumber(toRoomNumber).RoomConditions(roomConditions).RoomTypes(roomTypes).RoomClasses(roomClasses).FrontOfficeRoomStatus(frontOfficeRoomStatus).ReservationStatuses(reservationStatuses).RoomAssignmentStatus(roomAssignmentStatus).Floors(floors).RoomFeatures(roomFeatures).AmSections(amSections).PmSections(pmSections).Buildings(buildings).HousekeepingRoomStatus(housekeepingRoomStatus).RoomParityStatus(roomParityStatus).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get rooms condition



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/hsk"
)

func main() {
    hotelId := "hotelId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    roomConditionsOnly := true // bool | Include rooms with conditions only. (optional)
    roomWithoutConditionsOnly := true // bool | Include rooms without conditions only. (optional)
    room := "room_example" // string | Identifier of the room. (optional)
    fromRoomNumber := "fromRoomNumber_example" // string |  (optional)
    toRoomNumber := "toRoomNumber_example" // string |  (optional)
    roomConditions := []string{"Inner_example"} // []string |  (optional)
    roomTypes := []string{"Inner_example"} // []string |  (optional)
    roomClasses := []string{"Inner_example"} // []string |  (optional)
    frontOfficeRoomStatus := []string{"FrontOfficeRoomStatus_example"} // []string | Simple type for front office room status instructions to be used in requests for fetching housekeeping rooms. Valid values are Vacant and Occupied. (optional)
    reservationStatuses := []string{"Inner_example"} // []string |  (optional)
    roomAssignmentStatus := []string{"RoomAssignmentStatus_example"} // []string |  (optional)
    floors := []string{"Inner_example"} // []string |  (optional)
    roomFeatures := []string{"Inner_example"} // []string |  (optional)
    amSections := []string{"Inner_example"} // []string |  (optional)
    pmSections := []string{"Inner_example"} // []string |  (optional)
    buildings := []string{"Inner_example"} // []string |  (optional)
    housekeepingRoomStatus := []string{"HousekeepingRoomStatus_example"} // []string | Simple type for room status instructions to be used in requests for fetching housekeeping rooms. Valid status values are Clean, Dirty, Pickup, Inspected, OutOfOrder, OutOfService. (optional)
    roomParityStatus := []string{"RoomParityStatus_example"} // []string | Simple type for room parity instructions to be used in requests for fetching housekeeping rooms. Valid status values are Odd and Even. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HousekeepingApi.GetRoomConditions(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoomConditionsOnly(roomConditionsOnly).RoomWithoutConditionsOnly(roomWithoutConditionsOnly).Room(room).FromRoomNumber(fromRoomNumber).ToRoomNumber(toRoomNumber).RoomConditions(roomConditions).RoomTypes(roomTypes).RoomClasses(roomClasses).FrontOfficeRoomStatus(frontOfficeRoomStatus).ReservationStatuses(reservationStatuses).RoomAssignmentStatus(roomAssignmentStatus).Floors(floors).RoomFeatures(roomFeatures).AmSections(amSections).PmSections(pmSections).Buildings(buildings).HousekeepingRoomStatus(housekeepingRoomStatus).RoomParityStatus(roomParityStatus).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HousekeepingApi.GetRoomConditions``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetRoomConditions`: Rooms
    fmt.Fprintf(os.Stdout, "Response from `HousekeepingApi.GetRoomConditions`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetRoomConditionsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **roomConditionsOnly** | **bool** | Include rooms with conditions only. | 
 **roomWithoutConditionsOnly** | **bool** | Include rooms without conditions only. | 
 **room** | **string** | Identifier of the room. | 
 **fromRoomNumber** | **string** |  | 
 **toRoomNumber** | **string** |  | 
 **roomConditions** | **[]string** |  | 
 **roomTypes** | **[]string** |  | 
 **roomClasses** | **[]string** |  | 
 **frontOfficeRoomStatus** | **[]string** | Simple type for front office room status instructions to be used in requests for fetching housekeeping rooms. Valid values are Vacant and Occupied. | 
 **reservationStatuses** | **[]string** |  | 
 **roomAssignmentStatus** | **[]string** |  | 
 **floors** | **[]string** |  | 
 **roomFeatures** | **[]string** |  | 
 **amSections** | **[]string** |  | 
 **pmSections** | **[]string** |  | 
 **buildings** | **[]string** |  | 
 **housekeepingRoomStatus** | **[]string** | Simple type for room status instructions to be used in requests for fetching housekeeping rooms. Valid status values are Clean, Dirty, Pickup, Inspected, OutOfOrder, OutOfService. | 
 **roomParityStatus** | **[]string** | Simple type for room parity instructions to be used in requests for fetching housekeeping rooms. Valid status values are Odd and Even. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Rooms**](Rooms.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetRoomMaintenance

> RoomMaintenanceDetails GetRoomMaintenance(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoomIdText(roomIdText).RoomId(roomId).RoomClasses(roomClasses).RoomTypes(roomTypes).MaintenanceCodes(maintenanceCodes).RoomMaintenanceStatus(roomMaintenanceStatus).AssignedUserId(assignedUserId).AssignedUserIdContext(assignedUserIdContext).AssignedUserIdType(assignedUserIdType).MaintenanceId(maintenanceId).MaintenanceIdContext(maintenanceIdContext).MaintenanceIdType(maintenanceIdType).ResolvedEndDate(resolvedEndDate).ResolvedStartDate(resolvedStartDate).IncludeImages(includeImages).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get the maintenance rooms



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/hsk"
)

func main() {
    hotelId := "hotelId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    roomIdText := "roomIdText_example" // string | Wildcard Room filter. (optional)
    roomId := "roomId_example" // string | Room Number filter. (optional)
    roomClasses := []string{"Inner_example"} // []string |  (optional)
    roomTypes := []string{"Inner_example"} // []string |  (optional)
    maintenanceCodes := []string{"Inner_example"} // []string |  (optional)
    roomMaintenanceStatus := "roomMaintenanceStatus_example" // string | Room Maintenance Status. (optional)
    assignedUserId := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    assignedUserIdContext := []string{"Inner_example"} // []string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    assignedUserIdType := []string{"Inner_example"} // []string | A reference to the type of object defined by the UniqueID element. (optional)
    maintenanceId := "maintenanceId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    maintenanceIdContext := "maintenanceIdContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    maintenanceIdType := "maintenanceIdType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    resolvedEndDate := time.Now() // string | The ending value of the date range. (optional)
    resolvedStartDate := time.Now() // string | The starting value of the date range. (optional)
    includeImages := true // bool | Indicator that tells whether to include Images in search results. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HousekeepingApi.GetRoomMaintenance(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoomIdText(roomIdText).RoomId(roomId).RoomClasses(roomClasses).RoomTypes(roomTypes).MaintenanceCodes(maintenanceCodes).RoomMaintenanceStatus(roomMaintenanceStatus).AssignedUserId(assignedUserId).AssignedUserIdContext(assignedUserIdContext).AssignedUserIdType(assignedUserIdType).MaintenanceId(maintenanceId).MaintenanceIdContext(maintenanceIdContext).MaintenanceIdType(maintenanceIdType).ResolvedEndDate(resolvedEndDate).ResolvedStartDate(resolvedStartDate).IncludeImages(includeImages).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HousekeepingApi.GetRoomMaintenance``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetRoomMaintenance`: RoomMaintenanceDetails
    fmt.Fprintf(os.Stdout, "Response from `HousekeepingApi.GetRoomMaintenance`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetRoomMaintenanceRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **roomIdText** | **string** | Wildcard Room filter. | 
 **roomId** | **string** | Room Number filter. | 
 **roomClasses** | **[]string** |  | 
 **roomTypes** | **[]string** |  | 
 **maintenanceCodes** | **[]string** |  | 
 **roomMaintenanceStatus** | **string** | Room Maintenance Status. | 
 **assignedUserId** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **assignedUserIdContext** | **[]string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **assignedUserIdType** | **[]string** | A reference to the type of object defined by the UniqueID element. | 
 **maintenanceId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **maintenanceIdContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **maintenanceIdType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **resolvedEndDate** | **string** | The ending value of the date range. | 
 **resolvedStartDate** | **string** | The starting value of the date range. | 
 **includeImages** | **bool** | Indicator that tells whether to include Images in search results. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**RoomMaintenanceDetails**](RoomMaintenanceDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetTaskCompanion

> TaskCompanion GetTaskCompanion(ctx, sheetNumber, hotelId).TaskCodes(taskCodes).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TaskDate(taskDate).RoomId(roomId).SkipRoomNumbers(skipRoomNumbers).RoomStatusToChange(roomStatusToChange).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get task companion



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/hsk"
)

func main() {
    sheetNumber := "sheetNumber_example" // string | 
    hotelId := "hotelId_example" // string | 
    taskCodes := []string{"Inner_example"} // []string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    taskDate := time.Now() // string | Date for which the task sheet was created. By default this would be the current business date. (optional)
    roomId := "roomId_example" // string | Choice to search by a room number if a particular room is required. (optional)
    skipRoomNumbers := []string{"Inner_example"} // []string | Room number that should be skipped. (optional)
    roomStatusToChange := []string{"RoomStatusToChange_example"} // []string | Simple type for room status instructions to be used in requests for fetching housekeeping rooms. Valid status values are Clean, Dirty, Pickup, Inspected, OutOfOrder, OutOfService. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HousekeepingApi.GetTaskCompanion(context.Background(), sheetNumber, hotelId).TaskCodes(taskCodes).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TaskDate(taskDate).RoomId(roomId).SkipRoomNumbers(skipRoomNumbers).RoomStatusToChange(roomStatusToChange).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HousekeepingApi.GetTaskCompanion``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetTaskCompanion`: TaskCompanion
    fmt.Fprintf(os.Stdout, "Response from `HousekeepingApi.GetTaskCompanion`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sheetNumber** | **string** |  | 
**hotelId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetTaskCompanionRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **taskCodes** | **[]string** |  | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **taskDate** | **string** | Date for which the task sheet was created. By default this would be the current business date. | 
 **roomId** | **string** | Choice to search by a room number if a particular room is required. | 
 **skipRoomNumbers** | **[]string** | Room number that should be skipped. | 
 **roomStatusToChange** | **[]string** | Simple type for room status instructions to be used in requests for fetching housekeeping rooms. Valid status values are Clean, Dirty, Pickup, Inspected, OutOfOrder, OutOfService. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**TaskCompanion**](TaskCompanion.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetTaskSheetTemplate

> TaskSheetTemplate GetTaskSheetTemplate(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TemplateCode(templateCode).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get the task sheet templates



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/hsk"
)

func main() {
    hotelId := "hotelId_example" // string | Hotel Code for which task sheet templates needs to be fetched
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    templateCode := "templateCode_example" // string | Template name for the task sheet. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HousekeepingApi.GetTaskSheetTemplate(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TemplateCode(templateCode).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HousekeepingApi.GetTaskSheetTemplate``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetTaskSheetTemplate`: TaskSheetTemplate
    fmt.Fprintf(os.Stdout, "Response from `HousekeepingApi.GetTaskSheetTemplate`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Hotel Code for which task sheet templates needs to be fetched | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetTaskSheetTemplateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **templateCode** | **string** | Template name for the task sheet. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**TaskSheetTemplate**](TaskSheetTemplate.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## LockTaskSheet

> LockedTaskSheet LockTaskSheet(ctx, sheetNumber, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TaskSheetToLock(taskSheetToLock).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Lock the task sheet



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/hsk"
)

func main() {
    sheetNumber := "sheetNumber_example" // string | 
    hotelId := "hotelId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    taskSheetToLock := *openapiclient.NewLockTaskSheetRequest() // LockTaskSheetRequest | Request for locking a task sheet.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HousekeepingApi.LockTaskSheet(context.Background(), sheetNumber, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TaskSheetToLock(taskSheetToLock).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HousekeepingApi.LockTaskSheet``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `LockTaskSheet`: LockedTaskSheet
    fmt.Fprintf(os.Stdout, "Response from `HousekeepingApi.LockTaskSheet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sheetNumber** | **string** |  | 
**hotelId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiLockTaskSheetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **taskSheetToLock** | [**LockTaskSheetRequest**](LockTaskSheetRequest.md) | Request for locking a task sheet. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**LockedTaskSheet**](LockedTaskSheet.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## MergeTaskSheet

> Status MergeTaskSheet(ctx, toTaskSequenceNo, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TaskSheetToMerge(taskSheetToMerge).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Merge task sheet



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/hsk"
)

func main() {
    toTaskSequenceNo := "toTaskSequenceNo_example" // string | 
    hotelId := "hotelId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    taskSheetToMerge := *openapiclient.NewMergeTaskSheetRequest() // MergeTaskSheetRequest | Request for merging task sheets.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HousekeepingApi.MergeTaskSheet(context.Background(), toTaskSequenceNo, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TaskSheetToMerge(taskSheetToMerge).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HousekeepingApi.MergeTaskSheet``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `MergeTaskSheet`: Status
    fmt.Fprintf(os.Stdout, "Response from `HousekeepingApi.MergeTaskSheet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**toTaskSequenceNo** | **string** |  | 
**hotelId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiMergeTaskSheetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **taskSheetToMerge** | [**MergeTaskSheetRequest**](MergeTaskSheetRequest.md) | Request for merging task sheets. | 
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


## MoveTaskRooms

> MovedTaskRoomsRS MoveTaskRooms(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).MoveTaskRooms(moveTaskRooms).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Move the task rooms



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/hsk"
)

func main() {
    hotelId := "hotelId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    moveTaskRooms := *openapiclient.NewMoveTaskRoomsRequest() // MoveTaskRoomsRequest | Request for moving rooms between task sheets.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HousekeepingApi.MoveTaskRooms(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).MoveTaskRooms(moveTaskRooms).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HousekeepingApi.MoveTaskRooms``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `MoveTaskRooms`: MovedTaskRoomsRS
    fmt.Fprintf(os.Stdout, "Response from `HousekeepingApi.MoveTaskRooms`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiMoveTaskRoomsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **moveTaskRooms** | [**MoveTaskRoomsRequest**](MoveTaskRoomsRequest.md) | Request for moving rooms between task sheets. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**MovedTaskRoomsRS**](MovedTaskRoomsRS.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostHousekeepingAttendantSchedule

> Status PostHousekeepingAttendantSchedule(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AttendantSchedule(attendantSchedule).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create housekeeping attendant schedule



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/hsk"
)

func main() {
    hotelId := "hotelId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    attendantSchedule := *openapiclient.NewPostHousekeepingAttendantScheduleRequest() // PostHousekeepingAttendantScheduleRequest | Request for creating the attendant schedule.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HousekeepingApi.PostHousekeepingAttendantSchedule(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AttendantSchedule(attendantSchedule).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HousekeepingApi.PostHousekeepingAttendantSchedule``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostHousekeepingAttendantSchedule`: Status
    fmt.Fprintf(os.Stdout, "Response from `HousekeepingApi.PostHousekeepingAttendantSchedule`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostHousekeepingAttendantScheduleRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **attendantSchedule** | [**PostHousekeepingAttendantScheduleRequest**](PostHousekeepingAttendantScheduleRequest.md) | Request for creating the attendant schedule. | 
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


## PostOutOfOrderRooms

> Status PostOutOfOrderRooms(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoomRepairOutOfOrder(roomRepairOutOfOrder).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Set multiple rooms to Out Of Order



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/hsk"
)

func main() {
    hotelId := "hotelId_example" // string | Hotel Code of Room(s) which is to be set as Out Of Order.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    roomRepairOutOfOrder := *openapiclient.NewPostOutOfOrderRoomsRequest() // PostOutOfOrderRoomsRequest | 
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HousekeepingApi.PostOutOfOrderRooms(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoomRepairOutOfOrder(roomRepairOutOfOrder).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HousekeepingApi.PostOutOfOrderRooms``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostOutOfOrderRooms`: Status
    fmt.Fprintf(os.Stdout, "Response from `HousekeepingApi.PostOutOfOrderRooms`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Hotel Code of Room(s) which is to be set as Out Of Order. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostOutOfOrderRoomsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **roomRepairOutOfOrder** | [**PostOutOfOrderRoomsRequest**](PostOutOfOrderRoomsRequest.md) |  | 
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


## PostOutOfServiceRooms

> Status PostOutOfServiceRooms(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoomRepairOutOfService(roomRepairOutOfService).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Set multiple rooms to Out Of Service



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/hsk"
)

func main() {
    hotelId := "hotelId_example" // string | Hotel Code of Room(s) which is to be set as Out Of Service.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    roomRepairOutOfService := *openapiclient.NewPostOutOfServiceRoomsRequest() // PostOutOfServiceRoomsRequest | 
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HousekeepingApi.PostOutOfServiceRooms(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoomRepairOutOfService(roomRepairOutOfService).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HousekeepingApi.PostOutOfServiceRooms``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostOutOfServiceRooms`: Status
    fmt.Fprintf(os.Stdout, "Response from `HousekeepingApi.PostOutOfServiceRooms`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Hotel Code of Room(s) which is to be set as Out Of Service. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostOutOfServiceRoomsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **roomRepairOutOfService** | [**PostOutOfServiceRoomsRequest**](PostOutOfServiceRoomsRequest.md) |  | 
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


## PostReservationHousekeepingTasks

> Status PostReservationHousekeepingTasks(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Schedule(schedule).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create reservation housekeeping tasks



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/hsk"
)

func main() {
    reservationId := "reservationId_example" // string | 
    hotelId := "hotelId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    schedule := *openapiclient.NewEditReservationHousekeepingTasksRequest() // EditReservationHousekeepingTasksRequest | A schedule with task(s) to be created for the given reservation.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HousekeepingApi.PostReservationHousekeepingTasks(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Schedule(schedule).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HousekeepingApi.PostReservationHousekeepingTasks``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostReservationHousekeepingTasks`: Status
    fmt.Fprintf(os.Stdout, "Response from `HousekeepingApi.PostReservationHousekeepingTasks`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** |  | 
**hotelId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostReservationHousekeepingTasksRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **schedule** | [**EditReservationHousekeepingTasksRequest**](EditReservationHousekeepingTasksRequest.md) | A schedule with task(s) to be created for the given reservation. | 
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


## PostRoomMaintenance

> Status PostRoomMaintenance(ctx, maintenanceCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoomMaintenanceRequest(roomMaintenanceRequest).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create maintenances for rooms



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/hsk"
)

func main() {
    maintenanceCode := "maintenanceCode_example" // string | 
    hotelId := "hotelId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    roomMaintenanceRequest := *openapiclient.NewPostRoomMaintenanceRequest() // PostRoomMaintenanceRequest | Request to create a room maintenance record.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HousekeepingApi.PostRoomMaintenance(context.Background(), maintenanceCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoomMaintenanceRequest(roomMaintenanceRequest).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HousekeepingApi.PostRoomMaintenance``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostRoomMaintenance`: Status
    fmt.Fprintf(os.Stdout, "Response from `HousekeepingApi.PostRoomMaintenance`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**maintenanceCode** | **string** |  | 
**hotelId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostRoomMaintenanceRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **roomMaintenanceRequest** | [**PostRoomMaintenanceRequest**](PostRoomMaintenanceRequest.md) | Request to create a room maintenance record. | 
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


## PostTaskSheet

> Status PostTaskSheet(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TaskSheet(taskSheet).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create the task sheet



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/hsk"
)

func main() {
    hotelId := "hotelId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    taskSheet := *openapiclient.NewPutTaskSheetRequest() // PutTaskSheetRequest | Request to create a new task sheet. Details for the task sheet required are the Task Code, Task Date and Resort. Task Instructions and total credits if not provided will be retrieved from the task code setup. If room and attendant information is sent, this will be added to the task sheet created.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HousekeepingApi.PostTaskSheet(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TaskSheet(taskSheet).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HousekeepingApi.PostTaskSheet``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostTaskSheet`: Status
    fmt.Fprintf(os.Stdout, "Response from `HousekeepingApi.PostTaskSheet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostTaskSheetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **taskSheet** | [**PutTaskSheetRequest**](PutTaskSheetRequest.md) | Request to create a new task sheet. Details for the task sheet required are the Task Code, Task Date and Resort. Task Instructions and total credits if not provided will be retrieved from the task code setup. If room and attendant information is sent, this will be added to the task sheet created. | 
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


## PostTaskSheetRooms

> Status PostTaskSheetRooms(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TaskSheet(taskSheet).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create the task sheet rooms



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/hsk"
)

func main() {
    hotelId := "hotelId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    taskSheet := *openapiclient.NewPutTaskSheetRequest() // PutTaskSheetRequest | Request to create(add) a room in a task sheet. Details for the task sheet required are the Task Code, Task Date and Resort. The room element will contain the list of rooms that are to be added to the task sheet. These rooms will be added to the existing rooms on the task sheet. Room instructions and credits will be updated for each room.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HousekeepingApi.PostTaskSheetRooms(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TaskSheet(taskSheet).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HousekeepingApi.PostTaskSheetRooms``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostTaskSheetRooms`: Status
    fmt.Fprintf(os.Stdout, "Response from `HousekeepingApi.PostTaskSheetRooms`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostTaskSheetRoomsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **taskSheet** | [**PutTaskSheetRequest**](PutTaskSheetRequest.md) | Request to create(add) a room in a task sheet. Details for the task sheet required are the Task Code, Task Date and Resort. The room element will contain the list of rooms that are to be added to the task sheet. These rooms will be added to the existing rooms on the task sheet. Room instructions and credits will be updated for each room. | 
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


## PutRoomCleaningPriority

> Status PutRoomCleaningPriority(ctx, hotelId).RoomId(roomId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete room cleaning priority



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/hsk"
)

func main() {
    hotelId := "hotelId_example" // string | 
    roomId := []string{"Inner_example"} // []string | Collection of room numbers.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HousekeepingApi.PutRoomCleaningPriority(context.Background(), hotelId).RoomId(roomId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HousekeepingApi.PutRoomCleaningPriority``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutRoomCleaningPriority`: Status
    fmt.Fprintf(os.Stdout, "Response from `HousekeepingApi.PutRoomCleaningPriority`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutRoomCleaningPriorityRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **roomId** | **[]string** | Collection of room numbers. | 
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


## PutRoomMaintenance

> ChangedRoomMaintenance PutRoomMaintenance(ctx, maintenanceId, roomId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoomMaintenance(roomMaintenance).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change maintenances for rooms



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/hsk"
)

func main() {
    maintenanceId := "maintenanceId_example" // string | 
    roomId := "roomId_example" // string | 
    hotelId := "hotelId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    roomMaintenance := *openapiclient.NewResolveRoomMaintenanceRequest() // ResolveRoomMaintenanceRequest | Request to change room maintenance details.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HousekeepingApi.PutRoomMaintenance(context.Background(), maintenanceId, roomId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoomMaintenance(roomMaintenance).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HousekeepingApi.PutRoomMaintenance``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutRoomMaintenance`: ChangedRoomMaintenance
    fmt.Fprintf(os.Stdout, "Response from `HousekeepingApi.PutRoomMaintenance`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**maintenanceId** | **string** |  | 
**roomId** | **string** |  | 
**hotelId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutRoomMaintenanceRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **roomMaintenance** | [**ResolveRoomMaintenanceRequest**](ResolveRoomMaintenanceRequest.md) | Request to change room maintenance details. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ChangedRoomMaintenance**](ChangedRoomMaintenance.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutRoomRelatedStatus

> HousekeepingRoomStatus PutRoomRelatedStatus(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HousekeepingRoomStatusCriteria(housekeepingRoomStatusCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Update Housekeeping Room Status



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/hsk"
)

func main() {
    hotelId := "hotelId_example" // string | Hotel Code for which housekeeping room status, housekeeping status or turndown status have to be modified
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    housekeepingRoomStatusCriteria := *openapiclient.NewPutRoomRelatedStatusRequest() // PutRoomRelatedStatusRequest | 
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HousekeepingApi.PutRoomRelatedStatus(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HousekeepingRoomStatusCriteria(housekeepingRoomStatusCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HousekeepingApi.PutRoomRelatedStatus``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutRoomRelatedStatus`: HousekeepingRoomStatus
    fmt.Fprintf(os.Stdout, "Response from `HousekeepingApi.PutRoomRelatedStatus`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Hotel Code for which housekeeping room status, housekeeping status or turndown status have to be modified | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutRoomRelatedStatusRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **housekeepingRoomStatusCriteria** | [**PutRoomRelatedStatusRequest**](PutRoomRelatedStatusRequest.md) |  | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**HousekeepingRoomStatus**](HousekeepingRoomStatus.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutTaskSheet

> ChangedTaskSheet PutTaskSheet(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TaskSheet(taskSheet).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change the task sheet



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/hsk"
)

func main() {
    hotelId := "hotelId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    taskSheet := *openapiclient.NewPutTaskSheetRequest() // PutTaskSheetRequest | Request of Changing a Task Sheet. The task instructions, total credits, attendant information and room information can be changed on a task sheet. Task Instructions , Total Credits and Attendants will be replaced with what is sent in this request. Example: If the task instructions is null in the request, the task instructions on the task sheet will be updated to null. If rooms are sent as part of this request, this will replace the existing rooms on the task sheet. If rooms are not sent, then the original rooms will remain. The task date, hotel code, task sheet number and task code is required to search for the task sheet which has to be changed
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HousekeepingApi.PutTaskSheet(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TaskSheet(taskSheet).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HousekeepingApi.PutTaskSheet``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutTaskSheet`: ChangedTaskSheet
    fmt.Fprintf(os.Stdout, "Response from `HousekeepingApi.PutTaskSheet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutTaskSheetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **taskSheet** | [**PutTaskSheetRequest**](PutTaskSheetRequest.md) | Request of Changing a Task Sheet. The task instructions, total credits, attendant information and room information can be changed on a task sheet. Task Instructions , Total Credits and Attendants will be replaced with what is sent in this request. Example: If the task instructions is null in the request, the task instructions on the task sheet will be updated to null. If rooms are sent as part of this request, this will replace the existing rooms on the task sheet. If rooms are not sent, then the original rooms will remain. The task date, hotel code, task sheet number and task code is required to search for the task sheet which has to be changed | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ChangedTaskSheet**](ChangedTaskSheet.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutTaskSheetRooms

> ChangedTaskSheetRooms PutTaskSheetRooms(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TaskSheet(taskSheet).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change the task sheet rooms



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/hsk"
)

func main() {
    hotelId := "hotelId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    taskSheet := *openapiclient.NewPutTaskSheetRequest() // PutTaskSheetRequest | Request to change a room on a task sheet. The information that can be changed are the room instructions and credits. The instructions and credits for a room will be updated based on the information sent in this request. The criteria required to search for the particular task sheet to update requires the HotelCode, Task Sheet Number, Task Code and Task Date.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HousekeepingApi.PutTaskSheetRooms(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TaskSheet(taskSheet).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HousekeepingApi.PutTaskSheetRooms``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutTaskSheetRooms`: ChangedTaskSheetRooms
    fmt.Fprintf(os.Stdout, "Response from `HousekeepingApi.PutTaskSheetRooms`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutTaskSheetRoomsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **taskSheet** | [**PutTaskSheetRequest**](PutTaskSheetRequest.md) | Request to change a room on a task sheet. The information that can be changed are the room instructions and credits. The instructions and credits for a room will be updated based on the information sent in this request. The criteria required to search for the particular task sheet to update requires the HotelCode, Task Sheet Number, Task Code and Task Date. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ChangedTaskSheetRooms**](ChangedTaskSheetRooms.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutTaskSheetTemplate

> ChangedTaskSheetTemplate PutTaskSheetTemplate(ctx, taskSheetTemplateCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TaskSheetTemplate(taskSheetTemplate).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change the task sheet templates



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/hsk"
)

func main() {
    taskSheetTemplateCode := "taskSheetTemplateCode_example" // string | 
    hotelId := "hotelId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    taskSheetTemplate := *openapiclient.NewPutTaskSheetTemplateRequest() // PutTaskSheetTemplateRequest | Request for changing task sheet template.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HousekeepingApi.PutTaskSheetTemplate(context.Background(), taskSheetTemplateCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TaskSheetTemplate(taskSheetTemplate).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HousekeepingApi.PutTaskSheetTemplate``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutTaskSheetTemplate`: ChangedTaskSheetTemplate
    fmt.Fprintf(os.Stdout, "Response from `HousekeepingApi.PutTaskSheetTemplate`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**taskSheetTemplateCode** | **string** |  | 
**hotelId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutTaskSheetTemplateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **taskSheetTemplate** | [**PutTaskSheetTemplateRequest**](PutTaskSheetTemplateRequest.md) | Request for changing task sheet template. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ChangedTaskSheetTemplate**](ChangedTaskSheetTemplate.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ResetReservationHousekeepingSchedule

> ScheduledSearch ResetReservationHousekeepingSchedule(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ScheduleSearch(scheduleSearch).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Reset reservation housekeeping schedule



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/hsk"
)

func main() {
    reservationId := "reservationId_example" // string | 
    hotelId := "hotelId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    scheduleSearch := *openapiclient.NewResetReservationHousekeepingScheduleRequest() // ResetReservationHousekeepingScheduleRequest | Request with basic information reservation needed for the reset of the schedule.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HousekeepingApi.ResetReservationHousekeepingSchedule(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ScheduleSearch(scheduleSearch).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HousekeepingApi.ResetReservationHousekeepingSchedule``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ResetReservationHousekeepingSchedule`: ScheduledSearch
    fmt.Fprintf(os.Stdout, "Response from `HousekeepingApi.ResetReservationHousekeepingSchedule`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** |  | 
**hotelId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiResetReservationHousekeepingScheduleRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **scheduleSearch** | [**ResetReservationHousekeepingScheduleRequest**](ResetReservationHousekeepingScheduleRequest.md) | Request with basic information reservation needed for the reset of the schedule. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ScheduledSearch**](ScheduledSearch.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ResolveRoomMaintenance

> ResolvedRoomMaintenance ResolveRoomMaintenance(ctx, mainteananceId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoomMaintenance(roomMaintenance).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Resolve maintenances for rooms



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/hsk"
)

func main() {
    mainteananceId := "mainteananceId_example" // string | 
    hotelId := "hotelId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    roomMaintenance := *openapiclient.NewResolveRoomMaintenanceRequest() // ResolveRoomMaintenanceRequest | Request to resolve a room maintenance request.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HousekeepingApi.ResolveRoomMaintenance(context.Background(), mainteananceId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoomMaintenance(roomMaintenance).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HousekeepingApi.ResolveRoomMaintenance``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ResolveRoomMaintenance`: ResolvedRoomMaintenance
    fmt.Fprintf(os.Stdout, "Response from `HousekeepingApi.ResolveRoomMaintenance`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**mainteananceId** | **string** |  | 
**hotelId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiResolveRoomMaintenanceRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **roomMaintenance** | [**ResolveRoomMaintenanceRequest**](ResolveRoomMaintenanceRequest.md) | Request to resolve a room maintenance request. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ResolvedRoomMaintenance**](ResolvedRoomMaintenance.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## SetGuestHousekeepingNotes

> GuestHousekeepingService SetGuestHousekeepingNotes(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).GuestHousekeepingServiceRequest(guestHousekeepingServiceRequest).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Set guest housekeeping instructions



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/hsk"
)

func main() {
    reservationId := "reservationId_example" // string | 
    hotelId := "hotelId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    guestHousekeepingServiceRequest := *openapiclient.NewSetGuestHousekeepingNotesRequest() // SetGuestHousekeepingNotesRequest | Operation to get set guest housekeeping instructions for the room.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HousekeepingApi.SetGuestHousekeepingNotes(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).GuestHousekeepingServiceRequest(guestHousekeepingServiceRequest).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HousekeepingApi.SetGuestHousekeepingNotes``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `SetGuestHousekeepingNotes`: GuestHousekeepingService
    fmt.Fprintf(os.Stdout, "Response from `HousekeepingApi.SetGuestHousekeepingNotes`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** |  | 
**hotelId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiSetGuestHousekeepingNotesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **guestHousekeepingServiceRequest** | [**SetGuestHousekeepingNotesRequest**](SetGuestHousekeepingNotesRequest.md) | Operation to get set guest housekeeping instructions for the room. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**GuestHousekeepingService**](GuestHousekeepingService.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## SetGuestHousekeepingServiceRequest

> GuestHousekeepingServiceRequestStatus SetGuestHousekeepingServiceRequest(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).GuestHousekeepingServiceRequestCriteria(guestHousekeepingServiceRequestCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Set the Guest housekeeping service requests



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/hsk"
)

func main() {
    hotelId := "hotelId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    guestHousekeepingServiceRequestCriteria := *openapiclient.NewSetGuestHousekeepingServiceRequestRequest() // SetGuestHousekeepingServiceRequestRequest | Operation to set the Guest Service status of an occupied room. The service status can be Do Not Disturb or Make Up Room.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HousekeepingApi.SetGuestHousekeepingServiceRequest(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).GuestHousekeepingServiceRequestCriteria(guestHousekeepingServiceRequestCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HousekeepingApi.SetGuestHousekeepingServiceRequest``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `SetGuestHousekeepingServiceRequest`: GuestHousekeepingServiceRequestStatus
    fmt.Fprintf(os.Stdout, "Response from `HousekeepingApi.SetGuestHousekeepingServiceRequest`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiSetGuestHousekeepingServiceRequestRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **guestHousekeepingServiceRequestCriteria** | [**SetGuestHousekeepingServiceRequestRequest**](SetGuestHousekeepingServiceRequestRequest.md) | Operation to set the Guest Service status of an occupied room. The service status can be Do Not Disturb or Make Up Room. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**GuestHousekeepingServiceRequestStatus**](GuestHousekeepingServiceRequestStatus.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## SetRoomCleaningPriority

> RoomCleaningPriorityRequestStatus SetRoomCleaningPriority(ctx, roomId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoomCleaningPriority(roomCleaningPriority).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Set the room cleaning priority



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/hsk"
)

func main() {
    roomId := "roomId_example" // string | 
    hotelId := "hotelId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    roomCleaningPriority := *openapiclient.NewSetRoomCleaningPriorityRequest() // SetRoomCleaningPriorityRequest | Request to set a list of rooms as priority for cleaning. This will set a flag as priority and a priority number at the bottom of the current priority line.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HousekeepingApi.SetRoomCleaningPriority(context.Background(), roomId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoomCleaningPriority(roomCleaningPriority).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HousekeepingApi.SetRoomCleaningPriority``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `SetRoomCleaningPriority`: RoomCleaningPriorityRequestStatus
    fmt.Fprintf(os.Stdout, "Response from `HousekeepingApi.SetRoomCleaningPriority`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**roomId** | **string** |  | 
**hotelId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiSetRoomCleaningPriorityRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **roomCleaningPriority** | [**SetRoomCleaningPriorityRequest**](SetRoomCleaningPriorityRequest.md) | Request to set a list of rooms as priority for cleaning. This will set a flag as priority and a priority number at the bottom of the current priority line. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**RoomCleaningPriorityRequestStatus**](RoomCleaningPriorityRequestStatus.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## SetRoomCondition

> RoomConditionRequestStatus SetRoomCondition(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoomCondition(roomCondition).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Set rooms condition



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/hsk"
)

func main() {
    hotelId := "hotelId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    roomCondition := *openapiclient.NewSetRoomConditionRequest() // SetRoomConditionRequest | Request element for setting room condition.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HousekeepingApi.SetRoomCondition(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoomCondition(roomCondition).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HousekeepingApi.SetRoomCondition``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `SetRoomCondition`: RoomConditionRequestStatus
    fmt.Fprintf(os.Stdout, "Response from `HousekeepingApi.SetRoomCondition`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiSetRoomConditionRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **roomCondition** | [**SetRoomConditionRequest**](SetRoomConditionRequest.md) | Request element for setting room condition. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**RoomConditionRequestStatus**](RoomConditionRequestStatus.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ShiftReservationHousekeepingSchedule

> ScheduledShiftRequest ShiftReservationHousekeepingSchedule(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ScheduleShiftRequest(scheduleShiftRequest).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Shift reservation housekeeping schedule



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/hsk"
)

func main() {
    reservationId := "reservationId_example" // string | 
    hotelId := "hotelId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    scheduleShiftRequest := *openapiclient.NewShiftReservationHousekeepingScheduleRequest() // ShiftReservationHousekeepingScheduleRequest | Request with the information needed for the shift of the schedule.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HousekeepingApi.ShiftReservationHousekeepingSchedule(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ScheduleShiftRequest(scheduleShiftRequest).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HousekeepingApi.ShiftReservationHousekeepingSchedule``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ShiftReservationHousekeepingSchedule`: ScheduledShiftRequest
    fmt.Fprintf(os.Stdout, "Response from `HousekeepingApi.ShiftReservationHousekeepingSchedule`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** |  | 
**hotelId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiShiftReservationHousekeepingScheduleRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **scheduleShiftRequest** | [**ShiftReservationHousekeepingScheduleRequest**](ShiftReservationHousekeepingScheduleRequest.md) | Request with the information needed for the shift of the schedule. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ScheduledShiftRequest**](ScheduledShiftRequest.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## SkipServicingTaskRoom

> SkipedServicingTaskRoom SkipServicingTaskRoom(ctx, sheetNumber, roomId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TaskRoom(taskRoom).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Skip servicing task room



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/hsk"
)

func main() {
    sheetNumber := "sheetNumber_example" // string | 
    roomId := "roomId_example" // string | 
    hotelId := "hotelId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    taskRoom := *openapiclient.NewCancelServicingTaskRoomRequest() // CancelServicingTaskRoomRequest | Request to start servicing a task room. When the attendant starts working on a room this request can be called to set the times and the status to WORKING for the room.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HousekeepingApi.SkipServicingTaskRoom(context.Background(), sheetNumber, roomId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TaskRoom(taskRoom).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HousekeepingApi.SkipServicingTaskRoom``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `SkipServicingTaskRoom`: SkipedServicingTaskRoom
    fmt.Fprintf(os.Stdout, "Response from `HousekeepingApi.SkipServicingTaskRoom`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sheetNumber** | **string** |  | 
**roomId** | **string** |  | 
**hotelId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiSkipServicingTaskRoomRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **taskRoom** | [**CancelServicingTaskRoomRequest**](CancelServicingTaskRoomRequest.md) | Request to start servicing a task room. When the attendant starts working on a room this request can be called to set the times and the status to WORKING for the room. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**SkipedServicingTaskRoom**](SkipedServicingTaskRoom.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## StartServiceBreak

> StartedServiceBreak StartServiceBreak(ctx, taskSheetNumber, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TaskRoom(taskRoom).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Start the service break



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/hsk"
)

func main() {
    taskSheetNumber := "taskSheetNumber_example" // string | 
    hotelId := "hotelId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    taskRoom := *openapiclient.NewCancelServicingTaskRoomRequest() // CancelServicingTaskRoomRequest | Request to start service break.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HousekeepingApi.StartServiceBreak(context.Background(), taskSheetNumber, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TaskRoom(taskRoom).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HousekeepingApi.StartServiceBreak``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `StartServiceBreak`: StartedServiceBreak
    fmt.Fprintf(os.Stdout, "Response from `HousekeepingApi.StartServiceBreak`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**taskSheetNumber** | **string** |  | 
**hotelId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiStartServiceBreakRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **taskRoom** | [**CancelServicingTaskRoomRequest**](CancelServicingTaskRoomRequest.md) | Request to start service break. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**StartedServiceBreak**](StartedServiceBreak.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## StartServicingTaskRoom

> ServiceTime StartServicingTaskRoom(ctx, sheetNumber, roomId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TaskRoom(taskRoom).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Start servicing task room



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/hsk"
)

func main() {
    sheetNumber := "sheetNumber_example" // string | 
    roomId := "roomId_example" // string | 
    hotelId := "hotelId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    taskRoom := *openapiclient.NewCancelServicingTaskRoomRequest() // CancelServicingTaskRoomRequest | Request to start servicing a task room. When the attendant starts working on a room this request can be called to set the times and the status to WORKING for the room.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HousekeepingApi.StartServicingTaskRoom(context.Background(), sheetNumber, roomId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TaskRoom(taskRoom).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HousekeepingApi.StartServicingTaskRoom``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `StartServicingTaskRoom`: ServiceTime
    fmt.Fprintf(os.Stdout, "Response from `HousekeepingApi.StartServicingTaskRoom`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sheetNumber** | **string** |  | 
**roomId** | **string** |  | 
**hotelId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiStartServicingTaskRoomRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **taskRoom** | [**CancelServicingTaskRoomRequest**](CancelServicingTaskRoomRequest.md) | Request to start servicing a task room. When the attendant starts working on a room this request can be called to set the times and the status to WORKING for the room. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ServiceTime**](ServiceTime.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UnResolveRoomMaintenance

> UnresolvedRoomMaintenance UnResolveRoomMaintenance(ctx, mainteananceId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoomMaintenance(roomMaintenance).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

unResolve the maintenances for rooms



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/hsk"
)

func main() {
    mainteananceId := "mainteananceId_example" // string | 
    hotelId := "hotelId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    roomMaintenance := *openapiclient.NewResolveRoomMaintenanceRequest() // ResolveRoomMaintenanceRequest | Request to set unresolved status for room maintenance request.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HousekeepingApi.UnResolveRoomMaintenance(context.Background(), mainteananceId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoomMaintenance(roomMaintenance).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HousekeepingApi.UnResolveRoomMaintenance``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UnResolveRoomMaintenance`: UnresolvedRoomMaintenance
    fmt.Fprintf(os.Stdout, "Response from `HousekeepingApi.UnResolveRoomMaintenance`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**mainteananceId** | **string** |  | 
**hotelId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiUnResolveRoomMaintenanceRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **roomMaintenance** | [**ResolveRoomMaintenanceRequest**](ResolveRoomMaintenanceRequest.md) | Request to set unresolved status for room maintenance request. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**UnresolvedRoomMaintenance**](UnresolvedRoomMaintenance.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UnlockTaskSheet

> UnlockedTaskSheet UnlockTaskSheet(ctx, sheetNumber, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TaskSheetToUnlock(taskSheetToUnlock).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Unlock the task sheet



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/hsk"
)

func main() {
    sheetNumber := "sheetNumber_example" // string | 
    hotelId := "hotelId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    taskSheetToUnlock := *openapiclient.NewUnlockTaskSheetRequest() // UnlockTaskSheetRequest | Request for unlocking a task sheet.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HousekeepingApi.UnlockTaskSheet(context.Background(), sheetNumber, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TaskSheetToUnlock(taskSheetToUnlock).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HousekeepingApi.UnlockTaskSheet``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UnlockTaskSheet`: UnlockedTaskSheet
    fmt.Fprintf(os.Stdout, "Response from `HousekeepingApi.UnlockTaskSheet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sheetNumber** | **string** |  | 
**hotelId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiUnlockTaskSheetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **taskSheetToUnlock** | [**UnlockTaskSheetRequest**](UnlockTaskSheetRequest.md) | Request for unlocking a task sheet. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**UnlockedTaskSheet**](UnlockedTaskSheet.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


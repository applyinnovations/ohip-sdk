# \FOFStatsApi

All URIs are relative to */fof/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetFrontOfficeStatistics**](FOFStatsApi.md#GetFrontOfficeStatistics) | **Get** /hotels/{hotelId}/frontOfficeStatistics/{statisticsCode} | Get front office statistics
[**GetFrontOfficeStatisticsWithDateRange**](FOFStatsApi.md#GetFrontOfficeStatisticsWithDateRange) | **Get** /hotels/{hotelId}/frontOfficeStatisticsRange/{statisticsCode} | Get front office Statistics
[**GetReservationQueueStatistics**](FOFStatsApi.md#GetReservationQueueStatistics) | **Get** /hotels/{hotelId}/queueReservationsStatistics | Get hotel reservation queue statistics
[**GetReservationStatusStatistics**](FOFStatsApi.md#GetReservationStatusStatistics) | **Get** /hotels/{hotelId}/reservationStatusStatistics | Get Reservation Status Statistics
[**GetRoomsByRoomStatus**](FOFStatsApi.md#GetRoomsByRoomStatus) | **Get** /hotels/{hotelId}/roomStatusStatistics | Get counts of rooms by housekeeping status and front office status.
[**GetTaskSheetStatistics**](FOFStatsApi.md#GetTaskSheetStatistics) | **Get** /hotels/{hotelId}/houseKeepingStatistics | Get housekeeping statistics



## GetFrontOfficeStatistics

> Statistics GetFrontOfficeStatistics(ctx, statisticsCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Date(date).Metric(metric).ParameterNames(parameterNames).ParameterValues(parameterValues).RoomClasses(roomClasses).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get front office statistics



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/fof"
)

func main() {
    statisticsCode := "statisticsCode_example" // string | Below are the Statistics Code mapping for valid metric code.<p><strong>AdvanceCheckIn:</strong></p>IndividualAdvanceCheckedInCurrent,BlockAdvanceCheckedInInhouse,BlockAdvanceCheckedInTotal,IndividualAdvanceCheckedInInhouse,IndividualAdvanceCheckedInTotal,BlockAdvanceCheckedInCurrent;<p><strong>AIRoomAssignment:</strong></p>MaxPercentageOccupiedTonightRooms,ArrivalResvs,ArrivalVIPResvs,ArrivalMemberResvs,ArrivalUnallocResvs,ArrivalManualAssgnResvs,ArrivalAIAssgnResvs,ArrivalAIUpgResvs,ArrivalAIAssgnVIPResvs,ArrivalAIAssgnMemberResvs,ArrivalAIAssgnOverridden;<p><strong>AvailableRooms:</strong></p>MinAvailableTonightRooms;<p><strong>CheckIns:</strong></p>ArrivalsTotal,CheckedInsTotal,ExpectedCheckInsTotal,QueueRooms;CheckOuts:DeparturesTotal,CheckedOutsTotal,AdultsDeparted,ChildrenDeparted,ExpectedCheckOutsTotal,AdultsExpectedCheckedOut,ChildrenExpectedCheckedOut,ScheduledCheckOutsTotal;<p><strong>ComplimentaryOrHouseUse:</strong></p>ComplimentaryArrivalRooms,ComplimentaryArrivalPersons,ComplimentaryArrivalVIP,ComplimentaryStayoverRooms,ComplimentaryStayoverPersons,ComplimentaryStayoverVIP,ComplimentaryDepartureRooms,ComplimentaryDeparturePersons,ComplimentaryDepartureVIP,HouseUseArrivalRooms,HouseUseArrivalPersons,HouseUseArrivalVIP,HouseUseStayoverRooms,HouseUseStayoverPersons,HouseUseStayoverVIP,HouseUseDepartureRooms,HouseUseDeparturePersons,HouseUseDepartureVIP;<p><strong>DailyProjection:</strong></p>IndividualRooms,IndividualPersons,IndividualVIP,GroupAndBlockRooms,GroupAndBlockPersons,GroupAndBlockVIP,MaxOccupiedTonightRooms,MaxOccupiedTonightPersons,MaxOccupiedTonightVIP,BlocksNotPickedUp,MaxPercentageOccupiedTonightRooms,MinAvailableTonightRooms,RoomRevenue,TotalRevenue,AverageRoomRevenue,RevPar;<p><strong>HouseSummary:</strong></p>TotalPhysicalRooms,TotalOutOfOrder,TotalOutOfService,TotalRoomsToSell,MaxOccupiedTonightRooms,PercentRoomsOccupied,RoomRevenue,TotalRevenue,RevPar,AverageRoomRevenue;<p><strong>HouseSummaryMonthToDate:</strong></p>TotalPhysicalRooms,TotalOutOfOrder,TotalOutOfService,TotalRoomsToSell,MaxOccupiedTonightRooms,PercentRoomsOccupied,RoomRevenue,RevPar,TotalRevenue,AverageRoomRevenue;<p><strong>HouseSummaryYearToDate:</strong></p>TotalPhysicalRooms,TotalOutOfOrder,TotalOutOfService,TotalRoomsToSell,MaxOccupiedTonightRooms,PercentRoomsOccupied,RoomRevenue,RevPar,TotalRevenue,AverageRoomRevenue;<p><strong>InHouse:</strong></p>AdultsInHouse,ChildrenInHouse,InHouseRooms,InHouse;<p><strong>LastHourStatus:</strong></p>ArrivalsInLastHour,DeparturesInLastHour,InspectedRooms,CleanedRooms;<p><strong>ReservationActivity:</strong></p>StayoverRooms,StayoverPersons,StayoverVIP,DeparturesExpectedRooms,DeparturesExpectedPersons,DeparturesExpectedVIP,DeparturesActualRooms,DeparturesActualPersons,DeparturesActualVIP,ArrivalsExpectedRooms,ArrivalsExpectedPersons,ArrivalsExpectedVIP,ArrivalsActualRooms,ArrivalsActualPersons,ArrivalsActualVIP,ArrivalsExpectedRoomsMadeToday,ArrivalsExpectedPersonsMadeToday,ArrivalsExpectedVIPMadeToday,ExtendedStaysRooms,ExtendedStaysPersons,ExtendedStaysVIP,EarlyDeparturesRooms,EarlyDeparturesPersons,EarlyDeparturesVIP,DayUseRooms,DayUsePersons,DayUseVIP,WalkInRooms,WalkInPersons,WalkInVIP,CanceledOnArrivalRooms,CanceledOnArrivalPersons,CanceledOnArrivalVIP,AverageCheckInTime;<p><strong>ReservationActivityDaily:</strong></p>AdultsInHouse,ChildrenInHouse,ArrivalsTotal,TurndownRequired,DeparturesTotal,MaxOccupancyPercentage,Stayover,TotalRoomsReserved;<p><strong>ReservationActivityMonthToDate:</strong></p>ArrivalsActualRooms,ArrivalsActualPersons,DeparturesActualRooms,DeparturesActualPersons,ExtendedStaysRooms,ExtendedStaysPersons,EarlyDeparturesRooms,EarlyDeparturesPersons,DayUseRooms,DayUsePersons;<p><strong>ReservationActivityYearToDate:</strong></p>ArrivalsActualRooms,ArrivalsActualPersons,DeparturesActualRooms,DeparturesActualPersons,ExtendedStaysRooms,ExtendedStaysPersons,EarlyDeparturesRooms,EarlyDeparturesPersons,DayUseRooms,DayUsePersons;<p><strong>ReservationsCancellationsToday:</strong></p>CancellationsTotal,NewReservationsTotal;<p><strong>ReservationStatistics:</strong></p>PreRegisteredTotal,VIPPreRegisteredTotal,TurndownTotal,VIPTurndownTotal,OpenFolioTotal,ExpectedCheckOutsTotal;<p><strong>RoomMaintenance:</strong></p>RoomMaintenanceResolvedTotal,RoomMaintenanceUnResolvedTotal;<p><strong>RoomStatus:</strong></p>InspectedVacant,InspectedAssigned,InspectedOccupied,CleanVacant,CleanAssigned,CleanOccupied,DirtyVacant,DirtyAssigned,DirtyOccupied,PickupVacant,PickupAssigned,PickupOccupied,OutOfOrderVacant,OutOfOrderAssigned,OutOfOrderOccupied,OutOfServiceVacant,OutOfServiceAssigned,OutOfServiceOccupied,TotalOutOfOrder,TotalOutOfService,QueueRooms,CurrentAveWaitTime,SkipRooms,SleepRooms;<p><strong>Turndown:</strong></p>TurndownRequired,TurndownNotRequired,TurndownCompletedRequired;<p><strong>VIPGuests:</strong></p>VIPGuestsArriving,VIPGuestsDeparting;
    hotelId := "hotelId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    date := time.Now() // string | Start date of the report. (optional)
    metric := []string{"Metric_example"} // []string | Supported housekeeping statistical codes. (optional)
    parameterNames := []string{"Inner_example"} // []string | Required when statisticsCode is ReservationsCancellationsToday (optional)
    parameterValues := []string{"Inner_example"} // []string | Required when statisticsCode is ReservationsCancellationsToday (optional)
    roomClasses := []string{"Inner_example"} // []string | Room Class of the Room. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.FOFStatsApi.GetFrontOfficeStatistics(context.Background(), statisticsCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Date(date).Metric(metric).ParameterNames(parameterNames).ParameterValues(parameterValues).RoomClasses(roomClasses).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `FOFStatsApi.GetFrontOfficeStatistics``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetFrontOfficeStatistics`: Statistics
    fmt.Fprintf(os.Stdout, "Response from `FOFStatsApi.GetFrontOfficeStatistics`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**statisticsCode** | **string** | Below are the Statistics Code mapping for valid metric code.&lt;p&gt;&lt;strong&gt;AdvanceCheckIn:&lt;/strong&gt;&lt;/p&gt;IndividualAdvanceCheckedInCurrent,BlockAdvanceCheckedInInhouse,BlockAdvanceCheckedInTotal,IndividualAdvanceCheckedInInhouse,IndividualAdvanceCheckedInTotal,BlockAdvanceCheckedInCurrent;&lt;p&gt;&lt;strong&gt;AIRoomAssignment:&lt;/strong&gt;&lt;/p&gt;MaxPercentageOccupiedTonightRooms,ArrivalResvs,ArrivalVIPResvs,ArrivalMemberResvs,ArrivalUnallocResvs,ArrivalManualAssgnResvs,ArrivalAIAssgnResvs,ArrivalAIUpgResvs,ArrivalAIAssgnVIPResvs,ArrivalAIAssgnMemberResvs,ArrivalAIAssgnOverridden;&lt;p&gt;&lt;strong&gt;AvailableRooms:&lt;/strong&gt;&lt;/p&gt;MinAvailableTonightRooms;&lt;p&gt;&lt;strong&gt;CheckIns:&lt;/strong&gt;&lt;/p&gt;ArrivalsTotal,CheckedInsTotal,ExpectedCheckInsTotal,QueueRooms;CheckOuts:DeparturesTotal,CheckedOutsTotal,AdultsDeparted,ChildrenDeparted,ExpectedCheckOutsTotal,AdultsExpectedCheckedOut,ChildrenExpectedCheckedOut,ScheduledCheckOutsTotal;&lt;p&gt;&lt;strong&gt;ComplimentaryOrHouseUse:&lt;/strong&gt;&lt;/p&gt;ComplimentaryArrivalRooms,ComplimentaryArrivalPersons,ComplimentaryArrivalVIP,ComplimentaryStayoverRooms,ComplimentaryStayoverPersons,ComplimentaryStayoverVIP,ComplimentaryDepartureRooms,ComplimentaryDeparturePersons,ComplimentaryDepartureVIP,HouseUseArrivalRooms,HouseUseArrivalPersons,HouseUseArrivalVIP,HouseUseStayoverRooms,HouseUseStayoverPersons,HouseUseStayoverVIP,HouseUseDepartureRooms,HouseUseDeparturePersons,HouseUseDepartureVIP;&lt;p&gt;&lt;strong&gt;DailyProjection:&lt;/strong&gt;&lt;/p&gt;IndividualRooms,IndividualPersons,IndividualVIP,GroupAndBlockRooms,GroupAndBlockPersons,GroupAndBlockVIP,MaxOccupiedTonightRooms,MaxOccupiedTonightPersons,MaxOccupiedTonightVIP,BlocksNotPickedUp,MaxPercentageOccupiedTonightRooms,MinAvailableTonightRooms,RoomRevenue,TotalRevenue,AverageRoomRevenue,RevPar;&lt;p&gt;&lt;strong&gt;HouseSummary:&lt;/strong&gt;&lt;/p&gt;TotalPhysicalRooms,TotalOutOfOrder,TotalOutOfService,TotalRoomsToSell,MaxOccupiedTonightRooms,PercentRoomsOccupied,RoomRevenue,TotalRevenue,RevPar,AverageRoomRevenue;&lt;p&gt;&lt;strong&gt;HouseSummaryMonthToDate:&lt;/strong&gt;&lt;/p&gt;TotalPhysicalRooms,TotalOutOfOrder,TotalOutOfService,TotalRoomsToSell,MaxOccupiedTonightRooms,PercentRoomsOccupied,RoomRevenue,RevPar,TotalRevenue,AverageRoomRevenue;&lt;p&gt;&lt;strong&gt;HouseSummaryYearToDate:&lt;/strong&gt;&lt;/p&gt;TotalPhysicalRooms,TotalOutOfOrder,TotalOutOfService,TotalRoomsToSell,MaxOccupiedTonightRooms,PercentRoomsOccupied,RoomRevenue,RevPar,TotalRevenue,AverageRoomRevenue;&lt;p&gt;&lt;strong&gt;InHouse:&lt;/strong&gt;&lt;/p&gt;AdultsInHouse,ChildrenInHouse,InHouseRooms,InHouse;&lt;p&gt;&lt;strong&gt;LastHourStatus:&lt;/strong&gt;&lt;/p&gt;ArrivalsInLastHour,DeparturesInLastHour,InspectedRooms,CleanedRooms;&lt;p&gt;&lt;strong&gt;ReservationActivity:&lt;/strong&gt;&lt;/p&gt;StayoverRooms,StayoverPersons,StayoverVIP,DeparturesExpectedRooms,DeparturesExpectedPersons,DeparturesExpectedVIP,DeparturesActualRooms,DeparturesActualPersons,DeparturesActualVIP,ArrivalsExpectedRooms,ArrivalsExpectedPersons,ArrivalsExpectedVIP,ArrivalsActualRooms,ArrivalsActualPersons,ArrivalsActualVIP,ArrivalsExpectedRoomsMadeToday,ArrivalsExpectedPersonsMadeToday,ArrivalsExpectedVIPMadeToday,ExtendedStaysRooms,ExtendedStaysPersons,ExtendedStaysVIP,EarlyDeparturesRooms,EarlyDeparturesPersons,EarlyDeparturesVIP,DayUseRooms,DayUsePersons,DayUseVIP,WalkInRooms,WalkInPersons,WalkInVIP,CanceledOnArrivalRooms,CanceledOnArrivalPersons,CanceledOnArrivalVIP,AverageCheckInTime;&lt;p&gt;&lt;strong&gt;ReservationActivityDaily:&lt;/strong&gt;&lt;/p&gt;AdultsInHouse,ChildrenInHouse,ArrivalsTotal,TurndownRequired,DeparturesTotal,MaxOccupancyPercentage,Stayover,TotalRoomsReserved;&lt;p&gt;&lt;strong&gt;ReservationActivityMonthToDate:&lt;/strong&gt;&lt;/p&gt;ArrivalsActualRooms,ArrivalsActualPersons,DeparturesActualRooms,DeparturesActualPersons,ExtendedStaysRooms,ExtendedStaysPersons,EarlyDeparturesRooms,EarlyDeparturesPersons,DayUseRooms,DayUsePersons;&lt;p&gt;&lt;strong&gt;ReservationActivityYearToDate:&lt;/strong&gt;&lt;/p&gt;ArrivalsActualRooms,ArrivalsActualPersons,DeparturesActualRooms,DeparturesActualPersons,ExtendedStaysRooms,ExtendedStaysPersons,EarlyDeparturesRooms,EarlyDeparturesPersons,DayUseRooms,DayUsePersons;&lt;p&gt;&lt;strong&gt;ReservationsCancellationsToday:&lt;/strong&gt;&lt;/p&gt;CancellationsTotal,NewReservationsTotal;&lt;p&gt;&lt;strong&gt;ReservationStatistics:&lt;/strong&gt;&lt;/p&gt;PreRegisteredTotal,VIPPreRegisteredTotal,TurndownTotal,VIPTurndownTotal,OpenFolioTotal,ExpectedCheckOutsTotal;&lt;p&gt;&lt;strong&gt;RoomMaintenance:&lt;/strong&gt;&lt;/p&gt;RoomMaintenanceResolvedTotal,RoomMaintenanceUnResolvedTotal;&lt;p&gt;&lt;strong&gt;RoomStatus:&lt;/strong&gt;&lt;/p&gt;InspectedVacant,InspectedAssigned,InspectedOccupied,CleanVacant,CleanAssigned,CleanOccupied,DirtyVacant,DirtyAssigned,DirtyOccupied,PickupVacant,PickupAssigned,PickupOccupied,OutOfOrderVacant,OutOfOrderAssigned,OutOfOrderOccupied,OutOfServiceVacant,OutOfServiceAssigned,OutOfServiceOccupied,TotalOutOfOrder,TotalOutOfService,QueueRooms,CurrentAveWaitTime,SkipRooms,SleepRooms;&lt;p&gt;&lt;strong&gt;Turndown:&lt;/strong&gt;&lt;/p&gt;TurndownRequired,TurndownNotRequired,TurndownCompletedRequired;&lt;p&gt;&lt;strong&gt;VIPGuests:&lt;/strong&gt;&lt;/p&gt;VIPGuestsArriving,VIPGuestsDeparting; | 
**hotelId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetFrontOfficeStatisticsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **date** | **string** | Start date of the report. | 
 **metric** | **[]string** | Supported housekeeping statistical codes. | 
 **parameterNames** | **[]string** | Required when statisticsCode is ReservationsCancellationsToday | 
 **parameterValues** | **[]string** | Required when statisticsCode is ReservationsCancellationsToday | 
 **roomClasses** | **[]string** | Room Class of the Room. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Statistics**](Statistics.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetFrontOfficeStatisticsWithDateRange

> Statistics GetFrontOfficeStatisticsWithDateRange(ctx, statisticsCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).EndDate(endDate).Date(date).Metric(metric).ParameterNames(parameterNames).ParameterValues(parameterValues).RoomClasses(roomClasses).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get front office Statistics



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/fof"
)

func main() {
    statisticsCode := "statisticsCode_example" // string | Below are the Statistics Code mapping for valid metric code.<p><strong>ReservationActivityDaily:</strong></p>AdultsInHouse,ChildrenInHouse,ArrivalsTotal,TurndownRequired,DeparturesTotal,MaxOccupancyPercentage,Stayover,TotalRoomsReserved;
    hotelId := "hotelId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    endDate := time.Now() // string | End date of the report. (optional)
    date := time.Now() // string | Start date of the report. (optional)
    metric := []string{"Metric_example"} // []string | Supported housekeeping statistical codes. (optional)
    parameterNames := []string{"Inner_example"} // []string | Required when statisticsCode is ReservationsCancellationsToday (optional)
    parameterValues := []string{"Inner_example"} // []string | Required when statisticsCode is ReservationsCancellationsToday (optional)
    roomClasses := []string{"Inner_example"} // []string | Room Class of the Room. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.FOFStatsApi.GetFrontOfficeStatisticsWithDateRange(context.Background(), statisticsCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).EndDate(endDate).Date(date).Metric(metric).ParameterNames(parameterNames).ParameterValues(parameterValues).RoomClasses(roomClasses).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `FOFStatsApi.GetFrontOfficeStatisticsWithDateRange``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetFrontOfficeStatisticsWithDateRange`: Statistics
    fmt.Fprintf(os.Stdout, "Response from `FOFStatsApi.GetFrontOfficeStatisticsWithDateRange`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**statisticsCode** | **string** | Below are the Statistics Code mapping for valid metric code.&lt;p&gt;&lt;strong&gt;ReservationActivityDaily:&lt;/strong&gt;&lt;/p&gt;AdultsInHouse,ChildrenInHouse,ArrivalsTotal,TurndownRequired,DeparturesTotal,MaxOccupancyPercentage,Stayover,TotalRoomsReserved; | 
**hotelId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetFrontOfficeStatisticsWithDateRangeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **endDate** | **string** | End date of the report. | 
 **date** | **string** | Start date of the report. | 
 **metric** | **[]string** | Supported housekeeping statistical codes. | 
 **parameterNames** | **[]string** | Required when statisticsCode is ReservationsCancellationsToday | 
 **parameterValues** | **[]string** | Required when statisticsCode is ReservationsCancellationsToday | 
 **roomClasses** | **[]string** | Room Class of the Room. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Statistics**](Statistics.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetReservationQueueStatistics

> ReservationQueueStatistics GetReservationQueueStatistics(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get hotel reservation queue statistics



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fof"
)

func main() {
    hotelId := "hotelId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.FOFStatsApi.GetReservationQueueStatistics(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `FOFStatsApi.GetReservationQueueStatistics``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetReservationQueueStatistics`: ReservationQueueStatistics
    fmt.Fprintf(os.Stdout, "Response from `FOFStatsApi.GetReservationQueueStatistics`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetReservationQueueStatisticsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ReservationQueueStatistics**](ReservationQueueStatistics.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetReservationStatusStatistics

> ReservationStatusStatisticsResponseType GetReservationStatusStatistics(ctx, hotelId).ReservationStatus(reservationStatus).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Reservation Status Statistics



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fof"
)

func main() {
    hotelId := "hotelId_example" // string | Hotel Code
    reservationStatus := []string{"ReservationStatus_example"} // []string | Reservation statuses to fetch statistics for
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.FOFStatsApi.GetReservationStatusStatistics(context.Background(), hotelId).ReservationStatus(reservationStatus).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `FOFStatsApi.GetReservationStatusStatistics``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetReservationStatusStatistics`: ReservationStatusStatisticsResponseType
    fmt.Fprintf(os.Stdout, "Response from `FOFStatsApi.GetReservationStatusStatistics`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Hotel Code | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetReservationStatusStatisticsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **reservationStatus** | **[]string** | Reservation statuses to fetch statistics for | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ReservationStatusStatisticsResponseType**](ReservationStatusStatisticsResponseType.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetRoomsByRoomStatus

> RoomStatusStatisticsListType GetRoomsByRoomStatus(ctx, hotelId).FrontOfficeStatus(frontOfficeStatus).Execute()

Get counts of rooms by housekeeping status and front office status.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fof"
)

func main() {
    hotelId := "hotelId_example" // string | 
    frontOfficeStatus := "frontOfficeStatus_example" // string | Filter by frontOfficeStatus. If nothing is passed, we fetch all. (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.FOFStatsApi.GetRoomsByRoomStatus(context.Background(), hotelId).FrontOfficeStatus(frontOfficeStatus).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `FOFStatsApi.GetRoomsByRoomStatus``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetRoomsByRoomStatus`: RoomStatusStatisticsListType
    fmt.Fprintf(os.Stdout, "Response from `FOFStatsApi.GetRoomsByRoomStatus`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetRoomsByRoomStatusRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **frontOfficeStatus** | **string** | Filter by frontOfficeStatus. If nothing is passed, we fetch all. | 

### Return type

[**RoomStatusStatisticsListType**](RoomStatusStatisticsListType.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetTaskSheetStatistics

> TaskSheetStatistics GetTaskSheetStatistics(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).IncludeAllAssignedTasks(includeAllAssignedTasks).IncludeTaskSheetsDetails(includeTaskSheetsDetails).TaskCode(taskCode).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get housekeeping statistics



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/fof"
)

func main() {
    hotelId := "hotelId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    includeAllAssignedTasks := true // bool | This flag, if true, enables fetching statistics for all the housekeeping tasks assigned. (optional) (default to true)
    includeTaskSheetsDetails := true // bool |  (optional) (default to false)
    taskCode := "taskCode_example" // string | Task code of the task sheet. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.FOFStatsApi.GetTaskSheetStatistics(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).IncludeAllAssignedTasks(includeAllAssignedTasks).IncludeTaskSheetsDetails(includeTaskSheetsDetails).TaskCode(taskCode).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `FOFStatsApi.GetTaskSheetStatistics``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetTaskSheetStatistics`: TaskSheetStatistics
    fmt.Fprintf(os.Stdout, "Response from `FOFStatsApi.GetTaskSheetStatistics`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetTaskSheetStatisticsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **includeAllAssignedTasks** | **bool** | This flag, if true, enables fetching statistics for all the housekeeping tasks assigned. | [default to true]
 **includeTaskSheetsDetails** | **bool** |  | [default to false]
 **taskCode** | **string** | Task code of the task sheet. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**TaskSheetStatistics**](TaskSheetStatistics.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


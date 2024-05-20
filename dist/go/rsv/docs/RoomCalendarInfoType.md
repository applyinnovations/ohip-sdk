# RoomCalendarInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ComponentRoomReservationsForSuite** | Pointer to [**[]ComponentBlockOutDates**](ComponentBlockOutDates.md) | If room is a component suite , holds information about component room reservations | [optional] 
**ComponentSuite** | Pointer to **bool** | Indicates if a room is a Component Suite or not. | [optional] 
**HouseKeeping** | Pointer to **bool** | Indicates true/false. When this flag is set to true indicates room type of the room is flagged as housekeeping. | [optional] 
**Pseudo** | Pointer to **bool** | Indicates if a room is a Pseudo room or not. | [optional] 
**RoomId** | Pointer to **string** | Room Number. | [optional] 
**RoomInfo** | Pointer to [**RoomInfo**](RoomInfo.md) |  | [optional] 
**RoomOrder** | Pointer to **int32** | Order the Room is displayed based on the Room Display Room settings. | [optional] 
**RoomSchedule** | Pointer to [**[]RoomScheduleType**](RoomScheduleType.md) | Holds the Schedule and Reservations. | [optional] 

## Methods

### NewRoomCalendarInfoType

`func NewRoomCalendarInfoType() *RoomCalendarInfoType`

NewRoomCalendarInfoType instantiates a new RoomCalendarInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoomCalendarInfoTypeWithDefaults

`func NewRoomCalendarInfoTypeWithDefaults() *RoomCalendarInfoType`

NewRoomCalendarInfoTypeWithDefaults instantiates a new RoomCalendarInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetComponentRoomReservationsForSuite

`func (o *RoomCalendarInfoType) GetComponentRoomReservationsForSuite() []ComponentBlockOutDates`

GetComponentRoomReservationsForSuite returns the ComponentRoomReservationsForSuite field if non-nil, zero value otherwise.

### GetComponentRoomReservationsForSuiteOk

`func (o *RoomCalendarInfoType) GetComponentRoomReservationsForSuiteOk() (*[]ComponentBlockOutDates, bool)`

GetComponentRoomReservationsForSuiteOk returns a tuple with the ComponentRoomReservationsForSuite field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComponentRoomReservationsForSuite

`func (o *RoomCalendarInfoType) SetComponentRoomReservationsForSuite(v []ComponentBlockOutDates)`

SetComponentRoomReservationsForSuite sets ComponentRoomReservationsForSuite field to given value.

### HasComponentRoomReservationsForSuite

`func (o *RoomCalendarInfoType) HasComponentRoomReservationsForSuite() bool`

HasComponentRoomReservationsForSuite returns a boolean if a field has been set.

### GetComponentSuite

`func (o *RoomCalendarInfoType) GetComponentSuite() bool`

GetComponentSuite returns the ComponentSuite field if non-nil, zero value otherwise.

### GetComponentSuiteOk

`func (o *RoomCalendarInfoType) GetComponentSuiteOk() (*bool, bool)`

GetComponentSuiteOk returns a tuple with the ComponentSuite field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComponentSuite

`func (o *RoomCalendarInfoType) SetComponentSuite(v bool)`

SetComponentSuite sets ComponentSuite field to given value.

### HasComponentSuite

`func (o *RoomCalendarInfoType) HasComponentSuite() bool`

HasComponentSuite returns a boolean if a field has been set.

### GetHouseKeeping

`func (o *RoomCalendarInfoType) GetHouseKeeping() bool`

GetHouseKeeping returns the HouseKeeping field if non-nil, zero value otherwise.

### GetHouseKeepingOk

`func (o *RoomCalendarInfoType) GetHouseKeepingOk() (*bool, bool)`

GetHouseKeepingOk returns a tuple with the HouseKeeping field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHouseKeeping

`func (o *RoomCalendarInfoType) SetHouseKeeping(v bool)`

SetHouseKeeping sets HouseKeeping field to given value.

### HasHouseKeeping

`func (o *RoomCalendarInfoType) HasHouseKeeping() bool`

HasHouseKeeping returns a boolean if a field has been set.

### GetPseudo

`func (o *RoomCalendarInfoType) GetPseudo() bool`

GetPseudo returns the Pseudo field if non-nil, zero value otherwise.

### GetPseudoOk

`func (o *RoomCalendarInfoType) GetPseudoOk() (*bool, bool)`

GetPseudoOk returns a tuple with the Pseudo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPseudo

`func (o *RoomCalendarInfoType) SetPseudo(v bool)`

SetPseudo sets Pseudo field to given value.

### HasPseudo

`func (o *RoomCalendarInfoType) HasPseudo() bool`

HasPseudo returns a boolean if a field has been set.

### GetRoomId

`func (o *RoomCalendarInfoType) GetRoomId() string`

GetRoomId returns the RoomId field if non-nil, zero value otherwise.

### GetRoomIdOk

`func (o *RoomCalendarInfoType) GetRoomIdOk() (*string, bool)`

GetRoomIdOk returns a tuple with the RoomId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomId

`func (o *RoomCalendarInfoType) SetRoomId(v string)`

SetRoomId sets RoomId field to given value.

### HasRoomId

`func (o *RoomCalendarInfoType) HasRoomId() bool`

HasRoomId returns a boolean if a field has been set.

### GetRoomInfo

`func (o *RoomCalendarInfoType) GetRoomInfo() RoomInfo`

GetRoomInfo returns the RoomInfo field if non-nil, zero value otherwise.

### GetRoomInfoOk

`func (o *RoomCalendarInfoType) GetRoomInfoOk() (*RoomInfo, bool)`

GetRoomInfoOk returns a tuple with the RoomInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomInfo

`func (o *RoomCalendarInfoType) SetRoomInfo(v RoomInfo)`

SetRoomInfo sets RoomInfo field to given value.

### HasRoomInfo

`func (o *RoomCalendarInfoType) HasRoomInfo() bool`

HasRoomInfo returns a boolean if a field has been set.

### GetRoomOrder

`func (o *RoomCalendarInfoType) GetRoomOrder() int32`

GetRoomOrder returns the RoomOrder field if non-nil, zero value otherwise.

### GetRoomOrderOk

`func (o *RoomCalendarInfoType) GetRoomOrderOk() (*int32, bool)`

GetRoomOrderOk returns a tuple with the RoomOrder field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomOrder

`func (o *RoomCalendarInfoType) SetRoomOrder(v int32)`

SetRoomOrder sets RoomOrder field to given value.

### HasRoomOrder

`func (o *RoomCalendarInfoType) HasRoomOrder() bool`

HasRoomOrder returns a boolean if a field has been set.

### GetRoomSchedule

`func (o *RoomCalendarInfoType) GetRoomSchedule() []RoomScheduleType`

GetRoomSchedule returns the RoomSchedule field if non-nil, zero value otherwise.

### GetRoomScheduleOk

`func (o *RoomCalendarInfoType) GetRoomScheduleOk() (*[]RoomScheduleType, bool)`

GetRoomScheduleOk returns a tuple with the RoomSchedule field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomSchedule

`func (o *RoomCalendarInfoType) SetRoomSchedule(v []RoomScheduleType)`

SetRoomSchedule sets RoomSchedule field to given value.

### HasRoomSchedule

`func (o *RoomCalendarInfoType) HasRoomSchedule() bool`

HasRoomSchedule returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



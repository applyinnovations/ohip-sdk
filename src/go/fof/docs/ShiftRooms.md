# ShiftRooms

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**SourceRoom** | Pointer to [**StayRoominfo**](StayRoominfo.md) |  | [optional] 
**TargetRoom** | Pointer to [**StayRoominfo**](StayRoominfo.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewShiftRooms

`func NewShiftRooms() *ShiftRooms`

NewShiftRooms instantiates a new ShiftRooms object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewShiftRoomsWithDefaults

`func NewShiftRoomsWithDefaults() *ShiftRooms`

NewShiftRoomsWithDefaults instantiates a new ShiftRooms object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *ShiftRooms) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ShiftRooms) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ShiftRooms) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ShiftRooms) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetSourceRoom

`func (o *ShiftRooms) GetSourceRoom() StayRoominfo`

GetSourceRoom returns the SourceRoom field if non-nil, zero value otherwise.

### GetSourceRoomOk

`func (o *ShiftRooms) GetSourceRoomOk() (*StayRoominfo, bool)`

GetSourceRoomOk returns a tuple with the SourceRoom field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceRoom

`func (o *ShiftRooms) SetSourceRoom(v StayRoominfo)`

SetSourceRoom sets SourceRoom field to given value.

### HasSourceRoom

`func (o *ShiftRooms) HasSourceRoom() bool`

HasSourceRoom returns a boolean if a field has been set.

### GetTargetRoom

`func (o *ShiftRooms) GetTargetRoom() StayRoominfo`

GetTargetRoom returns the TargetRoom field if non-nil, zero value otherwise.

### GetTargetRoomOk

`func (o *ShiftRooms) GetTargetRoomOk() (*StayRoominfo, bool)`

GetTargetRoomOk returns a tuple with the TargetRoom field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetRoom

`func (o *ShiftRooms) SetTargetRoom(v StayRoominfo)`

SetTargetRoom sets TargetRoom field to given value.

### HasTargetRoom

`func (o *ShiftRooms) HasTargetRoom() bool`

HasTargetRoom returns a boolean if a field has been set.

### GetWarnings

`func (o *ShiftRooms) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ShiftRooms) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ShiftRooms) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ShiftRooms) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



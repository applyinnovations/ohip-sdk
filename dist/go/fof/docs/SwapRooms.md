# SwapRooms

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SourceRoom** | Pointer to [**StayRoominfo**](StayRoominfo.md) |  | [optional] 
**TargetRoom** | Pointer to [**StayRoominfo**](StayRoominfo.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewSwapRooms

`func NewSwapRooms() *SwapRooms`

NewSwapRooms instantiates a new SwapRooms object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSwapRoomsWithDefaults

`func NewSwapRoomsWithDefaults() *SwapRooms`

NewSwapRoomsWithDefaults instantiates a new SwapRooms object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSourceRoom

`func (o *SwapRooms) GetSourceRoom() StayRoominfo`

GetSourceRoom returns the SourceRoom field if non-nil, zero value otherwise.

### GetSourceRoomOk

`func (o *SwapRooms) GetSourceRoomOk() (*StayRoominfo, bool)`

GetSourceRoomOk returns a tuple with the SourceRoom field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceRoom

`func (o *SwapRooms) SetSourceRoom(v StayRoominfo)`

SetSourceRoom sets SourceRoom field to given value.

### HasSourceRoom

`func (o *SwapRooms) HasSourceRoom() bool`

HasSourceRoom returns a boolean if a field has been set.

### GetTargetRoom

`func (o *SwapRooms) GetTargetRoom() StayRoominfo`

GetTargetRoom returns the TargetRoom field if non-nil, zero value otherwise.

### GetTargetRoomOk

`func (o *SwapRooms) GetTargetRoomOk() (*StayRoominfo, bool)`

GetTargetRoomOk returns a tuple with the TargetRoom field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetRoom

`func (o *SwapRooms) SetTargetRoom(v StayRoominfo)`

SetTargetRoom sets TargetRoom field to given value.

### HasTargetRoom

`func (o *SwapRooms) HasTargetRoom() bool`

HasTargetRoom returns a boolean if a field has been set.

### GetLinks

`func (o *SwapRooms) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *SwapRooms) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *SwapRooms) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *SwapRooms) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *SwapRooms) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *SwapRooms) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *SwapRooms) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *SwapRooms) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



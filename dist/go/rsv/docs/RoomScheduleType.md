# RoomScheduleType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RoomCalendarResList** | Pointer to [**[]RoomCalendarResType**](RoomCalendarResType.md) | List of Reservations under this schedule. | [optional] 
**RoomScheduleDisplay** | Pointer to [**RoomCalendarDisplayType**](RoomCalendarDisplayType.md) |  | [optional] 
**RoomScheduleCategory** | Pointer to [**RoomScheduleCategoryType**](RoomScheduleCategoryType.md) |  | [optional] 
**Description** | Pointer to **string** | Description for the the Room Schedule. | [optional] 
**Start** | Pointer to **string** | The starting value of the time span. | [optional] 
**End** | Pointer to **string** | The ending value of the time span. | [optional] 

## Methods

### NewRoomScheduleType

`func NewRoomScheduleType() *RoomScheduleType`

NewRoomScheduleType instantiates a new RoomScheduleType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoomScheduleTypeWithDefaults

`func NewRoomScheduleTypeWithDefaults() *RoomScheduleType`

NewRoomScheduleTypeWithDefaults instantiates a new RoomScheduleType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRoomCalendarResList

`func (o *RoomScheduleType) GetRoomCalendarResList() []RoomCalendarResType`

GetRoomCalendarResList returns the RoomCalendarResList field if non-nil, zero value otherwise.

### GetRoomCalendarResListOk

`func (o *RoomScheduleType) GetRoomCalendarResListOk() (*[]RoomCalendarResType, bool)`

GetRoomCalendarResListOk returns a tuple with the RoomCalendarResList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomCalendarResList

`func (o *RoomScheduleType) SetRoomCalendarResList(v []RoomCalendarResType)`

SetRoomCalendarResList sets RoomCalendarResList field to given value.

### HasRoomCalendarResList

`func (o *RoomScheduleType) HasRoomCalendarResList() bool`

HasRoomCalendarResList returns a boolean if a field has been set.

### GetRoomScheduleDisplay

`func (o *RoomScheduleType) GetRoomScheduleDisplay() RoomCalendarDisplayType`

GetRoomScheduleDisplay returns the RoomScheduleDisplay field if non-nil, zero value otherwise.

### GetRoomScheduleDisplayOk

`func (o *RoomScheduleType) GetRoomScheduleDisplayOk() (*RoomCalendarDisplayType, bool)`

GetRoomScheduleDisplayOk returns a tuple with the RoomScheduleDisplay field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomScheduleDisplay

`func (o *RoomScheduleType) SetRoomScheduleDisplay(v RoomCalendarDisplayType)`

SetRoomScheduleDisplay sets RoomScheduleDisplay field to given value.

### HasRoomScheduleDisplay

`func (o *RoomScheduleType) HasRoomScheduleDisplay() bool`

HasRoomScheduleDisplay returns a boolean if a field has been set.

### GetRoomScheduleCategory

`func (o *RoomScheduleType) GetRoomScheduleCategory() RoomScheduleCategoryType`

GetRoomScheduleCategory returns the RoomScheduleCategory field if non-nil, zero value otherwise.

### GetRoomScheduleCategoryOk

`func (o *RoomScheduleType) GetRoomScheduleCategoryOk() (*RoomScheduleCategoryType, bool)`

GetRoomScheduleCategoryOk returns a tuple with the RoomScheduleCategory field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomScheduleCategory

`func (o *RoomScheduleType) SetRoomScheduleCategory(v RoomScheduleCategoryType)`

SetRoomScheduleCategory sets RoomScheduleCategory field to given value.

### HasRoomScheduleCategory

`func (o *RoomScheduleType) HasRoomScheduleCategory() bool`

HasRoomScheduleCategory returns a boolean if a field has been set.

### GetDescription

`func (o *RoomScheduleType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *RoomScheduleType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *RoomScheduleType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *RoomScheduleType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetStart

`func (o *RoomScheduleType) GetStart() string`

GetStart returns the Start field if non-nil, zero value otherwise.

### GetStartOk

`func (o *RoomScheduleType) GetStartOk() (*string, bool)`

GetStartOk returns a tuple with the Start field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStart

`func (o *RoomScheduleType) SetStart(v string)`

SetStart sets Start field to given value.

### HasStart

`func (o *RoomScheduleType) HasStart() bool`

HasStart returns a boolean if a field has been set.

### GetEnd

`func (o *RoomScheduleType) GetEnd() string`

GetEnd returns the End field if non-nil, zero value otherwise.

### GetEndOk

`func (o *RoomScheduleType) GetEndOk() (*string, bool)`

GetEndOk returns a tuple with the End field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnd

`func (o *RoomScheduleType) SetEnd(v string)`

SetEnd sets End field to given value.

### HasEnd

`func (o *RoomScheduleType) HasEnd() bool`

HasEnd returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



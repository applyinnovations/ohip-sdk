# ScheduleRoomMoveType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ScheduleRoomMoveStatus** | Pointer to [**ScheduledRoomMoveStatusType**](ScheduledRoomMoveStatusType.md) |  | [optional] 
**ScheduleRoomMoveDate** | Pointer to **string** | Business date on which room is scheduled to be moved from or to another room. | [optional] 
**ScheduleMoveRoomNumber** | Pointer to **string** | Room to which guest is scheduled to be moved. | [optional] 
**ScheduledMoveTime** | Pointer to **string** | The scheduled time of room move. | [optional] 

## Methods

### NewScheduleRoomMoveType

`func NewScheduleRoomMoveType() *ScheduleRoomMoveType`

NewScheduleRoomMoveType instantiates a new ScheduleRoomMoveType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewScheduleRoomMoveTypeWithDefaults

`func NewScheduleRoomMoveTypeWithDefaults() *ScheduleRoomMoveType`

NewScheduleRoomMoveTypeWithDefaults instantiates a new ScheduleRoomMoveType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetScheduleRoomMoveStatus

`func (o *ScheduleRoomMoveType) GetScheduleRoomMoveStatus() ScheduledRoomMoveStatusType`

GetScheduleRoomMoveStatus returns the ScheduleRoomMoveStatus field if non-nil, zero value otherwise.

### GetScheduleRoomMoveStatusOk

`func (o *ScheduleRoomMoveType) GetScheduleRoomMoveStatusOk() (*ScheduledRoomMoveStatusType, bool)`

GetScheduleRoomMoveStatusOk returns a tuple with the ScheduleRoomMoveStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScheduleRoomMoveStatus

`func (o *ScheduleRoomMoveType) SetScheduleRoomMoveStatus(v ScheduledRoomMoveStatusType)`

SetScheduleRoomMoveStatus sets ScheduleRoomMoveStatus field to given value.

### HasScheduleRoomMoveStatus

`func (o *ScheduleRoomMoveType) HasScheduleRoomMoveStatus() bool`

HasScheduleRoomMoveStatus returns a boolean if a field has been set.

### GetScheduleRoomMoveDate

`func (o *ScheduleRoomMoveType) GetScheduleRoomMoveDate() string`

GetScheduleRoomMoveDate returns the ScheduleRoomMoveDate field if non-nil, zero value otherwise.

### GetScheduleRoomMoveDateOk

`func (o *ScheduleRoomMoveType) GetScheduleRoomMoveDateOk() (*string, bool)`

GetScheduleRoomMoveDateOk returns a tuple with the ScheduleRoomMoveDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScheduleRoomMoveDate

`func (o *ScheduleRoomMoveType) SetScheduleRoomMoveDate(v string)`

SetScheduleRoomMoveDate sets ScheduleRoomMoveDate field to given value.

### HasScheduleRoomMoveDate

`func (o *ScheduleRoomMoveType) HasScheduleRoomMoveDate() bool`

HasScheduleRoomMoveDate returns a boolean if a field has been set.

### GetScheduleMoveRoomNumber

`func (o *ScheduleRoomMoveType) GetScheduleMoveRoomNumber() string`

GetScheduleMoveRoomNumber returns the ScheduleMoveRoomNumber field if non-nil, zero value otherwise.

### GetScheduleMoveRoomNumberOk

`func (o *ScheduleRoomMoveType) GetScheduleMoveRoomNumberOk() (*string, bool)`

GetScheduleMoveRoomNumberOk returns a tuple with the ScheduleMoveRoomNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScheduleMoveRoomNumber

`func (o *ScheduleRoomMoveType) SetScheduleMoveRoomNumber(v string)`

SetScheduleMoveRoomNumber sets ScheduleMoveRoomNumber field to given value.

### HasScheduleMoveRoomNumber

`func (o *ScheduleRoomMoveType) HasScheduleMoveRoomNumber() bool`

HasScheduleMoveRoomNumber returns a boolean if a field has been set.

### GetScheduledMoveTime

`func (o *ScheduleRoomMoveType) GetScheduledMoveTime() string`

GetScheduledMoveTime returns the ScheduledMoveTime field if non-nil, zero value otherwise.

### GetScheduledMoveTimeOk

`func (o *ScheduleRoomMoveType) GetScheduledMoveTimeOk() (*string, bool)`

GetScheduledMoveTimeOk returns a tuple with the ScheduledMoveTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScheduledMoveTime

`func (o *ScheduleRoomMoveType) SetScheduledMoveTime(v string)`

SetScheduledMoveTime sets ScheduledMoveTime field to given value.

### HasScheduledMoveTime

`func (o *ScheduleRoomMoveType) HasScheduledMoveTime() bool`

HasScheduledMoveTime returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



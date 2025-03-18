# MassUpdateRoutingInstructionTypeDuration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TimeSpan** | Pointer to [**MassUpdateTimeSpanType**](MassUpdateTimeSpanType.md) |  | [optional] 
**Sunday** | Pointer to **bool** |  | [optional] 
**Monday** | Pointer to **bool** |  | [optional] 
**Tuesday** | Pointer to **bool** |  | [optional] 
**Wednesday** | Pointer to **bool** |  | [optional] 
**Thursday** | Pointer to **bool** |  | [optional] 
**Friday** | Pointer to **bool** |  | [optional] 
**Saturday** | Pointer to **bool** |  | [optional] 
**Daily** | Pointer to **bool** | Flag to indicate if the routing instruction is a daily instruction. | [optional] 

## Methods

### NewMassUpdateRoutingInstructionTypeDuration

`func NewMassUpdateRoutingInstructionTypeDuration() *MassUpdateRoutingInstructionTypeDuration`

NewMassUpdateRoutingInstructionTypeDuration instantiates a new MassUpdateRoutingInstructionTypeDuration object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMassUpdateRoutingInstructionTypeDurationWithDefaults

`func NewMassUpdateRoutingInstructionTypeDurationWithDefaults() *MassUpdateRoutingInstructionTypeDuration`

NewMassUpdateRoutingInstructionTypeDurationWithDefaults instantiates a new MassUpdateRoutingInstructionTypeDuration object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTimeSpan

`func (o *MassUpdateRoutingInstructionTypeDuration) GetTimeSpan() MassUpdateTimeSpanType`

GetTimeSpan returns the TimeSpan field if non-nil, zero value otherwise.

### GetTimeSpanOk

`func (o *MassUpdateRoutingInstructionTypeDuration) GetTimeSpanOk() (*MassUpdateTimeSpanType, bool)`

GetTimeSpanOk returns a tuple with the TimeSpan field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimeSpan

`func (o *MassUpdateRoutingInstructionTypeDuration) SetTimeSpan(v MassUpdateTimeSpanType)`

SetTimeSpan sets TimeSpan field to given value.

### HasTimeSpan

`func (o *MassUpdateRoutingInstructionTypeDuration) HasTimeSpan() bool`

HasTimeSpan returns a boolean if a field has been set.

### GetSunday

`func (o *MassUpdateRoutingInstructionTypeDuration) GetSunday() bool`

GetSunday returns the Sunday field if non-nil, zero value otherwise.

### GetSundayOk

`func (o *MassUpdateRoutingInstructionTypeDuration) GetSundayOk() (*bool, bool)`

GetSundayOk returns a tuple with the Sunday field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSunday

`func (o *MassUpdateRoutingInstructionTypeDuration) SetSunday(v bool)`

SetSunday sets Sunday field to given value.

### HasSunday

`func (o *MassUpdateRoutingInstructionTypeDuration) HasSunday() bool`

HasSunday returns a boolean if a field has been set.

### GetMonday

`func (o *MassUpdateRoutingInstructionTypeDuration) GetMonday() bool`

GetMonday returns the Monday field if non-nil, zero value otherwise.

### GetMondayOk

`func (o *MassUpdateRoutingInstructionTypeDuration) GetMondayOk() (*bool, bool)`

GetMondayOk returns a tuple with the Monday field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMonday

`func (o *MassUpdateRoutingInstructionTypeDuration) SetMonday(v bool)`

SetMonday sets Monday field to given value.

### HasMonday

`func (o *MassUpdateRoutingInstructionTypeDuration) HasMonday() bool`

HasMonday returns a boolean if a field has been set.

### GetTuesday

`func (o *MassUpdateRoutingInstructionTypeDuration) GetTuesday() bool`

GetTuesday returns the Tuesday field if non-nil, zero value otherwise.

### GetTuesdayOk

`func (o *MassUpdateRoutingInstructionTypeDuration) GetTuesdayOk() (*bool, bool)`

GetTuesdayOk returns a tuple with the Tuesday field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTuesday

`func (o *MassUpdateRoutingInstructionTypeDuration) SetTuesday(v bool)`

SetTuesday sets Tuesday field to given value.

### HasTuesday

`func (o *MassUpdateRoutingInstructionTypeDuration) HasTuesday() bool`

HasTuesday returns a boolean if a field has been set.

### GetWednesday

`func (o *MassUpdateRoutingInstructionTypeDuration) GetWednesday() bool`

GetWednesday returns the Wednesday field if non-nil, zero value otherwise.

### GetWednesdayOk

`func (o *MassUpdateRoutingInstructionTypeDuration) GetWednesdayOk() (*bool, bool)`

GetWednesdayOk returns a tuple with the Wednesday field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWednesday

`func (o *MassUpdateRoutingInstructionTypeDuration) SetWednesday(v bool)`

SetWednesday sets Wednesday field to given value.

### HasWednesday

`func (o *MassUpdateRoutingInstructionTypeDuration) HasWednesday() bool`

HasWednesday returns a boolean if a field has been set.

### GetThursday

`func (o *MassUpdateRoutingInstructionTypeDuration) GetThursday() bool`

GetThursday returns the Thursday field if non-nil, zero value otherwise.

### GetThursdayOk

`func (o *MassUpdateRoutingInstructionTypeDuration) GetThursdayOk() (*bool, bool)`

GetThursdayOk returns a tuple with the Thursday field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetThursday

`func (o *MassUpdateRoutingInstructionTypeDuration) SetThursday(v bool)`

SetThursday sets Thursday field to given value.

### HasThursday

`func (o *MassUpdateRoutingInstructionTypeDuration) HasThursday() bool`

HasThursday returns a boolean if a field has been set.

### GetFriday

`func (o *MassUpdateRoutingInstructionTypeDuration) GetFriday() bool`

GetFriday returns the Friday field if non-nil, zero value otherwise.

### GetFridayOk

`func (o *MassUpdateRoutingInstructionTypeDuration) GetFridayOk() (*bool, bool)`

GetFridayOk returns a tuple with the Friday field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFriday

`func (o *MassUpdateRoutingInstructionTypeDuration) SetFriday(v bool)`

SetFriday sets Friday field to given value.

### HasFriday

`func (o *MassUpdateRoutingInstructionTypeDuration) HasFriday() bool`

HasFriday returns a boolean if a field has been set.

### GetSaturday

`func (o *MassUpdateRoutingInstructionTypeDuration) GetSaturday() bool`

GetSaturday returns the Saturday field if non-nil, zero value otherwise.

### GetSaturdayOk

`func (o *MassUpdateRoutingInstructionTypeDuration) GetSaturdayOk() (*bool, bool)`

GetSaturdayOk returns a tuple with the Saturday field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSaturday

`func (o *MassUpdateRoutingInstructionTypeDuration) SetSaturday(v bool)`

SetSaturday sets Saturday field to given value.

### HasSaturday

`func (o *MassUpdateRoutingInstructionTypeDuration) HasSaturday() bool`

HasSaturday returns a boolean if a field has been set.

### GetDaily

`func (o *MassUpdateRoutingInstructionTypeDuration) GetDaily() bool`

GetDaily returns the Daily field if non-nil, zero value otherwise.

### GetDailyOk

`func (o *MassUpdateRoutingInstructionTypeDuration) GetDailyOk() (*bool, bool)`

GetDailyOk returns a tuple with the Daily field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDaily

`func (o *MassUpdateRoutingInstructionTypeDuration) SetDaily(v bool)`

SetDaily sets Daily field to given value.

### HasDaily

`func (o *MassUpdateRoutingInstructionTypeDuration) HasDaily() bool`

HasDaily returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



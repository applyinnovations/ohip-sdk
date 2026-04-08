# RestrictionSetType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RestrictionControl** | Pointer to [**RestrictionControlType**](RestrictionControlType.md) |  | [optional] 
**RestrictionStatus** | Pointer to [**RestrictionStatusType**](RestrictionStatusType.md) |  | [optional] 
**ActualTimeSpan** | Pointer to [**TimeSpanType**](TimeSpanType.md) |  | [optional] 
**OnRequest** | Pointer to **bool** | Indicates whether the Closed restriction is flagged as On Request. | [optional] 
**ActionType** | Pointer to **string** | Indicates the action performed on restriction | [optional] 
**Start** | Pointer to **string** | The starting value of the date range. | [optional] 
**End** | Pointer to **string** | The ending value of the date range. | [optional] 
**Sunday** | Pointer to **bool** |  | [optional] 
**Monday** | Pointer to **bool** |  | [optional] 
**Tuesday** | Pointer to **bool** |  | [optional] 
**Wednesday** | Pointer to **bool** |  | [optional] 
**Thursday** | Pointer to **bool** |  | [optional] 
**Friday** | Pointer to **bool** |  | [optional] 
**Saturday** | Pointer to **bool** |  | [optional] 

## Methods

### NewRestrictionSetType

`func NewRestrictionSetType() *RestrictionSetType`

NewRestrictionSetType instantiates a new RestrictionSetType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRestrictionSetTypeWithDefaults

`func NewRestrictionSetTypeWithDefaults() *RestrictionSetType`

NewRestrictionSetTypeWithDefaults instantiates a new RestrictionSetType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRestrictionControl

`func (o *RestrictionSetType) GetRestrictionControl() RestrictionControlType`

GetRestrictionControl returns the RestrictionControl field if non-nil, zero value otherwise.

### GetRestrictionControlOk

`func (o *RestrictionSetType) GetRestrictionControlOk() (*RestrictionControlType, bool)`

GetRestrictionControlOk returns a tuple with the RestrictionControl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRestrictionControl

`func (o *RestrictionSetType) SetRestrictionControl(v RestrictionControlType)`

SetRestrictionControl sets RestrictionControl field to given value.

### HasRestrictionControl

`func (o *RestrictionSetType) HasRestrictionControl() bool`

HasRestrictionControl returns a boolean if a field has been set.

### GetRestrictionStatus

`func (o *RestrictionSetType) GetRestrictionStatus() RestrictionStatusType`

GetRestrictionStatus returns the RestrictionStatus field if non-nil, zero value otherwise.

### GetRestrictionStatusOk

`func (o *RestrictionSetType) GetRestrictionStatusOk() (*RestrictionStatusType, bool)`

GetRestrictionStatusOk returns a tuple with the RestrictionStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRestrictionStatus

`func (o *RestrictionSetType) SetRestrictionStatus(v RestrictionStatusType)`

SetRestrictionStatus sets RestrictionStatus field to given value.

### HasRestrictionStatus

`func (o *RestrictionSetType) HasRestrictionStatus() bool`

HasRestrictionStatus returns a boolean if a field has been set.

### GetActualTimeSpan

`func (o *RestrictionSetType) GetActualTimeSpan() TimeSpanType`

GetActualTimeSpan returns the ActualTimeSpan field if non-nil, zero value otherwise.

### GetActualTimeSpanOk

`func (o *RestrictionSetType) GetActualTimeSpanOk() (*TimeSpanType, bool)`

GetActualTimeSpanOk returns a tuple with the ActualTimeSpan field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActualTimeSpan

`func (o *RestrictionSetType) SetActualTimeSpan(v TimeSpanType)`

SetActualTimeSpan sets ActualTimeSpan field to given value.

### HasActualTimeSpan

`func (o *RestrictionSetType) HasActualTimeSpan() bool`

HasActualTimeSpan returns a boolean if a field has been set.

### GetOnRequest

`func (o *RestrictionSetType) GetOnRequest() bool`

GetOnRequest returns the OnRequest field if non-nil, zero value otherwise.

### GetOnRequestOk

`func (o *RestrictionSetType) GetOnRequestOk() (*bool, bool)`

GetOnRequestOk returns a tuple with the OnRequest field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOnRequest

`func (o *RestrictionSetType) SetOnRequest(v bool)`

SetOnRequest sets OnRequest field to given value.

### HasOnRequest

`func (o *RestrictionSetType) HasOnRequest() bool`

HasOnRequest returns a boolean if a field has been set.

### GetActionType

`func (o *RestrictionSetType) GetActionType() string`

GetActionType returns the ActionType field if non-nil, zero value otherwise.

### GetActionTypeOk

`func (o *RestrictionSetType) GetActionTypeOk() (*string, bool)`

GetActionTypeOk returns a tuple with the ActionType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActionType

`func (o *RestrictionSetType) SetActionType(v string)`

SetActionType sets ActionType field to given value.

### HasActionType

`func (o *RestrictionSetType) HasActionType() bool`

HasActionType returns a boolean if a field has been set.

### GetStart

`func (o *RestrictionSetType) GetStart() string`

GetStart returns the Start field if non-nil, zero value otherwise.

### GetStartOk

`func (o *RestrictionSetType) GetStartOk() (*string, bool)`

GetStartOk returns a tuple with the Start field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStart

`func (o *RestrictionSetType) SetStart(v string)`

SetStart sets Start field to given value.

### HasStart

`func (o *RestrictionSetType) HasStart() bool`

HasStart returns a boolean if a field has been set.

### GetEnd

`func (o *RestrictionSetType) GetEnd() string`

GetEnd returns the End field if non-nil, zero value otherwise.

### GetEndOk

`func (o *RestrictionSetType) GetEndOk() (*string, bool)`

GetEndOk returns a tuple with the End field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnd

`func (o *RestrictionSetType) SetEnd(v string)`

SetEnd sets End field to given value.

### HasEnd

`func (o *RestrictionSetType) HasEnd() bool`

HasEnd returns a boolean if a field has been set.

### GetSunday

`func (o *RestrictionSetType) GetSunday() bool`

GetSunday returns the Sunday field if non-nil, zero value otherwise.

### GetSundayOk

`func (o *RestrictionSetType) GetSundayOk() (*bool, bool)`

GetSundayOk returns a tuple with the Sunday field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSunday

`func (o *RestrictionSetType) SetSunday(v bool)`

SetSunday sets Sunday field to given value.

### HasSunday

`func (o *RestrictionSetType) HasSunday() bool`

HasSunday returns a boolean if a field has been set.

### GetMonday

`func (o *RestrictionSetType) GetMonday() bool`

GetMonday returns the Monday field if non-nil, zero value otherwise.

### GetMondayOk

`func (o *RestrictionSetType) GetMondayOk() (*bool, bool)`

GetMondayOk returns a tuple with the Monday field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMonday

`func (o *RestrictionSetType) SetMonday(v bool)`

SetMonday sets Monday field to given value.

### HasMonday

`func (o *RestrictionSetType) HasMonday() bool`

HasMonday returns a boolean if a field has been set.

### GetTuesday

`func (o *RestrictionSetType) GetTuesday() bool`

GetTuesday returns the Tuesday field if non-nil, zero value otherwise.

### GetTuesdayOk

`func (o *RestrictionSetType) GetTuesdayOk() (*bool, bool)`

GetTuesdayOk returns a tuple with the Tuesday field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTuesday

`func (o *RestrictionSetType) SetTuesday(v bool)`

SetTuesday sets Tuesday field to given value.

### HasTuesday

`func (o *RestrictionSetType) HasTuesday() bool`

HasTuesday returns a boolean if a field has been set.

### GetWednesday

`func (o *RestrictionSetType) GetWednesday() bool`

GetWednesday returns the Wednesday field if non-nil, zero value otherwise.

### GetWednesdayOk

`func (o *RestrictionSetType) GetWednesdayOk() (*bool, bool)`

GetWednesdayOk returns a tuple with the Wednesday field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWednesday

`func (o *RestrictionSetType) SetWednesday(v bool)`

SetWednesday sets Wednesday field to given value.

### HasWednesday

`func (o *RestrictionSetType) HasWednesday() bool`

HasWednesday returns a boolean if a field has been set.

### GetThursday

`func (o *RestrictionSetType) GetThursday() bool`

GetThursday returns the Thursday field if non-nil, zero value otherwise.

### GetThursdayOk

`func (o *RestrictionSetType) GetThursdayOk() (*bool, bool)`

GetThursdayOk returns a tuple with the Thursday field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetThursday

`func (o *RestrictionSetType) SetThursday(v bool)`

SetThursday sets Thursday field to given value.

### HasThursday

`func (o *RestrictionSetType) HasThursday() bool`

HasThursday returns a boolean if a field has been set.

### GetFriday

`func (o *RestrictionSetType) GetFriday() bool`

GetFriday returns the Friday field if non-nil, zero value otherwise.

### GetFridayOk

`func (o *RestrictionSetType) GetFridayOk() (*bool, bool)`

GetFridayOk returns a tuple with the Friday field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFriday

`func (o *RestrictionSetType) SetFriday(v bool)`

SetFriday sets Friday field to given value.

### HasFriday

`func (o *RestrictionSetType) HasFriday() bool`

HasFriday returns a boolean if a field has been set.

### GetSaturday

`func (o *RestrictionSetType) GetSaturday() bool`

GetSaturday returns the Saturday field if non-nil, zero value otherwise.

### GetSaturdayOk

`func (o *RestrictionSetType) GetSaturdayOk() (*bool, bool)`

GetSaturdayOk returns a tuple with the Saturday field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSaturday

`func (o *RestrictionSetType) SetSaturday(v bool)`

SetSaturday sets Saturday field to given value.

### HasSaturday

`func (o *RestrictionSetType) HasSaturday() bool`

HasSaturday returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



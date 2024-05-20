# RestrictionSetHistoryType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ActionType** | Pointer to **string** | Indicates the action performed on restriction | [optional] 
**ActualTimeSpan** | Pointer to [**TimeSpanType**](TimeSpanType.md) |  | [optional] 
**AppliedDate** | Pointer to **string** |  | [optional] 
**End** | Pointer to **string** | The ending value of the date range. | [optional] 
**Friday** | Pointer to **bool** |  | [optional] 
**LogUserId** | Pointer to **int32** |  | [optional] 
**LogUserName** | Pointer to **string** |  | [optional] 
**Monday** | Pointer to **bool** |  | [optional] 
**OnRequest** | Pointer to **bool** | Indicates whether the Closed restriction is flagged as On Request. | [optional] 
**RestrictionControl** | Pointer to [**RestrictionControlType**](RestrictionControlType.md) |  | [optional] 
**RestrictionStatus** | Pointer to [**RestrictionStatusType**](RestrictionStatusType.md) |  | [optional] 
**Saturday** | Pointer to **bool** |  | [optional] 
**Start** | Pointer to **string** | The starting value of the date range. | [optional] 
**Sunday** | Pointer to **bool** |  | [optional] 
**Thursday** | Pointer to **bool** |  | [optional] 
**Tuesday** | Pointer to **bool** |  | [optional] 
**Wednesday** | Pointer to **bool** |  | [optional] 

## Methods

### NewRestrictionSetHistoryType

`func NewRestrictionSetHistoryType() *RestrictionSetHistoryType`

NewRestrictionSetHistoryType instantiates a new RestrictionSetHistoryType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRestrictionSetHistoryTypeWithDefaults

`func NewRestrictionSetHistoryTypeWithDefaults() *RestrictionSetHistoryType`

NewRestrictionSetHistoryTypeWithDefaults instantiates a new RestrictionSetHistoryType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetActionType

`func (o *RestrictionSetHistoryType) GetActionType() string`

GetActionType returns the ActionType field if non-nil, zero value otherwise.

### GetActionTypeOk

`func (o *RestrictionSetHistoryType) GetActionTypeOk() (*string, bool)`

GetActionTypeOk returns a tuple with the ActionType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActionType

`func (o *RestrictionSetHistoryType) SetActionType(v string)`

SetActionType sets ActionType field to given value.

### HasActionType

`func (o *RestrictionSetHistoryType) HasActionType() bool`

HasActionType returns a boolean if a field has been set.

### GetActualTimeSpan

`func (o *RestrictionSetHistoryType) GetActualTimeSpan() TimeSpanType`

GetActualTimeSpan returns the ActualTimeSpan field if non-nil, zero value otherwise.

### GetActualTimeSpanOk

`func (o *RestrictionSetHistoryType) GetActualTimeSpanOk() (*TimeSpanType, bool)`

GetActualTimeSpanOk returns a tuple with the ActualTimeSpan field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActualTimeSpan

`func (o *RestrictionSetHistoryType) SetActualTimeSpan(v TimeSpanType)`

SetActualTimeSpan sets ActualTimeSpan field to given value.

### HasActualTimeSpan

`func (o *RestrictionSetHistoryType) HasActualTimeSpan() bool`

HasActualTimeSpan returns a boolean if a field has been set.

### GetAppliedDate

`func (o *RestrictionSetHistoryType) GetAppliedDate() string`

GetAppliedDate returns the AppliedDate field if non-nil, zero value otherwise.

### GetAppliedDateOk

`func (o *RestrictionSetHistoryType) GetAppliedDateOk() (*string, bool)`

GetAppliedDateOk returns a tuple with the AppliedDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAppliedDate

`func (o *RestrictionSetHistoryType) SetAppliedDate(v string)`

SetAppliedDate sets AppliedDate field to given value.

### HasAppliedDate

`func (o *RestrictionSetHistoryType) HasAppliedDate() bool`

HasAppliedDate returns a boolean if a field has been set.

### GetEnd

`func (o *RestrictionSetHistoryType) GetEnd() string`

GetEnd returns the End field if non-nil, zero value otherwise.

### GetEndOk

`func (o *RestrictionSetHistoryType) GetEndOk() (*string, bool)`

GetEndOk returns a tuple with the End field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnd

`func (o *RestrictionSetHistoryType) SetEnd(v string)`

SetEnd sets End field to given value.

### HasEnd

`func (o *RestrictionSetHistoryType) HasEnd() bool`

HasEnd returns a boolean if a field has been set.

### GetFriday

`func (o *RestrictionSetHistoryType) GetFriday() bool`

GetFriday returns the Friday field if non-nil, zero value otherwise.

### GetFridayOk

`func (o *RestrictionSetHistoryType) GetFridayOk() (*bool, bool)`

GetFridayOk returns a tuple with the Friday field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFriday

`func (o *RestrictionSetHistoryType) SetFriday(v bool)`

SetFriday sets Friday field to given value.

### HasFriday

`func (o *RestrictionSetHistoryType) HasFriday() bool`

HasFriday returns a boolean if a field has been set.

### GetLogUserId

`func (o *RestrictionSetHistoryType) GetLogUserId() int32`

GetLogUserId returns the LogUserId field if non-nil, zero value otherwise.

### GetLogUserIdOk

`func (o *RestrictionSetHistoryType) GetLogUserIdOk() (*int32, bool)`

GetLogUserIdOk returns a tuple with the LogUserId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLogUserId

`func (o *RestrictionSetHistoryType) SetLogUserId(v int32)`

SetLogUserId sets LogUserId field to given value.

### HasLogUserId

`func (o *RestrictionSetHistoryType) HasLogUserId() bool`

HasLogUserId returns a boolean if a field has been set.

### GetLogUserName

`func (o *RestrictionSetHistoryType) GetLogUserName() string`

GetLogUserName returns the LogUserName field if non-nil, zero value otherwise.

### GetLogUserNameOk

`func (o *RestrictionSetHistoryType) GetLogUserNameOk() (*string, bool)`

GetLogUserNameOk returns a tuple with the LogUserName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLogUserName

`func (o *RestrictionSetHistoryType) SetLogUserName(v string)`

SetLogUserName sets LogUserName field to given value.

### HasLogUserName

`func (o *RestrictionSetHistoryType) HasLogUserName() bool`

HasLogUserName returns a boolean if a field has been set.

### GetMonday

`func (o *RestrictionSetHistoryType) GetMonday() bool`

GetMonday returns the Monday field if non-nil, zero value otherwise.

### GetMondayOk

`func (o *RestrictionSetHistoryType) GetMondayOk() (*bool, bool)`

GetMondayOk returns a tuple with the Monday field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMonday

`func (o *RestrictionSetHistoryType) SetMonday(v bool)`

SetMonday sets Monday field to given value.

### HasMonday

`func (o *RestrictionSetHistoryType) HasMonday() bool`

HasMonday returns a boolean if a field has been set.

### GetOnRequest

`func (o *RestrictionSetHistoryType) GetOnRequest() bool`

GetOnRequest returns the OnRequest field if non-nil, zero value otherwise.

### GetOnRequestOk

`func (o *RestrictionSetHistoryType) GetOnRequestOk() (*bool, bool)`

GetOnRequestOk returns a tuple with the OnRequest field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOnRequest

`func (o *RestrictionSetHistoryType) SetOnRequest(v bool)`

SetOnRequest sets OnRequest field to given value.

### HasOnRequest

`func (o *RestrictionSetHistoryType) HasOnRequest() bool`

HasOnRequest returns a boolean if a field has been set.

### GetRestrictionControl

`func (o *RestrictionSetHistoryType) GetRestrictionControl() RestrictionControlType`

GetRestrictionControl returns the RestrictionControl field if non-nil, zero value otherwise.

### GetRestrictionControlOk

`func (o *RestrictionSetHistoryType) GetRestrictionControlOk() (*RestrictionControlType, bool)`

GetRestrictionControlOk returns a tuple with the RestrictionControl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRestrictionControl

`func (o *RestrictionSetHistoryType) SetRestrictionControl(v RestrictionControlType)`

SetRestrictionControl sets RestrictionControl field to given value.

### HasRestrictionControl

`func (o *RestrictionSetHistoryType) HasRestrictionControl() bool`

HasRestrictionControl returns a boolean if a field has been set.

### GetRestrictionStatus

`func (o *RestrictionSetHistoryType) GetRestrictionStatus() RestrictionStatusType`

GetRestrictionStatus returns the RestrictionStatus field if non-nil, zero value otherwise.

### GetRestrictionStatusOk

`func (o *RestrictionSetHistoryType) GetRestrictionStatusOk() (*RestrictionStatusType, bool)`

GetRestrictionStatusOk returns a tuple with the RestrictionStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRestrictionStatus

`func (o *RestrictionSetHistoryType) SetRestrictionStatus(v RestrictionStatusType)`

SetRestrictionStatus sets RestrictionStatus field to given value.

### HasRestrictionStatus

`func (o *RestrictionSetHistoryType) HasRestrictionStatus() bool`

HasRestrictionStatus returns a boolean if a field has been set.

### GetSaturday

`func (o *RestrictionSetHistoryType) GetSaturday() bool`

GetSaturday returns the Saturday field if non-nil, zero value otherwise.

### GetSaturdayOk

`func (o *RestrictionSetHistoryType) GetSaturdayOk() (*bool, bool)`

GetSaturdayOk returns a tuple with the Saturday field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSaturday

`func (o *RestrictionSetHistoryType) SetSaturday(v bool)`

SetSaturday sets Saturday field to given value.

### HasSaturday

`func (o *RestrictionSetHistoryType) HasSaturday() bool`

HasSaturday returns a boolean if a field has been set.

### GetStart

`func (o *RestrictionSetHistoryType) GetStart() string`

GetStart returns the Start field if non-nil, zero value otherwise.

### GetStartOk

`func (o *RestrictionSetHistoryType) GetStartOk() (*string, bool)`

GetStartOk returns a tuple with the Start field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStart

`func (o *RestrictionSetHistoryType) SetStart(v string)`

SetStart sets Start field to given value.

### HasStart

`func (o *RestrictionSetHistoryType) HasStart() bool`

HasStart returns a boolean if a field has been set.

### GetSunday

`func (o *RestrictionSetHistoryType) GetSunday() bool`

GetSunday returns the Sunday field if non-nil, zero value otherwise.

### GetSundayOk

`func (o *RestrictionSetHistoryType) GetSundayOk() (*bool, bool)`

GetSundayOk returns a tuple with the Sunday field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSunday

`func (o *RestrictionSetHistoryType) SetSunday(v bool)`

SetSunday sets Sunday field to given value.

### HasSunday

`func (o *RestrictionSetHistoryType) HasSunday() bool`

HasSunday returns a boolean if a field has been set.

### GetThursday

`func (o *RestrictionSetHistoryType) GetThursday() bool`

GetThursday returns the Thursday field if non-nil, zero value otherwise.

### GetThursdayOk

`func (o *RestrictionSetHistoryType) GetThursdayOk() (*bool, bool)`

GetThursdayOk returns a tuple with the Thursday field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetThursday

`func (o *RestrictionSetHistoryType) SetThursday(v bool)`

SetThursday sets Thursday field to given value.

### HasThursday

`func (o *RestrictionSetHistoryType) HasThursday() bool`

HasThursday returns a boolean if a field has been set.

### GetTuesday

`func (o *RestrictionSetHistoryType) GetTuesday() bool`

GetTuesday returns the Tuesday field if non-nil, zero value otherwise.

### GetTuesdayOk

`func (o *RestrictionSetHistoryType) GetTuesdayOk() (*bool, bool)`

GetTuesdayOk returns a tuple with the Tuesday field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTuesday

`func (o *RestrictionSetHistoryType) SetTuesday(v bool)`

SetTuesday sets Tuesday field to given value.

### HasTuesday

`func (o *RestrictionSetHistoryType) HasTuesday() bool`

HasTuesday returns a boolean if a field has been set.

### GetWednesday

`func (o *RestrictionSetHistoryType) GetWednesday() bool`

GetWednesday returns the Wednesday field if non-nil, zero value otherwise.

### GetWednesdayOk

`func (o *RestrictionSetHistoryType) GetWednesdayOk() (*bool, bool)`

GetWednesdayOk returns a tuple with the Wednesday field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWednesday

`func (o *RestrictionSetHistoryType) SetWednesday(v bool)`

SetWednesday sets Wednesday field to given value.

### HasWednesday

`func (o *RestrictionSetHistoryType) HasWednesday() bool`

HasWednesday returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



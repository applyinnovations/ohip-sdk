# FixedChargeScheduleType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EventStartDate** | Pointer to **string** | The starting value of the date range. | [optional] 
**EventEndDate** | Pointer to **string** | The ending value of the date range. | [optional] 
**Frequency** | Pointer to [**FixedChargeFrequencyType**](FixedChargeFrequencyType.md) |  | [optional] 
**DayToExecute** | Pointer to **string** | Day of when to execute fixed charge. Applicable when frequency is Daily or Weekly. | [optional] 
**DateToExecute** | Pointer to **string** | Date of when to execute yearly fixed charge. Applicable when frequency is Yearly. | [optional] 

## Methods

### NewFixedChargeScheduleType

`func NewFixedChargeScheduleType() *FixedChargeScheduleType`

NewFixedChargeScheduleType instantiates a new FixedChargeScheduleType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFixedChargeScheduleTypeWithDefaults

`func NewFixedChargeScheduleTypeWithDefaults() *FixedChargeScheduleType`

NewFixedChargeScheduleTypeWithDefaults instantiates a new FixedChargeScheduleType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEventStartDate

`func (o *FixedChargeScheduleType) GetEventStartDate() string`

GetEventStartDate returns the EventStartDate field if non-nil, zero value otherwise.

### GetEventStartDateOk

`func (o *FixedChargeScheduleType) GetEventStartDateOk() (*string, bool)`

GetEventStartDateOk returns a tuple with the EventStartDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventStartDate

`func (o *FixedChargeScheduleType) SetEventStartDate(v string)`

SetEventStartDate sets EventStartDate field to given value.

### HasEventStartDate

`func (o *FixedChargeScheduleType) HasEventStartDate() bool`

HasEventStartDate returns a boolean if a field has been set.

### GetEventEndDate

`func (o *FixedChargeScheduleType) GetEventEndDate() string`

GetEventEndDate returns the EventEndDate field if non-nil, zero value otherwise.

### GetEventEndDateOk

`func (o *FixedChargeScheduleType) GetEventEndDateOk() (*string, bool)`

GetEventEndDateOk returns a tuple with the EventEndDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventEndDate

`func (o *FixedChargeScheduleType) SetEventEndDate(v string)`

SetEventEndDate sets EventEndDate field to given value.

### HasEventEndDate

`func (o *FixedChargeScheduleType) HasEventEndDate() bool`

HasEventEndDate returns a boolean if a field has been set.

### GetFrequency

`func (o *FixedChargeScheduleType) GetFrequency() FixedChargeFrequencyType`

GetFrequency returns the Frequency field if non-nil, zero value otherwise.

### GetFrequencyOk

`func (o *FixedChargeScheduleType) GetFrequencyOk() (*FixedChargeFrequencyType, bool)`

GetFrequencyOk returns a tuple with the Frequency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFrequency

`func (o *FixedChargeScheduleType) SetFrequency(v FixedChargeFrequencyType)`

SetFrequency sets Frequency field to given value.

### HasFrequency

`func (o *FixedChargeScheduleType) HasFrequency() bool`

HasFrequency returns a boolean if a field has been set.

### GetDayToExecute

`func (o *FixedChargeScheduleType) GetDayToExecute() string`

GetDayToExecute returns the DayToExecute field if non-nil, zero value otherwise.

### GetDayToExecuteOk

`func (o *FixedChargeScheduleType) GetDayToExecuteOk() (*string, bool)`

GetDayToExecuteOk returns a tuple with the DayToExecute field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDayToExecute

`func (o *FixedChargeScheduleType) SetDayToExecute(v string)`

SetDayToExecute sets DayToExecute field to given value.

### HasDayToExecute

`func (o *FixedChargeScheduleType) HasDayToExecute() bool`

HasDayToExecute returns a boolean if a field has been set.

### GetDateToExecute

`func (o *FixedChargeScheduleType) GetDateToExecute() string`

GetDateToExecute returns the DateToExecute field if non-nil, zero value otherwise.

### GetDateToExecuteOk

`func (o *FixedChargeScheduleType) GetDateToExecuteOk() (*string, bool)`

GetDateToExecuteOk returns a tuple with the DateToExecute field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDateToExecute

`func (o *FixedChargeScheduleType) SetDateToExecute(v string)`

SetDateToExecute sets DateToExecute field to given value.

### HasDateToExecute

`func (o *FixedChargeScheduleType) HasDateToExecute() bool`

HasDateToExecute returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



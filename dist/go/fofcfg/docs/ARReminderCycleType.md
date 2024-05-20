# ARReminderCycleType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DaysCycle** | Pointer to [**[]ARDaysReminderCycleType**](ARDaysReminderCycleType.md) | Reminder letters will be generated based on the number of days for which the account has had an outstanding balance | [optional] 
**EndOfMonthCycle** | Pointer to [**AREndOfMonthCycleType**](AREndOfMonthCycleType.md) |  | [optional] 

## Methods

### NewARReminderCycleType

`func NewARReminderCycleType() *ARReminderCycleType`

NewARReminderCycleType instantiates a new ARReminderCycleType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewARReminderCycleTypeWithDefaults

`func NewARReminderCycleTypeWithDefaults() *ARReminderCycleType`

NewARReminderCycleTypeWithDefaults instantiates a new ARReminderCycleType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDaysCycle

`func (o *ARReminderCycleType) GetDaysCycle() []ARDaysReminderCycleType`

GetDaysCycle returns the DaysCycle field if non-nil, zero value otherwise.

### GetDaysCycleOk

`func (o *ARReminderCycleType) GetDaysCycleOk() (*[]ARDaysReminderCycleType, bool)`

GetDaysCycleOk returns a tuple with the DaysCycle field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDaysCycle

`func (o *ARReminderCycleType) SetDaysCycle(v []ARDaysReminderCycleType)`

SetDaysCycle sets DaysCycle field to given value.

### HasDaysCycle

`func (o *ARReminderCycleType) HasDaysCycle() bool`

HasDaysCycle returns a boolean if a field has been set.

### GetEndOfMonthCycle

`func (o *ARReminderCycleType) GetEndOfMonthCycle() AREndOfMonthCycleType`

GetEndOfMonthCycle returns the EndOfMonthCycle field if non-nil, zero value otherwise.

### GetEndOfMonthCycleOk

`func (o *ARReminderCycleType) GetEndOfMonthCycleOk() (*AREndOfMonthCycleType, bool)`

GetEndOfMonthCycleOk returns a tuple with the EndOfMonthCycle field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndOfMonthCycle

`func (o *ARReminderCycleType) SetEndOfMonthCycle(v AREndOfMonthCycleType)`

SetEndOfMonthCycle sets EndOfMonthCycle field to given value.

### HasEndOfMonthCycle

`func (o *ARReminderCycleType) HasEndOfMonthCycle() bool`

HasEndOfMonthCycle returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



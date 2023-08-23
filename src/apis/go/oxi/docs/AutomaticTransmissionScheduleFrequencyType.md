# AutomaticTransmissionScheduleFrequencyType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Frequency** | Pointer to [**AutomaticTransmissionScheduleFrequencyTypeType**](AutomaticTransmissionScheduleFrequencyTypeType.md) |  | [optional] 
**HourToRun** | Pointer to **int32** | Hour of day that the transmission schedule has to run. | [optional] 
**WeekDayToRun** | Pointer to [**DaysOfWeekType**](DaysOfWeekType.md) |  | [optional] 
**DayToRun** | Pointer to **int32** | Day of the month the transmission schedule is to run. Value should be between 1 and 31. | [optional] 
**MonthToRun** | Pointer to **int32** | Number representing the month of year that the transmission schedule is to run. For example, 1 &#x3D; January, 2 &#x3D; February, 12 &#x3D; December, etc. | [optional] 
**Interval** | Pointer to **int32** | If frequency type is set to intervals then this value will be used to determine the frequency. For example if value is 18 then transmission will be sent every 18 minutes | [optional] 

## Methods

### NewAutomaticTransmissionScheduleFrequencyType

`func NewAutomaticTransmissionScheduleFrequencyType() *AutomaticTransmissionScheduleFrequencyType`

NewAutomaticTransmissionScheduleFrequencyType instantiates a new AutomaticTransmissionScheduleFrequencyType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAutomaticTransmissionScheduleFrequencyTypeWithDefaults

`func NewAutomaticTransmissionScheduleFrequencyTypeWithDefaults() *AutomaticTransmissionScheduleFrequencyType`

NewAutomaticTransmissionScheduleFrequencyTypeWithDefaults instantiates a new AutomaticTransmissionScheduleFrequencyType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFrequency

`func (o *AutomaticTransmissionScheduleFrequencyType) GetFrequency() AutomaticTransmissionScheduleFrequencyTypeType`

GetFrequency returns the Frequency field if non-nil, zero value otherwise.

### GetFrequencyOk

`func (o *AutomaticTransmissionScheduleFrequencyType) GetFrequencyOk() (*AutomaticTransmissionScheduleFrequencyTypeType, bool)`

GetFrequencyOk returns a tuple with the Frequency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFrequency

`func (o *AutomaticTransmissionScheduleFrequencyType) SetFrequency(v AutomaticTransmissionScheduleFrequencyTypeType)`

SetFrequency sets Frequency field to given value.

### HasFrequency

`func (o *AutomaticTransmissionScheduleFrequencyType) HasFrequency() bool`

HasFrequency returns a boolean if a field has been set.

### GetHourToRun

`func (o *AutomaticTransmissionScheduleFrequencyType) GetHourToRun() int32`

GetHourToRun returns the HourToRun field if non-nil, zero value otherwise.

### GetHourToRunOk

`func (o *AutomaticTransmissionScheduleFrequencyType) GetHourToRunOk() (*int32, bool)`

GetHourToRunOk returns a tuple with the HourToRun field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHourToRun

`func (o *AutomaticTransmissionScheduleFrequencyType) SetHourToRun(v int32)`

SetHourToRun sets HourToRun field to given value.

### HasHourToRun

`func (o *AutomaticTransmissionScheduleFrequencyType) HasHourToRun() bool`

HasHourToRun returns a boolean if a field has been set.

### GetWeekDayToRun

`func (o *AutomaticTransmissionScheduleFrequencyType) GetWeekDayToRun() DaysOfWeekType`

GetWeekDayToRun returns the WeekDayToRun field if non-nil, zero value otherwise.

### GetWeekDayToRunOk

`func (o *AutomaticTransmissionScheduleFrequencyType) GetWeekDayToRunOk() (*DaysOfWeekType, bool)`

GetWeekDayToRunOk returns a tuple with the WeekDayToRun field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWeekDayToRun

`func (o *AutomaticTransmissionScheduleFrequencyType) SetWeekDayToRun(v DaysOfWeekType)`

SetWeekDayToRun sets WeekDayToRun field to given value.

### HasWeekDayToRun

`func (o *AutomaticTransmissionScheduleFrequencyType) HasWeekDayToRun() bool`

HasWeekDayToRun returns a boolean if a field has been set.

### GetDayToRun

`func (o *AutomaticTransmissionScheduleFrequencyType) GetDayToRun() int32`

GetDayToRun returns the DayToRun field if non-nil, zero value otherwise.

### GetDayToRunOk

`func (o *AutomaticTransmissionScheduleFrequencyType) GetDayToRunOk() (*int32, bool)`

GetDayToRunOk returns a tuple with the DayToRun field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDayToRun

`func (o *AutomaticTransmissionScheduleFrequencyType) SetDayToRun(v int32)`

SetDayToRun sets DayToRun field to given value.

### HasDayToRun

`func (o *AutomaticTransmissionScheduleFrequencyType) HasDayToRun() bool`

HasDayToRun returns a boolean if a field has been set.

### GetMonthToRun

`func (o *AutomaticTransmissionScheduleFrequencyType) GetMonthToRun() int32`

GetMonthToRun returns the MonthToRun field if non-nil, zero value otherwise.

### GetMonthToRunOk

`func (o *AutomaticTransmissionScheduleFrequencyType) GetMonthToRunOk() (*int32, bool)`

GetMonthToRunOk returns a tuple with the MonthToRun field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMonthToRun

`func (o *AutomaticTransmissionScheduleFrequencyType) SetMonthToRun(v int32)`

SetMonthToRun sets MonthToRun field to given value.

### HasMonthToRun

`func (o *AutomaticTransmissionScheduleFrequencyType) HasMonthToRun() bool`

HasMonthToRun returns a boolean if a field has been set.

### GetInterval

`func (o *AutomaticTransmissionScheduleFrequencyType) GetInterval() int32`

GetInterval returns the Interval field if non-nil, zero value otherwise.

### GetIntervalOk

`func (o *AutomaticTransmissionScheduleFrequencyType) GetIntervalOk() (*int32, bool)`

GetIntervalOk returns a tuple with the Interval field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInterval

`func (o *AutomaticTransmissionScheduleFrequencyType) SetInterval(v int32)`

SetInterval sets Interval field to given value.

### HasInterval

`func (o *AutomaticTransmissionScheduleFrequencyType) HasInterval() bool`

HasInterval returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



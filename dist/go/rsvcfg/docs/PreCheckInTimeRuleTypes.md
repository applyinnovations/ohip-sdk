# PreCheckInTimeRuleTypes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EndTime** | Pointer to **string** | The latest possible Internet check-in time for a reservation based on the Time rule type | [optional] 
**StartTime** | Pointer to **string** | The earliest possible Internet check-in time for a reservation based on the Time rule type | [optional] 
**DaysBeforeArrival** | Pointer to **int32** | The number of days before the arrival date that the reservation can be checked in through the Internet. A zero will mean the day of arrival | [optional] 
**DaysAfterBooking** | Pointer to **int32** | The number of days after the booking date that the reservation can be checked in over the Internet | [optional] 
**HoursPriorToCheckIn** | Pointer to **int32** | Enter the number of hours before the property&#39;s official check-in time that the reservation will be eligible for Internet check in | [optional] 
**HoursPostCheckIn** | Pointer to **int32** | Enter the number of hours after the property&#39;s official check-in time that the reservation will be eligible for Internet check in | [optional] 
**AbsoluteFlag** | Pointer to **bool** | Absolute Flag value for Time Limit Rule. | [optional] 

## Methods

### NewPreCheckInTimeRuleTypes

`func NewPreCheckInTimeRuleTypes() *PreCheckInTimeRuleTypes`

NewPreCheckInTimeRuleTypes instantiates a new PreCheckInTimeRuleTypes object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPreCheckInTimeRuleTypesWithDefaults

`func NewPreCheckInTimeRuleTypesWithDefaults() *PreCheckInTimeRuleTypes`

NewPreCheckInTimeRuleTypesWithDefaults instantiates a new PreCheckInTimeRuleTypes object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEndTime

`func (o *PreCheckInTimeRuleTypes) GetEndTime() string`

GetEndTime returns the EndTime field if non-nil, zero value otherwise.

### GetEndTimeOk

`func (o *PreCheckInTimeRuleTypes) GetEndTimeOk() (*string, bool)`

GetEndTimeOk returns a tuple with the EndTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndTime

`func (o *PreCheckInTimeRuleTypes) SetEndTime(v string)`

SetEndTime sets EndTime field to given value.

### HasEndTime

`func (o *PreCheckInTimeRuleTypes) HasEndTime() bool`

HasEndTime returns a boolean if a field has been set.

### GetStartTime

`func (o *PreCheckInTimeRuleTypes) GetStartTime() string`

GetStartTime returns the StartTime field if non-nil, zero value otherwise.

### GetStartTimeOk

`func (o *PreCheckInTimeRuleTypes) GetStartTimeOk() (*string, bool)`

GetStartTimeOk returns a tuple with the StartTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartTime

`func (o *PreCheckInTimeRuleTypes) SetStartTime(v string)`

SetStartTime sets StartTime field to given value.

### HasStartTime

`func (o *PreCheckInTimeRuleTypes) HasStartTime() bool`

HasStartTime returns a boolean if a field has been set.

### GetDaysBeforeArrival

`func (o *PreCheckInTimeRuleTypes) GetDaysBeforeArrival() int32`

GetDaysBeforeArrival returns the DaysBeforeArrival field if non-nil, zero value otherwise.

### GetDaysBeforeArrivalOk

`func (o *PreCheckInTimeRuleTypes) GetDaysBeforeArrivalOk() (*int32, bool)`

GetDaysBeforeArrivalOk returns a tuple with the DaysBeforeArrival field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDaysBeforeArrival

`func (o *PreCheckInTimeRuleTypes) SetDaysBeforeArrival(v int32)`

SetDaysBeforeArrival sets DaysBeforeArrival field to given value.

### HasDaysBeforeArrival

`func (o *PreCheckInTimeRuleTypes) HasDaysBeforeArrival() bool`

HasDaysBeforeArrival returns a boolean if a field has been set.

### GetDaysAfterBooking

`func (o *PreCheckInTimeRuleTypes) GetDaysAfterBooking() int32`

GetDaysAfterBooking returns the DaysAfterBooking field if non-nil, zero value otherwise.

### GetDaysAfterBookingOk

`func (o *PreCheckInTimeRuleTypes) GetDaysAfterBookingOk() (*int32, bool)`

GetDaysAfterBookingOk returns a tuple with the DaysAfterBooking field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDaysAfterBooking

`func (o *PreCheckInTimeRuleTypes) SetDaysAfterBooking(v int32)`

SetDaysAfterBooking sets DaysAfterBooking field to given value.

### HasDaysAfterBooking

`func (o *PreCheckInTimeRuleTypes) HasDaysAfterBooking() bool`

HasDaysAfterBooking returns a boolean if a field has been set.

### GetHoursPriorToCheckIn

`func (o *PreCheckInTimeRuleTypes) GetHoursPriorToCheckIn() int32`

GetHoursPriorToCheckIn returns the HoursPriorToCheckIn field if non-nil, zero value otherwise.

### GetHoursPriorToCheckInOk

`func (o *PreCheckInTimeRuleTypes) GetHoursPriorToCheckInOk() (*int32, bool)`

GetHoursPriorToCheckInOk returns a tuple with the HoursPriorToCheckIn field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHoursPriorToCheckIn

`func (o *PreCheckInTimeRuleTypes) SetHoursPriorToCheckIn(v int32)`

SetHoursPriorToCheckIn sets HoursPriorToCheckIn field to given value.

### HasHoursPriorToCheckIn

`func (o *PreCheckInTimeRuleTypes) HasHoursPriorToCheckIn() bool`

HasHoursPriorToCheckIn returns a boolean if a field has been set.

### GetHoursPostCheckIn

`func (o *PreCheckInTimeRuleTypes) GetHoursPostCheckIn() int32`

GetHoursPostCheckIn returns the HoursPostCheckIn field if non-nil, zero value otherwise.

### GetHoursPostCheckInOk

`func (o *PreCheckInTimeRuleTypes) GetHoursPostCheckInOk() (*int32, bool)`

GetHoursPostCheckInOk returns a tuple with the HoursPostCheckIn field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHoursPostCheckIn

`func (o *PreCheckInTimeRuleTypes) SetHoursPostCheckIn(v int32)`

SetHoursPostCheckIn sets HoursPostCheckIn field to given value.

### HasHoursPostCheckIn

`func (o *PreCheckInTimeRuleTypes) HasHoursPostCheckIn() bool`

HasHoursPostCheckIn returns a boolean if a field has been set.

### GetAbsoluteFlag

`func (o *PreCheckInTimeRuleTypes) GetAbsoluteFlag() bool`

GetAbsoluteFlag returns the AbsoluteFlag field if non-nil, zero value otherwise.

### GetAbsoluteFlagOk

`func (o *PreCheckInTimeRuleTypes) GetAbsoluteFlagOk() (*bool, bool)`

GetAbsoluteFlagOk returns a tuple with the AbsoluteFlag field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAbsoluteFlag

`func (o *PreCheckInTimeRuleTypes) SetAbsoluteFlag(v bool)`

SetAbsoluteFlag sets AbsoluteFlag field to given value.

### HasAbsoluteFlag

`func (o *PreCheckInTimeRuleTypes) HasAbsoluteFlag() bool`

HasAbsoluteFlag returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



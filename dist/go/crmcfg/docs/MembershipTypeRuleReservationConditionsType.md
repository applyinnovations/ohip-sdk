# MembershipTypeRuleReservationConditionsType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DaysFromEnrollment** | Pointer to **int32** | Number of days from enrolment. | [optional] 
**Friday** | Pointer to **bool** |  | [optional] 
**MaximumNights** | Pointer to **int32** | Maximum length of stay required to receive points if membership type is based on NIGHTS. | [optional] 
**MinimumNights** | Pointer to **int32** | Minimum length of stay required to receive points if membership type is based on STAY. | [optional] 
**Monday** | Pointer to **bool** |  | [optional] 
**ReservationEndDate** | Pointer to **string** | Reservations with end date for which the rule is applied. | [optional] 
**ReservationStartDate** | Pointer to **string** | Reservations with start date for which the rule is applied. | [optional] 
**Saturday** | Pointer to **bool** |  | [optional] 
**Sunday** | Pointer to **bool** |  | [optional] 
**Thursday** | Pointer to **bool** |  | [optional] 
**Tuesday** | Pointer to **bool** |  | [optional] 
**Wednesday** | Pointer to **bool** |  | [optional] 

## Methods

### NewMembershipTypeRuleReservationConditionsType

`func NewMembershipTypeRuleReservationConditionsType() *MembershipTypeRuleReservationConditionsType`

NewMembershipTypeRuleReservationConditionsType instantiates a new MembershipTypeRuleReservationConditionsType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMembershipTypeRuleReservationConditionsTypeWithDefaults

`func NewMembershipTypeRuleReservationConditionsTypeWithDefaults() *MembershipTypeRuleReservationConditionsType`

NewMembershipTypeRuleReservationConditionsTypeWithDefaults instantiates a new MembershipTypeRuleReservationConditionsType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDaysFromEnrollment

`func (o *MembershipTypeRuleReservationConditionsType) GetDaysFromEnrollment() int32`

GetDaysFromEnrollment returns the DaysFromEnrollment field if non-nil, zero value otherwise.

### GetDaysFromEnrollmentOk

`func (o *MembershipTypeRuleReservationConditionsType) GetDaysFromEnrollmentOk() (*int32, bool)`

GetDaysFromEnrollmentOk returns a tuple with the DaysFromEnrollment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDaysFromEnrollment

`func (o *MembershipTypeRuleReservationConditionsType) SetDaysFromEnrollment(v int32)`

SetDaysFromEnrollment sets DaysFromEnrollment field to given value.

### HasDaysFromEnrollment

`func (o *MembershipTypeRuleReservationConditionsType) HasDaysFromEnrollment() bool`

HasDaysFromEnrollment returns a boolean if a field has been set.

### GetFriday

`func (o *MembershipTypeRuleReservationConditionsType) GetFriday() bool`

GetFriday returns the Friday field if non-nil, zero value otherwise.

### GetFridayOk

`func (o *MembershipTypeRuleReservationConditionsType) GetFridayOk() (*bool, bool)`

GetFridayOk returns a tuple with the Friday field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFriday

`func (o *MembershipTypeRuleReservationConditionsType) SetFriday(v bool)`

SetFriday sets Friday field to given value.

### HasFriday

`func (o *MembershipTypeRuleReservationConditionsType) HasFriday() bool`

HasFriday returns a boolean if a field has been set.

### GetMaximumNights

`func (o *MembershipTypeRuleReservationConditionsType) GetMaximumNights() int32`

GetMaximumNights returns the MaximumNights field if non-nil, zero value otherwise.

### GetMaximumNightsOk

`func (o *MembershipTypeRuleReservationConditionsType) GetMaximumNightsOk() (*int32, bool)`

GetMaximumNightsOk returns a tuple with the MaximumNights field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaximumNights

`func (o *MembershipTypeRuleReservationConditionsType) SetMaximumNights(v int32)`

SetMaximumNights sets MaximumNights field to given value.

### HasMaximumNights

`func (o *MembershipTypeRuleReservationConditionsType) HasMaximumNights() bool`

HasMaximumNights returns a boolean if a field has been set.

### GetMinimumNights

`func (o *MembershipTypeRuleReservationConditionsType) GetMinimumNights() int32`

GetMinimumNights returns the MinimumNights field if non-nil, zero value otherwise.

### GetMinimumNightsOk

`func (o *MembershipTypeRuleReservationConditionsType) GetMinimumNightsOk() (*int32, bool)`

GetMinimumNightsOk returns a tuple with the MinimumNights field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMinimumNights

`func (o *MembershipTypeRuleReservationConditionsType) SetMinimumNights(v int32)`

SetMinimumNights sets MinimumNights field to given value.

### HasMinimumNights

`func (o *MembershipTypeRuleReservationConditionsType) HasMinimumNights() bool`

HasMinimumNights returns a boolean if a field has been set.

### GetMonday

`func (o *MembershipTypeRuleReservationConditionsType) GetMonday() bool`

GetMonday returns the Monday field if non-nil, zero value otherwise.

### GetMondayOk

`func (o *MembershipTypeRuleReservationConditionsType) GetMondayOk() (*bool, bool)`

GetMondayOk returns a tuple with the Monday field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMonday

`func (o *MembershipTypeRuleReservationConditionsType) SetMonday(v bool)`

SetMonday sets Monday field to given value.

### HasMonday

`func (o *MembershipTypeRuleReservationConditionsType) HasMonday() bool`

HasMonday returns a boolean if a field has been set.

### GetReservationEndDate

`func (o *MembershipTypeRuleReservationConditionsType) GetReservationEndDate() string`

GetReservationEndDate returns the ReservationEndDate field if non-nil, zero value otherwise.

### GetReservationEndDateOk

`func (o *MembershipTypeRuleReservationConditionsType) GetReservationEndDateOk() (*string, bool)`

GetReservationEndDateOk returns a tuple with the ReservationEndDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationEndDate

`func (o *MembershipTypeRuleReservationConditionsType) SetReservationEndDate(v string)`

SetReservationEndDate sets ReservationEndDate field to given value.

### HasReservationEndDate

`func (o *MembershipTypeRuleReservationConditionsType) HasReservationEndDate() bool`

HasReservationEndDate returns a boolean if a field has been set.

### GetReservationStartDate

`func (o *MembershipTypeRuleReservationConditionsType) GetReservationStartDate() string`

GetReservationStartDate returns the ReservationStartDate field if non-nil, zero value otherwise.

### GetReservationStartDateOk

`func (o *MembershipTypeRuleReservationConditionsType) GetReservationStartDateOk() (*string, bool)`

GetReservationStartDateOk returns a tuple with the ReservationStartDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationStartDate

`func (o *MembershipTypeRuleReservationConditionsType) SetReservationStartDate(v string)`

SetReservationStartDate sets ReservationStartDate field to given value.

### HasReservationStartDate

`func (o *MembershipTypeRuleReservationConditionsType) HasReservationStartDate() bool`

HasReservationStartDate returns a boolean if a field has been set.

### GetSaturday

`func (o *MembershipTypeRuleReservationConditionsType) GetSaturday() bool`

GetSaturday returns the Saturday field if non-nil, zero value otherwise.

### GetSaturdayOk

`func (o *MembershipTypeRuleReservationConditionsType) GetSaturdayOk() (*bool, bool)`

GetSaturdayOk returns a tuple with the Saturday field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSaturday

`func (o *MembershipTypeRuleReservationConditionsType) SetSaturday(v bool)`

SetSaturday sets Saturday field to given value.

### HasSaturday

`func (o *MembershipTypeRuleReservationConditionsType) HasSaturday() bool`

HasSaturday returns a boolean if a field has been set.

### GetSunday

`func (o *MembershipTypeRuleReservationConditionsType) GetSunday() bool`

GetSunday returns the Sunday field if non-nil, zero value otherwise.

### GetSundayOk

`func (o *MembershipTypeRuleReservationConditionsType) GetSundayOk() (*bool, bool)`

GetSundayOk returns a tuple with the Sunday field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSunday

`func (o *MembershipTypeRuleReservationConditionsType) SetSunday(v bool)`

SetSunday sets Sunday field to given value.

### HasSunday

`func (o *MembershipTypeRuleReservationConditionsType) HasSunday() bool`

HasSunday returns a boolean if a field has been set.

### GetThursday

`func (o *MembershipTypeRuleReservationConditionsType) GetThursday() bool`

GetThursday returns the Thursday field if non-nil, zero value otherwise.

### GetThursdayOk

`func (o *MembershipTypeRuleReservationConditionsType) GetThursdayOk() (*bool, bool)`

GetThursdayOk returns a tuple with the Thursday field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetThursday

`func (o *MembershipTypeRuleReservationConditionsType) SetThursday(v bool)`

SetThursday sets Thursday field to given value.

### HasThursday

`func (o *MembershipTypeRuleReservationConditionsType) HasThursday() bool`

HasThursday returns a boolean if a field has been set.

### GetTuesday

`func (o *MembershipTypeRuleReservationConditionsType) GetTuesday() bool`

GetTuesday returns the Tuesday field if non-nil, zero value otherwise.

### GetTuesdayOk

`func (o *MembershipTypeRuleReservationConditionsType) GetTuesdayOk() (*bool, bool)`

GetTuesdayOk returns a tuple with the Tuesday field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTuesday

`func (o *MembershipTypeRuleReservationConditionsType) SetTuesday(v bool)`

SetTuesday sets Tuesday field to given value.

### HasTuesday

`func (o *MembershipTypeRuleReservationConditionsType) HasTuesday() bool`

HasTuesday returns a boolean if a field has been set.

### GetWednesday

`func (o *MembershipTypeRuleReservationConditionsType) GetWednesday() bool`

GetWednesday returns the Wednesday field if non-nil, zero value otherwise.

### GetWednesdayOk

`func (o *MembershipTypeRuleReservationConditionsType) GetWednesdayOk() (*bool, bool)`

GetWednesdayOk returns a tuple with the Wednesday field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWednesday

`func (o *MembershipTypeRuleReservationConditionsType) SetWednesday(v bool)`

SetWednesday sets Wednesday field to given value.

### HasWednesday

`func (o *MembershipTypeRuleReservationConditionsType) HasWednesday() bool`

HasWednesday returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



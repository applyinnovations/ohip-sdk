# ActivityConfigTypeDetailType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ActivityTypeCode** | Pointer to **string** | Type for the activity Type. | [optional] 
**Description** | Pointer to **string** | Description for the Activity Type. | [optional] 
**ActivityClassList** | Pointer to [**[]ActivityConfigClassType**](ActivityConfigClassType.md) | Element to hold Activity Class value. | [optional] 
**Internal** | Pointer to **bool** | Check for whether to consider the activity type is internal. | [optional] 
**Sequence** | Pointer to **int32** | Display sequence for the activity code type. | [optional] 
**AutoiCalendar** | Pointer to **bool** | To create an iCal file (.ics) automatically and send it to the email address of the activity owner on activity creation, update, and deletion. | [optional] 
**MinutesBeforeAlert** | Pointer to **int32** | Defines the number of minutes before the start time of an activity of this activity type, an alert should be issued. | [optional] 
**Inactive** | Pointer to **bool** | When checked,the activity type will still be valid for existing activities and traces,but it cannot be selected for new activities and traces | [optional] 
**HotelId** | Pointer to **string** | The hotel code where the activity type to be created. | [optional] 

## Methods

### NewActivityConfigTypeDetailType

`func NewActivityConfigTypeDetailType() *ActivityConfigTypeDetailType`

NewActivityConfigTypeDetailType instantiates a new ActivityConfigTypeDetailType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewActivityConfigTypeDetailTypeWithDefaults

`func NewActivityConfigTypeDetailTypeWithDefaults() *ActivityConfigTypeDetailType`

NewActivityConfigTypeDetailTypeWithDefaults instantiates a new ActivityConfigTypeDetailType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetActivityTypeCode

`func (o *ActivityConfigTypeDetailType) GetActivityTypeCode() string`

GetActivityTypeCode returns the ActivityTypeCode field if non-nil, zero value otherwise.

### GetActivityTypeCodeOk

`func (o *ActivityConfigTypeDetailType) GetActivityTypeCodeOk() (*string, bool)`

GetActivityTypeCodeOk returns a tuple with the ActivityTypeCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActivityTypeCode

`func (o *ActivityConfigTypeDetailType) SetActivityTypeCode(v string)`

SetActivityTypeCode sets ActivityTypeCode field to given value.

### HasActivityTypeCode

`func (o *ActivityConfigTypeDetailType) HasActivityTypeCode() bool`

HasActivityTypeCode returns a boolean if a field has been set.

### GetDescription

`func (o *ActivityConfigTypeDetailType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *ActivityConfigTypeDetailType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *ActivityConfigTypeDetailType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *ActivityConfigTypeDetailType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetActivityClassList

`func (o *ActivityConfigTypeDetailType) GetActivityClassList() []ActivityConfigClassType`

GetActivityClassList returns the ActivityClassList field if non-nil, zero value otherwise.

### GetActivityClassListOk

`func (o *ActivityConfigTypeDetailType) GetActivityClassListOk() (*[]ActivityConfigClassType, bool)`

GetActivityClassListOk returns a tuple with the ActivityClassList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActivityClassList

`func (o *ActivityConfigTypeDetailType) SetActivityClassList(v []ActivityConfigClassType)`

SetActivityClassList sets ActivityClassList field to given value.

### HasActivityClassList

`func (o *ActivityConfigTypeDetailType) HasActivityClassList() bool`

HasActivityClassList returns a boolean if a field has been set.

### GetInternal

`func (o *ActivityConfigTypeDetailType) GetInternal() bool`

GetInternal returns the Internal field if non-nil, zero value otherwise.

### GetInternalOk

`func (o *ActivityConfigTypeDetailType) GetInternalOk() (*bool, bool)`

GetInternalOk returns a tuple with the Internal field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInternal

`func (o *ActivityConfigTypeDetailType) SetInternal(v bool)`

SetInternal sets Internal field to given value.

### HasInternal

`func (o *ActivityConfigTypeDetailType) HasInternal() bool`

HasInternal returns a boolean if a field has been set.

### GetSequence

`func (o *ActivityConfigTypeDetailType) GetSequence() int32`

GetSequence returns the Sequence field if non-nil, zero value otherwise.

### GetSequenceOk

`func (o *ActivityConfigTypeDetailType) GetSequenceOk() (*int32, bool)`

GetSequenceOk returns a tuple with the Sequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSequence

`func (o *ActivityConfigTypeDetailType) SetSequence(v int32)`

SetSequence sets Sequence field to given value.

### HasSequence

`func (o *ActivityConfigTypeDetailType) HasSequence() bool`

HasSequence returns a boolean if a field has been set.

### GetAutoiCalendar

`func (o *ActivityConfigTypeDetailType) GetAutoiCalendar() bool`

GetAutoiCalendar returns the AutoiCalendar field if non-nil, zero value otherwise.

### GetAutoiCalendarOk

`func (o *ActivityConfigTypeDetailType) GetAutoiCalendarOk() (*bool, bool)`

GetAutoiCalendarOk returns a tuple with the AutoiCalendar field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAutoiCalendar

`func (o *ActivityConfigTypeDetailType) SetAutoiCalendar(v bool)`

SetAutoiCalendar sets AutoiCalendar field to given value.

### HasAutoiCalendar

`func (o *ActivityConfigTypeDetailType) HasAutoiCalendar() bool`

HasAutoiCalendar returns a boolean if a field has been set.

### GetMinutesBeforeAlert

`func (o *ActivityConfigTypeDetailType) GetMinutesBeforeAlert() int32`

GetMinutesBeforeAlert returns the MinutesBeforeAlert field if non-nil, zero value otherwise.

### GetMinutesBeforeAlertOk

`func (o *ActivityConfigTypeDetailType) GetMinutesBeforeAlertOk() (*int32, bool)`

GetMinutesBeforeAlertOk returns a tuple with the MinutesBeforeAlert field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMinutesBeforeAlert

`func (o *ActivityConfigTypeDetailType) SetMinutesBeforeAlert(v int32)`

SetMinutesBeforeAlert sets MinutesBeforeAlert field to given value.

### HasMinutesBeforeAlert

`func (o *ActivityConfigTypeDetailType) HasMinutesBeforeAlert() bool`

HasMinutesBeforeAlert returns a boolean if a field has been set.

### GetInactive

`func (o *ActivityConfigTypeDetailType) GetInactive() bool`

GetInactive returns the Inactive field if non-nil, zero value otherwise.

### GetInactiveOk

`func (o *ActivityConfigTypeDetailType) GetInactiveOk() (*bool, bool)`

GetInactiveOk returns a tuple with the Inactive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInactive

`func (o *ActivityConfigTypeDetailType) SetInactive(v bool)`

SetInactive sets Inactive field to given value.

### HasInactive

`func (o *ActivityConfigTypeDetailType) HasInactive() bool`

HasInactive returns a boolean if a field has been set.

### GetHotelId

`func (o *ActivityConfigTypeDetailType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ActivityConfigTypeDetailType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ActivityConfigTypeDetailType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ActivityConfigTypeDetailType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



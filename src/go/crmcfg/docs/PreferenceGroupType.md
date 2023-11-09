# PreferenceGroupType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AllowSubTypes** | Pointer to **bool** | This is a placeholder element for future use. Functionality may not be available for the current implementation. | [optional] 
**Code** | Pointer to **string** | Code identifying the preference group. | [optional] 
**Description** | Pointer to **string** | Description of the preference group. | [optional] 
**MandatoryReservation** | Pointer to **bool** | When this mandatory reservation is true then user cannot set or change reservation preference flag and also this is a non editable field. SPECIALS AND ROOM FEATURES preference groups will have true for this field | [optional] 
**MaxQuantity** | Pointer to **int32** | Maximum number of preferences which can be created in this preference group. | [optional] 
**ReservationPreference** | Pointer to **bool** | Indicates if the preference group can be used in reservations. | [optional] 
**Sequence** | Pointer to **int32** | Display sequence for the preference group. | [optional] 

## Methods

### NewPreferenceGroupType

`func NewPreferenceGroupType() *PreferenceGroupType`

NewPreferenceGroupType instantiates a new PreferenceGroupType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPreferenceGroupTypeWithDefaults

`func NewPreferenceGroupTypeWithDefaults() *PreferenceGroupType`

NewPreferenceGroupTypeWithDefaults instantiates a new PreferenceGroupType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAllowSubTypes

`func (o *PreferenceGroupType) GetAllowSubTypes() bool`

GetAllowSubTypes returns the AllowSubTypes field if non-nil, zero value otherwise.

### GetAllowSubTypesOk

`func (o *PreferenceGroupType) GetAllowSubTypesOk() (*bool, bool)`

GetAllowSubTypesOk returns a tuple with the AllowSubTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllowSubTypes

`func (o *PreferenceGroupType) SetAllowSubTypes(v bool)`

SetAllowSubTypes sets AllowSubTypes field to given value.

### HasAllowSubTypes

`func (o *PreferenceGroupType) HasAllowSubTypes() bool`

HasAllowSubTypes returns a boolean if a field has been set.

### GetCode

`func (o *PreferenceGroupType) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *PreferenceGroupType) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *PreferenceGroupType) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *PreferenceGroupType) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetDescription

`func (o *PreferenceGroupType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *PreferenceGroupType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *PreferenceGroupType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *PreferenceGroupType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetMandatoryReservation

`func (o *PreferenceGroupType) GetMandatoryReservation() bool`

GetMandatoryReservation returns the MandatoryReservation field if non-nil, zero value otherwise.

### GetMandatoryReservationOk

`func (o *PreferenceGroupType) GetMandatoryReservationOk() (*bool, bool)`

GetMandatoryReservationOk returns a tuple with the MandatoryReservation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMandatoryReservation

`func (o *PreferenceGroupType) SetMandatoryReservation(v bool)`

SetMandatoryReservation sets MandatoryReservation field to given value.

### HasMandatoryReservation

`func (o *PreferenceGroupType) HasMandatoryReservation() bool`

HasMandatoryReservation returns a boolean if a field has been set.

### GetMaxQuantity

`func (o *PreferenceGroupType) GetMaxQuantity() int32`

GetMaxQuantity returns the MaxQuantity field if non-nil, zero value otherwise.

### GetMaxQuantityOk

`func (o *PreferenceGroupType) GetMaxQuantityOk() (*int32, bool)`

GetMaxQuantityOk returns a tuple with the MaxQuantity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaxQuantity

`func (o *PreferenceGroupType) SetMaxQuantity(v int32)`

SetMaxQuantity sets MaxQuantity field to given value.

### HasMaxQuantity

`func (o *PreferenceGroupType) HasMaxQuantity() bool`

HasMaxQuantity returns a boolean if a field has been set.

### GetReservationPreference

`func (o *PreferenceGroupType) GetReservationPreference() bool`

GetReservationPreference returns the ReservationPreference field if non-nil, zero value otherwise.

### GetReservationPreferenceOk

`func (o *PreferenceGroupType) GetReservationPreferenceOk() (*bool, bool)`

GetReservationPreferenceOk returns a tuple with the ReservationPreference field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationPreference

`func (o *PreferenceGroupType) SetReservationPreference(v bool)`

SetReservationPreference sets ReservationPreference field to given value.

### HasReservationPreference

`func (o *PreferenceGroupType) HasReservationPreference() bool`

HasReservationPreference returns a boolean if a field has been set.

### GetSequence

`func (o *PreferenceGroupType) GetSequence() int32`

GetSequence returns the Sequence field if non-nil, zero value otherwise.

### GetSequenceOk

`func (o *PreferenceGroupType) GetSequenceOk() (*int32, bool)`

GetSequenceOk returns a tuple with the Sequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSequence

`func (o *PreferenceGroupType) SetSequence(v int32)`

SetSequence sets Sequence field to given value.

### HasSequence

`func (o *PreferenceGroupType) HasSequence() bool`

HasSequence returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



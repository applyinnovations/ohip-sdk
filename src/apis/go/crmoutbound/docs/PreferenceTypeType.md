# PreferenceTypeType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Preference** | Pointer to [**[]PreferenceType**](PreferenceType.md) | Collection of Preferences for the profile. | [optional] 
**PreferenceType** | Pointer to **string** | Preference group code. | [optional] 
**PreferenceTypeDescription** | Pointer to **string** | Preference group description. | [optional] 
**Sequence** | Pointer to **string** | Preference Sequence. | [optional] 
**MaxQuantity** | Pointer to **int32** | Maximum quantity of preferences allowed per preference group. | [optional] 
**AvailableQuantity** | Pointer to **int32** | Available quantity of preferences (maximum quantity - Existing preferences)per preference group. | [optional] 
**MaxResortUsedQuantity** | Pointer to **int32** | Maximum quantity of preferences used by any resort per preference group. | [optional] 
**ReservationPreference** | Pointer to **bool** | Whether this preference is reservation preference or not. | [optional] 
**CreateDateTime** | Pointer to **time.Time** | Time stamp of the creation. | [optional] 
**CreatorId** | Pointer to **string** | ID of creator. The creator could be a software system identifier or an identifier of an employee resposible for the creation. | [optional] 
**LastModifyDateTime** | Pointer to **time.Time** | Time stamp of last modification. | [optional] 
**LastModifierId** | Pointer to **string** | Identifies the last software system or person to modify a record. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 

## Methods

### NewPreferenceTypeType

`func NewPreferenceTypeType() *PreferenceTypeType`

NewPreferenceTypeType instantiates a new PreferenceTypeType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPreferenceTypeTypeWithDefaults

`func NewPreferenceTypeTypeWithDefaults() *PreferenceTypeType`

NewPreferenceTypeTypeWithDefaults instantiates a new PreferenceTypeType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPreference

`func (o *PreferenceTypeType) GetPreference() []PreferenceType`

GetPreference returns the Preference field if non-nil, zero value otherwise.

### GetPreferenceOk

`func (o *PreferenceTypeType) GetPreferenceOk() (*[]PreferenceType, bool)`

GetPreferenceOk returns a tuple with the Preference field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPreference

`func (o *PreferenceTypeType) SetPreference(v []PreferenceType)`

SetPreference sets Preference field to given value.

### HasPreference

`func (o *PreferenceTypeType) HasPreference() bool`

HasPreference returns a boolean if a field has been set.

### GetPreferenceType

`func (o *PreferenceTypeType) GetPreferenceType() string`

GetPreferenceType returns the PreferenceType field if non-nil, zero value otherwise.

### GetPreferenceTypeOk

`func (o *PreferenceTypeType) GetPreferenceTypeOk() (*string, bool)`

GetPreferenceTypeOk returns a tuple with the PreferenceType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPreferenceType

`func (o *PreferenceTypeType) SetPreferenceType(v string)`

SetPreferenceType sets PreferenceType field to given value.

### HasPreferenceType

`func (o *PreferenceTypeType) HasPreferenceType() bool`

HasPreferenceType returns a boolean if a field has been set.

### GetPreferenceTypeDescription

`func (o *PreferenceTypeType) GetPreferenceTypeDescription() string`

GetPreferenceTypeDescription returns the PreferenceTypeDescription field if non-nil, zero value otherwise.

### GetPreferenceTypeDescriptionOk

`func (o *PreferenceTypeType) GetPreferenceTypeDescriptionOk() (*string, bool)`

GetPreferenceTypeDescriptionOk returns a tuple with the PreferenceTypeDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPreferenceTypeDescription

`func (o *PreferenceTypeType) SetPreferenceTypeDescription(v string)`

SetPreferenceTypeDescription sets PreferenceTypeDescription field to given value.

### HasPreferenceTypeDescription

`func (o *PreferenceTypeType) HasPreferenceTypeDescription() bool`

HasPreferenceTypeDescription returns a boolean if a field has been set.

### GetSequence

`func (o *PreferenceTypeType) GetSequence() string`

GetSequence returns the Sequence field if non-nil, zero value otherwise.

### GetSequenceOk

`func (o *PreferenceTypeType) GetSequenceOk() (*string, bool)`

GetSequenceOk returns a tuple with the Sequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSequence

`func (o *PreferenceTypeType) SetSequence(v string)`

SetSequence sets Sequence field to given value.

### HasSequence

`func (o *PreferenceTypeType) HasSequence() bool`

HasSequence returns a boolean if a field has been set.

### GetMaxQuantity

`func (o *PreferenceTypeType) GetMaxQuantity() int32`

GetMaxQuantity returns the MaxQuantity field if non-nil, zero value otherwise.

### GetMaxQuantityOk

`func (o *PreferenceTypeType) GetMaxQuantityOk() (*int32, bool)`

GetMaxQuantityOk returns a tuple with the MaxQuantity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaxQuantity

`func (o *PreferenceTypeType) SetMaxQuantity(v int32)`

SetMaxQuantity sets MaxQuantity field to given value.

### HasMaxQuantity

`func (o *PreferenceTypeType) HasMaxQuantity() bool`

HasMaxQuantity returns a boolean if a field has been set.

### GetAvailableQuantity

`func (o *PreferenceTypeType) GetAvailableQuantity() int32`

GetAvailableQuantity returns the AvailableQuantity field if non-nil, zero value otherwise.

### GetAvailableQuantityOk

`func (o *PreferenceTypeType) GetAvailableQuantityOk() (*int32, bool)`

GetAvailableQuantityOk returns a tuple with the AvailableQuantity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAvailableQuantity

`func (o *PreferenceTypeType) SetAvailableQuantity(v int32)`

SetAvailableQuantity sets AvailableQuantity field to given value.

### HasAvailableQuantity

`func (o *PreferenceTypeType) HasAvailableQuantity() bool`

HasAvailableQuantity returns a boolean if a field has been set.

### GetMaxResortUsedQuantity

`func (o *PreferenceTypeType) GetMaxResortUsedQuantity() int32`

GetMaxResortUsedQuantity returns the MaxResortUsedQuantity field if non-nil, zero value otherwise.

### GetMaxResortUsedQuantityOk

`func (o *PreferenceTypeType) GetMaxResortUsedQuantityOk() (*int32, bool)`

GetMaxResortUsedQuantityOk returns a tuple with the MaxResortUsedQuantity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaxResortUsedQuantity

`func (o *PreferenceTypeType) SetMaxResortUsedQuantity(v int32)`

SetMaxResortUsedQuantity sets MaxResortUsedQuantity field to given value.

### HasMaxResortUsedQuantity

`func (o *PreferenceTypeType) HasMaxResortUsedQuantity() bool`

HasMaxResortUsedQuantity returns a boolean if a field has been set.

### GetReservationPreference

`func (o *PreferenceTypeType) GetReservationPreference() bool`

GetReservationPreference returns the ReservationPreference field if non-nil, zero value otherwise.

### GetReservationPreferenceOk

`func (o *PreferenceTypeType) GetReservationPreferenceOk() (*bool, bool)`

GetReservationPreferenceOk returns a tuple with the ReservationPreference field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationPreference

`func (o *PreferenceTypeType) SetReservationPreference(v bool)`

SetReservationPreference sets ReservationPreference field to given value.

### HasReservationPreference

`func (o *PreferenceTypeType) HasReservationPreference() bool`

HasReservationPreference returns a boolean if a field has been set.

### GetCreateDateTime

`func (o *PreferenceTypeType) GetCreateDateTime() time.Time`

GetCreateDateTime returns the CreateDateTime field if non-nil, zero value otherwise.

### GetCreateDateTimeOk

`func (o *PreferenceTypeType) GetCreateDateTimeOk() (*time.Time, bool)`

GetCreateDateTimeOk returns a tuple with the CreateDateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreateDateTime

`func (o *PreferenceTypeType) SetCreateDateTime(v time.Time)`

SetCreateDateTime sets CreateDateTime field to given value.

### HasCreateDateTime

`func (o *PreferenceTypeType) HasCreateDateTime() bool`

HasCreateDateTime returns a boolean if a field has been set.

### GetCreatorId

`func (o *PreferenceTypeType) GetCreatorId() string`

GetCreatorId returns the CreatorId field if non-nil, zero value otherwise.

### GetCreatorIdOk

`func (o *PreferenceTypeType) GetCreatorIdOk() (*string, bool)`

GetCreatorIdOk returns a tuple with the CreatorId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatorId

`func (o *PreferenceTypeType) SetCreatorId(v string)`

SetCreatorId sets CreatorId field to given value.

### HasCreatorId

`func (o *PreferenceTypeType) HasCreatorId() bool`

HasCreatorId returns a boolean if a field has been set.

### GetLastModifyDateTime

`func (o *PreferenceTypeType) GetLastModifyDateTime() time.Time`

GetLastModifyDateTime returns the LastModifyDateTime field if non-nil, zero value otherwise.

### GetLastModifyDateTimeOk

`func (o *PreferenceTypeType) GetLastModifyDateTimeOk() (*time.Time, bool)`

GetLastModifyDateTimeOk returns a tuple with the LastModifyDateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModifyDateTime

`func (o *PreferenceTypeType) SetLastModifyDateTime(v time.Time)`

SetLastModifyDateTime sets LastModifyDateTime field to given value.

### HasLastModifyDateTime

`func (o *PreferenceTypeType) HasLastModifyDateTime() bool`

HasLastModifyDateTime returns a boolean if a field has been set.

### GetLastModifierId

`func (o *PreferenceTypeType) GetLastModifierId() string`

GetLastModifierId returns the LastModifierId field if non-nil, zero value otherwise.

### GetLastModifierIdOk

`func (o *PreferenceTypeType) GetLastModifierIdOk() (*string, bool)`

GetLastModifierIdOk returns a tuple with the LastModifierId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModifierId

`func (o *PreferenceTypeType) SetLastModifierId(v string)`

SetLastModifierId sets LastModifierId field to given value.

### HasLastModifierId

`func (o *PreferenceTypeType) HasLastModifierId() bool`

HasLastModifierId returns a boolean if a field has been set.

### GetLinks

`func (o *PreferenceTypeType) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PreferenceTypeType) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PreferenceTypeType) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PreferenceTypeType) HasLinks() bool`

HasLinks returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



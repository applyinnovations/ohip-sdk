# TelephoneType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CreateDateTime** | Pointer to **string** | Time stamp of the creation. | [optional] 
**CreatorId** | Pointer to **string** | ID of creator. The creator could be a software system identifier or an identifier of an employee resposible for the creation. | [optional] 
**Extension** | Pointer to **string** | Extension to reach a specific party at the phone number. | [optional] 
**LastModifierId** | Pointer to **string** | Identifies the last software system or person to modify a record. | [optional] 
**LastModifyDateTime** | Pointer to **string** | Time stamp of last modification. | [optional] 
**OrderSequence** | Pointer to **float32** | Display Order sequence. | [optional] 
**PhoneNumber** | Pointer to **string** | Telephone number assigned to a single location. | [optional] 
**PhoneTechType** | Pointer to **string** | Indicates type of technology associated with this telephone number, such as Voice, Data, Fax, Pager, Mobile, TTY, etc. | [optional] 
**PhoneUseType** | Pointer to **string** | Describes the type of telephone number, in the context of its general use (e.g. Home, Business, Emergency Contact, Travel Arranger, Day, Evening). | [optional] 
**PhoneUseTypeDescription** | Pointer to **string** | Description of the PhoneUseType code | [optional] 
**PrimaryInd** | Pointer to **bool** | When true, indicates a primary information. | [optional] 

## Methods

### NewTelephoneType

`func NewTelephoneType() *TelephoneType`

NewTelephoneType instantiates a new TelephoneType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTelephoneTypeWithDefaults

`func NewTelephoneTypeWithDefaults() *TelephoneType`

NewTelephoneTypeWithDefaults instantiates a new TelephoneType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCreateDateTime

`func (o *TelephoneType) GetCreateDateTime() string`

GetCreateDateTime returns the CreateDateTime field if non-nil, zero value otherwise.

### GetCreateDateTimeOk

`func (o *TelephoneType) GetCreateDateTimeOk() (*string, bool)`

GetCreateDateTimeOk returns a tuple with the CreateDateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreateDateTime

`func (o *TelephoneType) SetCreateDateTime(v string)`

SetCreateDateTime sets CreateDateTime field to given value.

### HasCreateDateTime

`func (o *TelephoneType) HasCreateDateTime() bool`

HasCreateDateTime returns a boolean if a field has been set.

### GetCreatorId

`func (o *TelephoneType) GetCreatorId() string`

GetCreatorId returns the CreatorId field if non-nil, zero value otherwise.

### GetCreatorIdOk

`func (o *TelephoneType) GetCreatorIdOk() (*string, bool)`

GetCreatorIdOk returns a tuple with the CreatorId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatorId

`func (o *TelephoneType) SetCreatorId(v string)`

SetCreatorId sets CreatorId field to given value.

### HasCreatorId

`func (o *TelephoneType) HasCreatorId() bool`

HasCreatorId returns a boolean if a field has been set.

### GetExtension

`func (o *TelephoneType) GetExtension() string`

GetExtension returns the Extension field if non-nil, zero value otherwise.

### GetExtensionOk

`func (o *TelephoneType) GetExtensionOk() (*string, bool)`

GetExtensionOk returns a tuple with the Extension field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExtension

`func (o *TelephoneType) SetExtension(v string)`

SetExtension sets Extension field to given value.

### HasExtension

`func (o *TelephoneType) HasExtension() bool`

HasExtension returns a boolean if a field has been set.

### GetLastModifierId

`func (o *TelephoneType) GetLastModifierId() string`

GetLastModifierId returns the LastModifierId field if non-nil, zero value otherwise.

### GetLastModifierIdOk

`func (o *TelephoneType) GetLastModifierIdOk() (*string, bool)`

GetLastModifierIdOk returns a tuple with the LastModifierId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModifierId

`func (o *TelephoneType) SetLastModifierId(v string)`

SetLastModifierId sets LastModifierId field to given value.

### HasLastModifierId

`func (o *TelephoneType) HasLastModifierId() bool`

HasLastModifierId returns a boolean if a field has been set.

### GetLastModifyDateTime

`func (o *TelephoneType) GetLastModifyDateTime() string`

GetLastModifyDateTime returns the LastModifyDateTime field if non-nil, zero value otherwise.

### GetLastModifyDateTimeOk

`func (o *TelephoneType) GetLastModifyDateTimeOk() (*string, bool)`

GetLastModifyDateTimeOk returns a tuple with the LastModifyDateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModifyDateTime

`func (o *TelephoneType) SetLastModifyDateTime(v string)`

SetLastModifyDateTime sets LastModifyDateTime field to given value.

### HasLastModifyDateTime

`func (o *TelephoneType) HasLastModifyDateTime() bool`

HasLastModifyDateTime returns a boolean if a field has been set.

### GetOrderSequence

`func (o *TelephoneType) GetOrderSequence() float32`

GetOrderSequence returns the OrderSequence field if non-nil, zero value otherwise.

### GetOrderSequenceOk

`func (o *TelephoneType) GetOrderSequenceOk() (*float32, bool)`

GetOrderSequenceOk returns a tuple with the OrderSequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrderSequence

`func (o *TelephoneType) SetOrderSequence(v float32)`

SetOrderSequence sets OrderSequence field to given value.

### HasOrderSequence

`func (o *TelephoneType) HasOrderSequence() bool`

HasOrderSequence returns a boolean if a field has been set.

### GetPhoneNumber

`func (o *TelephoneType) GetPhoneNumber() string`

GetPhoneNumber returns the PhoneNumber field if non-nil, zero value otherwise.

### GetPhoneNumberOk

`func (o *TelephoneType) GetPhoneNumberOk() (*string, bool)`

GetPhoneNumberOk returns a tuple with the PhoneNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPhoneNumber

`func (o *TelephoneType) SetPhoneNumber(v string)`

SetPhoneNumber sets PhoneNumber field to given value.

### HasPhoneNumber

`func (o *TelephoneType) HasPhoneNumber() bool`

HasPhoneNumber returns a boolean if a field has been set.

### GetPhoneTechType

`func (o *TelephoneType) GetPhoneTechType() string`

GetPhoneTechType returns the PhoneTechType field if non-nil, zero value otherwise.

### GetPhoneTechTypeOk

`func (o *TelephoneType) GetPhoneTechTypeOk() (*string, bool)`

GetPhoneTechTypeOk returns a tuple with the PhoneTechType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPhoneTechType

`func (o *TelephoneType) SetPhoneTechType(v string)`

SetPhoneTechType sets PhoneTechType field to given value.

### HasPhoneTechType

`func (o *TelephoneType) HasPhoneTechType() bool`

HasPhoneTechType returns a boolean if a field has been set.

### GetPhoneUseType

`func (o *TelephoneType) GetPhoneUseType() string`

GetPhoneUseType returns the PhoneUseType field if non-nil, zero value otherwise.

### GetPhoneUseTypeOk

`func (o *TelephoneType) GetPhoneUseTypeOk() (*string, bool)`

GetPhoneUseTypeOk returns a tuple with the PhoneUseType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPhoneUseType

`func (o *TelephoneType) SetPhoneUseType(v string)`

SetPhoneUseType sets PhoneUseType field to given value.

### HasPhoneUseType

`func (o *TelephoneType) HasPhoneUseType() bool`

HasPhoneUseType returns a boolean if a field has been set.

### GetPhoneUseTypeDescription

`func (o *TelephoneType) GetPhoneUseTypeDescription() string`

GetPhoneUseTypeDescription returns the PhoneUseTypeDescription field if non-nil, zero value otherwise.

### GetPhoneUseTypeDescriptionOk

`func (o *TelephoneType) GetPhoneUseTypeDescriptionOk() (*string, bool)`

GetPhoneUseTypeDescriptionOk returns a tuple with the PhoneUseTypeDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPhoneUseTypeDescription

`func (o *TelephoneType) SetPhoneUseTypeDescription(v string)`

SetPhoneUseTypeDescription sets PhoneUseTypeDescription field to given value.

### HasPhoneUseTypeDescription

`func (o *TelephoneType) HasPhoneUseTypeDescription() bool`

HasPhoneUseTypeDescription returns a boolean if a field has been set.

### GetPrimaryInd

`func (o *TelephoneType) GetPrimaryInd() bool`

GetPrimaryInd returns the PrimaryInd field if non-nil, zero value otherwise.

### GetPrimaryIndOk

`func (o *TelephoneType) GetPrimaryIndOk() (*bool, bool)`

GetPrimaryIndOk returns a tuple with the PrimaryInd field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrimaryInd

`func (o *TelephoneType) SetPrimaryInd(v bool)`

SetPrimaryInd sets PrimaryInd field to given value.

### HasPrimaryInd

`func (o *TelephoneType) HasPrimaryInd() bool`

HasPrimaryInd returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



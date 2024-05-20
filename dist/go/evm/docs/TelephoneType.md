# TelephoneType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PhoneNumber** | Pointer to **string** | Telephone number assigned to a single location. | [optional] 
**PhoneTechType** | Pointer to **string** | Indicates type of technology associated with this telephone number, such as Voice, Data, Fax, Pager, Mobile, TTY, etc. | [optional] 
**PhoneUseType** | Pointer to **string** | Describes the type of telephone number, in the context of its general use (e.g. Home, Business, Emergency Contact, Travel Arranger, Day, Evening). | [optional] 
**PhoneUseTypeDescription** | Pointer to **string** | Description of the PhoneUseType code | [optional] 

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


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



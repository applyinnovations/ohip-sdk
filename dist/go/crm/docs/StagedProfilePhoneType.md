# StagedProfilePhoneType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Telephone** | Pointer to [**TelephoneType**](TelephoneType.md) |  | [optional] 
**ErrorDescription** | Pointer to **string** | The error in telephone information in a staged profile with an invalid status. | [optional] 
**InactiveDate** | Pointer to **string** | Inactivation date of the record. | [optional] 
**DefaultConfirmation** | Pointer to **bool** | Indicates whether the phone is the default confirmation method. | [optional] 
**Id** | Pointer to **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | [optional] 
**Type** | Pointer to **string** | A reference to the type of object defined by the UniqueID element. | [optional] 

## Methods

### NewStagedProfilePhoneType

`func NewStagedProfilePhoneType() *StagedProfilePhoneType`

NewStagedProfilePhoneType instantiates a new StagedProfilePhoneType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewStagedProfilePhoneTypeWithDefaults

`func NewStagedProfilePhoneTypeWithDefaults() *StagedProfilePhoneType`

NewStagedProfilePhoneTypeWithDefaults instantiates a new StagedProfilePhoneType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTelephone

`func (o *StagedProfilePhoneType) GetTelephone() TelephoneType`

GetTelephone returns the Telephone field if non-nil, zero value otherwise.

### GetTelephoneOk

`func (o *StagedProfilePhoneType) GetTelephoneOk() (*TelephoneType, bool)`

GetTelephoneOk returns a tuple with the Telephone field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTelephone

`func (o *StagedProfilePhoneType) SetTelephone(v TelephoneType)`

SetTelephone sets Telephone field to given value.

### HasTelephone

`func (o *StagedProfilePhoneType) HasTelephone() bool`

HasTelephone returns a boolean if a field has been set.

### GetErrorDescription

`func (o *StagedProfilePhoneType) GetErrorDescription() string`

GetErrorDescription returns the ErrorDescription field if non-nil, zero value otherwise.

### GetErrorDescriptionOk

`func (o *StagedProfilePhoneType) GetErrorDescriptionOk() (*string, bool)`

GetErrorDescriptionOk returns a tuple with the ErrorDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrorDescription

`func (o *StagedProfilePhoneType) SetErrorDescription(v string)`

SetErrorDescription sets ErrorDescription field to given value.

### HasErrorDescription

`func (o *StagedProfilePhoneType) HasErrorDescription() bool`

HasErrorDescription returns a boolean if a field has been set.

### GetInactiveDate

`func (o *StagedProfilePhoneType) GetInactiveDate() string`

GetInactiveDate returns the InactiveDate field if non-nil, zero value otherwise.

### GetInactiveDateOk

`func (o *StagedProfilePhoneType) GetInactiveDateOk() (*string, bool)`

GetInactiveDateOk returns a tuple with the InactiveDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInactiveDate

`func (o *StagedProfilePhoneType) SetInactiveDate(v string)`

SetInactiveDate sets InactiveDate field to given value.

### HasInactiveDate

`func (o *StagedProfilePhoneType) HasInactiveDate() bool`

HasInactiveDate returns a boolean if a field has been set.

### GetDefaultConfirmation

`func (o *StagedProfilePhoneType) GetDefaultConfirmation() bool`

GetDefaultConfirmation returns the DefaultConfirmation field if non-nil, zero value otherwise.

### GetDefaultConfirmationOk

`func (o *StagedProfilePhoneType) GetDefaultConfirmationOk() (*bool, bool)`

GetDefaultConfirmationOk returns a tuple with the DefaultConfirmation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDefaultConfirmation

`func (o *StagedProfilePhoneType) SetDefaultConfirmation(v bool)`

SetDefaultConfirmation sets DefaultConfirmation field to given value.

### HasDefaultConfirmation

`func (o *StagedProfilePhoneType) HasDefaultConfirmation() bool`

HasDefaultConfirmation returns a boolean if a field has been set.

### GetId

`func (o *StagedProfilePhoneType) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *StagedProfilePhoneType) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *StagedProfilePhoneType) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *StagedProfilePhoneType) HasId() bool`

HasId returns a boolean if a field has been set.

### GetType

`func (o *StagedProfilePhoneType) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *StagedProfilePhoneType) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *StagedProfilePhoneType) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *StagedProfilePhoneType) HasType() bool`

HasType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



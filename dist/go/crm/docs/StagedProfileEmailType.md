# StagedProfileEmailType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DefaultConfirmation** | Pointer to **bool** | Indicates whether the email is the default confirmation method. | [optional] 
**Email** | Pointer to [**EmailType**](EmailType.md) |  | [optional] 
**ErrorDescription** | Pointer to **string** | The error in email information in a staged profile with an invalid status | [optional] 
**Id** | Pointer to **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | [optional] 
**InactiveDate** | Pointer to **string** | Inactivation date of the record. | [optional] 
**Type** | Pointer to **string** | A reference to the type of object defined by the UniqueID element. | [optional] 

## Methods

### NewStagedProfileEmailType

`func NewStagedProfileEmailType() *StagedProfileEmailType`

NewStagedProfileEmailType instantiates a new StagedProfileEmailType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewStagedProfileEmailTypeWithDefaults

`func NewStagedProfileEmailTypeWithDefaults() *StagedProfileEmailType`

NewStagedProfileEmailTypeWithDefaults instantiates a new StagedProfileEmailType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDefaultConfirmation

`func (o *StagedProfileEmailType) GetDefaultConfirmation() bool`

GetDefaultConfirmation returns the DefaultConfirmation field if non-nil, zero value otherwise.

### GetDefaultConfirmationOk

`func (o *StagedProfileEmailType) GetDefaultConfirmationOk() (*bool, bool)`

GetDefaultConfirmationOk returns a tuple with the DefaultConfirmation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDefaultConfirmation

`func (o *StagedProfileEmailType) SetDefaultConfirmation(v bool)`

SetDefaultConfirmation sets DefaultConfirmation field to given value.

### HasDefaultConfirmation

`func (o *StagedProfileEmailType) HasDefaultConfirmation() bool`

HasDefaultConfirmation returns a boolean if a field has been set.

### GetEmail

`func (o *StagedProfileEmailType) GetEmail() EmailType`

GetEmail returns the Email field if non-nil, zero value otherwise.

### GetEmailOk

`func (o *StagedProfileEmailType) GetEmailOk() (*EmailType, bool)`

GetEmailOk returns a tuple with the Email field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmail

`func (o *StagedProfileEmailType) SetEmail(v EmailType)`

SetEmail sets Email field to given value.

### HasEmail

`func (o *StagedProfileEmailType) HasEmail() bool`

HasEmail returns a boolean if a field has been set.

### GetErrorDescription

`func (o *StagedProfileEmailType) GetErrorDescription() string`

GetErrorDescription returns the ErrorDescription field if non-nil, zero value otherwise.

### GetErrorDescriptionOk

`func (o *StagedProfileEmailType) GetErrorDescriptionOk() (*string, bool)`

GetErrorDescriptionOk returns a tuple with the ErrorDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrorDescription

`func (o *StagedProfileEmailType) SetErrorDescription(v string)`

SetErrorDescription sets ErrorDescription field to given value.

### HasErrorDescription

`func (o *StagedProfileEmailType) HasErrorDescription() bool`

HasErrorDescription returns a boolean if a field has been set.

### GetId

`func (o *StagedProfileEmailType) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *StagedProfileEmailType) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *StagedProfileEmailType) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *StagedProfileEmailType) HasId() bool`

HasId returns a boolean if a field has been set.

### GetInactiveDate

`func (o *StagedProfileEmailType) GetInactiveDate() string`

GetInactiveDate returns the InactiveDate field if non-nil, zero value otherwise.

### GetInactiveDateOk

`func (o *StagedProfileEmailType) GetInactiveDateOk() (*string, bool)`

GetInactiveDateOk returns a tuple with the InactiveDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInactiveDate

`func (o *StagedProfileEmailType) SetInactiveDate(v string)`

SetInactiveDate sets InactiveDate field to given value.

### HasInactiveDate

`func (o *StagedProfileEmailType) HasInactiveDate() bool`

HasInactiveDate returns a boolean if a field has been set.

### GetType

`func (o *StagedProfileEmailType) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *StagedProfileEmailType) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *StagedProfileEmailType) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *StagedProfileEmailType) HasType() bool`

HasType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



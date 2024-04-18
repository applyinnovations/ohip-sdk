# EmailType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EmailAddress** | Pointer to **string** | Defines the e-mail address. | [optional] 
**EmailFormat** | Pointer to **string** | Supported Email format. | [optional] 
**Type** | Pointer to **string** | Defines the purpose of the e-mail address (e.g. personal, business, listserve). | [optional] 
**TypeDescription** | Pointer to **string** | Describes the Type code | [optional] 

## Methods

### NewEmailType

`func NewEmailType() *EmailType`

NewEmailType instantiates a new EmailType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEmailTypeWithDefaults

`func NewEmailTypeWithDefaults() *EmailType`

NewEmailTypeWithDefaults instantiates a new EmailType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEmailAddress

`func (o *EmailType) GetEmailAddress() string`

GetEmailAddress returns the EmailAddress field if non-nil, zero value otherwise.

### GetEmailAddressOk

`func (o *EmailType) GetEmailAddressOk() (*string, bool)`

GetEmailAddressOk returns a tuple with the EmailAddress field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmailAddress

`func (o *EmailType) SetEmailAddress(v string)`

SetEmailAddress sets EmailAddress field to given value.

### HasEmailAddress

`func (o *EmailType) HasEmailAddress() bool`

HasEmailAddress returns a boolean if a field has been set.

### GetEmailFormat

`func (o *EmailType) GetEmailFormat() string`

GetEmailFormat returns the EmailFormat field if non-nil, zero value otherwise.

### GetEmailFormatOk

`func (o *EmailType) GetEmailFormatOk() (*string, bool)`

GetEmailFormatOk returns a tuple with the EmailFormat field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmailFormat

`func (o *EmailType) SetEmailFormat(v string)`

SetEmailFormat sets EmailFormat field to given value.

### HasEmailFormat

`func (o *EmailType) HasEmailFormat() bool`

HasEmailFormat returns a boolean if a field has been set.

### GetType

`func (o *EmailType) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *EmailType) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *EmailType) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *EmailType) HasType() bool`

HasType returns a boolean if a field has been set.

### GetTypeDescription

`func (o *EmailType) GetTypeDescription() string`

GetTypeDescription returns the TypeDescription field if non-nil, zero value otherwise.

### GetTypeDescriptionOk

`func (o *EmailType) GetTypeDescriptionOk() (*string, bool)`

GetTypeDescriptionOk returns a tuple with the TypeDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTypeDescription

`func (o *EmailType) SetTypeDescription(v string)`

SetTypeDescription sets TypeDescription field to given value.

### HasTypeDescription

`func (o *EmailType) HasTypeDescription() bool`

HasTypeDescription returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


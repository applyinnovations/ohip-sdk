# ChannelAccountContactType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Telephones** | Pointer to [**ChannelAccountContactTypeTelephones**](ChannelAccountContactTypeTelephones.md) |  | [optional] 
**Emails** | Pointer to [**ChannelAccountContactTypeEmails**](ChannelAccountContactTypeEmails.md) |  | [optional] 

## Methods

### NewChannelAccountContactType

`func NewChannelAccountContactType() *ChannelAccountContactType`

NewChannelAccountContactType instantiates a new ChannelAccountContactType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChannelAccountContactTypeWithDefaults

`func NewChannelAccountContactTypeWithDefaults() *ChannelAccountContactType`

NewChannelAccountContactTypeWithDefaults instantiates a new ChannelAccountContactType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTelephones

`func (o *ChannelAccountContactType) GetTelephones() ChannelAccountContactTypeTelephones`

GetTelephones returns the Telephones field if non-nil, zero value otherwise.

### GetTelephonesOk

`func (o *ChannelAccountContactType) GetTelephonesOk() (*ChannelAccountContactTypeTelephones, bool)`

GetTelephonesOk returns a tuple with the Telephones field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTelephones

`func (o *ChannelAccountContactType) SetTelephones(v ChannelAccountContactTypeTelephones)`

SetTelephones sets Telephones field to given value.

### HasTelephones

`func (o *ChannelAccountContactType) HasTelephones() bool`

HasTelephones returns a boolean if a field has been set.

### GetEmails

`func (o *ChannelAccountContactType) GetEmails() ChannelAccountContactTypeEmails`

GetEmails returns the Emails field if non-nil, zero value otherwise.

### GetEmailsOk

`func (o *ChannelAccountContactType) GetEmailsOk() (*ChannelAccountContactTypeEmails, bool)`

GetEmailsOk returns a tuple with the Emails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmails

`func (o *ChannelAccountContactType) SetEmails(v ChannelAccountContactTypeEmails)`

SetEmails sets Emails field to given value.

### HasEmails

`func (o *ChannelAccountContactType) HasEmails() bool`

HasEmails returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



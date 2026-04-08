# ChannelAccountDetailsType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccountCode** | Pointer to **string** | Holds Account code for which details are fetched. | [optional] 
**TemplateAccountCode** | Pointer to **string** | Holds Template Account code on which current account is based on. | [optional] 
**AccountType** | Pointer to [**ChannelAccountTypeType**](ChannelAccountTypeType.md) |  | [optional] 
**AccountName** | Pointer to **string** | Holds Account Name for which details are fetched. | [optional] 
**ContactName** | Pointer to **string** | Account contact name information. | [optional] 
**ECUNo** | Pointer to **string** | Holds ECU No alias AR_No. | [optional] 

## Methods

### NewChannelAccountDetailsType

`func NewChannelAccountDetailsType() *ChannelAccountDetailsType`

NewChannelAccountDetailsType instantiates a new ChannelAccountDetailsType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChannelAccountDetailsTypeWithDefaults

`func NewChannelAccountDetailsTypeWithDefaults() *ChannelAccountDetailsType`

NewChannelAccountDetailsTypeWithDefaults instantiates a new ChannelAccountDetailsType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccountCode

`func (o *ChannelAccountDetailsType) GetAccountCode() string`

GetAccountCode returns the AccountCode field if non-nil, zero value otherwise.

### GetAccountCodeOk

`func (o *ChannelAccountDetailsType) GetAccountCodeOk() (*string, bool)`

GetAccountCodeOk returns a tuple with the AccountCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountCode

`func (o *ChannelAccountDetailsType) SetAccountCode(v string)`

SetAccountCode sets AccountCode field to given value.

### HasAccountCode

`func (o *ChannelAccountDetailsType) HasAccountCode() bool`

HasAccountCode returns a boolean if a field has been set.

### GetTemplateAccountCode

`func (o *ChannelAccountDetailsType) GetTemplateAccountCode() string`

GetTemplateAccountCode returns the TemplateAccountCode field if non-nil, zero value otherwise.

### GetTemplateAccountCodeOk

`func (o *ChannelAccountDetailsType) GetTemplateAccountCodeOk() (*string, bool)`

GetTemplateAccountCodeOk returns a tuple with the TemplateAccountCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTemplateAccountCode

`func (o *ChannelAccountDetailsType) SetTemplateAccountCode(v string)`

SetTemplateAccountCode sets TemplateAccountCode field to given value.

### HasTemplateAccountCode

`func (o *ChannelAccountDetailsType) HasTemplateAccountCode() bool`

HasTemplateAccountCode returns a boolean if a field has been set.

### GetAccountType

`func (o *ChannelAccountDetailsType) GetAccountType() ChannelAccountTypeType`

GetAccountType returns the AccountType field if non-nil, zero value otherwise.

### GetAccountTypeOk

`func (o *ChannelAccountDetailsType) GetAccountTypeOk() (*ChannelAccountTypeType, bool)`

GetAccountTypeOk returns a tuple with the AccountType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountType

`func (o *ChannelAccountDetailsType) SetAccountType(v ChannelAccountTypeType)`

SetAccountType sets AccountType field to given value.

### HasAccountType

`func (o *ChannelAccountDetailsType) HasAccountType() bool`

HasAccountType returns a boolean if a field has been set.

### GetAccountName

`func (o *ChannelAccountDetailsType) GetAccountName() string`

GetAccountName returns the AccountName field if non-nil, zero value otherwise.

### GetAccountNameOk

`func (o *ChannelAccountDetailsType) GetAccountNameOk() (*string, bool)`

GetAccountNameOk returns a tuple with the AccountName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountName

`func (o *ChannelAccountDetailsType) SetAccountName(v string)`

SetAccountName sets AccountName field to given value.

### HasAccountName

`func (o *ChannelAccountDetailsType) HasAccountName() bool`

HasAccountName returns a boolean if a field has been set.

### GetContactName

`func (o *ChannelAccountDetailsType) GetContactName() string`

GetContactName returns the ContactName field if non-nil, zero value otherwise.

### GetContactNameOk

`func (o *ChannelAccountDetailsType) GetContactNameOk() (*string, bool)`

GetContactNameOk returns a tuple with the ContactName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContactName

`func (o *ChannelAccountDetailsType) SetContactName(v string)`

SetContactName sets ContactName field to given value.

### HasContactName

`func (o *ChannelAccountDetailsType) HasContactName() bool`

HasContactName returns a boolean if a field has been set.

### GetECUNo

`func (o *ChannelAccountDetailsType) GetECUNo() string`

GetECUNo returns the ECUNo field if non-nil, zero value otherwise.

### GetECUNoOk

`func (o *ChannelAccountDetailsType) GetECUNoOk() (*string, bool)`

GetECUNoOk returns a tuple with the ECUNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetECUNo

`func (o *ChannelAccountDetailsType) SetECUNo(v string)`

SetECUNo sets ECUNo field to given value.

### HasECUNo

`func (o *ChannelAccountDetailsType) HasECUNo() bool`

HasECUNo returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



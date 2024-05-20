# MasterAccount

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**MasterAccount** | Pointer to [**MasterAccountType**](MasterAccountType.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewMasterAccount

`func NewMasterAccount() *MasterAccount`

NewMasterAccount instantiates a new MasterAccount object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMasterAccountWithDefaults

`func NewMasterAccountWithDefaults() *MasterAccount`

NewMasterAccountWithDefaults instantiates a new MasterAccount object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *MasterAccount) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *MasterAccount) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *MasterAccount) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *MasterAccount) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetMasterAccount

`func (o *MasterAccount) GetMasterAccount() MasterAccountType`

GetMasterAccount returns the MasterAccount field if non-nil, zero value otherwise.

### GetMasterAccountOk

`func (o *MasterAccount) GetMasterAccountOk() (*MasterAccountType, bool)`

GetMasterAccountOk returns a tuple with the MasterAccount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMasterAccount

`func (o *MasterAccount) SetMasterAccount(v MasterAccountType)`

SetMasterAccount sets MasterAccount field to given value.

### HasMasterAccount

`func (o *MasterAccount) HasMasterAccount() bool`

HasMasterAccount returns a boolean if a field has been set.

### GetWarnings

`func (o *MasterAccount) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *MasterAccount) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *MasterAccount) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *MasterAccount) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



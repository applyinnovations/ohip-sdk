# ChangeInterfaceAccount

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Account** | Pointer to [**InterfaceAccountType**](InterfaceAccountType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewChangeInterfaceAccount

`func NewChangeInterfaceAccount() *ChangeInterfaceAccount`

NewChangeInterfaceAccount instantiates a new ChangeInterfaceAccount object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChangeInterfaceAccountWithDefaults

`func NewChangeInterfaceAccountWithDefaults() *ChangeInterfaceAccount`

NewChangeInterfaceAccountWithDefaults instantiates a new ChangeInterfaceAccount object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccount

`func (o *ChangeInterfaceAccount) GetAccount() InterfaceAccountType`

GetAccount returns the Account field if non-nil, zero value otherwise.

### GetAccountOk

`func (o *ChangeInterfaceAccount) GetAccountOk() (*InterfaceAccountType, bool)`

GetAccountOk returns a tuple with the Account field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccount

`func (o *ChangeInterfaceAccount) SetAccount(v InterfaceAccountType)`

SetAccount sets Account field to given value.

### HasAccount

`func (o *ChangeInterfaceAccount) HasAccount() bool`

HasAccount returns a boolean if a field has been set.

### GetLinks

`func (o *ChangeInterfaceAccount) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ChangeInterfaceAccount) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ChangeInterfaceAccount) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ChangeInterfaceAccount) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ChangeInterfaceAccount) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ChangeInterfaceAccount) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ChangeInterfaceAccount) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ChangeInterfaceAccount) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



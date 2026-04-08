# AccountTypesCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccountTypes** | Pointer to [**[]AccountTypeType**](AccountTypeType.md) | List of Account Types. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewAccountTypesCriteria

`func NewAccountTypesCriteria() *AccountTypesCriteria`

NewAccountTypesCriteria instantiates a new AccountTypesCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccountTypesCriteriaWithDefaults

`func NewAccountTypesCriteriaWithDefaults() *AccountTypesCriteria`

NewAccountTypesCriteriaWithDefaults instantiates a new AccountTypesCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccountTypes

`func (o *AccountTypesCriteria) GetAccountTypes() []AccountTypeType`

GetAccountTypes returns the AccountTypes field if non-nil, zero value otherwise.

### GetAccountTypesOk

`func (o *AccountTypesCriteria) GetAccountTypesOk() (*[]AccountTypeType, bool)`

GetAccountTypesOk returns a tuple with the AccountTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountTypes

`func (o *AccountTypesCriteria) SetAccountTypes(v []AccountTypeType)`

SetAccountTypes sets AccountTypes field to given value.

### HasAccountTypes

`func (o *AccountTypesCriteria) HasAccountTypes() bool`

HasAccountTypes returns a boolean if a field has been set.

### GetLinks

`func (o *AccountTypesCriteria) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *AccountTypesCriteria) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *AccountTypesCriteria) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *AccountTypesCriteria) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *AccountTypesCriteria) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *AccountTypesCriteria) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *AccountTypesCriteria) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *AccountTypesCriteria) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



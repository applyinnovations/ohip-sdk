# AccountTypesToBeChanged

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccountTypes** | Pointer to [**[]AccountTypeType**](AccountTypeType.md) | List of Account Types. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewAccountTypesToBeChanged

`func NewAccountTypesToBeChanged() *AccountTypesToBeChanged`

NewAccountTypesToBeChanged instantiates a new AccountTypesToBeChanged object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccountTypesToBeChangedWithDefaults

`func NewAccountTypesToBeChangedWithDefaults() *AccountTypesToBeChanged`

NewAccountTypesToBeChangedWithDefaults instantiates a new AccountTypesToBeChanged object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccountTypes

`func (o *AccountTypesToBeChanged) GetAccountTypes() []AccountTypeType`

GetAccountTypes returns the AccountTypes field if non-nil, zero value otherwise.

### GetAccountTypesOk

`func (o *AccountTypesToBeChanged) GetAccountTypesOk() (*[]AccountTypeType, bool)`

GetAccountTypesOk returns a tuple with the AccountTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountTypes

`func (o *AccountTypesToBeChanged) SetAccountTypes(v []AccountTypeType)`

SetAccountTypes sets AccountTypes field to given value.

### HasAccountTypes

`func (o *AccountTypesToBeChanged) HasAccountTypes() bool`

HasAccountTypes returns a boolean if a field has been set.

### GetLinks

`func (o *AccountTypesToBeChanged) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *AccountTypesToBeChanged) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *AccountTypesToBeChanged) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *AccountTypesToBeChanged) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *AccountTypesToBeChanged) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *AccountTypesToBeChanged) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *AccountTypesToBeChanged) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *AccountTypesToBeChanged) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



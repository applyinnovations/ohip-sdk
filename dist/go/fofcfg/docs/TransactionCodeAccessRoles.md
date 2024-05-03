# TransactionCodeAccessRoles

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**TransactionAccessRoles** | Pointer to [**[]TrxCodeAccessRoleType**](TrxCodeAccessRoleType.md) | List of Roles having access to set of transaction codes | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewTransactionCodeAccessRoles

`func NewTransactionCodeAccessRoles() *TransactionCodeAccessRoles`

NewTransactionCodeAccessRoles instantiates a new TransactionCodeAccessRoles object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTransactionCodeAccessRolesWithDefaults

`func NewTransactionCodeAccessRolesWithDefaults() *TransactionCodeAccessRoles`

NewTransactionCodeAccessRolesWithDefaults instantiates a new TransactionCodeAccessRoles object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *TransactionCodeAccessRoles) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *TransactionCodeAccessRoles) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *TransactionCodeAccessRoles) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *TransactionCodeAccessRoles) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetTransactionAccessRoles

`func (o *TransactionCodeAccessRoles) GetTransactionAccessRoles() []TrxCodeAccessRoleType`

GetTransactionAccessRoles returns the TransactionAccessRoles field if non-nil, zero value otherwise.

### GetTransactionAccessRolesOk

`func (o *TransactionCodeAccessRoles) GetTransactionAccessRolesOk() (*[]TrxCodeAccessRoleType, bool)`

GetTransactionAccessRolesOk returns a tuple with the TransactionAccessRoles field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionAccessRoles

`func (o *TransactionCodeAccessRoles) SetTransactionAccessRoles(v []TrxCodeAccessRoleType)`

SetTransactionAccessRoles sets TransactionAccessRoles field to given value.

### HasTransactionAccessRoles

`func (o *TransactionCodeAccessRoles) HasTransactionAccessRoles() bool`

HasTransactionAccessRoles returns a boolean if a field has been set.

### GetWarnings

`func (o *TransactionCodeAccessRoles) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *TransactionCodeAccessRoles) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *TransactionCodeAccessRoles) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *TransactionCodeAccessRoles) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



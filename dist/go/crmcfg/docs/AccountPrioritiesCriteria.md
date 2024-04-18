# AccountPrioritiesCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccountPriorities** | Pointer to [**[]AccountPriorityType**](AccountPriorityType.md) | List of Account Priorities. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewAccountPrioritiesCriteria

`func NewAccountPrioritiesCriteria() *AccountPrioritiesCriteria`

NewAccountPrioritiesCriteria instantiates a new AccountPrioritiesCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccountPrioritiesCriteriaWithDefaults

`func NewAccountPrioritiesCriteriaWithDefaults() *AccountPrioritiesCriteria`

NewAccountPrioritiesCriteriaWithDefaults instantiates a new AccountPrioritiesCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccountPriorities

`func (o *AccountPrioritiesCriteria) GetAccountPriorities() []AccountPriorityType`

GetAccountPriorities returns the AccountPriorities field if non-nil, zero value otherwise.

### GetAccountPrioritiesOk

`func (o *AccountPrioritiesCriteria) GetAccountPrioritiesOk() (*[]AccountPriorityType, bool)`

GetAccountPrioritiesOk returns a tuple with the AccountPriorities field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountPriorities

`func (o *AccountPrioritiesCriteria) SetAccountPriorities(v []AccountPriorityType)`

SetAccountPriorities sets AccountPriorities field to given value.

### HasAccountPriorities

`func (o *AccountPrioritiesCriteria) HasAccountPriorities() bool`

HasAccountPriorities returns a boolean if a field has been set.

### GetLinks

`func (o *AccountPrioritiesCriteria) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *AccountPrioritiesCriteria) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *AccountPrioritiesCriteria) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *AccountPrioritiesCriteria) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *AccountPrioritiesCriteria) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *AccountPrioritiesCriteria) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *AccountPrioritiesCriteria) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *AccountPrioritiesCriteria) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


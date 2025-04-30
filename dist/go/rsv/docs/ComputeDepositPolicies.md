# ComputeDepositPolicies

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Criteria** | Pointer to [**DepositCancelConfigCriteriaType**](DepositCancelConfigCriteriaType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewComputeDepositPolicies

`func NewComputeDepositPolicies() *ComputeDepositPolicies`

NewComputeDepositPolicies instantiates a new ComputeDepositPolicies object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewComputeDepositPoliciesWithDefaults

`func NewComputeDepositPoliciesWithDefaults() *ComputeDepositPolicies`

NewComputeDepositPoliciesWithDefaults instantiates a new ComputeDepositPolicies object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCriteria

`func (o *ComputeDepositPolicies) GetCriteria() DepositCancelConfigCriteriaType`

GetCriteria returns the Criteria field if non-nil, zero value otherwise.

### GetCriteriaOk

`func (o *ComputeDepositPolicies) GetCriteriaOk() (*DepositCancelConfigCriteriaType, bool)`

GetCriteriaOk returns a tuple with the Criteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCriteria

`func (o *ComputeDepositPolicies) SetCriteria(v DepositCancelConfigCriteriaType)`

SetCriteria sets Criteria field to given value.

### HasCriteria

`func (o *ComputeDepositPolicies) HasCriteria() bool`

HasCriteria returns a boolean if a field has been set.

### GetLinks

`func (o *ComputeDepositPolicies) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ComputeDepositPolicies) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ComputeDepositPolicies) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ComputeDepositPolicies) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ComputeDepositPolicies) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ComputeDepositPolicies) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ComputeDepositPolicies) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ComputeDepositPolicies) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# DepositPolicyDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DepositPolicies** | Pointer to [**DepositPolicyDetailsDepositPolicies**](DepositPolicyDetailsDepositPolicies.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewDepositPolicyDetails

`func NewDepositPolicyDetails() *DepositPolicyDetails`

NewDepositPolicyDetails instantiates a new DepositPolicyDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDepositPolicyDetailsWithDefaults

`func NewDepositPolicyDetailsWithDefaults() *DepositPolicyDetails`

NewDepositPolicyDetailsWithDefaults instantiates a new DepositPolicyDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDepositPolicies

`func (o *DepositPolicyDetails) GetDepositPolicies() DepositPolicyDetailsDepositPolicies`

GetDepositPolicies returns the DepositPolicies field if non-nil, zero value otherwise.

### GetDepositPoliciesOk

`func (o *DepositPolicyDetails) GetDepositPoliciesOk() (*DepositPolicyDetailsDepositPolicies, bool)`

GetDepositPoliciesOk returns a tuple with the DepositPolicies field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDepositPolicies

`func (o *DepositPolicyDetails) SetDepositPolicies(v DepositPolicyDetailsDepositPolicies)`

SetDepositPolicies sets DepositPolicies field to given value.

### HasDepositPolicies

`func (o *DepositPolicyDetails) HasDepositPolicies() bool`

HasDepositPolicies returns a boolean if a field has been set.

### GetLinks

`func (o *DepositPolicyDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *DepositPolicyDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *DepositPolicyDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *DepositPolicyDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *DepositPolicyDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *DepositPolicyDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *DepositPolicyDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *DepositPolicyDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



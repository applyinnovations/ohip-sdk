# ComputeDepositPoliciesDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Policies** | Pointer to [**[]ResDepositPolicyType**](ResDepositPolicyType.md) | A list of deposit policies attached with the reservation. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewComputeDepositPoliciesDetails

`func NewComputeDepositPoliciesDetails() *ComputeDepositPoliciesDetails`

NewComputeDepositPoliciesDetails instantiates a new ComputeDepositPoliciesDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewComputeDepositPoliciesDetailsWithDefaults

`func NewComputeDepositPoliciesDetailsWithDefaults() *ComputeDepositPoliciesDetails`

NewComputeDepositPoliciesDetailsWithDefaults instantiates a new ComputeDepositPoliciesDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPolicies

`func (o *ComputeDepositPoliciesDetails) GetPolicies() []ResDepositPolicyType`

GetPolicies returns the Policies field if non-nil, zero value otherwise.

### GetPoliciesOk

`func (o *ComputeDepositPoliciesDetails) GetPoliciesOk() (*[]ResDepositPolicyType, bool)`

GetPoliciesOk returns a tuple with the Policies field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPolicies

`func (o *ComputeDepositPoliciesDetails) SetPolicies(v []ResDepositPolicyType)`

SetPolicies sets Policies field to given value.

### HasPolicies

`func (o *ComputeDepositPoliciesDetails) HasPolicies() bool`

HasPolicies returns a boolean if a field has been set.

### GetLinks

`func (o *ComputeDepositPoliciesDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ComputeDepositPoliciesDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ComputeDepositPoliciesDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ComputeDepositPoliciesDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ComputeDepositPoliciesDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ComputeDepositPoliciesDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ComputeDepositPoliciesDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ComputeDepositPoliciesDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



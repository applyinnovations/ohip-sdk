# ComputeCancellationPoliciesDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Policies** | Pointer to [**[]ResCancellationPolicyType**](ResCancellationPolicyType.md) | A list of reservation cancellation policies. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewComputeCancellationPoliciesDetails

`func NewComputeCancellationPoliciesDetails() *ComputeCancellationPoliciesDetails`

NewComputeCancellationPoliciesDetails instantiates a new ComputeCancellationPoliciesDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewComputeCancellationPoliciesDetailsWithDefaults

`func NewComputeCancellationPoliciesDetailsWithDefaults() *ComputeCancellationPoliciesDetails`

NewComputeCancellationPoliciesDetailsWithDefaults instantiates a new ComputeCancellationPoliciesDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPolicies

`func (o *ComputeCancellationPoliciesDetails) GetPolicies() []ResCancellationPolicyType`

GetPolicies returns the Policies field if non-nil, zero value otherwise.

### GetPoliciesOk

`func (o *ComputeCancellationPoliciesDetails) GetPoliciesOk() (*[]ResCancellationPolicyType, bool)`

GetPoliciesOk returns a tuple with the Policies field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPolicies

`func (o *ComputeCancellationPoliciesDetails) SetPolicies(v []ResCancellationPolicyType)`

SetPolicies sets Policies field to given value.

### HasPolicies

`func (o *ComputeCancellationPoliciesDetails) HasPolicies() bool`

HasPolicies returns a boolean if a field has been set.

### GetLinks

`func (o *ComputeCancellationPoliciesDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ComputeCancellationPoliciesDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ComputeCancellationPoliciesDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ComputeCancellationPoliciesDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ComputeCancellationPoliciesDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ComputeCancellationPoliciesDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ComputeCancellationPoliciesDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ComputeCancellationPoliciesDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



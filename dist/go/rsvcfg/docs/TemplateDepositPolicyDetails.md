# TemplateDepositPolicyDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**TemplateDepositPolicies** | Pointer to [**[]ConfigDepositPolicyType**](ConfigDepositPolicyType.md) | Collection of template Deposit policies. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewTemplateDepositPolicyDetails

`func NewTemplateDepositPolicyDetails() *TemplateDepositPolicyDetails`

NewTemplateDepositPolicyDetails instantiates a new TemplateDepositPolicyDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTemplateDepositPolicyDetailsWithDefaults

`func NewTemplateDepositPolicyDetailsWithDefaults() *TemplateDepositPolicyDetails`

NewTemplateDepositPolicyDetailsWithDefaults instantiates a new TemplateDepositPolicyDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *TemplateDepositPolicyDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *TemplateDepositPolicyDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *TemplateDepositPolicyDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *TemplateDepositPolicyDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetTemplateDepositPolicies

`func (o *TemplateDepositPolicyDetails) GetTemplateDepositPolicies() []ConfigDepositPolicyType`

GetTemplateDepositPolicies returns the TemplateDepositPolicies field if non-nil, zero value otherwise.

### GetTemplateDepositPoliciesOk

`func (o *TemplateDepositPolicyDetails) GetTemplateDepositPoliciesOk() (*[]ConfigDepositPolicyType, bool)`

GetTemplateDepositPoliciesOk returns a tuple with the TemplateDepositPolicies field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTemplateDepositPolicies

`func (o *TemplateDepositPolicyDetails) SetTemplateDepositPolicies(v []ConfigDepositPolicyType)`

SetTemplateDepositPolicies sets TemplateDepositPolicies field to given value.

### HasTemplateDepositPolicies

`func (o *TemplateDepositPolicyDetails) HasTemplateDepositPolicies() bool`

HasTemplateDepositPolicies returns a boolean if a field has been set.

### GetWarnings

`func (o *TemplateDepositPolicyDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *TemplateDepositPolicyDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *TemplateDepositPolicyDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *TemplateDepositPolicyDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# ContractBillingInstructionsCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ContractBillingInstructions** | Pointer to [**[]ContractBillingInstructionType**](ContractBillingInstructionType.md) | List of Contract Billing Instructions. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewContractBillingInstructionsCriteria

`func NewContractBillingInstructionsCriteria() *ContractBillingInstructionsCriteria`

NewContractBillingInstructionsCriteria instantiates a new ContractBillingInstructionsCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewContractBillingInstructionsCriteriaWithDefaults

`func NewContractBillingInstructionsCriteriaWithDefaults() *ContractBillingInstructionsCriteria`

NewContractBillingInstructionsCriteriaWithDefaults instantiates a new ContractBillingInstructionsCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetContractBillingInstructions

`func (o *ContractBillingInstructionsCriteria) GetContractBillingInstructions() []ContractBillingInstructionType`

GetContractBillingInstructions returns the ContractBillingInstructions field if non-nil, zero value otherwise.

### GetContractBillingInstructionsOk

`func (o *ContractBillingInstructionsCriteria) GetContractBillingInstructionsOk() (*[]ContractBillingInstructionType, bool)`

GetContractBillingInstructionsOk returns a tuple with the ContractBillingInstructions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContractBillingInstructions

`func (o *ContractBillingInstructionsCriteria) SetContractBillingInstructions(v []ContractBillingInstructionType)`

SetContractBillingInstructions sets ContractBillingInstructions field to given value.

### HasContractBillingInstructions

`func (o *ContractBillingInstructionsCriteria) HasContractBillingInstructions() bool`

HasContractBillingInstructions returns a boolean if a field has been set.

### GetLinks

`func (o *ContractBillingInstructionsCriteria) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ContractBillingInstructionsCriteria) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ContractBillingInstructionsCriteria) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ContractBillingInstructionsCriteria) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ContractBillingInstructionsCriteria) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ContractBillingInstructionsCriteria) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ContractBillingInstructionsCriteria) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ContractBillingInstructionsCriteria) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



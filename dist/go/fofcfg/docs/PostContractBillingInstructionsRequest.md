# PostContractBillingInstructionsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ContractBillingInstructions** | Pointer to [**[]ContractBillingInstructionType**](ContractBillingInstructionType.md) | List of Contract Billing Instructions. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPostContractBillingInstructionsRequest

`func NewPostContractBillingInstructionsRequest() *PostContractBillingInstructionsRequest`

NewPostContractBillingInstructionsRequest instantiates a new PostContractBillingInstructionsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostContractBillingInstructionsRequestWithDefaults

`func NewPostContractBillingInstructionsRequestWithDefaults() *PostContractBillingInstructionsRequest`

NewPostContractBillingInstructionsRequestWithDefaults instantiates a new PostContractBillingInstructionsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetContractBillingInstructions

`func (o *PostContractBillingInstructionsRequest) GetContractBillingInstructions() []ContractBillingInstructionType`

GetContractBillingInstructions returns the ContractBillingInstructions field if non-nil, zero value otherwise.

### GetContractBillingInstructionsOk

`func (o *PostContractBillingInstructionsRequest) GetContractBillingInstructionsOk() (*[]ContractBillingInstructionType, bool)`

GetContractBillingInstructionsOk returns a tuple with the ContractBillingInstructions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContractBillingInstructions

`func (o *PostContractBillingInstructionsRequest) SetContractBillingInstructions(v []ContractBillingInstructionType)`

SetContractBillingInstructions sets ContractBillingInstructions field to given value.

### HasContractBillingInstructions

`func (o *PostContractBillingInstructionsRequest) HasContractBillingInstructions() bool`

HasContractBillingInstructions returns a boolean if a field has been set.

### GetLinks

`func (o *PostContractBillingInstructionsRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostContractBillingInstructionsRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostContractBillingInstructionsRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostContractBillingInstructionsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PostContractBillingInstructionsRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostContractBillingInstructionsRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostContractBillingInstructionsRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostContractBillingInstructionsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



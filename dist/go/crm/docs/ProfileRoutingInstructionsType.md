# ProfileRoutingInstructionsType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TransactionCodes** | Pointer to [**[]TrxInfoType**](TrxInfoType.md) | List of Transaction codes info. | [optional] 
**BillingInstructions** | Pointer to [**[]BillingInstructionType**](BillingInstructionType.md) | Set of Billing Instruction codes. | [optional] 
**AutoPopulateRouting** | Pointer to **bool** | A flag which determines whether the instructions has to be automatically populated for this profile or not. | [optional] 

## Methods

### NewProfileRoutingInstructionsType

`func NewProfileRoutingInstructionsType() *ProfileRoutingInstructionsType`

NewProfileRoutingInstructionsType instantiates a new ProfileRoutingInstructionsType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProfileRoutingInstructionsTypeWithDefaults

`func NewProfileRoutingInstructionsTypeWithDefaults() *ProfileRoutingInstructionsType`

NewProfileRoutingInstructionsTypeWithDefaults instantiates a new ProfileRoutingInstructionsType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTransactionCodes

`func (o *ProfileRoutingInstructionsType) GetTransactionCodes() []TrxInfoType`

GetTransactionCodes returns the TransactionCodes field if non-nil, zero value otherwise.

### GetTransactionCodesOk

`func (o *ProfileRoutingInstructionsType) GetTransactionCodesOk() (*[]TrxInfoType, bool)`

GetTransactionCodesOk returns a tuple with the TransactionCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionCodes

`func (o *ProfileRoutingInstructionsType) SetTransactionCodes(v []TrxInfoType)`

SetTransactionCodes sets TransactionCodes field to given value.

### HasTransactionCodes

`func (o *ProfileRoutingInstructionsType) HasTransactionCodes() bool`

HasTransactionCodes returns a boolean if a field has been set.

### GetBillingInstructions

`func (o *ProfileRoutingInstructionsType) GetBillingInstructions() []BillingInstructionType`

GetBillingInstructions returns the BillingInstructions field if non-nil, zero value otherwise.

### GetBillingInstructionsOk

`func (o *ProfileRoutingInstructionsType) GetBillingInstructionsOk() (*[]BillingInstructionType, bool)`

GetBillingInstructionsOk returns a tuple with the BillingInstructions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBillingInstructions

`func (o *ProfileRoutingInstructionsType) SetBillingInstructions(v []BillingInstructionType)`

SetBillingInstructions sets BillingInstructions field to given value.

### HasBillingInstructions

`func (o *ProfileRoutingInstructionsType) HasBillingInstructions() bool`

HasBillingInstructions returns a boolean if a field has been set.

### GetAutoPopulateRouting

`func (o *ProfileRoutingInstructionsType) GetAutoPopulateRouting() bool`

GetAutoPopulateRouting returns the AutoPopulateRouting field if non-nil, zero value otherwise.

### GetAutoPopulateRoutingOk

`func (o *ProfileRoutingInstructionsType) GetAutoPopulateRoutingOk() (*bool, bool)`

GetAutoPopulateRoutingOk returns a tuple with the AutoPopulateRouting field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAutoPopulateRouting

`func (o *ProfileRoutingInstructionsType) SetAutoPopulateRouting(v bool)`

SetAutoPopulateRouting sets AutoPopulateRouting field to given value.

### HasAutoPopulateRouting

`func (o *ProfileRoutingInstructionsType) HasAutoPopulateRouting() bool`

HasAutoPopulateRouting returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



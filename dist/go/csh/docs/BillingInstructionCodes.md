# BillingInstructionCodes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TransactionCodes** | Pointer to [**[]TrxInfoType**](TrxInfoType.md) | List of Transaction codes info. | [optional] 
**BillingInstructions** | Pointer to [**[]BillingInstructionType**](BillingInstructionType.md) | Set of Billing Instruction codes. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewBillingInstructionCodes

`func NewBillingInstructionCodes() *BillingInstructionCodes`

NewBillingInstructionCodes instantiates a new BillingInstructionCodes object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBillingInstructionCodesWithDefaults

`func NewBillingInstructionCodesWithDefaults() *BillingInstructionCodes`

NewBillingInstructionCodesWithDefaults instantiates a new BillingInstructionCodes object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTransactionCodes

`func (o *BillingInstructionCodes) GetTransactionCodes() []TrxInfoType`

GetTransactionCodes returns the TransactionCodes field if non-nil, zero value otherwise.

### GetTransactionCodesOk

`func (o *BillingInstructionCodes) GetTransactionCodesOk() (*[]TrxInfoType, bool)`

GetTransactionCodesOk returns a tuple with the TransactionCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionCodes

`func (o *BillingInstructionCodes) SetTransactionCodes(v []TrxInfoType)`

SetTransactionCodes sets TransactionCodes field to given value.

### HasTransactionCodes

`func (o *BillingInstructionCodes) HasTransactionCodes() bool`

HasTransactionCodes returns a boolean if a field has been set.

### GetBillingInstructions

`func (o *BillingInstructionCodes) GetBillingInstructions() []BillingInstructionType`

GetBillingInstructions returns the BillingInstructions field if non-nil, zero value otherwise.

### GetBillingInstructionsOk

`func (o *BillingInstructionCodes) GetBillingInstructionsOk() (*[]BillingInstructionType, bool)`

GetBillingInstructionsOk returns a tuple with the BillingInstructions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBillingInstructions

`func (o *BillingInstructionCodes) SetBillingInstructions(v []BillingInstructionType)`

SetBillingInstructions sets BillingInstructions field to given value.

### HasBillingInstructions

`func (o *BillingInstructionCodes) HasBillingInstructions() bool`

HasBillingInstructions returns a boolean if a field has been set.

### GetLinks

`func (o *BillingInstructionCodes) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *BillingInstructionCodes) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *BillingInstructionCodes) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *BillingInstructionCodes) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *BillingInstructionCodes) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *BillingInstructionCodes) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *BillingInstructionCodes) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *BillingInstructionCodes) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



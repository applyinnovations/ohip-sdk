# RatePlanRoutingInstructionsType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BillingInstructions** | Pointer to [**[]BillingInstructionType**](BillingInstructionType.md) | Set of Billing Instruction codes. | [optional] 
**ProfileType** | Pointer to [**RoutingProfileTypeType**](RoutingProfileTypeType.md) |  | [optional] 
**TransactionCodes** | Pointer to [**[]TrxInfoType**](TrxInfoType.md) | List of Transaction codes info. | [optional] 

## Methods

### NewRatePlanRoutingInstructionsType

`func NewRatePlanRoutingInstructionsType() *RatePlanRoutingInstructionsType`

NewRatePlanRoutingInstructionsType instantiates a new RatePlanRoutingInstructionsType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRatePlanRoutingInstructionsTypeWithDefaults

`func NewRatePlanRoutingInstructionsTypeWithDefaults() *RatePlanRoutingInstructionsType`

NewRatePlanRoutingInstructionsTypeWithDefaults instantiates a new RatePlanRoutingInstructionsType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBillingInstructions

`func (o *RatePlanRoutingInstructionsType) GetBillingInstructions() []BillingInstructionType`

GetBillingInstructions returns the BillingInstructions field if non-nil, zero value otherwise.

### GetBillingInstructionsOk

`func (o *RatePlanRoutingInstructionsType) GetBillingInstructionsOk() (*[]BillingInstructionType, bool)`

GetBillingInstructionsOk returns a tuple with the BillingInstructions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBillingInstructions

`func (o *RatePlanRoutingInstructionsType) SetBillingInstructions(v []BillingInstructionType)`

SetBillingInstructions sets BillingInstructions field to given value.

### HasBillingInstructions

`func (o *RatePlanRoutingInstructionsType) HasBillingInstructions() bool`

HasBillingInstructions returns a boolean if a field has been set.

### GetProfileType

`func (o *RatePlanRoutingInstructionsType) GetProfileType() RoutingProfileTypeType`

GetProfileType returns the ProfileType field if non-nil, zero value otherwise.

### GetProfileTypeOk

`func (o *RatePlanRoutingInstructionsType) GetProfileTypeOk() (*RoutingProfileTypeType, bool)`

GetProfileTypeOk returns a tuple with the ProfileType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileType

`func (o *RatePlanRoutingInstructionsType) SetProfileType(v RoutingProfileTypeType)`

SetProfileType sets ProfileType field to given value.

### HasProfileType

`func (o *RatePlanRoutingInstructionsType) HasProfileType() bool`

HasProfileType returns a boolean if a field has been set.

### GetTransactionCodes

`func (o *RatePlanRoutingInstructionsType) GetTransactionCodes() []TrxInfoType`

GetTransactionCodes returns the TransactionCodes field if non-nil, zero value otherwise.

### GetTransactionCodesOk

`func (o *RatePlanRoutingInstructionsType) GetTransactionCodesOk() (*[]TrxInfoType, bool)`

GetTransactionCodesOk returns a tuple with the TransactionCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionCodes

`func (o *RatePlanRoutingInstructionsType) SetTransactionCodes(v []TrxInfoType)`

SetTransactionCodes sets TransactionCodes field to given value.

### HasTransactionCodes

`func (o *RatePlanRoutingInstructionsType) HasTransactionCodes() bool`

HasTransactionCodes returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



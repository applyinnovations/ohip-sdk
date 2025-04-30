# MassUpdateRoutingInstructionType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Duration** | Pointer to [**MassUpdateRoutingInstructionTypeDuration**](MassUpdateRoutingInstructionTypeDuration.md) |  | [optional] 
**TransactionCodes** | Pointer to [**[]MassUpdateTrxInfoType**](MassUpdateTrxInfoType.md) | Set of Transaction Codes configured in this time span. | [optional] 
**BillingInstructions** | Pointer to [**[]MassUpdateBillingInstructionType**](MassUpdateBillingInstructionType.md) | Set of Billing Instructions configured in this time span. | [optional] 
**CreditLimit** | Pointer to **float32** | Allowable credit amount for this routing instruction. Null value means no limit, 0 equals zero. | [optional] 
**PercentageLimit** | Pointer to **float32** | The routing limit percentage allowed for this routing instruction. | [optional] 
**Covers** | Pointer to **float32** | Number of covers for this routing instruction. | [optional] 
**LimitUsed** | Pointer to **float32** | Amount of Credit used for this routing instruction. | [optional] 

## Methods

### NewMassUpdateRoutingInstructionType

`func NewMassUpdateRoutingInstructionType() *MassUpdateRoutingInstructionType`

NewMassUpdateRoutingInstructionType instantiates a new MassUpdateRoutingInstructionType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMassUpdateRoutingInstructionTypeWithDefaults

`func NewMassUpdateRoutingInstructionTypeWithDefaults() *MassUpdateRoutingInstructionType`

NewMassUpdateRoutingInstructionTypeWithDefaults instantiates a new MassUpdateRoutingInstructionType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDuration

`func (o *MassUpdateRoutingInstructionType) GetDuration() MassUpdateRoutingInstructionTypeDuration`

GetDuration returns the Duration field if non-nil, zero value otherwise.

### GetDurationOk

`func (o *MassUpdateRoutingInstructionType) GetDurationOk() (*MassUpdateRoutingInstructionTypeDuration, bool)`

GetDurationOk returns a tuple with the Duration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDuration

`func (o *MassUpdateRoutingInstructionType) SetDuration(v MassUpdateRoutingInstructionTypeDuration)`

SetDuration sets Duration field to given value.

### HasDuration

`func (o *MassUpdateRoutingInstructionType) HasDuration() bool`

HasDuration returns a boolean if a field has been set.

### GetTransactionCodes

`func (o *MassUpdateRoutingInstructionType) GetTransactionCodes() []MassUpdateTrxInfoType`

GetTransactionCodes returns the TransactionCodes field if non-nil, zero value otherwise.

### GetTransactionCodesOk

`func (o *MassUpdateRoutingInstructionType) GetTransactionCodesOk() (*[]MassUpdateTrxInfoType, bool)`

GetTransactionCodesOk returns a tuple with the TransactionCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionCodes

`func (o *MassUpdateRoutingInstructionType) SetTransactionCodes(v []MassUpdateTrxInfoType)`

SetTransactionCodes sets TransactionCodes field to given value.

### HasTransactionCodes

`func (o *MassUpdateRoutingInstructionType) HasTransactionCodes() bool`

HasTransactionCodes returns a boolean if a field has been set.

### GetBillingInstructions

`func (o *MassUpdateRoutingInstructionType) GetBillingInstructions() []MassUpdateBillingInstructionType`

GetBillingInstructions returns the BillingInstructions field if non-nil, zero value otherwise.

### GetBillingInstructionsOk

`func (o *MassUpdateRoutingInstructionType) GetBillingInstructionsOk() (*[]MassUpdateBillingInstructionType, bool)`

GetBillingInstructionsOk returns a tuple with the BillingInstructions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBillingInstructions

`func (o *MassUpdateRoutingInstructionType) SetBillingInstructions(v []MassUpdateBillingInstructionType)`

SetBillingInstructions sets BillingInstructions field to given value.

### HasBillingInstructions

`func (o *MassUpdateRoutingInstructionType) HasBillingInstructions() bool`

HasBillingInstructions returns a boolean if a field has been set.

### GetCreditLimit

`func (o *MassUpdateRoutingInstructionType) GetCreditLimit() float32`

GetCreditLimit returns the CreditLimit field if non-nil, zero value otherwise.

### GetCreditLimitOk

`func (o *MassUpdateRoutingInstructionType) GetCreditLimitOk() (*float32, bool)`

GetCreditLimitOk returns a tuple with the CreditLimit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreditLimit

`func (o *MassUpdateRoutingInstructionType) SetCreditLimit(v float32)`

SetCreditLimit sets CreditLimit field to given value.

### HasCreditLimit

`func (o *MassUpdateRoutingInstructionType) HasCreditLimit() bool`

HasCreditLimit returns a boolean if a field has been set.

### GetPercentageLimit

`func (o *MassUpdateRoutingInstructionType) GetPercentageLimit() float32`

GetPercentageLimit returns the PercentageLimit field if non-nil, zero value otherwise.

### GetPercentageLimitOk

`func (o *MassUpdateRoutingInstructionType) GetPercentageLimitOk() (*float32, bool)`

GetPercentageLimitOk returns a tuple with the PercentageLimit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPercentageLimit

`func (o *MassUpdateRoutingInstructionType) SetPercentageLimit(v float32)`

SetPercentageLimit sets PercentageLimit field to given value.

### HasPercentageLimit

`func (o *MassUpdateRoutingInstructionType) HasPercentageLimit() bool`

HasPercentageLimit returns a boolean if a field has been set.

### GetCovers

`func (o *MassUpdateRoutingInstructionType) GetCovers() float32`

GetCovers returns the Covers field if non-nil, zero value otherwise.

### GetCoversOk

`func (o *MassUpdateRoutingInstructionType) GetCoversOk() (*float32, bool)`

GetCoversOk returns a tuple with the Covers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCovers

`func (o *MassUpdateRoutingInstructionType) SetCovers(v float32)`

SetCovers sets Covers field to given value.

### HasCovers

`func (o *MassUpdateRoutingInstructionType) HasCovers() bool`

HasCovers returns a boolean if a field has been set.

### GetLimitUsed

`func (o *MassUpdateRoutingInstructionType) GetLimitUsed() float32`

GetLimitUsed returns the LimitUsed field if non-nil, zero value otherwise.

### GetLimitUsedOk

`func (o *MassUpdateRoutingInstructionType) GetLimitUsedOk() (*float32, bool)`

GetLimitUsedOk returns a tuple with the LimitUsed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLimitUsed

`func (o *MassUpdateRoutingInstructionType) SetLimitUsed(v float32)`

SetLimitUsed sets LimitUsed field to given value.

### HasLimitUsed

`func (o *MassUpdateRoutingInstructionType) HasLimitUsed() bool`

HasLimitUsed returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



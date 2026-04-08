# RoutingInstructionType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Duration** | Pointer to [**RoutingInstructionTypeDuration**](RoutingInstructionTypeDuration.md) |  | [optional] 
**TransactionCodes** | Pointer to [**[]TrxInfoType**](TrxInfoType.md) | List of Transaction codes info. | [optional] 
**BillingInstructions** | Pointer to [**[]BillingInstructionType**](BillingInstructionType.md) | Set of Billing Instruction codes. | [optional] 
**CreditLimit** | Pointer to **float32** | Allowable credit amount for this routing instruction. Null value means no limit, 0 equals zero. | [optional] 
**PercentageLimit** | Pointer to **float32** | The routing limit percentage allowed for this routing instruction. | [optional] 
**Covers** | Pointer to **float32** | Number of covers for this routing instruction. | [optional] 
**LimitUsed** | Pointer to **float32** | Amount of Credit used for this routing instruction. | [optional] 
**RoutingLinkId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 

## Methods

### NewRoutingInstructionType

`func NewRoutingInstructionType() *RoutingInstructionType`

NewRoutingInstructionType instantiates a new RoutingInstructionType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoutingInstructionTypeWithDefaults

`func NewRoutingInstructionTypeWithDefaults() *RoutingInstructionType`

NewRoutingInstructionTypeWithDefaults instantiates a new RoutingInstructionType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDuration

`func (o *RoutingInstructionType) GetDuration() RoutingInstructionTypeDuration`

GetDuration returns the Duration field if non-nil, zero value otherwise.

### GetDurationOk

`func (o *RoutingInstructionType) GetDurationOk() (*RoutingInstructionTypeDuration, bool)`

GetDurationOk returns a tuple with the Duration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDuration

`func (o *RoutingInstructionType) SetDuration(v RoutingInstructionTypeDuration)`

SetDuration sets Duration field to given value.

### HasDuration

`func (o *RoutingInstructionType) HasDuration() bool`

HasDuration returns a boolean if a field has been set.

### GetTransactionCodes

`func (o *RoutingInstructionType) GetTransactionCodes() []TrxInfoType`

GetTransactionCodes returns the TransactionCodes field if non-nil, zero value otherwise.

### GetTransactionCodesOk

`func (o *RoutingInstructionType) GetTransactionCodesOk() (*[]TrxInfoType, bool)`

GetTransactionCodesOk returns a tuple with the TransactionCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionCodes

`func (o *RoutingInstructionType) SetTransactionCodes(v []TrxInfoType)`

SetTransactionCodes sets TransactionCodes field to given value.

### HasTransactionCodes

`func (o *RoutingInstructionType) HasTransactionCodes() bool`

HasTransactionCodes returns a boolean if a field has been set.

### GetBillingInstructions

`func (o *RoutingInstructionType) GetBillingInstructions() []BillingInstructionType`

GetBillingInstructions returns the BillingInstructions field if non-nil, zero value otherwise.

### GetBillingInstructionsOk

`func (o *RoutingInstructionType) GetBillingInstructionsOk() (*[]BillingInstructionType, bool)`

GetBillingInstructionsOk returns a tuple with the BillingInstructions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBillingInstructions

`func (o *RoutingInstructionType) SetBillingInstructions(v []BillingInstructionType)`

SetBillingInstructions sets BillingInstructions field to given value.

### HasBillingInstructions

`func (o *RoutingInstructionType) HasBillingInstructions() bool`

HasBillingInstructions returns a boolean if a field has been set.

### GetCreditLimit

`func (o *RoutingInstructionType) GetCreditLimit() float32`

GetCreditLimit returns the CreditLimit field if non-nil, zero value otherwise.

### GetCreditLimitOk

`func (o *RoutingInstructionType) GetCreditLimitOk() (*float32, bool)`

GetCreditLimitOk returns a tuple with the CreditLimit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreditLimit

`func (o *RoutingInstructionType) SetCreditLimit(v float32)`

SetCreditLimit sets CreditLimit field to given value.

### HasCreditLimit

`func (o *RoutingInstructionType) HasCreditLimit() bool`

HasCreditLimit returns a boolean if a field has been set.

### GetPercentageLimit

`func (o *RoutingInstructionType) GetPercentageLimit() float32`

GetPercentageLimit returns the PercentageLimit field if non-nil, zero value otherwise.

### GetPercentageLimitOk

`func (o *RoutingInstructionType) GetPercentageLimitOk() (*float32, bool)`

GetPercentageLimitOk returns a tuple with the PercentageLimit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPercentageLimit

`func (o *RoutingInstructionType) SetPercentageLimit(v float32)`

SetPercentageLimit sets PercentageLimit field to given value.

### HasPercentageLimit

`func (o *RoutingInstructionType) HasPercentageLimit() bool`

HasPercentageLimit returns a boolean if a field has been set.

### GetCovers

`func (o *RoutingInstructionType) GetCovers() float32`

GetCovers returns the Covers field if non-nil, zero value otherwise.

### GetCoversOk

`func (o *RoutingInstructionType) GetCoversOk() (*float32, bool)`

GetCoversOk returns a tuple with the Covers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCovers

`func (o *RoutingInstructionType) SetCovers(v float32)`

SetCovers sets Covers field to given value.

### HasCovers

`func (o *RoutingInstructionType) HasCovers() bool`

HasCovers returns a boolean if a field has been set.

### GetLimitUsed

`func (o *RoutingInstructionType) GetLimitUsed() float32`

GetLimitUsed returns the LimitUsed field if non-nil, zero value otherwise.

### GetLimitUsedOk

`func (o *RoutingInstructionType) GetLimitUsedOk() (*float32, bool)`

GetLimitUsedOk returns a tuple with the LimitUsed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLimitUsed

`func (o *RoutingInstructionType) SetLimitUsed(v float32)`

SetLimitUsed sets LimitUsed field to given value.

### HasLimitUsed

`func (o *RoutingInstructionType) HasLimitUsed() bool`

HasLimitUsed returns a boolean if a field has been set.

### GetRoutingLinkId

`func (o *RoutingInstructionType) GetRoutingLinkId() UniqueIDType`

GetRoutingLinkId returns the RoutingLinkId field if non-nil, zero value otherwise.

### GetRoutingLinkIdOk

`func (o *RoutingInstructionType) GetRoutingLinkIdOk() (*UniqueIDType, bool)`

GetRoutingLinkIdOk returns a tuple with the RoutingLinkId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoutingLinkId

`func (o *RoutingInstructionType) SetRoutingLinkId(v UniqueIDType)`

SetRoutingLinkId sets RoutingLinkId field to given value.

### HasRoutingLinkId

`func (o *RoutingInstructionType) HasRoutingLinkId() bool`

HasRoutingLinkId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



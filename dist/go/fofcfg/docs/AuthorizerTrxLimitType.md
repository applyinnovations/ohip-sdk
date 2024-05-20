# AuthorizerTrxLimitType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BillingInstructions** | Pointer to [**[]CodeDescriptionType**](CodeDescriptionType.md) | Set of Billing Instruction codes. | [optional] 
**CreditLimit** | Pointer to **float32** | Credit Limit for a transaction. | [optional] 
**GroupHeaderId** | Pointer to **float32** | Group Header Id for a transaction row. | [optional] 
**OccurrenceLimit** | Pointer to **float32** | Occurrence Limit for a transaction. | [optional] 
**TransactionCodes** | Pointer to [**[]CodeDescriptionType**](CodeDescriptionType.md) | List of Transaction codes info. | [optional] 

## Methods

### NewAuthorizerTrxLimitType

`func NewAuthorizerTrxLimitType() *AuthorizerTrxLimitType`

NewAuthorizerTrxLimitType instantiates a new AuthorizerTrxLimitType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAuthorizerTrxLimitTypeWithDefaults

`func NewAuthorizerTrxLimitTypeWithDefaults() *AuthorizerTrxLimitType`

NewAuthorizerTrxLimitTypeWithDefaults instantiates a new AuthorizerTrxLimitType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBillingInstructions

`func (o *AuthorizerTrxLimitType) GetBillingInstructions() []CodeDescriptionType`

GetBillingInstructions returns the BillingInstructions field if non-nil, zero value otherwise.

### GetBillingInstructionsOk

`func (o *AuthorizerTrxLimitType) GetBillingInstructionsOk() (*[]CodeDescriptionType, bool)`

GetBillingInstructionsOk returns a tuple with the BillingInstructions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBillingInstructions

`func (o *AuthorizerTrxLimitType) SetBillingInstructions(v []CodeDescriptionType)`

SetBillingInstructions sets BillingInstructions field to given value.

### HasBillingInstructions

`func (o *AuthorizerTrxLimitType) HasBillingInstructions() bool`

HasBillingInstructions returns a boolean if a field has been set.

### GetCreditLimit

`func (o *AuthorizerTrxLimitType) GetCreditLimit() float32`

GetCreditLimit returns the CreditLimit field if non-nil, zero value otherwise.

### GetCreditLimitOk

`func (o *AuthorizerTrxLimitType) GetCreditLimitOk() (*float32, bool)`

GetCreditLimitOk returns a tuple with the CreditLimit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreditLimit

`func (o *AuthorizerTrxLimitType) SetCreditLimit(v float32)`

SetCreditLimit sets CreditLimit field to given value.

### HasCreditLimit

`func (o *AuthorizerTrxLimitType) HasCreditLimit() bool`

HasCreditLimit returns a boolean if a field has been set.

### GetGroupHeaderId

`func (o *AuthorizerTrxLimitType) GetGroupHeaderId() float32`

GetGroupHeaderId returns the GroupHeaderId field if non-nil, zero value otherwise.

### GetGroupHeaderIdOk

`func (o *AuthorizerTrxLimitType) GetGroupHeaderIdOk() (*float32, bool)`

GetGroupHeaderIdOk returns a tuple with the GroupHeaderId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGroupHeaderId

`func (o *AuthorizerTrxLimitType) SetGroupHeaderId(v float32)`

SetGroupHeaderId sets GroupHeaderId field to given value.

### HasGroupHeaderId

`func (o *AuthorizerTrxLimitType) HasGroupHeaderId() bool`

HasGroupHeaderId returns a boolean if a field has been set.

### GetOccurrenceLimit

`func (o *AuthorizerTrxLimitType) GetOccurrenceLimit() float32`

GetOccurrenceLimit returns the OccurrenceLimit field if non-nil, zero value otherwise.

### GetOccurrenceLimitOk

`func (o *AuthorizerTrxLimitType) GetOccurrenceLimitOk() (*float32, bool)`

GetOccurrenceLimitOk returns a tuple with the OccurrenceLimit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOccurrenceLimit

`func (o *AuthorizerTrxLimitType) SetOccurrenceLimit(v float32)`

SetOccurrenceLimit sets OccurrenceLimit field to given value.

### HasOccurrenceLimit

`func (o *AuthorizerTrxLimitType) HasOccurrenceLimit() bool`

HasOccurrenceLimit returns a boolean if a field has been set.

### GetTransactionCodes

`func (o *AuthorizerTrxLimitType) GetTransactionCodes() []CodeDescriptionType`

GetTransactionCodes returns the TransactionCodes field if non-nil, zero value otherwise.

### GetTransactionCodesOk

`func (o *AuthorizerTrxLimitType) GetTransactionCodesOk() (*[]CodeDescriptionType, bool)`

GetTransactionCodesOk returns a tuple with the TransactionCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionCodes

`func (o *AuthorizerTrxLimitType) SetTransactionCodes(v []CodeDescriptionType)`

SetTransactionCodes sets TransactionCodes field to given value.

### HasTransactionCodes

`func (o *AuthorizerTrxLimitType) HasTransactionCodes() bool`

HasTransactionCodes returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



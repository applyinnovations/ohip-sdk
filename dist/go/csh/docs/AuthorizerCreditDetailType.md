# AuthorizerCreditDetailType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CreditLimit** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**ActualAmount** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**BillingInstruction** | Pointer to **string** | Indicates the Routing Instructions for which Authorization was done. | [optional] 

## Methods

### NewAuthorizerCreditDetailType

`func NewAuthorizerCreditDetailType() *AuthorizerCreditDetailType`

NewAuthorizerCreditDetailType instantiates a new AuthorizerCreditDetailType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAuthorizerCreditDetailTypeWithDefaults

`func NewAuthorizerCreditDetailTypeWithDefaults() *AuthorizerCreditDetailType`

NewAuthorizerCreditDetailTypeWithDefaults instantiates a new AuthorizerCreditDetailType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCreditLimit

`func (o *AuthorizerCreditDetailType) GetCreditLimit() CurrencyAmountType`

GetCreditLimit returns the CreditLimit field if non-nil, zero value otherwise.

### GetCreditLimitOk

`func (o *AuthorizerCreditDetailType) GetCreditLimitOk() (*CurrencyAmountType, bool)`

GetCreditLimitOk returns a tuple with the CreditLimit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreditLimit

`func (o *AuthorizerCreditDetailType) SetCreditLimit(v CurrencyAmountType)`

SetCreditLimit sets CreditLimit field to given value.

### HasCreditLimit

`func (o *AuthorizerCreditDetailType) HasCreditLimit() bool`

HasCreditLimit returns a boolean if a field has been set.

### GetActualAmount

`func (o *AuthorizerCreditDetailType) GetActualAmount() CurrencyAmountType`

GetActualAmount returns the ActualAmount field if non-nil, zero value otherwise.

### GetActualAmountOk

`func (o *AuthorizerCreditDetailType) GetActualAmountOk() (*CurrencyAmountType, bool)`

GetActualAmountOk returns a tuple with the ActualAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActualAmount

`func (o *AuthorizerCreditDetailType) SetActualAmount(v CurrencyAmountType)`

SetActualAmount sets ActualAmount field to given value.

### HasActualAmount

`func (o *AuthorizerCreditDetailType) HasActualAmount() bool`

HasActualAmount returns a boolean if a field has been set.

### GetBillingInstruction

`func (o *AuthorizerCreditDetailType) GetBillingInstruction() string`

GetBillingInstruction returns the BillingInstruction field if non-nil, zero value otherwise.

### GetBillingInstructionOk

`func (o *AuthorizerCreditDetailType) GetBillingInstructionOk() (*string, bool)`

GetBillingInstructionOk returns a tuple with the BillingInstruction field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBillingInstruction

`func (o *AuthorizerCreditDetailType) SetBillingInstruction(v string)`

SetBillingInstruction sets BillingInstruction field to given value.

### HasBillingInstruction

`func (o *AuthorizerCreditDetailType) HasBillingInstruction() bool`

HasBillingInstruction returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



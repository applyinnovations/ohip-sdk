# PaymentCardType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CardUsageRules** | Pointer to [**CardUsageRulesType**](CardUsageRulesType.md) |  | [optional] 
**Validation** | Pointer to [**PaymentMethodValidationRuleType**](PaymentMethodValidationRuleType.md) |  | [optional] 
**MerchantNumber** | Pointer to **string** | The merchant number to use when settling or transmitting credit card information. | [optional] 
**Option** | Pointer to [**CardOptionType**](CardOptionType.md) |  | [optional] 
**CardType** | Pointer to [**CardTypeType**](CardTypeType.md) |  | [optional] 
**UserDefinedCardType** | Pointer to **string** | User defined credit card type if credit card type from a defined list is not provided. | [optional] 
**Processing** | Pointer to [**CardProcessingType**](CardProcessingType.md) |  | [optional] 

## Methods

### NewPaymentCardType

`func NewPaymentCardType() *PaymentCardType`

NewPaymentCardType instantiates a new PaymentCardType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPaymentCardTypeWithDefaults

`func NewPaymentCardTypeWithDefaults() *PaymentCardType`

NewPaymentCardTypeWithDefaults instantiates a new PaymentCardType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCardUsageRules

`func (o *PaymentCardType) GetCardUsageRules() CardUsageRulesType`

GetCardUsageRules returns the CardUsageRules field if non-nil, zero value otherwise.

### GetCardUsageRulesOk

`func (o *PaymentCardType) GetCardUsageRulesOk() (*CardUsageRulesType, bool)`

GetCardUsageRulesOk returns a tuple with the CardUsageRules field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCardUsageRules

`func (o *PaymentCardType) SetCardUsageRules(v CardUsageRulesType)`

SetCardUsageRules sets CardUsageRules field to given value.

### HasCardUsageRules

`func (o *PaymentCardType) HasCardUsageRules() bool`

HasCardUsageRules returns a boolean if a field has been set.

### GetValidation

`func (o *PaymentCardType) GetValidation() PaymentMethodValidationRuleType`

GetValidation returns the Validation field if non-nil, zero value otherwise.

### GetValidationOk

`func (o *PaymentCardType) GetValidationOk() (*PaymentMethodValidationRuleType, bool)`

GetValidationOk returns a tuple with the Validation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValidation

`func (o *PaymentCardType) SetValidation(v PaymentMethodValidationRuleType)`

SetValidation sets Validation field to given value.

### HasValidation

`func (o *PaymentCardType) HasValidation() bool`

HasValidation returns a boolean if a field has been set.

### GetMerchantNumber

`func (o *PaymentCardType) GetMerchantNumber() string`

GetMerchantNumber returns the MerchantNumber field if non-nil, zero value otherwise.

### GetMerchantNumberOk

`func (o *PaymentCardType) GetMerchantNumberOk() (*string, bool)`

GetMerchantNumberOk returns a tuple with the MerchantNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMerchantNumber

`func (o *PaymentCardType) SetMerchantNumber(v string)`

SetMerchantNumber sets MerchantNumber field to given value.

### HasMerchantNumber

`func (o *PaymentCardType) HasMerchantNumber() bool`

HasMerchantNumber returns a boolean if a field has been set.

### GetOption

`func (o *PaymentCardType) GetOption() CardOptionType`

GetOption returns the Option field if non-nil, zero value otherwise.

### GetOptionOk

`func (o *PaymentCardType) GetOptionOk() (*CardOptionType, bool)`

GetOptionOk returns a tuple with the Option field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOption

`func (o *PaymentCardType) SetOption(v CardOptionType)`

SetOption sets Option field to given value.

### HasOption

`func (o *PaymentCardType) HasOption() bool`

HasOption returns a boolean if a field has been set.

### GetCardType

`func (o *PaymentCardType) GetCardType() CardTypeType`

GetCardType returns the CardType field if non-nil, zero value otherwise.

### GetCardTypeOk

`func (o *PaymentCardType) GetCardTypeOk() (*CardTypeType, bool)`

GetCardTypeOk returns a tuple with the CardType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCardType

`func (o *PaymentCardType) SetCardType(v CardTypeType)`

SetCardType sets CardType field to given value.

### HasCardType

`func (o *PaymentCardType) HasCardType() bool`

HasCardType returns a boolean if a field has been set.

### GetUserDefinedCardType

`func (o *PaymentCardType) GetUserDefinedCardType() string`

GetUserDefinedCardType returns the UserDefinedCardType field if non-nil, zero value otherwise.

### GetUserDefinedCardTypeOk

`func (o *PaymentCardType) GetUserDefinedCardTypeOk() (*string, bool)`

GetUserDefinedCardTypeOk returns a tuple with the UserDefinedCardType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserDefinedCardType

`func (o *PaymentCardType) SetUserDefinedCardType(v string)`

SetUserDefinedCardType sets UserDefinedCardType field to given value.

### HasUserDefinedCardType

`func (o *PaymentCardType) HasUserDefinedCardType() bool`

HasUserDefinedCardType returns a boolean if a field has been set.

### GetProcessing

`func (o *PaymentCardType) GetProcessing() CardProcessingType`

GetProcessing returns the Processing field if non-nil, zero value otherwise.

### GetProcessingOk

`func (o *PaymentCardType) GetProcessingOk() (*CardProcessingType, bool)`

GetProcessingOk returns a tuple with the Processing field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProcessing

`func (o *PaymentCardType) SetProcessing(v CardProcessingType)`

SetProcessing sets Processing field to given value.

### HasProcessing

`func (o *PaymentCardType) HasProcessing() bool`

HasProcessing returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



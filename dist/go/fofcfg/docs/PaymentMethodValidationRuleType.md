# PaymentMethodValidationRuleType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Length** | Pointer to **string** | Valid lengths of card number. | [optional] 
**Prefix** | Pointer to **string** | Valid card number prefix. | [optional] 
**Ranges** | Pointer to [**[]CardRangeType**](CardRangeType.md) | Card number start and end range. | [optional] 
**Formula** | Pointer to **string** | Formula used for card validation. Only valid in case of user defined validation. | [optional] 
**Rule** | Pointer to [**CardValidationRuleTypeType**](CardValidationRuleTypeType.md) |  | [optional] 

## Methods

### NewPaymentMethodValidationRuleType

`func NewPaymentMethodValidationRuleType() *PaymentMethodValidationRuleType`

NewPaymentMethodValidationRuleType instantiates a new PaymentMethodValidationRuleType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPaymentMethodValidationRuleTypeWithDefaults

`func NewPaymentMethodValidationRuleTypeWithDefaults() *PaymentMethodValidationRuleType`

NewPaymentMethodValidationRuleTypeWithDefaults instantiates a new PaymentMethodValidationRuleType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLength

`func (o *PaymentMethodValidationRuleType) GetLength() string`

GetLength returns the Length field if non-nil, zero value otherwise.

### GetLengthOk

`func (o *PaymentMethodValidationRuleType) GetLengthOk() (*string, bool)`

GetLengthOk returns a tuple with the Length field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLength

`func (o *PaymentMethodValidationRuleType) SetLength(v string)`

SetLength sets Length field to given value.

### HasLength

`func (o *PaymentMethodValidationRuleType) HasLength() bool`

HasLength returns a boolean if a field has been set.

### GetPrefix

`func (o *PaymentMethodValidationRuleType) GetPrefix() string`

GetPrefix returns the Prefix field if non-nil, zero value otherwise.

### GetPrefixOk

`func (o *PaymentMethodValidationRuleType) GetPrefixOk() (*string, bool)`

GetPrefixOk returns a tuple with the Prefix field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrefix

`func (o *PaymentMethodValidationRuleType) SetPrefix(v string)`

SetPrefix sets Prefix field to given value.

### HasPrefix

`func (o *PaymentMethodValidationRuleType) HasPrefix() bool`

HasPrefix returns a boolean if a field has been set.

### GetRanges

`func (o *PaymentMethodValidationRuleType) GetRanges() []CardRangeType`

GetRanges returns the Ranges field if non-nil, zero value otherwise.

### GetRangesOk

`func (o *PaymentMethodValidationRuleType) GetRangesOk() (*[]CardRangeType, bool)`

GetRangesOk returns a tuple with the Ranges field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRanges

`func (o *PaymentMethodValidationRuleType) SetRanges(v []CardRangeType)`

SetRanges sets Ranges field to given value.

### HasRanges

`func (o *PaymentMethodValidationRuleType) HasRanges() bool`

HasRanges returns a boolean if a field has been set.

### GetFormula

`func (o *PaymentMethodValidationRuleType) GetFormula() string`

GetFormula returns the Formula field if non-nil, zero value otherwise.

### GetFormulaOk

`func (o *PaymentMethodValidationRuleType) GetFormulaOk() (*string, bool)`

GetFormulaOk returns a tuple with the Formula field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFormula

`func (o *PaymentMethodValidationRuleType) SetFormula(v string)`

SetFormula sets Formula field to given value.

### HasFormula

`func (o *PaymentMethodValidationRuleType) HasFormula() bool`

HasFormula returns a boolean if a field has been set.

### GetRule

`func (o *PaymentMethodValidationRuleType) GetRule() CardValidationRuleTypeType`

GetRule returns the Rule field if non-nil, zero value otherwise.

### GetRuleOk

`func (o *PaymentMethodValidationRuleType) GetRuleOk() (*CardValidationRuleTypeType, bool)`

GetRuleOk returns a tuple with the Rule field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRule

`func (o *PaymentMethodValidationRuleType) SetRule(v CardValidationRuleTypeType)`

SetRule sets Rule field to given value.

### HasRule

`func (o *PaymentMethodValidationRuleType) HasRule() bool`

HasRule returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



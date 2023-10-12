# TaxTypeCalcRuleType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Percentage** | Pointer to [**PercentageGenerateType**](PercentageGenerateType.md) |  | [optional] 
**FlatAmount** | Pointer to [**FlatAmtGenerateType**](FlatAmtGenerateType.md) |  | [optional] 
**UDF** | Pointer to [**UDFGenerateType**](UDFGenerateType.md) |  | [optional] 
**DoNotPost** | Pointer to **map[string]interface{}** | Existance of this type indicates that the generate will not be effective. This is mainly used on Tax Type based generates rule. | [optional] 
**RoundingMethod** | Pointer to [**GenerateRoundingMethodType**](GenerateRoundingMethodType.md) |  | [optional] 

## Methods

### NewTaxTypeCalcRuleType

`func NewTaxTypeCalcRuleType() *TaxTypeCalcRuleType`

NewTaxTypeCalcRuleType instantiates a new TaxTypeCalcRuleType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTaxTypeCalcRuleTypeWithDefaults

`func NewTaxTypeCalcRuleTypeWithDefaults() *TaxTypeCalcRuleType`

NewTaxTypeCalcRuleTypeWithDefaults instantiates a new TaxTypeCalcRuleType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPercentage

`func (o *TaxTypeCalcRuleType) GetPercentage() PercentageGenerateType`

GetPercentage returns the Percentage field if non-nil, zero value otherwise.

### GetPercentageOk

`func (o *TaxTypeCalcRuleType) GetPercentageOk() (*PercentageGenerateType, bool)`

GetPercentageOk returns a tuple with the Percentage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPercentage

`func (o *TaxTypeCalcRuleType) SetPercentage(v PercentageGenerateType)`

SetPercentage sets Percentage field to given value.

### HasPercentage

`func (o *TaxTypeCalcRuleType) HasPercentage() bool`

HasPercentage returns a boolean if a field has been set.

### GetFlatAmount

`func (o *TaxTypeCalcRuleType) GetFlatAmount() FlatAmtGenerateType`

GetFlatAmount returns the FlatAmount field if non-nil, zero value otherwise.

### GetFlatAmountOk

`func (o *TaxTypeCalcRuleType) GetFlatAmountOk() (*FlatAmtGenerateType, bool)`

GetFlatAmountOk returns a tuple with the FlatAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFlatAmount

`func (o *TaxTypeCalcRuleType) SetFlatAmount(v FlatAmtGenerateType)`

SetFlatAmount sets FlatAmount field to given value.

### HasFlatAmount

`func (o *TaxTypeCalcRuleType) HasFlatAmount() bool`

HasFlatAmount returns a boolean if a field has been set.

### GetUDF

`func (o *TaxTypeCalcRuleType) GetUDF() UDFGenerateType`

GetUDF returns the UDF field if non-nil, zero value otherwise.

### GetUDFOk

`func (o *TaxTypeCalcRuleType) GetUDFOk() (*UDFGenerateType, bool)`

GetUDFOk returns a tuple with the UDF field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUDF

`func (o *TaxTypeCalcRuleType) SetUDF(v UDFGenerateType)`

SetUDF sets UDF field to given value.

### HasUDF

`func (o *TaxTypeCalcRuleType) HasUDF() bool`

HasUDF returns a boolean if a field has been set.

### GetDoNotPost

`func (o *TaxTypeCalcRuleType) GetDoNotPost() map[string]interface{}`

GetDoNotPost returns the DoNotPost field if non-nil, zero value otherwise.

### GetDoNotPostOk

`func (o *TaxTypeCalcRuleType) GetDoNotPostOk() (*map[string]interface{}, bool)`

GetDoNotPostOk returns a tuple with the DoNotPost field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDoNotPost

`func (o *TaxTypeCalcRuleType) SetDoNotPost(v map[string]interface{})`

SetDoNotPost sets DoNotPost field to given value.

### HasDoNotPost

`func (o *TaxTypeCalcRuleType) HasDoNotPost() bool`

HasDoNotPost returns a boolean if a field has been set.

### GetRoundingMethod

`func (o *TaxTypeCalcRuleType) GetRoundingMethod() GenerateRoundingMethodType`

GetRoundingMethod returns the RoundingMethod field if non-nil, zero value otherwise.

### GetRoundingMethodOk

`func (o *TaxTypeCalcRuleType) GetRoundingMethodOk() (*GenerateRoundingMethodType, bool)`

GetRoundingMethodOk returns a tuple with the RoundingMethod field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoundingMethod

`func (o *TaxTypeCalcRuleType) SetRoundingMethod(v GenerateRoundingMethodType)`

SetRoundingMethod sets RoundingMethod field to given value.

### HasRoundingMethod

`func (o *TaxTypeCalcRuleType) HasRoundingMethod() bool`

HasRoundingMethod returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



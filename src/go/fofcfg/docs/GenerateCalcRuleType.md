# GenerateCalcRuleType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FlatAmount** | Pointer to [**FlatAmtGenerateType**](FlatAmtGenerateType.md) |  | [optional] 
**Percentage** | Pointer to [**PercentageGenerateType**](PercentageGenerateType.md) |  | [optional] 
**Posting** | Pointer to [**GeneratePostingRuleType**](GeneratePostingRuleType.md) |  | [optional] 
**RoundingMethod** | Pointer to [**GenerateRoundingMethodType**](GenerateRoundingMethodType.md) |  | [optional] 
**TaxTypeBased** | Pointer to [**TaxTypesGenerateType**](TaxTypesGenerateType.md) |  | [optional] 
**UDF** | Pointer to **string** | Defines User Defined Function to calculate generates. | [optional] 
**UDFFunctionArguments** | Pointer to [**FunctionArgumentsType**](FunctionArgumentsType.md) |  | [optional] 
**UDFFunctionName** | Pointer to **string** | The function name of the User Defined Function used to calculate generates. | [optional] 

## Methods

### NewGenerateCalcRuleType

`func NewGenerateCalcRuleType() *GenerateCalcRuleType`

NewGenerateCalcRuleType instantiates a new GenerateCalcRuleType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGenerateCalcRuleTypeWithDefaults

`func NewGenerateCalcRuleTypeWithDefaults() *GenerateCalcRuleType`

NewGenerateCalcRuleTypeWithDefaults instantiates a new GenerateCalcRuleType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFlatAmount

`func (o *GenerateCalcRuleType) GetFlatAmount() FlatAmtGenerateType`

GetFlatAmount returns the FlatAmount field if non-nil, zero value otherwise.

### GetFlatAmountOk

`func (o *GenerateCalcRuleType) GetFlatAmountOk() (*FlatAmtGenerateType, bool)`

GetFlatAmountOk returns a tuple with the FlatAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFlatAmount

`func (o *GenerateCalcRuleType) SetFlatAmount(v FlatAmtGenerateType)`

SetFlatAmount sets FlatAmount field to given value.

### HasFlatAmount

`func (o *GenerateCalcRuleType) HasFlatAmount() bool`

HasFlatAmount returns a boolean if a field has been set.

### GetPercentage

`func (o *GenerateCalcRuleType) GetPercentage() PercentageGenerateType`

GetPercentage returns the Percentage field if non-nil, zero value otherwise.

### GetPercentageOk

`func (o *GenerateCalcRuleType) GetPercentageOk() (*PercentageGenerateType, bool)`

GetPercentageOk returns a tuple with the Percentage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPercentage

`func (o *GenerateCalcRuleType) SetPercentage(v PercentageGenerateType)`

SetPercentage sets Percentage field to given value.

### HasPercentage

`func (o *GenerateCalcRuleType) HasPercentage() bool`

HasPercentage returns a boolean if a field has been set.

### GetPosting

`func (o *GenerateCalcRuleType) GetPosting() GeneratePostingRuleType`

GetPosting returns the Posting field if non-nil, zero value otherwise.

### GetPostingOk

`func (o *GenerateCalcRuleType) GetPostingOk() (*GeneratePostingRuleType, bool)`

GetPostingOk returns a tuple with the Posting field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPosting

`func (o *GenerateCalcRuleType) SetPosting(v GeneratePostingRuleType)`

SetPosting sets Posting field to given value.

### HasPosting

`func (o *GenerateCalcRuleType) HasPosting() bool`

HasPosting returns a boolean if a field has been set.

### GetRoundingMethod

`func (o *GenerateCalcRuleType) GetRoundingMethod() GenerateRoundingMethodType`

GetRoundingMethod returns the RoundingMethod field if non-nil, zero value otherwise.

### GetRoundingMethodOk

`func (o *GenerateCalcRuleType) GetRoundingMethodOk() (*GenerateRoundingMethodType, bool)`

GetRoundingMethodOk returns a tuple with the RoundingMethod field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoundingMethod

`func (o *GenerateCalcRuleType) SetRoundingMethod(v GenerateRoundingMethodType)`

SetRoundingMethod sets RoundingMethod field to given value.

### HasRoundingMethod

`func (o *GenerateCalcRuleType) HasRoundingMethod() bool`

HasRoundingMethod returns a boolean if a field has been set.

### GetTaxTypeBased

`func (o *GenerateCalcRuleType) GetTaxTypeBased() TaxTypesGenerateType`

GetTaxTypeBased returns the TaxTypeBased field if non-nil, zero value otherwise.

### GetTaxTypeBasedOk

`func (o *GenerateCalcRuleType) GetTaxTypeBasedOk() (*TaxTypesGenerateType, bool)`

GetTaxTypeBasedOk returns a tuple with the TaxTypeBased field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaxTypeBased

`func (o *GenerateCalcRuleType) SetTaxTypeBased(v TaxTypesGenerateType)`

SetTaxTypeBased sets TaxTypeBased field to given value.

### HasTaxTypeBased

`func (o *GenerateCalcRuleType) HasTaxTypeBased() bool`

HasTaxTypeBased returns a boolean if a field has been set.

### GetUDF

`func (o *GenerateCalcRuleType) GetUDF() string`

GetUDF returns the UDF field if non-nil, zero value otherwise.

### GetUDFOk

`func (o *GenerateCalcRuleType) GetUDFOk() (*string, bool)`

GetUDFOk returns a tuple with the UDF field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUDF

`func (o *GenerateCalcRuleType) SetUDF(v string)`

SetUDF sets UDF field to given value.

### HasUDF

`func (o *GenerateCalcRuleType) HasUDF() bool`

HasUDF returns a boolean if a field has been set.

### GetUDFFunctionArguments

`func (o *GenerateCalcRuleType) GetUDFFunctionArguments() FunctionArgumentsType`

GetUDFFunctionArguments returns the UDFFunctionArguments field if non-nil, zero value otherwise.

### GetUDFFunctionArgumentsOk

`func (o *GenerateCalcRuleType) GetUDFFunctionArgumentsOk() (*FunctionArgumentsType, bool)`

GetUDFFunctionArgumentsOk returns a tuple with the UDFFunctionArguments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUDFFunctionArguments

`func (o *GenerateCalcRuleType) SetUDFFunctionArguments(v FunctionArgumentsType)`

SetUDFFunctionArguments sets UDFFunctionArguments field to given value.

### HasUDFFunctionArguments

`func (o *GenerateCalcRuleType) HasUDFFunctionArguments() bool`

HasUDFFunctionArguments returns a boolean if a field has been set.

### GetUDFFunctionName

`func (o *GenerateCalcRuleType) GetUDFFunctionName() string`

GetUDFFunctionName returns the UDFFunctionName field if non-nil, zero value otherwise.

### GetUDFFunctionNameOk

`func (o *GenerateCalcRuleType) GetUDFFunctionNameOk() (*string, bool)`

GetUDFFunctionNameOk returns a tuple with the UDFFunctionName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUDFFunctionName

`func (o *GenerateCalcRuleType) SetUDFFunctionName(v string)`

SetUDFFunctionName sets UDFFunctionName field to given value.

### HasUDFFunctionName

`func (o *GenerateCalcRuleType) HasUDFFunctionName() bool`

HasUDFFunctionName returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



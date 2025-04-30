# YieldInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AdjustmentCode** | Pointer to **string** | Adjustment Code. | [optional] 
**AdjustmentCategory** | Pointer to [**AdjustmentCategoryType**](AdjustmentCategoryType.md) |  | [optional] 
**Description** | Pointer to **string** | Description of the adjustment code. | [optional] 
**CurrencyCode** | Pointer to **string** | The currency Code for this adjustment code. | [optional] 
**AdjustmentAmountOverridden** | Pointer to **bool** | Whether the Adjustment amount is overridden? false, signifies the amount is current value of Adjustment code. | [optional] 
**AdjustmentAmount** | Pointer to **float32** | Adjustment amount for the code. | [optional] 

## Methods

### NewYieldInfoType

`func NewYieldInfoType() *YieldInfoType`

NewYieldInfoType instantiates a new YieldInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewYieldInfoTypeWithDefaults

`func NewYieldInfoTypeWithDefaults() *YieldInfoType`

NewYieldInfoTypeWithDefaults instantiates a new YieldInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAdjustmentCode

`func (o *YieldInfoType) GetAdjustmentCode() string`

GetAdjustmentCode returns the AdjustmentCode field if non-nil, zero value otherwise.

### GetAdjustmentCodeOk

`func (o *YieldInfoType) GetAdjustmentCodeOk() (*string, bool)`

GetAdjustmentCodeOk returns a tuple with the AdjustmentCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdjustmentCode

`func (o *YieldInfoType) SetAdjustmentCode(v string)`

SetAdjustmentCode sets AdjustmentCode field to given value.

### HasAdjustmentCode

`func (o *YieldInfoType) HasAdjustmentCode() bool`

HasAdjustmentCode returns a boolean if a field has been set.

### GetAdjustmentCategory

`func (o *YieldInfoType) GetAdjustmentCategory() AdjustmentCategoryType`

GetAdjustmentCategory returns the AdjustmentCategory field if non-nil, zero value otherwise.

### GetAdjustmentCategoryOk

`func (o *YieldInfoType) GetAdjustmentCategoryOk() (*AdjustmentCategoryType, bool)`

GetAdjustmentCategoryOk returns a tuple with the AdjustmentCategory field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdjustmentCategory

`func (o *YieldInfoType) SetAdjustmentCategory(v AdjustmentCategoryType)`

SetAdjustmentCategory sets AdjustmentCategory field to given value.

### HasAdjustmentCategory

`func (o *YieldInfoType) HasAdjustmentCategory() bool`

HasAdjustmentCategory returns a boolean if a field has been set.

### GetDescription

`func (o *YieldInfoType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *YieldInfoType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *YieldInfoType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *YieldInfoType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetCurrencyCode

`func (o *YieldInfoType) GetCurrencyCode() string`

GetCurrencyCode returns the CurrencyCode field if non-nil, zero value otherwise.

### GetCurrencyCodeOk

`func (o *YieldInfoType) GetCurrencyCodeOk() (*string, bool)`

GetCurrencyCodeOk returns a tuple with the CurrencyCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrencyCode

`func (o *YieldInfoType) SetCurrencyCode(v string)`

SetCurrencyCode sets CurrencyCode field to given value.

### HasCurrencyCode

`func (o *YieldInfoType) HasCurrencyCode() bool`

HasCurrencyCode returns a boolean if a field has been set.

### GetAdjustmentAmountOverridden

`func (o *YieldInfoType) GetAdjustmentAmountOverridden() bool`

GetAdjustmentAmountOverridden returns the AdjustmentAmountOverridden field if non-nil, zero value otherwise.

### GetAdjustmentAmountOverriddenOk

`func (o *YieldInfoType) GetAdjustmentAmountOverriddenOk() (*bool, bool)`

GetAdjustmentAmountOverriddenOk returns a tuple with the AdjustmentAmountOverridden field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdjustmentAmountOverridden

`func (o *YieldInfoType) SetAdjustmentAmountOverridden(v bool)`

SetAdjustmentAmountOverridden sets AdjustmentAmountOverridden field to given value.

### HasAdjustmentAmountOverridden

`func (o *YieldInfoType) HasAdjustmentAmountOverridden() bool`

HasAdjustmentAmountOverridden returns a boolean if a field has been set.

### GetAdjustmentAmount

`func (o *YieldInfoType) GetAdjustmentAmount() float32`

GetAdjustmentAmount returns the AdjustmentAmount field if non-nil, zero value otherwise.

### GetAdjustmentAmountOk

`func (o *YieldInfoType) GetAdjustmentAmountOk() (*float32, bool)`

GetAdjustmentAmountOk returns a tuple with the AdjustmentAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdjustmentAmount

`func (o *YieldInfoType) SetAdjustmentAmount(v float32)`

SetAdjustmentAmount sets AdjustmentAmount field to given value.

### HasAdjustmentAmount

`func (o *YieldInfoType) HasAdjustmentAmount() bool`

HasAdjustmentAmount returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



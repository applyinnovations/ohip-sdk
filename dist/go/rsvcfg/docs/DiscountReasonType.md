# DiscountReasonType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AdvancedDiscountRules** | Pointer to [**[]AdvancedDiscountRuleType**](AdvancedDiscountRuleType.md) | Collection of advanced discount rules. | [optional] 
**Code** | Pointer to **string** | Common Master unique code. | [optional] 
**Description** | Pointer to [**TranslationTextType2000**](TranslationTextType2000.md) |  | [optional] 
**DisplayOrder** | Pointer to **float32** | Common Master record sequence number. | [optional] 

## Methods

### NewDiscountReasonType

`func NewDiscountReasonType() *DiscountReasonType`

NewDiscountReasonType instantiates a new DiscountReasonType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDiscountReasonTypeWithDefaults

`func NewDiscountReasonTypeWithDefaults() *DiscountReasonType`

NewDiscountReasonTypeWithDefaults instantiates a new DiscountReasonType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAdvancedDiscountRules

`func (o *DiscountReasonType) GetAdvancedDiscountRules() []AdvancedDiscountRuleType`

GetAdvancedDiscountRules returns the AdvancedDiscountRules field if non-nil, zero value otherwise.

### GetAdvancedDiscountRulesOk

`func (o *DiscountReasonType) GetAdvancedDiscountRulesOk() (*[]AdvancedDiscountRuleType, bool)`

GetAdvancedDiscountRulesOk returns a tuple with the AdvancedDiscountRules field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdvancedDiscountRules

`func (o *DiscountReasonType) SetAdvancedDiscountRules(v []AdvancedDiscountRuleType)`

SetAdvancedDiscountRules sets AdvancedDiscountRules field to given value.

### HasAdvancedDiscountRules

`func (o *DiscountReasonType) HasAdvancedDiscountRules() bool`

HasAdvancedDiscountRules returns a boolean if a field has been set.

### GetCode

`func (o *DiscountReasonType) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *DiscountReasonType) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *DiscountReasonType) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *DiscountReasonType) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetDescription

`func (o *DiscountReasonType) GetDescription() TranslationTextType2000`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *DiscountReasonType) GetDescriptionOk() (*TranslationTextType2000, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *DiscountReasonType) SetDescription(v TranslationTextType2000)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *DiscountReasonType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetDisplayOrder

`func (o *DiscountReasonType) GetDisplayOrder() float32`

GetDisplayOrder returns the DisplayOrder field if non-nil, zero value otherwise.

### GetDisplayOrderOk

`func (o *DiscountReasonType) GetDisplayOrderOk() (*float32, bool)`

GetDisplayOrderOk returns a tuple with the DisplayOrder field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayOrder

`func (o *DiscountReasonType) SetDisplayOrder(v float32)`

SetDisplayOrder sets DisplayOrder field to given value.

### HasDisplayOrder

`func (o *DiscountReasonType) HasDisplayOrder() bool`

HasDisplayOrder returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



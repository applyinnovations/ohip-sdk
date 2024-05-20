# GeneratePostingRuleType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AdjustmentType** | Pointer to [**GenerateAdjustmentTypeType**](GenerateAdjustmentTypeType.md) |  | [optional] 
**ApplicableDays** | Pointer to **int32** | Generates are posted/applicable only for first Applicable Days of the stay. | [optional] 

## Methods

### NewGeneratePostingRuleType

`func NewGeneratePostingRuleType() *GeneratePostingRuleType`

NewGeneratePostingRuleType instantiates a new GeneratePostingRuleType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGeneratePostingRuleTypeWithDefaults

`func NewGeneratePostingRuleTypeWithDefaults() *GeneratePostingRuleType`

NewGeneratePostingRuleTypeWithDefaults instantiates a new GeneratePostingRuleType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAdjustmentType

`func (o *GeneratePostingRuleType) GetAdjustmentType() GenerateAdjustmentTypeType`

GetAdjustmentType returns the AdjustmentType field if non-nil, zero value otherwise.

### GetAdjustmentTypeOk

`func (o *GeneratePostingRuleType) GetAdjustmentTypeOk() (*GenerateAdjustmentTypeType, bool)`

GetAdjustmentTypeOk returns a tuple with the AdjustmentType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdjustmentType

`func (o *GeneratePostingRuleType) SetAdjustmentType(v GenerateAdjustmentTypeType)`

SetAdjustmentType sets AdjustmentType field to given value.

### HasAdjustmentType

`func (o *GeneratePostingRuleType) HasAdjustmentType() bool`

HasAdjustmentType returns a boolean if a field has been set.

### GetApplicableDays

`func (o *GeneratePostingRuleType) GetApplicableDays() int32`

GetApplicableDays returns the ApplicableDays field if non-nil, zero value otherwise.

### GetApplicableDaysOk

`func (o *GeneratePostingRuleType) GetApplicableDaysOk() (*int32, bool)`

GetApplicableDaysOk returns a tuple with the ApplicableDays field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApplicableDays

`func (o *GeneratePostingRuleType) SetApplicableDays(v int32)`

SetApplicableDays sets ApplicableDays field to given value.

### HasApplicableDays

`func (o *GeneratePostingRuleType) HasApplicableDays() bool`

HasApplicableDays returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# AdvancedBaseRateOffsetType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApplyBar** | Pointer to **bool** | Should this schedule be Advanced dynamically based on BAR rate. | [optional] 
**FlatOrPercentage** | Pointer to **string** | It signifies offset amount is of Flat or Percentage type. Valid Values are F/P. | [optional] 
**Offset** | Pointer to **float32** | offset amount for the advanced dynamic base rate schedule. | [optional] 

## Methods

### NewAdvancedBaseRateOffsetType

`func NewAdvancedBaseRateOffsetType() *AdvancedBaseRateOffsetType`

NewAdvancedBaseRateOffsetType instantiates a new AdvancedBaseRateOffsetType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAdvancedBaseRateOffsetTypeWithDefaults

`func NewAdvancedBaseRateOffsetTypeWithDefaults() *AdvancedBaseRateOffsetType`

NewAdvancedBaseRateOffsetTypeWithDefaults instantiates a new AdvancedBaseRateOffsetType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetApplyBar

`func (o *AdvancedBaseRateOffsetType) GetApplyBar() bool`

GetApplyBar returns the ApplyBar field if non-nil, zero value otherwise.

### GetApplyBarOk

`func (o *AdvancedBaseRateOffsetType) GetApplyBarOk() (*bool, bool)`

GetApplyBarOk returns a tuple with the ApplyBar field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApplyBar

`func (o *AdvancedBaseRateOffsetType) SetApplyBar(v bool)`

SetApplyBar sets ApplyBar field to given value.

### HasApplyBar

`func (o *AdvancedBaseRateOffsetType) HasApplyBar() bool`

HasApplyBar returns a boolean if a field has been set.

### GetFlatOrPercentage

`func (o *AdvancedBaseRateOffsetType) GetFlatOrPercentage() string`

GetFlatOrPercentage returns the FlatOrPercentage field if non-nil, zero value otherwise.

### GetFlatOrPercentageOk

`func (o *AdvancedBaseRateOffsetType) GetFlatOrPercentageOk() (*string, bool)`

GetFlatOrPercentageOk returns a tuple with the FlatOrPercentage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFlatOrPercentage

`func (o *AdvancedBaseRateOffsetType) SetFlatOrPercentage(v string)`

SetFlatOrPercentage sets FlatOrPercentage field to given value.

### HasFlatOrPercentage

`func (o *AdvancedBaseRateOffsetType) HasFlatOrPercentage() bool`

HasFlatOrPercentage returns a boolean if a field has been set.

### GetOffset

`func (o *AdvancedBaseRateOffsetType) GetOffset() float32`

GetOffset returns the Offset field if non-nil, zero value otherwise.

### GetOffsetOk

`func (o *AdvancedBaseRateOffsetType) GetOffsetOk() (*float32, bool)`

GetOffsetOk returns a tuple with the Offset field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOffset

`func (o *AdvancedBaseRateOffsetType) SetOffset(v float32)`

SetOffset sets Offset field to given value.

### HasOffset

`func (o *AdvancedBaseRateOffsetType) HasOffset() bool`

HasOffset returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



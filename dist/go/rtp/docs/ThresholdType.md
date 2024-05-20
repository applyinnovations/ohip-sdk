# ThresholdType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Incremental** | Pointer to **bool** | If incremental flag is true, condition threshold value represents increment or decrement to be adjusted, otherwise it represents an absolute value. | [optional] 
**Value** | Pointer to **int32** | Property Value | [optional] 

## Methods

### NewThresholdType

`func NewThresholdType() *ThresholdType`

NewThresholdType instantiates a new ThresholdType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewThresholdTypeWithDefaults

`func NewThresholdTypeWithDefaults() *ThresholdType`

NewThresholdTypeWithDefaults instantiates a new ThresholdType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIncremental

`func (o *ThresholdType) GetIncremental() bool`

GetIncremental returns the Incremental field if non-nil, zero value otherwise.

### GetIncrementalOk

`func (o *ThresholdType) GetIncrementalOk() (*bool, bool)`

GetIncrementalOk returns a tuple with the Incremental field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncremental

`func (o *ThresholdType) SetIncremental(v bool)`

SetIncremental sets Incremental field to given value.

### HasIncremental

`func (o *ThresholdType) HasIncremental() bool`

HasIncremental returns a boolean if a field has been set.

### GetValue

`func (o *ThresholdType) GetValue() int32`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *ThresholdType) GetValueOk() (*int32, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *ThresholdType) SetValue(v int32)`

SetValue sets Value field to given value.

### HasValue

`func (o *ThresholdType) HasValue() bool`

HasValue returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



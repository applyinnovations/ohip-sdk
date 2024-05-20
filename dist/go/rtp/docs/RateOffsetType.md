# RateOffsetType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FlatOrPercentage** | Pointer to **string** | Specifies whether the offset amount is of Flat or Percentage type. Valid values are F/P. | [optional] 
**IncreaseOrDecrease** | Pointer to **string** | Specifies whether the offset amount is to increase the rate or decrease the rate. Valid values are I/D. | [optional] 
**Offset** | Pointer to **float32** | Offset amount for copying the rate schedule. | [optional] 

## Methods

### NewRateOffsetType

`func NewRateOffsetType() *RateOffsetType`

NewRateOffsetType instantiates a new RateOffsetType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRateOffsetTypeWithDefaults

`func NewRateOffsetTypeWithDefaults() *RateOffsetType`

NewRateOffsetTypeWithDefaults instantiates a new RateOffsetType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFlatOrPercentage

`func (o *RateOffsetType) GetFlatOrPercentage() string`

GetFlatOrPercentage returns the FlatOrPercentage field if non-nil, zero value otherwise.

### GetFlatOrPercentageOk

`func (o *RateOffsetType) GetFlatOrPercentageOk() (*string, bool)`

GetFlatOrPercentageOk returns a tuple with the FlatOrPercentage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFlatOrPercentage

`func (o *RateOffsetType) SetFlatOrPercentage(v string)`

SetFlatOrPercentage sets FlatOrPercentage field to given value.

### HasFlatOrPercentage

`func (o *RateOffsetType) HasFlatOrPercentage() bool`

HasFlatOrPercentage returns a boolean if a field has been set.

### GetIncreaseOrDecrease

`func (o *RateOffsetType) GetIncreaseOrDecrease() string`

GetIncreaseOrDecrease returns the IncreaseOrDecrease field if non-nil, zero value otherwise.

### GetIncreaseOrDecreaseOk

`func (o *RateOffsetType) GetIncreaseOrDecreaseOk() (*string, bool)`

GetIncreaseOrDecreaseOk returns a tuple with the IncreaseOrDecrease field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncreaseOrDecrease

`func (o *RateOffsetType) SetIncreaseOrDecrease(v string)`

SetIncreaseOrDecrease sets IncreaseOrDecrease field to given value.

### HasIncreaseOrDecrease

`func (o *RateOffsetType) HasIncreaseOrDecrease() bool`

HasIncreaseOrDecrease returns a boolean if a field has been set.

### GetOffset

`func (o *RateOffsetType) GetOffset() float32`

GetOffset returns the Offset field if non-nil, zero value otherwise.

### GetOffsetOk

`func (o *RateOffsetType) GetOffsetOk() (*float32, bool)`

GetOffsetOk returns a tuple with the Offset field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOffset

`func (o *RateOffsetType) SetOffset(v float32)`

SetOffset sets Offset field to given value.

### HasOffset

`func (o *RateOffsetType) HasOffset() bool`

HasOffset returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



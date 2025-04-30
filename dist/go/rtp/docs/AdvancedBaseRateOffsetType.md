# AdvancedBaseRateOffsetType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Offset** | Pointer to **float32** | offset amount for the advanced dynamic base rate schedule. | [optional] 
**FlatOrPercentage** | Pointer to **string** | It signifies offset amount is of Flat or Percentage type. Valid Values are F/P. | [optional] 
**ApplyBar** | Pointer to **bool** | Should this schedule be Advanced dynamically based on BAR rate. | [optional] 
**BarBaseAmount** | Pointer to **float32** | Offset amount for the advanced dynamic base rate schedule from its BAR Rate. | [optional] 
**BarFlatOrPercentage** | Pointer to **string** | It signifies whether Bar Base Amount is of Flat or Percentage type. Valid Values are F/P. | [optional] 
**BarRounding** | Pointer to **string** | Rounding style used for the calculated rate amounts. Valid values are U,D,N,C,F which means Up, Down, None, Up-Keep Decimal, Down-Keep Decimal. | [optional] 

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

### GetBarBaseAmount

`func (o *AdvancedBaseRateOffsetType) GetBarBaseAmount() float32`

GetBarBaseAmount returns the BarBaseAmount field if non-nil, zero value otherwise.

### GetBarBaseAmountOk

`func (o *AdvancedBaseRateOffsetType) GetBarBaseAmountOk() (*float32, bool)`

GetBarBaseAmountOk returns a tuple with the BarBaseAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBarBaseAmount

`func (o *AdvancedBaseRateOffsetType) SetBarBaseAmount(v float32)`

SetBarBaseAmount sets BarBaseAmount field to given value.

### HasBarBaseAmount

`func (o *AdvancedBaseRateOffsetType) HasBarBaseAmount() bool`

HasBarBaseAmount returns a boolean if a field has been set.

### GetBarFlatOrPercentage

`func (o *AdvancedBaseRateOffsetType) GetBarFlatOrPercentage() string`

GetBarFlatOrPercentage returns the BarFlatOrPercentage field if non-nil, zero value otherwise.

### GetBarFlatOrPercentageOk

`func (o *AdvancedBaseRateOffsetType) GetBarFlatOrPercentageOk() (*string, bool)`

GetBarFlatOrPercentageOk returns a tuple with the BarFlatOrPercentage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBarFlatOrPercentage

`func (o *AdvancedBaseRateOffsetType) SetBarFlatOrPercentage(v string)`

SetBarFlatOrPercentage sets BarFlatOrPercentage field to given value.

### HasBarFlatOrPercentage

`func (o *AdvancedBaseRateOffsetType) HasBarFlatOrPercentage() bool`

HasBarFlatOrPercentage returns a boolean if a field has been set.

### GetBarRounding

`func (o *AdvancedBaseRateOffsetType) GetBarRounding() string`

GetBarRounding returns the BarRounding field if non-nil, zero value otherwise.

### GetBarRoundingOk

`func (o *AdvancedBaseRateOffsetType) GetBarRoundingOk() (*string, bool)`

GetBarRoundingOk returns a tuple with the BarRounding field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBarRounding

`func (o *AdvancedBaseRateOffsetType) SetBarRounding(v string)`

SetBarRounding sets BarRounding field to given value.

### HasBarRounding

`func (o *AdvancedBaseRateOffsetType) HasBarRounding() bool`

HasBarRounding returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



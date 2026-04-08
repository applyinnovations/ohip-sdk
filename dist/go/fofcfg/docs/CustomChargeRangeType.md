# CustomChargeRangeType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RangeFrom** | Pointer to **float32** | The lower range value for which the corresponding price is posted as a custom charge. | [optional] 
**RangeTo** | Pointer to **float32** | The upper range value for which the corresponding price is posted as a custom charge. | [optional] 
**Price** | Pointer to **float32** | The price of the custom charge, for the given range. | [optional] 

## Methods

### NewCustomChargeRangeType

`func NewCustomChargeRangeType() *CustomChargeRangeType`

NewCustomChargeRangeType instantiates a new CustomChargeRangeType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCustomChargeRangeTypeWithDefaults

`func NewCustomChargeRangeTypeWithDefaults() *CustomChargeRangeType`

NewCustomChargeRangeTypeWithDefaults instantiates a new CustomChargeRangeType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRangeFrom

`func (o *CustomChargeRangeType) GetRangeFrom() float32`

GetRangeFrom returns the RangeFrom field if non-nil, zero value otherwise.

### GetRangeFromOk

`func (o *CustomChargeRangeType) GetRangeFromOk() (*float32, bool)`

GetRangeFromOk returns a tuple with the RangeFrom field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRangeFrom

`func (o *CustomChargeRangeType) SetRangeFrom(v float32)`

SetRangeFrom sets RangeFrom field to given value.

### HasRangeFrom

`func (o *CustomChargeRangeType) HasRangeFrom() bool`

HasRangeFrom returns a boolean if a field has been set.

### GetRangeTo

`func (o *CustomChargeRangeType) GetRangeTo() float32`

GetRangeTo returns the RangeTo field if non-nil, zero value otherwise.

### GetRangeToOk

`func (o *CustomChargeRangeType) GetRangeToOk() (*float32, bool)`

GetRangeToOk returns a tuple with the RangeTo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRangeTo

`func (o *CustomChargeRangeType) SetRangeTo(v float32)`

SetRangeTo sets RangeTo field to given value.

### HasRangeTo

`func (o *CustomChargeRangeType) HasRangeTo() bool`

HasRangeTo returns a boolean if a field has been set.

### GetPrice

`func (o *CustomChargeRangeType) GetPrice() float32`

GetPrice returns the Price field if non-nil, zero value otherwise.

### GetPriceOk

`func (o *CustomChargeRangeType) GetPriceOk() (*float32, bool)`

GetPriceOk returns a tuple with the Price field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrice

`func (o *CustomChargeRangeType) SetPrice(v float32)`

SetPrice sets Price field to given value.

### HasPrice

`func (o *CustomChargeRangeType) HasPrice() bool`

HasPrice returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



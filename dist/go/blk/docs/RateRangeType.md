# RateRangeType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Base** | Pointer to [**[]TotalType**](TotalType.md) | The base amount charged for the accommodation or service. | [optional] 
**RateChange** | Pointer to **bool** | Rate Change Indicator. | [optional] 

## Methods

### NewRateRangeType

`func NewRateRangeType() *RateRangeType`

NewRateRangeType instantiates a new RateRangeType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRateRangeTypeWithDefaults

`func NewRateRangeTypeWithDefaults() *RateRangeType`

NewRateRangeTypeWithDefaults instantiates a new RateRangeType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBase

`func (o *RateRangeType) GetBase() []TotalType`

GetBase returns the Base field if non-nil, zero value otherwise.

### GetBaseOk

`func (o *RateRangeType) GetBaseOk() (*[]TotalType, bool)`

GetBaseOk returns a tuple with the Base field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBase

`func (o *RateRangeType) SetBase(v []TotalType)`

SetBase sets Base field to given value.

### HasBase

`func (o *RateRangeType) HasBase() bool`

HasBase returns a boolean if a field has been set.

### GetRateChange

`func (o *RateRangeType) GetRateChange() bool`

GetRateChange returns the RateChange field if non-nil, zero value otherwise.

### GetRateChangeOk

`func (o *RateRangeType) GetRateChangeOk() (*bool, bool)`

GetRateChangeOk returns a tuple with the RateChange field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateChange

`func (o *RateRangeType) SetRateChange(v bool)`

SetRateChange sets RateChange field to given value.

### HasRateChange

`func (o *RateRangeType) HasRateChange() bool`

HasRateChange returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



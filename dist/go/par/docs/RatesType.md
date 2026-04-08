# RatesType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Rate** | Pointer to [**[]AmountType**](AmountType.md) | The Rate contains a collection of elements that define the amount of the rate, associated fees, additional occupant amounts. Taxes can be broken out or included within the various amounts. A currency can be associated to each amount. | [optional] 
**RateRange** | Pointer to [**[]RateRangeType**](RateRangeType.md) | Rate Range details like maximum rate amount and minimum rate amount in each available rate category. | [optional] 

## Methods

### NewRatesType

`func NewRatesType() *RatesType`

NewRatesType instantiates a new RatesType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRatesTypeWithDefaults

`func NewRatesTypeWithDefaults() *RatesType`

NewRatesTypeWithDefaults instantiates a new RatesType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRate

`func (o *RatesType) GetRate() []AmountType`

GetRate returns the Rate field if non-nil, zero value otherwise.

### GetRateOk

`func (o *RatesType) GetRateOk() (*[]AmountType, bool)`

GetRateOk returns a tuple with the Rate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRate

`func (o *RatesType) SetRate(v []AmountType)`

SetRate sets Rate field to given value.

### HasRate

`func (o *RatesType) HasRate() bool`

HasRate returns a boolean if a field has been set.

### GetRateRange

`func (o *RatesType) GetRateRange() []RateRangeType`

GetRateRange returns the RateRange field if non-nil, zero value otherwise.

### GetRateRangeOk

`func (o *RatesType) GetRateRangeOk() (*[]RateRangeType, bool)`

GetRateRangeOk returns a tuple with the RateRange field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateRange

`func (o *RatesType) SetRateRange(v []RateRangeType)`

SetRateRange sets RateRange field to given value.

### HasRateRange

`func (o *RatesType) HasRateRange() bool`

HasRateRange returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



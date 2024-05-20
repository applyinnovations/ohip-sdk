# HotelRateRangeType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CurrencyCode** | Pointer to **string** | The base currency code for rate range(The currency code used by the hotel which the rate range belongs to). | [optional] 
**HotelId** | Pointer to **string** |  | [optional] 
**MaxRate** | Pointer to **float32** | Maximum Rate offered by the hotel. | [optional] 
**MinRate** | Pointer to **float32** | Minimum Rate offered by the hotel. | [optional] 
**TimeSpan** | Pointer to [**TimeSpanType**](TimeSpanType.md) |  | [optional] 

## Methods

### NewHotelRateRangeType

`func NewHotelRateRangeType() *HotelRateRangeType`

NewHotelRateRangeType instantiates a new HotelRateRangeType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHotelRateRangeTypeWithDefaults

`func NewHotelRateRangeTypeWithDefaults() *HotelRateRangeType`

NewHotelRateRangeTypeWithDefaults instantiates a new HotelRateRangeType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCurrencyCode

`func (o *HotelRateRangeType) GetCurrencyCode() string`

GetCurrencyCode returns the CurrencyCode field if non-nil, zero value otherwise.

### GetCurrencyCodeOk

`func (o *HotelRateRangeType) GetCurrencyCodeOk() (*string, bool)`

GetCurrencyCodeOk returns a tuple with the CurrencyCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrencyCode

`func (o *HotelRateRangeType) SetCurrencyCode(v string)`

SetCurrencyCode sets CurrencyCode field to given value.

### HasCurrencyCode

`func (o *HotelRateRangeType) HasCurrencyCode() bool`

HasCurrencyCode returns a boolean if a field has been set.

### GetHotelId

`func (o *HotelRateRangeType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *HotelRateRangeType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *HotelRateRangeType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *HotelRateRangeType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetMaxRate

`func (o *HotelRateRangeType) GetMaxRate() float32`

GetMaxRate returns the MaxRate field if non-nil, zero value otherwise.

### GetMaxRateOk

`func (o *HotelRateRangeType) GetMaxRateOk() (*float32, bool)`

GetMaxRateOk returns a tuple with the MaxRate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaxRate

`func (o *HotelRateRangeType) SetMaxRate(v float32)`

SetMaxRate sets MaxRate field to given value.

### HasMaxRate

`func (o *HotelRateRangeType) HasMaxRate() bool`

HasMaxRate returns a boolean if a field has been set.

### GetMinRate

`func (o *HotelRateRangeType) GetMinRate() float32`

GetMinRate returns the MinRate field if non-nil, zero value otherwise.

### GetMinRateOk

`func (o *HotelRateRangeType) GetMinRateOk() (*float32, bool)`

GetMinRateOk returns a tuple with the MinRate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMinRate

`func (o *HotelRateRangeType) SetMinRate(v float32)`

SetMinRate sets MinRate field to given value.

### HasMinRate

`func (o *HotelRateRangeType) HasMinRate() bool`

HasMinRate returns a boolean if a field has been set.

### GetTimeSpan

`func (o *HotelRateRangeType) GetTimeSpan() TimeSpanType`

GetTimeSpan returns the TimeSpan field if non-nil, zero value otherwise.

### GetTimeSpanOk

`func (o *HotelRateRangeType) GetTimeSpanOk() (*TimeSpanType, bool)`

GetTimeSpanOk returns a tuple with the TimeSpan field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimeSpan

`func (o *HotelRateRangeType) SetTimeSpan(v TimeSpanType)`

SetTimeSpan sets TimeSpan field to given value.

### HasTimeSpan

`func (o *HotelRateRangeType) HasTimeSpan() bool`

HasTimeSpan returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



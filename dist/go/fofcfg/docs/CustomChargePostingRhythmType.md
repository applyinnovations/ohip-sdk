# CustomChargePostingRhythmType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to [**CustomChargePostingRhythmTypeOption**](CustomChargePostingRhythmTypeOption.md) |  | [optional] 
**StartOnNight** | Pointer to **int32** | Starting night of the reservation for which the custom charge will be posted. This is applicable when the posting rhythm &#39;Post On Every X Nights Starting Y Night&#39; is selected. | [optional] 
**PostEveryXNights** | Pointer to **int32** | The custom charge will be posted for every X night, where X is the frequency of nights. This is applicable when the posting rhythm &#39;Post On Every X Nights Starting Y Night&#39; is selected. | [optional] 
**StartOnNightPrice** | Pointer to **int32** | The amount for which the custom charge will be posted to the reservation, starting on the night defined by &#39;Start On Night&#39;. This is applicable when the posting rhythm &#39;Post On Every X Nights Starting Y Night&#39; is selected. | [optional] 
**MaxNights** | Pointer to **int32** | The maximum number of nights for which the custom charge posted to the reservation. This is applicable when the posting rhythm &#39;Post Every Night For X Nights&#39; is selected. | [optional] 

## Methods

### NewCustomChargePostingRhythmType

`func NewCustomChargePostingRhythmType() *CustomChargePostingRhythmType`

NewCustomChargePostingRhythmType instantiates a new CustomChargePostingRhythmType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCustomChargePostingRhythmTypeWithDefaults

`func NewCustomChargePostingRhythmTypeWithDefaults() *CustomChargePostingRhythmType`

NewCustomChargePostingRhythmTypeWithDefaults instantiates a new CustomChargePostingRhythmType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *CustomChargePostingRhythmType) GetType() CustomChargePostingRhythmTypeOption`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *CustomChargePostingRhythmType) GetTypeOk() (*CustomChargePostingRhythmTypeOption, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *CustomChargePostingRhythmType) SetType(v CustomChargePostingRhythmTypeOption)`

SetType sets Type field to given value.

### HasType

`func (o *CustomChargePostingRhythmType) HasType() bool`

HasType returns a boolean if a field has been set.

### GetStartOnNight

`func (o *CustomChargePostingRhythmType) GetStartOnNight() int32`

GetStartOnNight returns the StartOnNight field if non-nil, zero value otherwise.

### GetStartOnNightOk

`func (o *CustomChargePostingRhythmType) GetStartOnNightOk() (*int32, bool)`

GetStartOnNightOk returns a tuple with the StartOnNight field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartOnNight

`func (o *CustomChargePostingRhythmType) SetStartOnNight(v int32)`

SetStartOnNight sets StartOnNight field to given value.

### HasStartOnNight

`func (o *CustomChargePostingRhythmType) HasStartOnNight() bool`

HasStartOnNight returns a boolean if a field has been set.

### GetPostEveryXNights

`func (o *CustomChargePostingRhythmType) GetPostEveryXNights() int32`

GetPostEveryXNights returns the PostEveryXNights field if non-nil, zero value otherwise.

### GetPostEveryXNightsOk

`func (o *CustomChargePostingRhythmType) GetPostEveryXNightsOk() (*int32, bool)`

GetPostEveryXNightsOk returns a tuple with the PostEveryXNights field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPostEveryXNights

`func (o *CustomChargePostingRhythmType) SetPostEveryXNights(v int32)`

SetPostEveryXNights sets PostEveryXNights field to given value.

### HasPostEveryXNights

`func (o *CustomChargePostingRhythmType) HasPostEveryXNights() bool`

HasPostEveryXNights returns a boolean if a field has been set.

### GetStartOnNightPrice

`func (o *CustomChargePostingRhythmType) GetStartOnNightPrice() int32`

GetStartOnNightPrice returns the StartOnNightPrice field if non-nil, zero value otherwise.

### GetStartOnNightPriceOk

`func (o *CustomChargePostingRhythmType) GetStartOnNightPriceOk() (*int32, bool)`

GetStartOnNightPriceOk returns a tuple with the StartOnNightPrice field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartOnNightPrice

`func (o *CustomChargePostingRhythmType) SetStartOnNightPrice(v int32)`

SetStartOnNightPrice sets StartOnNightPrice field to given value.

### HasStartOnNightPrice

`func (o *CustomChargePostingRhythmType) HasStartOnNightPrice() bool`

HasStartOnNightPrice returns a boolean if a field has been set.

### GetMaxNights

`func (o *CustomChargePostingRhythmType) GetMaxNights() int32`

GetMaxNights returns the MaxNights field if non-nil, zero value otherwise.

### GetMaxNightsOk

`func (o *CustomChargePostingRhythmType) GetMaxNightsOk() (*int32, bool)`

GetMaxNightsOk returns a tuple with the MaxNights field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaxNights

`func (o *CustomChargePostingRhythmType) SetMaxNights(v int32)`

SetMaxNights sets MaxNights field to given value.

### HasMaxNights

`func (o *CustomChargePostingRhythmType) HasMaxNights() bool`

HasMaxNights returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



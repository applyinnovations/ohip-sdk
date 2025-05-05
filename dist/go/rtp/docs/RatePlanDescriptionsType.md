# RatePlanDescriptionsType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ShortInfo** | Pointer to [**TranslationTextType2000**](TranslationTextType2000.md) |  | [optional] 
**LongInfo** | Pointer to [**TranslationTextType2000**](TranslationTextType2000.md) |  | [optional] 
**InfoURL** | Pointer to **string** | Info URL is the location associated for more information about the rate plan. | [optional] 
**RateInfoTemplate** | Pointer to **string** | Rate information template which is configured for the hotel. This value can be used to populate the LongInfo of this rate plan, if desired. | [optional] 

## Methods

### NewRatePlanDescriptionsType

`func NewRatePlanDescriptionsType() *RatePlanDescriptionsType`

NewRatePlanDescriptionsType instantiates a new RatePlanDescriptionsType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRatePlanDescriptionsTypeWithDefaults

`func NewRatePlanDescriptionsTypeWithDefaults() *RatePlanDescriptionsType`

NewRatePlanDescriptionsTypeWithDefaults instantiates a new RatePlanDescriptionsType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetShortInfo

`func (o *RatePlanDescriptionsType) GetShortInfo() TranslationTextType2000`

GetShortInfo returns the ShortInfo field if non-nil, zero value otherwise.

### GetShortInfoOk

`func (o *RatePlanDescriptionsType) GetShortInfoOk() (*TranslationTextType2000, bool)`

GetShortInfoOk returns a tuple with the ShortInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShortInfo

`func (o *RatePlanDescriptionsType) SetShortInfo(v TranslationTextType2000)`

SetShortInfo sets ShortInfo field to given value.

### HasShortInfo

`func (o *RatePlanDescriptionsType) HasShortInfo() bool`

HasShortInfo returns a boolean if a field has been set.

### GetLongInfo

`func (o *RatePlanDescriptionsType) GetLongInfo() TranslationTextType2000`

GetLongInfo returns the LongInfo field if non-nil, zero value otherwise.

### GetLongInfoOk

`func (o *RatePlanDescriptionsType) GetLongInfoOk() (*TranslationTextType2000, bool)`

GetLongInfoOk returns a tuple with the LongInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLongInfo

`func (o *RatePlanDescriptionsType) SetLongInfo(v TranslationTextType2000)`

SetLongInfo sets LongInfo field to given value.

### HasLongInfo

`func (o *RatePlanDescriptionsType) HasLongInfo() bool`

HasLongInfo returns a boolean if a field has been set.

### GetInfoURL

`func (o *RatePlanDescriptionsType) GetInfoURL() string`

GetInfoURL returns the InfoURL field if non-nil, zero value otherwise.

### GetInfoURLOk

`func (o *RatePlanDescriptionsType) GetInfoURLOk() (*string, bool)`

GetInfoURLOk returns a tuple with the InfoURL field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInfoURL

`func (o *RatePlanDescriptionsType) SetInfoURL(v string)`

SetInfoURL sets InfoURL field to given value.

### HasInfoURL

`func (o *RatePlanDescriptionsType) HasInfoURL() bool`

HasInfoURL returns a boolean if a field has been set.

### GetRateInfoTemplate

`func (o *RatePlanDescriptionsType) GetRateInfoTemplate() string`

GetRateInfoTemplate returns the RateInfoTemplate field if non-nil, zero value otherwise.

### GetRateInfoTemplateOk

`func (o *RatePlanDescriptionsType) GetRateInfoTemplateOk() (*string, bool)`

GetRateInfoTemplateOk returns a tuple with the RateInfoTemplate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateInfoTemplate

`func (o *RatePlanDescriptionsType) SetRateInfoTemplate(v string)`

SetRateInfoTemplate sets RateInfoTemplate field to given value.

### HasRateInfoTemplate

`func (o *RatePlanDescriptionsType) HasRateInfoTemplate() bool`

HasRateInfoTemplate returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# RateAccessExclusionsType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Hotel code for the rate code. | [optional] 
**RateAccessExclusion** | Pointer to [**[]RateAccessExclusionType**](RateAccessExclusionType.md) | Collection of Rate Access Exclusions. | [optional] 
**RateCode** | Pointer to **string** | Rate code | [optional] 

## Methods

### NewRateAccessExclusionsType

`func NewRateAccessExclusionsType() *RateAccessExclusionsType`

NewRateAccessExclusionsType instantiates a new RateAccessExclusionsType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRateAccessExclusionsTypeWithDefaults

`func NewRateAccessExclusionsTypeWithDefaults() *RateAccessExclusionsType`

NewRateAccessExclusionsTypeWithDefaults instantiates a new RateAccessExclusionsType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *RateAccessExclusionsType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *RateAccessExclusionsType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *RateAccessExclusionsType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *RateAccessExclusionsType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetRateAccessExclusion

`func (o *RateAccessExclusionsType) GetRateAccessExclusion() []RateAccessExclusionType`

GetRateAccessExclusion returns the RateAccessExclusion field if non-nil, zero value otherwise.

### GetRateAccessExclusionOk

`func (o *RateAccessExclusionsType) GetRateAccessExclusionOk() (*[]RateAccessExclusionType, bool)`

GetRateAccessExclusionOk returns a tuple with the RateAccessExclusion field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateAccessExclusion

`func (o *RateAccessExclusionsType) SetRateAccessExclusion(v []RateAccessExclusionType)`

SetRateAccessExclusion sets RateAccessExclusion field to given value.

### HasRateAccessExclusion

`func (o *RateAccessExclusionsType) HasRateAccessExclusion() bool`

HasRateAccessExclusion returns a boolean if a field has been set.

### GetRateCode

`func (o *RateAccessExclusionsType) GetRateCode() string`

GetRateCode returns the RateCode field if non-nil, zero value otherwise.

### GetRateCodeOk

`func (o *RateAccessExclusionsType) GetRateCodeOk() (*string, bool)`

GetRateCodeOk returns a tuple with the RateCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateCode

`func (o *RateAccessExclusionsType) SetRateCode(v string)`

SetRateCode sets RateCode field to given value.

### HasRateCode

`func (o *RateAccessExclusionsType) HasRateCode() bool`

HasRateCode returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



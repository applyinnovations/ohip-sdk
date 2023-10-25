# RegionType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Description** | Pointer to **string** | Description of the Region | [optional] 
**MarketingCities** | Pointer to [**[]MarketingCityType**](MarketingCityType.md) | Marketing Cities under this Region. | [optional] 
**RegionCode** | Pointer to **string** | Code of this Region. | [optional] 

## Methods

### NewRegionType

`func NewRegionType() *RegionType`

NewRegionType instantiates a new RegionType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRegionTypeWithDefaults

`func NewRegionTypeWithDefaults() *RegionType`

NewRegionTypeWithDefaults instantiates a new RegionType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDescription

`func (o *RegionType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *RegionType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *RegionType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *RegionType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetMarketingCities

`func (o *RegionType) GetMarketingCities() []MarketingCityType`

GetMarketingCities returns the MarketingCities field if non-nil, zero value otherwise.

### GetMarketingCitiesOk

`func (o *RegionType) GetMarketingCitiesOk() (*[]MarketingCityType, bool)`

GetMarketingCitiesOk returns a tuple with the MarketingCities field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMarketingCities

`func (o *RegionType) SetMarketingCities(v []MarketingCityType)`

SetMarketingCities sets MarketingCities field to given value.

### HasMarketingCities

`func (o *RegionType) HasMarketingCities() bool`

HasMarketingCities returns a boolean if a field has been set.

### GetRegionCode

`func (o *RegionType) GetRegionCode() string`

GetRegionCode returns the RegionCode field if non-nil, zero value otherwise.

### GetRegionCodeOk

`func (o *RegionType) GetRegionCodeOk() (*string, bool)`

GetRegionCodeOk returns a tuple with the RegionCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRegionCode

`func (o *RegionType) SetRegionCode(v string)`

SetRegionCode sets RegionCode field to given value.

### HasRegionCode

`func (o *RegionType) HasRegionCode() bool`

HasRegionCode returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



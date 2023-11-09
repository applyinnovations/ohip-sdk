# MarketingCityType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CityHotels** | Pointer to [**[]CityHotelInfoType**](CityHotelInfoType.md) | Hotels under this Marketing City. | [optional] 
**Description** | Pointer to **string** | Description of the Marketing City | [optional] 
**MarketingCity** | Pointer to **string** | Hotels under this Marketing City. | [optional] 

## Methods

### NewMarketingCityType

`func NewMarketingCityType() *MarketingCityType`

NewMarketingCityType instantiates a new MarketingCityType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMarketingCityTypeWithDefaults

`func NewMarketingCityTypeWithDefaults() *MarketingCityType`

NewMarketingCityTypeWithDefaults instantiates a new MarketingCityType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCityHotels

`func (o *MarketingCityType) GetCityHotels() []CityHotelInfoType`

GetCityHotels returns the CityHotels field if non-nil, zero value otherwise.

### GetCityHotelsOk

`func (o *MarketingCityType) GetCityHotelsOk() (*[]CityHotelInfoType, bool)`

GetCityHotelsOk returns a tuple with the CityHotels field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCityHotels

`func (o *MarketingCityType) SetCityHotels(v []CityHotelInfoType)`

SetCityHotels sets CityHotels field to given value.

### HasCityHotels

`func (o *MarketingCityType) HasCityHotels() bool`

HasCityHotels returns a boolean if a field has been set.

### GetDescription

`func (o *MarketingCityType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *MarketingCityType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *MarketingCityType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *MarketingCityType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetMarketingCity

`func (o *MarketingCityType) GetMarketingCity() string`

GetMarketingCity returns the MarketingCity field if non-nil, zero value otherwise.

### GetMarketingCityOk

`func (o *MarketingCityType) GetMarketingCityOk() (*string, bool)`

GetMarketingCityOk returns a tuple with the MarketingCity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMarketingCity

`func (o *MarketingCityType) SetMarketingCity(v string)`

SetMarketingCity sets MarketingCity field to given value.

### HasMarketingCity

`func (o *MarketingCityType) HasMarketingCity() bool`

HasMarketingCity returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



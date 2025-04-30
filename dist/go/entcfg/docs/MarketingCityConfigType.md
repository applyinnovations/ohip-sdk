# MarketingCityConfigType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Description** | Pointer to **string** | Description of the marketing city. | [optional] 
**Distance** | Pointer to **float32** | Distance from the hotel to the marketing city. | [optional] 
**DistanceType** | Pointer to **string** | Unit of distance for the Distance measurement. | [optional] 
**DrivingTime** | Pointer to **string** | Driving time from the hotel to the marketing city. | [optional] 
**Direction** | Pointer to **string** | Direction of the marketing city in relation to the hotel. | [optional] 
**Sequence** | Pointer to **int32** | Sequence number for displaying the marketing city. | [optional] 
**Inactive** | Pointer to **bool** | Flag to indicate whether the marketing city is inactive or not. | [optional] 
**MarketingCity** | Pointer to **string** | Marketing city code. | [optional] 
**RegionCode** | Pointer to **string** | Region that the marketing city belongs to. | [optional] 
**HotelId** | Pointer to **string** | Hotel the marketing city belongs to. | [optional] 

## Methods

### NewMarketingCityConfigType

`func NewMarketingCityConfigType() *MarketingCityConfigType`

NewMarketingCityConfigType instantiates a new MarketingCityConfigType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMarketingCityConfigTypeWithDefaults

`func NewMarketingCityConfigTypeWithDefaults() *MarketingCityConfigType`

NewMarketingCityConfigTypeWithDefaults instantiates a new MarketingCityConfigType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDescription

`func (o *MarketingCityConfigType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *MarketingCityConfigType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *MarketingCityConfigType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *MarketingCityConfigType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetDistance

`func (o *MarketingCityConfigType) GetDistance() float32`

GetDistance returns the Distance field if non-nil, zero value otherwise.

### GetDistanceOk

`func (o *MarketingCityConfigType) GetDistanceOk() (*float32, bool)`

GetDistanceOk returns a tuple with the Distance field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDistance

`func (o *MarketingCityConfigType) SetDistance(v float32)`

SetDistance sets Distance field to given value.

### HasDistance

`func (o *MarketingCityConfigType) HasDistance() bool`

HasDistance returns a boolean if a field has been set.

### GetDistanceType

`func (o *MarketingCityConfigType) GetDistanceType() string`

GetDistanceType returns the DistanceType field if non-nil, zero value otherwise.

### GetDistanceTypeOk

`func (o *MarketingCityConfigType) GetDistanceTypeOk() (*string, bool)`

GetDistanceTypeOk returns a tuple with the DistanceType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDistanceType

`func (o *MarketingCityConfigType) SetDistanceType(v string)`

SetDistanceType sets DistanceType field to given value.

### HasDistanceType

`func (o *MarketingCityConfigType) HasDistanceType() bool`

HasDistanceType returns a boolean if a field has been set.

### GetDrivingTime

`func (o *MarketingCityConfigType) GetDrivingTime() string`

GetDrivingTime returns the DrivingTime field if non-nil, zero value otherwise.

### GetDrivingTimeOk

`func (o *MarketingCityConfigType) GetDrivingTimeOk() (*string, bool)`

GetDrivingTimeOk returns a tuple with the DrivingTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDrivingTime

`func (o *MarketingCityConfigType) SetDrivingTime(v string)`

SetDrivingTime sets DrivingTime field to given value.

### HasDrivingTime

`func (o *MarketingCityConfigType) HasDrivingTime() bool`

HasDrivingTime returns a boolean if a field has been set.

### GetDirection

`func (o *MarketingCityConfigType) GetDirection() string`

GetDirection returns the Direction field if non-nil, zero value otherwise.

### GetDirectionOk

`func (o *MarketingCityConfigType) GetDirectionOk() (*string, bool)`

GetDirectionOk returns a tuple with the Direction field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDirection

`func (o *MarketingCityConfigType) SetDirection(v string)`

SetDirection sets Direction field to given value.

### HasDirection

`func (o *MarketingCityConfigType) HasDirection() bool`

HasDirection returns a boolean if a field has been set.

### GetSequence

`func (o *MarketingCityConfigType) GetSequence() int32`

GetSequence returns the Sequence field if non-nil, zero value otherwise.

### GetSequenceOk

`func (o *MarketingCityConfigType) GetSequenceOk() (*int32, bool)`

GetSequenceOk returns a tuple with the Sequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSequence

`func (o *MarketingCityConfigType) SetSequence(v int32)`

SetSequence sets Sequence field to given value.

### HasSequence

`func (o *MarketingCityConfigType) HasSequence() bool`

HasSequence returns a boolean if a field has been set.

### GetInactive

`func (o *MarketingCityConfigType) GetInactive() bool`

GetInactive returns the Inactive field if non-nil, zero value otherwise.

### GetInactiveOk

`func (o *MarketingCityConfigType) GetInactiveOk() (*bool, bool)`

GetInactiveOk returns a tuple with the Inactive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInactive

`func (o *MarketingCityConfigType) SetInactive(v bool)`

SetInactive sets Inactive field to given value.

### HasInactive

`func (o *MarketingCityConfigType) HasInactive() bool`

HasInactive returns a boolean if a field has been set.

### GetMarketingCity

`func (o *MarketingCityConfigType) GetMarketingCity() string`

GetMarketingCity returns the MarketingCity field if non-nil, zero value otherwise.

### GetMarketingCityOk

`func (o *MarketingCityConfigType) GetMarketingCityOk() (*string, bool)`

GetMarketingCityOk returns a tuple with the MarketingCity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMarketingCity

`func (o *MarketingCityConfigType) SetMarketingCity(v string)`

SetMarketingCity sets MarketingCity field to given value.

### HasMarketingCity

`func (o *MarketingCityConfigType) HasMarketingCity() bool`

HasMarketingCity returns a boolean if a field has been set.

### GetRegionCode

`func (o *MarketingCityConfigType) GetRegionCode() string`

GetRegionCode returns the RegionCode field if non-nil, zero value otherwise.

### GetRegionCodeOk

`func (o *MarketingCityConfigType) GetRegionCodeOk() (*string, bool)`

GetRegionCodeOk returns a tuple with the RegionCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRegionCode

`func (o *MarketingCityConfigType) SetRegionCode(v string)`

SetRegionCode sets RegionCode field to given value.

### HasRegionCode

`func (o *MarketingCityConfigType) HasRegionCode() bool`

HasRegionCode returns a boolean if a field has been set.

### GetHotelId

`func (o *MarketingCityConfigType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *MarketingCityConfigType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *MarketingCityConfigType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *MarketingCityConfigType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



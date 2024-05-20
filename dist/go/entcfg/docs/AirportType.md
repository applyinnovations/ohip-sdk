# AirportType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Description** | Pointer to **string** | Description of the airport. | [optional] 
**Distance** | Pointer to **float32** | Distance from the hotel to the airport. | [optional] 
**DistanceType** | Pointer to **string** | Unit of distance for the Distance measurement. | [optional] 
**DrivingTime** | Pointer to **string** | Driving time from the hotel to the airport. | [optional] 
**Direction** | Pointer to **string** | Direction of the airport in relation to the hotel. | [optional] 
**Website** | Pointer to **string** | URL of the airport&#39;s website. | [optional] 
**TransportationOptions** | Pointer to [**[]TransportationInfoType**](TransportationInfoType.md) | Transportation option available for the airport. | [optional] 
**Sequence** | Pointer to **int32** | Sequence number for displaying the airport. | [optional] 
**Code** | Pointer to **string** | Airport code identifying the airport. | [optional] 
**HotelId** | Pointer to **string** | Hotel code that the airport belongs to. | [optional] 

## Methods

### NewAirportType

`func NewAirportType() *AirportType`

NewAirportType instantiates a new AirportType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAirportTypeWithDefaults

`func NewAirportTypeWithDefaults() *AirportType`

NewAirportTypeWithDefaults instantiates a new AirportType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDescription

`func (o *AirportType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *AirportType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *AirportType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *AirportType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetDistance

`func (o *AirportType) GetDistance() float32`

GetDistance returns the Distance field if non-nil, zero value otherwise.

### GetDistanceOk

`func (o *AirportType) GetDistanceOk() (*float32, bool)`

GetDistanceOk returns a tuple with the Distance field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDistance

`func (o *AirportType) SetDistance(v float32)`

SetDistance sets Distance field to given value.

### HasDistance

`func (o *AirportType) HasDistance() bool`

HasDistance returns a boolean if a field has been set.

### GetDistanceType

`func (o *AirportType) GetDistanceType() string`

GetDistanceType returns the DistanceType field if non-nil, zero value otherwise.

### GetDistanceTypeOk

`func (o *AirportType) GetDistanceTypeOk() (*string, bool)`

GetDistanceTypeOk returns a tuple with the DistanceType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDistanceType

`func (o *AirportType) SetDistanceType(v string)`

SetDistanceType sets DistanceType field to given value.

### HasDistanceType

`func (o *AirportType) HasDistanceType() bool`

HasDistanceType returns a boolean if a field has been set.

### GetDrivingTime

`func (o *AirportType) GetDrivingTime() string`

GetDrivingTime returns the DrivingTime field if non-nil, zero value otherwise.

### GetDrivingTimeOk

`func (o *AirportType) GetDrivingTimeOk() (*string, bool)`

GetDrivingTimeOk returns a tuple with the DrivingTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDrivingTime

`func (o *AirportType) SetDrivingTime(v string)`

SetDrivingTime sets DrivingTime field to given value.

### HasDrivingTime

`func (o *AirportType) HasDrivingTime() bool`

HasDrivingTime returns a boolean if a field has been set.

### GetDirection

`func (o *AirportType) GetDirection() string`

GetDirection returns the Direction field if non-nil, zero value otherwise.

### GetDirectionOk

`func (o *AirportType) GetDirectionOk() (*string, bool)`

GetDirectionOk returns a tuple with the Direction field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDirection

`func (o *AirportType) SetDirection(v string)`

SetDirection sets Direction field to given value.

### HasDirection

`func (o *AirportType) HasDirection() bool`

HasDirection returns a boolean if a field has been set.

### GetWebsite

`func (o *AirportType) GetWebsite() string`

GetWebsite returns the Website field if non-nil, zero value otherwise.

### GetWebsiteOk

`func (o *AirportType) GetWebsiteOk() (*string, bool)`

GetWebsiteOk returns a tuple with the Website field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWebsite

`func (o *AirportType) SetWebsite(v string)`

SetWebsite sets Website field to given value.

### HasWebsite

`func (o *AirportType) HasWebsite() bool`

HasWebsite returns a boolean if a field has been set.

### GetTransportationOptions

`func (o *AirportType) GetTransportationOptions() []TransportationInfoType`

GetTransportationOptions returns the TransportationOptions field if non-nil, zero value otherwise.

### GetTransportationOptionsOk

`func (o *AirportType) GetTransportationOptionsOk() (*[]TransportationInfoType, bool)`

GetTransportationOptionsOk returns a tuple with the TransportationOptions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransportationOptions

`func (o *AirportType) SetTransportationOptions(v []TransportationInfoType)`

SetTransportationOptions sets TransportationOptions field to given value.

### HasTransportationOptions

`func (o *AirportType) HasTransportationOptions() bool`

HasTransportationOptions returns a boolean if a field has been set.

### GetSequence

`func (o *AirportType) GetSequence() int32`

GetSequence returns the Sequence field if non-nil, zero value otherwise.

### GetSequenceOk

`func (o *AirportType) GetSequenceOk() (*int32, bool)`

GetSequenceOk returns a tuple with the Sequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSequence

`func (o *AirportType) SetSequence(v int32)`

SetSequence sets Sequence field to given value.

### HasSequence

`func (o *AirportType) HasSequence() bool`

HasSequence returns a boolean if a field has been set.

### GetCode

`func (o *AirportType) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *AirportType) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *AirportType) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *AirportType) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetHotelId

`func (o *AirportType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *AirportType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *AirportType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *AirportType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



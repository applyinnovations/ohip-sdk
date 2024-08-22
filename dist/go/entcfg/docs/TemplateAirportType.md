# TemplateAirportType

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

## Methods

### NewTemplateAirportType

`func NewTemplateAirportType() *TemplateAirportType`

NewTemplateAirportType instantiates a new TemplateAirportType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTemplateAirportTypeWithDefaults

`func NewTemplateAirportTypeWithDefaults() *TemplateAirportType`

NewTemplateAirportTypeWithDefaults instantiates a new TemplateAirportType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDescription

`func (o *TemplateAirportType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *TemplateAirportType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *TemplateAirportType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *TemplateAirportType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetDistance

`func (o *TemplateAirportType) GetDistance() float32`

GetDistance returns the Distance field if non-nil, zero value otherwise.

### GetDistanceOk

`func (o *TemplateAirportType) GetDistanceOk() (*float32, bool)`

GetDistanceOk returns a tuple with the Distance field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDistance

`func (o *TemplateAirportType) SetDistance(v float32)`

SetDistance sets Distance field to given value.

### HasDistance

`func (o *TemplateAirportType) HasDistance() bool`

HasDistance returns a boolean if a field has been set.

### GetDistanceType

`func (o *TemplateAirportType) GetDistanceType() string`

GetDistanceType returns the DistanceType field if non-nil, zero value otherwise.

### GetDistanceTypeOk

`func (o *TemplateAirportType) GetDistanceTypeOk() (*string, bool)`

GetDistanceTypeOk returns a tuple with the DistanceType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDistanceType

`func (o *TemplateAirportType) SetDistanceType(v string)`

SetDistanceType sets DistanceType field to given value.

### HasDistanceType

`func (o *TemplateAirportType) HasDistanceType() bool`

HasDistanceType returns a boolean if a field has been set.

### GetDrivingTime

`func (o *TemplateAirportType) GetDrivingTime() string`

GetDrivingTime returns the DrivingTime field if non-nil, zero value otherwise.

### GetDrivingTimeOk

`func (o *TemplateAirportType) GetDrivingTimeOk() (*string, bool)`

GetDrivingTimeOk returns a tuple with the DrivingTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDrivingTime

`func (o *TemplateAirportType) SetDrivingTime(v string)`

SetDrivingTime sets DrivingTime field to given value.

### HasDrivingTime

`func (o *TemplateAirportType) HasDrivingTime() bool`

HasDrivingTime returns a boolean if a field has been set.

### GetDirection

`func (o *TemplateAirportType) GetDirection() string`

GetDirection returns the Direction field if non-nil, zero value otherwise.

### GetDirectionOk

`func (o *TemplateAirportType) GetDirectionOk() (*string, bool)`

GetDirectionOk returns a tuple with the Direction field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDirection

`func (o *TemplateAirportType) SetDirection(v string)`

SetDirection sets Direction field to given value.

### HasDirection

`func (o *TemplateAirportType) HasDirection() bool`

HasDirection returns a boolean if a field has been set.

### GetWebsite

`func (o *TemplateAirportType) GetWebsite() string`

GetWebsite returns the Website field if non-nil, zero value otherwise.

### GetWebsiteOk

`func (o *TemplateAirportType) GetWebsiteOk() (*string, bool)`

GetWebsiteOk returns a tuple with the Website field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWebsite

`func (o *TemplateAirportType) SetWebsite(v string)`

SetWebsite sets Website field to given value.

### HasWebsite

`func (o *TemplateAirportType) HasWebsite() bool`

HasWebsite returns a boolean if a field has been set.

### GetTransportationOptions

`func (o *TemplateAirportType) GetTransportationOptions() []TransportationInfoType`

GetTransportationOptions returns the TransportationOptions field if non-nil, zero value otherwise.

### GetTransportationOptionsOk

`func (o *TemplateAirportType) GetTransportationOptionsOk() (*[]TransportationInfoType, bool)`

GetTransportationOptionsOk returns a tuple with the TransportationOptions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransportationOptions

`func (o *TemplateAirportType) SetTransportationOptions(v []TransportationInfoType)`

SetTransportationOptions sets TransportationOptions field to given value.

### HasTransportationOptions

`func (o *TemplateAirportType) HasTransportationOptions() bool`

HasTransportationOptions returns a boolean if a field has been set.

### GetSequence

`func (o *TemplateAirportType) GetSequence() int32`

GetSequence returns the Sequence field if non-nil, zero value otherwise.

### GetSequenceOk

`func (o *TemplateAirportType) GetSequenceOk() (*int32, bool)`

GetSequenceOk returns a tuple with the Sequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSequence

`func (o *TemplateAirportType) SetSequence(v int32)`

SetSequence sets Sequence field to given value.

### HasSequence

`func (o *TemplateAirportType) HasSequence() bool`

HasSequence returns a boolean if a field has been set.

### GetCode

`func (o *TemplateAirportType) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *TemplateAirportType) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *TemplateAirportType) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *TemplateAirportType) HasCode() bool`

HasCode returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



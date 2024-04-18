# TemplateMarketingCityConfigType

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
**NewRegionCode** | Pointer to **string** | New region code to change the marketing city to. Template marketing cities allow editing of the region code. Because this is a key field we need to retain the original region code to locate the appropriate record to update. The original region code element is located in MarketingCityBaseType. | [optional] 

## Methods

### NewTemplateMarketingCityConfigType

`func NewTemplateMarketingCityConfigType() *TemplateMarketingCityConfigType`

NewTemplateMarketingCityConfigType instantiates a new TemplateMarketingCityConfigType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTemplateMarketingCityConfigTypeWithDefaults

`func NewTemplateMarketingCityConfigTypeWithDefaults() *TemplateMarketingCityConfigType`

NewTemplateMarketingCityConfigTypeWithDefaults instantiates a new TemplateMarketingCityConfigType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDescription

`func (o *TemplateMarketingCityConfigType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *TemplateMarketingCityConfigType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *TemplateMarketingCityConfigType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *TemplateMarketingCityConfigType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetDistance

`func (o *TemplateMarketingCityConfigType) GetDistance() float32`

GetDistance returns the Distance field if non-nil, zero value otherwise.

### GetDistanceOk

`func (o *TemplateMarketingCityConfigType) GetDistanceOk() (*float32, bool)`

GetDistanceOk returns a tuple with the Distance field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDistance

`func (o *TemplateMarketingCityConfigType) SetDistance(v float32)`

SetDistance sets Distance field to given value.

### HasDistance

`func (o *TemplateMarketingCityConfigType) HasDistance() bool`

HasDistance returns a boolean if a field has been set.

### GetDistanceType

`func (o *TemplateMarketingCityConfigType) GetDistanceType() string`

GetDistanceType returns the DistanceType field if non-nil, zero value otherwise.

### GetDistanceTypeOk

`func (o *TemplateMarketingCityConfigType) GetDistanceTypeOk() (*string, bool)`

GetDistanceTypeOk returns a tuple with the DistanceType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDistanceType

`func (o *TemplateMarketingCityConfigType) SetDistanceType(v string)`

SetDistanceType sets DistanceType field to given value.

### HasDistanceType

`func (o *TemplateMarketingCityConfigType) HasDistanceType() bool`

HasDistanceType returns a boolean if a field has been set.

### GetDrivingTime

`func (o *TemplateMarketingCityConfigType) GetDrivingTime() string`

GetDrivingTime returns the DrivingTime field if non-nil, zero value otherwise.

### GetDrivingTimeOk

`func (o *TemplateMarketingCityConfigType) GetDrivingTimeOk() (*string, bool)`

GetDrivingTimeOk returns a tuple with the DrivingTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDrivingTime

`func (o *TemplateMarketingCityConfigType) SetDrivingTime(v string)`

SetDrivingTime sets DrivingTime field to given value.

### HasDrivingTime

`func (o *TemplateMarketingCityConfigType) HasDrivingTime() bool`

HasDrivingTime returns a boolean if a field has been set.

### GetDirection

`func (o *TemplateMarketingCityConfigType) GetDirection() string`

GetDirection returns the Direction field if non-nil, zero value otherwise.

### GetDirectionOk

`func (o *TemplateMarketingCityConfigType) GetDirectionOk() (*string, bool)`

GetDirectionOk returns a tuple with the Direction field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDirection

`func (o *TemplateMarketingCityConfigType) SetDirection(v string)`

SetDirection sets Direction field to given value.

### HasDirection

`func (o *TemplateMarketingCityConfigType) HasDirection() bool`

HasDirection returns a boolean if a field has been set.

### GetSequence

`func (o *TemplateMarketingCityConfigType) GetSequence() int32`

GetSequence returns the Sequence field if non-nil, zero value otherwise.

### GetSequenceOk

`func (o *TemplateMarketingCityConfigType) GetSequenceOk() (*int32, bool)`

GetSequenceOk returns a tuple with the Sequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSequence

`func (o *TemplateMarketingCityConfigType) SetSequence(v int32)`

SetSequence sets Sequence field to given value.

### HasSequence

`func (o *TemplateMarketingCityConfigType) HasSequence() bool`

HasSequence returns a boolean if a field has been set.

### GetInactive

`func (o *TemplateMarketingCityConfigType) GetInactive() bool`

GetInactive returns the Inactive field if non-nil, zero value otherwise.

### GetInactiveOk

`func (o *TemplateMarketingCityConfigType) GetInactiveOk() (*bool, bool)`

GetInactiveOk returns a tuple with the Inactive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInactive

`func (o *TemplateMarketingCityConfigType) SetInactive(v bool)`

SetInactive sets Inactive field to given value.

### HasInactive

`func (o *TemplateMarketingCityConfigType) HasInactive() bool`

HasInactive returns a boolean if a field has been set.

### GetMarketingCity

`func (o *TemplateMarketingCityConfigType) GetMarketingCity() string`

GetMarketingCity returns the MarketingCity field if non-nil, zero value otherwise.

### GetMarketingCityOk

`func (o *TemplateMarketingCityConfigType) GetMarketingCityOk() (*string, bool)`

GetMarketingCityOk returns a tuple with the MarketingCity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMarketingCity

`func (o *TemplateMarketingCityConfigType) SetMarketingCity(v string)`

SetMarketingCity sets MarketingCity field to given value.

### HasMarketingCity

`func (o *TemplateMarketingCityConfigType) HasMarketingCity() bool`

HasMarketingCity returns a boolean if a field has been set.

### GetRegionCode

`func (o *TemplateMarketingCityConfigType) GetRegionCode() string`

GetRegionCode returns the RegionCode field if non-nil, zero value otherwise.

### GetRegionCodeOk

`func (o *TemplateMarketingCityConfigType) GetRegionCodeOk() (*string, bool)`

GetRegionCodeOk returns a tuple with the RegionCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRegionCode

`func (o *TemplateMarketingCityConfigType) SetRegionCode(v string)`

SetRegionCode sets RegionCode field to given value.

### HasRegionCode

`func (o *TemplateMarketingCityConfigType) HasRegionCode() bool`

HasRegionCode returns a boolean if a field has been set.

### GetNewRegionCode

`func (o *TemplateMarketingCityConfigType) GetNewRegionCode() string`

GetNewRegionCode returns the NewRegionCode field if non-nil, zero value otherwise.

### GetNewRegionCodeOk

`func (o *TemplateMarketingCityConfigType) GetNewRegionCodeOk() (*string, bool)`

GetNewRegionCodeOk returns a tuple with the NewRegionCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNewRegionCode

`func (o *TemplateMarketingCityConfigType) SetNewRegionCode(v string)`

SetNewRegionCode sets NewRegionCode field to given value.

### HasNewRegionCode

`func (o *TemplateMarketingCityConfigType) HasNewRegionCode() bool`

HasNewRegionCode returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



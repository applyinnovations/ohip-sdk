# RelativePositionType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Distance** | Pointer to **float32** | Defines the distance between two points. | [optional] 
**DistanceType** | Pointer to **string** | The unit of measure in a code format. | [optional] 
**DrivingTime** | Pointer to **string** | The driving time in a free text format. | [optional] 

## Methods

### NewRelativePositionType

`func NewRelativePositionType() *RelativePositionType`

NewRelativePositionType instantiates a new RelativePositionType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRelativePositionTypeWithDefaults

`func NewRelativePositionTypeWithDefaults() *RelativePositionType`

NewRelativePositionTypeWithDefaults instantiates a new RelativePositionType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDistance

`func (o *RelativePositionType) GetDistance() float32`

GetDistance returns the Distance field if non-nil, zero value otherwise.

### GetDistanceOk

`func (o *RelativePositionType) GetDistanceOk() (*float32, bool)`

GetDistanceOk returns a tuple with the Distance field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDistance

`func (o *RelativePositionType) SetDistance(v float32)`

SetDistance sets Distance field to given value.

### HasDistance

`func (o *RelativePositionType) HasDistance() bool`

HasDistance returns a boolean if a field has been set.

### GetDistanceType

`func (o *RelativePositionType) GetDistanceType() string`

GetDistanceType returns the DistanceType field if non-nil, zero value otherwise.

### GetDistanceTypeOk

`func (o *RelativePositionType) GetDistanceTypeOk() (*string, bool)`

GetDistanceTypeOk returns a tuple with the DistanceType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDistanceType

`func (o *RelativePositionType) SetDistanceType(v string)`

SetDistanceType sets DistanceType field to given value.

### HasDistanceType

`func (o *RelativePositionType) HasDistanceType() bool`

HasDistanceType returns a boolean if a field has been set.

### GetDrivingTime

`func (o *RelativePositionType) GetDrivingTime() string`

GetDrivingTime returns the DrivingTime field if non-nil, zero value otherwise.

### GetDrivingTimeOk

`func (o *RelativePositionType) GetDrivingTimeOk() (*string, bool)`

GetDrivingTimeOk returns a tuple with the DrivingTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDrivingTime

`func (o *RelativePositionType) SetDrivingTime(v string)`

SetDrivingTime sets DrivingTime field to given value.

### HasDrivingTime

`func (o *RelativePositionType) HasDrivingTime() bool`

HasDrivingTime returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



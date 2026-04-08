# AirportsToBeChanged

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Airports** | Pointer to [**[]AirportType**](AirportType.md) | Airport details for a hotel. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewAirportsToBeChanged

`func NewAirportsToBeChanged() *AirportsToBeChanged`

NewAirportsToBeChanged instantiates a new AirportsToBeChanged object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAirportsToBeChangedWithDefaults

`func NewAirportsToBeChangedWithDefaults() *AirportsToBeChanged`

NewAirportsToBeChangedWithDefaults instantiates a new AirportsToBeChanged object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAirports

`func (o *AirportsToBeChanged) GetAirports() []AirportType`

GetAirports returns the Airports field if non-nil, zero value otherwise.

### GetAirportsOk

`func (o *AirportsToBeChanged) GetAirportsOk() (*[]AirportType, bool)`

GetAirportsOk returns a tuple with the Airports field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAirports

`func (o *AirportsToBeChanged) SetAirports(v []AirportType)`

SetAirports sets Airports field to given value.

### HasAirports

`func (o *AirportsToBeChanged) HasAirports() bool`

HasAirports returns a boolean if a field has been set.

### GetLinks

`func (o *AirportsToBeChanged) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *AirportsToBeChanged) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *AirportsToBeChanged) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *AirportsToBeChanged) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *AirportsToBeChanged) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *AirportsToBeChanged) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *AirportsToBeChanged) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *AirportsToBeChanged) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



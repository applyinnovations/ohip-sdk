# ChangeAirportsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Airports** | Pointer to [**[]AirportType**](AirportType.md) | Airport details for a hotel. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewChangeAirportsRequest

`func NewChangeAirportsRequest() *ChangeAirportsRequest`

NewChangeAirportsRequest instantiates a new ChangeAirportsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChangeAirportsRequestWithDefaults

`func NewChangeAirportsRequestWithDefaults() *ChangeAirportsRequest`

NewChangeAirportsRequestWithDefaults instantiates a new ChangeAirportsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAirports

`func (o *ChangeAirportsRequest) GetAirports() []AirportType`

GetAirports returns the Airports field if non-nil, zero value otherwise.

### GetAirportsOk

`func (o *ChangeAirportsRequest) GetAirportsOk() (*[]AirportType, bool)`

GetAirportsOk returns a tuple with the Airports field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAirports

`func (o *ChangeAirportsRequest) SetAirports(v []AirportType)`

SetAirports sets Airports field to given value.

### HasAirports

`func (o *ChangeAirportsRequest) HasAirports() bool`

HasAirports returns a boolean if a field has been set.

### GetLinks

`func (o *ChangeAirportsRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ChangeAirportsRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ChangeAirportsRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ChangeAirportsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ChangeAirportsRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ChangeAirportsRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ChangeAirportsRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ChangeAirportsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



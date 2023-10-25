# ChangeTemplateAirportsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**TemplateAirports** | Pointer to [**[]TemplateAirportType**](TemplateAirportType.md) | Template airport details. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewChangeTemplateAirportsRequest

`func NewChangeTemplateAirportsRequest() *ChangeTemplateAirportsRequest`

NewChangeTemplateAirportsRequest instantiates a new ChangeTemplateAirportsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChangeTemplateAirportsRequestWithDefaults

`func NewChangeTemplateAirportsRequestWithDefaults() *ChangeTemplateAirportsRequest`

NewChangeTemplateAirportsRequestWithDefaults instantiates a new ChangeTemplateAirportsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *ChangeTemplateAirportsRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ChangeTemplateAirportsRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ChangeTemplateAirportsRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ChangeTemplateAirportsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetTemplateAirports

`func (o *ChangeTemplateAirportsRequest) GetTemplateAirports() []TemplateAirportType`

GetTemplateAirports returns the TemplateAirports field if non-nil, zero value otherwise.

### GetTemplateAirportsOk

`func (o *ChangeTemplateAirportsRequest) GetTemplateAirportsOk() (*[]TemplateAirportType, bool)`

GetTemplateAirportsOk returns a tuple with the TemplateAirports field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTemplateAirports

`func (o *ChangeTemplateAirportsRequest) SetTemplateAirports(v []TemplateAirportType)`

SetTemplateAirports sets TemplateAirports field to given value.

### HasTemplateAirports

`func (o *ChangeTemplateAirportsRequest) HasTemplateAirports() bool`

HasTemplateAirports returns a boolean if a field has been set.

### GetWarnings

`func (o *ChangeTemplateAirportsRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ChangeTemplateAirportsRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ChangeTemplateAirportsRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ChangeTemplateAirportsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



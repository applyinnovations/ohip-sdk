# TemplateMarketingCitiesDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TemplateMarketingCities** | Pointer to [**[]TemplateMarketingCityConfigType**](TemplateMarketingCityConfigType.md) | Template marketing city details. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewTemplateMarketingCitiesDetails

`func NewTemplateMarketingCitiesDetails() *TemplateMarketingCitiesDetails`

NewTemplateMarketingCitiesDetails instantiates a new TemplateMarketingCitiesDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTemplateMarketingCitiesDetailsWithDefaults

`func NewTemplateMarketingCitiesDetailsWithDefaults() *TemplateMarketingCitiesDetails`

NewTemplateMarketingCitiesDetailsWithDefaults instantiates a new TemplateMarketingCitiesDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTemplateMarketingCities

`func (o *TemplateMarketingCitiesDetails) GetTemplateMarketingCities() []TemplateMarketingCityConfigType`

GetTemplateMarketingCities returns the TemplateMarketingCities field if non-nil, zero value otherwise.

### GetTemplateMarketingCitiesOk

`func (o *TemplateMarketingCitiesDetails) GetTemplateMarketingCitiesOk() (*[]TemplateMarketingCityConfigType, bool)`

GetTemplateMarketingCitiesOk returns a tuple with the TemplateMarketingCities field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTemplateMarketingCities

`func (o *TemplateMarketingCitiesDetails) SetTemplateMarketingCities(v []TemplateMarketingCityConfigType)`

SetTemplateMarketingCities sets TemplateMarketingCities field to given value.

### HasTemplateMarketingCities

`func (o *TemplateMarketingCitiesDetails) HasTemplateMarketingCities() bool`

HasTemplateMarketingCities returns a boolean if a field has been set.

### GetLinks

`func (o *TemplateMarketingCitiesDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *TemplateMarketingCitiesDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *TemplateMarketingCitiesDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *TemplateMarketingCitiesDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *TemplateMarketingCitiesDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *TemplateMarketingCitiesDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *TemplateMarketingCitiesDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *TemplateMarketingCitiesDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



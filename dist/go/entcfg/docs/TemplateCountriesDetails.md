# TemplateCountriesDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TemplateCountries** | Pointer to [**[]TemplateCountryType**](TemplateCountryType.md) | Template of country details. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewTemplateCountriesDetails

`func NewTemplateCountriesDetails() *TemplateCountriesDetails`

NewTemplateCountriesDetails instantiates a new TemplateCountriesDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTemplateCountriesDetailsWithDefaults

`func NewTemplateCountriesDetailsWithDefaults() *TemplateCountriesDetails`

NewTemplateCountriesDetailsWithDefaults instantiates a new TemplateCountriesDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTemplateCountries

`func (o *TemplateCountriesDetails) GetTemplateCountries() []TemplateCountryType`

GetTemplateCountries returns the TemplateCountries field if non-nil, zero value otherwise.

### GetTemplateCountriesOk

`func (o *TemplateCountriesDetails) GetTemplateCountriesOk() (*[]TemplateCountryType, bool)`

GetTemplateCountriesOk returns a tuple with the TemplateCountries field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTemplateCountries

`func (o *TemplateCountriesDetails) SetTemplateCountries(v []TemplateCountryType)`

SetTemplateCountries sets TemplateCountries field to given value.

### HasTemplateCountries

`func (o *TemplateCountriesDetails) HasTemplateCountries() bool`

HasTemplateCountries returns a boolean if a field has been set.

### GetLinks

`func (o *TemplateCountriesDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *TemplateCountriesDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *TemplateCountriesDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *TemplateCountriesDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *TemplateCountriesDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *TemplateCountriesDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *TemplateCountriesDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *TemplateCountriesDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



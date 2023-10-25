# ChangeTemplateCountriesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**TemplateCountries** | Pointer to [**[]TemplateCountryType**](TemplateCountryType.md) | Template of country details. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewChangeTemplateCountriesRequest

`func NewChangeTemplateCountriesRequest() *ChangeTemplateCountriesRequest`

NewChangeTemplateCountriesRequest instantiates a new ChangeTemplateCountriesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChangeTemplateCountriesRequestWithDefaults

`func NewChangeTemplateCountriesRequestWithDefaults() *ChangeTemplateCountriesRequest`

NewChangeTemplateCountriesRequestWithDefaults instantiates a new ChangeTemplateCountriesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *ChangeTemplateCountriesRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ChangeTemplateCountriesRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ChangeTemplateCountriesRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ChangeTemplateCountriesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetTemplateCountries

`func (o *ChangeTemplateCountriesRequest) GetTemplateCountries() []TemplateCountryType`

GetTemplateCountries returns the TemplateCountries field if non-nil, zero value otherwise.

### GetTemplateCountriesOk

`func (o *ChangeTemplateCountriesRequest) GetTemplateCountriesOk() (*[]TemplateCountryType, bool)`

GetTemplateCountriesOk returns a tuple with the TemplateCountries field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTemplateCountries

`func (o *ChangeTemplateCountriesRequest) SetTemplateCountries(v []TemplateCountryType)`

SetTemplateCountries sets TemplateCountries field to given value.

### HasTemplateCountries

`func (o *ChangeTemplateCountriesRequest) HasTemplateCountries() bool`

HasTemplateCountries returns a boolean if a field has been set.

### GetWarnings

`func (o *ChangeTemplateCountriesRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ChangeTemplateCountriesRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ChangeTemplateCountriesRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ChangeTemplateCountriesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



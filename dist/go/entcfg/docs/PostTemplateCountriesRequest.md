# PostTemplateCountriesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**TemplateCountries** | Pointer to [**[]TemplateCountryType**](TemplateCountryType.md) | Template of country details. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPostTemplateCountriesRequest

`func NewPostTemplateCountriesRequest() *PostTemplateCountriesRequest`

NewPostTemplateCountriesRequest instantiates a new PostTemplateCountriesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostTemplateCountriesRequestWithDefaults

`func NewPostTemplateCountriesRequestWithDefaults() *PostTemplateCountriesRequest`

NewPostTemplateCountriesRequestWithDefaults instantiates a new PostTemplateCountriesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *PostTemplateCountriesRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostTemplateCountriesRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostTemplateCountriesRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostTemplateCountriesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetTemplateCountries

`func (o *PostTemplateCountriesRequest) GetTemplateCountries() []TemplateCountryType`

GetTemplateCountries returns the TemplateCountries field if non-nil, zero value otherwise.

### GetTemplateCountriesOk

`func (o *PostTemplateCountriesRequest) GetTemplateCountriesOk() (*[]TemplateCountryType, bool)`

GetTemplateCountriesOk returns a tuple with the TemplateCountries field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTemplateCountries

`func (o *PostTemplateCountriesRequest) SetTemplateCountries(v []TemplateCountryType)`

SetTemplateCountries sets TemplateCountries field to given value.

### HasTemplateCountries

`func (o *PostTemplateCountriesRequest) HasTemplateCountries() bool`

HasTemplateCountries returns a boolean if a field has been set.

### GetWarnings

`func (o *PostTemplateCountriesRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostTemplateCountriesRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostTemplateCountriesRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostTemplateCountriesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# PostTemplateMarketingCitiesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**TemplateMarketingCities** | Pointer to [**[]TemplateMarketingCityConfigType**](TemplateMarketingCityConfigType.md) | Template marketing city details. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPostTemplateMarketingCitiesRequest

`func NewPostTemplateMarketingCitiesRequest() *PostTemplateMarketingCitiesRequest`

NewPostTemplateMarketingCitiesRequest instantiates a new PostTemplateMarketingCitiesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostTemplateMarketingCitiesRequestWithDefaults

`func NewPostTemplateMarketingCitiesRequestWithDefaults() *PostTemplateMarketingCitiesRequest`

NewPostTemplateMarketingCitiesRequestWithDefaults instantiates a new PostTemplateMarketingCitiesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *PostTemplateMarketingCitiesRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostTemplateMarketingCitiesRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostTemplateMarketingCitiesRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostTemplateMarketingCitiesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetTemplateMarketingCities

`func (o *PostTemplateMarketingCitiesRequest) GetTemplateMarketingCities() []TemplateMarketingCityConfigType`

GetTemplateMarketingCities returns the TemplateMarketingCities field if non-nil, zero value otherwise.

### GetTemplateMarketingCitiesOk

`func (o *PostTemplateMarketingCitiesRequest) GetTemplateMarketingCitiesOk() (*[]TemplateMarketingCityConfigType, bool)`

GetTemplateMarketingCitiesOk returns a tuple with the TemplateMarketingCities field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTemplateMarketingCities

`func (o *PostTemplateMarketingCitiesRequest) SetTemplateMarketingCities(v []TemplateMarketingCityConfigType)`

SetTemplateMarketingCities sets TemplateMarketingCities field to given value.

### HasTemplateMarketingCities

`func (o *PostTemplateMarketingCitiesRequest) HasTemplateMarketingCities() bool`

HasTemplateMarketingCities returns a boolean if a field has been set.

### GetWarnings

`func (o *PostTemplateMarketingCitiesRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostTemplateMarketingCitiesRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostTemplateMarketingCitiesRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostTemplateMarketingCitiesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



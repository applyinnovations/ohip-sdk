# MarketingCitiesCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**MarketingCities** | Pointer to [**[]MarketingCityConfigType**](MarketingCityConfigType.md) | Marketing city details for a hotel. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewMarketingCitiesCriteria

`func NewMarketingCitiesCriteria() *MarketingCitiesCriteria`

NewMarketingCitiesCriteria instantiates a new MarketingCitiesCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMarketingCitiesCriteriaWithDefaults

`func NewMarketingCitiesCriteriaWithDefaults() *MarketingCitiesCriteria`

NewMarketingCitiesCriteriaWithDefaults instantiates a new MarketingCitiesCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *MarketingCitiesCriteria) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *MarketingCitiesCriteria) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *MarketingCitiesCriteria) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *MarketingCitiesCriteria) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetMarketingCities

`func (o *MarketingCitiesCriteria) GetMarketingCities() []MarketingCityConfigType`

GetMarketingCities returns the MarketingCities field if non-nil, zero value otherwise.

### GetMarketingCitiesOk

`func (o *MarketingCitiesCriteria) GetMarketingCitiesOk() (*[]MarketingCityConfigType, bool)`

GetMarketingCitiesOk returns a tuple with the MarketingCities field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMarketingCities

`func (o *MarketingCitiesCriteria) SetMarketingCities(v []MarketingCityConfigType)`

SetMarketingCities sets MarketingCities field to given value.

### HasMarketingCities

`func (o *MarketingCitiesCriteria) HasMarketingCities() bool`

HasMarketingCities returns a boolean if a field has been set.

### GetWarnings

`func (o *MarketingCitiesCriteria) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *MarketingCitiesCriteria) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *MarketingCitiesCriteria) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *MarketingCitiesCriteria) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



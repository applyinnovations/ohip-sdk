# MarketingCitiesByRegionDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**MarketingCities** | Pointer to [**[]RegionType**](RegionType.md) | List of Regions. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewMarketingCitiesByRegionDetails

`func NewMarketingCitiesByRegionDetails() *MarketingCitiesByRegionDetails`

NewMarketingCitiesByRegionDetails instantiates a new MarketingCitiesByRegionDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMarketingCitiesByRegionDetailsWithDefaults

`func NewMarketingCitiesByRegionDetailsWithDefaults() *MarketingCitiesByRegionDetails`

NewMarketingCitiesByRegionDetailsWithDefaults instantiates a new MarketingCitiesByRegionDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *MarketingCitiesByRegionDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *MarketingCitiesByRegionDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *MarketingCitiesByRegionDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *MarketingCitiesByRegionDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetMarketingCities

`func (o *MarketingCitiesByRegionDetails) GetMarketingCities() []RegionType`

GetMarketingCities returns the MarketingCities field if non-nil, zero value otherwise.

### GetMarketingCitiesOk

`func (o *MarketingCitiesByRegionDetails) GetMarketingCitiesOk() (*[]RegionType, bool)`

GetMarketingCitiesOk returns a tuple with the MarketingCities field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMarketingCities

`func (o *MarketingCitiesByRegionDetails) SetMarketingCities(v []RegionType)`

SetMarketingCities sets MarketingCities field to given value.

### HasMarketingCities

`func (o *MarketingCitiesByRegionDetails) HasMarketingCities() bool`

HasMarketingCities returns a boolean if a field has been set.

### GetWarnings

`func (o *MarketingCitiesByRegionDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *MarketingCitiesByRegionDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *MarketingCitiesByRegionDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *MarketingCitiesByRegionDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



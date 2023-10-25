# MarketingRegionsCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**MarketingRegions** | Pointer to [**[]MarketingRegionType**](MarketingRegionType.md) | List of Marketing Regions. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewMarketingRegionsCriteria

`func NewMarketingRegionsCriteria() *MarketingRegionsCriteria`

NewMarketingRegionsCriteria instantiates a new MarketingRegionsCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMarketingRegionsCriteriaWithDefaults

`func NewMarketingRegionsCriteriaWithDefaults() *MarketingRegionsCriteria`

NewMarketingRegionsCriteriaWithDefaults instantiates a new MarketingRegionsCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *MarketingRegionsCriteria) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *MarketingRegionsCriteria) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *MarketingRegionsCriteria) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *MarketingRegionsCriteria) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetMarketingRegions

`func (o *MarketingRegionsCriteria) GetMarketingRegions() []MarketingRegionType`

GetMarketingRegions returns the MarketingRegions field if non-nil, zero value otherwise.

### GetMarketingRegionsOk

`func (o *MarketingRegionsCriteria) GetMarketingRegionsOk() (*[]MarketingRegionType, bool)`

GetMarketingRegionsOk returns a tuple with the MarketingRegions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMarketingRegions

`func (o *MarketingRegionsCriteria) SetMarketingRegions(v []MarketingRegionType)`

SetMarketingRegions sets MarketingRegions field to given value.

### HasMarketingRegions

`func (o *MarketingRegionsCriteria) HasMarketingRegions() bool`

HasMarketingRegions returns a boolean if a field has been set.

### GetWarnings

`func (o *MarketingRegionsCriteria) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *MarketingRegionsCriteria) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *MarketingRegionsCriteria) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *MarketingRegionsCriteria) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



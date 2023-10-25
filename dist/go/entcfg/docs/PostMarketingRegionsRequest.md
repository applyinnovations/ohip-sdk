# PostMarketingRegionsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**MarketingRegions** | Pointer to [**[]MarketingRegionType**](MarketingRegionType.md) | List of Marketing Regions. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPostMarketingRegionsRequest

`func NewPostMarketingRegionsRequest() *PostMarketingRegionsRequest`

NewPostMarketingRegionsRequest instantiates a new PostMarketingRegionsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostMarketingRegionsRequestWithDefaults

`func NewPostMarketingRegionsRequestWithDefaults() *PostMarketingRegionsRequest`

NewPostMarketingRegionsRequestWithDefaults instantiates a new PostMarketingRegionsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *PostMarketingRegionsRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostMarketingRegionsRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostMarketingRegionsRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostMarketingRegionsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetMarketingRegions

`func (o *PostMarketingRegionsRequest) GetMarketingRegions() []MarketingRegionType`

GetMarketingRegions returns the MarketingRegions field if non-nil, zero value otherwise.

### GetMarketingRegionsOk

`func (o *PostMarketingRegionsRequest) GetMarketingRegionsOk() (*[]MarketingRegionType, bool)`

GetMarketingRegionsOk returns a tuple with the MarketingRegions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMarketingRegions

`func (o *PostMarketingRegionsRequest) SetMarketingRegions(v []MarketingRegionType)`

SetMarketingRegions sets MarketingRegions field to given value.

### HasMarketingRegions

`func (o *PostMarketingRegionsRequest) HasMarketingRegions() bool`

HasMarketingRegions returns a boolean if a field has been set.

### GetWarnings

`func (o *PostMarketingRegionsRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostMarketingRegionsRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostMarketingRegionsRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostMarketingRegionsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



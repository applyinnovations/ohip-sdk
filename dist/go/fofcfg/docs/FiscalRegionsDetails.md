# FiscalRegionsDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FiscalRegions** | Pointer to [**[]FiscalRegionType**](FiscalRegionType.md) | List of Fiscal Regions. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewFiscalRegionsDetails

`func NewFiscalRegionsDetails() *FiscalRegionsDetails`

NewFiscalRegionsDetails instantiates a new FiscalRegionsDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFiscalRegionsDetailsWithDefaults

`func NewFiscalRegionsDetailsWithDefaults() *FiscalRegionsDetails`

NewFiscalRegionsDetailsWithDefaults instantiates a new FiscalRegionsDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFiscalRegions

`func (o *FiscalRegionsDetails) GetFiscalRegions() []FiscalRegionType`

GetFiscalRegions returns the FiscalRegions field if non-nil, zero value otherwise.

### GetFiscalRegionsOk

`func (o *FiscalRegionsDetails) GetFiscalRegionsOk() (*[]FiscalRegionType, bool)`

GetFiscalRegionsOk returns a tuple with the FiscalRegions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFiscalRegions

`func (o *FiscalRegionsDetails) SetFiscalRegions(v []FiscalRegionType)`

SetFiscalRegions sets FiscalRegions field to given value.

### HasFiscalRegions

`func (o *FiscalRegionsDetails) HasFiscalRegions() bool`

HasFiscalRegions returns a boolean if a field has been set.

### GetLinks

`func (o *FiscalRegionsDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *FiscalRegionsDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *FiscalRegionsDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *FiscalRegionsDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *FiscalRegionsDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *FiscalRegionsDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *FiscalRegionsDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *FiscalRegionsDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



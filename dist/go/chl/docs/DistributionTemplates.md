# DistributionTemplates

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DistributionTemplates** | Pointer to [**[]DistributionTemplateType**](DistributionTemplateType.md) | Information about a distribution template. | [optional] 
**HotelsDistributionTemplates** | Pointer to [**[]HotelDistributionTemplatesType**](HotelDistributionTemplatesType.md) | Information about a hotel level distribution template. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewDistributionTemplates

`func NewDistributionTemplates() *DistributionTemplates`

NewDistributionTemplates instantiates a new DistributionTemplates object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDistributionTemplatesWithDefaults

`func NewDistributionTemplatesWithDefaults() *DistributionTemplates`

NewDistributionTemplatesWithDefaults instantiates a new DistributionTemplates object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDistributionTemplates

`func (o *DistributionTemplates) GetDistributionTemplates() []DistributionTemplateType`

GetDistributionTemplates returns the DistributionTemplates field if non-nil, zero value otherwise.

### GetDistributionTemplatesOk

`func (o *DistributionTemplates) GetDistributionTemplatesOk() (*[]DistributionTemplateType, bool)`

GetDistributionTemplatesOk returns a tuple with the DistributionTemplates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDistributionTemplates

`func (o *DistributionTemplates) SetDistributionTemplates(v []DistributionTemplateType)`

SetDistributionTemplates sets DistributionTemplates field to given value.

### HasDistributionTemplates

`func (o *DistributionTemplates) HasDistributionTemplates() bool`

HasDistributionTemplates returns a boolean if a field has been set.

### GetHotelsDistributionTemplates

`func (o *DistributionTemplates) GetHotelsDistributionTemplates() []HotelDistributionTemplatesType`

GetHotelsDistributionTemplates returns the HotelsDistributionTemplates field if non-nil, zero value otherwise.

### GetHotelsDistributionTemplatesOk

`func (o *DistributionTemplates) GetHotelsDistributionTemplatesOk() (*[]HotelDistributionTemplatesType, bool)`

GetHotelsDistributionTemplatesOk returns a tuple with the HotelsDistributionTemplates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelsDistributionTemplates

`func (o *DistributionTemplates) SetHotelsDistributionTemplates(v []HotelDistributionTemplatesType)`

SetHotelsDistributionTemplates sets HotelsDistributionTemplates field to given value.

### HasHotelsDistributionTemplates

`func (o *DistributionTemplates) HasHotelsDistributionTemplates() bool`

HasHotelsDistributionTemplates returns a boolean if a field has been set.

### GetLinks

`func (o *DistributionTemplates) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *DistributionTemplates) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *DistributionTemplates) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *DistributionTemplates) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *DistributionTemplates) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *DistributionTemplates) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *DistributionTemplates) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *DistributionTemplates) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



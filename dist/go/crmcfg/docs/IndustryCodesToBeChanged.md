# IndustryCodesToBeChanged

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IndustryCodes** | Pointer to [**[]IndustryCodeType**](IndustryCodeType.md) | List of Industry Codes. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewIndustryCodesToBeChanged

`func NewIndustryCodesToBeChanged() *IndustryCodesToBeChanged`

NewIndustryCodesToBeChanged instantiates a new IndustryCodesToBeChanged object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIndustryCodesToBeChangedWithDefaults

`func NewIndustryCodesToBeChangedWithDefaults() *IndustryCodesToBeChanged`

NewIndustryCodesToBeChangedWithDefaults instantiates a new IndustryCodesToBeChanged object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIndustryCodes

`func (o *IndustryCodesToBeChanged) GetIndustryCodes() []IndustryCodeType`

GetIndustryCodes returns the IndustryCodes field if non-nil, zero value otherwise.

### GetIndustryCodesOk

`func (o *IndustryCodesToBeChanged) GetIndustryCodesOk() (*[]IndustryCodeType, bool)`

GetIndustryCodesOk returns a tuple with the IndustryCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIndustryCodes

`func (o *IndustryCodesToBeChanged) SetIndustryCodes(v []IndustryCodeType)`

SetIndustryCodes sets IndustryCodes field to given value.

### HasIndustryCodes

`func (o *IndustryCodesToBeChanged) HasIndustryCodes() bool`

HasIndustryCodes returns a boolean if a field has been set.

### GetLinks

`func (o *IndustryCodesToBeChanged) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *IndustryCodesToBeChanged) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *IndustryCodesToBeChanged) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *IndustryCodesToBeChanged) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *IndustryCodesToBeChanged) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *IndustryCodesToBeChanged) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *IndustryCodesToBeChanged) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *IndustryCodesToBeChanged) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



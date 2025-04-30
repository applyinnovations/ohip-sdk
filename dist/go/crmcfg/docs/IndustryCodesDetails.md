# IndustryCodesDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IndustryCodes** | Pointer to [**[]IndustryCodeType**](IndustryCodeType.md) | List of Industry Codes. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewIndustryCodesDetails

`func NewIndustryCodesDetails() *IndustryCodesDetails`

NewIndustryCodesDetails instantiates a new IndustryCodesDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIndustryCodesDetailsWithDefaults

`func NewIndustryCodesDetailsWithDefaults() *IndustryCodesDetails`

NewIndustryCodesDetailsWithDefaults instantiates a new IndustryCodesDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIndustryCodes

`func (o *IndustryCodesDetails) GetIndustryCodes() []IndustryCodeType`

GetIndustryCodes returns the IndustryCodes field if non-nil, zero value otherwise.

### GetIndustryCodesOk

`func (o *IndustryCodesDetails) GetIndustryCodesOk() (*[]IndustryCodeType, bool)`

GetIndustryCodesOk returns a tuple with the IndustryCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIndustryCodes

`func (o *IndustryCodesDetails) SetIndustryCodes(v []IndustryCodeType)`

SetIndustryCodes sets IndustryCodes field to given value.

### HasIndustryCodes

`func (o *IndustryCodesDetails) HasIndustryCodes() bool`

HasIndustryCodes returns a boolean if a field has been set.

### GetLinks

`func (o *IndustryCodesDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *IndustryCodesDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *IndustryCodesDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *IndustryCodesDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *IndustryCodesDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *IndustryCodesDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *IndustryCodesDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *IndustryCodesDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



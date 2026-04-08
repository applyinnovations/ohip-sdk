# LocatorCodesTemplate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**LocatorCodes** | Pointer to [**[]LocatorCodeTemplateType**](LocatorCodeTemplateType.md) | Collection of locator codes. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewLocatorCodesTemplate

`func NewLocatorCodesTemplate() *LocatorCodesTemplate`

NewLocatorCodesTemplate instantiates a new LocatorCodesTemplate object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewLocatorCodesTemplateWithDefaults

`func NewLocatorCodesTemplateWithDefaults() *LocatorCodesTemplate`

NewLocatorCodesTemplateWithDefaults instantiates a new LocatorCodesTemplate object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLocatorCodes

`func (o *LocatorCodesTemplate) GetLocatorCodes() []LocatorCodeTemplateType`

GetLocatorCodes returns the LocatorCodes field if non-nil, zero value otherwise.

### GetLocatorCodesOk

`func (o *LocatorCodesTemplate) GetLocatorCodesOk() (*[]LocatorCodeTemplateType, bool)`

GetLocatorCodesOk returns a tuple with the LocatorCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLocatorCodes

`func (o *LocatorCodesTemplate) SetLocatorCodes(v []LocatorCodeTemplateType)`

SetLocatorCodes sets LocatorCodes field to given value.

### HasLocatorCodes

`func (o *LocatorCodesTemplate) HasLocatorCodes() bool`

HasLocatorCodes returns a boolean if a field has been set.

### GetLinks

`func (o *LocatorCodesTemplate) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *LocatorCodesTemplate) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *LocatorCodesTemplate) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *LocatorCodesTemplate) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *LocatorCodesTemplate) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *LocatorCodesTemplate) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *LocatorCodesTemplate) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *LocatorCodesTemplate) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



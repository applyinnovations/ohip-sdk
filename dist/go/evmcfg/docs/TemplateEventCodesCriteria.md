# TemplateEventCodesCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TemplateEventCodes** | Pointer to [**[]TemplateEventCodeType**](TemplateEventCodeType.md) | Details for Event Code at template level. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewTemplateEventCodesCriteria

`func NewTemplateEventCodesCriteria() *TemplateEventCodesCriteria`

NewTemplateEventCodesCriteria instantiates a new TemplateEventCodesCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTemplateEventCodesCriteriaWithDefaults

`func NewTemplateEventCodesCriteriaWithDefaults() *TemplateEventCodesCriteria`

NewTemplateEventCodesCriteriaWithDefaults instantiates a new TemplateEventCodesCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTemplateEventCodes

`func (o *TemplateEventCodesCriteria) GetTemplateEventCodes() []TemplateEventCodeType`

GetTemplateEventCodes returns the TemplateEventCodes field if non-nil, zero value otherwise.

### GetTemplateEventCodesOk

`func (o *TemplateEventCodesCriteria) GetTemplateEventCodesOk() (*[]TemplateEventCodeType, bool)`

GetTemplateEventCodesOk returns a tuple with the TemplateEventCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTemplateEventCodes

`func (o *TemplateEventCodesCriteria) SetTemplateEventCodes(v []TemplateEventCodeType)`

SetTemplateEventCodes sets TemplateEventCodes field to given value.

### HasTemplateEventCodes

`func (o *TemplateEventCodesCriteria) HasTemplateEventCodes() bool`

HasTemplateEventCodes returns a boolean if a field has been set.

### GetLinks

`func (o *TemplateEventCodesCriteria) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *TemplateEventCodesCriteria) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *TemplateEventCodesCriteria) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *TemplateEventCodesCriteria) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *TemplateEventCodesCriteria) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *TemplateEventCodesCriteria) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *TemplateEventCodesCriteria) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *TemplateEventCodesCriteria) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



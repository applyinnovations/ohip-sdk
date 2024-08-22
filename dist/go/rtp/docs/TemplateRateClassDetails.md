# TemplateRateClassDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**TemplateRateClasses** | Pointer to [**[]TemplateRateClassType**](TemplateRateClassType.md) | Collection of template rate classes. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewTemplateRateClassDetails

`func NewTemplateRateClassDetails() *TemplateRateClassDetails`

NewTemplateRateClassDetails instantiates a new TemplateRateClassDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTemplateRateClassDetailsWithDefaults

`func NewTemplateRateClassDetailsWithDefaults() *TemplateRateClassDetails`

NewTemplateRateClassDetailsWithDefaults instantiates a new TemplateRateClassDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *TemplateRateClassDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *TemplateRateClassDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *TemplateRateClassDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *TemplateRateClassDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetTemplateRateClasses

`func (o *TemplateRateClassDetails) GetTemplateRateClasses() []TemplateRateClassType`

GetTemplateRateClasses returns the TemplateRateClasses field if non-nil, zero value otherwise.

### GetTemplateRateClassesOk

`func (o *TemplateRateClassDetails) GetTemplateRateClassesOk() (*[]TemplateRateClassType, bool)`

GetTemplateRateClassesOk returns a tuple with the TemplateRateClasses field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTemplateRateClasses

`func (o *TemplateRateClassDetails) SetTemplateRateClasses(v []TemplateRateClassType)`

SetTemplateRateClasses sets TemplateRateClasses field to given value.

### HasTemplateRateClasses

`func (o *TemplateRateClassDetails) HasTemplateRateClasses() bool`

HasTemplateRateClasses returns a boolean if a field has been set.

### GetWarnings

`func (o *TemplateRateClassDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *TemplateRateClassDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *TemplateRateClassDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *TemplateRateClassDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# TemplateExclusivePreferences

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TemplateExclusivePreferences** | Pointer to [**[]ConfigExclusivePreferenceBaseType**](ConfigExclusivePreferenceBaseType.md) | Base details common between both template and property level exclusive preferences. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewTemplateExclusivePreferences

`func NewTemplateExclusivePreferences() *TemplateExclusivePreferences`

NewTemplateExclusivePreferences instantiates a new TemplateExclusivePreferences object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTemplateExclusivePreferencesWithDefaults

`func NewTemplateExclusivePreferencesWithDefaults() *TemplateExclusivePreferences`

NewTemplateExclusivePreferencesWithDefaults instantiates a new TemplateExclusivePreferences object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTemplateExclusivePreferences

`func (o *TemplateExclusivePreferences) GetTemplateExclusivePreferences() []ConfigExclusivePreferenceBaseType`

GetTemplateExclusivePreferences returns the TemplateExclusivePreferences field if non-nil, zero value otherwise.

### GetTemplateExclusivePreferencesOk

`func (o *TemplateExclusivePreferences) GetTemplateExclusivePreferencesOk() (*[]ConfigExclusivePreferenceBaseType, bool)`

GetTemplateExclusivePreferencesOk returns a tuple with the TemplateExclusivePreferences field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTemplateExclusivePreferences

`func (o *TemplateExclusivePreferences) SetTemplateExclusivePreferences(v []ConfigExclusivePreferenceBaseType)`

SetTemplateExclusivePreferences sets TemplateExclusivePreferences field to given value.

### HasTemplateExclusivePreferences

`func (o *TemplateExclusivePreferences) HasTemplateExclusivePreferences() bool`

HasTemplateExclusivePreferences returns a boolean if a field has been set.

### GetLinks

`func (o *TemplateExclusivePreferences) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *TemplateExclusivePreferences) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *TemplateExclusivePreferences) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *TemplateExclusivePreferences) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *TemplateExclusivePreferences) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *TemplateExclusivePreferences) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *TemplateExclusivePreferences) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *TemplateExclusivePreferences) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



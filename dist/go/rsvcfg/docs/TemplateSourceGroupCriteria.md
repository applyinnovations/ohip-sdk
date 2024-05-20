# TemplateSourceGroupCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**TemplateSourceGroup** | Pointer to [**TemplateSourceGroupType**](TemplateSourceGroupType.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewTemplateSourceGroupCriteria

`func NewTemplateSourceGroupCriteria() *TemplateSourceGroupCriteria`

NewTemplateSourceGroupCriteria instantiates a new TemplateSourceGroupCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTemplateSourceGroupCriteriaWithDefaults

`func NewTemplateSourceGroupCriteriaWithDefaults() *TemplateSourceGroupCriteria`

NewTemplateSourceGroupCriteriaWithDefaults instantiates a new TemplateSourceGroupCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *TemplateSourceGroupCriteria) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *TemplateSourceGroupCriteria) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *TemplateSourceGroupCriteria) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *TemplateSourceGroupCriteria) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetTemplateSourceGroup

`func (o *TemplateSourceGroupCriteria) GetTemplateSourceGroup() TemplateSourceGroupType`

GetTemplateSourceGroup returns the TemplateSourceGroup field if non-nil, zero value otherwise.

### GetTemplateSourceGroupOk

`func (o *TemplateSourceGroupCriteria) GetTemplateSourceGroupOk() (*TemplateSourceGroupType, bool)`

GetTemplateSourceGroupOk returns a tuple with the TemplateSourceGroup field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTemplateSourceGroup

`func (o *TemplateSourceGroupCriteria) SetTemplateSourceGroup(v TemplateSourceGroupType)`

SetTemplateSourceGroup sets TemplateSourceGroup field to given value.

### HasTemplateSourceGroup

`func (o *TemplateSourceGroupCriteria) HasTemplateSourceGroup() bool`

HasTemplateSourceGroup returns a boolean if a field has been set.

### GetWarnings

`func (o *TemplateSourceGroupCriteria) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *TemplateSourceGroupCriteria) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *TemplateSourceGroupCriteria) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *TemplateSourceGroupCriteria) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



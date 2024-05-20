# TemplateMarketGroupCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**TemplateMarketGroup** | Pointer to [**TemplateMarketGroupType**](TemplateMarketGroupType.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewTemplateMarketGroupCriteria

`func NewTemplateMarketGroupCriteria() *TemplateMarketGroupCriteria`

NewTemplateMarketGroupCriteria instantiates a new TemplateMarketGroupCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTemplateMarketGroupCriteriaWithDefaults

`func NewTemplateMarketGroupCriteriaWithDefaults() *TemplateMarketGroupCriteria`

NewTemplateMarketGroupCriteriaWithDefaults instantiates a new TemplateMarketGroupCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *TemplateMarketGroupCriteria) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *TemplateMarketGroupCriteria) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *TemplateMarketGroupCriteria) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *TemplateMarketGroupCriteria) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetTemplateMarketGroup

`func (o *TemplateMarketGroupCriteria) GetTemplateMarketGroup() TemplateMarketGroupType`

GetTemplateMarketGroup returns the TemplateMarketGroup field if non-nil, zero value otherwise.

### GetTemplateMarketGroupOk

`func (o *TemplateMarketGroupCriteria) GetTemplateMarketGroupOk() (*TemplateMarketGroupType, bool)`

GetTemplateMarketGroupOk returns a tuple with the TemplateMarketGroup field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTemplateMarketGroup

`func (o *TemplateMarketGroupCriteria) SetTemplateMarketGroup(v TemplateMarketGroupType)`

SetTemplateMarketGroup sets TemplateMarketGroup field to given value.

### HasTemplateMarketGroup

`func (o *TemplateMarketGroupCriteria) HasTemplateMarketGroup() bool`

HasTemplateMarketGroup returns a boolean if a field has been set.

### GetWarnings

`func (o *TemplateMarketGroupCriteria) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *TemplateMarketGroupCriteria) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *TemplateMarketGroupCriteria) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *TemplateMarketGroupCriteria) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



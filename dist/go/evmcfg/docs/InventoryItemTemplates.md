# InventoryItemTemplates

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**InventoryItemTemplates** | Pointer to [**[]InventoryItemTemplateType**](InventoryItemTemplateType.md) | This type holds a collection of inventory item templates. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewInventoryItemTemplates

`func NewInventoryItemTemplates() *InventoryItemTemplates`

NewInventoryItemTemplates instantiates a new InventoryItemTemplates object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewInventoryItemTemplatesWithDefaults

`func NewInventoryItemTemplatesWithDefaults() *InventoryItemTemplates`

NewInventoryItemTemplatesWithDefaults instantiates a new InventoryItemTemplates object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetInventoryItemTemplates

`func (o *InventoryItemTemplates) GetInventoryItemTemplates() []InventoryItemTemplateType`

GetInventoryItemTemplates returns the InventoryItemTemplates field if non-nil, zero value otherwise.

### GetInventoryItemTemplatesOk

`func (o *InventoryItemTemplates) GetInventoryItemTemplatesOk() (*[]InventoryItemTemplateType, bool)`

GetInventoryItemTemplatesOk returns a tuple with the InventoryItemTemplates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInventoryItemTemplates

`func (o *InventoryItemTemplates) SetInventoryItemTemplates(v []InventoryItemTemplateType)`

SetInventoryItemTemplates sets InventoryItemTemplates field to given value.

### HasInventoryItemTemplates

`func (o *InventoryItemTemplates) HasInventoryItemTemplates() bool`

HasInventoryItemTemplates returns a boolean if a field has been set.

### GetLinks

`func (o *InventoryItemTemplates) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *InventoryItemTemplates) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *InventoryItemTemplates) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *InventoryItemTemplates) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *InventoryItemTemplates) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *InventoryItemTemplates) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *InventoryItemTemplates) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *InventoryItemTemplates) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



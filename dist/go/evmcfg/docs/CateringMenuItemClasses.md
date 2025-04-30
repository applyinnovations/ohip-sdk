# CateringMenuItemClasses

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MenuItemClasses** | Pointer to [**[]CateringMenuItemClassType**](CateringMenuItemClassType.md) | List of Values of Menu Item Class. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewCateringMenuItemClasses

`func NewCateringMenuItemClasses() *CateringMenuItemClasses`

NewCateringMenuItemClasses instantiates a new CateringMenuItemClasses object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCateringMenuItemClassesWithDefaults

`func NewCateringMenuItemClassesWithDefaults() *CateringMenuItemClasses`

NewCateringMenuItemClassesWithDefaults instantiates a new CateringMenuItemClasses object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMenuItemClasses

`func (o *CateringMenuItemClasses) GetMenuItemClasses() []CateringMenuItemClassType`

GetMenuItemClasses returns the MenuItemClasses field if non-nil, zero value otherwise.

### GetMenuItemClassesOk

`func (o *CateringMenuItemClasses) GetMenuItemClassesOk() (*[]CateringMenuItemClassType, bool)`

GetMenuItemClassesOk returns a tuple with the MenuItemClasses field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMenuItemClasses

`func (o *CateringMenuItemClasses) SetMenuItemClasses(v []CateringMenuItemClassType)`

SetMenuItemClasses sets MenuItemClasses field to given value.

### HasMenuItemClasses

`func (o *CateringMenuItemClasses) HasMenuItemClasses() bool`

HasMenuItemClasses returns a boolean if a field has been set.

### GetLinks

`func (o *CateringMenuItemClasses) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CateringMenuItemClasses) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CateringMenuItemClasses) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CateringMenuItemClasses) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *CateringMenuItemClasses) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CateringMenuItemClasses) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CateringMenuItemClasses) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CateringMenuItemClasses) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



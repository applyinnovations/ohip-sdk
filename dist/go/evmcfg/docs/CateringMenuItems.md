# CateringMenuItems

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CateringMenuItems** | Pointer to [**[]CateringMenuItemType**](CateringMenuItemType.md) | List of Values of Menu Item. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewCateringMenuItems

`func NewCateringMenuItems() *CateringMenuItems`

NewCateringMenuItems instantiates a new CateringMenuItems object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCateringMenuItemsWithDefaults

`func NewCateringMenuItemsWithDefaults() *CateringMenuItems`

NewCateringMenuItemsWithDefaults instantiates a new CateringMenuItems object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCateringMenuItems

`func (o *CateringMenuItems) GetCateringMenuItems() []CateringMenuItemType`

GetCateringMenuItems returns the CateringMenuItems field if non-nil, zero value otherwise.

### GetCateringMenuItemsOk

`func (o *CateringMenuItems) GetCateringMenuItemsOk() (*[]CateringMenuItemType, bool)`

GetCateringMenuItemsOk returns a tuple with the CateringMenuItems field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCateringMenuItems

`func (o *CateringMenuItems) SetCateringMenuItems(v []CateringMenuItemType)`

SetCateringMenuItems sets CateringMenuItems field to given value.

### HasCateringMenuItems

`func (o *CateringMenuItems) HasCateringMenuItems() bool`

HasCateringMenuItems returns a boolean if a field has been set.

### GetLinks

`func (o *CateringMenuItems) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CateringMenuItems) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CateringMenuItems) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CateringMenuItems) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *CateringMenuItems) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CateringMenuItems) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CateringMenuItems) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CateringMenuItems) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



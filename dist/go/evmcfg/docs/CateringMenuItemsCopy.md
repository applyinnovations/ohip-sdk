# CateringMenuItemsCopy

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CopyMenuItems** | Pointer to [**CopyMenuItemsType**](CopyMenuItemsType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewCateringMenuItemsCopy

`func NewCateringMenuItemsCopy() *CateringMenuItemsCopy`

NewCateringMenuItemsCopy instantiates a new CateringMenuItemsCopy object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCateringMenuItemsCopyWithDefaults

`func NewCateringMenuItemsCopyWithDefaults() *CateringMenuItemsCopy`

NewCateringMenuItemsCopyWithDefaults instantiates a new CateringMenuItemsCopy object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCopyMenuItems

`func (o *CateringMenuItemsCopy) GetCopyMenuItems() CopyMenuItemsType`

GetCopyMenuItems returns the CopyMenuItems field if non-nil, zero value otherwise.

### GetCopyMenuItemsOk

`func (o *CateringMenuItemsCopy) GetCopyMenuItemsOk() (*CopyMenuItemsType, bool)`

GetCopyMenuItemsOk returns a tuple with the CopyMenuItems field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCopyMenuItems

`func (o *CateringMenuItemsCopy) SetCopyMenuItems(v CopyMenuItemsType)`

SetCopyMenuItems sets CopyMenuItems field to given value.

### HasCopyMenuItems

`func (o *CateringMenuItemsCopy) HasCopyMenuItems() bool`

HasCopyMenuItems returns a boolean if a field has been set.

### GetLinks

`func (o *CateringMenuItemsCopy) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CateringMenuItemsCopy) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CateringMenuItemsCopy) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CateringMenuItemsCopy) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *CateringMenuItemsCopy) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CateringMenuItemsCopy) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CateringMenuItemsCopy) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CateringMenuItemsCopy) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



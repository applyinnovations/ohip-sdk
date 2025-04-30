# InventoryItemsCopy

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CopyInventoryItems** | Pointer to [**CopyInventoryItemsType**](CopyInventoryItemsType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewInventoryItemsCopy

`func NewInventoryItemsCopy() *InventoryItemsCopy`

NewInventoryItemsCopy instantiates a new InventoryItemsCopy object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewInventoryItemsCopyWithDefaults

`func NewInventoryItemsCopyWithDefaults() *InventoryItemsCopy`

NewInventoryItemsCopyWithDefaults instantiates a new InventoryItemsCopy object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCopyInventoryItems

`func (o *InventoryItemsCopy) GetCopyInventoryItems() CopyInventoryItemsType`

GetCopyInventoryItems returns the CopyInventoryItems field if non-nil, zero value otherwise.

### GetCopyInventoryItemsOk

`func (o *InventoryItemsCopy) GetCopyInventoryItemsOk() (*CopyInventoryItemsType, bool)`

GetCopyInventoryItemsOk returns a tuple with the CopyInventoryItems field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCopyInventoryItems

`func (o *InventoryItemsCopy) SetCopyInventoryItems(v CopyInventoryItemsType)`

SetCopyInventoryItems sets CopyInventoryItems field to given value.

### HasCopyInventoryItems

`func (o *InventoryItemsCopy) HasCopyInventoryItems() bool`

HasCopyInventoryItems returns a boolean if a field has been set.

### GetLinks

`func (o *InventoryItemsCopy) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *InventoryItemsCopy) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *InventoryItemsCopy) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *InventoryItemsCopy) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *InventoryItemsCopy) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *InventoryItemsCopy) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *InventoryItemsCopy) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *InventoryItemsCopy) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



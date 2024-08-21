# ResInventoryItemsType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Item** | Pointer to [**[]ResInventoryItemType**](ResInventoryItemType.md) | Inventory item attached to a reservation. | [optional] 
**ItemClassCode** | Pointer to **string** | The Item Class ID which the item belongs to. | [optional] 

## Methods

### NewResInventoryItemsType

`func NewResInventoryItemsType() *ResInventoryItemsType`

NewResInventoryItemsType instantiates a new ResInventoryItemsType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewResInventoryItemsTypeWithDefaults

`func NewResInventoryItemsTypeWithDefaults() *ResInventoryItemsType`

NewResInventoryItemsTypeWithDefaults instantiates a new ResInventoryItemsType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetItem

`func (o *ResInventoryItemsType) GetItem() []ResInventoryItemType`

GetItem returns the Item field if non-nil, zero value otherwise.

### GetItemOk

`func (o *ResInventoryItemsType) GetItemOk() (*[]ResInventoryItemType, bool)`

GetItemOk returns a tuple with the Item field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItem

`func (o *ResInventoryItemsType) SetItem(v []ResInventoryItemType)`

SetItem sets Item field to given value.

### HasItem

`func (o *ResInventoryItemsType) HasItem() bool`

HasItem returns a boolean if a field has been set.

### GetItemClassCode

`func (o *ResInventoryItemsType) GetItemClassCode() string`

GetItemClassCode returns the ItemClassCode field if non-nil, zero value otherwise.

### GetItemClassCodeOk

`func (o *ResInventoryItemsType) GetItemClassCodeOk() (*string, bool)`

GetItemClassCodeOk returns a tuple with the ItemClassCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItemClassCode

`func (o *ResInventoryItemsType) SetItemClassCode(v string)`

SetItemClassCode sets ItemClassCode field to given value.

### HasItemClassCode

`func (o *ResInventoryItemsType) HasItemClassCode() bool`

HasItemClassCode returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



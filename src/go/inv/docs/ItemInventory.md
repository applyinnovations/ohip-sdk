# ItemInventory

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ItemsInventory** | Pointer to [**PoolItemInventoryCountsListType**](PoolItemInventoryCountsListType.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewItemInventory

`func NewItemInventory() *ItemInventory`

NewItemInventory instantiates a new ItemInventory object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewItemInventoryWithDefaults

`func NewItemInventoryWithDefaults() *ItemInventory`

NewItemInventoryWithDefaults instantiates a new ItemInventory object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetItemsInventory

`func (o *ItemInventory) GetItemsInventory() PoolItemInventoryCountsListType`

GetItemsInventory returns the ItemsInventory field if non-nil, zero value otherwise.

### GetItemsInventoryOk

`func (o *ItemInventory) GetItemsInventoryOk() (*PoolItemInventoryCountsListType, bool)`

GetItemsInventoryOk returns a tuple with the ItemsInventory field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItemsInventory

`func (o *ItemInventory) SetItemsInventory(v PoolItemInventoryCountsListType)`

SetItemsInventory sets ItemsInventory field to given value.

### HasItemsInventory

`func (o *ItemInventory) HasItemsInventory() bool`

HasItemsInventory returns a boolean if a field has been set.

### GetLinks

`func (o *ItemInventory) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ItemInventory) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ItemInventory) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ItemInventory) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ItemInventory) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ItemInventory) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ItemInventory) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ItemInventory) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



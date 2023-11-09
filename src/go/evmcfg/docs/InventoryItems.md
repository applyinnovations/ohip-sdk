# InventoryItems

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Items** | Pointer to [**InventoryItemsType**](InventoryItemsType.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewInventoryItems

`func NewInventoryItems() *InventoryItems`

NewInventoryItems instantiates a new InventoryItems object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewInventoryItemsWithDefaults

`func NewInventoryItemsWithDefaults() *InventoryItems`

NewInventoryItemsWithDefaults instantiates a new InventoryItems object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetItems

`func (o *InventoryItems) GetItems() InventoryItemsType`

GetItems returns the Items field if non-nil, zero value otherwise.

### GetItemsOk

`func (o *InventoryItems) GetItemsOk() (*InventoryItemsType, bool)`

GetItemsOk returns a tuple with the Items field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItems

`func (o *InventoryItems) SetItems(v InventoryItemsType)`

SetItems sets Items field to given value.

### HasItems

`func (o *InventoryItems) HasItems() bool`

HasItems returns a boolean if a field has been set.

### GetLinks

`func (o *InventoryItems) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *InventoryItems) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *InventoryItems) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *InventoryItems) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *InventoryItems) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *InventoryItems) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *InventoryItems) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *InventoryItems) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# HoldItemInventory

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HoldItemInfo** | Pointer to [**HoldItemInventoryType**](HoldItemInventoryType.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewHoldItemInventory

`func NewHoldItemInventory() *HoldItemInventory`

NewHoldItemInventory instantiates a new HoldItemInventory object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHoldItemInventoryWithDefaults

`func NewHoldItemInventoryWithDefaults() *HoldItemInventory`

NewHoldItemInventoryWithDefaults instantiates a new HoldItemInventory object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHoldItemInfo

`func (o *HoldItemInventory) GetHoldItemInfo() HoldItemInventoryType`

GetHoldItemInfo returns the HoldItemInfo field if non-nil, zero value otherwise.

### GetHoldItemInfoOk

`func (o *HoldItemInventory) GetHoldItemInfoOk() (*HoldItemInventoryType, bool)`

GetHoldItemInfoOk returns a tuple with the HoldItemInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHoldItemInfo

`func (o *HoldItemInventory) SetHoldItemInfo(v HoldItemInventoryType)`

SetHoldItemInfo sets HoldItemInfo field to given value.

### HasHoldItemInfo

`func (o *HoldItemInventory) HasHoldItemInfo() bool`

HasHoldItemInfo returns a boolean if a field has been set.

### GetLinks

`func (o *HoldItemInventory) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *HoldItemInventory) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *HoldItemInventory) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *HoldItemInventory) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *HoldItemInventory) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *HoldItemInventory) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *HoldItemInventory) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *HoldItemInventory) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



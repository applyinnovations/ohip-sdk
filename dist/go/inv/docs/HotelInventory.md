# HotelInventory

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelInventories** | Pointer to [**[]HotelInventoryType**](HotelInventoryType.md) | Refer to Inventory common types document. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewHotelInventory

`func NewHotelInventory() *HotelInventory`

NewHotelInventory instantiates a new HotelInventory object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHotelInventoryWithDefaults

`func NewHotelInventoryWithDefaults() *HotelInventory`

NewHotelInventoryWithDefaults instantiates a new HotelInventory object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelInventories

`func (o *HotelInventory) GetHotelInventories() []HotelInventoryType`

GetHotelInventories returns the HotelInventories field if non-nil, zero value otherwise.

### GetHotelInventoriesOk

`func (o *HotelInventory) GetHotelInventoriesOk() (*[]HotelInventoryType, bool)`

GetHotelInventoriesOk returns a tuple with the HotelInventories field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelInventories

`func (o *HotelInventory) SetHotelInventories(v []HotelInventoryType)`

SetHotelInventories sets HotelInventories field to given value.

### HasHotelInventories

`func (o *HotelInventory) HasHotelInventories() bool`

HasHotelInventories returns a boolean if a field has been set.

### GetLinks

`func (o *HotelInventory) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *HotelInventory) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *HotelInventory) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *HotelInventory) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *HotelInventory) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *HotelInventory) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *HotelInventory) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *HotelInventory) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



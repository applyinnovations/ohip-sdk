# DailyInventoryItemType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DailyItemQuantityByDate** | Pointer to [**[]ItemQuantityDateType**](ItemQuantityDateType.md) | List of Daily quantity for Item by date/dates. | [optional] 
**HotelId** | Pointer to **string** | The Hotel code which the daily item belongs to. | [optional] 
**ItemClassId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**ItemDescription** | Pointer to **string** | The Description of the Daily Item from Inventory. | [optional] 
**ItemId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**ItemName** | Pointer to [**TranslationTextType200**](TranslationTextType200.md) |  | [optional] 
**QuantityInStock** | Pointer to **float32** | Item quantity in Stock of the Daily Item from Inventory. | [optional] 

## Methods

### NewDailyInventoryItemType

`func NewDailyInventoryItemType() *DailyInventoryItemType`

NewDailyInventoryItemType instantiates a new DailyInventoryItemType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDailyInventoryItemTypeWithDefaults

`func NewDailyInventoryItemTypeWithDefaults() *DailyInventoryItemType`

NewDailyInventoryItemTypeWithDefaults instantiates a new DailyInventoryItemType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDailyItemQuantityByDate

`func (o *DailyInventoryItemType) GetDailyItemQuantityByDate() []ItemQuantityDateType`

GetDailyItemQuantityByDate returns the DailyItemQuantityByDate field if non-nil, zero value otherwise.

### GetDailyItemQuantityByDateOk

`func (o *DailyInventoryItemType) GetDailyItemQuantityByDateOk() (*[]ItemQuantityDateType, bool)`

GetDailyItemQuantityByDateOk returns a tuple with the DailyItemQuantityByDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDailyItemQuantityByDate

`func (o *DailyInventoryItemType) SetDailyItemQuantityByDate(v []ItemQuantityDateType)`

SetDailyItemQuantityByDate sets DailyItemQuantityByDate field to given value.

### HasDailyItemQuantityByDate

`func (o *DailyInventoryItemType) HasDailyItemQuantityByDate() bool`

HasDailyItemQuantityByDate returns a boolean if a field has been set.

### GetHotelId

`func (o *DailyInventoryItemType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *DailyInventoryItemType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *DailyInventoryItemType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *DailyInventoryItemType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetItemClassId

`func (o *DailyInventoryItemType) GetItemClassId() UniqueIDType`

GetItemClassId returns the ItemClassId field if non-nil, zero value otherwise.

### GetItemClassIdOk

`func (o *DailyInventoryItemType) GetItemClassIdOk() (*UniqueIDType, bool)`

GetItemClassIdOk returns a tuple with the ItemClassId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItemClassId

`func (o *DailyInventoryItemType) SetItemClassId(v UniqueIDType)`

SetItemClassId sets ItemClassId field to given value.

### HasItemClassId

`func (o *DailyInventoryItemType) HasItemClassId() bool`

HasItemClassId returns a boolean if a field has been set.

### GetItemDescription

`func (o *DailyInventoryItemType) GetItemDescription() string`

GetItemDescription returns the ItemDescription field if non-nil, zero value otherwise.

### GetItemDescriptionOk

`func (o *DailyInventoryItemType) GetItemDescriptionOk() (*string, bool)`

GetItemDescriptionOk returns a tuple with the ItemDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItemDescription

`func (o *DailyInventoryItemType) SetItemDescription(v string)`

SetItemDescription sets ItemDescription field to given value.

### HasItemDescription

`func (o *DailyInventoryItemType) HasItemDescription() bool`

HasItemDescription returns a boolean if a field has been set.

### GetItemId

`func (o *DailyInventoryItemType) GetItemId() UniqueIDType`

GetItemId returns the ItemId field if non-nil, zero value otherwise.

### GetItemIdOk

`func (o *DailyInventoryItemType) GetItemIdOk() (*UniqueIDType, bool)`

GetItemIdOk returns a tuple with the ItemId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItemId

`func (o *DailyInventoryItemType) SetItemId(v UniqueIDType)`

SetItemId sets ItemId field to given value.

### HasItemId

`func (o *DailyInventoryItemType) HasItemId() bool`

HasItemId returns a boolean if a field has been set.

### GetItemName

`func (o *DailyInventoryItemType) GetItemName() TranslationTextType200`

GetItemName returns the ItemName field if non-nil, zero value otherwise.

### GetItemNameOk

`func (o *DailyInventoryItemType) GetItemNameOk() (*TranslationTextType200, bool)`

GetItemNameOk returns a tuple with the ItemName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItemName

`func (o *DailyInventoryItemType) SetItemName(v TranslationTextType200)`

SetItemName sets ItemName field to given value.

### HasItemName

`func (o *DailyInventoryItemType) HasItemName() bool`

HasItemName returns a boolean if a field has been set.

### GetQuantityInStock

`func (o *DailyInventoryItemType) GetQuantityInStock() float32`

GetQuantityInStock returns the QuantityInStock field if non-nil, zero value otherwise.

### GetQuantityInStockOk

`func (o *DailyInventoryItemType) GetQuantityInStockOk() (*float32, bool)`

GetQuantityInStockOk returns a tuple with the QuantityInStock field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuantityInStock

`func (o *DailyInventoryItemType) SetQuantityInStock(v float32)`

SetQuantityInStock sets QuantityInStock field to given value.

### HasQuantityInStock

`func (o *DailyInventoryItemType) HasQuantityInStock() bool`

HasQuantityInStock returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



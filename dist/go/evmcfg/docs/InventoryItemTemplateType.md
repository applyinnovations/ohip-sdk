# InventoryItemTemplateType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Specifies the hotel code for which the inventory item template is defined. | [optional] 
**InventoryItemTemplateId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**InventoryItemTemplateName** | Pointer to **string** | Specifies the name of the inventory item template. | [optional] 
**InventoryItemTemplateItems** | Pointer to [**[]InventoryItemTemplateItemType**](InventoryItemTemplateItemType.md) | This type holds a collection of inventory items which are to be grouped under a single inventory item template. | [optional] 

## Methods

### NewInventoryItemTemplateType

`func NewInventoryItemTemplateType() *InventoryItemTemplateType`

NewInventoryItemTemplateType instantiates a new InventoryItemTemplateType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewInventoryItemTemplateTypeWithDefaults

`func NewInventoryItemTemplateTypeWithDefaults() *InventoryItemTemplateType`

NewInventoryItemTemplateTypeWithDefaults instantiates a new InventoryItemTemplateType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *InventoryItemTemplateType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *InventoryItemTemplateType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *InventoryItemTemplateType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *InventoryItemTemplateType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetInventoryItemTemplateId

`func (o *InventoryItemTemplateType) GetInventoryItemTemplateId() UniqueIDType`

GetInventoryItemTemplateId returns the InventoryItemTemplateId field if non-nil, zero value otherwise.

### GetInventoryItemTemplateIdOk

`func (o *InventoryItemTemplateType) GetInventoryItemTemplateIdOk() (*UniqueIDType, bool)`

GetInventoryItemTemplateIdOk returns a tuple with the InventoryItemTemplateId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInventoryItemTemplateId

`func (o *InventoryItemTemplateType) SetInventoryItemTemplateId(v UniqueIDType)`

SetInventoryItemTemplateId sets InventoryItemTemplateId field to given value.

### HasInventoryItemTemplateId

`func (o *InventoryItemTemplateType) HasInventoryItemTemplateId() bool`

HasInventoryItemTemplateId returns a boolean if a field has been set.

### GetInventoryItemTemplateName

`func (o *InventoryItemTemplateType) GetInventoryItemTemplateName() string`

GetInventoryItemTemplateName returns the InventoryItemTemplateName field if non-nil, zero value otherwise.

### GetInventoryItemTemplateNameOk

`func (o *InventoryItemTemplateType) GetInventoryItemTemplateNameOk() (*string, bool)`

GetInventoryItemTemplateNameOk returns a tuple with the InventoryItemTemplateName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInventoryItemTemplateName

`func (o *InventoryItemTemplateType) SetInventoryItemTemplateName(v string)`

SetInventoryItemTemplateName sets InventoryItemTemplateName field to given value.

### HasInventoryItemTemplateName

`func (o *InventoryItemTemplateType) HasInventoryItemTemplateName() bool`

HasInventoryItemTemplateName returns a boolean if a field has been set.

### GetInventoryItemTemplateItems

`func (o *InventoryItemTemplateType) GetInventoryItemTemplateItems() []InventoryItemTemplateItemType`

GetInventoryItemTemplateItems returns the InventoryItemTemplateItems field if non-nil, zero value otherwise.

### GetInventoryItemTemplateItemsOk

`func (o *InventoryItemTemplateType) GetInventoryItemTemplateItemsOk() (*[]InventoryItemTemplateItemType, bool)`

GetInventoryItemTemplateItemsOk returns a tuple with the InventoryItemTemplateItems field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInventoryItemTemplateItems

`func (o *InventoryItemTemplateType) SetInventoryItemTemplateItems(v []InventoryItemTemplateItemType)`

SetInventoryItemTemplateItems sets InventoryItemTemplateItems field to given value.

### HasInventoryItemTemplateItems

`func (o *InventoryItemTemplateType) HasInventoryItemTemplateItems() bool`

HasInventoryItemTemplateItems returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



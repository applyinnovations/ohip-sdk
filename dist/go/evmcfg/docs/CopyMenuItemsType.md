# CopyMenuItemsType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Source Hotel code from where menu items needs to be copied | [optional] 
**MenuItemClassList** | Pointer to [**[]CateringMenuItemClassType**](CateringMenuItemClassType.md) | List of Values of Menu Item Class. | [optional] 
**MenuItemList** | Pointer to [**[]CateringMenuItemType**](CateringMenuItemType.md) | List of Values of Menu Item. | [optional] 

## Methods

### NewCopyMenuItemsType

`func NewCopyMenuItemsType() *CopyMenuItemsType`

NewCopyMenuItemsType instantiates a new CopyMenuItemsType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCopyMenuItemsTypeWithDefaults

`func NewCopyMenuItemsTypeWithDefaults() *CopyMenuItemsType`

NewCopyMenuItemsTypeWithDefaults instantiates a new CopyMenuItemsType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *CopyMenuItemsType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *CopyMenuItemsType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *CopyMenuItemsType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *CopyMenuItemsType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetMenuItemClassList

`func (o *CopyMenuItemsType) GetMenuItemClassList() []CateringMenuItemClassType`

GetMenuItemClassList returns the MenuItemClassList field if non-nil, zero value otherwise.

### GetMenuItemClassListOk

`func (o *CopyMenuItemsType) GetMenuItemClassListOk() (*[]CateringMenuItemClassType, bool)`

GetMenuItemClassListOk returns a tuple with the MenuItemClassList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMenuItemClassList

`func (o *CopyMenuItemsType) SetMenuItemClassList(v []CateringMenuItemClassType)`

SetMenuItemClassList sets MenuItemClassList field to given value.

### HasMenuItemClassList

`func (o *CopyMenuItemsType) HasMenuItemClassList() bool`

HasMenuItemClassList returns a boolean if a field has been set.

### GetMenuItemList

`func (o *CopyMenuItemsType) GetMenuItemList() []CateringMenuItemType`

GetMenuItemList returns the MenuItemList field if non-nil, zero value otherwise.

### GetMenuItemListOk

`func (o *CopyMenuItemsType) GetMenuItemListOk() (*[]CateringMenuItemType, bool)`

GetMenuItemListOk returns a tuple with the MenuItemList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMenuItemList

`func (o *CopyMenuItemsType) SetMenuItemList(v []CateringMenuItemType)`

SetMenuItemList sets MenuItemList field to given value.

### HasMenuItemList

`func (o *CopyMenuItemsType) HasMenuItemList() bool`

HasMenuItemList returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



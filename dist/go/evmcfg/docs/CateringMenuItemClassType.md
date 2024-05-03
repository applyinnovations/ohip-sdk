# CateringMenuItemClassType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**ItemClassInfo** | Pointer to [**CateringMenuItemClassInfoType**](CateringMenuItemClassInfoType.md) |  | [optional] 
**ItemList** | Pointer to [**[]CateringMenuItemType**](CateringMenuItemType.md) | List of Values of Menu Item. | [optional] 

## Methods

### NewCateringMenuItemClassType

`func NewCateringMenuItemClassType() *CateringMenuItemClassType`

NewCateringMenuItemClassType instantiates a new CateringMenuItemClassType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCateringMenuItemClassTypeWithDefaults

`func NewCateringMenuItemClassTypeWithDefaults() *CateringMenuItemClassType`

NewCateringMenuItemClassTypeWithDefaults instantiates a new CateringMenuItemClassType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *CateringMenuItemClassType) GetId() UniqueIDType`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *CateringMenuItemClassType) GetIdOk() (*UniqueIDType, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *CateringMenuItemClassType) SetId(v UniqueIDType)`

SetId sets Id field to given value.

### HasId

`func (o *CateringMenuItemClassType) HasId() bool`

HasId returns a boolean if a field has been set.

### GetItemClassInfo

`func (o *CateringMenuItemClassType) GetItemClassInfo() CateringMenuItemClassInfoType`

GetItemClassInfo returns the ItemClassInfo field if non-nil, zero value otherwise.

### GetItemClassInfoOk

`func (o *CateringMenuItemClassType) GetItemClassInfoOk() (*CateringMenuItemClassInfoType, bool)`

GetItemClassInfoOk returns a tuple with the ItemClassInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItemClassInfo

`func (o *CateringMenuItemClassType) SetItemClassInfo(v CateringMenuItemClassInfoType)`

SetItemClassInfo sets ItemClassInfo field to given value.

### HasItemClassInfo

`func (o *CateringMenuItemClassType) HasItemClassInfo() bool`

HasItemClassInfo returns a boolean if a field has been set.

### GetItemList

`func (o *CateringMenuItemClassType) GetItemList() []CateringMenuItemType`

GetItemList returns the ItemList field if non-nil, zero value otherwise.

### GetItemListOk

`func (o *CateringMenuItemClassType) GetItemListOk() (*[]CateringMenuItemType, bool)`

GetItemListOk returns a tuple with the ItemList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItemList

`func (o *CateringMenuItemClassType) SetItemList(v []CateringMenuItemType)`

SetItemList sets ItemList field to given value.

### HasItemList

`func (o *CateringMenuItemClassType) HasItemList() bool`

HasItemList returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



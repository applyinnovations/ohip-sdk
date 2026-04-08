# CateringMenuClassType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ClassId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**HotelId** | Pointer to **string** | The Hotel code which the menu class belongs to. | [optional] 
**ClassInfo** | Pointer to [**CateringMenuClassInfoType**](CateringMenuClassInfoType.md) |  | [optional] 
**MenuList** | Pointer to [**[]CateringMenuType**](CateringMenuType.md) | List of Values of Menu. | [optional] 

## Methods

### NewCateringMenuClassType

`func NewCateringMenuClassType() *CateringMenuClassType`

NewCateringMenuClassType instantiates a new CateringMenuClassType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCateringMenuClassTypeWithDefaults

`func NewCateringMenuClassTypeWithDefaults() *CateringMenuClassType`

NewCateringMenuClassTypeWithDefaults instantiates a new CateringMenuClassType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetClassId

`func (o *CateringMenuClassType) GetClassId() UniqueIDType`

GetClassId returns the ClassId field if non-nil, zero value otherwise.

### GetClassIdOk

`func (o *CateringMenuClassType) GetClassIdOk() (*UniqueIDType, bool)`

GetClassIdOk returns a tuple with the ClassId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClassId

`func (o *CateringMenuClassType) SetClassId(v UniqueIDType)`

SetClassId sets ClassId field to given value.

### HasClassId

`func (o *CateringMenuClassType) HasClassId() bool`

HasClassId returns a boolean if a field has been set.

### GetHotelId

`func (o *CateringMenuClassType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *CateringMenuClassType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *CateringMenuClassType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *CateringMenuClassType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetClassInfo

`func (o *CateringMenuClassType) GetClassInfo() CateringMenuClassInfoType`

GetClassInfo returns the ClassInfo field if non-nil, zero value otherwise.

### GetClassInfoOk

`func (o *CateringMenuClassType) GetClassInfoOk() (*CateringMenuClassInfoType, bool)`

GetClassInfoOk returns a tuple with the ClassInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClassInfo

`func (o *CateringMenuClassType) SetClassInfo(v CateringMenuClassInfoType)`

SetClassInfo sets ClassInfo field to given value.

### HasClassInfo

`func (o *CateringMenuClassType) HasClassInfo() bool`

HasClassInfo returns a boolean if a field has been set.

### GetMenuList

`func (o *CateringMenuClassType) GetMenuList() []CateringMenuType`

GetMenuList returns the MenuList field if non-nil, zero value otherwise.

### GetMenuListOk

`func (o *CateringMenuClassType) GetMenuListOk() (*[]CateringMenuType, bool)`

GetMenuListOk returns a tuple with the MenuList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMenuList

`func (o *CateringMenuClassType) SetMenuList(v []CateringMenuType)`

SetMenuList sets MenuList field to given value.

### HasMenuList

`func (o *CateringMenuClassType) HasMenuList() bool`

HasMenuList returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# CopyCateringMenuType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Source Hotel code from where the menu will be copied. | [optional] 
**MenuClassList** | Pointer to [**CateringMenuClassListType**](CateringMenuClassListType.md) |  | [optional] 
**MenuId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 

## Methods

### NewCopyCateringMenuType

`func NewCopyCateringMenuType() *CopyCateringMenuType`

NewCopyCateringMenuType instantiates a new CopyCateringMenuType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCopyCateringMenuTypeWithDefaults

`func NewCopyCateringMenuTypeWithDefaults() *CopyCateringMenuType`

NewCopyCateringMenuTypeWithDefaults instantiates a new CopyCateringMenuType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *CopyCateringMenuType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *CopyCateringMenuType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *CopyCateringMenuType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *CopyCateringMenuType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetMenuClassList

`func (o *CopyCateringMenuType) GetMenuClassList() CateringMenuClassListType`

GetMenuClassList returns the MenuClassList field if non-nil, zero value otherwise.

### GetMenuClassListOk

`func (o *CopyCateringMenuType) GetMenuClassListOk() (*CateringMenuClassListType, bool)`

GetMenuClassListOk returns a tuple with the MenuClassList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMenuClassList

`func (o *CopyCateringMenuType) SetMenuClassList(v CateringMenuClassListType)`

SetMenuClassList sets MenuClassList field to given value.

### HasMenuClassList

`func (o *CopyCateringMenuType) HasMenuClassList() bool`

HasMenuClassList returns a boolean if a field has been set.

### GetMenuId

`func (o *CopyCateringMenuType) GetMenuId() UniqueIDType`

GetMenuId returns the MenuId field if non-nil, zero value otherwise.

### GetMenuIdOk

`func (o *CopyCateringMenuType) GetMenuIdOk() (*UniqueIDType, bool)`

GetMenuIdOk returns a tuple with the MenuId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMenuId

`func (o *CopyCateringMenuType) SetMenuId(v UniqueIDType)`

SetMenuId sets MenuId field to given value.

### HasMenuId

`func (o *CopyCateringMenuType) HasMenuId() bool`

HasMenuId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



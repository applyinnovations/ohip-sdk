# RoomTypeMasterInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** |  | [optional] 
**RoomType** | Pointer to [**[]RoomTypeInfoType**](RoomTypeInfoType.md) | Room type information | [optional] 

## Methods

### NewRoomTypeMasterInfoType

`func NewRoomTypeMasterInfoType() *RoomTypeMasterInfoType`

NewRoomTypeMasterInfoType instantiates a new RoomTypeMasterInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoomTypeMasterInfoTypeWithDefaults

`func NewRoomTypeMasterInfoTypeWithDefaults() *RoomTypeMasterInfoType`

NewRoomTypeMasterInfoTypeWithDefaults instantiates a new RoomTypeMasterInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *RoomTypeMasterInfoType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *RoomTypeMasterInfoType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *RoomTypeMasterInfoType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *RoomTypeMasterInfoType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetRoomType

`func (o *RoomTypeMasterInfoType) GetRoomType() []RoomTypeInfoType`

GetRoomType returns the RoomType field if non-nil, zero value otherwise.

### GetRoomTypeOk

`func (o *RoomTypeMasterInfoType) GetRoomTypeOk() (*[]RoomTypeInfoType, bool)`

GetRoomTypeOk returns a tuple with the RoomType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomType

`func (o *RoomTypeMasterInfoType) SetRoomType(v []RoomTypeInfoType)`

SetRoomType sets RoomType field to given value.

### HasRoomType

`func (o *RoomTypeMasterInfoType) HasRoomType() bool`

HasRoomType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# RoomRatingInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Property code of the rooms. | [optional] 
**Rating** | Pointer to [**RoomRatingType**](RoomRatingType.md) |  | [optional] 
**RoomClass** | Pointer to **string** | Room Class of the room. | [optional] 
**RoomId** | Pointer to **string** | Room number whose ratings are fetched. | [optional] 
**RoomType** | Pointer to [**CodeDescriptionType**](CodeDescriptionType.md) |  | [optional] 

## Methods

### NewRoomRatingInfoType

`func NewRoomRatingInfoType() *RoomRatingInfoType`

NewRoomRatingInfoType instantiates a new RoomRatingInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoomRatingInfoTypeWithDefaults

`func NewRoomRatingInfoTypeWithDefaults() *RoomRatingInfoType`

NewRoomRatingInfoTypeWithDefaults instantiates a new RoomRatingInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *RoomRatingInfoType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *RoomRatingInfoType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *RoomRatingInfoType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *RoomRatingInfoType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetRating

`func (o *RoomRatingInfoType) GetRating() RoomRatingType`

GetRating returns the Rating field if non-nil, zero value otherwise.

### GetRatingOk

`func (o *RoomRatingInfoType) GetRatingOk() (*RoomRatingType, bool)`

GetRatingOk returns a tuple with the Rating field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRating

`func (o *RoomRatingInfoType) SetRating(v RoomRatingType)`

SetRating sets Rating field to given value.

### HasRating

`func (o *RoomRatingInfoType) HasRating() bool`

HasRating returns a boolean if a field has been set.

### GetRoomClass

`func (o *RoomRatingInfoType) GetRoomClass() string`

GetRoomClass returns the RoomClass field if non-nil, zero value otherwise.

### GetRoomClassOk

`func (o *RoomRatingInfoType) GetRoomClassOk() (*string, bool)`

GetRoomClassOk returns a tuple with the RoomClass field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomClass

`func (o *RoomRatingInfoType) SetRoomClass(v string)`

SetRoomClass sets RoomClass field to given value.

### HasRoomClass

`func (o *RoomRatingInfoType) HasRoomClass() bool`

HasRoomClass returns a boolean if a field has been set.

### GetRoomId

`func (o *RoomRatingInfoType) GetRoomId() string`

GetRoomId returns the RoomId field if non-nil, zero value otherwise.

### GetRoomIdOk

`func (o *RoomRatingInfoType) GetRoomIdOk() (*string, bool)`

GetRoomIdOk returns a tuple with the RoomId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomId

`func (o *RoomRatingInfoType) SetRoomId(v string)`

SetRoomId sets RoomId field to given value.

### HasRoomId

`func (o *RoomRatingInfoType) HasRoomId() bool`

HasRoomId returns a boolean if a field has been set.

### GetRoomType

`func (o *RoomRatingInfoType) GetRoomType() CodeDescriptionType`

GetRoomType returns the RoomType field if non-nil, zero value otherwise.

### GetRoomTypeOk

`func (o *RoomRatingInfoType) GetRoomTypeOk() (*CodeDescriptionType, bool)`

GetRoomTypeOk returns a tuple with the RoomType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomType

`func (o *RoomRatingInfoType) SetRoomType(v CodeDescriptionType)`

SetRoomType sets RoomType field to given value.

### HasRoomType

`func (o *RoomRatingInfoType) HasRoomType() bool`

HasRoomType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



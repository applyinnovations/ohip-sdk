# RoomSpecialRatingInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Property code of the room Special. | [optional] 
**Rating** | Pointer to [**RoomSpecialRatingType**](RoomSpecialRatingType.md) |  | [optional] 
**RoomSpecial** | Pointer to [**CodeDescriptionType**](CodeDescriptionType.md) |  | [optional] 

## Methods

### NewRoomSpecialRatingInfoType

`func NewRoomSpecialRatingInfoType() *RoomSpecialRatingInfoType`

NewRoomSpecialRatingInfoType instantiates a new RoomSpecialRatingInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoomSpecialRatingInfoTypeWithDefaults

`func NewRoomSpecialRatingInfoTypeWithDefaults() *RoomSpecialRatingInfoType`

NewRoomSpecialRatingInfoTypeWithDefaults instantiates a new RoomSpecialRatingInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *RoomSpecialRatingInfoType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *RoomSpecialRatingInfoType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *RoomSpecialRatingInfoType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *RoomSpecialRatingInfoType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetRating

`func (o *RoomSpecialRatingInfoType) GetRating() RoomSpecialRatingType`

GetRating returns the Rating field if non-nil, zero value otherwise.

### GetRatingOk

`func (o *RoomSpecialRatingInfoType) GetRatingOk() (*RoomSpecialRatingType, bool)`

GetRatingOk returns a tuple with the Rating field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRating

`func (o *RoomSpecialRatingInfoType) SetRating(v RoomSpecialRatingType)`

SetRating sets Rating field to given value.

### HasRating

`func (o *RoomSpecialRatingInfoType) HasRating() bool`

HasRating returns a boolean if a field has been set.

### GetRoomSpecial

`func (o *RoomSpecialRatingInfoType) GetRoomSpecial() CodeDescriptionType`

GetRoomSpecial returns the RoomSpecial field if non-nil, zero value otherwise.

### GetRoomSpecialOk

`func (o *RoomSpecialRatingInfoType) GetRoomSpecialOk() (*CodeDescriptionType, bool)`

GetRoomSpecialOk returns a tuple with the RoomSpecial field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomSpecial

`func (o *RoomSpecialRatingInfoType) SetRoomSpecial(v CodeDescriptionType)`

SetRoomSpecial sets RoomSpecial field to given value.

### HasRoomSpecial

`func (o *RoomSpecialRatingInfoType) HasRoomSpecial() bool`

HasRoomSpecial returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



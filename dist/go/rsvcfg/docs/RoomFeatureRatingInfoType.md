# RoomFeatureRatingInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Property code of the room feature. | [optional] 
**Rating** | Pointer to [**RoomFeatureRatingType**](RoomFeatureRatingType.md) |  | [optional] 
**RoomFeature** | Pointer to [**CodeDescriptionType**](CodeDescriptionType.md) |  | [optional] 

## Methods

### NewRoomFeatureRatingInfoType

`func NewRoomFeatureRatingInfoType() *RoomFeatureRatingInfoType`

NewRoomFeatureRatingInfoType instantiates a new RoomFeatureRatingInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoomFeatureRatingInfoTypeWithDefaults

`func NewRoomFeatureRatingInfoTypeWithDefaults() *RoomFeatureRatingInfoType`

NewRoomFeatureRatingInfoTypeWithDefaults instantiates a new RoomFeatureRatingInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *RoomFeatureRatingInfoType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *RoomFeatureRatingInfoType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *RoomFeatureRatingInfoType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *RoomFeatureRatingInfoType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetRating

`func (o *RoomFeatureRatingInfoType) GetRating() RoomFeatureRatingType`

GetRating returns the Rating field if non-nil, zero value otherwise.

### GetRatingOk

`func (o *RoomFeatureRatingInfoType) GetRatingOk() (*RoomFeatureRatingType, bool)`

GetRatingOk returns a tuple with the Rating field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRating

`func (o *RoomFeatureRatingInfoType) SetRating(v RoomFeatureRatingType)`

SetRating sets Rating field to given value.

### HasRating

`func (o *RoomFeatureRatingInfoType) HasRating() bool`

HasRating returns a boolean if a field has been set.

### GetRoomFeature

`func (o *RoomFeatureRatingInfoType) GetRoomFeature() CodeDescriptionType`

GetRoomFeature returns the RoomFeature field if non-nil, zero value otherwise.

### GetRoomFeatureOk

`func (o *RoomFeatureRatingInfoType) GetRoomFeatureOk() (*CodeDescriptionType, bool)`

GetRoomFeatureOk returns a tuple with the RoomFeature field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomFeature

`func (o *RoomFeatureRatingInfoType) SetRoomFeature(v CodeDescriptionType)`

SetRoomFeature sets RoomFeature field to given value.

### HasRoomFeature

`func (o *RoomFeatureRatingInfoType) HasRoomFeature() bool`

HasRoomFeature returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



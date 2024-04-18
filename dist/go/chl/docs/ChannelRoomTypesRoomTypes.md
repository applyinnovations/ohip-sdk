# ChannelRoomTypesRoomTypes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BookingChannelCode** | Pointer to **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | [optional] 
**RoomType** | Pointer to [**[]SystemRoomTypeType**](SystemRoomTypeType.md) | Channel room type details. | [optional] 

## Methods

### NewChannelRoomTypesRoomTypes

`func NewChannelRoomTypesRoomTypes() *ChannelRoomTypesRoomTypes`

NewChannelRoomTypesRoomTypes instantiates a new ChannelRoomTypesRoomTypes object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChannelRoomTypesRoomTypesWithDefaults

`func NewChannelRoomTypesRoomTypesWithDefaults() *ChannelRoomTypesRoomTypes`

NewChannelRoomTypesRoomTypesWithDefaults instantiates a new ChannelRoomTypesRoomTypes object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBookingChannelCode

`func (o *ChannelRoomTypesRoomTypes) GetBookingChannelCode() string`

GetBookingChannelCode returns the BookingChannelCode field if non-nil, zero value otherwise.

### GetBookingChannelCodeOk

`func (o *ChannelRoomTypesRoomTypes) GetBookingChannelCodeOk() (*string, bool)`

GetBookingChannelCodeOk returns a tuple with the BookingChannelCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBookingChannelCode

`func (o *ChannelRoomTypesRoomTypes) SetBookingChannelCode(v string)`

SetBookingChannelCode sets BookingChannelCode field to given value.

### HasBookingChannelCode

`func (o *ChannelRoomTypesRoomTypes) HasBookingChannelCode() bool`

HasBookingChannelCode returns a boolean if a field has been set.

### GetRoomType

`func (o *ChannelRoomTypesRoomTypes) GetRoomType() []SystemRoomTypeType`

GetRoomType returns the RoomType field if non-nil, zero value otherwise.

### GetRoomTypeOk

`func (o *ChannelRoomTypesRoomTypes) GetRoomTypeOk() (*[]SystemRoomTypeType, bool)`

GetRoomTypeOk returns a tuple with the RoomType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomType

`func (o *ChannelRoomTypesRoomTypes) SetRoomType(v []SystemRoomTypeType)`

SetRoomType sets RoomType field to given value.

### HasRoomType

`func (o *ChannelRoomTypesRoomTypes) HasRoomType() bool`

HasRoomType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



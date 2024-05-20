# RoomTypeStatisticsType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RoomType** | Pointer to **string** | Room Type name. Available room types can be retrieved via /listOfValues/hotels/{hotelId}/roomTypes | [optional] 
**Total** | Pointer to **int32** | Number of reservations. | [optional] 

## Methods

### NewRoomTypeStatisticsType

`func NewRoomTypeStatisticsType() *RoomTypeStatisticsType`

NewRoomTypeStatisticsType instantiates a new RoomTypeStatisticsType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoomTypeStatisticsTypeWithDefaults

`func NewRoomTypeStatisticsTypeWithDefaults() *RoomTypeStatisticsType`

NewRoomTypeStatisticsTypeWithDefaults instantiates a new RoomTypeStatisticsType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRoomType

`func (o *RoomTypeStatisticsType) GetRoomType() string`

GetRoomType returns the RoomType field if non-nil, zero value otherwise.

### GetRoomTypeOk

`func (o *RoomTypeStatisticsType) GetRoomTypeOk() (*string, bool)`

GetRoomTypeOk returns a tuple with the RoomType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomType

`func (o *RoomTypeStatisticsType) SetRoomType(v string)`

SetRoomType sets RoomType field to given value.

### HasRoomType

`func (o *RoomTypeStatisticsType) HasRoomType() bool`

HasRoomType returns a boolean if a field has been set.

### GetTotal

`func (o *RoomTypeStatisticsType) GetTotal() int32`

GetTotal returns the Total field if non-nil, zero value otherwise.

### GetTotalOk

`func (o *RoomTypeStatisticsType) GetTotalOk() (*int32, bool)`

GetTotalOk returns a tuple with the Total field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotal

`func (o *RoomTypeStatisticsType) SetTotal(v int32)`

SetTotal sets Total field to given value.

### HasTotal

`func (o *RoomTypeStatisticsType) HasTotal() bool`

HasTotal returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



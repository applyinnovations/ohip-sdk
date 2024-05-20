# RoomCriteriaRoom

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | [optional] 
**RoomDetails** | Pointer to [**ConfigRoomType**](ConfigRoomType.md) |  | [optional] 

## Methods

### NewRoomCriteriaRoom

`func NewRoomCriteriaRoom() *RoomCriteriaRoom`

NewRoomCriteriaRoom instantiates a new RoomCriteriaRoom object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoomCriteriaRoomWithDefaults

`func NewRoomCriteriaRoomWithDefaults() *RoomCriteriaRoom`

NewRoomCriteriaRoomWithDefaults instantiates a new RoomCriteriaRoom object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *RoomCriteriaRoom) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *RoomCriteriaRoom) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *RoomCriteriaRoom) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *RoomCriteriaRoom) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetRoomDetails

`func (o *RoomCriteriaRoom) GetRoomDetails() ConfigRoomType`

GetRoomDetails returns the RoomDetails field if non-nil, zero value otherwise.

### GetRoomDetailsOk

`func (o *RoomCriteriaRoom) GetRoomDetailsOk() (*ConfigRoomType, bool)`

GetRoomDetailsOk returns a tuple with the RoomDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomDetails

`func (o *RoomCriteriaRoom) SetRoomDetails(v ConfigRoomType)`

SetRoomDetails sets RoomDetails field to given value.

### HasRoomDetails

`func (o *RoomCriteriaRoom) HasRoomDetails() bool`

HasRoomDetails returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



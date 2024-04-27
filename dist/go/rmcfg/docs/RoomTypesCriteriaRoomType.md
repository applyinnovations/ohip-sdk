# RoomTypesCriteriaRoomType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | [optional] 
**RoomTypeDetails** | Pointer to [**RoomTypeType**](RoomTypeType.md) |  | [optional] 

## Methods

### NewRoomTypesCriteriaRoomType

`func NewRoomTypesCriteriaRoomType() *RoomTypesCriteriaRoomType`

NewRoomTypesCriteriaRoomType instantiates a new RoomTypesCriteriaRoomType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoomTypesCriteriaRoomTypeWithDefaults

`func NewRoomTypesCriteriaRoomTypeWithDefaults() *RoomTypesCriteriaRoomType`

NewRoomTypesCriteriaRoomTypeWithDefaults instantiates a new RoomTypesCriteriaRoomType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *RoomTypesCriteriaRoomType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *RoomTypesCriteriaRoomType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *RoomTypesCriteriaRoomType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *RoomTypesCriteriaRoomType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetRoomTypeDetails

`func (o *RoomTypesCriteriaRoomType) GetRoomTypeDetails() RoomTypeType`

GetRoomTypeDetails returns the RoomTypeDetails field if non-nil, zero value otherwise.

### GetRoomTypeDetailsOk

`func (o *RoomTypesCriteriaRoomType) GetRoomTypeDetailsOk() (*RoomTypeType, bool)`

GetRoomTypeDetailsOk returns a tuple with the RoomTypeDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomTypeDetails

`func (o *RoomTypesCriteriaRoomType) SetRoomTypeDetails(v RoomTypeType)`

SetRoomTypeDetails sets RoomTypeDetails field to given value.

### HasRoomTypeDetails

`func (o *RoomTypesCriteriaRoomType) HasRoomTypeDetails() bool`

HasRoomTypeDetails returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



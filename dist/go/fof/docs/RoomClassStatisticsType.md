# RoomClassStatisticsType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RoomClass** | Pointer to **string** | Room Class name. Available room classes can be retrieved via /listOfValues/hotels/{hotelId}/roomClasses | [optional] 
**RoomTypes** | Pointer to [**[]RoomTypeStatisticsType**](RoomTypeStatisticsType.md) | Reservation Statistics for each Room Type | [optional] 
**Total** | Pointer to **int32** | Number of reservations. | [optional] 

## Methods

### NewRoomClassStatisticsType

`func NewRoomClassStatisticsType() *RoomClassStatisticsType`

NewRoomClassStatisticsType instantiates a new RoomClassStatisticsType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoomClassStatisticsTypeWithDefaults

`func NewRoomClassStatisticsTypeWithDefaults() *RoomClassStatisticsType`

NewRoomClassStatisticsTypeWithDefaults instantiates a new RoomClassStatisticsType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRoomClass

`func (o *RoomClassStatisticsType) GetRoomClass() string`

GetRoomClass returns the RoomClass field if non-nil, zero value otherwise.

### GetRoomClassOk

`func (o *RoomClassStatisticsType) GetRoomClassOk() (*string, bool)`

GetRoomClassOk returns a tuple with the RoomClass field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomClass

`func (o *RoomClassStatisticsType) SetRoomClass(v string)`

SetRoomClass sets RoomClass field to given value.

### HasRoomClass

`func (o *RoomClassStatisticsType) HasRoomClass() bool`

HasRoomClass returns a boolean if a field has been set.

### GetRoomTypes

`func (o *RoomClassStatisticsType) GetRoomTypes() []RoomTypeStatisticsType`

GetRoomTypes returns the RoomTypes field if non-nil, zero value otherwise.

### GetRoomTypesOk

`func (o *RoomClassStatisticsType) GetRoomTypesOk() (*[]RoomTypeStatisticsType, bool)`

GetRoomTypesOk returns a tuple with the RoomTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomTypes

`func (o *RoomClassStatisticsType) SetRoomTypes(v []RoomTypeStatisticsType)`

SetRoomTypes sets RoomTypes field to given value.

### HasRoomTypes

`func (o *RoomClassStatisticsType) HasRoomTypes() bool`

HasRoomTypes returns a boolean if a field has been set.

### GetTotal

`func (o *RoomClassStatisticsType) GetTotal() int32`

GetTotal returns the Total field if non-nil, zero value otherwise.

### GetTotalOk

`func (o *RoomClassStatisticsType) GetTotalOk() (*int32, bool)`

GetTotalOk returns a tuple with the Total field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotal

`func (o *RoomClassStatisticsType) SetTotal(v int32)`

SetTotal sets Total field to given value.

### HasTotal

`func (o *RoomClassStatisticsType) HasTotal() bool`

HasTotal returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# ConfigRoomsSummaryType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Hotel Code of the rooms. | [optional] 
**NoOfRooms** | Pointer to **int32** | Current number of rooms. | [optional] 
**RoomSummary** | Pointer to [**[]ConfigRoomSummaryType**](ConfigRoomSummaryType.md) |  | [optional] 

## Methods

### NewConfigRoomsSummaryType

`func NewConfigRoomsSummaryType() *ConfigRoomsSummaryType`

NewConfigRoomsSummaryType instantiates a new ConfigRoomsSummaryType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewConfigRoomsSummaryTypeWithDefaults

`func NewConfigRoomsSummaryTypeWithDefaults() *ConfigRoomsSummaryType`

NewConfigRoomsSummaryTypeWithDefaults instantiates a new ConfigRoomsSummaryType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *ConfigRoomsSummaryType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ConfigRoomsSummaryType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ConfigRoomsSummaryType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ConfigRoomsSummaryType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetNoOfRooms

`func (o *ConfigRoomsSummaryType) GetNoOfRooms() int32`

GetNoOfRooms returns the NoOfRooms field if non-nil, zero value otherwise.

### GetNoOfRoomsOk

`func (o *ConfigRoomsSummaryType) GetNoOfRoomsOk() (*int32, bool)`

GetNoOfRoomsOk returns a tuple with the NoOfRooms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNoOfRooms

`func (o *ConfigRoomsSummaryType) SetNoOfRooms(v int32)`

SetNoOfRooms sets NoOfRooms field to given value.

### HasNoOfRooms

`func (o *ConfigRoomsSummaryType) HasNoOfRooms() bool`

HasNoOfRooms returns a boolean if a field has been set.

### GetRoomSummary

`func (o *ConfigRoomsSummaryType) GetRoomSummary() []ConfigRoomSummaryType`

GetRoomSummary returns the RoomSummary field if non-nil, zero value otherwise.

### GetRoomSummaryOk

`func (o *ConfigRoomsSummaryType) GetRoomSummaryOk() (*[]ConfigRoomSummaryType, bool)`

GetRoomSummaryOk returns a tuple with the RoomSummary field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomSummary

`func (o *ConfigRoomsSummaryType) SetRoomSummary(v []ConfigRoomSummaryType)`

SetRoomSummary sets RoomSummary field to given value.

### HasRoomSummary

`func (o *ConfigRoomsSummaryType) HasRoomSummary() bool`

HasRoomSummary returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



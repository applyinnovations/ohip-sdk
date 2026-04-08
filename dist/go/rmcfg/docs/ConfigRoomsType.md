# ConfigRoomsType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Room** | Pointer to [**[]ConfigRoomType**](ConfigRoomType.md) |  | [optional] 
**HotelId** | Pointer to **string** | Hotel Code of the rooms. | [optional] 

## Methods

### NewConfigRoomsType

`func NewConfigRoomsType() *ConfigRoomsType`

NewConfigRoomsType instantiates a new ConfigRoomsType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewConfigRoomsTypeWithDefaults

`func NewConfigRoomsTypeWithDefaults() *ConfigRoomsType`

NewConfigRoomsTypeWithDefaults instantiates a new ConfigRoomsType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRoom

`func (o *ConfigRoomsType) GetRoom() []ConfigRoomType`

GetRoom returns the Room field if non-nil, zero value otherwise.

### GetRoomOk

`func (o *ConfigRoomsType) GetRoomOk() (*[]ConfigRoomType, bool)`

GetRoomOk returns a tuple with the Room field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoom

`func (o *ConfigRoomsType) SetRoom(v []ConfigRoomType)`

SetRoom sets Room field to given value.

### HasRoom

`func (o *ConfigRoomsType) HasRoom() bool`

HasRoom returns a boolean if a field has been set.

### GetHotelId

`func (o *ConfigRoomsType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ConfigRoomsType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ConfigRoomsType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ConfigRoomsType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



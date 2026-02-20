# BlockTotalAvailabilityInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**StayStartDate** | Pointer to **string** | Stay Start Date. | [optional] 
**StayEndDate** | Pointer to **string** | Stay End Date. | [optional] 
**Rooms** | Pointer to **float32** | Total number of rooms. | [optional] 
**RoomInfo** | Pointer to [**[]BlockAvailabilityRoomInfoType**](BlockAvailabilityRoomInfoType.md) | Total Block Availability per room type. | [optional] 

## Methods

### NewBlockTotalAvailabilityInfoType

`func NewBlockTotalAvailabilityInfoType() *BlockTotalAvailabilityInfoType`

NewBlockTotalAvailabilityInfoType instantiates a new BlockTotalAvailabilityInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBlockTotalAvailabilityInfoTypeWithDefaults

`func NewBlockTotalAvailabilityInfoTypeWithDefaults() *BlockTotalAvailabilityInfoType`

NewBlockTotalAvailabilityInfoTypeWithDefaults instantiates a new BlockTotalAvailabilityInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStayStartDate

`func (o *BlockTotalAvailabilityInfoType) GetStayStartDate() string`

GetStayStartDate returns the StayStartDate field if non-nil, zero value otherwise.

### GetStayStartDateOk

`func (o *BlockTotalAvailabilityInfoType) GetStayStartDateOk() (*string, bool)`

GetStayStartDateOk returns a tuple with the StayStartDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStayStartDate

`func (o *BlockTotalAvailabilityInfoType) SetStayStartDate(v string)`

SetStayStartDate sets StayStartDate field to given value.

### HasStayStartDate

`func (o *BlockTotalAvailabilityInfoType) HasStayStartDate() bool`

HasStayStartDate returns a boolean if a field has been set.

### GetStayEndDate

`func (o *BlockTotalAvailabilityInfoType) GetStayEndDate() string`

GetStayEndDate returns the StayEndDate field if non-nil, zero value otherwise.

### GetStayEndDateOk

`func (o *BlockTotalAvailabilityInfoType) GetStayEndDateOk() (*string, bool)`

GetStayEndDateOk returns a tuple with the StayEndDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStayEndDate

`func (o *BlockTotalAvailabilityInfoType) SetStayEndDate(v string)`

SetStayEndDate sets StayEndDate field to given value.

### HasStayEndDate

`func (o *BlockTotalAvailabilityInfoType) HasStayEndDate() bool`

HasStayEndDate returns a boolean if a field has been set.

### GetRooms

`func (o *BlockTotalAvailabilityInfoType) GetRooms() float32`

GetRooms returns the Rooms field if non-nil, zero value otherwise.

### GetRoomsOk

`func (o *BlockTotalAvailabilityInfoType) GetRoomsOk() (*float32, bool)`

GetRoomsOk returns a tuple with the Rooms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRooms

`func (o *BlockTotalAvailabilityInfoType) SetRooms(v float32)`

SetRooms sets Rooms field to given value.

### HasRooms

`func (o *BlockTotalAvailabilityInfoType) HasRooms() bool`

HasRooms returns a boolean if a field has been set.

### GetRoomInfo

`func (o *BlockTotalAvailabilityInfoType) GetRoomInfo() []BlockAvailabilityRoomInfoType`

GetRoomInfo returns the RoomInfo field if non-nil, zero value otherwise.

### GetRoomInfoOk

`func (o *BlockTotalAvailabilityInfoType) GetRoomInfoOk() (*[]BlockAvailabilityRoomInfoType, bool)`

GetRoomInfoOk returns a tuple with the RoomInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomInfo

`func (o *BlockTotalAvailabilityInfoType) SetRoomInfo(v []BlockAvailabilityRoomInfoType)`

SetRoomInfo sets RoomInfo field to given value.

### HasRoomInfo

`func (o *BlockTotalAvailabilityInfoType) HasRoomInfo() bool`

HasRoomInfo returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



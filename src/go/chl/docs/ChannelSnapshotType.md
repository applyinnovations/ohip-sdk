# ChannelSnapshotType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AvailableRooms** | Pointer to **float32** | Number of available rooms. | [optional] 
**Date** | Pointer to **string** | Date of the statistics and restrictions. | [optional] 
**InventoryRooms** | Pointer to **float32** | Number of rooms in inventory. | [optional] 
**RestrictionsInfo** | Pointer to [**RestrictionsInfoType**](RestrictionsInfoType.md) |  | [optional] 
**RoomsSold** | Pointer to **float32** | Number of rooms sold. | [optional] 
**SellLimit** | Pointer to **float32** | Number of overbooking rooms allowed. | [optional] 
**TentativeRoomsSold** | Pointer to **float32** | Number of tentative rooms sold - does not include definite reservations. | [optional] 

## Methods

### NewChannelSnapshotType

`func NewChannelSnapshotType() *ChannelSnapshotType`

NewChannelSnapshotType instantiates a new ChannelSnapshotType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChannelSnapshotTypeWithDefaults

`func NewChannelSnapshotTypeWithDefaults() *ChannelSnapshotType`

NewChannelSnapshotTypeWithDefaults instantiates a new ChannelSnapshotType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAvailableRooms

`func (o *ChannelSnapshotType) GetAvailableRooms() float32`

GetAvailableRooms returns the AvailableRooms field if non-nil, zero value otherwise.

### GetAvailableRoomsOk

`func (o *ChannelSnapshotType) GetAvailableRoomsOk() (*float32, bool)`

GetAvailableRoomsOk returns a tuple with the AvailableRooms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAvailableRooms

`func (o *ChannelSnapshotType) SetAvailableRooms(v float32)`

SetAvailableRooms sets AvailableRooms field to given value.

### HasAvailableRooms

`func (o *ChannelSnapshotType) HasAvailableRooms() bool`

HasAvailableRooms returns a boolean if a field has been set.

### GetDate

`func (o *ChannelSnapshotType) GetDate() string`

GetDate returns the Date field if non-nil, zero value otherwise.

### GetDateOk

`func (o *ChannelSnapshotType) GetDateOk() (*string, bool)`

GetDateOk returns a tuple with the Date field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDate

`func (o *ChannelSnapshotType) SetDate(v string)`

SetDate sets Date field to given value.

### HasDate

`func (o *ChannelSnapshotType) HasDate() bool`

HasDate returns a boolean if a field has been set.

### GetInventoryRooms

`func (o *ChannelSnapshotType) GetInventoryRooms() float32`

GetInventoryRooms returns the InventoryRooms field if non-nil, zero value otherwise.

### GetInventoryRoomsOk

`func (o *ChannelSnapshotType) GetInventoryRoomsOk() (*float32, bool)`

GetInventoryRoomsOk returns a tuple with the InventoryRooms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInventoryRooms

`func (o *ChannelSnapshotType) SetInventoryRooms(v float32)`

SetInventoryRooms sets InventoryRooms field to given value.

### HasInventoryRooms

`func (o *ChannelSnapshotType) HasInventoryRooms() bool`

HasInventoryRooms returns a boolean if a field has been set.

### GetRestrictionsInfo

`func (o *ChannelSnapshotType) GetRestrictionsInfo() RestrictionsInfoType`

GetRestrictionsInfo returns the RestrictionsInfo field if non-nil, zero value otherwise.

### GetRestrictionsInfoOk

`func (o *ChannelSnapshotType) GetRestrictionsInfoOk() (*RestrictionsInfoType, bool)`

GetRestrictionsInfoOk returns a tuple with the RestrictionsInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRestrictionsInfo

`func (o *ChannelSnapshotType) SetRestrictionsInfo(v RestrictionsInfoType)`

SetRestrictionsInfo sets RestrictionsInfo field to given value.

### HasRestrictionsInfo

`func (o *ChannelSnapshotType) HasRestrictionsInfo() bool`

HasRestrictionsInfo returns a boolean if a field has been set.

### GetRoomsSold

`func (o *ChannelSnapshotType) GetRoomsSold() float32`

GetRoomsSold returns the RoomsSold field if non-nil, zero value otherwise.

### GetRoomsSoldOk

`func (o *ChannelSnapshotType) GetRoomsSoldOk() (*float32, bool)`

GetRoomsSoldOk returns a tuple with the RoomsSold field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomsSold

`func (o *ChannelSnapshotType) SetRoomsSold(v float32)`

SetRoomsSold sets RoomsSold field to given value.

### HasRoomsSold

`func (o *ChannelSnapshotType) HasRoomsSold() bool`

HasRoomsSold returns a boolean if a field has been set.

### GetSellLimit

`func (o *ChannelSnapshotType) GetSellLimit() float32`

GetSellLimit returns the SellLimit field if non-nil, zero value otherwise.

### GetSellLimitOk

`func (o *ChannelSnapshotType) GetSellLimitOk() (*float32, bool)`

GetSellLimitOk returns a tuple with the SellLimit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSellLimit

`func (o *ChannelSnapshotType) SetSellLimit(v float32)`

SetSellLimit sets SellLimit field to given value.

### HasSellLimit

`func (o *ChannelSnapshotType) HasSellLimit() bool`

HasSellLimit returns a boolean if a field has been set.

### GetTentativeRoomsSold

`func (o *ChannelSnapshotType) GetTentativeRoomsSold() float32`

GetTentativeRoomsSold returns the TentativeRoomsSold field if non-nil, zero value otherwise.

### GetTentativeRoomsSoldOk

`func (o *ChannelSnapshotType) GetTentativeRoomsSoldOk() (*float32, bool)`

GetTentativeRoomsSoldOk returns a tuple with the TentativeRoomsSold field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTentativeRoomsSold

`func (o *ChannelSnapshotType) SetTentativeRoomsSold(v float32)`

SetTentativeRoomsSold sets TentativeRoomsSold field to given value.

### HasTentativeRoomsSold

`func (o *ChannelSnapshotType) HasTentativeRoomsSold() bool`

HasTentativeRoomsSold returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



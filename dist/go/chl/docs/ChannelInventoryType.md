# ChannelInventoryType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Snapshot** | Pointer to [**[]ChannelSnapshotType**](ChannelSnapshotType.md) | Inventory statistics and restriction details. | [optional] 
**BookingChannelCode** | Pointer to **string** | Booking channel code that the snapshot belongs to. | [optional] 
**ChannelRoomType** | Pointer to **string** | Booking channel room type that the snapshot belongs to. | [optional] 

## Methods

### NewChannelInventoryType

`func NewChannelInventoryType() *ChannelInventoryType`

NewChannelInventoryType instantiates a new ChannelInventoryType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChannelInventoryTypeWithDefaults

`func NewChannelInventoryTypeWithDefaults() *ChannelInventoryType`

NewChannelInventoryTypeWithDefaults instantiates a new ChannelInventoryType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSnapshot

`func (o *ChannelInventoryType) GetSnapshot() []ChannelSnapshotType`

GetSnapshot returns the Snapshot field if non-nil, zero value otherwise.

### GetSnapshotOk

`func (o *ChannelInventoryType) GetSnapshotOk() (*[]ChannelSnapshotType, bool)`

GetSnapshotOk returns a tuple with the Snapshot field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSnapshot

`func (o *ChannelInventoryType) SetSnapshot(v []ChannelSnapshotType)`

SetSnapshot sets Snapshot field to given value.

### HasSnapshot

`func (o *ChannelInventoryType) HasSnapshot() bool`

HasSnapshot returns a boolean if a field has been set.

### GetBookingChannelCode

`func (o *ChannelInventoryType) GetBookingChannelCode() string`

GetBookingChannelCode returns the BookingChannelCode field if non-nil, zero value otherwise.

### GetBookingChannelCodeOk

`func (o *ChannelInventoryType) GetBookingChannelCodeOk() (*string, bool)`

GetBookingChannelCodeOk returns a tuple with the BookingChannelCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBookingChannelCode

`func (o *ChannelInventoryType) SetBookingChannelCode(v string)`

SetBookingChannelCode sets BookingChannelCode field to given value.

### HasBookingChannelCode

`func (o *ChannelInventoryType) HasBookingChannelCode() bool`

HasBookingChannelCode returns a boolean if a field has been set.

### GetChannelRoomType

`func (o *ChannelInventoryType) GetChannelRoomType() string`

GetChannelRoomType returns the ChannelRoomType field if non-nil, zero value otherwise.

### GetChannelRoomTypeOk

`func (o *ChannelInventoryType) GetChannelRoomTypeOk() (*string, bool)`

GetChannelRoomTypeOk returns a tuple with the ChannelRoomType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannelRoomType

`func (o *ChannelInventoryType) SetChannelRoomType(v string)`

SetChannelRoomType sets ChannelRoomType field to given value.

### HasChannelRoomType

`func (o *ChannelInventoryType) HasChannelRoomType() bool`

HasChannelRoomType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



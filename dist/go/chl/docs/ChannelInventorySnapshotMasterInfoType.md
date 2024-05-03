# ChannelInventorySnapshotMasterInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BookingChannel** | Pointer to [**[]ChannelInventorySnapshotMasterInfoTypeBookingChannelInner**](ChannelInventorySnapshotMasterInfoTypeBookingChannelInner.md) | Collection of booking channels returned in the channel inventory snapshot and the details about those channels. | [optional] 
**HotelId** | Pointer to **string** | The internal hotel code that the given booking channel info is mapped under. | [optional] 

## Methods

### NewChannelInventorySnapshotMasterInfoType

`func NewChannelInventorySnapshotMasterInfoType() *ChannelInventorySnapshotMasterInfoType`

NewChannelInventorySnapshotMasterInfoType instantiates a new ChannelInventorySnapshotMasterInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChannelInventorySnapshotMasterInfoTypeWithDefaults

`func NewChannelInventorySnapshotMasterInfoTypeWithDefaults() *ChannelInventorySnapshotMasterInfoType`

NewChannelInventorySnapshotMasterInfoTypeWithDefaults instantiates a new ChannelInventorySnapshotMasterInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBookingChannel

`func (o *ChannelInventorySnapshotMasterInfoType) GetBookingChannel() []ChannelInventorySnapshotMasterInfoTypeBookingChannelInner`

GetBookingChannel returns the BookingChannel field if non-nil, zero value otherwise.

### GetBookingChannelOk

`func (o *ChannelInventorySnapshotMasterInfoType) GetBookingChannelOk() (*[]ChannelInventorySnapshotMasterInfoTypeBookingChannelInner, bool)`

GetBookingChannelOk returns a tuple with the BookingChannel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBookingChannel

`func (o *ChannelInventorySnapshotMasterInfoType) SetBookingChannel(v []ChannelInventorySnapshotMasterInfoTypeBookingChannelInner)`

SetBookingChannel sets BookingChannel field to given value.

### HasBookingChannel

`func (o *ChannelInventorySnapshotMasterInfoType) HasBookingChannel() bool`

HasBookingChannel returns a boolean if a field has been set.

### GetHotelId

`func (o *ChannelInventorySnapshotMasterInfoType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ChannelInventorySnapshotMasterInfoType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ChannelInventorySnapshotMasterInfoType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ChannelInventorySnapshotMasterInfoType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



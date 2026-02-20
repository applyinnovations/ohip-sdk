# ChannelRoomMappingMasterInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BookingChannelsInfo** | Pointer to [**[]BookingChannelInfoType**](BookingChannelInfoType.md) | Additional detail about booking channel. | [optional] 
**SourceDescriptions** | Pointer to [**[]ChannelRoomMappingSourceDescriptionsType**](ChannelRoomMappingSourceDescriptionsType.md) | This type holds hotel-channel room type mapping source descriptions. | [optional] 

## Methods

### NewChannelRoomMappingMasterInfoType

`func NewChannelRoomMappingMasterInfoType() *ChannelRoomMappingMasterInfoType`

NewChannelRoomMappingMasterInfoType instantiates a new ChannelRoomMappingMasterInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChannelRoomMappingMasterInfoTypeWithDefaults

`func NewChannelRoomMappingMasterInfoTypeWithDefaults() *ChannelRoomMappingMasterInfoType`

NewChannelRoomMappingMasterInfoTypeWithDefaults instantiates a new ChannelRoomMappingMasterInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBookingChannelsInfo

`func (o *ChannelRoomMappingMasterInfoType) GetBookingChannelsInfo() []BookingChannelInfoType`

GetBookingChannelsInfo returns the BookingChannelsInfo field if non-nil, zero value otherwise.

### GetBookingChannelsInfoOk

`func (o *ChannelRoomMappingMasterInfoType) GetBookingChannelsInfoOk() (*[]BookingChannelInfoType, bool)`

GetBookingChannelsInfoOk returns a tuple with the BookingChannelsInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBookingChannelsInfo

`func (o *ChannelRoomMappingMasterInfoType) SetBookingChannelsInfo(v []BookingChannelInfoType)`

SetBookingChannelsInfo sets BookingChannelsInfo field to given value.

### HasBookingChannelsInfo

`func (o *ChannelRoomMappingMasterInfoType) HasBookingChannelsInfo() bool`

HasBookingChannelsInfo returns a boolean if a field has been set.

### GetSourceDescriptions

`func (o *ChannelRoomMappingMasterInfoType) GetSourceDescriptions() []ChannelRoomMappingSourceDescriptionsType`

GetSourceDescriptions returns the SourceDescriptions field if non-nil, zero value otherwise.

### GetSourceDescriptionsOk

`func (o *ChannelRoomMappingMasterInfoType) GetSourceDescriptionsOk() (*[]ChannelRoomMappingSourceDescriptionsType, bool)`

GetSourceDescriptionsOk returns a tuple with the SourceDescriptions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceDescriptions

`func (o *ChannelRoomMappingMasterInfoType) SetSourceDescriptions(v []ChannelRoomMappingSourceDescriptionsType)`

SetSourceDescriptions sets SourceDescriptions field to given value.

### HasSourceDescriptions

`func (o *ChannelRoomMappingMasterInfoType) HasSourceDescriptions() bool`

HasSourceDescriptions returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



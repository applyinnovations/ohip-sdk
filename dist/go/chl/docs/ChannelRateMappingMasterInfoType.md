# ChannelRateMappingMasterInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BookingChannelsInfo** | Pointer to [**[]BookingChannelInfoType**](BookingChannelInfoType.md) | Additional detail about booking channel. | [optional] 
**SourceDescriptions** | Pointer to [**[]ChannelRateMappingSourceDescriptionsType**](ChannelRateMappingSourceDescriptionsType.md) | Source descriptions of a hotel-channel rate code mapping. | [optional] 

## Methods

### NewChannelRateMappingMasterInfoType

`func NewChannelRateMappingMasterInfoType() *ChannelRateMappingMasterInfoType`

NewChannelRateMappingMasterInfoType instantiates a new ChannelRateMappingMasterInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChannelRateMappingMasterInfoTypeWithDefaults

`func NewChannelRateMappingMasterInfoTypeWithDefaults() *ChannelRateMappingMasterInfoType`

NewChannelRateMappingMasterInfoTypeWithDefaults instantiates a new ChannelRateMappingMasterInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBookingChannelsInfo

`func (o *ChannelRateMappingMasterInfoType) GetBookingChannelsInfo() []BookingChannelInfoType`

GetBookingChannelsInfo returns the BookingChannelsInfo field if non-nil, zero value otherwise.

### GetBookingChannelsInfoOk

`func (o *ChannelRateMappingMasterInfoType) GetBookingChannelsInfoOk() (*[]BookingChannelInfoType, bool)`

GetBookingChannelsInfoOk returns a tuple with the BookingChannelsInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBookingChannelsInfo

`func (o *ChannelRateMappingMasterInfoType) SetBookingChannelsInfo(v []BookingChannelInfoType)`

SetBookingChannelsInfo sets BookingChannelsInfo field to given value.

### HasBookingChannelsInfo

`func (o *ChannelRateMappingMasterInfoType) HasBookingChannelsInfo() bool`

HasBookingChannelsInfo returns a boolean if a field has been set.

### GetSourceDescriptions

`func (o *ChannelRateMappingMasterInfoType) GetSourceDescriptions() []ChannelRateMappingSourceDescriptionsType`

GetSourceDescriptions returns the SourceDescriptions field if non-nil, zero value otherwise.

### GetSourceDescriptionsOk

`func (o *ChannelRateMappingMasterInfoType) GetSourceDescriptionsOk() (*[]ChannelRateMappingSourceDescriptionsType, bool)`

GetSourceDescriptionsOk returns a tuple with the SourceDescriptions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceDescriptions

`func (o *ChannelRateMappingMasterInfoType) SetSourceDescriptions(v []ChannelRateMappingSourceDescriptionsType)`

SetSourceDescriptions sets SourceDescriptions field to given value.

### HasSourceDescriptions

`func (o *ChannelRateMappingMasterInfoType) HasSourceDescriptions() bool`

HasSourceDescriptions returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# ChannelSellLimitsByDateType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ChannelRoomTypeSellLimits** | Pointer to [**[]ChannelSellLimitsByDateTypeChannelRoomTypeSellLimitsInner**](ChannelSellLimitsByDateTypeChannelRoomTypeSellLimitsInner.md) | Details about the sell limit for this particular resort, channel, channel room type, and date. | [optional] 
**ChannelSellLimits** | Pointer to [**[]ChannelSellLimitType**](ChannelSellLimitType.md) | Details about the sell limit for this particular resort, channel, and date. | [optional] 
**HotelId** | Pointer to **string** | Hotel under which the channel sell limits are applicable. | [optional] 

## Methods

### NewChannelSellLimitsByDateType

`func NewChannelSellLimitsByDateType() *ChannelSellLimitsByDateType`

NewChannelSellLimitsByDateType instantiates a new ChannelSellLimitsByDateType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChannelSellLimitsByDateTypeWithDefaults

`func NewChannelSellLimitsByDateTypeWithDefaults() *ChannelSellLimitsByDateType`

NewChannelSellLimitsByDateTypeWithDefaults instantiates a new ChannelSellLimitsByDateType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetChannelRoomTypeSellLimits

`func (o *ChannelSellLimitsByDateType) GetChannelRoomTypeSellLimits() []ChannelSellLimitsByDateTypeChannelRoomTypeSellLimitsInner`

GetChannelRoomTypeSellLimits returns the ChannelRoomTypeSellLimits field if non-nil, zero value otherwise.

### GetChannelRoomTypeSellLimitsOk

`func (o *ChannelSellLimitsByDateType) GetChannelRoomTypeSellLimitsOk() (*[]ChannelSellLimitsByDateTypeChannelRoomTypeSellLimitsInner, bool)`

GetChannelRoomTypeSellLimitsOk returns a tuple with the ChannelRoomTypeSellLimits field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannelRoomTypeSellLimits

`func (o *ChannelSellLimitsByDateType) SetChannelRoomTypeSellLimits(v []ChannelSellLimitsByDateTypeChannelRoomTypeSellLimitsInner)`

SetChannelRoomTypeSellLimits sets ChannelRoomTypeSellLimits field to given value.

### HasChannelRoomTypeSellLimits

`func (o *ChannelSellLimitsByDateType) HasChannelRoomTypeSellLimits() bool`

HasChannelRoomTypeSellLimits returns a boolean if a field has been set.

### GetChannelSellLimits

`func (o *ChannelSellLimitsByDateType) GetChannelSellLimits() []ChannelSellLimitType`

GetChannelSellLimits returns the ChannelSellLimits field if non-nil, zero value otherwise.

### GetChannelSellLimitsOk

`func (o *ChannelSellLimitsByDateType) GetChannelSellLimitsOk() (*[]ChannelSellLimitType, bool)`

GetChannelSellLimitsOk returns a tuple with the ChannelSellLimits field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannelSellLimits

`func (o *ChannelSellLimitsByDateType) SetChannelSellLimits(v []ChannelSellLimitType)`

SetChannelSellLimits sets ChannelSellLimits field to given value.

### HasChannelSellLimits

`func (o *ChannelSellLimitsByDateType) HasChannelSellLimits() bool`

HasChannelSellLimits returns a boolean if a field has been set.

### GetHotelId

`func (o *ChannelSellLimitsByDateType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ChannelSellLimitsByDateType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ChannelSellLimitsByDateType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ChannelSellLimitsByDateType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



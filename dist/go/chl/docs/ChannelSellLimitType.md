# ChannelSellLimitType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BookingChannelCode** | Pointer to **string** | Channel for which this sell limit is applicable. | [optional] 
**Date** | Pointer to **string** | Date on which this sell limit is applicable. | [optional] 
**NumberOfRooms** | Pointer to **int32** | Number of rooms that can be sold for this particular sell limit date. | [optional] 

## Methods

### NewChannelSellLimitType

`func NewChannelSellLimitType() *ChannelSellLimitType`

NewChannelSellLimitType instantiates a new ChannelSellLimitType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChannelSellLimitTypeWithDefaults

`func NewChannelSellLimitTypeWithDefaults() *ChannelSellLimitType`

NewChannelSellLimitTypeWithDefaults instantiates a new ChannelSellLimitType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBookingChannelCode

`func (o *ChannelSellLimitType) GetBookingChannelCode() string`

GetBookingChannelCode returns the BookingChannelCode field if non-nil, zero value otherwise.

### GetBookingChannelCodeOk

`func (o *ChannelSellLimitType) GetBookingChannelCodeOk() (*string, bool)`

GetBookingChannelCodeOk returns a tuple with the BookingChannelCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBookingChannelCode

`func (o *ChannelSellLimitType) SetBookingChannelCode(v string)`

SetBookingChannelCode sets BookingChannelCode field to given value.

### HasBookingChannelCode

`func (o *ChannelSellLimitType) HasBookingChannelCode() bool`

HasBookingChannelCode returns a boolean if a field has been set.

### GetDate

`func (o *ChannelSellLimitType) GetDate() string`

GetDate returns the Date field if non-nil, zero value otherwise.

### GetDateOk

`func (o *ChannelSellLimitType) GetDateOk() (*string, bool)`

GetDateOk returns a tuple with the Date field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDate

`func (o *ChannelSellLimitType) SetDate(v string)`

SetDate sets Date field to given value.

### HasDate

`func (o *ChannelSellLimitType) HasDate() bool`

HasDate returns a boolean if a field has been set.

### GetNumberOfRooms

`func (o *ChannelSellLimitType) GetNumberOfRooms() int32`

GetNumberOfRooms returns the NumberOfRooms field if non-nil, zero value otherwise.

### GetNumberOfRoomsOk

`func (o *ChannelSellLimitType) GetNumberOfRoomsOk() (*int32, bool)`

GetNumberOfRoomsOk returns a tuple with the NumberOfRooms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNumberOfRooms

`func (o *ChannelSellLimitType) SetNumberOfRooms(v int32)`

SetNumberOfRooms sets NumberOfRooms field to given value.

### HasNumberOfRooms

`func (o *ChannelSellLimitType) HasNumberOfRooms() bool`

HasNumberOfRooms returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



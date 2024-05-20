# ChannelSellLimitScheduleType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BookingChannelCode** | Pointer to **string** | Channel for which the sell limit schedule is applicable. | [optional] 
**ChannelRoomType** | Pointer to **string** | Channel room type for which the sell limit schedule is applicable. | [optional] 
**DateRange** | Pointer to [**TimeSpanDaysOfWeekType**](TimeSpanDaysOfWeekType.md) |  | [optional] 
**HotelId** | Pointer to **string** | Hotel for which the sell limit schedule is applicable. | [optional] 
**NumberOfRooms** | Pointer to **int32** | Number of rooms which can be sold under the hotel, channel, and channel room type combination for the specified date range. | [optional] 
**SellLimitId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 

## Methods

### NewChannelSellLimitScheduleType

`func NewChannelSellLimitScheduleType() *ChannelSellLimitScheduleType`

NewChannelSellLimitScheduleType instantiates a new ChannelSellLimitScheduleType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChannelSellLimitScheduleTypeWithDefaults

`func NewChannelSellLimitScheduleTypeWithDefaults() *ChannelSellLimitScheduleType`

NewChannelSellLimitScheduleTypeWithDefaults instantiates a new ChannelSellLimitScheduleType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBookingChannelCode

`func (o *ChannelSellLimitScheduleType) GetBookingChannelCode() string`

GetBookingChannelCode returns the BookingChannelCode field if non-nil, zero value otherwise.

### GetBookingChannelCodeOk

`func (o *ChannelSellLimitScheduleType) GetBookingChannelCodeOk() (*string, bool)`

GetBookingChannelCodeOk returns a tuple with the BookingChannelCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBookingChannelCode

`func (o *ChannelSellLimitScheduleType) SetBookingChannelCode(v string)`

SetBookingChannelCode sets BookingChannelCode field to given value.

### HasBookingChannelCode

`func (o *ChannelSellLimitScheduleType) HasBookingChannelCode() bool`

HasBookingChannelCode returns a boolean if a field has been set.

### GetChannelRoomType

`func (o *ChannelSellLimitScheduleType) GetChannelRoomType() string`

GetChannelRoomType returns the ChannelRoomType field if non-nil, zero value otherwise.

### GetChannelRoomTypeOk

`func (o *ChannelSellLimitScheduleType) GetChannelRoomTypeOk() (*string, bool)`

GetChannelRoomTypeOk returns a tuple with the ChannelRoomType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannelRoomType

`func (o *ChannelSellLimitScheduleType) SetChannelRoomType(v string)`

SetChannelRoomType sets ChannelRoomType field to given value.

### HasChannelRoomType

`func (o *ChannelSellLimitScheduleType) HasChannelRoomType() bool`

HasChannelRoomType returns a boolean if a field has been set.

### GetDateRange

`func (o *ChannelSellLimitScheduleType) GetDateRange() TimeSpanDaysOfWeekType`

GetDateRange returns the DateRange field if non-nil, zero value otherwise.

### GetDateRangeOk

`func (o *ChannelSellLimitScheduleType) GetDateRangeOk() (*TimeSpanDaysOfWeekType, bool)`

GetDateRangeOk returns a tuple with the DateRange field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDateRange

`func (o *ChannelSellLimitScheduleType) SetDateRange(v TimeSpanDaysOfWeekType)`

SetDateRange sets DateRange field to given value.

### HasDateRange

`func (o *ChannelSellLimitScheduleType) HasDateRange() bool`

HasDateRange returns a boolean if a field has been set.

### GetHotelId

`func (o *ChannelSellLimitScheduleType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ChannelSellLimitScheduleType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ChannelSellLimitScheduleType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ChannelSellLimitScheduleType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetNumberOfRooms

`func (o *ChannelSellLimitScheduleType) GetNumberOfRooms() int32`

GetNumberOfRooms returns the NumberOfRooms field if non-nil, zero value otherwise.

### GetNumberOfRoomsOk

`func (o *ChannelSellLimitScheduleType) GetNumberOfRoomsOk() (*int32, bool)`

GetNumberOfRoomsOk returns a tuple with the NumberOfRooms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNumberOfRooms

`func (o *ChannelSellLimitScheduleType) SetNumberOfRooms(v int32)`

SetNumberOfRooms sets NumberOfRooms field to given value.

### HasNumberOfRooms

`func (o *ChannelSellLimitScheduleType) HasNumberOfRooms() bool`

HasNumberOfRooms returns a boolean if a field has been set.

### GetSellLimitId

`func (o *ChannelSellLimitScheduleType) GetSellLimitId() UniqueIDType`

GetSellLimitId returns the SellLimitId field if non-nil, zero value otherwise.

### GetSellLimitIdOk

`func (o *ChannelSellLimitScheduleType) GetSellLimitIdOk() (*UniqueIDType, bool)`

GetSellLimitIdOk returns a tuple with the SellLimitId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSellLimitId

`func (o *ChannelSellLimitScheduleType) SetSellLimitId(v UniqueIDType)`

SetSellLimitId sets SellLimitId field to given value.

### HasSellLimitId

`func (o *ChannelSellLimitScheduleType) HasSellLimitId() bool`

HasSellLimitId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



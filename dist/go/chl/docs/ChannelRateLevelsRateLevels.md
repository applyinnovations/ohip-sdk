# ChannelRateLevelsRateLevels

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RateLevel** | Pointer to [**[]SystemRateLevelType**](SystemRateLevelType.md) | Channel rate level details. | [optional] 
**BookingChannelCode** | Pointer to **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | [optional] 

## Methods

### NewChannelRateLevelsRateLevels

`func NewChannelRateLevelsRateLevels() *ChannelRateLevelsRateLevels`

NewChannelRateLevelsRateLevels instantiates a new ChannelRateLevelsRateLevels object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChannelRateLevelsRateLevelsWithDefaults

`func NewChannelRateLevelsRateLevelsWithDefaults() *ChannelRateLevelsRateLevels`

NewChannelRateLevelsRateLevelsWithDefaults instantiates a new ChannelRateLevelsRateLevels object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRateLevel

`func (o *ChannelRateLevelsRateLevels) GetRateLevel() []SystemRateLevelType`

GetRateLevel returns the RateLevel field if non-nil, zero value otherwise.

### GetRateLevelOk

`func (o *ChannelRateLevelsRateLevels) GetRateLevelOk() (*[]SystemRateLevelType, bool)`

GetRateLevelOk returns a tuple with the RateLevel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateLevel

`func (o *ChannelRateLevelsRateLevels) SetRateLevel(v []SystemRateLevelType)`

SetRateLevel sets RateLevel field to given value.

### HasRateLevel

`func (o *ChannelRateLevelsRateLevels) HasRateLevel() bool`

HasRateLevel returns a boolean if a field has been set.

### GetBookingChannelCode

`func (o *ChannelRateLevelsRateLevels) GetBookingChannelCode() string`

GetBookingChannelCode returns the BookingChannelCode field if non-nil, zero value otherwise.

### GetBookingChannelCodeOk

`func (o *ChannelRateLevelsRateLevels) GetBookingChannelCodeOk() (*string, bool)`

GetBookingChannelCodeOk returns a tuple with the BookingChannelCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBookingChannelCode

`func (o *ChannelRateLevelsRateLevels) SetBookingChannelCode(v string)`

SetBookingChannelCode sets BookingChannelCode field to given value.

### HasBookingChannelCode

`func (o *ChannelRateLevelsRateLevels) HasBookingChannelCode() bool`

HasBookingChannelCode returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



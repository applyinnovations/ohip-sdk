# ProfileRateAccessCode

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | **string** | Unique ID that identifies a single hotel property. | 
**ChannelCode** | **string** | Unique ID that identifies a single Channel. | 
**ChannelRatePlans** | [**[]ProfileChannelRatePlan**](ProfileChannelRatePlan.md) |  | 

## Methods

### NewProfileRateAccessCode

`func NewProfileRateAccessCode(hotelId string, channelCode string, channelRatePlans []ProfileChannelRatePlan, ) *ProfileRateAccessCode`

NewProfileRateAccessCode instantiates a new ProfileRateAccessCode object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProfileRateAccessCodeWithDefaults

`func NewProfileRateAccessCodeWithDefaults() *ProfileRateAccessCode`

NewProfileRateAccessCodeWithDefaults instantiates a new ProfileRateAccessCode object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *ProfileRateAccessCode) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ProfileRateAccessCode) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ProfileRateAccessCode) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.


### GetChannelCode

`func (o *ProfileRateAccessCode) GetChannelCode() string`

GetChannelCode returns the ChannelCode field if non-nil, zero value otherwise.

### GetChannelCodeOk

`func (o *ProfileRateAccessCode) GetChannelCodeOk() (*string, bool)`

GetChannelCodeOk returns a tuple with the ChannelCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannelCode

`func (o *ProfileRateAccessCode) SetChannelCode(v string)`

SetChannelCode sets ChannelCode field to given value.


### GetChannelRatePlans

`func (o *ProfileRateAccessCode) GetChannelRatePlans() []ProfileChannelRatePlan`

GetChannelRatePlans returns the ChannelRatePlans field if non-nil, zero value otherwise.

### GetChannelRatePlansOk

`func (o *ProfileRateAccessCode) GetChannelRatePlansOk() (*[]ProfileChannelRatePlan, bool)`

GetChannelRatePlansOk returns a tuple with the ChannelRatePlans field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannelRatePlans

`func (o *ProfileRateAccessCode) SetChannelRatePlans(v []ProfileChannelRatePlan)`

SetChannelRatePlans sets ChannelRatePlans field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



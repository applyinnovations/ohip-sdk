# ChannelSummaryInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BookingChannel** | Pointer to [**BookingChannelType**](BookingChannelType.md) |  | [optional] 
**MessageId** | Pointer to **string** | Indicates the transaction identifier. | [optional] 
**SummaryOnly** | Pointer to **bool** | Used to indicate whether to return summarized or detailed rate room information. | [optional] 

## Methods

### NewChannelSummaryInfoType

`func NewChannelSummaryInfoType() *ChannelSummaryInfoType`

NewChannelSummaryInfoType instantiates a new ChannelSummaryInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChannelSummaryInfoTypeWithDefaults

`func NewChannelSummaryInfoTypeWithDefaults() *ChannelSummaryInfoType`

NewChannelSummaryInfoTypeWithDefaults instantiates a new ChannelSummaryInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBookingChannel

`func (o *ChannelSummaryInfoType) GetBookingChannel() BookingChannelType`

GetBookingChannel returns the BookingChannel field if non-nil, zero value otherwise.

### GetBookingChannelOk

`func (o *ChannelSummaryInfoType) GetBookingChannelOk() (*BookingChannelType, bool)`

GetBookingChannelOk returns a tuple with the BookingChannel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBookingChannel

`func (o *ChannelSummaryInfoType) SetBookingChannel(v BookingChannelType)`

SetBookingChannel sets BookingChannel field to given value.

### HasBookingChannel

`func (o *ChannelSummaryInfoType) HasBookingChannel() bool`

HasBookingChannel returns a boolean if a field has been set.

### GetMessageId

`func (o *ChannelSummaryInfoType) GetMessageId() string`

GetMessageId returns the MessageId field if non-nil, zero value otherwise.

### GetMessageIdOk

`func (o *ChannelSummaryInfoType) GetMessageIdOk() (*string, bool)`

GetMessageIdOk returns a tuple with the MessageId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessageId

`func (o *ChannelSummaryInfoType) SetMessageId(v string)`

SetMessageId sets MessageId field to given value.

### HasMessageId

`func (o *ChannelSummaryInfoType) HasMessageId() bool`

HasMessageId returns a boolean if a field has been set.

### GetSummaryOnly

`func (o *ChannelSummaryInfoType) GetSummaryOnly() bool`

GetSummaryOnly returns the SummaryOnly field if non-nil, zero value otherwise.

### GetSummaryOnlyOk

`func (o *ChannelSummaryInfoType) GetSummaryOnlyOk() (*bool, bool)`

GetSummaryOnlyOk returns a tuple with the SummaryOnly field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSummaryOnly

`func (o *ChannelSummaryInfoType) SetSummaryOnly(v bool)`

SetSummaryOnly sets SummaryOnly field to given value.

### HasSummaryOnly

`func (o *ChannelSummaryInfoType) HasSummaryOnly() bool`

HasSummaryOnly returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



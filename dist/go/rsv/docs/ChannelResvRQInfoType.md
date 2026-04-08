# ChannelResvRQInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ChannelSummaryInfo** | Pointer to [**ChannelSummaryInfoType**](ChannelSummaryInfoType.md) |  | [optional] 
**ChannelResvAction** | Pointer to [**ChannelResvActionType**](ChannelResvActionType.md) |  | [optional] 
**RetransmissionIndicator** | Pointer to **bool** | This attribute indicates true if the message is resubmitted for processing. | [optional] 

## Methods

### NewChannelResvRQInfoType

`func NewChannelResvRQInfoType() *ChannelResvRQInfoType`

NewChannelResvRQInfoType instantiates a new ChannelResvRQInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChannelResvRQInfoTypeWithDefaults

`func NewChannelResvRQInfoTypeWithDefaults() *ChannelResvRQInfoType`

NewChannelResvRQInfoTypeWithDefaults instantiates a new ChannelResvRQInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetChannelSummaryInfo

`func (o *ChannelResvRQInfoType) GetChannelSummaryInfo() ChannelSummaryInfoType`

GetChannelSummaryInfo returns the ChannelSummaryInfo field if non-nil, zero value otherwise.

### GetChannelSummaryInfoOk

`func (o *ChannelResvRQInfoType) GetChannelSummaryInfoOk() (*ChannelSummaryInfoType, bool)`

GetChannelSummaryInfoOk returns a tuple with the ChannelSummaryInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannelSummaryInfo

`func (o *ChannelResvRQInfoType) SetChannelSummaryInfo(v ChannelSummaryInfoType)`

SetChannelSummaryInfo sets ChannelSummaryInfo field to given value.

### HasChannelSummaryInfo

`func (o *ChannelResvRQInfoType) HasChannelSummaryInfo() bool`

HasChannelSummaryInfo returns a boolean if a field has been set.

### GetChannelResvAction

`func (o *ChannelResvRQInfoType) GetChannelResvAction() ChannelResvActionType`

GetChannelResvAction returns the ChannelResvAction field if non-nil, zero value otherwise.

### GetChannelResvActionOk

`func (o *ChannelResvRQInfoType) GetChannelResvActionOk() (*ChannelResvActionType, bool)`

GetChannelResvActionOk returns a tuple with the ChannelResvAction field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannelResvAction

`func (o *ChannelResvRQInfoType) SetChannelResvAction(v ChannelResvActionType)`

SetChannelResvAction sets ChannelResvAction field to given value.

### HasChannelResvAction

`func (o *ChannelResvRQInfoType) HasChannelResvAction() bool`

HasChannelResvAction returns a boolean if a field has been set.

### GetRetransmissionIndicator

`func (o *ChannelResvRQInfoType) GetRetransmissionIndicator() bool`

GetRetransmissionIndicator returns the RetransmissionIndicator field if non-nil, zero value otherwise.

### GetRetransmissionIndicatorOk

`func (o *ChannelResvRQInfoType) GetRetransmissionIndicatorOk() (*bool, bool)`

GetRetransmissionIndicatorOk returns a tuple with the RetransmissionIndicator field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRetransmissionIndicator

`func (o *ChannelResvRQInfoType) SetRetransmissionIndicator(v bool)`

SetRetransmissionIndicator sets RetransmissionIndicator field to given value.

### HasRetransmissionIndicator

`func (o *ChannelResvRQInfoType) HasRetransmissionIndicator() bool`

HasRetransmissionIndicator returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



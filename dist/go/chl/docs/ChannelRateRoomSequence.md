# ChannelRateRoomSequence

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ChannelRateRoomList** | Pointer to [**ChannelRateRoomListType**](ChannelRateRoomListType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewChannelRateRoomSequence

`func NewChannelRateRoomSequence() *ChannelRateRoomSequence`

NewChannelRateRoomSequence instantiates a new ChannelRateRoomSequence object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChannelRateRoomSequenceWithDefaults

`func NewChannelRateRoomSequenceWithDefaults() *ChannelRateRoomSequence`

NewChannelRateRoomSequenceWithDefaults instantiates a new ChannelRateRoomSequence object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetChannelRateRoomList

`func (o *ChannelRateRoomSequence) GetChannelRateRoomList() ChannelRateRoomListType`

GetChannelRateRoomList returns the ChannelRateRoomList field if non-nil, zero value otherwise.

### GetChannelRateRoomListOk

`func (o *ChannelRateRoomSequence) GetChannelRateRoomListOk() (*ChannelRateRoomListType, bool)`

GetChannelRateRoomListOk returns a tuple with the ChannelRateRoomList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannelRateRoomList

`func (o *ChannelRateRoomSequence) SetChannelRateRoomList(v ChannelRateRoomListType)`

SetChannelRateRoomList sets ChannelRateRoomList field to given value.

### HasChannelRateRoomList

`func (o *ChannelRateRoomSequence) HasChannelRateRoomList() bool`

HasChannelRateRoomList returns a boolean if a field has been set.

### GetLinks

`func (o *ChannelRateRoomSequence) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ChannelRateRoomSequence) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ChannelRateRoomSequence) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ChannelRateRoomSequence) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ChannelRateRoomSequence) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ChannelRateRoomSequence) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ChannelRateRoomSequence) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ChannelRateRoomSequence) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



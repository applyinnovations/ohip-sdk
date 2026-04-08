# ChannelResvRSInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ChannelSummaryInfo** | Pointer to [**ChannelSummaryInfoType**](ChannelSummaryInfoType.md) |  | [optional] 
**ChannelResvStatus** | Pointer to [**ChannelResvStatusType**](ChannelResvStatusType.md) |  | [optional] 
**ChannelMarketingInfo** | Pointer to [**[]ChannelMarketingInfoTypeInner**](ChannelMarketingInfoTypeInner.md) | Marketing Text like cancel policy, deposit policy etc. | [optional] 
**LastCommittedResv** | Pointer to [**LastCommittedResvType**](LastCommittedResvType.md) |  | [optional] 
**InSessionReservationId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 

## Methods

### NewChannelResvRSInfoType

`func NewChannelResvRSInfoType() *ChannelResvRSInfoType`

NewChannelResvRSInfoType instantiates a new ChannelResvRSInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChannelResvRSInfoTypeWithDefaults

`func NewChannelResvRSInfoTypeWithDefaults() *ChannelResvRSInfoType`

NewChannelResvRSInfoTypeWithDefaults instantiates a new ChannelResvRSInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetChannelSummaryInfo

`func (o *ChannelResvRSInfoType) GetChannelSummaryInfo() ChannelSummaryInfoType`

GetChannelSummaryInfo returns the ChannelSummaryInfo field if non-nil, zero value otherwise.

### GetChannelSummaryInfoOk

`func (o *ChannelResvRSInfoType) GetChannelSummaryInfoOk() (*ChannelSummaryInfoType, bool)`

GetChannelSummaryInfoOk returns a tuple with the ChannelSummaryInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannelSummaryInfo

`func (o *ChannelResvRSInfoType) SetChannelSummaryInfo(v ChannelSummaryInfoType)`

SetChannelSummaryInfo sets ChannelSummaryInfo field to given value.

### HasChannelSummaryInfo

`func (o *ChannelResvRSInfoType) HasChannelSummaryInfo() bool`

HasChannelSummaryInfo returns a boolean if a field has been set.

### GetChannelResvStatus

`func (o *ChannelResvRSInfoType) GetChannelResvStatus() ChannelResvStatusType`

GetChannelResvStatus returns the ChannelResvStatus field if non-nil, zero value otherwise.

### GetChannelResvStatusOk

`func (o *ChannelResvRSInfoType) GetChannelResvStatusOk() (*ChannelResvStatusType, bool)`

GetChannelResvStatusOk returns a tuple with the ChannelResvStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannelResvStatus

`func (o *ChannelResvRSInfoType) SetChannelResvStatus(v ChannelResvStatusType)`

SetChannelResvStatus sets ChannelResvStatus field to given value.

### HasChannelResvStatus

`func (o *ChannelResvRSInfoType) HasChannelResvStatus() bool`

HasChannelResvStatus returns a boolean if a field has been set.

### GetChannelMarketingInfo

`func (o *ChannelResvRSInfoType) GetChannelMarketingInfo() []ChannelMarketingInfoTypeInner`

GetChannelMarketingInfo returns the ChannelMarketingInfo field if non-nil, zero value otherwise.

### GetChannelMarketingInfoOk

`func (o *ChannelResvRSInfoType) GetChannelMarketingInfoOk() (*[]ChannelMarketingInfoTypeInner, bool)`

GetChannelMarketingInfoOk returns a tuple with the ChannelMarketingInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannelMarketingInfo

`func (o *ChannelResvRSInfoType) SetChannelMarketingInfo(v []ChannelMarketingInfoTypeInner)`

SetChannelMarketingInfo sets ChannelMarketingInfo field to given value.

### HasChannelMarketingInfo

`func (o *ChannelResvRSInfoType) HasChannelMarketingInfo() bool`

HasChannelMarketingInfo returns a boolean if a field has been set.

### GetLastCommittedResv

`func (o *ChannelResvRSInfoType) GetLastCommittedResv() LastCommittedResvType`

GetLastCommittedResv returns the LastCommittedResv field if non-nil, zero value otherwise.

### GetLastCommittedResvOk

`func (o *ChannelResvRSInfoType) GetLastCommittedResvOk() (*LastCommittedResvType, bool)`

GetLastCommittedResvOk returns a tuple with the LastCommittedResv field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastCommittedResv

`func (o *ChannelResvRSInfoType) SetLastCommittedResv(v LastCommittedResvType)`

SetLastCommittedResv sets LastCommittedResv field to given value.

### HasLastCommittedResv

`func (o *ChannelResvRSInfoType) HasLastCommittedResv() bool`

HasLastCommittedResv returns a boolean if a field has been set.

### GetInSessionReservationId

`func (o *ChannelResvRSInfoType) GetInSessionReservationId() UniqueIDType`

GetInSessionReservationId returns the InSessionReservationId field if non-nil, zero value otherwise.

### GetInSessionReservationIdOk

`func (o *ChannelResvRSInfoType) GetInSessionReservationIdOk() (*UniqueIDType, bool)`

GetInSessionReservationIdOk returns a tuple with the InSessionReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInSessionReservationId

`func (o *ChannelResvRSInfoType) SetInSessionReservationId(v UniqueIDType)`

SetInSessionReservationId sets InSessionReservationId field to given value.

### HasInSessionReservationId

`func (o *ChannelResvRSInfoType) HasInSessionReservationId() bool`

HasInSessionReservationId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



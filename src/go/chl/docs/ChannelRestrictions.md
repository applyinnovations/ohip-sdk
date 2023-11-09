# ChannelRestrictions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**PublishRestriction** | Pointer to [**PublishRatePlanType**](PublishRatePlanType.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewChannelRestrictions

`func NewChannelRestrictions() *ChannelRestrictions`

NewChannelRestrictions instantiates a new ChannelRestrictions object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChannelRestrictionsWithDefaults

`func NewChannelRestrictionsWithDefaults() *ChannelRestrictions`

NewChannelRestrictionsWithDefaults instantiates a new ChannelRestrictions object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *ChannelRestrictions) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ChannelRestrictions) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ChannelRestrictions) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ChannelRestrictions) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetPublishRestriction

`func (o *ChannelRestrictions) GetPublishRestriction() PublishRatePlanType`

GetPublishRestriction returns the PublishRestriction field if non-nil, zero value otherwise.

### GetPublishRestrictionOk

`func (o *ChannelRestrictions) GetPublishRestrictionOk() (*PublishRatePlanType, bool)`

GetPublishRestrictionOk returns a tuple with the PublishRestriction field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPublishRestriction

`func (o *ChannelRestrictions) SetPublishRestriction(v PublishRatePlanType)`

SetPublishRestriction sets PublishRestriction field to given value.

### HasPublishRestriction

`func (o *ChannelRestrictions) HasPublishRestriction() bool`

HasPublishRestriction returns a boolean if a field has been set.

### GetWarnings

`func (o *ChannelRestrictions) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ChannelRestrictions) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ChannelRestrictions) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ChannelRestrictions) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



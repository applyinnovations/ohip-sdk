# PublishChannelRestrictionsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PublishRestriction** | Pointer to [**PublishRatePlanType**](PublishRatePlanType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPublishChannelRestrictionsRequest

`func NewPublishChannelRestrictionsRequest() *PublishChannelRestrictionsRequest`

NewPublishChannelRestrictionsRequest instantiates a new PublishChannelRestrictionsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPublishChannelRestrictionsRequestWithDefaults

`func NewPublishChannelRestrictionsRequestWithDefaults() *PublishChannelRestrictionsRequest`

NewPublishChannelRestrictionsRequestWithDefaults instantiates a new PublishChannelRestrictionsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPublishRestriction

`func (o *PublishChannelRestrictionsRequest) GetPublishRestriction() PublishRatePlanType`

GetPublishRestriction returns the PublishRestriction field if non-nil, zero value otherwise.

### GetPublishRestrictionOk

`func (o *PublishChannelRestrictionsRequest) GetPublishRestrictionOk() (*PublishRatePlanType, bool)`

GetPublishRestrictionOk returns a tuple with the PublishRestriction field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPublishRestriction

`func (o *PublishChannelRestrictionsRequest) SetPublishRestriction(v PublishRatePlanType)`

SetPublishRestriction sets PublishRestriction field to given value.

### HasPublishRestriction

`func (o *PublishChannelRestrictionsRequest) HasPublishRestriction() bool`

HasPublishRestriction returns a boolean if a field has been set.

### GetLinks

`func (o *PublishChannelRestrictionsRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PublishChannelRestrictionsRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PublishChannelRestrictionsRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PublishChannelRestrictionsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PublishChannelRestrictionsRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PublishChannelRestrictionsRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PublishChannelRestrictionsRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PublishChannelRestrictionsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



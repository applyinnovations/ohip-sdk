# PublishChannelRatePlansRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PublishRatePlan** | Pointer to [**PublishRatePlanType**](PublishRatePlanType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPublishChannelRatePlansRequest

`func NewPublishChannelRatePlansRequest() *PublishChannelRatePlansRequest`

NewPublishChannelRatePlansRequest instantiates a new PublishChannelRatePlansRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPublishChannelRatePlansRequestWithDefaults

`func NewPublishChannelRatePlansRequestWithDefaults() *PublishChannelRatePlansRequest`

NewPublishChannelRatePlansRequestWithDefaults instantiates a new PublishChannelRatePlansRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPublishRatePlan

`func (o *PublishChannelRatePlansRequest) GetPublishRatePlan() PublishRatePlanType`

GetPublishRatePlan returns the PublishRatePlan field if non-nil, zero value otherwise.

### GetPublishRatePlanOk

`func (o *PublishChannelRatePlansRequest) GetPublishRatePlanOk() (*PublishRatePlanType, bool)`

GetPublishRatePlanOk returns a tuple with the PublishRatePlan field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPublishRatePlan

`func (o *PublishChannelRatePlansRequest) SetPublishRatePlan(v PublishRatePlanType)`

SetPublishRatePlan sets PublishRatePlan field to given value.

### HasPublishRatePlan

`func (o *PublishChannelRatePlansRequest) HasPublishRatePlan() bool`

HasPublishRatePlan returns a boolean if a field has been set.

### GetLinks

`func (o *PublishChannelRatePlansRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PublishChannelRatePlansRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PublishChannelRatePlansRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PublishChannelRatePlansRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PublishChannelRatePlansRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PublishChannelRatePlansRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PublishChannelRatePlansRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PublishChannelRatePlansRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



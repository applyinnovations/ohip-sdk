# PublishChannelAvailabilityRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**PublishAvailability** | Pointer to [**PublishRatePlanType**](PublishRatePlanType.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPublishChannelAvailabilityRequest

`func NewPublishChannelAvailabilityRequest() *PublishChannelAvailabilityRequest`

NewPublishChannelAvailabilityRequest instantiates a new PublishChannelAvailabilityRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPublishChannelAvailabilityRequestWithDefaults

`func NewPublishChannelAvailabilityRequestWithDefaults() *PublishChannelAvailabilityRequest`

NewPublishChannelAvailabilityRequestWithDefaults instantiates a new PublishChannelAvailabilityRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *PublishChannelAvailabilityRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PublishChannelAvailabilityRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PublishChannelAvailabilityRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PublishChannelAvailabilityRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetPublishAvailability

`func (o *PublishChannelAvailabilityRequest) GetPublishAvailability() PublishRatePlanType`

GetPublishAvailability returns the PublishAvailability field if non-nil, zero value otherwise.

### GetPublishAvailabilityOk

`func (o *PublishChannelAvailabilityRequest) GetPublishAvailabilityOk() (*PublishRatePlanType, bool)`

GetPublishAvailabilityOk returns a tuple with the PublishAvailability field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPublishAvailability

`func (o *PublishChannelAvailabilityRequest) SetPublishAvailability(v PublishRatePlanType)`

SetPublishAvailability sets PublishAvailability field to given value.

### HasPublishAvailability

`func (o *PublishChannelAvailabilityRequest) HasPublishAvailability() bool`

HasPublishAvailability returns a boolean if a field has been set.

### GetWarnings

`func (o *PublishChannelAvailabilityRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PublishChannelAvailabilityRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PublishChannelAvailabilityRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PublishChannelAvailabilityRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



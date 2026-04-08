# ChannelAvailability

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PublishAvailability** | Pointer to [**PublishRatePlanType**](PublishRatePlanType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewChannelAvailability

`func NewChannelAvailability() *ChannelAvailability`

NewChannelAvailability instantiates a new ChannelAvailability object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChannelAvailabilityWithDefaults

`func NewChannelAvailabilityWithDefaults() *ChannelAvailability`

NewChannelAvailabilityWithDefaults instantiates a new ChannelAvailability object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPublishAvailability

`func (o *ChannelAvailability) GetPublishAvailability() PublishRatePlanType`

GetPublishAvailability returns the PublishAvailability field if non-nil, zero value otherwise.

### GetPublishAvailabilityOk

`func (o *ChannelAvailability) GetPublishAvailabilityOk() (*PublishRatePlanType, bool)`

GetPublishAvailabilityOk returns a tuple with the PublishAvailability field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPublishAvailability

`func (o *ChannelAvailability) SetPublishAvailability(v PublishRatePlanType)`

SetPublishAvailability sets PublishAvailability field to given value.

### HasPublishAvailability

`func (o *ChannelAvailability) HasPublishAvailability() bool`

HasPublishAvailability returns a boolean if a field has been set.

### GetLinks

`func (o *ChannelAvailability) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ChannelAvailability) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ChannelAvailability) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ChannelAvailability) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ChannelAvailability) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ChannelAvailability) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ChannelAvailability) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ChannelAvailability) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



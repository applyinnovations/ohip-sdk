# ChannelGlobalDescriptions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ChannelGlobalDescriptions** | Pointer to [**[]GenericGlobalDescriptionType**](GenericGlobalDescriptionType.md) | Collection of GDS channel Global description types | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewChannelGlobalDescriptions

`func NewChannelGlobalDescriptions() *ChannelGlobalDescriptions`

NewChannelGlobalDescriptions instantiates a new ChannelGlobalDescriptions object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChannelGlobalDescriptionsWithDefaults

`func NewChannelGlobalDescriptionsWithDefaults() *ChannelGlobalDescriptions`

NewChannelGlobalDescriptionsWithDefaults instantiates a new ChannelGlobalDescriptions object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetChannelGlobalDescriptions

`func (o *ChannelGlobalDescriptions) GetChannelGlobalDescriptions() []GenericGlobalDescriptionType`

GetChannelGlobalDescriptions returns the ChannelGlobalDescriptions field if non-nil, zero value otherwise.

### GetChannelGlobalDescriptionsOk

`func (o *ChannelGlobalDescriptions) GetChannelGlobalDescriptionsOk() (*[]GenericGlobalDescriptionType, bool)`

GetChannelGlobalDescriptionsOk returns a tuple with the ChannelGlobalDescriptions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannelGlobalDescriptions

`func (o *ChannelGlobalDescriptions) SetChannelGlobalDescriptions(v []GenericGlobalDescriptionType)`

SetChannelGlobalDescriptions sets ChannelGlobalDescriptions field to given value.

### HasChannelGlobalDescriptions

`func (o *ChannelGlobalDescriptions) HasChannelGlobalDescriptions() bool`

HasChannelGlobalDescriptions returns a boolean if a field has been set.

### GetLinks

`func (o *ChannelGlobalDescriptions) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ChannelGlobalDescriptions) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ChannelGlobalDescriptions) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ChannelGlobalDescriptions) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ChannelGlobalDescriptions) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ChannelGlobalDescriptions) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ChannelGlobalDescriptions) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ChannelGlobalDescriptions) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



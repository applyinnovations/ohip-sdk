# ChannelRateMapping

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ChannelRateMappings** | Pointer to [**ChannelRateMappingChannelRateMappings**](ChannelRateMappingChannelRateMappings.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewChannelRateMapping

`func NewChannelRateMapping() *ChannelRateMapping`

NewChannelRateMapping instantiates a new ChannelRateMapping object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChannelRateMappingWithDefaults

`func NewChannelRateMappingWithDefaults() *ChannelRateMapping`

NewChannelRateMappingWithDefaults instantiates a new ChannelRateMapping object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetChannelRateMappings

`func (o *ChannelRateMapping) GetChannelRateMappings() ChannelRateMappingChannelRateMappings`

GetChannelRateMappings returns the ChannelRateMappings field if non-nil, zero value otherwise.

### GetChannelRateMappingsOk

`func (o *ChannelRateMapping) GetChannelRateMappingsOk() (*ChannelRateMappingChannelRateMappings, bool)`

GetChannelRateMappingsOk returns a tuple with the ChannelRateMappings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannelRateMappings

`func (o *ChannelRateMapping) SetChannelRateMappings(v ChannelRateMappingChannelRateMappings)`

SetChannelRateMappings sets ChannelRateMappings field to given value.

### HasChannelRateMappings

`func (o *ChannelRateMapping) HasChannelRateMappings() bool`

HasChannelRateMappings returns a boolean if a field has been set.

### GetLinks

`func (o *ChannelRateMapping) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ChannelRateMapping) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ChannelRateMapping) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ChannelRateMapping) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ChannelRateMapping) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ChannelRateMapping) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ChannelRateMapping) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ChannelRateMapping) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



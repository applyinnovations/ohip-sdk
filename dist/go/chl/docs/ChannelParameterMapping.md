# ChannelParameterMapping

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ChannelParameterMapping** | Pointer to [**ChannelParameterMappingType**](ChannelParameterMappingType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewChannelParameterMapping

`func NewChannelParameterMapping() *ChannelParameterMapping`

NewChannelParameterMapping instantiates a new ChannelParameterMapping object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChannelParameterMappingWithDefaults

`func NewChannelParameterMappingWithDefaults() *ChannelParameterMapping`

NewChannelParameterMappingWithDefaults instantiates a new ChannelParameterMapping object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetChannelParameterMapping

`func (o *ChannelParameterMapping) GetChannelParameterMapping() ChannelParameterMappingType`

GetChannelParameterMapping returns the ChannelParameterMapping field if non-nil, zero value otherwise.

### GetChannelParameterMappingOk

`func (o *ChannelParameterMapping) GetChannelParameterMappingOk() (*ChannelParameterMappingType, bool)`

GetChannelParameterMappingOk returns a tuple with the ChannelParameterMapping field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannelParameterMapping

`func (o *ChannelParameterMapping) SetChannelParameterMapping(v ChannelParameterMappingType)`

SetChannelParameterMapping sets ChannelParameterMapping field to given value.

### HasChannelParameterMapping

`func (o *ChannelParameterMapping) HasChannelParameterMapping() bool`

HasChannelParameterMapping returns a boolean if a field has been set.

### GetLinks

`func (o *ChannelParameterMapping) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ChannelParameterMapping) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ChannelParameterMapping) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ChannelParameterMapping) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ChannelParameterMapping) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ChannelParameterMapping) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ChannelParameterMapping) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ChannelParameterMapping) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



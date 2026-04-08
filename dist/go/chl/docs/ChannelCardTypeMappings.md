# ChannelCardTypeMappings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ChannelCardTypeMapping** | Pointer to [**ChannelCardTypeMappingType**](ChannelCardTypeMappingType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewChannelCardTypeMappings

`func NewChannelCardTypeMappings() *ChannelCardTypeMappings`

NewChannelCardTypeMappings instantiates a new ChannelCardTypeMappings object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChannelCardTypeMappingsWithDefaults

`func NewChannelCardTypeMappingsWithDefaults() *ChannelCardTypeMappings`

NewChannelCardTypeMappingsWithDefaults instantiates a new ChannelCardTypeMappings object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetChannelCardTypeMapping

`func (o *ChannelCardTypeMappings) GetChannelCardTypeMapping() ChannelCardTypeMappingType`

GetChannelCardTypeMapping returns the ChannelCardTypeMapping field if non-nil, zero value otherwise.

### GetChannelCardTypeMappingOk

`func (o *ChannelCardTypeMappings) GetChannelCardTypeMappingOk() (*ChannelCardTypeMappingType, bool)`

GetChannelCardTypeMappingOk returns a tuple with the ChannelCardTypeMapping field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannelCardTypeMapping

`func (o *ChannelCardTypeMappings) SetChannelCardTypeMapping(v ChannelCardTypeMappingType)`

SetChannelCardTypeMapping sets ChannelCardTypeMapping field to given value.

### HasChannelCardTypeMapping

`func (o *ChannelCardTypeMappings) HasChannelCardTypeMapping() bool`

HasChannelCardTypeMapping returns a boolean if a field has been set.

### GetLinks

`func (o *ChannelCardTypeMappings) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ChannelCardTypeMappings) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ChannelCardTypeMappings) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ChannelCardTypeMappings) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ChannelCardTypeMappings) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ChannelCardTypeMappings) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ChannelCardTypeMappings) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ChannelCardTypeMappings) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



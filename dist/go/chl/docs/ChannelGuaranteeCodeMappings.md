# ChannelGuaranteeCodeMappings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ChannelGuaranteeCodeMapping** | Pointer to [**ChannelGuaranteeCodeMappingType**](ChannelGuaranteeCodeMappingType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewChannelGuaranteeCodeMappings

`func NewChannelGuaranteeCodeMappings() *ChannelGuaranteeCodeMappings`

NewChannelGuaranteeCodeMappings instantiates a new ChannelGuaranteeCodeMappings object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChannelGuaranteeCodeMappingsWithDefaults

`func NewChannelGuaranteeCodeMappingsWithDefaults() *ChannelGuaranteeCodeMappings`

NewChannelGuaranteeCodeMappingsWithDefaults instantiates a new ChannelGuaranteeCodeMappings object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetChannelGuaranteeCodeMapping

`func (o *ChannelGuaranteeCodeMappings) GetChannelGuaranteeCodeMapping() ChannelGuaranteeCodeMappingType`

GetChannelGuaranteeCodeMapping returns the ChannelGuaranteeCodeMapping field if non-nil, zero value otherwise.

### GetChannelGuaranteeCodeMappingOk

`func (o *ChannelGuaranteeCodeMappings) GetChannelGuaranteeCodeMappingOk() (*ChannelGuaranteeCodeMappingType, bool)`

GetChannelGuaranteeCodeMappingOk returns a tuple with the ChannelGuaranteeCodeMapping field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannelGuaranteeCodeMapping

`func (o *ChannelGuaranteeCodeMappings) SetChannelGuaranteeCodeMapping(v ChannelGuaranteeCodeMappingType)`

SetChannelGuaranteeCodeMapping sets ChannelGuaranteeCodeMapping field to given value.

### HasChannelGuaranteeCodeMapping

`func (o *ChannelGuaranteeCodeMappings) HasChannelGuaranteeCodeMapping() bool`

HasChannelGuaranteeCodeMapping returns a boolean if a field has been set.

### GetLinks

`func (o *ChannelGuaranteeCodeMappings) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ChannelGuaranteeCodeMappings) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ChannelGuaranteeCodeMappings) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ChannelGuaranteeCodeMappings) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ChannelGuaranteeCodeMappings) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ChannelGuaranteeCodeMappings) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ChannelGuaranteeCodeMappings) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ChannelGuaranteeCodeMappings) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



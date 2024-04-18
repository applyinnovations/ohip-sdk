# ChannelOrgMapping

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ChannelOrgMappingDetails** | Pointer to [**ChannelOrgMappingType**](ChannelOrgMappingType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewChannelOrgMapping

`func NewChannelOrgMapping() *ChannelOrgMapping`

NewChannelOrgMapping instantiates a new ChannelOrgMapping object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChannelOrgMappingWithDefaults

`func NewChannelOrgMappingWithDefaults() *ChannelOrgMapping`

NewChannelOrgMappingWithDefaults instantiates a new ChannelOrgMapping object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetChannelOrgMappingDetails

`func (o *ChannelOrgMapping) GetChannelOrgMappingDetails() ChannelOrgMappingType`

GetChannelOrgMappingDetails returns the ChannelOrgMappingDetails field if non-nil, zero value otherwise.

### GetChannelOrgMappingDetailsOk

`func (o *ChannelOrgMapping) GetChannelOrgMappingDetailsOk() (*ChannelOrgMappingType, bool)`

GetChannelOrgMappingDetailsOk returns a tuple with the ChannelOrgMappingDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannelOrgMappingDetails

`func (o *ChannelOrgMapping) SetChannelOrgMappingDetails(v ChannelOrgMappingType)`

SetChannelOrgMappingDetails sets ChannelOrgMappingDetails field to given value.

### HasChannelOrgMappingDetails

`func (o *ChannelOrgMapping) HasChannelOrgMappingDetails() bool`

HasChannelOrgMappingDetails returns a boolean if a field has been set.

### GetLinks

`func (o *ChannelOrgMapping) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ChannelOrgMapping) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ChannelOrgMapping) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ChannelOrgMapping) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ChannelOrgMapping) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ChannelOrgMapping) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ChannelOrgMapping) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ChannelOrgMapping) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


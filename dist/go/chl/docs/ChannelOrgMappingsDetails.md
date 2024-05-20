# ChannelOrgMappingsDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ChannelOrgMappingsDetails** | Pointer to [**[]ChannelOrgMappingType**](ChannelOrgMappingType.md) | Respresents information of the Channel Code, OrgCode and Default Login Resort used for mapping. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewChannelOrgMappingsDetails

`func NewChannelOrgMappingsDetails() *ChannelOrgMappingsDetails`

NewChannelOrgMappingsDetails instantiates a new ChannelOrgMappingsDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChannelOrgMappingsDetailsWithDefaults

`func NewChannelOrgMappingsDetailsWithDefaults() *ChannelOrgMappingsDetails`

NewChannelOrgMappingsDetailsWithDefaults instantiates a new ChannelOrgMappingsDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetChannelOrgMappingsDetails

`func (o *ChannelOrgMappingsDetails) GetChannelOrgMappingsDetails() []ChannelOrgMappingType`

GetChannelOrgMappingsDetails returns the ChannelOrgMappingsDetails field if non-nil, zero value otherwise.

### GetChannelOrgMappingsDetailsOk

`func (o *ChannelOrgMappingsDetails) GetChannelOrgMappingsDetailsOk() (*[]ChannelOrgMappingType, bool)`

GetChannelOrgMappingsDetailsOk returns a tuple with the ChannelOrgMappingsDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannelOrgMappingsDetails

`func (o *ChannelOrgMappingsDetails) SetChannelOrgMappingsDetails(v []ChannelOrgMappingType)`

SetChannelOrgMappingsDetails sets ChannelOrgMappingsDetails field to given value.

### HasChannelOrgMappingsDetails

`func (o *ChannelOrgMappingsDetails) HasChannelOrgMappingsDetails() bool`

HasChannelOrgMappingsDetails returns a boolean if a field has been set.

### GetLinks

`func (o *ChannelOrgMappingsDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ChannelOrgMappingsDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ChannelOrgMappingsDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ChannelOrgMappingsDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ChannelOrgMappingsDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ChannelOrgMappingsDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ChannelOrgMappingsDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ChannelOrgMappingsDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



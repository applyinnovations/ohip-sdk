# ChannelRateMappings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ChannelRateMappings** | Pointer to [**ChannelRateMappingsType**](ChannelRateMappingsType.md) |  | [optional] 
**MasterInfo** | Pointer to [**ChannelRateMappingMasterInfoType**](ChannelRateMappingMasterInfoType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewChannelRateMappings

`func NewChannelRateMappings() *ChannelRateMappings`

NewChannelRateMappings instantiates a new ChannelRateMappings object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChannelRateMappingsWithDefaults

`func NewChannelRateMappingsWithDefaults() *ChannelRateMappings`

NewChannelRateMappingsWithDefaults instantiates a new ChannelRateMappings object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetChannelRateMappings

`func (o *ChannelRateMappings) GetChannelRateMappings() ChannelRateMappingsType`

GetChannelRateMappings returns the ChannelRateMappings field if non-nil, zero value otherwise.

### GetChannelRateMappingsOk

`func (o *ChannelRateMappings) GetChannelRateMappingsOk() (*ChannelRateMappingsType, bool)`

GetChannelRateMappingsOk returns a tuple with the ChannelRateMappings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannelRateMappings

`func (o *ChannelRateMappings) SetChannelRateMappings(v ChannelRateMappingsType)`

SetChannelRateMappings sets ChannelRateMappings field to given value.

### HasChannelRateMappings

`func (o *ChannelRateMappings) HasChannelRateMappings() bool`

HasChannelRateMappings returns a boolean if a field has been set.

### GetMasterInfo

`func (o *ChannelRateMappings) GetMasterInfo() ChannelRateMappingMasterInfoType`

GetMasterInfo returns the MasterInfo field if non-nil, zero value otherwise.

### GetMasterInfoOk

`func (o *ChannelRateMappings) GetMasterInfoOk() (*ChannelRateMappingMasterInfoType, bool)`

GetMasterInfoOk returns a tuple with the MasterInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMasterInfo

`func (o *ChannelRateMappings) SetMasterInfo(v ChannelRateMappingMasterInfoType)`

SetMasterInfo sets MasterInfo field to given value.

### HasMasterInfo

`func (o *ChannelRateMappings) HasMasterInfo() bool`

HasMasterInfo returns a boolean if a field has been set.

### GetLinks

`func (o *ChannelRateMappings) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ChannelRateMappings) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ChannelRateMappings) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ChannelRateMappings) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ChannelRateMappings) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ChannelRateMappings) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ChannelRateMappings) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ChannelRateMappings) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



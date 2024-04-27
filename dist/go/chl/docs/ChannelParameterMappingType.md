# ChannelParameterMappingType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Groups** | Pointer to [**[]ChannelParameterGroupType**](ChannelParameterGroupType.md) | Collection of channel parameters organized into groups. | [optional] 
**SystemInfo** | Pointer to [**SystemInfoType**](SystemInfoType.md) |  | [optional] 

## Methods

### NewChannelParameterMappingType

`func NewChannelParameterMappingType() *ChannelParameterMappingType`

NewChannelParameterMappingType instantiates a new ChannelParameterMappingType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChannelParameterMappingTypeWithDefaults

`func NewChannelParameterMappingTypeWithDefaults() *ChannelParameterMappingType`

NewChannelParameterMappingTypeWithDefaults instantiates a new ChannelParameterMappingType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetGroups

`func (o *ChannelParameterMappingType) GetGroups() []ChannelParameterGroupType`

GetGroups returns the Groups field if non-nil, zero value otherwise.

### GetGroupsOk

`func (o *ChannelParameterMappingType) GetGroupsOk() (*[]ChannelParameterGroupType, bool)`

GetGroupsOk returns a tuple with the Groups field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGroups

`func (o *ChannelParameterMappingType) SetGroups(v []ChannelParameterGroupType)`

SetGroups sets Groups field to given value.

### HasGroups

`func (o *ChannelParameterMappingType) HasGroups() bool`

HasGroups returns a boolean if a field has been set.

### GetSystemInfo

`func (o *ChannelParameterMappingType) GetSystemInfo() SystemInfoType`

GetSystemInfo returns the SystemInfo field if non-nil, zero value otherwise.

### GetSystemInfoOk

`func (o *ChannelParameterMappingType) GetSystemInfoOk() (*SystemInfoType, bool)`

GetSystemInfoOk returns a tuple with the SystemInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSystemInfo

`func (o *ChannelParameterMappingType) SetSystemInfo(v SystemInfoType)`

SetSystemInfo sets SystemInfo field to given value.

### HasSystemInfo

`func (o *ChannelParameterMappingType) HasSystemInfo() bool`

HasSystemInfo returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



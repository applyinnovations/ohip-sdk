# ChannelRoomMappings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ChannelRoomMappings** | Pointer to [**[]ChannelRoomMappingType**](ChannelRoomMappingType.md) | Hotel-channel room type mapping information. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewChannelRoomMappings

`func NewChannelRoomMappings() *ChannelRoomMappings`

NewChannelRoomMappings instantiates a new ChannelRoomMappings object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChannelRoomMappingsWithDefaults

`func NewChannelRoomMappingsWithDefaults() *ChannelRoomMappings`

NewChannelRoomMappingsWithDefaults instantiates a new ChannelRoomMappings object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetChannelRoomMappings

`func (o *ChannelRoomMappings) GetChannelRoomMappings() []ChannelRoomMappingType`

GetChannelRoomMappings returns the ChannelRoomMappings field if non-nil, zero value otherwise.

### GetChannelRoomMappingsOk

`func (o *ChannelRoomMappings) GetChannelRoomMappingsOk() (*[]ChannelRoomMappingType, bool)`

GetChannelRoomMappingsOk returns a tuple with the ChannelRoomMappings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannelRoomMappings

`func (o *ChannelRoomMappings) SetChannelRoomMappings(v []ChannelRoomMappingType)`

SetChannelRoomMappings sets ChannelRoomMappings field to given value.

### HasChannelRoomMappings

`func (o *ChannelRoomMappings) HasChannelRoomMappings() bool`

HasChannelRoomMappings returns a boolean if a field has been set.

### GetLinks

`func (o *ChannelRoomMappings) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ChannelRoomMappings) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ChannelRoomMappings) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ChannelRoomMappings) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ChannelRoomMappings) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ChannelRoomMappings) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ChannelRoomMappings) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ChannelRoomMappings) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



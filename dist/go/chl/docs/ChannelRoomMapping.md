# ChannelRoomMapping

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ChannelRoomMapping** | Pointer to [**ChannelRoomMappingType**](ChannelRoomMappingType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewChannelRoomMapping

`func NewChannelRoomMapping() *ChannelRoomMapping`

NewChannelRoomMapping instantiates a new ChannelRoomMapping object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChannelRoomMappingWithDefaults

`func NewChannelRoomMappingWithDefaults() *ChannelRoomMapping`

NewChannelRoomMappingWithDefaults instantiates a new ChannelRoomMapping object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetChannelRoomMapping

`func (o *ChannelRoomMapping) GetChannelRoomMapping() ChannelRoomMappingType`

GetChannelRoomMapping returns the ChannelRoomMapping field if non-nil, zero value otherwise.

### GetChannelRoomMappingOk

`func (o *ChannelRoomMapping) GetChannelRoomMappingOk() (*ChannelRoomMappingType, bool)`

GetChannelRoomMappingOk returns a tuple with the ChannelRoomMapping field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannelRoomMapping

`func (o *ChannelRoomMapping) SetChannelRoomMapping(v ChannelRoomMappingType)`

SetChannelRoomMapping sets ChannelRoomMapping field to given value.

### HasChannelRoomMapping

`func (o *ChannelRoomMapping) HasChannelRoomMapping() bool`

HasChannelRoomMapping returns a boolean if a field has been set.

### GetLinks

`func (o *ChannelRoomMapping) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ChannelRoomMapping) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ChannelRoomMapping) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ChannelRoomMapping) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ChannelRoomMapping) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ChannelRoomMapping) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ChannelRoomMapping) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ChannelRoomMapping) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



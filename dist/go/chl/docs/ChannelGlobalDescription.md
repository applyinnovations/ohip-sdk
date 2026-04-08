# ChannelGlobalDescription

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ChannelRoomDescription** | Pointer to [**ChannelGlobalDescriptionType**](ChannelGlobalDescriptionType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewChannelGlobalDescription

`func NewChannelGlobalDescription() *ChannelGlobalDescription`

NewChannelGlobalDescription instantiates a new ChannelGlobalDescription object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChannelGlobalDescriptionWithDefaults

`func NewChannelGlobalDescriptionWithDefaults() *ChannelGlobalDescription`

NewChannelGlobalDescriptionWithDefaults instantiates a new ChannelGlobalDescription object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetChannelRoomDescription

`func (o *ChannelGlobalDescription) GetChannelRoomDescription() ChannelGlobalDescriptionType`

GetChannelRoomDescription returns the ChannelRoomDescription field if non-nil, zero value otherwise.

### GetChannelRoomDescriptionOk

`func (o *ChannelGlobalDescription) GetChannelRoomDescriptionOk() (*ChannelGlobalDescriptionType, bool)`

GetChannelRoomDescriptionOk returns a tuple with the ChannelRoomDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannelRoomDescription

`func (o *ChannelGlobalDescription) SetChannelRoomDescription(v ChannelGlobalDescriptionType)`

SetChannelRoomDescription sets ChannelRoomDescription field to given value.

### HasChannelRoomDescription

`func (o *ChannelGlobalDescription) HasChannelRoomDescription() bool`

HasChannelRoomDescription returns a boolean if a field has been set.

### GetLinks

`func (o *ChannelGlobalDescription) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ChannelGlobalDescription) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ChannelGlobalDescription) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ChannelGlobalDescription) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ChannelGlobalDescription) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ChannelGlobalDescription) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ChannelGlobalDescription) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ChannelGlobalDescription) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



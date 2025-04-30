# ChannelRoomTypes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RoomTypes** | Pointer to [**ChannelRoomTypesRoomTypes**](ChannelRoomTypesRoomTypes.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewChannelRoomTypes

`func NewChannelRoomTypes() *ChannelRoomTypes`

NewChannelRoomTypes instantiates a new ChannelRoomTypes object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChannelRoomTypesWithDefaults

`func NewChannelRoomTypesWithDefaults() *ChannelRoomTypes`

NewChannelRoomTypesWithDefaults instantiates a new ChannelRoomTypes object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRoomTypes

`func (o *ChannelRoomTypes) GetRoomTypes() ChannelRoomTypesRoomTypes`

GetRoomTypes returns the RoomTypes field if non-nil, zero value otherwise.

### GetRoomTypesOk

`func (o *ChannelRoomTypes) GetRoomTypesOk() (*ChannelRoomTypesRoomTypes, bool)`

GetRoomTypesOk returns a tuple with the RoomTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomTypes

`func (o *ChannelRoomTypes) SetRoomTypes(v ChannelRoomTypesRoomTypes)`

SetRoomTypes sets RoomTypes field to given value.

### HasRoomTypes

`func (o *ChannelRoomTypes) HasRoomTypes() bool`

HasRoomTypes returns a boolean if a field has been set.

### GetLinks

`func (o *ChannelRoomTypes) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ChannelRoomTypes) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ChannelRoomTypes) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ChannelRoomTypes) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ChannelRoomTypes) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ChannelRoomTypes) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ChannelRoomTypes) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ChannelRoomTypes) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# ChangeInterfaceRoom

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Room** | Pointer to [**InterfaceRoomType**](InterfaceRoomType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewChangeInterfaceRoom

`func NewChangeInterfaceRoom() *ChangeInterfaceRoom`

NewChangeInterfaceRoom instantiates a new ChangeInterfaceRoom object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChangeInterfaceRoomWithDefaults

`func NewChangeInterfaceRoomWithDefaults() *ChangeInterfaceRoom`

NewChangeInterfaceRoomWithDefaults instantiates a new ChangeInterfaceRoom object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRoom

`func (o *ChangeInterfaceRoom) GetRoom() InterfaceRoomType`

GetRoom returns the Room field if non-nil, zero value otherwise.

### GetRoomOk

`func (o *ChangeInterfaceRoom) GetRoomOk() (*InterfaceRoomType, bool)`

GetRoomOk returns a tuple with the Room field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoom

`func (o *ChangeInterfaceRoom) SetRoom(v InterfaceRoomType)`

SetRoom sets Room field to given value.

### HasRoom

`func (o *ChangeInterfaceRoom) HasRoom() bool`

HasRoom returns a boolean if a field has been set.

### GetLinks

`func (o *ChangeInterfaceRoom) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ChangeInterfaceRoom) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ChangeInterfaceRoom) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ChangeInterfaceRoom) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ChangeInterfaceRoom) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ChangeInterfaceRoom) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ChangeInterfaceRoom) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ChangeInterfaceRoom) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



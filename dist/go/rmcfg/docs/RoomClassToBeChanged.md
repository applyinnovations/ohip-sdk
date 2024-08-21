# RoomClassToBeChanged

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**RoomClass** | Pointer to [**RoomClassType**](RoomClassType.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewRoomClassToBeChanged

`func NewRoomClassToBeChanged() *RoomClassToBeChanged`

NewRoomClassToBeChanged instantiates a new RoomClassToBeChanged object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoomClassToBeChangedWithDefaults

`func NewRoomClassToBeChangedWithDefaults() *RoomClassToBeChanged`

NewRoomClassToBeChangedWithDefaults instantiates a new RoomClassToBeChanged object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *RoomClassToBeChanged) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *RoomClassToBeChanged) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *RoomClassToBeChanged) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *RoomClassToBeChanged) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetRoomClass

`func (o *RoomClassToBeChanged) GetRoomClass() RoomClassType`

GetRoomClass returns the RoomClass field if non-nil, zero value otherwise.

### GetRoomClassOk

`func (o *RoomClassToBeChanged) GetRoomClassOk() (*RoomClassType, bool)`

GetRoomClassOk returns a tuple with the RoomClass field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomClass

`func (o *RoomClassToBeChanged) SetRoomClass(v RoomClassType)`

SetRoomClass sets RoomClass field to given value.

### HasRoomClass

`func (o *RoomClassToBeChanged) HasRoomClass() bool`

HasRoomClass returns a boolean if a field has been set.

### GetWarnings

`func (o *RoomClassToBeChanged) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *RoomClassToBeChanged) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *RoomClassToBeChanged) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *RoomClassToBeChanged) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



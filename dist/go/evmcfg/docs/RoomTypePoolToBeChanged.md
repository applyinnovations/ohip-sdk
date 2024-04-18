# RoomTypePoolToBeChanged

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**RoomPoolTypes** | Pointer to [**[]RoomTypePoolType**](RoomTypePoolType.md) | Collection of room type pool and associated room type(s). | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewRoomTypePoolToBeChanged

`func NewRoomTypePoolToBeChanged() *RoomTypePoolToBeChanged`

NewRoomTypePoolToBeChanged instantiates a new RoomTypePoolToBeChanged object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoomTypePoolToBeChangedWithDefaults

`func NewRoomTypePoolToBeChangedWithDefaults() *RoomTypePoolToBeChanged`

NewRoomTypePoolToBeChangedWithDefaults instantiates a new RoomTypePoolToBeChanged object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *RoomTypePoolToBeChanged) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *RoomTypePoolToBeChanged) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *RoomTypePoolToBeChanged) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *RoomTypePoolToBeChanged) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetRoomPoolTypes

`func (o *RoomTypePoolToBeChanged) GetRoomPoolTypes() []RoomTypePoolType`

GetRoomPoolTypes returns the RoomPoolTypes field if non-nil, zero value otherwise.

### GetRoomPoolTypesOk

`func (o *RoomTypePoolToBeChanged) GetRoomPoolTypesOk() (*[]RoomTypePoolType, bool)`

GetRoomPoolTypesOk returns a tuple with the RoomPoolTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomPoolTypes

`func (o *RoomTypePoolToBeChanged) SetRoomPoolTypes(v []RoomTypePoolType)`

SetRoomPoolTypes sets RoomPoolTypes field to given value.

### HasRoomPoolTypes

`func (o *RoomTypePoolToBeChanged) HasRoomPoolTypes() bool`

HasRoomPoolTypes returns a boolean if a field has been set.

### GetWarnings

`func (o *RoomTypePoolToBeChanged) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *RoomTypePoolToBeChanged) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *RoomTypePoolToBeChanged) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *RoomTypePoolToBeChanged) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



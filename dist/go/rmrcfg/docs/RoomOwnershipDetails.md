# RoomOwnershipDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**RoomOwnerships** | Pointer to [**RoomOwnershipsList**](RoomOwnershipsList.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewRoomOwnershipDetails

`func NewRoomOwnershipDetails() *RoomOwnershipDetails`

NewRoomOwnershipDetails instantiates a new RoomOwnershipDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoomOwnershipDetailsWithDefaults

`func NewRoomOwnershipDetailsWithDefaults() *RoomOwnershipDetails`

NewRoomOwnershipDetailsWithDefaults instantiates a new RoomOwnershipDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *RoomOwnershipDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *RoomOwnershipDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *RoomOwnershipDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *RoomOwnershipDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetRoomOwnerships

`func (o *RoomOwnershipDetails) GetRoomOwnerships() RoomOwnershipsList`

GetRoomOwnerships returns the RoomOwnerships field if non-nil, zero value otherwise.

### GetRoomOwnershipsOk

`func (o *RoomOwnershipDetails) GetRoomOwnershipsOk() (*RoomOwnershipsList, bool)`

GetRoomOwnershipsOk returns a tuple with the RoomOwnerships field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomOwnerships

`func (o *RoomOwnershipDetails) SetRoomOwnerships(v RoomOwnershipsList)`

SetRoomOwnerships sets RoomOwnerships field to given value.

### HasRoomOwnerships

`func (o *RoomOwnershipDetails) HasRoomOwnerships() bool`

HasRoomOwnerships returns a boolean if a field has been set.

### GetWarnings

`func (o *RoomOwnershipDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *RoomOwnershipDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *RoomOwnershipDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *RoomOwnershipDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



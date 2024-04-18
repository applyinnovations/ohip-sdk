# ChangeInterfaceStatusType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**InterfaceRights** | Pointer to [**[]InterfaceRightsStatusType**](InterfaceRightsStatusType.md) | Contains a list of status/rights for the various services under this interface | [optional] 
**ReservationId** | Pointer to [**ReservationId**](ReservationId.md) |  | [optional] 
**RoomExtension** | Pointer to **string** | Unique identifier for the room extension | [optional] 

## Methods

### NewChangeInterfaceStatusType

`func NewChangeInterfaceStatusType() *ChangeInterfaceStatusType`

NewChangeInterfaceStatusType instantiates a new ChangeInterfaceStatusType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChangeInterfaceStatusTypeWithDefaults

`func NewChangeInterfaceStatusTypeWithDefaults() *ChangeInterfaceStatusType`

NewChangeInterfaceStatusTypeWithDefaults instantiates a new ChangeInterfaceStatusType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetInterfaceRights

`func (o *ChangeInterfaceStatusType) GetInterfaceRights() []InterfaceRightsStatusType`

GetInterfaceRights returns the InterfaceRights field if non-nil, zero value otherwise.

### GetInterfaceRightsOk

`func (o *ChangeInterfaceStatusType) GetInterfaceRightsOk() (*[]InterfaceRightsStatusType, bool)`

GetInterfaceRightsOk returns a tuple with the InterfaceRights field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInterfaceRights

`func (o *ChangeInterfaceStatusType) SetInterfaceRights(v []InterfaceRightsStatusType)`

SetInterfaceRights sets InterfaceRights field to given value.

### HasInterfaceRights

`func (o *ChangeInterfaceStatusType) HasInterfaceRights() bool`

HasInterfaceRights returns a boolean if a field has been set.

### GetReservationId

`func (o *ChangeInterfaceStatusType) GetReservationId() ReservationId`

GetReservationId returns the ReservationId field if non-nil, zero value otherwise.

### GetReservationIdOk

`func (o *ChangeInterfaceStatusType) GetReservationIdOk() (*ReservationId, bool)`

GetReservationIdOk returns a tuple with the ReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationId

`func (o *ChangeInterfaceStatusType) SetReservationId(v ReservationId)`

SetReservationId sets ReservationId field to given value.

### HasReservationId

`func (o *ChangeInterfaceStatusType) HasReservationId() bool`

HasReservationId returns a boolean if a field has been set.

### GetRoomExtension

`func (o *ChangeInterfaceStatusType) GetRoomExtension() string`

GetRoomExtension returns the RoomExtension field if non-nil, zero value otherwise.

### GetRoomExtensionOk

`func (o *ChangeInterfaceStatusType) GetRoomExtensionOk() (*string, bool)`

GetRoomExtensionOk returns a tuple with the RoomExtension field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomExtension

`func (o *ChangeInterfaceStatusType) SetRoomExtension(v string)`

SetRoomExtension sets RoomExtension field to given value.

### HasRoomExtension

`func (o *ChangeInterfaceStatusType) HasRoomExtension() bool`

HasRoomExtension returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



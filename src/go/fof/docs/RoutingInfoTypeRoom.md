# RoutingInfoTypeRoom

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**GuestDisplayName** | Pointer to **string** | Display Name for the guest. | [optional] 
**GuestNameId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**Instructions** | Pointer to [**[]RoutingInstructionType**](RoutingInstructionType.md) | Set of routing instructions associated to this routing type. | [optional] 
**ReservationNameId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**RoomId** | Pointer to **string** | Room number to route the instructions. | [optional] 

## Methods

### NewRoutingInfoTypeRoom

`func NewRoutingInfoTypeRoom() *RoutingInfoTypeRoom`

NewRoutingInfoTypeRoom instantiates a new RoutingInfoTypeRoom object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoutingInfoTypeRoomWithDefaults

`func NewRoutingInfoTypeRoomWithDefaults() *RoutingInfoTypeRoom`

NewRoutingInfoTypeRoomWithDefaults instantiates a new RoutingInfoTypeRoom object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetGuestDisplayName

`func (o *RoutingInfoTypeRoom) GetGuestDisplayName() string`

GetGuestDisplayName returns the GuestDisplayName field if non-nil, zero value otherwise.

### GetGuestDisplayNameOk

`func (o *RoutingInfoTypeRoom) GetGuestDisplayNameOk() (*string, bool)`

GetGuestDisplayNameOk returns a tuple with the GuestDisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestDisplayName

`func (o *RoutingInfoTypeRoom) SetGuestDisplayName(v string)`

SetGuestDisplayName sets GuestDisplayName field to given value.

### HasGuestDisplayName

`func (o *RoutingInfoTypeRoom) HasGuestDisplayName() bool`

HasGuestDisplayName returns a boolean if a field has been set.

### GetGuestNameId

`func (o *RoutingInfoTypeRoom) GetGuestNameId() UniqueIDType`

GetGuestNameId returns the GuestNameId field if non-nil, zero value otherwise.

### GetGuestNameIdOk

`func (o *RoutingInfoTypeRoom) GetGuestNameIdOk() (*UniqueIDType, bool)`

GetGuestNameIdOk returns a tuple with the GuestNameId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestNameId

`func (o *RoutingInfoTypeRoom) SetGuestNameId(v UniqueIDType)`

SetGuestNameId sets GuestNameId field to given value.

### HasGuestNameId

`func (o *RoutingInfoTypeRoom) HasGuestNameId() bool`

HasGuestNameId returns a boolean if a field has been set.

### GetInstructions

`func (o *RoutingInfoTypeRoom) GetInstructions() []RoutingInstructionType`

GetInstructions returns the Instructions field if non-nil, zero value otherwise.

### GetInstructionsOk

`func (o *RoutingInfoTypeRoom) GetInstructionsOk() (*[]RoutingInstructionType, bool)`

GetInstructionsOk returns a tuple with the Instructions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInstructions

`func (o *RoutingInfoTypeRoom) SetInstructions(v []RoutingInstructionType)`

SetInstructions sets Instructions field to given value.

### HasInstructions

`func (o *RoutingInfoTypeRoom) HasInstructions() bool`

HasInstructions returns a boolean if a field has been set.

### GetReservationNameId

`func (o *RoutingInfoTypeRoom) GetReservationNameId() UniqueIDType`

GetReservationNameId returns the ReservationNameId field if non-nil, zero value otherwise.

### GetReservationNameIdOk

`func (o *RoutingInfoTypeRoom) GetReservationNameIdOk() (*UniqueIDType, bool)`

GetReservationNameIdOk returns a tuple with the ReservationNameId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationNameId

`func (o *RoutingInfoTypeRoom) SetReservationNameId(v UniqueIDType)`

SetReservationNameId sets ReservationNameId field to given value.

### HasReservationNameId

`func (o *RoutingInfoTypeRoom) HasReservationNameId() bool`

HasReservationNameId returns a boolean if a field has been set.

### GetRoomId

`func (o *RoutingInfoTypeRoom) GetRoomId() string`

GetRoomId returns the RoomId field if non-nil, zero value otherwise.

### GetRoomIdOk

`func (o *RoutingInfoTypeRoom) GetRoomIdOk() (*string, bool)`

GetRoomIdOk returns a tuple with the RoomId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomId

`func (o *RoutingInfoTypeRoom) SetRoomId(v string)`

SetRoomId sets RoomId field to given value.

### HasRoomId

`func (o *RoutingInfoTypeRoom) HasRoomId() bool`

HasRoomId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



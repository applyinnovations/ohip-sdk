# ResvRoutingInfoTypeRoom

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RoomId** | Pointer to **string** | Room number to route the instructions. | [optional] 
**GuestNameId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**GuestDisplayName** | Pointer to **string** | Display Name for the guest. | [optional] 
**ReservationNameId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**Instructions** | Pointer to [**[]RoutingInstructionType**](RoutingInstructionType.md) | Set of routing instructions associated to this routing type. | [optional] 

## Methods

### NewResvRoutingInfoTypeRoom

`func NewResvRoutingInfoTypeRoom() *ResvRoutingInfoTypeRoom`

NewResvRoutingInfoTypeRoom instantiates a new ResvRoutingInfoTypeRoom object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewResvRoutingInfoTypeRoomWithDefaults

`func NewResvRoutingInfoTypeRoomWithDefaults() *ResvRoutingInfoTypeRoom`

NewResvRoutingInfoTypeRoomWithDefaults instantiates a new ResvRoutingInfoTypeRoom object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRoomId

`func (o *ResvRoutingInfoTypeRoom) GetRoomId() string`

GetRoomId returns the RoomId field if non-nil, zero value otherwise.

### GetRoomIdOk

`func (o *ResvRoutingInfoTypeRoom) GetRoomIdOk() (*string, bool)`

GetRoomIdOk returns a tuple with the RoomId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomId

`func (o *ResvRoutingInfoTypeRoom) SetRoomId(v string)`

SetRoomId sets RoomId field to given value.

### HasRoomId

`func (o *ResvRoutingInfoTypeRoom) HasRoomId() bool`

HasRoomId returns a boolean if a field has been set.

### GetGuestNameId

`func (o *ResvRoutingInfoTypeRoom) GetGuestNameId() UniqueIDType`

GetGuestNameId returns the GuestNameId field if non-nil, zero value otherwise.

### GetGuestNameIdOk

`func (o *ResvRoutingInfoTypeRoom) GetGuestNameIdOk() (*UniqueIDType, bool)`

GetGuestNameIdOk returns a tuple with the GuestNameId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestNameId

`func (o *ResvRoutingInfoTypeRoom) SetGuestNameId(v UniqueIDType)`

SetGuestNameId sets GuestNameId field to given value.

### HasGuestNameId

`func (o *ResvRoutingInfoTypeRoom) HasGuestNameId() bool`

HasGuestNameId returns a boolean if a field has been set.

### GetGuestDisplayName

`func (o *ResvRoutingInfoTypeRoom) GetGuestDisplayName() string`

GetGuestDisplayName returns the GuestDisplayName field if non-nil, zero value otherwise.

### GetGuestDisplayNameOk

`func (o *ResvRoutingInfoTypeRoom) GetGuestDisplayNameOk() (*string, bool)`

GetGuestDisplayNameOk returns a tuple with the GuestDisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestDisplayName

`func (o *ResvRoutingInfoTypeRoom) SetGuestDisplayName(v string)`

SetGuestDisplayName sets GuestDisplayName field to given value.

### HasGuestDisplayName

`func (o *ResvRoutingInfoTypeRoom) HasGuestDisplayName() bool`

HasGuestDisplayName returns a boolean if a field has been set.

### GetReservationNameId

`func (o *ResvRoutingInfoTypeRoom) GetReservationNameId() UniqueIDType`

GetReservationNameId returns the ReservationNameId field if non-nil, zero value otherwise.

### GetReservationNameIdOk

`func (o *ResvRoutingInfoTypeRoom) GetReservationNameIdOk() (*UniqueIDType, bool)`

GetReservationNameIdOk returns a tuple with the ReservationNameId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationNameId

`func (o *ResvRoutingInfoTypeRoom) SetReservationNameId(v UniqueIDType)`

SetReservationNameId sets ReservationNameId field to given value.

### HasReservationNameId

`func (o *ResvRoutingInfoTypeRoom) HasReservationNameId() bool`

HasReservationNameId returns a boolean if a field has been set.

### GetInstructions

`func (o *ResvRoutingInfoTypeRoom) GetInstructions() []RoutingInstructionType`

GetInstructions returns the Instructions field if non-nil, zero value otherwise.

### GetInstructionsOk

`func (o *ResvRoutingInfoTypeRoom) GetInstructionsOk() (*[]RoutingInstructionType, bool)`

GetInstructionsOk returns a tuple with the Instructions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInstructions

`func (o *ResvRoutingInfoTypeRoom) SetInstructions(v []RoutingInstructionType)`

SetInstructions sets Instructions field to given value.

### HasInstructions

`func (o *ResvRoutingInfoTypeRoom) HasInstructions() bool`

HasInstructions returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



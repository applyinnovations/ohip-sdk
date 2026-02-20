# RoutingInstructionsToChangeCriteriaRoom

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RoomNumber** | Pointer to **string** | Room number to route the instructions. | [optional] 
**GuestNameId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**GuestDisplayName** | Pointer to **string** | Display Name for the guest. | [optional] 
**ReservationNameId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**Instructions** | Pointer to [**[]RoutingInstructionType**](RoutingInstructionType.md) | Set of routing instructions associated to this routing type. | [optional] 

## Methods

### NewRoutingInstructionsToChangeCriteriaRoom

`func NewRoutingInstructionsToChangeCriteriaRoom() *RoutingInstructionsToChangeCriteriaRoom`

NewRoutingInstructionsToChangeCriteriaRoom instantiates a new RoutingInstructionsToChangeCriteriaRoom object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoutingInstructionsToChangeCriteriaRoomWithDefaults

`func NewRoutingInstructionsToChangeCriteriaRoomWithDefaults() *RoutingInstructionsToChangeCriteriaRoom`

NewRoutingInstructionsToChangeCriteriaRoomWithDefaults instantiates a new RoutingInstructionsToChangeCriteriaRoom object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRoomNumber

`func (o *RoutingInstructionsToChangeCriteriaRoom) GetRoomNumber() string`

GetRoomNumber returns the RoomNumber field if non-nil, zero value otherwise.

### GetRoomNumberOk

`func (o *RoutingInstructionsToChangeCriteriaRoom) GetRoomNumberOk() (*string, bool)`

GetRoomNumberOk returns a tuple with the RoomNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomNumber

`func (o *RoutingInstructionsToChangeCriteriaRoom) SetRoomNumber(v string)`

SetRoomNumber sets RoomNumber field to given value.

### HasRoomNumber

`func (o *RoutingInstructionsToChangeCriteriaRoom) HasRoomNumber() bool`

HasRoomNumber returns a boolean if a field has been set.

### GetGuestNameId

`func (o *RoutingInstructionsToChangeCriteriaRoom) GetGuestNameId() UniqueIDType`

GetGuestNameId returns the GuestNameId field if non-nil, zero value otherwise.

### GetGuestNameIdOk

`func (o *RoutingInstructionsToChangeCriteriaRoom) GetGuestNameIdOk() (*UniqueIDType, bool)`

GetGuestNameIdOk returns a tuple with the GuestNameId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestNameId

`func (o *RoutingInstructionsToChangeCriteriaRoom) SetGuestNameId(v UniqueIDType)`

SetGuestNameId sets GuestNameId field to given value.

### HasGuestNameId

`func (o *RoutingInstructionsToChangeCriteriaRoom) HasGuestNameId() bool`

HasGuestNameId returns a boolean if a field has been set.

### GetGuestDisplayName

`func (o *RoutingInstructionsToChangeCriteriaRoom) GetGuestDisplayName() string`

GetGuestDisplayName returns the GuestDisplayName field if non-nil, zero value otherwise.

### GetGuestDisplayNameOk

`func (o *RoutingInstructionsToChangeCriteriaRoom) GetGuestDisplayNameOk() (*string, bool)`

GetGuestDisplayNameOk returns a tuple with the GuestDisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestDisplayName

`func (o *RoutingInstructionsToChangeCriteriaRoom) SetGuestDisplayName(v string)`

SetGuestDisplayName sets GuestDisplayName field to given value.

### HasGuestDisplayName

`func (o *RoutingInstructionsToChangeCriteriaRoom) HasGuestDisplayName() bool`

HasGuestDisplayName returns a boolean if a field has been set.

### GetReservationNameId

`func (o *RoutingInstructionsToChangeCriteriaRoom) GetReservationNameId() UniqueIDType`

GetReservationNameId returns the ReservationNameId field if non-nil, zero value otherwise.

### GetReservationNameIdOk

`func (o *RoutingInstructionsToChangeCriteriaRoom) GetReservationNameIdOk() (*UniqueIDType, bool)`

GetReservationNameIdOk returns a tuple with the ReservationNameId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationNameId

`func (o *RoutingInstructionsToChangeCriteriaRoom) SetReservationNameId(v UniqueIDType)`

SetReservationNameId sets ReservationNameId field to given value.

### HasReservationNameId

`func (o *RoutingInstructionsToChangeCriteriaRoom) HasReservationNameId() bool`

HasReservationNameId returns a boolean if a field has been set.

### GetInstructions

`func (o *RoutingInstructionsToChangeCriteriaRoom) GetInstructions() []RoutingInstructionType`

GetInstructions returns the Instructions field if non-nil, zero value otherwise.

### GetInstructionsOk

`func (o *RoutingInstructionsToChangeCriteriaRoom) GetInstructionsOk() (*[]RoutingInstructionType, bool)`

GetInstructionsOk returns a tuple with the Instructions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInstructions

`func (o *RoutingInstructionsToChangeCriteriaRoom) SetInstructions(v []RoutingInstructionType)`

SetInstructions sets Instructions field to given value.

### HasInstructions

`func (o *RoutingInstructionsToChangeCriteriaRoom) HasInstructions() bool`

HasInstructions returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



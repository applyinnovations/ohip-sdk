# RoutingInstructionsInfoCriteriaRoom

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**GuestDisplayName** | Pointer to **string** | Display Name for the guest. | [optional] 
**GuestNameId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**Instructions** | Pointer to [**[]RoutingInstructionType**](RoutingInstructionType.md) | Set of routing instructions associated to this routing type. | [optional] 
**ReservationNameId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**RoomNumber** | Pointer to **string** | Room number to route the instructions. | [optional] 

## Methods

### NewRoutingInstructionsInfoCriteriaRoom

`func NewRoutingInstructionsInfoCriteriaRoom() *RoutingInstructionsInfoCriteriaRoom`

NewRoutingInstructionsInfoCriteriaRoom instantiates a new RoutingInstructionsInfoCriteriaRoom object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoutingInstructionsInfoCriteriaRoomWithDefaults

`func NewRoutingInstructionsInfoCriteriaRoomWithDefaults() *RoutingInstructionsInfoCriteriaRoom`

NewRoutingInstructionsInfoCriteriaRoomWithDefaults instantiates a new RoutingInstructionsInfoCriteriaRoom object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetGuestDisplayName

`func (o *RoutingInstructionsInfoCriteriaRoom) GetGuestDisplayName() string`

GetGuestDisplayName returns the GuestDisplayName field if non-nil, zero value otherwise.

### GetGuestDisplayNameOk

`func (o *RoutingInstructionsInfoCriteriaRoom) GetGuestDisplayNameOk() (*string, bool)`

GetGuestDisplayNameOk returns a tuple with the GuestDisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestDisplayName

`func (o *RoutingInstructionsInfoCriteriaRoom) SetGuestDisplayName(v string)`

SetGuestDisplayName sets GuestDisplayName field to given value.

### HasGuestDisplayName

`func (o *RoutingInstructionsInfoCriteriaRoom) HasGuestDisplayName() bool`

HasGuestDisplayName returns a boolean if a field has been set.

### GetGuestNameId

`func (o *RoutingInstructionsInfoCriteriaRoom) GetGuestNameId() UniqueIDType`

GetGuestNameId returns the GuestNameId field if non-nil, zero value otherwise.

### GetGuestNameIdOk

`func (o *RoutingInstructionsInfoCriteriaRoom) GetGuestNameIdOk() (*UniqueIDType, bool)`

GetGuestNameIdOk returns a tuple with the GuestNameId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestNameId

`func (o *RoutingInstructionsInfoCriteriaRoom) SetGuestNameId(v UniqueIDType)`

SetGuestNameId sets GuestNameId field to given value.

### HasGuestNameId

`func (o *RoutingInstructionsInfoCriteriaRoom) HasGuestNameId() bool`

HasGuestNameId returns a boolean if a field has been set.

### GetInstructions

`func (o *RoutingInstructionsInfoCriteriaRoom) GetInstructions() []RoutingInstructionType`

GetInstructions returns the Instructions field if non-nil, zero value otherwise.

### GetInstructionsOk

`func (o *RoutingInstructionsInfoCriteriaRoom) GetInstructionsOk() (*[]RoutingInstructionType, bool)`

GetInstructionsOk returns a tuple with the Instructions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInstructions

`func (o *RoutingInstructionsInfoCriteriaRoom) SetInstructions(v []RoutingInstructionType)`

SetInstructions sets Instructions field to given value.

### HasInstructions

`func (o *RoutingInstructionsInfoCriteriaRoom) HasInstructions() bool`

HasInstructions returns a boolean if a field has been set.

### GetReservationNameId

`func (o *RoutingInstructionsInfoCriteriaRoom) GetReservationNameId() UniqueIDType`

GetReservationNameId returns the ReservationNameId field if non-nil, zero value otherwise.

### GetReservationNameIdOk

`func (o *RoutingInstructionsInfoCriteriaRoom) GetReservationNameIdOk() (*UniqueIDType, bool)`

GetReservationNameIdOk returns a tuple with the ReservationNameId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationNameId

`func (o *RoutingInstructionsInfoCriteriaRoom) SetReservationNameId(v UniqueIDType)`

SetReservationNameId sets ReservationNameId field to given value.

### HasReservationNameId

`func (o *RoutingInstructionsInfoCriteriaRoom) HasReservationNameId() bool`

HasReservationNameId returns a boolean if a field has been set.

### GetRoomNumber

`func (o *RoutingInstructionsInfoCriteriaRoom) GetRoomNumber() string`

GetRoomNumber returns the RoomNumber field if non-nil, zero value otherwise.

### GetRoomNumberOk

`func (o *RoutingInstructionsInfoCriteriaRoom) GetRoomNumberOk() (*string, bool)`

GetRoomNumberOk returns a tuple with the RoomNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomNumber

`func (o *RoutingInstructionsInfoCriteriaRoom) SetRoomNumber(v string)`

SetRoomNumber sets RoomNumber field to given value.

### HasRoomNumber

`func (o *RoutingInstructionsInfoCriteriaRoom) HasRoomNumber() bool`

HasRoomNumber returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



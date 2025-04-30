# RoutingInfoTypeFunctionSpaceDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RoomId** | Pointer to **string** | Room number to route the instructions. | [optional] 
**GuestNameId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**GuestDisplayName** | Pointer to **string** | Display Name for the guest. | [optional] 
**ReservationNameId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**Instructions** | Pointer to [**[]RoutingInstructionType**](RoutingInstructionType.md) | Set of routing instructions associated to this routing type. | [optional] 

## Methods

### NewRoutingInfoTypeFunctionSpaceDetails

`func NewRoutingInfoTypeFunctionSpaceDetails() *RoutingInfoTypeFunctionSpaceDetails`

NewRoutingInfoTypeFunctionSpaceDetails instantiates a new RoutingInfoTypeFunctionSpaceDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoutingInfoTypeFunctionSpaceDetailsWithDefaults

`func NewRoutingInfoTypeFunctionSpaceDetailsWithDefaults() *RoutingInfoTypeFunctionSpaceDetails`

NewRoutingInfoTypeFunctionSpaceDetailsWithDefaults instantiates a new RoutingInfoTypeFunctionSpaceDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRoomId

`func (o *RoutingInfoTypeFunctionSpaceDetails) GetRoomId() string`

GetRoomId returns the RoomId field if non-nil, zero value otherwise.

### GetRoomIdOk

`func (o *RoutingInfoTypeFunctionSpaceDetails) GetRoomIdOk() (*string, bool)`

GetRoomIdOk returns a tuple with the RoomId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomId

`func (o *RoutingInfoTypeFunctionSpaceDetails) SetRoomId(v string)`

SetRoomId sets RoomId field to given value.

### HasRoomId

`func (o *RoutingInfoTypeFunctionSpaceDetails) HasRoomId() bool`

HasRoomId returns a boolean if a field has been set.

### GetGuestNameId

`func (o *RoutingInfoTypeFunctionSpaceDetails) GetGuestNameId() UniqueIDType`

GetGuestNameId returns the GuestNameId field if non-nil, zero value otherwise.

### GetGuestNameIdOk

`func (o *RoutingInfoTypeFunctionSpaceDetails) GetGuestNameIdOk() (*UniqueIDType, bool)`

GetGuestNameIdOk returns a tuple with the GuestNameId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestNameId

`func (o *RoutingInfoTypeFunctionSpaceDetails) SetGuestNameId(v UniqueIDType)`

SetGuestNameId sets GuestNameId field to given value.

### HasGuestNameId

`func (o *RoutingInfoTypeFunctionSpaceDetails) HasGuestNameId() bool`

HasGuestNameId returns a boolean if a field has been set.

### GetGuestDisplayName

`func (o *RoutingInfoTypeFunctionSpaceDetails) GetGuestDisplayName() string`

GetGuestDisplayName returns the GuestDisplayName field if non-nil, zero value otherwise.

### GetGuestDisplayNameOk

`func (o *RoutingInfoTypeFunctionSpaceDetails) GetGuestDisplayNameOk() (*string, bool)`

GetGuestDisplayNameOk returns a tuple with the GuestDisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestDisplayName

`func (o *RoutingInfoTypeFunctionSpaceDetails) SetGuestDisplayName(v string)`

SetGuestDisplayName sets GuestDisplayName field to given value.

### HasGuestDisplayName

`func (o *RoutingInfoTypeFunctionSpaceDetails) HasGuestDisplayName() bool`

HasGuestDisplayName returns a boolean if a field has been set.

### GetReservationNameId

`func (o *RoutingInfoTypeFunctionSpaceDetails) GetReservationNameId() UniqueIDType`

GetReservationNameId returns the ReservationNameId field if non-nil, zero value otherwise.

### GetReservationNameIdOk

`func (o *RoutingInfoTypeFunctionSpaceDetails) GetReservationNameIdOk() (*UniqueIDType, bool)`

GetReservationNameIdOk returns a tuple with the ReservationNameId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationNameId

`func (o *RoutingInfoTypeFunctionSpaceDetails) SetReservationNameId(v UniqueIDType)`

SetReservationNameId sets ReservationNameId field to given value.

### HasReservationNameId

`func (o *RoutingInfoTypeFunctionSpaceDetails) HasReservationNameId() bool`

HasReservationNameId returns a boolean if a field has been set.

### GetInstructions

`func (o *RoutingInfoTypeFunctionSpaceDetails) GetInstructions() []RoutingInstructionType`

GetInstructions returns the Instructions field if non-nil, zero value otherwise.

### GetInstructionsOk

`func (o *RoutingInfoTypeFunctionSpaceDetails) GetInstructionsOk() (*[]RoutingInstructionType, bool)`

GetInstructionsOk returns a tuple with the Instructions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInstructions

`func (o *RoutingInfoTypeFunctionSpaceDetails) SetInstructions(v []RoutingInstructionType)`

SetInstructions sets Instructions field to given value.

### HasInstructions

`func (o *RoutingInfoTypeFunctionSpaceDetails) HasInstructions() bool`

HasInstructions returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



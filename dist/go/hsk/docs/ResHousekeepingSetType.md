# ResHousekeepingSetType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Hotel Code. | [optional] 
**ReservationId** | Pointer to [**ReservationId**](ReservationId.md) |  | [optional] 
**Room** | Pointer to **string** | Room to which housekeeping record belongs. | [optional] 
**HousekeepingInstruction** | Pointer to [**[]HousekeepingInstructionsType**](HousekeepingInstructionsType.md) | housekeeping instructions that should be used. | [optional] 
**HousekeepingInstructions** | Pointer to [**ResHousekeepingType**](ResHousekeepingType.md) |  | [optional] 

## Methods

### NewResHousekeepingSetType

`func NewResHousekeepingSetType() *ResHousekeepingSetType`

NewResHousekeepingSetType instantiates a new ResHousekeepingSetType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewResHousekeepingSetTypeWithDefaults

`func NewResHousekeepingSetTypeWithDefaults() *ResHousekeepingSetType`

NewResHousekeepingSetTypeWithDefaults instantiates a new ResHousekeepingSetType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *ResHousekeepingSetType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ResHousekeepingSetType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ResHousekeepingSetType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ResHousekeepingSetType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetReservationId

`func (o *ResHousekeepingSetType) GetReservationId() ReservationId`

GetReservationId returns the ReservationId field if non-nil, zero value otherwise.

### GetReservationIdOk

`func (o *ResHousekeepingSetType) GetReservationIdOk() (*ReservationId, bool)`

GetReservationIdOk returns a tuple with the ReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationId

`func (o *ResHousekeepingSetType) SetReservationId(v ReservationId)`

SetReservationId sets ReservationId field to given value.

### HasReservationId

`func (o *ResHousekeepingSetType) HasReservationId() bool`

HasReservationId returns a boolean if a field has been set.

### GetRoom

`func (o *ResHousekeepingSetType) GetRoom() string`

GetRoom returns the Room field if non-nil, zero value otherwise.

### GetRoomOk

`func (o *ResHousekeepingSetType) GetRoomOk() (*string, bool)`

GetRoomOk returns a tuple with the Room field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoom

`func (o *ResHousekeepingSetType) SetRoom(v string)`

SetRoom sets Room field to given value.

### HasRoom

`func (o *ResHousekeepingSetType) HasRoom() bool`

HasRoom returns a boolean if a field has been set.

### GetHousekeepingInstruction

`func (o *ResHousekeepingSetType) GetHousekeepingInstruction() []HousekeepingInstructionsType`

GetHousekeepingInstruction returns the HousekeepingInstruction field if non-nil, zero value otherwise.

### GetHousekeepingInstructionOk

`func (o *ResHousekeepingSetType) GetHousekeepingInstructionOk() (*[]HousekeepingInstructionsType, bool)`

GetHousekeepingInstructionOk returns a tuple with the HousekeepingInstruction field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHousekeepingInstruction

`func (o *ResHousekeepingSetType) SetHousekeepingInstruction(v []HousekeepingInstructionsType)`

SetHousekeepingInstruction sets HousekeepingInstruction field to given value.

### HasHousekeepingInstruction

`func (o *ResHousekeepingSetType) HasHousekeepingInstruction() bool`

HasHousekeepingInstruction returns a boolean if a field has been set.

### GetHousekeepingInstructions

`func (o *ResHousekeepingSetType) GetHousekeepingInstructions() ResHousekeepingType`

GetHousekeepingInstructions returns the HousekeepingInstructions field if non-nil, zero value otherwise.

### GetHousekeepingInstructionsOk

`func (o *ResHousekeepingSetType) GetHousekeepingInstructionsOk() (*ResHousekeepingType, bool)`

GetHousekeepingInstructionsOk returns a tuple with the HousekeepingInstructions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHousekeepingInstructions

`func (o *ResHousekeepingSetType) SetHousekeepingInstructions(v ResHousekeepingType)`

SetHousekeepingInstructions sets HousekeepingInstructions field to given value.

### HasHousekeepingInstructions

`func (o *ResHousekeepingSetType) HasHousekeepingInstructions() bool`

HasHousekeepingInstructions returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



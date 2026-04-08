# HotelReservationInstructionTypeResponseInstructions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ResponseInstruction** | Pointer to [**[]ReservationInstructionType**](ReservationInstructionType.md) |  | [optional] 
**ConfirmationOnly** | Pointer to **bool** | If this value is set to TRUE, then the operation will only return for a Success or Failed flag. | [optional] 

## Methods

### NewHotelReservationInstructionTypeResponseInstructions

`func NewHotelReservationInstructionTypeResponseInstructions() *HotelReservationInstructionTypeResponseInstructions`

NewHotelReservationInstructionTypeResponseInstructions instantiates a new HotelReservationInstructionTypeResponseInstructions object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHotelReservationInstructionTypeResponseInstructionsWithDefaults

`func NewHotelReservationInstructionTypeResponseInstructionsWithDefaults() *HotelReservationInstructionTypeResponseInstructions`

NewHotelReservationInstructionTypeResponseInstructionsWithDefaults instantiates a new HotelReservationInstructionTypeResponseInstructions object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetResponseInstruction

`func (o *HotelReservationInstructionTypeResponseInstructions) GetResponseInstruction() []ReservationInstructionType`

GetResponseInstruction returns the ResponseInstruction field if non-nil, zero value otherwise.

### GetResponseInstructionOk

`func (o *HotelReservationInstructionTypeResponseInstructions) GetResponseInstructionOk() (*[]ReservationInstructionType, bool)`

GetResponseInstructionOk returns a tuple with the ResponseInstruction field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResponseInstruction

`func (o *HotelReservationInstructionTypeResponseInstructions) SetResponseInstruction(v []ReservationInstructionType)`

SetResponseInstruction sets ResponseInstruction field to given value.

### HasResponseInstruction

`func (o *HotelReservationInstructionTypeResponseInstructions) HasResponseInstruction() bool`

HasResponseInstruction returns a boolean if a field has been set.

### GetConfirmationOnly

`func (o *HotelReservationInstructionTypeResponseInstructions) GetConfirmationOnly() bool`

GetConfirmationOnly returns the ConfirmationOnly field if non-nil, zero value otherwise.

### GetConfirmationOnlyOk

`func (o *HotelReservationInstructionTypeResponseInstructions) GetConfirmationOnlyOk() (*bool, bool)`

GetConfirmationOnlyOk returns a tuple with the ConfirmationOnly field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConfirmationOnly

`func (o *HotelReservationInstructionTypeResponseInstructions) SetConfirmationOnly(v bool)`

SetConfirmationOnly sets ConfirmationOnly field to given value.

### HasConfirmationOnly

`func (o *HotelReservationInstructionTypeResponseInstructions) HasConfirmationOnly() bool`

HasConfirmationOnly returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



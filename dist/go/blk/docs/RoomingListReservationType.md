# RoomingListReservationType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelReservation** | Pointer to [**HotelReservationType**](HotelReservationType.md) |  | [optional] 
**RoutingInstructions** | Pointer to [**[]RoutingInfoType**](RoutingInfoType.md) | A routing info object can either be of type Folio OR of type Room with its corresponding instructions. | [optional] 
**Success** | Pointer to **bool** | This element is returned as True if the rooming list reservation was successfully created. | [optional] 
**Errors** | Pointer to [**[]ErrorType**](ErrorType.md) | An error that occurred during the processing of a message. | [optional] 
**RoomingListSequence** | Pointer to **int32** | Unique identifier that identifies the sequence of an individual rooming list reservation. The sequence will be maintained across every request and response. | [optional] 

## Methods

### NewRoomingListReservationType

`func NewRoomingListReservationType() *RoomingListReservationType`

NewRoomingListReservationType instantiates a new RoomingListReservationType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoomingListReservationTypeWithDefaults

`func NewRoomingListReservationTypeWithDefaults() *RoomingListReservationType`

NewRoomingListReservationTypeWithDefaults instantiates a new RoomingListReservationType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelReservation

`func (o *RoomingListReservationType) GetHotelReservation() HotelReservationType`

GetHotelReservation returns the HotelReservation field if non-nil, zero value otherwise.

### GetHotelReservationOk

`func (o *RoomingListReservationType) GetHotelReservationOk() (*HotelReservationType, bool)`

GetHotelReservationOk returns a tuple with the HotelReservation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelReservation

`func (o *RoomingListReservationType) SetHotelReservation(v HotelReservationType)`

SetHotelReservation sets HotelReservation field to given value.

### HasHotelReservation

`func (o *RoomingListReservationType) HasHotelReservation() bool`

HasHotelReservation returns a boolean if a field has been set.

### GetRoutingInstructions

`func (o *RoomingListReservationType) GetRoutingInstructions() []RoutingInfoType`

GetRoutingInstructions returns the RoutingInstructions field if non-nil, zero value otherwise.

### GetRoutingInstructionsOk

`func (o *RoomingListReservationType) GetRoutingInstructionsOk() (*[]RoutingInfoType, bool)`

GetRoutingInstructionsOk returns a tuple with the RoutingInstructions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoutingInstructions

`func (o *RoomingListReservationType) SetRoutingInstructions(v []RoutingInfoType)`

SetRoutingInstructions sets RoutingInstructions field to given value.

### HasRoutingInstructions

`func (o *RoomingListReservationType) HasRoutingInstructions() bool`

HasRoutingInstructions returns a boolean if a field has been set.

### GetSuccess

`func (o *RoomingListReservationType) GetSuccess() bool`

GetSuccess returns the Success field if non-nil, zero value otherwise.

### GetSuccessOk

`func (o *RoomingListReservationType) GetSuccessOk() (*bool, bool)`

GetSuccessOk returns a tuple with the Success field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSuccess

`func (o *RoomingListReservationType) SetSuccess(v bool)`

SetSuccess sets Success field to given value.

### HasSuccess

`func (o *RoomingListReservationType) HasSuccess() bool`

HasSuccess returns a boolean if a field has been set.

### GetErrors

`func (o *RoomingListReservationType) GetErrors() []ErrorType`

GetErrors returns the Errors field if non-nil, zero value otherwise.

### GetErrorsOk

`func (o *RoomingListReservationType) GetErrorsOk() (*[]ErrorType, bool)`

GetErrorsOk returns a tuple with the Errors field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrors

`func (o *RoomingListReservationType) SetErrors(v []ErrorType)`

SetErrors sets Errors field to given value.

### HasErrors

`func (o *RoomingListReservationType) HasErrors() bool`

HasErrors returns a boolean if a field has been set.

### GetRoomingListSequence

`func (o *RoomingListReservationType) GetRoomingListSequence() int32`

GetRoomingListSequence returns the RoomingListSequence field if non-nil, zero value otherwise.

### GetRoomingListSequenceOk

`func (o *RoomingListReservationType) GetRoomingListSequenceOk() (*int32, bool)`

GetRoomingListSequenceOk returns a tuple with the RoomingListSequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomingListSequence

`func (o *RoomingListReservationType) SetRoomingListSequence(v int32)`

SetRoomingListSequence sets RoomingListSequence field to given value.

### HasRoomingListSequence

`func (o *RoomingListReservationType) HasRoomingListSequence() bool`

HasRoomingListSequence returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



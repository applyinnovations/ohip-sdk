# CombineShareReservationsTypeFetchInstructions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FetchInstruction** | Pointer to [**[]ReservationInstructionType**](ReservationInstructionType.md) | Instruction on what information has to be fetched. | [optional] 
**ReturnShareReservations** | Pointer to **bool** | After the combine shares operation, return the new list of share reservations. | [optional] 

## Methods

### NewCombineShareReservationsTypeFetchInstructions

`func NewCombineShareReservationsTypeFetchInstructions() *CombineShareReservationsTypeFetchInstructions`

NewCombineShareReservationsTypeFetchInstructions instantiates a new CombineShareReservationsTypeFetchInstructions object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCombineShareReservationsTypeFetchInstructionsWithDefaults

`func NewCombineShareReservationsTypeFetchInstructionsWithDefaults() *CombineShareReservationsTypeFetchInstructions`

NewCombineShareReservationsTypeFetchInstructionsWithDefaults instantiates a new CombineShareReservationsTypeFetchInstructions object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFetchInstruction

`func (o *CombineShareReservationsTypeFetchInstructions) GetFetchInstruction() []ReservationInstructionType`

GetFetchInstruction returns the FetchInstruction field if non-nil, zero value otherwise.

### GetFetchInstructionOk

`func (o *CombineShareReservationsTypeFetchInstructions) GetFetchInstructionOk() (*[]ReservationInstructionType, bool)`

GetFetchInstructionOk returns a tuple with the FetchInstruction field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFetchInstruction

`func (o *CombineShareReservationsTypeFetchInstructions) SetFetchInstruction(v []ReservationInstructionType)`

SetFetchInstruction sets FetchInstruction field to given value.

### HasFetchInstruction

`func (o *CombineShareReservationsTypeFetchInstructions) HasFetchInstruction() bool`

HasFetchInstruction returns a boolean if a field has been set.

### GetReturnShareReservations

`func (o *CombineShareReservationsTypeFetchInstructions) GetReturnShareReservations() bool`

GetReturnShareReservations returns the ReturnShareReservations field if non-nil, zero value otherwise.

### GetReturnShareReservationsOk

`func (o *CombineShareReservationsTypeFetchInstructions) GetReturnShareReservationsOk() (*bool, bool)`

GetReturnShareReservationsOk returns a tuple with the ReturnShareReservations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReturnShareReservations

`func (o *CombineShareReservationsTypeFetchInstructions) SetReturnShareReservations(v bool)`

SetReturnShareReservations sets ReturnShareReservations field to given value.

### HasReturnShareReservations

`func (o *CombineShareReservationsTypeFetchInstructions) HasReturnShareReservations() bool`

HasReturnShareReservations returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



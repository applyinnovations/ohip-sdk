# ChangeBlockReservationsType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BlockId** | Pointer to [**BlockId**](BlockId.md) |  | [optional] 
**ReferenceReservation** | Pointer to [**ChangeBlockReservationsTypeReferenceReservation**](ChangeBlockReservationsTypeReferenceReservation.md) |  | [optional] 
**ReservationFilter** | Pointer to [**BlockReservationsCriteriaType**](BlockReservationsCriteriaType.md) |  | [optional] 
**ChangeBlockReservationsInstructions** | Pointer to [**[]ChangeBlockResvInstructionType**](ChangeBlockResvInstructionType.md) | Change instructions to be used. | [optional] 
**HotelId** | Pointer to **string** | Opera Hotel code that the block belongs to. | [optional] 
**BorrowForAll** | Pointer to **bool** | Indicates whether to borrow inventory from the house and overbook if required for any inventory needed to complete the apply to all operation. | [optional] 

## Methods

### NewChangeBlockReservationsType

`func NewChangeBlockReservationsType() *ChangeBlockReservationsType`

NewChangeBlockReservationsType instantiates a new ChangeBlockReservationsType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChangeBlockReservationsTypeWithDefaults

`func NewChangeBlockReservationsTypeWithDefaults() *ChangeBlockReservationsType`

NewChangeBlockReservationsTypeWithDefaults instantiates a new ChangeBlockReservationsType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBlockId

`func (o *ChangeBlockReservationsType) GetBlockId() BlockId`

GetBlockId returns the BlockId field if non-nil, zero value otherwise.

### GetBlockIdOk

`func (o *ChangeBlockReservationsType) GetBlockIdOk() (*BlockId, bool)`

GetBlockIdOk returns a tuple with the BlockId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockId

`func (o *ChangeBlockReservationsType) SetBlockId(v BlockId)`

SetBlockId sets BlockId field to given value.

### HasBlockId

`func (o *ChangeBlockReservationsType) HasBlockId() bool`

HasBlockId returns a boolean if a field has been set.

### GetReferenceReservation

`func (o *ChangeBlockReservationsType) GetReferenceReservation() ChangeBlockReservationsTypeReferenceReservation`

GetReferenceReservation returns the ReferenceReservation field if non-nil, zero value otherwise.

### GetReferenceReservationOk

`func (o *ChangeBlockReservationsType) GetReferenceReservationOk() (*ChangeBlockReservationsTypeReferenceReservation, bool)`

GetReferenceReservationOk returns a tuple with the ReferenceReservation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReferenceReservation

`func (o *ChangeBlockReservationsType) SetReferenceReservation(v ChangeBlockReservationsTypeReferenceReservation)`

SetReferenceReservation sets ReferenceReservation field to given value.

### HasReferenceReservation

`func (o *ChangeBlockReservationsType) HasReferenceReservation() bool`

HasReferenceReservation returns a boolean if a field has been set.

### GetReservationFilter

`func (o *ChangeBlockReservationsType) GetReservationFilter() BlockReservationsCriteriaType`

GetReservationFilter returns the ReservationFilter field if non-nil, zero value otherwise.

### GetReservationFilterOk

`func (o *ChangeBlockReservationsType) GetReservationFilterOk() (*BlockReservationsCriteriaType, bool)`

GetReservationFilterOk returns a tuple with the ReservationFilter field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationFilter

`func (o *ChangeBlockReservationsType) SetReservationFilter(v BlockReservationsCriteriaType)`

SetReservationFilter sets ReservationFilter field to given value.

### HasReservationFilter

`func (o *ChangeBlockReservationsType) HasReservationFilter() bool`

HasReservationFilter returns a boolean if a field has been set.

### GetChangeBlockReservationsInstructions

`func (o *ChangeBlockReservationsType) GetChangeBlockReservationsInstructions() []ChangeBlockResvInstructionType`

GetChangeBlockReservationsInstructions returns the ChangeBlockReservationsInstructions field if non-nil, zero value otherwise.

### GetChangeBlockReservationsInstructionsOk

`func (o *ChangeBlockReservationsType) GetChangeBlockReservationsInstructionsOk() (*[]ChangeBlockResvInstructionType, bool)`

GetChangeBlockReservationsInstructionsOk returns a tuple with the ChangeBlockReservationsInstructions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChangeBlockReservationsInstructions

`func (o *ChangeBlockReservationsType) SetChangeBlockReservationsInstructions(v []ChangeBlockResvInstructionType)`

SetChangeBlockReservationsInstructions sets ChangeBlockReservationsInstructions field to given value.

### HasChangeBlockReservationsInstructions

`func (o *ChangeBlockReservationsType) HasChangeBlockReservationsInstructions() bool`

HasChangeBlockReservationsInstructions returns a boolean if a field has been set.

### GetHotelId

`func (o *ChangeBlockReservationsType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ChangeBlockReservationsType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ChangeBlockReservationsType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ChangeBlockReservationsType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetBorrowForAll

`func (o *ChangeBlockReservationsType) GetBorrowForAll() bool`

GetBorrowForAll returns the BorrowForAll field if non-nil, zero value otherwise.

### GetBorrowForAllOk

`func (o *ChangeBlockReservationsType) GetBorrowForAllOk() (*bool, bool)`

GetBorrowForAllOk returns a tuple with the BorrowForAll field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBorrowForAll

`func (o *ChangeBlockReservationsType) SetBorrowForAll(v bool)`

SetBorrowForAll sets BorrowForAll field to given value.

### HasBorrowForAll

`func (o *ChangeBlockReservationsType) HasBorrowForAll() bool`

HasBorrowForAll returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



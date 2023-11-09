# ConfirmationLettersDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ConfLetters** | Pointer to [**ConfirmationsType**](ConfirmationsType.md) |  | [optional] 
**HotelId** | Pointer to **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**ReservationId** | Pointer to [**ReservationId**](ReservationId.md) |  | [optional] 
**ResponseInstruction** | Pointer to [**ResponseInstructionsType**](ResponseInstructionsType.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewConfirmationLettersDetails

`func NewConfirmationLettersDetails() *ConfirmationLettersDetails`

NewConfirmationLettersDetails instantiates a new ConfirmationLettersDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewConfirmationLettersDetailsWithDefaults

`func NewConfirmationLettersDetailsWithDefaults() *ConfirmationLettersDetails`

NewConfirmationLettersDetailsWithDefaults instantiates a new ConfirmationLettersDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetConfLetters

`func (o *ConfirmationLettersDetails) GetConfLetters() ConfirmationsType`

GetConfLetters returns the ConfLetters field if non-nil, zero value otherwise.

### GetConfLettersOk

`func (o *ConfirmationLettersDetails) GetConfLettersOk() (*ConfirmationsType, bool)`

GetConfLettersOk returns a tuple with the ConfLetters field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConfLetters

`func (o *ConfirmationLettersDetails) SetConfLetters(v ConfirmationsType)`

SetConfLetters sets ConfLetters field to given value.

### HasConfLetters

`func (o *ConfirmationLettersDetails) HasConfLetters() bool`

HasConfLetters returns a boolean if a field has been set.

### GetHotelId

`func (o *ConfirmationLettersDetails) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ConfirmationLettersDetails) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ConfirmationLettersDetails) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ConfirmationLettersDetails) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetLinks

`func (o *ConfirmationLettersDetails) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ConfirmationLettersDetails) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ConfirmationLettersDetails) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ConfirmationLettersDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetReservationId

`func (o *ConfirmationLettersDetails) GetReservationId() ReservationId`

GetReservationId returns the ReservationId field if non-nil, zero value otherwise.

### GetReservationIdOk

`func (o *ConfirmationLettersDetails) GetReservationIdOk() (*ReservationId, bool)`

GetReservationIdOk returns a tuple with the ReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationId

`func (o *ConfirmationLettersDetails) SetReservationId(v ReservationId)`

SetReservationId sets ReservationId field to given value.

### HasReservationId

`func (o *ConfirmationLettersDetails) HasReservationId() bool`

HasReservationId returns a boolean if a field has been set.

### GetResponseInstruction

`func (o *ConfirmationLettersDetails) GetResponseInstruction() ResponseInstructionsType`

GetResponseInstruction returns the ResponseInstruction field if non-nil, zero value otherwise.

### GetResponseInstructionOk

`func (o *ConfirmationLettersDetails) GetResponseInstructionOk() (*ResponseInstructionsType, bool)`

GetResponseInstructionOk returns a tuple with the ResponseInstruction field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResponseInstruction

`func (o *ConfirmationLettersDetails) SetResponseInstruction(v ResponseInstructionsType)`

SetResponseInstruction sets ResponseInstruction field to given value.

### HasResponseInstruction

`func (o *ConfirmationLettersDetails) HasResponseInstruction() bool`

HasResponseInstruction returns a boolean if a field has been set.

### GetWarnings

`func (o *ConfirmationLettersDetails) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ConfirmationLettersDetails) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ConfirmationLettersDetails) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ConfirmationLettersDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



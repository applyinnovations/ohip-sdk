# ConfirmationLetters

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ConfLetters** | Pointer to [**[]ConfirmationType**](ConfirmationType.md) | List of confirmation letters. | [optional] 
**HotelId** | Pointer to **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**ReservationId** | Pointer to [**ReservationId**](ReservationId.md) |  | [optional] 
**ResponseInstruction** | Pointer to [**ResponseInstructionsType**](ResponseInstructionsType.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewConfirmationLetters

`func NewConfirmationLetters() *ConfirmationLetters`

NewConfirmationLetters instantiates a new ConfirmationLetters object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewConfirmationLettersWithDefaults

`func NewConfirmationLettersWithDefaults() *ConfirmationLetters`

NewConfirmationLettersWithDefaults instantiates a new ConfirmationLetters object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetConfLetters

`func (o *ConfirmationLetters) GetConfLetters() []ConfirmationType`

GetConfLetters returns the ConfLetters field if non-nil, zero value otherwise.

### GetConfLettersOk

`func (o *ConfirmationLetters) GetConfLettersOk() (*[]ConfirmationType, bool)`

GetConfLettersOk returns a tuple with the ConfLetters field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConfLetters

`func (o *ConfirmationLetters) SetConfLetters(v []ConfirmationType)`

SetConfLetters sets ConfLetters field to given value.

### HasConfLetters

`func (o *ConfirmationLetters) HasConfLetters() bool`

HasConfLetters returns a boolean if a field has been set.

### GetHotelId

`func (o *ConfirmationLetters) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ConfirmationLetters) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ConfirmationLetters) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ConfirmationLetters) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetLinks

`func (o *ConfirmationLetters) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ConfirmationLetters) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ConfirmationLetters) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ConfirmationLetters) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetReservationId

`func (o *ConfirmationLetters) GetReservationId() ReservationId`

GetReservationId returns the ReservationId field if non-nil, zero value otherwise.

### GetReservationIdOk

`func (o *ConfirmationLetters) GetReservationIdOk() (*ReservationId, bool)`

GetReservationIdOk returns a tuple with the ReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationId

`func (o *ConfirmationLetters) SetReservationId(v ReservationId)`

SetReservationId sets ReservationId field to given value.

### HasReservationId

`func (o *ConfirmationLetters) HasReservationId() bool`

HasReservationId returns a boolean if a field has been set.

### GetResponseInstruction

`func (o *ConfirmationLetters) GetResponseInstruction() ResponseInstructionsType`

GetResponseInstruction returns the ResponseInstruction field if non-nil, zero value otherwise.

### GetResponseInstructionOk

`func (o *ConfirmationLetters) GetResponseInstructionOk() (*ResponseInstructionsType, bool)`

GetResponseInstructionOk returns a tuple with the ResponseInstruction field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResponseInstruction

`func (o *ConfirmationLetters) SetResponseInstruction(v ResponseInstructionsType)`

SetResponseInstruction sets ResponseInstruction field to given value.

### HasResponseInstruction

`func (o *ConfirmationLetters) HasResponseInstruction() bool`

HasResponseInstruction returns a boolean if a field has been set.

### GetWarnings

`func (o *ConfirmationLetters) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ConfirmationLetters) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ConfirmationLetters) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ConfirmationLetters) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


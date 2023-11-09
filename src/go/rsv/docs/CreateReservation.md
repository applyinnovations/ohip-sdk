# CreateReservation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ChannelInformation** | Pointer to [**ChannelResvRQInfoType**](ChannelResvRQInfoType.md) |  | [optional] 
**FetchInstructions** | Pointer to [**[]ReservationInstructionType**](ReservationInstructionType.md) | Instruction on what has to be fetched. Refer to Generic common types document. | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Reservations** | Pointer to [**HotelReservationsType**](HotelReservationsType.md) |  | [optional] 
**ReservationsInstructionsType** | Pointer to [**ReservationsInstructionsType**](ReservationsInstructionsType.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewCreateReservation

`func NewCreateReservation() *CreateReservation`

NewCreateReservation instantiates a new CreateReservation object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreateReservationWithDefaults

`func NewCreateReservationWithDefaults() *CreateReservation`

NewCreateReservationWithDefaults instantiates a new CreateReservation object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetChannelInformation

`func (o *CreateReservation) GetChannelInformation() ChannelResvRQInfoType`

GetChannelInformation returns the ChannelInformation field if non-nil, zero value otherwise.

### GetChannelInformationOk

`func (o *CreateReservation) GetChannelInformationOk() (*ChannelResvRQInfoType, bool)`

GetChannelInformationOk returns a tuple with the ChannelInformation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannelInformation

`func (o *CreateReservation) SetChannelInformation(v ChannelResvRQInfoType)`

SetChannelInformation sets ChannelInformation field to given value.

### HasChannelInformation

`func (o *CreateReservation) HasChannelInformation() bool`

HasChannelInformation returns a boolean if a field has been set.

### GetFetchInstructions

`func (o *CreateReservation) GetFetchInstructions() []ReservationInstructionType`

GetFetchInstructions returns the FetchInstructions field if non-nil, zero value otherwise.

### GetFetchInstructionsOk

`func (o *CreateReservation) GetFetchInstructionsOk() (*[]ReservationInstructionType, bool)`

GetFetchInstructionsOk returns a tuple with the FetchInstructions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFetchInstructions

`func (o *CreateReservation) SetFetchInstructions(v []ReservationInstructionType)`

SetFetchInstructions sets FetchInstructions field to given value.

### HasFetchInstructions

`func (o *CreateReservation) HasFetchInstructions() bool`

HasFetchInstructions returns a boolean if a field has been set.

### GetLinks

`func (o *CreateReservation) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CreateReservation) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CreateReservation) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CreateReservation) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetReservations

`func (o *CreateReservation) GetReservations() HotelReservationsType`

GetReservations returns the Reservations field if non-nil, zero value otherwise.

### GetReservationsOk

`func (o *CreateReservation) GetReservationsOk() (*HotelReservationsType, bool)`

GetReservationsOk returns a tuple with the Reservations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservations

`func (o *CreateReservation) SetReservations(v HotelReservationsType)`

SetReservations sets Reservations field to given value.

### HasReservations

`func (o *CreateReservation) HasReservations() bool`

HasReservations returns a boolean if a field has been set.

### GetReservationsInstructionsType

`func (o *CreateReservation) GetReservationsInstructionsType() ReservationsInstructionsType`

GetReservationsInstructionsType returns the ReservationsInstructionsType field if non-nil, zero value otherwise.

### GetReservationsInstructionsTypeOk

`func (o *CreateReservation) GetReservationsInstructionsTypeOk() (*ReservationsInstructionsType, bool)`

GetReservationsInstructionsTypeOk returns a tuple with the ReservationsInstructionsType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationsInstructionsType

`func (o *CreateReservation) SetReservationsInstructionsType(v ReservationsInstructionsType)`

SetReservationsInstructionsType sets ReservationsInstructionsType field to given value.

### HasReservationsInstructionsType

`func (o *CreateReservation) HasReservationsInstructionsType() bool`

HasReservationsInstructionsType returns a boolean if a field has been set.

### GetWarnings

`func (o *CreateReservation) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CreateReservation) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CreateReservation) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CreateReservation) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



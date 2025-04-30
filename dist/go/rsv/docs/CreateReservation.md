# CreateReservation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Reservations** | Pointer to [**HotelReservationsType**](HotelReservationsType.md) |  | [optional] 
**FetchInstructions** | Pointer to [**[]ReservationInstructionType**](ReservationInstructionType.md) | Instruction on what has to be fetched. Refer to Generic common types document. | [optional] 
**ReservationsInstructionsType** | Pointer to [**ReservationsInstructionsType**](ReservationsInstructionsType.md) |  | [optional] 
**ChannelInformation** | Pointer to [**ChannelResvRQInfoType**](ChannelResvRQInfoType.md) |  | [optional] 
**ReservationNotification** | Pointer to **bool** | Boolean flag that forces reservation to updates in OPERA. By default, this value is false. | [optional] [default to false]
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

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

### GetReservationNotification

`func (o *CreateReservation) GetReservationNotification() bool`

GetReservationNotification returns the ReservationNotification field if non-nil, zero value otherwise.

### GetReservationNotificationOk

`func (o *CreateReservation) GetReservationNotificationOk() (*bool, bool)`

GetReservationNotificationOk returns a tuple with the ReservationNotification field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationNotification

`func (o *CreateReservation) SetReservationNotification(v bool)`

SetReservationNotification sets ReservationNotification field to given value.

### HasReservationNotification

`func (o *CreateReservation) HasReservationNotification() bool`

HasReservationNotification returns a boolean if a field has been set.

### GetLinks

`func (o *CreateReservation) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CreateReservation) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CreateReservation) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CreateReservation) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *CreateReservation) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CreateReservation) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CreateReservation) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CreateReservation) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



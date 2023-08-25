# PutReservationRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Reservations** | Pointer to [**[]HotelReservationInstructionType**](HotelReservationInstructionType.md) | A collection of Reservations with information that needs to be changed. | [optional] 
**ReservationsInstructionsType** | Pointer to [**ReservationsInstructionsType**](ReservationsInstructionsType.md) |  | [optional] 
**ChannelInformation** | Pointer to [**ChannelResvRQInfoType**](ChannelResvRQInfoType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPutReservationRequest

`func NewPutReservationRequest() *PutReservationRequest`

NewPutReservationRequest instantiates a new PutReservationRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutReservationRequestWithDefaults

`func NewPutReservationRequestWithDefaults() *PutReservationRequest`

NewPutReservationRequestWithDefaults instantiates a new PutReservationRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetReservations

`func (o *PutReservationRequest) GetReservations() []HotelReservationInstructionType`

GetReservations returns the Reservations field if non-nil, zero value otherwise.

### GetReservationsOk

`func (o *PutReservationRequest) GetReservationsOk() (*[]HotelReservationInstructionType, bool)`

GetReservationsOk returns a tuple with the Reservations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservations

`func (o *PutReservationRequest) SetReservations(v []HotelReservationInstructionType)`

SetReservations sets Reservations field to given value.

### HasReservations

`func (o *PutReservationRequest) HasReservations() bool`

HasReservations returns a boolean if a field has been set.

### GetReservationsInstructionsType

`func (o *PutReservationRequest) GetReservationsInstructionsType() ReservationsInstructionsType`

GetReservationsInstructionsType returns the ReservationsInstructionsType field if non-nil, zero value otherwise.

### GetReservationsInstructionsTypeOk

`func (o *PutReservationRequest) GetReservationsInstructionsTypeOk() (*ReservationsInstructionsType, bool)`

GetReservationsInstructionsTypeOk returns a tuple with the ReservationsInstructionsType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationsInstructionsType

`func (o *PutReservationRequest) SetReservationsInstructionsType(v ReservationsInstructionsType)`

SetReservationsInstructionsType sets ReservationsInstructionsType field to given value.

### HasReservationsInstructionsType

`func (o *PutReservationRequest) HasReservationsInstructionsType() bool`

HasReservationsInstructionsType returns a boolean if a field has been set.

### GetChannelInformation

`func (o *PutReservationRequest) GetChannelInformation() ChannelResvRQInfoType`

GetChannelInformation returns the ChannelInformation field if non-nil, zero value otherwise.

### GetChannelInformationOk

`func (o *PutReservationRequest) GetChannelInformationOk() (*ChannelResvRQInfoType, bool)`

GetChannelInformationOk returns a tuple with the ChannelInformation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannelInformation

`func (o *PutReservationRequest) SetChannelInformation(v ChannelResvRQInfoType)`

SetChannelInformation sets ChannelInformation field to given value.

### HasChannelInformation

`func (o *PutReservationRequest) HasChannelInformation() bool`

HasChannelInformation returns a boolean if a field has been set.

### GetLinks

`func (o *PutReservationRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PutReservationRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PutReservationRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PutReservationRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PutReservationRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutReservationRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutReservationRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutReservationRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



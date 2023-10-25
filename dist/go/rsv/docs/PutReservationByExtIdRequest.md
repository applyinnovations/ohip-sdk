# PutReservationByExtIdRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ChannelInformation** | Pointer to [**ChannelResvRQInfoType**](ChannelResvRQInfoType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Reservations** | Pointer to [**[]HotelReservationInstructionType**](HotelReservationInstructionType.md) | A collection of Reservations with information that needs to be changed. | [optional] 
**ReservationsInstructionsType** | Pointer to [**ReservationsInstructionsType**](ReservationsInstructionsType.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPutReservationByExtIdRequest

`func NewPutReservationByExtIdRequest() *PutReservationByExtIdRequest`

NewPutReservationByExtIdRequest instantiates a new PutReservationByExtIdRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutReservationByExtIdRequestWithDefaults

`func NewPutReservationByExtIdRequestWithDefaults() *PutReservationByExtIdRequest`

NewPutReservationByExtIdRequestWithDefaults instantiates a new PutReservationByExtIdRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetChannelInformation

`func (o *PutReservationByExtIdRequest) GetChannelInformation() ChannelResvRQInfoType`

GetChannelInformation returns the ChannelInformation field if non-nil, zero value otherwise.

### GetChannelInformationOk

`func (o *PutReservationByExtIdRequest) GetChannelInformationOk() (*ChannelResvRQInfoType, bool)`

GetChannelInformationOk returns a tuple with the ChannelInformation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannelInformation

`func (o *PutReservationByExtIdRequest) SetChannelInformation(v ChannelResvRQInfoType)`

SetChannelInformation sets ChannelInformation field to given value.

### HasChannelInformation

`func (o *PutReservationByExtIdRequest) HasChannelInformation() bool`

HasChannelInformation returns a boolean if a field has been set.

### GetLinks

`func (o *PutReservationByExtIdRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PutReservationByExtIdRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PutReservationByExtIdRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PutReservationByExtIdRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetReservations

`func (o *PutReservationByExtIdRequest) GetReservations() []HotelReservationInstructionType`

GetReservations returns the Reservations field if non-nil, zero value otherwise.

### GetReservationsOk

`func (o *PutReservationByExtIdRequest) GetReservationsOk() (*[]HotelReservationInstructionType, bool)`

GetReservationsOk returns a tuple with the Reservations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservations

`func (o *PutReservationByExtIdRequest) SetReservations(v []HotelReservationInstructionType)`

SetReservations sets Reservations field to given value.

### HasReservations

`func (o *PutReservationByExtIdRequest) HasReservations() bool`

HasReservations returns a boolean if a field has been set.

### GetReservationsInstructionsType

`func (o *PutReservationByExtIdRequest) GetReservationsInstructionsType() ReservationsInstructionsType`

GetReservationsInstructionsType returns the ReservationsInstructionsType field if non-nil, zero value otherwise.

### GetReservationsInstructionsTypeOk

`func (o *PutReservationByExtIdRequest) GetReservationsInstructionsTypeOk() (*ReservationsInstructionsType, bool)`

GetReservationsInstructionsTypeOk returns a tuple with the ReservationsInstructionsType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationsInstructionsType

`func (o *PutReservationByExtIdRequest) SetReservationsInstructionsType(v ReservationsInstructionsType)`

SetReservationsInstructionsType sets ReservationsInstructionsType field to given value.

### HasReservationsInstructionsType

`func (o *PutReservationByExtIdRequest) HasReservationsInstructionsType() bool`

HasReservationsInstructionsType returns a boolean if a field has been set.

### GetWarnings

`func (o *PutReservationByExtIdRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutReservationByExtIdRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutReservationByExtIdRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutReservationByExtIdRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



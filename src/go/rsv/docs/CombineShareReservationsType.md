# CombineShareReservationsType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CombineShareInstruction** | Pointer to [**CombineShareInstructionType**](CombineShareInstructionType.md) |  | [optional] 
**ExistingReservationId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**FetchInstructions** | Pointer to [**CombineShareReservationsTypeFetchInstructions**](CombineShareReservationsTypeFetchInstructions.md) |  | [optional] 
**HotelId** | Pointer to **string** | Opera Hotel/Resort code for the Combine Share Reservations request. | [optional] 
**NewReservations** | Pointer to [**CombineShareFromProfilesType**](CombineShareFromProfilesType.md) |  | [optional] 
**ShareToReservation** | Pointer to [**CombineShareReservationsTypeShareToReservation**](CombineShareReservationsTypeShareToReservation.md) |  | [optional] 

## Methods

### NewCombineShareReservationsType

`func NewCombineShareReservationsType() *CombineShareReservationsType`

NewCombineShareReservationsType instantiates a new CombineShareReservationsType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCombineShareReservationsTypeWithDefaults

`func NewCombineShareReservationsTypeWithDefaults() *CombineShareReservationsType`

NewCombineShareReservationsTypeWithDefaults instantiates a new CombineShareReservationsType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCombineShareInstruction

`func (o *CombineShareReservationsType) GetCombineShareInstruction() CombineShareInstructionType`

GetCombineShareInstruction returns the CombineShareInstruction field if non-nil, zero value otherwise.

### GetCombineShareInstructionOk

`func (o *CombineShareReservationsType) GetCombineShareInstructionOk() (*CombineShareInstructionType, bool)`

GetCombineShareInstructionOk returns a tuple with the CombineShareInstruction field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCombineShareInstruction

`func (o *CombineShareReservationsType) SetCombineShareInstruction(v CombineShareInstructionType)`

SetCombineShareInstruction sets CombineShareInstruction field to given value.

### HasCombineShareInstruction

`func (o *CombineShareReservationsType) HasCombineShareInstruction() bool`

HasCombineShareInstruction returns a boolean if a field has been set.

### GetExistingReservationId

`func (o *CombineShareReservationsType) GetExistingReservationId() UniqueIDType`

GetExistingReservationId returns the ExistingReservationId field if non-nil, zero value otherwise.

### GetExistingReservationIdOk

`func (o *CombineShareReservationsType) GetExistingReservationIdOk() (*UniqueIDType, bool)`

GetExistingReservationIdOk returns a tuple with the ExistingReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExistingReservationId

`func (o *CombineShareReservationsType) SetExistingReservationId(v UniqueIDType)`

SetExistingReservationId sets ExistingReservationId field to given value.

### HasExistingReservationId

`func (o *CombineShareReservationsType) HasExistingReservationId() bool`

HasExistingReservationId returns a boolean if a field has been set.

### GetFetchInstructions

`func (o *CombineShareReservationsType) GetFetchInstructions() CombineShareReservationsTypeFetchInstructions`

GetFetchInstructions returns the FetchInstructions field if non-nil, zero value otherwise.

### GetFetchInstructionsOk

`func (o *CombineShareReservationsType) GetFetchInstructionsOk() (*CombineShareReservationsTypeFetchInstructions, bool)`

GetFetchInstructionsOk returns a tuple with the FetchInstructions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFetchInstructions

`func (o *CombineShareReservationsType) SetFetchInstructions(v CombineShareReservationsTypeFetchInstructions)`

SetFetchInstructions sets FetchInstructions field to given value.

### HasFetchInstructions

`func (o *CombineShareReservationsType) HasFetchInstructions() bool`

HasFetchInstructions returns a boolean if a field has been set.

### GetHotelId

`func (o *CombineShareReservationsType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *CombineShareReservationsType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *CombineShareReservationsType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *CombineShareReservationsType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetNewReservations

`func (o *CombineShareReservationsType) GetNewReservations() CombineShareFromProfilesType`

GetNewReservations returns the NewReservations field if non-nil, zero value otherwise.

### GetNewReservationsOk

`func (o *CombineShareReservationsType) GetNewReservationsOk() (*CombineShareFromProfilesType, bool)`

GetNewReservationsOk returns a tuple with the NewReservations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNewReservations

`func (o *CombineShareReservationsType) SetNewReservations(v CombineShareFromProfilesType)`

SetNewReservations sets NewReservations field to given value.

### HasNewReservations

`func (o *CombineShareReservationsType) HasNewReservations() bool`

HasNewReservations returns a boolean if a field has been set.

### GetShareToReservation

`func (o *CombineShareReservationsType) GetShareToReservation() CombineShareReservationsTypeShareToReservation`

GetShareToReservation returns the ShareToReservation field if non-nil, zero value otherwise.

### GetShareToReservationOk

`func (o *CombineShareReservationsType) GetShareToReservationOk() (*CombineShareReservationsTypeShareToReservation, bool)`

GetShareToReservationOk returns a tuple with the ShareToReservation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShareToReservation

`func (o *CombineShareReservationsType) SetShareToReservation(v CombineShareReservationsTypeShareToReservation)`

SetShareToReservation sets ShareToReservation field to given value.

### HasShareToReservation

`func (o *CombineShareReservationsType) HasShareToReservation() bool`

HasShareToReservation returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



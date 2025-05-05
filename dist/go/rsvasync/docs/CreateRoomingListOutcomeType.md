# CreateRoomingListOutcomeType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ReservationId** | Pointer to **float32** | Unique Reservation Id | [optional] 
**ReservationSeqNo** | Pointer to **int32** | Sequential number of an individual reservation in rooming list. | [optional] 
**GuestFullName** | Pointer to **string** | Guest&#39;s Full display name. | [optional] 
**RoomType** | Pointer to **string** |  | [optional] 
**ArrivalDate** | Pointer to **string** | Display the Arrival date of the guest. | [optional] 
**DepartureDate** | Pointer to **string** | Display the Departure date of the guest. | [optional] 
**CreateStatus** | Pointer to **string** | Create Status. | [optional] 
**ConfirmationNo** | Pointer to **float32** | Unique Confirmation number | [optional] 
**ProfileNameId** | Pointer to **float32** | Unique profile Id | [optional] 
**OutcomeMessages** | Pointer to **map[string]interface{}** | Status messages of create rooming list | [optional] 

## Methods

### NewCreateRoomingListOutcomeType

`func NewCreateRoomingListOutcomeType() *CreateRoomingListOutcomeType`

NewCreateRoomingListOutcomeType instantiates a new CreateRoomingListOutcomeType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreateRoomingListOutcomeTypeWithDefaults

`func NewCreateRoomingListOutcomeTypeWithDefaults() *CreateRoomingListOutcomeType`

NewCreateRoomingListOutcomeTypeWithDefaults instantiates a new CreateRoomingListOutcomeType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetReservationId

`func (o *CreateRoomingListOutcomeType) GetReservationId() float32`

GetReservationId returns the ReservationId field if non-nil, zero value otherwise.

### GetReservationIdOk

`func (o *CreateRoomingListOutcomeType) GetReservationIdOk() (*float32, bool)`

GetReservationIdOk returns a tuple with the ReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationId

`func (o *CreateRoomingListOutcomeType) SetReservationId(v float32)`

SetReservationId sets ReservationId field to given value.

### HasReservationId

`func (o *CreateRoomingListOutcomeType) HasReservationId() bool`

HasReservationId returns a boolean if a field has been set.

### GetReservationSeqNo

`func (o *CreateRoomingListOutcomeType) GetReservationSeqNo() int32`

GetReservationSeqNo returns the ReservationSeqNo field if non-nil, zero value otherwise.

### GetReservationSeqNoOk

`func (o *CreateRoomingListOutcomeType) GetReservationSeqNoOk() (*int32, bool)`

GetReservationSeqNoOk returns a tuple with the ReservationSeqNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationSeqNo

`func (o *CreateRoomingListOutcomeType) SetReservationSeqNo(v int32)`

SetReservationSeqNo sets ReservationSeqNo field to given value.

### HasReservationSeqNo

`func (o *CreateRoomingListOutcomeType) HasReservationSeqNo() bool`

HasReservationSeqNo returns a boolean if a field has been set.

### GetGuestFullName

`func (o *CreateRoomingListOutcomeType) GetGuestFullName() string`

GetGuestFullName returns the GuestFullName field if non-nil, zero value otherwise.

### GetGuestFullNameOk

`func (o *CreateRoomingListOutcomeType) GetGuestFullNameOk() (*string, bool)`

GetGuestFullNameOk returns a tuple with the GuestFullName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestFullName

`func (o *CreateRoomingListOutcomeType) SetGuestFullName(v string)`

SetGuestFullName sets GuestFullName field to given value.

### HasGuestFullName

`func (o *CreateRoomingListOutcomeType) HasGuestFullName() bool`

HasGuestFullName returns a boolean if a field has been set.

### GetRoomType

`func (o *CreateRoomingListOutcomeType) GetRoomType() string`

GetRoomType returns the RoomType field if non-nil, zero value otherwise.

### GetRoomTypeOk

`func (o *CreateRoomingListOutcomeType) GetRoomTypeOk() (*string, bool)`

GetRoomTypeOk returns a tuple with the RoomType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomType

`func (o *CreateRoomingListOutcomeType) SetRoomType(v string)`

SetRoomType sets RoomType field to given value.

### HasRoomType

`func (o *CreateRoomingListOutcomeType) HasRoomType() bool`

HasRoomType returns a boolean if a field has been set.

### GetArrivalDate

`func (o *CreateRoomingListOutcomeType) GetArrivalDate() string`

GetArrivalDate returns the ArrivalDate field if non-nil, zero value otherwise.

### GetArrivalDateOk

`func (o *CreateRoomingListOutcomeType) GetArrivalDateOk() (*string, bool)`

GetArrivalDateOk returns a tuple with the ArrivalDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetArrivalDate

`func (o *CreateRoomingListOutcomeType) SetArrivalDate(v string)`

SetArrivalDate sets ArrivalDate field to given value.

### HasArrivalDate

`func (o *CreateRoomingListOutcomeType) HasArrivalDate() bool`

HasArrivalDate returns a boolean if a field has been set.

### GetDepartureDate

`func (o *CreateRoomingListOutcomeType) GetDepartureDate() string`

GetDepartureDate returns the DepartureDate field if non-nil, zero value otherwise.

### GetDepartureDateOk

`func (o *CreateRoomingListOutcomeType) GetDepartureDateOk() (*string, bool)`

GetDepartureDateOk returns a tuple with the DepartureDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDepartureDate

`func (o *CreateRoomingListOutcomeType) SetDepartureDate(v string)`

SetDepartureDate sets DepartureDate field to given value.

### HasDepartureDate

`func (o *CreateRoomingListOutcomeType) HasDepartureDate() bool`

HasDepartureDate returns a boolean if a field has been set.

### GetCreateStatus

`func (o *CreateRoomingListOutcomeType) GetCreateStatus() string`

GetCreateStatus returns the CreateStatus field if non-nil, zero value otherwise.

### GetCreateStatusOk

`func (o *CreateRoomingListOutcomeType) GetCreateStatusOk() (*string, bool)`

GetCreateStatusOk returns a tuple with the CreateStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreateStatus

`func (o *CreateRoomingListOutcomeType) SetCreateStatus(v string)`

SetCreateStatus sets CreateStatus field to given value.

### HasCreateStatus

`func (o *CreateRoomingListOutcomeType) HasCreateStatus() bool`

HasCreateStatus returns a boolean if a field has been set.

### GetConfirmationNo

`func (o *CreateRoomingListOutcomeType) GetConfirmationNo() float32`

GetConfirmationNo returns the ConfirmationNo field if non-nil, zero value otherwise.

### GetConfirmationNoOk

`func (o *CreateRoomingListOutcomeType) GetConfirmationNoOk() (*float32, bool)`

GetConfirmationNoOk returns a tuple with the ConfirmationNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConfirmationNo

`func (o *CreateRoomingListOutcomeType) SetConfirmationNo(v float32)`

SetConfirmationNo sets ConfirmationNo field to given value.

### HasConfirmationNo

`func (o *CreateRoomingListOutcomeType) HasConfirmationNo() bool`

HasConfirmationNo returns a boolean if a field has been set.

### GetProfileNameId

`func (o *CreateRoomingListOutcomeType) GetProfileNameId() float32`

GetProfileNameId returns the ProfileNameId field if non-nil, zero value otherwise.

### GetProfileNameIdOk

`func (o *CreateRoomingListOutcomeType) GetProfileNameIdOk() (*float32, bool)`

GetProfileNameIdOk returns a tuple with the ProfileNameId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileNameId

`func (o *CreateRoomingListOutcomeType) SetProfileNameId(v float32)`

SetProfileNameId sets ProfileNameId field to given value.

### HasProfileNameId

`func (o *CreateRoomingListOutcomeType) HasProfileNameId() bool`

HasProfileNameId returns a boolean if a field has been set.

### GetOutcomeMessages

`func (o *CreateRoomingListOutcomeType) GetOutcomeMessages() map[string]interface{}`

GetOutcomeMessages returns the OutcomeMessages field if non-nil, zero value otherwise.

### GetOutcomeMessagesOk

`func (o *CreateRoomingListOutcomeType) GetOutcomeMessagesOk() (*map[string]interface{}, bool)`

GetOutcomeMessagesOk returns a tuple with the OutcomeMessages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOutcomeMessages

`func (o *CreateRoomingListOutcomeType) SetOutcomeMessages(v map[string]interface{})`

SetOutcomeMessages sets OutcomeMessages field to given value.

### HasOutcomeMessages

`func (o *CreateRoomingListOutcomeType) HasOutcomeMessages() bool`

HasOutcomeMessages returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



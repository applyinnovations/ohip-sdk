# ValidateRoomingListOutcomeType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ReservationId** | Pointer to **float32** | Unique Reservation Id | [optional] 
**ReservationSeqNo** | Pointer to **int32** | Sequencial number of an individual reservation in rooming list. | [optional] 
**GuestFullName** | Pointer to **string** | Guest&#39;s Full display name. | [optional] 
**RoomType** | Pointer to **string** |  | [optional] 
**ArrivalDate** | Pointer to **string** | Display the arrival date of the guest. | [optional] 
**DepartureDate** | Pointer to **string** | Display the departure date of the guest. | [optional] 
**ValidateStatus** | Pointer to **string** | Validate Status. | [optional] 
**OutcomeMessages** | Pointer to **map[string]interface{}** | Status messages of validate rooming list | [optional] 

## Methods

### NewValidateRoomingListOutcomeType

`func NewValidateRoomingListOutcomeType() *ValidateRoomingListOutcomeType`

NewValidateRoomingListOutcomeType instantiates a new ValidateRoomingListOutcomeType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewValidateRoomingListOutcomeTypeWithDefaults

`func NewValidateRoomingListOutcomeTypeWithDefaults() *ValidateRoomingListOutcomeType`

NewValidateRoomingListOutcomeTypeWithDefaults instantiates a new ValidateRoomingListOutcomeType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetReservationId

`func (o *ValidateRoomingListOutcomeType) GetReservationId() float32`

GetReservationId returns the ReservationId field if non-nil, zero value otherwise.

### GetReservationIdOk

`func (o *ValidateRoomingListOutcomeType) GetReservationIdOk() (*float32, bool)`

GetReservationIdOk returns a tuple with the ReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationId

`func (o *ValidateRoomingListOutcomeType) SetReservationId(v float32)`

SetReservationId sets ReservationId field to given value.

### HasReservationId

`func (o *ValidateRoomingListOutcomeType) HasReservationId() bool`

HasReservationId returns a boolean if a field has been set.

### GetReservationSeqNo

`func (o *ValidateRoomingListOutcomeType) GetReservationSeqNo() int32`

GetReservationSeqNo returns the ReservationSeqNo field if non-nil, zero value otherwise.

### GetReservationSeqNoOk

`func (o *ValidateRoomingListOutcomeType) GetReservationSeqNoOk() (*int32, bool)`

GetReservationSeqNoOk returns a tuple with the ReservationSeqNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationSeqNo

`func (o *ValidateRoomingListOutcomeType) SetReservationSeqNo(v int32)`

SetReservationSeqNo sets ReservationSeqNo field to given value.

### HasReservationSeqNo

`func (o *ValidateRoomingListOutcomeType) HasReservationSeqNo() bool`

HasReservationSeqNo returns a boolean if a field has been set.

### GetGuestFullName

`func (o *ValidateRoomingListOutcomeType) GetGuestFullName() string`

GetGuestFullName returns the GuestFullName field if non-nil, zero value otherwise.

### GetGuestFullNameOk

`func (o *ValidateRoomingListOutcomeType) GetGuestFullNameOk() (*string, bool)`

GetGuestFullNameOk returns a tuple with the GuestFullName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestFullName

`func (o *ValidateRoomingListOutcomeType) SetGuestFullName(v string)`

SetGuestFullName sets GuestFullName field to given value.

### HasGuestFullName

`func (o *ValidateRoomingListOutcomeType) HasGuestFullName() bool`

HasGuestFullName returns a boolean if a field has been set.

### GetRoomType

`func (o *ValidateRoomingListOutcomeType) GetRoomType() string`

GetRoomType returns the RoomType field if non-nil, zero value otherwise.

### GetRoomTypeOk

`func (o *ValidateRoomingListOutcomeType) GetRoomTypeOk() (*string, bool)`

GetRoomTypeOk returns a tuple with the RoomType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomType

`func (o *ValidateRoomingListOutcomeType) SetRoomType(v string)`

SetRoomType sets RoomType field to given value.

### HasRoomType

`func (o *ValidateRoomingListOutcomeType) HasRoomType() bool`

HasRoomType returns a boolean if a field has been set.

### GetArrivalDate

`func (o *ValidateRoomingListOutcomeType) GetArrivalDate() string`

GetArrivalDate returns the ArrivalDate field if non-nil, zero value otherwise.

### GetArrivalDateOk

`func (o *ValidateRoomingListOutcomeType) GetArrivalDateOk() (*string, bool)`

GetArrivalDateOk returns a tuple with the ArrivalDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetArrivalDate

`func (o *ValidateRoomingListOutcomeType) SetArrivalDate(v string)`

SetArrivalDate sets ArrivalDate field to given value.

### HasArrivalDate

`func (o *ValidateRoomingListOutcomeType) HasArrivalDate() bool`

HasArrivalDate returns a boolean if a field has been set.

### GetDepartureDate

`func (o *ValidateRoomingListOutcomeType) GetDepartureDate() string`

GetDepartureDate returns the DepartureDate field if non-nil, zero value otherwise.

### GetDepartureDateOk

`func (o *ValidateRoomingListOutcomeType) GetDepartureDateOk() (*string, bool)`

GetDepartureDateOk returns a tuple with the DepartureDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDepartureDate

`func (o *ValidateRoomingListOutcomeType) SetDepartureDate(v string)`

SetDepartureDate sets DepartureDate field to given value.

### HasDepartureDate

`func (o *ValidateRoomingListOutcomeType) HasDepartureDate() bool`

HasDepartureDate returns a boolean if a field has been set.

### GetValidateStatus

`func (o *ValidateRoomingListOutcomeType) GetValidateStatus() string`

GetValidateStatus returns the ValidateStatus field if non-nil, zero value otherwise.

### GetValidateStatusOk

`func (o *ValidateRoomingListOutcomeType) GetValidateStatusOk() (*string, bool)`

GetValidateStatusOk returns a tuple with the ValidateStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValidateStatus

`func (o *ValidateRoomingListOutcomeType) SetValidateStatus(v string)`

SetValidateStatus sets ValidateStatus field to given value.

### HasValidateStatus

`func (o *ValidateRoomingListOutcomeType) HasValidateStatus() bool`

HasValidateStatus returns a boolean if a field has been set.

### GetOutcomeMessages

`func (o *ValidateRoomingListOutcomeType) GetOutcomeMessages() map[string]interface{}`

GetOutcomeMessages returns the OutcomeMessages field if non-nil, zero value otherwise.

### GetOutcomeMessagesOk

`func (o *ValidateRoomingListOutcomeType) GetOutcomeMessagesOk() (*map[string]interface{}, bool)`

GetOutcomeMessagesOk returns a tuple with the OutcomeMessages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOutcomeMessages

`func (o *ValidateRoomingListOutcomeType) SetOutcomeMessages(v map[string]interface{})`

SetOutcomeMessages sets OutcomeMessages field to given value.

### HasOutcomeMessages

`func (o *ValidateRoomingListOutcomeType) HasOutcomeMessages() bool`

HasOutcomeMessages returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



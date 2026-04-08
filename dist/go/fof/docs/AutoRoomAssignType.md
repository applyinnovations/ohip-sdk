# AutoRoomAssignType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 
**Errors** | Pointer to [**[]ErrorType**](ErrorType.md) | An error that occurred during the processing of a message. | [optional] 
**ReservationId** | Pointer to [**ReservationId**](ReservationId.md) |  | [optional] 
**ArrivalDate** | Pointer to **string** | Arrival date of the reservation. | [optional] 
**DepartureDate** | Pointer to **string** | Departure date of the reservation. | [optional] 
**GuestName** | Pointer to **string** | Guest name associated to the reservation. | [optional] 
**RoomId** | Pointer to **string** | Room number associated to the reservation. | [optional] 
**ConfirmationNo** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**RoomStatus** | Pointer to [**HousekeepingRoomStatusType**](HousekeepingRoomStatusType.md) |  | [optional] 

## Methods

### NewAutoRoomAssignType

`func NewAutoRoomAssignType() *AutoRoomAssignType`

NewAutoRoomAssignType instantiates a new AutoRoomAssignType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAutoRoomAssignTypeWithDefaults

`func NewAutoRoomAssignTypeWithDefaults() *AutoRoomAssignType`

NewAutoRoomAssignTypeWithDefaults instantiates a new AutoRoomAssignType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetWarnings

`func (o *AutoRoomAssignType) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *AutoRoomAssignType) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *AutoRoomAssignType) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *AutoRoomAssignType) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.

### GetErrors

`func (o *AutoRoomAssignType) GetErrors() []ErrorType`

GetErrors returns the Errors field if non-nil, zero value otherwise.

### GetErrorsOk

`func (o *AutoRoomAssignType) GetErrorsOk() (*[]ErrorType, bool)`

GetErrorsOk returns a tuple with the Errors field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrors

`func (o *AutoRoomAssignType) SetErrors(v []ErrorType)`

SetErrors sets Errors field to given value.

### HasErrors

`func (o *AutoRoomAssignType) HasErrors() bool`

HasErrors returns a boolean if a field has been set.

### GetReservationId

`func (o *AutoRoomAssignType) GetReservationId() ReservationId`

GetReservationId returns the ReservationId field if non-nil, zero value otherwise.

### GetReservationIdOk

`func (o *AutoRoomAssignType) GetReservationIdOk() (*ReservationId, bool)`

GetReservationIdOk returns a tuple with the ReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationId

`func (o *AutoRoomAssignType) SetReservationId(v ReservationId)`

SetReservationId sets ReservationId field to given value.

### HasReservationId

`func (o *AutoRoomAssignType) HasReservationId() bool`

HasReservationId returns a boolean if a field has been set.

### GetArrivalDate

`func (o *AutoRoomAssignType) GetArrivalDate() string`

GetArrivalDate returns the ArrivalDate field if non-nil, zero value otherwise.

### GetArrivalDateOk

`func (o *AutoRoomAssignType) GetArrivalDateOk() (*string, bool)`

GetArrivalDateOk returns a tuple with the ArrivalDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetArrivalDate

`func (o *AutoRoomAssignType) SetArrivalDate(v string)`

SetArrivalDate sets ArrivalDate field to given value.

### HasArrivalDate

`func (o *AutoRoomAssignType) HasArrivalDate() bool`

HasArrivalDate returns a boolean if a field has been set.

### GetDepartureDate

`func (o *AutoRoomAssignType) GetDepartureDate() string`

GetDepartureDate returns the DepartureDate field if non-nil, zero value otherwise.

### GetDepartureDateOk

`func (o *AutoRoomAssignType) GetDepartureDateOk() (*string, bool)`

GetDepartureDateOk returns a tuple with the DepartureDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDepartureDate

`func (o *AutoRoomAssignType) SetDepartureDate(v string)`

SetDepartureDate sets DepartureDate field to given value.

### HasDepartureDate

`func (o *AutoRoomAssignType) HasDepartureDate() bool`

HasDepartureDate returns a boolean if a field has been set.

### GetGuestName

`func (o *AutoRoomAssignType) GetGuestName() string`

GetGuestName returns the GuestName field if non-nil, zero value otherwise.

### GetGuestNameOk

`func (o *AutoRoomAssignType) GetGuestNameOk() (*string, bool)`

GetGuestNameOk returns a tuple with the GuestName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestName

`func (o *AutoRoomAssignType) SetGuestName(v string)`

SetGuestName sets GuestName field to given value.

### HasGuestName

`func (o *AutoRoomAssignType) HasGuestName() bool`

HasGuestName returns a boolean if a field has been set.

### GetRoomId

`func (o *AutoRoomAssignType) GetRoomId() string`

GetRoomId returns the RoomId field if non-nil, zero value otherwise.

### GetRoomIdOk

`func (o *AutoRoomAssignType) GetRoomIdOk() (*string, bool)`

GetRoomIdOk returns a tuple with the RoomId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomId

`func (o *AutoRoomAssignType) SetRoomId(v string)`

SetRoomId sets RoomId field to given value.

### HasRoomId

`func (o *AutoRoomAssignType) HasRoomId() bool`

HasRoomId returns a boolean if a field has been set.

### GetConfirmationNo

`func (o *AutoRoomAssignType) GetConfirmationNo() UniqueIDType`

GetConfirmationNo returns the ConfirmationNo field if non-nil, zero value otherwise.

### GetConfirmationNoOk

`func (o *AutoRoomAssignType) GetConfirmationNoOk() (*UniqueIDType, bool)`

GetConfirmationNoOk returns a tuple with the ConfirmationNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConfirmationNo

`func (o *AutoRoomAssignType) SetConfirmationNo(v UniqueIDType)`

SetConfirmationNo sets ConfirmationNo field to given value.

### HasConfirmationNo

`func (o *AutoRoomAssignType) HasConfirmationNo() bool`

HasConfirmationNo returns a boolean if a field has been set.

### GetRoomStatus

`func (o *AutoRoomAssignType) GetRoomStatus() HousekeepingRoomStatusType`

GetRoomStatus returns the RoomStatus field if non-nil, zero value otherwise.

### GetRoomStatusOk

`func (o *AutoRoomAssignType) GetRoomStatusOk() (*HousekeepingRoomStatusType, bool)`

GetRoomStatusOk returns a tuple with the RoomStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomStatus

`func (o *AutoRoomAssignType) SetRoomStatus(v HousekeepingRoomStatusType)`

SetRoomStatus sets RoomStatus field to given value.

### HasRoomStatus

`func (o *AutoRoomAssignType) HasRoomStatus() bool`

HasRoomStatus returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



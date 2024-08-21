# ReservationChargesInBatchInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ArrivalDate** | Pointer to **string** | Arrival date of the reservation. | [optional] 
**DepartureDate** | Pointer to **string** | Departure date of the reservation. | [optional] 
**Errors** | Pointer to [**[]ErrorType**](ErrorType.md) | An error that occurred during the processing of a message. | [optional] 
**GuestName** | Pointer to **string** | Guest name associated to the reservation. | [optional] 
**PostingAllowed** | Pointer to **bool** | Indicator that tells whether posting is allowed for the reservation | [optional] 
**ReservationId** | Pointer to [**ReservationId**](ReservationId.md) |  | [optional] 
**RoomId** | Pointer to **string** | Room number associated to the reservation. | [optional] 
**Success** | Pointer to **map[string]interface{}** | Returning an empty element of this type indicates the successful processing of an message. This is used in conjunction with the Warning Type to report any warnings or business errors. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewReservationChargesInBatchInfoType

`func NewReservationChargesInBatchInfoType() *ReservationChargesInBatchInfoType`

NewReservationChargesInBatchInfoType instantiates a new ReservationChargesInBatchInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReservationChargesInBatchInfoTypeWithDefaults

`func NewReservationChargesInBatchInfoTypeWithDefaults() *ReservationChargesInBatchInfoType`

NewReservationChargesInBatchInfoTypeWithDefaults instantiates a new ReservationChargesInBatchInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetArrivalDate

`func (o *ReservationChargesInBatchInfoType) GetArrivalDate() string`

GetArrivalDate returns the ArrivalDate field if non-nil, zero value otherwise.

### GetArrivalDateOk

`func (o *ReservationChargesInBatchInfoType) GetArrivalDateOk() (*string, bool)`

GetArrivalDateOk returns a tuple with the ArrivalDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetArrivalDate

`func (o *ReservationChargesInBatchInfoType) SetArrivalDate(v string)`

SetArrivalDate sets ArrivalDate field to given value.

### HasArrivalDate

`func (o *ReservationChargesInBatchInfoType) HasArrivalDate() bool`

HasArrivalDate returns a boolean if a field has been set.

### GetDepartureDate

`func (o *ReservationChargesInBatchInfoType) GetDepartureDate() string`

GetDepartureDate returns the DepartureDate field if non-nil, zero value otherwise.

### GetDepartureDateOk

`func (o *ReservationChargesInBatchInfoType) GetDepartureDateOk() (*string, bool)`

GetDepartureDateOk returns a tuple with the DepartureDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDepartureDate

`func (o *ReservationChargesInBatchInfoType) SetDepartureDate(v string)`

SetDepartureDate sets DepartureDate field to given value.

### HasDepartureDate

`func (o *ReservationChargesInBatchInfoType) HasDepartureDate() bool`

HasDepartureDate returns a boolean if a field has been set.

### GetErrors

`func (o *ReservationChargesInBatchInfoType) GetErrors() []ErrorType`

GetErrors returns the Errors field if non-nil, zero value otherwise.

### GetErrorsOk

`func (o *ReservationChargesInBatchInfoType) GetErrorsOk() (*[]ErrorType, bool)`

GetErrorsOk returns a tuple with the Errors field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrors

`func (o *ReservationChargesInBatchInfoType) SetErrors(v []ErrorType)`

SetErrors sets Errors field to given value.

### HasErrors

`func (o *ReservationChargesInBatchInfoType) HasErrors() bool`

HasErrors returns a boolean if a field has been set.

### GetGuestName

`func (o *ReservationChargesInBatchInfoType) GetGuestName() string`

GetGuestName returns the GuestName field if non-nil, zero value otherwise.

### GetGuestNameOk

`func (o *ReservationChargesInBatchInfoType) GetGuestNameOk() (*string, bool)`

GetGuestNameOk returns a tuple with the GuestName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestName

`func (o *ReservationChargesInBatchInfoType) SetGuestName(v string)`

SetGuestName sets GuestName field to given value.

### HasGuestName

`func (o *ReservationChargesInBatchInfoType) HasGuestName() bool`

HasGuestName returns a boolean if a field has been set.

### GetPostingAllowed

`func (o *ReservationChargesInBatchInfoType) GetPostingAllowed() bool`

GetPostingAllowed returns the PostingAllowed field if non-nil, zero value otherwise.

### GetPostingAllowedOk

`func (o *ReservationChargesInBatchInfoType) GetPostingAllowedOk() (*bool, bool)`

GetPostingAllowedOk returns a tuple with the PostingAllowed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPostingAllowed

`func (o *ReservationChargesInBatchInfoType) SetPostingAllowed(v bool)`

SetPostingAllowed sets PostingAllowed field to given value.

### HasPostingAllowed

`func (o *ReservationChargesInBatchInfoType) HasPostingAllowed() bool`

HasPostingAllowed returns a boolean if a field has been set.

### GetReservationId

`func (o *ReservationChargesInBatchInfoType) GetReservationId() ReservationId`

GetReservationId returns the ReservationId field if non-nil, zero value otherwise.

### GetReservationIdOk

`func (o *ReservationChargesInBatchInfoType) GetReservationIdOk() (*ReservationId, bool)`

GetReservationIdOk returns a tuple with the ReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationId

`func (o *ReservationChargesInBatchInfoType) SetReservationId(v ReservationId)`

SetReservationId sets ReservationId field to given value.

### HasReservationId

`func (o *ReservationChargesInBatchInfoType) HasReservationId() bool`

HasReservationId returns a boolean if a field has been set.

### GetRoomId

`func (o *ReservationChargesInBatchInfoType) GetRoomId() string`

GetRoomId returns the RoomId field if non-nil, zero value otherwise.

### GetRoomIdOk

`func (o *ReservationChargesInBatchInfoType) GetRoomIdOk() (*string, bool)`

GetRoomIdOk returns a tuple with the RoomId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomId

`func (o *ReservationChargesInBatchInfoType) SetRoomId(v string)`

SetRoomId sets RoomId field to given value.

### HasRoomId

`func (o *ReservationChargesInBatchInfoType) HasRoomId() bool`

HasRoomId returns a boolean if a field has been set.

### GetSuccess

`func (o *ReservationChargesInBatchInfoType) GetSuccess() map[string]interface{}`

GetSuccess returns the Success field if non-nil, zero value otherwise.

### GetSuccessOk

`func (o *ReservationChargesInBatchInfoType) GetSuccessOk() (*map[string]interface{}, bool)`

GetSuccessOk returns a tuple with the Success field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSuccess

`func (o *ReservationChargesInBatchInfoType) SetSuccess(v map[string]interface{})`

SetSuccess sets Success field to given value.

### HasSuccess

`func (o *ReservationChargesInBatchInfoType) HasSuccess() bool`

HasSuccess returns a boolean if a field has been set.

### GetWarnings

`func (o *ReservationChargesInBatchInfoType) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ReservationChargesInBatchInfoType) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ReservationChargesInBatchInfoType) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ReservationChargesInBatchInfoType) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



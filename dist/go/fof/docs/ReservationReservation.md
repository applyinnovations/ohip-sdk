# ReservationReservation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CheckOutTime** | Pointer to **string** | Request to update the checkout time. | [optional] 
**EndCheckInProcessTime** | Pointer to **string** | Represents the time the user compeletes the check in process. | [optional] 
**IgnoreWarnings** | Pointer to **bool** | Dictates whether to ignore warnings ( e.g. room availability ) before check in. | [optional] 
**LockHandle** | Pointer to **float32** | An id representing the record lock for this reservation. When passed, update operation will verify that this lock is still valid. | [optional] 
**OverrideAdvancePaymentValidation** | Pointer to **bool** | Flag to override advance payment validation. | [optional] 
**PrintRegistration** | Pointer to **bool** | Flag for Print Registration Card | [optional] 
**ProfilePrivacyPrompted** | Pointer to **bool** | Dictates whether Profile privacy stop in check in is prompted. | [optional] 
**RoomId** | Pointer to **string** | Expected room no. If this attribute is included, then Opera will check if the currently configured room no in the database matches this value. | [optional] 
**StartCheckInProcessTime** | Pointer to **string** | Represents the time the user starts the check in process. | [optional] 
**StopCheckin** | Pointer to **bool** | Indicates the Stop Check In reservation Global Alert flag. | [optional] 

## Methods

### NewReservationReservation

`func NewReservationReservation() *ReservationReservation`

NewReservationReservation instantiates a new ReservationReservation object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReservationReservationWithDefaults

`func NewReservationReservationWithDefaults() *ReservationReservation`

NewReservationReservationWithDefaults instantiates a new ReservationReservation object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCheckOutTime

`func (o *ReservationReservation) GetCheckOutTime() string`

GetCheckOutTime returns the CheckOutTime field if non-nil, zero value otherwise.

### GetCheckOutTimeOk

`func (o *ReservationReservation) GetCheckOutTimeOk() (*string, bool)`

GetCheckOutTimeOk returns a tuple with the CheckOutTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCheckOutTime

`func (o *ReservationReservation) SetCheckOutTime(v string)`

SetCheckOutTime sets CheckOutTime field to given value.

### HasCheckOutTime

`func (o *ReservationReservation) HasCheckOutTime() bool`

HasCheckOutTime returns a boolean if a field has been set.

### GetEndCheckInProcessTime

`func (o *ReservationReservation) GetEndCheckInProcessTime() string`

GetEndCheckInProcessTime returns the EndCheckInProcessTime field if non-nil, zero value otherwise.

### GetEndCheckInProcessTimeOk

`func (o *ReservationReservation) GetEndCheckInProcessTimeOk() (*string, bool)`

GetEndCheckInProcessTimeOk returns a tuple with the EndCheckInProcessTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndCheckInProcessTime

`func (o *ReservationReservation) SetEndCheckInProcessTime(v string)`

SetEndCheckInProcessTime sets EndCheckInProcessTime field to given value.

### HasEndCheckInProcessTime

`func (o *ReservationReservation) HasEndCheckInProcessTime() bool`

HasEndCheckInProcessTime returns a boolean if a field has been set.

### GetIgnoreWarnings

`func (o *ReservationReservation) GetIgnoreWarnings() bool`

GetIgnoreWarnings returns the IgnoreWarnings field if non-nil, zero value otherwise.

### GetIgnoreWarningsOk

`func (o *ReservationReservation) GetIgnoreWarningsOk() (*bool, bool)`

GetIgnoreWarningsOk returns a tuple with the IgnoreWarnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIgnoreWarnings

`func (o *ReservationReservation) SetIgnoreWarnings(v bool)`

SetIgnoreWarnings sets IgnoreWarnings field to given value.

### HasIgnoreWarnings

`func (o *ReservationReservation) HasIgnoreWarnings() bool`

HasIgnoreWarnings returns a boolean if a field has been set.

### GetLockHandle

`func (o *ReservationReservation) GetLockHandle() float32`

GetLockHandle returns the LockHandle field if non-nil, zero value otherwise.

### GetLockHandleOk

`func (o *ReservationReservation) GetLockHandleOk() (*float32, bool)`

GetLockHandleOk returns a tuple with the LockHandle field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLockHandle

`func (o *ReservationReservation) SetLockHandle(v float32)`

SetLockHandle sets LockHandle field to given value.

### HasLockHandle

`func (o *ReservationReservation) HasLockHandle() bool`

HasLockHandle returns a boolean if a field has been set.

### GetOverrideAdvancePaymentValidation

`func (o *ReservationReservation) GetOverrideAdvancePaymentValidation() bool`

GetOverrideAdvancePaymentValidation returns the OverrideAdvancePaymentValidation field if non-nil, zero value otherwise.

### GetOverrideAdvancePaymentValidationOk

`func (o *ReservationReservation) GetOverrideAdvancePaymentValidationOk() (*bool, bool)`

GetOverrideAdvancePaymentValidationOk returns a tuple with the OverrideAdvancePaymentValidation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverrideAdvancePaymentValidation

`func (o *ReservationReservation) SetOverrideAdvancePaymentValidation(v bool)`

SetOverrideAdvancePaymentValidation sets OverrideAdvancePaymentValidation field to given value.

### HasOverrideAdvancePaymentValidation

`func (o *ReservationReservation) HasOverrideAdvancePaymentValidation() bool`

HasOverrideAdvancePaymentValidation returns a boolean if a field has been set.

### GetPrintRegistration

`func (o *ReservationReservation) GetPrintRegistration() bool`

GetPrintRegistration returns the PrintRegistration field if non-nil, zero value otherwise.

### GetPrintRegistrationOk

`func (o *ReservationReservation) GetPrintRegistrationOk() (*bool, bool)`

GetPrintRegistrationOk returns a tuple with the PrintRegistration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrintRegistration

`func (o *ReservationReservation) SetPrintRegistration(v bool)`

SetPrintRegistration sets PrintRegistration field to given value.

### HasPrintRegistration

`func (o *ReservationReservation) HasPrintRegistration() bool`

HasPrintRegistration returns a boolean if a field has been set.

### GetProfilePrivacyPrompted

`func (o *ReservationReservation) GetProfilePrivacyPrompted() bool`

GetProfilePrivacyPrompted returns the ProfilePrivacyPrompted field if non-nil, zero value otherwise.

### GetProfilePrivacyPromptedOk

`func (o *ReservationReservation) GetProfilePrivacyPromptedOk() (*bool, bool)`

GetProfilePrivacyPromptedOk returns a tuple with the ProfilePrivacyPrompted field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfilePrivacyPrompted

`func (o *ReservationReservation) SetProfilePrivacyPrompted(v bool)`

SetProfilePrivacyPrompted sets ProfilePrivacyPrompted field to given value.

### HasProfilePrivacyPrompted

`func (o *ReservationReservation) HasProfilePrivacyPrompted() bool`

HasProfilePrivacyPrompted returns a boolean if a field has been set.

### GetRoomId

`func (o *ReservationReservation) GetRoomId() string`

GetRoomId returns the RoomId field if non-nil, zero value otherwise.

### GetRoomIdOk

`func (o *ReservationReservation) GetRoomIdOk() (*string, bool)`

GetRoomIdOk returns a tuple with the RoomId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomId

`func (o *ReservationReservation) SetRoomId(v string)`

SetRoomId sets RoomId field to given value.

### HasRoomId

`func (o *ReservationReservation) HasRoomId() bool`

HasRoomId returns a boolean if a field has been set.

### GetStartCheckInProcessTime

`func (o *ReservationReservation) GetStartCheckInProcessTime() string`

GetStartCheckInProcessTime returns the StartCheckInProcessTime field if non-nil, zero value otherwise.

### GetStartCheckInProcessTimeOk

`func (o *ReservationReservation) GetStartCheckInProcessTimeOk() (*string, bool)`

GetStartCheckInProcessTimeOk returns a tuple with the StartCheckInProcessTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartCheckInProcessTime

`func (o *ReservationReservation) SetStartCheckInProcessTime(v string)`

SetStartCheckInProcessTime sets StartCheckInProcessTime field to given value.

### HasStartCheckInProcessTime

`func (o *ReservationReservation) HasStartCheckInProcessTime() bool`

HasStartCheckInProcessTime returns a boolean if a field has been set.

### GetStopCheckin

`func (o *ReservationReservation) GetStopCheckin() bool`

GetStopCheckin returns the StopCheckin field if non-nil, zero value otherwise.

### GetStopCheckinOk

`func (o *ReservationReservation) GetStopCheckinOk() (*bool, bool)`

GetStopCheckinOk returns a tuple with the StopCheckin field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStopCheckin

`func (o *ReservationReservation) SetStopCheckin(v bool)`

SetStopCheckin sets StopCheckin field to given value.

### HasStopCheckin

`func (o *ReservationReservation) HasStopCheckin() bool`

HasStopCheckin returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



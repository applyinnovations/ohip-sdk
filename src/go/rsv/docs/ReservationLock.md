# ReservationLock

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**LockHandle** | Pointer to **float32** | An identifier representing the record lock for the reservation under process.When passed,then it will verify that if the lock is still valid and return same lock handle.Else it will create new lock. | [optional] 
**OverrideIfLockedByRequestingUser** | Pointer to **bool** | If true, the operation will try to break the existing lock if the requesting user is the same as the owner of the lock. | [optional] 
**ReservationId** | Pointer to [**ReservationId**](ReservationId.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewReservationLock

`func NewReservationLock() *ReservationLock`

NewReservationLock instantiates a new ReservationLock object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReservationLockWithDefaults

`func NewReservationLockWithDefaults() *ReservationLock`

NewReservationLockWithDefaults instantiates a new ReservationLock object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *ReservationLock) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ReservationLock) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ReservationLock) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ReservationLock) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetLinks

`func (o *ReservationLock) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ReservationLock) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ReservationLock) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ReservationLock) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetLockHandle

`func (o *ReservationLock) GetLockHandle() float32`

GetLockHandle returns the LockHandle field if non-nil, zero value otherwise.

### GetLockHandleOk

`func (o *ReservationLock) GetLockHandleOk() (*float32, bool)`

GetLockHandleOk returns a tuple with the LockHandle field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLockHandle

`func (o *ReservationLock) SetLockHandle(v float32)`

SetLockHandle sets LockHandle field to given value.

### HasLockHandle

`func (o *ReservationLock) HasLockHandle() bool`

HasLockHandle returns a boolean if a field has been set.

### GetOverrideIfLockedByRequestingUser

`func (o *ReservationLock) GetOverrideIfLockedByRequestingUser() bool`

GetOverrideIfLockedByRequestingUser returns the OverrideIfLockedByRequestingUser field if non-nil, zero value otherwise.

### GetOverrideIfLockedByRequestingUserOk

`func (o *ReservationLock) GetOverrideIfLockedByRequestingUserOk() (*bool, bool)`

GetOverrideIfLockedByRequestingUserOk returns a tuple with the OverrideIfLockedByRequestingUser field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverrideIfLockedByRequestingUser

`func (o *ReservationLock) SetOverrideIfLockedByRequestingUser(v bool)`

SetOverrideIfLockedByRequestingUser sets OverrideIfLockedByRequestingUser field to given value.

### HasOverrideIfLockedByRequestingUser

`func (o *ReservationLock) HasOverrideIfLockedByRequestingUser() bool`

HasOverrideIfLockedByRequestingUser returns a boolean if a field has been set.

### GetReservationId

`func (o *ReservationLock) GetReservationId() ReservationId`

GetReservationId returns the ReservationId field if non-nil, zero value otherwise.

### GetReservationIdOk

`func (o *ReservationLock) GetReservationIdOk() (*ReservationId, bool)`

GetReservationIdOk returns a tuple with the ReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationId

`func (o *ReservationLock) SetReservationId(v ReservationId)`

SetReservationId sets ReservationId field to given value.

### HasReservationId

`func (o *ReservationLock) HasReservationId() bool`

HasReservationId returns a boolean if a field has been set.

### GetWarnings

`func (o *ReservationLock) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ReservationLock) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ReservationLock) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ReservationLock) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



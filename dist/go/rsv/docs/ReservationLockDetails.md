# ReservationLockDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AcquiredReservationLock** | Pointer to [**OperaRecordLock**](OperaRecordLock.md) |  | [optional] 
**ExistingReservationLock** | Pointer to [**OperaRecordLock**](OperaRecordLock.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewReservationLockDetails

`func NewReservationLockDetails() *ReservationLockDetails`

NewReservationLockDetails instantiates a new ReservationLockDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReservationLockDetailsWithDefaults

`func NewReservationLockDetailsWithDefaults() *ReservationLockDetails`

NewReservationLockDetailsWithDefaults instantiates a new ReservationLockDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAcquiredReservationLock

`func (o *ReservationLockDetails) GetAcquiredReservationLock() OperaRecordLock`

GetAcquiredReservationLock returns the AcquiredReservationLock field if non-nil, zero value otherwise.

### GetAcquiredReservationLockOk

`func (o *ReservationLockDetails) GetAcquiredReservationLockOk() (*OperaRecordLock, bool)`

GetAcquiredReservationLockOk returns a tuple with the AcquiredReservationLock field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAcquiredReservationLock

`func (o *ReservationLockDetails) SetAcquiredReservationLock(v OperaRecordLock)`

SetAcquiredReservationLock sets AcquiredReservationLock field to given value.

### HasAcquiredReservationLock

`func (o *ReservationLockDetails) HasAcquiredReservationLock() bool`

HasAcquiredReservationLock returns a boolean if a field has been set.

### GetExistingReservationLock

`func (o *ReservationLockDetails) GetExistingReservationLock() OperaRecordLock`

GetExistingReservationLock returns the ExistingReservationLock field if non-nil, zero value otherwise.

### GetExistingReservationLockOk

`func (o *ReservationLockDetails) GetExistingReservationLockOk() (*OperaRecordLock, bool)`

GetExistingReservationLockOk returns a tuple with the ExistingReservationLock field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExistingReservationLock

`func (o *ReservationLockDetails) SetExistingReservationLock(v OperaRecordLock)`

SetExistingReservationLock sets ExistingReservationLock field to given value.

### HasExistingReservationLock

`func (o *ReservationLockDetails) HasExistingReservationLock() bool`

HasExistingReservationLock returns a boolean if a field has been set.

### GetLinks

`func (o *ReservationLockDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ReservationLockDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ReservationLockDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ReservationLockDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ReservationLockDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ReservationLockDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ReservationLockDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ReservationLockDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



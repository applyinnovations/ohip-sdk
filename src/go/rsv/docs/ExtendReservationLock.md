# ExtendReservationLock

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AdditionalTimeToLive** | Pointer to **float32** | The number of seconds to add to the lock&#39;s validity time. | [optional] 
**HotelId** | Pointer to **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**LockHandle** | Pointer to **float32** | The lock handle of the record lock we are attempting to release. | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewExtendReservationLock

`func NewExtendReservationLock() *ExtendReservationLock`

NewExtendReservationLock instantiates a new ExtendReservationLock object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewExtendReservationLockWithDefaults

`func NewExtendReservationLockWithDefaults() *ExtendReservationLock`

NewExtendReservationLockWithDefaults instantiates a new ExtendReservationLock object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAdditionalTimeToLive

`func (o *ExtendReservationLock) GetAdditionalTimeToLive() float32`

GetAdditionalTimeToLive returns the AdditionalTimeToLive field if non-nil, zero value otherwise.

### GetAdditionalTimeToLiveOk

`func (o *ExtendReservationLock) GetAdditionalTimeToLiveOk() (*float32, bool)`

GetAdditionalTimeToLiveOk returns a tuple with the AdditionalTimeToLive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdditionalTimeToLive

`func (o *ExtendReservationLock) SetAdditionalTimeToLive(v float32)`

SetAdditionalTimeToLive sets AdditionalTimeToLive field to given value.

### HasAdditionalTimeToLive

`func (o *ExtendReservationLock) HasAdditionalTimeToLive() bool`

HasAdditionalTimeToLive returns a boolean if a field has been set.

### GetHotelId

`func (o *ExtendReservationLock) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ExtendReservationLock) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ExtendReservationLock) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ExtendReservationLock) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetLinks

`func (o *ExtendReservationLock) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ExtendReservationLock) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ExtendReservationLock) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ExtendReservationLock) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetLockHandle

`func (o *ExtendReservationLock) GetLockHandle() float32`

GetLockHandle returns the LockHandle field if non-nil, zero value otherwise.

### GetLockHandleOk

`func (o *ExtendReservationLock) GetLockHandleOk() (*float32, bool)`

GetLockHandleOk returns a tuple with the LockHandle field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLockHandle

`func (o *ExtendReservationLock) SetLockHandle(v float32)`

SetLockHandle sets LockHandle field to given value.

### HasLockHandle

`func (o *ExtendReservationLock) HasLockHandle() bool`

HasLockHandle returns a boolean if a field has been set.

### GetWarnings

`func (o *ExtendReservationLock) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ExtendReservationLock) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ExtendReservationLock) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ExtendReservationLock) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



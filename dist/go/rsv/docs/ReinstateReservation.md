# ReinstateReservation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AdditionalReservationIdList** | Pointer to [**[]UniqueIDType**](UniqueIDType.md) | Unique Id that references an object uniquely in the system. | [optional] 
**EffectiveRates** | Pointer to [**[]EffectiveRateType**](EffectiveRateType.md) | Collection of effective rate amount per guest on specific dates. | [optional] 
**HotelId** | Pointer to **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**OverrideInventory** | Pointer to **bool** | Flag that indicates if room inventory check should be skipped when the reservation is being reinstated. | [optional] 
**OverrideRates** | Pointer to **bool** | Flag that indicates if rate code inventory check should be skipped when the reservation is being reinstated. | [optional] 
**OverrideRoomAllocation** | Pointer to **bool** | Flag that indicates if the check on room allocation should be skipped. | [optional] 
**OverrideRoomOutOfService** | Pointer to **bool** | Flag that indicates if the check on the housekeeping status for out of service should be skipped. | [optional] 
**Reservation** | Pointer to [**HotelReservationType**](HotelReservationType.md) |  | [optional] 
**ReservationIdList** | Pointer to [**[]UniqueIDType**](UniqueIDType.md) | Unique Id that references an object uniquely in the system. | [optional] 
**ReservationLockHandle** | Pointer to **float32** |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewReinstateReservation

`func NewReinstateReservation() *ReinstateReservation`

NewReinstateReservation instantiates a new ReinstateReservation object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReinstateReservationWithDefaults

`func NewReinstateReservationWithDefaults() *ReinstateReservation`

NewReinstateReservationWithDefaults instantiates a new ReinstateReservation object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAdditionalReservationIdList

`func (o *ReinstateReservation) GetAdditionalReservationIdList() []UniqueIDType`

GetAdditionalReservationIdList returns the AdditionalReservationIdList field if non-nil, zero value otherwise.

### GetAdditionalReservationIdListOk

`func (o *ReinstateReservation) GetAdditionalReservationIdListOk() (*[]UniqueIDType, bool)`

GetAdditionalReservationIdListOk returns a tuple with the AdditionalReservationIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdditionalReservationIdList

`func (o *ReinstateReservation) SetAdditionalReservationIdList(v []UniqueIDType)`

SetAdditionalReservationIdList sets AdditionalReservationIdList field to given value.

### HasAdditionalReservationIdList

`func (o *ReinstateReservation) HasAdditionalReservationIdList() bool`

HasAdditionalReservationIdList returns a boolean if a field has been set.

### GetEffectiveRates

`func (o *ReinstateReservation) GetEffectiveRates() []EffectiveRateType`

GetEffectiveRates returns the EffectiveRates field if non-nil, zero value otherwise.

### GetEffectiveRatesOk

`func (o *ReinstateReservation) GetEffectiveRatesOk() (*[]EffectiveRateType, bool)`

GetEffectiveRatesOk returns a tuple with the EffectiveRates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEffectiveRates

`func (o *ReinstateReservation) SetEffectiveRates(v []EffectiveRateType)`

SetEffectiveRates sets EffectiveRates field to given value.

### HasEffectiveRates

`func (o *ReinstateReservation) HasEffectiveRates() bool`

HasEffectiveRates returns a boolean if a field has been set.

### GetHotelId

`func (o *ReinstateReservation) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ReinstateReservation) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ReinstateReservation) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ReinstateReservation) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetLinks

`func (o *ReinstateReservation) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ReinstateReservation) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ReinstateReservation) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ReinstateReservation) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetOverrideInventory

`func (o *ReinstateReservation) GetOverrideInventory() bool`

GetOverrideInventory returns the OverrideInventory field if non-nil, zero value otherwise.

### GetOverrideInventoryOk

`func (o *ReinstateReservation) GetOverrideInventoryOk() (*bool, bool)`

GetOverrideInventoryOk returns a tuple with the OverrideInventory field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverrideInventory

`func (o *ReinstateReservation) SetOverrideInventory(v bool)`

SetOverrideInventory sets OverrideInventory field to given value.

### HasOverrideInventory

`func (o *ReinstateReservation) HasOverrideInventory() bool`

HasOverrideInventory returns a boolean if a field has been set.

### GetOverrideRates

`func (o *ReinstateReservation) GetOverrideRates() bool`

GetOverrideRates returns the OverrideRates field if non-nil, zero value otherwise.

### GetOverrideRatesOk

`func (o *ReinstateReservation) GetOverrideRatesOk() (*bool, bool)`

GetOverrideRatesOk returns a tuple with the OverrideRates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverrideRates

`func (o *ReinstateReservation) SetOverrideRates(v bool)`

SetOverrideRates sets OverrideRates field to given value.

### HasOverrideRates

`func (o *ReinstateReservation) HasOverrideRates() bool`

HasOverrideRates returns a boolean if a field has been set.

### GetOverrideRoomAllocation

`func (o *ReinstateReservation) GetOverrideRoomAllocation() bool`

GetOverrideRoomAllocation returns the OverrideRoomAllocation field if non-nil, zero value otherwise.

### GetOverrideRoomAllocationOk

`func (o *ReinstateReservation) GetOverrideRoomAllocationOk() (*bool, bool)`

GetOverrideRoomAllocationOk returns a tuple with the OverrideRoomAllocation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverrideRoomAllocation

`func (o *ReinstateReservation) SetOverrideRoomAllocation(v bool)`

SetOverrideRoomAllocation sets OverrideRoomAllocation field to given value.

### HasOverrideRoomAllocation

`func (o *ReinstateReservation) HasOverrideRoomAllocation() bool`

HasOverrideRoomAllocation returns a boolean if a field has been set.

### GetOverrideRoomOutOfService

`func (o *ReinstateReservation) GetOverrideRoomOutOfService() bool`

GetOverrideRoomOutOfService returns the OverrideRoomOutOfService field if non-nil, zero value otherwise.

### GetOverrideRoomOutOfServiceOk

`func (o *ReinstateReservation) GetOverrideRoomOutOfServiceOk() (*bool, bool)`

GetOverrideRoomOutOfServiceOk returns a tuple with the OverrideRoomOutOfService field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverrideRoomOutOfService

`func (o *ReinstateReservation) SetOverrideRoomOutOfService(v bool)`

SetOverrideRoomOutOfService sets OverrideRoomOutOfService field to given value.

### HasOverrideRoomOutOfService

`func (o *ReinstateReservation) HasOverrideRoomOutOfService() bool`

HasOverrideRoomOutOfService returns a boolean if a field has been set.

### GetReservation

`func (o *ReinstateReservation) GetReservation() HotelReservationType`

GetReservation returns the Reservation field if non-nil, zero value otherwise.

### GetReservationOk

`func (o *ReinstateReservation) GetReservationOk() (*HotelReservationType, bool)`

GetReservationOk returns a tuple with the Reservation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservation

`func (o *ReinstateReservation) SetReservation(v HotelReservationType)`

SetReservation sets Reservation field to given value.

### HasReservation

`func (o *ReinstateReservation) HasReservation() bool`

HasReservation returns a boolean if a field has been set.

### GetReservationIdList

`func (o *ReinstateReservation) GetReservationIdList() []UniqueIDType`

GetReservationIdList returns the ReservationIdList field if non-nil, zero value otherwise.

### GetReservationIdListOk

`func (o *ReinstateReservation) GetReservationIdListOk() (*[]UniqueIDType, bool)`

GetReservationIdListOk returns a tuple with the ReservationIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationIdList

`func (o *ReinstateReservation) SetReservationIdList(v []UniqueIDType)`

SetReservationIdList sets ReservationIdList field to given value.

### HasReservationIdList

`func (o *ReinstateReservation) HasReservationIdList() bool`

HasReservationIdList returns a boolean if a field has been set.

### GetReservationLockHandle

`func (o *ReinstateReservation) GetReservationLockHandle() float32`

GetReservationLockHandle returns the ReservationLockHandle field if non-nil, zero value otherwise.

### GetReservationLockHandleOk

`func (o *ReinstateReservation) GetReservationLockHandleOk() (*float32, bool)`

GetReservationLockHandleOk returns a tuple with the ReservationLockHandle field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationLockHandle

`func (o *ReinstateReservation) SetReservationLockHandle(v float32)`

SetReservationLockHandle sets ReservationLockHandle field to given value.

### HasReservationLockHandle

`func (o *ReinstateReservation) HasReservationLockHandle() bool`

HasReservationLockHandle returns a boolean if a field has been set.

### GetWarnings

`func (o *ReinstateReservation) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ReinstateReservation) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ReinstateReservation) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ReinstateReservation) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



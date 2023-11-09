# PutReinstateReservationByExtIdRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AdditionalReservationIdList** | Pointer to [**UniqueIDListType**](UniqueIDListType.md) |  | [optional] 
**EffectiveRates** | Pointer to [**EffectiveRatesType**](EffectiveRatesType.md) |  | [optional] 
**HotelId** | Pointer to **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**OverrideInventory** | Pointer to **bool** | Flag that indicates if room inventory check should be skipped when the reservation is being reinstated. | [optional] 
**OverrideRates** | Pointer to **bool** | Flag that indicates if rate code inventory check should be skipped when the reservation is being reinstated. | [optional] 
**OverrideRoomAllocation** | Pointer to **bool** | Flag that indicates if the check on room allocation should be skipped. | [optional] 
**OverrideRoomOutOfService** | Pointer to **bool** | Flag that indicates if the check on the housekeeping status for out of service should be skipped. | [optional] 
**Reservation** | Pointer to [**HotelReservationType**](HotelReservationType.md) |  | [optional] 
**ReservationIdList** | Pointer to [**ReservationIdList**](ReservationIdList.md) |  | [optional] 
**ReservationLockHandle** | Pointer to **float32** |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewPutReinstateReservationByExtIdRequest

`func NewPutReinstateReservationByExtIdRequest() *PutReinstateReservationByExtIdRequest`

NewPutReinstateReservationByExtIdRequest instantiates a new PutReinstateReservationByExtIdRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutReinstateReservationByExtIdRequestWithDefaults

`func NewPutReinstateReservationByExtIdRequestWithDefaults() *PutReinstateReservationByExtIdRequest`

NewPutReinstateReservationByExtIdRequestWithDefaults instantiates a new PutReinstateReservationByExtIdRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAdditionalReservationIdList

`func (o *PutReinstateReservationByExtIdRequest) GetAdditionalReservationIdList() UniqueIDListType`

GetAdditionalReservationIdList returns the AdditionalReservationIdList field if non-nil, zero value otherwise.

### GetAdditionalReservationIdListOk

`func (o *PutReinstateReservationByExtIdRequest) GetAdditionalReservationIdListOk() (*UniqueIDListType, bool)`

GetAdditionalReservationIdListOk returns a tuple with the AdditionalReservationIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdditionalReservationIdList

`func (o *PutReinstateReservationByExtIdRequest) SetAdditionalReservationIdList(v UniqueIDListType)`

SetAdditionalReservationIdList sets AdditionalReservationIdList field to given value.

### HasAdditionalReservationIdList

`func (o *PutReinstateReservationByExtIdRequest) HasAdditionalReservationIdList() bool`

HasAdditionalReservationIdList returns a boolean if a field has been set.

### GetEffectiveRates

`func (o *PutReinstateReservationByExtIdRequest) GetEffectiveRates() EffectiveRatesType`

GetEffectiveRates returns the EffectiveRates field if non-nil, zero value otherwise.

### GetEffectiveRatesOk

`func (o *PutReinstateReservationByExtIdRequest) GetEffectiveRatesOk() (*EffectiveRatesType, bool)`

GetEffectiveRatesOk returns a tuple with the EffectiveRates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEffectiveRates

`func (o *PutReinstateReservationByExtIdRequest) SetEffectiveRates(v EffectiveRatesType)`

SetEffectiveRates sets EffectiveRates field to given value.

### HasEffectiveRates

`func (o *PutReinstateReservationByExtIdRequest) HasEffectiveRates() bool`

HasEffectiveRates returns a boolean if a field has been set.

### GetHotelId

`func (o *PutReinstateReservationByExtIdRequest) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *PutReinstateReservationByExtIdRequest) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *PutReinstateReservationByExtIdRequest) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *PutReinstateReservationByExtIdRequest) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetLinks

`func (o *PutReinstateReservationByExtIdRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PutReinstateReservationByExtIdRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PutReinstateReservationByExtIdRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PutReinstateReservationByExtIdRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetOverrideInventory

`func (o *PutReinstateReservationByExtIdRequest) GetOverrideInventory() bool`

GetOverrideInventory returns the OverrideInventory field if non-nil, zero value otherwise.

### GetOverrideInventoryOk

`func (o *PutReinstateReservationByExtIdRequest) GetOverrideInventoryOk() (*bool, bool)`

GetOverrideInventoryOk returns a tuple with the OverrideInventory field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverrideInventory

`func (o *PutReinstateReservationByExtIdRequest) SetOverrideInventory(v bool)`

SetOverrideInventory sets OverrideInventory field to given value.

### HasOverrideInventory

`func (o *PutReinstateReservationByExtIdRequest) HasOverrideInventory() bool`

HasOverrideInventory returns a boolean if a field has been set.

### GetOverrideRates

`func (o *PutReinstateReservationByExtIdRequest) GetOverrideRates() bool`

GetOverrideRates returns the OverrideRates field if non-nil, zero value otherwise.

### GetOverrideRatesOk

`func (o *PutReinstateReservationByExtIdRequest) GetOverrideRatesOk() (*bool, bool)`

GetOverrideRatesOk returns a tuple with the OverrideRates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverrideRates

`func (o *PutReinstateReservationByExtIdRequest) SetOverrideRates(v bool)`

SetOverrideRates sets OverrideRates field to given value.

### HasOverrideRates

`func (o *PutReinstateReservationByExtIdRequest) HasOverrideRates() bool`

HasOverrideRates returns a boolean if a field has been set.

### GetOverrideRoomAllocation

`func (o *PutReinstateReservationByExtIdRequest) GetOverrideRoomAllocation() bool`

GetOverrideRoomAllocation returns the OverrideRoomAllocation field if non-nil, zero value otherwise.

### GetOverrideRoomAllocationOk

`func (o *PutReinstateReservationByExtIdRequest) GetOverrideRoomAllocationOk() (*bool, bool)`

GetOverrideRoomAllocationOk returns a tuple with the OverrideRoomAllocation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverrideRoomAllocation

`func (o *PutReinstateReservationByExtIdRequest) SetOverrideRoomAllocation(v bool)`

SetOverrideRoomAllocation sets OverrideRoomAllocation field to given value.

### HasOverrideRoomAllocation

`func (o *PutReinstateReservationByExtIdRequest) HasOverrideRoomAllocation() bool`

HasOverrideRoomAllocation returns a boolean if a field has been set.

### GetOverrideRoomOutOfService

`func (o *PutReinstateReservationByExtIdRequest) GetOverrideRoomOutOfService() bool`

GetOverrideRoomOutOfService returns the OverrideRoomOutOfService field if non-nil, zero value otherwise.

### GetOverrideRoomOutOfServiceOk

`func (o *PutReinstateReservationByExtIdRequest) GetOverrideRoomOutOfServiceOk() (*bool, bool)`

GetOverrideRoomOutOfServiceOk returns a tuple with the OverrideRoomOutOfService field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverrideRoomOutOfService

`func (o *PutReinstateReservationByExtIdRequest) SetOverrideRoomOutOfService(v bool)`

SetOverrideRoomOutOfService sets OverrideRoomOutOfService field to given value.

### HasOverrideRoomOutOfService

`func (o *PutReinstateReservationByExtIdRequest) HasOverrideRoomOutOfService() bool`

HasOverrideRoomOutOfService returns a boolean if a field has been set.

### GetReservation

`func (o *PutReinstateReservationByExtIdRequest) GetReservation() HotelReservationType`

GetReservation returns the Reservation field if non-nil, zero value otherwise.

### GetReservationOk

`func (o *PutReinstateReservationByExtIdRequest) GetReservationOk() (*HotelReservationType, bool)`

GetReservationOk returns a tuple with the Reservation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservation

`func (o *PutReinstateReservationByExtIdRequest) SetReservation(v HotelReservationType)`

SetReservation sets Reservation field to given value.

### HasReservation

`func (o *PutReinstateReservationByExtIdRequest) HasReservation() bool`

HasReservation returns a boolean if a field has been set.

### GetReservationIdList

`func (o *PutReinstateReservationByExtIdRequest) GetReservationIdList() ReservationIdList`

GetReservationIdList returns the ReservationIdList field if non-nil, zero value otherwise.

### GetReservationIdListOk

`func (o *PutReinstateReservationByExtIdRequest) GetReservationIdListOk() (*ReservationIdList, bool)`

GetReservationIdListOk returns a tuple with the ReservationIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationIdList

`func (o *PutReinstateReservationByExtIdRequest) SetReservationIdList(v ReservationIdList)`

SetReservationIdList sets ReservationIdList field to given value.

### HasReservationIdList

`func (o *PutReinstateReservationByExtIdRequest) HasReservationIdList() bool`

HasReservationIdList returns a boolean if a field has been set.

### GetReservationLockHandle

`func (o *PutReinstateReservationByExtIdRequest) GetReservationLockHandle() float32`

GetReservationLockHandle returns the ReservationLockHandle field if non-nil, zero value otherwise.

### GetReservationLockHandleOk

`func (o *PutReinstateReservationByExtIdRequest) GetReservationLockHandleOk() (*float32, bool)`

GetReservationLockHandleOk returns a tuple with the ReservationLockHandle field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationLockHandle

`func (o *PutReinstateReservationByExtIdRequest) SetReservationLockHandle(v float32)`

SetReservationLockHandle sets ReservationLockHandle field to given value.

### HasReservationLockHandle

`func (o *PutReinstateReservationByExtIdRequest) HasReservationLockHandle() bool`

HasReservationLockHandle returns a boolean if a field has been set.

### GetWarnings

`func (o *PutReinstateReservationByExtIdRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutReinstateReservationByExtIdRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutReinstateReservationByExtIdRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutReinstateReservationByExtIdRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



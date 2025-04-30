# ReservationRoomSelectionOverrideType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DirtyRoom** | Pointer to **bool** | Override the room selection even if the selected room has a \&quot;dirty\&quot; state. | [optional] 
**OutOfServiceRoom** | Pointer to **bool** | Override the room selection even if the selected room has an \&quot;out-of-service\&quot; state. | [optional] 
**SleepDiscrepantRoom** | Pointer to **bool** | Override the room selection even when HouseKeeping configured the room to still be occupied. | [optional] 
**OccupancyRestriction** | Pointer to **bool** | Override the room selection even when room occupancy is exceeded. | [optional] 
**RateRestriction** | Pointer to **bool** | Override the room selection even when there is rate restriction present for this room type. | [optional] 
**InventoryRestriction** | Pointer to **bool** | Override the room selection even when there is no inventory. | [optional] 
**RoomNumberLocked** | Pointer to **bool** | Override the room number locked flag in the database and use the value passed. | [optional] 
**HoldRoom** | Pointer to **bool** | Override the Hold Room flag in the database and use the value passed. | [optional] 
**RateChange** | Pointer to [**RateChangeInstructionType**](RateChangeInstructionType.md) |  | [optional] 
**OverrideExternalChecks** | Pointer to **bool** | Forcefully override update. For real-time CRS interfaces, this element is used as force selling indicator. | [optional] 
**DayUseReserved** | Pointer to **bool** | If the current reservation is a Day Use, then check on Reserved rooms can be overridden when assigning rooms. | [optional] 
**OverrideInstruction** | Pointer to [**OverrideInstructionType**](OverrideInstructionType.md) |  | [optional] 
**OverrideRotationRoom** | Pointer to **bool** | Override the rotation room with the selected room when assigning rooms. | [optional] 
**OverrideRoomOwnership** | Pointer to **bool** | Override the room ownership indicator in the reservation when assigning rooms. This is applicable when Room Rotation OPERA Control is active. | [optional] 
**RoomOwnershipType** | Pointer to [**ReservationRoomOwnershipType**](ReservationRoomOwnershipType.md) |  | [optional] 
**OverrideRoomFeatures** | Pointer to **bool** | This flag indicates true/false. When this is true, it will allow to override the room feature preference validation while assigning rooms. The Reservation Room Features OPERA Control will determine which room feature preferences will be validated. When Reservation Room Features is on, the validation will be against the Room Feature preferences attached to the reservation. If the parameter is off, the validation will be against the room feature preferences attached to the profile. This is applicable when the Room Feature Validation OPERA Control is on. | [optional] 
**SkipDiscrepantRoom** | Pointer to **bool** | This flag indicates true/false. When it is true, you will be allowed to override the room selection for a skip discrepancy. This flag is available when the Discrepant Rooms OPERA Control is active. | [optional] 

## Methods

### NewReservationRoomSelectionOverrideType

`func NewReservationRoomSelectionOverrideType() *ReservationRoomSelectionOverrideType`

NewReservationRoomSelectionOverrideType instantiates a new ReservationRoomSelectionOverrideType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReservationRoomSelectionOverrideTypeWithDefaults

`func NewReservationRoomSelectionOverrideTypeWithDefaults() *ReservationRoomSelectionOverrideType`

NewReservationRoomSelectionOverrideTypeWithDefaults instantiates a new ReservationRoomSelectionOverrideType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDirtyRoom

`func (o *ReservationRoomSelectionOverrideType) GetDirtyRoom() bool`

GetDirtyRoom returns the DirtyRoom field if non-nil, zero value otherwise.

### GetDirtyRoomOk

`func (o *ReservationRoomSelectionOverrideType) GetDirtyRoomOk() (*bool, bool)`

GetDirtyRoomOk returns a tuple with the DirtyRoom field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDirtyRoom

`func (o *ReservationRoomSelectionOverrideType) SetDirtyRoom(v bool)`

SetDirtyRoom sets DirtyRoom field to given value.

### HasDirtyRoom

`func (o *ReservationRoomSelectionOverrideType) HasDirtyRoom() bool`

HasDirtyRoom returns a boolean if a field has been set.

### GetOutOfServiceRoom

`func (o *ReservationRoomSelectionOverrideType) GetOutOfServiceRoom() bool`

GetOutOfServiceRoom returns the OutOfServiceRoom field if non-nil, zero value otherwise.

### GetOutOfServiceRoomOk

`func (o *ReservationRoomSelectionOverrideType) GetOutOfServiceRoomOk() (*bool, bool)`

GetOutOfServiceRoomOk returns a tuple with the OutOfServiceRoom field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOutOfServiceRoom

`func (o *ReservationRoomSelectionOverrideType) SetOutOfServiceRoom(v bool)`

SetOutOfServiceRoom sets OutOfServiceRoom field to given value.

### HasOutOfServiceRoom

`func (o *ReservationRoomSelectionOverrideType) HasOutOfServiceRoom() bool`

HasOutOfServiceRoom returns a boolean if a field has been set.

### GetSleepDiscrepantRoom

`func (o *ReservationRoomSelectionOverrideType) GetSleepDiscrepantRoom() bool`

GetSleepDiscrepantRoom returns the SleepDiscrepantRoom field if non-nil, zero value otherwise.

### GetSleepDiscrepantRoomOk

`func (o *ReservationRoomSelectionOverrideType) GetSleepDiscrepantRoomOk() (*bool, bool)`

GetSleepDiscrepantRoomOk returns a tuple with the SleepDiscrepantRoom field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSleepDiscrepantRoom

`func (o *ReservationRoomSelectionOverrideType) SetSleepDiscrepantRoom(v bool)`

SetSleepDiscrepantRoom sets SleepDiscrepantRoom field to given value.

### HasSleepDiscrepantRoom

`func (o *ReservationRoomSelectionOverrideType) HasSleepDiscrepantRoom() bool`

HasSleepDiscrepantRoom returns a boolean if a field has been set.

### GetOccupancyRestriction

`func (o *ReservationRoomSelectionOverrideType) GetOccupancyRestriction() bool`

GetOccupancyRestriction returns the OccupancyRestriction field if non-nil, zero value otherwise.

### GetOccupancyRestrictionOk

`func (o *ReservationRoomSelectionOverrideType) GetOccupancyRestrictionOk() (*bool, bool)`

GetOccupancyRestrictionOk returns a tuple with the OccupancyRestriction field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOccupancyRestriction

`func (o *ReservationRoomSelectionOverrideType) SetOccupancyRestriction(v bool)`

SetOccupancyRestriction sets OccupancyRestriction field to given value.

### HasOccupancyRestriction

`func (o *ReservationRoomSelectionOverrideType) HasOccupancyRestriction() bool`

HasOccupancyRestriction returns a boolean if a field has been set.

### GetRateRestriction

`func (o *ReservationRoomSelectionOverrideType) GetRateRestriction() bool`

GetRateRestriction returns the RateRestriction field if non-nil, zero value otherwise.

### GetRateRestrictionOk

`func (o *ReservationRoomSelectionOverrideType) GetRateRestrictionOk() (*bool, bool)`

GetRateRestrictionOk returns a tuple with the RateRestriction field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateRestriction

`func (o *ReservationRoomSelectionOverrideType) SetRateRestriction(v bool)`

SetRateRestriction sets RateRestriction field to given value.

### HasRateRestriction

`func (o *ReservationRoomSelectionOverrideType) HasRateRestriction() bool`

HasRateRestriction returns a boolean if a field has been set.

### GetInventoryRestriction

`func (o *ReservationRoomSelectionOverrideType) GetInventoryRestriction() bool`

GetInventoryRestriction returns the InventoryRestriction field if non-nil, zero value otherwise.

### GetInventoryRestrictionOk

`func (o *ReservationRoomSelectionOverrideType) GetInventoryRestrictionOk() (*bool, bool)`

GetInventoryRestrictionOk returns a tuple with the InventoryRestriction field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInventoryRestriction

`func (o *ReservationRoomSelectionOverrideType) SetInventoryRestriction(v bool)`

SetInventoryRestriction sets InventoryRestriction field to given value.

### HasInventoryRestriction

`func (o *ReservationRoomSelectionOverrideType) HasInventoryRestriction() bool`

HasInventoryRestriction returns a boolean if a field has been set.

### GetRoomNumberLocked

`func (o *ReservationRoomSelectionOverrideType) GetRoomNumberLocked() bool`

GetRoomNumberLocked returns the RoomNumberLocked field if non-nil, zero value otherwise.

### GetRoomNumberLockedOk

`func (o *ReservationRoomSelectionOverrideType) GetRoomNumberLockedOk() (*bool, bool)`

GetRoomNumberLockedOk returns a tuple with the RoomNumberLocked field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomNumberLocked

`func (o *ReservationRoomSelectionOverrideType) SetRoomNumberLocked(v bool)`

SetRoomNumberLocked sets RoomNumberLocked field to given value.

### HasRoomNumberLocked

`func (o *ReservationRoomSelectionOverrideType) HasRoomNumberLocked() bool`

HasRoomNumberLocked returns a boolean if a field has been set.

### GetHoldRoom

`func (o *ReservationRoomSelectionOverrideType) GetHoldRoom() bool`

GetHoldRoom returns the HoldRoom field if non-nil, zero value otherwise.

### GetHoldRoomOk

`func (o *ReservationRoomSelectionOverrideType) GetHoldRoomOk() (*bool, bool)`

GetHoldRoomOk returns a tuple with the HoldRoom field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHoldRoom

`func (o *ReservationRoomSelectionOverrideType) SetHoldRoom(v bool)`

SetHoldRoom sets HoldRoom field to given value.

### HasHoldRoom

`func (o *ReservationRoomSelectionOverrideType) HasHoldRoom() bool`

HasHoldRoom returns a boolean if a field has been set.

### GetRateChange

`func (o *ReservationRoomSelectionOverrideType) GetRateChange() RateChangeInstructionType`

GetRateChange returns the RateChange field if non-nil, zero value otherwise.

### GetRateChangeOk

`func (o *ReservationRoomSelectionOverrideType) GetRateChangeOk() (*RateChangeInstructionType, bool)`

GetRateChangeOk returns a tuple with the RateChange field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateChange

`func (o *ReservationRoomSelectionOverrideType) SetRateChange(v RateChangeInstructionType)`

SetRateChange sets RateChange field to given value.

### HasRateChange

`func (o *ReservationRoomSelectionOverrideType) HasRateChange() bool`

HasRateChange returns a boolean if a field has been set.

### GetOverrideExternalChecks

`func (o *ReservationRoomSelectionOverrideType) GetOverrideExternalChecks() bool`

GetOverrideExternalChecks returns the OverrideExternalChecks field if non-nil, zero value otherwise.

### GetOverrideExternalChecksOk

`func (o *ReservationRoomSelectionOverrideType) GetOverrideExternalChecksOk() (*bool, bool)`

GetOverrideExternalChecksOk returns a tuple with the OverrideExternalChecks field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverrideExternalChecks

`func (o *ReservationRoomSelectionOverrideType) SetOverrideExternalChecks(v bool)`

SetOverrideExternalChecks sets OverrideExternalChecks field to given value.

### HasOverrideExternalChecks

`func (o *ReservationRoomSelectionOverrideType) HasOverrideExternalChecks() bool`

HasOverrideExternalChecks returns a boolean if a field has been set.

### GetDayUseReserved

`func (o *ReservationRoomSelectionOverrideType) GetDayUseReserved() bool`

GetDayUseReserved returns the DayUseReserved field if non-nil, zero value otherwise.

### GetDayUseReservedOk

`func (o *ReservationRoomSelectionOverrideType) GetDayUseReservedOk() (*bool, bool)`

GetDayUseReservedOk returns a tuple with the DayUseReserved field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDayUseReserved

`func (o *ReservationRoomSelectionOverrideType) SetDayUseReserved(v bool)`

SetDayUseReserved sets DayUseReserved field to given value.

### HasDayUseReserved

`func (o *ReservationRoomSelectionOverrideType) HasDayUseReserved() bool`

HasDayUseReserved returns a boolean if a field has been set.

### GetOverrideInstruction

`func (o *ReservationRoomSelectionOverrideType) GetOverrideInstruction() OverrideInstructionType`

GetOverrideInstruction returns the OverrideInstruction field if non-nil, zero value otherwise.

### GetOverrideInstructionOk

`func (o *ReservationRoomSelectionOverrideType) GetOverrideInstructionOk() (*OverrideInstructionType, bool)`

GetOverrideInstructionOk returns a tuple with the OverrideInstruction field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverrideInstruction

`func (o *ReservationRoomSelectionOverrideType) SetOverrideInstruction(v OverrideInstructionType)`

SetOverrideInstruction sets OverrideInstruction field to given value.

### HasOverrideInstruction

`func (o *ReservationRoomSelectionOverrideType) HasOverrideInstruction() bool`

HasOverrideInstruction returns a boolean if a field has been set.

### GetOverrideRotationRoom

`func (o *ReservationRoomSelectionOverrideType) GetOverrideRotationRoom() bool`

GetOverrideRotationRoom returns the OverrideRotationRoom field if non-nil, zero value otherwise.

### GetOverrideRotationRoomOk

`func (o *ReservationRoomSelectionOverrideType) GetOverrideRotationRoomOk() (*bool, bool)`

GetOverrideRotationRoomOk returns a tuple with the OverrideRotationRoom field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverrideRotationRoom

`func (o *ReservationRoomSelectionOverrideType) SetOverrideRotationRoom(v bool)`

SetOverrideRotationRoom sets OverrideRotationRoom field to given value.

### HasOverrideRotationRoom

`func (o *ReservationRoomSelectionOverrideType) HasOverrideRotationRoom() bool`

HasOverrideRotationRoom returns a boolean if a field has been set.

### GetOverrideRoomOwnership

`func (o *ReservationRoomSelectionOverrideType) GetOverrideRoomOwnership() bool`

GetOverrideRoomOwnership returns the OverrideRoomOwnership field if non-nil, zero value otherwise.

### GetOverrideRoomOwnershipOk

`func (o *ReservationRoomSelectionOverrideType) GetOverrideRoomOwnershipOk() (*bool, bool)`

GetOverrideRoomOwnershipOk returns a tuple with the OverrideRoomOwnership field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverrideRoomOwnership

`func (o *ReservationRoomSelectionOverrideType) SetOverrideRoomOwnership(v bool)`

SetOverrideRoomOwnership sets OverrideRoomOwnership field to given value.

### HasOverrideRoomOwnership

`func (o *ReservationRoomSelectionOverrideType) HasOverrideRoomOwnership() bool`

HasOverrideRoomOwnership returns a boolean if a field has been set.

### GetRoomOwnershipType

`func (o *ReservationRoomSelectionOverrideType) GetRoomOwnershipType() ReservationRoomOwnershipType`

GetRoomOwnershipType returns the RoomOwnershipType field if non-nil, zero value otherwise.

### GetRoomOwnershipTypeOk

`func (o *ReservationRoomSelectionOverrideType) GetRoomOwnershipTypeOk() (*ReservationRoomOwnershipType, bool)`

GetRoomOwnershipTypeOk returns a tuple with the RoomOwnershipType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomOwnershipType

`func (o *ReservationRoomSelectionOverrideType) SetRoomOwnershipType(v ReservationRoomOwnershipType)`

SetRoomOwnershipType sets RoomOwnershipType field to given value.

### HasRoomOwnershipType

`func (o *ReservationRoomSelectionOverrideType) HasRoomOwnershipType() bool`

HasRoomOwnershipType returns a boolean if a field has been set.

### GetOverrideRoomFeatures

`func (o *ReservationRoomSelectionOverrideType) GetOverrideRoomFeatures() bool`

GetOverrideRoomFeatures returns the OverrideRoomFeatures field if non-nil, zero value otherwise.

### GetOverrideRoomFeaturesOk

`func (o *ReservationRoomSelectionOverrideType) GetOverrideRoomFeaturesOk() (*bool, bool)`

GetOverrideRoomFeaturesOk returns a tuple with the OverrideRoomFeatures field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverrideRoomFeatures

`func (o *ReservationRoomSelectionOverrideType) SetOverrideRoomFeatures(v bool)`

SetOverrideRoomFeatures sets OverrideRoomFeatures field to given value.

### HasOverrideRoomFeatures

`func (o *ReservationRoomSelectionOverrideType) HasOverrideRoomFeatures() bool`

HasOverrideRoomFeatures returns a boolean if a field has been set.

### GetSkipDiscrepantRoom

`func (o *ReservationRoomSelectionOverrideType) GetSkipDiscrepantRoom() bool`

GetSkipDiscrepantRoom returns the SkipDiscrepantRoom field if non-nil, zero value otherwise.

### GetSkipDiscrepantRoomOk

`func (o *ReservationRoomSelectionOverrideType) GetSkipDiscrepantRoomOk() (*bool, bool)`

GetSkipDiscrepantRoomOk returns a tuple with the SkipDiscrepantRoom field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSkipDiscrepantRoom

`func (o *ReservationRoomSelectionOverrideType) SetSkipDiscrepantRoom(v bool)`

SetSkipDiscrepantRoom sets SkipDiscrepantRoom field to given value.

### HasSkipDiscrepantRoom

`func (o *ReservationRoomSelectionOverrideType) HasSkipDiscrepantRoom() bool`

HasSkipDiscrepantRoom returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



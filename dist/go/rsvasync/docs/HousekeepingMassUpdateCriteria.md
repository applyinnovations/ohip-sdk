# HousekeepingMassUpdateCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ReservationIds** | Pointer to [**[]UniqueIDType**](UniqueIDType.md) | Unique ID of reservations to be updated. | [optional] 
**HousekeepingInstructions** | Pointer to [**MassUpdateHousekeepingInstructions**](MassUpdateHousekeepingInstructions.md) |  | [optional] 
**HousekeepingSchedule** | Pointer to [**MassUpdateHousekeepingSchedule**](MassUpdateHousekeepingSchedule.md) |  | [optional] 

## Methods

### NewHousekeepingMassUpdateCriteria

`func NewHousekeepingMassUpdateCriteria() *HousekeepingMassUpdateCriteria`

NewHousekeepingMassUpdateCriteria instantiates a new HousekeepingMassUpdateCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHousekeepingMassUpdateCriteriaWithDefaults

`func NewHousekeepingMassUpdateCriteriaWithDefaults() *HousekeepingMassUpdateCriteria`

NewHousekeepingMassUpdateCriteriaWithDefaults instantiates a new HousekeepingMassUpdateCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetReservationIds

`func (o *HousekeepingMassUpdateCriteria) GetReservationIds() []UniqueIDType`

GetReservationIds returns the ReservationIds field if non-nil, zero value otherwise.

### GetReservationIdsOk

`func (o *HousekeepingMassUpdateCriteria) GetReservationIdsOk() (*[]UniqueIDType, bool)`

GetReservationIdsOk returns a tuple with the ReservationIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationIds

`func (o *HousekeepingMassUpdateCriteria) SetReservationIds(v []UniqueIDType)`

SetReservationIds sets ReservationIds field to given value.

### HasReservationIds

`func (o *HousekeepingMassUpdateCriteria) HasReservationIds() bool`

HasReservationIds returns a boolean if a field has been set.

### GetHousekeepingInstructions

`func (o *HousekeepingMassUpdateCriteria) GetHousekeepingInstructions() MassUpdateHousekeepingInstructions`

GetHousekeepingInstructions returns the HousekeepingInstructions field if non-nil, zero value otherwise.

### GetHousekeepingInstructionsOk

`func (o *HousekeepingMassUpdateCriteria) GetHousekeepingInstructionsOk() (*MassUpdateHousekeepingInstructions, bool)`

GetHousekeepingInstructionsOk returns a tuple with the HousekeepingInstructions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHousekeepingInstructions

`func (o *HousekeepingMassUpdateCriteria) SetHousekeepingInstructions(v MassUpdateHousekeepingInstructions)`

SetHousekeepingInstructions sets HousekeepingInstructions field to given value.

### HasHousekeepingInstructions

`func (o *HousekeepingMassUpdateCriteria) HasHousekeepingInstructions() bool`

HasHousekeepingInstructions returns a boolean if a field has been set.

### GetHousekeepingSchedule

`func (o *HousekeepingMassUpdateCriteria) GetHousekeepingSchedule() MassUpdateHousekeepingSchedule`

GetHousekeepingSchedule returns the HousekeepingSchedule field if non-nil, zero value otherwise.

### GetHousekeepingScheduleOk

`func (o *HousekeepingMassUpdateCriteria) GetHousekeepingScheduleOk() (*MassUpdateHousekeepingSchedule, bool)`

GetHousekeepingScheduleOk returns a tuple with the HousekeepingSchedule field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHousekeepingSchedule

`func (o *HousekeepingMassUpdateCriteria) SetHousekeepingSchedule(v MassUpdateHousekeepingSchedule)`

SetHousekeepingSchedule sets HousekeepingSchedule field to given value.

### HasHousekeepingSchedule

`func (o *HousekeepingMassUpdateCriteria) HasHousekeepingSchedule() bool`

HasHousekeepingSchedule returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



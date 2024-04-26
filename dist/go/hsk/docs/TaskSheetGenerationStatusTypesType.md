# TaskSheetGenerationStatusTypesType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FrontOfficeRoomStatusList** | Pointer to [**[]FrontOfficeRoomStatusType**](FrontOfficeRoomStatusType.md) | Front office statuses to be used in requests for generating task sheets. Example: Vacant or Occupied. | [optional] 
**HousekeepingRoomStatusList** | Pointer to [**[]HousekeepingRoomStatusType**](HousekeepingRoomStatusType.md) | Housekeeping room status(example Dirty, Clean etc.) which will be used in for the generation of task sheets. This is required element for the generation of task sheets. Rooms of these statuses will be used and assigned to the task sheets. | [optional] 
**ReservationStatusList** | Pointer to [**[]HousekeepingRoomReservationStatusType**](HousekeepingRoomReservationStatusType.md) | List of Reservation Statuses. Rooms which have these reservation statuses will be included in the task sheets. Example: If Arrival rooms are required, then Arrival will be one of the statuses defined in this element. | [optional] 
**RoomAssignmentStatusList** | Pointer to [**[]RoomAssignmentStatusType**](RoomAssignmentStatusType.md) | Room assignment status to be used in requests for fetching housekeeping rooms. | [optional] 
**TurndownStatusList** | Pointer to [**[]TurndownStatusType**](TurndownStatusType.md) | List of Turndown Statuses. Rooms which have these statuses will be included in the task sheets. | [optional] 

## Methods

### NewTaskSheetGenerationStatusTypesType

`func NewTaskSheetGenerationStatusTypesType() *TaskSheetGenerationStatusTypesType`

NewTaskSheetGenerationStatusTypesType instantiates a new TaskSheetGenerationStatusTypesType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTaskSheetGenerationStatusTypesTypeWithDefaults

`func NewTaskSheetGenerationStatusTypesTypeWithDefaults() *TaskSheetGenerationStatusTypesType`

NewTaskSheetGenerationStatusTypesTypeWithDefaults instantiates a new TaskSheetGenerationStatusTypesType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFrontOfficeRoomStatusList

`func (o *TaskSheetGenerationStatusTypesType) GetFrontOfficeRoomStatusList() []FrontOfficeRoomStatusType`

GetFrontOfficeRoomStatusList returns the FrontOfficeRoomStatusList field if non-nil, zero value otherwise.

### GetFrontOfficeRoomStatusListOk

`func (o *TaskSheetGenerationStatusTypesType) GetFrontOfficeRoomStatusListOk() (*[]FrontOfficeRoomStatusType, bool)`

GetFrontOfficeRoomStatusListOk returns a tuple with the FrontOfficeRoomStatusList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFrontOfficeRoomStatusList

`func (o *TaskSheetGenerationStatusTypesType) SetFrontOfficeRoomStatusList(v []FrontOfficeRoomStatusType)`

SetFrontOfficeRoomStatusList sets FrontOfficeRoomStatusList field to given value.

### HasFrontOfficeRoomStatusList

`func (o *TaskSheetGenerationStatusTypesType) HasFrontOfficeRoomStatusList() bool`

HasFrontOfficeRoomStatusList returns a boolean if a field has been set.

### GetHousekeepingRoomStatusList

`func (o *TaskSheetGenerationStatusTypesType) GetHousekeepingRoomStatusList() []HousekeepingRoomStatusType`

GetHousekeepingRoomStatusList returns the HousekeepingRoomStatusList field if non-nil, zero value otherwise.

### GetHousekeepingRoomStatusListOk

`func (o *TaskSheetGenerationStatusTypesType) GetHousekeepingRoomStatusListOk() (*[]HousekeepingRoomStatusType, bool)`

GetHousekeepingRoomStatusListOk returns a tuple with the HousekeepingRoomStatusList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHousekeepingRoomStatusList

`func (o *TaskSheetGenerationStatusTypesType) SetHousekeepingRoomStatusList(v []HousekeepingRoomStatusType)`

SetHousekeepingRoomStatusList sets HousekeepingRoomStatusList field to given value.

### HasHousekeepingRoomStatusList

`func (o *TaskSheetGenerationStatusTypesType) HasHousekeepingRoomStatusList() bool`

HasHousekeepingRoomStatusList returns a boolean if a field has been set.

### GetReservationStatusList

`func (o *TaskSheetGenerationStatusTypesType) GetReservationStatusList() []HousekeepingRoomReservationStatusType`

GetReservationStatusList returns the ReservationStatusList field if non-nil, zero value otherwise.

### GetReservationStatusListOk

`func (o *TaskSheetGenerationStatusTypesType) GetReservationStatusListOk() (*[]HousekeepingRoomReservationStatusType, bool)`

GetReservationStatusListOk returns a tuple with the ReservationStatusList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationStatusList

`func (o *TaskSheetGenerationStatusTypesType) SetReservationStatusList(v []HousekeepingRoomReservationStatusType)`

SetReservationStatusList sets ReservationStatusList field to given value.

### HasReservationStatusList

`func (o *TaskSheetGenerationStatusTypesType) HasReservationStatusList() bool`

HasReservationStatusList returns a boolean if a field has been set.

### GetRoomAssignmentStatusList

`func (o *TaskSheetGenerationStatusTypesType) GetRoomAssignmentStatusList() []RoomAssignmentStatusType`

GetRoomAssignmentStatusList returns the RoomAssignmentStatusList field if non-nil, zero value otherwise.

### GetRoomAssignmentStatusListOk

`func (o *TaskSheetGenerationStatusTypesType) GetRoomAssignmentStatusListOk() (*[]RoomAssignmentStatusType, bool)`

GetRoomAssignmentStatusListOk returns a tuple with the RoomAssignmentStatusList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomAssignmentStatusList

`func (o *TaskSheetGenerationStatusTypesType) SetRoomAssignmentStatusList(v []RoomAssignmentStatusType)`

SetRoomAssignmentStatusList sets RoomAssignmentStatusList field to given value.

### HasRoomAssignmentStatusList

`func (o *TaskSheetGenerationStatusTypesType) HasRoomAssignmentStatusList() bool`

HasRoomAssignmentStatusList returns a boolean if a field has been set.

### GetTurndownStatusList

`func (o *TaskSheetGenerationStatusTypesType) GetTurndownStatusList() []TurndownStatusType`

GetTurndownStatusList returns the TurndownStatusList field if non-nil, zero value otherwise.

### GetTurndownStatusListOk

`func (o *TaskSheetGenerationStatusTypesType) GetTurndownStatusListOk() (*[]TurndownStatusType, bool)`

GetTurndownStatusListOk returns a tuple with the TurndownStatusList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTurndownStatusList

`func (o *TaskSheetGenerationStatusTypesType) SetTurndownStatusList(v []TurndownStatusType)`

SetTurndownStatusList sets TurndownStatusList field to given value.

### HasTurndownStatusList

`func (o *TaskSheetGenerationStatusTypesType) HasTurndownStatusList() bool`

HasTurndownStatusList returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



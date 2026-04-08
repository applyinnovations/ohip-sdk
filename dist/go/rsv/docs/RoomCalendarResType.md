# RoomCalendarResType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ReservationIdList** | Pointer to [**[]UniqueIDType**](UniqueIDType.md) | Unique Id that references an object uniquely in the system. | [optional] 
**DateTimeSpan** | Pointer to [**DateTimeSpanType**](DateTimeSpanType.md) |  | [optional] 
**GivenName** | Pointer to **string** |  | [optional] 
**Surname** | Pointer to **string** |  | [optional] 
**Title** | Pointer to **string** |  | [optional] 
**VipStatus** | Pointer to [**VIPStatusType**](VIPStatusType.md) |  | [optional] 
**Guarantee** | Pointer to [**ResGuaranteeType**](ResGuaranteeType.md) |  | [optional] 
**NoOfRooms** | Pointer to **int32** |  | [optional] 
**RoomScheduleDisplay** | Pointer to [**RoomCalendarDisplayType**](RoomCalendarDisplayType.md) |  | [optional] 
**RoomNumberLocked** | Pointer to **bool** | Verify if the room number is locked for the reservation. When true the room number cannot be changed. | [optional] 
**AdvanceCheckIn** | Pointer to [**AdvanceCheckInType**](AdvanceCheckInType.md) |  | [optional] 
**RoomMoveHistory** | Pointer to [**[]RoomMoveDetailType**](RoomMoveDetailType.md) | List of room move details | [optional] 
**ScheduledRoomMove** | Pointer to [**ScheduledRoomMoveDetailType**](ScheduledRoomMoveDetailType.md) |  | [optional] 
**ReservationStatus** | Pointer to [**PMSResStatusType**](PMSResStatusType.md) |  | [optional] 
**HasLinkedReservations** | Pointer to [**LinkedReservationType**](LinkedReservationType.md) |  | [optional] 
**BackToBackReservation** | Pointer to **bool** | This attribute indicates if the linked reservation is marked as Back to Back or not. | [optional] 
**AssignedByAI** | Pointer to **bool** | Indicates whether the room was assigned by AI Room Assignment. | [optional] 
**UpgradedByAI** | Pointer to **bool** | Indicates whether the room assigned by AI Room Assignment was an upgrade. | [optional] 
**RoomOwnershipType** | Pointer to [**ReservationRoomOwnershipType**](ReservationRoomOwnershipType.md) |  | [optional] 

## Methods

### NewRoomCalendarResType

`func NewRoomCalendarResType() *RoomCalendarResType`

NewRoomCalendarResType instantiates a new RoomCalendarResType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoomCalendarResTypeWithDefaults

`func NewRoomCalendarResTypeWithDefaults() *RoomCalendarResType`

NewRoomCalendarResTypeWithDefaults instantiates a new RoomCalendarResType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetReservationIdList

`func (o *RoomCalendarResType) GetReservationIdList() []UniqueIDType`

GetReservationIdList returns the ReservationIdList field if non-nil, zero value otherwise.

### GetReservationIdListOk

`func (o *RoomCalendarResType) GetReservationIdListOk() (*[]UniqueIDType, bool)`

GetReservationIdListOk returns a tuple with the ReservationIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationIdList

`func (o *RoomCalendarResType) SetReservationIdList(v []UniqueIDType)`

SetReservationIdList sets ReservationIdList field to given value.

### HasReservationIdList

`func (o *RoomCalendarResType) HasReservationIdList() bool`

HasReservationIdList returns a boolean if a field has been set.

### GetDateTimeSpan

`func (o *RoomCalendarResType) GetDateTimeSpan() DateTimeSpanType`

GetDateTimeSpan returns the DateTimeSpan field if non-nil, zero value otherwise.

### GetDateTimeSpanOk

`func (o *RoomCalendarResType) GetDateTimeSpanOk() (*DateTimeSpanType, bool)`

GetDateTimeSpanOk returns a tuple with the DateTimeSpan field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDateTimeSpan

`func (o *RoomCalendarResType) SetDateTimeSpan(v DateTimeSpanType)`

SetDateTimeSpan sets DateTimeSpan field to given value.

### HasDateTimeSpan

`func (o *RoomCalendarResType) HasDateTimeSpan() bool`

HasDateTimeSpan returns a boolean if a field has been set.

### GetGivenName

`func (o *RoomCalendarResType) GetGivenName() string`

GetGivenName returns the GivenName field if non-nil, zero value otherwise.

### GetGivenNameOk

`func (o *RoomCalendarResType) GetGivenNameOk() (*string, bool)`

GetGivenNameOk returns a tuple with the GivenName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGivenName

`func (o *RoomCalendarResType) SetGivenName(v string)`

SetGivenName sets GivenName field to given value.

### HasGivenName

`func (o *RoomCalendarResType) HasGivenName() bool`

HasGivenName returns a boolean if a field has been set.

### GetSurname

`func (o *RoomCalendarResType) GetSurname() string`

GetSurname returns the Surname field if non-nil, zero value otherwise.

### GetSurnameOk

`func (o *RoomCalendarResType) GetSurnameOk() (*string, bool)`

GetSurnameOk returns a tuple with the Surname field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSurname

`func (o *RoomCalendarResType) SetSurname(v string)`

SetSurname sets Surname field to given value.

### HasSurname

`func (o *RoomCalendarResType) HasSurname() bool`

HasSurname returns a boolean if a field has been set.

### GetTitle

`func (o *RoomCalendarResType) GetTitle() string`

GetTitle returns the Title field if non-nil, zero value otherwise.

### GetTitleOk

`func (o *RoomCalendarResType) GetTitleOk() (*string, bool)`

GetTitleOk returns a tuple with the Title field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTitle

`func (o *RoomCalendarResType) SetTitle(v string)`

SetTitle sets Title field to given value.

### HasTitle

`func (o *RoomCalendarResType) HasTitle() bool`

HasTitle returns a boolean if a field has been set.

### GetVipStatus

`func (o *RoomCalendarResType) GetVipStatus() VIPStatusType`

GetVipStatus returns the VipStatus field if non-nil, zero value otherwise.

### GetVipStatusOk

`func (o *RoomCalendarResType) GetVipStatusOk() (*VIPStatusType, bool)`

GetVipStatusOk returns a tuple with the VipStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVipStatus

`func (o *RoomCalendarResType) SetVipStatus(v VIPStatusType)`

SetVipStatus sets VipStatus field to given value.

### HasVipStatus

`func (o *RoomCalendarResType) HasVipStatus() bool`

HasVipStatus returns a boolean if a field has been set.

### GetGuarantee

`func (o *RoomCalendarResType) GetGuarantee() ResGuaranteeType`

GetGuarantee returns the Guarantee field if non-nil, zero value otherwise.

### GetGuaranteeOk

`func (o *RoomCalendarResType) GetGuaranteeOk() (*ResGuaranteeType, bool)`

GetGuaranteeOk returns a tuple with the Guarantee field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuarantee

`func (o *RoomCalendarResType) SetGuarantee(v ResGuaranteeType)`

SetGuarantee sets Guarantee field to given value.

### HasGuarantee

`func (o *RoomCalendarResType) HasGuarantee() bool`

HasGuarantee returns a boolean if a field has been set.

### GetNoOfRooms

`func (o *RoomCalendarResType) GetNoOfRooms() int32`

GetNoOfRooms returns the NoOfRooms field if non-nil, zero value otherwise.

### GetNoOfRoomsOk

`func (o *RoomCalendarResType) GetNoOfRoomsOk() (*int32, bool)`

GetNoOfRoomsOk returns a tuple with the NoOfRooms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNoOfRooms

`func (o *RoomCalendarResType) SetNoOfRooms(v int32)`

SetNoOfRooms sets NoOfRooms field to given value.

### HasNoOfRooms

`func (o *RoomCalendarResType) HasNoOfRooms() bool`

HasNoOfRooms returns a boolean if a field has been set.

### GetRoomScheduleDisplay

`func (o *RoomCalendarResType) GetRoomScheduleDisplay() RoomCalendarDisplayType`

GetRoomScheduleDisplay returns the RoomScheduleDisplay field if non-nil, zero value otherwise.

### GetRoomScheduleDisplayOk

`func (o *RoomCalendarResType) GetRoomScheduleDisplayOk() (*RoomCalendarDisplayType, bool)`

GetRoomScheduleDisplayOk returns a tuple with the RoomScheduleDisplay field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomScheduleDisplay

`func (o *RoomCalendarResType) SetRoomScheduleDisplay(v RoomCalendarDisplayType)`

SetRoomScheduleDisplay sets RoomScheduleDisplay field to given value.

### HasRoomScheduleDisplay

`func (o *RoomCalendarResType) HasRoomScheduleDisplay() bool`

HasRoomScheduleDisplay returns a boolean if a field has been set.

### GetRoomNumberLocked

`func (o *RoomCalendarResType) GetRoomNumberLocked() bool`

GetRoomNumberLocked returns the RoomNumberLocked field if non-nil, zero value otherwise.

### GetRoomNumberLockedOk

`func (o *RoomCalendarResType) GetRoomNumberLockedOk() (*bool, bool)`

GetRoomNumberLockedOk returns a tuple with the RoomNumberLocked field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomNumberLocked

`func (o *RoomCalendarResType) SetRoomNumberLocked(v bool)`

SetRoomNumberLocked sets RoomNumberLocked field to given value.

### HasRoomNumberLocked

`func (o *RoomCalendarResType) HasRoomNumberLocked() bool`

HasRoomNumberLocked returns a boolean if a field has been set.

### GetAdvanceCheckIn

`func (o *RoomCalendarResType) GetAdvanceCheckIn() AdvanceCheckInType`

GetAdvanceCheckIn returns the AdvanceCheckIn field if non-nil, zero value otherwise.

### GetAdvanceCheckInOk

`func (o *RoomCalendarResType) GetAdvanceCheckInOk() (*AdvanceCheckInType, bool)`

GetAdvanceCheckInOk returns a tuple with the AdvanceCheckIn field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdvanceCheckIn

`func (o *RoomCalendarResType) SetAdvanceCheckIn(v AdvanceCheckInType)`

SetAdvanceCheckIn sets AdvanceCheckIn field to given value.

### HasAdvanceCheckIn

`func (o *RoomCalendarResType) HasAdvanceCheckIn() bool`

HasAdvanceCheckIn returns a boolean if a field has been set.

### GetRoomMoveHistory

`func (o *RoomCalendarResType) GetRoomMoveHistory() []RoomMoveDetailType`

GetRoomMoveHistory returns the RoomMoveHistory field if non-nil, zero value otherwise.

### GetRoomMoveHistoryOk

`func (o *RoomCalendarResType) GetRoomMoveHistoryOk() (*[]RoomMoveDetailType, bool)`

GetRoomMoveHistoryOk returns a tuple with the RoomMoveHistory field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomMoveHistory

`func (o *RoomCalendarResType) SetRoomMoveHistory(v []RoomMoveDetailType)`

SetRoomMoveHistory sets RoomMoveHistory field to given value.

### HasRoomMoveHistory

`func (o *RoomCalendarResType) HasRoomMoveHistory() bool`

HasRoomMoveHistory returns a boolean if a field has been set.

### GetScheduledRoomMove

`func (o *RoomCalendarResType) GetScheduledRoomMove() ScheduledRoomMoveDetailType`

GetScheduledRoomMove returns the ScheduledRoomMove field if non-nil, zero value otherwise.

### GetScheduledRoomMoveOk

`func (o *RoomCalendarResType) GetScheduledRoomMoveOk() (*ScheduledRoomMoveDetailType, bool)`

GetScheduledRoomMoveOk returns a tuple with the ScheduledRoomMove field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScheduledRoomMove

`func (o *RoomCalendarResType) SetScheduledRoomMove(v ScheduledRoomMoveDetailType)`

SetScheduledRoomMove sets ScheduledRoomMove field to given value.

### HasScheduledRoomMove

`func (o *RoomCalendarResType) HasScheduledRoomMove() bool`

HasScheduledRoomMove returns a boolean if a field has been set.

### GetReservationStatus

`func (o *RoomCalendarResType) GetReservationStatus() PMSResStatusType`

GetReservationStatus returns the ReservationStatus field if non-nil, zero value otherwise.

### GetReservationStatusOk

`func (o *RoomCalendarResType) GetReservationStatusOk() (*PMSResStatusType, bool)`

GetReservationStatusOk returns a tuple with the ReservationStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationStatus

`func (o *RoomCalendarResType) SetReservationStatus(v PMSResStatusType)`

SetReservationStatus sets ReservationStatus field to given value.

### HasReservationStatus

`func (o *RoomCalendarResType) HasReservationStatus() bool`

HasReservationStatus returns a boolean if a field has been set.

### GetHasLinkedReservations

`func (o *RoomCalendarResType) GetHasLinkedReservations() LinkedReservationType`

GetHasLinkedReservations returns the HasLinkedReservations field if non-nil, zero value otherwise.

### GetHasLinkedReservationsOk

`func (o *RoomCalendarResType) GetHasLinkedReservationsOk() (*LinkedReservationType, bool)`

GetHasLinkedReservationsOk returns a tuple with the HasLinkedReservations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasLinkedReservations

`func (o *RoomCalendarResType) SetHasLinkedReservations(v LinkedReservationType)`

SetHasLinkedReservations sets HasLinkedReservations field to given value.

### HasHasLinkedReservations

`func (o *RoomCalendarResType) HasHasLinkedReservations() bool`

HasHasLinkedReservations returns a boolean if a field has been set.

### GetBackToBackReservation

`func (o *RoomCalendarResType) GetBackToBackReservation() bool`

GetBackToBackReservation returns the BackToBackReservation field if non-nil, zero value otherwise.

### GetBackToBackReservationOk

`func (o *RoomCalendarResType) GetBackToBackReservationOk() (*bool, bool)`

GetBackToBackReservationOk returns a tuple with the BackToBackReservation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBackToBackReservation

`func (o *RoomCalendarResType) SetBackToBackReservation(v bool)`

SetBackToBackReservation sets BackToBackReservation field to given value.

### HasBackToBackReservation

`func (o *RoomCalendarResType) HasBackToBackReservation() bool`

HasBackToBackReservation returns a boolean if a field has been set.

### GetAssignedByAI

`func (o *RoomCalendarResType) GetAssignedByAI() bool`

GetAssignedByAI returns the AssignedByAI field if non-nil, zero value otherwise.

### GetAssignedByAIOk

`func (o *RoomCalendarResType) GetAssignedByAIOk() (*bool, bool)`

GetAssignedByAIOk returns a tuple with the AssignedByAI field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAssignedByAI

`func (o *RoomCalendarResType) SetAssignedByAI(v bool)`

SetAssignedByAI sets AssignedByAI field to given value.

### HasAssignedByAI

`func (o *RoomCalendarResType) HasAssignedByAI() bool`

HasAssignedByAI returns a boolean if a field has been set.

### GetUpgradedByAI

`func (o *RoomCalendarResType) GetUpgradedByAI() bool`

GetUpgradedByAI returns the UpgradedByAI field if non-nil, zero value otherwise.

### GetUpgradedByAIOk

`func (o *RoomCalendarResType) GetUpgradedByAIOk() (*bool, bool)`

GetUpgradedByAIOk returns a tuple with the UpgradedByAI field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpgradedByAI

`func (o *RoomCalendarResType) SetUpgradedByAI(v bool)`

SetUpgradedByAI sets UpgradedByAI field to given value.

### HasUpgradedByAI

`func (o *RoomCalendarResType) HasUpgradedByAI() bool`

HasUpgradedByAI returns a boolean if a field has been set.

### GetRoomOwnershipType

`func (o *RoomCalendarResType) GetRoomOwnershipType() ReservationRoomOwnershipType`

GetRoomOwnershipType returns the RoomOwnershipType field if non-nil, zero value otherwise.

### GetRoomOwnershipTypeOk

`func (o *RoomCalendarResType) GetRoomOwnershipTypeOk() (*ReservationRoomOwnershipType, bool)`

GetRoomOwnershipTypeOk returns a tuple with the RoomOwnershipType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomOwnershipType

`func (o *RoomCalendarResType) SetRoomOwnershipType(v ReservationRoomOwnershipType)`

SetRoomOwnershipType sets RoomOwnershipType field to given value.

### HasRoomOwnershipType

`func (o *RoomCalendarResType) HasRoomOwnershipType() bool`

HasRoomOwnershipType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# TaskCompanionTaskRoomRoomsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RoomType** | Pointer to [**RoomTypeShortInfoType**](RoomTypeShortInfoType.md) |  | [optional] 
**Floor** | Pointer to **string** | Floor of the Room. | [optional] 
**FloorDescription** | Pointer to **string** | Description for the Floor of the Room. | [optional] 
**RoomFeatures** | Pointer to [**[]RoomFeatureType**](RoomFeatureType.md) | A recurring element that identifies the room features. | [optional] 
**RoomDescription** | Pointer to **string** | Detail Long Description Of The Room. | [optional] 
**Description** | Pointer to [**TranslationTextType2000**](TranslationTextType2000.md) |  | [optional] 
**SmokingPreference** | Pointer to **string** | This indicates room smoking preference. | [optional] 
**SmokingPreferenceDescription** | Pointer to **string** | This indicates the description of the room smoking preference. | [optional] 
**Building** | Pointer to **string** | Building associated with the room. | [optional] 
**RoomAssignmentRating** | Pointer to [**RatePlanRatingType**](RatePlanRatingType.md) |  | [optional] 
**RoomNumber** | Pointer to **string** | Code of the room. | [optional] 
**RoomSection** | Pointer to [**RoomSectionType**](RoomSectionType.md) |  | [optional] 
**Housekeeping** | Pointer to [**HousekeepingType**](HousekeepingType.md) |  | [optional] 
**OutOfOrder** | Pointer to [**[]RoomOutOfOrderType**](RoomOutOfOrderType.md) | Date Range and reasons for a room being Out of Order/Out Of Service (If the room is OO/OS). | [optional] 
**Discrepancy** | Pointer to [**[]RoomDiscrepancyType**](RoomDiscrepancyType.md) | Room Discrepancies between front office and housekeeping room status and number of persons in the room. | [optional] 
**SitePlanSection** | Pointer to [**SitePlanSectionType**](SitePlanSectionType.md) |  | [optional] 
**ComponentRoomNumber** | Pointer to **string** | This flag indicates component room. | [optional] 
**ConnectingRooms** | Pointer to [**[]RoomRoomType**](RoomRoomType.md) | Collection of rooms. | [optional] 
**ComponentRooms** | Pointer to [**[]RoomRoomType**](RoomRoomType.md) | Collection of rooms. | [optional] 
**Attendant** | Pointer to [**[]CurrentServicingAttendantType**](CurrentServicingAttendantType.md) |  | [optional] 
**Hold** | Pointer to [**RoomHoldType**](RoomHoldType.md) |  | [optional] 
**TurndownInfo** | Pointer to [**TurndownInfoType**](TurndownInfoType.md) |  | [optional] 
**ResvInfo** | Pointer to [**[]ReservationShortInfoType**](ReservationShortInfoType.md) |  | [optional] 
**ReservationInfo** | Pointer to [**[]ReservationInfoType**](ReservationInfoType.md) |  | [optional] 
**ServicingInfo** | Pointer to [**[]CurrentServicingAttendantType**](CurrentServicingAttendantType.md) | Information regarding the current servicing of the room. | [optional] 
**Instructions** | Pointer to **string** | Task Sheet instructions at the room level. | [optional] 
**TotalCredits** | Pointer to **int32** | Total credits for this room. | [optional] 
**WakeUpTime** | Pointer to **string** | The wake up time of the current date | [optional] 
**CleaningSequence** | Pointer to **int32** | The sequence for cleaning this room in the task sheet. This would apply only for Pickup and Dirty rooms. | [optional] 
**DefaultSequence** | Pointer to **int32** | The sequence for this room from configuration. | [optional] 
**HasPriority** | Pointer to **bool** | The sequence for this room from configuration. | [optional] 
**MaintenanceAllowed** | Pointer to **bool** | Flag if the Room, and the OperaV5 version, allows Room Maintenance or not. | [optional] 

## Methods

### NewTaskCompanionTaskRoomRoomsInner

`func NewTaskCompanionTaskRoomRoomsInner() *TaskCompanionTaskRoomRoomsInner`

NewTaskCompanionTaskRoomRoomsInner instantiates a new TaskCompanionTaskRoomRoomsInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTaskCompanionTaskRoomRoomsInnerWithDefaults

`func NewTaskCompanionTaskRoomRoomsInnerWithDefaults() *TaskCompanionTaskRoomRoomsInner`

NewTaskCompanionTaskRoomRoomsInnerWithDefaults instantiates a new TaskCompanionTaskRoomRoomsInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRoomType

`func (o *TaskCompanionTaskRoomRoomsInner) GetRoomType() RoomTypeShortInfoType`

GetRoomType returns the RoomType field if non-nil, zero value otherwise.

### GetRoomTypeOk

`func (o *TaskCompanionTaskRoomRoomsInner) GetRoomTypeOk() (*RoomTypeShortInfoType, bool)`

GetRoomTypeOk returns a tuple with the RoomType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomType

`func (o *TaskCompanionTaskRoomRoomsInner) SetRoomType(v RoomTypeShortInfoType)`

SetRoomType sets RoomType field to given value.

### HasRoomType

`func (o *TaskCompanionTaskRoomRoomsInner) HasRoomType() bool`

HasRoomType returns a boolean if a field has been set.

### GetFloor

`func (o *TaskCompanionTaskRoomRoomsInner) GetFloor() string`

GetFloor returns the Floor field if non-nil, zero value otherwise.

### GetFloorOk

`func (o *TaskCompanionTaskRoomRoomsInner) GetFloorOk() (*string, bool)`

GetFloorOk returns a tuple with the Floor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFloor

`func (o *TaskCompanionTaskRoomRoomsInner) SetFloor(v string)`

SetFloor sets Floor field to given value.

### HasFloor

`func (o *TaskCompanionTaskRoomRoomsInner) HasFloor() bool`

HasFloor returns a boolean if a field has been set.

### GetFloorDescription

`func (o *TaskCompanionTaskRoomRoomsInner) GetFloorDescription() string`

GetFloorDescription returns the FloorDescription field if non-nil, zero value otherwise.

### GetFloorDescriptionOk

`func (o *TaskCompanionTaskRoomRoomsInner) GetFloorDescriptionOk() (*string, bool)`

GetFloorDescriptionOk returns a tuple with the FloorDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFloorDescription

`func (o *TaskCompanionTaskRoomRoomsInner) SetFloorDescription(v string)`

SetFloorDescription sets FloorDescription field to given value.

### HasFloorDescription

`func (o *TaskCompanionTaskRoomRoomsInner) HasFloorDescription() bool`

HasFloorDescription returns a boolean if a field has been set.

### GetRoomFeatures

`func (o *TaskCompanionTaskRoomRoomsInner) GetRoomFeatures() []RoomFeatureType`

GetRoomFeatures returns the RoomFeatures field if non-nil, zero value otherwise.

### GetRoomFeaturesOk

`func (o *TaskCompanionTaskRoomRoomsInner) GetRoomFeaturesOk() (*[]RoomFeatureType, bool)`

GetRoomFeaturesOk returns a tuple with the RoomFeatures field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomFeatures

`func (o *TaskCompanionTaskRoomRoomsInner) SetRoomFeatures(v []RoomFeatureType)`

SetRoomFeatures sets RoomFeatures field to given value.

### HasRoomFeatures

`func (o *TaskCompanionTaskRoomRoomsInner) HasRoomFeatures() bool`

HasRoomFeatures returns a boolean if a field has been set.

### GetRoomDescription

`func (o *TaskCompanionTaskRoomRoomsInner) GetRoomDescription() string`

GetRoomDescription returns the RoomDescription field if non-nil, zero value otherwise.

### GetRoomDescriptionOk

`func (o *TaskCompanionTaskRoomRoomsInner) GetRoomDescriptionOk() (*string, bool)`

GetRoomDescriptionOk returns a tuple with the RoomDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomDescription

`func (o *TaskCompanionTaskRoomRoomsInner) SetRoomDescription(v string)`

SetRoomDescription sets RoomDescription field to given value.

### HasRoomDescription

`func (o *TaskCompanionTaskRoomRoomsInner) HasRoomDescription() bool`

HasRoomDescription returns a boolean if a field has been set.

### GetDescription

`func (o *TaskCompanionTaskRoomRoomsInner) GetDescription() TranslationTextType2000`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *TaskCompanionTaskRoomRoomsInner) GetDescriptionOk() (*TranslationTextType2000, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *TaskCompanionTaskRoomRoomsInner) SetDescription(v TranslationTextType2000)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *TaskCompanionTaskRoomRoomsInner) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetSmokingPreference

`func (o *TaskCompanionTaskRoomRoomsInner) GetSmokingPreference() string`

GetSmokingPreference returns the SmokingPreference field if non-nil, zero value otherwise.

### GetSmokingPreferenceOk

`func (o *TaskCompanionTaskRoomRoomsInner) GetSmokingPreferenceOk() (*string, bool)`

GetSmokingPreferenceOk returns a tuple with the SmokingPreference field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSmokingPreference

`func (o *TaskCompanionTaskRoomRoomsInner) SetSmokingPreference(v string)`

SetSmokingPreference sets SmokingPreference field to given value.

### HasSmokingPreference

`func (o *TaskCompanionTaskRoomRoomsInner) HasSmokingPreference() bool`

HasSmokingPreference returns a boolean if a field has been set.

### GetSmokingPreferenceDescription

`func (o *TaskCompanionTaskRoomRoomsInner) GetSmokingPreferenceDescription() string`

GetSmokingPreferenceDescription returns the SmokingPreferenceDescription field if non-nil, zero value otherwise.

### GetSmokingPreferenceDescriptionOk

`func (o *TaskCompanionTaskRoomRoomsInner) GetSmokingPreferenceDescriptionOk() (*string, bool)`

GetSmokingPreferenceDescriptionOk returns a tuple with the SmokingPreferenceDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSmokingPreferenceDescription

`func (o *TaskCompanionTaskRoomRoomsInner) SetSmokingPreferenceDescription(v string)`

SetSmokingPreferenceDescription sets SmokingPreferenceDescription field to given value.

### HasSmokingPreferenceDescription

`func (o *TaskCompanionTaskRoomRoomsInner) HasSmokingPreferenceDescription() bool`

HasSmokingPreferenceDescription returns a boolean if a field has been set.

### GetBuilding

`func (o *TaskCompanionTaskRoomRoomsInner) GetBuilding() string`

GetBuilding returns the Building field if non-nil, zero value otherwise.

### GetBuildingOk

`func (o *TaskCompanionTaskRoomRoomsInner) GetBuildingOk() (*string, bool)`

GetBuildingOk returns a tuple with the Building field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBuilding

`func (o *TaskCompanionTaskRoomRoomsInner) SetBuilding(v string)`

SetBuilding sets Building field to given value.

### HasBuilding

`func (o *TaskCompanionTaskRoomRoomsInner) HasBuilding() bool`

HasBuilding returns a boolean if a field has been set.

### GetRoomAssignmentRating

`func (o *TaskCompanionTaskRoomRoomsInner) GetRoomAssignmentRating() RatePlanRatingType`

GetRoomAssignmentRating returns the RoomAssignmentRating field if non-nil, zero value otherwise.

### GetRoomAssignmentRatingOk

`func (o *TaskCompanionTaskRoomRoomsInner) GetRoomAssignmentRatingOk() (*RatePlanRatingType, bool)`

GetRoomAssignmentRatingOk returns a tuple with the RoomAssignmentRating field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomAssignmentRating

`func (o *TaskCompanionTaskRoomRoomsInner) SetRoomAssignmentRating(v RatePlanRatingType)`

SetRoomAssignmentRating sets RoomAssignmentRating field to given value.

### HasRoomAssignmentRating

`func (o *TaskCompanionTaskRoomRoomsInner) HasRoomAssignmentRating() bool`

HasRoomAssignmentRating returns a boolean if a field has been set.

### GetRoomNumber

`func (o *TaskCompanionTaskRoomRoomsInner) GetRoomNumber() string`

GetRoomNumber returns the RoomNumber field if non-nil, zero value otherwise.

### GetRoomNumberOk

`func (o *TaskCompanionTaskRoomRoomsInner) GetRoomNumberOk() (*string, bool)`

GetRoomNumberOk returns a tuple with the RoomNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomNumber

`func (o *TaskCompanionTaskRoomRoomsInner) SetRoomNumber(v string)`

SetRoomNumber sets RoomNumber field to given value.

### HasRoomNumber

`func (o *TaskCompanionTaskRoomRoomsInner) HasRoomNumber() bool`

HasRoomNumber returns a boolean if a field has been set.

### GetRoomSection

`func (o *TaskCompanionTaskRoomRoomsInner) GetRoomSection() RoomSectionType`

GetRoomSection returns the RoomSection field if non-nil, zero value otherwise.

### GetRoomSectionOk

`func (o *TaskCompanionTaskRoomRoomsInner) GetRoomSectionOk() (*RoomSectionType, bool)`

GetRoomSectionOk returns a tuple with the RoomSection field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomSection

`func (o *TaskCompanionTaskRoomRoomsInner) SetRoomSection(v RoomSectionType)`

SetRoomSection sets RoomSection field to given value.

### HasRoomSection

`func (o *TaskCompanionTaskRoomRoomsInner) HasRoomSection() bool`

HasRoomSection returns a boolean if a field has been set.

### GetHousekeeping

`func (o *TaskCompanionTaskRoomRoomsInner) GetHousekeeping() HousekeepingType`

GetHousekeeping returns the Housekeeping field if non-nil, zero value otherwise.

### GetHousekeepingOk

`func (o *TaskCompanionTaskRoomRoomsInner) GetHousekeepingOk() (*HousekeepingType, bool)`

GetHousekeepingOk returns a tuple with the Housekeeping field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHousekeeping

`func (o *TaskCompanionTaskRoomRoomsInner) SetHousekeeping(v HousekeepingType)`

SetHousekeeping sets Housekeeping field to given value.

### HasHousekeeping

`func (o *TaskCompanionTaskRoomRoomsInner) HasHousekeeping() bool`

HasHousekeeping returns a boolean if a field has been set.

### GetOutOfOrder

`func (o *TaskCompanionTaskRoomRoomsInner) GetOutOfOrder() []RoomOutOfOrderType`

GetOutOfOrder returns the OutOfOrder field if non-nil, zero value otherwise.

### GetOutOfOrderOk

`func (o *TaskCompanionTaskRoomRoomsInner) GetOutOfOrderOk() (*[]RoomOutOfOrderType, bool)`

GetOutOfOrderOk returns a tuple with the OutOfOrder field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOutOfOrder

`func (o *TaskCompanionTaskRoomRoomsInner) SetOutOfOrder(v []RoomOutOfOrderType)`

SetOutOfOrder sets OutOfOrder field to given value.

### HasOutOfOrder

`func (o *TaskCompanionTaskRoomRoomsInner) HasOutOfOrder() bool`

HasOutOfOrder returns a boolean if a field has been set.

### GetDiscrepancy

`func (o *TaskCompanionTaskRoomRoomsInner) GetDiscrepancy() []RoomDiscrepancyType`

GetDiscrepancy returns the Discrepancy field if non-nil, zero value otherwise.

### GetDiscrepancyOk

`func (o *TaskCompanionTaskRoomRoomsInner) GetDiscrepancyOk() (*[]RoomDiscrepancyType, bool)`

GetDiscrepancyOk returns a tuple with the Discrepancy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDiscrepancy

`func (o *TaskCompanionTaskRoomRoomsInner) SetDiscrepancy(v []RoomDiscrepancyType)`

SetDiscrepancy sets Discrepancy field to given value.

### HasDiscrepancy

`func (o *TaskCompanionTaskRoomRoomsInner) HasDiscrepancy() bool`

HasDiscrepancy returns a boolean if a field has been set.

### GetSitePlanSection

`func (o *TaskCompanionTaskRoomRoomsInner) GetSitePlanSection() SitePlanSectionType`

GetSitePlanSection returns the SitePlanSection field if non-nil, zero value otherwise.

### GetSitePlanSectionOk

`func (o *TaskCompanionTaskRoomRoomsInner) GetSitePlanSectionOk() (*SitePlanSectionType, bool)`

GetSitePlanSectionOk returns a tuple with the SitePlanSection field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSitePlanSection

`func (o *TaskCompanionTaskRoomRoomsInner) SetSitePlanSection(v SitePlanSectionType)`

SetSitePlanSection sets SitePlanSection field to given value.

### HasSitePlanSection

`func (o *TaskCompanionTaskRoomRoomsInner) HasSitePlanSection() bool`

HasSitePlanSection returns a boolean if a field has been set.

### GetComponentRoomNumber

`func (o *TaskCompanionTaskRoomRoomsInner) GetComponentRoomNumber() string`

GetComponentRoomNumber returns the ComponentRoomNumber field if non-nil, zero value otherwise.

### GetComponentRoomNumberOk

`func (o *TaskCompanionTaskRoomRoomsInner) GetComponentRoomNumberOk() (*string, bool)`

GetComponentRoomNumberOk returns a tuple with the ComponentRoomNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComponentRoomNumber

`func (o *TaskCompanionTaskRoomRoomsInner) SetComponentRoomNumber(v string)`

SetComponentRoomNumber sets ComponentRoomNumber field to given value.

### HasComponentRoomNumber

`func (o *TaskCompanionTaskRoomRoomsInner) HasComponentRoomNumber() bool`

HasComponentRoomNumber returns a boolean if a field has been set.

### GetConnectingRooms

`func (o *TaskCompanionTaskRoomRoomsInner) GetConnectingRooms() []RoomRoomType`

GetConnectingRooms returns the ConnectingRooms field if non-nil, zero value otherwise.

### GetConnectingRoomsOk

`func (o *TaskCompanionTaskRoomRoomsInner) GetConnectingRoomsOk() (*[]RoomRoomType, bool)`

GetConnectingRoomsOk returns a tuple with the ConnectingRooms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConnectingRooms

`func (o *TaskCompanionTaskRoomRoomsInner) SetConnectingRooms(v []RoomRoomType)`

SetConnectingRooms sets ConnectingRooms field to given value.

### HasConnectingRooms

`func (o *TaskCompanionTaskRoomRoomsInner) HasConnectingRooms() bool`

HasConnectingRooms returns a boolean if a field has been set.

### GetComponentRooms

`func (o *TaskCompanionTaskRoomRoomsInner) GetComponentRooms() []RoomRoomType`

GetComponentRooms returns the ComponentRooms field if non-nil, zero value otherwise.

### GetComponentRoomsOk

`func (o *TaskCompanionTaskRoomRoomsInner) GetComponentRoomsOk() (*[]RoomRoomType, bool)`

GetComponentRoomsOk returns a tuple with the ComponentRooms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComponentRooms

`func (o *TaskCompanionTaskRoomRoomsInner) SetComponentRooms(v []RoomRoomType)`

SetComponentRooms sets ComponentRooms field to given value.

### HasComponentRooms

`func (o *TaskCompanionTaskRoomRoomsInner) HasComponentRooms() bool`

HasComponentRooms returns a boolean if a field has been set.

### GetAttendant

`func (o *TaskCompanionTaskRoomRoomsInner) GetAttendant() []CurrentServicingAttendantType`

GetAttendant returns the Attendant field if non-nil, zero value otherwise.

### GetAttendantOk

`func (o *TaskCompanionTaskRoomRoomsInner) GetAttendantOk() (*[]CurrentServicingAttendantType, bool)`

GetAttendantOk returns a tuple with the Attendant field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttendant

`func (o *TaskCompanionTaskRoomRoomsInner) SetAttendant(v []CurrentServicingAttendantType)`

SetAttendant sets Attendant field to given value.

### HasAttendant

`func (o *TaskCompanionTaskRoomRoomsInner) HasAttendant() bool`

HasAttendant returns a boolean if a field has been set.

### GetHold

`func (o *TaskCompanionTaskRoomRoomsInner) GetHold() RoomHoldType`

GetHold returns the Hold field if non-nil, zero value otherwise.

### GetHoldOk

`func (o *TaskCompanionTaskRoomRoomsInner) GetHoldOk() (*RoomHoldType, bool)`

GetHoldOk returns a tuple with the Hold field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHold

`func (o *TaskCompanionTaskRoomRoomsInner) SetHold(v RoomHoldType)`

SetHold sets Hold field to given value.

### HasHold

`func (o *TaskCompanionTaskRoomRoomsInner) HasHold() bool`

HasHold returns a boolean if a field has been set.

### GetTurndownInfo

`func (o *TaskCompanionTaskRoomRoomsInner) GetTurndownInfo() TurndownInfoType`

GetTurndownInfo returns the TurndownInfo field if non-nil, zero value otherwise.

### GetTurndownInfoOk

`func (o *TaskCompanionTaskRoomRoomsInner) GetTurndownInfoOk() (*TurndownInfoType, bool)`

GetTurndownInfoOk returns a tuple with the TurndownInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTurndownInfo

`func (o *TaskCompanionTaskRoomRoomsInner) SetTurndownInfo(v TurndownInfoType)`

SetTurndownInfo sets TurndownInfo field to given value.

### HasTurndownInfo

`func (o *TaskCompanionTaskRoomRoomsInner) HasTurndownInfo() bool`

HasTurndownInfo returns a boolean if a field has been set.

### GetResvInfo

`func (o *TaskCompanionTaskRoomRoomsInner) GetResvInfo() []ReservationShortInfoType`

GetResvInfo returns the ResvInfo field if non-nil, zero value otherwise.

### GetResvInfoOk

`func (o *TaskCompanionTaskRoomRoomsInner) GetResvInfoOk() (*[]ReservationShortInfoType, bool)`

GetResvInfoOk returns a tuple with the ResvInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResvInfo

`func (o *TaskCompanionTaskRoomRoomsInner) SetResvInfo(v []ReservationShortInfoType)`

SetResvInfo sets ResvInfo field to given value.

### HasResvInfo

`func (o *TaskCompanionTaskRoomRoomsInner) HasResvInfo() bool`

HasResvInfo returns a boolean if a field has been set.

### GetReservationInfo

`func (o *TaskCompanionTaskRoomRoomsInner) GetReservationInfo() []ReservationInfoType`

GetReservationInfo returns the ReservationInfo field if non-nil, zero value otherwise.

### GetReservationInfoOk

`func (o *TaskCompanionTaskRoomRoomsInner) GetReservationInfoOk() (*[]ReservationInfoType, bool)`

GetReservationInfoOk returns a tuple with the ReservationInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationInfo

`func (o *TaskCompanionTaskRoomRoomsInner) SetReservationInfo(v []ReservationInfoType)`

SetReservationInfo sets ReservationInfo field to given value.

### HasReservationInfo

`func (o *TaskCompanionTaskRoomRoomsInner) HasReservationInfo() bool`

HasReservationInfo returns a boolean if a field has been set.

### GetServicingInfo

`func (o *TaskCompanionTaskRoomRoomsInner) GetServicingInfo() []CurrentServicingAttendantType`

GetServicingInfo returns the ServicingInfo field if non-nil, zero value otherwise.

### GetServicingInfoOk

`func (o *TaskCompanionTaskRoomRoomsInner) GetServicingInfoOk() (*[]CurrentServicingAttendantType, bool)`

GetServicingInfoOk returns a tuple with the ServicingInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetServicingInfo

`func (o *TaskCompanionTaskRoomRoomsInner) SetServicingInfo(v []CurrentServicingAttendantType)`

SetServicingInfo sets ServicingInfo field to given value.

### HasServicingInfo

`func (o *TaskCompanionTaskRoomRoomsInner) HasServicingInfo() bool`

HasServicingInfo returns a boolean if a field has been set.

### GetInstructions

`func (o *TaskCompanionTaskRoomRoomsInner) GetInstructions() string`

GetInstructions returns the Instructions field if non-nil, zero value otherwise.

### GetInstructionsOk

`func (o *TaskCompanionTaskRoomRoomsInner) GetInstructionsOk() (*string, bool)`

GetInstructionsOk returns a tuple with the Instructions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInstructions

`func (o *TaskCompanionTaskRoomRoomsInner) SetInstructions(v string)`

SetInstructions sets Instructions field to given value.

### HasInstructions

`func (o *TaskCompanionTaskRoomRoomsInner) HasInstructions() bool`

HasInstructions returns a boolean if a field has been set.

### GetTotalCredits

`func (o *TaskCompanionTaskRoomRoomsInner) GetTotalCredits() int32`

GetTotalCredits returns the TotalCredits field if non-nil, zero value otherwise.

### GetTotalCreditsOk

`func (o *TaskCompanionTaskRoomRoomsInner) GetTotalCreditsOk() (*int32, bool)`

GetTotalCreditsOk returns a tuple with the TotalCredits field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalCredits

`func (o *TaskCompanionTaskRoomRoomsInner) SetTotalCredits(v int32)`

SetTotalCredits sets TotalCredits field to given value.

### HasTotalCredits

`func (o *TaskCompanionTaskRoomRoomsInner) HasTotalCredits() bool`

HasTotalCredits returns a boolean if a field has been set.

### GetWakeUpTime

`func (o *TaskCompanionTaskRoomRoomsInner) GetWakeUpTime() string`

GetWakeUpTime returns the WakeUpTime field if non-nil, zero value otherwise.

### GetWakeUpTimeOk

`func (o *TaskCompanionTaskRoomRoomsInner) GetWakeUpTimeOk() (*string, bool)`

GetWakeUpTimeOk returns a tuple with the WakeUpTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWakeUpTime

`func (o *TaskCompanionTaskRoomRoomsInner) SetWakeUpTime(v string)`

SetWakeUpTime sets WakeUpTime field to given value.

### HasWakeUpTime

`func (o *TaskCompanionTaskRoomRoomsInner) HasWakeUpTime() bool`

HasWakeUpTime returns a boolean if a field has been set.

### GetCleaningSequence

`func (o *TaskCompanionTaskRoomRoomsInner) GetCleaningSequence() int32`

GetCleaningSequence returns the CleaningSequence field if non-nil, zero value otherwise.

### GetCleaningSequenceOk

`func (o *TaskCompanionTaskRoomRoomsInner) GetCleaningSequenceOk() (*int32, bool)`

GetCleaningSequenceOk returns a tuple with the CleaningSequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCleaningSequence

`func (o *TaskCompanionTaskRoomRoomsInner) SetCleaningSequence(v int32)`

SetCleaningSequence sets CleaningSequence field to given value.

### HasCleaningSequence

`func (o *TaskCompanionTaskRoomRoomsInner) HasCleaningSequence() bool`

HasCleaningSequence returns a boolean if a field has been set.

### GetDefaultSequence

`func (o *TaskCompanionTaskRoomRoomsInner) GetDefaultSequence() int32`

GetDefaultSequence returns the DefaultSequence field if non-nil, zero value otherwise.

### GetDefaultSequenceOk

`func (o *TaskCompanionTaskRoomRoomsInner) GetDefaultSequenceOk() (*int32, bool)`

GetDefaultSequenceOk returns a tuple with the DefaultSequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDefaultSequence

`func (o *TaskCompanionTaskRoomRoomsInner) SetDefaultSequence(v int32)`

SetDefaultSequence sets DefaultSequence field to given value.

### HasDefaultSequence

`func (o *TaskCompanionTaskRoomRoomsInner) HasDefaultSequence() bool`

HasDefaultSequence returns a boolean if a field has been set.

### GetHasPriority

`func (o *TaskCompanionTaskRoomRoomsInner) GetHasPriority() bool`

GetHasPriority returns the HasPriority field if non-nil, zero value otherwise.

### GetHasPriorityOk

`func (o *TaskCompanionTaskRoomRoomsInner) GetHasPriorityOk() (*bool, bool)`

GetHasPriorityOk returns a tuple with the HasPriority field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasPriority

`func (o *TaskCompanionTaskRoomRoomsInner) SetHasPriority(v bool)`

SetHasPriority sets HasPriority field to given value.

### HasHasPriority

`func (o *TaskCompanionTaskRoomRoomsInner) HasHasPriority() bool`

HasHasPriority returns a boolean if a field has been set.

### GetMaintenanceAllowed

`func (o *TaskCompanionTaskRoomRoomsInner) GetMaintenanceAllowed() bool`

GetMaintenanceAllowed returns the MaintenanceAllowed field if non-nil, zero value otherwise.

### GetMaintenanceAllowedOk

`func (o *TaskCompanionTaskRoomRoomsInner) GetMaintenanceAllowedOk() (*bool, bool)`

GetMaintenanceAllowedOk returns a tuple with the MaintenanceAllowed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaintenanceAllowed

`func (o *TaskCompanionTaskRoomRoomsInner) SetMaintenanceAllowed(v bool)`

SetMaintenanceAllowed sets MaintenanceAllowed field to given value.

### HasMaintenanceAllowed

`func (o *TaskCompanionTaskRoomRoomsInner) HasMaintenanceAllowed() bool`

HasMaintenanceAllowed returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



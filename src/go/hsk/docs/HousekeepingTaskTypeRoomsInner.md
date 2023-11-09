# HousekeepingTaskTypeRoomsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Attendant** | Pointer to [**[]CurrentServicingAttendantType**](CurrentServicingAttendantType.md) |  | [optional] 
**Building** | Pointer to **string** | Building associated with the room. | [optional] 
**CleaningSequence** | Pointer to **int32** | The sequence for cleaning this room in the task sheet. This would apply only for Pickup and Dirty rooms. | [optional] 
**ComponentRoomNumber** | Pointer to **string** | This flag indicates component room. | [optional] 
**ComponentRoomNumbers** | Pointer to **[]string** | List of component room numbers. | [optional] 
**ComponentRooms** | Pointer to [**RoomRoomsType**](RoomRoomsType.md) |  | [optional] 
**ConnectingRooms** | Pointer to [**RoomRoomsType**](RoomRoomsType.md) |  | [optional] 
**DefaultSequence** | Pointer to **int32** | The sequence for this room from configuration. | [optional] 
**Description** | Pointer to [**TranslationTextType2000**](TranslationTextType2000.md) |  | [optional] 
**Discrepancy** | Pointer to [**RoomDiscrepanciesType**](RoomDiscrepanciesType.md) |  | [optional] 
**Floor** | Pointer to **string** | Floor of the Room. | [optional] 
**FloorDescription** | Pointer to **string** | Description for the Floor of the Room. | [optional] 
**HasPriority** | Pointer to **bool** | The sequence for this room from configuration. | [optional] 
**Hold** | Pointer to [**RoomHoldType**](RoomHoldType.md) |  | [optional] 
**Housekeeping** | Pointer to [**HousekeepingType**](HousekeepingType.md) |  | [optional] 
**Instructions** | Pointer to **string** | Task Sheet instructions at the room level. | [optional] 
**IsAccessible** | Pointer to **bool** | Indicates whether the room is accessibility compliant. | [optional] 
**MaintenanceAllowed** | Pointer to **bool** | Flag if the Room, and the OperaV5 version, allows Room Maintenance or not. | [optional] 
**MeetingRoom** | Pointer to **bool** | Indicates whether the room is a Meeting Room | [optional] 
**OutOfOrder** | Pointer to [**RoomsOutOfOrderType**](RoomsOutOfOrderType.md) |  | [optional] 
**ReservationInfo** | Pointer to [**[]ReservationInfoType**](ReservationInfoType.md) |  | [optional] 
**ResvInfo** | Pointer to [**[]ReservationShortInfoType**](ReservationShortInfoType.md) |  | [optional] 
**RoomAssignmentRating** | Pointer to [**RatePlanRatingType**](RatePlanRatingType.md) |  | [optional] 
**RoomDescription** | Pointer to **string** | Detail Long Description Of The Room. | [optional] 
**RoomFeatures** | Pointer to [**RoomFeaturesType**](RoomFeaturesType.md) |  | [optional] 
**RoomId** | Pointer to **string** | Code of the room. | [optional] 
**RoomSection** | Pointer to [**RoomSectionType**](RoomSectionType.md) |  | [optional] 
**RoomType** | Pointer to [**RoomTypeShortInfoType**](RoomTypeShortInfoType.md) |  | [optional] 
**ServicingInfo** | Pointer to [**[]CurrentServicingAttendantType**](CurrentServicingAttendantType.md) | Information regarding the current servicing of the room. | [optional] 
**SitePlanSection** | Pointer to [**SitePlanSectionType**](SitePlanSectionType.md) |  | [optional] 
**SmokingPreference** | Pointer to **string** | This indicates room smoking preference. | [optional] 
**SmokingPreferenceDescription** | Pointer to **string** | This indicates the description of the room smoking preference. | [optional] 
**TotalCredits** | Pointer to **int32** | Total credits for this room. | [optional] 
**TurndownInfo** | Pointer to [**TurndownInfoType**](TurndownInfoType.md) |  | [optional] 
**WakeUpTime** | Pointer to **string** | The wake up time of the current date | [optional] 

## Methods

### NewHousekeepingTaskTypeRoomsInner

`func NewHousekeepingTaskTypeRoomsInner() *HousekeepingTaskTypeRoomsInner`

NewHousekeepingTaskTypeRoomsInner instantiates a new HousekeepingTaskTypeRoomsInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHousekeepingTaskTypeRoomsInnerWithDefaults

`func NewHousekeepingTaskTypeRoomsInnerWithDefaults() *HousekeepingTaskTypeRoomsInner`

NewHousekeepingTaskTypeRoomsInnerWithDefaults instantiates a new HousekeepingTaskTypeRoomsInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAttendant

`func (o *HousekeepingTaskTypeRoomsInner) GetAttendant() []CurrentServicingAttendantType`

GetAttendant returns the Attendant field if non-nil, zero value otherwise.

### GetAttendantOk

`func (o *HousekeepingTaskTypeRoomsInner) GetAttendantOk() (*[]CurrentServicingAttendantType, bool)`

GetAttendantOk returns a tuple with the Attendant field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttendant

`func (o *HousekeepingTaskTypeRoomsInner) SetAttendant(v []CurrentServicingAttendantType)`

SetAttendant sets Attendant field to given value.

### HasAttendant

`func (o *HousekeepingTaskTypeRoomsInner) HasAttendant() bool`

HasAttendant returns a boolean if a field has been set.

### GetBuilding

`func (o *HousekeepingTaskTypeRoomsInner) GetBuilding() string`

GetBuilding returns the Building field if non-nil, zero value otherwise.

### GetBuildingOk

`func (o *HousekeepingTaskTypeRoomsInner) GetBuildingOk() (*string, bool)`

GetBuildingOk returns a tuple with the Building field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBuilding

`func (o *HousekeepingTaskTypeRoomsInner) SetBuilding(v string)`

SetBuilding sets Building field to given value.

### HasBuilding

`func (o *HousekeepingTaskTypeRoomsInner) HasBuilding() bool`

HasBuilding returns a boolean if a field has been set.

### GetCleaningSequence

`func (o *HousekeepingTaskTypeRoomsInner) GetCleaningSequence() int32`

GetCleaningSequence returns the CleaningSequence field if non-nil, zero value otherwise.

### GetCleaningSequenceOk

`func (o *HousekeepingTaskTypeRoomsInner) GetCleaningSequenceOk() (*int32, bool)`

GetCleaningSequenceOk returns a tuple with the CleaningSequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCleaningSequence

`func (o *HousekeepingTaskTypeRoomsInner) SetCleaningSequence(v int32)`

SetCleaningSequence sets CleaningSequence field to given value.

### HasCleaningSequence

`func (o *HousekeepingTaskTypeRoomsInner) HasCleaningSequence() bool`

HasCleaningSequence returns a boolean if a field has been set.

### GetComponentRoomNumber

`func (o *HousekeepingTaskTypeRoomsInner) GetComponentRoomNumber() string`

GetComponentRoomNumber returns the ComponentRoomNumber field if non-nil, zero value otherwise.

### GetComponentRoomNumberOk

`func (o *HousekeepingTaskTypeRoomsInner) GetComponentRoomNumberOk() (*string, bool)`

GetComponentRoomNumberOk returns a tuple with the ComponentRoomNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComponentRoomNumber

`func (o *HousekeepingTaskTypeRoomsInner) SetComponentRoomNumber(v string)`

SetComponentRoomNumber sets ComponentRoomNumber field to given value.

### HasComponentRoomNumber

`func (o *HousekeepingTaskTypeRoomsInner) HasComponentRoomNumber() bool`

HasComponentRoomNumber returns a boolean if a field has been set.

### GetComponentRoomNumbers

`func (o *HousekeepingTaskTypeRoomsInner) GetComponentRoomNumbers() []string`

GetComponentRoomNumbers returns the ComponentRoomNumbers field if non-nil, zero value otherwise.

### GetComponentRoomNumbersOk

`func (o *HousekeepingTaskTypeRoomsInner) GetComponentRoomNumbersOk() (*[]string, bool)`

GetComponentRoomNumbersOk returns a tuple with the ComponentRoomNumbers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComponentRoomNumbers

`func (o *HousekeepingTaskTypeRoomsInner) SetComponentRoomNumbers(v []string)`

SetComponentRoomNumbers sets ComponentRoomNumbers field to given value.

### HasComponentRoomNumbers

`func (o *HousekeepingTaskTypeRoomsInner) HasComponentRoomNumbers() bool`

HasComponentRoomNumbers returns a boolean if a field has been set.

### GetComponentRooms

`func (o *HousekeepingTaskTypeRoomsInner) GetComponentRooms() RoomRoomsType`

GetComponentRooms returns the ComponentRooms field if non-nil, zero value otherwise.

### GetComponentRoomsOk

`func (o *HousekeepingTaskTypeRoomsInner) GetComponentRoomsOk() (*RoomRoomsType, bool)`

GetComponentRoomsOk returns a tuple with the ComponentRooms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComponentRooms

`func (o *HousekeepingTaskTypeRoomsInner) SetComponentRooms(v RoomRoomsType)`

SetComponentRooms sets ComponentRooms field to given value.

### HasComponentRooms

`func (o *HousekeepingTaskTypeRoomsInner) HasComponentRooms() bool`

HasComponentRooms returns a boolean if a field has been set.

### GetConnectingRooms

`func (o *HousekeepingTaskTypeRoomsInner) GetConnectingRooms() RoomRoomsType`

GetConnectingRooms returns the ConnectingRooms field if non-nil, zero value otherwise.

### GetConnectingRoomsOk

`func (o *HousekeepingTaskTypeRoomsInner) GetConnectingRoomsOk() (*RoomRoomsType, bool)`

GetConnectingRoomsOk returns a tuple with the ConnectingRooms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConnectingRooms

`func (o *HousekeepingTaskTypeRoomsInner) SetConnectingRooms(v RoomRoomsType)`

SetConnectingRooms sets ConnectingRooms field to given value.

### HasConnectingRooms

`func (o *HousekeepingTaskTypeRoomsInner) HasConnectingRooms() bool`

HasConnectingRooms returns a boolean if a field has been set.

### GetDefaultSequence

`func (o *HousekeepingTaskTypeRoomsInner) GetDefaultSequence() int32`

GetDefaultSequence returns the DefaultSequence field if non-nil, zero value otherwise.

### GetDefaultSequenceOk

`func (o *HousekeepingTaskTypeRoomsInner) GetDefaultSequenceOk() (*int32, bool)`

GetDefaultSequenceOk returns a tuple with the DefaultSequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDefaultSequence

`func (o *HousekeepingTaskTypeRoomsInner) SetDefaultSequence(v int32)`

SetDefaultSequence sets DefaultSequence field to given value.

### HasDefaultSequence

`func (o *HousekeepingTaskTypeRoomsInner) HasDefaultSequence() bool`

HasDefaultSequence returns a boolean if a field has been set.

### GetDescription

`func (o *HousekeepingTaskTypeRoomsInner) GetDescription() TranslationTextType2000`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *HousekeepingTaskTypeRoomsInner) GetDescriptionOk() (*TranslationTextType2000, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *HousekeepingTaskTypeRoomsInner) SetDescription(v TranslationTextType2000)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *HousekeepingTaskTypeRoomsInner) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetDiscrepancy

`func (o *HousekeepingTaskTypeRoomsInner) GetDiscrepancy() RoomDiscrepanciesType`

GetDiscrepancy returns the Discrepancy field if non-nil, zero value otherwise.

### GetDiscrepancyOk

`func (o *HousekeepingTaskTypeRoomsInner) GetDiscrepancyOk() (*RoomDiscrepanciesType, bool)`

GetDiscrepancyOk returns a tuple with the Discrepancy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDiscrepancy

`func (o *HousekeepingTaskTypeRoomsInner) SetDiscrepancy(v RoomDiscrepanciesType)`

SetDiscrepancy sets Discrepancy field to given value.

### HasDiscrepancy

`func (o *HousekeepingTaskTypeRoomsInner) HasDiscrepancy() bool`

HasDiscrepancy returns a boolean if a field has been set.

### GetFloor

`func (o *HousekeepingTaskTypeRoomsInner) GetFloor() string`

GetFloor returns the Floor field if non-nil, zero value otherwise.

### GetFloorOk

`func (o *HousekeepingTaskTypeRoomsInner) GetFloorOk() (*string, bool)`

GetFloorOk returns a tuple with the Floor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFloor

`func (o *HousekeepingTaskTypeRoomsInner) SetFloor(v string)`

SetFloor sets Floor field to given value.

### HasFloor

`func (o *HousekeepingTaskTypeRoomsInner) HasFloor() bool`

HasFloor returns a boolean if a field has been set.

### GetFloorDescription

`func (o *HousekeepingTaskTypeRoomsInner) GetFloorDescription() string`

GetFloorDescription returns the FloorDescription field if non-nil, zero value otherwise.

### GetFloorDescriptionOk

`func (o *HousekeepingTaskTypeRoomsInner) GetFloorDescriptionOk() (*string, bool)`

GetFloorDescriptionOk returns a tuple with the FloorDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFloorDescription

`func (o *HousekeepingTaskTypeRoomsInner) SetFloorDescription(v string)`

SetFloorDescription sets FloorDescription field to given value.

### HasFloorDescription

`func (o *HousekeepingTaskTypeRoomsInner) HasFloorDescription() bool`

HasFloorDescription returns a boolean if a field has been set.

### GetHasPriority

`func (o *HousekeepingTaskTypeRoomsInner) GetHasPriority() bool`

GetHasPriority returns the HasPriority field if non-nil, zero value otherwise.

### GetHasPriorityOk

`func (o *HousekeepingTaskTypeRoomsInner) GetHasPriorityOk() (*bool, bool)`

GetHasPriorityOk returns a tuple with the HasPriority field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasPriority

`func (o *HousekeepingTaskTypeRoomsInner) SetHasPriority(v bool)`

SetHasPriority sets HasPriority field to given value.

### HasHasPriority

`func (o *HousekeepingTaskTypeRoomsInner) HasHasPriority() bool`

HasHasPriority returns a boolean if a field has been set.

### GetHold

`func (o *HousekeepingTaskTypeRoomsInner) GetHold() RoomHoldType`

GetHold returns the Hold field if non-nil, zero value otherwise.

### GetHoldOk

`func (o *HousekeepingTaskTypeRoomsInner) GetHoldOk() (*RoomHoldType, bool)`

GetHoldOk returns a tuple with the Hold field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHold

`func (o *HousekeepingTaskTypeRoomsInner) SetHold(v RoomHoldType)`

SetHold sets Hold field to given value.

### HasHold

`func (o *HousekeepingTaskTypeRoomsInner) HasHold() bool`

HasHold returns a boolean if a field has been set.

### GetHousekeeping

`func (o *HousekeepingTaskTypeRoomsInner) GetHousekeeping() HousekeepingType`

GetHousekeeping returns the Housekeeping field if non-nil, zero value otherwise.

### GetHousekeepingOk

`func (o *HousekeepingTaskTypeRoomsInner) GetHousekeepingOk() (*HousekeepingType, bool)`

GetHousekeepingOk returns a tuple with the Housekeeping field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHousekeeping

`func (o *HousekeepingTaskTypeRoomsInner) SetHousekeeping(v HousekeepingType)`

SetHousekeeping sets Housekeeping field to given value.

### HasHousekeeping

`func (o *HousekeepingTaskTypeRoomsInner) HasHousekeeping() bool`

HasHousekeeping returns a boolean if a field has been set.

### GetInstructions

`func (o *HousekeepingTaskTypeRoomsInner) GetInstructions() string`

GetInstructions returns the Instructions field if non-nil, zero value otherwise.

### GetInstructionsOk

`func (o *HousekeepingTaskTypeRoomsInner) GetInstructionsOk() (*string, bool)`

GetInstructionsOk returns a tuple with the Instructions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInstructions

`func (o *HousekeepingTaskTypeRoomsInner) SetInstructions(v string)`

SetInstructions sets Instructions field to given value.

### HasInstructions

`func (o *HousekeepingTaskTypeRoomsInner) HasInstructions() bool`

HasInstructions returns a boolean if a field has been set.

### GetIsAccessible

`func (o *HousekeepingTaskTypeRoomsInner) GetIsAccessible() bool`

GetIsAccessible returns the IsAccessible field if non-nil, zero value otherwise.

### GetIsAccessibleOk

`func (o *HousekeepingTaskTypeRoomsInner) GetIsAccessibleOk() (*bool, bool)`

GetIsAccessibleOk returns a tuple with the IsAccessible field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsAccessible

`func (o *HousekeepingTaskTypeRoomsInner) SetIsAccessible(v bool)`

SetIsAccessible sets IsAccessible field to given value.

### HasIsAccessible

`func (o *HousekeepingTaskTypeRoomsInner) HasIsAccessible() bool`

HasIsAccessible returns a boolean if a field has been set.

### GetMaintenanceAllowed

`func (o *HousekeepingTaskTypeRoomsInner) GetMaintenanceAllowed() bool`

GetMaintenanceAllowed returns the MaintenanceAllowed field if non-nil, zero value otherwise.

### GetMaintenanceAllowedOk

`func (o *HousekeepingTaskTypeRoomsInner) GetMaintenanceAllowedOk() (*bool, bool)`

GetMaintenanceAllowedOk returns a tuple with the MaintenanceAllowed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaintenanceAllowed

`func (o *HousekeepingTaskTypeRoomsInner) SetMaintenanceAllowed(v bool)`

SetMaintenanceAllowed sets MaintenanceAllowed field to given value.

### HasMaintenanceAllowed

`func (o *HousekeepingTaskTypeRoomsInner) HasMaintenanceAllowed() bool`

HasMaintenanceAllowed returns a boolean if a field has been set.

### GetMeetingRoom

`func (o *HousekeepingTaskTypeRoomsInner) GetMeetingRoom() bool`

GetMeetingRoom returns the MeetingRoom field if non-nil, zero value otherwise.

### GetMeetingRoomOk

`func (o *HousekeepingTaskTypeRoomsInner) GetMeetingRoomOk() (*bool, bool)`

GetMeetingRoomOk returns a tuple with the MeetingRoom field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMeetingRoom

`func (o *HousekeepingTaskTypeRoomsInner) SetMeetingRoom(v bool)`

SetMeetingRoom sets MeetingRoom field to given value.

### HasMeetingRoom

`func (o *HousekeepingTaskTypeRoomsInner) HasMeetingRoom() bool`

HasMeetingRoom returns a boolean if a field has been set.

### GetOutOfOrder

`func (o *HousekeepingTaskTypeRoomsInner) GetOutOfOrder() RoomsOutOfOrderType`

GetOutOfOrder returns the OutOfOrder field if non-nil, zero value otherwise.

### GetOutOfOrderOk

`func (o *HousekeepingTaskTypeRoomsInner) GetOutOfOrderOk() (*RoomsOutOfOrderType, bool)`

GetOutOfOrderOk returns a tuple with the OutOfOrder field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOutOfOrder

`func (o *HousekeepingTaskTypeRoomsInner) SetOutOfOrder(v RoomsOutOfOrderType)`

SetOutOfOrder sets OutOfOrder field to given value.

### HasOutOfOrder

`func (o *HousekeepingTaskTypeRoomsInner) HasOutOfOrder() bool`

HasOutOfOrder returns a boolean if a field has been set.

### GetReservationInfo

`func (o *HousekeepingTaskTypeRoomsInner) GetReservationInfo() []ReservationInfoType`

GetReservationInfo returns the ReservationInfo field if non-nil, zero value otherwise.

### GetReservationInfoOk

`func (o *HousekeepingTaskTypeRoomsInner) GetReservationInfoOk() (*[]ReservationInfoType, bool)`

GetReservationInfoOk returns a tuple with the ReservationInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationInfo

`func (o *HousekeepingTaskTypeRoomsInner) SetReservationInfo(v []ReservationInfoType)`

SetReservationInfo sets ReservationInfo field to given value.

### HasReservationInfo

`func (o *HousekeepingTaskTypeRoomsInner) HasReservationInfo() bool`

HasReservationInfo returns a boolean if a field has been set.

### GetResvInfo

`func (o *HousekeepingTaskTypeRoomsInner) GetResvInfo() []ReservationShortInfoType`

GetResvInfo returns the ResvInfo field if non-nil, zero value otherwise.

### GetResvInfoOk

`func (o *HousekeepingTaskTypeRoomsInner) GetResvInfoOk() (*[]ReservationShortInfoType, bool)`

GetResvInfoOk returns a tuple with the ResvInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResvInfo

`func (o *HousekeepingTaskTypeRoomsInner) SetResvInfo(v []ReservationShortInfoType)`

SetResvInfo sets ResvInfo field to given value.

### HasResvInfo

`func (o *HousekeepingTaskTypeRoomsInner) HasResvInfo() bool`

HasResvInfo returns a boolean if a field has been set.

### GetRoomAssignmentRating

`func (o *HousekeepingTaskTypeRoomsInner) GetRoomAssignmentRating() RatePlanRatingType`

GetRoomAssignmentRating returns the RoomAssignmentRating field if non-nil, zero value otherwise.

### GetRoomAssignmentRatingOk

`func (o *HousekeepingTaskTypeRoomsInner) GetRoomAssignmentRatingOk() (*RatePlanRatingType, bool)`

GetRoomAssignmentRatingOk returns a tuple with the RoomAssignmentRating field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomAssignmentRating

`func (o *HousekeepingTaskTypeRoomsInner) SetRoomAssignmentRating(v RatePlanRatingType)`

SetRoomAssignmentRating sets RoomAssignmentRating field to given value.

### HasRoomAssignmentRating

`func (o *HousekeepingTaskTypeRoomsInner) HasRoomAssignmentRating() bool`

HasRoomAssignmentRating returns a boolean if a field has been set.

### GetRoomDescription

`func (o *HousekeepingTaskTypeRoomsInner) GetRoomDescription() string`

GetRoomDescription returns the RoomDescription field if non-nil, zero value otherwise.

### GetRoomDescriptionOk

`func (o *HousekeepingTaskTypeRoomsInner) GetRoomDescriptionOk() (*string, bool)`

GetRoomDescriptionOk returns a tuple with the RoomDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomDescription

`func (o *HousekeepingTaskTypeRoomsInner) SetRoomDescription(v string)`

SetRoomDescription sets RoomDescription field to given value.

### HasRoomDescription

`func (o *HousekeepingTaskTypeRoomsInner) HasRoomDescription() bool`

HasRoomDescription returns a boolean if a field has been set.

### GetRoomFeatures

`func (o *HousekeepingTaskTypeRoomsInner) GetRoomFeatures() RoomFeaturesType`

GetRoomFeatures returns the RoomFeatures field if non-nil, zero value otherwise.

### GetRoomFeaturesOk

`func (o *HousekeepingTaskTypeRoomsInner) GetRoomFeaturesOk() (*RoomFeaturesType, bool)`

GetRoomFeaturesOk returns a tuple with the RoomFeatures field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomFeatures

`func (o *HousekeepingTaskTypeRoomsInner) SetRoomFeatures(v RoomFeaturesType)`

SetRoomFeatures sets RoomFeatures field to given value.

### HasRoomFeatures

`func (o *HousekeepingTaskTypeRoomsInner) HasRoomFeatures() bool`

HasRoomFeatures returns a boolean if a field has been set.

### GetRoomId

`func (o *HousekeepingTaskTypeRoomsInner) GetRoomId() string`

GetRoomId returns the RoomId field if non-nil, zero value otherwise.

### GetRoomIdOk

`func (o *HousekeepingTaskTypeRoomsInner) GetRoomIdOk() (*string, bool)`

GetRoomIdOk returns a tuple with the RoomId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomId

`func (o *HousekeepingTaskTypeRoomsInner) SetRoomId(v string)`

SetRoomId sets RoomId field to given value.

### HasRoomId

`func (o *HousekeepingTaskTypeRoomsInner) HasRoomId() bool`

HasRoomId returns a boolean if a field has been set.

### GetRoomSection

`func (o *HousekeepingTaskTypeRoomsInner) GetRoomSection() RoomSectionType`

GetRoomSection returns the RoomSection field if non-nil, zero value otherwise.

### GetRoomSectionOk

`func (o *HousekeepingTaskTypeRoomsInner) GetRoomSectionOk() (*RoomSectionType, bool)`

GetRoomSectionOk returns a tuple with the RoomSection field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomSection

`func (o *HousekeepingTaskTypeRoomsInner) SetRoomSection(v RoomSectionType)`

SetRoomSection sets RoomSection field to given value.

### HasRoomSection

`func (o *HousekeepingTaskTypeRoomsInner) HasRoomSection() bool`

HasRoomSection returns a boolean if a field has been set.

### GetRoomType

`func (o *HousekeepingTaskTypeRoomsInner) GetRoomType() RoomTypeShortInfoType`

GetRoomType returns the RoomType field if non-nil, zero value otherwise.

### GetRoomTypeOk

`func (o *HousekeepingTaskTypeRoomsInner) GetRoomTypeOk() (*RoomTypeShortInfoType, bool)`

GetRoomTypeOk returns a tuple with the RoomType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomType

`func (o *HousekeepingTaskTypeRoomsInner) SetRoomType(v RoomTypeShortInfoType)`

SetRoomType sets RoomType field to given value.

### HasRoomType

`func (o *HousekeepingTaskTypeRoomsInner) HasRoomType() bool`

HasRoomType returns a boolean if a field has been set.

### GetServicingInfo

`func (o *HousekeepingTaskTypeRoomsInner) GetServicingInfo() []CurrentServicingAttendantType`

GetServicingInfo returns the ServicingInfo field if non-nil, zero value otherwise.

### GetServicingInfoOk

`func (o *HousekeepingTaskTypeRoomsInner) GetServicingInfoOk() (*[]CurrentServicingAttendantType, bool)`

GetServicingInfoOk returns a tuple with the ServicingInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetServicingInfo

`func (o *HousekeepingTaskTypeRoomsInner) SetServicingInfo(v []CurrentServicingAttendantType)`

SetServicingInfo sets ServicingInfo field to given value.

### HasServicingInfo

`func (o *HousekeepingTaskTypeRoomsInner) HasServicingInfo() bool`

HasServicingInfo returns a boolean if a field has been set.

### GetSitePlanSection

`func (o *HousekeepingTaskTypeRoomsInner) GetSitePlanSection() SitePlanSectionType`

GetSitePlanSection returns the SitePlanSection field if non-nil, zero value otherwise.

### GetSitePlanSectionOk

`func (o *HousekeepingTaskTypeRoomsInner) GetSitePlanSectionOk() (*SitePlanSectionType, bool)`

GetSitePlanSectionOk returns a tuple with the SitePlanSection field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSitePlanSection

`func (o *HousekeepingTaskTypeRoomsInner) SetSitePlanSection(v SitePlanSectionType)`

SetSitePlanSection sets SitePlanSection field to given value.

### HasSitePlanSection

`func (o *HousekeepingTaskTypeRoomsInner) HasSitePlanSection() bool`

HasSitePlanSection returns a boolean if a field has been set.

### GetSmokingPreference

`func (o *HousekeepingTaskTypeRoomsInner) GetSmokingPreference() string`

GetSmokingPreference returns the SmokingPreference field if non-nil, zero value otherwise.

### GetSmokingPreferenceOk

`func (o *HousekeepingTaskTypeRoomsInner) GetSmokingPreferenceOk() (*string, bool)`

GetSmokingPreferenceOk returns a tuple with the SmokingPreference field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSmokingPreference

`func (o *HousekeepingTaskTypeRoomsInner) SetSmokingPreference(v string)`

SetSmokingPreference sets SmokingPreference field to given value.

### HasSmokingPreference

`func (o *HousekeepingTaskTypeRoomsInner) HasSmokingPreference() bool`

HasSmokingPreference returns a boolean if a field has been set.

### GetSmokingPreferenceDescription

`func (o *HousekeepingTaskTypeRoomsInner) GetSmokingPreferenceDescription() string`

GetSmokingPreferenceDescription returns the SmokingPreferenceDescription field if non-nil, zero value otherwise.

### GetSmokingPreferenceDescriptionOk

`func (o *HousekeepingTaskTypeRoomsInner) GetSmokingPreferenceDescriptionOk() (*string, bool)`

GetSmokingPreferenceDescriptionOk returns a tuple with the SmokingPreferenceDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSmokingPreferenceDescription

`func (o *HousekeepingTaskTypeRoomsInner) SetSmokingPreferenceDescription(v string)`

SetSmokingPreferenceDescription sets SmokingPreferenceDescription field to given value.

### HasSmokingPreferenceDescription

`func (o *HousekeepingTaskTypeRoomsInner) HasSmokingPreferenceDescription() bool`

HasSmokingPreferenceDescription returns a boolean if a field has been set.

### GetTotalCredits

`func (o *HousekeepingTaskTypeRoomsInner) GetTotalCredits() int32`

GetTotalCredits returns the TotalCredits field if non-nil, zero value otherwise.

### GetTotalCreditsOk

`func (o *HousekeepingTaskTypeRoomsInner) GetTotalCreditsOk() (*int32, bool)`

GetTotalCreditsOk returns a tuple with the TotalCredits field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalCredits

`func (o *HousekeepingTaskTypeRoomsInner) SetTotalCredits(v int32)`

SetTotalCredits sets TotalCredits field to given value.

### HasTotalCredits

`func (o *HousekeepingTaskTypeRoomsInner) HasTotalCredits() bool`

HasTotalCredits returns a boolean if a field has been set.

### GetTurndownInfo

`func (o *HousekeepingTaskTypeRoomsInner) GetTurndownInfo() TurndownInfoType`

GetTurndownInfo returns the TurndownInfo field if non-nil, zero value otherwise.

### GetTurndownInfoOk

`func (o *HousekeepingTaskTypeRoomsInner) GetTurndownInfoOk() (*TurndownInfoType, bool)`

GetTurndownInfoOk returns a tuple with the TurndownInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTurndownInfo

`func (o *HousekeepingTaskTypeRoomsInner) SetTurndownInfo(v TurndownInfoType)`

SetTurndownInfo sets TurndownInfo field to given value.

### HasTurndownInfo

`func (o *HousekeepingTaskTypeRoomsInner) HasTurndownInfo() bool`

HasTurndownInfo returns a boolean if a field has been set.

### GetWakeUpTime

`func (o *HousekeepingTaskTypeRoomsInner) GetWakeUpTime() string`

GetWakeUpTime returns the WakeUpTime field if non-nil, zero value otherwise.

### GetWakeUpTimeOk

`func (o *HousekeepingTaskTypeRoomsInner) GetWakeUpTimeOk() (*string, bool)`

GetWakeUpTimeOk returns a tuple with the WakeUpTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWakeUpTime

`func (o *HousekeepingTaskTypeRoomsInner) SetWakeUpTime(v string)`

SetWakeUpTime sets WakeUpTime field to given value.

### HasWakeUpTime

`func (o *HousekeepingTaskTypeRoomsInner) HasWakeUpTime() bool`

HasWakeUpTime returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



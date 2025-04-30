# HSKTaskSheetDetailsInfoTypeRoomsInner

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
**Accessible** | Pointer to **bool** | Indicates whether the room is accessibility compliant. | [optional] 
**RoomId** | Pointer to **string** | Code of the room. | [optional] 
**MeetingRoom** | Pointer to **bool** | Indicates whether the room is a Meeting Room | [optional] 
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
**ComponentRoomNumbers** | Pointer to **[]string** | List of component room numbers. | [optional] 
**ReservationInfo** | Pointer to [**[]ReservationInfoType**](ReservationInfoType.md) |  | [optional] 
**ServicingInfo** | Pointer to [**[]CurrentServicingAttendantType**](CurrentServicingAttendantType.md) | Information regarding the current servicing of the room. | [optional] 
**AttendantTimeEntriesInfo** | Pointer to [**[]HSKAttendantTimeLogsType**](HSKAttendantTimeLogsType.md) |  | [optional] 
**Instructions** | Pointer to **string** | Task Sheet instructions at the room level. | [optional] 
**TotalCredits** | Pointer to **int32** | Total credits for this room. | [optional] 
**WakeUpTime** | Pointer to **string** | The wake up time of the current date | [optional] 
**CleaningSequence** | Pointer to **int32** | The sequence for cleaning this room in the task sheet. This would apply only for Pickup and Dirty rooms. | [optional] 
**DefaultSequence** | Pointer to **int32** | The sequence for this room from configuration. | [optional] 
**HasPriority** | Pointer to **bool** | The priority for this room. | [optional] 
**ActualTimeInMins** | Pointer to **int32** | The actual time spent by the attendant when doing a service to the room. | [optional] 
**RoomSkipCount** | Pointer to **int32** | The number of skip count for that room. | [optional] 

## Methods

### NewHSKTaskSheetDetailsInfoTypeRoomsInner

`func NewHSKTaskSheetDetailsInfoTypeRoomsInner() *HSKTaskSheetDetailsInfoTypeRoomsInner`

NewHSKTaskSheetDetailsInfoTypeRoomsInner instantiates a new HSKTaskSheetDetailsInfoTypeRoomsInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHSKTaskSheetDetailsInfoTypeRoomsInnerWithDefaults

`func NewHSKTaskSheetDetailsInfoTypeRoomsInnerWithDefaults() *HSKTaskSheetDetailsInfoTypeRoomsInner`

NewHSKTaskSheetDetailsInfoTypeRoomsInnerWithDefaults instantiates a new HSKTaskSheetDetailsInfoTypeRoomsInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRoomType

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) GetRoomType() RoomTypeShortInfoType`

GetRoomType returns the RoomType field if non-nil, zero value otherwise.

### GetRoomTypeOk

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) GetRoomTypeOk() (*RoomTypeShortInfoType, bool)`

GetRoomTypeOk returns a tuple with the RoomType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomType

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) SetRoomType(v RoomTypeShortInfoType)`

SetRoomType sets RoomType field to given value.

### HasRoomType

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) HasRoomType() bool`

HasRoomType returns a boolean if a field has been set.

### GetFloor

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) GetFloor() string`

GetFloor returns the Floor field if non-nil, zero value otherwise.

### GetFloorOk

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) GetFloorOk() (*string, bool)`

GetFloorOk returns a tuple with the Floor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFloor

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) SetFloor(v string)`

SetFloor sets Floor field to given value.

### HasFloor

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) HasFloor() bool`

HasFloor returns a boolean if a field has been set.

### GetFloorDescription

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) GetFloorDescription() string`

GetFloorDescription returns the FloorDescription field if non-nil, zero value otherwise.

### GetFloorDescriptionOk

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) GetFloorDescriptionOk() (*string, bool)`

GetFloorDescriptionOk returns a tuple with the FloorDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFloorDescription

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) SetFloorDescription(v string)`

SetFloorDescription sets FloorDescription field to given value.

### HasFloorDescription

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) HasFloorDescription() bool`

HasFloorDescription returns a boolean if a field has been set.

### GetRoomFeatures

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) GetRoomFeatures() []RoomFeatureType`

GetRoomFeatures returns the RoomFeatures field if non-nil, zero value otherwise.

### GetRoomFeaturesOk

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) GetRoomFeaturesOk() (*[]RoomFeatureType, bool)`

GetRoomFeaturesOk returns a tuple with the RoomFeatures field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomFeatures

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) SetRoomFeatures(v []RoomFeatureType)`

SetRoomFeatures sets RoomFeatures field to given value.

### HasRoomFeatures

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) HasRoomFeatures() bool`

HasRoomFeatures returns a boolean if a field has been set.

### GetRoomDescription

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) GetRoomDescription() string`

GetRoomDescription returns the RoomDescription field if non-nil, zero value otherwise.

### GetRoomDescriptionOk

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) GetRoomDescriptionOk() (*string, bool)`

GetRoomDescriptionOk returns a tuple with the RoomDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomDescription

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) SetRoomDescription(v string)`

SetRoomDescription sets RoomDescription field to given value.

### HasRoomDescription

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) HasRoomDescription() bool`

HasRoomDescription returns a boolean if a field has been set.

### GetDescription

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) GetDescription() TranslationTextType2000`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) GetDescriptionOk() (*TranslationTextType2000, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) SetDescription(v TranslationTextType2000)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetSmokingPreference

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) GetSmokingPreference() string`

GetSmokingPreference returns the SmokingPreference field if non-nil, zero value otherwise.

### GetSmokingPreferenceOk

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) GetSmokingPreferenceOk() (*string, bool)`

GetSmokingPreferenceOk returns a tuple with the SmokingPreference field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSmokingPreference

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) SetSmokingPreference(v string)`

SetSmokingPreference sets SmokingPreference field to given value.

### HasSmokingPreference

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) HasSmokingPreference() bool`

HasSmokingPreference returns a boolean if a field has been set.

### GetSmokingPreferenceDescription

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) GetSmokingPreferenceDescription() string`

GetSmokingPreferenceDescription returns the SmokingPreferenceDescription field if non-nil, zero value otherwise.

### GetSmokingPreferenceDescriptionOk

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) GetSmokingPreferenceDescriptionOk() (*string, bool)`

GetSmokingPreferenceDescriptionOk returns a tuple with the SmokingPreferenceDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSmokingPreferenceDescription

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) SetSmokingPreferenceDescription(v string)`

SetSmokingPreferenceDescription sets SmokingPreferenceDescription field to given value.

### HasSmokingPreferenceDescription

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) HasSmokingPreferenceDescription() bool`

HasSmokingPreferenceDescription returns a boolean if a field has been set.

### GetBuilding

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) GetBuilding() string`

GetBuilding returns the Building field if non-nil, zero value otherwise.

### GetBuildingOk

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) GetBuildingOk() (*string, bool)`

GetBuildingOk returns a tuple with the Building field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBuilding

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) SetBuilding(v string)`

SetBuilding sets Building field to given value.

### HasBuilding

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) HasBuilding() bool`

HasBuilding returns a boolean if a field has been set.

### GetRoomAssignmentRating

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) GetRoomAssignmentRating() RatePlanRatingType`

GetRoomAssignmentRating returns the RoomAssignmentRating field if non-nil, zero value otherwise.

### GetRoomAssignmentRatingOk

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) GetRoomAssignmentRatingOk() (*RatePlanRatingType, bool)`

GetRoomAssignmentRatingOk returns a tuple with the RoomAssignmentRating field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomAssignmentRating

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) SetRoomAssignmentRating(v RatePlanRatingType)`

SetRoomAssignmentRating sets RoomAssignmentRating field to given value.

### HasRoomAssignmentRating

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) HasRoomAssignmentRating() bool`

HasRoomAssignmentRating returns a boolean if a field has been set.

### GetAccessible

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) GetAccessible() bool`

GetAccessible returns the Accessible field if non-nil, zero value otherwise.

### GetAccessibleOk

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) GetAccessibleOk() (*bool, bool)`

GetAccessibleOk returns a tuple with the Accessible field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessible

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) SetAccessible(v bool)`

SetAccessible sets Accessible field to given value.

### HasAccessible

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) HasAccessible() bool`

HasAccessible returns a boolean if a field has been set.

### GetRoomId

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) GetRoomId() string`

GetRoomId returns the RoomId field if non-nil, zero value otherwise.

### GetRoomIdOk

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) GetRoomIdOk() (*string, bool)`

GetRoomIdOk returns a tuple with the RoomId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomId

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) SetRoomId(v string)`

SetRoomId sets RoomId field to given value.

### HasRoomId

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) HasRoomId() bool`

HasRoomId returns a boolean if a field has been set.

### GetMeetingRoom

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) GetMeetingRoom() bool`

GetMeetingRoom returns the MeetingRoom field if non-nil, zero value otherwise.

### GetMeetingRoomOk

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) GetMeetingRoomOk() (*bool, bool)`

GetMeetingRoomOk returns a tuple with the MeetingRoom field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMeetingRoom

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) SetMeetingRoom(v bool)`

SetMeetingRoom sets MeetingRoom field to given value.

### HasMeetingRoom

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) HasMeetingRoom() bool`

HasMeetingRoom returns a boolean if a field has been set.

### GetRoomSection

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) GetRoomSection() RoomSectionType`

GetRoomSection returns the RoomSection field if non-nil, zero value otherwise.

### GetRoomSectionOk

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) GetRoomSectionOk() (*RoomSectionType, bool)`

GetRoomSectionOk returns a tuple with the RoomSection field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomSection

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) SetRoomSection(v RoomSectionType)`

SetRoomSection sets RoomSection field to given value.

### HasRoomSection

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) HasRoomSection() bool`

HasRoomSection returns a boolean if a field has been set.

### GetHousekeeping

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) GetHousekeeping() HousekeepingType`

GetHousekeeping returns the Housekeeping field if non-nil, zero value otherwise.

### GetHousekeepingOk

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) GetHousekeepingOk() (*HousekeepingType, bool)`

GetHousekeepingOk returns a tuple with the Housekeeping field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHousekeeping

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) SetHousekeeping(v HousekeepingType)`

SetHousekeeping sets Housekeeping field to given value.

### HasHousekeeping

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) HasHousekeeping() bool`

HasHousekeeping returns a boolean if a field has been set.

### GetOutOfOrder

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) GetOutOfOrder() []RoomOutOfOrderType`

GetOutOfOrder returns the OutOfOrder field if non-nil, zero value otherwise.

### GetOutOfOrderOk

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) GetOutOfOrderOk() (*[]RoomOutOfOrderType, bool)`

GetOutOfOrderOk returns a tuple with the OutOfOrder field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOutOfOrder

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) SetOutOfOrder(v []RoomOutOfOrderType)`

SetOutOfOrder sets OutOfOrder field to given value.

### HasOutOfOrder

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) HasOutOfOrder() bool`

HasOutOfOrder returns a boolean if a field has been set.

### GetDiscrepancy

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) GetDiscrepancy() []RoomDiscrepancyType`

GetDiscrepancy returns the Discrepancy field if non-nil, zero value otherwise.

### GetDiscrepancyOk

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) GetDiscrepancyOk() (*[]RoomDiscrepancyType, bool)`

GetDiscrepancyOk returns a tuple with the Discrepancy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDiscrepancy

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) SetDiscrepancy(v []RoomDiscrepancyType)`

SetDiscrepancy sets Discrepancy field to given value.

### HasDiscrepancy

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) HasDiscrepancy() bool`

HasDiscrepancy returns a boolean if a field has been set.

### GetSitePlanSection

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) GetSitePlanSection() SitePlanSectionType`

GetSitePlanSection returns the SitePlanSection field if non-nil, zero value otherwise.

### GetSitePlanSectionOk

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) GetSitePlanSectionOk() (*SitePlanSectionType, bool)`

GetSitePlanSectionOk returns a tuple with the SitePlanSection field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSitePlanSection

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) SetSitePlanSection(v SitePlanSectionType)`

SetSitePlanSection sets SitePlanSection field to given value.

### HasSitePlanSection

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) HasSitePlanSection() bool`

HasSitePlanSection returns a boolean if a field has been set.

### GetComponentRoomNumber

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) GetComponentRoomNumber() string`

GetComponentRoomNumber returns the ComponentRoomNumber field if non-nil, zero value otherwise.

### GetComponentRoomNumberOk

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) GetComponentRoomNumberOk() (*string, bool)`

GetComponentRoomNumberOk returns a tuple with the ComponentRoomNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComponentRoomNumber

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) SetComponentRoomNumber(v string)`

SetComponentRoomNumber sets ComponentRoomNumber field to given value.

### HasComponentRoomNumber

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) HasComponentRoomNumber() bool`

HasComponentRoomNumber returns a boolean if a field has been set.

### GetConnectingRooms

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) GetConnectingRooms() []RoomRoomType`

GetConnectingRooms returns the ConnectingRooms field if non-nil, zero value otherwise.

### GetConnectingRoomsOk

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) GetConnectingRoomsOk() (*[]RoomRoomType, bool)`

GetConnectingRoomsOk returns a tuple with the ConnectingRooms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConnectingRooms

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) SetConnectingRooms(v []RoomRoomType)`

SetConnectingRooms sets ConnectingRooms field to given value.

### HasConnectingRooms

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) HasConnectingRooms() bool`

HasConnectingRooms returns a boolean if a field has been set.

### GetComponentRooms

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) GetComponentRooms() []RoomRoomType`

GetComponentRooms returns the ComponentRooms field if non-nil, zero value otherwise.

### GetComponentRoomsOk

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) GetComponentRoomsOk() (*[]RoomRoomType, bool)`

GetComponentRoomsOk returns a tuple with the ComponentRooms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComponentRooms

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) SetComponentRooms(v []RoomRoomType)`

SetComponentRooms sets ComponentRooms field to given value.

### HasComponentRooms

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) HasComponentRooms() bool`

HasComponentRooms returns a boolean if a field has been set.

### GetAttendant

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) GetAttendant() []CurrentServicingAttendantType`

GetAttendant returns the Attendant field if non-nil, zero value otherwise.

### GetAttendantOk

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) GetAttendantOk() (*[]CurrentServicingAttendantType, bool)`

GetAttendantOk returns a tuple with the Attendant field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttendant

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) SetAttendant(v []CurrentServicingAttendantType)`

SetAttendant sets Attendant field to given value.

### HasAttendant

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) HasAttendant() bool`

HasAttendant returns a boolean if a field has been set.

### GetHold

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) GetHold() RoomHoldType`

GetHold returns the Hold field if non-nil, zero value otherwise.

### GetHoldOk

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) GetHoldOk() (*RoomHoldType, bool)`

GetHoldOk returns a tuple with the Hold field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHold

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) SetHold(v RoomHoldType)`

SetHold sets Hold field to given value.

### HasHold

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) HasHold() bool`

HasHold returns a boolean if a field has been set.

### GetTurndownInfo

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) GetTurndownInfo() TurndownInfoType`

GetTurndownInfo returns the TurndownInfo field if non-nil, zero value otherwise.

### GetTurndownInfoOk

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) GetTurndownInfoOk() (*TurndownInfoType, bool)`

GetTurndownInfoOk returns a tuple with the TurndownInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTurndownInfo

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) SetTurndownInfo(v TurndownInfoType)`

SetTurndownInfo sets TurndownInfo field to given value.

### HasTurndownInfo

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) HasTurndownInfo() bool`

HasTurndownInfo returns a boolean if a field has been set.

### GetResvInfo

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) GetResvInfo() []ReservationShortInfoType`

GetResvInfo returns the ResvInfo field if non-nil, zero value otherwise.

### GetResvInfoOk

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) GetResvInfoOk() (*[]ReservationShortInfoType, bool)`

GetResvInfoOk returns a tuple with the ResvInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResvInfo

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) SetResvInfo(v []ReservationShortInfoType)`

SetResvInfo sets ResvInfo field to given value.

### HasResvInfo

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) HasResvInfo() bool`

HasResvInfo returns a boolean if a field has been set.

### GetComponentRoomNumbers

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) GetComponentRoomNumbers() []string`

GetComponentRoomNumbers returns the ComponentRoomNumbers field if non-nil, zero value otherwise.

### GetComponentRoomNumbersOk

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) GetComponentRoomNumbersOk() (*[]string, bool)`

GetComponentRoomNumbersOk returns a tuple with the ComponentRoomNumbers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComponentRoomNumbers

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) SetComponentRoomNumbers(v []string)`

SetComponentRoomNumbers sets ComponentRoomNumbers field to given value.

### HasComponentRoomNumbers

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) HasComponentRoomNumbers() bool`

HasComponentRoomNumbers returns a boolean if a field has been set.

### GetReservationInfo

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) GetReservationInfo() []ReservationInfoType`

GetReservationInfo returns the ReservationInfo field if non-nil, zero value otherwise.

### GetReservationInfoOk

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) GetReservationInfoOk() (*[]ReservationInfoType, bool)`

GetReservationInfoOk returns a tuple with the ReservationInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationInfo

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) SetReservationInfo(v []ReservationInfoType)`

SetReservationInfo sets ReservationInfo field to given value.

### HasReservationInfo

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) HasReservationInfo() bool`

HasReservationInfo returns a boolean if a field has been set.

### GetServicingInfo

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) GetServicingInfo() []CurrentServicingAttendantType`

GetServicingInfo returns the ServicingInfo field if non-nil, zero value otherwise.

### GetServicingInfoOk

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) GetServicingInfoOk() (*[]CurrentServicingAttendantType, bool)`

GetServicingInfoOk returns a tuple with the ServicingInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetServicingInfo

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) SetServicingInfo(v []CurrentServicingAttendantType)`

SetServicingInfo sets ServicingInfo field to given value.

### HasServicingInfo

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) HasServicingInfo() bool`

HasServicingInfo returns a boolean if a field has been set.

### GetAttendantTimeEntriesInfo

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) GetAttendantTimeEntriesInfo() []HSKAttendantTimeLogsType`

GetAttendantTimeEntriesInfo returns the AttendantTimeEntriesInfo field if non-nil, zero value otherwise.

### GetAttendantTimeEntriesInfoOk

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) GetAttendantTimeEntriesInfoOk() (*[]HSKAttendantTimeLogsType, bool)`

GetAttendantTimeEntriesInfoOk returns a tuple with the AttendantTimeEntriesInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttendantTimeEntriesInfo

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) SetAttendantTimeEntriesInfo(v []HSKAttendantTimeLogsType)`

SetAttendantTimeEntriesInfo sets AttendantTimeEntriesInfo field to given value.

### HasAttendantTimeEntriesInfo

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) HasAttendantTimeEntriesInfo() bool`

HasAttendantTimeEntriesInfo returns a boolean if a field has been set.

### GetInstructions

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) GetInstructions() string`

GetInstructions returns the Instructions field if non-nil, zero value otherwise.

### GetInstructionsOk

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) GetInstructionsOk() (*string, bool)`

GetInstructionsOk returns a tuple with the Instructions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInstructions

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) SetInstructions(v string)`

SetInstructions sets Instructions field to given value.

### HasInstructions

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) HasInstructions() bool`

HasInstructions returns a boolean if a field has been set.

### GetTotalCredits

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) GetTotalCredits() int32`

GetTotalCredits returns the TotalCredits field if non-nil, zero value otherwise.

### GetTotalCreditsOk

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) GetTotalCreditsOk() (*int32, bool)`

GetTotalCreditsOk returns a tuple with the TotalCredits field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalCredits

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) SetTotalCredits(v int32)`

SetTotalCredits sets TotalCredits field to given value.

### HasTotalCredits

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) HasTotalCredits() bool`

HasTotalCredits returns a boolean if a field has been set.

### GetWakeUpTime

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) GetWakeUpTime() string`

GetWakeUpTime returns the WakeUpTime field if non-nil, zero value otherwise.

### GetWakeUpTimeOk

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) GetWakeUpTimeOk() (*string, bool)`

GetWakeUpTimeOk returns a tuple with the WakeUpTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWakeUpTime

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) SetWakeUpTime(v string)`

SetWakeUpTime sets WakeUpTime field to given value.

### HasWakeUpTime

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) HasWakeUpTime() bool`

HasWakeUpTime returns a boolean if a field has been set.

### GetCleaningSequence

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) GetCleaningSequence() int32`

GetCleaningSequence returns the CleaningSequence field if non-nil, zero value otherwise.

### GetCleaningSequenceOk

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) GetCleaningSequenceOk() (*int32, bool)`

GetCleaningSequenceOk returns a tuple with the CleaningSequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCleaningSequence

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) SetCleaningSequence(v int32)`

SetCleaningSequence sets CleaningSequence field to given value.

### HasCleaningSequence

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) HasCleaningSequence() bool`

HasCleaningSequence returns a boolean if a field has been set.

### GetDefaultSequence

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) GetDefaultSequence() int32`

GetDefaultSequence returns the DefaultSequence field if non-nil, zero value otherwise.

### GetDefaultSequenceOk

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) GetDefaultSequenceOk() (*int32, bool)`

GetDefaultSequenceOk returns a tuple with the DefaultSequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDefaultSequence

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) SetDefaultSequence(v int32)`

SetDefaultSequence sets DefaultSequence field to given value.

### HasDefaultSequence

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) HasDefaultSequence() bool`

HasDefaultSequence returns a boolean if a field has been set.

### GetHasPriority

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) GetHasPriority() bool`

GetHasPriority returns the HasPriority field if non-nil, zero value otherwise.

### GetHasPriorityOk

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) GetHasPriorityOk() (*bool, bool)`

GetHasPriorityOk returns a tuple with the HasPriority field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasPriority

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) SetHasPriority(v bool)`

SetHasPriority sets HasPriority field to given value.

### HasHasPriority

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) HasHasPriority() bool`

HasHasPriority returns a boolean if a field has been set.

### GetActualTimeInMins

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) GetActualTimeInMins() int32`

GetActualTimeInMins returns the ActualTimeInMins field if non-nil, zero value otherwise.

### GetActualTimeInMinsOk

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) GetActualTimeInMinsOk() (*int32, bool)`

GetActualTimeInMinsOk returns a tuple with the ActualTimeInMins field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActualTimeInMins

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) SetActualTimeInMins(v int32)`

SetActualTimeInMins sets ActualTimeInMins field to given value.

### HasActualTimeInMins

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) HasActualTimeInMins() bool`

HasActualTimeInMins returns a boolean if a field has been set.

### GetRoomSkipCount

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) GetRoomSkipCount() int32`

GetRoomSkipCount returns the RoomSkipCount field if non-nil, zero value otherwise.

### GetRoomSkipCountOk

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) GetRoomSkipCountOk() (*int32, bool)`

GetRoomSkipCountOk returns a tuple with the RoomSkipCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomSkipCount

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) SetRoomSkipCount(v int32)`

SetRoomSkipCount sets RoomSkipCount field to given value.

### HasRoomSkipCount

`func (o *HSKTaskSheetDetailsInfoTypeRoomsInner) HasRoomSkipCount() bool`

HasRoomSkipCount returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



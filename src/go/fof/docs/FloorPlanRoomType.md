# FloorPlanRoomType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Accessible** | Pointer to **bool** | Indicates whether the room is accessibility compliant. | [optional] 
**Attendant** | Pointer to [**[]CurrentServicingAttendantType**](CurrentServicingAttendantType.md) |  | [optional] 
**Building** | Pointer to **string** | Building associated with the room. | [optional] 
**ComponentRoomNumber** | Pointer to **string** | This flag indicates component room. | [optional] 
**ComponentRoomNumbers** | Pointer to **[]string** | List of component room numbers. | [optional] 
**ComponentRooms** | Pointer to [**RoomRoomsType**](RoomRoomsType.md) |  | [optional] 
**ConnectingRooms** | Pointer to [**RoomRoomsType**](RoomRoomsType.md) |  | [optional] 
**Description** | Pointer to [**TranslationTextType2000**](TranslationTextType2000.md) |  | [optional] 
**Discrepancy** | Pointer to [**RoomDiscrepanciesType**](RoomDiscrepanciesType.md) |  | [optional] 
**Floor** | Pointer to **string** | Floor of the Room. | [optional] 
**FloorDescription** | Pointer to **string** | Description for the Floor of the Room. | [optional] 
**Guests** | Pointer to [**[]FloorPlanRoomGuestType**](FloorPlanRoomGuestType.md) |  | [optional] 
**Hold** | Pointer to [**RoomHoldType**](RoomHoldType.md) |  | [optional] 
**Housekeeping** | Pointer to [**HousekeepingType**](HousekeepingType.md) |  | [optional] 
**MeetingRoom** | Pointer to **bool** | Indicates whether the room is a Meeting Room | [optional] 
**OutOfOrder** | Pointer to [**RoomsOutOfOrderType**](RoomsOutOfOrderType.md) |  | [optional] 
**ResvInfo** | Pointer to [**[]ReservationShortInfoType**](ReservationShortInfoType.md) |  | [optional] 
**RoomAssignmentRating** | Pointer to [**RatePlanRatingType**](RatePlanRatingType.md) |  | [optional] 
**RoomDescription** | Pointer to **string** | Detail Long Description Of The Room. | [optional] 
**RoomFeatures** | Pointer to [**RoomFeaturesType**](RoomFeaturesType.md) |  | [optional] 
**RoomId** | Pointer to **string** | Code of the room. | [optional] 
**RoomSection** | Pointer to [**RoomSectionType**](RoomSectionType.md) |  | [optional] 
**RoomType** | Pointer to [**RoomTypeShortInfoType**](RoomTypeShortInfoType.md) |  | [optional] 
**SitePlanSection** | Pointer to [**SitePlanSectionType**](SitePlanSectionType.md) |  | [optional] 
**SmokingPreference** | Pointer to **string** | This indicates room smoking preference. | [optional] 
**SmokingPreferenceDescription** | Pointer to **string** | This indicates the description of the room smoking preference. | [optional] 
**TurndownInfo** | Pointer to [**TurndownInfoType**](TurndownInfoType.md) |  | [optional] 

## Methods

### NewFloorPlanRoomType

`func NewFloorPlanRoomType() *FloorPlanRoomType`

NewFloorPlanRoomType instantiates a new FloorPlanRoomType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFloorPlanRoomTypeWithDefaults

`func NewFloorPlanRoomTypeWithDefaults() *FloorPlanRoomType`

NewFloorPlanRoomTypeWithDefaults instantiates a new FloorPlanRoomType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccessible

`func (o *FloorPlanRoomType) GetAccessible() bool`

GetAccessible returns the Accessible field if non-nil, zero value otherwise.

### GetAccessibleOk

`func (o *FloorPlanRoomType) GetAccessibleOk() (*bool, bool)`

GetAccessibleOk returns a tuple with the Accessible field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessible

`func (o *FloorPlanRoomType) SetAccessible(v bool)`

SetAccessible sets Accessible field to given value.

### HasAccessible

`func (o *FloorPlanRoomType) HasAccessible() bool`

HasAccessible returns a boolean if a field has been set.

### GetAttendant

`func (o *FloorPlanRoomType) GetAttendant() []CurrentServicingAttendantType`

GetAttendant returns the Attendant field if non-nil, zero value otherwise.

### GetAttendantOk

`func (o *FloorPlanRoomType) GetAttendantOk() (*[]CurrentServicingAttendantType, bool)`

GetAttendantOk returns a tuple with the Attendant field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttendant

`func (o *FloorPlanRoomType) SetAttendant(v []CurrentServicingAttendantType)`

SetAttendant sets Attendant field to given value.

### HasAttendant

`func (o *FloorPlanRoomType) HasAttendant() bool`

HasAttendant returns a boolean if a field has been set.

### GetBuilding

`func (o *FloorPlanRoomType) GetBuilding() string`

GetBuilding returns the Building field if non-nil, zero value otherwise.

### GetBuildingOk

`func (o *FloorPlanRoomType) GetBuildingOk() (*string, bool)`

GetBuildingOk returns a tuple with the Building field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBuilding

`func (o *FloorPlanRoomType) SetBuilding(v string)`

SetBuilding sets Building field to given value.

### HasBuilding

`func (o *FloorPlanRoomType) HasBuilding() bool`

HasBuilding returns a boolean if a field has been set.

### GetComponentRoomNumber

`func (o *FloorPlanRoomType) GetComponentRoomNumber() string`

GetComponentRoomNumber returns the ComponentRoomNumber field if non-nil, zero value otherwise.

### GetComponentRoomNumberOk

`func (o *FloorPlanRoomType) GetComponentRoomNumberOk() (*string, bool)`

GetComponentRoomNumberOk returns a tuple with the ComponentRoomNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComponentRoomNumber

`func (o *FloorPlanRoomType) SetComponentRoomNumber(v string)`

SetComponentRoomNumber sets ComponentRoomNumber field to given value.

### HasComponentRoomNumber

`func (o *FloorPlanRoomType) HasComponentRoomNumber() bool`

HasComponentRoomNumber returns a boolean if a field has been set.

### GetComponentRoomNumbers

`func (o *FloorPlanRoomType) GetComponentRoomNumbers() []string`

GetComponentRoomNumbers returns the ComponentRoomNumbers field if non-nil, zero value otherwise.

### GetComponentRoomNumbersOk

`func (o *FloorPlanRoomType) GetComponentRoomNumbersOk() (*[]string, bool)`

GetComponentRoomNumbersOk returns a tuple with the ComponentRoomNumbers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComponentRoomNumbers

`func (o *FloorPlanRoomType) SetComponentRoomNumbers(v []string)`

SetComponentRoomNumbers sets ComponentRoomNumbers field to given value.

### HasComponentRoomNumbers

`func (o *FloorPlanRoomType) HasComponentRoomNumbers() bool`

HasComponentRoomNumbers returns a boolean if a field has been set.

### GetComponentRooms

`func (o *FloorPlanRoomType) GetComponentRooms() RoomRoomsType`

GetComponentRooms returns the ComponentRooms field if non-nil, zero value otherwise.

### GetComponentRoomsOk

`func (o *FloorPlanRoomType) GetComponentRoomsOk() (*RoomRoomsType, bool)`

GetComponentRoomsOk returns a tuple with the ComponentRooms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComponentRooms

`func (o *FloorPlanRoomType) SetComponentRooms(v RoomRoomsType)`

SetComponentRooms sets ComponentRooms field to given value.

### HasComponentRooms

`func (o *FloorPlanRoomType) HasComponentRooms() bool`

HasComponentRooms returns a boolean if a field has been set.

### GetConnectingRooms

`func (o *FloorPlanRoomType) GetConnectingRooms() RoomRoomsType`

GetConnectingRooms returns the ConnectingRooms field if non-nil, zero value otherwise.

### GetConnectingRoomsOk

`func (o *FloorPlanRoomType) GetConnectingRoomsOk() (*RoomRoomsType, bool)`

GetConnectingRoomsOk returns a tuple with the ConnectingRooms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConnectingRooms

`func (o *FloorPlanRoomType) SetConnectingRooms(v RoomRoomsType)`

SetConnectingRooms sets ConnectingRooms field to given value.

### HasConnectingRooms

`func (o *FloorPlanRoomType) HasConnectingRooms() bool`

HasConnectingRooms returns a boolean if a field has been set.

### GetDescription

`func (o *FloorPlanRoomType) GetDescription() TranslationTextType2000`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *FloorPlanRoomType) GetDescriptionOk() (*TranslationTextType2000, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *FloorPlanRoomType) SetDescription(v TranslationTextType2000)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *FloorPlanRoomType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetDiscrepancy

`func (o *FloorPlanRoomType) GetDiscrepancy() RoomDiscrepanciesType`

GetDiscrepancy returns the Discrepancy field if non-nil, zero value otherwise.

### GetDiscrepancyOk

`func (o *FloorPlanRoomType) GetDiscrepancyOk() (*RoomDiscrepanciesType, bool)`

GetDiscrepancyOk returns a tuple with the Discrepancy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDiscrepancy

`func (o *FloorPlanRoomType) SetDiscrepancy(v RoomDiscrepanciesType)`

SetDiscrepancy sets Discrepancy field to given value.

### HasDiscrepancy

`func (o *FloorPlanRoomType) HasDiscrepancy() bool`

HasDiscrepancy returns a boolean if a field has been set.

### GetFloor

`func (o *FloorPlanRoomType) GetFloor() string`

GetFloor returns the Floor field if non-nil, zero value otherwise.

### GetFloorOk

`func (o *FloorPlanRoomType) GetFloorOk() (*string, bool)`

GetFloorOk returns a tuple with the Floor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFloor

`func (o *FloorPlanRoomType) SetFloor(v string)`

SetFloor sets Floor field to given value.

### HasFloor

`func (o *FloorPlanRoomType) HasFloor() bool`

HasFloor returns a boolean if a field has been set.

### GetFloorDescription

`func (o *FloorPlanRoomType) GetFloorDescription() string`

GetFloorDescription returns the FloorDescription field if non-nil, zero value otherwise.

### GetFloorDescriptionOk

`func (o *FloorPlanRoomType) GetFloorDescriptionOk() (*string, bool)`

GetFloorDescriptionOk returns a tuple with the FloorDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFloorDescription

`func (o *FloorPlanRoomType) SetFloorDescription(v string)`

SetFloorDescription sets FloorDescription field to given value.

### HasFloorDescription

`func (o *FloorPlanRoomType) HasFloorDescription() bool`

HasFloorDescription returns a boolean if a field has been set.

### GetGuests

`func (o *FloorPlanRoomType) GetGuests() []FloorPlanRoomGuestType`

GetGuests returns the Guests field if non-nil, zero value otherwise.

### GetGuestsOk

`func (o *FloorPlanRoomType) GetGuestsOk() (*[]FloorPlanRoomGuestType, bool)`

GetGuestsOk returns a tuple with the Guests field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuests

`func (o *FloorPlanRoomType) SetGuests(v []FloorPlanRoomGuestType)`

SetGuests sets Guests field to given value.

### HasGuests

`func (o *FloorPlanRoomType) HasGuests() bool`

HasGuests returns a boolean if a field has been set.

### GetHold

`func (o *FloorPlanRoomType) GetHold() RoomHoldType`

GetHold returns the Hold field if non-nil, zero value otherwise.

### GetHoldOk

`func (o *FloorPlanRoomType) GetHoldOk() (*RoomHoldType, bool)`

GetHoldOk returns a tuple with the Hold field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHold

`func (o *FloorPlanRoomType) SetHold(v RoomHoldType)`

SetHold sets Hold field to given value.

### HasHold

`func (o *FloorPlanRoomType) HasHold() bool`

HasHold returns a boolean if a field has been set.

### GetHousekeeping

`func (o *FloorPlanRoomType) GetHousekeeping() HousekeepingType`

GetHousekeeping returns the Housekeeping field if non-nil, zero value otherwise.

### GetHousekeepingOk

`func (o *FloorPlanRoomType) GetHousekeepingOk() (*HousekeepingType, bool)`

GetHousekeepingOk returns a tuple with the Housekeeping field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHousekeeping

`func (o *FloorPlanRoomType) SetHousekeeping(v HousekeepingType)`

SetHousekeeping sets Housekeeping field to given value.

### HasHousekeeping

`func (o *FloorPlanRoomType) HasHousekeeping() bool`

HasHousekeeping returns a boolean if a field has been set.

### GetMeetingRoom

`func (o *FloorPlanRoomType) GetMeetingRoom() bool`

GetMeetingRoom returns the MeetingRoom field if non-nil, zero value otherwise.

### GetMeetingRoomOk

`func (o *FloorPlanRoomType) GetMeetingRoomOk() (*bool, bool)`

GetMeetingRoomOk returns a tuple with the MeetingRoom field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMeetingRoom

`func (o *FloorPlanRoomType) SetMeetingRoom(v bool)`

SetMeetingRoom sets MeetingRoom field to given value.

### HasMeetingRoom

`func (o *FloorPlanRoomType) HasMeetingRoom() bool`

HasMeetingRoom returns a boolean if a field has been set.

### GetOutOfOrder

`func (o *FloorPlanRoomType) GetOutOfOrder() RoomsOutOfOrderType`

GetOutOfOrder returns the OutOfOrder field if non-nil, zero value otherwise.

### GetOutOfOrderOk

`func (o *FloorPlanRoomType) GetOutOfOrderOk() (*RoomsOutOfOrderType, bool)`

GetOutOfOrderOk returns a tuple with the OutOfOrder field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOutOfOrder

`func (o *FloorPlanRoomType) SetOutOfOrder(v RoomsOutOfOrderType)`

SetOutOfOrder sets OutOfOrder field to given value.

### HasOutOfOrder

`func (o *FloorPlanRoomType) HasOutOfOrder() bool`

HasOutOfOrder returns a boolean if a field has been set.

### GetResvInfo

`func (o *FloorPlanRoomType) GetResvInfo() []ReservationShortInfoType`

GetResvInfo returns the ResvInfo field if non-nil, zero value otherwise.

### GetResvInfoOk

`func (o *FloorPlanRoomType) GetResvInfoOk() (*[]ReservationShortInfoType, bool)`

GetResvInfoOk returns a tuple with the ResvInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResvInfo

`func (o *FloorPlanRoomType) SetResvInfo(v []ReservationShortInfoType)`

SetResvInfo sets ResvInfo field to given value.

### HasResvInfo

`func (o *FloorPlanRoomType) HasResvInfo() bool`

HasResvInfo returns a boolean if a field has been set.

### GetRoomAssignmentRating

`func (o *FloorPlanRoomType) GetRoomAssignmentRating() RatePlanRatingType`

GetRoomAssignmentRating returns the RoomAssignmentRating field if non-nil, zero value otherwise.

### GetRoomAssignmentRatingOk

`func (o *FloorPlanRoomType) GetRoomAssignmentRatingOk() (*RatePlanRatingType, bool)`

GetRoomAssignmentRatingOk returns a tuple with the RoomAssignmentRating field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomAssignmentRating

`func (o *FloorPlanRoomType) SetRoomAssignmentRating(v RatePlanRatingType)`

SetRoomAssignmentRating sets RoomAssignmentRating field to given value.

### HasRoomAssignmentRating

`func (o *FloorPlanRoomType) HasRoomAssignmentRating() bool`

HasRoomAssignmentRating returns a boolean if a field has been set.

### GetRoomDescription

`func (o *FloorPlanRoomType) GetRoomDescription() string`

GetRoomDescription returns the RoomDescription field if non-nil, zero value otherwise.

### GetRoomDescriptionOk

`func (o *FloorPlanRoomType) GetRoomDescriptionOk() (*string, bool)`

GetRoomDescriptionOk returns a tuple with the RoomDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomDescription

`func (o *FloorPlanRoomType) SetRoomDescription(v string)`

SetRoomDescription sets RoomDescription field to given value.

### HasRoomDescription

`func (o *FloorPlanRoomType) HasRoomDescription() bool`

HasRoomDescription returns a boolean if a field has been set.

### GetRoomFeatures

`func (o *FloorPlanRoomType) GetRoomFeatures() RoomFeaturesType`

GetRoomFeatures returns the RoomFeatures field if non-nil, zero value otherwise.

### GetRoomFeaturesOk

`func (o *FloorPlanRoomType) GetRoomFeaturesOk() (*RoomFeaturesType, bool)`

GetRoomFeaturesOk returns a tuple with the RoomFeatures field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomFeatures

`func (o *FloorPlanRoomType) SetRoomFeatures(v RoomFeaturesType)`

SetRoomFeatures sets RoomFeatures field to given value.

### HasRoomFeatures

`func (o *FloorPlanRoomType) HasRoomFeatures() bool`

HasRoomFeatures returns a boolean if a field has been set.

### GetRoomId

`func (o *FloorPlanRoomType) GetRoomId() string`

GetRoomId returns the RoomId field if non-nil, zero value otherwise.

### GetRoomIdOk

`func (o *FloorPlanRoomType) GetRoomIdOk() (*string, bool)`

GetRoomIdOk returns a tuple with the RoomId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomId

`func (o *FloorPlanRoomType) SetRoomId(v string)`

SetRoomId sets RoomId field to given value.

### HasRoomId

`func (o *FloorPlanRoomType) HasRoomId() bool`

HasRoomId returns a boolean if a field has been set.

### GetRoomSection

`func (o *FloorPlanRoomType) GetRoomSection() RoomSectionType`

GetRoomSection returns the RoomSection field if non-nil, zero value otherwise.

### GetRoomSectionOk

`func (o *FloorPlanRoomType) GetRoomSectionOk() (*RoomSectionType, bool)`

GetRoomSectionOk returns a tuple with the RoomSection field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomSection

`func (o *FloorPlanRoomType) SetRoomSection(v RoomSectionType)`

SetRoomSection sets RoomSection field to given value.

### HasRoomSection

`func (o *FloorPlanRoomType) HasRoomSection() bool`

HasRoomSection returns a boolean if a field has been set.

### GetRoomType

`func (o *FloorPlanRoomType) GetRoomType() RoomTypeShortInfoType`

GetRoomType returns the RoomType field if non-nil, zero value otherwise.

### GetRoomTypeOk

`func (o *FloorPlanRoomType) GetRoomTypeOk() (*RoomTypeShortInfoType, bool)`

GetRoomTypeOk returns a tuple with the RoomType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomType

`func (o *FloorPlanRoomType) SetRoomType(v RoomTypeShortInfoType)`

SetRoomType sets RoomType field to given value.

### HasRoomType

`func (o *FloorPlanRoomType) HasRoomType() bool`

HasRoomType returns a boolean if a field has been set.

### GetSitePlanSection

`func (o *FloorPlanRoomType) GetSitePlanSection() SitePlanSectionType`

GetSitePlanSection returns the SitePlanSection field if non-nil, zero value otherwise.

### GetSitePlanSectionOk

`func (o *FloorPlanRoomType) GetSitePlanSectionOk() (*SitePlanSectionType, bool)`

GetSitePlanSectionOk returns a tuple with the SitePlanSection field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSitePlanSection

`func (o *FloorPlanRoomType) SetSitePlanSection(v SitePlanSectionType)`

SetSitePlanSection sets SitePlanSection field to given value.

### HasSitePlanSection

`func (o *FloorPlanRoomType) HasSitePlanSection() bool`

HasSitePlanSection returns a boolean if a field has been set.

### GetSmokingPreference

`func (o *FloorPlanRoomType) GetSmokingPreference() string`

GetSmokingPreference returns the SmokingPreference field if non-nil, zero value otherwise.

### GetSmokingPreferenceOk

`func (o *FloorPlanRoomType) GetSmokingPreferenceOk() (*string, bool)`

GetSmokingPreferenceOk returns a tuple with the SmokingPreference field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSmokingPreference

`func (o *FloorPlanRoomType) SetSmokingPreference(v string)`

SetSmokingPreference sets SmokingPreference field to given value.

### HasSmokingPreference

`func (o *FloorPlanRoomType) HasSmokingPreference() bool`

HasSmokingPreference returns a boolean if a field has been set.

### GetSmokingPreferenceDescription

`func (o *FloorPlanRoomType) GetSmokingPreferenceDescription() string`

GetSmokingPreferenceDescription returns the SmokingPreferenceDescription field if non-nil, zero value otherwise.

### GetSmokingPreferenceDescriptionOk

`func (o *FloorPlanRoomType) GetSmokingPreferenceDescriptionOk() (*string, bool)`

GetSmokingPreferenceDescriptionOk returns a tuple with the SmokingPreferenceDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSmokingPreferenceDescription

`func (o *FloorPlanRoomType) SetSmokingPreferenceDescription(v string)`

SetSmokingPreferenceDescription sets SmokingPreferenceDescription field to given value.

### HasSmokingPreferenceDescription

`func (o *FloorPlanRoomType) HasSmokingPreferenceDescription() bool`

HasSmokingPreferenceDescription returns a boolean if a field has been set.

### GetTurndownInfo

`func (o *FloorPlanRoomType) GetTurndownInfo() TurndownInfoType`

GetTurndownInfo returns the TurndownInfo field if non-nil, zero value otherwise.

### GetTurndownInfoOk

`func (o *FloorPlanRoomType) GetTurndownInfoOk() (*TurndownInfoType, bool)`

GetTurndownInfoOk returns a tuple with the TurndownInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTurndownInfo

`func (o *FloorPlanRoomType) SetTurndownInfo(v TurndownInfoType)`

SetTurndownInfo sets TurndownInfo field to given value.

### HasTurndownInfo

`func (o *FloorPlanRoomType) HasTurndownInfo() bool`

HasTurndownInfo returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



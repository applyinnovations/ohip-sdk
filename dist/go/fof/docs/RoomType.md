# RoomType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Accessible** | Pointer to **bool** | Indicates whether the room is accessibility compliant. | [optional] 
**Attendant** | Pointer to [**[]CurrentServicingAttendantType**](CurrentServicingAttendantType.md) |  | [optional] 
**Building** | Pointer to **string** | Building associated with the room. | [optional] 
**ComponentRoomNumber** | Pointer to **string** | This flag indicates component room. | [optional] 
**ComponentRoomNumbers** | Pointer to **[]string** | List of component room numbers. | [optional] 
**ComponentRooms** | Pointer to [**[]RoomRoomType**](RoomRoomType.md) | Collection of rooms. | [optional] 
**ConnectingRooms** | Pointer to [**[]RoomRoomType**](RoomRoomType.md) | Collection of rooms. | [optional] 
**Description** | Pointer to [**TranslationTextType2000**](TranslationTextType2000.md) |  | [optional] 
**Discrepancy** | Pointer to [**[]RoomDiscrepancyType**](RoomDiscrepancyType.md) | Room Discrepancies between front office and housekeeping room status and number of persons in the room. | [optional] 
**Floor** | Pointer to **string** | Floor of the Room. | [optional] 
**FloorDescription** | Pointer to **string** | Description for the Floor of the Room. | [optional] 
**Hold** | Pointer to [**RoomHoldType**](RoomHoldType.md) |  | [optional] 
**Housekeeping** | Pointer to [**HousekeepingType**](HousekeepingType.md) |  | [optional] 
**MeetingRoom** | Pointer to **bool** | Indicates whether the room is a Meeting Room | [optional] 
**OutOfOrder** | Pointer to [**[]RoomOutOfOrderType**](RoomOutOfOrderType.md) | Date Range and reasons for a room being Out of Order/Out Of Service (If the room is OO/OS). | [optional] 
**ResvInfo** | Pointer to [**[]ReservationShortInfoType**](ReservationShortInfoType.md) |  | [optional] 
**RoomAssignmentRating** | Pointer to [**RatePlanRatingType**](RatePlanRatingType.md) |  | [optional] 
**RoomDescription** | Pointer to **string** | Detail Long Description Of The Room. | [optional] 
**RoomFeatures** | Pointer to [**[]RoomFeatureType**](RoomFeatureType.md) | A recurring element that identifies the room features. | [optional] 
**RoomId** | Pointer to **string** | Code of the room. | [optional] 
**RoomSection** | Pointer to [**RoomSectionType**](RoomSectionType.md) |  | [optional] 
**RoomType** | Pointer to [**RoomTypeShortInfoType**](RoomTypeShortInfoType.md) |  | [optional] 
**RotationRoomId** | Pointer to **string** | Rotation room of the room type. | [optional] 
**SitePlanSection** | Pointer to [**SitePlanSectionType**](SitePlanSectionType.md) |  | [optional] 
**SmokingPreference** | Pointer to **string** | This indicates room smoking preference. | [optional] 
**SmokingPreferenceDescription** | Pointer to **string** | This indicates the description of the room smoking preference. | [optional] 
**TurndownInfo** | Pointer to [**TurndownInfoType**](TurndownInfoType.md) |  | [optional] 

## Methods

### NewRoomType

`func NewRoomType() *RoomType`

NewRoomType instantiates a new RoomType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoomTypeWithDefaults

`func NewRoomTypeWithDefaults() *RoomType`

NewRoomTypeWithDefaults instantiates a new RoomType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccessible

`func (o *RoomType) GetAccessible() bool`

GetAccessible returns the Accessible field if non-nil, zero value otherwise.

### GetAccessibleOk

`func (o *RoomType) GetAccessibleOk() (*bool, bool)`

GetAccessibleOk returns a tuple with the Accessible field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessible

`func (o *RoomType) SetAccessible(v bool)`

SetAccessible sets Accessible field to given value.

### HasAccessible

`func (o *RoomType) HasAccessible() bool`

HasAccessible returns a boolean if a field has been set.

### GetAttendant

`func (o *RoomType) GetAttendant() []CurrentServicingAttendantType`

GetAttendant returns the Attendant field if non-nil, zero value otherwise.

### GetAttendantOk

`func (o *RoomType) GetAttendantOk() (*[]CurrentServicingAttendantType, bool)`

GetAttendantOk returns a tuple with the Attendant field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttendant

`func (o *RoomType) SetAttendant(v []CurrentServicingAttendantType)`

SetAttendant sets Attendant field to given value.

### HasAttendant

`func (o *RoomType) HasAttendant() bool`

HasAttendant returns a boolean if a field has been set.

### GetBuilding

`func (o *RoomType) GetBuilding() string`

GetBuilding returns the Building field if non-nil, zero value otherwise.

### GetBuildingOk

`func (o *RoomType) GetBuildingOk() (*string, bool)`

GetBuildingOk returns a tuple with the Building field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBuilding

`func (o *RoomType) SetBuilding(v string)`

SetBuilding sets Building field to given value.

### HasBuilding

`func (o *RoomType) HasBuilding() bool`

HasBuilding returns a boolean if a field has been set.

### GetComponentRoomNumber

`func (o *RoomType) GetComponentRoomNumber() string`

GetComponentRoomNumber returns the ComponentRoomNumber field if non-nil, zero value otherwise.

### GetComponentRoomNumberOk

`func (o *RoomType) GetComponentRoomNumberOk() (*string, bool)`

GetComponentRoomNumberOk returns a tuple with the ComponentRoomNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComponentRoomNumber

`func (o *RoomType) SetComponentRoomNumber(v string)`

SetComponentRoomNumber sets ComponentRoomNumber field to given value.

### HasComponentRoomNumber

`func (o *RoomType) HasComponentRoomNumber() bool`

HasComponentRoomNumber returns a boolean if a field has been set.

### GetComponentRoomNumbers

`func (o *RoomType) GetComponentRoomNumbers() []string`

GetComponentRoomNumbers returns the ComponentRoomNumbers field if non-nil, zero value otherwise.

### GetComponentRoomNumbersOk

`func (o *RoomType) GetComponentRoomNumbersOk() (*[]string, bool)`

GetComponentRoomNumbersOk returns a tuple with the ComponentRoomNumbers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComponentRoomNumbers

`func (o *RoomType) SetComponentRoomNumbers(v []string)`

SetComponentRoomNumbers sets ComponentRoomNumbers field to given value.

### HasComponentRoomNumbers

`func (o *RoomType) HasComponentRoomNumbers() bool`

HasComponentRoomNumbers returns a boolean if a field has been set.

### GetComponentRooms

`func (o *RoomType) GetComponentRooms() []RoomRoomType`

GetComponentRooms returns the ComponentRooms field if non-nil, zero value otherwise.

### GetComponentRoomsOk

`func (o *RoomType) GetComponentRoomsOk() (*[]RoomRoomType, bool)`

GetComponentRoomsOk returns a tuple with the ComponentRooms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComponentRooms

`func (o *RoomType) SetComponentRooms(v []RoomRoomType)`

SetComponentRooms sets ComponentRooms field to given value.

### HasComponentRooms

`func (o *RoomType) HasComponentRooms() bool`

HasComponentRooms returns a boolean if a field has been set.

### GetConnectingRooms

`func (o *RoomType) GetConnectingRooms() []RoomRoomType`

GetConnectingRooms returns the ConnectingRooms field if non-nil, zero value otherwise.

### GetConnectingRoomsOk

`func (o *RoomType) GetConnectingRoomsOk() (*[]RoomRoomType, bool)`

GetConnectingRoomsOk returns a tuple with the ConnectingRooms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConnectingRooms

`func (o *RoomType) SetConnectingRooms(v []RoomRoomType)`

SetConnectingRooms sets ConnectingRooms field to given value.

### HasConnectingRooms

`func (o *RoomType) HasConnectingRooms() bool`

HasConnectingRooms returns a boolean if a field has been set.

### GetDescription

`func (o *RoomType) GetDescription() TranslationTextType2000`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *RoomType) GetDescriptionOk() (*TranslationTextType2000, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *RoomType) SetDescription(v TranslationTextType2000)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *RoomType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetDiscrepancy

`func (o *RoomType) GetDiscrepancy() []RoomDiscrepancyType`

GetDiscrepancy returns the Discrepancy field if non-nil, zero value otherwise.

### GetDiscrepancyOk

`func (o *RoomType) GetDiscrepancyOk() (*[]RoomDiscrepancyType, bool)`

GetDiscrepancyOk returns a tuple with the Discrepancy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDiscrepancy

`func (o *RoomType) SetDiscrepancy(v []RoomDiscrepancyType)`

SetDiscrepancy sets Discrepancy field to given value.

### HasDiscrepancy

`func (o *RoomType) HasDiscrepancy() bool`

HasDiscrepancy returns a boolean if a field has been set.

### GetFloor

`func (o *RoomType) GetFloor() string`

GetFloor returns the Floor field if non-nil, zero value otherwise.

### GetFloorOk

`func (o *RoomType) GetFloorOk() (*string, bool)`

GetFloorOk returns a tuple with the Floor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFloor

`func (o *RoomType) SetFloor(v string)`

SetFloor sets Floor field to given value.

### HasFloor

`func (o *RoomType) HasFloor() bool`

HasFloor returns a boolean if a field has been set.

### GetFloorDescription

`func (o *RoomType) GetFloorDescription() string`

GetFloorDescription returns the FloorDescription field if non-nil, zero value otherwise.

### GetFloorDescriptionOk

`func (o *RoomType) GetFloorDescriptionOk() (*string, bool)`

GetFloorDescriptionOk returns a tuple with the FloorDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFloorDescription

`func (o *RoomType) SetFloorDescription(v string)`

SetFloorDescription sets FloorDescription field to given value.

### HasFloorDescription

`func (o *RoomType) HasFloorDescription() bool`

HasFloorDescription returns a boolean if a field has been set.

### GetHold

`func (o *RoomType) GetHold() RoomHoldType`

GetHold returns the Hold field if non-nil, zero value otherwise.

### GetHoldOk

`func (o *RoomType) GetHoldOk() (*RoomHoldType, bool)`

GetHoldOk returns a tuple with the Hold field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHold

`func (o *RoomType) SetHold(v RoomHoldType)`

SetHold sets Hold field to given value.

### HasHold

`func (o *RoomType) HasHold() bool`

HasHold returns a boolean if a field has been set.

### GetHousekeeping

`func (o *RoomType) GetHousekeeping() HousekeepingType`

GetHousekeeping returns the Housekeeping field if non-nil, zero value otherwise.

### GetHousekeepingOk

`func (o *RoomType) GetHousekeepingOk() (*HousekeepingType, bool)`

GetHousekeepingOk returns a tuple with the Housekeeping field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHousekeeping

`func (o *RoomType) SetHousekeeping(v HousekeepingType)`

SetHousekeeping sets Housekeeping field to given value.

### HasHousekeeping

`func (o *RoomType) HasHousekeeping() bool`

HasHousekeeping returns a boolean if a field has been set.

### GetMeetingRoom

`func (o *RoomType) GetMeetingRoom() bool`

GetMeetingRoom returns the MeetingRoom field if non-nil, zero value otherwise.

### GetMeetingRoomOk

`func (o *RoomType) GetMeetingRoomOk() (*bool, bool)`

GetMeetingRoomOk returns a tuple with the MeetingRoom field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMeetingRoom

`func (o *RoomType) SetMeetingRoom(v bool)`

SetMeetingRoom sets MeetingRoom field to given value.

### HasMeetingRoom

`func (o *RoomType) HasMeetingRoom() bool`

HasMeetingRoom returns a boolean if a field has been set.

### GetOutOfOrder

`func (o *RoomType) GetOutOfOrder() []RoomOutOfOrderType`

GetOutOfOrder returns the OutOfOrder field if non-nil, zero value otherwise.

### GetOutOfOrderOk

`func (o *RoomType) GetOutOfOrderOk() (*[]RoomOutOfOrderType, bool)`

GetOutOfOrderOk returns a tuple with the OutOfOrder field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOutOfOrder

`func (o *RoomType) SetOutOfOrder(v []RoomOutOfOrderType)`

SetOutOfOrder sets OutOfOrder field to given value.

### HasOutOfOrder

`func (o *RoomType) HasOutOfOrder() bool`

HasOutOfOrder returns a boolean if a field has been set.

### GetResvInfo

`func (o *RoomType) GetResvInfo() []ReservationShortInfoType`

GetResvInfo returns the ResvInfo field if non-nil, zero value otherwise.

### GetResvInfoOk

`func (o *RoomType) GetResvInfoOk() (*[]ReservationShortInfoType, bool)`

GetResvInfoOk returns a tuple with the ResvInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResvInfo

`func (o *RoomType) SetResvInfo(v []ReservationShortInfoType)`

SetResvInfo sets ResvInfo field to given value.

### HasResvInfo

`func (o *RoomType) HasResvInfo() bool`

HasResvInfo returns a boolean if a field has been set.

### GetRoomAssignmentRating

`func (o *RoomType) GetRoomAssignmentRating() RatePlanRatingType`

GetRoomAssignmentRating returns the RoomAssignmentRating field if non-nil, zero value otherwise.

### GetRoomAssignmentRatingOk

`func (o *RoomType) GetRoomAssignmentRatingOk() (*RatePlanRatingType, bool)`

GetRoomAssignmentRatingOk returns a tuple with the RoomAssignmentRating field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomAssignmentRating

`func (o *RoomType) SetRoomAssignmentRating(v RatePlanRatingType)`

SetRoomAssignmentRating sets RoomAssignmentRating field to given value.

### HasRoomAssignmentRating

`func (o *RoomType) HasRoomAssignmentRating() bool`

HasRoomAssignmentRating returns a boolean if a field has been set.

### GetRoomDescription

`func (o *RoomType) GetRoomDescription() string`

GetRoomDescription returns the RoomDescription field if non-nil, zero value otherwise.

### GetRoomDescriptionOk

`func (o *RoomType) GetRoomDescriptionOk() (*string, bool)`

GetRoomDescriptionOk returns a tuple with the RoomDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomDescription

`func (o *RoomType) SetRoomDescription(v string)`

SetRoomDescription sets RoomDescription field to given value.

### HasRoomDescription

`func (o *RoomType) HasRoomDescription() bool`

HasRoomDescription returns a boolean if a field has been set.

### GetRoomFeatures

`func (o *RoomType) GetRoomFeatures() []RoomFeatureType`

GetRoomFeatures returns the RoomFeatures field if non-nil, zero value otherwise.

### GetRoomFeaturesOk

`func (o *RoomType) GetRoomFeaturesOk() (*[]RoomFeatureType, bool)`

GetRoomFeaturesOk returns a tuple with the RoomFeatures field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomFeatures

`func (o *RoomType) SetRoomFeatures(v []RoomFeatureType)`

SetRoomFeatures sets RoomFeatures field to given value.

### HasRoomFeatures

`func (o *RoomType) HasRoomFeatures() bool`

HasRoomFeatures returns a boolean if a field has been set.

### GetRoomId

`func (o *RoomType) GetRoomId() string`

GetRoomId returns the RoomId field if non-nil, zero value otherwise.

### GetRoomIdOk

`func (o *RoomType) GetRoomIdOk() (*string, bool)`

GetRoomIdOk returns a tuple with the RoomId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomId

`func (o *RoomType) SetRoomId(v string)`

SetRoomId sets RoomId field to given value.

### HasRoomId

`func (o *RoomType) HasRoomId() bool`

HasRoomId returns a boolean if a field has been set.

### GetRoomSection

`func (o *RoomType) GetRoomSection() RoomSectionType`

GetRoomSection returns the RoomSection field if non-nil, zero value otherwise.

### GetRoomSectionOk

`func (o *RoomType) GetRoomSectionOk() (*RoomSectionType, bool)`

GetRoomSectionOk returns a tuple with the RoomSection field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomSection

`func (o *RoomType) SetRoomSection(v RoomSectionType)`

SetRoomSection sets RoomSection field to given value.

### HasRoomSection

`func (o *RoomType) HasRoomSection() bool`

HasRoomSection returns a boolean if a field has been set.

### GetRoomType

`func (o *RoomType) GetRoomType() RoomTypeShortInfoType`

GetRoomType returns the RoomType field if non-nil, zero value otherwise.

### GetRoomTypeOk

`func (o *RoomType) GetRoomTypeOk() (*RoomTypeShortInfoType, bool)`

GetRoomTypeOk returns a tuple with the RoomType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomType

`func (o *RoomType) SetRoomType(v RoomTypeShortInfoType)`

SetRoomType sets RoomType field to given value.

### HasRoomType

`func (o *RoomType) HasRoomType() bool`

HasRoomType returns a boolean if a field has been set.

### GetRotationRoomId

`func (o *RoomType) GetRotationRoomId() string`

GetRotationRoomId returns the RotationRoomId field if non-nil, zero value otherwise.

### GetRotationRoomIdOk

`func (o *RoomType) GetRotationRoomIdOk() (*string, bool)`

GetRotationRoomIdOk returns a tuple with the RotationRoomId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRotationRoomId

`func (o *RoomType) SetRotationRoomId(v string)`

SetRotationRoomId sets RotationRoomId field to given value.

### HasRotationRoomId

`func (o *RoomType) HasRotationRoomId() bool`

HasRotationRoomId returns a boolean if a field has been set.

### GetSitePlanSection

`func (o *RoomType) GetSitePlanSection() SitePlanSectionType`

GetSitePlanSection returns the SitePlanSection field if non-nil, zero value otherwise.

### GetSitePlanSectionOk

`func (o *RoomType) GetSitePlanSectionOk() (*SitePlanSectionType, bool)`

GetSitePlanSectionOk returns a tuple with the SitePlanSection field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSitePlanSection

`func (o *RoomType) SetSitePlanSection(v SitePlanSectionType)`

SetSitePlanSection sets SitePlanSection field to given value.

### HasSitePlanSection

`func (o *RoomType) HasSitePlanSection() bool`

HasSitePlanSection returns a boolean if a field has been set.

### GetSmokingPreference

`func (o *RoomType) GetSmokingPreference() string`

GetSmokingPreference returns the SmokingPreference field if non-nil, zero value otherwise.

### GetSmokingPreferenceOk

`func (o *RoomType) GetSmokingPreferenceOk() (*string, bool)`

GetSmokingPreferenceOk returns a tuple with the SmokingPreference field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSmokingPreference

`func (o *RoomType) SetSmokingPreference(v string)`

SetSmokingPreference sets SmokingPreference field to given value.

### HasSmokingPreference

`func (o *RoomType) HasSmokingPreference() bool`

HasSmokingPreference returns a boolean if a field has been set.

### GetSmokingPreferenceDescription

`func (o *RoomType) GetSmokingPreferenceDescription() string`

GetSmokingPreferenceDescription returns the SmokingPreferenceDescription field if non-nil, zero value otherwise.

### GetSmokingPreferenceDescriptionOk

`func (o *RoomType) GetSmokingPreferenceDescriptionOk() (*string, bool)`

GetSmokingPreferenceDescriptionOk returns a tuple with the SmokingPreferenceDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSmokingPreferenceDescription

`func (o *RoomType) SetSmokingPreferenceDescription(v string)`

SetSmokingPreferenceDescription sets SmokingPreferenceDescription field to given value.

### HasSmokingPreferenceDescription

`func (o *RoomType) HasSmokingPreferenceDescription() bool`

HasSmokingPreferenceDescription returns a boolean if a field has been set.

### GetTurndownInfo

`func (o *RoomType) GetTurndownInfo() TurndownInfoType`

GetTurndownInfo returns the TurndownInfo field if non-nil, zero value otherwise.

### GetTurndownInfoOk

`func (o *RoomType) GetTurndownInfoOk() (*TurndownInfoType, bool)`

GetTurndownInfoOk returns a tuple with the TurndownInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTurndownInfo

`func (o *RoomType) SetTurndownInfo(v TurndownInfoType)`

SetTurndownInfo sets TurndownInfo field to given value.

### HasTurndownInfo

`func (o *RoomType) HasTurndownInfo() bool`

HasTurndownInfo returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



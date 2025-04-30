# ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Offset** | Pointer to **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [optional] 
**Limit** | Pointer to **int32** | Indicates maximum number of records a Web Service should return. | [optional] 
**HotelId** | Pointer to **string** |  | [optional] 
**RoomStatusFilter** | Pointer to [**ReservationAutoRoomAssignRequestTypeRoomSelectionCriteriaRoomStatusFilter**](ReservationAutoRoomAssignRequestTypeRoomSelectionCriteriaRoomStatusFilter.md) |  | [optional] 
**RoomRange** | Pointer to [**RoomRangeType**](RoomRangeType.md) |  | [optional] 
**HotelRoomDateRange** | Pointer to [**TimeSpanType**](TimeSpanType.md) |  | [optional] 
**RoomTypes** | Pointer to **[]string** | The room types of hotel rooms to be fetched. | [optional] 
**RoomClass** | Pointer to **string** | The room class of hotel rooms to be fetched. | [optional] 
**Floor** | Pointer to **string** | The floor of room to be fetched. | [optional] 
**IncludeDueOut** | Pointer to **bool** | This flag when set to true will include rooms assigned to due out reservations. | [optional] 
**DepartureTime** | Pointer to **string** | When IncludeDueOut is enabled, it is the departure time before which to search. It will return rooms assigned to departing reservations that have an ETD (Estimated Time of Departure) before the entered time. | [optional] 
**RoomFeatures** | Pointer to [**[]RoomFeatureType**](RoomFeatureType.md) | A recurring element that identifies the room features. | [optional] 
**SmokingPreference** | Pointer to **string** | The smoking preference of room to be fetched. | [optional] 
**IncludeAllRoomConditions** | Pointer to **bool** | This flag when set to true will include all room conditions, when set to false then room with \&quot;General Assignment\&quot; condition type will be excluded from the result. | [optional] 
**IncludeComponentRooms** | Pointer to **bool** | This flag when set to true will include all component rooms | [optional] 
**IncludePseudoRooms** | Pointer to **bool** | This flag when set to true will include all pseudo rooms | [optional] 
**IncludeOORoomCheck** | Pointer to **bool** | This flag when set to true will work for Available Rooms functionality | [optional] 
**ConnectingRoomsOnly** | Pointer to **bool** | This flag when set to true will include only connecting rooms. | [optional] 
**ReservationId** | Pointer to [**ReservationId**](ReservationId.md) |  | [optional] 
**PseudoRoomsOnly** | Pointer to **bool** | This flag when set to true will include only pseudo rooms | [optional] 
**IncludeAttendentInRoom** | Pointer to **bool** | This flag when set to true will includes attendent in Rooms | [optional] 
**RoomNumberWildcard** | Pointer to **string** |  | [optional] 
**UseAIRoomAssignment** | Pointer to **bool** | If the AI ROOM ASSIGNMENT application parameter is set to Y, this flag when set to true will use the AI Room Assignment algorithm to fetch the results in order of suitability. | [optional] 
**IncludeDepartureRooms** | Pointer to **bool** | Indicates if departure rooms are to be included in the auto assignment. | [optional] 
**UseAssociatedProfilePreferences** | Pointer to **bool** | Indicates if preferences on the profile associated to the reservation should be used to determine the room type. The preferences for FLOOR, SMOKING and ROOM FEATURES will be used. | [optional] 
**ExcludeRoomFeatures** | Pointer to [**[]RoomFeatureType**](RoomFeatureType.md) | A recurring element that identifies the room features. | [optional] 
**ExcludeFloorPreferences** | Pointer to **[]string** | It indicates to exclude rooms with the selected Floor(s).It allows alphanumeric values(e.g.,01,02,03,GROUND,five) | [optional] 
**PerfectFitRoomsOnly** | Pointer to **bool** | When this flag is set to true, it will fetch only rooms that have exactly Y nights free with the reservation guest(s) points. This will prevent any gaps in room assignment. | [optional] 
**OrderBy** | Pointer to [**HotelRoomsOrderBy**](HotelRoomsOrderBy.md) |  | [optional] 
**UseETDandETA** | Pointer to **bool** | Indicates if the Estimated Time of Departure of the departing reservation and the Estimated Time of Arrival of the arriving reservation should be considered during the Auto Assign process. If true, rooms that would cause an overlap of the ETD/ETAs will not be assigned. An additional buffer (in Minutes) will also be considered if the value in the Auto Assign ETD - ETA Buffer OPERA Control is not blank. The default value is false, which will not consider the ETD/ETA when assigning rooms. | [optional] 
**ExcludeBackToBackReservations** | Pointer to **bool** | When this flag is set to true, it will exclude the linked reservations which are marked as Back to Back in the result.Marking reservations as Back to Back is available when the Back to Back Handling for Linked Reservations OPERA control is active. | [optional] 

## Methods

### NewReservationAutoRoomAssignRequestTypeRoomSelectionCriteria

`func NewReservationAutoRoomAssignRequestTypeRoomSelectionCriteria() *ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria`

NewReservationAutoRoomAssignRequestTypeRoomSelectionCriteria instantiates a new ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReservationAutoRoomAssignRequestTypeRoomSelectionCriteriaWithDefaults

`func NewReservationAutoRoomAssignRequestTypeRoomSelectionCriteriaWithDefaults() *ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria`

NewReservationAutoRoomAssignRequestTypeRoomSelectionCriteriaWithDefaults instantiates a new ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetOffset

`func (o *ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria) GetOffset() int32`

GetOffset returns the Offset field if non-nil, zero value otherwise.

### GetOffsetOk

`func (o *ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria) GetOffsetOk() (*int32, bool)`

GetOffsetOk returns a tuple with the Offset field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOffset

`func (o *ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria) SetOffset(v int32)`

SetOffset sets Offset field to given value.

### HasOffset

`func (o *ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria) HasOffset() bool`

HasOffset returns a boolean if a field has been set.

### GetLimit

`func (o *ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria) GetLimit() int32`

GetLimit returns the Limit field if non-nil, zero value otherwise.

### GetLimitOk

`func (o *ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria) GetLimitOk() (*int32, bool)`

GetLimitOk returns a tuple with the Limit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLimit

`func (o *ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria) SetLimit(v int32)`

SetLimit sets Limit field to given value.

### HasLimit

`func (o *ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria) HasLimit() bool`

HasLimit returns a boolean if a field has been set.

### GetHotelId

`func (o *ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetRoomStatusFilter

`func (o *ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria) GetRoomStatusFilter() ReservationAutoRoomAssignRequestTypeRoomSelectionCriteriaRoomStatusFilter`

GetRoomStatusFilter returns the RoomStatusFilter field if non-nil, zero value otherwise.

### GetRoomStatusFilterOk

`func (o *ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria) GetRoomStatusFilterOk() (*ReservationAutoRoomAssignRequestTypeRoomSelectionCriteriaRoomStatusFilter, bool)`

GetRoomStatusFilterOk returns a tuple with the RoomStatusFilter field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomStatusFilter

`func (o *ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria) SetRoomStatusFilter(v ReservationAutoRoomAssignRequestTypeRoomSelectionCriteriaRoomStatusFilter)`

SetRoomStatusFilter sets RoomStatusFilter field to given value.

### HasRoomStatusFilter

`func (o *ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria) HasRoomStatusFilter() bool`

HasRoomStatusFilter returns a boolean if a field has been set.

### GetRoomRange

`func (o *ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria) GetRoomRange() RoomRangeType`

GetRoomRange returns the RoomRange field if non-nil, zero value otherwise.

### GetRoomRangeOk

`func (o *ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria) GetRoomRangeOk() (*RoomRangeType, bool)`

GetRoomRangeOk returns a tuple with the RoomRange field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomRange

`func (o *ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria) SetRoomRange(v RoomRangeType)`

SetRoomRange sets RoomRange field to given value.

### HasRoomRange

`func (o *ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria) HasRoomRange() bool`

HasRoomRange returns a boolean if a field has been set.

### GetHotelRoomDateRange

`func (o *ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria) GetHotelRoomDateRange() TimeSpanType`

GetHotelRoomDateRange returns the HotelRoomDateRange field if non-nil, zero value otherwise.

### GetHotelRoomDateRangeOk

`func (o *ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria) GetHotelRoomDateRangeOk() (*TimeSpanType, bool)`

GetHotelRoomDateRangeOk returns a tuple with the HotelRoomDateRange field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelRoomDateRange

`func (o *ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria) SetHotelRoomDateRange(v TimeSpanType)`

SetHotelRoomDateRange sets HotelRoomDateRange field to given value.

### HasHotelRoomDateRange

`func (o *ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria) HasHotelRoomDateRange() bool`

HasHotelRoomDateRange returns a boolean if a field has been set.

### GetRoomTypes

`func (o *ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria) GetRoomTypes() []string`

GetRoomTypes returns the RoomTypes field if non-nil, zero value otherwise.

### GetRoomTypesOk

`func (o *ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria) GetRoomTypesOk() (*[]string, bool)`

GetRoomTypesOk returns a tuple with the RoomTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomTypes

`func (o *ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria) SetRoomTypes(v []string)`

SetRoomTypes sets RoomTypes field to given value.

### HasRoomTypes

`func (o *ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria) HasRoomTypes() bool`

HasRoomTypes returns a boolean if a field has been set.

### GetRoomClass

`func (o *ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria) GetRoomClass() string`

GetRoomClass returns the RoomClass field if non-nil, zero value otherwise.

### GetRoomClassOk

`func (o *ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria) GetRoomClassOk() (*string, bool)`

GetRoomClassOk returns a tuple with the RoomClass field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomClass

`func (o *ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria) SetRoomClass(v string)`

SetRoomClass sets RoomClass field to given value.

### HasRoomClass

`func (o *ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria) HasRoomClass() bool`

HasRoomClass returns a boolean if a field has been set.

### GetFloor

`func (o *ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria) GetFloor() string`

GetFloor returns the Floor field if non-nil, zero value otherwise.

### GetFloorOk

`func (o *ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria) GetFloorOk() (*string, bool)`

GetFloorOk returns a tuple with the Floor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFloor

`func (o *ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria) SetFloor(v string)`

SetFloor sets Floor field to given value.

### HasFloor

`func (o *ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria) HasFloor() bool`

HasFloor returns a boolean if a field has been set.

### GetIncludeDueOut

`func (o *ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria) GetIncludeDueOut() bool`

GetIncludeDueOut returns the IncludeDueOut field if non-nil, zero value otherwise.

### GetIncludeDueOutOk

`func (o *ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria) GetIncludeDueOutOk() (*bool, bool)`

GetIncludeDueOutOk returns a tuple with the IncludeDueOut field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncludeDueOut

`func (o *ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria) SetIncludeDueOut(v bool)`

SetIncludeDueOut sets IncludeDueOut field to given value.

### HasIncludeDueOut

`func (o *ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria) HasIncludeDueOut() bool`

HasIncludeDueOut returns a boolean if a field has been set.

### GetDepartureTime

`func (o *ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria) GetDepartureTime() string`

GetDepartureTime returns the DepartureTime field if non-nil, zero value otherwise.

### GetDepartureTimeOk

`func (o *ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria) GetDepartureTimeOk() (*string, bool)`

GetDepartureTimeOk returns a tuple with the DepartureTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDepartureTime

`func (o *ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria) SetDepartureTime(v string)`

SetDepartureTime sets DepartureTime field to given value.

### HasDepartureTime

`func (o *ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria) HasDepartureTime() bool`

HasDepartureTime returns a boolean if a field has been set.

### GetRoomFeatures

`func (o *ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria) GetRoomFeatures() []RoomFeatureType`

GetRoomFeatures returns the RoomFeatures field if non-nil, zero value otherwise.

### GetRoomFeaturesOk

`func (o *ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria) GetRoomFeaturesOk() (*[]RoomFeatureType, bool)`

GetRoomFeaturesOk returns a tuple with the RoomFeatures field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomFeatures

`func (o *ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria) SetRoomFeatures(v []RoomFeatureType)`

SetRoomFeatures sets RoomFeatures field to given value.

### HasRoomFeatures

`func (o *ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria) HasRoomFeatures() bool`

HasRoomFeatures returns a boolean if a field has been set.

### GetSmokingPreference

`func (o *ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria) GetSmokingPreference() string`

GetSmokingPreference returns the SmokingPreference field if non-nil, zero value otherwise.

### GetSmokingPreferenceOk

`func (o *ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria) GetSmokingPreferenceOk() (*string, bool)`

GetSmokingPreferenceOk returns a tuple with the SmokingPreference field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSmokingPreference

`func (o *ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria) SetSmokingPreference(v string)`

SetSmokingPreference sets SmokingPreference field to given value.

### HasSmokingPreference

`func (o *ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria) HasSmokingPreference() bool`

HasSmokingPreference returns a boolean if a field has been set.

### GetIncludeAllRoomConditions

`func (o *ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria) GetIncludeAllRoomConditions() bool`

GetIncludeAllRoomConditions returns the IncludeAllRoomConditions field if non-nil, zero value otherwise.

### GetIncludeAllRoomConditionsOk

`func (o *ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria) GetIncludeAllRoomConditionsOk() (*bool, bool)`

GetIncludeAllRoomConditionsOk returns a tuple with the IncludeAllRoomConditions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncludeAllRoomConditions

`func (o *ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria) SetIncludeAllRoomConditions(v bool)`

SetIncludeAllRoomConditions sets IncludeAllRoomConditions field to given value.

### HasIncludeAllRoomConditions

`func (o *ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria) HasIncludeAllRoomConditions() bool`

HasIncludeAllRoomConditions returns a boolean if a field has been set.

### GetIncludeComponentRooms

`func (o *ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria) GetIncludeComponentRooms() bool`

GetIncludeComponentRooms returns the IncludeComponentRooms field if non-nil, zero value otherwise.

### GetIncludeComponentRoomsOk

`func (o *ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria) GetIncludeComponentRoomsOk() (*bool, bool)`

GetIncludeComponentRoomsOk returns a tuple with the IncludeComponentRooms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncludeComponentRooms

`func (o *ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria) SetIncludeComponentRooms(v bool)`

SetIncludeComponentRooms sets IncludeComponentRooms field to given value.

### HasIncludeComponentRooms

`func (o *ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria) HasIncludeComponentRooms() bool`

HasIncludeComponentRooms returns a boolean if a field has been set.

### GetIncludePseudoRooms

`func (o *ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria) GetIncludePseudoRooms() bool`

GetIncludePseudoRooms returns the IncludePseudoRooms field if non-nil, zero value otherwise.

### GetIncludePseudoRoomsOk

`func (o *ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria) GetIncludePseudoRoomsOk() (*bool, bool)`

GetIncludePseudoRoomsOk returns a tuple with the IncludePseudoRooms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncludePseudoRooms

`func (o *ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria) SetIncludePseudoRooms(v bool)`

SetIncludePseudoRooms sets IncludePseudoRooms field to given value.

### HasIncludePseudoRooms

`func (o *ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria) HasIncludePseudoRooms() bool`

HasIncludePseudoRooms returns a boolean if a field has been set.

### GetIncludeOORoomCheck

`func (o *ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria) GetIncludeOORoomCheck() bool`

GetIncludeOORoomCheck returns the IncludeOORoomCheck field if non-nil, zero value otherwise.

### GetIncludeOORoomCheckOk

`func (o *ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria) GetIncludeOORoomCheckOk() (*bool, bool)`

GetIncludeOORoomCheckOk returns a tuple with the IncludeOORoomCheck field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncludeOORoomCheck

`func (o *ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria) SetIncludeOORoomCheck(v bool)`

SetIncludeOORoomCheck sets IncludeOORoomCheck field to given value.

### HasIncludeOORoomCheck

`func (o *ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria) HasIncludeOORoomCheck() bool`

HasIncludeOORoomCheck returns a boolean if a field has been set.

### GetConnectingRoomsOnly

`func (o *ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria) GetConnectingRoomsOnly() bool`

GetConnectingRoomsOnly returns the ConnectingRoomsOnly field if non-nil, zero value otherwise.

### GetConnectingRoomsOnlyOk

`func (o *ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria) GetConnectingRoomsOnlyOk() (*bool, bool)`

GetConnectingRoomsOnlyOk returns a tuple with the ConnectingRoomsOnly field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConnectingRoomsOnly

`func (o *ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria) SetConnectingRoomsOnly(v bool)`

SetConnectingRoomsOnly sets ConnectingRoomsOnly field to given value.

### HasConnectingRoomsOnly

`func (o *ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria) HasConnectingRoomsOnly() bool`

HasConnectingRoomsOnly returns a boolean if a field has been set.

### GetReservationId

`func (o *ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria) GetReservationId() ReservationId`

GetReservationId returns the ReservationId field if non-nil, zero value otherwise.

### GetReservationIdOk

`func (o *ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria) GetReservationIdOk() (*ReservationId, bool)`

GetReservationIdOk returns a tuple with the ReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationId

`func (o *ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria) SetReservationId(v ReservationId)`

SetReservationId sets ReservationId field to given value.

### HasReservationId

`func (o *ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria) HasReservationId() bool`

HasReservationId returns a boolean if a field has been set.

### GetPseudoRoomsOnly

`func (o *ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria) GetPseudoRoomsOnly() bool`

GetPseudoRoomsOnly returns the PseudoRoomsOnly field if non-nil, zero value otherwise.

### GetPseudoRoomsOnlyOk

`func (o *ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria) GetPseudoRoomsOnlyOk() (*bool, bool)`

GetPseudoRoomsOnlyOk returns a tuple with the PseudoRoomsOnly field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPseudoRoomsOnly

`func (o *ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria) SetPseudoRoomsOnly(v bool)`

SetPseudoRoomsOnly sets PseudoRoomsOnly field to given value.

### HasPseudoRoomsOnly

`func (o *ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria) HasPseudoRoomsOnly() bool`

HasPseudoRoomsOnly returns a boolean if a field has been set.

### GetIncludeAttendentInRoom

`func (o *ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria) GetIncludeAttendentInRoom() bool`

GetIncludeAttendentInRoom returns the IncludeAttendentInRoom field if non-nil, zero value otherwise.

### GetIncludeAttendentInRoomOk

`func (o *ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria) GetIncludeAttendentInRoomOk() (*bool, bool)`

GetIncludeAttendentInRoomOk returns a tuple with the IncludeAttendentInRoom field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncludeAttendentInRoom

`func (o *ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria) SetIncludeAttendentInRoom(v bool)`

SetIncludeAttendentInRoom sets IncludeAttendentInRoom field to given value.

### HasIncludeAttendentInRoom

`func (o *ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria) HasIncludeAttendentInRoom() bool`

HasIncludeAttendentInRoom returns a boolean if a field has been set.

### GetRoomNumberWildcard

`func (o *ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria) GetRoomNumberWildcard() string`

GetRoomNumberWildcard returns the RoomNumberWildcard field if non-nil, zero value otherwise.

### GetRoomNumberWildcardOk

`func (o *ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria) GetRoomNumberWildcardOk() (*string, bool)`

GetRoomNumberWildcardOk returns a tuple with the RoomNumberWildcard field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomNumberWildcard

`func (o *ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria) SetRoomNumberWildcard(v string)`

SetRoomNumberWildcard sets RoomNumberWildcard field to given value.

### HasRoomNumberWildcard

`func (o *ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria) HasRoomNumberWildcard() bool`

HasRoomNumberWildcard returns a boolean if a field has been set.

### GetUseAIRoomAssignment

`func (o *ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria) GetUseAIRoomAssignment() bool`

GetUseAIRoomAssignment returns the UseAIRoomAssignment field if non-nil, zero value otherwise.

### GetUseAIRoomAssignmentOk

`func (o *ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria) GetUseAIRoomAssignmentOk() (*bool, bool)`

GetUseAIRoomAssignmentOk returns a tuple with the UseAIRoomAssignment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUseAIRoomAssignment

`func (o *ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria) SetUseAIRoomAssignment(v bool)`

SetUseAIRoomAssignment sets UseAIRoomAssignment field to given value.

### HasUseAIRoomAssignment

`func (o *ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria) HasUseAIRoomAssignment() bool`

HasUseAIRoomAssignment returns a boolean if a field has been set.

### GetIncludeDepartureRooms

`func (o *ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria) GetIncludeDepartureRooms() bool`

GetIncludeDepartureRooms returns the IncludeDepartureRooms field if non-nil, zero value otherwise.

### GetIncludeDepartureRoomsOk

`func (o *ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria) GetIncludeDepartureRoomsOk() (*bool, bool)`

GetIncludeDepartureRoomsOk returns a tuple with the IncludeDepartureRooms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncludeDepartureRooms

`func (o *ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria) SetIncludeDepartureRooms(v bool)`

SetIncludeDepartureRooms sets IncludeDepartureRooms field to given value.

### HasIncludeDepartureRooms

`func (o *ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria) HasIncludeDepartureRooms() bool`

HasIncludeDepartureRooms returns a boolean if a field has been set.

### GetUseAssociatedProfilePreferences

`func (o *ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria) GetUseAssociatedProfilePreferences() bool`

GetUseAssociatedProfilePreferences returns the UseAssociatedProfilePreferences field if non-nil, zero value otherwise.

### GetUseAssociatedProfilePreferencesOk

`func (o *ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria) GetUseAssociatedProfilePreferencesOk() (*bool, bool)`

GetUseAssociatedProfilePreferencesOk returns a tuple with the UseAssociatedProfilePreferences field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUseAssociatedProfilePreferences

`func (o *ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria) SetUseAssociatedProfilePreferences(v bool)`

SetUseAssociatedProfilePreferences sets UseAssociatedProfilePreferences field to given value.

### HasUseAssociatedProfilePreferences

`func (o *ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria) HasUseAssociatedProfilePreferences() bool`

HasUseAssociatedProfilePreferences returns a boolean if a field has been set.

### GetExcludeRoomFeatures

`func (o *ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria) GetExcludeRoomFeatures() []RoomFeatureType`

GetExcludeRoomFeatures returns the ExcludeRoomFeatures field if non-nil, zero value otherwise.

### GetExcludeRoomFeaturesOk

`func (o *ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria) GetExcludeRoomFeaturesOk() (*[]RoomFeatureType, bool)`

GetExcludeRoomFeaturesOk returns a tuple with the ExcludeRoomFeatures field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExcludeRoomFeatures

`func (o *ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria) SetExcludeRoomFeatures(v []RoomFeatureType)`

SetExcludeRoomFeatures sets ExcludeRoomFeatures field to given value.

### HasExcludeRoomFeatures

`func (o *ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria) HasExcludeRoomFeatures() bool`

HasExcludeRoomFeatures returns a boolean if a field has been set.

### GetExcludeFloorPreferences

`func (o *ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria) GetExcludeFloorPreferences() []string`

GetExcludeFloorPreferences returns the ExcludeFloorPreferences field if non-nil, zero value otherwise.

### GetExcludeFloorPreferencesOk

`func (o *ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria) GetExcludeFloorPreferencesOk() (*[]string, bool)`

GetExcludeFloorPreferencesOk returns a tuple with the ExcludeFloorPreferences field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExcludeFloorPreferences

`func (o *ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria) SetExcludeFloorPreferences(v []string)`

SetExcludeFloorPreferences sets ExcludeFloorPreferences field to given value.

### HasExcludeFloorPreferences

`func (o *ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria) HasExcludeFloorPreferences() bool`

HasExcludeFloorPreferences returns a boolean if a field has been set.

### GetPerfectFitRoomsOnly

`func (o *ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria) GetPerfectFitRoomsOnly() bool`

GetPerfectFitRoomsOnly returns the PerfectFitRoomsOnly field if non-nil, zero value otherwise.

### GetPerfectFitRoomsOnlyOk

`func (o *ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria) GetPerfectFitRoomsOnlyOk() (*bool, bool)`

GetPerfectFitRoomsOnlyOk returns a tuple with the PerfectFitRoomsOnly field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPerfectFitRoomsOnly

`func (o *ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria) SetPerfectFitRoomsOnly(v bool)`

SetPerfectFitRoomsOnly sets PerfectFitRoomsOnly field to given value.

### HasPerfectFitRoomsOnly

`func (o *ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria) HasPerfectFitRoomsOnly() bool`

HasPerfectFitRoomsOnly returns a boolean if a field has been set.

### GetOrderBy

`func (o *ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria) GetOrderBy() HotelRoomsOrderBy`

GetOrderBy returns the OrderBy field if non-nil, zero value otherwise.

### GetOrderByOk

`func (o *ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria) GetOrderByOk() (*HotelRoomsOrderBy, bool)`

GetOrderByOk returns a tuple with the OrderBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrderBy

`func (o *ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria) SetOrderBy(v HotelRoomsOrderBy)`

SetOrderBy sets OrderBy field to given value.

### HasOrderBy

`func (o *ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria) HasOrderBy() bool`

HasOrderBy returns a boolean if a field has been set.

### GetUseETDandETA

`func (o *ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria) GetUseETDandETA() bool`

GetUseETDandETA returns the UseETDandETA field if non-nil, zero value otherwise.

### GetUseETDandETAOk

`func (o *ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria) GetUseETDandETAOk() (*bool, bool)`

GetUseETDandETAOk returns a tuple with the UseETDandETA field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUseETDandETA

`func (o *ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria) SetUseETDandETA(v bool)`

SetUseETDandETA sets UseETDandETA field to given value.

### HasUseETDandETA

`func (o *ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria) HasUseETDandETA() bool`

HasUseETDandETA returns a boolean if a field has been set.

### GetExcludeBackToBackReservations

`func (o *ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria) GetExcludeBackToBackReservations() bool`

GetExcludeBackToBackReservations returns the ExcludeBackToBackReservations field if non-nil, zero value otherwise.

### GetExcludeBackToBackReservationsOk

`func (o *ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria) GetExcludeBackToBackReservationsOk() (*bool, bool)`

GetExcludeBackToBackReservationsOk returns a tuple with the ExcludeBackToBackReservations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExcludeBackToBackReservations

`func (o *ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria) SetExcludeBackToBackReservations(v bool)`

SetExcludeBackToBackReservations sets ExcludeBackToBackReservations field to given value.

### HasExcludeBackToBackReservations

`func (o *ReservationAutoRoomAssignRequestTypeRoomSelectionCriteria) HasExcludeBackToBackReservations() bool`

HasExcludeBackToBackReservations returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



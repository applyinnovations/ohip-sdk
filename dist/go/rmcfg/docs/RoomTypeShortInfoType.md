# RoomTypeShortInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Pseudo** | Pointer to **bool** | Indicates if room is a pseudo. This is read-only. | [optional] 
**Suite** | Pointer to **bool** | Indicates if room is a suite. This is read-only. | [optional] 
**RoomClass** | Pointer to **string** | Room Class of the room. This is read-only. | [optional] 
**ShortDescription** | Pointer to **string** | Short Description of room type. | [optional] 
**HouseKeeping** | Pointer to **bool** | Indicates if room type of the room is flagged as housekeeping. This is read-only. | [optional] 
**SmokingPreference** | Pointer to **string** | Specifies the smoking preference for room type of the room. | [optional] 
**Building** | Pointer to **string** | Building associated with the room. | [optional] 
**RoomAssignmentRating** | Pointer to [**RatePlanRatingType**](RatePlanRatingType.md) |  | [optional] 
**MinimumOccupancy** | Pointer to **int32** | Minimum occupancy for the room type. | [optional] 
**MaximumOccupancy** | Pointer to **int32** | Maximum occupancy for the room type. | [optional] 
**RoomFeatures** | Pointer to [**[]RoomFeatureType**](RoomFeatureType.md) | A recurring element that identifies the room features. | [optional] 
**Accessible** | Pointer to **bool** | Indicates if room type is accessible. | [optional] 
**RoomType** | Pointer to **string** | Room type of the room. | [optional] 
**MeetingRoom** | Pointer to **bool** | Indicates whether function space can be meeting room. | [optional] 
**RoomStatus** | Pointer to **string** | Room Status of the room. | [optional] 
**ComponentRoomsInfo** | Pointer to [**[]ComponentRoomInfoType**](ComponentRoomInfoType.md) | This type holds information of Component Rooms attached to the Component Suite. | [optional] 
**ComponentSuitesInfo** | Pointer to [**[]ComponentSuiteInfoType**](ComponentSuiteInfoType.md) | This type holds information of Component Suites to which the Component Room is attached. | [optional] 

## Methods

### NewRoomTypeShortInfoType

`func NewRoomTypeShortInfoType() *RoomTypeShortInfoType`

NewRoomTypeShortInfoType instantiates a new RoomTypeShortInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoomTypeShortInfoTypeWithDefaults

`func NewRoomTypeShortInfoTypeWithDefaults() *RoomTypeShortInfoType`

NewRoomTypeShortInfoTypeWithDefaults instantiates a new RoomTypeShortInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPseudo

`func (o *RoomTypeShortInfoType) GetPseudo() bool`

GetPseudo returns the Pseudo field if non-nil, zero value otherwise.

### GetPseudoOk

`func (o *RoomTypeShortInfoType) GetPseudoOk() (*bool, bool)`

GetPseudoOk returns a tuple with the Pseudo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPseudo

`func (o *RoomTypeShortInfoType) SetPseudo(v bool)`

SetPseudo sets Pseudo field to given value.

### HasPseudo

`func (o *RoomTypeShortInfoType) HasPseudo() bool`

HasPseudo returns a boolean if a field has been set.

### GetSuite

`func (o *RoomTypeShortInfoType) GetSuite() bool`

GetSuite returns the Suite field if non-nil, zero value otherwise.

### GetSuiteOk

`func (o *RoomTypeShortInfoType) GetSuiteOk() (*bool, bool)`

GetSuiteOk returns a tuple with the Suite field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSuite

`func (o *RoomTypeShortInfoType) SetSuite(v bool)`

SetSuite sets Suite field to given value.

### HasSuite

`func (o *RoomTypeShortInfoType) HasSuite() bool`

HasSuite returns a boolean if a field has been set.

### GetRoomClass

`func (o *RoomTypeShortInfoType) GetRoomClass() string`

GetRoomClass returns the RoomClass field if non-nil, zero value otherwise.

### GetRoomClassOk

`func (o *RoomTypeShortInfoType) GetRoomClassOk() (*string, bool)`

GetRoomClassOk returns a tuple with the RoomClass field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomClass

`func (o *RoomTypeShortInfoType) SetRoomClass(v string)`

SetRoomClass sets RoomClass field to given value.

### HasRoomClass

`func (o *RoomTypeShortInfoType) HasRoomClass() bool`

HasRoomClass returns a boolean if a field has been set.

### GetShortDescription

`func (o *RoomTypeShortInfoType) GetShortDescription() string`

GetShortDescription returns the ShortDescription field if non-nil, zero value otherwise.

### GetShortDescriptionOk

`func (o *RoomTypeShortInfoType) GetShortDescriptionOk() (*string, bool)`

GetShortDescriptionOk returns a tuple with the ShortDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShortDescription

`func (o *RoomTypeShortInfoType) SetShortDescription(v string)`

SetShortDescription sets ShortDescription field to given value.

### HasShortDescription

`func (o *RoomTypeShortInfoType) HasShortDescription() bool`

HasShortDescription returns a boolean if a field has been set.

### GetHouseKeeping

`func (o *RoomTypeShortInfoType) GetHouseKeeping() bool`

GetHouseKeeping returns the HouseKeeping field if non-nil, zero value otherwise.

### GetHouseKeepingOk

`func (o *RoomTypeShortInfoType) GetHouseKeepingOk() (*bool, bool)`

GetHouseKeepingOk returns a tuple with the HouseKeeping field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHouseKeeping

`func (o *RoomTypeShortInfoType) SetHouseKeeping(v bool)`

SetHouseKeeping sets HouseKeeping field to given value.

### HasHouseKeeping

`func (o *RoomTypeShortInfoType) HasHouseKeeping() bool`

HasHouseKeeping returns a boolean if a field has been set.

### GetSmokingPreference

`func (o *RoomTypeShortInfoType) GetSmokingPreference() string`

GetSmokingPreference returns the SmokingPreference field if non-nil, zero value otherwise.

### GetSmokingPreferenceOk

`func (o *RoomTypeShortInfoType) GetSmokingPreferenceOk() (*string, bool)`

GetSmokingPreferenceOk returns a tuple with the SmokingPreference field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSmokingPreference

`func (o *RoomTypeShortInfoType) SetSmokingPreference(v string)`

SetSmokingPreference sets SmokingPreference field to given value.

### HasSmokingPreference

`func (o *RoomTypeShortInfoType) HasSmokingPreference() bool`

HasSmokingPreference returns a boolean if a field has been set.

### GetBuilding

`func (o *RoomTypeShortInfoType) GetBuilding() string`

GetBuilding returns the Building field if non-nil, zero value otherwise.

### GetBuildingOk

`func (o *RoomTypeShortInfoType) GetBuildingOk() (*string, bool)`

GetBuildingOk returns a tuple with the Building field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBuilding

`func (o *RoomTypeShortInfoType) SetBuilding(v string)`

SetBuilding sets Building field to given value.

### HasBuilding

`func (o *RoomTypeShortInfoType) HasBuilding() bool`

HasBuilding returns a boolean if a field has been set.

### GetRoomAssignmentRating

`func (o *RoomTypeShortInfoType) GetRoomAssignmentRating() RatePlanRatingType`

GetRoomAssignmentRating returns the RoomAssignmentRating field if non-nil, zero value otherwise.

### GetRoomAssignmentRatingOk

`func (o *RoomTypeShortInfoType) GetRoomAssignmentRatingOk() (*RatePlanRatingType, bool)`

GetRoomAssignmentRatingOk returns a tuple with the RoomAssignmentRating field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomAssignmentRating

`func (o *RoomTypeShortInfoType) SetRoomAssignmentRating(v RatePlanRatingType)`

SetRoomAssignmentRating sets RoomAssignmentRating field to given value.

### HasRoomAssignmentRating

`func (o *RoomTypeShortInfoType) HasRoomAssignmentRating() bool`

HasRoomAssignmentRating returns a boolean if a field has been set.

### GetMinimumOccupancy

`func (o *RoomTypeShortInfoType) GetMinimumOccupancy() int32`

GetMinimumOccupancy returns the MinimumOccupancy field if non-nil, zero value otherwise.

### GetMinimumOccupancyOk

`func (o *RoomTypeShortInfoType) GetMinimumOccupancyOk() (*int32, bool)`

GetMinimumOccupancyOk returns a tuple with the MinimumOccupancy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMinimumOccupancy

`func (o *RoomTypeShortInfoType) SetMinimumOccupancy(v int32)`

SetMinimumOccupancy sets MinimumOccupancy field to given value.

### HasMinimumOccupancy

`func (o *RoomTypeShortInfoType) HasMinimumOccupancy() bool`

HasMinimumOccupancy returns a boolean if a field has been set.

### GetMaximumOccupancy

`func (o *RoomTypeShortInfoType) GetMaximumOccupancy() int32`

GetMaximumOccupancy returns the MaximumOccupancy field if non-nil, zero value otherwise.

### GetMaximumOccupancyOk

`func (o *RoomTypeShortInfoType) GetMaximumOccupancyOk() (*int32, bool)`

GetMaximumOccupancyOk returns a tuple with the MaximumOccupancy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaximumOccupancy

`func (o *RoomTypeShortInfoType) SetMaximumOccupancy(v int32)`

SetMaximumOccupancy sets MaximumOccupancy field to given value.

### HasMaximumOccupancy

`func (o *RoomTypeShortInfoType) HasMaximumOccupancy() bool`

HasMaximumOccupancy returns a boolean if a field has been set.

### GetRoomFeatures

`func (o *RoomTypeShortInfoType) GetRoomFeatures() []RoomFeatureType`

GetRoomFeatures returns the RoomFeatures field if non-nil, zero value otherwise.

### GetRoomFeaturesOk

`func (o *RoomTypeShortInfoType) GetRoomFeaturesOk() (*[]RoomFeatureType, bool)`

GetRoomFeaturesOk returns a tuple with the RoomFeatures field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomFeatures

`func (o *RoomTypeShortInfoType) SetRoomFeatures(v []RoomFeatureType)`

SetRoomFeatures sets RoomFeatures field to given value.

### HasRoomFeatures

`func (o *RoomTypeShortInfoType) HasRoomFeatures() bool`

HasRoomFeatures returns a boolean if a field has been set.

### GetAccessible

`func (o *RoomTypeShortInfoType) GetAccessible() bool`

GetAccessible returns the Accessible field if non-nil, zero value otherwise.

### GetAccessibleOk

`func (o *RoomTypeShortInfoType) GetAccessibleOk() (*bool, bool)`

GetAccessibleOk returns a tuple with the Accessible field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessible

`func (o *RoomTypeShortInfoType) SetAccessible(v bool)`

SetAccessible sets Accessible field to given value.

### HasAccessible

`func (o *RoomTypeShortInfoType) HasAccessible() bool`

HasAccessible returns a boolean if a field has been set.

### GetRoomType

`func (o *RoomTypeShortInfoType) GetRoomType() string`

GetRoomType returns the RoomType field if non-nil, zero value otherwise.

### GetRoomTypeOk

`func (o *RoomTypeShortInfoType) GetRoomTypeOk() (*string, bool)`

GetRoomTypeOk returns a tuple with the RoomType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomType

`func (o *RoomTypeShortInfoType) SetRoomType(v string)`

SetRoomType sets RoomType field to given value.

### HasRoomType

`func (o *RoomTypeShortInfoType) HasRoomType() bool`

HasRoomType returns a boolean if a field has been set.

### GetMeetingRoom

`func (o *RoomTypeShortInfoType) GetMeetingRoom() bool`

GetMeetingRoom returns the MeetingRoom field if non-nil, zero value otherwise.

### GetMeetingRoomOk

`func (o *RoomTypeShortInfoType) GetMeetingRoomOk() (*bool, bool)`

GetMeetingRoomOk returns a tuple with the MeetingRoom field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMeetingRoom

`func (o *RoomTypeShortInfoType) SetMeetingRoom(v bool)`

SetMeetingRoom sets MeetingRoom field to given value.

### HasMeetingRoom

`func (o *RoomTypeShortInfoType) HasMeetingRoom() bool`

HasMeetingRoom returns a boolean if a field has been set.

### GetRoomStatus

`func (o *RoomTypeShortInfoType) GetRoomStatus() string`

GetRoomStatus returns the RoomStatus field if non-nil, zero value otherwise.

### GetRoomStatusOk

`func (o *RoomTypeShortInfoType) GetRoomStatusOk() (*string, bool)`

GetRoomStatusOk returns a tuple with the RoomStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomStatus

`func (o *RoomTypeShortInfoType) SetRoomStatus(v string)`

SetRoomStatus sets RoomStatus field to given value.

### HasRoomStatus

`func (o *RoomTypeShortInfoType) HasRoomStatus() bool`

HasRoomStatus returns a boolean if a field has been set.

### GetComponentRoomsInfo

`func (o *RoomTypeShortInfoType) GetComponentRoomsInfo() []ComponentRoomInfoType`

GetComponentRoomsInfo returns the ComponentRoomsInfo field if non-nil, zero value otherwise.

### GetComponentRoomsInfoOk

`func (o *RoomTypeShortInfoType) GetComponentRoomsInfoOk() (*[]ComponentRoomInfoType, bool)`

GetComponentRoomsInfoOk returns a tuple with the ComponentRoomsInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComponentRoomsInfo

`func (o *RoomTypeShortInfoType) SetComponentRoomsInfo(v []ComponentRoomInfoType)`

SetComponentRoomsInfo sets ComponentRoomsInfo field to given value.

### HasComponentRoomsInfo

`func (o *RoomTypeShortInfoType) HasComponentRoomsInfo() bool`

HasComponentRoomsInfo returns a boolean if a field has been set.

### GetComponentSuitesInfo

`func (o *RoomTypeShortInfoType) GetComponentSuitesInfo() []ComponentSuiteInfoType`

GetComponentSuitesInfo returns the ComponentSuitesInfo field if non-nil, zero value otherwise.

### GetComponentSuitesInfoOk

`func (o *RoomTypeShortInfoType) GetComponentSuitesInfoOk() (*[]ComponentSuiteInfoType, bool)`

GetComponentSuitesInfoOk returns a tuple with the ComponentSuitesInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComponentSuitesInfo

`func (o *RoomTypeShortInfoType) SetComponentSuitesInfo(v []ComponentSuiteInfoType)`

SetComponentSuitesInfo sets ComponentSuitesInfo field to given value.

### HasComponentSuitesInfo

`func (o *RoomTypeShortInfoType) HasComponentSuitesInfo() bool`

HasComponentSuitesInfo returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



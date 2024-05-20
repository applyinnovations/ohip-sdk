# RoomTypeShortInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HouseKeeping** | Pointer to **bool** | Indicates if room type of the room is flagged as housekeeping. This is read-only. | [optional] 
**IsAccessible** | Pointer to **bool** | Indicates if room type is isAccessible. | [optional] 
**IsSuiteRoom** | Pointer to **bool** | Indicates if room is a isSuiteRoom. This is read-only. | [optional] 
**MaximumOccupancy** | Pointer to **int32** | Maximum occupancy for the room type. | [optional] 
**MeetingRoom** | Pointer to **bool** | Indicates whether function space can be meeting room. | [optional] 
**MinimumOccupancy** | Pointer to **int32** | Minimum occupancy for the room type. | [optional] 
**PseudoRoom** | Pointer to **bool** | Indicates if room is a pseudoRoom. This is read-only. | [optional] 
**RoomClass** | Pointer to **string** | Room Class of the room. This is read-only. | [optional] 
**RoomFeatures** | Pointer to [**[]RoomFeatureType**](RoomFeatureType.md) | A recurring element that identifies the room features. | [optional] 
**RoomType** | Pointer to **string** | Room type of the room. | [optional] 
**ShortDescription** | Pointer to **string** | Short Description of room type. | [optional] 
**SmokingPreference** | Pointer to **string** | Specifies the smoking preference for room type of the room. | [optional] 

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

### GetIsAccessible

`func (o *RoomTypeShortInfoType) GetIsAccessible() bool`

GetIsAccessible returns the IsAccessible field if non-nil, zero value otherwise.

### GetIsAccessibleOk

`func (o *RoomTypeShortInfoType) GetIsAccessibleOk() (*bool, bool)`

GetIsAccessibleOk returns a tuple with the IsAccessible field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsAccessible

`func (o *RoomTypeShortInfoType) SetIsAccessible(v bool)`

SetIsAccessible sets IsAccessible field to given value.

### HasIsAccessible

`func (o *RoomTypeShortInfoType) HasIsAccessible() bool`

HasIsAccessible returns a boolean if a field has been set.

### GetIsSuiteRoom

`func (o *RoomTypeShortInfoType) GetIsSuiteRoom() bool`

GetIsSuiteRoom returns the IsSuiteRoom field if non-nil, zero value otherwise.

### GetIsSuiteRoomOk

`func (o *RoomTypeShortInfoType) GetIsSuiteRoomOk() (*bool, bool)`

GetIsSuiteRoomOk returns a tuple with the IsSuiteRoom field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsSuiteRoom

`func (o *RoomTypeShortInfoType) SetIsSuiteRoom(v bool)`

SetIsSuiteRoom sets IsSuiteRoom field to given value.

### HasIsSuiteRoom

`func (o *RoomTypeShortInfoType) HasIsSuiteRoom() bool`

HasIsSuiteRoom returns a boolean if a field has been set.

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

### GetPseudoRoom

`func (o *RoomTypeShortInfoType) GetPseudoRoom() bool`

GetPseudoRoom returns the PseudoRoom field if non-nil, zero value otherwise.

### GetPseudoRoomOk

`func (o *RoomTypeShortInfoType) GetPseudoRoomOk() (*bool, bool)`

GetPseudoRoomOk returns a tuple with the PseudoRoom field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPseudoRoom

`func (o *RoomTypeShortInfoType) SetPseudoRoom(v bool)`

SetPseudoRoom sets PseudoRoom field to given value.

### HasPseudoRoom

`func (o *RoomTypeShortInfoType) HasPseudoRoom() bool`

HasPseudoRoom returns a boolean if a field has been set.

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


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



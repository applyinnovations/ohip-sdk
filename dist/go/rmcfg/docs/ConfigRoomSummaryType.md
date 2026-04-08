# ConfigRoomSummaryType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RoomType** | Pointer to [**RoomTypeShortInfoType**](RoomTypeShortInfoType.md) |  | [optional] 
**OwnerRoom** | Pointer to **bool** | This indicates if room is marked as a owner room. This information is used when Room Rotation OPERA control is active. | [optional] 
**UnitGradeCode** | Pointer to **string** | The Unit Grade Code attached to the room. This information is used when Room Rotation OPERA control is active. | [optional] 
**UnitGradeCodeDescription** | Pointer to **string** | The Unit Grade Code Description describes the unit grade code attached to the room. This information is used when Room Rotation OPERA control is active. | [optional] 
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
**MaximumOccupancy** | Pointer to **int32** | Maximum occupancy for the room type. | [optional] 
**SquareUnits** | Pointer to **float32** | Square units of a room. | [optional] 
**SquareUnitsMeasurement** | Pointer to **string** | Square unit measurement of a room. | [optional] 
**RoomComponents** | Pointer to [**[]RoomComponentType**](RoomComponentType.md) | Component of a room. | [optional] 
**ConnectingRooms** | Pointer to [**[]RoomRoomType**](RoomRoomType.md) | Collection of rooms. | [optional] 
**SellSequence** | Pointer to **float32** | Display sequence of a room. | [optional] 

## Methods

### NewConfigRoomSummaryType

`func NewConfigRoomSummaryType() *ConfigRoomSummaryType`

NewConfigRoomSummaryType instantiates a new ConfigRoomSummaryType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewConfigRoomSummaryTypeWithDefaults

`func NewConfigRoomSummaryTypeWithDefaults() *ConfigRoomSummaryType`

NewConfigRoomSummaryTypeWithDefaults instantiates a new ConfigRoomSummaryType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRoomType

`func (o *ConfigRoomSummaryType) GetRoomType() RoomTypeShortInfoType`

GetRoomType returns the RoomType field if non-nil, zero value otherwise.

### GetRoomTypeOk

`func (o *ConfigRoomSummaryType) GetRoomTypeOk() (*RoomTypeShortInfoType, bool)`

GetRoomTypeOk returns a tuple with the RoomType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomType

`func (o *ConfigRoomSummaryType) SetRoomType(v RoomTypeShortInfoType)`

SetRoomType sets RoomType field to given value.

### HasRoomType

`func (o *ConfigRoomSummaryType) HasRoomType() bool`

HasRoomType returns a boolean if a field has been set.

### GetOwnerRoom

`func (o *ConfigRoomSummaryType) GetOwnerRoom() bool`

GetOwnerRoom returns the OwnerRoom field if non-nil, zero value otherwise.

### GetOwnerRoomOk

`func (o *ConfigRoomSummaryType) GetOwnerRoomOk() (*bool, bool)`

GetOwnerRoomOk returns a tuple with the OwnerRoom field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwnerRoom

`func (o *ConfigRoomSummaryType) SetOwnerRoom(v bool)`

SetOwnerRoom sets OwnerRoom field to given value.

### HasOwnerRoom

`func (o *ConfigRoomSummaryType) HasOwnerRoom() bool`

HasOwnerRoom returns a boolean if a field has been set.

### GetUnitGradeCode

`func (o *ConfigRoomSummaryType) GetUnitGradeCode() string`

GetUnitGradeCode returns the UnitGradeCode field if non-nil, zero value otherwise.

### GetUnitGradeCodeOk

`func (o *ConfigRoomSummaryType) GetUnitGradeCodeOk() (*string, bool)`

GetUnitGradeCodeOk returns a tuple with the UnitGradeCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUnitGradeCode

`func (o *ConfigRoomSummaryType) SetUnitGradeCode(v string)`

SetUnitGradeCode sets UnitGradeCode field to given value.

### HasUnitGradeCode

`func (o *ConfigRoomSummaryType) HasUnitGradeCode() bool`

HasUnitGradeCode returns a boolean if a field has been set.

### GetUnitGradeCodeDescription

`func (o *ConfigRoomSummaryType) GetUnitGradeCodeDescription() string`

GetUnitGradeCodeDescription returns the UnitGradeCodeDescription field if non-nil, zero value otherwise.

### GetUnitGradeCodeDescriptionOk

`func (o *ConfigRoomSummaryType) GetUnitGradeCodeDescriptionOk() (*string, bool)`

GetUnitGradeCodeDescriptionOk returns a tuple with the UnitGradeCodeDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUnitGradeCodeDescription

`func (o *ConfigRoomSummaryType) SetUnitGradeCodeDescription(v string)`

SetUnitGradeCodeDescription sets UnitGradeCodeDescription field to given value.

### HasUnitGradeCodeDescription

`func (o *ConfigRoomSummaryType) HasUnitGradeCodeDescription() bool`

HasUnitGradeCodeDescription returns a boolean if a field has been set.

### GetFloor

`func (o *ConfigRoomSummaryType) GetFloor() string`

GetFloor returns the Floor field if non-nil, zero value otherwise.

### GetFloorOk

`func (o *ConfigRoomSummaryType) GetFloorOk() (*string, bool)`

GetFloorOk returns a tuple with the Floor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFloor

`func (o *ConfigRoomSummaryType) SetFloor(v string)`

SetFloor sets Floor field to given value.

### HasFloor

`func (o *ConfigRoomSummaryType) HasFloor() bool`

HasFloor returns a boolean if a field has been set.

### GetFloorDescription

`func (o *ConfigRoomSummaryType) GetFloorDescription() string`

GetFloorDescription returns the FloorDescription field if non-nil, zero value otherwise.

### GetFloorDescriptionOk

`func (o *ConfigRoomSummaryType) GetFloorDescriptionOk() (*string, bool)`

GetFloorDescriptionOk returns a tuple with the FloorDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFloorDescription

`func (o *ConfigRoomSummaryType) SetFloorDescription(v string)`

SetFloorDescription sets FloorDescription field to given value.

### HasFloorDescription

`func (o *ConfigRoomSummaryType) HasFloorDescription() bool`

HasFloorDescription returns a boolean if a field has been set.

### GetRoomFeatures

`func (o *ConfigRoomSummaryType) GetRoomFeatures() []RoomFeatureType`

GetRoomFeatures returns the RoomFeatures field if non-nil, zero value otherwise.

### GetRoomFeaturesOk

`func (o *ConfigRoomSummaryType) GetRoomFeaturesOk() (*[]RoomFeatureType, bool)`

GetRoomFeaturesOk returns a tuple with the RoomFeatures field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomFeatures

`func (o *ConfigRoomSummaryType) SetRoomFeatures(v []RoomFeatureType)`

SetRoomFeatures sets RoomFeatures field to given value.

### HasRoomFeatures

`func (o *ConfigRoomSummaryType) HasRoomFeatures() bool`

HasRoomFeatures returns a boolean if a field has been set.

### GetRoomDescription

`func (o *ConfigRoomSummaryType) GetRoomDescription() string`

GetRoomDescription returns the RoomDescription field if non-nil, zero value otherwise.

### GetRoomDescriptionOk

`func (o *ConfigRoomSummaryType) GetRoomDescriptionOk() (*string, bool)`

GetRoomDescriptionOk returns a tuple with the RoomDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomDescription

`func (o *ConfigRoomSummaryType) SetRoomDescription(v string)`

SetRoomDescription sets RoomDescription field to given value.

### HasRoomDescription

`func (o *ConfigRoomSummaryType) HasRoomDescription() bool`

HasRoomDescription returns a boolean if a field has been set.

### GetDescription

`func (o *ConfigRoomSummaryType) GetDescription() TranslationTextType2000`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *ConfigRoomSummaryType) GetDescriptionOk() (*TranslationTextType2000, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *ConfigRoomSummaryType) SetDescription(v TranslationTextType2000)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *ConfigRoomSummaryType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetSmokingPreference

`func (o *ConfigRoomSummaryType) GetSmokingPreference() string`

GetSmokingPreference returns the SmokingPreference field if non-nil, zero value otherwise.

### GetSmokingPreferenceOk

`func (o *ConfigRoomSummaryType) GetSmokingPreferenceOk() (*string, bool)`

GetSmokingPreferenceOk returns a tuple with the SmokingPreference field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSmokingPreference

`func (o *ConfigRoomSummaryType) SetSmokingPreference(v string)`

SetSmokingPreference sets SmokingPreference field to given value.

### HasSmokingPreference

`func (o *ConfigRoomSummaryType) HasSmokingPreference() bool`

HasSmokingPreference returns a boolean if a field has been set.

### GetSmokingPreferenceDescription

`func (o *ConfigRoomSummaryType) GetSmokingPreferenceDescription() string`

GetSmokingPreferenceDescription returns the SmokingPreferenceDescription field if non-nil, zero value otherwise.

### GetSmokingPreferenceDescriptionOk

`func (o *ConfigRoomSummaryType) GetSmokingPreferenceDescriptionOk() (*string, bool)`

GetSmokingPreferenceDescriptionOk returns a tuple with the SmokingPreferenceDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSmokingPreferenceDescription

`func (o *ConfigRoomSummaryType) SetSmokingPreferenceDescription(v string)`

SetSmokingPreferenceDescription sets SmokingPreferenceDescription field to given value.

### HasSmokingPreferenceDescription

`func (o *ConfigRoomSummaryType) HasSmokingPreferenceDescription() bool`

HasSmokingPreferenceDescription returns a boolean if a field has been set.

### GetBuilding

`func (o *ConfigRoomSummaryType) GetBuilding() string`

GetBuilding returns the Building field if non-nil, zero value otherwise.

### GetBuildingOk

`func (o *ConfigRoomSummaryType) GetBuildingOk() (*string, bool)`

GetBuildingOk returns a tuple with the Building field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBuilding

`func (o *ConfigRoomSummaryType) SetBuilding(v string)`

SetBuilding sets Building field to given value.

### HasBuilding

`func (o *ConfigRoomSummaryType) HasBuilding() bool`

HasBuilding returns a boolean if a field has been set.

### GetRoomAssignmentRating

`func (o *ConfigRoomSummaryType) GetRoomAssignmentRating() RatePlanRatingType`

GetRoomAssignmentRating returns the RoomAssignmentRating field if non-nil, zero value otherwise.

### GetRoomAssignmentRatingOk

`func (o *ConfigRoomSummaryType) GetRoomAssignmentRatingOk() (*RatePlanRatingType, bool)`

GetRoomAssignmentRatingOk returns a tuple with the RoomAssignmentRating field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomAssignmentRating

`func (o *ConfigRoomSummaryType) SetRoomAssignmentRating(v RatePlanRatingType)`

SetRoomAssignmentRating sets RoomAssignmentRating field to given value.

### HasRoomAssignmentRating

`func (o *ConfigRoomSummaryType) HasRoomAssignmentRating() bool`

HasRoomAssignmentRating returns a boolean if a field has been set.

### GetAccessible

`func (o *ConfigRoomSummaryType) GetAccessible() bool`

GetAccessible returns the Accessible field if non-nil, zero value otherwise.

### GetAccessibleOk

`func (o *ConfigRoomSummaryType) GetAccessibleOk() (*bool, bool)`

GetAccessibleOk returns a tuple with the Accessible field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessible

`func (o *ConfigRoomSummaryType) SetAccessible(v bool)`

SetAccessible sets Accessible field to given value.

### HasAccessible

`func (o *ConfigRoomSummaryType) HasAccessible() bool`

HasAccessible returns a boolean if a field has been set.

### GetRoomId

`func (o *ConfigRoomSummaryType) GetRoomId() string`

GetRoomId returns the RoomId field if non-nil, zero value otherwise.

### GetRoomIdOk

`func (o *ConfigRoomSummaryType) GetRoomIdOk() (*string, bool)`

GetRoomIdOk returns a tuple with the RoomId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomId

`func (o *ConfigRoomSummaryType) SetRoomId(v string)`

SetRoomId sets RoomId field to given value.

### HasRoomId

`func (o *ConfigRoomSummaryType) HasRoomId() bool`

HasRoomId returns a boolean if a field has been set.

### GetMeetingRoom

`func (o *ConfigRoomSummaryType) GetMeetingRoom() bool`

GetMeetingRoom returns the MeetingRoom field if non-nil, zero value otherwise.

### GetMeetingRoomOk

`func (o *ConfigRoomSummaryType) GetMeetingRoomOk() (*bool, bool)`

GetMeetingRoomOk returns a tuple with the MeetingRoom field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMeetingRoom

`func (o *ConfigRoomSummaryType) SetMeetingRoom(v bool)`

SetMeetingRoom sets MeetingRoom field to given value.

### HasMeetingRoom

`func (o *ConfigRoomSummaryType) HasMeetingRoom() bool`

HasMeetingRoom returns a boolean if a field has been set.

### GetMaximumOccupancy

`func (o *ConfigRoomSummaryType) GetMaximumOccupancy() int32`

GetMaximumOccupancy returns the MaximumOccupancy field if non-nil, zero value otherwise.

### GetMaximumOccupancyOk

`func (o *ConfigRoomSummaryType) GetMaximumOccupancyOk() (*int32, bool)`

GetMaximumOccupancyOk returns a tuple with the MaximumOccupancy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaximumOccupancy

`func (o *ConfigRoomSummaryType) SetMaximumOccupancy(v int32)`

SetMaximumOccupancy sets MaximumOccupancy field to given value.

### HasMaximumOccupancy

`func (o *ConfigRoomSummaryType) HasMaximumOccupancy() bool`

HasMaximumOccupancy returns a boolean if a field has been set.

### GetSquareUnits

`func (o *ConfigRoomSummaryType) GetSquareUnits() float32`

GetSquareUnits returns the SquareUnits field if non-nil, zero value otherwise.

### GetSquareUnitsOk

`func (o *ConfigRoomSummaryType) GetSquareUnitsOk() (*float32, bool)`

GetSquareUnitsOk returns a tuple with the SquareUnits field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSquareUnits

`func (o *ConfigRoomSummaryType) SetSquareUnits(v float32)`

SetSquareUnits sets SquareUnits field to given value.

### HasSquareUnits

`func (o *ConfigRoomSummaryType) HasSquareUnits() bool`

HasSquareUnits returns a boolean if a field has been set.

### GetSquareUnitsMeasurement

`func (o *ConfigRoomSummaryType) GetSquareUnitsMeasurement() string`

GetSquareUnitsMeasurement returns the SquareUnitsMeasurement field if non-nil, zero value otherwise.

### GetSquareUnitsMeasurementOk

`func (o *ConfigRoomSummaryType) GetSquareUnitsMeasurementOk() (*string, bool)`

GetSquareUnitsMeasurementOk returns a tuple with the SquareUnitsMeasurement field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSquareUnitsMeasurement

`func (o *ConfigRoomSummaryType) SetSquareUnitsMeasurement(v string)`

SetSquareUnitsMeasurement sets SquareUnitsMeasurement field to given value.

### HasSquareUnitsMeasurement

`func (o *ConfigRoomSummaryType) HasSquareUnitsMeasurement() bool`

HasSquareUnitsMeasurement returns a boolean if a field has been set.

### GetRoomComponents

`func (o *ConfigRoomSummaryType) GetRoomComponents() []RoomComponentType`

GetRoomComponents returns the RoomComponents field if non-nil, zero value otherwise.

### GetRoomComponentsOk

`func (o *ConfigRoomSummaryType) GetRoomComponentsOk() (*[]RoomComponentType, bool)`

GetRoomComponentsOk returns a tuple with the RoomComponents field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomComponents

`func (o *ConfigRoomSummaryType) SetRoomComponents(v []RoomComponentType)`

SetRoomComponents sets RoomComponents field to given value.

### HasRoomComponents

`func (o *ConfigRoomSummaryType) HasRoomComponents() bool`

HasRoomComponents returns a boolean if a field has been set.

### GetConnectingRooms

`func (o *ConfigRoomSummaryType) GetConnectingRooms() []RoomRoomType`

GetConnectingRooms returns the ConnectingRooms field if non-nil, zero value otherwise.

### GetConnectingRoomsOk

`func (o *ConfigRoomSummaryType) GetConnectingRoomsOk() (*[]RoomRoomType, bool)`

GetConnectingRoomsOk returns a tuple with the ConnectingRooms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConnectingRooms

`func (o *ConfigRoomSummaryType) SetConnectingRooms(v []RoomRoomType)`

SetConnectingRooms sets ConnectingRooms field to given value.

### HasConnectingRooms

`func (o *ConfigRoomSummaryType) HasConnectingRooms() bool`

HasConnectingRooms returns a boolean if a field has been set.

### GetSellSequence

`func (o *ConfigRoomSummaryType) GetSellSequence() float32`

GetSellSequence returns the SellSequence field if non-nil, zero value otherwise.

### GetSellSequenceOk

`func (o *ConfigRoomSummaryType) GetSellSequenceOk() (*float32, bool)`

GetSellSequenceOk returns a tuple with the SellSequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSellSequence

`func (o *ConfigRoomSummaryType) SetSellSequence(v float32)`

SetSellSequence sets SellSequence field to given value.

### HasSellSequence

`func (o *ConfigRoomSummaryType) HasSellSequence() bool`

HasSellSequence returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# FunctionSpaceRoomType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Accessible** | Pointer to **bool** | Indicates whether the room is accessibility compliant. | [optional] 
**Building** | Pointer to **string** | Building associated with the room. | [optional] 
**Description** | Pointer to [**TranslationTextType2000**](TranslationTextType2000.md) |  | [optional] 
**Floor** | Pointer to **string** | Floor of the Room. | [optional] 
**FloorDescription** | Pointer to **string** | Description for the Floor of the Room. | [optional] 
**MeetingRoom** | Pointer to **bool** | Indicates whether the room is a Meeting Room | [optional] 
**RoomAssignmentRating** | Pointer to [**RatePlanRatingType**](RatePlanRatingType.md) |  | [optional] 
**RoomCapacity** | Pointer to [**RoomCapacityType**](RoomCapacityType.md) |  | [optional] 
**RoomDescription** | Pointer to **string** | Detail Long Description Of The Room. | [optional] 
**RoomFeatures** | Pointer to [**RoomFeaturesType**](RoomFeaturesType.md) |  | [optional] 
**RoomId** | Pointer to **string** | Code of the room. | [optional] 
**RoomSize** | Pointer to [**[]RoomSizeType**](RoomSizeType.md) | Collection of room size information of of the function space group by unit of measurement. | [optional] 
**RoomType** | Pointer to [**RoomTypeShortInfoType**](RoomTypeShortInfoType.md) |  | [optional] 
**SmokingPreference** | Pointer to **string** | This indicates room smoking preference. | [optional] 
**SmokingPreferenceDescription** | Pointer to **string** | This indicates the description of the room smoking preference. | [optional] 

## Methods

### NewFunctionSpaceRoomType

`func NewFunctionSpaceRoomType() *FunctionSpaceRoomType`

NewFunctionSpaceRoomType instantiates a new FunctionSpaceRoomType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFunctionSpaceRoomTypeWithDefaults

`func NewFunctionSpaceRoomTypeWithDefaults() *FunctionSpaceRoomType`

NewFunctionSpaceRoomTypeWithDefaults instantiates a new FunctionSpaceRoomType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccessible

`func (o *FunctionSpaceRoomType) GetAccessible() bool`

GetAccessible returns the Accessible field if non-nil, zero value otherwise.

### GetAccessibleOk

`func (o *FunctionSpaceRoomType) GetAccessibleOk() (*bool, bool)`

GetAccessibleOk returns a tuple with the Accessible field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessible

`func (o *FunctionSpaceRoomType) SetAccessible(v bool)`

SetAccessible sets Accessible field to given value.

### HasAccessible

`func (o *FunctionSpaceRoomType) HasAccessible() bool`

HasAccessible returns a boolean if a field has been set.

### GetBuilding

`func (o *FunctionSpaceRoomType) GetBuilding() string`

GetBuilding returns the Building field if non-nil, zero value otherwise.

### GetBuildingOk

`func (o *FunctionSpaceRoomType) GetBuildingOk() (*string, bool)`

GetBuildingOk returns a tuple with the Building field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBuilding

`func (o *FunctionSpaceRoomType) SetBuilding(v string)`

SetBuilding sets Building field to given value.

### HasBuilding

`func (o *FunctionSpaceRoomType) HasBuilding() bool`

HasBuilding returns a boolean if a field has been set.

### GetDescription

`func (o *FunctionSpaceRoomType) GetDescription() TranslationTextType2000`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *FunctionSpaceRoomType) GetDescriptionOk() (*TranslationTextType2000, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *FunctionSpaceRoomType) SetDescription(v TranslationTextType2000)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *FunctionSpaceRoomType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetFloor

`func (o *FunctionSpaceRoomType) GetFloor() string`

GetFloor returns the Floor field if non-nil, zero value otherwise.

### GetFloorOk

`func (o *FunctionSpaceRoomType) GetFloorOk() (*string, bool)`

GetFloorOk returns a tuple with the Floor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFloor

`func (o *FunctionSpaceRoomType) SetFloor(v string)`

SetFloor sets Floor field to given value.

### HasFloor

`func (o *FunctionSpaceRoomType) HasFloor() bool`

HasFloor returns a boolean if a field has been set.

### GetFloorDescription

`func (o *FunctionSpaceRoomType) GetFloorDescription() string`

GetFloorDescription returns the FloorDescription field if non-nil, zero value otherwise.

### GetFloorDescriptionOk

`func (o *FunctionSpaceRoomType) GetFloorDescriptionOk() (*string, bool)`

GetFloorDescriptionOk returns a tuple with the FloorDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFloorDescription

`func (o *FunctionSpaceRoomType) SetFloorDescription(v string)`

SetFloorDescription sets FloorDescription field to given value.

### HasFloorDescription

`func (o *FunctionSpaceRoomType) HasFloorDescription() bool`

HasFloorDescription returns a boolean if a field has been set.

### GetMeetingRoom

`func (o *FunctionSpaceRoomType) GetMeetingRoom() bool`

GetMeetingRoom returns the MeetingRoom field if non-nil, zero value otherwise.

### GetMeetingRoomOk

`func (o *FunctionSpaceRoomType) GetMeetingRoomOk() (*bool, bool)`

GetMeetingRoomOk returns a tuple with the MeetingRoom field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMeetingRoom

`func (o *FunctionSpaceRoomType) SetMeetingRoom(v bool)`

SetMeetingRoom sets MeetingRoom field to given value.

### HasMeetingRoom

`func (o *FunctionSpaceRoomType) HasMeetingRoom() bool`

HasMeetingRoom returns a boolean if a field has been set.

### GetRoomAssignmentRating

`func (o *FunctionSpaceRoomType) GetRoomAssignmentRating() RatePlanRatingType`

GetRoomAssignmentRating returns the RoomAssignmentRating field if non-nil, zero value otherwise.

### GetRoomAssignmentRatingOk

`func (o *FunctionSpaceRoomType) GetRoomAssignmentRatingOk() (*RatePlanRatingType, bool)`

GetRoomAssignmentRatingOk returns a tuple with the RoomAssignmentRating field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomAssignmentRating

`func (o *FunctionSpaceRoomType) SetRoomAssignmentRating(v RatePlanRatingType)`

SetRoomAssignmentRating sets RoomAssignmentRating field to given value.

### HasRoomAssignmentRating

`func (o *FunctionSpaceRoomType) HasRoomAssignmentRating() bool`

HasRoomAssignmentRating returns a boolean if a field has been set.

### GetRoomCapacity

`func (o *FunctionSpaceRoomType) GetRoomCapacity() RoomCapacityType`

GetRoomCapacity returns the RoomCapacity field if non-nil, zero value otherwise.

### GetRoomCapacityOk

`func (o *FunctionSpaceRoomType) GetRoomCapacityOk() (*RoomCapacityType, bool)`

GetRoomCapacityOk returns a tuple with the RoomCapacity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomCapacity

`func (o *FunctionSpaceRoomType) SetRoomCapacity(v RoomCapacityType)`

SetRoomCapacity sets RoomCapacity field to given value.

### HasRoomCapacity

`func (o *FunctionSpaceRoomType) HasRoomCapacity() bool`

HasRoomCapacity returns a boolean if a field has been set.

### GetRoomDescription

`func (o *FunctionSpaceRoomType) GetRoomDescription() string`

GetRoomDescription returns the RoomDescription field if non-nil, zero value otherwise.

### GetRoomDescriptionOk

`func (o *FunctionSpaceRoomType) GetRoomDescriptionOk() (*string, bool)`

GetRoomDescriptionOk returns a tuple with the RoomDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomDescription

`func (o *FunctionSpaceRoomType) SetRoomDescription(v string)`

SetRoomDescription sets RoomDescription field to given value.

### HasRoomDescription

`func (o *FunctionSpaceRoomType) HasRoomDescription() bool`

HasRoomDescription returns a boolean if a field has been set.

### GetRoomFeatures

`func (o *FunctionSpaceRoomType) GetRoomFeatures() RoomFeaturesType`

GetRoomFeatures returns the RoomFeatures field if non-nil, zero value otherwise.

### GetRoomFeaturesOk

`func (o *FunctionSpaceRoomType) GetRoomFeaturesOk() (*RoomFeaturesType, bool)`

GetRoomFeaturesOk returns a tuple with the RoomFeatures field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomFeatures

`func (o *FunctionSpaceRoomType) SetRoomFeatures(v RoomFeaturesType)`

SetRoomFeatures sets RoomFeatures field to given value.

### HasRoomFeatures

`func (o *FunctionSpaceRoomType) HasRoomFeatures() bool`

HasRoomFeatures returns a boolean if a field has been set.

### GetRoomId

`func (o *FunctionSpaceRoomType) GetRoomId() string`

GetRoomId returns the RoomId field if non-nil, zero value otherwise.

### GetRoomIdOk

`func (o *FunctionSpaceRoomType) GetRoomIdOk() (*string, bool)`

GetRoomIdOk returns a tuple with the RoomId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomId

`func (o *FunctionSpaceRoomType) SetRoomId(v string)`

SetRoomId sets RoomId field to given value.

### HasRoomId

`func (o *FunctionSpaceRoomType) HasRoomId() bool`

HasRoomId returns a boolean if a field has been set.

### GetRoomSize

`func (o *FunctionSpaceRoomType) GetRoomSize() []RoomSizeType`

GetRoomSize returns the RoomSize field if non-nil, zero value otherwise.

### GetRoomSizeOk

`func (o *FunctionSpaceRoomType) GetRoomSizeOk() (*[]RoomSizeType, bool)`

GetRoomSizeOk returns a tuple with the RoomSize field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomSize

`func (o *FunctionSpaceRoomType) SetRoomSize(v []RoomSizeType)`

SetRoomSize sets RoomSize field to given value.

### HasRoomSize

`func (o *FunctionSpaceRoomType) HasRoomSize() bool`

HasRoomSize returns a boolean if a field has been set.

### GetRoomType

`func (o *FunctionSpaceRoomType) GetRoomType() RoomTypeShortInfoType`

GetRoomType returns the RoomType field if non-nil, zero value otherwise.

### GetRoomTypeOk

`func (o *FunctionSpaceRoomType) GetRoomTypeOk() (*RoomTypeShortInfoType, bool)`

GetRoomTypeOk returns a tuple with the RoomType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomType

`func (o *FunctionSpaceRoomType) SetRoomType(v RoomTypeShortInfoType)`

SetRoomType sets RoomType field to given value.

### HasRoomType

`func (o *FunctionSpaceRoomType) HasRoomType() bool`

HasRoomType returns a boolean if a field has been set.

### GetSmokingPreference

`func (o *FunctionSpaceRoomType) GetSmokingPreference() string`

GetSmokingPreference returns the SmokingPreference field if non-nil, zero value otherwise.

### GetSmokingPreferenceOk

`func (o *FunctionSpaceRoomType) GetSmokingPreferenceOk() (*string, bool)`

GetSmokingPreferenceOk returns a tuple with the SmokingPreference field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSmokingPreference

`func (o *FunctionSpaceRoomType) SetSmokingPreference(v string)`

SetSmokingPreference sets SmokingPreference field to given value.

### HasSmokingPreference

`func (o *FunctionSpaceRoomType) HasSmokingPreference() bool`

HasSmokingPreference returns a boolean if a field has been set.

### GetSmokingPreferenceDescription

`func (o *FunctionSpaceRoomType) GetSmokingPreferenceDescription() string`

GetSmokingPreferenceDescription returns the SmokingPreferenceDescription field if non-nil, zero value otherwise.

### GetSmokingPreferenceDescriptionOk

`func (o *FunctionSpaceRoomType) GetSmokingPreferenceDescriptionOk() (*string, bool)`

GetSmokingPreferenceDescriptionOk returns a tuple with the SmokingPreferenceDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSmokingPreferenceDescription

`func (o *FunctionSpaceRoomType) SetSmokingPreferenceDescription(v string)`

SetSmokingPreferenceDescription sets SmokingPreferenceDescription field to given value.

### HasSmokingPreferenceDescription

`func (o *FunctionSpaceRoomType) HasSmokingPreferenceDescription() bool`

HasSmokingPreferenceDescription returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



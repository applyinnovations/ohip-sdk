# CopyNewRoomType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Floors** | Pointer to [**CodeListType**](CodeListType.md) |  | [optional] 
**HousekeepingCredits** | Pointer to [**[]HousekeepingCreditsType**](HousekeepingCreditsType.md) | Housekeeping credits of the room. This may include stayover, departure, pickup and turndown credits. | [optional] 
**RoomFeatures** | Pointer to [**RoomFeaturesType**](RoomFeaturesType.md) |  | [optional] 
**RoomId** | Pointer to **string** | Room number of the new room to be created. | [optional] 
**RoomSection** | Pointer to [**RoomSectionType**](RoomSectionType.md) |  | [optional] 

## Methods

### NewCopyNewRoomType

`func NewCopyNewRoomType() *CopyNewRoomType`

NewCopyNewRoomType instantiates a new CopyNewRoomType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCopyNewRoomTypeWithDefaults

`func NewCopyNewRoomTypeWithDefaults() *CopyNewRoomType`

NewCopyNewRoomTypeWithDefaults instantiates a new CopyNewRoomType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFloors

`func (o *CopyNewRoomType) GetFloors() CodeListType`

GetFloors returns the Floors field if non-nil, zero value otherwise.

### GetFloorsOk

`func (o *CopyNewRoomType) GetFloorsOk() (*CodeListType, bool)`

GetFloorsOk returns a tuple with the Floors field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFloors

`func (o *CopyNewRoomType) SetFloors(v CodeListType)`

SetFloors sets Floors field to given value.

### HasFloors

`func (o *CopyNewRoomType) HasFloors() bool`

HasFloors returns a boolean if a field has been set.

### GetHousekeepingCredits

`func (o *CopyNewRoomType) GetHousekeepingCredits() []HousekeepingCreditsType`

GetHousekeepingCredits returns the HousekeepingCredits field if non-nil, zero value otherwise.

### GetHousekeepingCreditsOk

`func (o *CopyNewRoomType) GetHousekeepingCreditsOk() (*[]HousekeepingCreditsType, bool)`

GetHousekeepingCreditsOk returns a tuple with the HousekeepingCredits field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHousekeepingCredits

`func (o *CopyNewRoomType) SetHousekeepingCredits(v []HousekeepingCreditsType)`

SetHousekeepingCredits sets HousekeepingCredits field to given value.

### HasHousekeepingCredits

`func (o *CopyNewRoomType) HasHousekeepingCredits() bool`

HasHousekeepingCredits returns a boolean if a field has been set.

### GetRoomFeatures

`func (o *CopyNewRoomType) GetRoomFeatures() RoomFeaturesType`

GetRoomFeatures returns the RoomFeatures field if non-nil, zero value otherwise.

### GetRoomFeaturesOk

`func (o *CopyNewRoomType) GetRoomFeaturesOk() (*RoomFeaturesType, bool)`

GetRoomFeaturesOk returns a tuple with the RoomFeatures field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomFeatures

`func (o *CopyNewRoomType) SetRoomFeatures(v RoomFeaturesType)`

SetRoomFeatures sets RoomFeatures field to given value.

### HasRoomFeatures

`func (o *CopyNewRoomType) HasRoomFeatures() bool`

HasRoomFeatures returns a boolean if a field has been set.

### GetRoomId

`func (o *CopyNewRoomType) GetRoomId() string`

GetRoomId returns the RoomId field if non-nil, zero value otherwise.

### GetRoomIdOk

`func (o *CopyNewRoomType) GetRoomIdOk() (*string, bool)`

GetRoomIdOk returns a tuple with the RoomId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomId

`func (o *CopyNewRoomType) SetRoomId(v string)`

SetRoomId sets RoomId field to given value.

### HasRoomId

`func (o *CopyNewRoomType) HasRoomId() bool`

HasRoomId returns a boolean if a field has been set.

### GetRoomSection

`func (o *CopyNewRoomType) GetRoomSection() RoomSectionType`

GetRoomSection returns the RoomSection field if non-nil, zero value otherwise.

### GetRoomSectionOk

`func (o *CopyNewRoomType) GetRoomSectionOk() (*RoomSectionType, bool)`

GetRoomSectionOk returns a tuple with the RoomSection field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomSection

`func (o *CopyNewRoomType) SetRoomSection(v RoomSectionType)`

SetRoomSection sets RoomSection field to given value.

### HasRoomSection

`func (o *CopyNewRoomType) HasRoomSection() bool`

HasRoomSection returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



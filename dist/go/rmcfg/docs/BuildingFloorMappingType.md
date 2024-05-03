# BuildingFloorMappingType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Credits** | Pointer to **int32** | Total Credits for all the rooms that belong to this building group. | [optional] 
**Description** | Pointer to **string** | The description of the house keeping building to floor mapping. | [optional] 
**FloorMappingId** | Pointer to [**BuildingFloorMappingIDType**](BuildingFloorMappingIDType.md) |  | [optional] 
**RoomCount** | Pointer to **int32** | Rooms associated with the floor in the building. | [optional] 
**Sequence** | Pointer to **int32** | Display sequence when auto task assignment is broken out by floor. | [optional] 
**TargetCredits** | Pointer to **int32** | Target Credit for each task sheet created for this floor when auto task assignment is broken out by floor. | [optional] 

## Methods

### NewBuildingFloorMappingType

`func NewBuildingFloorMappingType() *BuildingFloorMappingType`

NewBuildingFloorMappingType instantiates a new BuildingFloorMappingType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBuildingFloorMappingTypeWithDefaults

`func NewBuildingFloorMappingTypeWithDefaults() *BuildingFloorMappingType`

NewBuildingFloorMappingTypeWithDefaults instantiates a new BuildingFloorMappingType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCredits

`func (o *BuildingFloorMappingType) GetCredits() int32`

GetCredits returns the Credits field if non-nil, zero value otherwise.

### GetCreditsOk

`func (o *BuildingFloorMappingType) GetCreditsOk() (*int32, bool)`

GetCreditsOk returns a tuple with the Credits field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCredits

`func (o *BuildingFloorMappingType) SetCredits(v int32)`

SetCredits sets Credits field to given value.

### HasCredits

`func (o *BuildingFloorMappingType) HasCredits() bool`

HasCredits returns a boolean if a field has been set.

### GetDescription

`func (o *BuildingFloorMappingType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *BuildingFloorMappingType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *BuildingFloorMappingType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *BuildingFloorMappingType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetFloorMappingId

`func (o *BuildingFloorMappingType) GetFloorMappingId() BuildingFloorMappingIDType`

GetFloorMappingId returns the FloorMappingId field if non-nil, zero value otherwise.

### GetFloorMappingIdOk

`func (o *BuildingFloorMappingType) GetFloorMappingIdOk() (*BuildingFloorMappingIDType, bool)`

GetFloorMappingIdOk returns a tuple with the FloorMappingId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFloorMappingId

`func (o *BuildingFloorMappingType) SetFloorMappingId(v BuildingFloorMappingIDType)`

SetFloorMappingId sets FloorMappingId field to given value.

### HasFloorMappingId

`func (o *BuildingFloorMappingType) HasFloorMappingId() bool`

HasFloorMappingId returns a boolean if a field has been set.

### GetRoomCount

`func (o *BuildingFloorMappingType) GetRoomCount() int32`

GetRoomCount returns the RoomCount field if non-nil, zero value otherwise.

### GetRoomCountOk

`func (o *BuildingFloorMappingType) GetRoomCountOk() (*int32, bool)`

GetRoomCountOk returns a tuple with the RoomCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomCount

`func (o *BuildingFloorMappingType) SetRoomCount(v int32)`

SetRoomCount sets RoomCount field to given value.

### HasRoomCount

`func (o *BuildingFloorMappingType) HasRoomCount() bool`

HasRoomCount returns a boolean if a field has been set.

### GetSequence

`func (o *BuildingFloorMappingType) GetSequence() int32`

GetSequence returns the Sequence field if non-nil, zero value otherwise.

### GetSequenceOk

`func (o *BuildingFloorMappingType) GetSequenceOk() (*int32, bool)`

GetSequenceOk returns a tuple with the Sequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSequence

`func (o *BuildingFloorMappingType) SetSequence(v int32)`

SetSequence sets Sequence field to given value.

### HasSequence

`func (o *BuildingFloorMappingType) HasSequence() bool`

HasSequence returns a boolean if a field has been set.

### GetTargetCredits

`func (o *BuildingFloorMappingType) GetTargetCredits() int32`

GetTargetCredits returns the TargetCredits field if non-nil, zero value otherwise.

### GetTargetCreditsOk

`func (o *BuildingFloorMappingType) GetTargetCreditsOk() (*int32, bool)`

GetTargetCreditsOk returns a tuple with the TargetCredits field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetCredits

`func (o *BuildingFloorMappingType) SetTargetCredits(v int32)`

SetTargetCredits sets TargetCredits field to given value.

### HasTargetCredits

`func (o *BuildingFloorMappingType) HasTargetCredits() bool`

HasTargetCredits returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# HousekeepingSectionType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Property where this section is defined. | [optional] 
**Code** | Pointer to **string** | The Housekeeping Section Code. | [optional] 
**Description** | Pointer to **string** | Description of the Section. | [optional] 
**SectionGroup** | Pointer to **string** | Housekeeping Section Group. | [optional] 
**TargetCredits** | Pointer to **int32** | Target Credit for each task sheet created for this section when auto task assignment is broken out by section. | [optional] 
**Rooms** | Pointer to **int32** | Rooms count for this section code. This is auto populated while creating/fetching record. | [optional] 
**RoomCredits** | Pointer to **int32** | Number of housekeeping credits. This is auto populated while creating/fetching record. | [optional] 
**Sequence** | Pointer to **int32** | Display sequence when task assignment is automatically broken out by Section Group. | [optional] 
**Inactive** | Pointer to **bool** | Indicates if the Section Code is active. | [optional] 
**ManagedBy** | Pointer to [**ManagedByOptions**](ManagedByOptions.md) |  | [optional] 

## Methods

### NewHousekeepingSectionType

`func NewHousekeepingSectionType() *HousekeepingSectionType`

NewHousekeepingSectionType instantiates a new HousekeepingSectionType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHousekeepingSectionTypeWithDefaults

`func NewHousekeepingSectionTypeWithDefaults() *HousekeepingSectionType`

NewHousekeepingSectionTypeWithDefaults instantiates a new HousekeepingSectionType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *HousekeepingSectionType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *HousekeepingSectionType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *HousekeepingSectionType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *HousekeepingSectionType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetCode

`func (o *HousekeepingSectionType) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *HousekeepingSectionType) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *HousekeepingSectionType) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *HousekeepingSectionType) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetDescription

`func (o *HousekeepingSectionType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *HousekeepingSectionType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *HousekeepingSectionType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *HousekeepingSectionType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetSectionGroup

`func (o *HousekeepingSectionType) GetSectionGroup() string`

GetSectionGroup returns the SectionGroup field if non-nil, zero value otherwise.

### GetSectionGroupOk

`func (o *HousekeepingSectionType) GetSectionGroupOk() (*string, bool)`

GetSectionGroupOk returns a tuple with the SectionGroup field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSectionGroup

`func (o *HousekeepingSectionType) SetSectionGroup(v string)`

SetSectionGroup sets SectionGroup field to given value.

### HasSectionGroup

`func (o *HousekeepingSectionType) HasSectionGroup() bool`

HasSectionGroup returns a boolean if a field has been set.

### GetTargetCredits

`func (o *HousekeepingSectionType) GetTargetCredits() int32`

GetTargetCredits returns the TargetCredits field if non-nil, zero value otherwise.

### GetTargetCreditsOk

`func (o *HousekeepingSectionType) GetTargetCreditsOk() (*int32, bool)`

GetTargetCreditsOk returns a tuple with the TargetCredits field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetCredits

`func (o *HousekeepingSectionType) SetTargetCredits(v int32)`

SetTargetCredits sets TargetCredits field to given value.

### HasTargetCredits

`func (o *HousekeepingSectionType) HasTargetCredits() bool`

HasTargetCredits returns a boolean if a field has been set.

### GetRooms

`func (o *HousekeepingSectionType) GetRooms() int32`

GetRooms returns the Rooms field if non-nil, zero value otherwise.

### GetRoomsOk

`func (o *HousekeepingSectionType) GetRoomsOk() (*int32, bool)`

GetRoomsOk returns a tuple with the Rooms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRooms

`func (o *HousekeepingSectionType) SetRooms(v int32)`

SetRooms sets Rooms field to given value.

### HasRooms

`func (o *HousekeepingSectionType) HasRooms() bool`

HasRooms returns a boolean if a field has been set.

### GetRoomCredits

`func (o *HousekeepingSectionType) GetRoomCredits() int32`

GetRoomCredits returns the RoomCredits field if non-nil, zero value otherwise.

### GetRoomCreditsOk

`func (o *HousekeepingSectionType) GetRoomCreditsOk() (*int32, bool)`

GetRoomCreditsOk returns a tuple with the RoomCredits field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomCredits

`func (o *HousekeepingSectionType) SetRoomCredits(v int32)`

SetRoomCredits sets RoomCredits field to given value.

### HasRoomCredits

`func (o *HousekeepingSectionType) HasRoomCredits() bool`

HasRoomCredits returns a boolean if a field has been set.

### GetSequence

`func (o *HousekeepingSectionType) GetSequence() int32`

GetSequence returns the Sequence field if non-nil, zero value otherwise.

### GetSequenceOk

`func (o *HousekeepingSectionType) GetSequenceOk() (*int32, bool)`

GetSequenceOk returns a tuple with the Sequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSequence

`func (o *HousekeepingSectionType) SetSequence(v int32)`

SetSequence sets Sequence field to given value.

### HasSequence

`func (o *HousekeepingSectionType) HasSequence() bool`

HasSequence returns a boolean if a field has been set.

### GetInactive

`func (o *HousekeepingSectionType) GetInactive() bool`

GetInactive returns the Inactive field if non-nil, zero value otherwise.

### GetInactiveOk

`func (o *HousekeepingSectionType) GetInactiveOk() (*bool, bool)`

GetInactiveOk returns a tuple with the Inactive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInactive

`func (o *HousekeepingSectionType) SetInactive(v bool)`

SetInactive sets Inactive field to given value.

### HasInactive

`func (o *HousekeepingSectionType) HasInactive() bool`

HasInactive returns a boolean if a field has been set.

### GetManagedBy

`func (o *HousekeepingSectionType) GetManagedBy() ManagedByOptions`

GetManagedBy returns the ManagedBy field if non-nil, zero value otherwise.

### GetManagedByOk

`func (o *HousekeepingSectionType) GetManagedByOk() (*ManagedByOptions, bool)`

GetManagedByOk returns a tuple with the ManagedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManagedBy

`func (o *HousekeepingSectionType) SetManagedBy(v ManagedByOptions)`

SetManagedBy sets ManagedBy field to given value.

### HasManagedBy

`func (o *HousekeepingSectionType) HasManagedBy() bool`

HasManagedBy returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



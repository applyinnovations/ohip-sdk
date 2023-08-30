# CreateBlockRestrictionType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BlockId** | Pointer to [**BlockId**](BlockId.md) |  | [optional] 
**RoomTypes** | Pointer to **[]string** | Room type for which restriction is being applied. | [optional] 
**RestrictionStatus** | Pointer to [**RestrictionStatusType**](RestrictionStatusType.md) |  | [optional] 
**Start** | Pointer to **string** | The starting value of the date range. | [optional] 
**End** | Pointer to **string** | The ending value of the date range. | [optional] 
**Sunday** | Pointer to **bool** |  | [optional] 
**Monday** | Pointer to **bool** |  | [optional] 
**Tuesday** | Pointer to **bool** |  | [optional] 
**Wednesday** | Pointer to **bool** |  | [optional] 
**Thursday** | Pointer to **bool** |  | [optional] 
**Friday** | Pointer to **bool** |  | [optional] 
**Saturday** | Pointer to **bool** |  | [optional] 
**HotelId** | Pointer to **string** |  | [optional] 

## Methods

### NewCreateBlockRestrictionType

`func NewCreateBlockRestrictionType() *CreateBlockRestrictionType`

NewCreateBlockRestrictionType instantiates a new CreateBlockRestrictionType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreateBlockRestrictionTypeWithDefaults

`func NewCreateBlockRestrictionTypeWithDefaults() *CreateBlockRestrictionType`

NewCreateBlockRestrictionTypeWithDefaults instantiates a new CreateBlockRestrictionType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBlockId

`func (o *CreateBlockRestrictionType) GetBlockId() BlockId`

GetBlockId returns the BlockId field if non-nil, zero value otherwise.

### GetBlockIdOk

`func (o *CreateBlockRestrictionType) GetBlockIdOk() (*BlockId, bool)`

GetBlockIdOk returns a tuple with the BlockId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockId

`func (o *CreateBlockRestrictionType) SetBlockId(v BlockId)`

SetBlockId sets BlockId field to given value.

### HasBlockId

`func (o *CreateBlockRestrictionType) HasBlockId() bool`

HasBlockId returns a boolean if a field has been set.

### GetRoomTypes

`func (o *CreateBlockRestrictionType) GetRoomTypes() []string`

GetRoomTypes returns the RoomTypes field if non-nil, zero value otherwise.

### GetRoomTypesOk

`func (o *CreateBlockRestrictionType) GetRoomTypesOk() (*[]string, bool)`

GetRoomTypesOk returns a tuple with the RoomTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomTypes

`func (o *CreateBlockRestrictionType) SetRoomTypes(v []string)`

SetRoomTypes sets RoomTypes field to given value.

### HasRoomTypes

`func (o *CreateBlockRestrictionType) HasRoomTypes() bool`

HasRoomTypes returns a boolean if a field has been set.

### GetRestrictionStatus

`func (o *CreateBlockRestrictionType) GetRestrictionStatus() RestrictionStatusType`

GetRestrictionStatus returns the RestrictionStatus field if non-nil, zero value otherwise.

### GetRestrictionStatusOk

`func (o *CreateBlockRestrictionType) GetRestrictionStatusOk() (*RestrictionStatusType, bool)`

GetRestrictionStatusOk returns a tuple with the RestrictionStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRestrictionStatus

`func (o *CreateBlockRestrictionType) SetRestrictionStatus(v RestrictionStatusType)`

SetRestrictionStatus sets RestrictionStatus field to given value.

### HasRestrictionStatus

`func (o *CreateBlockRestrictionType) HasRestrictionStatus() bool`

HasRestrictionStatus returns a boolean if a field has been set.

### GetStart

`func (o *CreateBlockRestrictionType) GetStart() string`

GetStart returns the Start field if non-nil, zero value otherwise.

### GetStartOk

`func (o *CreateBlockRestrictionType) GetStartOk() (*string, bool)`

GetStartOk returns a tuple with the Start field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStart

`func (o *CreateBlockRestrictionType) SetStart(v string)`

SetStart sets Start field to given value.

### HasStart

`func (o *CreateBlockRestrictionType) HasStart() bool`

HasStart returns a boolean if a field has been set.

### GetEnd

`func (o *CreateBlockRestrictionType) GetEnd() string`

GetEnd returns the End field if non-nil, zero value otherwise.

### GetEndOk

`func (o *CreateBlockRestrictionType) GetEndOk() (*string, bool)`

GetEndOk returns a tuple with the End field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnd

`func (o *CreateBlockRestrictionType) SetEnd(v string)`

SetEnd sets End field to given value.

### HasEnd

`func (o *CreateBlockRestrictionType) HasEnd() bool`

HasEnd returns a boolean if a field has been set.

### GetSunday

`func (o *CreateBlockRestrictionType) GetSunday() bool`

GetSunday returns the Sunday field if non-nil, zero value otherwise.

### GetSundayOk

`func (o *CreateBlockRestrictionType) GetSundayOk() (*bool, bool)`

GetSundayOk returns a tuple with the Sunday field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSunday

`func (o *CreateBlockRestrictionType) SetSunday(v bool)`

SetSunday sets Sunday field to given value.

### HasSunday

`func (o *CreateBlockRestrictionType) HasSunday() bool`

HasSunday returns a boolean if a field has been set.

### GetMonday

`func (o *CreateBlockRestrictionType) GetMonday() bool`

GetMonday returns the Monday field if non-nil, zero value otherwise.

### GetMondayOk

`func (o *CreateBlockRestrictionType) GetMondayOk() (*bool, bool)`

GetMondayOk returns a tuple with the Monday field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMonday

`func (o *CreateBlockRestrictionType) SetMonday(v bool)`

SetMonday sets Monday field to given value.

### HasMonday

`func (o *CreateBlockRestrictionType) HasMonday() bool`

HasMonday returns a boolean if a field has been set.

### GetTuesday

`func (o *CreateBlockRestrictionType) GetTuesday() bool`

GetTuesday returns the Tuesday field if non-nil, zero value otherwise.

### GetTuesdayOk

`func (o *CreateBlockRestrictionType) GetTuesdayOk() (*bool, bool)`

GetTuesdayOk returns a tuple with the Tuesday field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTuesday

`func (o *CreateBlockRestrictionType) SetTuesday(v bool)`

SetTuesday sets Tuesday field to given value.

### HasTuesday

`func (o *CreateBlockRestrictionType) HasTuesday() bool`

HasTuesday returns a boolean if a field has been set.

### GetWednesday

`func (o *CreateBlockRestrictionType) GetWednesday() bool`

GetWednesday returns the Wednesday field if non-nil, zero value otherwise.

### GetWednesdayOk

`func (o *CreateBlockRestrictionType) GetWednesdayOk() (*bool, bool)`

GetWednesdayOk returns a tuple with the Wednesday field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWednesday

`func (o *CreateBlockRestrictionType) SetWednesday(v bool)`

SetWednesday sets Wednesday field to given value.

### HasWednesday

`func (o *CreateBlockRestrictionType) HasWednesday() bool`

HasWednesday returns a boolean if a field has been set.

### GetThursday

`func (o *CreateBlockRestrictionType) GetThursday() bool`

GetThursday returns the Thursday field if non-nil, zero value otherwise.

### GetThursdayOk

`func (o *CreateBlockRestrictionType) GetThursdayOk() (*bool, bool)`

GetThursdayOk returns a tuple with the Thursday field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetThursday

`func (o *CreateBlockRestrictionType) SetThursday(v bool)`

SetThursday sets Thursday field to given value.

### HasThursday

`func (o *CreateBlockRestrictionType) HasThursday() bool`

HasThursday returns a boolean if a field has been set.

### GetFriday

`func (o *CreateBlockRestrictionType) GetFriday() bool`

GetFriday returns the Friday field if non-nil, zero value otherwise.

### GetFridayOk

`func (o *CreateBlockRestrictionType) GetFridayOk() (*bool, bool)`

GetFridayOk returns a tuple with the Friday field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFriday

`func (o *CreateBlockRestrictionType) SetFriday(v bool)`

SetFriday sets Friday field to given value.

### HasFriday

`func (o *CreateBlockRestrictionType) HasFriday() bool`

HasFriday returns a boolean if a field has been set.

### GetSaturday

`func (o *CreateBlockRestrictionType) GetSaturday() bool`

GetSaturday returns the Saturday field if non-nil, zero value otherwise.

### GetSaturdayOk

`func (o *CreateBlockRestrictionType) GetSaturdayOk() (*bool, bool)`

GetSaturdayOk returns a tuple with the Saturday field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSaturday

`func (o *CreateBlockRestrictionType) SetSaturday(v bool)`

SetSaturday sets Saturday field to given value.

### HasSaturday

`func (o *CreateBlockRestrictionType) HasSaturday() bool`

HasSaturday returns a boolean if a field has been set.

### GetHotelId

`func (o *CreateBlockRestrictionType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *CreateBlockRestrictionType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *CreateBlockRestrictionType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *CreateBlockRestrictionType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



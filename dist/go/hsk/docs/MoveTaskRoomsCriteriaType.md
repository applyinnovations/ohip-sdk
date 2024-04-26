# MoveTaskRoomsCriteriaType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FromTaskSheetNumber** | Pointer to **int32** | The task sheet number from which the rooms are being moved. | [optional] 
**HotelId** | Pointer to **string** | The property where the task sheets exist for which the rooms are being moved. | [optional] 
**Rooms** | Pointer to [**[]RoomType**](RoomType.md) | List of rooms which have to be moved from one task sheet to another. | [optional] 
**TaskCode** | Pointer to [**[]HousekeepingTaskCodeType**](HousekeepingTaskCodeType.md) | The task code for the task sheets, for which the rooms are being moved. | [optional] 
**TaskDate** | Pointer to **string** | The date of the task sheet. | [optional] 
**ToTaskSheetNumber** | Pointer to **int32** | The task sheet number to which the rooms should be moved. | [optional] 

## Methods

### NewMoveTaskRoomsCriteriaType

`func NewMoveTaskRoomsCriteriaType() *MoveTaskRoomsCriteriaType`

NewMoveTaskRoomsCriteriaType instantiates a new MoveTaskRoomsCriteriaType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMoveTaskRoomsCriteriaTypeWithDefaults

`func NewMoveTaskRoomsCriteriaTypeWithDefaults() *MoveTaskRoomsCriteriaType`

NewMoveTaskRoomsCriteriaTypeWithDefaults instantiates a new MoveTaskRoomsCriteriaType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFromTaskSheetNumber

`func (o *MoveTaskRoomsCriteriaType) GetFromTaskSheetNumber() int32`

GetFromTaskSheetNumber returns the FromTaskSheetNumber field if non-nil, zero value otherwise.

### GetFromTaskSheetNumberOk

`func (o *MoveTaskRoomsCriteriaType) GetFromTaskSheetNumberOk() (*int32, bool)`

GetFromTaskSheetNumberOk returns a tuple with the FromTaskSheetNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFromTaskSheetNumber

`func (o *MoveTaskRoomsCriteriaType) SetFromTaskSheetNumber(v int32)`

SetFromTaskSheetNumber sets FromTaskSheetNumber field to given value.

### HasFromTaskSheetNumber

`func (o *MoveTaskRoomsCriteriaType) HasFromTaskSheetNumber() bool`

HasFromTaskSheetNumber returns a boolean if a field has been set.

### GetHotelId

`func (o *MoveTaskRoomsCriteriaType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *MoveTaskRoomsCriteriaType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *MoveTaskRoomsCriteriaType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *MoveTaskRoomsCriteriaType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetRooms

`func (o *MoveTaskRoomsCriteriaType) GetRooms() []RoomType`

GetRooms returns the Rooms field if non-nil, zero value otherwise.

### GetRoomsOk

`func (o *MoveTaskRoomsCriteriaType) GetRoomsOk() (*[]RoomType, bool)`

GetRoomsOk returns a tuple with the Rooms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRooms

`func (o *MoveTaskRoomsCriteriaType) SetRooms(v []RoomType)`

SetRooms sets Rooms field to given value.

### HasRooms

`func (o *MoveTaskRoomsCriteriaType) HasRooms() bool`

HasRooms returns a boolean if a field has been set.

### GetTaskCode

`func (o *MoveTaskRoomsCriteriaType) GetTaskCode() []HousekeepingTaskCodeType`

GetTaskCode returns the TaskCode field if non-nil, zero value otherwise.

### GetTaskCodeOk

`func (o *MoveTaskRoomsCriteriaType) GetTaskCodeOk() (*[]HousekeepingTaskCodeType, bool)`

GetTaskCodeOk returns a tuple with the TaskCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaskCode

`func (o *MoveTaskRoomsCriteriaType) SetTaskCode(v []HousekeepingTaskCodeType)`

SetTaskCode sets TaskCode field to given value.

### HasTaskCode

`func (o *MoveTaskRoomsCriteriaType) HasTaskCode() bool`

HasTaskCode returns a boolean if a field has been set.

### GetTaskDate

`func (o *MoveTaskRoomsCriteriaType) GetTaskDate() string`

GetTaskDate returns the TaskDate field if non-nil, zero value otherwise.

### GetTaskDateOk

`func (o *MoveTaskRoomsCriteriaType) GetTaskDateOk() (*string, bool)`

GetTaskDateOk returns a tuple with the TaskDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaskDate

`func (o *MoveTaskRoomsCriteriaType) SetTaskDate(v string)`

SetTaskDate sets TaskDate field to given value.

### HasTaskDate

`func (o *MoveTaskRoomsCriteriaType) HasTaskDate() bool`

HasTaskDate returns a boolean if a field has been set.

### GetToTaskSheetNumber

`func (o *MoveTaskRoomsCriteriaType) GetToTaskSheetNumber() int32`

GetToTaskSheetNumber returns the ToTaskSheetNumber field if non-nil, zero value otherwise.

### GetToTaskSheetNumberOk

`func (o *MoveTaskRoomsCriteriaType) GetToTaskSheetNumberOk() (*int32, bool)`

GetToTaskSheetNumberOk returns a tuple with the ToTaskSheetNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetToTaskSheetNumber

`func (o *MoveTaskRoomsCriteriaType) SetToTaskSheetNumber(v int32)`

SetToTaskSheetNumber sets ToTaskSheetNumber field to given value.

### HasToTaskSheetNumber

`func (o *MoveTaskRoomsCriteriaType) HasToTaskSheetNumber() bool`

HasToTaskSheetNumber returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



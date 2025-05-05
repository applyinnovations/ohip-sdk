# ScheduledRoomMoveInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MoveStatus** | Pointer to [**ScheduledRoomMoveStatusType**](ScheduledRoomMoveStatusType.md) |  | [optional] 
**MoveComments** | Pointer to **string** | Comments about scheduled room move. | [optional] 
**MoveInRoomOccupancyInfo** | Pointer to [**RoomOccupancyType**](RoomOccupancyType.md) |  | [optional] 
**EstimatedMoveTime** | Pointer to **string** | Estimated Move Time. | [optional] 
**MoveOutRoomId** | Pointer to **string** | Scheduled Move Out Room Id. | [optional] 
**MoveOutRoomType** | Pointer to **string** | Scheduled Move Out Room Type. | [optional] 

## Methods

### NewScheduledRoomMoveInfoType

`func NewScheduledRoomMoveInfoType() *ScheduledRoomMoveInfoType`

NewScheduledRoomMoveInfoType instantiates a new ScheduledRoomMoveInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewScheduledRoomMoveInfoTypeWithDefaults

`func NewScheduledRoomMoveInfoTypeWithDefaults() *ScheduledRoomMoveInfoType`

NewScheduledRoomMoveInfoTypeWithDefaults instantiates a new ScheduledRoomMoveInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMoveStatus

`func (o *ScheduledRoomMoveInfoType) GetMoveStatus() ScheduledRoomMoveStatusType`

GetMoveStatus returns the MoveStatus field if non-nil, zero value otherwise.

### GetMoveStatusOk

`func (o *ScheduledRoomMoveInfoType) GetMoveStatusOk() (*ScheduledRoomMoveStatusType, bool)`

GetMoveStatusOk returns a tuple with the MoveStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMoveStatus

`func (o *ScheduledRoomMoveInfoType) SetMoveStatus(v ScheduledRoomMoveStatusType)`

SetMoveStatus sets MoveStatus field to given value.

### HasMoveStatus

`func (o *ScheduledRoomMoveInfoType) HasMoveStatus() bool`

HasMoveStatus returns a boolean if a field has been set.

### GetMoveComments

`func (o *ScheduledRoomMoveInfoType) GetMoveComments() string`

GetMoveComments returns the MoveComments field if non-nil, zero value otherwise.

### GetMoveCommentsOk

`func (o *ScheduledRoomMoveInfoType) GetMoveCommentsOk() (*string, bool)`

GetMoveCommentsOk returns a tuple with the MoveComments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMoveComments

`func (o *ScheduledRoomMoveInfoType) SetMoveComments(v string)`

SetMoveComments sets MoveComments field to given value.

### HasMoveComments

`func (o *ScheduledRoomMoveInfoType) HasMoveComments() bool`

HasMoveComments returns a boolean if a field has been set.

### GetMoveInRoomOccupancyInfo

`func (o *ScheduledRoomMoveInfoType) GetMoveInRoomOccupancyInfo() RoomOccupancyType`

GetMoveInRoomOccupancyInfo returns the MoveInRoomOccupancyInfo field if non-nil, zero value otherwise.

### GetMoveInRoomOccupancyInfoOk

`func (o *ScheduledRoomMoveInfoType) GetMoveInRoomOccupancyInfoOk() (*RoomOccupancyType, bool)`

GetMoveInRoomOccupancyInfoOk returns a tuple with the MoveInRoomOccupancyInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMoveInRoomOccupancyInfo

`func (o *ScheduledRoomMoveInfoType) SetMoveInRoomOccupancyInfo(v RoomOccupancyType)`

SetMoveInRoomOccupancyInfo sets MoveInRoomOccupancyInfo field to given value.

### HasMoveInRoomOccupancyInfo

`func (o *ScheduledRoomMoveInfoType) HasMoveInRoomOccupancyInfo() bool`

HasMoveInRoomOccupancyInfo returns a boolean if a field has been set.

### GetEstimatedMoveTime

`func (o *ScheduledRoomMoveInfoType) GetEstimatedMoveTime() string`

GetEstimatedMoveTime returns the EstimatedMoveTime field if non-nil, zero value otherwise.

### GetEstimatedMoveTimeOk

`func (o *ScheduledRoomMoveInfoType) GetEstimatedMoveTimeOk() (*string, bool)`

GetEstimatedMoveTimeOk returns a tuple with the EstimatedMoveTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEstimatedMoveTime

`func (o *ScheduledRoomMoveInfoType) SetEstimatedMoveTime(v string)`

SetEstimatedMoveTime sets EstimatedMoveTime field to given value.

### HasEstimatedMoveTime

`func (o *ScheduledRoomMoveInfoType) HasEstimatedMoveTime() bool`

HasEstimatedMoveTime returns a boolean if a field has been set.

### GetMoveOutRoomId

`func (o *ScheduledRoomMoveInfoType) GetMoveOutRoomId() string`

GetMoveOutRoomId returns the MoveOutRoomId field if non-nil, zero value otherwise.

### GetMoveOutRoomIdOk

`func (o *ScheduledRoomMoveInfoType) GetMoveOutRoomIdOk() (*string, bool)`

GetMoveOutRoomIdOk returns a tuple with the MoveOutRoomId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMoveOutRoomId

`func (o *ScheduledRoomMoveInfoType) SetMoveOutRoomId(v string)`

SetMoveOutRoomId sets MoveOutRoomId field to given value.

### HasMoveOutRoomId

`func (o *ScheduledRoomMoveInfoType) HasMoveOutRoomId() bool`

HasMoveOutRoomId returns a boolean if a field has been set.

### GetMoveOutRoomType

`func (o *ScheduledRoomMoveInfoType) GetMoveOutRoomType() string`

GetMoveOutRoomType returns the MoveOutRoomType field if non-nil, zero value otherwise.

### GetMoveOutRoomTypeOk

`func (o *ScheduledRoomMoveInfoType) GetMoveOutRoomTypeOk() (*string, bool)`

GetMoveOutRoomTypeOk returns a tuple with the MoveOutRoomType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMoveOutRoomType

`func (o *ScheduledRoomMoveInfoType) SetMoveOutRoomType(v string)`

SetMoveOutRoomType sets MoveOutRoomType field to given value.

### HasMoveOutRoomType

`func (o *ScheduledRoomMoveInfoType) HasMoveOutRoomType() bool`

HasMoveOutRoomType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



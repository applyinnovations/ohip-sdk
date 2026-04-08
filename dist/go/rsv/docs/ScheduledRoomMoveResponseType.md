# ScheduledRoomMoveResponseType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MoveComments** | Pointer to **string** | Comments about scheduled move. | [optional] 
**MoveInRoomOccupancyInfo** | Pointer to [**RoomOccupancyType**](RoomOccupancyType.md) |  | [optional] 
**EstimatedMoveTime** | Pointer to **string** | Estimated Move Time in 24Hour Format | [optional] 

## Methods

### NewScheduledRoomMoveResponseType

`func NewScheduledRoomMoveResponseType() *ScheduledRoomMoveResponseType`

NewScheduledRoomMoveResponseType instantiates a new ScheduledRoomMoveResponseType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewScheduledRoomMoveResponseTypeWithDefaults

`func NewScheduledRoomMoveResponseTypeWithDefaults() *ScheduledRoomMoveResponseType`

NewScheduledRoomMoveResponseTypeWithDefaults instantiates a new ScheduledRoomMoveResponseType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMoveComments

`func (o *ScheduledRoomMoveResponseType) GetMoveComments() string`

GetMoveComments returns the MoveComments field if non-nil, zero value otherwise.

### GetMoveCommentsOk

`func (o *ScheduledRoomMoveResponseType) GetMoveCommentsOk() (*string, bool)`

GetMoveCommentsOk returns a tuple with the MoveComments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMoveComments

`func (o *ScheduledRoomMoveResponseType) SetMoveComments(v string)`

SetMoveComments sets MoveComments field to given value.

### HasMoveComments

`func (o *ScheduledRoomMoveResponseType) HasMoveComments() bool`

HasMoveComments returns a boolean if a field has been set.

### GetMoveInRoomOccupancyInfo

`func (o *ScheduledRoomMoveResponseType) GetMoveInRoomOccupancyInfo() RoomOccupancyType`

GetMoveInRoomOccupancyInfo returns the MoveInRoomOccupancyInfo field if non-nil, zero value otherwise.

### GetMoveInRoomOccupancyInfoOk

`func (o *ScheduledRoomMoveResponseType) GetMoveInRoomOccupancyInfoOk() (*RoomOccupancyType, bool)`

GetMoveInRoomOccupancyInfoOk returns a tuple with the MoveInRoomOccupancyInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMoveInRoomOccupancyInfo

`func (o *ScheduledRoomMoveResponseType) SetMoveInRoomOccupancyInfo(v RoomOccupancyType)`

SetMoveInRoomOccupancyInfo sets MoveInRoomOccupancyInfo field to given value.

### HasMoveInRoomOccupancyInfo

`func (o *ScheduledRoomMoveResponseType) HasMoveInRoomOccupancyInfo() bool`

HasMoveInRoomOccupancyInfo returns a boolean if a field has been set.

### GetEstimatedMoveTime

`func (o *ScheduledRoomMoveResponseType) GetEstimatedMoveTime() string`

GetEstimatedMoveTime returns the EstimatedMoveTime field if non-nil, zero value otherwise.

### GetEstimatedMoveTimeOk

`func (o *ScheduledRoomMoveResponseType) GetEstimatedMoveTimeOk() (*string, bool)`

GetEstimatedMoveTimeOk returns a tuple with the EstimatedMoveTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEstimatedMoveTime

`func (o *ScheduledRoomMoveResponseType) SetEstimatedMoveTime(v string)`

SetEstimatedMoveTime sets EstimatedMoveTime field to given value.

### HasEstimatedMoveTime

`func (o *ScheduledRoomMoveResponseType) HasEstimatedMoveTime() bool`

HasEstimatedMoveTime returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



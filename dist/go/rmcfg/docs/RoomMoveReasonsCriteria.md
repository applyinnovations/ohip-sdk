# RoomMoveReasonsCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RoomMoveReasons** | Pointer to [**[]RoomMoveReasonType**](RoomMoveReasonType.md) | List of Room Move Reasons. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewRoomMoveReasonsCriteria

`func NewRoomMoveReasonsCriteria() *RoomMoveReasonsCriteria`

NewRoomMoveReasonsCriteria instantiates a new RoomMoveReasonsCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoomMoveReasonsCriteriaWithDefaults

`func NewRoomMoveReasonsCriteriaWithDefaults() *RoomMoveReasonsCriteria`

NewRoomMoveReasonsCriteriaWithDefaults instantiates a new RoomMoveReasonsCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRoomMoveReasons

`func (o *RoomMoveReasonsCriteria) GetRoomMoveReasons() []RoomMoveReasonType`

GetRoomMoveReasons returns the RoomMoveReasons field if non-nil, zero value otherwise.

### GetRoomMoveReasonsOk

`func (o *RoomMoveReasonsCriteria) GetRoomMoveReasonsOk() (*[]RoomMoveReasonType, bool)`

GetRoomMoveReasonsOk returns a tuple with the RoomMoveReasons field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomMoveReasons

`func (o *RoomMoveReasonsCriteria) SetRoomMoveReasons(v []RoomMoveReasonType)`

SetRoomMoveReasons sets RoomMoveReasons field to given value.

### HasRoomMoveReasons

`func (o *RoomMoveReasonsCriteria) HasRoomMoveReasons() bool`

HasRoomMoveReasons returns a boolean if a field has been set.

### GetLinks

`func (o *RoomMoveReasonsCriteria) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *RoomMoveReasonsCriteria) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *RoomMoveReasonsCriteria) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *RoomMoveReasonsCriteria) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *RoomMoveReasonsCriteria) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *RoomMoveReasonsCriteria) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *RoomMoveReasonsCriteria) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *RoomMoveReasonsCriteria) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



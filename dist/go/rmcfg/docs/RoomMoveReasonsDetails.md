# RoomMoveReasonsDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**RoomMoveReasons** | Pointer to [**[]RoomMoveReasonType**](RoomMoveReasonType.md) | List of Room Move Reasons. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewRoomMoveReasonsDetails

`func NewRoomMoveReasonsDetails() *RoomMoveReasonsDetails`

NewRoomMoveReasonsDetails instantiates a new RoomMoveReasonsDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoomMoveReasonsDetailsWithDefaults

`func NewRoomMoveReasonsDetailsWithDefaults() *RoomMoveReasonsDetails`

NewRoomMoveReasonsDetailsWithDefaults instantiates a new RoomMoveReasonsDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *RoomMoveReasonsDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *RoomMoveReasonsDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *RoomMoveReasonsDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *RoomMoveReasonsDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetRoomMoveReasons

`func (o *RoomMoveReasonsDetails) GetRoomMoveReasons() []RoomMoveReasonType`

GetRoomMoveReasons returns the RoomMoveReasons field if non-nil, zero value otherwise.

### GetRoomMoveReasonsOk

`func (o *RoomMoveReasonsDetails) GetRoomMoveReasonsOk() (*[]RoomMoveReasonType, bool)`

GetRoomMoveReasonsOk returns a tuple with the RoomMoveReasons field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomMoveReasons

`func (o *RoomMoveReasonsDetails) SetRoomMoveReasons(v []RoomMoveReasonType)`

SetRoomMoveReasons sets RoomMoveReasons field to given value.

### HasRoomMoveReasons

`func (o *RoomMoveReasonsDetails) HasRoomMoveReasons() bool`

HasRoomMoveReasons returns a boolean if a field has been set.

### GetWarnings

`func (o *RoomMoveReasonsDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *RoomMoveReasonsDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *RoomMoveReasonsDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *RoomMoveReasonsDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



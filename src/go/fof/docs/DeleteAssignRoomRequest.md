# DeleteAssignRoomRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**OverrideRoomNumberLocked** | Pointer to **bool** | Criteria for removing the room from a reservation. | [optional] 
**OverrideRoomOwnership** | Pointer to **bool** | Override the room ownership indicator in the reservation when removing rooms. This is applicable when Room Rotation OPERA Control is active. | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewDeleteAssignRoomRequest

`func NewDeleteAssignRoomRequest() *DeleteAssignRoomRequest`

NewDeleteAssignRoomRequest instantiates a new DeleteAssignRoomRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDeleteAssignRoomRequestWithDefaults

`func NewDeleteAssignRoomRequestWithDefaults() *DeleteAssignRoomRequest`

NewDeleteAssignRoomRequestWithDefaults instantiates a new DeleteAssignRoomRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *DeleteAssignRoomRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *DeleteAssignRoomRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *DeleteAssignRoomRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *DeleteAssignRoomRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetOverrideRoomNumberLocked

`func (o *DeleteAssignRoomRequest) GetOverrideRoomNumberLocked() bool`

GetOverrideRoomNumberLocked returns the OverrideRoomNumberLocked field if non-nil, zero value otherwise.

### GetOverrideRoomNumberLockedOk

`func (o *DeleteAssignRoomRequest) GetOverrideRoomNumberLockedOk() (*bool, bool)`

GetOverrideRoomNumberLockedOk returns a tuple with the OverrideRoomNumberLocked field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverrideRoomNumberLocked

`func (o *DeleteAssignRoomRequest) SetOverrideRoomNumberLocked(v bool)`

SetOverrideRoomNumberLocked sets OverrideRoomNumberLocked field to given value.

### HasOverrideRoomNumberLocked

`func (o *DeleteAssignRoomRequest) HasOverrideRoomNumberLocked() bool`

HasOverrideRoomNumberLocked returns a boolean if a field has been set.

### GetOverrideRoomOwnership

`func (o *DeleteAssignRoomRequest) GetOverrideRoomOwnership() bool`

GetOverrideRoomOwnership returns the OverrideRoomOwnership field if non-nil, zero value otherwise.

### GetOverrideRoomOwnershipOk

`func (o *DeleteAssignRoomRequest) GetOverrideRoomOwnershipOk() (*bool, bool)`

GetOverrideRoomOwnershipOk returns a tuple with the OverrideRoomOwnership field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverrideRoomOwnership

`func (o *DeleteAssignRoomRequest) SetOverrideRoomOwnership(v bool)`

SetOverrideRoomOwnership sets OverrideRoomOwnership field to given value.

### HasOverrideRoomOwnership

`func (o *DeleteAssignRoomRequest) HasOverrideRoomOwnership() bool`

HasOverrideRoomOwnership returns a boolean if a field has been set.

### GetWarnings

`func (o *DeleteAssignRoomRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *DeleteAssignRoomRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *DeleteAssignRoomRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *DeleteAssignRoomRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



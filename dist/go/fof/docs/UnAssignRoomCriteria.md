# UnAssignRoomCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**OverrideRoomNumberLocked** | Pointer to **bool** | Criteria for removing the room from a reservation. | [optional] 
**OverrideRoomOwnership** | Pointer to **bool** | Override the room ownership indicator in the reservation when removing rooms. This is applicable when Room Rotation OPERA Control is active. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewUnAssignRoomCriteria

`func NewUnAssignRoomCriteria() *UnAssignRoomCriteria`

NewUnAssignRoomCriteria instantiates a new UnAssignRoomCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUnAssignRoomCriteriaWithDefaults

`func NewUnAssignRoomCriteriaWithDefaults() *UnAssignRoomCriteria`

NewUnAssignRoomCriteriaWithDefaults instantiates a new UnAssignRoomCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *UnAssignRoomCriteria) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *UnAssignRoomCriteria) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *UnAssignRoomCriteria) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *UnAssignRoomCriteria) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetOverrideRoomNumberLocked

`func (o *UnAssignRoomCriteria) GetOverrideRoomNumberLocked() bool`

GetOverrideRoomNumberLocked returns the OverrideRoomNumberLocked field if non-nil, zero value otherwise.

### GetOverrideRoomNumberLockedOk

`func (o *UnAssignRoomCriteria) GetOverrideRoomNumberLockedOk() (*bool, bool)`

GetOverrideRoomNumberLockedOk returns a tuple with the OverrideRoomNumberLocked field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverrideRoomNumberLocked

`func (o *UnAssignRoomCriteria) SetOverrideRoomNumberLocked(v bool)`

SetOverrideRoomNumberLocked sets OverrideRoomNumberLocked field to given value.

### HasOverrideRoomNumberLocked

`func (o *UnAssignRoomCriteria) HasOverrideRoomNumberLocked() bool`

HasOverrideRoomNumberLocked returns a boolean if a field has been set.

### GetOverrideRoomOwnership

`func (o *UnAssignRoomCriteria) GetOverrideRoomOwnership() bool`

GetOverrideRoomOwnership returns the OverrideRoomOwnership field if non-nil, zero value otherwise.

### GetOverrideRoomOwnershipOk

`func (o *UnAssignRoomCriteria) GetOverrideRoomOwnershipOk() (*bool, bool)`

GetOverrideRoomOwnershipOk returns a tuple with the OverrideRoomOwnership field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverrideRoomOwnership

`func (o *UnAssignRoomCriteria) SetOverrideRoomOwnership(v bool)`

SetOverrideRoomOwnership sets OverrideRoomOwnership field to given value.

### HasOverrideRoomOwnership

`func (o *UnAssignRoomCriteria) HasOverrideRoomOwnership() bool`

HasOverrideRoomOwnership returns a boolean if a field has been set.

### GetWarnings

`func (o *UnAssignRoomCriteria) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *UnAssignRoomCriteria) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *UnAssignRoomCriteria) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *UnAssignRoomCriteria) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



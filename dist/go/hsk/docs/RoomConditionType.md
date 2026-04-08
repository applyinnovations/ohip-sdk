# RoomConditionType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RoomCondition** | Pointer to [**CodeDescriptionType**](CodeDescriptionType.md) |  | [optional] 
**AssignmentType** | Pointer to [**RoomConditionAssigmentType**](RoomConditionAssigmentType.md) |  | [optional] 
**Remarks** | Pointer to **string** | Remarks on room condition assignment. | [optional] 

## Methods

### NewRoomConditionType

`func NewRoomConditionType() *RoomConditionType`

NewRoomConditionType instantiates a new RoomConditionType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoomConditionTypeWithDefaults

`func NewRoomConditionTypeWithDefaults() *RoomConditionType`

NewRoomConditionTypeWithDefaults instantiates a new RoomConditionType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRoomCondition

`func (o *RoomConditionType) GetRoomCondition() CodeDescriptionType`

GetRoomCondition returns the RoomCondition field if non-nil, zero value otherwise.

### GetRoomConditionOk

`func (o *RoomConditionType) GetRoomConditionOk() (*CodeDescriptionType, bool)`

GetRoomConditionOk returns a tuple with the RoomCondition field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomCondition

`func (o *RoomConditionType) SetRoomCondition(v CodeDescriptionType)`

SetRoomCondition sets RoomCondition field to given value.

### HasRoomCondition

`func (o *RoomConditionType) HasRoomCondition() bool`

HasRoomCondition returns a boolean if a field has been set.

### GetAssignmentType

`func (o *RoomConditionType) GetAssignmentType() RoomConditionAssigmentType`

GetAssignmentType returns the AssignmentType field if non-nil, zero value otherwise.

### GetAssignmentTypeOk

`func (o *RoomConditionType) GetAssignmentTypeOk() (*RoomConditionAssigmentType, bool)`

GetAssignmentTypeOk returns a tuple with the AssignmentType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAssignmentType

`func (o *RoomConditionType) SetAssignmentType(v RoomConditionAssigmentType)`

SetAssignmentType sets AssignmentType field to given value.

### HasAssignmentType

`func (o *RoomConditionType) HasAssignmentType() bool`

HasAssignmentType returns a boolean if a field has been set.

### GetRemarks

`func (o *RoomConditionType) GetRemarks() string`

GetRemarks returns the Remarks field if non-nil, zero value otherwise.

### GetRemarksOk

`func (o *RoomConditionType) GetRemarksOk() (*string, bool)`

GetRemarksOk returns a tuple with the Remarks field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRemarks

`func (o *RoomConditionType) SetRemarks(v string)`

SetRemarks sets Remarks field to given value.

### HasRemarks

`func (o *RoomConditionType) HasRemarks() bool`

HasRemarks returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



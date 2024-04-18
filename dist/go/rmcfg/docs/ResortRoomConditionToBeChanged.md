# ResortRoomConditionToBeChanged

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**RoomCondition** | Pointer to [**RoomCondtionType**](RoomCondtionType.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewResortRoomConditionToBeChanged

`func NewResortRoomConditionToBeChanged() *ResortRoomConditionToBeChanged`

NewResortRoomConditionToBeChanged instantiates a new ResortRoomConditionToBeChanged object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewResortRoomConditionToBeChangedWithDefaults

`func NewResortRoomConditionToBeChangedWithDefaults() *ResortRoomConditionToBeChanged`

NewResortRoomConditionToBeChangedWithDefaults instantiates a new ResortRoomConditionToBeChanged object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *ResortRoomConditionToBeChanged) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ResortRoomConditionToBeChanged) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ResortRoomConditionToBeChanged) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ResortRoomConditionToBeChanged) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetRoomCondition

`func (o *ResortRoomConditionToBeChanged) GetRoomCondition() RoomCondtionType`

GetRoomCondition returns the RoomCondition field if non-nil, zero value otherwise.

### GetRoomConditionOk

`func (o *ResortRoomConditionToBeChanged) GetRoomConditionOk() (*RoomCondtionType, bool)`

GetRoomConditionOk returns a tuple with the RoomCondition field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomCondition

`func (o *ResortRoomConditionToBeChanged) SetRoomCondition(v RoomCondtionType)`

SetRoomCondition sets RoomCondition field to given value.

### HasRoomCondition

`func (o *ResortRoomConditionToBeChanged) HasRoomCondition() bool`

HasRoomCondition returns a boolean if a field has been set.

### GetWarnings

`func (o *ResortRoomConditionToBeChanged) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ResortRoomConditionToBeChanged) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ResortRoomConditionToBeChanged) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ResortRoomConditionToBeChanged) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



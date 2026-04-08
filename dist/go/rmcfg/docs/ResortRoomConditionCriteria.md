# ResortRoomConditionCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RoomCondition** | Pointer to [**RoomCondtionType**](RoomCondtionType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewResortRoomConditionCriteria

`func NewResortRoomConditionCriteria() *ResortRoomConditionCriteria`

NewResortRoomConditionCriteria instantiates a new ResortRoomConditionCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewResortRoomConditionCriteriaWithDefaults

`func NewResortRoomConditionCriteriaWithDefaults() *ResortRoomConditionCriteria`

NewResortRoomConditionCriteriaWithDefaults instantiates a new ResortRoomConditionCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRoomCondition

`func (o *ResortRoomConditionCriteria) GetRoomCondition() RoomCondtionType`

GetRoomCondition returns the RoomCondition field if non-nil, zero value otherwise.

### GetRoomConditionOk

`func (o *ResortRoomConditionCriteria) GetRoomConditionOk() (*RoomCondtionType, bool)`

GetRoomConditionOk returns a tuple with the RoomCondition field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomCondition

`func (o *ResortRoomConditionCriteria) SetRoomCondition(v RoomCondtionType)`

SetRoomCondition sets RoomCondition field to given value.

### HasRoomCondition

`func (o *ResortRoomConditionCriteria) HasRoomCondition() bool`

HasRoomCondition returns a boolean if a field has been set.

### GetLinks

`func (o *ResortRoomConditionCriteria) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ResortRoomConditionCriteria) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ResortRoomConditionCriteria) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ResortRoomConditionCriteria) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ResortRoomConditionCriteria) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ResortRoomConditionCriteria) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ResortRoomConditionCriteria) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ResortRoomConditionCriteria) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



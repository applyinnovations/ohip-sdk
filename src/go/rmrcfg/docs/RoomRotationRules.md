# RoomRotationRules

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ForceRecalculate** | Pointer to **bool** | Indicates if Rotation points recalculation job should be re-triggered. | [optional] [default to false]
**RotationRules** | Pointer to [**[]RotationRuleType**](RotationRuleType.md) | Defines collection of Room Rotation Setup Rules. | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewRoomRotationRules

`func NewRoomRotationRules() *RoomRotationRules`

NewRoomRotationRules instantiates a new RoomRotationRules object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoomRotationRulesWithDefaults

`func NewRoomRotationRulesWithDefaults() *RoomRotationRules`

NewRoomRotationRulesWithDefaults instantiates a new RoomRotationRules object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetForceRecalculate

`func (o *RoomRotationRules) GetForceRecalculate() bool`

GetForceRecalculate returns the ForceRecalculate field if non-nil, zero value otherwise.

### GetForceRecalculateOk

`func (o *RoomRotationRules) GetForceRecalculateOk() (*bool, bool)`

GetForceRecalculateOk returns a tuple with the ForceRecalculate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetForceRecalculate

`func (o *RoomRotationRules) SetForceRecalculate(v bool)`

SetForceRecalculate sets ForceRecalculate field to given value.

### HasForceRecalculate

`func (o *RoomRotationRules) HasForceRecalculate() bool`

HasForceRecalculate returns a boolean if a field has been set.

### GetRotationRules

`func (o *RoomRotationRules) GetRotationRules() []RotationRuleType`

GetRotationRules returns the RotationRules field if non-nil, zero value otherwise.

### GetRotationRulesOk

`func (o *RoomRotationRules) GetRotationRulesOk() (*[]RotationRuleType, bool)`

GetRotationRulesOk returns a tuple with the RotationRules field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRotationRules

`func (o *RoomRotationRules) SetRotationRules(v []RotationRuleType)`

SetRotationRules sets RotationRules field to given value.

### HasRotationRules

`func (o *RoomRotationRules) HasRotationRules() bool`

HasRotationRules returns a boolean if a field has been set.

### GetWarnings

`func (o *RoomRotationRules) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *RoomRotationRules) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *RoomRotationRules) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *RoomRotationRules) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# PostRoomRotationRulesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ForceRecalculate** | Pointer to **bool** | Indicates if Rotation points recalculation job should be re-triggered. | [optional] [default to false]
**RotationRules** | Pointer to [**[]RotationRuleType**](RotationRuleType.md) | Defines collection of Room Rotation Setup Rules. | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewPostRoomRotationRulesRequest

`func NewPostRoomRotationRulesRequest() *PostRoomRotationRulesRequest`

NewPostRoomRotationRulesRequest instantiates a new PostRoomRotationRulesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostRoomRotationRulesRequestWithDefaults

`func NewPostRoomRotationRulesRequestWithDefaults() *PostRoomRotationRulesRequest`

NewPostRoomRotationRulesRequestWithDefaults instantiates a new PostRoomRotationRulesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetForceRecalculate

`func (o *PostRoomRotationRulesRequest) GetForceRecalculate() bool`

GetForceRecalculate returns the ForceRecalculate field if non-nil, zero value otherwise.

### GetForceRecalculateOk

`func (o *PostRoomRotationRulesRequest) GetForceRecalculateOk() (*bool, bool)`

GetForceRecalculateOk returns a tuple with the ForceRecalculate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetForceRecalculate

`func (o *PostRoomRotationRulesRequest) SetForceRecalculate(v bool)`

SetForceRecalculate sets ForceRecalculate field to given value.

### HasForceRecalculate

`func (o *PostRoomRotationRulesRequest) HasForceRecalculate() bool`

HasForceRecalculate returns a boolean if a field has been set.

### GetRotationRules

`func (o *PostRoomRotationRulesRequest) GetRotationRules() []RotationRuleType`

GetRotationRules returns the RotationRules field if non-nil, zero value otherwise.

### GetRotationRulesOk

`func (o *PostRoomRotationRulesRequest) GetRotationRulesOk() (*[]RotationRuleType, bool)`

GetRotationRulesOk returns a tuple with the RotationRules field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRotationRules

`func (o *PostRoomRotationRulesRequest) SetRotationRules(v []RotationRuleType)`

SetRotationRules sets RotationRules field to given value.

### HasRotationRules

`func (o *PostRoomRotationRulesRequest) HasRotationRules() bool`

HasRotationRules returns a boolean if a field has been set.

### GetWarnings

`func (o *PostRoomRotationRulesRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostRoomRotationRulesRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostRoomRotationRulesRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostRoomRotationRulesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



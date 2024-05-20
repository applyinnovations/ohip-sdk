# OverrideReasonsCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**OverrideReasons** | Pointer to [**[]RoomRotationOverrideReasonType**](RoomRotationOverrideReasonType.md) | Room Rotation Override Reason Enumeration element. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewOverrideReasonsCriteria

`func NewOverrideReasonsCriteria() *OverrideReasonsCriteria`

NewOverrideReasonsCriteria instantiates a new OverrideReasonsCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewOverrideReasonsCriteriaWithDefaults

`func NewOverrideReasonsCriteriaWithDefaults() *OverrideReasonsCriteria`

NewOverrideReasonsCriteriaWithDefaults instantiates a new OverrideReasonsCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetOverrideReasons

`func (o *OverrideReasonsCriteria) GetOverrideReasons() []RoomRotationOverrideReasonType`

GetOverrideReasons returns the OverrideReasons field if non-nil, zero value otherwise.

### GetOverrideReasonsOk

`func (o *OverrideReasonsCriteria) GetOverrideReasonsOk() (*[]RoomRotationOverrideReasonType, bool)`

GetOverrideReasonsOk returns a tuple with the OverrideReasons field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverrideReasons

`func (o *OverrideReasonsCriteria) SetOverrideReasons(v []RoomRotationOverrideReasonType)`

SetOverrideReasons sets OverrideReasons field to given value.

### HasOverrideReasons

`func (o *OverrideReasonsCriteria) HasOverrideReasons() bool`

HasOverrideReasons returns a boolean if a field has been set.

### GetWarnings

`func (o *OverrideReasonsCriteria) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *OverrideReasonsCriteria) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *OverrideReasonsCriteria) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *OverrideReasonsCriteria) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



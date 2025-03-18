# PolicyScheduleDetailType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TimeSpan** | Pointer to [**TimeSpanType**](TimeSpanType.md) |  | [optional] 
**Policy** | Pointer to [**CodeDescriptionType**](CodeDescriptionType.md) |  | [optional] 
**ApplicableCodes** | Pointer to [**PolicyApplicableCodesType**](PolicyApplicableCodesType.md) |  | [optional] 
**Sequence** | Pointer to **float32** | Sequence for the schedule. | [optional] 
**Override** | Pointer to **bool** | override the schedule? | [optional] 
**Inactive** | Pointer to **bool** | schedule Inactive? | [optional] 

## Methods

### NewPolicyScheduleDetailType

`func NewPolicyScheduleDetailType() *PolicyScheduleDetailType`

NewPolicyScheduleDetailType instantiates a new PolicyScheduleDetailType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPolicyScheduleDetailTypeWithDefaults

`func NewPolicyScheduleDetailTypeWithDefaults() *PolicyScheduleDetailType`

NewPolicyScheduleDetailTypeWithDefaults instantiates a new PolicyScheduleDetailType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTimeSpan

`func (o *PolicyScheduleDetailType) GetTimeSpan() TimeSpanType`

GetTimeSpan returns the TimeSpan field if non-nil, zero value otherwise.

### GetTimeSpanOk

`func (o *PolicyScheduleDetailType) GetTimeSpanOk() (*TimeSpanType, bool)`

GetTimeSpanOk returns a tuple with the TimeSpan field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimeSpan

`func (o *PolicyScheduleDetailType) SetTimeSpan(v TimeSpanType)`

SetTimeSpan sets TimeSpan field to given value.

### HasTimeSpan

`func (o *PolicyScheduleDetailType) HasTimeSpan() bool`

HasTimeSpan returns a boolean if a field has been set.

### GetPolicy

`func (o *PolicyScheduleDetailType) GetPolicy() CodeDescriptionType`

GetPolicy returns the Policy field if non-nil, zero value otherwise.

### GetPolicyOk

`func (o *PolicyScheduleDetailType) GetPolicyOk() (*CodeDescriptionType, bool)`

GetPolicyOk returns a tuple with the Policy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPolicy

`func (o *PolicyScheduleDetailType) SetPolicy(v CodeDescriptionType)`

SetPolicy sets Policy field to given value.

### HasPolicy

`func (o *PolicyScheduleDetailType) HasPolicy() bool`

HasPolicy returns a boolean if a field has been set.

### GetApplicableCodes

`func (o *PolicyScheduleDetailType) GetApplicableCodes() PolicyApplicableCodesType`

GetApplicableCodes returns the ApplicableCodes field if non-nil, zero value otherwise.

### GetApplicableCodesOk

`func (o *PolicyScheduleDetailType) GetApplicableCodesOk() (*PolicyApplicableCodesType, bool)`

GetApplicableCodesOk returns a tuple with the ApplicableCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApplicableCodes

`func (o *PolicyScheduleDetailType) SetApplicableCodes(v PolicyApplicableCodesType)`

SetApplicableCodes sets ApplicableCodes field to given value.

### HasApplicableCodes

`func (o *PolicyScheduleDetailType) HasApplicableCodes() bool`

HasApplicableCodes returns a boolean if a field has been set.

### GetSequence

`func (o *PolicyScheduleDetailType) GetSequence() float32`

GetSequence returns the Sequence field if non-nil, zero value otherwise.

### GetSequenceOk

`func (o *PolicyScheduleDetailType) GetSequenceOk() (*float32, bool)`

GetSequenceOk returns a tuple with the Sequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSequence

`func (o *PolicyScheduleDetailType) SetSequence(v float32)`

SetSequence sets Sequence field to given value.

### HasSequence

`func (o *PolicyScheduleDetailType) HasSequence() bool`

HasSequence returns a boolean if a field has been set.

### GetOverride

`func (o *PolicyScheduleDetailType) GetOverride() bool`

GetOverride returns the Override field if non-nil, zero value otherwise.

### GetOverrideOk

`func (o *PolicyScheduleDetailType) GetOverrideOk() (*bool, bool)`

GetOverrideOk returns a tuple with the Override field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverride

`func (o *PolicyScheduleDetailType) SetOverride(v bool)`

SetOverride sets Override field to given value.

### HasOverride

`func (o *PolicyScheduleDetailType) HasOverride() bool`

HasOverride returns a boolean if a field has been set.

### GetInactive

`func (o *PolicyScheduleDetailType) GetInactive() bool`

GetInactive returns the Inactive field if non-nil, zero value otherwise.

### GetInactiveOk

`func (o *PolicyScheduleDetailType) GetInactiveOk() (*bool, bool)`

GetInactiveOk returns a tuple with the Inactive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInactive

`func (o *PolicyScheduleDetailType) SetInactive(v bool)`

SetInactive sets Inactive field to given value.

### HasInactive

`func (o *PolicyScheduleDetailType) HasInactive() bool`

HasInactive returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



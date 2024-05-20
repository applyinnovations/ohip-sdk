# CreateGuaranteeCodeScheduleDetailType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApplicableCodes** | Pointer to [**CreatePolicyApplicableCodesType**](CreatePolicyApplicableCodesType.md) |  | [optional] 
**GuaranteeCode** | Pointer to [**CodeDescriptionType**](CodeDescriptionType.md) |  | [optional] 
**Inactive** | Pointer to **bool** | schedule Inactive? | [optional] 
**Override** | Pointer to **bool** | override the schedule? | [optional] 
**Sequence** | Pointer to **float32** | Sequence for the schedule. | [optional] 
**TimeSpan** | Pointer to [**TimeSpanType**](TimeSpanType.md) |  | [optional] 

## Methods

### NewCreateGuaranteeCodeScheduleDetailType

`func NewCreateGuaranteeCodeScheduleDetailType() *CreateGuaranteeCodeScheduleDetailType`

NewCreateGuaranteeCodeScheduleDetailType instantiates a new CreateGuaranteeCodeScheduleDetailType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreateGuaranteeCodeScheduleDetailTypeWithDefaults

`func NewCreateGuaranteeCodeScheduleDetailTypeWithDefaults() *CreateGuaranteeCodeScheduleDetailType`

NewCreateGuaranteeCodeScheduleDetailTypeWithDefaults instantiates a new CreateGuaranteeCodeScheduleDetailType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetApplicableCodes

`func (o *CreateGuaranteeCodeScheduleDetailType) GetApplicableCodes() CreatePolicyApplicableCodesType`

GetApplicableCodes returns the ApplicableCodes field if non-nil, zero value otherwise.

### GetApplicableCodesOk

`func (o *CreateGuaranteeCodeScheduleDetailType) GetApplicableCodesOk() (*CreatePolicyApplicableCodesType, bool)`

GetApplicableCodesOk returns a tuple with the ApplicableCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApplicableCodes

`func (o *CreateGuaranteeCodeScheduleDetailType) SetApplicableCodes(v CreatePolicyApplicableCodesType)`

SetApplicableCodes sets ApplicableCodes field to given value.

### HasApplicableCodes

`func (o *CreateGuaranteeCodeScheduleDetailType) HasApplicableCodes() bool`

HasApplicableCodes returns a boolean if a field has been set.

### GetGuaranteeCode

`func (o *CreateGuaranteeCodeScheduleDetailType) GetGuaranteeCode() CodeDescriptionType`

GetGuaranteeCode returns the GuaranteeCode field if non-nil, zero value otherwise.

### GetGuaranteeCodeOk

`func (o *CreateGuaranteeCodeScheduleDetailType) GetGuaranteeCodeOk() (*CodeDescriptionType, bool)`

GetGuaranteeCodeOk returns a tuple with the GuaranteeCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuaranteeCode

`func (o *CreateGuaranteeCodeScheduleDetailType) SetGuaranteeCode(v CodeDescriptionType)`

SetGuaranteeCode sets GuaranteeCode field to given value.

### HasGuaranteeCode

`func (o *CreateGuaranteeCodeScheduleDetailType) HasGuaranteeCode() bool`

HasGuaranteeCode returns a boolean if a field has been set.

### GetInactive

`func (o *CreateGuaranteeCodeScheduleDetailType) GetInactive() bool`

GetInactive returns the Inactive field if non-nil, zero value otherwise.

### GetInactiveOk

`func (o *CreateGuaranteeCodeScheduleDetailType) GetInactiveOk() (*bool, bool)`

GetInactiveOk returns a tuple with the Inactive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInactive

`func (o *CreateGuaranteeCodeScheduleDetailType) SetInactive(v bool)`

SetInactive sets Inactive field to given value.

### HasInactive

`func (o *CreateGuaranteeCodeScheduleDetailType) HasInactive() bool`

HasInactive returns a boolean if a field has been set.

### GetOverride

`func (o *CreateGuaranteeCodeScheduleDetailType) GetOverride() bool`

GetOverride returns the Override field if non-nil, zero value otherwise.

### GetOverrideOk

`func (o *CreateGuaranteeCodeScheduleDetailType) GetOverrideOk() (*bool, bool)`

GetOverrideOk returns a tuple with the Override field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverride

`func (o *CreateGuaranteeCodeScheduleDetailType) SetOverride(v bool)`

SetOverride sets Override field to given value.

### HasOverride

`func (o *CreateGuaranteeCodeScheduleDetailType) HasOverride() bool`

HasOverride returns a boolean if a field has been set.

### GetSequence

`func (o *CreateGuaranteeCodeScheduleDetailType) GetSequence() float32`

GetSequence returns the Sequence field if non-nil, zero value otherwise.

### GetSequenceOk

`func (o *CreateGuaranteeCodeScheduleDetailType) GetSequenceOk() (*float32, bool)`

GetSequenceOk returns a tuple with the Sequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSequence

`func (o *CreateGuaranteeCodeScheduleDetailType) SetSequence(v float32)`

SetSequence sets Sequence field to given value.

### HasSequence

`func (o *CreateGuaranteeCodeScheduleDetailType) HasSequence() bool`

HasSequence returns a boolean if a field has been set.

### GetTimeSpan

`func (o *CreateGuaranteeCodeScheduleDetailType) GetTimeSpan() TimeSpanType`

GetTimeSpan returns the TimeSpan field if non-nil, zero value otherwise.

### GetTimeSpanOk

`func (o *CreateGuaranteeCodeScheduleDetailType) GetTimeSpanOk() (*TimeSpanType, bool)`

GetTimeSpanOk returns a tuple with the TimeSpan field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimeSpan

`func (o *CreateGuaranteeCodeScheduleDetailType) SetTimeSpan(v TimeSpanType)`

SetTimeSpan sets TimeSpan field to given value.

### HasTimeSpan

`func (o *CreateGuaranteeCodeScheduleDetailType) HasTimeSpan() bool`

HasTimeSpan returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# ConfigCancelPenaltyType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Deadline** | Pointer to [**PolicyDeadlineType**](PolicyDeadlineType.md) |  | [optional] 
**AmountPercent** | Pointer to [**PolicyAmountPercentType**](PolicyAmountPercentType.md) |  | [optional] 
**PenaltyDescription** | Pointer to **string** | Text description of the Penalty in a given language. | [optional] 
**OffsetUnit** | Pointer to [**OffsetUnitType**](OffsetUnitType.md) |  | [optional] 
**FormattedRule** | Pointer to **string** | Formatted Text Rule of the Cancellation Penalty. | [optional] 
**PolicyCode** | Pointer to **string** | Policy Code. | [optional] 
**Manual** | Pointer to **bool** | Flag to indicate if the cancellation policy is manual. | [optional] 
**NonRefundable** | Pointer to **bool** | Indicates if the amount is refundable if booking is canceled. | [optional] 
**Sequence** | Pointer to **int32** | The sequence number that determines the position of this rule in the Deposit or Cancellation rules LOV. | [optional] 
**Inactive** | Pointer to **bool** | Inactive rules are no longer available for attachment to rate codes, reservation types or reservations; however, they are still recorded in the database for historical purposes. | [optional] 

## Methods

### NewConfigCancelPenaltyType

`func NewConfigCancelPenaltyType() *ConfigCancelPenaltyType`

NewConfigCancelPenaltyType instantiates a new ConfigCancelPenaltyType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewConfigCancelPenaltyTypeWithDefaults

`func NewConfigCancelPenaltyTypeWithDefaults() *ConfigCancelPenaltyType`

NewConfigCancelPenaltyTypeWithDefaults instantiates a new ConfigCancelPenaltyType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDeadline

`func (o *ConfigCancelPenaltyType) GetDeadline() PolicyDeadlineType`

GetDeadline returns the Deadline field if non-nil, zero value otherwise.

### GetDeadlineOk

`func (o *ConfigCancelPenaltyType) GetDeadlineOk() (*PolicyDeadlineType, bool)`

GetDeadlineOk returns a tuple with the Deadline field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeadline

`func (o *ConfigCancelPenaltyType) SetDeadline(v PolicyDeadlineType)`

SetDeadline sets Deadline field to given value.

### HasDeadline

`func (o *ConfigCancelPenaltyType) HasDeadline() bool`

HasDeadline returns a boolean if a field has been set.

### GetAmountPercent

`func (o *ConfigCancelPenaltyType) GetAmountPercent() PolicyAmountPercentType`

GetAmountPercent returns the AmountPercent field if non-nil, zero value otherwise.

### GetAmountPercentOk

`func (o *ConfigCancelPenaltyType) GetAmountPercentOk() (*PolicyAmountPercentType, bool)`

GetAmountPercentOk returns a tuple with the AmountPercent field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmountPercent

`func (o *ConfigCancelPenaltyType) SetAmountPercent(v PolicyAmountPercentType)`

SetAmountPercent sets AmountPercent field to given value.

### HasAmountPercent

`func (o *ConfigCancelPenaltyType) HasAmountPercent() bool`

HasAmountPercent returns a boolean if a field has been set.

### GetPenaltyDescription

`func (o *ConfigCancelPenaltyType) GetPenaltyDescription() string`

GetPenaltyDescription returns the PenaltyDescription field if non-nil, zero value otherwise.

### GetPenaltyDescriptionOk

`func (o *ConfigCancelPenaltyType) GetPenaltyDescriptionOk() (*string, bool)`

GetPenaltyDescriptionOk returns a tuple with the PenaltyDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPenaltyDescription

`func (o *ConfigCancelPenaltyType) SetPenaltyDescription(v string)`

SetPenaltyDescription sets PenaltyDescription field to given value.

### HasPenaltyDescription

`func (o *ConfigCancelPenaltyType) HasPenaltyDescription() bool`

HasPenaltyDescription returns a boolean if a field has been set.

### GetOffsetUnit

`func (o *ConfigCancelPenaltyType) GetOffsetUnit() OffsetUnitType`

GetOffsetUnit returns the OffsetUnit field if non-nil, zero value otherwise.

### GetOffsetUnitOk

`func (o *ConfigCancelPenaltyType) GetOffsetUnitOk() (*OffsetUnitType, bool)`

GetOffsetUnitOk returns a tuple with the OffsetUnit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOffsetUnit

`func (o *ConfigCancelPenaltyType) SetOffsetUnit(v OffsetUnitType)`

SetOffsetUnit sets OffsetUnit field to given value.

### HasOffsetUnit

`func (o *ConfigCancelPenaltyType) HasOffsetUnit() bool`

HasOffsetUnit returns a boolean if a field has been set.

### GetFormattedRule

`func (o *ConfigCancelPenaltyType) GetFormattedRule() string`

GetFormattedRule returns the FormattedRule field if non-nil, zero value otherwise.

### GetFormattedRuleOk

`func (o *ConfigCancelPenaltyType) GetFormattedRuleOk() (*string, bool)`

GetFormattedRuleOk returns a tuple with the FormattedRule field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFormattedRule

`func (o *ConfigCancelPenaltyType) SetFormattedRule(v string)`

SetFormattedRule sets FormattedRule field to given value.

### HasFormattedRule

`func (o *ConfigCancelPenaltyType) HasFormattedRule() bool`

HasFormattedRule returns a boolean if a field has been set.

### GetPolicyCode

`func (o *ConfigCancelPenaltyType) GetPolicyCode() string`

GetPolicyCode returns the PolicyCode field if non-nil, zero value otherwise.

### GetPolicyCodeOk

`func (o *ConfigCancelPenaltyType) GetPolicyCodeOk() (*string, bool)`

GetPolicyCodeOk returns a tuple with the PolicyCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPolicyCode

`func (o *ConfigCancelPenaltyType) SetPolicyCode(v string)`

SetPolicyCode sets PolicyCode field to given value.

### HasPolicyCode

`func (o *ConfigCancelPenaltyType) HasPolicyCode() bool`

HasPolicyCode returns a boolean if a field has been set.

### GetManual

`func (o *ConfigCancelPenaltyType) GetManual() bool`

GetManual returns the Manual field if non-nil, zero value otherwise.

### GetManualOk

`func (o *ConfigCancelPenaltyType) GetManualOk() (*bool, bool)`

GetManualOk returns a tuple with the Manual field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManual

`func (o *ConfigCancelPenaltyType) SetManual(v bool)`

SetManual sets Manual field to given value.

### HasManual

`func (o *ConfigCancelPenaltyType) HasManual() bool`

HasManual returns a boolean if a field has been set.

### GetNonRefundable

`func (o *ConfigCancelPenaltyType) GetNonRefundable() bool`

GetNonRefundable returns the NonRefundable field if non-nil, zero value otherwise.

### GetNonRefundableOk

`func (o *ConfigCancelPenaltyType) GetNonRefundableOk() (*bool, bool)`

GetNonRefundableOk returns a tuple with the NonRefundable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNonRefundable

`func (o *ConfigCancelPenaltyType) SetNonRefundable(v bool)`

SetNonRefundable sets NonRefundable field to given value.

### HasNonRefundable

`func (o *ConfigCancelPenaltyType) HasNonRefundable() bool`

HasNonRefundable returns a boolean if a field has been set.

### GetSequence

`func (o *ConfigCancelPenaltyType) GetSequence() int32`

GetSequence returns the Sequence field if non-nil, zero value otherwise.

### GetSequenceOk

`func (o *ConfigCancelPenaltyType) GetSequenceOk() (*int32, bool)`

GetSequenceOk returns a tuple with the Sequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSequence

`func (o *ConfigCancelPenaltyType) SetSequence(v int32)`

SetSequence sets Sequence field to given value.

### HasSequence

`func (o *ConfigCancelPenaltyType) HasSequence() bool`

HasSequence returns a boolean if a field has been set.

### GetInactive

`func (o *ConfigCancelPenaltyType) GetInactive() bool`

GetInactive returns the Inactive field if non-nil, zero value otherwise.

### GetInactiveOk

`func (o *ConfigCancelPenaltyType) GetInactiveOk() (*bool, bool)`

GetInactiveOk returns a tuple with the Inactive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInactive

`func (o *ConfigCancelPenaltyType) SetInactive(v bool)`

SetInactive sets Inactive field to given value.

### HasInactive

`func (o *ConfigCancelPenaltyType) HasInactive() bool`

HasInactive returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



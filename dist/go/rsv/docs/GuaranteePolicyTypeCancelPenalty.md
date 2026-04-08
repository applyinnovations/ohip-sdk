# GuaranteePolicyTypeCancelPenalty

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
**Effective** | Pointer to **bool** | Indicator if Cancellation Penalty is currently applicable or not. | [optional] 
**EstimatedAmount** | Pointer to **float32** | Message. | [optional] 

## Methods

### NewGuaranteePolicyTypeCancelPenalty

`func NewGuaranteePolicyTypeCancelPenalty() *GuaranteePolicyTypeCancelPenalty`

NewGuaranteePolicyTypeCancelPenalty instantiates a new GuaranteePolicyTypeCancelPenalty object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGuaranteePolicyTypeCancelPenaltyWithDefaults

`func NewGuaranteePolicyTypeCancelPenaltyWithDefaults() *GuaranteePolicyTypeCancelPenalty`

NewGuaranteePolicyTypeCancelPenaltyWithDefaults instantiates a new GuaranteePolicyTypeCancelPenalty object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDeadline

`func (o *GuaranteePolicyTypeCancelPenalty) GetDeadline() PolicyDeadlineType`

GetDeadline returns the Deadline field if non-nil, zero value otherwise.

### GetDeadlineOk

`func (o *GuaranteePolicyTypeCancelPenalty) GetDeadlineOk() (*PolicyDeadlineType, bool)`

GetDeadlineOk returns a tuple with the Deadline field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeadline

`func (o *GuaranteePolicyTypeCancelPenalty) SetDeadline(v PolicyDeadlineType)`

SetDeadline sets Deadline field to given value.

### HasDeadline

`func (o *GuaranteePolicyTypeCancelPenalty) HasDeadline() bool`

HasDeadline returns a boolean if a field has been set.

### GetAmountPercent

`func (o *GuaranteePolicyTypeCancelPenalty) GetAmountPercent() PolicyAmountPercentType`

GetAmountPercent returns the AmountPercent field if non-nil, zero value otherwise.

### GetAmountPercentOk

`func (o *GuaranteePolicyTypeCancelPenalty) GetAmountPercentOk() (*PolicyAmountPercentType, bool)`

GetAmountPercentOk returns a tuple with the AmountPercent field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmountPercent

`func (o *GuaranteePolicyTypeCancelPenalty) SetAmountPercent(v PolicyAmountPercentType)`

SetAmountPercent sets AmountPercent field to given value.

### HasAmountPercent

`func (o *GuaranteePolicyTypeCancelPenalty) HasAmountPercent() bool`

HasAmountPercent returns a boolean if a field has been set.

### GetPenaltyDescription

`func (o *GuaranteePolicyTypeCancelPenalty) GetPenaltyDescription() string`

GetPenaltyDescription returns the PenaltyDescription field if non-nil, zero value otherwise.

### GetPenaltyDescriptionOk

`func (o *GuaranteePolicyTypeCancelPenalty) GetPenaltyDescriptionOk() (*string, bool)`

GetPenaltyDescriptionOk returns a tuple with the PenaltyDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPenaltyDescription

`func (o *GuaranteePolicyTypeCancelPenalty) SetPenaltyDescription(v string)`

SetPenaltyDescription sets PenaltyDescription field to given value.

### HasPenaltyDescription

`func (o *GuaranteePolicyTypeCancelPenalty) HasPenaltyDescription() bool`

HasPenaltyDescription returns a boolean if a field has been set.

### GetOffsetUnit

`func (o *GuaranteePolicyTypeCancelPenalty) GetOffsetUnit() OffsetUnitType`

GetOffsetUnit returns the OffsetUnit field if non-nil, zero value otherwise.

### GetOffsetUnitOk

`func (o *GuaranteePolicyTypeCancelPenalty) GetOffsetUnitOk() (*OffsetUnitType, bool)`

GetOffsetUnitOk returns a tuple with the OffsetUnit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOffsetUnit

`func (o *GuaranteePolicyTypeCancelPenalty) SetOffsetUnit(v OffsetUnitType)`

SetOffsetUnit sets OffsetUnit field to given value.

### HasOffsetUnit

`func (o *GuaranteePolicyTypeCancelPenalty) HasOffsetUnit() bool`

HasOffsetUnit returns a boolean if a field has been set.

### GetFormattedRule

`func (o *GuaranteePolicyTypeCancelPenalty) GetFormattedRule() string`

GetFormattedRule returns the FormattedRule field if non-nil, zero value otherwise.

### GetFormattedRuleOk

`func (o *GuaranteePolicyTypeCancelPenalty) GetFormattedRuleOk() (*string, bool)`

GetFormattedRuleOk returns a tuple with the FormattedRule field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFormattedRule

`func (o *GuaranteePolicyTypeCancelPenalty) SetFormattedRule(v string)`

SetFormattedRule sets FormattedRule field to given value.

### HasFormattedRule

`func (o *GuaranteePolicyTypeCancelPenalty) HasFormattedRule() bool`

HasFormattedRule returns a boolean if a field has been set.

### GetPolicyCode

`func (o *GuaranteePolicyTypeCancelPenalty) GetPolicyCode() string`

GetPolicyCode returns the PolicyCode field if non-nil, zero value otherwise.

### GetPolicyCodeOk

`func (o *GuaranteePolicyTypeCancelPenalty) GetPolicyCodeOk() (*string, bool)`

GetPolicyCodeOk returns a tuple with the PolicyCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPolicyCode

`func (o *GuaranteePolicyTypeCancelPenalty) SetPolicyCode(v string)`

SetPolicyCode sets PolicyCode field to given value.

### HasPolicyCode

`func (o *GuaranteePolicyTypeCancelPenalty) HasPolicyCode() bool`

HasPolicyCode returns a boolean if a field has been set.

### GetManual

`func (o *GuaranteePolicyTypeCancelPenalty) GetManual() bool`

GetManual returns the Manual field if non-nil, zero value otherwise.

### GetManualOk

`func (o *GuaranteePolicyTypeCancelPenalty) GetManualOk() (*bool, bool)`

GetManualOk returns a tuple with the Manual field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManual

`func (o *GuaranteePolicyTypeCancelPenalty) SetManual(v bool)`

SetManual sets Manual field to given value.

### HasManual

`func (o *GuaranteePolicyTypeCancelPenalty) HasManual() bool`

HasManual returns a boolean if a field has been set.

### GetNonRefundable

`func (o *GuaranteePolicyTypeCancelPenalty) GetNonRefundable() bool`

GetNonRefundable returns the NonRefundable field if non-nil, zero value otherwise.

### GetNonRefundableOk

`func (o *GuaranteePolicyTypeCancelPenalty) GetNonRefundableOk() (*bool, bool)`

GetNonRefundableOk returns a tuple with the NonRefundable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNonRefundable

`func (o *GuaranteePolicyTypeCancelPenalty) SetNonRefundable(v bool)`

SetNonRefundable sets NonRefundable field to given value.

### HasNonRefundable

`func (o *GuaranteePolicyTypeCancelPenalty) HasNonRefundable() bool`

HasNonRefundable returns a boolean if a field has been set.

### GetEffective

`func (o *GuaranteePolicyTypeCancelPenalty) GetEffective() bool`

GetEffective returns the Effective field if non-nil, zero value otherwise.

### GetEffectiveOk

`func (o *GuaranteePolicyTypeCancelPenalty) GetEffectiveOk() (*bool, bool)`

GetEffectiveOk returns a tuple with the Effective field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEffective

`func (o *GuaranteePolicyTypeCancelPenalty) SetEffective(v bool)`

SetEffective sets Effective field to given value.

### HasEffective

`func (o *GuaranteePolicyTypeCancelPenalty) HasEffective() bool`

HasEffective returns a boolean if a field has been set.

### GetEstimatedAmount

`func (o *GuaranteePolicyTypeCancelPenalty) GetEstimatedAmount() float32`

GetEstimatedAmount returns the EstimatedAmount field if non-nil, zero value otherwise.

### GetEstimatedAmountOk

`func (o *GuaranteePolicyTypeCancelPenalty) GetEstimatedAmountOk() (*float32, bool)`

GetEstimatedAmountOk returns a tuple with the EstimatedAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEstimatedAmount

`func (o *GuaranteePolicyTypeCancelPenalty) SetEstimatedAmount(v float32)`

SetEstimatedAmount sets EstimatedAmount field to given value.

### HasEstimatedAmount

`func (o *GuaranteePolicyTypeCancelPenalty) HasEstimatedAmount() bool`

HasEstimatedAmount returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



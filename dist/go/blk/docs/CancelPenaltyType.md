# CancelPenaltyType

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
**EstimatedAmount** | Pointer to **float32** | Estimated Amount for the cancellation penalty. | [optional] 

## Methods

### NewCancelPenaltyType

`func NewCancelPenaltyType() *CancelPenaltyType`

NewCancelPenaltyType instantiates a new CancelPenaltyType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCancelPenaltyTypeWithDefaults

`func NewCancelPenaltyTypeWithDefaults() *CancelPenaltyType`

NewCancelPenaltyTypeWithDefaults instantiates a new CancelPenaltyType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDeadline

`func (o *CancelPenaltyType) GetDeadline() PolicyDeadlineType`

GetDeadline returns the Deadline field if non-nil, zero value otherwise.

### GetDeadlineOk

`func (o *CancelPenaltyType) GetDeadlineOk() (*PolicyDeadlineType, bool)`

GetDeadlineOk returns a tuple with the Deadline field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeadline

`func (o *CancelPenaltyType) SetDeadline(v PolicyDeadlineType)`

SetDeadline sets Deadline field to given value.

### HasDeadline

`func (o *CancelPenaltyType) HasDeadline() bool`

HasDeadline returns a boolean if a field has been set.

### GetAmountPercent

`func (o *CancelPenaltyType) GetAmountPercent() PolicyAmountPercentType`

GetAmountPercent returns the AmountPercent field if non-nil, zero value otherwise.

### GetAmountPercentOk

`func (o *CancelPenaltyType) GetAmountPercentOk() (*PolicyAmountPercentType, bool)`

GetAmountPercentOk returns a tuple with the AmountPercent field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmountPercent

`func (o *CancelPenaltyType) SetAmountPercent(v PolicyAmountPercentType)`

SetAmountPercent sets AmountPercent field to given value.

### HasAmountPercent

`func (o *CancelPenaltyType) HasAmountPercent() bool`

HasAmountPercent returns a boolean if a field has been set.

### GetPenaltyDescription

`func (o *CancelPenaltyType) GetPenaltyDescription() string`

GetPenaltyDescription returns the PenaltyDescription field if non-nil, zero value otherwise.

### GetPenaltyDescriptionOk

`func (o *CancelPenaltyType) GetPenaltyDescriptionOk() (*string, bool)`

GetPenaltyDescriptionOk returns a tuple with the PenaltyDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPenaltyDescription

`func (o *CancelPenaltyType) SetPenaltyDescription(v string)`

SetPenaltyDescription sets PenaltyDescription field to given value.

### HasPenaltyDescription

`func (o *CancelPenaltyType) HasPenaltyDescription() bool`

HasPenaltyDescription returns a boolean if a field has been set.

### GetOffsetUnit

`func (o *CancelPenaltyType) GetOffsetUnit() OffsetUnitType`

GetOffsetUnit returns the OffsetUnit field if non-nil, zero value otherwise.

### GetOffsetUnitOk

`func (o *CancelPenaltyType) GetOffsetUnitOk() (*OffsetUnitType, bool)`

GetOffsetUnitOk returns a tuple with the OffsetUnit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOffsetUnit

`func (o *CancelPenaltyType) SetOffsetUnit(v OffsetUnitType)`

SetOffsetUnit sets OffsetUnit field to given value.

### HasOffsetUnit

`func (o *CancelPenaltyType) HasOffsetUnit() bool`

HasOffsetUnit returns a boolean if a field has been set.

### GetFormattedRule

`func (o *CancelPenaltyType) GetFormattedRule() string`

GetFormattedRule returns the FormattedRule field if non-nil, zero value otherwise.

### GetFormattedRuleOk

`func (o *CancelPenaltyType) GetFormattedRuleOk() (*string, bool)`

GetFormattedRuleOk returns a tuple with the FormattedRule field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFormattedRule

`func (o *CancelPenaltyType) SetFormattedRule(v string)`

SetFormattedRule sets FormattedRule field to given value.

### HasFormattedRule

`func (o *CancelPenaltyType) HasFormattedRule() bool`

HasFormattedRule returns a boolean if a field has been set.

### GetPolicyCode

`func (o *CancelPenaltyType) GetPolicyCode() string`

GetPolicyCode returns the PolicyCode field if non-nil, zero value otherwise.

### GetPolicyCodeOk

`func (o *CancelPenaltyType) GetPolicyCodeOk() (*string, bool)`

GetPolicyCodeOk returns a tuple with the PolicyCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPolicyCode

`func (o *CancelPenaltyType) SetPolicyCode(v string)`

SetPolicyCode sets PolicyCode field to given value.

### HasPolicyCode

`func (o *CancelPenaltyType) HasPolicyCode() bool`

HasPolicyCode returns a boolean if a field has been set.

### GetManual

`func (o *CancelPenaltyType) GetManual() bool`

GetManual returns the Manual field if non-nil, zero value otherwise.

### GetManualOk

`func (o *CancelPenaltyType) GetManualOk() (*bool, bool)`

GetManualOk returns a tuple with the Manual field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManual

`func (o *CancelPenaltyType) SetManual(v bool)`

SetManual sets Manual field to given value.

### HasManual

`func (o *CancelPenaltyType) HasManual() bool`

HasManual returns a boolean if a field has been set.

### GetNonRefundable

`func (o *CancelPenaltyType) GetNonRefundable() bool`

GetNonRefundable returns the NonRefundable field if non-nil, zero value otherwise.

### GetNonRefundableOk

`func (o *CancelPenaltyType) GetNonRefundableOk() (*bool, bool)`

GetNonRefundableOk returns a tuple with the NonRefundable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNonRefundable

`func (o *CancelPenaltyType) SetNonRefundable(v bool)`

SetNonRefundable sets NonRefundable field to given value.

### HasNonRefundable

`func (o *CancelPenaltyType) HasNonRefundable() bool`

HasNonRefundable returns a boolean if a field has been set.

### GetEffective

`func (o *CancelPenaltyType) GetEffective() bool`

GetEffective returns the Effective field if non-nil, zero value otherwise.

### GetEffectiveOk

`func (o *CancelPenaltyType) GetEffectiveOk() (*bool, bool)`

GetEffectiveOk returns a tuple with the Effective field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEffective

`func (o *CancelPenaltyType) SetEffective(v bool)`

SetEffective sets Effective field to given value.

### HasEffective

`func (o *CancelPenaltyType) HasEffective() bool`

HasEffective returns a boolean if a field has been set.

### GetEstimatedAmount

`func (o *CancelPenaltyType) GetEstimatedAmount() float32`

GetEstimatedAmount returns the EstimatedAmount field if non-nil, zero value otherwise.

### GetEstimatedAmountOk

`func (o *CancelPenaltyType) GetEstimatedAmountOk() (*float32, bool)`

GetEstimatedAmountOk returns a tuple with the EstimatedAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEstimatedAmount

`func (o *CancelPenaltyType) SetEstimatedAmount(v float32)`

SetEstimatedAmount sets EstimatedAmount field to given value.

### HasEstimatedAmount

`func (o *CancelPenaltyType) HasEstimatedAmount() bool`

HasEstimatedAmount returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



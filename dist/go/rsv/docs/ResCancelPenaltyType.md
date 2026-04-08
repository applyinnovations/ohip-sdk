# ResCancelPenaltyType

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

## Methods

### NewResCancelPenaltyType

`func NewResCancelPenaltyType() *ResCancelPenaltyType`

NewResCancelPenaltyType instantiates a new ResCancelPenaltyType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewResCancelPenaltyTypeWithDefaults

`func NewResCancelPenaltyTypeWithDefaults() *ResCancelPenaltyType`

NewResCancelPenaltyTypeWithDefaults instantiates a new ResCancelPenaltyType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDeadline

`func (o *ResCancelPenaltyType) GetDeadline() PolicyDeadlineType`

GetDeadline returns the Deadline field if non-nil, zero value otherwise.

### GetDeadlineOk

`func (o *ResCancelPenaltyType) GetDeadlineOk() (*PolicyDeadlineType, bool)`

GetDeadlineOk returns a tuple with the Deadline field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeadline

`func (o *ResCancelPenaltyType) SetDeadline(v PolicyDeadlineType)`

SetDeadline sets Deadline field to given value.

### HasDeadline

`func (o *ResCancelPenaltyType) HasDeadline() bool`

HasDeadline returns a boolean if a field has been set.

### GetAmountPercent

`func (o *ResCancelPenaltyType) GetAmountPercent() PolicyAmountPercentType`

GetAmountPercent returns the AmountPercent field if non-nil, zero value otherwise.

### GetAmountPercentOk

`func (o *ResCancelPenaltyType) GetAmountPercentOk() (*PolicyAmountPercentType, bool)`

GetAmountPercentOk returns a tuple with the AmountPercent field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmountPercent

`func (o *ResCancelPenaltyType) SetAmountPercent(v PolicyAmountPercentType)`

SetAmountPercent sets AmountPercent field to given value.

### HasAmountPercent

`func (o *ResCancelPenaltyType) HasAmountPercent() bool`

HasAmountPercent returns a boolean if a field has been set.

### GetPenaltyDescription

`func (o *ResCancelPenaltyType) GetPenaltyDescription() string`

GetPenaltyDescription returns the PenaltyDescription field if non-nil, zero value otherwise.

### GetPenaltyDescriptionOk

`func (o *ResCancelPenaltyType) GetPenaltyDescriptionOk() (*string, bool)`

GetPenaltyDescriptionOk returns a tuple with the PenaltyDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPenaltyDescription

`func (o *ResCancelPenaltyType) SetPenaltyDescription(v string)`

SetPenaltyDescription sets PenaltyDescription field to given value.

### HasPenaltyDescription

`func (o *ResCancelPenaltyType) HasPenaltyDescription() bool`

HasPenaltyDescription returns a boolean if a field has been set.

### GetOffsetUnit

`func (o *ResCancelPenaltyType) GetOffsetUnit() OffsetUnitType`

GetOffsetUnit returns the OffsetUnit field if non-nil, zero value otherwise.

### GetOffsetUnitOk

`func (o *ResCancelPenaltyType) GetOffsetUnitOk() (*OffsetUnitType, bool)`

GetOffsetUnitOk returns a tuple with the OffsetUnit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOffsetUnit

`func (o *ResCancelPenaltyType) SetOffsetUnit(v OffsetUnitType)`

SetOffsetUnit sets OffsetUnit field to given value.

### HasOffsetUnit

`func (o *ResCancelPenaltyType) HasOffsetUnit() bool`

HasOffsetUnit returns a boolean if a field has been set.

### GetFormattedRule

`func (o *ResCancelPenaltyType) GetFormattedRule() string`

GetFormattedRule returns the FormattedRule field if non-nil, zero value otherwise.

### GetFormattedRuleOk

`func (o *ResCancelPenaltyType) GetFormattedRuleOk() (*string, bool)`

GetFormattedRuleOk returns a tuple with the FormattedRule field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFormattedRule

`func (o *ResCancelPenaltyType) SetFormattedRule(v string)`

SetFormattedRule sets FormattedRule field to given value.

### HasFormattedRule

`func (o *ResCancelPenaltyType) HasFormattedRule() bool`

HasFormattedRule returns a boolean if a field has been set.

### GetPolicyCode

`func (o *ResCancelPenaltyType) GetPolicyCode() string`

GetPolicyCode returns the PolicyCode field if non-nil, zero value otherwise.

### GetPolicyCodeOk

`func (o *ResCancelPenaltyType) GetPolicyCodeOk() (*string, bool)`

GetPolicyCodeOk returns a tuple with the PolicyCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPolicyCode

`func (o *ResCancelPenaltyType) SetPolicyCode(v string)`

SetPolicyCode sets PolicyCode field to given value.

### HasPolicyCode

`func (o *ResCancelPenaltyType) HasPolicyCode() bool`

HasPolicyCode returns a boolean if a field has been set.

### GetManual

`func (o *ResCancelPenaltyType) GetManual() bool`

GetManual returns the Manual field if non-nil, zero value otherwise.

### GetManualOk

`func (o *ResCancelPenaltyType) GetManualOk() (*bool, bool)`

GetManualOk returns a tuple with the Manual field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManual

`func (o *ResCancelPenaltyType) SetManual(v bool)`

SetManual sets Manual field to given value.

### HasManual

`func (o *ResCancelPenaltyType) HasManual() bool`

HasManual returns a boolean if a field has been set.

### GetNonRefundable

`func (o *ResCancelPenaltyType) GetNonRefundable() bool`

GetNonRefundable returns the NonRefundable field if non-nil, zero value otherwise.

### GetNonRefundableOk

`func (o *ResCancelPenaltyType) GetNonRefundableOk() (*bool, bool)`

GetNonRefundableOk returns a tuple with the NonRefundable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNonRefundable

`func (o *ResCancelPenaltyType) SetNonRefundable(v bool)`

SetNonRefundable sets NonRefundable field to given value.

### HasNonRefundable

`func (o *ResCancelPenaltyType) HasNonRefundable() bool`

HasNonRefundable returns a boolean if a field has been set.

### GetEffective

`func (o *ResCancelPenaltyType) GetEffective() bool`

GetEffective returns the Effective field if non-nil, zero value otherwise.

### GetEffectiveOk

`func (o *ResCancelPenaltyType) GetEffectiveOk() (*bool, bool)`

GetEffectiveOk returns a tuple with the Effective field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEffective

`func (o *ResCancelPenaltyType) SetEffective(v bool)`

SetEffective sets Effective field to given value.

### HasEffective

`func (o *ResCancelPenaltyType) HasEffective() bool`

HasEffective returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



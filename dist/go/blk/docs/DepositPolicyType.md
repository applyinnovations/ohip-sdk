# DepositPolicyType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AmountPercent** | Pointer to [**PolicyAmountPercentType**](PolicyAmountPercentType.md) |  | [optional] 
**Deadline** | Pointer to [**PolicyDeadlineType**](PolicyDeadlineType.md) |  | [optional] 
**Description** | Pointer to **string** | Text description of the Payment in a given language. | [optional] 
**DepositReceiptNo** | Pointer to **int32** | Receipt number associated with the deposit policy | [optional] 
**TransactionDate** | Pointer to **string** | Transaction Date associated with the deposit policy | [optional] 
**DepositReqReversed** | Pointer to **bool** | Flag to indicate if deposit policy is reversed | [optional] 
**FormattedRule** | Pointer to **string** | Formatted Text Rule of the deposit policy. | [optional] 
**TypeOfCharges** | Pointer to [**DepositCancelRevenueType**](DepositCancelRevenueType.md) |  | [optional] 
**PolicyCode** | Pointer to **string** | Deposit Policy Code | [optional] 
**Manual** | Pointer to **bool** | Flag to indicate if the deposit policy is manual. | [optional] 
**Effective** | Pointer to **bool** | Indicator if deposit policy is currently applicable or not. | [optional] 
**EstimatedAmount** | Pointer to **float32** | Estimated Amount for the deposit policy. | [optional] 

## Methods

### NewDepositPolicyType

`func NewDepositPolicyType() *DepositPolicyType`

NewDepositPolicyType instantiates a new DepositPolicyType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDepositPolicyTypeWithDefaults

`func NewDepositPolicyTypeWithDefaults() *DepositPolicyType`

NewDepositPolicyTypeWithDefaults instantiates a new DepositPolicyType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAmountPercent

`func (o *DepositPolicyType) GetAmountPercent() PolicyAmountPercentType`

GetAmountPercent returns the AmountPercent field if non-nil, zero value otherwise.

### GetAmountPercentOk

`func (o *DepositPolicyType) GetAmountPercentOk() (*PolicyAmountPercentType, bool)`

GetAmountPercentOk returns a tuple with the AmountPercent field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmountPercent

`func (o *DepositPolicyType) SetAmountPercent(v PolicyAmountPercentType)`

SetAmountPercent sets AmountPercent field to given value.

### HasAmountPercent

`func (o *DepositPolicyType) HasAmountPercent() bool`

HasAmountPercent returns a boolean if a field has been set.

### GetDeadline

`func (o *DepositPolicyType) GetDeadline() PolicyDeadlineType`

GetDeadline returns the Deadline field if non-nil, zero value otherwise.

### GetDeadlineOk

`func (o *DepositPolicyType) GetDeadlineOk() (*PolicyDeadlineType, bool)`

GetDeadlineOk returns a tuple with the Deadline field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeadline

`func (o *DepositPolicyType) SetDeadline(v PolicyDeadlineType)`

SetDeadline sets Deadline field to given value.

### HasDeadline

`func (o *DepositPolicyType) HasDeadline() bool`

HasDeadline returns a boolean if a field has been set.

### GetDescription

`func (o *DepositPolicyType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *DepositPolicyType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *DepositPolicyType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *DepositPolicyType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetDepositReceiptNo

`func (o *DepositPolicyType) GetDepositReceiptNo() int32`

GetDepositReceiptNo returns the DepositReceiptNo field if non-nil, zero value otherwise.

### GetDepositReceiptNoOk

`func (o *DepositPolicyType) GetDepositReceiptNoOk() (*int32, bool)`

GetDepositReceiptNoOk returns a tuple with the DepositReceiptNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDepositReceiptNo

`func (o *DepositPolicyType) SetDepositReceiptNo(v int32)`

SetDepositReceiptNo sets DepositReceiptNo field to given value.

### HasDepositReceiptNo

`func (o *DepositPolicyType) HasDepositReceiptNo() bool`

HasDepositReceiptNo returns a boolean if a field has been set.

### GetTransactionDate

`func (o *DepositPolicyType) GetTransactionDate() string`

GetTransactionDate returns the TransactionDate field if non-nil, zero value otherwise.

### GetTransactionDateOk

`func (o *DepositPolicyType) GetTransactionDateOk() (*string, bool)`

GetTransactionDateOk returns a tuple with the TransactionDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionDate

`func (o *DepositPolicyType) SetTransactionDate(v string)`

SetTransactionDate sets TransactionDate field to given value.

### HasTransactionDate

`func (o *DepositPolicyType) HasTransactionDate() bool`

HasTransactionDate returns a boolean if a field has been set.

### GetDepositReqReversed

`func (o *DepositPolicyType) GetDepositReqReversed() bool`

GetDepositReqReversed returns the DepositReqReversed field if non-nil, zero value otherwise.

### GetDepositReqReversedOk

`func (o *DepositPolicyType) GetDepositReqReversedOk() (*bool, bool)`

GetDepositReqReversedOk returns a tuple with the DepositReqReversed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDepositReqReversed

`func (o *DepositPolicyType) SetDepositReqReversed(v bool)`

SetDepositReqReversed sets DepositReqReversed field to given value.

### HasDepositReqReversed

`func (o *DepositPolicyType) HasDepositReqReversed() bool`

HasDepositReqReversed returns a boolean if a field has been set.

### GetFormattedRule

`func (o *DepositPolicyType) GetFormattedRule() string`

GetFormattedRule returns the FormattedRule field if non-nil, zero value otherwise.

### GetFormattedRuleOk

`func (o *DepositPolicyType) GetFormattedRuleOk() (*string, bool)`

GetFormattedRuleOk returns a tuple with the FormattedRule field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFormattedRule

`func (o *DepositPolicyType) SetFormattedRule(v string)`

SetFormattedRule sets FormattedRule field to given value.

### HasFormattedRule

`func (o *DepositPolicyType) HasFormattedRule() bool`

HasFormattedRule returns a boolean if a field has been set.

### GetTypeOfCharges

`func (o *DepositPolicyType) GetTypeOfCharges() DepositCancelRevenueType`

GetTypeOfCharges returns the TypeOfCharges field if non-nil, zero value otherwise.

### GetTypeOfChargesOk

`func (o *DepositPolicyType) GetTypeOfChargesOk() (*DepositCancelRevenueType, bool)`

GetTypeOfChargesOk returns a tuple with the TypeOfCharges field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTypeOfCharges

`func (o *DepositPolicyType) SetTypeOfCharges(v DepositCancelRevenueType)`

SetTypeOfCharges sets TypeOfCharges field to given value.

### HasTypeOfCharges

`func (o *DepositPolicyType) HasTypeOfCharges() bool`

HasTypeOfCharges returns a boolean if a field has been set.

### GetPolicyCode

`func (o *DepositPolicyType) GetPolicyCode() string`

GetPolicyCode returns the PolicyCode field if non-nil, zero value otherwise.

### GetPolicyCodeOk

`func (o *DepositPolicyType) GetPolicyCodeOk() (*string, bool)`

GetPolicyCodeOk returns a tuple with the PolicyCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPolicyCode

`func (o *DepositPolicyType) SetPolicyCode(v string)`

SetPolicyCode sets PolicyCode field to given value.

### HasPolicyCode

`func (o *DepositPolicyType) HasPolicyCode() bool`

HasPolicyCode returns a boolean if a field has been set.

### GetManual

`func (o *DepositPolicyType) GetManual() bool`

GetManual returns the Manual field if non-nil, zero value otherwise.

### GetManualOk

`func (o *DepositPolicyType) GetManualOk() (*bool, bool)`

GetManualOk returns a tuple with the Manual field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManual

`func (o *DepositPolicyType) SetManual(v bool)`

SetManual sets Manual field to given value.

### HasManual

`func (o *DepositPolicyType) HasManual() bool`

HasManual returns a boolean if a field has been set.

### GetEffective

`func (o *DepositPolicyType) GetEffective() bool`

GetEffective returns the Effective field if non-nil, zero value otherwise.

### GetEffectiveOk

`func (o *DepositPolicyType) GetEffectiveOk() (*bool, bool)`

GetEffectiveOk returns a tuple with the Effective field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEffective

`func (o *DepositPolicyType) SetEffective(v bool)`

SetEffective sets Effective field to given value.

### HasEffective

`func (o *DepositPolicyType) HasEffective() bool`

HasEffective returns a boolean if a field has been set.

### GetEstimatedAmount

`func (o *DepositPolicyType) GetEstimatedAmount() float32`

GetEstimatedAmount returns the EstimatedAmount field if non-nil, zero value otherwise.

### GetEstimatedAmountOk

`func (o *DepositPolicyType) GetEstimatedAmountOk() (*float32, bool)`

GetEstimatedAmountOk returns a tuple with the EstimatedAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEstimatedAmount

`func (o *DepositPolicyType) SetEstimatedAmount(v float32)`

SetEstimatedAmount sets EstimatedAmount field to given value.

### HasEstimatedAmount

`func (o *DepositPolicyType) HasEstimatedAmount() bool`

HasEstimatedAmount returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



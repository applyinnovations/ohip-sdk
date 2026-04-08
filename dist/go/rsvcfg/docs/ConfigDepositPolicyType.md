# ConfigDepositPolicyType

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
**Manual** | Pointer to **bool** | Flag to indicate if the cancellation policy is manual. | [optional] 
**Sequence** | Pointer to **int32** | The sequence number that determines the position of this rule in the Deposit or Cancellation rules LOV. | [optional] 
**Inactive** | Pointer to **bool** | Inactive rules are no longer available for attachment to rate codes, reservation types or reservations; however, they are still recorded in the database for historical purposes. | [optional] 

## Methods

### NewConfigDepositPolicyType

`func NewConfigDepositPolicyType() *ConfigDepositPolicyType`

NewConfigDepositPolicyType instantiates a new ConfigDepositPolicyType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewConfigDepositPolicyTypeWithDefaults

`func NewConfigDepositPolicyTypeWithDefaults() *ConfigDepositPolicyType`

NewConfigDepositPolicyTypeWithDefaults instantiates a new ConfigDepositPolicyType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAmountPercent

`func (o *ConfigDepositPolicyType) GetAmountPercent() PolicyAmountPercentType`

GetAmountPercent returns the AmountPercent field if non-nil, zero value otherwise.

### GetAmountPercentOk

`func (o *ConfigDepositPolicyType) GetAmountPercentOk() (*PolicyAmountPercentType, bool)`

GetAmountPercentOk returns a tuple with the AmountPercent field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmountPercent

`func (o *ConfigDepositPolicyType) SetAmountPercent(v PolicyAmountPercentType)`

SetAmountPercent sets AmountPercent field to given value.

### HasAmountPercent

`func (o *ConfigDepositPolicyType) HasAmountPercent() bool`

HasAmountPercent returns a boolean if a field has been set.

### GetDeadline

`func (o *ConfigDepositPolicyType) GetDeadline() PolicyDeadlineType`

GetDeadline returns the Deadline field if non-nil, zero value otherwise.

### GetDeadlineOk

`func (o *ConfigDepositPolicyType) GetDeadlineOk() (*PolicyDeadlineType, bool)`

GetDeadlineOk returns a tuple with the Deadline field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeadline

`func (o *ConfigDepositPolicyType) SetDeadline(v PolicyDeadlineType)`

SetDeadline sets Deadline field to given value.

### HasDeadline

`func (o *ConfigDepositPolicyType) HasDeadline() bool`

HasDeadline returns a boolean if a field has been set.

### GetDescription

`func (o *ConfigDepositPolicyType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *ConfigDepositPolicyType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *ConfigDepositPolicyType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *ConfigDepositPolicyType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetDepositReceiptNo

`func (o *ConfigDepositPolicyType) GetDepositReceiptNo() int32`

GetDepositReceiptNo returns the DepositReceiptNo field if non-nil, zero value otherwise.

### GetDepositReceiptNoOk

`func (o *ConfigDepositPolicyType) GetDepositReceiptNoOk() (*int32, bool)`

GetDepositReceiptNoOk returns a tuple with the DepositReceiptNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDepositReceiptNo

`func (o *ConfigDepositPolicyType) SetDepositReceiptNo(v int32)`

SetDepositReceiptNo sets DepositReceiptNo field to given value.

### HasDepositReceiptNo

`func (o *ConfigDepositPolicyType) HasDepositReceiptNo() bool`

HasDepositReceiptNo returns a boolean if a field has been set.

### GetTransactionDate

`func (o *ConfigDepositPolicyType) GetTransactionDate() string`

GetTransactionDate returns the TransactionDate field if non-nil, zero value otherwise.

### GetTransactionDateOk

`func (o *ConfigDepositPolicyType) GetTransactionDateOk() (*string, bool)`

GetTransactionDateOk returns a tuple with the TransactionDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionDate

`func (o *ConfigDepositPolicyType) SetTransactionDate(v string)`

SetTransactionDate sets TransactionDate field to given value.

### HasTransactionDate

`func (o *ConfigDepositPolicyType) HasTransactionDate() bool`

HasTransactionDate returns a boolean if a field has been set.

### GetDepositReqReversed

`func (o *ConfigDepositPolicyType) GetDepositReqReversed() bool`

GetDepositReqReversed returns the DepositReqReversed field if non-nil, zero value otherwise.

### GetDepositReqReversedOk

`func (o *ConfigDepositPolicyType) GetDepositReqReversedOk() (*bool, bool)`

GetDepositReqReversedOk returns a tuple with the DepositReqReversed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDepositReqReversed

`func (o *ConfigDepositPolicyType) SetDepositReqReversed(v bool)`

SetDepositReqReversed sets DepositReqReversed field to given value.

### HasDepositReqReversed

`func (o *ConfigDepositPolicyType) HasDepositReqReversed() bool`

HasDepositReqReversed returns a boolean if a field has been set.

### GetFormattedRule

`func (o *ConfigDepositPolicyType) GetFormattedRule() string`

GetFormattedRule returns the FormattedRule field if non-nil, zero value otherwise.

### GetFormattedRuleOk

`func (o *ConfigDepositPolicyType) GetFormattedRuleOk() (*string, bool)`

GetFormattedRuleOk returns a tuple with the FormattedRule field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFormattedRule

`func (o *ConfigDepositPolicyType) SetFormattedRule(v string)`

SetFormattedRule sets FormattedRule field to given value.

### HasFormattedRule

`func (o *ConfigDepositPolicyType) HasFormattedRule() bool`

HasFormattedRule returns a boolean if a field has been set.

### GetTypeOfCharges

`func (o *ConfigDepositPolicyType) GetTypeOfCharges() DepositCancelRevenueType`

GetTypeOfCharges returns the TypeOfCharges field if non-nil, zero value otherwise.

### GetTypeOfChargesOk

`func (o *ConfigDepositPolicyType) GetTypeOfChargesOk() (*DepositCancelRevenueType, bool)`

GetTypeOfChargesOk returns a tuple with the TypeOfCharges field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTypeOfCharges

`func (o *ConfigDepositPolicyType) SetTypeOfCharges(v DepositCancelRevenueType)`

SetTypeOfCharges sets TypeOfCharges field to given value.

### HasTypeOfCharges

`func (o *ConfigDepositPolicyType) HasTypeOfCharges() bool`

HasTypeOfCharges returns a boolean if a field has been set.

### GetPolicyCode

`func (o *ConfigDepositPolicyType) GetPolicyCode() string`

GetPolicyCode returns the PolicyCode field if non-nil, zero value otherwise.

### GetPolicyCodeOk

`func (o *ConfigDepositPolicyType) GetPolicyCodeOk() (*string, bool)`

GetPolicyCodeOk returns a tuple with the PolicyCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPolicyCode

`func (o *ConfigDepositPolicyType) SetPolicyCode(v string)`

SetPolicyCode sets PolicyCode field to given value.

### HasPolicyCode

`func (o *ConfigDepositPolicyType) HasPolicyCode() bool`

HasPolicyCode returns a boolean if a field has been set.

### GetManual

`func (o *ConfigDepositPolicyType) GetManual() bool`

GetManual returns the Manual field if non-nil, zero value otherwise.

### GetManualOk

`func (o *ConfigDepositPolicyType) GetManualOk() (*bool, bool)`

GetManualOk returns a tuple with the Manual field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManual

`func (o *ConfigDepositPolicyType) SetManual(v bool)`

SetManual sets Manual field to given value.

### HasManual

`func (o *ConfigDepositPolicyType) HasManual() bool`

HasManual returns a boolean if a field has been set.

### GetSequence

`func (o *ConfigDepositPolicyType) GetSequence() int32`

GetSequence returns the Sequence field if non-nil, zero value otherwise.

### GetSequenceOk

`func (o *ConfigDepositPolicyType) GetSequenceOk() (*int32, bool)`

GetSequenceOk returns a tuple with the Sequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSequence

`func (o *ConfigDepositPolicyType) SetSequence(v int32)`

SetSequence sets Sequence field to given value.

### HasSequence

`func (o *ConfigDepositPolicyType) HasSequence() bool`

HasSequence returns a boolean if a field has been set.

### GetInactive

`func (o *ConfigDepositPolicyType) GetInactive() bool`

GetInactive returns the Inactive field if non-nil, zero value otherwise.

### GetInactiveOk

`func (o *ConfigDepositPolicyType) GetInactiveOk() (*bool, bool)`

GetInactiveOk returns a tuple with the Inactive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInactive

`func (o *ConfigDepositPolicyType) SetInactive(v bool)`

SetInactive sets Inactive field to given value.

### HasInactive

`func (o *ConfigDepositPolicyType) HasInactive() bool`

HasInactive returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# RedemptionType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Amount** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**Code** | Pointer to **string** | The associated redemption code. | [optional] 
**Supplement** | Pointer to **string** | Additional information regarding the redemption. | [optional] 
**Description** | Pointer to **string** | Description of the Complimentary Bucket Redemption. | [optional] 
**TransactionCode** | Pointer to **string** | Transaction code of the Complimentary Bucket Redemption. | [optional] 
**AvailableAmount** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**TransactionNo** | Pointer to **float32** | Transaction Number of the Complimentary Bucket Redemption. | [optional] 
**ApprovalCode** | Pointer to **string** | Approval Code of the Complimentary Bucket Redemption. | [optional] 

## Methods

### NewRedemptionType

`func NewRedemptionType() *RedemptionType`

NewRedemptionType instantiates a new RedemptionType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRedemptionTypeWithDefaults

`func NewRedemptionTypeWithDefaults() *RedemptionType`

NewRedemptionTypeWithDefaults instantiates a new RedemptionType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAmount

`func (o *RedemptionType) GetAmount() CurrencyAmountType`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *RedemptionType) GetAmountOk() (*CurrencyAmountType, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *RedemptionType) SetAmount(v CurrencyAmountType)`

SetAmount sets Amount field to given value.

### HasAmount

`func (o *RedemptionType) HasAmount() bool`

HasAmount returns a boolean if a field has been set.

### GetCode

`func (o *RedemptionType) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *RedemptionType) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *RedemptionType) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *RedemptionType) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetSupplement

`func (o *RedemptionType) GetSupplement() string`

GetSupplement returns the Supplement field if non-nil, zero value otherwise.

### GetSupplementOk

`func (o *RedemptionType) GetSupplementOk() (*string, bool)`

GetSupplementOk returns a tuple with the Supplement field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSupplement

`func (o *RedemptionType) SetSupplement(v string)`

SetSupplement sets Supplement field to given value.

### HasSupplement

`func (o *RedemptionType) HasSupplement() bool`

HasSupplement returns a boolean if a field has been set.

### GetDescription

`func (o *RedemptionType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *RedemptionType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *RedemptionType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *RedemptionType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetTransactionCode

`func (o *RedemptionType) GetTransactionCode() string`

GetTransactionCode returns the TransactionCode field if non-nil, zero value otherwise.

### GetTransactionCodeOk

`func (o *RedemptionType) GetTransactionCodeOk() (*string, bool)`

GetTransactionCodeOk returns a tuple with the TransactionCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionCode

`func (o *RedemptionType) SetTransactionCode(v string)`

SetTransactionCode sets TransactionCode field to given value.

### HasTransactionCode

`func (o *RedemptionType) HasTransactionCode() bool`

HasTransactionCode returns a boolean if a field has been set.

### GetAvailableAmount

`func (o *RedemptionType) GetAvailableAmount() CurrencyAmountType`

GetAvailableAmount returns the AvailableAmount field if non-nil, zero value otherwise.

### GetAvailableAmountOk

`func (o *RedemptionType) GetAvailableAmountOk() (*CurrencyAmountType, bool)`

GetAvailableAmountOk returns a tuple with the AvailableAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAvailableAmount

`func (o *RedemptionType) SetAvailableAmount(v CurrencyAmountType)`

SetAvailableAmount sets AvailableAmount field to given value.

### HasAvailableAmount

`func (o *RedemptionType) HasAvailableAmount() bool`

HasAvailableAmount returns a boolean if a field has been set.

### GetTransactionNo

`func (o *RedemptionType) GetTransactionNo() float32`

GetTransactionNo returns the TransactionNo field if non-nil, zero value otherwise.

### GetTransactionNoOk

`func (o *RedemptionType) GetTransactionNoOk() (*float32, bool)`

GetTransactionNoOk returns a tuple with the TransactionNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionNo

`func (o *RedemptionType) SetTransactionNo(v float32)`

SetTransactionNo sets TransactionNo field to given value.

### HasTransactionNo

`func (o *RedemptionType) HasTransactionNo() bool`

HasTransactionNo returns a boolean if a field has been set.

### GetApprovalCode

`func (o *RedemptionType) GetApprovalCode() string`

GetApprovalCode returns the ApprovalCode field if non-nil, zero value otherwise.

### GetApprovalCodeOk

`func (o *RedemptionType) GetApprovalCodeOk() (*string, bool)`

GetApprovalCodeOk returns a tuple with the ApprovalCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovalCode

`func (o *RedemptionType) SetApprovalCode(v string)`

SetApprovalCode sets ApprovalCode field to given value.

### HasApprovalCode

`func (o *RedemptionType) HasApprovalCode() bool`

HasApprovalCode returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



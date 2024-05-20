# BillingChargeType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApprovalCode** | Pointer to **string** | Approval code of the posting. | [optional] 
**ApprovalDate** | Pointer to **string** | Approval date of the posting. | [optional] 
**ApprovalStatus** | Pointer to **string** | Approval status of the posting. | [optional] 
**ArrangementCode** | Pointer to **string** | Corrected arrangement code from the package associated to this transaction. | [optional] 
**CashierId** | Pointer to **float32** | The Cashier ID of the Cashier who is currently processing the transaction(s). | [optional] 
**CheckNumber** | Pointer to **string** | Corrected Cheque number. | [optional] 
**Covers** | Pointer to **string** | Corrected POS covers - number of copies of receipts that got printed for that particular receipt. | [optional] 
**Price** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**Quantity** | Pointer to **int32** | Corrected posting quantity. | [optional] 
**Reference** | Pointer to **string** | Corrected user-defined posting reference. | [optional] 
**Remark** | Pointer to **string** | Corrected user-defined posting remark. | [optional] 
**RevenueDate** | Pointer to **string** | Corrected Revenue Date. | [optional] 
**TransactionNo** | Pointer to **float32** | Transaction number of the posting being corrected. | [optional] 

## Methods

### NewBillingChargeType

`func NewBillingChargeType() *BillingChargeType`

NewBillingChargeType instantiates a new BillingChargeType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBillingChargeTypeWithDefaults

`func NewBillingChargeTypeWithDefaults() *BillingChargeType`

NewBillingChargeTypeWithDefaults instantiates a new BillingChargeType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetApprovalCode

`func (o *BillingChargeType) GetApprovalCode() string`

GetApprovalCode returns the ApprovalCode field if non-nil, zero value otherwise.

### GetApprovalCodeOk

`func (o *BillingChargeType) GetApprovalCodeOk() (*string, bool)`

GetApprovalCodeOk returns a tuple with the ApprovalCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovalCode

`func (o *BillingChargeType) SetApprovalCode(v string)`

SetApprovalCode sets ApprovalCode field to given value.

### HasApprovalCode

`func (o *BillingChargeType) HasApprovalCode() bool`

HasApprovalCode returns a boolean if a field has been set.

### GetApprovalDate

`func (o *BillingChargeType) GetApprovalDate() string`

GetApprovalDate returns the ApprovalDate field if non-nil, zero value otherwise.

### GetApprovalDateOk

`func (o *BillingChargeType) GetApprovalDateOk() (*string, bool)`

GetApprovalDateOk returns a tuple with the ApprovalDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovalDate

`func (o *BillingChargeType) SetApprovalDate(v string)`

SetApprovalDate sets ApprovalDate field to given value.

### HasApprovalDate

`func (o *BillingChargeType) HasApprovalDate() bool`

HasApprovalDate returns a boolean if a field has been set.

### GetApprovalStatus

`func (o *BillingChargeType) GetApprovalStatus() string`

GetApprovalStatus returns the ApprovalStatus field if non-nil, zero value otherwise.

### GetApprovalStatusOk

`func (o *BillingChargeType) GetApprovalStatusOk() (*string, bool)`

GetApprovalStatusOk returns a tuple with the ApprovalStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovalStatus

`func (o *BillingChargeType) SetApprovalStatus(v string)`

SetApprovalStatus sets ApprovalStatus field to given value.

### HasApprovalStatus

`func (o *BillingChargeType) HasApprovalStatus() bool`

HasApprovalStatus returns a boolean if a field has been set.

### GetArrangementCode

`func (o *BillingChargeType) GetArrangementCode() string`

GetArrangementCode returns the ArrangementCode field if non-nil, zero value otherwise.

### GetArrangementCodeOk

`func (o *BillingChargeType) GetArrangementCodeOk() (*string, bool)`

GetArrangementCodeOk returns a tuple with the ArrangementCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetArrangementCode

`func (o *BillingChargeType) SetArrangementCode(v string)`

SetArrangementCode sets ArrangementCode field to given value.

### HasArrangementCode

`func (o *BillingChargeType) HasArrangementCode() bool`

HasArrangementCode returns a boolean if a field has been set.

### GetCashierId

`func (o *BillingChargeType) GetCashierId() float32`

GetCashierId returns the CashierId field if non-nil, zero value otherwise.

### GetCashierIdOk

`func (o *BillingChargeType) GetCashierIdOk() (*float32, bool)`

GetCashierIdOk returns a tuple with the CashierId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCashierId

`func (o *BillingChargeType) SetCashierId(v float32)`

SetCashierId sets CashierId field to given value.

### HasCashierId

`func (o *BillingChargeType) HasCashierId() bool`

HasCashierId returns a boolean if a field has been set.

### GetCheckNumber

`func (o *BillingChargeType) GetCheckNumber() string`

GetCheckNumber returns the CheckNumber field if non-nil, zero value otherwise.

### GetCheckNumberOk

`func (o *BillingChargeType) GetCheckNumberOk() (*string, bool)`

GetCheckNumberOk returns a tuple with the CheckNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCheckNumber

`func (o *BillingChargeType) SetCheckNumber(v string)`

SetCheckNumber sets CheckNumber field to given value.

### HasCheckNumber

`func (o *BillingChargeType) HasCheckNumber() bool`

HasCheckNumber returns a boolean if a field has been set.

### GetCovers

`func (o *BillingChargeType) GetCovers() string`

GetCovers returns the Covers field if non-nil, zero value otherwise.

### GetCoversOk

`func (o *BillingChargeType) GetCoversOk() (*string, bool)`

GetCoversOk returns a tuple with the Covers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCovers

`func (o *BillingChargeType) SetCovers(v string)`

SetCovers sets Covers field to given value.

### HasCovers

`func (o *BillingChargeType) HasCovers() bool`

HasCovers returns a boolean if a field has been set.

### GetPrice

`func (o *BillingChargeType) GetPrice() CurrencyAmountType`

GetPrice returns the Price field if non-nil, zero value otherwise.

### GetPriceOk

`func (o *BillingChargeType) GetPriceOk() (*CurrencyAmountType, bool)`

GetPriceOk returns a tuple with the Price field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrice

`func (o *BillingChargeType) SetPrice(v CurrencyAmountType)`

SetPrice sets Price field to given value.

### HasPrice

`func (o *BillingChargeType) HasPrice() bool`

HasPrice returns a boolean if a field has been set.

### GetQuantity

`func (o *BillingChargeType) GetQuantity() int32`

GetQuantity returns the Quantity field if non-nil, zero value otherwise.

### GetQuantityOk

`func (o *BillingChargeType) GetQuantityOk() (*int32, bool)`

GetQuantityOk returns a tuple with the Quantity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuantity

`func (o *BillingChargeType) SetQuantity(v int32)`

SetQuantity sets Quantity field to given value.

### HasQuantity

`func (o *BillingChargeType) HasQuantity() bool`

HasQuantity returns a boolean if a field has been set.

### GetReference

`func (o *BillingChargeType) GetReference() string`

GetReference returns the Reference field if non-nil, zero value otherwise.

### GetReferenceOk

`func (o *BillingChargeType) GetReferenceOk() (*string, bool)`

GetReferenceOk returns a tuple with the Reference field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReference

`func (o *BillingChargeType) SetReference(v string)`

SetReference sets Reference field to given value.

### HasReference

`func (o *BillingChargeType) HasReference() bool`

HasReference returns a boolean if a field has been set.

### GetRemark

`func (o *BillingChargeType) GetRemark() string`

GetRemark returns the Remark field if non-nil, zero value otherwise.

### GetRemarkOk

`func (o *BillingChargeType) GetRemarkOk() (*string, bool)`

GetRemarkOk returns a tuple with the Remark field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRemark

`func (o *BillingChargeType) SetRemark(v string)`

SetRemark sets Remark field to given value.

### HasRemark

`func (o *BillingChargeType) HasRemark() bool`

HasRemark returns a boolean if a field has been set.

### GetRevenueDate

`func (o *BillingChargeType) GetRevenueDate() string`

GetRevenueDate returns the RevenueDate field if non-nil, zero value otherwise.

### GetRevenueDateOk

`func (o *BillingChargeType) GetRevenueDateOk() (*string, bool)`

GetRevenueDateOk returns a tuple with the RevenueDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevenueDate

`func (o *BillingChargeType) SetRevenueDate(v string)`

SetRevenueDate sets RevenueDate field to given value.

### HasRevenueDate

`func (o *BillingChargeType) HasRevenueDate() bool`

HasRevenueDate returns a boolean if a field has been set.

### GetTransactionNo

`func (o *BillingChargeType) GetTransactionNo() float32`

GetTransactionNo returns the TransactionNo field if non-nil, zero value otherwise.

### GetTransactionNoOk

`func (o *BillingChargeType) GetTransactionNoOk() (*float32, bool)`

GetTransactionNoOk returns a tuple with the TransactionNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionNo

`func (o *BillingChargeType) SetTransactionNo(v float32)`

SetTransactionNo sets TransactionNo field to given value.

### HasTransactionNo

`func (o *BillingChargeType) HasTransactionNo() bool`

HasTransactionNo returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



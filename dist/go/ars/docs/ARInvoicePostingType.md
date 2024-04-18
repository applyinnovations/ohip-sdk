# ARInvoicePostingType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApprovalCode** | Pointer to **string** | Approval code of the posting. | [optional] 
**ApprovalStatus** | Pointer to **string** | Approval status of the posting. | [optional] 
**ArrangementCode** | Pointer to **string** | Corrected arrangement code from the package associated to this transaction. | [optional] 
**ArticleCode** | Pointer to **string** | Information regarding the Article(Using Articles Functionality) of this transaction. | [optional] 
**CanAdjustInvoice** | Pointer to **bool** | Indicator to determine if the transaction can be adjusted. | [optional] 
**CashierInfo** | Pointer to [**CashierInfoType**](CashierInfoType.md) |  | [optional] 
**CheckCount** | Pointer to **string** | Check number count for the posting. | [optional] 
**CheckNo** | Pointer to **string** | Check number for the posting. | [optional] 
**Commissionable** | Pointer to **bool** | Indicator to determine if the transaction is commissionable. | [optional] 
**CompPostingsInfo** | Pointer to [**CompPostingsType**](CompPostingsType.md) |  | [optional] 
**CompRedemptionCode** | Pointer to **string** | Comp redemption code assiciated to the transaction. | [optional] 
**CreditAmount** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**CreditInvoiceGuestName** | Pointer to **string** | Guest Name of the Credit Invoice. For other invoices, this element will be empty. | [optional] 
**DebitAmount** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**DepositTransactionId** | Pointer to **string** | Tax Service Accounting Codes used. | [optional] 
**Exchange** | Pointer to [**ExchangeAmounts**](ExchangeAmounts.md) |  | [optional] 
**FbaCertificate** | Pointer to **bool** | Flag indicates that the posting is Flexible Benefits Awards Certificate | [optional] 
**FinancialTransactionIdList** | Pointer to [**[]UniqueIDType**](UniqueIDType.md) | Unique Id that references an object uniquely in the system. | [optional] 
**GroupByCount** | Pointer to **float32** | When some SummaryPostingsGroupBy element is send as request ,then this element will represent how many transactions rolled up into this Summary Posting Type. | [optional] 
**GroupTypeInfo** | Pointer to [**PostingGroupType**](PostingGroupType.md) |  | [optional] 
**PaidOut** | Pointer to **bool** | Indicates if this transaction is a paid out transaction. | [optional] 
**PostedAmount** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**PostingDate** | Pointer to **string** | Date and time of posting. | [optional] 
**Price** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**Quantity** | Pointer to **float32** | Indicates Quantity. | [optional] 
**RateCode** | Pointer to **string** | Rate code associated to this transaction. | [optional] 
**ReceiptNo** | Pointer to **float32** | The receipt number of the transaction, if there is a receipt generated. | [optional] 
**Reference** | Pointer to **string** | User-defined posting reference. | [optional] 
**ReferenceTransactionNo** | Pointer to **float32** | Generate transaction number for the Posting. | [optional] 
**Remark** | Pointer to **string** | Posting remarks. | [optional] 
**RevenueDate** | Pointer to **string** | The date on which the transaction has its revenue effect. | [optional] 
**ReversePaymentTransactionNo** | Pointer to **float32** | Reverse payment transaction unique identifier. | [optional] 
**RoundingDifferenceTrx** | Pointer to **bool** | Indicator to determine if the posting was a posting for the Rounding Difference. | [optional] 
**ServiceRecovery** | Pointer to **bool** | Flag to indicates service recovery | [optional] 
**StampDuty** | Pointer to **bool** | Flag to identify a Stamp Duty Transaction. | [optional] 
**TaxInvoiceNo** | Pointer to **string** | Tax invoice number generated by payment tax. | [optional] 
**TransactionAmount** | Pointer to **float32** | The amount of the transaction. | [optional] 
**TransactionCode** | Pointer to **string** | Billing Transaction Code. | [optional] 
**TransactionDate** | Pointer to **string** | Transaction Date. | [optional] 
**TransactionDescription** | Pointer to **string** | Billing Transaction Description. | [optional] 
**TransactionNo** | Pointer to **float32** | Unique Transaction Identifier. | [optional] 
**TransactionType** | Pointer to [**CashieringTransactionTypeType**](CashieringTransactionTypeType.md) |  | [optional] 
**UpdateInfo** | Pointer to [**ARInvoicePostingTypeUpdateInfo**](ARInvoicePostingTypeUpdateInfo.md) |  | [optional] 

## Methods

### NewARInvoicePostingType

`func NewARInvoicePostingType() *ARInvoicePostingType`

NewARInvoicePostingType instantiates a new ARInvoicePostingType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewARInvoicePostingTypeWithDefaults

`func NewARInvoicePostingTypeWithDefaults() *ARInvoicePostingType`

NewARInvoicePostingTypeWithDefaults instantiates a new ARInvoicePostingType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetApprovalCode

`func (o *ARInvoicePostingType) GetApprovalCode() string`

GetApprovalCode returns the ApprovalCode field if non-nil, zero value otherwise.

### GetApprovalCodeOk

`func (o *ARInvoicePostingType) GetApprovalCodeOk() (*string, bool)`

GetApprovalCodeOk returns a tuple with the ApprovalCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovalCode

`func (o *ARInvoicePostingType) SetApprovalCode(v string)`

SetApprovalCode sets ApprovalCode field to given value.

### HasApprovalCode

`func (o *ARInvoicePostingType) HasApprovalCode() bool`

HasApprovalCode returns a boolean if a field has been set.

### GetApprovalStatus

`func (o *ARInvoicePostingType) GetApprovalStatus() string`

GetApprovalStatus returns the ApprovalStatus field if non-nil, zero value otherwise.

### GetApprovalStatusOk

`func (o *ARInvoicePostingType) GetApprovalStatusOk() (*string, bool)`

GetApprovalStatusOk returns a tuple with the ApprovalStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovalStatus

`func (o *ARInvoicePostingType) SetApprovalStatus(v string)`

SetApprovalStatus sets ApprovalStatus field to given value.

### HasApprovalStatus

`func (o *ARInvoicePostingType) HasApprovalStatus() bool`

HasApprovalStatus returns a boolean if a field has been set.

### GetArrangementCode

`func (o *ARInvoicePostingType) GetArrangementCode() string`

GetArrangementCode returns the ArrangementCode field if non-nil, zero value otherwise.

### GetArrangementCodeOk

`func (o *ARInvoicePostingType) GetArrangementCodeOk() (*string, bool)`

GetArrangementCodeOk returns a tuple with the ArrangementCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetArrangementCode

`func (o *ARInvoicePostingType) SetArrangementCode(v string)`

SetArrangementCode sets ArrangementCode field to given value.

### HasArrangementCode

`func (o *ARInvoicePostingType) HasArrangementCode() bool`

HasArrangementCode returns a boolean if a field has been set.

### GetArticleCode

`func (o *ARInvoicePostingType) GetArticleCode() string`

GetArticleCode returns the ArticleCode field if non-nil, zero value otherwise.

### GetArticleCodeOk

`func (o *ARInvoicePostingType) GetArticleCodeOk() (*string, bool)`

GetArticleCodeOk returns a tuple with the ArticleCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetArticleCode

`func (o *ARInvoicePostingType) SetArticleCode(v string)`

SetArticleCode sets ArticleCode field to given value.

### HasArticleCode

`func (o *ARInvoicePostingType) HasArticleCode() bool`

HasArticleCode returns a boolean if a field has been set.

### GetCanAdjustInvoice

`func (o *ARInvoicePostingType) GetCanAdjustInvoice() bool`

GetCanAdjustInvoice returns the CanAdjustInvoice field if non-nil, zero value otherwise.

### GetCanAdjustInvoiceOk

`func (o *ARInvoicePostingType) GetCanAdjustInvoiceOk() (*bool, bool)`

GetCanAdjustInvoiceOk returns a tuple with the CanAdjustInvoice field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCanAdjustInvoice

`func (o *ARInvoicePostingType) SetCanAdjustInvoice(v bool)`

SetCanAdjustInvoice sets CanAdjustInvoice field to given value.

### HasCanAdjustInvoice

`func (o *ARInvoicePostingType) HasCanAdjustInvoice() bool`

HasCanAdjustInvoice returns a boolean if a field has been set.

### GetCashierInfo

`func (o *ARInvoicePostingType) GetCashierInfo() CashierInfoType`

GetCashierInfo returns the CashierInfo field if non-nil, zero value otherwise.

### GetCashierInfoOk

`func (o *ARInvoicePostingType) GetCashierInfoOk() (*CashierInfoType, bool)`

GetCashierInfoOk returns a tuple with the CashierInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCashierInfo

`func (o *ARInvoicePostingType) SetCashierInfo(v CashierInfoType)`

SetCashierInfo sets CashierInfo field to given value.

### HasCashierInfo

`func (o *ARInvoicePostingType) HasCashierInfo() bool`

HasCashierInfo returns a boolean if a field has been set.

### GetCheckCount

`func (o *ARInvoicePostingType) GetCheckCount() string`

GetCheckCount returns the CheckCount field if non-nil, zero value otherwise.

### GetCheckCountOk

`func (o *ARInvoicePostingType) GetCheckCountOk() (*string, bool)`

GetCheckCountOk returns a tuple with the CheckCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCheckCount

`func (o *ARInvoicePostingType) SetCheckCount(v string)`

SetCheckCount sets CheckCount field to given value.

### HasCheckCount

`func (o *ARInvoicePostingType) HasCheckCount() bool`

HasCheckCount returns a boolean if a field has been set.

### GetCheckNo

`func (o *ARInvoicePostingType) GetCheckNo() string`

GetCheckNo returns the CheckNo field if non-nil, zero value otherwise.

### GetCheckNoOk

`func (o *ARInvoicePostingType) GetCheckNoOk() (*string, bool)`

GetCheckNoOk returns a tuple with the CheckNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCheckNo

`func (o *ARInvoicePostingType) SetCheckNo(v string)`

SetCheckNo sets CheckNo field to given value.

### HasCheckNo

`func (o *ARInvoicePostingType) HasCheckNo() bool`

HasCheckNo returns a boolean if a field has been set.

### GetCommissionable

`func (o *ARInvoicePostingType) GetCommissionable() bool`

GetCommissionable returns the Commissionable field if non-nil, zero value otherwise.

### GetCommissionableOk

`func (o *ARInvoicePostingType) GetCommissionableOk() (*bool, bool)`

GetCommissionableOk returns a tuple with the Commissionable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCommissionable

`func (o *ARInvoicePostingType) SetCommissionable(v bool)`

SetCommissionable sets Commissionable field to given value.

### HasCommissionable

`func (o *ARInvoicePostingType) HasCommissionable() bool`

HasCommissionable returns a boolean if a field has been set.

### GetCompPostingsInfo

`func (o *ARInvoicePostingType) GetCompPostingsInfo() CompPostingsType`

GetCompPostingsInfo returns the CompPostingsInfo field if non-nil, zero value otherwise.

### GetCompPostingsInfoOk

`func (o *ARInvoicePostingType) GetCompPostingsInfoOk() (*CompPostingsType, bool)`

GetCompPostingsInfoOk returns a tuple with the CompPostingsInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompPostingsInfo

`func (o *ARInvoicePostingType) SetCompPostingsInfo(v CompPostingsType)`

SetCompPostingsInfo sets CompPostingsInfo field to given value.

### HasCompPostingsInfo

`func (o *ARInvoicePostingType) HasCompPostingsInfo() bool`

HasCompPostingsInfo returns a boolean if a field has been set.

### GetCompRedemptionCode

`func (o *ARInvoicePostingType) GetCompRedemptionCode() string`

GetCompRedemptionCode returns the CompRedemptionCode field if non-nil, zero value otherwise.

### GetCompRedemptionCodeOk

`func (o *ARInvoicePostingType) GetCompRedemptionCodeOk() (*string, bool)`

GetCompRedemptionCodeOk returns a tuple with the CompRedemptionCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompRedemptionCode

`func (o *ARInvoicePostingType) SetCompRedemptionCode(v string)`

SetCompRedemptionCode sets CompRedemptionCode field to given value.

### HasCompRedemptionCode

`func (o *ARInvoicePostingType) HasCompRedemptionCode() bool`

HasCompRedemptionCode returns a boolean if a field has been set.

### GetCreditAmount

`func (o *ARInvoicePostingType) GetCreditAmount() CurrencyAmountType`

GetCreditAmount returns the CreditAmount field if non-nil, zero value otherwise.

### GetCreditAmountOk

`func (o *ARInvoicePostingType) GetCreditAmountOk() (*CurrencyAmountType, bool)`

GetCreditAmountOk returns a tuple with the CreditAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreditAmount

`func (o *ARInvoicePostingType) SetCreditAmount(v CurrencyAmountType)`

SetCreditAmount sets CreditAmount field to given value.

### HasCreditAmount

`func (o *ARInvoicePostingType) HasCreditAmount() bool`

HasCreditAmount returns a boolean if a field has been set.

### GetCreditInvoiceGuestName

`func (o *ARInvoicePostingType) GetCreditInvoiceGuestName() string`

GetCreditInvoiceGuestName returns the CreditInvoiceGuestName field if non-nil, zero value otherwise.

### GetCreditInvoiceGuestNameOk

`func (o *ARInvoicePostingType) GetCreditInvoiceGuestNameOk() (*string, bool)`

GetCreditInvoiceGuestNameOk returns a tuple with the CreditInvoiceGuestName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreditInvoiceGuestName

`func (o *ARInvoicePostingType) SetCreditInvoiceGuestName(v string)`

SetCreditInvoiceGuestName sets CreditInvoiceGuestName field to given value.

### HasCreditInvoiceGuestName

`func (o *ARInvoicePostingType) HasCreditInvoiceGuestName() bool`

HasCreditInvoiceGuestName returns a boolean if a field has been set.

### GetDebitAmount

`func (o *ARInvoicePostingType) GetDebitAmount() CurrencyAmountType`

GetDebitAmount returns the DebitAmount field if non-nil, zero value otherwise.

### GetDebitAmountOk

`func (o *ARInvoicePostingType) GetDebitAmountOk() (*CurrencyAmountType, bool)`

GetDebitAmountOk returns a tuple with the DebitAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDebitAmount

`func (o *ARInvoicePostingType) SetDebitAmount(v CurrencyAmountType)`

SetDebitAmount sets DebitAmount field to given value.

### HasDebitAmount

`func (o *ARInvoicePostingType) HasDebitAmount() bool`

HasDebitAmount returns a boolean if a field has been set.

### GetDepositTransactionId

`func (o *ARInvoicePostingType) GetDepositTransactionId() string`

GetDepositTransactionId returns the DepositTransactionId field if non-nil, zero value otherwise.

### GetDepositTransactionIdOk

`func (o *ARInvoicePostingType) GetDepositTransactionIdOk() (*string, bool)`

GetDepositTransactionIdOk returns a tuple with the DepositTransactionId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDepositTransactionId

`func (o *ARInvoicePostingType) SetDepositTransactionId(v string)`

SetDepositTransactionId sets DepositTransactionId field to given value.

### HasDepositTransactionId

`func (o *ARInvoicePostingType) HasDepositTransactionId() bool`

HasDepositTransactionId returns a boolean if a field has been set.

### GetExchange

`func (o *ARInvoicePostingType) GetExchange() ExchangeAmounts`

GetExchange returns the Exchange field if non-nil, zero value otherwise.

### GetExchangeOk

`func (o *ARInvoicePostingType) GetExchangeOk() (*ExchangeAmounts, bool)`

GetExchangeOk returns a tuple with the Exchange field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExchange

`func (o *ARInvoicePostingType) SetExchange(v ExchangeAmounts)`

SetExchange sets Exchange field to given value.

### HasExchange

`func (o *ARInvoicePostingType) HasExchange() bool`

HasExchange returns a boolean if a field has been set.

### GetFbaCertificate

`func (o *ARInvoicePostingType) GetFbaCertificate() bool`

GetFbaCertificate returns the FbaCertificate field if non-nil, zero value otherwise.

### GetFbaCertificateOk

`func (o *ARInvoicePostingType) GetFbaCertificateOk() (*bool, bool)`

GetFbaCertificateOk returns a tuple with the FbaCertificate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFbaCertificate

`func (o *ARInvoicePostingType) SetFbaCertificate(v bool)`

SetFbaCertificate sets FbaCertificate field to given value.

### HasFbaCertificate

`func (o *ARInvoicePostingType) HasFbaCertificate() bool`

HasFbaCertificate returns a boolean if a field has been set.

### GetFinancialTransactionIdList

`func (o *ARInvoicePostingType) GetFinancialTransactionIdList() []UniqueIDType`

GetFinancialTransactionIdList returns the FinancialTransactionIdList field if non-nil, zero value otherwise.

### GetFinancialTransactionIdListOk

`func (o *ARInvoicePostingType) GetFinancialTransactionIdListOk() (*[]UniqueIDType, bool)`

GetFinancialTransactionIdListOk returns a tuple with the FinancialTransactionIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFinancialTransactionIdList

`func (o *ARInvoicePostingType) SetFinancialTransactionIdList(v []UniqueIDType)`

SetFinancialTransactionIdList sets FinancialTransactionIdList field to given value.

### HasFinancialTransactionIdList

`func (o *ARInvoicePostingType) HasFinancialTransactionIdList() bool`

HasFinancialTransactionIdList returns a boolean if a field has been set.

### GetGroupByCount

`func (o *ARInvoicePostingType) GetGroupByCount() float32`

GetGroupByCount returns the GroupByCount field if non-nil, zero value otherwise.

### GetGroupByCountOk

`func (o *ARInvoicePostingType) GetGroupByCountOk() (*float32, bool)`

GetGroupByCountOk returns a tuple with the GroupByCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGroupByCount

`func (o *ARInvoicePostingType) SetGroupByCount(v float32)`

SetGroupByCount sets GroupByCount field to given value.

### HasGroupByCount

`func (o *ARInvoicePostingType) HasGroupByCount() bool`

HasGroupByCount returns a boolean if a field has been set.

### GetGroupTypeInfo

`func (o *ARInvoicePostingType) GetGroupTypeInfo() PostingGroupType`

GetGroupTypeInfo returns the GroupTypeInfo field if non-nil, zero value otherwise.

### GetGroupTypeInfoOk

`func (o *ARInvoicePostingType) GetGroupTypeInfoOk() (*PostingGroupType, bool)`

GetGroupTypeInfoOk returns a tuple with the GroupTypeInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGroupTypeInfo

`func (o *ARInvoicePostingType) SetGroupTypeInfo(v PostingGroupType)`

SetGroupTypeInfo sets GroupTypeInfo field to given value.

### HasGroupTypeInfo

`func (o *ARInvoicePostingType) HasGroupTypeInfo() bool`

HasGroupTypeInfo returns a boolean if a field has been set.

### GetPaidOut

`func (o *ARInvoicePostingType) GetPaidOut() bool`

GetPaidOut returns the PaidOut field if non-nil, zero value otherwise.

### GetPaidOutOk

`func (o *ARInvoicePostingType) GetPaidOutOk() (*bool, bool)`

GetPaidOutOk returns a tuple with the PaidOut field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaidOut

`func (o *ARInvoicePostingType) SetPaidOut(v bool)`

SetPaidOut sets PaidOut field to given value.

### HasPaidOut

`func (o *ARInvoicePostingType) HasPaidOut() bool`

HasPaidOut returns a boolean if a field has been set.

### GetPostedAmount

`func (o *ARInvoicePostingType) GetPostedAmount() CurrencyAmountType`

GetPostedAmount returns the PostedAmount field if non-nil, zero value otherwise.

### GetPostedAmountOk

`func (o *ARInvoicePostingType) GetPostedAmountOk() (*CurrencyAmountType, bool)`

GetPostedAmountOk returns a tuple with the PostedAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPostedAmount

`func (o *ARInvoicePostingType) SetPostedAmount(v CurrencyAmountType)`

SetPostedAmount sets PostedAmount field to given value.

### HasPostedAmount

`func (o *ARInvoicePostingType) HasPostedAmount() bool`

HasPostedAmount returns a boolean if a field has been set.

### GetPostingDate

`func (o *ARInvoicePostingType) GetPostingDate() string`

GetPostingDate returns the PostingDate field if non-nil, zero value otherwise.

### GetPostingDateOk

`func (o *ARInvoicePostingType) GetPostingDateOk() (*string, bool)`

GetPostingDateOk returns a tuple with the PostingDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPostingDate

`func (o *ARInvoicePostingType) SetPostingDate(v string)`

SetPostingDate sets PostingDate field to given value.

### HasPostingDate

`func (o *ARInvoicePostingType) HasPostingDate() bool`

HasPostingDate returns a boolean if a field has been set.

### GetPrice

`func (o *ARInvoicePostingType) GetPrice() CurrencyAmountType`

GetPrice returns the Price field if non-nil, zero value otherwise.

### GetPriceOk

`func (o *ARInvoicePostingType) GetPriceOk() (*CurrencyAmountType, bool)`

GetPriceOk returns a tuple with the Price field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrice

`func (o *ARInvoicePostingType) SetPrice(v CurrencyAmountType)`

SetPrice sets Price field to given value.

### HasPrice

`func (o *ARInvoicePostingType) HasPrice() bool`

HasPrice returns a boolean if a field has been set.

### GetQuantity

`func (o *ARInvoicePostingType) GetQuantity() float32`

GetQuantity returns the Quantity field if non-nil, zero value otherwise.

### GetQuantityOk

`func (o *ARInvoicePostingType) GetQuantityOk() (*float32, bool)`

GetQuantityOk returns a tuple with the Quantity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuantity

`func (o *ARInvoicePostingType) SetQuantity(v float32)`

SetQuantity sets Quantity field to given value.

### HasQuantity

`func (o *ARInvoicePostingType) HasQuantity() bool`

HasQuantity returns a boolean if a field has been set.

### GetRateCode

`func (o *ARInvoicePostingType) GetRateCode() string`

GetRateCode returns the RateCode field if non-nil, zero value otherwise.

### GetRateCodeOk

`func (o *ARInvoicePostingType) GetRateCodeOk() (*string, bool)`

GetRateCodeOk returns a tuple with the RateCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateCode

`func (o *ARInvoicePostingType) SetRateCode(v string)`

SetRateCode sets RateCode field to given value.

### HasRateCode

`func (o *ARInvoicePostingType) HasRateCode() bool`

HasRateCode returns a boolean if a field has been set.

### GetReceiptNo

`func (o *ARInvoicePostingType) GetReceiptNo() float32`

GetReceiptNo returns the ReceiptNo field if non-nil, zero value otherwise.

### GetReceiptNoOk

`func (o *ARInvoicePostingType) GetReceiptNoOk() (*float32, bool)`

GetReceiptNoOk returns a tuple with the ReceiptNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReceiptNo

`func (o *ARInvoicePostingType) SetReceiptNo(v float32)`

SetReceiptNo sets ReceiptNo field to given value.

### HasReceiptNo

`func (o *ARInvoicePostingType) HasReceiptNo() bool`

HasReceiptNo returns a boolean if a field has been set.

### GetReference

`func (o *ARInvoicePostingType) GetReference() string`

GetReference returns the Reference field if non-nil, zero value otherwise.

### GetReferenceOk

`func (o *ARInvoicePostingType) GetReferenceOk() (*string, bool)`

GetReferenceOk returns a tuple with the Reference field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReference

`func (o *ARInvoicePostingType) SetReference(v string)`

SetReference sets Reference field to given value.

### HasReference

`func (o *ARInvoicePostingType) HasReference() bool`

HasReference returns a boolean if a field has been set.

### GetReferenceTransactionNo

`func (o *ARInvoicePostingType) GetReferenceTransactionNo() float32`

GetReferenceTransactionNo returns the ReferenceTransactionNo field if non-nil, zero value otherwise.

### GetReferenceTransactionNoOk

`func (o *ARInvoicePostingType) GetReferenceTransactionNoOk() (*float32, bool)`

GetReferenceTransactionNoOk returns a tuple with the ReferenceTransactionNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReferenceTransactionNo

`func (o *ARInvoicePostingType) SetReferenceTransactionNo(v float32)`

SetReferenceTransactionNo sets ReferenceTransactionNo field to given value.

### HasReferenceTransactionNo

`func (o *ARInvoicePostingType) HasReferenceTransactionNo() bool`

HasReferenceTransactionNo returns a boolean if a field has been set.

### GetRemark

`func (o *ARInvoicePostingType) GetRemark() string`

GetRemark returns the Remark field if non-nil, zero value otherwise.

### GetRemarkOk

`func (o *ARInvoicePostingType) GetRemarkOk() (*string, bool)`

GetRemarkOk returns a tuple with the Remark field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRemark

`func (o *ARInvoicePostingType) SetRemark(v string)`

SetRemark sets Remark field to given value.

### HasRemark

`func (o *ARInvoicePostingType) HasRemark() bool`

HasRemark returns a boolean if a field has been set.

### GetRevenueDate

`func (o *ARInvoicePostingType) GetRevenueDate() string`

GetRevenueDate returns the RevenueDate field if non-nil, zero value otherwise.

### GetRevenueDateOk

`func (o *ARInvoicePostingType) GetRevenueDateOk() (*string, bool)`

GetRevenueDateOk returns a tuple with the RevenueDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevenueDate

`func (o *ARInvoicePostingType) SetRevenueDate(v string)`

SetRevenueDate sets RevenueDate field to given value.

### HasRevenueDate

`func (o *ARInvoicePostingType) HasRevenueDate() bool`

HasRevenueDate returns a boolean if a field has been set.

### GetReversePaymentTransactionNo

`func (o *ARInvoicePostingType) GetReversePaymentTransactionNo() float32`

GetReversePaymentTransactionNo returns the ReversePaymentTransactionNo field if non-nil, zero value otherwise.

### GetReversePaymentTransactionNoOk

`func (o *ARInvoicePostingType) GetReversePaymentTransactionNoOk() (*float32, bool)`

GetReversePaymentTransactionNoOk returns a tuple with the ReversePaymentTransactionNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReversePaymentTransactionNo

`func (o *ARInvoicePostingType) SetReversePaymentTransactionNo(v float32)`

SetReversePaymentTransactionNo sets ReversePaymentTransactionNo field to given value.

### HasReversePaymentTransactionNo

`func (o *ARInvoicePostingType) HasReversePaymentTransactionNo() bool`

HasReversePaymentTransactionNo returns a boolean if a field has been set.

### GetRoundingDifferenceTrx

`func (o *ARInvoicePostingType) GetRoundingDifferenceTrx() bool`

GetRoundingDifferenceTrx returns the RoundingDifferenceTrx field if non-nil, zero value otherwise.

### GetRoundingDifferenceTrxOk

`func (o *ARInvoicePostingType) GetRoundingDifferenceTrxOk() (*bool, bool)`

GetRoundingDifferenceTrxOk returns a tuple with the RoundingDifferenceTrx field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoundingDifferenceTrx

`func (o *ARInvoicePostingType) SetRoundingDifferenceTrx(v bool)`

SetRoundingDifferenceTrx sets RoundingDifferenceTrx field to given value.

### HasRoundingDifferenceTrx

`func (o *ARInvoicePostingType) HasRoundingDifferenceTrx() bool`

HasRoundingDifferenceTrx returns a boolean if a field has been set.

### GetServiceRecovery

`func (o *ARInvoicePostingType) GetServiceRecovery() bool`

GetServiceRecovery returns the ServiceRecovery field if non-nil, zero value otherwise.

### GetServiceRecoveryOk

`func (o *ARInvoicePostingType) GetServiceRecoveryOk() (*bool, bool)`

GetServiceRecoveryOk returns a tuple with the ServiceRecovery field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetServiceRecovery

`func (o *ARInvoicePostingType) SetServiceRecovery(v bool)`

SetServiceRecovery sets ServiceRecovery field to given value.

### HasServiceRecovery

`func (o *ARInvoicePostingType) HasServiceRecovery() bool`

HasServiceRecovery returns a boolean if a field has been set.

### GetStampDuty

`func (o *ARInvoicePostingType) GetStampDuty() bool`

GetStampDuty returns the StampDuty field if non-nil, zero value otherwise.

### GetStampDutyOk

`func (o *ARInvoicePostingType) GetStampDutyOk() (*bool, bool)`

GetStampDutyOk returns a tuple with the StampDuty field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStampDuty

`func (o *ARInvoicePostingType) SetStampDuty(v bool)`

SetStampDuty sets StampDuty field to given value.

### HasStampDuty

`func (o *ARInvoicePostingType) HasStampDuty() bool`

HasStampDuty returns a boolean if a field has been set.

### GetTaxInvoiceNo

`func (o *ARInvoicePostingType) GetTaxInvoiceNo() string`

GetTaxInvoiceNo returns the TaxInvoiceNo field if non-nil, zero value otherwise.

### GetTaxInvoiceNoOk

`func (o *ARInvoicePostingType) GetTaxInvoiceNoOk() (*string, bool)`

GetTaxInvoiceNoOk returns a tuple with the TaxInvoiceNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaxInvoiceNo

`func (o *ARInvoicePostingType) SetTaxInvoiceNo(v string)`

SetTaxInvoiceNo sets TaxInvoiceNo field to given value.

### HasTaxInvoiceNo

`func (o *ARInvoicePostingType) HasTaxInvoiceNo() bool`

HasTaxInvoiceNo returns a boolean if a field has been set.

### GetTransactionAmount

`func (o *ARInvoicePostingType) GetTransactionAmount() float32`

GetTransactionAmount returns the TransactionAmount field if non-nil, zero value otherwise.

### GetTransactionAmountOk

`func (o *ARInvoicePostingType) GetTransactionAmountOk() (*float32, bool)`

GetTransactionAmountOk returns a tuple with the TransactionAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionAmount

`func (o *ARInvoicePostingType) SetTransactionAmount(v float32)`

SetTransactionAmount sets TransactionAmount field to given value.

### HasTransactionAmount

`func (o *ARInvoicePostingType) HasTransactionAmount() bool`

HasTransactionAmount returns a boolean if a field has been set.

### GetTransactionCode

`func (o *ARInvoicePostingType) GetTransactionCode() string`

GetTransactionCode returns the TransactionCode field if non-nil, zero value otherwise.

### GetTransactionCodeOk

`func (o *ARInvoicePostingType) GetTransactionCodeOk() (*string, bool)`

GetTransactionCodeOk returns a tuple with the TransactionCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionCode

`func (o *ARInvoicePostingType) SetTransactionCode(v string)`

SetTransactionCode sets TransactionCode field to given value.

### HasTransactionCode

`func (o *ARInvoicePostingType) HasTransactionCode() bool`

HasTransactionCode returns a boolean if a field has been set.

### GetTransactionDate

`func (o *ARInvoicePostingType) GetTransactionDate() string`

GetTransactionDate returns the TransactionDate field if non-nil, zero value otherwise.

### GetTransactionDateOk

`func (o *ARInvoicePostingType) GetTransactionDateOk() (*string, bool)`

GetTransactionDateOk returns a tuple with the TransactionDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionDate

`func (o *ARInvoicePostingType) SetTransactionDate(v string)`

SetTransactionDate sets TransactionDate field to given value.

### HasTransactionDate

`func (o *ARInvoicePostingType) HasTransactionDate() bool`

HasTransactionDate returns a boolean if a field has been set.

### GetTransactionDescription

`func (o *ARInvoicePostingType) GetTransactionDescription() string`

GetTransactionDescription returns the TransactionDescription field if non-nil, zero value otherwise.

### GetTransactionDescriptionOk

`func (o *ARInvoicePostingType) GetTransactionDescriptionOk() (*string, bool)`

GetTransactionDescriptionOk returns a tuple with the TransactionDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionDescription

`func (o *ARInvoicePostingType) SetTransactionDescription(v string)`

SetTransactionDescription sets TransactionDescription field to given value.

### HasTransactionDescription

`func (o *ARInvoicePostingType) HasTransactionDescription() bool`

HasTransactionDescription returns a boolean if a field has been set.

### GetTransactionNo

`func (o *ARInvoicePostingType) GetTransactionNo() float32`

GetTransactionNo returns the TransactionNo field if non-nil, zero value otherwise.

### GetTransactionNoOk

`func (o *ARInvoicePostingType) GetTransactionNoOk() (*float32, bool)`

GetTransactionNoOk returns a tuple with the TransactionNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionNo

`func (o *ARInvoicePostingType) SetTransactionNo(v float32)`

SetTransactionNo sets TransactionNo field to given value.

### HasTransactionNo

`func (o *ARInvoicePostingType) HasTransactionNo() bool`

HasTransactionNo returns a boolean if a field has been set.

### GetTransactionType

`func (o *ARInvoicePostingType) GetTransactionType() CashieringTransactionTypeType`

GetTransactionType returns the TransactionType field if non-nil, zero value otherwise.

### GetTransactionTypeOk

`func (o *ARInvoicePostingType) GetTransactionTypeOk() (*CashieringTransactionTypeType, bool)`

GetTransactionTypeOk returns a tuple with the TransactionType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionType

`func (o *ARInvoicePostingType) SetTransactionType(v CashieringTransactionTypeType)`

SetTransactionType sets TransactionType field to given value.

### HasTransactionType

`func (o *ARInvoicePostingType) HasTransactionType() bool`

HasTransactionType returns a boolean if a field has been set.

### GetUpdateInfo

`func (o *ARInvoicePostingType) GetUpdateInfo() ARInvoicePostingTypeUpdateInfo`

GetUpdateInfo returns the UpdateInfo field if non-nil, zero value otherwise.

### GetUpdateInfoOk

`func (o *ARInvoicePostingType) GetUpdateInfoOk() (*ARInvoicePostingTypeUpdateInfo, bool)`

GetUpdateInfoOk returns a tuple with the UpdateInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdateInfo

`func (o *ARInvoicePostingType) SetUpdateInfo(v ARInvoicePostingTypeUpdateInfo)`

SetUpdateInfo sets UpdateInfo field to given value.

### HasUpdateInfo

`func (o *ARInvoicePostingType) HasUpdateInfo() bool`

HasUpdateInfo returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


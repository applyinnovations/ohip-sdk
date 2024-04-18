# DetailPostingType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ARInfo** | Pointer to [**TransactionARInfoType**](TransactionARInfoType.md) |  | [optional] 
**AdjustmentInfo** | Pointer to [**TransactionAdjustmentInfoType**](TransactionAdjustmentInfoType.md) |  | [optional] 
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
**CurrencyExchangeInfo** | Pointer to [**TransactionCurrencyExchangeInfoType**](TransactionCurrencyExchangeInfoType.md) |  | [optional] 
**CustomCharge** | Pointer to **bool** | Flag to identify a Custom Charge. | [optional] 
**DebitAmount** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**DeferredTax** | Pointer to **bool** | Flag to indicate if the Posting is a deferred tax record. Set to true only when the posting is a deferred tax record. Set to false only when the posting is not a deferred tax record. | [optional] 
**DepositTransactionId** | Pointer to **string** | Tax Service Accounting Codes used. | [optional] 
**Exchange** | Pointer to [**ExchangeAmounts**](ExchangeAmounts.md) |  | [optional] 
**ExchangeInformation** | Pointer to **string** | Exchange Information - text presentation of the exchange operation including formula, buy rate, etc. | [optional] 
**FbaCertificate** | Pointer to **bool** | Flag indicates that the posting is Flexible Benefits Awards Certificate | [optional] 
**FinancialTransactionIdList** | Pointer to [**[]UniqueIDType**](UniqueIDType.md) | Unique Id that references an object uniquely in the system. | [optional] 
**FiscalBillNo** | Pointer to **string** | The Fiscal Bill number of this posting | [optional] 
**FolioNo** | Pointer to **float32** | The Folio number of this posting, if there was a Folio already generated. | [optional] 
**FolioNoWithPrefix** | Pointer to **string** | The folio number with prefix value. | [optional] 
**FolioTypeName** | Pointer to **string** | The name of the Folio Type used for the Folio Number sequence. | [optional] 
**FolioWindowNo** | Pointer to **int32** |  | [optional] 
**GroupTypeInfo** | Pointer to [**PostingGroupType**](PostingGroupType.md) |  | [optional] 
**GuestInfo** | Pointer to [**DetailPostingTypeGuestInfo**](DetailPostingTypeGuestInfo.md) |  | [optional] 
**HotelId** | Pointer to **string** | Property code. | [optional] 
**InternalFolioWindowID** | Pointer to **string** | Internal Unique id for the Folio Window. | [optional] 
**MiscellaneousInfo** | Pointer to [**DetailPostingTypeMiscellaneousInfo**](DetailPostingTypeMiscellaneousInfo.md) |  | [optional] 
**PaidOut** | Pointer to **bool** | Indicates if this transaction is a paid out transaction. | [optional] 
**PayeeInfo** | Pointer to [**PayeeInfoType**](PayeeInfoType.md) |  | [optional] 
**PaymentMethod** | Pointer to [**ReservationPaymentMethodType**](ReservationPaymentMethodType.md) |  | [optional] 
**PostedAmount** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**PostingDate** | Pointer to **string** | Date and time of posting. | [optional] 
**Price** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**Quantity** | Pointer to **float32** | Indicates Quantity. | [optional] 
**RateCode** | Pointer to **string** | Rate code associated to this transaction. | [optional] 
**ReceiptNo** | Pointer to **float32** | The receipt number of the transaction, if there is a receipt generated. | [optional] 
**Reference** | Pointer to **string** | User-defined posting reference. | [optional] 
**ReferencePackageTransactionNo** | Pointer to **float32** | Package transaction number for the Posting. | [optional] 
**ReferenceTransactionNo** | Pointer to **float32** | Generate transaction number for the Posting. | [optional] 
**Remark** | Pointer to **string** | Posting remarks. | [optional] 
**RevenueDate** | Pointer to **string** | The date on which the transaction has its revenue effect. | [optional] 
**ReversePaymentTransactionNo** | Pointer to **float32** | Reverse payment transaction unique identifier. | [optional] 
**RevisionNo** | Pointer to **float32** |  | [optional] 
**RoundingDifferenceTrx** | Pointer to **bool** | Indicator to determine if the posting was a posting for the Rounding Difference. | [optional] 
**ServiceRecovery** | Pointer to **bool** | Flag to indicates service recovery | [optional] 
**StampDuty** | Pointer to **bool** | Flag to identify a Stamp Duty Transaction. | [optional] 
**SubPostings** | Pointer to [**[]SummaryPostingType**](SummaryPostingType.md) | List of postings. | [optional] 
**TargetHotel** | Pointer to **string** | Cross property posting hotel code. | [optional] 
**TaxInvoiceNo** | Pointer to **string** | Tax invoice number generated by payment tax. | [optional] 
**TransactionAmount** | Pointer to **float32** | The amount of the transaction. | [optional] 
**TransactionCode** | Pointer to **string** | Billing Transaction Code. | [optional] 
**TransactionDate** | Pointer to **string** | Transaction Date. | [optional] 
**TransactionDescription** | Pointer to **string** | Billing Transaction Description. | [optional] 
**TransactionNo** | Pointer to **float32** | Unique Transaction Identifier. | [optional] 
**TransactionType** | Pointer to [**CashieringTransactionTypeType**](CashieringTransactionTypeType.md) |  | [optional] 
**UpdateInfo** | Pointer to [**DepositDetailPostingTypeUpdateInfo**](DepositDetailPostingTypeUpdateInfo.md) |  | [optional] 

## Methods

### NewDetailPostingType

`func NewDetailPostingType() *DetailPostingType`

NewDetailPostingType instantiates a new DetailPostingType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDetailPostingTypeWithDefaults

`func NewDetailPostingTypeWithDefaults() *DetailPostingType`

NewDetailPostingTypeWithDefaults instantiates a new DetailPostingType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetARInfo

`func (o *DetailPostingType) GetARInfo() TransactionARInfoType`

GetARInfo returns the ARInfo field if non-nil, zero value otherwise.

### GetARInfoOk

`func (o *DetailPostingType) GetARInfoOk() (*TransactionARInfoType, bool)`

GetARInfoOk returns a tuple with the ARInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetARInfo

`func (o *DetailPostingType) SetARInfo(v TransactionARInfoType)`

SetARInfo sets ARInfo field to given value.

### HasARInfo

`func (o *DetailPostingType) HasARInfo() bool`

HasARInfo returns a boolean if a field has been set.

### GetAdjustmentInfo

`func (o *DetailPostingType) GetAdjustmentInfo() TransactionAdjustmentInfoType`

GetAdjustmentInfo returns the AdjustmentInfo field if non-nil, zero value otherwise.

### GetAdjustmentInfoOk

`func (o *DetailPostingType) GetAdjustmentInfoOk() (*TransactionAdjustmentInfoType, bool)`

GetAdjustmentInfoOk returns a tuple with the AdjustmentInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdjustmentInfo

`func (o *DetailPostingType) SetAdjustmentInfo(v TransactionAdjustmentInfoType)`

SetAdjustmentInfo sets AdjustmentInfo field to given value.

### HasAdjustmentInfo

`func (o *DetailPostingType) HasAdjustmentInfo() bool`

HasAdjustmentInfo returns a boolean if a field has been set.

### GetApprovalCode

`func (o *DetailPostingType) GetApprovalCode() string`

GetApprovalCode returns the ApprovalCode field if non-nil, zero value otherwise.

### GetApprovalCodeOk

`func (o *DetailPostingType) GetApprovalCodeOk() (*string, bool)`

GetApprovalCodeOk returns a tuple with the ApprovalCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovalCode

`func (o *DetailPostingType) SetApprovalCode(v string)`

SetApprovalCode sets ApprovalCode field to given value.

### HasApprovalCode

`func (o *DetailPostingType) HasApprovalCode() bool`

HasApprovalCode returns a boolean if a field has been set.

### GetApprovalStatus

`func (o *DetailPostingType) GetApprovalStatus() string`

GetApprovalStatus returns the ApprovalStatus field if non-nil, zero value otherwise.

### GetApprovalStatusOk

`func (o *DetailPostingType) GetApprovalStatusOk() (*string, bool)`

GetApprovalStatusOk returns a tuple with the ApprovalStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovalStatus

`func (o *DetailPostingType) SetApprovalStatus(v string)`

SetApprovalStatus sets ApprovalStatus field to given value.

### HasApprovalStatus

`func (o *DetailPostingType) HasApprovalStatus() bool`

HasApprovalStatus returns a boolean if a field has been set.

### GetArrangementCode

`func (o *DetailPostingType) GetArrangementCode() string`

GetArrangementCode returns the ArrangementCode field if non-nil, zero value otherwise.

### GetArrangementCodeOk

`func (o *DetailPostingType) GetArrangementCodeOk() (*string, bool)`

GetArrangementCodeOk returns a tuple with the ArrangementCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetArrangementCode

`func (o *DetailPostingType) SetArrangementCode(v string)`

SetArrangementCode sets ArrangementCode field to given value.

### HasArrangementCode

`func (o *DetailPostingType) HasArrangementCode() bool`

HasArrangementCode returns a boolean if a field has been set.

### GetArticleCode

`func (o *DetailPostingType) GetArticleCode() string`

GetArticleCode returns the ArticleCode field if non-nil, zero value otherwise.

### GetArticleCodeOk

`func (o *DetailPostingType) GetArticleCodeOk() (*string, bool)`

GetArticleCodeOk returns a tuple with the ArticleCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetArticleCode

`func (o *DetailPostingType) SetArticleCode(v string)`

SetArticleCode sets ArticleCode field to given value.

### HasArticleCode

`func (o *DetailPostingType) HasArticleCode() bool`

HasArticleCode returns a boolean if a field has been set.

### GetCanAdjustInvoice

`func (o *DetailPostingType) GetCanAdjustInvoice() bool`

GetCanAdjustInvoice returns the CanAdjustInvoice field if non-nil, zero value otherwise.

### GetCanAdjustInvoiceOk

`func (o *DetailPostingType) GetCanAdjustInvoiceOk() (*bool, bool)`

GetCanAdjustInvoiceOk returns a tuple with the CanAdjustInvoice field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCanAdjustInvoice

`func (o *DetailPostingType) SetCanAdjustInvoice(v bool)`

SetCanAdjustInvoice sets CanAdjustInvoice field to given value.

### HasCanAdjustInvoice

`func (o *DetailPostingType) HasCanAdjustInvoice() bool`

HasCanAdjustInvoice returns a boolean if a field has been set.

### GetCashierInfo

`func (o *DetailPostingType) GetCashierInfo() CashierInfoType`

GetCashierInfo returns the CashierInfo field if non-nil, zero value otherwise.

### GetCashierInfoOk

`func (o *DetailPostingType) GetCashierInfoOk() (*CashierInfoType, bool)`

GetCashierInfoOk returns a tuple with the CashierInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCashierInfo

`func (o *DetailPostingType) SetCashierInfo(v CashierInfoType)`

SetCashierInfo sets CashierInfo field to given value.

### HasCashierInfo

`func (o *DetailPostingType) HasCashierInfo() bool`

HasCashierInfo returns a boolean if a field has been set.

### GetCheckCount

`func (o *DetailPostingType) GetCheckCount() string`

GetCheckCount returns the CheckCount field if non-nil, zero value otherwise.

### GetCheckCountOk

`func (o *DetailPostingType) GetCheckCountOk() (*string, bool)`

GetCheckCountOk returns a tuple with the CheckCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCheckCount

`func (o *DetailPostingType) SetCheckCount(v string)`

SetCheckCount sets CheckCount field to given value.

### HasCheckCount

`func (o *DetailPostingType) HasCheckCount() bool`

HasCheckCount returns a boolean if a field has been set.

### GetCheckNo

`func (o *DetailPostingType) GetCheckNo() string`

GetCheckNo returns the CheckNo field if non-nil, zero value otherwise.

### GetCheckNoOk

`func (o *DetailPostingType) GetCheckNoOk() (*string, bool)`

GetCheckNoOk returns a tuple with the CheckNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCheckNo

`func (o *DetailPostingType) SetCheckNo(v string)`

SetCheckNo sets CheckNo field to given value.

### HasCheckNo

`func (o *DetailPostingType) HasCheckNo() bool`

HasCheckNo returns a boolean if a field has been set.

### GetCommissionable

`func (o *DetailPostingType) GetCommissionable() bool`

GetCommissionable returns the Commissionable field if non-nil, zero value otherwise.

### GetCommissionableOk

`func (o *DetailPostingType) GetCommissionableOk() (*bool, bool)`

GetCommissionableOk returns a tuple with the Commissionable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCommissionable

`func (o *DetailPostingType) SetCommissionable(v bool)`

SetCommissionable sets Commissionable field to given value.

### HasCommissionable

`func (o *DetailPostingType) HasCommissionable() bool`

HasCommissionable returns a boolean if a field has been set.

### GetCompPostingsInfo

`func (o *DetailPostingType) GetCompPostingsInfo() CompPostingsType`

GetCompPostingsInfo returns the CompPostingsInfo field if non-nil, zero value otherwise.

### GetCompPostingsInfoOk

`func (o *DetailPostingType) GetCompPostingsInfoOk() (*CompPostingsType, bool)`

GetCompPostingsInfoOk returns a tuple with the CompPostingsInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompPostingsInfo

`func (o *DetailPostingType) SetCompPostingsInfo(v CompPostingsType)`

SetCompPostingsInfo sets CompPostingsInfo field to given value.

### HasCompPostingsInfo

`func (o *DetailPostingType) HasCompPostingsInfo() bool`

HasCompPostingsInfo returns a boolean if a field has been set.

### GetCompRedemptionCode

`func (o *DetailPostingType) GetCompRedemptionCode() string`

GetCompRedemptionCode returns the CompRedemptionCode field if non-nil, zero value otherwise.

### GetCompRedemptionCodeOk

`func (o *DetailPostingType) GetCompRedemptionCodeOk() (*string, bool)`

GetCompRedemptionCodeOk returns a tuple with the CompRedemptionCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompRedemptionCode

`func (o *DetailPostingType) SetCompRedemptionCode(v string)`

SetCompRedemptionCode sets CompRedemptionCode field to given value.

### HasCompRedemptionCode

`func (o *DetailPostingType) HasCompRedemptionCode() bool`

HasCompRedemptionCode returns a boolean if a field has been set.

### GetCreditAmount

`func (o *DetailPostingType) GetCreditAmount() CurrencyAmountType`

GetCreditAmount returns the CreditAmount field if non-nil, zero value otherwise.

### GetCreditAmountOk

`func (o *DetailPostingType) GetCreditAmountOk() (*CurrencyAmountType, bool)`

GetCreditAmountOk returns a tuple with the CreditAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreditAmount

`func (o *DetailPostingType) SetCreditAmount(v CurrencyAmountType)`

SetCreditAmount sets CreditAmount field to given value.

### HasCreditAmount

`func (o *DetailPostingType) HasCreditAmount() bool`

HasCreditAmount returns a boolean if a field has been set.

### GetCurrencyExchangeInfo

`func (o *DetailPostingType) GetCurrencyExchangeInfo() TransactionCurrencyExchangeInfoType`

GetCurrencyExchangeInfo returns the CurrencyExchangeInfo field if non-nil, zero value otherwise.

### GetCurrencyExchangeInfoOk

`func (o *DetailPostingType) GetCurrencyExchangeInfoOk() (*TransactionCurrencyExchangeInfoType, bool)`

GetCurrencyExchangeInfoOk returns a tuple with the CurrencyExchangeInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrencyExchangeInfo

`func (o *DetailPostingType) SetCurrencyExchangeInfo(v TransactionCurrencyExchangeInfoType)`

SetCurrencyExchangeInfo sets CurrencyExchangeInfo field to given value.

### HasCurrencyExchangeInfo

`func (o *DetailPostingType) HasCurrencyExchangeInfo() bool`

HasCurrencyExchangeInfo returns a boolean if a field has been set.

### GetCustomCharge

`func (o *DetailPostingType) GetCustomCharge() bool`

GetCustomCharge returns the CustomCharge field if non-nil, zero value otherwise.

### GetCustomChargeOk

`func (o *DetailPostingType) GetCustomChargeOk() (*bool, bool)`

GetCustomChargeOk returns a tuple with the CustomCharge field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomCharge

`func (o *DetailPostingType) SetCustomCharge(v bool)`

SetCustomCharge sets CustomCharge field to given value.

### HasCustomCharge

`func (o *DetailPostingType) HasCustomCharge() bool`

HasCustomCharge returns a boolean if a field has been set.

### GetDebitAmount

`func (o *DetailPostingType) GetDebitAmount() CurrencyAmountType`

GetDebitAmount returns the DebitAmount field if non-nil, zero value otherwise.

### GetDebitAmountOk

`func (o *DetailPostingType) GetDebitAmountOk() (*CurrencyAmountType, bool)`

GetDebitAmountOk returns a tuple with the DebitAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDebitAmount

`func (o *DetailPostingType) SetDebitAmount(v CurrencyAmountType)`

SetDebitAmount sets DebitAmount field to given value.

### HasDebitAmount

`func (o *DetailPostingType) HasDebitAmount() bool`

HasDebitAmount returns a boolean if a field has been set.

### GetDeferredTax

`func (o *DetailPostingType) GetDeferredTax() bool`

GetDeferredTax returns the DeferredTax field if non-nil, zero value otherwise.

### GetDeferredTaxOk

`func (o *DetailPostingType) GetDeferredTaxOk() (*bool, bool)`

GetDeferredTaxOk returns a tuple with the DeferredTax field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeferredTax

`func (o *DetailPostingType) SetDeferredTax(v bool)`

SetDeferredTax sets DeferredTax field to given value.

### HasDeferredTax

`func (o *DetailPostingType) HasDeferredTax() bool`

HasDeferredTax returns a boolean if a field has been set.

### GetDepositTransactionId

`func (o *DetailPostingType) GetDepositTransactionId() string`

GetDepositTransactionId returns the DepositTransactionId field if non-nil, zero value otherwise.

### GetDepositTransactionIdOk

`func (o *DetailPostingType) GetDepositTransactionIdOk() (*string, bool)`

GetDepositTransactionIdOk returns a tuple with the DepositTransactionId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDepositTransactionId

`func (o *DetailPostingType) SetDepositTransactionId(v string)`

SetDepositTransactionId sets DepositTransactionId field to given value.

### HasDepositTransactionId

`func (o *DetailPostingType) HasDepositTransactionId() bool`

HasDepositTransactionId returns a boolean if a field has been set.

### GetExchange

`func (o *DetailPostingType) GetExchange() ExchangeAmounts`

GetExchange returns the Exchange field if non-nil, zero value otherwise.

### GetExchangeOk

`func (o *DetailPostingType) GetExchangeOk() (*ExchangeAmounts, bool)`

GetExchangeOk returns a tuple with the Exchange field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExchange

`func (o *DetailPostingType) SetExchange(v ExchangeAmounts)`

SetExchange sets Exchange field to given value.

### HasExchange

`func (o *DetailPostingType) HasExchange() bool`

HasExchange returns a boolean if a field has been set.

### GetExchangeInformation

`func (o *DetailPostingType) GetExchangeInformation() string`

GetExchangeInformation returns the ExchangeInformation field if non-nil, zero value otherwise.

### GetExchangeInformationOk

`func (o *DetailPostingType) GetExchangeInformationOk() (*string, bool)`

GetExchangeInformationOk returns a tuple with the ExchangeInformation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExchangeInformation

`func (o *DetailPostingType) SetExchangeInformation(v string)`

SetExchangeInformation sets ExchangeInformation field to given value.

### HasExchangeInformation

`func (o *DetailPostingType) HasExchangeInformation() bool`

HasExchangeInformation returns a boolean if a field has been set.

### GetFbaCertificate

`func (o *DetailPostingType) GetFbaCertificate() bool`

GetFbaCertificate returns the FbaCertificate field if non-nil, zero value otherwise.

### GetFbaCertificateOk

`func (o *DetailPostingType) GetFbaCertificateOk() (*bool, bool)`

GetFbaCertificateOk returns a tuple with the FbaCertificate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFbaCertificate

`func (o *DetailPostingType) SetFbaCertificate(v bool)`

SetFbaCertificate sets FbaCertificate field to given value.

### HasFbaCertificate

`func (o *DetailPostingType) HasFbaCertificate() bool`

HasFbaCertificate returns a boolean if a field has been set.

### GetFinancialTransactionIdList

`func (o *DetailPostingType) GetFinancialTransactionIdList() []UniqueIDType`

GetFinancialTransactionIdList returns the FinancialTransactionIdList field if non-nil, zero value otherwise.

### GetFinancialTransactionIdListOk

`func (o *DetailPostingType) GetFinancialTransactionIdListOk() (*[]UniqueIDType, bool)`

GetFinancialTransactionIdListOk returns a tuple with the FinancialTransactionIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFinancialTransactionIdList

`func (o *DetailPostingType) SetFinancialTransactionIdList(v []UniqueIDType)`

SetFinancialTransactionIdList sets FinancialTransactionIdList field to given value.

### HasFinancialTransactionIdList

`func (o *DetailPostingType) HasFinancialTransactionIdList() bool`

HasFinancialTransactionIdList returns a boolean if a field has been set.

### GetFiscalBillNo

`func (o *DetailPostingType) GetFiscalBillNo() string`

GetFiscalBillNo returns the FiscalBillNo field if non-nil, zero value otherwise.

### GetFiscalBillNoOk

`func (o *DetailPostingType) GetFiscalBillNoOk() (*string, bool)`

GetFiscalBillNoOk returns a tuple with the FiscalBillNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFiscalBillNo

`func (o *DetailPostingType) SetFiscalBillNo(v string)`

SetFiscalBillNo sets FiscalBillNo field to given value.

### HasFiscalBillNo

`func (o *DetailPostingType) HasFiscalBillNo() bool`

HasFiscalBillNo returns a boolean if a field has been set.

### GetFolioNo

`func (o *DetailPostingType) GetFolioNo() float32`

GetFolioNo returns the FolioNo field if non-nil, zero value otherwise.

### GetFolioNoOk

`func (o *DetailPostingType) GetFolioNoOk() (*float32, bool)`

GetFolioNoOk returns a tuple with the FolioNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioNo

`func (o *DetailPostingType) SetFolioNo(v float32)`

SetFolioNo sets FolioNo field to given value.

### HasFolioNo

`func (o *DetailPostingType) HasFolioNo() bool`

HasFolioNo returns a boolean if a field has been set.

### GetFolioNoWithPrefix

`func (o *DetailPostingType) GetFolioNoWithPrefix() string`

GetFolioNoWithPrefix returns the FolioNoWithPrefix field if non-nil, zero value otherwise.

### GetFolioNoWithPrefixOk

`func (o *DetailPostingType) GetFolioNoWithPrefixOk() (*string, bool)`

GetFolioNoWithPrefixOk returns a tuple with the FolioNoWithPrefix field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioNoWithPrefix

`func (o *DetailPostingType) SetFolioNoWithPrefix(v string)`

SetFolioNoWithPrefix sets FolioNoWithPrefix field to given value.

### HasFolioNoWithPrefix

`func (o *DetailPostingType) HasFolioNoWithPrefix() bool`

HasFolioNoWithPrefix returns a boolean if a field has been set.

### GetFolioTypeName

`func (o *DetailPostingType) GetFolioTypeName() string`

GetFolioTypeName returns the FolioTypeName field if non-nil, zero value otherwise.

### GetFolioTypeNameOk

`func (o *DetailPostingType) GetFolioTypeNameOk() (*string, bool)`

GetFolioTypeNameOk returns a tuple with the FolioTypeName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioTypeName

`func (o *DetailPostingType) SetFolioTypeName(v string)`

SetFolioTypeName sets FolioTypeName field to given value.

### HasFolioTypeName

`func (o *DetailPostingType) HasFolioTypeName() bool`

HasFolioTypeName returns a boolean if a field has been set.

### GetFolioWindowNo

`func (o *DetailPostingType) GetFolioWindowNo() int32`

GetFolioWindowNo returns the FolioWindowNo field if non-nil, zero value otherwise.

### GetFolioWindowNoOk

`func (o *DetailPostingType) GetFolioWindowNoOk() (*int32, bool)`

GetFolioWindowNoOk returns a tuple with the FolioWindowNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioWindowNo

`func (o *DetailPostingType) SetFolioWindowNo(v int32)`

SetFolioWindowNo sets FolioWindowNo field to given value.

### HasFolioWindowNo

`func (o *DetailPostingType) HasFolioWindowNo() bool`

HasFolioWindowNo returns a boolean if a field has been set.

### GetGroupTypeInfo

`func (o *DetailPostingType) GetGroupTypeInfo() PostingGroupType`

GetGroupTypeInfo returns the GroupTypeInfo field if non-nil, zero value otherwise.

### GetGroupTypeInfoOk

`func (o *DetailPostingType) GetGroupTypeInfoOk() (*PostingGroupType, bool)`

GetGroupTypeInfoOk returns a tuple with the GroupTypeInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGroupTypeInfo

`func (o *DetailPostingType) SetGroupTypeInfo(v PostingGroupType)`

SetGroupTypeInfo sets GroupTypeInfo field to given value.

### HasGroupTypeInfo

`func (o *DetailPostingType) HasGroupTypeInfo() bool`

HasGroupTypeInfo returns a boolean if a field has been set.

### GetGuestInfo

`func (o *DetailPostingType) GetGuestInfo() DetailPostingTypeGuestInfo`

GetGuestInfo returns the GuestInfo field if non-nil, zero value otherwise.

### GetGuestInfoOk

`func (o *DetailPostingType) GetGuestInfoOk() (*DetailPostingTypeGuestInfo, bool)`

GetGuestInfoOk returns a tuple with the GuestInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuestInfo

`func (o *DetailPostingType) SetGuestInfo(v DetailPostingTypeGuestInfo)`

SetGuestInfo sets GuestInfo field to given value.

### HasGuestInfo

`func (o *DetailPostingType) HasGuestInfo() bool`

HasGuestInfo returns a boolean if a field has been set.

### GetHotelId

`func (o *DetailPostingType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *DetailPostingType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *DetailPostingType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *DetailPostingType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetInternalFolioWindowID

`func (o *DetailPostingType) GetInternalFolioWindowID() string`

GetInternalFolioWindowID returns the InternalFolioWindowID field if non-nil, zero value otherwise.

### GetInternalFolioWindowIDOk

`func (o *DetailPostingType) GetInternalFolioWindowIDOk() (*string, bool)`

GetInternalFolioWindowIDOk returns a tuple with the InternalFolioWindowID field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInternalFolioWindowID

`func (o *DetailPostingType) SetInternalFolioWindowID(v string)`

SetInternalFolioWindowID sets InternalFolioWindowID field to given value.

### HasInternalFolioWindowID

`func (o *DetailPostingType) HasInternalFolioWindowID() bool`

HasInternalFolioWindowID returns a boolean if a field has been set.

### GetMiscellaneousInfo

`func (o *DetailPostingType) GetMiscellaneousInfo() DetailPostingTypeMiscellaneousInfo`

GetMiscellaneousInfo returns the MiscellaneousInfo field if non-nil, zero value otherwise.

### GetMiscellaneousInfoOk

`func (o *DetailPostingType) GetMiscellaneousInfoOk() (*DetailPostingTypeMiscellaneousInfo, bool)`

GetMiscellaneousInfoOk returns a tuple with the MiscellaneousInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMiscellaneousInfo

`func (o *DetailPostingType) SetMiscellaneousInfo(v DetailPostingTypeMiscellaneousInfo)`

SetMiscellaneousInfo sets MiscellaneousInfo field to given value.

### HasMiscellaneousInfo

`func (o *DetailPostingType) HasMiscellaneousInfo() bool`

HasMiscellaneousInfo returns a boolean if a field has been set.

### GetPaidOut

`func (o *DetailPostingType) GetPaidOut() bool`

GetPaidOut returns the PaidOut field if non-nil, zero value otherwise.

### GetPaidOutOk

`func (o *DetailPostingType) GetPaidOutOk() (*bool, bool)`

GetPaidOutOk returns a tuple with the PaidOut field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaidOut

`func (o *DetailPostingType) SetPaidOut(v bool)`

SetPaidOut sets PaidOut field to given value.

### HasPaidOut

`func (o *DetailPostingType) HasPaidOut() bool`

HasPaidOut returns a boolean if a field has been set.

### GetPayeeInfo

`func (o *DetailPostingType) GetPayeeInfo() PayeeInfoType`

GetPayeeInfo returns the PayeeInfo field if non-nil, zero value otherwise.

### GetPayeeInfoOk

`func (o *DetailPostingType) GetPayeeInfoOk() (*PayeeInfoType, bool)`

GetPayeeInfoOk returns a tuple with the PayeeInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPayeeInfo

`func (o *DetailPostingType) SetPayeeInfo(v PayeeInfoType)`

SetPayeeInfo sets PayeeInfo field to given value.

### HasPayeeInfo

`func (o *DetailPostingType) HasPayeeInfo() bool`

HasPayeeInfo returns a boolean if a field has been set.

### GetPaymentMethod

`func (o *DetailPostingType) GetPaymentMethod() ReservationPaymentMethodType`

GetPaymentMethod returns the PaymentMethod field if non-nil, zero value otherwise.

### GetPaymentMethodOk

`func (o *DetailPostingType) GetPaymentMethodOk() (*ReservationPaymentMethodType, bool)`

GetPaymentMethodOk returns a tuple with the PaymentMethod field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaymentMethod

`func (o *DetailPostingType) SetPaymentMethod(v ReservationPaymentMethodType)`

SetPaymentMethod sets PaymentMethod field to given value.

### HasPaymentMethod

`func (o *DetailPostingType) HasPaymentMethod() bool`

HasPaymentMethod returns a boolean if a field has been set.

### GetPostedAmount

`func (o *DetailPostingType) GetPostedAmount() CurrencyAmountType`

GetPostedAmount returns the PostedAmount field if non-nil, zero value otherwise.

### GetPostedAmountOk

`func (o *DetailPostingType) GetPostedAmountOk() (*CurrencyAmountType, bool)`

GetPostedAmountOk returns a tuple with the PostedAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPostedAmount

`func (o *DetailPostingType) SetPostedAmount(v CurrencyAmountType)`

SetPostedAmount sets PostedAmount field to given value.

### HasPostedAmount

`func (o *DetailPostingType) HasPostedAmount() bool`

HasPostedAmount returns a boolean if a field has been set.

### GetPostingDate

`func (o *DetailPostingType) GetPostingDate() string`

GetPostingDate returns the PostingDate field if non-nil, zero value otherwise.

### GetPostingDateOk

`func (o *DetailPostingType) GetPostingDateOk() (*string, bool)`

GetPostingDateOk returns a tuple with the PostingDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPostingDate

`func (o *DetailPostingType) SetPostingDate(v string)`

SetPostingDate sets PostingDate field to given value.

### HasPostingDate

`func (o *DetailPostingType) HasPostingDate() bool`

HasPostingDate returns a boolean if a field has been set.

### GetPrice

`func (o *DetailPostingType) GetPrice() CurrencyAmountType`

GetPrice returns the Price field if non-nil, zero value otherwise.

### GetPriceOk

`func (o *DetailPostingType) GetPriceOk() (*CurrencyAmountType, bool)`

GetPriceOk returns a tuple with the Price field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrice

`func (o *DetailPostingType) SetPrice(v CurrencyAmountType)`

SetPrice sets Price field to given value.

### HasPrice

`func (o *DetailPostingType) HasPrice() bool`

HasPrice returns a boolean if a field has been set.

### GetQuantity

`func (o *DetailPostingType) GetQuantity() float32`

GetQuantity returns the Quantity field if non-nil, zero value otherwise.

### GetQuantityOk

`func (o *DetailPostingType) GetQuantityOk() (*float32, bool)`

GetQuantityOk returns a tuple with the Quantity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuantity

`func (o *DetailPostingType) SetQuantity(v float32)`

SetQuantity sets Quantity field to given value.

### HasQuantity

`func (o *DetailPostingType) HasQuantity() bool`

HasQuantity returns a boolean if a field has been set.

### GetRateCode

`func (o *DetailPostingType) GetRateCode() string`

GetRateCode returns the RateCode field if non-nil, zero value otherwise.

### GetRateCodeOk

`func (o *DetailPostingType) GetRateCodeOk() (*string, bool)`

GetRateCodeOk returns a tuple with the RateCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateCode

`func (o *DetailPostingType) SetRateCode(v string)`

SetRateCode sets RateCode field to given value.

### HasRateCode

`func (o *DetailPostingType) HasRateCode() bool`

HasRateCode returns a boolean if a field has been set.

### GetReceiptNo

`func (o *DetailPostingType) GetReceiptNo() float32`

GetReceiptNo returns the ReceiptNo field if non-nil, zero value otherwise.

### GetReceiptNoOk

`func (o *DetailPostingType) GetReceiptNoOk() (*float32, bool)`

GetReceiptNoOk returns a tuple with the ReceiptNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReceiptNo

`func (o *DetailPostingType) SetReceiptNo(v float32)`

SetReceiptNo sets ReceiptNo field to given value.

### HasReceiptNo

`func (o *DetailPostingType) HasReceiptNo() bool`

HasReceiptNo returns a boolean if a field has been set.

### GetReference

`func (o *DetailPostingType) GetReference() string`

GetReference returns the Reference field if non-nil, zero value otherwise.

### GetReferenceOk

`func (o *DetailPostingType) GetReferenceOk() (*string, bool)`

GetReferenceOk returns a tuple with the Reference field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReference

`func (o *DetailPostingType) SetReference(v string)`

SetReference sets Reference field to given value.

### HasReference

`func (o *DetailPostingType) HasReference() bool`

HasReference returns a boolean if a field has been set.

### GetReferencePackageTransactionNo

`func (o *DetailPostingType) GetReferencePackageTransactionNo() float32`

GetReferencePackageTransactionNo returns the ReferencePackageTransactionNo field if non-nil, zero value otherwise.

### GetReferencePackageTransactionNoOk

`func (o *DetailPostingType) GetReferencePackageTransactionNoOk() (*float32, bool)`

GetReferencePackageTransactionNoOk returns a tuple with the ReferencePackageTransactionNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReferencePackageTransactionNo

`func (o *DetailPostingType) SetReferencePackageTransactionNo(v float32)`

SetReferencePackageTransactionNo sets ReferencePackageTransactionNo field to given value.

### HasReferencePackageTransactionNo

`func (o *DetailPostingType) HasReferencePackageTransactionNo() bool`

HasReferencePackageTransactionNo returns a boolean if a field has been set.

### GetReferenceTransactionNo

`func (o *DetailPostingType) GetReferenceTransactionNo() float32`

GetReferenceTransactionNo returns the ReferenceTransactionNo field if non-nil, zero value otherwise.

### GetReferenceTransactionNoOk

`func (o *DetailPostingType) GetReferenceTransactionNoOk() (*float32, bool)`

GetReferenceTransactionNoOk returns a tuple with the ReferenceTransactionNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReferenceTransactionNo

`func (o *DetailPostingType) SetReferenceTransactionNo(v float32)`

SetReferenceTransactionNo sets ReferenceTransactionNo field to given value.

### HasReferenceTransactionNo

`func (o *DetailPostingType) HasReferenceTransactionNo() bool`

HasReferenceTransactionNo returns a boolean if a field has been set.

### GetRemark

`func (o *DetailPostingType) GetRemark() string`

GetRemark returns the Remark field if non-nil, zero value otherwise.

### GetRemarkOk

`func (o *DetailPostingType) GetRemarkOk() (*string, bool)`

GetRemarkOk returns a tuple with the Remark field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRemark

`func (o *DetailPostingType) SetRemark(v string)`

SetRemark sets Remark field to given value.

### HasRemark

`func (o *DetailPostingType) HasRemark() bool`

HasRemark returns a boolean if a field has been set.

### GetRevenueDate

`func (o *DetailPostingType) GetRevenueDate() string`

GetRevenueDate returns the RevenueDate field if non-nil, zero value otherwise.

### GetRevenueDateOk

`func (o *DetailPostingType) GetRevenueDateOk() (*string, bool)`

GetRevenueDateOk returns a tuple with the RevenueDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevenueDate

`func (o *DetailPostingType) SetRevenueDate(v string)`

SetRevenueDate sets RevenueDate field to given value.

### HasRevenueDate

`func (o *DetailPostingType) HasRevenueDate() bool`

HasRevenueDate returns a boolean if a field has been set.

### GetReversePaymentTransactionNo

`func (o *DetailPostingType) GetReversePaymentTransactionNo() float32`

GetReversePaymentTransactionNo returns the ReversePaymentTransactionNo field if non-nil, zero value otherwise.

### GetReversePaymentTransactionNoOk

`func (o *DetailPostingType) GetReversePaymentTransactionNoOk() (*float32, bool)`

GetReversePaymentTransactionNoOk returns a tuple with the ReversePaymentTransactionNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReversePaymentTransactionNo

`func (o *DetailPostingType) SetReversePaymentTransactionNo(v float32)`

SetReversePaymentTransactionNo sets ReversePaymentTransactionNo field to given value.

### HasReversePaymentTransactionNo

`func (o *DetailPostingType) HasReversePaymentTransactionNo() bool`

HasReversePaymentTransactionNo returns a boolean if a field has been set.

### GetRevisionNo

`func (o *DetailPostingType) GetRevisionNo() float32`

GetRevisionNo returns the RevisionNo field if non-nil, zero value otherwise.

### GetRevisionNoOk

`func (o *DetailPostingType) GetRevisionNoOk() (*float32, bool)`

GetRevisionNoOk returns a tuple with the RevisionNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevisionNo

`func (o *DetailPostingType) SetRevisionNo(v float32)`

SetRevisionNo sets RevisionNo field to given value.

### HasRevisionNo

`func (o *DetailPostingType) HasRevisionNo() bool`

HasRevisionNo returns a boolean if a field has been set.

### GetRoundingDifferenceTrx

`func (o *DetailPostingType) GetRoundingDifferenceTrx() bool`

GetRoundingDifferenceTrx returns the RoundingDifferenceTrx field if non-nil, zero value otherwise.

### GetRoundingDifferenceTrxOk

`func (o *DetailPostingType) GetRoundingDifferenceTrxOk() (*bool, bool)`

GetRoundingDifferenceTrxOk returns a tuple with the RoundingDifferenceTrx field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoundingDifferenceTrx

`func (o *DetailPostingType) SetRoundingDifferenceTrx(v bool)`

SetRoundingDifferenceTrx sets RoundingDifferenceTrx field to given value.

### HasRoundingDifferenceTrx

`func (o *DetailPostingType) HasRoundingDifferenceTrx() bool`

HasRoundingDifferenceTrx returns a boolean if a field has been set.

### GetServiceRecovery

`func (o *DetailPostingType) GetServiceRecovery() bool`

GetServiceRecovery returns the ServiceRecovery field if non-nil, zero value otherwise.

### GetServiceRecoveryOk

`func (o *DetailPostingType) GetServiceRecoveryOk() (*bool, bool)`

GetServiceRecoveryOk returns a tuple with the ServiceRecovery field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetServiceRecovery

`func (o *DetailPostingType) SetServiceRecovery(v bool)`

SetServiceRecovery sets ServiceRecovery field to given value.

### HasServiceRecovery

`func (o *DetailPostingType) HasServiceRecovery() bool`

HasServiceRecovery returns a boolean if a field has been set.

### GetStampDuty

`func (o *DetailPostingType) GetStampDuty() bool`

GetStampDuty returns the StampDuty field if non-nil, zero value otherwise.

### GetStampDutyOk

`func (o *DetailPostingType) GetStampDutyOk() (*bool, bool)`

GetStampDutyOk returns a tuple with the StampDuty field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStampDuty

`func (o *DetailPostingType) SetStampDuty(v bool)`

SetStampDuty sets StampDuty field to given value.

### HasStampDuty

`func (o *DetailPostingType) HasStampDuty() bool`

HasStampDuty returns a boolean if a field has been set.

### GetSubPostings

`func (o *DetailPostingType) GetSubPostings() []SummaryPostingType`

GetSubPostings returns the SubPostings field if non-nil, zero value otherwise.

### GetSubPostingsOk

`func (o *DetailPostingType) GetSubPostingsOk() (*[]SummaryPostingType, bool)`

GetSubPostingsOk returns a tuple with the SubPostings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubPostings

`func (o *DetailPostingType) SetSubPostings(v []SummaryPostingType)`

SetSubPostings sets SubPostings field to given value.

### HasSubPostings

`func (o *DetailPostingType) HasSubPostings() bool`

HasSubPostings returns a boolean if a field has been set.

### GetTargetHotel

`func (o *DetailPostingType) GetTargetHotel() string`

GetTargetHotel returns the TargetHotel field if non-nil, zero value otherwise.

### GetTargetHotelOk

`func (o *DetailPostingType) GetTargetHotelOk() (*string, bool)`

GetTargetHotelOk returns a tuple with the TargetHotel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetHotel

`func (o *DetailPostingType) SetTargetHotel(v string)`

SetTargetHotel sets TargetHotel field to given value.

### HasTargetHotel

`func (o *DetailPostingType) HasTargetHotel() bool`

HasTargetHotel returns a boolean if a field has been set.

### GetTaxInvoiceNo

`func (o *DetailPostingType) GetTaxInvoiceNo() string`

GetTaxInvoiceNo returns the TaxInvoiceNo field if non-nil, zero value otherwise.

### GetTaxInvoiceNoOk

`func (o *DetailPostingType) GetTaxInvoiceNoOk() (*string, bool)`

GetTaxInvoiceNoOk returns a tuple with the TaxInvoiceNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaxInvoiceNo

`func (o *DetailPostingType) SetTaxInvoiceNo(v string)`

SetTaxInvoiceNo sets TaxInvoiceNo field to given value.

### HasTaxInvoiceNo

`func (o *DetailPostingType) HasTaxInvoiceNo() bool`

HasTaxInvoiceNo returns a boolean if a field has been set.

### GetTransactionAmount

`func (o *DetailPostingType) GetTransactionAmount() float32`

GetTransactionAmount returns the TransactionAmount field if non-nil, zero value otherwise.

### GetTransactionAmountOk

`func (o *DetailPostingType) GetTransactionAmountOk() (*float32, bool)`

GetTransactionAmountOk returns a tuple with the TransactionAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionAmount

`func (o *DetailPostingType) SetTransactionAmount(v float32)`

SetTransactionAmount sets TransactionAmount field to given value.

### HasTransactionAmount

`func (o *DetailPostingType) HasTransactionAmount() bool`

HasTransactionAmount returns a boolean if a field has been set.

### GetTransactionCode

`func (o *DetailPostingType) GetTransactionCode() string`

GetTransactionCode returns the TransactionCode field if non-nil, zero value otherwise.

### GetTransactionCodeOk

`func (o *DetailPostingType) GetTransactionCodeOk() (*string, bool)`

GetTransactionCodeOk returns a tuple with the TransactionCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionCode

`func (o *DetailPostingType) SetTransactionCode(v string)`

SetTransactionCode sets TransactionCode field to given value.

### HasTransactionCode

`func (o *DetailPostingType) HasTransactionCode() bool`

HasTransactionCode returns a boolean if a field has been set.

### GetTransactionDate

`func (o *DetailPostingType) GetTransactionDate() string`

GetTransactionDate returns the TransactionDate field if non-nil, zero value otherwise.

### GetTransactionDateOk

`func (o *DetailPostingType) GetTransactionDateOk() (*string, bool)`

GetTransactionDateOk returns a tuple with the TransactionDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionDate

`func (o *DetailPostingType) SetTransactionDate(v string)`

SetTransactionDate sets TransactionDate field to given value.

### HasTransactionDate

`func (o *DetailPostingType) HasTransactionDate() bool`

HasTransactionDate returns a boolean if a field has been set.

### GetTransactionDescription

`func (o *DetailPostingType) GetTransactionDescription() string`

GetTransactionDescription returns the TransactionDescription field if non-nil, zero value otherwise.

### GetTransactionDescriptionOk

`func (o *DetailPostingType) GetTransactionDescriptionOk() (*string, bool)`

GetTransactionDescriptionOk returns a tuple with the TransactionDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionDescription

`func (o *DetailPostingType) SetTransactionDescription(v string)`

SetTransactionDescription sets TransactionDescription field to given value.

### HasTransactionDescription

`func (o *DetailPostingType) HasTransactionDescription() bool`

HasTransactionDescription returns a boolean if a field has been set.

### GetTransactionNo

`func (o *DetailPostingType) GetTransactionNo() float32`

GetTransactionNo returns the TransactionNo field if non-nil, zero value otherwise.

### GetTransactionNoOk

`func (o *DetailPostingType) GetTransactionNoOk() (*float32, bool)`

GetTransactionNoOk returns a tuple with the TransactionNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionNo

`func (o *DetailPostingType) SetTransactionNo(v float32)`

SetTransactionNo sets TransactionNo field to given value.

### HasTransactionNo

`func (o *DetailPostingType) HasTransactionNo() bool`

HasTransactionNo returns a boolean if a field has been set.

### GetTransactionType

`func (o *DetailPostingType) GetTransactionType() CashieringTransactionTypeType`

GetTransactionType returns the TransactionType field if non-nil, zero value otherwise.

### GetTransactionTypeOk

`func (o *DetailPostingType) GetTransactionTypeOk() (*CashieringTransactionTypeType, bool)`

GetTransactionTypeOk returns a tuple with the TransactionType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionType

`func (o *DetailPostingType) SetTransactionType(v CashieringTransactionTypeType)`

SetTransactionType sets TransactionType field to given value.

### HasTransactionType

`func (o *DetailPostingType) HasTransactionType() bool`

HasTransactionType returns a boolean if a field has been set.

### GetUpdateInfo

`func (o *DetailPostingType) GetUpdateInfo() DepositDetailPostingTypeUpdateInfo`

GetUpdateInfo returns the UpdateInfo field if non-nil, zero value otherwise.

### GetUpdateInfoOk

`func (o *DetailPostingType) GetUpdateInfoOk() (*DepositDetailPostingTypeUpdateInfo, bool)`

GetUpdateInfoOk returns a tuple with the UpdateInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdateInfo

`func (o *DetailPostingType) SetUpdateInfo(v DepositDetailPostingTypeUpdateInfo)`

SetUpdateInfo sets UpdateInfo field to given value.

### HasUpdateInfo

`func (o *DetailPostingType) HasUpdateInfo() bool`

HasUpdateInfo returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


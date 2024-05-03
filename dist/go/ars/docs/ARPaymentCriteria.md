# ARPaymentCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Account** | Pointer to [**ARAccountCriteriaType**](ARAccountCriteriaType.md) |  | [optional] 
**Action** | Pointer to [**PostPaymentActionType**](PostPaymentActionType.md) |  | [optional] 
**ApplyCCSurcharge** | Pointer to **bool** | Flag to indicate if Credit Card Surcharge has to be applied to this payment, when the functionality for Credit Card Surcharge is available. | [optional] 
**ApplyCurrencyTaxes** | Pointer to **bool** | Flag to indidcate if currency taxes need to be applied or not. For ex, in case of Chile, it depends upon nationality of the guest. | [optional] 
**ApplyType** | Pointer to [**ARApplyType**](ARApplyType.md) |  | [optional] 
**CashierId** | Pointer to **float32** | The Cashier ID of the Cashier who is currently processing the transaction(s). | [optional] 
**ChangeDueAmount** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**Comments** | Pointer to **string** | User Defined Comments. Used for Deposit Payment postings. | [optional] 
**CompRedemptions** | Pointer to [**[]RedemptionType**](RedemptionType.md) | Information regarding Complimentary Bucket Redemption object. | [optional] 
**CreditablePaymentTaxes** | Pointer to [**[]PaymentTaxType**](PaymentTaxType.md) | Payment Tax record. | [optional] 
**FolioWindowNo** | Pointer to **int32** |  | [optional] 
**HotelId** | Pointer to **string** | Property code. | [optional] 
**Invoices** | Pointer to [**[]ARPaymentInvoicesTypeInner**](ARPaymentInvoicesTypeInner.md) | AR Invoice to which the payment will be applied. | [optional] 
**ManualPaymentTaxInfo** | Pointer to [**PaymentTaxType**](PaymentTaxType.md) |  | [optional] 
**OverrideARCreditLimit** | Pointer to **bool** | Flag to override account receivable credit limit | [optional] 
**OverrideInsufficientCC** | Pointer to **bool** | Flag to allow a rebate by Credit Card | [optional] 
**PaymentMethod** | Pointer to [**CashieringPaymentMethodType**](CashieringPaymentMethodType.md) |  | [optional] 
**PostingAmount** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**PostingReference** | Pointer to **string** | User-defined posting reference. | [optional] 
**PostingRemark** | Pointer to **string** | User-defined posting remark. | [optional] 
**PrepaidCardRedemptions** | Pointer to [**[]PrepaidCardRedemptionType**](PrepaidCardRedemptionType.md) | A prepaid redemption info object to be used for posting a payment. | [optional] 
**SequenceNo** | Pointer to **int32** | Sequence of the payment in a batch request. | [optional] 
**TerminalId** | Pointer to **string** | Applicable for chip and pin. The ID of the terminal where the chip and pin device is connected and where the payment is made. | [optional] 
**VATOffset** | Pointer to **bool** | Flag to indidcate if currency taxes need to be applied or not. For ex, in case of Chile, it depends upon nationality of the guest. | [optional] 

## Methods

### NewARPaymentCriteria

`func NewARPaymentCriteria() *ARPaymentCriteria`

NewARPaymentCriteria instantiates a new ARPaymentCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewARPaymentCriteriaWithDefaults

`func NewARPaymentCriteriaWithDefaults() *ARPaymentCriteria`

NewARPaymentCriteriaWithDefaults instantiates a new ARPaymentCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccount

`func (o *ARPaymentCriteria) GetAccount() ARAccountCriteriaType`

GetAccount returns the Account field if non-nil, zero value otherwise.

### GetAccountOk

`func (o *ARPaymentCriteria) GetAccountOk() (*ARAccountCriteriaType, bool)`

GetAccountOk returns a tuple with the Account field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccount

`func (o *ARPaymentCriteria) SetAccount(v ARAccountCriteriaType)`

SetAccount sets Account field to given value.

### HasAccount

`func (o *ARPaymentCriteria) HasAccount() bool`

HasAccount returns a boolean if a field has been set.

### GetAction

`func (o *ARPaymentCriteria) GetAction() PostPaymentActionType`

GetAction returns the Action field if non-nil, zero value otherwise.

### GetActionOk

`func (o *ARPaymentCriteria) GetActionOk() (*PostPaymentActionType, bool)`

GetActionOk returns a tuple with the Action field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAction

`func (o *ARPaymentCriteria) SetAction(v PostPaymentActionType)`

SetAction sets Action field to given value.

### HasAction

`func (o *ARPaymentCriteria) HasAction() bool`

HasAction returns a boolean if a field has been set.

### GetApplyCCSurcharge

`func (o *ARPaymentCriteria) GetApplyCCSurcharge() bool`

GetApplyCCSurcharge returns the ApplyCCSurcharge field if non-nil, zero value otherwise.

### GetApplyCCSurchargeOk

`func (o *ARPaymentCriteria) GetApplyCCSurchargeOk() (*bool, bool)`

GetApplyCCSurchargeOk returns a tuple with the ApplyCCSurcharge field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApplyCCSurcharge

`func (o *ARPaymentCriteria) SetApplyCCSurcharge(v bool)`

SetApplyCCSurcharge sets ApplyCCSurcharge field to given value.

### HasApplyCCSurcharge

`func (o *ARPaymentCriteria) HasApplyCCSurcharge() bool`

HasApplyCCSurcharge returns a boolean if a field has been set.

### GetApplyCurrencyTaxes

`func (o *ARPaymentCriteria) GetApplyCurrencyTaxes() bool`

GetApplyCurrencyTaxes returns the ApplyCurrencyTaxes field if non-nil, zero value otherwise.

### GetApplyCurrencyTaxesOk

`func (o *ARPaymentCriteria) GetApplyCurrencyTaxesOk() (*bool, bool)`

GetApplyCurrencyTaxesOk returns a tuple with the ApplyCurrencyTaxes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApplyCurrencyTaxes

`func (o *ARPaymentCriteria) SetApplyCurrencyTaxes(v bool)`

SetApplyCurrencyTaxes sets ApplyCurrencyTaxes field to given value.

### HasApplyCurrencyTaxes

`func (o *ARPaymentCriteria) HasApplyCurrencyTaxes() bool`

HasApplyCurrencyTaxes returns a boolean if a field has been set.

### GetApplyType

`func (o *ARPaymentCriteria) GetApplyType() ARApplyType`

GetApplyType returns the ApplyType field if non-nil, zero value otherwise.

### GetApplyTypeOk

`func (o *ARPaymentCriteria) GetApplyTypeOk() (*ARApplyType, bool)`

GetApplyTypeOk returns a tuple with the ApplyType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApplyType

`func (o *ARPaymentCriteria) SetApplyType(v ARApplyType)`

SetApplyType sets ApplyType field to given value.

### HasApplyType

`func (o *ARPaymentCriteria) HasApplyType() bool`

HasApplyType returns a boolean if a field has been set.

### GetCashierId

`func (o *ARPaymentCriteria) GetCashierId() float32`

GetCashierId returns the CashierId field if non-nil, zero value otherwise.

### GetCashierIdOk

`func (o *ARPaymentCriteria) GetCashierIdOk() (*float32, bool)`

GetCashierIdOk returns a tuple with the CashierId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCashierId

`func (o *ARPaymentCriteria) SetCashierId(v float32)`

SetCashierId sets CashierId field to given value.

### HasCashierId

`func (o *ARPaymentCriteria) HasCashierId() bool`

HasCashierId returns a boolean if a field has been set.

### GetChangeDueAmount

`func (o *ARPaymentCriteria) GetChangeDueAmount() CurrencyAmountType`

GetChangeDueAmount returns the ChangeDueAmount field if non-nil, zero value otherwise.

### GetChangeDueAmountOk

`func (o *ARPaymentCriteria) GetChangeDueAmountOk() (*CurrencyAmountType, bool)`

GetChangeDueAmountOk returns a tuple with the ChangeDueAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChangeDueAmount

`func (o *ARPaymentCriteria) SetChangeDueAmount(v CurrencyAmountType)`

SetChangeDueAmount sets ChangeDueAmount field to given value.

### HasChangeDueAmount

`func (o *ARPaymentCriteria) HasChangeDueAmount() bool`

HasChangeDueAmount returns a boolean if a field has been set.

### GetComments

`func (o *ARPaymentCriteria) GetComments() string`

GetComments returns the Comments field if non-nil, zero value otherwise.

### GetCommentsOk

`func (o *ARPaymentCriteria) GetCommentsOk() (*string, bool)`

GetCommentsOk returns a tuple with the Comments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComments

`func (o *ARPaymentCriteria) SetComments(v string)`

SetComments sets Comments field to given value.

### HasComments

`func (o *ARPaymentCriteria) HasComments() bool`

HasComments returns a boolean if a field has been set.

### GetCompRedemptions

`func (o *ARPaymentCriteria) GetCompRedemptions() []RedemptionType`

GetCompRedemptions returns the CompRedemptions field if non-nil, zero value otherwise.

### GetCompRedemptionsOk

`func (o *ARPaymentCriteria) GetCompRedemptionsOk() (*[]RedemptionType, bool)`

GetCompRedemptionsOk returns a tuple with the CompRedemptions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompRedemptions

`func (o *ARPaymentCriteria) SetCompRedemptions(v []RedemptionType)`

SetCompRedemptions sets CompRedemptions field to given value.

### HasCompRedemptions

`func (o *ARPaymentCriteria) HasCompRedemptions() bool`

HasCompRedemptions returns a boolean if a field has been set.

### GetCreditablePaymentTaxes

`func (o *ARPaymentCriteria) GetCreditablePaymentTaxes() []PaymentTaxType`

GetCreditablePaymentTaxes returns the CreditablePaymentTaxes field if non-nil, zero value otherwise.

### GetCreditablePaymentTaxesOk

`func (o *ARPaymentCriteria) GetCreditablePaymentTaxesOk() (*[]PaymentTaxType, bool)`

GetCreditablePaymentTaxesOk returns a tuple with the CreditablePaymentTaxes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreditablePaymentTaxes

`func (o *ARPaymentCriteria) SetCreditablePaymentTaxes(v []PaymentTaxType)`

SetCreditablePaymentTaxes sets CreditablePaymentTaxes field to given value.

### HasCreditablePaymentTaxes

`func (o *ARPaymentCriteria) HasCreditablePaymentTaxes() bool`

HasCreditablePaymentTaxes returns a boolean if a field has been set.

### GetFolioWindowNo

`func (o *ARPaymentCriteria) GetFolioWindowNo() int32`

GetFolioWindowNo returns the FolioWindowNo field if non-nil, zero value otherwise.

### GetFolioWindowNoOk

`func (o *ARPaymentCriteria) GetFolioWindowNoOk() (*int32, bool)`

GetFolioWindowNoOk returns a tuple with the FolioWindowNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioWindowNo

`func (o *ARPaymentCriteria) SetFolioWindowNo(v int32)`

SetFolioWindowNo sets FolioWindowNo field to given value.

### HasFolioWindowNo

`func (o *ARPaymentCriteria) HasFolioWindowNo() bool`

HasFolioWindowNo returns a boolean if a field has been set.

### GetHotelId

`func (o *ARPaymentCriteria) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ARPaymentCriteria) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ARPaymentCriteria) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ARPaymentCriteria) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetInvoices

`func (o *ARPaymentCriteria) GetInvoices() []ARPaymentInvoicesTypeInner`

GetInvoices returns the Invoices field if non-nil, zero value otherwise.

### GetInvoicesOk

`func (o *ARPaymentCriteria) GetInvoicesOk() (*[]ARPaymentInvoicesTypeInner, bool)`

GetInvoicesOk returns a tuple with the Invoices field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInvoices

`func (o *ARPaymentCriteria) SetInvoices(v []ARPaymentInvoicesTypeInner)`

SetInvoices sets Invoices field to given value.

### HasInvoices

`func (o *ARPaymentCriteria) HasInvoices() bool`

HasInvoices returns a boolean if a field has been set.

### GetManualPaymentTaxInfo

`func (o *ARPaymentCriteria) GetManualPaymentTaxInfo() PaymentTaxType`

GetManualPaymentTaxInfo returns the ManualPaymentTaxInfo field if non-nil, zero value otherwise.

### GetManualPaymentTaxInfoOk

`func (o *ARPaymentCriteria) GetManualPaymentTaxInfoOk() (*PaymentTaxType, bool)`

GetManualPaymentTaxInfoOk returns a tuple with the ManualPaymentTaxInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManualPaymentTaxInfo

`func (o *ARPaymentCriteria) SetManualPaymentTaxInfo(v PaymentTaxType)`

SetManualPaymentTaxInfo sets ManualPaymentTaxInfo field to given value.

### HasManualPaymentTaxInfo

`func (o *ARPaymentCriteria) HasManualPaymentTaxInfo() bool`

HasManualPaymentTaxInfo returns a boolean if a field has been set.

### GetOverrideARCreditLimit

`func (o *ARPaymentCriteria) GetOverrideARCreditLimit() bool`

GetOverrideARCreditLimit returns the OverrideARCreditLimit field if non-nil, zero value otherwise.

### GetOverrideARCreditLimitOk

`func (o *ARPaymentCriteria) GetOverrideARCreditLimitOk() (*bool, bool)`

GetOverrideARCreditLimitOk returns a tuple with the OverrideARCreditLimit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverrideARCreditLimit

`func (o *ARPaymentCriteria) SetOverrideARCreditLimit(v bool)`

SetOverrideARCreditLimit sets OverrideARCreditLimit field to given value.

### HasOverrideARCreditLimit

`func (o *ARPaymentCriteria) HasOverrideARCreditLimit() bool`

HasOverrideARCreditLimit returns a boolean if a field has been set.

### GetOverrideInsufficientCC

`func (o *ARPaymentCriteria) GetOverrideInsufficientCC() bool`

GetOverrideInsufficientCC returns the OverrideInsufficientCC field if non-nil, zero value otherwise.

### GetOverrideInsufficientCCOk

`func (o *ARPaymentCriteria) GetOverrideInsufficientCCOk() (*bool, bool)`

GetOverrideInsufficientCCOk returns a tuple with the OverrideInsufficientCC field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverrideInsufficientCC

`func (o *ARPaymentCriteria) SetOverrideInsufficientCC(v bool)`

SetOverrideInsufficientCC sets OverrideInsufficientCC field to given value.

### HasOverrideInsufficientCC

`func (o *ARPaymentCriteria) HasOverrideInsufficientCC() bool`

HasOverrideInsufficientCC returns a boolean if a field has been set.

### GetPaymentMethod

`func (o *ARPaymentCriteria) GetPaymentMethod() CashieringPaymentMethodType`

GetPaymentMethod returns the PaymentMethod field if non-nil, zero value otherwise.

### GetPaymentMethodOk

`func (o *ARPaymentCriteria) GetPaymentMethodOk() (*CashieringPaymentMethodType, bool)`

GetPaymentMethodOk returns a tuple with the PaymentMethod field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaymentMethod

`func (o *ARPaymentCriteria) SetPaymentMethod(v CashieringPaymentMethodType)`

SetPaymentMethod sets PaymentMethod field to given value.

### HasPaymentMethod

`func (o *ARPaymentCriteria) HasPaymentMethod() bool`

HasPaymentMethod returns a boolean if a field has been set.

### GetPostingAmount

`func (o *ARPaymentCriteria) GetPostingAmount() CurrencyAmountType`

GetPostingAmount returns the PostingAmount field if non-nil, zero value otherwise.

### GetPostingAmountOk

`func (o *ARPaymentCriteria) GetPostingAmountOk() (*CurrencyAmountType, bool)`

GetPostingAmountOk returns a tuple with the PostingAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPostingAmount

`func (o *ARPaymentCriteria) SetPostingAmount(v CurrencyAmountType)`

SetPostingAmount sets PostingAmount field to given value.

### HasPostingAmount

`func (o *ARPaymentCriteria) HasPostingAmount() bool`

HasPostingAmount returns a boolean if a field has been set.

### GetPostingReference

`func (o *ARPaymentCriteria) GetPostingReference() string`

GetPostingReference returns the PostingReference field if non-nil, zero value otherwise.

### GetPostingReferenceOk

`func (o *ARPaymentCriteria) GetPostingReferenceOk() (*string, bool)`

GetPostingReferenceOk returns a tuple with the PostingReference field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPostingReference

`func (o *ARPaymentCriteria) SetPostingReference(v string)`

SetPostingReference sets PostingReference field to given value.

### HasPostingReference

`func (o *ARPaymentCriteria) HasPostingReference() bool`

HasPostingReference returns a boolean if a field has been set.

### GetPostingRemark

`func (o *ARPaymentCriteria) GetPostingRemark() string`

GetPostingRemark returns the PostingRemark field if non-nil, zero value otherwise.

### GetPostingRemarkOk

`func (o *ARPaymentCriteria) GetPostingRemarkOk() (*string, bool)`

GetPostingRemarkOk returns a tuple with the PostingRemark field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPostingRemark

`func (o *ARPaymentCriteria) SetPostingRemark(v string)`

SetPostingRemark sets PostingRemark field to given value.

### HasPostingRemark

`func (o *ARPaymentCriteria) HasPostingRemark() bool`

HasPostingRemark returns a boolean if a field has been set.

### GetPrepaidCardRedemptions

`func (o *ARPaymentCriteria) GetPrepaidCardRedemptions() []PrepaidCardRedemptionType`

GetPrepaidCardRedemptions returns the PrepaidCardRedemptions field if non-nil, zero value otherwise.

### GetPrepaidCardRedemptionsOk

`func (o *ARPaymentCriteria) GetPrepaidCardRedemptionsOk() (*[]PrepaidCardRedemptionType, bool)`

GetPrepaidCardRedemptionsOk returns a tuple with the PrepaidCardRedemptions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrepaidCardRedemptions

`func (o *ARPaymentCriteria) SetPrepaidCardRedemptions(v []PrepaidCardRedemptionType)`

SetPrepaidCardRedemptions sets PrepaidCardRedemptions field to given value.

### HasPrepaidCardRedemptions

`func (o *ARPaymentCriteria) HasPrepaidCardRedemptions() bool`

HasPrepaidCardRedemptions returns a boolean if a field has been set.

### GetSequenceNo

`func (o *ARPaymentCriteria) GetSequenceNo() int32`

GetSequenceNo returns the SequenceNo field if non-nil, zero value otherwise.

### GetSequenceNoOk

`func (o *ARPaymentCriteria) GetSequenceNoOk() (*int32, bool)`

GetSequenceNoOk returns a tuple with the SequenceNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSequenceNo

`func (o *ARPaymentCriteria) SetSequenceNo(v int32)`

SetSequenceNo sets SequenceNo field to given value.

### HasSequenceNo

`func (o *ARPaymentCriteria) HasSequenceNo() bool`

HasSequenceNo returns a boolean if a field has been set.

### GetTerminalId

`func (o *ARPaymentCriteria) GetTerminalId() string`

GetTerminalId returns the TerminalId field if non-nil, zero value otherwise.

### GetTerminalIdOk

`func (o *ARPaymentCriteria) GetTerminalIdOk() (*string, bool)`

GetTerminalIdOk returns a tuple with the TerminalId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTerminalId

`func (o *ARPaymentCriteria) SetTerminalId(v string)`

SetTerminalId sets TerminalId field to given value.

### HasTerminalId

`func (o *ARPaymentCriteria) HasTerminalId() bool`

HasTerminalId returns a boolean if a field has been set.

### GetVATOffset

`func (o *ARPaymentCriteria) GetVATOffset() bool`

GetVATOffset returns the VATOffset field if non-nil, zero value otherwise.

### GetVATOffsetOk

`func (o *ARPaymentCriteria) GetVATOffsetOk() (*bool, bool)`

GetVATOffsetOk returns a tuple with the VATOffset field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVATOffset

`func (o *ARPaymentCriteria) SetVATOffset(v bool)`

SetVATOffset sets VATOffset field to given value.

### HasVATOffset

`func (o *ARPaymentCriteria) HasVATOffset() bool`

HasVATOffset returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



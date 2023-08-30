# BillingPaymentCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Property code. | [optional] 
**PaymentMethod** | Pointer to [**CashieringPaymentMethodType**](CashieringPaymentMethodType.md) |  | [optional] 
**PostingAmount** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**PostingReference** | Pointer to **string** | User-defined posting reference. | [optional] 
**PostingRemark** | Pointer to **string** | User-defined posting remark. | [optional] 
**Comments** | Pointer to **string** | User Defined Comments. Used for Deposit Payment postings. | [optional] 
**ApplyCCSurcharge** | Pointer to **bool** | Flag to indicate if Credit Card Surcharge has to be applied to this payment, when the functionality for Credit Card Surcharge is available. | [optional] 
**ManualPaymentTaxInfo** | Pointer to [**PaymentTaxType**](PaymentTaxType.md) |  | [optional] 
**CreditablePaymentTaxes** | Pointer to [**[]PaymentTaxType**](PaymentTaxType.md) | Payment Tax record. | [optional] 
**TerminalId** | Pointer to **string** | Applicable for chip and pin. The ID of the terminal where the chip and pin device is connected and where the payment is made. | [optional] 
**OverrideInsufficientCC** | Pointer to **bool** | Flag to allow a rebate by Credit Card | [optional] 
**ChangeDueAmount** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**OverrideARCreditLimit** | Pointer to **bool** | Flag to override account receivable credit limit | [optional] 
**ApplyCurrencyTaxes** | Pointer to **bool** | Flag to indicate if currency taxes need to be applied or not. For ex, in case of Chile, it depends upon nationality of the guest. | [optional] 
**VATOffset** | Pointer to **bool** | Flag to indicate if currency taxes need to be applied or not. For ex, in case of Chile, it depends upon nationality of the guest. | [optional] 
**Action** | Pointer to [**PostPaymentActionType**](PostPaymentActionType.md) |  | [optional] 
**FolioWindowNo** | Pointer to **int32** |  | [optional] 
**CashierId** | Pointer to **float32** | The Cashier ID of the Cashier who is currently processing the transaction(s). | [optional] 
**ReservationId** | Pointer to [**ReservationId**](ReservationId.md) |  | [optional] 

## Methods

### NewBillingPaymentCriteria

`func NewBillingPaymentCriteria() *BillingPaymentCriteria`

NewBillingPaymentCriteria instantiates a new BillingPaymentCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBillingPaymentCriteriaWithDefaults

`func NewBillingPaymentCriteriaWithDefaults() *BillingPaymentCriteria`

NewBillingPaymentCriteriaWithDefaults instantiates a new BillingPaymentCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *BillingPaymentCriteria) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *BillingPaymentCriteria) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *BillingPaymentCriteria) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *BillingPaymentCriteria) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetPaymentMethod

`func (o *BillingPaymentCriteria) GetPaymentMethod() CashieringPaymentMethodType`

GetPaymentMethod returns the PaymentMethod field if non-nil, zero value otherwise.

### GetPaymentMethodOk

`func (o *BillingPaymentCriteria) GetPaymentMethodOk() (*CashieringPaymentMethodType, bool)`

GetPaymentMethodOk returns a tuple with the PaymentMethod field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaymentMethod

`func (o *BillingPaymentCriteria) SetPaymentMethod(v CashieringPaymentMethodType)`

SetPaymentMethod sets PaymentMethod field to given value.

### HasPaymentMethod

`func (o *BillingPaymentCriteria) HasPaymentMethod() bool`

HasPaymentMethod returns a boolean if a field has been set.

### GetPostingAmount

`func (o *BillingPaymentCriteria) GetPostingAmount() CurrencyAmountType`

GetPostingAmount returns the PostingAmount field if non-nil, zero value otherwise.

### GetPostingAmountOk

`func (o *BillingPaymentCriteria) GetPostingAmountOk() (*CurrencyAmountType, bool)`

GetPostingAmountOk returns a tuple with the PostingAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPostingAmount

`func (o *BillingPaymentCriteria) SetPostingAmount(v CurrencyAmountType)`

SetPostingAmount sets PostingAmount field to given value.

### HasPostingAmount

`func (o *BillingPaymentCriteria) HasPostingAmount() bool`

HasPostingAmount returns a boolean if a field has been set.

### GetPostingReference

`func (o *BillingPaymentCriteria) GetPostingReference() string`

GetPostingReference returns the PostingReference field if non-nil, zero value otherwise.

### GetPostingReferenceOk

`func (o *BillingPaymentCriteria) GetPostingReferenceOk() (*string, bool)`

GetPostingReferenceOk returns a tuple with the PostingReference field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPostingReference

`func (o *BillingPaymentCriteria) SetPostingReference(v string)`

SetPostingReference sets PostingReference field to given value.

### HasPostingReference

`func (o *BillingPaymentCriteria) HasPostingReference() bool`

HasPostingReference returns a boolean if a field has been set.

### GetPostingRemark

`func (o *BillingPaymentCriteria) GetPostingRemark() string`

GetPostingRemark returns the PostingRemark field if non-nil, zero value otherwise.

### GetPostingRemarkOk

`func (o *BillingPaymentCriteria) GetPostingRemarkOk() (*string, bool)`

GetPostingRemarkOk returns a tuple with the PostingRemark field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPostingRemark

`func (o *BillingPaymentCriteria) SetPostingRemark(v string)`

SetPostingRemark sets PostingRemark field to given value.

### HasPostingRemark

`func (o *BillingPaymentCriteria) HasPostingRemark() bool`

HasPostingRemark returns a boolean if a field has been set.

### GetComments

`func (o *BillingPaymentCriteria) GetComments() string`

GetComments returns the Comments field if non-nil, zero value otherwise.

### GetCommentsOk

`func (o *BillingPaymentCriteria) GetCommentsOk() (*string, bool)`

GetCommentsOk returns a tuple with the Comments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComments

`func (o *BillingPaymentCriteria) SetComments(v string)`

SetComments sets Comments field to given value.

### HasComments

`func (o *BillingPaymentCriteria) HasComments() bool`

HasComments returns a boolean if a field has been set.

### GetApplyCCSurcharge

`func (o *BillingPaymentCriteria) GetApplyCCSurcharge() bool`

GetApplyCCSurcharge returns the ApplyCCSurcharge field if non-nil, zero value otherwise.

### GetApplyCCSurchargeOk

`func (o *BillingPaymentCriteria) GetApplyCCSurchargeOk() (*bool, bool)`

GetApplyCCSurchargeOk returns a tuple with the ApplyCCSurcharge field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApplyCCSurcharge

`func (o *BillingPaymentCriteria) SetApplyCCSurcharge(v bool)`

SetApplyCCSurcharge sets ApplyCCSurcharge field to given value.

### HasApplyCCSurcharge

`func (o *BillingPaymentCriteria) HasApplyCCSurcharge() bool`

HasApplyCCSurcharge returns a boolean if a field has been set.

### GetManualPaymentTaxInfo

`func (o *BillingPaymentCriteria) GetManualPaymentTaxInfo() PaymentTaxType`

GetManualPaymentTaxInfo returns the ManualPaymentTaxInfo field if non-nil, zero value otherwise.

### GetManualPaymentTaxInfoOk

`func (o *BillingPaymentCriteria) GetManualPaymentTaxInfoOk() (*PaymentTaxType, bool)`

GetManualPaymentTaxInfoOk returns a tuple with the ManualPaymentTaxInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManualPaymentTaxInfo

`func (o *BillingPaymentCriteria) SetManualPaymentTaxInfo(v PaymentTaxType)`

SetManualPaymentTaxInfo sets ManualPaymentTaxInfo field to given value.

### HasManualPaymentTaxInfo

`func (o *BillingPaymentCriteria) HasManualPaymentTaxInfo() bool`

HasManualPaymentTaxInfo returns a boolean if a field has been set.

### GetCreditablePaymentTaxes

`func (o *BillingPaymentCriteria) GetCreditablePaymentTaxes() []PaymentTaxType`

GetCreditablePaymentTaxes returns the CreditablePaymentTaxes field if non-nil, zero value otherwise.

### GetCreditablePaymentTaxesOk

`func (o *BillingPaymentCriteria) GetCreditablePaymentTaxesOk() (*[]PaymentTaxType, bool)`

GetCreditablePaymentTaxesOk returns a tuple with the CreditablePaymentTaxes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreditablePaymentTaxes

`func (o *BillingPaymentCriteria) SetCreditablePaymentTaxes(v []PaymentTaxType)`

SetCreditablePaymentTaxes sets CreditablePaymentTaxes field to given value.

### HasCreditablePaymentTaxes

`func (o *BillingPaymentCriteria) HasCreditablePaymentTaxes() bool`

HasCreditablePaymentTaxes returns a boolean if a field has been set.

### GetTerminalId

`func (o *BillingPaymentCriteria) GetTerminalId() string`

GetTerminalId returns the TerminalId field if non-nil, zero value otherwise.

### GetTerminalIdOk

`func (o *BillingPaymentCriteria) GetTerminalIdOk() (*string, bool)`

GetTerminalIdOk returns a tuple with the TerminalId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTerminalId

`func (o *BillingPaymentCriteria) SetTerminalId(v string)`

SetTerminalId sets TerminalId field to given value.

### HasTerminalId

`func (o *BillingPaymentCriteria) HasTerminalId() bool`

HasTerminalId returns a boolean if a field has been set.

### GetOverrideInsufficientCC

`func (o *BillingPaymentCriteria) GetOverrideInsufficientCC() bool`

GetOverrideInsufficientCC returns the OverrideInsufficientCC field if non-nil, zero value otherwise.

### GetOverrideInsufficientCCOk

`func (o *BillingPaymentCriteria) GetOverrideInsufficientCCOk() (*bool, bool)`

GetOverrideInsufficientCCOk returns a tuple with the OverrideInsufficientCC field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverrideInsufficientCC

`func (o *BillingPaymentCriteria) SetOverrideInsufficientCC(v bool)`

SetOverrideInsufficientCC sets OverrideInsufficientCC field to given value.

### HasOverrideInsufficientCC

`func (o *BillingPaymentCriteria) HasOverrideInsufficientCC() bool`

HasOverrideInsufficientCC returns a boolean if a field has been set.

### GetChangeDueAmount

`func (o *BillingPaymentCriteria) GetChangeDueAmount() CurrencyAmountType`

GetChangeDueAmount returns the ChangeDueAmount field if non-nil, zero value otherwise.

### GetChangeDueAmountOk

`func (o *BillingPaymentCriteria) GetChangeDueAmountOk() (*CurrencyAmountType, bool)`

GetChangeDueAmountOk returns a tuple with the ChangeDueAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChangeDueAmount

`func (o *BillingPaymentCriteria) SetChangeDueAmount(v CurrencyAmountType)`

SetChangeDueAmount sets ChangeDueAmount field to given value.

### HasChangeDueAmount

`func (o *BillingPaymentCriteria) HasChangeDueAmount() bool`

HasChangeDueAmount returns a boolean if a field has been set.

### GetOverrideARCreditLimit

`func (o *BillingPaymentCriteria) GetOverrideARCreditLimit() bool`

GetOverrideARCreditLimit returns the OverrideARCreditLimit field if non-nil, zero value otherwise.

### GetOverrideARCreditLimitOk

`func (o *BillingPaymentCriteria) GetOverrideARCreditLimitOk() (*bool, bool)`

GetOverrideARCreditLimitOk returns a tuple with the OverrideARCreditLimit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverrideARCreditLimit

`func (o *BillingPaymentCriteria) SetOverrideARCreditLimit(v bool)`

SetOverrideARCreditLimit sets OverrideARCreditLimit field to given value.

### HasOverrideARCreditLimit

`func (o *BillingPaymentCriteria) HasOverrideARCreditLimit() bool`

HasOverrideARCreditLimit returns a boolean if a field has been set.

### GetApplyCurrencyTaxes

`func (o *BillingPaymentCriteria) GetApplyCurrencyTaxes() bool`

GetApplyCurrencyTaxes returns the ApplyCurrencyTaxes field if non-nil, zero value otherwise.

### GetApplyCurrencyTaxesOk

`func (o *BillingPaymentCriteria) GetApplyCurrencyTaxesOk() (*bool, bool)`

GetApplyCurrencyTaxesOk returns a tuple with the ApplyCurrencyTaxes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApplyCurrencyTaxes

`func (o *BillingPaymentCriteria) SetApplyCurrencyTaxes(v bool)`

SetApplyCurrencyTaxes sets ApplyCurrencyTaxes field to given value.

### HasApplyCurrencyTaxes

`func (o *BillingPaymentCriteria) HasApplyCurrencyTaxes() bool`

HasApplyCurrencyTaxes returns a boolean if a field has been set.

### GetVATOffset

`func (o *BillingPaymentCriteria) GetVATOffset() bool`

GetVATOffset returns the VATOffset field if non-nil, zero value otherwise.

### GetVATOffsetOk

`func (o *BillingPaymentCriteria) GetVATOffsetOk() (*bool, bool)`

GetVATOffsetOk returns a tuple with the VATOffset field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVATOffset

`func (o *BillingPaymentCriteria) SetVATOffset(v bool)`

SetVATOffset sets VATOffset field to given value.

### HasVATOffset

`func (o *BillingPaymentCriteria) HasVATOffset() bool`

HasVATOffset returns a boolean if a field has been set.

### GetAction

`func (o *BillingPaymentCriteria) GetAction() PostPaymentActionType`

GetAction returns the Action field if non-nil, zero value otherwise.

### GetActionOk

`func (o *BillingPaymentCriteria) GetActionOk() (*PostPaymentActionType, bool)`

GetActionOk returns a tuple with the Action field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAction

`func (o *BillingPaymentCriteria) SetAction(v PostPaymentActionType)`

SetAction sets Action field to given value.

### HasAction

`func (o *BillingPaymentCriteria) HasAction() bool`

HasAction returns a boolean if a field has been set.

### GetFolioWindowNo

`func (o *BillingPaymentCriteria) GetFolioWindowNo() int32`

GetFolioWindowNo returns the FolioWindowNo field if non-nil, zero value otherwise.

### GetFolioWindowNoOk

`func (o *BillingPaymentCriteria) GetFolioWindowNoOk() (*int32, bool)`

GetFolioWindowNoOk returns a tuple with the FolioWindowNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioWindowNo

`func (o *BillingPaymentCriteria) SetFolioWindowNo(v int32)`

SetFolioWindowNo sets FolioWindowNo field to given value.

### HasFolioWindowNo

`func (o *BillingPaymentCriteria) HasFolioWindowNo() bool`

HasFolioWindowNo returns a boolean if a field has been set.

### GetCashierId

`func (o *BillingPaymentCriteria) GetCashierId() float32`

GetCashierId returns the CashierId field if non-nil, zero value otherwise.

### GetCashierIdOk

`func (o *BillingPaymentCriteria) GetCashierIdOk() (*float32, bool)`

GetCashierIdOk returns a tuple with the CashierId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCashierId

`func (o *BillingPaymentCriteria) SetCashierId(v float32)`

SetCashierId sets CashierId field to given value.

### HasCashierId

`func (o *BillingPaymentCriteria) HasCashierId() bool`

HasCashierId returns a boolean if a field has been set.

### GetReservationId

`func (o *BillingPaymentCriteria) GetReservationId() ReservationId`

GetReservationId returns the ReservationId field if non-nil, zero value otherwise.

### GetReservationIdOk

`func (o *BillingPaymentCriteria) GetReservationIdOk() (*ReservationId, bool)`

GetReservationIdOk returns a tuple with the ReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationId

`func (o *BillingPaymentCriteria) SetReservationId(v ReservationId)`

SetReservationId sets ReservationId field to given value.

### HasReservationId

`func (o *BillingPaymentCriteria) HasReservationId() bool`

HasReservationId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



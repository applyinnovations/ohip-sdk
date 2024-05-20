# PaymentCriteriaType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Action** | Pointer to [**PostPaymentActionType**](PostPaymentActionType.md) |  | [optional] 
**ApplyCCSurcharge** | Pointer to **bool** | Flag to indicate if Credit Card Surcharge has to be applied to this payment, when the functionality for Credit Card Surcharge is available. | [optional] 
**ApplyCurrencyTaxes** | Pointer to **bool** | Flag to indidcate if currency taxes need to be applied or not. For ex, in case of Chile, it depends upon nationality of the guest. | [optional] 
**CashierId** | Pointer to **float32** | The Cashier ID of the Cashier who is currently processing the transaction(s). | [optional] 
**ChangeDueAmount** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**Comments** | Pointer to **string** | User Defined Comments. Used for Deposit Payment postings. | [optional] 
**CompRedemptions** | Pointer to [**[]RedemptionType**](RedemptionType.md) | Information regarding Complimentary Bucket Redemption object. | [optional] 
**CreditablePaymentTaxes** | Pointer to [**[]PaymentTaxType**](PaymentTaxType.md) | Payment Tax record. | [optional] 
**FolioWindowNo** | Pointer to **int32** |  | [optional] 
**HotelId** | Pointer to **string** | Property code. | [optional] 
**ManualPaymentTaxInfo** | Pointer to [**PaymentTaxType**](PaymentTaxType.md) |  | [optional] 
**OverrideARCreditLimit** | Pointer to **bool** | Flag to override account receivable credit limit | [optional] 
**OverrideInsufficientCC** | Pointer to **bool** | Flag to allow a rebate by Credit Card | [optional] 
**PaymentMethod** | Pointer to [**CashieringPaymentMethodType**](CashieringPaymentMethodType.md) |  | [optional] 
**PostingAmount** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**PostingReference** | Pointer to **string** | User-defined posting reference. | [optional] 
**PostingRemark** | Pointer to **string** | User-defined posting remark. | [optional] 
**PrepaidCardRedemptions** | Pointer to [**[]PrepaidCardRedemptionType**](PrepaidCardRedemptionType.md) | A prepaid redemption info object to be used for posting a payment. | [optional] 
**TerminalId** | Pointer to **string** | Applicable for chip and pin. The ID of the terminal where the chip and pin device is connected and where the payment is made. | [optional] 
**VATOffset** | Pointer to **bool** | Flag to indidcate if currency taxes need to be applied or not. For ex, in case of Chile, it depends upon nationality of the guest. | [optional] 

## Methods

### NewPaymentCriteriaType

`func NewPaymentCriteriaType() *PaymentCriteriaType`

NewPaymentCriteriaType instantiates a new PaymentCriteriaType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPaymentCriteriaTypeWithDefaults

`func NewPaymentCriteriaTypeWithDefaults() *PaymentCriteriaType`

NewPaymentCriteriaTypeWithDefaults instantiates a new PaymentCriteriaType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAction

`func (o *PaymentCriteriaType) GetAction() PostPaymentActionType`

GetAction returns the Action field if non-nil, zero value otherwise.

### GetActionOk

`func (o *PaymentCriteriaType) GetActionOk() (*PostPaymentActionType, bool)`

GetActionOk returns a tuple with the Action field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAction

`func (o *PaymentCriteriaType) SetAction(v PostPaymentActionType)`

SetAction sets Action field to given value.

### HasAction

`func (o *PaymentCriteriaType) HasAction() bool`

HasAction returns a boolean if a field has been set.

### GetApplyCCSurcharge

`func (o *PaymentCriteriaType) GetApplyCCSurcharge() bool`

GetApplyCCSurcharge returns the ApplyCCSurcharge field if non-nil, zero value otherwise.

### GetApplyCCSurchargeOk

`func (o *PaymentCriteriaType) GetApplyCCSurchargeOk() (*bool, bool)`

GetApplyCCSurchargeOk returns a tuple with the ApplyCCSurcharge field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApplyCCSurcharge

`func (o *PaymentCriteriaType) SetApplyCCSurcharge(v bool)`

SetApplyCCSurcharge sets ApplyCCSurcharge field to given value.

### HasApplyCCSurcharge

`func (o *PaymentCriteriaType) HasApplyCCSurcharge() bool`

HasApplyCCSurcharge returns a boolean if a field has been set.

### GetApplyCurrencyTaxes

`func (o *PaymentCriteriaType) GetApplyCurrencyTaxes() bool`

GetApplyCurrencyTaxes returns the ApplyCurrencyTaxes field if non-nil, zero value otherwise.

### GetApplyCurrencyTaxesOk

`func (o *PaymentCriteriaType) GetApplyCurrencyTaxesOk() (*bool, bool)`

GetApplyCurrencyTaxesOk returns a tuple with the ApplyCurrencyTaxes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApplyCurrencyTaxes

`func (o *PaymentCriteriaType) SetApplyCurrencyTaxes(v bool)`

SetApplyCurrencyTaxes sets ApplyCurrencyTaxes field to given value.

### HasApplyCurrencyTaxes

`func (o *PaymentCriteriaType) HasApplyCurrencyTaxes() bool`

HasApplyCurrencyTaxes returns a boolean if a field has been set.

### GetCashierId

`func (o *PaymentCriteriaType) GetCashierId() float32`

GetCashierId returns the CashierId field if non-nil, zero value otherwise.

### GetCashierIdOk

`func (o *PaymentCriteriaType) GetCashierIdOk() (*float32, bool)`

GetCashierIdOk returns a tuple with the CashierId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCashierId

`func (o *PaymentCriteriaType) SetCashierId(v float32)`

SetCashierId sets CashierId field to given value.

### HasCashierId

`func (o *PaymentCriteriaType) HasCashierId() bool`

HasCashierId returns a boolean if a field has been set.

### GetChangeDueAmount

`func (o *PaymentCriteriaType) GetChangeDueAmount() CurrencyAmountType`

GetChangeDueAmount returns the ChangeDueAmount field if non-nil, zero value otherwise.

### GetChangeDueAmountOk

`func (o *PaymentCriteriaType) GetChangeDueAmountOk() (*CurrencyAmountType, bool)`

GetChangeDueAmountOk returns a tuple with the ChangeDueAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChangeDueAmount

`func (o *PaymentCriteriaType) SetChangeDueAmount(v CurrencyAmountType)`

SetChangeDueAmount sets ChangeDueAmount field to given value.

### HasChangeDueAmount

`func (o *PaymentCriteriaType) HasChangeDueAmount() bool`

HasChangeDueAmount returns a boolean if a field has been set.

### GetComments

`func (o *PaymentCriteriaType) GetComments() string`

GetComments returns the Comments field if non-nil, zero value otherwise.

### GetCommentsOk

`func (o *PaymentCriteriaType) GetCommentsOk() (*string, bool)`

GetCommentsOk returns a tuple with the Comments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComments

`func (o *PaymentCriteriaType) SetComments(v string)`

SetComments sets Comments field to given value.

### HasComments

`func (o *PaymentCriteriaType) HasComments() bool`

HasComments returns a boolean if a field has been set.

### GetCompRedemptions

`func (o *PaymentCriteriaType) GetCompRedemptions() []RedemptionType`

GetCompRedemptions returns the CompRedemptions field if non-nil, zero value otherwise.

### GetCompRedemptionsOk

`func (o *PaymentCriteriaType) GetCompRedemptionsOk() (*[]RedemptionType, bool)`

GetCompRedemptionsOk returns a tuple with the CompRedemptions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompRedemptions

`func (o *PaymentCriteriaType) SetCompRedemptions(v []RedemptionType)`

SetCompRedemptions sets CompRedemptions field to given value.

### HasCompRedemptions

`func (o *PaymentCriteriaType) HasCompRedemptions() bool`

HasCompRedemptions returns a boolean if a field has been set.

### GetCreditablePaymentTaxes

`func (o *PaymentCriteriaType) GetCreditablePaymentTaxes() []PaymentTaxType`

GetCreditablePaymentTaxes returns the CreditablePaymentTaxes field if non-nil, zero value otherwise.

### GetCreditablePaymentTaxesOk

`func (o *PaymentCriteriaType) GetCreditablePaymentTaxesOk() (*[]PaymentTaxType, bool)`

GetCreditablePaymentTaxesOk returns a tuple with the CreditablePaymentTaxes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreditablePaymentTaxes

`func (o *PaymentCriteriaType) SetCreditablePaymentTaxes(v []PaymentTaxType)`

SetCreditablePaymentTaxes sets CreditablePaymentTaxes field to given value.

### HasCreditablePaymentTaxes

`func (o *PaymentCriteriaType) HasCreditablePaymentTaxes() bool`

HasCreditablePaymentTaxes returns a boolean if a field has been set.

### GetFolioWindowNo

`func (o *PaymentCriteriaType) GetFolioWindowNo() int32`

GetFolioWindowNo returns the FolioWindowNo field if non-nil, zero value otherwise.

### GetFolioWindowNoOk

`func (o *PaymentCriteriaType) GetFolioWindowNoOk() (*int32, bool)`

GetFolioWindowNoOk returns a tuple with the FolioWindowNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioWindowNo

`func (o *PaymentCriteriaType) SetFolioWindowNo(v int32)`

SetFolioWindowNo sets FolioWindowNo field to given value.

### HasFolioWindowNo

`func (o *PaymentCriteriaType) HasFolioWindowNo() bool`

HasFolioWindowNo returns a boolean if a field has been set.

### GetHotelId

`func (o *PaymentCriteriaType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *PaymentCriteriaType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *PaymentCriteriaType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *PaymentCriteriaType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetManualPaymentTaxInfo

`func (o *PaymentCriteriaType) GetManualPaymentTaxInfo() PaymentTaxType`

GetManualPaymentTaxInfo returns the ManualPaymentTaxInfo field if non-nil, zero value otherwise.

### GetManualPaymentTaxInfoOk

`func (o *PaymentCriteriaType) GetManualPaymentTaxInfoOk() (*PaymentTaxType, bool)`

GetManualPaymentTaxInfoOk returns a tuple with the ManualPaymentTaxInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManualPaymentTaxInfo

`func (o *PaymentCriteriaType) SetManualPaymentTaxInfo(v PaymentTaxType)`

SetManualPaymentTaxInfo sets ManualPaymentTaxInfo field to given value.

### HasManualPaymentTaxInfo

`func (o *PaymentCriteriaType) HasManualPaymentTaxInfo() bool`

HasManualPaymentTaxInfo returns a boolean if a field has been set.

### GetOverrideARCreditLimit

`func (o *PaymentCriteriaType) GetOverrideARCreditLimit() bool`

GetOverrideARCreditLimit returns the OverrideARCreditLimit field if non-nil, zero value otherwise.

### GetOverrideARCreditLimitOk

`func (o *PaymentCriteriaType) GetOverrideARCreditLimitOk() (*bool, bool)`

GetOverrideARCreditLimitOk returns a tuple with the OverrideARCreditLimit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverrideARCreditLimit

`func (o *PaymentCriteriaType) SetOverrideARCreditLimit(v bool)`

SetOverrideARCreditLimit sets OverrideARCreditLimit field to given value.

### HasOverrideARCreditLimit

`func (o *PaymentCriteriaType) HasOverrideARCreditLimit() bool`

HasOverrideARCreditLimit returns a boolean if a field has been set.

### GetOverrideInsufficientCC

`func (o *PaymentCriteriaType) GetOverrideInsufficientCC() bool`

GetOverrideInsufficientCC returns the OverrideInsufficientCC field if non-nil, zero value otherwise.

### GetOverrideInsufficientCCOk

`func (o *PaymentCriteriaType) GetOverrideInsufficientCCOk() (*bool, bool)`

GetOverrideInsufficientCCOk returns a tuple with the OverrideInsufficientCC field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverrideInsufficientCC

`func (o *PaymentCriteriaType) SetOverrideInsufficientCC(v bool)`

SetOverrideInsufficientCC sets OverrideInsufficientCC field to given value.

### HasOverrideInsufficientCC

`func (o *PaymentCriteriaType) HasOverrideInsufficientCC() bool`

HasOverrideInsufficientCC returns a boolean if a field has been set.

### GetPaymentMethod

`func (o *PaymentCriteriaType) GetPaymentMethod() CashieringPaymentMethodType`

GetPaymentMethod returns the PaymentMethod field if non-nil, zero value otherwise.

### GetPaymentMethodOk

`func (o *PaymentCriteriaType) GetPaymentMethodOk() (*CashieringPaymentMethodType, bool)`

GetPaymentMethodOk returns a tuple with the PaymentMethod field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaymentMethod

`func (o *PaymentCriteriaType) SetPaymentMethod(v CashieringPaymentMethodType)`

SetPaymentMethod sets PaymentMethod field to given value.

### HasPaymentMethod

`func (o *PaymentCriteriaType) HasPaymentMethod() bool`

HasPaymentMethod returns a boolean if a field has been set.

### GetPostingAmount

`func (o *PaymentCriteriaType) GetPostingAmount() CurrencyAmountType`

GetPostingAmount returns the PostingAmount field if non-nil, zero value otherwise.

### GetPostingAmountOk

`func (o *PaymentCriteriaType) GetPostingAmountOk() (*CurrencyAmountType, bool)`

GetPostingAmountOk returns a tuple with the PostingAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPostingAmount

`func (o *PaymentCriteriaType) SetPostingAmount(v CurrencyAmountType)`

SetPostingAmount sets PostingAmount field to given value.

### HasPostingAmount

`func (o *PaymentCriteriaType) HasPostingAmount() bool`

HasPostingAmount returns a boolean if a field has been set.

### GetPostingReference

`func (o *PaymentCriteriaType) GetPostingReference() string`

GetPostingReference returns the PostingReference field if non-nil, zero value otherwise.

### GetPostingReferenceOk

`func (o *PaymentCriteriaType) GetPostingReferenceOk() (*string, bool)`

GetPostingReferenceOk returns a tuple with the PostingReference field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPostingReference

`func (o *PaymentCriteriaType) SetPostingReference(v string)`

SetPostingReference sets PostingReference field to given value.

### HasPostingReference

`func (o *PaymentCriteriaType) HasPostingReference() bool`

HasPostingReference returns a boolean if a field has been set.

### GetPostingRemark

`func (o *PaymentCriteriaType) GetPostingRemark() string`

GetPostingRemark returns the PostingRemark field if non-nil, zero value otherwise.

### GetPostingRemarkOk

`func (o *PaymentCriteriaType) GetPostingRemarkOk() (*string, bool)`

GetPostingRemarkOk returns a tuple with the PostingRemark field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPostingRemark

`func (o *PaymentCriteriaType) SetPostingRemark(v string)`

SetPostingRemark sets PostingRemark field to given value.

### HasPostingRemark

`func (o *PaymentCriteriaType) HasPostingRemark() bool`

HasPostingRemark returns a boolean if a field has been set.

### GetPrepaidCardRedemptions

`func (o *PaymentCriteriaType) GetPrepaidCardRedemptions() []PrepaidCardRedemptionType`

GetPrepaidCardRedemptions returns the PrepaidCardRedemptions field if non-nil, zero value otherwise.

### GetPrepaidCardRedemptionsOk

`func (o *PaymentCriteriaType) GetPrepaidCardRedemptionsOk() (*[]PrepaidCardRedemptionType, bool)`

GetPrepaidCardRedemptionsOk returns a tuple with the PrepaidCardRedemptions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrepaidCardRedemptions

`func (o *PaymentCriteriaType) SetPrepaidCardRedemptions(v []PrepaidCardRedemptionType)`

SetPrepaidCardRedemptions sets PrepaidCardRedemptions field to given value.

### HasPrepaidCardRedemptions

`func (o *PaymentCriteriaType) HasPrepaidCardRedemptions() bool`

HasPrepaidCardRedemptions returns a boolean if a field has been set.

### GetTerminalId

`func (o *PaymentCriteriaType) GetTerminalId() string`

GetTerminalId returns the TerminalId field if non-nil, zero value otherwise.

### GetTerminalIdOk

`func (o *PaymentCriteriaType) GetTerminalIdOk() (*string, bool)`

GetTerminalIdOk returns a tuple with the TerminalId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTerminalId

`func (o *PaymentCriteriaType) SetTerminalId(v string)`

SetTerminalId sets TerminalId field to given value.

### HasTerminalId

`func (o *PaymentCriteriaType) HasTerminalId() bool`

HasTerminalId returns a boolean if a field has been set.

### GetVATOffset

`func (o *PaymentCriteriaType) GetVATOffset() bool`

GetVATOffset returns the VATOffset field if non-nil, zero value otherwise.

### GetVATOffsetOk

`func (o *PaymentCriteriaType) GetVATOffsetOk() (*bool, bool)`

GetVATOffsetOk returns a tuple with the VATOffset field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVATOffset

`func (o *PaymentCriteriaType) SetVATOffset(v bool)`

SetVATOffset sets VATOffset field to given value.

### HasVATOffset

`func (o *PaymentCriteriaType) HasVATOffset() bool`

HasVATOffset returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



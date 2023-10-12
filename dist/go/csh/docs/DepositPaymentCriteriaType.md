# DepositPaymentCriteriaType

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
**CompRedemptions** | Pointer to [**[]RedemptionType**](RedemptionType.md) | Information regarding Complimentary Bucket Redemption object. | [optional] 
**OverrideARCreditLimit** | Pointer to **bool** | Flag to override account receivable credit limit | [optional] 
**ApplyCurrencyTaxes** | Pointer to **bool** | Flag to indidcate if currency taxes need to be applied or not. For ex, in case of Chile, it depends upon nationality of the guest. | [optional] 
**VATOffset** | Pointer to **bool** | Flag to indidcate if currency taxes need to be applied or not. For ex, in case of Chile, it depends upon nationality of the guest. | [optional] 
**Action** | Pointer to [**PostPaymentActionType**](PostPaymentActionType.md) |  | [optional] 
**PrepaidCardRedemptions** | Pointer to [**[]PrepaidCardRedemptionType**](PrepaidCardRedemptionType.md) | A prepaid redemption info object to be used for posting a payment. | [optional] 
**FolioWindowNo** | Pointer to **int32** |  | [optional] 
**CashierId** | Pointer to **float32** | The Cashier ID of the Cashier who is currently processing the transaction(s). | [optional] 
**ReservationId** | Pointer to [**ReservationId**](ReservationId.md) |  | [optional] 
**GuaranteeCode** | Pointer to **string** | New guarantee code associated with reservation. | [optional] 
**DepositPolicyId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**ProfileId** | Pointer to [**ProfileId**](ProfileId.md) |  | [optional] 
**AssociatedTrxNo** | Pointer to **float32** | Transaction number of the payment being deposited. | [optional] 
**OverrideInventoryCheck** | Pointer to **bool** | Flag to indicate if the Inventory check has to be overridden when the guarantee code of the reservation is changed. | [optional] 
**UpdateReservationPaymentMethod** | Pointer to **bool** | Flag to indicate if the payment method on the reservation, for Window 1, is to be updated with the payment method used for this deposit. | [optional] 
**ReceiptType** | Pointer to [**ReceiptType**](ReceiptType.md) |  | [optional] 

## Methods

### NewDepositPaymentCriteriaType

`func NewDepositPaymentCriteriaType() *DepositPaymentCriteriaType`

NewDepositPaymentCriteriaType instantiates a new DepositPaymentCriteriaType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDepositPaymentCriteriaTypeWithDefaults

`func NewDepositPaymentCriteriaTypeWithDefaults() *DepositPaymentCriteriaType`

NewDepositPaymentCriteriaTypeWithDefaults instantiates a new DepositPaymentCriteriaType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *DepositPaymentCriteriaType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *DepositPaymentCriteriaType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *DepositPaymentCriteriaType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *DepositPaymentCriteriaType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetPaymentMethod

`func (o *DepositPaymentCriteriaType) GetPaymentMethod() CashieringPaymentMethodType`

GetPaymentMethod returns the PaymentMethod field if non-nil, zero value otherwise.

### GetPaymentMethodOk

`func (o *DepositPaymentCriteriaType) GetPaymentMethodOk() (*CashieringPaymentMethodType, bool)`

GetPaymentMethodOk returns a tuple with the PaymentMethod field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaymentMethod

`func (o *DepositPaymentCriteriaType) SetPaymentMethod(v CashieringPaymentMethodType)`

SetPaymentMethod sets PaymentMethod field to given value.

### HasPaymentMethod

`func (o *DepositPaymentCriteriaType) HasPaymentMethod() bool`

HasPaymentMethod returns a boolean if a field has been set.

### GetPostingAmount

`func (o *DepositPaymentCriteriaType) GetPostingAmount() CurrencyAmountType`

GetPostingAmount returns the PostingAmount field if non-nil, zero value otherwise.

### GetPostingAmountOk

`func (o *DepositPaymentCriteriaType) GetPostingAmountOk() (*CurrencyAmountType, bool)`

GetPostingAmountOk returns a tuple with the PostingAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPostingAmount

`func (o *DepositPaymentCriteriaType) SetPostingAmount(v CurrencyAmountType)`

SetPostingAmount sets PostingAmount field to given value.

### HasPostingAmount

`func (o *DepositPaymentCriteriaType) HasPostingAmount() bool`

HasPostingAmount returns a boolean if a field has been set.

### GetPostingReference

`func (o *DepositPaymentCriteriaType) GetPostingReference() string`

GetPostingReference returns the PostingReference field if non-nil, zero value otherwise.

### GetPostingReferenceOk

`func (o *DepositPaymentCriteriaType) GetPostingReferenceOk() (*string, bool)`

GetPostingReferenceOk returns a tuple with the PostingReference field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPostingReference

`func (o *DepositPaymentCriteriaType) SetPostingReference(v string)`

SetPostingReference sets PostingReference field to given value.

### HasPostingReference

`func (o *DepositPaymentCriteriaType) HasPostingReference() bool`

HasPostingReference returns a boolean if a field has been set.

### GetPostingRemark

`func (o *DepositPaymentCriteriaType) GetPostingRemark() string`

GetPostingRemark returns the PostingRemark field if non-nil, zero value otherwise.

### GetPostingRemarkOk

`func (o *DepositPaymentCriteriaType) GetPostingRemarkOk() (*string, bool)`

GetPostingRemarkOk returns a tuple with the PostingRemark field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPostingRemark

`func (o *DepositPaymentCriteriaType) SetPostingRemark(v string)`

SetPostingRemark sets PostingRemark field to given value.

### HasPostingRemark

`func (o *DepositPaymentCriteriaType) HasPostingRemark() bool`

HasPostingRemark returns a boolean if a field has been set.

### GetComments

`func (o *DepositPaymentCriteriaType) GetComments() string`

GetComments returns the Comments field if non-nil, zero value otherwise.

### GetCommentsOk

`func (o *DepositPaymentCriteriaType) GetCommentsOk() (*string, bool)`

GetCommentsOk returns a tuple with the Comments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComments

`func (o *DepositPaymentCriteriaType) SetComments(v string)`

SetComments sets Comments field to given value.

### HasComments

`func (o *DepositPaymentCriteriaType) HasComments() bool`

HasComments returns a boolean if a field has been set.

### GetApplyCCSurcharge

`func (o *DepositPaymentCriteriaType) GetApplyCCSurcharge() bool`

GetApplyCCSurcharge returns the ApplyCCSurcharge field if non-nil, zero value otherwise.

### GetApplyCCSurchargeOk

`func (o *DepositPaymentCriteriaType) GetApplyCCSurchargeOk() (*bool, bool)`

GetApplyCCSurchargeOk returns a tuple with the ApplyCCSurcharge field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApplyCCSurcharge

`func (o *DepositPaymentCriteriaType) SetApplyCCSurcharge(v bool)`

SetApplyCCSurcharge sets ApplyCCSurcharge field to given value.

### HasApplyCCSurcharge

`func (o *DepositPaymentCriteriaType) HasApplyCCSurcharge() bool`

HasApplyCCSurcharge returns a boolean if a field has been set.

### GetManualPaymentTaxInfo

`func (o *DepositPaymentCriteriaType) GetManualPaymentTaxInfo() PaymentTaxType`

GetManualPaymentTaxInfo returns the ManualPaymentTaxInfo field if non-nil, zero value otherwise.

### GetManualPaymentTaxInfoOk

`func (o *DepositPaymentCriteriaType) GetManualPaymentTaxInfoOk() (*PaymentTaxType, bool)`

GetManualPaymentTaxInfoOk returns a tuple with the ManualPaymentTaxInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManualPaymentTaxInfo

`func (o *DepositPaymentCriteriaType) SetManualPaymentTaxInfo(v PaymentTaxType)`

SetManualPaymentTaxInfo sets ManualPaymentTaxInfo field to given value.

### HasManualPaymentTaxInfo

`func (o *DepositPaymentCriteriaType) HasManualPaymentTaxInfo() bool`

HasManualPaymentTaxInfo returns a boolean if a field has been set.

### GetCreditablePaymentTaxes

`func (o *DepositPaymentCriteriaType) GetCreditablePaymentTaxes() []PaymentTaxType`

GetCreditablePaymentTaxes returns the CreditablePaymentTaxes field if non-nil, zero value otherwise.

### GetCreditablePaymentTaxesOk

`func (o *DepositPaymentCriteriaType) GetCreditablePaymentTaxesOk() (*[]PaymentTaxType, bool)`

GetCreditablePaymentTaxesOk returns a tuple with the CreditablePaymentTaxes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreditablePaymentTaxes

`func (o *DepositPaymentCriteriaType) SetCreditablePaymentTaxes(v []PaymentTaxType)`

SetCreditablePaymentTaxes sets CreditablePaymentTaxes field to given value.

### HasCreditablePaymentTaxes

`func (o *DepositPaymentCriteriaType) HasCreditablePaymentTaxes() bool`

HasCreditablePaymentTaxes returns a boolean if a field has been set.

### GetTerminalId

`func (o *DepositPaymentCriteriaType) GetTerminalId() string`

GetTerminalId returns the TerminalId field if non-nil, zero value otherwise.

### GetTerminalIdOk

`func (o *DepositPaymentCriteriaType) GetTerminalIdOk() (*string, bool)`

GetTerminalIdOk returns a tuple with the TerminalId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTerminalId

`func (o *DepositPaymentCriteriaType) SetTerminalId(v string)`

SetTerminalId sets TerminalId field to given value.

### HasTerminalId

`func (o *DepositPaymentCriteriaType) HasTerminalId() bool`

HasTerminalId returns a boolean if a field has been set.

### GetOverrideInsufficientCC

`func (o *DepositPaymentCriteriaType) GetOverrideInsufficientCC() bool`

GetOverrideInsufficientCC returns the OverrideInsufficientCC field if non-nil, zero value otherwise.

### GetOverrideInsufficientCCOk

`func (o *DepositPaymentCriteriaType) GetOverrideInsufficientCCOk() (*bool, bool)`

GetOverrideInsufficientCCOk returns a tuple with the OverrideInsufficientCC field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverrideInsufficientCC

`func (o *DepositPaymentCriteriaType) SetOverrideInsufficientCC(v bool)`

SetOverrideInsufficientCC sets OverrideInsufficientCC field to given value.

### HasOverrideInsufficientCC

`func (o *DepositPaymentCriteriaType) HasOverrideInsufficientCC() bool`

HasOverrideInsufficientCC returns a boolean if a field has been set.

### GetChangeDueAmount

`func (o *DepositPaymentCriteriaType) GetChangeDueAmount() CurrencyAmountType`

GetChangeDueAmount returns the ChangeDueAmount field if non-nil, zero value otherwise.

### GetChangeDueAmountOk

`func (o *DepositPaymentCriteriaType) GetChangeDueAmountOk() (*CurrencyAmountType, bool)`

GetChangeDueAmountOk returns a tuple with the ChangeDueAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChangeDueAmount

`func (o *DepositPaymentCriteriaType) SetChangeDueAmount(v CurrencyAmountType)`

SetChangeDueAmount sets ChangeDueAmount field to given value.

### HasChangeDueAmount

`func (o *DepositPaymentCriteriaType) HasChangeDueAmount() bool`

HasChangeDueAmount returns a boolean if a field has been set.

### GetCompRedemptions

`func (o *DepositPaymentCriteriaType) GetCompRedemptions() []RedemptionType`

GetCompRedemptions returns the CompRedemptions field if non-nil, zero value otherwise.

### GetCompRedemptionsOk

`func (o *DepositPaymentCriteriaType) GetCompRedemptionsOk() (*[]RedemptionType, bool)`

GetCompRedemptionsOk returns a tuple with the CompRedemptions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompRedemptions

`func (o *DepositPaymentCriteriaType) SetCompRedemptions(v []RedemptionType)`

SetCompRedemptions sets CompRedemptions field to given value.

### HasCompRedemptions

`func (o *DepositPaymentCriteriaType) HasCompRedemptions() bool`

HasCompRedemptions returns a boolean if a field has been set.

### GetOverrideARCreditLimit

`func (o *DepositPaymentCriteriaType) GetOverrideARCreditLimit() bool`

GetOverrideARCreditLimit returns the OverrideARCreditLimit field if non-nil, zero value otherwise.

### GetOverrideARCreditLimitOk

`func (o *DepositPaymentCriteriaType) GetOverrideARCreditLimitOk() (*bool, bool)`

GetOverrideARCreditLimitOk returns a tuple with the OverrideARCreditLimit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverrideARCreditLimit

`func (o *DepositPaymentCriteriaType) SetOverrideARCreditLimit(v bool)`

SetOverrideARCreditLimit sets OverrideARCreditLimit field to given value.

### HasOverrideARCreditLimit

`func (o *DepositPaymentCriteriaType) HasOverrideARCreditLimit() bool`

HasOverrideARCreditLimit returns a boolean if a field has been set.

### GetApplyCurrencyTaxes

`func (o *DepositPaymentCriteriaType) GetApplyCurrencyTaxes() bool`

GetApplyCurrencyTaxes returns the ApplyCurrencyTaxes field if non-nil, zero value otherwise.

### GetApplyCurrencyTaxesOk

`func (o *DepositPaymentCriteriaType) GetApplyCurrencyTaxesOk() (*bool, bool)`

GetApplyCurrencyTaxesOk returns a tuple with the ApplyCurrencyTaxes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApplyCurrencyTaxes

`func (o *DepositPaymentCriteriaType) SetApplyCurrencyTaxes(v bool)`

SetApplyCurrencyTaxes sets ApplyCurrencyTaxes field to given value.

### HasApplyCurrencyTaxes

`func (o *DepositPaymentCriteriaType) HasApplyCurrencyTaxes() bool`

HasApplyCurrencyTaxes returns a boolean if a field has been set.

### GetVATOffset

`func (o *DepositPaymentCriteriaType) GetVATOffset() bool`

GetVATOffset returns the VATOffset field if non-nil, zero value otherwise.

### GetVATOffsetOk

`func (o *DepositPaymentCriteriaType) GetVATOffsetOk() (*bool, bool)`

GetVATOffsetOk returns a tuple with the VATOffset field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVATOffset

`func (o *DepositPaymentCriteriaType) SetVATOffset(v bool)`

SetVATOffset sets VATOffset field to given value.

### HasVATOffset

`func (o *DepositPaymentCriteriaType) HasVATOffset() bool`

HasVATOffset returns a boolean if a field has been set.

### GetAction

`func (o *DepositPaymentCriteriaType) GetAction() PostPaymentActionType`

GetAction returns the Action field if non-nil, zero value otherwise.

### GetActionOk

`func (o *DepositPaymentCriteriaType) GetActionOk() (*PostPaymentActionType, bool)`

GetActionOk returns a tuple with the Action field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAction

`func (o *DepositPaymentCriteriaType) SetAction(v PostPaymentActionType)`

SetAction sets Action field to given value.

### HasAction

`func (o *DepositPaymentCriteriaType) HasAction() bool`

HasAction returns a boolean if a field has been set.

### GetPrepaidCardRedemptions

`func (o *DepositPaymentCriteriaType) GetPrepaidCardRedemptions() []PrepaidCardRedemptionType`

GetPrepaidCardRedemptions returns the PrepaidCardRedemptions field if non-nil, zero value otherwise.

### GetPrepaidCardRedemptionsOk

`func (o *DepositPaymentCriteriaType) GetPrepaidCardRedemptionsOk() (*[]PrepaidCardRedemptionType, bool)`

GetPrepaidCardRedemptionsOk returns a tuple with the PrepaidCardRedemptions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrepaidCardRedemptions

`func (o *DepositPaymentCriteriaType) SetPrepaidCardRedemptions(v []PrepaidCardRedemptionType)`

SetPrepaidCardRedemptions sets PrepaidCardRedemptions field to given value.

### HasPrepaidCardRedemptions

`func (o *DepositPaymentCriteriaType) HasPrepaidCardRedemptions() bool`

HasPrepaidCardRedemptions returns a boolean if a field has been set.

### GetFolioWindowNo

`func (o *DepositPaymentCriteriaType) GetFolioWindowNo() int32`

GetFolioWindowNo returns the FolioWindowNo field if non-nil, zero value otherwise.

### GetFolioWindowNoOk

`func (o *DepositPaymentCriteriaType) GetFolioWindowNoOk() (*int32, bool)`

GetFolioWindowNoOk returns a tuple with the FolioWindowNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioWindowNo

`func (o *DepositPaymentCriteriaType) SetFolioWindowNo(v int32)`

SetFolioWindowNo sets FolioWindowNo field to given value.

### HasFolioWindowNo

`func (o *DepositPaymentCriteriaType) HasFolioWindowNo() bool`

HasFolioWindowNo returns a boolean if a field has been set.

### GetCashierId

`func (o *DepositPaymentCriteriaType) GetCashierId() float32`

GetCashierId returns the CashierId field if non-nil, zero value otherwise.

### GetCashierIdOk

`func (o *DepositPaymentCriteriaType) GetCashierIdOk() (*float32, bool)`

GetCashierIdOk returns a tuple with the CashierId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCashierId

`func (o *DepositPaymentCriteriaType) SetCashierId(v float32)`

SetCashierId sets CashierId field to given value.

### HasCashierId

`func (o *DepositPaymentCriteriaType) HasCashierId() bool`

HasCashierId returns a boolean if a field has been set.

### GetReservationId

`func (o *DepositPaymentCriteriaType) GetReservationId() ReservationId`

GetReservationId returns the ReservationId field if non-nil, zero value otherwise.

### GetReservationIdOk

`func (o *DepositPaymentCriteriaType) GetReservationIdOk() (*ReservationId, bool)`

GetReservationIdOk returns a tuple with the ReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationId

`func (o *DepositPaymentCriteriaType) SetReservationId(v ReservationId)`

SetReservationId sets ReservationId field to given value.

### HasReservationId

`func (o *DepositPaymentCriteriaType) HasReservationId() bool`

HasReservationId returns a boolean if a field has been set.

### GetGuaranteeCode

`func (o *DepositPaymentCriteriaType) GetGuaranteeCode() string`

GetGuaranteeCode returns the GuaranteeCode field if non-nil, zero value otherwise.

### GetGuaranteeCodeOk

`func (o *DepositPaymentCriteriaType) GetGuaranteeCodeOk() (*string, bool)`

GetGuaranteeCodeOk returns a tuple with the GuaranteeCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuaranteeCode

`func (o *DepositPaymentCriteriaType) SetGuaranteeCode(v string)`

SetGuaranteeCode sets GuaranteeCode field to given value.

### HasGuaranteeCode

`func (o *DepositPaymentCriteriaType) HasGuaranteeCode() bool`

HasGuaranteeCode returns a boolean if a field has been set.

### GetDepositPolicyId

`func (o *DepositPaymentCriteriaType) GetDepositPolicyId() UniqueIDType`

GetDepositPolicyId returns the DepositPolicyId field if non-nil, zero value otherwise.

### GetDepositPolicyIdOk

`func (o *DepositPaymentCriteriaType) GetDepositPolicyIdOk() (*UniqueIDType, bool)`

GetDepositPolicyIdOk returns a tuple with the DepositPolicyId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDepositPolicyId

`func (o *DepositPaymentCriteriaType) SetDepositPolicyId(v UniqueIDType)`

SetDepositPolicyId sets DepositPolicyId field to given value.

### HasDepositPolicyId

`func (o *DepositPaymentCriteriaType) HasDepositPolicyId() bool`

HasDepositPolicyId returns a boolean if a field has been set.

### GetProfileId

`func (o *DepositPaymentCriteriaType) GetProfileId() ProfileId`

GetProfileId returns the ProfileId field if non-nil, zero value otherwise.

### GetProfileIdOk

`func (o *DepositPaymentCriteriaType) GetProfileIdOk() (*ProfileId, bool)`

GetProfileIdOk returns a tuple with the ProfileId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileId

`func (o *DepositPaymentCriteriaType) SetProfileId(v ProfileId)`

SetProfileId sets ProfileId field to given value.

### HasProfileId

`func (o *DepositPaymentCriteriaType) HasProfileId() bool`

HasProfileId returns a boolean if a field has been set.

### GetAssociatedTrxNo

`func (o *DepositPaymentCriteriaType) GetAssociatedTrxNo() float32`

GetAssociatedTrxNo returns the AssociatedTrxNo field if non-nil, zero value otherwise.

### GetAssociatedTrxNoOk

`func (o *DepositPaymentCriteriaType) GetAssociatedTrxNoOk() (*float32, bool)`

GetAssociatedTrxNoOk returns a tuple with the AssociatedTrxNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAssociatedTrxNo

`func (o *DepositPaymentCriteriaType) SetAssociatedTrxNo(v float32)`

SetAssociatedTrxNo sets AssociatedTrxNo field to given value.

### HasAssociatedTrxNo

`func (o *DepositPaymentCriteriaType) HasAssociatedTrxNo() bool`

HasAssociatedTrxNo returns a boolean if a field has been set.

### GetOverrideInventoryCheck

`func (o *DepositPaymentCriteriaType) GetOverrideInventoryCheck() bool`

GetOverrideInventoryCheck returns the OverrideInventoryCheck field if non-nil, zero value otherwise.

### GetOverrideInventoryCheckOk

`func (o *DepositPaymentCriteriaType) GetOverrideInventoryCheckOk() (*bool, bool)`

GetOverrideInventoryCheckOk returns a tuple with the OverrideInventoryCheck field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverrideInventoryCheck

`func (o *DepositPaymentCriteriaType) SetOverrideInventoryCheck(v bool)`

SetOverrideInventoryCheck sets OverrideInventoryCheck field to given value.

### HasOverrideInventoryCheck

`func (o *DepositPaymentCriteriaType) HasOverrideInventoryCheck() bool`

HasOverrideInventoryCheck returns a boolean if a field has been set.

### GetUpdateReservationPaymentMethod

`func (o *DepositPaymentCriteriaType) GetUpdateReservationPaymentMethod() bool`

GetUpdateReservationPaymentMethod returns the UpdateReservationPaymentMethod field if non-nil, zero value otherwise.

### GetUpdateReservationPaymentMethodOk

`func (o *DepositPaymentCriteriaType) GetUpdateReservationPaymentMethodOk() (*bool, bool)`

GetUpdateReservationPaymentMethodOk returns a tuple with the UpdateReservationPaymentMethod field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdateReservationPaymentMethod

`func (o *DepositPaymentCriteriaType) SetUpdateReservationPaymentMethod(v bool)`

SetUpdateReservationPaymentMethod sets UpdateReservationPaymentMethod field to given value.

### HasUpdateReservationPaymentMethod

`func (o *DepositPaymentCriteriaType) HasUpdateReservationPaymentMethod() bool`

HasUpdateReservationPaymentMethod returns a boolean if a field has been set.

### GetReceiptType

`func (o *DepositPaymentCriteriaType) GetReceiptType() ReceiptType`

GetReceiptType returns the ReceiptType field if non-nil, zero value otherwise.

### GetReceiptTypeOk

`func (o *DepositPaymentCriteriaType) GetReceiptTypeOk() (*ReceiptType, bool)`

GetReceiptTypeOk returns a tuple with the ReceiptType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReceiptType

`func (o *DepositPaymentCriteriaType) SetReceiptType(v ReceiptType)`

SetReceiptType sets ReceiptType field to given value.

### HasReceiptType

`func (o *DepositPaymentCriteriaType) HasReceiptType() bool`

HasReceiptType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



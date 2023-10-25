/*
OPERA Cloud Cashiering API

APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package csh

import (
	"encoding/json"
)

// checks if the PaymentCriteriaType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &PaymentCriteriaType{}

// PaymentCriteriaType struct for PaymentCriteriaType
type PaymentCriteriaType struct {
	Action *PostPaymentActionType `json:"action,omitempty"`
	// Flag to indicate if Credit Card Surcharge has to be applied to this payment, when the functionality for Credit Card Surcharge is available.
	ApplyCCSurcharge *bool `json:"applyCCSurcharge,omitempty"`
	// Flag to indidcate if currency taxes need to be applied or not. For ex, in case of Chile, it depends upon nationality of the guest.
	ApplyCurrencyTaxes *bool `json:"applyCurrencyTaxes,omitempty"`
	// The Cashier ID of the Cashier who is currently processing the transaction(s).
	CashierId *float32 `json:"cashierId,omitempty"`
	ChangeDueAmount *CurrencyAmountType `json:"changeDueAmount,omitempty"`
	// User Defined Comments. Used for Deposit Payment postings.
	Comments *string `json:"comments,omitempty"`
	// Information regarding Complimentary Bucket Redemption object.
	CompRedemptions []RedemptionType `json:"compRedemptions,omitempty"`
	// Payment Tax record.
	CreditablePaymentTaxes []PaymentTaxType `json:"creditablePaymentTaxes,omitempty"`
	FolioWindowNo *int32 `json:"folioWindowNo,omitempty"`
	// Property code.
	HotelId *string `json:"hotelId,omitempty"`
	ManualPaymentTaxInfo *PaymentTaxType `json:"manualPaymentTaxInfo,omitempty"`
	// Flag to override account receivable credit limit
	OverrideARCreditLimit *bool `json:"overrideARCreditLimit,omitempty"`
	// Flag to allow a rebate by Credit Card
	OverrideInsufficientCC *bool `json:"overrideInsufficientCC,omitempty"`
	PaymentMethod *CashieringPaymentMethodType `json:"paymentMethod,omitempty"`
	PostingAmount *CurrencyAmountType `json:"postingAmount,omitempty"`
	// User-defined posting reference.
	PostingReference *string `json:"postingReference,omitempty"`
	// User-defined posting remark.
	PostingRemark *string `json:"postingRemark,omitempty"`
	// A prepaid redemption info object to be used for posting a payment.
	PrepaidCardRedemptions []PrepaidCardRedemptionType `json:"prepaidCardRedemptions,omitempty"`
	// Applicable for chip and pin. The ID of the terminal where the chip and pin device is connected and where the payment is made.
	TerminalId *string `json:"terminalId,omitempty"`
	// Flag to indidcate if currency taxes need to be applied or not. For ex, in case of Chile, it depends upon nationality of the guest.
	VATOffset *bool `json:"vATOffset,omitempty"`
}

// NewPaymentCriteriaType instantiates a new PaymentCriteriaType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewPaymentCriteriaType() *PaymentCriteriaType {
	this := PaymentCriteriaType{}
	return &this
}

// NewPaymentCriteriaTypeWithDefaults instantiates a new PaymentCriteriaType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewPaymentCriteriaTypeWithDefaults() *PaymentCriteriaType {
	this := PaymentCriteriaType{}
	return &this
}

// GetAction returns the Action field value if set, zero value otherwise.
func (o *PaymentCriteriaType) GetAction() PostPaymentActionType {
	if o == nil || IsNil(o.Action) {
		var ret PostPaymentActionType
		return ret
	}
	return *o.Action
}

// GetActionOk returns a tuple with the Action field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PaymentCriteriaType) GetActionOk() (*PostPaymentActionType, bool) {
	if o == nil || IsNil(o.Action) {
		return nil, false
	}
	return o.Action, true
}

// HasAction returns a boolean if a field has been set.
func (o *PaymentCriteriaType) HasAction() bool {
	if o != nil && !IsNil(o.Action) {
		return true
	}

	return false
}

// SetAction gets a reference to the given PostPaymentActionType and assigns it to the Action field.
func (o *PaymentCriteriaType) SetAction(v PostPaymentActionType) {
	o.Action = &v
}

// GetApplyCCSurcharge returns the ApplyCCSurcharge field value if set, zero value otherwise.
func (o *PaymentCriteriaType) GetApplyCCSurcharge() bool {
	if o == nil || IsNil(o.ApplyCCSurcharge) {
		var ret bool
		return ret
	}
	return *o.ApplyCCSurcharge
}

// GetApplyCCSurchargeOk returns a tuple with the ApplyCCSurcharge field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PaymentCriteriaType) GetApplyCCSurchargeOk() (*bool, bool) {
	if o == nil || IsNil(o.ApplyCCSurcharge) {
		return nil, false
	}
	return o.ApplyCCSurcharge, true
}

// HasApplyCCSurcharge returns a boolean if a field has been set.
func (o *PaymentCriteriaType) HasApplyCCSurcharge() bool {
	if o != nil && !IsNil(o.ApplyCCSurcharge) {
		return true
	}

	return false
}

// SetApplyCCSurcharge gets a reference to the given bool and assigns it to the ApplyCCSurcharge field.
func (o *PaymentCriteriaType) SetApplyCCSurcharge(v bool) {
	o.ApplyCCSurcharge = &v
}

// GetApplyCurrencyTaxes returns the ApplyCurrencyTaxes field value if set, zero value otherwise.
func (o *PaymentCriteriaType) GetApplyCurrencyTaxes() bool {
	if o == nil || IsNil(o.ApplyCurrencyTaxes) {
		var ret bool
		return ret
	}
	return *o.ApplyCurrencyTaxes
}

// GetApplyCurrencyTaxesOk returns a tuple with the ApplyCurrencyTaxes field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PaymentCriteriaType) GetApplyCurrencyTaxesOk() (*bool, bool) {
	if o == nil || IsNil(o.ApplyCurrencyTaxes) {
		return nil, false
	}
	return o.ApplyCurrencyTaxes, true
}

// HasApplyCurrencyTaxes returns a boolean if a field has been set.
func (o *PaymentCriteriaType) HasApplyCurrencyTaxes() bool {
	if o != nil && !IsNil(o.ApplyCurrencyTaxes) {
		return true
	}

	return false
}

// SetApplyCurrencyTaxes gets a reference to the given bool and assigns it to the ApplyCurrencyTaxes field.
func (o *PaymentCriteriaType) SetApplyCurrencyTaxes(v bool) {
	o.ApplyCurrencyTaxes = &v
}

// GetCashierId returns the CashierId field value if set, zero value otherwise.
func (o *PaymentCriteriaType) GetCashierId() float32 {
	if o == nil || IsNil(o.CashierId) {
		var ret float32
		return ret
	}
	return *o.CashierId
}

// GetCashierIdOk returns a tuple with the CashierId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PaymentCriteriaType) GetCashierIdOk() (*float32, bool) {
	if o == nil || IsNil(o.CashierId) {
		return nil, false
	}
	return o.CashierId, true
}

// HasCashierId returns a boolean if a field has been set.
func (o *PaymentCriteriaType) HasCashierId() bool {
	if o != nil && !IsNil(o.CashierId) {
		return true
	}

	return false
}

// SetCashierId gets a reference to the given float32 and assigns it to the CashierId field.
func (o *PaymentCriteriaType) SetCashierId(v float32) {
	o.CashierId = &v
}

// GetChangeDueAmount returns the ChangeDueAmount field value if set, zero value otherwise.
func (o *PaymentCriteriaType) GetChangeDueAmount() CurrencyAmountType {
	if o == nil || IsNil(o.ChangeDueAmount) {
		var ret CurrencyAmountType
		return ret
	}
	return *o.ChangeDueAmount
}

// GetChangeDueAmountOk returns a tuple with the ChangeDueAmount field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PaymentCriteriaType) GetChangeDueAmountOk() (*CurrencyAmountType, bool) {
	if o == nil || IsNil(o.ChangeDueAmount) {
		return nil, false
	}
	return o.ChangeDueAmount, true
}

// HasChangeDueAmount returns a boolean if a field has been set.
func (o *PaymentCriteriaType) HasChangeDueAmount() bool {
	if o != nil && !IsNil(o.ChangeDueAmount) {
		return true
	}

	return false
}

// SetChangeDueAmount gets a reference to the given CurrencyAmountType and assigns it to the ChangeDueAmount field.
func (o *PaymentCriteriaType) SetChangeDueAmount(v CurrencyAmountType) {
	o.ChangeDueAmount = &v
}

// GetComments returns the Comments field value if set, zero value otherwise.
func (o *PaymentCriteriaType) GetComments() string {
	if o == nil || IsNil(o.Comments) {
		var ret string
		return ret
	}
	return *o.Comments
}

// GetCommentsOk returns a tuple with the Comments field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PaymentCriteriaType) GetCommentsOk() (*string, bool) {
	if o == nil || IsNil(o.Comments) {
		return nil, false
	}
	return o.Comments, true
}

// HasComments returns a boolean if a field has been set.
func (o *PaymentCriteriaType) HasComments() bool {
	if o != nil && !IsNil(o.Comments) {
		return true
	}

	return false
}

// SetComments gets a reference to the given string and assigns it to the Comments field.
func (o *PaymentCriteriaType) SetComments(v string) {
	o.Comments = &v
}

// GetCompRedemptions returns the CompRedemptions field value if set, zero value otherwise.
func (o *PaymentCriteriaType) GetCompRedemptions() []RedemptionType {
	if o == nil || IsNil(o.CompRedemptions) {
		var ret []RedemptionType
		return ret
	}
	return o.CompRedemptions
}

// GetCompRedemptionsOk returns a tuple with the CompRedemptions field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PaymentCriteriaType) GetCompRedemptionsOk() ([]RedemptionType, bool) {
	if o == nil || IsNil(o.CompRedemptions) {
		return nil, false
	}
	return o.CompRedemptions, true
}

// HasCompRedemptions returns a boolean if a field has been set.
func (o *PaymentCriteriaType) HasCompRedemptions() bool {
	if o != nil && !IsNil(o.CompRedemptions) {
		return true
	}

	return false
}

// SetCompRedemptions gets a reference to the given []RedemptionType and assigns it to the CompRedemptions field.
func (o *PaymentCriteriaType) SetCompRedemptions(v []RedemptionType) {
	o.CompRedemptions = v
}

// GetCreditablePaymentTaxes returns the CreditablePaymentTaxes field value if set, zero value otherwise.
func (o *PaymentCriteriaType) GetCreditablePaymentTaxes() []PaymentTaxType {
	if o == nil || IsNil(o.CreditablePaymentTaxes) {
		var ret []PaymentTaxType
		return ret
	}
	return o.CreditablePaymentTaxes
}

// GetCreditablePaymentTaxesOk returns a tuple with the CreditablePaymentTaxes field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PaymentCriteriaType) GetCreditablePaymentTaxesOk() ([]PaymentTaxType, bool) {
	if o == nil || IsNil(o.CreditablePaymentTaxes) {
		return nil, false
	}
	return o.CreditablePaymentTaxes, true
}

// HasCreditablePaymentTaxes returns a boolean if a field has been set.
func (o *PaymentCriteriaType) HasCreditablePaymentTaxes() bool {
	if o != nil && !IsNil(o.CreditablePaymentTaxes) {
		return true
	}

	return false
}

// SetCreditablePaymentTaxes gets a reference to the given []PaymentTaxType and assigns it to the CreditablePaymentTaxes field.
func (o *PaymentCriteriaType) SetCreditablePaymentTaxes(v []PaymentTaxType) {
	o.CreditablePaymentTaxes = v
}

// GetFolioWindowNo returns the FolioWindowNo field value if set, zero value otherwise.
func (o *PaymentCriteriaType) GetFolioWindowNo() int32 {
	if o == nil || IsNil(o.FolioWindowNo) {
		var ret int32
		return ret
	}
	return *o.FolioWindowNo
}

// GetFolioWindowNoOk returns a tuple with the FolioWindowNo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PaymentCriteriaType) GetFolioWindowNoOk() (*int32, bool) {
	if o == nil || IsNil(o.FolioWindowNo) {
		return nil, false
	}
	return o.FolioWindowNo, true
}

// HasFolioWindowNo returns a boolean if a field has been set.
func (o *PaymentCriteriaType) HasFolioWindowNo() bool {
	if o != nil && !IsNil(o.FolioWindowNo) {
		return true
	}

	return false
}

// SetFolioWindowNo gets a reference to the given int32 and assigns it to the FolioWindowNo field.
func (o *PaymentCriteriaType) SetFolioWindowNo(v int32) {
	o.FolioWindowNo = &v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *PaymentCriteriaType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PaymentCriteriaType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *PaymentCriteriaType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *PaymentCriteriaType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetManualPaymentTaxInfo returns the ManualPaymentTaxInfo field value if set, zero value otherwise.
func (o *PaymentCriteriaType) GetManualPaymentTaxInfo() PaymentTaxType {
	if o == nil || IsNil(o.ManualPaymentTaxInfo) {
		var ret PaymentTaxType
		return ret
	}
	return *o.ManualPaymentTaxInfo
}

// GetManualPaymentTaxInfoOk returns a tuple with the ManualPaymentTaxInfo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PaymentCriteriaType) GetManualPaymentTaxInfoOk() (*PaymentTaxType, bool) {
	if o == nil || IsNil(o.ManualPaymentTaxInfo) {
		return nil, false
	}
	return o.ManualPaymentTaxInfo, true
}

// HasManualPaymentTaxInfo returns a boolean if a field has been set.
func (o *PaymentCriteriaType) HasManualPaymentTaxInfo() bool {
	if o != nil && !IsNil(o.ManualPaymentTaxInfo) {
		return true
	}

	return false
}

// SetManualPaymentTaxInfo gets a reference to the given PaymentTaxType and assigns it to the ManualPaymentTaxInfo field.
func (o *PaymentCriteriaType) SetManualPaymentTaxInfo(v PaymentTaxType) {
	o.ManualPaymentTaxInfo = &v
}

// GetOverrideARCreditLimit returns the OverrideARCreditLimit field value if set, zero value otherwise.
func (o *PaymentCriteriaType) GetOverrideARCreditLimit() bool {
	if o == nil || IsNil(o.OverrideARCreditLimit) {
		var ret bool
		return ret
	}
	return *o.OverrideARCreditLimit
}

// GetOverrideARCreditLimitOk returns a tuple with the OverrideARCreditLimit field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PaymentCriteriaType) GetOverrideARCreditLimitOk() (*bool, bool) {
	if o == nil || IsNil(o.OverrideARCreditLimit) {
		return nil, false
	}
	return o.OverrideARCreditLimit, true
}

// HasOverrideARCreditLimit returns a boolean if a field has been set.
func (o *PaymentCriteriaType) HasOverrideARCreditLimit() bool {
	if o != nil && !IsNil(o.OverrideARCreditLimit) {
		return true
	}

	return false
}

// SetOverrideARCreditLimit gets a reference to the given bool and assigns it to the OverrideARCreditLimit field.
func (o *PaymentCriteriaType) SetOverrideARCreditLimit(v bool) {
	o.OverrideARCreditLimit = &v
}

// GetOverrideInsufficientCC returns the OverrideInsufficientCC field value if set, zero value otherwise.
func (o *PaymentCriteriaType) GetOverrideInsufficientCC() bool {
	if o == nil || IsNil(o.OverrideInsufficientCC) {
		var ret bool
		return ret
	}
	return *o.OverrideInsufficientCC
}

// GetOverrideInsufficientCCOk returns a tuple with the OverrideInsufficientCC field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PaymentCriteriaType) GetOverrideInsufficientCCOk() (*bool, bool) {
	if o == nil || IsNil(o.OverrideInsufficientCC) {
		return nil, false
	}
	return o.OverrideInsufficientCC, true
}

// HasOverrideInsufficientCC returns a boolean if a field has been set.
func (o *PaymentCriteriaType) HasOverrideInsufficientCC() bool {
	if o != nil && !IsNil(o.OverrideInsufficientCC) {
		return true
	}

	return false
}

// SetOverrideInsufficientCC gets a reference to the given bool and assigns it to the OverrideInsufficientCC field.
func (o *PaymentCriteriaType) SetOverrideInsufficientCC(v bool) {
	o.OverrideInsufficientCC = &v
}

// GetPaymentMethod returns the PaymentMethod field value if set, zero value otherwise.
func (o *PaymentCriteriaType) GetPaymentMethod() CashieringPaymentMethodType {
	if o == nil || IsNil(o.PaymentMethod) {
		var ret CashieringPaymentMethodType
		return ret
	}
	return *o.PaymentMethod
}

// GetPaymentMethodOk returns a tuple with the PaymentMethod field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PaymentCriteriaType) GetPaymentMethodOk() (*CashieringPaymentMethodType, bool) {
	if o == nil || IsNil(o.PaymentMethod) {
		return nil, false
	}
	return o.PaymentMethod, true
}

// HasPaymentMethod returns a boolean if a field has been set.
func (o *PaymentCriteriaType) HasPaymentMethod() bool {
	if o != nil && !IsNil(o.PaymentMethod) {
		return true
	}

	return false
}

// SetPaymentMethod gets a reference to the given CashieringPaymentMethodType and assigns it to the PaymentMethod field.
func (o *PaymentCriteriaType) SetPaymentMethod(v CashieringPaymentMethodType) {
	o.PaymentMethod = &v
}

// GetPostingAmount returns the PostingAmount field value if set, zero value otherwise.
func (o *PaymentCriteriaType) GetPostingAmount() CurrencyAmountType {
	if o == nil || IsNil(o.PostingAmount) {
		var ret CurrencyAmountType
		return ret
	}
	return *o.PostingAmount
}

// GetPostingAmountOk returns a tuple with the PostingAmount field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PaymentCriteriaType) GetPostingAmountOk() (*CurrencyAmountType, bool) {
	if o == nil || IsNil(o.PostingAmount) {
		return nil, false
	}
	return o.PostingAmount, true
}

// HasPostingAmount returns a boolean if a field has been set.
func (o *PaymentCriteriaType) HasPostingAmount() bool {
	if o != nil && !IsNil(o.PostingAmount) {
		return true
	}

	return false
}

// SetPostingAmount gets a reference to the given CurrencyAmountType and assigns it to the PostingAmount field.
func (o *PaymentCriteriaType) SetPostingAmount(v CurrencyAmountType) {
	o.PostingAmount = &v
}

// GetPostingReference returns the PostingReference field value if set, zero value otherwise.
func (o *PaymentCriteriaType) GetPostingReference() string {
	if o == nil || IsNil(o.PostingReference) {
		var ret string
		return ret
	}
	return *o.PostingReference
}

// GetPostingReferenceOk returns a tuple with the PostingReference field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PaymentCriteriaType) GetPostingReferenceOk() (*string, bool) {
	if o == nil || IsNil(o.PostingReference) {
		return nil, false
	}
	return o.PostingReference, true
}

// HasPostingReference returns a boolean if a field has been set.
func (o *PaymentCriteriaType) HasPostingReference() bool {
	if o != nil && !IsNil(o.PostingReference) {
		return true
	}

	return false
}

// SetPostingReference gets a reference to the given string and assigns it to the PostingReference field.
func (o *PaymentCriteriaType) SetPostingReference(v string) {
	o.PostingReference = &v
}

// GetPostingRemark returns the PostingRemark field value if set, zero value otherwise.
func (o *PaymentCriteriaType) GetPostingRemark() string {
	if o == nil || IsNil(o.PostingRemark) {
		var ret string
		return ret
	}
	return *o.PostingRemark
}

// GetPostingRemarkOk returns a tuple with the PostingRemark field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PaymentCriteriaType) GetPostingRemarkOk() (*string, bool) {
	if o == nil || IsNil(o.PostingRemark) {
		return nil, false
	}
	return o.PostingRemark, true
}

// HasPostingRemark returns a boolean if a field has been set.
func (o *PaymentCriteriaType) HasPostingRemark() bool {
	if o != nil && !IsNil(o.PostingRemark) {
		return true
	}

	return false
}

// SetPostingRemark gets a reference to the given string and assigns it to the PostingRemark field.
func (o *PaymentCriteriaType) SetPostingRemark(v string) {
	o.PostingRemark = &v
}

// GetPrepaidCardRedemptions returns the PrepaidCardRedemptions field value if set, zero value otherwise.
func (o *PaymentCriteriaType) GetPrepaidCardRedemptions() []PrepaidCardRedemptionType {
	if o == nil || IsNil(o.PrepaidCardRedemptions) {
		var ret []PrepaidCardRedemptionType
		return ret
	}
	return o.PrepaidCardRedemptions
}

// GetPrepaidCardRedemptionsOk returns a tuple with the PrepaidCardRedemptions field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PaymentCriteriaType) GetPrepaidCardRedemptionsOk() ([]PrepaidCardRedemptionType, bool) {
	if o == nil || IsNil(o.PrepaidCardRedemptions) {
		return nil, false
	}
	return o.PrepaidCardRedemptions, true
}

// HasPrepaidCardRedemptions returns a boolean if a field has been set.
func (o *PaymentCriteriaType) HasPrepaidCardRedemptions() bool {
	if o != nil && !IsNil(o.PrepaidCardRedemptions) {
		return true
	}

	return false
}

// SetPrepaidCardRedemptions gets a reference to the given []PrepaidCardRedemptionType and assigns it to the PrepaidCardRedemptions field.
func (o *PaymentCriteriaType) SetPrepaidCardRedemptions(v []PrepaidCardRedemptionType) {
	o.PrepaidCardRedemptions = v
}

// GetTerminalId returns the TerminalId field value if set, zero value otherwise.
func (o *PaymentCriteriaType) GetTerminalId() string {
	if o == nil || IsNil(o.TerminalId) {
		var ret string
		return ret
	}
	return *o.TerminalId
}

// GetTerminalIdOk returns a tuple with the TerminalId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PaymentCriteriaType) GetTerminalIdOk() (*string, bool) {
	if o == nil || IsNil(o.TerminalId) {
		return nil, false
	}
	return o.TerminalId, true
}

// HasTerminalId returns a boolean if a field has been set.
func (o *PaymentCriteriaType) HasTerminalId() bool {
	if o != nil && !IsNil(o.TerminalId) {
		return true
	}

	return false
}

// SetTerminalId gets a reference to the given string and assigns it to the TerminalId field.
func (o *PaymentCriteriaType) SetTerminalId(v string) {
	o.TerminalId = &v
}

// GetVATOffset returns the VATOffset field value if set, zero value otherwise.
func (o *PaymentCriteriaType) GetVATOffset() bool {
	if o == nil || IsNil(o.VATOffset) {
		var ret bool
		return ret
	}
	return *o.VATOffset
}

// GetVATOffsetOk returns a tuple with the VATOffset field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PaymentCriteriaType) GetVATOffsetOk() (*bool, bool) {
	if o == nil || IsNil(o.VATOffset) {
		return nil, false
	}
	return o.VATOffset, true
}

// HasVATOffset returns a boolean if a field has been set.
func (o *PaymentCriteriaType) HasVATOffset() bool {
	if o != nil && !IsNil(o.VATOffset) {
		return true
	}

	return false
}

// SetVATOffset gets a reference to the given bool and assigns it to the VATOffset field.
func (o *PaymentCriteriaType) SetVATOffset(v bool) {
	o.VATOffset = &v
}

func (o PaymentCriteriaType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o PaymentCriteriaType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Action) {
		toSerialize["action"] = o.Action
	}
	if !IsNil(o.ApplyCCSurcharge) {
		toSerialize["applyCCSurcharge"] = o.ApplyCCSurcharge
	}
	if !IsNil(o.ApplyCurrencyTaxes) {
		toSerialize["applyCurrencyTaxes"] = o.ApplyCurrencyTaxes
	}
	if !IsNil(o.CashierId) {
		toSerialize["cashierId"] = o.CashierId
	}
	if !IsNil(o.ChangeDueAmount) {
		toSerialize["changeDueAmount"] = o.ChangeDueAmount
	}
	if !IsNil(o.Comments) {
		toSerialize["comments"] = o.Comments
	}
	if !IsNil(o.CompRedemptions) {
		toSerialize["compRedemptions"] = o.CompRedemptions
	}
	if !IsNil(o.CreditablePaymentTaxes) {
		toSerialize["creditablePaymentTaxes"] = o.CreditablePaymentTaxes
	}
	if !IsNil(o.FolioWindowNo) {
		toSerialize["folioWindowNo"] = o.FolioWindowNo
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.ManualPaymentTaxInfo) {
		toSerialize["manualPaymentTaxInfo"] = o.ManualPaymentTaxInfo
	}
	if !IsNil(o.OverrideARCreditLimit) {
		toSerialize["overrideARCreditLimit"] = o.OverrideARCreditLimit
	}
	if !IsNil(o.OverrideInsufficientCC) {
		toSerialize["overrideInsufficientCC"] = o.OverrideInsufficientCC
	}
	if !IsNil(o.PaymentMethod) {
		toSerialize["paymentMethod"] = o.PaymentMethod
	}
	if !IsNil(o.PostingAmount) {
		toSerialize["postingAmount"] = o.PostingAmount
	}
	if !IsNil(o.PostingReference) {
		toSerialize["postingReference"] = o.PostingReference
	}
	if !IsNil(o.PostingRemark) {
		toSerialize["postingRemark"] = o.PostingRemark
	}
	if !IsNil(o.PrepaidCardRedemptions) {
		toSerialize["prepaidCardRedemptions"] = o.PrepaidCardRedemptions
	}
	if !IsNil(o.TerminalId) {
		toSerialize["terminalId"] = o.TerminalId
	}
	if !IsNil(o.VATOffset) {
		toSerialize["vATOffset"] = o.VATOffset
	}
	return toSerialize, nil
}

type NullablePaymentCriteriaType struct {
	value *PaymentCriteriaType
	isSet bool
}

func (v NullablePaymentCriteriaType) Get() *PaymentCriteriaType {
	return v.value
}

func (v *NullablePaymentCriteriaType) Set(val *PaymentCriteriaType) {
	v.value = val
	v.isSet = true
}

func (v NullablePaymentCriteriaType) IsSet() bool {
	return v.isSet
}

func (v *NullablePaymentCriteriaType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullablePaymentCriteriaType(val *PaymentCriteriaType) *NullablePaymentCriteriaType {
	return &NullablePaymentCriteriaType{value: val, isSet: true}
}

func (v NullablePaymentCriteriaType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullablePaymentCriteriaType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}



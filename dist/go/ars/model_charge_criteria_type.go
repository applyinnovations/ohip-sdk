/*
OPERA Cloud Accounts Receivables API

APIs to cater for Accounts Receivables functionality in OPERA Cloud. <br /><br The OPERA Cloud Accounts Receivable module enables you to manage debtors' accounts, invoices, and remittance.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package ars

import (
	"encoding/json"
)

// checks if the ChargeCriteriaType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ChargeCriteriaType{}

// ChargeCriteriaType Criteria information for posting a charge.
type ChargeCriteriaType struct {
	// Apply room routing when making this posting.
	ApplyRoutingInstructions *bool `json:"applyRoutingInstructions,omitempty"`
	// Corrected arrangement code from the package associated to this transaction.
	ArrangementCode *string `json:"arrangementCode,omitempty"`
	// Article ID.
	ArticleCode *string `json:"articleCode,omitempty"`
	// True indicates the Transaction Code is allowed to be posted automatically.
	AutoPosting *bool `json:"autoPosting,omitempty"`
	// The Cashier ID of the Cashier who is currently processing the transaction(s).
	CashierId *float32 `json:"cashierId,omitempty"`
	// Indicates the Cheque number.
	CheckNumber *string `json:"checkNumber,omitempty"`
	// Unique Id that references an object uniquely in the system.
	FinancialTransactionIdList []UniqueIDType `json:"financialTransactionIdList,omitempty"`
	FolioWindowNo *int32 `json:"folioWindowNo,omitempty"`
	// Quantity to post to the folio.
	PostingQuantity *int32 `json:"postingQuantity,omitempty"`
	// User-defined posting reference.
	PostingReference *string `json:"postingReference,omitempty"`
	// User-defined posting remark.
	PostingRemark *string `json:"postingRemark,omitempty"`
	Price *CurrencyAmountType `json:"price,omitempty"`
	// Transaction Code to post.
	TransactionCode *string `json:"transactionCode,omitempty"`
	// Use the applicable package allowance when making this posting.
	UsePackageAllowance *bool `json:"usePackageAllowance,omitempty"`
}

// NewChargeCriteriaType instantiates a new ChargeCriteriaType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewChargeCriteriaType() *ChargeCriteriaType {
	this := ChargeCriteriaType{}
	return &this
}

// NewChargeCriteriaTypeWithDefaults instantiates a new ChargeCriteriaType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewChargeCriteriaTypeWithDefaults() *ChargeCriteriaType {
	this := ChargeCriteriaType{}
	return &this
}

// GetApplyRoutingInstructions returns the ApplyRoutingInstructions field value if set, zero value otherwise.
func (o *ChargeCriteriaType) GetApplyRoutingInstructions() bool {
	if o == nil || IsNil(o.ApplyRoutingInstructions) {
		var ret bool
		return ret
	}
	return *o.ApplyRoutingInstructions
}

// GetApplyRoutingInstructionsOk returns a tuple with the ApplyRoutingInstructions field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChargeCriteriaType) GetApplyRoutingInstructionsOk() (*bool, bool) {
	if o == nil || IsNil(o.ApplyRoutingInstructions) {
		return nil, false
	}
	return o.ApplyRoutingInstructions, true
}

// HasApplyRoutingInstructions returns a boolean if a field has been set.
func (o *ChargeCriteriaType) HasApplyRoutingInstructions() bool {
	if o != nil && !IsNil(o.ApplyRoutingInstructions) {
		return true
	}

	return false
}

// SetApplyRoutingInstructions gets a reference to the given bool and assigns it to the ApplyRoutingInstructions field.
func (o *ChargeCriteriaType) SetApplyRoutingInstructions(v bool) {
	o.ApplyRoutingInstructions = &v
}

// GetArrangementCode returns the ArrangementCode field value if set, zero value otherwise.
func (o *ChargeCriteriaType) GetArrangementCode() string {
	if o == nil || IsNil(o.ArrangementCode) {
		var ret string
		return ret
	}
	return *o.ArrangementCode
}

// GetArrangementCodeOk returns a tuple with the ArrangementCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChargeCriteriaType) GetArrangementCodeOk() (*string, bool) {
	if o == nil || IsNil(o.ArrangementCode) {
		return nil, false
	}
	return o.ArrangementCode, true
}

// HasArrangementCode returns a boolean if a field has been set.
func (o *ChargeCriteriaType) HasArrangementCode() bool {
	if o != nil && !IsNil(o.ArrangementCode) {
		return true
	}

	return false
}

// SetArrangementCode gets a reference to the given string and assigns it to the ArrangementCode field.
func (o *ChargeCriteriaType) SetArrangementCode(v string) {
	o.ArrangementCode = &v
}

// GetArticleCode returns the ArticleCode field value if set, zero value otherwise.
func (o *ChargeCriteriaType) GetArticleCode() string {
	if o == nil || IsNil(o.ArticleCode) {
		var ret string
		return ret
	}
	return *o.ArticleCode
}

// GetArticleCodeOk returns a tuple with the ArticleCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChargeCriteriaType) GetArticleCodeOk() (*string, bool) {
	if o == nil || IsNil(o.ArticleCode) {
		return nil, false
	}
	return o.ArticleCode, true
}

// HasArticleCode returns a boolean if a field has been set.
func (o *ChargeCriteriaType) HasArticleCode() bool {
	if o != nil && !IsNil(o.ArticleCode) {
		return true
	}

	return false
}

// SetArticleCode gets a reference to the given string and assigns it to the ArticleCode field.
func (o *ChargeCriteriaType) SetArticleCode(v string) {
	o.ArticleCode = &v
}

// GetAutoPosting returns the AutoPosting field value if set, zero value otherwise.
func (o *ChargeCriteriaType) GetAutoPosting() bool {
	if o == nil || IsNil(o.AutoPosting) {
		var ret bool
		return ret
	}
	return *o.AutoPosting
}

// GetAutoPostingOk returns a tuple with the AutoPosting field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChargeCriteriaType) GetAutoPostingOk() (*bool, bool) {
	if o == nil || IsNil(o.AutoPosting) {
		return nil, false
	}
	return o.AutoPosting, true
}

// HasAutoPosting returns a boolean if a field has been set.
func (o *ChargeCriteriaType) HasAutoPosting() bool {
	if o != nil && !IsNil(o.AutoPosting) {
		return true
	}

	return false
}

// SetAutoPosting gets a reference to the given bool and assigns it to the AutoPosting field.
func (o *ChargeCriteriaType) SetAutoPosting(v bool) {
	o.AutoPosting = &v
}

// GetCashierId returns the CashierId field value if set, zero value otherwise.
func (o *ChargeCriteriaType) GetCashierId() float32 {
	if o == nil || IsNil(o.CashierId) {
		var ret float32
		return ret
	}
	return *o.CashierId
}

// GetCashierIdOk returns a tuple with the CashierId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChargeCriteriaType) GetCashierIdOk() (*float32, bool) {
	if o == nil || IsNil(o.CashierId) {
		return nil, false
	}
	return o.CashierId, true
}

// HasCashierId returns a boolean if a field has been set.
func (o *ChargeCriteriaType) HasCashierId() bool {
	if o != nil && !IsNil(o.CashierId) {
		return true
	}

	return false
}

// SetCashierId gets a reference to the given float32 and assigns it to the CashierId field.
func (o *ChargeCriteriaType) SetCashierId(v float32) {
	o.CashierId = &v
}

// GetCheckNumber returns the CheckNumber field value if set, zero value otherwise.
func (o *ChargeCriteriaType) GetCheckNumber() string {
	if o == nil || IsNil(o.CheckNumber) {
		var ret string
		return ret
	}
	return *o.CheckNumber
}

// GetCheckNumberOk returns a tuple with the CheckNumber field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChargeCriteriaType) GetCheckNumberOk() (*string, bool) {
	if o == nil || IsNil(o.CheckNumber) {
		return nil, false
	}
	return o.CheckNumber, true
}

// HasCheckNumber returns a boolean if a field has been set.
func (o *ChargeCriteriaType) HasCheckNumber() bool {
	if o != nil && !IsNil(o.CheckNumber) {
		return true
	}

	return false
}

// SetCheckNumber gets a reference to the given string and assigns it to the CheckNumber field.
func (o *ChargeCriteriaType) SetCheckNumber(v string) {
	o.CheckNumber = &v
}

// GetFinancialTransactionIdList returns the FinancialTransactionIdList field value if set, zero value otherwise.
func (o *ChargeCriteriaType) GetFinancialTransactionIdList() []UniqueIDType {
	if o == nil || IsNil(o.FinancialTransactionIdList) {
		var ret []UniqueIDType
		return ret
	}
	return o.FinancialTransactionIdList
}

// GetFinancialTransactionIdListOk returns a tuple with the FinancialTransactionIdList field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChargeCriteriaType) GetFinancialTransactionIdListOk() ([]UniqueIDType, bool) {
	if o == nil || IsNil(o.FinancialTransactionIdList) {
		return nil, false
	}
	return o.FinancialTransactionIdList, true
}

// HasFinancialTransactionIdList returns a boolean if a field has been set.
func (o *ChargeCriteriaType) HasFinancialTransactionIdList() bool {
	if o != nil && !IsNil(o.FinancialTransactionIdList) {
		return true
	}

	return false
}

// SetFinancialTransactionIdList gets a reference to the given []UniqueIDType and assigns it to the FinancialTransactionIdList field.
func (o *ChargeCriteriaType) SetFinancialTransactionIdList(v []UniqueIDType) {
	o.FinancialTransactionIdList = v
}

// GetFolioWindowNo returns the FolioWindowNo field value if set, zero value otherwise.
func (o *ChargeCriteriaType) GetFolioWindowNo() int32 {
	if o == nil || IsNil(o.FolioWindowNo) {
		var ret int32
		return ret
	}
	return *o.FolioWindowNo
}

// GetFolioWindowNoOk returns a tuple with the FolioWindowNo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChargeCriteriaType) GetFolioWindowNoOk() (*int32, bool) {
	if o == nil || IsNil(o.FolioWindowNo) {
		return nil, false
	}
	return o.FolioWindowNo, true
}

// HasFolioWindowNo returns a boolean if a field has been set.
func (o *ChargeCriteriaType) HasFolioWindowNo() bool {
	if o != nil && !IsNil(o.FolioWindowNo) {
		return true
	}

	return false
}

// SetFolioWindowNo gets a reference to the given int32 and assigns it to the FolioWindowNo field.
func (o *ChargeCriteriaType) SetFolioWindowNo(v int32) {
	o.FolioWindowNo = &v
}

// GetPostingQuantity returns the PostingQuantity field value if set, zero value otherwise.
func (o *ChargeCriteriaType) GetPostingQuantity() int32 {
	if o == nil || IsNil(o.PostingQuantity) {
		var ret int32
		return ret
	}
	return *o.PostingQuantity
}

// GetPostingQuantityOk returns a tuple with the PostingQuantity field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChargeCriteriaType) GetPostingQuantityOk() (*int32, bool) {
	if o == nil || IsNil(o.PostingQuantity) {
		return nil, false
	}
	return o.PostingQuantity, true
}

// HasPostingQuantity returns a boolean if a field has been set.
func (o *ChargeCriteriaType) HasPostingQuantity() bool {
	if o != nil && !IsNil(o.PostingQuantity) {
		return true
	}

	return false
}

// SetPostingQuantity gets a reference to the given int32 and assigns it to the PostingQuantity field.
func (o *ChargeCriteriaType) SetPostingQuantity(v int32) {
	o.PostingQuantity = &v
}

// GetPostingReference returns the PostingReference field value if set, zero value otherwise.
func (o *ChargeCriteriaType) GetPostingReference() string {
	if o == nil || IsNil(o.PostingReference) {
		var ret string
		return ret
	}
	return *o.PostingReference
}

// GetPostingReferenceOk returns a tuple with the PostingReference field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChargeCriteriaType) GetPostingReferenceOk() (*string, bool) {
	if o == nil || IsNil(o.PostingReference) {
		return nil, false
	}
	return o.PostingReference, true
}

// HasPostingReference returns a boolean if a field has been set.
func (o *ChargeCriteriaType) HasPostingReference() bool {
	if o != nil && !IsNil(o.PostingReference) {
		return true
	}

	return false
}

// SetPostingReference gets a reference to the given string and assigns it to the PostingReference field.
func (o *ChargeCriteriaType) SetPostingReference(v string) {
	o.PostingReference = &v
}

// GetPostingRemark returns the PostingRemark field value if set, zero value otherwise.
func (o *ChargeCriteriaType) GetPostingRemark() string {
	if o == nil || IsNil(o.PostingRemark) {
		var ret string
		return ret
	}
	return *o.PostingRemark
}

// GetPostingRemarkOk returns a tuple with the PostingRemark field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChargeCriteriaType) GetPostingRemarkOk() (*string, bool) {
	if o == nil || IsNil(o.PostingRemark) {
		return nil, false
	}
	return o.PostingRemark, true
}

// HasPostingRemark returns a boolean if a field has been set.
func (o *ChargeCriteriaType) HasPostingRemark() bool {
	if o != nil && !IsNil(o.PostingRemark) {
		return true
	}

	return false
}

// SetPostingRemark gets a reference to the given string and assigns it to the PostingRemark field.
func (o *ChargeCriteriaType) SetPostingRemark(v string) {
	o.PostingRemark = &v
}

// GetPrice returns the Price field value if set, zero value otherwise.
func (o *ChargeCriteriaType) GetPrice() CurrencyAmountType {
	if o == nil || IsNil(o.Price) {
		var ret CurrencyAmountType
		return ret
	}
	return *o.Price
}

// GetPriceOk returns a tuple with the Price field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChargeCriteriaType) GetPriceOk() (*CurrencyAmountType, bool) {
	if o == nil || IsNil(o.Price) {
		return nil, false
	}
	return o.Price, true
}

// HasPrice returns a boolean if a field has been set.
func (o *ChargeCriteriaType) HasPrice() bool {
	if o != nil && !IsNil(o.Price) {
		return true
	}

	return false
}

// SetPrice gets a reference to the given CurrencyAmountType and assigns it to the Price field.
func (o *ChargeCriteriaType) SetPrice(v CurrencyAmountType) {
	o.Price = &v
}

// GetTransactionCode returns the TransactionCode field value if set, zero value otherwise.
func (o *ChargeCriteriaType) GetTransactionCode() string {
	if o == nil || IsNil(o.TransactionCode) {
		var ret string
		return ret
	}
	return *o.TransactionCode
}

// GetTransactionCodeOk returns a tuple with the TransactionCode field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChargeCriteriaType) GetTransactionCodeOk() (*string, bool) {
	if o == nil || IsNil(o.TransactionCode) {
		return nil, false
	}
	return o.TransactionCode, true
}

// HasTransactionCode returns a boolean if a field has been set.
func (o *ChargeCriteriaType) HasTransactionCode() bool {
	if o != nil && !IsNil(o.TransactionCode) {
		return true
	}

	return false
}

// SetTransactionCode gets a reference to the given string and assigns it to the TransactionCode field.
func (o *ChargeCriteriaType) SetTransactionCode(v string) {
	o.TransactionCode = &v
}

// GetUsePackageAllowance returns the UsePackageAllowance field value if set, zero value otherwise.
func (o *ChargeCriteriaType) GetUsePackageAllowance() bool {
	if o == nil || IsNil(o.UsePackageAllowance) {
		var ret bool
		return ret
	}
	return *o.UsePackageAllowance
}

// GetUsePackageAllowanceOk returns a tuple with the UsePackageAllowance field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ChargeCriteriaType) GetUsePackageAllowanceOk() (*bool, bool) {
	if o == nil || IsNil(o.UsePackageAllowance) {
		return nil, false
	}
	return o.UsePackageAllowance, true
}

// HasUsePackageAllowance returns a boolean if a field has been set.
func (o *ChargeCriteriaType) HasUsePackageAllowance() bool {
	if o != nil && !IsNil(o.UsePackageAllowance) {
		return true
	}

	return false
}

// SetUsePackageAllowance gets a reference to the given bool and assigns it to the UsePackageAllowance field.
func (o *ChargeCriteriaType) SetUsePackageAllowance(v bool) {
	o.UsePackageAllowance = &v
}

func (o ChargeCriteriaType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ChargeCriteriaType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.ApplyRoutingInstructions) {
		toSerialize["applyRoutingInstructions"] = o.ApplyRoutingInstructions
	}
	if !IsNil(o.ArrangementCode) {
		toSerialize["arrangementCode"] = o.ArrangementCode
	}
	if !IsNil(o.ArticleCode) {
		toSerialize["articleCode"] = o.ArticleCode
	}
	if !IsNil(o.AutoPosting) {
		toSerialize["autoPosting"] = o.AutoPosting
	}
	if !IsNil(o.CashierId) {
		toSerialize["cashierId"] = o.CashierId
	}
	if !IsNil(o.CheckNumber) {
		toSerialize["checkNumber"] = o.CheckNumber
	}
	if !IsNil(o.FinancialTransactionIdList) {
		toSerialize["financialTransactionIdList"] = o.FinancialTransactionIdList
	}
	if !IsNil(o.FolioWindowNo) {
		toSerialize["folioWindowNo"] = o.FolioWindowNo
	}
	if !IsNil(o.PostingQuantity) {
		toSerialize["postingQuantity"] = o.PostingQuantity
	}
	if !IsNil(o.PostingReference) {
		toSerialize["postingReference"] = o.PostingReference
	}
	if !IsNil(o.PostingRemark) {
		toSerialize["postingRemark"] = o.PostingRemark
	}
	if !IsNil(o.Price) {
		toSerialize["price"] = o.Price
	}
	if !IsNil(o.TransactionCode) {
		toSerialize["transactionCode"] = o.TransactionCode
	}
	if !IsNil(o.UsePackageAllowance) {
		toSerialize["usePackageAllowance"] = o.UsePackageAllowance
	}
	return toSerialize, nil
}

type NullableChargeCriteriaType struct {
	value *ChargeCriteriaType
	isSet bool
}

func (v NullableChargeCriteriaType) Get() *ChargeCriteriaType {
	return v.value
}

func (v *NullableChargeCriteriaType) Set(val *ChargeCriteriaType) {
	v.value = val
	v.isSet = true
}

func (v NullableChargeCriteriaType) IsSet() bool {
	return v.isSet
}

func (v *NullableChargeCriteriaType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableChargeCriteriaType(val *ChargeCriteriaType) *NullableChargeCriteriaType {
	return &NullableChargeCriteriaType{value: val, isSet: true}
}

func (v NullableChargeCriteriaType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableChargeCriteriaType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}



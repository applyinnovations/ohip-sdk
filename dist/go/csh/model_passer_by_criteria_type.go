/*
OPERA Cloud Cashiering API

APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package csh

import (
	"encoding/json"
)

// checks if the PasserByCriteriaType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &PasserByCriteriaType{}

// PasserByCriteriaType Criteria type for posting charges.
type PasserByCriteriaType struct {
	// The Cashier ID of the Cashier who is currently processing the transaction(s).
	CashierId *float32 `json:"cashierId,omitempty"`
	// Collection of Charges to be posted.
	Charges []ChargeCriteriaType `json:"charges,omitempty"`
	FiscalFolioInfo *FiscalServiceType `json:"fiscalFolioInfo,omitempty"`
	// Applicable for Fiscal Terminal. The ID of the terminal where the fiscal device is connected.
	FiscalTerminalId *string `json:"fiscalTerminalId,omitempty"`
	// Custom Folio Name Value Informatoin to be saved
	FolioNameValue []NameValueHeaderDetailType `json:"folioNameValue,omitempty"`
	// Property where the charges are to be posted.
	HotelId *string `json:"hotelId,omitempty"`
	// Date of the Audit. This is used when postings are being created using the Income Audit functionality.
	IncomeAuditDate *string `json:"incomeAuditDate,omitempty"`
	// The payment information to be posted.
	Payments []PaymentCriteriaType `json:"payments,omitempty"`
	ProfileId *ProfileId `json:"profileId,omitempty"`
	Reason *FolioReasonType `json:"reason,omitempty"`
	// Transaction service type which the Folio is being associated.
	TrxServiceType *string `json:"trxServiceType,omitempty"`
}

// NewPasserByCriteriaType instantiates a new PasserByCriteriaType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewPasserByCriteriaType() *PasserByCriteriaType {
	this := PasserByCriteriaType{}
	return &this
}

// NewPasserByCriteriaTypeWithDefaults instantiates a new PasserByCriteriaType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewPasserByCriteriaTypeWithDefaults() *PasserByCriteriaType {
	this := PasserByCriteriaType{}
	return &this
}

// GetCashierId returns the CashierId field value if set, zero value otherwise.
func (o *PasserByCriteriaType) GetCashierId() float32 {
	if o == nil || IsNil(o.CashierId) {
		var ret float32
		return ret
	}
	return *o.CashierId
}

// GetCashierIdOk returns a tuple with the CashierId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PasserByCriteriaType) GetCashierIdOk() (*float32, bool) {
	if o == nil || IsNil(o.CashierId) {
		return nil, false
	}
	return o.CashierId, true
}

// HasCashierId returns a boolean if a field has been set.
func (o *PasserByCriteriaType) HasCashierId() bool {
	if o != nil && !IsNil(o.CashierId) {
		return true
	}

	return false
}

// SetCashierId gets a reference to the given float32 and assigns it to the CashierId field.
func (o *PasserByCriteriaType) SetCashierId(v float32) {
	o.CashierId = &v
}

// GetCharges returns the Charges field value if set, zero value otherwise.
func (o *PasserByCriteriaType) GetCharges() []ChargeCriteriaType {
	if o == nil || IsNil(o.Charges) {
		var ret []ChargeCriteriaType
		return ret
	}
	return o.Charges
}

// GetChargesOk returns a tuple with the Charges field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PasserByCriteriaType) GetChargesOk() ([]ChargeCriteriaType, bool) {
	if o == nil || IsNil(o.Charges) {
		return nil, false
	}
	return o.Charges, true
}

// HasCharges returns a boolean if a field has been set.
func (o *PasserByCriteriaType) HasCharges() bool {
	if o != nil && !IsNil(o.Charges) {
		return true
	}

	return false
}

// SetCharges gets a reference to the given []ChargeCriteriaType and assigns it to the Charges field.
func (o *PasserByCriteriaType) SetCharges(v []ChargeCriteriaType) {
	o.Charges = v
}

// GetFiscalFolioInfo returns the FiscalFolioInfo field value if set, zero value otherwise.
func (o *PasserByCriteriaType) GetFiscalFolioInfo() FiscalServiceType {
	if o == nil || IsNil(o.FiscalFolioInfo) {
		var ret FiscalServiceType
		return ret
	}
	return *o.FiscalFolioInfo
}

// GetFiscalFolioInfoOk returns a tuple with the FiscalFolioInfo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PasserByCriteriaType) GetFiscalFolioInfoOk() (*FiscalServiceType, bool) {
	if o == nil || IsNil(o.FiscalFolioInfo) {
		return nil, false
	}
	return o.FiscalFolioInfo, true
}

// HasFiscalFolioInfo returns a boolean if a field has been set.
func (o *PasserByCriteriaType) HasFiscalFolioInfo() bool {
	if o != nil && !IsNil(o.FiscalFolioInfo) {
		return true
	}

	return false
}

// SetFiscalFolioInfo gets a reference to the given FiscalServiceType and assigns it to the FiscalFolioInfo field.
func (o *PasserByCriteriaType) SetFiscalFolioInfo(v FiscalServiceType) {
	o.FiscalFolioInfo = &v
}

// GetFiscalTerminalId returns the FiscalTerminalId field value if set, zero value otherwise.
func (o *PasserByCriteriaType) GetFiscalTerminalId() string {
	if o == nil || IsNil(o.FiscalTerminalId) {
		var ret string
		return ret
	}
	return *o.FiscalTerminalId
}

// GetFiscalTerminalIdOk returns a tuple with the FiscalTerminalId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PasserByCriteriaType) GetFiscalTerminalIdOk() (*string, bool) {
	if o == nil || IsNil(o.FiscalTerminalId) {
		return nil, false
	}
	return o.FiscalTerminalId, true
}

// HasFiscalTerminalId returns a boolean if a field has been set.
func (o *PasserByCriteriaType) HasFiscalTerminalId() bool {
	if o != nil && !IsNil(o.FiscalTerminalId) {
		return true
	}

	return false
}

// SetFiscalTerminalId gets a reference to the given string and assigns it to the FiscalTerminalId field.
func (o *PasserByCriteriaType) SetFiscalTerminalId(v string) {
	o.FiscalTerminalId = &v
}

// GetFolioNameValue returns the FolioNameValue field value if set, zero value otherwise.
func (o *PasserByCriteriaType) GetFolioNameValue() []NameValueHeaderDetailType {
	if o == nil || IsNil(o.FolioNameValue) {
		var ret []NameValueHeaderDetailType
		return ret
	}
	return o.FolioNameValue
}

// GetFolioNameValueOk returns a tuple with the FolioNameValue field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PasserByCriteriaType) GetFolioNameValueOk() ([]NameValueHeaderDetailType, bool) {
	if o == nil || IsNil(o.FolioNameValue) {
		return nil, false
	}
	return o.FolioNameValue, true
}

// HasFolioNameValue returns a boolean if a field has been set.
func (o *PasserByCriteriaType) HasFolioNameValue() bool {
	if o != nil && !IsNil(o.FolioNameValue) {
		return true
	}

	return false
}

// SetFolioNameValue gets a reference to the given []NameValueHeaderDetailType and assigns it to the FolioNameValue field.
func (o *PasserByCriteriaType) SetFolioNameValue(v []NameValueHeaderDetailType) {
	o.FolioNameValue = v
}

// GetHotelId returns the HotelId field value if set, zero value otherwise.
func (o *PasserByCriteriaType) GetHotelId() string {
	if o == nil || IsNil(o.HotelId) {
		var ret string
		return ret
	}
	return *o.HotelId
}

// GetHotelIdOk returns a tuple with the HotelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PasserByCriteriaType) GetHotelIdOk() (*string, bool) {
	if o == nil || IsNil(o.HotelId) {
		return nil, false
	}
	return o.HotelId, true
}

// HasHotelId returns a boolean if a field has been set.
func (o *PasserByCriteriaType) HasHotelId() bool {
	if o != nil && !IsNil(o.HotelId) {
		return true
	}

	return false
}

// SetHotelId gets a reference to the given string and assigns it to the HotelId field.
func (o *PasserByCriteriaType) SetHotelId(v string) {
	o.HotelId = &v
}

// GetIncomeAuditDate returns the IncomeAuditDate field value if set, zero value otherwise.
func (o *PasserByCriteriaType) GetIncomeAuditDate() string {
	if o == nil || IsNil(o.IncomeAuditDate) {
		var ret string
		return ret
	}
	return *o.IncomeAuditDate
}

// GetIncomeAuditDateOk returns a tuple with the IncomeAuditDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PasserByCriteriaType) GetIncomeAuditDateOk() (*string, bool) {
	if o == nil || IsNil(o.IncomeAuditDate) {
		return nil, false
	}
	return o.IncomeAuditDate, true
}

// HasIncomeAuditDate returns a boolean if a field has been set.
func (o *PasserByCriteriaType) HasIncomeAuditDate() bool {
	if o != nil && !IsNil(o.IncomeAuditDate) {
		return true
	}

	return false
}

// SetIncomeAuditDate gets a reference to the given string and assigns it to the IncomeAuditDate field.
func (o *PasserByCriteriaType) SetIncomeAuditDate(v string) {
	o.IncomeAuditDate = &v
}

// GetPayments returns the Payments field value if set, zero value otherwise.
func (o *PasserByCriteriaType) GetPayments() []PaymentCriteriaType {
	if o == nil || IsNil(o.Payments) {
		var ret []PaymentCriteriaType
		return ret
	}
	return o.Payments
}

// GetPaymentsOk returns a tuple with the Payments field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PasserByCriteriaType) GetPaymentsOk() ([]PaymentCriteriaType, bool) {
	if o == nil || IsNil(o.Payments) {
		return nil, false
	}
	return o.Payments, true
}

// HasPayments returns a boolean if a field has been set.
func (o *PasserByCriteriaType) HasPayments() bool {
	if o != nil && !IsNil(o.Payments) {
		return true
	}

	return false
}

// SetPayments gets a reference to the given []PaymentCriteriaType and assigns it to the Payments field.
func (o *PasserByCriteriaType) SetPayments(v []PaymentCriteriaType) {
	o.Payments = v
}

// GetProfileId returns the ProfileId field value if set, zero value otherwise.
func (o *PasserByCriteriaType) GetProfileId() ProfileId {
	if o == nil || IsNil(o.ProfileId) {
		var ret ProfileId
		return ret
	}
	return *o.ProfileId
}

// GetProfileIdOk returns a tuple with the ProfileId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PasserByCriteriaType) GetProfileIdOk() (*ProfileId, bool) {
	if o == nil || IsNil(o.ProfileId) {
		return nil, false
	}
	return o.ProfileId, true
}

// HasProfileId returns a boolean if a field has been set.
func (o *PasserByCriteriaType) HasProfileId() bool {
	if o != nil && !IsNil(o.ProfileId) {
		return true
	}

	return false
}

// SetProfileId gets a reference to the given ProfileId and assigns it to the ProfileId field.
func (o *PasserByCriteriaType) SetProfileId(v ProfileId) {
	o.ProfileId = &v
}

// GetReason returns the Reason field value if set, zero value otherwise.
func (o *PasserByCriteriaType) GetReason() FolioReasonType {
	if o == nil || IsNil(o.Reason) {
		var ret FolioReasonType
		return ret
	}
	return *o.Reason
}

// GetReasonOk returns a tuple with the Reason field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PasserByCriteriaType) GetReasonOk() (*FolioReasonType, bool) {
	if o == nil || IsNil(o.Reason) {
		return nil, false
	}
	return o.Reason, true
}

// HasReason returns a boolean if a field has been set.
func (o *PasserByCriteriaType) HasReason() bool {
	if o != nil && !IsNil(o.Reason) {
		return true
	}

	return false
}

// SetReason gets a reference to the given FolioReasonType and assigns it to the Reason field.
func (o *PasserByCriteriaType) SetReason(v FolioReasonType) {
	o.Reason = &v
}

// GetTrxServiceType returns the TrxServiceType field value if set, zero value otherwise.
func (o *PasserByCriteriaType) GetTrxServiceType() string {
	if o == nil || IsNil(o.TrxServiceType) {
		var ret string
		return ret
	}
	return *o.TrxServiceType
}

// GetTrxServiceTypeOk returns a tuple with the TrxServiceType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PasserByCriteriaType) GetTrxServiceTypeOk() (*string, bool) {
	if o == nil || IsNil(o.TrxServiceType) {
		return nil, false
	}
	return o.TrxServiceType, true
}

// HasTrxServiceType returns a boolean if a field has been set.
func (o *PasserByCriteriaType) HasTrxServiceType() bool {
	if o != nil && !IsNil(o.TrxServiceType) {
		return true
	}

	return false
}

// SetTrxServiceType gets a reference to the given string and assigns it to the TrxServiceType field.
func (o *PasserByCriteriaType) SetTrxServiceType(v string) {
	o.TrxServiceType = &v
}

func (o PasserByCriteriaType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o PasserByCriteriaType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.CashierId) {
		toSerialize["cashierId"] = o.CashierId
	}
	if !IsNil(o.Charges) {
		toSerialize["charges"] = o.Charges
	}
	if !IsNil(o.FiscalFolioInfo) {
		toSerialize["fiscalFolioInfo"] = o.FiscalFolioInfo
	}
	if !IsNil(o.FiscalTerminalId) {
		toSerialize["fiscalTerminalId"] = o.FiscalTerminalId
	}
	if !IsNil(o.FolioNameValue) {
		toSerialize["folioNameValue"] = o.FolioNameValue
	}
	if !IsNil(o.HotelId) {
		toSerialize["hotelId"] = o.HotelId
	}
	if !IsNil(o.IncomeAuditDate) {
		toSerialize["incomeAuditDate"] = o.IncomeAuditDate
	}
	if !IsNil(o.Payments) {
		toSerialize["payments"] = o.Payments
	}
	if !IsNil(o.ProfileId) {
		toSerialize["profileId"] = o.ProfileId
	}
	if !IsNil(o.Reason) {
		toSerialize["reason"] = o.Reason
	}
	if !IsNil(o.TrxServiceType) {
		toSerialize["trxServiceType"] = o.TrxServiceType
	}
	return toSerialize, nil
}

type NullablePasserByCriteriaType struct {
	value *PasserByCriteriaType
	isSet bool
}

func (v NullablePasserByCriteriaType) Get() *PasserByCriteriaType {
	return v.value
}

func (v *NullablePasserByCriteriaType) Set(val *PasserByCriteriaType) {
	v.value = val
	v.isSet = true
}

func (v NullablePasserByCriteriaType) IsSet() bool {
	return v.isSet
}

func (v *NullablePasserByCriteriaType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullablePasserByCriteriaType(val *PasserByCriteriaType) *NullablePasserByCriteriaType {
	return &NullablePasserByCriteriaType{value: val, isSet: true}
}

func (v NullablePasserByCriteriaType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullablePasserByCriteriaType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}



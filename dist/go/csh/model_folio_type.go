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

// checks if the FolioType type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &FolioType{}

// FolioType Represents a single page in a reservation's ledger which will contain transactions and payee information.
type FolioType struct {
	// Flag to check Folio Conversion Allowed.
	AllowConvertFolioYn *bool `json:"allowConvertFolioYn,omitempty"`
	// The ending value of the date range.
	End *string `json:"end,omitempty"`
	// The Fiscal Bill number of this posting
	FiscalBillNo *string `json:"fiscalBillNo,omitempty"`
	FolioAmount *CurrencyAmountType `json:"folioAmount,omitempty"`
	// Date of Folio Generation.
	FolioDate *string `json:"folioDate,omitempty"`
	// Folio Number.
	FolioNo *float32 `json:"folioNo,omitempty"`
	// The folio number with prefix value.
	FolioNoWithPrefix *string `json:"folioNoWithPrefix,omitempty"`
	// Unique sequence number. Used to identify the current folio tax record.
	FolioSeqNo *float32 `json:"folioSeqNo,omitempty"`
	FolioStatus *FolioStatusType `json:"folioStatus,omitempty"`
	// The name of the Folio Type used for the Folio Number sequence.
	FolioTypeName *string `json:"folioTypeName,omitempty"`
	// Internal window ID which is unique to the reservation. This ID can only be used for reference.
	InternalFolioWindowID *string `json:"internalFolioWindowID,omitempty"`
	// Invoice No after the folio is generated. Same invoice number may be referred in multiple folios
	InvoiceNo *float32 `json:"invoiceNo,omitempty"`
	PayeeInfo *PayeeInfoType `json:"payeeInfo,omitempty"`
	// List of postings.
	Postings []SummaryPostingType `json:"postings,omitempty"`
	// Folio Revison number.
	RevisionNo *float32 `json:"revisionNo,omitempty"`
	// The starting value of the date range.
	Start *string `json:"start,omitempty"`
}

// NewFolioType instantiates a new FolioType object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewFolioType() *FolioType {
	this := FolioType{}
	return &this
}

// NewFolioTypeWithDefaults instantiates a new FolioType object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewFolioTypeWithDefaults() *FolioType {
	this := FolioType{}
	return &this
}

// GetAllowConvertFolioYn returns the AllowConvertFolioYn field value if set, zero value otherwise.
func (o *FolioType) GetAllowConvertFolioYn() bool {
	if o == nil || IsNil(o.AllowConvertFolioYn) {
		var ret bool
		return ret
	}
	return *o.AllowConvertFolioYn
}

// GetAllowConvertFolioYnOk returns a tuple with the AllowConvertFolioYn field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FolioType) GetAllowConvertFolioYnOk() (*bool, bool) {
	if o == nil || IsNil(o.AllowConvertFolioYn) {
		return nil, false
	}
	return o.AllowConvertFolioYn, true
}

// HasAllowConvertFolioYn returns a boolean if a field has been set.
func (o *FolioType) HasAllowConvertFolioYn() bool {
	if o != nil && !IsNil(o.AllowConvertFolioYn) {
		return true
	}

	return false
}

// SetAllowConvertFolioYn gets a reference to the given bool and assigns it to the AllowConvertFolioYn field.
func (o *FolioType) SetAllowConvertFolioYn(v bool) {
	o.AllowConvertFolioYn = &v
}

// GetEnd returns the End field value if set, zero value otherwise.
func (o *FolioType) GetEnd() string {
	if o == nil || IsNil(o.End) {
		var ret string
		return ret
	}
	return *o.End
}

// GetEndOk returns a tuple with the End field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FolioType) GetEndOk() (*string, bool) {
	if o == nil || IsNil(o.End) {
		return nil, false
	}
	return o.End, true
}

// HasEnd returns a boolean if a field has been set.
func (o *FolioType) HasEnd() bool {
	if o != nil && !IsNil(o.End) {
		return true
	}

	return false
}

// SetEnd gets a reference to the given string and assigns it to the End field.
func (o *FolioType) SetEnd(v string) {
	o.End = &v
}

// GetFiscalBillNo returns the FiscalBillNo field value if set, zero value otherwise.
func (o *FolioType) GetFiscalBillNo() string {
	if o == nil || IsNil(o.FiscalBillNo) {
		var ret string
		return ret
	}
	return *o.FiscalBillNo
}

// GetFiscalBillNoOk returns a tuple with the FiscalBillNo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FolioType) GetFiscalBillNoOk() (*string, bool) {
	if o == nil || IsNil(o.FiscalBillNo) {
		return nil, false
	}
	return o.FiscalBillNo, true
}

// HasFiscalBillNo returns a boolean if a field has been set.
func (o *FolioType) HasFiscalBillNo() bool {
	if o != nil && !IsNil(o.FiscalBillNo) {
		return true
	}

	return false
}

// SetFiscalBillNo gets a reference to the given string and assigns it to the FiscalBillNo field.
func (o *FolioType) SetFiscalBillNo(v string) {
	o.FiscalBillNo = &v
}

// GetFolioAmount returns the FolioAmount field value if set, zero value otherwise.
func (o *FolioType) GetFolioAmount() CurrencyAmountType {
	if o == nil || IsNil(o.FolioAmount) {
		var ret CurrencyAmountType
		return ret
	}
	return *o.FolioAmount
}

// GetFolioAmountOk returns a tuple with the FolioAmount field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FolioType) GetFolioAmountOk() (*CurrencyAmountType, bool) {
	if o == nil || IsNil(o.FolioAmount) {
		return nil, false
	}
	return o.FolioAmount, true
}

// HasFolioAmount returns a boolean if a field has been set.
func (o *FolioType) HasFolioAmount() bool {
	if o != nil && !IsNil(o.FolioAmount) {
		return true
	}

	return false
}

// SetFolioAmount gets a reference to the given CurrencyAmountType and assigns it to the FolioAmount field.
func (o *FolioType) SetFolioAmount(v CurrencyAmountType) {
	o.FolioAmount = &v
}

// GetFolioDate returns the FolioDate field value if set, zero value otherwise.
func (o *FolioType) GetFolioDate() string {
	if o == nil || IsNil(o.FolioDate) {
		var ret string
		return ret
	}
	return *o.FolioDate
}

// GetFolioDateOk returns a tuple with the FolioDate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FolioType) GetFolioDateOk() (*string, bool) {
	if o == nil || IsNil(o.FolioDate) {
		return nil, false
	}
	return o.FolioDate, true
}

// HasFolioDate returns a boolean if a field has been set.
func (o *FolioType) HasFolioDate() bool {
	if o != nil && !IsNil(o.FolioDate) {
		return true
	}

	return false
}

// SetFolioDate gets a reference to the given string and assigns it to the FolioDate field.
func (o *FolioType) SetFolioDate(v string) {
	o.FolioDate = &v
}

// GetFolioNo returns the FolioNo field value if set, zero value otherwise.
func (o *FolioType) GetFolioNo() float32 {
	if o == nil || IsNil(o.FolioNo) {
		var ret float32
		return ret
	}
	return *o.FolioNo
}

// GetFolioNoOk returns a tuple with the FolioNo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FolioType) GetFolioNoOk() (*float32, bool) {
	if o == nil || IsNil(o.FolioNo) {
		return nil, false
	}
	return o.FolioNo, true
}

// HasFolioNo returns a boolean if a field has been set.
func (o *FolioType) HasFolioNo() bool {
	if o != nil && !IsNil(o.FolioNo) {
		return true
	}

	return false
}

// SetFolioNo gets a reference to the given float32 and assigns it to the FolioNo field.
func (o *FolioType) SetFolioNo(v float32) {
	o.FolioNo = &v
}

// GetFolioNoWithPrefix returns the FolioNoWithPrefix field value if set, zero value otherwise.
func (o *FolioType) GetFolioNoWithPrefix() string {
	if o == nil || IsNil(o.FolioNoWithPrefix) {
		var ret string
		return ret
	}
	return *o.FolioNoWithPrefix
}

// GetFolioNoWithPrefixOk returns a tuple with the FolioNoWithPrefix field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FolioType) GetFolioNoWithPrefixOk() (*string, bool) {
	if o == nil || IsNil(o.FolioNoWithPrefix) {
		return nil, false
	}
	return o.FolioNoWithPrefix, true
}

// HasFolioNoWithPrefix returns a boolean if a field has been set.
func (o *FolioType) HasFolioNoWithPrefix() bool {
	if o != nil && !IsNil(o.FolioNoWithPrefix) {
		return true
	}

	return false
}

// SetFolioNoWithPrefix gets a reference to the given string and assigns it to the FolioNoWithPrefix field.
func (o *FolioType) SetFolioNoWithPrefix(v string) {
	o.FolioNoWithPrefix = &v
}

// GetFolioSeqNo returns the FolioSeqNo field value if set, zero value otherwise.
func (o *FolioType) GetFolioSeqNo() float32 {
	if o == nil || IsNil(o.FolioSeqNo) {
		var ret float32
		return ret
	}
	return *o.FolioSeqNo
}

// GetFolioSeqNoOk returns a tuple with the FolioSeqNo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FolioType) GetFolioSeqNoOk() (*float32, bool) {
	if o == nil || IsNil(o.FolioSeqNo) {
		return nil, false
	}
	return o.FolioSeqNo, true
}

// HasFolioSeqNo returns a boolean if a field has been set.
func (o *FolioType) HasFolioSeqNo() bool {
	if o != nil && !IsNil(o.FolioSeqNo) {
		return true
	}

	return false
}

// SetFolioSeqNo gets a reference to the given float32 and assigns it to the FolioSeqNo field.
func (o *FolioType) SetFolioSeqNo(v float32) {
	o.FolioSeqNo = &v
}

// GetFolioStatus returns the FolioStatus field value if set, zero value otherwise.
func (o *FolioType) GetFolioStatus() FolioStatusType {
	if o == nil || IsNil(o.FolioStatus) {
		var ret FolioStatusType
		return ret
	}
	return *o.FolioStatus
}

// GetFolioStatusOk returns a tuple with the FolioStatus field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FolioType) GetFolioStatusOk() (*FolioStatusType, bool) {
	if o == nil || IsNil(o.FolioStatus) {
		return nil, false
	}
	return o.FolioStatus, true
}

// HasFolioStatus returns a boolean if a field has been set.
func (o *FolioType) HasFolioStatus() bool {
	if o != nil && !IsNil(o.FolioStatus) {
		return true
	}

	return false
}

// SetFolioStatus gets a reference to the given FolioStatusType and assigns it to the FolioStatus field.
func (o *FolioType) SetFolioStatus(v FolioStatusType) {
	o.FolioStatus = &v
}

// GetFolioTypeName returns the FolioTypeName field value if set, zero value otherwise.
func (o *FolioType) GetFolioTypeName() string {
	if o == nil || IsNil(o.FolioTypeName) {
		var ret string
		return ret
	}
	return *o.FolioTypeName
}

// GetFolioTypeNameOk returns a tuple with the FolioTypeName field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FolioType) GetFolioTypeNameOk() (*string, bool) {
	if o == nil || IsNil(o.FolioTypeName) {
		return nil, false
	}
	return o.FolioTypeName, true
}

// HasFolioTypeName returns a boolean if a field has been set.
func (o *FolioType) HasFolioTypeName() bool {
	if o != nil && !IsNil(o.FolioTypeName) {
		return true
	}

	return false
}

// SetFolioTypeName gets a reference to the given string and assigns it to the FolioTypeName field.
func (o *FolioType) SetFolioTypeName(v string) {
	o.FolioTypeName = &v
}

// GetInternalFolioWindowID returns the InternalFolioWindowID field value if set, zero value otherwise.
func (o *FolioType) GetInternalFolioWindowID() string {
	if o == nil || IsNil(o.InternalFolioWindowID) {
		var ret string
		return ret
	}
	return *o.InternalFolioWindowID
}

// GetInternalFolioWindowIDOk returns a tuple with the InternalFolioWindowID field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FolioType) GetInternalFolioWindowIDOk() (*string, bool) {
	if o == nil || IsNil(o.InternalFolioWindowID) {
		return nil, false
	}
	return o.InternalFolioWindowID, true
}

// HasInternalFolioWindowID returns a boolean if a field has been set.
func (o *FolioType) HasInternalFolioWindowID() bool {
	if o != nil && !IsNil(o.InternalFolioWindowID) {
		return true
	}

	return false
}

// SetInternalFolioWindowID gets a reference to the given string and assigns it to the InternalFolioWindowID field.
func (o *FolioType) SetInternalFolioWindowID(v string) {
	o.InternalFolioWindowID = &v
}

// GetInvoiceNo returns the InvoiceNo field value if set, zero value otherwise.
func (o *FolioType) GetInvoiceNo() float32 {
	if o == nil || IsNil(o.InvoiceNo) {
		var ret float32
		return ret
	}
	return *o.InvoiceNo
}

// GetInvoiceNoOk returns a tuple with the InvoiceNo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FolioType) GetInvoiceNoOk() (*float32, bool) {
	if o == nil || IsNil(o.InvoiceNo) {
		return nil, false
	}
	return o.InvoiceNo, true
}

// HasInvoiceNo returns a boolean if a field has been set.
func (o *FolioType) HasInvoiceNo() bool {
	if o != nil && !IsNil(o.InvoiceNo) {
		return true
	}

	return false
}

// SetInvoiceNo gets a reference to the given float32 and assigns it to the InvoiceNo field.
func (o *FolioType) SetInvoiceNo(v float32) {
	o.InvoiceNo = &v
}

// GetPayeeInfo returns the PayeeInfo field value if set, zero value otherwise.
func (o *FolioType) GetPayeeInfo() PayeeInfoType {
	if o == nil || IsNil(o.PayeeInfo) {
		var ret PayeeInfoType
		return ret
	}
	return *o.PayeeInfo
}

// GetPayeeInfoOk returns a tuple with the PayeeInfo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FolioType) GetPayeeInfoOk() (*PayeeInfoType, bool) {
	if o == nil || IsNil(o.PayeeInfo) {
		return nil, false
	}
	return o.PayeeInfo, true
}

// HasPayeeInfo returns a boolean if a field has been set.
func (o *FolioType) HasPayeeInfo() bool {
	if o != nil && !IsNil(o.PayeeInfo) {
		return true
	}

	return false
}

// SetPayeeInfo gets a reference to the given PayeeInfoType and assigns it to the PayeeInfo field.
func (o *FolioType) SetPayeeInfo(v PayeeInfoType) {
	o.PayeeInfo = &v
}

// GetPostings returns the Postings field value if set, zero value otherwise.
func (o *FolioType) GetPostings() []SummaryPostingType {
	if o == nil || IsNil(o.Postings) {
		var ret []SummaryPostingType
		return ret
	}
	return o.Postings
}

// GetPostingsOk returns a tuple with the Postings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FolioType) GetPostingsOk() ([]SummaryPostingType, bool) {
	if o == nil || IsNil(o.Postings) {
		return nil, false
	}
	return o.Postings, true
}

// HasPostings returns a boolean if a field has been set.
func (o *FolioType) HasPostings() bool {
	if o != nil && !IsNil(o.Postings) {
		return true
	}

	return false
}

// SetPostings gets a reference to the given []SummaryPostingType and assigns it to the Postings field.
func (o *FolioType) SetPostings(v []SummaryPostingType) {
	o.Postings = v
}

// GetRevisionNo returns the RevisionNo field value if set, zero value otherwise.
func (o *FolioType) GetRevisionNo() float32 {
	if o == nil || IsNil(o.RevisionNo) {
		var ret float32
		return ret
	}
	return *o.RevisionNo
}

// GetRevisionNoOk returns a tuple with the RevisionNo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FolioType) GetRevisionNoOk() (*float32, bool) {
	if o == nil || IsNil(o.RevisionNo) {
		return nil, false
	}
	return o.RevisionNo, true
}

// HasRevisionNo returns a boolean if a field has been set.
func (o *FolioType) HasRevisionNo() bool {
	if o != nil && !IsNil(o.RevisionNo) {
		return true
	}

	return false
}

// SetRevisionNo gets a reference to the given float32 and assigns it to the RevisionNo field.
func (o *FolioType) SetRevisionNo(v float32) {
	o.RevisionNo = &v
}

// GetStart returns the Start field value if set, zero value otherwise.
func (o *FolioType) GetStart() string {
	if o == nil || IsNil(o.Start) {
		var ret string
		return ret
	}
	return *o.Start
}

// GetStartOk returns a tuple with the Start field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FolioType) GetStartOk() (*string, bool) {
	if o == nil || IsNil(o.Start) {
		return nil, false
	}
	return o.Start, true
}

// HasStart returns a boolean if a field has been set.
func (o *FolioType) HasStart() bool {
	if o != nil && !IsNil(o.Start) {
		return true
	}

	return false
}

// SetStart gets a reference to the given string and assigns it to the Start field.
func (o *FolioType) SetStart(v string) {
	o.Start = &v
}

func (o FolioType) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o FolioType) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.AllowConvertFolioYn) {
		toSerialize["allowConvertFolioYn"] = o.AllowConvertFolioYn
	}
	if !IsNil(o.End) {
		toSerialize["end"] = o.End
	}
	if !IsNil(o.FiscalBillNo) {
		toSerialize["fiscalBillNo"] = o.FiscalBillNo
	}
	if !IsNil(o.FolioAmount) {
		toSerialize["folioAmount"] = o.FolioAmount
	}
	if !IsNil(o.FolioDate) {
		toSerialize["folioDate"] = o.FolioDate
	}
	if !IsNil(o.FolioNo) {
		toSerialize["folioNo"] = o.FolioNo
	}
	if !IsNil(o.FolioNoWithPrefix) {
		toSerialize["folioNoWithPrefix"] = o.FolioNoWithPrefix
	}
	if !IsNil(o.FolioSeqNo) {
		toSerialize["folioSeqNo"] = o.FolioSeqNo
	}
	if !IsNil(o.FolioStatus) {
		toSerialize["folioStatus"] = o.FolioStatus
	}
	if !IsNil(o.FolioTypeName) {
		toSerialize["folioTypeName"] = o.FolioTypeName
	}
	if !IsNil(o.InternalFolioWindowID) {
		toSerialize["internalFolioWindowID"] = o.InternalFolioWindowID
	}
	if !IsNil(o.InvoiceNo) {
		toSerialize["invoiceNo"] = o.InvoiceNo
	}
	if !IsNil(o.PayeeInfo) {
		toSerialize["payeeInfo"] = o.PayeeInfo
	}
	if !IsNil(o.Postings) {
		toSerialize["postings"] = o.Postings
	}
	if !IsNil(o.RevisionNo) {
		toSerialize["revisionNo"] = o.RevisionNo
	}
	if !IsNil(o.Start) {
		toSerialize["start"] = o.Start
	}
	return toSerialize, nil
}

type NullableFolioType struct {
	value *FolioType
	isSet bool
}

func (v NullableFolioType) Get() *FolioType {
	return v.value
}

func (v *NullableFolioType) Set(val *FolioType) {
	v.value = val
	v.isSet = true
}

func (v NullableFolioType) IsSet() bool {
	return v.isSet
}

func (v *NullableFolioType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableFolioType(val *FolioType) *NullableFolioType {
	return &NullableFolioType{value: val, isSet: true}
}

func (v NullableFolioType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableFolioType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


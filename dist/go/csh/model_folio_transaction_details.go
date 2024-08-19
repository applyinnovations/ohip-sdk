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

// checks if the FolioTransactionDetails type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &FolioTransactionDetails{}

// FolioTransactionDetails Response for the fetch transaction details request. Detail information regarding the folio transaction will be returned
type FolioTransactionDetails struct {
	Links []InstanceLink `json:"links,omitempty"`
	// Details of the transaction(Posting).
	Transactions []DetailPostingType `json:"transactions,omitempty"`
	// List of Transaction codes info.
	TrxCodesInfo []TrxInfoType `json:"trxCodesInfo,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewFolioTransactionDetails instantiates a new FolioTransactionDetails object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewFolioTransactionDetails() *FolioTransactionDetails {
	this := FolioTransactionDetails{}
	return &this
}

// NewFolioTransactionDetailsWithDefaults instantiates a new FolioTransactionDetails object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewFolioTransactionDetailsWithDefaults() *FolioTransactionDetails {
	this := FolioTransactionDetails{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *FolioTransactionDetails) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FolioTransactionDetails) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *FolioTransactionDetails) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *FolioTransactionDetails) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetTransactions returns the Transactions field value if set, zero value otherwise.
func (o *FolioTransactionDetails) GetTransactions() []DetailPostingType {
	if o == nil || IsNil(o.Transactions) {
		var ret []DetailPostingType
		return ret
	}
	return o.Transactions
}

// GetTransactionsOk returns a tuple with the Transactions field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FolioTransactionDetails) GetTransactionsOk() ([]DetailPostingType, bool) {
	if o == nil || IsNil(o.Transactions) {
		return nil, false
	}
	return o.Transactions, true
}

// HasTransactions returns a boolean if a field has been set.
func (o *FolioTransactionDetails) HasTransactions() bool {
	if o != nil && !IsNil(o.Transactions) {
		return true
	}

	return false
}

// SetTransactions gets a reference to the given []DetailPostingType and assigns it to the Transactions field.
func (o *FolioTransactionDetails) SetTransactions(v []DetailPostingType) {
	o.Transactions = v
}

// GetTrxCodesInfo returns the TrxCodesInfo field value if set, zero value otherwise.
func (o *FolioTransactionDetails) GetTrxCodesInfo() []TrxInfoType {
	if o == nil || IsNil(o.TrxCodesInfo) {
		var ret []TrxInfoType
		return ret
	}
	return o.TrxCodesInfo
}

// GetTrxCodesInfoOk returns a tuple with the TrxCodesInfo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FolioTransactionDetails) GetTrxCodesInfoOk() ([]TrxInfoType, bool) {
	if o == nil || IsNil(o.TrxCodesInfo) {
		return nil, false
	}
	return o.TrxCodesInfo, true
}

// HasTrxCodesInfo returns a boolean if a field has been set.
func (o *FolioTransactionDetails) HasTrxCodesInfo() bool {
	if o != nil && !IsNil(o.TrxCodesInfo) {
		return true
	}

	return false
}

// SetTrxCodesInfo gets a reference to the given []TrxInfoType and assigns it to the TrxCodesInfo field.
func (o *FolioTransactionDetails) SetTrxCodesInfo(v []TrxInfoType) {
	o.TrxCodesInfo = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *FolioTransactionDetails) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FolioTransactionDetails) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *FolioTransactionDetails) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *FolioTransactionDetails) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o FolioTransactionDetails) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o FolioTransactionDetails) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Transactions) {
		toSerialize["transactions"] = o.Transactions
	}
	if !IsNil(o.TrxCodesInfo) {
		toSerialize["trxCodesInfo"] = o.TrxCodesInfo
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableFolioTransactionDetails struct {
	value *FolioTransactionDetails
	isSet bool
}

func (v NullableFolioTransactionDetails) Get() *FolioTransactionDetails {
	return v.value
}

func (v *NullableFolioTransactionDetails) Set(val *FolioTransactionDetails) {
	v.value = val
	v.isSet = true
}

func (v NullableFolioTransactionDetails) IsSet() bool {
	return v.isSet
}

func (v *NullableFolioTransactionDetails) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableFolioTransactionDetails(val *FolioTransactionDetails) *NullableFolioTransactionDetails {
	return &NullableFolioTransactionDetails{value: val, isSet: true}
}

func (v NullableFolioTransactionDetails) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableFolioTransactionDetails) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}



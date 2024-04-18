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

// checks if the PostedDepositFolio type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &PostedDepositFolio{}

// PostedDepositFolio Response to the request to create a Deposit Folio for a reservation.
type PostedDepositFolio struct {
	// A List of Deposit Payments.
	Deposits []DepositPostingType `json:"deposits,omitempty"`
	// Information regarding the new Deposit Folio created.
	FolioWindow []FolioWindowType `json:"folioWindow,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// List of Transaction codes info.
	TrxCodesInfo []TrxInfoType `json:"trxCodesInfo,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewPostedDepositFolio instantiates a new PostedDepositFolio object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewPostedDepositFolio() *PostedDepositFolio {
	this := PostedDepositFolio{}
	return &this
}

// NewPostedDepositFolioWithDefaults instantiates a new PostedDepositFolio object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewPostedDepositFolioWithDefaults() *PostedDepositFolio {
	this := PostedDepositFolio{}
	return &this
}

// GetDeposits returns the Deposits field value if set, zero value otherwise.
func (o *PostedDepositFolio) GetDeposits() []DepositPostingType {
	if o == nil || IsNil(o.Deposits) {
		var ret []DepositPostingType
		return ret
	}
	return o.Deposits
}

// GetDepositsOk returns a tuple with the Deposits field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PostedDepositFolio) GetDepositsOk() ([]DepositPostingType, bool) {
	if o == nil || IsNil(o.Deposits) {
		return nil, false
	}
	return o.Deposits, true
}

// HasDeposits returns a boolean if a field has been set.
func (o *PostedDepositFolio) HasDeposits() bool {
	if o != nil && !IsNil(o.Deposits) {
		return true
	}

	return false
}

// SetDeposits gets a reference to the given []DepositPostingType and assigns it to the Deposits field.
func (o *PostedDepositFolio) SetDeposits(v []DepositPostingType) {
	o.Deposits = v
}

// GetFolioWindow returns the FolioWindow field value if set, zero value otherwise.
func (o *PostedDepositFolio) GetFolioWindow() []FolioWindowType {
	if o == nil || IsNil(o.FolioWindow) {
		var ret []FolioWindowType
		return ret
	}
	return o.FolioWindow
}

// GetFolioWindowOk returns a tuple with the FolioWindow field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PostedDepositFolio) GetFolioWindowOk() ([]FolioWindowType, bool) {
	if o == nil || IsNil(o.FolioWindow) {
		return nil, false
	}
	return o.FolioWindow, true
}

// HasFolioWindow returns a boolean if a field has been set.
func (o *PostedDepositFolio) HasFolioWindow() bool {
	if o != nil && !IsNil(o.FolioWindow) {
		return true
	}

	return false
}

// SetFolioWindow gets a reference to the given []FolioWindowType and assigns it to the FolioWindow field.
func (o *PostedDepositFolio) SetFolioWindow(v []FolioWindowType) {
	o.FolioWindow = v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *PostedDepositFolio) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PostedDepositFolio) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *PostedDepositFolio) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *PostedDepositFolio) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetTrxCodesInfo returns the TrxCodesInfo field value if set, zero value otherwise.
func (o *PostedDepositFolio) GetTrxCodesInfo() []TrxInfoType {
	if o == nil || IsNil(o.TrxCodesInfo) {
		var ret []TrxInfoType
		return ret
	}
	return o.TrxCodesInfo
}

// GetTrxCodesInfoOk returns a tuple with the TrxCodesInfo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PostedDepositFolio) GetTrxCodesInfoOk() ([]TrxInfoType, bool) {
	if o == nil || IsNil(o.TrxCodesInfo) {
		return nil, false
	}
	return o.TrxCodesInfo, true
}

// HasTrxCodesInfo returns a boolean if a field has been set.
func (o *PostedDepositFolio) HasTrxCodesInfo() bool {
	if o != nil && !IsNil(o.TrxCodesInfo) {
		return true
	}

	return false
}

// SetTrxCodesInfo gets a reference to the given []TrxInfoType and assigns it to the TrxCodesInfo field.
func (o *PostedDepositFolio) SetTrxCodesInfo(v []TrxInfoType) {
	o.TrxCodesInfo = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *PostedDepositFolio) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PostedDepositFolio) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *PostedDepositFolio) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *PostedDepositFolio) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o PostedDepositFolio) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o PostedDepositFolio) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Deposits) {
		toSerialize["deposits"] = o.Deposits
	}
	if !IsNil(o.FolioWindow) {
		toSerialize["folioWindow"] = o.FolioWindow
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.TrxCodesInfo) {
		toSerialize["trxCodesInfo"] = o.TrxCodesInfo
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullablePostedDepositFolio struct {
	value *PostedDepositFolio
	isSet bool
}

func (v NullablePostedDepositFolio) Get() *PostedDepositFolio {
	return v.value
}

func (v *NullablePostedDepositFolio) Set(val *PostedDepositFolio) {
	v.value = val
	v.isSet = true
}

func (v NullablePostedDepositFolio) IsSet() bool {
	return v.isSet
}

func (v *NullablePostedDepositFolio) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullablePostedDepositFolio(val *PostedDepositFolio) *NullablePostedDepositFolio {
	return &NullablePostedDepositFolio{value: val, isSet: true}
}

func (v NullablePostedDepositFolio) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullablePostedDepositFolio) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


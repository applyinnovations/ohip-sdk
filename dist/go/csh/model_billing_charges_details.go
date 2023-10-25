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

// checks if the BillingChargesDetails type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &BillingChargesDetails{}

// BillingChargesDetails Response notifying if the posting of a charge to a reservation was successful.
type BillingChargesDetails struct {
	Links []InstanceLink `json:"links,omitempty"`
	// List of postings.
	Postings []SummaryPostingType `json:"postings,omitempty"`
	// List of Transaction codes info.
	TrxCodesInfo []TrxInfoType `json:"trxCodesInfo,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewBillingChargesDetails instantiates a new BillingChargesDetails object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewBillingChargesDetails() *BillingChargesDetails {
	this := BillingChargesDetails{}
	return &this
}

// NewBillingChargesDetailsWithDefaults instantiates a new BillingChargesDetails object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewBillingChargesDetailsWithDefaults() *BillingChargesDetails {
	this := BillingChargesDetails{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *BillingChargesDetails) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BillingChargesDetails) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *BillingChargesDetails) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *BillingChargesDetails) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetPostings returns the Postings field value if set, zero value otherwise.
func (o *BillingChargesDetails) GetPostings() []SummaryPostingType {
	if o == nil || IsNil(o.Postings) {
		var ret []SummaryPostingType
		return ret
	}
	return o.Postings
}

// GetPostingsOk returns a tuple with the Postings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BillingChargesDetails) GetPostingsOk() ([]SummaryPostingType, bool) {
	if o == nil || IsNil(o.Postings) {
		return nil, false
	}
	return o.Postings, true
}

// HasPostings returns a boolean if a field has been set.
func (o *BillingChargesDetails) HasPostings() bool {
	if o != nil && !IsNil(o.Postings) {
		return true
	}

	return false
}

// SetPostings gets a reference to the given []SummaryPostingType and assigns it to the Postings field.
func (o *BillingChargesDetails) SetPostings(v []SummaryPostingType) {
	o.Postings = v
}

// GetTrxCodesInfo returns the TrxCodesInfo field value if set, zero value otherwise.
func (o *BillingChargesDetails) GetTrxCodesInfo() []TrxInfoType {
	if o == nil || IsNil(o.TrxCodesInfo) {
		var ret []TrxInfoType
		return ret
	}
	return o.TrxCodesInfo
}

// GetTrxCodesInfoOk returns a tuple with the TrxCodesInfo field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BillingChargesDetails) GetTrxCodesInfoOk() ([]TrxInfoType, bool) {
	if o == nil || IsNil(o.TrxCodesInfo) {
		return nil, false
	}
	return o.TrxCodesInfo, true
}

// HasTrxCodesInfo returns a boolean if a field has been set.
func (o *BillingChargesDetails) HasTrxCodesInfo() bool {
	if o != nil && !IsNil(o.TrxCodesInfo) {
		return true
	}

	return false
}

// SetTrxCodesInfo gets a reference to the given []TrxInfoType and assigns it to the TrxCodesInfo field.
func (o *BillingChargesDetails) SetTrxCodesInfo(v []TrxInfoType) {
	o.TrxCodesInfo = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *BillingChargesDetails) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BillingChargesDetails) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *BillingChargesDetails) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *BillingChargesDetails) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o BillingChargesDetails) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o BillingChargesDetails) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Postings) {
		toSerialize["postings"] = o.Postings
	}
	if !IsNil(o.TrxCodesInfo) {
		toSerialize["trxCodesInfo"] = o.TrxCodesInfo
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableBillingChargesDetails struct {
	value *BillingChargesDetails
	isSet bool
}

func (v NullableBillingChargesDetails) Get() *BillingChargesDetails {
	return v.value
}

func (v *NullableBillingChargesDetails) Set(val *BillingChargesDetails) {
	v.value = val
	v.isSet = true
}

func (v NullableBillingChargesDetails) IsSet() bool {
	return v.isSet
}

func (v *NullableBillingChargesDetails) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableBillingChargesDetails(val *BillingChargesDetails) *NullableBillingChargesDetails {
	return &NullableBillingChargesDetails{value: val, isSet: true}
}

func (v NullableBillingChargesDetails) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableBillingChargesDetails) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}



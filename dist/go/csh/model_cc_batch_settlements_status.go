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

// checks if the CcBatchSettlementsStatus type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &CcBatchSettlementsStatus{}

// CcBatchSettlementsStatus Response for credit card settlements status.
type CcBatchSettlementsStatus struct {
	BatchSettlementsStatus *CCBatchSettlementsStatusType `json:"batchSettlementsStatus,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewCcBatchSettlementsStatus instantiates a new CcBatchSettlementsStatus object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCcBatchSettlementsStatus() *CcBatchSettlementsStatus {
	this := CcBatchSettlementsStatus{}
	return &this
}

// NewCcBatchSettlementsStatusWithDefaults instantiates a new CcBatchSettlementsStatus object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCcBatchSettlementsStatusWithDefaults() *CcBatchSettlementsStatus {
	this := CcBatchSettlementsStatus{}
	return &this
}

// GetBatchSettlementsStatus returns the BatchSettlementsStatus field value if set, zero value otherwise.
func (o *CcBatchSettlementsStatus) GetBatchSettlementsStatus() CCBatchSettlementsStatusType {
	if o == nil || IsNil(o.BatchSettlementsStatus) {
		var ret CCBatchSettlementsStatusType
		return ret
	}
	return *o.BatchSettlementsStatus
}

// GetBatchSettlementsStatusOk returns a tuple with the BatchSettlementsStatus field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CcBatchSettlementsStatus) GetBatchSettlementsStatusOk() (*CCBatchSettlementsStatusType, bool) {
	if o == nil || IsNil(o.BatchSettlementsStatus) {
		return nil, false
	}
	return o.BatchSettlementsStatus, true
}

// HasBatchSettlementsStatus returns a boolean if a field has been set.
func (o *CcBatchSettlementsStatus) HasBatchSettlementsStatus() bool {
	if o != nil && !IsNil(o.BatchSettlementsStatus) {
		return true
	}

	return false
}

// SetBatchSettlementsStatus gets a reference to the given CCBatchSettlementsStatusType and assigns it to the BatchSettlementsStatus field.
func (o *CcBatchSettlementsStatus) SetBatchSettlementsStatus(v CCBatchSettlementsStatusType) {
	o.BatchSettlementsStatus = &v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *CcBatchSettlementsStatus) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CcBatchSettlementsStatus) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *CcBatchSettlementsStatus) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *CcBatchSettlementsStatus) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *CcBatchSettlementsStatus) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CcBatchSettlementsStatus) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *CcBatchSettlementsStatus) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *CcBatchSettlementsStatus) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o CcBatchSettlementsStatus) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o CcBatchSettlementsStatus) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.BatchSettlementsStatus) {
		toSerialize["batchSettlementsStatus"] = o.BatchSettlementsStatus
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableCcBatchSettlementsStatus struct {
	value *CcBatchSettlementsStatus
	isSet bool
}

func (v NullableCcBatchSettlementsStatus) Get() *CcBatchSettlementsStatus {
	return v.value
}

func (v *NullableCcBatchSettlementsStatus) Set(val *CcBatchSettlementsStatus) {
	v.value = val
	v.isSet = true
}

func (v NullableCcBatchSettlementsStatus) IsSet() bool {
	return v.isSet
}

func (v *NullableCcBatchSettlementsStatus) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCcBatchSettlementsStatus(val *CcBatchSettlementsStatus) *NullableCcBatchSettlementsStatus {
	return &NullableCcBatchSettlementsStatus{value: val, isSet: true}
}

func (v NullableCcBatchSettlementsStatus) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCcBatchSettlementsStatus) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}



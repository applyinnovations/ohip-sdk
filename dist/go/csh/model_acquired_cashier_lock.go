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

// checks if the AcquiredCashierLock type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &AcquiredCashierLock{}

// AcquiredCashierLock Response for the Cashier Lock request.
type AcquiredCashierLock struct {
	AcquiredCashierLock *OperaRecordLock `json:"acquiredCashierLock,omitempty"`
	ExistingCashierLock *OperaRecordLock `json:"existingCashierLock,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewAcquiredCashierLock instantiates a new AcquiredCashierLock object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewAcquiredCashierLock() *AcquiredCashierLock {
	this := AcquiredCashierLock{}
	return &this
}

// NewAcquiredCashierLockWithDefaults instantiates a new AcquiredCashierLock object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewAcquiredCashierLockWithDefaults() *AcquiredCashierLock {
	this := AcquiredCashierLock{}
	return &this
}

// GetAcquiredCashierLock returns the AcquiredCashierLock field value if set, zero value otherwise.
func (o *AcquiredCashierLock) GetAcquiredCashierLock() OperaRecordLock {
	if o == nil || IsNil(o.AcquiredCashierLock) {
		var ret OperaRecordLock
		return ret
	}
	return *o.AcquiredCashierLock
}

// GetAcquiredCashierLockOk returns a tuple with the AcquiredCashierLock field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AcquiredCashierLock) GetAcquiredCashierLockOk() (*OperaRecordLock, bool) {
	if o == nil || IsNil(o.AcquiredCashierLock) {
		return nil, false
	}
	return o.AcquiredCashierLock, true
}

// HasAcquiredCashierLock returns a boolean if a field has been set.
func (o *AcquiredCashierLock) HasAcquiredCashierLock() bool {
	if o != nil && !IsNil(o.AcquiredCashierLock) {
		return true
	}

	return false
}

// SetAcquiredCashierLock gets a reference to the given OperaRecordLock and assigns it to the AcquiredCashierLock field.
func (o *AcquiredCashierLock) SetAcquiredCashierLock(v OperaRecordLock) {
	o.AcquiredCashierLock = &v
}

// GetExistingCashierLock returns the ExistingCashierLock field value if set, zero value otherwise.
func (o *AcquiredCashierLock) GetExistingCashierLock() OperaRecordLock {
	if o == nil || IsNil(o.ExistingCashierLock) {
		var ret OperaRecordLock
		return ret
	}
	return *o.ExistingCashierLock
}

// GetExistingCashierLockOk returns a tuple with the ExistingCashierLock field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AcquiredCashierLock) GetExistingCashierLockOk() (*OperaRecordLock, bool) {
	if o == nil || IsNil(o.ExistingCashierLock) {
		return nil, false
	}
	return o.ExistingCashierLock, true
}

// HasExistingCashierLock returns a boolean if a field has been set.
func (o *AcquiredCashierLock) HasExistingCashierLock() bool {
	if o != nil && !IsNil(o.ExistingCashierLock) {
		return true
	}

	return false
}

// SetExistingCashierLock gets a reference to the given OperaRecordLock and assigns it to the ExistingCashierLock field.
func (o *AcquiredCashierLock) SetExistingCashierLock(v OperaRecordLock) {
	o.ExistingCashierLock = &v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *AcquiredCashierLock) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AcquiredCashierLock) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *AcquiredCashierLock) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *AcquiredCashierLock) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *AcquiredCashierLock) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *AcquiredCashierLock) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *AcquiredCashierLock) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *AcquiredCashierLock) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o AcquiredCashierLock) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o AcquiredCashierLock) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.AcquiredCashierLock) {
		toSerialize["acquiredCashierLock"] = o.AcquiredCashierLock
	}
	if !IsNil(o.ExistingCashierLock) {
		toSerialize["existingCashierLock"] = o.ExistingCashierLock
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableAcquiredCashierLock struct {
	value *AcquiredCashierLock
	isSet bool
}

func (v NullableAcquiredCashierLock) Get() *AcquiredCashierLock {
	return v.value
}

func (v *NullableAcquiredCashierLock) Set(val *AcquiredCashierLock) {
	v.value = val
	v.isSet = true
}

func (v NullableAcquiredCashierLock) IsSet() bool {
	return v.isSet
}

func (v *NullableAcquiredCashierLock) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableAcquiredCashierLock(val *AcquiredCashierLock) *NullableAcquiredCashierLock {
	return &NullableAcquiredCashierLock{value: val, isSet: true}
}

func (v NullableAcquiredCashierLock) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableAcquiredCashierLock) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}



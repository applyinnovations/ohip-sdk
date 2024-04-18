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

// checks if the CashierLockCriteriaToExtend type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &CashierLockCriteriaToExtend{}

// CashierLockCriteriaToExtend Operation for extending the lifetime of a lock on a cashier.
type CashierLockCriteriaToExtend struct {
	// The number of seconds to add to the lock's validity time.
	AdditionalTimeToLive *float32 `json:"additionalTimeToLive,omitempty"`
	// The Cashier Lock Handle to pass along with operation which required cashier to be locked.
	CashierLockHandle *float32 `json:"cashierLockHandle,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewCashierLockCriteriaToExtend instantiates a new CashierLockCriteriaToExtend object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCashierLockCriteriaToExtend() *CashierLockCriteriaToExtend {
	this := CashierLockCriteriaToExtend{}
	return &this
}

// NewCashierLockCriteriaToExtendWithDefaults instantiates a new CashierLockCriteriaToExtend object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCashierLockCriteriaToExtendWithDefaults() *CashierLockCriteriaToExtend {
	this := CashierLockCriteriaToExtend{}
	return &this
}

// GetAdditionalTimeToLive returns the AdditionalTimeToLive field value if set, zero value otherwise.
func (o *CashierLockCriteriaToExtend) GetAdditionalTimeToLive() float32 {
	if o == nil || IsNil(o.AdditionalTimeToLive) {
		var ret float32
		return ret
	}
	return *o.AdditionalTimeToLive
}

// GetAdditionalTimeToLiveOk returns a tuple with the AdditionalTimeToLive field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CashierLockCriteriaToExtend) GetAdditionalTimeToLiveOk() (*float32, bool) {
	if o == nil || IsNil(o.AdditionalTimeToLive) {
		return nil, false
	}
	return o.AdditionalTimeToLive, true
}

// HasAdditionalTimeToLive returns a boolean if a field has been set.
func (o *CashierLockCriteriaToExtend) HasAdditionalTimeToLive() bool {
	if o != nil && !IsNil(o.AdditionalTimeToLive) {
		return true
	}

	return false
}

// SetAdditionalTimeToLive gets a reference to the given float32 and assigns it to the AdditionalTimeToLive field.
func (o *CashierLockCriteriaToExtend) SetAdditionalTimeToLive(v float32) {
	o.AdditionalTimeToLive = &v
}

// GetCashierLockHandle returns the CashierLockHandle field value if set, zero value otherwise.
func (o *CashierLockCriteriaToExtend) GetCashierLockHandle() float32 {
	if o == nil || IsNil(o.CashierLockHandle) {
		var ret float32
		return ret
	}
	return *o.CashierLockHandle
}

// GetCashierLockHandleOk returns a tuple with the CashierLockHandle field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CashierLockCriteriaToExtend) GetCashierLockHandleOk() (*float32, bool) {
	if o == nil || IsNil(o.CashierLockHandle) {
		return nil, false
	}
	return o.CashierLockHandle, true
}

// HasCashierLockHandle returns a boolean if a field has been set.
func (o *CashierLockCriteriaToExtend) HasCashierLockHandle() bool {
	if o != nil && !IsNil(o.CashierLockHandle) {
		return true
	}

	return false
}

// SetCashierLockHandle gets a reference to the given float32 and assigns it to the CashierLockHandle field.
func (o *CashierLockCriteriaToExtend) SetCashierLockHandle(v float32) {
	o.CashierLockHandle = &v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *CashierLockCriteriaToExtend) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CashierLockCriteriaToExtend) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *CashierLockCriteriaToExtend) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *CashierLockCriteriaToExtend) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *CashierLockCriteriaToExtend) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CashierLockCriteriaToExtend) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *CashierLockCriteriaToExtend) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *CashierLockCriteriaToExtend) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o CashierLockCriteriaToExtend) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o CashierLockCriteriaToExtend) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.AdditionalTimeToLive) {
		toSerialize["additionalTimeToLive"] = o.AdditionalTimeToLive
	}
	if !IsNil(o.CashierLockHandle) {
		toSerialize["cashierLockHandle"] = o.CashierLockHandle
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableCashierLockCriteriaToExtend struct {
	value *CashierLockCriteriaToExtend
	isSet bool
}

func (v NullableCashierLockCriteriaToExtend) Get() *CashierLockCriteriaToExtend {
	return v.value
}

func (v *NullableCashierLockCriteriaToExtend) Set(val *CashierLockCriteriaToExtend) {
	v.value = val
	v.isSet = true
}

func (v NullableCashierLockCriteriaToExtend) IsSet() bool {
	return v.isSet
}

func (v *NullableCashierLockCriteriaToExtend) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCashierLockCriteriaToExtend(val *CashierLockCriteriaToExtend) *NullableCashierLockCriteriaToExtend {
	return &NullableCashierLockCriteriaToExtend{value: val, isSet: true}
}

func (v NullableCashierLockCriteriaToExtend) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCashierLockCriteriaToExtend) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


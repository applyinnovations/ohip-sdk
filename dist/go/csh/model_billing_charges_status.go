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

// checks if the BillingChargesStatus type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &BillingChargesStatus{}

// BillingChargesStatus Response when checking or inquiring the available options for a set of billing charges.
type BillingChargesStatus struct {
	Links []InstanceLink `json:"links,omitempty"`
	// TAvailable options for this consumable
	Options []CheckPostBillingChargesOptionsTypeInner `json:"options,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewBillingChargesStatus instantiates a new BillingChargesStatus object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewBillingChargesStatus() *BillingChargesStatus {
	this := BillingChargesStatus{}
	return &this
}

// NewBillingChargesStatusWithDefaults instantiates a new BillingChargesStatus object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewBillingChargesStatusWithDefaults() *BillingChargesStatus {
	this := BillingChargesStatus{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *BillingChargesStatus) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BillingChargesStatus) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *BillingChargesStatus) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *BillingChargesStatus) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetOptions returns the Options field value if set, zero value otherwise.
func (o *BillingChargesStatus) GetOptions() []CheckPostBillingChargesOptionsTypeInner {
	if o == nil || IsNil(o.Options) {
		var ret []CheckPostBillingChargesOptionsTypeInner
		return ret
	}
	return o.Options
}

// GetOptionsOk returns a tuple with the Options field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BillingChargesStatus) GetOptionsOk() ([]CheckPostBillingChargesOptionsTypeInner, bool) {
	if o == nil || IsNil(o.Options) {
		return nil, false
	}
	return o.Options, true
}

// HasOptions returns a boolean if a field has been set.
func (o *BillingChargesStatus) HasOptions() bool {
	if o != nil && !IsNil(o.Options) {
		return true
	}

	return false
}

// SetOptions gets a reference to the given []CheckPostBillingChargesOptionsTypeInner and assigns it to the Options field.
func (o *BillingChargesStatus) SetOptions(v []CheckPostBillingChargesOptionsTypeInner) {
	o.Options = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *BillingChargesStatus) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BillingChargesStatus) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *BillingChargesStatus) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *BillingChargesStatus) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o BillingChargesStatus) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o BillingChargesStatus) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Options) {
		toSerialize["options"] = o.Options
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableBillingChargesStatus struct {
	value *BillingChargesStatus
	isSet bool
}

func (v NullableBillingChargesStatus) Get() *BillingChargesStatus {
	return v.value
}

func (v *NullableBillingChargesStatus) Set(val *BillingChargesStatus) {
	v.value = val
	v.isSet = true
}

func (v NullableBillingChargesStatus) IsSet() bool {
	return v.isSet
}

func (v *NullableBillingChargesStatus) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableBillingChargesStatus(val *BillingChargesStatus) *NullableBillingChargesStatus {
	return &NullableBillingChargesStatus{value: val, isSet: true}
}

func (v NullableBillingChargesStatus) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableBillingChargesStatus) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


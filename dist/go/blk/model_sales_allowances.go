/*
OPERA Cloud Block API

APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package blk

import (
	"encoding/json"
)

// checks if the SalesAllowances type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &SalesAllowances{}

// SalesAllowances Response returned by fetch corrected sales allowances.
type SalesAllowances struct {
	Links []InstanceLink `json:"links,omitempty"`
	// Collection of Sales Allowances.
	SalesAllowances []SalesAllowanceType `json:"salesAllowances,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewSalesAllowances instantiates a new SalesAllowances object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewSalesAllowances() *SalesAllowances {
	this := SalesAllowances{}
	return &this
}

// NewSalesAllowancesWithDefaults instantiates a new SalesAllowances object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewSalesAllowancesWithDefaults() *SalesAllowances {
	this := SalesAllowances{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *SalesAllowances) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SalesAllowances) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *SalesAllowances) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *SalesAllowances) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetSalesAllowances returns the SalesAllowances field value if set, zero value otherwise.
func (o *SalesAllowances) GetSalesAllowances() []SalesAllowanceType {
	if o == nil || IsNil(o.SalesAllowances) {
		var ret []SalesAllowanceType
		return ret
	}
	return o.SalesAllowances
}

// GetSalesAllowancesOk returns a tuple with the SalesAllowances field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SalesAllowances) GetSalesAllowancesOk() ([]SalesAllowanceType, bool) {
	if o == nil || IsNil(o.SalesAllowances) {
		return nil, false
	}
	return o.SalesAllowances, true
}

// HasSalesAllowances returns a boolean if a field has been set.
func (o *SalesAllowances) HasSalesAllowances() bool {
	if o != nil && !IsNil(o.SalesAllowances) {
		return true
	}

	return false
}

// SetSalesAllowances gets a reference to the given []SalesAllowanceType and assigns it to the SalesAllowances field.
func (o *SalesAllowances) SetSalesAllowances(v []SalesAllowanceType) {
	o.SalesAllowances = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *SalesAllowances) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SalesAllowances) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *SalesAllowances) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *SalesAllowances) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o SalesAllowances) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o SalesAllowances) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.SalesAllowances) {
		toSerialize["salesAllowances"] = o.SalesAllowances
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableSalesAllowances struct {
	value *SalesAllowances
	isSet bool
}

func (v NullableSalesAllowances) Get() *SalesAllowances {
	return v.value
}

func (v *NullableSalesAllowances) Set(val *SalesAllowances) {
	v.value = val
	v.isSet = true
}

func (v NullableSalesAllowances) IsSet() bool {
	return v.isSet
}

func (v *NullableSalesAllowances) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableSalesAllowances(val *SalesAllowances) *NullableSalesAllowances {
	return &NullableSalesAllowances{value: val, isSet: true}
}

func (v NullableSalesAllowances) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableSalesAllowances) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}



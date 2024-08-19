/*
OPERA Cloud Customer Relationship Management API

APIs to cater for Customer Relationship Management (profile) functionality in OPERA Cloud.  There are different types of profiles in OPERA Cloud, including Guest, Company, Travel Agent, Source, Group, and Contact profile types.  A profile can store and display a wide range of information about the guest, company, travel agent etc., depending upon the type of profile.  For example, a guest profile can store the guest name, address, contact information, details on billing, membership benefits, preferences and much more.  All profiles in OPERA when created are assigned a ProfileID.  This ID will be used throughout the CRM APIs.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package crm

import (
	"encoding/json"
)

// checks if the Rates type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &Rates{}

// Rates Response object for fetching Membership Transaction Rates information.
type Rates struct {
	Links []InstanceLink `json:"links,omitempty"`
	Rate *MembershipTransactionRatesType `json:"rate,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewRates instantiates a new Rates object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewRates() *Rates {
	this := Rates{}
	return &this
}

// NewRatesWithDefaults instantiates a new Rates object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewRatesWithDefaults() *Rates {
	this := Rates{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *Rates) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *Rates) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *Rates) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *Rates) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetRate returns the Rate field value if set, zero value otherwise.
func (o *Rates) GetRate() MembershipTransactionRatesType {
	if o == nil || IsNil(o.Rate) {
		var ret MembershipTransactionRatesType
		return ret
	}
	return *o.Rate
}

// GetRateOk returns a tuple with the Rate field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *Rates) GetRateOk() (*MembershipTransactionRatesType, bool) {
	if o == nil || IsNil(o.Rate) {
		return nil, false
	}
	return o.Rate, true
}

// HasRate returns a boolean if a field has been set.
func (o *Rates) HasRate() bool {
	if o != nil && !IsNil(o.Rate) {
		return true
	}

	return false
}

// SetRate gets a reference to the given MembershipTransactionRatesType and assigns it to the Rate field.
func (o *Rates) SetRate(v MembershipTransactionRatesType) {
	o.Rate = &v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *Rates) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *Rates) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *Rates) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *Rates) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o Rates) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o Rates) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Rate) {
		toSerialize["rate"] = o.Rate
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableRates struct {
	value *Rates
	isSet bool
}

func (v NullableRates) Get() *Rates {
	return v.value
}

func (v *NullableRates) Set(val *Rates) {
	v.value = val
	v.isSet = true
}

func (v NullableRates) IsSet() bool {
	return v.isSet
}

func (v *NullableRates) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRates(val *Rates) *NullableRates {
	return &NullableRates{value: val, isSet: true}
}

func (v NullableRates) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRates) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}



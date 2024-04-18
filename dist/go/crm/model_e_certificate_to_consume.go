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

// checks if the ECertificateToConsume type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ECertificateToConsume{}

// ECertificateToConsume Request object to Consume an E-Certificate.
type ECertificateToConsume struct {
	// List of e-certificates for the profile.
	ConsumeECertificates []ECertificateType `json:"consumeECertificates,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewECertificateToConsume instantiates a new ECertificateToConsume object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewECertificateToConsume() *ECertificateToConsume {
	this := ECertificateToConsume{}
	return &this
}

// NewECertificateToConsumeWithDefaults instantiates a new ECertificateToConsume object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewECertificateToConsumeWithDefaults() *ECertificateToConsume {
	this := ECertificateToConsume{}
	return &this
}

// GetConsumeECertificates returns the ConsumeECertificates field value if set, zero value otherwise.
func (o *ECertificateToConsume) GetConsumeECertificates() []ECertificateType {
	if o == nil || IsNil(o.ConsumeECertificates) {
		var ret []ECertificateType
		return ret
	}
	return o.ConsumeECertificates
}

// GetConsumeECertificatesOk returns a tuple with the ConsumeECertificates field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ECertificateToConsume) GetConsumeECertificatesOk() ([]ECertificateType, bool) {
	if o == nil || IsNil(o.ConsumeECertificates) {
		return nil, false
	}
	return o.ConsumeECertificates, true
}

// HasConsumeECertificates returns a boolean if a field has been set.
func (o *ECertificateToConsume) HasConsumeECertificates() bool {
	if o != nil && !IsNil(o.ConsumeECertificates) {
		return true
	}

	return false
}

// SetConsumeECertificates gets a reference to the given []ECertificateType and assigns it to the ConsumeECertificates field.
func (o *ECertificateToConsume) SetConsumeECertificates(v []ECertificateType) {
	o.ConsumeECertificates = v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *ECertificateToConsume) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ECertificateToConsume) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *ECertificateToConsume) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *ECertificateToConsume) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *ECertificateToConsume) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ECertificateToConsume) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *ECertificateToConsume) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *ECertificateToConsume) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o ECertificateToConsume) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ECertificateToConsume) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.ConsumeECertificates) {
		toSerialize["consumeECertificates"] = o.ConsumeECertificates
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableECertificateToConsume struct {
	value *ECertificateToConsume
	isSet bool
}

func (v NullableECertificateToConsume) Get() *ECertificateToConsume {
	return v.value
}

func (v *NullableECertificateToConsume) Set(val *ECertificateToConsume) {
	v.value = val
	v.isSet = true
}

func (v NullableECertificateToConsume) IsSet() bool {
	return v.isSet
}

func (v *NullableECertificateToConsume) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableECertificateToConsume(val *ECertificateToConsume) *NullableECertificateToConsume {
	return &NullableECertificateToConsume{value: val, isSet: true}
}

func (v NullableECertificateToConsume) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableECertificateToConsume) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


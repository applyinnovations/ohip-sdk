/*
OPERA Cloud Reservation API

APIs to cater for Reservation functionality in OPERA Cloud. <br /><br />OPERA Cloud Reservations provides a complete set of capabilities for creating and updating reservations. Reservations are a central feature of OPERA Cloud. As a key source of information, the reservation specifies a guest&apos;s arrival date, departure date, room type, rate, packages, and many other details. It is also a gateway to dozens of other functions that contribute to the guest&apos;s experience.  All reservations in OPERA Cloud require a guest profile.<br /><br /> You can create profiles while booking a reservation. If a profile already exists, you can look it up (using getProfiles in the Customer Relationship Management module) and attach it to the reservation during the reservation booking process using the profileId.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rsv

import (
	"encoding/json"
)

// checks if the ComputeDepositPoliciesDetails type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ComputeDepositPoliciesDetails{}

// ComputeDepositPoliciesDetails Response for the deposit rules configuration request. Contains computed details for the deposit rules requested.
type ComputeDepositPoliciesDetails struct {
	Links []InstanceLink `json:"links,omitempty"`
	// A list of deposit policies attached with the reservation.
	Policies []ResDepositPolicyType `json:"policies,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewComputeDepositPoliciesDetails instantiates a new ComputeDepositPoliciesDetails object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewComputeDepositPoliciesDetails() *ComputeDepositPoliciesDetails {
	this := ComputeDepositPoliciesDetails{}
	return &this
}

// NewComputeDepositPoliciesDetailsWithDefaults instantiates a new ComputeDepositPoliciesDetails object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewComputeDepositPoliciesDetailsWithDefaults() *ComputeDepositPoliciesDetails {
	this := ComputeDepositPoliciesDetails{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *ComputeDepositPoliciesDetails) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ComputeDepositPoliciesDetails) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *ComputeDepositPoliciesDetails) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *ComputeDepositPoliciesDetails) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetPolicies returns the Policies field value if set, zero value otherwise.
func (o *ComputeDepositPoliciesDetails) GetPolicies() []ResDepositPolicyType {
	if o == nil || IsNil(o.Policies) {
		var ret []ResDepositPolicyType
		return ret
	}
	return o.Policies
}

// GetPoliciesOk returns a tuple with the Policies field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ComputeDepositPoliciesDetails) GetPoliciesOk() ([]ResDepositPolicyType, bool) {
	if o == nil || IsNil(o.Policies) {
		return nil, false
	}
	return o.Policies, true
}

// HasPolicies returns a boolean if a field has been set.
func (o *ComputeDepositPoliciesDetails) HasPolicies() bool {
	if o != nil && !IsNil(o.Policies) {
		return true
	}

	return false
}

// SetPolicies gets a reference to the given []ResDepositPolicyType and assigns it to the Policies field.
func (o *ComputeDepositPoliciesDetails) SetPolicies(v []ResDepositPolicyType) {
	o.Policies = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *ComputeDepositPoliciesDetails) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ComputeDepositPoliciesDetails) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *ComputeDepositPoliciesDetails) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *ComputeDepositPoliciesDetails) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o ComputeDepositPoliciesDetails) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ComputeDepositPoliciesDetails) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Policies) {
		toSerialize["policies"] = o.Policies
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableComputeDepositPoliciesDetails struct {
	value *ComputeDepositPoliciesDetails
	isSet bool
}

func (v NullableComputeDepositPoliciesDetails) Get() *ComputeDepositPoliciesDetails {
	return v.value
}

func (v *NullableComputeDepositPoliciesDetails) Set(val *ComputeDepositPoliciesDetails) {
	v.value = val
	v.isSet = true
}

func (v NullableComputeDepositPoliciesDetails) IsSet() bool {
	return v.isSet
}

func (v *NullableComputeDepositPoliciesDetails) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableComputeDepositPoliciesDetails(val *ComputeDepositPoliciesDetails) *NullableComputeDepositPoliciesDetails {
	return &NullableComputeDepositPoliciesDetails{value: val, isSet: true}
}

func (v NullableComputeDepositPoliciesDetails) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableComputeDepositPoliciesDetails) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}



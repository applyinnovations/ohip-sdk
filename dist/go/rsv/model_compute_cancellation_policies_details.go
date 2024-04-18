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

// checks if the ComputeCancellationPoliciesDetails type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ComputeCancellationPoliciesDetails{}

// ComputeCancellationPoliciesDetails Response for the cancellation rules configuration request. Contains computed details for the cancellation rules requested.
type ComputeCancellationPoliciesDetails struct {
	Links []InstanceLink `json:"links,omitempty"`
	// A list of reservation cancellation policies.
	Policies []ResCancellationPolicyType `json:"policies,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewComputeCancellationPoliciesDetails instantiates a new ComputeCancellationPoliciesDetails object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewComputeCancellationPoliciesDetails() *ComputeCancellationPoliciesDetails {
	this := ComputeCancellationPoliciesDetails{}
	return &this
}

// NewComputeCancellationPoliciesDetailsWithDefaults instantiates a new ComputeCancellationPoliciesDetails object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewComputeCancellationPoliciesDetailsWithDefaults() *ComputeCancellationPoliciesDetails {
	this := ComputeCancellationPoliciesDetails{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *ComputeCancellationPoliciesDetails) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ComputeCancellationPoliciesDetails) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *ComputeCancellationPoliciesDetails) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *ComputeCancellationPoliciesDetails) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetPolicies returns the Policies field value if set, zero value otherwise.
func (o *ComputeCancellationPoliciesDetails) GetPolicies() []ResCancellationPolicyType {
	if o == nil || IsNil(o.Policies) {
		var ret []ResCancellationPolicyType
		return ret
	}
	return o.Policies
}

// GetPoliciesOk returns a tuple with the Policies field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ComputeCancellationPoliciesDetails) GetPoliciesOk() ([]ResCancellationPolicyType, bool) {
	if o == nil || IsNil(o.Policies) {
		return nil, false
	}
	return o.Policies, true
}

// HasPolicies returns a boolean if a field has been set.
func (o *ComputeCancellationPoliciesDetails) HasPolicies() bool {
	if o != nil && !IsNil(o.Policies) {
		return true
	}

	return false
}

// SetPolicies gets a reference to the given []ResCancellationPolicyType and assigns it to the Policies field.
func (o *ComputeCancellationPoliciesDetails) SetPolicies(v []ResCancellationPolicyType) {
	o.Policies = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *ComputeCancellationPoliciesDetails) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ComputeCancellationPoliciesDetails) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *ComputeCancellationPoliciesDetails) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *ComputeCancellationPoliciesDetails) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o ComputeCancellationPoliciesDetails) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ComputeCancellationPoliciesDetails) ToMap() (map[string]interface{}, error) {
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

type NullableComputeCancellationPoliciesDetails struct {
	value *ComputeCancellationPoliciesDetails
	isSet bool
}

func (v NullableComputeCancellationPoliciesDetails) Get() *ComputeCancellationPoliciesDetails {
	return v.value
}

func (v *NullableComputeCancellationPoliciesDetails) Set(val *ComputeCancellationPoliciesDetails) {
	v.value = val
	v.isSet = true
}

func (v NullableComputeCancellationPoliciesDetails) IsSet() bool {
	return v.isSet
}

func (v *NullableComputeCancellationPoliciesDetails) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableComputeCancellationPoliciesDetails(val *ComputeCancellationPoliciesDetails) *NullableComputeCancellationPoliciesDetails {
	return &NullableComputeCancellationPoliciesDetails{value: val, isSet: true}
}

func (v NullableComputeCancellationPoliciesDetails) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableComputeCancellationPoliciesDetails) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


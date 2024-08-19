/*
OPERA Cloud Reservation Master Data Management API

APIs to cater for Reservation Configuration in OPERA Cloud. In this module you can retrieve, create, modify or delete configuration related to Reservations, Blocks and Leisure Management.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rsvcfg

import (
	"encoding/json"
)

// checks if the TemplateCancellationPolicyDetails type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &TemplateCancellationPolicyDetails{}

// TemplateCancellationPolicyDetails Response for fetch template Cancellation Policies.
type TemplateCancellationPolicyDetails struct {
	Links []InstanceLink `json:"links,omitempty"`
	// Collection of template Cancel Penalty rules.
	TemplateCancelPenaltyConfigs []ConfigCancelPenaltyType `json:"templateCancelPenaltyConfigs,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewTemplateCancellationPolicyDetails instantiates a new TemplateCancellationPolicyDetails object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewTemplateCancellationPolicyDetails() *TemplateCancellationPolicyDetails {
	this := TemplateCancellationPolicyDetails{}
	return &this
}

// NewTemplateCancellationPolicyDetailsWithDefaults instantiates a new TemplateCancellationPolicyDetails object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewTemplateCancellationPolicyDetailsWithDefaults() *TemplateCancellationPolicyDetails {
	this := TemplateCancellationPolicyDetails{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *TemplateCancellationPolicyDetails) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TemplateCancellationPolicyDetails) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *TemplateCancellationPolicyDetails) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *TemplateCancellationPolicyDetails) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetTemplateCancelPenaltyConfigs returns the TemplateCancelPenaltyConfigs field value if set, zero value otherwise.
func (o *TemplateCancellationPolicyDetails) GetTemplateCancelPenaltyConfigs() []ConfigCancelPenaltyType {
	if o == nil || IsNil(o.TemplateCancelPenaltyConfigs) {
		var ret []ConfigCancelPenaltyType
		return ret
	}
	return o.TemplateCancelPenaltyConfigs
}

// GetTemplateCancelPenaltyConfigsOk returns a tuple with the TemplateCancelPenaltyConfigs field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TemplateCancellationPolicyDetails) GetTemplateCancelPenaltyConfigsOk() ([]ConfigCancelPenaltyType, bool) {
	if o == nil || IsNil(o.TemplateCancelPenaltyConfigs) {
		return nil, false
	}
	return o.TemplateCancelPenaltyConfigs, true
}

// HasTemplateCancelPenaltyConfigs returns a boolean if a field has been set.
func (o *TemplateCancellationPolicyDetails) HasTemplateCancelPenaltyConfigs() bool {
	if o != nil && !IsNil(o.TemplateCancelPenaltyConfigs) {
		return true
	}

	return false
}

// SetTemplateCancelPenaltyConfigs gets a reference to the given []ConfigCancelPenaltyType and assigns it to the TemplateCancelPenaltyConfigs field.
func (o *TemplateCancellationPolicyDetails) SetTemplateCancelPenaltyConfigs(v []ConfigCancelPenaltyType) {
	o.TemplateCancelPenaltyConfigs = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *TemplateCancellationPolicyDetails) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TemplateCancellationPolicyDetails) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *TemplateCancellationPolicyDetails) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *TemplateCancellationPolicyDetails) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o TemplateCancellationPolicyDetails) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o TemplateCancellationPolicyDetails) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.TemplateCancelPenaltyConfigs) {
		toSerialize["templateCancelPenaltyConfigs"] = o.TemplateCancelPenaltyConfigs
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableTemplateCancellationPolicyDetails struct {
	value *TemplateCancellationPolicyDetails
	isSet bool
}

func (v NullableTemplateCancellationPolicyDetails) Get() *TemplateCancellationPolicyDetails {
	return v.value
}

func (v *NullableTemplateCancellationPolicyDetails) Set(val *TemplateCancellationPolicyDetails) {
	v.value = val
	v.isSet = true
}

func (v NullableTemplateCancellationPolicyDetails) IsSet() bool {
	return v.isSet
}

func (v *NullableTemplateCancellationPolicyDetails) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableTemplateCancellationPolicyDetails(val *TemplateCancellationPolicyDetails) *NullableTemplateCancellationPolicyDetails {
	return &NullableTemplateCancellationPolicyDetails{value: val, isSet: true}
}

func (v NullableTemplateCancellationPolicyDetails) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableTemplateCancellationPolicyDetails) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}



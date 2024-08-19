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

// checks if the FuturePastBookingsCriteria type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &FuturePastBookingsCriteria{}

// FuturePastBookingsCriteria Request for information regarding existence of profile in future and/or past business blocks and/or reservations.
type FuturePastBookingsCriteria struct {
	Criteria *HasFuturePastBookingsSearchType `json:"criteria,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewFuturePastBookingsCriteria instantiates a new FuturePastBookingsCriteria object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewFuturePastBookingsCriteria() *FuturePastBookingsCriteria {
	this := FuturePastBookingsCriteria{}
	return &this
}

// NewFuturePastBookingsCriteriaWithDefaults instantiates a new FuturePastBookingsCriteria object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewFuturePastBookingsCriteriaWithDefaults() *FuturePastBookingsCriteria {
	this := FuturePastBookingsCriteria{}
	return &this
}

// GetCriteria returns the Criteria field value if set, zero value otherwise.
func (o *FuturePastBookingsCriteria) GetCriteria() HasFuturePastBookingsSearchType {
	if o == nil || IsNil(o.Criteria) {
		var ret HasFuturePastBookingsSearchType
		return ret
	}
	return *o.Criteria
}

// GetCriteriaOk returns a tuple with the Criteria field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FuturePastBookingsCriteria) GetCriteriaOk() (*HasFuturePastBookingsSearchType, bool) {
	if o == nil || IsNil(o.Criteria) {
		return nil, false
	}
	return o.Criteria, true
}

// HasCriteria returns a boolean if a field has been set.
func (o *FuturePastBookingsCriteria) HasCriteria() bool {
	if o != nil && !IsNil(o.Criteria) {
		return true
	}

	return false
}

// SetCriteria gets a reference to the given HasFuturePastBookingsSearchType and assigns it to the Criteria field.
func (o *FuturePastBookingsCriteria) SetCriteria(v HasFuturePastBookingsSearchType) {
	o.Criteria = &v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *FuturePastBookingsCriteria) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FuturePastBookingsCriteria) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *FuturePastBookingsCriteria) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *FuturePastBookingsCriteria) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *FuturePastBookingsCriteria) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *FuturePastBookingsCriteria) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *FuturePastBookingsCriteria) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *FuturePastBookingsCriteria) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o FuturePastBookingsCriteria) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o FuturePastBookingsCriteria) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Criteria) {
		toSerialize["criteria"] = o.Criteria
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableFuturePastBookingsCriteria struct {
	value *FuturePastBookingsCriteria
	isSet bool
}

func (v NullableFuturePastBookingsCriteria) Get() *FuturePastBookingsCriteria {
	return v.value
}

func (v *NullableFuturePastBookingsCriteria) Set(val *FuturePastBookingsCriteria) {
	v.value = val
	v.isSet = true
}

func (v NullableFuturePastBookingsCriteria) IsSet() bool {
	return v.isSet
}

func (v *NullableFuturePastBookingsCriteria) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableFuturePastBookingsCriteria(val *FuturePastBookingsCriteria) *NullableFuturePastBookingsCriteria {
	return &NullableFuturePastBookingsCriteria{value: val, isSet: true}
}

func (v NullableFuturePastBookingsCriteria) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableFuturePastBookingsCriteria) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}



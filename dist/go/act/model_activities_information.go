/*
OPERA Cloud Activity API

APIs to cater for Sales Activity functionality in OPERA Cloud. <br /><br /> Activities provide you with an account management tool for managing daily tasks such as appointments, sales calls, contact follow-up, and so on.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package act

import (
	"encoding/json"
)

// checks if the ActivitiesInformation type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ActivitiesInformation{}

// ActivitiesInformation struct for ActivitiesInformation
type ActivitiesInformation struct {
	// Activity information in detail.
	ActivitiesInformation []ActivityDetailsType `json:"activitiesInformation,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewActivitiesInformation instantiates a new ActivitiesInformation object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewActivitiesInformation() *ActivitiesInformation {
	this := ActivitiesInformation{}
	return &this
}

// NewActivitiesInformationWithDefaults instantiates a new ActivitiesInformation object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewActivitiesInformationWithDefaults() *ActivitiesInformation {
	this := ActivitiesInformation{}
	return &this
}

// GetActivitiesInformation returns the ActivitiesInformation field value if set, zero value otherwise.
func (o *ActivitiesInformation) GetActivitiesInformation() []ActivityDetailsType {
	if o == nil || IsNil(o.ActivitiesInformation) {
		var ret []ActivityDetailsType
		return ret
	}
	return o.ActivitiesInformation
}

// GetActivitiesInformationOk returns a tuple with the ActivitiesInformation field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ActivitiesInformation) GetActivitiesInformationOk() ([]ActivityDetailsType, bool) {
	if o == nil || IsNil(o.ActivitiesInformation) {
		return nil, false
	}
	return o.ActivitiesInformation, true
}

// HasActivitiesInformation returns a boolean if a field has been set.
func (o *ActivitiesInformation) HasActivitiesInformation() bool {
	if o != nil && !IsNil(o.ActivitiesInformation) {
		return true
	}

	return false
}

// SetActivitiesInformation gets a reference to the given []ActivityDetailsType and assigns it to the ActivitiesInformation field.
func (o *ActivitiesInformation) SetActivitiesInformation(v []ActivityDetailsType) {
	o.ActivitiesInformation = v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *ActivitiesInformation) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ActivitiesInformation) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *ActivitiesInformation) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *ActivitiesInformation) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *ActivitiesInformation) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ActivitiesInformation) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *ActivitiesInformation) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *ActivitiesInformation) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o ActivitiesInformation) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ActivitiesInformation) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.ActivitiesInformation) {
		toSerialize["activitiesInformation"] = o.ActivitiesInformation
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableActivitiesInformation struct {
	value *ActivitiesInformation
	isSet bool
}

func (v NullableActivitiesInformation) Get() *ActivitiesInformation {
	return v.value
}

func (v *NullableActivitiesInformation) Set(val *ActivitiesInformation) {
	v.value = val
	v.isSet = true
}

func (v NullableActivitiesInformation) IsSet() bool {
	return v.isSet
}

func (v *NullableActivitiesInformation) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableActivitiesInformation(val *ActivitiesInformation) *NullableActivitiesInformation {
	return &NullableActivitiesInformation{value: val, isSet: true}
}

func (v NullableActivitiesInformation) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableActivitiesInformation) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


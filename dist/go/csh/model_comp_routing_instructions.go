/*
OPERA Cloud Cashiering API

APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package csh

import (
	"encoding/json"
)

// checks if the CompRoutingInstructions type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &CompRoutingInstructions{}

// CompRoutingInstructions Response object containing comp routing instructions for a reservation .
type CompRoutingInstructions struct {
	Links []InstanceLink `json:"links,omitempty"`
	// A comp routing info object
	ResvRoutingInstructions []ResvRoutingInfoType `json:"resvRoutingInstructions,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewCompRoutingInstructions instantiates a new CompRoutingInstructions object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCompRoutingInstructions() *CompRoutingInstructions {
	this := CompRoutingInstructions{}
	return &this
}

// NewCompRoutingInstructionsWithDefaults instantiates a new CompRoutingInstructions object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCompRoutingInstructionsWithDefaults() *CompRoutingInstructions {
	this := CompRoutingInstructions{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *CompRoutingInstructions) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CompRoutingInstructions) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *CompRoutingInstructions) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *CompRoutingInstructions) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetResvRoutingInstructions returns the ResvRoutingInstructions field value if set, zero value otherwise.
func (o *CompRoutingInstructions) GetResvRoutingInstructions() []ResvRoutingInfoType {
	if o == nil || IsNil(o.ResvRoutingInstructions) {
		var ret []ResvRoutingInfoType
		return ret
	}
	return o.ResvRoutingInstructions
}

// GetResvRoutingInstructionsOk returns a tuple with the ResvRoutingInstructions field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CompRoutingInstructions) GetResvRoutingInstructionsOk() ([]ResvRoutingInfoType, bool) {
	if o == nil || IsNil(o.ResvRoutingInstructions) {
		return nil, false
	}
	return o.ResvRoutingInstructions, true
}

// HasResvRoutingInstructions returns a boolean if a field has been set.
func (o *CompRoutingInstructions) HasResvRoutingInstructions() bool {
	if o != nil && !IsNil(o.ResvRoutingInstructions) {
		return true
	}

	return false
}

// SetResvRoutingInstructions gets a reference to the given []ResvRoutingInfoType and assigns it to the ResvRoutingInstructions field.
func (o *CompRoutingInstructions) SetResvRoutingInstructions(v []ResvRoutingInfoType) {
	o.ResvRoutingInstructions = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *CompRoutingInstructions) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CompRoutingInstructions) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *CompRoutingInstructions) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *CompRoutingInstructions) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o CompRoutingInstructions) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o CompRoutingInstructions) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.ResvRoutingInstructions) {
		toSerialize["resvRoutingInstructions"] = o.ResvRoutingInstructions
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableCompRoutingInstructions struct {
	value *CompRoutingInstructions
	isSet bool
}

func (v NullableCompRoutingInstructions) Get() *CompRoutingInstructions {
	return v.value
}

func (v *NullableCompRoutingInstructions) Set(val *CompRoutingInstructions) {
	v.value = val
	v.isSet = true
}

func (v NullableCompRoutingInstructions) IsSet() bool {
	return v.isSet
}

func (v *NullableCompRoutingInstructions) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCompRoutingInstructions(val *CompRoutingInstructions) *NullableCompRoutingInstructions {
	return &NullableCompRoutingInstructions{value: val, isSet: true}
}

func (v NullableCompRoutingInstructions) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCompRoutingInstructions) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}



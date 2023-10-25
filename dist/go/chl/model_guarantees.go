/*
OPERA Cloud Channel Configuration API

APIs to cater for Channel Management functionality in OPERA Cloud. <br /><br /> Channel Management allows a property to configure and administer channels such as OTAs, and web channels, covering functionality such as channel configuration, availability, inventory and restrictions.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package chl

import (
	"encoding/json"
)

// checks if the Guarantees type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &Guarantees{}

// Guarantees Request object for changing external system guarantees.
type Guarantees struct {
	// Information about an external system guarantee mapping.
	Guarantees []GuaranteeMappingType `json:"guarantees,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewGuarantees instantiates a new Guarantees object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewGuarantees() *Guarantees {
	this := Guarantees{}
	return &this
}

// NewGuaranteesWithDefaults instantiates a new Guarantees object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewGuaranteesWithDefaults() *Guarantees {
	this := Guarantees{}
	return &this
}

// GetGuarantees returns the Guarantees field value if set, zero value otherwise.
func (o *Guarantees) GetGuarantees() []GuaranteeMappingType {
	if o == nil || IsNil(o.Guarantees) {
		var ret []GuaranteeMappingType
		return ret
	}
	return o.Guarantees
}

// GetGuaranteesOk returns a tuple with the Guarantees field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *Guarantees) GetGuaranteesOk() ([]GuaranteeMappingType, bool) {
	if o == nil || IsNil(o.Guarantees) {
		return nil, false
	}
	return o.Guarantees, true
}

// HasGuarantees returns a boolean if a field has been set.
func (o *Guarantees) HasGuarantees() bool {
	if o != nil && !IsNil(o.Guarantees) {
		return true
	}

	return false
}

// SetGuarantees gets a reference to the given []GuaranteeMappingType and assigns it to the Guarantees field.
func (o *Guarantees) SetGuarantees(v []GuaranteeMappingType) {
	o.Guarantees = v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *Guarantees) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *Guarantees) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *Guarantees) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *Guarantees) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *Guarantees) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *Guarantees) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *Guarantees) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *Guarantees) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o Guarantees) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o Guarantees) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Guarantees) {
		toSerialize["guarantees"] = o.Guarantees
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableGuarantees struct {
	value *Guarantees
	isSet bool
}

func (v NullableGuarantees) Get() *Guarantees {
	return v.value
}

func (v *NullableGuarantees) Set(val *Guarantees) {
	v.value = val
	v.isSet = true
}

func (v NullableGuarantees) IsSet() bool {
	return v.isSet
}

func (v *NullableGuarantees) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableGuarantees(val *Guarantees) *NullableGuarantees {
	return &NullableGuarantees{value: val, isSet: true}
}

func (v NullableGuarantees) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableGuarantees) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}



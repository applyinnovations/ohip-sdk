/*
OPERA Cloud Room Configuration API

APIs to cater for room configuration, such as configuring room types, room Classes, creating new room features, or updating housekeeping room maintenance reasons.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rmcfg

import (
	"encoding/json"
)

// checks if the BedTypesCriteria type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &BedTypesCriteria{}

// BedTypesCriteria Request object for creating a new Bed Type.
type BedTypesCriteria struct {
	// Bed Type Enumeration element.
	BedTypes []BedTypeType `json:"bedTypes,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewBedTypesCriteria instantiates a new BedTypesCriteria object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewBedTypesCriteria() *BedTypesCriteria {
	this := BedTypesCriteria{}
	return &this
}

// NewBedTypesCriteriaWithDefaults instantiates a new BedTypesCriteria object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewBedTypesCriteriaWithDefaults() *BedTypesCriteria {
	this := BedTypesCriteria{}
	return &this
}

// GetBedTypes returns the BedTypes field value if set, zero value otherwise.
func (o *BedTypesCriteria) GetBedTypes() []BedTypeType {
	if o == nil || IsNil(o.BedTypes) {
		var ret []BedTypeType
		return ret
	}
	return o.BedTypes
}

// GetBedTypesOk returns a tuple with the BedTypes field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BedTypesCriteria) GetBedTypesOk() ([]BedTypeType, bool) {
	if o == nil || IsNil(o.BedTypes) {
		return nil, false
	}
	return o.BedTypes, true
}

// HasBedTypes returns a boolean if a field has been set.
func (o *BedTypesCriteria) HasBedTypes() bool {
	if o != nil && !IsNil(o.BedTypes) {
		return true
	}

	return false
}

// SetBedTypes gets a reference to the given []BedTypeType and assigns it to the BedTypes field.
func (o *BedTypesCriteria) SetBedTypes(v []BedTypeType) {
	o.BedTypes = v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *BedTypesCriteria) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BedTypesCriteria) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *BedTypesCriteria) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *BedTypesCriteria) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *BedTypesCriteria) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BedTypesCriteria) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *BedTypesCriteria) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *BedTypesCriteria) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o BedTypesCriteria) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o BedTypesCriteria) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.BedTypes) {
		toSerialize["bedTypes"] = o.BedTypes
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableBedTypesCriteria struct {
	value *BedTypesCriteria
	isSet bool
}

func (v NullableBedTypesCriteria) Get() *BedTypesCriteria {
	return v.value
}

func (v *NullableBedTypesCriteria) Set(val *BedTypesCriteria) {
	v.value = val
	v.isSet = true
}

func (v NullableBedTypesCriteria) IsSet() bool {
	return v.isSet
}

func (v *NullableBedTypesCriteria) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableBedTypesCriteria(val *BedTypesCriteria) *NullableBedTypesCriteria {
	return &NullableBedTypesCriteria{value: val, isSet: true}
}

func (v NullableBedTypesCriteria) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableBedTypesCriteria) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}



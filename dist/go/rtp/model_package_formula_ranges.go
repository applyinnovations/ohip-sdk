/*
OPERA Cloud Rate API

APIs to cater for Rate Availability functionality in OPERA Cloud. <br /><br /> Rate Management provides all the tools you need to effectively define and manage the rate structures for a property in OPERA Cloud. Some of the things you can do include creating and managing rate codes, rate classes, rate categories, display sets, rate strategies, as well as managing promotion groups and codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rtp

import (
	"encoding/json"
)

// checks if the PackageFormulaRanges type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &PackageFormulaRanges{}

// PackageFormulaRanges Response for the request to search for package formula ranges. Based on the hotel code and tax range type code, response can contain multiple package formula ranges
type PackageFormulaRanges struct {
	Links []InstanceLink `json:"links,omitempty"`
	// Collection of Package Formula Ranges.
	PackageFormulaRanges []PackageFormulaRangeType `json:"packageFormulaRanges,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewPackageFormulaRanges instantiates a new PackageFormulaRanges object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewPackageFormulaRanges() *PackageFormulaRanges {
	this := PackageFormulaRanges{}
	return &this
}

// NewPackageFormulaRangesWithDefaults instantiates a new PackageFormulaRanges object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewPackageFormulaRangesWithDefaults() *PackageFormulaRanges {
	this := PackageFormulaRanges{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *PackageFormulaRanges) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PackageFormulaRanges) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *PackageFormulaRanges) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *PackageFormulaRanges) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetPackageFormulaRanges returns the PackageFormulaRanges field value if set, zero value otherwise.
func (o *PackageFormulaRanges) GetPackageFormulaRanges() []PackageFormulaRangeType {
	if o == nil || IsNil(o.PackageFormulaRanges) {
		var ret []PackageFormulaRangeType
		return ret
	}
	return o.PackageFormulaRanges
}

// GetPackageFormulaRangesOk returns a tuple with the PackageFormulaRanges field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PackageFormulaRanges) GetPackageFormulaRangesOk() ([]PackageFormulaRangeType, bool) {
	if o == nil || IsNil(o.PackageFormulaRanges) {
		return nil, false
	}
	return o.PackageFormulaRanges, true
}

// HasPackageFormulaRanges returns a boolean if a field has been set.
func (o *PackageFormulaRanges) HasPackageFormulaRanges() bool {
	if o != nil && !IsNil(o.PackageFormulaRanges) {
		return true
	}

	return false
}

// SetPackageFormulaRanges gets a reference to the given []PackageFormulaRangeType and assigns it to the PackageFormulaRanges field.
func (o *PackageFormulaRanges) SetPackageFormulaRanges(v []PackageFormulaRangeType) {
	o.PackageFormulaRanges = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *PackageFormulaRanges) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PackageFormulaRanges) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *PackageFormulaRanges) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *PackageFormulaRanges) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o PackageFormulaRanges) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o PackageFormulaRanges) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.PackageFormulaRanges) {
		toSerialize["packageFormulaRanges"] = o.PackageFormulaRanges
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullablePackageFormulaRanges struct {
	value *PackageFormulaRanges
	isSet bool
}

func (v NullablePackageFormulaRanges) Get() *PackageFormulaRanges {
	return v.value
}

func (v *NullablePackageFormulaRanges) Set(val *PackageFormulaRanges) {
	v.value = val
	v.isSet = true
}

func (v NullablePackageFormulaRanges) IsSet() bool {
	return v.isSet
}

func (v *NullablePackageFormulaRanges) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullablePackageFormulaRanges(val *PackageFormulaRanges) *NullablePackageFormulaRanges {
	return &NullablePackageFormulaRanges{value: val, isSet: true}
}

func (v NullablePackageFormulaRanges) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullablePackageFormulaRanges) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}



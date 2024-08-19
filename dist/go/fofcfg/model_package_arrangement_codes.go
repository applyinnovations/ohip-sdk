/*
OPERA Cloud Front Desk Configuration API

APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package fofcfg

import (
	"encoding/json"
)

// checks if the PackageArrangementCodes type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &PackageArrangementCodes{}

// PackageArrangementCodes struct for PackageArrangementCodes
type PackageArrangementCodes struct {
	Links []InstanceLink `json:"links,omitempty"`
	// Details for package arrangement codes.
	PackageArrangementCodes []PackageArrangementCodeType `json:"packageArrangementCodes,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewPackageArrangementCodes instantiates a new PackageArrangementCodes object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewPackageArrangementCodes() *PackageArrangementCodes {
	this := PackageArrangementCodes{}
	return &this
}

// NewPackageArrangementCodesWithDefaults instantiates a new PackageArrangementCodes object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewPackageArrangementCodesWithDefaults() *PackageArrangementCodes {
	this := PackageArrangementCodes{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *PackageArrangementCodes) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PackageArrangementCodes) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *PackageArrangementCodes) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *PackageArrangementCodes) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetPackageArrangementCodes returns the PackageArrangementCodes field value if set, zero value otherwise.
func (o *PackageArrangementCodes) GetPackageArrangementCodes() []PackageArrangementCodeType {
	if o == nil || IsNil(o.PackageArrangementCodes) {
		var ret []PackageArrangementCodeType
		return ret
	}
	return o.PackageArrangementCodes
}

// GetPackageArrangementCodesOk returns a tuple with the PackageArrangementCodes field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PackageArrangementCodes) GetPackageArrangementCodesOk() ([]PackageArrangementCodeType, bool) {
	if o == nil || IsNil(o.PackageArrangementCodes) {
		return nil, false
	}
	return o.PackageArrangementCodes, true
}

// HasPackageArrangementCodes returns a boolean if a field has been set.
func (o *PackageArrangementCodes) HasPackageArrangementCodes() bool {
	if o != nil && !IsNil(o.PackageArrangementCodes) {
		return true
	}

	return false
}

// SetPackageArrangementCodes gets a reference to the given []PackageArrangementCodeType and assigns it to the PackageArrangementCodes field.
func (o *PackageArrangementCodes) SetPackageArrangementCodes(v []PackageArrangementCodeType) {
	o.PackageArrangementCodes = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *PackageArrangementCodes) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PackageArrangementCodes) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *PackageArrangementCodes) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *PackageArrangementCodes) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o PackageArrangementCodes) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o PackageArrangementCodes) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.PackageArrangementCodes) {
		toSerialize["packageArrangementCodes"] = o.PackageArrangementCodes
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullablePackageArrangementCodes struct {
	value *PackageArrangementCodes
	isSet bool
}

func (v NullablePackageArrangementCodes) Get() *PackageArrangementCodes {
	return v.value
}

func (v *NullablePackageArrangementCodes) Set(val *PackageArrangementCodes) {
	v.value = val
	v.isSet = true
}

func (v NullablePackageArrangementCodes) IsSet() bool {
	return v.isSet
}

func (v *NullablePackageArrangementCodes) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullablePackageArrangementCodes(val *PackageArrangementCodes) *NullablePackageArrangementCodes {
	return &NullablePackageArrangementCodes{value: val, isSet: true}
}

func (v NullablePackageArrangementCodes) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullablePackageArrangementCodes) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}



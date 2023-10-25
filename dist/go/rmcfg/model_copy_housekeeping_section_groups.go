/*
OPERA Cloud Room Configuration API

APIs to cater for room configuration, such as configuring room types, room Classes, creating new room features, or updating housekeeping room maintenance reasons.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rmcfg

import (
	"encoding/json"
)

// checks if the CopyHousekeepingSectionGroups type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &CopyHousekeepingSectionGroups{}

// CopyHousekeepingSectionGroups Request object for copying housekeeping section groups in resort.
type CopyHousekeepingSectionGroups struct {
	// List of the housekeeping section groups to be copied
	HousekeepingSectionGroups []HousekeepingSectionGroupCopyType `json:"housekeepingSectionGroups,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewCopyHousekeepingSectionGroups instantiates a new CopyHousekeepingSectionGroups object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCopyHousekeepingSectionGroups() *CopyHousekeepingSectionGroups {
	this := CopyHousekeepingSectionGroups{}
	return &this
}

// NewCopyHousekeepingSectionGroupsWithDefaults instantiates a new CopyHousekeepingSectionGroups object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCopyHousekeepingSectionGroupsWithDefaults() *CopyHousekeepingSectionGroups {
	this := CopyHousekeepingSectionGroups{}
	return &this
}

// GetHousekeepingSectionGroups returns the HousekeepingSectionGroups field value if set, zero value otherwise.
func (o *CopyHousekeepingSectionGroups) GetHousekeepingSectionGroups() []HousekeepingSectionGroupCopyType {
	if o == nil || IsNil(o.HousekeepingSectionGroups) {
		var ret []HousekeepingSectionGroupCopyType
		return ret
	}
	return o.HousekeepingSectionGroups
}

// GetHousekeepingSectionGroupsOk returns a tuple with the HousekeepingSectionGroups field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CopyHousekeepingSectionGroups) GetHousekeepingSectionGroupsOk() ([]HousekeepingSectionGroupCopyType, bool) {
	if o == nil || IsNil(o.HousekeepingSectionGroups) {
		return nil, false
	}
	return o.HousekeepingSectionGroups, true
}

// HasHousekeepingSectionGroups returns a boolean if a field has been set.
func (o *CopyHousekeepingSectionGroups) HasHousekeepingSectionGroups() bool {
	if o != nil && !IsNil(o.HousekeepingSectionGroups) {
		return true
	}

	return false
}

// SetHousekeepingSectionGroups gets a reference to the given []HousekeepingSectionGroupCopyType and assigns it to the HousekeepingSectionGroups field.
func (o *CopyHousekeepingSectionGroups) SetHousekeepingSectionGroups(v []HousekeepingSectionGroupCopyType) {
	o.HousekeepingSectionGroups = v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *CopyHousekeepingSectionGroups) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CopyHousekeepingSectionGroups) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *CopyHousekeepingSectionGroups) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *CopyHousekeepingSectionGroups) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *CopyHousekeepingSectionGroups) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CopyHousekeepingSectionGroups) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *CopyHousekeepingSectionGroups) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *CopyHousekeepingSectionGroups) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o CopyHousekeepingSectionGroups) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o CopyHousekeepingSectionGroups) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.HousekeepingSectionGroups) {
		toSerialize["housekeepingSectionGroups"] = o.HousekeepingSectionGroups
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableCopyHousekeepingSectionGroups struct {
	value *CopyHousekeepingSectionGroups
	isSet bool
}

func (v NullableCopyHousekeepingSectionGroups) Get() *CopyHousekeepingSectionGroups {
	return v.value
}

func (v *NullableCopyHousekeepingSectionGroups) Set(val *CopyHousekeepingSectionGroups) {
	v.value = val
	v.isSet = true
}

func (v NullableCopyHousekeepingSectionGroups) IsSet() bool {
	return v.isSet
}

func (v *NullableCopyHousekeepingSectionGroups) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCopyHousekeepingSectionGroups(val *CopyHousekeepingSectionGroups) *NullableCopyHousekeepingSectionGroups {
	return &NullableCopyHousekeepingSectionGroups{value: val, isSet: true}
}

func (v NullableCopyHousekeepingSectionGroups) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCopyHousekeepingSectionGroups) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}



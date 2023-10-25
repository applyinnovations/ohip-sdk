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

// checks if the CopyBuildingGroups type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &CopyBuildingGroups{}

// CopyBuildingGroups Request object to copy Building Group details to hotel(s).
type CopyBuildingGroups struct {
	// Information needed to copy configuration code from one property to the other.
	CopyInstructions []CopyConfigurationCodeType `json:"copyInstructions,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewCopyBuildingGroups instantiates a new CopyBuildingGroups object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCopyBuildingGroups() *CopyBuildingGroups {
	this := CopyBuildingGroups{}
	return &this
}

// NewCopyBuildingGroupsWithDefaults instantiates a new CopyBuildingGroups object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCopyBuildingGroupsWithDefaults() *CopyBuildingGroups {
	this := CopyBuildingGroups{}
	return &this
}

// GetCopyInstructions returns the CopyInstructions field value if set, zero value otherwise.
func (o *CopyBuildingGroups) GetCopyInstructions() []CopyConfigurationCodeType {
	if o == nil || IsNil(o.CopyInstructions) {
		var ret []CopyConfigurationCodeType
		return ret
	}
	return o.CopyInstructions
}

// GetCopyInstructionsOk returns a tuple with the CopyInstructions field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CopyBuildingGroups) GetCopyInstructionsOk() ([]CopyConfigurationCodeType, bool) {
	if o == nil || IsNil(o.CopyInstructions) {
		return nil, false
	}
	return o.CopyInstructions, true
}

// HasCopyInstructions returns a boolean if a field has been set.
func (o *CopyBuildingGroups) HasCopyInstructions() bool {
	if o != nil && !IsNil(o.CopyInstructions) {
		return true
	}

	return false
}

// SetCopyInstructions gets a reference to the given []CopyConfigurationCodeType and assigns it to the CopyInstructions field.
func (o *CopyBuildingGroups) SetCopyInstructions(v []CopyConfigurationCodeType) {
	o.CopyInstructions = v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *CopyBuildingGroups) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CopyBuildingGroups) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *CopyBuildingGroups) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *CopyBuildingGroups) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *CopyBuildingGroups) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CopyBuildingGroups) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *CopyBuildingGroups) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *CopyBuildingGroups) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o CopyBuildingGroups) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o CopyBuildingGroups) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.CopyInstructions) {
		toSerialize["copyInstructions"] = o.CopyInstructions
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableCopyBuildingGroups struct {
	value *CopyBuildingGroups
	isSet bool
}

func (v NullableCopyBuildingGroups) Get() *CopyBuildingGroups {
	return v.value
}

func (v *NullableCopyBuildingGroups) Set(val *CopyBuildingGroups) {
	v.value = val
	v.isSet = true
}

func (v NullableCopyBuildingGroups) IsSet() bool {
	return v.isSet
}

func (v *NullableCopyBuildingGroups) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCopyBuildingGroups(val *CopyBuildingGroups) *NullableCopyBuildingGroups {
	return &NullableCopyBuildingGroups{value: val, isSet: true}
}

func (v NullableCopyBuildingGroups) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCopyBuildingGroups) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}



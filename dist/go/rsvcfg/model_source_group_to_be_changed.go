/*
OPERA Cloud Reservation Master Data Management API

APIs to cater for Reservation Configuration in OPERA Cloud. In this module you can retrieve, create, modify or delete configuration related to Reservations, Blocks and Leisure Management.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rsvcfg

import (
	"encoding/json"
)

// checks if the SourceGroupToBeChanged type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &SourceGroupToBeChanged{}

// SourceGroupToBeChanged Request object that holds the details of Source Group to be changed.
type SourceGroupToBeChanged struct {
	Links []InstanceLink `json:"links,omitempty"`
	SourceGroup *SourceGroupType `json:"sourceGroup,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewSourceGroupToBeChanged instantiates a new SourceGroupToBeChanged object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewSourceGroupToBeChanged() *SourceGroupToBeChanged {
	this := SourceGroupToBeChanged{}
	return &this
}

// NewSourceGroupToBeChangedWithDefaults instantiates a new SourceGroupToBeChanged object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewSourceGroupToBeChangedWithDefaults() *SourceGroupToBeChanged {
	this := SourceGroupToBeChanged{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *SourceGroupToBeChanged) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SourceGroupToBeChanged) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *SourceGroupToBeChanged) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *SourceGroupToBeChanged) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetSourceGroup returns the SourceGroup field value if set, zero value otherwise.
func (o *SourceGroupToBeChanged) GetSourceGroup() SourceGroupType {
	if o == nil || IsNil(o.SourceGroup) {
		var ret SourceGroupType
		return ret
	}
	return *o.SourceGroup
}

// GetSourceGroupOk returns a tuple with the SourceGroup field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SourceGroupToBeChanged) GetSourceGroupOk() (*SourceGroupType, bool) {
	if o == nil || IsNil(o.SourceGroup) {
		return nil, false
	}
	return o.SourceGroup, true
}

// HasSourceGroup returns a boolean if a field has been set.
func (o *SourceGroupToBeChanged) HasSourceGroup() bool {
	if o != nil && !IsNil(o.SourceGroup) {
		return true
	}

	return false
}

// SetSourceGroup gets a reference to the given SourceGroupType and assigns it to the SourceGroup field.
func (o *SourceGroupToBeChanged) SetSourceGroup(v SourceGroupType) {
	o.SourceGroup = &v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *SourceGroupToBeChanged) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SourceGroupToBeChanged) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *SourceGroupToBeChanged) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *SourceGroupToBeChanged) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o SourceGroupToBeChanged) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o SourceGroupToBeChanged) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.SourceGroup) {
		toSerialize["sourceGroup"] = o.SourceGroup
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableSourceGroupToBeChanged struct {
	value *SourceGroupToBeChanged
	isSet bool
}

func (v NullableSourceGroupToBeChanged) Get() *SourceGroupToBeChanged {
	return v.value
}

func (v *NullableSourceGroupToBeChanged) Set(val *SourceGroupToBeChanged) {
	v.value = val
	v.isSet = true
}

func (v NullableSourceGroupToBeChanged) IsSet() bool {
	return v.isSet
}

func (v *NullableSourceGroupToBeChanged) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableSourceGroupToBeChanged(val *SourceGroupToBeChanged) *NullableSourceGroupToBeChanged {
	return &NullableSourceGroupToBeChanged{value: val, isSet: true}
}

func (v NullableSourceGroupToBeChanged) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableSourceGroupToBeChanged) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}



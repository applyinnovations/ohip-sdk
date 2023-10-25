/*
OPERA Cloud CRM Configuration API

APIs for Customer Relationship Management (profile) configuration, such as creating preferences, or address types.  It also includes Membership Configuration, where you can retrieve membership levels that are configured for a property, or create new membership enrollment codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package crmcfg

import (
	"encoding/json"
)

// checks if the BusinessSegmentsToBeChanged type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &BusinessSegmentsToBeChanged{}

// BusinessSegmentsToBeChanged Request object for changing Business Segments.
type BusinessSegmentsToBeChanged struct {
	// List of Business Segments.
	BusinessSegments []BusinessSegmentType `json:"businessSegments,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewBusinessSegmentsToBeChanged instantiates a new BusinessSegmentsToBeChanged object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewBusinessSegmentsToBeChanged() *BusinessSegmentsToBeChanged {
	this := BusinessSegmentsToBeChanged{}
	return &this
}

// NewBusinessSegmentsToBeChangedWithDefaults instantiates a new BusinessSegmentsToBeChanged object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewBusinessSegmentsToBeChangedWithDefaults() *BusinessSegmentsToBeChanged {
	this := BusinessSegmentsToBeChanged{}
	return &this
}

// GetBusinessSegments returns the BusinessSegments field value if set, zero value otherwise.
func (o *BusinessSegmentsToBeChanged) GetBusinessSegments() []BusinessSegmentType {
	if o == nil || IsNil(o.BusinessSegments) {
		var ret []BusinessSegmentType
		return ret
	}
	return o.BusinessSegments
}

// GetBusinessSegmentsOk returns a tuple with the BusinessSegments field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BusinessSegmentsToBeChanged) GetBusinessSegmentsOk() ([]BusinessSegmentType, bool) {
	if o == nil || IsNil(o.BusinessSegments) {
		return nil, false
	}
	return o.BusinessSegments, true
}

// HasBusinessSegments returns a boolean if a field has been set.
func (o *BusinessSegmentsToBeChanged) HasBusinessSegments() bool {
	if o != nil && !IsNil(o.BusinessSegments) {
		return true
	}

	return false
}

// SetBusinessSegments gets a reference to the given []BusinessSegmentType and assigns it to the BusinessSegments field.
func (o *BusinessSegmentsToBeChanged) SetBusinessSegments(v []BusinessSegmentType) {
	o.BusinessSegments = v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *BusinessSegmentsToBeChanged) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BusinessSegmentsToBeChanged) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *BusinessSegmentsToBeChanged) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *BusinessSegmentsToBeChanged) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *BusinessSegmentsToBeChanged) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BusinessSegmentsToBeChanged) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *BusinessSegmentsToBeChanged) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *BusinessSegmentsToBeChanged) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o BusinessSegmentsToBeChanged) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o BusinessSegmentsToBeChanged) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.BusinessSegments) {
		toSerialize["businessSegments"] = o.BusinessSegments
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableBusinessSegmentsToBeChanged struct {
	value *BusinessSegmentsToBeChanged
	isSet bool
}

func (v NullableBusinessSegmentsToBeChanged) Get() *BusinessSegmentsToBeChanged {
	return v.value
}

func (v *NullableBusinessSegmentsToBeChanged) Set(val *BusinessSegmentsToBeChanged) {
	v.value = val
	v.isSet = true
}

func (v NullableBusinessSegmentsToBeChanged) IsSet() bool {
	return v.isSet
}

func (v *NullableBusinessSegmentsToBeChanged) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableBusinessSegmentsToBeChanged(val *BusinessSegmentsToBeChanged) *NullableBusinessSegmentsToBeChanged {
	return &NullableBusinessSegmentsToBeChanged{value: val, isSet: true}
}

func (v NullableBusinessSegmentsToBeChanged) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableBusinessSegmentsToBeChanged) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}



/*
OPERA Cloud CRM Configuration API

APIs for Customer Relationship Management (profile) configuration, such as creating preferences, or address types.  It also includes Membership Configuration, where you can retrieve membership levels that are configured for a property, or create new membership enrollment codes.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.4
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package crmcfg

import (
	"encoding/json"
)

// checks if the DistanceTypesToBeChanged type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &DistanceTypesToBeChanged{}

// DistanceTypesToBeChanged Request object for changing Distance Types.
type DistanceTypesToBeChanged struct {
	// List of Distance Types.
	DistanceTypes []DistanceTypeType `json:"distanceTypes,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewDistanceTypesToBeChanged instantiates a new DistanceTypesToBeChanged object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewDistanceTypesToBeChanged() *DistanceTypesToBeChanged {
	this := DistanceTypesToBeChanged{}
	return &this
}

// NewDistanceTypesToBeChangedWithDefaults instantiates a new DistanceTypesToBeChanged object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewDistanceTypesToBeChangedWithDefaults() *DistanceTypesToBeChanged {
	this := DistanceTypesToBeChanged{}
	return &this
}

// GetDistanceTypes returns the DistanceTypes field value if set, zero value otherwise.
func (o *DistanceTypesToBeChanged) GetDistanceTypes() []DistanceTypeType {
	if o == nil || IsNil(o.DistanceTypes) {
		var ret []DistanceTypeType
		return ret
	}
	return o.DistanceTypes
}

// GetDistanceTypesOk returns a tuple with the DistanceTypes field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DistanceTypesToBeChanged) GetDistanceTypesOk() ([]DistanceTypeType, bool) {
	if o == nil || IsNil(o.DistanceTypes) {
		return nil, false
	}
	return o.DistanceTypes, true
}

// HasDistanceTypes returns a boolean if a field has been set.
func (o *DistanceTypesToBeChanged) HasDistanceTypes() bool {
	if o != nil && !IsNil(o.DistanceTypes) {
		return true
	}

	return false
}

// SetDistanceTypes gets a reference to the given []DistanceTypeType and assigns it to the DistanceTypes field.
func (o *DistanceTypesToBeChanged) SetDistanceTypes(v []DistanceTypeType) {
	o.DistanceTypes = v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *DistanceTypesToBeChanged) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DistanceTypesToBeChanged) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *DistanceTypesToBeChanged) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *DistanceTypesToBeChanged) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *DistanceTypesToBeChanged) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DistanceTypesToBeChanged) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *DistanceTypesToBeChanged) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *DistanceTypesToBeChanged) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o DistanceTypesToBeChanged) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o DistanceTypesToBeChanged) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.DistanceTypes) {
		toSerialize["distanceTypes"] = o.DistanceTypes
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableDistanceTypesToBeChanged struct {
	value *DistanceTypesToBeChanged
	isSet bool
}

func (v NullableDistanceTypesToBeChanged) Get() *DistanceTypesToBeChanged {
	return v.value
}

func (v *NullableDistanceTypesToBeChanged) Set(val *DistanceTypesToBeChanged) {
	v.value = val
	v.isSet = true
}

func (v NullableDistanceTypesToBeChanged) IsSet() bool {
	return v.isSet
}

func (v *NullableDistanceTypesToBeChanged) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableDistanceTypesToBeChanged(val *DistanceTypesToBeChanged) *NullableDistanceTypesToBeChanged {
	return &NullableDistanceTypesToBeChanged{value: val, isSet: true}
}

func (v NullableDistanceTypesToBeChanged) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableDistanceTypesToBeChanged) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}



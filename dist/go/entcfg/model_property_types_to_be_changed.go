/*
OPERA Cloud Enterprise Configuration API

APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package entcfg

import (
	"encoding/json"
)

// checks if the PropertyTypesToBeChanged type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &PropertyTypesToBeChanged{}

// PropertyTypesToBeChanged Request object for changing Property Types.
type PropertyTypesToBeChanged struct {
	Links []InstanceLink `json:"links,omitempty"`
	// List of Property Types.
	PropertyTypes []PropertyTypeType `json:"propertyTypes,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewPropertyTypesToBeChanged instantiates a new PropertyTypesToBeChanged object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewPropertyTypesToBeChanged() *PropertyTypesToBeChanged {
	this := PropertyTypesToBeChanged{}
	return &this
}

// NewPropertyTypesToBeChangedWithDefaults instantiates a new PropertyTypesToBeChanged object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewPropertyTypesToBeChangedWithDefaults() *PropertyTypesToBeChanged {
	this := PropertyTypesToBeChanged{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *PropertyTypesToBeChanged) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PropertyTypesToBeChanged) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *PropertyTypesToBeChanged) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *PropertyTypesToBeChanged) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetPropertyTypes returns the PropertyTypes field value if set, zero value otherwise.
func (o *PropertyTypesToBeChanged) GetPropertyTypes() []PropertyTypeType {
	if o == nil || IsNil(o.PropertyTypes) {
		var ret []PropertyTypeType
		return ret
	}
	return o.PropertyTypes
}

// GetPropertyTypesOk returns a tuple with the PropertyTypes field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PropertyTypesToBeChanged) GetPropertyTypesOk() ([]PropertyTypeType, bool) {
	if o == nil || IsNil(o.PropertyTypes) {
		return nil, false
	}
	return o.PropertyTypes, true
}

// HasPropertyTypes returns a boolean if a field has been set.
func (o *PropertyTypesToBeChanged) HasPropertyTypes() bool {
	if o != nil && !IsNil(o.PropertyTypes) {
		return true
	}

	return false
}

// SetPropertyTypes gets a reference to the given []PropertyTypeType and assigns it to the PropertyTypes field.
func (o *PropertyTypesToBeChanged) SetPropertyTypes(v []PropertyTypeType) {
	o.PropertyTypes = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *PropertyTypesToBeChanged) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PropertyTypesToBeChanged) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *PropertyTypesToBeChanged) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *PropertyTypesToBeChanged) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o PropertyTypesToBeChanged) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o PropertyTypesToBeChanged) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.PropertyTypes) {
		toSerialize["propertyTypes"] = o.PropertyTypes
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullablePropertyTypesToBeChanged struct {
	value *PropertyTypesToBeChanged
	isSet bool
}

func (v NullablePropertyTypesToBeChanged) Get() *PropertyTypesToBeChanged {
	return v.value
}

func (v *NullablePropertyTypesToBeChanged) Set(val *PropertyTypesToBeChanged) {
	v.value = val
	v.isSet = true
}

func (v NullablePropertyTypesToBeChanged) IsSet() bool {
	return v.isSet
}

func (v *NullablePropertyTypesToBeChanged) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullablePropertyTypesToBeChanged(val *PropertyTypesToBeChanged) *NullablePropertyTypesToBeChanged {
	return &NullablePropertyTypesToBeChanged{value: val, isSet: true}
}

func (v NullablePropertyTypesToBeChanged) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullablePropertyTypesToBeChanged) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}



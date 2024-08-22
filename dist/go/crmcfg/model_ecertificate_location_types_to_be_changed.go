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

// checks if the EcertificateLocationTypesToBeChanged type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &EcertificateLocationTypesToBeChanged{}

// EcertificateLocationTypesToBeChanged Request object for changing Ecertificate Location Types.
type EcertificateLocationTypesToBeChanged struct {
	// List of Ecertificate Location Types.
	EcertificateLocationTypes []EcertificateLocationTypeType `json:"ecertificateLocationTypes,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewEcertificateLocationTypesToBeChanged instantiates a new EcertificateLocationTypesToBeChanged object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewEcertificateLocationTypesToBeChanged() *EcertificateLocationTypesToBeChanged {
	this := EcertificateLocationTypesToBeChanged{}
	return &this
}

// NewEcertificateLocationTypesToBeChangedWithDefaults instantiates a new EcertificateLocationTypesToBeChanged object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewEcertificateLocationTypesToBeChangedWithDefaults() *EcertificateLocationTypesToBeChanged {
	this := EcertificateLocationTypesToBeChanged{}
	return &this
}

// GetEcertificateLocationTypes returns the EcertificateLocationTypes field value if set, zero value otherwise.
func (o *EcertificateLocationTypesToBeChanged) GetEcertificateLocationTypes() []EcertificateLocationTypeType {
	if o == nil || IsNil(o.EcertificateLocationTypes) {
		var ret []EcertificateLocationTypeType
		return ret
	}
	return o.EcertificateLocationTypes
}

// GetEcertificateLocationTypesOk returns a tuple with the EcertificateLocationTypes field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EcertificateLocationTypesToBeChanged) GetEcertificateLocationTypesOk() ([]EcertificateLocationTypeType, bool) {
	if o == nil || IsNil(o.EcertificateLocationTypes) {
		return nil, false
	}
	return o.EcertificateLocationTypes, true
}

// HasEcertificateLocationTypes returns a boolean if a field has been set.
func (o *EcertificateLocationTypesToBeChanged) HasEcertificateLocationTypes() bool {
	if o != nil && !IsNil(o.EcertificateLocationTypes) {
		return true
	}

	return false
}

// SetEcertificateLocationTypes gets a reference to the given []EcertificateLocationTypeType and assigns it to the EcertificateLocationTypes field.
func (o *EcertificateLocationTypesToBeChanged) SetEcertificateLocationTypes(v []EcertificateLocationTypeType) {
	o.EcertificateLocationTypes = v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *EcertificateLocationTypesToBeChanged) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EcertificateLocationTypesToBeChanged) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *EcertificateLocationTypesToBeChanged) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *EcertificateLocationTypesToBeChanged) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *EcertificateLocationTypesToBeChanged) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EcertificateLocationTypesToBeChanged) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *EcertificateLocationTypesToBeChanged) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *EcertificateLocationTypesToBeChanged) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o EcertificateLocationTypesToBeChanged) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o EcertificateLocationTypesToBeChanged) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.EcertificateLocationTypes) {
		toSerialize["ecertificateLocationTypes"] = o.EcertificateLocationTypes
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableEcertificateLocationTypesToBeChanged struct {
	value *EcertificateLocationTypesToBeChanged
	isSet bool
}

func (v NullableEcertificateLocationTypesToBeChanged) Get() *EcertificateLocationTypesToBeChanged {
	return v.value
}

func (v *NullableEcertificateLocationTypesToBeChanged) Set(val *EcertificateLocationTypesToBeChanged) {
	v.value = val
	v.isSet = true
}

func (v NullableEcertificateLocationTypesToBeChanged) IsSet() bool {
	return v.isSet
}

func (v *NullableEcertificateLocationTypesToBeChanged) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableEcertificateLocationTypesToBeChanged(val *EcertificateLocationTypesToBeChanged) *NullableEcertificateLocationTypesToBeChanged {
	return &NullableEcertificateLocationTypesToBeChanged{value: val, isSet: true}
}

func (v NullableEcertificateLocationTypesToBeChanged) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableEcertificateLocationTypesToBeChanged) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}



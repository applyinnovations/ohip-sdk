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

// checks if the IndustryCodesCriteria type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &IndustryCodesCriteria{}

// IndustryCodesCriteria Request object for creating Industry Codes.
type IndustryCodesCriteria struct {
	// List of Industry Codes.
	IndustryCodes []IndustryCodeType `json:"industryCodes,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewIndustryCodesCriteria instantiates a new IndustryCodesCriteria object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewIndustryCodesCriteria() *IndustryCodesCriteria {
	this := IndustryCodesCriteria{}
	return &this
}

// NewIndustryCodesCriteriaWithDefaults instantiates a new IndustryCodesCriteria object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewIndustryCodesCriteriaWithDefaults() *IndustryCodesCriteria {
	this := IndustryCodesCriteria{}
	return &this
}

// GetIndustryCodes returns the IndustryCodes field value if set, zero value otherwise.
func (o *IndustryCodesCriteria) GetIndustryCodes() []IndustryCodeType {
	if o == nil || IsNil(o.IndustryCodes) {
		var ret []IndustryCodeType
		return ret
	}
	return o.IndustryCodes
}

// GetIndustryCodesOk returns a tuple with the IndustryCodes field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *IndustryCodesCriteria) GetIndustryCodesOk() ([]IndustryCodeType, bool) {
	if o == nil || IsNil(o.IndustryCodes) {
		return nil, false
	}
	return o.IndustryCodes, true
}

// HasIndustryCodes returns a boolean if a field has been set.
func (o *IndustryCodesCriteria) HasIndustryCodes() bool {
	if o != nil && !IsNil(o.IndustryCodes) {
		return true
	}

	return false
}

// SetIndustryCodes gets a reference to the given []IndustryCodeType and assigns it to the IndustryCodes field.
func (o *IndustryCodesCriteria) SetIndustryCodes(v []IndustryCodeType) {
	o.IndustryCodes = v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *IndustryCodesCriteria) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *IndustryCodesCriteria) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *IndustryCodesCriteria) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *IndustryCodesCriteria) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *IndustryCodesCriteria) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *IndustryCodesCriteria) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *IndustryCodesCriteria) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *IndustryCodesCriteria) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o IndustryCodesCriteria) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o IndustryCodesCriteria) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.IndustryCodes) {
		toSerialize["industryCodes"] = o.IndustryCodes
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableIndustryCodesCriteria struct {
	value *IndustryCodesCriteria
	isSet bool
}

func (v NullableIndustryCodesCriteria) Get() *IndustryCodesCriteria {
	return v.value
}

func (v *NullableIndustryCodesCriteria) Set(val *IndustryCodesCriteria) {
	v.value = val
	v.isSet = true
}

func (v NullableIndustryCodesCriteria) IsSet() bool {
	return v.isSet
}

func (v *NullableIndustryCodesCriteria) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableIndustryCodesCriteria(val *IndustryCodesCriteria) *NullableIndustryCodesCriteria {
	return &NullableIndustryCodesCriteria{value: val, isSet: true}
}

func (v NullableIndustryCodesCriteria) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableIndustryCodesCriteria) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


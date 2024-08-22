/*
OPERA Cloud Enterprise Configuration API

APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.4
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package entcfg

import (
	"encoding/json"
)

// checks if the CountriesToBeChanged type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &CountriesToBeChanged{}

// CountriesToBeChanged Request object for modifying Countries for hotels.
type CountriesToBeChanged struct {
	// Country details.
	Countries []CountryType `json:"countries,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewCountriesToBeChanged instantiates a new CountriesToBeChanged object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCountriesToBeChanged() *CountriesToBeChanged {
	this := CountriesToBeChanged{}
	return &this
}

// NewCountriesToBeChangedWithDefaults instantiates a new CountriesToBeChanged object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCountriesToBeChangedWithDefaults() *CountriesToBeChanged {
	this := CountriesToBeChanged{}
	return &this
}

// GetCountries returns the Countries field value if set, zero value otherwise.
func (o *CountriesToBeChanged) GetCountries() []CountryType {
	if o == nil || IsNil(o.Countries) {
		var ret []CountryType
		return ret
	}
	return o.Countries
}

// GetCountriesOk returns a tuple with the Countries field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CountriesToBeChanged) GetCountriesOk() ([]CountryType, bool) {
	if o == nil || IsNil(o.Countries) {
		return nil, false
	}
	return o.Countries, true
}

// HasCountries returns a boolean if a field has been set.
func (o *CountriesToBeChanged) HasCountries() bool {
	if o != nil && !IsNil(o.Countries) {
		return true
	}

	return false
}

// SetCountries gets a reference to the given []CountryType and assigns it to the Countries field.
func (o *CountriesToBeChanged) SetCountries(v []CountryType) {
	o.Countries = v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *CountriesToBeChanged) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CountriesToBeChanged) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *CountriesToBeChanged) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *CountriesToBeChanged) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *CountriesToBeChanged) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CountriesToBeChanged) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *CountriesToBeChanged) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *CountriesToBeChanged) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o CountriesToBeChanged) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o CountriesToBeChanged) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Countries) {
		toSerialize["countries"] = o.Countries
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableCountriesToBeChanged struct {
	value *CountriesToBeChanged
	isSet bool
}

func (v NullableCountriesToBeChanged) Get() *CountriesToBeChanged {
	return v.value
}

func (v *NullableCountriesToBeChanged) Set(val *CountriesToBeChanged) {
	v.value = val
	v.isSet = true
}

func (v NullableCountriesToBeChanged) IsSet() bool {
	return v.isSet
}

func (v *NullableCountriesToBeChanged) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCountriesToBeChanged(val *CountriesToBeChanged) *NullableCountriesToBeChanged {
	return &NullableCountriesToBeChanged{value: val, isSet: true}
}

func (v NullableCountriesToBeChanged) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCountriesToBeChanged) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}



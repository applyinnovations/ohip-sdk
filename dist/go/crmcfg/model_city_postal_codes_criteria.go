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

// checks if the CityPostalCodesCriteria type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &CityPostalCodesCriteria{}

// CityPostalCodesCriteria Request object for creating new city and postal codes.
type CityPostalCodesCriteria struct {
	// Lists of City and Postal Codes.
	CityPostalCodes []CityPostalCodeType `json:"cityPostalCodes,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewCityPostalCodesCriteria instantiates a new CityPostalCodesCriteria object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCityPostalCodesCriteria() *CityPostalCodesCriteria {
	this := CityPostalCodesCriteria{}
	return &this
}

// NewCityPostalCodesCriteriaWithDefaults instantiates a new CityPostalCodesCriteria object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCityPostalCodesCriteriaWithDefaults() *CityPostalCodesCriteria {
	this := CityPostalCodesCriteria{}
	return &this
}

// GetCityPostalCodes returns the CityPostalCodes field value if set, zero value otherwise.
func (o *CityPostalCodesCriteria) GetCityPostalCodes() []CityPostalCodeType {
	if o == nil || IsNil(o.CityPostalCodes) {
		var ret []CityPostalCodeType
		return ret
	}
	return o.CityPostalCodes
}

// GetCityPostalCodesOk returns a tuple with the CityPostalCodes field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CityPostalCodesCriteria) GetCityPostalCodesOk() ([]CityPostalCodeType, bool) {
	if o == nil || IsNil(o.CityPostalCodes) {
		return nil, false
	}
	return o.CityPostalCodes, true
}

// HasCityPostalCodes returns a boolean if a field has been set.
func (o *CityPostalCodesCriteria) HasCityPostalCodes() bool {
	if o != nil && !IsNil(o.CityPostalCodes) {
		return true
	}

	return false
}

// SetCityPostalCodes gets a reference to the given []CityPostalCodeType and assigns it to the CityPostalCodes field.
func (o *CityPostalCodesCriteria) SetCityPostalCodes(v []CityPostalCodeType) {
	o.CityPostalCodes = v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *CityPostalCodesCriteria) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CityPostalCodesCriteria) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *CityPostalCodesCriteria) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *CityPostalCodesCriteria) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *CityPostalCodesCriteria) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CityPostalCodesCriteria) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *CityPostalCodesCriteria) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *CityPostalCodesCriteria) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o CityPostalCodesCriteria) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o CityPostalCodesCriteria) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.CityPostalCodes) {
		toSerialize["cityPostalCodes"] = o.CityPostalCodes
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableCityPostalCodesCriteria struct {
	value *CityPostalCodesCriteria
	isSet bool
}

func (v NullableCityPostalCodesCriteria) Get() *CityPostalCodesCriteria {
	return v.value
}

func (v *NullableCityPostalCodesCriteria) Set(val *CityPostalCodesCriteria) {
	v.value = val
	v.isSet = true
}

func (v NullableCityPostalCodesCriteria) IsSet() bool {
	return v.isSet
}

func (v *NullableCityPostalCodesCriteria) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCityPostalCodesCriteria(val *CityPostalCodesCriteria) *NullableCityPostalCodesCriteria {
	return &NullableCityPostalCodesCriteria{value: val, isSet: true}
}

func (v NullableCityPostalCodesCriteria) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCityPostalCodesCriteria) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


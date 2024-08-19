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

// checks if the CorporateDepartmentCodesCriteria type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &CorporateDepartmentCodesCriteria{}

// CorporateDepartmentCodesCriteria Request object for creating Corporate Department Codes.
type CorporateDepartmentCodesCriteria struct {
	// List of Corporate Department Codes.
	CorporateDepartmentCodes []CorporateDepartmentCodeType `json:"corporateDepartmentCodes,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewCorporateDepartmentCodesCriteria instantiates a new CorporateDepartmentCodesCriteria object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCorporateDepartmentCodesCriteria() *CorporateDepartmentCodesCriteria {
	this := CorporateDepartmentCodesCriteria{}
	return &this
}

// NewCorporateDepartmentCodesCriteriaWithDefaults instantiates a new CorporateDepartmentCodesCriteria object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCorporateDepartmentCodesCriteriaWithDefaults() *CorporateDepartmentCodesCriteria {
	this := CorporateDepartmentCodesCriteria{}
	return &this
}

// GetCorporateDepartmentCodes returns the CorporateDepartmentCodes field value if set, zero value otherwise.
func (o *CorporateDepartmentCodesCriteria) GetCorporateDepartmentCodes() []CorporateDepartmentCodeType {
	if o == nil || IsNil(o.CorporateDepartmentCodes) {
		var ret []CorporateDepartmentCodeType
		return ret
	}
	return o.CorporateDepartmentCodes
}

// GetCorporateDepartmentCodesOk returns a tuple with the CorporateDepartmentCodes field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CorporateDepartmentCodesCriteria) GetCorporateDepartmentCodesOk() ([]CorporateDepartmentCodeType, bool) {
	if o == nil || IsNil(o.CorporateDepartmentCodes) {
		return nil, false
	}
	return o.CorporateDepartmentCodes, true
}

// HasCorporateDepartmentCodes returns a boolean if a field has been set.
func (o *CorporateDepartmentCodesCriteria) HasCorporateDepartmentCodes() bool {
	if o != nil && !IsNil(o.CorporateDepartmentCodes) {
		return true
	}

	return false
}

// SetCorporateDepartmentCodes gets a reference to the given []CorporateDepartmentCodeType and assigns it to the CorporateDepartmentCodes field.
func (o *CorporateDepartmentCodesCriteria) SetCorporateDepartmentCodes(v []CorporateDepartmentCodeType) {
	o.CorporateDepartmentCodes = v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *CorporateDepartmentCodesCriteria) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CorporateDepartmentCodesCriteria) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *CorporateDepartmentCodesCriteria) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *CorporateDepartmentCodesCriteria) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *CorporateDepartmentCodesCriteria) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CorporateDepartmentCodesCriteria) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *CorporateDepartmentCodesCriteria) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *CorporateDepartmentCodesCriteria) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o CorporateDepartmentCodesCriteria) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o CorporateDepartmentCodesCriteria) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.CorporateDepartmentCodes) {
		toSerialize["corporateDepartmentCodes"] = o.CorporateDepartmentCodes
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableCorporateDepartmentCodesCriteria struct {
	value *CorporateDepartmentCodesCriteria
	isSet bool
}

func (v NullableCorporateDepartmentCodesCriteria) Get() *CorporateDepartmentCodesCriteria {
	return v.value
}

func (v *NullableCorporateDepartmentCodesCriteria) Set(val *CorporateDepartmentCodesCriteria) {
	v.value = val
	v.isSet = true
}

func (v NullableCorporateDepartmentCodesCriteria) IsSet() bool {
	return v.isSet
}

func (v *NullableCorporateDepartmentCodesCriteria) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCorporateDepartmentCodesCriteria(val *CorporateDepartmentCodesCriteria) *NullableCorporateDepartmentCodesCriteria {
	return &NullableCorporateDepartmentCodesCriteria{value: val, isSet: true}
}

func (v NullableCorporateDepartmentCodesCriteria) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCorporateDepartmentCodesCriteria) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}



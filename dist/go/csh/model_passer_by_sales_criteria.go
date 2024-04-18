/*
OPERA Cloud Cashiering API

APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package csh

import (
	"encoding/json"
)

// checks if the PasserBySalesCriteria type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &PasserBySalesCriteria{}

// PasserBySalesCriteria Request to post a set of charges, payments and generate a bill for a PasserBy or for the Post-It functionality . A PasserBy is someone who is not staying at the Property. A PasserBy transaction requires a Profile in Opera for whom the the folio is being created.
type PasserBySalesCriteria struct {
	Criteria *PasserByCriteriaType `json:"criteria,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewPasserBySalesCriteria instantiates a new PasserBySalesCriteria object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewPasserBySalesCriteria() *PasserBySalesCriteria {
	this := PasserBySalesCriteria{}
	return &this
}

// NewPasserBySalesCriteriaWithDefaults instantiates a new PasserBySalesCriteria object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewPasserBySalesCriteriaWithDefaults() *PasserBySalesCriteria {
	this := PasserBySalesCriteria{}
	return &this
}

// GetCriteria returns the Criteria field value if set, zero value otherwise.
func (o *PasserBySalesCriteria) GetCriteria() PasserByCriteriaType {
	if o == nil || IsNil(o.Criteria) {
		var ret PasserByCriteriaType
		return ret
	}
	return *o.Criteria
}

// GetCriteriaOk returns a tuple with the Criteria field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PasserBySalesCriteria) GetCriteriaOk() (*PasserByCriteriaType, bool) {
	if o == nil || IsNil(o.Criteria) {
		return nil, false
	}
	return o.Criteria, true
}

// HasCriteria returns a boolean if a field has been set.
func (o *PasserBySalesCriteria) HasCriteria() bool {
	if o != nil && !IsNil(o.Criteria) {
		return true
	}

	return false
}

// SetCriteria gets a reference to the given PasserByCriteriaType and assigns it to the Criteria field.
func (o *PasserBySalesCriteria) SetCriteria(v PasserByCriteriaType) {
	o.Criteria = &v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *PasserBySalesCriteria) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PasserBySalesCriteria) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *PasserBySalesCriteria) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *PasserBySalesCriteria) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *PasserBySalesCriteria) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PasserBySalesCriteria) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *PasserBySalesCriteria) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *PasserBySalesCriteria) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o PasserBySalesCriteria) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o PasserBySalesCriteria) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Criteria) {
		toSerialize["criteria"] = o.Criteria
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullablePasserBySalesCriteria struct {
	value *PasserBySalesCriteria
	isSet bool
}

func (v NullablePasserBySalesCriteria) Get() *PasserBySalesCriteria {
	return v.value
}

func (v *NullablePasserBySalesCriteria) Set(val *PasserBySalesCriteria) {
	v.value = val
	v.isSet = true
}

func (v NullablePasserBySalesCriteria) IsSet() bool {
	return v.isSet
}

func (v *NullablePasserBySalesCriteria) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullablePasserBySalesCriteria(val *PasserBySalesCriteria) *NullablePasserBySalesCriteria {
	return &NullablePasserBySalesCriteria{value: val, isSet: true}
}

func (v NullablePasserBySalesCriteria) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullablePasserBySalesCriteria) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


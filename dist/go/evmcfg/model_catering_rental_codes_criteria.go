/*
OPERA Cloud Event Configuration API

This API caters for Event Configuration in OPERA Cloud. <br /><There are operations to post, update, fetch and delete codes such as item inventory, function spaces, menu items and many more.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality-integrations_ww@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package evmcfg

import (
	"encoding/json"
)

// checks if the CateringRentalCodesCriteria type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &CateringRentalCodesCriteria{}

// CateringRentalCodesCriteria Request object which holds new Catering Rental Code Details.
type CateringRentalCodesCriteria struct {
	Links []InstanceLink `json:"links,omitempty"`
	// Catering Code details.
	RentalCodes []CateringCodeType `json:"rentalCodes,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewCateringRentalCodesCriteria instantiates a new CateringRentalCodesCriteria object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewCateringRentalCodesCriteria() *CateringRentalCodesCriteria {
	this := CateringRentalCodesCriteria{}
	return &this
}

// NewCateringRentalCodesCriteriaWithDefaults instantiates a new CateringRentalCodesCriteria object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewCateringRentalCodesCriteriaWithDefaults() *CateringRentalCodesCriteria {
	this := CateringRentalCodesCriteria{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *CateringRentalCodesCriteria) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CateringRentalCodesCriteria) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *CateringRentalCodesCriteria) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *CateringRentalCodesCriteria) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetRentalCodes returns the RentalCodes field value if set, zero value otherwise.
func (o *CateringRentalCodesCriteria) GetRentalCodes() []CateringCodeType {
	if o == nil || IsNil(o.RentalCodes) {
		var ret []CateringCodeType
		return ret
	}
	return o.RentalCodes
}

// GetRentalCodesOk returns a tuple with the RentalCodes field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CateringRentalCodesCriteria) GetRentalCodesOk() ([]CateringCodeType, bool) {
	if o == nil || IsNil(o.RentalCodes) {
		return nil, false
	}
	return o.RentalCodes, true
}

// HasRentalCodes returns a boolean if a field has been set.
func (o *CateringRentalCodesCriteria) HasRentalCodes() bool {
	if o != nil && !IsNil(o.RentalCodes) {
		return true
	}

	return false
}

// SetRentalCodes gets a reference to the given []CateringCodeType and assigns it to the RentalCodes field.
func (o *CateringRentalCodesCriteria) SetRentalCodes(v []CateringCodeType) {
	o.RentalCodes = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *CateringRentalCodesCriteria) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *CateringRentalCodesCriteria) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *CateringRentalCodesCriteria) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *CateringRentalCodesCriteria) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o CateringRentalCodesCriteria) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o CateringRentalCodesCriteria) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.RentalCodes) {
		toSerialize["rentalCodes"] = o.RentalCodes
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableCateringRentalCodesCriteria struct {
	value *CateringRentalCodesCriteria
	isSet bool
}

func (v NullableCateringRentalCodesCriteria) Get() *CateringRentalCodesCriteria {
	return v.value
}

func (v *NullableCateringRentalCodesCriteria) Set(val *CateringRentalCodesCriteria) {
	v.value = val
	v.isSet = true
}

func (v NullableCateringRentalCodesCriteria) IsSet() bool {
	return v.isSet
}

func (v *NullableCateringRentalCodesCriteria) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableCateringRentalCodesCriteria(val *CateringRentalCodesCriteria) *NullableCateringRentalCodesCriteria {
	return &NullableCateringRentalCodesCriteria{value: val, isSet: true}
}

func (v NullableCateringRentalCodesCriteria) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableCateringRentalCodesCriteria) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}



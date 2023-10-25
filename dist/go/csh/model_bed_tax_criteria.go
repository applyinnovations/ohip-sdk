/*
OPERA Cloud Cashiering API

APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package csh

import (
	"encoding/json"
)

// checks if the BedTaxCriteria type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &BedTaxCriteria{}

// BedTaxCriteria Request type for change bed transaction info
type BedTaxCriteria struct {
	BedTaxInfoType *BedTaxInfoType `json:"bedTaxInfoType,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewBedTaxCriteria instantiates a new BedTaxCriteria object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewBedTaxCriteria() *BedTaxCriteria {
	this := BedTaxCriteria{}
	return &this
}

// NewBedTaxCriteriaWithDefaults instantiates a new BedTaxCriteria object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewBedTaxCriteriaWithDefaults() *BedTaxCriteria {
	this := BedTaxCriteria{}
	return &this
}

// GetBedTaxInfoType returns the BedTaxInfoType field value if set, zero value otherwise.
func (o *BedTaxCriteria) GetBedTaxInfoType() BedTaxInfoType {
	if o == nil || IsNil(o.BedTaxInfoType) {
		var ret BedTaxInfoType
		return ret
	}
	return *o.BedTaxInfoType
}

// GetBedTaxInfoTypeOk returns a tuple with the BedTaxInfoType field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BedTaxCriteria) GetBedTaxInfoTypeOk() (*BedTaxInfoType, bool) {
	if o == nil || IsNil(o.BedTaxInfoType) {
		return nil, false
	}
	return o.BedTaxInfoType, true
}

// HasBedTaxInfoType returns a boolean if a field has been set.
func (o *BedTaxCriteria) HasBedTaxInfoType() bool {
	if o != nil && !IsNil(o.BedTaxInfoType) {
		return true
	}

	return false
}

// SetBedTaxInfoType gets a reference to the given BedTaxInfoType and assigns it to the BedTaxInfoType field.
func (o *BedTaxCriteria) SetBedTaxInfoType(v BedTaxInfoType) {
	o.BedTaxInfoType = &v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *BedTaxCriteria) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BedTaxCriteria) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *BedTaxCriteria) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *BedTaxCriteria) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *BedTaxCriteria) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BedTaxCriteria) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *BedTaxCriteria) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *BedTaxCriteria) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o BedTaxCriteria) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o BedTaxCriteria) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.BedTaxInfoType) {
		toSerialize["bedTaxInfoType"] = o.BedTaxInfoType
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableBedTaxCriteria struct {
	value *BedTaxCriteria
	isSet bool
}

func (v NullableBedTaxCriteria) Get() *BedTaxCriteria {
	return v.value
}

func (v *NullableBedTaxCriteria) Set(val *BedTaxCriteria) {
	v.value = val
	v.isSet = true
}

func (v NullableBedTaxCriteria) IsSet() bool {
	return v.isSet
}

func (v *NullableBedTaxCriteria) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableBedTaxCriteria(val *BedTaxCriteria) *NullableBedTaxCriteria {
	return &NullableBedTaxCriteria{value: val, isSet: true}
}

func (v NullableBedTaxCriteria) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableBedTaxCriteria) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}



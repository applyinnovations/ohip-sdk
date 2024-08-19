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

// checks if the BrandCodesToBeChanged type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &BrandCodesToBeChanged{}

// BrandCodesToBeChanged Request object for changing Brand Codes.
type BrandCodesToBeChanged struct {
	// List of Brand Codes.
	BrandCodes []BrandCodeType `json:"brandCodes,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewBrandCodesToBeChanged instantiates a new BrandCodesToBeChanged object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewBrandCodesToBeChanged() *BrandCodesToBeChanged {
	this := BrandCodesToBeChanged{}
	return &this
}

// NewBrandCodesToBeChangedWithDefaults instantiates a new BrandCodesToBeChanged object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewBrandCodesToBeChangedWithDefaults() *BrandCodesToBeChanged {
	this := BrandCodesToBeChanged{}
	return &this
}

// GetBrandCodes returns the BrandCodes field value if set, zero value otherwise.
func (o *BrandCodesToBeChanged) GetBrandCodes() []BrandCodeType {
	if o == nil || IsNil(o.BrandCodes) {
		var ret []BrandCodeType
		return ret
	}
	return o.BrandCodes
}

// GetBrandCodesOk returns a tuple with the BrandCodes field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BrandCodesToBeChanged) GetBrandCodesOk() ([]BrandCodeType, bool) {
	if o == nil || IsNil(o.BrandCodes) {
		return nil, false
	}
	return o.BrandCodes, true
}

// HasBrandCodes returns a boolean if a field has been set.
func (o *BrandCodesToBeChanged) HasBrandCodes() bool {
	if o != nil && !IsNil(o.BrandCodes) {
		return true
	}

	return false
}

// SetBrandCodes gets a reference to the given []BrandCodeType and assigns it to the BrandCodes field.
func (o *BrandCodesToBeChanged) SetBrandCodes(v []BrandCodeType) {
	o.BrandCodes = v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *BrandCodesToBeChanged) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BrandCodesToBeChanged) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *BrandCodesToBeChanged) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *BrandCodesToBeChanged) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *BrandCodesToBeChanged) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *BrandCodesToBeChanged) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *BrandCodesToBeChanged) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *BrandCodesToBeChanged) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o BrandCodesToBeChanged) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o BrandCodesToBeChanged) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.BrandCodes) {
		toSerialize["brandCodes"] = o.BrandCodes
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableBrandCodesToBeChanged struct {
	value *BrandCodesToBeChanged
	isSet bool
}

func (v NullableBrandCodesToBeChanged) Get() *BrandCodesToBeChanged {
	return v.value
}

func (v *NullableBrandCodesToBeChanged) Set(val *BrandCodesToBeChanged) {
	v.value = val
	v.isSet = true
}

func (v NullableBrandCodesToBeChanged) IsSet() bool {
	return v.isSet
}

func (v *NullableBrandCodesToBeChanged) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableBrandCodesToBeChanged(val *BrandCodesToBeChanged) *NullableBrandCodesToBeChanged {
	return &NullableBrandCodesToBeChanged{value: val, isSet: true}
}

func (v NullableBrandCodesToBeChanged) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableBrandCodesToBeChanged) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}



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

// checks if the HotelCategoriesCriteria type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &HotelCategoriesCriteria{}

// HotelCategoriesCriteria Request object for creating Hotel Categories.
type HotelCategoriesCriteria struct {
	// List of Hotel Categories.
	HotelCategories []HotelCategoryType `json:"hotelCategories,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewHotelCategoriesCriteria instantiates a new HotelCategoriesCriteria object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewHotelCategoriesCriteria() *HotelCategoriesCriteria {
	this := HotelCategoriesCriteria{}
	return &this
}

// NewHotelCategoriesCriteriaWithDefaults instantiates a new HotelCategoriesCriteria object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewHotelCategoriesCriteriaWithDefaults() *HotelCategoriesCriteria {
	this := HotelCategoriesCriteria{}
	return &this
}

// GetHotelCategories returns the HotelCategories field value if set, zero value otherwise.
func (o *HotelCategoriesCriteria) GetHotelCategories() []HotelCategoryType {
	if o == nil || IsNil(o.HotelCategories) {
		var ret []HotelCategoryType
		return ret
	}
	return o.HotelCategories
}

// GetHotelCategoriesOk returns a tuple with the HotelCategories field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelCategoriesCriteria) GetHotelCategoriesOk() ([]HotelCategoryType, bool) {
	if o == nil || IsNil(o.HotelCategories) {
		return nil, false
	}
	return o.HotelCategories, true
}

// HasHotelCategories returns a boolean if a field has been set.
func (o *HotelCategoriesCriteria) HasHotelCategories() bool {
	if o != nil && !IsNil(o.HotelCategories) {
		return true
	}

	return false
}

// SetHotelCategories gets a reference to the given []HotelCategoryType and assigns it to the HotelCategories field.
func (o *HotelCategoriesCriteria) SetHotelCategories(v []HotelCategoryType) {
	o.HotelCategories = v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *HotelCategoriesCriteria) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelCategoriesCriteria) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *HotelCategoriesCriteria) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *HotelCategoriesCriteria) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *HotelCategoriesCriteria) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *HotelCategoriesCriteria) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *HotelCategoriesCriteria) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *HotelCategoriesCriteria) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o HotelCategoriesCriteria) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o HotelCategoriesCriteria) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.HotelCategories) {
		toSerialize["hotelCategories"] = o.HotelCategories
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableHotelCategoriesCriteria struct {
	value *HotelCategoriesCriteria
	isSet bool
}

func (v NullableHotelCategoriesCriteria) Get() *HotelCategoriesCriteria {
	return v.value
}

func (v *NullableHotelCategoriesCriteria) Set(val *HotelCategoriesCriteria) {
	v.value = val
	v.isSet = true
}

func (v NullableHotelCategoriesCriteria) IsSet() bool {
	return v.isSet
}

func (v *NullableHotelCategoriesCriteria) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableHotelCategoriesCriteria(val *HotelCategoriesCriteria) *NullableHotelCategoriesCriteria {
	return &NullableHotelCategoriesCriteria{value: val, isSet: true}
}

func (v NullableHotelCategoriesCriteria) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableHotelCategoriesCriteria) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}



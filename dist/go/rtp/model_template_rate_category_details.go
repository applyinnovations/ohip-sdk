/*
OPERA Cloud Rate API

APIs to cater for Rate Availability functionality in OPERA Cloud. <br /><br /> Rate Management provides all the tools you need to effectively define and manage the rate structures for a property in OPERA Cloud. Some of the things you can do include creating and managing rate codes, rate classes, rate categories, display sets, rate strategies, as well as managing promotion groups and codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

API version: 23.2
Contact: hospitality_apis_ww_grp@oracle.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package rtp

import (
	"encoding/json"
)

// checks if the TemplateRateCategoryDetails type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &TemplateRateCategoryDetails{}

// TemplateRateCategoryDetails struct for TemplateRateCategoryDetails
type TemplateRateCategoryDetails struct {
	Links []InstanceLink `json:"links,omitempty"`
	// Collection of template rate categories.
	TemplateRateCategories [][]RateCategoryType `json:"templateRateCategories,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewTemplateRateCategoryDetails instantiates a new TemplateRateCategoryDetails object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewTemplateRateCategoryDetails() *TemplateRateCategoryDetails {
	this := TemplateRateCategoryDetails{}
	return &this
}

// NewTemplateRateCategoryDetailsWithDefaults instantiates a new TemplateRateCategoryDetails object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewTemplateRateCategoryDetailsWithDefaults() *TemplateRateCategoryDetails {
	this := TemplateRateCategoryDetails{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *TemplateRateCategoryDetails) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TemplateRateCategoryDetails) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *TemplateRateCategoryDetails) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *TemplateRateCategoryDetails) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetTemplateRateCategories returns the TemplateRateCategories field value if set, zero value otherwise.
func (o *TemplateRateCategoryDetails) GetTemplateRateCategories() [][]RateCategoryType {
	if o == nil || IsNil(o.TemplateRateCategories) {
		var ret [][]RateCategoryType
		return ret
	}
	return o.TemplateRateCategories
}

// GetTemplateRateCategoriesOk returns a tuple with the TemplateRateCategories field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TemplateRateCategoryDetails) GetTemplateRateCategoriesOk() ([][]RateCategoryType, bool) {
	if o == nil || IsNil(o.TemplateRateCategories) {
		return nil, false
	}
	return o.TemplateRateCategories, true
}

// HasTemplateRateCategories returns a boolean if a field has been set.
func (o *TemplateRateCategoryDetails) HasTemplateRateCategories() bool {
	if o != nil && !IsNil(o.TemplateRateCategories) {
		return true
	}

	return false
}

// SetTemplateRateCategories gets a reference to the given [][]RateCategoryType and assigns it to the TemplateRateCategories field.
func (o *TemplateRateCategoryDetails) SetTemplateRateCategories(v [][]RateCategoryType) {
	o.TemplateRateCategories = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *TemplateRateCategoryDetails) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *TemplateRateCategoryDetails) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *TemplateRateCategoryDetails) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *TemplateRateCategoryDetails) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o TemplateRateCategoryDetails) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o TemplateRateCategoryDetails) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.TemplateRateCategories) {
		toSerialize["templateRateCategories"] = o.TemplateRateCategories
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableTemplateRateCategoryDetails struct {
	value *TemplateRateCategoryDetails
	isSet bool
}

func (v NullableTemplateRateCategoryDetails) Get() *TemplateRateCategoryDetails {
	return v.value
}

func (v *NullableTemplateRateCategoryDetails) Set(val *TemplateRateCategoryDetails) {
	v.value = val
	v.isSet = true
}

func (v NullableTemplateRateCategoryDetails) IsSet() bool {
	return v.isSet
}

func (v *NullableTemplateRateCategoryDetails) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableTemplateRateCategoryDetails(val *TemplateRateCategoryDetails) *NullableTemplateRateCategoryDetails {
	return &NullableTemplateRateCategoryDetails{value: val, isSet: true}
}

func (v NullableTemplateRateCategoryDetails) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableTemplateRateCategoryDetails) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}



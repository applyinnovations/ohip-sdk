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

// checks if the PropertyDetailCategoriesDetails type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &PropertyDetailCategoriesDetails{}

// PropertyDetailCategoriesDetails Response object for fetching Property Detail Categories.
type PropertyDetailCategoriesDetails struct {
	// List of Property Detail Categories.
	PropertyDetailCategories []PropertyDetailCategoryType `json:"propertyDetailCategories,omitempty"`
	Links []InstanceLink `json:"links,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewPropertyDetailCategoriesDetails instantiates a new PropertyDetailCategoriesDetails object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewPropertyDetailCategoriesDetails() *PropertyDetailCategoriesDetails {
	this := PropertyDetailCategoriesDetails{}
	return &this
}

// NewPropertyDetailCategoriesDetailsWithDefaults instantiates a new PropertyDetailCategoriesDetails object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewPropertyDetailCategoriesDetailsWithDefaults() *PropertyDetailCategoriesDetails {
	this := PropertyDetailCategoriesDetails{}
	return &this
}

// GetPropertyDetailCategories returns the PropertyDetailCategories field value if set, zero value otherwise.
func (o *PropertyDetailCategoriesDetails) GetPropertyDetailCategories() []PropertyDetailCategoryType {
	if o == nil || IsNil(o.PropertyDetailCategories) {
		var ret []PropertyDetailCategoryType
		return ret
	}
	return o.PropertyDetailCategories
}

// GetPropertyDetailCategoriesOk returns a tuple with the PropertyDetailCategories field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PropertyDetailCategoriesDetails) GetPropertyDetailCategoriesOk() ([]PropertyDetailCategoryType, bool) {
	if o == nil || IsNil(o.PropertyDetailCategories) {
		return nil, false
	}
	return o.PropertyDetailCategories, true
}

// HasPropertyDetailCategories returns a boolean if a field has been set.
func (o *PropertyDetailCategoriesDetails) HasPropertyDetailCategories() bool {
	if o != nil && !IsNil(o.PropertyDetailCategories) {
		return true
	}

	return false
}

// SetPropertyDetailCategories gets a reference to the given []PropertyDetailCategoryType and assigns it to the PropertyDetailCategories field.
func (o *PropertyDetailCategoriesDetails) SetPropertyDetailCategories(v []PropertyDetailCategoryType) {
	o.PropertyDetailCategories = v
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *PropertyDetailCategoriesDetails) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PropertyDetailCategoriesDetails) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *PropertyDetailCategoriesDetails) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *PropertyDetailCategoriesDetails) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *PropertyDetailCategoriesDetails) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PropertyDetailCategoriesDetails) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *PropertyDetailCategoriesDetails) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *PropertyDetailCategoriesDetails) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o PropertyDetailCategoriesDetails) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o PropertyDetailCategoriesDetails) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.PropertyDetailCategories) {
		toSerialize["propertyDetailCategories"] = o.PropertyDetailCategories
	}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullablePropertyDetailCategoriesDetails struct {
	value *PropertyDetailCategoriesDetails
	isSet bool
}

func (v NullablePropertyDetailCategoriesDetails) Get() *PropertyDetailCategoriesDetails {
	return v.value
}

func (v *NullablePropertyDetailCategoriesDetails) Set(val *PropertyDetailCategoriesDetails) {
	v.value = val
	v.isSet = true
}

func (v NullablePropertyDetailCategoriesDetails) IsSet() bool {
	return v.isSet
}

func (v *NullablePropertyDetailCategoriesDetails) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullablePropertyDetailCategoriesDetails(val *PropertyDetailCategoriesDetails) *NullablePropertyDetailCategoriesDetails {
	return &NullablePropertyDetailCategoriesDetails{value: val, isSet: true}
}

func (v NullablePropertyDetailCategoriesDetails) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullablePropertyDetailCategoriesDetails) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


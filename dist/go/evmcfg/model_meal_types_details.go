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

// checks if the MealTypesDetails type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &MealTypesDetails{}

// MealTypesDetails Response object for fetching Meal Types.
type MealTypesDetails struct {
	Links []InstanceLink `json:"links,omitempty"`
	// List of Meal Types.
	MealTypes []MealTypeType `json:"mealTypes,omitempty"`
	// Used in conjunction with the Success element to define a business error.
	Warnings []WarningType `json:"warnings,omitempty"`
}

// NewMealTypesDetails instantiates a new MealTypesDetails object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewMealTypesDetails() *MealTypesDetails {
	this := MealTypesDetails{}
	return &this
}

// NewMealTypesDetailsWithDefaults instantiates a new MealTypesDetails object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewMealTypesDetailsWithDefaults() *MealTypesDetails {
	this := MealTypesDetails{}
	return &this
}

// GetLinks returns the Links field value if set, zero value otherwise.
func (o *MealTypesDetails) GetLinks() []InstanceLink {
	if o == nil || IsNil(o.Links) {
		var ret []InstanceLink
		return ret
	}
	return o.Links
}

// GetLinksOk returns a tuple with the Links field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MealTypesDetails) GetLinksOk() ([]InstanceLink, bool) {
	if o == nil || IsNil(o.Links) {
		return nil, false
	}
	return o.Links, true
}

// HasLinks returns a boolean if a field has been set.
func (o *MealTypesDetails) HasLinks() bool {
	if o != nil && !IsNil(o.Links) {
		return true
	}

	return false
}

// SetLinks gets a reference to the given []InstanceLink and assigns it to the Links field.
func (o *MealTypesDetails) SetLinks(v []InstanceLink) {
	o.Links = v
}

// GetMealTypes returns the MealTypes field value if set, zero value otherwise.
func (o *MealTypesDetails) GetMealTypes() []MealTypeType {
	if o == nil || IsNil(o.MealTypes) {
		var ret []MealTypeType
		return ret
	}
	return o.MealTypes
}

// GetMealTypesOk returns a tuple with the MealTypes field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MealTypesDetails) GetMealTypesOk() ([]MealTypeType, bool) {
	if o == nil || IsNil(o.MealTypes) {
		return nil, false
	}
	return o.MealTypes, true
}

// HasMealTypes returns a boolean if a field has been set.
func (o *MealTypesDetails) HasMealTypes() bool {
	if o != nil && !IsNil(o.MealTypes) {
		return true
	}

	return false
}

// SetMealTypes gets a reference to the given []MealTypeType and assigns it to the MealTypes field.
func (o *MealTypesDetails) SetMealTypes(v []MealTypeType) {
	o.MealTypes = v
}

// GetWarnings returns the Warnings field value if set, zero value otherwise.
func (o *MealTypesDetails) GetWarnings() []WarningType {
	if o == nil || IsNil(o.Warnings) {
		var ret []WarningType
		return ret
	}
	return o.Warnings
}

// GetWarningsOk returns a tuple with the Warnings field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *MealTypesDetails) GetWarningsOk() ([]WarningType, bool) {
	if o == nil || IsNil(o.Warnings) {
		return nil, false
	}
	return o.Warnings, true
}

// HasWarnings returns a boolean if a field has been set.
func (o *MealTypesDetails) HasWarnings() bool {
	if o != nil && !IsNil(o.Warnings) {
		return true
	}

	return false
}

// SetWarnings gets a reference to the given []WarningType and assigns it to the Warnings field.
func (o *MealTypesDetails) SetWarnings(v []WarningType) {
	o.Warnings = v
}

func (o MealTypesDetails) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o MealTypesDetails) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Links) {
		toSerialize["links"] = o.Links
	}
	if !IsNil(o.MealTypes) {
		toSerialize["mealTypes"] = o.MealTypes
	}
	if !IsNil(o.Warnings) {
		toSerialize["warnings"] = o.Warnings
	}
	return toSerialize, nil
}

type NullableMealTypesDetails struct {
	value *MealTypesDetails
	isSet bool
}

func (v NullableMealTypesDetails) Get() *MealTypesDetails {
	return v.value
}

func (v *NullableMealTypesDetails) Set(val *MealTypesDetails) {
	v.value = val
	v.isSet = true
}

func (v NullableMealTypesDetails) IsSet() bool {
	return v.isSet
}

func (v *NullableMealTypesDetails) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableMealTypesDetails(val *MealTypesDetails) *NullableMealTypesDetails {
	return &NullableMealTypesDetails{value: val, isSet: true}
}

func (v NullableMealTypesDetails) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableMealTypesDetails) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

